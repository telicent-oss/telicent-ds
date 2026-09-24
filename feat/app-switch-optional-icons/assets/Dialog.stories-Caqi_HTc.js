import{r,t as T,_ as B,j as y,c as O,b as i,a as t,F as k}from"./iframe-B8lru9Ox.js";import{D as u}from"./Dialog-BXhz5J8P.js";import{B as l}from"./Button-B6b6ie_Y.js";import{c as j}from"./generateUtilityClass-DYVh7KgR.js";import{s as v}from"./styled-B7kmWUc9.js";import{a as A,g as b,b as S,c as _}from"./DialogContent-Bv7qBY9o.js";import{c as R}from"./composeClasses-fLhin0tj.js";import{T as D}from"./Typography-DtJW_51A.js";import"./preload-helper-C1FmrZbK.js";import"./generateUtilityClasses-g9ufi11G.js";import"./ButtonBase-B1n-NBaA.js";import"./TransitionGroupContext-Bg30LDe0.js";import"./extendSxProp-DjHg015s.js";import"./useTheme-lbsOwaIT.js";import"./Paper-4eMZAmsM.js";import"./Modal-DMbdFXDI.js";import"./utils-D4kUvPaj.js";import"./index-BhBzwTqv.js";import"./resolveComponentProps-B4S3ggFk.js";const E=["className","id"],M=e=>{const{classes:o}=e;return R({root:["root"]},b,o)},P=v(D,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),U=r.forwardRef(function(o,p){const s=T({props:o,name:"MuiDialogTitle"}),{className:f,id:a}=s,C=B(s,E),c=s,h=M(c),{titleId:x=a}=r.useContext(A);return y.jsx(P,O({component:"h2",className:j(h.root,f),ownerState:c,ref:p,variant:"h6",id:a??x},C))}),to={title:"Feedback/Dialog",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(d=(g=n.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const eo=["Basic"];export{n as Basic,eo as __namedExportsOrder,to as default};
