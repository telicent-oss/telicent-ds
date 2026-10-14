import{r,e as T,_ as B,j as y,c as O,b as i,a as e,F as k}from"./iframe-BmJaKzpA.js";import{D as u}from"./Dialog-BjU2rSW3.js";import{B as l}from"./Button-CgVDEB-f.js";import{c as j}from"./clsx-B-dksMZM.js";import{s as v}from"./styled-CFQ-Ztvf.js";import{a as A,g as b,b as S,c as _}from"./DialogContent-b24aC058.js";import{c as R}from"./composeClasses-fLhin0tj.js";import{T as D}from"./Typography-Bjj7o5JG.js";import"./preload-helper-C1FmrZbK.js";import"./ButtonBase-BFPoEEs2.js";import"./TransitionGroupContext-CMgFzCdF.js";import"./extendSxProp-Cqpi5UuK.js";import"./Paper-B5tHWr3y.js";import"./Modal-C75qnOpZ.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-Dj3a59a6.js";import"./index-DhKKRKi1.js";import"./utils-DZMG5O1d.js";const E=["className","id"],M=t=>{const{classes:o}=t;return R({root:["root"]},b,o)},P=v(D,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(t,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),U=r.forwardRef(function(o,p){const s=T({props:o,name:"MuiDialogTitle"}),{className:f,id:a}=s,C=B(s,E),c=s,h=M(c),{titleId:x=a}=r.useContext(A);return y.jsx(P,O({component:"h2",className:j(h.root,f),ownerState:c,ref:p,variant:"h6",id:a??x},C))}),eo={title:"Feedback/Dialog",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(d=(g=n.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const to=["Basic"];export{n as Basic,to as __namedExportsOrder,eo as default};
