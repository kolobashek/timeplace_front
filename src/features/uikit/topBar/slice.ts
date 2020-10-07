import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';

export interface topBarState {
  title: string;
}

const initialState: topBarState = {
  title: 'TimePlace',
}

export const topBarStatus = createSlice({
  name: 'TOP_BAR',
  initialState: initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload
    },
  }
})

export const topBarActions = topBarStatus.actions

export const selectDrawerStatus = createSelector(
  (state: RootState) => state.uikit.topBar.title,
  (title) => title
);

export default topBarStatus.reducer;