import{r as u,b as c,a as t}from"./iframe-DoV3QjMy.js";import{T as r}from"./ToggleButtonGroup-CBnYeWXB.js";import{T as a}from"./ToggleButton-CcNjzFiL.js";import"./preload-helper-C1FmrZbK.js";import"./clsx-B-dksMZM.js";import"./styled-CPIBH1-1.js";import"./extendSxProp-fXUqE6Bn.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-B3vut5uf.js";import"./TransitionGroupContext-D3Q5HB-K.js";const V={title:"Inputs/ToggleButtonGroup",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
A set of mutually-related toggle buttons — a view switch, a density picker, a text-alignment control.

\`@mui/material\` ships the group; the DS adds the accessible name it leaves optional, and a pill treatment that replaces the \`sx\` block apps were hand-rolling.

---

### The opinion

- **An accessible name is required by the type.** Pass \`aria-label\` or \`aria-labelledby\`, exactly one. A group of buttons with no name leaves a screen-reader user to infer what the set controls (ADR-0001).
- **\`pill\` fills the selected button solidly.** MUI paints it \`alpha(colour, action.selectedOpacity)\`, which on a dark surface reads as disabled. The DS fills it with \`primary.main\` and its \`contrastText\`.
- **The ripple is off under \`pill\`.** It paints over a flat fill and makes a selected button look washed.
- **\`pill\` rounds every button, including the first and last.** MUI squares the inner edges to fuse the group into one bar; a pill group wants separate pills.

---

### Use it for

A small set of mutually exclusive views or modes where both options should stay visible, so the current state is readable without inferring it from what the control offers.

Reach for \`Tabs\` instead when the buttons select a *panel* — that is a tablist, with different semantics and keyboard behaviour. Reach for \`Switch\` when the choice is genuinely binary and one state is the default.

---

### Defaults

Nothing is baked. \`exclusive\`, \`size\`, \`orientation\` and the rest pass through to MUI unchanged.

Note \`exclusive\`'s upstream behaviour: clicking the already-selected button fires \`onChange\` with \`null\`. Guard it, or the group deselects into no state at all:

\`\`\`tsx
onChange={(_event, next) => { if (next !== null) setView(next); }}
\`\`\`

---

### Example

\`\`\`tsx
import { ToggleButton, ToggleButtonGroup } from "@telicent-oss/ds";

const [view, setView] = useState<"list" | "map">("list");

<ToggleButtonGroup
  pill
  exclusive
  size="small"
  aria-label="Result view"
  value={view}
  onChange={(_event, next: "list" | "map" | null) => {
    if (next !== null) setView(next);
  }}
>
  <ToggleButton value="list" aria-label="List view">List</ToggleButton>
  <ToggleButton value="map" aria-label="Map view">Map</ToggleButton>
</ToggleButtonGroup>
\`\`\`
        `}}},argTypes:{pill:{control:"boolean",description:"Render as a pill group: bordered well, rounded buttons, solid fill on the selected one.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"ToggleButtonGroup (DS)"}},"aria-label":{control:"text",description:"The group's accessible name, as a literal string. Required unless `aria-labelledby` is given — the type is a union permitting exactly one (ADR-0001).",table:{type:{summary:"string"},category:"ToggleButtonGroup (DS)"}},"aria-labelledby":{control:"text",description:"Id of a visible element naming the group. Required unless `aria-label` is given.",table:{type:{summary:"string"},category:"ToggleButtonGroup (DS)"}},value:{control:!1,description:"Selected value(s). Controlled — hold it in the consumer.",table:{category:"ToggleButtonGroup"}},exclusive:{control:"boolean",description:"Single-select. Emits `null` when the active button is clicked again.",table:{category:"ToggleButtonGroup"}},children:{control:!1,table:{type:{summary:"ReactNode"},category:"ToggleButtonGroup"}}}},s={parameters:{docs:{description:{story:"The pill treatment, and the shape most Telicent screens want."}}},render:()=>{const[l,n]=u.useState("list");return c(r,{pill:!0,exclusive:!0,size:"small","aria-label":"Result view",value:l,onChange:(p,e)=>{e!==null&&n(e)},children:[t(a,{value:"list","aria-label":"List view",children:"List"}),t(a,{value:"map","aria-label":"Map view",children:"Map"})]})}},i={parameters:{docs:{description:{story:"Without `pill`: MUI's fused bar with squared inner edges and a translucent selected state. Use it where the group should read as one segmented control rather than separate pills."}}},render:()=>{const[l,n]=u.useState("list");return c(r,{exclusive:!0,size:"small","aria-label":"Result view",value:l,onChange:(p,e)=>{e!==null&&n(e)},children:[t(a,{value:"list","aria-label":"List view",children:"List"}),t(a,{value:"map","aria-label":"Map view",children:"Map"})]})}},o={parameters:{docs:{description:{story:"Unguarded, an `exclusive` group deselects when you click the active button — MUI fires `onChange` with `null`. Click the selected one to see it empty. Guard it unless no selection is a legitimate state."}}},render:()=>{const[l,n]=u.useState("list");return c(r,{pill:!0,exclusive:!0,size:"small","aria-label":"Result view, unguarded",value:l,onChange:(p,e)=>n(e),children:[t(a,{value:"list","aria-label":"List view",children:"List"}),t(a,{value:"map","aria-label":"Map view",children:"Map"})]})}};var d,g,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "The pill treatment, and the shape most Telicent screens want."
      }
    }
  },
  render: () => {
    const [view, setView] = useState<"list" | "map">("list");
    return <ToggleButtonGroup pill exclusive size="small" aria-label="Result view" value={view} onChange={(_event, next: "list" | "map" | null) => {
      if (next !== null) setView(next);
    }}>
        <ToggleButton value="list" aria-label="List view">
          List
        </ToggleButton>
        <ToggleButton value="map" aria-label="Map view">
          Map
        </ToggleButton>
      </ToggleButtonGroup>;
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var m,v,w;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Without \`pill\`: MUI's fused bar with squared inner edges and a translucent selected state. Use it where the group should read as one segmented control rather than separate pills."
      }
    }
  },
  render: () => {
    const [view, setView] = useState<"list" | "map">("list");
    return <ToggleButtonGroup exclusive size="small" aria-label="Result view" value={view} onChange={(_event, next: "list" | "map" | null) => {
      if (next !== null) setView(next);
    }}>
        <ToggleButton value="list" aria-label="List view">
          List
        </ToggleButton>
        <ToggleButton value="map" aria-label="Map view">
          Map
        </ToggleButton>
      </ToggleButtonGroup>;
  }
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var b,f,T;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Unguarded, an \`exclusive\` group deselects when you click the active button — MUI fires \`onChange\` with \`null\`. Click the selected one to see it empty. Guard it unless no selection is a legitimate state."
      }
    }
  },
  render: () => {
    const [view, setView] = useState<"list" | "map" | null>("list");
    return <ToggleButtonGroup pill exclusive size="small" aria-label="Result view, unguarded" value={view} onChange={(_event, next: "list" | "map" | null) => setView(next)}>
        <ToggleButton value="list" aria-label="List view">
          List
        </ToggleButton>
        <ToggleButton value="map" aria-label="Map view">
          Map
        </ToggleButton>
      </ToggleButtonGroup>;
  }
}`,...(T=(f=o.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const D=["Pill","Default","DeselectHazard"];export{i as Default,o as DeselectHazard,s as Pill,D as __namedExportsOrder,V as default};
