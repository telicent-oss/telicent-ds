import{a as o}from"./iframe-C_A9w9Xb.js";import{I as t}from"./IconButton-DZaun261.js";import"./AppInfoRow-CShKA_AM.js";import"./AppSettings-BpaW4aTJ.js";import{M as C}from"./UserProfileContent-CRSr_rhf.js";import"./Badge-CTGjuVUc.js";import"./Chip-4mXnUy-p.js";import"./Divider-DJS9w1fE.js";import"./ThemeSwitchRow-QiuVBBXJ.js";import{G as n,F as x,B}from"./XIcon-D-mT89jA.js";import"./CogIcon-Xohb8vl0.js";import"./ExpandMoreIcon-BqYNX6oE.js";import"./InfoIcon-CsN7XvfL.js";import"./SvgIcon-BL6aEYyy.js";import"./TableRow-BzcwC7-J.js";import"./Text-VJDIJLPP.js";import"./TreeView-DGUcOfc2.js";import{B as P}from"./Box-DB6K2VlN.js";import{T as p}from"./Typography-BLZTU97p.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-DGQcrcgI.js";import"./clsx-B-dksMZM.js";import"./styled-BxBMGnZ7.js";import"./extendSxProp-DbsjyKNJ.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-DghXKeJ1.js";import"./TransitionGroupContext-BJMJdx4M.js";import"./_IconPopover-DZzlnGrx.js";import"./Box-fYkPIWZP.js";import"./Popover-DKdEqhrZ.js";import"./utils-DHOV5Dn-.js";import"./index-i4WXsvPC.js";import"./index-BHdyBRPi.js";import"./Modal-xQORnQ13.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-r2KoCv7J.js";import"./useSlotProps-aaY8J2bg.js";import"./Paper-DSCOcLrg.js";import"./FlexBox-xFc9aoH-.js";import"./Stack-CcwLWQH2.js";import"./styled-DY34dW0Q.js";import"./createStyled-B7kozB3A.js";import"./useThemeProps-sj6Fs-gH.js";import"./Button-BVdDZnN4.js";import"./MapToggleButtonPresentational-CdT4filz.js";import"./Remove-CC1RGYYl.js";import"./createSvgIcon-i-zQ-M6d.js";import"./SvgIcon-C8_G8FNz.js";import"./Brand-d6OKu9aw.js";import"./LinkButton-jvGGWVn2.js";import"./Skeleton-CuTvwxzQ.js";import"./Skeleton-DWpJL6zw.js";import"./TextField-CPHMgkHr.js";import"./useFormControl-2yPes8mR.js";import"./FormControl-fAwcUdMf.js";import"./ListContext-DDqsAt6U.js";import"./useControlled-3RSfgazB.js";import"./FormHelperText-C73ZFMlI.js";import"./MenuItem-BXjSr2Yp.js";import"./dividerClasses-BaXV3koW.js";import"./Divider-uAMQ62Ay.js";import"./ListItem-CqSEfq_v.js";import"./Toolbar-yZjFEbA8.js";import"./Close-XBuytlI5.js";import"./Popper-PPx8E8Kn.js";import"./Badge-BZZrZQQO.js";import"./Chip-umbtqylA.js";import"./FormControlLabel-TrbeFuul.js";import"./Edit-CwFXdWdx.js";import"./Dialog-C55D5thn.js";import"./DialogContent-C9vdccJg.js";import"./Alert-DbC5Ef0h.js";import"./useSlot-DetFjtbb.js";import"./LinearProgress-CFMEE1Eh.js";import"./LinearProgress-MCxEeQKE.js";import"./Spinner-9Pq1qpOg.js";import"./CircularProgress-BFo9ue-1.js";import"./TextField-CDBDoTkX.js";import"./FormControl-DPrwx_NL.js";import"./FormHelperText-BBL7cKe3.js";import"./LabeledSwitch-iaBcHpl_.js";import"./Switch-Bx0dlzK_.js";import"./Switch-DvW86pnT.js";import"./RadioGroup-D0W8_lBw.js";import"./Container-C4ujFY5f.js";import"./ToggleButton-DvpTABDR.js";import"./ToggleButton-Czzc7CD5.js";import"./ToggleButtonGroup-C2sUNclb.js";import"./MenuItem-BjrtayUA.js";import"./Tabs-CvGfBwpz.js";import"./AccordionSummary-J3dFvStq.js";import"./Collapse-jyqoWJz2.js";import"./index-BQ8CXDCk.js";import"./Paper-BUzr6iGG.js";import"./ErrorFallback-BWZMsFtf.js";import"./ErrorFallbackText-CBna-xSZ.js";import"./ErrorFallbackWrapper-CXtFrO_G.js";import"./TableCell-DIcGZfcO.js";import"./useThemeProps-mFM7TQzY.js";const Se={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
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
