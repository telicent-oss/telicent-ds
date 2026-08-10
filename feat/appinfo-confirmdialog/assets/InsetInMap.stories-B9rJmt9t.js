import{j as t,a,R as h}from"./iframe-BMuUneZj.js";import{r as p,s as x,p as u,t as I}from"./DropdownButton-GhplHAZP.js";import"./UserIcon-CQYMBk4-.js";import"./FlexBox-Iozwjete.js";import"./Text-B5-p14Rw.js";import"./Chip-DLoVMQVm.js";import"./Divider-C2Xz7yk2.js";import"./TreeView-_qpTu6pI.js";import"./AppInfoRow-BgLW4R_q.js";import"./LinearProgress-DDNrYsWW.js";import"./Spinner-DUipJNcV.js";import"./Dialog-D0_pFUs6.js";import"./TextField-DK61R-xZ.js";import"./Switch-CSAD1dRX.js";import"./DatePicker-Cz_5sUCg.js";import"./DateTimePicker-DgHDar69.js";import"./LinkButton-Bltx9Shr.js";import"./Box-BJWVeEYX.js";import{a as y}from"./Container-DlbpK-82.js";import"./Paper-DIhajTdq.js";import"./ErrorFallback-DQNkUk93.js";import"./ErrorFallbackText-C3uTVheG.js";import"./ErrorFallbackWrapper-C9Cmqijf.js";import"./Brand-RZcZ8N1N.js";import{M as B}from"./constants-DWdepPUO.js";import{B as R,a as C,M}from"./MapToggleButtonPresentational-CBnLn7Jp.js";import{allArgs as b}from"./BasicMap.stories-D3d9oGll.js";import{i as A}from"./storyconfig-DEIJDHKx.js";import{B as e}from"./Box-CEEFXZo5.js";import{P as S}from"./Paper-E211ua9O.js";import{T}from"./Typography-w_4K0ja8.js";import{D as v,d as w}from"./Divider-DXhn6Ub8.js";import{S as L}from"./Stack-TiSKoIHA.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-jBmUE9A9.js";import"./useThemeProps-BNBknqIb.js";import"./useTheme-DRDJjHMR.js";import"./AdapterDayjs-C8iCvla8.js";import"./generateUtilityClass-B9h8PBia.js";import"./styled-CVhYyncn.js";import"./Modal-Dy02jFWT.js";import"./utils-DfS-ADiV.js";import"./TransitionGroupContext-ejQez42S.js";import"./index-BbVjQDet.js";import"./resolveComponentProps-DLezU-r8.js";import"./generateUtilityClasses-DikdMsJY.js";import"./Popover-CwdWMymH.js";import"./TextField-ECilJSMm.js";import"./useFormControl-EqKIaqm8.js";import"./createSvgIcon-BUAAkB8u.js";import"./SvgIcon-RPSsRH1z.js";import"./createStyled-Cb8Mr6dv.js";import"./IconButton-DlBfucp_.js";import"./ButtonBase-gJKL7X4c.js";import"./DialogContent-TC9gFBw7.js";import"./Button-8Li-cdwq.js";import"./Chip-7qvU_oAO.js";import"./Alert-W7WaUGLz.js";import"./styled-BNu8QFwr.js";import"./Edit-DeviR2d5.js";import"./Remove-BQ2StRYG.js";const P=({scrollable:r})=>t(e,{sx:{p:2},children:Array.from({length:7},(k,m)=>t(e,{sx:{mb:1,p:1,borderRadius:1},children:a(T,{children:["Result Item ",m+1]})},m))}),D=()=>{const r=h.useRef(null);return t(u,{ref:r,drawerWidth:177,children:P({scrollable:r!=null&&r.current?r.current.getContainer():window})})},$t={title:"Component Library/InsetInMap",component:p,decorators:[r=>t(e,{sx:{width:"800px",height:"calc(50vh - 40px)",position:"relative"},children:t(B,{initialMapStyleConfig:A,children:t(r,{})})})],argTypes:{},args:{}},o=r=>t("p",{style:{color:"red"},children:r}),j={topLeft:o("topLeft"),top:o("top"),topRight:o("topRight"),right:o("right"),bottomRight:o("bottomRight"),bottom:o("bottom"),bottomLeft:o("bottomLeft"),left:o("left"),center:o("center")},i={render:r=>t(p,{content:t("p",{style:{opacity:.2,fontSize:"2em"},children:Array(20).fill("CONTENT").join(" ")}),controlArea:j})},n={render:r=>t(p,{content:t(x,{...b}),controlArea:{left:t(D,{}),topRight:t(y,{children:a(L,{direction:"row",spacing:2,alignItems:"center",children:[t(I,{}),t(M,{onClick:()=>alert("Toggle map off")})]})}),bottomRight:t(e,{m:4,children:t(S,{children:t(e,{p:1,sx:{height:44,display:"flex",alignItems:"center",borderRadius:1},children:a(e,{sx:{display:"flex",alignItems:"center",[`& .${w.root}`]:{mx:1}},children:[t(R,{}),t(v,{orientation:"vertical",flexItem:!0}),t(C,{})]})})})})}})};var s,l,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
