import{l as _,j as p}from"./iframe-COAWb0t1.js";import{F as M}from"./DropdownButton-Vpz5ANha.js";import{A as n,B as l,S as w,a as m,M as L,i as F}from"./storyconfig-DEIJDHKx.js";import"./UserIcon-7ajEmXVT.js";import"./Text-DFy_CB-X.js";import"./Chip-CFRNYI56.js";import"./Divider-D-8UFSs5.js";import"./TreeView-DvKDilPN.js";import"./LinearProgress-D6xAADWG.js";import"./Spinner-B1314fCC.js";import"./Dialog-D0Y5W3XX.js";import"./TextField-CTYTdDqu.js";import"./Switch-C1EnJSQy.js";import"./DatePicker-Jx01V1aW.js";import"./DateTimePicker-J4wSZb31.js";import"./LinkButton-B6YMfa2-.js";import"./Box-DCFIHxCT.js";import"./Container-r-acF5nk.js";import"./Paper-Eeqwzp5S.js";import"./ErrorFallback-BY0PXNFd.js";import"./ErrorFallbackText-CR44PIbE.js";import"./ErrorFallbackWrapper-Cf9R1LA3.js";import"./Brand-Bh-wC9I-.js";import{D as O,a as t,M as E}from"./constants-DwIYQs1H.js";import"./MapToggleButtonPresentational-zYeQBpIS.js";import{B as D}from"./Box-D8Tcr7GZ.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-BdnIs0e2.js";import"./useThemeProps-CqGuhErK.js";import"./useTheme-CNaznUgl.js";import"./AdapterDayjs-Bhl9N9Cw.js";import"./generateUtilityClass-Cu0h0UK6.js";import"./styled-BwRmoPFQ.js";import"./Typography-rxz2-vrR.js";import"./generateUtilityClasses-C5WQCcWA.js";import"./Modal-DdTPb72x.js";import"./utils-DHa3ZdZl.js";import"./TransitionGroupContext-DLKhgV5R.js";import"./index-DvCbfciI.js";import"./resolveComponentProps-BLxc7nk0.js";import"./TextField-BvMOatl_.js";import"./useFormControl-DQ8tyOBm.js";import"./Paper-mwKQc_Lr.js";import"./createSvgIcon-DrpJhUIt.js";import"./createStyled-C7KAEifV.js";import"./IconButton-CCcPFMgK.js";import"./ButtonBase-Djdar6tU.js";import"./DialogContent-D5gHw-su.js";import"./Button-DdObXY2o.js";import"./Chip-DZQXXGC9.js";import"./Stack-ybP7OB7f.js";import"./styled-BUAiwXGA.js";import"./Close-CSu-E4xw.js";import"./Divider-CWXbwJhU.js";import"./Edit-IxgIwfJY.js";import"./Remove-CtS7gXV9.js";const ve={title:"Component Library/Map/composites/FeatureMap",component:M,tags:["map","markers","polygons","autodocs"],parameters:{docs:{description:{component:`
This map component automatically calculates optimal viewport bounds to ensure all specified markers and polygons are visible.

It dynamically adjusts panning and zoom levels to focus on selected features, providing an intuitive and comprehensive view of the mapped data.

> Note: Maps don't behave in the storybook quite as they would in an app. This is due to the variables being passed in not being controlled state.
`}},theme:"DocumentPink",selected:[],attributionControl:!0,defaultStyle:"",geoPolygons:[],markers:[],initialViewState:{},onClickMarker:()=>{},findByClassUri:()=>{}},argTypes:{theme:{control:"select",options:_.options,description:`The layer picker has a border which derives it's colour from the theme. 

(This will be deprecated once the uplift work is completed)`},selected:{control:"multi-select",options:[],description:"Select by populating a list of uri's. The markers and polygons will then be checked against the markers and geoPolygons"},attributionControl:{control:"radio",options:[!0,!1],description:"Show map attribution as per legal requirements. The ability to hide attribution was added because if you hide the map, it is still visible."},findByClassUri:{description:`Callback function used to obtain the icons for results. The icons will be shown on the map as a marker. 
This is designed to be used with ontology-service`},onClickMarker:{description:"Callback function to add custom behaviour. Triggered when a user selects a marker that is displayed on the map."},polygonLayers:{description:"array of props to render `<Source>{polygonLayers.map(Layer)}</Source>`'s to provide styling"}},decorators:e=>p(D,{sx:{width:"50vw",height:"50vh",margin:"auto"},children:p(E,{initialMapStyleConfig:F,children:e()})})},o={args:{theme:"DocumentPink",attributionControl:!0,selected:[],markers:[n,l],defaultStyle:"https://demotiles.maplibre.org/style.json",findByClassUri:e=>({backgroundColor:"white",color:"black",classUri:e,alt:"sample alt",iconFallbackText:"1"}),initialViewState:t,geoPolygons:O}},r={args:{theme:"DocumentPink",geoPolygons:{type:"FeatureCollection",features:[m]},attributionControl:!0,selected:[],defaultStyle:"https://demotiles.maplibre.org/style.json",findByClassUri:e=>({backgroundColor:"white",color:"black",classUri:e,alt:"sample alt",iconFallbackText:"1"}),markers:[],polygonLayers:w,initialViewState:t}},a={args:{theme:"DocumentPink",attributionControl:!0,markers:[n,l],geoPolygons:{type:"FeatureCollection",features:[m,L]},selected:[],defaultStyle:"https://demotiles.maplibre.org/style.json",findByClassUri:e=>({backgroundColor:"white",color:"black",classUri:e,alt:"sample alt",iconFallbackText:"1"}),polygonLayers:w,initialViewState:t}},i={args:{theme:"DocumentPink",attributionControl:!0,markers:[n,l],geoPolygons:{type:"FeatureCollection",features:[m,L]},selected:[n.uri],defaultStyle:"https://demotiles.maplibre.org/style.json",findByClassUri:e=>({backgroundColor:"white",color:"black",classUri:e,alt:"sample alt",iconFallbackText:"1"}),initialViewState:t}},s={args:{theme:"DocumentPink",attributionControl:!0,selected:[],defaultStyle:"https://demotiles.maplibre.org/style.json",findByClassUri:e=>({backgroundColor:"white",color:"black",classUri:e,alt:"sample alt",iconFallbackText:"1"}),markers:[],initialViewState:t,geoPolygons:O}};var c,d,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(P=(f=s.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};const We=["MapWithMarkers","MapWithPolygons","MapWithMarkersAndPolygons","MapWithSelectedMarker","MapWithoutLayers"];export{o as MapWithMarkers,a as MapWithMarkersAndPolygons,r as MapWithPolygons,i as MapWithSelectedMarker,s as MapWithoutLayers,We as __namedExportsOrder,ve as default};
