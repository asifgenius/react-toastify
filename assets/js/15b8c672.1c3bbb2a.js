"use strict";(self.webpackChunkreact_toastify_doc=self.webpackChunkreact_toastify_doc||[]).push([[8206],{4902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=n(5893),i=n(1151);const a={id:"custom-animation",title:"Define a custom enter and exit animation",sidebar_label:"Define a custom enter and exit animation"},s=void 0,r={id:"custom-animation",title:"Define a custom enter and exit animation",description:"When it comes to animation the possibility are endless and it doesn't need to be complicated! Starting v7, css animations just works out of the box!",source:"@site/docs/custom-animation.md",sourceDirName:".",slug:"/custom-animation",permalink:"/react-toastify/custom-animation",draft:!1,unlisted:!1,editUrl:"https://github.com/fkhadra/react-toastify-doc/edit/master/docs/custom-animation.md",tags:[],version:"current",frontMatter:{id:"custom-animation",title:"Define a custom enter and exit animation",sidebar_label:"Define a custom enter and exit animation"},sidebar:"someSidebar",previous:{title:"Replace the default transition",permalink:"/react-toastify/replace-default-transition"},next:{title:"Drag to remove",permalink:"/react-toastify/drag-to-remove"}},l={},c=[{value:"Handle transition based on the toast position",id:"handle-transition-based-on-the-toast-position",level:3},{value:"Prevent the toast from collapsing after the exit animation",id:"prevent-the-toast-from-collapsing-after-the-exit-animation",level:3},{value:"Tweak collapse duration",id:"tweak-collapse-duration",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["When it comes to animation the possibility are endless and it doesn't need to be complicated! Starting v7, css animations just works out of the box!\nYou can write your own using the power of css or use any css animation library like ",(0,o.jsx)(t.a,{href:"https://animate.style/",children:"animate.css"})," or even copy paste from ",(0,o.jsx)(t.a,{href:"https://animista.net/",children:"animista"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["All you need to do is to import the ",(0,o.jsx)(t.code,{children:"cssTransition"})," and define your ",(0,o.jsx)(t.code,{children:"enter"})," and ",(0,o.jsx)(t.code,{children:"exit"})," classes."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'const bounce = cssTransition({\n  enter: "animate__animated animate__bounceIn",\n  exit: "animate__animated animate__bounceOut"\n});\n\nconst swirl = cssTransition({\n  enter: "swirl-in-fwd",\n  exit: "swirl-out-bck"\n});\n'})}),"\n",(0,o.jsx)(t.p,{children:"The codesanbox below demonstrate how easy it is."}),"\n",(0,o.jsx)("iframe",{src:"https://codesandbox.io/embed/react-toastify-animatecss-jxrx9?fontsize=14&hidenavigation=1&theme=dark&view=preview",style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:"react-toastify-animate.css",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),"\n",(0,o.jsx)(t.h3,{id:"handle-transition-based-on-the-toast-position",children:"Handle transition based on the toast position"}),"\n",(0,o.jsxs)(t.p,{children:["Some transitions are based on the toast position. This is the case for the default one. If you set ",(0,o.jsx)(t.code,{children:"appendPosition"})," to ",(0,o.jsx)(t.code,{children:"true"}),", the current position will be appended to the ",(0,o.jsx)(t.code,{children:"enter"})," and ",(0,o.jsx)(t.code,{children:"exit"})," class name:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:"const Zoom = cssTransition({\n  // zoomIn will become zoomIn--top-right or zoomIn--top-left and so on\n  enter: 'zoomIn',\n  // zoomIn will become zoomOut--top-right or zoomOut--top-left and so on\n  exit: 'zoomOut',\n  // default to false\n  appendPosition: true\n});\n"})}),"\n",(0,o.jsx)(t.admonition,{title:"Important",type:"important",children:(0,o.jsx)(t.p,{children:"Don't forget to add the position as well when you write your css animations. If you pass multiple classes, the position will\nbe appended only to the last one."})}),"\n",(0,o.jsx)(t.h3,{id:"prevent-the-toast-from-collapsing-after-the-exit-animation",children:"Prevent the toast from collapsing after the exit animation"}),"\n",(0,o.jsx)(t.p,{children:"By default, the remaining toast will collapse smoothly"}),"\n",(0,o.jsx)("iframe",{width:"100%",height:"365",src:"https://www.youtube.com/embed/Hui3GZKRDpM",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,o.jsx)(t.p,{children:"This can be disabled as well:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"const Zoom = cssTransition({\n  collapse: false,\n  enter: 'zoomIn', \n  exit: 'zoomOut', \n});\n"})}),"\n",(0,o.jsx)(t.h3,{id:"tweak-collapse-duration",children:"Tweak collapse duration"}),"\n",(0,o.jsx)(t.p,{children:"The default duration is 300ms. This is also easy to change \ud83d\udcaa"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"const Zoom = cssTransition({\n  collapseDuration: 500,\n  enter: 'zoomIn', \n  exit: 'zoomOut', \n});\n"})})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var o=n(7294);const i={},a=o.createContext(i);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);