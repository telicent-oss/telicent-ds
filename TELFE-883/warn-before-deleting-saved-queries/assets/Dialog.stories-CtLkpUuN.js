import{j as e,a as o,F as D}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as C}from"./index-Dl6G-zuu.js";import{r as T,s as b}from"./AuthModal-L8hX06Za.js";import{D as p,a as y,b as f}from"./AdapterDayjs-DJi224iP.js";import{B as i}from"./Button-77I-sbEs.js";import{T as w}from"./Typography-DvrCv4HQ.js";import"./jsx-runtime-DMAvRu52.js";import"./Text-DnbGH9ax.js";import"./constants-DebW_dTY.js";import"./iframe-UR53zPEc.js";import"../sb-preview/runtime.js";import"./index-Dn0cO_TJ.js";import"./types-JQgdQoTs.js";import"./useTheme-DC9e96ys.js";import"./identifier-CCo8HfxA.js";import"./useTheme-CEgm5wok.js";import"./GlobalStyles-BK1ltzIn.js";import"./GlobalStyles-DdQ_E3CX.js";import"./UserProfile-v3vMNRa6.js";import"./UserIcon-B0AVfc7u.js";import"./SvgIcon-DDjczThx.js";import"./styled-DiVYluCu.js";import"./generateUtilityClasses-CRyAR7Z0.js";import"./DefaultPropsProvider-BrPVfFhn.js";import"./index-BfyspvgH.js";import"./FlexBox-owEKTX38.js";import"./styled-BEKiHWi7.js";import"./createStyled-9i3u5Rqa.js";import"./useThemeProps-BFLDat3t.js";import"./createSvgIcon-CxivGeKF.js";import"./Popover-Cw1e4M6S.js";import"./utils-DToTkERF.js";import"./TransitionGroupContext-fPiqodp5.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-B-rBeRIm.js";import"./IconButton-DNsjTpj4.js";import"./ButtonBase-BzDRx6y5.js";import"./Menu-Dbz-agEj.js";import"./index-CXtVKvFt.js";import"./Select-BjUHEm_H.js";import"./FormHelperText-jGmUqac9.js";import"./useId-CkA8naEk.js";import"./Popper-C_syKV0t.js";import"./TelicentHorizontalSVG-DP7xLAp3.js";import"./FlexGrid-M25hPc65.js";import"./Container-CFeVW3qn.js";import"./Box-DR7xjwgg.js";import"./DataSetIcon-CzT3Gt8m.js";import"./MenuItem-DVISF-ba.js";import"./dividerClasses-DixuAXrT.js";import"./UIThemeProvider-vkr8-daa.js";import"./colorManipulator-DBPky6cX.js";import"./ThemeProvider-BPzF9hu_.js";import"./IconButton-BAYxBh8_.js";import"./Chip-CeLMSKq8.js";import"./Chip-B5UOQmWZ.js";import"./Divider-HWnn5fVZ.js";import"./Divider-DOeen-K3.js";import"./TreeView-Cr06zDNq.js";import"./useThemeProps-BTBzXMHi.js";import"./UserProfileContent-BkWk_Qx8.js";import"./LinearProgress-CRSreEF6.js";import"./Button-U6T8kLew.js";import"./LinkButton-C1Cicihr.js";import"./TextField-D4SpoUNz.js";import"./TextField-RDTmrF7W.js";import"./Select-CDEO8m0h.js";import"./Autocomplete-Dv2ygZh-.js";import"./DatePicker-Sc7teQrp.js";import"./DateTimePicker-Bms6jKcd.js";import"./Card-BWv60QFk.js";import"./CardActions-CCW8za6b.js";import"./Popover-CK2TS8dx.js";import"./Paper-BBwh5-3y.js";import"./ErrorFallback-fPXNZKjO.js";import"./ErrorFallbackText-BLCYy_1i.js";import"./ErrorFallbackWrapper-CSpgK55r.js";import"./MapToggleButtonPresentational-D9wnUxdL.js";import"./Remove-DLpXZYtt.js";import"./Edit-BwFhg13Q.js";const W=""+new URL("mui-dialog-problem-DVUavZyH.png",import.meta.url).href,I=""+new URL("figma-dialog-C1gbj10z.png",import.meta.url).href,Ye={title:"Feedback/Dialog",component:p,tags:["autodocs"]},v=350,l={parameters:{docs:{description:{story:`
This uses **only MUI-provided** dialog components.
Use it for a simple, standard title region when you don't need a dedicated close action in the header.
If you need a title paired with a close control (and consistent alignment), prefer the pattern story below.
        `}}},render:()=>(()=>{const[n,r]=C.useState(!1),t=()=>r(!1);return o(D,{children:[e(i,{variant:"contained",onClick:()=>r(!0),children:"Open Dialog"}),o(p,{open:n,onClose:t,"aria-labelledby":"dialog-title",children:[e(T,{id:"dialog-title",children:"Delete saved search"}),e(y,{children:e(w,{children:"Content is here to show layout under a realistic dialog header."})}),o(f,{children:[e(i,{onClick:t,children:"Cancel"}),e(i,{onClick:t,variant:"contained",children:"Confirm"})]})]})]})})()},U=n=>{const[r,t]=C.useState(!1),a=()=>t(!1);return o(D,{children:[e(i,{variant:"contained",onClick:()=>t(!0),children:"Open Dialog"}),o(p,{open:r,onClose:a,"aria-labelledby":n.id,PaperProps:{sx:{width:v}},children:[e(b,{...n,onClose:a}),e(y,{children:e(w,{children:"Content is here to show layout under a realistic dialog header."})}),o(f,{children:[e(i,{onClick:a,children:"Cancel"}),e(i,{onClick:a,variant:"contained",children:"Confirm"})]})]})]})},s={name:"Pattern: DialogTitleWithClose",parameters:{docs:{description:{story:`
**What** - Renders a dialog header with aligned title + close action using \`DialogTitle\` + \`Button\` primitives.

**Why**  - The MUI docs provide a rudimentary example with [overlap issues](${W}), and the Figma design includes [a pattern](${I}) that MUI doesn't express cleanly

**Warning** - \`DialogTitleWithClose\` is a **reference implementation**, not a production-grade DS component.
It has limited coverage, a narrow proven use case, and may not suit every composition scenario.
        `}}},render:()=>e(U,{id:"dialog-title-with-close",title:`Dialog title with close that needs to wrap as width is ${v}px `,closeLabel:"Close button"})};var m,d,c;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(d=l.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var h,g,u;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Pattern: DialogTitleWithClose',
  parameters: {
    docs: {
      description: {
        story: \`
**What** - Renders a dialog header with aligned title + close action using \\\`DialogTitle\\\` + \\\`Button\\\` primitives.

**Why**  - The MUI docs provide a rudimentary example with [overlap issues](\${muiDialogProblemUrl}), and the Figma design includes [a pattern](\${figmaDialog}) that MUI doesn't express cleanly

**Warning** - \\\`DialogTitleWithClose\\\` is a **reference implementation**, not a production-grade DS component.
It has limited coverage, a narrow proven use case, and may not suit every composition scenario.
        \`
      }
    }
  },
  render: () => <PatternDemo id="dialog-title-with-close" title={\`Dialog title with close that needs to wrap as width is \${DIALOG_WIDTH}px \`} closeLabel="Close button" />
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const et=["Basic","PatternDialogTitleWithClose"];export{l as Basic,s as PatternDialogTitleWithClose,et as __namedExportsOrder,Ye as default};
