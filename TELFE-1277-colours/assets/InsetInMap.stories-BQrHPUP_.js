import{j as t,a}from"./emotion-react-jsx-runtime.browser.esm-BgDa5HT4.js";import{R as h}from"./index-Dl6G-zuu.js";import{I as p,L as x,B as u,D as I}from"./Drawer-iGERundp.js";import{M as y}from"./constants-BdX9_XpC.js";import"./UserProfile-tgHNlyY_.js";import"./TelicentHorizontalSVG-Ba1YJ692.js";import"./DataSetIcon-CPAcG_uv.js";import"./UserIcon-kmeEhtTQ.js";import"./Text-DLq4GXsM.js";import"./Chip-BBluW8aP.js";import{D as B,d as C}from"./Divider-D_v03hYO.js";import"./TreeView-DroTfa6S.js";import"./UserProfileContent-BtPWIMCF.js";import{S as R}from"./FlexBox-BEZBdzr_.js";import"./LinearProgress-DzU0Zg_A.js";import"./Button-CP702T-k.js";import"./LinkButton-u-U60Uzu.js";import{C as M}from"./Container-S5gmVac-.js";import"./Card-DFg-qCLN.js";import"./CardActions-CRS1Zsa7.js";import"./Popover-BCuFO5oU.js";import"./Paper-DV1QHDO7.js";import"./UIThemeProvider-D9srXGTg.js";import"./ErrorFallback-Cb7i3evq.js";import"./ErrorFallbackText-D4-31auA.js";import"./ErrorFallbackWrapper-DPNCVGi4.js";import{B as b,a as A,M as S}from"./MapToggleButtonPresentational-ktAH0RyB.js";import{allArgs as T}from"./BasicMap.stories-CUo4Ji0u.js";import{i as v}from"./storyconfig-CVrxT6qS.js";import{B as e}from"./Box-Cfx8uO0s.js";import{P as w}from"./Paper-CjpJL0pm.js";import{T as L}from"./Typography-D7Rc9HSx.js";import"./jsx-runtime-DMAvRu52.js";import"./createSvgIcon-DuRnm9w0.js";import"./defaultTheme-BpkXhfeA.js";import"./SvgIcon-CGwi2XF8.js";import"./styled-DzpWvPfW.js";import"./generateUtilityClasses-DiXVJdeX.js";import"./DefaultPropsProvider-C67vPJX1.js";import"./types-JQgdQoTs.js";import"./ButtonBase-BKsdIIYL.js";import"./TransitionGroupContext-BU5kpZ0L.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-CZM7sGf7.js";import"./Popover-DjMyMVBa.js";import"./useTheme-DHuFs4j8.js";import"./useTheme-D_QPa1U6.js";import"./utils-CzGd2JMT.js";import"./index-B0kOWIl9.js";import"./Select-llqeadix.js";import"./isMuiElement-DAcuSkv2.js";import"./Menu-DfDRjEgM.js";import"./useId-CkA8naEk.js";import"./GlobalStyles-BOcUuy4L.js";import"./GlobalStyles-CIfgeHMT.js";import"./IconButton-DRAdqdZd.js";import"./colorManipulator-B-1-M9MD.js";import"./styled-Ck8GJYy8.js";import"./Button-BRXLRAOR.js";import"./index-BfyspvgH.js";import"./iframe-B9yYYO_z.js";import"../sb-preview/runtime.js";import"./useThemeProps--JElsblH.js";import"./ThemeProvider-D4yHglI3.js";import"./List-Dh3f9sEI.js";const D=({scrollable:r})=>t(e,{sx:{p:2},children:Array.from({length:7},(k,m)=>t(e,{sx:{mb:1,p:1,borderRadius:1},children:a(L,{children:["Result Item ",m+1]})},m))}),P=()=>{const r=h.useRef(null);return t(I,{ref:r,drawerWidth:177,children:D({scrollable:r!=null&&r.current?r.current.getContainer():window})})},Ht={title:"Component Library/InsetInMap",component:p,decorators:[r=>t(e,{sx:{width:"800px",height:"calc(50vh - 40px)",position:"relative"},children:t(y,{initialMapStyleConfig:v,children:t(r,{})})})],argTypes:{},args:{}},o=r=>t("p",{style:{color:"red"},children:r}),j={topLeft:o("topLeft"),top:o("top"),topRight:o("topRight"),right:o("right"),bottomRight:o("bottomRight"),bottom:o("bottom"),bottomLeft:o("bottomLeft"),left:o("left"),center:o("center")},i={render:r=>t(p,{content:t("p",{style:{opacity:.2,fontSize:"2em"},children:Array(20).fill("CONTENT").join(" ")}),controlArea:j})},n={render:r=>t(p,{content:t(u,{...T}),controlArea:{left:t(P,{}),topRight:t(M,{children:a(R,{direction:"row",spacing:2,alignItems:"center",children:[t(x,{}),t(S,{onClick:()=>alert("Toggle map off")})]})}),bottomRight:t(e,{m:4,children:t(w,{children:t(e,{p:1,sx:{height:44,display:"flex",alignItems:"center",borderRadius:1},children:a(e,{sx:{display:"flex",alignItems:"center",[`& .${C.root}`]:{mx:1}},children:[t(b,{}),t(B,{orientation:"vertical",flexItem:!0}),t(A,{})]})})})})}})};var s,l,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const Jt=["AllSlices","MapExample"];export{i as AllSlices,n as MapExample,Jt as __namedExportsOrder,Ht as default};
