import{m as _,j as p}from"./iframe-Ce2OCE46.js";import{F as M}from"./DropdownButton-BZeAU0hR.js";import{A as n,B as l,S as w,a as m,M as L,i as F}from"./storyconfig-DEIJDHKx.js";import"./UserIcon-BeBbW4ae.js";import"./FlexBox-QXmAoGfV.js";import"./Text-iWgBtTEF.js";import"./Chip-D2Ptw4F5.js";import"./Divider-BydDTYUN.js";import"./TreeView-B4RWPXCG.js";import"./AppInfoRow-iVaYeCli.js";import"./LinearProgress-C2y7bs6L.js";import"./Spinner-Baj4KosW.js";import"./Dialog-DNWScIyV.js";import"./TextField-DHJTJtHu.js";import"./Switch-DK_hgLX1.js";import"./DatePicker-DU4_X1Kg.js";import"./DateTimePicker-Ki4uwXEw.js";import"./LinkButton-CGtVXD2M.js";import"./Box-BOtHEcpc.js";import"./Container-bE4ocZr9.js";import"./Paper-dwBSwh0G.js";import"./ErrorFallback-DcjVRdtL.js";import"./ErrorFallbackText-C2I-OeKi.js";import"./ErrorFallbackWrapper-DpFlGNMA.js";import"./Brand-BDH5l_wz.js";import{D as O,a as t,M as E}from"./constants-DI5LickN.js";import"./MapToggleButtonPresentational-DHVSXtub.js";import{B as D}from"./Box-DPN8iDtX.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-DnGJj7RI.js";import"./useThemeProps-iW1JeY1q.js";import"./useTheme-CLM2GVtV.js";import"./AdapterDayjs-C4Mp3q20.js";import"./generateUtilityClass-Dpfkq2Nk.js";import"./styled-DG4DTdgR.js";import"./Typography-wgrPajcY.js";import"./generateUtilityClasses-XCYs_VDx.js";import"./Modal-QVS8IAeT.js";import"./utils-DCsrA1oL.js";import"./TransitionGroupContext-B68BF-iQ.js";import"./index-CxlNYX3Y.js";import"./resolveComponentProps-DSEEQlqm.js";import"./Popover-Dt_6Onsk.js";import"./Paper-afLuPYhe.js";import"./TextField-Doc_CKDt.js";import"./useFormControl-D3zcrAfb.js";import"./createSvgIcon-CR2ME6BQ.js";import"./SvgIcon-1ianXB1D.js";import"./createStyled-C5CYLvYR.js";import"./IconButton-BTekjOnP.js";import"./ButtonBase-xU-UolfF.js";import"./DialogContent-DJkb6jt4.js";import"./Button-Cy1pOnfQ.js";import"./Chip-DrR5OuDg.js";import"./Stack-9i_ZvuDA.js";import"./styled-B5NIKwPN.js";import"./Alert-DL7N4iSe.js";import"./Divider-DXzVK-0q.js";import"./Edit-DmBLMWan.js";import"./Remove-D6Util3l.js";const Re={title:"Component Library/Map/composites/FeatureMap",component:M,tags:["map","markers","polygons","autodocs"],parameters:{docs:{description:{component:`
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
}`,...(P=(f=s.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};const Ge=["MapWithMarkers","MapWithPolygons","MapWithMarkersAndPolygons","MapWithSelectedMarker","MapWithoutLayers"];export{o as MapWithMarkers,a as MapWithMarkersAndPolygons,r as MapWithPolygons,i as MapWithSelectedMarker,s as MapWithoutLayers,Ge as __namedExportsOrder,Re as default};
