import{r as d,a as l,j as t}from"./iframe-gcsprQu8.js";import{z as m,G as He,H as We,J as Ve}from"./DropdownButton-BEYokHfI.js";import{E as Ke}from"./ErrorFallback-Czlqph93.js";import{E as D}from"./ErrorFallbackText-B0OJ7dGV.js";import{E as Ne}from"./ErrorFallbackWrapper-CvCuGeu1.js";import{B as p}from"./Box-duLD_n9I.js";import{S as P}from"./Stack-WnSokjrQ.js";import{B as f}from"./Button-6XGc_Mph.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DBQbMpQO.js";import"./SvgIcon-BrFhojvn.js";import"./generateUtilityClass-tAFanvqs.js";import"./styled-z8yjWRGC.js";import"./generateUtilityClasses-DDrT0Wtx.js";import"./useTheme-DYSpqgqt.js";import"./Box-DlisZL_M.js";import"./Container-DW-RmcIK.js";import"./styled-TSmkR7dG.js";import"./createStyled-DK6Bqq-R.js";import"./useThemeProps-BoEg6sCY.js";import"./FlexBox-f8DYl4m8.js";import"./Typography-BCLgB6ka.js";import"./Paper-oUcZmdYu.js";import"./useThemeProps-BppZtYeL.js";import"./Text-rsvQkVmT.js";import"./AdapterDayjs-Slbj9gW0.js";import"./Modal-BaGNnkkV.js";import"./utils-C62NRfJo.js";import"./TransitionGroupContext-xOOqnej8.js";import"./index-DbhPxP1F.js";import"./resolveComponentProps-DY2kpSMT.js";import"./Popover-C7OtZNdh.js";import"./TextField-D8aa4wlH.js";import"./useFormControl-CkPXndg1.js";import"./createSvgIcon-DbfWGqHn.js";import"./IconButton-ky8TSI0p.js";import"./ButtonBase-hz2rw0D_.js";import"./DialogContent-BcSYLVkk.js";import"./Chip-BxW1HlJ1.js";import"./DateTimePicker-CZ7UH1aP.js";import"./Divider-C67hWBPC.js";import"./AppInfoRow-kdoUBD8Q.js";import"./Chip-BtQj1Pme.js";import"./Divider-DJBITA_4.js";import"./TreeView-XHup4me5.js";import"./Alert-CfSX2-sx.js";import"./LinearProgress--NVFbcjy.js";import"./Spinner-CBdnNGmx.js";import"./Dialog-CXB83sUj.js";import"./MapToggleButtonPresentational-BW1TnG_s.js";import"./Remove-BcvnJ2fA.js";import"./LinkButton-DITwVUJ_.js";import"./TextField-Cb3ChBpe.js";import"./Switch-87lKY-zI.js";import"./DatePicker-7eHGhlXt.js";import"./Paper-D1gwsZOW.js";import"./Brand-DIZ3HHdI.js";import"./constants-Bjiaa_c0.js";import"./Edit-C8e520cO.js";const i=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0}],v={zoom:5,center:[0,0],layers:i,mapStyleOptions:void 0,markers:[],polygons:[],paths:[]},dt={title:"Component Library/Map/composites/BasicMapV2",component:m,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
        `}}},decorators:[o=>t(p,{sx:{width:"100vw",height:"100vh",margin:"auto"},children:o()})],argTypes:{},args:v},b={},k={args:{layers:i}},$=[{id:"path-1",type:"LineString",name:"Route A",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3}},{id:"path-2",type:"LineString",name:"Route B (dashed)",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]],style:{color:"#0066FF",width:2,lineDash:[10,5]}}],_e=[{id:"marker-a",geohash:"gcpvj0",name:"Marker A (London)",style:{markerType:"pin",color:"#ff6600"}},{id:"marker-b",geohash:"u09tvw",name:"Marker B (Paris)",style:{markerType:"pin",color:"#0066ff"}}],h={args:{zoom:5,center:[2,49],layers:i.map(o=>({...o,visible:!0})),markers:_e,polygons:[]},render:o=>{const[e,c]=d.useState([]),a=n=>c(r=>[n,...r].slice(0,12));return l(p,{sx:{position:"relative",width:"100%",height:"100%"},children:[t(m,{...o,onFeatureHover:(n,r)=>{const s=n===null?"hover: null":`hover: ${n} @ [${r==null?void 0:r.pixel[0]}, ${r==null?void 0:r.pixel[1]}]`;console.log(s),a(s)},onFeatureClick:(n,r)=>{const s=`click: [${n.join(", ")}]`+(r?` @ [${r.pixel[0]}, ${r.pixel[1]}]`:"");console.log(s),a(s)}}),l(p,{sx:{position:"absolute",top:8,right:8,minWidth:260,maxHeight:220,overflow:"auto",padding:1,background:"rgba(0,0,0,0.75)",color:"#fff",font:"12px/1.4 monospace",borderRadius:1,zIndex:10,pointerEvents:"none"},children:[t("div",{style:{fontWeight:600,marginBottom:4},children:"Feature events (newest first)"}),e.length===0&&t("div",{children:"Hover or click a marker…"}),e.map((n,r)=>t("div",{children:n},r))]})]})}},g={args:{zoom:6,center:[-1.5,52.5],layers:i.map(o=>({...o,visible:!0})),markers:[{id:"marker-a",geohash:"gcpvj0",name:"Marker A (London) - events WORK",style:{markerType:"pin",color:"#ff6600"}}],polygons:[{id:"polygon-a",type:"Polygon",name:"Polygon A (Midlands) - events BROKEN",coordinates:[[[-2.8,52],[-.4,52],[-.4,53.2],[-2.8,53.2],[-2.8,52]]],style:{color:"#cc0000",backgroundColor:"rgba(204,0,0,0.35)"}}],paths:[]},render:o=>{const[e,c]=d.useState([]),a=n=>c(r=>[n,...r].slice(0,12));return l(p,{sx:{position:"relative",width:"100%",height:"100%"},children:[t(m,{...o,onFeatureHover:(n,r)=>{const s=n===null?"hover: null":`hover: ${n} @ [${r==null?void 0:r.pixel[0]}, ${r==null?void 0:r.pixel[1]}]`;a(s)},onFeatureClick:(n,r)=>{const s=`click: [${n.join(", ")}]`+(r?` @ [${r.pixel[0]}, ${r.pixel[1]}]`:"");a(s)}}),l(p,{sx:{position:"absolute",top:8,right:8,minWidth:300,maxHeight:260,overflow:"auto",padding:1,background:"rgba(0,0,0,0.75)",color:"#fff",font:"12px/1.4 monospace",borderRadius:1,zIndex:10,pointerEvents:"none"},children:[t("div",{style:{fontWeight:600,marginBottom:4},children:"Feature events (newest first)"}),t("div",{style:{color:"#ff9a4d"},children:"Marker (orange pin): works"}),t("div",{style:{color:"#ff6b6b",marginBottom:6},children:"Polygon (red box): emits nothing"}),e.length===0&&t("div",{children:"Click or hover each one..."}),e.map((n,r)=>t("div",{children:n},r))]})]})}},w={args:{layers:i,paths:$}},x={args:{layers:i,markers:[],paths:$}},T=[[-3.19,55.95],[-2.24,55.86],[-1.62,54.98],[-1.29,54.57],[-1.55,53.8],[-1.47,53.38],[-1.15,52.95],[-1.09,52.62],[-.78,52.04],[-.46,51.75],[-.13,51.51]];function je(o){return{r:Math.round(30+225*o),g:Math.round(80*(1-o)),b:Math.round(220*(1-o)+30)}}const Je=T.slice(0,-1).map((o,e,c)=>{const a=e/(c.length-1),{r:n,g:r,b:s}=je(a),R=.3+.7*a,C=2+4*a;return{id:`trail-${e}`,type:"LineString",name:`Segment ${e+1}`,coordinates:[o,T[e+1]],style:{color:`rgba(${n}, ${r}, ${s}, ${R})`,width:C,lineCap:"round",lineJoin:"round"}}}),S={args:{zoom:6,center:[-1.5,53.5],layers:i,paths:Je}},Ue=[{id:"tri-1",type:"LineString",name:"London → Paris → Berlin",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3,direction:{marker:{type:"triangle"},color:"#FF6600",size:12}}},{id:"tri-2",type:"LineString",name:"Edinburgh → Newcastle → Leeds",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]],style:{color:"#0066FF",width:3,direction:{marker:{type:"triangle"},color:"#003399",size:10}}}],L={args:{zoom:5,center:[2,52],layers:i,paths:Ue}},qe=['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">','<path d="M8 4 L16 12 L8 20" fill="none" stroke="#FF6600" stroke-width="3"',' stroke-linecap="round" stroke-linejoin="round"/>',"</svg>"].join(""),Ge=[{id:"svg-1",type:"LineString",name:"London → Paris → Berlin",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]],style:{color:"#FF6600",width:3,direction:{marker:{type:"svg",markup:qe},size:16}}}],F={args:{zoom:5,center:[5,51],layers:i,paths:Ge}},Ye=T.slice(0,-1).map((o,e,c)=>{const a=e/(c.length-1),{r:n,g:r,b:s}=je(a),R=.3+.7*a,C=2+4*a,O=`rgba(${n}, ${r}, ${s}, ${R})`;return{id:`dtrail-${e}`,type:"LineString",name:`Segment ${e+1}`,coordinates:[o,T[e+1]],style:{color:O,width:C,lineCap:"round",lineJoin:"round",direction:{marker:{type:"triangle"},color:O,size:4+6*a}}}}),M={args:{zoom:6,center:[-1.5,53.5],layers:i,paths:Ye}},Qe=[{id:"osm-dimmed",kind:"base-raster",provider:"xyz",label:"OpenStreetMap (dimmed)",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0,opacity:.4}],B={args:{zoom:5,center:[0,0],layers:Qe,paths:$}},Xe=()=>{const o=d.useRef(null);return l(p,{sx:{width:"100%",height:"100%"},children:[l(P,{direction:"row",spacing:1,sx:{p:1,position:"absolute",zIndex:10},children:[t(f,{variant:"contained",size:"small",onClick:()=>{var e;return(e=o.current)==null?void 0:e.setLayerOpacity("osm",.3)},children:"Dim base layer"}),t(f,{variant:"contained",size:"small",onClick:()=>{var e;return(e=o.current)==null?void 0:e.setLayerOpacity("osm",1)},children:"Restore base layer"})]}),t(m,{ref:o,zoom:5,center:[0,0],layers:[{id:"osm",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!0}],markers:[],polygons:[],paths:$})]})},z={render:()=>t(Xe,{})},Ze=[{id:"path-a",type:"LineString",name:"Route A",coordinates:[[-.1278,51.5074],[2.3522,48.8566],[13.405,52.52]]},{id:"path-b",type:"LineString",name:"Route B",coordinates:[[-3.1883,55.9533],[-1.6178,54.9783],[-1.5491,53.8008]]}],er=new He({stroke:new We({color:"#FF6600",width:5})}),rr=new He({stroke:new We({color:"#999999",width:2})}),tr=()=>{const[o,e]=d.useState(null);return l(p,{sx:{width:"100%",height:"100%"},children:[l(P,{direction:"row",spacing:1,sx:{p:1,position:"absolute",zIndex:10},children:[t(f,{variant:"contained",size:"small",onClick:()=>e("path-a"),children:"Select Route A"}),t(f,{variant:"contained",size:"small",onClick:()=>e("path-b"),children:"Select Route B"}),t(f,{variant:"outlined",size:"small",onClick:()=>e(null),children:"Clear selection"}),l(p,{sx:{alignSelf:"center",color:"#fff",pl:1},children:["Selected: ",o??"none"]})]}),t(m,{zoom:5,center:[2,52],layers:i,markers:[],polygons:[],paths:Ze,pathStyle:a=>a.getId()===o?er:rr})]})},E={render:()=>t(tr,{})};class or extends d.Component{constructor(){super(...arguments),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}render(){const{error:e}=this.state;return e?t(Ne,{height:"100%",children:l(P,{spacing:1,alignItems:"center",children:[t(D,{name:"BasicMapV2"}),t(D,{message:e.message}),t(D,{message:e instanceof Ve?`MalformedFeatureError, featureId: ${e.featureId}`:"not a MalformedFeatureError"})]})}):this.props.children}}const nr={id:"bad-path",type:"LineString",name:"Malformed route",coordinates:[-.1278,51.5074]},u={render:()=>t(or,{children:t(m,{zoom:5,center:[0,51],layers:i,markers:[],polygons:[],paths:[nr]})})},ar=()=>{const[o,e]=d.useState(null),c=d.useCallback(a=>e(a),[]);return l(P,{sx:{width:"100%",height:"100%"},children:[o&&t(Ke,{name:"BasicMapV2 layers",message:`onError: ${o.message}`,height:96}),t(p,{sx:{flex:1},children:t(m,{zoom:5,center:[0,51],layers:[{kind:"not-a-real-kind"}],markers:[],polygons:[],paths:[],onError:c})})]})},y={render:()=>t(ar,{})};var A,I,H;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  zoom: 5,
  center: [0, 0],
  layers: baseLayers,
  mapStyleOptions: undefined,
  markers: [],
  polygons: [],
  paths: []
}`,...(H=(I=v.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var W,j,V;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:"{}",...(V=(j=b.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var K,N,_;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    layers: baseLayers
  }
}`,...(_=(N=k.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var J,U,q,G,Y;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(q=(U=h.parameters)==null?void 0:U.docs)==null?void 0:q.source},description:{story:`Both \`onFeatureHover\` and \`onFeatureClick\` are wired to a debug panel that
shows the raw id + pixel the DS emits. Callback contract:

- \`onFeatureHover(id, { pixel })\` fires when the pointer enters a marker.
- \`onFeatureHover(null)\` fires when the pointer leaves the last-hovered
  marker (no pixel is included).
- Moving the pointer **within** the same marker does not re-fire.
- Moving directly from marker A to marker B fires once, with B's id and
  pixel — the id change implicitly signals A is no longer hovered.

The DS emits events only. The consuming app owns any popover / cursor /
highlight / throttling behaviour built on top of these events.`,...(Y=(G=h.parameters)==null?void 0:G.docs)==null?void 0:Y.description}}};var Q,X,Z,ee,re;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
      name: "Marker A (London) - events WORK",
      style: {
        markerType: "pin",
        color: "#ff6600"
      }
    }],
    polygons: [{
      id: "polygon-a",
      type: "Polygon",
      name: "Polygon A (Midlands) - events BROKEN",
      coordinates: [[[-2.8, 52.0], [-0.4, 52.0], [-0.4, 53.2], [-2.8, 53.2], [-2.8, 52.0]]],
      style: {
        color: "#cc0000",
        backgroundColor: "rgba(204,0,0,0.35)"
      }
    }],
    paths: []
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
        }}>Marker (orange pin): works</div>
                    <div style={{
          color: "#ff6b6b",
          marginBottom: 6
        }}>
                        Polygon (red box): emits nothing
                    </div>
                    {log.length === 0 && <div>Click or hover each one...</div>}
                    {log.map((line, i) => <div key={i}>{line}</div>)}
                </Box>
            </Box>;
  }
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"Demonstrates a regression introduced by splitting polygons into their own\nOpenLayers layer.\n\n`MapCanvas` binds both the select and hover interactions to the MARKER layer\nonly (`MapCanvas.tsx:75`, passed as `layer: markerLayer` at :83 and :103).\n`addSelectInteraction` filters with `new Select({ layers: [layer] })` and\n`addHoverInteraction` with `layerFilter: (l) => l === layer`, both exhaustive.\n\nPolygon features used to be added to the marker layer's source, so they were\ninside that filter. They now go to `polygon-layer`, which no interaction\nwatches, so they emit nothing.\n\nClick and hover the orange MARKER pin: the log fills.\nClick and hover the red POLYGON: nothing is logged. That is the bug.",...(re=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:re.description}}};var te,oe,ne;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    layers: baseLayers,
    paths: samplePaths
  }
}`,...(ne=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ae,se,ie;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    layers: baseLayers,
    markers: [],
    paths: samplePaths
  }
}`,...(ie=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var le,ce,pe;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    zoom: 6,
    center: [-1.5, 53.5],
    layers: baseLayers,
    paths: movementTrailPaths
  }
}`,...(pe=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var de,me,he;L.parameters={...L.parameters,docs:{...(de=L.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [2, 52],
    layers: baseLayers,
    paths: triangleDirectedPaths
  }
}`,...(he=(me=L.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var ge,ue,ye;F.parameters={...F.parameters,docs:{...(ge=F.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [5, 51],
    layers: baseLayers,
    paths: svgDirectedPaths
  }
}`,...(ye=(ue=F.parameters)==null?void 0:ue.docs)==null?void 0:ye.source}}};var ve,fe,be;M.parameters={...M.parameters,docs:{...(ve=M.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    zoom: 6,
    center: [-1.5, 53.5],
    layers: baseLayers,
    paths: directedTrailPaths
  }
}`,...(be=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var ke,we,xe;B.parameters={...B.parameters,docs:{...(ke=B.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    zoom: 5,
    center: [0, 0],
    layers: dimmedBaseLayers,
    paths: samplePaths
  }
}`,...(xe=(we=B.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var Se,Le,Fe;z.parameters={...z.parameters,docs:{...(Se=z.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <RuntimeOpacityDemo />
}`,...(Fe=(Le=z.parameters)==null?void 0:Le.docs)==null?void 0:Fe.source}}};var Me,Be,ze;E.parameters={...E.parameters,docs:{...(Me=E.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => <PathStyleFunctionDemo />
}`,...(ze=(Be=E.parameters)==null?void 0:Be.docs)==null?void 0:ze.source}}};var Ee,Te,Pe,$e,Re;u.parameters={...u.parameters,docs:{...(Ee=u.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <DemoErrorBoundary>
            <BasicMapV2 zoom={5} center={[0, 51]} layers={baseLayers} markers={[]} polygons={[]} paths={[malformedPath]} />
        </DemoErrorBoundary>
}`,...(Pe=(Te=u.parameters)==null?void 0:Te.docs)==null?void 0:Pe.source},description:{story:`Coordinates that contradict their declared \`type\` are a config mistake, so
they throw \`MalformedFeatureError\` while the map builds its features during
render. Nothing is drawn and nothing is cleared.

Without a boundary above the map this takes down the React root, which is
the intended fail-fast behaviour — wrap the map if the rest of the app
should survive it.`,...(Re=($e=u.parameters)==null?void 0:$e.docs)==null?void 0:Re.description}}};var Ce,De,Oe,Ae,Ie;y.parameters={...y.parameters,docs:{...(Ce=y.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <LayerSetupFailureDemo />
}`,...(Oe=(De=y.parameters)==null?void 0:De.docs)==null?void 0:Oe.source},description:{story:"Layer setup is async and survivable, so it does not throw: `onError` fires\nand nothing is cleared. Here it fails on first load, so the map is blank —\non a later prop change the previous, now out-of-date, map would stay drawn.\n\nDrop the `onError` prop and the same failure only reaches the console.",...(Ie=(Ae=y.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.description}}};const mt=["allArgs","Empty","Template","FeatureEvents","PolygonInteractionRegression","WithPaths","WithMarkersAndPaths","MovementTrail","DirectionTriangle","DirectionSvg","MovementTrailWithDirection","ConfigDrivenOpacity","RuntimeOpacity","PathStyleFunction","MalformedFeatureThrows","LayerSetupFailureReportsToOnError"];export{B as ConfigDrivenOpacity,F as DirectionSvg,L as DirectionTriangle,b as Empty,h as FeatureEvents,y as LayerSetupFailureReportsToOnError,u as MalformedFeatureThrows,S as MovementTrail,M as MovementTrailWithDirection,E as PathStyleFunction,g as PolygonInteractionRegression,z as RuntimeOpacity,k as Template,x as WithMarkersAndPaths,w as WithPaths,mt as __namedExportsOrder,v as allArgs,dt as default};
