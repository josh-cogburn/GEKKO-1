webpackJsonp([1],{0:function(t,e){},LcYB:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("aK3Z"),s=n.n(i),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("h1",[this._v("GEKKO Optimization Results")]),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},o,!1,function(t){n("LcYB")},null,null).exports,l=n("pH0I"),c=n.n(l),u=this;window.onresize=function(){u.plotlyResize};var v={name:"Plot",props:{externalId:{type:Number,default:1},numPlots:{type:Number,default:1}},data:function(){return{id:Math.random().toString(36).substring(7)}},watch:{numPlots:function(){console.log("numPlots changed, resizing plot"),u.plotlyResize}},beforeDestroy:function(){window.removeEventListener("resize",this.plotlyResize)},mounted:function(){var t=this;window.addEventListener("resize",this.plotlyResize),this.$http.headers.common["Access-Control-Allow-Origin"]="*",this.$http.get("get_data").then(function(t){return t.json()}).then(function(e){var n=[];for(var a in e)e.hasOwnProperty(a)&&"time"!==a&&n.push({x:e.time,y:e[a],mode:"lines+markers",type:"scatter",name:a});c.a.newPlot(t.id,n)})},methods:{plotlyResize:function(){console.log("handling resize for:",this.id),c.a.Plots.resize(this.id)},removePlot:function(){this.$emit("plot-removed",this.externalId)}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"plot-div"},[this.numPlots>1?e("button",{staticClass:"btn btn-sm btn-danger plot-close",attrs:{type:"button"},on:{click:this.removePlot}},[this._v("X")]):this._e(),this._v(" "),e("div",{attrs:{id:this.id}})])},staticRenderFns:[]};var h=n("VU/8")(v,d,!1,function(t){n("YSgB")},null,null).exports,p=n("fZjL"),m=n.n(p),f={name:"Tabs",data:function(){return{activeTab:"Model",modelData:{},varsData:{},open:!1}},created:function(){var t=this,e=["INFO","APM"],n=void 0;this.$http.get("get_options").then(function(t){return t.json()}).then(function(a){return n=a,console.log("obj:",a),t.modelData=a.APM,m()(a).filter(function(t){return!e.includes(t)})}).then(function(e){e.forEach(function(e){return console.log(n),t.varsData[e]=n[e],null})}).then(function(){console.log("varsData:",t.varsData)}),this.$http.get("get_model").then(function(t){return t.json()}).then(function(e){t.modelData=e,console.log("model:",t.modelData)})},methods:{toggle:function(){this.open=!this.open}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"nav nav-tabs"},[n("li",{staticClass:"nav-item tab"},[n("a",{staticClass:"nav-link ",class:{active:"Model"==t.activeTab},on:{click:function(e){t.activeTab="Model"}}},[t._v("Model")])]),t._v(" "),n("li",{staticClass:"nav-item tab"},[n("a",{staticClass:"nav-link",class:{active:"Variables"==t.activeTab},on:{click:function(e){t.activeTab="Variables"}}},[t._v("Variables")])])]),t._v(" "),n("div",{staticClass:"tab-div"},["Model"===t.activeTab?[n("div",{staticClass:"table-responsive tab-table"},[n("table",{staticClass:"table table-striped table-sm"},[t._m(0),t._v(" "),n("tbody",t._l(t.modelData,function(e,a){return n("tr",{key:a.id},[n("td",[t._v(t._s(a))]),t._v(" "),n("td",[t._v(t._s(e))])])}))])])]:t._e(),t._v(" "),"Variables"===t.activeTab?[t.varsData?n("div",{staticClass:"tab-table"},[n("div",{staticStyle:{"overflow-y":"auto","max-height":"inherit"}},t._l(t.varsData,function(e,a){return n("ul",{key:e.id,staticClass:"tab-table-item"},[n("a",[t._v("\n              "+t._s(a)+"\n            ")]),t._v(" "),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-striped table-sm"},[t._m(1,!0),t._v(" "),n("tbody",t._l(e,function(e,a){return n("tr",{key:a.id},[n("td",[t._v(t._s(a))]),t._v(" "),n("td",[t._v(t._s(e))])])}))])])])}))]):t._e()]:t._e()],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Property")]),this._v(" "),e("th",[this._v("Value")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Property")]),this._v(" "),e("th",[this._v("Value")])])])}]};var b=n("VU/8")(f,_,!1,function(t){n("kr/m")},null,null).exports,y=n("8+8L"),g=n("/ocq"),C={name:"Main",components:{plot:h,tabs:b},data:function(){return{plotArray:[1],idCounter:2}},methods:{addPlot:function(){this.plotArray.push(this.idCounter),++this.idCounter},removePlot:function(t){console.log("Removing plot",t),this.plotArray=this.plotArray.filter(function(e){return e!==t})}}},P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainDiv"},[n("div",{staticClass:"row",staticStyle:{"margin-right":"0px"}},[n("div",{staticClass:"col-sm-3"},[n("tabs")],1),t._v(" "),n("div",{staticClass:"col-sm-9"},[n("div",{staticClass:"plots-div"},t._l(t.plotArray,function(e){return n("div",{key:e},[n("plot",{attrs:{"external-id":e,"num-plots":t.plotArray.length},on:{"plot-removed":t.removePlot}})],1)})),t._v(" "),n("button",{staticClass:"btn btn-primary",staticStyle:{"margin-top":"10px"},attrs:{type:"button"},on:{click:t.addPlot}},[t._v("Add Plot")])])])])},staticRenderFns:[]};var w=n("VU/8")(C,P,!1,function(t){n("T6Jl")},null,null).exports;a.a.use(g.a);var k=new g.a({routes:[{path:"/",name:"Main",component:w}]}),A=n("rCTf");a.a.use(s.a,{Observable:A.Observable}),a.a.use(y.a),a.a.config.productionTip=!1,a.a.http.options.root="http://"+location.hostname+":"+location.port,new a.a({el:"#app",router:k,components:{App:r,Plot:h,Tabs:b},template:"<App/>"})},T6Jl:function(t,e){},YSgB:function(t,e){},"kr/m":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5393e26bb13971d24fc1.js.map