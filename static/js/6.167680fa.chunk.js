(this["webpackJsonpproject-dashboard"]=this["webpackJsonpproject-dashboard"]||[]).push([[6],{1106:function(e,t,a){"use strict";a.r(t);var i=a(22),n=a(0),c=a.n(n),r=a(861),s=a(870),o=a(807),l=a(147),d=a(854),m=a(882),u=(a(267),a(148)),p=(a(56),a(898)),g=a.n(p),f=Object(r.a)((function(e){return{root:{paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},header:{marginBottom:e.spacing(3)},filter:{marginTop:e.spacing(3)},results:{marginTop:e.spacing(6)},empty:{paddingTop:e.spacing(10),paddingLeft:e.spacing(40)},noFav:{paddingLeft:e.spacing(25)}}}));t.default=function(){var e=Object(n.useContext)(u.a).favorites,t=f(),a=Object(n.useState)("grid"),r=Object(i.a)(a,1)[0];return null==e||0==e.length?c.a.createElement(l.a,{className:t.root,title:"DRDP - Favorites"},c.a.createElement(s.a,{maxWidth:"lg"},c.a.createElement("div",{className:t.empty},c.a.createElement("img",{src:g.a,height:"400"}),c.a.createElement(o.a,{className:t.noFav,gutterBottom:!0,variant:"subtitle1"},"Empty")))):(console.log(e.length),c.a.createElement(l.a,{className:t.root,title:"DRDP - Favorites"},c.a.createElement(s.a,{maxWidth:"lg"},c.a.createElement(d.a,{container:!0,spacing:1},e.map((function(e){return c.a.createElement(d.a,{item:!0,md:"grid"===r?4:12,sm:"grid"===r?6:12,xs:12},c.a.createElement(m.a,{title:e.title,desc:e.desc,img:e.img}))}))))))}},870:function(e,t,a){"use strict";var i=a(1),n=a(3),c=a(45),r=a(0),s=(a(5),a(4)),o=a(6),l=a(7),d=r.forwardRef((function(e,t){var a=e.classes,c=e.className,o=e.component,d=void 0===o?"div":o,m=e.disableGutters,u=void 0!==m&&m,p=e.fixed,g=void 0!==p&&p,f=e.maxWidth,b=void 0===f?"lg":f,h=Object(n.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return r.createElement(d,Object(i.a)({className:Object(s.a)(a.root,c,g&&a.fixed,u&&a.disableGutters,!1!==b&&a["maxWidth".concat(Object(l.a)(String(b)))]),ref:t},h))}));t.a=Object(o.a)((function(e){return{root:Object(c.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var i=e.breakpoints.values[a];return 0!==i&&(t[e.breakpoints.up(a)]={maxWidth:i}),t}),{}),maxWidthXs:Object(c.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(c.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(c.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(c.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(c.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)},882:function(e,t,a){"use strict";a.d(t,"a",(function(){return k}));var i,n=a(277),c=a(22),r=a(0),s=a.n(r),o=a(906),l=a(855),d=a(976),m=a(856),u=a(977),p=a(807),g=a(39),f=a(273),b=a.n(f),h=a(883),v=a.n(h),j=a(854),O=(a(267),a(148)),x=a(56),E=Object(o.a)((function(e){return{root:{maxWidth:345,margin:e.spacing(1),marginTop:e.spacing(2)},media:{height:140}}}));function k(e){var t=Object(r.useContext)(O.a),a=(t.state,t.favorites),o=t.actions,f=E(),h=Object(r.useState)(!1),k=Object(c.a)(h,2),y=k[0],N=k[1];Object(r.useEffect)((function(){if(null!=a)for(var t=0;t<a.length;t++)e.desc==a[t].desc&&N(!0)}),[y]);var W=function(t){if(null==a)o({type:"setFavorites",payload:[e]}),x.a.collection("favorites").doc(e.title).set({desc:e.desc,title:e.title,img:e.img});else{var i,c=[];(i=c).push.apply(i,Object(n.a)(a));for(var r=!1,s=0;s<c.length;s++)if(c[s].desc==e.desc){r=!0,c=c.filter((function(t){return t.desc!=e.desc}));break}if(0==r&&(c.push(e),o({type:"setFavorites",payload:c}),x.a.collection("favorites").doc(e.title).set({desc:e.desc,title:e.title,img:e.img})),1==r)o({type:"setFavorites",payload:c}),x.a.collection("favorites").where("desc","==",e.desc).get().then((function(e){e.forEach((function(e){e.ref.delete()}))}))}N(!y)};return i=y?s.a.createElement(v.a,{onClick:W,style:{color:"#bd574e",cursor:"pointer"}}):s.a.createElement(b.a,{onClick:W,style:{cursor:"pointer"}}),s.a.createElement(l.a,{className:f.root},s.a.createElement(d.a,{to:e.link,component:g.a},s.a.createElement(u.a,{className:f.media},s.a.createElement("img",{src:e.img,height:"150",width:"345",alt:"card"}))),s.a.createElement(m.a,null,s.a.createElement(j.a,{container:!0,justify:"space-between"},s.a.createElement(j.a,{item:!0},s.a.createElement(p.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),s.a.createElement(p.a,{variant:"body2",color:"textSecondary",component:"p"},e.desc)),s.a.createElement(j.a,{item:!0},i))))}},883:function(e,t,a){"use strict";var i=a(60);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),c=(0,i(a(65)).default)(n.default.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");t.default=c},898:function(e,t,a){e.exports=a.p+"static/media/empty.f2f20d0c.svg"},906:function(e,t,a){"use strict";var i=a(1),n=a(861),c=a(149);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(n.a)(e,Object(i.a)({defaultTheme:c.a},t))}},976:function(e,t,a){"use strict";var i=a(1),n=a(3),c=a(0),r=(a(5),a(4)),s=a(6),o=a(257),l=c.forwardRef((function(e,t){var a=e.children,s=e.classes,l=e.className,d=e.focusVisibleClassName,m=Object(n.a)(e,["children","classes","className","focusVisibleClassName"]);return c.createElement(o.a,Object(i.a)({className:Object(r.a)(s.root,l),focusVisibleClassName:Object(r.a)(d,s.focusVisible),ref:t},m),a,c.createElement("span",{className:s.focusHighlight}))}));t.a=Object(s.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(l)},977:function(e,t,a){"use strict";var i=a(1),n=a(3),c=a(0),r=(a(5),a(4)),s=a(6),o=["video","audio","picture","iframe","img"],l=c.forwardRef((function(e,t){var a=e.children,s=e.classes,l=e.className,d=e.component,m=void 0===d?"div":d,u=e.image,p=e.src,g=e.style,f=Object(n.a)(e,["children","classes","className","component","image","src","style"]),b=-1!==o.indexOf(m),h=!b&&u?Object(i.a)({backgroundImage:'url("'.concat(u,'")')},g):g;return c.createElement(m,Object(i.a)({className:Object(r.a)(s.root,l,b&&s.media,-1!=="picture img".indexOf(m)&&s.img),ref:t,style:h,src:b?u||p:void 0},f),a)}));t.a=Object(s.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(l)}}]);
//# sourceMappingURL=6.167680fa.chunk.js.map