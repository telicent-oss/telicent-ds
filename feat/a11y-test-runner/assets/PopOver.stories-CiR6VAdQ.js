import{R as f,b as s,a as e,F as k}from"./iframe-Y1N6bk8p.js";import{B as r}from"./DropdownButton-DLugr0xg.js";import{T as u}from"./Text-B8NihZq2.js";import{F as m}from"./FlexBox-DoF2Tbdg.js";import{P as p}from"./_IconPopover-BSW2238Q.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-Cl7uik3S.js";import"./SvgIcon-CxVDfqSx.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-DiMPCvor.js";import"./extendSxProp-DbTy98VK.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-D-jdU__u.js";import"./Box-D3afCydQ.js";import"./Box-CXk6M6mR.js";import"./Container-D3Y9-mOQ.js";import"./styled-WAGLmHxX.js";import"./createStyled-BL_vYvCM.js";import"./useThemeProps-Biv_2OSw.js";import"./Stack-D8q2WUfD.js";import"./Typography-DmCu6xYW.js";import"./Paper-DN68ECSn.js";import"./CogIcon-DvPSQXZo.js";import"./InfoIcon-Ct5f0UzT.js";import"./ExpandMoreIcon-CeKVlKWF.js";import"./ThemeSwitchRow-BSMzMCw1.js";import"./index-LiVer2cg.js";import"./AdapterDayjs-DP2CnPXm.js";import"./useThemeProps-DFwnlb8_.js";import"./Modal-B4PiUlG8.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-w0BzhBs7.js";import"./resolveComponentProps-DtqC7Jdc.js";import"./index-CriZbu4z.js";import"./utils-FxzgolTc.js";import"./Popover-CwKmJLrH.js";import"./TextField-D67MRuoC.js";import"./useFormControl-D_Xige0L.js";import"./FormControl-v9I3oitM.js";import"./ListContext-BSGrFhbe.js";import"./useControlled-zS0ZvXST.js";import"./createSvgIcon-CqGXTWJV.js";import"./FormHelperText-DAWPwhSQ.js";import"./IconButton-BTiO4iMN.js";import"./ButtonBase-Dh8n1X5l.js";import"./DialogContent-C9N2UKrx.js";import"./Button-D5koxhYf.js";import"./Chip-BA5IS77I.js";import"./MenuItem-2qdsD5am.js";import"./dividerClasses-ClH17Faz.js";import"./Chip-Bbcx00in.js";import"./Divider-BxRyf5aR.js";import"./Divider-Cu_DPk8e.js";import"./TreeView-BLSiq3QR.js";import"./Collapse-DAMiDAlQ.js";import"./useSlot-sFClRxF7.js";import"./AppInfoRow-CjdXbBLa.js";import"./AppSettings-Dhwai-20.js";import"./SvgIcon-DDcy4gnv.js";import"./TableRow-CUQU1TNz.js";import"./LinearProgress-DijGLa0J.js";import"./Spinner-D28ZfjXd.js";import"./Dialog-B3meZdDB.js";import"./MapToggleButtonPresentational-DWQxMudH.js";import"./Remove-DH3EMgKC.js";import"./Alert-D3Q4Es8x.js";import"./ToggleButton-ClBjS5Ky.js";import"./LinkButton-C0iWbNJQ.js";import"./TextField-BgCiXhS4.js";import"./Switch-DUAgT_Dc.js";import"./LabeledSwitch-BWamddRC.js";import"./DatePicker-G9qJ6QsT.js";import"./DateTimePicker-BmvwZZ-N.js";import"./FormControl-DNaghd-n.js";import"./FormHelperText-kXl3i3tQ.js";import"./MenuItem-B6NIKMg1.js";import"./AccordionDetails-xda9fO-T.js";import"./Paper-D1WHigEv.js";import"./ErrorFallback-Cmgcm6jb.js";import"./ErrorFallbackText-COet1f5O.js";import"./ErrorFallbackWrapper-C4fgBbmv.js";import"./Brand-NzozEoiB.js";import"./Edit-BAaxdE7v.js";const{fn:F}=__STORYBOOK_MODULE_TEST__,st={title:"Surfaces/PopOver",component:p,tags:["autodocs"],args:{onClose:F()},parameters:{docs:{description:{component:'\nDismissible modal-style surface anchored to another element. Thin wrapper over MUI\'s `Popover` with two DS opinions: elevation baked to `3`, and a `width` convenience prop that sets a fixed paper width.\n\nMUI\'s `Popover` composes Modal + Paper + Popper-style positioning: click-outside dismisses, Escape dismisses, focus is trapped inside while open, and content sits on a raised paper surface. The DS wrapper keeps that contract intact and adds two conveniences.\n\n---\n\n### The opinion\n\n- **`elevation` defaults to `3`.** The DS\'s mid-range shadow — high enough to read as "temporary overlay", not so high it competes with a Dialog. Pass `elevation={n}` to override.\n- **`width` sets a fixed paper width via `slotProps`.** Reach for it when the callsite needs a specific width (a filter panel expected to match a column, a menu with long labels). Skip it for content that should size to its contents.\n\nEvery other MUI `Popover` prop passes through unchanged, spread last, so a callsite can override any DS default.\n\n---\n\n### When to use which\n\n`PopOver` vs `Popper` vs `Tooltip` vs `Menu` — same shape (float content beside an anchor), different contract:\n\n| Component | Backdrop | Click-outside dismiss | Focus trap | Paper surface | Reach for it when |\n| --- | :---: | :---: | :---: | :---: | --- |\n| `PopOver` | ✓ | ✓ | ✓ | ✓ (`elevation={3}`) | The floating content is interactive and modal in nature — a context menu, a filter panel, a user menu, a mini-form. |\n| `Popper` | ✗ | ✗ | ✗ | ✗ | You want *just* positioning — a typeahead listbox, a hover card, a floating label. You\'ll bring your own container and dismiss. |\n| `Tooltip` | ✗ | — | ✗ | ✓ (small chip) | Passive, hover-triggered hint. Not interactive. |\n| `DropdownButton` / `Menu` | ✗ | ✓ | ✓ | ✓ | A button that opens a menu of actions — the DS\'s opinionated shape for the "trigger + list" case. |\n\nThe bright line: **is the floating content interactive?** If yes, and the user\'s focus should be trapped there until they dismiss it, use `PopOver`. If the content is a passive hint or you\'re building your own dismiss (e.g. an autocomplete listbox whose lifecycle is tied to input blur), use `Popper`. If it\'s a "trigger + list of actions" and both live together, reach for `DropdownButton` first — `PopOver` is the primitive, `DropdownButton` is the ready-made shape.\n\n---\n\n### Focus and dismiss\n\nBecause `PopOver` is built on Modal:\n\n- **Focus is trapped** inside the popover while open — Tab/Shift+Tab cycle through focusable descendants.\n- **Escape closes** — fires `onClose(event, "escapeKeyDown")`.\n- **Click outside closes** — fires `onClose(event, "backdropClick")`. Distinguish the reason if you need to suppress one (a filter panel might dismiss on outside click but require a "Cancel" button for Escape).\n- **Focus is restored** to the previously-focused element on close — usually the anchor button.\n- **A backdrop is rendered** behind the paper. It\'s transparent by default, but consumes clicks — nothing under the popover receives them until it closes.\n\nIf any of those are wrong for your case, you almost certainly want `Popper` instead.\n\n---\n\n### Positioning\n\nPositioning is Cartesian — `anchorOrigin` picks a point on the anchor, `transformOrigin` picks a point on the popover paper, and the two are aligned. Both accept `{ vertical, horizontal }` with named ends (`top` / `center` / `bottom` / `left` / `right`) or pixel offsets.\n\nFor pointing at a coordinate rather than an element, set `anchorReference="anchorPosition"` and pass `anchorPosition={{ top, left }}`. Useful for right-click context menus.\n\n---\n\n### Defaults\n\n- `elevation`: `3` — via the wrapper. Override with `elevation={n}`.\n- `width`: undefined — passing a number renders a fixed-width paper via `slotProps.paper`.\n- Everything else follows MUI\'s `Popover` defaults (`anchorOrigin` `{ vertical: "top", horizontal: "left" }`, `anchorReference` `"anchorEl"`, backdrop transparent, focus trapped).\n\n---\n\n### Other supported features\n\nEvery MUI `Popover` prop passes through: `open` / `onClose`, `anchorEl`, `anchorOrigin` / `transformOrigin`, `anchorReference` / `anchorPosition`, `marginThreshold`, `disableAutoFocus` / `disableEnforceFocus` / `disableRestoreFocus` (escape hatches for a11y edge cases), `transitionDuration`, `slots` / `slotProps`.\n\n---\n\n### Example\n\n```tsx\nimport { PopOver, Text, Button, FlexBox } from "@telicent-oss/ds";\nimport { useRef, useState } from "react";\n\nconst FilterMenu = () => {\n  const anchorRef = useRef<HTMLButtonElement>(null);\n  const [open, setOpen] = useState(false);\n\n  return (\n    <>\n      <Button ref={anchorRef} onClick={() => setOpen(true)}>\n        Filters\n      </Button>\n\n      <PopOver\n        open={open}\n        anchorEl={anchorRef.current}\n        onClose={() => setOpen(false)}\n        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}\n        transformOrigin={{ vertical: "top", horizontal: "left" }}\n        width={320}\n      >\n        <FlexBox direction="column" gap={1} sx={{ p: 2 }}>\n          <Text variant="h3">Filter results</Text>\n          {/* form fields */}\n        </FlexBox>\n      </PopOver>\n    </>\n  );\n};\n```\n        '}}},argTypes:{open:{control:"boolean",description:"Whether the popover is mounted and visible. Controlled — hold it in the consumer.",table:{type:{summary:"boolean"},category:"PopOver"}},onClose:{control:!1,description:'Fired with `(event, reason)` when the popover requests dismissal. `reason` is `"backdropClick"` or `"escapeKeyDown"` — inspect it if you need to distinguish the two.',table:{type:{summary:'(event: {}, reason: "backdropClick" | "escapeKeyDown") => void'},category:"PopOver"}},anchorEl:{control:!1,description:'The DOM element the popover is positioned against. Usually a button\'s ref `.current`. Ignored when `anchorReference="anchorPosition"`.',table:{type:{summary:"Element | (() => Element) | null"},category:"PopOver"}},anchorOrigin:{control:!1,description:"Point on the anchor where the popover attaches. `{ vertical: 'top' | 'center' | 'bottom' | number, horizontal: 'left' | 'center' | 'right' | number }`.",table:{defaultValue:{summary:'{ vertical: "top", horizontal: "left" }'},category:"PopOver"}},transformOrigin:{control:!1,description:"Point on the popover paper that aligns with the anchor's `anchorOrigin`.",table:{defaultValue:{summary:'{ vertical: "top", horizontal: "left" }'},category:"PopOver"}},anchorReference:{control:"radio",options:["anchorEl","anchorPosition","none"],description:'Which anchoring mode to use. `"anchorEl"` (default) reads `anchorEl`; `"anchorPosition"` reads `anchorPosition={{ top, left }}` — useful for right-click menus. `"none"` positions at (0,0).',table:{defaultValue:{summary:"anchorEl"},category:"PopOver"}},width:{control:{type:"number",min:120,max:640,step:20},description:"DS convenience: fixed width on the paper, in pixels. Emitted as `slotProps={{ paper: { sx: { width } } }}` so it composes with any callsite `slotProps`.",table:{type:{summary:"number"},category:"PopOver (DS)"}}}},c={args:{open:!1},parameters:{docs:{description:{story:"The base shape every other story varies. Click the button, a paper surface opens beneath it, dismiss via Escape or clicking outside. Note the focus trap: pressing Tab inside the popover cycles through its focusable descendants, not the surrounding page."}}},render:i=>{const[t,o]=f.useState(null);return s("div",{children:[e(r,{onClick:a=>o(a.currentTarget),children:"Open PopOver"}),e(p,{...i,open:!!t,anchorEl:t,onClose:()=>o(null),anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:e(u,{sx:{p:2},children:"The content of the popover."})})]})}},l={args:{open:!1,width:320},parameters:{docs:{description:{story:"The DS `width` prop sets a fixed paper width via `slotProps`. Reach for it when the surface needs to match a specific column or hold labels of a known length. Omit it for content that should hug its intrinsic width."}}},render:i=>{const[t,o]=f.useState(null);return s("div",{children:[e(r,{onClick:a=>o(a.currentTarget),children:"Filter results"}),e(p,{...i,open:!!t,anchorEl:t,onClose:()=>o(null),anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:s(m,{direction:"column",gap:1,sx:{p:2},children:[e(u,{variant:"h3",children:"Filter results"}),e(u,{variant:"body2",children:"Paper is fixed at 320px regardless of content width."})]})})]})}},h={args:{open:!1},parameters:{docs:{description:{story:"The canonical `PopOver` use case: a user menu opened from an avatar. Interactive content (buttons), focus trapped while open, click-outside or Escape dismisses. For a plainer button + list-of-actions shape, prefer `DropdownButton` — this story exists to show the primitive underneath."}}},render:i=>{const[t,o]=f.useState(null);return s("div",{children:[e(r,{onClick:a=>o(a.currentTarget),children:"John Doe"}),e(p,{...i,open:!!t,anchorEl:t,onClose:()=>o(null),anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},width:200,children:s(m,{direction:"column",sx:{py:1},children:[e(r,{variant:"text",sx:{justifyContent:"flex-start",px:2},children:"Profile"}),e(r,{variant:"text",sx:{justifyContent:"flex-start",px:2},children:"Settings"}),e(r,{variant:"text",sx:{justifyContent:"flex-start",px:2},children:"Sign out"})]})})]})}},d={args:{open:!1},parameters:{docs:{description:{story:'`anchorReference="anchorPosition"` positions the popover at a viewport coordinate rather than beside an element. The classic use is a right-click context menu — capture the event\'s `clientX` / `clientY` and pass them as `anchorPosition`.'}}},render:i=>{const[t,o]=f.useState(null);return s(k,{children:[e(m,{onContextMenu:n=>{n.preventDefault(),o({top:n.clientY,left:n.clientX})},alignItems:"center",justifyContent:"center",sx:n=>({minHeight:200,width:480,padding:4,border:`2px dashed ${n.palette.primary.main}`,borderRadius:1,backgroundColor:n.palette.background.default,cursor:"context-menu"}),children:e(u,{variant:"h3",children:"Right-click anywhere in this box"})}),e(p,{...i,open:!!t,anchorReference:"anchorPosition",anchorPosition:t??void 0,onClose:()=>o(null),children:s(m,{direction:"column",sx:{py:1,minWidth:160},children:[e(r,{variant:"text",sx:{justifyContent:"flex-start",px:2},children:"Copy"}),e(r,{variant:"text",sx:{justifyContent:"flex-start",px:2},children:"Paste"}),e(r,{variant:"text",sx:{justifyContent:"flex-start",px:2},children:"Inspect"})]})})]})}};var v,g,x;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(E=(O=h.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var B,C,T;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(T=(C=d.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const at=["Default","WithWidth","AsUserMenu","AnchorPosition"];export{d as AnchorPosition,h as AsUserMenu,c as Default,l as WithWidth,at as __namedExportsOrder,st as default};
