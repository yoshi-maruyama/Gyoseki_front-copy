import { render, screen } from "@testing-library/react";
import AppButton from "./AppButton";

test("AppButton", () => {
  render(<AppButton />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});
