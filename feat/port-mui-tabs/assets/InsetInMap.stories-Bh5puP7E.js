import{j as t,a,R as h}from"./iframe-Ce2OCE46.js";import{x as p,y as x,t as u,z as I}from"./DropdownButton-BZeAU0hR.js";import"./UserIcon-BeBbW4ae.js";import"./FlexBox-QXmAoGfV.js";import"./Text-iWgBtTEF.js";import"./Chip-D2Ptw4F5.js";import"./Divider-BydDTYUN.js";import"./TreeView-B4RWPXCG.js";import"./AppInfoRow-iVaYeCli.js";import"./LinearProgress-C2y7bs6L.js";import"./Spinner-Baj4KosW.js";import"./Dialog-DNWScIyV.js";import"./TextField-DHJTJtHu.js";import"./Switch-DK_hgLX1.js";import"./DatePicker-DU4_X1Kg.js";import"./DateTimePicker-Ki4uwXEw.js";import"./LinkButton-CGtVXD2M.js";import"./Box-BOtHEcpc.js";import{a as y}from"./Container-bE4ocZr9.js";import"./Paper-dwBSwh0G.js";import"./ErrorFallback-DcjVRdtL.js";import"./ErrorFallbackText-C2I-OeKi.js";import"./ErrorFallbackWrapper-DpFlGNMA.js";import"./Brand-BDH5l_wz.js";import{M as B}from"./constants-DI5LickN.js";import{B as R,a as C,M}from"./MapToggleButtonPresentational-DHVSXtub.js";import{allArgs as b}from"./BasicMap.stories-DovIX1cA.js";import{i as A}from"./storyconfig-DEIJDHKx.js";import{B as e}from"./Box-DPN8iDtX.js";import{P as S}from"./Paper-afLuPYhe.js";import{T}from"./Typography-wgrPajcY.js";import{D as v,d as w}from"./Divider-DXzVK-0q.js";import{S as L}from"./Stack-9i_ZvuDA.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-DnGJj7RI.js";import"./useThemeProps-iW1JeY1q.js";import"./useTheme-CLM2GVtV.js";import"./AdapterDayjs-C4Mp3q20.js";import"./generateUtilityClass-Dpfkq2Nk.js";import"./styled-DG4DTdgR.js";import"./Modal-QVS8IAeT.js";import"./utils-DCsrA1oL.js";import"./TransitionGroupContext-B68BF-iQ.js";import"./index-CxlNYX3Y.js";import"./resolveComponentProps-DSEEQlqm.js";import"./generateUtilityClasses-XCYs_VDx.js";import"./Popover-Dt_6Onsk.js";import"./TextField-Doc_CKDt.js";import"./useFormControl-D3zcrAfb.js";import"./createSvgIcon-CR2ME6BQ.js";import"./SvgIcon-1ianXB1D.js";import"./createStyled-C5CYLvYR.js";import"./IconButton-BTekjOnP.js";import"./ButtonBase-xU-UolfF.js";import"./DialogContent-DJkb6jt4.js";import"./Button-Cy1pOnfQ.js";import"./Chip-DrR5OuDg.js";import"./Alert-DL7N4iSe.js";import"./styled-B5NIKwPN.js";import"./Edit-DmBLMWan.js";import"./Remove-D6Util3l.js";const P=({scrollable:r})=>t(e,{sx:{p:2},children:Array.from({length:7},(k,m)=>t(e,{sx:{mb:1,p:1,borderRadius:1},children:a(T,{children:["Result Item ",m+1]})},m))}),D=()=>{const r=h.useRef(null);return t(u,{ref:r,drawerWidth:177,children:P({scrollable:r!=null&&r.current?r.current.getContainer():window})})},$t={title:"Component Library/InsetInMap",component:p,decorators:[r=>t(e,{sx:{width:"800px",height:"calc(50vh - 40px)",position:"relative"},children:t(B,{initialMapStyleConfig:A,children:t(r,{})})})],argTypes:{},args:{}},o=r=>t("p",{style:{color:"red"},children:r}),j={topLeft:o("topLeft"),top:o("top"),topRight:o("topRight"),right:o("right"),bottomRight:o("bottomRight"),bottom:o("bottom"),bottomLeft:o("bottomLeft"),left:o("left"),center:o("center")},i={render:r=>t(p,{content:t("p",{style:{opacity:.2,fontSize:"2em"},children:Array(20).fill("CONTENT").join(" ")}),controlArea:j})},n={render:r=>t(p,{content:t(x,{...b}),controlArea:{left:t(D,{}),topRight:t(y,{children:a(L,{direction:"row",spacing:2,alignItems:"center",children:[t(I,{}),t(M,{onClick:()=>alert("Toggle map off")})]})}),bottomRight:t(e,{m:4,children:t(S,{children:t(e,{p:1,sx:{height:44,display:"flex",alignItems:"center",borderRadius:1},children:a(e,{sx:{display:"flex",alignItems:"center",[`& .${w.root}`]:{mx:1}},children:[t(R,{}),t(v,{orientation:"vertical",flexItem:!0}),t(C,{})]})})})})}})};var s,l,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
