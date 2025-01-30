import{j as e,a as s,F as d}from"./DefaultPropsProvider-D55Wj1Sq.js";import{r as y}from"./index-Du_IP5cC.js";import{C as b,D as g}from"./TelicentMark-D90GhUX1.js";import{z as o}from"./index-ans_9-if.js";import{B as c}from"./Box-BykdrlxJ.js";import{B as f}from"./Button-C2NOfWvY.js";import{M as C}from"./Popover-COQfAdtM.js";import"./DataSetIcon-DxllRCWx.js";import"./UserIcon-AsBRbcvg.js";import"./UserStatus-DI5VU-6c.js";import"./UserProfile-BKUliVBo.js";import{H as w,e as k,T as x}from"./Text-CE-o78-6.js";import"./Chip-CMQyemFA.js";import"./TreeView-0gM7jf_m.js";import"./UserProfileContent-DkFU9lUW.js";import"./jsx-runtime-Dwss98Nb.js";import"./styled-aipfhsBS.js";import"./SvgIcon-sXCG3KbY.js";import"./generateUtilityClasses-Cw-uw2o7.js";import"./FlexGrid-Ckvfi2hB.js";import"./styled-zinR3__d.js";import"./useTheme-CtImnkTu.js";import"./useThemeProps-DM2VlJkO.js";import"./useTheme-B2MLISHX.js";import"./Container-DApHUUiT.js";import"./Menu-qgl2HGHf.js";import"./ButtonBase-DU-mBhfv.js";import"./TransitionGroupContext-DmssZhy-.js";import"./index-DfQQp3ks.js";import"./utils-CtVJ-2PG.js";import"./index-DtoIJoF2.js";import"./Paper-K73ck01N.js";import"./resolveComponentProps-UrK7gkxe.js";import"./index-Df2kh431.js";import"./createSvgIcon-BfNnQ0Hm.js";import"./colorManipulator-oYQv4ILr.js";const v=o.object({type:o.union([o.string(),o.function(),o.symbol()]),props:o.record(o.any()),key:o.union([o.string(),o.number(),o.null()]).optional()}),D=o.object({open:o.boolean(),children:v,className:o.string().optional(),id:o.string().optional(),role:o.string().optional(),closeAfterTransition:o.boolean().optional(),components:o.any().optional(),componentsProps:o.any().optional(),container:o.any().optional(),disableAutoFocus:o.boolean().optional(),disableEnforceFocus:o.boolean().optional(),disableEscapeKeyDown:o.boolean().optional(),disablePortal:o.boolean().optional(),disableRestoreFocus:o.boolean().optional(),disableScrollLock:o.boolean().optional(),hideBackdrop:o.boolean().optional(),keepMounted:o.boolean().optional(),manager:o.any().optional(),onBackdropClick:o.function().optional(),onClose:o.function().optional(),onTransitionEnter:o.function().optional(),onTransitionExit:o.function().optional(),sx:o.any().optional(),BackdropComponent:o.any().optional(),BackdropProps:o.any().optional(),slots:o.any().optional(),slotProps:o.any().optional()}),B=D.omit({slots:!0,slotProps:!0,BackdropComponent:!0,BackdropProps:!0,closeAfterTransition:!0,components:!0,componentsProps:!0,container:!0,disableAutoFocus:!0,disableEnforceFocus:!0,disableEscapeKeyDown:!0,disableRestoreFocus:!0,hideBackdrop:!0,keepMounted:!0,onBackdropClick:!0,onTransitionEnter:!0,onTransitionExit:!0}).passthrough(),p=({children:t,...n})=>(B.parse({children:t,...n}),e(C,{...n,children:s(c,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",p:2,borderRadius:1,boxShadow:24,minWidth:300,maxWidth:"90vw",maxHeight:"90vh",display:"flex",flexDirection:"column"},children:[e(c,{sx:{display:"flex",justifyContent:"flex-end"},children:s(f,{onClick:a=>{var l;return(l=n.onClose)==null?void 0:l.call(n,a,"closeButtonClick")},color:"inherit",sx:{fontSize:18},children:["Close ",e(b,{sx:{fontSize:14}})]})}),t]})}));p.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{onClose:{required:!0,tsType:{name:"union",raw:`| ((
    event: {},
    reason:
      | "backdropClick" // MUI in-built
      | "escapeKeyDown" // MUI in-built
      | "closeButtonClick" // custom event. Maybe delete and _misuse_ "backdropClick"
  ) => void)
| undefined`,elements:[{name:"unknown"},{name:"undefined"}]},description:""}}};const T=`
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
`,uo={title:"Utils/Modal",component:p,tags:["autodocs"],argTypes:{onClose:{description:"Callback fired when the modal is closed.",type:"function"},children:{control:!1,description:"Content inside the component",table:{type:{summary:"ReactNode"}}}}},r={render:t=>{const[n,a]=y.useState(!0);return s(d,{children:[e(f,{variant:"contained",onClick:()=>a(!0),children:"Open Modal"}),e(p,{...t,open:n,onClose:(M,i)=>{if(i==="closeButtonClick"||i==="backdropClick"||i==="escapeKeyDown")a(!1);else throw new Error(`Unknown reason: ${i}`)},children:s(d,{children:[e(w,{id:"modal-title",children:"Data handling policy:"}),e(k,{id:"modal-title",children:"Data set 1:"}),e(g,{}),e(c,{sx:{mt:1,overflow:"auto",flex:"1 1 auto"},children:e(x,{whiteSpace:"preserve",children:T})})]})})]})}};var u,m,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const mo=["Example"];export{r as Example,mo as __namedExportsOrder,uo as default};
