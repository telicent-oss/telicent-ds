import{a as n,b as m,R as I,r as S}from"./iframe-QjimQxGJ.js";import{B as A}from"./DropdownButton-BqQMtZNv.js";import{u as H}from"./UserIcon-C4O34cYP.js";import"./CogIcon-DoAefpgk.js";import"./InfoIcon-KAZwn8zl.js";import"./ThemeSwitchRow-CqJgfSGe.js";import{T as s,a as w}from"./Text-CbHxOYIZ.js";import"./Chip-D2kTYDHW.js";import"./Divider-D4gWlnBJ.js";import"./TreeView-DHji-qEu.js";import"./AppInfoRow-DsusScyS.js";import"./AppSettings-Blvm1PFt.js";import"./TableRow-ipCVlD9g.js";import"./Box-kqiIuPV6.js";import"./Container-DqveXh-O.js";import{F as p}from"./FlexBox-BHBK3XbM.js";import{f as D}from"./figmaDesign-CKKXRVNK.js";import"./preload-helper-C1FmrZbK.js";import"./useTheme-h6Umsisj.js";import"./AdapterDayjs-COKlw25t.js";import"./index-BhQh1m69.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-k9OHEYOT.js";import"./extendSxProp-CWL_eOV9.js";import"./useThemeProps-qyYKSYwF.js";import"./useThemeProps-GaSBv1_5.js";import"./Typography-BALYr_AM.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./Modal-DPpC_MaX.js";import"./utils-DWVeh98X.js";import"./TransitionGroupContext-BNsz8i9y.js";import"./index-C895Ui_J.js";import"./resolveComponentProps-u9w1Xhfi.js";import"./Popover-D6-B0sHe.js";import"./Paper-B4HMI984.js";import"./TextField-BxmNESyD.js";import"./useFormControl-CLcxU0V8.js";import"./FormControl-pQC5AWwY.js";import"./useControlled-ClIGAfqi.js";import"./createSvgIcon-B0ZMIwZ-.js";import"./SvgIcon-qDEXG8Q2.js";import"./FormHelperText-D3ES7yVt.js";import"./createStyled-kkTu4cdj.js";import"./IconButton-CdzYSU6E.js";import"./ButtonBase-B3FHfXkx.js";import"./DialogContent-DEerxyRB.js";import"./Button-B0acl6RO.js";import"./Chip-BIs9pIL_.js";import"./DateTimePicker-Cs-8dsfN.js";import"./Divider-CfN-tf0_.js";import"./_IconPopover-enaiw0Ag.js";import"./Box-BdgnJPj4.js";import"./Stack-BCJid8GC.js";import"./styled-DdRNySmR.js";import"./Alert-BIYPLeJ4.js";import"./LinearProgress-CCUeeTNk.js";import"./Spinner-ZqiMizuS.js";import"./Dialog-CQqj-Shc.js";import"./MapToggleButtonPresentational-DlVdc9iK.js";import"./Remove-CZV99RA6.js";import"./LinkButton-C1rXXMBH.js";import"./TextField-Cc6z2PNl.js";import"./Switch-T5c-KsvY.js";import"./LabeledSwitch-CY2Gql7U.js";import"./DatePicker-CZCRHMp9.js";import"./FormControl-CNaUogrQ.js";import"./FormHelperText-BO3t8uTC.js";import"./Paper-BSq9F4WF.js";import"./ErrorFallback-Dzp1pGy2.js";import"./ErrorFallbackText-D_comUev.js";import"./ErrorFallbackWrapper-CDfvx67q.js";import"./Brand-DAKosmlu.js";import"./Edit-D8MCsODy.js";const T=e=>{var t;const[r=0,o=0,a=0,i=1]=((t=e.match(/[\d.]+/g))==null?void 0:t.map(Number))??[];return[r,o,a,i]},f=e=>{const[r,o,a,i]=T(e);if(i===0)return"transparent";const t=l=>Math.round(l).toString(16).padStart(2,"0").toUpperCase();return`#${t(r)}${t(o)}${t(a)}`},U=255,k=.03928,V=12.92,O=.055,P=1.055,W=2.4,$=.2126,j=.7152,X=.0722,q=e=>{const r=e/U;return r<=k?r/V:((r+O)/P)**W},E=e=>{const[r,o,a]=T(e),[i,t,l]=[r,o,a].map(q);return $*i+j*t+X*l},_=.05,z=(e,r)=>{const o=E(e),a=E(r),i=Math.max(o,a),t=Math.min(o,a);return(i+_)/(t+_)},J=e=>(Math.floor(e*100)/100).toFixed(2),C=[{variant:"primary",label:"Primary"},{variant:"secondary",label:"Secondary"},{variant:"tertiary",label:"Tertiary"}],c={fontFamily:"monospace"},K={transition:"none"},Q=({variant:e,label:r,themeName:o})=>{const a=H(),i=S.useRef(null),[t,l]=S.useState(null);return S.useEffect(()=>{const g=i.current;if(!g)return;l((()=>{const d=getComputedStyle(g);let u=g,b="";for(;u;){const v=getComputedStyle(u).backgroundColor;if(T(v)[3]!==0){b=v;break}u=u.parentElement}const M=d.borderTopStyle!=="none"&&d.borderTopWidth!=="0px";return{txt:f(d.color),bg:f(b),bd:M?f(d.borderTopColor):"None",ratio:z(d.color,b)}})())},[a]),m(p,{direction:"column",gap:2,sx:{minWidth:180},children:[n(w,{children:r}),m(p,{direction:"column",children:[m(s,{sx:c,children:["Txt ",(t==null?void 0:t.txt)??"—"]}),m(s,{sx:c,children:["BG ",(t==null?void 0:t.bg)??"—"]}),m(s,{sx:c,children:["BD ",(t==null?void 0:t.bd)??"—"]})]}),n(p,{direction:"row",children:n(A,{ref:i,variant:e,sx:K,children:"Label"})}),m(p,{direction:"column",children:[n(s,{sx:c,children:o}),n(s,{sx:c,children:t?`${J(t.ratio)}:1`:"—"}),n(s,{sx:c,children:t&&t.ratio>=4.5?"Pass AA":"Fail AA"}),n(s,{sx:c,children:t&&t.ratio>=7?"Pass AAA":"Fail AAA"})]})]})},Y=["Enabled","Hovered","Disabled","Focused"],Z={Enabled:"",Hovered:"state-hover",Disabled:"",Focused:"Mui-focusVisible"},tt=({variant:e,state:r})=>n(A,{variant:e,disabled:r==="Disabled",className:Z[r],startIcon:n("i",{className:"fa-solid fa-chevron-left"}),endIcon:n("i",{className:"fa-solid fa-chevron-right"}),children:"Label"}),vr={title:"Buttons/Button/Tables",component:A,parameters:{layout:"padded",...D("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6522-21508&m=dev")}},G={bgcolor:"background.default",color:"text.primary",p:4,width:"fit-content"},h={render:(e,{globals:r})=>n(p,{direction:"row",gap:6,sx:G,children:C.map(({variant:o,label:a})=>n(Q,{variant:o,label:a,themeName:r.theme},o))})},x={parameters:{pseudo:{hover:".state-hover"}},render:(e,{globals:r})=>m(p,{direction:"column",gap:3,sx:G,children:[n("div",{style:{display:"grid",gridTemplateColumns:"max-content repeat(3, max-content)",columnGap:24,rowGap:20,alignItems:"center"},children:Y.map(o=>m(I.Fragment,{children:[n(s,{children:o}),C.map(({variant:a})=>n(tt,{variant:a,state:o},a))]},o))}),n(s,{children:r.theme})]})};var R,y,F;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (_args, {
    globals
  }) => <FlexBox direction="row" gap={6} sx={surfaceSx}>
      {VARIANTS.map(({
      variant,
      label
    }) => <SpecColumn key={variant} variant={variant} label={label} themeName={globals.theme} />)}
    </FlexBox>
}`,...(F=(y=h.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var B,L,N;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      hover: ".state-hover"
    }
  },
  render: (_args, {
    globals
  }) => <FlexBox direction="column" gap={3} sx={surfaceSx}>
      <div style={{
      display: "grid",
      gridTemplateColumns: "max-content repeat(3, max-content)",
      columnGap: 24,
      rowGap: 20,
      alignItems: "center"
    }}>
        {STATES.map(state => <React.Fragment key={state}>
            <Text>{state}</Text>
            {VARIANTS.map(({
          variant
        }) => <StateCell key={variant} variant={variant} state={state} />)}
          </React.Fragment>)}
      </div>
      <Text>{globals.theme}</Text>
    </FlexBox>
}`,...(N=(L=x.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const Er=["SpecTable","States"];export{h as SpecTable,x as States,Er as __namedExportsOrder,vr as default};
