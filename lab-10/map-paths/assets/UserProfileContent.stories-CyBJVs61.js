import{a as o,j as t,F as x}from"./iframe-PEp56x0L.js";import{a as g,B as m}from"./DropdownButton-DIhkXD6k.js";import{F as a}from"./FlexBox-DO_yedUE.js";import{T as n}from"./Text-BE9OT0g0.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-D5IxtVu8.js";import"./SvgIcon-Sjk8HnLS.js";import"./generateUtilityClass-ClfZNa_Z.js";import"./styled-DLDrBRHj.js";import"./generateUtilityClasses-DyOVJn4A.js";import"./useTheme-BSZw5MN3.js";import"./Box-BK9nt8mC.js";import"./Box-B6o03S8c.js";import"./Container-BIc8O_Mt.js";import"./styled-Bi96YKYe.js";import"./createStyled-C7aUgp1f.js";import"./useThemeProps-Cns6hruQ.js";import"./Stack-DOKcr6kC.js";import"./Typography-BuaG1Q_e.js";import"./Paper-DH1tTpJY.js";import"./useThemeProps-BluO84mO.js";import"./AdapterDayjs-Dl03QCHE.js";import"./Modal-BiN3QZLT.js";import"./utils-CjMfhMWa.js";import"./TransitionGroupContext-AlRG3TLe.js";import"./index-ChOmoK9v.js";import"./resolveComponentProps-BOHALUfl.js";import"./Popover-CbB3GNQq.js";import"./TextField-CsyMD93w.js";import"./useFormControl-CmlejeOA.js";import"./createSvgIcon-B5D28-yf.js";import"./IconButton-Bty9UGTd.js";import"./ButtonBase-DfDt7dR7.js";import"./DialogContent-DdWBBj2i.js";import"./Button-C-dOB-9O.js";import"./Chip-BzXyx1AI.js";import"./DateTimePicker-BlxDUfXp.js";import"./Divider-CPPkD8Ie.js";import"./AppInfoRow-CSs3ltLs.js";import"./Chip-xsskzt6u.js";import"./Divider-DFIJxqAs.js";import"./TreeView-Dc7Dm28S.js";import"./Alert-DH9l2_TQ.js";import"./LinearProgress-B8IpbQWX.js";import"./Spinner-C87LgWra.js";import"./Dialog-oL1MMI-D.js";import"./MapToggleButtonPresentational-BtNkUaS3.js";import"./Remove--QcwsUg6.js";import"./LinkButton-BxGp1dVi.js";import"./TextField-C_MLZHVa.js";import"./Switch-GGOdHWhI.js";import"./DatePicker--hD8iESL.js";import"./Paper-C-HgjC5-.js";import"./ErrorFallback-D4sVfazA.js";import"./ErrorFallbackText-C2TGfnqH.js";import"./ErrorFallbackWrapper-Bex9JT82.js";import"./Brand-Bq5i3QYE.js";import"./constants-5heSMDpw.js";import"./Edit-SjiPNWdK.js";const Tt={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:e=>t("div",{style:{width:300},children:t(e,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],i={args:{children:u.slice(0,3).map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading))}},r={args:{children:o(x,{children:[u.map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading)),o(a,{direction:"row",columnGap:2,justifyContent:"end",children:[t(m,{variant:"secondary",disableElevation:!0,children:"Action"}),t(m,{disableElevation:!0,children:"Action"})]})]})}};var p,s,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: items.slice(0, 3).map(item => <FlexBox key={item.heading}>
        <Text>
          <b>{item.heading}</b>
        </Text>
        <Text>{item.value}</Text>
      </FlexBox>)
  }
}`,...(d=(s=i.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var l,c,h;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: <>
        {items.map(item => <FlexBox key={item.heading}>
            <Text>
              <b>{item.heading}</b>
            </Text>
            <Text>{item.value}</Text>
          </FlexBox>)}
        <FlexBox direction="row" columnGap={2} justifyContent="end">
          <Button variant="secondary" disableElevation>
            Action
          </Button>
          <Button disableElevation>Action</Button>
        </FlexBox>
      </>
  }
}`,...(h=(c=r.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const Ft=["Basic","WithActions"];export{i as Basic,r as WithActions,Ft as __namedExportsOrder,Tt as default};
