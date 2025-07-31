import{j as t,a}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{R as h}from"./index-Dl6G-zuu.js";import{I as p,L as x,B as u,D as I}from"./Drawer-CcegCsCw.js";import{M as y}from"./constants-BL_GbddV.js";import"./UserProfile-DrB3dvyA.js";import"./TelicentHorizontalSVG-DuwDm98x.js";import"./DataSetIcon-BBABdu0b.js";import"./UserIcon-q_P09GsN.js";import"./Text-BNIHq94e.js";import"./Chip-Bx_Lu-NR.js";import{D as B,d as C}from"./Divider-BE0LSpy8.js";import"./TreeView-DpHiciEK.js";import"./UserProfileContent-DdYm007D.js";import{S as R}from"./FlexBox-D6GhYe9U.js";import"./LinearProgress-yGZEzgsa.js";import"./Button-Db1NJzza.js";import"./FlexGrid-C2jJkX6w.js";import{C as M}from"./Container-BErEnX_q.js";import"./Card-CUWN1MwO.js";import"./CardActions-wDSfmjtr.js";import"./Popover-DhgGZshX.js";import"./Paper-CYQoaktD.js";import"./UIThemeProvider-cFJ7Wxoq.js";import"./ErrorFallback-VtVYyFB3.js";import"./ErrorFallbackText-e1_2MPZH.js";import"./ErrorFallbackWrapper-B2v_McFA.js";import{B as b,a as A,M as S}from"./MapToggleButtonPresentational-BRbZj3_b.js";import{allArgs as T}from"./BasicMap.stories-SxOkwA_v.js";import{i as v}from"./storyconfig-CVrxT6qS.js";import{B as e}from"./Box-DjrL3vcN.js";import{P as w}from"./Paper-DB4yr4EO.js";import{T as L}from"./Typography-BuiWgCNN.js";import"./jsx-runtime-DMAvRu52.js";import"./createSvgIcon-sttI1-XB.js";import"./defaultTheme-Cydao2Tu.js";import"./SvgIcon-CjmMrQNX.js";import"./styled-D6pw60Bp.js";import"./generateUtilityClasses-YWFBP9tm.js";import"./DefaultPropsProvider-BHKfC5ky.js";import"./types-BzuXlqsY.js";import"./GlobalStyles-ByhVr9LE.js";import"./useTheme-DxGOHaWi.js";import"./ButtonBase-BUg8pwcP.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-1lBnjf3z.js";import"./Popover-BFLlbOqP.js";import"./useTheme-BYNjlLc8.js";import"./utils-xzVdhYNG.js";import"./index-B0kOWIl9.js";import"./useId-CkA8naEk.js";import"./IconButton-DPejjeAT.js";import"./colorManipulator-YQmhVZwB.js";import"./styled-HsAy3ZEw.js";import"./index-BfyspvgH.js";import"./Button-a6vHgwhc.js";import"./iframe-IuPJFGGz.js";import"../sb-preview/runtime.js";import"./useThemeProps-CBEhXQxo.js";import"./SecondaryButton-RKCuUyYG.js";import"./ThemeProvider-CN5YWCuf.js";import"./List-CmdUcGkz.js";const D=({scrollable:r})=>t(e,{sx:{p:2},children:Array.from({length:7},(k,m)=>t(e,{sx:{mb:1,p:1,borderRadius:1},children:a(L,{children:["Result Item ",m+1]})},m))}),P=()=>{const r=h.useRef(null);return t(I,{ref:r,drawerWidth:177,children:D({scrollable:r!=null&&r.current?r.current.getContainer():window})})},qt={title:"Component Library/InsetInMap",component:p,decorators:[r=>t(e,{sx:{width:"800px",height:"calc(50vh - 40px)",position:"relative"},children:t(y,{initialMapStyleConfig:v,children:t(r,{})})})],argTypes:{},args:{}},o=r=>t("p",{style:{color:"red"},children:r}),j={topLeft:o("topLeft"),top:o("top"),topRight:o("topRight"),right:o("right"),bottomRight:o("bottomRight"),bottom:o("bottom"),bottomLeft:o("bottomLeft"),left:o("left"),center:o("center")},i={render:r=>t(p,{content:t("p",{style:{opacity:.2,fontSize:"2em"},children:Array(20).fill("CONTENT").join(" ")}),controlArea:j})},n={render:r=>t(p,{content:t(u,{...T}),controlArea:{left:t(P,{}),topRight:t(M,{children:a(R,{direction:"row",spacing:2,alignItems:"center",children:[t(x,{}),t(S,{onClick:()=>alert("Toggle map off")})]})}),bottomRight:t(e,{m:4,children:t(w,{children:t(e,{p:1,sx:{height:44,display:"flex",alignItems:"center",borderRadius:1},children:a(e,{sx:{display:"flex",alignItems:"center",[`& .${C.root}`]:{mx:1}},children:[t(b,{}),t(B,{orientation:"vertical",flexItem:!0}),t(A,{})]})})})})}})};var s,l,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const Ft=["AllSlices","MapExample"];export{i as AllSlices,n as MapExample,Ft as __namedExportsOrder,qt as default};
