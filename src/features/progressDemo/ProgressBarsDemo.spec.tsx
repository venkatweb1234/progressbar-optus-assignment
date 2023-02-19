import { fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { renderWithProviders } from "../../utils/test-utils";
import { ProgressBarsDemo } from "./ProgressBarsDemo";

const mockProgressdata = {
  progressBarData: {
    loading: false,
    error: "",
    buttons: [-6, 12, 34, 56],
    bars: [10, 56, 43],
    maxLimit: 0,
  },
};

describe("ProgressBarsDemo", () => {
  it("should render title", () => {
    renderWithProviders(<ProgressBarsDemo />);
    expect(screen.getByText("Progress Bars Demo")).toBeInTheDocument();
  });

  it("should render progressBarData (bars, buttons, dropdowlist)", () => {
    const { container, getAllByTestId } = renderWithProviders(
      <ProgressBarsDemo />,
      {
        preloadedState: mockProgressdata,
      }
    );

    expect(getAllByTestId("progressbars").length).toEqual(3);
    expect(container.getElementsByTagName("button").length).toEqual(4);
    expect(container.getElementsByTagName("option").length).toEqual(3);
  });

  it("should handle button click", () => {
    const { container, getAllByTestId } = renderWithProviders(
      <ProgressBarsDemo />,
      {
        preloadedState: mockProgressdata,
      }
    );

    const firstBarData = `${mockProgressdata.progressBarData.bars[0]}%`;

    expect(getAllByTestId("progressbars")[0]).toHaveTextContent(firstBarData);
    const firstButton = container.getElementsByTagName("button")[0];
    fireEvent.click(firstButton);
    const modifiedLabel =
      mockProgressdata.progressBarData.bars[0] +
      mockProgressdata.progressBarData.buttons[0];
    expect(getAllByTestId("progressbars")[0]).toHaveTextContent(
      `${modifiedLabel}%`
    );
  });
});
