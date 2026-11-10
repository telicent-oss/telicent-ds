import{r as n,b as a,a as e}from"./iframe-BZHB3Un-.js";import{P as p,B as b}from"./UserProfileContent-DAd2yYLO.js";import{T as v}from"./Text-3mwzoKOr.js";import{F as P}from"./FlexBox-tGhr2yqn.js";import{P as y}from"./Paper-DAPKePBK.js";import{C as L}from"./ClickAwayListener-BKnpEm2y.js";import{F as M}from"./Modal-NAHaE5zp.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-D-ZFpLGt.js";import"./clsx-B-dksMZM.js";import"./styled-DFCsjTlG.js";import"./extendSxProp-CzgBeSy5.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-CSj4P6pw.js";import"./TransitionGroupContext-CMC_19_q.js";import"./MapToggleButtonPresentational-Cp4hYjou.js";import"./Remove-B95LyZ4A.js";import"./createSvgIcon-Di0onuak.js";import"./SvgIcon-DX0QMT8j.js";import"./IconButton-7ww1QELc.js";import"./Paper-DUpmP5HH.js";import"./Box-CTxcfl9f.js";import"./XIcon-CMSbyjlB.js";import"./Stack-DxNHW9Oc.js";import"./styled-cmwt6iFF.js";import"./createStyled-DxnKb23n.js";import"./useThemeProps-D_zUfiSC.js";import"./Typography-z5FfRvY3.js";import"./Box-DiPYbFt5.js";import"./Container-DmrKR_aT.js";import"./Brand-MqwDsCPU.js";import"./IconButton-CM4zelNT.js";import"./LinkButton-D_rBBBP1.js";import"./AppInfoRow-DrjnbaOW.js";import"./_IconPopover-CbWDY7xq.js";import"./Popover-BjbYehdE.js";import"./utils-cH3ejkVE.js";import"./index-B0Xunt1t.js";import"./index-B5k6Jcma.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-CPJK55gG.js";import"./resolveComponentProps-BrqKpcQI.js";import"./InfoIcon-CWbtE50h.js";import"./AppSettings-Cnd9oPXt.js";import"./CogIcon-B4CvVzjS.js";import"./Badge-CnTk467N.js";import"./Badge-C_HtVrdi.js";import"./Chip-B5Qnfnmc.js";import"./Chip-wc17TB0W.js";import"./Divider-DzclfdEu.js";import"./Divider-CWRJhMbi.js";import"./dividerClasses-jWT-D4rl.js";import"./ThemeSwitchRow-DyN5Xd5p.js";import"./Skeleton-DwMrttJW.js";import"./Skeleton-B-oRqWrL.js";import"./TextField-PID_gPrg.js";import"./useFormControl-DJsbcvO2.js";import"./FormControl-BGctbngO.js";import"./ListContext-DbBECZus.js";import"./useControlled-CHatxUO2.js";import"./FormHelperText-t48YGxt5.js";import"./MenuItem-C9dMsQON.js";import"./ExpandMoreIcon-BY91CUws.js";import"./ListItem-Bl45hr75.js";import"./Toolbar-D0C-FHY9.js";import"./Close-N_DdzxXD.js";import"./Popper-Pcs9Nhir.js";import"./FormControlLabel-j7Gb_XUM.js";import"./Edit-Ba53KRFr.js";import"./SvgIcon-QkI8KwIQ.js";import"./TableRow-B32Y4JfJ.js";import"./TableCell-CBeb-3yx.js";import"./TreeView-CewVhRNn.js";import"./useThemeProps-ceYpTy6o.js";import"./index-VU7a6TPT.js";import"./Collapse-DZqhyoUz.js";import"./Dialog-Cs7wfcZs.js";import"./DialogContent-DPJEn1dC.js";import"./Alert-Dez6eiMf.js";import"./useSlot-BDNWXL-n.js";import"./LinearProgress-EmU5nnew.js";import"./LinearProgress-BihuoFKl.js";import"./Spinner-D5Jd85BR.js";import"./CircularProgress-DNevguKX.js";import"./TextField-DY3kfjm3.js";import"./FormControl-BG0iQYvU.js";import"./FormHelperText-DGuryOxw.js";import"./LabeledSwitch-CjU-tu_0.js";import"./Switch-CWWkTEfH.js";import"./Switch-CP1MaWVZ.js";import"./RadioGroup-DHwZAtU9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ToggleButton-DNWc6yfH.js";import"./ToggleButton-BXdPjjSE.js";import"./ToggleButtonGroup-DMSjue0t.js";import"./MenuItem-BxQ5rQ8Q.js";import"./Tabs-BwMTEiRO.js";import"./AccordionSummary-CsGp2Z5d.js";import"./ErrorFallback-BzU2Dhgy.js";import"./ErrorFallbackText-DZhyfm5F.js";import"./ErrorFallbackWrapper-CkvBZjx3.js";const St={title:"Surfaces/Popper",component:p,tags:["autodocs"],parameters:{docs:{description:{component:"\nPositioning primitive. Places a `ReactNode` next to an anchor element via [Popper.js](https://popper.js.org/) — nothing more.\n\nThin re-export of MUI's `Popper`. The DS bakes no defaults on this one because `Popper` is a *placement* primitive, not a container: it puts your content at a point in the viewport and steps back. Chrome — paper background, elevation, dismiss behaviour, focus management — is yours to add.\n\n---\n\n### The opinion\n\n**None.** `Popper` is a placement primitive with no visual output of its own. The DS wrapper is a pass-through: it delegates to Popper.js's positioning engine and leaves everything else — surface, dismiss, focus, roles — to the callsite.\n\nIf you find yourself hand-rolling paper + backdrop + click-outside on every `Popper` callsite, reach for `PopOver` instead — that's the DS's opinionated surface. See **When to use which** below.\n\n---\n\n### When to use which\n\n`Popper` vs `PopOver` vs `Tooltip` vs `Menu` — same shape (float content beside an anchor), different contract:\n\n| Component | Backdrop | Click-outside dismiss | Focus trap | Paper surface | Reach for it when |\n| --- | :---: | :---: | :---: | :---: | --- |\n| `Popper` | ✗ | ✗ | ✗ | ✗ | You want *just* positioning — typeaheads, floating labels, hover cards. You'll bring your own container and dismiss logic. |\n| `PopOver` | ✓ | ✓ | ✓ | ✓ (`elevation={3}`) | The floating content is interactive and modal in nature — a context menu, a filter panel, a user menu. |\n| `Tooltip` | ✗ | — | ✗ | ✓ (small chip) | Passive, hover-triggered hint. Not interactive. |\n| `DropdownButton` / `Menu` | ✗ | ✓ | ✓ | ✓ | A button that opens a menu of actions. |\n\nThe bright line: **is the floating content interactive?** If yes, and the user's focus should be trapped there until they dismiss it, use `PopOver`. If no, or you're building your own dismiss (e.g. an autocomplete listbox whose dismiss is tied to blur), use `Popper`.\n\n---\n\n### Accessibility\n\n`Popper` renders a positioned `div` and nothing else — no `role`, no `aria-*`. The callsite is responsible for:\n\n- Setting a `role` on the popped content that matches the pattern (`listbox`, `tooltip`, `dialog`, `menu`, ...).\n- Wiring `aria-controls` / `aria-expanded` on the anchor button to point at the popped element.\n- Focus management — moving focus in on open, restoring it on close, handling arrow keys inside a listbox.\n- Dismiss keys — Escape typically closes; the wrapper does not.\n\nIf you don't want to own any of that, reach for `PopOver` (interactive) or `Tooltip` (passive) instead.\n\n---\n\n### Other supported features\n\nEverything on MUI's `Popper` passes through unchanged: `placement` (12 values from `top-start` to `bottom-end`), `modifiers` (Popper.js middleware — offset, arrow, preventOverflow, flip), `disablePortal` (render inline rather than at the document root), `transition` (with a MUI `Fade` / `Grow` / `Slide` child using the `{ TransitionProps }` render-prop shape), and `keepMounted`.\n\n---\n\n### Example\n\n```tsx\nimport { Popper, Paper, Text } from \"@telicent-oss/ds\";\nimport ClickAwayListener from \"@mui/material/ClickAwayListener\";\nimport { useRef, useState } from \"react\";\n\nconst HoverCard = () => {\n  const anchorRef = useRef<HTMLButtonElement>(null);\n  const [open, setOpen] = useState(false);\n\n  return (\n    <>\n      <button ref={anchorRef} onClick={() => setOpen((v) => !v)}>\n        Preview\n      </button>\n\n      <Popper open={open} anchorEl={anchorRef.current} placement=\"bottom-start\">\n        <ClickAwayListener onClickAway={() => setOpen(false)}>\n          <Paper sx={{ p: 2, mt: 1 }} elevation={3}>\n            <Text>Free-form preview content.</Text>\n          </Paper>\n        </ClickAwayListener>\n      </Popper>\n    </>\n  );\n};\n```\n        "}}},argTypes:{open:{control:"boolean",description:"Whether the popped element is mounted and positioned. Controlled — hold it in the consumer.",table:{type:{summary:"boolean"},category:"Popper"}},anchorEl:{control:!1,description:"The element the pop is positioned against. A DOM node, a `VirtualElement` (for coord anchoring), or a callback returning one. Usually a ref's `.current`.",table:{type:{summary:"Element | VirtualElement | (() => Element | VirtualElement) | null"},category:"Popper"}},placement:{control:"select",options:["top-start","top","top-end","right-start","right","right-end","bottom-start","bottom","bottom-end","left-start","left","left-end"],description:"Where the popped element sits relative to the anchor. Popper.js will flip on collision unless you disable the flip modifier.",table:{defaultValue:{summary:"bottom"},category:"Popper"}},disablePortal:{control:"boolean",description:"Render the popped element inline (as a child of the anchor's parent) instead of portalling to the document root. Reach for this when the pop must sit inside a stacking context (a scrolling `overflow: hidden` panel, a Storybook doc block).",table:{defaultValue:{summary:"false"},category:"Popper"}},transition:{control:"boolean",description:"Enables the render-prop shape `children = ({ TransitionProps }) => <Transition {...TransitionProps}>...`. Wrap the pop content in a MUI `Fade` / `Grow` / `Slide` to animate open/close.",table:{defaultValue:{summary:"false"},category:"Popper"}},keepMounted:{control:"boolean",description:"Keep the popped element in the DOM while closed. Useful for SEO-visible content or when children hold expensive state.",table:{defaultValue:{summary:"false"},category:"Popper"}},modifiers:{control:!1,description:"[Popper.js modifiers](https://popper.js.org/docs/v2/modifiers/) — the escape hatch for custom positioning behaviour. Reach for this to tune `offset`, add an `arrow`, or override `preventOverflow`.",table:{type:{summary:"PopperModifier[]"},category:"Popper"}}}},m={parameters:{docs:{description:{story:"The base shape every other story varies. A button anchors a `Paper` positioned `bottom-start` beneath it. Dismiss is wired via `ClickAwayListener` — the DS `Popper` does not close on outside click by itself."}}},render:()=>{const r=n.useRef(null),[t,i]=n.useState(!1);return a("div",{style:{padding:40},children:[e(b,{ref:r,onClick:()=>i(o=>!o),children:t?"Close popper":"Open popper"}),e(p,{open:t,anchorEl:r.current,placement:"bottom-start",children:e(L,{onClickAway:()=>i(!1),children:e(y,{sx:{p:2,mt:1},elevation:3,children:e(v,{children:"Anchored to the button. Click away to dismiss."})})})})]})}},u={parameters:{docs:{description:{story:"`transition` swaps `children` for a render-prop that hands you `TransitionProps`. Wrap the content in a MUI `Fade` / `Grow` / `Slide` to animate the open/close. Popper.js recalculates position before the transition runs so the content never appears in the wrong place."}}},render:()=>{const r=n.useRef(null),[t,i]=n.useState(!1);return a("div",{style:{padding:40},children:[e(b,{ref:r,onClick:()=>i(o=>!o),children:t?"Close popper":"Open popper"}),e(p,{open:t,anchorEl:r.current,placement:"bottom-start",transition:!0,children:({TransitionProps:o})=>e(M,{...o,timeout:200,children:e(y,{sx:{p:2,mt:1},elevation:3,children:e(v,{children:"Fades in and out."})})})})]})}},h={parameters:{docs:{description:{story:'Popper supports twelve `placement` values around the anchor. Each button here anchors its own popper at the named placement. Popper.js will flip on collision — try scrolling this doc so a "top" placement runs out of room.'}}},render:()=>e(P,{direction:"column",gap:4,sx:{p:8},children:["top-start","top","top-end","bottom-start","bottom","bottom-end"].map(t=>e(()=>{const o=n.useRef(null),[l,c]=n.useState(!1);return a(P,{alignItems:"center",gap:2,children:[e(b,{ref:o,onClick:()=>c(d=>!d),children:t}),e(p,{open:l,anchorEl:o.current,placement:t,children:e(y,{sx:{px:1.5,py:.5,m:1},elevation:3,children:a(v,{variant:"caption",children:["Placed ",t]})})})]})},{},t))})},f={parameters:{docs:{description:{story:"The canonical `Popper` use case: an input's suggestion listbox. The pop is a `role=\"listbox\"` positioned under the input, dismiss is on blur (not click-away, so keyboard navigation stays intact), and `aria-controls` on the input points at the listbox `id`. Nothing about this needs `PopOver`'s backdrop or focus trap — the input owns focus throughout."}}},render:()=>{const r=["Apple","Apricot","Avocado","Blueberry","Cherry"],[t,i]=n.useState(""),[o,l]=n.useState(!1),c=n.useRef(null),d=r.filter(s=>s.toLowerCase().startsWith(t.toLowerCase())),g=o&&t.length>0&&d.length>0;return a("div",{style:{padding:40},children:[e("input",{ref:c,type:"text",placeholder:"Search fruit…",value:t,onChange:s=>i(s.target.value),onFocus:()=>l(!0),onBlur:()=>l(!1),"aria-controls":"typeahead-listbox","aria-expanded":g,style:{padding:8,width:240}}),e(p,{open:g,anchorEl:c.current,placement:"bottom-start",children:e(y,{id:"typeahead-listbox",role:"listbox",sx:{mt:.5,minWidth:240,py:.5},elevation:3,children:d.map(s=>e("div",{role:"option","aria-selected":!1,style:{padding:"6px 12px"},children:s},s))})})]})}},Ot=["Default","WithTransition","Placements","AsTypeahead"];var w,x,k;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "The base shape every other story varies. A button anchors a \`Paper\` positioned \`bottom-start\` beneath it. Dismiss is wired via \`ClickAwayListener\` — the DS \`Popper\` does not close on outside click by itself."
      }
    }
  },
  render: () => {
    const anchorRef = useRef<HTMLButtonElement | null>(null);
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: 40
    }}>
        <Button ref={anchorRef} onClick={() => setOpen(v => !v)}>
          {open ? "Close popper" : "Open popper"}
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} placement="bottom-start">
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Paper sx={{
            p: 2,
            mt: 1
          }} elevation={3}>
              <Text>Anchored to the button. Click away to dismiss.</Text>
            </Paper>
          </ClickAwayListener>
        </Popper>
      </div>;
  }
}`,...(k=(x=m.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var T,C,R;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`transition\` swaps \`children\` for a render-prop that hands you \`TransitionProps\`. Wrap the content in a MUI \`Fade\` / \`Grow\` / \`Slide\` to animate the open/close. Popper.js recalculates position before the transition runs so the content never appears in the wrong place."
      }
    }
  },
  render: () => {
    const anchorRef = useRef<HTMLButtonElement | null>(null);
    const [open, setOpen] = useState(false);
    return <div style={{
      padding: 40
    }}>
        <Button ref={anchorRef} onClick={() => setOpen(v => !v)}>
          {open ? "Close popper" : "Open popper"}
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} placement="bottom-start" transition>
          {({
          TransitionProps
        }) => <Fade {...TransitionProps} timeout={200}>
              <Paper sx={{
            p: 2,
            mt: 1
          }} elevation={3}>
                <Text>Fades in and out.</Text>
              </Paper>
            </Fade>}
        </Popper>
      </div>;
  }
}`,...(R=(C=u.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var A,S,O;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Popper supports twelve \`placement\` values around the anchor. Each button here anchors its own popper at the named placement. Popper.js will flip on collision — try scrolling this doc so a "top" placement runs out of room.'
      }
    }
  },
  render: () => {
    const placements: Array<"top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end"> = ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"];
    return <FlexBox direction="column" gap={4} sx={{
      p: 8
    }}>
        {placements.map(placement => {
        const AnchorRow = () => {
          const anchorRef = useRef<HTMLButtonElement | null>(null);
          const [open, setOpen] = useState(false);
          return <FlexBox alignItems="center" gap={2}>
                <Button ref={anchorRef} onClick={() => setOpen(v => !v)}>
                  {placement}
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} placement={placement}>
                  <Paper sx={{
                px: 1.5,
                py: 0.5,
                m: 1
              }} elevation={3}>
                    <Text variant="caption">Placed {placement}</Text>
                  </Paper>
                </Popper>
              </FlexBox>;
        };
        return <AnchorRow key={placement} />;
      })}
      </FlexBox>;
  }
}`,...(O=(S=h.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var E,F,B;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "The canonical \`Popper\` use case: an input's suggestion listbox. The pop is a \`role=\\"listbox\\"\` positioned under the input, dismiss is on blur (not click-away, so keyboard navigation stays intact), and \`aria-controls\` on the input points at the listbox \`id\`. Nothing about this needs \`PopOver\`'s backdrop or focus trap — the input owns focus throughout."
      }
    }
  },
  render: () => {
    const options = ["Apple", "Apricot", "Avocado", "Blueberry", "Cherry"];
    const [query, setQuery] = useState("");
    const [focused, setFocused] = useState(false);
    const anchorRef = useRef<HTMLInputElement | null>(null);
    const filtered = options.filter(o => o.toLowerCase().startsWith(query.toLowerCase()));
    const open = focused && query.length > 0 && filtered.length > 0;
    return <div style={{
      padding: 40
    }}>
        <input ref={anchorRef} type="text" placeholder="Search fruit…" value={query} onChange={e => setQuery(e.target.value)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} aria-controls="typeahead-listbox" aria-expanded={open} style={{
        padding: 8,
        width: 240
      }} />
        <Popper open={open} anchorEl={anchorRef.current} placement="bottom-start">
          <Paper id="typeahead-listbox" role="listbox" sx={{
          mt: 0.5,
          minWidth: 240,
          py: 0.5
        }} elevation={3}>
            {filtered.map(option => <div key={option} role="option" aria-selected={false} style={{
            padding: "6px 12px"
          }}>
                {option}
              </div>)}
          </Paper>
        </Popper>
      </div>;
  }
}`,...(B=(F=f.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};export{f as AsTypeahead,m as Default,h as Placements,u as WithTransition,Ot as __namedExportsOrder,St as default};
