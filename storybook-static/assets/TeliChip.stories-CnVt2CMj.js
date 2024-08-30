import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{T as i}from"./TeliChip-Bg8OsX3V.js";import{r as p}from"./index-BwDkhjyp.js";import{F as r,p as h,q as n}from"./index-B4cTrqDe.js";import"./index-Bl6ORisp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ClockRotateLeft-3SSXHRN4.js";import"./Icon-CDQWMwPF.js";import"./TeliAddIcon-CbeuQDxp.js";import"./TeliCloseIcon-D7gePLQp.js";import"./TeliDeleteIcon-CbwVSRBK.js";import"./TeliEditIcon-CyB5r8OF.js";import"./TeliSearchIcon-D3S6z6_Z.js";import"./TeliSortIcons-riFk7gK9.js";import"./Chip-QYx8wbL0.js";import"./createTheme-CnHyYZiq.js";import"./extends-CCbyfPlC.js";import"./styled-jK8V3O51.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B7e5eAmX.js";import"./createSvgIcon-Dt4Rk6ns.js";import"./SvgIcon-C67DTzBI.js";import"./generateUtilityClasses-BGohe2Km.js";import"./useForkRef-UxOPvILp.js";import"./ButtonBase-Er_LceZN.js";import"./TransitionGroupContext-Dii4aaAC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-B7h9gheN.js";import"./index-D3ylJrlI.js";const d={render:()=>e.jsxs("div",{className:"space-x-3",children:[e.jsx(i,{label:"Chip Filled"}),e.jsx(i,{label:"Chip Outlined",variant:"secondary"}),e.jsx(i,{label:"Chip Outlined",variant:"tertiary"})]}),parameters:{docs:{source:{code:`
<TeliChip label="Chip Filled" />
<TeliChip label="Chip Outlined" variant="secondary" />
<TeliChip label="Chip Outlined" variant="tertiary" />
      `}}}},J=d,m={render:()=>{const[a,o]=p.useState([{key:0,label:"Vegetables"},{key:1,label:"Fruit"},{key:2,label:"Legume"},{key:3,label:"Dairy products"},{key:4,label:"Meat"},{key:5,label:"Fish"}]),s=l=>()=>{o(t=>t.filter(c=>c.key!==l.key))};return e.jsx("ul",{className:"flex items-center gap-x-3",children:a.map(l=>{let t;return l.label==="Meat"&&(t=e.jsx(r,{icon:h})),e.jsx("li",{children:e.jsx(i,{icon:t,label:l.label,onDelete:l.label==="React"?void 0:s(l)})},l.key)})})},parameters:{docs:{description:{story:`
An example of rendering multiple chips from an array of values. Deleting a chip 
removes it from the array. Note that since no onClick prop is defined, the Chip 
can be focused, but does not gain depth while clicked or touched.
`},source:{code:`
const [chips, setChips] = useState([
  { key: 0, label: "Vegetables" },
  { key: 1, label: "Fruit" },
  { key: 2, label: "Legume" },
  { key: 3, label: "Dairy products" },
  { key: 4, label: "Meat" },
  { key: 5, label: "Fish" },
]);

const handleDelete =
  (chipToDelete: Record<string, number | string>) => () => {
    setChips((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

return (
  <ul className="flex items-center gap-x-3">
    {chips.map((chip) => {
      let icon;

      if (chip.label === "Meat") {
        icon = <FontAwesomeIcon icon={faMeat} />;
      }

      return (
        <li key={chip.key}>
          <TeliChip
            icon={icon}
            label={chip.label}
            onDelete={
              chip.label === "React" ? undefined : handleDelete(chip)
            }
          />
        </li>
      );
    })}
  </ul>
);
      `}}}},K=m,C={render:()=>{const a=()=>{alert("Clicked")};return e.jsxs("div",{className:"space-x-3",children:[e.jsx(i,{label:"Chip primary",onClick:a}),e.jsx(i,{label:"Chip secondary",variant:"secondary",onClick:a}),e.jsx(i,{label:"Chip tertiary",variant:"tertiary",onClick:a})]})},parameters:{docs:{description:{story:`
Chips with the onClick prop defined change appearance on focus, hover, and
click.
      `},source:{code:`
const handleClick = () => {
  alert("Clicked");
};

return (
  <div className="space-x-3">
    <TeliChip label="Chip primary" onClick={handleClick} />
    <TeliChip
      label="Chip secondary"
      variant="secondary"
      onClick={handleClick}
    />
    <TeliChip
      label="Chip tertiary"
      variant="tertiary"
      onClick={handleClick}
    />
  </div>
);
      `}}}},Q=C,b={render:()=>{const a="Clickable link",o="a",s="/?path=/docs/components-telichip--docs";return e.jsxs("div",{className:"space-x-3",children:[e.jsx(i,{label:a,component:o,href:s,clickable:!0}),e.jsx(i,{label:a,variant:"secondary",component:o,href:s,clickable:!0}),e.jsx(i,{label:a,variant:"tertiary",component:o,href:s,clickable:!0})]})},parameters:{docs:{source:{code:`
const label = "Clickable link";
const component = "a";
const href = "/?path=/docs/components-telichip--docs";

return (
  <div className="space-x-3">
    <TeliChip label={label} component={component} href={href} clickable />
    <TeliChip
      label={label}
      variant="secondary"
      component={component}
      href={href}
      clickable
    />
    <TeliChip
      label={label}
      variant="tertiary"
      component={component}
      href={href}
      clickable
    />
  </div>
);
      `}}}},X=b,y={render:()=>e.jsxs("div",{className:"space-x-3",children:[e.jsx(i,{label:"Custom color",variant:"basic",sx:{backgroundColor:"#004f7f",border:"#004f7f"}}),e.jsx(i,{label:"Custom color",variant:"basic",sx:{borderColor:"#ff7f0e",color:"#ff7f0e"}})]}),parameters:{docs:{description:{story:"Use the <code>sx</code> prop to customise the color of the chip."},source:{code:`
<TeliChip
  label="Custom color"
  variant="basic"
  sx={{ backgroundColor: "#004f7f", border: "#004f7f" }}
/>
<TeliChip
  label="Custom color"
  variant="basic"
  sx={{ borderColor: "#ff7f0e", color: "#ff7f0e" }}
/>
      `}}}},Y=y,x={render:()=>{const a=()=>{alert("Deleted")};return e.jsxs("div",{className:"space-x-3",children:[e.jsx(i,{label:"Chip Primary",onDelete:a}),e.jsx(i,{label:"Chip Secondary",variant:"secondary",onDelete:a}),e.jsx(i,{label:"Chip Tertiary",variant:"tertiary",onDelete:a})]})},parameters:{docs:{description:{story:`
Chips with the onDelete prop defined will display a delete icon which changes 
appearance on hover.
      `},source:{code:`
const handleDelete = () => {
  alert("Deleted");
};

return (
  <div className="space-x-3">
    <TeliChip label="Chip Filled" onDelete={handleDelete} />
    <TeliChip
      label="Chip Outlined"
      variant="secondary"
      onDelete={handleDelete}
    />
    <TeliChip
      label="Chip Outlined"
      variant="tertiary"
      onDelete={handleDelete}
    />
  </div>
);
      `}}}},Z=x,f={render:()=>e.jsxs("div",{className:"space-x-3",children:[e.jsx(i,{label:"With Icon",icon:e.jsx(r,{icon:n})}),e.jsx(i,{label:"With Icon",variant:"secondary",icon:e.jsx(r,{icon:n})}),e.jsx(i,{label:"With Icon",variant:"tertiary",icon:e.jsx(r,{icon:n})})]}),parameters:{docs:{description:{story:"Use the <code>icon</code> prop to add an icon."},source:{code:`
<TeliChip label="With Icon" icon={<FontAwesomeIcon icon={faPerson} />} />
<TeliChip
  label="With Icon"
  variant="secondary"
  icon={<FontAwesomeIcon icon={faPerson} />}
/>
<TeliChip
  label="With Icon"
  variant="tertiary"
  icon={<FontAwesomeIcon icon={faPerson} />}
/>
      `}}}},ee=f,k={render:()=>e.jsxs("div",{className:"space-x-3",children:[e.jsx(i,{label:"Small",variant:"primary",size:"small"}),e.jsx(i,{label:"Small",variant:"secondary",size:"small"}),e.jsx(i,{label:"Small",variant:"tertiary",size:"small"})]}),parameters:{docs:{description:{story:"Use the <code>size</code> prop to create a small chip."},source:{code:`
<TeliChip label="Small" variant="primary" size="small" />
<TeliChip label="Small" variant="secondary" size="small" />
<TeliChip label="Small" variant="tertiary" size="small" />
      `}}}},ie=k,ae={component:i,parameters:{docs:{description:{component:`
Chips are compact elements that represent an input, attribute, or action. They 
allow users to enter information, make selections, filter content, or trigger 
actions. While included here as a standalone component, the most common use will 
be in some form of input, so some of the behavior demonstrated here is not shown 
in context.
        `}}}},le=["BasicChips","ClickableChips","DeleteableChips","ClickableLinkChips","IconChips","ColorChips","SizeChips","ChipsExample"];export{J as BasicChips,K as ChipsExample,Q as ClickableChips,X as ClickableLinkChips,Y as ColorChips,Z as DeleteableChips,ee as IconChips,ie as SizeChips,le as __namedExportsOrder,ae as default};
