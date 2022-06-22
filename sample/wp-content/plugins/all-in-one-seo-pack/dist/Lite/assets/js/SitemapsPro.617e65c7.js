var f=Object.defineProperty,_=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var n=(e,a,t)=>a in e?f(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,s=(e,a)=>{for(var t in a||(a={}))v.call(a,t)&&n(e,t,a[t]);if(i)for(var t of i(a))g.call(a,t)&&n(e,t,a[t]);return e},o=(e,a)=>_(e,p(a));import{g as h}from"./params.bea1a08d.js";import"./ToolsSettings.cc636f56.js";import{j as m,f as C}from"./index.01898232.js";import{n as r}from"./vueComponentNormalizer.87056a83.js";import{U as $}from"./Url.781a1d48.js";import{C as V}from"./Index.c7d3532f.js";import{C as U}from"./index.460e1b4b.js";import{C as H}from"./Tooltip.674a9fb4.js";var M=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"aioseo-feature-card"},[t("div",{staticClass:"feature-card-body",class:{static:e.staticCard}},[t("div",{staticClass:"feature-card-header"},[e._t("title")],2),t("div",{staticClass:"feature-card-description"},[e._t("description"),(!e.activated||e.feature.requiresUpgrade)&&!e.staticCard?t("div",{staticClass:"learn-more"},[t("a",{attrs:{href:e.$links.utmUrl("feature-manager-addon-link",e.feature.sku,e.feature.learnMoreUrl),target:"_blank"}},[e._v(e._s(e.$constants.GLOBAL_STRINGS.learnMore))]),t("a",{staticClass:"no-underline",attrs:{href:e.$links.utmUrl("feature-manager-addon-link",e.feature.sku,e.feature.learnMoreUrl),target:"_blank"}},[e._v("\xA0\u2192")])]):e._e(),e.feature.manageUrl&&(e.activated&&!e.feature.requiresUpgrade||e.staticCard)&&e.canManage?t("div",{staticClass:"learn-more"},[t("a",{attrs:{href:e.getHref(e.feature.manageUrl)}},[e._v(e._s(e.strings.manage))]),t("a",{staticClass:"no-underline",attrs:{href:e.getHref(e.feature.manageUrl)}},[e._v(" \u2192 ")])]):e._e(),e.failed?t("core-alert",{staticClass:"install-failed",attrs:{type:"red"}},[e._v(" "+e._s(e.strings.activateError)+" ")]):e._e()],2)]),e.canActivate?t("div",{staticClass:"feature-card-footer",class:{"upgrade-required":e.feature.requiresUpgrade||!e.$aioseo.license.isActive}},[!e.feature.requiresUpgrade&&e.$aioseo.license.isActive&&(!e.feature.installed||e.feature.hasMinimumVersion)?t("div",{staticClass:"feature-card-install-activate"},[e.loading?t("core-loader",{attrs:{dark:""}}):e._e(),!e.loading&&e.feature.installedVersion?t("span",{staticClass:"version"},[e._v(" "+e._s(e.strings.version)+" "+e._s(e.feature.installedVersion)+" ")]):e._e(),t("span",{staticClass:"status"},[e._v(" "+e._s(e.activated?e.strings.activated:e.feature.installed||e.feature.canInstall?e.strings.deactivated:e.strings.notInstalled)+" ")]),e.feature.installed||e.feature.canInstall?t("base-toggle",{attrs:{value:e.activated},on:{input:e.processStatusChange}}):e._e()],1):e._e(),e.feature.requiresUpgrade||!e.$aioseo.license.isActive?t("div",{staticClass:"feature-card-upgrade-cta"},[t("base-button",{attrs:{type:"green",size:"medium",tag:"a",href:e.$isPro?e.$links.getUpsellUrl("feature-manager-upgrade",e.feature.sku,"pricing"):e.$links.getUpsellUrl("feature-manager-upgrade",e.feature.sku,"liteUpgrade"),target:"_blank"}},[e.$isPro?t("span",[e._v(e._s(e.strings.upgradeYourPlan))]):e._e(),e.$isPro?e._e():t("span",[e._v(e._s(e.strings.upgradeToPro))])])],1):e._e(),!e.feature.requiresUpgrade&&e.feature.installed&&!e.feature.hasMinimumVersion?t("div",{staticClass:"feature-card-upgrade-cta"},[e.activated&&!e.loading?t("core-tooltip",{scopedSlots:e._u([{key:"tooltip",fn:function(){return[e._v(" "+e._s(e.strings.updateRequired)+" "),e.$addons.userCanUpdate(e.feature.sku)?e._e():t("strong",[e._v(" "+e._s(e.strings.permissionWarning)+" ")])]},proxy:!0}],null,!1,1310176396)},[t("span",{staticClass:"version"},[e._v(" "+e._s(e.strings.updateToVersion)+" "+e._s(e.feature.minimumVersion)+" ")])]):e._e(),t("base-button",{attrs:{type:"blue",size:"medium",loading:e.featureUpgrading,disabled:!e.$addons.userCanUpdate(e.feature.sku)},on:{click:e.processUpgradeFeature}},[e._v(" "+e._s(e.strings.updateFeature)+" ")])],1):e._e()]):e._e()])},y=[];const k={components:{CoreAlert:V,CoreLoader:U,CoreTooltip:H},mixins:[$],props:{feature:{type:Object,required:!0},canActivate:{type:Boolean,default(){return!0}},canManage:{type:Boolean,default(){return!1}},staticCard:Boolean},data(){return{failed:!1,loading:!1,activated:!1,featureUpgrading:!1,strings:{version:"Version",updateToVersion:"Update to version",activated:"Activated",deactivated:"Deactivated",notInstalled:"Not Installed",upgradeToPro:"Upgrade to Pro",upgradeYourPlan:"Upgrade Your Plan",updateFeature:"Update Addon",permissionWarning:"You currently don't have permission to update this addon. Please ask a site administrator to update.",manage:"Manage",activateError:"An error occurred while activating the addon. Please upload it manually or contact support for more information.",updateRequired:this.$t.sprintf("An update is required for this addon to continue to work with %1$s %2$s.","AIOSEO","Pro")}}},methods:o(s(s({},m(["deactivatePlugins","installPlugins","upgradePlugins"])),C(["updateAddon"])),{processStatusChange(){this.failed=!1,this.loading=!0;const e=this.activated?"deactivatePlugins":"installPlugins";this.activated=!this.activated,this[e]([{plugin:this.feature.basename}]).then(a=>{this.loading=!1,a.body.failed.length&&(this.activated=!this.activated,this.failed=!0)}).catch(()=>{this.loading=!1,this.activated=!this.activated})},processUpgradeFeature(){this.failed=!1,this.featureUpgrading=!0;const e=this.$addons.getAddon(this.feature.sku);this.upgradePlugins([{plugin:this.feature.sku}]).then(a=>{if(this.featureUpgrading=!1,a.body.failed.length){this.activated=!1,this.failed=!0;return}this.activated=!0;const t=a.body.completed[e.sku];e.hasMinimumVersion=!0,e.isActive=!0,e.installedVersion=t.installedVersion,this.updateAddon(e)}).catch(()=>{this.featureUpgrading=!1,this.activated=!1})}}),mounted(){this.feature.isActive&&(this.activated=!0);const e=h();!this.activated&&e["aioseo-activate"]&&e["aioseo-activate"]===this.feature.sku&&(this.loading=!0,this.activated=!0,this.installPlugins([{plugin:this.feature.basename}]).then(()=>this.loading=!1).catch(()=>{this.loading=!1,this.activated=!this.activated}))}},l={};var A=r(k,M,y,!1,P,null,null,null);function P(e){for(let a in l)this[a]=l[a]}var X=function(){return A.exports}(),x=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("svg",{attrs:{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11 15H7C5.35 15 4 13.65 4 12C4 10.35 5.35 9 7 9H11V7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H11V15ZM17 7H13V9H17C18.65 9 20 10.35 20 12C20 13.65 18.65 15 17 15H13V17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7ZM16 11H8V13H16V11Z",fill:"currentColor"}})])},L=[];const b={},u={};var w=r(b,x,L,!1,S,null,null,null);function S(e){for(let a in u)this[a]=u[a]}var ee=function(){return w.exports}(),Z=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("svg",{staticClass:"aioseo-redirect",attrs:{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.59 9.17L5.41 4L4 5.41L9.17 10.58L10.59 9.17ZM14.5 4L16.54 6.04L4 18.59L5.41 20L17.96 7.46L20 9.5V4H14.5ZM13.42 14.82L14.83 13.41L17.96 16.54L20 14.5V20H14.5L16.55 17.95L13.42 14.82Z",fill:"currentColor"}})])},q=[];const F={},d={};var R=r(F,Z,q,!1,B,null,null,null);function B(e){for(let a in d)this[a]=d[a]}var te=function(){return R.exports}(),E=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("svg",{staticClass:"aioseo-sitemaps-pro",attrs:{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M23.45 3.5H4.55C3.96667 3.5 3.5 3.96667 3.5 4.55V23.45C3.5 23.9167 3.96667 24.5 4.55 24.5H23.45C23.9167 24.5 24.5 23.9167 24.5 23.45V4.55C24.5 3.96667 23.9167 3.5 23.45 3.5ZM10.5 8.16667H8.16667V10.5H10.5V8.16667ZM19.8333 8.16667H12.8333V10.5H19.8333V8.16667ZM19.8333 12.8333H12.8333V15.1667H19.8333V12.8333ZM12.8333 17.5H19.8333V19.8333H12.8333V17.5ZM8.16667 12.8333H10.5V15.1667H8.16667V12.8333ZM10.5 17.5H8.16667V19.8333H10.5V17.5ZM5.83333 22.1667H22.1667V5.83333H5.83333V22.1667Z",fill:"currentColor"}})])},I=[];const j={},c={};var T=r(j,E,I,!1,O,null,null,null);function O(e){for(let a in c)this[a]=c[a]}var ae=function(){return T.exports}();export{X as C,ee as S,te as a,ae as b};
