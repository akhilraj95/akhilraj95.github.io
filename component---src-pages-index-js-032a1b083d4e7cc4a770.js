(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{175:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(201),i=a.n(r),c=a(185),o=a(11),s=a.n(o),m=a(189),u=a.n(m);function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(h(t)),t.gotoNext=t.gotoNext.bind(h(t)),t.gotoPrevious=t.gotoPrevious.bind(h(t)),t.gotoImage=t.gotoImage.bind(h(t)),t.handleClickImage=t.handleClickImage.bind(h(t)),t.openLightbox=t.openLightbox.bind(h(t)),t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},r.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},r.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},r.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},r.gotoImage=function(e){this.setState({currentImage:e})},r.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},r.renderGallery=function(){var e=this,t=this.props.images;if(t){var a=t.map(function(t,a){return l.a.createElement("article",{className:"6u 12u$(xsmall) work-item",key:a},l.a.createElement("a",{className:"image fit thumb",href:t.src,onClick:function(t){return e.openLightbox(a,t)}},l.a.createElement("img",{src:t.thumbnail})),l.a.createElement("h3",null,t.caption),l.a.createElement("p",null,t.description))});return l.a.createElement("div",{className:"row"},a)}},r.render=function(){return l.a.createElement("div",null,this.renderGallery(),l.a.createElement(u.a,{currentImage:this.state.currentImage,images:this.props.images,isOpen:this.state.lightboxIsOpen,onClickImage:this.handleClickImage,onClickNext:this.gotoNext,onClickPrev:this.gotoPrevious,onClickThumbnail:this.gotoImage,onClose:this.closeLightbox}))},n}(n.Component);d.displayName="Gallery",d.propTypes={images:s.a.array};a(252);l.a.Component;var p=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return l.a.createElement("div",{id:"Experience"},l.a.createElement("h2",null,"Experience"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"6u 12u$(small)"},l.a.createElement("large",null,l.a.createElement("b",null,"Software  Engineer @ ",l.a.createElement("a",{href:"https://www.linkedin.com/company/endurance-international-group/",target:"_blank"},"LogicBoxes - Directi (EIG)")," "))),l.a.createElement("div",{className:"6u 12u$(small)",align:"right"},l.a.createElement("large",null,"2 years 1 month (June 2017 - July 2019)"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"12u 12u$(small)"},l.a.createElement("p",null,"Experience ranging from authoring large scale, highly available microservice from scratch to skilfully migrating legacy monolithic services.",l.a.createElement("ul",null,l.a.createElement("li",null,"Core member involved in redesigning and migrating PDR (Public Domain Registry), worlds 2nd biggest domain registrar to a microservice architecture.",l.a.createElement("ol",null,l.a.createElement("li",null,"Decoupled a legacy monolithic code base to discrete services for scalability and reliability."),l.a.createElement("li",null,"Developed Asynchronous APIs – Webhooks with Retries"),l.a.createElement("li",null,"Designed A State Machine Framework – Transactional states, Retry on Failure."),l.a.createElement("li",null,"Zero downtime migration to the new system."),l.a.createElement("li",null,"Presenter of design at the Milestone Meetings."))),l.a.createElement("li",null,"Worked on getting the system GDPR compliant under a severely tight deadline."),l.a.createElement("li",null,"Developed a search engine for domains with fuzzy & synonym matching."),l.a.createElement("li",null,"Designed a service that Synchronized Asynchronous APIs for backward compatibility."),l.a.createElement("li",null,"Responsible for 11M domains lifecycles, Nameservers and whois servers."),l.a.createElement("li",null,"Introduced “Rotating Paired On-Calls” to improve resolution time for incidents in my team."),l.a.createElement("li",null,"Member of the Interview panel for lateral and campus hires."))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"6u 12u$(small)"},l.a.createElement("large",null,l.a.createElement("b",null,"Software  Developer Intern @ ",l.a.createElement("a",{href:"https://www.linkedin.com/company/li2-innovations/"},"Li2 innovations")))),l.a.createElement("div",{className:"6u 12u$(small)",align:"right"},l.a.createElement("large",null,"6 month (January 2016 - July 2016)"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"12u 12u$(small)"},l.a.createElement("ul",null,l.a.createElement("li",null,"Automated a tedious manual process by building a Web Scraper for vendor data collection"),l.a.createElement("li",null,"System generated emails for customer verification and order acknowledgment.")))))},n}(l.a.Component),g=a(254),E=a.n(g),f=a(255),b=a.n(f),v=(a(256),a(257),a(258),a(259),a(260)),y=a.n(v),w=a(261),k=a.n(w),N=(a(262),a(263),a(264),a(265),a(266)),I=a.n(N),x=a(267),A=a.n(x),S=a(268),C=a.n(S),_=a(269),R=a.n(_),L=a(270),D=a.n(L),M=a(271),P=a.n(M);var T=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return l.a.createElement("div",{id:"Education"},l.a.createElement("h2",null,"Education"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"7u 12u$(small)"},l.a.createElement("h3",null,"Master of Engineering, Computer Science "),"Cornell University",l.a.createElement("br",null),l.a.createElement("div",null,"GPA: 4.017"),l.a.createElement("div",null),l.a.createElement("br",null)),l.a.createElement("div",{className:"5u 12u$(small)"},l.a.createElement("a",{href:"https://www.cornell.edu/",target:"_blank"},l.a.createElement("img",{src:D.a,style:{width:"6em",height:"6em"}})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"12u 12u$(small)"},l.a.createElement("b",null,"Distributed Systems Research:")," Working under Professor ",l.a.createElement("a",{href:"https://www.cs.cornell.edu/~ragarwal/index.html",target:"_blank"},"Rachit Agarwal"),"  on efficiently multiplexing cache capacity across multiple tenants operating in a shared cluster while providing isolation guarantees.",l.a.createElement("br",null))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"6u 12u$(small)"},l.a.createElement("b",null,"What have I studied at Cornell ?"),l.a.createElement("ul",null,l.a.createElement("li",null,"Machine Learning for Intelligent Systems"),l.a.createElement("li",null,"Natural Language Processing"),l.a.createElement("li",null,"Artificial Intelligence"),l.a.createElement("li",null,"Designing New Ventures"))),l.a.createElement("div",{className:"6u 12u$(small)"},l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",null,"Machine Learning for Data Science"),l.a.createElement("li",null,"Introduction to Computer Vision"),l.a.createElement("li",null,"Cloud Computing")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"7u 12u$(small)"},l.a.createElement("b",null,"Bachelor of Engineering, Computer Science"),l.a.createElement("br",null),"Ramaiah Institute of Technology",l.a.createElement("br",null),l.a.createElement("div",null,"GPA: 9.35"),l.a.createElement("div",null),l.a.createElement("br",null)),l.a.createElement("div",{className:"5u 12u$(small)"},l.a.createElement("a",{href:"http://www.msrit.edu/",target:"_blank"},l.a.createElement("img",{src:P.a,style:{width:"5em",height:"6em",marginLeft:"0.5em"}})))))},n}(l.a.Component);var j=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return l.a.createElement("div",{id:"Achievements"},l.a.createElement("h2",null,"Achievements"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"12u"},l.a.createElement("large",{className:"icon fa-trophy"},l.a.createElement("span",{className:"label"})," Won 7 Hackathons"),l.a.createElement("br",null),l.a.createElement("h5",null,"  I just love hackathons."),l.a.createElement("large",{className:"icon fa-trophy"},l.a.createElement("span",{className:"label"})," Edward de Bono's Creativity Award at Directi (EIG)"),l.a.createElement("br",null),l.a.createElement("h5",null,"   The annual creativity award was given to me for my work on designing the new Registrar Platform's core service."),l.a.createElement("large",{className:"icon fa-trophy"},l.a.createElement("span",{className:"label"})," SAP Developer Hero - 2017"),l.a.createElement("br",null),l.a.createElement("h5",null,"   SAP selected 10 ‘Developer Heroes’ from within the community who had done interesting, innovative, collaborative stuff in the community. Watch the interviews below where I talk about it."))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"6u"},l.a.createElement("iframe",{width:"350",height:"200",src:"https://www.youtube.com/embed/yhhInkg0KMY",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),l.a.createElement("div",{className:"6u"},l.a.createElement("iframe",{width:"350",height:"200",src:"https://www.youtube.com/embed/H8oSZAfuz80",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"12u"},l.a.createElement("br",null),l.a.createElement("large",{className:"icon fa-trophy"},l.a.createElement("span",{className:"label"})," Best Achiever Award - of MSRIT Computer Science 2017 Batch"),l.a.createElement("br",null),l.a.createElement("h5",null,"  My university gave me the award for all my achievements in the 4 years of undergrad. "),l.a.createElement("large",{className:"icon fa-trophy"},l.a.createElement("span",{className:"label"})," Best Capstone Project Award - of MSRIT, CS 2017"),l.a.createElement("br",null),l.a.createElement("h5",null,"  My university gave me the award for my research work on automating stock trading with reinforcement learning. Check it out on Github.",l.a.createElement("a",{href:"https://github.com/BangaloreSharks/SharkStock",target:"_blank",className:"icon fa-github"},l.a.createElement("span",null)),l.a.createElement("br",null),l.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=BangaloreSharks&repo=SharkStock&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"160px",height:"30px"}),l.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=BangaloreSharks&repo=SharkStock&type=watch&count=true&size=large&v=2",frameborder:"0",scrolling:"0",width:"160px",height:"30px"}),l.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=BangaloreSharks&repo=SharkStock&type=fork&count=true&size=large",frameborder:"0",scrolling:"0",width:"158px",height:"30px"})),l.a.createElement("large",{className:"icon fa-trophy"},l.a.createElement("span",{className:"label"})," ITC Infotech, iTech, 16 - Hackathon Winners"),l.a.createElement("br",null),l.a.createElement("h5",null," My team and I developed an augmented reality bike helmet. RidAR provides an unobtrusive navigation for bikers, so they need not stop and check their phone for directions. "),l.a.createElement("large",{className:"icon fa-trophy"},l.a.createElement("span",{className:"label"})," NASA Space App Challenge,16 - Global Nomination for Best Problem Solver"),l.a.createElement("br",null),l.a.createElement("h5",null,"  My team and I built a system that helped predict flight delays caused by adverse weather conditions with ML."),l.a.createElement("large",{className:"icon fa-trophy"},l.a.createElement("span",{className:"label"})," CSIR - All India Cyber Security Hackathon Winners"),l.a.createElement("br",null),l.a.createElement("h5",null,"  My team and I built a prototype biometric payment system which lets you just use your finger as a credit card. Wallets and Cash are so last century! "),l.a.createElement("large",{className:"icon fa-trophy"},l.a.createElement("span",{className:"label"})," Flockathon - Runner up"),l.a.createElement("br",null),l.a.createElement("h5",null,"  I developed an integration that helps manage expenses for a group on the ",l.a.createElement("a",{href:"https://flock.com/"},"Flock messaging service"),"."))))},n}(l.a.Component);var O=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return l.a.createElement("div",{id:"Research"},l.a.createElement("h2",null,"Research"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"12u 12u$(small)"},l.a.createElement("h3",null,"Optimizing Underutilized Cache In Multi-tenant Databases",l.a.createElement("h6",null,"Working under the guidance of Professor ",l.a.createElement("a",{href:"https://www.cs.cornell.edu/~ragarwal/index.html",target:"_blank"},"Rachit Agarwal"),".")),l.a.createElement("h5",null,"The research strives to determine a policy which takes advantage of the underutilized cache in a multi-tenant memory disaggregated database to optimize performance. To provide isolation guarantee the multi-tenant databases require allocation of resources for simultaneous maximum utilization. In practice, these resource capacities defined for worst-case operations are often under-utilized."),l.a.createElement("b",null,"Idea:"),l.a.createElement("br",null),l.a.createElement("h5",null,"Isolation guarantee when limited to a period of time lets multi-tenant caching system leverage the underutilized memory resources. Cache can be borrowed from tenants if they have not been using it. The borrowed cache space is returned on request. Do we break isolation ? Yes, but blind isolation guarantees are impractical and a limitation to scalability."))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"12u 12u$(small)"},l.a.createElement("h3",null,"Stock Trading Automation with Reinforcement Learning",l.a.createElement("h6",null,"Proceedings of the Fifth ICICSE 2017 - DOI: 10.1007/978-981-10-8201-6_5")),l.a.createElement("h5",null,"This paper proposes automating swing trading using deep reinforcement learning. The deep deterministic policy-gradient based neural network model trains to choose an action to sell, buy or hold the stocks to maximize the gain in asset value. The system also predicts the trend in stock value to work along with the reinforcement learning algorithm. We implement a sentiment analysis model using a recurrent convolutional neural network to predict the stock trend from the financial news. The objective of this paper is not to build a better trading bot but to prove that reinforcement learning is capable of learning the tricks of stock trading.",l.a.createElement("br",null),l.a.createElement("a",{href:"https://drive.google.com/file/d/19zgIJTEgSyO8AQhq__M1o5R1NCXTmvUf/view?usp=sharing",target:"_blank"}," Download the unofficial paper."),l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.researchgate.net/publication/325385951_Stock_Trading_Bot_Using_Deep_Reinforcement_Learning/stats",target:"_blank"}," Checkout the stats.")),l.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=BangaloreSharks&repo=SharkStock&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"160px",height:"30px"}),l.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=BangaloreSharks&repo=SharkStock&type=watch&count=true&size=large&v=2",frameborder:"0",scrolling:"0",width:"160px",height:"30px"}),l.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=BangaloreSharks&repo=SharkStock&type=fork&count=true&size=large",frameborder:"0",scrolling:"0",width:"158px",height:"30px"}))))},n}(l.a.Component);var B=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return l.a.createElement("div",{id:"Skills"},l.a.createElement("h2",null,"Skills"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"12u$(small)"},"I have experience in strategically breaking down legacy systems to microservices, adopting cloud, zero downtime system migrations, designing and authoring services from scratch, moving from synchronous to asynchronous systems. My experience redesigning the legacy monolith at my previous company enables me to develop highly scalable, reliable and performant systems.",l.a.createElement("br",null)," ",l.a.createElement("b",null,"In Academia,")," I have experience with Machine learning for data science, Natural Language Processing and reinforcement learning.")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"6u 6u$(small)"},l.a.createElement("br",null),l.a.createElement("b",null,"Languages"),l.a.createElement("ul",null,l.a.createElement("li",null,"Java - (2 yrs Industry, 6 yrs Academia)"),l.a.createElement("li",null,"Python - (2 yrs Industry, 7 yrs Academia)"),l.a.createElement("li",null,"C++/C - (5 yrs Academia)"),l.a.createElement("li",null,"Javascript - (2 yrs Personal)"),l.a.createElement("li",null,"SQL - (2 yrs Industry, 6 yrs Academia)")),l.a.createElement("b",null,"Machine Learning and AI"),l.a.createElement("ul",null,l.a.createElement("li",null,"Experience with Neural Networks (Deep Learning) for"),l.a.createElement("ol",null,l.a.createElement("li",null,"Reinforcement Learning"),l.a.createElement("li",null,"Sentiment Analysis"),l.a.createElement("li",null,"Predictive analytics")),l.a.createElement("li",null,"Natural Language Processing",l.a.createElement("ol",null,l.a.createElement("li",null,"Fine tuning BERT, OpenGPT"),l.a.createElement("li",null,"Experience with transformers"),l.a.createElement("li",null,"Feature Engineering"),l.a.createElement("li",null,"Classification, Generation, Common Sense Reasoning"))),l.a.createElement("li",null,"Building Classification / Clustering Models"),l.a.createElement("li",null,"Familiarity with SVM, Bayesian Models, Online Learning.")),l.a.createElement("b",null,"Experience working in Academia with"),l.a.createElement("ul",null,l.a.createElement("li",null,"Pytorch, TensorFlow, Keras"),l.a.createElement("li",null,"Scikit-Learn, Numpy, NLTK, Matlab/Octave, R"))),l.a.createElement("div",{className:"6u 6u$(small)"},l.a.createElement("br",null),l.a.createElement("b",null,"Engineering"),l.a.createElement("ul",null,l.a.createElement("li",null,"Backend Engineering"),l.a.createElement("li",null,"Designing services from scratch"),l.a.createElement("li",null,"Designing for highly scalability"),l.a.createElement("li",null,"Designing for highly availability"),l.a.createElement("li",null,"Breaking down legacy systems to microservices"),l.a.createElement("li",null,"Adopting Cloud"),l.a.createElement("li",null,"Zero downtime system migration"),l.a.createElement("li",null,"Event Driven Programming"),l.a.createElement("li",null,"Moving from synchronous to asynchronous")),l.a.createElement("b",null,"Experience working in industry with"),l.a.createElement("ul",null,l.a.createElement("li",null,"Relational Databases (Postgres, MySQL)"),l.a.createElement("li",null,"NoSQL Databases (Casandra, Redis, MongoDB)"),l.a.createElement("li",null,"Message Queues (ActiveMQ, AWS SQS, Kafka)"),l.a.createElement("li",null,"API Gateway (Kong, Zuul, AWS Gateway)"),l.a.createElement("li",null,"Designing REST APIs"),l.a.createElement("li",null,"Asynchronous APIs (With Callbacks and Reactive)"),l.a.createElement("li",null,"Caching (With Redis and Caffeine)"),l.a.createElement("li",null,"Cloud (AWS)"),l.a.createElement("li",null,"Containerization (Docker, Docker Compose)"),l.a.createElement("li",null,"Git"),l.a.createElement("li",null,"CICD"),l.a.createElement("li",null,"Scrum"),l.a.createElement("li",null,"Frameworks - Spring, Spring Boot, Maven, Gradle, Django, Flask")))))},n}(l.a.Component);function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}y.a,E.a,k.a,b.a,y.a,E.a,k.a,b.a,k.a,b.a,k.a,b.a,k.a,b.a,k.a,b.a,k.a,b.a;var z=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(G(t)),t.gotoNext=t.gotoNext.bind(G(t)),t.gotoPrevious=t.gotoPrevious.bind(G(t)),t.openLightbox=t.openLightbox.bind(G(t)),t.handleClickImage=t.handleClickImage.bind(G(t)),t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},r.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},r.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},r.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},r.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},r.render=function(){return l.a.createElement(c.a,null,l.a.createElement(i.a,null,l.a.createElement("title",null,"Akhil"),l.a.createElement("meta",{name:"description",content:"Resume"})),l.a.createElement("div",{id:"main"},l.a.createElement("section",{id:"introduction"},l.a.createElement("header",{className:"major"},l.a.createElement("h1",null,"Hey, I am a Software Engineer at heart and a Computer Science enthusiast.",l.a.createElement("br",null))),l.a.createElement("p",null,"I am a problem solver. I believe my strongest skill is the ability to come up with pragmatic solutions for any problem you throw at me. Studying in Bangalore the tech epicenter of India, I was exposed to a rich culture of tech startups, coding meetups, and hackathons. This culture taught me that, any problem can be solved with a bit of creative and out of the box thinking."),l.a.createElement("a",{href:"https://drive.google.com/file/d/1Fil0WDGMKrpQQf1vWfvZWw2wwBH3AgYu/view?usp=sharing",target:"_blank"},"View Resume")),l.a.createElement("section",{id:"skills"},l.a.createElement(B,null)),l.a.createElement("section",{id:"experience"},l.a.createElement(p,null)),l.a.createElement("section",{id:"education"},l.a.createElement(T,null)),l.a.createElement("section",{id:"education"},l.a.createElement(O,null)),l.a.createElement("section",{id:"achivements"},l.a.createElement(j,null)),l.a.createElement("section",{id:"achivements"},l.a.createElement("div",{id:"Achievements"},l.a.createElement("h2",null,"Gallery"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"6u"},l.a.createElement("iframe",{width:"400",height:"250",src:"https://www.youtube.com/embed/Ky49BDn2_bY",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),l.a.createElement("br",null),l.a.createElement("b",null,"Keras Get Started Walkthrough:"),l.a.createElement("h5",null,"Watch me show how to do Handwritten Digit Recognition using Convolutional Neural Networks in Python with Keras and Sentiment Analysis of Movie Reviews on IMDB ")),l.a.createElement("div",{className:"6u"},l.a.createElement("iframe",{src:"https://docs.google.com/presentation/d/e/2PACX-1vTna9EcymqYHoxxrfMMqEpuPKLgkKDSYDURiAc5nJc0xbsIbDRQjqItYq8LsUCFVtxu4Vkde3oqQEt5/embed?start=true&loop=false&delayms=2000",frameborder:"0",width:"400",height:"250",allowfullscreen:"true",mozallowfullscreen:"true",webkitallowfullscreen:"true"}),l.a.createElement("br",null),l.a.createElement("b",null,l.a.createElement("a",{href:"https://docs.google.com/presentation/d/e/2PACX-1vTna9EcymqYHoxxrfMMqEpuPKLgkKDSYDURiAc5nJc0xbsIbDRQjqItYq8LsUCFVtxu4Vkde3oqQEt5/pub?start=true&loop=true&delayms=3000",target:"_blank"},"Event Driven Frameworks")),l.a.createElement("h5",null,"This session I taught was a part of the training program for incoming developers at Directi. It talks about why event driven development is more scalable and gives a brief introduction to ",l.a.createElement("a",{href:"https://kafka.apache.org/",target:"_blank"},"Apache Kafka"),". This was based on the blog written by ",l.a.createElement("a",{href:"https://martinfowler.com/articles/201701-event-driven.html",target:"_blank"},"Martin Fowler"),". Checkout the exercise on ",l.a.createElement("a",{href:"https://github.com/akhilraj95/kafka-demo"},l.a.createElement("span",{className:"icon fa-github"}))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"6u"},l.a.createElement("iframe",{width:"400",height:"250",src:"https://www.youtube.com/embed/f2xmXJjGSH4",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),l.a.createElement("br",null),l.a.createElement("b",null,"Xpense"),l.a.createElement("h5",null,"An expense manager for you team on the ",l.a.createElement("a",{href:"https://flock.com/"},"Flock Messege Service"),". The integration was developed at Flockathon, Feb 2017. This app won the runner up at the hackathon.")),l.a.createElement("div",{className:"6u"},l.a.createElement("iframe",{width:"400",height:"250",src:"https://www.youtube.com/embed/fbssmD9DFBc",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),l.a.createElement("br",null),l.a.createElement("b",null,l.a.createElement("a",{href:"https://akhilraj.dev/LogIt/?fbclid=IwAR1uAlMEgpKMo1E26ZpTuJHlwhVF95RBom0ur3IZO0NA_qrCOq63wAtuLn4"},"Logit")),l.a.createElement("h5",null,"Logit is an Android App that I developed in 2016. It lets you shoot and organize short videos, merge the short videos into one movie, add music and share it on any media."))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"6u"},l.a.createElement("img",{src:C.a,width:"400",height:"275"}),l.a.createElement("br",null),l.a.createElement("b",null,"NaturesCall"),l.a.createElement("h5",null,"This was a mobile friendly website built to find and navigate to the closest useable washroom in India. The website was easy to use. It even let you rate the washroom you used. This was developed for the DigitalOcean hack in 2016. The website is currently down because its not being actively maintained.")),l.a.createElement("div",{className:"6u"},l.a.createElement("img",{src:R.a,width:"400",height:"275"}),l.a.createElement("br",null),l.a.createElement("b",null,l.a.createElement("a",{href:"https://akhilraj.dev/LogIt/?fbclid=IwAR1uAlMEgpKMo1E26ZpTuJHlwhVF95RBom0ur3IZO0NA_qrCOq63wAtuLn4"},"RidAr")),l.a.createElement("h5",null,"Runners up at ITC infotech AR/VR hackathon. RidAR provides unobtrusive navigation for bikers, so they need not stop and check their phone for directions. Android application that relays live navigation information from HERE maps API to the Bluetooth enabled helmet. The Arduino attached to the helmet interprets the information and signals the biker on which turn to take when. "))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"6u"},l.a.createElement("img",{src:I.a,width:"400",height:"275"}),l.a.createElement("br",null),l.a.createElement("b",null,"Andarc"),l.a.createElement("h5",null,"Andarc is an Android Game that was developed on the Corona Game Engine. It was developed as a part of a game development challenge by Corona Labs. Andarc was chosen as the runner up. It is currently removed from the playstore because I am not actively maintaining it.")),l.a.createElement("div",{className:"6u"},l.a.createElement("img",{src:A.a,width:"400",height:"275"}),l.a.createElement("br",null),l.a.createElement("b",null,l.a.createElement("a",{href:"https://akhilraj.dev/LogIt/?fbclid=IwAR1uAlMEgpKMo1E26ZpTuJHlwhVF95RBom0ur3IZO0NA_qrCOq63wAtuLn4"},"Logit")),l.a.createElement("h5",null,"Screenshots of the ",l.a.createElement("a",{href:"https://akhilraj.dev/LogIt/?fbclid=IwAR1uAlMEgpKMo1E26ZpTuJHlwhVF95RBom0ur3IZO0NA_qrCOq63wAtuLn4"},"Logit")," Android App that I developed."))))),l.a.createElement("section",{id:"contact"},l.a.createElement("h2",null,"Get In Touch"),l.a.createElement("p",null,"Best way to get in touch with me is by email."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"12u 12u$(small)"},l.a.createElement("ul",{className:"labeled-icons"},l.a.createElement("li",null,l.a.createElement("h3",{className:"icon fa-envelope-o"},l.a.createElement("span",{className:"label"},"Email")),l.a.createElement("a",null,"akhil95raj@gmail.com")),l.a.createElement("li",null,l.a.createElement("h3",{className:"icon fa-envelope-o"},l.a.createElement("span",{className:"label"},"University Email")),l.a.createElement("a",null,"ara242@cornell.edu")),l.a.createElement("li",null,l.a.createElement("h3",{className:"icon fa-mobile"},l.a.createElement("span",{className:"label"},"Phone")),"(607)-319-1862"),l.a.createElement("li",null,l.a.createElement("h3",{className:"icon fa-home"},l.a.createElement("span",{className:"label"},"Address")),l.a.createElement("a",{href:"https://goo.gl/maps/rjw8jTgeJr7e5HGr9",target:"_blank"},"Ithaca, New York - 14850",l.a.createElement("br",null),"United States"))))))))},n}(l.a.Component);t.default=z},180:function(e,t,a){e.exports=a.p+"static/avatar-337d524c1f5cf8c6d18057b39777b3ec.jpg"},185:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(186);var r=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return l.a.createElement("div",{id:"footer"},l.a.createElement("div",{className:"inner"},l.a.createElement("ul",{className:"icons"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/akhilraj95",target:"_blank",className:"icon fa-github"},l.a.createElement("span",{className:"label"},"Github"))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/akhilraj95/",target:"_blank",className:"icon fa-linkedin"},l.a.createElement("span",{className:"label"},"Linkedin"))))))},n}(l.a.Component),i=a(180),c=a.n(i);var o=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return l.a.createElement("header",{id:"header"},l.a.createElement("div",{className:"inner"},l.a.createElement("a",{href:"#",className:"image avatar"},l.a.createElement("img",{src:c.a,alt:""})),l.a.createElement("h1",null,l.a.createElement("strong",null,"I am Akhil Raj Azhikodan")),l.a.createElement("p",null,"software developer ")),l.a.createElement(r,null))},n}(l.a.Component);var s=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.children;return l.a.createElement("div",null,l.a.createElement(o,null),e)},n}(l.a.Component);t.a=s},254:function(e,t,a){e.exports=a.p+"static/01-6c866ee91adf8b061eaa83d7d286f64a.jpg"},255:function(e,t,a){e.exports=a.p+"static/02-5a005bd6e50a92ebb852094e87bae405.jpg"},256:function(e,t,a){e.exports=a.p+"static/03-6c07129022e286d50d1da5af14d28045.jpg"},257:function(e,t,a){e.exports=a.p+"static/04-f91f216f6dcccc296c646ccf71110979.jpg"},258:function(e,t,a){e.exports=a.p+"static/05-b9b1fc8ff6a17498e1436ed653764b58.jpg"},259:function(e,t,a){e.exports=a.p+"static/06-46276d05380390ac1bf441cac76b8f54.jpg"},260:function(e,t,a){e.exports=a.p+"static/01-ce87a7b005c8d7be981ccd8137fcba3b.jpg"},261:function(e,t,a){e.exports=a.p+"static/02-6b930b4d9fa8b3049018335dccf73ce1.jpg"},262:function(e,t,a){e.exports=a.p+"static/03-527df6325a53113613522e648f6c2d4c.jpg"},263:function(e,t,a){e.exports=a.p+"static/04-21d06c5d186485c6e486f7745faeb5b9.jpg"},264:function(e,t,a){e.exports=a.p+"static/05-6c7ec15e9ddfe636dbd8a07070266ef5.jpg"},265:function(e,t,a){e.exports=a.p+"static/06-4bc7a84922de28318f2ec45282e1bffe.jpg"},266:function(e,t,a){e.exports=a.p+"static/andarc-64e78f21c0fedf5b65e83aa5584f07e6.png"},267:function(e,t,a){e.exports=a.p+"static/logit-00ef9b8e74c281e99f4bf790de8bca9d.png"},268:function(e,t,a){e.exports=a.p+"static/naturescall-2af4e27931425343488628e4fc8b0251.png"},269:function(e,t,a){e.exports=a.p+"static/ridar-6fe193348445e9dadd329a7b3c94bee1.png"},270:function(e,t,a){e.exports=a.p+"static/Cornell_University_seal-a57c35a82acaa38883772934093c7527.svg"},271:function(e,t,a){e.exports=a.p+"static/Ramaiah_Institutions_Logo-e999b03fc9b46ee2ee57d747cedb524f.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-032a1b083d4e7cc4a770.js.map