import{j as t,a,R as h}from"./iframe-D9RVY3GC.js";import{r as p,s as x,p as u,t as I}from"./DropdownButton-rwl3jQ59.js";import"./UserIcon-CvpWeRbs.js";import"./FlexBox-pDwT3cCW.js";import"./Text-CTjdoToi.js";import"./Chip-qeIbMXxN.js";import"./Divider-Va55kEt4.js";import"./TreeView-DwO-BKrr.js";import"./AppInfoRow-DULWr38G.js";import"./LinearProgress-BKVhmfjM.js";import"./Spinner-CzGnuAX6.js";import"./Dialog-BJNl9L1j.js";import"./TextField-aZwqKjic.js";import"./Switch-CVB92RCE.js";import"./DatePicker-VCzAvXsF.js";import"./DateTimePicker-BgAW3mTw.js";import"./LinkButton-Di2nIt0c.js";import"./Box-QubXtXBl.js";import{a as y}from"./Container-BKIHoisf.js";import"./Paper-BpW1gf3D.js";import"./ErrorFallback-BZuSmM84.js";import"./ErrorFallbackText-Dygi6Fti.js";import"./ErrorFallbackWrapper-K9D3Pz28.js";import"./Brand-CtVUlHRr.js";import{M as B}from"./constants-DcEJ8LYK.js";import{B as R,a as C,M}from"./MapToggleButtonPresentational-OMvEBnm1.js";import{allArgs as b}from"./BasicMap.stories-DmFQ9vT5.js";import{i as A}from"./storyconfig-DEIJDHKx.js";import{B as e}from"./Box-CfJUPqTE.js";import{P as S}from"./Paper-DZ4dDB26.js";import{T}from"./Typography-CQIUUfI1.js";import{D as v,d as w}from"./Divider-Z7BygLmR.js";import{S as L}from"./Stack-3Kaj-9dF.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-Bkz14TE8.js";import"./useThemeProps-onjQzJVs.js";import"./useTheme-Cuek0u1e.js";import"./AdapterDayjs-CrQQFh2s.js";import"./generateUtilityClass-CTXfrtar.js";import"./styled-BW41HoIO.js";import"./Modal-B9CQxxl4.js";import"./utils-KzoBiQyf.js";import"./TransitionGroupContext-CVAJ40Fq.js";import"./index-BgBRaJK_.js";import"./resolveComponentProps-BntwI70o.js";import"./generateUtilityClasses-Be_wgAoD.js";import"./Popover-CK7xeeeX.js";import"./TextField-DJYulSoA.js";import"./useFormControl-xnu4cqzQ.js";import"./createSvgIcon-CXow994q.js";import"./SvgIcon-kZewuNf_.js";import"./createStyled-Dd19UBrm.js";import"./IconButton-CYM2rBEb.js";import"./ButtonBase-fQYEMxRY.js";import"./DialogContent-BdDzalot.js";import"./Button-BJU7Im6I.js";import"./Chip-cLD_6qyI.js";import"./Alert-A_5L-O8t.js";import"./styled-CH2-HNge.js";import"./Edit-jTHivU1M.js";import"./Remove-CvcvF1R3.js";const P=({scrollable:r})=>t(e,{sx:{p:2},children:Array.from({length:7},(k,m)=>t(e,{sx:{mb:1,p:1,borderRadius:1},children:a(T,{children:["Result Item ",m+1]})},m))}),D=()=>{const r=h.useRef(null);return t(u,{ref:r,drawerWidth:177,children:P({scrollable:r!=null&&r.current?r.current.getContainer():window})})},$t={title:"Component Library/InsetInMap",component:p,decorators:[r=>t(e,{sx:{width:"800px",height:"calc(50vh - 40px)",position:"relative"},children:t(B,{initialMapStyleConfig:A,children:t(r,{})})})],argTypes:{},args:{}},o=r=>t("p",{style:{color:"red"},children:r}),j={topLeft:o("topLeft"),top:o("top"),topRight:o("topRight"),right:o("right"),bottomRight:o("bottomRight"),bottom:o("bottom"),bottomLeft:o("bottomLeft"),left:o("left"),center:o("center")},i={render:r=>t(p,{content:t("p",{style:{opacity:.2,fontSize:"2em"},children:Array(20).fill("CONTENT").join(" ")}),controlArea:j})},n={render:r=>t(p,{content:t(x,{...b}),controlArea:{left:t(D,{}),topRight:t(y,{children:a(L,{direction:"row",spacing:2,alignItems:"center",children:[t(I,{}),t(M,{onClick:()=>alert("Toggle map off")})]})}),bottomRight:t(e,{m:4,children:t(S,{children:t(e,{p:1,sx:{height:44,display:"flex",alignItems:"center",borderRadius:1},children:a(e,{sx:{display:"flex",alignItems:"center",[`& .${w.root}`]:{mx:1}},children:[t(R,{}),t(v,{orientation:"vertical",flexItem:!0}),t(C,{})]})})})})}})};var s,l,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
