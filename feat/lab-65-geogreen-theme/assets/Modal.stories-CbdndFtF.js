import{r as w,a as r,j as e,F as i}from"./iframe-BWDLL2AF.js";import{o as p}from"./DropdownButton-BeMj20lx.js";import"./UserIcon-BG2pS985.js";import{H as C,e as y,T as g}from"./Text-Dx4_8ER9.js";import"./Chip-D79fnq3-.js";import{D as v}from"./Divider-BlwEMsBH.js";import"./TreeView-BVPK7VvS.js";import{B as D}from"./Button-ClnRtEFd.js";import{B as O}from"./Box-C59dMgxV.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-CPqi_8jR.js";import"./useThemeProps-Ct7WBxRG.js";import"./useTheme-DOAovAvO.js";import"./AdapterDayjs-zyELZRo4.js";import"./generateUtilityClass-g1qzx5ZO.js";import"./styled-DEFOqb-D.js";import"./Typography-Klmc7FDT.js";import"./generateUtilityClasses-DVUEFJbr.js";import"./Modal-CJ09CU82.js";import"./utils-BFnmslFO.js";import"./TransitionGroupContext-BB9UDuBa.js";import"./index-BHrQ54hb.js";import"./resolveComponentProps-CvqLrRPt.js";import"./TextField-isXjsZkP.js";import"./useFormControl-CJfau4hS.js";import"./Paper-D2v4N1dQ.js";import"./createSvgIcon-XnQP3vBd.js";import"./createStyled-BVw84nZJ.js";import"./IconButton-DH05WBbS.js";import"./ButtonBase-kwpA7teX.js";import"./DialogContent-BkWlGKhl.js";import"./Chip-D6btNuqw.js";import"./DateTimePicker-DgMuFME3.js";import"./Divider-DOviS-GW.js";import"./Stack-DUjYdPYI.js";import"./styled-o6RfLB5Q.js";import"./Close-RsD_fZZb.js";import"./LinearProgress-Mece69bc.js";import"./Spinner-BavJBSMY.js";import"./Dialog-fVAw2gXQ.js";import"./MapToggleButtonPresentational-D2nbVQJ2.js";import"./Remove-Ce-CPNlR.js";import"./TextField-C0vtgENj.js";import"./Switch-RsyOZKzm.js";import"./DatePicker-Bb0Uj4Me.js";import"./Box-CCa4g7t1.js";import"./Container-CLAY7udK.js";import"./LinkButton-CAT44kIY.js";import"./Paper-BuccSZQF.js";import"./ErrorFallback-DF0Z2ARP.js";import"./ErrorFallbackText-BWg9-CM5.js";import"./ErrorFallbackWrapper-LV7SVYTX.js";import"./Brand-DW-o0E9p.js";import"./constants-D8FrAGj1.js";import"./Edit-C55yYd-1.js";const x=`
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
`,Te={title:"Utils/Modal",component:p,tags:["autodocs"],argTypes:{onClose:{description:"Callback fired when the modal is closed.",type:"function"},children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},n={render:s=>{const[l,t]=w.useState(!1);return r(i,{children:[e(D,{variant:"contained",onClick:()=>t(!0),children:"Open Modal"}),e(p,{...s,open:l,onClose:(B,o)=>{if(o==="closeButtonClick"||o==="backdropClick"||o==="escapeKeyDown")t(!1);else throw new Error(`Unknown reason: ${o}`)},children:r(i,{children:[e(C,{id:"modal-title",children:"Data handling policy:"}),e(y,{id:"modal-title",children:"Data set 1:"}),e(v,{}),e(O,{sx:{mt:1,overflow:"auto",flex:"1 1 auto"},children:e(g,{whiteSpace:"preserve",children:x})})]})})]})}},a={render:s=>{const[l,t]=w.useState(!1);return r(i,{children:[e(D,{variant:"contained",onClick:()=>t(!0),children:"Open Modal"}),e(p,{...s,open:l,onClose:(B,o)=>{if(o==="closeButtonClick"||o==="backdropClick"||o==="escapeKeyDown")t(!1);else throw new Error(`Unknown reason: ${o}`)},hideCloseButton:!0,children:r(i,{children:[e(C,{id:"modal-title",children:"Data handling policy:"}),e(y,{id:"modal-title",children:"Data set 1:"}),e(v,{}),e(O,{sx:{mt:1,overflow:"auto",flex:"1 1 auto"},children:e(g,{whiteSpace:"preserve",children:x})})]})})]})}};var c,d,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var h,u,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const Me=["Example","WithNoCloseButton"];export{n as Example,a as WithNoCloseButton,Me as __namedExportsOrder,Te as default};
