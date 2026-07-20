import{j as y}from"./iframe-DE4o_xuf.js";import{y as u}from"./DropdownButton-TZ8NqmLi.js";import{B as g}from"./Box-Bd_zZ9oM.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-BBsynfLU.js";import"./createSvgIcon-DtXO-Uv_.js";import"./generateUtilityClass-DHTzyDY3.js";import"./styled-CGCPQysn.js";import"./generateUtilityClasses-DcHmrLgo.js";import"./useTheme-BzESzBxP.js";import"./Box-CXnvlXpg.js";import"./Container-CDYT1mRl.js";import"./styled-D-cxiqNK.js";import"./createStyled-BO30qbE7.js";import"./useThemeProps-o8Jugz6q.js";import"./Stack-Be4qbLTD.js";import"./Typography-Qj6Vzb5q.js";import"./Paper-CMgwwm5d.js";import"./useThemeProps-Ce-tiBQL.js";import"./Text-MlQGavPh.js";import"./AdapterDayjs-Bzej26a6.js";import"./Modal-UPQCKQyn.js";import"./utils-BL9EoQhp.js";import"./TransitionGroupContext-BzaUJiqI.js";import"./index-gBXGiVxM.js";import"./resolveComponentProps-DmD3T0IR.js";import"./TextField-CmaU-KBj.js";import"./useFormControl-CdjRoiJh.js";import"./IconButton-C6qkeN3E.js";import"./ButtonBase-CvPzqTPI.js";import"./DialogContent-BYVOVBvJ.js";import"./Button-CcspgIL3.js";import"./Chip-R4S1Xx1_.js";import"./DateTimePicker-BlH7Vx01.js";import"./Divider-CmASGeLX.js";import"./Chip-CMEv-3Ns.js";import"./Divider-DucMFgjg.js";import"./TreeView-971-ZmyF.js";import"./Close-Y3be_ga9.js";import"./LinearProgress-CPlFnB1B.js";import"./Spinner-D3FQHiVx.js";import"./Dialog-DlYa8EPP.js";import"./MapToggleButtonPresentational-O_uOzVPo.js";import"./Remove-kIiRQGnZ.js";import"./TextField-uvS4wcSl.js";import"./Switch-C0X6GqCf.js";import"./DatePicker-dmDL6v2V.js";import"./LinkButton-CHAlghlC.js";import"./Paper-DTmbpqUX.js";import"./ErrorFallback-DTTBcvO-.js";import"./ErrorFallbackText-DzH3d24h.js";import"./ErrorFallbackWrapper-B_0KWZTa.js";import"./Brand-Bsip24mJ.js";import"./constants-BOf8-UPq.js";import"./Edit-RumvcRpQ.js";const e={zoom:5,center:[0,0],layers:[],mapStyleOptions:void 0,markers:[],polygons:[]},h=e,v=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],fe={title:"Component Library/Map/composites/BasicMapV2",component:u,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
