import{j as n,a as m,R as I,r as S}from"./iframe-DiOxHtDb.js";import{B as A}from"./DropdownButton-D5H4ZN6Z.js";import{a as l,u as H}from"./UserIcon-DdMLfs8b.js";import{T as s,a as w}from"./Text-lve70lr8.js";import"./Chip-ueCpo9tP.js";import"./Divider-BRU7MloR.js";import"./TreeView-BEBQjpEx.js";import"./Box-BgHTu-7g.js";import"./Container-KdOlOXUt.js";import{f as D}from"./figmaDesign-CKKXRVNK.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-D5iojeUJ.js";import"./useThemeProps-D92Ph84F.js";import"./useTheme-CVqTLjnG.js";import"./AdapterDayjs-Bw8jeCZr.js";import"./generateUtilityClass-BGBNebZi.js";import"./styled-BnW9PuXP.js";import"./Typography-DD85r3aG.js";import"./generateUtilityClasses-cqFKly7s.js";import"./Modal-D1jGZMpX.js";import"./utils-Cpn5Nc-9.js";import"./TransitionGroupContext-B0zfRRgr.js";import"./index-DV6lSy4S.js";import"./resolveComponentProps-DdsoJ6q3.js";import"./TextField-DJduElX5.js";import"./useFormControl-gW4Kn0M5.js";import"./Paper-DD8Uzrbd.js";import"./createSvgIcon-Bct_3USy.js";import"./createStyled-DJUAM10Y.js";import"./IconButton-BBPQ8wpR.js";import"./ButtonBase-Bf3wJpyF.js";import"./DialogContent-WZ5vlnc6.js";import"./Button-CBCE0jtS.js";import"./Chip-DxnlP6yz.js";import"./DateTimePicker-E72uzE7D.js";import"./Divider-BAZX2ZXo.js";import"./Box-Bw2aXqxB.js";import"./Stack-DMVCg2VL.js";import"./styled-CBtLOs7W.js";import"./Close-DyblsOO8.js";import"./LinearProgress-Ca-5RCUI.js";import"./Spinner-DBD_1EOk.js";import"./Dialog-CV47DXVk.js";import"./MapToggleButtonPresentational-CY2HZx6p.js";import"./Remove-BolgW9Tm.js";import"./TextField-CODSynKi.js";import"./Switch-BaPgqioG.js";import"./DatePicker-DvcNDPm0.js";import"./LinkButton-AP67oc2f.js";import"./Paper-CNPN9Zh5.js";import"./ErrorFallback-BmSWrFlV.js";import"./ErrorFallbackText-DVOaDD_c.js";import"./ErrorFallbackWrapper-BCV9v7sN.js";import"./Brand-ClGGejsO.js";import"./constants-BXamS6jK.js";import"./Edit-DgM3068Z.js";const T=r=>{var t;const[e=0,o=0,a=0,i=1]=((t=r.match(/[\d.]+/g))==null?void 0:t.map(Number))??[];return[e,o,a,i]},f=r=>{const[e,o,a,i]=T(r);if(i===0)return"transparent";const t=p=>Math.round(p).toString(16).padStart(2,"0").toUpperCase();return`#${t(e)}${t(o)}${t(a)}`},U=255,k=.03928,V=12.92,O=.055,P=1.055,W=2.4,$=.2126,j=.7152,X=.0722,q=r=>{const e=r/U;return e<=k?e/V:((e+O)/P)**W},E=r=>{const[e,o,a]=T(r),[i,t,p]=[e,o,a].map(q);return $*i+j*t+X*p},_=.05,z=(r,e)=>{const o=E(r),a=E(e),i=Math.max(o,a),t=Math.min(o,a);return(i+_)/(t+_)},J=r=>(Math.floor(r*100)/100).toFixed(2),C=[{variant:"primary",label:"Primary"},{variant:"secondary",label:"Secondary"},{variant:"tertiary",label:"Tertiary"}],c={fontFamily:"monospace"},K={transition:"none"},Q=({variant:r,label:e,themeName:o})=>{const a=H(),i=S.useRef(null),[t,p]=S.useState(null);return S.useEffect(()=>{const g=i.current;if(!g)return;p((()=>{const d=getComputedStyle(g);let u=g,b="";for(;u;){const v=getComputedStyle(u).backgroundColor;if(T(v)[3]!==0){b=v;break}u=u.parentElement}const M=d.borderTopStyle!=="none"&&d.borderTopWidth!=="0px";return{txt:f(d.color),bg:f(b),bd:M?f(d.borderTopColor):"None",ratio:z(d.color,b)}})())},[a]),m(l,{direction:"column",gap:2,sx:{minWidth:180},children:[n(w,{children:e}),m(l,{direction:"column",children:[m(s,{sx:c,children:["Txt ",(t==null?void 0:t.txt)??"—"]}),m(s,{sx:c,children:["BG ",(t==null?void 0:t.bg)??"—"]}),m(s,{sx:c,children:["BD ",(t==null?void 0:t.bd)??"—"]})]}),n(l,{direction:"row",children:n(A,{ref:i,variant:r,sx:K,children:"Label"})}),m(l,{direction:"column",children:[n(s,{sx:c,children:o}),n(s,{sx:c,children:t?`${J(t.ratio)}:1`:"—"}),n(s,{sx:c,children:t&&t.ratio>=4.5?"Pass AA":"Fail AA"}),n(s,{sx:c,children:t&&t.ratio>=7?"Pass AAA":"Fail AAA"})]})]})},Y=["Enabled","Hovered","Disabled","Focused"],Z={Enabled:"",Hovered:"state-hover",Disabled:"",Focused:"Mui-focusVisible"},tt=({variant:r,state:e})=>n(A,{variant:r,disabled:e==="Disabled",className:Z[e],startIcon:n("i",{className:"fa-solid fa-chevron-left"}),endIcon:n("i",{className:"fa-solid fa-chevron-right"}),children:"Label"}),ne={title:"Buttons/Button/Tables",component:A,parameters:{layout:"padded",...D("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6522-21508&m=dev")}},G={bgcolor:"background.default",color:"text.primary",p:4,width:"fit-content"},h={render:(r,{globals:e})=>n(l,{direction:"row",gap:6,sx:G,children:C.map(({variant:o,label:a})=>n(Q,{variant:o,label:a,themeName:e.theme},o))})},x={parameters:{pseudo:{hover:".state-hover"}},render:(r,{globals:e})=>m(l,{direction:"column",gap:3,sx:G,children:[n("div",{style:{display:"grid",gridTemplateColumns:"max-content repeat(3, max-content)",columnGap:24,rowGap:20,alignItems:"center"},children:Y.map(o=>m(I.Fragment,{children:[n(s,{children:o}),C.map(({variant:a})=>n(tt,{variant:a,state:o},a))]},o))}),n(s,{children:e.theme})]})};var R,y,B;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
