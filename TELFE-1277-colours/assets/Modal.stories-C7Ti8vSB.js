import{a,j as e,F as i}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{r as w}from"./index-Dl6G-zuu.js";import{t as p}from"./Drawer-iGERundp.js";import"./TelicentHorizontalSVG-Ba1YJ692.js";import"./DataSetIcon-CPAcG_uv.js";import"./UserIcon-kmeEhtTQ.js";import"./UserProfile-tgHNlyY_.js";import{H as C,e as y,T as g}from"./Text-DLq4GXsM.js";import"./Chip-BBluW8aP.js";import{a as v}from"./Divider-D_v03hYO.js";import"./TreeView-DroTfa6S.js";import"./UserProfileContent-BtPWIMCF.js";import"./FlexBox-BEZBdzr_.js";import{B as D}from"./Button-BRXLRAOR.js";import{B as O}from"./Box-Cfx8uO0s.js";import"./jsx-runtime-DMAvRu52.js";import"./createSvgIcon-DuRnm9w0.js";import"./defaultTheme-BpkXhfeA.js";import"./SvgIcon-CGwi2XF8.js";import"./styled-DzpWvPfW.js";import"./generateUtilityClasses-DiXVJdeX.js";import"./DefaultPropsProvider-C67vPJX1.js";import"./constants-BdX9_XpC.js";import"./iframe-B9yYYO_z.js";import"../sb-preview/runtime.js";import"./index-B0kOWIl9.js";import"./types-JQgdQoTs.js";import"./useTheme-DHuFs4j8.js";import"./useTheme-D_QPa1U6.js";import"./GlobalStyles-BOcUuy4L.js";import"./GlobalStyles-CIfgeHMT.js";import"./ButtonBase-BKsdIIYL.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-CZM7sGf7.js";import"./Popover-DjMyMVBa.js";import"./utils-CzGd2JMT.js";import"./Paper-CjpJL0pm.js";import"./Select-llqeadix.js";import"./isMuiElement-DAcuSkv2.js";import"./Menu-DfDRjEgM.js";import"./useId-CkA8naEk.js";import"./UIThemeProvider-D9srXGTg.js";import"./colorManipulator-B-1-M9MD.js";import"./ThemeProvider-D4yHglI3.js";import"./IconButton-DRAdqdZd.js";import"./LinearProgress-DzU0Zg_A.js";import"./styled-Ck8GJYy8.js";import"./Typography-D7Rc9HSx.js";import"./Button-CP702T-k.js";import"./LinkButton-u-U60Uzu.js";import"./Container-S5gmVac-.js";import"./useThemeProps--JElsblH.js";import"./Card-DFg-qCLN.js";import"./CardActions-CRS1Zsa7.js";import"./index-BfyspvgH.js";import"./Popover-BCuFO5oU.js";import"./Paper-DV1QHDO7.js";import"./ErrorFallback-Cb7i3evq.js";import"./ErrorFallbackText-D4-31auA.js";import"./ErrorFallbackWrapper-DPNCVGi4.js";import"./MapToggleButtonPresentational-ktAH0RyB.js";import"./List-Dh3f9sEI.js";const x=`
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
`,Ue={title:"Utils/Modal",component:p,tags:["autodocs"],argTypes:{onClose:{description:"Callback fired when the modal is closed.",type:"function"},children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},n={render:s=>{const[l,t]=w.useState(!1);return a(i,{children:[e(D,{variant:"contained",onClick:()=>t(!0),children:"Open Modal"}),e(p,{...s,open:l,onClose:(B,o)=>{if(o==="closeButtonClick"||o==="backdropClick"||o==="escapeKeyDown")t(!1);else throw new Error(`Unknown reason: ${o}`)},children:a(i,{children:[e(C,{id:"modal-title",children:"Data handling policy:"}),e(y,{id:"modal-title",children:"Data set 1:"}),e(v,{}),e(O,{sx:{mt:1,overflow:"auto",flex:"1 1 auto"},children:e(g,{whiteSpace:"preserve",children:x})})]})})]})}},r={render:s=>{const[l,t]=w.useState(!1);return a(i,{children:[e(D,{variant:"contained",onClick:()=>t(!0),children:"Open Modal"}),e(p,{...s,open:l,onClose:(B,o)=>{if(o==="closeButtonClick"||o==="backdropClick"||o==="escapeKeyDown")t(!1);else throw new Error(`Unknown reason: ${o}`)},hideCloseButton:!0,children:a(i,{children:[e(C,{id:"modal-title",children:"Data handling policy:"}),e(y,{id:"modal-title",children:"Data set 1:"}),e(v,{}),e(O,{sx:{mt:1,overflow:"auto",flex:"1 1 auto"},children:e(g,{whiteSpace:"preserve",children:x})})]})})]})}};var c,d,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const Le=["Example","WithNoCloseButton"];export{n as Example,r as WithNoCloseButton,Le as __namedExportsOrder,Ue as default};
