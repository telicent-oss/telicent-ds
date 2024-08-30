import { UITheme } from '../../colors/theme-colors';

declare const generateButtonOverrides: (uiTheme: UITheme) => {
    MuiButton: {
        styleOverrides: {
            root: ({ theme }: import('@mui/material').ButtonOwnProps & Omit<import('@mui/material').ButtonBaseOwnProps, "classes"> & import('@mui/material/OverridableComponent').CommonProps & Omit<Omit<import('react').DetailedHTMLProps<import('react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
                ref?: ((instance: HTMLButtonElement | null) => void) | import('react').RefObject<HTMLButtonElement> | null | undefined;
            }, "children" | "className" | "style" | "tabIndex" | "color" | "size" | "href" | "classes" | "sx" | "action" | "variant" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableElevation" | "fullWidth" | "startIcon" | "endIcon" | "disableFocusRipple"> & {
                component?: import('react').ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
            } & Record<string, unknown> & {
                ownerState: import('@mui/material').ButtonOwnProps & Omit<import('@mui/material').ButtonBaseOwnProps, "classes"> & import('@mui/material/OverridableComponent').CommonProps & Omit<Omit<import('react').DetailedHTMLProps<import('react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
                    ref?: ((instance: HTMLButtonElement | null) => void) | import('react').RefObject<HTMLButtonElement> | null | undefined;
                }, "children" | "className" | "style" | "tabIndex" | "color" | "size" | "href" | "classes" | "sx" | "action" | "variant" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableElevation" | "fullWidth" | "startIcon" | "endIcon" | "disableFocusRipple"> & {
                    component?: import('react').ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
                } & Record<string, unknown>;
            } & {
                theme: Omit<import('@mui/material').Theme, "components">;
            }) => {
                paddingInline: string;
            };
            outlinedInherit: ({ theme }: import('@mui/material').ButtonOwnProps & Omit<import('@mui/material').ButtonBaseOwnProps, "classes"> & import('@mui/material/OverridableComponent').CommonProps & Omit<Omit<import('react').DetailedHTMLProps<import('react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
                ref?: ((instance: HTMLButtonElement | null) => void) | import('react').RefObject<HTMLButtonElement> | null | undefined;
            }, "children" | "className" | "style" | "tabIndex" | "color" | "size" | "href" | "classes" | "sx" | "action" | "variant" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableElevation" | "fullWidth" | "startIcon" | "endIcon" | "disableFocusRipple"> & {
                component?: import('react').ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
            } & Record<string, unknown> & {
                ownerState: import('@mui/material').ButtonOwnProps & Omit<import('@mui/material').ButtonBaseOwnProps, "classes"> & import('@mui/material/OverridableComponent').CommonProps & Omit<Omit<import('react').DetailedHTMLProps<import('react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
                    ref?: ((instance: HTMLButtonElement | null) => void) | import('react').RefObject<HTMLButtonElement> | null | undefined;
                }, "children" | "className" | "style" | "tabIndex" | "color" | "size" | "href" | "classes" | "sx" | "action" | "variant" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableElevation" | "fullWidth" | "startIcon" | "endIcon" | "disableFocusRipple"> & {
                    component?: import('react').ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
                } & Record<string, unknown>;
            } & {
                theme: Omit<import('@mui/material').Theme, "components">;
            }) => {
                border: string;
                boxShadow: string;
            };
            outlinedPrimary: ({ theme }: import('@mui/material').ButtonOwnProps & Omit<import('@mui/material').ButtonBaseOwnProps, "classes"> & import('@mui/material/OverridableComponent').CommonProps & Omit<Omit<import('react').DetailedHTMLProps<import('react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
                ref?: ((instance: HTMLButtonElement | null) => void) | import('react').RefObject<HTMLButtonElement> | null | undefined;
            }, "children" | "className" | "style" | "tabIndex" | "color" | "size" | "href" | "classes" | "sx" | "action" | "variant" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableElevation" | "fullWidth" | "startIcon" | "endIcon" | "disableFocusRipple"> & {
                component?: import('react').ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
            } & Record<string, unknown> & {
                ownerState: import('@mui/material').ButtonOwnProps & Omit<import('@mui/material').ButtonBaseOwnProps, "classes"> & import('@mui/material/OverridableComponent').CommonProps & Omit<Omit<import('react').DetailedHTMLProps<import('react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
                    ref?: ((instance: HTMLButtonElement | null) => void) | import('react').RefObject<HTMLButtonElement> | null | undefined;
                }, "children" | "className" | "style" | "tabIndex" | "color" | "size" | "href" | "classes" | "sx" | "action" | "variant" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableElevation" | "fullWidth" | "startIcon" | "endIcon" | "disableFocusRipple"> & {
                    component?: import('react').ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
                } & Record<string, unknown>;
            } & {
                theme: Omit<import('@mui/material').Theme, "components">;
            }) => {
                border: string;
                backgroundColor: string;
                ":hover": {
                    backgroundColor: string;
                };
            };
            startIcon: {
                ">*:nth-last-of-type(1)": {
                    fontSize: string;
                };
            };
            endIcon: {
                ">*:nth-last-of-type(1)": {
                    fontSize: string;
                };
            };
        };
    };
    MuiIconButton: {
        styleOverrides: {
            root: {
                borderRadius: number;
            };
        };
    };
};
export default generateButtonOverrides;
