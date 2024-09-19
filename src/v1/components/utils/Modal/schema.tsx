import { z } from 'zod';
import { reactElementSchema } from '../../../../schema/reactElementsSchema';

const allModalPropsSchema = z.object({
    open: z.boolean(),
    children: reactElementSchema,
    className: z.string().optional(),
    id: z.string().optional(),
    role: z.string().optional(),
    closeAfterTransition: z.boolean().optional(),
    components: z.any().optional(),
    componentsProps: z.any().optional(),
    container: z.any().optional(),
    disableAutoFocus: z.boolean().optional(),
    disableEnforceFocus: z.boolean().optional(),
    disableEscapeKeyDown: z.boolean().optional(),
    disablePortal: z.boolean().optional(),
    disableRestoreFocus: z.boolean().optional(),
    disableScrollLock: z.boolean().optional(),
    hideBackdrop: z.boolean().optional(),
    keepMounted: z.boolean().optional(),
    manager: z.any().optional(),
    onBackdropClick: z.function().optional(),
    onClose: z.function().optional(),
    onTransitionEnter: z.function().optional(),
    onTransitionExit: z.function().optional(),
    sx: z.any().optional(),
    BackdropComponent: z.any().optional(),
    BackdropProps: z.any().optional(),
    slots: z.any().optional(),
    slotProps: z.any().optional(),
});

export const modalPropsSchema = allModalPropsSchema.omit({
    slots: true,
    slotProps: true,
    BackdropComponent: true,
    BackdropProps: true,
    closeAfterTransition: true,
    components: true,
    componentsProps: true,
    container: true,
    disableAutoFocus: true,
    disableEnforceFocus: true,
    disableEscapeKeyDown: true,
    disableRestoreFocus: true,
    hideBackdrop: true,
    keepMounted: true,
    onBackdropClick: true,
    onTransitionEnter: true,
    onTransitionExit: true
}).passthrough(); // Allow additional properties like 'aria-*' and 'data-*'

// TODO lock this schema to the MUI type
// WHY this is just an approximate 
// HOW 
//  1. improve schema to be exactly the same as `MUIModalProps`
//  2. compare infered type and  MUIModalProps
// WHEN we have lots of spare time
// WHO anyone
