import{a as e,b as a,r as D,F as S}from"./iframe-BjrXztvy.js";import{r as A,B as l}from"./UserProfileContent-YwxxBLO1.js";import{X as O}from"./XIcon-ZQ00GxhK.js";import{c as E,T as F}from"./Text-BkX1azto.js";import{F as p}from"./FlexBox-C2m_hHiB.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-dBpFgvsm.js";import"./clsx-B-dksMZM.js";import"./styled-CZSAv6ph.js";import"./extendSxProp-Bthi1mip.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-DKC4tNwY.js";import"./TransitionGroupContext-Bkt8ykp0.js";import"./MapToggleButtonPresentational-bfG7yowY.js";import"./Remove-gsWyX-Lp.js";import"./createSvgIcon-CPBnrQiH.js";import"./SvgIcon-B5isJYog.js";import"./IconButton-Bn9Hma8U.js";import"./Paper-BZgZdenZ.js";import"./Box-F47BA0Hn.js";import"./Brand-C4AyXs8s.js";import"./Typography-WZdIHWv0.js";import"./IconButton-BZNX4IRe.js";import"./LinkButton-BiG5XURl.js";import"./AppInfoRow-QQUqARHA.js";import"./_IconPopover-DMkjh4MO.js";import"./Box-D4Yea7CC.js";import"./Popover-CHGOs9uC.js";import"./utils-BtEp1Xpe.js";import"./index-BxB4E5u0.js";import"./index-D0p7aeEW.js";import"./Modal-Cwfc4HGx.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-BF5TirMe.js";import"./useSlotProps-BNqAOz95.js";import"./InfoIcon-D83JWA8r.js";import"./AppSettings-D0R77tUT.js";import"./CogIcon-DausHvAi.js";import"./Badge-CijpDrIE.js";import"./Badge-ChEc66ZK.js";import"./Chip-C4L73zbZ.js";import"./Chip-Cehwhsrm.js";import"./Divider-CEsBrrMM.js";import"./Divider-D90yCN7B.js";import"./dividerClasses-CmrggnBC.js";import"./ThemeSwitchRow-CzgtAJPj.js";import"./Skeleton-Cnro9Ssf.js";import"./Skeleton-YERebpLh.js";import"./TextField-Be_m1itn.js";import"./useFormControl-BXFuf1AA.js";import"./FormControl-CpIrVJXG.js";import"./ListContext-BbQ-ELWI.js";import"./useControlled-B3nW4gSi.js";import"./FormHelperText-DriOhB8T.js";import"./MenuItem-9AWDicSn.js";import"./ExpandMoreIcon-Drhp9NBW.js";import"./ListItem-BQbfhaNb.js";import"./Toolbar-NHe4wN1N.js";import"./Close-PYRyZLFk.js";import"./Popper-BP6_mYu6.js";import"./FormControlLabel-uXfgMOYb.js";import"./Stack-K8HBDx6V.js";import"./styled-OzlqGBn7.js";import"./createStyled-ChpmfdhO.js";import"./useThemeProps-Ggzu69aw.js";import"./Edit-D7Wj015S.js";import"./SvgIcon-C9kKGRGN.js";import"./TableRow-BEr1GK-h.js";import"./TableCell-CKU-Sz5Y.js";import"./TreeView-C6Uvz5eX.js";import"./useThemeProps-DBqV773e.js";import"./index-fBdo_AAp.js";import"./Collapse-zg8g8jza.js";import"./Dialog-FcaLo1D3.js";import"./DialogContent-Cgw15Yeq.js";import"./Alert-DObdqKgJ.js";import"./useSlot-BZ0PDpI2.js";import"./LinearProgress-BPc8EmDZ.js";import"./LinearProgress-CzGVD_iw.js";import"./Spinner-CqnH8Z1g.js";import"./CircularProgress-BVSVe6Bz.js";import"./TextField-PgPe3GS0.js";import"./FormControl-CpHzLQRo.js";import"./FormHelperText-DGEG7tzH.js";import"./LabeledSwitch-CTvl5H5e.js";import"./Switch-CDvU1aS9.js";import"./Switch-DaX5OEsQ.js";import"./RadioGroup-MrifhHnI.js";import"./Container-Dz0UBrhB.js";import"./ToggleButton-CW3SCIEP.js";import"./ToggleButton-COzVB-Rg.js";import"./ToggleButtonGroup-CxQmKDVQ.js";import"./MenuItem-DfJXPFQL.js";import"./Tabs-UNb_SPs_.js";import"./AccordionSummary-cUjWgv_9.js";import"./Paper-BL8jtYAu.js";import"./ErrorFallback-DxZnaklR.js";import"./ErrorFallbackText-CBSkGSIV.js";import"./ErrorFallbackWrapper-2Ab5_OqS.js";const{fn:I}=__STORYBOOK_MODULE_TEST__,kr={title:"Surfaces/Drawer",component:A,tags:["autodocs"],parameters:{docs:{description:{component:`
A controlled side sheet for a task done beside the page: filters, details, settings. MUI's \`Drawer\` under the DS theme.

---

### The opinion

- **Controlled.** The caller owns \`open\` and \`onClose\`. Escape, a backdrop click and your close button all go through \`onClose\`, so dismissal has one path. A form inside can discard its draft there and know it ran on every dismissal.
- **\`width\`.** A width for a left or right panel, in px when a number. No more \`PaperProps={{ sx: { width } }}\`.
- **Capped at the viewport.** A temporary (modal) drawer's paper has \`maxWidth: 100vw\`, so a fixed width never runs off a narrow screen.

---

### Accessibility

- It's modal: focus moves inside when it opens, is trapped while it's open, and returns to the trigger when it closes (WCAG 2.4.3).
- Give the trigger \`aria-expanded\`, and the panel a heading and a labelled close button (WCAG 4.1.2).

---

### Defaults

- \`width\`: unset. Pass one; MUI otherwise sizes the paper to its content.
- \`maxWidth\`: \`100vw\`, on temporary drawers only. The deprecated, persistent \`InsetDrawer\` keeps its own layout.

---

### Other supported features

- Every MUI \`Drawer\` prop passes through: \`anchor\`, \`variant\`, \`PaperProps\` (your \`sx\` merges after \`width\`), \`ModalProps\`.
- The paper is a flex column, so a header and footer stay put while a \`flex: 1\` body scrolls.

---

### When & how to use it

- **Use it** for a side task with its own controls, such as a filter panel with Apply.
- **Don't use it** for a small contextual overlay; reach for \`PopOver\`.
- **Not for the map inset.** The deprecated \`InsetDrawer\` is the map's ref-driven panel, kept for existing consumers.

---

### Example

\`\`\`tsx
import { Button, Drawer, FlexBox, Text, XIcon } from "@telicent-oss/ds";

<Drawer anchor="right" width={420} open={isOpen} onClose={onClose}>
  <FlexBox direction="row" justifyContent="space-between" sx={{ px: 3, py: 2 }}>
    <Text component="h2">Refine</Text>
    <Button variant="text" aria-label="Close refine" onClick={onClose}>
      <XIcon />
    </Button>
  </FlexBox>
  <FlexBox sx={{ flex: 1, overflowY: "auto", px: 3 }}>{filters}</FlexBox>
  <FlexBox direction="row" justifyContent="flex-end" sx={{ px: 3, py: 2 }}>
    <Button variant="primary" onClick={onApply}>Apply</Button>
  </FlexBox>
</Drawer>
\`\`\`
        `}}},argTypes:{width:{control:{type:"number"},description:"Width of a left or right panel, in px when a number. Capped at the viewport.",table:{type:{summary:"number | string"}}},anchor:{control:{type:"select"},options:["left","right","top","bottom"],description:"The edge the drawer opens from."},open:{control:{type:"boolean"},description:"Controlled. The caller owns it."},onClose:{action:"closed",description:"Escape, a backdrop click, or your close button."},children:{control:!1}},args:{onClose:I()}},d=({body:r,...c})=>{const[o,h]=D.useState(!1),m=()=>h(!1);return a(S,{children:[e(l,{variant:"primary","aria-expanded":o,onClick:()=>h(!0),children:"Open drawer"}),a(A,{anchor:"right",...c,open:o,onClose:m,children:[a(p,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{px:3,py:2,borderBottom:1,borderColor:"divider"},children:[e(E,{sx:{fontSize:20},children:"Refine"}),e(l,{variant:"text","aria-label":"Close refine",onClick:m,sx:{minWidth:0},children:e(O,{})})]}),e(p,{sx:{flex:1,overflowY:"auto",px:3,py:2},children:r??e(F,{children:"Panel content"})}),e(p,{direction:"row",justifyContent:"flex-end",sx:{px:3,py:2,borderTop:1,borderColor:"divider"},children:e(l,{variant:"primary",onClick:m,children:"Apply"})})]})]})},t={args:{open:!1},parameters:{docs:{description:{story:"Opened from a button. The close button, Escape and a backdrop click all close it through `onClose`."}}},render:()=>e(d,{})},i={args:{open:!1,width:420},parameters:{docs:{description:{story:"`width={420}` from the right: the filter panel's shape."}}},render:r=>e(d,{width:r.width})},n={args:{open:!1,width:1600},parameters:{docs:{description:{story:"A width wider than the screen stops at the viewport, so the sheet never runs off a narrow window."}}},render:r=>e(d,{width:r.width})},s={args:{open:!1,width:420},parameters:{docs:{description:{story:"Long content scrolls in a `flex: 1` body between a fixed header and footer, because the paper is a flex column."}}},render:r=>e(d,{width:r.width,body:e(p,{direction:"column",gap:1,children:Array.from({length:60},(c,o)=>a(F,{children:["Filter option ",o+1]},o))})})},Ar=["Default","Width","CappedAtViewport","HeaderBodyFooter"];var f,w,u;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    open: false
  },
  parameters: {
    docs: {
      description: {
        story: "Opened from a button. The close button, Escape and a backdrop click all close it through \`onClose\`."
      }
    }
  },
  render: () => <Sheet />
}`,...(u=(w=t.parameters)==null?void 0:w.docs)==null?void 0:u.source}}};var x,g,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    open: false,
    width: 420
  },
  parameters: {
    docs: {
      description: {
        story: "\`width={420}\` from the right: the filter panel's shape."
      }
    }
  },
  render: args => <Sheet width={args.width} />
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,C,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    open: false,
    width: 1600
  },
  parameters: {
    docs: {
      description: {
        story: "A width wider than the screen stops at the viewport, so the sheet never runs off a narrow window."
      }
    }
  },
  render: args => <Sheet width={args.width} />
}`,...(v=(C=n.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var B,T,k;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    open: false,
    width: 420
  },
  parameters: {
    docs: {
      description: {
        story: "Long content scrolls in a \`flex: 1\` body between a fixed header and footer, because the paper is a flex column."
      }
    }
  },
  render: args => <Sheet width={args.width} body={<FlexBox direction="column" gap={1}>
          {Array.from({
      length: 60
    }, (_, i) => <Text key={i}>Filter option {i + 1}</Text>)}
        </FlexBox>} />
}`,...(k=(T=s.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};export{n as CappedAtViewport,t as Default,s as HeaderBodyFooter,i as Width,Ar as __namedExportsOrder,kr as default};
