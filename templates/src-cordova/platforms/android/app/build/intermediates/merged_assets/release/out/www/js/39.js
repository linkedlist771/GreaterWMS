(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{5225:function(t,e,n){"use strict";var a=n("79f6"),o=n.n(a);e["default"]=o.a},"79f6":function(t,e){},e8ac:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[n("q-table",{staticClass:"my-sticky-header-column-table shadow-24",attrs:{data:t.table_list,"row-key":"id",separator:t.separator,loading:t.loading,columns:t.columns,"hide-bottom":"",pagination:t.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:t.height},flat:"",bordered:""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[n("q-btn-group",{attrs:{push:""}},[n("q-btn",{attrs:{label:t.$t("submit"),icon:"refresh"},on:{click:function(e){return t.downloadData()}}},[n("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n              "+t._s(t.$t("submit"))+"\n            ")])],1),n("q-btn",{attrs:{label:t.$t("submit"),icon:"refresh"},on:{click:function(e){return t.getID()}}},[n("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n              "+t._s(t.$t("submit"))+"\n            ")])],1)],1),n("q-space")]},proxy:!0},{key:"body",fn:function(e){return[n("q-tr",{attrs:{props:e}},[n("q-td",{key:"bin_name",attrs:{props:e}},[t._v("\n            "+t._s(e.row.bin_name)+"\n          ")]),n("q-td",{key:"goods_code",attrs:{props:e}},[t._v("\n            "+t._s(e.row.goods_code)+"\n          ")]),n("q-td",{key:"goods_qty",attrs:{props:e}},[t._v("\n            "+t._s(e.row.goods_qty)+"\n          ")]),n("q-td",{key:"physical_inventory",attrs:{props:e}},[t._v("\n            "+t._s(e.row.physical_inventory)+"\n          ")]),n("q-td",{key:"action",staticStyle:{width:"50px"},attrs:{props:e}},[n("q-btn",{directives:[{name:"show",rawName:"v-show",value:"Inbound"!==t.$q.localStorage.getItem("staff_type")&&"Outbound"!==t.$q.localStorage.getItem("staff_type"),expression:"$q.localStorage.getItem('staff_type') !== 'Inbound' &&\n                            $q.localStorage.getItem('staff_type') !== 'Outbound'\n                           "}],attrs:{round:"",flat:"",push:"",color:"purple",icon:"repeat"},on:{click:function(n){return t.BinMove(e.row)}}},[n("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n                "+t._s(t.$t("stock.view_stocklist.recyclecounttip"))+"\n              ")])],1)],1)],1)]}}])})],1)],1)},o=[],s=n("18d6"),i=n("3004"),l=n("3a34"),r=n.n(l);new r.a;function c(){Uplugin.getDeviceID("",(function(t){console.log(t)}),(function(t){console.log(t)}))}console.log(1);var d={name:"Urovo_cyclyecount",data(){return{openid:"",login_name:"",authin:"0",pathname:"cyclecount/",separator:"cell",loading:!1,height:"",table_list:[],columns:[{name:"bin_name",required:!0,label:this.$t("warehouse.view_binset.bin_name"),align:"left",field:"bin_name"},{name:"goods_code",label:this.$t("stock.view_stocklist.goods_code"),field:"goods_code",align:"center"},{name:"goods_qty",label:this.$t("stock.view_stocklist.on_hand_inventory"),field:"goods_qty",align:"center"},{name:"physical_inventory",label:this.$t("stock.view_stocklist.physical_inventory"),field:"physical_inventory",align:"center"},{name:"action",label:this.$t("action"),align:"right"}],pagination:{page:1,rowsPerPage:"10000"}}},methods:{getID(){c()},getList(){var t=this;s["a"].has("auth")&&Object(i["e"])(t.pathname,{}).then((e=>{var n=[];e.results.forEach((t=>{console.log(t);var e={bin_name:t.bin_name,goods_code:t.goods_code,goods_qty:t.goods_qty,physical_inventory:0,difference:t.goods_qty};n.push(e)})),t.table_list=n,n=[],t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},reFresh(){var t=this;t.getList()},scanEvents(){var t=this;document.addEventListener("deviceready",t.onDeviceReady,!1)}},created(){var t=this;s["a"].has("openid")?t.openid=s["a"].getItem("openid"):(t.openid="",s["a"].set("openid","")),s["a"].has("login_name")?t.login_name=s["a"].getItem("login_name"):(t.login_name="",s["a"].set("login_name","")),s["a"].has("auth")?(t.authin="1",t.getList()):t.authin="0"},mounted(){var t=this;t.$q.platform.is.electron?t.height=String(t.$q.screen.height-115)+"px":t.height=t.$q.screen.height-115+"px",c()},updated(){},destroyed(){}},p=d,u=n("42e1"),g=n("5225"),h=n("eaac"),_=n("e7a9"),b=n("9c40"),f=n("05c0"),m=n("2c91"),y=n("bd08"),v=n("db86"),q=n("eebe"),w=n.n(q),k=Object(u["a"])(p,a,o,!1,null,null,null);"function"===typeof g["default"]&&Object(g["default"])(k);e["default"]=k.exports;w()(k,"components",{QTable:h["a"],QBtnGroup:_["a"],QBtn:b["a"],QTooltip:f["a"],QSpace:m["a"],QTr:y["a"],QTd:v["a"]})}}]);