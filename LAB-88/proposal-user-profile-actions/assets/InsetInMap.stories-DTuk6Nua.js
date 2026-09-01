import{j as t,a,R as h}from"./iframe-CXSK8Dk-.js";import{r as p,s as x,p as u,t as I}from"./DropdownButton-vWLux3xG.js";import"./UserIcon-DfXchAa_.js";import"./FlexBox-aDkc32O8.js";import"./Text-BMxl2SwS.js";import"./Chip-CP3VY8ZP.js";import"./Divider-B42Uh_Bj.js";import"./TreeView-DpdtxLcB.js";import"./AppInfoRow-BqYxjxEK.js";import"./LinearProgress-BzA3k14P.js";import"./Spinner-ClMpHh1d.js";import"./Dialog-B-CBTz5q.js";import"./TextField-C1RKnAyX.js";import"./Switch-Ck6dNew2.js";import"./DatePicker-63Sx7fEQ.js";import"./DateTimePicker-CuvapaAa.js";import"./LinkButton-C4EtbQ1R.js";import"./Box-PoQ7y_F9.js";import{a as y}from"./Container-BYH1eQOO.js";import"./Paper-BtVQmXu1.js";import"./ErrorFallback-CyHZraUv.js";import"./ErrorFallbackText-CXNMYw6_.js";import"./ErrorFallbackWrapper-C9ggY6qV.js";import"./Brand-Bh3aijrf.js";import{M as B}from"./constants-CY3-_VsX.js";import{B as R,a as C,M}from"./MapToggleButtonPresentational-CEEmCWRw.js";import{allArgs as b}from"./BasicMap.stories-BY3vwils.js";import{i as A}from"./storyconfig-DEIJDHKx.js";import{B as e}from"./Box-CN1tfwJW.js";import{P as S}from"./Paper-CCY0nncl.js";import{T}from"./Typography-_WXcuVAU.js";import{D as v,d as w}from"./Divider-Bv_OvFaD.js";import{S as L}from"./Stack-DTT6iyaf.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-BBCRbUjf.js";import"./useThemeProps-CkYUtoJ-.js";import"./useTheme-BKykcnyZ.js";import"./AdapterDayjs-DBeZyuIU.js";import"./generateUtilityClass-Fzt3JCAB.js";import"./styled-DtvgUq6a.js";import"./Modal-C6fXv4Zz.js";import"./utils-BP8_ys-M.js";import"./TransitionGroupContext-CIYUs1Uk.js";import"./index-BH3lY3kJ.js";import"./resolveComponentProps-B-UI_umu.js";import"./generateUtilityClasses-Bj4Ss80x.js";import"./Popover-Dbdn6-R4.js";import"./TextField-CsymqzzJ.js";import"./useFormControl-8AnV7jcl.js";import"./createSvgIcon-B4OWaiSw.js";import"./SvgIcon-CwlR4LV8.js";import"./createStyled-jo3qW0uY.js";import"./IconButton-CH8TE1o1.js";import"./ButtonBase-CyMDbepC.js";import"./DialogContent-CPmdNXcl.js";import"./Button-OtEdq2P_.js";import"./Chip-DpWSlKGB.js";import"./Alert-B_Svt6kM.js";import"./styled-hp6s30PY.js";import"./Edit-6FH8M8KH.js";import"./Remove-DsJJL5XN.js";const P=({scrollable:r})=>t(e,{sx:{p:2},children:Array.from({length:7},(k,m)=>t(e,{sx:{mb:1,p:1,borderRadius:1},children:a(T,{children:["Result Item ",m+1]})},m))}),D=()=>{const r=h.useRef(null);return t(u,{ref:r,drawerWidth:177,children:P({scrollable:r!=null&&r.current?r.current.getContainer():window})})},$t={title:"Component Library/InsetInMap",component:p,decorators:[r=>t(e,{sx:{width:"800px",height:"calc(50vh - 40px)",position:"relative"},children:t(B,{initialMapStyleConfig:A,children:t(r,{})})})],argTypes:{},args:{}},o=r=>t("p",{style:{color:"red"},children:r}),j={topLeft:o("topLeft"),top:o("top"),topRight:o("topRight"),right:o("right"),bottomRight:o("bottomRight"),bottom:o("bottom"),bottomLeft:o("bottomLeft"),left:o("left"),center:o("center")},i={render:r=>t(p,{content:t("p",{style:{opacity:.2,fontSize:"2em"},children:Array(20).fill("CONTENT").join(" ")}),controlArea:j})},n={render:r=>t(p,{content:t(x,{...b}),controlArea:{left:t(D,{}),topRight:t(y,{children:a(L,{direction:"row",spacing:2,alignItems:"center",children:[t(I,{}),t(M,{onClick:()=>alert("Toggle map off")})]})}),bottomRight:t(e,{m:4,children:t(S,{children:t(e,{p:1,sx:{height:44,display:"flex",alignItems:"center",borderRadius:1},children:a(e,{sx:{display:"flex",alignItems:"center",[`& .${w.root}`]:{mx:1}},children:[t(R,{}),t(v,{orientation:"vertical",flexItem:!0}),t(C,{})]})})})})}})};var s,l,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
