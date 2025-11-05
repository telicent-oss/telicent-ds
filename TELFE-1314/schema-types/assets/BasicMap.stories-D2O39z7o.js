import{j as y}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{d as u}from"./AuthModal-BweaQfgy.js";import{B as g}from"./Box-BszdSfjy.js";import"./jsx-runtime-DMAvRu52.js";import"./index-Dl6G-zuu.js";import"./Text-CBeXAxhM.js";import"./Typography-DqLej86Z.js";import"./identifier-C6mAUaLB.js";import"./styled-BErHg-7C.js";import"./generateUtilityClasses-Cuk6vP38.js";import"./DefaultPropsProvider-BOzBDHyA.js";import"./constants-DPuUStYg.js";import"./iframe-CcBApFa3.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-GyLrR4NU.js";import"./useTheme-Cg37eTMn.js";import"./GlobalStyles-B_QX4JcH.js";import"./GlobalStyles-D5xpOMhP.js";import"./UserProfile-U6PPuJfm.js";import"./UserIcon-BHVQbi_2.js";import"./SvgIcon-5gifbZ3Q.js";import"./index-BfyspvgH.js";import"./FlexBox-DBRDUZLj.js";import"./styled-BSjilmX5.js";import"./createStyled-BrBbf8qF.js";import"./useThemeProps-43QuDAxK.js";import"./createSvgIcon-Bol9-9si.js";import"./Popover-BpYca5tE.js";import"./utils-C-b4tsXR.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-ZbIfs51-.js";import"./IconButton-IqfnTl6g.js";import"./ButtonBase-C9t-hGNZ.js";import"./Menu-DHuUg7uu.js";import"./index-sTB3RqdK.js";import"./Select-DA9H3h4n.js";import"./useId-CkA8naEk.js";import"./AdapterDayjs-BOB3in7k.js";import"./useThemeProps-DWcfj1ju.js";import"./TextField-BTRe_bET.js";import"./colorManipulator-DXzzQmry.js";import"./Button-hINpI61k.js";import"./Chip-CDjOKJwQ.js";import"./TelicentHorizontalSVG-CP1sg2bX.js";import"./FlexGrid-BkekN5zB.js";import"./Container-Cq7J-8WQ.js";import"./DataSetIcon-Cm0wHARM.js";import"./MenuItem-CjZ2Ihro.js";import"./dividerClasses-D3mH6QPz.js";import"./UIThemeProvider-BJ1tYuEB.js";import"./ThemeProvider-zfew0pSd.js";import"./IconButton-bilmwfAO.js";import"./Chip-CNh8tqAF.js";import"./Divider-znOFDjy9.js";import"./Divider-hbCrYSvl.js";import"./TreeView-ChH5rGnF.js";import"./UserProfileContent-CK9uRPZy.js";import"./LinearProgress-Cj7B0DX4.js";import"./Button-BBG5pOsy.js";import"./LinkButton-BgGLg8K5.js";import"./TextField--TK6VeQv.js";import"./Select-DoDVo-ql.js";import"./DatePicker-BHNHf78D.js";import"./DateTimePicker-B-4oNDUL.js";import"./Card-CyosORb7.js";import"./CardActions-q60J-lzQ.js";import"./Popover-Bg0J4ozL.js";import"./Paper-BKrtg6OD.js";import"./ErrorFallback-DIksr2Zc.js";import"./ErrorFallbackText-Cj3I3SFq.js";import"./ErrorFallbackWrapper-D0yAoJ_c.js";import"./MapToggleButtonPresentational-CshO1-3B.js";import"./Remove-Dh6sdo_k.js";import"./Edit-uu0JEZaV.js";const e={zoom:5,center:[0,0],layers:[],mapStyleOptions:void 0,markers:[],polygons:[]},h=e,v=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],De={title:"Component Library/Map/composites/BasicMapV2",component:u,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
