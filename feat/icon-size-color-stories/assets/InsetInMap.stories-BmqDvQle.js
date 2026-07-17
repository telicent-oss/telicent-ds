import{j as t,a,R as h}from"./iframe-DjLxm7SD.js";import{s as p,t as x,p as u,v as I}from"./DropdownButton-OdITcuya.js";import"./UserIcon-DFS2VSDc.js";import"./Text-CVnCU36g.js";import"./Chip-B8CDxprS.js";import"./Divider-DVlBE3P8.js";import"./TreeView-Co0t44VC.js";import"./LinearProgress-DeQbd7E0.js";import"./Spinner-BkQfXhtb.js";import"./Dialog-YQhBvj2B.js";import"./TextField-6mReXCWm.js";import"./Switch-CDyuDDTr.js";import"./DatePicker-aPQ8noSa.js";import"./DateTimePicker-D4Hp4gX_.js";import"./LinkButton-D9oXM2qx.js";import"./Box--iJ_3JNa.js";import{a as y}from"./Container-DRKYHsiA.js";import"./Paper-ChmMIXfx.js";import"./ErrorFallback-ClFzMA-d.js";import"./ErrorFallbackText-vqUAjIHx.js";import"./ErrorFallbackWrapper-Dc3fOI5x.js";import"./Brand-Dvnzdq7_.js";import{M as B}from"./constants-629LYWu7.js";import{B as R,a as C,M}from"./MapToggleButtonPresentational-3lb-UE9s.js";import{allArgs as b}from"./BasicMap.stories-C-5Vaefx.js";import{i as A}from"./storyconfig-DEIJDHKx.js";import{B as e}from"./Box-PIDL4Fit.js";import{P as S}from"./Paper-Bw5HsGYD.js";import{T as v}from"./Typography-CofTJ_Fs.js";import{D as T,d as w}from"./Divider-C6mIQ5zR.js";import{S as L}from"./Stack-CCnHELyK.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-Ewpml6lw.js";import"./useThemeProps-Fnp1xWzD.js";import"./useTheme-DvVKUnCu.js";import"./AdapterDayjs-B1X-CvWP.js";import"./generateUtilityClass-BLqluGhu.js";import"./styled-C0jSE3AP.js";import"./Modal-B7a9aff8.js";import"./utils-wz01l5qZ.js";import"./TransitionGroupContext-BU8BL2dP.js";import"./index-DrRIbANR.js";import"./resolveComponentProps-DFK19icQ.js";import"./generateUtilityClasses-BO81MJJG.js";import"./TextField-OPZ9edjq.js";import"./useFormControl-UyDYT27V.js";import"./createSvgIcon-MIeX2BRI.js";import"./createStyled-Cc_yoAqX.js";import"./IconButton-DVwg49gr.js";import"./ButtonBase-CgGGn6Da.js";import"./DialogContent-CBR7V6gG.js";import"./Button-CS4wg-vH.js";import"./Chip-BpvzB-8r.js";import"./Close-C1rysX-W.js";import"./styled-atsIZHYt.js";import"./Edit-DojDoZiY.js";import"./Remove-CTK2Ub1o.js";const P=({scrollable:r})=>t(e,{sx:{p:2},children:Array.from({length:7},(k,s)=>t(e,{sx:{mb:1,p:1,borderRadius:1},children:a(v,{children:["Result Item ",s+1]})},s))}),D=()=>{const r=h.useRef(null);return t(u,{ref:r,drawerWidth:177,children:P({scrollable:r!=null&&r.current?r.current.getContainer():window})})},Wt={title:"Component Library/InsetInMap",component:p,decorators:[r=>t(e,{sx:{width:"800px",height:"calc(50vh - 40px)",position:"relative"},children:t(B,{initialMapStyleConfig:A,children:t(r,{})})})],argTypes:{},args:{}},o=r=>t("p",{style:{color:"red"},children:r}),j={topLeft:o("topLeft"),top:o("top"),topRight:o("topRight"),right:o("right"),bottomRight:o("bottomRight"),bottom:o("bottom"),bottomLeft:o("bottomLeft"),left:o("left"),center:o("center")},i={render:r=>t(p,{content:t("p",{style:{opacity:.2,fontSize:"2em"},children:Array(20).fill("CONTENT").join(" ")}),controlArea:j})},n={render:r=>t(p,{content:t(x,{...b}),controlArea:{left:t(D,{}),topRight:t(y,{children:a(L,{direction:"row",spacing:2,alignItems:"center",children:[t(I,{}),t(M,{onClick:()=>alert("Toggle map off")})]})}),bottomRight:t(e,{m:4,children:t(S,{children:t(e,{p:1,sx:{height:44,display:"flex",alignItems:"center",borderRadius:1},children:a(e,{sx:{display:"flex",alignItems:"center",[`& .${w.root}`]:{mx:1}},children:[t(R,{}),t(T,{orientation:"vertical",flexItem:!0}),t(C,{})]})})})})}})};var m,l,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
