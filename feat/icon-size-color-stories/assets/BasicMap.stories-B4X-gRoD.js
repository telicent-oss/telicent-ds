import{j as y}from"./iframe-DjLxm7SD.js";import{y as u}from"./DropdownButton-OdITcuya.js";import{B as g}from"./Box-PIDL4Fit.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-DFS2VSDc.js";import"./createSvgIcon-MIeX2BRI.js";import"./generateUtilityClass-BLqluGhu.js";import"./styled-C0jSE3AP.js";import"./generateUtilityClasses-BO81MJJG.js";import"./useTheme-DvVKUnCu.js";import"./Box--iJ_3JNa.js";import"./Container-DRKYHsiA.js";import"./styled-atsIZHYt.js";import"./createStyled-Cc_yoAqX.js";import"./useThemeProps-Fnp1xWzD.js";import"./Stack-CCnHELyK.js";import"./Typography-CofTJ_Fs.js";import"./Paper-Bw5HsGYD.js";import"./useThemeProps-Ewpml6lw.js";import"./Text-CVnCU36g.js";import"./AdapterDayjs-B1X-CvWP.js";import"./Modal-B7a9aff8.js";import"./utils-wz01l5qZ.js";import"./TransitionGroupContext-BU8BL2dP.js";import"./index-DrRIbANR.js";import"./resolveComponentProps-DFK19icQ.js";import"./TextField-OPZ9edjq.js";import"./useFormControl-UyDYT27V.js";import"./IconButton-DVwg49gr.js";import"./ButtonBase-CgGGn6Da.js";import"./DialogContent-CBR7V6gG.js";import"./Button-CS4wg-vH.js";import"./Chip-BpvzB-8r.js";import"./DateTimePicker-D4Hp4gX_.js";import"./Divider-C6mIQ5zR.js";import"./Chip-B8CDxprS.js";import"./Divider-DVlBE3P8.js";import"./TreeView-Co0t44VC.js";import"./Close-C1rysX-W.js";import"./LinearProgress-DeQbd7E0.js";import"./Spinner-BkQfXhtb.js";import"./Dialog-YQhBvj2B.js";import"./MapToggleButtonPresentational-3lb-UE9s.js";import"./Remove-CTK2Ub1o.js";import"./TextField-6mReXCWm.js";import"./Switch-CDyuDDTr.js";import"./DatePicker-aPQ8noSa.js";import"./LinkButton-D9oXM2qx.js";import"./Paper-ChmMIXfx.js";import"./ErrorFallback-ClFzMA-d.js";import"./ErrorFallbackText-vqUAjIHx.js";import"./ErrorFallbackWrapper-Dc3fOI5x.js";import"./Brand-Dvnzdq7_.js";import"./constants-629LYWu7.js";import"./Edit-DojDoZiY.js";const e={zoom:5,center:[0,0],layers:[],mapStyleOptions:void 0,markers:[],polygons:[]},h=e,v=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],fe={title:"Component Library/Map/composites/BasicMapV2",component:u,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
