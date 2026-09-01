import{j as r,a as t}from"./iframe-D9RVY3GC.js";import{T as o}from"./Text-CTjdoToi.js";import{P as s}from"./Paper-BpW1gf3D.js";import{B as p}from"./Box-CfJUPqTE.js";import"./preload-helper-C1FmrZbK.js";import"./Typography-CQIUUfI1.js";import"./generateUtilityClass-CTXfrtar.js";import"./styled-BW41HoIO.js";import"./generateUtilityClasses-Be_wgAoD.js";import"./Paper-DZ4dDB26.js";const b={title:"Surfaces/Paper",component:s,tags:["autodocs"],args:{}},n={args:{},render:()=>r("div",{children:[0,1,2,3,4,6,8,12,16,24].map(e=>r(p,{m:2,children:r(s,{elevation:e,children:r(p,{p:2,children:t(o,{children:["Paper with elevation: ",e]})})})},`${e}`))})},a={args:{},render:()=>t(p,{display:"flex",gap:2,flexWrap:"wrap",children:[[1,2,2.5].map(e=>r(s,{elevation:2,padding:e,children:t(o,{children:["padding=",e]})},e)),r(s,{elevation:2,sx:{px:3,py:2},children:r(o,{children:"asymmetric, still sx"})})]})};var i,d,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {},
  render: () => {
    return <div>
        {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map(el => <Box m={2} key={\`\${el}\`}>
            <Paper elevation={el}>
              <Box p={2}>
                <Text>Paper with elevation: {el}</Text>
              </Box>
            </Paper>
          </Box>)}
      </div>;
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,c,x,h,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {},
  render: () => <Box display="flex" gap={2} flexWrap="wrap">
      {[1, 2, 2.5].map(value => <Paper key={value} elevation={2} padding={value}>
          <Text>padding={value}</Text>
        </Paper>)}
      <Paper elevation={2} sx={{
      px: 3,
      py: 2
    }}>
        <Text>asymmetric, still sx</Text>
      </Paper>
    </Box>
}`,...(x=(c=a.parameters)==null?void 0:c.docs)==null?void 0:x.source},description:{story:"PROPOSAL. The `padding` prop, next to what the estate writes by hand today.\n\nEvery value below is one a real app currently passes as `sx`. telicent-admin\nwrites `padding: 1` in seven separate components; graph uses 2.5; search uses\nan asymmetric `px: 3, py: 2`, which this prop deliberately does NOT cover —\nasymmetric padding stays `sx`.",...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.description}}};const j=["Demo","ProposedPaddingProp"];export{n as Demo,a as ProposedPaddingProp,j as __namedExportsOrder,b as default};
