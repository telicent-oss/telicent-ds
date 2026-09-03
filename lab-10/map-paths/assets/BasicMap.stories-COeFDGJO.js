import{r as p,a as m,j as t}from"./iframe-Dy9lMmzB.js";import{z as g,G as Oe,H as Ce,J as Ie,K as Ae}from"./DropdownButton-BrGu84Gz.js";import{E as He}from"./ErrorFallback-D7lBO-St.js";import{E as O}from"./ErrorFallbackText-DxFvtQm8.js";import{E as Ve}from"./ErrorFallbackWrapper-BbmC-MtB.js";import{B as u}from"./Box-Co6pvyno.js";import{S as R}from"./Stack-B4iL1Uda.js";import{B as k}from"./Button-hEWvcwcz.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-lIlQD_Ok.js";import"./SvgIcon-CqTEOtHz.js";import"./generateUtilityClass-eiI2zB0n.js";import"./styled-RSvMl9gw.js";import"./generateUtilityClasses-IR8AtaB2.js";import"./useTheme-BclnZfmM.js";import"./Box-D8L85hdW.js";import"./Container-DjBIKTWZ.js";import"./styled-DtITPUZJ.js";import"./createStyled-CMAzb2jS.js";import"./useThemeProps-lwM53F9r.js";import"./FlexBox-BSJBSHE3.js";import"./Typography-C9bsTXqt.js";import"./Paper-5Ojvp1ys.js";import"./useThemeProps-DmFPjoYm.js";import"./Text-BrRsEWjj.js";import"./AdapterDayjs-WZ0psJGR.js";import"./Modal-C4MvL2kI.js";import"./utils-BCqmFNg9.js";import"./TransitionGroupContext-UWO09eUM.js";import"./index-BsTKollK.js";import"./resolveComponentProps-BFMJSbl6.js";import"./Popover-DpPjroTM.js";import"./TextField-DeGygbLG.js";import"./useFormControl-Kb5Mq5P1.js";import"./createSvgIcon-B4cQQdeP.js";import"./IconButton-Cd6JmYd-.js";import"./ButtonBase-CtbPWmI1.js";import"./DialogContent-oaarGkmL.js";import"./Chip-DcZ2ybHw.js";import"./DateTimePicker-TVNrZLsO.js";import"./Divider-BWvL84cf.js";import"./AppInfoRow-jj_TJA14.js";import"./Chip-CWm1ngwI.js";import"./Divider-CMTuK0oO.js";import"./TreeView-4GWeRKjj.js";import"./Alert-_fTylV9w.js";import"./LinearProgress-Jc3Fbfut.js";import"./Spinner-COSQ6Iia.js";import"./Dialog-BKq2jPEt.js";import"./MapToggleButtonPresentational-SuPgJWl8.js";import"./Remove-CXwcUTwz.js";import"./LinkButton-DtvFkHE6.js";import"./TextField-CH00GQAj.js";import"./Switch-YLPmESjX.js";import"./DatePicker-51MqrHAP.js";import"./Paper-ByN9AWpV.js";import"./Brand-Lfzxnjkd.js";import"./constants-B7WX-ceA.js";import"./Edit-V_Um_zMs.js";const i=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0}],f={zoom:5,center:[0,0],layers:i,mapStyleOptions:void 0,markers:[],polygons:[],paths:[]},nt={title:"Component Library/Map/composites/BasicMapV2",component:g,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
        `}}},decorators:[r=>t(u,{sx:{width:"100vw",height:"100vh",margin:"auto"},children:r()})],argTypes:{},args:f},w={},S={args:{layers:i}},$=[{id:"path-1",type:"LineString",name:"Route A",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3}},{id:"path-2",type:"LineString",name:"Route B (dashed)",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]],style:{color:"#0066FF",width:2,lineDash:[10,5]}}],We=[{id:"marker-a",geohash:"gcpvj0",name:"Marker A (London)",style:{markerType:"pin",color:"#ff6600"}},{id:"marker-b",geohash:"u09tvw",name:"Marker B (Paris)",style:{markerType:"pin",color:"#0066ff"}}],y={args:{zoom:5,center:[2,49],layers:i.map(r=>({...r,visible:!0})),markers:We,polygons:[]},render:r=>{const[e,c]=p.useState([]),n=s=>c(o=>[s,...o].slice(0,12));return m(u,{sx:{position:"relative",width:"100%",height:"100%"},children:[t(g,{...r,onFeatureHover:(s,o)=>{const a=s===null?"hover: null":`hover: ${s} @ [${o==null?void 0:o.pixel[0]}, ${o==null?void 0:o.pixel[1]}]`;console.log(a),n(a)},onFeatureClick:(s,o)=>{const a=`click: [${s.join(", ")}]`+(o?` @ [${o.pixel[0]}, ${o.pixel[1]}]`:"");console.log(a),n(a)}}),m(u,{sx:{position:"absolute",top:8,right:8,minWidth:260,maxHeight:220,overflow:"auto",padding:1,background:"rgba(0,0,0,0.75)",color:"#fff",font:"12px/1.4 monospace",borderRadius:1,zIndex:10,pointerEvents:"none"},children:[t("div",{style:{fontWeight:600,marginBottom:4},children:"Feature events (newest first)"}),e.length===0&&t("div",{children:"Hover or click a marker…"}),e.map((s,o)=>t("div",{children:s},o))]})]})}},x={args:{layers:i,paths:$}},F={args:{layers:i,markers:[],paths:$}},P=[[-3.19,55.95],[-2.24,55.86],[-1.62,54.98],[-1.29,54.57],[-1.55,53.8],[-1.47,53.38],[-1.15,52.95],[-1.09,52.62],[-.78,52.04],[-.46,51.75],[-.13,51.51]];function $e(r){return{r:Math.round(30+225*r),g:Math.round(80*(1-r)),b:Math.round(220*(1-r)+30)}}const je=P.slice(0,-1).map((r,e,c)=>{const n=e/(c.length-1),{r:s,g:o,b:a}=$e(n),d=.3+.7*n,l=2+4*n;return{id:`trail-${e}`,type:"LineString",name:`Segment ${e+1}`,coordinates:[r,P[e+1]],style:{color:`rgba(${s}, ${o}, ${a}, ${d})`,width:l,lineCap:"round",lineJoin:"round"}}}),L={args:{zoom:6,center:[-1.5,53.5],layers:i,paths:je}},Je=[{id:"tri-1",type:"LineString",name:"London → Paris → Berlin",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3,direction:{marker:{type:"triangle"},color:"#FF6600",size:12}}},{id:"tri-2",type:"LineString",name:"Edinburgh → Newcastle → Leeds",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]],style:{color:"#0066FF",width:3,direction:{marker:{type:"triangle"},color:"#003399",size:10}}}],z={args:{zoom:5,center:[2,52],layers:i,paths:Je}},Ke=['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">','<path d="M8 4 L16 12 L8 20" fill="none" stroke="#FF6600" stroke-width="3"',' stroke-linecap="round" stroke-linejoin="round"/>',"</svg>"].join(""),_e=[{id:"svg-1",type:"LineString",name:"London → Paris → Berlin",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3,direction:{marker:{type:"svg",markup:Ke},size:16}}}],M={args:{zoom:5,center:[5,51],layers:i,paths:_e}},qe=P.slice(0,-1).map((r,e,c)=>{const n=e/(c.length-1),{r:s,g:o,b:a}=$e(n),d=.3+.7*n,l=2+4*n,h=`rgba(${s}, ${o}, ${a}, ${d})`;return{id:`dtrail-${e}`,type:"LineString",name:`Segment ${e+1}`,coordinates:[r,P[e+1]],style:{color:h,width:l,lineCap:"round",lineJoin:"round",direction:{marker:{type:"triangle"},color:h,size:4+6*n}}}}),B={args:{zoom:6,center:[-1.5,53.5],layers:i,paths:qe}},Ne=[{id:"osm-dimmed",kind:"base-raster",provider:"xyz",label:"OpenStreetMap (dimmed)",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0,opacity:.4}],T={args:{zoom:5,center:[0,0],layers:Ne,paths:$}},Ue=()=>{const r=p.useRef(null);return m(u,{sx:{width:"100%",height:"100%"},children:[m(R,{direction:"row",spacing:1,sx:{p:1,position:"absolute",zIndex:10},children:[t(k,{variant:"contained",size:"small",onClick:()=>{var e;return(e=r.current)==null?void 0:e.setLayerOpacity("osm",.3)},children:"Dim base layer"}),t(k,{variant:"contained",size:"small",onClick:()=>{var e;return(e=r.current)==null?void 0:e.setLayerOpacity("osm",1)},children:"Restore base layer"})]}),t(g,{ref:r,zoom:5,center:[0,0],layers:[{id:"osm",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0}],markers:[],polygons:[],paths:$})]})},E={render:()=>t(Ue,{})},Ge=[{id:"path-a",type:"LineString",name:"Route A",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]]},{id:"path-b",type:"LineString",name:"Route B",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]]}],Qe=()=>{const r=p.useRef(null),[e,c]=p.useState("none"),n=p.useRef(null),s=p.useCallback(a=>{var h,C;const l=(((h=a.getId)==null?void 0:h.call(a))??((C=a.get)==null?void 0:C.call(a,"id")))===r.current;return new Oe({stroke:new Ce({color:l?"#FF6600":"#999999",width:l?5:2})})},[]),o=a=>{var l;r.current=a,c(a??"none");const d=(l=n.current)==null?void 0:l.layers.find(h=>h.get("id")===Ae);d==null||d.changed()};return m(u,{sx:{width:"100%",height:"100%"},children:[m(R,{direction:"row",spacing:1,sx:{p:1,position:"absolute",zIndex:10},children:[t(k,{variant:"contained",size:"small",onClick:()=>o("path-a"),children:"Select Route A"}),t(k,{variant:"contained",size:"small",onClick:()=>o("path-b"),children:"Select Route B"}),t(k,{variant:"outlined",size:"small",onClick:()=>o(null),children:"Clear selection"}),m(u,{sx:{alignSelf:"center",color:"#fff",pl:1},children:["Selected: ",e]})]}),t(g,{ref:n,zoom:5,center:[2,52],layers:i,markers:[],polygons:[],paths:Ge,pathStyle:s})]})},D={render:()=>t(Qe,{})};class Ye extends p.Component{constructor(){super(...arguments),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}render(){const{error:e}=this.state;return e?t(Ve,{height:"100%",children:m(R,{spacing:1,alignItems:"center",children:[t(O,{name:"BasicMapV2"}),t(O,{message:e.message}),t(O,{message:e instanceof Ie?`MalformedFeatureError, featureId: ${e.featureId}`:"not a MalformedFeatureError"})]})}):this.props.children}}const Xe={id:"bad-path",type:"LineString",name:"Malformed route",coordinates:[-.1278,51.5074]},v={render:()=>t(Ye,{children:t(g,{zoom:5,center:[0,51],layers:i,markers:[],polygons:[],paths:[Xe]})})},Ze=()=>{const[r,e]=p.useState(null),c=p.useCallback(n=>e(n),[]);return m(R,{sx:{width:"100%",height:"100%"},children:[r&&t(He,{name:"BasicMapV2 layers",message:`onError: ${r.message}`,height:96}),t(u,{sx:{flex:1},children:t(g,{zoom:5,center:[0,51],layers:[{kind:"not-a-real-kind"}],markers:[],polygons:[],paths:[],onError:c})})]})},b={render:()=>t(Ze,{})};var I,A,H;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  zoom: 5,
  center: [0, 0],
  layers: baseLayers,
  mapStyleOptions: undefined,
  markers: [],
  polygons: [],
  paths: []
}`,...(H=(A=f.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var V,W,j;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:"{}",...(j=(W=w.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var J,K,_;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    layers: baseLayers
  }
}`,...(_=(K=S.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var q,N,U,G,Q;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(U=(N=y.parameters)==null?void 0:N.docs)==null?void 0:U.source},description:{story:`Both \`onFeatureHover\` and \`onFeatureClick\` are wired to a debug panel that
shows the raw id + pixel the DS emits. Callback contract:

- \`onFeatureHover(id, { pixel })\` fires when the pointer enters a marker.
- \`onFeatureHover(null)\` fires when the pointer leaves the last-hovered
  marker (no pixel is included).
- Moving the pointer **within** the same marker does not re-fire.
- Moving directly from marker A to marker B fires once, with B's id and
  pixel — the id change implicitly signals A is no longer hovered.

The DS emits events only. The consuming app owns any popover / cursor /
highlight / throttling behaviour built on top of these events.`,...(Q=(G=y.parameters)==null?void 0:G.docs)==null?void 0:Q.description}}};var Y,X,Z;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    layers: baseLayers,
    paths: samplePaths
  }
}`,...(Z=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,re,te;F.parameters={...F.parameters,docs:{...(ee=F.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    layers: baseLayers,
    markers: [],
    paths: samplePaths
  }
}`,...(te=(re=F.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,ae,ne;L.parameters={...L.parameters,docs:{...(oe=L.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    zoom: 6,
    center: [-1.5, 53.5],
    layers: baseLayers,
    paths: movementTrailPaths
  }
}`,...(ne=(ae=L.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,ie,ce;z.parameters={...z.parameters,docs:{...(se=z.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [2, 52],
    layers: baseLayers,
    paths: triangleDirectedPaths
  }
}`,...(ce=(ie=z.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,pe,me;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [5, 51],
    layers: baseLayers,
    paths: svgDirectedPaths
  }
}`,...(me=(pe=M.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var de,he,ue;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    zoom: 6,
    center: [-1.5, 53.5],
    layers: baseLayers,
    paths: directedTrailPaths
  }
}`,...(ue=(he=B.parameters)==null?void 0:he.docs)==null?void 0:ue.source}}};var ge,ye,ve;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [0, 0],
    layers: dimmedBaseLayers,
    paths: samplePaths
  }
}`,...(ve=(ye=T.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var be,fe,ke;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <RuntimeOpacityDemo />
}`,...(ke=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:ke.source}}};var we,Se,xe;D.parameters={...D.parameters,docs:{...(we=D.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <PathStyleFunctionDemo />
}`,...(xe=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:xe.source}}};var Fe,Le,ze,Me,Be;v.parameters={...v.parameters,docs:{...(Fe=v.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => <DemoErrorBoundary>
            <BasicMapV2 zoom={5} center={[0, 51]} layers={baseLayers} markers={[]} polygons={[]} paths={[malformedPath]} />
        </DemoErrorBoundary>
}`,...(ze=(Le=v.parameters)==null?void 0:Le.docs)==null?void 0:ze.source},description:{story:`Coordinates that contradict their declared \`type\` are a config mistake, so
they throw \`MalformedFeatureError\` while the map builds its features during
render. Nothing is drawn and nothing is cleared.

Without a boundary above the map this takes down the React root, which is
the intended fail-fast behaviour — wrap the map if the rest of the app
should survive it.`,...(Be=(Me=v.parameters)==null?void 0:Me.docs)==null?void 0:Be.description}}};var Te,Ee,De,Pe,Re;b.parameters={...b.parameters,docs:{...(Te=b.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <LayerSetupFailureDemo />
}`,...(De=(Ee=b.parameters)==null?void 0:Ee.docs)==null?void 0:De.source},description:{story:"Layer setup is async and survivable, so it does not throw: `onError` fires\nand nothing is cleared. Here it fails on first load, so the map is blank —\non a later prop change the previous, now out-of-date, map would stay drawn.\n\nDrop the `onError` prop and the same failure only reaches the console.",...(Re=(Pe=b.parameters)==null?void 0:Pe.docs)==null?void 0:Re.description}}};const st=["allArgs","Empty","Template","FeatureEvents","WithPaths","WithMarkersAndPaths","MovementTrail","DirectionTriangle","DirectionSvg","MovementTrailWithDirection","ConfigDrivenOpacity","RuntimeOpacity","PathStyleFunction","MalformedFeatureThrows","LayerSetupFailureReportsToOnError"];export{T as ConfigDrivenOpacity,M as DirectionSvg,z as DirectionTriangle,w as Empty,y as FeatureEvents,b as LayerSetupFailureReportsToOnError,v as MalformedFeatureThrows,L as MovementTrail,B as MovementTrailWithDirection,D as PathStyleFunction,E as RuntimeOpacity,S as Template,F as WithMarkersAndPaths,x as WithPaths,st as __namedExportsOrder,f as allArgs,nt as default};
