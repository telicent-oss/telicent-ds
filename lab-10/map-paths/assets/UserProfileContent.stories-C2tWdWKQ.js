import{a as o,j as t,F as x}from"./iframe-B-bQ8-2T.js";import{a as g,B as m}from"./DropdownButton-DpvAnkHg.js";import{F as a}from"./FlexBox-BGamYhMG.js";import{T as n}from"./Text-C2SnKuds.js";import"./preload-helper-C1FmrZbK.js";import"./UserIcon-C9Zr7okE.js";import"./SvgIcon-UN5gLgZI.js";import"./generateUtilityClass-CG5sjlGK.js";import"./styled-DOmm5J5B.js";import"./generateUtilityClasses-CA_BUpCf.js";import"./useTheme-B1KTYiIC.js";import"./Box-DUbUks71.js";import"./Box-Cb51q2aG.js";import"./Container-BrNvvhUm.js";import"./styled-XA2qTXOU.js";import"./createStyled-F7qmmNU6.js";import"./useThemeProps-BqcDYrbJ.js";import"./Stack-NkQdXg6W.js";import"./Typography-ichFhS_t.js";import"./Paper-UD-fH5lO.js";import"./useThemeProps-D43hB7uA.js";import"./AdapterDayjs-Bi2Myd6S.js";import"./Modal-BinRocgF.js";import"./utils-Cwu4GIe3.js";import"./TransitionGroupContext-D6yDpsO9.js";import"./index-CI_ZfTAb.js";import"./resolveComponentProps-DFyBBYGP.js";import"./Popover-7r96UTT2.js";import"./TextField-COG7v3AR.js";import"./useFormControl-C2Wl_Rfv.js";import"./createSvgIcon-yZopMPvq.js";import"./IconButton-CzJgcxFx.js";import"./ButtonBase-jFTlO58q.js";import"./DialogContent-MA-T71Pz.js";import"./Button-CpFdI90F.js";import"./Chip-Bxe4KEdd.js";import"./DateTimePicker-BRht8fYt.js";import"./Divider-OvS7Rpu4.js";import"./AppInfoRow-8RG6mUcJ.js";import"./Chip-d5Jlpmkz.js";import"./Divider-CwRXz9WH.js";import"./TreeView-C7jsPmrW.js";import"./Alert-qseOYOaL.js";import"./LinearProgress-zOhaivJ7.js";import"./Spinner-L5B8MxAA.js";import"./Dialog-CtpvfQA2.js";import"./MapToggleButtonPresentational-B6oRN28T.js";import"./Remove-DO2en3Z5.js";import"./LinkButton-k11oZu-9.js";import"./TextField-Di8tiFVP.js";import"./Switch-xgHe0pBA.js";import"./DatePicker-DKq07de7.js";import"./Paper-Br8iEvDm.js";import"./ErrorFallback-DJBh-Sr1.js";import"./ErrorFallbackText-DRx9AnrW.js";import"./ErrorFallbackWrapper-DH7xG75e.js";import"./Brand-CPR-mKV1.js";import"./constants-CdgyqUfC.js";import"./Edit-B7KGH8V2.js";const Tt={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:e=>t("div",{style:{width:300},children:t(e,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],i={args:{children:u.slice(0,3).map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading))}},r={args:{children:o(x,{children:[u.map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading)),o(a,{direction:"row",columnGap:2,justifyContent:"end",children:[t(m,{variant:"secondary",disableElevation:!0,children:"Action"}),t(m,{disableElevation:!0,children:"Action"})]})]})}};var p,s,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
