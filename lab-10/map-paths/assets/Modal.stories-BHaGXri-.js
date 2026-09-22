import{r as w,a,j as e,F as i}from"./iframe-DeZonVVi.js";import{s as p}from"./DropdownButton-DuRkH6DZ.js";import"./UserIcon-CfpElPeY.js";import"./FlexBox-Bftp_nQc.js";import{H as C,e as y,T as g}from"./Text-C0mzIfB2.js";import"./Chip-Dh5OlQTt.js";import{D as v}from"./Divider-Bv35XldE.js";import"./TreeView-32B6HZUx.js";import"./AppInfoRow-DszWSP2X.js";import{B as D}from"./Button-BoCJN4PX.js";import{B as O}from"./Box-BAzk8OQb.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-D9KZcNVu.js";import"./useThemeProps-Lv7B2akS.js";import"./useTheme-B8jqmRVL.js";import"./AdapterDayjs-B7HxcRtC.js";import"./generateUtilityClass-p4bA1NX5.js";import"./styled-D6seg_B4.js";import"./Typography-2PttXhpW.js";import"./generateUtilityClasses-CimY9LgW.js";import"./Modal-DYWZLwVU.js";import"./utils-9ncfeNkJ.js";import"./TransitionGroupContext-CH4PMzPU.js";import"./index-My-nnC9f.js";import"./resolveComponentProps-C0Utyfv9.js";import"./Popover-BzpzATK1.js";import"./Paper-DgtKsUqn.js";import"./TextField-B3W91zL-.js";import"./useFormControl-BoUxZNr0.js";import"./createSvgIcon-Dogjg4rl.js";import"./SvgIcon-DjfvrmE-.js";import"./createStyled-CEXDcIRx.js";import"./IconButton-rtDjgKCl.js";import"./ButtonBase-Be_gPS9s.js";import"./DialogContent-CA5BMy-i.js";import"./Chip-ChphExPy.js";import"./DateTimePicker-YmZDXlg1.js";import"./Divider-BoEU1WqK.js";import"./Stack-BnGRQa2r.js";import"./styled-DVC7FOfJ.js";import"./Alert-Cuh3PtmZ.js";import"./LinearProgress-Bz6CuI0i.js";import"./Spinner-CxmGl9q1.js";import"./Dialog-4kFskmbY.js";import"./MapToggleButtonPresentational-6wGMhwir.js";import"./Remove-BzguW0rP.js";import"./LinkButton-DJ9gag9W.js";import"./Box-v58hSZ3Z.js";import"./Container-D2kmBBme.js";import"./TextField-Ga-r0b6K.js";import"./Switch-xXZfbisN.js";import"./DatePicker-cnuVO_nT.js";import"./Paper-BPgBVQZV.js";import"./ErrorFallback-N6coLDae.js";import"./ErrorFallbackText-JEgg_M8U.js";import"./ErrorFallbackWrapper-BNRKlR7p.js";import"./Brand-5Pvd6-Ps.js";import"./Edit-Bh-DAluS.js";const x=`
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
