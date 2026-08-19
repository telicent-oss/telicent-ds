import{r as w,a,j as e,F as i}from"./iframe-woqfefPC.js";import{o as p}from"./DropdownButton-B1bD1lNa.js";import"./UserIcon-CZrO7rOz.js";import"./FlexBox-CFiAFxVr.js";import{H as C,e as y,T as g}from"./Text-CVdTrgex.js";import"./Chip-Ye1FV8gr.js";import{D as v}from"./Divider-B-R56vz7.js";import"./TreeView-CnSgD92Q.js";import"./AppInfoRow-FQf-Uxyu.js";import{B as D}from"./Button-BYXN4taO.js";import{B as O}from"./Box-CdBdZvPi.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-DiI4sMJp.js";import"./useThemeProps-C7rvhRGK.js";import"./useTheme-DjCAOCMf.js";import"./AdapterDayjs-SYc6eaHj.js";import"./generateUtilityClass-BJXokMoA.js";import"./styled-DxPBiXUf.js";import"./Typography-DpKxRL_6.js";import"./generateUtilityClasses-BfMa5HrZ.js";import"./Modal-CaqrQysV.js";import"./utils-BHr5gcCM.js";import"./TransitionGroupContext-DpyE4Xc2.js";import"./index-Cc2aF9ce.js";import"./resolveComponentProps-BPbh-zwX.js";import"./Popover-FzkS9WOq.js";import"./Paper-Cel9I3vj.js";import"./TextField-C8YEFGvP.js";import"./useFormControl-CdUfgNyJ.js";import"./createSvgIcon-DMQw-rzj.js";import"./SvgIcon-Bo1XjP9O.js";import"./createStyled-IyuL39l2.js";import"./IconButton-CZXr5bFM.js";import"./ButtonBase-CZ3-eO2f.js";import"./DialogContent-D9t3JHo2.js";import"./Chip-CN1uKpCE.js";import"./DateTimePicker-BCq-mAD2.js";import"./Divider-CDzzakYn.js";import"./Stack-CkaIEl_P.js";import"./styled-CUr9clCY.js";import"./Alert-5oooyx2V.js";import"./LinearProgress-BghVVCAF.js";import"./Spinner-C544qo6r.js";import"./Dialog-Ck4mEIjf.js";import"./MapToggleButtonPresentational-DigQzjPw.js";import"./Remove-BFnkFzrU.js";import"./LinkButton-B1YmsP7j.js";import"./Box-B199DmZe.js";import"./Container-DlcQbp9d.js";import"./TextField-DBB085ZE.js";import"./Switch-CUBS3sDF.js";import"./DatePicker-C25_Cre5.js";import"./Paper-BJBTp4DB.js";import"./ErrorFallback-FTfU9tJD.js";import"./ErrorFallbackText-BxvBPsFK.js";import"./ErrorFallbackWrapper-WIZsIluo.js";import"./Brand-DchGyFNu.js";import"./constants-5mjpbbvY.js";import"./Edit-DCb6sKCZ.js";const x=`
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
