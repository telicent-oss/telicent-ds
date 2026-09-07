import{j as t,a,R as h}from"./iframe-ciw1KLRs.js";import{t as p,v as x,q as u,w as I}from"./DropdownButton-DnxPQZL5.js";import"./UserIcon-Faf48ldY.js";import"./FlexBox-CDrP42BZ.js";import"./Text-BL5BnwYw.js";import"./Chip-DC0m9kxe.js";import"./Divider-CNdMEHKo.js";import"./TreeView-BFv2UIjz.js";import"./AppInfoRow-Cm2LKcgP.js";import"./LinearProgress-DL5qgfW7.js";import"./Spinner-DiZv0D1w.js";import"./Dialog-CL0RDkI6.js";import"./TextField-BiumEcKM.js";import"./Switch-BuYUgYFl.js";import"./DatePicker-CS8TkJd8.js";import"./DateTimePicker-Bj6EpZ10.js";import"./LinkButton-vyYCYFuJ.js";import"./Box-HbuxBumj.js";import{a as y}from"./Container-B4cr1y6P.js";import"./Paper-D5KjIdWZ.js";import"./ErrorFallback-DCZhT-vP.js";import"./ErrorFallbackText-CwHlYFUh.js";import"./ErrorFallbackWrapper-DP0a9Fbv.js";import"./Brand-BPQCwrjg.js";import{M as B}from"./constants-UR64nFDG.js";import{B as R,a as C,M}from"./MapToggleButtonPresentational-BuqOJVfe.js";import{allArgs as b}from"./BasicMap.stories-kSWBBYQp.js";import{i as A}from"./storyconfig-DEIJDHKx.js";import{B as e}from"./Box-902PeKhJ.js";import{P as S}from"./Paper-8D9ezffr.js";import{T as v}from"./Typography--d6z-ax-.js";import{D as T,d as w}from"./Divider-CjkQD9g8.js";import{S as L}from"./Stack-BsqiUcB-.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-CifS_No0.js";import"./useThemeProps-CD771-QY.js";import"./useTheme-BHgtQyQE.js";import"./AdapterDayjs-O0yRhyo9.js";import"./generateUtilityClass-Cq12-ors.js";import"./styled-C2eEG51T.js";import"./Modal-BfMSqNIi.js";import"./utils-CidoV_y6.js";import"./TransitionGroupContext-BaiKyvyF.js";import"./index-BpPfUxeP.js";import"./resolveComponentProps-B0NCZEz3.js";import"./generateUtilityClasses-mmv1qYeK.js";import"./Popover-DG-knyjb.js";import"./TextField-pGEePhF0.js";import"./useFormControl-BblJSTXJ.js";import"./createSvgIcon-BDEo2c1Q.js";import"./SvgIcon-DTc-5gfq.js";import"./createStyled-MdD6v-m0.js";import"./IconButton-BMVls5k1.js";import"./ButtonBase-ClETMG4i.js";import"./DialogContent-1fvduG_D.js";import"./Button-CDrOWbr-.js";import"./Chip-PFEXkFqS.js";import"./Alert-BIf5zh0i.js";import"./styled-IIpvbrdl.js";import"./Edit-Cef1b_05.js";import"./Remove-udeFhnPg.js";const P=({scrollable:r})=>t(e,{sx:{p:2},children:Array.from({length:7},(k,m)=>t(e,{sx:{mb:1,p:1,borderRadius:1},children:a(v,{children:["Result Item ",m+1]})},m))}),D=()=>{const r=h.useRef(null);return t(u,{ref:r,drawerWidth:177,children:P({scrollable:r!=null&&r.current?r.current.getContainer():window})})},$t={title:"Component Library/InsetInMap",component:p,decorators:[r=>t(e,{sx:{width:"800px",height:"calc(50vh - 40px)",position:"relative"},children:t(B,{initialMapStyleConfig:A,children:t(r,{})})})],argTypes:{},args:{}},o=r=>t("p",{style:{color:"red"},children:r}),j={topLeft:o("topLeft"),top:o("top"),topRight:o("topRight"),right:o("right"),bottomRight:o("bottomRight"),bottom:o("bottom"),bottomLeft:o("bottomLeft"),left:o("left"),center:o("center")},i={render:r=>t(p,{content:t("p",{style:{opacity:.2,fontSize:"2em"},children:Array(20).fill("CONTENT").join(" ")}),controlArea:j})},n={render:r=>t(p,{content:t(x,{...b}),controlArea:{left:t(D,{}),topRight:t(y,{children:a(L,{direction:"row",spacing:2,alignItems:"center",children:[t(I,{}),t(M,{onClick:()=>alert("Toggle map off")})]})}),bottomRight:t(e,{m:4,children:t(S,{children:t(e,{p:1,sx:{height:44,display:"flex",alignItems:"center",borderRadius:1},children:a(e,{sx:{display:"flex",alignItems:"center",[`& .${w.root}`]:{mx:1}},children:[t(R,{}),t(T,{orientation:"vertical",flexItem:!0}),t(C,{})]})})})})}})};var s,l,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
