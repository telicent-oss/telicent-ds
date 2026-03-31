import{j as y}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{d as u}from"./AuthModal-CbDw81Tm.js";import{B as g}from"./Box-CRiiUqfG.js";import"./jsx-runtime-CB_V9I5Y.js";import"./index-CTjT7uj6.js";import"./Text-D7i5Vapy.js";import"./Typography-NY1t2oJS.js";import"./identifier-ubkqThfq.js";import"./styled-DjfdLqg6.js";import"./generateUtilityClasses-axRDXlOb.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./constants-5YTzP5DG.js";import"./iframe-Be8FMi7j.js";import"../sb-preview/runtime.js";import"./index-DEWJqUJ8.js";import"./types-CMP91hxZ.js";import"./useTheme-DVRb4tHF.js";import"./useTheme-CZEWbKR4.js";import"./GlobalStyles-CqOQHgIj.js";import"./GlobalStyles-DulCgQ73.js";import"./useThemeProps-ErBa_dZ_.js";import"./useThemeProps-BQrQzAVn.js";import"./ButtonBase-DOQIfnJh.js";import"./TransitionGroupContext-CcEGFwN5.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./index-CejG0Q0C.js";import"./Select-CG_yOqSO.js";import"./useFormControl-DPKvkoC5.js";import"./Modal-BitlNMhn.js";import"./utils-EYY7_thZ.js";import"./Paper-DurtPqdU.js";import"./useId-DMVUMfb1.js";import"./createSvgIcon-DTZC2Bgq.js";import"./AdapterDayjs-CwUPgnLa.js";import"./TextField-DHonYTvf.js";import"./createStyled-MF3orRa4.js";import"./IconButton-Cs2d6H_u.js";import"./colorManipulator-DHCSb3wy.js";import"./DialogContent-B0Ct5bDE.js";import"./Button-CDw32Au9.js";import"./Chip-DNdTa_iC.js";import"./UserIcon-Bq9kLVr7.js";import"./Container-CeTulhJU.js";import"./styled-D52li5_j.js";import"./Stack-C-VLTEnn.js";import"./MenuItem-DqUkfAKy.js";import"./dividerClasses-Bl8Ne15h.js";import"./UIThemeProvider-Y3o75pQS.js";import"./ThemeProvider-BnKwSnOu.js";import"./Chip-BPJ67Xo5.js";import"./Card-BQnMpQJj.js";import"./Divider-ALDgEm0R.js";import"./TreeView-DWvM_rah.js";import"./LinearProgress-BKbPPN-u.js";import"./Spinner-w6IMOYm1.js";import"./Dialog-C58kaBQ6.js";import"./MapToggleButtonPresentational-C6NzNk9h.js";import"./Remove-sI1URbM_.js";import"./TextField-h5PPgqP5.js";import"./Select-R6uhQZb-.js";import"./Switch-Cq_EkAlM.js";import"./DatePicker-CfVtjRA2.js";import"./DateTimePicker-CAFr88VV.js";import"./LinkButton-nuz8b2FC.js";import"./Paper-Bbtnvex6.js";import"./ErrorFallback-DmOQLNkI.js";import"./ErrorFallbackText-FisNSYtr.js";import"./ErrorFallbackWrapper-C7MPjQkG.js";import"./Brand-CDA26Tjd.js";import"./Edit-C29vdGC_.js";const e={zoom:5,center:[0,0],layers:[],mapStyleOptions:void 0,markers:[],polygons:[]},h=e,v=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],qe={title:"Component Library/Map/composites/BasicMapV2",component:u,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,p,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var n,c,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    layers: baseLayers
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const Ee=["allArgs","Empty","Template"];export{r as Empty,t as Template,Ee as __namedExportsOrder,e as allArgs,qe as default};
