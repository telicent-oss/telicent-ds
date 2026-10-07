import{r,u as T,_ as B,j as y,c as O,b as i,a as t,F as k}from"./iframe-Y1N6bk8p.js";import{D as u}from"./Dialog-B3meZdDB.js";import{B as l}from"./Button-D5koxhYf.js";import{c as j}from"./generateUtilityClass-DYVh7KgR.js";import{s as v}from"./styled-DiMPCvor.js";import{a as A,g as b,b as S,c as _}from"./DialogContent-C9N2UKrx.js";import{c as R}from"./composeClasses-fLhin0tj.js";import{T as D}from"./Typography-DmCu6xYW.js";import"./preload-helper-C1FmrZbK.js";import"./generateUtilityClasses-g9ufi11G.js";import"./ButtonBase-Dh8n1X5l.js";import"./TransitionGroupContext-w0BzhBs7.js";import"./extendSxProp-DbTy98VK.js";import"./useTheme-D-jdU__u.js";import"./Paper-DN68ECSn.js";import"./Modal-B4PiUlG8.js";import"./ownerDocument-DW-IO8s5.js";import"./resolveComponentProps-DtqC7Jdc.js";import"./index-CriZbu4z.js";import"./utils-FxzgolTc.js";const E=["className","id"],M=e=>{const{classes:o}=e;return R({root:["root"]},b,o)},P=v(D,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),U=r.forwardRef(function(o,p){const s=T({props:o,name:"MuiDialogTitle"}),{className:f,id:a}=s,C=B(s,E),c=s,h=M(c),{titleId:x=a}=r.useContext(A);return y.jsx(P,O({component:"h2",className:j(h.root,f),ownerState:c,ref:p,variant:"h6",id:a??x},C))}),eo={title:"Feedback/Dialog",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},n={render:()=>{const[e,o]=r.useState(!1);return i(k,{children:[t(l,{variant:"contained",onClick:()=>o(!0),children:"Open Dialog"}),i(u,{open:e,onClose:()=>o(!1),children:[t(U,{children:"Basic Dialog"}),t(S,{children:t(D,{children:"This is a simple reusable dialog component."})}),i(_,{children:[t(l,{onClick:()=>o(!1),children:"Cancel"}),t(l,{onClick:()=>o(!1),variant:"contained",children:"Confirm"})]})]})]})}};var m,g,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(g=n.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const no=["Basic"];export{n as Basic,no as __namedExportsOrder,eo as default};
