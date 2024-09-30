import{a as o,j as e}from"./emotion-react-jsx-runtime.browser.esm-CUMkBk-e.js";import{T as i}from"./TeliChip-2hG-pJcP.js";import{r as h}from"./index-BP8_t0zE.js";import{F as s,p as d,q as c}from"./index-EaYoR7Ht.js";import"./emotion-element-5486c51c.browser.esm-RhhZu_Xj.js";import"./index-CSpfAsmC.js";import"./ClockRotateLeft-4x8CH0v-.js";import"./Icon-Bbei6cwb.js";import"./TeliAddIcon-ZQkbF6ay.js";import"./TeliCloseIcon-DGO5iUA8.js";import"./TeliDeleteIcon-lxFU83CB.js";import"./TeliEditIcon-DLqRa-97.js";import"./TeliSearchIcon-RHfkGMQw.js";import"./TeliSortIcons-BvUzhX95.js";import"./Chip-DXsJQw9-.js";import"./createTheme-CNnsHS-w.js";import"./extends-BFqQA52f.js";import"./styled-BLGAcoWM.js";import"./DefaultPropsProvider-O1PffH9H.js";import"./StyledEngineProvider-C7Os3f6l.js";import"./createSvgIcon-BK8_stpa.js";import"./SvgIcon-DbzBai8R.js";import"./generateUtilityClasses-DWDXFugI.js";import"./useForkRef-rM2yqL0Y.js";import"./ButtonBase-zNROK4sl.js";import"./TransitionGroupContext-Cc1z3uP3.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-CXPIPAcP.js";const m={render:()=>o("div",{className:"space-x-3",children:[e(i,{label:"Chip Filled"}),e(i,{label:"Chip Outlined",variant:"secondary"}),e(i,{label:"Chip Outlined",variant:"tertiary"})]}),parameters:{docs:{source:{code:`
<TeliChip label="Chip Filled" />
<TeliChip label="Chip Outlined" variant="secondary" />
<TeliChip label="Chip Outlined" variant="tertiary" />
      `}}}},Q=m,C={render:()=>{const[a,t]=h.useState([{key:0,label:"Vegetables"},{key:1,label:"Fruit"},{key:2,label:"Legume"},{key:3,label:"Dairy products"},{key:4,label:"Meat"},{key:5,label:"Fish"}]),r=l=>()=>{t(n=>n.filter(p=>p.key!==l.key))};return e("ul",{className:"flex items-center gap-x-3",children:a.map(l=>{let n;return l.label==="Meat"&&(n=e(s,{icon:d})),e("li",{children:e(i,{icon:n,label:l.label,onDelete:l.label==="React"?void 0:r(l)})},l.key)})})},parameters:{docs:{description:{story:`
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
      `}}}},X=C,b={render:()=>{const a=()=>{alert("Clicked")};return o("div",{className:"space-x-3",children:[e(i,{label:"Chip primary",onClick:a}),e(i,{label:"Chip secondary",variant:"secondary",onClick:a}),e(i,{label:"Chip tertiary",variant:"tertiary",onClick:a})]})},parameters:{docs:{description:{story:`
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
      `}}}},Y=b,y={render:()=>{const a="Clickable link",t="a",r="/?path=/docs/components-telichip--docs";return o("div",{className:"space-x-3",children:[e(i,{label:a,component:t,href:r,clickable:!0}),e(i,{label:a,variant:"secondary",component:t,href:r,clickable:!0}),e(i,{label:a,variant:"tertiary",component:t,href:r,clickable:!0})]})},parameters:{docs:{source:{code:`
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
      `}}}},Z=y,f={render:()=>o("div",{className:"space-x-3",children:[e(i,{label:"Custom color",variant:"basic",sx:{backgroundColor:"#004f7f",border:"#004f7f"}}),e(i,{label:"Custom color",variant:"basic",sx:{borderColor:"#ff7f0e",color:"#ff7f0e"}})]}),parameters:{docs:{description:{story:"Use the <code>sx</code> prop to customise the color of the chip."},source:{code:`
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
      `}}}},ee=f,k={render:()=>{const a=()=>{alert("Deleted")};return o("div",{className:"space-x-3",children:[e(i,{label:"Chip Primary",onDelete:a}),e(i,{label:"Chip Secondary",variant:"secondary",onDelete:a}),e(i,{label:"Chip Tertiary",variant:"tertiary",onDelete:a})]})},parameters:{docs:{description:{story:`
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
      `}}}},ie=k,u={render:()=>o("div",{className:"space-x-3",children:[e(i,{label:"With Icon",icon:e(s,{icon:c})}),e(i,{label:"With Icon",variant:"secondary",icon:e(s,{icon:c})}),e(i,{label:"With Icon",variant:"tertiary",icon:e(s,{icon:c})})]}),parameters:{docs:{description:{story:"Use the <code>icon</code> prop to add an icon."},source:{code:`
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
      `}}}},ae=u,v={render:()=>o("div",{className:"space-x-3",children:[e(i,{label:"Small",variant:"primary",size:"small"}),e(i,{label:"Small",variant:"secondary",size:"small"}),e(i,{label:"Small",variant:"tertiary",size:"small"})]}),parameters:{docs:{description:{story:"Use the <code>size</code> prop to create a small chip."},source:{code:`
<TeliChip label="Small" variant="primary" size="small" />
<TeliChip label="Small" variant="secondary" size="small" />
<TeliChip label="Small" variant="tertiary" size="small" />
      `}}}},le=v,oe={component:i,parameters:{docs:{description:{component:`
Chips are compact elements that represent an input, attribute, or action. They 
allow users to enter information, make selections, filter content, or trigger 
actions. While included here as a standalone component, the most common use will 
be in some form of input, so some of the behavior demonstrated here is not shown 
in context.
        `}}}},te=["BasicChips","ClickableChips","DeleteableChips","ClickableLinkChips","IconChips","ColorChips","SizeChips","ChipsExample"];export{Q as BasicChips,X as ChipsExample,Y as ClickableChips,Z as ClickableLinkChips,ee as ColorChips,ie as DeleteableChips,ae as IconChips,le as SizeChips,te as __namedExportsOrder,oe as default};
