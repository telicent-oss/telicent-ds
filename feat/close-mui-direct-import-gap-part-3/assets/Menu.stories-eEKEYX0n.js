import{a as o}from"./iframe-aFe7UUBz.js";import{M as C}from"./DropdownButton-CGpi1hqS.js";import{I as t}from"./_IconPopover-YVipcYc4.js";import{G as n,F as x,B}from"./ExpandLessIcon-_Gn5GBEU.js";import"./CogIcon-Dzw3a1eq.js";import"./InfoIcon-DtypYTQN.js";import"./ExpandMoreIcon-CXldgYGR.js";import"./ThemeSwitchRow-Dg_y3FM8.js";import"./Text-DzLxPjqb.js";import"./Chip-CUl3csw_.js";import"./Divider-Dp_aJAS1.js";import"./TreeView-CZ0g_WUA.js";import"./AppInfoRow-F3c1S5e4.js";import"./AppSettings-DScsrM9R.js";import"./SvgIcon-Bpd7uWoU.js";import"./TableRow-b_2L1XJo.js";import"./DataGrid-DvrmVkGc.js";import{B as P}from"./Box-C4GBjpR7.js";import{T as p}from"./Typography-BW_wQ-ow.js";import"./preload-helper-C1FmrZbK.js";import"./AdapterDayjs-KkvHR9Mv.js";import"./index-BZ_yw_br.js";import"./generateUtilityClass-DYVh7KgR.js";import"./styled-BisXqFak.js";import"./extendSxProp-Cg1_Zgz3.js";import"./useThemeProps-BXD491Jy.js";import"./useThemeProps-wiEASLar.js";import"./Modal-B6NB2nb_.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-CzKtgD_a.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-COer71JX.js";import"./generateUtilityClasses-g9ufi11G.js";import"./index-BCoUhWCm.js";import"./utils-DumdPjpW.js";import"./composeClasses-fLhin0tj.js";import"./Popover-DAqhZQe9.js";import"./Paper-Dibq-B0l.js";import"./InputAdornment-CZufPfa6.js";import"./useFormControl-BWvbFyMh.js";import"./TextField-BJ5r44lN.js";import"./FormControl-Drt8KI8a.js";import"./ListContext-BI1i6AEx.js";import"./useControlled-DSueLwQ1.js";import"./createSvgIcon-B8v7KFIv.js";import"./SvgIcon--evEnJni.js";import"./FormHelperText-B1iyLw_g.js";import"./createStyled-BGui5uB2.js";import"./IconButton-B1f28KGp.js";import"./ButtonBase--L73nkrK.js";import"./DialogContent-BK3fYsXw.js";import"./Button-i5m3WpsB.js";import"./Chip-jnP50xz1.js";import"./FlexBox-CmBTY25V.js";import"./Stack-DONLWdUd.js";import"./styled-pNRJu87k.js";import"./useSlot-CmIeWFIT.js";import"./LinearProgress-khjbRmBd.js";import"./LinearProgress-DoDInf46.js";import"./Spinner-CWY5xgQX.js";import"./CircularProgress-C8hIlNO3.js";import"./Dialog-DRC_GMD1.js";import"./MapToggleButtonPresentational-JgXdEZxi.js";import"./Remove-BYWHJlSb.js";import"./Alert-DqW_EzS7.js";import"./Close-EYRLp0W2.js";import"./ToggleButton-DfTYlbw3.js";import"./ToggleButton-d-GapL7d.js";import"./LinkButton-17csqiIs.js";import"./Box-D3NLLewX.js";import"./Container-SU972UVC.js";import"./TextField-Cx5VJ8ov.js";import"./MenuItem-BksAsHXH.js";import"./dividerClasses-ClH17Faz.js";import"./Divider-D0LHX0qm.js";import"./Switch-4P0ZX1Dh.js";import"./Switch-CYakBrxK.js";import"./FormControlLabel-AQIEhTjn.js";import"./LabeledSwitch-CLOpL5K_.js";import"./DatePicker-BxrT-zy4.js";import"./DateTimePicker-Di_rakTc.js";import"./Tabs-D7uWqjx4.js";import"./LocalizationProvider-BHfuR2cp.js";import"./RadioGroup-OxucSz7v.js";import"./FormControl-DEBxrS_-.js";import"./FormHelperText-4VYnSz9d.js";import"./MenuItem-CpN00EoB.js";import"./AccordionDetails-fAqhD8kD.js";import"./Collapse-_-rzgl6R.js";import"./Paper-B-DWjYaW.js";import"./ErrorFallback-DGzzW2Jr.js";import"./ErrorFallbackText-B_Z_nAtZ.js";import"./ErrorFallbackWrapper-CBwm4dqE.js";import"./Brand-GlYAhSh3.js";import"./Edit-qB64VPbS.js";import"./TableCell-BAKDulqq.js";import"./index-hVAbpQul.js";import"./Skeleton-BYYXkkHT.js";const Ie={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"menu-default"},decorators:e=>o(P,{sx:{margin:"auto"},children:e()})},i={args:{"aria-label":"menu",menuId:"menu-default",options:[{id:"profile",label:"Profile",onClick:()=>console.log("Profile")},{id:"settings",label:"Settings",onClick:()=>console.log("Settings")},{id:"logout",label:"Logout",onClick:()=>console.log("Logout")}],button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})}},r={args:{"aria-label":"menu with icons",menuId:"menu-icons",options:[{id:"grid",label:"View grid",icon:o(p,{variant:"caption",children:o(n,{fontSize:"small",color:"primary"})})},{id:"save",label:"Save",icon:o(p,{variant:"caption",children:o(x,{fontSize:"small",color:"primary"})})},{id:"delete",label:"Delete (disabled)",icon:o(p,{variant:"caption",children:o(B,{color:"primary"})}),disabled:!0}],button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"Menu options can include an optional `icon`, and can be disabled using `disabled: true`."}}}},a={args:{"aria-label":"navigation menu",menuId:"menu-links",options:[{id:"docs",label:"Docs",href:"https://example.com/docs",target:"_blank"},{id:"status",label:"Status",href:"https://example.com/status",target:"_blank"},{id:"support",label:"Support",href:"https://example.com/support",target:"_blank"}],button:e=>o(t,{...e,"aria-label":"open navigation menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"If you provide `href`, the menu item will open a link (defaults to `_self` unless `target` is set)."}}}},l={args:{"aria-label":"menu with divider",menuId:"menu-divider",options:[{id:"edit",label:"Edit",onClick:()=>console.log("Edit")},{id:"duplicate",label:"Duplicate",onClick:()=>console.log("Duplicate")},{id:"disabled",label:"Disabled Example",dividerAbove:!0,disabled:!0},{id:"delete",label:"Delete",onClick:()=>console.log("Delete")}],onSelect:e=>console.log("Selected:",e.id),button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"You can add a divider before an option with `dividerAbove`, and also capture selection centrally via `onSelect`."}}}},s={args:{"aria-label":"menu with selected item",menuId:"menu-selected",options:[{id:"profile",label:"Very long option name that exceeds typical width",onClick:()=>console.log("Profile")},{id:"settings",label:"Settings",onClick:()=>console.log("Settings"),selected:!0},{id:"logout",label:"Logout",onClick:()=>console.log("Logout")}],button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"Use `selected: true` on a menu option to visually indicate the current selection when the menu opens (and optionally autofocus it, depending on Menu configuration)."}}}};var c,m,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(w=(D=s.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const ke=["Default","WithIconsAndDisabled","LinkNavigation","WithDividerAndOnSelect","WithSelected"];export{i as Default,a as LinkNavigation,l as WithDividerAndOnSelect,r as WithIconsAndDisabled,s as WithSelected,ke as __namedExportsOrder,Ie as default};
