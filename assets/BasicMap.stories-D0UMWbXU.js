import{r as O,b as d,a as n}from"./iframe-BmJaKzpA.js";import{y as L}from"./DropdownButton-QvXMWf5g.js";import{B as m}from"./Box-B2o-aQ44.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-D5NkrVUA.js";import"./SvgIcon-DbW9RRsY.js";import"./clsx-B-dksMZM.js";import"./styled-CFQ-Ztvf.js";import"./extendSxProp-Cqpi5UuK.js";import"./composeClasses-fLhin0tj.js";import"./Box-P52OPraP.js";import"./Container-7dGm0tRY.js";import"./styled-CPt569yI.js";import"./createStyled-Bffddmhk.js";import"./useThemeProps-B16XkqYe.js";import"./FlexBox-DgaudmOI.js";import"./Stack-BjArtnwr.js";import"./Typography-Bjj7o5JG.js";import"./Paper-B5tHWr3y.js";import"./CogIcon-BGSwLsgD.js";import"./InfoIcon-C5-JlXMO.js";import"./ExpandMoreIcon-BN4cT-yD.js";import"./ThemeSwitchRow-CfV4zxDI.js";import"./index-lCqMlpSx.js";import"./Text-B1HWYqxs.js";import"./ListItem-BfrYHW-q.js";import"./ListContext-BjCFAdrG.js";import"./FormControl-CFg6_W5y.js";import"./useFormControl-pjOXLDlB.js";import"./TransitionGroupContext-CMgFzCdF.js";import"./resolveComponentProps-Dj3a59a6.js";import"./ButtonBase-BFPoEEs2.js";import"./Toolbar-jD6vFalY.js";import"./TextField--jGjhfWz.js";import"./Modal-C75qnOpZ.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./index-DhKKRKi1.js";import"./utils-DZMG5O1d.js";import"./Popover-GM9dkxAx.js";import"./useControlled-BUnwEBDo.js";import"./createSvgIcon-CpJqzDT6.js";import"./FormHelperText-DTG0QA_j.js";import"./Close-amllp88t.js";import"./Popper-CifQJid9.js";import"./Chip-CgO8bUZN.js";import"./IconButton-DWTOtJ52.js";import"./FormControlLabel-3XwJheib.js";import"./MenuItem-CuIuo8np.js";import"./dividerClasses-BiY2d609.js";import"./_IconPopover-1aG3b1zb.js";import"./Chip-Ql9O3aun.js";import"./Divider-CTM8S9Dj.js";import"./Divider-CemJJ6Wh.js";import"./TreeView-CtojhVRp.js";import"./useThemeProps-BowsGwXu.js";import"./Collapse-CDHPxM_N.js";import"./useSlot-RSZxcDJ_.js";import"./AppInfoRow-B-b4XEQG.js";import"./AppSettings-euvhcHhi.js";import"./SvgIcon-ury5YQzT.js";import"./TableRow-C-dHDyK3.js";import"./TableCell-2kqeg-ZR.js";import"./LinearProgress-CkPmAm-N.js";import"./LinearProgress-DWspQSET.js";import"./Spinner-B8w9B477.js";import"./CircularProgress-Bpcy9xeq.js";import"./Dialog-BjU2rSW3.js";import"./DialogContent-b24aC058.js";import"./Button-CgVDEB-f.js";import"./MapToggleButtonPresentational-BlGzR4tE.js";import"./Remove-BvGV8H9W.js";import"./Alert-Dewj0bTT.js";import"./ToggleButton-DZeEWmii.js";import"./ToggleButton-BB7t-J4s.js";import"./ToggleButtonGroup-BiA9UuSt.js";import"./LinkButton-LA6411YK.js";import"./TextField-CmL0AHrj.js";import"./Switch-BDo_8rDv.js";import"./Switch-oYQP8P7N.js";import"./LabeledSwitch-Vf-AJisw.js";import"./RadioGroup-CajsPWEN.js";import"./FormControl-DkXLR7hU.js";import"./FormHelperText-9r7loZH4.js";import"./Tabs-NOxFJG61.js";import"./MenuItem-6sxk0toU.js";import"./AccordionDetails-CuYx0iXK.js";import"./Paper-Cl8KISr9.js";import"./ErrorFallback-BuYh8t03.js";import"./ErrorFallbackText-C7OKWQpp.js";import"./ErrorFallbackWrapper-BF42-cxX.js";import"./Brand-IOllSh90.js";import"./Edit-DNF2J48_.js";const a={zoom:5,center:[0,0],layers:[],mapStyleOptions:void 0,markers:[],polygons:[]},z=a,F=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],br={title:"Component Library/Map/composites/BasicMapV2",component:L,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
highlight / throttling behaviour built on top of these events.`,...(T=(M=i.parameters)==null?void 0:M.docs)==null?void 0:T.description}}};const fr=["allArgs","Empty","Template","FeatureEvents"];export{s as Empty,i as FeatureEvents,p as Template,fr as __namedExportsOrder,a as allArgs,br as default};
