import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";

test("username input rendered", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const emailInput = screen.getByTestId("emailForm");
  expect(emailInput).toBeInTheDocument();
});
test("password input rendered", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const passwordInput = screen.getByTestId("passwordForm");
  expect(passwordInput).toBeInTheDocument();
});
test("button rendered", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
test("uusername input should empty", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const emailInput = screen.getByTestId("emailForm");
  expect(emailInput.value).toBe(undefined);
});
test("password input should empty", () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const passwordInput = screen.getByTestId("passwordForm");
  expect(passwordInput.value).toBe(undefined);
});
