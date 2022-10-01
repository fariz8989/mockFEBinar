import { createMemoryHistory } from "@remix-run/router";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import Form from "./Form";

test("new form rendered", () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <Form props={{ item: { status:{type: "new" }} }} />
    </Router>
  );
  const newForm = screen.getByTestId("newForm");
  expect(newForm).toBeInTheDocument();
});

test("edit form rendered", () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <Form props={{ item: { status:{type: "edit" }} }} />
    </Router>
  );
  const editForm = screen.getByTestId("editForm");
  expect(editForm).toBeInTheDocument();
});
test("delete form rendered", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Form props={{ item: { status:{type: "delete" }} }} />
      </Router>
    );
    const deleteForm = screen.getByTestId("deleteForm");
    expect(deleteForm).toBeInTheDocument();
  });
