import { waitFor } from "@testing-library/react";
import progressReducer, {
  fetchProgressData,
  initialState,
  progressSlice,
} from "./ProgressBarsDemoSlice";

describe("Progress bar reducer", () => {
  it("should handle initial state", () => {
    expect(progressReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should handle chnageprogressbar", () => {
    const { changeBarValue } = progressSlice.actions;
    const mockState = {
      loading: false,
      error: "",
      buttons: [-6, 12, 34, 15],
      bars: [34, 68, 12],
      maxLimit: 120,
    };
    const actual = progressReducer(initialState, changeBarValue([34, 68, 12]));
    expect(actual.bars).toEqual(mockState.bars);
  });
});
