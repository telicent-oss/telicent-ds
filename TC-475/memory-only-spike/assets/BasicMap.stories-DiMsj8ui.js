import{r as z,b as d,a as n}from"./iframe-RnQnoQX8.js";import{J as L}from"./UserProfileContent-CMKr3g_m.js";import{B as m}from"./Box-Bw31xyk6.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-Cv-t7gt4.js";import"./clsx-B-dksMZM.js";import"./styled-CHUqJEZN.js";import"./extendSxProp-CBh2QTe4.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-DI6HdjXk.js";import"./TransitionGroupContext-CBVDQk4P.js";import"./MapToggleButtonPresentational-Da4cOXhB.js";import"./Remove-7Y2EcPpw.js";import"./createSvgIcon-DEQxKW2j.js";import"./SvgIcon-BvuMPYna.js";import"./IconButton--ocr3Hbq.js";import"./Paper-_jcYEZaX.js";import"./XIcon-CCibX9oC.js";import"./Stack-CrylB_Fp.js";import"./styled-eZ5xdzZ3.js";import"./createStyled-CPPTetpG.js";import"./useThemeProps-CmFLLsEv.js";import"./Typography-DBvs_soa.js";import"./Box-W8ovBlmy.js";import"./Container-BwVzxpaS.js";import"./FlexBox-DsO7ubDs.js";import"./Brand-D9g93ilS.js";import"./IconButton-B6c5afDL.js";import"./LinkButton-BUW8XXKD.js";import"./AppInfoRow-BeFe7p8y.js";import"./_IconPopover-CobC4KUZ.js";import"./Popover-MwJ0-EW_.js";import"./utils-bvnqZ63E.js";import"./index-DRTkc6c-.js";import"./index-BNYStkyE.js";import"./Modal-v8QLfI2w.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-FxkCCCo6.js";import"./useSlotProps-DgvSFONu.js";import"./InfoIcon-D6Exs_Xw.js";import"./Text-ByuSSYGz.js";import"./AppSettings-D5gbX9uT.js";import"./CogIcon-CIdE7un1.js";import"./Badge-DKp5H5jh.js";import"./Badge-Dkt0jcpj.js";import"./Chip-XC4RVids.js";import"./Chip-Dl-4X4p2.js";import"./Divider-dOkWtiDQ.js";import"./Divider-D4m18Epw.js";import"./dividerClasses-CbcYRHVe.js";import"./ThemeSwitchRow-CTIMiD2z.js";import"./Skeleton-DCTvNfgq.js";import"./Skeleton-C0XYBYTl.js";import"./TextField-C1cT5Aao.js";import"./useFormControl-BDkUgp4y.js";import"./FormControl-DuXM5IYN.js";import"./ListContext-BvKyAyz9.js";import"./useControlled-BiJlVKlY.js";import"./FormHelperText-Cnr2UHSD.js";import"./MenuItem-BAkMVuqq.js";import"./ExpandMoreIcon-BSEHq4MR.js";import"./ListItem-CZpNJal7.js";import"./Toolbar-BU64nVx5.js";import"./Close-B1WU-_xu.js";import"./Popper-DO2lmnhT.js";import"./FormControlLabel-vRc02SQa.js";import"./Edit-WtWCEqSy.js";import"./SvgIcon-C0tF2EOt.js";import"./TableRow-BLgmD9P-.js";import"./TableCell-Cmmt5y6X.js";import"./TreeView-BqpNoiiq.js";import"./useThemeProps-Gx6XDnDx.js";import"./index-BAXa6WLZ.js";import"./Collapse-DT_Z5Ga5.js";import"./Dialog-hrhG2Ut0.js";import"./DialogContent-D2_KaIGY.js";import"./Alert-C_oszVvC.js";import"./useSlot-DqjjmsZB.js";import"./LinearProgress-CyEm_RB3.js";import"./LinearProgress-BAZ9C-Px.js";import"./Spinner-sBOybquN.js";import"./CircularProgress-ChGQDyoU.js";import"./TextField-DraT1S6N.js";import"./FormControl-DbhJZSNC.js";import"./FormHelperText-Ce917Gi3.js";import"./LabeledSwitch-Cd6X1CbS.js";import"./Switch-BQR1ScOG.js";import"./Switch-khoc8YVO.js";import"./RadioGroup-CSCckcNR.js";import"./ToggleButton-id5d8vke.js";import"./ToggleButton-BHbbn58Z.js";import"./ToggleButtonGroup-CIB7dpuM.js";import"./MenuItem-CLiTILFp.js";import"./Tabs-SnAko9mR.js";import"./AccordionSummary-D36Wvqua.js";import"./Paper-xZIfXiq-.js";import"./ErrorFallback-3sgzHsBs.js";import"./ErrorFallbackText-_T9Q39fP.js";import"./ErrorFallbackWrapper-rfGejkDn.js";const a={zoom:5,center:[0,0],layers:[],markers:[],polygons:[]},H=a,F=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],Mr={title:"Component Library/Map/composites/BasicMapV2",component:L,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
