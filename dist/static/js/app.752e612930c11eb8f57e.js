webpackJsonp([1],{"+dIy":function(t,a){},EDl9:function(t,a){},"F0++":function(t,a){},JFtl:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),i=e("mvHQ"),r=e.n(i),o={render:function(){var t=this.$createElement,a=this._self._c||t;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark sticky-top"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[a("img",{staticClass:"d-inline-block align-top",attrs:{src:"https://image.flaticon.com/icons/svg/202/202127.svg",width:"30",height:"30",alt:"beer"}}),this._v("\n  \tBeer Bank\n  ")]),this._v(" "),this._m(0),this._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[a("span",[this._v("Home")])])],1),this._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/favorites"}},[a("span",[this._v("Favorites")])])],1)])])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}]};var n={name:"App",components:{Navbar:e("VU/8")({name:"Navbar",data:function(){return{}}},o,!1,function(t){e("F0++")},null,null).exports},data:function(){return{beer:"",favorites:[]}},methods:{addToFavorites:function(t){t.favorite=!0,this.favorites.push(t),toastr.success("Beer added to favorites!"),localStorage.setItem("favorites",r()(this.favorites))},removeFromFavorites:function(t){var a=this.favorites.indexOf(t);t.favorite=!1,a>-1&&this.favorites.splice(a,1),localStorage.setItem("favorites",r()(this.favorites)),toastr.error("Beer removed from favorites!")},toggleModal:function(t){this.beer=t,$("#exampleModal").modal("show")}},created:function(){localStorage.getItem("favorites")&&(this.favorites=JSON.parse(localStorage.getItem("favorites")))}};$(document).ready(function(){$(window).scroll(function(){$(this).scrollTop()>100?$("#scroll").fadeIn():$("#scroll").fadeOut()}),$("#scroll").click(function(){return $("html, body").animate({scrollTop:0},600),!1})});var l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Navbar"),t._v(" "),e("router-view",{attrs:{beer:t.beer,fav:t.favorites,addFav:t.addToFavorites,removeFav:t.removeFromFavorites,toggle:t.toggleModal}}),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticStyle:{display:"none"},attrs:{href:"#",id:"scroll"}},[a("span")])}]};var c=e("VU/8")(n,l,!1,function(t){e("+dIy")},null,null).exports,d=e("/ocq"),v={name:"Modal",props:["beer","addFav","removeFav"],data:function(){return{active:!1,modal:!1,similars:[]}},mounted:function(){var t=this;$("#exampleModal").on("show.bs.modal",function(t){$(".beer-col").hide()}),$("#exampleModal").on("shown.bs.modal",function(a){var s=e("mtWM"),i=String(t.beer.ingredients.hops[0].name.split(" ").join("_"));s.get("https://api.punkapi.com/v2/beers?hops="+i+"&per_page=3").then(function(a){t.similars=a.data}).then(function(t){$(".beer-col").fadeIn()})})}},u={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.beer.name))]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 col-sm-12"},[e("div",{staticClass:"modal-img",style:{background:"url("+t.beer.image_url+")"}})]),t._v(" "),e("div",{staticClass:"col-md-8 col-sm-12"},[e("h2",[t._v(" "+t._s(t.beer.name)+" ")]),t._v(" "),e("p",[t._v(" "+t._s(t.beer.tagline)+" ")]),t._v(" "),e("hr",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("p",[e("strong",[t._v("IBU")]),t._v(": "+t._s(t.beer.ibu))])]),t._v(" "),e("div",{staticClass:"col"},[e("p",[e("strong",[t._v("ABV")]),t._v(": "+t._s(t.beer.abv)+"%")])]),t._v(" "),e("div",{staticClass:"col"},[e("p",[e("strong",[t._v("EBC")]),t._v(": "+t._s(t.beer.ebc))])])]),t._v(" "),e("p",[t._v(t._s(t.beer.desc))]),t._v(" "),e("h5",[t._v("Best Served with:")]),t._v(" "),e("ul",t._l(t.beer.foods,function(a){return e("li",[t._v(t._s(a))])}),0),t._v(" "),e("h5",[t._v("You might also like:")]),t._v(" "),e("div",{staticClass:"row"},t._l(t.similars,function(a){return e("div",{staticClass:"beer-col col-md-6 col-lg-4"},[e("div",{staticClass:"card border-0"},[e("div",{staticClass:"card-bg my-2",style:{background:"url("+a.image_url+")"}}),t._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title text-center"},[t._v(t._s(a.name))]),t._v(" "),e("p",{staticClass:"card-text text-center"},[t._v(t._s(a.tagline))])])])])}),0)])])]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),t.beer.favorite?e("button",{staticClass:"btn btn-success",attrs:{type:"button"}},[t._v("Remove From Favorites")]):e("button",{staticClass:"btn btn-success",attrs:{type:"button"}},[t._v("Add to Favorites")])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}]};var m=e("VU/8")(v,u,!1,function(t){e("JFtl")},"data-v-012e2f5e",null).exports,f={name:"Index",props:["beer","fav","addFav","removeFav","toggle"],components:{Modal:m},data:function(){return{search:"",bottom:!1,beers:[]}},computed:{filteredList:function(){var t=this;return this.beers.filter(function(a){return a.name.toLowerCase().includes(t.search.toLowerCase())})}},methods:{bottomVisible:function(){var t=window.scrollY,a=document.documentElement.clientHeight,e=document.documentElement.scrollHeight;return a+t+150>=e||e<a},addBeer:function(){var t=this;$(".loading").show(),e("mtWM").get("https://api.punkapi.com/v2/beers/random").then(function(a){var e=a.data[0],s={name:e.name,image_url:e.image_url,desc:e.description,img:e.image_url,tips:e.brewers_tips,tagline:e.tagline,foods:e.food_pairing,ibu:e.ibu,abv:e.abv,ebc:e.ebc,ingredients:e.ingredients,favorite:!1};t.beers.push(s),t.bottomVisible()&&t.addBeer(),$(".xxx").hide()})}},watch:{bottom:function(t){t&&this.addBeer()}},created:function(){var t=this;window.addEventListener("scroll",function(){t.bottom=t.bottomVisible()}),this.addBeer()}},p={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"container py-5"},[e("div",{staticClass:"jumbotron jumbotron-fluid"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"display-4 text-center"},[t._v("The Beer Bank")]),t._v(" "),e("p",{staticClass:"lead text-center"},[t._v("Find your Favourite Beer here")]),t._v(" "),e("form",{staticClass:"w-75 mx-auto",on:{submit:function(t){t.preventDefault()}}},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",id:"search","aria-describedby":"searchHelp",placeholder:"Search a beer"},domProps:{value:t.search},on:{input:function(a){a.target.composing||(t.search=a.target.value)}}})]),t._v(" "),t._m(0)])])])]),t._v(" "),t.filteredList.length?e("div",{staticClass:"row px-5 beer-rows"},[t._l(t.filteredList,function(a,s){return e("div",{key:a.id,staticClass:"col-md-6 col-lg-4 my-2"},[e("div",{staticClass:"card mx-2 animated fadeIn"},[e("div",{staticClass:"card-bg my-2",style:{background:"url("+a.image_url+")"},on:{click:function(e){e.preventDefault(),t.toggle(a)}}}),t._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title",attrs:{"data-toggle":"modal","data-target":"#exampleModal"},on:{click:function(e){e.preventDefault(),t.toggle(a)}}},[t._v(t._s(a.name))]),t._v(" "),e("p",{staticClass:"card-text"},[t._v(t._s(a.tagline))]),t._v(" "),a.favorite?e("span",{staticClass:"favorite",on:{click:function(e){t.removeFav(a)}}},[e("i",{staticClass:"fas fa-star"})]):e("span",{staticClass:"favorite",on:{click:function(e){t.addFav(a)}}},[e("i",{staticClass:"far fa-star"})])])])])}),t._v(" "),t.beers.length?e("div",{staticClass:"loading"},[e("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"}})]):t._e()],2):t.beers.length?e("div",[e("h2",[t._v(" No Results found... ")])]):e("div",[e("h2",[t._v(" Loading... ")])]),t._v(" "),e("Modal",{attrs:{beer:t.beer}})],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-auto"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("Search")])])}]};var _=e("VU/8")(f,p,!1,function(t){e("QAwj")},"data-v-057fbe3c",null).exports,b={name:"Favorites",components:{Modal:m},props:["beer","fav","toggle","addFav","removeFav"],data:function(){return{}},methods:{toggleModal:function(){this.$emit("toggle-modal")}},mounted:function(){this.favorites=JSON.parse(localStorage.getItem("favorites"))}},h={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"container py-5"},[t._m(0),t._v(" "),t.fav.length?e("div",{staticClass:"row px-5"},t._l(t.fav,function(a,s){return e("div",{key:a.id,staticClass:"col-md-6 col-lg-4 my-2"},[e("div",{staticClass:"card mx-2 animated fadeIn"},[e("div",{staticClass:"card-bg my-2",style:{background:"url("+a.image_url+")"},on:{click:function(e){e.preventDefault(),t.toggle(a)}}}),t._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(a.name))]),t._v(" "),e("p",{staticClass:"card-text"},[t._v(t._s(a.tagline))]),t._v(" "),a.favorite?e("span",{staticClass:"favorite",on:{click:function(e){t.removeFav(a)}}},[e("i",{staticClass:"fas fa-star"})]):e("span",{staticClass:"favorite",on:{click:function(e){t.addFav(a)}}},[e("i",{staticClass:"far fa-star"})])])])])}),0):e("div",{staticClass:"py-5"},[e("h2",{staticClass:"text-center"},[t._v("You have no favorite beers yet.")])]),t._v(" "),e("Modal",{attrs:{beer:t.beer}})],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"row"},[a("h2",[this._v(" My Favorite Beers ")])])}]};var g=e("VU/8")(b,h,!1,function(t){e("EDl9")},"data-v-b408ecfa",null).exports;s.a.use(d.a);var C=new d.a({routes:[{path:"/",name:"Index",component:_},{path:"/favorites",name:"Favorites",component:g}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:C,components:{App:c},template:"<App/>"})},QAwj:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.752e612930c11eb8f57e.js.map