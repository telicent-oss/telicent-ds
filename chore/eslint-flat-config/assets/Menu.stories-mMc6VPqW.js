import{a as o}from"./iframe-DZvJTdLH.js";import{I as t}from"./IconButton-8pZ9K19z.js";import"./AppInfoRow-BnZOAG2R.js";import"./AppSettings-CwOueJgv.js";import{M as C}from"./UserProfileContent-BecRDo52.js";import"./Badge-CXcYRuuH.js";import"./Chip-DOiPte_Q.js";import"./Divider-Bt0PK1Em.js";import"./ThemeSwitchRow-PZEOW11l.js";import{G as n,F as x,B}from"./XIcon-QAa36Zq2.js";import"./CogIcon-CIuYjsyA.js";import"./ExpandMoreIcon-CoyOjiP1.js";import"./InfoIcon-zRlouagw.js";import"./SvgIcon-DjOKORyd.js";import"./TableRow-B_USo3AD.js";import"./Text-CeICp6tE.js";import"./TreeView-2KoVSPL2.js";import{B as P}from"./Box-BKngloQ-.js";import{T as p}from"./Typography-CMsNHFNw.js";import"./preload-helper-Dp1pzeXC.js";import"./IconButton-DUdtZIUE.js";import"./clsx-B-dksMZM.js";import"./styled-CYiE1R_0.js";import"./extendSxProp-CJf5Ylsc.js";import"./composeClasses-fLhin0tj.js";import"./ButtonBase-Gs2OW64u.js";import"./TransitionGroupContext-DW-CadkF.js";import"./_IconPopover-C-5OzzCa.js";import"./Box-oyFUK34N.js";import"./Popover-DCCxxHyt.js";import"./utils-BojYxu5F.js";import"./index-BeNEZCo_.js";import"./index-DZKKb8Ei.js";import"./Modal-B-Jrfzth.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./resolveComponentProps-CGbu6pRn.js";import"./useSlotProps-D1CGgc7b.js";import"./Paper-CCIRRnYl.js";import"./FlexBox-DqoSphCj.js";import"./Stack-Tdm1puzf.js";import"./styled-D3T-GcQA.js";import"./createStyled-DCQOt2Af.js";import"./useThemeProps-DukH9-pI.js";import"./Button-_W7uhZIP.js";import"./MapToggleButtonPresentational-Bv15blBa.js";import"./Remove-DfAAsDlO.js";import"./createSvgIcon-DAAJopla.js";import"./SvgIcon-Dh5ZJP-b.js";import"./Brand-fdaXkxaR.js";import"./LinkButton-oo7B018k.js";import"./Skeleton-oWp-lzGI.js";import"./Skeleton-B6kfoS7x.js";import"./TextField--zteS9Z3.js";import"./useFormControl-DRohniRh.js";import"./FormControl-CMWNxSpD.js";import"./ListContext-IkSGtFSk.js";import"./useControlled-CMjA5emF.js";import"./FormHelperText-DSqqnB4u.js";import"./MenuItem-BbOJvVrz.js";import"./dividerClasses-DXr8v9nN.js";import"./Divider-Co3nspBN.js";import"./ListItem-BW1ZgJz6.js";import"./Toolbar-BUoDdB4_.js";import"./Close-HI-kgcXD.js";import"./Popper-FEDRhdQ8.js";import"./Badge-DAQPuUGC.js";import"./Chip-D0ft7hQi.js";import"./FormControlLabel-W0LRkKmU.js";import"./Edit-7kV_dAD-.js";import"./Dialog-DSHn1z9S.js";import"./DialogContent-B0W5F4Cx.js";import"./Alert-CcKbQcmF.js";import"./useSlot-CzbqdBW5.js";import"./LinearProgress-D96_7Ef0.js";import"./LinearProgress-CkoUAzn0.js";import"./Spinner-MO7bqc-q.js";import"./CircularProgress-CyLAzHGZ.js";import"./TextField-C7If2Wuf.js";import"./FormControl-CDX6nODe.js";import"./FormHelperText-CLInVfCn.js";import"./LabeledSwitch-CLfoxOWm.js";import"./Switch-BTn852xS.js";import"./Switch-D4XwAo5L.js";import"./RadioGroup-CHruPiDE.js";import"./Container-BneX2xXG.js";import"./ToggleButton-L5BGVeTP.js";import"./ToggleButton-wbRLKRj1.js";import"./ToggleButtonGroup-B8J0oCmm.js";import"./MenuItem-DN6TEHwr.js";import"./Tabs-CrI35iIi.js";import"./AccordionSummary-DG4EpXIp.js";import"./Collapse-MMMT4y8r.js";import"./index--cAEdwB6.js";import"./Paper-BMay5fSE.js";import"./ErrorFallback-Cd58QQxa.js";import"./ErrorFallbackText-MlzepuDI.js";import"./ErrorFallbackWrapper-CeD4slRe.js";import"./TableCell-Dqb6AS6c.js";import"./useThemeProps-HgEH_AVI.js";const Se={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
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
