import{j as t,a,R as h}from"./iframe-Crov0WQz.js";import{s as p,t as x,p as u,v as I}from"./DropdownButton-CLtoK2nQ.js";import"./UserIcon-BpACv-KD.js";import"./Text-D0Fnpi2n.js";import"./Chip-C1hb46nu.js";import"./Divider-DjIAefNA.js";import"./TreeView-BhCu4_vt.js";import"./LinearProgress-xJR7lhkP.js";import"./Spinner-BFZivWxB.js";import"./Dialog-DoAt61AO.js";import"./TextField-08-w4XG5.js";import"./Switch-B39EAJit.js";import"./DatePicker-PvBZCpyj.js";import"./DateTimePicker-CZdkDgZx.js";import"./LinkButton-CKRF2-uU.js";import{a as y}from"./Container-B68-6-yw.js";import"./Paper-DuUVMjJy.js";import"./ErrorFallback-DVSKIMBt.js";import"./ErrorFallbackText-C98aj5QV.js";import"./ErrorFallbackWrapper-CV687E_O.js";import"./Brand-DTDlbVRJ.js";import{M as B}from"./constants-BsbrBYOu.js";import{B as R,a as C,M}from"./MapToggleButtonPresentational-C7M7o9lk.js";import{allArgs as b}from"./BasicMap.stories-BfcIb1ej.js";import{i as A}from"./storyconfig-DEIJDHKx.js";import{B as e}from"./Box-BG0wW1Gw.js";import{P as S}from"./Paper-Dqj2J0bD.js";import{T as v}from"./Typography-B9r5TGn1.js";import{D as T,d as w}from"./Divider-B4WphmzU.js";import{S as L}from"./Stack-Bfojjyxu.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-BHR99ymZ.js";import"./useThemeProps-ZmDRkbFp.js";import"./useTheme-B_goZ4qo.js";import"./AdapterDayjs-5PvZCLYQ.js";import"./styled-Iiak7Ogq.js";import"./Modal-Ckwnu49q.js";import"./utils-DmCjym0s.js";import"./TransitionGroupContext-D_iDfzVR.js";import"./index-DKz44-9c.js";import"./generateUtilityClasses-YSREvbxX.js";import"./TextField-DoWg8ST_.js";import"./useFormControl-nQOCEbZr.js";import"./createSvgIcon-YDz-o7-b.js";import"./createStyled-BLdT8Qb_.js";import"./IconButton-CkgmJ1wq.js";import"./ButtonBase-D84oecVH.js";import"./DialogContent-Bogzx-91.js";import"./Button-CacSTNVY.js";import"./Chip-CTEj_6SL.js";import"./styled-CNP8R88q.js";import"./Edit-DYqlQ0Co.js";import"./Remove-Dh7kVVq0.js";const P=({scrollable:r})=>t(e,{sx:{p:2},children:Array.from({length:7},(k,s)=>t(e,{sx:{mb:1,p:1,borderRadius:1},children:a(v,{children:["Result Item ",s+1]})},s))}),D=()=>{const r=h.useRef(null);return t(u,{ref:r,drawerWidth:177,children:P({scrollable:r!=null&&r.current?r.current.getContainer():window})})},kt={title:"Component Library/InsetInMap",component:p,decorators:[r=>t(e,{sx:{width:"800px",height:"calc(50vh - 40px)",position:"relative"},children:t(B,{initialMapStyleConfig:A,children:t(r,{})})})],argTypes:{},args:{}},o=r=>t("p",{style:{color:"red"},children:r}),j={topLeft:o("topLeft"),top:o("top"),topRight:o("topRight"),right:o("right"),bottomRight:o("bottomRight"),bottom:o("bottom"),bottomLeft:o("bottomLeft"),left:o("left"),center:o("center")},n={render:r=>t(p,{content:t("p",{style:{opacity:.2,fontSize:"2em"},children:Array(20).fill("CONTENT").join(" ")}),controlArea:j})},i={render:r=>t(p,{content:t(x,{...b}),controlArea:{left:t(D,{}),topRight:t(y,{children:a(L,{direction:"row",spacing:2,alignItems:"center",children:[t(I,{}),t(M,{onClick:()=>alert("Toggle map off")})]})}),bottomRight:t(e,{m:4,children:t(S,{children:t(e,{p:1,sx:{height:44,display:"flex",alignItems:"center",borderRadius:1},children:a(e,{sx:{display:"flex",alignItems:"center",[`& .${w.root}`]:{mx:1}},children:[t(R,{}),t(T,{orientation:"vertical",flexItem:!0}),t(C,{})]})})})})}})};var m,l,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <InsetInMap content={<p style={{
    opacity: 0.2,
    fontSize: '2em'
  }}>{Array(20).fill("CONTENT").join(" ")}</p>} controlArea={allControlAreas} />
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,g,f;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const Et=["AllSlices","MapExample"];export{n as AllSlices,i as MapExample,Et as __namedExportsOrder,kt as default};
