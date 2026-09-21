import{j as e,r as p,a}from"./iframe-DJ7o9sjN.js";import{L as B,g as x,h as O,I as E,i as z,j as L,D as d}from"./DropdownButton-DAoCEQns.js";import{P as T}from"./UserIcon-BbRdVOeE.js";import{F as j}from"./FlexBox-CmKMLmja.js";import{T as A}from"./Text-CKYvVaQ3.js";import"./Chip-4RBVK7P0.js";import{D}from"./Divider-CjS48Yb2.js";import"./TreeView-DnOkJcqx.js";import{I as i,P as J}from"./AppInfoRow-B1OC277z.js";import"./Box-DagEX-RT.js";import"./Container-LfFMcqXO.js";import"./preload-helper-C1FmrZbK.js";import"./useThemeProps-CGNqp4tk.js";import"./useThemeProps-CulH-gMG.js";import"./useTheme-Dpcr6gVj.js";import"./AdapterDayjs-e4cXOfxK.js";import"./generateUtilityClass-NKEQXImD.js";import"./styled-B2Xsi3Qk.js";import"./Typography-C3brZaXz.js";import"./generateUtilityClasses-B-H4mZpl.js";import"./Modal-D5bludlO.js";import"./utils-CXw9cUDE.js";import"./TransitionGroupContext-sf3TMEzC.js";import"./index-B7OBf6J8.js";import"./resolveComponentProps-DkEIZkOn.js";import"./Popover-Ws6V5nr9.js";import"./Paper-DDqXORou.js";import"./TextField-6M-OFJd4.js";import"./useFormControl-nxKSvLFH.js";import"./createSvgIcon-D0s82IB_.js";import"./SvgIcon-CTRLopq-.js";import"./createStyled-DrRmjKFf.js";import"./IconButton-BZ9JsQ-4.js";import"./ButtonBase-XfSRIF2e.js";import"./DialogContent-n4vctS3x.js";import"./Button-C6ZWAVf1.js";import"./Chip-C6Fuob-a.js";import"./DateTimePicker-BzN4rV0M.js";import"./Divider-9TcGx5Qj.js";import"./Box-DwCOAluV.js";import"./Stack-BXgzYG84.js";import"./styled-Dc3Vu47j.js";import"./Alert-BiDnlkQN.js";import"./LinearProgress-qzie4g_h.js";import"./Spinner-D2gZDfJD.js";import"./Dialog-CFePTt5u.js";import"./MapToggleButtonPresentational-xRw_q0vm.js";import"./Remove-CwDdSJFc.js";import"./LinkButton-gt6rYSIe.js";import"./TextField-DZNSB9tK.js";import"./Switch-CXrRH0j2.js";import"./DatePicker-B18NgSFC.js";import"./Paper-Bl0ow7oP.js";import"./ErrorFallback-DHAi4B_j.js";import"./ErrorFallbackText-Bec6RRTL.js";import"./ErrorFallbackWrapper-D5su5Bh0.js";import"./Brand-BjLIRTja.js";import"./Edit-BaBc2Yf-.js";const s=n=>e(L,{...n}),Ve={title:"Inputs/Search/MiniSearchAutocomplete",component:s,tags:["autodocs"]},t={args:{options:[{id:"telicent-storybook/anakin-solo",label:"Anakin Solo",isRecentSearch:!0},{id:"telicent-storybook/boba-fett",label:"Boba Fett",isRecentSearch:!0},{id:"telicent-storybook/c-3po",label:"C-3PO",isRecentSearch:!0},{id:"telicent-storybook/ben-skywalker",label:"Ben Skywalker",isRecentSearch:!0},{id:"telicent-storybook/durge",label:"Durge",isRecentSearch:!0},{id:"telicent-storybook/cad-bane",label:"Cad Bane",isRecentSearch:!0},{id:"telicent-storybook/darth-vader",label:"Darth Vader",isRecentSearch:!0},{id:"telicent-storybook/chewbacca",label:"Chewbacca",isRecentSearch:!0},{id:"telicent-storybook/han-solo",label:"Han Solo",isRecentSearch:!0},{id:"telicent-storybook/princess-leia",label:"Princess Leia",isRecentSearch:!0},{id:"telicent-storybook/yoda",label:"Yoda",isRecentSearch:!0},{id:"telicent-storybook/quinlan-vos",label:"Quinlan Vos",isRecentSearch:!0}],placeholder:"Search"},render:n=>e(s,{...n})},r={args:{...t.args,options:[...t.args.options,{id:"telicent-storybook/jacen-solo",label:"Jacen Solo",isRecentSearch:!1},{id:"telicent-storybook/jaina-solo",label:"Jaina Solo",isRecentSearch:!1}],endIcon:e(i,{size:"small","aria-label":"toggle pop over",children:e(d,{fontSize:"inherit"})})},render:n=>{const[v,w]=p.useState(null),[l,c]=p.useState(!1),P=[{id:"telicent-storybook/anakin-solo",label:"Anakin Solo",type:"Person",iconClass:"fa-solid fa-person"},{id:"telicent-storybook/han-solo",label:"Han Solo",type:"Person",iconClass:"fa-solid fa-person"},{id:"telicent-storybook/jacen-solo",label:"Jacen Solo",type:"Person",iconClass:"fa-solid fa-person"},{id:"telicent-storybook/jaina-solo",label:"Jaina Solo",type:"Person",iconClass:"fa-solid fa-person"}],I=o=>{w(o.currentTarget),c(!0)},C=()=>{c(o=>!o)};return a("div",{children:[e(s,{...n,endIcon:e(i,{size:"small","aria-label":"toggle pop over",onClick:I,children:e(d,{rotation:l?180:void 0,fontSize:"inherit"})})}),e(J,{id:"search-popover",open:l,anchorEl:v,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:320},width:360,onClose:C,children:a(j,{rowGap:1,children:[e(A,{variant:"subtitle1",children:"Search results"}),e(D,{}),P.map(o=>e(B,{disablePadding:!0,children:a(x,{role:"undefined",disableRipple:!0,children:[e(O,{children:e(E,{backgroundColor:"black",borderColor:"yellow",color:"yellow",iconClass:o.iconClass})}),e(z,{primary:o.label,secondary:o.type}),e(i,{edge:"end","aria-label":"delete",size:"small",children:e(T,{fontSize:"inherit"})})]})},o.id))]})})]})}};var h,m,b,u,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
typeahead suggestions. Type solo to the result.`,...(R=(f=r.parameters)==null?void 0:f.docs)==null?void 0:R.description}}};const qe=["RecentSearches","SearchResults"];export{t as RecentSearches,r as SearchResults,qe as __namedExportsOrder,Ve as default};
