import{r as z,b as d,a as n}from"./iframe-Djv8ktra.js";import{J as L}from"./EntityList-CmXEoAc2.js";import{B as m}from"./Box-C9osqYpn.js";import"./preload-helper-Dp1pzeXC.js";import"./FlexBox-Do_i3sJ9.js";import"./Stack-DjL-eZhY.js";import"./styled-DTBkkZW7.js";import"./extendSxProp-Bg6AHp8L.js";import"./clsx-B-dksMZM.js";import"./styled-CpIMtI8p.js";import"./createStyled-C4labjHn.js";import"./useThemeProps-2HbMDrfU.js";import"./composeClasses-fLhin0tj.js";import"./Text-Y9XZ_yHR.js";import"./Typography-Dq-Ciojh.js";import"./ListContext-DOkPQ55E.js";import"./ListItem-DgF_KQ7w.js";import"./FormControl-KHlRX9wq.js";import"./useFormControl-yjc7eBp6.js";import"./TransitionGroupContext-BAmDsqe-.js";import"./resolveComponentProps-BCG5tMa5.js";import"./ButtonBase-BsGOhoOZ.js";import"./Toolbar-zYbL7pMK.js";import"./TextField-FyiAyxRB.js";import"./Modal-CbQrDciN.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-D4VVjH6n.js";import"./index-CVsYjqM0.js";import"./index-CwsYzhsj.js";import"./utils-B6N13bq2.js";import"./Popover-B86b2_k9.js";import"./Paper-1JE7t4a2.js";import"./useControlled-BYl-fCxX.js";import"./createSvgIcon-DZnw1m24.js";import"./SvgIcon-DECtGhh0.js";import"./FormHelperText-D2wijesy.js";import"./Close-uaArJQbm.js";import"./Popper-CRx9JkVY.js";import"./Badge-Bne_esn3.js";import"./Chip-Df5TxRX3.js";import"./IconButton-D0URHQdC.js";import"./FormControlLabel-Dl4rNMyO.js";import"./MenuItem-BrTfhZTz.js";import"./dividerClasses-CaIblDIL.js";import"./Button-DwhmFZ5z.js";import"./MapToggleButtonPresentational-9yu7-Ilq.js";import"./Remove-UDhVurmI.js";import"./ExpandLessIcon-C3pwZ4Pc.js";import"./Box-Cvy3NsGq.js";import"./Container-D5lO9yGB.js";import"./CogIcon-CT9n-ILh.js";import"./InfoIcon-CHj9CFVM.js";import"./ExpandMoreIcon-teVtSgL8.js";import"./ThemeSwitchRow-H2pqK7Sf.js";import"./index-8FsRt4pB.js";import"./IconButton-CerlmnQB.js";import"./Badge-CMOuLR30.js";import"./Chip-CxSld7rQ.js";import"./Divider-C9GgdKvp.js";import"./Divider-BQgZCPEt.js";import"./TreeView-CmgLkcRM.js";import"./useThemeProps-DvIlKj6P.js";import"./Collapse-BPTOiYJG.js";import"./useSlot-DS97Xucj.js";import"./AppInfoRow-C5ZQnBbJ.js";import"./_IconPopover-BLyK2_eM.js";import"./AppSettings-CSEbvKPB.js";import"./SvgIcon-DcOD0BqO.js";import"./TableRow-zzNEo6q7.js";import"./TableCell-Bunj5ZcK.js";import"./Skeleton-Kydo8R4j.js";import"./Skeleton-CnHTnMO_.js";import"./Edit-BKmGEAwu.js";import"./LinearProgress-DdDDCrSp.js";import"./LinearProgress-DK1T17kM.js";import"./Spinner-CZ5RlgS9.js";import"./CircularProgress-DH002ZiD.js";import"./Dialog-CNnh_iBj.js";import"./DialogContent-6oCYEZl_.js";import"./Alert-BVz-9DlK.js";import"./ToggleButton-GvPbRr0J.js";import"./ToggleButton-CFoTEcuq.js";import"./ToggleButtonGroup-BS0uvyOk.js";import"./LinkButton-CYrYI8ff.js";import"./TextField-DZFwm5FK.js";import"./Switch-Ckcfd9qm.js";import"./Switch-DP0w0isr.js";import"./LabeledSwitch-Boji5GC-.js";import"./RadioGroup-CHfeD9PB.js";import"./FormControl-DEhUdqs_.js";import"./FormHelperText-B0uW7-Qr.js";import"./Tabs-DLjDcbju.js";import"./MenuItem-DaXvOOwF.js";import"./AccordionDetails-CqSaJtGy.js";import"./Paper-IIlbTA42.js";import"./ErrorFallback-ei1UHZWN.js";import"./ErrorFallbackText-CuxdV7zC.js";import"./ErrorFallbackWrapper-C5pNwo6x.js";import"./Brand-4F19u9Fh.js";const a={zoom:5,center:[0,0],layers:[],markers:[],polygons:[]},H=a,F=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],Mr={title:"Component Library/Map/composites/BasicMapV2",component:L,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
        `}}},decorators:[o=>n(m,{sx:{width:"100vw",height:"100vh",margin:"auto"},children:o()})],argTypes:{},args:H},s={},p={args:{layers:F}},V=[{id:"marker-a",geohash:"gcpvj0",name:"Marker A (London)",style:{markerType:"pin",color:"#ff6600"}},{id:"marker-b",geohash:"u09tvw",name:"Marker B (Paris)",style:{markerType:"pin",color:"#0066ff"}}],i={args:{zoom:5,center:[2,49],layers:F.map(o=>({...o,visible:!0})),markers:V,polygons:[]},render:o=>{const[l,$]=z.useState([]),c=r=>$(e=>[r,...e].slice(0,12));return d(m,{sx:{position:"relative",width:"100%",height:"100%"},children:[n(L,{...o,onFeatureHover:(r,e)=>{const t=r===null?"hover: null":`hover: ${r} @ [${e==null?void 0:e.pixel[0]}, ${e==null?void 0:e.pixel[1]}]`;console.log(t),c(t)},onFeatureClick:(r,e)=>{const t=`click: [${r.join(", ")}]`+(e?` @ [${e.pixel[0]}, ${e.pixel[1]}]`:"");console.log(t),c(t)}}),d(m,{sx:{position:"absolute",top:8,right:8,minWidth:260,maxHeight:220,overflow:"auto",padding:1,background:"rgba(0,0,0,0.75)",color:"#fff",font:"12px/1.4 monospace",borderRadius:1,zIndex:10,pointerEvents:"none"},children:[n("div",{style:{fontWeight:600,marginBottom:4},children:"Feature events (newest first)"}),l.length===0&&n("div",{children:"Hover or click a marker…"}),l.map((r,e)=>n("div",{children:r},e))]})]})}},Tr=["allArgs","Empty","Template","FeatureEvents"];var h,u,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  zoom: 5,
  center: [0, 0],
  layers: [],
  markers: [],
  polygons: []
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,y,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,x,k;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    layers: baseLayers
  }
}`,...(k=(x=p.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var w,B,S,M,T;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(B=i.parameters)==null?void 0:B.docs)==null?void 0:S.source},description:{story:`Both \`onFeatureHover\` and \`onFeatureClick\` are wired to a debug panel that
shows the raw id + pixel the DS emits. Callback contract:

- \`onFeatureHover(id, { pixel })\` fires when the pointer enters a marker.
- \`onFeatureHover(null)\` fires when the pointer leaves the last-hovered
  marker (no pixel is included).
- Moving the pointer **within** the same marker does not re-fire.
- Moving directly from marker A to marker B fires once, with B's id and
  pixel — the id change implicitly signals A is no longer hovered.

The DS emits events only. The consuming app owns any popover / cursor /
highlight / throttling behaviour built on top of these events.`,...(T=(M=i.parameters)==null?void 0:M.docs)==null?void 0:T.description}}};export{s as Empty,i as FeatureEvents,p as Template,Tr as __namedExportsOrder,a as allArgs,Mr as default};
