import{j as p}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{F as _}from"./AuthModal-BDBAByij.js";import{A as n,B as l,S as w,a as m,M as L,i as M}from"./storyconfig-CVrxT6qS.js";import{D as O,a as e,M as F}from"./constants-C7WMpCVx.js";import"./index-Dl6G-zuu.js";import"./UserProfile-DRN111Dw.js";import"./TelicentHorizontalSVG-DP7xLAp3.js";import"./DataSetIcon-CzT3Gt8m.js";import"./UserIcon-B0AVfc7u.js";import"./Text-DnbGH9ax.js";import"./Chip-Jqcc-fVu.js";import"./Divider-HWnn5fVZ.js";import"./TreeView-B3svt8lB.js";import"./UserProfileContent-BkWk_Qx8.js";import"./FlexBox-owEKTX38.js";import"./LinearProgress-CRSreEF6.js";import"./Dialog-C-jl0jSy.js";import"./TextField-BXFcgNlD.js";import"./Select-qyD46tLz.js";import"./Autocomplete-2ovWRRWN.js";import"./DatePicker-DSr6TGip.js";import"./DateTimePicker-C633L0Z7.js";import"./Button-CI14C0BZ.js";import"./IconButton-CSCqGkQ5.js";import"./LinkButton-CJcpdsZt.js";import"./FlexGrid-M25hPc65.js";import"./Container-CFeVW3qn.js";import"./Card-BWv60QFk.js";import"./CardActions-CCW8za6b.js";import"./Popover-CAHG92mn.js";import"./Paper-BBwh5-3y.js";import{U as E}from"./UIThemeProvider-vkr8-daa.js";import"./ErrorFallback-fPXNZKjO.js";import"./ErrorFallbackText-BLCYy_1i.js";import"./ErrorFallbackWrapper-CSpgK55r.js";import"./MapToggleButtonPresentational-DY66EemL.js";import{B as D}from"./Box-DR7xjwgg.js";import"./jsx-runtime-DMAvRu52.js";import"./types-JQgdQoTs.js";import"./ButtonBase-C0n3d_CB.js";import"./identifier-CCo8HfxA.js";import"./styled-DiVYluCu.js";import"./generateUtilityClasses-CRyAR7Z0.js";import"./DefaultPropsProvider-BrPVfFhn.js";import"./TransitionGroupContext-Cbp9jVrs.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-CXtVKvFt.js";import"./Popover-DD2HYYg7.js";import"./useTheme-DC9e96ys.js";import"./useTheme-CEgm5wok.js";import"./utils-QfZKikgD.js";import"./index-Dn0cO_TJ.js";import"./Modal-cSJVsbaW.js";import"./Paper-B-rBeRIm.js";import"./Select-Nzfsci8P.js";import"./useFormControl-CQLCXd-P.js";import"./Menu-CYNMhx33.js";import"./useId-CkA8naEk.js";import"./createSvgIcon-CxivGeKF.js";import"./SvgIcon-DDjczThx.js";import"./GlobalStyles-BK1ltzIn.js";import"./GlobalStyles-DdQ_E3CX.js";import"./Popper-QmfZ5sgW.js";import"./AdapterDayjs-Dmcgw6f1.js";import"./index-BfyspvgH.js";import"./useThemeProps-BTBzXMHi.js";import"./useThemeProps-BFLDat3t.js";import"./Typography-DvrCv4HQ.js";import"./TextField-BnU6ehgf.js";import"./FormHelperText-D2-CeYt9.js";import"./createStyled-9i3u5Rqa.js";import"./IconButton-CL6GPvoG.js";import"./colorManipulator-DBPky6cX.js";import"./DialogContent-DyFozIFy.js";import"./Button-DPeHgJ80.js";import"./Chip-B7XAvyWn.js";import"./MenuItem-MWBitPoC.js";import"./dividerClasses-DixuAXrT.js";import"./styled-BEKiHWi7.js";import"./Edit-BwFhg13Q.js";import"./iframe-CKsofPru.js";import"../sb-preview/runtime.js";import"./Divider-DOeen-K3.js";import"./ThemeProvider-BPzF9hu_.js";import"./Remove-DLpXZYtt.js";const ce={title:"Component Library/Map/composites/FeatureMap",component:_,tags:["map","markers","polygons","autodocs"],parameters:{docs:{description:{component:`
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
}`,...(P=(f=s.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};const de=["MapWithMarkers","MapWithPolygons","MapWithMarkersAndPolygons","MapWithSelectedMarker","MapWithoutLayers"];export{o as MapWithMarkers,a as MapWithMarkersAndPolygons,r as MapWithPolygons,i as MapWithSelectedMarker,s as MapWithoutLayers,de as __namedExportsOrder,ce as default};
