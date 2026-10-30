import{a as o}from"./iframe-B8Ndjgs7.js";import{M as C}from"./EntityList-BhryZOsc.js";import{I as t}from"./IconButton-Bp9NzKGU.js";import{G as n,F as x,B}from"./ExpandLessIcon-XoRe2dIW.js";import"./CogIcon-Cx2nuXV6.js";import"./InfoIcon-z080ie21.js";import"./ExpandMoreIcon-C-7YScuE.js";import"./ThemeSwitchRow-QHgoULL7.js";import"./Text-B8d64O_Y.js";import"./Badge-CCUmKRz_.js";import"./Chip-DkK8QWr7.js";import"./Divider-BCsdqXJ_.js";import"./TreeView-3XRMjQH4.js";import"./AppInfoRow-DcG9pln0.js";import"./AppSettings-BXK_6o6N.js";import"./SvgIcon-C22eSXdq.js";import"./TableRow-DWGhKXZz.js";import{B as P}from"./Box-DWlntqlD.js";import{T as p}from"./Typography-s2ICI44X.js";import"./preload-helper-Dp1pzeXC.js";import"./FlexBox-Dm4YTDCC.js";import"./Stack-rvIPxQ-d.js";import"./styled-CtcE8cKO.js";import"./extendSxProp-21VtOiYW.js";import"./clsx-B-dksMZM.js";import"./styled-BYZRNKV0.js";import"./createStyled-wNLCiFTP.js";import"./useThemeProps-CLApfop_.js";import"./composeClasses-fLhin0tj.js";import"./ListContext-BrZ-GaYK.js";import"./ListItem-CB8jEQm3.js";import"./FormControl-3TJEEoeT.js";import"./useFormControl-BjXCnS6h.js";import"./TransitionGroupContext-DZHet8-E.js";import"./resolveComponentProps-utvTJYfY.js";import"./ButtonBase-B_Llp_PF.js";import"./Toolbar-CISRzm9i.js";import"./TextField-BTz-o-Kc.js";import"./Modal-Ct6w46wj.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-AhVjQ7Gk.js";import"./index-BtgTVimu.js";import"./index-BbzF8qOu.js";import"./utils-DYAAZsgJ.js";import"./Popover-CCtwc_z-.js";import"./Paper-rbZdw6s-.js";import"./useControlled-mY01Zfpb.js";import"./createSvgIcon-CGOjPHBt.js";import"./SvgIcon-C47WU1LB.js";import"./FormHelperText-DpwVaweK.js";import"./Close-BdpiD1Ss.js";import"./Popper-AaPlJ6uF.js";import"./Badge-DYs2SihV.js";import"./Chip-D_9jUssn.js";import"./IconButton-KoDWoU7V.js";import"./FormControlLabel-uh3SpxA2.js";import"./MenuItem-CQaq3Nw5.js";import"./dividerClasses-CXlbGETs.js";import"./Button-Ds71WDMa.js";import"./MapToggleButtonPresentational-DaEIfM6E.js";import"./Remove-DLztY2SR.js";import"./useSlot-BfqIP4m7.js";import"./Divider-DP7n1nVq.js";import"./Skeleton-BcRltIku.js";import"./Skeleton-B2XntzD3.js";import"./Edit-L48O_6R-.js";import"./LinearProgress-BKGZlMo3.js";import"./LinearProgress-BuxH05pl.js";import"./Spinner-rjnbl10G.js";import"./CircularProgress-B0d2h-_4.js";import"./Dialog-DAlnXd4S.js";import"./DialogContent-CSHYPR4j.js";import"./Box-tid9eA9-.js";import"./Alert-CLckrKX0.js";import"./ToggleButton-DqmNPX07.js";import"./ToggleButton-XWsnd7ne.js";import"./ToggleButtonGroup-syVqFRSt.js";import"./LinkButton-C9RIImpp.js";import"./Container-BIyIkFdg.js";import"./TextField-BZJb3dXc.js";import"./Switch-CM1NShQE.js";import"./Switch-CkdQrvO8.js";import"./LabeledSwitch-D2KenOv3.js";import"./RadioGroup-B4cSf-Rs.js";import"./FormControl-DNyd5Wo1.js";import"./FormHelperText-BPBLk9Qd.js";import"./Tabs-umBbm1V9.js";import"./MenuItem-DS_246t9.js";import"./AccordionDetails-BhI29Hn1.js";import"./Collapse-B-5zWWtm.js";import"./index-BreE0q1-.js";import"./_IconPopover-C1PNRads.js";import"./Paper-DCXKoJ6A.js";import"./ErrorFallback-DmKx3vvI.js";import"./ErrorFallbackText-DDsYNZoE.js";import"./ErrorFallbackWrapper-DrscerA0.js";import"./Brand-Bx7kSsxa.js";import"./useThemeProps-C4jrygnl.js";import"./TableCell--HWIkjOy.js";const Se={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
A generic, reusable **Menu** component that pairs a trigger (any button) with a list of menu options.

This is designed for common UI patterns like:
- **App switchers**
- **Overflow (kebab) menus**
- **Contextual actions** (e.g. "Edit", "Duplicate", "Delete")
- **Quick navigation** links

Unlike feature-specific menus, this component stays intentionally small:
- You provide the **trigger** via a \`button\` render prop.
- You provide menu \`options\` (label, optional icon, disabled state, optional link navigation).
- It handles anchoring, open/close state, and selection behavior.

---

### When & How to use it
Use **Menu** any time you want consistent menu behavior without re-implementing MUI anchoring and a11y wiring.

Example usage:

\`\`\`tsx
<Menu
  aria-label="actions-menu"
  menuId="actions-menu"
  options={[
    { id: "edit", label: "Edit", onClick: () => console.log("edit") },
    { id: "duplicate", label: "Duplicate", onClick: () => console.log("duplicate") },
    { id: "delete", label: "Delete", onClick: () => console.log("delete"), disabled: true },
  ]}
  button={(btnProps) => (
    <IconButton {...btnProps} aria-label="open menu">
      <GridIcon />
    </IconButton>
  )}
/>
\`\`\`
`}},id:"menu-default"},decorators:e=>o(P,{sx:{margin:"auto"},children:e()})},i={args:{"aria-label":"menu",menuId:"menu-default",options:[{id:"profile",label:"Profile",onClick:()=>console.log("Profile")},{id:"settings",label:"Settings",onClick:()=>console.log("Settings")},{id:"logout",label:"Logout",onClick:()=>console.log("Logout")}],button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})}},r={args:{"aria-label":"menu with icons",menuId:"menu-icons",options:[{id:"grid",label:"View grid",icon:o(p,{variant:"caption",children:o(n,{fontSize:"small",color:"primary"})})},{id:"save",label:"Save",icon:o(p,{variant:"caption",children:o(x,{fontSize:"small",color:"primary"})})},{id:"delete",label:"Delete (disabled)",icon:o(p,{variant:"caption",children:o(B,{color:"primary"})}),disabled:!0}],button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"Menu options can include an optional `icon`, and can be disabled using `disabled: true`."}}}},a={args:{"aria-label":"navigation menu",menuId:"menu-links",options:[{id:"docs",label:"Docs",href:"https://example.com/docs",target:"_blank"},{id:"status",label:"Status",href:"https://example.com/status",target:"_blank"},{id:"support",label:"Support",href:"https://example.com/support",target:"_blank"}],button:e=>o(t,{...e,"aria-label":"open navigation menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"If you provide `href`, the menu item will open a link (defaults to `_self` unless `target` is set)."}}}},l={args:{"aria-label":"menu with divider",menuId:"menu-divider",options:[{id:"edit",label:"Edit",onClick:()=>console.log("Edit")},{id:"duplicate",label:"Duplicate",onClick:()=>console.log("Duplicate")},{id:"disabled",label:"Disabled Example",dividerAbove:!0,disabled:!0},{id:"delete",label:"Delete",onClick:()=>console.log("Delete")}],onSelect:e=>console.log("Selected:",e.id),button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"You can add a divider before an option with `dividerAbove`, and also capture selection centrally via `onSelect`."}}}},s={args:{"aria-label":"menu with selected item",menuId:"menu-selected",options:[{id:"profile",label:"Very long option name that exceeds typical width",onClick:()=>console.log("Profile")},{id:"settings",label:"Settings",onClick:()=>console.log("Settings"),selected:!0},{id:"logout",label:"Logout",onClick:()=>console.log("Logout")}],button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"Use `selected: true` on a menu option to visually indicate the current selection when the menu opens (and optionally autofocus it, depending on Menu configuration)."}}}},De=["Default","WithIconsAndDisabled","LinkNavigation","WithDividerAndOnSelect","WithSelected"];var c,m,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    "aria-label": "menu",
    menuId: "menu-default",
    options: [{
      id: "profile",
      label: "Profile",
      onClick: () => console.log("Profile")
    }, {
      id: "settings",
      label: "Settings",
      onClick: () => console.log("Settings")
    }, {
      id: "logout",
      label: "Logout",
      onClick: () => console.log("Logout")
    }],
    button: btnProps => <IconButton {...btnProps} aria-label="open menu" color="primary">
        <GridIcon />
      </IconButton>
  }
}`,...(d=(m=i.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,b,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    "aria-label": "menu with icons",
    menuId: "menu-icons",
    options: [{
      id: "grid",
      label: "View grid",
      icon: <Typography variant="caption">
            <GridIcon fontSize="small" color="primary" />
          </Typography>
    }, {
      id: "save",
      label: "Save",
      icon: <Typography variant="caption">
            <FloppyDiskIcon fontSize="small" color="primary" />
          </Typography>
    }, {
      id: "delete",
      label: "Delete (disabled)",
      icon: <Typography variant="caption">
            <BinIcon color="primary" />
          </Typography>,
      disabled: true
    }],
    button: btnProps => <IconButton {...btnProps} aria-label="open menu" color="primary">
        <GridIcon />
      </IconButton>
  },
  parameters: {
    docs: {
      description: {
        story: "Menu options can include an optional \`icon\`, and can be disabled using \`disabled: true\`."
      }
    }
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,y,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    "aria-label": "navigation menu",
    menuId: "menu-links",
    options: [{
      id: "docs",
      label: "Docs",
      href: "https://example.com/docs",
      target: "_blank"
    }, {
      id: "status",
      label: "Status",
      href: "https://example.com/status",
      target: "_blank"
    }, {
      id: "support",
      label: "Support",
      href: "https://example.com/support",
      target: "_blank"
    }],
    button: btnProps => <IconButton {...btnProps} aria-label="open navigation menu" color="primary">
        <GridIcon />
      </IconButton>
  },
  parameters: {
    docs: {
      description: {
        story: "If you provide \`href\`, the menu item will open a link (defaults to \`_self\` unless \`target\` is set)."
      }
    }
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,I,k;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    "aria-label": "menu with divider",
    menuId: "menu-divider",
    options: [{
      id: "edit",
      label: "Edit",
      onClick: () => console.log("Edit")
    }, {
      id: "duplicate",
      label: "Duplicate",
      onClick: () => console.log("Duplicate")
    }, {
      id: "disabled",
      label: "Disabled Example",
      dividerAbove: true,
      disabled: true
    }, {
      id: "delete",
      label: "Delete",
      onClick: () => console.log("Delete")
    }],
    onSelect: opt => console.log("Selected:", opt.id),
    button: btnProps => <IconButton {...btnProps} aria-label="open menu" color="primary">
        <GridIcon />
      </IconButton>
  },
  parameters: {
    docs: {
      description: {
        story: "You can add a divider before an option with \`dividerAbove\`, and also capture selection centrally via \`onSelect\`."
      }
    }
  }
}`,...(k=(I=l.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var S,D,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    "aria-label": "menu with selected item",
    menuId: "menu-selected",
    options: [{
      id: "profile",
      label: "Very long option name that exceeds typical width",
      onClick: () => console.log("Profile")
    }, {
      id: "settings",
      label: "Settings",
      onClick: () => console.log("Settings"),
      selected: true
    }, {
      id: "logout",
      label: "Logout",
      onClick: () => console.log("Logout")
    }],
    button: btnProps => <IconButton {...btnProps} aria-label="open menu" color="primary">
        <GridIcon />
      </IconButton>
  },
  parameters: {
    docs: {
      description: {
        story: "Use \`selected: true\` on a menu option to visually indicate the current selection when the menu opens (and optionally autofocus it, depending on Menu configuration)."
      }
    }
  }
}`,...(w=(D=s.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};export{i as Default,a as LinkNavigation,l as WithDividerAndOnSelect,r as WithIconsAndDisabled,s as WithSelected,De as __namedExportsOrder,Se as default};
