import{j as y}from"./iframe-DoslK4-Y.js";import{y as u}from"./DropdownButton-CpLqd6lJ.js";import{B as g}from"./Box-D2_lAdOb.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DnXd5C1m.js";import"./createSvgIcon-kyaEsooS.js";import"./generateUtilityClass-JvD44KlO.js";import"./styled-B63D9YfN.js";import"./generateUtilityClasses-DKrtj2o0.js";import"./useTheme-DzicPpM7.js";import"./Box-DAPH_7_v.js";import"./Container-PDo0r7TO.js";import"./styled-BvUWTwGk.js";import"./createStyled-C2aqfojm.js";import"./useThemeProps-DNll4FD1.js";import"./Stack-UL0xvK-j.js";import"./Typography-D2p4r1VP.js";import"./Paper-1pU2OFLe.js";import"./useThemeProps-BNlVDt2d.js";import"./Text-Cij1s-38.js";import"./AdapterDayjs-UbNq20Y4.js";import"./Modal-rS1eOuqw.js";import"./utils-Dvm8JGhi.js";import"./TransitionGroupContext-C-tiKQba.js";import"./index-CkH7vSdv.js";import"./resolveComponentProps-COOebCVT.js";import"./TextField-C2yuJQKq.js";import"./useFormControl-DRekPhCN.js";import"./IconButton-poqVLHkM.js";import"./ButtonBase-C5TrPrFI.js";import"./DialogContent-DhrHlbA4.js";import"./Button-C-Z1g5oZ.js";import"./Chip-D3gK25ET.js";import"./DateTimePicker-BXudKtkl.js";import"./Divider-JBjBhjWn.js";import"./Chip-DNg9fUiC.js";import"./Divider-DPs7zMxh.js";import"./TreeView-y43LHmco.js";import"./Close-MejyRCXq.js";import"./LinearProgress-zmCoNGUe.js";import"./Spinner-DokMSZNQ.js";import"./Dialog-Zk72S_-8.js";import"./MapToggleButtonPresentational-Dqn1nl-c.js";import"./Remove-BlL-kZFd.js";import"./TextField-BX9-cCN-.js";import"./Switch-DAnjy2Z2.js";import"./DatePicker-yxE24Q2d.js";import"./LinkButton-OGrJf87H.js";import"./Paper-CuXqVMKU.js";import"./ErrorFallback-BxLGSuCI.js";import"./ErrorFallbackText-DMYJZIcj.js";import"./ErrorFallbackWrapper-CoUUqruh.js";import"./Brand-BHjzrKzK.js";import"./constants-4rCzzNn2.js";import"./Edit-BUNMs3rM.js";const e={zoom:5,center:[0,0],layers:[],mapStyleOptions:void 0,markers:[],polygons:[]},h=e,v=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],fe={title:"Component Library/Map/composites/BasicMapV2",component:u,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
