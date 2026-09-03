import{r as d,a as c,j as o}from"./iframe-B-bQ8-2T.js";import{z as g,G as Ce,H as Ae,J as C,K as Ie}from"./DropdownButton-DpvAnkHg.js";import{B as m}from"./Box-Cb51q2aG.js";import{S as E}from"./Stack-NkQdXg6W.js";import{B as S}from"./Button-CpFdI90F.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-C9Zr7okE.js";import"./SvgIcon-UN5gLgZI.js";import"./generateUtilityClass-CG5sjlGK.js";import"./styled-DOmm5J5B.js";import"./generateUtilityClasses-CA_BUpCf.js";import"./useTheme-B1KTYiIC.js";import"./Box-DUbUks71.js";import"./Container-BrNvvhUm.js";import"./styled-XA2qTXOU.js";import"./createStyled-F7qmmNU6.js";import"./useThemeProps-BqcDYrbJ.js";import"./FlexBox-BGamYhMG.js";import"./Typography-ichFhS_t.js";import"./Paper-UD-fH5lO.js";import"./useThemeProps-D43hB7uA.js";import"./Text-C2SnKuds.js";import"./AdapterDayjs-Bi2Myd6S.js";import"./Modal-BinRocgF.js";import"./utils-Cwu4GIe3.js";import"./TransitionGroupContext-D6yDpsO9.js";import"./index-CI_ZfTAb.js";import"./resolveComponentProps-DFyBBYGP.js";import"./Popover-7r96UTT2.js";import"./TextField-COG7v3AR.js";import"./useFormControl-C2Wl_Rfv.js";import"./createSvgIcon-yZopMPvq.js";import"./IconButton-CzJgcxFx.js";import"./ButtonBase-jFTlO58q.js";import"./DialogContent-MA-T71Pz.js";import"./Chip-Bxe4KEdd.js";import"./DateTimePicker-BRht8fYt.js";import"./Divider-OvS7Rpu4.js";import"./AppInfoRow-8RG6mUcJ.js";import"./Chip-d5Jlpmkz.js";import"./Divider-CwRXz9WH.js";import"./TreeView-C7jsPmrW.js";import"./Alert-qseOYOaL.js";import"./LinearProgress-zOhaivJ7.js";import"./Spinner-L5B8MxAA.js";import"./Dialog-CtpvfQA2.js";import"./MapToggleButtonPresentational-B6oRN28T.js";import"./Remove-DO2en3Z5.js";import"./LinkButton-k11oZu-9.js";import"./TextField-Di8tiFVP.js";import"./Switch-xgHe0pBA.js";import"./DatePicker-DKq07de7.js";import"./Paper-Br8iEvDm.js";import"./ErrorFallback-DJBh-Sr1.js";import"./ErrorFallbackText-DRx9AnrW.js";import"./ErrorFallbackWrapper-DH7xG75e.js";import"./Brand-CPR-mKV1.js";import"./constants-CdgyqUfC.js";import"./Edit-B7KGH8V2.js";const i=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0}],f={zoom:5,center:[0,0],layers:i,mapStyleOptions:void 0,markers:[],polygons:[],paths:[]},ot={title:"Component Library/Map/composites/BasicMapV2",component:g,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
        `}}},decorators:[r=>o(m,{sx:{width:"100vw",height:"100vh",margin:"auto"},children:r()})],argTypes:{},args:f},w={},k={args:{layers:i}},$=[{id:"path-1",type:"LineString",name:"Route A",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3}},{id:"path-2",type:"LineString",name:"Route B (dashed)",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]],style:{color:"#0066FF",width:2,lineDash:[10,5]}}],He=[{id:"marker-a",geohash:"gcpvj0",name:"Marker A (London)",style:{markerType:"pin",color:"#ff6600"}},{id:"marker-b",geohash:"u09tvw",name:"Marker B (Paris)",style:{markerType:"pin",color:"#0066ff"}}],y={args:{zoom:5,center:[2,49],layers:i.map(r=>({...r,visible:!0})),markers:He,polygons:[]},render:r=>{const[e,l]=d.useState([]),n=s=>l(t=>[s,...t].slice(0,12));return c(m,{sx:{position:"relative",width:"100%",height:"100%"},children:[o(g,{...r,onFeatureHover:(s,t)=>{const a=s===null?"hover: null":`hover: ${s} @ [${t==null?void 0:t.pixel[0]}, ${t==null?void 0:t.pixel[1]}]`;console.log(a),n(a)},onFeatureClick:(s,t)=>{const a=`click: [${s.join(", ")}]`+(t?` @ [${t.pixel[0]}, ${t.pixel[1]}]`:"");console.log(a),n(a)}}),c(m,{sx:{position:"absolute",top:8,right:8,minWidth:260,maxHeight:220,overflow:"auto",padding:1,background:"rgba(0,0,0,0.75)",color:"#fff",font:"12px/1.4 monospace",borderRadius:1,zIndex:10,pointerEvents:"none"},children:[o("div",{style:{fontWeight:600,marginBottom:4},children:"Feature events (newest first)"}),e.length===0&&o("div",{children:"Hover or click a marker…"}),e.map((s,t)=>o("div",{children:s},t))]})]})}},x={args:{layers:i,paths:$}},L={args:{layers:i,markers:[],paths:$}},R=[[-3.19,55.95],[-2.24,55.86],[-1.62,54.98],[-1.29,54.57],[-1.55,53.8],[-1.47,53.38],[-1.15,52.95],[-1.09,52.62],[-.78,52.04],[-.46,51.75],[-.13,51.51]];function Ee(r){return{r:Math.round(30+225*r),g:Math.round(80*(1-r)),b:Math.round(220*(1-r)+30)}}const We=R.slice(0,-1).map((r,e,l)=>{const n=e/(l.length-1),{r:s,g:t,b:a}=Ee(n),h=.3+.7*n,p=2+4*n;return{id:`trail-${e}`,type:"LineString",name:`Segment ${e+1}`,coordinates:[r,R[e+1]],style:{color:`rgba(${s}, ${t}, ${a}, ${h})`,width:p,lineCap:"round",lineJoin:"round"}}}),F={args:{zoom:6,center:[-1.5,53.5],layers:i,paths:We}},Ve=[{id:"tri-1",type:"LineString",name:"London → Paris → Berlin",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3,direction:{marker:{type:"triangle"},color:"#FF6600",size:12}}},{id:"tri-2",type:"LineString",name:"Edinburgh → Newcastle → Leeds",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]],style:{color:"#0066FF",width:3,direction:{marker:{type:"triangle"},color:"#003399",size:10}}}],z={args:{zoom:5,center:[2,52],layers:i,paths:Ve}},je=['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">','<path d="M8 4 L16 12 L8 20" fill="none" stroke="#FF6600" stroke-width="3"',' stroke-linecap="round" stroke-linejoin="round"/>',"</svg>"].join(""),Je=[{id:"svg-1",type:"LineString",name:"London → Paris → Berlin",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3,direction:{marker:{type:"svg",markup:je},size:16}}}],M={args:{zoom:5,center:[5,51],layers:i,paths:Je}},Ke=R.slice(0,-1).map((r,e,l)=>{const n=e/(l.length-1),{r:s,g:t,b:a}=Ee(n),h=.3+.7*n,p=2+4*n,u=`rgba(${s}, ${t}, ${a}, ${h})`;return{id:`dtrail-${e}`,type:"LineString",name:`Segment ${e+1}`,coordinates:[r,R[e+1]],style:{color:u,width:p,lineCap:"round",lineJoin:"round",direction:{marker:{type:"triangle"},color:u,size:4+6*n}}}}),B={args:{zoom:6,center:[-1.5,53.5],layers:i,paths:Ke}},_e=[{id:"osm-dimmed",kind:"base-raster",provider:"xyz",label:"OpenStreetMap (dimmed)",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0,opacity:.4}],T={args:{zoom:5,center:[0,0],layers:_e,paths:$}},qe=()=>{const r=d.useRef(null);return c(m,{sx:{width:"100%",height:"100%"},children:[c(E,{direction:"row",spacing:1,sx:{p:1,position:"absolute",zIndex:10},children:[o(S,{variant:"contained",size:"small",onClick:()=>{var e;return(e=r.current)==null?void 0:e.setLayerOpacity("osm",.3)},children:"Dim base layer"}),o(S,{variant:"contained",size:"small",onClick:()=>{var e;return(e=r.current)==null?void 0:e.setLayerOpacity("osm",1)},children:"Restore base layer"})]}),o(g,{ref:r,zoom:5,center:[0,0],layers:[{id:"osm",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0}],markers:[],polygons:[],paths:$})]})},D={render:()=>o(qe,{})},Ne=[{id:"path-a",type:"LineString",name:"Route A",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]]},{id:"path-b",type:"LineString",name:"Route B",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]]}],Ue=()=>{const r=d.useRef(null),[e,l]=d.useState("none"),n=d.useRef(null),s=d.useCallback(a=>{var u,O;const p=(((u=a.getId)==null?void 0:u.call(a))??((O=a.get)==null?void 0:O.call(a,"id")))===r.current;return new Ce({stroke:new Ae({color:p?"#FF6600":"#999999",width:p?5:2})})},[]),t=a=>{var p;r.current=a,l(a??"none");const h=(p=n.current)==null?void 0:p.layers.find(u=>u.get("id")===Ie);h==null||h.changed()};return c(m,{sx:{width:"100%",height:"100%"},children:[c(E,{direction:"row",spacing:1,sx:{p:1,position:"absolute",zIndex:10},children:[o(S,{variant:"contained",size:"small",onClick:()=>t("path-a"),children:"Select Route A"}),o(S,{variant:"contained",size:"small",onClick:()=>t("path-b"),children:"Select Route B"}),o(S,{variant:"outlined",size:"small",onClick:()=>t(null),children:"Clear selection"}),c(m,{sx:{alignSelf:"center",color:"#fff",pl:1},children:["Selected: ",e]})]}),o(g,{ref:n,zoom:5,center:[2,52],layers:i,markers:[],polygons:[],paths:Ne,pathStyle:s})]})},P={render:()=>o(Ue,{})},Oe={padding:2,font:"13px/1.5 monospace",background:"rgba(0,0,0,0.8)",color:"#fff",borderRadius:1,whiteSpace:"pre-wrap"};class Ge extends d.Component{constructor(){super(...arguments),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}render(){const{error:e}=this.state;return e?c(m,{sx:Oe,children:[o("strong",{children:"Error boundary caught the map"}),`

`,"instanceof MalformedFeatureError:"," ",String(e instanceof C),`
`,"featureId:"," ",e instanceof C?e.featureId:"n/a",`

`,e.message]}):this.props.children}}const Qe={id:"bad-path",type:"LineString",name:"Malformed route",coordinates:[-.1278,51.5074]},v={render:()=>o(Ge,{children:o(g,{zoom:5,center:[0,51],layers:i,markers:[],polygons:[],paths:[Qe]})})},Ye=()=>{const[r,e]=d.useState([]),l=d.useCallback(n=>{e(s=>[`${n.name}: ${n.message}`,...s])},[]);return c(E,{sx:{width:"100%",height:"100%"},children:[c(m,{sx:Oe,children:[o("strong",{children:"onError calls"}),`
`,r.length===0?"none yet":r.map((n,s)=>o("div",{children:n},s))]}),o(m,{sx:{flex:1},children:o(g,{zoom:5,center:[0,51],layers:[{kind:"not-a-real-kind"}],markers:[],polygons:[],paths:[],onError:l})})]})},b={render:()=>o(Ye,{})};var A,I,H;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  zoom: 5,
  center: [0, 0],
  layers: baseLayers,
  mapStyleOptions: undefined,
  markers: [],
  polygons: [],
  paths: []
}`,...(H=(I=f.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var W,V,j;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:"{}",...(j=(V=w.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var J,K,_;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    layers: baseLayers
  }
}`,...(_=(K=k.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var q,N,U,G,Q;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(Z=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,re,te;L.parameters={...L.parameters,docs:{...(ee=L.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    layers: baseLayers,
    markers: [],
    paths: samplePaths
  }
}`,...(te=(re=L.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,ne,ae;F.parameters={...F.parameters,docs:{...(oe=F.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    zoom: 6,
    center: [-1.5, 53.5],
    layers: baseLayers,
    paths: movementTrailPaths
  }
}`,...(ae=(ne=F.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,ie,ce;z.parameters={...z.parameters,docs:{...(se=z.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [2, 52],
    layers: baseLayers,
    paths: triangleDirectedPaths
  }
}`,...(ce=(ie=z.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,pe,de;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [5, 51],
    layers: baseLayers,
    paths: svgDirectedPaths
  }
}`,...(de=(pe=M.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var me,he,ue;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ve=(ye=T.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var be,fe,Se;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <RuntimeOpacityDemo />
}`,...(Se=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var we,ke,xe;P.parameters={...P.parameters,docs:{...(we=P.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <PathStyleFunctionDemo />
}`,...(xe=(ke=P.parameters)==null?void 0:ke.docs)==null?void 0:xe.source}}};var Le,Fe,ze,Me,Be;v.parameters={...v.parameters,docs:{...(Le=v.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <DemoErrorBoundary>
            <BasicMapV2 zoom={5} center={[0, 51]} layers={baseLayers} markers={[]} polygons={[]} paths={[malformedPath]} />
        </DemoErrorBoundary>
}`,...(ze=(Fe=v.parameters)==null?void 0:Fe.docs)==null?void 0:ze.source},description:{story:`Coordinates that contradict their declared \`type\` are a config mistake, so
they throw \`MalformedFeatureError\` while the map builds its features during
render. Nothing is drawn and nothing is cleared.

Without a boundary above the map this takes down the React root, which is
the intended fail-fast behaviour — wrap the map if the rest of the app
should survive it.`,...(Be=(Me=v.parameters)==null?void 0:Me.docs)==null?void 0:Be.description}}};var Te,De,Pe,Re,$e;b.parameters={...b.parameters,docs:{...(Te=b.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <LayerSetupFailureDemo />
}`,...(Pe=(De=b.parameters)==null?void 0:De.docs)==null?void 0:Pe.source},description:{story:"Layer setup is async and survivable, so it does not throw: `onError` fires\nand nothing is cleared. Here it fails on first load, so the map is blank —\non a later prop change the previous, now out-of-date, map would stay drawn.\n\nDrop the `onError` prop and the same failure only reaches the console.",...($e=(Re=b.parameters)==null?void 0:Re.docs)==null?void 0:$e.description}}};const nt=["allArgs","Empty","Template","FeatureEvents","WithPaths","WithMarkersAndPaths","MovementTrail","DirectionTriangle","DirectionSvg","MovementTrailWithDirection","ConfigDrivenOpacity","RuntimeOpacity","PathStyleFunction","MalformedFeatureThrows","LayerSetupFailureReportsToOnError"];export{T as ConfigDrivenOpacity,M as DirectionSvg,z as DirectionTriangle,w as Empty,y as FeatureEvents,b as LayerSetupFailureReportsToOnError,v as MalformedFeatureThrows,F as MovementTrail,B as MovementTrailWithDirection,P as PathStyleFunction,D as RuntimeOpacity,k as Template,L as WithMarkersAndPaths,x as WithPaths,nt as __namedExportsOrder,f as allArgs,ot as default};
