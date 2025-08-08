import{j as p}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{F as _}from"./Drawer-ZvcO8_0-.js";import{A as n,B as l,S as w,a as m,M as L,i as M}from"./storyconfig-CVrxT6qS.js";import{D as O,a as t,M as F}from"./constants-sjWKTMdi.js";import"./index-Dl6G-zuu.js";import"./UserProfile-g79E9POt.js";import"./TelicentHorizontalSVG-CX-osCX9.js";import"./DataSetIcon-BtGpAy3k.js";import"./UserIcon-BuuqinF_.js";import"./Text-BfZocbeP.js";import"./Chip-DH2OifDm.js";import"./Divider-Dtsf1hGn.js";import"./TreeView-DbFX33UJ.js";import"./UserProfileContent-DwoWk9c6.js";import"./FlexBox-CfPxXzlV.js";import"./LinearProgress-Bg-Reu7H.js";import"./Button-D8ZFDHf0.js";import"./DatePicker-C_0vTJAs.js";import"./DateTimePicker-ooitrBPo.js";import"./FlexGrid-DSPhqh6w.js";import"./Container-C_TGCsJE.js";import"./Card-DPzkVZ34.js";import"./CardActions-ChFzG7jH.js";import"./Popover-D97xcsWK.js";import"./Paper-6XRc2JUc.js";import{U as E}from"./UIThemeProvider-CxkzzJSB.js";import"./ErrorFallback-Bdi4LnTL.js";import"./ErrorFallbackText-ByFUlXy5.js";import"./ErrorFallbackWrapper-BOm5y31m.js";import"./MapToggleButtonPresentational-C_LHMPTW.js";import{B as D}from"./Box-BpjgVFAP.js";import"./jsx-runtime-DMAvRu52.js";import"./createSvgIcon-DsapHZbt.js";import"./defaultTheme-DzLjz-dB.js";import"./SvgIcon-CUsqqB9A.js";import"./styled-Bv4hMCY2.js";import"./generateUtilityClasses-UcMdw3-3.js";import"./DefaultPropsProvider-CJK-usBy.js";import"./types-JQgdQoTs.js";import"./ButtonBase-DQ5wMQUc.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-BbVSaS1S.js";import"./Popover-BtZEiDAe.js";import"./useTheme-BorXEO18.js";import"./useTheme-Bb3Mws8A.js";import"./utils-BgVWvv5k.js";import"./index-B0kOWIl9.js";import"./Paper-qM_AAhp8.js";import"./AdapterDayjs-DuWp5629.js";import"./index-BfyspvgH.js";import"./useThemeProps-D7jdKLbb.js";import"./useThemeProps-BLCE57Tg.js";import"./Typography-0bha627S.js";import"./colorManipulator-BRx-aaGP.js";import"./IconButton-BOLdoQUj.js";import"./useId-CkA8naEk.js";import"./GlobalStyles-BSLRMkoa.js";import"./GlobalStyles-B-ilzbNG.js";import"./Menu-x1DlT4eR.js";import"./createStyled-HgSNW-x4.js";import"./Button-CfsaO-rc.js";import"./Chip-D8IxPV3x.js";import"./styled-BrfVIC6E.js";import"./iframe-B7WjdRiN.js";import"../sb-preview/runtime.js";import"./Divider-Cjysf9bk.js";import"./SecondaryButton-CPTMGzEe.js";import"./ThemeProvider-GiwL96Kb.js";import"./List-B22gvqhs.js";const Qe={title:"Component Library/Map/composites/FeatureMap",component:_,tags:["map","markers","polygons","autodocs"],parameters:{docs:{description:{component:`
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
}`,...(P=(f=s.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};const Xe=["MapWithMarkers","MapWithPolygons","MapWithMarkersAndPolygons","MapWithSelectedMarker","MapWithoutLayers"];export{o as MapWithMarkers,a as MapWithMarkersAndPolygons,r as MapWithPolygons,i as MapWithSelectedMarker,s as MapWithoutLayers,Xe as __namedExportsOrder,Qe as default};
