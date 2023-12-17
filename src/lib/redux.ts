import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';

/**
 * Creates an async thunk instead of an action creator.
 * https://redux-toolkit.js.org/api/createSlice/#createasyncthunk
 */
export const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});
