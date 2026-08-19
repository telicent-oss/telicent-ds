import{j as n,a as m,R as I,r as S}from"./iframe-O7ZSOzH6.js";import{B as A}from"./DropdownButton-9IQM39iB.js";import{u as H}from"./UserIcon-CVW633Wu.js";import{F as l}from"./FlexBox-DE23WfsN.js";import{T as s,a as w}from"./Text-nRcHvf3o.js";import"./Chip-Bfi3CHWH.js";import"./Divider-CjbOd_kj.js";import"./TreeView-BB5-CSqu.js";import"./AppInfoRow-0HJaNGZZ.js";import"./Box-CGifCS97.js";import"./Container-Cnxb2MGW.js";import{f as D}from"./figmaDesign-CKKXRVNK.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-DiSzJ5RC.js";import"./useThemeProps-CHVM-BV5.js";import"./useTheme-CyHOJq73.js";import"./AdapterDayjs-B5AjoP0Q.js";import"./generateUtilityClass-CaBvuMTH.js";import"./styled-DIoSYlWj.js";import"./Typography-ClJj-jBK.js";import"./generateUtilityClasses-Ck-qx9fV.js";import"./Modal-9ChNdpfT.js";import"./utils-SoSev3en.js";import"./TransitionGroupContext-B7rwdiyI.js";import"./index-5Y2jY6OW.js";import"./resolveComponentProps-BETcHjWA.js";import"./Popover-BKe0lZr-.js";import"./Paper-Dr6YfsOz.js";import"./TextField-BbFA9wlk.js";import"./useFormControl-Cg-wtjlR.js";import"./createSvgIcon-RHoLritL.js";import"./SvgIcon-C9V7Ug2C.js";import"./createStyled-CVG07lMp.js";import"./IconButton-B8s4GQ3S.js";import"./ButtonBase-BU7A4vUM.js";import"./DialogContent-DqMmuBKo.js";import"./Button-0ICa7MST.js";import"./Chip-VOgUgKU3.js";import"./DateTimePicker-D-qf43pp.js";import"./Divider-CF1tXDob.js";import"./Box-Bh48kC-V.js";import"./Stack-BrwT5Je_.js";import"./styled-CkMq9Go9.js";import"./Alert-Djh-wYbn.js";import"./LinearProgress-CFUTsEE5.js";import"./Spinner-C_yQLXLp.js";import"./Dialog-WoMp7Hm5.js";import"./MapToggleButtonPresentational-BtoIJ6fP.js";import"./Remove-DOKjbcKs.js";import"./LinkButton-BBnTv_j7.js";import"./TextField-as-GdJ4B.js";import"./Switch-BpeAZxQ1.js";import"./DatePicker-B_n7IfRI.js";import"./Paper-BhX0sOWI.js";import"./ErrorFallback-CLGQlz6c.js";import"./ErrorFallbackText-Dz979o06.js";import"./ErrorFallbackWrapper-BWOXKjAC.js";import"./Brand-uV7cUGM3.js";import"./constants-B5xQjWnv.js";import"./Edit-BerfezYI.js";const T=r=>{var t;const[e=0,o=0,a=0,i=1]=((t=r.match(/[\d.]+/g))==null?void 0:t.map(Number))??[];return[e,o,a,i]},f=r=>{const[e,o,a,i]=T(r);if(i===0)return"transparent";const t=p=>Math.round(p).toString(16).padStart(2,"0").toUpperCase();return`#${t(e)}${t(o)}${t(a)}`},U=255,k=.03928,V=12.92,O=.055,P=1.055,W=2.4,$=.2126,j=.7152,X=.0722,q=r=>{const e=r/U;return e<=k?e/V:((e+O)/P)**W},E=r=>{const[e,o,a]=T(r),[i,t,p]=[e,o,a].map(q);return $*i+j*t+X*p},_=.05,z=(r,e)=>{const o=E(r),a=E(e),i=Math.max(o,a),t=Math.min(o,a);return(i+_)/(t+_)},J=r=>(Math.floor(r*100)/100).toFixed(2),C=[{variant:"primary",label:"Primary"},{variant:"secondary",label:"Secondary"},{variant:"tertiary",label:"Tertiary"}],c={fontFamily:"monospace"},K={transition:"none"},Q=({variant:r,label:e,themeName:o})=>{const a=H(),i=S.useRef(null),[t,p]=S.useState(null);return S.useEffect(()=>{const g=i.current;if(!g)return;p((()=>{const d=getComputedStyle(g);let u=g,b="";for(;u;){const v=getComputedStyle(u).backgroundColor;if(T(v)[3]!==0){b=v;break}u=u.parentElement}const M=d.borderTopStyle!=="none"&&d.borderTopWidth!=="0px";return{txt:f(d.color),bg:f(b),bd:M?f(d.borderTopColor):"None",ratio:z(d.color,b)}})())},[a]),m(l,{direction:"column",gap:2,sx:{minWidth:180},children:[n(w,{children:e}),m(l,{direction:"column",children:[m(s,{sx:c,children:["Txt ",(t==null?void 0:t.txt)??"—"]}),m(s,{sx:c,children:["BG ",(t==null?void 0:t.bg)??"—"]}),m(s,{sx:c,children:["BD ",(t==null?void 0:t.bd)??"—"]})]}),n(l,{direction:"row",children:n(A,{ref:i,variant:r,sx:K,children:"Label"})}),m(l,{direction:"column",children:[n(s,{sx:c,children:o}),n(s,{sx:c,children:t?`${J(t.ratio)}:1`:"—"}),n(s,{sx:c,children:t&&t.ratio>=4.5?"Pass AA":"Fail AA"}),n(s,{sx:c,children:t&&t.ratio>=7?"Pass AAA":"Fail AAA"})]})]})},Y=["Enabled","Hovered","Disabled","Focused"],Z={Enabled:"",Hovered:"state-hover",Disabled:"",Focused:"Mui-focusVisible"},tt=({variant:r,state:e})=>n(A,{variant:r,disabled:e==="Disabled",className:Z[e],startIcon:n("i",{className:"fa-solid fa-chevron-left"}),endIcon:n("i",{className:"fa-solid fa-chevron-right"}),children:"Label"}),me={title:"Buttons/Button/Tables",component:A,parameters:{layout:"padded",...D("https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6522-21508&m=dev")}},G={bgcolor:"background.default",color:"text.primary",p:4,width:"fit-content"},h={render:(r,{globals:e})=>n(l,{direction:"row",gap:6,sx:G,children:C.map(({variant:o,label:a})=>n(Q,{variant:o,label:a,themeName:e.theme},o))})},x={parameters:{pseudo:{hover:".state-hover"}},render:(r,{globals:e})=>m(l,{direction:"column",gap:3,sx:G,children:[n("div",{style:{display:"grid",gridTemplateColumns:"max-content repeat(3, max-content)",columnGap:24,rowGap:20,alignItems:"center"},children:Y.map(o=>m(I.Fragment,{children:[n(s,{children:o}),C.map(({variant:a})=>n(tt,{variant:a,state:o},a))]},o))}),n(s,{children:e.theme})]})};var R,y,F;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
