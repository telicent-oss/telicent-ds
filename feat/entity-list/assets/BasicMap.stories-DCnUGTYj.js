import{r as z,b as d,a as n}from"./iframe-DLGF4BUc.js";import{G as L}from"./EntityList-DIdsLu9S.js";import{B as m}from"./Box-CA85B3I1.js";import"./preload-helper-C1FmrZbK.js";import"./FlexBox-2AT2Uwu-.js";import"./Stack-CX0L4V8W.js";import"./styled-B1nzYGMU.js";import"./extendSxProp-DWxvZHYy.js";import"./clsx-B-dksMZM.js";import"./styled-oG3mFbuA.js";import"./createStyled-DLvNylUN.js";import"./useThemeProps-D5sfc09H.js";import"./composeClasses-fLhin0tj.js";import"./Text-DpXgC9ew.js";import"./Typography-CQvGJptE.js";import"./ListContext-fSi36sDS.js";import"./ListItem-hW3jOJVo.js";import"./FormControl-CE4f5UQy.js";import"./useFormControl-CA29WpPn.js";import"./TransitionGroupContext-D9CYwYvt.js";import"./resolveComponentProps-D6mFZg2W.js";import"./ButtonBase-CotwqhDg.js";import"./Toolbar-CiP-GOsO.js";import"./TextField-QkCWN4g8.js";import"./Modal-BPxGlzs1.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-rF9rKq-f.js";import"./index-Dy45cCFj.js";import"./utils-CoFQBbdh.js";import"./Popover-Dv9-1Kkh.js";import"./Paper-LJUHI-NO.js";import"./useControlled-D33ms4hd.js";import"./createSvgIcon-B7-RWdsa.js";import"./SvgIcon-By8aXgIc.js";import"./FormHelperText-C3O1dcpJ.js";import"./Close-DkoVebQq.js";import"./Popper-BgB7JZlg.js";import"./Badge-D6m7LIpW.js";import"./Chip-DdiieqSv.js";import"./IconButton-Bkq1m1C2.js";import"./FormControlLabel-DcBr0i4W.js";import"./MenuItem-BBO4kaVs.js";import"./dividerClasses-Ik8JkkD1.js";import"./Button-CV9E6iBw.js";import"./MapToggleButtonPresentational-DJ0t76sA.js";import"./Remove-CSdcmxrN.js";import"./ExpandLessIcon-BhrxwplQ.js";import"./Box-DfrYrAOU.js";import"./Container-B5aPNULB.js";import"./CogIcon-DZO7HehB.js";import"./InfoIcon-wTIowM_2.js";import"./ExpandMoreIcon-CEUANqPb.js";import"./ThemeSwitchRow-BvvaAcwo.js";import"./index-B2PZUJHW.js";import"./IconButton-C1KFnQCW.js";import"./Badge-BIgwpspb.js";import"./Chip-QXpGNnbf.js";import"./Divider-BqsWnBLy.js";import"./Divider-DHVXymBh.js";import"./TreeView-CxRDQ7im.js";import"./useThemeProps-Ba0TDecv.js";import"./Collapse-CuiTrv0f.js";import"./useSlot-BBQYsIC4.js";import"./AppInfoRow-nWejkyoV.js";import"./_IconPopover-C3WXrhmi.js";import"./AppSettings-C44XWmY2.js";import"./SvgIcon-Cv0ryMMu.js";import"./TableRow-DHNYRXF1.js";import"./TableCell-CDmZf9CJ.js";import"./Skeleton-DU7jOf86.js";import"./Skeleton-DXmSA4o_.js";import"./Edit-r4GAQfgg.js";import"./LinearProgress-DipKtq4x.js";import"./LinearProgress-BFS8oSB-.js";import"./Spinner-i2qfrWwN.js";import"./CircularProgress-i3TCesHd.js";import"./Dialog-Bm_WSvFH.js";import"./DialogContent-De5u5KBX.js";import"./Alert-DbYWFn5H.js";import"./ToggleButton-BWQSSQTu.js";import"./ToggleButton-l9u-dadR.js";import"./ToggleButtonGroup-DJo22eSV.js";import"./LinkButton-CRKxeZyL.js";import"./TextField-C8b_bMXq.js";import"./Switch-NkmTKI6k.js";import"./Switch-CJZKOFUT.js";import"./LabeledSwitch-BQ84BIxN.js";import"./RadioGroup-pBxOyj1N.js";import"./FormControl-DxjzYp0j.js";import"./FormHelperText-cm1vsiIe.js";import"./Tabs-C4i0NMYz.js";import"./MenuItem-BnPC1eYg.js";import"./AccordionDetails-BVl2h7ZR.js";import"./Paper-DC9SKnip.js";import"./ErrorFallback-CtoHCFXW.js";import"./ErrorFallbackText-BsCe1noc.js";import"./ErrorFallbackWrapper-C9vTjGhq.js";import"./Brand-xyVOOd-f.js";const a={zoom:5,center:[0,0],layers:[],markers:[],polygons:[]},H=a,F=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],Sr={title:"Component Library/Map/composites/BasicMapV2",component:L,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
        `}}},decorators:[o=>n(m,{sx:{width:"100vw",height:"100vh",margin:"auto"},children:o()})],argTypes:{},args:H},s={},p={args:{layers:F}},V=[{id:"marker-a",geohash:"gcpvj0",name:"Marker A (London)",style:{markerType:"pin",color:"#ff6600"}},{id:"marker-b",geohash:"u09tvw",name:"Marker B (Paris)",style:{markerType:"pin",color:"#0066ff"}}],i={args:{zoom:5,center:[2,49],layers:F.map(o=>({...o,visible:!0})),markers:V,polygons:[]},render:o=>{const[l,$]=z.useState([]),c=r=>$(e=>[r,...e].slice(0,12));return d(m,{sx:{position:"relative",width:"100%",height:"100%"},children:[n(L,{...o,onFeatureHover:(r,e)=>{const t=r===null?"hover: null":`hover: ${r} @ [${e==null?void 0:e.pixel[0]}, ${e==null?void 0:e.pixel[1]}]`;console.log(t),c(t)},onFeatureClick:(r,e)=>{const t=`click: [${r.join(", ")}]`+(e?` @ [${e.pixel[0]}, ${e.pixel[1]}]`:"");console.log(t),c(t)}}),d(m,{sx:{position:"absolute",top:8,right:8,minWidth:260,maxHeight:220,overflow:"auto",padding:1,background:"rgba(0,0,0,0.75)",color:"#fff",font:"12px/1.4 monospace",borderRadius:1,zIndex:10,pointerEvents:"none"},children:[n("div",{style:{fontWeight:600,marginBottom:4},children:"Feature events (newest first)"}),l.length===0&&n("div",{children:"Hover or click a marker…"}),l.map((r,e)=>n("div",{children:r},e))]})]})}};var h,u,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
highlight / throttling behaviour built on top of these events.`,...(T=(M=i.parameters)==null?void 0:M.docs)==null?void 0:T.description}}};const Mr=["allArgs","Empty","Template","FeatureEvents"];export{s as Empty,i as FeatureEvents,p as Template,Mr as __namedExportsOrder,a as allArgs,Sr as default};
