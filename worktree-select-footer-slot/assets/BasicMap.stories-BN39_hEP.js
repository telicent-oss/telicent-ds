import{j as y}from"./iframe-Crov0WQz.js";import{y as u}from"./DropdownButton-CLtoK2nQ.js";import{B as g}from"./Box-BG0wW1Gw.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BpACv-KD.js";import"./createSvgIcon-YDz-o7-b.js";import"./styled-Iiak7Ogq.js";import"./generateUtilityClasses-YSREvbxX.js";import"./useTheme-B_goZ4qo.js";import"./Container-B68-6-yw.js";import"./styled-CNP8R88q.js";import"./createStyled-BLdT8Qb_.js";import"./useThemeProps-ZmDRkbFp.js";import"./Stack-Bfojjyxu.js";import"./Typography-B9r5TGn1.js";import"./Paper-Dqj2J0bD.js";import"./useThemeProps-BHR99ymZ.js";import"./Text-D0Fnpi2n.js";import"./AdapterDayjs-5PvZCLYQ.js";import"./Modal-Ckwnu49q.js";import"./utils-DmCjym0s.js";import"./TransitionGroupContext-D_iDfzVR.js";import"./index-DKz44-9c.js";import"./TextField-DoWg8ST_.js";import"./useFormControl-nQOCEbZr.js";import"./IconButton-CkgmJ1wq.js";import"./ButtonBase-D84oecVH.js";import"./DialogContent-Bogzx-91.js";import"./Button-CacSTNVY.js";import"./Chip-CTEj_6SL.js";import"./DateTimePicker-CZdkDgZx.js";import"./Divider-B4WphmzU.js";import"./Chip-C1hb46nu.js";import"./Divider-DjIAefNA.js";import"./TreeView-BhCu4_vt.js";import"./LinearProgress-xJR7lhkP.js";import"./Spinner-BFZivWxB.js";import"./Dialog-DoAt61AO.js";import"./MapToggleButtonPresentational-C7M7o9lk.js";import"./Remove-Dh7kVVq0.js";import"./TextField-08-w4XG5.js";import"./Switch-B39EAJit.js";import"./DatePicker-PvBZCpyj.js";import"./LinkButton-CKRF2-uU.js";import"./Paper-DuUVMjJy.js";import"./ErrorFallback-DVSKIMBt.js";import"./ErrorFallbackText-C98aj5QV.js";import"./ErrorFallbackWrapper-CV687E_O.js";import"./Brand-DTDlbVRJ.js";import"./constants-BsbrBYOu.js";import"./Edit-DYqlQ0Co.js";const e={zoom:5,center:[0,0],layers:[],mapStyleOptions:void 0,markers:[],polygons:[]},h=e,v=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],ge={title:"Component Library/Map/composites/BasicMapV2",component:u,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
        `}}},decorators:[d=>y(g,{sx:{width:"100vw",height:"100vh",margin:"auto"},children:d()})],argTypes:{},args:h},r={},t={args:{layers:v}};var o,a,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  zoom: 5,
  center: [0, 0],
  layers: [],
  mapStyleOptions: undefined,
  markers: [],
  polygons: []
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var m,c,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    layers: baseLayers
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const he=["allArgs","Empty","Template"];export{r as Empty,t as Template,he as __namedExportsOrder,e as allArgs,ge as default};
