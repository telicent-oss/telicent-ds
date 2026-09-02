import{r as h,a as d,j as a}from"./iframe-PEp56x0L.js";import{z as T,G as fe,H as xe,J as Le}from"./DropdownButton-DIhkXD6k.js";import{B as g}from"./Box-B6o03S8c.js";import{S as Se}from"./Stack-DOKcr6kC.js";import{B as v}from"./Button-C-dOB-9O.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-D5IxtVu8.js";import"./SvgIcon-Sjk8HnLS.js";import"./generateUtilityClass-ClfZNa_Z.js";import"./styled-DLDrBRHj.js";import"./generateUtilityClasses-DyOVJn4A.js";import"./useTheme-BSZw5MN3.js";import"./Box-BK9nt8mC.js";import"./Container-BIc8O_Mt.js";import"./styled-Bi96YKYe.js";import"./createStyled-C7aUgp1f.js";import"./useThemeProps-Cns6hruQ.js";import"./FlexBox-DO_yedUE.js";import"./Typography-BuaG1Q_e.js";import"./Paper-DH1tTpJY.js";import"./useThemeProps-BluO84mO.js";import"./Text-BE9OT0g0.js";import"./AdapterDayjs-Dl03QCHE.js";import"./Modal-BiN3QZLT.js";import"./utils-CjMfhMWa.js";import"./TransitionGroupContext-AlRG3TLe.js";import"./index-ChOmoK9v.js";import"./resolveComponentProps-BOHALUfl.js";import"./Popover-CbB3GNQq.js";import"./TextField-CsyMD93w.js";import"./useFormControl-CmlejeOA.js";import"./createSvgIcon-B5D28-yf.js";import"./IconButton-Bty9UGTd.js";import"./ButtonBase-DfDt7dR7.js";import"./DialogContent-DdWBBj2i.js";import"./Chip-BzXyx1AI.js";import"./DateTimePicker-BlxDUfXp.js";import"./Divider-CPPkD8Ie.js";import"./AppInfoRow-CSs3ltLs.js";import"./Chip-xsskzt6u.js";import"./Divider-DFIJxqAs.js";import"./TreeView-Dc7Dm28S.js";import"./Alert-DH9l2_TQ.js";import"./LinearProgress-B8IpbQWX.js";import"./Spinner-C87LgWra.js";import"./Dialog-oL1MMI-D.js";import"./MapToggleButtonPresentational-BtNkUaS3.js";import"./Remove--QcwsUg6.js";import"./LinkButton-BxGp1dVi.js";import"./TextField-C_MLZHVa.js";import"./Switch-GGOdHWhI.js";import"./DatePicker--hD8iESL.js";import"./Paper-C-HgjC5-.js";import"./ErrorFallback-D4sVfazA.js";import"./ErrorFallbackText-C2TGfnqH.js";import"./ErrorFallbackWrapper-Bex9JT82.js";import"./Brand-Bq5i3QYE.js";import"./constants-5heSMDpw.js";import"./Edit-SjiPNWdK.js";const i=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0}],y={zoom:5,center:[0,0],layers:i,mapStyleOptions:void 0,markers:[],polygons:[],paths:[]},Wr={title:"Component Library/Map/composites/BasicMapV2",component:T,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
        `}}},decorators:[r=>a(g,{sx:{width:"100vw",height:"100vh",margin:"auto"},children:r()})],argTypes:{},args:y},b={},k={args:{layers:i}},R=[{id:"path-1",type:"LineString",name:"Route A",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3}},{id:"path-2",type:"LineString",name:"Route B (dashed)",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]],style:{color:"#0066FF",width:2,lineDash:[10,5]}}],ze=[{id:"marker-a",geohash:"gcpvj0",name:"Marker A (London)",style:{markerType:"pin",color:"#ff6600"}},{id:"marker-b",geohash:"u09tvw",name:"Marker B (Paris)",style:{markerType:"pin",color:"#0066ff"}}],u={args:{zoom:5,center:[2,49],layers:i.map(r=>({...r,visible:!0})),markers:ze,polygons:[]},render:r=>{const[t,p]=h.useState([]),n=s=>p(e=>[s,...e].slice(0,12));return d(g,{sx:{position:"relative",width:"100%",height:"100%"},children:[a(T,{...r,onFeatureHover:(s,e)=>{const o=s===null?"hover: null":`hover: ${s} @ [${e==null?void 0:e.pixel[0]}, ${e==null?void 0:e.pixel[1]}]`;console.log(o),n(o)},onFeatureClick:(s,e)=>{const o=`click: [${s.join(", ")}]`+(e?` @ [${e.pixel[0]}, ${e.pixel[1]}]`:"");console.log(o),n(o)}}),d(g,{sx:{position:"absolute",top:8,right:8,minWidth:260,maxHeight:220,overflow:"auto",padding:1,background:"rgba(0,0,0,0.75)",color:"#fff",font:"12px/1.4 monospace",borderRadius:1,zIndex:10,pointerEvents:"none"},children:[a("div",{style:{fontWeight:600,marginBottom:4},children:"Feature events (newest first)"}),t.length===0&&a("div",{children:"Hover or click a marker…"}),t.map((s,e)=>a("div",{children:s},e))]})]})}},S={args:{layers:i,paths:R}},w={args:{layers:i,markers:[],paths:R}},P=[[-3.19,55.95],[-2.24,55.86],[-1.62,54.98],[-1.29,54.57],[-1.55,53.8],[-1.47,53.38],[-1.15,52.95],[-1.09,52.62],[-.78,52.04],[-.46,51.75],[-.13,51.51]];function we(r){return{r:Math.round(30+225*r),g:Math.round(80*(1-r)),b:Math.round(220*(1-r)+30)}}const Fe=P.slice(0,-1).map((r,t,p)=>{const n=t/(p.length-1),{r:s,g:e,b:o}=we(n),l=.3+.7*n,c=2+4*n;return{id:`trail-${t}`,type:"LineString",name:`Segment ${t+1}`,coordinates:[r,P[t+1]],style:{color:`rgba(${s}, ${e}, ${o}, ${l})`,width:c,lineCap:"round",lineJoin:"round"}}}),f={args:{zoom:6,center:[-1.5,53.5],layers:i,paths:Fe}},Be=[{id:"tri-1",type:"LineString",name:"London → Paris → Berlin",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3,direction:{marker:{type:"triangle"},color:"#FF6600",size:12}}},{id:"tri-2",type:"LineString",name:"Edinburgh → Newcastle → Leeds",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]],style:{color:"#0066FF",width:3,direction:{marker:{type:"triangle"},color:"#003399",size:10}}}],x={args:{zoom:5,center:[2,52],layers:i,paths:Be}},Me=['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">','<path d="M8 4 L16 12 L8 20" fill="none" stroke="#FF6600" stroke-width="3"',' stroke-linecap="round" stroke-linejoin="round"/>',"</svg>"].join(""),Pe=[{id:"svg-1",type:"LineString",name:"London → Paris → Berlin",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3,direction:{marker:{type:"svg",markup:Me},size:16}}}],L={args:{zoom:5,center:[5,51],layers:i,paths:Pe}},Te=P.slice(0,-1).map((r,t,p)=>{const n=t/(p.length-1),{r:s,g:e,b:o}=we(n),l=.3+.7*n,c=2+4*n,m=`rgba(${s}, ${e}, ${o}, ${l})`;return{id:`dtrail-${t}`,type:"LineString",name:`Segment ${t+1}`,coordinates:[r,P[t+1]],style:{color:m,width:c,lineCap:"round",lineJoin:"round",direction:{marker:{type:"triangle"},color:m,size:4+6*n}}}}),z={args:{zoom:6,center:[-1.5,53.5],layers:i,paths:Te}},Re=[{id:"osm-dimmed",kind:"base-raster",provider:"xyz",label:"OpenStreetMap (dimmed)",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0,opacity:.4}],F={args:{zoom:5,center:[0,0],layers:Re,paths:R}},$e=()=>{const r=h.useRef(null);return d(g,{sx:{width:"100%",height:"100%"},children:[d(Se,{direction:"row",spacing:1,sx:{p:1,position:"absolute",zIndex:10},children:[a(v,{variant:"contained",size:"small",onClick:()=>{var t;return(t=r.current)==null?void 0:t.setLayerOpacity("osm",.3)},children:"Dim base layer"}),a(v,{variant:"contained",size:"small",onClick:()=>{var t;return(t=r.current)==null?void 0:t.setLayerOpacity("osm",1)},children:"Restore base layer"})]}),a(T,{ref:r,zoom:5,center:[0,0],layers:[{id:"osm",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0}],markers:[],polygons:[],paths:R})]})},B={render:()=>a($e,{})},De=[{id:"path-a",type:"LineString",name:"Route A",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]]},{id:"path-b",type:"LineString",name:"Route B",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]]}],Oe=()=>{const r=h.useRef(null),[t,p]=h.useState("none"),n=h.useRef(null),s=h.useCallback(o=>{var m,$;const c=(((m=o.getId)==null?void 0:m.call(o))??(($=o.get)==null?void 0:$.call(o,"id")))===r.current;return new fe({stroke:new xe({color:c?"#FF6600":"#999999",width:c?5:2})})},[]),e=o=>{var c;r.current=o,p(o??"none");const l=(c=n.current)==null?void 0:c.layers.find(m=>m.get("id")===Le);l==null||l.changed()};return d(g,{sx:{width:"100%",height:"100%"},children:[d(Se,{direction:"row",spacing:1,sx:{p:1,position:"absolute",zIndex:10},children:[a(v,{variant:"contained",size:"small",onClick:()=>e("path-a"),children:"Select Route A"}),a(v,{variant:"contained",size:"small",onClick:()=>e("path-b"),children:"Select Route B"}),a(v,{variant:"outlined",size:"small",onClick:()=>e(null),children:"Clear selection"}),d(g,{sx:{alignSelf:"center",color:"#fff",pl:1},children:["Selected: ",t]})]}),a(T,{ref:n,zoom:5,center:[2,52],layers:i,markers:[],polygons:[],paths:De,pathStyle:s})]})},M={render:()=>a(Oe,{})};var D,O,C;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  zoom: 5,
  center: [0, 0],
  layers: baseLayers,
  mapStyleOptions: undefined,
  markers: [],
  polygons: [],
  paths: []
}`,...(C=(O=y.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var A,H,I;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:"{}",...(I=(H=b.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var E,W,j;k.parameters={...k.parameters,docs:{...(E=k.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    layers: baseLayers
  }
}`,...(j=(W=k.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var V,J,_,q,K;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [2, 49],
    layers: baseLayers.map(l => ({
      ...l,
      visible: true
    })),
    markers: eventMarkers,
    polygons: []
  },
  render: args => {
    const [log, setLog] = useState<string[]>([]);
    const push = (line: string) => setLog(prev => [line, ...prev].slice(0, 12));
    return <Box sx={{
      position: "relative",
      width: "100%",
      height: "100%"
    }}>
                <BasicMapV2 {...args} onFeatureHover={(id, event) => {
        const line = id === null ? "hover: null" : \`hover: \${id} @ [\${event?.pixel[0]}, \${event?.pixel[1]}]\`;
        console.log(line);
        push(line);
      }} onFeatureClick={(ids, event) => {
        const line = \`click: [\${ids.join(", ")}]\` + (event ? \` @ [\${event.pixel[0]}, \${event.pixel[1]}]\` : "");
        console.log(line);
        push(line);
      }} />
                <Box sx={{
        position: "absolute",
        top: 8,
        right: 8,
        minWidth: 260,
        maxHeight: 220,
        overflow: "auto",
        padding: 1,
        background: "rgba(0,0,0,0.75)",
        color: "#fff",
        font: "12px/1.4 monospace",
        borderRadius: 1,
        zIndex: 10,
        pointerEvents: "none"
      }}>
                    <div style={{
          fontWeight: 600,
          marginBottom: 4
        }}>
                        Feature events (newest first)
                    </div>
                    {log.length === 0 && <div>Hover or click a marker…</div>}
                    {log.map((line, i) => <div key={i}>{line}</div>)}
                </Box>
            </Box>;
  }
}`,...(_=(J=u.parameters)==null?void 0:J.docs)==null?void 0:_.source},description:{story:`Both \`onFeatureHover\` and \`onFeatureClick\` are wired to a debug panel that
shows the raw id + pixel the DS emits. Callback contract:

- \`onFeatureHover(id, { pixel })\` fires when the pointer enters a marker.
- \`onFeatureHover(null)\` fires when the pointer leaves the last-hovered
  marker (no pixel is included).
- Moving the pointer **within** the same marker does not re-fire.
- Moving directly from marker A to marker B fires once, with B's id and
  pixel — the id change implicitly signals A is no longer hovered.

The DS emits events only. The consuming app owns any popover / cursor /
highlight / throttling behaviour built on top of these events.`,...(K=(q=u.parameters)==null?void 0:q.docs)==null?void 0:K.description}}};var U,G,N;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    layers: baseLayers,
    paths: samplePaths
  }
}`,...(N=(G=S.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var Q,Y,X;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    layers: baseLayers,
    markers: [],
    paths: samplePaths
  }
}`,...(X=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var Z,ee,re;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    zoom: 6,
    center: [-1.5, 53.5],
    layers: baseLayers,
    paths: movementTrailPaths
  }
}`,...(re=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,oe,ne;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [2, 52],
    layers: baseLayers,
    paths: triangleDirectedPaths
  }
}`,...(ne=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var se,ae,ie;L.parameters={...L.parameters,docs:{...(se=L.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [5, 51],
    layers: baseLayers,
    paths: svgDirectedPaths
  }
}`,...(ie=(ae=L.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var ce,le,pe;z.parameters={...z.parameters,docs:{...(ce=z.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    zoom: 6,
    center: [-1.5, 53.5],
    layers: baseLayers,
    paths: directedTrailPaths
  }
}`,...(pe=(le=z.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var me,de,he;F.parameters={...F.parameters,docs:{...(me=F.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [0, 0],
    layers: dimmedBaseLayers,
    paths: samplePaths
  }
}`,...(he=(de=F.parameters)==null?void 0:de.docs)==null?void 0:he.source}}};var ge,ue,ye;B.parameters={...B.parameters,docs:{...(ge=B.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <RuntimeOpacityDemo />
}`,...(ye=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:ye.source}}};var ve,be,ke;M.parameters={...M.parameters,docs:{...(ve=M.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <PathStyleFunctionDemo />
}`,...(ke=(be=M.parameters)==null?void 0:be.docs)==null?void 0:ke.source}}};const jr=["allArgs","Empty","Template","FeatureEvents","WithPaths","WithMarkersAndPaths","MovementTrail","DirectionTriangle","DirectionSvg","MovementTrailWithDirection","ConfigDrivenOpacity","RuntimeOpacity","PathStyleFunction"];export{F as ConfigDrivenOpacity,L as DirectionSvg,x as DirectionTriangle,b as Empty,u as FeatureEvents,f as MovementTrail,z as MovementTrailWithDirection,M as PathStyleFunction,B as RuntimeOpacity,k as Template,w as WithMarkersAndPaths,S as WithPaths,jr as __namedExportsOrder,y as allArgs,Wr as default};
