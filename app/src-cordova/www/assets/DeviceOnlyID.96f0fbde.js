import{_ as c,aD as l,L as p,c as a,V as f,a3 as h,R as g,S as u,U as b,X as m,f as v,aE as y,aF as $}from"./index.26e9a75d.js";import{Q as w}from"./QPage.5bf7d332.js";const D=l({data(){return{}},computed:{screenwidth:{get(){return this.$store.state.screenchange.screenwidth}},screenheight:{get(){return this.$store.state.screenchange.screenheight}}},setup(){const e=p(),t=a({get:()=>e.state.fabchange.fab1}),o=a({get:()=>e.state.fabchange.fab2}),r=a({get:()=>e.state.fabchange.fab3}),i=a({get:()=>e.state.fabchange.fab4}),d=a({get:()=>e.state.appversion.only_id,set:n=>{e.commit("appversion/OnlyIDChanged",n)}}),s=a({get:()=>e.state.appversion.device_auth,set:n=>{e.commit("appversion/DeviceAuthChanged",n)}});return{fab1:t,fab2:o,fab3:r,fab4:i,only_id:d,device_auth:s}}});function V(e,t,o,r,i,d){return f((g(),u(w,{class:"flex flex-top"},{default:b(()=>[m("div",{style:$({width:e.screenwidth+"px",height:e.screenheight-160+"px",marginTop:"10px"})},[v(y,{dense:"",outlined:"",square:"",readonly:"",modelValue:e.only_id,"onUpdate:modelValue":t[0]||(t[0]=s=>e.only_id=s),label:e.$t("index.only_id"),style:{margin:"0 15px 0 15px"}},null,8,["modelValue","label"])],4)]),_:1},512)),[[h,!e.fab1&&!e.fab2&&!e.fab3&&!e.fab4]])}var S=c(D,[["render",V]]);export{S as default};