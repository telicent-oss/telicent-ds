import{j as y}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{d as u}from"./Drawer-C3Xfn--0.js";import{B as g}from"./Box-D_PqCh9-.js";import"./jsx-runtime-DMAvRu52.js";import"./index-Dl6G-zuu.js";import"./constants-DEsp_PPb.js";import"./iframe-BkBByMnl.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-KUAcGPiB.js";import"./defaultTheme-BO-GVTvG.js";import"./useTheme-Pepcoth9.js";import"./GlobalStyles-Dgqu9ZBa.js";import"./GlobalStyles-DUEYx911.js";import"./UserProfile-BxAQRKdr.js";import"./Text-BFNiasyU.js";import"./Typography-Cuh1ru_h.js";import"./styled-CxLuQ4yi.js";import"./generateUtilityClasses-BrkKsHLY.js";import"./DefaultPropsProvider-CqwcgZRv.js";import"./UserIcon-BXQcnugD.js";import"./SvgIcon-CLvgKtsF.js";import"./index-BfyspvgH.js";import"./FlexBox-CtZjnzR4.js";import"./styled-DQdJekOl.js";import"./createStyled-a9EbIl6L.js";import"./useThemeProps-cJESbEea.js";import"./createSvgIcon-DtNep-FY.js";import"./Popover-BWwK9c_C.js";import"./utils-C8sSVwFJ.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-CYPvuqVC.js";import"./IconButton-aZDif4_A.js";import"./ButtonBase-COX4AZc7.js";import"./Menu-6SEWvgOm.js";import"./index-CfJV9iyf.js";import"./Select-B3yJvOVt.js";import"./useId-CkA8naEk.js";import"./AdapterDayjs-Dxz3ssCX.js";import"./useThemeProps-7HV0XwLr.js";import"./colorManipulator-BzIEvLd4.js";import"./TextField-BXF1k-T7.js";import"./Button-BVpYsrGj.js";import"./Chip-CGb5QCI3.js";import"./TelicentHorizontalSVG-DlSq0ZBw.js";import"./FlexGrid-CT_1tX54.js";import"./Container-0fCyAqte.js";import"./DataSetIcon-XV4rPdps.js";import"./MenuItem-B-D4s_cu.js";import"./dividerClasses-Bf8NGDkJ.js";import"./UIThemeProvider-Bf8bDzz-.js";import"./ThemeProvider-CXSeX4Uf.js";import"./IconButton-s5-t7JwX.js";import"./Chip-CZtKK3pl.js";import"./Divider-BInkGxYa.js";import"./Divider-nQy9ALGk.js";import"./TreeView-CLm9yUm1.js";import"./UserProfileContent-Dj2MBbg7.js";import"./LinearProgress-CwQNtVoX.js";import"./Button-KcRgJ0xu.js";import"./LinkButton-CCP5S-HK.js";import"./TextField-um4XWDOw.js";import"./Select-BKxTornM.js";import"./DatePicker-BaeNpiHF.js";import"./DateTimePicker-Bc91_Vqm.js";import"./Card-FwEEuDZt.js";import"./CardActions-hlVg_9Nm.js";import"./Popover-C7MCebY1.js";import"./Paper-DqTy2_Xb.js";import"./ErrorFallback-R5oVL8pn.js";import"./ErrorFallbackText-BLmhXvDQ.js";import"./ErrorFallbackWrapper-Cv-_dl0b.js";import"./MapToggleButtonPresentational-bPqb6oXs.js";import"./Remove-D5fK3_9H.js";import"./Edit-DuWAK1JC.js";const e={zoom:5,center:[0,0],layers:[],mapStyleOptions:void 0,markers:[],polygons:[]},h=e,v=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],De={title:"Component Library/Map/composites/BasicMapV2",component:u,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const Ge=["allArgs","Empty","Template"];export{r as Empty,t as Template,Ge as __namedExportsOrder,e as allArgs,De as default};
