const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./react-18-CtsMCmcS.js","./index-uubelm5h.js","./index-CfOt2XX2.js"])))=>i.map(i=>d[i]);
import{_ as Ut}from"./iframe-BDZVr6mT.js";import{_ as kt}from"./chunk-H6MOWX77-DTQOW814.js";import{g as Ft,r as k,R as B}from"./index-uubelm5h.js";import{r as Gt}from"./index-CfOt2XX2.js";import"../sb-preview/runtime.js";var Ne={exports:{}};const jt="2.0.0",ut=256,Mt=Number.MAX_SAFE_INTEGER||9007199254740991,Xt=16,Vt=ut-6,xt=["major","premajor","minor","preminor","patch","prepatch","prerelease"];var ie={MAX_LENGTH:ut,MAX_SAFE_COMPONENT_LENGTH:Xt,MAX_SAFE_BUILD_LENGTH:Vt,MAX_SAFE_INTEGER:Mt,RELEASE_TYPES:xt,SEMVER_SPEC_VERSION:jt,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2},Ee={};const Yt=typeof process=="object"&&Ee&&Ee.NODE_DEBUG&&/\bsemver\b/i.test(Ee.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};var oe=Yt;(function(e,t){const{MAX_SAFE_COMPONENT_LENGTH:r,MAX_SAFE_BUILD_LENGTH:n,MAX_LENGTH:o}=ie,a=oe;t=e.exports={};const l=t.re=[],u=t.safeRe=[],i=t.src=[],s=t.t={};let f=0;const p="[a-zA-Z0-9-]",L=[["\\s",1],["\\d",o],[p,n]],d=F=>{for(const[D,G]of L)F=F.split(`${D}*`).join(`${D}{0,${G}}`).split(`${D}+`).join(`${D}{1,${G}}`);return F},R=(F,D,G)=>{const pe=d(D),T=f++;a(F,T,D),s[F]=T,i[T]=D,l[T]=new RegExp(D,G?"g":void 0),u[T]=new RegExp(pe,G?"g":void 0)};R("NUMERICIDENTIFIER","0|[1-9]\\d*"),R("NUMERICIDENTIFIERLOOSE","\\d+"),R("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${p}*`),R("MAINVERSION",`(${i[s.NUMERICIDENTIFIER]})\\.(${i[s.NUMERICIDENTIFIER]})\\.(${i[s.NUMERICIDENTIFIER]})`),R("MAINVERSIONLOOSE",`(${i[s.NUMERICIDENTIFIERLOOSE]})\\.(${i[s.NUMERICIDENTIFIERLOOSE]})\\.(${i[s.NUMERICIDENTIFIERLOOSE]})`),R("PRERELEASEIDENTIFIER",`(?:${i[s.NUMERICIDENTIFIER]}|${i[s.NONNUMERICIDENTIFIER]})`),R("PRERELEASEIDENTIFIERLOOSE",`(?:${i[s.NUMERICIDENTIFIERLOOSE]}|${i[s.NONNUMERICIDENTIFIER]})`),R("PRERELEASE",`(?:-(${i[s.PRERELEASEIDENTIFIER]}(?:\\.${i[s.PRERELEASEIDENTIFIER]})*))`),R("PRERELEASELOOSE",`(?:-?(${i[s.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${i[s.PRERELEASEIDENTIFIERLOOSE]})*))`),R("BUILDIDENTIFIER",`${p}+`),R("BUILD",`(?:\\+(${i[s.BUILDIDENTIFIER]}(?:\\.${i[s.BUILDIDENTIFIER]})*))`),R("FULLPLAIN",`v?${i[s.MAINVERSION]}${i[s.PRERELEASE]}?${i[s.BUILD]}?`),R("FULL",`^${i[s.FULLPLAIN]}$`),R("LOOSEPLAIN",`[v=\\s]*${i[s.MAINVERSIONLOOSE]}${i[s.PRERELEASELOOSE]}?${i[s.BUILD]}?`),R("LOOSE",`^${i[s.LOOSEPLAIN]}$`),R("GTLT","((?:<|>)?=?)"),R("XRANGEIDENTIFIERLOOSE",`${i[s.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),R("XRANGEIDENTIFIER",`${i[s.NUMERICIDENTIFIER]}|x|X|\\*`),R("XRANGEPLAIN",`[v=\\s]*(${i[s.XRANGEIDENTIFIER]})(?:\\.(${i[s.XRANGEIDENTIFIER]})(?:\\.(${i[s.XRANGEIDENTIFIER]})(?:${i[s.PRERELEASE]})?${i[s.BUILD]}?)?)?`),R("XRANGEPLAINLOOSE",`[v=\\s]*(${i[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[s.XRANGEIDENTIFIERLOOSE]})(?:${i[s.PRERELEASELOOSE]})?${i[s.BUILD]}?)?)?`),R("XRANGE",`^${i[s.GTLT]}\\s*${i[s.XRANGEPLAIN]}$`),R("XRANGELOOSE",`^${i[s.GTLT]}\\s*${i[s.XRANGEPLAINLOOSE]}$`),R("COERCEPLAIN",`(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`),R("COERCE",`${i[s.COERCEPLAIN]}(?:$|[^\\d])`),R("COERCEFULL",i[s.COERCEPLAIN]+`(?:${i[s.PRERELEASE]})?(?:${i[s.BUILD]})?(?:$|[^\\d])`),R("COERCERTL",i[s.COERCE],!0),R("COERCERTLFULL",i[s.COERCEFULL],!0),R("LONETILDE","(?:~>?)"),R("TILDETRIM",`(\\s*)${i[s.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",R("TILDE",`^${i[s.LONETILDE]}${i[s.XRANGEPLAIN]}$`),R("TILDELOOSE",`^${i[s.LONETILDE]}${i[s.XRANGEPLAINLOOSE]}$`),R("LONECARET","(?:\\^)"),R("CARETTRIM",`(\\s*)${i[s.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",R("CARET",`^${i[s.LONECARET]}${i[s.XRANGEPLAIN]}$`),R("CARETLOOSE",`^${i[s.LONECARET]}${i[s.XRANGEPLAINLOOSE]}$`),R("COMPARATORLOOSE",`^${i[s.GTLT]}\\s*(${i[s.LOOSEPLAIN]})$|^$`),R("COMPARATOR",`^${i[s.GTLT]}\\s*(${i[s.FULLPLAIN]})$|^$`),R("COMPARATORTRIM",`(\\s*)${i[s.GTLT]}\\s*(${i[s.LOOSEPLAIN]}|${i[s.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",R("HYPHENRANGE",`^\\s*(${i[s.XRANGEPLAIN]})\\s+-\\s+(${i[s.XRANGEPLAIN]})\\s*$`),R("HYPHENRANGELOOSE",`^\\s*(${i[s.XRANGEPLAINLOOSE]})\\s+-\\s+(${i[s.XRANGEPLAINLOOSE]})\\s*$`),R("STAR","(<|>)?=?\\s*\\*"),R("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),R("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(Ne,Ne.exports);var q=Ne.exports;const Wt=Object.freeze({loose:!0}),Ht=Object.freeze({}),Bt=e=>e?typeof e!="object"?Wt:e:Ht;var Oe=Bt;const Ge=/^[0-9]+$/,ft=(e,t)=>{const r=Ge.test(e),n=Ge.test(t);return r&&n&&(e=+e,t=+t),e===t?0:r&&!n?-1:n&&!r?1:e<t?-1:1},Kt=(e,t)=>ft(t,e);var ht={compareIdentifiers:ft,rcompareIdentifiers:Kt};const J=oe,{MAX_LENGTH:je,MAX_SAFE_INTEGER:Q}=ie,{safeRe:Me,t:Xe}=q,qt=Oe,{compareIdentifiers:M}=ht;let zt=class U{constructor(t,r){if(r=qt(r),t instanceof U){if(t.loose===!!r.loose&&t.includePrerelease===!!r.includePrerelease)return t;t=t.version}else if(typeof t!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);if(t.length>je)throw new TypeError(`version is longer than ${je} characters`);J("SemVer",t,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;const n=t.trim().match(r.loose?Me[Xe.LOOSE]:Me[Xe.FULL]);if(!n)throw new TypeError(`Invalid Version: ${t}`);if(this.raw=t,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>Q||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Q||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Q||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map(o=>{if(/^[0-9]+$/.test(o)){const a=+o;if(a>=0&&a<Q)return a}return o}):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(t){if(J("SemVer.compare",this.version,this.options,t),!(t instanceof U)){if(typeof t=="string"&&t===this.version)return 0;t=new U(t,this.options)}return t.version===this.version?0:this.compareMain(t)||this.comparePre(t)}compareMain(t){return t instanceof U||(t=new U(t,this.options)),M(this.major,t.major)||M(this.minor,t.minor)||M(this.patch,t.patch)}comparePre(t){if(t instanceof U||(t=new U(t,this.options)),this.prerelease.length&&!t.prerelease.length)return-1;if(!this.prerelease.length&&t.prerelease.length)return 1;if(!this.prerelease.length&&!t.prerelease.length)return 0;let r=0;do{const n=this.prerelease[r],o=t.prerelease[r];if(J("prerelease compare",r,n,o),n===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(n===void 0)return-1;if(n===o)continue;return M(n,o)}while(++r)}compareBuild(t){t instanceof U||(t=new U(t,this.options));let r=0;do{const n=this.build[r],o=t.build[r];if(J("build compare",r,n,o),n===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(n===void 0)return-1;if(n===o)continue;return M(n,o)}while(++r)}inc(t,r,n){switch(t){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,n);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,n);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,n),this.inc("pre",r,n);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,n),this.inc("pre",r,n);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const o=Number(n)?1:0;if(!r&&n===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[o];else{let a=this.prerelease.length;for(;--a>=0;)typeof this.prerelease[a]=="number"&&(this.prerelease[a]++,a=-2);if(a===-1){if(r===this.prerelease.join(".")&&n===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(o)}}if(r){let a=[r,o];n===!1&&(a=[r]),M(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=a):this.prerelease=a}break}default:throw new Error(`invalid increment argument: ${t}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};var y=zt;const Ve=y,Zt=(e,t,r=!1)=>{if(e instanceof Ve)return e;try{return new Ve(e,t)}catch(n){if(!r)return null;throw n}};var X=Zt;const Jt=X,Qt=(e,t)=>{const r=Jt(e,t);return r?r.version:null};var er=Qt;const tr=X,rr=(e,t)=>{const r=tr(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null};var nr=rr;const xe=y,sr=(e,t,r,n,o)=>{typeof r=="string"&&(o=n,n=r,r=void 0);try{return new xe(e instanceof xe?e.version:e,r).inc(t,n,o).version}catch{return null}};var ir=sr;const Ye=X,or=(e,t)=>{const r=Ye(e,null,!0),n=Ye(t,null,!0),o=r.compare(n);if(o===0)return null;const a=o>0,l=a?r:n,u=a?n:r,i=!!l.prerelease.length;if(!!u.prerelease.length&&!i)return!u.patch&&!u.minor?"major":l.patch?"patch":l.minor?"minor":"major";const f=i?"pre":"";return r.major!==n.major?f+"major":r.minor!==n.minor?f+"minor":r.patch!==n.patch?f+"patch":"prerelease"};var ar=or;const lr=y,cr=(e,t)=>new lr(e,t).major;var ur=cr;const fr=y,hr=(e,t)=>new fr(e,t).minor;var pr=hr;const Er=y,mr=(e,t)=>new Er(e,t).patch;var dr=mr;const $r=X,Rr=(e,t)=>{const r=$r(e,t);return r&&r.prerelease.length?r.prerelease:null};var vr=Rr;const We=y,Ir=(e,t,r)=>new We(e,r).compare(new We(t,r));var P=Ir;const gr=P,Lr=(e,t,r)=>gr(t,e,r);var wr=Lr;const Nr=P,Tr=(e,t)=>Nr(e,t,!0);var Or=Tr;const He=y,Sr=(e,t,r)=>{const n=new He(e,r),o=new He(t,r);return n.compare(o)||n.compareBuild(o)};var Se=Sr;const yr=Se,Ar=(e,t)=>e.sort((r,n)=>yr(r,n,t));var Cr=Ar;const _r=Se,Dr=(e,t)=>e.sort((r,n)=>_r(n,r,t));var Pr=Dr;const br=P,Ur=(e,t,r)=>br(e,t,r)>0;var ae=Ur;const kr=P,Fr=(e,t,r)=>kr(e,t,r)<0;var ye=Fr;const Gr=P,jr=(e,t,r)=>Gr(e,t,r)===0;var pt=jr;const Mr=P,Xr=(e,t,r)=>Mr(e,t,r)!==0;var Et=Xr;const Vr=P,xr=(e,t,r)=>Vr(e,t,r)>=0;var Ae=xr;const Yr=P,Wr=(e,t,r)=>Yr(e,t,r)<=0;var Ce=Wr;const Hr=pt,Br=Et,Kr=ae,qr=Ae,zr=ye,Zr=Ce,Jr=(e,t,r,n)=>{switch(t){case"===":return typeof e=="object"&&(e=e.version),typeof r=="object"&&(r=r.version),e===r;case"!==":return typeof e=="object"&&(e=e.version),typeof r=="object"&&(r=r.version),e!==r;case"":case"=":case"==":return Hr(e,r,n);case"!=":return Br(e,r,n);case">":return Kr(e,r,n);case">=":return qr(e,r,n);case"<":return zr(e,r,n);case"<=":return Zr(e,r,n);default:throw new TypeError(`Invalid operator: ${t}`)}};var mt=Jr;const Qr=y,en=X,{safeRe:ee,t:te}=q,tn=(e,t)=>{if(e instanceof Qr)return e;if(typeof e=="number"&&(e=String(e)),typeof e!="string")return null;t=t||{};let r=null;if(!t.rtl)r=e.match(t.includePrerelease?ee[te.COERCEFULL]:ee[te.COERCE]);else{const i=t.includePrerelease?ee[te.COERCERTLFULL]:ee[te.COERCERTL];let s;for(;(s=i.exec(e))&&(!r||r.index+r[0].length!==e.length);)(!r||s.index+s[0].length!==r.index+r[0].length)&&(r=s),i.lastIndex=s.index+s[1].length+s[2].length;i.lastIndex=-1}if(r===null)return null;const n=r[2],o=r[3]||"0",a=r[4]||"0",l=t.includePrerelease&&r[5]?`-${r[5]}`:"",u=t.includePrerelease&&r[6]?`+${r[6]}`:"";return en(`${n}.${o}.${a}${l}${u}`,t)};var rn=tn;class nn{constructor(){this.max=1e3,this.map=new Map}get(t){const r=this.map.get(t);if(r!==void 0)return this.map.delete(t),this.map.set(t,r),r}delete(t){return this.map.delete(t)}set(t,r){if(!this.delete(t)&&r!==void 0){if(this.map.size>=this.max){const o=this.map.keys().next().value;this.delete(o)}this.map.set(t,r)}return this}}var sn=nn,me,Be;function b(){if(Be)return me;Be=1;const e=/\s+/g;class t{constructor(c,$){if($=o($),c instanceof t)return c.loose===!!$.loose&&c.includePrerelease===!!$.includePrerelease?c:new t(c.raw,$);if(c instanceof a)return this.raw=c.value,this.set=[[c]],this.formatted=void 0,this;if(this.options=$,this.loose=!!$.loose,this.includePrerelease=!!$.includePrerelease,this.raw=c.trim().replace(e," "),this.set=this.raw.split("||").map(E=>this.parseRange(E.trim())).filter(E=>E.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const E=this.set[0];if(this.set=this.set.filter(v=>!F(v[0])),this.set.length===0)this.set=[E];else if(this.set.length>1){for(const v of this.set)if(v.length===1&&D(v[0])){this.set=[v];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let c=0;c<this.set.length;c++){c>0&&(this.formatted+="||");const $=this.set[c];for(let E=0;E<$.length;E++)E>0&&(this.formatted+=" "),this.formatted+=$[E].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(c){const E=((this.options.includePrerelease&&d)|(this.options.loose&&R))+":"+c,v=n.get(E);if(v)return v;const m=this.options.loose,I=m?i[s.HYPHENRANGELOOSE]:i[s.HYPHENRANGE];c=c.replace(I,Pt(this.options.includePrerelease)),l("hyphen replace",c),c=c.replace(i[s.COMPARATORTRIM],f),l("comparator trim",c),c=c.replace(i[s.TILDETRIM],p),l("tilde trim",c),c=c.replace(i[s.CARETTRIM],L),l("caret trim",c);let w=c.split(" ").map(O=>pe(O,this.options)).join(" ").split(/\s+/).map(O=>Dt(O,this.options));m&&(w=w.filter(O=>(l("loose invalid filter",O,this.options),!!O.match(i[s.COMPARATORLOOSE])))),l("range list",w);const g=new Map,N=w.map(O=>new a(O,this.options));for(const O of N){if(F(O))return[O];g.set(O.value,O)}g.size>1&&g.has("")&&g.delete("");const C=[...g.values()];return n.set(E,C),C}intersects(c,$){if(!(c instanceof t))throw new TypeError("a Range is required");return this.set.some(E=>G(E,$)&&c.set.some(v=>G(v,$)&&E.every(m=>v.every(I=>m.intersects(I,$)))))}test(c){if(!c)return!1;if(typeof c=="string")try{c=new u(c,this.options)}catch{return!1}for(let $=0;$<this.set.length;$++)if(bt(this.set[$],c,this.options))return!0;return!1}}me=t;const r=sn,n=new r,o=Oe,a=le(),l=oe,u=y,{safeRe:i,t:s,comparatorTrimReplace:f,tildeTrimReplace:p,caretTrimReplace:L}=q,{FLAG_INCLUDE_PRERELEASE:d,FLAG_LOOSE:R}=ie,F=h=>h.value==="<0.0.0-0",D=h=>h.value==="",G=(h,c)=>{let $=!0;const E=h.slice();let v=E.pop();for(;$&&E.length;)$=E.every(m=>v.intersects(m,c)),v=E.pop();return $},pe=(h,c)=>(l("comp",h,c),h=St(h,c),l("caret",h),h=Tt(h,c),l("tildes",h),h=At(h,c),l("xrange",h),h=_t(h,c),l("stars",h),h),T=h=>!h||h.toLowerCase()==="x"||h==="*",Tt=(h,c)=>h.trim().split(/\s+/).map($=>Ot($,c)).join(" "),Ot=(h,c)=>{const $=c.loose?i[s.TILDELOOSE]:i[s.TILDE];return h.replace($,(E,v,m,I,w)=>{l("tilde",h,E,v,m,I,w);let g;return T(v)?g="":T(m)?g=`>=${v}.0.0 <${+v+1}.0.0-0`:T(I)?g=`>=${v}.${m}.0 <${v}.${+m+1}.0-0`:w?(l("replaceTilde pr",w),g=`>=${v}.${m}.${I}-${w} <${v}.${+m+1}.0-0`):g=`>=${v}.${m}.${I} <${v}.${+m+1}.0-0`,l("tilde return",g),g})},St=(h,c)=>h.trim().split(/\s+/).map($=>yt($,c)).join(" "),yt=(h,c)=>{l("caret",h,c);const $=c.loose?i[s.CARETLOOSE]:i[s.CARET],E=c.includePrerelease?"-0":"";return h.replace($,(v,m,I,w,g)=>{l("caret",h,v,m,I,w,g);let N;return T(m)?N="":T(I)?N=`>=${m}.0.0${E} <${+m+1}.0.0-0`:T(w)?m==="0"?N=`>=${m}.${I}.0${E} <${m}.${+I+1}.0-0`:N=`>=${m}.${I}.0${E} <${+m+1}.0.0-0`:g?(l("replaceCaret pr",g),m==="0"?I==="0"?N=`>=${m}.${I}.${w}-${g} <${m}.${I}.${+w+1}-0`:N=`>=${m}.${I}.${w}-${g} <${m}.${+I+1}.0-0`:N=`>=${m}.${I}.${w}-${g} <${+m+1}.0.0-0`):(l("no pr"),m==="0"?I==="0"?N=`>=${m}.${I}.${w}${E} <${m}.${I}.${+w+1}-0`:N=`>=${m}.${I}.${w}${E} <${m}.${+I+1}.0-0`:N=`>=${m}.${I}.${w} <${+m+1}.0.0-0`),l("caret return",N),N})},At=(h,c)=>(l("replaceXRanges",h,c),h.split(/\s+/).map($=>Ct($,c)).join(" ")),Ct=(h,c)=>{h=h.trim();const $=c.loose?i[s.XRANGELOOSE]:i[s.XRANGE];return h.replace($,(E,v,m,I,w,g)=>{l("xRange",h,E,v,m,I,w,g);const N=T(m),C=N||T(I),O=C||T(w),Y=O;return v==="="&&Y&&(v=""),g=c.includePrerelease?"-0":"",N?v===">"||v==="<"?E="<0.0.0-0":E="*":v&&Y?(C&&(I=0),w=0,v===">"?(v=">=",C?(m=+m+1,I=0,w=0):(I=+I+1,w=0)):v==="<="&&(v="<",C?m=+m+1:I=+I+1),v==="<"&&(g="-0"),E=`${v+m}.${I}.${w}${g}`):C?E=`>=${m}.0.0${g} <${+m+1}.0.0-0`:O&&(E=`>=${m}.${I}.0${g} <${m}.${+I+1}.0-0`),l("xRange return",E),E})},_t=(h,c)=>(l("replaceStars",h,c),h.trim().replace(i[s.STAR],"")),Dt=(h,c)=>(l("replaceGTE0",h,c),h.trim().replace(i[c.includePrerelease?s.GTE0PRE:s.GTE0],"")),Pt=h=>(c,$,E,v,m,I,w,g,N,C,O,Y)=>(T(E)?$="":T(v)?$=`>=${E}.0.0${h?"-0":""}`:T(m)?$=`>=${E}.${v}.0${h?"-0":""}`:I?$=`>=${$}`:$=`>=${$}${h?"-0":""}`,T(N)?g="":T(C)?g=`<${+N+1}.0.0-0`:T(O)?g=`<${N}.${+C+1}.0-0`:Y?g=`<=${N}.${C}.${O}-${Y}`:h?g=`<${N}.${C}.${+O+1}-0`:g=`<=${g}`,`${$} ${g}`.trim()),bt=(h,c,$)=>{for(let E=0;E<h.length;E++)if(!h[E].test(c))return!1;if(c.prerelease.length&&!$.includePrerelease){for(let E=0;E<h.length;E++)if(l(h[E].semver),h[E].semver!==a.ANY&&h[E].semver.prerelease.length>0){const v=h[E].semver;if(v.major===c.major&&v.minor===c.minor&&v.patch===c.patch)return!0}return!1}return!0};return me}var de,Ke;function le(){if(Ke)return de;Ke=1;const e=Symbol("SemVer ANY");class t{static get ANY(){return e}constructor(f,p){if(p=r(p),f instanceof t){if(f.loose===!!p.loose)return f;f=f.value}f=f.trim().split(/\s+/).join(" "),l("comparator",f,p),this.options=p,this.loose=!!p.loose,this.parse(f),this.semver===e?this.value="":this.value=this.operator+this.semver.version,l("comp",this)}parse(f){const p=this.options.loose?n[o.COMPARATORLOOSE]:n[o.COMPARATOR],L=f.match(p);if(!L)throw new TypeError(`Invalid comparator: ${f}`);this.operator=L[1]!==void 0?L[1]:"",this.operator==="="&&(this.operator=""),L[2]?this.semver=new u(L[2],this.options.loose):this.semver=e}toString(){return this.value}test(f){if(l("Comparator.test",f,this.options.loose),this.semver===e||f===e)return!0;if(typeof f=="string")try{f=new u(f,this.options)}catch{return!1}return a(f,this.operator,this.semver,this.options)}intersects(f,p){if(!(f instanceof t))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new i(f.value,p).test(this.value):f.operator===""?f.value===""?!0:new i(this.value,p).test(f.semver):(p=r(p),p.includePrerelease&&(this.value==="<0.0.0-0"||f.value==="<0.0.0-0")||!p.includePrerelease&&(this.value.startsWith("<0.0.0")||f.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&f.operator.startsWith(">")||this.operator.startsWith("<")&&f.operator.startsWith("<")||this.semver.version===f.semver.version&&this.operator.includes("=")&&f.operator.includes("=")||a(this.semver,"<",f.semver,p)&&this.operator.startsWith(">")&&f.operator.startsWith("<")||a(this.semver,">",f.semver,p)&&this.operator.startsWith("<")&&f.operator.startsWith(">")))}}de=t;const r=Oe,{safeRe:n,t:o}=q,a=mt,l=oe,u=y,i=b();return de}const on=b(),an=(e,t,r)=>{try{t=new on(t,r)}catch{return!1}return t.test(e)};var ce=an;const ln=b(),cn=(e,t)=>new ln(e,t).set.map(r=>r.map(n=>n.value).join(" ").trim().split(" "));var un=cn;const fn=y,hn=b(),pn=(e,t,r)=>{let n=null,o=null,a=null;try{a=new hn(t,r)}catch{return null}return e.forEach(l=>{a.test(l)&&(!n||o.compare(l)===-1)&&(n=l,o=new fn(n,r))}),n};var En=pn;const mn=y,dn=b(),$n=(e,t,r)=>{let n=null,o=null,a=null;try{a=new dn(t,r)}catch{return null}return e.forEach(l=>{a.test(l)&&(!n||o.compare(l)===1)&&(n=l,o=new mn(n,r))}),n};var Rn=$n;const $e=y,vn=b(),qe=ae,In=(e,t)=>{e=new vn(e,t);let r=new $e("0.0.0");if(e.test(r)||(r=new $e("0.0.0-0"),e.test(r)))return r;r=null;for(let n=0;n<e.set.length;++n){const o=e.set[n];let a=null;o.forEach(l=>{const u=new $e(l.semver.version);switch(l.operator){case">":u.prerelease.length===0?u.patch++:u.prerelease.push(0),u.raw=u.format();case"":case">=":(!a||qe(u,a))&&(a=u);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${l.operator}`)}}),a&&(!r||qe(r,a))&&(r=a)}return r&&e.test(r)?r:null};var gn=In;const Ln=b(),wn=(e,t)=>{try{return new Ln(e,t).range||"*"}catch{return null}};var Nn=wn;const Tn=y,dt=le(),{ANY:On}=dt,Sn=b(),yn=ce,ze=ae,Ze=ye,An=Ce,Cn=Ae,_n=(e,t,r,n)=>{e=new Tn(e,n),t=new Sn(t,n);let o,a,l,u,i;switch(r){case">":o=ze,a=An,l=Ze,u=">",i=">=";break;case"<":o=Ze,a=Cn,l=ze,u="<",i="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(yn(e,t,n))return!1;for(let s=0;s<t.set.length;++s){const f=t.set[s];let p=null,L=null;if(f.forEach(d=>{d.semver===On&&(d=new dt(">=0.0.0")),p=p||d,L=L||d,o(d.semver,p.semver,n)?p=d:l(d.semver,L.semver,n)&&(L=d)}),p.operator===u||p.operator===i||(!L.operator||L.operator===u)&&a(e,L.semver))return!1;if(L.operator===i&&l(e,L.semver))return!1}return!0};var _e=_n;const Dn=_e,Pn=(e,t,r)=>Dn(e,t,">",r);var bn=Pn;const Un=_e,kn=(e,t,r)=>Un(e,t,"<",r);var Fn=kn;const Je=b(),Gn=(e,t,r)=>(e=new Je(e,r),t=new Je(t,r),e.intersects(t,r));var jn=Gn;const Mn=ce,Xn=P;var Vn=(e,t,r)=>{const n=[];let o=null,a=null;const l=e.sort((f,p)=>Xn(f,p,r));for(const f of l)Mn(f,t,r)?(a=f,o||(o=f)):(a&&n.push([o,a]),a=null,o=null);o&&n.push([o,null]);const u=[];for(const[f,p]of n)f===p?u.push(f):!p&&f===l[0]?u.push("*"):p?f===l[0]?u.push(`<=${p}`):u.push(`${f} - ${p}`):u.push(`>=${f}`);const i=u.join(" || "),s=typeof t.raw=="string"?t.raw:String(t);return i.length<s.length?i:t};const Qe=b(),De=le(),{ANY:Re}=De,W=ce,Pe=P,xn=(e,t,r={})=>{if(e===t)return!0;e=new Qe(e,r),t=new Qe(t,r);let n=!1;e:for(const o of e.set){for(const a of t.set){const l=Wn(o,a,r);if(n=n||l!==null,l)continue e}if(n)return!1}return!0},Yn=[new De(">=0.0.0-0")],et=[new De(">=0.0.0")],Wn=(e,t,r)=>{if(e===t)return!0;if(e.length===1&&e[0].semver===Re){if(t.length===1&&t[0].semver===Re)return!0;r.includePrerelease?e=Yn:e=et}if(t.length===1&&t[0].semver===Re){if(r.includePrerelease)return!0;t=et}const n=new Set;let o,a;for(const d of e)d.operator===">"||d.operator===">="?o=tt(o,d,r):d.operator==="<"||d.operator==="<="?a=rt(a,d,r):n.add(d.semver);if(n.size>1)return null;let l;if(o&&a){if(l=Pe(o.semver,a.semver,r),l>0)return null;if(l===0&&(o.operator!==">="||a.operator!=="<="))return null}for(const d of n){if(o&&!W(d,String(o),r)||a&&!W(d,String(a),r))return null;for(const R of t)if(!W(d,String(R),r))return!1;return!0}let u,i,s,f,p=a&&!r.includePrerelease&&a.semver.prerelease.length?a.semver:!1,L=o&&!r.includePrerelease&&o.semver.prerelease.length?o.semver:!1;p&&p.prerelease.length===1&&a.operator==="<"&&p.prerelease[0]===0&&(p=!1);for(const d of t){if(f=f||d.operator===">"||d.operator===">=",s=s||d.operator==="<"||d.operator==="<=",o){if(L&&d.semver.prerelease&&d.semver.prerelease.length&&d.semver.major===L.major&&d.semver.minor===L.minor&&d.semver.patch===L.patch&&(L=!1),d.operator===">"||d.operator===">="){if(u=tt(o,d,r),u===d&&u!==o)return!1}else if(o.operator===">="&&!W(o.semver,String(d),r))return!1}if(a){if(p&&d.semver.prerelease&&d.semver.prerelease.length&&d.semver.major===p.major&&d.semver.minor===p.minor&&d.semver.patch===p.patch&&(p=!1),d.operator==="<"||d.operator==="<="){if(i=rt(a,d,r),i===d&&i!==a)return!1}else if(a.operator==="<="&&!W(a.semver,String(d),r))return!1}if(!d.operator&&(a||o)&&l!==0)return!1}return!(o&&s&&!a&&l!==0||a&&f&&!o&&l!==0||L||p)},tt=(e,t,r)=>{if(!e)return t;const n=Pe(e.semver,t.semver,r);return n>0?e:n<0||t.operator===">"&&e.operator===">="?t:e},rt=(e,t,r)=>{if(!e)return t;const n=Pe(e.semver,t.semver,r);return n<0?e:n>0||t.operator==="<"&&e.operator==="<="?t:e};var Hn=xn;const ve=q,nt=ie,Bn=y,st=ht,Kn=X,qn=er,zn=nr,Zn=ir,Jn=ar,Qn=ur,es=pr,ts=dr,rs=vr,ns=P,ss=wr,is=Or,os=Se,as=Cr,ls=Pr,cs=ae,us=ye,fs=pt,hs=Et,ps=Ae,Es=Ce,ms=mt,ds=rn,$s=le(),Rs=b(),vs=ce,Is=un,gs=En,Ls=Rn,ws=gn,Ns=Nn,Ts=_e,Os=bn,Ss=Fn,ys=jn,As=Vn,Cs=Hn;var _s={parse:Kn,valid:qn,clean:zn,inc:Zn,diff:Jn,major:Qn,minor:es,patch:ts,prerelease:rs,compare:ns,rcompare:ss,compareLoose:is,compareBuild:os,sort:as,rsort:ls,gt:cs,lt:us,eq:fs,neq:hs,gte:ps,lte:Es,cmp:ms,coerce:ds,Comparator:$s,Range:Rs,satisfies:vs,toComparators:Is,maxSatisfying:gs,minSatisfying:Ls,minVersion:ws,validRange:Ns,outside:Ts,gtr:Os,ltr:Ss,intersects:ys,simplifyRange:As,subset:Cs,SemVer:Bn,re:ve.re,src:ve.src,tokens:ve.t,SEMVER_SPEC_VERSION:nt.SEMVER_SPEC_VERSION,RELEASE_TYPES:nt.RELEASE_TYPES,compareIdentifiers:st.compareIdentifiers,rcompareIdentifiers:st.rcompareIdentifiers};const it=Ft(_s);var S={};/**
 * @license React
 * react-dom-test-utils.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V=k,be=Gt;function $t(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ot(e){if($t(e)!==e)throw Error("Unable to find node on an unmounted component.")}function Ds(e){var t=e.alternate;if(!t){if(t=$t(e),t===null)throw Error("Unable to find node on an unmounted component.");return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var a=o.alternate;if(a===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===r)return ot(o),e;if(a===n)return ot(o),t;a=a.sibling}throw Error("Unable to find node on an unmounted component.")}if(r.return!==n.return)r=o,n=a;else{for(var l=!1,u=o.child;u;){if(u===r){l=!0,r=o,n=a;break}if(u===n){l=!0,n=o,r=a;break}u=u.sibling}if(!l){for(u=a.child;u;){if(u===r){l=!0,r=a,n=o;break}if(u===n){l=!0,n=a,r=o;break}u=u.sibling}if(!l)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(r.alternate!==n)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(r.tag!==3)throw Error("Unable to find node on an unmounted component.");return r.stateNode.current===r?e:t}var A=Object.assign;function Ie(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function re(){return!0}function at(){return!1}function _(e){function t(r,n,o,a,l){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(r=e[u],this[u]=r?r(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?re:at,this.isPropagationStopped=at,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=re)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=re)},persist:function(){},isPersistent:re}),t}var x={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ps=_(x),z=A({},x,{view:0,detail:0});_(z);var ge,Le,H,ue=A({},z,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ue,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==H&&(H&&e.type==="mousemove"?(ge=e.screenX-H.screenX,Le=e.screenY-H.screenY):Le=ge=0,H=e),ge)},movementY:function(e){return"movementY"in e?e.movementY:Le}});_(ue);var bs=A({},ue,{dataTransfer:0});_(bs);var Us=A({},z,{relatedTarget:0});_(Us);var ks=A({},x,{animationName:0,elapsedTime:0,pseudoElement:0});_(ks);var Fs=A({},x,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}});_(Fs);var Gs=A({},x,{data:0});_(Gs);var js={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ms={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xs={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vs(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xs[e])?!!t[e]:!1}function Ue(){return Vs}var xs=A({},z,{key:function(e){if(e.key){var t=js[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ie(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ms[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ue,charCode:function(e){return e.type==="keypress"?Ie(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ie(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}});_(xs);var Ys=A({},ue,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0});_(Ys);var Ws=A({},z,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ue});_(Ws);var Hs=A({},x,{propertyName:0,elapsedTime:0,pseudoElement:0});_(Hs);var Bs=A({},ue,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0});_(Bs);function Ks(e,t,r,n,o,a,l,u,i){var s=Array.prototype.slice.call(arguments,3);try{t.apply(r,s)}catch(f){this.onError(f)}}var K=!1,ne=null,se=!1,Te=null,qs={onError:function(e){K=!0,ne=e}};function zs(e,t,r,n,o,a,l,u,i){K=!1,ne=null,Ks.apply(qs,arguments)}function Zs(e,t,r,n,o,a,l,u,i){if(zs.apply(this,arguments),K){if(K){var s=ne;K=!1,ne=null}else throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");se||(se=!0,Te=s)}}var ke=Array.isArray,Z=be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,Js=Z[0],Qs=Z[1],ei=Z[2],ti=Z[3],ri=Z[4],ni=V.unstable_act;function si(){}function ii(e,t){if(!e)return[];if(e=Ds(e),!e)return[];for(var r=e,n=[];;){if(r.tag===5||r.tag===6||r.tag===1||r.tag===0){var o=r.stateNode;t(o)&&n.push(o)}if(r.child)r.child.return=r,r=r.child;else{if(r===e)return n;for(;!r.sibling;){if(!r.return||r.return===e)return n;r=r.return}r.sibling.return=r.return,r=r.sibling}}}function j(e,t){if(e&&!e._reactInternals){var r=String(e);throw e=ke(e)?"an array":e&&e.nodeType===1&&e.tagName?"a DOM node":r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r,Error(t+"(...): the first argument must be a React class instance. Instead received: "+(e+"."))}}function fe(e){return!(!e||e.nodeType!==1||!e.tagName)}function Fe(e){return fe(e)?!1:e!=null&&typeof e.render=="function"&&typeof e.setState=="function"}function Rt(e,t){return Fe(e)?e._reactInternals.type===t:!1}function he(e,t){return j(e,"findAllInRenderedTree"),e?ii(e._reactInternals,t):[]}function vt(e,t){return j(e,"scryRenderedDOMComponentsWithClass"),he(e,function(r){if(fe(r)){var n=r.className;typeof n!="string"&&(n=r.getAttribute("class")||"");var o=n.split(/\s+/);if(!ke(t)){if(t===void 0)throw Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");t=t.split(/\s+/)}return t.every(function(a){return o.indexOf(a)!==-1})}return!1})}function It(e,t){return j(e,"scryRenderedDOMComponentsWithTag"),he(e,function(r){return fe(r)&&r.tagName.toUpperCase()===t.toUpperCase()})}function gt(e,t){return j(e,"scryRenderedComponentsWithType"),he(e,function(r){return Rt(r,t)})}function lt(e,t,r){var n=e.type||"unknown-event";e.currentTarget=Qs(r),Zs(n,t,void 0,e),e.currentTarget=null}function Lt(e,t,r){for(var n=[];e;){n.push(e);do e=e.return;while(e&&e.tag!==5);e=e||null}for(e=n.length;0<e--;)t(n[e],"captured",r);for(e=0;e<n.length;e++)t(n[e],"bubbled",r)}function wt(e,t){var r=e.stateNode;if(!r)return null;var n=ei(r);if(!n)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error("Expected `"+t+"` listener to be a function, instead got a value of `"+typeof r+"` type.");return r}function oi(e,t,r){e&&r&&r._reactName&&(t=wt(e,r._reactName))&&(r._dispatchListeners==null&&(r._dispatchListeners=[]),r._dispatchInstances==null&&(r._dispatchInstances=[]),r._dispatchListeners.push(t),r._dispatchInstances.push(e))}function ai(e,t,r){var n=r._reactName;t==="captured"&&(n+="Capture"),(t=wt(e,n))&&(r._dispatchListeners==null&&(r._dispatchListeners=[]),r._dispatchInstances==null&&(r._dispatchInstances=[]),r._dispatchListeners.push(t),r._dispatchInstances.push(e))}var Nt={},li=new Set(["mouseEnter","mouseLeave","pointerEnter","pointerLeave"]);function ci(e){return function(t,r){if(V.isValidElement(t))throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");if(Fe(t))throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");var n="on"+e[0].toUpperCase()+e.slice(1),o=new si;o.target=t,o.type=e.toLowerCase();var a=Js(t),l=new Ps(n,o.type,a,o,t);l.persist(),A(l,r),li.has(e)?l&&l._reactName&&oi(l._targetInst,null,l):l&&l._reactName&&Lt(l._targetInst,ai,l),be.unstable_batchedUpdates(function(){if(ti(t),l){var u=l._dispatchListeners,i=l._dispatchInstances;if(ke(u))for(var s=0;s<u.length&&!l.isPropagationStopped();s++)lt(l,u[s],i[s]);else u&&lt(l,u,i);l._dispatchListeners=null,l._dispatchInstances=null,l.isPersistent()||l.constructor.release(l)}if(se)throw u=Te,se=!1,Te=null,u}),ri()}}"blur cancel click close contextMenu copy cut auxClick doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play pointerCancel pointerDown pointerUp rateChange reset resize seeked submit touchCancel touchEnd touchStart volumeChange drag dragEnter dragExit dragLeave dragOver mouseMove mouseOut mouseOver pointerMove pointerOut pointerOver scroll toggle touchMove wheel abort animationEnd animationIteration animationStart canPlay canPlayThrough durationChange emptied encrypted ended error gotPointerCapture load loadedData loadedMetadata loadStart lostPointerCapture playing progress seeking stalled suspend timeUpdate transitionEnd waiting mouseEnter mouseLeave pointerEnter pointerLeave change select beforeInput compositionEnd compositionStart compositionUpdate".split(" ").forEach(function(e){Nt[e]=ci(e)});S.Simulate=Nt;S.act=ni;S.findAllInRenderedTree=he;S.findRenderedComponentWithType=function(e,t){if(j(e,"findRenderedComponentWithType"),e=gt(e,t),e.length!==1)throw Error("Did not find exactly one match (found: "+e.length+") for componentType:"+t);return e[0]};S.findRenderedDOMComponentWithClass=function(e,t){if(j(e,"findRenderedDOMComponentWithClass"),e=vt(e,t),e.length!==1)throw Error("Did not find exactly one match (found: "+e.length+") for class:"+t);return e[0]};S.findRenderedDOMComponentWithTag=function(e,t){if(j(e,"findRenderedDOMComponentWithTag"),e=It(e,t),e.length!==1)throw Error("Did not find exactly one match (found: "+e.length+") for tag:"+t);return e[0]};S.isCompositeComponent=Fe;S.isCompositeComponentWithType=Rt;S.isDOMComponent=fe;S.isDOMComponentElement=function(e){return!!(e&&V.isValidElement(e)&&e.tagName)};S.isElement=function(e){return V.isValidElement(e)};S.isElementOfType=function(e,t){return V.isValidElement(e)&&e.type===t};S.mockComponent=function(e,t){return t=t||e.mockTagName||"div",e.prototype.render.mockImplementation(function(){return V.createElement(t,null,this.props.children)}),this};S.nativeTouchData=function(e,t){return{touches:[{pageX:e,pageY:t}]}};S.renderIntoDocument=function(e){var t=document.createElement("div");return be.render(e,t)};S.scryRenderedComponentsWithType=gt;S.scryRenderedDOMComponentsWithClass=vt;S.scryRenderedDOMComponentsWithTag=It;S.traverseTwoPhase=Lt;const{global:ui}=__STORYBOOK_MODULE_GLOBAL__;var fi={};kt(fi,{decorators:()=>Ri,mount:()=>di,parameters:()=>$i,render:()=>hi,renderToCanvas:()=>mi});var hi=(e,t)=>{let{id:r,component:n}=t;if(!n)throw new Error(`Unable to render story ${r} as the component annotation is missing from the default export`);return B.createElement(n,{...e})};function pi(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var{FRAMEWORK_OPTIONS:we}=ui,Ei=class extends k.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidMount(){let{hasError:e}=this.state,{showMain:t}=this.props;e||t()}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:t}},ct=we!=null&&we.strictMode?k.StrictMode:k.Fragment;async function mi({storyContext:e,unboundStoryFn:t,showMain:r,showException:n,forceRemount:o},a){var p,L;let{renderElement:l,unmountElement:u}=await Ut(()=>import("./react-18-CtsMCmcS.js"),__vite__mapDeps([0,1,2]),import.meta.url),i=t,s=pi()?B.createElement(i,{...e}):B.createElement(Ei,{showMain:r,showException:n},B.createElement(i,{...e})),f=ct?B.createElement(ct,null,s):s;return o&&u(a),await l(f,a,(L=(p=e==null?void 0:e.parameters)==null?void 0:p.react)==null?void 0:L.rootOptions),()=>u(a)}var di=e=>async t=>(t!=null&&(e.originalStoryFn=()=>t),await e.renderToCanvas(),e.canvas),$i={renderer:"react"},Ri=[(e,t)=>{var o,a;if(!((a=(o=t.parameters)==null?void 0:o.react)!=null&&a.rsc))return k.createElement(e,null);let r=it.major(k.version),n=it.minor(k.version);if(r<18||r===18&&n<3)throw new Error("React Server Components require React >= 18.3");return k.createElement(k.Suspense,null,k.createElement(e,null))}];export{Ri as decorators,di as mount,$i as parameters,hi as render,mi as renderToCanvas};
