(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-153646b6"],{"00ca":function(t,n,e){"use strict";var r=e("eb64"),o=e.n(r);o.a},"578a":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main"},[e("Header",{attrs:{title:"CooMoney"},on:{back:function(n){return t.$router.push("/")}}}),e("div",{staticClass:"block"},[e("h1",{staticClass:"title"},[t._v("Log In")]),e("div",{staticClass:"buttons"},[e("FB",{on:{getFbProp:t.getProp}}),e("Google",{on:{getGoogleProp:t.getProp}})],1),e("div",[e("p",{staticClass:"p1"},[t._v("or login with email.")]),e("div",{staticClass:"input-block"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{placeholder:"Your Email",type:"email"},domProps:{value:t.username},on:{input:function(n){n.target.composing||(t.username=n.target.value)}}}),e("br"),e("br"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{placeholder:"Your Password",type:"password"},domProps:{value:t.password},on:{input:function(n){n.target.composing||(t.password=n.target.value)}}}),t.showForgot?e("p",{staticClass:"p2",on:{click:t.sendInfor}},[t._v("Forgot your password?")]):t._e(),t.showError?e("p",{class:t.textAni()},[t._v("incorrect account or password!")]):t._e()])]),e("button",{on:{click:t.Login}},[t._v("Log In")]),e("p",{staticClass:"dont",attrs:{id:"dont"}},[t._v(" Don't have an account? "),e("span",{on:{click:t.SignUp}},[t._v("Sign up")])])])],1)},o=[],i=(e("b0c0"),e("bc3a")),s=e.n(i),c=e("cff1"),a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"buttons"},[r("label",{staticClass:"fb"},[r("img",{staticClass:"google",attrs:{src:e("034d"),alt:""}}),r("facebook-login",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{appId:"632957427307793",send:t.sendProps()},on:{login:t.onLogin,logout:t.onLogout,"sdk-loaded":t.sdkLoaded}})],1)])},u=[],f=(e("b329"),e("6d09")),l=e.n(f),p={name:"App",components:{facebookLogin:l.a},data:function(){return{isConnected:!1,name:"",email:"",personalID:"",picture:"",FB:void 0}},methods:{sendProps:function(){this.$emit("getFbProp",{id:this.personalID,email:this.email,name:this.name,pic:this.picture})},getUserData:function(){var t=this;this.FB.api("/me","GET",{fields:"id,name,email,picture"},(function(n){t.personalID=n.id,t.email=n.email,t.name=n.name,t.picture=n.picture.data.url,t.$store.commit("setHeadshot",t.picture)}))},sdkLoaded:function(t){this.isConnected=t.isConnected,this.FB=t.FB,this.isConnected&&this.getUserData()},onLogin:function(){this.isConnected=!0,this.getUserData()},onLogout:function(){this.isConnected=!1}}},d=p,h=(e("00ca"),e("2877")),v=Object(h["a"])(d,a,u,!1,null,null,null),m=v.exports,g=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"buttons"},[r("label",[r("img",{staticClass:"google",attrs:{src:e("6fbc"),alt:""}}),r("GoogleLogin",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{params:t.params,onSuccess:t.onSuccess}})],1)])},y=[],b=e("e571"),w=e.n(b),_={name:"App",components:{GoogleLogin:w.a},data:function(){return{name:"",email:"",personalID:"",picture:"",params:{client_id:"1029131813912-i7g1k358ad467mk9on0r1ht9jj55akoq.apps.googleusercontent.com"},renderParams:{width:250,height:50,longtitle:!0}}},methods:{onSuccess:function(t){var n=t.getBasicProfile();this.name=n.getName(),this.personalID=n.getId(),this.email=n.getEmail(),this.picture=n.getImageUrl(),this.$emit("getGoogleProp",{id:this.personalID,email:this.email,name:this.name,pic:this.picture})}}},x=_,k=(e("c895"),Object(h["a"])(x,g,y,!1,null,null,null)),S=k.exports,C={name:"Login",components:{Header:c["a"],FB:m,Google:S},data:function(){return{username:"",password:"",errorMsg:"incorrect account or password!",name:"",email:"",personalID:"",picture:"",showForgot:!1,showError:!1,showAni:!1,otherSource:!1,time:null}},methods:{getProp:function(t){this.name=t.name,this.email=t.email,this.personalID=t.id,this.picture=t.pic,this.nickname=t.name,this.username=t.email,this.password=t.id,this.otherSource=!0},Login:function(){var t=this;s.a.post("https://coomoney.herokuapp.com/api/v1/user/login",{username:this.username,password:this.password}).then((function(n){localStorage.setItem("token",n.data.data.token),t.$router.push("/Project")})).catch((function(){t.error()}))},error:function(){this.showError=!0,this.showForgot=!0,this.showAni=!0,this.timer()},timer:function(){var t=this;this.time=setTimeout((function(){t.showAni=!1}),500)},textAni:function(){return this.showAni?"p3Shake":"p3"},SignUp:function(){this.$router.push("/SignUp")},sendInfor:function(){alert("你以為我會寄密碼給你嗎?並沒有，我只是想讓你點進來而已")}}},j=C,A=(e("5883"),Object(h["a"])(j,r,o,!1,null,"1369ca5e",null));n["default"]=A.exports},5883:function(t,n,e){"use strict";var r=e("eea2"),o=e.n(r);o.a},"6a79":function(t,n,e){},"6d09":function(t,n,e){!function(n,e){t.exports=e()}(0,(function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/",n(n.s=37)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(30)("wks"),o=e(34),i=e(0).Symbol,s="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=s&&i[t]||(s?i:o)("Symbol."+t))}).store=r},function(t,n,e){var r=e(6);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var e=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(13),o=e(29);t.exports=e(5)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){t.exports=!e(23)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports={}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(8);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(0),o=e(3),i=e(10),s=e(4),c=function(t,n,e){var a,u,f,l=t&c.F,p=t&c.G,d=t&c.S,h=t&c.P,v=t&c.B,m=t&c.W,g=p?o:o[n]||(o[n]={}),y=g.prototype,b=p?r:d?r[n]:(r[n]||{}).prototype;for(a in p&&(e=n),e)(u=!l&&b&&void 0!==b[a])&&a in g||(f=u?b[a]:e[a],g[a]=p&&"function"!=typeof b[a]?e[a]:v&&u?i(f,r):m&&b[a]==f?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((g.virtual||(g.virtual={}))[a]=f,t&c.R&&y&&!y[a]&&s(y,a,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(2),o=e(45),i=e(65),s=Object.defineProperty;n.f=e(5)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return s(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(6),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){"use strict";function r(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=o(n),this.reject=o(e)}var o=e(8);t.exports.f=function(t){return new r(t)}},function(t,n,e){var r=e(13).f,o=e(12),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(30)("keys"),o=e(34);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(47),o=e(14);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(9),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),s=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=s(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(0).document;t.exports=r&&r.documentElement},function(t,n,e){"use strict";var r=e(26),o=e(11),i=e(60),s=e(4),c=e(12),a=e(7),u=e(50),f=e(17),l=e(56),p=e(1)("iterator"),d=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,n,e,v,m,g,y){u(e,n,v);var b,w,_,x=function(t){if(!d&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},k=n+" Iterator",S="values"==m,C=!1,j=t.prototype,A=j[p]||j["@@iterator"]||m&&j[m],P=A||x(m),E=m?S?x("entries"):P:void 0,I="Array"==n&&j.entries||A;if(I&&(_=l(I.call(new t)))!==Object.prototype&&_.next&&(f(_,k,!0),r||c(_,p)||s(_,p,h)),S&&A&&"values"!==A.name&&(C=!0,P=function(){return A.call(this)}),r&&!y||!d&&!C&&j[p]||s(j,p,P),a[n]=P,a[k]=h,m)if(b={values:S?P:x("values"),keys:g?P:x("keys"),entries:E},y)for(w in b)w in j||i(j,w,b[w]);else o(o.P+o.F*(d||C),n,b);return b}},function(t,n){t.exports=!0},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var r=e(2),o=e(6),i=e(16);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n,e){var r=e(2),o=e(8),i=e(1)("species");t.exports=function(t,n){var e,s=r(t).constructor;return void 0===s||void 0==(e=r(s)[i])?n:o(e)}},function(t,n,e){var r,o,i,s=e(10),c=e(46),a=e(24),u=e(15),f=e(0),l=f.process,p=f.setImmediate,d=f.clearImmediate,h=f.MessageChannel,v=f.Dispatch,m=0,g={},y=function(){var t=+this;if(g.hasOwnProperty(t)){var n=g[t];delete g[t],n()}},b=function(t){y.call(t.data)};p&&d||(p=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return g[++m]=function(){c("function"==typeof t?t:Function(t),n)},r(m),m},d=function(t){delete g[t]},"process"==e(9)(l)?r=function(t){l.nextTick(s(y,t,1))}:v&&v.now?r=function(t){v.now(s(y,t,1))}:h?(o=new h,i=o.port2,o.port1.onmessage=b,r=s(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",b,!1)):r="onreadystatechange"in u("script")?function(t){a.appendChild(u("script")).onreadystatechange=function(){a.removeChild(this),y.call(t)}}:function(t){setTimeout(s(y,t,1),0)}),t.exports={set:p,clear:d}},function(t,n,e){var r=e(19),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){function r(t){e(79)}var o=e(77)(e(38),e(78),r,"data-v-0af1f3c3",null);t.exports=o.exports},function(t,n,e){"use strict";function r(t,n){return new a.a((function(e){window.fbAsyncInit=function(){FB.init({appId:t,xfbml:!1,version:n,cookie:!0}),FB.AppEvents.logPageView(),e("SDK Loaded!")},function(t,n,e){var r=t.getElementsByTagName(n)[0];if(!t.getElementById(e)){var o=t.createElement(n);o.id=e,o.src="//connect.facebook.net/en_US/sdk.js",r.parentNode.insertBefore(o,r)}}(document,"script","facebook-jssdk")}))}function o(){return new a.a((function(t){window.FB.getLoginStatus((function(n){t(n)}))}))}function i(t){return new a.a((function(n){window.FB.login((function(t){return n(t)}),t)}))}function s(){return new a.a((function(t){window.FB.logout((function(n){return t(n)}))}))}n.c=r,n.d=o,n.b=i,n.a=s;var c=e(39),a=e.n(c)},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"facebookLoginPlugin",(function(){return i}));var r=e(35),o=e.n(r),i={install:function(t,n){t.component(o.a.name,o.a)}};n.default=o.a},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(36),o=e(76),i=e.n(o);n.default={name:"facebook-login",data:function(){return{isWorking:!1,isConnected:!1,icon:i.a}},computed:{getButtonText:function(){switch(this.isConnected){case!0:return this.logoutLabel;case!1:return this.loginLabel;default:return"this is default"}}},methods:{buttonClicked:function(){this.$emit("click"),this.isConnected?this.logout():this.login()},logout:function(){var t=this;this.isWorking=!0,e.i(r.a)().then((function(n){t.isWorking=!1,t.isConnected=!1,t.$emit("logout",n)}))},login:function(){var t=this;this.isWorking=!0,e.i(r.b)(this.loginOptions).then((function(n){"connected"===n.status?t.isConnected=!0:t.isConnected=!1,t.isWorking=!1,t.$emit("login",{response:n,FB:window.FB})}))}},props:{appId:{type:String,required:!0},version:{type:String,default:"v2.10"},logoutLabel:{type:String,default:"Log out from Facebook"},loginLabel:{type:String,default:"Log In To Facebook"},loginOptions:{type:Object,default:function(){return{scope:"email"}}}},mounted:function(){var t=this;this.isWorking=!0,e.i(r.c)(this.appId,this.version).then((function(t){})).then((function(){return e.i(r.d)()})).then((function(n){"connected"===n.status&&(t.isConnected=!0),t.isWorking=!1,t.$emit("get-initial-status",n),t.$emit("sdk-loaded",{isConnected:t.isConnected,FB:window.FB})}))}}},function(t,n,e){t.exports={default:e(40),__esModule:!0}},function(t,n,e){e(68),e(70),e(73),e(69),e(71),e(72),t.exports=e(3).Promise},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(20),o=e(33),i=e(63);t.exports=function(t){return function(n,e,s){var c,a=r(n),u=o(a.length),f=i(s,u);if(t&&e!=e){for(;u>f;)if((c=a[f++])!=c)return!0}else for(;u>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(10),o=e(49),i=e(48),s=e(2),c=e(33),a=e(66),u={},f={};n=t.exports=function(t,n,e,l,p){var d,h,v,m,g=p?function(){return t}:a(t),y=r(e,l,n?2:1),b=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(i(g)){for(d=c(t.length);d>b;b++)if((m=n?y(s(h=t[b])[0],h[1]):y(t[b]))===u||m===f)return m}else for(v=g.call(t);!(h=v.next()).done;)if((m=o(v,y,h.value,n))===u||m===f)return m};n.BREAK=u,n.RETURN=f},function(t,n,e){t.exports=!e(5)&&!e(23)((function(){return 7!=Object.defineProperty(e(15)("div"),"a",{get:function(){return 7}}).a}))},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(9);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(7),o=e(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(2);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){"use strict";var r=e(54),o=e(29),i=e(17),s={};e(4)(s,e(1)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(s,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],s=i[r]();s.next=function(){return{done:e=!0}},i[r]=function(){return s},t(i)}catch(t){}return e}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(0),o=e(32).set,i=r.MutationObserver||r.WebKitMutationObserver,s=r.process,c=r.Promise,a="process"==e(9)(s);t.exports=function(){var t,n,e,u=function(){var r,o;for(a&&(r=s.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(a)e=function(){s.nextTick(u)};else if(i){var f=!0,l=document.createTextNode("");new i(u).observe(l,{characterData:!0}),e=function(){l.data=f=!f}}else if(c&&c.resolve){var p=c.resolve();e=function(){p.then(u)}}else e=function(){o.call(r,u)};return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n,e){var r=e(2),o=e(55),i=e(22),s=e(18)("IE_PROTO"),c=function(){},a=function(){var t,n=e(15)("iframe"),r=i.length;for(n.style.display="none",e(24).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[s]=t):e=a(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(13),o=e(2),i=e(58);t.exports=e(5)?Object.defineProperties:function(t,n){o(t);for(var e,s=i(n),c=s.length,a=0;c>a;)r.f(t,e=s[a++],n[e]);return t}},function(t,n,e){var r=e(12),o=e(64),i=e(18)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,n,e){var r=e(12),o=e(20),i=e(43)(!1),s=e(18)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),a=0,u=[];for(e in c)e!=s&&r(c,e)&&u.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(u,e)||u.push(e));return u}},function(t,n,e){var r=e(57),o=e(22);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(4);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},function(t,n,e){t.exports=e(4)},function(t,n,e){"use strict";var r=e(0),o=e(3),i=e(13),s=e(5),c=e(1)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];s&&n&&!n[c]&&i.f(n,c,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(19),o=e(14);t.exports=function(t){return function(n,e){var i,s,c=String(o(n)),a=r(e),u=c.length;return a<0||a>=u?t?"":void 0:(i=c.charCodeAt(a),i<55296||i>56319||a+1===u||(s=c.charCodeAt(a+1))<56320||s>57343?t?c.charAt(a):i:t?c.slice(a,a+2):s-56320+(i-55296<<10)+65536)}}},function(t,n,e){var r=e(19),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(14);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(6);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(21),o=e(1)("iterator"),i=e(7);t.exports=e(3).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){"use strict";var r=e(41),o=e(52),i=e(7),s=e(20);t.exports=e(25)(Array,"Array",(function(t,n){this._t=s(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){},function(t,n,e){"use strict";var r,o,i,s,c=e(26),a=e(0),u=e(10),f=e(21),l=e(11),p=e(6),d=e(8),h=e(42),v=e(44),m=e(31),g=e(32).set,y=e(53)(),b=e(16),w=e(27),_=e(28),x=a.TypeError,k=a.process,S=a.Promise,C="process"==f(k),j=function(){},A=o=b.f,P=!!function(){try{var t=S.resolve(1),n=(t.constructor={})[e(1)("species")]=function(t){t(j,j)};return(C||"function"==typeof PromiseRejectionEvent)&&t.then(j)instanceof n}catch(t){}}(),E=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},I=function(t,n){if(!t._n){t._n=!0;var e=t._c;y((function(){for(var r=t._v,o=1==t._s,i=0;e.length>i;)!function(n){var e,i,s=o?n.ok:n.fail,c=n.resolve,a=n.reject,u=n.domain;try{s?(o||(2==t._h&&F(t),t._h=1),!0===s?e=r:(u&&u.enter(),e=s(r),u&&u.exit()),e===n.promise?a(x("Promise-chain cycle")):(i=E(e))?i.call(e,c,a):c(e)):a(r)}catch(t){a(t)}}(e[i++]);t._c=[],t._n=!1,n&&!t._h&&O(t)}))}},O=function(t){g.call(a,(function(){var n,e,r,o=t._v,i=L(t);if(i&&(n=w((function(){C?k.emit("unhandledRejection",o,t):(e=a.onunhandledrejection)?e({promise:t,reason:o}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",o)})),t._h=C||L(t)?2:1),t._a=void 0,i&&n.e)throw n.v}))},L=function(t){if(1==t._h)return!1;for(var n,e=t._a||t._c,r=0;e.length>r;)if(n=e[r++],n.fail||!L(n.promise))return!1;return!0},F=function(t){g.call(a,(function(){var n;C?k.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})}))},T=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),I(n,!0))},M=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw x("Promise can't be resolved itself");(n=E(t))?y((function(){var r={_w:e,_d:!1};try{n.call(t,u(M,r,1),u(T,r,1))}catch(t){T.call(r,t)}})):(e._v=t,e._s=1,I(e,!1))}catch(t){T.call({_w:e,_d:!1},t)}}};P||(S=function(t){h(this,S,"Promise","_h"),d(t),r.call(this);try{t(u(M,this,1),u(T,this,1))}catch(t){T.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=e(59)(S.prototype,{then:function(t,n){var e=A(m(this,S));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=C?k.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&I(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=u(M,t,1),this.reject=u(T,t,1)},b.f=A=function(t){return t===S||t===s?new i(t):o(t)}),l(l.G+l.W+l.F*!P,{Promise:S}),e(17)(S,"Promise"),e(61)("Promise"),s=e(3).Promise,l(l.S+l.F*!P,"Promise",{reject:function(t){var n=A(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!P),"Promise",{resolve:function(t){return _(c&&this===s?S:this,t)}}),l(l.S+l.F*!(P&&e(51)((function(t){S.all(t).catch(j)}))),"Promise",{all:function(t){var n=this,e=A(n),r=e.resolve,o=e.reject,i=w((function(){var e=[],i=0,s=1;v(t,!1,(function(t){var c=i++,a=!1;e.push(void 0),s++,n.resolve(t).then((function(t){a||(a=!0,e[c]=t,--s||r(e))}),o)})),--s||r(e)}));return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=A(n),r=e.reject,o=w((function(){v(t,!1,(function(t){n.resolve(t).then(e.resolve,r)}))}));return o.e&&r(o.v),e.promise}})},function(t,n,e){"use strict";var r=e(62)(!0);e(25)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})}))},function(t,n,e){"use strict";var r=e(11),o=e(3),i=e(0),s=e(31),c=e(28);r(r.P+r.R,"Promise",{finally:function(t){var n=s(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return c(n,t()).then((function(){return e}))}:t,e?function(e){return c(n,t()).then((function(){throw e}))}:t)}})},function(t,n,e){"use strict";var r=e(11),o=e(16),i=e(27);r(r.S,"Promise",{try:function(t){var n=o.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},function(t,n,e){e(67);for(var r=e(0),o=e(4),i=e(7),s=e(1)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<c.length;a++){var u=c[a],f=r[u],l=f&&f.prototype;l&&!l[s]&&o(l,s,u),i[u]=i.Array}},function(t,n,e){n=t.exports=e(75)(!1),n.push([t.i,"\nbutton[data-v-0af1f3c3] {\n  position: relative;\n  padding: 0 15px 0px 46px;\n  border: none;\n  line-height: 34px;\n  font-size: 16px;\n  color: #FFF;\n  min-width: 225px;\n  background-image: linear-gradient(#4C69BA, #3B55A0);\n}\n.spinner[data-v-0af1f3c3] {\n  box-sizing: border-box;\n  width: 30px;\n  height: 90%;\n  border-radius: 50%;\n  border: 5px solid #f3f3f3;\n  border-top: 5px solid #3498db;\n  -webkit-animation: spin-data-v-0af1f3c3 2s linear infinite;\n          animation: spin-data-v-0af1f3c3 2s linear infinite;\n  position: absolute;\n  left: 5px;\n}\nimg[data-v-0af1f3c3] {\n  position: absolute;\n  top: 3px;\n  left: 10px;\n  width: 30px;\n}\n@-webkit-keyframes spin {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes spin-data-v-0af1f3c3 {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n",""])},function(t,n){function e(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var i=r(o);return[e].concat(o.sources.map((function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"}))).concat([i]).join("\n")}return[e].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var r=e(n,t);return n[2]?"@media "+n[2]+"{"+r+"}":r})).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),n.push(s))}},n}},function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZmYyZjIyZi04ZDdlLTQzNjEtYjM2Zi02NGFiYmI2Nzg3ZDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTREMzBERkE2NjFBMTFFNDk5OEZFQ0REMkU5OTk0QTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTREMzBERjk2NjFBMTFFNDk5OEZFQ0REMkU5OTk0QTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNGZlZTRmMS0wMGNjLTRlZTEtYTY5MS00MjJmOGUxY2VmYjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZmZmMmYyMmYtOGQ3ZS00MzYxLWIzNmYtNjRhYmJiNjc4N2Q1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+F7pueQAAAKpJREFUeNpi+P//PwM2jA0AxZWBeA4QP/2PCl5j6CfWYKCYJRB//o8boOhnxOU6RkZGZENZgNQNIFZmwA0YkTksDMQBOyyGvgfic0D8BZsGYg3WQeP/AGItoK9eIPkKRQETkQYLofHvIxuKDRBrMDr4RUgBuQYTBDhTBSjYSDDnGhBr08LFd2kVFPdoZfBdbFmVYJYG8hvQsu8FQubQLFWMGjxq8HAwGCDAAM8dwEI+7fo0AAAAAElFTkSuQmCC"},function(t,n){t.exports=function(t,n,e,r,o){var i,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(i=t,s=t.default);var a,u="function"==typeof s?s.options:s;if(n&&(u.render=n.render,u.staticRenderFns=n.staticRenderFns),r&&(u._scopeId=r),o?(a=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=a):e&&(a=e),a){var f=u.functional,l=f?u.render:u.beforeCreate;f?u.render=function(t,n){return a.call(n),l(t,n)}:u.beforeCreate=l?[].concat(l,a):[a]}return{esModule:i,exports:s,options:u}}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("button",{on:{click:t.buttonClicked}},[t.isWorking?e("div",{staticClass:"spinner"}):t._e(),t._v(" "),t.isWorking?t._e():e("img",{attrs:{src:t.icon}}),t._v(" "+t._s(t.getButtonText)+"\n  ")])])},staticRenderFns:[]}},function(t,n,e){var r=e(74);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),e(80)("05ca2c48",r,!0)},function(t,n,e){function r(t){for(var n=0;n<t.length;n++){var e=t[n],r=f[e.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](e.parts[o]);for(;o<e.parts.length;o++)r.parts.push(i(e.parts[o]));r.parts.length>e.parts.length&&(r.parts.length=e.parts.length)}else{var s=[];for(o=0;o<e.parts.length;o++)s.push(i(e.parts[o]));f[e.id]={id:e.id,refs:1,parts:s}}}}function o(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function i(t){var n,e,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(m){var i=d++;r=p||(p=o()),n=s.bind(null,r,i,!1),e=s.bind(null,r,i,!0)}else r=o(),n=c.bind(null,r),e=function(){r.parentNode.removeChild(r)};return n(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;n(t=r)}else e()}}function s(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(n,o);else{var i=document.createTextNode(o),s=t.childNodes;s[n]&&t.removeChild(s[n]),s.length?t.insertBefore(i,s[n]):t.appendChild(i)}}function c(t,n){var e=n.css,r=n.media,o=n.sourceMap;if(r&&t.setAttribute("media",r),o&&(e+="\n/*# sourceURL="+o.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=e(81),f={},l=a&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,n,e){h=e;var o=u(t,n);return r(o),function(n){for(var e=[],i=0;i<o.length;i++){var s=o[i],c=f[s.id];c.refs--,e.push(c)}n?(o=u(t,n),r(o)):o=[];for(i=0;i<e.length;i++){c=e[i];if(0===c.refs){for(var a=0;a<c.parts.length;a++)c.parts[a]();delete f[c.id]}}}};var g=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}()},function(t,n){t.exports=function(t,n){for(var e=[],r={},o=0;o<n.length;o++){var i=n[o],s=i[0],c=i[1],a=i[2],u=i[3],f={id:t+":"+o,css:c,media:a,sourceMap:u};r[s]?r[s].parts.push(f):e.push(r[s]={id:s,parts:[f]})}return e}}])}))},b0c0:function(t,n,e){var r=e("83ab"),o=e("9bf2").f,i=Function.prototype,s=i.toString,c=/^\s*function ([^ (]*)/,a="name";r&&!(a in i)&&o(i,a,{configurable:!0,get:function(){try{return s.call(this).match(c)[1]}catch(t){return""}}})},c895:function(t,n,e){"use strict";var r=e("6a79"),o=e.n(r);o.a},e571:function(t,n,e){!function(t,e){e(n)}(0,(function(t){"use strict";var n,e,r=function(t){return n?Promise.resolve(n):(e||(e=function(t){return new Promise((function(e,r){window.onGapiLoad=function(){window.gapi.load("auth2",(function(){try{n=window.gapi.auth2.init(Object.assign({},t))}catch(t){r({err:"client_id missing or is incorrect, or if you added extra params maybe they are written incorrectly, did you add it to the component or plugin?"})}e(n)}))}}))}(t)),e)},o=function(t,n){return t?t[n]():Promise.reject({err:"Script not loaded correctly, did you added the plugin or the client_id to the component?"})},i={load:function(t){return Promise.all([r(t),new Promise((function(t,n){if(!document.getElementById("auth2_script_id")){var e=document.createElement("script");e.setAttribute("src","https://apis.google.com/js/platform.js?onload=onGapiLoad"),e.setAttribute("async",!0),e.setAttribute("defer","defer"),e.setAttribute("id","auth2_script_id"),document.head.appendChild(e)}t()}))]).then((function(t){return t[0]}))},signIn:function(){return o(n,"signIn")},signOut:function(){return o(n,"signOut")},isSignedIn:function(){return o(n.isSignedIn,"get")},currentUser:function(){return o(n.currentUser,"get")},grantOfflineAccess:function(){return o(n,"grantOfflineAccess")}},s=0,c=function(t,n,e,r,o,i,s,c,a,u){"boolean"!=typeof s&&(a=c,c=s,s=!1);var f,l="function"==typeof e?e.options:e;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),r&&(l._scopeId=r),i?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,a(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=f):n&&(f=s?function(){n.call(this,u(this.$root.$options.shadowRoot))}:function(t){n.call(this,c(t))}),f)if(l.functional){var p=l.render;l.render=function(t,n){return f.call(n),p(t,n)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,f):[f]}return e}({render:function(){var t=this.$createElement,n=this._self._c||t;return this.renderParams&&!this.logoutButton?n("div",{attrs:{id:this.id},on:{click:this.handleClick}}):n("button",{attrs:{id:this.id},on:{click:this.handleClick}},[this._t("default")],2)},staticRenderFns:[]},void 0,{name:"GoogleLogin",props:{params:{type:Object,required:!0},onCurrentUser:{type:Function,default:function(){}},onSuccess:{type:Function,default:function(){}},onFailure:{type:Function,default:function(){}},logoutButton:{type:Boolean,default:!1},renderParams:{type:Object,required:!1}},beforeCreate:function(){this.id="google-signin-btn-".concat(s++)},methods:{handleClick:function(){var t=this,n=this.logoutButton?"signOut":"signIn";i[n]().then((function(n){return t.onSuccess(n)})).catch((function(n){return t.onFailure(n)}))}},mounted:function(){var t=this;i.load(this.params).then((function(){t.renderParams&&!1===t.logoutButton&&window.gapi.signin2.render(t.id,t.renderParams),i.isSignedIn()&&t.onCurrentUser(i.currentUser())})).catch((function(t){console.log(t)}))}},void 0,!1,void 0,void 0,void 0),a={install:function(t,n){t.GoogleAuth=i.load(n)}};t.GoogleLogin=c,t.LoaderPlugin=a,t.default=c,Object.defineProperty(t,"__esModule",{value:!0})}))},eb64:function(t,n,e){},eea2:function(t,n,e){}}]);
//# sourceMappingURL=chunk-153646b6.d18de882.js.map