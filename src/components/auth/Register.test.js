import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Register from "./Register";

test("username input rendered", () => {
  render(
    <Router>
      <Register />
    </Router>
  );
  const nameInput = screen.getByTestId("nameForm");
  expect(nameInput).toBeInTheDocument();
});
test("password input rendered", () => {
  render(
    <Router>
      <Register />
    </Router>
  );
  const passwordInput = screen.getByTestId("passwordForm");
  expect(passwordInput).toBeInTheDocument();
});
test("button rendered", () => {
  render(
    <Router>
      <Register />
    </Router>
  );
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
test("uusername input should empty", () => {
  render(
    <Router>
      <Register />
    </Router>
  );
  const nameInput = screen.getByTestId("nameForm");
  expect(nameInput.value).toBe(undefined);
});
test("password input should empty", () => {
  render(
    <Router>
      <Register />
    </Router>
  );
  const passwordInput = screen.getByTestId("passwordForm");
  expect(passwordInput.value).toBe(undefined);
});
