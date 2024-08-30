import { UITheme } from '../colors/theme-colors';

declare const generateComponentOverrides: (uiTheme: UITheme) => {
    MuiAppBar: {
        styleOverrides: {
            root: {
                height: number;
            };
        };
    };
    MuiAlert?: {
        defaultProps?: Partial<import('@mui/material').AlertProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').AlertClasses, "MuiAlert", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').AlertProps> | ((props: Partial<import('@mui/material').AlertProps> & {
                ownerState: Partial<import('@mui/material').AlertProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiAlertTitle?: {
        defaultProps?: Partial<import('@mui/material').AlertTitleProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<"root", "MuiAlertTitle", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').AlertTitleProps> | ((props: Partial<import('@mui/material').AlertTitleProps> & {
                ownerState: Partial<import('@mui/material').AlertTitleProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiAutocomplete?: {
        defaultProps?: Partial<import('@mui/material').AutocompleteProps<any, any, any, any, "div">> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').AutocompleteClasses, "MuiAutocomplete", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').AutocompleteProps<any, any, any, any, "div">> | ((props: Partial<import('@mui/material').AutocompleteProps<any, any, any, any, "div">> & {
                ownerState: Partial<import('@mui/material').AutocompleteProps<any, any, any, any, "div">>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiAvatar?: {
        defaultProps?: Partial<import('@mui/material').AvatarProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').AvatarClasses, "MuiAvatar", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').AvatarProps> | ((props: Partial<import('@mui/material').AvatarProps> & {
                ownerState: Partial<import('@mui/material').AvatarProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiAvatarGroup?: {
        defaultProps?: Partial<import('@mui/material').AvatarGroupProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').AvatarGroupClasses, "MuiAvatarGroup", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').AvatarGroupProps> | ((props: Partial<import('@mui/material').AvatarGroupProps> & {
                ownerState: Partial<import('@mui/material').AvatarGroupProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiBackdrop?: {
        defaultProps?: Partial<import('@mui/material').BackdropProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').BackdropClasses, "MuiBackdrop", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').BackdropProps> | ((props: Partial<import('@mui/material').BackdropProps> & {
                ownerState: Partial<import('@mui/material').BackdropProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiBadge?: {
        defaultProps?: Partial<import('@mui/material').BadgeProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').BadgeClasses, "MuiBadge", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').BadgeProps> | ((props: Partial<import('@mui/material').BadgeProps> & {
                ownerState: Partial<import('@mui/material').BadgeProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiBottomNavigation?: {
        defaultProps?: Partial<import('@mui/material').BottomNavigationProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<"root", "MuiBottomNavigation", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').BottomNavigationProps> | ((props: Partial<import('@mui/material').BottomNavigationProps> & {
                ownerState: Partial<import('@mui/material').BottomNavigationProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiBottomNavigationAction?: {
        defaultProps?: Partial<import('@mui/material').BottomNavigationActionProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').BottomNavigationActionClasses, "MuiBottomNavigationAction", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').BottomNavigationActionProps> | ((props: Partial<import('@mui/material').BottomNavigationActionProps> & {
                ownerState: Partial<import('@mui/material').BottomNavigationActionProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiBreadcrumbs?: {
        defaultProps?: Partial<import('@mui/material').BreadcrumbsProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').BreadcrumbsClasses, "MuiBreadcrumbs", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').BreadcrumbsProps> | ((props: Partial<import('@mui/material').BreadcrumbsProps> & {
                ownerState: Partial<import('@mui/material').BreadcrumbsProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiButton: {
        defaultProps?: Partial<import('@mui/material').ButtonProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ButtonClasses, "MuiButton", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').ButtonProps> | ((props: Partial<import('@mui/material').ButtonProps> & {
                ownerState: Partial<import('@mui/material').ButtonProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | {
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
    MuiButtonBase?: {
        defaultProps?: Partial<import('@mui/material').ButtonBaseProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ButtonBaseClasses, "MuiButtonBase", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').ButtonBaseProps> | ((props: Partial<import('@mui/material').ButtonBaseProps> & {
                ownerState: Partial<import('@mui/material').ButtonBaseProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiButtonGroup?: {
        defaultProps?: Partial<import('@mui/material').ButtonGroupProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ButtonGroupClasses, "MuiButtonGroup", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').ButtonGroupProps> | ((props: Partial<import('@mui/material').ButtonGroupProps> & {
                ownerState: Partial<import('@mui/material').ButtonGroupProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiCard?: {
        defaultProps?: Partial<import('@mui/material').CardProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<"root", "MuiCard", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').CardProps> | ((props: Partial<import('@mui/material').CardProps> & {
                ownerState: Partial<import('@mui/material').CardProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiCardActionArea?: {
        defaultProps?: Partial<import('@mui/material').CardActionAreaProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').CardActionAreaClasses, "MuiCardActionArea", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').CardActionAreaProps> | ((props: Partial<import('@mui/material').CardActionAreaProps> & {
                ownerState: Partial<import('@mui/material').CardActionAreaProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiCardActions?: {
        defaultProps?: Partial<import('@mui/material').CardActionsProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').CardActionsClasses, "MuiCardActions", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').CardActionsProps> | ((props: Partial<import('@mui/material').CardActionsProps> & {
                ownerState: Partial<import('@mui/material').CardActionsProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiCardContent?: {
        defaultProps?: Partial<import('@mui/material').CardContentProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<"root", "MuiCardContent", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').CardContentProps> | ((props: Partial<import('@mui/material').CardContentProps> & {
                ownerState: Partial<import('@mui/material').CardContentProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiCardHeader?: {
        defaultProps?: Partial<import('@mui/material').CardHeaderProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').CardHeaderClasses, "MuiCardHeader", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').CardHeaderProps> | ((props: Partial<import('@mui/material').CardHeaderProps> & {
                ownerState: Partial<import('@mui/material').CardHeaderProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiCardMedia?: {
        defaultProps?: Partial<import('@mui/material').CardMediaProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').CardMediaClasses, "MuiCardMedia", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').CardMediaProps> | ((props: Partial<import('@mui/material').CardMediaProps> & {
                ownerState: Partial<import('@mui/material').CardMediaProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiCheckbox?: {
        defaultProps?: Partial<import('@mui/material').CheckboxProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').CheckboxClasses, "MuiCheckbox", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').CheckboxProps> | ((props: Partial<import('@mui/material').CheckboxProps> & {
                ownerState: Partial<import('@mui/material').CheckboxProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiChip?: {
        defaultProps?: Partial<import('@mui/material').ChipProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ChipClasses, "MuiChip", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').ChipProps> | ((props: Partial<import('@mui/material').ChipProps> & {
                ownerState: Partial<import('@mui/material').ChipProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiCircularProgress?: {
        defaultProps?: Partial<import('@mui/material').CircularProgressProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').CircularProgressClasses, "MuiCircularProgress", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').CircularProgressProps> | ((props: Partial<import('@mui/material').CircularProgressProps> & {
                ownerState: Partial<import('@mui/material').CircularProgressProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiCollapse?: {
        defaultProps?: Partial<import('@mui/material').CollapseProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').CollapseClasses, "MuiCollapse", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').CollapseProps> | ((props: Partial<import('@mui/material').CollapseProps> & {
                ownerState: Partial<import('@mui/material').CollapseProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiContainer?: {
        defaultProps?: Partial<import('@mui/material').ContainerProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ContainerClasses, "MuiContainer", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').ContainerProps> | ((props: Partial<import('@mui/material').ContainerProps> & {
                ownerState: Partial<import('@mui/material').ContainerProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiCssBaseline?: {
        defaultProps?: Partial<import('@mui/material').CssBaselineProps> | undefined;
        styleOverrides?: string | import('@mui/styled-engine').CSSObject | ((theme: Omit<import('@mui/material').Theme, "components">) => import('@mui/styled-engine').CSSInterpolation) | undefined;
        variants?: {
            props: Partial<import('@mui/material').CssBaselineProps> | ((props: Partial<import('@mui/material').CssBaselineProps> & {
                ownerState: Partial<import('@mui/material').CssBaselineProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiDialog?: {
        defaultProps?: Partial<import('@mui/material').DialogProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').DialogClasses, "MuiDialog", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').DialogProps> | ((props: Partial<import('@mui/material').DialogProps> & {
                ownerState: Partial<import('@mui/material').DialogProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiDialogActions?: {
        defaultProps?: Partial<import('@mui/material').DialogActionsProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').DialogActionsClasses, "MuiDialogActions", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').DialogActionsProps> | ((props: Partial<import('@mui/material').DialogActionsProps> & {
                ownerState: Partial<import('@mui/material').DialogActionsProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiDialogContent?: {
        defaultProps?: Partial<import('@mui/material').DialogContentProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').DialogContentClasses, "MuiDialogContent", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').DialogContentProps> | ((props: Partial<import('@mui/material').DialogContentProps> & {
                ownerState: Partial<import('@mui/material').DialogContentProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiDialogContentText?: {
        defaultProps?: Partial<import('@mui/material').DialogContentTextProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<"root", "MuiDialogContentText", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').DialogContentTextProps> | ((props: Partial<import('@mui/material').DialogContentTextProps> & {
                ownerState: Partial<import('@mui/material').DialogContentTextProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiDialogTitle?: {
        defaultProps?: Partial<import('@mui/material').DialogTitleProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<"root", "MuiDialogTitle", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').DialogTitleProps> | ((props: Partial<import('@mui/material').DialogTitleProps> & {
                ownerState: Partial<import('@mui/material').DialogTitleProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiDivider?: {
        defaultProps?: Partial<import('@mui/material').DividerProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').DividerClasses, "MuiDivider", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').DividerProps> | ((props: Partial<import('@mui/material').DividerProps> & {
                ownerState: Partial<import('@mui/material').DividerProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiDrawer?: {
        defaultProps?: Partial<import('@mui/material').DrawerProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').DrawerClasses, "MuiDrawer", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').DrawerProps> | ((props: Partial<import('@mui/material').DrawerProps> & {
                ownerState: Partial<import('@mui/material').DrawerProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiAccordion?: {
        defaultProps?: Partial<import('@mui/material').AccordionProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').AccordionClasses, "MuiAccordion", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').AccordionProps> | ((props: Partial<import('@mui/material').AccordionProps> & {
                ownerState: Partial<import('@mui/material').AccordionProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiAccordionActions?: {
        defaultProps?: Partial<import('@mui/material').AccordionActionsProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').AccordionActionsClasses, "MuiAccordionActions", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').AccordionActionsProps> | ((props: Partial<import('@mui/material').AccordionActionsProps> & {
                ownerState: Partial<import('@mui/material').AccordionActionsProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiAccordionDetails?: {
        defaultProps?: Partial<import('@mui/material').AccordionDetailsProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<"root", "MuiAccordionDetails", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').AccordionDetailsProps> | ((props: Partial<import('@mui/material').AccordionDetailsProps> & {
                ownerState: Partial<import('@mui/material').AccordionDetailsProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiAccordionSummary?: {
        defaultProps?: Partial<import('@mui/material').AccordionSummaryProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').AccordionSummaryClasses, "MuiAccordionSummary", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').AccordionSummaryProps> | ((props: Partial<import('@mui/material').AccordionSummaryProps> & {
                ownerState: Partial<import('@mui/material').AccordionSummaryProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiFab?: {
        defaultProps?: Partial<import('@mui/material').FabProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').FabClasses, "MuiFab", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').FabProps> | ((props: Partial<import('@mui/material').FabProps> & {
                ownerState: Partial<import('@mui/material').FabProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiFilledInput?: {
        defaultProps?: Partial<import('@mui/material').FilledInputProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').FilledInputClasses, "MuiFilledInput", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').FilledInputProps> | ((props: Partial<import('@mui/material').FilledInputProps> & {
                ownerState: Partial<import('@mui/material').FilledInputProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiFormControl?: {
        defaultProps?: Partial<import('@mui/material').FormControlProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').FormControlClasses, "MuiFormControl", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').FormControlProps> | ((props: Partial<import('@mui/material').FormControlProps> & {
                ownerState: Partial<import('@mui/material').FormControlProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiFormControlLabel?: {
        defaultProps?: Partial<import('@mui/material').FormControlLabelProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').FormControlLabelClasses, "MuiFormControlLabel", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').FormControlLabelProps> | ((props: Partial<import('@mui/material').FormControlLabelProps> & {
                ownerState: Partial<import('@mui/material').FormControlLabelProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiFormGroup?: {
        defaultProps?: Partial<import('@mui/material').FormGroupProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').FormGroupClasses, "MuiFormGroup", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').FormGroupProps> | ((props: Partial<import('@mui/material').FormGroupProps> & {
                ownerState: Partial<import('@mui/material').FormGroupProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiFormHelperText?: {
        defaultProps?: Partial<import('@mui/material').FormHelperTextProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').FormHelperTextClasses, "MuiFormHelperText", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').FormHelperTextProps> | ((props: Partial<import('@mui/material').FormHelperTextProps> & {
                ownerState: Partial<import('@mui/material').FormHelperTextProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiFormLabel?: {
        defaultProps?: Partial<import('@mui/material').FormLabelProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').FormLabelClasses, "MuiFormLabel", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').FormLabelProps> | ((props: Partial<import('@mui/material').FormLabelProps> & {
                ownerState: Partial<import('@mui/material').FormLabelProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiGrid?: {
        defaultProps?: Partial<import('@mui/material').GridProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').GridClasses, "MuiGrid", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').GridProps> | ((props: Partial<import('@mui/material').GridProps> & {
                ownerState: Partial<import('@mui/material').GridProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiGrid2?: {
        defaultProps?: Partial<import('@mui/material').Grid2Props> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<"root", "MuiGrid2", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').Grid2Props> | ((props: Partial<import('@mui/material').Grid2Props> & {
                ownerState: Partial<import('@mui/material').Grid2Props>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiImageList?: {
        defaultProps?: Partial<import('@mui/material').ImageListProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ImageListClasses, "MuiImageList", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').ImageListProps> | ((props: Partial<import('@mui/material').ImageListProps> & {
                ownerState: Partial<import('@mui/material').ImageListProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiImageListItem?: {
        defaultProps?: Partial<import('@mui/material').ImageListItemProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ImageListItemClasses, "MuiImageListItem", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').ImageListItemProps> | ((props: Partial<import('@mui/material').ImageListItemProps> & {
                ownerState: Partial<import('@mui/material').ImageListItemProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiImageListItemBar?: {
        defaultProps?: Partial<import('@mui/material').ImageListItemBarProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ImageListItemBarClasses, "MuiImageListItemBar", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').ImageListItemBarProps> | ((props: Partial<import('@mui/material').ImageListItemBarProps> & {
                ownerState: Partial<import('@mui/material').ImageListItemBarProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiIcon?: {
        defaultProps?: Partial<import('@mui/material').IconProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').IconClasses, "MuiIcon", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').IconProps> | ((props: Partial<import('@mui/material').IconProps> & {
                ownerState: Partial<import('@mui/material').IconProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiIconButton: {
        defaultProps?: Partial<import('@mui/material').IconButtonProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').IconButtonClasses, "MuiIconButton", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').IconButtonProps> | ((props: Partial<import('@mui/material').IconButtonProps> & {
                ownerState: Partial<import('@mui/material').IconButtonProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | {
        styleOverrides: {
            root: {
                borderRadius: number;
            };
        };
    };
    MuiInput?: {
        defaultProps?: Partial<import('@mui/material').InputProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').InputClasses, "MuiInput", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').InputProps> | ((props: Partial<import('@mui/material').InputProps> & {
                ownerState: Partial<import('@mui/material').InputProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiInputAdornment?: {
        defaultProps?: Partial<import('@mui/material').InputAdornmentProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').InputAdornmentClasses, "MuiInputAdornment", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').InputAdornmentProps> | ((props: Partial<import('@mui/material').InputAdornmentProps> & {
                ownerState: Partial<import('@mui/material').InputAdornmentProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiInputBase?: {
        defaultProps?: Partial<import('@mui/material').InputBaseProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').InputBaseClasses, "MuiInputBase", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').InputBaseProps> | ((props: Partial<import('@mui/material').InputBaseProps> & {
                ownerState: Partial<import('@mui/material').InputBaseProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiInputLabel?: {
        defaultProps?: Partial<import('@mui/material').InputLabelProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').InputLabelClasses, "MuiInputLabel", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').InputLabelProps> | ((props: Partial<import('@mui/material').InputLabelProps> & {
                ownerState: Partial<import('@mui/material').InputLabelProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiLinearProgress?: {
        defaultProps?: Partial<import('@mui/material').LinearProgressProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').LinearProgressClasses, "MuiLinearProgress", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').LinearProgressProps> | ((props: Partial<import('@mui/material').LinearProgressProps> & {
                ownerState: Partial<import('@mui/material').LinearProgressProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiLink?: {
        defaultProps?: Partial<import('@mui/material').LinkProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').LinkClasses, "MuiLink", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').LinkProps> | ((props: Partial<import('@mui/material').LinkProps> & {
                ownerState: Partial<import('@mui/material').LinkProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiList?: {
        defaultProps?: Partial<import('@mui/material').ListProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ListClasses, "MuiList", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').ListProps> | ((props: Partial<import('@mui/material').ListProps> & {
                ownerState: Partial<import('@mui/material').ListProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiListItem?: {
        defaultProps?: Partial<import('@mui/material').ListItemProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ListItemClasses, "MuiListItem", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').ListItemProps> | ((props: Partial<import('@mui/material').ListItemProps> & {
                ownerState: Partial<import('@mui/material').ListItemProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiListItemButton?: {
        defaultProps?: Partial<import('@mui/material').ListItemButtonProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ListItemButtonClasses, "MuiListItemButton", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').ListItemButtonProps> | ((props: Partial<import('@mui/material').ListItemButtonProps> & {
                ownerState: Partial<import('@mui/material').ListItemButtonProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiListItemAvatar?: {
        defaultProps?: Partial<import('@mui/material').ListItemAvatarProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ListItemAvatarClasses, "MuiListItemAvatar", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').ListItemAvatarProps> | ((props: Partial<import('@mui/material').ListItemAvatarProps> & {
                ownerState: Partial<import('@mui/material').ListItemAvatarProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiListItemIcon?: {
        defaultProps?: Partial<import('@mui/material').ListItemIconProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ListItemIconClasses, "MuiListItemIcon", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').ListItemIconProps> | ((props: Partial<import('@mui/material').ListItemIconProps> & {
                ownerState: Partial<import('@mui/material').ListItemIconProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiListItemSecondaryAction?: {
        defaultProps?: Partial<import('@mui/material').ListItemSecondaryActionProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ListItemSecondaryActionClasses, "MuiListItemSecondaryAction", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').ListItemSecondaryActionProps> | ((props: Partial<import('@mui/material').ListItemSecondaryActionProps> & {
                ownerState: Partial<import('@mui/material').ListItemSecondaryActionProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiListItemText?: {
        defaultProps?: Partial<import('@mui/material').ListItemTextProps<"span", "p">> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ListItemTextClasses, "MuiListItemText", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').ListItemTextProps<"span", "p">> | ((props: Partial<import('@mui/material').ListItemTextProps<"span", "p">> & {
                ownerState: Partial<import('@mui/material').ListItemTextProps<"span", "p">>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiListSubheader?: {
        defaultProps?: Partial<import('@mui/material').ListSubheaderProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ListSubheaderClasses, "MuiListSubheader", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').ListSubheaderProps> | ((props: Partial<import('@mui/material').ListSubheaderProps> & {
                ownerState: Partial<import('@mui/material').ListSubheaderProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiMenu?: {
        defaultProps?: Partial<import('@mui/material').MenuProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').MenuClasses, "MuiMenu", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').MenuProps> | ((props: Partial<import('@mui/material').MenuProps> & {
                ownerState: Partial<import('@mui/material').MenuProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiMenuItem?: {
        defaultProps?: Partial<import('@mui/material').MenuItemProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').MenuItemClasses, "MuiMenuItem", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').MenuItemProps> | ((props: Partial<import('@mui/material').MenuItemProps> & {
                ownerState: Partial<import('@mui/material').MenuItemProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiMenuList?: {
        defaultProps?: Partial<import('@mui/material').MenuListProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ListClasses, "MuiMenuList", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').MenuListProps> | ((props: Partial<import('@mui/material').MenuListProps> & {
                ownerState: Partial<import('@mui/material').MenuListProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiMobileStepper?: {
        defaultProps?: Partial<import('@mui/material').MobileStepperProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').MobileStepperClasses, "MuiMobileStepper", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').MobileStepperProps> | ((props: Partial<import('@mui/material').MobileStepperProps> & {
                ownerState: Partial<import('@mui/material').MobileStepperProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiModal?: {
        defaultProps?: Partial<import('@mui/material').ModalProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ModalClasses, "MuiModal", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').ModalProps> | ((props: Partial<import('@mui/material').ModalProps> & {
                ownerState: Partial<import('@mui/material').ModalProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiNativeSelect?: {
        defaultProps?: Partial<import('@mui/material').NativeSelectProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').NativeSelectClasses, "MuiNativeSelect", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').NativeSelectProps> | ((props: Partial<import('@mui/material').NativeSelectProps> & {
                ownerState: Partial<import('@mui/material').NativeSelectProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiOutlinedInput?: {
        defaultProps?: Partial<import('@mui/material').OutlinedInputProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').OutlinedInputClasses, "MuiOutlinedInput", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').OutlinedInputProps> | ((props: Partial<import('@mui/material').OutlinedInputProps> & {
                ownerState: Partial<import('@mui/material').OutlinedInputProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiPagination?: {
        defaultProps?: Partial<import('@mui/material').PaginationProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').PaginationClasses, "MuiPagination", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').PaginationProps> | ((props: Partial<import('@mui/material').PaginationProps> & {
                ownerState: Partial<import('@mui/material').PaginationProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiPaginationItem?: {
        defaultProps?: Partial<import('@mui/material').PaginationItemProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').PaginationItemClasses, "MuiPaginationItem", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').PaginationItemProps> | ((props: Partial<import('@mui/material').PaginationItemProps> & {
                ownerState: Partial<import('@mui/material').PaginationItemProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiPaper?: {
        defaultProps?: Partial<import('@mui/material').PaperProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').PaperClasses, "MuiPaper", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').PaperProps> | ((props: Partial<import('@mui/material').PaperProps> & {
                ownerState: Partial<import('@mui/material').PaperProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiPopper?: {
        defaultProps?: Partial<import('@mui/material').PopperProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<"root", "MuiPopper", Omit<import('@mui/material').Theme, "components">>> | undefined;
    } | undefined;
    MuiPopover?: {
        defaultProps?: Partial<import('@mui/material').PopoverProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').PopoverClasses, "MuiPopover", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').PopoverProps> | ((props: Partial<import('@mui/material').PopoverProps> & {
                ownerState: Partial<import('@mui/material').PopoverProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiRadio?: {
        defaultProps?: Partial<import('@mui/material').RadioProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').RadioClasses, "MuiRadio", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').RadioProps> | ((props: Partial<import('@mui/material').RadioProps> & {
                ownerState: Partial<import('@mui/material').RadioProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiRadioGroup?: {
        defaultProps?: Partial<import('@mui/material').RadioGroupProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').FormGroupClasses, "MuiRadioGroup", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').RadioGroupProps> | ((props: Partial<import('@mui/material').RadioGroupProps> & {
                ownerState: Partial<import('@mui/material').RadioGroupProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiRating?: {
        defaultProps?: Partial<import('@mui/material').RatingProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').RatingClasses, "MuiRating", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').RatingProps> | ((props: Partial<import('@mui/material').RatingProps> & {
                ownerState: Partial<import('@mui/material').RatingProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiScopedCssBaseline?: {
        defaultProps?: Partial<import('@mui/material').ScopedCssBaselineProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<"root", "MuiScopedCssBaseline", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').ScopedCssBaselineProps> | ((props: Partial<import('@mui/material').ScopedCssBaselineProps> & {
                ownerState: Partial<import('@mui/material').ScopedCssBaselineProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiSelect?: {
        defaultProps?: Partial<import('@mui/material').SelectProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').SelectClasses, "MuiSelect", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').SelectProps> | ((props: Partial<import('@mui/material').SelectProps> & {
                ownerState: Partial<import('@mui/material').SelectProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiSkeleton?: {
        defaultProps?: Partial<import('@mui/material').SkeletonProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').SkeletonClasses, "MuiSkeleton", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').SkeletonProps> | ((props: Partial<import('@mui/material').SkeletonProps> & {
                ownerState: Partial<import('@mui/material').SkeletonProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiSlider?: {
        defaultProps?: Partial<import('@mui/material').SliderProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').SliderClasses, "MuiSlider", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').SliderProps> | ((props: Partial<import('@mui/material').SliderProps> & {
                ownerState: Partial<import('@mui/material').SliderProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiSnackbar?: {
        defaultProps?: Partial<import('@mui/material').SnackbarProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').SnackbarClasses, "MuiSnackbar", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').SnackbarProps> | ((props: Partial<import('@mui/material').SnackbarProps> & {
                ownerState: Partial<import('@mui/material').SnackbarProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiSnackbarContent?: {
        defaultProps?: Partial<import('@mui/material').SnackbarContentProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').SnackbarContentClasses, "MuiSnackbarContent", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').SnackbarContentProps> | ((props: Partial<import('@mui/material').SnackbarContentProps> & {
                ownerState: Partial<import('@mui/material').SnackbarContentProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiSpeedDial?: {
        defaultProps?: Partial<import('@mui/material').SpeedDialProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').SpeedDialClasses, "MuiSpeedDial", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').SpeedDialProps> | ((props: Partial<import('@mui/material').SpeedDialProps> & {
                ownerState: Partial<import('@mui/material').SpeedDialProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiSpeedDialAction?: {
        defaultProps?: Partial<import('@mui/material').SpeedDialActionProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').SpeedDialActionClasses, "MuiSpeedDialAction", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').SpeedDialActionProps> | ((props: Partial<import('@mui/material').SpeedDialActionProps> & {
                ownerState: Partial<import('@mui/material').SpeedDialActionProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiSpeedDialIcon?: {
        defaultProps?: Partial<import('@mui/material').SpeedDialIconProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').SpeedDialIconClasses, "MuiSpeedDialIcon", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').SpeedDialIconProps> | ((props: Partial<import('@mui/material').SpeedDialIconProps> & {
                ownerState: Partial<import('@mui/material').SpeedDialIconProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiStack?: {
        defaultProps?: Partial<import('@mui/material').StackProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<"root", "MuiStack", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').StackProps> | ((props: Partial<import('@mui/material').StackProps> & {
                ownerState: Partial<import('@mui/material').StackProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiStep?: {
        defaultProps?: Partial<import('@mui/material').StepProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').StepClasses, "MuiStep", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').StepProps> | ((props: Partial<import('@mui/material').StepProps> & {
                ownerState: Partial<import('@mui/material').StepProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiStepButton?: {
        defaultProps?: Partial<import('@mui/material').StepButtonProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').StepButtonClasses, "MuiStepButton", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').StepButtonProps> | ((props: Partial<import('@mui/material').StepButtonProps> & {
                ownerState: Partial<import('@mui/material').StepButtonProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiStepConnector?: {
        defaultProps?: Partial<import('@mui/material').StepConnectorProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').StepConnectorClasses, "MuiStepConnector", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').StepConnectorProps> | ((props: Partial<import('@mui/material').StepConnectorProps> & {
                ownerState: Partial<import('@mui/material').StepConnectorProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiStepContent?: {
        defaultProps?: Partial<import('@mui/material').StepContentProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').StepContentClasses, "MuiStepContent", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').StepContentProps> | ((props: Partial<import('@mui/material').StepContentProps> & {
                ownerState: Partial<import('@mui/material').StepContentProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiStepIcon?: {
        defaultProps?: Partial<import('@mui/material').StepIconProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').StepIconClasses, "MuiStepIcon", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').StepIconProps> | ((props: Partial<import('@mui/material').StepIconProps> & {
                ownerState: Partial<import('@mui/material').StepIconProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiStepLabel?: {
        defaultProps?: Partial<import('@mui/material').StepLabelProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').StepLabelClasses, "MuiStepLabel", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').StepLabelProps> | ((props: Partial<import('@mui/material').StepLabelProps> & {
                ownerState: Partial<import('@mui/material').StepLabelProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiStepper?: {
        defaultProps?: Partial<import('@mui/material').StepperProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').StepperClasses, "MuiStepper", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').StepperProps> | ((props: Partial<import('@mui/material').StepperProps> & {
                ownerState: Partial<import('@mui/material').StepperProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiSvgIcon?: {
        defaultProps?: Partial<import('@mui/material').SvgIconProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').SvgIconClasses, "MuiSvgIcon", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').SvgIconProps> | ((props: Partial<import('@mui/material').SvgIconProps> & {
                ownerState: Partial<import('@mui/material').SvgIconProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiSwipeableDrawer?: {
        defaultProps?: Partial<import('@mui/material').SwipeableDrawerProps> | undefined;
    } | undefined;
    MuiSwitch?: {
        defaultProps?: Partial<import('@mui/material').SwitchProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').SwitchClasses, "MuiSwitch", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').SwitchProps> | ((props: Partial<import('@mui/material').SwitchProps> & {
                ownerState: Partial<import('@mui/material').SwitchProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiTab?: {
        defaultProps?: Partial<import('@mui/material').TabProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').TabClasses, "MuiTab", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').TabProps> | ((props: Partial<import('@mui/material').TabProps> & {
                ownerState: Partial<import('@mui/material').TabProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiTable?: {
        defaultProps?: Partial<import('@mui/material').TableProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').TableClasses, "MuiTable", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').TableProps> | ((props: Partial<import('@mui/material').TableProps> & {
                ownerState: Partial<import('@mui/material').TableProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiTableBody?: {
        defaultProps?: Partial<import('@mui/material').TableBodyProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<"root", "MuiTableBody", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').TableBodyProps> | ((props: Partial<import('@mui/material').TableBodyProps> & {
                ownerState: Partial<import('@mui/material').TableBodyProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiTableCell?: {
        defaultProps?: Partial<import('@mui/material').TableCellProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').TableCellClasses, "MuiTableCell", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').TableCellProps> | ((props: Partial<import('@mui/material').TableCellProps> & {
                ownerState: Partial<import('@mui/material').TableCellProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiTableContainer?: {
        defaultProps?: Partial<import('@mui/material').TableContainerProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<"root", "MuiTableContainer", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').TableContainerProps> | ((props: Partial<import('@mui/material').TableContainerProps> & {
                ownerState: Partial<import('@mui/material').TableContainerProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiTableFooter?: {
        defaultProps?: Partial<import('@mui/material').TableFooterProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<"root", "MuiTableFooter", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').TableFooterProps> | ((props: Partial<import('@mui/material').TableFooterProps> & {
                ownerState: Partial<import('@mui/material').TableFooterProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiTableHead?: {
        defaultProps?: Partial<import('@mui/material').TableHeadProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<"root", "MuiTableHead", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').TableHeadProps> | ((props: Partial<import('@mui/material').TableHeadProps> & {
                ownerState: Partial<import('@mui/material').TableHeadProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiTablePagination?: {
        defaultProps?: Partial<import('@mui/material').TablePaginationProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').TablePaginationClasses, "MuiTablePagination", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').TablePaginationProps> | ((props: Partial<import('@mui/material').TablePaginationProps> & {
                ownerState: Partial<import('@mui/material').TablePaginationProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiTableRow?: {
        defaultProps?: Partial<import('@mui/material').TableRowProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').TableRowClasses, "MuiTableRow", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').TableRowProps> | ((props: Partial<import('@mui/material').TableRowProps> & {
                ownerState: Partial<import('@mui/material').TableRowProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiTableSortLabel?: {
        defaultProps?: Partial<import('@mui/material').TableSortLabelProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').TableSortLabelClasses, "MuiTableSortLabel", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').TableSortLabelProps> | ((props: Partial<import('@mui/material').TableSortLabelProps> & {
                ownerState: Partial<import('@mui/material').TableSortLabelProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiTabs?: {
        defaultProps?: Partial<import('@mui/material').TabsProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').TabsClasses, "MuiTabs", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').TabsProps> | ((props: Partial<import('@mui/material').TabsProps> & {
                ownerState: Partial<import('@mui/material').TabsProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiTextField?: {
        defaultProps?: Partial<import('@mui/material').TextFieldProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<"root", "MuiTextField", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').TextFieldProps> | ((props: Partial<import('@mui/material').TextFieldProps> & {
                ownerState: Partial<import('@mui/material').TextFieldProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiToggleButton?: {
        defaultProps?: Partial<import('@mui/material').ToggleButtonProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ToggleButtonClasses, "MuiToggleButton", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').ToggleButtonProps> | ((props: Partial<import('@mui/material').ToggleButtonProps> & {
                ownerState: Partial<import('@mui/material').ToggleButtonProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiToggleButtonGroup?: {
        defaultProps?: Partial<import('@mui/material').ToggleButtonGroupProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ToggleButtonGroupClasses, "MuiToggleButtonGroup", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').ToggleButtonGroupProps> | ((props: Partial<import('@mui/material').ToggleButtonGroupProps> & {
                ownerState: Partial<import('@mui/material').ToggleButtonGroupProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiToolbar?: {
        defaultProps?: Partial<import('@mui/material').ToolbarProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').ToolbarClasses, "MuiToolbar", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').ToolbarProps> | ((props: Partial<import('@mui/material').ToolbarProps> & {
                ownerState: Partial<import('@mui/material').ToolbarProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiTooltip?: {
        defaultProps?: Partial<import('@mui/material').TooltipProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').TooltipClasses, "MuiTooltip", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').TooltipProps> | ((props: Partial<import('@mui/material').TooltipProps> & {
                ownerState: Partial<import('@mui/material').TooltipProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiTouchRipple?: {
        defaultProps?: Partial<import('@mui/material/ButtonBase/TouchRipple').TouchRippleProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').TouchRippleClasses, "MuiTouchRipple", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material/ButtonBase/TouchRipple').TouchRippleProps> | ((props: Partial<import('@mui/material/ButtonBase/TouchRipple').TouchRippleProps> & {
                ownerState: Partial<import('@mui/material/ButtonBase/TouchRipple').TouchRippleProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiTypography?: {
        defaultProps?: Partial<import('@mui/material').TypographyProps> | undefined;
        styleOverrides?: Partial<import('@mui/material/styles/overrides').OverridesStyleRules<keyof import('@mui/material').TypographyClasses, "MuiTypography", Omit<import('@mui/material').Theme, "components">>> | undefined;
        variants?: {
            props: Partial<import('@mui/material').TypographyProps> | ((props: Partial<import('@mui/material').TypographyProps> & {
                ownerState: Partial<import('@mui/material').TypographyProps>;
            }) => boolean);
            style: import('@mui/styled-engine').Interpolation<{
                theme: Omit<import('@mui/material').Theme, "components">;
            }>;
        }[] | undefined;
    } | undefined;
    MuiUseMediaQuery?: {
        defaultProps?: Partial<import('@mui/material').UseMediaQueryOptions> | undefined;
    } | undefined;
};
export default generateComponentOverrides;
