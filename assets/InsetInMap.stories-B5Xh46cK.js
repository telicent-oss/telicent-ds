import{j as t,a,R as h}from"./iframe-COAWb0t1.js";import{s as p,t as x,p as u,v as I}from"./DropdownButton-Vpz5ANha.js";import"./UserIcon-7ajEmXVT.js";import"./Text-DFy_CB-X.js";import"./Chip-CFRNYI56.js";import"./Divider-D-8UFSs5.js";import"./TreeView-DvKDilPN.js";import"./LinearProgress-D6xAADWG.js";import"./Spinner-B1314fCC.js";import"./Dialog-D0Y5W3XX.js";import"./TextField-CTYTdDqu.js";import"./Switch-C1EnJSQy.js";import"./DatePicker-Jx01V1aW.js";import"./DateTimePicker-J4wSZb31.js";import"./LinkButton-B6YMfa2-.js";import"./Box-DCFIHxCT.js";import{a as y}from"./Container-r-acF5nk.js";import"./Paper-Eeqwzp5S.js";import"./ErrorFallback-BY0PXNFd.js";import"./ErrorFallbackText-CR44PIbE.js";import"./ErrorFallbackWrapper-Cf9R1LA3.js";import"./Brand-Bh-wC9I-.js";import{M as B}from"./constants-DwIYQs1H.js";import{B as R,a as C,M}from"./MapToggleButtonPresentational-zYeQBpIS.js";import{allArgs as b}from"./BasicMap.stories-CsM_1Oih.js";import{i as A}from"./storyconfig-DEIJDHKx.js";import{B as e}from"./Box-D8Tcr7GZ.js";import{P as S}from"./Paper-mwKQc_Lr.js";import{T as v}from"./Typography-rxz2-vrR.js";import{D as T,d as w}from"./Divider-CWXbwJhU.js";import{S as L}from"./Stack-ybP7OB7f.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-BdnIs0e2.js";import"./useThemeProps-CqGuhErK.js";import"./useTheme-CNaznUgl.js";import"./AdapterDayjs-Bhl9N9Cw.js";import"./generateUtilityClass-Cu0h0UK6.js";import"./styled-BwRmoPFQ.js";import"./Modal-DdTPb72x.js";import"./utils-DHa3ZdZl.js";import"./TransitionGroupContext-DLKhgV5R.js";import"./index-DvCbfciI.js";import"./resolveComponentProps-BLxc7nk0.js";import"./generateUtilityClasses-C5WQCcWA.js";import"./TextField-BvMOatl_.js";import"./useFormControl-DQ8tyOBm.js";import"./createSvgIcon-DrpJhUIt.js";import"./createStyled-C7KAEifV.js";import"./IconButton-CCcPFMgK.js";import"./ButtonBase-Djdar6tU.js";import"./DialogContent-D5gHw-su.js";import"./Button-DdObXY2o.js";import"./Chip-DZQXXGC9.js";import"./Close-CSu-E4xw.js";import"./styled-BUAiwXGA.js";import"./Edit-IxgIwfJY.js";import"./Remove-CtS7gXV9.js";const P=({scrollable:r})=>t(e,{sx:{p:2},children:Array.from({length:7},(k,s)=>t(e,{sx:{mb:1,p:1,borderRadius:1},children:a(v,{children:["Result Item ",s+1]})},s))}),D=()=>{const r=h.useRef(null);return t(u,{ref:r,drawerWidth:177,children:P({scrollable:r!=null&&r.current?r.current.getContainer():window})})},Wt={title:"Component Library/InsetInMap",component:p,decorators:[r=>t(e,{sx:{width:"800px",height:"calc(50vh - 40px)",position:"relative"},children:t(B,{initialMapStyleConfig:A,children:t(r,{})})})],argTypes:{},args:{}},o=r=>t("p",{style:{color:"red"},children:r}),j={topLeft:o("topLeft"),top:o("top"),topRight:o("topRight"),right:o("right"),bottomRight:o("bottomRight"),bottom:o("bottom"),bottomLeft:o("bottomLeft"),left:o("left"),center:o("center")},i={render:r=>t(p,{content:t("p",{style:{opacity:.2,fontSize:"2em"},children:Array(20).fill("CONTENT").join(" ")}),controlArea:j})},n={render:r=>t(p,{content:t(x,{...b}),controlArea:{left:t(D,{}),topRight:t(y,{children:a(L,{direction:"row",spacing:2,alignItems:"center",children:[t(I,{}),t(M,{onClick:()=>alert("Toggle map off")})]})}),bottomRight:t(e,{m:4,children:t(S,{children:t(e,{p:1,sx:{height:44,display:"flex",alignItems:"center",borderRadius:1},children:a(e,{sx:{display:"flex",alignItems:"center",[`& .${w.root}`]:{mx:1}},children:[t(R,{}),t(T,{orientation:"vertical",flexItem:!0}),t(C,{})]})})})})}})};var m,l,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
