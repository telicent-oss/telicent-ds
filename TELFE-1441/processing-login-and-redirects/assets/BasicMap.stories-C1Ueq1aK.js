import{j as y}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{d as u}from"./AuthModal-CUlTxh6F.js";import{B as g}from"./Box-DR7xjwgg.js";import"./jsx-runtime-DMAvRu52.js";import"./index-Dl6G-zuu.js";import"./Text-DnbGH9ax.js";import"./Typography-DvrCv4HQ.js";import"./identifier-CCo8HfxA.js";import"./styled-DiVYluCu.js";import"./generateUtilityClasses-CRyAR7Z0.js";import"./DefaultPropsProvider-BrPVfFhn.js";import"./constants-B9G9mcxd.js";import"./iframe-MqSQKm6Q.js";import"../sb-preview/runtime.js";import"./index-Dn0cO_TJ.js";import"./types-JQgdQoTs.js";import"./useTheme-DC9e96ys.js";import"./useTheme-CEgm5wok.js";import"./GlobalStyles-BK1ltzIn.js";import"./GlobalStyles-DdQ_E3CX.js";import"./UserProfile-DRN111Dw.js";import"./UserIcon-B0AVfc7u.js";import"./SvgIcon-DDjczThx.js";import"./index-BfyspvgH.js";import"./FlexBox-owEKTX38.js";import"./styled-BEKiHWi7.js";import"./createStyled-9i3u5Rqa.js";import"./useThemeProps-BFLDat3t.js";import"./createSvgIcon-CxivGeKF.js";import"./Modal-cSJVsbaW.js";import"./utils-QfZKikgD.js";import"./TransitionGroupContext-Cbp9jVrs.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./IconButton-CL6GPvoG.js";import"./ButtonBase-C0n3d_CB.js";import"./Menu-CYNMhx33.js";import"./index-CXtVKvFt.js";import"./Popover-DD2HYYg7.js";import"./Paper-B-rBeRIm.js";import"./Select-Nzfsci8P.js";import"./useFormControl-CQLCXd-P.js";import"./useId-CkA8naEk.js";import"./Popper-QmfZ5sgW.js";import"./TelicentHorizontalSVG-DP7xLAp3.js";import"./FlexGrid-M25hPc65.js";import"./Container-CFeVW3qn.js";import"./DataSetIcon-CzT3Gt8m.js";import"./AdapterDayjs-Dmcgw6f1.js";import"./useThemeProps-BTBzXMHi.js";import"./TextField-BnU6ehgf.js";import"./FormHelperText-D2-CeYt9.js";import"./colorManipulator-DBPky6cX.js";import"./DialogContent-DyFozIFy.js";import"./Button-DPeHgJ80.js";import"./Chip-B7XAvyWn.js";import"./MenuItem-MWBitPoC.js";import"./dividerClasses-DixuAXrT.js";import"./UIThemeProvider-vkr8-daa.js";import"./ThemeProvider-BPzF9hu_.js";import"./IconButton-CSCqGkQ5.js";import"./Chip-Jqcc-fVu.js";import"./Divider-HWnn5fVZ.js";import"./Divider-DOeen-K3.js";import"./TreeView-B3svt8lB.js";import"./UserProfileContent-BkWk_Qx8.js";import"./LinearProgress-CRSreEF6.js";import"./Dialog-C-jl0jSy.js";import"./Button-CI14C0BZ.js";import"./LinkButton-CJcpdsZt.js";import"./TextField-BXFcgNlD.js";import"./Select-qyD46tLz.js";import"./Autocomplete-2ovWRRWN.js";import"./DatePicker-DSr6TGip.js";import"./DateTimePicker-C633L0Z7.js";import"./Card-BWv60QFk.js";import"./CardActions-CCW8za6b.js";import"./Popover-CAHG92mn.js";import"./Paper-BBwh5-3y.js";import"./ErrorFallback-fPXNZKjO.js";import"./ErrorFallbackText-BLCYy_1i.js";import"./ErrorFallbackWrapper-CSpgK55r.js";import"./MapToggleButtonPresentational-DY66EemL.js";import"./Remove-DLpXZYtt.js";import"./Edit-BwFhg13Q.js";const e={zoom:5,center:[0,0],layers:[],mapStyleOptions:void 0,markers:[],polygons:[]},h=e,v=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],He={title:"Component Library/Map/composites/BasicMapV2",component:u,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
        `}}},decorators:[d=>y(g,{sx:{width:"100vw",height:"100vh",margin:"auto"},children:d()})],argTypes:{},args:h},r={},t={args:{layers:v}};var o,i,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  zoom: 5,
  center: [0, 0],
  layers: [],
  mapStyleOptions: undefined,
  markers: [],
  polygons: []
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var p,s,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var n,c,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    layers: baseLayers
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const We=["allArgs","Empty","Template"];export{r as Empty,t as Template,We as __namedExportsOrder,e as allArgs,He as default};
