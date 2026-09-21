import{r as d,a as i,j as e}from"./iframe-DJ7o9sjN.js";import{x as g,y as je,z as Ve,F as qe}from"./DropdownButton-DAoCEQns.js";import{E as Ge}from"./ErrorFallback-DHAi4B_j.js";import{E as O}from"./ErrorFallbackText-Bec6RRTL.js";import{E as Ue}from"./ErrorFallbackWrapper-D5su5Bh0.js";import{B as c}from"./Box-DwCOAluV.js";import{S as h}from"./Stack-BXgzYG84.js";import{B as m}from"./Button-C6ZWAVf1.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BbRdVOeE.js";import"./SvgIcon-CTRLopq-.js";import"./generateUtilityClass-NKEQXImD.js";import"./styled-B2Xsi3Qk.js";import"./generateUtilityClasses-B-H4mZpl.js";import"./useTheme-Dpcr6gVj.js";import"./Box-DagEX-RT.js";import"./Container-LfFMcqXO.js";import"./styled-Dc3Vu47j.js";import"./createStyled-DrRmjKFf.js";import"./useThemeProps-CulH-gMG.js";import"./FlexBox-CmKMLmja.js";import"./Typography-C3brZaXz.js";import"./Paper-DDqXORou.js";import"./useThemeProps-CGNqp4tk.js";import"./Text-CKYvVaQ3.js";import"./AdapterDayjs-e4cXOfxK.js";import"./Modal-D5bludlO.js";import"./utils-CXw9cUDE.js";import"./TransitionGroupContext-sf3TMEzC.js";import"./index-B7OBf6J8.js";import"./resolveComponentProps-DkEIZkOn.js";import"./Popover-Ws6V5nr9.js";import"./TextField-6M-OFJd4.js";import"./useFormControl-nxKSvLFH.js";import"./createSvgIcon-D0s82IB_.js";import"./IconButton-BZ9JsQ-4.js";import"./ButtonBase-XfSRIF2e.js";import"./DialogContent-n4vctS3x.js";import"./Chip-C6Fuob-a.js";import"./DateTimePicker-BzN4rV0M.js";import"./Divider-9TcGx5Qj.js";import"./AppInfoRow-B1OC277z.js";import"./Chip-4RBVK7P0.js";import"./Divider-CjS48Yb2.js";import"./TreeView-DnOkJcqx.js";import"./Alert-BiDnlkQN.js";import"./LinearProgress-qzie4g_h.js";import"./Spinner-D2gZDfJD.js";import"./Dialog-CFePTt5u.js";import"./MapToggleButtonPresentational-xRw_q0vm.js";import"./Remove-CwDdSJFc.js";import"./LinkButton-gt6rYSIe.js";import"./TextField-DZNSB9tK.js";import"./Switch-CXrRH0j2.js";import"./DatePicker-B18NgSFC.js";import"./Paper-Bl0ow7oP.js";import"./Brand-BjLIRTja.js";import"./Edit-BaBc2Yf-.js";const p=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0}],f={zoom:5,center:[0,0],layers:p,mapStyleOptions:void 0,markers:[],polygons:[],paths:[]},ut={title:"Component Library/Map/composites/BasicMapV2",component:g,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
// markers and polygons are required; pass empty arrays for a bare map.
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
        `}}},decorators:[t=>e(c,{sx:{width:"100vw",height:"100vh",margin:"auto"},children:t()})],argTypes:{},args:f},k={},b={args:{layers:p}},$=[{id:"path-1",type:"LineString",name:"Route A",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3}},{id:"path-2",type:"LineString",name:"Route B (dashed)",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]],style:{color:"#0066FF",width:2,lineDash:[10,5]}}],Je=[{id:"marker-a",geohash:"gcpvj0",name:"Marker A (London)",style:{markerType:"pin",color:"#ff6600"}},{id:"marker-b",geohash:"u09tvw",name:"Marker B (Paris)",style:{markerType:"pin",color:"#0066ff"}}],u={args:{zoom:5,center:[2,49],layers:p.map(t=>({...t,visible:!0})),markers:Je,polygons:[]},render:t=>{const[o,s]=d.useState([]),n=a=>s(r=>[a,...r].slice(0,12));return i(c,{sx:{position:"relative",width:"100%",height:"100%"},children:[e(g,{...t,onFeatureHover:(a,r)=>{const l=a===null?"hover: null":`hover: ${a} @ [${r==null?void 0:r.pixel[0]}, ${r==null?void 0:r.pixel[1]}]`;console.log(l),n(l)},onFeatureClick:(a,r)=>{const l=`click: [${a.join(", ")}]`+(r?` @ [${r.pixel[0]}, ${r.pixel[1]}]`:"");console.log(l),n(l)}}),i(c,{sx:{position:"absolute",top:8,right:8,minWidth:260,maxHeight:220,overflow:"auto",padding:1,background:"rgba(0,0,0,0.75)",color:"#fff",font:"12px/1.4 monospace",borderRadius:1,zIndex:10,pointerEvents:"none"},children:[e("div",{style:{fontWeight:600,marginBottom:4},children:"Feature events (newest first)"}),o.length===0&&e("div",{children:"Hover or click a marker…"}),o.map((a,r)=>e("div",{children:a},r))]})]})}},y={args:{zoom:6,center:[-1.5,52.5],layers:p.map(t=>({...t,visible:!0})),markers:[{id:"marker-a",geohash:"gcpvj0",name:"Marker A (London)",style:{markerType:"pin",color:"#ff6600"}}],polygons:[{id:"polygon-a",type:"Polygon",name:"Polygon A (Midlands)",coordinates:[[[-2.8,52],[-.4,52],[-.4,53.2],[-2.8,53.2],[-2.8,52]]],style:{color:"#cc0000",backgroundColor:"rgba(204,0,0,0.35)"}}],paths:[{id:"path-a",type:"LineString",name:"Path A (Bristol to Norwich)",coordinates:[[-2.6,51.45],[-1.9,52.48],[1.3,52.63]],style:{color:"#00b3a4",width:5}}]},render:t=>{const[o,s]=d.useState([]),n=a=>s(r=>[a,...r].slice(0,12));return i(c,{sx:{position:"relative",width:"100%",height:"100%"},children:[e(g,{...t,onFeatureHover:(a,r)=>{const l=a===null?"hover: null":`hover: ${a} @ [${r==null?void 0:r.pixel[0]}, ${r==null?void 0:r.pixel[1]}]`;n(l)},onFeatureClick:(a,r)=>{const l=`click: [${a.join(", ")}]`+(r?` @ [${r.pixel[0]}, ${r.pixel[1]}]`:"");n(l)}}),i(c,{sx:{position:"absolute",top:8,right:8,minWidth:300,maxHeight:260,overflow:"auto",padding:1,background:"rgba(0,0,0,0.75)",color:"#fff",font:"12px/1.4 monospace",borderRadius:1,zIndex:10,pointerEvents:"none"},children:[e("div",{style:{fontWeight:600,marginBottom:4},children:"Feature events (newest first)"}),e("div",{style:{color:"#ff9a4d"},children:"Marker (orange pin): emits, and the map flies to it"}),e("div",{style:{color:"#ff6b6b"},children:"Polygon (red): emits, and the viewport stays put"}),e("div",{style:{color:"#4fd1c5",marginBottom:6},children:"Path (teal): emits, and the viewport stays put"}),o.length===0&&e("div",{children:"Click or hover each one..."}),o.map((a,r)=>e("div",{children:a},r))]})]})}},S={args:{layers:p,paths:$}},w={args:{layers:p,markers:[],paths:$}},C=[[-3.19,55.95],[-2.24,55.86],[-1.62,54.98],[-1.29,54.57],[-1.55,53.8],[-1.47,53.38],[-1.15,52.95],[-1.09,52.62],[-.78,52.04],[-.46,51.75],[-.13,51.51]];function _e(t){return{r:Math.round(30+225*t),g:Math.round(80*(1-t)),b:Math.round(220*(1-t)+30)}}const Ye=C.slice(0,-1).map((t,o,s)=>{const n=o/(s.length-1),{r:a,g:r,b:l}=_e(n),R=.3+.7*n,D=2+4*n;return{id:`trail-${o}`,type:"LineString",name:`Segment ${o+1}`,coordinates:[t,C[o+1]],style:{color:`rgba(${a}, ${r}, ${l}, ${R})`,width:D,lineCap:"round",lineJoin:"round"}}}),x={args:{zoom:6,center:[-1.5,53.5],layers:p,paths:Ye}},Qe=[{id:"tri-1",type:"LineString",name:"London → Paris → Berlin",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3,direction:{marker:{type:"triangle"},color:"#FF6600",size:12}}},{id:"tri-2",type:"LineString",name:"Edinburgh → Newcastle → Leeds",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]],style:{color:"#0066FF",width:3,direction:{marker:{type:"triangle"},color:"#003399",size:10}}}],F={args:{zoom:5,center:[2,52],layers:p,paths:Qe}},Xe=['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">','<path d="M8 4 L16 12 L8 20" fill="none" stroke="#FF6600" stroke-width="3"',' stroke-linecap="round" stroke-linejoin="round"/>',"</svg>"].join(""),Ze=[{id:"svg-1",type:"LineString",name:"London → Paris → Berlin",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3,direction:{marker:{type:"svg",markup:Xe},size:16}}}],L={args:{zoom:5,center:[5,51],layers:p,paths:Ze}},er=C.slice(0,-1).map((t,o,s)=>{const n=o/(s.length-1),{r:a,g:r,b:l}=_e(n),R=.3+.7*n,D=2+4*n,A=`rgba(${a}, ${r}, ${l}, ${R})`;return{id:`dtrail-${o}`,type:"LineString",name:`Segment ${o+1}`,coordinates:[t,C[o+1]],style:{color:A,width:D,lineCap:"round",lineJoin:"round",direction:{marker:{type:"triangle"},color:A,size:4+6*n}}}}),P={args:{zoom:6,center:[-1.5,53.5],layers:p,paths:er}},rr=[{id:"osm-dimmed",kind:"base-raster",provider:"xyz",label:"OpenStreetMap (dimmed)",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0,opacity:.4}],z={args:{zoom:5,center:[0,0],layers:rr,paths:$}},tr=()=>{const t=d.useRef(null);return i(c,{sx:{width:"100%",height:"100%"},children:[i(h,{direction:"row",spacing:1,sx:{p:1,position:"absolute",zIndex:10},children:[e(m,{variant:"contained",size:"small",onClick:()=>{var o;return(o=t.current)==null?void 0:o.setLayerOpacity("osm",.3)},children:"Dim base layer"}),e(m,{variant:"contained",size:"small",onClick:()=>{var o;return(o=t.current)==null?void 0:o.setLayerOpacity("osm",1)},children:"Restore base layer"})]}),e(g,{ref:t,zoom:5,center:[0,0],layers:[{id:"osm",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0}],markers:[],polygons:[],paths:$})]})},M={render:()=>e(tr,{})},or=[{id:"path-a",type:"LineString",name:"Route A",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]]},{id:"path-b",type:"LineString",name:"Route B",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]]}],Ne=new je({stroke:new Ve({color:"#FF6600",width:5})}),Ke=new je({stroke:new Ve({color:"#999999",width:2})}),nr=()=>{const[t,o]=d.useState(null);return i(c,{sx:{width:"100%",height:"100%"},children:[i(h,{direction:"row",spacing:1,sx:{p:1,position:"absolute",zIndex:10},children:[e(m,{variant:"contained",size:"small",onClick:()=>o("path-a"),children:"Select Route A"}),e(m,{variant:"contained",size:"small",onClick:()=>o("path-b"),children:"Select Route B"}),e(m,{variant:"contained",size:"small",onClick:()=>o(null),children:"Clear selection"}),i(c,{sx:{alignSelf:"center",color:"#fff",pl:1},children:["Selected: ",t??"none"]})]}),e(g,{zoom:5,center:[2,52],layers:p,markers:[],polygons:[],paths:or,pathStyle:n=>n.getId()===t?Ne:Ke})]})},B={render:()=>e(nr,{})},ar=[{id:"path-a",type:"LineString",name:"Route A (pink)",style:{color:"#FF2D95",width:4},coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]]},{id:"path-b",type:"LineString",name:"Route B (blue)",style:{color:"#00AAFF",width:4},coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]]}],sr=()=>{const[t,o]=d.useState(null),[s,n]=d.useState(!1);return i(c,{sx:{width:"100%",height:"100%"},children:[i(h,{spacing:1,sx:{p:1,m:1,position:"absolute",zIndex:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, 0.7)",borderRadius:1},children:[i(h,{direction:"row",spacing:1,alignItems:"center",children:[e(m,{variant:"contained",size:"small",onClick:()=>n(r=>!r),children:s?"Remove pathStyle":"Supply pathStyle"}),i(c,{children:["pathStyle ="," ",s?"a function (pink and blue are both overridden)":"undefined (each path draws its own style)"]})]}),i(h,{direction:"row",spacing:1,alignItems:"center",sx:{pl:3,borderLeft:"2px solid rgba(255,255,255,0.4)"},children:[e(m,{variant:"contained",size:"small",disabled:!s,onClick:()=>o("path-a"),children:"Set pathStyle orange: Route A (pink)"}),e(m,{variant:"contained",size:"small",disabled:!s,onClick:()=>o("path-b"),children:"Set pathStyle orange: Route B (blue)"}),e(m,{variant:"contained",size:"small",disabled:!s,onClick:()=>o(null),children:"All grey"}),i(c,{children:["orange: ",t??"none"]})]})]}),e(g,{zoom:5,center:[2,52],layers:p,markers:[],polygons:[],paths:ar,pathStyle:s?r=>r.getId()===t?Ne:Ke:void 0})]})},T={render:()=>e(sr,{})},ir={id:"bad-path",type:"LineString",name:"Malformed route",coordinates:[-.1278,51.5074]},lr={id:"good-path",type:"LineString",name:"Intact route",style:{color:"#FF2D95",width:4},coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]]},cr=()=>{const[t,o]=d.useState([]),s=d.useCallback(n=>{n instanceof qe&&o(a=>[...a,n])},[]);return i(h,{sx:{width:"100%",height:"100%"},children:[e(Ue,{height:110,children:i(h,{spacing:.5,alignItems:"center",children:[e(O,{name:"BasicMapV2"}),e(O,{message:`onError calls: ${t.length}`}),t.map((n,a)=>e(O,{message:`MalformedFeatureError, featureId: ${n.featureId}`},`${n.featureId}-${a}`))]})}),e(c,{sx:{flex:1},children:e(g,{zoom:5,center:[2,52],layers:p,markers:[],polygons:[],paths:[ir,lr],onError:s})})]})},E={render:()=>e(cr,{})},pr=()=>{const[t,o]=d.useState(null),s=d.useCallback(n=>o(n),[]);return i(h,{sx:{width:"100%",height:"100%"},children:[t&&e(Ge,{name:"BasicMapV2 layers",message:`onError: ${t.message}`,height:96}),e(c,{sx:{flex:1},children:e(g,{zoom:5,center:[0,51],layers:[{kind:"not-a-real-kind"}],markers:[],polygons:[],paths:[],onError:s})})]})},v={render:()=>e(pr,{})};var I,H,W;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  zoom: 5,
  center: [0, 0],
  layers: baseLayers,
  mapStyleOptions: undefined,
  markers: [],
  polygons: [],
  paths: []
}`,...(W=(H=f.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var j,V,_;k.parameters={...k.parameters,docs:{...(j=k.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(_=(V=k.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var N,K,q;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    layers: baseLayers
  }
}`,...(q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var G,U,J,Y,Q;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(U=u.parameters)==null?void 0:U.docs)==null?void 0:J.source},description:{story:`Both \`onFeatureHover\` and \`onFeatureClick\` are wired to a debug panel that
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
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:`Markers and polygons both emit click and hover events, and only the marker
moves the map.

Polygons live in their own OpenLayers layer rather than the marker layer.
Both layers are passed to the select and hover interactions, so both kinds
report through \`onFeatureClick\` and \`onFeatureHover\`.

Click the orange MARKER pin: the log fills and the map flies to it, which is
useful for a point. Click the POLYGON: the log fills and the viewport stays
put -- framing a clicked polygon would re-frame an area the size of the
polygon, which is rarely what an analyst wants mid-investigation.`,...(te=(re=y.parameters)==null?void 0:re.docs)==null?void 0:te.description}}};var oe,ne,ae;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    layers: baseLayers,
    paths: samplePaths
  }
}`,...(ae=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,ie,le;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    layers: baseLayers,
    markers: [],
    paths: samplePaths
  }
}`,...(le=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,pe,de;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    zoom: 6,
    center: [-1.5, 53.5],
    layers: baseLayers,
    paths: movementTrailPaths
  }
}`,...(de=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var me,he,ge;F.parameters={...F.parameters,docs:{...(me=F.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [2, 52],
    layers: baseLayers,
    paths: triangleDirectedPaths
  }
}`,...(ge=(he=F.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var ue,ye,ve;L.parameters={...L.parameters,docs:{...(ue=L.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [5, 51],
    layers: baseLayers,
    paths: svgDirectedPaths
  }
}`,...(ve=(ye=L.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var fe,ke,be;P.parameters={...P.parameters,docs:{...(fe=P.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    zoom: 6,
    center: [-1.5, 53.5],
    layers: baseLayers,
    paths: directedTrailPaths
  }
}`,...(be=(ke=P.parameters)==null?void 0:ke.docs)==null?void 0:be.source}}};var Se,we,xe;z.parameters={...z.parameters,docs:{...(Se=z.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [0, 0],
    layers: dimmedBaseLayers,
    paths: samplePaths
  }
}`,...(xe=(we=z.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var Fe,Le,Pe;M.parameters={...M.parameters,docs:{...(Fe=M.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => <RuntimeOpacityDemo />
}`,...(Pe=(Le=M.parameters)==null?void 0:Le.docs)==null?void 0:Pe.source}}};var ze,Me,Be;B.parameters={...B.parameters,docs:{...(ze=B.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <PathStyleFunctionDemo />
}`,...(Be=(Me=B.parameters)==null?void 0:Me.docs)==null?void 0:Be.source}}};var Te,Ee,Ce;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <PathStyleBeatsPerPathStyleDemo />
}`,...(Ce=(Ee=T.parameters)==null?void 0:Ee.docs)==null?void 0:Ce.source}}};var $e,Re,De;E.parameters={...E.parameters,docs:{...($e=E.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: () => <MalformedFeatureReportedDemo />
}`,...(De=(Re=E.parameters)==null?void 0:Re.docs)==null?void 0:De.source}}};var Oe,Ae,Ie,He,We;v.parameters={...v.parameters,docs:{...(Oe=v.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => <LayerSetupFailureDemo />
}`,...(Ie=(Ae=v.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source},description:{story:"Layer setup is async and survivable, so it does not throw: `onError` fires\nand nothing is cleared. Here it fails on first load, so the map is blank —\non a later prop change the previous, now out-of-date, map would stay drawn.\n\nDrop the `onError` prop and the same failure only reaches the console.",...(We=(He=v.parameters)==null?void 0:He.docs)==null?void 0:We.description}}};const yt=["allArgs","Empty","Template","FeatureEvents","MarkerPolygonAndPathInteraction","WithPaths","WithMarkersAndPaths","MovementTrail","DirectionTriangle","DirectionSvg","MovementTrailWithDirection","ConfigDrivenOpacity","RuntimeOpacity","PathStyleFunction","PathStyleBeatsPerPathStyle","MalformedFeatureReportedToOnError","LayerSetupFailureReportsToOnError"];export{z as ConfigDrivenOpacity,L as DirectionSvg,F as DirectionTriangle,k as Empty,u as FeatureEvents,v as LayerSetupFailureReportsToOnError,E as MalformedFeatureReportedToOnError,y as MarkerPolygonAndPathInteraction,x as MovementTrail,P as MovementTrailWithDirection,T as PathStyleBeatsPerPathStyle,B as PathStyleFunction,M as RuntimeOpacity,b as Template,w as WithMarkersAndPaths,S as WithPaths,yt as __namedExportsOrder,f as allArgs,ut as default};
