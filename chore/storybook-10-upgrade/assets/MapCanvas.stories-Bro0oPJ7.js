import{R as u,j as e}from"./iframe-B_xAjz_a.js";import{D as f,a as y,b as L,c as A,d as O,M as R}from"./constants-1TT1xdyQ.js";import{S,a as b,M,A as _,B as E}from"./storyconfig-DEIJDHKx.js";import"./preload-helper-C1FmrZbK.js";import"./index-CI4uBojl.js";import"./useTheme-DXfWrHWZ.js";const P="https://demotiles.maplibre.org/style.json",p=[_,E],m={type:"FeatureCollection",features:[b,M]},g=A(p,m.features),D={title:"Component Library/Map/primitives/MapCanvas",component:L,tags:["autodocs"],decorators:[a=>e(R,{initialMapStyleConfig:{tileSets:[],vectorStyles:[]},children:e(O,{children:e("div",{style:{width:400,height:300},children:e(a,{})})})})],argTypes:{markers:{control:"object"},geoPolygons:{control:"object"},selected:{control:"object"}}},n={mapRef:u.createRef(),initialViewState:y,defaultStyle:P,attributionControl:!0,findByClassUri:()=>({backgroundColor:"white",color:"black",classUri:"",alt:"",iconFallbackText:""}),onClickMarker:()=>{},cursor:"auto",onDragStart:()=>{},onDragEnd:()=>{},onMouseEnter:()=>{},onMouseLeave:()=>{}},o={args:{...n,markers:[],geoPolygons:f,selected:[],polygonLayers:[],onLoad:()=>{const a=n.mapRef.current;a==null||a.fitBounds(g,{padding:20,maxZoom:8,duration:0})}}},s={args:{...n,markers:p,geoPolygons:m,selected:[],polygonLayers:S,onLoad:()=>{const a=n.mapRef.current;a==null||a.fitBounds(g,{padding:20,maxZoom:8,duration:0})}}};var r,t,c;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(c=(t=o.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var i,l,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const h=["Default","Interactive"];export{o as Default,s as Interactive,h as __namedExportsOrder,D as default};
