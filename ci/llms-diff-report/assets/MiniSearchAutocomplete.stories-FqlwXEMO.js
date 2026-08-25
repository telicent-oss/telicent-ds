import{j as e,r as p,a}from"./iframe-DTfHyu5W.js";import{L as B,d as x,e as O,I as E,f as z,g as L,D as d}from"./DropdownButton-DUCyq73_.js";import{P as T}from"./UserIcon-DPsHQdqc.js";import{F as A}from"./FlexBox-Dx9ngdP2.js";import{T as j}from"./Text-CbmCHta1.js";import"./Chip-Ce6ftWrB.js";import{D}from"./Divider-DQcY7mpQ.js";import"./TreeView-CKyPmjfa.js";import{I as i,P as J}from"./AppInfoRow-DM5JDCIg.js";import"./Box-6g8k1lEa.js";import"./Container-CFRLiDzI.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-BMiY-Nz3.js";import"./useThemeProps-DhRvrWEK.js";import"./useTheme-CurHEFdS.js";import"./AdapterDayjs-DfVF7Ju1.js";import"./generateUtilityClass-Ba3X23cx.js";import"./styled-tbRfHNfe.js";import"./Typography-DEVUDcjz.js";import"./generateUtilityClasses-9N7BeDkA.js";import"./Modal-CuQBat2_.js";import"./utils-hc9ieIbF.js";import"./TransitionGroupContext-pH2rcq8m.js";import"./index-BojeORES.js";import"./resolveComponentProps-kTxaYEkO.js";import"./Popover-CiC5O2RE.js";import"./Paper-7aLAfVaY.js";import"./TextField-Bq5brCt8.js";import"./useFormControl-CfqMxs37.js";import"./createSvgIcon-eW_NYhFU.js";import"./SvgIcon-ByJD-XbM.js";import"./createStyled-28Jskctr.js";import"./IconButton-B22dA0Mh.js";import"./ButtonBase-B4JUzgMd.js";import"./DialogContent-S6vhYFVZ.js";import"./Button-Dae9G8Ev.js";import"./Chip-C9IKZPuh.js";import"./DateTimePicker-CXsTfPVe.js";import"./Divider-B8-GGABN.js";import"./Box-iMTEkAxo.js";import"./Stack-B5wnKsZi.js";import"./styled-V-O3-yLC.js";import"./Alert-DZul0Vde.js";import"./LinearProgress-HKvtzsEf.js";import"./Spinner-Dx14enoI.js";import"./Dialog-CGZIbGHz.js";import"./MapToggleButtonPresentational-jSE1x0h9.js";import"./Remove-NJ9P2pvD.js";import"./LinkButton-CUXW4PH5.js";import"./TextField-C0bNNYYR.js";import"./Switch-CyPgFvnQ.js";import"./DatePicker-YZ26x2F9.js";import"./Paper-BXaJm_Li.js";import"./ErrorFallback-UX7BvmTl.js";import"./ErrorFallbackText-CnIufqnP.js";import"./ErrorFallbackWrapper-B3axQyNr.js";import"./Brand-e-EQElnn.js";import"./constants-BAHDwWKH.js";import"./Edit-CU6kEAEu.js";const s=n=>e(L,{...n}),qe={title:"Inputs/Search/MiniSearchAutocomplete",component:s,tags:["autodocs"]},t={args:{options:[{id:"telicent-storybook/anakin-solo",label:"Anakin Solo",isRecentSearch:!0},{id:"telicent-storybook/boba-fett",label:"Boba Fett",isRecentSearch:!0},{id:"telicent-storybook/c-3po",label:"C-3PO",isRecentSearch:!0},{id:"telicent-storybook/ben-skywalker",label:"Ben Skywalker",isRecentSearch:!0},{id:"telicent-storybook/durge",label:"Durge",isRecentSearch:!0},{id:"telicent-storybook/cad-bane",label:"Cad Bane",isRecentSearch:!0},{id:"telicent-storybook/darth-vader",label:"Darth Vader",isRecentSearch:!0},{id:"telicent-storybook/chewbacca",label:"Chewbacca",isRecentSearch:!0},{id:"telicent-storybook/han-solo",label:"Han Solo",isRecentSearch:!0},{id:"telicent-storybook/princess-leia",label:"Princess Leia",isRecentSearch:!0},{id:"telicent-storybook/yoda",label:"Yoda",isRecentSearch:!0},{id:"telicent-storybook/quinlan-vos",label:"Quinlan Vos",isRecentSearch:!0}],placeholder:"Search"},render:n=>e(s,{...n})},r={args:{...t.args,options:[...t.args.options,{id:"telicent-storybook/jacen-solo",label:"Jacen Solo",isRecentSearch:!1},{id:"telicent-storybook/jaina-solo",label:"Jaina Solo",isRecentSearch:!1}],endIcon:e(i,{size:"small","aria-label":"toggle pop over",children:e(d,{fontSize:"inherit"})})},render:n=>{const[v,w]=p.useState(null),[l,c]=p.useState(!1),P=[{id:"telicent-storybook/anakin-solo",label:"Anakin Solo",type:"Person",iconClass:"fa-solid fa-person"},{id:"telicent-storybook/han-solo",label:"Han Solo",type:"Person",iconClass:"fa-solid fa-person"},{id:"telicent-storybook/jacen-solo",label:"Jacen Solo",type:"Person",iconClass:"fa-solid fa-person"},{id:"telicent-storybook/jaina-solo",label:"Jaina Solo",type:"Person",iconClass:"fa-solid fa-person"}],I=o=>{w(o.currentTarget),c(!0)},C=()=>{c(o=>!o)};return a("div",{children:[e(s,{...n,endIcon:e(i,{size:"small","aria-label":"toggle pop over",onClick:I,children:e(d,{rotation:l?180:void 0,fontSize:"inherit"})})}),e(J,{id:"search-popover",open:l,anchorEl:v,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:320},width:360,onClose:C,children:a(A,{rowGap:1,children:[e(j,{variant:"subtitle1",children:"Search results"}),e(D,{}),P.map(o=>e(B,{disablePadding:!0,children:a(x,{role:"undefined",disableRipple:!0,children:[e(O,{children:e(E,{backgroundColor:"black",borderColor:"yellow",color:"yellow",iconClass:o.iconClass})}),e(z,{primary:o.label,secondary:o.type}),e(i,{edge:"end","aria-label":"delete",size:"small",children:e(T,{fontSize:"inherit"})})]})},o.id))]})})]})}};var h,m,b,u,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source},description:{story:"Recent searches will be displayed when `isRecentSearch` has been set to true in `options`",...(S=(u=t.parameters)==null?void 0:u.docs)==null?void 0:S.description}}};var y,k,g,f,R;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
typeahead suggestions. Type solo to the result.`,...(R=(f=r.parameters)==null?void 0:f.docs)==null?void 0:R.description}}};const Ge=["RecentSearches","SearchResults"];export{t as RecentSearches,r as SearchResults,Ge as __namedExportsOrder,qe as default};
