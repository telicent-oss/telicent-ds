import{_ as A,a as ie,u as re}from"./identifier-C6mAUaLB.js";import{r as a,R as Y}from"./index-Dl6G-zuu.js";import{c as x,s as oe,g as _e,a as Oe}from"./styled-BErHg-7C.js";import{j as N}from"./jsx-runtime-DMAvRu52.js";import{g as Re}from"./generateUtilityClasses-Cuk6vP38.js";import{u as ye}from"./DefaultPropsProvider-BOzBDHyA.js";import{a as ze,_ as Ae,T as fe,b as Xe,u as de,c as H}from"./TransitionGroupContext-BU5kpZ0L.js";let G=!0,te=!1;const We=new ze,Ye={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function He(e){const{type:t,tagName:r}=e;return!!(r==="INPUT"&&Ye[t]&&!e.readOnly||r==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function Ge(e){e.metaKey||e.altKey||e.ctrlKey||(G=!0)}function ee(){G=!1}function qe(){this.visibilityState==="hidden"&&te&&(G=!0)}function Je(e){e.addEventListener("keydown",Ge,!0),e.addEventListener("mousedown",ee,!0),e.addEventListener("pointerdown",ee,!0),e.addEventListener("touchstart",ee,!0),e.addEventListener("visibilitychange",qe,!0)}function Qe(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return G||He(t)}function Ze(){const e=a.useCallback(n=>{n!=null&&Je(n.ownerDocument)},[]),t=a.useRef(!1);function r(){return t.current?(te=!0,We.start(100,()=>{te=!1}),t.current=!1,!0):!1}function l(n){return Qe(n)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:l,onBlur:r,ref:e}}function et(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function se(e,t){var r=function(i){return t&&a.isValidElement(i)?t(i):i},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=r(n)}),l}function tt(e,t){e=e||{},t=t||{};function r(d){return d in t?t[d]:e[d]}var l=Object.create(null),n=[];for(var i in e)i in t?n.length&&(l[i]=n,n=[]):n.push(i);var o,c={};for(var u in t){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=r(p)}c[u]=r(u)}for(o=0;o<n.length;o++)c[n[o]]=r(n[o]);return c}function S(e,t,r){return r[t]!=null?r[t]:e.props[t]}function nt(e,t){return se(e.children,function(r){return a.cloneElement(r,{onExited:t.bind(null,r),in:!0,appear:S(r,"appear",e),enter:S(r,"enter",e),exit:S(r,"exit",e)})})}function it(e,t,r){var l=se(e.children),n=tt(t,l);return Object.keys(n).forEach(function(i){var o=n[i];if(a.isValidElement(o)){var c=i in t,u=i in l,p=t[i],d=a.isValidElement(p)&&!p.props.in;u&&(!c||d)?n[i]=a.cloneElement(o,{onExited:r.bind(null,o),in:!0,exit:S(o,"exit",e),enter:S(o,"enter",e)}):!u&&c&&!d?n[i]=a.cloneElement(o,{in:!1}):u&&c&&a.isValidElement(p)&&(n[i]=a.cloneElement(o,{onExited:r.bind(null,o),in:p.props.in,exit:S(o,"exit",e),enter:S(o,"enter",e)}))}}),n}var rt=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},ot={component:"div",childFactory:function(t){return t}},ae=function(e){Ae(t,e);function t(l,n){var i;i=e.call(this,l,n)||this;var o=i.handleExited.bind(et(i));return i.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},i}var r=t.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(n,i){var o=i.children,c=i.handleExited,u=i.firstRender;return{children:u?nt(n,c):it(n,o,c),firstRender:!1}},r.handleExited=function(n,i){var o=se(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(i),this.mounted&&this.setState(function(c){var u=A({},c.children);return delete u[n.key],{children:u}}))},r.render=function(){var n=this.props,i=n.component,o=n.childFactory,c=ie(n,["component","childFactory"]),u=this.state.contextValue,p=rt(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,i===null?Y.createElement(fe.Provider,{value:u},p):Y.createElement(fe.Provider,{value:u},Y.createElement(i,c,p))},t}(Y.Component);ae.propTypes={};ae.defaultProps=ot;function st(e){const{className:t,classes:r,pulsate:l=!1,rippleX:n,rippleY:i,rippleSize:o,in:c,onExited:u,timeout:p}=e,[d,g]=a.useState(!1),b=x(t,r.ripple,r.rippleVisible,l&&r.ripplePulsate),C={width:o,height:o,top:-(o/2)+i,left:-(o/2)+n},h=x(r.child,d&&r.childLeaving,l&&r.childPulsate);return!c&&!d&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),N.jsx("span",{className:b,style:C,children:N.jsx("span",{className:h})})}const m=Re("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),at=["center","classes","className"];let q=e=>e,he,me,be,ge;const ne=550,lt=80,ut=re(he||(he=q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),ct=re(me||(me=q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),pt=re(be||(be=q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),ft=oe("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),dt=oe(st,{name:"MuiTouchRipple",slot:"Ripple"})(ge||(ge=q`
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
`),m.rippleVisible,ut,ne,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,ct,ne,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,pt,({theme:e})=>e.transitions.easing.easeInOut),ht=a.forwardRef(function(t,r){const l=ye({props:t,name:"MuiTouchRipple"}),{center:n=!1,classes:i={},className:o}=l,c=ie(l,at),[u,p]=a.useState([]),d=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),C=Xe(),h=a.useRef(null),R=a.useRef(null),U=a.useCallback(f=>{const{pulsate:y,rippleX:M,rippleY:L,rippleSize:j,cb:_}=f;p(E=>[...E,N.jsx(dt,{classes:{ripple:x(i.ripple,m.ripple),rippleVisible:x(i.rippleVisible,m.rippleVisible),ripplePulsate:x(i.ripplePulsate,m.ripplePulsate),child:x(i.child,m.child),childLeaving:x(i.childLeaving,m.childLeaving),childPulsate:x(i.childPulsate,m.childPulsate)},timeout:ne,pulsate:y,rippleX:M,rippleY:L,rippleSize:j},d.current)]),d.current+=1,g.current=_},[i]),I=a.useCallback((f={},y={},M=()=>{})=>{const{pulsate:L=!1,center:j=n||y.pulsate,fakeElement:_=!1}=y;if((f==null?void 0:f.type)==="mousedown"&&b.current){b.current=!1;return}(f==null?void 0:f.type)==="touchstart"&&(b.current=!0);const E=_?null:R.current,P=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,B,D;if(j||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)v=Math.round(P.width/2),B=Math.round(P.height/2);else{const{clientX:F,clientY:V}=f.touches&&f.touches.length>0?f.touches[0]:f;v=Math.round(F-P.left),B=Math.round(V-P.top)}if(j)D=Math.sqrt((2*P.width**2+P.height**2)/3),D%2===0&&(D+=1);else{const F=Math.max(Math.abs((E?E.clientWidth:0)-v),v)*2+2,V=Math.max(Math.abs((E?E.clientHeight:0)-B),B)*2+2;D=Math.sqrt(F**2+V**2)}f!=null&&f.touches?h.current===null&&(h.current=()=>{U({pulsate:L,rippleX:v,rippleY:B,rippleSize:D,cb:M})},C.start(lt,()=>{h.current&&(h.current(),h.current=null)})):U({pulsate:L,rippleX:v,rippleY:B,rippleSize:D,cb:M})},[n,U,C]),K=a.useCallback(()=>{I({},{pulsate:!0})},[I]),$=a.useCallback((f,y)=>{if(C.clear(),(f==null?void 0:f.type)==="touchend"&&h.current){h.current(),h.current=null,C.start(0,()=>{$(f,y)});return}h.current=null,p(M=>M.length>0?M.slice(1):M),g.current=y},[C]);return a.useImperativeHandle(r,()=>({pulsate:K,start:I,stop:$}),[K,I,$]),N.jsx(ft,A({className:x(m.root,i.root,o),ref:R},c,{children:N.jsx(ae,{component:null,exit:!0,children:u})}))});function mt(e){return _e("MuiButtonBase",e)}const bt=Re("MuiButtonBase",["root","disabled","focusVisible"]),gt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Rt=e=>{const{disabled:t,focusVisible:r,focusVisibleClassName:l,classes:n}=e,o=Oe({root:["root",t&&"disabled",r&&"focusVisible"]},mt,n);return r&&l&&(o.root+=` ${l}`),o},yt=oe("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${bt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Pt=a.forwardRef(function(t,r){const l=ye({props:t,name:"MuiButtonBase"}),{action:n,centerRipple:i=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:C="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:I,onFocus:K,onFocusVisible:$,onKeyDown:f,onKeyUp:y,onMouseDown:M,onMouseLeave:L,onMouseUp:j,onTouchEnd:_,onTouchMove:E,onTouchStart:P,tabIndex:v=0,TouchRippleProps:B,touchRippleRef:D,type:F}=l,V=ie(l,gt),O=a.useRef(null),T=a.useRef(null),Me=de(T,D),{isFocusVisibleRef:le,onFocus:Ee,onBlur:Te,ref:xe}=Ze(),[k,X]=a.useState(!1);p&&k&&X(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{X(!0),O.current.focus()}}),[]);const[J,Ce]=a.useState(!1);a.useEffect(()=>{Ce(!0)},[]);const ve=J&&!d&&!p;a.useEffect(()=>{k&&b&&!d&&J&&T.current.pulsate()},[d,b,k,J]);function w(s,ce,Ke=g){return H(pe=>(ce&&ce(pe),!Ke&&T.current&&T.current[s](pe),!0))}const Ve=w("start",M),we=w("stop",U),Pe=w("stop",I),Be=w("stop",j),De=w("stop",s=>{k&&s.preventDefault(),L&&L(s)}),Le=w("start",P),Fe=w("stop",_),ke=w("stop",E),Se=w("stop",s=>{Te(s),le.current===!1&&X(!1),h&&h(s)},!1),Ne=H(s=>{O.current||(O.current=s.currentTarget),Ee(s),le.current===!0&&(X(!0),$&&$(s)),K&&K(s)}),Q=()=>{const s=O.current;return u&&u!=="button"&&!(s.tagName==="A"&&s.href)},Z=a.useRef(!1),Ie=H(s=>{b&&!Z.current&&k&&T.current&&s.key===" "&&(Z.current=!0,T.current.stop(s,()=>{T.current.start(s)})),s.target===s.currentTarget&&Q()&&s.key===" "&&s.preventDefault(),f&&f(s),s.target===s.currentTarget&&Q()&&s.key==="Enter"&&!p&&(s.preventDefault(),R&&R(s))}),$e=H(s=>{b&&s.key===" "&&T.current&&k&&!s.defaultPrevented&&(Z.current=!1,T.current.stop(s,()=>{T.current.pulsate(s)})),y&&y(s),R&&s.target===s.currentTarget&&Q()&&s.key===" "&&!s.defaultPrevented&&R(s)});let W=u;W==="button"&&(V.href||V.to)&&(W=C);const z={};W==="button"?(z.type=F===void 0?"button":F,z.disabled=p):(!V.href&&!V.to&&(z.role="button"),p&&(z["aria-disabled"]=p));const je=de(r,xe,O),ue=A({},l,{centerRipple:i,component:u,disabled:p,disableRipple:d,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:k}),Ue=Rt(ue);return N.jsxs(yt,A({as:W,className:x(Ue.root,c),ownerState:ue,onBlur:Se,onClick:R,onContextMenu:we,onFocus:Ne,onKeyDown:Ie,onKeyUp:$e,onMouseDown:Ve,onMouseLeave:De,onMouseUp:Be,onDragLeave:Pe,onTouchEnd:Fe,onTouchMove:ke,onTouchStart:Le,ref:je,tabIndex:p?-1:v,type:F},z,V,{children:[o,ve?N.jsx(ht,A({ref:Me,center:i},B)):null]}))});export{Pt as B,ae as T,Ze as u};
