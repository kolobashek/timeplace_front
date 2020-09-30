import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/rootReducer';

export interface DrawerState {
  open: boolean;
}

const initialState: DrawerState = {
  open: false,
}

export const drawerStatus = createSlice({
  name: 'DRAWER',
  initialState: initialState,
  reducers: {
    open: (state) => {
      state.open = true
    },
    close: (state) => {
      state.open = false
    },
    reverse: (state) => {
      state.open = !state.open
    }
  }
})

const { open, close, reverse } = drawerStatus.actions
export const drawerActions = { open, close, reverse }

export const selectDrawerStatus = createSelector(
  (state: RootState) => state.uikit.drawer.open,
  (open) => open
);

export default drawerStatus.reducer;