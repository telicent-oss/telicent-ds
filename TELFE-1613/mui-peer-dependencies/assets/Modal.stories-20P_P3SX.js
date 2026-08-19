import{r as w,a,j as e,F as i}from"./iframe-O7ZSOzH6.js";import{o as p}from"./DropdownButton-9IQM39iB.js";import"./UserIcon-CVW633Wu.js";import"./FlexBox-DE23WfsN.js";import{H as C,e as y,T as g}from"./Text-nRcHvf3o.js";import"./Chip-Bfi3CHWH.js";import{D as v}from"./Divider-CjbOd_kj.js";import"./TreeView-BB5-CSqu.js";import"./AppInfoRow-0HJaNGZZ.js";import{B as D}from"./Button-0ICa7MST.js";import{B as O}from"./Box-Bh48kC-V.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-DiSzJ5RC.js";import"./useThemeProps-CHVM-BV5.js";import"./useTheme-CyHOJq73.js";import"./AdapterDayjs-B5AjoP0Q.js";import"./generateUtilityClass-CaBvuMTH.js";import"./styled-DIoSYlWj.js";import"./Typography-ClJj-jBK.js";import"./generateUtilityClasses-Ck-qx9fV.js";import"./Modal-9ChNdpfT.js";import"./utils-SoSev3en.js";import"./TransitionGroupContext-B7rwdiyI.js";import"./index-5Y2jY6OW.js";import"./resolveComponentProps-BETcHjWA.js";import"./Popover-BKe0lZr-.js";import"./Paper-Dr6YfsOz.js";import"./TextField-BbFA9wlk.js";import"./useFormControl-Cg-wtjlR.js";import"./createSvgIcon-RHoLritL.js";import"./SvgIcon-C9V7Ug2C.js";import"./createStyled-CVG07lMp.js";import"./IconButton-B8s4GQ3S.js";import"./ButtonBase-BU7A4vUM.js";import"./DialogContent-DqMmuBKo.js";import"./Chip-VOgUgKU3.js";import"./DateTimePicker-D-qf43pp.js";import"./Divider-CF1tXDob.js";import"./Stack-BrwT5Je_.js";import"./styled-CkMq9Go9.js";import"./Alert-Djh-wYbn.js";import"./LinearProgress-CFUTsEE5.js";import"./Spinner-C_yQLXLp.js";import"./Dialog-WoMp7Hm5.js";import"./MapToggleButtonPresentational-BtoIJ6fP.js";import"./Remove-DOKjbcKs.js";import"./LinkButton-BBnTv_j7.js";import"./Box-CGifCS97.js";import"./Container-Cnxb2MGW.js";import"./TextField-as-GdJ4B.js";import"./Switch-BpeAZxQ1.js";import"./DatePicker-B_n7IfRI.js";import"./Paper-BhX0sOWI.js";import"./ErrorFallback-CLGQlz6c.js";import"./ErrorFallbackText-Dz979o06.js";import"./ErrorFallbackWrapper-BWOXKjAC.js";import"./Brand-uV7cUGM3.js";import"./constants-B5xQjWnv.js";import"./Edit-BerfezYI.js";const x=`
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
