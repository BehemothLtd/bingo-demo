(function(t){function n(n){for(var r,o,s=n[0],l=n[1],c=n[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);f&&f(n);while(d.length)d.shift()();return a.push.apply(a,c||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,o=1;o<e.length;o++){var l=e[o];0!==i[l]&&(r=!1)}r&&(a.splice(n--,1),t=s(s.s=e[0]))}return t}var r={},i={app:0},a=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2630eb05"}[t]+".js"}function s(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.e=function(t){var n=[],e=i[t];if(0!==e)if(e)n.push(e[2]);else{var r=new Promise((function(n,r){e=i[t]=[n,r]}));n.push(e[2]=r);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(t);var c=new Error;a=function(n){l.onerror=l.onload=null,clearTimeout(u);var e=i[t];if(0!==e){if(e){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,e[1](c)}i[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(n)},s.m=t,s.c=r,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)s.d(e,r,function(n){return t[n]}.bind(null,r));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var u=0;u<l.length;u++)n(l[u]);var f=c;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"1c77":function(t,n,e){"use strict";var r=e("f082"),i=e.n(r);i.a},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},a=[],o=(e("5c0b"),e("2877")),s={},l=Object(o["a"])(s,i,a,!1,null,null,null),c=l.exports,u=(e("d3b7"),e("8c4f")),f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[t.profile?e("BingoBoard",{attrs:{profile:t.profile}}):t._e()],1)},d=[],h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"board"},[e("BingoHeader",{ref:"bingoHeader"}),e("div",{staticClass:"board-game"},[e("div",{staticClass:"bingo-list"},t._l(t.cards,(function(n,r){return e("BingoCard",{key:r,ref:"card_"+r,refInFor:!0,attrs:{"mission-id":n,"card-number":r,opened:t.completed.includes(parseInt(r))&&!t.animation.includes(parseInt(r))}})})),1)]),e("BingoFlash",{ref:"bingoFlash",on:{"finish-bingo-animation":function(n){return t.activateAnimation()}}}),e("BingoFooter")],1)},p=[],v=(e("99af"),e("4de4"),e("4160"),e("caad"),e("a434"),e("2532"),e("159b"),e("96cf"),e("1da1")),m=e("bc3a"),g=e.n(m),b=(e("a623"),function(t){return new Promise((function(n){return setTimeout(n,t)}))}),L=function(t,n){return t.every((function(t){return n.includes(t)}))},w=function(t,n){return t.every((function(t){return n.includes(t)}))&&t.length==n.length},A=function(t,n){if(0===t.length)return!1;var e=!0;return t.forEach((function(t){w(t,n)||(e=!1)})),e},C=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],x=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bingo-item",class:{opened:t.opened,active:t.activated,chained:t.chained}},[e("div",{staticClass:"bingo-item-inner"})])},y=[],_={props:{cardNumber:{type:String,required:!0},opened:{type:Boolean,required:!0}},data:function(){return{activated:!1,chained:!1}},methods:{activate:function(){this.activated=!0},lightUp:function(){this.activated=!0,this.chained=!0},lightDown:function(){this.chained=!1}}},O=_,k=Object(o["a"])(O,x,y,!1,null,null,null),M=k.exports,B=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"bingo-bg"}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"bingo active"},[e("div",{staticClass:"bingo-text"}),e("div",{staticClass:"bingo-badge"},[t.icon?e("div",{staticClass:"bingo-icon",class:t.icon}):t._e(),e("div",{staticClass:"bingo-number"})]),e("div",{staticClass:"bingo-footer"},[e("div",{staticClass:"bingo-button",on:{click:function(n){return t.hideBingo()}}})]),t._m(0),e("div",{staticClass:"svg",class:{active:t.svgActive}},[e("svg",{attrs:{id:"starburst",viewBox:"467 392 58 57",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{id:"Group",fill:"none","fill-rule":"evenodd",transform:"translate(467 392)"}},[e("g",{attrs:{id:"grp7",opacity:"0",transform:"translate(7 6)"}},[e("path",{attrs:{id:"oval1",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}}),e("path",{attrs:{id:"oval2",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}})]),e("g",{attrs:{id:"grp6",opacity:"0",transform:"translate(0 28)"}},[e("path",{attrs:{id:"oval1",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}}),e("path",{attrs:{id:"oval2",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}})]),e("g",{attrs:{id:"grp3",opacity:"0",transform:"translate(52 28)"}},[e("path",{attrs:{id:"oval1",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}}),e("path",{attrs:{id:"oval2",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}})]),e("g",{attrs:{id:"grp2",opacity:"0",transform:"translate(44 6)"}},[e("path",{attrs:{id:"oval1",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}}),e("path",{attrs:{id:"oval2",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}})]),e("g",{attrs:{id:"grp5",opacity:"0",transform:"translate(14 50)"}},[e("path",{attrs:{id:"oval1",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}}),e("path",{attrs:{id:"oval2",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}})]),e("g",{attrs:{id:"grp4",opacity:"0",transform:"translate(35 50)"}},[e("path",{attrs:{id:"oval1",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}}),e("path",{attrs:{id:"oval2",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}})]),e("g",{attrs:{id:"grp1",opacity:"0",transform:"translate(24)"}},[e("path",{attrs:{id:"oval1",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}}),e("path",{attrs:{id:"oval2",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}})])])])])])])},j=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"bingo-starburst"},[e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li")])}],R={data:function(){return{active:!1,svgActive:!1,icon:null}},methods:{activate:function(t){this.icon=t,this.active=!0},activateSvg:function(){this.svgActive=!0},hideBingo:function(){this.active=!1,this.svgActive=!1,this.icon=null,this.$emit("finish-bingo-animation")}}},$=R,E=(e("1c77"),Object(o["a"])($,B,j,!1,null,"28f50cd4",null)),I=E.exports,F=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"board-header"},[t.showUp?e("div",{staticClass:"board-notif"},[t.mission?e("div",{staticClass:"board-notif-body"},[e("div",{staticClass:"board-notif-number"},[t._v(t._s(t.missionId))]),e("div",{staticClass:"board-notif-content"},[t._v(t._s(t.mission))])]):t._e()]):t._e(),t.showUp?e("div",{staticClass:"board-notif-badge"}):t._e()])},Z=[],S={1:"Mission 1",2:"Mission 2",3:"Mission 3",4:"Mission 4",5:"Mission 5",6:"Mission 6",7:"Mission 7",8:"Mission 8",9:"Mission 9",11:"Mission 11",15:"Mission 15",17:"Mission 17",12:"Mission 12"},P={data:function(){return{missionId:null,mission:null,showUp:!1}},methods:{show:function(t){var n=this;this.showUp=!0,setTimeout((function(){n.missionId=t,n.mission=S[t]}),350)},hide:function(){this.mission=null,this.missionId=null,this.showUp=!1}}},N=P,T=Object(o["a"])(N,F,Z,!1,null,null,null),H=T.exports,U=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"board-footer"},[e("BingoInfo"),e("router-link",{staticClass:"button1",attrs:{to:"/change-bingo"}}),e("router-link",{staticClass:"button2",attrs:{to:"/guidance"}}),e("router-link",{staticClass:"button3",attrs:{to:"/help"}})],1)},q=[],D=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{width:"100%"}},[e("select",{staticClass:"dropdown"},[e("option",[t._v("ビンゴの情報を確認する")]),e("option",[t._v("1列ビンゴ：Exp")]),e("option",[t._v("2列ビンゴ：Bubble")]),e("option",[t._v("3列ビンゴ：5>4")]),e("option",[t._v("4列 ビンゴ：SkillCharge")]),e("option",[t._v("5列ビンゴ： Bubble")]),e("option",[t._v("6列 ビンゴ：5>4")]),e("option",[t._v("7列ビンゴ：ガチャチケ")]),e("option",[t._v("オールクリア：ツム（ドナル）")])])])}],J={},W=J,X=Object(o["a"])(W,D,G,!1,null,null,null),z=X.exports,K={components:{BingoInfo:z}},Q=K,V=Object(o["a"])(Q,U,q,!1,null,null,null),Y=V.exports,tt={components:{BingoCard:M,BingoFlash:I,BingoHeader:H,BingoFooter:Y},props:{profile:{type:Object,required:!0}},data:function(){return{cards:{},completed:[],animation:[],finishedNumbers:[],originialBingoCombos:[],bingoCombos:[],alreadyRanBingoCombos:[]}},mounted:function(){var t=this;window.onload=function(){setTimeout(Object(v["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.fetchDataFromServer();case 2:return n.next=4,t.setup();case 4:case"end":return n.stop()}}),n)}))),350)}},methods:{setup:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.activateAnimation();case 2:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),fetchDataFromServer:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var n,e,r,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("".concat("https://4da49ffb.ngrok.io","/users/").concat(this.profile.userId));case 2:n=t.sent,e=n.data.data,this.cards=e.card,this.completed=e.comp,this.animation=e.anime.sort((function(t,n){return parseInt(t)-parseInt(n)})),this.finishedNumbers=this.completed.filter((function(t){return!i.animation.includes(t)})),r=this.completed.filter((function(t){return!e.anime.includes(t)})),C.forEach((function(t){L(t,r)&&i.originialBingoCombos.push(t)}));case 10:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),activateAnimation:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==this.animation.length){t.next=2;break}return t.abrupt("return");case 2:return n=this.animation[0],t.next=5,this.activateACard(n);case 5:return this.finishedNumbers.push(n),this.finishedNumbers=this.finishedNumbers.sort((function(t,n){return t-n})),this.animation.splice(0,1),t.next=10,this.checkOnBingo();case 10:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),activateACard:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b(500);case 2:return this.$refs["card_".concat(n)][0].activate(),t.next=5,b(200);case 5:return this.$refs.bingoHeader.show(n),t.next=8,b(1500);case 8:return this.$refs.bingoHeader.hide(),t.next=11,b(500);case 11:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),performBingoOnARow:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(n){var e,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=0;case 1:if(!(e<n.length)){t.next=8;break}return r=n[e],t.next=5,this.lightningACard(this.$refs["card_".concat(r)][0]);case 5:e++,t.next=1;break;case 8:return L(n,[1,2,3])?i="mickey":L(n,[3,6,9])&&(i="donald"),t.next=11,this.bringFlashOut(i);case 11:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),lightningACard:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b(200);case 2:return n.lightUp(),t.next=5,b(100);case 5:n.lightDown();case 6:case"end":return t.stop()}}),t)})));function n(n){return t.apply(this,arguments)}return n}(),bringFlashOut:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b(500);case 2:return this.$refs.bingoFlash.activate(n),t.next=5,b(750);case 5:this.$refs.bingoFlash.activateSvg();case 6:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),checkOnBingo:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=0;case 1:if(!(n<C.length)){t.next=10;break}if(e=C[n],!L(e,this.finishedNumbers)||A(this.originialBingoCombos,e)||A(this.alreadyRanBingoCombos,e)){t.next=7;break}return t.next=6,this.performBingoOnARow(e);case 6:this.alreadyRanBingoCombos.push(e);case 7:n++,t.next=1;break;case 10:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()}},nt=tt,et=Object(o["a"])(nt,h,p,!1,null,null,null),rt=et.exports,it={name:"Home",components:{BingoBoard:rt},data:function(){return{profile:null}},created:function(){var t=this;this.$liff.init({liffId:"1653726820-WgXmELkG"},(function(){t.$liff.isLoggedIn()?t.$liff.getProfile().then((function(n){t.profile=n})):t.$liff.login()}),(function(t){console.log("LIFF Init failed",t)}))}},at=it,ot=Object(o["a"])(at,f,d,!1,null,null,null),st=ot.exports;r["a"].use(u["a"]);var lt=[{path:"/",name:"Home",component:st},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}}],ct=new u["a"]({mode:"history",base:"/",routes:lt}),ut=ct;r["a"].config.productionTip=!1,r["a"].prototype.$liff=window.liff,new r["a"]({router:ut,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,n,e){"use strict";var r=e("9c0c"),i=e.n(r);i.a},"9c0c":function(t,n,e){},f082:function(t,n,e){}});
//# sourceMappingURL=app.245f23b0.js.map