(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{175:function(e,t,a){"use strict";a.r(t);a(187);var n=a(0),r=a.n(n),i=a(203),o=a.n(i),c=a(185),l=a(11),s=a.n(l),m=a(190),u=a.n(m);function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(p(t)),t.gotoNext=t.gotoNext.bind(p(t)),t.gotoPrevious=t.gotoPrevious.bind(p(t)),t.gotoImage=t.gotoImage.bind(p(t)),t.handleClickImage=t.handleClickImage.bind(p(t)),t.openLightbox=t.openLightbox.bind(p(t)),t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},i.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},i.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},i.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},i.gotoImage=function(e){this.setState({currentImage:e})},i.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},i.renderGallery=function(){var e=this,t=this.props.images;if(t){var a=t.map(function(t,a){return r.a.createElement("article",{className:"6u 12u$(xsmall) work-item",key:a},r.a.createElement("a",{className:"image fit thumb",href:t.src,onClick:function(t){return e.openLightbox(a,t)}},r.a.createElement("img",{src:t.thumbnail})),r.a.createElement("h3",null,t.caption),r.a.createElement("p",null,t.description))});return r.a.createElement("div",{className:"row"},a)}},i.render=function(){return r.a.createElement("div",null,this.renderGallery(),r.a.createElement(u.a,{currentImage:this.state.currentImage,images:this.props.images,isOpen:this.state.lightboxIsOpen,onClickImage:this.handleClickImage,onClickNext:this.gotoNext,onClickPrev:this.gotoPrevious,onClickThumbnail:this.gotoImage,onClose:this.closeLightbox}))},n}(n.Component);h.displayName="Gallery",h.propTypes={images:s.a.array};var d=h;var g=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.images;if(e){var t=e.map(function(e,t){return r.a.createElement("article",{className:"6u 30u$(xsmall) work-item",key:t},r.a.createElement("a",{className:"image fit thumb",href:e.link,target:"_blank"},r.a.createElement("img",{src:e.thumbnail})),r.a.createElement("h3",null,e.caption),r.a.createElement("p",null,e.description))});return r.a.createElement("div",{className:"row"},t)}},n}(r.a.Component);var f=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",{id:"Experience"},r.a.createElement("h2",null,"Experience"),r.a.createElement("b",null,"Software  Developer @ Endurance International Group "),r.a.createElement("p",null,"Experience ranging from authoring large scale, highly available microservice from scratch to skilfully migrating legacy monolithic services.",r.a.createElement("ul",null,r.a.createElement("li",null,"Core member involved in redesigning and migrating PDR (Public Domain Registry), worlds 2nd biggest domain registrar to a microservice architecture."),r.a.createElement("li",null,"Solely developed search engine for domain aftermarket listing service."),r.a.createElement("li",null,"Responsible for 11M domains lifecycles, Nameservers and whois servers."))),r.a.createElement("b",null,"Software  Developer @ Brahma3, ​Bangalore"),r.a.createElement("p",null,"Primarily involved in porting Image Processing Algorithms on Arduino. Also involved in web scraping global 3D printing vendor data and full stack development for Bramha3’s new venture AtomAdd, a 3D printing  marketplace"))},n}(r.a.Component),b=a(254),E=a.n(b),v=a(255),y=a.n(v),x=(a(256),a(257),a(258),a(259),a(260)),I=a.n(x),N=a(261),k=a.n(N),w=(a(262),a(263),a(264),a(265),a(266)),_=a.n(w),C=a(267),S=a.n(C);var j=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",{id:"Education"},r.a.createElement("h2",null,"Education"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"7u 12u$(small)"},r.a.createElement("b",null,"Computer Science, Masters of Engineering"),r.a.createElement("br",null),"Cornell University.Graduating in 2020."),r.a.createElement("div",{className:"5u 12u$(small)"},r.a.createElement("img",{src:_.a,style:{width:"6em",height:"6em"}}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"7u 12u$(small)"},r.a.createElement("b",null,"Bachelors in Engineering, Computer Science"),r.a.createElement("br",null),"M.S Ramaiah Institute of Technology"),r.a.createElement("div",{className:"5u 12u$(small)"},r.a.createElement("img",{src:S.a,style:{width:"5em",height:"6em",marginLeft:"0.5em"}}))))},n}(r.a.Component);var A=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",{id:"Achievements"},r.a.createElement("h2",null,"Achievements"))},n}(r.a.Component);function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var L=[{id:"1",src:I.a,thumbnail:E.a,caption:"How to write a State Machine in Java ?",description:"Use State Machines to create an extensible backend framework",link:"https://medium.com/"},{id:"2",src:k.a,thumbnail:y.a,caption:"Integrate Asynchronize APIs",description:"Most systems are synchronous now. Can a synchronous system integrate with an Async API?",link:"https://medium.com/"}],O=[{id:"1",src:I.a,thumbnail:E.a,caption:"How to write a State Machine in Java ?",description:"Use State Machines to create an extensible backend framework",link:"https://medium.com/"},{id:"2",src:k.a,thumbnail:y.a,caption:"Integrate Asynchronize APIs",description:"Most systems are synchronous now. Can a synchronous system integrate with an Async API?",link:"https://medium.com/"},{id:"3",src:k.a,thumbnail:y.a,caption:"Design Patterns in 5 minutes",description:"Know your patterns. Do not reinvent the wheel.",link:"https://medium.com/"},{id:"4",src:k.a,thumbnail:y.a,caption:"Asynchronous APIS",description:"Learn the different ways of building Async apis.",link:"https://medium.com/"},{id:"5",src:k.a,thumbnail:y.a,caption:"How to structure your backend codebase?",description:"Its often looked over. The structure heavily effects the maintainability of code.",link:"https://medium.com/"},{id:"6",src:k.a,thumbnail:y.a,caption:"Should I learn Java ?",description:"Why learn java when there are other mordern languages ?",link:"https://medium.com/"},{id:"7",src:k.a,thumbnail:y.a,caption:"How to not use Template Method Design Pattern",description:"Extensively using  pattern can go horribly wrong. Leverage the advantages of the pattern without ruining your codebase.",link:"https://medium.com/"}],D=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(P(t)),t.gotoNext=t.gotoNext.bind(P(t)),t.gotoPrevious=t.gotoPrevious.bind(P(t)),t.openLightbox=t.openLightbox.bind(P(t)),t.handleClickImage=t.handleClickImage.bind(P(t)),t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},i.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},i.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},i.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},i.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},i.render=function(){return r.a.createElement(c.a,null,r.a.createElement(o.a,null,r.a.createElement("title",null,"Akhil"),r.a.createElement("meta",{name:"description",content:"Resume"})),r.a.createElement("div",{id:"main"},r.a.createElement("section",{id:"introduction"},r.a.createElement("header",{className:"major"},r.a.createElement("h1",null,"Hey, I am a Software Developer at heart and a Computer Science enthusiast.",r.a.createElement("br",null))),r.a.createElement("p",null,"I am a problem solver. I believe my strongest skill is the ability to analyze problems deeply and come up with practical solutions. Studying in Bangalore the technological center of India, I was exposed to a rich culture of tech startups, coding meetups, and hackathons. This culture taught me that, any problem can be solved with a bit of creative and out of the box thinking. It is the engineer’s responsibility to design and develop a practical implementation of the solution. The ability of an individual computer science engineer to make a great impact was what influenced me to study computer science.")),r.a.createElement("section",{id:"experience"},r.a.createElement(f,null)),r.a.createElement("section",{id:"education"},r.a.createElement(j,null)),r.a.createElement("section",{id:"achivements"},r.a.createElement(A,null)),r.a.createElement("section",{id:"Gallery"},r.a.createElement("h2",null,"Writing"),r.a.createElement(d,{images:L.map(function(e){e.id;return{src:e.src,thumbnail:e.thumbnail,caption:e.caption,description:e.description,link:e.link}})})),r.a.createElement("section",{id:"Writing"},r.a.createElement("h2",null,"Writing"),r.a.createElement(g,{images:O.map(function(e){e.id;return{src:e.src,thumbnail:e.thumbnail,caption:e.caption,description:e.description,link:e.link}})})),r.a.createElement("section",{id:"contact"},r.a.createElement("h2",null,"Get In Touch"),r.a.createElement("p",null,"Best way to contact me is by email."),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"8u 12u$(small)"},r.a.createElement("form",{method:"post",action:"#"},r.a.createElement("div",{className:"row uniform 50%"},r.a.createElement("div",{className:"6u 12u$(xsmall)"},r.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Name"})),r.a.createElement("div",{className:"6u 12u$(xsmall)"},r.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email"})),r.a.createElement("div",{className:"12u"},r.a.createElement("textarea",{name:"message",id:"message",placeholder:"Message",rows:"4"})))),r.a.createElement("ul",{className:"actions"},r.a.createElement("li",null,r.a.createElement("input",{type:"submit",value:"Send Message"})))),r.a.createElement("div",{className:"4u 12u$(small)"},r.a.createElement("ul",{className:"labeled-icons"},r.a.createElement("li",null,r.a.createElement("h3",{className:"icon fa-home"},r.a.createElement("span",{className:"label"},"Address")),"1234 Somewhere Rd.",r.a.createElement("br",null),"Nashville, TN 00000",r.a.createElement("br",null),"United States"),r.a.createElement("li",null,r.a.createElement("h3",{className:"icon fa-mobile"},r.a.createElement("span",{className:"label"},"Phone")),"000-000-0000"),r.a.createElement("li",null,r.a.createElement("h3",{className:"icon fa-envelope-o"},r.a.createElement("span",{className:"label"},"Email")),r.a.createElement("a",{href:"#"},"hello@untitled.tld"))))))))},n}(r.a.Component);t.default=D},180:function(e,t,a){e.exports=a.p+"static/avatar-337d524c1f5cf8c6d18057b39777b3ec.jpg"},185:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(186);var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",{id:"footer"},r.a.createElement("div",{className:"inner"},r.a.createElement("ul",{className:"icons"},r.a.createElement("li",null,r.a.createElement("a",{href:"#",className:"icon fa-github"},r.a.createElement("span",{className:"label"},"Github"))),r.a.createElement("li",null,r.a.createElement("a",{href:"#",className:"icon fa-linkedin"},r.a.createElement("span",{className:"label"},"Linkedin"))),r.a.createElement("li",null,r.a.createElement("a",{href:"#",className:"icon fa-envelope-o"},r.a.createElement("span",{className:"label"},"Email"))),r.a.createElement("li",null,r.a.createElement("a",{href:"#",className:"icon fa-facebook"},r.a.createElement("span",{className:"label"},"Facebook"))))))},n}(r.a.Component),o=a(180),c=a.n(o);var l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("header",{id:"header"},r.a.createElement("div",{className:"inner"},r.a.createElement("a",{href:"#",className:"image avatar"},r.a.createElement("img",{src:c.a,alt:""})),r.a.createElement("h1",null,r.a.createElement("strong",null,"I am Akhil Raj Azhikodan")),r.a.createElement("p",null,"software developer ")),r.a.createElement(i,null))},n}(r.a.Component);var s=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.children;return r.a.createElement("div",null,r.a.createElement(l,null),e)},n}(r.a.Component);t.a=s},254:function(e,t,a){e.exports=a.p+"static/01-6c866ee91adf8b061eaa83d7d286f64a.jpg"},255:function(e,t,a){e.exports=a.p+"static/02-5a005bd6e50a92ebb852094e87bae405.jpg"},256:function(e,t,a){e.exports=a.p+"static/03-6c07129022e286d50d1da5af14d28045.jpg"},257:function(e,t,a){e.exports=a.p+"static/04-f91f216f6dcccc296c646ccf71110979.jpg"},258:function(e,t,a){e.exports=a.p+"static/05-b9b1fc8ff6a17498e1436ed653764b58.jpg"},259:function(e,t,a){e.exports=a.p+"static/06-46276d05380390ac1bf441cac76b8f54.jpg"},260:function(e,t,a){e.exports=a.p+"static/01-ce87a7b005c8d7be981ccd8137fcba3b.jpg"},261:function(e,t,a){e.exports=a.p+"static/02-6b930b4d9fa8b3049018335dccf73ce1.jpg"},262:function(e,t,a){e.exports=a.p+"static/03-527df6325a53113613522e648f6c2d4c.jpg"},263:function(e,t,a){e.exports=a.p+"static/04-21d06c5d186485c6e486f7745faeb5b9.jpg"},264:function(e,t,a){e.exports=a.p+"static/05-6c7ec15e9ddfe636dbd8a07070266ef5.jpg"},265:function(e,t,a){e.exports=a.p+"static/06-4bc7a84922de28318f2ec45282e1bffe.jpg"},266:function(e,t,a){e.exports=a.p+"static/Cornell_University_seal-a57c35a82acaa38883772934093c7527.svg"},267:function(e,t,a){e.exports=a.p+"static/Ramaiah_Institutions_Logo-e999b03fc9b46ee2ee57d747cedb524f.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-8d8c745fdf238e329cfa.js.map