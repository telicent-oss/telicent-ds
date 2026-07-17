import{j as y}from"./iframe-4Z2LxEjH.js";import{y as u}from"./DropdownButton-m4oAkgLO.js";import{B as g}from"./Box-CtDO-7ut.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-Dn7bcAci.js";import"./createSvgIcon-CNnlh6Ap.js";import"./generateUtilityClass-BPbgVUOY.js";import"./styled-D9Oi1aUK.js";import"./generateUtilityClasses-CQ1C1DNv.js";import"./useTheme-qiXM2BR_.js";import"./Box-CWnL0-kx.js";import"./Container-BF2V3YgM.js";import"./styled-PljUaw1G.js";import"./createStyled-CgJyWD5K.js";import"./useThemeProps-Bm6W4Oay.js";import"./Stack-BPHOMmkF.js";import"./Typography-D7AEpGZI.js";import"./Paper-BKXMHiEm.js";import"./useThemeProps-D7Mz9mye.js";import"./Text-CmblpdDq.js";import"./AdapterDayjs-DKLAX8dA.js";import"./Modal-DtYiCPOd.js";import"./utils-DxmHp4p9.js";import"./TransitionGroupContext-BmRflWZM.js";import"./index-DN9JsOxD.js";import"./resolveComponentProps-DTqENjZa.js";import"./TextField-B-7n_i8J.js";import"./useFormControl-CIKuegYi.js";import"./IconButton-OboHhmdt.js";import"./ButtonBase-DC7GiLki.js";import"./DialogContent-CLTsR7Gc.js";import"./Button-D1loNkwl.js";import"./Chip-BnoHHAuC.js";import"./DateTimePicker-Dx8k1Xf_.js";import"./Divider-BgwjSeCu.js";import"./Chip-MK6JrQ5D.js";import"./Divider-DdjI0t4o.js";import"./TreeView-CpcN6HG5.js";import"./Close-TIUP1fcW.js";import"./LinearProgress-Co82gXpN.js";import"./Spinner-D0mTe2p1.js";import"./Dialog-CkoHwcao.js";import"./MapToggleButtonPresentational-C1a0Grpw.js";import"./Remove-xKXD2RcH.js";import"./TextField-CEsLErf5.js";import"./Switch-D1PyAAj4.js";import"./DatePicker-CrHvTLpZ.js";import"./LinkButton-DnFoZC7q.js";import"./Paper-NROpS9Qg.js";import"./ErrorFallback-BI44wUWi.js";import"./ErrorFallbackText-4v6ASHsj.js";import"./ErrorFallbackWrapper-Bdvw_u7e.js";import"./Brand-rjeL-2ua.js";import"./constants-DNsUScy4.js";import"./Edit-3N5tUp50.js";const e={zoom:5,center:[0,0],layers:[],mapStyleOptions:void 0,markers:[],polygons:[]},h=e,v=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],fe={title:"Component Library/Map/composites/BasicMapV2",component:u,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
