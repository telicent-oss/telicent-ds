import{j as t,a,R as h}from"./iframe-CYKKeyXc.js";import{s as p,t as x,p as u,v as I}from"./DropdownButton-DXvUw18o.js";import"./UserIcon-BEDwv6nP.js";import"./Text-Bt17FoZM.js";import"./Chip-D-ivFaV7.js";import"./Divider-BtKIWAtl.js";import"./TreeView-CioP4QeT.js";import"./LinearProgress--AT7LVoA.js";import"./Spinner-CEVLaIRL.js";import"./Dialog-C76QJbsQ.js";import"./TextField-nYr1dY0Q.js";import"./Switch-Bt5eTPpW.js";import"./DatePicker-HFvHu9pg.js";import"./DateTimePicker-CUaoXgcA.js";import"./LinkButton-BI7eyHxU.js";import{a as y}from"./Container-B4YkWBlj.js";import"./Paper-grcJF4O1.js";import"./ErrorFallback-CikF8nPt.js";import"./ErrorFallbackText-BKonECwZ.js";import"./ErrorFallbackWrapper-DAHz8e70.js";import"./Brand-CfZWDtPV.js";import{M as B}from"./constants-C9fBqqHE.js";import{B as R,a as C,M}from"./MapToggleButtonPresentational-L_xNR8KH.js";import{allArgs as b}from"./BasicMap.stories-C9becit_.js";import{i as A}from"./storyconfig-DEIJDHKx.js";import{B as e}from"./Box-B5Idbuu2.js";import{P as S}from"./Paper-mUQjj_jn.js";import{T as v}from"./Typography-BqCL54fa.js";import{D as T,d as w}from"./Divider-CZT4G2av.js";import{S as L}from"./Stack-BjITiBsD.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-nKkQeJ84.js";import"./useThemeProps-CSMSYrHE.js";import"./useTheme-Clo7ftRJ.js";import"./AdapterDayjs-LnHs1126.js";import"./styled-DYVy4BQZ.js";import"./Modal-B6zc8eMd.js";import"./utils-BTMGMaS4.js";import"./TransitionGroupContext-BZlRwI3u.js";import"./index-BOq1Y2DU.js";import"./generateUtilityClasses-BddLF0YE.js";import"./TextField-BKgBwIu3.js";import"./useFormControl-e1pRvXOc.js";import"./createSvgIcon-BCA_qiKo.js";import"./createStyled-BrwGJ6p7.js";import"./IconButton-CwWFg1EF.js";import"./ButtonBase-BY4v5x24.js";import"./DialogContent-DBkrQtLX.js";import"./Button-BK6a-J9_.js";import"./Chip-BigX0SwN.js";import"./styled-C485N8nh.js";import"./Edit-BwdZQDqg.js";import"./Remove-B42JroOj.js";const P=({scrollable:r})=>t(e,{sx:{p:2},children:Array.from({length:7},(k,s)=>t(e,{sx:{mb:1,p:1,borderRadius:1},children:a(v,{children:["Result Item ",s+1]})},s))}),D=()=>{const r=h.useRef(null);return t(u,{ref:r,drawerWidth:177,children:P({scrollable:r!=null&&r.current?r.current.getContainer():window})})},kt={title:"Component Library/InsetInMap",component:p,decorators:[r=>t(e,{sx:{width:"800px",height:"calc(50vh - 40px)",position:"relative"},children:t(B,{initialMapStyleConfig:A,children:t(r,{})})})],argTypes:{},args:{}},o=r=>t("p",{style:{color:"red"},children:r}),j={topLeft:o("topLeft"),top:o("top"),topRight:o("topRight"),right:o("right"),bottomRight:o("bottomRight"),bottom:o("bottom"),bottomLeft:o("bottomLeft"),left:o("left"),center:o("center")},n={render:r=>t(p,{content:t("p",{style:{opacity:.2,fontSize:"2em"},children:Array(20).fill("CONTENT").join(" ")}),controlArea:j})},i={render:r=>t(p,{content:t(x,{...b}),controlArea:{left:t(D,{}),topRight:t(y,{children:a(L,{direction:"row",spacing:2,alignItems:"center",children:[t(I,{}),t(M,{onClick:()=>alert("Toggle map off")})]})}),bottomRight:t(e,{m:4,children:t(S,{children:t(e,{p:1,sx:{height:44,display:"flex",alignItems:"center",borderRadius:1},children:a(e,{sx:{display:"flex",alignItems:"center",[`& .${w.root}`]:{mx:1}},children:[t(R,{}),t(T,{orientation:"vertical",flexItem:!0}),t(C,{})]})})})})}})};var m,l,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
