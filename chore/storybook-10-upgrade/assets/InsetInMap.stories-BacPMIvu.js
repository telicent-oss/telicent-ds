import{j as t,a,R as h}from"./iframe-B_xAjz_a.js";import{r as p,s as x,o as u,t as I}from"./DropdownButton-BnaLLxdm.js";import"./UserIcon-sXWYTtMY.js";import"./Text-Dxo92Y_P.js";import"./Chip-CbHUK2Oi.js";import"./Divider-D_2gC9Rv.js";import"./TreeView-027Y335s.js";import"./LinearProgress-BGR-shXY.js";import"./Spinner-C7CK19Se.js";import"./Dialog-kf4LGKqy.js";import"./TextField-DaNwDKAN.js";import"./Select-BehY_x2i.js";import"./Switch-Bsyk4KfN.js";import"./DatePicker-Vblbv12o.js";import"./DateTimePicker-DASuNmCH.js";import"./LinkButton-BGw7Liqm.js";import{a as y}from"./Container-DZVvhBo5.js";import"./Paper-B7oVFYM9.js";import"./ErrorFallback-CYAgcxnT.js";import"./ErrorFallbackText-DvI-57tq.js";import"./ErrorFallbackWrapper-Bz-JcYeG.js";import"./Brand-DBW4B7CT.js";import{M as B}from"./constants-1TT1xdyQ.js";import{B as R,a as C,M}from"./MapToggleButtonPresentational-CEsfsZc1.js";import{allArgs as b}from"./BasicMap.stories-Bnez3yRj.js";import{i as A}from"./storyconfig-DEIJDHKx.js";import{B as e}from"./Box-HNQBJ69w.js";import{P as S}from"./Paper-BTmXDdaE.js";import{T}from"./Typography-ByJUc9gg.js";import{D as v}from"./Divider-CmQ1Xcb5.js";import{d as w}from"./dividerClasses-LlugbWYd.js";import{S as L}from"./Stack-BUP2Ksyi.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-CIWHHPPz.js";import"./useThemeProps-B45YfUAa.js";import"./useTheme-DXfWrHWZ.js";import"./AdapterDayjs-q2OtrlCq.js";import"./styled-DWxCgiIq.js";import"./Modal-BpjRytJz.js";import"./utils-CwDFzrhS.js";import"./TransitionGroupContext-CpQCZJFv.js";import"./index-CI4uBojl.js";import"./generateUtilityClasses-CWLcYD5H.js";import"./Select-CuWSjzQW.js";import"./useFormControl-DsU6bxZg.js";import"./createSvgIcon-DNxDKV7W.js";import"./TextField-CXoQdh2Y.js";import"./createStyled-YK0OyouD.js";import"./IconButton-BCtq5lM_.js";import"./ButtonBase-rGiwpEnq.js";import"./DialogContent-5gmVHz0w.js";import"./Button-BK_6tBa6.js";import"./Chip-CnGyAVsl.js";import"./MenuItem-DqM4z-OC.js";import"./styled-Dj6VM8rS.js";import"./Edit-DYLHrREl.js";import"./Remove-C35S1kL4.js";const P=({scrollable:r})=>t(e,{sx:{p:2},children:Array.from({length:7},(k,m)=>t(e,{sx:{mb:1,p:1,borderRadius:1},children:a(T,{children:["Result Item ",m+1]})},m))}),D=()=>{const r=h.useRef(null);return t(u,{ref:r,drawerWidth:177,children:P({scrollable:r!=null&&r.current?r.current.getContainer():window})})},Wt={title:"Component Library/InsetInMap",component:p,decorators:[r=>t(e,{sx:{width:"800px",height:"calc(50vh - 40px)",position:"relative"},children:t(B,{initialMapStyleConfig:A,children:t(r,{})})})],argTypes:{},args:{}},o=r=>t("p",{style:{color:"red"},children:r}),j={topLeft:o("topLeft"),top:o("top"),topRight:o("topRight"),right:o("right"),bottomRight:o("bottomRight"),bottom:o("bottom"),bottomLeft:o("bottomLeft"),left:o("left"),center:o("center")},i={render:r=>t(p,{content:t("p",{style:{opacity:.2,fontSize:"2em"},children:Array(20).fill("CONTENT").join(" ")}),controlArea:j})},n={render:r=>t(p,{content:t(x,{...b}),controlArea:{left:t(D,{}),topRight:t(y,{children:a(L,{direction:"row",spacing:2,alignItems:"center",children:[t(I,{}),t(M,{onClick:()=>alert("Toggle map off")})]})}),bottomRight:t(e,{m:4,children:t(S,{children:t(e,{p:1,sx:{height:44,display:"flex",alignItems:"center",borderRadius:1},children:a(e,{sx:{display:"flex",alignItems:"center",[`& .${w.root}`]:{mx:1}},children:[t(R,{}),t(v,{orientation:"vertical",flexItem:!0}),t(C,{})]})})})})}})};var s,l,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
