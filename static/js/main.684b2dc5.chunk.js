(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{25:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(2),i=n.n(a),c=n(13),r=n.n(c),o=(n(25),n(4)),l=n.n(o),m=n(14),u=n(15),d=n(16),j=n(19),v=n(18),h=n(17),p=n.n(h);n(45);var b=function(e){var t=e.year,n=e.title,a=e.summary,i=e.poster,c=e.genres;return Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)("img",{src:i,alt:n,title:n}),Object(s.jsxs)("div",{className:"movie__data",children:[Object(s.jsx)("h3",{className:"movie__title",children:n}),Object(s.jsx)("h5",{className:"movie__year",children:t}),Object(s.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(s.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(s.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]})]})]})},g=(n(46),function(e){Object(j.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(l.a.mark((function t(){var n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(s.jsx)("section",{className:"container",children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(s.jsx)("div",{className:"movies",children:n.map((function(e){return Object(s.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(i.a.Component)),_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root")),_()}},[[47,1,2]]]);
//# sourceMappingURL=main.684b2dc5.chunk.js.map