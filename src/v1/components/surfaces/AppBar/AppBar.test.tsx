import React from "react";
import { setup } from "../../../../test-utils";
import AppBar from "./AppBar";
import { screen, within } from "@testing-library/dom";

describe("AppBar Component", () => {

    test("should render the appName", () => {
        setup(<AppBar appName="AppBar Test" />);
  
      expect(screen.getByText("AppBar Test")).toBeInTheDocument();
    });

    test("should render the startChild component", () => {
       setup(
        <AppBar appName="Design System" startChild={<div id="start-child">Start Child</div>} />
      );
  
  
      expect(screen.getByTestId("start-child")).toBeInTheDocument();
      expect(screen.getByText("Start Child")).toBeInTheDocument();
    });

    test("should render the endChild component", () => {
       setup(
        <AppBar appName="Design System" endChild={<div id="end-child">End Child</div>} />
      );
  

      expect(screen.getByTestId("end-child")).toBeInTheDocument();
      expect(screen.getByText("End Child")).toBeInTheDocument();
    });
  

    test("should render both startChild and endChild components", () => {
   setup(
        <AppBar
          appName="Design System"
          startChild={<div id="start-child">Start Child</div>}
          endChild={<div id="end-child">End Child</div>}
        />
      );

      expect(screen.getByTestId("start-child")).toBeInTheDocument();
      expect(screen.getByText("Start Child")).toBeInTheDocument();
  
      expect(screen.getByTestId("end-child")).toBeInTheDocument();
      expect(screen.getByText("End Child")).toBeInTheDocument();
    });

    test("shoult render the version number", ()=>{
       setup(<AppBar version="1.2.3"/>)

       expect(screen.getByText("1.2.3")).toBeInTheDocument();
    })
  });