import{j as e,a as m}from"./DefaultPropsProvider-mMqPhAz4.js";import{B as t}from"./Box-DOOM5p70.js";import{T as u}from"./Typography-RFRigqiF.js";const f=o=>{console.warn(o)},h=({children:o,beforeItem:s,afterItem:r,beforeItemSX:p,afterItemSX:c,component:n="span",href:a,containerSX:d,propCheckError:i=f,...l})=>(n==="a"&&!a&&i('SocketedText: When using component="a", the "href" prop is required.'),s===void 0&&r===void 0&&i("SocketedText: Sockets unused; use normal Text/Typography component instead"),e(u,{component:n,href:a,...l,children:m(t,{component:"span",sx:{display:"inline-flex",alignItems:"center",gap:1,...d},children:[s&&e(t,{component:"span",sx:p,children:s}),e(t,{component:"span",children:o}),r&&e(t,{component:"span",sx:c,children:r})]})}));h.__docgenInfo={description:`The intended use of SocketedText to render text with a trailing, or leading icon.

This component mimic's MUI’s Typography by default, except it has beforeItem or afterItem sockets.

The text and icons are wrapped in an inline‑flex container with sensible defaults.

All Typography props are forwarded, so this component behaves like any other Typography element.

**Nomenclature**: The word "Socketed" is used in the [Diablo2](https://gamefaqs.gamespot.com/pc/370600-diablo-ii-lord-of-destruction/faqs/8382) sense:

> Socketed items are exactly the same as normal items, but with sockets in them.
> This allows you to insert gems or skulls in order to add magical properties to your items.

<sup>This may be a terrible name</sup>`,methods:[],displayName:"SocketedText",props:{beforeItem:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},afterItem:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},beforeItemSX:{required:!1,tsType:{name:"SxProps"},description:""},afterItemSX:{required:!1,tsType:{name:"SxProps"},description:""},href:{required:!1,tsType:{name:"string"},description:""},containerSX:{required:!1,tsType:{name:"SxProps"},description:""},component:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:'"span"',computed:!1}},propCheckError:{required:!1,tsType:{name:"signature",type:"function",raw:"(problem:string) => void",signature:{arguments:[{type:{name:"string"},name:"problem"}],return:{name:"void"}}},description:"",defaultValue:{value:`(problem: string) => {
  if (process.env.NODE_ENV === "production") {
    console.warn(problem);
  } else {
    throw new Error(problem);
  }
}`,computed:!1}}},composes:["Omit"]};export{h as S};
