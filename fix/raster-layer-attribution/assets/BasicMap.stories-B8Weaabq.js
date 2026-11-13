import{r as z,b as d,a as n}from"./iframe-TzH9HoJB.js";import{J as L}from"./UserProfileContent-DLDByR5F.js";import{B as m}from"./Box-DS3YN1ZG.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-OwbOqTSh.js";import"./clsx-B-dksMZM.js";import"./styled-Fi-PJMA2.js";import"./extendSxProp-BcuL-Nvl.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-B0uhPIY5.js";import"./TransitionGroupContext-9gZwZNUS.js";import"./MapToggleButtonPresentational-DFyons0C.js";import"./Remove-DAQRFvaE.js";import"./createSvgIcon-CUXDMF07.js";import"./SvgIcon-HYlfJc8_.js";import"./IconButton-PY87z89E.js";import"./Paper-YFzx4ddw.js";import"./XIcon-DGixMYxC.js";import"./Stack-VXbRlDW3.js";import"./styled-Detq6LXO.js";import"./createStyled-DpILs1eO.js";import"./useThemeProps-C-ryN40T.js";import"./Typography-zeuNrRSn.js";import"./Box-Bo6gauv7.js";import"./Container-8Zbg9EiI.js";import"./FlexBox-DRW8tIce.js";import"./Brand-BlQ8b-ry.js";import"./IconButton-Mzh_sPPf.js";import"./LinkButton-Du-kxWOQ.js";import"./AppInfoRow-BV_aa5lk.js";import"./_IconPopover-hWyolf0i.js";import"./Popover-DX_paYG2.js";import"./utils-DAXs4UmQ.js";import"./index-C5JqvuCX.js";import"./index-CoaIpLkh.js";import"./Modal-DHYwyE7o.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-BSzFeukN.js";import"./useSlotProps-CB65AuIn.js";import"./InfoIcon-CuaXepFp.js";import"./Text-Wjw9mAbu.js";import"./AppSettings-BzU83vRR.js";import"./CogIcon-K9_cAB5b.js";import"./Badge-682oFqE8.js";import"./Badge-BFQfTkfR.js";import"./Chip-CTmkkGRh.js";import"./Chip-rF6T4rUT.js";import"./Divider-DBOrLmFb.js";import"./Divider-nCna6h_E.js";import"./dividerClasses-yHkBJDJd.js";import"./ThemeSwitchRow-CoAtHhZA.js";import"./Skeleton-YZOMWl5n.js";import"./Skeleton-2TdWFO3K.js";import"./TextField-3lnVRzgq.js";import"./useFormControl-B5BL4Dkn.js";import"./FormControl-CCq8g0Qj.js";import"./ListContext-C1CE2G2k.js";import"./useControlled-DLY0GURg.js";import"./FormHelperText-8S5YkPy6.js";import"./MenuItem-CHk81Hva.js";import"./ExpandMoreIcon-CpVvmAB8.js";import"./ListItem-CLOQjQZa.js";import"./Toolbar--ZbXsggf.js";import"./Close-DpJbrle0.js";import"./Popper-DAbEjCJA.js";import"./FormControlLabel-C0_yDqIQ.js";import"./Edit-qL9wNaAs.js";import"./SvgIcon-ak9zVNAx.js";import"./TableRow-5QaVWAOF.js";import"./TableCell-B3sIJQHc.js";import"./TreeView-Sl1KgHox.js";import"./useThemeProps-CTGgwm9-.js";import"./index-D3hKYTw4.js";import"./Collapse-D2Q2PYDS.js";import"./Dialog-Yb-veoJ6.js";import"./DialogContent-9AxQB7IK.js";import"./Alert-BhRCq8N3.js";import"./useSlot-CNLXZk78.js";import"./LinearProgress-W8XZFG7o.js";import"./LinearProgress-M-9cHjHE.js";import"./Spinner-kZ2y9DVo.js";import"./CircularProgress-HVwFS8ym.js";import"./TextField-jO_QGFZE.js";import"./FormControl-DsF2nchf.js";import"./FormHelperText-C1B-jnvM.js";import"./LabeledSwitch-B_k81Zfn.js";import"./Switch-BRrjrBxW.js";import"./Switch-LinUY1Bf.js";import"./RadioGroup-BQTXXTjr.js";import"./ToggleButton-Db5rHd7I.js";import"./ToggleButton-BYiCWuVK.js";import"./ToggleButtonGroup-CiG3xB0s.js";import"./MenuItem-C17Q6CqC.js";import"./Tabs-C87aF2xa.js";import"./AccordionSummary-DLRaYHNg.js";import"./Paper-DmuX9rfV.js";import"./ErrorFallback-BBjYL2F9.js";import"./ErrorFallbackText-CgArZ3nG.js";import"./ErrorFallbackWrapper-BvE4laRa.js";const a={zoom:5,center:[0,0],layers:[],markers:[],polygons:[]},H=a,F=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],Mr={title:"Component Library/Map/composites/BasicMapV2",component:L,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
