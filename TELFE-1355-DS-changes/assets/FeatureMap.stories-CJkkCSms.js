import{j as p}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{F as _}from"./AuthModal-qmasD9s9.js";import{A as n,B as l,S as w,a as m,M as L,i as M}from"./storyconfig-CVrxT6qS.js";import{D as O,a as e,M as F}from"./constants-DlQjT1fD.js";import"./index-Dl6G-zuu.js";import"./UserProfile-C8X7C1Su.js";import"./TelicentHorizontalSVG-CP1sg2bX.js";import"./DataSetIcon-Cm0wHARM.js";import"./UserIcon-BHVQbi_2.js";import"./Text-CBeXAxhM.js";import"./Chip-DHPuOQSw.js";import"./Divider-Chg4b2AX.js";import"./TreeView-BgMRjvSk.js";import"./UserProfileContent-CK9uRPZy.js";import"./FlexBox-DBRDUZLj.js";import"./LinearProgress-Cj7B0DX4.js";import"./Dialog-YaeX8T1I.js";import"./TextField-Cyy439vr.js";import"./Select-D1STgkym.js";import"./Autocomplete-DF7gJZuW.js";import"./DatePicker-DVz3O4Jw.js";import"./DateTimePicker-DVLkLoCp.js";import"./Button-B5noVfMb.js";import"./IconButton-C0wT6dFz.js";import"./LinkButton-BU_YGzUP.js";import"./FlexGrid-BkekN5zB.js";import"./Container-Cq7J-8WQ.js";import"./Card-CyosORb7.js";import"./CardActions-q60J-lzQ.js";import"./Popover-BrIrK6dZ.js";import"./Paper-BKrtg6OD.js";import{U as E}from"./UIThemeProvider-NVLmHdJb.js";import"./ErrorFallback-DIksr2Zc.js";import"./ErrorFallbackText-Cj3I3SFq.js";import"./ErrorFallbackWrapper-D0yAoJ_c.js";import"./MapToggleButtonPresentational-Cl915u3A.js";import{B as D}from"./Box-BszdSfjy.js";import"./jsx-runtime-DMAvRu52.js";import"./types-JQgdQoTs.js";import"./ButtonBase-tX4Kf77e.js";import"./identifier-C6mAUaLB.js";import"./styled-BErHg-7C.js";import"./generateUtilityClasses-Cuk6vP38.js";import"./DefaultPropsProvider-BOzBDHyA.js";import"./TransitionGroupContext-Cbp9jVrs.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-sTB3RqdK.js";import"./Popover-Cxp1EMNk.js";import"./useTheme-GyLrR4NU.js";import"./useTheme-Cg37eTMn.js";import"./utils-Bvq5k-kH.js";import"./index-B0kOWIl9.js";import"./Modal-CRxLFwVZ.js";import"./Paper-ZbIfs51-.js";import"./Select-Ds1w35dI.js";import"./Menu-DVuMilii.js";import"./useId-CkA8naEk.js";import"./createSvgIcon-Bol9-9si.js";import"./SvgIcon-5gifbZ3Q.js";import"./GlobalStyles-B_QX4JcH.js";import"./GlobalStyles-D5xpOMhP.js";import"./Popper-CM2Kr59e.js";import"./AdapterDayjs-DW1c22wX.js";import"./index-BfyspvgH.js";import"./useThemeProps-DWcfj1ju.js";import"./useThemeProps-43QuDAxK.js";import"./Typography-DqLej86Z.js";import"./TextField-BLjSgVN4.js";import"./createStyled-BrBbf8qF.js";import"./IconButton-BoPVz0e3.js";import"./colorManipulator-DXzzQmry.js";import"./DialogContent-D-e6ZoBQ.js";import"./Button-TraRuOe6.js";import"./Chip-0oOxBFYq.js";import"./MenuItem-D3kwU1b1.js";import"./dividerClasses-D3mH6QPz.js";import"./styled-BSjilmX5.js";import"./Edit-uu0JEZaV.js";import"./iframe-CEcEbE6B.js";import"../sb-preview/runtime.js";import"./Divider-hbCrYSvl.js";import"./ThemeProvider-zfew0pSd.js";import"./Remove-Dh6sdo_k.js";const me={title:"Component Library/Map/composites/FeatureMap",component:_,tags:["map","markers","polygons","autodocs"],parameters:{docs:{description:{component:`
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
