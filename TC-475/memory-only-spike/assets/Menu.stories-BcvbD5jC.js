import{a as o}from"./iframe-RnQnoQX8.js";import{I as t}from"./IconButton-B6c5afDL.js";import"./AppInfoRow-BeFe7p8y.js";import"./AppSettings-D5gbX9uT.js";import{M as C}from"./UserProfileContent-CMKr3g_m.js";import"./Badge-DKp5H5jh.js";import"./Chip-XC4RVids.js";import"./Divider-dOkWtiDQ.js";import"./ThemeSwitchRow-CTIMiD2z.js";import{G as n,F as x,B}from"./XIcon-CCibX9oC.js";import"./CogIcon-CIdE7un1.js";import"./ExpandMoreIcon-BSEHq4MR.js";import"./InfoIcon-D6Exs_Xw.js";import"./SvgIcon-C0tF2EOt.js";import"./TableRow-BLgmD9P-.js";import"./Text-ByuSSYGz.js";import"./TreeView-BqpNoiiq.js";import{B as P}from"./Box-Bw31xyk6.js";import{T as p}from"./Typography-DBvs_soa.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton--ocr3Hbq.js";import"./clsx-B-dksMZM.js";import"./styled-CHUqJEZN.js";import"./extendSxProp-CBh2QTe4.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-DI6HdjXk.js";import"./TransitionGroupContext-CBVDQk4P.js";import"./_IconPopover-CobC4KUZ.js";import"./Box-W8ovBlmy.js";import"./Popover-MwJ0-EW_.js";import"./utils-bvnqZ63E.js";import"./index-DRTkc6c-.js";import"./index-BNYStkyE.js";import"./Modal-v8QLfI2w.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-FxkCCCo6.js";import"./useSlotProps-DgvSFONu.js";import"./Paper-_jcYEZaX.js";import"./FlexBox-DsO7ubDs.js";import"./Stack-CrylB_Fp.js";import"./styled-eZ5xdzZ3.js";import"./createStyled-CPPTetpG.js";import"./useThemeProps-CmFLLsEv.js";import"./Button-Cv-t7gt4.js";import"./MapToggleButtonPresentational-Da4cOXhB.js";import"./Remove-7Y2EcPpw.js";import"./createSvgIcon-DEQxKW2j.js";import"./SvgIcon-BvuMPYna.js";import"./Brand-D9g93ilS.js";import"./LinkButton-BUW8XXKD.js";import"./Skeleton-DCTvNfgq.js";import"./Skeleton-C0XYBYTl.js";import"./TextField-C1cT5Aao.js";import"./useFormControl-BDkUgp4y.js";import"./FormControl-DuXM5IYN.js";import"./ListContext-BvKyAyz9.js";import"./useControlled-BiJlVKlY.js";import"./FormHelperText-Cnr2UHSD.js";import"./MenuItem-BAkMVuqq.js";import"./dividerClasses-CbcYRHVe.js";import"./Divider-D4m18Epw.js";import"./ListItem-CZpNJal7.js";import"./Toolbar-BU64nVx5.js";import"./Close-B1WU-_xu.js";import"./Popper-DO2lmnhT.js";import"./Badge-Dkt0jcpj.js";import"./Chip-Dl-4X4p2.js";import"./FormControlLabel-vRc02SQa.js";import"./Edit-WtWCEqSy.js";import"./Dialog-hrhG2Ut0.js";import"./DialogContent-D2_KaIGY.js";import"./Alert-C_oszVvC.js";import"./useSlot-DqjjmsZB.js";import"./LinearProgress-CyEm_RB3.js";import"./LinearProgress-BAZ9C-Px.js";import"./Spinner-sBOybquN.js";import"./CircularProgress-ChGQDyoU.js";import"./TextField-DraT1S6N.js";import"./FormControl-DbhJZSNC.js";import"./FormHelperText-Ce917Gi3.js";import"./LabeledSwitch-Cd6X1CbS.js";import"./Switch-BQR1ScOG.js";import"./Switch-khoc8YVO.js";import"./RadioGroup-CSCckcNR.js";import"./Container-BwVzxpaS.js";import"./ToggleButton-id5d8vke.js";import"./ToggleButton-BHbbn58Z.js";import"./ToggleButtonGroup-CIB7dpuM.js";import"./MenuItem-CLiTILFp.js";import"./Tabs-SnAko9mR.js";import"./AccordionSummary-D36Wvqua.js";import"./Collapse-DT_Z5Ga5.js";import"./index-BAXa6WLZ.js";import"./Paper-xZIfXiq-.js";import"./ErrorFallback-3sgzHsBs.js";import"./ErrorFallbackText-_T9Q39fP.js";import"./ErrorFallbackWrapper-rfGejkDn.js";import"./TableCell-Cmmt5y6X.js";import"./useThemeProps-Gx6XDnDx.js";const Se={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
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
