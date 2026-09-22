import{r as w,a,j as e,F as i}from"./iframe-CXB2IX9t.js";import{s as p}from"./DropdownButton-C1jDm6jv.js";import"./UserIcon-tOiTwA8r.js";import"./FlexBox-CThdpFpe.js";import{H as C,e as y,T as g}from"./Text-_gsQBTqi.js";import"./Chip-B_xrXjF2.js";import{D as v}from"./Divider-D-9YKLwP.js";import"./TreeView-DC0SN0Mf.js";import"./AppInfoRow-11o7PtV_.js";import{B as D}from"./Button-eVymgILY.js";import{B as O}from"./Box-bafqIvLg.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-DAvhqw3z.js";import"./useThemeProps-jNrCv5DZ.js";import"./useTheme-BMYaATSr.js";import"./AdapterDayjs-CGu4mZG8.js";import"./generateUtilityClass-CdhvpF3G.js";import"./styled-CMEgBY1n.js";import"./Typography-CAworhua.js";import"./generateUtilityClasses-CgJ4jqTp.js";import"./Modal-CgpksphL.js";import"./utils-C4KBlBGM.js";import"./TransitionGroupContext-DC9oPPsH.js";import"./index-Bx8CDGnS.js";import"./resolveComponentProps-Dmvi7OpY.js";import"./Popover-Bdaq__GA.js";import"./Paper-Dmj_mB_H.js";import"./TextField-QRxXOwy4.js";import"./useFormControl-CAw_IGSe.js";import"./createSvgIcon-DkE4ohbY.js";import"./SvgIcon-CwBokYLN.js";import"./createStyled-Do31eGUx.js";import"./IconButton-Izyr0r39.js";import"./ButtonBase-fOYFL5ht.js";import"./DialogContent-DEXruO2j.js";import"./Chip-eAos9up9.js";import"./DateTimePicker-CtugMVBl.js";import"./Divider-DASAfeDG.js";import"./Stack-h7isVLl6.js";import"./styled-DmUfiW7Q.js";import"./Alert-gjH-WqLd.js";import"./LinearProgress-B1yRzRdM.js";import"./Spinner-BV433BqQ.js";import"./Dialog-BTtFGHXV.js";import"./MapToggleButtonPresentational-Da5dJlDS.js";import"./Remove-SeAzckPw.js";import"./LinkButton-CO7_5Lrn.js";import"./Box-BSqQDB3u.js";import"./Container-BUEVTMEh.js";import"./TextField-BqQgEhIG.js";import"./Switch-D2kUw3CV.js";import"./DatePicker-BHkSTqU8.js";import"./Paper-rsk4XmlU.js";import"./ErrorFallback-CuM3ix8m.js";import"./ErrorFallbackText-W_ZyXVu0.js";import"./ErrorFallbackWrapper-Bl7OMJyc.js";import"./Brand-BrbhTRUI.js";import"./Edit-D1Uuwsp0.js";const x=`
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
