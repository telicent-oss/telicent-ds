import { render, RenderOptions, RenderResult } from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";

export const setup = (
  jsx: JSX.Element,
  options: RenderOptions = {}
): RenderResult & { user: UserEvent } => ({
  user: userEvent.setup(),
  ...render(jsx, options),
});
