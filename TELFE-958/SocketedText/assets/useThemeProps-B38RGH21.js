import{r as n}from"./DefaultPropsProvider-mMqPhAz4.js";import{u as p}from"./useTheme-Dc11I-P9.js";function m(t){const{theme:e,name:o,props:r}=t;return!e||!e.components||!e.components[o]||!e.components[o].defaultProps?r:n(e.components[o].defaultProps,r)}function P({props:t,name:e,defaultTheme:o,themeId:r}){let s=p(o);return r&&(s=s[r]||s),m({theme:s,name:e,props:t})}export{P as u};
