import { screen } from "@testing-library/react";
import ConfirmDialog from "../ConfirmDialog";
import { setup } from "../../../../test-utils";

const baseProps = {
  open: true,
  title: "Delete project?",
  body: "This can't be undone.",
  onConfirm: jest.fn(),
  onClose: jest.fn(),
};

describe("ConfirmDialog", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders nothing when closed", () => {
    setup(<ConfirmDialog {...baseProps} open={false} />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  test("renders title and body when open", () => {
    setup(<ConfirmDialog {...baseProps} />);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Delete project?")).toBeInTheDocument();
    expect(screen.getByText("This can't be undone.")).toBeInTheDocument();
  });

  test("calls onConfirm when the confirm button is clicked", async () => {
    const onConfirm = jest.fn();
    const { user } = setup(<ConfirmDialog {...baseProps} onConfirm={onConfirm} />);

    await user.click(screen.getByRole("button", { name: "Confirm" }));

    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  test("calls onClose when the cancel button is clicked", async () => {
    const onClose = jest.fn();
    const { user } = setup(<ConfirmDialog {...baseProps} onClose={onClose} />);

    await user.click(screen.getByRole("button", { name: "Cancel" }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("calls onClose when Escape is pressed", async () => {
    const onClose = jest.fn();
    const { user } = setup(<ConfirmDialog {...baseProps} onClose={onClose} />);

    await user.keyboard("{Escape}");

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("blocks close and disables buttons while pending", async () => {
    const onClose = jest.fn();
    const onConfirm = jest.fn();
    const { user } = setup(
      <ConfirmDialog
        {...baseProps}
        onClose={onClose}
        onConfirm={onConfirm}
        isPending
      />
    );

    await user.keyboard("{Escape}");
    expect(onClose).not.toHaveBeenCalled();

    expect(screen.getByRole("button", { name: "Cancel" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Working…" })).toBeDisabled();
  });

  test("shows pendingLabel on the confirm button while pending", () => {
    setup(
      <ConfirmDialog {...baseProps} isPending pendingLabel="Deleting…" />
    );

    expect(
      screen.getByRole("button", { name: "Deleting…" })
    ).toBeInTheDocument();
  });

  test("does not render an alert when the alert prop is undefined", () => {
    setup(<ConfirmDialog {...baseProps} />);

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  test("renders the alert message when provided", () => {
    setup(
      <ConfirmDialog
        {...baseProps}
        alert={{
          severity: "warning",
          message: "This permanently removes the dataset.",
        }}
      />
    );

    expect(screen.getByRole("alert")).toHaveTextContent(
      "This permanently removes the dataset."
    );
  });

  test("applies the alert severity to the Alert", () => {
    setup(
      <ConfirmDialog
        {...baseProps}
        alert={{ severity: "info", message: "Heads up." }}
      />
    );

    expect(screen.getByRole("alert")).toHaveClass("MuiAlert-standardInfo");
  });

  test("uses neutral styling by default (primary confirm button)", () => {
    setup(<ConfirmDialog {...baseProps} />);

    const confirmButton = screen.getByRole("button", { name: "Confirm" });
    expect(confirmButton).not.toHaveClass("MuiButton-colorError");
    expect(confirmButton).not.toHaveClass("MuiButton-colorWarning");
  });

  test('variant="destructive" applies error color on the confirm button', () => {
    setup(<ConfirmDialog {...baseProps} variant="destructive" />);

    expect(
      screen.getByRole("button", { name: "Confirm" })
    ).toHaveClass("MuiButton-colorError");
  });

  test('variant="warning" applies warning color on the confirm button', () => {
    setup(<ConfirmDialog {...baseProps} variant="warning" />);

    expect(
      screen.getByRole("button", { name: "Confirm" })
    ).toHaveClass("MuiButton-colorWarning");
  });

  test("applies custom id prefix to internal elements", () => {
    setup(<ConfirmDialog {...baseProps} id="delete-project" />);

    expect(screen.getByRole("dialog")).toHaveAttribute("id", "delete-project");
    expect(
      screen.getByRole("button", { name: "Cancel" })
    ).toHaveAttribute("id", "delete-project-cancel");
    expect(
      screen.getByRole("button", { name: "Confirm" })
    ).toHaveAttribute("id", "delete-project-confirm");
  });

  test("wires aria-labelledby to the title id by default", () => {
    setup(<ConfirmDialog {...baseProps} id="delete-project" />);

    expect(screen.getByRole("dialog")).toHaveAttribute(
      "aria-labelledby",
      "delete-project-title"
    );
  });

  test("applies ariaLabel to the dialog when provided", () => {
    setup(
      <ConfirmDialog
        {...baseProps}
        id="delete-project"
        ariaLabel="Delete project confirmation"
      />
    );

    expect(screen.getByRole("dialog")).toHaveAttribute(
      "aria-label",
      "Delete project confirmation"
    );
  });
});
