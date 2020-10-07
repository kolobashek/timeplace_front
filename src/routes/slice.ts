import { createSlice } from '@reduxjs/toolkit';
import AppRoutes, { AppRoute, AppRoutes as AppRoutesInterface } from '.';
// import { RootState } from '../app/store';

export interface RouetesState {
  current: string;
  title: string,
  routes: AppRoutesInterface;
}

const initialState: RouetesState = {
  current: AppRoutes.Home.pathname,
  title: 'Timeplace',
  routes: AppRoutes,
}

function childsRecusrsion(value: AppRoute, func: (arg: AppRoute) => void) {
  if (value.childs) {
    for (let child of Object.values(value.childs)) {
      childsRecusrsion(child, func)
    }
  }
  return func(value)
}

export const routeStatus = createSlice({
  name: 'ROUTE',
  initialState: initialState,
  reducers: {
    open: (state, action) => {
      Object.entries(state.routes).forEach(
        (([key, route]) => {
          if (action.payload.name === key) {
            route.isCurrent = true;
            // state.current = action.payload.pathname
            return
          }
          route.isCurrent = false
        })
      );
    },
    setRoute: (state, action) => {
      state.current = action.payload
      const title = function () {
        Object.values(state.routes).forEach((value) => {
          const setTitle = (route: AppRoute) => {
            if (action.payload === route.pathname) {
              state.title = route.title
            }
          }
          childsRecusrsion(value, setTitle)
        })
      }
      title()
    }
  }
})

export const routeActions = routeStatus.actions

// export const selectRouteStatus = createSelector(
//   (state: RootState) => state.uikit.route.open,
//   (open) => open
// );

export default routeStatus.reducer;
