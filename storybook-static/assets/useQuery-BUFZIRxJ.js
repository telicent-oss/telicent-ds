var Ht=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var r=(e,t,s)=>(Ht(e,t,"read from private field"),s?s.call(e):t.get(e)),h=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},a=(e,t,s,i)=>(Ht(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s);var jt=(e,t,s,i)=>({set _(n){a(e,t,n,s)},get _(){return r(e,t,i)}}),f=(e,t,s)=>(Ht(e,t,"access private method"),s);import{r as j}from"./index-BwDkhjyp.js";import{j as qe}from"./jsx-runtime-Nms4Y4qS.js";var xt=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},wt=typeof window>"u"||"Deno"in globalThis;function x(){}function Te(e,t){return typeof e=="function"?e(t):e}function Nt(e){return typeof e=="number"&&e>=0&&e!==1/0}function we(e,t){return Math.max(e+(t||0)-Date.now(),0)}function ne(e,t){const{type:s="all",exact:i,fetchStatus:n,predicate:u,queryKey:c,stale:l}=e;if(c){if(i){if(t.queryHash!==ee(c,t.options))return!1}else if(!Ft(t.queryKey,c))return!1}if(s!=="all"){const b=t.isActive();if(s==="active"&&!b||s==="inactive"&&b)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||n&&n!==t.state.fetchStatus||u&&!u(t))}function ae(e,t){const{exact:s,status:i,predicate:n,mutationKey:u}=e;if(u){if(!t.options.mutationKey)return!1;if(s){if(Rt(t.options.mutationKey)!==Rt(u))return!1}else if(!Ft(t.options.mutationKey,u))return!1}return!(i&&t.state.status!==i||n&&!n(t))}function ee(e,t){return((t==null?void 0:t.queryKeyHashFn)||Rt)(e)}function Rt(e){return JSON.stringify(e,(t,s)=>_t(s)?Object.keys(s).sort().reduce((i,n)=>(i[n]=s[n],i),{}):s)}function Ft(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(s=>!Ft(e[s],t[s])):!1}function Ce(e,t){if(e===t)return e;const s=ue(e)&&ue(t);if(s||_t(e)&&_t(t)){const i=s?e:Object.keys(e),n=i.length,u=s?t:Object.keys(t),c=u.length,l=s?[]:{};let b=0;for(let C=0;C<c;C++){const v=s?C:u[C];(!s&&i.includes(v)||s)&&e[v]===void 0&&t[v]===void 0?(l[v]=void 0,b++):(l[v]=Ce(e[v],t[v]),l[v]===e[v]&&e[v]!==void 0&&b++)}return n===c&&b===n?e:l}return t}function Bt(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(e[s]!==t[s])return!1;return!0}function ue(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function _t(e){if(!oe(e))return!1;const t=e.constructor;if(t===void 0)return!0;const s=t.prototype;return!(!oe(s)||!s.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function oe(e){return Object.prototype.toString.call(e)==="[object Object]"}function Ie(e){return new Promise(t=>{setTimeout(t,e)})}function zt(e,t,s){return typeof s.structuralSharing=="function"?s.structuralSharing(e,t):s.structuralSharing!==!1?Ce(e,t):t}function Ue(e,t,s=0){const i=[...e,t];return s&&i.length>s?i.slice(1):i}function xe(e,t,s=0){const i=[t,...e];return s&&i.length>s?i.slice(0,-1):i}var se=Symbol(),tt,W,ot,de,je=(de=class extends xt{constructor(){super();h(this,tt,void 0);h(this,W,void 0);h(this,ot,void 0);a(this,ot,t=>{if(!wt&&window.addEventListener){const s=()=>t();return window.addEventListener("visibilitychange",s,!1),()=>{window.removeEventListener("visibilitychange",s)}}})}onSubscribe(){r(this,W)||this.setEventListener(r(this,ot))}onUnsubscribe(){var t;this.hasListeners()||((t=r(this,W))==null||t.call(this),a(this,W,void 0))}setEventListener(t){var s;a(this,ot,t),(s=r(this,W))==null||s.call(this),a(this,W,t(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(t){r(this,tt)!==t&&(a(this,tt,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(s=>{s(t)})}isFocused(){var t;return typeof r(this,tt)=="boolean"?r(this,tt):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},tt=new WeakMap,W=new WeakMap,ot=new WeakMap,de),ie=new je,ht,$,ct,fe,Le=(fe=class extends xt{constructor(){super();h(this,ht,!0);h(this,$,void 0);h(this,ct,void 0);a(this,ct,t=>{if(!wt&&window.addEventListener){const s=()=>t(!0),i=()=>t(!1);return window.addEventListener("online",s,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",s),window.removeEventListener("offline",i)}}})}onSubscribe(){r(this,$)||this.setEventListener(r(this,ct))}onUnsubscribe(){var t;this.hasListeners()||((t=r(this,$))==null||t.call(this),a(this,$,void 0))}setEventListener(t){var s;a(this,ct,t),(s=r(this,$))==null||s.call(this),a(this,$,t(this.setOnline.bind(this)))}setOnline(t){r(this,ht)!==t&&(a(this,ht,t),this.listeners.forEach(i=>{i(t)}))}isOnline(){return r(this,ht)}},ht=new WeakMap,$=new WeakMap,ct=new WeakMap,fe),Kt=new Le;function Ke(e){return Math.min(1e3*2**e,3e4)}function Re(e){return(e??"online")==="online"?Kt.isOnline():!0}var Fe=class{constructor(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Gt(e){return e instanceof Fe}function Se(e){let t=!1,s=0,i=!1,n,u,c;const l=new Promise((g,p)=>{u=g,c=p}),b=g=>{var p;i||(S(new Fe(g)),(p=e.abort)==null||p.call(e))},C=()=>{t=!0},v=()=>{t=!1},y=()=>ie.isFocused()&&(e.networkMode==="always"||Kt.isOnline())&&e.canRun(),o=()=>Re(e.networkMode)&&e.canRun(),d=g=>{var p;i||(i=!0,(p=e.onSuccess)==null||p.call(e,g),n==null||n(),u(g))},S=g=>{var p;i||(i=!0,(p=e.onError)==null||p.call(e,g),n==null||n(),c(g))},E=()=>new Promise(g=>{var p;n=O=>{(i||y())&&g(O)},(p=e.onPause)==null||p.call(e)}).then(()=>{var g;n=void 0,i||(g=e.onContinue)==null||g.call(e)}),R=()=>{if(i)return;let g;try{g=e.fn()}catch(p){g=Promise.reject(p)}Promise.resolve(g).then(d).catch(p=>{var H;if(i)return;const O=e.retry??(wt?0:3),P=e.retryDelay??Ke,D=typeof P=="function"?P(s,p):P,k=O===!0||typeof O=="number"&&s<O||typeof O=="function"&&O(s,p);if(t||!k){S(p);return}s++,(H=e.onFail)==null||H.call(e,s,p),Ie(D).then(()=>y()?void 0:E()).then(()=>{t?S(p):R()})})};return{promise:l,cancel:b,continue:()=>(n==null||n(),l),cancelRetry:C,continueRetry:v,canStart:o,start:()=>(o()?R():E().then(R),l)}}function ke(){let e=[],t=0,s=o=>{o()},i=o=>{o()},n=o=>setTimeout(o,0);const u=o=>{n=o},c=o=>{let d;t++;try{d=o()}finally{t--,t||C()}return d},l=o=>{t?e.push(o):n(()=>{s(o)})},b=o=>(...d)=>{l(()=>{o(...d)})},C=()=>{const o=e;e=[],o.length&&n(()=>{i(()=>{o.forEach(d=>{s(d)})})})};return{batch:c,batchCalls:b,schedule:l,setNotifyFunction:o=>{s=o},setBatchNotifyFunction:o=>{i=o},setScheduler:u}}var Q=ke(),et,ye,Pe=(ye=class{constructor(){h(this,et,void 0)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Nt(this.gcTime)&&a(this,et,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(wt?1/0:5*60*1e3))}clearGcTimeout(){r(this,et)&&(clearTimeout(r(this,et)),a(this,et,void 0))}},et=new WeakMap,ye),lt,dt,U,M,St,st,K,z,pe,He=(pe=class extends Pe{constructor(t){super();h(this,K);h(this,lt,void 0);h(this,dt,void 0);h(this,U,void 0);h(this,M,void 0);h(this,St,void 0);h(this,st,void 0);a(this,st,!1),a(this,St,t.defaultOptions),this.setOptions(t.options),this.observers=[],a(this,U,t.cache),this.queryKey=t.queryKey,this.queryHash=t.queryHash,a(this,lt,t.state||Ge(this.options)),this.state=r(this,lt),this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...r(this,St),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&r(this,U).remove(this)}setData(t,s){const i=zt(this.state.data,t,this.options);return f(this,K,z).call(this,{data:i,type:"success",dataUpdatedAt:s==null?void 0:s.updatedAt,manual:s==null?void 0:s.manual}),i}setState(t,s){f(this,K,z).call(this,{type:"setState",state:t,setStateOptions:s})}cancel(t){var i,n;const s=(i=r(this,M))==null?void 0:i.promise;return(n=r(this,M))==null||n.cancel(t),s?s.then(x).catch(x):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(r(this,lt))}isActive(){return this.observers.some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(t=0){return this.state.isInvalidated||this.state.data===void 0||!we(this.state.dataUpdatedAt,t)}onFocus(){var s;const t=this.observers.find(i=>i.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(s=r(this,M))==null||s.continue()}onOnline(){var s;const t=this.observers.find(i=>i.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(s=r(this,M))==null||s.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),r(this,U).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(s=>s!==t),this.observers.length||(r(this,M)&&(r(this,st)?r(this,M).cancel({revert:!0}):r(this,M).cancelRetry()),this.scheduleGc()),r(this,U).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||f(this,K,z).call(this,{type:"invalidate"})}fetch(t,s){var C,v,y;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(s!=null&&s.cancelRefetch))this.cancel({silent:!0});else if(r(this,M))return r(this,M).continueRetry(),r(this,M).promise}if(t&&this.setOptions(t),!this.options.queryFn){const o=this.observers.find(d=>d.options.queryFn);o&&this.setOptions(o.options)}const i=new AbortController,n={queryKey:this.queryKey,meta:this.meta},u=o=>{Object.defineProperty(o,"signal",{enumerable:!0,get:()=>(a(this,st,!0),i.signal)})};u(n);const c=()=>!this.options.queryFn||this.options.queryFn===se?Promise.reject(new Error(`Missing queryFn: '${this.options.queryHash}'`)):(a(this,st,!1),this.options.persister?this.options.persister(this.options.queryFn,n,this):this.options.queryFn(n)),l={fetchOptions:s,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:c};u(l),(C=this.options.behavior)==null||C.onFetch(l,this),a(this,dt,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((v=l.fetchOptions)==null?void 0:v.meta))&&f(this,K,z).call(this,{type:"fetch",meta:(y=l.fetchOptions)==null?void 0:y.meta});const b=o=>{var d,S,E,R;Gt(o)&&o.silent||f(this,K,z).call(this,{type:"error",error:o}),Gt(o)||((S=(d=r(this,U).config).onError)==null||S.call(d,o,this),(R=(E=r(this,U).config).onSettled)==null||R.call(E,this.state.data,o,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return a(this,M,Se({fn:l.fetchFn,abort:i.abort.bind(i),onSuccess:o=>{var d,S,E,R;if(o===void 0){b(new Error(`${this.queryHash} data is undefined`));return}this.setData(o),(S=(d=r(this,U).config).onSuccess)==null||S.call(d,o,this),(R=(E=r(this,U).config).onSettled)==null||R.call(E,o,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:b,onFail:(o,d)=>{f(this,K,z).call(this,{type:"failed",failureCount:o,error:d})},onPause:()=>{f(this,K,z).call(this,{type:"pause"})},onContinue:()=>{f(this,K,z).call(this,{type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode,canRun:()=>!0})),r(this,M).start()}},lt=new WeakMap,dt=new WeakMap,U=new WeakMap,M=new WeakMap,St=new WeakMap,st=new WeakMap,K=new WeakSet,z=function(t){const s=i=>{switch(t.type){case"failed":return{...i,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...Ee(i.data,this.options),fetchMeta:t.meta??null};case"success":return{...i,data:t.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const n=t.error;return Gt(n)&&n.revert&&r(this,dt)?{...r(this,dt),fetchStatus:"idle"}:{...i,error:n,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:n,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...t.state}}};this.state=s(this.state),Q.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),r(this,U).notify({query:this,type:"updated",action:t})})},pe);function Ee(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Re(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function Ge(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,s=t!==void 0,i=s?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}var G,me,Ne=(me=class extends xt{constructor(t={}){super();h(this,G,void 0);this.config=t,a(this,G,new Map)}build(t,s,i){const n=s.queryKey,u=s.queryHash??ee(n,s);let c=this.get(u);return c||(c=new He({cache:this,queryKey:n,queryHash:u,options:t.defaultQueryOptions(s),state:i,defaultOptions:t.getQueryDefaults(n)}),this.add(c)),c}add(t){r(this,G).has(t.queryHash)||(r(this,G).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const s=r(this,G).get(t.queryHash);s&&(t.destroy(),s===t&&r(this,G).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){Q.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return r(this,G).get(t)}getAll(){return[...r(this,G).values()]}find(t){const s={exact:!0,...t};return this.getAll().find(i=>ne(s,i))}findAll(t={}){const s=this.getAll();return Object.keys(t).length>0?s.filter(i=>ne(t,i)):s}notify(t){Q.batch(()=>{this.listeners.forEach(s=>{s(t)})})}onFocus(){Q.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){Q.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},G=new WeakMap,me),N,A,it,B,V,ve,Be=(ve=class extends Pe{constructor(t){super();h(this,B);h(this,N,void 0);h(this,A,void 0);h(this,it,void 0);this.mutationId=t.mutationId,a(this,A,t.mutationCache),a(this,N,[]),this.state=t.state||_e(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){r(this,N).includes(t)||(r(this,N).push(t),this.clearGcTimeout(),r(this,A).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){a(this,N,r(this,N).filter(s=>s!==t)),this.scheduleGc(),r(this,A).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){r(this,N).length||(this.state.status==="pending"?this.scheduleGc():r(this,A).remove(this))}continue(){var t;return((t=r(this,it))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var n,u,c,l,b,C,v,y,o,d,S,E,R,g,p,O,P,D,k,H;a(this,it,Se({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(m,L)=>{f(this,B,V).call(this,{type:"failed",failureCount:m,error:L})},onPause:()=>{f(this,B,V).call(this,{type:"pause"})},onContinue:()=>{f(this,B,V).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>r(this,A).canRun(this)}));const s=this.state.status==="pending",i=!r(this,it).canStart();try{if(!s){f(this,B,V).call(this,{type:"pending",variables:t,isPaused:i}),await((u=(n=r(this,A).config).onMutate)==null?void 0:u.call(n,t,this));const L=await((l=(c=this.options).onMutate)==null?void 0:l.call(c,t));L!==this.state.context&&f(this,B,V).call(this,{type:"pending",context:L,variables:t,isPaused:i})}const m=await r(this,it).start();return await((C=(b=r(this,A).config).onSuccess)==null?void 0:C.call(b,m,t,this.state.context,this)),await((y=(v=this.options).onSuccess)==null?void 0:y.call(v,m,t,this.state.context)),await((d=(o=r(this,A).config).onSettled)==null?void 0:d.call(o,m,null,this.state.variables,this.state.context,this)),await((E=(S=this.options).onSettled)==null?void 0:E.call(S,m,null,t,this.state.context)),f(this,B,V).call(this,{type:"success",data:m}),m}catch(m){try{throw await((g=(R=r(this,A).config).onError)==null?void 0:g.call(R,m,t,this.state.context,this)),await((O=(p=this.options).onError)==null?void 0:O.call(p,m,t,this.state.context)),await((D=(P=r(this,A).config).onSettled)==null?void 0:D.call(P,void 0,m,this.state.variables,this.state.context,this)),await((H=(k=this.options).onSettled)==null?void 0:H.call(k,void 0,m,t,this.state.context)),m}finally{f(this,B,V).call(this,{type:"error",error:m})}}finally{r(this,A).runNext(this)}}},N=new WeakMap,A=new WeakMap,it=new WeakMap,B=new WeakSet,V=function(t){const s=i=>{switch(t.type){case"failed":return{...i,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...i,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:t.error,failureCount:i.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=s(this.state),Q.batch(()=>{r(this,N).forEach(i=>{i.onMutationUpdate(t)}),r(this,A).notify({mutation:this,type:"updated",action:t})})},ve);function _e(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var I,Pt,be,ze=(be=class extends xt{constructor(t={}){super();h(this,I,void 0);h(this,Pt,void 0);this.config=t,a(this,I,new Map),a(this,Pt,Date.now())}build(t,s,i){const n=new Be({mutationCache:this,mutationId:++jt(this,Pt)._,options:t.defaultMutationOptions(s),state:i});return this.add(n),n}add(t){const s=Lt(t),i=r(this,I).get(s)??[];i.push(t),r(this,I).set(s,i),this.notify({type:"added",mutation:t})}remove(t){var i;const s=Lt(t);if(r(this,I).has(s)){const n=(i=r(this,I).get(s))==null?void 0:i.filter(u=>u!==t);n&&(n.length===0?r(this,I).delete(s):r(this,I).set(s,n))}this.notify({type:"removed",mutation:t})}canRun(t){var i;const s=(i=r(this,I).get(Lt(t)))==null?void 0:i.find(n=>n.state.status==="pending");return!s||s===t}runNext(t){var i;const s=(i=r(this,I).get(Lt(t)))==null?void 0:i.find(n=>n!==t&&n.state.isPaused);return(s==null?void 0:s.continue())??Promise.resolve()}clear(){Q.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[...r(this,I).values()].flat()}find(t){const s={exact:!0,...t};return this.getAll().find(i=>ae(s,i))}findAll(t={}){return this.getAll().filter(s=>ae(t,s))}notify(t){Q.batch(()=>{this.listeners.forEach(s=>{s(t)})})}resumePausedMutations(){const t=this.getAll().filter(s=>s.state.isPaused);return Q.batch(()=>Promise.all(t.map(s=>s.continue().catch(x))))}},I=new WeakMap,Pt=new WeakMap,be);function Lt(e){var t;return((t=e.options.scope)==null?void 0:t.id)??String(e.mutationId)}function Ve(e){return{onFetch:(t,s)=>{const i=async()=>{var S,E,R,g,p;const n=t.options,u=(R=(E=(S=t.fetchOptions)==null?void 0:S.meta)==null?void 0:E.fetchMore)==null?void 0:R.direction,c=((g=t.state.data)==null?void 0:g.pages)||[],l=((p=t.state.data)==null?void 0:p.pageParams)||[],b={pages:[],pageParams:[]};let C=!1;const v=O=>{Object.defineProperty(O,"signal",{enumerable:!0,get:()=>(t.signal.aborted?C=!0:t.signal.addEventListener("abort",()=>{C=!0}),t.signal)})},y=t.options.queryFn&&t.options.queryFn!==se?t.options.queryFn:()=>Promise.reject(new Error(`Missing queryFn: '${t.options.queryHash}'`)),o=async(O,P,D)=>{if(C)return Promise.reject();if(P==null&&O.pages.length)return Promise.resolve(O);const k={queryKey:t.queryKey,pageParam:P,direction:D?"backward":"forward",meta:t.options.meta};v(k);const H=await y(k),{maxPages:m}=t.options,L=D?xe:Ue;return{pages:L(O.pages,H,m),pageParams:L(O.pageParams,P,m)}};let d;if(u&&c.length){const O=u==="backward",P=O?We:he,D={pages:c,pageParams:l},k=P(n,D);d=await o(D,k,O)}else{d=await o(b,l[0]??n.initialPageParam);const O=e??c.length;for(let P=1;P<O;P++){const D=he(n,d);d=await o(d,D)}}return d};t.options.persister?t.fetchFn=()=>{var n,u;return(u=(n=t.options).persister)==null?void 0:u.call(n,i,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},s)}:t.fetchFn=i}}}function he(e,{pages:t,pageParams:s}){const i=t.length-1;return e.getNextPageParam(t[i],t,s[i],s)}function We(e,{pages:t,pageParams:s}){var i;return(i=e.getPreviousPageParam)==null?void 0:i.call(e,t[0],t,s[0],s)}var F,J,X,ft,yt,Y,pt,mt,ge,ys=(ge=class{constructor(e={}){h(this,F,void 0);h(this,J,void 0);h(this,X,void 0);h(this,ft,void 0);h(this,yt,void 0);h(this,Y,void 0);h(this,pt,void 0);h(this,mt,void 0);a(this,F,e.queryCache||new Ne),a(this,J,e.mutationCache||new ze),a(this,X,e.defaultOptions||{}),a(this,ft,new Map),a(this,yt,new Map),a(this,Y,0)}mount(){jt(this,Y)._++,r(this,Y)===1&&(a(this,pt,ie.subscribe(async e=>{e&&(await this.resumePausedMutations(),r(this,F).onFocus())})),a(this,mt,Kt.subscribe(async e=>{e&&(await this.resumePausedMutations(),r(this,F).onOnline())})))}unmount(){var e,t;jt(this,Y)._--,r(this,Y)===0&&((e=r(this,pt))==null||e.call(this),a(this,pt,void 0),(t=r(this,mt))==null||t.call(this),a(this,mt,void 0))}isFetching(e){return r(this,F).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return r(this,J).findAll({...e,status:"pending"}).length}getQueryData(e){var s;const t=this.defaultQueryOptions({queryKey:e});return(s=r(this,F).get(t.queryHash))==null?void 0:s.state.data}ensureQueryData(e){const t=this.getQueryData(e.queryKey);if(t===void 0)return this.fetchQuery(e);{const s=this.defaultQueryOptions(e),i=r(this,F).build(this,s);return e.revalidateIfStale&&i.isStaleByTime(s.staleTime)&&this.prefetchQuery(s),Promise.resolve(t)}}getQueriesData(e){return r(this,F).findAll(e).map(({queryKey:t,state:s})=>{const i=s.data;return[t,i]})}setQueryData(e,t,s){const i=this.defaultQueryOptions({queryKey:e}),n=r(this,F).get(i.queryHash),u=n==null?void 0:n.state.data,c=Te(t,u);if(c!==void 0)return r(this,F).build(this,i).setData(c,{...s,manual:!0})}setQueriesData(e,t,s){return Q.batch(()=>r(this,F).findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,t,s)]))}getQueryState(e){var s;const t=this.defaultQueryOptions({queryKey:e});return(s=r(this,F).get(t.queryHash))==null?void 0:s.state}removeQueries(e){const t=r(this,F);Q.batch(()=>{t.findAll(e).forEach(s=>{t.remove(s)})})}resetQueries(e,t){const s=r(this,F),i={type:"active",...e};return Q.batch(()=>(s.findAll(e).forEach(n=>{n.reset()}),this.refetchQueries(i,t)))}cancelQueries(e={},t={}){const s={revert:!0,...t},i=Q.batch(()=>r(this,F).findAll(e).map(n=>n.cancel(s)));return Promise.all(i).then(x).catch(x)}invalidateQueries(e={},t={}){return Q.batch(()=>{if(r(this,F).findAll(e).forEach(i=>{i.invalidate()}),e.refetchType==="none")return Promise.resolve();const s={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(s,t)})}refetchQueries(e={},t){const s={...t,cancelRefetch:(t==null?void 0:t.cancelRefetch)??!0},i=Q.batch(()=>r(this,F).findAll(e).filter(n=>!n.isDisabled()).map(n=>{let u=n.fetch(void 0,s);return s.throwOnError||(u=u.catch(x)),n.state.fetchStatus==="paused"?Promise.resolve():u}));return Promise.all(i).then(x)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const s=r(this,F).build(this,t);return s.isStaleByTime(t.staleTime)?s.fetch(t):Promise.resolve(s.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(x).catch(x)}fetchInfiniteQuery(e){return e.behavior=Ve(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(x).catch(x)}resumePausedMutations(){return Kt.isOnline()?r(this,J).resumePausedMutations():Promise.resolve()}getQueryCache(){return r(this,F)}getMutationCache(){return r(this,J)}getDefaultOptions(){return r(this,X)}setDefaultOptions(e){a(this,X,e)}setQueryDefaults(e,t){r(this,ft).set(Rt(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...r(this,ft).values()];let s={};return t.forEach(i=>{Ft(e,i.queryKey)&&(s={...s,...i.defaultOptions})}),s}setMutationDefaults(e,t){r(this,yt).set(Rt(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...r(this,yt).values()];let s={};return t.forEach(i=>{Ft(e,i.mutationKey)&&(s={...s,...i.defaultOptions})}),s}defaultQueryOptions(e){if(e._defaulted)return e;const t={...r(this,X).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=ee(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.enabled!==!0&&t.queryFn===se&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...r(this,X).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){r(this,F).clear(),r(this,J).clear()}},F=new WeakMap,J=new WeakMap,X=new WeakMap,ft=new WeakMap,yt=new WeakMap,Y=new WeakMap,pt=new WeakMap,mt=new WeakMap,ge),T,w,Et,q,rt,vt,_,Qt,bt,gt,nt,at,Z,Ot,ut,Ct,Dt,Vt,Mt,Wt,At,$t,qt,Jt,Tt,Xt,It,Yt,Ut,Zt,kt,Qe,Oe,$e=(Oe=class extends xt{constructor(t,s){super();h(this,ut);h(this,Dt);h(this,Mt);h(this,At);h(this,qt);h(this,Tt);h(this,It);h(this,Ut);h(this,kt);h(this,T,void 0);h(this,w,void 0);h(this,Et,void 0);h(this,q,void 0);h(this,rt,void 0);h(this,vt,void 0);h(this,_,void 0);h(this,Qt,void 0);h(this,bt,void 0);h(this,gt,void 0);h(this,nt,void 0);h(this,at,void 0);h(this,Z,void 0);h(this,Ot,new Set);this.options=s,a(this,T,t),a(this,_,null),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(r(this,w).addObserver(this),ce(r(this,w),this.options)?f(this,ut,Ct).call(this):this.updateResult(),f(this,qt,Jt).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return te(r(this,w),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return te(r(this,w),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,f(this,Tt,Xt).call(this),f(this,It,Yt).call(this),r(this,w).removeObserver(this)}setOptions(t,s){const i=this.options,n=r(this,w);if(this.options=r(this,T).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");f(this,Ut,Zt).call(this),r(this,w).setOptions(this.options),i._defaulted&&!Bt(this.options,i)&&r(this,T).getQueryCache().notify({type:"observerOptionsUpdated",query:r(this,w),observer:this});const u=this.hasListeners();u&&le(r(this,w),n,this.options,i)&&f(this,ut,Ct).call(this),this.updateResult(s),u&&(r(this,w)!==n||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&f(this,Dt,Vt).call(this);const c=f(this,Mt,Wt).call(this);u&&(r(this,w)!==n||this.options.enabled!==i.enabled||c!==r(this,Z))&&f(this,At,$t).call(this,c)}getOptimisticResult(t){const s=r(this,T).getQueryCache().build(r(this,T),t),i=this.createResult(s,t);return Xe(this,i)&&(a(this,q,i),a(this,vt,this.options),a(this,rt,r(this,w).state)),i}getCurrentResult(){return r(this,q)}trackResult(t,s){const i={};return Object.keys(t).forEach(n=>{Object.defineProperty(i,n,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(n),s==null||s(n),t[n])})}),i}trackProp(t){r(this,Ot).add(t)}getCurrentQuery(){return r(this,w)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const s=r(this,T).defaultQueryOptions(t),i=r(this,T).getQueryCache().build(r(this,T),s);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,s))}fetch(t){return f(this,ut,Ct).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),r(this,q)))}createResult(t,s){var H;const i=r(this,w),n=this.options,u=r(this,q),c=r(this,rt),l=r(this,vt),C=t!==i?t.state:r(this,Et),{state:v}=t;let y={...v},o=!1,d;if(s._optimisticResults){const m=this.hasListeners(),L=!m&&ce(t,s),Ae=m&&le(t,i,s,n);(L||Ae)&&(y={...y,...Ee(v.data,t.options)}),s._optimisticResults==="isRestoring"&&(y.fetchStatus="idle")}let{error:S,errorUpdatedAt:E,status:R}=y;if(s.select&&y.data!==void 0)if(u&&y.data===(c==null?void 0:c.data)&&s.select===r(this,Qt))d=r(this,bt);else try{a(this,Qt,s.select),d=s.select(y.data),d=zt(u==null?void 0:u.data,d,s),a(this,bt,d),a(this,_,null)}catch(m){a(this,_,m)}else d=y.data;if(s.placeholderData!==void 0&&d===void 0&&R==="pending"){let m;if(u!=null&&u.isPlaceholderData&&s.placeholderData===(l==null?void 0:l.placeholderData))m=u.data;else if(m=typeof s.placeholderData=="function"?s.placeholderData((H=r(this,gt))==null?void 0:H.state.data,r(this,gt)):s.placeholderData,s.select&&m!==void 0)try{m=s.select(m),a(this,_,null)}catch(L){a(this,_,L)}m!==void 0&&(R="success",d=zt(u==null?void 0:u.data,m,s),o=!0)}r(this,_)&&(S=r(this,_),d=r(this,bt),E=Date.now(),R="error");const g=y.fetchStatus==="fetching",p=R==="pending",O=R==="error",P=p&&g,D=d!==void 0;return{status:R,fetchStatus:y.fetchStatus,isPending:p,isSuccess:R==="success",isError:O,isInitialLoading:P,isLoading:P,data:d,dataUpdatedAt:y.dataUpdatedAt,error:S,errorUpdatedAt:E,failureCount:y.fetchFailureCount,failureReason:y.fetchFailureReason,errorUpdateCount:y.errorUpdateCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>C.dataUpdateCount||y.errorUpdateCount>C.errorUpdateCount,isFetching:g,isRefetching:g&&!p,isLoadingError:O&&!D,isPaused:y.fetchStatus==="paused",isPlaceholderData:o,isRefetchError:O&&D,isStale:re(t,s),refetch:this.refetch}}updateResult(t){const s=r(this,q),i=this.createResult(r(this,w),this.options);if(a(this,rt,r(this,w).state),a(this,vt,this.options),r(this,rt).data!==void 0&&a(this,gt,r(this,w)),Bt(i,s))return;a(this,q,i);const n={},u=()=>{if(!s)return!0;const{notifyOnChangeProps:c}=this.options,l=typeof c=="function"?c():c;if(l==="all"||!l&&!r(this,Ot).size)return!0;const b=new Set(l??r(this,Ot));return this.options.throwOnError&&b.add("error"),Object.keys(r(this,q)).some(C=>{const v=C;return r(this,q)[v]!==s[v]&&b.has(v)})};(t==null?void 0:t.listeners)!==!1&&u()&&(n.listeners=!0),f(this,kt,Qe).call(this,{...n,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&f(this,qt,Jt).call(this)}},T=new WeakMap,w=new WeakMap,Et=new WeakMap,q=new WeakMap,rt=new WeakMap,vt=new WeakMap,_=new WeakMap,Qt=new WeakMap,bt=new WeakMap,gt=new WeakMap,nt=new WeakMap,at=new WeakMap,Z=new WeakMap,Ot=new WeakMap,ut=new WeakSet,Ct=function(t){f(this,Ut,Zt).call(this);let s=r(this,w).fetch(this.options,t);return t!=null&&t.throwOnError||(s=s.catch(x)),s},Dt=new WeakSet,Vt=function(){if(f(this,Tt,Xt).call(this),wt||r(this,q).isStale||!Nt(this.options.staleTime))return;const s=we(r(this,q).dataUpdatedAt,this.options.staleTime)+1;a(this,nt,setTimeout(()=>{r(this,q).isStale||this.updateResult()},s))},Mt=new WeakSet,Wt=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(r(this,w)):this.options.refetchInterval)??!1},At=new WeakSet,$t=function(t){f(this,It,Yt).call(this),a(this,Z,t),!(wt||this.options.enabled===!1||!Nt(r(this,Z))||r(this,Z)===0)&&a(this,at,setInterval(()=>{(this.options.refetchIntervalInBackground||ie.isFocused())&&f(this,ut,Ct).call(this)},r(this,Z)))},qt=new WeakSet,Jt=function(){f(this,Dt,Vt).call(this),f(this,At,$t).call(this,f(this,Mt,Wt).call(this))},Tt=new WeakSet,Xt=function(){r(this,nt)&&(clearTimeout(r(this,nt)),a(this,nt,void 0))},It=new WeakSet,Yt=function(){r(this,at)&&(clearInterval(r(this,at)),a(this,at,void 0))},Ut=new WeakSet,Zt=function(){const t=r(this,T).getQueryCache().build(r(this,T),this.options);if(t===r(this,w))return;const s=r(this,w);a(this,w,t),a(this,Et,t.state),this.hasListeners()&&(s==null||s.removeObserver(this),t.addObserver(this))},kt=new WeakSet,Qe=function(t){Q.batch(()=>{t.listeners&&this.listeners.forEach(s=>{s(r(this,q))}),r(this,T).getQueryCache().notify({query:r(this,w),type:"observerResultsUpdated"})})},Oe);function Je(e,t){return t.enabled!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function ce(e,t){return Je(e,t)||e.state.data!==void 0&&te(e,t,t.refetchOnMount)}function te(e,t,s){if(t.enabled!==!1){const i=typeof s=="function"?s(e):s;return i==="always"||i!==!1&&re(e,t)}return!1}function le(e,t,s,i){return(e!==t||i.enabled===!1)&&(!s.suspense||e.state.status!=="error")&&re(e,s)}function re(e,t){return t.enabled!==!1&&e.isStaleByTime(t.staleTime)}function Xe(e,t){return!Bt(e.getCurrentResult(),t)}var De=j.createContext(void 0),Ye=e=>{const t=j.useContext(De);if(e)return e;if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},ps=({client:e,children:t})=>(j.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),qe.jsx(De.Provider,{value:e,children:t})),Me=j.createContext(!1),Ze=()=>j.useContext(Me);Me.Provider;function ts(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var es=j.createContext(ts()),ss=()=>j.useContext(es);function is(e,t){return typeof e=="function"?e(...t):!!e}var rs=(e,t)=>{(e.suspense||e.throwOnError)&&(t.isReset()||(e.retryOnMount=!1))},ns=e=>{j.useEffect(()=>{e.clearReset()},[e])},as=({result:e,errorResetBoundary:t,throwOnError:s,query:i})=>e.isError&&!t.isReset()&&!e.isFetching&&i&&is(s,[e.error,i]),us=e=>{e.suspense&&typeof e.staleTime!="number"&&(e.staleTime=1e3)},os=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,hs=(e,t,s)=>t.fetchOptimistic(e).catch(()=>{s.clearReset()});function cs(e,t,s){const i=Ye(s),n=Ze(),u=ss(),c=i.defaultQueryOptions(e);c._optimisticResults=n?"isRestoring":"optimistic",us(c),rs(c,u),ns(u);const[l]=j.useState(()=>new t(i,c)),b=l.getOptimisticResult(c);if(j.useSyncExternalStore(j.useCallback(C=>{const v=n?()=>{}:l.subscribe(Q.batchCalls(C));return l.updateResult(),v},[l,n]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),j.useEffect(()=>{l.setOptions(c,{listeners:!1})},[c,l]),os(c,b))throw hs(c,l,u);if(as({result:b,errorResetBoundary:u,throwOnError:c.throwOnError,query:i.getQueryCache().get(c.queryHash)}))throw b.error;return c.notifyOnChangeProps?b:l.trackResult(b)}function ms(e,t){return cs(e,$e,t)}export{ys as Q,ps as a,ms as u};
