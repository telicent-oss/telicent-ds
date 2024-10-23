import{u as g,_ as f,j as a,a as j}from"./DefaultPropsProvider-BXx8Lxdp.js";import{C as M}from"./Card-JrN6pG7B.js";import{_ as e,j as h}from"./extends-EO7Nsyo1.js";import{r as y}from"./index-uubelm5h.js";import{g as x,s as b,c as A,a as S}from"./styled-CsMkIDyT.js";import{g as _}from"./generateUtilityClasses-DUdad9y1.js";import{b as N,T as w}from"./Text-mT4dy15X.js";import{B as U}from"./Button-D5Cdt3bu.js";import"./Paper-DPZwIbCZ.js";import"./PrimaryButton-CS5XDf_-.js";import"./Button-CHvfK-Sl.js";import"./ButtonBase-Ds7yUReY.js";import"./useTheme-BLQURKm4.js";import"./TransitionGroupContext-CLVPPxcC.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./useTheme-BwmRXO23.js";function B(t){return x("MuiCardActions",t)}_("MuiCardActions",["root","spacing"]);const O=["disableSpacing","className"],T=t=>{const{classes:o,disableSpacing:s}=t;return S({root:["root",!s&&"spacing"]},B,o)},$=b("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:s}=t;return[o.root,!s.disableSpacing&&o.spacing]}})(({ownerState:t})=>e({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),E=y.forwardRef(function(o,s){const r=g({props:o,name:"MuiCardActions"}),{disableSpacing:d=!1,className:i}=r,p=f(r,O),n=e({},r,{disableSpacing:d}),l=T(n);return h.jsx($,e({className:A(l.root,i),ownerState:n,ref:s},p))});function H(t){return x("MuiCardContent",t)}_("MuiCardContent",["root"]);const I=["className","component"],k=t=>{const{classes:o}=t;return S({root:["root"]},H,o)},L=b("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,o)=>o.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),P=y.forwardRef(function(o,s){const r=g({props:o,name:"MuiCardContent"}),{className:d,component:i="div"}=r,p=f(r,I),n=e({},r,{component:i}),l=k(n);return h.jsx(L,e({as:i,className:A(l.root,d),ownerState:n,ref:s},p))}),v=({children:t})=>a(P,{children:t});v.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const R=({children:t})=>a(E,{children:t});R.__docgenInfo={description:"",methods:[],displayName:"CardActions"};const at={title:"Surfaces/Card",component:M,tags:["autodocs"]},c={args:{variant:"outlined",children:j(v,{children:[a(N,{children:"Capybara"}),a(w,{paragraph:!0,children:"Capybara are the biggest rodents in the world. Our capy family can be seen strutting their stuff in our South American paddock!"}),a(R,{children:a(U,{variant:"secondary",children:"Share"})})]})}};var m,u,C;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "outlined",
    children: <CardContent>
        <H1>Capybara</H1>
        <Text paragraph>
          Capybara are the biggest rodents in the world. Our capy family can be seen strutting their
          stuff in our South American paddock!
        </Text>
        <CardActions>
          <Button variant="secondary">Share</Button>
        </CardActions>
      </CardContent>
  }
}`,...(C=(u=c.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};const nt=["OutlinedCard"];export{c as OutlinedCard,nt as __namedExportsOrder,at as default};
