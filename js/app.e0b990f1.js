(function(e){function t(t){for(var n,o,i=t[0],s=t[1],l=t[2],b=0,d=[];b<i.length;b++)o=i[b],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var s=a[i];0!==c[s]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},c={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"13a0":function(e,t,a){"use strict";a("d923")},"1e0e":function(e,t,a){},"25ca":function(e,t,a){"use strict";a("df10")},"333d":function(e,t,a){"use strict";a("4064")},4064:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),c={id:"container"};function r(e,t){var a=Object(n["t"])("router-view");return Object(n["p"])(),Object(n["c"])("div",c,[Object(n["e"])(a)])}a("9266");const o={};o.render=r;var i=o,s=a("9483");Object(s["a"])("https://raw.githubusercontent.com/AjjlalAhmed/weatherapp/main/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var l=a("6c02"),u=(a("841c"),a("ac1f"),{class:"home"}),b={class:"showcase-section"},d={class:"search-section"},f={class:"modal-section"},O={class:"more-detail-section"},j={class:"footer-section"};function p(e,t,a,c,r,o){var i=Object(n["t"])("ShowCase"),s=Object(n["t"])("Search"),l=Object(n["t"])("ErrorModal"),p=Object(n["t"])("MoreDetail"),h=Object(n["t"])("Footer"),v=Object(n["t"])("LoadingAnimation");return Object(n["p"])(),Object(n["c"])("div",u,[Object(n["e"])("section",b,[c.data?(Object(n["p"])(),Object(n["c"])(i,{key:0,data:c.data,searchData:c.searchData},null,8,["data","searchData"])):Object(n["d"])("",!0)]),Object(n["e"])("section",d,[c.data?(Object(n["p"])(),Object(n["c"])(s,{key:0,onSearch:c.search},null,8,["onSearch"])):Object(n["d"])("",!0)]),Object(n["e"])("section",f,[Object(n["e"])(l,{ifError:c.ifError,ifOffline:c.ifOffline,onExit:c.exitModal},null,8,["ifError","ifOffline","onExit"])]),Object(n["e"])("section",O,[c.data?(Object(n["p"])(),Object(n["c"])(p,{key:0,data:c.data},null,8,["data"])):Object(n["d"])("",!0)]),Object(n["e"])("section",j,[c.data?(Object(n["p"])(),Object(n["c"])(h,{key:0})):Object(n["d"])("",!0),c.data?Object(n["d"])("",!0):(Object(n["p"])(),Object(n["c"])(v,{key:1}))])])}var h=a("1da1"),v=(a("96cf"),a("a4d3"),a("e01a"),a("b0c0"),{class:"showcase"}),m=Object(n["e"])("div",{class:"prev-btn"},[Object(n["e"])("button",{class:"btn"},[Object(n["e"])("i",{class:"fa fa-chevron-right","aria-hidden":"true"})])],-1),w={class:"location"},g={class:"description"},y={class:"city-name"},D={class:"country-name"},k={class:"weather"},_={class:"temperature"},x={class:"current-time"},E=Object(n["e"])("div",{class:"next-btn"},[Object(n["e"])("button",{class:"btn"},[Object(n["e"])("i",{class:"fa fa-chevron-left","aria-hidden":"true"})])],-1);function S(e,t,a,c,r,o){return Object(n["p"])(),Object(n["c"])("div",v,[m,c.weather?(Object(n["p"])(),Object(n["c"])("div",{key:0,class:{"current-weather":!0,"animate__animated animate__fadeInUp":c.weather}},[Object(n["e"])("section",w,[Object(n["e"])("div",g,[Object(n["e"])("img",{src:"https://openweathermap.org/img/w/".concat(c.weather.weather[0].icon,".png"),alt:"icon"},null,8,["src"]),Object(n["e"])("p",null,Object(n["v"])(c.weather.weather[0].description),1)]),Object(n["e"])("h1",y,Object(n["v"])(c.weather.name),1),Object(n["e"])("h1",D,"country "+Object(n["v"])(c.weather.sys.country),1)]),Object(n["e"])("section",k,[Object(n["e"])("h1",_,Object(n["v"])(c.weather.main.temp)+"°",1),Object(n["e"])("div",x,[Object(n["e"])("p",null,Object(n["v"])(c.currentTime),1)])])],2)):Object(n["d"])("",!0),E])}a("159b"),a("07ac"),a("5319");var L=a("5502"),M={props:["data","searchData"],setup:function(e){var t=e.data.list,a=Object(n["s"])(t[0]),c=Object(L["b"])(),r=Object(n["s"])(Date());c.commit("update",a),Object(n["n"])((function(){var e=document.querySelectorAll(".btn"),c=Object(n["s"])(0);e.forEach((function(e){e.addEventListener("click",(function(e){var n=document.querySelector(".current-weather");n.classList.contains("animate__fadeInUp")?(n.classList.remove("animate__fadeInUp"),n.classList.add("animate__fadeInDown")):(n.classList.remove("animate__fadeInDown"),n.classList.add("animate__fadeInUp")),e.target.parentElement.classList.contains("prev-btn")?(c.value++,c.value>=Object.values(t).length&&(c.value=0),console.log(t[c.value]),a.value=t[c.value]):(c.value--,c.value<0&&(c.value=Object.values(t).length-1),console.log(t[c.value]),a.value=t[c.value])}))}))})),Object(n["y"])((function(){return e.searchData}),(function(){console.log(e.searchData),a.value=e.searchData}));var o=function e(){r.value=(new Date).toUTCString().replace("GMT",""),setTimeout(e,500)};return o(),{weather:a,currentTime:r,getCurrentTime:o}}};a("25ca");M.render=S;var I=M,A={class:"search"},T=Object(n["e"])("i",{class:"fa fa-search","aria-hidden":"true"},null,-1);function C(e,t,a,c,r,o){return Object(n["p"])(),Object(n["c"])("div",A,[Object(n["z"])(Object(n["e"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.searchInput=e}),placeholder:"Search by city name"},null,512),[[n["x"],r.searchInput]]),Object(n["e"])("button",{class:"search-btn",onClick:t[2]||(t[2]=function(){return o.fetchData&&o.fetchData.apply(o,arguments)})},[T])])}a("d3b7"),a("99af");var P={data:function(){return{searchInput:""}},methods:{fetchData:function(){var e=this;fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(this.searchInput,"&appid=").concat("e865603f85104275636b8e54e62e28ad","&units=metric")).then((function(e){return e.json()})).then((function(t){console.log(t),e.searchInput="",e.$emit("search",t)}))}}};a("982e");P.render=C;var U=P,R={key:0,class:"error-modal animate__animated animate__fadeInUp"},q={class:"modal-wraper"},F={class:"error"},W={key:0,class:"error-message"},N={key:1,class:"error-message"};function B(e,t,a,c,r,o){return"null"!=a.ifError||"null"!=a.ifOffline?(Object(n["p"])(),Object(n["c"])("div",R,[Object(n["e"])("div",q,[Object(n["e"])("section",F,["null"!=a.ifError?(Object(n["p"])(),Object(n["c"])("p",W,"A typo error please search again.")):Object(n["d"])("",!0),"null"!=a.ifOffline?(Object(n["p"])(),Object(n["c"])("p",N,"The network connection has been lost.")):Object(n["d"])("",!0),Object(n["e"])("button",{class:"exit-modal",onClick:t[1]||(t[1]=function(){return o.exitModal&&o.exitModal.apply(o,arguments)})},"exits")])])])):Object(n["d"])("",!0)}var H={props:["ifError","ifOffline"],data:function(){return{}},methods:{exitModal:function(){this.$emit("exit","null")}},watch:{ifError:{immediate:!0,handler:function(e,t){}}}};a("b050");H.render=B;var J=H,V={class:"more-detail"},$={class:"details"},z=Object(n["e"])("h1",null,"more details",-1),G={key:0},K={key:1},Q={key:2},X={key:3},Y={key:4},Z={key:5},ee={key:6},te={key:7},ae={key:8},ne={key:9},ce={key:10},re={key:11},oe={key:12};function ie(e,t,a,c,r,o){return Object(n["p"])(),Object(n["c"])("div",V,[Object(n["e"])("section",$,[z,Object(n["e"])("ul",null,[c.weatherData.name?(Object(n["p"])(),Object(n["c"])("li",G,"city : "+Object(n["v"])(c.weatherData.name),1)):Object(n["d"])("",!0),c.weatherData.sys.country?(Object(n["p"])(),Object(n["c"])("li",K," conutry : "+Object(n["v"])(c.weatherData.sys.country),1)):Object(n["d"])("",!0),c.weatherData.main.temp?(Object(n["p"])(),Object(n["c"])("li",Q," temperature : "+Object(n["v"])(c.weatherData.main.temp)+"° ",1)):Object(n["d"])("",!0),c.weatherData.main.feels_like?(Object(n["p"])(),Object(n["c"])("li",X," feels like : "+Object(n["v"])(c.weatherData.main.feels_like)+"° ",1)):Object(n["d"])("",!0),c.weatherData.main.temp_max?(Object(n["p"])(),Object(n["c"])("li",Y," max temp : "+Object(n["v"])(c.weatherData.main.temp_max)+"° ",1)):Object(n["d"])("",!0),c.weatherData.main.temp_min?(Object(n["p"])(),Object(n["c"])("li",Z," min temp : "+Object(n["v"])(c.weatherData.main.temp_min)+"° ",1)):Object(n["d"])("",!0),c.weatherData.main.humidity?(Object(n["p"])(),Object(n["c"])("li",ee," humidity : "+Object(n["v"])(c.weatherData.main.humidity),1)):Object(n["d"])("",!0),c.weatherData.main.pressure?(Object(n["p"])(),Object(n["c"])("li",te," pressure : "+Object(n["v"])(c.weatherData.main.pressure),1)):Object(n["d"])("",!0),c.weatherData.weather[0].description?(Object(n["p"])(),Object(n["c"])("li",ae," weather : "+Object(n["v"])(c.weatherData.weather[0].description),1)):Object(n["d"])("",!0),c.weatherData.wind.speed?(Object(n["p"])(),Object(n["c"])("li",ne," wind speed : "+Object(n["v"])(c.weatherData.wind.speed),1)):Object(n["d"])("",!0),c.weatherData.wind.deg?(Object(n["p"])(),Object(n["c"])("li",ce," wind deg : "+Object(n["v"])(c.weatherData.wind.deg),1)):Object(n["d"])("",!0),c.weatherData.main.sea_level?(Object(n["p"])(),Object(n["c"])("li",re," sea level : "+Object(n["v"])(c.weatherData.main.sea_level),1)):Object(n["d"])("",!0),c.weatherData.main.grnd_level?(Object(n["p"])(),Object(n["c"])("li",oe," ground level : "+Object(n["v"])(c.weatherData.main.grnd_level),1)):Object(n["d"])("",!0)])])])}var se={setup:function(){var e=Object(L["b"])(),t=Object(n["s"])(e.getters.newWeather);return Object(n["y"])((function(){return e.getters.newWeather}),(function(){t.value=e.getters.newWeather})),{weatherData:t}}};a("7798");se.render=ie;var le=se,ue={class:"footer"},be=Object(n["e"])("p",null,"ajjlal ahmed © 2021",-1);function de(e,t,a,c,r,o){return Object(n["p"])(),Object(n["c"])("div",ue,[be])}var fe={};a("8f84");fe.render=de;var Oe=fe,je={class:"loading"},pe=Object(n["e"])("div",{class:"loader"},null,-1),he=Object(n["e"])("h1",null,"fecthing data",-1);function ve(e,t,a,c,r,o){return Object(n["p"])(),Object(n["c"])("div",je,[pe,he])}var me={};a("13a0");me.render=ve;var we=me,ge=a("576d"),ye=a.n(ge),De=a("af0d"),ke=new De["a"]("db"),_e={name:"Home",components:{ShowCase:I,Search:U,ErrorModal:J,MoreDetail:le,Footer:Oe,LoadingAnimation:we},setup:function(){var e=Object(n["s"])(null),t=Object(n["s"])("null"),a=Object(n["s"])("null"),c=Object(n["s"])("null");function r(e){e.message?a.value=404:(console.log(e),t.value=e)}Object(n["l"])(Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:ke.collection("weatherData").get().then((function(t){console.log(t),t.length>0&&(e.value=t[0].data)})),ye()(e);case 2:case"end":return t.stop()}}),t)})))),Object(n["y"])(e,(function(){var t=e;ke.collection("weatherData").delete(),ke.collection("weatherData").add({data:t._rawValue})}));var o=function(e){a.value=e,c.value=e},i=function(){setInterval((function(){!0===navigator.onLine&&ye()(e)}),6e4)};return window.addEventListener("online",(function(t){ye()(e)})),window.addEventListener("offline",(function(e){c.value="Offline"})),i(),{data:e,search:r,searchData:t,ifError:a,exitModal:o,ifOffline:c}}};a("333d");_e.render=p;var xe=_e,Ee=[{path:"/",name:"Home",component:xe}];console.log("/");var Se=Object(l["a"])({history:Object(l["b"])("/"),routes:Ee,BASE_URL:"weatherapp"});console.log("".concat("/","weather-app"));var Le=Se,Me=Object(L["a"])({state:{weatherData:null},mutations:{update:function(e,t){e.weatherData=t}},actions:{},getters:{newWeather:function(e){return e.weatherData}},modules:{}});Object(n["b"])(i).use(Me).use(Le).mount("#app")},"576d":function(e,t,a){var n=a("c973").default;a("96cf"),a("d3b7"),a("99af");var c=function(e){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(){var t=n(regeneratorRuntime.mark((function t(a){var n,c,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=a.coords.latitude,c=a.coords.longitude,t.next=4,fetch("https://api.openweathermap.org/data/2.5/find?lat=".concat(n,"&cnt=50&lon=").concat(c,"&appid=").concat("e865603f85104275636b8e54e62e28ad","&units=metric"));case 4:return r=t.sent,t.next=7,r.json();case 7:if(o=t.sent,"accurate"!=o.message){t.next=13;break}console.log(o),e.value=o,t.next=14;break;case 13:return t.abrupt("return");case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()):alert("Location access is denied")};e.exports=c},7798:function(e,t,a){"use strict";a("1e0e")},"8f84":function(e,t,a){"use strict";a("d95f")},9266:function(e,t,a){"use strict";a("b9ce")},"982e":function(e,t,a){"use strict";a("b709")},b050:function(e,t,a){"use strict";a("f8bf")},b709:function(e,t,a){},b9ce:function(e,t,a){},d923:function(e,t,a){},d95f:function(e,t,a){},df10:function(e,t,a){},f8bf:function(e,t,a){}});
//# sourceMappingURL=app.e0b990f1.js.map