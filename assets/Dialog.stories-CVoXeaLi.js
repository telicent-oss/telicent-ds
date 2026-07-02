import{r,u as T,_ as B,c as y,b as O,a as i,j as e,F as k}from"./iframe-ulHXhjOW.js";import{D as u}from"./Dialog-BN-VRNR9.js";import{B as l}from"./Button-DqB_Kw8t.js";import{c as j,a as v,s as A}from"./styled-Czze2UzD.js";import{a as b,g as S,b as _,c as R}from"./DialogContent-MOZRP09j.js";import{T as D}from"./Typography-Dn5MRyem.js";import"./preload-helper-C1FmrZbK.js";import"./generateUtilityClasses-CSjJ64ks.js";import"./ButtonBase-B2PuhISu.js";import"./TransitionGroupContext-qSVm1uFm.js";import"./useTheme-DrTNJuY8.js";import"./Paper-Ce5gTSZ1.js";import"./Modal-Cg5uim4K.js";import"./utils-Cprl2CzU.js";import"./index-YuMLfXhi.js";const E=["className","id"],M=t=>{const{classes:o}=t;return v({root:["root"]},S,o)},P=A(D,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(t,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),U=r.forwardRef(function(o,p){const s=T({props:o,name:"MuiDialogTitle"}),{className:f,id:a}=s,C=B(s,E),c=s,h=M(c),{titleId:x=a}=r.useContext(b);return y.jsx(P,O({component:"h2",className:j(h.root,f),ownerState:c,ref:p,variant:"h6",id:a??x},C))}),Y={title:"Feedback/Dialog",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(d=(g=n.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const Z=["Basic"];export{n as Basic,Z as __namedExportsOrder,Y as default};
