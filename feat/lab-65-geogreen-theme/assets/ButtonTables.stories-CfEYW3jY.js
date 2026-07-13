import{j as o,a as l,R as k,r as b}from"./iframe-BTs8Qz_v.js";import{B as f}from"./DropdownButton-G-K-EndC.js";import{a as d,u as _}from"./UserIcon-qL3nc6Ye.js";import{T as s,H as G}from"./Text-By5Br_b-.js";import"./Chip-bGugLWYg.js";import"./Divider-D8qwfiZK.js";import"./TreeView-D9FXVNiU.js";import"./Box-Ajc45ecz.js";import"./Container-BT4lQ41_.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-XRwC7y3X.js";import"./useThemeProps-CHaXSOO8.js";import"./useTheme-BY7-I-_D.js";import"./AdapterDayjs-B4hS7p71.js";import"./generateUtilityClass-XH2js52g.js";import"./styled-B0ve5Lte.js";import"./Typography-Bwzy_pT0.js";import"./generateUtilityClasses-DzsYMhVt.js";import"./Modal-BHy1MODJ.js";import"./utils-DsGpmSH6.js";import"./TransitionGroupContext-C2nTmoPW.js";import"./index-Anq-NE1T.js";import"./resolveComponentProps-BSvdUFPL.js";import"./TextField-BCq8fbtP.js";import"./useFormControl-kbGIszV2.js";import"./Paper-DxuvVAQ6.js";import"./createSvgIcon-ZqZYcYJv.js";import"./createStyled-CiTOBok1.js";import"./IconButton-BOjLmXTD.js";import"./ButtonBase-DlDbZFIP.js";import"./DialogContent-pg1EBpb5.js";import"./Button-B27AaC1x.js";import"./Chip-BttY0NCV.js";import"./DateTimePicker-C0SYLDsK.js";import"./Divider-CN9HmWY3.js";import"./Box-BHCfSNSs.js";import"./Stack-Cl9uE_8Z.js";import"./styled-DgGoeEUu.js";import"./Close-Ck6AS4Zz.js";import"./LinearProgress-BtCU_M3F.js";import"./Spinner-m7x04DVn.js";import"./Dialog-IL7KeYEd.js";import"./MapToggleButtonPresentational-C7HzS0Xc.js";import"./Remove-bxF0BX3Y.js";import"./TextField-BL90cYaN.js";import"./Switch-5GXWpenZ.js";import"./DatePicker-XxDKSNN6.js";import"./LinkButton-B7KGF6ie.js";import"./Paper-BjLrjFfj.js";import"./ErrorFallback-75I18Wfm.js";import"./ErrorFallbackText-CkvOLZB-.js";import"./ErrorFallbackWrapper-Do3gktls.js";import"./Brand-BV9ZwJS1.js";import"./constants-7Gz8l8bJ.js";import"./Edit-ClsnfoJ9.js";const E=[{variant:"primary",label:"Primary"},{variant:"secondary",label:"Secondary"},{variant:"tertiary",label:"Tertiary"}],T=n=>{var t;const[r=0,e=0,a=0,i=1]=((t=n.match(/[\d.]+/g))==null?void 0:t.map(Number))??[];return[r,e,a,i]},S=n=>{const[r,e,a,i]=T(n);if(i===0)return"transparent";const t=u=>Math.round(u).toString(16).padStart(2,"0").toUpperCase();return`#${t(r)}${t(e)}${t(a)}`},y=n=>{const[r,e,a]=T(n),[i,t,u]=[r,e,a].map(c=>{const m=c/255;return m<=.03928?m/12.92:((m+.055)/1.055)**2.4});return .2126*i+.7152*t+.0722*u},H=(n,r)=>{const e=y(n),a=y(r);return(Math.max(e,a)+.05)/(Math.min(e,a)+.05)},p={fontFamily:"monospace"},D=({variant:n,label:r,themeName:e})=>{const a=_(),i=b.useRef(null),[t,u]=b.useState(null);return b.useEffect(()=>{if(!i.current)return;const c=getComputedStyle(i.current);let m=i.current,g="";for(;m;){const v=getComputedStyle(m).backgroundColor;if(T(v)[3]!==0){g=v;break}m=m.parentElement}const I=c.borderTopStyle!=="none"&&c.borderTopWidth!=="0px";u({txt:S(c.color),bg:S(g),bd:I?S(c.borderTopColor):"None",ratio:H(c.color,g)})},[a]),l(d,{direction:"column",gap:2,sx:{minWidth:180},children:[o(G,{children:r}),l(d,{direction:"column",children:[l(s,{sx:p,children:["Txt ",(t==null?void 0:t.txt)??"—"]}),l(s,{sx:p,children:["BG ",(t==null?void 0:t.bg)??"—"]}),l(s,{sx:p,children:["BD ",(t==null?void 0:t.bd)??"—"]})]}),o(d,{direction:"row",children:o(f,{ref:i,variant:n,children:"Label"})}),l(d,{direction:"column",children:[o(s,{sx:p,children:e}),o(s,{sx:p,children:t?`${t.ratio.toFixed(2)}:1`:"—"}),o(s,{sx:p,children:t&&t.ratio>=4.5?"Pass AA":"Fail AA"}),o(s,{sx:p,children:t&&t.ratio>=7?"Pass AAA":"Fail AAA"})]})]})},L=["Enabled","Hovered","Disabled","Focused"],M={Enabled:"",Hovered:"state-hover",Disabled:"",Focused:"Mui-focusVisible"},V=({variant:n,state:r})=>o(f,{variant:n,disabled:r==="Disabled",className:M[r],startIcon:o("i",{className:"fa-solid fa-chevron-left"}),endIcon:o("i",{className:"fa-solid fa-chevron-right"}),children:"Label"}),jt={title:"Buttons/Button Tables",component:f,parameters:{layout:"padded"}},w={bgcolor:"background.default",color:"text.primary",p:4,width:"fit-content"},x={render:(n,{globals:r})=>o(d,{direction:"row",gap:6,sx:w,children:E.map(({variant:e,label:a})=>o(D,{variant:e,label:a,themeName:r.theme},e))})},h={parameters:{pseudo:{hover:".state-hover"}},render:(n,{globals:r})=>l(d,{direction:"column",gap:3,sx:w,children:[o("div",{style:{display:"grid",gridTemplateColumns:"max-content repeat(3, max-content)",columnGap:24,rowGap:20,alignItems:"center"},children:L.map(e=>l(k.Fragment,{children:[o(s,{children:e}),E.map(({variant:a})=>o(V,{variant:a,state:e},a))]},e))}),o(s,{children:r.theme})]})};var A,F,B;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: (_args, {
    globals
  }) => <FlexBox direction="row" gap={6} sx={surfaceSx}>
      {VARIANTS.map(({
      variant,
      label
    }) => <SpecColumn key={variant} variant={variant} label={label} themeName={globals.theme} />)}
    </FlexBox>
}`,...(B=(F=x.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var C,N,R;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(R=(N=h.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const Pt=["SpecTable","States"];export{x as SpecTable,h as States,Pt as __namedExportsOrder,jt as default};
