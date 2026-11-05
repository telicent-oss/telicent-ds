import{a as e,b as a,r as D,F as S}from"./iframe-CWOAzfBe.js";import{r as A,B as l}from"./UserProfileContent-PP1H7xMQ.js";import{X as O}from"./XIcon-dAr9ghTX.js";import{c as E,T as F}from"./Text-C2R7pbPC.js";import{F as p}from"./FlexBox-pZJaha5u.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-TjLPzi1x.js";import"./clsx-B-dksMZM.js";import"./styled-yqtTQwkH.js";import"./extendSxProp-CSX3D6uH.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-B2y4Re2S.js";import"./TransitionGroupContext-DeA-sbXP.js";import"./MapToggleButtonPresentational-CEHdazAY.js";import"./Remove-C8RIYb0h.js";import"./createSvgIcon-BHb-OUfU.js";import"./SvgIcon-ClJFXd34.js";import"./IconButton-DgurzXTO.js";import"./Paper-7wOgw64N.js";import"./Box-Be9RsHl4.js";import"./Brand-CKv8y3LC.js";import"./Typography-D-Cq-N2y.js";import"./IconButton-2rYQRxsd.js";import"./LinkButton-XU4sXk5X.js";import"./AppInfoRow-CS9nkuxJ.js";import"./_IconPopover-7sZ10jAV.js";import"./Box-BeooBb3v.js";import"./Popover-vUzglvRh.js";import"./utils-Bhl493yy.js";import"./index-DWVJrjyq.js";import"./index-DjnTYE3b.js";import"./Modal-DpeBRA_s.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-DyVW6uNc.js";import"./useSlotProps-DYSwu3K9.js";import"./InfoIcon-Dm5ciMv4.js";import"./AppSettings-CAogJme_.js";import"./CogIcon-DoUxEvuA.js";import"./Badge-D_pdYXXr.js";import"./Badge-B8UvVhKt.js";import"./Chip-BqgzveIY.js";import"./Chip-Cmk_bJZP.js";import"./Divider-pNwF1iHD.js";import"./Divider-CFFp1ukz.js";import"./dividerClasses-CvuSSyUr.js";import"./ThemeSwitchRow-BIg4pT4X.js";import"./Skeleton-D5xdqxBS.js";import"./Skeleton-D4kMWV6G.js";import"./TextField-BCQeTXpB.js";import"./useFormControl-Du95Ze_o.js";import"./FormControl-psQBgE76.js";import"./ListContext-D0cTsJmH.js";import"./useControlled-CQQMs9uM.js";import"./FormHelperText-Bpw2KcDZ.js";import"./MenuItem-D6VvEmRc.js";import"./ExpandMoreIcon-CD2Z_dgw.js";import"./ListItem-BPZeYGxz.js";import"./Toolbar-CToRG8p1.js";import"./Close-BxICseQ8.js";import"./Popper-CrLTcQdC.js";import"./FormControlLabel-a66K3OEG.js";import"./Stack-BSuJYMST.js";import"./styled-BPbJu004.js";import"./createStyled-DnaBivQ6.js";import"./useThemeProps-DwBSHX6c.js";import"./Edit-BGN1rUEo.js";import"./SvgIcon-Dte4xqyw.js";import"./TableRow-CJHAGSMA.js";import"./TableCell-BcaiVUkP.js";import"./TreeView-Bwkbpo83.js";import"./useThemeProps-Ce3qTZG0.js";import"./index-Db069xsF.js";import"./Collapse-CuLQ9H5N.js";import"./Dialog-DcXNP11i.js";import"./DialogContent-B_RMQklx.js";import"./Alert-D1RRFPA_.js";import"./useSlot-BCKzb_k_.js";import"./LinearProgress-DYdo5kC4.js";import"./LinearProgress-BwQMcTrR.js";import"./Spinner-BUwM6wcC.js";import"./CircularProgress-hkecqCAX.js";import"./TextField-BvQJwsnk.js";import"./FormControl-C6XdQTGq.js";import"./FormHelperText-Cpr8FSPI.js";import"./LabeledSwitch-CZe5HyJI.js";import"./Switch-Bgf3cuRU.js";import"./Switch-C9fMxVpv.js";import"./RadioGroup-BjERn-tn.js";import"./Container-F3J-sHJz.js";import"./ToggleButton-DaGu9yPS.js";import"./ToggleButton--S7xR4zz.js";import"./ToggleButtonGroup-s374tJhr.js";import"./MenuItem-CpoRDk7B.js";import"./Tabs-BsDialm7.js";import"./AccordionSummary-FJf2LPtG.js";import"./Paper-CcJbfhLV.js";import"./ErrorFallback-r5W_n7Xq.js";import"./ErrorFallbackText-B8i4qwXi.js";import"./ErrorFallbackWrapper-TPpQ5mRs.js";const{fn:I}=__STORYBOOK_MODULE_TEST__,kr={title:"Surfaces/Drawer",component:A,tags:["autodocs"],parameters:{docs:{description:{component:`
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
