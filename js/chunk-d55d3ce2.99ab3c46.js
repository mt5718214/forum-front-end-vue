(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d55d3ce2"],{"22ab":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("NavTabs"),e.isLoading?r("Spinner"):[r("h1",{staticClass:"mt-5"},[e._v("美食達人")]),r("hr"),r("div",{staticClass:"row text-center"},e._l(e.users,(function(t){return r("div",{key:t.id,staticClass:"col-3"},[r("router-link",{attrs:{to:{name:"users-top"}}},[r("img",{attrs:{src:e._f("emptyImage")(t.image),width:"140px",height:"140px"}})]),r("h2",[e._v(e._s(t.name))]),r("span",{staticClass:"badge badge-secondary"},[e._v("追蹤人數："+e._s(t.FollowerCount))]),r("p",{staticClass:"mt-3"},[t.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.deleteFollowings(t.id)}}},[e._v(" 取消追蹤 ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.addFollowings(t.id)}}},[e._v(" 追蹤 ")])])],1)})),0)]],2)},a=[],s=r("5530"),o=r("1da1"),i=(r("d9e2"),r("d81d"),r("96cf"),r("8bb1")),c=r("2375"),u=r("2708"),l=r("2612"),d=r("2fa3"),p={components:{NavTabs:i["a"],Spinner:c["a"]},data:function(){return{users:[],isLoading:!0}},mixins:[u["a"]],methods:{fetchUser:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,l["a"].getTopUsers();case 4:r=t.sent,n=r.data,e.users=n.users,e.isLoading=!1,t.next=15;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log("error",t.t0),e.isLoading=!1,d["a"].fire({icon:"error",title:"無法取得美食達人，請稍後再試"});case 15:case"end":return t.stop()}}),t,null,[[0,10]])})))()},addFollowings:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].addFollowing({userId:e});case 3:if(n=r.sent,a=n.data,"success"===a.status){r.next=7;break}throw new Error(a.message);case 7:t.users=t.users.map((function(t){return t.id===e?Object(s["a"])(Object(s["a"])({},t),{},{isFollowed:!0}):t})),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log("error",r.t0),d["a"].fire({icon:"error",title:"無法加入追蹤，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteFollowings:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].deleteFollowing({userId:e});case 3:if(n=r.sent,a=n.data,"success"===a.status){r.next=7;break}throw new Error(a.message);case 7:t.users=t.users.map((function(t){return t.id===e?Object(s["a"])(Object(s["a"])({},t),{},{isFollowed:!1}):t})),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log("error",r.t0),d["a"].fire({icon:"error",title:"無法取消追蹤，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()}},created:function(){this.fetchUser()}},f=p,g=r("2877"),b=Object(g["a"])(f,n,a,!1,null,null,null);t["default"]=b.exports},d81d:function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").map,s=r("1dde"),o=s("map");n({target:"Array",proto:!0,forced:!o},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-d55d3ce2.99ab3c46.js.map