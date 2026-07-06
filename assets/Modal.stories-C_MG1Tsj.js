import{r as w,a as r,j as e,F as i}from"./iframe-CEWiRzw6.js";import{o as p}from"./DropdownButton-D5zAe562.js";import"./UserIcon-72JnTjY2.js";import{H as C,e as y,T as g}from"./Text-Dp4zv4uS.js";import"./Chip-lJpclgZf.js";import{D as v}from"./Divider-CGtdrDdv.js";import"./TreeView-C7kXjfir.js";import{B as D}from"./Button-C95QZql4.js";import{B as O}from"./Box-B9TS0c-T.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-BifiOOpz.js";import"./useThemeProps-BfTjzlrr.js";import"./useTheme-BvI3wAVy.js";import"./AdapterDayjs-DKU0gh2u.js";import"./styled-BMacbev-.js";import"./Typography-Ct9CX6dI.js";import"./generateUtilityClasses-Cw_0ODav.js";import"./Modal-BQhHhnX1.js";import"./utils-l9xoT8cx.js";import"./TransitionGroupContext-BMjDgQGH.js";import"./index-BV2l58Ww.js";import"./TextField-yl0ILouP.js";import"./useFormControl-CEp6dWZX.js";import"./Paper-Dpz_fFsE.js";import"./createSvgIcon-BAc5XkB5.js";import"./createStyled-BmFIYWCc.js";import"./IconButton-DX3o1mfc.js";import"./ButtonBase-DBR6Y10-.js";import"./DialogContent-BO2JCZn7.js";import"./Chip-BIzlRnt1.js";import"./DateTimePicker-CLBYXH6l.js";import"./Divider-C3q8yTWy.js";import"./Stack-eaccBTma.js";import"./styled-BBOfX3DR.js";import"./LinearProgress-C909keVa.js";import"./Spinner-D6JI1MNv.js";import"./Dialog-D5TmvNsl.js";import"./MapToggleButtonPresentational-DcEVZk3p.js";import"./Remove-DEwthPW7.js";import"./TextField-BT8Xt3Sl.js";import"./Switch-28k243sq.js";import"./DatePicker-GkMLM4rl.js";import"./Container-DTFPg4no.js";import"./LinkButton-BQLavjxu.js";import"./Paper-DLWLBnlh.js";import"./ErrorFallback-CGk6Dun0.js";import"./ErrorFallbackText-DHFTb4mH.js";import"./ErrorFallbackWrapper-CTHNPdE-.js";import"./Brand-DHhfrOsC.js";import"./constants-DWn7Y7Mg.js";import"./Edit-BiEqD8O-.js";const x=`
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
`,ke={title:"Utils/Modal",component:p,tags:["autodocs"],argTypes:{onClose:{description:"Callback fired when the modal is closed.",type:"function"},children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},t={render:s=>{const[l,n]=w.useState(!1);return r(i,{children:[e(D,{variant:"contained",onClick:()=>n(!0),children:"Open Modal"}),e(p,{...s,open:l,onClose:(B,o)=>{if(o==="closeButtonClick"||o==="backdropClick"||o==="escapeKeyDown")n(!1);else throw new Error(`Unknown reason: ${o}`)},children:r(i,{children:[e(C,{id:"modal-title",children:"Data handling policy:"}),e(y,{id:"modal-title",children:"Data set 1:"}),e(v,{}),e(O,{sx:{mt:1,overflow:"auto",flex:"1 1 auto"},children:e(g,{whiteSpace:"preserve",children:x})})]})})]})}},a={render:s=>{const[l,n]=w.useState(!1);return r(i,{children:[e(D,{variant:"contained",onClick:()=>n(!0),children:"Open Modal"}),e(p,{...s,open:l,onClose:(B,o)=>{if(o==="closeButtonClick"||o==="backdropClick"||o==="escapeKeyDown")n(!1);else throw new Error(`Unknown reason: ${o}`)},hideCloseButton:!0,children:r(i,{children:[e(C,{id:"modal-title",children:"Data handling policy:"}),e(y,{id:"modal-title",children:"Data set 1:"}),e(v,{}),e(O,{sx:{mt:1,overflow:"auto",flex:"1 1 auto"},children:e(g,{whiteSpace:"preserve",children:x})})]})})]})}};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var h,u,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const be=["Example","WithNoCloseButton"];export{t as Example,a as WithNoCloseButton,be as __namedExportsOrder,ke as default};
