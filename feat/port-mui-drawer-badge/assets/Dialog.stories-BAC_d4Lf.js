import{r,e as T,_ as B,j as y,c as O,b as i,a as e,F as k}from"./iframe-C-ZFHi7G.js";import{D as u}from"./Dialog-BGqZYpLW.js";import{B as l}from"./Button-eDvdHhIu.js";import{c as j}from"./clsx-B-dksMZM.js";import{s as v}from"./styled-Bk2IjbB5.js";import{a as A,g as b,b as S,c as _}from"./DialogContent-CNYTn0i-.js";import{c as R}from"./composeClasses-fLhin0tj.js";import{T as D}from"./Typography-CkxFGaa5.js";import"./preload-helper-C1FmrZbK.js";import"./ButtonBase-UsKYAmFM.js";import"./TransitionGroupContext-C0NcEdG2.js";import"./extendSxProp-dXted_0R.js";import"./Paper-C6Xte-jc.js";import"./Modal-Bh0uOVdy.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-Ji4pwD1h.js";import"./useSlotProps-8MMKxgpT.js";import"./index-BiUXR6Fr.js";import"./utils-D_VBJbmQ.js";const E=["className","id"],M=t=>{const{classes:o}=t;return R({root:["root"]},b,o)},P=v(D,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(t,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),U=r.forwardRef(function(o,p){const s=T({props:o,name:"MuiDialogTitle"}),{className:f,id:a}=s,C=B(s,E),c=s,h=M(c),{titleId:x=a}=r.useContext(A);return y.jsx(P,O({component:"h2",className:j(h.root,f),ownerState:c,ref:p,variant:"h6",id:a??x},C))}),to={title:"Feedback/Dialog",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},n={render:()=>{const[t,o]=r.useState(!1);return i(k,{children:[e(l,{variant:"contained",onClick:()=>o(!0),children:"Open Dialog"}),i(u,{open:t,onClose:()=>o(!1),children:[e(U,{children:"Basic Dialog"}),e(S,{children:e(D,{children:"This is a simple reusable dialog component."})}),i(_,{children:[e(l,{onClick:()=>o(!1),children:"Cancel"}),e(l,{onClick:()=>o(!1),variant:"contained",children:"Confirm"})]})]})]})}};var m,g,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(g=n.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const no=["Basic"];export{n as Basic,no as __namedExportsOrder,to as default};
