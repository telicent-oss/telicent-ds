import{z as b,j as e,r as H,a as s,R as y}from"./iframe-CakKu3tO.js";import{B as X,C as Z,d as $,D as q,e as J,F as K,G as Q,I as Y,M as ee,f as re,g as oe,P as ne,T as te,h as ae,U as ie,X as se}from"./UserIcon-BV3RYnBk.js";import{A as ce,L as V,R as le}from"./Remove-C87szEH0.js";import{c as I}from"./createSvgIcon-DzFzUuJj.js";import{C as de,a as pe,b as me,c as he,E as ue}from"./Edit-CmkU-7Bg.js";import{e as M}from"./Text-BpfdXhwS.js";import{B as a}from"./Box-Dqg2QVrM.js";import{T as t}from"./Typography-VZwDLLsu.js";import{T as ge}from"./TextField-Dz5pbBA4.js";import"./preload-helper-C1FmrZbK.js";import"./useTheme-CU3Z1LPN.js";import"./Box-CScMK_tz.js";import"./Container-qAOf7brY.js";import"./styled-D0i_6XAq.js";import"./generateUtilityClass-6Xw7P5Pk.js";import"./styled-Bc9giz0S.js";import"./createStyled-_kKMVs_z.js";import"./useThemeProps-CaBBmZ9W.js";import"./Stack-Bp4TNhTS.js";import"./generateUtilityClasses-CTZdcpcX.js";import"./Paper-DBfB9cOM.js";import"./useFormControl-BnXqfYXF.js";import"./TransitionGroupContext-B9U98U0r.js";import"./Modal-B3Wl13vZ.js";import"./utils-CGnDQcez.js";import"./index-Chjky9EM.js";import"./resolveComponentProps-iQz6eQKL.js";const fe=I(b.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess"),N=I(b.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"LocationOn"),xe=I(b.jsx("path",{d:"M22 6h-6V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H2v15h20zm-8 0h-4V4h4z"}),"WorkSharp"),S=Object.freeze(Object.defineProperty({__proto__:null,Add:ce,Check:de,ChevronLeft:pe,ChevronRight:me,Clear:he,Edit:ue,ExpandLess:fe,List:V,LocationOn:N,Remove:le,WorkSharp:xe},Symbol.toStringTag,{value:"Module"})),v=Object.freeze(Object.defineProperty({__proto__:null,BinIcon:X,CloseIcon:Z,DataServiceIcon:$,DataSetIcon:q,DragHandleIcon:J,FloppyDiskIcon:K,GridIcon:Q,InfoIcon:Y,ListIcon:V,LocationOnIcon:N,MapIcon:ee,MinusCircleIcon:re,PlayIcon:oe,PlusCircleIcon:ne,TelicentHorizontalSVG:te,TelicentMark:ae,UserIcon:ie,XIcon:se},Symbol.toStringTag,{value:"Module"})),C={surface:"transparent",light:"#ffffff",dark:"#111111"},T=r=>e(a,{sx:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(120px, 1fr))",gap:2,p:2,textAlign:"center"},...r}),O=({name:r,children:o})=>s(a,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:1,p:1,borderRadius:1,border:"1px solid",borderColor:"divider"},children:[o,e(t,{variant:"caption",children:r})]}),E=(r,o)=>H.useMemo(()=>{const i=Object.entries(r);if(!o)return i;const n=o.toLowerCase();return i.filter(([c])=>c.toLowerCase().includes(n))},[r,o]),be=({color:r,fontSize:o,background:i,filter:n})=>{const[c,l]=H.useState(n??""),k=E(v,c),z=E(S,c),w={color:r,fontSize:o};return s(a,{sx:{bgcolor:C[i],color:i==="dark"?"common.white":"text.primary",p:2,borderRadius:1},children:[e(ge,{size:"small",placeholder:"Filter icons by name…",value:c,onChange:d=>l(d.target.value),sx:{mb:2,width:260}}),e(M,{children:"./v1/components/data-display/Icons/*"}),k.length===0?e(t,{variant:"body2",sx:{px:2,opacity:.6},children:"No matches."}):e(T,{children:k.map(([d,g])=>e(O,{name:d,children:e(g,{...w})},d))}),e(M,{children:"@telicent-oss/mui-icons-material"}),z.length===0?e(t,{variant:"body2",sx:{px:2,opacity:.6},children:"No matches."}):e(T,{children:z.map(([d,g])=>e(O,{name:d,children:e(g,{...w})},d))})]})},Ke={title:"Data Display/Icons",component:be,tags:["autodocs"],parameters:{docs:{description:{component:"Gallery of all icon exports from this package. Use the controls to inspect icons at different colors, sizes, and backgrounds — useful for catching icons with hard-coded fills or strokes that don't adapt to `color`."}}},argTypes:{color:{control:"select",options:["inherit","action","disabled","primary","secondary","error","info","success","warning"]},fontSize:{control:"select",options:["inherit","small","medium","large"]},background:{control:"inline-radio",options:["surface","light","dark"]},filter:{control:"text"}},args:{color:"inherit",fontSize:"large",background:"surface",filter:""}},p={name:"All Icons"},f=["inherit","primary","secondary","error","warning","success","info"],ye=({fontSize:r,background:o})=>{const i=Object.entries({...v,...S});return e(a,{sx:{bgcolor:C[o],color:o==="dark"?"common.white":"text.primary",p:2,borderRadius:1,overflowX:"auto"},children:s(a,{sx:{display:"grid",gridTemplateColumns:`160px repeat(${f.length}, 1fr)`,columnGap:2,rowGap:1,alignItems:"center"},children:[e(t,{variant:"caption",sx:{fontWeight:600},children:"Icon"}),f.map(n=>e(t,{variant:"caption",sx:{fontWeight:600,textAlign:"center"},children:n},n)),i.map(([n,c])=>s(y.Fragment,{children:[e(t,{variant:"caption",children:n}),f.map(l=>e(a,{sx:{textAlign:"center"},children:e(c,{color:l,fontSize:r})},l))]},n))]})})},m={name:"Color Matrix",args:{fontSize:"large",background:"surface"},argTypes:{color:{table:{disable:!0}},filter:{table:{disable:!0}}},render:({fontSize:r,background:o})=>e(ye,{fontSize:r,background:o}),parameters:{docs:{description:{story:"Every icon rendered across each semantic MUI color. Any icon that looks wrong in `error` (red) or `warning` likely has a hard-coded `fill` or `stroke` value that should be `currentColor`."}}}},x=["inherit","small","medium","large"],Ie={inherit:"1em (inherits parent font-size)",small:"20px",medium:"24px",large:"35px"},Se=({color:r,background:o})=>{const i=Object.entries({...v,...S});return e(a,{sx:{bgcolor:C[o],color:o==="dark"?"common.white":"text.primary",p:2,borderRadius:1,overflowX:"auto"},children:s(a,{sx:{display:"grid",gridTemplateColumns:`160px repeat(${x.length}, 1fr)`,columnGap:2,rowGap:1,alignItems:"center"},children:[e(t,{variant:"caption",sx:{fontWeight:600},children:"Icon"}),x.map(n=>s(a,{sx:{textAlign:"center"},children:[e(t,{variant:"caption",sx:{fontWeight:600,display:"block"},children:n}),e(t,{variant:"caption",sx:{opacity:.6},children:Ie[n]})]},n)),i.map(([n,c])=>s(y.Fragment,{children:[e(t,{variant:"caption",children:n}),x.map(l=>e(a,{sx:{textAlign:"center"},children:e(c,{color:r,fontSize:l})},l))]},n))]})})},h={name:"Size Matrix",args:{color:"inherit",background:"surface"},argTypes:{fontSize:{table:{disable:!0}},filter:{table:{disable:!0}}},render:({color:r,background:o})=>e(Se,{color:r,background:o}),parameters:{docs:{description:{story:'Every icon rendered at each MUI `fontSize` token (`inherit`, `small`, `medium`, `large`). Use `fontSize="inherit"` to have the icon scale with the surrounding text.'}}}},ve=[{label:"Default (currentColor)",snippet:"<BinIcon />",render:r=>e(r,{})},{label:"Theme color prop",snippet:'<BinIcon color="primary" />',render:r=>e(r,{color:"primary"})},{label:"sx (theme token)",snippet:"<BinIcon sx={{ color: 'success.main' }} />",render:r=>e(r,{sx:{color:"success.main"}})},{label:"sx (custom hex)",snippet:"<BinIcon sx={{ color: '#ff5722' }} />",render:r=>e(r,{sx:{color:"#ff5722"}})},{label:"htmlColor (fixed, ignores theme)",snippet:'<BinIcon htmlColor="#9c27b0" />',render:r=>e(r,{htmlColor:"#9c27b0"})},{label:"Inherit from parent",snippet:`<Box sx={{ color: "warning.main" }}>
  <BinIcon color="inherit" />
</Box>`,render:r=>e(a,{sx:{color:"warning.main"},children:e(r,{color:"inherit"})})}],Ce=()=>{const r=X;return s(a,{sx:{p:2},children:[s(t,{variant:"body2",sx:{mb:2,opacity:.75},children:["All Telicent DS icons use ",e("code",{children:"currentColor"}),", so they inherit their parent's ",e("code",{children:"color"}),". Below are the standard ways to override that — pick whichever suits your context."]}),s(a,{sx:{display:"grid",gridTemplateColumns:"auto 1fr auto",columnGap:3,rowGap:2,alignItems:"center"},children:[e(t,{variant:"caption",sx:{fontWeight:600},children:"Approach"}),e(t,{variant:"caption",sx:{fontWeight:600},children:"Snippet"}),e(t,{variant:"caption",sx:{fontWeight:600},children:"Result"}),ve.map(({label:o,snippet:i,render:n})=>s(y.Fragment,{children:[e(t,{variant:"body2",children:o}),e(a,{component:"pre",sx:{m:0,p:1,borderRadius:.5,bgcolor:"action.hover",fontSize:"0.75rem",fontFamily:"monospace",whiteSpace:"pre-wrap"},children:i}),e(a,{sx:{display:"flex",justifyContent:"center",fontSize:35},children:n(r)})]},o))]})]})},u={name:"Color Overrides",argTypes:{color:{table:{disable:!0}},fontSize:{table:{disable:!0}},background:{table:{disable:!0}},filter:{table:{disable:!0}}},render:()=>e(Ce,{}),parameters:{docs:{description:{story:'Recipes for overriding an icon\'s color: the `color` prop (theme palette), `sx` (theme tokens or arbitrary CSS colors), `htmlColor` (fixed, ignores the theme), or by setting `color` on a parent and using `color="inherit"`.'}}}};var R,A,L;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "All Icons"
}`,...(L=(A=p.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var j,_,B;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(B=(_=m.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var W,G,D;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(P=(U=u.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};const Qe=["AllIcons","ColorMatrixStory","SizeMatrixStory","ColorOverridesStory"];export{p as AllIcons,m as ColorMatrixStory,u as ColorOverridesStory,h as SizeMatrixStory,Qe as __namedExportsOrder,Ke as default};
