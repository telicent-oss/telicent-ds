import{a as o}from"./iframe-H00w80Or.js";import{M as C}from"./DropdownButton-dp3UZT7u.js";import{I as t}from"./IconButton-DlbSnkMX.js";import{G as n,F as x,B}from"./ExpandLessIcon-BszsM4qE.js";import"./CogIcon-yzQkEaTn.js";import"./InfoIcon-KXnvf3xk.js";import"./ExpandMoreIcon-CmOQf-OW.js";import"./ThemeSwitchRow-DC0I62HD.js";import"./Text-wA3ZXyxz.js";import"./Badge-D-W6c0gw.js";import"./Chip-DKIonNZh.js";import"./Divider-pZ3IXV4I.js";import"./TreeView-DIg7qFOg.js";import"./AppInfoRow-kOozOQgV.js";import"./AppSettings-D-4IsWrA.js";import"./SvgIcon-8QThMI5m.js";import"./TableRow-uDW1Sb-b.js";import{B as P}from"./Box-PGTe_iKL.js";import{T as p}from"./Typography-BeNp4hZk.js";import"./preload-helper-C1FmrZbK.js";import"./ListItem-CIX3erCJ.js";import"./clsx-B-dksMZM.js";import"./styled-0iMzvdEp.js";import"./extendSxProp-DjNpUFg0.js";import"./ListContext-JPB_oyLb.js";import"./FormControl-DgKeLVgZ.js";import"./useFormControl-IvUXOtj3.js";import"./composeClasses-fLhin0tj.js";import"./TransitionGroupContext-BzdPLesw.js";import"./resolveComponentProps-BEZJTj5A.js";import"./ButtonBase-q86Xzq01.js";import"./Toolbar-B8bYqEFU.js";import"./TextField-gd7MEMhf.js";import"./Modal-4pBuhtQR.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-lvm_v48l.js";import"./index-CtDoTQ8v.js";import"./utils-D2gZUpWj.js";import"./Popover-FTtalKAU.js";import"./Paper-ufb6o8lk.js";import"./useControlled-Bn2nyR_9.js";import"./createSvgIcon-CiVlnnHz.js";import"./SvgIcon-62q7EVQn.js";import"./FormHelperText-Byk_ugW2.js";import"./Close-BjCtc8xA.js";import"./Popper-4ejOxVhQ.js";import"./Badge-C0V1iWjJ.js";import"./Chip-CIeLwZjP.js";import"./IconButton-B-TGVwcE.js";import"./FormControlLabel-DT2ODpRX.js";import"./Stack-D4ylMwmH.js";import"./styled-DEANjgQR.js";import"./createStyled-BS21KARw.js";import"./useThemeProps-BwLca_Tx.js";import"./MenuItem-DdlDr0ZH.js";import"./dividerClasses-BFp8x9AY.js";import"./FlexBox-CO2h70Gz.js";import"./useSlot-28dyUGlP.js";import"./LinearProgress-DtO0fbZP.js";import"./LinearProgress-B2fSExrt.js";import"./Spinner-CF6arQiu.js";import"./CircularProgress-CjEAu3fq.js";import"./Dialog-C8r9bZj8.js";import"./DialogContent-3cYYjIfQ.js";import"./Button-C_DxOEgn.js";import"./MapToggleButtonPresentational-BZf2zw2H.js";import"./Remove-D7AlsKhh.js";import"./Alert-BlUYh8NQ.js";import"./ToggleButton-CTbh2YDH.js";import"./ToggleButton-BENVC70c.js";import"./ToggleButtonGroup-BrXjNDoG.js";import"./LinkButton-DU5juLDL.js";import"./Box-BPWUYpPq.js";import"./Container-xAch6yKK.js";import"./TextField-vmXQ439n.js";import"./Divider-dkPyhD-7.js";import"./Switch-CZks5nrW.js";import"./Switch-nDSeyWnc.js";import"./LabeledSwitch-CPePvXi_.js";import"./RadioGroup-QDFk1CAT.js";import"./FormControl-Ddw-GhPc.js";import"./FormHelperText-Bmn0upHu.js";import"./Tabs-DPrcsUlF.js";import"./MenuItem-RCWgR922.js";import"./AccordionDetails-Dbo1O38p.js";import"./Collapse-BhPshysv.js";import"./index-DroXl4b1.js";import"./_IconPopover-DihhQVMX.js";import"./Paper-BJSr6UaX.js";import"./ErrorFallback-C0XWCyRr.js";import"./ErrorFallbackText-BCpI9Vcj.js";import"./ErrorFallbackWrapper-LbAdlq-T.js";import"./Brand-BCpYs0jj.js";import"./Edit-B-OE2jTa.js";import"./useThemeProps-C79kCelR.js";import"./TableCell-DFC8CWhZ.js";const ve={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
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
}`,...(w=(D=s.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const Ie=["Default","WithIconsAndDisabled","LinkNavigation","WithDividerAndOnSelect","WithSelected"];export{i as Default,a as LinkNavigation,l as WithDividerAndOnSelect,r as WithIconsAndDisabled,s as WithSelected,Ie as __namedExportsOrder,ve as default};
