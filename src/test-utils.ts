import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
{}
export const setup = (jsx: JSX.Element, options: RenderOptions = {}) => ({
  user: userEvent.setup(),
  ...render(jsx, options),
});
