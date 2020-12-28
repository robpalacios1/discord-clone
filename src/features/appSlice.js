import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'counter',
  initialState: {
    app: 0,
    channelId: null,
    channelName: null
  },
  reducers: {
    setChannelId: (state, action) => {
      state.app = state.app + action.payload;
    },
  },
});

export const { setChannelId } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;
