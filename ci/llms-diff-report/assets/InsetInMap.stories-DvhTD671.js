import{j as t,a,R as h}from"./iframe-DBgioWeW.js";import{r as p,s as x,p as u,t as I}from"./DropdownButton-BabsKrW9.js";import"./UserIcon-BZNRAdYq.js";import"./FlexBox-WvRGoRmd.js";import"./Text-BgUfptMq.js";import"./Chip-CFF8wAV8.js";import"./Divider-mG2cL4cg.js";import"./TreeView-Bk0Y2Vpn.js";import"./AppInfoRow-Dzw9MtOg.js";import"./LinearProgress-CgkIvIK9.js";import"./Spinner-CWMexREX.js";import"./Dialog-S6JnYG3y.js";import"./TextField-Bgagizd7.js";import"./Switch-PbDUnJEB.js";import"./DatePicker-BF5iZhcx.js";import"./DateTimePicker-C2SjaMhl.js";import"./LinkButton-B5-1f7yZ.js";import"./Box-BMRHnFd3.js";import{a as y}from"./Container-CCihsyAb.js";import"./Paper-7C0C2edj.js";import"./ErrorFallback-CKRDg2e3.js";import"./ErrorFallbackText-DWxCPdpF.js";import"./ErrorFallbackWrapper-DYW1qU0r.js";import"./Brand-Bx9Nu_uI.js";import{M as B}from"./constants--Gti5moB.js";import{B as R,a as C,M}from"./MapToggleButtonPresentational-CWWsP1Bq.js";import{allArgs as b}from"./BasicMap.stories-z_hY9R-G.js";import{i as A}from"./storyconfig-DEIJDHKx.js";import{B as e}from"./Box-BcBTuFed.js";import{P as S}from"./Paper-ReDLUWfy.js";import{T}from"./Typography-0sG5OmeS.js";import{D as v,d as w}from"./Divider-BtQ4DxGj.js";import{S as L}from"./Stack-49KLdOgs.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-CMLYgd7W.js";import"./useThemeProps-DD_wnCUH.js";import"./useTheme-C1yOJVtG.js";import"./AdapterDayjs-a3XxtfRM.js";import"./generateUtilityClass-CLTaAhKf.js";import"./styled-BFNF5QCQ.js";import"./Modal-CpjZt_2L.js";import"./utils-BFDACMv_.js";import"./TransitionGroupContext-B_89mR0Z.js";import"./index-CZMS6Q7o.js";import"./resolveComponentProps-BcqjDzNz.js";import"./generateUtilityClasses-Biy-3Iuq.js";import"./Popover-MaL5oiYC.js";import"./TextField-DG8mdDgF.js";import"./useFormControl-B5a28znY.js";import"./createSvgIcon-pQhiwPMe.js";import"./SvgIcon-TllpJj-5.js";import"./createStyled-1Z_SCf_6.js";import"./IconButton-CV8_PS-T.js";import"./ButtonBase-CdfKuLiZ.js";import"./DialogContent-hHcY6KWM.js";import"./Button-DAGEP08y.js";import"./Chip-CaiYGmRd.js";import"./Alert-Dbl8MlCd.js";import"./styled-Ciq6By-E.js";import"./Edit-BOpYoOgP.js";import"./Remove-BC-lmLjV.js";const P=({scrollable:r})=>t(e,{sx:{p:2},children:Array.from({length:7},(k,m)=>t(e,{sx:{mb:1,p:1,borderRadius:1},children:a(T,{children:["Result Item ",m+1]})},m))}),D=()=>{const r=h.useRef(null);return t(u,{ref:r,drawerWidth:177,children:P({scrollable:r!=null&&r.current?r.current.getContainer():window})})},$t={title:"Component Library/InsetInMap",component:p,decorators:[r=>t(e,{sx:{width:"800px",height:"calc(50vh - 40px)",position:"relative"},children:t(B,{initialMapStyleConfig:A,children:t(r,{})})})],argTypes:{},args:{}},o=r=>t("p",{style:{color:"red"},children:r}),j={topLeft:o("topLeft"),top:o("top"),topRight:o("topRight"),right:o("right"),bottomRight:o("bottomRight"),bottom:o("bottom"),bottomLeft:o("bottomLeft"),left:o("left"),center:o("center")},i={render:r=>t(p,{content:t("p",{style:{opacity:.2,fontSize:"2em"},children:Array(20).fill("CONTENT").join(" ")}),controlArea:j})},n={render:r=>t(p,{content:t(x,{...b}),controlArea:{left:t(D,{}),topRight:t(y,{children:a(L,{direction:"row",spacing:2,alignItems:"center",children:[t(I,{}),t(M,{onClick:()=>alert("Toggle map off")})]})}),bottomRight:t(e,{m:4,children:t(S,{children:t(e,{p:1,sx:{height:44,display:"flex",alignItems:"center",borderRadius:1},children:a(e,{sx:{display:"flex",alignItems:"center",[`& .${w.root}`]:{mx:1}},children:[t(R,{}),t(v,{orientation:"vertical",flexItem:!0}),t(C,{})]})})})})}})};var s,l,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
