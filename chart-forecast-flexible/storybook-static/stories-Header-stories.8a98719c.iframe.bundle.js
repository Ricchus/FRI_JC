"use strict";(self.webpackChunkchart_forecast_flexible=self.webpackChunkchart_forecast_flexible||[]).push([[512],{"../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./src/stories/button.css"(c,d,e){e.r(d),e.d(d,{default:()=>u});var s=e("../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(s),o=e("../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),t=e.n(o),r=t()(n());r.push([c.id,`.storybook-button {
  display: inline-block;
  cursor: pointer;
  border: 0;
  border-radius: 3em;
  font-weight: 700;
  line-height: 1;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
.storybook-button--primary {
  background-color: #555ab9;
  color: white;
}
.storybook-button--secondary {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  background-color: transparent;
  color: #333;
}
.storybook-button--small {
  padding: 10px 16px;
  font-size: 12px;
}
.storybook-button--medium {
  padding: 11px 20px;
  font-size: 14px;
}
.storybook-button--large {
  padding: 12px 24px;
  font-size: 16px;
}
`,""]);const u=r},"../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./src/stories/header.css"(c,d,e){e.r(d),e.d(d,{default:()=>u});var s=e("../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(s),o=e("../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),t=e.n(o),r=t()(n());r.push([c.id,`.storybook-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.storybook-header svg {
  display: inline-block;
  vertical-align: top;
}

.storybook-header h1 {
  display: inline-block;
  vertical-align: top;
  margin: 6px 0 6px 10px;
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
}

.storybook-header button + button {
  margin-left: 10px;
}

.storybook-header .welcome {
  margin-right: 10px;
  color: #333;
  font-size: 14px;
}
`,""]);const u=r},"../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"(c){c.exports=function(d){var e=[];return e.toString=function(){return this.map(function(n){var o="",t=typeof n[5]<"u";return n[4]&&(o+="@supports (".concat(n[4],") {")),n[2]&&(o+="@media ".concat(n[2]," {")),t&&(o+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),o+=d(n),t&&(o+="}"),n[2]&&(o+="}"),n[4]&&(o+="}"),o}).join("")},e.i=function(n,o,t,r,u){typeof n=="string"&&(n=[[null,n,void 0]]);var i={};if(t)for(var a=0;a<this.length;a++){var m=this[a][0];m!=null&&(i[m]=!0)}for(var f=0;f<n.length;f++){var l=[].concat(n[f]);t&&i[l[0]]||(typeof u<"u"&&(typeof l[5]>"u"||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=u),o&&(l[2]&&(l[1]="@media ".concat(l[2]," {").concat(l[1],"}")),l[2]=o),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},"../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"(c){c.exports=function(d){return d[1]}},"../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"(c){var d=[];function e(o){for(var t=-1,r=0;r<d.length;r++)if(d[r].identifier===o){t=r;break}return t}function s(o,t){for(var r={},u=[],i=0;i<o.length;i++){var a=o[i],m=t.base?a[0]+t.base:a[0],f=r[m]||0,l="".concat(m," ").concat(f);r[m]=f+1;var b=e(l),v={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(b!==-1)d[b].references++,d[b].updater(v);else{var y=n(v,t);t.byIndex=i,d.splice(i,0,{identifier:l,updater:y,references:1})}u.push(l)}return u}function n(o,t){var r=t.domAPI(t);r.update(o);var u=function(a){if(a){if(a.css===o.css&&a.media===o.media&&a.sourceMap===o.sourceMap&&a.supports===o.supports&&a.layer===o.layer)return;r.update(o=a)}else r.remove()};return u}c.exports=function(o,t){t=t||{},o=o||[];var r=s(o,t);return function(i){i=i||[];for(var a=0;a<r.length;a++){var m=r[a],f=e(m);d[f].references--}for(var l=s(i,t),b=0;b<r.length;b++){var v=r[b],y=e(v);d[y].references===0&&(d[y].updater(),d.splice(y,1))}r=l}}},"../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"(c){var d={};function e(n){if(typeof d[n]>"u"){var o=document.querySelector(n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch{o=null}d[n]=o}return d[n]}function s(n,o){var t=e(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(o)}c.exports=s},"../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"(c){function d(e){var s=document.createElement("style");return e.setAttributes(s,e.attributes),e.insert(s,e.options),s}c.exports=d},"../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"(c,d,e){function s(n){var o=e.nc;o&&n.setAttribute("nonce",o)}c.exports=s},"../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"(c){function d(n,o,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var u=typeof t.layer<"u";u&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,u&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&typeof btoa<"u"&&(r+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),o.styleTagTransform(r,n,o.options)}function e(n){if(n.parentNode===null)return!1;n.parentNode.removeChild(n)}function s(n){if(typeof document>"u")return{update:function(){},remove:function(){}};var o=n.insertStyleElement(n);return{update:function(r){d(o,n,r)},remove:function(){e(o)}}}c.exports=s},"../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"(c){function d(e,s){if(s.styleSheet)s.styleSheet.cssText=e;else{for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(document.createTextNode(e))}}c.exports=d},"../node_modules/react/cjs/react-jsx-runtime.production.js"(c,d){/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function n(o,t,r){var u=null;if(r!==void 0&&(u=""+r),t.key!==void 0&&(u=""+t.key),"key"in t){r={};for(var i in t)i!=="key"&&(r[i]=t[i])}else r=t;return t=r.ref,{$$typeof:e,type:o,key:u,ref:t!==void 0?t:null,props:r}}d.Fragment=s,d.jsx=n,d.jsxs=n},"../node_modules/react/jsx-runtime.js"(c,d,e){c.exports=e("../node_modules/react/cjs/react-jsx-runtime.production.js")},"./src/stories/Button.tsx"(c,d,e){e.r(d),e.d(d,{Button:()=>k});var s=e("../node_modules/react/jsx-runtime.js"),n=e("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(n),t=e("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),r=e.n(t),u=e("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),i=e.n(u),a=e("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),m=e.n(a),f=e("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),l=e.n(f),b=e("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),v=e.n(b),y=e("../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./src/stories/button.css"),p={};p.styleTagTransform=v(),p.setAttributes=m(),p.insert=i().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=l();var h=o()(y.default,p);const A=y.default&&y.default.locals?y.default.locals:void 0,k=({primary:g=!1,size:_="medium",backgroundColor:x,label:E,...j})=>{const S=g?"storybook-button--primary":"storybook-button--secondary";return(0,s.jsx)("button",{type:"button",className:["storybook-button",`storybook-button--${_}`,S].join(" "),style:{backgroundColor:x},...j,children:E})}},"./src/stories/Header.stories.ts"(c,d,e){e.r(d),e.d(d,{LoggedIn:()=>u,LoggedOut:()=>i,__namedExportsOrder:()=>a,default:()=>r});var s=e("storybook/test"),n=e.n(s),o=e("./src/stories/Header.tsx");const r={title:"Example/Header",component:o.Header,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{onLogin:(0,s.fn)(),onLogout:(0,s.fn)(),onCreateAccount:(0,s.fn)()}},u={args:{user:{name:"Jane Doe"}}},i={},a=["LoggedIn","LoggedOut"]},"./src/stories/Header.tsx"(c,d,e){e.r(d),e.d(d,{Header:()=>g});var s=e("../node_modules/react/jsx-runtime.js"),n=e("./src/stories/Button.tsx"),o=e("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(o),r=e("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),u=e.n(r),i=e("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),a=e.n(i),m=e("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),f=e.n(m),l=e("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),b=e.n(l),v=e("../node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),y=e.n(v),p=e("../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./src/stories/header.css"),h={};h.styleTagTransform=y(),h.setAttributes=f(),h.insert=a().bind(null,"head"),h.domAPI=u(),h.insertStyleElement=b();var A=t()(p.default,h);const k=p.default&&p.default.locals?p.default.locals:void 0,g=({user:_,onLogin:x,onLogout:E,onCreateAccount:j})=>(0,s.jsx)("header",{children:(0,s.jsxs)("div",{className:"storybook-header",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,s.jsx)("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),(0,s.jsx)("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),(0,s.jsx)("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),(0,s.jsx)("h1",{children:"Acme"})]}),(0,s.jsx)("div",{children:_?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("span",{className:"welcome",children:["Welcome, ",(0,s.jsx)("b",{children:_.name}),"!"]}),(0,s.jsx)(n.Button,{size:"small",onClick:E,label:"Log out"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.Button,{size:"small",onClick:x,label:"Log in"}),(0,s.jsx)(n.Button,{primary:!0,size:"small",onClick:j,label:"Sign up"})]})})]})})}}]);
