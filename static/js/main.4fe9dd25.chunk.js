(this.webpackJsonpadobe_shoppingcart=this.webpackJsonpadobe_shoppingcart||[]).push([[0],{11:function(e,t,a){e.exports={Cart:"Cart_Cart__8kOx6",priceDetails:"Cart_priceDetails__bvvl7",moveleft:"Cart_moveleft__3knIH",moveright:"Cart_moveright__1Ju-1",content:"Cart_content__2M5T4",addmargin:"Cart_addmargin__t_5Xr",total:"Cart_total__2bhBk",ruler:"Cart_ruler__3E_46"}},122:function(e,t,a){e.exports={Search:"Search_Search__2-AH6"}},125:function(e,t,a){e.exports={Modal:"Modal_Modal__1xRuW"}},126:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__1VmVL"}},127:function(e,t,a){e.exports=a(215)},132:function(e,t,a){},172:function(e,t,a){},21:function(e,t,a){e.exports={Content:"Layout_Content__3_AOa",applyBtn:"Layout_applyBtn__3AgwA",bold:"Layout_bold__2VyNF",margin:"Layout_margin__1k9IB",pricemodal:"Layout_pricemodal__2zdyY",cancel:"Layout_cancel__30bbT",apply:"Layout_apply__3fYjL",pulldown:"Layout_pulldown__X5GiS",hide:"Layout_hide__3_R7h"}},215:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(53),o=a.n(c),i=a(31),l=(a(132),a(72)),s=a.n(l),m=a(5),u=function(e){return{type:"ADD_ITEM",payload:e}},d=a(23),p=a(24),_=a(25),E=a(26),h=a(17),v=a(18),f=a(122),y=a.n(f),g=function(e){Object(E.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isActive:!1,searchTerm:""},e.handleClick=function(t){e.setState({isActive:!0})},e.handleChange=function(t){e.setState({searchTerm:t.target.value},(function(){return e.props.searchByName(e.state.searchTerm)}))},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state.isActive;return r.a.createElement("span",null,!e&&r.a.createElement(h.a,{style:{marginRight:"10px"},icon:v.b,onClick:this.handleClick}),e&&r.a.createElement("span",null,r.a.createElement("input",{type:"text",className:y.a.Search,onChange:this.handleChange,placeholder:"Search"}),r.a.createElement(h.a,{style:{marginRight:"10px"},icon:v.b,onClick:this.handleClick})))}}]),a}(n.Component),C=Object(m.b)(null,{searchByName:function(e){return{type:"SEARCH_BY_NAME",name:e}}})(g),b=a(55),N=a.n(b),I=Object(m.b)((function(e){return{itemCount:e.cart.quantity}}),{toggleCartHidden:function(){return{type:"TOGGLE_CART_HIDDEN"}}})((function(e){var t=e.itemCount,a=e.toggleCartHidden;return r.a.createElement("div",{className:N.a.Carticon,onClick:a},r.a.createElement(C,null),r.a.createElement(i.b,{to:"/cart",className:N.a.Carticon},r.a.createElement(h.a,{icon:v.c}),t?r.a.createElement("span",{className:"".concat(N.a.itemcount," badge badge-warning ")},t):""))})),O=a(77),k=a.n(O),j=function(e){return r.a.createElement("div",{className:k.a.Logo},r.a.createElement(i.b,{to:"/",className:k.a.Logo},r.a.createElement(h.a,{icon:v.e})))},D=function(e){return r.a.createElement("header",{className:s.a.Header},r.a.createElement("div",{className:s.a.Logo},r.a.createElement(j,null)),r.a.createElement(I,null))},w=a(78),P=a.n(w),S=function(e){return r.a.createElement("footer",{className:P.a.Footer},r.a.createElement("div",{className:P.a.Copyright}," @copyright"))},A=a(46),x=a(21),R=a.n(x),T=a(124),L=a.n(T),M=a(38),B=a.n(M),F=Object(m.b)(null,{addItem:u})((function(e){var t=e.addItem,a=e.item,n=(a.id,a.name),c=a.price,o=a.discount,i=a.img_url,l=Math.floor(c*((100-o)/100));return r.a.createElement("div",{className:B.a.Collection-a},r.a.createElement("img",{className:B.a.Image,src:i}),r.a.createElement("div",null,r.a.createElement("div",null,n),r.a.createElement("div",null,r.a.createElement("div",{className:B.a.Discount},"\u20b9",l),r.a.createElement("div",{className:B.a.Original},c),r.a.createElement("div",{className:B.a.Percentage},o,"% off"))),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return t(a)}},"ADD to cart")))})),q=a(79),H=a.n(q),Y=function(e){Object(E.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:null},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;L.a.get("https://api.myjson.com/bins/qzuzi").then((function(e){return e.data})).then((function(t){e.setState({data:t}),e.props.apiData(t)})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",{className:H.a.Category},r.a.createElement("div",{className:H.a.Items},e&&e.length&&e.map((function(e){return r.a.createElement(F,{key:e.id,item:e})}))))}}]),a}(n.Component),V=Object(m.b)((function(e){return{data:e.cart.data}}),{apiData:function(e){return{type:"API_DATA",payload:e}}})(Y),G=a(125),U=a.n(G),J=a(126),W=a.n(J),z=function(e){return e.show?r.a.createElement("div",{className:W.a.Backdrop,onClick:e.clicked}):null},X=function(e){Object(E.a)(a,e);var t=Object(_.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(z,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:U.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),a}(n.Component),K=a(39),Q=a.n(K),$=Object(m.b)(null,{sortByPriceAsc:function(){return{type:"SORT_BY_PRICE_ASC"}},sortByPriceDesc:function(){return{type:"SORT_BY_PRICE_DESC"}},sortByDiscount:function(){return{type:"SORT_BY_PRICE_DISCOUNT"}}})((function(e){var t=e.sortByPriceAsc,a=e.sortByPriceDesc,n=e.sortByDiscount;return r.a.createElement("div",{className:Q.a.DesktopOnly},r.a.createElement("h2",{className:Q.a.Sort},"Sort By"),r.a.createElement("span",{onClick:a,className:Q.a.Filter}," Price -- High Low"),r.a.createElement("span",{onClick:t,className:Q.a.Filter}," Price -- Low High"),r.a.createElement("span",{onClick:n,className:Q.a.Filter}," Discount"))})),Z=a(80),ee=a.n(Z),te=(a(171),function(e){Object(E.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showsideDrawer:!1,value:{min:200,max:300},price:!1,sort:!1},e.sideDrawerClosedHandler=function(){e.setState({showsideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showsideDrawer:!e.showsideDrawer}}))},e.displayModal=function(t){console.log("display Modal"),e.setState(Object(A.a)({},t,!0))},e.applyFilter=function(){e.setState({price:!1,sort:!1}),e.props.applyFilter(e.state.value.min,e.state.value.max)},e}return Object(p.a)(a,[{key:"closeModal",value:function(e){this.setState(Object(A.a)({},e,!1))}},{key:"render",value:function(){var e=this;return console.log("props ",this.props),r.a.createElement("div",{className:R.a.Content},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"col-xs-12 col-sm-3 col-md-3 col-lg-3 hidden-xs"},r.a.createElement("h2",null,"Fliters"),r.a.createElement("br",null),r.a.createElement(ee.a,{maxValue:600,minValue:100,value:this.state.value,onChange:function(t){return e.setState({value:t})}}),r.a.createElement("div",{className:"row text-center"},"Price"),r.a.createElement("div",{className:"row text-center ".concat(R.a.applyBtn)},r.a.createElement("button",{onClick:this.applyFilter},"Apply"))),r.a.createElement("div",{className:"col-xs-12 col-sm-9 col-md-9 col-lg-9"},r.a.createElement("div",{className:"row text-center hidden-md hidden-lg"},r.a.createElement("div",{className:"col-xs-6 col-sm-6 text-center"},r.a.createElement("span",{className:R.a.bold,"data-toggle":"modal","data-target":"#myModal"},r.a.createElement(h.a,{className:R.a.margin,icon:v.a}),"Filter")),r.a.createElement("div",{name:"price",onClick:function(){return e.displayModal("price")}},r.a.createElement("span",{className:R.a.bold},r.a.createElement(h.a,{className:R.a.margin,icon:v.d}),"Sort By"))),r.a.createElement($,null),r.a.createElement(V,null)),this.state.price&&r.a.createElement(X,{show:this.state.price,modalClosed:function(){return e.closeModal("price")}},r.a.createElement("div",null,r.a.createElement("div",{className:R.a.pricemodal},"Filter Options"),r.a.createElement(ee.a,{maxValue:600,minValue:100,value:this.state.value,onChange:function(t){return e.setState({value:t})}}),r.a.createElement("div",{style:{fontWeight:"bold",marginTop:"15px"},className:"row text-center"},"Price"),r.a.createElement("div",{style:{marginTop:"30px"}},r.a.createElement("div",{className:R.a.cancel,onClick:function(){return e.closeModal("price")}},"Cancel"),r.a.createElement("div",{className:R.a.apply,onClick:this.applyFilter},"Apply"))))),r.a.createElement("div",{id:"myModal1",className:"modal fade",role:"dialog"},r.a.createElement("div",{className:"modal-dialog"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-body"},"Sorting section")))))}}]),a}(n.Component)),ae=Object(m.b)(null,{applyFilter:function(e,t){return{type:"APPLY_FILTER",min:e,max:t}}})(te),ne=a(27),re=a(8),ce=a.n(re),oe=Object(m.b)(null,{addItem:u,clearItemFromCart:function(e){return{type:"CLEAR_ITEM_FROM_CART",payload:e}},removeItem:function(e){return{type:"REMOVE_ITEM",payload:e}}})((function(e){var t=e.cartItem,a=e.addItem,n=e.clearItemFromCart,c=e.removeItem,o=t.name,i=t.img_url,l=t.price,s=t.quantity,m=t.discount,u=Math.floor(l*((100-m)/100));return console.log("CheckoutItem"),r.a.createElement("div",{className:ce.a.checkoutitem},r.a.createElement("div",{className:ce.a.imagecontainer},r.a.createElement("img",{alt:"key",src:i})),r.a.createElement("div",{className:ce.a.width100},r.a.createElement("div",{className:ce.a.pair},r.a.createElement("div",{className:ce.a.name}," ",o),r.a.createElement("div",{className:ce.a.price},"\u20b9",u),r.a.createElement("div",{className:ce.a.Original},l),r.a.createElement("div",{className:ce.a.Percentage},m,"% off"),r.a.createElement("br",null)),r.a.createElement("div",{className:ce.a.quantity},r.a.createElement("div",{className:ce.a.changequantity,onClick:function(){return c(t)}},"-"),r.a.createElement("div",{className:ce.a.value},s),r.a.createElement("div",{className:ce.a.changequantity,onClick:function(){return a(t)}},"+")),r.a.createElement("div",{className:ce.a.inlineBlockDisplay},r.a.createElement("div",{className:ce.a.removebutton,onClick:function(){return n(t)}},"REMOVE"))))})),ie=a(11),le=a.n(ie),se=Object(m.b)((function(e){return{cartItems:e.cart.cartItems}}))((function(e){console.log("cart ",e.cartItems);var t=e.cartItems,a=0,n=0;return t.map((function(e){a+=e.quantity*e.price,n+=e.quantity*Math.floor(e.price*((100-e.discount)/100))})),r.a.createElement("div",{className:le.a.Cart},r.a.createElement("div",{className:le.a.content},t.map((function(e){return r.a.createElement(oe,{cartItem:e,key:e.id})}))),t&&t.length?r.a.createElement("div",{className:le.a.priceDetails},r.a.createElement("h4",null,"PRICE DETAILS"),r.a.createElement("hr",null),r.a.createElement("div",{className:le.a.addmargin},r.a.createElement("div",{className:le.a.moveleft}," Price"),r.a.createElement("div",{className:le.a.moveright},a)),r.a.createElement("div",{className:le.a.addmargin},r.a.createElement("div",{className:le.a.moveleft},"Discount"),r.a.createElement("div",{className:le.a.moveright},a-n)),r.a.createElement("hr",{className:le.a.ruler}),r.a.createElement("div",{className:le.a.total},r.a.createElement("div",{className:le.a.moveleft},"Total Payable"),r.a.createElement("div",{className:le.a.moveright},"\u20b9",n))):"")}));a(172);var me=function(){return console.log("URL ","/shoppingcart"),r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement(ne.c,null,r.a.createElement(ne.a,{path:"/cart",component:se}),r.a.createElement(ne.a,{path:"/",exact:!0,component:ae})),r.a.createElement(S,null))},ue=a(32),de=a(20),pe=a(7),_e=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(pe.a)({},e,{quantity:e.quantity+1}):e})):[].concat(Object(de.a)(e),[Object(pe.a)({},t,{quantity:1})])},Ee=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(pe.a)({},e,{quantity:e.quantity-1}):e}))},he={cartItems:[],hidden:!0},ve=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_ITEM":return Object(pe.a)({},t,{cartItems:_e(t.cartItems,a.payload),quantity:(t.quantity||0)+1});case"TOGGLE_CART_HIDDEN":return Object(pe.a)({},t,{hidden:!t.hidden});case"CLEAR_ITEM_FROM_CART":var n;t.cartItems.map((function(e){e.id===a.payload.id&&(n=e.quantity)}));var r=t.cartItems.filter((function(e){return e.id!==a.payload.id}));return Object(pe.a)({},t,{cartItems:r,quantity:t.quantity-n});case"REMOVE_ITEM":return Object(pe.a)({},t,{cartItems:Ee(t.cartItems,a.payload),quantity:t.quantity-1});case"SORT_BY_PRICE_ASC":return(e=(e=Object(de.a)(t.data)).map((function(e){return e.discountedPrice=Math.floor(e.price*((100-e.discount)/100)),e}))).sort((function(e,t){return e.discountedPrice-t.discountedPrice})),Object(pe.a)({},t,{data:e});case"SORT_BY_PRICE_DESC":return(e=(e=Object(de.a)(t.data)).map((function(e){return e.discountedPrice=Math.floor(e.price*((100-e.discount)/100)),e}))).sort((function(e,t){return t.discountedPrice-e.discountedPrice})),Object(pe.a)({},t,{data:e});case"SORT_BY_PRICE_DISCOUNT":return(e=Object(de.a)(t.data)).sort((function(e,t){return t.discount-e.discount})),Object(pe.a)({},t,{data:e});case"API_DATA":return Object(pe.a)({},t,{data:a.payload,originalValue:Object(de.a)(a.payload)});case"SEARCH_BY_NAME":return e=(e=Object(de.a)(t.data)).filter((function(e){return e.name.includes(a.name)})),a.name.length||(e=Object(de.a)(t.originalValue)),Object(pe.a)({},t,{data:e});case"APPLY_FILTER":return e=(e=(e=Object(de.a)(t.originalValue)).map((function(e){return e.discountedPrice=Math.floor(e.price*((100-e.discount)/100)),e}))).filter((function(e){return e.discountedPrice>=a.min&&e.discountedPrice<=a.max})),Object(pe.a)({},t,{data:e});default:return t}},fe=Object(ue.c)({cart:ve}),ye=Object(ue.d)(fe,ue.a.apply(void 0,[]));a(173),a(174),a(214),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(m.a,{store:ye},r.a.createElement(i.a,{basename:"/shoppingcart"},r.a.createElement(me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},38:function(e,t,a){e.exports={"Collection-item":"Item_Collection-item__20eRh",Image:"Item_Image__2gFg8",Original:"Item_Original__hedHj",Discount:"Item_Discount__1Nru-",Percentage:"Item_Percentage__cfUTJ"}},39:function(e,t,a){e.exports={Sort:"Sort_Sort__ahsjy",Filter:"Sort_Filter__2SrGk",DesktopOnly:"Sort_DesktopOnly__jenGn"}},55:function(e,t,a){e.exports={Carticon:"CartIcon_Carticon__juFJF","shopping-icon":"CartIcon_shopping-icon__2IPI_",itemcount:"CartIcon_itemcount__1T1Cp"}},72:function(e,t,a){e.exports={Header:"Header_Header__31gEA",Logo:"Header_Logo__2bRF0",DesktopOnly:"Header_DesktopOnly__1fIEH"}},77:function(e,t,a){e.exports={Logo:"Logo_Logo__7E1Wg"}},78:function(e,t,a){e.exports={Footer:"Footer_Footer__24cUQ",Logo:"Footer_Logo__3m85k",Copyright:"Footer_Copyright__1bP6s",DesktopOnly:"Footer_DesktopOnly__iYJ4B"}},79:function(e,t,a){e.exports={Category:"Items_Category__EoMrl",Items:"Items_Items__1XHmd"}},8:function(e,t,a){e.exports={checkoutitem:"CartItem_checkoutitem__2lcH1",imagecontainer:"CartItem_imagecontainer__d0KYk",width100:"CartItem_width100__REif8",quantity:"CartItem_quantity__2p2Yd",pair:"CartItem_pair__1zWKL",price:"CartItem_price__3mrxr",changequantity:"CartItem_changequantity__hp0f5",value:"CartItem_value__3HwRU",removebutton:"CartItem_removebutton__fGeEv",inlineBlockDisplay:"CartItem_inlineBlockDisplay__1Emwr",Percentage:"CartItem_Percentage__3gPv9",Original:"CartItem_Original__l2IYg"}}},[[127,1,2]]]);
//# sourceMappingURL=main.4fe9dd25.chunk.js.map