import{r as w,a,j as e,F as i}from"./iframe-BR2e2YDK.js";import{p}from"./DropdownButton-BcIbR7mn.js";import"./UserIcon-jc37Ujil.js";import"./FlexBox-GegQ6KoK.js";import{H as C,e as y,T as g}from"./Text-G3gRIU3S.js";import"./Chip-Ba4FoljX.js";import{D as v}from"./Divider-BLHqQnsK.js";import"./TreeView-CdxXinPI.js";import"./AppInfoRow-DakeCdvn.js";import{B as D}from"./Button-D2nWt4S8.js";import{B as O}from"./Box-Cjy76m6G.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-Db0C_hKt.js";import"./useThemeProps-DwRsn42H.js";import"./useTheme-s-RP8QJy.js";import"./AdapterDayjs-Cqhoz3bg.js";import"./generateUtilityClass-DMHzQu2S.js";import"./styled-D2dzNnNb.js";import"./Typography-DUgZ7jdW.js";import"./generateUtilityClasses-Dg3UIE_r.js";import"./Modal-a8XaxvFh.js";import"./utils-BDR_SyG2.js";import"./TransitionGroupContext-ClPOJll4.js";import"./index-DPx2uLoP.js";import"./resolveComponentProps-4VX9PFU8.js";import"./Popover-Baj7zd45.js";import"./Paper-Bu9Xtg_J.js";import"./TextField-BYBS7QeR.js";import"./useFormControl-BDmNOi78.js";import"./createSvgIcon-BCjTwnIN.js";import"./SvgIcon-Cv-K0R04.js";import"./createStyled-CY95Mz_9.js";import"./IconButton-Bays2K--.js";import"./ButtonBase-CmJPQ6Im.js";import"./DialogContent-wB_kMJWd.js";import"./Chip-Bs3GvNHw.js";import"./DateTimePicker-BhkD0_Tn.js";import"./Divider-Dz7TZSIi.js";import"./Stack-COhqTIW9.js";import"./styled-BxRNAcX1.js";import"./Alert-C4X40l06.js";import"./LinearProgress-Bi0KtS5W.js";import"./Spinner-KSKr4HCV.js";import"./Dialog-BOV1hoDB.js";import"./MapToggleButtonPresentational-CDIZBpSC.js";import"./Remove-DuE88Ezs.js";import"./LinkButton-BqutvHI0.js";import"./Box-DUkA7BwQ.js";import"./Container-BqQatTiF.js";import"./TextField-ByfWKBjI.js";import"./Switch-EzT8Sy71.js";import"./DatePicker-Bv_1Qb5R.js";import"./Paper-DeFLSdpX.js";import"./ErrorFallback-9noxw0Ql.js";import"./ErrorFallbackText-DAVlUHED.js";import"./ErrorFallbackWrapper-DctsmiY9.js";import"./Brand-Bmi4u6qq.js";import"./Edit-DHIa2SgU.js";const x=`
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
