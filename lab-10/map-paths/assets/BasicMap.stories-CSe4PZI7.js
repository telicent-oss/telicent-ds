import{j as a,a as y}from"./emotion-react-jsx-runtime.browser.esm-OTCsP_zj.js";import{r as d}from"./index-7LYIoTbn.js";import{x as D,y as ue,z as ve,G as be}from"./DropdownButton-l51GFW5y.js";import{B as M}from"./Box-BVltnmec.js";import{S as ye}from"./Stack-_9FQNGpJ.js";import{B as g}from"./Button-6gIpOcku.js";import"./jsx-runtime-BjG_zV1W.js";import"./UserIcon-Cn55tEQ2.js";import"./createSvgIcon-DU2rVRio.js";import"./defaultTheme-ACnAOKMv.js";import"./styled-Dr6LHSty.js";import"./generateUtilityClasses-CBlNI-gU.js";import"./DefaultPropsProvider-BINl2W1D.js";import"./useTheme-BCfSMqPY.js";import"./useTheme-DmgbyzQG.js";import"./Container-Cpr-ywPw.js";import"./styled-xzbhM0n_.js";import"./createStyled-CsLhtPiI.js";import"./useThemeProps-DhNaUrQ2.js";import"./Typography-CSCiAqzj.js";import"./Paper-3rHlC0dZ.js";import"./useThemeProps-k0ivW4aO.js";import"./Text-D0lNsqSI.js";import"./AdapterDayjs-Cl81F8SA.js";import"./index-B4OJPA8G.js";import"./Modal-JNcevMIf.js";import"./utils-CXYPeQrV.js";import"./TransitionGroupContext-itkx9jux.js";import"./useEnhancedEffect-oYjd7u20.js";import"./index-DONRZHi-.js";import"./Select-BfRenVFP.js";import"./useFormControl-lkbi0or6.js";import"./useId-Cf3J66lm.js";import"./GlobalStyles-B130YdEm.js";import"./GlobalStyles-Canp8JzW.js";import"./TextField-BklvXUyq.js";import"./IconButton-K5H0oyhF.js";import"./ButtonBase-D1U61Dnt.js";import"./colorManipulator-4CHxWgpo.js";import"./DialogContent-CX0jwU1P.js";import"./Chip-D4rXNsqT.js";import"./MenuItem-bua5XKnv.js";import"./dividerClasses-Cw9q1-aC.js";import"./UIThemeProvider-4LUh-fR0.js";import"./types-CMP91hxZ.js";import"./ThemeProvider-BUQO26gH.js";import"./Chip-BwAmCpCJ.js";import"./Divider-wVQl8Tit.js";import"./Divider-A3I7BnBV.js";import"./TreeView-CTXybiJL.js";import"./LinearProgress-Bb8hrd7I.js";import"./Spinner-BOxs5Djo.js";import"./Dialog-vILqERHu.js";import"./MapToggleButtonPresentational-86Mslv2I.js";import"./Remove-B14EzRR3.js";import"./TextField-jr6Bp6UA.js";import"./Select-CyedWs7E.js";import"./Switch-CckCM0FO.js";import"./DatePicker-DcCgiJ2j.js";import"./DateTimePicker-Dp4MmL11.js";import"./LinkButton-D9Uz2SFG.js";import"./Paper-CmfYDRfa.js";import"./ErrorFallback-Box0VFpD.js";import"./ErrorFallbackText-BxC3bExW.js";import"./ErrorFallbackWrapper-Dv-Jy562.js";import"./Brand-DN1iXAq-.js";import"./constants-BFdM9Isu.js";import"./iframe-Bv5O5v4d.js";import"../sb-preview/runtime.js";import"./Edit-DKn8TmSo.js";const i=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0}],h={zoom:5,center:[0,0],layers:i,mapStyleOptions:void 0,markers:[],polygons:[],paths:[]},Jr={title:"Component Library/Map/composites/BasicMapV2",component:D,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
### Overview
BasicMapV2 is a React wrapper around OpenLayers that displays a map with selectable base layers and overlays. It integrates with the LayerSelector to let developers switch base layers without touching OpenLayers directly.

---

### Behaviour (intentional)
- **Single active base layer:** Only one base layer is visible at a time. This is the designed behaviour for base layers — overlays are intended to be independent and can be toggled on top of the selected base.

---

### Known limitations
- **View jumping / recentering:** Switching to certain base layers (notably some vector-tile sources) can cause the map view to change. This happens because some vector-tile styles or providers initialise layers with an extent or run internal fit logic.

- **Provider-specific behaviour:** Vector tile sources (Mapbox, MapTiler, ArcGIS, custom style JSON) may require an \`accessToken\` or a style URL. Some provider SDKs or style-application helpers (e.g. ol-mapbox-style) can perform extra initialisation that affects view or sublayers.
  - **Recommendation:** Use provider-appropriate config (provider field, styleUrl, accessToken) and test each provider in your target environment.

---

### Requirements
- Vector-tile providers often require credentials. Keep keys out of source code — supply via env/config.
- The first base layer in the supplied config is treated as the default visible layer. Set \`visible: true\` on the layer you want active initially (or programmatically set it before mounting).

---

### Quick usage
\`\`\`tsx
<BasicMapV2 zoom={5} center={[0,0]} />
// LayerSelector is rendered automatically by BasicMapV2
\`\`\`

This text documents the intended behaviour, the real limitations to watch for, and actionable workarounds so consumers of the component know exactly what to expect.
        `}}},decorators:[r=>a(M,{sx:{width:"100vw",height:"100vh",margin:"auto"},children:r()})],argTypes:{},args:h},u={},v={args:{layers:i}},T=[{id:"path-1",type:"LineString",name:"Route A",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3}},{id:"path-2",type:"LineString",name:"Route B (dashed)",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]],style:{color:"#0066FF",width:2,lineDash:[10,5]}}],b={args:{layers:i,paths:T}},S={args:{layers:i,markers:[],paths:T}},R=[[-3.19,55.95],[-2.24,55.86],[-1.62,54.98],[-1.29,54.57],[-1.55,53.8],[-1.47,53.38],[-1.15,52.95],[-1.09,52.62],[-.78,52.04],[-.46,51.75],[-.13,51.51]];function ge(r){return{r:Math.round(30+225*r),g:Math.round(80*(1-r)),b:Math.round(220*(1-r)+30)}}const Se=R.slice(0,-1).map((r,e,m)=>{const o=e/(m.length-1),{r:l,g:c,b:t}=ge(o),n=.3+.7*o,s=2+4*o;return{id:`trail-${e}`,type:"LineString",name:`Segment ${e+1}`,coordinates:[r,R[e+1]],style:{color:`rgba(${l}, ${c}, ${t}, ${n})`,width:s,lineCap:"round",lineJoin:"round"}}}),w={args:{zoom:6,center:[-1.5,53.5],layers:i,paths:Se}},we=[{id:"tri-1",type:"LineString",name:"London → Paris → Berlin",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3,direction:{marker:{type:"triangle"},color:"#FF6600",size:12}}},{id:"tri-2",type:"LineString",name:"Edinburgh → Newcastle → Leeds",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]],style:{color:"#0066FF",width:3,direction:{marker:{type:"triangle"},color:"#003399",size:10}}}],k={args:{zoom:5,center:[2,52],layers:i,paths:we}},ke=['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">','<path d="M8 4 L16 12 L8 20" fill="none" stroke="#FF6600" stroke-width="3"',' stroke-linecap="round" stroke-linejoin="round"/>',"</svg>"].join(""),Le=[{id:"svg-1",type:"LineString",name:"London → Paris → Berlin",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3,direction:{marker:{type:"svg",markup:ke},size:16}}}],L={args:{zoom:5,center:[5,51],layers:i,paths:Le}},fe=R.slice(0,-1).map((r,e,m)=>{const o=e/(m.length-1),{r:l,g:c,b:t}=ge(o),n=.3+.7*o,s=2+4*o,p=`rgba(${l}, ${c}, ${t}, ${n})`;return{id:`dtrail-${e}`,type:"LineString",name:`Segment ${e+1}`,coordinates:[r,R[e+1]],style:{color:p,width:s,lineCap:"round",lineJoin:"round",direction:{marker:{type:"triangle"},color:p,size:4+6*o}}}}),f={args:{zoom:6,center:[-1.5,53.5],layers:i,paths:fe}},ze=[{id:"osm-dimmed",kind:"base-raster",provider:"xyz",label:"OpenStreetMap (dimmed)",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0,opacity:.4}],z={args:{zoom:5,center:[0,0],layers:ze,paths:T}},xe=()=>{const r=d.useRef(null);return y(M,{sx:{width:"100%",height:"100%"},children:[y(ye,{direction:"row",spacing:1,sx:{p:1,position:"absolute",zIndex:10},children:[a(g,{variant:"contained",size:"small",onClick:()=>{var e;return(e=r.current)==null?void 0:e.setLayerOpacity("osm",.3)},children:"Dim base layer"}),a(g,{variant:"contained",size:"small",onClick:()=>{var e;return(e=r.current)==null?void 0:e.setLayerOpacity("osm",1)},children:"Restore base layer"})]}),a(D,{ref:r,zoom:5,center:[0,0],layers:[{id:"osm",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0}],markers:[],polygons:[],paths:T})]})},x={render:()=>a(xe,{})},Pe=[{id:"path-a",type:"LineString",name:"Route A",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]]},{id:"path-b",type:"LineString",name:"Route B",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]]}],Me=()=>{const r=d.useRef(null),[e,m]=d.useState("none"),o=d.useRef(null),l=d.useCallback(t=>{var p,F;const s=(((p=t.getId)==null?void 0:p.call(t))??((F=t.get)==null?void 0:F.call(t,"id")))===r.current;return new ue({stroke:new ve({color:s?"#FF6600":"#999999",width:s?5:2})})},[]),c=t=>{var s;r.current=t,m(t??"none");const n=(s=o.current)==null?void 0:s.layers.find(p=>p.get("id")===be);n==null||n.changed()};return y(M,{sx:{width:"100%",height:"100%"},children:[y(ye,{direction:"row",spacing:1,sx:{p:1,position:"absolute",zIndex:10},children:[a(g,{variant:"contained",size:"small",onClick:()=>c("path-a"),children:"Select Route A"}),a(g,{variant:"contained",size:"small",onClick:()=>c("path-b"),children:"Select Route B"}),a(g,{variant:"outlined",size:"small",onClick:()=>c(null),children:"Clear selection"}),y(M,{sx:{alignSelf:"center",color:"#fff",pl:1},children:["Selected: ",e]})]}),a(D,{ref:o,zoom:5,center:[2,52],layers:i,markers:[],polygons:[],paths:Pe,pathStyle:l})]})},P={render:()=>a(Me,{})};var O,B,C;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  zoom: 5,
  center: [0, 0],
  layers: baseLayers,
  mapStyleOptions: undefined,
  markers: [],
  polygons: [],
  paths: []
}`,...(C=(B=h.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var $,A,I;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:"{}",...(I=(A=u.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var V,j,E;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    layers: baseLayers
  }
}`,...(E=(j=v.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var W,_,q;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    layers: baseLayers,
    paths: samplePaths
  }
}`,...(q=(_=b.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var J,K,U;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    layers: baseLayers,
    markers: [],
    paths: samplePaths
  }
}`,...(U=(K=S.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var G,N,H;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    zoom: 6,
    center: [-1.5, 53.5],
    layers: baseLayers,
    paths: movementTrailPaths
  }
}`,...(H=(N=w.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var Q,Y,X;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [2, 52],
    layers: baseLayers,
    paths: triangleDirectedPaths
  }
}`,...(X=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var Z,ee,re;L.parameters={...L.parameters,docs:{...(Z=L.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [5, 51],
    layers: baseLayers,
    paths: svgDirectedPaths
  }
}`,...(re=(ee=L.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,oe,ae;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    zoom: 6,
    center: [-1.5, 53.5],
    layers: baseLayers,
    paths: directedTrailPaths
  }
}`,...(ae=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var se,ie,ne;z.parameters={...z.parameters,docs:{...(se=z.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [0, 0],
    layers: dimmedBaseLayers,
    paths: samplePaths
  }
}`,...(ne=(ie=z.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var ce,pe,me;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <RuntimeOpacityDemo />
}`,...(me=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var le,de,he;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <PathStyleFunctionDemo />
}`,...(he=(de=P.parameters)==null?void 0:de.docs)==null?void 0:he.source}}};const Kr=["allArgs","Empty","Template","WithPaths","WithMarkersAndPaths","MovementTrail","DirectionTriangle","DirectionSvg","MovementTrailWithDirection","ConfigDrivenOpacity","RuntimeOpacity","PathStyleFunction"];export{z as ConfigDrivenOpacity,L as DirectionSvg,k as DirectionTriangle,u as Empty,w as MovementTrail,f as MovementTrailWithDirection,P as PathStyleFunction,x as RuntimeOpacity,v as Template,S as WithMarkersAndPaths,b as WithPaths,Kr as __namedExportsOrder,h as allArgs,Jr as default};
