import React from "react";
import { screen, waitFor } from "@testing-library/react";
import SnackbarProvider from "../SnackbarProvider";
import { snackbar } from "../Snackbar";
import { setup } from "../../../../test-utils";

const Trigger: React.FC<{ onClick: () => void; label?: string }> = ({
  onClick,
  label = "trigger",
}) => (
  <button type="button" onClick={onClick}>
    {label}
  </button>
);

describe("SnackbarProvider", () => {
  test("renders enqueued snackbar via DS content component (with dismiss X)", async () => {
    const Emitter: React.FC = () => (
      <Trigger onClick={() => snackbar({ type: "info", message: "Hello" })} />
    );

    const { user } = setup(
      <SnackbarProvider>
        <Emitter />
      </SnackbarProvider>,
    );

    await user.click(screen.getByRole("button", { name: "trigger" }));

    expect(await screen.findByText("Hello")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Dismiss notification" })).toBeInTheDocument();
  });

  test("X dismisses the snackbar", async () => {
    const Emitter: React.FC = () => (
      <Trigger onClick={() => snackbar({ type: "info", message: "Bye" })} />
    );

    const { user } = setup(
      <SnackbarProvider>
        <Emitter />
      </SnackbarProvider>,
    );

    await user.click(screen.getByRole("button", { name: "trigger" }));
    expect(await screen.findByText("Bye")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Dismiss notification" }));
    await waitFor(() => expect(screen.queryByText("Bye")).not.toBeInTheDocument());
  });

  test("action composes alongside the X (both rendered)", async () => {
    const Emitter: React.FC = () => (
      <Trigger
        onClick={() =>
          snackbar({
            type: "error",
            message: "Failed",
            action: <button type="button">Retry</button>,
          })
        }
      />
    );

    const { user } = setup(
      <SnackbarProvider>
        <Emitter />
      </SnackbarProvider>,
    );

    await user.click(screen.getByRole("button", { name: "trigger" }));

    expect(await screen.findByRole("button", { name: "Retry" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Dismiss notification" })).toBeInTheDocument();
  });

  test("Components override merges onto DS defaults (untouched types keep DS content)", async () => {
    const CustomError = React.forwardRef<HTMLDivElement, { message: React.ReactNode }>(
      ({ message }, ref) => (
        <div ref={ref} id="custom-error">
          {message}
        </div>
      ),
    );
    CustomError.displayName = "CustomError";

    const Emitter: React.FC = () => (
      <>
        <Trigger
          label="err"
          onClick={() => snackbar({ type: "error", message: "boom" })}
        />
        <Trigger
          label="ok"
          onClick={() => snackbar({ type: "success", message: "yay" })}
        />
      </>
    );

    const { user } = setup(
      <SnackbarProvider Components={{ error: CustomError }}>
        <Emitter />
      </SnackbarProvider>,
    );

    await user.click(screen.getByRole("button", { name: "err" }));
    await waitFor(() => expect(screen.getByTestId("custom-error")).toBeInTheDocument(), {
      timeout: 3000,
    });

    await user.click(screen.getByRole("button", { name: "ok" }));
    // Success still routed through DS Snackbar — it has the Dismiss X
    await waitFor(
      () => expect(screen.getByRole("button", { name: "Dismiss notification" })).toBeInTheDocument(),
      { timeout: 3000 },
    );
  });

  test("auto-hide fires uniformly for every type", async () => {
    const Emitter: React.FC = () => (
      <Trigger onClick={() => snackbar({ type: "error", message: "will fade" })} />
    );

    const { user } = setup(
      <SnackbarProvider autoHideDuration={50}>
        <Emitter />
      </SnackbarProvider>,
    );

    await user.click(screen.getByRole("button", { name: "trigger" }));
    expect(await screen.findByText("will fade")).toBeInTheDocument();

    await waitFor(() => expect(screen.queryByText("will fade")).not.toBeInTheDocument(), {
      timeout: 2000,
    });
  });
});
