import { screen } from "@testing-library/react";

import App from "./App";
import { renderWithProviders } from "./utils/test-utils";

it("should render title", () => {
  renderWithProviders(<App />);
  expect(screen.getByText("Progress Bars Demo")).toBeInTheDocument();
});
