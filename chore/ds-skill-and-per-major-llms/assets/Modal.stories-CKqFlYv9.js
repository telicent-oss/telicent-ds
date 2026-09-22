import{r as w,a,j as e,F as i}from"./iframe-B2Ay8HHY.js";import{s as p}from"./DropdownButton-CmgzjG5S.js";import"./UserIcon-Ct43AKF1.js";import"./FlexBox-Cd5iPm6B.js";import{H as C,e as y,T as g}from"./Text-C3v24AG7.js";import"./Chip-pXx3H7uq.js";import{D as v}from"./Divider-DW0OUxzq.js";import"./TreeView-B36RPHSJ.js";import"./AppInfoRow-t3PiwP7k.js";import{B as D}from"./Button-CmApE-h2.js";import{B as O}from"./Box-DiR6fmjD.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-Ct5eCcN4.js";import"./useThemeProps-ieKjDhbz.js";import"./useTheme-DUfeIRPs.js";import"./AdapterDayjs-piU1cTWH.js";import"./generateUtilityClass-DRhqcJ3C.js";import"./styled-Cp8rcGr5.js";import"./Typography-CaMlTbgu.js";import"./generateUtilityClasses-n51uImyc.js";import"./Modal-Dhbreh5C.js";import"./utils-BuawHli2.js";import"./TransitionGroupContext-BiERh0aS.js";import"./index-B8sFEjRQ.js";import"./resolveComponentProps-DavTyxC5.js";import"./Popover-Dd-QG0yq.js";import"./Paper-GGZQsb9V.js";import"./TextField-DgpfhAoQ.js";import"./useFormControl-CfQyKxf4.js";import"./createSvgIcon-DJYY3zlJ.js";import"./SvgIcon-O7zvTOEi.js";import"./createStyled-LnKMAta8.js";import"./IconButton-DJ3dnZFG.js";import"./ButtonBase-CcZ3ellP.js";import"./DialogContent-VKCYrYYG.js";import"./Chip-CoN_kc_F.js";import"./DateTimePicker-VjhqFvjd.js";import"./Divider-0j4JbSTp.js";import"./Stack-CERZHvX_.js";import"./styled-BVl11CwU.js";import"./Alert-C8wDmmlT.js";import"./LinearProgress-CcZu-den.js";import"./Spinner-CLBlp-1z.js";import"./Dialog-BQEcgH8b.js";import"./MapToggleButtonPresentational-CBq2aYZI.js";import"./Remove-BxIVYSTr.js";import"./LinkButton-1B0tJmq_.js";import"./Box-BWzfxiHj.js";import"./Container-IuJtd-i_.js";import"./TextField-knF78Q6V.js";import"./Switch-Bwl2j2OC.js";import"./DatePicker-Q5cJzMzd.js";import"./Paper-CTXRsw4i.js";import"./ErrorFallback-CCOH-k8x.js";import"./ErrorFallbackText-BwbRAXPw.js";import"./ErrorFallbackWrapper-iyce9Q1e.js";import"./Brand-CniOL6Cz.js";import"./Edit-DJOWn5_1.js";const x=`
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
