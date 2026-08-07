import{j as y}from"./iframe-2R0I_iab.js";import{y as u}from"./DropdownButton-DIABJQSC.js";import{B as g}from"./Box-CnYDa6Qf.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DgD39kRa.js";import"./createSvgIcon-mEStq9kO.js";import"./generateUtilityClass-CD2y2PA9.js";import"./styled-DOqFaxF3.js";import"./generateUtilityClasses-CQX3K1Az.js";import"./useTheme-DIsbzBAj.js";import"./Box-DkaRWSls.js";import"./Container-CVVcdNPZ.js";import"./styled-DSveC2VB.js";import"./createStyled-7MyDbkZC.js";import"./useThemeProps-BZXXP621.js";import"./Stack-CY2zen42.js";import"./Typography-CLpqeEo-.js";import"./Paper-d8y5ElZ3.js";import"./useThemeProps-DFSQRIyd.js";import"./Text-ijTctchc.js";import"./AdapterDayjs-C0knh-V0.js";import"./Modal-CTV7kQyA.js";import"./utils-Cmi71HQq.js";import"./TransitionGroupContext-DqwjpCqS.js";import"./index-cXybQAtE.js";import"./resolveComponentProps-Cv5RNStH.js";import"./TextField-CGJuDnTR.js";import"./useFormControl-Dksspww5.js";import"./IconButton-2Ggfedl3.js";import"./ButtonBase-CCY4F8Yx.js";import"./DialogContent-BFfU8EFI.js";import"./Button-Bvu6LaZX.js";import"./Chip-Ci5Wvh6t.js";import"./DateTimePicker-Dk1S7IIq.js";import"./Divider-CD7sLQ3W.js";import"./Chip-CR4NBaGA.js";import"./Divider-DmfX1O82.js";import"./TreeView-DooNYzs2.js";import"./Close-DqanLwtm.js";import"./LinearProgress-dsytnwK0.js";import"./Spinner-CnGh8NP_.js";import"./Dialog-3ino5muI.js";import"./MapToggleButtonPresentational-Bc5YYuzo.js";import"./Remove-DkyK2kxE.js";import"./TextField-DYkturVF.js";import"./Switch-D_taiJx6.js";import"./DatePicker-BB6UCZL8.js";import"./LinkButton-p2kJftH-.js";import"./Paper-rT427azC.js";import"./ErrorFallback-DwUrMpBh.js";import"./ErrorFallbackText-mQySYuZ9.js";import"./ErrorFallbackWrapper-BbmJfuZU.js";import"./Brand-JWp-aIIF.js";import"./constants-CTxUe8Mo.js";import"./Edit-CEDurCbO.js";const e={zoom:5,center:[0,0],layers:[],mapStyleOptions:void 0,markers:[],polygons:[]},h=e,v=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],fe={title:"Component Library/Map/composites/BasicMapV2",component:u,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
