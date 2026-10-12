import{r,u as T,_ as B,j as y,c as O,b as i,a as e,F as k}from"./iframe-Cd_b2o5a.js";import{D as u}from"./Dialog-CDfX8NcR.js";import{B as l}from"./Button-9YQTmtlR.js";import{c as j}from"./clsx-B-dksMZM.js";import{s as v}from"./styled-CGYYy0Dj.js";import{a as A,g as b,b as S,c as _}from"./DialogContent-D9MmNMVa.js";import{c as R}from"./composeClasses-fLhin0tj.js";import{T as D}from"./Typography-CsrEffoZ.js";import"./preload-helper-C1FmrZbK.js";import"./ButtonBase-DtNJCaLI.js";import"./TransitionGroupContext-CXwLzekK.js";import"./extendSxProp-DmO-r4ow.js";import"./useTheme-DMI-kw-e.js";import"./Paper-hJ6PGTek.js";import"./Modal-D0r_KFjq.js";import"./ownerDocument-DW-IO8s5.js";import"./resolveComponentProps-DcS_ho5J.js";import"./index-t4Ln2bEE.js";import"./utils-DuG08QIw.js";const E=["className","id"],M=t=>{const{classes:o}=t;return R({root:["root"]},b,o)},P=v(D,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(t,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),U=r.forwardRef(function(o,p){const s=T({props:o,name:"MuiDialogTitle"}),{className:f,id:a}=s,C=B(s,E),c=s,h=M(c),{titleId:x=a}=r.useContext(A);return y.jsx(P,O({component:"h2",className:j(h.root,f),ownerState:c,ref:p,variant:"h6",id:a??x},C))}),eo={title:"Feedback/Dialog",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`
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
