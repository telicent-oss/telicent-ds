import{j as e,a as o,F as c}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as m}from"./index-Dl6G-zuu.js";import{r as I,s as k}from"./AuthModal-DP1E7Zmh.js";import{D as p,a as g,b as h}from"./AdapterDayjs-DJi224iP.js";import{B as i}from"./Button-77I-sbEs.js";import{T as u}from"./Typography-DvrCv4HQ.js";import"./jsx-runtime-DMAvRu52.js";import"./Text-DnbGH9ax.js";import"./constants-7H8kD8Mx.js";import"./iframe-CdWd4yKM.js";import"../sb-preview/runtime.js";import"./index-Dn0cO_TJ.js";import"./types-JQgdQoTs.js";import"./useTheme-DC9e96ys.js";import"./identifier-CCo8HfxA.js";import"./useTheme-CEgm5wok.js";import"./GlobalStyles-BK1ltzIn.js";import"./GlobalStyles-DdQ_E3CX.js";import"./UserProfile-v3vMNRa6.js";import"./UserIcon-B0AVfc7u.js";import"./SvgIcon-DDjczThx.js";import"./styled-DiVYluCu.js";import"./generateUtilityClasses-CRyAR7Z0.js";import"./DefaultPropsProvider-BrPVfFhn.js";import"./index-BfyspvgH.js";import"./FlexBox-owEKTX38.js";import"./styled-BEKiHWi7.js";import"./createStyled-9i3u5Rqa.js";import"./useThemeProps-BFLDat3t.js";import"./createSvgIcon-CxivGeKF.js";import"./Popover-Cw1e4M6S.js";import"./utils-DToTkERF.js";import"./TransitionGroupContext-fPiqodp5.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-B-rBeRIm.js";import"./IconButton-DNsjTpj4.js";import"./ButtonBase-BzDRx6y5.js";import"./Menu-Dbz-agEj.js";import"./index-CXtVKvFt.js";import"./Select-BjUHEm_H.js";import"./FormHelperText-jGmUqac9.js";import"./useId-CkA8naEk.js";import"./Popper-C_syKV0t.js";import"./TelicentHorizontalSVG-DP7xLAp3.js";import"./FlexGrid-M25hPc65.js";import"./Container-CFeVW3qn.js";import"./Box-DR7xjwgg.js";import"./DataSetIcon-CzT3Gt8m.js";import"./MenuItem-DVISF-ba.js";import"./dividerClasses-DixuAXrT.js";import"./UIThemeProvider-R8_kt8tc.js";import"./colorManipulator-DBPky6cX.js";import"./ThemeProvider-BPzF9hu_.js";import"./IconButton-BAYxBh8_.js";import"./Chip-CeLMSKq8.js";import"./Chip-B5UOQmWZ.js";import"./Divider-HWnn5fVZ.js";import"./Divider-DOeen-K3.js";import"./TreeView-Cr06zDNq.js";import"./useThemeProps-BTBzXMHi.js";import"./UserProfileContent-BkWk_Qx8.js";import"./LinearProgress-CRSreEF6.js";import"./Button-U6T8kLew.js";import"./LinkButton-C1Cicihr.js";import"./TextField-D4SpoUNz.js";import"./TextField-RDTmrF7W.js";import"./Select-CDEO8m0h.js";import"./Autocomplete-Dv2ygZh-.js";import"./DatePicker-Sc7teQrp.js";import"./DateTimePicker-Bms6jKcd.js";import"./Card-BWv60QFk.js";import"./CardActions-CCW8za6b.js";import"./Popover-CK2TS8dx.js";import"./Paper-BBwh5-3y.js";import"./ErrorFallback-fPXNZKjO.js";import"./ErrorFallbackText-BLCYy_1i.js";import"./ErrorFallbackWrapper-CSpgK55r.js";import"./MapToggleButtonPresentational-D9wnUxdL.js";import"./Remove-DLpXZYtt.js";import"./Edit-BwFhg13Q.js";const x=""+new URL("mui-dialog-problem-DVUavZyH.png",import.meta.url).href,W=""+new URL("figma-dialog-C1gbj10z.png",import.meta.url).href,it={title:"Feedback/Dialog",component:p,tags:["autodocs"]},C=350,s={parameters:{docs:{description:{story:`
This uses **only MUI-provided** dialog components.
Use it for a simple, standard title region when you don't need a dedicated close action in the header.
If you need a title paired with a close control (and consistent alignment), prefer the pattern story below.
        `}}},render:()=>(()=>{const[a,n]=m.useState(!1),t=()=>n(!1);return o(c,{children:[e(i,{variant:"contained",onClick:()=>n(!0),children:"Open Dialog"}),o(p,{open:a,onClose:t,"aria-labelledby":"dialog-title",children:[e(I,{id:"dialog-title",children:"Delete saved search"}),e(g,{children:e(u,{children:"Content is here to show layout under a realistic dialog header."})}),o(h,{children:[e(i,{onClick:t,children:"Cancel"}),e(i,{onClick:t,variant:"contained",children:"Confirm"})]})]})]})})()},l={name:"Padding",parameters:{docs:{description:{story:`
Top padding is applied to which child (DialogTitle, DialogContent, or DialogAction) appears first.
This allows for varied structure without changing edge spacing.
        `}}},render:()=>(()=>{const[a,n]=m.useState(!1),t=()=>n(!1);return o(c,{children:[e(i,{variant:"contained",onClick:()=>n(!0),children:"Open Dialog"}),o(p,{open:a,onClose:t,"aria-labelledby":"dialog-title-order",PaperProps:{sx:{width:C}},children:[e(g,{children:e(u,{children:"Content first to show padding stays consistent regardless of order."})}),e(I,{id:"dialog-title-order",children:"Order-agnostic padding"}),o(h,{children:[e(i,{onClick:t,children:"Cancel"}),e(i,{onClick:t,variant:"contained",children:"Confirm"})]})]})]})})()},U=a=>{const[n,t]=m.useState(!1),r=()=>t(!1);return o(c,{children:[e(i,{variant:"contained",onClick:()=>t(!0),children:"Open Dialog"}),o(p,{open:n,onClose:r,"aria-labelledby":a.id,PaperProps:{sx:{width:C}},children:[e(k,{...a,onClose:r}),e(g,{children:e(u,{children:"Content is here to show layout under a realistic dialog header."})}),o(h,{children:[e(i,{onClick:r,children:"Cancel"}),e(i,{onClick:r,variant:"contained",children:"Confirm"})]})]})]})},d={name:"🧪 Candidate: DialogTitleWithClose",tags:["candidate"],parameters:{docs:{description:{story:`
**What** - A composition of \`<DialogTitle />\` + \`<Button />\` primitives, with styling to avoid overlap and alignment issues

**Why**  - The MUI docs provide a rudimentary close button example with [overlap issues](${x}), and the Figma design includes [a more comprehensive pattern](${W}) that MUI doesn't express cleanly

**Warning** - \`DialogTitleWithClose\` is a **pattern / candidate implementation**, it does not have the full-flexibility of a MUI component.
It has a specific design, and may not suit every composition scenario.
        `}}},render:()=>e(U,{id:"dialog-title-with-close",title:`Dialog title with close that needs to wrap as width is ${C}px `,closeLabel:"Close button"})};var D,f,y;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var w,v,T;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(T=(v=l.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var b,O,B;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '🧪 Candidate: DialogTitleWithClose',
  tags: ["candidate"],
  parameters: {
    docs: {
      description: {
        story: \`
**What** - A composition of \\\`<DialogTitle />\\\` + \\\`<Button />\\\` primitives, with styling to avoid overlap and alignment issues

**Why**  - The MUI docs provide a rudimentary close button example with [overlap issues](\${muiDialogProblemUrl}), and the Figma design includes [a more comprehensive pattern](\${figmaDialog}) that MUI doesn't express cleanly

**Warning** - \\\`DialogTitleWithClose\\\` is a **pattern / candidate implementation**, it does not have the full-flexibility of a MUI component.
It has a specific design, and may not suit every composition scenario.
        \`
      }
    }
  },
  render: () => <PatternDemo id="dialog-title-with-close" title={\`Dialog title with close that needs to wrap as width is \${DIALOG_WIDTH}px \`} closeLabel="Close button" />
}`,...(B=(O=d.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};const nt=["Basic","PaddingOrderAgnostic","CandidateDialogTitleWithClose"];export{s as Basic,d as CandidateDialogTitleWithClose,l as PaddingOrderAgnostic,nt as __namedExportsOrder,it as default};
