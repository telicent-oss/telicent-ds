import{j as e,a}from"./DefaultPropsProvider-CCTKYLI5.js";import{r as p}from"./index-uubelm5h.js";import{L as B,M as x}from"./MiniSearchAutocomplete-BBJvMdeu.js";import{I as s,D as O,P as E}from"./TelicentMark-FWLN8l0J.js";import"./DataSetIcon-DkWUFR7X.js";import{F as L}from"./UserIcon-DKSQbTWz.js";import{L as z,a as T,b as A,I as j}from"./UserStatus-CNBIhQI8.js";import{D as d}from"./UserProfile-D2afB5Fh.js";import{T as D}from"./Text-Bdpz0hNF.js";import"./Chip-CX7AHr5i.js";import"./TreeView-BzdUw-b2.js";import"./UserProfileContent-D4jv_867.js";import"./Container-Dr9IOSAC.js";import{P as J}from"./Popover-BDcVDf82.js";import"./extends-EO7Nsyo1.js";import"./styled-DZ6MJxE4.js";import"./styled-DM1eSaGT.js";import"./useTheme-K53Y7m-L.js";import"./useTheme-DuiTjpwn.js";import"./TransitionGroupContext-CLVPPxcC.js";import"./OutlinedInput-C9mwf8Qy.js";import"./generateUtilityClasses-C2NGeXhi.js";import"./InputBase-Ba1XK4-_.js";import"./Popover-BCeiGNac.js";import"./utils-CEb430w8.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-CfOt2XX2.js";import"./resolveComponentProps-Czjqrhj_.js";import"./Paper-ak1QantU.js";import"./GlobalStyles-CDC_EO1t.js";import"./Menu-D3xmr7gS.js";import"./ButtonBase-BqsTvKzc.js";import"./assertThisInitialized-B9jnkVVz.js";import"./index-CUgaF5q8.js";import"./SvgIcon-CuDVGt8p.js";import"./index-DXqQCM1T.js";import"./useThemeProps-DN-sF8k0.js";import"./index-D3eZ-H7s.js";import"./createSvgIcon-D9Qcjewg.js";import"./colorManipulator-D9TaW8UO.js";const i=t=>e(x,{...t}),Pe={title:"Inputs/Search/MiniSearchAutocomplete",component:i,tags:["autodocs"]},n={args:{options:[{id:"telicent-storybook/anakin-solo",label:"Anakin Solo",isRecentSearch:!0},{id:"telicent-storybook/boba-fett",label:"Boba Fett",isRecentSearch:!0},{id:"telicent-storybook/c-3po",label:"C-3PO",isRecentSearch:!0},{id:"telicent-storybook/ben-skywalker",label:"Ben Skywalker",isRecentSearch:!0},{id:"telicent-storybook/durge",label:"Durge",isRecentSearch:!0},{id:"telicent-storybook/cad-bane",label:"Cad Bane",isRecentSearch:!0},{id:"telicent-storybook/darth-vader",label:"Darth Vader",isRecentSearch:!0},{id:"telicent-storybook/chewbacca",label:"Chewbacca",isRecentSearch:!0},{id:"telicent-storybook/han-solo",label:"Han Solo",isRecentSearch:!0},{id:"telicent-storybook/princess-leia",label:"Princess Leia",isRecentSearch:!0},{id:"telicent-storybook/yoda",label:"Yoda",isRecentSearch:!0},{id:"telicent-storybook/quinlan-vos",label:"Quinlan Vos",isRecentSearch:!0}],placeholder:"Search"},render:t=>e(i,{...t})},r={args:{...n.args,options:[...n.args.options,{id:"telicent-storybook/jacen-solo",label:"Jacen Solo",isRecentSearch:!1},{id:"telicent-storybook/jaina-solo",label:"Jaina Solo",isRecentSearch:!1}],endIcon:e(s,{size:"small","aria-label":"toggle pop over",children:e(d,{fontSize:"inherit"})})},render:t=>{const[v,w]=p.useState(null),[l,c]=p.useState(!1),P=[{id:"telicent-storybook/anakin-solo",label:"Anakin Solo",type:"Person",iconClass:"fa-solid fa-person"},{id:"telicent-storybook/han-solo",label:"Han Solo",type:"Person",iconClass:"fa-solid fa-person"},{id:"telicent-storybook/jacen-solo",label:"Jacen Solo",type:"Person",iconClass:"fa-solid fa-person"},{id:"telicent-storybook/jaina-solo",label:"Jaina Solo",type:"Person",iconClass:"fa-solid fa-person"}],I=o=>{w(o.currentTarget),c(!0)},C=()=>{c(o=>!o)};return a("div",{children:[e(i,{...t,endIcon:e(s,{size:"small","aria-label":"toggle pop over",onClick:I,children:e(d,{rotation:l?180:void 0,fontSize:"inherit"})})}),e(J,{id:"search-popover",open:l,anchorEl:v,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:320},width:360,onClose:C,children:a(L,{rowGap:1,children:[e(D,{variant:"subtitle1",children:"Search results"}),e(O,{}),P.map(o=>e(z,{disablePadding:!0,children:a(T,{role:"undefined",disableRipple:!0,children:[e(A,{children:e(j,{backgroundColor:"black",borderColor:"yellow",color:"yellow",iconClass:o.iconClass})}),e(B,{primary:o.label,secondary:o.type}),e(s,{edge:"end","aria-label":"delete",size:"small",children:e(E,{fontSize:"inherit"})})]})},o.id))]})})]})}};var h,b,m,u,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
  render: args => <StoryExample {...args} />
}`,...(m=(b=n.parameters)==null?void 0:b.docs)==null?void 0:m.source},description:{story:"Recent searches will be displayed when `isRecentSearch` has been set to true in `options`",...(S=(u=n.parameters)==null?void 0:u.docs)==null?void 0:S.description}}};var y,k,g,f,R;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
typeahead suggestions. Type solo to the result.`,...(R=(f=r.parameters)==null?void 0:f.docs)==null?void 0:R.description}}};const Ie=["RecentSearches","SearchResults"];export{n as RecentSearches,r as SearchResults,Ie as __namedExportsOrder,Pe as default};
