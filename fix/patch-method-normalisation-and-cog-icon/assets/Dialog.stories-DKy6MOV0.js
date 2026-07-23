import{r,y as T,_ as B,z as y,b as O,a as i,j as e,F as k}from"./iframe-BqqKlwwa.js";import{D as u}from"./Dialog-CU2Sdzg4.js";import{B as l}from"./Button--P2V-vbf.js";import{c as j}from"./generateUtilityClass-C21e_TMF.js";import{c as v,s as A}from"./styled-DYH3NNtb.js";import{a as b,g as S,b as _,c as R}from"./DialogContent-CtGptt-v.js";import{T as D}from"./Typography-r9WARuqd.js";import"./preload-helper-C1FmrZbK.js";import"./generateUtilityClasses-CXTZVc4r.js";import"./ButtonBase-Bplzc8va.js";import"./TransitionGroupContext-DiVglu5Y.js";import"./useTheme-D5fnxfrf.js";import"./Paper-CJpWpN4s.js";import"./Modal-CFi7NpCZ.js";import"./utils-ClVsDaXg.js";import"./index-CRMvLHot.js";import"./resolveComponentProps-Cd0rbuoE.js";const E=["className","id"],M=t=>{const{classes:o}=t;return v({root:["root"]},S,o)},P=A(D,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(t,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),U=r.forwardRef(function(o,p){const s=T({props:o,name:"MuiDialogTitle"}),{className:f,id:a}=s,C=B(s,E),c=s,h=M(c),{titleId:x=a}=r.useContext(b);return y.jsx(P,O({component:"h2",className:j(h.root,f),ownerState:c,ref:p,variant:"h6",id:a??x},C))}),$={title:"Feedback/Dialog",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},n={render:()=>{const[t,o]=r.useState(!1);return i(k,{children:[e(l,{variant:"contained",onClick:()=>o(!0),children:"Open Dialog"}),i(u,{open:t,onClose:()=>o(!1),children:[e(U,{children:"Basic Dialog"}),e(_,{children:e(D,{children:"This is a simple reusable dialog component."})}),i(R,{children:[e(l,{onClick:()=>o(!1),children:"Cancel"}),e(l,{onClick:()=>o(!1),variant:"contained",children:"Confirm"})]})]})]})}};var m,g,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(g=n.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const oo=["Basic"];export{n as Basic,oo as __namedExportsOrder,$ as default};
