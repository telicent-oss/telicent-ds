import{j as e,a as i}from"./emotion-react-jsx-runtime.browser.esm-e0zr1XFC.js";import{r as p}from"./index-CTjT7uj6.js";import{j as B,k as x,l as O,m as E,n as z,e as a,o as L,p as T,q as d}from"./AuthModal-DL3ijF5g.js";import{a as j,P as A}from"./UserIcon-Bq9kLVr7.js";import{T as D}from"./Text-D7i5Vapy.js";import"./Chip-BPJ67Xo5.js";import{D as J}from"./Card-BQnMpQJj.js";import"./TreeView-DWvM_rah.js";import"./Container-CeTulhJU.js";import"./jsx-runtime-CB_V9I5Y.js";import"./constants-Bsd_zpTb.js";import"./iframe-CX6Z-QNo.js";import"../sb-preview/runtime.js";import"./index-DEWJqUJ8.js";import"./types-CMP91hxZ.js";import"./useTheme-DVRb4tHF.js";import"./identifier-ubkqThfq.js";import"./useTheme-CZEWbKR4.js";import"./GlobalStyles-CqOQHgIj.js";import"./GlobalStyles-DulCgQ73.js";import"./useThemeProps-ErBa_dZ_.js";import"./useThemeProps-BQrQzAVn.js";import"./DefaultPropsProvider-9gJiDDN4.js";import"./ButtonBase-DOQIfnJh.js";import"./styled-DjfdLqg6.js";import"./generateUtilityClasses-axRDXlOb.js";import"./TransitionGroupContext-CcEGFwN5.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./index-CejG0Q0C.js";import"./Select-CG_yOqSO.js";import"./useFormControl-DPKvkoC5.js";import"./Modal-BitlNMhn.js";import"./utils-EYY7_thZ.js";import"./Paper-DurtPqdU.js";import"./useId-DMVUMfb1.js";import"./createSvgIcon-DTZC2Bgq.js";import"./AdapterDayjs-CwUPgnLa.js";import"./Typography-NY1t2oJS.js";import"./TextField-DHonYTvf.js";import"./createStyled-MF3orRa4.js";import"./IconButton-Cs2d6H_u.js";import"./colorManipulator-DHCSb3wy.js";import"./DialogContent-B0Ct5bDE.js";import"./Button-CDw32Au9.js";import"./Chip-DNdTa_iC.js";import"./MenuItem-DqUkfAKy.js";import"./dividerClasses-Bl8Ne15h.js";import"./UIThemeProvider-Y3o75pQS.js";import"./ThemeProvider-BnKwSnOu.js";import"./Box-CRiiUqfG.js";import"./Stack-C-VLTEnn.js";import"./styled-D52li5_j.js";import"./LinearProgress-BKbPPN-u.js";import"./Spinner-w6IMOYm1.js";import"./Dialog-C58kaBQ6.js";import"./MapToggleButtonPresentational-C6NzNk9h.js";import"./Remove-sI1URbM_.js";import"./TextField-h5PPgqP5.js";import"./Select-R6uhQZb-.js";import"./Switch-Cq_EkAlM.js";import"./DatePicker-CfVtjRA2.js";import"./DateTimePicker-CAFr88VV.js";import"./Divider-ALDgEm0R.js";import"./LinkButton-nuz8b2FC.js";import"./Paper-Bbtnvex6.js";import"./ErrorFallback-DmOQLNkI.js";import"./ErrorFallbackText-FisNSYtr.js";import"./ErrorFallbackWrapper-C7MPjQkG.js";import"./Brand-CDA26Tjd.js";import"./Edit-C29vdGC_.js";const s=n=>e(T,{...n}),eo={title:"Inputs/Search/MiniSearchAutocomplete",component:s,tags:["autodocs"]},t={args:{options:[{id:"telicent-storybook/anakin-solo",label:"Anakin Solo",isRecentSearch:!0},{id:"telicent-storybook/boba-fett",label:"Boba Fett",isRecentSearch:!0},{id:"telicent-storybook/c-3po",label:"C-3PO",isRecentSearch:!0},{id:"telicent-storybook/ben-skywalker",label:"Ben Skywalker",isRecentSearch:!0},{id:"telicent-storybook/durge",label:"Durge",isRecentSearch:!0},{id:"telicent-storybook/cad-bane",label:"Cad Bane",isRecentSearch:!0},{id:"telicent-storybook/darth-vader",label:"Darth Vader",isRecentSearch:!0},{id:"telicent-storybook/chewbacca",label:"Chewbacca",isRecentSearch:!0},{id:"telicent-storybook/han-solo",label:"Han Solo",isRecentSearch:!0},{id:"telicent-storybook/princess-leia",label:"Princess Leia",isRecentSearch:!0},{id:"telicent-storybook/yoda",label:"Yoda",isRecentSearch:!0},{id:"telicent-storybook/quinlan-vos",label:"Quinlan Vos",isRecentSearch:!0}],placeholder:"Search"},render:n=>e(s,{...n})},r={args:{...t.args,options:[...t.args.options,{id:"telicent-storybook/jacen-solo",label:"Jacen Solo",isRecentSearch:!1},{id:"telicent-storybook/jaina-solo",label:"Jaina Solo",isRecentSearch:!1}],endIcon:e(a,{size:"small","aria-label":"toggle pop over",children:e(d,{fontSize:"inherit"})})},render:n=>{const[v,w]=p.useState(null),[l,c]=p.useState(!1),P=[{id:"telicent-storybook/anakin-solo",label:"Anakin Solo",type:"Person",iconClass:"fa-solid fa-person"},{id:"telicent-storybook/han-solo",label:"Han Solo",type:"Person",iconClass:"fa-solid fa-person"},{id:"telicent-storybook/jacen-solo",label:"Jacen Solo",type:"Person",iconClass:"fa-solid fa-person"},{id:"telicent-storybook/jaina-solo",label:"Jaina Solo",type:"Person",iconClass:"fa-solid fa-person"}],I=o=>{w(o.currentTarget),c(!0)},C=()=>{c(o=>!o)};return i("div",{children:[e(s,{...n,endIcon:e(a,{size:"small","aria-label":"toggle pop over",onClick:I,children:e(d,{rotation:l?180:void 0,fontSize:"inherit"})})}),e(L,{id:"search-popover",open:l,anchorEl:v,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:320},width:360,onClose:C,children:i(j,{rowGap:1,children:[e(D,{variant:"subtitle1",children:"Search results"}),e(J,{}),P.map(o=>e(B,{disablePadding:!0,children:i(x,{role:"undefined",disableRipple:!0,children:[e(O,{children:e(E,{backgroundColor:"black",borderColor:"yellow",color:"yellow",iconClass:o.iconClass})}),e(z,{primary:o.label,secondary:o.type}),e(a,{edge:"end","aria-label":"delete",size:"small",children:e(A,{fontSize:"inherit"})})]})},o.id))]})})]})}};var m,h,b,u,S;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    options: [{
      id: "telicent-storybook/anakin-solo",
      label: "Anakin Solo",
      isRecentSearch: true
    }, {
      id: "telicent-storybook/boba-fett",
      label: "Boba Fett",
      isRecentSearch: true
    }, {
      id: "telicent-storybook/c-3po",
      label: "C-3PO",
      isRecentSearch: true
    }, {
      id: "telicent-storybook/ben-skywalker",
      label: "Ben Skywalker",
      isRecentSearch: true
    }, {
      id: "telicent-storybook/durge",
      label: "Durge",
      isRecentSearch: true
    }, {
      id: "telicent-storybook/cad-bane",
      label: "Cad Bane",
      isRecentSearch: true
    }, {
      id: "telicent-storybook/darth-vader",
      label: "Darth Vader",
      isRecentSearch: true
    }, {
      id: "telicent-storybook/chewbacca",
      label: "Chewbacca",
      isRecentSearch: true
    }, {
      id: "telicent-storybook/han-solo",
      label: "Han Solo",
      isRecentSearch: true
    }, {
      id: "telicent-storybook/princess-leia",
      label: "Princess Leia",
      isRecentSearch: true
    }, {
      id: "telicent-storybook/yoda",
      label: "Yoda",
      isRecentSearch: true
    }, {
      id: "telicent-storybook/quinlan-vos",
      label: "Quinlan Vos",
      isRecentSearch: true
    }],
    placeholder: "Search"
  },
  render: (args: Story["args"]) => <StoryExample {...args} />
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source},description:{story:"Recent searches will be displayed when `isRecentSearch` has been set to true in `options`",...(S=(u=t.parameters)==null?void 0:u.docs)==null?void 0:S.description}}};var y,k,g,f,R;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...RecentSearches.args,
    options: [...RecentSearches.args.options, {
      id: "telicent-storybook/jacen-solo",
      label: "Jacen Solo",
      isRecentSearch: false
    }, {
      id: "telicent-storybook/jaina-solo",
      label: "Jaina Solo",
      isRecentSearch: false
    }],
    endIcon: <IconButton size="small" aria-label="toggle pop over">
        <DownArrowIcon fontSize="inherit" />
      </IconButton>
  },
  render: args => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [showPopOver, setShowPopOver] = useState(false);
    const results = [{
      id: "telicent-storybook/anakin-solo",
      label: "Anakin Solo",
      type: "Person",
      iconClass: "fa-solid fa-person"
    }, {
      id: "telicent-storybook/han-solo",
      label: "Han Solo",
      type: "Person",
      iconClass: "fa-solid fa-person"
    }, {
      id: "telicent-storybook/jacen-solo",
      label: "Jacen Solo",
      type: "Person",
      iconClass: "fa-solid fa-person"
    }, {
      id: "telicent-storybook/jaina-solo",
      label: "Jaina Solo",
      type: "Person",
      iconClass: "fa-solid fa-person"
    }];
    const openPopUp = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setShowPopOver(true);
    };
    const togglePopUp = () => {
      setShowPopOver(show => !show);
    };
    return <div>
        <StoryExample {...args} endIcon={<IconButton size="small" aria-label="toggle pop over" onClick={openPopUp}>
              <DownArrowIcon rotation={showPopOver ? 180 : undefined} fontSize="inherit" />
            </IconButton>} />
        <PopOver id="search-popover" open={showPopOver} anchorEl={anchorEl} anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }} transformOrigin={{
        vertical: -10,
        horizontal: 320
      }} width={360} onClose={togglePopUp}>
          <FlexBox rowGap={1}>
            <Text variant="subtitle1">Search results</Text>
            <Divider />
            {results.map(result => <ListItem key={result.id} disablePadding>
                <ListItemButton role="undefined" disableRipple>
                  <ListItemIcon>
                    <IESType backgroundColor="black" borderColor="yellow" color="yellow" iconClass={result.iconClass} />
                  </ListItemIcon>
                  <ListItemText primary={result.label} secondary={result.type} />
                  <IconButton edge="end" aria-label="delete" size="small">
                    <PlusCircleIcon fontSize="inherit" />
                  </IconButton>
                </ListItemButton>
              </ListItem>)}
          </FlexBox>
        </PopOver>
      </div>;
  }
}`,...(g=(k=r.parameters)==null?void 0:k.docs)==null?void 0:g.source},description:{story:`This example shows how suggestions from typeahead and the user's recent
searches should be displayed. Recent searches should take priority over
typeahead suggestions. Type solo to the result.`,...(R=(f=r.parameters)==null?void 0:f.docs)==null?void 0:R.description}}};const oo=["RecentSearches","SearchResults"];export{t as RecentSearches,r as SearchResults,oo as __namedExportsOrder,eo as default};
