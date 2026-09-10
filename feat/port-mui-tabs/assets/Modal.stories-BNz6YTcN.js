import{r as w,a,j as e,F as i}from"./iframe-Ce2OCE46.js";import{s as p}from"./DropdownButton-BZeAU0hR.js";import"./UserIcon-BeBbW4ae.js";import"./FlexBox-QXmAoGfV.js";import{H as C,e as y,T as g}from"./Text-iWgBtTEF.js";import"./Chip-D2Ptw4F5.js";import{D as v}from"./Divider-BydDTYUN.js";import"./TreeView-B4RWPXCG.js";import"./AppInfoRow-iVaYeCli.js";import{B as D}from"./Button-Cy1pOnfQ.js";import{B as O}from"./Box-DPN8iDtX.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-DnGJj7RI.js";import"./useThemeProps-iW1JeY1q.js";import"./useTheme-CLM2GVtV.js";import"./AdapterDayjs-C4Mp3q20.js";import"./generateUtilityClass-Dpfkq2Nk.js";import"./styled-DG4DTdgR.js";import"./Typography-wgrPajcY.js";import"./generateUtilityClasses-XCYs_VDx.js";import"./Modal-QVS8IAeT.js";import"./utils-DCsrA1oL.js";import"./TransitionGroupContext-B68BF-iQ.js";import"./index-CxlNYX3Y.js";import"./resolveComponentProps-DSEEQlqm.js";import"./Popover-Dt_6Onsk.js";import"./Paper-afLuPYhe.js";import"./TextField-Doc_CKDt.js";import"./useFormControl-D3zcrAfb.js";import"./createSvgIcon-CR2ME6BQ.js";import"./SvgIcon-1ianXB1D.js";import"./createStyled-C5CYLvYR.js";import"./IconButton-BTekjOnP.js";import"./ButtonBase-xU-UolfF.js";import"./DialogContent-DJkb6jt4.js";import"./Chip-DrR5OuDg.js";import"./DateTimePicker-Ki4uwXEw.js";import"./Divider-DXzVK-0q.js";import"./Stack-9i_ZvuDA.js";import"./styled-B5NIKwPN.js";import"./Alert-DL7N4iSe.js";import"./LinearProgress-C2y7bs6L.js";import"./Spinner-Baj4KosW.js";import"./Dialog-DNWScIyV.js";import"./MapToggleButtonPresentational-DHVSXtub.js";import"./Remove-D6Util3l.js";import"./LinkButton-CGtVXD2M.js";import"./Box-BOtHEcpc.js";import"./Container-bE4ocZr9.js";import"./TextField-DHJTJtHu.js";import"./Switch-DK_hgLX1.js";import"./DatePicker-DU4_X1Kg.js";import"./Paper-dwBSwh0G.js";import"./ErrorFallback-DcjVRdtL.js";import"./ErrorFallbackText-C2I-OeKi.js";import"./ErrorFallbackWrapper-DpFlGNMA.js";import"./Brand-BDH5l_wz.js";import"./constants-DI5LickN.js";import"./Edit-DmBLMWan.js";const x=`
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
`,_e={title:"Utils/Modal",component:p,tags:["autodocs"],argTypes:{onClose:{description:"Callback fired when the modal is closed.",type:"function"},children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},n={render:s=>{const[l,t]=w.useState(!1);return a(i,{children:[e(D,{variant:"contained",onClick:()=>t(!0),children:"Open Modal"}),e(p,{...s,open:l,onClose:(B,o)=>{if(o==="closeButtonClick"||o==="backdropClick"||o==="escapeKeyDown")t(!1);else throw new Error(`Unknown reason: ${o}`)},children:a(i,{children:[e(C,{id:"modal-title",children:"Data handling policy:"}),e(y,{id:"modal-title",children:"Data set 1:"}),e(v,{}),e(O,{sx:{mt:1,overflow:"auto",flex:"1 1 auto"},children:e(g,{whiteSpace:"preserve",children:x})})]})})]})}},r={render:s=>{const[l,t]=w.useState(!1);return a(i,{children:[e(D,{variant:"contained",onClick:()=>t(!0),children:"Open Modal"}),e(p,{...s,open:l,onClose:(B,o)=>{if(o==="closeButtonClick"||o==="backdropClick"||o==="escapeKeyDown")t(!1);else throw new Error(`Unknown reason: ${o}`)},hideCloseButton:!0,children:a(i,{children:[e(C,{id:"modal-title",children:"Data handling policy:"}),e(y,{id:"modal-title",children:"Data set 1:"}),e(v,{}),e(O,{sx:{mt:1,overflow:"auto",flex:"1 1 auto"},children:e(g,{whiteSpace:"preserve",children:x})})]})})]})}};var c,d,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const Ae=["Example","WithNoCloseButton"];export{n as Example,r as WithNoCloseButton,Ae as __namedExportsOrder,_e as default};
