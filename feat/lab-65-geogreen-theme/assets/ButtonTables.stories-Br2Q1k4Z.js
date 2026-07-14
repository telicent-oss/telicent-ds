import{j as o,a as l,R as k,r as b}from"./iframe-IZoSKsE3.js";import{B as f}from"./DropdownButton-B5TP08KZ.js";import{a as d,u as _}from"./UserIcon-RuE3VV1c.js";import{T as s,a as G}from"./Text-Kj3CiPWT.js";import"./Chip-B0Z93eta.js";import"./Divider-B-3_Adf4.js";import"./TreeView-CuKNTmME.js";import"./Box-uH6Ohr9R.js";import"./Container-DG8DPGND.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-DTUKyBXe.js";import"./useThemeProps-Fa_ce5Ni.js";import"./useTheme-CsPhboDS.js";import"./AdapterDayjs-X4Nz8chh.js";import"./generateUtilityClass-DxC2Wx0F.js";import"./styled-PcYrI7eH.js";import"./Typography-CQLnp7AW.js";import"./generateUtilityClasses-COTvziYz.js";import"./Modal-z7cB2q78.js";import"./utils-Df1nm0Py.js";import"./TransitionGroupContext-Q2DBTf-m.js";import"./index-DlegAnnu.js";import"./resolveComponentProps-2LdfrHoa.js";import"./TextField-C1yTht9j.js";import"./useFormControl-BUYDSUI9.js";import"./Paper-ClTtkpZ4.js";import"./createSvgIcon-D0jCcW4R.js";import"./createStyled-AIvOzxUM.js";import"./IconButton-DegQ21xD.js";import"./ButtonBase-qLroFK0e.js";import"./DialogContent-CeI2ul6W.js";import"./Button-CeFHt3lU.js";import"./Chip-D1Z91CjO.js";import"./DateTimePicker-Cp3vG90e.js";import"./Divider-BYw826Ky.js";import"./Box-DfvW-z9e.js";import"./Stack-9NxgANXW.js";import"./styled-xThT8ge4.js";import"./Close-Bkeo-_v7.js";import"./LinearProgress-DReytKR0.js";import"./Spinner-BRYGcylR.js";import"./Dialog-CAOjiQ45.js";import"./MapToggleButtonPresentational-BDY0ODha.js";import"./Remove-CPvZ5wnT.js";import"./TextField-Bfy6L2oH.js";import"./Switch-DV-LHNwK.js";import"./DatePicker-jgDY5iU9.js";import"./LinkButton-DuZk3qqS.js";import"./Paper-CERtHtjI.js";import"./ErrorFallback-xEgWIGhC.js";import"./ErrorFallbackText-CmtVqweP.js";import"./ErrorFallbackWrapper-CT6MF4FT.js";import"./Brand-BVth3CVq.js";import"./constants-CIQOnJ5P.js";import"./Edit-CK78KsNY.js";const T=n=>{var t;const[r=0,e=0,a=0,i=1]=((t=n.match(/[\d.]+/g))==null?void 0:t.map(Number))??[];return[r,e,a,i]},S=n=>{const[r,e,a,i]=T(n);if(i===0)return"transparent";const t=u=>Math.round(u).toString(16).padStart(2,"0").toUpperCase();return`#${t(r)}${t(e)}${t(a)}`},y=n=>{const[r,e,a]=T(n),[i,t,u]=[r,e,a].map(c=>{const m=c/255;return m<=.03928?m/12.92:((m+.055)/1.055)**2.4});return .2126*i+.7152*t+.0722*u},D=(n,r)=>{const e=y(n),a=y(r);return(Math.max(e,a)+.05)/(Math.min(e,a)+.05)},E=[{variant:"primary",label:"Primary"},{variant:"secondary",label:"Secondary"},{variant:"tertiary",label:"Tertiary"}],p={fontFamily:"monospace"},H=({variant:n,label:r,themeName:e})=>{const a=_(),i=b.useRef(null),[t,u]=b.useState(null);return b.useEffect(()=>{if(!i.current)return;const c=getComputedStyle(i.current);let m=i.current,g="";for(;m;){const v=getComputedStyle(m).backgroundColor;if(T(v)[3]!==0){g=v;break}m=m.parentElement}const I=c.borderTopStyle!=="none"&&c.borderTopWidth!=="0px";u({txt:S(c.color),bg:S(g),bd:I?S(c.borderTopColor):"None",ratio:D(c.color,g)})},[a]),l(d,{direction:"column",gap:2,sx:{minWidth:180},children:[o(G,{children:r}),l(d,{direction:"column",children:[l(s,{sx:p,children:["Txt ",(t==null?void 0:t.txt)??"—"]}),l(s,{sx:p,children:["BG ",(t==null?void 0:t.bg)??"—"]}),l(s,{sx:p,children:["BD ",(t==null?void 0:t.bd)??"—"]})]}),o(d,{direction:"row",children:o(f,{ref:i,variant:n,children:"Label"})}),l(d,{direction:"column",children:[o(s,{sx:p,children:e}),o(s,{sx:p,children:t?`${t.ratio.toFixed(2)}:1`:"—"}),o(s,{sx:p,children:t&&t.ratio>=4.5?"Pass AA":"Fail AA"}),o(s,{sx:p,children:t&&t.ratio>=7?"Pass AAA":"Fail AAA"})]})]})},L=["Enabled","Hovered","Disabled","Focused"],M={Enabled:"",Hovered:"state-hover",Disabled:"",Focused:"Mui-focusVisible"},V=({variant:n,state:r})=>o(f,{variant:n,disabled:r==="Disabled",className:M[r],startIcon:o("i",{className:"fa-solid fa-chevron-left"}),endIcon:o("i",{className:"fa-solid fa-chevron-right"}),children:"Label"}),jt={title:"Buttons/Button Tables",component:f,parameters:{layout:"padded"}},w={bgcolor:"background.default",color:"text.primary",p:4,width:"fit-content"},x={render:(n,{globals:r})=>o(d,{direction:"row",gap:6,sx:w,children:E.map(({variant:e,label:a})=>o(H,{variant:e,label:a,themeName:r.theme},e))})},h={parameters:{pseudo:{hover:".state-hover"}},render:(n,{globals:r})=>l(d,{direction:"column",gap:3,sx:w,children:[o("div",{style:{display:"grid",gridTemplateColumns:"max-content repeat(3, max-content)",columnGap:24,rowGap:20,alignItems:"center"},children:L.map(e=>l(k.Fragment,{children:[o(s,{children:e}),E.map(({variant:a})=>o(V,{variant:a,state:e},a))]},e))}),o(s,{children:r.theme})]})};var A,F,B;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
