import{j as y}from"./iframe-D9lU07Zf.js";import{y as u}from"./DropdownButton-DzsOMP1u.js";import{B as g}from"./Box-CSybQHSa.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-r0zPa3RZ.js";import"./createSvgIcon-DFI5qBHU.js";import"./generateUtilityClass-D7q2yxGy.js";import"./styled-DoKDlkZ_.js";import"./generateUtilityClasses-DlijklOR.js";import"./useTheme-SybXv74r.js";import"./Box-BJrD4UE_.js";import"./Container-BcSzuyYl.js";import"./styled-DiYYYjn2.js";import"./createStyled-BPBpdXBm.js";import"./useThemeProps-BAvRSqZ0.js";import"./Stack-BnA3evNe.js";import"./Typography-C6RHNrrz.js";import"./Paper-Cej6lYK6.js";import"./useThemeProps-BVMIZTQV.js";import"./Text-HEEd4Tr4.js";import"./AdapterDayjs-BjHxbXQG.js";import"./Modal-8YIgZsH9.js";import"./utils-CoFbKNqr.js";import"./TransitionGroupContext-jFit0_oH.js";import"./index-BBdfoeT5.js";import"./resolveComponentProps-E2VM1uz1.js";import"./TextField-CJ0-8TEN.js";import"./useFormControl-TA3T3Av9.js";import"./IconButton-tmuZo6L6.js";import"./ButtonBase-DSNICrLd.js";import"./DialogContent-BS32uX7_.js";import"./Button-DhyX7BiZ.js";import"./Chip-DoVi98mw.js";import"./DateTimePicker-CMScypHs.js";import"./Divider-AwwvZxp0.js";import"./Chip-luU8AZ1L.js";import"./Divider-BrsXIlBD.js";import"./TreeView-CJsNe1p9.js";import"./Close-C_etf32Q.js";import"./LinearProgress-Bxn_kvK2.js";import"./Spinner-DfGKdH87.js";import"./Dialog-Cw8kg19x.js";import"./MapToggleButtonPresentational-BbUeRSZp.js";import"./Remove-Be9W_CKm.js";import"./TextField-DFYGxZvh.js";import"./Switch-CoEGI3zX.js";import"./DatePicker-KE2OE2TB.js";import"./LinkButton-XbvtPO8L.js";import"./Paper-BwpRoinM.js";import"./ErrorFallback-BXGLlVLh.js";import"./ErrorFallbackText-C1gmEt6Z.js";import"./ErrorFallbackWrapper-DnVofVwB.js";import"./Brand-CKNi3Y53.js";import"./constants-mTaQgHmf.js";import"./Edit-CFpkLirJ.js";const e={zoom:5,center:[0,0],layers:[],mapStyleOptions:void 0,markers:[],polygons:[]},h=e,v=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],fe={title:"Component Library/Map/composites/BasicMapV2",component:u,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const we=["allArgs","Empty","Template"];export{r as Empty,t as Template,we as __namedExportsOrder,e as allArgs,fe as default};
