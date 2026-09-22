import{r as O,b as d,a as n}from"./iframe-QjimQxGJ.js";import{y as L}from"./DropdownButton-BqQMtZNv.js";import{B as l}from"./Box-BdgnJPj4.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-C4O34cYP.js";import"./SvgIcon-qDEXG8Q2.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-k9OHEYOT.js";import"./extendSxProp-CWL_eOV9.js";import"./generateUtilityClasses-g9ufi11G.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-h6Umsisj.js";import"./Box-kqiIuPV6.js";import"./Container-DqveXh-O.js";import"./styled-DdRNySmR.js";import"./createStyled-kkTu4cdj.js";import"./useThemeProps-GaSBv1_5.js";import"./FlexBox-BHBK3XbM.js";import"./Stack-BCJid8GC.js";import"./Typography-BALYr_AM.js";import"./Paper-B4HMI984.js";import"./CogIcon-DoAefpgk.js";import"./InfoIcon-KAZwn8zl.js";import"./ThemeSwitchRow-CqJgfSGe.js";import"./index-BhQh1m69.js";import"./Text-CbHxOYIZ.js";import"./AdapterDayjs-COKlw25t.js";import"./useThemeProps-qyYKSYwF.js";import"./Modal-DPpC_MaX.js";import"./utils-DWVeh98X.js";import"./TransitionGroupContext-BNsz8i9y.js";import"./index-C895Ui_J.js";import"./resolveComponentProps-u9w1Xhfi.js";import"./Popover-D6-B0sHe.js";import"./TextField-BxmNESyD.js";import"./useFormControl-CLcxU0V8.js";import"./FormControl-pQC5AWwY.js";import"./useControlled-ClIGAfqi.js";import"./createSvgIcon-B0ZMIwZ-.js";import"./FormHelperText-D3ES7yVt.js";import"./IconButton-CdzYSU6E.js";import"./ButtonBase-B3FHfXkx.js";import"./DialogContent-DEerxyRB.js";import"./Button-B0acl6RO.js";import"./Chip-BIs9pIL_.js";import"./DateTimePicker-Cs-8dsfN.js";import"./Divider-CfN-tf0_.js";import"./_IconPopover-enaiw0Ag.js";import"./Chip-D2kTYDHW.js";import"./Divider-D4gWlnBJ.js";import"./TreeView-DHji-qEu.js";import"./Alert-BIYPLeJ4.js";import"./AppInfoRow-DsusScyS.js";import"./AppSettings-Blvm1PFt.js";import"./TableRow-ipCVlD9g.js";import"./LinearProgress-CCUeeTNk.js";import"./Spinner-ZqiMizuS.js";import"./Dialog-CQqj-Shc.js";import"./MapToggleButtonPresentational-DlVdc9iK.js";import"./Remove-CZV99RA6.js";import"./LinkButton-C1rXXMBH.js";import"./TextField-Cc6z2PNl.js";import"./Switch-T5c-KsvY.js";import"./LabeledSwitch-CY2Gql7U.js";import"./DatePicker-CZCRHMp9.js";import"./FormControl-CNaUogrQ.js";import"./FormHelperText-BO3t8uTC.js";import"./Paper-BSq9F4WF.js";import"./ErrorFallback-Dzp1pGy2.js";import"./ErrorFallbackText-D_comUev.js";import"./ErrorFallbackWrapper-CDfvx67q.js";import"./Brand-DAKosmlu.js";import"./Edit-D8MCsODy.js";const a={zoom:5,center:[0,0],layers:[],mapStyleOptions:void 0,markers:[],polygons:[]},z=a,F=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],Ye={title:"Component Library/Map/composites/BasicMapV2",component:L,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
highlight / throttling behaviour built on top of these events.`,...(T=(M=i.parameters)==null?void 0:M.docs)==null?void 0:T.description}}};const Ze=["allArgs","Empty","Template","FeatureEvents"];export{s as Empty,i as FeatureEvents,p as Template,Ze as __namedExportsOrder,a as allArgs,Ye as default};
