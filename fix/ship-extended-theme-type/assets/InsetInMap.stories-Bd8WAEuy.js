import{j as t,a,R as h}from"./iframe-CEWiRzw6.js";import{s as p,t as x,p as u,v as I}from"./DropdownButton-D5zAe562.js";import"./UserIcon-72JnTjY2.js";import"./Text-Dp4zv4uS.js";import"./Chip-lJpclgZf.js";import"./Divider-CGtdrDdv.js";import"./TreeView-C7kXjfir.js";import"./LinearProgress-C909keVa.js";import"./Spinner-D6JI1MNv.js";import"./Dialog-D5TmvNsl.js";import"./TextField-BT8Xt3Sl.js";import"./Switch-28k243sq.js";import"./DatePicker-GkMLM4rl.js";import"./DateTimePicker-CLBYXH6l.js";import"./LinkButton-BQLavjxu.js";import{a as y}from"./Container-DTFPg4no.js";import"./Paper-DLWLBnlh.js";import"./ErrorFallback-CGk6Dun0.js";import"./ErrorFallbackText-DHFTb4mH.js";import"./ErrorFallbackWrapper-CTHNPdE-.js";import"./Brand-DHhfrOsC.js";import{M as B}from"./constants-DWn7Y7Mg.js";import{B as R,a as C,M}from"./MapToggleButtonPresentational-DcEVZk3p.js";import{allArgs as b}from"./BasicMap.stories-DIE3wzDP.js";import{i as A}from"./storyconfig-DEIJDHKx.js";import{B as e}from"./Box-B9TS0c-T.js";import{P as S}from"./Paper-Dpz_fFsE.js";import{T as v}from"./Typography-Ct9CX6dI.js";import{D as T,d as w}from"./Divider-C3q8yTWy.js";import{S as L}from"./Stack-eaccBTma.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-BifiOOpz.js";import"./useThemeProps-BfTjzlrr.js";import"./useTheme-BvI3wAVy.js";import"./AdapterDayjs-DKU0gh2u.js";import"./styled-BMacbev-.js";import"./Modal-BQhHhnX1.js";import"./utils-l9xoT8cx.js";import"./TransitionGroupContext-BMjDgQGH.js";import"./index-BV2l58Ww.js";import"./generateUtilityClasses-Cw_0ODav.js";import"./TextField-yl0ILouP.js";import"./useFormControl-CEp6dWZX.js";import"./createSvgIcon-BAc5XkB5.js";import"./createStyled-BmFIYWCc.js";import"./IconButton-DX3o1mfc.js";import"./ButtonBase-DBR6Y10-.js";import"./DialogContent-BO2JCZn7.js";import"./Button-C95QZql4.js";import"./Chip-BIzlRnt1.js";import"./styled-BBOfX3DR.js";import"./Edit-BiEqD8O-.js";import"./Remove-DEwthPW7.js";const P=({scrollable:r})=>t(e,{sx:{p:2},children:Array.from({length:7},(k,s)=>t(e,{sx:{mb:1,p:1,borderRadius:1},children:a(v,{children:["Result Item ",s+1]})},s))}),D=()=>{const r=h.useRef(null);return t(u,{ref:r,drawerWidth:177,children:P({scrollable:r!=null&&r.current?r.current.getContainer():window})})},kt={title:"Component Library/InsetInMap",component:p,decorators:[r=>t(e,{sx:{width:"800px",height:"calc(50vh - 40px)",position:"relative"},children:t(B,{initialMapStyleConfig:A,children:t(r,{})})})],argTypes:{},args:{}},o=r=>t("p",{style:{color:"red"},children:r}),j={topLeft:o("topLeft"),top:o("top"),topRight:o("topRight"),right:o("right"),bottomRight:o("bottomRight"),bottom:o("bottom"),bottomLeft:o("bottomLeft"),left:o("left"),center:o("center")},n={render:r=>t(p,{content:t("p",{style:{opacity:.2,fontSize:"2em"},children:Array(20).fill("CONTENT").join(" ")}),controlArea:j})},i={render:r=>t(p,{content:t(x,{...b}),controlArea:{left:t(D,{}),topRight:t(y,{children:a(L,{direction:"row",spacing:2,alignItems:"center",children:[t(I,{}),t(M,{onClick:()=>alert("Toggle map off")})]})}),bottomRight:t(e,{m:4,children:t(S,{children:t(e,{p:1,sx:{height:44,display:"flex",alignItems:"center",borderRadius:1},children:a(e,{sx:{display:"flex",alignItems:"center",[`& .${w.root}`]:{mx:1}},children:[t(R,{}),t(T,{orientation:"vertical",flexItem:!0}),t(C,{})]})})})})}})};var m,l,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
