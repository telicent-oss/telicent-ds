import{r as z,b as d,a as n}from"./iframe-nsP25gKo.js";import{J as L}from"./UserProfileContent-f95zNd9R.js";import{B as m}from"./Box-BLLAoZm6.js";import"./preload-helper-Dp1pzeXC.js";import"./Button-DcG95mMM.js";import"./clsx-B-dksMZM.js";import"./styled-Bt4bz1Ri.js";import"./extendSxProp-BBWs3qYR.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-Baj9xzH7.js";import"./TransitionGroupContext-CRxBndhR.js";import"./MapToggleButtonPresentational-DctfZT0J.js";import"./Remove-CzBf15o4.js";import"./createSvgIcon-LgicXHPs.js";import"./SvgIcon-DwNiQzjj.js";import"./IconButton-BYlTCNOG.js";import"./Paper-B4TYotmL.js";import"./XIcon-DvjInBT6.js";import"./Stack-RhHn8vw5.js";import"./styled-6EMwNmQ6.js";import"./createStyled-BLSQzFCR.js";import"./useThemeProps-DsTjZoaE.js";import"./Typography-DnSN7OSu.js";import"./Box-ClYQvNbI.js";import"./Container-hgkEhD5P.js";import"./FlexBox-Bbary1W6.js";import"./Brand-D2VeOYCO.js";import"./IconButton-D_s4EuKD.js";import"./LinkButton-BfQndRTn.js";import"./AppInfoRow-CLIPujn3.js";import"./_IconPopover-CM-VnDWQ.js";import"./Popover-DUCsUIlP.js";import"./utils-DLdYsqUd.js";import"./index-DjtdcByO.js";import"./index-Dxol60-t.js";import"./Modal-CeMyLzIn.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-C1ZfCTRs.js";import"./useSlotProps-vjHHGShq.js";import"./InfoIcon-B4QZA7Dh.js";import"./Text-Bwgymadh.js";import"./AppSettings-DVRHQY8i.js";import"./CogIcon-B6b_cT6g.js";import"./Badge-85zKMsnD.js";import"./Badge-9XdJnLxl.js";import"./Chip-JnNyPpPT.js";import"./Chip-CRajJEkV.js";import"./Divider-DsquOdv6.js";import"./Divider-BIYJU6nM.js";import"./dividerClasses-CfQ_rPvR.js";import"./ThemeSwitchRow-BjVkP1Fv.js";import"./Skeleton-DtU8OxFt.js";import"./Skeleton-CwfPMYJi.js";import"./TextField-yAyXnCKm.js";import"./useFormControl-BUEp33Hh.js";import"./FormControl-BMwiDYNj.js";import"./ListContext-B3Q6EA8E.js";import"./useControlled-etmNhFyh.js";import"./FormHelperText-CAF4d6sh.js";import"./MenuItem-ZgZIMTVz.js";import"./ExpandMoreIcon-BpXAgeqq.js";import"./ListItem-DzmK-gV-.js";import"./Toolbar-Dp-Ug-sg.js";import"./Close-CCEFKHxU.js";import"./Popper-Bu4oq1KR.js";import"./FormControlLabel-46a0qj7a.js";import"./Edit-y9PYitAs.js";import"./SvgIcon-DR4WFJkh.js";import"./TableRow-BZSMQNDt.js";import"./TableCell-COiajT-b.js";import"./TreeView-CrbubHa0.js";import"./useThemeProps-qS4SKgCb.js";import"./index-CLveBa9-.js";import"./Collapse-BSI7DmKL.js";import"./Dialog-DylwUyfT.js";import"./DialogContent-c2oq3SeY.js";import"./Alert-BAgHB1Qx.js";import"./useSlot-OYO5iV9R.js";import"./LinearProgress-Ck7jjyC4.js";import"./LinearProgress-Dmr1J_kV.js";import"./Spinner-cC4ZThnx.js";import"./CircularProgress-B7fpNiMY.js";import"./TextField-CFGiNnsX.js";import"./FormControl-DpTA0hxG.js";import"./FormHelperText-BifUht1K.js";import"./LabeledSwitch-B9jnW4jb.js";import"./Switch-Cny72m0T.js";import"./Switch-Cble3tJI.js";import"./RadioGroup-DhIrKGmL.js";import"./ToggleButton-A0J8XTcs.js";import"./ToggleButton-CYeKTcPs.js";import"./ToggleButtonGroup-CjH0lsuO.js";import"./MenuItem-BVxpSR0S.js";import"./Tabs-BgeYDhLN.js";import"./AccordionSummary-Bc-n5IVo.js";import"./Paper-CRM4XuDd.js";import"./ErrorFallback-CvDibk96.js";import"./ErrorFallbackText-CKST_BNY.js";import"./ErrorFallbackWrapper-BaLlP7IC.js";const a={zoom:5,center:[0,0],layers:[],markers:[],polygons:[]},H=a,F=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],Mr={title:"Component Library/Map/composites/BasicMapV2",component:L,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
