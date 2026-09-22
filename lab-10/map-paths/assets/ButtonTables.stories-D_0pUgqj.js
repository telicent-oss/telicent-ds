import{j as n,a as m,R as I,r as S}from"./iframe-DOLuw-8z.js";import{B as A}from"./DropdownButton-BR3B1G6x.js";import{u as H}from"./UserIcon-D-CtbMck.js";import{F as l}from"./FlexBox-dhqGSpWS.js";import{T as s,a as w}from"./Text-v6BCoAFn.js";import"./Chip-CbE023TT.js";import"./Divider-DLErqQ6C.js";import"./TreeView-BvSVb2QI.js";import"./AppInfoRow-Cc31NytU.js";import"./Box-BFt0Svhz.js";import"./Container-DA4_3B6s.js";import{f as D}from"./figmaDesign-CKKXRVNK.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-CUodZPbj.js";import"./useThemeProps-CShRTLgw.js";import"./useTheme-BSZkNvEx.js";import"./AdapterDayjs-C99Dz3b5.js";import"./generateUtilityClass-D23RcBiy.js";import"./styled-5Shyaefz.js";import"./Typography-Z1XTMoOJ.js";import"./generateUtilityClasses-ChqHqDQv.js";import"./Modal-D90df1Mz.js";import"./utils-CUrWUUX2.js";import"./TransitionGroupContext-CvOe7o6x.js";import"./index-F34Reg20.js";import"./resolveComponentProps-Da1Gp387.js";import"./Popover-DWnhc3gj.js";import"./Paper-BriXG56v.js";import"./TextField-CSSUqK2u.js";import"./useFormControl-DJ_bputt.js";import"./createSvgIcon-Dp3o3x_9.js";import"./SvgIcon-BjWn1_cp.js";import"./createStyled-DWYFW-gl.js";import"./IconButton-B7uU5-A6.js";import"./ButtonBase-DQ4h9g4Z.js";import"./DialogContent-MnGvk2PE.js";import"./Button-77T-pKpm.js";import"./Chip-Bo6kFT4m.js";import"./DateTimePicker-4y9zAVnR.js";import"./Divider-BIsEpysU.js";import"./Box-Bwed_2XS.js";import"./Stack-D5u4BrRv.js";import"./styled-CU1aRKTP.js";import"./Alert-DOAPXxCG.js";import"./LinearProgress-BhUeYgYm.js";import"./Spinner-B2RojS2c.js";import"./Dialog-Bx2dNClF.js";import"./MapToggleButtonPresentational-CkgwP2H7.js";import"./Remove-e2Ul6uKz.js";import"./LinkButton-qsDBDeKr.js";import"./TextField-Z8zl28V9.js";import"./Switch-CdY-5xOk.js";import"./DatePicker-FXWZ1w0I.js";import"./Paper-B6G87zKQ.js";import"./ErrorFallback-bABA0cST.js";import"./ErrorFallbackText-CRXi0n9L.js";import"./ErrorFallbackWrapper-BV65zCgM.js";import"./Brand-fYK7bDws.js";import"./Edit-yjB0ncsI.js";const T=r=>{var t;const[e=0,o=0,a=0,i=1]=((t=r.match(/[\d.]+/g))==null?void 0:t.map(Number))??[];return[e,o,a,i]},f=r=>{const[e,o,a,i]=T(r);if(i===0)return"transparent";const t=p=>Math.round(p).toString(16).padStart(2,"0").toUpperCase();return`#${t(e)}${t(o)}${t(a)}`},U=255,k=.03928,V=12.92,O=.055,P=1.055,W=2.4,$=.2126,j=.7152,X=.0722,q=r=>{const e=r/U;return e<=k?e/V:((e+O)/P)**W},E=r=>{const[e,o,a]=T(r),[i,t,p]=[e,o,a].map(q);return $*i+j*t+X*p},_=.05,z=(r,e)=>{const o=E(r),a=E(e),i=Math.max(o,a),t=Math.min(o,a);return(i+_)/(t+_)},J=r=>(Math.floor(r*100)/100).toFixed(2),C=[{variant:"primary",label:"Primary"},{variant:"secondary",label:"Secondary"},{variant:"tertiary",label:"Tertiary"}],c={fontFamily:"monospace"},K={transition:"none"},Q=({variant:r,label:e,themeName:o})=>{const a=H(),i=S.useRef(null),[t,p]=S.useState(null);return S.useEffect(()=>{const g=i.current;if(!g)return;p((()=>{const d=getComputedStyle(g);let u=g,b="";for(;u;){const v=getComputedStyle(u).backgroundColor;if(T(v)[3]!==0){b=v;break}u=u.parentElement}const M=d.borderTopStyle!=="none"&&d.borderTopWidth!=="0px";return{txt:f(d.color),bg:f(b),bd:M?f(d.borderTopColor):"None",ratio:z(d.color,b)}})())},[a]),m(l,{direction:"column",gap:2,sx:{minWidth:180},children:[n(w,{children:e}),m(l,{direction:"column",children:[m(s,{sx:c,children:["Txt ",(t==null?void 0:t.txt)??"—"]}),m(s,{sx:c,children:["BG ",(t==null?void 0:t.bg)??"—"]}),m(s,{sx:c,children:["BD ",(t==null?void 0:t.bd)??"—"]})]}),n(l,{direction:"row",children:n(A,{ref:i,variant:r,sx:K,children:"Label"})}),m(l,{direction:"column",children:[n(s,{sx:c,children:o}),n(s,{sx:c,children:t?`${J(t.ratio)}:1`:"—"}),n(s,{sx:c,children:t&&t.ratio>=4.5?"Pass AA":"Fail AA"}),n(s,{sx:c,children:t&&t.ratio>=7?"Pass AAA":"Fail AAA"})]})]})},Y=["Enabled","Hovered","Disabled","Focused"],Z={Enabled:"",Hovered:"state-hover",Disabled:"",Focused:"Mui-focusVisible"},tt=({variant:r,state:e})=>n(A,{variant:r,disabled:e==="Disabled",className:Z[e],startIcon:n("i",{className:"fa-solid fa-chevron-left"}),endIcon:n("i",{className:"fa-solid fa-chevron-right"}),children:"Label"}),se={title:"Buttons/Button/Tables",component:A,parameters:{layout:"padded",...D("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6522-21508&m=dev")}},G={bgcolor:"background.default",color:"text.primary",p:4,width:"fit-content"},h={render:(r,{globals:e})=>n(l,{direction:"row",gap:6,sx:G,children:C.map(({variant:o,label:a})=>n(Q,{variant:o,label:a,themeName:e.theme},o))})},x={parameters:{pseudo:{hover:".state-hover"}},render:(r,{globals:e})=>m(l,{direction:"column",gap:3,sx:G,children:[n("div",{style:{display:"grid",gridTemplateColumns:"max-content repeat(3, max-content)",columnGap:24,rowGap:20,alignItems:"center"},children:Y.map(o=>m(I.Fragment,{children:[n(s,{children:o}),C.map(({variant:a})=>n(tt,{variant:a,state:o},a))]},o))}),n(s,{children:e.theme})]})};var R,y,F;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(N=(L=x.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const me=["SpecTable","States"];export{h as SpecTable,x as States,me as __namedExportsOrder,se as default};
