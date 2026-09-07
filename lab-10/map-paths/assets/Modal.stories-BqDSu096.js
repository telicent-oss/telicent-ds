import{r as w,a,j as e,F as i}from"./iframe-DOdfunxu.js";import{p}from"./DropdownButton-ByqXHMOu.js";import"./UserIcon-B7_eivk6.js";import"./FlexBox-DMv9SAJZ.js";import{H as C,e as y,T as g}from"./Text-VYSLAOq5.js";import"./Chip-BseIe8gJ.js";import{D as v}from"./Divider-pihCxoa4.js";import"./TreeView-DdA1N4tx.js";import"./AppInfoRow-BOjAmyns.js";import{B as D}from"./Button-DQ93r4qZ.js";import{B as O}from"./Box-hyRQPaZ4.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-DLNpf1VT.js";import"./useThemeProps-D8V7PoaW.js";import"./useTheme-CTXZcIs4.js";import"./AdapterDayjs-CX9q05Th.js";import"./generateUtilityClass-BzCIKliO.js";import"./styled-N7qU7nSq.js";import"./Typography-1e_UHE42.js";import"./generateUtilityClasses-CFD-9pLI.js";import"./Modal-Cya2bj7G.js";import"./utils-CpWf8KQd.js";import"./TransitionGroupContext-KJ5bGa-X.js";import"./index-koODo2za.js";import"./resolveComponentProps-ChNdKYcA.js";import"./Popover-H5Nc25Qr.js";import"./Paper-CHErrLCd.js";import"./TextField-B9CT7SDQ.js";import"./useFormControl-BYoapvFJ.js";import"./createSvgIcon-CZJ3IqX3.js";import"./SvgIcon-DFomGA1f.js";import"./createStyled-8QW6nx7o.js";import"./IconButton-CsmqjV5u.js";import"./ButtonBase-CLoxpI8H.js";import"./DialogContent-C6cnJTIr.js";import"./Chip-BjXM18gl.js";import"./DateTimePicker-xNFlLIrM.js";import"./Divider-cnXSAO0W.js";import"./Stack-DwCY-dlK.js";import"./styled-D5fNiE7F.js";import"./Alert-s_Jivrbe.js";import"./LinearProgress-yqjeFZFn.js";import"./Spinner-CQdshHh4.js";import"./Dialog-IWGMIZQp.js";import"./MapToggleButtonPresentational-Cs7LiFb0.js";import"./Remove-mxIKVIiX.js";import"./LinkButton-CfRR_AtP.js";import"./Box-DHRrNZX5.js";import"./Container-CPCeD-nf.js";import"./TextField-CrzldOpU.js";import"./Switch-D-vofxUl.js";import"./DatePicker-Cb5XxovO.js";import"./Paper-CQpy0KVu.js";import"./ErrorFallback-CT7nYHa7.js";import"./ErrorFallbackText-nraKr_ob.js";import"./ErrorFallbackWrapper-fk64WSbi.js";import"./Brand-DGjLYV2R.js";import"./constants-Cxg4p8yF.js";import"./Edit-B4kKMPyK.js";const x=`
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
