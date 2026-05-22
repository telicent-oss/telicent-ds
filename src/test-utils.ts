import { render, RenderOptions, RenderResult } from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";
import { type ReactElement } from "react";

export const setup = (
  jsx: ReactElement,
  options: RenderOptions = {}
): RenderResult & { user: UserEvent } => ({
  user: userEvent.setup(),
  ...render(jsx, options),
});
