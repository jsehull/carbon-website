"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[78152],{28399:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(67294),o=n(88650),i=n.n(o),r=n(1597),l=n(80304),s=n(94656),d=n(75900),c=n.n(d);var m=e=>{let{title:t,theme:n,tabs:o=[]}=e;return a.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:o}}}=(0,r.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:l,branch:s}=n||o,d=`${i}/edit/${s}${l}/src/pages${t}`;return i?a.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},h=n(56328),u=n(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,o=n.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=i()(e,{lower:!0,strict:!0}),l=t===o,s=new RegExp(`${o}/?(#.*)?$`),d=n.replace(s,t);return a.createElement("li",{key:e,className:c()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},a.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:`${d}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(a.Component);var y=g,k=n(17680),f=n(75387),v=n(50041);var b=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(v.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(v.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:n,location:o,Title:d}=e;const{frontmatter:c={},relativePagePath:u,titleType:g}=t,{tabs:v,title:w,theme:D,description:x,keywords:T,date:N}=c,{interiorTheme:E}=(0,f.Z)(),{site:{pathPrefix:P}}=(0,r.useStaticQuery)("2456312558"),C=P?o.pathname.replace(P,""):o.pathname,I=v?C.split("/").filter(Boolean).slice(-1)[0]||i()(v[0],{lower:!0}):"",R=D||E;return a.createElement(s.Z,{tabs:v,homepage:!1,theme:R,pageTitle:w,pageDescription:x,pageKeywords:T,titleType:g},a.createElement(m,{title:d?a.createElement(d,null):w,label:"label",tabs:v,theme:R}),v&&a.createElement(y,{title:w,slug:C,tabs:v,currentTab:I}),a.createElement(k.Z,{padded:!0},n,a.createElement(p,{relativePagePath:u}),a.createElement(b,{date:N})),a.createElement(h.Z,{pageContext:t,location:o,slug:C,tabs:v,currentTab:I}),a.createElement(l.Z,null))}},62738:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return y}});var a=n(45987),o=(n(67294),n(64983)),i=n(28399);const r=["components"],l={},s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},d=s("AnchorLinks"),c=s("AnchorLink"),m=s("DoDontRow"),p=s("DoDont"),h=s("Video"),u={_frontmatter:l},g=i.Z;function y(e){let{components:t}=e,n=(0,a.Z)(e,r);return(0,o.kt)(g,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(d,{mdxType:"AnchorLinks"},(0,o.kt)(c,{mdxType:"AnchorLink"},"Paths"),(0,o.kt)(c,{mdxType:"AnchorLink"},"Composition")),(0,o.kt)("h2",null,"Paths"),(0,o.kt)("p",null,"Elements in Carbon dance on the grid. Motion paths trace lines along the grid\nwhich never run diagonally."),(0,o.kt)(m,{mdxType:"DoDontRow"},(0,o.kt)(p,{type:"do",colLg:12,colMd:8,caption:"When expanding or moving elements across the screen, stagger the timing of horizontal and vertical animations to create a path with a rounded corner.",mdxType:"DoDont"},(0,o.kt)(h,{title:"Paths staggering horizontally",vimeoId:"310582887",mdxType:"Video"}))),(0,o.kt)("br",null),(0,o.kt)(m,{mdxType:"DoDontRow"},(0,o.kt)(p,{colLg:12,colMd:8,type:"dont",caption:"Not staggering horizontal and vertical animations create a straight diagonal path. It breaks the grid and is harsh to the eye.",mdxType:"DoDont"},(0,o.kt)(h,{title:"Paths not staggering horizontally",vimeoId:"310582699",mdxType:"Video"}))),(0,o.kt)("br",null),(0,o.kt)(m,{mdxType:"DoDontRow"},(0,o.kt)(p,{type:"do",aspectRatio:"1:1",caption:"When removing an item from the grid, thumbnails on the edge existing and re-entering container create a smooth transition.",mdxType:"DoDont"},(0,o.kt)(h,{title:"Thumbnails with smooth transition",vimeoId:"310582738",mdxType:"Video"})),(0,o.kt)(p,{type:"dont",aspectRatio:"1:1",caption:"Thumbnails moving on diagonal paths feels sporadic and harsh.",mdxType:"DoDont"},(0,o.kt)(h,{title:"Thumbnails with sporadic transition",vimeoId:"310582775",mdxType:"Video"}))),(0,o.kt)(m,{mdxType:"DoDontRow"},(0,o.kt)(p,{type:"do",aspectRatio:"1:1",caption:"When sorting or shuffling items on the grid, always using rounded corner paths to visually organize the movements.",mdxType:"DoDont"},(0,o.kt)(h,{title:"organized sort and shuffle",vimeoId:"310582816",mdxType:"Video"})),(0,o.kt)(p,{type:"dont",aspectRatio:"1:1",caption:"Criss cross sorting appears disorganized. Avoid this motion path.",mdxType:"DoDont"},(0,o.kt)(h,{title:"disorganized criss crossing",vimeoId:"310582851",mdxType:"Video"}))),(0,o.kt)("h2",null,"Composition"),(0,o.kt)("p",null,"When multiple animated elements coexist or interact with each other within the\nsame view, it is vital to make the many moving elements work together and form a\ncoherent experience, to better provide way-finding and focus."),(0,o.kt)("h3",null,"Consistency"),(0,o.kt)("h4",null,"Semantic consistency"),(0,o.kt)("p",null,"When elements convey the same meaning or perform the same function, use the same\nmotion for them, and vice-versa. This helps to reinforce the meaning behind a\nmovement and improves the user’s proficiency using the interface."),(0,o.kt)("p",null,"In the example below, both expanding a row of a data table and opening a\ndropdown use a chevron and share a similar intent—to reveal content hidden in a\nseam. Therefore, they should use the same motion style (productive) and easing\n(entrance, standard). However, they should use slightly different durations due\nto their difference in size."),(0,o.kt)(m,{mdxType:"DoDontRow"},(0,o.kt)(p,{type:"do",colLg:12,colMd:8,caption:"Comparing data table expansion and dropdown",mdxType:"DoDont"},(0,o.kt)(h,{title:"Semantic consistency",vimeoId:"310581970",mdxType:"Video"}))),(0,o.kt)("h4",null,"Spatial consistency"),(0,o.kt)("p",null,"Pay attention to the spatial relationships between elements and screens, and\ninformation hierarchy. Visually similar elements may need the different motions\nto clarify their respective spatial locations."),(0,o.kt)(m,{mdxType:"DoDontRow"},(0,o.kt)(p,{type:"do",colLg:12,colMd:8,caption:"When the new content panel is on a higher layer, motion is “sliding”, moving content within with the panel.  Also always dim the content below when new layer is introduced above.",mdxType:"DoDont"},(0,o.kt)(h,{title:"Spatial consistency",vimeoId:"310581999",mdxType:"Video"}))),(0,o.kt)(m,{mdxType:"DoDontRow"},(0,o.kt)(p,{type:"do",colLg:12,colMd:8,caption:"When the new content panel is on the same layer, motion is “pushing”, revealing content within with a mask.",mdxType:"DoDont"},(0,o.kt)(h,{title:"new content panel",vimeoId:"310582064",mdxType:"Video"}))),(0,o.kt)("h4",null,"Intentional inconsistency"),(0,o.kt)("p",null,"Conscientious use of inconsistency in motion highlights a difference in meaning\nor intent behind actions with similar visual appearance. Usually, forward motion\nin the direction of entrance signals affirmation, while reversing entrance\nmotion signals cancellation."),(0,o.kt)(m,{mdxType:"DoDontRow"},(0,o.kt)(p,{type:"do",aspectRatio:"1:1",caption:"Use motion to reinforce meaning. Affirmative action here triggers a different exit motion for the modal than negation.",mdxType:"DoDont"},(0,o.kt)(h,{title:"Intentional inconsistency",vimeoId:"310582134",mdxType:"Video"})),(0,o.kt)(p,{type:"dont",aspectRatio:"1:1",mdxType:"DoDont"},(0,o.kt)(h,{title:"incorrect intentional inconsistency",vimeoId:"310582167",mdxType:"Video"}))),(0,o.kt)("h3",null,"Continuity"),(0,o.kt)("p",null,"Motion can help establish a sense of continuity between screens and experiences.\nPay attention to shared elements across screens, such as title panels or\nbuttons, to create a graceful transition."),(0,o.kt)(m,{mdxType:"DoDontRow"},(0,o.kt)(p,{type:"do",colLg:12,colMd:8,caption:"Shared elements can effectively guide users through a multi-layered information architecture.",mdxType:"DoDont"},(0,o.kt)(h,{title:"Continuity",vimeoId:"310582206",mdxType:"Video"}))),(0,o.kt)(m,{mdxType:"DoDontRow"},(0,o.kt)(p,{colLg:12,colMd:8,type:"dont",caption:"Continuous elements are for guidance and should not distract. Always finish a sequence with the important content on page.",mdxType:"DoDont"},(0,o.kt)(h,{title:"Continuity should not distract",vimeoId:"310582279",mdxType:"Video"}))),(0,o.kt)("h3",null,"Sequence and stagger"),(0,o.kt)("p",null,"When multiple elements need to animate, distribute their entrances over time\ninstead of introducing everything at once. This will help the user understand\nthe content and orientation."),(0,o.kt)("p",null,"For example, staggering the entrance of table content by 20 ms significantly\nreduces the cognitive load. Depending on the number of staggered elements, the\ndelay should be adjusted to ensure that total time is still within 500 ms."),(0,o.kt)(m,{mdxType:"DoDontRow"},(0,o.kt)(p,{type:"do",colLg:12,colMd:8,caption:"Table with rows loading in at staggered timing.",mdxType:"DoDont"},(0,o.kt)(h,{title:"Sequence and stagger",vimeoId:"310582972",mdxType:"Video"}))),(0,o.kt)("p",null,"Sequence the loading of page content when possible. Start with the most stable\ncontent, such as static content and header, and end with the most important\ninformation, such as the primary button or a calculation result, to focus the\nuser’s attention on them."),(0,o.kt)(m,{mdxType:"DoDontRow"},(0,o.kt)(p,{type:"do",colLg:12,colMd:8,caption:"Sequencing of this interface prioritizes the primary button, and reserves data visualization for later when users begin to scroll, indicating intention to dive deeper.",mdxType:"DoDont"},(0,o.kt)(h,{title:"Sequencing",vimeoId:"310582919",mdxType:"Video"}))),(0,o.kt)("p",null,"Follow this recommended sequence of different types of content when\nchoreographing content entrance. Not all categories will be present in every\nexperience."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Seq"),(0,o.kt)("th",{parentName:"tr",align:null},"Category"),(0,o.kt)("th",{parentName:"tr",align:null},"Examples"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"Static content"),(0,o.kt)("td",{parentName:"tr",align:null},"UI shell, top and side navigation")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2"),(0,o.kt)("td",{parentName:"tr",align:null},"Static content (body)"),(0,o.kt)("td",{parentName:"tr",align:null},"Headers, written content, images")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null},"Dynamic content"),(0,o.kt)("td",{parentName:"tr",align:null},"Content of a data table, query results from database")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4"),(0,o.kt)("td",{parentName:"tr",align:null},"Primary action"),(0,o.kt)("td",{parentName:"tr",align:null},"Primary action button")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"5"),(0,o.kt)("td",{parentName:"tr",align:null},"Animated content"),(0,o.kt)("td",{parentName:"tr",align:null},"Data visualizations")))))}y.isMDXComponent=!0}}]);