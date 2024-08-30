import{_ as pe,T as ke,b as J,f as Be}from"./createTheme-CnHyYZiq.js";import{_ as u}from"./extends-CCbyfPlC.js";import{r as s}from"./index-BwDkhjyp.js";import{u as Fe,G as Ie,d as Ee,g as Te,s as fe,a as We,c as se,b as He}from"./styled-jK8V3O51.js";import{u as Pe,f as Me,F as Le}from"./useFormControl-DPp5-Ez4.js";import{g as Oe}from"./generateUtilityClasses-BGohe2Km.js";import{j as g}from"./jsx-runtime-Nms4Y4qS.js";import{u as me}from"./useForkRef-UxOPvILp.js";import{u as Q}from"./TransitionGroupContext-Dii4aaAC.js";import{o as ue}from"./ownerWindow-COOHErMu.js";import{d as Ne}from"./debounce-Be36O1Ab.js";import{i as de}from"./isHostComponent-DVu5iVWx.js";function $e({styles:e,themeId:o,defaultTheme:t={}}){const a=Fe(t),l=typeof e=="function"?e(o&&a[o]||a):e;return g.jsx(Ie,{styles:l})}const je=["onChange","maxRows","minRows","style","value"];function j(e){return parseInt(e,10)||0}const _e={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function De(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflowing}const Ge=s.forwardRef(function(o,t){const{onChange:a,maxRows:l,minRows:d=1,style:z,value:A}=o,I=pe(o,je),{current:v}=s.useRef(A!=null),h=s.useRef(null),k=me(t,h),b=s.useRef(null),w=s.useCallback(()=>{const c=h.current,n=ue(c).getComputedStyle(c);if(n.width==="0px")return{outerHeightStyle:0,overflowing:!1};const p=b.current;p.style.width=n.width,p.value=c.value||o.placeholder||"x",p.value.slice(-1)===`
`&&(p.value+=" ");const B=n.boxSizing,C=j(n.paddingBottom)+j(n.paddingTop),H=j(n.borderBottomWidth)+j(n.borderTopWidth),P=p.scrollHeight;p.value="x";const x=p.scrollHeight;let m=P;d&&(m=Math.max(Number(d)*x,m)),l&&(m=Math.min(Number(l)*x,m)),m=Math.max(m,x);const M=m+(B==="border-box"?C+H:0),L=Math.abs(m-P)<=1;return{outerHeightStyle:M,overflowing:L}},[l,d,o.placeholder]),y=s.useCallback(()=>{const c=w();if(De(c))return;const R=h.current;R.style.height=`${c.outerHeightStyle}px`,R.style.overflow=c.overflowing?"hidden":""},[w]);Q(()=>{const c=()=>{y()};let R;const n=Ne(c),p=h.current,B=ue(p);B.addEventListener("resize",n);let C;return typeof ResizeObserver<"u"&&(C=new ResizeObserver(c),C.observe(p)),()=>{n.clear(),cancelAnimationFrame(R),B.removeEventListener("resize",n),C&&C.disconnect()}},[w,y]),Q(()=>{y()});const E=c=>{v||y(),a&&a(c)};return g.jsxs(s.Fragment,{children:[g.jsx("textarea",u({value:A,onChange:E,ref:k,rows:d,style:z},I)),g.jsx("textarea",{"aria-hidden":!0,className:o.className,readOnly:!0,ref:b,tabIndex:-1,style:u({},_e.shadow,z,{paddingTop:0,paddingBottom:0})})]})});function Ve(e){return g.jsx($e,u({},e,{defaultTheme:Ee,themeId:ke}))}function ce(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function Ue(e,o=!1){return e&&(ce(e.value)&&e.value!==""||o&&ce(e.defaultValue)&&e.defaultValue!=="")}function mo(e){return e.startAdornment}function Ke(e){return Te("MuiInputBase",e)}const X=Oe("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),qe=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],Ze=(e,o)=>{const{ownerState:t}=e;return[o.root,t.formControl&&o.formControl,t.startAdornment&&o.adornedStart,t.endAdornment&&o.adornedEnd,t.error&&o.error,t.size==="small"&&o.sizeSmall,t.multiline&&o.multiline,t.color&&o[`color${J(t.color)}`],t.fullWidth&&o.fullWidth,t.hiddenLabel&&o.hiddenLabel]},Je=(e,o)=>{const{ownerState:t}=e;return[o.input,t.size==="small"&&o.inputSizeSmall,t.multiline&&o.inputMultiline,t.type==="search"&&o.inputTypeSearch,t.startAdornment&&o.inputAdornedStart,t.endAdornment&&o.inputAdornedEnd,t.hiddenLabel&&o.inputHiddenLabel]},Qe=e=>{const{classes:o,color:t,disabled:a,error:l,endAdornment:d,focused:z,formControl:A,fullWidth:I,hiddenLabel:v,multiline:h,readOnly:k,size:b,startAdornment:w,type:y}=e,E={root:["root",`color${J(t)}`,a&&"disabled",l&&"error",I&&"fullWidth",z&&"focused",A&&"formControl",b&&b!=="medium"&&`size${J(b)}`,h&&"multiline",w&&"adornedStart",d&&"adornedEnd",v&&"hiddenLabel",k&&"readOnly"],input:["input",a&&"disabled",y==="search"&&"inputTypeSearch",h&&"inputMultiline",b==="small"&&"inputSizeSmall",v&&"inputHiddenLabel",w&&"inputAdornedStart",d&&"inputAdornedEnd",k&&"readOnly"]};return He(E,Ke,o)},Xe=fe("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Ze})(({theme:e,ownerState:o})=>u({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${X.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},o.multiline&&u({padding:"4px 0 5px"},o.size==="small"&&{paddingTop:1}),o.fullWidth&&{width:"100%"})),Ye=fe("input",{name:"MuiInputBase",slot:"Input",overridesResolver:Je})(({theme:e,ownerState:o})=>{const t=e.palette.mode==="light",a=u({color:"currentColor"},e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:t?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),l={opacity:"0 !important"},d=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:t?.42:.5};return u({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":a,"&::-moz-placeholder":a,"&:-ms-input-placeholder":a,"&::-ms-input-placeholder":a,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${X.formControl} &`]:{"&::-webkit-input-placeholder":l,"&::-moz-placeholder":l,"&:-ms-input-placeholder":l,"&::-ms-input-placeholder":l,"&:focus::-webkit-input-placeholder":d,"&:focus::-moz-placeholder":d,"&:focus:-ms-input-placeholder":d,"&:focus::-ms-input-placeholder":d},[`&.${X.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},o.size==="small"&&{paddingTop:1},o.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},o.type==="search"&&{MozAppearance:"textfield"})}),eo=g.jsx(Ve,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),ho=s.forwardRef(function(o,t){var a;const l=We({props:o,name:"MuiInputBase"}),{"aria-describedby":d,autoComplete:z,autoFocus:A,className:I,components:v={},componentsProps:h={},defaultValue:k,disabled:b,disableInjectingGlobalStyles:w,endAdornment:y,fullWidth:E=!1,id:c,inputComponent:R="input",inputProps:n={},inputRef:p,maxRows:B,minRows:C,multiline:H=!1,name:P,onBlur:x,onChange:m,onClick:M,onFocus:L,onKeyDown:he,onKeyUp:be,placeholder:ge,readOnly:_,renderSuffix:Y,rows:O,slotProps:ee={},slots:oe={},startAdornment:T,type:te="text",value:ye}=l,xe=pe(l,qe),N=n.value!=null?n.value:ye,{current:D}=s.useRef(N!=null),F=s.useRef(),Se=s.useCallback(r=>{},[]),we=me(F,p,n.ref,Se),[G,V]=s.useState(!1),i=Pe(),f=Me({props:l,muiFormControl:i,states:["color","disabled","error","hiddenLabel","size","required","filled"]});f.focused=i?i.focused:G,s.useEffect(()=>{!i&&b&&G&&(V(!1),x&&x())},[i,b,G,x]);const U=i&&i.onFilled,K=i&&i.onEmpty,W=s.useCallback(r=>{Ue(r)?U&&U():K&&K()},[U,K]);Q(()=>{D&&W({value:N})},[N,W,D]);const Ce=r=>{if(f.disabled){r.stopPropagation();return}L&&L(r),n.onFocus&&n.onFocus(r),i&&i.onFocus?i.onFocus(r):V(!0)},ve=r=>{x&&x(r),n.onBlur&&n.onBlur(r),i&&i.onBlur?i.onBlur(r):V(!1)},Re=(r,...ae)=>{if(!D){const le=r.target||F.current;if(le==null)throw new Error(Be(1));W({value:le.value})}n.onChange&&n.onChange(r,...ae),m&&m(r,...ae)};s.useEffect(()=>{W(F.current)},[]);const ze=r=>{F.current&&r.currentTarget===r.target&&F.current.focus(),M&&M(r)};let q=R,S=n;H&&q==="input"&&(O?S=u({type:void 0,minRows:O,maxRows:O},S):S=u({type:void 0,maxRows:B,minRows:C},S),q=Ge);const Ae=r=>{W(r.animationName==="mui-auto-fill-cancel"?F.current:{value:"x"})};s.useEffect(()=>{i&&i.setAdornedStart(!!T)},[i,T]);const $=u({},l,{color:f.color||"primary",disabled:f.disabled,endAdornment:y,error:f.error,focused:f.focused,formControl:i,fullWidth:E,hiddenLabel:f.hiddenLabel,multiline:H,size:f.size,startAdornment:T,type:te}),ne=Qe($),re=oe.root||v.Root||Xe,Z=ee.root||h.root||{},ie=oe.input||v.Input||Ye;return S=u({},S,(a=ee.input)!=null?a:h.input),g.jsxs(s.Fragment,{children:[!w&&eo,g.jsxs(re,u({},Z,!de(re)&&{ownerState:u({},$,Z.ownerState)},{ref:t,onClick:ze},xe,{className:se(ne.root,Z.className,I,_&&"MuiInputBase-readOnly"),children:[T,g.jsx(Le.Provider,{value:null,children:g.jsx(ie,u({ownerState:$,"aria-invalid":f.error,"aria-describedby":d,autoComplete:z,autoFocus:A,defaultValue:k,disabled:f.disabled,id:c,onAnimationStart:Ae,name:P,placeholder:ge,readOnly:_,required:f.required,rows:O,value:N,onKeyDown:he,onKeyUp:be,type:te},S,!de(ie)&&{as:q,ownerState:u({},$,S.ownerState)},{ref:we,className:se(ne.input,S.className,_&&"MuiInputBase-readOnly"),onBlur:ve,onChange:Re,onFocus:Ce}))}),y,Y?Y(u({},f,{startAdornment:T})):null]}))]})});export{ho as I,Xe as a,Ye as b,Je as c,mo as d,Ue as e,X as i,Ze as r};
