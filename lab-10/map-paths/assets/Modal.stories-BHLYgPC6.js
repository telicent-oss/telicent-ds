import{r as w,a,j as e,F as i}from"./iframe-DJ7o9sjN.js";import{s as p}from"./DropdownButton-DAoCEQns.js";import"./UserIcon-BbRdVOeE.js";import"./FlexBox-CmKMLmja.js";import{H as C,e as y,T as g}from"./Text-CKYvVaQ3.js";import"./Chip-4RBVK7P0.js";import{D as v}from"./Divider-CjS48Yb2.js";import"./TreeView-DnOkJcqx.js";import"./AppInfoRow-B1OC277z.js";import{B as D}from"./Button-C6ZWAVf1.js";import{B as O}from"./Box-DwCOAluV.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-CGNqp4tk.js";import"./useThemeProps-CulH-gMG.js";import"./useTheme-Dpcr6gVj.js";import"./AdapterDayjs-e4cXOfxK.js";import"./generateUtilityClass-NKEQXImD.js";import"./styled-B2Xsi3Qk.js";import"./Typography-C3brZaXz.js";import"./generateUtilityClasses-B-H4mZpl.js";import"./Modal-D5bludlO.js";import"./utils-CXw9cUDE.js";import"./TransitionGroupContext-sf3TMEzC.js";import"./index-B7OBf6J8.js";import"./resolveComponentProps-DkEIZkOn.js";import"./Popover-Ws6V5nr9.js";import"./Paper-DDqXORou.js";import"./TextField-6M-OFJd4.js";import"./useFormControl-nxKSvLFH.js";import"./createSvgIcon-D0s82IB_.js";import"./SvgIcon-CTRLopq-.js";import"./createStyled-DrRmjKFf.js";import"./IconButton-BZ9JsQ-4.js";import"./ButtonBase-XfSRIF2e.js";import"./DialogContent-n4vctS3x.js";import"./Chip-C6Fuob-a.js";import"./DateTimePicker-BzN4rV0M.js";import"./Divider-9TcGx5Qj.js";import"./Stack-BXgzYG84.js";import"./styled-Dc3Vu47j.js";import"./Alert-BiDnlkQN.js";import"./LinearProgress-qzie4g_h.js";import"./Spinner-D2gZDfJD.js";import"./Dialog-CFePTt5u.js";import"./MapToggleButtonPresentational-xRw_q0vm.js";import"./Remove-CwDdSJFc.js";import"./LinkButton-gt6rYSIe.js";import"./Box-DagEX-RT.js";import"./Container-LfFMcqXO.js";import"./TextField-DZNSB9tK.js";import"./Switch-CXrRH0j2.js";import"./DatePicker-B18NgSFC.js";import"./Paper-Bl0ow7oP.js";import"./ErrorFallback-DHAi4B_j.js";import"./ErrorFallbackText-Bec6RRTL.js";import"./ErrorFallbackWrapper-D5su5Bh0.js";import"./Brand-BjLIRTja.js";import"./Edit-BaBc2Yf-.js";const x=`
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
