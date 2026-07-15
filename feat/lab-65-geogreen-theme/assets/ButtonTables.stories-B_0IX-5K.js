import{j as n,a as m,R as I,r as S}from"./iframe-BWDLL2AF.js";import{B as A}from"./DropdownButton-BeMj20lx.js";import{a as l,u as H}from"./UserIcon-BG2pS985.js";import{T as s,a as w}from"./Text-Dx4_8ER9.js";import"./Chip-D79fnq3-.js";import"./Divider-BlwEMsBH.js";import"./TreeView-BVPK7VvS.js";import"./Box-CCa4g7t1.js";import"./Container-CLAY7udK.js";import{f as D}from"./figmaDesign-CKKXRVNK.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-CPqi_8jR.js";import"./useThemeProps-Ct7WBxRG.js";import"./useTheme-DOAovAvO.js";import"./AdapterDayjs-zyELZRo4.js";import"./generateUtilityClass-g1qzx5ZO.js";import"./styled-DEFOqb-D.js";import"./Typography-Klmc7FDT.js";import"./generateUtilityClasses-DVUEFJbr.js";import"./Modal-CJ09CU82.js";import"./utils-BFnmslFO.js";import"./TransitionGroupContext-BB9UDuBa.js";import"./index-BHrQ54hb.js";import"./resolveComponentProps-CvqLrRPt.js";import"./TextField-isXjsZkP.js";import"./useFormControl-CJfau4hS.js";import"./Paper-D2v4N1dQ.js";import"./createSvgIcon-XnQP3vBd.js";import"./createStyled-BVw84nZJ.js";import"./IconButton-DH05WBbS.js";import"./ButtonBase-kwpA7teX.js";import"./DialogContent-BkWlGKhl.js";import"./Button-ClnRtEFd.js";import"./Chip-D6btNuqw.js";import"./DateTimePicker-DgMuFME3.js";import"./Divider-DOviS-GW.js";import"./Box-C59dMgxV.js";import"./Stack-DUjYdPYI.js";import"./styled-o6RfLB5Q.js";import"./Close-RsD_fZZb.js";import"./LinearProgress-Mece69bc.js";import"./Spinner-BavJBSMY.js";import"./Dialog-fVAw2gXQ.js";import"./MapToggleButtonPresentational-D2nbVQJ2.js";import"./Remove-Ce-CPNlR.js";import"./TextField-C0vtgENj.js";import"./Switch-RsyOZKzm.js";import"./DatePicker-Bb0Uj4Me.js";import"./LinkButton-CAT44kIY.js";import"./Paper-BuccSZQF.js";import"./ErrorFallback-DF0Z2ARP.js";import"./ErrorFallbackText-BWg9-CM5.js";import"./ErrorFallbackWrapper-LV7SVYTX.js";import"./Brand-DW-o0E9p.js";import"./constants-D8FrAGj1.js";import"./Edit-C55yYd-1.js";const T=r=>{var t;const[e=0,o=0,a=0,i=1]=((t=r.match(/[\d.]+/g))==null?void 0:t.map(Number))??[];return[e,o,a,i]},f=r=>{const[e,o,a,i]=T(r);if(i===0)return"transparent";const t=p=>Math.round(p).toString(16).padStart(2,"0").toUpperCase();return`#${t(e)}${t(o)}${t(a)}`},U=255,k=.03928,V=12.92,O=.055,P=1.055,W=2.4,$=.2126,j=.7152,X=.0722,q=r=>{const e=r/U;return e<=k?e/V:((e+O)/P)**W},E=r=>{const[e,o,a]=T(r),[i,t,p]=[e,o,a].map(q);return $*i+j*t+X*p},_=.05,z=(r,e)=>{const o=E(r),a=E(e),i=Math.max(o,a),t=Math.min(o,a);return(i+_)/(t+_)},J=r=>(Math.floor(r*100)/100).toFixed(2),C=[{variant:"primary",label:"Primary"},{variant:"secondary",label:"Secondary"},{variant:"tertiary",label:"Tertiary"}],c={fontFamily:"monospace"},K={transition:"none"},Q=({variant:r,label:e,themeName:o})=>{const a=H(),i=S.useRef(null),[t,p]=S.useState(null);return S.useEffect(()=>{const g=i.current;if(!g)return;p((()=>{const d=getComputedStyle(g);let u=g,b="";for(;u;){const v=getComputedStyle(u).backgroundColor;if(T(v)[3]!==0){b=v;break}u=u.parentElement}const M=d.borderTopStyle!=="none"&&d.borderTopWidth!=="0px";return{txt:f(d.color),bg:f(b),bd:M?f(d.borderTopColor):"None",ratio:z(d.color,b)}})())},[a]),m(l,{direction:"column",gap:2,sx:{minWidth:180},children:[n(w,{children:e}),m(l,{direction:"column",children:[m(s,{sx:c,children:["Txt ",(t==null?void 0:t.txt)??"—"]}),m(s,{sx:c,children:["BG ",(t==null?void 0:t.bg)??"—"]}),m(s,{sx:c,children:["BD ",(t==null?void 0:t.bd)??"—"]})]}),n(l,{direction:"row",children:n(A,{ref:i,variant:r,sx:K,children:"Label"})}),m(l,{direction:"column",children:[n(s,{sx:c,children:o}),n(s,{sx:c,children:t?`${J(t.ratio)}:1`:"—"}),n(s,{sx:c,children:t&&t.ratio>=4.5?"Pass AA":"Fail AA"}),n(s,{sx:c,children:t&&t.ratio>=7?"Pass AAA":"Fail AAA"})]})]})},Y=["Enabled","Hovered","Disabled","Focused"],Z={Enabled:"",Hovered:"state-hover",Disabled:"",Focused:"Mui-focusVisible"},tt=({variant:r,state:e})=>n(A,{variant:r,disabled:e==="Disabled",className:Z[e],startIcon:n("i",{className:"fa-solid fa-chevron-left"}),endIcon:n("i",{className:"fa-solid fa-chevron-right"}),children:"Label"}),ne={title:"Buttons/Button/Tables",component:A,parameters:{layout:"padded",...D("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6522-21508&m=dev")}},G={bgcolor:"background.default",color:"text.primary",p:4,width:"fit-content"},h={render:(r,{globals:e})=>n(l,{direction:"row",gap:6,sx:G,children:C.map(({variant:o,label:a})=>n(Q,{variant:o,label:a,themeName:e.theme},o))})},x={parameters:{pseudo:{hover:".state-hover"}},render:(r,{globals:e})=>m(l,{direction:"column",gap:3,sx:G,children:[n("div",{style:{display:"grid",gridTemplateColumns:"max-content repeat(3, max-content)",columnGap:24,rowGap:20,alignItems:"center"},children:Y.map(o=>m(I.Fragment,{children:[n(s,{children:o}),C.map(({variant:a})=>n(tt,{variant:a,state:o},a))]},o))}),n(s,{children:e.theme})]})};var R,y,B;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
