import{j as y}from"./iframe-LIGj3d-Q.js";import{x as u}from"./DropdownButton-BJ8ATclk.js";import{B as g}from"./Box-ZS7CRD1W.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BZq18jI_.js";import"./SvgIcon-D7LY-Es_.js";import"./generateUtilityClass-BBJ39S72.js";import"./styled-CMrnC_6X.js";import"./generateUtilityClasses-CdCMisAN.js";import"./useTheme-Drvcy2jL.js";import"./Box-Xmc6gVQw.js";import"./Container-DsY-R8Xi.js";import"./styled-BE6CXqzB.js";import"./createStyled-DkzSDqqT.js";import"./useThemeProps-CsX7Y_ml.js";import"./FlexBox-CW-13tp1.js";import"./Stack-BLybbMM6.js";import"./Typography-D3mJSaGG.js";import"./Paper-BQl-weoM.js";import"./useThemeProps-OVRUsTmW.js";import"./Text-C1ckyoQT.js";import"./AdapterDayjs-Ch4KVDrb.js";import"./Modal-C9wnEkLA.js";import"./utils-DXkjnBan.js";import"./TransitionGroupContext-BcEhJ9yi.js";import"./index-DxBxG5lA.js";import"./resolveComponentProps-pTf1jdNZ.js";import"./Popover-DB9tZCoT.js";import"./TextField-Zx-ZjNDc.js";import"./useFormControl-B8GjATra.js";import"./createSvgIcon-BsE78Bbg.js";import"./IconButton-E06dBbED.js";import"./ButtonBase-DLqnRUvo.js";import"./DialogContent-Cu4YKXbj.js";import"./Button-Q_dOly4u.js";import"./Chip-O7SJtB9c.js";import"./DateTimePicker-BhHVL6O-.js";import"./Divider-CvUfSPVx.js";import"./AppInfoRow-CM-T5Qzd.js";import"./Chip-259Gi_f0.js";import"./Divider-K2aGA6fe.js";import"./TreeView-CY1-K2Qs.js";import"./Alert-CSa2GtHR.js";import"./LinearProgress-w3c5P4tQ.js";import"./Spinner-BXyU6yX3.js";import"./Dialog-DGOK43e8.js";import"./MapToggleButtonPresentational-DAJ6zUSX.js";import"./Remove-ZVe8f5hM.js";import"./LinkButton-BtKNy-FT.js";import"./TextField-CnjLxEi3.js";import"./Switch-fYOd7byu.js";import"./DatePicker-C-nFnRZR.js";import"./Paper-DkXRXPRv.js";import"./ErrorFallback-DKu42nBH.js";import"./ErrorFallbackText-N065n6oW.js";import"./ErrorFallbackWrapper-D0RMVwUL.js";import"./Brand-DWzMeGAm.js";import"./constants-CiN2e574.js";import"./Edit-t2iHK7-h.js";const e={zoom:5,center:[0,0],layers:[],mapStyleOptions:void 0,markers:[],polygons:[]},h=e,v=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],Me={title:"Component Library/Map/composites/BasicMapV2",component:u,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var m,c,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    layers: baseLayers
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const Oe=["allArgs","Empty","Template"];export{r as Empty,t as Template,Oe as __namedExportsOrder,e as allArgs,Me as default};
