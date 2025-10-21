import{j as p}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{F as _}from"./AuthModal-CcTf7jpD.js";import{A as n,B as l,S as w,a as m,M as L,i as M}from"./storyconfig-CVrxT6qS.js";import{D as O,a as t,M as F}from"./constants-D6JbaO56.js";import"./index-Dl6G-zuu.js";import"./UserProfile-B0RVUakH.js";import"./TelicentHorizontalSVG-CQqo1iNz.js";import"./DataSetIcon-DHhYydZc.js";import"./UserIcon-B9flVcwo.js";import"./Text-8Kdc4mds.js";import"./Chip-DwEDWKOc.js";import"./Divider-D5viUhla.js";import"./TreeView-Cv9rbGZ0.js";import"./UserProfileContent-Be3-9Jzl.js";import"./FlexBox-CPV3qV_w.js";import"./LinearProgress-DXAYFx38.js";import"./TextField-PJfMD1VO.js";import"./DatePicker-CBr8yT-u.js";import"./DateTimePicker-BfS6ExPs.js";import"./Button-BUdKq2Nf.js";import"./IconButton-B3KtzcW5.js";import"./LinkButton-D3-RYoWb.js";import"./FlexGrid-BXR2iRV0.js";import"./Container-Bt7wgl8Z.js";import"./Card-DEzO0riq.js";import"./CardActions-B8gFKj_f.js";import"./Popover-DMDv2fuJ.js";import"./Paper-DkOGDDl7.js";import{U as E}from"./UIThemeProvider-Yl8oZnWo.js";import"./ErrorFallback-BQDrKlpt.js";import"./ErrorFallbackText-D0ectygn.js";import"./ErrorFallbackWrapper-Drru2TWq.js";import"./MapToggleButtonPresentational-DDiBoo1Q.js";import{B as D}from"./Box-BF-qgu-5.js";import"./jsx-runtime-DMAvRu52.js";import"./types-JQgdQoTs.js";import"./ButtonBase-BPGrtmaq.js";import"./identifier-y0bUoTO6.js";import"./styled-0JAKTnfS.js";import"./generateUtilityClasses-Nvsm4CNa.js";import"./DefaultPropsProvider-5cPhPzqh.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-CGpTQFWu.js";import"./Popover-lQsAd3LZ.js";import"./useTheme-BzMTtAHJ.js";import"./useTheme-DD-YLZ4_.js";import"./utils-CMxZCPCo.js";import"./index-B0kOWIl9.js";import"./Paper-DSYDI967.js";import"./TextField-BXJNoCm8.js";import"./useId-CkA8naEk.js";import"./GlobalStyles-vabYxzRP.js";import"./GlobalStyles-CHovE7rY.js";import"./Menu-DOiAulci.js";import"./createSvgIcon-CHKs_KBR.js";import"./SvgIcon-CCVYAiJY.js";import"./AdapterDayjs--Bc0--O2.js";import"./index-BfyspvgH.js";import"./useThemeProps-Dn9YwK3s.js";import"./useThemeProps-dlg6X6gD.js";import"./Typography-BrwPcXc_.js";import"./createStyled-CQbojMn1.js";import"./IconButton-CJWQDxju.js";import"./colorManipulator-_kX1Zyzf.js";import"./Button-C78fFQkL.js";import"./Chip-Dals-zk3.js";import"./styled-BJZjZNjA.js";import"./Edit-ClXqq_Xi.js";import"./iframe-DfdgjJFF.js";import"../sb-preview/runtime.js";import"./Divider-ByP1puSd.js";import"./ThemeProvider-bcdU8uNZ.js";import"./Remove-ABIIxDNk.js";const et={title:"Component Library/Map/composites/FeatureMap",component:_,tags:["map","markers","polygons","autodocs"],parameters:{docs:{description:{component:`
This map component automatically calculates optimal viewport bounds to ensure all specified markers and polygons are visible.

It dynamically adjusts panning and zoom levels to focus on selected features, providing an intuitive and comprehensive view of the mapped data.

> Note: Maps don't behave in the storybook quite as they would in an app. This is due to the variables being passed in not being controlled state.
`}},theme:"DocumentPink",selected:[],attributionControl:!0,defaultStyle:"",geoPolygons:[],markers:[],initialViewState:{},onClickMarker:()=>{},findByClassUri:()=>{}},argTypes:{theme:{control:"select",options:E.options,description:`The layer picker has a border which derives it's colour from the theme. 

(This will be deprecated once the uplift work is completed)`},selected:{control:"multi-select",options:[],description:"Select by populating a list of uri's. The markers and polygons will then be checked against the markers and geoPolygons"},attributionControl:{control:"radio",options:[!0,!1],description:"Show map attribution as per legal requirements. The ability to hide attribution was added because if you hide the map, it is still visible."},findByClassUri:{description:`Callback function used to obtain the icons for results. The icons will be shown on the map as a marker. 
This is designed to be used with ontology-service`},onClickMarker:{description:"Callback function to add custom behaviour. Triggered when a user selects a marker that is displayed on the map."},polygonLayers:{description:"array of props to render `<Source>{polygonLayers.map(Layer)}</Source>`'s to provide styling"}},decorators:e=>p(D,{sx:{width:"50vw",height:"50vh",margin:"auto"},children:p(F,{initialMapStyleConfig:M,children:e()})})},o={args:{theme:"DocumentPink",attributionControl:!0,selected:[],markers:[n,l],defaultStyle:"https://demotiles.maplibre.org/style.json",findByClassUri:e=>({backgroundColor:"white",color:"black",classUri:e,alt:"sample alt",iconFallbackText:"1"}),initialViewState:t,geoPolygons:O}},r={args:{theme:"DocumentPink",geoPolygons:{type:"FeatureCollection",features:[m]},attributionControl:!0,selected:[],defaultStyle:"https://demotiles.maplibre.org/style.json",findByClassUri:e=>({backgroundColor:"white",color:"black",classUri:e,alt:"sample alt",iconFallbackText:"1"}),markers:[],polygonLayers:w,initialViewState:t}},a={args:{theme:"DocumentPink",attributionControl:!0,markers:[n,l],geoPolygons:{type:"FeatureCollection",features:[m,L]},selected:[],defaultStyle:"https://demotiles.maplibre.org/style.json",findByClassUri:e=>({backgroundColor:"white",color:"black",classUri:e,alt:"sample alt",iconFallbackText:"1"}),polygonLayers:w,initialViewState:t}},i={args:{theme:"DocumentPink",attributionControl:!0,markers:[n,l],geoPolygons:{type:"FeatureCollection",features:[m,L]},selected:[n.uri],defaultStyle:"https://demotiles.maplibre.org/style.json",findByClassUri:e=>({backgroundColor:"white",color:"black",classUri:e,alt:"sample alt",iconFallbackText:"1"}),initialViewState:t}},s={args:{theme:"DocumentPink",attributionControl:!0,selected:[],defaultStyle:"https://demotiles.maplibre.org/style.json",findByClassUri:e=>({backgroundColor:"white",color:"black",classUri:e,alt:"sample alt",iconFallbackText:"1"}),markers:[],initialViewState:t,geoPolygons:O}};var c,d,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(P=(f=s.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};const tt=["MapWithMarkers","MapWithPolygons","MapWithMarkersAndPolygons","MapWithSelectedMarker","MapWithoutLayers"];export{o as MapWithMarkers,a as MapWithMarkersAndPolygons,r as MapWithPolygons,i as MapWithSelectedMarker,s as MapWithoutLayers,tt as __namedExportsOrder,et as default};
