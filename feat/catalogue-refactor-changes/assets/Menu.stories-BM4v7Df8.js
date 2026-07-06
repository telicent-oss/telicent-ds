import{j as e}from"./iframe-2a6KH_Y2.js";import{M as C,I as t}from"./DropdownButton-ee1y9LC3.js";import{G as o,F as x,B}from"./UserIcon-DsHhd6fS.js";import"./Text-kR8p7DIq.js";import"./Chip-CU7LtMVk.js";import"./Divider-wOcP7z2O.js";import"./TreeView-DYsm38IX.js";import{B as P}from"./Box-UIDy46IG.js";import{T as c}from"./Typography-DrPsKv4d.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-BL2jWHZa.js";import"./useThemeProps-vJmRtplj.js";import"./useTheme-Cx6vnF0r.js";import"./AdapterDayjs-DDbCIOBk.js";import"./styled-DgdLtGG_.js";import"./Modal-DJ8VBj3p.js";import"./utils-D2GhKSPk.js";import"./TransitionGroupContext-DW3H988m.js";import"./index-DrFhovnn.js";import"./generateUtilityClasses-CVtZWfJL.js";import"./TextField-BNf4QAhE.js";import"./useFormControl-CJp2h8rR.js";import"./Paper-BSuha06s.js";import"./createSvgIcon-D_wZWHy4.js";import"./createStyled-DxFvKydN.js";import"./IconButton-iUn1E9on.js";import"./ButtonBase-CsM7vvGl.js";import"./DialogContent-B_353Kkw.js";import"./Button-U2NznJnU.js";import"./Chip-D4g1B89E.js";import"./DateTimePicker-5YrKsRJP.js";import"./Divider-D9DUnApf.js";import"./Stack-CojT_K4F.js";import"./styled-D3ZZnIDk.js";import"./LinearProgress-Di7e5FGy.js";import"./Spinner-A93-VFYS.js";import"./Dialog-CK4FehKs.js";import"./MapToggleButtonPresentational-BLFCwFJH.js";import"./Remove-CI5wx82-.js";import"./TextField-CfA3Y3m5.js";import"./Switch-DtkAca1Z.js";import"./DatePicker-DaayXdth.js";import"./Container-Du9KxdkV.js";import"./LinkButton-Cms5QcfP.js";import"./Paper-wbthJljv.js";import"./ErrorFallback-uzjZCzEW.js";import"./ErrorFallbackText-B9n1SuaO.js";import"./ErrorFallbackWrapper-CvVKmhKf.js";import"./Brand-B-imz1vn.js";import"./constants-a7scF7as.js";import"./Edit-BAp5m9tO.js";const xe={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
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
`}},id:"menu-default"},decorators:n=>e(P,{sx:{margin:"auto"},children:n()})},i={args:{"aria-label":"menu",menuId:"menu-default",options:[{id:"profile",label:"Profile",onClick:()=>console.log("Profile")},{id:"settings",label:"Settings",onClick:()=>console.log("Settings")},{id:"logout",label:"Logout",onClick:()=>console.log("Logout")}],button:n=>e(t,{...n,"aria-label":"open menu",color:"primary",children:e(o,{})})}},a={args:{"aria-label":"menu with icons",menuId:"menu-icons",options:[{id:"grid",label:"View grid",icon:e(c,{variant:"caption",children:e(o,{fontSize:"small",color:"primary"})})},{id:"save",label:"Save",icon:e(c,{variant:"caption",children:e(x,{fontSize:"small",color:"primary"})})},{id:"delete",label:"Delete (disabled)",icon:e(c,{variant:"caption",children:e(B,{color:"primary"})}),disabled:!0}],button:n=>e(t,{...n,"aria-label":"open menu",color:"primary",children:e(o,{})})},parameters:{docs:{description:{story:"Menu options can include an optional `icon`, and can be disabled using `disabled: true`."}}}},r={args:{"aria-label":"navigation menu",menuId:"menu-links",options:[{id:"docs",label:"Docs",href:"https://example.com/docs",target:"_blank"},{id:"status",label:"Status",href:"https://example.com/status",target:"_blank"},{id:"support",label:"Support",href:"https://example.com/support",target:"_blank"}],button:n=>e(t,{...n,"aria-label":"open navigation menu",color:"primary",children:e(o,{})})},parameters:{docs:{description:{story:"If you provide `href`, the menu item will open a link (defaults to `_self` unless `target` is set)."}}}},l={args:{"aria-label":"menu with divider",menuId:"menu-divider",options:[{id:"edit",label:"Edit",onClick:()=>console.log("Edit")},{id:"duplicate",label:"Duplicate",onClick:()=>console.log("Duplicate")},{id:"disabled",label:"Disabled Example",dividerAbove:!0,disabled:!0},{id:"delete",label:"Delete",onClick:()=>console.log("Delete")}],onSelect:n=>console.log("Selected:",n.id),button:n=>e(t,{...n,"aria-label":"open menu",color:"primary",children:e(o,{})})},parameters:{docs:{description:{story:"You can add a divider before an option with `dividerAbove`, and also capture selection centrally via `onSelect`."}}}},s={args:{"aria-label":"menu with selected item",menuId:"menu-selected",options:[{id:"profile",label:"Very long option name that exceeds typical width",onClick:()=>console.log("Profile")},{id:"settings",label:"Settings",onClick:()=>console.log("Settings"),selected:!0},{id:"logout",label:"Logout",onClick:()=>console.log("Logout")}],button:n=>e(t,{...n,"aria-label":"open menu",color:"primary",children:e(o,{})})},parameters:{docs:{description:{story:"Use `selected: true` on a menu option to visually indicate the current selection when the menu opens (and optionally autofocus it, depending on Menu configuration)."}}}};var p,d,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,b,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,y,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,I,k;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(D=s.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const Be=["Default","WithIconsAndDisabled","LinkNavigation","WithDividerAndOnSelect","WithSelected"];export{i as Default,r as LinkNavigation,l as WithDividerAndOnSelect,a as WithIconsAndDisabled,s as WithSelected,Be as __namedExportsOrder,xe as default};
