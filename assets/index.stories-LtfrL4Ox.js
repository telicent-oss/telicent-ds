import{j as b,a as r,r as H,b as s,R as y}from"./iframe-B8Ndjgs7.js";import{B as X,C as $,d as q,D as J,e as K,E as Y,F as rr,G as er,M as or,a as nr,f as tr,P as ir,Q as ar,T as sr,g as cr,U as lr,W as dr,X as pr}from"./ExpandLessIcon-XoRe2dIW.js";import{C as mr}from"./CogIcon-Cx2nuXV6.js";import{I as hr}from"./InfoIcon-z080ie21.js";import{E as ur}from"./ExpandMoreIcon-C-7YScuE.js";import{C as gr,a as V,b as N,c as fr,E as xr}from"./Edit-L48O_6R-.js";import{A as br,L as Q,R as yr}from"./Remove-DLztY2SR.js";import{c as I}from"./createSvgIcon-CGOjPHBt.js";import{e as w}from"./Text-B8d64O_Y.js";import{B as i}from"./Box-DWlntqlD.js";import{T as t}from"./Typography-s2ICI44X.js";import{T as Ir}from"./TextField-BTz-o-Kc.js";import"./preload-helper-Dp1pzeXC.js";import"./SvgIcon-C47WU1LB.js";import"./clsx-B-dksMZM.js";import"./styled-CtcE8cKO.js";import"./extendSxProp-21VtOiYW.js";import"./composeClasses-fLhin0tj.js";import"./Box-tid9eA9-.js";import"./Container-BIyIkFdg.js";import"./styled-BYZRNKV0.js";import"./createStyled-wNLCiFTP.js";import"./useThemeProps-CLApfop_.js";import"./FlexBox-Dm4YTDCC.js";import"./Stack-rvIPxQ-d.js";import"./Paper-rbZdw6s-.js";import"./useFormControl-BjXCnS6h.js";import"./FormControl-3TJEEoeT.js";import"./TransitionGroupContext-DZHet8-E.js";import"./Modal-Ct6w46wj.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-utvTJYfY.js";import"./useSlotProps-AhVjQ7Gk.js";import"./index-BtgTVimu.js";import"./index-BbzF8qOu.js";import"./utils-DYAAZsgJ.js";import"./Popover-CCtwc_z-.js";import"./ListContext-BrZ-GaYK.js";import"./useControlled-mY01Zfpb.js";import"./FormHelperText-DpwVaweK.js";const Sr=I(b.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess"),Z=I(b.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"LocationOn"),vr=I(b.jsx("path",{d:"M22 6h-6V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H2v15h20zm-8 0h-4V4h4z"}),"WorkSharp"),S=Object.freeze(Object.defineProperty({__proto__:null,Add:br,Check:gr,ChevronLeft:V,ChevronRight:N,Clear:fr,Edit:xr,ExpandLess:Sr,List:Q,LocationOn:Z,Remove:yr,WorkSharp:vr},Symbol.toStringTag,{value:"Module"})),v=Object.freeze(Object.defineProperty({__proto__:null,BinIcon:X,ChevronLeftIcon:V,ChevronRightIcon:N,CloseIcon:$,CogIcon:mr,DataServiceIcon:q,DataSetIcon:J,DragHandleIcon:K,ExpandLessIcon:Y,ExpandMoreIcon:ur,FloppyDiskIcon:rr,GridIcon:er,InfoIcon:hr,ListIcon:Q,LocationOnIcon:Z,MapIcon:or,MinusCircleIcon:nr,PlayIcon:tr,PlusCircleIcon:ir,QuestionIcon:ar,TelicentHorizontalSVG:sr,TelicentMark:cr,UserIcon:lr,WarningIcon:dr,XIcon:pr},Symbol.toStringTag,{value:"Module"})),C={surface:"transparent",light:"#ffffff",dark:"#111111"},E=e=>r(i,{sx:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(120px, 1fr))",gap:2,p:2,textAlign:"center"},...e}),T=({name:e,children:o})=>s(i,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:1,p:1,borderRadius:1,border:"1px solid",borderColor:"divider"},children:[o,r(t,{variant:"caption",children:e})]}),O=(e,o)=>H.useMemo(()=>{const a=Object.entries(e);if(!o)return a;const n=o.toLowerCase();return a.filter(([c])=>c.toLowerCase().includes(n))},[e,o]),Cr=({color:e,fontSize:o,background:a,filter:n})=>{const[c,l]=H.useState(n??""),k=O(v,c),z=O(S,c),M={color:e,fontSize:o};return s(i,{sx:{bgcolor:C[a],color:a==="dark"?"common.white":"text.primary",p:2,borderRadius:1},children:[r(Ir,{size:"small",placeholder:"Filter icons by name…",value:c,onChange:d=>l(d.target.value),sx:{mb:2,width:260}}),r(w,{children:"./v1/components/data-display/Icons/*"}),k.length===0?r(t,{variant:"body2",sx:{px:2,opacity:.6},children:"No matches."}):r(E,{children:k.map(([d,g])=>r(T,{name:d,children:r(g,{...M})},d))}),r(w,{children:"@telicent-oss/mui-icons-material"}),z.length===0?r(t,{variant:"body2",sx:{px:2,opacity:.6},children:"No matches."}):r(E,{children:z.map(([d,g])=>r(T,{name:d,children:r(g,{...M})},d))})]})},fe={title:"Data Display/Icons",component:Cr,tags:["autodocs"],parameters:{docs:{description:{component:"Gallery of all icon exports from this package. Use the controls to inspect icons at different colors, sizes, and backgrounds — useful for catching icons with hard-coded fills or strokes that don't adapt to `color`."}}},argTypes:{color:{control:"select",options:["inherit","action","disabled","primary","secondary","error","info","success","warning"]},fontSize:{control:"select",options:["inherit","small","medium","large"]},background:{control:"inline-radio",options:["surface","light","dark"]},filter:{control:"text"}},args:{color:"inherit",fontSize:"large",background:"surface",filter:""}},p={name:"All Icons"},f=["inherit","primary","secondary","error","warning","success","info"],kr=({fontSize:e,background:o})=>{const a=Object.entries({...v,...S});return r(i,{sx:{bgcolor:C[o],color:o==="dark"?"common.white":"text.primary",p:2,borderRadius:1,overflowX:"auto"},children:s(i,{sx:{display:"grid",gridTemplateColumns:`160px repeat(${f.length}, 1fr)`,columnGap:2,rowGap:1,alignItems:"center"},children:[r(t,{variant:"caption",sx:{fontWeight:600},children:"Icon"}),f.map(n=>r(t,{variant:"caption",sx:{fontWeight:600,textAlign:"center"},children:n},n)),a.map(([n,c])=>s(y.Fragment,{children:[r(t,{variant:"caption",children:n}),f.map(l=>r(i,{sx:{textAlign:"center"},children:r(c,{color:l,fontSize:e})},l))]},n))]})})},m={name:"Color Matrix",args:{fontSize:"large",background:"surface"},argTypes:{color:{table:{disable:!0}},filter:{table:{disable:!0}}},render:({fontSize:e,background:o})=>r(kr,{fontSize:e,background:o}),parameters:{docs:{description:{story:"Every icon rendered across each semantic MUI color. Any icon that looks wrong in `error` (red) or `warning` likely has a hard-coded `fill` or `stroke` value that should be `currentColor`."}}}},x=["inherit","small","medium","large"],zr={inherit:"1em (inherits parent font-size)",small:"20px",medium:"24px",large:"35px"},Mr=({color:e,background:o})=>{const a=Object.entries({...v,...S});return r(i,{sx:{bgcolor:C[o],color:o==="dark"?"common.white":"text.primary",p:2,borderRadius:1,overflowX:"auto"},children:s(i,{sx:{display:"grid",gridTemplateColumns:`160px repeat(${x.length}, 1fr)`,columnGap:2,rowGap:1,alignItems:"center"},children:[r(t,{variant:"caption",sx:{fontWeight:600},children:"Icon"}),x.map(n=>s(i,{sx:{textAlign:"center"},children:[r(t,{variant:"caption",sx:{fontWeight:600,display:"block"},children:n}),r(t,{variant:"caption",sx:{opacity:.6},children:zr[n]})]},n)),a.map(([n,c])=>s(y.Fragment,{children:[r(t,{variant:"caption",children:n}),x.map(l=>r(i,{sx:{textAlign:"center"},children:r(c,{color:e,fontSize:l})},l))]},n))]})})},h={name:"Size Matrix",args:{color:"inherit",background:"surface"},argTypes:{fontSize:{table:{disable:!0}},filter:{table:{disable:!0}}},render:({color:e,background:o})=>r(Mr,{color:e,background:o}),parameters:{docs:{description:{story:'Every icon rendered at each MUI `fontSize` token (`inherit`, `small`, `medium`, `large`). Use `fontSize="inherit"` to have the icon scale with the surrounding text.'}}}},wr=[{label:"Default (currentColor)",snippet:"<BinIcon />",render:e=>r(e,{})},{label:"Theme color prop",snippet:'<BinIcon color="primary" />',render:e=>r(e,{color:"primary"})},{label:"sx (theme token)",snippet:"<BinIcon sx={{ color: 'success.main' }} />",render:e=>r(e,{sx:{color:"success.main"}})},{label:"sx (custom hex)",snippet:"<BinIcon sx={{ color: '#ff5722' }} />",render:e=>r(e,{sx:{color:"#ff5722"}})},{label:"htmlColor (fixed, ignores theme)",snippet:'<BinIcon htmlColor="#9c27b0" />',render:e=>r(e,{htmlColor:"#9c27b0"})},{label:"Inherit from parent",snippet:`<Box sx={{ color: "warning.main" }}>
  <BinIcon color="inherit" />
</Box>`,render:e=>r(i,{sx:{color:"warning.main"},children:r(e,{color:"inherit"})})}],Er=()=>{const e=X;return s(i,{sx:{p:2},children:[s(t,{variant:"body2",sx:{mb:2,opacity:.75},children:["All Telicent DS icons use ",r("code",{children:"currentColor"}),", so they inherit their parent's ",r("code",{children:"color"}),". Below are the standard ways to override that — pick whichever suits your context."]}),s(i,{sx:{display:"grid",gridTemplateColumns:"auto 1fr auto",columnGap:3,rowGap:2,alignItems:"center"},children:[r(t,{variant:"caption",sx:{fontWeight:600},children:"Approach"}),r(t,{variant:"caption",sx:{fontWeight:600},children:"Snippet"}),r(t,{variant:"caption",sx:{fontWeight:600},children:"Result"}),wr.map(({label:o,snippet:a,render:n})=>s(y.Fragment,{children:[r(t,{variant:"body2",children:o}),r(i,{component:"pre",sx:{m:0,p:1,borderRadius:.5,bgcolor:"action.hover",fontSize:"0.75rem",fontFamily:"monospace",whiteSpace:"pre-wrap"},children:a}),r(i,{sx:{display:"flex",justifyContent:"center",fontSize:35},children:n(e)})]},o))]})]})},u={name:"Color Overrides",argTypes:{color:{table:{disable:!0}},fontSize:{table:{disable:!0}},background:{table:{disable:!0}},filter:{table:{disable:!0}}},render:()=>r(Er,{}),parameters:{docs:{description:{story:'Recipes for overriding an icon\'s color: the `color` prop (theme palette), `sx` (theme tokens or arbitrary CSS colors), `htmlColor` (fixed, ignores the theme), or by setting `color` on a parent and using `color="inherit"`.'}}}},xe=["AllIcons","ColorMatrixStory","SizeMatrixStory","ColorOverridesStory"];var R,A,L;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "All Icons"
}`,...(L=(A=p.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var j,W,_;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(_=(W=m.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var B,G,D;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(D=(G=h.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};var F,U,P;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(P=(U=u.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};export{p as AllIcons,m as ColorMatrixStory,u as ColorOverridesStory,h as SizeMatrixStory,xe as __namedExportsOrder,fe as default};
