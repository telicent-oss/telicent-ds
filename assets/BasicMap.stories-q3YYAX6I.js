import{r as O,b as d,a as n}from"./iframe-EHiispHx.js";import{y as L}from"./DropdownButton-Ch2KHcVV.js";import{B as l}from"./Box-BaAFlwfY.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-jYjB0fJU.js";import"./SvgIcon-DoFYhYUo.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-BZtHjZ0T.js";import"./extendSxProp-ChdDfLiy.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-D_CvADku.js";import"./Box-C_PltGBT.js";import"./Container--hMSSlEw.js";import"./styled-Dsi4lrKP.js";import"./createStyled-C1fbm1Mc.js";import"./useThemeProps-BJ2283JF.js";import"./FlexBox-Brwmqgps.js";import"./Stack-BDiVPNv1.js";import"./Typography-u692F7Lr.js";import"./Paper-D5wyd3V2.js";import"./CogIcon-BeV-4FUk.js";import"./InfoIcon-XACXhAsZ.js";import"./ExpandMoreIcon-BYRPKxhi.js";import"./ThemeSwitchRow-CWrDPQ4c.js";import"./index-BM8MsdEI.js";import"./Text-COeFgyG1.js";import"./AdapterDayjs-ByeICk9b.js";import"./useThemeProps-BfDwWLGL.js";import"./Modal-C84-Mwi0.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-CRo6hKdF.js";import"./resolveComponentProps-DB8vWEuZ.js";import"./index-D6HbG4uh.js";import"./utils-BR7uOJR9.js";import"./Popover-CNEqh9b6.js";import"./TextField-Dzy82oKI.js";import"./useFormControl-DfdyR1E3.js";import"./FormControl-BrydlDY8.js";import"./ListContext-BlVgl-Pi.js";import"./useControlled-OJY6NH35.js";import"./createSvgIcon-B8I8xlXT.js";import"./FormHelperText-C_cemKQ0.js";import"./IconButton-D6RFmtWs.js";import"./ButtonBase-R0TygaOg.js";import"./DialogContent-CSkG4AHB.js";import"./Button-d-YWvRHk.js";import"./Chip-bJ3IowVa.js";import"./MenuItem-B3aA4AXj.js";import"./dividerClasses-ClH17Faz.js";import"./_IconPopover-D3s7jMPT.js";import"./Chip-E-lZUDs8.js";import"./Divider-B6qZ_hw9.js";import"./Divider-Bj27IAqR.js";import"./TreeView-CUJ68v5-.js";import"./Collapse-DwqZb05A.js";import"./useSlot-BwMdRg8G.js";import"./AppInfoRow-C5_ggrgQ.js";import"./AppSettings-C2atzlyc.js";import"./SvgIcon-4pLSFCsg.js";import"./TableRow-B3CsX6Fd.js";import"./LinearProgress-D1Fz4RJ-.js";import"./Spinner-ByzkNUK0.js";import"./Dialog-Dkx34yy5.js";import"./MapToggleButtonPresentational-D-V7ixFF.js";import"./Remove-qKz_hbHL.js";import"./Alert-C6RVlPi4.js";import"./ToggleButton-AWyPEjYi.js";import"./LinkButton-BEGAfp3_.js";import"./TextField-BsHv7ljj.js";import"./Switch-B0Tv5QGv.js";import"./LabeledSwitch-BXMnIWFI.js";import"./DatePicker-CBY6xzyW.js";import"./DateTimePicker-B1l5MsHG.js";import"./FormControl-D_AEerrZ.js";import"./FormHelperText-pfF9X1Ya.js";import"./MenuItem-BPyYHvK7.js";import"./AccordionDetails-Cu0Lnfok.js";import"./Paper-Jsu15PNh.js";import"./ErrorFallback-Cwh2Uo6W.js";import"./ErrorFallbackText-CjRh0P2N.js";import"./ErrorFallbackWrapper-CQZHS6gC.js";import"./Brand-CXxdZUN_.js";import"./Edit-FsVyeYJ0.js";const a={zoom:5,center:[0,0],layers:[],mapStyleOptions:void 0,markers:[],polygons:[]},z=a,F=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],lr={title:"Component Library/Map/composites/BasicMapV2",component:L,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
highlight / throttling behaviour built on top of these events.`,...(T=(M=i.parameters)==null?void 0:M.docs)==null?void 0:T.description}}};const mr=["allArgs","Empty","Template","FeatureEvents"];export{s as Empty,i as FeatureEvents,p as Template,mr as __namedExportsOrder,a as allArgs,lr as default};
