import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

export interface DrawerState {
  isOpen: boolean;
}

const initialState: DrawerState = {
  isOpen: false,
}

export const drawerStatus = createSlice({
  name: 'DRAWER',
  initialState: initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    reverse: (state) => {
      state.isOpen = !state.isOpen
    }
  }
})

export const drawerActions = drawerStatus.actions

export const selectDrawerStatus = createSelector(
  (state: RootState) => state.uikit.drawer.isOpen,
  (isOpen) => isOpen
);

export default drawerStatus.reducer;