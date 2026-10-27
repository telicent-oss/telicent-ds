import{a as o}from"./iframe-C1kADl7K.js";import{M as C}from"./EntityList-DD__byuN.js";import{I as t}from"./IconButton-D5lK2i8o.js";import{G as n,F as x,B}from"./ExpandLessIcon-BAbK8V4h.js";import"./CogIcon-BR-e7jH6.js";import"./InfoIcon-CR0eptQ5.js";import"./ExpandMoreIcon-Ca-rTBJg.js";import"./ThemeSwitchRow-DggDMvDb.js";import"./Text-HgubeblD.js";import"./Badge-CFK-UBwA.js";import"./Chip-Dl8h3Hwb.js";import"./Divider-f5jacwQy.js";import"./TreeView-BNkh8rg4.js";import"./AppInfoRow-C2KGKin4.js";import"./AppSettings-Ce1ekPQV.js";import"./SvgIcon-DjNXdhgA.js";import"./TableRow-Cp9U1s9E.js";import{B as P}from"./Box-BdLyxJDN.js";import{T as p}from"./Typography-B2gj4f-z.js";import"./preload-helper-Dp1pzeXC.js";import"./FlexBox-0Zk8Z1wf.js";import"./Stack-VS7yGLX2.js";import"./styled-B_lTjOn2.js";import"./extendSxProp-A80SNn2E.js";import"./clsx-B-dksMZM.js";import"./styled-Dqs76Ca-.js";import"./createStyled-Cjai_X-W.js";import"./useThemeProps-Ceyy6DTc.js";import"./composeClasses-fLhin0tj.js";import"./ListContext-CpKQvUa4.js";import"./ListItem-zqYHDaok.js";import"./FormControl-FAVJKkDC.js";import"./useFormControl-DZcbumU_.js";import"./TransitionGroupContext-DqUd00ju.js";import"./resolveComponentProps-CH300SQ3.js";import"./ButtonBase-NZH3pNGk.js";import"./Toolbar-BXcFouCQ.js";import"./TextField-LvDA3ZY0.js";import"./Modal-ZwwWAhia.js";import"./ownerDocument-DW-IO8s5.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useSlotProps-Ddp69iyh.js";import"./index-7_0JHsY4.js";import"./index-CSdfPHX6.js";import"./utils-DhhX_lJH.js";import"./Popover-BhjfhAkg.js";import"./Paper-DQDiDue-.js";import"./useControlled-CMijF2lP.js";import"./createSvgIcon-vxqAnrWb.js";import"./SvgIcon-Dgf8Yk0z.js";import"./FormHelperText-Ctz0a05h.js";import"./Close-DlnbITpg.js";import"./Popper-BIvXmWfM.js";import"./Badge-DVEzrCrb.js";import"./Chip-Cday2RBB.js";import"./IconButton-D9H-eKUV.js";import"./FormControlLabel-DE2FMvJ1.js";import"./MenuItem-An3zk10d.js";import"./dividerClasses-B_31kY5s.js";import"./Button-CRAaBK8B.js";import"./MapToggleButtonPresentational-FOs4i9Kd.js";import"./Remove-Bj49Kl6q.js";import"./useSlot-DWlSKb9c.js";import"./Divider-CijklUH2.js";import"./Skeleton-Dd-aKLDg.js";import"./Skeleton-Cw8vu2zv.js";import"./Edit-B0xnlOWG.js";import"./LinearProgress-D7LbuYfT.js";import"./LinearProgress-Cc3KIWRO.js";import"./Spinner-oxy8AqCs.js";import"./CircularProgress-CPCux3_H.js";import"./Dialog-CJUISWAB.js";import"./DialogContent-Dmn_sdtG.js";import"./Box-LsPv36hu.js";import"./Alert-B6r98CIF.js";import"./ToggleButton-CltJGPg5.js";import"./ToggleButton-D0NaummI.js";import"./ToggleButtonGroup-CjMZ_ebh.js";import"./LinkButton-DYifi3rJ.js";import"./Container-BJFXwx0J.js";import"./TextField-Ls5lKTbc.js";import"./Switch-vKlz1c9P.js";import"./Switch-Bxq9Tkvu.js";import"./LabeledSwitch-DORL5yab.js";import"./RadioGroup-BMjLAN0C.js";import"./FormControl-Ckwgi1a3.js";import"./FormHelperText-CyMEtxqf.js";import"./Tabs-a25RXXRz.js";import"./MenuItem-YUdwQe2h.js";import"./AccordionDetails-C7SPSNj5.js";import"./Collapse-D-lGiZGf.js";import"./index-BeWUlcg2.js";import"./_IconPopover-BigTk8_r.js";import"./Paper-Dv5b5qFz.js";import"./ErrorFallback-2Hmi_7YV.js";import"./ErrorFallbackText-Bksmpx64.js";import"./ErrorFallbackWrapper-dwx0rRDf.js";import"./Brand-DxKKSwRE.js";import"./useThemeProps-V4VNHFY4.js";import"./TableCell-YjjddMcy.js";const Se={title:"Navigation/Menu",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
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
