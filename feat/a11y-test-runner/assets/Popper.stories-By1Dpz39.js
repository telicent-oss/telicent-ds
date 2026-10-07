import{r as o,j as G,b as f,a as t}from"./iframe-Y1N6bk8p.js";import{O as y,B as k}from"./DropdownButton-DLugr0xg.js";import{P as w}from"./Paper-D1WHigEv.js";import{T as C}from"./Text-B8NihZq2.js";import{F as O}from"./FlexBox-DoF2Tbdg.js";import{u as Q,b as Y}from"./TransitionGroupContext-w0BzhBs7.js";import{g as X,F as _}from"./Modal-B4PiUlG8.js";import{o as T}from"./ownerDocument-DW-IO8s5.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-Cl7uik3S.js";import"./SvgIcon-CxVDfqSx.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-DiMPCvor.js";import"./extendSxProp-DbTy98VK.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-D-jdU__u.js";import"./Box-D3afCydQ.js";import"./Box-CXk6M6mR.js";import"./Container-D3Y9-mOQ.js";import"./styled-WAGLmHxX.js";import"./createStyled-BL_vYvCM.js";import"./useThemeProps-Biv_2OSw.js";import"./Stack-D8q2WUfD.js";import"./Typography-DmCu6xYW.js";import"./Paper-DN68ECSn.js";import"./CogIcon-DvPSQXZo.js";import"./InfoIcon-Ct5f0UzT.js";import"./ExpandMoreIcon-CeKVlKWF.js";import"./ThemeSwitchRow-BSMzMCw1.js";import"./index-LiVer2cg.js";import"./AdapterDayjs-DP2CnPXm.js";import"./useThemeProps-DFwnlb8_.js";import"./Popover-CwKmJLrH.js";import"./utils-FxzgolTc.js";import"./index-CriZbu4z.js";import"./resolveComponentProps-DtqC7Jdc.js";import"./TextField-D67MRuoC.js";import"./useFormControl-D_Xige0L.js";import"./FormControl-v9I3oitM.js";import"./ListContext-BSGrFhbe.js";import"./useControlled-zS0ZvXST.js";import"./createSvgIcon-CqGXTWJV.js";import"./FormHelperText-DAWPwhSQ.js";import"./IconButton-BTiO4iMN.js";import"./ButtonBase-Dh8n1X5l.js";import"./DialogContent-C9N2UKrx.js";import"./Button-D5koxhYf.js";import"./Chip-BA5IS77I.js";import"./MenuItem-2qdsD5am.js";import"./dividerClasses-ClH17Faz.js";import"./_IconPopover-BSW2238Q.js";import"./Chip-Bbcx00in.js";import"./Divider-BxRyf5aR.js";import"./Divider-Cu_DPk8e.js";import"./TreeView-BLSiq3QR.js";import"./Collapse-DAMiDAlQ.js";import"./useSlot-sFClRxF7.js";import"./AppInfoRow-CjdXbBLa.js";import"./AppSettings-Dhwai-20.js";import"./SvgIcon-DDcy4gnv.js";import"./TableRow-CUQU1TNz.js";import"./LinearProgress-DijGLa0J.js";import"./Spinner-D28ZfjXd.js";import"./Dialog-B3meZdDB.js";import"./MapToggleButtonPresentational-DWQxMudH.js";import"./Remove-DH3EMgKC.js";import"./Alert-D3Q4Es8x.js";import"./ToggleButton-ClBjS5Ky.js";import"./LinkButton-C0iWbNJQ.js";import"./TextField-BgCiXhS4.js";import"./Switch-DUAgT_Dc.js";import"./LabeledSwitch-BWamddRC.js";import"./DatePicker-G9qJ6QsT.js";import"./DateTimePicker-BmvwZZ-N.js";import"./FormControl-DNaghd-n.js";import"./FormHelperText-kXl3i3tQ.js";import"./MenuItem-B6NIKMg1.js";import"./AccordionDetails-xda9fO-T.js";import"./ErrorFallback-Cmgcm6jb.js";import"./ErrorFallbackText-COet1f5O.js";import"./ErrorFallbackWrapper-C4fgBbmv.js";import"./Brand-NzozEoiB.js";import"./Edit-BAaxdE7v.js";function S(r){return r.substring(2).toLowerCase()}function K(r,e){return e.documentElement.clientWidth<r.clientX||e.documentElement.clientHeight<r.clientY}function z(r){const{children:e,disableReactTree:l=!1,mouseEvent:n="onClick",onClickAway:m,touchEvent:i="onTouchEnd"}=r,d=o.useRef(!1),p=o.useRef(null),c=o.useRef(!1),x=o.useRef(!1);o.useEffect(()=>(setTimeout(()=>{c.current=!0},0),()=>{c.current=!1}),[]);const N=Q(X(e),p),h=Y(s=>{const a=x.current;x.current=!1;const u=T(p.current);if(!c.current||!p.current||"clientX"in s&&K(s,u))return;if(d.current){d.current=!1;return}let E;s.composedPath?E=s.composedPath().indexOf(p.current)>-1:E=!u.documentElement.contains(s.target)||p.current.contains(s.target),!E&&(l||!a)&&m(s)}),A=s=>a=>{x.current=!0;const u=e.props[s];u&&u(a)},R={ref:N};return i!==!1&&(R[i]=A(i)),o.useEffect(()=>{if(i!==!1){const s=S(i),a=T(p.current),u=()=>{d.current=!0};return a.addEventListener(s,h),a.addEventListener("touchmove",u),()=>{a.removeEventListener(s,h),a.removeEventListener("touchmove",u)}}},[h,i]),n!==!1&&(R[n]=A(n)),o.useEffect(()=>{if(n!==!1){const s=S(n),a=T(p.current);return a.addEventListener(s,h),()=>{a.removeEventListener(s,h)}}},[h,n]),G.jsx(o.Fragment,{children:o.cloneElement(e,R)})}const Ct={title:"Surfaces/Popper",component:y,tags:["autodocs"],parameters:{docs:{description:{component:"\nPositioning primitive. Places a `ReactNode` next to an anchor element via [Popper.js](https://popper.js.org/) — nothing more.\n\nThin re-export of MUI's `Popper`. The DS bakes no defaults on this one because `Popper` is a *placement* primitive, not a container: it puts your content at a point in the viewport and steps back. Chrome — paper background, elevation, dismiss behaviour, focus management — is yours to add.\n\n---\n\n### The opinion\n\n**None.** `Popper` is a placement primitive with no visual output of its own. The DS wrapper is a pass-through: it delegates to Popper.js's positioning engine and leaves everything else — surface, dismiss, focus, roles — to the callsite.\n\nIf you find yourself hand-rolling paper + backdrop + click-outside on every `Popper` callsite, reach for `PopOver` instead — that's the DS's opinionated surface. See **When to use which** below.\n\n---\n\n### When to use which\n\n`Popper` vs `PopOver` vs `Tooltip` vs `Menu` — same shape (float content beside an anchor), different contract:\n\n| Component | Backdrop | Click-outside dismiss | Focus trap | Paper surface | Reach for it when |\n| --- | :---: | :---: | :---: | :---: | --- |\n| `Popper` | ✗ | ✗ | ✗ | ✗ | You want *just* positioning — typeaheads, floating labels, hover cards. You'll bring your own container and dismiss logic. |\n| `PopOver` | ✓ | ✓ | ✓ | ✓ (`elevation={3}`) | The floating content is interactive and modal in nature — a context menu, a filter panel, a user menu. |\n| `Tooltip` | ✗ | — | ✗ | ✓ (small chip) | Passive, hover-triggered hint. Not interactive. |\n| `DropdownButton` / `Menu` | ✗ | ✓ | ✓ | ✓ | A button that opens a menu of actions. |\n\nThe bright line: **is the floating content interactive?** If yes, and the user's focus should be trapped there until they dismiss it, use `PopOver`. If no, or you're building your own dismiss (e.g. an autocomplete listbox whose dismiss is tied to blur), use `Popper`.\n\n---\n\n### Accessibility\n\n`Popper` renders a positioned `div` and nothing else — no `role`, no `aria-*`. The callsite is responsible for:\n\n- Setting a `role` on the popped content that matches the pattern (`listbox`, `tooltip`, `dialog`, `menu`, ...).\n- Wiring `aria-controls` / `aria-expanded` on the anchor button to point at the popped element.\n- Focus management — moving focus in on open, restoring it on close, handling arrow keys inside a listbox.\n- Dismiss keys — Escape typically closes; the wrapper does not.\n\nIf you don't want to own any of that, reach for `PopOver` (interactive) or `Tooltip` (passive) instead.\n\n---\n\n### Other supported features\n\nEverything on MUI's `Popper` passes through unchanged: `placement` (12 values from `top-start` to `bottom-end`), `modifiers` (Popper.js middleware — offset, arrow, preventOverflow, flip), `disablePortal` (render inline rather than at the document root), `transition` (with a MUI `Fade` / `Grow` / `Slide` child using the `{ TransitionProps }` render-prop shape), and `keepMounted`.\n\n---\n\n### Example\n\n```tsx\nimport { Popper, Paper, Text } from \"@telicent-oss/ds\";\nimport ClickAwayListener from \"@mui/material/ClickAwayListener\";\nimport { useRef, useState } from \"react\";\n\nconst HoverCard = () => {\n  const anchorRef = useRef<HTMLButtonElement>(null);\n  const [open, setOpen] = useState(false);\n\n  return (\n    <>\n      <button ref={anchorRef} onClick={() => setOpen((v) => !v)}>\n        Preview\n      </button>\n\n      <Popper open={open} anchorEl={anchorRef.current} placement=\"bottom-start\">\n        <ClickAwayListener onClickAway={() => setOpen(false)}>\n          <Paper sx={{ p: 2, mt: 1 }} elevation={3}>\n            <Text>Free-form preview content.</Text>\n          </Paper>\n        </ClickAwayListener>\n      </Popper>\n    </>\n  );\n};\n```\n        "}}},argTypes:{open:{control:"boolean",description:"Whether the popped element is mounted and positioned. Controlled — hold it in the consumer.",table:{type:{summary:"boolean"},category:"Popper"}},anchorEl:{control:!1,description:"The element the pop is positioned against. A DOM node, a `VirtualElement` (for coord anchoring), or a callback returning one. Usually a ref's `.current`.",table:{type:{summary:"Element | VirtualElement | (() => Element | VirtualElement) | null"},category:"Popper"}},placement:{control:"select",options:["top-start","top","top-end","right-start","right","right-end","bottom-start","bottom","bottom-end","left-start","left","left-end"],description:"Where the popped element sits relative to the anchor. Popper.js will flip on collision unless you disable the flip modifier.",table:{defaultValue:{summary:"bottom"},category:"Popper"}},disablePortal:{control:"boolean",description:"Render the popped element inline (as a child of the anchor's parent) instead of portalling to the document root. Reach for this when the pop must sit inside a stacking context (a scrolling `overflow: hidden` panel, a Storybook doc block).",table:{defaultValue:{summary:"false"},category:"Popper"}},transition:{control:"boolean",description:"Enables the render-prop shape `children = ({ TransitionProps }) => <Transition {...TransitionProps}>...`. Wrap the pop content in a MUI `Fade` / `Grow` / `Slide` to animate open/close.",table:{defaultValue:{summary:"false"},category:"Popper"}},keepMounted:{control:"boolean",description:"Keep the popped element in the DOM while closed. Useful for SEO-visible content or when children hold expensive state.",table:{defaultValue:{summary:"false"},category:"Popper"}},modifiers:{control:!1,description:"[Popper.js modifiers](https://popper.js.org/docs/v2/modifiers/) — the escape hatch for custom positioning behaviour. Reach for this to tune `offset`, add an `arrow`, or override `preventOverflow`.",table:{type:{summary:"PopperModifier[]"},category:"Popper"}}}},v={parameters:{docs:{description:{story:"The base shape every other story varies. A button anchors a `Paper` positioned `bottom-start` beneath it. Dismiss is wired via `ClickAwayListener` — the DS `Popper` does not close on outside click by itself."}}},render:()=>{const r=o.useRef(null),[e,l]=o.useState(!1);return f("div",{style:{padding:40},children:[t(k,{ref:r,onClick:()=>l(n=>!n),children:e?"Close popper":"Open popper"}),t(y,{open:e,anchorEl:r.current,placement:"bottom-start",children:t(z,{onClickAway:()=>l(!1),children:t(w,{sx:{p:2,mt:1},elevation:3,children:t(C,{children:"Anchored to the button. Click away to dismiss."})})})})]})}},b={parameters:{docs:{description:{story:"`transition` swaps `children` for a render-prop that hands you `TransitionProps`. Wrap the content in a MUI `Fade` / `Grow` / `Slide` to animate the open/close. Popper.js recalculates position before the transition runs so the content never appears in the wrong place."}}},render:()=>{const r=o.useRef(null),[e,l]=o.useState(!1);return f("div",{style:{padding:40},children:[t(k,{ref:r,onClick:()=>l(n=>!n),children:e?"Close popper":"Open popper"}),t(y,{open:e,anchorEl:r.current,placement:"bottom-start",transition:!0,children:({TransitionProps:n})=>t(_,{...n,timeout:200,children:t(w,{sx:{p:2,mt:1},elevation:3,children:t(C,{children:"Fades in and out."})})})})]})}},g={parameters:{docs:{description:{story:'Popper supports twelve `placement` values around the anchor. Each button here anchors its own popper at the named placement. Popper.js will flip on collision — try scrolling this doc so a "top" placement runs out of room.'}}},render:()=>t(O,{direction:"column",gap:4,sx:{p:8},children:["top-start","top","top-end","bottom-start","bottom","bottom-end"].map(e=>t(()=>{const n=o.useRef(null),[m,i]=o.useState(!1);return f(O,{alignItems:"center",gap:2,children:[t(k,{ref:n,onClick:()=>i(d=>!d),children:e}),t(y,{open:m,anchorEl:n.current,placement:e,children:t(w,{sx:{px:1.5,py:.5,m:1},elevation:3,children:f(C,{variant:"caption",children:["Placed ",e]})})})]})},{},e))})},P={parameters:{docs:{description:{story:"The canonical `Popper` use case: an input's suggestion listbox. The pop is a `role=\"listbox\"` positioned under the input, dismiss is on blur (not click-away, so keyboard navigation stays intact), and `aria-controls` on the input points at the listbox `id`. Nothing about this needs `PopOver`'s backdrop or focus trap — the input owns focus throughout."}}},render:()=>{const r=["Apple","Apricot","Avocado","Blueberry","Cherry"],[e,l]=o.useState(""),[n,m]=o.useState(!1),i=o.useRef(null),d=r.filter(c=>c.toLowerCase().startsWith(e.toLowerCase())),p=n&&e.length>0&&d.length>0;return f("div",{style:{padding:40},children:[t("input",{ref:i,type:"text",placeholder:"Search fruit…",value:e,onChange:c=>l(c.target.value),onFocus:()=>m(!0),onBlur:()=>m(!1),"aria-controls":"typeahead-listbox","aria-expanded":p,style:{padding:8,width:240}}),t(y,{open:p,anchorEl:i.current,placement:"bottom-start",children:t(w,{id:"typeahead-listbox",role:"listbox",sx:{mt:.5,minWidth:240,py:.5},elevation:3,children:d.map(c=>t("div",{role:"option","aria-selected":!1,style:{padding:"6px 12px"},children:c},c))})})]})}};var F,L,B;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
