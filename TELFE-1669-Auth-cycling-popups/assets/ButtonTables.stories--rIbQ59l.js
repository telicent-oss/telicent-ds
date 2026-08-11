import{j as n,a as m,R as I,r as S}from"./iframe-CdPu0Nji.js";import{B as A}from"./DropdownButton-DLh5IwXH.js";import{a as l,u as H}from"./UserIcon-zZuyRK2V.js";import{T as s,a as w}from"./Text-B4VJCCMs.js";import"./Chip-qDUxoCCM.js";import"./Divider-CQaGt93_.js";import"./TreeView-DRYBS-Xt.js";import"./Box--WBeT2uu.js";import"./Container-A4vphWw1.js";import{f as D}from"./figmaDesign-CKKXRVNK.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-_uNjXpz2.js";import"./useThemeProps-C31Hu9eR.js";import"./useTheme-CpTvU32l.js";import"./AdapterDayjs--a3WegzB.js";import"./generateUtilityClass-BkGLkL42.js";import"./styled-DvAHf-ii.js";import"./Typography-jEpu3_H5.js";import"./generateUtilityClasses-1MNiGsyU.js";import"./Modal-H2NuyrfR.js";import"./utils-CZMvQYd-.js";import"./TransitionGroupContext-p-MdgXa8.js";import"./index-CjSg-LrS.js";import"./resolveComponentProps-BTqXFKqs.js";import"./TextField-0yYRCi_S.js";import"./useFormControl-DILhRqjH.js";import"./Paper-Dd_SbCQz.js";import"./createSvgIcon-BsGzgqT2.js";import"./createStyled-CdQc-wzQ.js";import"./IconButton-UIxH2BuM.js";import"./ButtonBase-CwLYgF7v.js";import"./DialogContent-B145AqQj.js";import"./Button-CYBCMGv1.js";import"./Chip-DsSTZC0S.js";import"./DateTimePicker-Buv1kwF8.js";import"./Divider-BvdIoCl6.js";import"./Box-DT8xOrnE.js";import"./Stack-DaLGDZVV.js";import"./styled-CmJFQDl3.js";import"./Close-EDI9r0DC.js";import"./LinearProgress-Dz1fhiUi.js";import"./Spinner-CTU6TpBn.js";import"./Dialog-DJtg1d2n.js";import"./MapToggleButtonPresentational-Ca86nxH9.js";import"./Remove-CVv2NlLk.js";import"./TextField-CrDyAMED.js";import"./Switch-D6FP3j0O.js";import"./DatePicker-1LYmoJIP.js";import"./LinkButton-DdkrapHh.js";import"./Paper-yLhdaCIP.js";import"./ErrorFallback-De_3OhnE.js";import"./ErrorFallbackText-CIVzvqun.js";import"./ErrorFallbackWrapper-BCfSQJea.js";import"./Brand-BhO6VgG7.js";import"./constants-8XY3AVHe.js";import"./Edit-CU0UvQ5m.js";const T=r=>{var t;const[e=0,o=0,a=0,i=1]=((t=r.match(/[\d.]+/g))==null?void 0:t.map(Number))??[];return[e,o,a,i]},f=r=>{const[e,o,a,i]=T(r);if(i===0)return"transparent";const t=p=>Math.round(p).toString(16).padStart(2,"0").toUpperCase();return`#${t(e)}${t(o)}${t(a)}`},U=255,k=.03928,V=12.92,O=.055,P=1.055,W=2.4,$=.2126,j=.7152,X=.0722,q=r=>{const e=r/U;return e<=k?e/V:((e+O)/P)**W},E=r=>{const[e,o,a]=T(r),[i,t,p]=[e,o,a].map(q);return $*i+j*t+X*p},_=.05,z=(r,e)=>{const o=E(r),a=E(e),i=Math.max(o,a),t=Math.min(o,a);return(i+_)/(t+_)},J=r=>(Math.floor(r*100)/100).toFixed(2),C=[{variant:"primary",label:"Primary"},{variant:"secondary",label:"Secondary"},{variant:"tertiary",label:"Tertiary"}],c={fontFamily:"monospace"},K={transition:"none"},Q=({variant:r,label:e,themeName:o})=>{const a=H(),i=S.useRef(null),[t,p]=S.useState(null);return S.useEffect(()=>{const g=i.current;if(!g)return;p((()=>{const d=getComputedStyle(g);let u=g,b="";for(;u;){const v=getComputedStyle(u).backgroundColor;if(T(v)[3]!==0){b=v;break}u=u.parentElement}const M=d.borderTopStyle!=="none"&&d.borderTopWidth!=="0px";return{txt:f(d.color),bg:f(b),bd:M?f(d.borderTopColor):"None",ratio:z(d.color,b)}})())},[a]),m(l,{direction:"column",gap:2,sx:{minWidth:180},children:[n(w,{children:e}),m(l,{direction:"column",children:[m(s,{sx:c,children:["Txt ",(t==null?void 0:t.txt)??"—"]}),m(s,{sx:c,children:["BG ",(t==null?void 0:t.bg)??"—"]}),m(s,{sx:c,children:["BD ",(t==null?void 0:t.bd)??"—"]})]}),n(l,{direction:"row",children:n(A,{ref:i,variant:r,sx:K,children:"Label"})}),m(l,{direction:"column",children:[n(s,{sx:c,children:o}),n(s,{sx:c,children:t?`${J(t.ratio)}:1`:"—"}),n(s,{sx:c,children:t&&t.ratio>=4.5?"Pass AA":"Fail AA"}),n(s,{sx:c,children:t&&t.ratio>=7?"Pass AAA":"Fail AAA"})]})]})},Y=["Enabled","Hovered","Disabled","Focused"],Z={Enabled:"",Hovered:"state-hover",Disabled:"",Focused:"Mui-focusVisible"},tt=({variant:r,state:e})=>n(A,{variant:r,disabled:e==="Disabled",className:Z[e],startIcon:n("i",{className:"fa-solid fa-chevron-left"}),endIcon:n("i",{className:"fa-solid fa-chevron-right"}),children:"Label"}),ne={title:"Buttons/Button/Tables",component:A,parameters:{layout:"padded",...D("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6522-21508&m=dev")}},G={bgcolor:"background.default",color:"text.primary",p:4,width:"fit-content"},h={render:(r,{globals:e})=>n(l,{direction:"row",gap:6,sx:G,children:C.map(({variant:o,label:a})=>n(Q,{variant:o,label:a,themeName:e.theme},o))})},x={parameters:{pseudo:{hover:".state-hover"}},render:(r,{globals:e})=>m(l,{direction:"column",gap:3,sx:G,children:[n("div",{style:{display:"grid",gridTemplateColumns:"max-content repeat(3, max-content)",columnGap:24,rowGap:20,alignItems:"center"},children:Y.map(o=>m(I.Fragment,{children:[n(s,{children:o}),C.map(({variant:a})=>n(tt,{variant:a,state:o},a))]},o))}),n(s,{children:e.theme})]})};var R,y,B;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (_args, {
    globals
  }) => <FlexBox direction="row" gap={6} sx={surfaceSx}>
      {VARIANTS.map(({
      variant,
      label
    }) => <SpecColumn key={variant} variant={variant} label={label} themeName={globals.theme} />)}
    </FlexBox>
}`,...(B=(y=h.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var F,L,N;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(N=(L=x.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const ae=["SpecTable","States"];export{h as SpecTable,x as States,ae as __namedExportsOrder,ne as default};
