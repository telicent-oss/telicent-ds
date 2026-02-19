import{j as y}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{d as u}from"./AuthModal-DQzmx7OJ.js";import{B as g}from"./Box-CRiiUqfG.js";import"./jsx-runtime-CB_V9I5Y.js";import"./index-CTjT7uj6.js";import"./Text-D7i5Vapy.js";import"./Typography-NY1t2oJS.js";import"./identifier-ubkqThfq.js";import"./styled-DjfdLqg6.js";import"./generateUtilityClasses-axRDXlOb.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./constants-lG5csJb9.js";import"./iframe-1MnXVmy2.js";import"../sb-preview/runtime.js";import"./index-DEWJqUJ8.js";import"./types-CMP91hxZ.js";import"./useTheme-DVRb4tHF.js";import"./useTheme-CZEWbKR4.js";import"./GlobalStyles-CqOQHgIj.js";import"./GlobalStyles-DulCgQ73.js";import"./UserProfile-D6O7wNKl.js";import"./UserIcon-o6gncd3f.js";import"./SvgIcon-nu1RSFLJ.js";import"./index-BRV0Se7Z.js";import"./FlexBox-wqE_3hOo.js";import"./styled-D52li5_j.js";import"./createStyled-MF3orRa4.js";import"./useThemeProps-BQrQzAVn.js";import"./createSvgIcon-BGbWkX_4.js";import"./Modal-nppWUrX9.js";import"./utils-BbBxhV03.js";import"./TransitionGroupContext-C2di2VJK.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./IconButton-D-oHTsme.js";import"./ButtonBase-DH2zkY_f.js";import"./Menu-Cib9lkAX.js";import"./index-CejG0Q0C.js";import"./Popover-hHU0kX9Y.js";import"./Paper-DurtPqdU.js";import"./Select-CQe_2BDr.js";import"./useId-DMVUMfb1.js";import"./Popper-DKho5otB.js";import"./TelicentHorizontalSVG-Cczi-KYX.js";import"./FlexGrid-WlHVYxOe.js";import"./Container-CeTulhJU.js";import"./DataSetIcon-eLJEtM34.js";import"./AdapterDayjs-D_A3CBKl.js";import"./useThemeProps-BCPloJZh.js";import"./TextField-jmY6cT1k.js";import"./colorManipulator-DHCSb3wy.js";import"./DialogContent-DaEQE3W9.js";import"./Button-DwUhO5A1.js";import"./Chip-BVb47-Yv.js";import"./MenuItem-DDCSmGiz.js";import"./dividerClasses-Bl8Ne15h.js";import"./UIThemeProvider-CVgpJ9Or.js";import"./ThemeProvider-BnKwSnOu.js";import"./IconButton-Dha20OVG.js";import"./Chip-CaEkyDbp.js";import"./Divider-BNrRnzv6.js";import"./Divider-ALDgEm0R.js";import"./TreeView-BWiTPIDd.js";import"./UserProfileContent-D7SfyGJp.js";import"./LinearProgress-BKbPPN-u.js";import"./Dialog-LbicNw92.js";import"./Button-BBT7kpDa.js";import"./LinkButton-Cp_YKl9b.js";import"./TextField-Cl8VKv-k.js";import"./Select-DtgCaZa6.js";import"./Autocomplete-C-kTU09I.js";import"./DatePicker-DZxYbCmI.js";import"./DateTimePicker-BArbA-5v.js";import"./Card-BBAZs1GG.js";import"./CardActions-ahQ16fz_.js";import"./Popover-DfYJjWq1.js";import"./Paper-Bbtnvex6.js";import"./ErrorFallback-DmOQLNkI.js";import"./ErrorFallbackText-FisNSYtr.js";import"./ErrorFallbackWrapper-C7MPjQkG.js";import"./MapToggleButtonPresentational-D_BfGPGk.js";import"./Remove-CFsi-mnJ.js";import"./Edit-gSW16YTz.js";const e={zoom:5,center:[0,0],layers:[],mapStyleOptions:void 0,markers:[],polygons:[]},h=e,v=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],Qe={title:"Component Library/Map/composites/BasicMapV2",component:u,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,p,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var n,c,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    layers: baseLayers
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const Fe=["allArgs","Empty","Template"];export{r as Empty,t as Template,Fe as __namedExportsOrder,e as allArgs,Qe as default};
