import{r as O,b as d,a as n}from"./iframe-C6HBQyGm.js";import{y as L}from"./DropdownButton-D6ogJQev.js";import{B as m}from"./Box-Bum79u3V.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-CJuxEYmQ.js";import"./SvgIcon-CBUaLZyl.js";import"./clsx-B-dksMZM.js";import"./styled-CtHiKU2t.js";import"./extendSxProp-BpLVaWYK.js";import"./composeClasses-fLhin0tj.js";import"./Box-BORlsoOy.js";import"./Container-Cs0fA1rR.js";import"./styled-Ddo_soiw.js";import"./createStyled-BurZqg4B.js";import"./useThemeProps-OSLHsrLr.js";import"./FlexBox-shtAMDc9.js";import"./Stack-CMijSaHm.js";import"./Typography-BYEU65Ir.js";import"./Paper-DexiaJH7.js";import"./CogIcon-BXwRS_AX.js";import"./InfoIcon-CWUfQGMy.js";import"./ExpandMoreIcon-ClqhjkE_.js";import"./ThemeSwitchRow-DXzWXa9p.js";import"./index-B4fT1DFN.js";import"./Text-wXQO4nHE.js";import"./AdapterDayjs-CJVXf95i.js";import"./useThemeProps-BN8Oei1L.js";import"./Modal-BhU-sf-u.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-DNiDcEw8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-DShg_lcf.js";import"./index-U2Ve87U_.js";import"./utils-BtrWCNj7.js";import"./Popover-CqWusbsy.js";import"./InputAdornment-DoxUPrGH.js";import"./useFormControl-DFXGdURu.js";import"./TextField-Tbuu-gB1.js";import"./FormControl-szbfKHSS.js";import"./ListContext-5L6Z3S72.js";import"./useControlled-Cv5AimIh.js";import"./createSvgIcon-C3fIw0nA.js";import"./FormHelperText-BhBJtXut.js";import"./IconButton-DOLNhRve.js";import"./ButtonBase--3OMYxia.js";import"./DialogContent-kJfS09mU.js";import"./Button-T3gn82zd.js";import"./Chip-QwFDNXa1.js";import"./DataGrid-B9Ws_hxt.js";import"./index-BqpemGyj.js";import"./Switch-D5vwKWe7.js";import"./FormControlLabel-D5xYv0-x.js";import"./Skeleton-Bh14KwXQ.js";import"./MenuItem-DvEMZLtB.js";import"./dividerClasses-DKxjOi43.js";import"./LinearProgress-CYKUds7Q.js";import"./Divider-CuhHNWiA.js";import"./CircularProgress-py9IL6Xb.js";import"./Close-W1rtBwZ4.js";import"./Tabs-BxaLLPSP.js";import"./TableCell-DCDAnFJ5.js";import"./ToggleButton-B7VOnyAi.js";import"./_IconPopover-DVtF3Nsu.js";import"./Chip-DcDaGxBc.js";import"./Divider-DrCyeUWn.js";import"./TreeView-BzicdKaq.js";import"./Collapse-mPDdtelE.js";import"./useSlot-CYuUL_sL.js";import"./AppInfoRow-DeGsYz0Q.js";import"./AppSettings-BMRsMdd0.js";import"./SvgIcon-DN3G9e_T.js";import"./TableRow-DVUU-_Rr.js";import"./LinearProgress-BybMB8rs.js";import"./Spinner-DaulITM1.js";import"./Dialog-10P_WSlv.js";import"./MapToggleButtonPresentational-C-2_SKgs.js";import"./Remove-sOidiwEB.js";import"./Alert-bNEVirSp.js";import"./ToggleButton-DJ3QCC9g.js";import"./ToggleButtonGroup-zjK0cDs4.js";import"./LinkButton-5Hl7qjTo.js";import"./TextField-Dsp6pCob.js";import"./Switch-Dftj6GoN.js";import"./LabeledSwitch-xW5OK_eY.js";import"./DatePicker-DkkjSWe9.js";import"./DateTimePicker-D2Mk4LF5.js";import"./LocalizationProvider-BX7xAa0J.js";import"./RadioGroup-k1kHuSHq.js";import"./FormControl-DPsKVFX9.js";import"./FormHelperText-DzFlHg6J.js";import"./MenuItem-C9rqg35p.js";import"./AccordionDetails-C87shBW_.js";import"./Paper-D0Bm4wLe.js";import"./ErrorFallback-Ba6XGdtl.js";import"./ErrorFallbackText-D3ICAgi3.js";import"./ErrorFallbackWrapper-Cznrrj0A.js";import"./Brand-Cr9Yp0DV.js";import"./Edit-DmCTBJQu.js";const a={zoom:5,center:[0,0],layers:[],mapStyleOptions:void 0,markers:[],polygons:[]},z=a,F=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],Sr={title:"Component Library/Map/composites/BasicMapV2",component:L,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
        `}}},decorators:[o=>n(m,{sx:{width:"100vw",height:"100vh",margin:"auto"},children:o()})],argTypes:{},args:z},s={},p={args:{layers:F}},H=[{id:"marker-a",geohash:"gcpvj0",name:"Marker A (London)",style:{markerType:"pin",color:"#ff6600"}},{id:"marker-b",geohash:"u09tvw",name:"Marker B (Paris)",style:{markerType:"pin",color:"#0066ff"}}],i={args:{zoom:5,center:[2,49],layers:F.map(o=>({...o,visible:!0})),markers:H,polygons:[]},render:o=>{const[l,$]=O.useState([]),c=r=>$(e=>[r,...e].slice(0,12));return d(m,{sx:{position:"relative",width:"100%",height:"100%"},children:[n(L,{...o,onFeatureHover:(r,e)=>{const t=r===null?"hover: null":`hover: ${r} @ [${e==null?void 0:e.pixel[0]}, ${e==null?void 0:e.pixel[1]}]`;console.log(t),c(t)},onFeatureClick:(r,e)=>{const t=`click: [${r.join(", ")}]`+(e?` @ [${e.pixel[0]}, ${e.pixel[1]}]`:"");console.log(t),c(t)}}),d(m,{sx:{position:"absolute",top:8,right:8,minWidth:260,maxHeight:220,overflow:"auto",padding:1,background:"rgba(0,0,0,0.75)",color:"#fff",font:"12px/1.4 monospace",borderRadius:1,zIndex:10,pointerEvents:"none"},children:[n("div",{style:{fontWeight:600,marginBottom:4},children:"Feature events (newest first)"}),l.length===0&&n("div",{children:"Hover or click a marker…"}),l.map((r,e)=>n("div",{children:r},e))]})]})}};var h,u,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
highlight / throttling behaviour built on top of these events.`,...(T=(M=i.parameters)==null?void 0:M.docs)==null?void 0:T.description}}};const Br=["allArgs","Empty","Template","FeatureEvents"];export{s as Empty,i as FeatureEvents,p as Template,Br as __namedExportsOrder,a as allArgs,Sr as default};
