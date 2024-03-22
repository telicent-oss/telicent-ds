// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { configure } from "@testing-library/react";
import "@testing-library/jest-dom";

configure({ testIdAttribute: "id" });


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
(global.SVGElement.prototype).getComputedTextLength = () => 100;
