import{j as a}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{R as u}from"./index-Dl6G-zuu.js";import{b as f,D as y,a as L,c as A,M as O,d as R}from"./constants-Cti-p_rp.js";import{S,a as b,M,A as _,B as E}from"./storyconfig-CVrxT6qS.js";import"./jsx-runtime-DMAvRu52.js";import"./iframe-DjR5Pwc1.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";const P="https://demotiles.maplibre.org/style.json",p=[_,E],m={type:"FeatureCollection",features:[b,M]},g=R(p,m.features),x={title:"Component Library/Map/primitives/MapCanvas",component:f,tags:["autodocs"],decorators:[o=>a(O,{initialMapStyleConfig:{tileSets:[],vectorStyles:[]},children:a(A,{children:a("div",{style:{width:400,height:300},children:a(o,{})})})})],argTypes:{markers:{control:"object"},geoPolygons:{control:"object"},selected:{control:"object"}}},r={mapRef:u.createRef(),initialViewState:L,defaultStyle:P,attributionControl:!0,findByClassUri:()=>({backgroundColor:"white",color:"black",classUri:"",alt:"",iconFallbackText:""}),onClickMarker:()=>{},cursor:"auto",onDragStart:()=>{},onDragEnd:()=>{},onMouseEnter:()=>{},onMouseLeave:()=>{}},e={args:{...r,markers:[],geoPolygons:y,selected:[],polygonLayers:[],onLoad:()=>{const o=r.mapRef.current;o==null||o.fitBounds(g,{padding:20,maxZoom:8,duration:0})}}},s={args:{...r,markers:p,geoPolygons:m,selected:[],polygonLayers:S,onLoad:()=>{const o=r.mapRef.current;o==null||o.fitBounds(g,{padding:20,maxZoom:8,duration:0})}}};var n,t,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var c,l,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const Y=["Default","Interactive"];export{e as Default,s as Interactive,Y as __namedExportsOrder,x as default};
