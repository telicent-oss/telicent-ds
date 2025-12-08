import{a as i,j as t,F as T}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as l}from"./index-Dl6G-zuu.js";import{D as u}from"./Dialog-BWqAUvqf.js";import{B as r}from"./Button-DPeHgJ80.js";import{a as B,_ as y}from"./identifier-CCo8HfxA.js";import{s as O,c as k,a as j}from"./styled-DiVYluCu.js";import{a as v,g as A,b as S,c as _}from"./DialogContent-B9KKlp61.js";import{j as b}from"./jsx-runtime-DMAvRu52.js";import{u as R}from"./DefaultPropsProvider-BrPVfFhn.js";import{T as D}from"./Typography-DvrCv4HQ.js";import"./generateUtilityClasses-CRyAR7Z0.js";import"./ButtonBase-C0n3d_CB.js";import"./TransitionGroupContext-Cbp9jVrs.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./useTheme-DC9e96ys.js";import"./useTheme-CEgm5wok.js";import"./Paper-B-rBeRIm.js";import"./Modal-DtyJzhmg.js";import"./utils-DW2zNrrJ.js";import"./index-B0kOWIl9.js";import"./useId-CkA8naEk.js";const E=["className","id"],M=e=>{const{classes:o}=e;return j({root:["root"]},A,o)},P=O(D,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),U=l.forwardRef(function(o,p){const s=R({props:o,name:"MuiDialogTitle"}),{className:f,id:a}=s,C=B(s,E),c=s,h=M(c),{titleId:x=a}=l.useContext(v);return b.jsx(P,y({component:"h2",className:k(h.root,f),ownerState:c,ref:p,variant:"h6",id:a??x},C))}),no={title:"Feedback/Dialog",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`
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
