"use strict";(self.webpackChunkreact_toastify_doc=self.webpackChunkreact_toastify_doc||[]).push([[8016],{2402:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=n(5893),i=n(1151);const a={id:"limit-the-number-of-toast-displayed",title:"Limit the number of toast displayed",sidebar_label:"Limit the number of toast displayed"},s=void 0,r={id:"limit-the-number-of-toast-displayed",title:"Limit the number of toast displayed",description:"Notifications are useful to get the attention of the user. But displaying too many of them can also be counterproductive.",source:"@site/docs/limit-the-number-of-toast-displayed.md",sourceDirName:".",slug:"/limit-the-number-of-toast-displayed",permalink:"/react-toastify/limit-the-number-of-toast-displayed",draft:!1,unlisted:!1,editUrl:"https://github.com/fkhadra/react-toastify-doc/edit/master/docs/limit-the-number-of-toast-displayed.md",tags:[],version:"current",frontMatter:{id:"limit-the-number-of-toast-displayed",title:"Limit the number of toast displayed",sidebar_label:"Limit the number of toast displayed"},sidebar:"someSidebar",previous:{title:"Delay notification appearance",permalink:"/react-toastify/delay-toast-appearance"},next:{title:"Use a controlled progress bar",permalink:"/react-toastify/use-a-controlled-progress-bar"}},c={},l=[{value:"How to clear the waiting queue",id:"how-to-clear-the-waiting-queue",level:2}];function d(t){const e={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["Notifications are useful to get the attention of the user. But displaying too many of them can also be counterproductive.\nThe ",(0,o.jsx)(e.code,{children:"ToastContainer"})," expose a ",(0,o.jsx)(e.code,{children:"limit"})," prop to meet your needs."]}),"\n",(0,o.jsx)(e.admonition,{title:"What happens to the notifications that are not displayed ? \ud83e\uddd0",type:"tip",children:(0,o.jsx)(e.p,{children:"They are added to a queue. They will be displayed as soon as a slot is free."})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:"import React from 'react';\nimport { toast, ToastContainer } from 'react-toastify';\n\nimport 'react-toastify/dist/ReactToastify.css';\n\n// Display a maximum of 3 notifications at the same time\nfunction App(){\n  const notify = () => {\n    toast(\"lorem ipsum\");\n  }\n\n  return (\n    <div>\n      <button onClick={notify}>Click on me a lot!</button>\n      <ToastContainer limit={3}>\n    </div>\n  )\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"how-to-clear-the-waiting-queue",children:"How to clear the waiting queue"}),"\n",(0,o.jsx)(e.p,{children:"You may need to clear the waiting queue in some cases. This is really easy to do."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:"import React from 'react';\nimport { toast, ToastContainer } from 'react-toastify';\n\nimport 'react-toastify/dist/ReactToastify.css';\n\nfunction App(){\n\n  const clearWaitingQueue = () => {\n    // Easy, right \ud83d\ude0e\n    toast.clearWaitingQueue();\n  }\n\n\n  const notify = () => {\n    toast(\"lorem ipsum\");\n  }\n\n  return (\n    <div>\n      <button onClick={notify}>Click on me a lot!</button>\n      <ToastContainer limit={3}>\n    </div>\n  )\n}\n"})}),"\n",(0,o.jsx)(e.p,{children:"You can also decide which queue to empty while working with multiple container."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:'toast.clearWaitingQueue({ containerId: "an Id" });\n'})})]})}function u(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>r,a:()=>s});var o=n(7294);const i={},a=o.createContext(i);function s(t){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),o.createElement(a.Provider,{value:e},t.children)}}}]);