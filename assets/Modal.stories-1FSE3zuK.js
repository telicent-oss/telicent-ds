import{a,j as e,F as r}from"./DefaultPropsProvider-mMqPhAz4.js";import{r as m}from"./index-BBkUAzwr.js";import{M as p}from"./Modal-Cc3IplMv.js";import{D as h}from"./TelicentMark-C5iLy6vt.js";import"./DataSetIcon-Be5MVSv8.js";import"./UserIcon-Dnfx85jE.js";import"./UserStatus-DWA_AXzP.js";import"./UserProfile-BapVZ_sB.js";import{H as u,e as f,T as y}from"./Text-D0yBQujI.js";import"./Chip-C1kB__FQ.js";import"./TreeView-DF6vTG9G.js";import"./UserProfileContent-CL7-SJ5i.js";import"./FlexBox-DBC_blm8.js";import{B as w}from"./Button-B6d-5iSa.js";import{B as g}from"./Box-DOOM5p70.js";import"./jsx-runtime-BwZVo4Wn.js";import"./index-mSkvzYyn.js";import"./Popover-RATKuaxW.js";import"./styled-Coa2-1Nt.js";import"./generateUtilityClasses-CjU4Pey7.js";import"./useTheme-Dl-fNHlA.js";import"./useTheme-Dc11I-P9.js";import"./utils-CXnKKwNB.js";import"./TransitionGroupContext-C9C3ikuq.js";import"./index-BXZwOzqJ.js";import"./Paper-BpSJjDAT.js";import"./SvgIcon-9htPR1de.js";import"./FlexGrid-CF3-QHHR.js";import"./styled-BLcKEFBG.js";import"./useThemeProps-B38RGH21.js";import"./Container-Db-Htp1t.js";import"./ButtonBase-odUV3zMF.js";import"./Typography-RFRigqiF.js";import"./index-DzKG53lc.js";import"./index-_4_hgnnR.js";import"./createSvgIcon-k3y9_sX-.js";import"./colorManipulator-BnJ1IiY5.js";const C=`
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
`,ie={title:"Utils/Modal",component:p,tags:["autodocs"],argTypes:{onClose:{description:"Callback fired when the modal is closed.",type:"function"},children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},t={render:c=>{const[d,n]=m.useState(!0);return a(r,{children:[e(w,{variant:"contained",onClick:()=>n(!0),children:"Open Modal"}),e(p,{...c,open:d,onClose:(b,o)=>{if(o==="closeButtonClick"||o==="backdropClick"||o==="escapeKeyDown")n(!1);else throw new Error(`Unknown reason: ${o}`)},children:a(r,{children:[e(u,{id:"modal-title",children:"Data handling policy:"}),e(f,{id:"modal-title",children:"Data set 1:"}),e(h,{}),e(g,{sx:{mt:1,overflow:"auto",flex:"1 1 auto"},children:e(y,{whiteSpace:"preserve",children:C})})]})})]})}};var i,s,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
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
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const se=["Example"];export{t as Example,se as __namedExportsOrder,ie as default};
