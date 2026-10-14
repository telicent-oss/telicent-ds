import{r as z,b as d,a as n}from"./iframe-C-ZFHi7G.js";import{z as L}from"./DropdownButton-DBXQPZiC.js";import{B as m}from"./Box-C8RueU9X.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-CbH3sEfM.js";import"./SvgIcon-BJCkR60K.js";import"./clsx-B-dksMZM.js";import"./styled-Bk2IjbB5.js";import"./extendSxProp-dXted_0R.js";import"./composeClasses-fLhin0tj.js";import"./Box-PWf94AkS.js";import"./Container-CV6bOf61.js";import"./styled-DNl7Cs_R.js";import"./createStyled-vuo4qSuW.js";import"./useThemeProps-CDA2VJay.js";import"./FlexBox-lULQm6VU.js";import"./Stack-CmCwoFm_.js";import"./Typography-CkxFGaa5.js";import"./Paper-C6Xte-jc.js";import"./CogIcon-CmSwAq5_.js";import"./InfoIcon-DtvtTana.js";import"./ExpandMoreIcon-CEeNpfle.js";import"./ThemeSwitchRow-Dvzp5zbn.js";import"./index-rmUNOSJG.js";import"./Text-CHFW8IH8.js";import"./ListItem-CnFySCf3.js";import"./ListContext-CUNnWBoY.js";import"./FormControl-z8ekdGjB.js";import"./useFormControl-CgAT6IKY.js";import"./TransitionGroupContext-C0NcEdG2.js";import"./resolveComponentProps-Ji4pwD1h.js";import"./ButtonBase-UsKYAmFM.js";import"./Toolbar-BFoIYY9Z.js";import"./TextField-BnMSP8bO.js";import"./Modal-Bh0uOVdy.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-8MMKxgpT.js";import"./index-BiUXR6Fr.js";import"./utils-D_VBJbmQ.js";import"./Popover-CpBmz1D4.js";import"./useControlled-DIYZR1vI.js";import"./createSvgIcon-CgHhWzsp.js";import"./FormHelperText-YXdNPWNE.js";import"./Close-Da5sWuiq.js";import"./Popper-BYgvOfOT.js";import"./Badge-BRhX8-6K.js";import"./Chip-rsJ9-v4L.js";import"./IconButton-BSmPEpg3.js";import"./FormControlLabel-C_CoaMTJ.js";import"./MenuItem-CLSLkyOY.js";import"./dividerClasses-dRG9if5p.js";import"./IconButton-D4AMQVbi.js";import"./Badge-OR03eEi0.js";import"./Chip-B2wcrvAN.js";import"./Divider-O0zDh8J4.js";import"./Divider-B3REhvRn.js";import"./TreeView-CxyUEHYQ.js";import"./useThemeProps-DuHDulq9.js";import"./Collapse-Bi1bo0w0.js";import"./useSlot-CLq2sdyu.js";import"./AppInfoRow-DXVzvm-o.js";import"./_IconPopover-DOXgOPu3.js";import"./AppSettings-Dlv5aBW5.js";import"./SvgIcon-xwJ9lbKe.js";import"./TableRow-C03rPSUq.js";import"./TableCell-CB2ecjuI.js";import"./LinearProgress-BMstATZR.js";import"./LinearProgress-aqc0myF3.js";import"./Spinner-D6q0L9xa.js";import"./CircularProgress-BZGJCY_5.js";import"./Dialog-BGqZYpLW.js";import"./DialogContent-CNYTn0i-.js";import"./Button-eDvdHhIu.js";import"./MapToggleButtonPresentational-DrTKcpNc.js";import"./Remove-C6ct4kNK.js";import"./Alert-DuvNx40M.js";import"./ToggleButton-BzArV2oI.js";import"./ToggleButton-CBZbI2uz.js";import"./ToggleButtonGroup-DnQDLnGR.js";import"./LinkButton-DiWs23j2.js";import"./TextField-Dtcgs6IQ.js";import"./Switch-B9Vu7ZeK.js";import"./Switch-BYiHkx-A.js";import"./LabeledSwitch-Cjz_DPwA.js";import"./RadioGroup-D-HBNE5D.js";import"./FormControl-CgN7reua.js";import"./FormHelperText-BnLTH0UY.js";import"./Tabs-crUQBx1x.js";import"./MenuItem-MYpO4lco.js";import"./AccordionDetails-BU3W9zwP.js";import"./Paper-C2fTVCnQ.js";import"./ErrorFallback-CsyZPSJe.js";import"./ErrorFallbackText-DIe6Jt0v.js";import"./ErrorFallbackWrapper-BOMF25ch.js";import"./Brand-_mV_4qml.js";import"./Edit-wGiylSA_.js";const a={zoom:5,center:[0,0],layers:[],mapStyleOptions:void 0,markers:[],polygons:[]},O=a,F=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],wr={title:"Component Library/Map/composites/BasicMapV2",component:L,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
        `}}},decorators:[o=>n(m,{sx:{width:"100vw",height:"100vh",margin:"auto"},children:o()})],argTypes:{},args:O},s={},p={args:{layers:F}},H=[{id:"marker-a",geohash:"gcpvj0",name:"Marker A (London)",style:{markerType:"pin",color:"#ff6600"}},{id:"marker-b",geohash:"u09tvw",name:"Marker B (Paris)",style:{markerType:"pin",color:"#0066ff"}}],i={args:{zoom:5,center:[2,49],layers:F.map(o=>({...o,visible:!0})),markers:H,polygons:[]},render:o=>{const[l,$]=z.useState([]),c=r=>$(e=>[r,...e].slice(0,12));return d(m,{sx:{position:"relative",width:"100%",height:"100%"},children:[n(L,{...o,onFeatureHover:(r,e)=>{const t=r===null?"hover: null":`hover: ${r} @ [${e==null?void 0:e.pixel[0]}, ${e==null?void 0:e.pixel[1]}]`;console.log(t),c(t)},onFeatureClick:(r,e)=>{const t=`click: [${r.join(", ")}]`+(e?` @ [${e.pixel[0]}, ${e.pixel[1]}]`:"");console.log(t),c(t)}}),d(m,{sx:{position:"absolute",top:8,right:8,minWidth:260,maxHeight:220,overflow:"auto",padding:1,background:"rgba(0,0,0,0.75)",color:"#fff",font:"12px/1.4 monospace",borderRadius:1,zIndex:10,pointerEvents:"none"},children:[n("div",{style:{fontWeight:600,marginBottom:4},children:"Feature events (newest first)"}),l.length===0&&n("div",{children:"Hover or click a marker…"}),l.map((r,e)=>n("div",{children:r},e))]})]})}};var h,u,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
highlight / throttling behaviour built on top of these events.`,...(T=(M=i.parameters)==null?void 0:M.docs)==null?void 0:T.description}}};const Sr=["allArgs","Empty","Template","FeatureEvents"];export{s as Empty,i as FeatureEvents,p as Template,Sr as __namedExportsOrder,a as allArgs,wr as default};
