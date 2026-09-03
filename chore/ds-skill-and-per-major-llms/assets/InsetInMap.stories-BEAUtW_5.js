import{j as t,a,R as h}from"./iframe-DNDUxcaO.js";import{t as p,v as x,q as u,w as I}from"./DropdownButton-Gjs_u29X.js";import"./UserIcon-BkYOIqa1.js";import"./FlexBox-B99FqBon.js";import"./Text-BzABXIyF.js";import"./Chip-BpOQvEWJ.js";import"./Divider-CZP54Ze7.js";import"./TreeView-D5w0NpN-.js";import"./AppInfoRow-Cc3GEOw8.js";import"./LinearProgress-C7U5-zF-.js";import"./Spinner-B7aIcwLu.js";import"./Dialog-BNQpFNSR.js";import"./TextField-CIJj8B3P.js";import"./Switch-C0MMkom0.js";import"./DatePicker-D-5DE768.js";import"./DateTimePicker-BB_R5cc9.js";import"./LinkButton-smfWLNJd.js";import"./Box-CyVPnPuN.js";import{a as y}from"./Container-CFQML5lf.js";import"./Paper-CHGMDtz6.js";import"./ErrorFallback-B5ZQhcnu.js";import"./ErrorFallbackText-CjRaFV8l.js";import"./ErrorFallbackWrapper-12v0M5tK.js";import"./Brand-GUpF-d_h.js";import{M as B}from"./constants-DsUVBwT7.js";import{B as R,a as C,M}from"./MapToggleButtonPresentational-DA_-a6wQ.js";import{allArgs as b}from"./BasicMap.stories-BkkLtI2O.js";import{i as A}from"./storyconfig-DEIJDHKx.js";import{B as e}from"./Box-Bkz_GRi9.js";import{P as S}from"./Paper-CFCWWK2T.js";import{T as v}from"./Typography-D2D0xmuv.js";import{D as T,d as w}from"./Divider-DrpONNh4.js";import{S as L}from"./Stack-CmDJwrDz.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-CvpeLjbL.js";import"./useThemeProps-DbfhoLXT.js";import"./useTheme-CjRP5Zih.js";import"./AdapterDayjs-CH9J21mu.js";import"./generateUtilityClass-yRtlLDX3.js";import"./styled-DfedMCu0.js";import"./Modal-BxwzYNJH.js";import"./utils-HRKdNepk.js";import"./TransitionGroupContext-BuYwsTCk.js";import"./index-BfdHqeMj.js";import"./resolveComponentProps-BREYvZrN.js";import"./generateUtilityClasses-B3dIEnov.js";import"./Popover-Ajs4D1Yg.js";import"./TextField-BpITMWTL.js";import"./useFormControl-Bme-q2O6.js";import"./createSvgIcon-Dauu6_Iu.js";import"./SvgIcon-D_gSiXU4.js";import"./createStyled-BMssbegF.js";import"./IconButton-BJQhOQlg.js";import"./ButtonBase-DnXvlvN-.js";import"./DialogContent-CynUCe-Z.js";import"./Button-DTJ9V6nt.js";import"./Chip-cnnRKU4-.js";import"./Alert-DO3pQkEQ.js";import"./styled-CEZOB1IF.js";import"./Edit-B-a3iYoh.js";import"./Remove-kGFwgJC6.js";const P=({scrollable:r})=>t(e,{sx:{p:2},children:Array.from({length:7},(k,m)=>t(e,{sx:{mb:1,p:1,borderRadius:1},children:a(v,{children:["Result Item ",m+1]})},m))}),D=()=>{const r=h.useRef(null);return t(u,{ref:r,drawerWidth:177,children:P({scrollable:r!=null&&r.current?r.current.getContainer():window})})},$t={title:"Component Library/InsetInMap",component:p,decorators:[r=>t(e,{sx:{width:"800px",height:"calc(50vh - 40px)",position:"relative"},children:t(B,{initialMapStyleConfig:A,children:t(r,{})})})],argTypes:{},args:{}},o=r=>t("p",{style:{color:"red"},children:r}),j={topLeft:o("topLeft"),top:o("top"),topRight:o("topRight"),right:o("right"),bottomRight:o("bottomRight"),bottom:o("bottom"),bottomLeft:o("bottomLeft"),left:o("left"),center:o("center")},i={render:r=>t(p,{content:t("p",{style:{opacity:.2,fontSize:"2em"},children:Array(20).fill("CONTENT").join(" ")}),controlArea:j})},n={render:r=>t(p,{content:t(x,{...b}),controlArea:{left:t(D,{}),topRight:t(y,{children:a(L,{direction:"row",spacing:2,alignItems:"center",children:[t(I,{}),t(M,{onClick:()=>alert("Toggle map off")})]})}),bottomRight:t(e,{m:4,children:t(S,{children:t(e,{p:1,sx:{height:44,display:"flex",alignItems:"center",borderRadius:1},children:a(e,{sx:{display:"flex",alignItems:"center",[`& .${w.root}`]:{mx:1}},children:[t(R,{}),t(T,{orientation:"vertical",flexItem:!0}),t(C,{})]})})})})}})};var s,l,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
