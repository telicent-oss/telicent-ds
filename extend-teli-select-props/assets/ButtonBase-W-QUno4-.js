import{s as Ke,_ as G,b as _,y as Oe,T as ze,m as re,u as ye}from"./DefaultPropsProvider-FmOZEx_L.js";import{g as se}from"./generateUtilityClasses-DiIBTi47.js";import{r as l,R as Y}from"./index-BBkUAzwr.js";import{b as Ae,e as Xe,c as y,C as We,s as ie,g as Ye,a as He}from"./styled-CKqgJSB4.js";import{u as Ge}from"./useTheme-C43gVfC6.js";import{j as D}from"./jsx-runtime-DRTy3Uxn.js";import{b as qe,_ as Je,T as fe,c as Qe,u as he,d as H}from"./TransitionGroupContext-C9C3ikuq.js";const Ze=["className","component"];function et(e={}){const{themeId:t,defaultTheme:r,defaultClassName:a="MuiBox-root",generateClassName:n}=e,o=Ae("div",{shouldForwardProp:c=>c!=="theme"&&c!=="sx"&&c!=="as"})(Ke);return l.forwardRef(function(u,p){const f=Ge(r),m=Xe(u),{className:b,component:R="div"}=m,h=G(m,Ze);return D.jsx(o,_({as:R,ref:p,className:y(b,n?n(a):a),theme:t&&f[t]||f},h))})}let q=!0,ne=!1;const tt=new qe,nt={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function ot(e){const{type:t,tagName:r}=e;return!!(r==="INPUT"&&nt[t]&&!e.readOnly||r==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function rt(e){e.metaKey||e.altKey||e.ctrlKey||(q=!0)}function te(){q=!1}function st(){this.visibilityState==="hidden"&&ne&&(q=!0)}function it(e){e.addEventListener("keydown",rt,!0),e.addEventListener("mousedown",te,!0),e.addEventListener("pointerdown",te,!0),e.addEventListener("touchstart",te,!0),e.addEventListener("visibilitychange",st,!0)}function at(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return q||ot(t)}function lt(){const e=l.useCallback(n=>{n!=null&&it(n.ownerDocument)},[]),t=l.useRef(!1);function r(){return t.current?(ne=!0,tt.start(100,()=>{ne=!1}),t.current=!1,!0):!1}function a(n){return at(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:a,onBlur:r,ref:e}}const ut=se("MuiBox",["root"]),ct=Oe(),_t=et({themeId:ze,defaultTheme:ct,defaultClassName:ut.root,generateClassName:We.generate});function pt(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ae(e,t){var r=function(o){return t&&l.isValidElement(o)?t(o):o},a=Object.create(null);return e&&l.Children.map(e,function(n){return n}).forEach(function(n){a[n.key]=r(n)}),a}function dt(e,t){e=e||{},t=t||{};function r(f){return f in t?t[f]:e[f]}var a=Object.create(null),n=[];for(var o in e)o in t?n.length&&(a[o]=n,n=[]):n.push(o);var s,c={};for(var u in t){if(a[u])for(s=0;s<a[u].length;s++){var p=a[u][s];c[a[u][s]]=r(p)}c[u]=r(u)}for(s=0;s<n.length;s++)c[n[s]]=r(n[s]);return c}function k(e,t,r){return r[t]!=null?r[t]:e.props[t]}function ft(e,t){return ae(e.children,function(r){return l.cloneElement(r,{onExited:t.bind(null,r),in:!0,appear:k(r,"appear",e),enter:k(r,"enter",e),exit:k(r,"exit",e)})})}function ht(e,t,r){var a=ae(e.children),n=dt(t,a);return Object.keys(n).forEach(function(o){var s=n[o];if(l.isValidElement(s)){var c=o in t,u=o in a,p=t[o],f=l.isValidElement(p)&&!p.props.in;u&&(!c||f)?n[o]=l.cloneElement(s,{onExited:r.bind(null,s),in:!0,exit:k(s,"exit",e),enter:k(s,"enter",e)}):!u&&c&&!f?n[o]=l.cloneElement(s,{in:!1}):u&&c&&l.isValidElement(p)&&(n[o]=l.cloneElement(s,{onExited:r.bind(null,s),in:p.props.in,exit:k(s,"exit",e),enter:k(s,"enter",e)}))}}),n}var mt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},bt={component:"div",childFactory:function(t){return t}},le=function(e){Je(t,e);function t(a,n){var o;o=e.call(this,a,n)||this;var s=o.handleExited.bind(pt(o));return o.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},o}var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,o){var s=o.children,c=o.handleExited,u=o.firstRender;return{children:u?ft(n,c):ht(n,s,c),firstRender:!1}},r.handleExited=function(n,o){var s=ae(this.props.children);n.key in s||(n.props.onExited&&n.props.onExited(o),this.mounted&&this.setState(function(c){var u=_({},c.children);return delete u[n.key],{children:u}}))},r.render=function(){var n=this.props,o=n.component,s=n.childFactory,c=G(n,["component","childFactory"]),u=this.state.contextValue,p=mt(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,o===null?Y.createElement(fe.Provider,{value:u},p):Y.createElement(fe.Provider,{value:u},Y.createElement(o,c,p))},t}(Y.Component);le.propTypes={};le.defaultProps=bt;function gt(e){const{className:t,classes:r,pulsate:a=!1,rippleX:n,rippleY:o,rippleSize:s,in:c,onExited:u,timeout:p}=e,[f,m]=l.useState(!1),b=y(t,r.ripple,r.rippleVisible,a&&r.ripplePulsate),R={width:s,height:s,top:-(s/2)+o,left:-(s/2)+n},h=y(r.child,f&&r.childLeaving,a&&r.childPulsate);return!c&&!f&&m(!0),l.useEffect(()=>{if(!c&&u!=null){const x=setTimeout(u,p);return()=>{clearTimeout(x)}}},[u,c,p]),D.jsx("span",{className:b,style:R,children:D.jsx("span",{className:h})})}const g=se("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Rt=["center","classes","className"];let J=e=>e,me,be,ge,Re;const oe=550,yt=80,xt=re(me||(me=J`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Mt=re(be||(be=J`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Tt=re(ge||(ge=J`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Et=ie("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Ct=ie(gt,{name:"MuiTouchRipple",slot:"Ripple"})(Re||(Re=J`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),g.rippleVisible,xt,oe,({theme:e})=>e.transitions.easing.easeInOut,g.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,g.child,g.childLeaving,Mt,oe,({theme:e})=>e.transitions.easing.easeInOut,g.childPulsate,Tt,({theme:e})=>e.transitions.easing.easeInOut),vt=l.forwardRef(function(t,r){const a=ye({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:o={},className:s}=a,c=G(a,Rt),[u,p]=l.useState([]),f=l.useRef(0),m=l.useRef(null);l.useEffect(()=>{m.current&&(m.current(),m.current=null)},[u]);const b=l.useRef(!1),R=Qe(),h=l.useRef(null),x=l.useRef(null),U=l.useCallback(d=>{const{pulsate:M,rippleX:T,rippleY:F,rippleSize:j,cb:O}=d;p(E=>[...E,D.jsx(Ct,{classes:{ripple:y(o.ripple,g.ripple),rippleVisible:y(o.rippleVisible,g.rippleVisible),ripplePulsate:y(o.ripplePulsate,g.ripplePulsate),child:y(o.child,g.child),childLeaving:y(o.childLeaving,g.childLeaving),childPulsate:y(o.childPulsate,g.childPulsate)},timeout:oe,pulsate:M,rippleX:T,rippleY:F,rippleSize:j},f.current)]),f.current+=1,m.current=O},[o]),I=l.useCallback((d={},M={},T=()=>{})=>{const{pulsate:F=!1,center:j=n||M.pulsate,fakeElement:O=!1}=M;if((d==null?void 0:d.type)==="mousedown"&&b.current){b.current=!1;return}(d==null?void 0:d.type)==="touchstart"&&(b.current=!0);const E=O?null:x.current,w=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,P,N;if(j||d===void 0||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)v=Math.round(w.width/2),P=Math.round(w.height/2);else{const{clientX:L,clientY:V}=d.touches&&d.touches.length>0?d.touches[0]:d;v=Math.round(L-w.left),P=Math.round(V-w.top)}if(j)N=Math.sqrt((2*w.width**2+w.height**2)/3),N%2===0&&(N+=1);else{const L=Math.max(Math.abs((E?E.clientWidth:0)-v),v)*2+2,V=Math.max(Math.abs((E?E.clientHeight:0)-P),P)*2+2;N=Math.sqrt(L**2+V**2)}d!=null&&d.touches?h.current===null&&(h.current=()=>{U({pulsate:F,rippleX:v,rippleY:P,rippleSize:N,cb:T})},R.start(yt,()=>{h.current&&(h.current(),h.current=null)})):U({pulsate:F,rippleX:v,rippleY:P,rippleSize:N,cb:T})},[n,U,R]),K=l.useCallback(()=>{I({},{pulsate:!0})},[I]),$=l.useCallback((d,M)=>{if(R.clear(),(d==null?void 0:d.type)==="touchend"&&h.current){h.current(),h.current=null,R.start(0,()=>{$(d,M)});return}h.current=null,p(T=>T.length>0?T.slice(1):T),m.current=M},[R]);return l.useImperativeHandle(r,()=>({pulsate:K,start:I,stop:$}),[K,I,$]),D.jsx(Et,_({className:y(g.root,o.root,s),ref:x},c,{children:D.jsx(le,{component:null,exit:!0,children:u})}))});function Vt(e){return Ye("MuiButtonBase",e)}const Bt=se("MuiButtonBase",["root","disabled","focusVisible"]),wt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Pt=e=>{const{disabled:t,focusVisible:r,focusVisibleClassName:a,classes:n}=e,s=He({root:["root",t&&"disabled",r&&"focusVisible"]},Vt,n);return r&&a&&(s.root+=` ${a}`),s},Nt=ie("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Bt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Ut=l.forwardRef(function(t,r){const a=ye({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:o=!1,children:s,className:c,component:u="button",disabled:p=!1,disableRipple:f=!1,disableTouchRipple:m=!1,focusRipple:b=!1,LinkComponent:R="a",onBlur:h,onClick:x,onContextMenu:U,onDragLeave:I,onFocus:K,onFocusVisible:$,onKeyDown:d,onKeyUp:M,onMouseDown:T,onMouseLeave:F,onMouseUp:j,onTouchEnd:O,onTouchMove:E,onTouchStart:w,tabIndex:v=0,TouchRippleProps:P,touchRippleRef:N,type:L}=a,V=G(a,wt),z=l.useRef(null),C=l.useRef(null),xe=he(C,N),{isFocusVisibleRef:ue,onFocus:Me,onBlur:Te,ref:Ee}=lt(),[S,X]=l.useState(!1);p&&S&&X(!1),l.useImperativeHandle(n,()=>({focusVisible:()=>{X(!0),z.current.focus()}}),[]);const[Q,Ce]=l.useState(!1);l.useEffect(()=>{Ce(!0)},[]);const ve=Q&&!f&&!p;l.useEffect(()=>{S&&b&&!f&&Q&&C.current.pulsate()},[f,b,S,Q]);function B(i,pe,Ue=m){return H(de=>(pe&&pe(de),!Ue&&C.current&&C.current[i](de),!0))}const Ve=B("start",T),Be=B("stop",U),we=B("stop",I),Pe=B("stop",j),Ne=B("stop",i=>{S&&i.preventDefault(),F&&F(i)}),De=B("start",w),Fe=B("stop",O),Le=B("stop",E),Se=B("stop",i=>{Te(i),ue.current===!1&&X(!1),h&&h(i)},!1),ke=H(i=>{z.current||(z.current=i.currentTarget),Me(i),ue.current===!0&&(X(!0),$&&$(i)),K&&K(i)}),Z=()=>{const i=z.current;return u&&u!=="button"&&!(i.tagName==="A"&&i.href)},ee=l.useRef(!1),Ie=H(i=>{b&&!ee.current&&S&&C.current&&i.key===" "&&(ee.current=!0,C.current.stop(i,()=>{C.current.start(i)})),i.target===i.currentTarget&&Z()&&i.key===" "&&i.preventDefault(),d&&d(i),i.target===i.currentTarget&&Z()&&i.key==="Enter"&&!p&&(i.preventDefault(),x&&x(i))}),$e=H(i=>{b&&i.key===" "&&C.current&&S&&!i.defaultPrevented&&(ee.current=!1,C.current.stop(i,()=>{C.current.pulsate(i)})),M&&M(i),x&&i.target===i.currentTarget&&Z()&&i.key===" "&&!i.defaultPrevented&&x(i)});let W=u;W==="button"&&(V.href||V.to)&&(W=R);const A={};W==="button"?(A.type=L===void 0?"button":L,A.disabled=p):(!V.href&&!V.to&&(A.role="button"),p&&(A["aria-disabled"]=p));const je=he(r,Ee,z),ce=_({},a,{centerRipple:o,component:u,disabled:p,disableRipple:f,disableTouchRipple:m,focusRipple:b,tabIndex:v,focusVisible:S}),_e=Pt(ce);return D.jsxs(Nt,_({as:W,className:y(_e.root,c),ownerState:ce,onBlur:Se,onClick:x,onContextMenu:Be,onFocus:ke,onKeyDown:Ie,onKeyUp:$e,onMouseDown:Ve,onMouseLeave:Ne,onMouseUp:Pe,onDragLeave:we,onTouchEnd:Fe,onTouchMove:Le,onTouchStart:De,ref:je,tabIndex:p?-1:v,type:L},A,V,{children:[s,ve?D.jsx(vt,_({ref:xe,center:o},P)):null]}))});export{_t as B,Ut as a,lt as u};
