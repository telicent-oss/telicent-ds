import{j as o,a as m,R as k,r as S}from"./iframe-BfEsncEF.js";import{B as T}from"./DropdownButton-99vgIkCV.js";import{a as c,u as G}from"./UserIcon-DAdv8Ixp.js";import{T as i,a as _}from"./Text-BMw1ybWa.js";import"./Chip-wEw5ZNvW.js";import"./Divider-Berqrx4H.js";import"./TreeView-D2h7huiz.js";import"./Box-ChCTlzLQ.js";import"./Container-DHCExKqq.js";import{f as H}from"./figmaDesign-CKKXRVNK.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-j1RL-BpF.js";import"./useThemeProps-D2PMoY2V.js";import"./useTheme-BD06mfPU.js";import"./AdapterDayjs-D6qtZrEv.js";import"./generateUtilityClass-DLTO8EZ0.js";import"./styled-CKEjpOwx.js";import"./Typography-Cur-qBxx.js";import"./generateUtilityClasses-CgDs_uOe.js";import"./Modal-BoRvpCnD.js";import"./utils-D9P5YpBK.js";import"./TransitionGroupContext-BiIjqEy8.js";import"./index-CuxFIe6q.js";import"./resolveComponentProps-2Wttismo.js";import"./TextField-BV7Va00E.js";import"./useFormControl-3m3RTCoN.js";import"./Paper-CmIu2cj4.js";import"./createSvgIcon-C6teTnyS.js";import"./createStyled-KEG0ma0P.js";import"./IconButton-scd69Lv3.js";import"./ButtonBase-CyDfjua2.js";import"./DialogContent-orjmG92r.js";import"./Button-jK3vDH7L.js";import"./Chip-C3EaWfE-.js";import"./DateTimePicker-C-sZiwTj.js";import"./Divider-BDyVO8zM.js";import"./Box-CtVv9OHw.js";import"./Stack-DB3Y16n1.js";import"./styled-D7FRfLSG.js";import"./Close-1c413Acz.js";import"./LinearProgress-4SIHWNA8.js";import"./Spinner-p-63cFPN.js";import"./Dialog-BfMJ9NKL.js";import"./MapToggleButtonPresentational-Bgmt2_LX.js";import"./Remove-DoXNBLDf.js";import"./TextField-M5Osf9JN.js";import"./Switch-C_gUrCjS.js";import"./DatePicker-D3jVMaej.js";import"./LinkButton-DybG3JjG.js";import"./Paper-VpNf2qxV.js";import"./ErrorFallback-Dn6So0DV.js";import"./ErrorFallbackText-DoD_00IC.js";import"./ErrorFallbackWrapper-DKy8QON8.js";import"./Brand-B8b8xuEA.js";import"./constants-C1bu_m5W.js";import"./Edit-CfOidwdt.js";const y=a=>{var t;const[r=0,e=0,n=0,s=1]=((t=a.match(/[\d.]+/g))==null?void 0:t.map(Number))??[];return[r,e,n,s]},v=a=>{const[r,e,n,s]=y(a);if(s===0)return"transparent";const t=p=>Math.round(p).toString(16).padStart(2,"0").toUpperCase();return`#${t(r)}${t(e)}${t(n)}`},F=a=>{const[r,e,n]=y(a),[s,t,p]=[r,e,n].map(d=>{const x=d/255;return x<=.03928?x/12.92:((x+.055)/1.055)**2.4});return .2126*s+.7152*t+.0722*p},L=(a,r)=>{const e=F(a),n=F(r);return(Math.max(e,n)+.05)/(Math.min(e,n)+.05)},V=a=>(Math.floor(a*100)/100).toFixed(2),I=[{variant:"primary",label:"Primary"},{variant:"secondary",label:"Secondary"},{variant:"tertiary",label:"Tertiary"}],l={fontFamily:"monospace"},P={transition:"none"},U=({variant:a,label:r,themeName:e})=>{const n=G(),s=S.useRef(null),[t,p]=S.useState(null);return S.useEffect(()=>{const d=s.current;if(!d)return;p((()=>{const u=getComputedStyle(d);let h=d,f="";for(;h;){const A=getComputedStyle(h).backgroundColor;if(y(A)[3]!==0){f=A;break}h=h.parentElement}const M=u.borderTopStyle!=="none"&&u.borderTopWidth!=="0px";return{txt:v(u.color),bg:v(f),bd:M?v(u.borderTopColor):"None",ratio:L(u.color,f)}})())},[n]),m(c,{direction:"column",gap:2,sx:{minWidth:180},children:[o(_,{children:r}),m(c,{direction:"column",children:[m(i,{sx:l,children:["Txt ",(t==null?void 0:t.txt)??"—"]}),m(i,{sx:l,children:["BG ",(t==null?void 0:t.bg)??"—"]}),m(i,{sx:l,children:["BD ",(t==null?void 0:t.bd)??"—"]})]}),o(c,{direction:"row",children:o(T,{ref:s,variant:a,sx:P,children:"Label"})}),m(c,{direction:"column",children:[o(i,{sx:l,children:e}),o(i,{sx:l,children:t?`${V(t.ratio)}:1`:"—"}),o(i,{sx:l,children:t&&t.ratio>=4.5?"Pass AA":"Fail AA"}),o(i,{sx:l,children:t&&t.ratio>=7?"Pass AAA":"Fail AAA"})]})]})},$=["Enabled","Hovered","Disabled","Focused"],j={Enabled:"",Hovered:"state-hover",Disabled:"",Focused:"Mui-focusVisible"},W=({variant:a,state:r})=>o(T,{variant:a,disabled:r==="Disabled",className:j[r],startIcon:o("i",{className:"fa-solid fa-chevron-left"}),endIcon:o("i",{className:"fa-solid fa-chevron-right"}),children:"Label"}),zt={title:"Buttons/Button/Tables",component:T,parameters:{layout:"padded",...H("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6522-21508&m=dev")}},D={bgcolor:"background.default",color:"text.primary",p:4,width:"fit-content"},g={render:(a,{globals:r})=>o(c,{direction:"row",gap:6,sx:D,children:I.map(({variant:e,label:n})=>o(U,{variant:e,label:n,themeName:r.theme},e))})},b={parameters:{pseudo:{hover:".state-hover"}},render:(a,{globals:r})=>m(c,{direction:"column",gap:3,sx:D,children:[o("div",{style:{display:"grid",gridTemplateColumns:"max-content repeat(3, max-content)",columnGap:24,rowGap:20,alignItems:"center"},children:$.map(e=>m(k.Fragment,{children:[o(i,{children:e}),I.map(({variant:n})=>o(W,{variant:n,state:e},n))]},e))}),o(i,{children:r.theme})]})};var C,B,R;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (_args, {
    globals
  }) => <FlexBox direction="row" gap={6} sx={surfaceSx}>
      {VARIANTS.map(({
      variant,
      label
    }) => <SpecColumn key={variant} variant={variant} label={label} themeName={globals.theme} />)}
    </FlexBox>
}`,...(R=(B=g.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var w,N,E;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(E=(N=b.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};const Jt=["SpecTable","States"];export{g as SpecTable,b as States,Jt as __namedExportsOrder,zt as default};
