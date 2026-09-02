import{j as t,a,R as h}from"./iframe-BWbl0n-m.js";import{t as p,v as x,q as u,w as I}from"./DropdownButton-Mnj2kdS-.js";import"./UserIcon-DyG3eNif.js";import"./FlexBox-D_1rxin-.js";import"./Text-BpKGjeEj.js";import"./Chip-C4CcYR6m.js";import"./Divider-SV-WqojL.js";import"./TreeView-znzljYnu.js";import"./AppInfoRow--FDyu7yq.js";import"./LinearProgress-Cl656I14.js";import"./Spinner-B46se6MY.js";import"./Dialog-DeNq9WSz.js";import"./TextField-BsHv-Zfc.js";import"./Switch-B1CDaN66.js";import"./DatePicker-Bq3_9IkT.js";import"./DateTimePicker-BUJ_NzTy.js";import"./LinkButton-YSkiBdlL.js";import"./Box-BWzji7VQ.js";import{a as y}from"./Container-7PTy0-Eg.js";import"./Paper-Cai4wMuA.js";import"./ErrorFallback-B0s2UmXa.js";import"./ErrorFallbackText-DO82QlLj.js";import"./ErrorFallbackWrapper-Cs11x7fa.js";import"./Brand-CGpa3lI_.js";import{M as B}from"./constants-Bhc0tOON.js";import{B as R,a as C,M}from"./MapToggleButtonPresentational-BeOeGCzD.js";import{allArgs as b}from"./BasicMap.stories-zeX8EY6E.js";import{i as A}from"./storyconfig-DEIJDHKx.js";import{B as e}from"./Box-B9rg1may.js";import{P as S}from"./Paper-Ds_iTmZx.js";import{T as v}from"./Typography-CipE5iZZ.js";import{D as T,d as w}from"./Divider-BFWv2Sw5.js";import{S as L}from"./Stack-CtzM8nP1.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-6iXLcsdV.js";import"./useThemeProps-B16WFuAG.js";import"./useTheme-DmjRKZlb.js";import"./AdapterDayjs-4bvMsGl4.js";import"./generateUtilityClass-B_owxAgJ.js";import"./styled-DcXC8MdH.js";import"./Modal-BI24WZXX.js";import"./utils-Cj96EfuL.js";import"./TransitionGroupContext-BO9wJbcY.js";import"./index-D4MyRL19.js";import"./resolveComponentProps-DiK6_J4b.js";import"./generateUtilityClasses-TDbmritb.js";import"./Popover-BrYdNkwn.js";import"./TextField-ZNJA485N.js";import"./useFormControl-QicCnhBY.js";import"./createSvgIcon-vKc29NSt.js";import"./SvgIcon-Bh4gxdfA.js";import"./createStyled-BUAz3FAp.js";import"./IconButton-DGKGWhyR.js";import"./ButtonBase-BKCC3Yfm.js";import"./DialogContent-CXuQtc83.js";import"./Button-C3fDFpoh.js";import"./Chip-BIc5mAwZ.js";import"./Alert-DWppgABV.js";import"./styled-B4qHdp8Z.js";import"./Edit-WmDTDE_G.js";import"./Remove-KmRfI7Zo.js";const P=({scrollable:r})=>t(e,{sx:{p:2},children:Array.from({length:7},(k,m)=>t(e,{sx:{mb:1,p:1,borderRadius:1},children:a(v,{children:["Result Item ",m+1]})},m))}),D=()=>{const r=h.useRef(null);return t(u,{ref:r,drawerWidth:177,children:P({scrollable:r!=null&&r.current?r.current.getContainer():window})})},$t={title:"Component Library/InsetInMap",component:p,decorators:[r=>t(e,{sx:{width:"800px",height:"calc(50vh - 40px)",position:"relative"},children:t(B,{initialMapStyleConfig:A,children:t(r,{})})})],argTypes:{},args:{}},o=r=>t("p",{style:{color:"red"},children:r}),j={topLeft:o("topLeft"),top:o("top"),topRight:o("topRight"),right:o("right"),bottomRight:o("bottomRight"),bottom:o("bottom"),bottomLeft:o("bottomLeft"),left:o("left"),center:o("center")},i={render:r=>t(p,{content:t("p",{style:{opacity:.2,fontSize:"2em"},children:Array(20).fill("CONTENT").join(" ")}),controlArea:j})},n={render:r=>t(p,{content:t(x,{...b}),controlArea:{left:t(D,{}),topRight:t(y,{children:a(L,{direction:"row",spacing:2,alignItems:"center",children:[t(I,{}),t(M,{onClick:()=>alert("Toggle map off")})]})}),bottomRight:t(e,{m:4,children:t(S,{children:t(e,{p:1,sx:{height:44,display:"flex",alignItems:"center",borderRadius:1},children:a(e,{sx:{display:"flex",alignItems:"center",[`& .${w.root}`]:{mx:1}},children:[t(R,{}),t(T,{orientation:"vertical",flexItem:!0}),t(C,{})]})})})})}})};var s,l,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
