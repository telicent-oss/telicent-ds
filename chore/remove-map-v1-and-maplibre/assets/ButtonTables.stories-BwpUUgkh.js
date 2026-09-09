import{j as n,a as m,R as I,r as S}from"./iframe-BSHZoLH0.js";import{B as A}from"./DropdownButton-DJdqotpZ.js";import{u as H}from"./UserIcon-CHfoFH7k.js";import{F as l}from"./FlexBox-Cic89pYt.js";import{T as s,a as w}from"./Text-BTMH42VK.js";import"./Chip-BniXzfdZ.js";import"./Divider-BZJnezW1.js";import"./TreeView-CzzylW8x.js";import"./AppInfoRow-RkbytSj0.js";import"./Box-DF0XtrAi.js";import"./Container-DSzlElAn.js";import{f as D}from"./figmaDesign-CKKXRVNK.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-BiMA9qcn.js";import"./useThemeProps-D1mqY05e.js";import"./useTheme-wykRndr8.js";import"./AdapterDayjs-DtpCU4aK.js";import"./generateUtilityClass-93OEZURd.js";import"./styled-CmvYIxHZ.js";import"./Typography-B6wCg7xE.js";import"./generateUtilityClasses-Dmf-VZ7g.js";import"./Modal-BI0OjZNh.js";import"./utils-CEnASBxq.js";import"./TransitionGroupContext-bIsVkF__.js";import"./index-CfPnIGXk.js";import"./resolveComponentProps-DF06A6lx.js";import"./Popover-D9PrNx1G.js";import"./Paper-u2F4-x87.js";import"./TextField-D0AHhzbv.js";import"./useFormControl-CjQ9hJs3.js";import"./createSvgIcon-BAA291eo.js";import"./SvgIcon-DC5_2IrZ.js";import"./createStyled-CXLXU_b5.js";import"./IconButton-BH6roq5J.js";import"./ButtonBase-DmGCS8gm.js";import"./DialogContent-sjLbqYOm.js";import"./Button-BGj1rfsC.js";import"./Chip-40aXZDOw.js";import"./DateTimePicker-yuJZFQX_.js";import"./Divider-D09lGavG.js";import"./Box-Bi27dI0Y.js";import"./Stack-DL55RpSh.js";import"./styled-DpjO08Qt.js";import"./Alert-BrDYZj8C.js";import"./LinearProgress-Cgz4Xu1_.js";import"./Spinner-DYac5LQn.js";import"./Dialog-BeIaWLBv.js";import"./MapToggleButtonPresentational-D_VEx1TD.js";import"./Remove-Bso_SpPx.js";import"./LinkButton-DfD1itup.js";import"./TextField-D855Mpyf.js";import"./Switch-S5xN80Zo.js";import"./DatePicker-B_uUVeOn.js";import"./Paper-DYqddmBf.js";import"./ErrorFallback-DQXVOLvB.js";import"./ErrorFallbackText-DKNgRgr1.js";import"./ErrorFallbackWrapper-CVlp2bT8.js";import"./Brand-B-VTUx_1.js";import"./Edit-DszYU_yI.js";const T=r=>{var t;const[e=0,o=0,a=0,i=1]=((t=r.match(/[\d.]+/g))==null?void 0:t.map(Number))??[];return[e,o,a,i]},f=r=>{const[e,o,a,i]=T(r);if(i===0)return"transparent";const t=p=>Math.round(p).toString(16).padStart(2,"0").toUpperCase();return`#${t(e)}${t(o)}${t(a)}`},U=255,k=.03928,V=12.92,O=.055,P=1.055,W=2.4,$=.2126,j=.7152,X=.0722,q=r=>{const e=r/U;return e<=k?e/V:((e+O)/P)**W},E=r=>{const[e,o,a]=T(r),[i,t,p]=[e,o,a].map(q);return $*i+j*t+X*p},_=.05,z=(r,e)=>{const o=E(r),a=E(e),i=Math.max(o,a),t=Math.min(o,a);return(i+_)/(t+_)},J=r=>(Math.floor(r*100)/100).toFixed(2),C=[{variant:"primary",label:"Primary"},{variant:"secondary",label:"Secondary"},{variant:"tertiary",label:"Tertiary"}],c={fontFamily:"monospace"},K={transition:"none"},Q=({variant:r,label:e,themeName:o})=>{const a=H(),i=S.useRef(null),[t,p]=S.useState(null);return S.useEffect(()=>{const g=i.current;if(!g)return;p((()=>{const d=getComputedStyle(g);let u=g,b="";for(;u;){const v=getComputedStyle(u).backgroundColor;if(T(v)[3]!==0){b=v;break}u=u.parentElement}const M=d.borderTopStyle!=="none"&&d.borderTopWidth!=="0px";return{txt:f(d.color),bg:f(b),bd:M?f(d.borderTopColor):"None",ratio:z(d.color,b)}})())},[a]),m(l,{direction:"column",gap:2,sx:{minWidth:180},children:[n(w,{children:e}),m(l,{direction:"column",children:[m(s,{sx:c,children:["Txt ",(t==null?void 0:t.txt)??"—"]}),m(s,{sx:c,children:["BG ",(t==null?void 0:t.bg)??"—"]}),m(s,{sx:c,children:["BD ",(t==null?void 0:t.bd)??"—"]})]}),n(l,{direction:"row",children:n(A,{ref:i,variant:r,sx:K,children:"Label"})}),m(l,{direction:"column",children:[n(s,{sx:c,children:o}),n(s,{sx:c,children:t?`${J(t.ratio)}:1`:"—"}),n(s,{sx:c,children:t&&t.ratio>=4.5?"Pass AA":"Fail AA"}),n(s,{sx:c,children:t&&t.ratio>=7?"Pass AAA":"Fail AAA"})]})]})},Y=["Enabled","Hovered","Disabled","Focused"],Z={Enabled:"",Hovered:"state-hover",Disabled:"",Focused:"Mui-focusVisible"},tt=({variant:r,state:e})=>n(A,{variant:r,disabled:e==="Disabled",className:Z[e],startIcon:n("i",{className:"fa-solid fa-chevron-left"}),endIcon:n("i",{className:"fa-solid fa-chevron-right"}),children:"Label"}),se={title:"Buttons/Button/Tables",component:A,parameters:{layout:"padded",...D("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6522-21508&m=dev")}},G={bgcolor:"background.default",color:"text.primary",p:4,width:"fit-content"},h={render:(r,{globals:e})=>n(l,{direction:"row",gap:6,sx:G,children:C.map(({variant:o,label:a})=>n(Q,{variant:o,label:a,themeName:e.theme},o))})},x={parameters:{pseudo:{hover:".state-hover"}},render:(r,{globals:e})=>m(l,{direction:"column",gap:3,sx:G,children:[n("div",{style:{display:"grid",gridTemplateColumns:"max-content repeat(3, max-content)",columnGap:24,rowGap:20,alignItems:"center"},children:Y.map(o=>m(I.Fragment,{children:[n(s,{children:o}),C.map(({variant:a})=>n(tt,{variant:a,state:o},a))]},o))}),n(s,{children:e.theme})]})};var R,y,F;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
