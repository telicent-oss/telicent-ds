import{r as O,a as d,j as n}from"./iframe-C9OzQXg_.js";import{x as L}from"./DropdownButton-C4xttH7Y.js";import{B as l}from"./Box-B6_welVH.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-B0X7YR88.js";import"./SvgIcon-B9jV-vVV.js";import"./generateUtilityClass-nmhkov4J.js";import"./styled-B4qHs92x.js";import"./generateUtilityClasses-B-IRdbhl.js";import"./useTheme-BoFB3y9E.js";import"./Box-DVA2EOpM.js";import"./Container-Dd_avWFZ.js";import"./styled-tQz00g93.js";import"./createStyled-aUbpq_KF.js";import"./useThemeProps-C59Agyjh.js";import"./FlexBox-BhSKdKN3.js";import"./Stack-CVFIDsG6.js";import"./Typography-R7t904JM.js";import"./Paper-K-rVIpDQ.js";import"./useThemeProps-D6gL08vt.js";import"./Text-DJBgtXcr.js";import"./AdapterDayjs-zE6fXVsl.js";import"./Modal-DeCTlAE4.js";import"./utils-5nTvwYBN.js";import"./TransitionGroupContext-B0kHEjtr.js";import"./index-aDITQ5Y9.js";import"./resolveComponentProps-DLoKn3XJ.js";import"./Popover-oHEbtlOD.js";import"./TextField-C2OAhByY.js";import"./useFormControl-DULJhOwb.js";import"./createSvgIcon-CNR6JU_j.js";import"./IconButton-D27QAIgA.js";import"./ButtonBase-D7zqtzaV.js";import"./DialogContent-Bqyrw-Dw.js";import"./Button-C_IckAB6.js";import"./Chip-2NNPtnVz.js";import"./DateTimePicker-CsFwsMPz.js";import"./Divider-o04g-Szi.js";import"./AppInfoRow-zLITu-6A.js";import"./Chip-By1rLTon.js";import"./Divider-DaR7zBo2.js";import"./TreeView-CXCZxfYx.js";import"./Alert-BFVxOiq7.js";import"./LinearProgress-DX9Q_02A.js";import"./Spinner-DtzXi4x2.js";import"./Dialog-D61FGst9.js";import"./MapToggleButtonPresentational-C417ZVG5.js";import"./Remove-DBRMIEBC.js";import"./LinkButton-BDmrpSVS.js";import"./TextField-DfFTX4IJ.js";import"./Switch-CFkCea9A.js";import"./DatePicker-PqR1hban.js";import"./Paper-BC8jjBQR.js";import"./ErrorFallback-4ND5IQwj.js";import"./ErrorFallbackText-DxDVeSdA.js";import"./ErrorFallbackWrapper-BnyZ3rrn.js";import"./Brand-CobJZEjG.js";import"./constants-BRNzpaAh.js";import"./Edit-DhYGh0Lv.js";const a={zoom:5,center:[0,0],layers:[],mapStyleOptions:void 0,markers:[],polygons:[]},z=a,F=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],Ce={title:"Component Library/Map/composites/BasicMapV2",component:L,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
        `}}},decorators:[o=>n(l,{sx:{width:"100vw",height:"100vh",margin:"auto"},children:o()})],argTypes:{},args:z},s={},p={args:{layers:F}},H=[{id:"marker-a",geohash:"gcpvj0",name:"Marker A (London)",style:{markerType:"pin",color:"#ff6600"}},{id:"marker-b",geohash:"u09tvw",name:"Marker B (Paris)",style:{markerType:"pin",color:"#0066ff"}}],i={args:{zoom:5,center:[2,49],layers:F.map(o=>({...o,visible:!0})),markers:H,polygons:[]},render:o=>{const[m,$]=O.useState([]),c=r=>$(e=>[r,...e].slice(0,12));return d(l,{sx:{position:"relative",width:"100%",height:"100%"},children:[n(L,{...o,onFeatureHover:(r,e)=>{const t=r===null?"hover: null":`hover: ${r} @ [${e==null?void 0:e.pixel[0]}, ${e==null?void 0:e.pixel[1]}]`;console.log(t),c(t)},onFeatureClick:(r,e)=>{const t=`click: [${r.join(", ")}]`+(e?` @ [${e.pixel[0]}, ${e.pixel[1]}]`:"");console.log(t),c(t)}}),d(l,{sx:{position:"absolute",top:8,right:8,minWidth:260,maxHeight:220,overflow:"auto",padding:1,background:"rgba(0,0,0,0.75)",color:"#fff",font:"12px/1.4 monospace",borderRadius:1,zIndex:10,pointerEvents:"none"},children:[n("div",{style:{fontWeight:600,marginBottom:4},children:"Feature events (newest first)"}),m.length===0&&n("div",{children:"Hover or click a marker…"}),m.map((r,e)=>n("div",{children:r},e))]})]})}};var h,u,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  zoom: 5,
  center: [0, 0],
  layers: [],
  mapStyleOptions: undefined,
  markers: [],
  polygons: []
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,y,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,x,k;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    layers: baseLayers
  }
}`,...(k=(x=p.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var w,S,B,M,T;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(B=(S=i.parameters)==null?void 0:S.docs)==null?void 0:B.source},description:{story:`Both \`onFeatureHover\` and \`onFeatureClick\` are wired to a debug panel that
shows the raw id + pixel the DS emits. Callback contract:

- \`onFeatureHover(id, { pixel })\` fires when the pointer enters a marker.
- \`onFeatureHover(null)\` fires when the pointer leaves the last-hovered
  marker (no pixel is included).
- Moving the pointer **within** the same marker does not re-fire.
- Moving directly from marker A to marker B fires once, with B's id and
  pixel — the id change implicitly signals A is no longer hovered.

The DS emits events only. The consuming app owns any popover / cursor /
highlight / throttling behaviour built on top of these events.`,...(T=(M=i.parameters)==null?void 0:M.docs)==null?void 0:T.description}}};const Ie=["allArgs","Empty","Template","FeatureEvents"];export{s as Empty,i as FeatureEvents,p as Template,Ie as __namedExportsOrder,a as allArgs,Ce as default};
