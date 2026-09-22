import{r as w,a,j as e,F as i}from"./iframe-CDBxO6_b.js";import{s as p}from"./DropdownButton-CkksLEox.js";import"./UserIcon-DEvOIRGm.js";import"./FlexBox-BMs_YP_5.js";import{H as C,e as y,T as g}from"./Text-CdZr9e3u.js";import"./Chip-BLU3VkT1.js";import{D as v}from"./Divider-8ryveRxy.js";import"./TreeView-DuSVfVPL.js";import"./AppInfoRow-BwXDp_eE.js";import{B as D}from"./Button-CAHqHr06.js";import{B as O}from"./Box-DfnvJTQw.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-DHX2ocPH.js";import"./useThemeProps-fiQCP1N1.js";import"./useTheme-rDhlhLy3.js";import"./AdapterDayjs-CYb0KguN.js";import"./generateUtilityClass-KFl2kJbe.js";import"./styled-76qFXujn.js";import"./Typography-vegYmcLy.js";import"./generateUtilityClasses-DaXJGzLl.js";import"./Modal-DEgg-C3h.js";import"./utils-Cr9e5xo4.js";import"./TransitionGroupContext-Cu_THlZq.js";import"./index-DWMSeB-r.js";import"./resolveComponentProps-BxRLFcsS.js";import"./Popover-0S23aSjL.js";import"./Paper-DMCPBJkm.js";import"./TextField-B7fvSw8O.js";import"./useFormControl-BLJrGv0p.js";import"./createSvgIcon-CEVPRCDB.js";import"./SvgIcon-DsW68TcN.js";import"./createStyled-C1rkA4Mv.js";import"./IconButton-D-oIe7cH.js";import"./ButtonBase-5WYJ2ezl.js";import"./DialogContent-DLgwMkMq.js";import"./Chip-CqmdbVD_.js";import"./DateTimePicker-DP5-_LCV.js";import"./Divider-BXpFwo5Y.js";import"./Stack-mYJwoIT2.js";import"./styled-CphBOoQ3.js";import"./Alert-D-UKQ5P-.js";import"./LinearProgress-Ds_yNof7.js";import"./Spinner-DqjfiG1Z.js";import"./Dialog-Bf4YNW6N.js";import"./MapToggleButtonPresentational-DAgezT-5.js";import"./Remove-CQa5LtxQ.js";import"./LinkButton-ByQcFuFk.js";import"./Box-CySwnFLo.js";import"./Container-KMaT1f54.js";import"./TextField-Csj0W2gm.js";import"./Switch-aIvlRLf5.js";import"./DatePicker-OfEkbjGT.js";import"./Paper-TPWkBCMh.js";import"./ErrorFallback-cydewmqS.js";import"./ErrorFallbackText-DsJo2xyd.js";import"./ErrorFallbackWrapper-I5QMkt72.js";import"./Brand-CMTTc4Ce.js";import"./Edit-caJtQqsL.js";const x=`
Effective Date: 25/10/20241. 

1. Introduction

This agency is committed to ensuring the security and confidentiality of the personal and sensitive data we handle. This policy outlines the procedures and responsibilities for managing and protecting data to comply with relevant laws and regulations.

2. Purpose

The purpose of this policy is to:Ensure the proper handling, protection, and use of data.Comply with applicable data protection laws and regulations.Protect the privacy rights of individuals whose data we handle.

3. Scope

This policy applies to all employees, contractors, and third-party service providers of who have access to, or handle, data.

4. Data Collection

Lawful and Fair Collection: Data must be collected lawfully and fairly, and only for specified, explicit, and legitimate purposes.Consent: Where applicable, data subjects must provide informed consent for the collection and processing of their data.

5. Data Use

Purpose Limitation: Data must be used only for the purposes for which it was collected and not further processed in a manner incompatible with those purposes.Data Minimization: Only the minimum necessary data should be collected and processed.

6. Data Storage

Secure Storage: Data must be stored securely to prevent unauthorized access, loss, or damage. This includes physical and electronic storage measures.Retention Period: Data must be retained only for as long as necessary to fulfill the purposes for which it was collected, or as required by law.

For questions or concerns about this policy or data protection practices, contact John Smiley at 0394 300498.

Approved by:John Smiley
Head of Data Capture
The agency

25/03/2024
`,He={title:"Utils/Modal",component:p,tags:["autodocs"],argTypes:{onClose:{description:"Callback fired when the modal is closed.",type:"function"},children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},n={render:s=>{const[l,t]=w.useState(!1);return a(i,{children:[e(D,{variant:"contained",onClick:()=>t(!0),children:"Open Modal"}),e(p,{...s,open:l,onClose:(B,o)=>{if(o==="closeButtonClick"||o==="backdropClick"||o==="escapeKeyDown")t(!1);else throw new Error(`Unknown reason: ${o}`)},children:a(i,{children:[e(C,{id:"modal-title",children:"Data handling policy:"}),e(y,{id:"modal-title",children:"Data set 1:"}),e(v,{}),e(O,{sx:{mt:1,overflow:"auto",flex:"1 1 auto"},children:e(g,{whiteSpace:"preserve",children:x})})]})})]})}},r={render:s=>{const[l,t]=w.useState(!1);return a(i,{children:[e(D,{variant:"contained",onClick:()=>t(!0),children:"Open Modal"}),e(p,{...s,open:l,onClose:(B,o)=>{if(o==="closeButtonClick"||o==="backdropClick"||o==="escapeKeyDown")t(!1);else throw new Error(`Unknown reason: ${o}`)},hideCloseButton:!0,children:a(i,{children:[e(C,{id:"modal-title",children:"Data handling policy:"}),e(y,{id:"modal-title",children:"Data set 1:"}),e(v,{}),e(O,{sx:{mt:1,overflow:"auto",flex:"1 1 auto"},children:e(g,{whiteSpace:"preserve",children:x})})]})})]})}};var c,d,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = (_event: {}, reason: string) => {
      if (reason === "closeButtonClick" || reason === "backdropClick" || reason === "escapeKeyDown") {
        setOpen(false);
      } else {
        throw new Error(\`Unknown reason: \${reason}\`);
      }
    };
    return <>
        <Button variant="contained" onClick={handleOpen}>
          Open Modal
        </Button>
        <Modal {...{
        ...args,
        open,
        onClose: handleClose
      }}>
          <>
            <H4 id="modal-title">Data handling policy:</H4>
            <H6 id="modal-title">Data set 1:</H6>
            <Divider />

            <Box sx={{
            mt: 1,
            overflow: "auto",
            // Enables scrolling when content is too long
            flex: "1 1 auto" // Allows the content to grow and shrink appropriately
          }}>
              <Text whiteSpace={"preserve"}>{MOCK_DATA_POLICY}</Text>
            </Box>
          </>
        </Modal>
      </>;
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var h,u,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = (_event: {}, reason: string) => {
      if (reason === "closeButtonClick" || reason === "backdropClick" || reason === "escapeKeyDown") {
        setOpen(false);
      } else {
        throw new Error(\`Unknown reason: \${reason}\`);
      }
    };
    return <>
        <Button variant="contained" onClick={handleOpen}>
          Open Modal
        </Button>
        <Modal {...{
        ...args,
        open,
        onClose: handleClose,
        hideCloseButton: true
      }}>
          <>
            <H4 id="modal-title">Data handling policy:</H4>
            <H6 id="modal-title">Data set 1:</H6>
            <Divider />

            <Box sx={{
            mt: 1,
            overflow: "auto",
            // Enables scrolling when content is too long
            flex: "1 1 auto" // Allows the content to grow and shrink appropriately
          }}>
              <Text whiteSpace={"preserve"}>{MOCK_DATA_POLICY}</Text>
            </Box>
          </>
        </Modal>
      </>;
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const _e=["Example","WithNoCloseButton"];export{n as Example,r as WithNoCloseButton,_e as __namedExportsOrder,He as default};
