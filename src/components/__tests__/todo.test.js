import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Todo from "../todo";

afterEach(() => {
  cleanup();
});

test("should render non completed todo", () => {
  const todo = { id: 1, title: "Wash dishes", completed: false };
  render(<Todo todo={todo} />);
  const todoElem = screen.getByTestId("todo-1");
  expect(todoElem).toBeInTheDocument();
  expect(todoElem).toHaveTextContent("Wash dishes");
  expect(todoElem).not.toContainHTML("<strike>");
});

test("should render completed todo", () => {
  const todo = { id: 2, title: "Wash car", completed: true };
  render(<Todo todo={todo} />);
  const todoElem = screen.getByTestId("todo-2");
  expect(todoElem).toBeInTheDocument();
  expect(todoElem).toHaveTextContent("Wash car");
  expect(todoElem).toContainHTML(
    "<div data-testid='todo-2'><strike><h1>Wash car</h1></strike></div>"
  );
});

test("matches snapshot", () => {
  const todo = { id: 1, title: "Wash dishes", completed: false };
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
  expect(tree).toMatchSnapshot();
});
