import{j as t,a,R as h}from"./iframe-IZoSKsE3.js";import{s as p,t as x,p as u,v as I}from"./DropdownButton-B5TP08KZ.js";import"./UserIcon-RuE3VV1c.js";import"./Text-Kj3CiPWT.js";import"./Chip-B0Z93eta.js";import"./Divider-B-3_Adf4.js";import"./TreeView-CuKNTmME.js";import"./LinearProgress-DReytKR0.js";import"./Spinner-BRYGcylR.js";import"./Dialog-CAOjiQ45.js";import"./TextField-Bfy6L2oH.js";import"./Switch-DV-LHNwK.js";import"./DatePicker-jgDY5iU9.js";import"./DateTimePicker-Cp3vG90e.js";import"./LinkButton-DuZk3qqS.js";import"./Box-uH6Ohr9R.js";import{a as y}from"./Container-DG8DPGND.js";import"./Paper-CERtHtjI.js";import"./ErrorFallback-xEgWIGhC.js";import"./ErrorFallbackText-CmtVqweP.js";import"./ErrorFallbackWrapper-CT6MF4FT.js";import"./Brand-BVth3CVq.js";import{M as B}from"./constants-CIQOnJ5P.js";import{B as R,a as C,M}from"./MapToggleButtonPresentational-BDY0ODha.js";import{allArgs as b}from"./BasicMap.stories-Dtg9zRBW.js";import{i as A}from"./storyconfig-DEIJDHKx.js";import{B as e}from"./Box-DfvW-z9e.js";import{P as S}from"./Paper-ClTtkpZ4.js";import{T as v}from"./Typography-CQLnp7AW.js";import{D as T,d as w}from"./Divider-BYw826Ky.js";import{S as L}from"./Stack-9NxgANXW.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-DTUKyBXe.js";import"./useThemeProps-Fa_ce5Ni.js";import"./useTheme-CsPhboDS.js";import"./AdapterDayjs-X4Nz8chh.js";import"./generateUtilityClass-DxC2Wx0F.js";import"./styled-PcYrI7eH.js";import"./Modal-z7cB2q78.js";import"./utils-Df1nm0Py.js";import"./TransitionGroupContext-Q2DBTf-m.js";import"./index-DlegAnnu.js";import"./resolveComponentProps-2LdfrHoa.js";import"./generateUtilityClasses-COTvziYz.js";import"./TextField-C1yTht9j.js";import"./useFormControl-BUYDSUI9.js";import"./createSvgIcon-D0jCcW4R.js";import"./createStyled-AIvOzxUM.js";import"./IconButton-DegQ21xD.js";import"./ButtonBase-qLroFK0e.js";import"./DialogContent-CeI2ul6W.js";import"./Button-CeFHt3lU.js";import"./Chip-D1Z91CjO.js";import"./Close-Bkeo-_v7.js";import"./styled-xThT8ge4.js";import"./Edit-CK78KsNY.js";import"./Remove-CPvZ5wnT.js";const P=({scrollable:r})=>t(e,{sx:{p:2},children:Array.from({length:7},(k,s)=>t(e,{sx:{mb:1,p:1,borderRadius:1},children:a(v,{children:["Result Item ",s+1]})},s))}),D=()=>{const r=h.useRef(null);return t(u,{ref:r,drawerWidth:177,children:P({scrollable:r!=null&&r.current?r.current.getContainer():window})})},Wt={title:"Component Library/InsetInMap",component:p,decorators:[r=>t(e,{sx:{width:"800px",height:"calc(50vh - 40px)",position:"relative"},children:t(B,{initialMapStyleConfig:A,children:t(r,{})})})],argTypes:{},args:{}},o=r=>t("p",{style:{color:"red"},children:r}),j={topLeft:o("topLeft"),top:o("top"),topRight:o("topRight"),right:o("right"),bottomRight:o("bottomRight"),bottom:o("bottom"),bottomLeft:o("bottomLeft"),left:o("left"),center:o("center")},i={render:r=>t(p,{content:t("p",{style:{opacity:.2,fontSize:"2em"},children:Array(20).fill("CONTENT").join(" ")}),controlArea:j})},n={render:r=>t(p,{content:t(x,{...b}),controlArea:{left:t(D,{}),topRight:t(y,{children:a(L,{direction:"row",spacing:2,alignItems:"center",children:[t(I,{}),t(M,{onClick:()=>alert("Toggle map off")})]})}),bottomRight:t(e,{m:4,children:t(S,{children:t(e,{p:1,sx:{height:44,display:"flex",alignItems:"center",borderRadius:1},children:a(e,{sx:{display:"flex",alignItems:"center",[`& .${w.root}`]:{mx:1}},children:[t(R,{}),t(T,{orientation:"vertical",flexItem:!0}),t(C,{})]})})})})}})};var m,l,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
