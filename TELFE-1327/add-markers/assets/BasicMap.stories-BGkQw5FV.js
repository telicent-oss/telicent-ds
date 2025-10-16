import{j as y}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{d as u}from"./Drawer-BZz4X7Qz.js";import{B as g}from"./Box-Dhn_9KCB.js";import"./jsx-runtime-DMAvRu52.js";import"./index-Dl6G-zuu.js";import"./constants-DClgvJaG.js";import"./iframe-BihtMBQA.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-BorXEO18.js";import"./defaultTheme-DzLjz-dB.js";import"./useTheme-Bb3Mws8A.js";import"./GlobalStyles-BSLRMkoa.js";import"./GlobalStyles-B-ilzbNG.js";import"./UserProfile-B-204ua-.js";import"./Text-BVIdl1Jw.js";import"./Typography-Dhe6o_9I.js";import"./styled-gOU_XONt.js";import"./generateUtilityClasses-Btm8e7dB.js";import"./DefaultPropsProvider-CJK-usBy.js";import"./UserIcon-DpDI8rF2.js";import"./SvgIcon-ByXbI411.js";import"./index-BfyspvgH.js";import"./FlexBox-DVTFmfFO.js";import"./styled-BrfVIC6E.js";import"./createStyled-HgSNW-x4.js";import"./useThemeProps-BLCE57Tg.js";import"./createSvgIcon-MUYTbX0p.js";import"./Popover-ChqH2Att.js";import"./utils-BgVWvv5k.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./Paper-BG42kFkz.js";import"./IconButton-CV1Rw-GO.js";import"./ButtonBase-DExEX2yL.js";import"./Menu-z0RjVFYM.js";import"./index-BbVSaS1S.js";import"./TextField-_uwvimc2.js";import"./useId-CkA8naEk.js";import"./AdapterDayjs-LX5PD6Iu.js";import"./useThemeProps-D7jdKLbb.js";import"./colorManipulator-BRx-aaGP.js";import"./Button-B3igqjqf.js";import"./Chip-CpI9GRDB.js";import"./TelicentHorizontalSVG-B3Sdezn-.js";import"./FlexGrid-BoEfBcU9.js";import"./Container-FF4Fdp1b.js";import"./DataSetIcon-BPiH7weE.js";import"./DateTimePicker-DBMjeEsM.js";import"./Divider-rhjpeBHv.js";import"./UIThemeProvider-BS_sxDlI.js";import"./ThemeProvider-GiwL96Kb.js";import"./IconButton-6csnvzSG.js";import"./Chip-tBdBanDh.js";import"./Divider-CByba2Al.js";import"./TreeView-DJkxzt72.js";import"./UserProfileContent-CQNj73V_.js";import"./LinearProgress-BvlhFhje.js";import"./Button-2o7EfnUw.js";import"./LinkButton-udFJw26p.js";import"./TextField-Bjo93FIX.js";import"./DatePicker-D-OuTvCY.js";import"./Card-B74XhqI-.js";import"./CardActions-BsipVerF.js";import"./Popover-CqIy5M7D.js";import"./Paper-BsJ-nzzS.js";import"./ErrorFallback-Db8jP4lY.js";import"./ErrorFallbackText-B2VVr9Qi.js";import"./ErrorFallbackWrapper-CwjhO7ym.js";import"./MapToggleButtonPresentational-DCqTgYa9.js";import"./Remove-M8FIgJpc.js";import"./Edit-DTNJPwPG.js";const e={zoom:5,center:[0,0],layers:[],mapStyleOptions:void 0,markers:[],polygons:[]},h=e,v=[{id:"OpenStreetMap",kind:"base-raster",provider:"xyz",label:"OpenStreetMap",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png",previewImage:"/images/street.png",visible:!1}],Ke={title:"Component Library/Map/composites/BasicMapV2",component:u,tags:["map","basic","autodocs"],parameters:{docs:{description:{component:`
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
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const Ue=["allArgs","Empty","Template"];export{r as Empty,t as Template,Ue as __namedExportsOrder,e as allArgs,Ke as default};
