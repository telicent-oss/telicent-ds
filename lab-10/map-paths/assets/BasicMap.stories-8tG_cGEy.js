import{j as s,r as d,a as y}from"./iframe-CYKKeyXc.js";import{y as D,z as ue,G as ve,H as be}from"./DropdownButton-DXvUw18o.js";import{B as M}from"./Box-B5Idbuu2.js";import{S as ye}from"./Stack-BjITiBsD.js";import{B as g}from"./Button-BK6a-J9_.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BEDwv6nP.js";import"./createSvgIcon-BCA_qiKo.js";import"./styled-DYVy4BQZ.js";import"./generateUtilityClasses-BddLF0YE.js";import"./useTheme-Clo7ftRJ.js";import"./Container-B4YkWBlj.js";import"./styled-C485N8nh.js";import"./createStyled-BrwGJ6p7.js";import"./useThemeProps-CSMSYrHE.js";import"./Typography-BqCL54fa.js";import"./Paper-mUQjj_jn.js";import"./useThemeProps-nKkQeJ84.js";import"./Text-Bt17FoZM.js";import"./AdapterDayjs-LnHs1126.js";import"./Modal-B6zc8eMd.js";import"./utils-BTMGMaS4.js";import"./TransitionGroupContext-BZlRwI3u.js";import"./index-BOq1Y2DU.js";import"./TextField-BKgBwIu3.js";import"./useFormControl-e1pRvXOc.js";import"./IconButton-CwWFg1EF.js";import"./ButtonBase-BY4v5x24.js";import"./DialogContent-DBkrQtLX.js";import"./Chip-BigX0SwN.js";import"./DateTimePicker-CUaoXgcA.js";import"./Divider-CZT4G2av.js";import"./Chip-D-ivFaV7.js";import"./Divider-BtKIWAtl.js";import"./TreeView-CioP4QeT.js";import"./LinearProgress--AT7LVoA.js";import"./Spinner-CEVLaIRL.js";import"./Dialog-C76QJbsQ.js";import"./MapToggleButtonPresentational-L_xNR8KH.js";import"./Remove-B42JroOj.js";import"./TextField-nYr1dY0Q.js";import"./Switch-Bt5eTPpW.js";import"./DatePicker-HFvHu9pg.js";import"./LinkButton-BI7eyHxU.js";import"./Paper-grcJF4O1.js";import"./ErrorFallback-CikF8nPt.js";import"./ErrorFallbackText-BKonECwZ.js";import"./ErrorFallbackWrapper-DAHz8e70.js";import"./Brand-CfZWDtPV.js";import"./constants-C9fBqqHE.js";import"./Edit-BwdZQDqg.js";const n=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0}],h={zoom:5,center:[0,0],layers:n,mapStyleOptions:void 0,markers:[],polygons:[],paths:[]},xr={title:"Component Library/Map/composites/BasicMapV2",component:D,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
        `}}},decorators:[r=>s(M,{sx:{width:"100vw",height:"100vh",margin:"auto"},children:r()})],argTypes:{},args:h},u={},v={args:{layers:n}},T=[{id:"path-1",type:"LineString",name:"Route A",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3}},{id:"path-2",type:"LineString",name:"Route B (dashed)",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]],style:{color:"#0066FF",width:2,lineDash:[10,5]}}],b={args:{layers:n,paths:T}},S={args:{layers:n,markers:[],paths:T}},R=[[-3.19,55.95],[-2.24,55.86],[-1.62,54.98],[-1.29,54.57],[-1.55,53.8],[-1.47,53.38],[-1.15,52.95],[-1.09,52.62],[-.78,52.04],[-.46,51.75],[-.13,51.51]];function ge(r){return{r:Math.round(30+225*r),g:Math.round(80*(1-r)),b:Math.round(220*(1-r)+30)}}const Se=R.slice(0,-1).map((r,e,l)=>{const a=e/(l.length-1),{r:m,g:c,b:t}=ge(a),i=.3+.7*a,o=2+4*a;return{id:`trail-${e}`,type:"LineString",name:`Segment ${e+1}`,coordinates:[r,R[e+1]],style:{color:`rgba(${m}, ${c}, ${t}, ${i})`,width:o,lineCap:"round",lineJoin:"round"}}}),w={args:{zoom:6,center:[-1.5,53.5],layers:n,paths:Se}},we=[{id:"tri-1",type:"LineString",name:"London → Paris → Berlin",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3,direction:{marker:{type:"triangle"},color:"#FF6600",size:12}}},{id:"tri-2",type:"LineString",name:"Edinburgh → Newcastle → Leeds",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]],style:{color:"#0066FF",width:3,direction:{marker:{type:"triangle"},color:"#003399",size:10}}}],k={args:{zoom:5,center:[2,52],layers:n,paths:we}},ke=['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">','<path d="M8 4 L16 12 L8 20" fill="none" stroke="#FF6600" stroke-width="3"',' stroke-linecap="round" stroke-linejoin="round"/>',"</svg>"].join(""),Le=[{id:"svg-1",type:"LineString",name:"London → Paris → Berlin",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3,direction:{marker:{type:"svg",markup:ke},size:16}}}],L={args:{zoom:5,center:[5,51],layers:n,paths:Le}},fe=R.slice(0,-1).map((r,e,l)=>{const a=e/(l.length-1),{r:m,g:c,b:t}=ge(a),i=.3+.7*a,o=2+4*a,p=`rgba(${m}, ${c}, ${t}, ${i})`;return{id:`dtrail-${e}`,type:"LineString",name:`Segment ${e+1}`,coordinates:[r,R[e+1]],style:{color:p,width:o,lineCap:"round",lineJoin:"round",direction:{marker:{type:"triangle"},color:p,size:4+6*a}}}}),f={args:{zoom:6,center:[-1.5,53.5],layers:n,paths:fe}},ze=[{id:"osm-dimmed",kind:"base-raster",provider:"xyz",label:"OpenStreetMap (dimmed)",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0,opacity:.4}],z={args:{zoom:5,center:[0,0],layers:ze,paths:T}},xe=()=>{const r=d.useRef(null);return y(M,{sx:{width:"100%",height:"100%"},children:[y(ye,{direction:"row",spacing:1,sx:{p:1,position:"absolute",zIndex:10},children:[s(g,{variant:"contained",size:"small",onClick:()=>{var e;return(e=r.current)==null?void 0:e.setLayerOpacity("osm",.3)},children:"Dim base layer"}),s(g,{variant:"contained",size:"small",onClick:()=>{var e;return(e=r.current)==null?void 0:e.setLayerOpacity("osm",1)},children:"Restore base layer"})]}),s(D,{ref:r,zoom:5,center:[0,0],layers:[{id:"osm",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0}],markers:[],polygons:[],paths:T})]})},x={render:()=>s(xe,{})},Pe=[{id:"path-a",type:"LineString",name:"Route A",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]]},{id:"path-b",type:"LineString",name:"Route B",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]]}],Me=()=>{const r=d.useRef(null),[e,l]=d.useState("none"),a=d.useRef(null),m=d.useCallback(t=>{var p,F;const o=(((p=t.getId)==null?void 0:p.call(t))??((F=t.get)==null?void 0:F.call(t,"id")))===r.current;return new ue({stroke:new ve({color:o?"#FF6600":"#999999",width:o?5:2})})},[]),c=t=>{var o;r.current=t,l(t??"none");const i=(o=a.current)==null?void 0:o.layers.find(p=>p.get("id")===be);i==null||i.changed()};return y(M,{sx:{width:"100%",height:"100%"},children:[y(ye,{direction:"row",spacing:1,sx:{p:1,position:"absolute",zIndex:10},children:[s(g,{variant:"contained",size:"small",onClick:()=>c("path-a"),children:"Select Route A"}),s(g,{variant:"contained",size:"small",onClick:()=>c("path-b"),children:"Select Route B"}),s(g,{variant:"outlined",size:"small",onClick:()=>c(null),children:"Clear selection"}),y(M,{sx:{alignSelf:"center",color:"#fff",pl:1},children:["Selected: ",e]})]}),s(D,{ref:a,zoom:5,center:[2,52],layers:n,markers:[],polygons:[],paths:Pe,pathStyle:m})]})},P={render:()=>s(Me,{})};var O,B,C;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(U=(K=S.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var G,H,N;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    zoom: 6,
    center: [-1.5, 53.5],
    layers: baseLayers,
    paths: movementTrailPaths
  }
}`,...(N=(H=w.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var Q,Y,X;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(re=(ee=L.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ae,se;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    zoom: 6,
    center: [-1.5, 53.5],
    layers: baseLayers,
    paths: directedTrailPaths
  }
}`,...(se=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,ne,ie;z.parameters={...z.parameters,docs:{...(oe=z.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [0, 0],
    layers: dimmedBaseLayers,
    paths: samplePaths
  }
}`,...(ie=(ne=z.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ce,pe,le;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <RuntimeOpacityDemo />
}`,...(le=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:le.source}}};var me,de,he;P.parameters={...P.parameters,docs:{...(me=P.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <PathStyleFunctionDemo />
}`,...(he=(de=P.parameters)==null?void 0:de.docs)==null?void 0:he.source}}};const Pr=["allArgs","Empty","Template","WithPaths","WithMarkersAndPaths","MovementTrail","DirectionTriangle","DirectionSvg","MovementTrailWithDirection","ConfigDrivenOpacity","RuntimeOpacity","PathStyleFunction"];export{z as ConfigDrivenOpacity,L as DirectionSvg,k as DirectionTriangle,u as Empty,w as MovementTrail,f as MovementTrailWithDirection,P as PathStyleFunction,x as RuntimeOpacity,v as Template,S as WithMarkersAndPaths,b as WithPaths,Pr as __namedExportsOrder,h as allArgs,xr as default};
