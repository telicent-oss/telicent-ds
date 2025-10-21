import{j as a}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{R as u}from"./index-Dl6G-zuu.js";import{b as f,D as y,a as L,c as A,M as O,d as R}from"./constants-D6JbaO56.js";import{S,a as b,M,A as _,B as E}from"./storyconfig-CVrxT6qS.js";import"./jsx-runtime-DMAvRu52.js";import"./iframe-DfdgjJFF.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-BzMTtAHJ.js";import"./identifier-y0bUoTO6.js";import"./useTheme-DD-YLZ4_.js";import"./GlobalStyles-vabYxzRP.js";import"./GlobalStyles-CHovE7rY.js";const P="https://demotiles.maplibre.org/style.json",m=[_,E],d={type:"FeatureCollection",features:[b,M]},g=R(m,d.features),V={title:"Component Library/Map/primitives/MapCanvas",component:f,tags:["autodocs"],decorators:[o=>a(O,{initialMapStyleConfig:{tileSets:[],vectorStyles:[]},children:a(A,{children:a("div",{style:{width:400,height:300},children:a(o,{})})})})],argTypes:{markers:{control:"object"},geoPolygons:{control:"object"},selected:{control:"object"}}},s={mapRef:u.createRef(),initialViewState:L,defaultStyle:P,attributionControl:!0,findByClassUri:()=>({backgroundColor:"white",color:"black",classUri:"",alt:"",iconFallbackText:""}),onClickMarker:()=>{},cursor:"auto",onDragStart:()=>{},onDragEnd:()=>{},onMouseEnter:()=>{},onMouseLeave:()=>{}},e={args:{...s,markers:[],geoPolygons:y,selected:[],polygonLayers:[],onLoad:()=>{const o=s.mapRef.current;o==null||o.fitBounds(g,{padding:20,maxZoom:8,duration:0})}}},r={args:{...s,markers:m,geoPolygons:d,selected:[],polygonLayers:S,onLoad:()=>{const o=s.mapRef.current;o==null||o.fitBounds(g,{padding:20,maxZoom:8,duration:0})}}};var t,n,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    markers: [],
    geoPolygons: DEFAULT_GEO_POLYGONS,
    selected: [],
    polygonLayers: [],
    // Fit only on load for default as well
    onLoad: () => {
      const map = (baseArgs.mapRef as React.RefObject<MapRef>).current;
      map?.fitBounds(initialBounds, {
        padding: 20,
        maxZoom: 8,
        duration: 0
      });
    }
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,l,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    markers: sampleMarkers,
    geoPolygons: samplePolygons,
    selected: [],
    polygonLayers: SUPER_OBVIOUS_POLYGON_LAYERS,
    onLoad: () => {
      const map = (baseArgs.mapRef as React.RefObject<MapRef>).current;
      map?.fitBounds(initialBounds, {
        padding: 20,
        maxZoom: 8,
        duration: 0
      });
    }
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const w=["Default","Interactive"];export{e as Default,r as Interactive,w as __namedExportsOrder,V as default};
