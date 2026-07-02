import{j as t,a,R as h}from"./iframe-ulHXhjOW.js";import{r as p,s as x,o as u,t as I}from"./DropdownButton-D4ndyRTJ.js";import"./UserIcon-B-d1IQYh.js";import"./Text-BoiTDCRr.js";import"./Chip-n1uZIzP0.js";import"./Divider-C0lF_NPc.js";import"./TreeView-Djo6uz5s.js";import"./LinearProgress-BE1QBgJT.js";import"./Spinner-wBjktabM.js";import"./Dialog-BN-VRNR9.js";import"./TextField-CgXZ8iCV.js";import"./Select-FuqWOM9m.js";import"./Switch-BGnmX7CN.js";import"./DatePicker-C7pca_1x.js";import"./DateTimePicker-Buoun9gu.js";import"./LinkButton-CaaZOAyU.js";import{a as y}from"./Container-e_1t6Vkj.js";import"./Paper-CRQ_Ffgy.js";import"./ErrorFallback-CM5zR9AD.js";import"./ErrorFallbackText-CWsckLjw.js";import"./ErrorFallbackWrapper-yYMeo0wW.js";import"./Brand-CleGoPe-.js";import{M as B}from"./constants-BPnf2WSg.js";import{B as R,a as C,M}from"./MapToggleButtonPresentational-CtiuSv3Q.js";import{allArgs as b}from"./BasicMap.stories-Bub6Ajj9.js";import{i as A}from"./storyconfig-DEIJDHKx.js";import{B as e}from"./Box-1efcaeVM.js";import{P as S}from"./Paper-Ce5gTSZ1.js";import{T}from"./Typography-Dn5MRyem.js";import{D as v}from"./Divider-JeDgfplA.js";import{d as w}from"./dividerClasses-BYFYoYAG.js";import{S as L}from"./Stack-Cyq5pepP.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-4ujKhl13.js";import"./useThemeProps-BpUXXMW6.js";import"./useTheme-DrTNJuY8.js";import"./AdapterDayjs-CZeE3p0P.js";import"./styled-Czze2UzD.js";import"./Modal-Cg5uim4K.js";import"./utils-Cprl2CzU.js";import"./TransitionGroupContext-qSVm1uFm.js";import"./index-YuMLfXhi.js";import"./generateUtilityClasses-CSjJ64ks.js";import"./Select-DJoERUQP.js";import"./useFormControl-DawOst1E.js";import"./createSvgIcon-uTqWg2nN.js";import"./TextField-DVVVIXqb.js";import"./createStyled-ZgfepH37.js";import"./IconButton-t9DwqyqP.js";import"./ButtonBase-B2PuhISu.js";import"./DialogContent-MOZRP09j.js";import"./Button-DqB_Kw8t.js";import"./Chip-msXb_G5D.js";import"./MenuItem-BxHmYRBI.js";import"./styled-B4vmi4YW.js";import"./Edit-DOoALeDD.js";import"./Remove-CeLDCN2O.js";const P=({scrollable:r})=>t(e,{sx:{p:2},children:Array.from({length:7},(k,m)=>t(e,{sx:{mb:1,p:1,borderRadius:1},children:a(T,{children:["Result Item ",m+1]})},m))}),D=()=>{const r=h.useRef(null);return t(u,{ref:r,drawerWidth:177,children:P({scrollable:r!=null&&r.current?r.current.getContainer():window})})},Wt={title:"Component Library/InsetInMap",component:p,decorators:[r=>t(e,{sx:{width:"800px",height:"calc(50vh - 40px)",position:"relative"},children:t(B,{initialMapStyleConfig:A,children:t(r,{})})})],argTypes:{},args:{}},o=r=>t("p",{style:{color:"red"},children:r}),j={topLeft:o("topLeft"),top:o("top"),topRight:o("topRight"),right:o("right"),bottomRight:o("bottomRight"),bottom:o("bottom"),bottomLeft:o("bottomLeft"),left:o("left"),center:o("center")},i={render:r=>t(p,{content:t("p",{style:{opacity:.2,fontSize:"2em"},children:Array(20).fill("CONTENT").join(" ")}),controlArea:j})},n={render:r=>t(p,{content:t(x,{...b}),controlArea:{left:t(D,{}),topRight:t(y,{children:a(L,{direction:"row",spacing:2,alignItems:"center",children:[t(I,{}),t(M,{onClick:()=>alert("Toggle map off")})]})}),bottomRight:t(e,{m:4,children:t(S,{children:t(e,{p:1,sx:{height:44,display:"flex",alignItems:"center",borderRadius:1},children:a(e,{sx:{display:"flex",alignItems:"center",[`& .${w.root}`]:{mx:1}},children:[t(R,{}),t(v,{orientation:"vertical",flexItem:!0}),t(C,{})]})})})})}})};var s,l,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
