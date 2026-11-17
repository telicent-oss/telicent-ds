import{a as o}from"./iframe-DgB5DOOK.js";import{I as t}from"./IconButton-Cj-3dO6Q.js";import"./AppInfoRow-CeJwZqED.js";import"./AppSettings-BNO02vyz.js";import{M as C}from"./UserProfileContent-DWmBNlHz.js";import"./Badge-jcWGJ-ob.js";import"./Chip-BfLzWb3z.js";import"./Divider-BM3QVx1-.js";import"./ThemeSwitchRow-DfVigJG0.js";import{G as n,F as x,B}from"./XIcon-VEg9iy4g.js";import"./CogIcon--qSeQQYv.js";import"./ExpandMoreIcon-GTPNzf5m.js";import"./InfoIcon-D991cygI.js";import"./SvgIcon-CZ0P8_U4.js";import"./TableRow-BhnodZ9D.js";import"./Text-D7_q6jLQ.js";import"./TreeView-CzefoKm9.js";import{B as P}from"./Box-BKgVgTA7.js";import{T as p}from"./Typography-BF7sK5Ae.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-D20y2IYX.js";import"./clsx-B-dksMZM.js";import"./styled-C2IgeKa1.js";import"./extendSxProp-BWF_iEjT.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-37dGzeCY.js";import"./TransitionGroupContext-DZPXUZjI.js";import"./_IconPopover-ujUl4F4j.js";import"./Box-lNHAZIk0.js";import"./Popover-H8c48_my.js";import"./utils-C3Jk0TUt.js";import"./index-DQlIAx8_.js";import"./index-HokJ49V1.js";import"./Modal-CTU41rng.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-CE999ugD.js";import"./useSlotProps-Jx-sIlO7.js";import"./Paper-CfxavN5N.js";import"./FlexBox-rNRJ5qOl.js";import"./Stack-DSlyJ0-P.js";import"./styled-CSa8JTl7.js";import"./createStyled-Cr_yrpzs.js";import"./useThemeProps-Cv6lQb1Z.js";import"./Button-yhUhh5rC.js";import"./MapToggleButtonPresentational-BH1dZTqP.js";import"./Remove-DU6di_qq.js";import"./createSvgIcon-buxlCkbb.js";import"./SvgIcon-B7PwMVYn.js";import"./Brand-CNlSU-fT.js";import"./LinkButton-K1pKYT9-.js";import"./Skeleton-DalovIMe.js";import"./Skeleton-dAzTvYwV.js";import"./TextField-CWkT05Xq.js";import"./useFormControl-C1QvXYzQ.js";import"./FormControl-C7ixcWY7.js";import"./ListContext-D16S_6sV.js";import"./useControlled-BxoUib7D.js";import"./FormHelperText-B_G7GOx3.js";import"./MenuItem-BpR-NCbk.js";import"./dividerClasses-DLOnW1Qs.js";import"./Divider-B1R26w1K.js";import"./ListItem-DgR4_kwz.js";import"./Toolbar-D-_K5ffV.js";import"./Close-RAdmLMOk.js";import"./Popper-4C-oHIR9.js";import"./Badge-SkVSrEOx.js";import"./Chip-BbjdBAAm.js";import"./FormControlLabel-BEFCwgAZ.js";import"./Edit-6-OjV0-m.js";import"./Dialog-BRVCmQfd.js";import"./DialogContent-CKLJHH2b.js";import"./Alert-B3-1Er1S.js";import"./useSlot-V0kD_uWO.js";import"./LinearProgress-CauuDUEI.js";import"./LinearProgress-DHQnu2TY.js";import"./Spinner-DNEUjWM6.js";import"./CircularProgress-vEt8I-xb.js";import"./TextField-By1fm5Ld.js";import"./FormControl-CG1fKJho.js";import"./FormHelperText-Cx6ksy42.js";import"./LabeledSwitch-0HSP2kfR.js";import"./Switch-DA9rneG8.js";import"./Switch-DhiRFrM7.js";import"./RadioGroup-BaCjTbVF.js";import"./Container-C0Xc2FRN.js";import"./ToggleButton-B4UHGI52.js";import"./ToggleButton-Bs18IMrD.js";import"./ToggleButtonGroup-D0tbUhZv.js";import"./MenuItem-BIurvtuG.js";import"./Tabs-DQ5Yd--o.js";import"./AccordionSummary-BjeUD95x.js";import"./Collapse-DbztTgdD.js";import"./index-DW9QV88U.js";import"./Paper-Bd2hcL_j.js";import"./ErrorFallback-CRTMDqB9.js";import"./ErrorFallbackText-11peTATx.js";import"./ErrorFallbackWrapper-Bwlh2Dtv.js";import"./TableCell-B5sas6rL.js";import"./useThemeProps-B2nAv7Dy.js";const Se={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
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
