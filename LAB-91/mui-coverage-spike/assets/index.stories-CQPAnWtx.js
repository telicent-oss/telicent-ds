import{c as V,j as r,r as U,a as s,R as b}from"./iframe-DMZf_z8l.js";import{B as P,C as N,d as Z,e as $,D as q,f as J,F as K,G as Q,c as Y,M as rr,g as er,P as or,T as tr,h as nr,U as ir,W as ar,X as sr}from"./UserIcon-SIxwbRaI.js";import{I as cr}from"./FlexBox-42gcoNNl.js";import{L as H}from"./List-ByxOU1dG.js";import{L as X}from"./LocationOn-CWlv_jit.js";import{A as lr}from"./Add-Bzr7-5Ld.js";import{C as pr}from"./Check-3ROHyN9a.js";import{C as dr}from"./ChevronLeft-CMHtZjbI.js";import{C as mr}from"./ChevronRight-BjMsaI6L.js";import{C as hr}from"./Clear-Cvbs0Gum.js";import{E as ur}from"./Edit-GjaUQlMR.js";import{E as gr}from"./ExpandLess-DdUHHzsP.js";import{R as fr}from"./Remove-DYY9Hxbq.js";import{c as xr}from"./createSvgIcon-Co9Y2kA5.js";import{e as z}from"./Text-Cw4L7dSm.js";import{B as i}from"./Box-XIzbJh1C.js";import{T as n}from"./Typography-Dihg_BSw.js";import{T as br}from"./TextField-DbBZeym1.js";import"./preload-helper-C1FmrZbK.js";import"./SvgIcon-BA9ju1Sa.js";import"./generateUtilityClass-CywfVb3a.js";import"./styled-BhjXjSTi.js";import"./generateUtilityClasses-E8kj8mkK.js";import"./useTheme-R582sJ1x.js";import"./Box-CZZMQHlF.js";import"./Container-DKvrksMk.js";import"./styled-D0RxRnUW.js";import"./createStyled-CZZlTSAv.js";import"./useThemeProps-DjMRGlTh.js";import"./Grid-BUuOKd8_.js";import"./Stack-Dzo5snOq.js";import"./Paper-CgwysQMM.js";import"./OutlinedInput-BqYOAriL.js";import"./useFormControl-CLapPuwA.js";import"./formControlState-Dq1zat_P.js";import"./utils-iop7lDec.js";import"./useForkRef-grDcQant.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useEventCallback-DqnP5vMh.js";import"./debounce-Be36O1Ab.js";import"./isHostComponent-DVu5iVWx.js";import"./InputLabel-DqK5hWZ7.js";import"./FormLabel-0VaPPqSV.js";import"./isMuiElement-f6_SH4MB.js";import"./Select-tvRzVfej.js";import"./Menu-BX3hMchn.js";import"./useSlotProps-ByV-l5Lc.js";import"./resolveComponentProps-C_N5TE1Z.js";import"./Popover-Dbs3k9sg.js";import"./Grow-C_uUqB-c.js";import"./utils-BLLjmJWZ.js";import"./TransitionGroupContext-DfY19jQi.js";import"./index-DUICm0b5.js";import"./useTimeout-Dp-kS1kI.js";import"./getReactElementRef-Buh25I8b.js";import"./Modal-B7xKpwtI.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-C8VZQ10h.js";import"./Backdrop-CealCOy_.js";import"./Fade-DBDG-Qkn.js";import"./List-C2H71DQf.js";import"./useControlled-DmhfUatr.js";import"./FormHelperText-CB2VvU6y.js";const yr=xr(V.jsx("path",{d:"M22 6h-6V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H2v15h20zm-8 0h-4V4h4z"}),"WorkSharp"),y=Object.freeze(Object.defineProperty({__proto__:null,Add:lr,Check:pr,ChevronLeft:dr,ChevronRight:mr,Clear:hr,Edit:ur,ExpandLess:gr,List:H,LocationOn:X,Remove:fr,WorkSharp:yr},Symbol.toStringTag,{value:"Module"})),S=Object.freeze(Object.defineProperty({__proto__:null,BinIcon:P,CloseIcon:N,CogIcon:Z,DataServiceIcon:$,DataSetIcon:q,DragHandleIcon:J,FloppyDiskIcon:K,GridIcon:Q,InfoIcon:cr,ListIcon:H,LocationOnIcon:X,MapIcon:Y,MinusCircleIcon:rr,PlayIcon:er,PlusCircleIcon:or,TelicentHorizontalSVG:tr,TelicentMark:nr,UserIcon:ir,WarningIcon:ar,XIcon:sr},Symbol.toStringTag,{value:"Module"})),I={surface:"transparent",light:"#ffffff",dark:"#111111"},w=e=>r(i,{sx:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(120px, 1fr))",gap:2,p:2,textAlign:"center"},...e}),M=({name:e,children:o})=>s(i,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:1,p:1,borderRadius:1,border:"1px solid",borderColor:"divider"},children:[o,r(n,{variant:"caption",children:e})]}),T=(e,o)=>U.useMemo(()=>{const a=Object.entries(e);if(!o)return a;const t=o.toLowerCase();return a.filter(([c])=>c.toLowerCase().includes(t))},[e,o]),Sr=({color:e,fontSize:o,background:a,filter:t})=>{const[c,l]=U.useState(t??""),v=T(S,c),C=T(y,c),k={color:e,fontSize:o};return s(i,{sx:{bgcolor:I[a],color:a==="dark"?"common.white":"text.primary",p:2,borderRadius:1},children:[r(br,{size:"small",placeholder:"Filter icons by name…",value:c,onChange:p=>l(p.target.value),sx:{mb:2,width:260}}),r(z,{children:"./v1/components/data-display/Icons/*"}),v.length===0?r(n,{variant:"body2",sx:{px:2,opacity:.6},children:"No matches."}):r(w,{children:v.map(([p,g])=>r(M,{name:p,children:r(g,{...k})},p))}),r(z,{children:"@telicent-oss/mui-icons-material"}),C.length===0?r(n,{variant:"body2",sx:{px:2,opacity:.6},children:"No matches."}):r(w,{children:C.map(([p,g])=>r(M,{name:p,children:r(g,{...k})},p))})]})},Be={title:"Data Display/Icons",component:Sr,tags:["autodocs"],parameters:{docs:{description:{component:"Gallery of all icon exports from this package. Use the controls to inspect icons at different colors, sizes, and backgrounds — useful for catching icons with hard-coded fills or strokes that don't adapt to `color`."}}},argTypes:{color:{control:"select",options:["inherit","action","disabled","primary","secondary","error","info","success","warning"]},fontSize:{control:"select",options:["inherit","small","medium","large"]},background:{control:"inline-radio",options:["surface","light","dark"]},filter:{control:"text"}},args:{color:"inherit",fontSize:"large",background:"surface",filter:""}},d={name:"All Icons"},f=["inherit","primary","secondary","error","warning","success","info"],Ir=({fontSize:e,background:o})=>{const a=Object.entries({...S,...y});return r(i,{sx:{bgcolor:I[o],color:o==="dark"?"common.white":"text.primary",p:2,borderRadius:1,overflowX:"auto"},children:s(i,{sx:{display:"grid",gridTemplateColumns:`160px repeat(${f.length}, 1fr)`,columnGap:2,rowGap:1,alignItems:"center"},children:[r(n,{variant:"caption",sx:{fontWeight:600},children:"Icon"}),f.map(t=>r(n,{variant:"caption",sx:{fontWeight:600,textAlign:"center"},children:t},t)),a.map(([t,c])=>s(b.Fragment,{children:[r(n,{variant:"caption",children:t}),f.map(l=>r(i,{sx:{textAlign:"center"},children:r(c,{color:l,fontSize:e})},l))]},t))]})})},m={name:"Color Matrix",args:{fontSize:"large",background:"surface"},argTypes:{color:{table:{disable:!0}},filter:{table:{disable:!0}}},render:({fontSize:e,background:o})=>r(Ir,{fontSize:e,background:o}),parameters:{docs:{description:{story:"Every icon rendered across each semantic MUI color. Any icon that looks wrong in `error` (red) or `warning` likely has a hard-coded `fill` or `stroke` value that should be `currentColor`."}}}},x=["inherit","small","medium","large"],vr={inherit:"1em (inherits parent font-size)",small:"20px",medium:"24px",large:"35px"},Cr=({color:e,background:o})=>{const a=Object.entries({...S,...y});return r(i,{sx:{bgcolor:I[o],color:o==="dark"?"common.white":"text.primary",p:2,borderRadius:1,overflowX:"auto"},children:s(i,{sx:{display:"grid",gridTemplateColumns:`160px repeat(${x.length}, 1fr)`,columnGap:2,rowGap:1,alignItems:"center"},children:[r(n,{variant:"caption",sx:{fontWeight:600},children:"Icon"}),x.map(t=>s(i,{sx:{textAlign:"center"},children:[r(n,{variant:"caption",sx:{fontWeight:600,display:"block"},children:t}),r(n,{variant:"caption",sx:{opacity:.6},children:vr[t]})]},t)),a.map(([t,c])=>s(b.Fragment,{children:[r(n,{variant:"caption",children:t}),x.map(l=>r(i,{sx:{textAlign:"center"},children:r(c,{color:e,fontSize:l})},l))]},t))]})})},h={name:"Size Matrix",args:{color:"inherit",background:"surface"},argTypes:{fontSize:{table:{disable:!0}},filter:{table:{disable:!0}}},render:({color:e,background:o})=>r(Cr,{color:e,background:o}),parameters:{docs:{description:{story:'Every icon rendered at each MUI `fontSize` token (`inherit`, `small`, `medium`, `large`). Use `fontSize="inherit"` to have the icon scale with the surrounding text.'}}}},kr=[{label:"Default (currentColor)",snippet:"<BinIcon />",render:e=>r(e,{})},{label:"Theme color prop",snippet:'<BinIcon color="primary" />',render:e=>r(e,{color:"primary"})},{label:"sx (theme token)",snippet:"<BinIcon sx={{ color: 'success.main' }} />",render:e=>r(e,{sx:{color:"success.main"}})},{label:"sx (custom hex)",snippet:"<BinIcon sx={{ color: '#ff5722' }} />",render:e=>r(e,{sx:{color:"#ff5722"}})},{label:"htmlColor (fixed, ignores theme)",snippet:'<BinIcon htmlColor="#9c27b0" />',render:e=>r(e,{htmlColor:"#9c27b0"})},{label:"Inherit from parent",snippet:`<Box sx={{ color: "warning.main" }}>
  <BinIcon color="inherit" />
</Box>`,render:e=>r(i,{sx:{color:"warning.main"},children:r(e,{color:"inherit"})})}],zr=()=>{const e=P;return s(i,{sx:{p:2},children:[s(n,{variant:"body2",sx:{mb:2,opacity:.75},children:["All Telicent DS icons use ",r("code",{children:"currentColor"}),", so they inherit their parent's ",r("code",{children:"color"}),". Below are the standard ways to override that — pick whichever suits your context."]}),s(i,{sx:{display:"grid",gridTemplateColumns:"auto 1fr auto",columnGap:3,rowGap:2,alignItems:"center"},children:[r(n,{variant:"caption",sx:{fontWeight:600},children:"Approach"}),r(n,{variant:"caption",sx:{fontWeight:600},children:"Snippet"}),r(n,{variant:"caption",sx:{fontWeight:600},children:"Result"}),kr.map(({label:o,snippet:a,render:t})=>s(b.Fragment,{children:[r(n,{variant:"body2",children:o}),r(i,{component:"pre",sx:{m:0,p:1,borderRadius:.5,bgcolor:"action.hover",fontSize:"0.75rem",fontFamily:"monospace",whiteSpace:"pre-wrap"},children:a}),r(i,{sx:{display:"flex",justifyContent:"center",fontSize:35},children:t(e)})]},o))]})]})},u={name:"Color Overrides",argTypes:{color:{table:{disable:!0}},fontSize:{table:{disable:!0}},background:{table:{disable:!0}},filter:{table:{disable:!0}}},render:()=>r(zr,{}),parameters:{docs:{description:{story:'Recipes for overriding an icon\'s color: the `color` prop (theme palette), `sx` (theme tokens or arbitrary CSS colors), `htmlColor` (fixed, ignores the theme), or by setting `color` on a parent and using `color="inherit"`.'}}}};var E,O,A;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "All Icons"
}`,...(A=(O=d.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var R,L,W;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Color Matrix",
  args: {
    fontSize: "large",
    background: "surface"
  },
  argTypes: {
    color: {
      table: {
        disable: true
      }
    },
    filter: {
      table: {
        disable: true
      }
    }
  },
  render: ({
    fontSize,
    background
  }) => <ColorMatrix fontSize={fontSize} background={background} />,
  parameters: {
    docs: {
      description: {
        story: "Every icon rendered across each semantic MUI color. Any icon that looks wrong in \`error\` (red) or \`warning\` likely has a hard-coded \`fill\` or \`stroke\` value that should be \`currentColor\`."
      }
    }
  }
}`,...(W=(L=m.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var _,B,j;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Size Matrix",
  args: {
    color: "inherit",
    background: "surface"
  },
  argTypes: {
    fontSize: {
      table: {
        disable: true
      }
    },
    filter: {
      table: {
        disable: true
      }
    }
  },
  render: ({
    color,
    background
  }) => <SizeMatrix color={color} background={background} />,
  parameters: {
    docs: {
      description: {
        story: "Every icon rendered at each MUI \`fontSize\` token (\`inherit\`, \`small\`, \`medium\`, \`large\`). Use \`fontSize=\\"inherit\\"\` to have the icon scale with the surrounding text."
      }
    }
  }
}`,...(j=(B=h.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var G,D,F;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Color Overrides",
  argTypes: {
    color: {
      table: {
        disable: true
      }
    },
    fontSize: {
      table: {
        disable: true
      }
    },
    background: {
      table: {
        disable: true
      }
    },
    filter: {
      table: {
        disable: true
      }
    }
  },
  render: () => <ColorOverrides />,
  parameters: {
    docs: {
      description: {
        story: "Recipes for overriding an icon's color: the \`color\` prop (theme palette), \`sx\` (theme tokens or arbitrary CSS colors), \`htmlColor\` (fixed, ignores the theme), or by setting \`color\` on a parent and using \`color=\\"inherit\\"\`."
      }
    }
  }
}`,...(F=(D=u.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const je=["AllIcons","ColorMatrixStory","SizeMatrixStory","ColorOverridesStory"];export{d as AllIcons,m as ColorMatrixStory,u as ColorOverridesStory,h as SizeMatrixStory,je as __namedExportsOrder,Be as default};
