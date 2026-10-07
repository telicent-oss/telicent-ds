import{r as O,b as d,a as n}from"./iframe-DoV3QjMy.js";import{y as L}from"./DropdownButton-BhbMAESU.js";import{B as l}from"./Box-i9wHmHIK.js";import"./preload-helper-C1FmrZbK.js";import"./ExpandLessIcon-wPSuN2L4.js";import"./SvgIcon-LfRk_hx7.js";import"./clsx-B-dksMZM.js";import"./styled-CPIBH1-1.js";import"./extendSxProp-fXUqE6Bn.js";import"./composeClasses-fLhin0tj.js";import"./useTheme-R2nn2wZz.js";import"./Box-BOj_am_D.js";import"./Container-BCAp1nsC.js";import"./styled-B-12PeFE.js";import"./createStyled-eXdYsONq.js";import"./useThemeProps-TdGp5_1L.js";import"./FlexBox-DBCcJIxQ.js";import"./Stack-BdMqYFWr.js";import"./Typography-C5M9lYVd.js";import"./Paper-D8EuXHEg.js";import"./CogIcon-BrM3bM08.js";import"./InfoIcon-CiYXzfUV.js";import"./ExpandMoreIcon-B2nIi4ex.js";import"./ThemeSwitchRow-FSCnqxc5.js";import"./index-CQhMpfvr.js";import"./Text-5OLsLL-X.js";import"./AdapterDayjs-BKhrlOSN.js";import"./useThemeProps-BOXpzJ5n.js";import"./Modal-DOjyMiRU.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-D3Q5HB-K.js";import"./resolveComponentProps-Y7s_nXSn.js";import"./index-DW2iM9tp.js";import"./utils-wGaMTb_1.js";import"./Popover-DGWDneoN.js";import"./TextField-CBauxFJv.js";import"./useFormControl-BBJmWV5Z.js";import"./FormControl-NT9TewQW.js";import"./ListContext-DSsdSFYa.js";import"./useControlled-D4ltESLF.js";import"./createSvgIcon-BXWXI27a.js";import"./FormHelperText-DH_PsvUH.js";import"./IconButton-Do8WBZlm.js";import"./ButtonBase-B3vut5uf.js";import"./DialogContent-Cxk4mq_R.js";import"./Button-Q5m5wgGr.js";import"./Chip-ChxBfEd0.js";import"./MenuItem-Bi0nOKmr.js";import"./dividerClasses-DWbaFYr4.js";import"./_IconPopover-3JecEz2K.js";import"./Chip-DJ5vTtwO.js";import"./Divider-DRlkiuEy.js";import"./Divider-B_fO4zSk.js";import"./TreeView-BoweCL_Q.js";import"./Collapse-CsdAK5Wv.js";import"./useSlot-BdGIBGt4.js";import"./AppInfoRow-LLJ-5Iyu.js";import"./AppSettings-BRMLiFkJ.js";import"./SvgIcon-DWBoWjNh.js";import"./TableRow-CeRToYDZ.js";import"./LinearProgress-B2ekBvrP.js";import"./Spinner-CSc35F_z.js";import"./Dialog-ypZzlQrl.js";import"./MapToggleButtonPresentational-DTPSB-td.js";import"./Remove-DZnC4XqL.js";import"./Alert-DNKQv9Xy.js";import"./ToggleButton-CcNjzFiL.js";import"./ToggleButtonGroup-CBnYeWXB.js";import"./LinkButton-RAsf-V-S.js";import"./TextField-nss9Ddfr.js";import"./Switch-Dv-Mdd5-.js";import"./LabeledSwitch-CGdobyKV.js";import"./DatePicker-D3z9p8TY.js";import"./DateTimePicker-C5tnYF0t.js";import"./FormControl-Dx2UVhU_.js";import"./FormHelperText-DzTrQ05w.js";import"./MenuItem-98KVhiDY.js";import"./AccordionDetails-nJFr__g1.js";import"./Paper-Ci4OLb79.js";import"./ErrorFallback-ChSIl1-_.js";import"./ErrorFallbackText-DVL8h8i-.js";import"./ErrorFallbackWrapper-CrN-k4Ys.js";import"./Brand-CDQ5BSnl.js";import"./Edit-CXAUVhGa.js";const a={zoom:5,center:[0,0],layers:[],mapStyleOptions:void 0,markers:[],polygons:[]},z=a,F=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],lr={title:"Component Library/Map/composites/BasicMapV2",component:L,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
