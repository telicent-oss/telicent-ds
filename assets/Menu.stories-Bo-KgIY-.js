import{a as o}from"./iframe-BRZEQbLf.js";import{M as C}from"./DropdownButton-N7mOiPnB.js";import{I as t}from"./_IconPopover-CjPnZK6_.js";import{G as n,F as x,B}from"./ExpandLessIcon-CRw7mH6i.js";import"./CogIcon-CYAkKwBZ.js";import"./InfoIcon-gVxMZ7aF.js";import"./ExpandMoreIcon-CodnJQ1t.js";import"./ThemeSwitchRow-BHEJY-8w.js";import"./Text-DMBl0hvr.js";import"./Chip-DEZNB5qQ.js";import"./Divider-DfQyPts_.js";import"./TreeView-BNZRdyEt.js";import"./AppInfoRow-ClgwB6er.js";import"./AppSettings-thUazhA0.js";import"./SvgIcon-CCghYlx6.js";import"./TableRow-BNDJvZVS.js";import"./DataGrid-CtLBQ2rA.js";import{B as P}from"./Box-C-Jkwpue.js";import{T as p}from"./Typography-zyOAXgEh.js";import"./preload-helper-C1FmrZbK.js";import"./AdapterDayjs-CiGj10BE.js";import"./index-COkuDLt1.js";import"./clsx-B-dksMZM.js";import"./styled-B4tr5Gpt.js";import"./extendSxProp-DVGYUDL2.js";import"./useThemeProps-D0DlkUpD.js";import"./useThemeProps-CoXr1FEd.js";import"./Modal-B2KfxTDw.js";import"./ownerDocument-DW-IO8s5.js";import"./TransitionGroupContext-BvGHbgO8.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-CbHM54-A.js";import"./index-BDWDU8-z.js";import"./utils-Cyajf9FY.js";import"./composeClasses-fLhin0tj.js";import"./Popover-D2KkDtRr.js";import"./Paper-e6uvZaws.js";import"./InputAdornment-BfwQk9eb.js";import"./useFormControl-Co9F6LxC.js";import"./TextField-Bebx8VFJ.js";import"./FormControl-C-aOZzhL.js";import"./ListContext-I50NLL-h.js";import"./useControlled-D1dqjRMI.js";import"./createSvgIcon-oad7o5IJ.js";import"./SvgIcon-Cw9EbMaS.js";import"./FormHelperText-BQ_DNaGt.js";import"./createStyled-C9tzuBR8.js";import"./IconButton-DVslTQgr.js";import"./ButtonBase-HJ4mmBfm.js";import"./DialogContent-CFFTpGiD.js";import"./Button-CUHSn2HN.js";import"./Chip-BprlDat8.js";import"./FlexBox-tS4lfUQV.js";import"./Stack-B7JViYfU.js";import"./styled-D3McFGwu.js";import"./useSlot-Da5iOCrs.js";import"./LinearProgress-CUlx6isd.js";import"./LinearProgress-B8OYi-3g.js";import"./Spinner-IqwRn4dW.js";import"./CircularProgress-D9PR8cnY.js";import"./Dialog-DSKAGJMO.js";import"./MapToggleButtonPresentational-BS9z7Dku.js";import"./Remove-CWBxjnqT.js";import"./Alert-Df9Ot4b9.js";import"./Close-DWL9XO9n.js";import"./ToggleButton-CFbnS39h.js";import"./ToggleButton-DYW4-3w7.js";import"./ToggleButtonGroup-B4rhHnrt.js";import"./LinkButton-DQmtcsO3.js";import"./Box-Ssrk9oiz.js";import"./Container-F_s21ndw.js";import"./TextField-Dmzeh5Vn.js";import"./MenuItem--HWde8Qw.js";import"./dividerClasses-CUMrjw2R.js";import"./Divider-C9VN5X_l.js";import"./Switch-BQ28hVZN.js";import"./Switch-DLYnFPqF.js";import"./FormControlLabel-RsIdwsU5.js";import"./LabeledSwitch-Qta80UJb.js";import"./DatePicker-kXhjc28H.js";import"./DateTimePicker-KkImEtet.js";import"./Tabs-3USXMiN9.js";import"./LocalizationProvider-I81jBPQe.js";import"./RadioGroup-CVVu-mNd.js";import"./FormControl-Bh6ylgh2.js";import"./FormHelperText-eEO_7Hve.js";import"./MenuItem-CELqUZNo.js";import"./AccordionDetails-BU2K71MQ.js";import"./Collapse-DspQfHEJ.js";import"./Paper-B8J14Eb1.js";import"./ErrorFallback-DNF8piMD.js";import"./ErrorFallbackText-DFl1Netk.js";import"./ErrorFallbackWrapper-C5T8ZSzH.js";import"./Brand-DmInPiXq.js";import"./Edit-rGVb-MEj.js";import"./TableCell-Dtrs0rAS.js";import"./index-CFm5lWVH.js";import"./Skeleton-rphQfOFS.js";const Ie={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
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
