import{r as d,b as i,a as e}from"./iframe-BjrXztvy.js";import{E as Ye}from"./ErrorFallback-DxZnaklR.js";import{E as D}from"./ErrorFallbackText-CBSkGSIV.js";import{E as Qe}from"./ErrorFallbackWrapper-2Ab5_OqS.js";import{J as g,K as Ke,N as qe,O as Xe}from"./UserProfileContent-YwxxBLO1.js";import{B as p}from"./Box-F47BA0Hn.js";import{S as h}from"./Stack-K8HBDx6V.js";import{B as m}from"./Button-dBpFgvsm.js";import"./preload-helper-Dp1pzeXC.js";import"./Typography-WZdIHWv0.js";import"./clsx-B-dksMZM.js";import"./styled-CZSAv6ph.js";import"./extendSxProp-Bthi1mip.js";import"./composeClasses-fLhin0tj.js";import"./MapToggleButtonPresentational-bfG7yowY.js";import"./Remove-gsWyX-Lp.js";import"./createSvgIcon-CPBnrQiH.js";import"./SvgIcon-B5isJYog.js";import"./IconButton-Bn9Hma8U.js";import"./ButtonBase-DKC4tNwY.js";import"./TransitionGroupContext-Bkt8ykp0.js";import"./Paper-BZgZdenZ.js";import"./XIcon-ZQ00GxhK.js";import"./Box-D4Yea7CC.js";import"./Container-Dz0UBrhB.js";import"./styled-OzlqGBn7.js";import"./createStyled-ChpmfdhO.js";import"./useThemeProps-Ggzu69aw.js";import"./FlexBox-C2m_hHiB.js";import"./Brand-C4AyXs8s.js";import"./IconButton-BZNX4IRe.js";import"./LinkButton-BiG5XURl.js";import"./AppInfoRow-QQUqARHA.js";import"./_IconPopover-DMkjh4MO.js";import"./Popover-CHGOs9uC.js";import"./utils-BtEp1Xpe.js";import"./index-BxB4E5u0.js";import"./index-D0p7aeEW.js";import"./Modal-Cwfc4HGx.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-BF5TirMe.js";import"./useSlotProps-BNqAOz95.js";import"./InfoIcon-D83JWA8r.js";import"./Text-BkX1azto.js";import"./AppSettings-D0R77tUT.js";import"./CogIcon-DausHvAi.js";import"./Badge-CijpDrIE.js";import"./Badge-ChEc66ZK.js";import"./Chip-C4L73zbZ.js";import"./Chip-Cehwhsrm.js";import"./Divider-CEsBrrMM.js";import"./Divider-D90yCN7B.js";import"./dividerClasses-CmrggnBC.js";import"./ThemeSwitchRow-CzgtAJPj.js";import"./Skeleton-Cnro9Ssf.js";import"./Skeleton-YERebpLh.js";import"./TextField-Be_m1itn.js";import"./useFormControl-BXFuf1AA.js";import"./FormControl-CpIrVJXG.js";import"./ListContext-BbQ-ELWI.js";import"./useControlled-B3nW4gSi.js";import"./FormHelperText-DriOhB8T.js";import"./MenuItem-9AWDicSn.js";import"./ExpandMoreIcon-Drhp9NBW.js";import"./ListItem-BQbfhaNb.js";import"./Toolbar-NHe4wN1N.js";import"./Close-PYRyZLFk.js";import"./Popper-BP6_mYu6.js";import"./FormControlLabel-uXfgMOYb.js";import"./Edit-D7Wj015S.js";import"./SvgIcon-C9kKGRGN.js";import"./TableRow-BEr1GK-h.js";import"./TableCell-CKU-Sz5Y.js";import"./TreeView-C6Uvz5eX.js";import"./useThemeProps-DBqV773e.js";import"./index-fBdo_AAp.js";import"./Collapse-zg8g8jza.js";import"./Dialog-FcaLo1D3.js";import"./DialogContent-Cgw15Yeq.js";import"./Alert-DObdqKgJ.js";import"./useSlot-BZ0PDpI2.js";import"./LinearProgress-BPc8EmDZ.js";import"./LinearProgress-CzGVD_iw.js";import"./Spinner-CqnH8Z1g.js";import"./CircularProgress-BVSVe6Bz.js";import"./TextField-PgPe3GS0.js";import"./FormControl-CpHzLQRo.js";import"./FormHelperText-DGEG7tzH.js";import"./LabeledSwitch-CTvl5H5e.js";import"./Switch-CDvU1aS9.js";import"./Switch-DaX5OEsQ.js";import"./RadioGroup-MrifhHnI.js";import"./ToggleButton-CW3SCIEP.js";import"./ToggleButton-COzVB-Rg.js";import"./ToggleButtonGroup-CxQmKDVQ.js";import"./MenuItem-DfJXPFQL.js";import"./Tabs-UNb_SPs_.js";import"./AccordionSummary-cUjWgv_9.js";import"./Paper-BL8jtYAu.js";const c=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0}],f={zoom:5,center:[0,0],layers:c,markers:[],polygons:[],paths:[]},io={title:"Component Library/Map/composites/BasicMapV2",component:g,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
// markers and polygons are required. Pass [] for none.
// LayerSelector is rendered automatically.
<BasicMapV2 zoom={5} center={[0, 0]} markers={[]} polygons={[]} />
\`\`\`

### Base layer shapes

Raster:
\`\`\`ts
{
  kind: "base-raster",
  provider: "xyz",        // "osm" | "xyz" | "wmts"
  url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  label: "OpenStreetMap",
  previewImage: "/images/street.png",
  visible: true,
}
\`\`\`

Vector tiles:
\`\`\`ts
{
  kind: "base-vector-tiles",
  provider: "mapbox",     // "mapbox" | "maptiler" | "arcgis" | "custom"
  url: "https://.../VectorTileServer",
  label: "ArcGIS Streets",
  accessToken: ARC_GIS_API_TOKEN,
  previewImage: "/images/satellite.png",
  visible: false,
}
\`\`\`

---

### Things to know

Feature ids are one namespace across \`markers\`, \`polygons\` and \`paths\`.
\`panToFeature\` and \`onFeatureClick\` key on the id alone, and the marker layer
is searched first, so an id reused across the three resolves to the marker.

A \`polygons\` or \`paths\` record whose \`coordinates\` contradict its \`type\` is
skipped and reported through \`onError\` as a \`MalformedFeatureError\` naming the
\`featureId\`. The rest of the map draws, so wire \`onError\` up: a map missing one
polygon looks like a complete one. Skipping does not cover \`markers\` -- a
marker that cannot be converted aborts that whole update, taking the polygons
and paths with it.

Clicking a marker flies the view to it. Clicking a polygon or a path reports
through \`onFeatureClick\` without moving the view. Changing the \`markers\`,
\`polygons\` or \`paths\` props still re-frames the view around everything drawn.

This text documents the intended behaviour, the real limitations to watch for, and actionable workarounds so consumers of the component know exactly what to expect.
        `}}},decorators:[t=>e(p,{sx:{width:"100vw",height:"100vh",margin:"auto"},children:t()})],argTypes:{},args:f},S={},w={args:{layers:c}},C=[{id:"path-1",type:"LineString",name:"Route A",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3}},{id:"path-2",type:"LineString",name:"Route B (dashed)",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]],style:{color:"#0066FF",width:2,lineDash:[10,5]}}],Ze=[{id:"marker-a",geohash:"gcpvj0",name:"Marker A (London)",style:{markerType:"pin",color:"#ff6600"}},{id:"marker-b",geohash:"u09tvw",name:"Marker B (Paris)",style:{markerType:"pin",color:"#0066ff"}}],u={args:{zoom:5,center:[2,49],layers:c.map(t=>({...t,visible:!0})),markers:Ze,polygons:[]},render:t=>{const[o,s]=d.useState([]),n=a=>s(r=>[a,...r].slice(0,12));return i(p,{sx:{position:"relative",width:"100%",height:"100%"},children:[e(g,{...t,onFeatureHover:(a,r)=>{const l=a===null?"hover: null":`hover: ${a} @ [${r==null?void 0:r.pixel[0]}, ${r==null?void 0:r.pixel[1]}]`;console.log(l),n(l)},onFeatureClick:(a,r)=>{const l=`click: [${a.join(", ")}]`+(r?` @ [${r.pixel[0]}, ${r.pixel[1]}]`:"");console.log(l),n(l)}}),i(p,{sx:{position:"absolute",top:8,right:8,minWidth:260,maxHeight:220,overflow:"auto",padding:1,background:"rgba(0,0,0,0.75)",color:"#fff",font:"12px/1.4 monospace",borderRadius:1,zIndex:10,pointerEvents:"none"},children:[e("div",{style:{fontWeight:600,marginBottom:4},children:"Feature events (newest first)"}),o.length===0&&e("div",{children:"Hover or click a marker…"}),o.map((a,r)=>e("div",{children:a},r))]})]})}},y={args:{zoom:6,center:[-1.5,52.5],layers:c.map(t=>({...t,visible:!0})),markers:[{id:"marker-a",geohash:"gcpvj0",name:"Marker A (London)",style:{markerType:"pin",color:"#ff6600"}}],polygons:[{id:"polygon-a",type:"Polygon",name:"Polygon A (Midlands)",coordinates:[[[-2.8,52],[-.4,52],[-.4,53.2],[-2.8,53.2],[-2.8,52]]],style:{color:"#cc0000",backgroundColor:"rgba(204,0,0,0.35)"}}],paths:[{id:"path-a",type:"LineString",name:"Path A (Bristol to Norwich)",coordinates:[[-2.6,51.45],[-1.9,52.48],[1.3,52.63]],style:{color:"#00b3a4",width:5}}]},render:t=>{const[o,s]=d.useState([]),n=a=>s(r=>[a,...r].slice(0,12));return i(p,{sx:{position:"relative",width:"100%",height:"100%"},children:[e(g,{...t,onFeatureHover:(a,r)=>{const l=a===null?"hover: null":`hover: ${a} @ [${r==null?void 0:r.pixel[0]}, ${r==null?void 0:r.pixel[1]}]`;n(l)},onFeatureClick:(a,r)=>{const l=`click: [${a.join(", ")}]`+(r?` @ [${r.pixel[0]}, ${r.pixel[1]}]`:"");n(l)}}),i(p,{sx:{position:"absolute",top:8,right:8,minWidth:300,maxHeight:260,overflow:"auto",padding:1,background:"rgba(0,0,0,0.75)",color:"#fff",font:"12px/1.4 monospace",borderRadius:1,zIndex:10,pointerEvents:"none"},children:[e("div",{style:{fontWeight:600,marginBottom:4},children:"Feature events (newest first)"}),e("div",{style:{color:"#ff9a4d"},children:"Marker (orange pin): emits, and the map flies to it"}),e("div",{style:{color:"#ff6b6b"},children:"Polygon (red): emits, and the viewport stays put"}),e("div",{style:{color:"#4fd1c5",marginBottom:6},children:"Path (teal): emits, and the viewport stays put"}),o.length===0&&e("div",{children:"Click or hover each one..."}),o.map((a,r)=>e("div",{children:a},r))]})]})}},x={args:{layers:c,paths:C}},F={args:{layers:c,markers:[],paths:C}},$=[[-3.19,55.95],[-2.24,55.86],[-1.62,54.98],[-1.29,54.57],[-1.55,53.8],[-1.47,53.38],[-1.15,52.95],[-1.09,52.62],[-.78,52.04],[-.46,51.75],[-.13,51.51]];function Je(t){return{r:Math.round(30+225*t),g:Math.round(80*(1-t)),b:Math.round(220*(1-t)+30)}}const er=$.slice(0,-1).map((t,o,s)=>{const n=o/(s.length-1),{r:a,g:r,b:l}=Je(n),R=.3+.7*n,A=2+4*n;return{id:`trail-${o}`,type:"LineString",name:`Segment ${o+1}`,coordinates:[t,$[o+1]],style:{color:`rgba(${a}, ${r}, ${l}, ${R})`,width:A,lineCap:"round",lineJoin:"round"}}}),P={args:{zoom:6,center:[-1.5,53.5],layers:c,paths:er}},rr=[{id:"tri-1",type:"LineString",name:"London → Paris → Berlin",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3,direction:{marker:{type:"triangle"},color:"#FF6600",size:12}}},{id:"tri-2",type:"LineString",name:"Edinburgh → Newcastle → Leeds",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]],style:{color:"#0066FF",width:3,direction:{marker:{type:"triangle"},color:"#003399",size:10}}}],L={args:{zoom:5,center:[2,52],layers:c,paths:rr}},tr=['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">','<path d="M8 4 L16 12 L8 20" fill="none" stroke="#FF6600" stroke-width="3"',' stroke-linecap="round" stroke-linejoin="round"/>',"</svg>"].join(""),or=[{id:"svg-1",type:"LineString",name:"London → Paris → Berlin",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3,direction:{marker:{type:"svg",markup:tr},size:16}}}],z={args:{zoom:5,center:[5,51],layers:c,paths:or}},nr=$.slice(0,-1).map((t,o,s)=>{const n=o/(s.length-1),{r:a,g:r,b:l}=Je(n),R=.3+.7*n,A=2+4*n,I=`rgba(${a}, ${r}, ${l}, ${R})`;return{id:`dtrail-${o}`,type:"LineString",name:`Segment ${o+1}`,coordinates:[t,$[o+1]],style:{color:I,width:A,lineCap:"round",lineJoin:"round",direction:{marker:{type:"triangle"},color:I,size:4+6*n}}}}),B={args:{zoom:6,center:[-1.5,53.5],layers:c,paths:nr}},ar=[{id:"osm-dimmed",kind:"base-raster",provider:"xyz",label:"OpenStreetMap (dimmed)",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0,opacity:.4}],M={args:{zoom:5,center:[0,0],layers:ar,paths:C}},sr=()=>{const t=d.useRef(null);return i(p,{sx:{width:"100%",height:"100%"},children:[i(h,{direction:"row",spacing:1,sx:{p:1,position:"absolute",zIndex:10},children:[e(m,{variant:"contained",size:"small",onClick:()=>{var o;return(o=t.current)==null?void 0:o.setLayerOpacity("osm",.3)},children:"Dim base layer"}),e(m,{variant:"contained",size:"small",onClick:()=>{var o;return(o=t.current)==null?void 0:o.setLayerOpacity("osm",1)},children:"Restore base layer"})]}),e(g,{ref:t,zoom:5,center:[0,0],layers:[{id:"osm",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0}],markers:[],polygons:[],paths:C})]})},T={render:()=>e(sr,{})},ir=[{id:"path-a",type:"LineString",name:"Route A",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]]},{id:"path-b",type:"LineString",name:"Route B",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]]}],Ue=new Ke({stroke:new qe({color:"#FF6600",width:5})}),Ge=new Ke({stroke:new qe({color:"#999999",width:2})}),lr=()=>{const[t,o]=d.useState(null);return i(p,{sx:{width:"100%",height:"100%"},children:[i(h,{direction:"row",spacing:1,sx:{p:1,position:"absolute",zIndex:10},children:[e(m,{variant:"contained",size:"small",onClick:()=>o("path-a"),children:"Select Route A"}),e(m,{variant:"contained",size:"small",onClick:()=>o("path-b"),children:"Select Route B"}),e(m,{variant:"contained",size:"small",onClick:()=>o(null),children:"Clear selection"}),i(p,{sx:{alignSelf:"center",color:"#fff",pl:1},children:["Selected: ",t??"none"]})]}),e(g,{zoom:5,center:[2,52],layers:c,markers:[],polygons:[],paths:ir,pathStyle:n=>n.getId()===t?Ue:Ge})]})},E={render:()=>e(lr,{})},pr=[{id:"path-a",type:"LineString",name:"Route A (pink)",style:{color:"#FF2D95",width:4},coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]]},{id:"path-b",type:"LineString",name:"Route B (blue)",style:{color:"#00AAFF",width:4},coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]]}],cr=()=>{const[t,o]=d.useState(null),[s,n]=d.useState(!1);return i(p,{sx:{width:"100%",height:"100%"},children:[i(h,{spacing:1,sx:{p:1,m:1,position:"absolute",zIndex:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, 0.7)",borderRadius:1},children:[i(h,{direction:"row",spacing:1,alignItems:"center",children:[e(m,{variant:"contained",size:"small",onClick:()=>n(r=>!r),children:s?"Remove pathStyle":"Supply pathStyle"}),i(p,{children:["pathStyle ="," ",s?"a function (pink and blue are both overridden)":"undefined (each path draws its own style)"]})]}),i(h,{direction:"row",spacing:1,alignItems:"center",sx:{pl:3,borderLeft:"2px solid rgba(255,255,255,0.4)"},children:[e(m,{variant:"contained",size:"small",disabled:!s,onClick:()=>o("path-a"),children:"Set pathStyle orange: Route A (pink)"}),e(m,{variant:"contained",size:"small",disabled:!s,onClick:()=>o("path-b"),children:"Set pathStyle orange: Route B (blue)"}),e(m,{variant:"contained",size:"small",disabled:!s,onClick:()=>o(null),children:"All grey"}),i(p,{children:["orange: ",t??"none"]})]})]}),e(g,{zoom:5,center:[2,52],layers:c,markers:[],polygons:[],paths:pr,pathStyle:s?r=>r.getId()===t?Ue:Ge:void 0})]})},v={render:()=>e(cr,{})},dr={id:"bad-path",type:"LineString",name:"Malformed route",coordinates:[-.1278,51.5074]},mr={id:"good-path",type:"LineString",name:"Intact route",style:{color:"#FF2D95",width:4},coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]]},hr=()=>{const[t,o]=d.useState([]),s=d.useCallback(n=>{n instanceof Xe&&o(a=>[...a,n])},[]);return i(h,{sx:{width:"100%",height:"100%"},children:[e(Qe,{height:110,children:i(h,{spacing:.5,alignItems:"center",children:[e(D,{name:"BasicMapV2"}),e(D,{message:`onError calls: ${t.length}`}),t.map((n,a)=>e(D,{message:`MalformedFeatureError, featureId: ${n.featureId}`},`${n.featureId}-${a}`))]})}),e(p,{sx:{flex:1},children:e(g,{zoom:5,center:[2,52],layers:c,markers:[],polygons:[],paths:[dr,mr],onError:s})})]})},k={render:()=>e(hr,{})},gr=()=>{const[t,o]=d.useState(null),s=d.useCallback(n=>o(n),[]);return i(h,{sx:{width:"100%",height:"100%"},children:[t&&e(Ye,{name:"BasicMapV2 layers",message:`onError: ${t.message}`,height:96}),e(p,{sx:{flex:1},children:e(g,{zoom:5,center:[0,51],layers:[{kind:"not-a-real-kind"}],markers:[],polygons:[],paths:[],onError:s})})]})},b={render:()=>e(gr,{})},lo=["allArgs","Empty","Template","FeatureEvents","MarkerPolygonAndPathInteraction","WithPaths","WithMarkersAndPaths","MovementTrail","DirectionTriangle","DirectionSvg","MovementTrailWithDirection","ConfigDrivenOpacity","RuntimeOpacity","PathStyleFunction","PathStyleBeatsPerPathStyle","MalformedFeatureReportedToOnError","LayerSetupFailureReportsToOnError"];var O,H,W;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  zoom: 5,
  center: [0, 0],
  layers: baseLayers,
  markers: [],
  polygons: [],
  paths: []
}`,...(W=(H=f.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var V,j,_;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:"{}",...(_=(j=S.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var N,K,q;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    layers: baseLayers
  }
}`,...(q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var J,U,G,Y,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(G=(U=u.parameters)==null?void 0:U.docs)==null?void 0:G.source},description:{story:`Both \`onFeatureHover\` and \`onFeatureClick\` are wired to a debug panel that
shows the raw id + pixel the DS emits. Callback contract:

- \`onFeatureHover(id, { pixel })\` fires when the pointer enters a marker.
- \`onFeatureHover(null)\` fires when the pointer leaves the last-hovered
  marker (no pixel is included).
- Moving the pointer **within** the same marker does not re-fire.
- Moving directly from marker A to marker B fires once, with B's id and
  pixel — the id change implicitly signals A is no longer hovered.

The DS emits events only. The consuming app owns any popover / cursor /
highlight / throttling behaviour built on top of these events.`,...(Q=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Q.description}}};var X,Z,ee,re,te;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    zoom: 6,
    center: [-1.5, 52.5],
    layers: baseLayers.map(l => ({
      ...l,
      visible: true
    })),
    markers: [{
      id: "marker-a",
      geohash: "gcpvj0",
      name: "Marker A (London)",
      style: {
        markerType: "pin",
        color: "#ff6600"
      }
    }],
    polygons: [{
      id: "polygon-a",
      type: "Polygon",
      name: "Polygon A (Midlands)",
      coordinates: [[[-2.8, 52.0], [-0.4, 52.0], [-0.4, 53.2], [-2.8, 53.2], [-2.8, 52.0]]],
      style: {
        color: "#cc0000",
        backgroundColor: "rgba(204,0,0,0.35)"
      }
    }],
    paths: [{
      id: "path-a",
      type: "LineString",
      name: "Path A (Bristol to Norwich)",
      coordinates: [[-2.6, 51.45], [-1.9, 52.48], [1.3, 52.63]],
      style: {
        color: "#00b3a4",
        width: 5
      }
    }]
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
        push(line);
      }} onFeatureClick={(ids, event) => {
        const line = \`click: [\${ids.join(", ")}]\` + (event ? \` @ [\${event.pixel[0]}, \${event.pixel[1]}]\` : "");
        push(line);
      }} />
                <Box sx={{
        position: "absolute",
        top: 8,
        right: 8,
        minWidth: 300,
        maxHeight: 260,
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
                    <div style={{
          color: "#ff9a4d"
        }}>
                        Marker (orange pin): emits, and the map flies to it
                    </div>
                    <div style={{
          color: "#ff6b6b"
        }}>
                        Polygon (red): emits, and the viewport stays put
                    </div>
                    <div style={{
          color: "#4fd1c5",
          marginBottom: 6
        }}>
                        Path (teal): emits, and the viewport stays put
                    </div>
                    {log.length === 0 && <div>Click or hover each one...</div>}
                    {log.map((line, i) => <div key={i}>{line}</div>)}
                </Box>
            </Box>;
  }
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Only a marker click moves the view. Polygon and path clicks only fire the callbacks.",...(te=(re=y.parameters)==null?void 0:re.docs)==null?void 0:te.description}}};var oe,ne,ae;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    layers: baseLayers,
    paths: samplePaths
  }
}`,...(ae=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,ie,le;F.parameters={...F.parameters,docs:{...(se=F.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    layers: baseLayers,
    markers: [],
    paths: samplePaths
  }
}`,...(le=(ie=F.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var pe,ce,de;P.parameters={...P.parameters,docs:{...(pe=P.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    zoom: 6,
    center: [-1.5, 53.5],
    layers: baseLayers,
    paths: movementTrailPaths
  }
}`,...(de=(ce=P.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,he,ge;L.parameters={...L.parameters,docs:{...(me=L.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [2, 52],
    layers: baseLayers,
    paths: triangleDirectedPaths
  }
}`,...(ge=(he=L.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var ue,ye,ve;z.parameters={...z.parameters,docs:{...(ue=z.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [5, 51],
    layers: baseLayers,
    paths: svgDirectedPaths
  }
}`,...(ve=(ye=z.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var ke,be,fe;B.parameters={...B.parameters,docs:{...(ke=B.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    zoom: 6,
    center: [-1.5, 53.5],
    layers: baseLayers,
    paths: directedTrailPaths
  }
}`,...(fe=(be=B.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var Se,we,xe;M.parameters={...M.parameters,docs:{...(Se=M.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [0, 0],
    layers: dimmedBaseLayers,
    paths: samplePaths
  }
}`,...(xe=(we=M.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var Fe,Pe,Le;T.parameters={...T.parameters,docs:{...(Fe=T.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => <RuntimeOpacityDemo />
}`,...(Le=(Pe=T.parameters)==null?void 0:Pe.docs)==null?void 0:Le.source}}};var ze,Be,Me;E.parameters={...E.parameters,docs:{...(ze=E.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <PathStyleFunctionDemo />
}`,...(Me=(Be=E.parameters)==null?void 0:Be.docs)==null?void 0:Me.source}}};var Te,Ee,$e,Ce,Re;v.parameters={...v.parameters,docs:{...(Te=v.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <PathStyleBeatsPerPathStyleDemo />
}`,...($e=(Ee=v.parameters)==null?void 0:Ee.docs)==null?void 0:$e.source},description:{story:"`pathStyle` overrides each path's own `style`.",...(Re=(Ce=v.parameters)==null?void 0:Ce.docs)==null?void 0:Re.description}}};var Ae,De,Ie,Oe,He;k.parameters={...k.parameters,docs:{...(Ae=k.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => <MalformedFeatureReportedDemo />
}`,...(Ie=(De=k.parameters)==null?void 0:De.docs)==null?void 0:Ie.source},description:{story:"The malformed path is skipped and reported through `onError`. The other path still draws.",...(He=(Oe=k.parameters)==null?void 0:Oe.docs)==null?void 0:He.description}}};var We,Ve,je,_e,Ne;b.parameters={...b.parameters,docs:{...(We=b.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => <LayerSetupFailureDemo />
}`,...(je=(Ve=b.parameters)==null?void 0:Ve.docs)==null?void 0:je.source},description:{story:"An unknown layer kind fails layer setup. The map stays blank and `onError` fires.",...(Ne=(_e=b.parameters)==null?void 0:_e.docs)==null?void 0:Ne.description}}};export{M as ConfigDrivenOpacity,z as DirectionSvg,L as DirectionTriangle,S as Empty,u as FeatureEvents,b as LayerSetupFailureReportsToOnError,k as MalformedFeatureReportedToOnError,y as MarkerPolygonAndPathInteraction,P as MovementTrail,B as MovementTrailWithDirection,v as PathStyleBeatsPerPathStyle,E as PathStyleFunction,T as RuntimeOpacity,w as Template,F as WithMarkersAndPaths,x as WithPaths,lo as __namedExportsOrder,f as allArgs,io as default};
