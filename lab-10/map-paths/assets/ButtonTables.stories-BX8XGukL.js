import{j as n,a as m,R as I,r as S}from"./iframe-ciw1KLRs.js";import{B as A}from"./DropdownButton-DnxPQZL5.js";import{u as H}from"./UserIcon-Faf48ldY.js";import{F as l}from"./FlexBox-CDrP42BZ.js";import{T as s,a as w}from"./Text-BL5BnwYw.js";import"./Chip-DC0m9kxe.js";import"./Divider-CNdMEHKo.js";import"./TreeView-BFv2UIjz.js";import"./AppInfoRow-Cm2LKcgP.js";import"./Box-HbuxBumj.js";import"./Container-B4cr1y6P.js";import{f as D}from"./figmaDesign-CKKXRVNK.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-CifS_No0.js";import"./useThemeProps-CD771-QY.js";import"./useTheme-BHgtQyQE.js";import"./AdapterDayjs-O0yRhyo9.js";import"./generateUtilityClass-Cq12-ors.js";import"./styled-C2eEG51T.js";import"./Typography--d6z-ax-.js";import"./generateUtilityClasses-mmv1qYeK.js";import"./Modal-BfMSqNIi.js";import"./utils-CidoV_y6.js";import"./TransitionGroupContext-BaiKyvyF.js";import"./index-BpPfUxeP.js";import"./resolveComponentProps-B0NCZEz3.js";import"./Popover-DG-knyjb.js";import"./Paper-8D9ezffr.js";import"./TextField-pGEePhF0.js";import"./useFormControl-BblJSTXJ.js";import"./createSvgIcon-BDEo2c1Q.js";import"./SvgIcon-DTc-5gfq.js";import"./createStyled-MdD6v-m0.js";import"./IconButton-BMVls5k1.js";import"./ButtonBase-ClETMG4i.js";import"./DialogContent-1fvduG_D.js";import"./Button-CDrOWbr-.js";import"./Chip-PFEXkFqS.js";import"./DateTimePicker-Bj6EpZ10.js";import"./Divider-CjkQD9g8.js";import"./Box-902PeKhJ.js";import"./Stack-BsqiUcB-.js";import"./styled-IIpvbrdl.js";import"./Alert-BIf5zh0i.js";import"./LinearProgress-DL5qgfW7.js";import"./Spinner-DiZv0D1w.js";import"./Dialog-CL0RDkI6.js";import"./MapToggleButtonPresentational-BuqOJVfe.js";import"./Remove-udeFhnPg.js";import"./LinkButton-vyYCYFuJ.js";import"./TextField-BiumEcKM.js";import"./Switch-BuYUgYFl.js";import"./DatePicker-CS8TkJd8.js";import"./Paper-D5KjIdWZ.js";import"./ErrorFallback-DCZhT-vP.js";import"./ErrorFallbackText-CwHlYFUh.js";import"./ErrorFallbackWrapper-DP0a9Fbv.js";import"./Brand-BPQCwrjg.js";import"./constants-UR64nFDG.js";import"./Edit-Cef1b_05.js";const T=r=>{var t;const[e=0,o=0,a=0,i=1]=((t=r.match(/[\d.]+/g))==null?void 0:t.map(Number))??[];return[e,o,a,i]},f=r=>{const[e,o,a,i]=T(r);if(i===0)return"transparent";const t=p=>Math.round(p).toString(16).padStart(2,"0").toUpperCase();return`#${t(e)}${t(o)}${t(a)}`},U=255,k=.03928,V=12.92,O=.055,P=1.055,W=2.4,$=.2126,j=.7152,X=.0722,q=r=>{const e=r/U;return e<=k?e/V:((e+O)/P)**W},E=r=>{const[e,o,a]=T(r),[i,t,p]=[e,o,a].map(q);return $*i+j*t+X*p},_=.05,z=(r,e)=>{const o=E(r),a=E(e),i=Math.max(o,a),t=Math.min(o,a);return(i+_)/(t+_)},J=r=>(Math.floor(r*100)/100).toFixed(2),C=[{variant:"primary",label:"Primary"},{variant:"secondary",label:"Secondary"},{variant:"tertiary",label:"Tertiary"}],c={fontFamily:"monospace"},K={transition:"none"},Q=({variant:r,label:e,themeName:o})=>{const a=H(),i=S.useRef(null),[t,p]=S.useState(null);return S.useEffect(()=>{const g=i.current;if(!g)return;p((()=>{const d=getComputedStyle(g);let u=g,b="";for(;u;){const v=getComputedStyle(u).backgroundColor;if(T(v)[3]!==0){b=v;break}u=u.parentElement}const M=d.borderTopStyle!=="none"&&d.borderTopWidth!=="0px";return{txt:f(d.color),bg:f(b),bd:M?f(d.borderTopColor):"None",ratio:z(d.color,b)}})())},[a]),m(l,{direction:"column",gap:2,sx:{minWidth:180},children:[n(w,{children:e}),m(l,{direction:"column",children:[m(s,{sx:c,children:["Txt ",(t==null?void 0:t.txt)??"—"]}),m(s,{sx:c,children:["BG ",(t==null?void 0:t.bg)??"—"]}),m(s,{sx:c,children:["BD ",(t==null?void 0:t.bd)??"—"]})]}),n(l,{direction:"row",children:n(A,{ref:i,variant:r,sx:K,children:"Label"})}),m(l,{direction:"column",children:[n(s,{sx:c,children:o}),n(s,{sx:c,children:t?`${J(t.ratio)}:1`:"—"}),n(s,{sx:c,children:t&&t.ratio>=4.5?"Pass AA":"Fail AA"}),n(s,{sx:c,children:t&&t.ratio>=7?"Pass AAA":"Fail AAA"})]})]})},Y=["Enabled","Hovered","Disabled","Focused"],Z={Enabled:"",Hovered:"state-hover",Disabled:"",Focused:"Mui-focusVisible"},tt=({variant:r,state:e})=>n(A,{variant:r,disabled:e==="Disabled",className:Z[e],startIcon:n("i",{className:"fa-solid fa-chevron-left"}),endIcon:n("i",{className:"fa-solid fa-chevron-right"}),children:"Label"}),me={title:"Buttons/Button/Tables",component:A,parameters:{layout:"padded",...D("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6522-21508&m=dev")}},G={bgcolor:"background.default",color:"text.primary",p:4,width:"fit-content"},h={render:(r,{globals:e})=>n(l,{direction:"row",gap:6,sx:G,children:C.map(({variant:o,label:a})=>n(Q,{variant:o,label:a,themeName:e.theme},o))})},x={parameters:{pseudo:{hover:".state-hover"}},render:(r,{globals:e})=>m(l,{direction:"column",gap:3,sx:G,children:[n("div",{style:{display:"grid",gridTemplateColumns:"max-content repeat(3, max-content)",columnGap:24,rowGap:20,alignItems:"center"},children:Y.map(o=>m(I.Fragment,{children:[n(s,{children:o}),C.map(({variant:a})=>n(tt,{variant:a,state:o},a))]},o))}),n(s,{children:e.theme})]})};var R,y,F;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(N=(L=x.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const ce=["SpecTable","States"];export{h as SpecTable,x as States,ce as __namedExportsOrder,me as default};
