import{j as e,r as p,a}from"./iframe-Dy9lMmzB.js";import{L as B,d as x,e as O,I as E,f as z,g as L,D as d}from"./DropdownButton-BrGu84Gz.js";import{P as T}from"./UserIcon-lIlQD_Ok.js";import{F as A}from"./FlexBox-BSJBSHE3.js";import{T as j}from"./Text-BrRsEWjj.js";import"./Chip-CWm1ngwI.js";import{D}from"./Divider-CMTuK0oO.js";import"./TreeView-4GWeRKjj.js";import{I as i,P as J}from"./AppInfoRow-jj_TJA14.js";import"./Box-D8L85hdW.js";import"./Container-DjBIKTWZ.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-DmFPjoYm.js";import"./useThemeProps-lwM53F9r.js";import"./useTheme-BclnZfmM.js";import"./AdapterDayjs-WZ0psJGR.js";import"./generateUtilityClass-eiI2zB0n.js";import"./styled-RSvMl9gw.js";import"./Typography-C9bsTXqt.js";import"./generateUtilityClasses-IR8AtaB2.js";import"./Modal-C4MvL2kI.js";import"./utils-BCqmFNg9.js";import"./TransitionGroupContext-UWO09eUM.js";import"./index-BsTKollK.js";import"./resolveComponentProps-BFMJSbl6.js";import"./Popover-DpPjroTM.js";import"./Paper-5Ojvp1ys.js";import"./TextField-DeGygbLG.js";import"./useFormControl-Kb5Mq5P1.js";import"./createSvgIcon-B4cQQdeP.js";import"./SvgIcon-CqTEOtHz.js";import"./createStyled-CMAzb2jS.js";import"./IconButton-Cd6JmYd-.js";import"./ButtonBase-CtbPWmI1.js";import"./DialogContent-oaarGkmL.js";import"./Button-hEWvcwcz.js";import"./Chip-DcZ2ybHw.js";import"./DateTimePicker-TVNrZLsO.js";import"./Divider-BWvL84cf.js";import"./Box-Co6pvyno.js";import"./Stack-B4iL1Uda.js";import"./styled-DtITPUZJ.js";import"./Alert-_fTylV9w.js";import"./LinearProgress-Jc3Fbfut.js";import"./Spinner-COSQ6Iia.js";import"./Dialog-BKq2jPEt.js";import"./MapToggleButtonPresentational-SuPgJWl8.js";import"./Remove-CXwcUTwz.js";import"./LinkButton-DtvFkHE6.js";import"./TextField-CH00GQAj.js";import"./Switch-YLPmESjX.js";import"./DatePicker-51MqrHAP.js";import"./Paper-ByN9AWpV.js";import"./ErrorFallback-D7lBO-St.js";import"./ErrorFallbackText-DxFvtQm8.js";import"./ErrorFallbackWrapper-BbmC-MtB.js";import"./Brand-Lfzxnjkd.js";import"./constants-B7WX-ceA.js";import"./Edit-V_Um_zMs.js";const s=n=>e(L,{...n}),qe={title:"Inputs/Search/MiniSearchAutocomplete",component:s,tags:["autodocs"]},t={args:{options:[{id:"telicent-storybook/anakin-solo",label:"Anakin Solo",isRecentSearch:!0},{id:"telicent-storybook/boba-fett",label:"Boba Fett",isRecentSearch:!0},{id:"telicent-storybook/c-3po",label:"C-3PO",isRecentSearch:!0},{id:"telicent-storybook/ben-skywalker",label:"Ben Skywalker",isRecentSearch:!0},{id:"telicent-storybook/durge",label:"Durge",isRecentSearch:!0},{id:"telicent-storybook/cad-bane",label:"Cad Bane",isRecentSearch:!0},{id:"telicent-storybook/darth-vader",label:"Darth Vader",isRecentSearch:!0},{id:"telicent-storybook/chewbacca",label:"Chewbacca",isRecentSearch:!0},{id:"telicent-storybook/han-solo",label:"Han Solo",isRecentSearch:!0},{id:"telicent-storybook/princess-leia",label:"Princess Leia",isRecentSearch:!0},{id:"telicent-storybook/yoda",label:"Yoda",isRecentSearch:!0},{id:"telicent-storybook/quinlan-vos",label:"Quinlan Vos",isRecentSearch:!0}],placeholder:"Search"},render:n=>e(s,{...n})},r={args:{...t.args,options:[...t.args.options,{id:"telicent-storybook/jacen-solo",label:"Jacen Solo",isRecentSearch:!1},{id:"telicent-storybook/jaina-solo",label:"Jaina Solo",isRecentSearch:!1}],endIcon:e(i,{size:"small","aria-label":"toggle pop over",children:e(d,{fontSize:"inherit"})})},render:n=>{const[v,w]=p.useState(null),[l,c]=p.useState(!1),P=[{id:"telicent-storybook/anakin-solo",label:"Anakin Solo",type:"Person",iconClass:"fa-solid fa-person"},{id:"telicent-storybook/han-solo",label:"Han Solo",type:"Person",iconClass:"fa-solid fa-person"},{id:"telicent-storybook/jacen-solo",label:"Jacen Solo",type:"Person",iconClass:"fa-solid fa-person"},{id:"telicent-storybook/jaina-solo",label:"Jaina Solo",type:"Person",iconClass:"fa-solid fa-person"}],I=o=>{w(o.currentTarget),c(!0)},C=()=>{c(o=>!o)};return a("div",{children:[e(s,{...n,endIcon:e(i,{size:"small","aria-label":"toggle pop over",onClick:I,children:e(d,{rotation:l?180:void 0,fontSize:"inherit"})})}),e(J,{id:"search-popover",open:l,anchorEl:v,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:320},width:360,onClose:C,children:a(A,{rowGap:1,children:[e(j,{variant:"subtitle1",children:"Search results"}),e(D,{}),P.map(o=>e(B,{disablePadding:!0,children:a(x,{role:"undefined",disableRipple:!0,children:[e(O,{children:e(E,{backgroundColor:"black",borderColor:"yellow",color:"yellow",iconClass:o.iconClass})}),e(z,{primary:o.label,secondary:o.type}),e(i,{edge:"end","aria-label":"delete",size:"small",children:e(T,{fontSize:"inherit"})})]})},o.id))]})})]})}};var h,m,b,u,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
