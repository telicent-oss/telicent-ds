import{r,e as T,_ as B,j as y,c as O,b as i,a as t,F as k}from"./iframe-Djv8ktra.js";import{D as u}from"./Dialog-CNnh_iBj.js";import{B as l}from"./Button-DwhmFZ5z.js";import{c as j}from"./clsx-B-dksMZM.js";import{s as v}from"./styled-DTBkkZW7.js";import{a as A,g as b,b as S,c as _}from"./DialogContent-6oCYEZl_.js";import{c as R}from"./composeClasses-fLhin0tj.js";import{T as D}from"./Typography-Dq-Ciojh.js";import"./preload-helper-Dp1pzeXC.js";import"./ButtonBase-BsGOhoOZ.js";import"./TransitionGroupContext-BAmDsqe-.js";import"./extendSxProp-Bg6AHp8L.js";import"./Paper-1JE7t4a2.js";import"./Modal-CbQrDciN.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-BCG5tMa5.js";import"./useSlotProps-D4VVjH6n.js";import"./index-CVsYjqM0.js";import"./index-CwsYzhsj.js";import"./utils-B6N13bq2.js";const E=["className","id"],M=e=>{const{classes:o}=e;return R({root:["root"]},b,o)},P=v(D,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),U=r.forwardRef(function(o,p){const s=T({props:o,name:"MuiDialogTitle"}),{className:f,id:a}=s,C=B(s,E),c=s,h=M(c),{titleId:x=a}=r.useContext(A);return y.jsx(P,O({component:"h2",className:j(h.root,f),ownerState:c,ref:p,variant:"h6",id:a??x},C))}),no={title:"Feedback/Dialog",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},n={render:()=>{const[e,o]=r.useState(!1);return i(k,{children:[t(l,{variant:"contained",onClick:()=>o(!0),children:"Open Dialog"}),i(u,{open:e,onClose:()=>o(!1),children:[t(U,{children:"Basic Dialog"}),t(S,{children:t(D,{children:"This is a simple reusable dialog component."})}),i(_,{children:[t(l,{onClick:()=>o(!1),children:"Cancel"}),t(l,{onClick:()=>o(!1),variant:"contained",children:"Confirm"})]})]})]})}},so=["Basic"];var m,g,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(g=n.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};export{n as Basic,so as __namedExportsOrder,no as default};
