import{R as f,b as s,a as e,F as k}from"./iframe-DLGF4BUc.js";import{B as r}from"./EntityList-DIdsLu9S.js";import{T as u}from"./Text-DpXgC9ew.js";import{F as m}from"./FlexBox-2AT2Uwu-.js";import{P as p}from"./_IconPopover-C3WXrhmi.js";import"./preload-helper-C1FmrZbK.js";import"./clsx-B-dksMZM.js";import"./styled-B1nzYGMU.js";import"./extendSxProp-DWxvZHYy.js";import"./ListContext-fSi36sDS.js";import"./ListItem-hW3jOJVo.js";import"./FormControl-CE4f5UQy.js";import"./useFormControl-CA29WpPn.js";import"./composeClasses-fLhin0tj.js";import"./TransitionGroupContext-D9CYwYvt.js";import"./resolveComponentProps-D6mFZg2W.js";import"./ButtonBase-CotwqhDg.js";import"./Toolbar-CiP-GOsO.js";import"./TextField-QkCWN4g8.js";import"./Modal-BPxGlzs1.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-rF9rKq-f.js";import"./index-Dy45cCFj.js";import"./utils-CoFQBbdh.js";import"./Popover-Dv9-1Kkh.js";import"./Paper-LJUHI-NO.js";import"./useControlled-D33ms4hd.js";import"./createSvgIcon-B7-RWdsa.js";import"./SvgIcon-By8aXgIc.js";import"./FormHelperText-C3O1dcpJ.js";import"./Close-DkoVebQq.js";import"./Popper-BgB7JZlg.js";import"./Badge-D6m7LIpW.js";import"./Chip-DdiieqSv.js";import"./IconButton-Bkq1m1C2.js";import"./FormControlLabel-DcBr0i4W.js";import"./Typography-CQvGJptE.js";import"./Stack-CX0L4V8W.js";import"./styled-oG3mFbuA.js";import"./createStyled-DLvNylUN.js";import"./useThemeProps-D5sfc09H.js";import"./MenuItem-BBO4kaVs.js";import"./dividerClasses-Ik8JkkD1.js";import"./Button-CV9E6iBw.js";import"./MapToggleButtonPresentational-DJ0t76sA.js";import"./Remove-CSdcmxrN.js";import"./Box-CA85B3I1.js";import"./ExpandLessIcon-BhrxwplQ.js";import"./Box-DfrYrAOU.js";import"./Container-B5aPNULB.js";import"./CogIcon-DZO7HehB.js";import"./InfoIcon-wTIowM_2.js";import"./ExpandMoreIcon-CEUANqPb.js";import"./ThemeSwitchRow-BvvaAcwo.js";import"./index-B2PZUJHW.js";import"./IconButton-C1KFnQCW.js";import"./Badge-BIgwpspb.js";import"./Chip-QXpGNnbf.js";import"./Divider-BqsWnBLy.js";import"./Divider-DHVXymBh.js";import"./TreeView-CxRDQ7im.js";import"./useThemeProps-Ba0TDecv.js";import"./Collapse-CuiTrv0f.js";import"./useSlot-BBQYsIC4.js";import"./AppInfoRow-nWejkyoV.js";import"./AppSettings-C44XWmY2.js";import"./SvgIcon-Cv0ryMMu.js";import"./TableRow-DHNYRXF1.js";import"./TableCell-CDmZf9CJ.js";import"./Skeleton-DU7jOf86.js";import"./Skeleton-DXmSA4o_.js";import"./Edit-r4GAQfgg.js";import"./LinearProgress-DipKtq4x.js";import"./LinearProgress-BFS8oSB-.js";import"./Spinner-i2qfrWwN.js";import"./CircularProgress-i3TCesHd.js";import"./Dialog-Bm_WSvFH.js";import"./DialogContent-De5u5KBX.js";import"./Alert-DbYWFn5H.js";import"./ToggleButton-BWQSSQTu.js";import"./ToggleButton-l9u-dadR.js";import"./ToggleButtonGroup-DJo22eSV.js";import"./LinkButton-CRKxeZyL.js";import"./TextField-C8b_bMXq.js";import"./Switch-NkmTKI6k.js";import"./Switch-CJZKOFUT.js";import"./LabeledSwitch-BQ84BIxN.js";import"./RadioGroup-pBxOyj1N.js";import"./FormControl-DxjzYp0j.js";import"./FormHelperText-cm1vsiIe.js";import"./Tabs-C4i0NMYz.js";import"./MenuItem-BnPC1eYg.js";import"./AccordionDetails-BVl2h7ZR.js";import"./Paper-DC9SKnip.js";import"./ErrorFallback-CtoHCFXW.js";import"./ErrorFallbackText-BsCe1noc.js";import"./ErrorFallbackWrapper-C9vTjGhq.js";import"./Brand-xyVOOd-f.js";const{fn:F}=__STORYBOOK_MODULE_TEST__,Pt={title:"Surfaces/PopOver",component:p,tags:["autodocs"],args:{onClose:F()},parameters:{docs:{description:{component:'\nDismissible modal-style surface anchored to another element. Thin wrapper over MUI\'s `Popover` with two DS opinions: elevation baked to `3`, and a `width` convenience prop that sets a fixed paper width.\n\nMUI\'s `Popover` composes Modal + Paper + Popper-style positioning: click-outside dismisses, Escape dismisses, focus is trapped inside while open, and content sits on a raised paper surface. The DS wrapper keeps that contract intact and adds two conveniences.\n\n---\n\n### The opinion\n\n- **`elevation` defaults to `3`.** The DS\'s mid-range shadow — high enough to read as "temporary overlay", not so high it competes with a Dialog. Pass `elevation={n}` to override.\n- **`width` sets a fixed paper width via `slotProps`.** Reach for it when the callsite needs a specific width (a filter panel expected to match a column, a menu with long labels). Skip it for content that should size to its contents.\n\nEvery other MUI `Popover` prop passes through unchanged, spread last, so a callsite can override any DS default.\n\n---\n\n### When to use which\n\n`PopOver` vs `Popper` vs `Tooltip` vs `Menu` — same shape (float content beside an anchor), different contract:\n\n| Component | Backdrop | Click-outside dismiss | Focus trap | Paper surface | Reach for it when |\n| --- | :---: | :---: | :---: | :---: | --- |\n| `PopOver` | ✓ | ✓ | ✓ | ✓ (`elevation={3}`) | The floating content is interactive and modal in nature — a context menu, a filter panel, a user menu, a mini-form. |\n| `Popper` | ✗ | ✗ | ✗ | ✗ | You want *just* positioning — a typeahead listbox, a hover card, a floating label. You\'ll bring your own container and dismiss. |\n| `Tooltip` | ✗ | — | ✗ | ✓ (small chip) | Passive, hover-triggered hint. Not interactive. |\n| `DropdownButton` / `Menu` | ✗ | ✓ | ✓ | ✓ | A button that opens a menu of actions — the DS\'s opinionated shape for the "trigger + list" case. |\n\nThe bright line: **is the floating content interactive?** If yes, and the user\'s focus should be trapped there until they dismiss it, use `PopOver`. If the content is a passive hint or you\'re building your own dismiss (e.g. an autocomplete listbox whose lifecycle is tied to input blur), use `Popper`. If it\'s a "trigger + list of actions" and both live together, reach for `DropdownButton` first — `PopOver` is the primitive, `DropdownButton` is the ready-made shape.\n\n---\n\n### Focus and dismiss\n\nBecause `PopOver` is built on Modal:\n\n- **Focus is trapped** inside the popover while open — Tab/Shift+Tab cycle through focusable descendants.\n- **Escape closes** — fires `onClose(event, "escapeKeyDown")`.\n- **Click outside closes** — fires `onClose(event, "backdropClick")`. Distinguish the reason if you need to suppress one (a filter panel might dismiss on outside click but require a "Cancel" button for Escape).\n- **Focus is restored** to the previously-focused element on close — usually the anchor button.\n- **A backdrop is rendered** behind the paper. It\'s transparent by default, but consumes clicks — nothing under the popover receives them until it closes.\n\nIf any of those are wrong for your case, you almost certainly want `Popper` instead.\n\n---\n\n### Positioning\n\nPositioning is Cartesian — `anchorOrigin` picks a point on the anchor, `transformOrigin` picks a point on the popover paper, and the two are aligned. Both accept `{ vertical, horizontal }` with named ends (`top` / `center` / `bottom` / `left` / `right`) or pixel offsets.\n\nFor pointing at a coordinate rather than an element, set `anchorReference="anchorPosition"` and pass `anchorPosition={{ top, left }}`. Useful for right-click context menus.\n\n---\n\n### Defaults\n\n- `elevation`: `3` — via the wrapper. Override with `elevation={n}`.\n- `width`: undefined — passing a number renders a fixed-width paper via `slotProps.paper`.\n- Everything else follows MUI\'s `Popover` defaults (`anchorOrigin` `{ vertical: "top", horizontal: "left" }`, `anchorReference` `"anchorEl"`, backdrop transparent, focus trapped).\n\n---\n\n### Other supported features\n\nEvery MUI `Popover` prop passes through: `open` / `onClose`, `anchorEl`, `anchorOrigin` / `transformOrigin`, `anchorReference` / `anchorPosition`, `marginThreshold`, `disableAutoFocus` / `disableEnforceFocus` / `disableRestoreFocus` (escape hatches for a11y edge cases), `transitionDuration`, `slots` / `slotProps`.\n\n---\n\n### Example\n\n```tsx\nimport { PopOver, Text, Button, FlexBox } from "@telicent-oss/ds";\nimport { useRef, useState } from "react";\n\nconst FilterMenu = () => {\n  const anchorRef = useRef<HTMLButtonElement>(null);\n  const [open, setOpen] = useState(false);\n\n  return (\n    <>\n      <Button ref={anchorRef} onClick={() => setOpen(true)}>\n        Filters\n      </Button>\n\n      <PopOver\n        open={open}\n        anchorEl={anchorRef.current}\n        onClose={() => setOpen(false)}\n        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}\n        transformOrigin={{ vertical: "top", horizontal: "left" }}\n        width={320}\n      >\n        <FlexBox direction="column" gap={1} sx={{ p: 2 }}>\n          <Text variant="h3">Filter results</Text>\n          {/* form fields */}\n        </FlexBox>\n      </PopOver>\n    </>\n  );\n};\n```\n        '}}},argTypes:{open:{control:"boolean",description:"Whether the popover is mounted and visible. Controlled — hold it in the consumer.",table:{type:{summary:"boolean"},category:"PopOver"}},onClose:{control:!1,description:'Fired with `(event, reason)` when the popover requests dismissal. `reason` is `"backdropClick"` or `"escapeKeyDown"` — inspect it if you need to distinguish the two.',table:{type:{summary:'(event: {}, reason: "backdropClick" | "escapeKeyDown") => void'},category:"PopOver"}},anchorEl:{control:!1,description:'The DOM element the popover is positioned against. Usually a button\'s ref `.current`. Ignored when `anchorReference="anchorPosition"`.',table:{type:{summary:"Element | (() => Element) | null"},category:"PopOver"}},anchorOrigin:{control:!1,description:"Point on the anchor where the popover attaches. `{ vertical: 'top' | 'center' | 'bottom' | number, horizontal: 'left' | 'center' | 'right' | number }`.",table:{defaultValue:{summary:'{ vertical: "top", horizontal: "left" }'},category:"PopOver"}},transformOrigin:{control:!1,description:"Point on the popover paper that aligns with the anchor's `anchorOrigin`.",table:{defaultValue:{summary:'{ vertical: "top", horizontal: "left" }'},category:"PopOver"}},anchorReference:{control:"radio",options:["anchorEl","anchorPosition","none"],description:'Which anchoring mode to use. `"anchorEl"` (default) reads `anchorEl`; `"anchorPosition"` reads `anchorPosition={{ top, left }}` — useful for right-click menus. `"none"` positions at (0,0).',table:{defaultValue:{summary:"anchorEl"},category:"PopOver"}},width:{control:{type:"number",min:120,max:640,step:20},description:"DS convenience: fixed width on the paper, in pixels. Emitted as `slotProps={{ paper: { sx: { width } } }}` so it composes with any callsite `slotProps`.",table:{type:{summary:"number"},category:"PopOver (DS)"}}}},c={args:{open:!1},parameters:{docs:{description:{story:"The base shape every other story varies. Click the button, a paper surface opens beneath it, dismiss via Escape or clicking outside. Note the focus trap: pressing Tab inside the popover cycles through its focusable descendants, not the surrounding page."}}},render:i=>{const[t,o]=f.useState(null);return s("div",{children:[e(r,{onClick:a=>o(a.currentTarget),children:"Open PopOver"}),e(p,{...i,open:!!t,anchorEl:t,onClose:()=>o(null),anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:e(u,{sx:{p:2},children:"The content of the popover."})})]})}},l={args:{open:!1,width:320},parameters:{docs:{description:{story:"The DS `width` prop sets a fixed paper width via `slotProps`. Reach for it when the surface needs to match a specific column or hold labels of a known length. Omit it for content that should hug its intrinsic width."}}},render:i=>{const[t,o]=f.useState(null);return s("div",{children:[e(r,{onClick:a=>o(a.currentTarget),children:"Filter results"}),e(p,{...i,open:!!t,anchorEl:t,onClose:()=>o(null),anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:s(m,{direction:"column",gap:1,sx:{p:2},children:[e(u,{variant:"h3",children:"Filter results"}),e(u,{variant:"body2",children:"Paper is fixed at 320px regardless of content width."})]})})]})}},h={args:{open:!1},parameters:{docs:{description:{story:"The canonical `PopOver` use case: a user menu opened from an avatar. Interactive content (buttons), focus trapped while open, click-outside or Escape dismisses. For a plainer button + list-of-actions shape, prefer `DropdownButton` — this story exists to show the primitive underneath."}}},render:i=>{const[t,o]=f.useState(null);return s("div",{children:[e(r,{onClick:a=>o(a.currentTarget),children:"John Doe"}),e(p,{...i,open:!!t,anchorEl:t,onClose:()=>o(null),anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},width:200,children:s(m,{direction:"column",sx:{py:1},children:[e(r,{variant:"text",sx:{justifyContent:"flex-start",px:2},children:"Profile"}),e(r,{variant:"text",sx:{justifyContent:"flex-start",px:2},children:"Settings"}),e(r,{variant:"text",sx:{justifyContent:"flex-start",px:2},children:"Sign out"})]})})]})}},d={args:{open:!1},parameters:{docs:{description:{story:'`anchorReference="anchorPosition"` positions the popover at a viewport coordinate rather than beside an element. The classic use is a right-click context menu — capture the event\'s `clientX` / `clientY` and pass them as `anchorPosition`.'}}},render:i=>{const[t,o]=f.useState(null);return s(k,{children:[e(m,{onContextMenu:n=>{n.preventDefault(),o({top:n.clientY,left:n.clientX})},alignItems:"center",justifyContent:"center",sx:n=>({minHeight:200,width:480,padding:4,border:`2px dashed ${n.palette.primary.main}`,borderRadius:1,backgroundColor:n.palette.background.default,cursor:"context-menu"}),children:e(u,{variant:"h3",children:"Right-click anywhere in this box"})}),e(p,{...i,open:!!t,anchorReference:"anchorPosition",anchorPosition:t??void 0,onClose:()=>o(null),children:s(m,{direction:"column",sx:{py:1,minWidth:160},children:[e(r,{variant:"text",sx:{justifyContent:"flex-start",px:2},children:"Copy"}),e(r,{variant:"text",sx:{justifyContent:"flex-start",px:2},children:"Paste"}),e(r,{variant:"text",sx:{justifyContent:"flex-start",px:2},children:"Inspect"})]})})]})}};var v,g,x;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(T=(C=d.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const wt=["Default","WithWidth","AsUserMenu","AnchorPosition"];export{d as AnchorPosition,h as AsUserMenu,c as Default,l as WithWidth,wt as __namedExportsOrder,Pt as default};
