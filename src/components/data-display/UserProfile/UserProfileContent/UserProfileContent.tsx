import React, { PropsWithChildren } from "react";
import MUIStack from "@mui/material/Stack";
import MUIDivider from "@mui/material/Divider";

export type UserProfileContentProps = PropsWithChildren<{
  /**
   * Menu actions - typically a sign-out button.
   *
   * PROPOSAL, not complete. Rendered below a divider and spaced from the
   * content above, because that is what every consumer already builds by hand
   * around this component. Omit it and nothing renders, so no existing call
   * site changes.
   *
   * Open question: this is a prop because there are only ever one or two
   * buttons. A <UserProfileActions> sub-component would suit a richer footer
   * better. See the PR description.
   */
  actions?: React.ReactNode;
}>;

const UserProfileContent: React.FC<UserProfileContentProps> = ({
  children,
  actions,
}) => (
  <MUIStack rowGap={2}>
    {children}
    {actions != null && (
      <>
        <MUIDivider />
        {/* pt on top of the parent rowGap: the four apps that hand-roll this
            all use pt: 1 after the divider, so the slot reproduces it. */}
        <MUIStack rowGap={1} sx={{ pt: 1 }}>
          {actions}
        </MUIStack>
      </>
    )}
  </MUIStack>
);

export default UserProfileContent;
