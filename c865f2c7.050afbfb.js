(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(1),o=a(6),i=(a(0),a(148)),r={id:"migration-v9",title:"Migrate to v9",sidebar_label:"\ud83d\ude80 Migrate to v9"},c={id:"migration-v9",title:"Migrate to v9",description:"## What is new in v9",source:"@site/docs/migrate-to-v9.md",permalink:"/react-toastify/migration-v9",editUrl:"https://github.com/fkhadra/react-toastify-doc/edit/master/docs/migrate-to-v9.md",sidebar_label:"\ud83d\ude80 Migrate to v9",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/react-toastify/installation"},next:{title:"Migrate to v8",permalink:"/react-toastify/migration-v8"}},s=[{value:"What is new in v9",id:"what-is-new-in-v9",children:[{value:"useNotificationCenter",id:"usenotificationcenter",children:[]},{value:"Stacked toasts",id:"stacked-toasts",children:[]}]},{value:"Breaking changes",id:"breaking-changes",children:[{value:"<code>toast.onChange</code>",id:"toastonchange",children:[]},{value:"<code>toast.configure</code> removal",id:"toastconfigure-removal",children:[]}]},{value:"Bug fixes",id:"bug-fixes",children:[]}],l={rightToc:s};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-is-new-in-v9"},"What is new in v9"),Object(i.b)("p",null,"Say hello to addons! What are addons? So, addons are like DLCs in video games but for react-toastify \ud83d\ude06. More seriously, you can think of it as utilities built around react-toastify. For example, custom theme, hooks, components etc..."),Object(i.b)("h3",{id:"usenotificationcenter"},"useNotificationCenter"),Object(i.b)("p",null,"The first addon that I would like to introduce is the ",Object(i.b)("inlineCode",{parentName:"p"},"useNotificationCenter")," headless hook! As the name suggests, it let you build your notification center on top of react-toastify. See for yourself \ud83d\udc47"),Object(i.b)("iframe",{src:"https://codesandbox.io/embed/notification-center-framer-vddoj5?fontsize=14&hidenavigation=1&hidedevtools=1&view=preview&codemirror=1&theme=dark",style:{width:"100%",height:"700px",border:0,borderRadius:"4px",overflow:"hidden"},title:"notification-center-framer",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),Object(i.b)("p",null,"Another example using MUI."),Object(i.b)("iframe",{src:"https://codesandbox.io/embed/mui-notification-center-zvxod3?fontsize=14&hidenavigation=1&hidedevtools=1&view=preview&codemirror=1&theme=dark",style:{width:"100%",height:"700px",border:0,borderRadius:"4px",overflow:"hidden"},title:"mui-notification-center",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Addons only impact your bundle size if you use them \ud83c\udf89!"))),Object(i.b)("p",null,"Check the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-toastify/addons/use-notification-center"}),"documentation")," for more details. "),Object(i.b)("h3",{id:"stacked-toasts"},"Stacked toasts"),Object(i.b)("p",null,"This second addon will be released later. There are a bunch of details that I need to cover and I don't want to release something too buggy. Nevertheless, I'm really excited about it and I think it's worth showcasing anyway. "),Object(i.b)("p",null,"I call it ",Object(i.b)("inlineCode",{parentName:"p"},"StackedContainer")," for now, it's an alternative to the ",Object(i.b)("inlineCode",{parentName:"p"},"ToastContainer")," component."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/5574267/160688000-1d01d949-d9e1-41f4-858c-f5c9a33b901d.gif",alt:"stacked-container"}))),Object(i.b)("h2",{id:"breaking-changes"},"Breaking changes"),Object(i.b)("p",null,"There are 2 breaking changes. The API change for ",Object(i.b)("inlineCode",{parentName:"p"},"toast.onChange")," and the removal of ",Object(i.b)("inlineCode",{parentName:"p"},"toast.configure"),"."),Object(i.b)("h3",{id:"toastonchange"},Object(i.b)("inlineCode",{parentName:"h3"},"toast.onChange")),Object(i.b)("p",null,"The previous API was returning the ",Object(i.b)("inlineCode",{parentName:"p"},"numberOfToastDisplayed")," and the ",Object(i.b)("inlineCode",{parentName:"p"},"containerId"),". Honestly, this API seems to be incomplete. "),Object(i.b)("p",null,"For example, with the old API, if I wanted to do some logging this would be very difficult because I don't have enough data to log."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'toast.onChange((numberOfToastDisplayed, containerId) => {\n  logger.info("nothing useful to log, ...")\n})\n')),Object(i.b)("p",null,"The new API offers more possibilities. The callback will receive a ",Object(i.b)("inlineCode",{parentName:"p"},"ToastItem"),". The item provides a bunch of useful properties ",Object(i.b)("inlineCode",{parentName:"p"},"status"),", ",Object(i.b)("inlineCode",{parentName:"p"},"content"),", ",Object(i.b)("inlineCode",{parentName:"p"},"id"),", ",Object(i.b)("inlineCode",{parentName:"p"},"data"),", etc..."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'interface ToastItem<Data = {}> {\n    id: Id;\n    content: React.ReactNode;\n    theme?: Theme;\n    type?: TypeOptions;\n    isLoading?: boolean;\n    containerId?: Id;\n    data: Data;\n    icon?: React.ReactNode | false;\n    status: "added" | "removed" | "updated" \n}\n\nconst unsubscribe = toast.onChange((payload: ToastItem) => {\n  switch (payload.status) {\n    case "added":\n      // new toast added\n      break;\n    case "updated":\n      // toast updated\n      break;\n    case "removed":\n      // toast has been removed\n      break;\n  }\n});\n')),Object(i.b)("p",null,"For example, if I want to log something every time there is a new error notification, with the new API it's trivial"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),'toast.onChange(payload => {\n  if(payload.status === "added" && payload.type === toast.TYPE.ERROR) {\n    logger.error({\n      createdAt: Date.now(),\n      content: payload.content,\n      data: payload.data\n    })\n  }\n})\n')),Object(i.b)("h3",{id:"toastconfigure-removal"},Object(i.b)("inlineCode",{parentName:"h3"},"toast.configure")," removal"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"toast.configure")," works fine for most cases but the current implementation has one main issue. It does not work with react context because it creates a new react tree.\nThat being said, having 2 APIs to do the same thing is a bad thing. "),Object(i.b)("h2",{id:"bug-fixes"},"Bug fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/fkhadra/react-toastify/issues/725"}),"#725")," the success toast on promise does not disappear when resolving too quickly"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/fkhadra/react-toastify/issues/711"}),"#711")," updated toast sometimes has wrong styles"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/fkhadra/react-toastify/issues/700"}),"#700")," generics are not used for toast.promise's result type if you use a custom render method")))}d.isMDXComponent=!0},148:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},b=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(a),u=n,m=b["".concat(r,".").concat(u)]||b[u]||p[u]||i;return a?o.a.createElement(m,c({ref:t},l,{components:a})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var l=2;l<i;l++)r[l]=a[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);