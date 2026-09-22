import{a as n,b as m,R as I,r as S}from"./iframe-COFs_UtR.js";import{B as A}from"./DropdownButton-DdQkmJUC.js";import{u as H}from"./UserIcon-BFtUc4n_.js";import"./CogIcon-DOgitz6v.js";import"./InfoIcon-x18FY27k.js";import"./ThemeSwitchRow-D9BYjnUD.js";import{T as s,a as w}from"./Text-DRb1poC2.js";import"./Chip-A07BHzeG.js";import"./Divider-CZSVcPjF.js";import"./TreeView-m4trFAYo.js";import"./AppInfoRow-B60RiNSZ.js";import"./AppSettings-BOKLsdFo.js";import"./TableRow-sL2cRuc0.js";import"./Box-BEb_3Tji.js";import"./Container-D004PVc3.js";import{F as p}from"./FlexBox-CM3pIGUP.js";import{f as D}from"./figmaDesign-CKKXRVNK.js";import"./preload-helper-C1FmrZbK.js";import"./useTheme-Br9ekNhD.js";import"./AdapterDayjs-C5Ouz9-c.js";import"./index-CLjgFykj.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-DXI8L4mD.js";import"./extendSxProp-BfveVk5X.js";import"./useThemeProps-B3b-1bce.js";import"./useThemeProps-C1YLMFu1.js";import"./Typography-DDyWDEsv.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./Modal-D75gtkH-.js";import"./utils-CkqtT2AM.js";import"./TransitionGroupContext-DualJ8j1.js";import"./index-VPMfSmH7.js";import"./resolveComponentProps-HkkRA5J0.js";import"./Popover-B7jPgFGm.js";import"./Paper-B8rmAYsL.js";import"./TextField-CbdZofsN.js";import"./useFormControl-CMXAxTns.js";import"./FormControl-CYTfQVUB.js";import"./useControlled-D1cEG3pG.js";import"./createSvgIcon-C2hSwNby.js";import"./SvgIcon-Cu8kR4gr.js";import"./FormHelperText-pSG34NeB.js";import"./createStyled-btN_05Dm.js";import"./IconButton-CdDcys5a.js";import"./ButtonBase-CdL6rHd2.js";import"./DialogContent-Bg1OWUuV.js";import"./Button-zSX_KHde.js";import"./Chip-BvLE5o4D.js";import"./DateTimePicker-D_pIcGw1.js";import"./Divider-CEy0w4OC.js";import"./_IconPopover-DMMWxGzb.js";import"./Box-DSZohf0j.js";import"./Stack-Udab0hUQ.js";import"./styled-DsoO9eq7.js";import"./Alert-D-nOd5MK.js";import"./LinearProgress-CXvQl4fD.js";import"./Spinner-J2JsTlyl.js";import"./Dialog-Djic2CFV.js";import"./MapToggleButtonPresentational-DeY3mUq6.js";import"./Remove-CdEeIubw.js";import"./LinkButton-CKtknzFJ.js";import"./TextField-CzTYTlCu.js";import"./Switch-5JMBQZns.js";import"./LabeledSwitch-e4hrpLv0.js";import"./DatePicker-DSnxmH6o.js";import"./FormControl-CuWG66iZ.js";import"./FormHelperText-Dzx1WlCL.js";import"./Paper-D-Oim7GD.js";import"./ErrorFallback-TQb8da9R.js";import"./ErrorFallbackText-C8RcO45_.js";import"./ErrorFallbackWrapper-D42w-3GQ.js";import"./Brand-Bs80UuC1.js";import"./Edit-BOV9wVf0.js";const T=e=>{var t;const[r=0,o=0,a=0,i=1]=((t=e.match(/[\d.]+/g))==null?void 0:t.map(Number))??[];return[r,o,a,i]},f=e=>{const[r,o,a,i]=T(e);if(i===0)return"transparent";const t=l=>Math.round(l).toString(16).padStart(2,"0").toUpperCase();return`#${t(r)}${t(o)}${t(a)}`},U=255,k=.03928,V=12.92,O=.055,P=1.055,W=2.4,$=.2126,j=.7152,X=.0722,q=e=>{const r=e/U;return r<=k?r/V:((r+O)/P)**W},E=e=>{const[r,o,a]=T(e),[i,t,l]=[r,o,a].map(q);return $*i+j*t+X*l},_=.05,z=(e,r)=>{const o=E(e),a=E(r),i=Math.max(o,a),t=Math.min(o,a);return(i+_)/(t+_)},J=e=>(Math.floor(e*100)/100).toFixed(2),C=[{variant:"primary",label:"Primary"},{variant:"secondary",label:"Secondary"},{variant:"tertiary",label:"Tertiary"}],c={fontFamily:"monospace"},K={transition:"none"},Q=({variant:e,label:r,themeName:o})=>{const a=H(),i=S.useRef(null),[t,l]=S.useState(null);return S.useEffect(()=>{const g=i.current;if(!g)return;l((()=>{const d=getComputedStyle(g);let u=g,b="";for(;u;){const v=getComputedStyle(u).backgroundColor;if(T(v)[3]!==0){b=v;break}u=u.parentElement}const M=d.borderTopStyle!=="none"&&d.borderTopWidth!=="0px";return{txt:f(d.color),bg:f(b),bd:M?f(d.borderTopColor):"None",ratio:z(d.color,b)}})())},[a]),m(p,{direction:"column",gap:2,sx:{minWidth:180},children:[n(w,{children:r}),m(p,{direction:"column",children:[m(s,{sx:c,children:["Txt ",(t==null?void 0:t.txt)??"—"]}),m(s,{sx:c,children:["BG ",(t==null?void 0:t.bg)??"—"]}),m(s,{sx:c,children:["BD ",(t==null?void 0:t.bd)??"—"]})]}),n(p,{direction:"row",children:n(A,{ref:i,variant:e,sx:K,children:"Label"})}),m(p,{direction:"column",children:[n(s,{sx:c,children:o}),n(s,{sx:c,children:t?`${J(t.ratio)}:1`:"—"}),n(s,{sx:c,children:t&&t.ratio>=4.5?"Pass AA":"Fail AA"}),n(s,{sx:c,children:t&&t.ratio>=7?"Pass AAA":"Fail AAA"})]})]})},Y=["Enabled","Hovered","Disabled","Focused"],Z={Enabled:"",Hovered:"state-hover",Disabled:"",Focused:"Mui-focusVisible"},tt=({variant:e,state:r})=>n(A,{variant:e,disabled:r==="Disabled",className:Z[r],startIcon:n("i",{className:"fa-solid fa-chevron-left"}),endIcon:n("i",{className:"fa-solid fa-chevron-right"}),children:"Label"}),vr={title:"Buttons/Button/Tables",component:A,parameters:{layout:"padded",...D("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6522-21508&m=dev")}},G={bgcolor:"background.default",color:"text.primary",p:4,width:"fit-content"},h={render:(e,{globals:r})=>n(p,{direction:"row",gap:6,sx:G,children:C.map(({variant:o,label:a})=>n(Q,{variant:o,label:a,themeName:r.theme},o))})},x={parameters:{pseudo:{hover:".state-hover"}},render:(e,{globals:r})=>m(p,{direction:"column",gap:3,sx:G,children:[n("div",{style:{display:"grid",gridTemplateColumns:"max-content repeat(3, max-content)",columnGap:24,rowGap:20,alignItems:"center"},children:Y.map(o=>m(I.Fragment,{children:[n(s,{children:o}),C.map(({variant:a})=>n(tt,{variant:a,state:o},a))]},o))}),n(s,{children:r.theme})]})};var R,y,F;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
