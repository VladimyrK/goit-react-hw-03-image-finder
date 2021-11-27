(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,r){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2XXks",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2ZHFn"}},14:function(e,t,r){e.exports={overlay:"Modal_overlay___6tAF",modal:"Modal_modal__3ODes"}},16:function(e,t,r){e.exports={Preview:"Preview_Preview__2dxhD"}},17:function(e,t,r){e.exports={ImageGallery:"ImageGallery_ImageGallery__2zQUu"}},18:function(e,t,r){e.exports={Button:"ButtonLoadMore_Button__2t9ug"}},20:function(e,t,r){e.exports={Spiner:"Spiner_Spiner__10i9p"}},25:function(e,t,r){},50:function(e,t,r){},51:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(8),c=r.n(o),s=(r(25),r(26),r(27),r(3)),i=r(4),u=r(6),l=r(5),h=r(11),m=r(9),p=r.n(m),d=r(1),f=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={inputQuery:""},e.handleInputQuery=function(t){e.setState({inputQuery:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.inputQuery.trim()?(e.props.onSubmit(e.state.inputQuery),e.setState({inputQuery:""})):h.b.error("Input query to find image...")},e}return Object(i.a)(r,[{key:"render",value:function(){return Object(d.jsx)("header",{className:p.a.Searchbar,children:Object(d.jsxs)("form",{className:p.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:p.a.SearchFormButton,children:Object(d.jsx)("span",{className:p.a.SearchFormButtonLabel,children:"Search"})}),Object(d.jsx)("input",{className:p.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.inputQuery,onChange:this.handleInputQuery})]})})}}]),r}(a.Component),j=f,b=r(15),g=r(7),y=r.n(g),v=r(10);function O(){return(O=Object(v.a)(y.a.mark((function e(t,r){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pixabay.com/api/?key=23604393-9751c4fdb7943747aa1d7afad&q=".concat(t,"&page=").concat(r,"&image_type=photo&orientation=horizontal&per_page=12"));case 2:if(!(a=e.sent).ok){e.next=8;break}return e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n.hits);case 8:return e.next=10,Promise.reject(new Error('No image with query "'.concat(t,'" found.')));case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(e,t){return O.apply(this,arguments)},S=r(16),_=r.n(S);var I=function(){return Object(d.jsx)("div",{className:_.a.Preview,children:"Enter search query "})},w=r(2),k=r.n(w),F=r(13),L=r.n(F);function C(e){var t=e.id,r=e.url,a=e.onClick;return Object(d.jsx)("li",{className:L.a.ImageGalleryItem,children:Object(d.jsx)("img",{className:L.a.ImageGalleryItemImage,src:r,alt:"Result of your query",id:t,onClick:a})})}C.protoType={id:k.a.string,url:k.a.string,onClick:k.a.func};var N=C,M=r(17),q=r.n(M);function B(e){var t=e.images,r=e.onClick;return Object(d.jsx)("ul",{className:q.a.ImageGallery,children:t.map((function(e){var t=e.id,a=e.webformatURL;return Object(d.jsx)(N,{id:t,url:a,onClick:r},t)}))})}B.protoType={images:k.a.arrayOf(k.a.objectOf(k.a.string)),onClick:k.a.func};var G=B,D=r(14),U=r.n(D),Q=document.querySelector("#modal-root"),R=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackDropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(d.jsx)("div",{className:U.a.overlay,onClick:this.handleBackDropClick,children:Object(d.jsx)("div",{className:U.a.modal,children:this.props.children})}),Q)}}]),r}(a.Component),E=R;function P(e){var t=e.url;return Object(d.jsx)("img",{src:t,alt:"Large sample"})}P.protoType={url:k.a.string};var A=P,T=r(18),K=r.n(T);function X(e){var t=e.onLoadMore;return Object(d.jsx)("button",{className:K.a.Button,type:"button",onClick:t,children:"Load more"})}X.protoType={onLoadMore:k.a.func};var z=X,J=r(19),W=r.n(J),Y=r(20),H=r.n(Y);var V=function(){return Object(d.jsx)("div",{className:H.a.Spiner,children:Object(d.jsx)(W.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})})},Z="No more images for this query",$=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={images:[],page:1,error:null,status:"idle",onFetch:!1,showModal:!1,largeImgURL:""},e.onLoadMore=function(){e.setState((function(e){return{page:e.page+1}}),Object(v.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.renderImages(e.props.query,e.state.page,Z);case 2:case"end":return t.stop()}}),t)}))))},e.renderImages=function(){var t=Object(v.a)(y.a.mark((function t(r,a,n){var o,c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.togleOnFetch(),t.next=4,x(r,a);case 4:o=t.sent,e.togleOnFetch(),0===o.length?(c=new Error(n),e.setState({error:c,status:"rejected"})):e.setState((function(e){return{images:[].concat(Object(b.a)(e.images),Object(b.a)(o)),status:"resolved"}})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e.setState({error:t.t0,status:"rejected"});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,r,a){return t.apply(this,arguments)}}(),e.setLargeImgURL=function(t,r){e.setState({largeImgURL:e.state.images.find((function(e){return e.id===Number(t.target.id)})).largeImageURL},r)},e.togleOnFetch=function(){e.setState((function(e){return{onFetch:!e.onFetch}}))},e.togleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(i.a)(r,[{key:"componentDidUpdate",value:function(e,t){var r=e.query,a=this.props.query,n=this.props.page;r!==a&&(this.setState({images:[]}),this.setState({page:1}),this.renderImages(a,n,"No images for this query"))}},{key:"render",value:function(){var e=this,t=this.state,r=t.status,a=t.images,n=t.showModal,o=t.onFetch,c=t.largeImgURL;return"idle"===r?Object(d.jsx)(I,{}):"rejected"===r?Object(d.jsx)("div",{children:this.state.error.message}):"resolved"===r?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(G,{images:a,onClick:function(t){e.setLargeImgURL(t,e.togleModal)}}),n&&Object(d.jsx)(E,{onClose:this.togleModal,children:Object(d.jsx)(A,{url:c})}),o&&Object(d.jsx)(V,{}),Object(d.jsx)(z,{onLoadMore:this.onLoadMore})]}):void 0}}]),r}(a.Component),ee=$,te=(r(50),function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleFormSubmit=function(t){e.setState({query:t})},e}return Object(i.a)(r,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(j,{onSubmit:this.handleFormSubmit}),Object(d.jsx)(ee,{query:this.state.query}),Object(d.jsx)(h.a,{autoClose:3e3,position:"top-center"})]})}}]),r}(a.Component)),re=te;c.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(re,{})}),document.getElementById("root"))},9:function(e,t,r){e.exports={Searchbar:"Searchbar_Searchbar__2vYEt",SearchForm:"Searchbar_SearchForm__vlWvG",SearchFormButton:"Searchbar_SearchFormButton__63myd",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__SRqXs",SearchFormInput:"Searchbar_SearchFormInput__nVYsN"}}},[[51,1,2]]]);
//# sourceMappingURL=main.5d3e8058.chunk.js.map