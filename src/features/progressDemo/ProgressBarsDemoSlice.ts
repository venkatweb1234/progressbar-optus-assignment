import { AppThunk, RootState } from "../../app/store";

import axios from "axios";
import {
  createSlice,
  createAsyncThunk,
  Dispatch,
  PayloadAction,
} from "@reduxjs/toolkit";

export interface progressBarState {
  loading: boolean;
  error: string;
  buttons: number[];
  bars: number[];
  maxLimit: number;
}

//Progress Bar intial state
export const initialState: progressBarState = {
  loading: false,
  error: "",
  buttons: [],
  bars: [],
  maxLimit: 0,
};

// Generates pending, fulfilled and rejected action types
export const fetchProgressData = createAsyncThunk(
  "counter/fetchProgressData",
  async () => {
    const response = await axios.get("http://localhost:8000/progressdata");
    return response.data;
  }
);

//Creating Progress Slice
export const progressSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder: any) => {
    builder.addCase(fetchProgressData.pending, (state: progressBarState) => {
      state.loading = true;
    });
    builder.addCase(
      fetchProgressData.fulfilled,
      (state: progressBarState, action: any) => {
        state.loading = false;
        state.buttons = action.payload.buttons;
        state.bars = action.payload.bars;
        state.maxLimit = action.payload.limit;
        state.error = "";
      }
    );
    builder.addCase(
      fetchProgressData.rejected,
      (state: progressBarState, action: any) => {
        state.error = action.error.message;
      }
    );
  },
  reducers: {
    changeBarValue: (
      state: progressBarState,
      action: PayloadAction<number[]>
    ) => {
      state.bars = action.payload;
    },
  },
});

const { changeBarValue } = progressSlice.actions;

const getExistingButtons = (state: RootState) => state.progressBarData.bars;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const changeProgressBar =
  (barIndex: number, buttonValue: number): AppThunk =>
  (dispatch: Dispatch, getState: any) => {
    const tempBars = [...getExistingButtons(getState())];
    if (tempBars[barIndex] < 0) {
      tempBars[barIndex] = 0;
    } else {
      tempBars[barIndex] = tempBars[barIndex] + buttonValue;
    }

    dispatch(changeBarValue(tempBars));
  };

export default progressSlice.reducer;
