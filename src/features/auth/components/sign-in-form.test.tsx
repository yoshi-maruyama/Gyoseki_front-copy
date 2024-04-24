import { fireEvent, screen, waitFor, render } from "@testing-library/react";
import SignInForm from "./sign-in-form";

const mockedNextNavigationFunc = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => mockedNextNavigationFunc(),
  useSearchParams: () => mockedNextNavigationFunc(),
  usePathname: jest.fn().mockReturnValue("/some-route"),
}));

jest.mock("../functions/index", () => ({
  submitHandler: () => null,
}));

describe("Submit form", () => {
  test("with filled should not have error message", async () => {
    render(<SignInForm lang="en" />);
    const emailInput = screen.getByLabelText("Email");
    fireEvent.change(emailInput, { target: { value: "valid@example.com" } });
    const passwordInput = screen.getByLabelText("Password");
    fireEvent.change(passwordInput, { target: { value: "hogehgoe" } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.queryByText("String must contain at least 1 character(s)")).toBeNull();
    });
  });

  test("with empty should have error messages more than 0", async () => {
    render(<SignInForm lang="en" />);
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.queryAllByText("String must contain at least 1 character(s)").length
      ).toBeGreaterThan(0);
    });
  });
});
