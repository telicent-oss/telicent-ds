import{a,j as e,F as i}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as w}from"./index-Dl6G-zuu.js";import{s as p}from"./Drawer-ChvPPhdC.js";import"./TelicentHorizontalSVG-xSzC_QTu.js";import"./DataSetIcon-DGj6m1BG.js";import"./UserIcon-Cx-r992D.js";import"./UserProfile-N6pr5-2m.js";import{H as C,e as y,T as g}from"./Text-C4zpNQRp.js";import"./Chip-pzoqvFR6.js";import{a as v}from"./Divider-BQZg7t2N.js";import"./TreeView-gav8i2Kk.js";import"./UserProfileContent-DHz0GTL-.js";import"./FlexBox-D2o1BZNO.js";import{B as D}from"./Button-D7yzuVoT.js";import{B as O}from"./Box-B1z1Qd0d.js";import"./jsx-runtime-DMAvRu52.js";import"./createSvgIcon-DiFjgoLh.js";import"./DefaultPropsProvider-DokkfWXe.js";import"./SvgIcon-CwSgo-eM.js";import"./styled-Bh4j-phE.js";import"./generateUtilityClasses-BrZc1hjY.js";import"./constants-Cti-p_rp.js";import"./iframe-DjR5Pwc1.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./ButtonBase-Do7AHI9h.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-Bg6tHTX3.js";import"./Popover-jZh0iIOv.js";import"./useTheme-Sw6qfmru.js";import"./useTheme-c__JTuJp.js";import"./utils-C-XDAD8M.js";import"./Paper-DjaG4Kki.js";import"./useId-CkA8naEk.js";import"./FlexGrid-JVYOOaHa.js";import"./styled-ilcqLD5m.js";import"./useThemeProps-BNFryEOP.js";import"./UIThemeProvider-K1iMkQi9.js";import"./colorManipulator-Cuc7me6V.js";import"./ThemeProvider-mIQjSFi-.js";import"./IconButton-56B7AwOW.js";import"./LinearProgress-tobgb8oL.js";import"./Button-w9tbBUtr.js";import"./SecondaryButton-BcPTyAr_.js";import"./Typography-DOS1jQiX.js";import"./Container-bU783VGj.js";import"./Card-CACrcWJQ.js";import"./CardActions-ChQ-9HT4.js";import"./index-BfyspvgH.js";import"./Popover-DEe1UNyj.js";import"./Paper-BMhFNqQN.js";import"./ErrorFallback-D0Q64ifN.js";import"./ErrorFallbackText-C1J-oAKu.js";import"./ErrorFallbackWrapper-D-KZ366e.js";import"./MapToggleButtonPresentational-CBr8W7gO.js";import"./List-B5LeInEP.js";const x=`
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
