import{j as y}from"./iframe-CAVshkuv.js";import{y as u}from"./DropdownButton-9w3rAX6T.js";import{B as g}from"./Box-C4yeY-00.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DJgOmEVN.js";import"./createSvgIcon-B3EaAiNw.js";import"./generateUtilityClass-jc-dHuJ-.js";import"./styled-CEs6WI9Z.js";import"./generateUtilityClasses-PgfeV1Wq.js";import"./useTheme-ATZows8q.js";import"./Box-DLtVExO8.js";import"./Container-COrfX9qv.js";import"./styled-DmB_YMuy.js";import"./createStyled-BEuIMvDB.js";import"./useThemeProps-C0hUlt40.js";import"./Stack-aumhO8Vb.js";import"./Typography-B1Np1v7N.js";import"./Paper-BY4MSiKk.js";import"./useThemeProps-KzD3lSay.js";import"./Text-zn7-gcNn.js";import"./AdapterDayjs-DLp8STlk.js";import"./Modal-q8qVtJkQ.js";import"./utils-CL8D0dFT.js";import"./TransitionGroupContext-mvKX0Qc4.js";import"./index-Bfg7eB2H.js";import"./resolveComponentProps-CK8UMYC2.js";import"./TextField-D-S9QRzG.js";import"./useFormControl-CbU4OzAW.js";import"./IconButton-BeeGNNdb.js";import"./ButtonBase-L_tow8ks.js";import"./DialogContent-DShAFksA.js";import"./Button-CdHIDFCs.js";import"./Chip-DGUVdb4L.js";import"./DateTimePicker-C-jQ5Uw8.js";import"./Divider-BzwQ7r6O.js";import"./Chip-CD6y_O1F.js";import"./Divider-DI0qbv1g.js";import"./TreeView-G_WzO7bU.js";import"./Close-ZjhlHLtp.js";import"./LinearProgress-AOvTTCYa.js";import"./Spinner-aO3iJras.js";import"./Dialog-BzvgW_1y.js";import"./MapToggleButtonPresentational-Dh_eY9kA.js";import"./Remove-CPj-DoGK.js";import"./TextField-De73yqc1.js";import"./Switch-B0vd6s4C.js";import"./DatePicker-Opun4efj.js";import"./LinkButton-UDbAGZRZ.js";import"./Paper-QK8zw_qk.js";import"./ErrorFallback-BRmu4a9D.js";import"./ErrorFallbackText-C8zJKlqc.js";import"./ErrorFallbackWrapper-Dzt70zLO.js";import"./Brand-BuFxs41G.js";import"./constants-Bdme3Adm.js";import"./Edit-BJwA-2_m.js";const e={zoom:5,center:[0,0],layers:[],mapStyleOptions:void 0,markers:[],polygons:[]},h=e,v=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],fe={title:"Component Library/Map/composites/BasicMapV2",component:u,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
