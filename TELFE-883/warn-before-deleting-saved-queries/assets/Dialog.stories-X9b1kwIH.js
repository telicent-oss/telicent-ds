import{a as i,j as o,F as T}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as l}from"./index-Dl6G-zuu.js";import{D as A,g as P,a as p,b as w,c as O}from"./DialogContent-fePgOQPj.js";import{B as a}from"./Button-DPeHgJ80.js";import{a as I,_}from"./identifier-CCo8HfxA.js";import{s as j,c as S,a as U}from"./styled-DiVYluCu.js";import{j as R}from"./jsx-runtime-DMAvRu52.js";import{u as M}from"./DefaultPropsProvider-BrPVfFhn.js";import{T as g}from"./Typography-DvrCv4HQ.js";import"./generateUtilityClasses-CRyAR7Z0.js";import"./useTheme-DC9e96ys.js";import"./useTheme-CEgm5wok.js";import"./Paper-B-rBeRIm.js";import"./Modal-cSJVsbaW.js";import"./utils-QfZKikgD.js";import"./TransitionGroupContext-Cbp9jVrs.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-Dn0cO_TJ.js";import"./useId-CkA8naEk.js";import"./ButtonBase-C0n3d_CB.js";const E=["className","id"],F=t=>{const{classes:e}=t;return U({root:["root"]},P,e)},L=j(g,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(t,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),x=l.forwardRef(function(e,n){const d=M({props:e,name:"MuiDialogTitle"}),{className:v,id:c}=d,B=I(d,E),m=d,b=F(m),{titleId:k=c}=l.useContext(A);return R.jsx(L,_({component:"h2",className:S(b.root,v),ownerState:m,ref:n,variant:"h6",id:c??k},B))}),ro={title:"Feedback/Dialog",component:p,tags:["autodocs"]},N=350,s={parameters:{docs:{description:{story:`
This uses **only MUI-provided** dialog components.
Use it for a simple, standard title region when you don't need a dedicated close action in the header.
If you need a title paired with a close control (and consistent alignment), prefer the pattern story below.
        `}}},render:()=>(()=>{const[t,e]=l.useState(!1),n=()=>e(!1);return i(T,{children:[o(a,{variant:"contained",onClick:()=>e(!0),children:"Open Dialog"}),i(p,{open:t,onClose:n,"aria-labelledby":"dialog-title",children:[o(x,{id:"dialog-title",children:"Delete saved search"}),o(w,{children:o(g,{children:"Content is here to show layout under a realistic dialog header."})}),i(O,{children:[o(a,{onClick:n,children:"Cancel"}),o(a,{onClick:n,variant:"contained",children:"Confirm"})]})]})]})})()},r={name:"Padding",parameters:{docs:{description:{story:`
Top padding is applied to which child (DialogTitle, DialogContent, or DialogAction) appears first.
This allows for varied structure without changing edge spacing.
        `}}},render:()=>(()=>{const[t,e]=l.useState(!1),n=()=>e(!1);return i(T,{children:[o(a,{variant:"contained",onClick:()=>e(!0),children:"Open Dialog"}),i(p,{open:t,onClose:n,"aria-labelledby":"dialog-title-order",PaperProps:{sx:{width:N}},children:[o(w,{children:o(g,{children:"Content first to show padding stays consistent regardless of order."})}),o(x,{id:"dialog-title-order",children:"Order-agnostic padding"}),i(O,{children:[o(a,{onClick:n,children:"Cancel"}),o(a,{onClick:n,variant:"contained",children:"Confirm"})]})]})]})})()};var u,h,C;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
This uses **only MUI-provided** dialog components.
Use it for a simple, standard title region when you don't need a dedicated close action in the header.
If you need a title paired with a close control (and consistent alignment), prefer the pattern story below.
        \`
      }
    }
  },
  render: () => (() => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);
    return <>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Open Dialog
          </Button>
          <Dialog open={open} onClose={onClose} aria-labelledby="dialog-title">
            <DialogTitle id="dialog-title">Delete saved search</DialogTitle>
            <DialogContent>
              <Typography>
                Content is here to show layout under a realistic dialog header.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={onClose} variant="contained">
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </>;
  })()
}`,...(C=(h=s.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var D,f,y;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Padding",
  parameters: {
    docs: {
      description: {
        story: \`
Top padding is applied to which child (DialogTitle, DialogContent, or DialogAction) appears first.
This allows for varied structure without changing edge spacing.
        \`
      }
    }
  },
  render: () => (() => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);
    return <>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Open Dialog
          </Button>
          <Dialog open={open} onClose={onClose} aria-labelledby="dialog-title-order" PaperProps={{
        sx: {
          width: DIALOG_WIDTH
        }
      }}>
            <DialogContent>
              <Typography>
                Content first to show padding stays consistent regardless of order.
              </Typography>
            </DialogContent>
            <DialogTitle id="dialog-title-order">Order-agnostic padding</DialogTitle>
            <DialogActions>
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={onClose} variant="contained">
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </>;
  })()
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const lo=["Basic","PaddingOrderAgnostic"];export{s as Basic,r as PaddingOrderAgnostic,lo as __namedExportsOrder,ro as default};
