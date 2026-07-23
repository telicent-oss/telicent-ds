import{j as t,a,R as h}from"./iframe-BqqKlwwa.js";import{s as p,t as x,p as u,v as I}from"./DropdownButton-DzB6ahkn.js";import"./UserIcon-CPduY34a.js";import"./Text-D367fKUk.js";import"./Chip-DP6OEXjS.js";import"./Divider-DtsR-NFR.js";import"./TreeView-g4w2Ic2N.js";import"./LinearProgress-BcbpGby2.js";import"./Spinner-C3y-_tnf.js";import"./Dialog-CU2Sdzg4.js";import"./TextField-DcCagKfQ.js";import"./Switch-BFbXwE48.js";import"./DatePicker-D6WVRr1T.js";import"./DateTimePicker-Bg2Aumfy.js";import"./LinkButton-5F2XfMGt.js";import"./Box-CMGXnnyg.js";import{a as y}from"./Container-CjnffXXv.js";import"./Paper-8WAvk_Qw.js";import"./ErrorFallback-AR6ag1S9.js";import"./ErrorFallbackText-CFF1RAi1.js";import"./ErrorFallbackWrapper-D5foAbpi.js";import"./Brand-Dl2vMMPH.js";import{M as B}from"./constants-mvoOnkOS.js";import{B as R,a as C,M}from"./MapToggleButtonPresentational-BhuzwcFT.js";import{allArgs as b}from"./BasicMap.stories-64jKK645.js";import{i as A}from"./storyconfig-DEIJDHKx.js";import{B as e}from"./Box-fJZ8R9-A.js";import{P as S}from"./Paper-CJpWpN4s.js";import{T as v}from"./Typography-r9WARuqd.js";import{D as T,d as w}from"./Divider-C9Y0zhSY.js";import{S as L}from"./Stack-DGYvNFnp.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-BeWtcQiU.js";import"./useThemeProps-BE43dwe9.js";import"./useTheme-D5fnxfrf.js";import"./AdapterDayjs-DvkxE42H.js";import"./generateUtilityClass-C21e_TMF.js";import"./styled-DYH3NNtb.js";import"./Modal-CFi7NpCZ.js";import"./utils-ClVsDaXg.js";import"./TransitionGroupContext-DiVglu5Y.js";import"./index-CRMvLHot.js";import"./resolveComponentProps-Cd0rbuoE.js";import"./generateUtilityClasses-CXTZVc4r.js";import"./TextField-CSaMK6Rk.js";import"./useFormControl-CJ-AiNnx.js";import"./createSvgIcon-1vjhxYae.js";import"./createStyled-2Pi8n9Bx.js";import"./IconButton-C0yfI_AJ.js";import"./ButtonBase-Bplzc8va.js";import"./DialogContent-CtGptt-v.js";import"./Button--P2V-vbf.js";import"./Chip-Bg9GS4ad.js";import"./Close-KcKFZADQ.js";import"./styled-BKL9P30Y.js";import"./Edit-oZ_9Z-0E.js";import"./Remove-CJtGZM1W.js";const P=({scrollable:r})=>t(e,{sx:{p:2},children:Array.from({length:7},(k,s)=>t(e,{sx:{mb:1,p:1,borderRadius:1},children:a(v,{children:["Result Item ",s+1]})},s))}),D=()=>{const r=h.useRef(null);return t(u,{ref:r,drawerWidth:177,children:P({scrollable:r!=null&&r.current?r.current.getContainer():window})})},Wt={title:"Component Library/InsetInMap",component:p,decorators:[r=>t(e,{sx:{width:"800px",height:"calc(50vh - 40px)",position:"relative"},children:t(B,{initialMapStyleConfig:A,children:t(r,{})})})],argTypes:{},args:{}},o=r=>t("p",{style:{color:"red"},children:r}),j={topLeft:o("topLeft"),top:o("top"),topRight:o("topRight"),right:o("right"),bottomRight:o("bottomRight"),bottom:o("bottom"),bottomLeft:o("bottomLeft"),left:o("left"),center:o("center")},i={render:r=>t(p,{content:t("p",{style:{opacity:.2,fontSize:"2em"},children:Array(20).fill("CONTENT").join(" ")}),controlArea:j})},n={render:r=>t(p,{content:t(x,{...b}),controlArea:{left:t(D,{}),topRight:t(y,{children:a(L,{direction:"row",spacing:2,alignItems:"center",children:[t(I,{}),t(M,{onClick:()=>alert("Toggle map off")})]})}),bottomRight:t(e,{m:4,children:t(S,{children:t(e,{p:1,sx:{height:44,display:"flex",alignItems:"center",borderRadius:1},children:a(e,{sx:{display:"flex",alignItems:"center",[`& .${w.root}`]:{mx:1}},children:[t(R,{}),t(T,{orientation:"vertical",flexItem:!0}),t(C,{})]})})})})}})};var m,l,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
