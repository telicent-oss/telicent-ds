import{a as t,j as o,F as c}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{r as m}from"./index-CTjT7uj6.js";import{D as l}from"./Dialog-IWHBpnq2.js";import{B as a}from"./Button-ZGJdOyfv.js";import{D as g}from"./DialogTitle-CoXc1VwT.js";import{T as d}from"./Typography-Dt5bLYJQ.js";import{a as D,b as u}from"./DialogContent-BwRvQmzV.js";import"./jsx-runtime-CB_V9I5Y.js";import"./identifier-NKQQRePw.js";import"./styled-CjWt8UVi.js";import"./generateUtilityClasses-B2BBkElw.js";import"./DefaultPropsProvider-DtThQIVP.js";import"./ButtonBase-DFf65YyL.js";import"./TransitionGroupContext-CcEGFwN5.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./useTheme-DPnT8y_r.js";import"./useTheme-Ke1uTKsJ.js";import"./Paper-CLsLNy44.js";import"./Modal-3f11im9F.js";import"./utils-B1Pnwxg8.js";import"./index-DEWJqUJ8.js";import"./useId-DMVUMfb1.js";const q={title:"Feedback/Dialog",component:l,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},e={render:()=>{const[p,n]=m.useState(!1);return t(c,{children:[o(a,{variant:"contained",onClick:()=>n(!0),children:"Open Dialog"}),t(l,{open:p,onClose:()=>n(!1),children:[o(g,{children:"Basic Dialog"}),o(D,{children:o(d,{children:"This is a simple reusable dialog component."})}),t(u,{children:[o(a,{onClick:()=>n(!1),children:"Cancel"}),o(a,{onClick:()=>n(!1),variant:"contained",children:"Confirm"})]})]})]})}};var i,s,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const z=["Basic"];export{e as Basic,z as __namedExportsOrder,q as default};
