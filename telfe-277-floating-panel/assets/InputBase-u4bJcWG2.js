import{_ as fe,h as Q,u as Be,f as Ie}from"./DefaultPropsProvider-BXx8Lxdp.js";import{j as v,_ as d}from"./extends-EO7Nsyo1.js";import{r as i}from"./index-uubelm5h.js";import{g as Fe,s as me,c as ue,a as Ee}from"./styled-CsMkIDyT.js";import{g as We}from"./generateUtilityClasses-DUdad9y1.js";import{u as he,a as X}from"./TransitionGroupContext-CLVPPxcC.js";import{o as de,d as He}from"./Popover-DDsTovIT.js";import{i as ce}from"./resolveComponentProps-wJjsJM5R.js";import{G as Pe}from"./GlobalStyles-CxIrBmt2.js";const Me=["onChange","maxRows","minRows","style","value"];function N(e){return parseInt(e,10)||0}const Le={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function Oe(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflowing}const Te=i.forwardRef(function(t,o){const{onChange:l,maxRows:n,minRows:c=1,style:A,value:k}=t,W=fe(t,Me),{current:R}=i.useRef(k!=null),b=i.useRef(null),B=he(o,b),g=i.useRef(null),z=i.useRef(null),C=i.useCallback(()=>{const p=b.current,u=de(p).getComputedStyle(p);if(u.width==="0px")return{outerHeightStyle:0,overflowing:!1};const f=z.current;f.style.width=u.width,f.value=p.value||t.placeholder||"x",f.value.slice(-1)===`
`&&(f.value+=" ");const I=u.boxSizing,y=N(u.paddingBottom)+N(u.paddingTop),D=N(u.borderBottomWidth)+N(u.borderTopWidth),S=f.scrollHeight;f.value="x";const F=f.scrollHeight;let h=S;c&&(h=Math.max(Number(c)*F,h)),n&&(h=Math.min(Number(n)*F,h)),h=Math.max(h,F);const M=h+(I==="border-box"?y+D:0),V=Math.abs(h-S)<=1;return{outerHeightStyle:M,overflowing:V}},[n,c,t.placeholder]),w=i.useCallback(()=>{const p=C();if(Oe(p))return;const s=p.outerHeightStyle,u=b.current;g.current!==s&&(g.current=s,u.style.height=`${s}px`),u.style.overflow=p.overflowing?"hidden":""},[C]);X(()=>{const p=()=>{w()};let s;const u=He(p),f=b.current,I=de(f);I.addEventListener("resize",u);let y;return typeof ResizeObserver<"u"&&(y=new ResizeObserver(p),y.observe(f)),()=>{u.clear(),cancelAnimationFrame(s),I.removeEventListener("resize",u),y&&y.disconnect()}},[C,w]),X(()=>{w()});const $=p=>{R||w(),l&&l(p)};return v.jsxs(i.Fragment,{children:[v.jsx("textarea",d({value:k,onChange:$,ref:B,rows:c,style:A},W)),v.jsx("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:z,tabIndex:-1,style:d({},Le.shadow,A,{paddingTop:0,paddingBottom:0})})]})});function Ne({props:e,states:t,muiFormControl:o}){return t.reduce((l,n)=>(l[n]=e[n],o&&typeof e[n]>"u"&&(l[n]=o[n]),l),{})}const be=i.createContext(void 0);function $e(){return i.useContext(be)}function pe(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function De(e,t=!1){return e&&(pe(e.value)&&e.value!==""||t&&pe(e.defaultValue)&&e.defaultValue!=="")}function Ve(e){return Fe("MuiInputBase",e)}const Y=We("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),_e=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],je=(e,t)=>{const{ownerState:o}=e;return[t.root,o.formControl&&t.formControl,o.startAdornment&&t.adornedStart,o.endAdornment&&t.adornedEnd,o.error&&t.error,o.size==="small"&&t.sizeSmall,o.multiline&&t.multiline,o.color&&t[`color${Q(o.color)}`],o.fullWidth&&t.fullWidth,o.hiddenLabel&&t.hiddenLabel]},Ue=(e,t)=>{const{ownerState:o}=e;return[t.input,o.size==="small"&&t.inputSizeSmall,o.multiline&&t.inputMultiline,o.type==="search"&&t.inputTypeSearch,o.startAdornment&&t.inputAdornedStart,o.endAdornment&&t.inputAdornedEnd,o.hiddenLabel&&t.inputHiddenLabel]},Ge=e=>{const{classes:t,color:o,disabled:l,error:n,endAdornment:c,focused:A,formControl:k,fullWidth:W,hiddenLabel:R,multiline:b,readOnly:B,size:g,startAdornment:z,type:C}=e,w={root:["root",`color${Q(o)}`,l&&"disabled",n&&"error",W&&"fullWidth",A&&"focused",k&&"formControl",g&&g!=="medium"&&`size${Q(g)}`,b&&"multiline",z&&"adornedStart",c&&"adornedEnd",R&&"hiddenLabel",B&&"readOnly"],input:["input",l&&"disabled",C==="search"&&"inputTypeSearch",b&&"inputMultiline",g==="small"&&"inputSizeSmall",R&&"inputHiddenLabel",z&&"inputAdornedStart",c&&"inputAdornedEnd",B&&"readOnly"]};return Ee(w,Ve,t)},Ke=me("div",{name:"MuiInputBase",slot:"Root",overridesResolver:je})(({theme:e,ownerState:t})=>d({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${Y.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},t.multiline&&d({padding:"4px 0 5px"},t.size==="small"&&{paddingTop:1}),t.fullWidth&&{width:"100%"})),qe=me("input",{name:"MuiInputBase",slot:"Input",overridesResolver:Ue})(({theme:e,ownerState:t})=>{const o=e.palette.mode==="light",l=d({color:"currentColor"},e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:o?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),n={opacity:"0 !important"},c=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:o?.42:.5};return d({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":l,"&::-moz-placeholder":l,"&:-ms-input-placeholder":l,"&::-ms-input-placeholder":l,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${Y.formControl} &`]:{"&::-webkit-input-placeholder":n,"&::-moz-placeholder":n,"&:-ms-input-placeholder":n,"&::-ms-input-placeholder":n,"&:focus::-webkit-input-placeholder":c,"&:focus::-moz-placeholder":c,"&:focus:-ms-input-placeholder":c,"&:focus::-ms-input-placeholder":c},[`&.${Y.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},t.size==="small"&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},t.type==="search"&&{MozAppearance:"textfield"})}),Ze=v.jsx(Pe,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),it=i.forwardRef(function(t,o){var l;const n=Be({props:t,name:"MuiInputBase"}),{"aria-describedby":c,autoComplete:A,autoFocus:k,className:W,components:R={},componentsProps:b={},defaultValue:B,disabled:g,disableInjectingGlobalStyles:z,endAdornment:C,fullWidth:w=!1,id:$,inputComponent:p="input",inputProps:s={},inputRef:u,maxRows:f,minRows:I,multiline:y=!1,name:D,onBlur:S,onChange:F,onClick:h,onFocus:M,onKeyDown:V,onKeyUp:ge,placeholder:ye,readOnly:_,renderSuffix:ee,rows:L,slotProps:te={},slots:oe={},startAdornment:H,type:ne="text",value:xe}=n,Ce=fe(n,_e),O=s.value!=null?s.value:xe,{current:j}=i.useRef(O!=null),E=i.useRef(),we=i.useCallback(r=>{},[]),Se=he(E,u,s.ref,we),[U,G]=i.useState(!1),a=$e(),m=Ne({props:n,muiFormControl:a,states:["color","disabled","error","hiddenLabel","size","required","filled"]});m.focused=a?a.focused:U,i.useEffect(()=>{!a&&g&&U&&(G(!1),S&&S())},[a,g,U,S]);const K=a&&a.onFilled,q=a&&a.onEmpty,P=i.useCallback(r=>{De(r)?K&&K():q&&q()},[K,q]);X(()=>{j&&P({value:O})},[O,P,j]);const ve=r=>{if(m.disabled){r.stopPropagation();return}M&&M(r),s.onFocus&&s.onFocus(r),a&&a.onFocus?a.onFocus(r):G(!0)},Re=r=>{S&&S(r),s.onBlur&&s.onBlur(r),a&&a.onBlur?a.onBlur(r):G(!1)},ze=(r,...le)=>{if(!j){const se=r.target||E.current;if(se==null)throw new Error(Ie(1));P({value:se.value})}s.onChange&&s.onChange(r,...le),F&&F(r,...le)};i.useEffect(()=>{P(E.current)},[]);const Ae=r=>{E.current&&r.currentTarget===r.target&&E.current.focus(),h&&h(r)};let Z=p,x=s;y&&Z==="input"&&(L?x=d({type:void 0,minRows:L,maxRows:L},x):x=d({type:void 0,maxRows:f,minRows:I},x),Z=Te);const ke=r=>{P(r.animationName==="mui-auto-fill-cancel"?E.current:{value:"x"})};i.useEffect(()=>{a&&a.setAdornedStart(!!H)},[a,H]);const T=d({},n,{color:m.color||"primary",disabled:m.disabled,endAdornment:C,error:m.error,focused:m.focused,formControl:a,fullWidth:w,hiddenLabel:m.hiddenLabel,multiline:y,size:m.size,startAdornment:H,type:ne}),re=Ge(T),ie=oe.root||R.Root||Ke,J=te.root||b.root||{},ae=oe.input||R.Input||qe;return x=d({},x,(l=te.input)!=null?l:b.input),v.jsxs(i.Fragment,{children:[!z&&Ze,v.jsxs(ie,d({},J,!ce(ie)&&{ownerState:d({},T,J.ownerState)},{ref:o,onClick:Ae},Ce,{className:ue(re.root,J.className,W,_&&"MuiInputBase-readOnly"),children:[H,v.jsx(be.Provider,{value:null,children:v.jsx(ae,d({ownerState:T,"aria-invalid":m.error,"aria-describedby":c,autoComplete:A,autoFocus:k,defaultValue:B,disabled:m.disabled,id:$,onAnimationStart:ke,name:D,placeholder:ye,readOnly:_,required:m.required,rows:L,value:O,onKeyDown:V,onKeyUp:ge,type:ne},x,!ce(ae)&&{as:Z,ownerState:d({},T,x.ownerState)},{ref:Se,className:ue(re.input,x.className,_&&"MuiInputBase-readOnly"),onBlur:Re,onChange:ze,onFocus:ve}))}),C,ee?ee(d({},m,{startAdornment:H})):null]}))]})});export{it as I,Ke as a,qe as b,Ue as c,Ne as f,Y as i,je as r,$e as u};
