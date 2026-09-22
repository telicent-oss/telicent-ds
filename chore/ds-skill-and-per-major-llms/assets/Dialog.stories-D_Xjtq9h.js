import{r,q as T,c as B,b as y,_ as O,a as i,j as e,F as k}from"./iframe-D2xSd84e.js";import{D as u}from"./Dialog-COLBK_8G.js";import{B as l}from"./Button-CT09wWAC.js";import{c as j}from"./generateUtilityClass-CL5j5EH9.js";import{c as v,s as A}from"./styled-Uo2f4_eJ.js";import{a as b,g as S,b as _,c as R}from"./DialogContent-B91V-Ggp.js";import{T as D}from"./Typography-CrXkC3Kj.js";import"./preload-helper-C1FmrZbK.js";import"./generateUtilityClasses-BgNbkMmP.js";import"./ButtonBase-wo9-0n7F.js";import"./TransitionGroupContext-d_Wi5FWz.js";import"./useTheme-DD50os6u.js";import"./Paper-CMPnbo-3.js";import"./Modal-C7up1KKP.js";import"./utils-B-UbRgM8.js";import"./index-CFHJHd4f.js";import"./resolveComponentProps-6RrFLM_1.js";const E=["className","id"],M=t=>{const{classes:o}=t;return v({root:["root"]},S,o)},P=A(D,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(t,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),U=r.forwardRef(function(o,p){const s=T({props:o,name:"MuiDialogTitle"}),{className:f,id:a}=s,C=B(s,E),c=s,h=M(c),{titleId:x=a}=r.useContext(b);return y.jsx(P,O({component:"h2",className:j(h.root,f),ownerState:c,ref:p,variant:"h6",id:a??x},C))}),$={title:"Feedback/Dialog",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`
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
