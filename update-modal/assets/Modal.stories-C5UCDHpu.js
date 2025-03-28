import{a as r,j as e,F as i}from"./DefaultPropsProvider-ZjhccZnB.js";import{r as w}from"./index-BBkUAzwr.js";import{i as p}from"./FeatureMap-V1P7jxJV.js";import{D as C}from"./Divider-9cYgS_Kv.js";import"./DataSetIcon-BOfCbmrC.js";import"./UserIcon-B6OSrQE1.js";import"./UserProfile-rIr5EAoy.js";import{H as y,e as g,T as v}from"./Text-Chcp7No1.js";import"./Chip-DHeIEnT7.js";import"./TreeView-DJcHSySb.js";import"./UserProfileContent-BjE7fYQQ.js";import"./FlexBox-CHX3w-Ff.js";import{B as D}from"./Button-DG02f22Q.js";import{B as O}from"./Box-DVpyV88R.js";import"./jsx-runtime-BwZVo4Wn.js";import"./iframe-Cj2mmaxv.js";import"../sb-preview/runtime.js";import"./index-BXZwOzqJ.js";import"./UIThemeProvider-DeyOpFEN.js";import"./colorManipulator-zO1DXvwL.js";import"./useTheme-BAsjQMSl.js";import"./index-B47g9DW4.js";import"./ButtonBase-GdOU_fqa.js";import"./styled-BT4RjJzR.js";import"./generateUtilityClasses-Ope_UxWr.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./Popover-rSPSjYHH.js";import"./useTheme-DIIM1Wcn.js";import"./utils-C6E22oQ1.js";import"./Paper-Cul9nzd-.js";import"./FlexGrid-Y8kMg0vc.js";import"./styled-DYky2rJa.js";import"./useThemeProps-BAuVkQ7A.js";import"./LinearProgress-DD-ZDPzk.js";import"./Button-B_9AedaA.js";import"./Container-CDaxYc3T.js";import"./Card-BHi_PHH0.js";import"./CardActions-C035-885.js";import"./index-_4_hgnnR.js";import"./Popover-Dnj75uG4.js";import"./SvgIcon-0MOxWfTP.js";import"./createSvgIcon-DQcKRcx_.js";const x=`
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
