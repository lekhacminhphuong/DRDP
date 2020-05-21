(this["webpackJsonpproject-dashboard"]=this["webpackJsonpproject-dashboard"]||[]).push([[1],{147:function(e,t,a){"use strict";var n=a(46),r=a(0),o=a.n(r),i=a(187),l=a(21),c=Object({NODE_ENV:"production",PUBLIC_URL:"/DRDP",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}),s=c.NODE_ENV,u=c.REACT_APP_GA_MEASUREMENT_ID;t.a=function(e){var t=e.title,a=e.children,c=Object(n.a)(e,["title","children"]),d=Object(l.h)();return Object(r.useEffect)((function(){"production"===s&&window.gtag&&window.gtag("config",u,{page_path:d.pathname,page_name:t})}),[]),o.a.createElement("div",c,o.a.createElement(i.Helmet,null,o.a.createElement("title",null,t)),a)}},148:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)({});t.a=r},267:function(e,t,a){"use strict";var n=a(22),r=a(0);t.a=function(){var e=Object(r.useState)(null),t=Object(n.a)(e,2),a=t[0],o=t[1],i=Object(r.useState)(null),l=Object(n.a)(i,2),c=l[0],s=l[1],u=Object(r.useState)({}),d=Object(n.a)(u,2),m=d[0],p=d[1],g=Object(r.useState)(null),b=Object(n.a)(g,2),f=b[0],h=b[1];return{state:a,favorites:c,report:m,submission:f,actions:function(e){var t=e.type,n=e.payload;switch(t){case"setState":return o(n);case"setFavorites":return s(n);case"setReport":return p(n);case"setSubmission":return h(n);default:return a}}}}},418:function(e,t,a){"use strict";var n=a(452),r=a.n(n).a.create();t.a=r},453:function(e,t,a){e.exports=a.p+"static/media/logo.3c4a6c90.png"},460:function(e,t,a){e.exports=a.p+"static/media/login_image.bb8dca17.png"},463:function(e,t,a){"use strict";a.r(t);var n=a(30),r=a(0),o=a.n(r),i=a(39),l=a(861),c=a(855),s=a(856),u=a(807),d=a(843),m=a(845),p=a(461),g=a.n(p),b=a(9),f=function(e,t){return"linear-gradient(180deg, ".concat(e," 0%, ").concat(t," 100%)")},h={grey:f(b.a.grey[400],b.a.grey[600]),blue:f(b.a.blue[700],b.a.blue[900]),indigo:f(b.a.indigo[400],b.a.indigo[600]),green:f(b.a.green[400],b.a.green[600]),orange:f(b.a.orange[400],b.a.orange[700]),red:f(b.a.red[500],b.a.red[700])},v=a(147),E=a(29),y=a(22),x=a(46),O=a(21),j=a(95),w=a.n(j),S=a(4),k=a(853),C=a(862),N=a(820),T=a(840),L={firstName:{presence:{allowEmpty:!1,message:"is required"},length:{maximum:32}},lastName:{presence:{allowEmpty:!1,message:"is required"},length:{maximum:32}},email:{presence:{allowEmpty:!1,message:"is required"},email:!0,length:{maximum:64}},password:{presence:{allowEmpty:!1,message:"is required"},length:{maximum:128}},policy:{presence:{allowEmpty:!1,message:"is required"},checked:!0}},M=Object(l.a)((function(e){return{root:{},fields:{margin:e.spacing(-1),display:"flex",flexWrap:"wrap","& > *":{flexGrow:1,margin:e.spacing(1)}},policy:{display:"flex",alignItems:"center"},policyCheckbox:{marginLeft:"-14px"},submitButton:{marginTop:e.spacing(2),width:"100%"}}}));var F=function(e){var t=e.className,a=Object(x.a)(e,["className"]),l=M(),c=Object(O.g)(),s=Object(r.useState)({isValid:!1,values:{},touched:{},errors:{}}),d=Object(y.a)(s,2),p=d[0],g=d[1],b=function(e){e.persist(),g((function(t){return Object(E.a)({},t,{values:Object(E.a)({},t.values,Object(n.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value)),touched:Object(E.a)({},t.touched,Object(n.a)({},e.target.name,!0))})}))},f=function(e){return!(!p.touched[e]||!p.errors[e])};return Object(r.useEffect)((function(){var e=w()(p.values,L);g((function(t){return Object(E.a)({},t,{isValid:!e,errors:e||{}})}))}),[p.values]),o.a.createElement("form",Object.assign({},a,{className:Object(S.a)(l.root,t),onSubmit:function(e){e.preventDefault(),c.push("/")}}),o.a.createElement("div",{className:l.fields},o.a.createElement(k.a,{error:f("firstName"),helperText:f("firstName")?p.errors.firstName[0]:null,label:"First name",name:"firstName",onChange:b,value:p.values.firstName||"",variant:"outlined"}),o.a.createElement(k.a,{error:f("lastName"),helperText:f("lastName")?p.errors.lastName[0]:null,label:"Last name",name:"lastName",onChange:b,value:p.values.lastName||"",variant:"outlined"}),o.a.createElement(k.a,{error:f("email"),fullWidth:!0,helperText:f("email")?p.errors.email[0]:null,label:"Email address",name:"email",onChange:b,value:p.values.email||"",variant:"outlined"}),o.a.createElement(k.a,{error:f("password"),fullWidth:!0,helperText:f("password")?p.errors.password[0]:null,label:"Password",name:"password",onChange:b,type:"password",value:p.values.password||"",variant:"outlined"}),o.a.createElement("div",null,o.a.createElement("div",{className:l.policy},o.a.createElement(C.a,{checked:p.values.policy||!1,className:l.policyCheckbox,color:"primary",name:"policy",onChange:b}),o.a.createElement(u.a,{color:"textSecondary",variant:"body1"},"I have read the"," ",o.a.createElement(m.a,{color:"secondary",component:i.a,to:"#",underline:"always",variant:"h6"},"Terms and Conditions"))),f("policy")&&o.a.createElement(N.a,{error:!0},p.errors.policy[0]))),o.a.createElement(T.a,{className:l.submitButton,color:"secondary",disabled:!p.isValid,size:"large",type:"submit",variant:"contained"},"Create account"))},B=Object(l.a)((function(e){return{root:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:e.spacing(6,2)},card:{width:e.breakpoints.values.md,maxWidth:"100%",overflow:"visible",display:"flex",position:"relative","& > *":{flexGrow:1,flexBasis:"50%",width:"50%"}},content:{padding:e.spacing(8,4,3,4)},media:Object(n.a)({borderTopRightRadius:4,borderBottomRightRadius:4,padding:e.spacing(3),color:e.palette.common.white,display:"flex",flexDirection:"column",justifyContent:"flex-end"},e.breakpoints.down("md"),{display:"none"}),icon:{backgroundImage:h.orange,color:e.palette.common.white,borderRadius:e.shape.borderRadius,padding:e.spacing(1),position:"absolute",top:-32,left:e.spacing(3),height:64,width:64,fontSize:32},registerForm:{marginTop:e.spacing(3)},divider:{margin:e.spacing(2,0)},person:{marginTop:e.spacing(2),display:"flex"},avatar:{marginRight:e.spacing(2)}}}));t.default=function(e){var t=B();return o.a.createElement(v.a,{className:t.root,title:"DRDP - SignUp"},o.a.createElement(c.a,{className:t.card},o.a.createElement(s.a,{className:t.content},o.a.createElement(g.a,{className:t.icon}),o.a.createElement(u.a,{gutterBottom:!0,variant:"h3"},"Sign up"),o.a.createElement(u.a,{variant:"subtitle2"},"Create an account with email address"),o.a.createElement(F,{className:t.registerForm}),o.a.createElement(d.a,{className:t.divider}),o.a.createElement(m.a,{align:"center",color:"secondary",component:i.a,to:"/login",underline:"always",variant:"subtitle2",onClick:function(){return e.setSignupClicked(!1)}},"Have an account?"))))}},464:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(861),i=a(854),l=a(845),c=a(147),s=a(30),u=a(29),d=a(22),m=a(46),p=a(21),g=a(56),b=a(4),f=a(95),h=a.n(f),v=a(807),E=a(853),y=a(840),x=a(860),O={email:{presence:{allowEmpty:!1,message:"is required"},email:!0},password:{presence:{allowEmpty:!1,message:"is required"}}},j=Object(o.a)((function(e){return{root:{width:"95%",paddingLeft:e.spacing(20)},fields:{margin:e.spacing(-1),display:"flex",flexWrap:"wrap","& > *":{flexGrow:1,margin:e.spacing(1)}},submitButton:{marginTop:e.spacing(2),width:"100%"}}}));var w=function(e){var t,a=e.className,o=Object(m.a)(e,["className"]),i=j(),l=Object(n.useState)({isValid:!1,values:{},touched:{},errors:{}}),c=Object(d.a)(l,2),f=c[0],w=c[1],S=Object(n.useState)(""),k=Object(d.a)(S,2),C=k[0],N=k[1],T=Object(n.useState)(!1),L=Object(d.a)(T,2),M=L[0],F=L[1],B=Object(p.g)(),D=function(e){return!(!f.touched[e]||!f.errors[e])},P=function(e){e.persist(),w((function(t){return Object(u.a)({},t,{values:Object(u.a)({},t.values,Object(s.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value)),touched:Object(u.a)({},t.touched,Object(s.a)({},e.target.name,!0))})}))};return Object(n.useEffect)((function(){var e=h()(f.values,O);w((function(t){return Object(u.a)({},t,{isValid:!e,errors:e||{}})}))}),[f.values]),M&&(t=r.a.createElement(x.a,{variant:"outlined",severity:"error"},C)),r.a.createElement("form",Object.assign({},o,{className:Object(b.a)(i.root,a),onSubmit:function(e){e.preventDefault(),g.b.auth().signInWithEmailAndPassword(f.values.email,f.values.password).then((function(e){})).catch((function(e){N(e.message),F(!0)})),B.push("/")}}),r.a.createElement(v.a,{gutterBottom:!0,variant:"h2",className:"title"},"Sign in"),r.a.createElement("div",{className:i.fields},r.a.createElement("p",null,"To login to our demo. Please Enter email: ",r.a.createElement("b",null,"user@user.com")," and Enter password: ",r.a.createElement("b",null,"useruser")),t,r.a.createElement(E.a,{error:D("email"),fullWidth:!0,helperText:D("email")?f.errors.email[0]:null,label:"Email address",name:"email",onChange:P,value:f.values.email||"",variant:"outlined"}),r.a.createElement(E.a,{error:D("password"),fullWidth:!0,helperText:D("password")?f.errors.password[0]:null,label:"Password",name:"password",onChange:P,type:"password",value:f.values.password||"",variant:"outlined"})),r.a.createElement(y.a,{className:i.submitButton,color:"secondary",size:"large",type:"submit",variant:"contained"},"Sign in"))},S=a(39),k=a(460),C=a.n(k),N=Object(o.a)((function(e){return{signup:{paddingLeft:e.spacing(20)}}}));t.default=function(e){var t=N();return r.a.createElement(c.a,{title:"DRDP - Login"},r.a.createElement(i.a,{alignItems:"center",container:!0,style:{minHeight:"100vh"}},r.a.createElement(i.a,{item:!0,xs:12,sm:6},r.a.createElement(w,null),r.a.createElement(l.a,{className:t.signup,color:"secondary",component:S.a,to:"/signup",underline:"always",variant:"subtitle2",onClick:function(){return e.setSignupClicked(!0)}},"Don't have an account?")),r.a.createElement(i.a,{item:!0,xs:12,sm:6},r.a.createElement("img",{src:C.a,height:"500px"}))))}},487:function(e,t,a){e.exports=a(803)},56:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(146),r=a.n(n);a(708),a(710),a(713);r.a.initializeApp({apiKey:"AIzaSyDz4rP2bHj2Rsa9S7auPD7J4KNgrIBmfkk",authDomain:"capstone491-ee7aa.firebaseapp.com",databaseURL:"https://capstone491-ee7aa.firebaseio.com",projectId:"capstone491-ee7aa",storageBucket:"capstone491-ee7aa.appspot.com",messagingSenderId:"290031732132",appId:"1:290031732132:web:3936df72e3964e7cb0ed31",measurementId:"G-6JJDT1RDY0"});r.a.auth();var o=r.a.firestore();t.b=r.a},802:function(e,t,a){},803:function(e,t,a){"use strict";a.r(t);a(488),a(497);var n=a(0),r=a.n(n),o=a(20),i=a.n(o),l=a(22),c=a(21),s=a(145),u=a(44),d=a(250),m=a(116),p=a(857),g=a(858),b=(a(689),a(29)),f=a(462),h=a(9),v={primary:{contrastText:"#FFFFFF",dark:"#12384E",main:"#05486F",light:h.a.indigo[100]},secondary:{contrastText:"#FFFFFF",dark:"#12384E",main:"#05486F",light:h.a.blue.A400},error:{contrastText:"#FFFFFF",dark:h.a.red[900],main:h.a.red[600],light:h.a.red[400]},text:{content:"#12384E",primary:h.a.grey[600],secondary:h.a.grey[600],link:h.a.blue[600]},link:h.a.blue[800],icon:h.a.grey[600],background:{default:"#F4F6F8",paper:"#FFFFFF"},divider:h.a.grey[200]},E={h1:{color:"#FFFFFF",fontWeight:500,fontSize:"35px",letterSpacing:"-0.24px",lineHeight:"40px"},h2:{color:v.text.content,fontWeight:700,fontSize:"29px",letterSpacing:"-0.24px",lineHeight:"32px"},h3:{color:v.text.content,fontWeight:600,fontSize:"24px",letterSpacing:"-0.06px",lineHeight:"28px"},h4:{color:v.text.primary,fontWeight:500,fontSize:"20px",letterSpacing:"-0.06px",lineHeight:"24px"},h5:{color:v.text.primary,fontWeight:500,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"20px"},h6:{color:v.text.primary,fontWeight:500,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"20px"},subtitle1:{color:v.text.content,fontWeight:500,fontSize:"15px",letterSpacing:"-0.05px",lineHeight:"25px"},subtitle2:{color:v.text.secondary,fontWeight:400,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body1:{color:v.text.primary,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body2:{color:v.text.secondary,fontSize:"12px",letterSpacing:"-0.04px",lineHeight:"18px"},button:{color:v.text.primary,fontSize:"14px"},caption:{color:v.text.secondary,fontSize:"11px",letterSpacing:"0.33px",lineHeight:"13px"},overline:{color:v.text.content,fontSize:"11px",fontWeight:500,letterSpacing:"0.33px",lineHeight:"13px",textTransform:"uppercase"}},y={palette:v,typography:E,overrides:{MuiButton:{contained:{boxShadow:"0 1px 1px 0 rgba(0,0,0,0.14)",backgroundColor:h.a.grey[100],"&:hover":{backgroundColor:h.a.grey[300]}}},MuiCardActions:{root:{padding:"16px 24px"}},MuiCardContent:{root:{padding:24}},MuiCardHeader:{root:{padding:"16px 24px"}},MuiChip:{root:{backgroundColor:h.a.blueGrey[50],color:h.a.blueGrey[900]},deletable:{"&:focus":{backgroundColor:h.a.blueGrey[100]}}},MuiIconButton:{root:{color:v.icon,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.03)"}}},MuiInputBase:{root:{},input:{"&::placeholder":{opacity:1,color:v.text.secondary}}},MuiLinearProgress:{root:{borderRadius:3,overflow:"hidden"},colorPrimary:{backgroundColor:h.a.blueGrey[50]}},MuiListItem:{button:{"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.04)"}}},MuiListItemIcon:{root:{color:v.icon,minWidth:32}},MuiOutlinedInput:{root:{},notchedOutline:{borderColor:"rgba(0,0,0,0.15)"}},MuiPaper:{root:{},elevation1:{boxShadow:"0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)"}},MuiTableCell:{root:Object(b.a)({},E.body1,{borderBottom:"1px solid ".concat(v.divider)})},MuiTableHead:{root:{backgroundColor:h.a.grey[50]}},MuiTableRow:{root:{"&$selected":{backgroundColor:v.background.default},"&$hover":{"&:hover":{backgroundColor:v.background.default}}}},MuiToggleButton:{root:{color:v.icon,"&:hover":{backgroundColor:"rgba(208, 208, 208, 0.20)"},"&$selected":{backgroundColor:"rgba(208, 208, 208, 0.20)",color:v.primary.main,"&:hover":{backgroundColor:"rgba(208, 208, 208, 0.30)"}},"&:first-child":{borderTopLeftRadius:4,borderBottomLeftRadius:4},"&:last-child":{borderTopRightRadius:4,borderBottomRightRadius:4}}},MuiTypography:{gutterBottom:{marginBottom:8}}}},x=Object(f.a)(y),O=(Object(f.a)(Object(b.a)({},y,{direction:"rtl"})),a(78)),j=a(443),w=a(444),S={loggedIn:!0,user:{first_name:"First",last_name:"Last",email:"email@mail.com",avatar:"",bio:"Position",role:"ADMIN"}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SESSION_LOGIN":return Object(b.a)({},S);case"SESSION_LOGOUT":return Object(b.a)({},e,{loggedIn:!1,user:{role:"GUEST"}});default:return e}},C=Object(O.combineReducers)({session:k});var N=a(30),T=a(861),L=a(852),M=a(46),F=a(39),B=a(4),D=a(806),P=a(842),R=a(843),_=a(844),I=a(865),W=a(845),z=a(807),H=a(863),A=a(847),G=a(838),q=a(840),U=a(841),K=a(446),V=a.n(K),J=a(445),$=a.n(J),Y=Object(T.a)((function(e){return{item:{display:"block",paddingTop:0,paddingBottom:0},itemLeaf:{display:"flex",paddingTop:0,paddingBottom:0},button:{padding:"10px 8px",justifyContent:"flex-start",textTransform:"none",letterSpacing:0,width:"100%"},buttonLeaf:{padding:"10px 8px",justifyContent:"flex-start",textTransform:"none",letterSpacing:0,width:"100%",fontWeight:e.typography.fontWeightRegular,"&.depth-0":{fontWeight:e.typography.fontWeightMedium}},icon:{color:e.palette.icon,display:"flex",alignItems:"center",marginRight:e.spacing(1)},expandIcon:{marginLeft:"auto",height:16,width:16},label:{display:"flex",alignItems:"center",marginLeft:"auto"},active:{color:e.palette.primary.main,fontWeight:e.typography.fontWeightMedium,"& $icon":{color:e.palette.primary.main}}}}));function X(e){var t=e.title,a=e.href,o=e.depth,i=e.children,c=e.icon,s=e.className,u=e.open,d=e.label,m=Object(M.a)(e,["title","href","depth","children","icon","className","open","label"]),p=Y(),g=Object(n.useState)(u),b=Object(l.a)(g,2),f=b[0],h=b[1],v=8;o>0&&(v=32+8*o);var E={paddingLeft:v};return i?r.a.createElement(G.a,Object.assign({},m,{className:Object(B.a)(p.item,s),disableGutters:!0,key:t}),r.a.createElement(q.a,{className:p.button,onClick:function(){h((function(e){return!e}))},style:E},c&&r.a.createElement(c,{className:p.icon}),t,f?r.a.createElement($.a,{className:p.expandIcon,color:"inherit"}):r.a.createElement(V.a,{className:p.expandIcon,color:"inherit"})),r.a.createElement(U.a,{in:f},i)):r.a.createElement(G.a,Object.assign({},m,{className:Object(B.a)(p.itemLeaf,s),disableGutters:!0,key:t}),r.a.createElement(q.a,{activeClassName:p.active,className:Object(B.a)(p.buttonLeaf,"depth-".concat(o)),component:F.b,exact:!0,style:E,to:a},c&&r.a.createElement(c,{className:p.icon}),t,d&&r.a.createElement("span",{className:p.label},r.a.createElement(d,null))))}X.defaultProps={open:!1};var Q=X,Z=a(448),ee=a.n(Z),te=a(449),ae=a.n(te),ne=a(273),re=a.n(ne),oe=a(450),ie=a.n(oe),le=a(451),ce=a.n(le),se=[{items:[{title:"Overview",href:"/overview",icon:ee.a},{title:"Gallery",href:"/gallery",icon:ae.a},{title:"Favorites",href:"/favorites",icon:re.a},{title:"Report Entry",href:"/reportentry",icon:ie.a},{title:"About Us",href:"/aboutus",icon:ce.a}]}],ue=Object(T.a)((function(e){return{root:{height:"100%",display:"flex",flexDirection:"column"},mobileDrawer:{width:256},desktopDrawer:{width:256,top:64,height:"calc(100% - 64px)"},navigation:{overflow:"auto",padding:e.spacing(0,2,2,2),flexGrow:1},profile:{padding:e.spacing(2),display:"flex",alignItems:"center"},badge:{boxShadow:"0 0 0 2px ".concat(e.palette.background.paper)},badgeDot:{height:9,minWidth:9},onlineBadge:{backgroundColor:h.a.green[600]},awayBadge:{backgroundColor:h.a.orange[600]},busyBadge:{backgroundColor:h.a.red[600]},offlineBadge:{backgroundColor:h.a.grey[300]},avatar:{cursor:"pointer",width:40,height:40},details:{marginLeft:e.spacing(2)},moreButton:{marginLeft:"auto",color:h.a.blueGrey[200]}}}));function de(e){var t=e.items,a=e.subheader,n=e.key,o=Object(M.a)(e,["items","subheader","key"]);return r.a.createElement(D.a,{key:n},a&&r.a.createElement(P.a,{disableSticky:!0},a),t.reduce((function(e,t){return function(e){var t=e.acc,a=e.pathname,n=e.item,o=e.depth,i=void 0===o?0:o;if(n.items){var l=Object(c.f)(a,{path:n.href,exact:!1});t.push(r.a.createElement(Q,{depth:i,icon:n.icon,key:n.href,label:n.label,open:Boolean(l),title:n.title},de({depth:i+1,pathname:a,items:n.items})))}else t.push(r.a.createElement(Q,{depth:i,href:n.href,icon:n.icon,key:n.href,label:n.label,title:n.title}));return t}(Object(b.a)({acc:e,item:t},o))}),[]))}var me=function(e){var t,a=e.openMobile,o=e.onMobileClose,i=e.className,s=Object(M.a)(e,["openMobile","onMobileClose","className"]),u=ue(),d=Object(c.h)(),p=Object(m.b)((function(e){return e.session})),g=Object(n.useState)("online"),b=Object(l.a)(g,2),f=b[0],h=b[1];Object(n.useEffect)((function(){a&&o&&o()}),[d.pathname]);var v=r.a.createElement("div",Object.assign({},s,{className:Object(B.a)(u.root,i)}),r.a.createElement("nav",{className:u.navigation},se.map((function(e){return de({items:e.items,subheader:e.subheader,pathname:d.pathname,key:e.subheader})}))),r.a.createElement(R.a,{className:u.divider}),r.a.createElement("div",{className:u.profile},r.a.createElement(_.a,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},classes:{dot:u.badgeDot,badge:Object(B.a)((t={},Object(N.a)(t,u.badge,!0),Object(N.a)(t,u.onlineBadge,"online"===f),Object(N.a)(t,u.awayBadge,"away"===f),Object(N.a)(t,u.busyBadge,"busy"===f),Object(N.a)(t,u.offlineBadge,"offline"===f),t))},variant:"dot"},r.a.createElement(I.a,{alt:"Person",onClick:function(){var e={online:"away",away:"busy",busy:"offline",offline:"online"};h((function(t){return e[t]}))},className:u.avatar,src:p.user.avatar})),r.a.createElement("div",{className:u.details},r.a.createElement(W.a,{component:F.a,to:"/profile",variant:"h5",color:"textPrimary",underline:"none"},"".concat(p.user.first_name," ").concat(p.user.last_name)),r.a.createElement(z.a,{variant:"body2"},p.user.bio))));return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{lgUp:!0},r.a.createElement(A.a,{anchor:"left",classes:{paper:u.mobileDrawer},onClose:o,open:a,variant:"temporary"},v)),r.a.createElement(H.a,{mdDown:!0},r.a.createElement(A.a,{anchor:"left",classes:{paper:u.desktopDrawer},open:!0,variant:"persistent"},v)))},pe=a(849),ge=a(850),be=a(851),fe=a(455),he=a.n(fe),ve=a(454),Ee=a.n(ve),ye=a(418),xe=a(56),Oe=a(453),je=a.n(Oe),we=Object(T.a)((function(e){return{root:{boxShadow:"none"},logo:{width:"250px"},flexGrow:{flexGrow:1},menuButton:{marginRight:e.spacing(1)},logoutButton:{marginLeft:e.spacing(1)},logoutIcon:{marginRight:e.spacing(1)}}}));var Se=function(e){var t=e.onOpenNavBarMobile,a=e.className,o=Object(M.a)(e,["onOpenNavBarMobile","className"]),i=we(),s=Object(c.g)(),u=Object(n.useState)([]),d=Object(l.a)(u,2),m=(d[0],d[1]);return Object(n.useEffect)((function(){var e=!0;return ye.a.get("/api/account/notifications").then((function(t){e&&m(t.data.notifications)})),function(){e=!1}}),[]),r.a.createElement(pe.a,Object.assign({},o,{className:Object(B.a)(i.root,a),color:"primary"}),r.a.createElement(ge.a,null,r.a.createElement(H.a,{lgUp:!0},r.a.createElement(be.a,{className:i.menuButton,color:"inherit",onClick:t},r.a.createElement(Ee.a,null))),r.a.createElement(F.a,{to:"/"},r.a.createElement("img",{className:i.logo,alt:"Web Logo",src:je.a})),r.a.createElement("div",{className:i.flexGrow}),r.a.createElement(H.a,{mdDown:!0},r.a.createElement(q.a,{className:i.logoutButton,color:"inherit",onClick:function(){s.push("/login"),xe.b.auth().signOut()}},r.a.createElement(he.a,{className:i.logoutIcon}),"Sign out"))))},ke=Object(T.a)((function(e){var t;return{container:{minHeight:"100vh",display:"flex","@media all and (-ms-high-contrast:none)":{height:0}},content:(t={paddingTop:64,flexGrow:1,maxWidth:"100%",overflowX:"hidden"},Object(N.a)(t,e.breakpoints.up("lg"),{paddingLeft:256}),Object(N.a)(t,e.breakpoints.down("xs"),{paddingTop:56}),t)}}));var Ce=function(e){var t=e.route,a=ke(),o=Object(n.useState)(!1),i=Object(l.a)(o,2),c=i[0],u=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Se,{onOpenNavBarMobile:function(){return u(!0)}}),r.a.createElement(me,{onMobileClose:function(){return u(!1)},openMobile:c}),r.a.createElement("div",{className:a.container},r.a.createElement("div",{className:a.content},r.a.createElement(n.Suspense,{fallback:r.a.createElement(L.a,null)},Object(s.a)(t.routes)))))},Ne=Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,464))})),Te=Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,463))})),Le=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,1118))})),Me=Object(n.lazy)((function(){return a.e(5).then(a.bind(null,1104))})),Fe=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(13)]).then(a.bind(null,1119))})),Be=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(14)]).then(a.bind(null,1120))})),De=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(15)]).then(a.bind(null,1121))})),Pe=Object(n.lazy)((function(){return a.e(6).then(a.bind(null,1106))})),Re=Object(n.lazy)((function(){return a.e(10).then(a.bind(null,1124))})),_e=Object(n.lazy)((function(){return a.e(9).then(a.bind(null,1108))})),Ie=Object(n.lazy)((function(){return a.e(8).then(a.bind(null,1123))})),We=Object(n.lazy)((function(){return a.e(12).then(a.bind(null,1109))})),ze=Object(n.lazy)((function(){return a.e(11).then(a.bind(null,1110))})),He=Object(n.lazy)((function(){return Promise.all([a.e(7),a.e(16)]).then(a.bind(null,1122))})),Ae=[{path:"/",exact:!0,component:function(){return r.a.createElement(c.a,{to:"/overview"})}},{route:"*",component:Ce,routes:[{path:"/login",exact:!0,component:function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(Ne,null))}},{path:"/signup",exact:!0,component:function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(Te,null))}},{path:"/overview",exact:!0,component:function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(Le,null))}},{path:"/DRDP",exact:!0,component:function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(Le,null))}},{path:"/gallery",exact:!0,component:function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(Me,null))}},{path:"/gallery/totalserved",exact:!0,component:function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(Fe,null))}},{path:"/gallery/ethnicity",exact:!0,component:function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(Be,null))}},{path:"/gallery/ethnicity2",exact:!0,component:function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(De,null))}},{path:"/favorites",exact:!0,component:function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(Pe,null))}},{path:"/reportentry",exact:!0,component:function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(Re,null))}},{path:"/reportentry/oneppr",exact:!0,component:function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(_e,null))}},{path:"/reportentry/confirmation",exact:!0,component:function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(Ie,null))}},{path:"/reportentry/success",exact:!0,component:function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(We,null))}},{path:"/aboutus",exact:!0,component:function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(ze,null))}},{path:"/profile",exact:!0,component:function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(He,null))}}]}],Ge=a(187),qe=Object({NODE_ENV:"production",PUBLIC_URL:"/DRDP",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_MEASUREMENT_ID;var Ue=function(){return r.a.createElement(Ge.Helmet,null,r.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(qe)}),r.a.createElement("script",null,"\n          window.dataLayer = window.dataLayer || [];\n\n          function gtag() {\n            dataLayer.push(arguments);\n          }\n\n          gtag('js', new Date());\n          gtag('config', '".concat(qe,"');\n        ")))},Ke=a(254),Ve=a.n(Ke),Je=a(191),$e=Object(T.a)((function(e){return{root:{maxWidth:420,position:"fixed",bottom:0,right:0,margin:e.spacing(3),outline:"none",zIndex:2e3},media:{padding:e.spacing(1,2),height:180,textAlign:"center","& > img":{height:"100%",width:"auto"}},content:{padding:e.spacing(1,2)},actions:{padding:e.spacing(2)}}}));var Ye=function(){var e=$e(),t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],i=a[1];return Object(n.useEffect)((function(){Ve.a.get("consent")||i(!0)}),[]),o?r.a.createElement(Je.a,{className:e.root,elevation:3},r.a.createElement("div",{className:e.media},r.a.createElement("img",{alt:"Cookies",src:"/images/undraw_cookie_love_ulvn.svg"})),r.a.createElement("div",{className:e.content},r.a.createElement(z.a,{variant:"body1"},"We use Cookies to ensure that we give you the best experience on our website. Read our"," ",r.a.createElement(W.a,{className:e.link,component:"a",href:"https://devias.io/privacy-policy",target:"_blank"},"Privacy Policy"),".")),r.a.createElement("div",{className:e.actions},r.a.createElement(q.a,{className:e.agreeButton,color:"primary",onClick:function(){Ve.a.set("consent","true"),i(!1)},variant:"contained"},"I Agree"))):null};var Xe=function(){var e=Object(c.h)();return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e.pathname]),null},Qe=a(277),Ze=a(31),et=a(456),tt=a.n(et),at=a(859),nt=a(864),rt=Object(Ze.b)({plugins:[].concat(Object(Qe.a)(Object(at.a)().plugins),[tt()()])});var ot=function(e){var t=e.direction,a=e.children;return"rtl"!==t?a:r.a.createElement(nt.b,{jss:rt},r.a.createElement("div",{dir:"rtl"},a))},it=a(255);it.a.helpers.extend(it.a.elements.Rectangle.prototype,{draw:function(){var e,t,a,n,r,o,i,l,c=this._chart.ctx,s=this._view,u=s.borderWidth,d=this._chart.config.options.cornerRadius;if(d<0&&(d=0),"undefined"===typeof d&&(d=0),s.horizontal?(e=s.base,t=s.x,a=s.y-s.height/2,n=s.y+s.height/2,r=t>e?1:-1,o=1,i=s.borderSkipped||"left"):(e=s.x-s.width/2,t=s.x+s.width/2,a=s.y,r=1,o=(n=s.base)>a?1:-1,i=s.borderSkipped||"bottom"),u){var m=Math.min(Math.abs(e-t),Math.abs(a-n)),p=(u=u>m?m:u)/2,g=e+("left"!==i?p*r:0),b=t+("right"!==i?-p*r:0),f=a+("top"!==i?p*o:0),h=n+("bottom"!==i?-p*o:0);g!==b&&(a=f,n=h),f!==h&&(e=g,t=b)}c.beginPath(),c.fillStyle=s.backgroundColor,c.strokeStyle=s.borderColor,c.lineWidth=u;var v=[[e,n],[e,a],[t,a],[t,n]],E=["bottom","left","top","right"].indexOf(i,0);function y(e){return v[(E+e)%4]}-1===E&&(E=0);var x=y(0);c.moveTo(x[0],x[1]);for(var O=1;O<4;O+=1){x=y(O);var j=O+1;4===j&&(j=0);var w=v[2][0]-v[1][0],S=v[0][1]-v[1][1],k=v[1][0],C=v[1][1];if((l=d)>Math.abs(S)/2&&(l=Math.floor(Math.abs(S)/2)),l>Math.abs(w)/2&&(l=Math.floor(Math.abs(w)/2)),S<0){var N=k,T=k+w,L=C+S,M=C+S,F=k,B=k+w,D=C,P=C;c.moveTo(F+l,D),c.lineTo(B-l,P),c.quadraticCurveTo(B,P,B,P-l),c.lineTo(T,M+l),c.quadraticCurveTo(T,M,T-l,M),c.lineTo(N+l,L),c.quadraticCurveTo(N,L,N,L+l),c.lineTo(F,D-l),c.quadraticCurveTo(F,D,F+l,D)}else if(w<0){var R=k+w,_=k,I=C,W=C,z=k+w,H=k,A=C+S,G=C+S;c.moveTo(z+l,A),c.lineTo(H-l,G),c.quadraticCurveTo(H,G,H,G-l),c.lineTo(_,W+l),c.quadraticCurveTo(_,W,_-l,W),c.lineTo(R+l,I),c.quadraticCurveTo(R,I,R,I+l),c.lineTo(z,A-l),c.quadraticCurveTo(z,A,z+l,A)}else c.moveTo(k+l,C),c.lineTo(k+w-l,C),c.quadraticCurveTo(k+w,C,k+w,C+l),c.lineTo(k+w,C+S-l),c.quadraticCurveTo(k+w,C+S,k+w-l,C+S),c.lineTo(k+l,C+S),c.quadraticCurveTo(k,C+S,k,C+S-l),c.lineTo(k,C+l),c.quadraticCurveTo(k,C,k+l,C)}c.fill(),u&&c.stroke()}});var lt=a(141);a.n(lt).a.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"seconds",ss:"%ss",m:"1m",mm:"%dm",h:"1h",hh:"%dh",d:"1d",dd:"%dd",M:"1M",MM:"%dM",y:"1Y",yy:"%dY"}});var ct=a(95),st=a.n(ct);st.a.validators=Object(b.a)({},st.a.validators,{regex:function(e,t){if(!new RegExp(t.pattern).test(e))return t.message},checked:function(e,t){if(!0!==e)return t.message||"must be checked"}});a(791),a(792),a(793),a(794),a(795),a(796),a(797),a(798),a(799),a(800),a(801),a(802);var ut=a(464),dt=a(463),mt=a(148),pt=Object(u.a)(),gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[j.a],a=Object(w.composeWithDevTools)(O.applyMiddleware.apply(void 0,t)),n=[a],r=O.compose.apply(void 0,n),o=Object(O.createStore)(C,e,r);return o}();Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,463))})),Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,464))}));var bt=function(){var e,t=Object(n.useContext)(mt.a),a=t.state,o=(t.favorites,t.actions),i=Object(n.useState)(null),u=Object(l.a)(i,2),b=u[0],f=u[1],h=Object(n.useState)(!1),v=Object(l.a)(h,2),E=(v[0],v[1]),y=Object(n.useState)(!1),O=Object(l.a)(y,2),j=O[0],w=O[1];function S(){xe.b.auth().setPersistence(xe.b.auth.Auth.Persistence.SESSION),xe.b.auth().onAuthStateChanged((function(e){var t;e?(t=e.uid,xe.a.collection("users").get().then((function(e){e.forEach((function(e){e.id===t&&E(e.data().isAdmin)}))})).catch((function(e){return console.log(e)})),f(e)):f(null)}))}return Object(n.useEffect)((function(){var e=[];xe.a.collection("test3oneppr").get().then((function(t){t.docs.forEach((function(t){e.push(t.data())}))})).then((function(){o({type:"setState",payload:e})})).then((function(){console.log("data from fb loaded"),console.log(a)})).then((function(){console.log(a)}))}),[]),Object(n.useEffect)((function(){var e=[];xe.a.collection("favorites").get().then((function(t){t.docs.forEach((function(t){e.push(t.data())}))})).then((function(){o({type:"setFavorites",payload:e})}))}),[]),Object(n.useEffect)((function(){null==b&&E(!1),S()}),[b,S]),e=j?r.a.createElement(dt.default,{setSignupClicked:w}):r.a.createElement(ut.default,{setSignupClicked:w}),r.a.createElement(m.a,{store:gt},r.a.createElement(p.a,{theme:x},r.a.createElement(ot,null,r.a.createElement(g.a,{utils:d.a},r.a.createElement(c.c,{history:pt},r.a.createElement(Xe,null),r.a.createElement(Ue,null),r.a.createElement(Ye,null),b?Object(s.a)(Ae):e)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ft=a(267),ht=function(){var e=Object(ft.a)();return r.a.createElement(mt.a.Provider,{value:e},r.a.createElement(bt,null))};i.a.render(r.a.createElement(ht,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[487,2,3]]]);
//# sourceMappingURL=main.52d2bb20.chunk.js.map