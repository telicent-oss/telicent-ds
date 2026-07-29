import{j as t,a,R as h}from"./iframe-lqtTyPDV.js";import{s as p,t as x,p as u,v as I}from"./DropdownButton-BiQZTsSN.js";import"./UserIcon-CCWXRARu.js";import"./Text-qBJvQAbh.js";import"./Chip-B0KPLxd0.js";import"./Divider-CizCOsrH.js";import"./TreeView-Cx3DBEy0.js";import"./LinearProgress-D91QGpmj.js";import"./Spinner-CoTb4xM3.js";import"./Dialog-B0EJL6jv.js";import"./TextField-BiRVulas.js";import"./Switch-UYcRIQvQ.js";import"./DatePicker-Hg41mnHR.js";import"./DateTimePicker-DkGfB0lr.js";import"./LinkButton-B5iGNGjh.js";import"./Box-VVrcLiMQ.js";import{a as y}from"./Container-CXWOjLTi.js";import"./Paper-Cg-Z_8b0.js";import"./ErrorFallback-b5W5Az-f.js";import"./ErrorFallbackText-C_HPDrVM.js";import"./ErrorFallbackWrapper-zYtUSZTF.js";import"./Brand-D_RHUJn0.js";import{M as B}from"./constants-DHZNsyg3.js";import{B as R,a as C,M}from"./MapToggleButtonPresentational-BoxmLCzM.js";import{allArgs as b}from"./BasicMap.stories-B_5vYAV_.js";import{i as A}from"./storyconfig-DEIJDHKx.js";import{B as e}from"./Box-D9fQMR-m.js";import{P as S}from"./Paper-CAMM_sGP.js";import{T as v}from"./Typography-JvRod9_h.js";import{D as T,d as w}from"./Divider-Sgzys822.js";import{S as L}from"./Stack-CRGQbSIw.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-bXg8jihE.js";import"./useThemeProps-ByihHSEs.js";import"./useTheme-BKtc1luz.js";import"./AdapterDayjs-BxMPdu73.js";import"./generateUtilityClass-Nor538iS.js";import"./styled-BNSlxa3g.js";import"./Modal-C2iMaJrT.js";import"./utils-CDZsqiOr.js";import"./TransitionGroupContext-CP4QTGTc.js";import"./index-Ct7m0A3p.js";import"./resolveComponentProps-D9ysefdV.js";import"./generateUtilityClasses-Dcld8p7_.js";import"./TextField-DU50OXKL.js";import"./useFormControl-BaHyTPGQ.js";import"./createSvgIcon-pD-T4X64.js";import"./createStyled-DEZqOrhE.js";import"./IconButton-CFe2D2CK.js";import"./ButtonBase-CG2-1ya1.js";import"./DialogContent-DminlgLj.js";import"./Button-ecopQR6Q.js";import"./Chip-b0N7Bs90.js";import"./Close-B_FscGLy.js";import"./styled-PDD6VUwM.js";import"./Edit-B-6C9sjP.js";import"./Remove-BP8dJaea.js";const P=({scrollable:r})=>t(e,{sx:{p:2},children:Array.from({length:7},(k,s)=>t(e,{sx:{mb:1,p:1,borderRadius:1},children:a(v,{children:["Result Item ",s+1]})},s))}),D=()=>{const r=h.useRef(null);return t(u,{ref:r,drawerWidth:177,children:P({scrollable:r!=null&&r.current?r.current.getContainer():window})})},Wt={title:"Component Library/InsetInMap",component:p,decorators:[r=>t(e,{sx:{width:"800px",height:"calc(50vh - 40px)",position:"relative"},children:t(B,{initialMapStyleConfig:A,children:t(r,{})})})],argTypes:{},args:{}},o=r=>t("p",{style:{color:"red"},children:r}),j={topLeft:o("topLeft"),top:o("top"),topRight:o("topRight"),right:o("right"),bottomRight:o("bottomRight"),bottom:o("bottom"),bottomLeft:o("bottomLeft"),left:o("left"),center:o("center")},i={render:r=>t(p,{content:t("p",{style:{opacity:.2,fontSize:"2em"},children:Array(20).fill("CONTENT").join(" ")}),controlArea:j})},n={render:r=>t(p,{content:t(x,{...b}),controlArea:{left:t(D,{}),topRight:t(y,{children:a(L,{direction:"row",spacing:2,alignItems:"center",children:[t(I,{}),t(M,{onClick:()=>alert("Toggle map off")})]})}),bottomRight:t(e,{m:4,children:t(S,{children:t(e,{p:1,sx:{height:44,display:"flex",alignItems:"center",borderRadius:1},children:a(e,{sx:{display:"flex",alignItems:"center",[`& .${w.root}`]:{mx:1}},children:[t(R,{}),t(T,{orientation:"vertical",flexItem:!0}),t(C,{})]})})})})}})};var m,l,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <InsetInMap content={<p style={{
    opacity: 0.2,
    fontSize: '2em'
  }}>{Array(20).fill("CONTENT").join(" ")}</p>} controlArea={allControlAreas} />
}`,...(c=(l=i.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,g,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <InsetInMap {...{
    content: <BasicMap {...allArgs} />,
    controlArea: {
      left: <DrawerWithResults />,
      topRight: <Container>
              <Stack direction="row" spacing={2} alignItems="center">
                <LayerSelectorInsetInMap />
                <MapToggleButtonPresentational onClick={() => alert("Toggle map off")} />
              </Stack>
            </Container>,
      bottomRight: <Box m={4}>
              <Paper>
                <Box p={1} sx={{
            height: 44,
            // figma 68 - 2x12
            display: "flex",
            alignItems: "center",
            borderRadius: 1
          }}>
                  <Box sx={{
              display: "flex",
              alignItems: "center",
              [\`& .\${dividerClasses.root}\`]: {
                mx: 1
              }
            }}>
                    <ButtonZoomIn />
                    <Divider orientation="vertical" flexItem />
                    <ButtonZoomOut />
                  </Box>
                </Box>
              </Paper>
            </Box>
    }
  }} />
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const Zt=["AllSlices","MapExample"];export{i as AllSlices,n as MapExample,Zt as __namedExportsOrder,Wt as default};
