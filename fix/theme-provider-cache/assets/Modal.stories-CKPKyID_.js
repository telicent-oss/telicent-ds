import{a as r,j as e,F as i}from"./DefaultPropsProvider-ZTfV1Zta.js";import{r as w}from"./index-BBkUAzwr.js";import{i as p}from"./FeatureMap-CnlSDypo.js";import{D as C}from"./Divider-U0HyYZdi.js";import"./DataSetIcon-CHIrb2GC.js";import"./UserIcon-DmjklXFK.js";import"./UserProfile-pLaLHjzb.js";import{H as y,e as g,T as v}from"./Text-CGNagbCi.js";import"./Chip-Bi37CbO4.js";import"./TreeView-lHYan-nM.js";import"./UserProfileContent-B92njon_.js";import"./FlexBox-DADmAnZF.js";import{B as D}from"./Button-DC-CYhQc.js";import{B as O}from"./Box-DBuGxpzg.js";import"./jsx-runtime-BwZVo4Wn.js";import"./iframe-dVSfVJst.js";import"../sb-preview/runtime.js";import"./index-BXZwOzqJ.js";import"./UIThemeProvider-DA3H7xuX.js";import"./colorManipulator-CwxWA58Q.js";import"./useTheme-BusmB1QR.js";import"./index-A9x96Awu.js";import"./ButtonBase-B36byFIM.js";import"./styled-jMWuTdIG.js";import"./generateUtilityClasses-DD2dCBy1.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./Popover-CxoUVLIl.js";import"./useTheme-DUKUC1WO.js";import"./utils-4IBA19w2.js";import"./Paper-BtR36xUR.js";import"./FlexGrid-CLKmKS3u.js";import"./styled-NI2V6uj_.js";import"./useThemeProps-BdYmkKoE.js";import"./LinearProgress-ChpUz72G.js";import"./Button-D3scS8V2.js";import"./Container-C8J4gsN5.js";import"./Card-BfV-nf9i.js";import"./CardActions-C19l4eM5.js";import"./index-_4_hgnnR.js";import"./Popover-C2trNH_s.js";import"./SvgIcon-DM7CEwi3.js";import"./createSvgIcon-B0Qv8yy1.js";const x=`
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
`,fe={title:"Utils/Modal",component:p,tags:["autodocs"],argTypes:{onClose:{description:"Callback fired when the modal is closed.",type:"function"},children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},t={render:s=>{const[l,o]=w.useState(!1);return r(i,{children:[e(D,{variant:"contained",onClick:()=>o(!0),children:"Open Modal"}),e(p,{...s,open:l,onClose:(B,n)=>{if(n==="closeButtonClick"||n==="backdropClick"||n==="escapeKeyDown")o(!1);else throw new Error(`Unknown reason: ${n}`)},children:r(i,{children:[e(y,{id:"modal-title",children:"Data handling policy:"}),e(g,{id:"modal-title",children:"Data set 1:"}),e(C,{}),e(O,{sx:{mt:1,overflow:"auto",flex:"1 1 auto"},children:e(v,{whiteSpace:"preserve",children:x})})]})})]})}},a={render:s=>{const[l,o]=w.useState(!1);return r(i,{children:[e(D,{variant:"contained",onClick:()=>o(!0),children:"Open Modal"}),e(p,{...s,open:l,onClose:(B,n)=>{if(n==="closeButtonClick"||n==="backdropClick"||n==="escapeKeyDown")o(!1);else throw new Error(`Unknown reason: ${n}`)},hideCloseButton:!0,children:r(i,{children:[e(y,{id:"modal-title",children:"Data handling policy:"}),e(g,{id:"modal-title",children:"Data set 1:"}),e(C,{}),e(O,{sx:{mt:1,overflow:"auto",flex:"1 1 auto"},children:e(v,{whiteSpace:"preserve",children:x})})]})})]})}};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const we=["Example","WithNoCloseButton"];export{t as Example,a as WithNoCloseButton,we as __namedExportsOrder,fe as default};
