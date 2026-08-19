import{r as m,a as e,j as o,F as c}from"./iframe-DMZf_z8l.js";import{D as p}from"./Dialog-CaI3P_EF.js";import{B as i}from"./Button-Czj-gC98.js";import{D as g}from"./DialogTitle-DvFbBzJm.js";import{T as d}from"./Typography-Dihg_BSw.js";import{D,a as u}from"./DialogContent-BxDFWslk.js";import"./preload-helper-C1FmrZbK.js";import"./generateUtilityClass-CywfVb3a.js";import"./styled-BhjXjSTi.js";import"./generateUtilityClasses-E8kj8mkK.js";import"./ButtonBase-CaB-e0eH.js";import"./useTimeout-Dp-kS1kI.js";import"./TransitionGroupContext-DfY19jQi.js";import"./useForkRef-grDcQant.js";import"./useIsFocusVisible-DqWR0OJa.js";import"./useEventCallback-DqnP5vMh.js";import"./useTheme-R582sJ1x.js";import"./Paper-CgwysQMM.js";import"./Fade-DBDG-Qkn.js";import"./utils-BLLjmJWZ.js";import"./index-DUICm0b5.js";import"./getReactElementRef-Buh25I8b.js";import"./Modal-B7xKpwtI.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-C_N5TE1Z.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlotProps-ByV-l5Lc.js";import"./Portal-C8VZQ10h.js";import"./Backdrop-CealCOy_.js";const R={title:"Feedback/Dialog",component:p,tags:["autodocs"],parameters:{docs:{description:{component:`
A **simple wrapper** around MUI's \`<Dialog>\` component for consistent usage across the design system.  
Accepts all standard MUI \`DialogProps\`.

---

Example usage:

\`\`\`jsx
const [open, setOpen] = useState(false);

<>
  <Button onClick={() => setOpen(true)}>Open</Button>
  <Dialog open={open} onClose={() => setOpen(false)}>
    <DialogTitle>Simple Dialog</DialogTitle>
    <DialogContent>
      <Typography>This is a minimal dialog example.</Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setOpen(false)}>Close</Button>
    </DialogActions>
  </Dialog>
</>
\`\`\`
        `}}}},n={render:()=>{const[l,t]=m.useState(!1);return e(c,{children:[o(i,{variant:"contained",onClick:()=>t(!0),children:"Open Dialog"}),e(p,{open:l,onClose:()=>t(!1),children:[o(g,{children:"Basic Dialog"}),o(D,{children:o(d,{children:"This is a simple reusable dialog component."})}),e(u,{children:[o(i,{onClick:()=>t(!1),children:"Cancel"}),o(i,{onClick:()=>t(!1),variant:"contained",children:"Confirm"})]})]})]})}};var a,r,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Dialog
        </Button>

        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Basic Dialog</DialogTitle>
          <DialogContent>
            <Typography>This is a simple reusable dialog component.</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)} variant="contained">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </>;
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const V=["Basic"];export{n as Basic,V as __namedExportsOrder,R as default};
