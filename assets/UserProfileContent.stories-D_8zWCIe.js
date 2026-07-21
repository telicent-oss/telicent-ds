import{a as o,j as t,F as x}from"./iframe-CzCkUhLB.js";import{a as g,B as m}from"./DropdownButton-pqytKPlf.js";import{a}from"./UserIcon-D2XJ4u-D.js";import{T as n}from"./Text-CrtF-KKD.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-DU8Uvr2K.js";import"./useThemeProps-BolcGYv-.js";import"./useTheme-D8VtF-T3.js";import"./AdapterDayjs-BpTj0bJ_.js";import"./generateUtilityClass-BJmbtkIz.js";import"./styled-BAICCbW2.js";import"./Typography-C4jf0x9_.js";import"./generateUtilityClasses-DcHQ8wPZ.js";import"./Modal-DIeDBBDO.js";import"./utils-DKTt1Dtk.js";import"./TransitionGroupContext-DMmZE5A7.js";import"./index-DsxJ_3S5.js";import"./resolveComponentProps-Cbl6fkow.js";import"./TextField-D7nA1rxz.js";import"./useFormControl-DtEaYh3d.js";import"./Paper-BitHaSdO.js";import"./createSvgIcon-C5AbB3qG.js";import"./createStyled-CnaTqEJw.js";import"./IconButton-DxOsamAP.js";import"./ButtonBase-C1jEsrEk.js";import"./DialogContent-ChmWl_kd.js";import"./Button-nVc9Q04c.js";import"./Chip-Bpfp1uo7.js";import"./DateTimePicker-CvUf-KCh.js";import"./Divider-Dhatnav_.js";import"./Chip-CiH2_6GH.js";import"./Divider-CY_WcVt5.js";import"./Box-BGVnL9Ww.js";import"./TreeView-DImXIC-1.js";import"./Stack-BQ9Nq0wB.js";import"./styled-BxT8txyJ.js";import"./Close-ufy7FO6S.js";import"./LinearProgress-Bi56K1d1.js";import"./Spinner-DnNrdg_H.js";import"./Dialog-D71AnQMa.js";import"./MapToggleButtonPresentational-CKn0zbRc.js";import"./Remove-D-VYR3BE.js";import"./TextField-DWYxHpkX.js";import"./Switch-DeHO8LDM.js";import"./DatePicker-D79epJYE.js";import"./Box-ChoQNki_.js";import"./Container-CevBIhIW.js";import"./LinkButton-BEZRiMwC.js";import"./Paper-WtLvzPxM.js";import"./ErrorFallback-Biy0HDIH.js";import"./ErrorFallbackText-BbEDFHSR.js";import"./ErrorFallbackWrapper-BH2ujPyJ.js";import"./Brand-rCLVFpN1.js";import"./constants-SYLv77sP.js";import"./Edit-CNP1jkFH.js";const Bt={title:"Data display/User profile/User profile content",component:g,tags:["autodocs"],decorators:e=>t("div",{style:{width:300},children:t(e,{})}),argTypes:{children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},u=[{heading:"Username",value:"Admin"},{heading:"Email",value:"admin@telicent.io"},{heading:"Deployed Organisation",value:"Telicent"},{heading:"UserId",value:"3004958Ed-23-sdf-404-21334"},{heading:"Attributes",value:"GBR"},{heading:"Clearance",value:"SEN"}],i={args:{children:u.slice(0,3).map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading))}},r={args:{children:o(x,{children:[u.map(e=>o(a,{children:[t(n,{children:t("b",{children:e.heading})}),t(n,{children:e.value})]},e.heading)),o(a,{direction:"row",columnGap:2,justifyContent:"end",children:[t(m,{variant:"secondary",disableElevation:!0,children:"Action"}),t(m,{disableElevation:!0,children:"Action"})]})]})}};var p,s,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(c=r.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const bt=["Basic","WithActions"];export{i as Basic,r as WithActions,bt as __namedExportsOrder,Bt as default};
