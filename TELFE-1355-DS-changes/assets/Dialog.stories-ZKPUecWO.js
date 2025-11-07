import{a as i,j as t,F as T}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as l}from"./index-Dl6G-zuu.js";import{D as u}from"./Dialog-YaeX8T1I.js";import{B as r}from"./Button-TraRuOe6.js";import{a as B,_ as y}from"./identifier-C6mAUaLB.js";import{s as O,c as k,a as j}from"./styled-BErHg-7C.js";import{a as v,g as A,b as S,c as _}from"./DialogContent-D-e6ZoBQ.js";import{j as b}from"./jsx-runtime-DMAvRu52.js";import{u as R}from"./DefaultPropsProvider-BOzBDHyA.js";import{T as D}from"./Typography-DqLej86Z.js";import"./generateUtilityClasses-Cuk6vP38.js";import"./ButtonBase-tX4Kf77e.js";import"./TransitionGroupContext-Cbp9jVrs.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useTheme-GyLrR4NU.js";import"./useTheme-Cg37eTMn.js";import"./Paper-ZbIfs51-.js";import"./Modal-CRxLFwVZ.js";import"./utils-Bvq5k-kH.js";import"./index-B0kOWIl9.js";import"./useId-CkA8naEk.js";const E=["className","id"],M=e=>{const{classes:o}=e;return j({root:["root"]},A,o)},P=O(D,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),U=l.forwardRef(function(o,p){const s=R({props:o,name:"MuiDialogTitle"}),{className:f,id:a}=s,C=B(s,E),c=s,h=M(c),{titleId:x=a}=l.useContext(v);return b.jsx(P,y({component:"h2",className:k(h.root,f),ownerState:c,ref:p,variant:"h6",id:a??x},C))}),no={title:"Feedback/Dialog",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},n={render:()=>{const[e,o]=l.useState(!1);return i(T,{children:[t(r,{variant:"contained",onClick:()=>o(!0),children:"Open Dialog"}),i(u,{open:e,onClose:()=>o(!1),children:[t(U,{children:"Basic Dialog"}),t(S,{children:t(D,{children:"This is a simple reusable dialog component."})}),i(_,{children:[t(r,{onClick:()=>o(!1),children:"Cancel"}),t(r,{onClick:()=>o(!1),variant:"contained",children:"Confirm"})]})]})]})}};var m,g,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(g=n.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const so=["Basic"];export{n as Basic,so as __namedExportsOrder,no as default};
