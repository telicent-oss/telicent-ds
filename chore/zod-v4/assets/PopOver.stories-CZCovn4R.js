import{R as f,b as s,a as e,F as k}from"./iframe-Djv8ktra.js";import{B as r}from"./EntityList-CmXEoAc2.js";import{T as d}from"./Text-Y9XZ_yHR.js";import{F as m}from"./FlexBox-Do_i3sJ9.js";import{P as p}from"./_IconPopover-BLyK2_eM.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./styled-DTBkkZW7.js";import"./extendSxProp-Bg6AHp8L.js";import"./ListContext-DOkPQ55E.js";import"./ListItem-DgF_KQ7w.js";import"./FormControl-KHlRX9wq.js";import"./useFormControl-yjc7eBp6.js";import"./composeClasses-fLhin0tj.js";import"./TransitionGroupContext-BAmDsqe-.js";import"./resolveComponentProps-BCG5tMa5.js";import"./ButtonBase-BsGOhoOZ.js";import"./Toolbar-zYbL7pMK.js";import"./TextField-FyiAyxRB.js";import"./Modal-CbQrDciN.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-D4VVjH6n.js";import"./index-CVsYjqM0.js";import"./index-CwsYzhsj.js";import"./utils-B6N13bq2.js";import"./Popover-B86b2_k9.js";import"./Paper-1JE7t4a2.js";import"./useControlled-BYl-fCxX.js";import"./createSvgIcon-DZnw1m24.js";import"./SvgIcon-DECtGhh0.js";import"./FormHelperText-D2wijesy.js";import"./Close-uaArJQbm.js";import"./Popper-CRx9JkVY.js";import"./Badge-Bne_esn3.js";import"./Chip-Df5TxRX3.js";import"./IconButton-D0URHQdC.js";import"./FormControlLabel-Dl4rNMyO.js";import"./Typography-Dq-Ciojh.js";import"./Stack-DjL-eZhY.js";import"./styled-CpIMtI8p.js";import"./createStyled-C4labjHn.js";import"./useThemeProps-2HbMDrfU.js";import"./MenuItem-BrTfhZTz.js";import"./dividerClasses-CaIblDIL.js";import"./Button-DwhmFZ5z.js";import"./MapToggleButtonPresentational-9yu7-Ilq.js";import"./Remove-UDhVurmI.js";import"./Box-C9osqYpn.js";import"./ExpandLessIcon-C3pwZ4Pc.js";import"./Box-Cvy3NsGq.js";import"./Container-D5lO9yGB.js";import"./CogIcon-CT9n-ILh.js";import"./InfoIcon-CHj9CFVM.js";import"./ExpandMoreIcon-teVtSgL8.js";import"./ThemeSwitchRow-H2pqK7Sf.js";import"./index-8FsRt4pB.js";import"./IconButton-CerlmnQB.js";import"./Badge-CMOuLR30.js";import"./Chip-CxSld7rQ.js";import"./Divider-C9GgdKvp.js";import"./Divider-BQgZCPEt.js";import"./TreeView-CmgLkcRM.js";import"./useThemeProps-DvIlKj6P.js";import"./Collapse-BPTOiYJG.js";import"./useSlot-DS97Xucj.js";import"./AppInfoRow-C5ZQnBbJ.js";import"./AppSettings-CSEbvKPB.js";import"./SvgIcon-DcOD0BqO.js";import"./TableRow-zzNEo6q7.js";import"./TableCell-Bunj5ZcK.js";import"./Skeleton-Kydo8R4j.js";import"./Skeleton-CnHTnMO_.js";import"./Edit-BKmGEAwu.js";import"./LinearProgress-DdDDCrSp.js";import"./LinearProgress-DK1T17kM.js";import"./Spinner-CZ5RlgS9.js";import"./CircularProgress-DH002ZiD.js";import"./Dialog-CNnh_iBj.js";import"./DialogContent-6oCYEZl_.js";import"./Alert-BVz-9DlK.js";import"./ToggleButton-GvPbRr0J.js";import"./ToggleButton-CFoTEcuq.js";import"./ToggleButtonGroup-BS0uvyOk.js";import"./LinkButton-CYrYI8ff.js";import"./TextField-DZFwm5FK.js";import"./Switch-Ckcfd9qm.js";import"./Switch-DP0w0isr.js";import"./LabeledSwitch-Boji5GC-.js";import"./RadioGroup-CHfeD9PB.js";import"./FormControl-DEhUdqs_.js";import"./FormHelperText-B0uW7-Qr.js";import"./Tabs-DLjDcbju.js";import"./MenuItem-DaXvOOwF.js";import"./AccordionDetails-CqSaJtGy.js";import"./Paper-IIlbTA42.js";import"./ErrorFallback-ei1UHZWN.js";import"./ErrorFallbackText-CuxdV7zC.js";import"./ErrorFallbackWrapper-C5pNwo6x.js";import"./Brand-4F19u9Fh.js";const{fn:F}=__STORYBOOK_MODULE_TEST__,wt={title:"Surfaces/PopOver",component:p,tags:["autodocs"],args:{onClose:F()},parameters:{docs:{description:{component:'\nDismissible modal-style surface anchored to another element. Thin wrapper over MUI\'s `Popover` with two DS opinions: elevation baked to `3`, and a `width` convenience prop that sets a fixed paper width.\n\nMUI\'s `Popover` composes Modal + Paper + Popper-style positioning: click-outside dismisses, Escape dismisses, focus is trapped inside while open, and content sits on a raised paper surface. The DS wrapper keeps that contract intact and adds two conveniences.\n\n---\n\n### The opinion\n\n- **`elevation` defaults to `3`.** The DS\'s mid-range shadow — high enough to read as "temporary overlay", not so high it competes with a Dialog. Pass `elevation={n}` to override.\n- **`width` sets a fixed paper width via `slotProps`.** Reach for it when the callsite needs a specific width (a filter panel expected to match a column, a menu with long labels). Skip it for content that should size to its contents.\n\nEvery other MUI `Popover` prop passes through unchanged, spread last, so a callsite can override any DS default.\n\n---\n\n### When to use which\n\n`PopOver` vs `Popper` vs `Tooltip` vs `Menu` — same shape (float content beside an anchor), different contract:\n\n| Component | Backdrop | Click-outside dismiss | Focus trap | Paper surface | Reach for it when |\n| --- | :---: | :---: | :---: | :---: | --- |\n| `PopOver` | ✓ | ✓ | ✓ | ✓ (`elevation={3}`) | The floating content is interactive and modal in nature — a context menu, a filter panel, a user menu, a mini-form. |\n| `Popper` | ✗ | ✗ | ✗ | ✗ | You want *just* positioning — a typeahead listbox, a hover card, a floating label. You\'ll bring your own container and dismiss. |\n| `Tooltip` | ✗ | — | ✗ | ✓ (small chip) | Passive, hover-triggered hint. Not interactive. |\n| `DropdownButton` / `Menu` | ✗ | ✓ | ✓ | ✓ | A button that opens a menu of actions — the DS\'s opinionated shape for the "trigger + list" case. |\n\nThe bright line: **is the floating content interactive?** If yes, and the user\'s focus should be trapped there until they dismiss it, use `PopOver`. If the content is a passive hint or you\'re building your own dismiss (e.g. an autocomplete listbox whose lifecycle is tied to input blur), use `Popper`. If it\'s a "trigger + list of actions" and both live together, reach for `DropdownButton` first — `PopOver` is the primitive, `DropdownButton` is the ready-made shape.\n\n---\n\n### Focus and dismiss\n\nBecause `PopOver` is built on Modal:\n\n- **Focus is trapped** inside the popover while open — Tab/Shift+Tab cycle through focusable descendants.\n- **Escape closes** — fires `onClose(event, "escapeKeyDown")`.\n- **Click outside closes** — fires `onClose(event, "backdropClick")`. Distinguish the reason if you need to suppress one (a filter panel might dismiss on outside click but require a "Cancel" button for Escape).\n- **Focus is restored** to the previously-focused element on close — usually the anchor button.\n- **A backdrop is rendered** behind the paper. It\'s transparent by default, but consumes clicks — nothing under the popover receives them until it closes.\n\nIf any of those are wrong for your case, you almost certainly want `Popper` instead.\n\n---\n\n### Positioning\n\nPositioning is Cartesian — `anchorOrigin` picks a point on the anchor, `transformOrigin` picks a point on the popover paper, and the two are aligned. Both accept `{ vertical, horizontal }` with named ends (`top` / `center` / `bottom` / `left` / `right`) or pixel offsets.\n\nFor pointing at a coordinate rather than an element, set `anchorReference="anchorPosition"` and pass `anchorPosition={{ top, left }}`. Useful for right-click context menus.\n\n---\n\n### Defaults\n\n- `elevation`: `3` — via the wrapper. Override with `elevation={n}`.\n- `width`: undefined — passing a number renders a fixed-width paper via `slotProps.paper`.\n- Everything else follows MUI\'s `Popover` defaults (`anchorOrigin` `{ vertical: "top", horizontal: "left" }`, `anchorReference` `"anchorEl"`, backdrop transparent, focus trapped).\n\n---\n\n### Other supported features\n\nEvery MUI `Popover` prop passes through: `open` / `onClose`, `anchorEl`, `anchorOrigin` / `transformOrigin`, `anchorReference` / `anchorPosition`, `marginThreshold`, `disableAutoFocus` / `disableEnforceFocus` / `disableRestoreFocus` (escape hatches for a11y edge cases), `transitionDuration`, `slots` / `slotProps`.\n\n---\n\n### Example\n\n```tsx\nimport { PopOver, Text, Button, FlexBox } from "@telicent-oss/ds";\nimport { useRef, useState } from "react";\n\nconst FilterMenu = () => {\n  const anchorRef = useRef<HTMLButtonElement>(null);\n  const [open, setOpen] = useState(false);\n\n  return (\n    <>\n      <Button ref={anchorRef} onClick={() => setOpen(true)}>\n        Filters\n      </Button>\n\n      <PopOver\n        open={open}\n        anchorEl={anchorRef.current}\n        onClose={() => setOpen(false)}\n        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}\n        transformOrigin={{ vertical: "top", horizontal: "left" }}\n        width={320}\n      >\n        <FlexBox direction="column" gap={1} sx={{ p: 2 }}>\n          <Text variant="h3">Filter results</Text>\n          {/* form fields */}\n        </FlexBox>\n      </PopOver>\n    </>\n  );\n};\n```\n        '}}},argTypes:{open:{control:"boolean",description:"Whether the popover is mounted and visible. Controlled — hold it in the consumer.",table:{type:{summary:"boolean"},category:"PopOver"}},onClose:{control:!1,description:'Fired with `(event, reason)` when the popover requests dismissal. `reason` is `"backdropClick"` or `"escapeKeyDown"` — inspect it if you need to distinguish the two.',table:{type:{summary:'(event: {}, reason: "backdropClick" | "escapeKeyDown") => void'},category:"PopOver"}},anchorEl:{control:!1,description:'The DOM element the popover is positioned against. Usually a button\'s ref `.current`. Ignored when `anchorReference="anchorPosition"`.',table:{type:{summary:"Element | (() => Element) | null"},category:"PopOver"}},anchorOrigin:{control:!1,description:"Point on the anchor where the popover attaches. `{ vertical: 'top' | 'center' | 'bottom' | number, horizontal: 'left' | 'center' | 'right' | number }`.",table:{defaultValue:{summary:'{ vertical: "top", horizontal: "left" }'},category:"PopOver"}},transformOrigin:{control:!1,description:"Point on the popover paper that aligns with the anchor's `anchorOrigin`.",table:{defaultValue:{summary:'{ vertical: "top", horizontal: "left" }'},category:"PopOver"}},anchorReference:{control:"radio",options:["anchorEl","anchorPosition","none"],description:'Which anchoring mode to use. `"anchorEl"` (default) reads `anchorEl`; `"anchorPosition"` reads `anchorPosition={{ top, left }}` — useful for right-click menus. `"none"` positions at (0,0).',table:{defaultValue:{summary:"anchorEl"},category:"PopOver"}},width:{control:{type:"number",min:120,max:640,step:20},description:"DS convenience: fixed width on the paper, in pixels. Emitted as `slotProps={{ paper: { sx: { width } } }}` so it composes with any callsite `slotProps`.",table:{type:{summary:"number"},category:"PopOver (DS)"}}}},c={args:{open:!1},parameters:{docs:{description:{story:"The base shape every other story varies. Click the button, a paper surface opens beneath it, dismiss via Escape or clicking outside. Note the focus trap: pressing Tab inside the popover cycles through its focusable descendants, not the surrounding page."}}},render:i=>{const[t,o]=f.useState(null);return s("div",{children:[e(r,{onClick:a=>o(a.currentTarget),children:"Open PopOver"}),e(p,{...i,open:!!t,anchorEl:t,onClose:()=>o(null),anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:e(d,{sx:{p:2},children:"The content of the popover."})})]})}},l={args:{open:!1,width:320},parameters:{docs:{description:{story:"The DS `width` prop sets a fixed paper width via `slotProps`. Reach for it when the surface needs to match a specific column or hold labels of a known length. Omit it for content that should hug its intrinsic width."}}},render:i=>{const[t,o]=f.useState(null);return s("div",{children:[e(r,{onClick:a=>o(a.currentTarget),children:"Filter results"}),e(p,{...i,open:!!t,anchorEl:t,onClose:()=>o(null),anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:s(m,{direction:"column",gap:1,sx:{p:2},children:[e(d,{variant:"h3",children:"Filter results"}),e(d,{variant:"body2",children:"Paper is fixed at 320px regardless of content width."})]})})]})}},h={args:{open:!1},parameters:{docs:{description:{story:"The canonical `PopOver` use case: a user menu opened from an avatar. Interactive content (buttons), focus trapped while open, click-outside or Escape dismisses. For a plainer button + list-of-actions shape, prefer `DropdownButton` — this story exists to show the primitive underneath."}}},render:i=>{const[t,o]=f.useState(null);return s("div",{children:[e(r,{onClick:a=>o(a.currentTarget),children:"John Doe"}),e(p,{...i,open:!!t,anchorEl:t,onClose:()=>o(null),anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},width:200,children:s(m,{direction:"column",sx:{py:1},children:[e(r,{variant:"text",sx:{justifyContent:"flex-start",px:2},children:"Profile"}),e(r,{variant:"text",sx:{justifyContent:"flex-start",px:2},children:"Settings"}),e(r,{variant:"text",sx:{justifyContent:"flex-start",px:2},children:"Sign out"})]})})]})}},u={args:{open:!1},parameters:{docs:{description:{story:'`anchorReference="anchorPosition"` positions the popover at a viewport coordinate rather than beside an element. The classic use is a right-click context menu — capture the event\'s `clientX` / `clientY` and pass them as `anchorPosition`.'}}},render:i=>{const[t,o]=f.useState(null);return s(k,{children:[e(m,{onContextMenu:n=>{n.preventDefault(),o({top:n.clientY,left:n.clientX})},alignItems:"center",justifyContent:"center",sx:n=>({minHeight:200,width:480,padding:4,border:`2px dashed ${n.palette.primary.main}`,borderRadius:1,backgroundColor:n.palette.background.default,cursor:"context-menu"}),children:e(d,{variant:"h3",children:"Right-click anywhere in this box"})}),e(p,{...i,open:!!t,anchorReference:"anchorPosition",anchorPosition:t??void 0,onClose:()=>o(null),children:s(m,{direction:"column",sx:{py:1,minWidth:160},children:[e(r,{variant:"text",sx:{justifyContent:"flex-start",px:2},children:"Copy"}),e(r,{variant:"text",sx:{justifyContent:"flex-start",px:2},children:"Paste"}),e(r,{variant:"text",sx:{justifyContent:"flex-start",px:2},children:"Inspect"})]})})]})}},Ot=["Default","WithWidth","AsUserMenu","AnchorPosition"];var v,g,x;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    open: false
  },
  parameters: {
    docs: {
      description: {
        story: "The base shape every other story varies. Click the button, a paper surface opens beneath it, dismiss via Escape or clicking outside. Note the focus trap: pressing Tab inside the popover cycles through its focusable descendants, not the surrounding page."
      }
    }
  },
  render: args => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);
    return <div>
        <Button onClick={event => setAnchorEl(event.currentTarget)}>Open PopOver</Button>
        <PopOver {...args} open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)} anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }} transformOrigin={{
        vertical: "top",
        horizontal: "left"
      }}>
          <Text sx={{
          p: 2
        }}>The content of the popover.</Text>
        </PopOver>
      </div>;
  }
}`,...(x=(g=c.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,b,P;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    open: false,
    width: 320
  },
  parameters: {
    docs: {
      description: {
        story: "The DS \`width\` prop sets a fixed paper width via \`slotProps\`. Reach for it when the surface needs to match a specific column or hold labels of a known length. Omit it for content that should hug its intrinsic width."
      }
    }
  },
  render: args => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);
    return <div>
        <Button onClick={event => setAnchorEl(event.currentTarget)}>Filter results</Button>
        <PopOver {...args} open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)} anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }} transformOrigin={{
        vertical: "top",
        horizontal: "left"
      }}>
          <FlexBox direction="column" gap={1} sx={{
          p: 2
        }}>
            <Text variant="h3">Filter results</Text>
            <Text variant="body2">Paper is fixed at 320px regardless of content width.</Text>
          </FlexBox>
        </PopOver>
      </div>;
  }
}`,...(P=(b=l.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var w,O,E;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    open: false
  },
  parameters: {
    docs: {
      description: {
        story: "The canonical \`PopOver\` use case: a user menu opened from an avatar. Interactive content (buttons), focus trapped while open, click-outside or Escape dismisses. For a plainer button + list-of-actions shape, prefer \`DropdownButton\` — this story exists to show the primitive underneath."
      }
    }
  },
  render: args => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);
    return <div>
        <Button onClick={event => setAnchorEl(event.currentTarget)}>John Doe</Button>
        <PopOver {...args} open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)} anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }} transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }} width={200}>
          <FlexBox direction="column" sx={{
          py: 1
        }}>
            <Button variant="text" sx={{
            justifyContent: "flex-start",
            px: 2
          }}>
              Profile
            </Button>
            <Button variant="text" sx={{
            justifyContent: "flex-start",
            px: 2
          }}>
              Settings
            </Button>
            <Button variant="text" sx={{
            justifyContent: "flex-start",
            px: 2
          }}>
              Sign out
            </Button>
          </FlexBox>
        </PopOver>
      </div>;
  }
}`,...(E=(O=h.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var B,C,T;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    open: false
  },
  parameters: {
    docs: {
      description: {
        story: '\`anchorReference="anchorPosition"\` positions the popover at a viewport coordinate rather than beside an element. The classic use is a right-click context menu — capture the event\\'s \`clientX\` / \`clientY\` and pass them as \`anchorPosition\`.'
      }
    }
  },
  render: args => {
    const [position, setPosition] = React.useState<{
      top: number;
      left: number;
    } | null>(null);
    return <>
        <FlexBox onContextMenu={event => {
        event.preventDefault();
        setPosition({
          top: event.clientY,
          left: event.clientX
        });
      }} alignItems="center" justifyContent="center" sx={theme => ({
        minHeight: 200,
        width: 480,
        padding: 4,
        border: \`2px dashed \${theme.palette.primary.main}\`,
        borderRadius: 1,
        backgroundColor: theme.palette.background.default,
        cursor: "context-menu"
      })}>
          <Text variant="h3">Right-click anywhere in this box</Text>
        </FlexBox>
        <PopOver {...args} open={Boolean(position)} anchorReference="anchorPosition" anchorPosition={position ?? undefined} onClose={() => setPosition(null)}>
          <FlexBox direction="column" sx={{
          py: 1,
          minWidth: 160
        }}>
            <Button variant="text" sx={{
            justifyContent: "flex-start",
            px: 2
          }}>
              Copy
            </Button>
            <Button variant="text" sx={{
            justifyContent: "flex-start",
            px: 2
          }}>
              Paste
            </Button>
            <Button variant="text" sx={{
            justifyContent: "flex-start",
            px: 2
          }}>
              Inspect
            </Button>
          </FlexBox>
        </PopOver>
      </>;
  }
}`,...(T=(C=u.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};export{u as AnchorPosition,h as AsUserMenu,c as Default,l as WithWidth,Ot as __namedExportsOrder,wt as default};
