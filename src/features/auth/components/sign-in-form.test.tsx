import { fireEvent, screen, waitFor, render } from "@testing-library/react";
import SignInForm from "./sign-in-form";

const mockedUseRouter = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => mockedUseRouter(),
  usePathname: jest.fn().mockReturnValue("/some-route"),
}));

jest.mock("../functions/index", () => ({
  submitHandler: () => null,
}));

describe("Submit form", () => {
  test("with filled should not have error message", async () => {
    render(<SignInForm />);
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
    render(<SignInForm />);
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.queryAllByText("String must contain at least 1 character(s)").length
      ).toBeGreaterThan(0);
    });
  });
});
