import{j as a,a as y}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{r as d}from"./index-CTjT7uj6.js";import{d as D,S as ue,e as ve,f as be}from"./AuthModal-ohQe4pEe.js";import{B as M}from"./Box-CRiiUqfG.js";import{S as ye}from"./Stack-C-VLTEnn.js";import{B as g}from"./Button-BsbypDuV.js";import"./jsx-runtime-CB_V9I5Y.js";import"./Text-D7i5Vapy.js";import"./Typography-NY1t2oJS.js";import"./identifier-ubkqThfq.js";import"./styled-DjfdLqg6.js";import"./generateUtilityClasses-axRDXlOb.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./constants-scok30Ut.js";import"./iframe-D9mgO0kl.js";import"../sb-preview/runtime.js";import"./index-DEWJqUJ8.js";import"./types-CMP91hxZ.js";import"./useTheme-DVRb4tHF.js";import"./useTheme-CZEWbKR4.js";import"./GlobalStyles-CqOQHgIj.js";import"./GlobalStyles-DulCgQ73.js";import"./UserProfile-DRQRR7_X.js";import"./UserIcon-o6gncd3f.js";import"./SvgIcon-nu1RSFLJ.js";import"./index-BRV0Se7Z.js";import"./createSvgIcon-BGbWkX_4.js";import"./Modal-GSj0T9Pb.js";import"./utils-BfJHuSOI.js";import"./TransitionGroupContext-Bu81adgJ.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./IconButton-oAA5JCuL.js";import"./ButtonBase-C9YLNer7.js";import"./Menu-Dz_6jnqr.js";import"./index-CejG0Q0C.js";import"./Popover-DlmTLUyz.js";import"./Paper-DurtPqdU.js";import"./useFormControl-DPKvkoC5.js";import"./useId-DMVUMfb1.js";import"./AdapterDayjs-BEaMQcLJ.js";import"./useThemeProps-BCPloJZh.js";import"./useThemeProps-BQrQzAVn.js";import"./TextField-Dp-4Je7P.js";import"./Select-DjoBVcxs.js";import"./createStyled-MF3orRa4.js";import"./colorManipulator-DHCSb3wy.js";import"./DialogContent-BX05r4Wn.js";import"./Chip-DrHiCwPe.js";import"./TelicentHorizontalSVG-D3OEbY3t.js";import"./FlexGrid-WlHVYxOe.js";import"./Container-CeTulhJU.js";import"./styled-D52li5_j.js";import"./FlexBox-CEMdxTrl.js";import"./DataSetIcon-eLJEtM34.js";import"./MenuItem-B8oYDPYK.js";import"./dividerClasses-Bl8Ne15h.js";import"./UIThemeProvider-Dfoz0doH.js";import"./ThemeProvider-BnKwSnOu.js";import"./IconButton-CSRnY2wZ.js";import"./Chip-BYDdnwPY.js";import"./Divider-BNrRnzv6.js";import"./Divider-ALDgEm0R.js";import"./TreeView-BaiGyGfQ.js";import"./UserProfileContent-89WrbRP9.js";import"./LinearProgress-BKbPPN-u.js";import"./Spinner-w6IMOYm1.js";import"./Dialog-DBzAiknu.js";import"./Button-BQmmc_Hj.js";import"./LinkButton-DOLgHIfS.js";import"./TextField-Bn0OGEgO.js";import"./Select-CNwEk6pf.js";import"./Switch-hsriPZgu.js";import"./DatePicker-AtFJHvOV.js";import"./DateTimePicker-Pe_mHrSx.js";import"./Card-BBAZs1GG.js";import"./CardActions-ahQ16fz_.js";import"./Popover-BqkrEGud.js";import"./Paper-Bbtnvex6.js";import"./ErrorFallback-DmOQLNkI.js";import"./ErrorFallbackText-FisNSYtr.js";import"./ErrorFallbackWrapper-C7MPjQkG.js";import"./Brand-CDA26Tjd.js";import"./MapToggleButtonPresentational-X7PiIpGo.js";import"./Remove-CFsi-mnJ.js";import"./Edit-gSW16YTz.js";const i=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0}],h={zoom:5,center:[0,0],layers:i,mapStyleOptions:void 0,markers:[],polygons:[],paths:[]},st={title:"Component Library/Map/composites/BasicMapV2",component:D,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
        `}}},decorators:[r=>a(M,{sx:{width:"100vw",height:"100vh",margin:"auto"},children:r()})],argTypes:{},args:h},u={},v={args:{layers:i}},T=[{id:"path-1",type:"LineString",name:"Route A",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3}},{id:"path-2",type:"LineString",name:"Route B (dashed)",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]],style:{color:"#0066FF",width:2,lineDash:[10,5]}}],b={args:{layers:i,paths:T}},S={args:{layers:i,markers:[],paths:T}},R=[[-3.19,55.95],[-2.24,55.86],[-1.62,54.98],[-1.29,54.57],[-1.55,53.8],[-1.47,53.38],[-1.15,52.95],[-1.09,52.62],[-.78,52.04],[-.46,51.75],[-.13,51.51]];function ge(r){return{r:Math.round(30+225*r),g:Math.round(80*(1-r)),b:Math.round(220*(1-r)+30)}}const Se=R.slice(0,-1).map((r,e,m)=>{const o=e/(m.length-1),{r:l,g:p,b:t}=ge(o),n=.3+.7*o,s=2+4*o;return{id:`trail-${e}`,type:"LineString",name:`Segment ${e+1}`,coordinates:[r,R[e+1]],style:{color:`rgba(${l}, ${p}, ${t}, ${n})`,width:s,lineCap:"round",lineJoin:"round"}}}),w={args:{zoom:6,center:[-1.5,53.5],layers:i,paths:Se}},we=[{id:"tri-1",type:"LineString",name:"London → Paris → Berlin",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3,direction:{marker:{type:"triangle"},color:"#FF6600",size:12}}},{id:"tri-2",type:"LineString",name:"Edinburgh → Newcastle → Leeds",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]],style:{color:"#0066FF",width:3,direction:{marker:{type:"triangle"},color:"#003399",size:10}}}],f={args:{zoom:5,center:[2,52],layers:i,paths:we}},fe=['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">','<path d="M8 4 L16 12 L8 20" fill="none" stroke="#FF6600" stroke-width="3"',' stroke-linecap="round" stroke-linejoin="round"/>',"</svg>"].join(""),ke=[{id:"svg-1",type:"LineString",name:"London → Paris → Berlin",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3,direction:{marker:{type:"svg",markup:fe},size:16}}}],k={args:{zoom:5,center:[5,51],layers:i,paths:ke}},Le=R.slice(0,-1).map((r,e,m)=>{const o=e/(m.length-1),{r:l,g:p,b:t}=ge(o),n=.3+.7*o,s=2+4*o,c=`rgba(${l}, ${p}, ${t}, ${n})`;return{id:`dtrail-${e}`,type:"LineString",name:`Segment ${e+1}`,coordinates:[r,R[e+1]],style:{color:c,width:s,lineCap:"round",lineJoin:"round",direction:{marker:{type:"triangle"},color:c,size:4+6*o}}}}),L={args:{zoom:6,center:[-1.5,53.5],layers:i,paths:Le}},ze=[{id:"osm-dimmed",kind:"base-raster",provider:"xyz",label:"OpenStreetMap (dimmed)",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0,opacity:.4}],z={args:{zoom:5,center:[0,0],layers:ze,paths:T}},xe=()=>{const r=d.useRef(null);return y(M,{sx:{width:"100%",height:"100%"},children:[y(ye,{direction:"row",spacing:1,sx:{p:1,position:"absolute",zIndex:10},children:[a(g,{variant:"contained",size:"small",onClick:()=>{var e;return(e=r.current)==null?void 0:e.setLayerOpacity("osm",.3)},children:"Dim base layer"}),a(g,{variant:"contained",size:"small",onClick:()=>{var e;return(e=r.current)==null?void 0:e.setLayerOpacity("osm",1)},children:"Restore base layer"})]}),a(D,{ref:r,zoom:5,center:[0,0],layers:[{id:"osm",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0}],markers:[],polygons:[],paths:T})]})},x={render:()=>a(xe,{})},Pe=[{id:"path-a",type:"LineString",name:"Route A",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]]},{id:"path-b",type:"LineString",name:"Route B",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]]}],Me=()=>{const r=d.useRef(null),[e,m]=d.useState("none"),o=d.useRef(null),l=d.useCallback(t=>{var c,F;const s=(((c=t.getId)==null?void 0:c.call(t))??((F=t.get)==null?void 0:F.call(t,"id")))===r.current;return new ue({stroke:new ve({color:s?"#FF6600":"#999999",width:s?5:2})})},[]),p=t=>{var s;r.current=t,m(t??"none");const n=(s=o.current)==null?void 0:s.layers.find(c=>c.get("id")===be);n==null||n.changed()};return y(M,{sx:{width:"100%",height:"100%"},children:[y(ye,{direction:"row",spacing:1,sx:{p:1,position:"absolute",zIndex:10},children:[a(g,{variant:"contained",size:"small",onClick:()=>p("path-a"),children:"Select Route A"}),a(g,{variant:"contained",size:"small",onClick:()=>p("path-b"),children:"Select Route B"}),a(g,{variant:"outlined",size:"small",onClick:()=>p(null),children:"Clear selection"}),y(M,{sx:{alignSelf:"center",color:"#fff",pl:1},children:["Selected: ",e]})]}),a(D,{ref:o,zoom:5,center:[2,52],layers:i,markers:[],polygons:[],paths:Pe,pathStyle:l})]})},P={render:()=>a(Me,{})};var O,B,C;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(U=(K=S.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var N,G,H;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    zoom: 6,
    center: [-1.5, 53.5],
    layers: baseLayers,
    paths: movementTrailPaths
  }
}`,...(H=(G=w.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var Q,Y,X;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [2, 52],
    layers: baseLayers,
    paths: triangleDirectedPaths
  }
}`,...(X=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var Z,ee,re;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [5, 51],
    layers: baseLayers,
    paths: svgDirectedPaths
  }
}`,...(re=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,oe,ae;L.parameters={...L.parameters,docs:{...(te=L.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    zoom: 6,
    center: [-1.5, 53.5],
    layers: baseLayers,
    paths: directedTrailPaths
  }
}`,...(ae=(oe=L.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var se,ie,ne;z.parameters={...z.parameters,docs:{...(se=z.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [0, 0],
    layers: dimmedBaseLayers,
    paths: samplePaths
  }
}`,...(ne=(ie=z.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var pe,ce,me;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <RuntimeOpacityDemo />
}`,...(me=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var le,de,he;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <PathStyleFunctionDemo />
}`,...(he=(de=P.parameters)==null?void 0:de.docs)==null?void 0:he.source}}};const it=["allArgs","Empty","Template","WithPaths","WithMarkersAndPaths","MovementTrail","DirectionTriangle","DirectionSvg","MovementTrailWithDirection","ConfigDrivenOpacity","RuntimeOpacity","PathStyleFunction"];export{z as ConfigDrivenOpacity,k as DirectionSvg,f as DirectionTriangle,u as Empty,w as MovementTrail,L as MovementTrailWithDirection,P as PathStyleFunction,x as RuntimeOpacity,v as Template,S as WithMarkersAndPaths,b as WithPaths,it as __namedExportsOrder,h as allArgs,st as default};
