(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{191:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(69),r=a.n(c),s=(a(79),a(39)),o=a(11),i=(a(29),a(1)),m=a(10),u=a.n(m);var E=function(e){return e.c,l.a.createElement("div",{className:"Header"},l.a.createElement("div",{className:"menuNav"},l.a.createElement("a",{href:"/"},l.a.createElement("div",{className:"menuButton"},l.a.createElement("img",{alt:"world",height:"24",width:"auto",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/420px-Globe_icon.svg.png"}),l.a.createElement("p",null,l.a.createElement("strong",null,"World")))),l.a.createElement("a",{href:"/country/?country=USA"},l.a.createElement("div",{className:"menuButton"},l.a.createElement("img",{alt:"us",src:"https://www.countryflags.io/US/flat/32.png"}),l.a.createElement("p",null,l.a.createElement("strong",null,"USA")))),l.a.createElement("a",{href:"/country/?country=Brazil"},l.a.createElement("div",{className:"menuButton"},l.a.createElement("img",{alt:"br",src:"https://www.countryflags.io/BR/flat/32.png"}),l.a.createElement("p",null,l.a.createElement("strong",null,"Brazil")))),l.a.createElement("a",{href:"/country/?country=Russia"},l.a.createElement("div",{className:"menuButton"},l.a.createElement("img",{alt:"ru",src:"https://www.countryflags.io/RU/flat/32.png"}),l.a.createElement("p",null,l.a.createElement("strong",null,"Russia")))),l.a.createElement("a",{href:"/country/?country=India"},l.a.createElement("div",{className:"menuButton"},l.a.createElement("img",{alt:"in",src:"https://www.countryflags.io/IN/flat/32.png"}),l.a.createElement("p",null,l.a.createElement("strong",null,"India")))),l.a.createElement("a",{href:"/country/?country=UK"},l.a.createElement("div",{className:"menuButton"},l.a.createElement("img",{alt:"gb",src:"https://www.countryflags.io/GB/flat/32.png"}),l.a.createElement("p",null,l.a.createElement("strong",null,"UK")))),l.a.createElement("a",{href:"/news"},l.a.createElement("div",{className:"menuButton"},l.a.createElement("p",null,l.a.createElement("strong",null,"News"))))))},d=a(70);var p=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(i.a)(r,2),o=s[0],m=s[1],E=Object(n.useState)([]),p=Object(i.a)(E,2),g=p[0],v=p[1];Object(n.useEffect)((function(){a&&u.a.get("https://coronavirus-19-api.herokuapp.com/countries").then((function(e){c(e.data)}))}),[a]),Object(n.useEffect)((function(){if(o){var e=[],t=[];a.map((function(a){e.push(a.country),t.push(a.cases)})),m(e),v(t),console.log("values",a,g)}}),[o]);var f={labels:o.slice(1,17),datasets:[{label:"Cases",backgroundColor:"rgba(125,125,125)",borderColor:"rgba(125,125,125)",borderWidth:0,data:g.slice(1,17)}]};return l.a.createElement("div",null,l.a.createElement(d.a,{data:f,options:{title:{display:!0,text:"COVID-19 Cases in Most Affected Countries",fontSize:18},legend:{display:!0,position:"right"}}}))};var g=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),o=s[0],m=s[1],d=Object(n.useState)(""),g=Object(i.a)(d,2),v=g[0],f=g[1],h=Object(n.useState)(""),b=Object(i.a)(h,2),w=b[0],N=b[1],O=Object(n.useState)(""),j=Object(i.a)(O,2),C=j[0],y=j[1],S=Object(n.useState)(""),x=Object(i.a)(S,2),R=x[0],T=x[1],M=Object(n.useState)(""),k=Object(i.a)(M,2),A=k[0],I=k[1],B=Object(n.useState)(""),D=Object(i.a)(B,2),L=D[0],U=D[1];return Object(n.useEffect)((function(){u.a.get("https://coronavirus-19-api.herokuapp.com/countries/world").then((function(e){c(e.data)})).catch((function(e){console.log(e)}))})),Object(n.useEffect)((function(){a&&(m(a.cases),f(a.todayCases),N(a.deaths),y(a.todayDeaths),T(a.recovered),I(a.active),U(a.critical))}),[a]),l.a.createElement("div",{className:"dataContainer"},l.a.createElement(E,null),l.a.createElement("div",{className:"sectionContainerMain"},l.a.createElement("p",null,l.a.createElement("strong",null,"COVID-19 in the World"))),l.a.createElement("div",{className:"sectionContainer"},l.a.createElement("div",{className:"infoRowContainer"},l.a.createElement("div",{className:"infoRowMain"},l.a.createElement("div",{className:"infoColumn"},l.a.createElement("p",null,l.a.createElement("strong",null,"Confirmed:")),l.a.createElement("p",null,l.a.createElement("strong",null,"Deaths:")),l.a.createElement("p",null,l.a.createElement("strong",null,"Recovered:"))),l.a.createElement("div",{className:"infoColumn2"},l.a.createElement("div",{className:"infoRow"},l.a.createElement("p",null,l.a.createElement("strong",null,o))),l.a.createElement("div",{className:"infoRow"},l.a.createElement("p",null,l.a.createElement("span",{className:"redText"},l.a.createElement("strong",null,w)))),l.a.createElement("div",{className:"infoRow"},l.a.createElement("p",null,l.a.createElement("span",{className:"greenText"},l.a.createElement("strong",null,R)))))),l.a.createElement("div",{className:"infoColumnArrows"},l.a.createElement("div",{className:"infoRowArrows"},l.a.createElement("img",{height:"10px",width:"14px",src:"./black-arrow.png"}),l.a.createElement("p",null,l.a.createElement("span",{class:"smallText"},v," Today"))),l.a.createElement("div",{className:"infoRowArrows"},l.a.createElement("img",{height:"10px",width:"14px",src:"./red-arrow.png"}),l.a.createElement("p",null,l.a.createElement("span",{class:"smallRedText"},C," Today")))))),l.a.createElement("div",{className:"sectionContainer"},l.a.createElement("div",{className:"infoRowMain"},l.a.createElement("div",{className:"infoColumn"},l.a.createElement("p",null,l.a.createElement("strong",null,"Active:")),l.a.createElement("p",null,l.a.createElement("strong",null,"Critical:"))),l.a.createElement("div",{className:"infoColumn2"},l.a.createElement("p",null,l.a.createElement("strong",null,A)),l.a.createElement("p",null,l.a.createElement("strong",null,L))))),l.a.createElement("div",{className:"chartContainer"},l.a.createElement(p,null)))},v=a(24),f=a(25),h=a(26),b=a(27);var w=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),s=Object(i.a)(r,2),m=s[0],d=s[1],p=Object(n.useState)(""),g=Object(i.a)(p,2),w=g[0],N=g[1],O=Object(n.useState)(""),j=Object(i.a)(O,2),C=j[0],y=j[1],S=Object(n.useState)(""),x=Object(i.a)(S,2),R=x[0],T=x[1],M=Object(n.useState)(""),k=Object(i.a)(M,2),A=k[0],I=k[1],B=Object(n.useState)(""),D=Object(i.a)(B,2),L=D[0],U=D[1],P=Object(n.useState)(""),W=Object(i.a)(P,2),K=W[0],V=W[1],_=Object(n.useState)(""),z=Object(i.a)(_,2),G=z[0],q=z[1],F=Object(n.useState)(""),H=Object(i.a)(F,2),J=H[0],$=H[1],Q=Object(n.useState)(""),X=Object(i.a)(Q,2),Y=X[0],Z=X[1],ee=Object(n.useState)(""),te=Object(i.a)(ee,2),ae=te[0],ne=te[1],le=Object(n.useState)(""),ce=Object(i.a)(le,2),re=ce[0],se=ce[1],oe=Object(o.f)(),ie=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={news:[],isLoading:!0,errors:null},e}return Object(f.a)(a,[{key:"getNewsCountry",value:function(){var e=this;u.a.get("https://newsapi.org/v2/everything?q=".concat(m,"%20AND%20coronavirus&apiKey=407c0529551e4f43a30236fab2be4290")).then((function(e){return e.data.articles.map((function(e){return{id:"".concat(e.source.id),title:"".concat(e.title),author:"".concat(e.author),description:"".concat(e.description),url:"".concat(e.url),urlToImage:"".concat(e.urlToImage),publishedAt:"".concat(e.publishedAt)}}))})).then((function(t){e.setState({news:t,isLoading:!1})})).catch((function(t){return e.setState({error:t,isLoading:!1})}))}},{key:"componentDidMount",value:function(){this.getNewsCountry()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.news;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,t?l.a.createElement("p",null,"Loading..."):a.map((function(e){var t=e.id,a=e.title,n=e.author,c=e.description,r=e.url,s=e.urlToImage,o=e.publishedAt;return l.a.createElement("div",{className:"newsContainer"},l.a.createElement("div",{className:"newsCard",key:t},l.a.createElement("div",{className:"newsRow"},l.a.createElement("div",{className:"newsImageContainer"},l.a.createElement("img",{width:"400px",height:"260px",src:s})),l.a.createElement("div",{className:"newsTextContainer"},l.a.createElement("h2",null,a),l.a.createElement("div",{className:"menuSmallText"},l.a.createElement("p",null,n," \u2022 Published ",o)),l.a.createElement("div",{className:"menuMedText"},l.a.createElement("p",null,c)),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:r},"Read More")))))}))))}}]),a}(l.a.Component);return Object(n.useEffect)((function(){var e=oe.location.search,t=new URLSearchParams(e).get("country");d(t||"USA")}),[oe]),Object(n.useEffect)((function(){m&&u.a.get("https://coronavirus-19-api.herokuapp.com/countries/".concat(m)).then((function(e){c(e.data)})).catch((function(e){console.log(e)}))}),[m]),Object(n.useEffect)((function(){a&&(N(a.cases),y(a.todayCases),T(a.deaths),I(a.todayDeaths),U(a.recovered),V(a.active),q(a.critical),$(a.casesPerOneMillion),Z(a.deathsPerOneMillion),ne(a.totalTests),se(a.testsPerOneMillion))}),[a]),l.a.createElement("div",{className:"dataContainer"},l.a.createElement(E,null),l.a.createElement("div",{className:"sectionContainerMain"},l.a.createElement("p",null,l.a.createElement("strong",null,"COVID-19 in ",m))),l.a.createElement("div",{className:"sectionContainer"},l.a.createElement("div",{className:"infoRowContainer"},l.a.createElement("div",{className:"infoRowMain"},l.a.createElement("div",{className:"infoColumn"},l.a.createElement("p",null,l.a.createElement("strong",null,"Confirmed:")),l.a.createElement("p",null,l.a.createElement("strong",null,"Deaths:")),l.a.createElement("p",null,l.a.createElement("strong",null,"Recovered:"))),l.a.createElement("div",{className:"infoColumn2"},l.a.createElement("div",{className:"infoRow"},l.a.createElement("p",null,l.a.createElement("strong",null,w))),l.a.createElement("div",{className:"infoRow"},l.a.createElement("p",null,l.a.createElement("span",{className:"redText"},l.a.createElement("strong",null,R)))),l.a.createElement("div",{className:"infoRow"},l.a.createElement("p",null,l.a.createElement("span",{className:"greenText"},l.a.createElement("strong",null,L)))))),l.a.createElement("div",{className:"infoColumnArrows"},l.a.createElement("div",{className:"infoRowArrows"},l.a.createElement("img",{height:"10px",width:"14px",src:"/black-arrow.png"}),l.a.createElement("p",null,l.a.createElement("span",{class:"smallText"},C," Today"))),l.a.createElement("div",{className:"infoRowArrows"},l.a.createElement("img",{height:"10px",width:"14px",src:"/red-arrow.png"}),l.a.createElement("p",null,l.a.createElement("span",{class:"smallRedText"},A," Today")))))),l.a.createElement("div",{className:"sectionContainer"},l.a.createElement("div",{className:"infoRowMain"},l.a.createElement("div",{className:"infoColumn"},l.a.createElement("p",null,l.a.createElement("strong",null,"Active:")),l.a.createElement("p",null,l.a.createElement("strong",null,"Critical:"))),l.a.createElement("div",{className:"infoColumn2"},l.a.createElement("p",null,l.a.createElement("strong",null,K)),l.a.createElement("p",null,l.a.createElement("strong",null,G))))),l.a.createElement("div",{className:"sectionContainer"},l.a.createElement("div",{className:"infoRowMain"},l.a.createElement("div",{className:"infoColumn"},l.a.createElement("p",null,l.a.createElement("strong",null,"Cases per One Million:")),l.a.createElement("p",null,l.a.createElement("strong",null,"Deaths per One Million:"))),l.a.createElement("div",{className:"infoColumn2"},l.a.createElement("p",null,l.a.createElement("strong",null,J)),l.a.createElement("p",null,l.a.createElement("strong",null,Y))))),l.a.createElement("div",{className:"sectionContainer"},l.a.createElement("div",{className:"infoRowMain"},l.a.createElement("div",{className:"infoColumn"},l.a.createElement("p",null,l.a.createElement("strong",null,"Total Tests:")),l.a.createElement("p",null,l.a.createElement("strong",null,"Tests per One Million:"))),l.a.createElement("div",{className:"infoColumn2"},l.a.createElement("p",null,l.a.createElement("strong",null,ae)),l.a.createElement("p",null,l.a.createElement("strong",null,re))))),l.a.createElement(ie,null))},N=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={news:[],isLoading:!0,errors:null},e}return Object(f.a)(a,[{key:"getNews",value:function(){var e=this;u.a.get("https://newsapi.org/v2/top-headlines?country=us&q=coronavirus&apiKey=407c0529551e4f43a30236fab2be4290").then((function(e){return e.data.articles.map((function(e){return{id:"".concat(e.source.id),title:"".concat(e.title),author:"".concat(e.author),description:"".concat(e.description),url:"".concat(e.url),urlToImage:"".concat(e.urlToImage),publishedAt:"".concat(e.publishedAt)}}))})).then((function(t){e.setState({news:t,isLoading:!1})})).catch((function(t){return e.setState({error:t,isLoading:!1})}))}},{key:"componentDidMount",value:function(){this.getNews()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.news;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,t?l.a.createElement("p",null,"Loading..."):a.map((function(e){var t=e.id,a=e.title,n=e.author,c=e.description,r=e.url,s=e.urlToImage,o=e.publishedAt;return l.a.createElement("div",{className:"newsContainer"},l.a.createElement("div",{className:"newsCard",key:t},l.a.createElement("div",{className:"newsRow"},l.a.createElement("div",{className:"newsImageContainer"},l.a.createElement("img",{width:"400px",height:"260px",src:s})),l.a.createElement("div",{className:"newsTextContainer"},l.a.createElement("h2",null,a),l.a.createElement("div",{className:"menuSmallText"},l.a.createElement("p",null,n," \u2022 Published ",o)),l.a.createElement("div",{className:"menuMedText"},l.a.createElement("p",null,c)),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:r},"Read More")))))}))))}}]),a}(l.a.Component);var O=function(){return l.a.createElement("div",{className:"dataContainer"},l.a.createElement(E,null),l.a.createElement("div",{className:"sectionContainerMain"},l.a.createElement("p",null,l.a.createElement("strong",null,"COVID-19 Top Headlines"))),l.a.createElement(N,null))};var j=function(){return l.a.createElement(s.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{to:!0,exact:!0,path:"/"},l.a.createElement(g,null)),l.a.createElement(o.a,{to:!0,exact:!0,path:"/news"},l.a.createElement(O,null)),l.a.createElement(o.a,{to:!0,exact:!0,path:"/country"},l.a.createElement(w,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,a){},74:function(e,t,a){e.exports=a(191)},79:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.8601f9f0.chunk.js.map