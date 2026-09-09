import{j as t,a,R as h}from"./iframe-2ae3jLtY.js";import{x as p,y as x,t as u,z as I}from"./DropdownButton-BpmbuP-W.js";import"./UserIcon-C9xuM1bb.js";import"./FlexBox-BAOPxaZ7.js";import"./Text-CtYPczsC.js";import"./Chip-BsvBzIp-.js";import"./Divider-M5RYGepX.js";import"./TreeView-DdTK-PUs.js";import"./AppInfoRow-B--uq7Sd.js";import"./LinearProgress-CsGPtdNT.js";import"./Spinner-Ce4Lduox.js";import"./Dialog-zSVX8tBH.js";import"./TextField-rZhfzkLQ.js";import"./Switch-B6fBRjkG.js";import"./DatePicker-DoQqJsHZ.js";import"./DateTimePicker-D7ooMU44.js";import"./LinkButton-DFUlFy7Z.js";import"./Box-DcijUUVm.js";import{a as y}from"./Container-lpa-al36.js";import"./Paper-Cyq_1M7S.js";import"./ErrorFallback-DoY8WDiN.js";import"./ErrorFallbackText-D5Vin4ef.js";import"./ErrorFallbackWrapper-Bw7iQJps.js";import"./Brand-CpWuTQBH.js";import{M as B}from"./constants-DPt7sep6.js";import{B as R,a as C,M}from"./MapToggleButtonPresentational-DEZRespE.js";import{allArgs as b}from"./BasicMap.stories-DW57gCln.js";import{i as A}from"./storyconfig-DEIJDHKx.js";import{B as e}from"./Box-CxnaGThj.js";import{P as S}from"./Paper-D44EUSF6.js";import{T}from"./Typography-CKX7xI1z.js";import{D as v,d as w}from"./Divider-Cb5TCzV-.js";import{S as L}from"./Stack-AhKTZxfl.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-5tLqmsws.js";import"./useThemeProps-CjP8yKq7.js";import"./useTheme-D2IgbBvW.js";import"./AdapterDayjs-WX-3Svd1.js";import"./generateUtilityClass-DBJjU6LW.js";import"./styled-Cj2-Y3sw.js";import"./Modal-Ct5j1anh.js";import"./utils-BRBAF39N.js";import"./TransitionGroupContext-CBaIu8bW.js";import"./index-_aQ6azBP.js";import"./resolveComponentProps-Cd-xgkW-.js";import"./generateUtilityClasses-VYWBwYVV.js";import"./Popover-CVm97bWw.js";import"./TextField-CtUdVhYe.js";import"./useFormControl-CedqS7-r.js";import"./createSvgIcon-CPbPJc4P.js";import"./SvgIcon-sVmN0tjE.js";import"./createStyled-BadfWLO8.js";import"./IconButton-DHZQ4I-9.js";import"./ButtonBase-BhlfSjKw.js";import"./DialogContent-QyBYExTq.js";import"./Button-w3dj99fq.js";import"./Chip-C9Sq19CS.js";import"./Alert-DnPepOi0.js";import"./styled-BH3fMlC7.js";import"./Edit-CdllxfNz.js";import"./Remove-DUc8tOl9.js";const P=({scrollable:r})=>t(e,{sx:{p:2},children:Array.from({length:7},(k,m)=>t(e,{sx:{mb:1,p:1,borderRadius:1},children:a(T,{children:["Result Item ",m+1]})},m))}),D=()=>{const r=h.useRef(null);return t(u,{ref:r,drawerWidth:177,children:P({scrollable:r!=null&&r.current?r.current.getContainer():window})})},$t={title:"Component Library/InsetInMap",component:p,decorators:[r=>t(e,{sx:{width:"800px",height:"calc(50vh - 40px)",position:"relative"},children:t(B,{initialMapStyleConfig:A,children:t(r,{})})})],argTypes:{},args:{}},o=r=>t("p",{style:{color:"red"},children:r}),j={topLeft:o("topLeft"),top:o("top"),topRight:o("topRight"),right:o("right"),bottomRight:o("bottomRight"),bottom:o("bottom"),bottomLeft:o("bottomLeft"),left:o("left"),center:o("center")},i={render:r=>t(p,{content:t("p",{style:{opacity:.2,fontSize:"2em"},children:Array(20).fill("CONTENT").join(" ")}),controlArea:j})},n={render:r=>t(p,{content:t(x,{...b}),controlArea:{left:t(D,{}),topRight:t(y,{children:a(L,{direction:"row",spacing:2,alignItems:"center",children:[t(I,{}),t(M,{onClick:()=>alert("Toggle map off")})]})}),bottomRight:t(e,{m:4,children:t(S,{children:t(e,{p:1,sx:{height:44,display:"flex",alignItems:"center",borderRadius:1},children:a(e,{sx:{display:"flex",alignItems:"center",[`& .${w.root}`]:{mx:1}},children:[t(R,{}),t(v,{orientation:"vertical",flexItem:!0}),t(C,{})]})})})})}})};var s,l,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const qt=["AllSlices","MapExample"];export{i as AllSlices,n as MapExample,qt as __namedExportsOrder,$t as default};
