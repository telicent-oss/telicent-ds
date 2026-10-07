import{r as o,j as G,b as f,a as t}from"./iframe-DMftWpjQ.js";import{O as y,B as k}from"./DropdownButton-DIcMJDIN.js";import{P as w}from"./Paper-C5E2b80z.js";import{T as C}from"./Text-NRtR4KSk.js";import{F as O}from"./FlexBox-dcuaugZK.js";import{u as Q,b as Y}from"./TransitionGroupContext-CNC1Tbto.js";import{g as X,F as _}from"./Modal-BH1gI4XO.js";import{o as T}from"./ownerDocument-DW-IO8s5.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-BJ7vrGpQ.js";import"./SvgIcon-BqxlpQr2.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-DgJFzeuM.js";import"./extendSxProp-BQBq8Ufo.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-DlCQiAxV.js";import"./Box-CuG-yDZz.js";import"./Box-DxOMqWI8.js";import"./Container-B9iKt_1L.js";import"./styled-sLWjAyfV.js";import"./createStyled-DduiQEyZ.js";import"./useThemeProps-kTH-93a7.js";import"./Stack-CCJluz1e.js";import"./Typography-yZWFoSQS.js";import"./Paper-BWFX18fY.js";import"./CogIcon-D-bSAL3u.js";import"./InfoIcon-EtRiOOWZ.js";import"./ExpandMoreIcon-E4JwSxhz.js";import"./ThemeSwitchRow-D6oWULgM.js";import"./index-C_HrpW8C.js";import"./AdapterDayjs-CTqPZcQF.js";import"./useThemeProps-DZWZj2cv.js";import"./Popover-CY5fyPbP.js";import"./utils-Cttcw_3Z.js";import"./index-DMOWeANf.js";import"./resolveComponentProps-8hQ4M2z1.js";import"./TextField-CUuc5kqU.js";import"./useFormControl-CopSLkUh.js";import"./FormControl-DbcwfQFu.js";import"./ListContext-CA6PQpRK.js";import"./useControlled-8bSxec71.js";import"./createSvgIcon-DlGgZU6C.js";import"./FormHelperText-DVBN11Sz.js";import"./IconButton-CmmWWTSS.js";import"./ButtonBase-CouDHdYV.js";import"./DialogContent-r6OHTw38.js";import"./Button-DVD7topL.js";import"./Chip-CLq4-nC7.js";import"./MenuItem-NEdMCSZh.js";import"./dividerClasses-ClH17Faz.js";import"./_IconPopover-pVfd0O82.js";import"./Chip-BWuEUDu-.js";import"./Divider-DzkzjkIL.js";import"./Divider-CzdWdqy1.js";import"./TreeView-eSNabOVd.js";import"./Collapse-KLUbOUMi.js";import"./useSlot-CC1_x2QG.js";import"./AppInfoRow-BKyyK1JX.js";import"./AppSettings-CCPwkfxt.js";import"./SvgIcon-BTZ06rCa.js";import"./TableRow-CakLbtRf.js";import"./LinearProgress-1ejMra1J.js";import"./Spinner-BZgXNamb.js";import"./Dialog-CJahMWl6.js";import"./MapToggleButtonPresentational-dXHsTOdZ.js";import"./Remove-DSomqL-a.js";import"./Alert-BHdKqpDS.js";import"./ToggleButton-bZ4xMERt.js";import"./LinkButton-CE07GFMt.js";import"./TextField-mqAz_1Y-.js";import"./Switch-C37Whow7.js";import"./LabeledSwitch-2C7CKTT7.js";import"./DatePicker-CrA7bCO-.js";import"./DateTimePicker-BCi3PJ85.js";import"./FormControl-DhDyFZ3h.js";import"./FormHelperText-CeI-BKIk.js";import"./MenuItem-CpKmmeDm.js";import"./AccordionDetails-CH3uaA3P.js";import"./ErrorFallback-JrFXQBP8.js";import"./ErrorFallbackText-B03wrKQ3.js";import"./ErrorFallbackWrapper-CEShrWIW.js";import"./Brand-S5MHGTSi.js";import"./Edit-C7iGKUMY.js";function S(r){return r.substring(2).toLowerCase()}function K(r,e){return e.documentElement.clientWidth<r.clientX||e.documentElement.clientHeight<r.clientY}function z(r){const{children:e,disableReactTree:l=!1,mouseEvent:n="onClick",onClickAway:m,touchEvent:i="onTouchEnd"}=r,d=o.useRef(!1),p=o.useRef(null),c=o.useRef(!1),x=o.useRef(!1);o.useEffect(()=>(setTimeout(()=>{c.current=!0},0),()=>{c.current=!1}),[]);const N=Q(X(e),p),h=Y(s=>{const a=x.current;x.current=!1;const u=T(p.current);if(!c.current||!p.current||"clientX"in s&&K(s,u))return;if(d.current){d.current=!1;return}let E;s.composedPath?E=s.composedPath().indexOf(p.current)>-1:E=!u.documentElement.contains(s.target)||p.current.contains(s.target),!E&&(l||!a)&&m(s)}),A=s=>a=>{x.current=!0;const u=e.props[s];u&&u(a)},R={ref:N};return i!==!1&&(R[i]=A(i)),o.useEffect(()=>{if(i!==!1){const s=S(i),a=T(p.current),u=()=>{d.current=!0};return a.addEventListener(s,h),a.addEventListener("touchmove",u),()=>{a.removeEventListener(s,h),a.removeEventListener("touchmove",u)}}},[h,i]),n!==!1&&(R[n]=A(n)),o.useEffect(()=>{if(n!==!1){const s=S(n),a=T(p.current);return a.addEventListener(s,h),()=>{a.removeEventListener(s,h)}}},[h,n]),G.jsx(o.Fragment,{children:o.cloneElement(e,R)})}const Ct={title:"Surfaces/Popper",component:y,tags:["autodocs"],parameters:{docs:{description:{component:"\nPositioning primitive. Places a `ReactNode` next to an anchor element via [Popper.js](https://popper.js.org/) — nothing more.\n\nThin re-export of MUI's `Popper`. The DS bakes no defaults on this one because `Popper` is a *placement* primitive, not a container: it puts your content at a point in the viewport and steps back. Chrome — paper background, elevation, dismiss behaviour, focus management — is yours to add.\n\n---\n\n### The opinion\n\n**None.** `Popper` is a placement primitive with no visual output of its own. The DS wrapper is a pass-through: it delegates to Popper.js's positioning engine and leaves everything else — surface, dismiss, focus, roles — to the callsite.\n\nIf you find yourself hand-rolling paper + backdrop + click-outside on every `Popper` callsite, reach for `PopOver` instead — that's the DS's opinionated surface. See **When to use which** below.\n\n---\n\n### When to use which\n\n`Popper` vs `PopOver` vs `Tooltip` vs `Menu` — same shape (float content beside an anchor), different contract:\n\n| Component | Backdrop | Click-outside dismiss | Focus trap | Paper surface | Reach for it when |\n| --- | :---: | :---: | :---: | :---: | --- |\n| `Popper` | ✗ | ✗ | ✗ | ✗ | You want *just* positioning — typeaheads, floating labels, hover cards. You'll bring your own container and dismiss logic. |\n| `PopOver` | ✓ | ✓ | ✓ | ✓ (`elevation={3}`) | The floating content is interactive and modal in nature — a context menu, a filter panel, a user menu. |\n| `Tooltip` | ✗ | — | ✗ | ✓ (small chip) | Passive, hover-triggered hint. Not interactive. |\n| `DropdownButton` / `Menu` | ✗ | ✓ | ✓ | ✓ | A button that opens a menu of actions. |\n\nThe bright line: **is the floating content interactive?** If yes, and the user's focus should be trapped there until they dismiss it, use `PopOver`. If no, or you're building your own dismiss (e.g. an autocomplete listbox whose dismiss is tied to blur), use `Popper`.\n\n---\n\n### Accessibility\n\n`Popper` renders a positioned `div` and nothing else — no `role`, no `aria-*`. The callsite is responsible for:\n\n- Setting a `role` on the popped content that matches the pattern (`listbox`, `tooltip`, `dialog`, `menu`, ...).\n- Wiring `aria-controls` / `aria-expanded` on the anchor button to point at the popped element.\n- Focus management — moving focus in on open, restoring it on close, handling arrow keys inside a listbox.\n- Dismiss keys — Escape typically closes; the wrapper does not.\n\nIf you don't want to own any of that, reach for `PopOver` (interactive) or `Tooltip` (passive) instead.\n\n---\n\n### Other supported features\n\nEverything on MUI's `Popper` passes through unchanged: `placement` (12 values from `top-start` to `bottom-end`), `modifiers` (Popper.js middleware — offset, arrow, preventOverflow, flip), `disablePortal` (render inline rather than at the document root), `transition` (with a MUI `Fade` / `Grow` / `Slide` child using the `{ TransitionProps }` render-prop shape), and `keepMounted`.\n\n---\n\n### Example\n\n```tsx\nimport { Popper, Paper, Text } from \"@telicent-oss/ds\";\nimport ClickAwayListener from \"@mui/material/ClickAwayListener\";\nimport { useRef, useState } from \"react\";\n\nconst HoverCard = () => {\n  const anchorRef = useRef<HTMLButtonElement>(null);\n  const [open, setOpen] = useState(false);\n\n  return (\n    <>\n      <button ref={anchorRef} onClick={() => setOpen((v) => !v)}>\n        Preview\n      </button>\n\n      <Popper open={open} anchorEl={anchorRef.current} placement=\"bottom-start\">\n        <ClickAwayListener onClickAway={() => setOpen(false)}>\n          <Paper sx={{ p: 2, mt: 1 }} elevation={3}>\n            <Text>Free-form preview content.</Text>\n          </Paper>\n        </ClickAwayListener>\n      </Popper>\n    </>\n  );\n};\n```\n        "}}},argTypes:{open:{control:"boolean",description:"Whether the popped element is mounted and positioned. Controlled — hold it in the consumer.",table:{type:{summary:"boolean"},category:"Popper"}},anchorEl:{control:!1,description:"The element the pop is positioned against. A DOM node, a `VirtualElement` (for coord anchoring), or a callback returning one. Usually a ref's `.current`.",table:{type:{summary:"Element | VirtualElement | (() => Element | VirtualElement) | null"},category:"Popper"}},placement:{control:"select",options:["top-start","top","top-end","right-start","right","right-end","bottom-start","bottom","bottom-end","left-start","left","left-end"],description:"Where the popped element sits relative to the anchor. Popper.js will flip on collision unless you disable the flip modifier.",table:{defaultValue:{summary:"bottom"},category:"Popper"}},disablePortal:{control:"boolean",description:"Render the popped element inline (as a child of the anchor's parent) instead of portalling to the document root. Reach for this when the pop must sit inside a stacking context (a scrolling `overflow: hidden` panel, a Storybook doc block).",table:{defaultValue:{summary:"false"},category:"Popper"}},transition:{control:"boolean",description:"Enables the render-prop shape `children = ({ TransitionProps }) => <Transition {...TransitionProps}>...`. Wrap the pop content in a MUI `Fade` / `Grow` / `Slide` to animate open/close.",table:{defaultValue:{summary:"false"},category:"Popper"}},keepMounted:{control:"boolean",description:"Keep the popped element in the DOM while closed. Useful for SEO-visible content or when children hold expensive state.",table:{defaultValue:{summary:"false"},category:"Popper"}},modifiers:{control:!1,description:"[Popper.js modifiers](https://popper.js.org/docs/v2/modifiers/) — the escape hatch for custom positioning behaviour. Reach for this to tune `offset`, add an `arrow`, or override `preventOverflow`.",table:{type:{summary:"PopperModifier[]"},category:"Popper"}}}},v={parameters:{docs:{description:{story:"The base shape every other story varies. A button anchors a `Paper` positioned `bottom-start` beneath it. Dismiss is wired via `ClickAwayListener` — the DS `Popper` does not close on outside click by itself."}}},render:()=>{const r=o.useRef(null),[e,l]=o.useState(!1);return f("div",{style:{padding:40},children:[t(k,{ref:r,onClick:()=>l(n=>!n),children:e?"Close popper":"Open popper"}),t(y,{open:e,anchorEl:r.current,placement:"bottom-start",children:t(z,{onClickAway:()=>l(!1),children:t(w,{sx:{p:2,mt:1},elevation:3,children:t(C,{children:"Anchored to the button. Click away to dismiss."})})})})]})}},b={parameters:{docs:{description:{story:"`transition` swaps `children` for a render-prop that hands you `TransitionProps`. Wrap the content in a MUI `Fade` / `Grow` / `Slide` to animate the open/close. Popper.js recalculates position before the transition runs so the content never appears in the wrong place."}}},render:()=>{const r=o.useRef(null),[e,l]=o.useState(!1);return f("div",{style:{padding:40},children:[t(k,{ref:r,onClick:()=>l(n=>!n),children:e?"Close popper":"Open popper"}),t(y,{open:e,anchorEl:r.current,placement:"bottom-start",transition:!0,children:({TransitionProps:n})=>t(_,{...n,timeout:200,children:t(w,{sx:{p:2,mt:1},elevation:3,children:t(C,{children:"Fades in and out."})})})})]})}},g={parameters:{docs:{description:{story:'Popper supports twelve `placement` values around the anchor. Each button here anchors its own popper at the named placement. Popper.js will flip on collision — try scrolling this doc so a "top" placement runs out of room.'}}},render:()=>t(O,{direction:"column",gap:4,sx:{p:8},children:["top-start","top","top-end","bottom-start","bottom","bottom-end"].map(e=>t(()=>{const n=o.useRef(null),[m,i]=o.useState(!1);return f(O,{alignItems:"center",gap:2,children:[t(k,{ref:n,onClick:()=>i(d=>!d),children:e}),t(y,{open:m,anchorEl:n.current,placement:e,children:t(w,{sx:{px:1.5,py:.5,m:1},elevation:3,children:f(C,{variant:"caption",children:["Placed ",e]})})})]})},{},e))})},P={parameters:{docs:{description:{story:"The canonical `Popper` use case: an input's suggestion listbox. The pop is a `role=\"listbox\"` positioned under the input, dismiss is on blur (not click-away, so keyboard navigation stays intact), and `aria-controls` on the input points at the listbox `id`. Nothing about this needs `PopOver`'s backdrop or focus trap — the input owns focus throughout."}}},render:()=>{const r=["Apple","Apricot","Avocado","Blueberry","Cherry"],[e,l]=o.useState(""),[n,m]=o.useState(!1),i=o.useRef(null),d=r.filter(c=>c.toLowerCase().startsWith(e.toLowerCase())),p=n&&e.length>0&&d.length>0;return f("div",{style:{padding:40},children:[t("input",{ref:i,type:"text",placeholder:"Search fruit…",value:e,onChange:c=>l(c.target.value),onFocus:()=>m(!0),onBlur:()=>m(!1),"aria-controls":"typeahead-listbox","aria-expanded":p,style:{padding:8,width:240}}),t(y,{open:p,anchorEl:i.current,placement:"bottom-start",children:t(w,{id:"typeahead-listbox",role:"listbox",sx:{mt:.5,minWidth:240,py:.5},elevation:3,children:d.map(c=>t("div",{role:"option","aria-selected":!1,style:{padding:"6px 12px"},children:c},c))})})]})}};var F,L,B;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(B=(L=v.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var M,j,D;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(D=(j=b.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var W,I,H;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(H=(I=g.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var U,V,q;P.parameters={...P.parameters,docs:{...(U=P.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(q=(V=P.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const At=["Default","WithTransition","Placements","AsTypeahead"];export{P as AsTypeahead,v as Default,g as Placements,b as WithTransition,At as __namedExportsOrder,Ct as default};
