import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test("it will render Simple Player Music", () => {
  // Uji render pertama dan componentDidMount
  act(() => {
    ReactDOM.render(<App />, container);
  });

  const h1El = container.querySelector("h1");
  expect(h1El.textContent).toBe("Simple Player Music");
});
