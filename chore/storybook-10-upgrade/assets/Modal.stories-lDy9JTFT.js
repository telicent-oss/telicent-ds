import{r as w,a as r,j as e,F as i}from"./iframe-B_xAjz_a.js";import{n as p}from"./DropdownButton-BnaLLxdm.js";import"./UserIcon-sXWYTtMY.js";import{H as C,e as y,T as g}from"./Text-Dxo92Y_P.js";import"./Chip-CbHUK2Oi.js";import{D as v}from"./Divider-D_2gC9Rv.js";import"./TreeView-027Y335s.js";import{B as D}from"./Button-BK_6tBa6.js";import{B as O}from"./Box-HNQBJ69w.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-CIWHHPPz.js";import"./useThemeProps-B45YfUAa.js";import"./useTheme-DXfWrHWZ.js";import"./AdapterDayjs-q2OtrlCq.js";import"./styled-DWxCgiIq.js";import"./Typography-ByJUc9gg.js";import"./generateUtilityClasses-CWLcYD5H.js";import"./Modal-BpjRytJz.js";import"./utils-CwDFzrhS.js";import"./TransitionGroupContext-CpQCZJFv.js";import"./index-CI4uBojl.js";import"./Select-CuWSjzQW.js";import"./useFormControl-DsU6bxZg.js";import"./Paper-BTmXDdaE.js";import"./createSvgIcon-DNxDKV7W.js";import"./TextField-CXoQdh2Y.js";import"./createStyled-YK0OyouD.js";import"./IconButton-BCtq5lM_.js";import"./ButtonBase-rGiwpEnq.js";import"./DialogContent-5gmVHz0w.js";import"./Chip-CnGyAVsl.js";import"./MenuItem-DqM4z-OC.js";import"./dividerClasses-LlugbWYd.js";import"./Stack-BUP2Ksyi.js";import"./styled-Dj6VM8rS.js";import"./LinearProgress-BGR-shXY.js";import"./Spinner-C7CK19Se.js";import"./Dialog-kf4LGKqy.js";import"./MapToggleButtonPresentational-CEsfsZc1.js";import"./Remove-C35S1kL4.js";import"./TextField-DaNwDKAN.js";import"./Select-BehY_x2i.js";import"./Switch-Bsyk4KfN.js";import"./DatePicker-Vblbv12o.js";import"./DateTimePicker-DASuNmCH.js";import"./Divider-CmQ1Xcb5.js";import"./Container-DZVvhBo5.js";import"./LinkButton-BGw7Liqm.js";import"./Paper-B7oVFYM9.js";import"./ErrorFallback-CYAgcxnT.js";import"./ErrorFallbackText-DvI-57tq.js";import"./ErrorFallbackWrapper-Bz-JcYeG.js";import"./Brand-DBW4B7CT.js";import"./constants-1TT1xdyQ.js";import"./Edit-DYLHrREl.js";const x=`
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
