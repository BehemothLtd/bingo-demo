(function(t){function e(e){for(var r,o,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},a=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2630eb05"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=i[t]=[e,r]}));e.push(n[2]=r);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(t);var c=new Error;a=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}i[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1c77":function(t,e,n){"use strict";var r=n("f082"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],o=(n("5c0b"),n("2877")),s={},l=Object(o["a"])(s,i,a,!1,null,null,null),c=l.exports,u=(n("d3b7"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t.profile?n("BingoBoard",{attrs:{profile:t.profile}}):t._e()],1)},d=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"board"},[n("BingoHeader",{ref:"bingoHeader"}),n("div",{staticClass:"board-game"},[n("div",{staticClass:"bingo-list"},t._l(t.cards,(function(e,r){return n("BingoCard",{key:r,ref:"card_"+r,refInFor:!0,attrs:{"mission-id":e,"card-number":r,opened:t.completed.includes(parseInt(r))&&!t.animation.includes(parseInt(r))}})})),1)]),n("BingoFlash",{ref:"bingoFlash",on:{"finish-bingo-animation":function(e){return t.activateAnimation()}}}),n("BingoFooter")],1)},p=[],v=(n("4de4"),n("4160"),n("caad"),n("a434"),n("2532"),n("159b"),n("96cf"),n("1da1")),m=n("bc3a"),g=n.n(m),b=(n("a623"),function(t){return new Promise((function(e){return setTimeout(e,t)}))}),L=function(t,e){return t.every((function(t){return e.includes(t)}))},w=function(t,e){return t.every((function(t){return e.includes(t)}))&&t.length==e.length},A=function(t,e){if(0===t.length)return!1;var n=!0;return t.forEach((function(t){w(t,e)||(n=!1)})),n},C=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bingo-item",class:{opened:t.opened,active:t.activated,chained:t.chained}},[n("div",{staticClass:"bingo-item-inner"})])},y=[],_={props:{cardNumber:{type:String,required:!0},opened:{type:Boolean,required:!0}},data:function(){return{activated:!1,chained:!1}},methods:{activate:function(){this.activated=!0},lightUp:function(){this.activated=!0,this.chained=!0},lightDown:function(){this.chained=!1}}},O=_,k=Object(o["a"])(O,x,y,!1,null,null,null),M=k.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"bingo-bg"}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"bingo active"},[n("div",{staticClass:"bingo-text"}),n("div",{staticClass:"bingo-badge"},[t.icon?n("div",{staticClass:"bingo-icon",class:t.icon}):t._e(),n("div",{staticClass:"bingo-number"})]),n("div",{staticClass:"bingo-footer"},[n("div",{staticClass:"bingo-button",on:{click:function(e){return t.hideBingo()}}})]),t._m(0),n("div",{staticClass:"svg",class:{active:t.svgActive}},[n("svg",{attrs:{id:"starburst",viewBox:"467 392 58 57",xmlns:"http://www.w3.org/2000/svg"}},[n("g",{attrs:{id:"Group",fill:"none","fill-rule":"evenodd",transform:"translate(467 392)"}},[n("g",{attrs:{id:"grp7",opacity:"0",transform:"translate(7 6)"}},[n("path",{attrs:{id:"oval1",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}}),n("path",{attrs:{id:"oval2",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}})]),n("g",{attrs:{id:"grp6",opacity:"0",transform:"translate(0 28)"}},[n("path",{attrs:{id:"oval1",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}}),n("path",{attrs:{id:"oval2",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}})]),n("g",{attrs:{id:"grp3",opacity:"0",transform:"translate(52 28)"}},[n("path",{attrs:{id:"oval1",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}}),n("path",{attrs:{id:"oval2",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}})]),n("g",{attrs:{id:"grp2",opacity:"0",transform:"translate(44 6)"}},[n("path",{attrs:{id:"oval1",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}}),n("path",{attrs:{id:"oval2",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}})]),n("g",{attrs:{id:"grp5",opacity:"0",transform:"translate(14 50)"}},[n("path",{attrs:{id:"oval1",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}}),n("path",{attrs:{id:"oval2",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}})]),n("g",{attrs:{id:"grp4",opacity:"0",transform:"translate(35 50)"}},[n("path",{attrs:{id:"oval1",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}}),n("path",{attrs:{id:"oval2",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}})]),n("g",{attrs:{id:"grp1",opacity:"0",transform:"translate(24)"}},[n("path",{attrs:{id:"oval1",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}}),n("path",{attrs:{id:"oval2",d:"M5.208,1.332,6.279,3.5a.511.511,0,0,0,.385.28l2.4.348A.511.511,0,0,1,9.343,5L7.61,6.692a.511.511,0,0,0-.147.453l.409,2.386a.512.512,0,0,1-.742.539L4.987,8.944a.512.512,0,0,0-.476,0L2.369,10.07a.512.512,0,0,1-.742-.539l.409-2.386a.511.511,0,0,0-.147-.453L.156,5A.511.511,0,0,1,.439,4.13l2.4-.348A.511.511,0,0,0,3.22,3.5L4.291,1.332A.511.511,0,0,1,5.208,1.332Z",fill:"currentColor"}})])])])])])])},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"bingo-starburst"},[n("li"),n("li"),n("li"),n("li"),n("li"),n("li"),n("li"),n("li"),n("li"),n("li"),n("li"),n("li"),n("li"),n("li"),n("li"),n("li"),n("li"),n("li"),n("li"),n("li")])}],R={data:function(){return{active:!1,svgActive:!1,icon:null}},methods:{activate:function(t){this.icon=t,this.active=!0},activateSvg:function(){this.svgActive=!0},hideBingo:function(){this.active=!1,this.svgActive=!1,this.icon=null,this.$emit("finish-bingo-animation")}}},$=R,E=(n("1c77"),Object(o["a"])($,B,j,!1,null,"28f50cd4",null)),I=E.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"board-header"},[t.showUp?n("div",{staticClass:"board-notif"},[t.mission?n("div",{staticClass:"board-notif-body"},[n("div",{staticClass:"board-notif-number"},[t._v(t._s(t.missionId))]),n("div",{staticClass:"board-notif-content"},[t._v(t._s(t.mission))])]):t._e()]):t._e(),t.showUp?n("div",{staticClass:"board-notif-badge"}):t._e()])},Z=[],S={1:"Mission 1",2:"Mission 2",3:"Mission 3",4:"Mission 4",5:"Mission 5",6:"Mission 6",7:"Mission 7",8:"Mission 8",9:"Mission 9",11:"Mission 11",15:"Mission 15",17:"Mission 17",12:"Mission 12"},P={data:function(){return{missionId:null,mission:null,showUp:!1}},methods:{show:function(t){var e=this;this.showUp=!0,setTimeout((function(){e.missionId=t,e.mission=S[t]}),350)},hide:function(){this.mission=null,this.missionId=null,this.showUp=!1}}},N=P,T=Object(o["a"])(N,F,Z,!1,null,null,null),H=T.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"board-footer"},[n("BingoInfo"),n("router-link",{staticClass:"button1",attrs:{to:"/change-bingo"}}),n("router-link",{staticClass:"button2",attrs:{to:"/guidance"}}),n("router-link",{staticClass:"button3",attrs:{to:"/help"}})],1)},q=[],D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%"}},[n("select",{staticClass:"dropdown"},[n("option",[t._v("ビンゴの情報を確認する")]),n("option",[t._v("1列ビンゴ：Exp")]),n("option",[t._v("2列ビンゴ：Bubble")]),n("option",[t._v("3列ビンゴ：5>4")]),n("option",[t._v("4列 ビンゴ：SkillCharge")]),n("option",[t._v("5列ビンゴ： Bubble")]),n("option",[t._v("6列 ビンゴ：5>4")]),n("option",[t._v("7列ビンゴ：ガチャチケ")]),n("option",[t._v("オールクリア：ツム（ドナル）")])])])}],J={},W=J,X=Object(o["a"])(W,D,G,!1,null,null,null),z=X.exports,K={components:{BingoInfo:z}},Q=K,V=Object(o["a"])(Q,U,q,!1,null,null,null),Y=V.exports,tt={components:{BingoCard:M,BingoFlash:I,BingoHeader:H,BingoFooter:Y},props:{profile:{type:Object,required:!0}},data:function(){return{cards:{},completed:[],animation:[],finishedNumbers:[],originialBingoCombos:[],bingoCombos:[],alreadyRanBingoCombos:[]}},mounted:function(){var t=this;window.onload=function(){setTimeout(Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchDataFromServer();case 2:return e.next=4,t.setup();case 4:case"end":return e.stop()}}),e)}))),350)}},methods:{setup:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.activateAnimation();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fetchDataFromServer:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var e,n,r,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://4da49ffb.ngrok.io/users/".concat(this.profile.userId));case 2:e=t.sent,n=e.data.data,this.cards=n.card,this.completed=n.comp,this.animation=n.anime.sort((function(t,e){return parseInt(t)-parseInt(e)})),this.finishedNumbers=this.completed.filter((function(t){return!i.animation.includes(t)})),r=this.completed.filter((function(t){return!n.anime.includes(t)})),C.forEach((function(t){L(t,r)&&i.originialBingoCombos.push(t)}));case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),activateAnimation:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==this.animation.length){t.next=2;break}return t.abrupt("return");case 2:return e=this.animation[0],t.next=5,this.activateACard(e);case 5:return this.finishedNumbers.push(e),this.finishedNumbers=this.finishedNumbers.sort((function(t,e){return t-e})),this.animation.splice(0,1),t.next=10,this.checkOnBingo();case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),activateACard:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b(500);case 2:return this.$refs["card_".concat(e)][0].activate(),t.next=5,b(200);case 5:return this.$refs.bingoHeader.show(e),t.next=8,b(1500);case 8:return this.$refs.bingoHeader.hide(),t.next=11,b(500);case 11:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),performBingoOnARow:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(e){var n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=0;case 1:if(!(n<e.length)){t.next=8;break}return r=e[n],t.next=5,this.lightningACard(this.$refs["card_".concat(r)][0]);case 5:n++,t.next=1;break;case 8:return L(e,[1,2,3])?i="mickey":L(e,[3,6,9])&&(i="donald"),t.next=11,this.bringFlashOut(i);case 11:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),lightningACard:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b(200);case 2:return e.lightUp(),t.next=5,b(100);case 5:e.lightDown();case 6:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),bringFlashOut:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b(500);case 2:return this.$refs.bingoFlash.activate(e),t.next=5,b(750);case 5:this.$refs.bingoFlash.activateSvg();case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),checkOnBingo:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=0;case 1:if(!(e<C.length)){t.next=10;break}if(n=C[e],!L(n,this.finishedNumbers)||A(this.originialBingoCombos,n)||A(this.alreadyRanBingoCombos,n)){t.next=7;break}return t.next=6,this.performBingoOnARow(n);case 6:this.alreadyRanBingoCombos.push(n);case 7:e++,t.next=1;break;case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},et=tt,nt=Object(o["a"])(et,h,p,!1,null,null,null),rt=nt.exports,it={name:"Home",components:{BingoBoard:rt},data:function(){return{profile:null}},created:function(){var t=this;this.$liff.init({liffId:"1653726820-WgXmELkG"},(function(){t.$liff.isLoggedIn()?t.$liff.getProfile().then((function(e){console.log(e),t.profile=e})):t.$liff.login()}),(function(t){console.log("LIFF Init failed",t)}))}},at=it,ot=Object(o["a"])(at,f,d,!1,null,null,null),st=ot.exports;r["a"].use(u["a"]);var lt=[{path:"/",name:"Home",component:st},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],ct=new u["a"]({mode:"history",base:"/",routes:lt}),ut=ct;r["a"].config.productionTip=!1,r["a"].prototype.$liff=window.liff,new r["a"]({router:ut,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),i=n.n(r);i.a},"9c0c":function(t,e,n){},f082:function(t,e,n){}});
//# sourceMappingURL=app.b1011fae.js.map