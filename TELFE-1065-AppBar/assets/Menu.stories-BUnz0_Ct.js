import{j as o}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{M as C}from"./AuthModal-D65iIcNH.js";import{I as t}from"./IconButton-CSRnY2wZ.js";import{G as n,F as x,B}from"./TelicentHorizontalSVG-Ci5Nh0DA.js";import"./DataSetIcon-eLJEtM34.js";import"./UserIcon-o6gncd3f.js";import"./UserProfile-DRQRR7_X.js";import"./Text-D7i5Vapy.js";import"./Chip-BYDdnwPY.js";import"./Divider-BNrRnzv6.js";import"./TreeView-BaiGyGfQ.js";import"./UserProfileContent-89WrbRP9.js";import{B as P}from"./Box-CRiiUqfG.js";import{T as p}from"./Typography-NY1t2oJS.js";import"./jsx-runtime-CB_V9I5Y.js";import"./index-CTjT7uj6.js";import"./constants-P3GksnoQ.js";import"./iframe-IWLKcGdC.js";import"../sb-preview/runtime.js";import"./index-DEWJqUJ8.js";import"./types-CMP91hxZ.js";import"./useTheme-DVRb4tHF.js";import"./identifier-ubkqThfq.js";import"./useTheme-CZEWbKR4.js";import"./GlobalStyles-CqOQHgIj.js";import"./GlobalStyles-DulCgQ73.js";import"./ButtonBase-C9YLNer7.js";import"./styled-DjfdLqg6.js";import"./generateUtilityClasses-axRDXlOb.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./TransitionGroupContext-Bu81adgJ.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./index-CejG0Q0C.js";import"./Popover-DlmTLUyz.js";import"./utils-BfJHuSOI.js";import"./Modal-GSj0T9Pb.js";import"./Paper-DurtPqdU.js";import"./useFormControl-DPKvkoC5.js";import"./useId-DMVUMfb1.js";import"./AdapterDayjs-BEaMQcLJ.js";import"./index-BRV0Se7Z.js";import"./useThemeProps-BCPloJZh.js";import"./useThemeProps-BQrQzAVn.js";import"./TextField-Dp-4Je7P.js";import"./Select-DjoBVcxs.js";import"./Menu-Dz_6jnqr.js";import"./createSvgIcon-BGbWkX_4.js";import"./SvgIcon-nu1RSFLJ.js";import"./createStyled-MF3orRa4.js";import"./IconButton-oAA5JCuL.js";import"./colorManipulator-DHCSb3wy.js";import"./DialogContent-BX05r4Wn.js";import"./Button-BsbypDuV.js";import"./Chip-DrHiCwPe.js";import"./MenuItem-B8oYDPYK.js";import"./dividerClasses-Bl8Ne15h.js";import"./UIThemeProvider-Dfoz0doH.js";import"./ThemeProvider-BnKwSnOu.js";import"./FlexBox-CEMdxTrl.js";import"./Stack-C-VLTEnn.js";import"./styled-D52li5_j.js";import"./LinearProgress-BKbPPN-u.js";import"./Spinner-w6IMOYm1.js";import"./Dialog-DBzAiknu.js";import"./Button-BQmmc_Hj.js";import"./LinkButton-DOLgHIfS.js";import"./FlexGrid-WlHVYxOe.js";import"./Container-CeTulhJU.js";import"./TextField-Bn0OGEgO.js";import"./Select-CNwEk6pf.js";import"./Switch-hsriPZgu.js";import"./DatePicker-AtFJHvOV.js";import"./DateTimePicker-Pe_mHrSx.js";import"./Divider-ALDgEm0R.js";import"./Card-BBAZs1GG.js";import"./CardActions-ahQ16fz_.js";import"./Popover-BqkrEGud.js";import"./Paper-Bbtnvex6.js";import"./ErrorFallback-DmOQLNkI.js";import"./ErrorFallbackText-FisNSYtr.js";import"./ErrorFallbackWrapper-C7MPjQkG.js";import"./Brand-CDA26Tjd.js";import"./MapToggleButtonPresentational-X7PiIpGo.js";import"./Remove-CFsi-mnJ.js";import"./Edit-gSW16YTz.js";const le={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"menu-default"},decorators:e=>o(P,{sx:{margin:"auto"},children:e()})},i={args:{"aria-label":"menu",menuId:"menu-default",options:[{id:"profile",label:"Profile",onClick:()=>console.log("Profile")},{id:"settings",label:"Settings",onClick:()=>console.log("Settings")},{id:"logout",label:"Logout",onClick:()=>console.log("Logout")}],button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})}},r={args:{"aria-label":"menu with icons",menuId:"menu-icons",options:[{id:"grid",label:"View grid",icon:o(p,{variant:"caption",children:o(n,{fontSize:"small",color:"primary"})})},{id:"save",label:"Save",icon:o(p,{variant:"caption",children:o(x,{fontSize:"small",color:"primary"})})},{id:"delete",label:"Delete (disabled)",icon:o(p,{variant:"caption",children:o(B,{color:"primary"})}),disabled:!0}],button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"Menu options can include an optional `icon`, and can be disabled using `disabled: true`."}}}},a={args:{"aria-label":"navigation menu",menuId:"menu-links",options:[{id:"docs",label:"Docs",href:"https://example.com/docs",target:"_blank"},{id:"status",label:"Status",href:"https://example.com/status",target:"_blank"},{id:"support",label:"Support",href:"https://example.com/support",target:"_blank"}],button:e=>o(t,{...e,"aria-label":"open navigation menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"If you provide `href`, the menu item will open a link (defaults to `_self` unless `target` is set)."}}}},l={args:{"aria-label":"menu with divider",menuId:"menu-divider",options:[{id:"edit",label:"Edit",onClick:()=>console.log("Edit")},{id:"duplicate",label:"Duplicate",onClick:()=>console.log("Duplicate")},{id:"disabled",label:"Disabled Example",dividerAbove:!0,disabled:!0},{id:"delete",label:"Delete",onClick:()=>console.log("Delete")}],onSelect:e=>console.log("Selected:",e.id),button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"You can add a divider before an option with `dividerAbove`, and also capture selection centrally via `onSelect`."}}}},s={args:{"aria-label":"menu with selected item",menuId:"menu-selected",options:[{id:"profile",label:"Very long option name that exceeds typical width",onClick:()=>console.log("Profile")},{id:"settings",label:"Settings",onClick:()=>console.log("Settings"),selected:!0},{id:"logout",label:"Logout",onClick:()=>console.log("Logout")}],button:e=>o(t,{...e,"aria-label":"open menu",color:"primary",children:o(n,{})})},parameters:{docs:{description:{story:"Use `selected: true` on a menu option to visually indicate the current selection when the menu opens (and optionally autofocus it, depending on Menu configuration)."}}}};var c,d,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,b,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(w=(D=s.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const se=["Default","WithIconsAndDisabled","LinkNavigation","WithDividerAndOnSelect","WithSelected"];export{i as Default,a as LinkNavigation,l as WithDividerAndOnSelect,r as WithIconsAndDisabled,s as WithSelected,se as __namedExportsOrder,le as default};
