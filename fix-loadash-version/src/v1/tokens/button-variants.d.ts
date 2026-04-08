/**
 * Button variant tokens - framework agnostic
 * These define our component contract, independent of MUI or any framework
 */
export declare const BUTTON_VARIANTS: {
    readonly primary: {
        readonly label: "Primary";
        readonly description: "Main action button";
    };
    readonly secondary: {
        readonly label: "Secondary";
        readonly description: "Secondary action button";
    };
    readonly tertiary: {
        readonly label: "Tertiary";
        readonly description: "Tertiary action button with neutral color";
    };
    readonly base: {
        readonly label: "Base";
        readonly description: "Unstyled button base";
    };
    readonly text: {
        readonly label: "Text";
        readonly description: "Text button with no background";
    };
};
export type ButtonVariant = keyof typeof BUTTON_VARIANTS;
export declare const BUTTON_SIZES: {
    readonly small: "small";
    readonly medium: "medium";
    readonly large: "large";
};
export type ButtonSize = keyof typeof BUTTON_SIZES;
