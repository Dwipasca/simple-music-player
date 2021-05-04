import { render, fireEvent, cleanup } from "@testing-library/react";

import Player from "./Player";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(cleanup);

let musicInfo = {
  currentTime: 0,
  duration: 0,
};

test("it will render current time music", () => {
  const { getByTestId } = render(<Player musicInfo={musicInfo} />);
  const pEl = getByTestId("music-currentTime");
  const inputEl = getByTestId("music-range");

  expect(pEl.textContent).toBe("0:00");

  fireEvent.change(inputEl, {
    target: {
      value: "1",
    },
  });

  expect(pEl.textContent).toBe("1:00");
});
