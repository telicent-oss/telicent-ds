import{j as p}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{F as _}from"./AuthModal-DQzmx7OJ.js";import{A as n,B as l,S as w,a as m,M as L,i as M}from"./storyconfig-CVrxT6qS.js";import{D as O,a as e,M as F}from"./constants-lG5csJb9.js";import"./index-CTjT7uj6.js";import"./UserProfile-D6O7wNKl.js";import"./TelicentHorizontalSVG-Cczi-KYX.js";import"./DataSetIcon-eLJEtM34.js";import"./UserIcon-o6gncd3f.js";import"./Text-D7i5Vapy.js";import"./Chip-CaEkyDbp.js";import"./Divider-BNrRnzv6.js";import"./TreeView-BWiTPIDd.js";import"./UserProfileContent-D7SfyGJp.js";import"./LinearProgress-BKbPPN-u.js";import"./Dialog-LbicNw92.js";import"./TextField-Cl8VKv-k.js";import"./Select-DtgCaZa6.js";import"./Autocomplete-C-kTU09I.js";import"./DatePicker-DZxYbCmI.js";import"./DateTimePicker-BArbA-5v.js";import"./Button-BBT7kpDa.js";import"./IconButton-Dha20OVG.js";import"./LinkButton-Cp_YKl9b.js";import"./FlexGrid-WlHVYxOe.js";import"./Container-CeTulhJU.js";import"./FlexBox-wqE_3hOo.js";import"./Card-BBAZs1GG.js";import"./CardActions-ahQ16fz_.js";import"./Popover-DfYJjWq1.js";import"./Paper-Bbtnvex6.js";import{U as E}from"./UIThemeProvider-CVgpJ9Or.js";import"./ErrorFallback-DmOQLNkI.js";import"./ErrorFallbackText-FisNSYtr.js";import"./ErrorFallbackWrapper-C7MPjQkG.js";import"./MapToggleButtonPresentational-D_BfGPGk.js";import{B as D}from"./Box-CRiiUqfG.js";import"./jsx-runtime-CB_V9I5Y.js";import"./types-CMP91hxZ.js";import"./ButtonBase-DH2zkY_f.js";import"./identifier-ubkqThfq.js";import"./styled-DjfdLqg6.js";import"./generateUtilityClasses-axRDXlOb.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./TransitionGroupContext-C2di2VJK.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./index-CejG0Q0C.js";import"./Popover-hHU0kX9Y.js";import"./useTheme-DVRb4tHF.js";import"./useTheme-CZEWbKR4.js";import"./utils-BbBxhV03.js";import"./index-DEWJqUJ8.js";import"./Modal-nppWUrX9.js";import"./Paper-DurtPqdU.js";import"./Select-CQe_2BDr.js";import"./Menu-Cib9lkAX.js";import"./useId-DMVUMfb1.js";import"./createSvgIcon-BGbWkX_4.js";import"./SvgIcon-nu1RSFLJ.js";import"./GlobalStyles-CqOQHgIj.js";import"./GlobalStyles-DulCgQ73.js";import"./Popper-DKho5otB.js";import"./AdapterDayjs-D_A3CBKl.js";import"./index-BRV0Se7Z.js";import"./useThemeProps-BCPloJZh.js";import"./useThemeProps-BQrQzAVn.js";import"./Typography-NY1t2oJS.js";import"./TextField-jmY6cT1k.js";import"./createStyled-MF3orRa4.js";import"./IconButton-D-oHTsme.js";import"./colorManipulator-DHCSb3wy.js";import"./DialogContent-DaEQE3W9.js";import"./Button-DwUhO5A1.js";import"./Chip-BVb47-Yv.js";import"./MenuItem-DDCSmGiz.js";import"./dividerClasses-Bl8Ne15h.js";import"./styled-D52li5_j.js";import"./iframe-1MnXVmy2.js";import"../sb-preview/runtime.js";import"./Divider-ALDgEm0R.js";import"./Edit-gSW16YTz.js";import"./ThemeProvider-BnKwSnOu.js";import"./Remove-CFsi-mnJ.js";const me={title:"Component Library/Map/composites/FeatureMap",component:_,tags:["map","markers","polygons","autodocs"],parameters:{docs:{description:{component:`
This map component automatically calculates optimal viewport bounds to ensure all specified markers and polygons are visible.

It dynamically adjusts panning and zoom levels to focus on selected features, providing an intuitive and comprehensive view of the mapped data.

> Note: Maps don't behave in the storybook quite as they would in an app. This is due to the variables being passed in not being controlled state.
`}},theme:"DocumentPink",selected:[],attributionControl:!0,defaultStyle:"",geoPolygons:[],markers:[],initialViewState:{},onClickMarker:()=>{},findByClassUri:()=>{}},argTypes:{theme:{control:"select",options:E.options,description:`The layer picker has a border which derives it's colour from the theme. 

(This will be deprecated once the uplift work is completed)`},selected:{control:"multi-select",options:[],description:"Select by populating a list of uri's. The markers and polygons will then be checked against the markers and geoPolygons"},attributionControl:{control:"radio",options:[!0,!1],description:"Show map attribution as per legal requirements. The ability to hide attribution was added because if you hide the map, it is still visible."},findByClassUri:{description:`Callback function used to obtain the icons for results. The icons will be shown on the map as a marker. 
This is designed to be used with ontology-service`},onClickMarker:{description:"Callback function to add custom behaviour. Triggered when a user selects a marker that is displayed on the map."},polygonLayers:{description:"array of props to render `<Source>{polygonLayers.map(Layer)}</Source>`'s to provide styling"}},decorators:t=>p(D,{sx:{width:"50vw",height:"50vh",margin:"auto"},children:p(F,{initialMapStyleConfig:M,children:t()})})},o={args:{theme:"DocumentPink",attributionControl:!0,selected:[],markers:[n,l],defaultStyle:"https://demotiles.maplibre.org/style.json",findByClassUri:t=>({backgroundColor:"white",color:"black",classUri:t,alt:"sample alt",iconFallbackText:"1"}),initialViewState:e,geoPolygons:O}},r={args:{theme:"DocumentPink",geoPolygons:{type:"FeatureCollection",features:[m]},attributionControl:!0,selected:[],defaultStyle:"https://demotiles.maplibre.org/style.json",findByClassUri:t=>({backgroundColor:"white",color:"black",classUri:t,alt:"sample alt",iconFallbackText:"1"}),markers:[],polygonLayers:w,initialViewState:e}},a={args:{theme:"DocumentPink",attributionControl:!0,markers:[n,l],geoPolygons:{type:"FeatureCollection",features:[m,L]},selected:[],defaultStyle:"https://demotiles.maplibre.org/style.json",findByClassUri:t=>({backgroundColor:"white",color:"black",classUri:t,alt:"sample alt",iconFallbackText:"1"}),polygonLayers:w,initialViewState:e}},i={args:{theme:"DocumentPink",attributionControl:!0,markers:[n,l],geoPolygons:{type:"FeatureCollection",features:[m,L]},selected:[n.uri],defaultStyle:"https://demotiles.maplibre.org/style.json",findByClassUri:t=>({backgroundColor:"white",color:"black",classUri:t,alt:"sample alt",iconFallbackText:"1"}),initialViewState:e}},s={args:{theme:"DocumentPink",attributionControl:!0,selected:[],defaultStyle:"https://demotiles.maplibre.org/style.json",findByClassUri:t=>({backgroundColor:"white",color:"black",classUri:t,alt:"sample alt",iconFallbackText:"1"}),markers:[],initialViewState:e,geoPolygons:O}};var c,d,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    theme: "DocumentPink",
    attributionControl: true,
    selected: [],
    markers: [ARGA_ATTACK, BOULAY_ATTACK],
    defaultStyle: "https://demotiles.maplibre.org/style.json",
    findByClassUri: (maybeClassUri: string) => ({
      backgroundColor: "white",
      color: "black",
      classUri: maybeClassUri,
      alt: "sample alt",
      iconFallbackText: "1"
    }),
    initialViewState: DEFAULT_VIEW,
    geoPolygons: DEFAULT_GEO_POLYGONS
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var y,g,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    theme: "DocumentPink",
    geoPolygons: {
      type: "FeatureCollection",
      features: [AUSTRIA]
    },
    attributionControl: true,
    selected: [],
    defaultStyle: "https://demotiles.maplibre.org/style.json",
    findByClassUri: (maybeClassUri: string) => ({
      backgroundColor: "white",
      color: "black",
      classUri: maybeClassUri,
      alt: "sample alt",
      iconFallbackText: "1"
    }),
    markers: [],
    polygonLayers: SUPER_OBVIOUS_POLYGON_LAYERS,
    initialViewState: DEFAULT_VIEW
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,k,C;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    theme: "DocumentPink",
    attributionControl: true,
    markers: [ARGA_ATTACK, BOULAY_ATTACK],
    geoPolygons: {
      type: "FeatureCollection",
      features: [AUSTRIA, MOLDOVA]
    },
    selected: [],
    defaultStyle: "https://demotiles.maplibre.org/style.json",
    findByClassUri: (maybeClassUri: string) => ({
      backgroundColor: "white",
      color: "black",
      classUri: maybeClassUri,
      alt: "sample alt",
      iconFallbackText: "1"
    }),
    polygonLayers: SUPER_OBVIOUS_POLYGON_LAYERS,
    initialViewState: DEFAULT_VIEW
  }
}`,...(C=(k=a.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var A,U,S;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    theme: "DocumentPink",
    attributionControl: true,
    markers: [ARGA_ATTACK, BOULAY_ATTACK],
    geoPolygons: {
      type: "FeatureCollection",
      features: [AUSTRIA, MOLDOVA]
    },
    selected: [ARGA_ATTACK.uri],
    defaultStyle: "https://demotiles.maplibre.org/style.json",
    findByClassUri: (maybeClassUri: string) => ({
      backgroundColor: "white",
      color: "black",
      classUri: maybeClassUri,
      alt: "sample alt",
      iconFallbackText: "1"
    }),
    initialViewState: DEFAULT_VIEW
  }
}`,...(S=(U=i.parameters)==null?void 0:U.docs)==null?void 0:S.source}}};var T,f,P;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    theme: "DocumentPink",
    attributionControl: true,
    selected: [],
    defaultStyle: "https://demotiles.maplibre.org/style.json",
    findByClassUri: (maybeClassUri: string) => ({
      backgroundColor: "white",
      color: "black",
      classUri: maybeClassUri,
      alt: "sample alt",
      iconFallbackText: "1"
    }),
    markers: [],
    initialViewState: DEFAULT_VIEW,
    geoPolygons: DEFAULT_GEO_POLYGONS
  }
}`,...(P=(f=s.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};const pe=["MapWithMarkers","MapWithPolygons","MapWithMarkersAndPolygons","MapWithSelectedMarker","MapWithoutLayers"];export{o as MapWithMarkers,a as MapWithMarkersAndPolygons,r as MapWithPolygons,i as MapWithSelectedMarker,s as MapWithoutLayers,pe as __namedExportsOrder,me as default};
