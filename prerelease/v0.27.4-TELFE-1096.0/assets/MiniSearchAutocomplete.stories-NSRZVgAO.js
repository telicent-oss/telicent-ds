import{j as e,a}from"./DefaultPropsProvider-D0TKvr2r.js";import{r as p}from"./index-BBkUAzwr.js";import{M as B,I as s,L as x,a as O,b as E,c as z,d as L}from"./FeatureMap-CSD6nHar.js";import{D as T,P as A}from"./Divider-BC0mQ412.js";import"./DataSetIcon-CG5CkLnb.js";import"./UserIcon-iapurhls.js";import{D as d}from"./UserProfile-DTD8vuL9.js";import{T as j}from"./Text--2kP2Hee.js";import"./Chip-x1iish4i.js";import"./TreeView-Cyn4M4bT.js";import"./UserProfileContent-sPlenox6.js";import{F as D}from"./FlexBox-T1h48bRK.js";import"./FlexGrid-CRPoQZwE.js";import"./Container-DkGJoHLf.js";import{P as J}from"./Popover-9AMnJeot.js";import"./jsx-runtime-BwZVo4Wn.js";import"./iframe-SnEuauZ4.js";import"../sb-preview/runtime.js";import"./index-BXZwOzqJ.js";import"./UIThemeProvider-B7hThsE5.js";import"./colorManipulator-CMgB7LGh.js";import"./useTheme-Dxx0vh99.js";import"./ThemeProvider-A6jUefSh.js";import"./index-DQBVfwdU.js";import"./ButtonBase-CFxa-Eso.js";import"./styled-BnvLNUCt.js";import"./generateUtilityClasses-Col5HTSz.js";import"./TransitionGroupContext-RFIud7ZD.js";import"./Popover-k2nIQyS4.js";import"./useTheme-CEroDfaK.js";import"./utils-rL4B1Bvl.js";import"./Paper-hXWzzs4m.js";import"./Box-DMeDqlBc.js";import"./LinearProgress-C5K64B9E.js";import"./Button-CV-yCXgq.js";import"./Button-DaXPrWak.js";import"./styled-S0dBxBnq.js";import"./Typography-BNgSKp3j.js";import"./Card-WooPyQiw.js";import"./CardActions-DwxXivZM.js";import"./index-_4_hgnnR.js";import"./ErrorFallback-BC9yatu4.js";import"./ErrorFallbackText-BLoFGelS.js";import"./ErrorFallbackWrapper-C5MQXyTY.js";import"./SvgIcon-CBAK7Tq2.js";import"./createSvgIcon-BQydvJ91.js";import"./useThemeProps-PRgA7wjr.js";const i=t=>e(B,{...t}),ze={title:"Inputs/Search/MiniSearchAutocomplete",component:i,tags:["autodocs"]},n={args:{options:[{id:"telicent-storybook/anakin-solo",label:"Anakin Solo",isRecentSearch:!0},{id:"telicent-storybook/boba-fett",label:"Boba Fett",isRecentSearch:!0},{id:"telicent-storybook/c-3po",label:"C-3PO",isRecentSearch:!0},{id:"telicent-storybook/ben-skywalker",label:"Ben Skywalker",isRecentSearch:!0},{id:"telicent-storybook/durge",label:"Durge",isRecentSearch:!0},{id:"telicent-storybook/cad-bane",label:"Cad Bane",isRecentSearch:!0},{id:"telicent-storybook/darth-vader",label:"Darth Vader",isRecentSearch:!0},{id:"telicent-storybook/chewbacca",label:"Chewbacca",isRecentSearch:!0},{id:"telicent-storybook/han-solo",label:"Han Solo",isRecentSearch:!0},{id:"telicent-storybook/princess-leia",label:"Princess Leia",isRecentSearch:!0},{id:"telicent-storybook/yoda",label:"Yoda",isRecentSearch:!0},{id:"telicent-storybook/quinlan-vos",label:"Quinlan Vos",isRecentSearch:!0}],placeholder:"Search"},render:t=>e(i,{...t})},r={args:{...n.args,options:[...n.args.options,{id:"telicent-storybook/jacen-solo",label:"Jacen Solo",isRecentSearch:!1},{id:"telicent-storybook/jaina-solo",label:"Jaina Solo",isRecentSearch:!1}],endIcon:e(s,{size:"small","aria-label":"toggle pop over",children:e(d,{fontSize:"inherit"})})},render:t=>{const[v,w]=p.useState(null),[l,c]=p.useState(!1),P=[{id:"telicent-storybook/anakin-solo",label:"Anakin Solo",type:"Person",iconClass:"fa-solid fa-person"},{id:"telicent-storybook/han-solo",label:"Han Solo",type:"Person",iconClass:"fa-solid fa-person"},{id:"telicent-storybook/jacen-solo",label:"Jacen Solo",type:"Person",iconClass:"fa-solid fa-person"},{id:"telicent-storybook/jaina-solo",label:"Jaina Solo",type:"Person",iconClass:"fa-solid fa-person"}],I=o=>{w(o.currentTarget),c(!0)},C=()=>{c(o=>!o)};return a("div",{children:[e(i,{...t,endIcon:e(s,{size:"small","aria-label":"toggle pop over",onClick:I,children:e(d,{rotation:l?180:void 0,fontSize:"inherit"})})}),e(J,{id:"search-popover",open:l,anchorEl:v,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:-10,horizontal:320},width:360,onClose:C,children:a(D,{rowGap:1,children:[e(j,{variant:"subtitle1",children:"Search results"}),e(T,{}),P.map(o=>e(x,{disablePadding:!0,children:a(O,{role:"undefined",disableRipple:!0,children:[e(E,{children:e(z,{backgroundColor:"black",borderColor:"yellow",color:"yellow",iconClass:o.iconClass})}),e(L,{primary:o.label,secondary:o.type}),e(s,{edge:"end","aria-label":"delete",size:"small",children:e(A,{fontSize:"inherit"})})]})},o.id))]})})]})}};var h,b,m,u,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
typeahead suggestions. Type solo to the result.`,...(R=(f=r.parameters)==null?void 0:f.docs)==null?void 0:R.description}}};const Le=["RecentSearches","SearchResults"];export{n as RecentSearches,r as SearchResults,Le as __namedExportsOrder,ze as default};
