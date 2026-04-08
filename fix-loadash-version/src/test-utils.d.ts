import { RenderOptions, RenderResult } from '@testing-library/react';
import { UserEvent } from '@testing-library/user-event';
export declare const setup: (jsx: JSX.Element, options?: RenderOptions) => RenderResult & {
    user: UserEvent;
};
