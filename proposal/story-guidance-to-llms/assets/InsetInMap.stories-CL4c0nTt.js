import{j as t,a,R as h}from"./iframe-ekgyvAI9.js";import{s as p,t as x,p as u,v as I}from"./DropdownButton-iOB7tFo3.js";import"./UserIcon-6Ji74agl.js";import"./Text-C-7vsUm_.js";import"./Chip-CNM9xVJ3.js";import"./Divider-BHvtS0lt.js";import"./TreeView-D2h7Y55m.js";import"./LinearProgress-CnTXpHZ7.js";import"./Spinner-C9U-wMq9.js";import"./Dialog-BvbXRq2s.js";import"./TextField-D_pudeUr.js";import"./Switch-CGAgnWot.js";import"./DatePicker-DGw7q5t1.js";import"./DateTimePicker-BUG89NrY.js";import"./LinkButton-BUP5FRO7.js";import{a as y}from"./Container-CmEFyrQ9.js";import"./Paper-1zPDfvU6.js";import"./ErrorFallback-D8Ajf5ZN.js";import"./ErrorFallbackText-DO-g4CVs.js";import"./ErrorFallbackWrapper-BteWv4mc.js";import"./Brand-CYryFwae.js";import{M as B}from"./constants-4ukM-jXN.js";import{B as R,a as C,M}from"./MapToggleButtonPresentational-Bh86kc4C.js";import{allArgs as b}from"./BasicMap.stories-BcRV7__N.js";import{i as A}from"./storyconfig-DEIJDHKx.js";import{B as e}from"./Box-Bgfu1TlP.js";import{P as S}from"./Paper-BydBWlqJ.js";import{T as v}from"./Typography-C64aAkxC.js";import{D as T,d as w}from"./Divider-B---moVq.js";import{S as L}from"./Stack-Cg7aALjV.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-Bvz7h4cQ.js";import"./useThemeProps-DphVTmkb.js";import"./useTheme-C5GDcVVQ.js";import"./AdapterDayjs-NJf71x8s.js";import"./styled-Q5upQxit.js";import"./Modal-hmFd8PXe.js";import"./utils-flKsKshn.js";import"./TransitionGroupContext-tYyA_bnk.js";import"./index-C0fOhz_b.js";import"./generateUtilityClasses-CWOgA3Fs.js";import"./TextField-DC_L1p9b.js";import"./useFormControl-CTEGWcEb.js";import"./createSvgIcon-Cz2FQkUF.js";import"./createStyled-FZZaYGHg.js";import"./IconButton-Cxch8VOt.js";import"./ButtonBase-CMje8YMJ.js";import"./DialogContent-DGeR41IL.js";import"./Button-CtnKgSct.js";import"./Chip-DbpRRavE.js";import"./styled-BpMn-R5t.js";import"./Edit-BIOwsPnM.js";import"./Remove-BKfh7hYJ.js";const P=({scrollable:r})=>t(e,{sx:{p:2},children:Array.from({length:7},(k,s)=>t(e,{sx:{mb:1,p:1,borderRadius:1},children:a(v,{children:["Result Item ",s+1]})},s))}),D=()=>{const r=h.useRef(null);return t(u,{ref:r,drawerWidth:177,children:P({scrollable:r!=null&&r.current?r.current.getContainer():window})})},kt={title:"Component Library/InsetInMap",component:p,decorators:[r=>t(e,{sx:{width:"800px",height:"calc(50vh - 40px)",position:"relative"},children:t(B,{initialMapStyleConfig:A,children:t(r,{})})})],argTypes:{},args:{}},o=r=>t("p",{style:{color:"red"},children:r}),j={topLeft:o("topLeft"),top:o("top"),topRight:o("topRight"),right:o("right"),bottomRight:o("bottomRight"),bottom:o("bottom"),bottomLeft:o("bottomLeft"),left:o("left"),center:o("center")},n={render:r=>t(p,{content:t("p",{style:{opacity:.2,fontSize:"2em"},children:Array(20).fill("CONTENT").join(" ")}),controlArea:j})},i={render:r=>t(p,{content:t(x,{...b}),controlArea:{left:t(D,{}),topRight:t(y,{children:a(L,{direction:"row",spacing:2,alignItems:"center",children:[t(I,{}),t(M,{onClick:()=>alert("Toggle map off")})]})}),bottomRight:t(e,{m:4,children:t(S,{children:t(e,{p:1,sx:{height:44,display:"flex",alignItems:"center",borderRadius:1},children:a(e,{sx:{display:"flex",alignItems:"center",[`& .${w.root}`]:{mx:1}},children:[t(R,{}),t(T,{orientation:"vertical",flexItem:!0}),t(C,{})]})})})})}})};var m,l,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
