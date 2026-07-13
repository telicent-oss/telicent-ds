import{j as t,a,R as h}from"./iframe-CAVshkuv.js";import{s as p,t as x,p as u,v as I}from"./DropdownButton-9w3rAX6T.js";import"./UserIcon-DJgOmEVN.js";import"./Text-zn7-gcNn.js";import"./Chip-CD6y_O1F.js";import"./Divider-DI0qbv1g.js";import"./TreeView-G_WzO7bU.js";import"./LinearProgress-AOvTTCYa.js";import"./Spinner-aO3iJras.js";import"./Dialog-BzvgW_1y.js";import"./TextField-De73yqc1.js";import"./Switch-B0vd6s4C.js";import"./DatePicker-Opun4efj.js";import"./DateTimePicker-C-jQ5Uw8.js";import"./LinkButton-UDbAGZRZ.js";import"./Box-DLtVExO8.js";import{a as y}from"./Container-COrfX9qv.js";import"./Paper-QK8zw_qk.js";import"./ErrorFallback-BRmu4a9D.js";import"./ErrorFallbackText-C8zJKlqc.js";import"./ErrorFallbackWrapper-Dzt70zLO.js";import"./Brand-BuFxs41G.js";import{M as B}from"./constants-Bdme3Adm.js";import{B as R,a as C,M}from"./MapToggleButtonPresentational-Dh_eY9kA.js";import{allArgs as b}from"./BasicMap.stories-CbwYAfsG.js";import{i as A}from"./storyconfig-DEIJDHKx.js";import{B as e}from"./Box-C4yeY-00.js";import{P as S}from"./Paper-BY4MSiKk.js";import{T as v}from"./Typography-B1Np1v7N.js";import{D as T,d as w}from"./Divider-BzwQ7r6O.js";import{S as L}from"./Stack-aumhO8Vb.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-KzD3lSay.js";import"./useThemeProps-C0hUlt40.js";import"./useTheme-ATZows8q.js";import"./AdapterDayjs-DLp8STlk.js";import"./generateUtilityClass-jc-dHuJ-.js";import"./styled-CEs6WI9Z.js";import"./Modal-q8qVtJkQ.js";import"./utils-CL8D0dFT.js";import"./TransitionGroupContext-mvKX0Qc4.js";import"./index-Bfg7eB2H.js";import"./resolveComponentProps-CK8UMYC2.js";import"./generateUtilityClasses-PgfeV1Wq.js";import"./TextField-D-S9QRzG.js";import"./useFormControl-CbU4OzAW.js";import"./createSvgIcon-B3EaAiNw.js";import"./createStyled-BEuIMvDB.js";import"./IconButton-BeeGNNdb.js";import"./ButtonBase-L_tow8ks.js";import"./DialogContent-DShAFksA.js";import"./Button-CdHIDFCs.js";import"./Chip-DGUVdb4L.js";import"./Close-ZjhlHLtp.js";import"./styled-DmB_YMuy.js";import"./Edit-BJwA-2_m.js";import"./Remove-CPj-DoGK.js";const P=({scrollable:r})=>t(e,{sx:{p:2},children:Array.from({length:7},(k,s)=>t(e,{sx:{mb:1,p:1,borderRadius:1},children:a(v,{children:["Result Item ",s+1]})},s))}),D=()=>{const r=h.useRef(null);return t(u,{ref:r,drawerWidth:177,children:P({scrollable:r!=null&&r.current?r.current.getContainer():window})})},Wt={title:"Component Library/InsetInMap",component:p,decorators:[r=>t(e,{sx:{width:"800px",height:"calc(50vh - 40px)",position:"relative"},children:t(B,{initialMapStyleConfig:A,children:t(r,{})})})],argTypes:{},args:{}},o=r=>t("p",{style:{color:"red"},children:r}),j={topLeft:o("topLeft"),top:o("top"),topRight:o("topRight"),right:o("right"),bottomRight:o("bottomRight"),bottom:o("bottom"),bottomLeft:o("bottomLeft"),left:o("left"),center:o("center")},i={render:r=>t(p,{content:t("p",{style:{opacity:.2,fontSize:"2em"},children:Array(20).fill("CONTENT").join(" ")}),controlArea:j})},n={render:r=>t(p,{content:t(x,{...b}),controlArea:{left:t(D,{}),topRight:t(y,{children:a(L,{direction:"row",spacing:2,alignItems:"center",children:[t(I,{}),t(M,{onClick:()=>alert("Toggle map off")})]})}),bottomRight:t(e,{m:4,children:t(S,{children:t(e,{p:1,sx:{height:44,display:"flex",alignItems:"center",borderRadius:1},children:a(e,{sx:{display:"flex",alignItems:"center",[`& .${w.root}`]:{mx:1}},children:[t(R,{}),t(T,{orientation:"vertical",flexItem:!0}),t(C,{})]})})})})}})};var m,l,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
