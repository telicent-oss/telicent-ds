import{j as y}from"./iframe-BqqKlwwa.js";import{y as u}from"./DropdownButton-DzB6ahkn.js";import{B as g}from"./Box-fJZ8R9-A.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-CPduY34a.js";import"./createSvgIcon-1vjhxYae.js";import"./generateUtilityClass-C21e_TMF.js";import"./styled-DYH3NNtb.js";import"./generateUtilityClasses-CXTZVc4r.js";import"./useTheme-D5fnxfrf.js";import"./Box-CMGXnnyg.js";import"./Container-CjnffXXv.js";import"./styled-BKL9P30Y.js";import"./createStyled-2Pi8n9Bx.js";import"./useThemeProps-BE43dwe9.js";import"./Stack-DGYvNFnp.js";import"./Typography-r9WARuqd.js";import"./Paper-CJpWpN4s.js";import"./useThemeProps-BeWtcQiU.js";import"./Text-D367fKUk.js";import"./AdapterDayjs-DvkxE42H.js";import"./Modal-CFi7NpCZ.js";import"./utils-ClVsDaXg.js";import"./TransitionGroupContext-DiVglu5Y.js";import"./index-CRMvLHot.js";import"./resolveComponentProps-Cd0rbuoE.js";import"./TextField-CSaMK6Rk.js";import"./useFormControl-CJ-AiNnx.js";import"./IconButton-C0yfI_AJ.js";import"./ButtonBase-Bplzc8va.js";import"./DialogContent-CtGptt-v.js";import"./Button--P2V-vbf.js";import"./Chip-Bg9GS4ad.js";import"./DateTimePicker-Bg2Aumfy.js";import"./Divider-C9Y0zhSY.js";import"./Chip-DP6OEXjS.js";import"./Divider-DtsR-NFR.js";import"./TreeView-g4w2Ic2N.js";import"./Close-KcKFZADQ.js";import"./LinearProgress-BcbpGby2.js";import"./Spinner-C3y-_tnf.js";import"./Dialog-CU2Sdzg4.js";import"./MapToggleButtonPresentational-BhuzwcFT.js";import"./Remove-CJtGZM1W.js";import"./TextField-DcCagKfQ.js";import"./Switch-BFbXwE48.js";import"./DatePicker-D6WVRr1T.js";import"./LinkButton-5F2XfMGt.js";import"./Paper-8WAvk_Qw.js";import"./ErrorFallback-AR6ag1S9.js";import"./ErrorFallbackText-CFF1RAi1.js";import"./ErrorFallbackWrapper-D5foAbpi.js";import"./Brand-Dl2vMMPH.js";import"./constants-mvoOnkOS.js";import"./Edit-oZ_9Z-0E.js";const e={zoom:5,center:[0,0],layers:[],mapStyleOptions:void 0,markers:[],polygons:[]},h=e,v=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],fe={title:"Component Library/Map/composites/BasicMapV2",component:u,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
