(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(1),o=t(6),i=(t(0),t(148)),a={id:"dispatch-toast-outside-of-react-component",title:"Dispatch toast outside of react component",sidebar_label:"Dispatch toast outside of react component"},s={id:"dispatch-toast-outside-of-react-component",title:"Dispatch toast outside of react component",description:"The `toast` emitter is just a regular Javascript object, nothing less nothing more. You can dispatch notification from almost anywhere.",source:"@site/docs/dispatch-toast-outside-of-react-component.md",permalink:"/react-toastify/dispatch-toast-outside-of-react-component",editUrl:"https://github.com/fkhadra/react-toastify-doc/edit/master/docs/dispatch-toast-outside-of-react-component.md",sidebar_label:"Dispatch toast outside of react component",sidebar:"someSidebar",previous:{title:"How to style",permalink:"/react-toastify/how-to-style"},next:{title:"useNotificationCenter",permalink:"/react-toastify/addons/use-notification-center"}},c=[],l={rightToc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"toast")," emitter is just a regular Javascript object, nothing less nothing more. You can dispatch notification from almost anywhere."),Object(i.b)("p",null,"In the video below I've used it inside the service worker to notify the user that he's offline."),Object(i.b)("iframe",{width:"100%",height:"500",src:"https://www.youtube.com/embed/Z9DLrRu4sYs",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// index.js\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport 'normalize.css';\nimport App from 'src/components/App';\nimport { toast } from \"react-toastify\";\nimport registerServiceWorker from './registerServiceWorker';\n\nimport 'react-toastify/dist/ReactToastify.css';\nimport './index.css';\n\n\n\nReactDOM.render(\n    <App />,\n  document.getElementById('root')\n);\nregisterServiceWorker(toast);\n\n\n\n//registerServiceWorker.js\n\n// this is a classic service worker coming from CRA\n\nexport default function register(toast) {\n  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {\n    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);\n    if (publicUrl.origin !== window.location.origin) return;\n\n    window.addEventListener('load', () => {\n      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;\n      let isAppOnline = navigator.onLine;\n\n      window.addEventListener('online', () => {\n        if(!isAppOnline){\n          toast('\ud83e\udd84 The connectivity is back, sync in progress...');\n          isAppOnline = true;\n        }\n      });\n\n      window.addEventListener('offline', () => {\n        toast.warn('The app is running offline, any changes mades during this time will be synced as soon as the connectivity is back');\n        isAppOnline = false;\n      });\n\n      if (isLocalhost) {\n        checkValidServiceWorker(swUrl, toast);\n      } else {\n        registerValidSW(swUrl, toast);\n      }\n    });\n  }\n}\n\nfunction registerValidSW(swUrl, toast) {\n  navigator.serviceWorker\n    .register(swUrl)\n    .then(registration => {\n      registration.onupdatefound = () => {\n        const installingWorker = registration.installing;\n        installingWorker.onstatechange = () => {\n          if (installingWorker.state === 'installed') {\n            if (navigator.serviceWorker.controller) {\n              toast.info('\ud83d\udd04 New content is available; please refresh.')\n            } else {\n              toast('\ud83d\ude80 Content is cached for offline use.')\n            }\n          }\n        };\n      };\n    })\n    .catch(error => {\n      toast.error('Error during service worker registration: ' + error,);\n    });\n}\n\nfunction checkValidServiceWorker(swUrl, toast) {\n  fetch(swUrl)\n    .then(response => {\n      if (\n        response.status === 404 ||\n        response.headers.get('content-type').indexOf('javascript') === -1\n      ) {\n        navigator.serviceWorker.ready.then(registration => {\n          registration.unregister().then(() => {\n            window.location.reload();\n          });\n        });\n      } else {\n        registerValidSW(swUrl);\n      }\n    })\n    .catch(() => {\n      toast(\n        '\ud83d\udca9 No internet connection found. App is running in offline mode.'\n      );\n    });\n}\n\nexport function unregister() {\n  if ('serviceWorker' in navigator) {\n    navigator.serviceWorker.ready.then(registration => {\n      registration.unregister();\n    });\n  }\n}\n\n")))}p.isMDXComponent=!0},148:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s({},n,{},e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,m=u["".concat(a,".").concat(d)]||u[d]||f[d]||i;return t?o.a.createElement(m,s({ref:n},l,{components:t})):o.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);