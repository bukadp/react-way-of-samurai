(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{292:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__3Jnyl",dialogsItems:"Dialogs_dialogsItems__2XhoU",active:"Dialogs_active__7P_17",messages:"Dialogs_messages__2Exvm",message:"Dialogs_message__3es76"}},298:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(95),o=t(292),r=t.n(o),c=t(290),l=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:r.a.dialog+" "+r.a.active},s.a.createElement(c.a,{to:a},e.name))},m=function(e){return s.a.createElement("div",{className:r.a.dialog},e.message)},u=t(84),d=t(118),g=t(29),b=t(60),f=Object(b.a)(50);var p=Object(d.a)({form:"dialogAddMessageForm"})(function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement(u.a,{component:g.b,name:"newMessageBody",placeholder:"Enter text message",validate:[b.b,f]}),s.a.createElement("button",null,"Send"))}),v=function(e){var a=e.dialogsPage,t=a.dialogs.map(function(e){return s.a.createElement(l,{name:e.name,key:e.id,id:e.id})}),n=a.messages.map(function(e){return s.a.createElement(m,{message:e.message,key:e.id})});a.newMessageBody;return s.a.createElement("div",{className:r.a.dialogs},s.a.createElement("div",{className:r.a.dialogsItems},t),s.a.createElement("div",{className:r.a.messages},s.a.createElement("div",null,n)),s.a.createElement(p,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}}))},E=t(11),_=t(32),h=t(33),j=t(35),O=t(34),w=t(36),y=t(288),M=function(e){return{isAuth:e.auth.isAuth}},k=t(6);a.default=Object(k.d)(Object(E.b)(function(e){return{dialogsPage:e.dialogsPage}},function(e){return{sendMessage:function(a){e(Object(i.b)(a))}}}),function(e){var a=function(a){function t(){return Object(_.a)(this,t),Object(j.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(w.a)(t,a),Object(h.a)(t,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(y.a,{to:"/login"})}}]),t}(s.a.Component);return Object(E.b)(M)(a)})(v)}}]);
//# sourceMappingURL=4.fccc4f58.chunk.js.map