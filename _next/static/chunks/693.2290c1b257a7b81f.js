(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[693],{85693:function(e,n,t){"use strict";t.r(n);var a=t(85893),s=t(93967),i=t.n(s),l=t(25675),o=t.n(l),c=t(41664),r=t.n(c),u=t(11163),d=t(67294),h=t(73935),f=t(8911),x=t(59009),_=t(21521),g=t(29345),m=t(12105),j=t(81445),p=t(29523),b=t.n(p),v=function(e){var n=e.open,t=e.toggle,s=e.toggleFeedbackModal,l=(0,u.useRouter)(),c=(0,_.qD)().setActiveSimulationStep,p=(0,_.aC)().isAuthenticated,v=(0,_.x5)().status,y=(0,d.useCallback)(function(e){return e===m.Xv.PROFILE&&v!==j._.DOC_VERIFIED},[v]),k=(0,d.useMemo)(function(){return[{label:"transa\xe7\xf5es",link:m.Xv.TRANSACTIONS,image:(0,a.jsx)(x.$l,{color:"#1975FF"})},{label:"ajuda",link:m.Xv.PROFILE_HELP,image:(0,a.jsx)(x.UO,{})},]},[]),C=(0,d.useMemo)(function(){return[{label:"d\xfavidas frequentes",link:"/perguntas-frequentes",image:(0,a.jsx)(o(),{src:"/landpage/duvidas.png",width:23,height:23,alt:"a blue question mark image"})},{label:"sua seguran\xe7a",link:"/#seguranca",image:(0,a.jsx)(o(),{src:"/landpage/Lock.png",width:23,height:23,alt:"a blue padlock image"})},]},[]),N=(0,d.useMemo)(function(){return p?k:C},[p,k,C]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"".concat(b().overlay," ").concat(n?b().overlayActive:""),onClick:function(){return t()}}),(0,a.jsxs)("aside",{className:"".concat(b().container," ").concat(n?b().openContainer:""),children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:b().closeIcon,children:(0,a.jsx)(x.bN,{title:'um "x" remetendo-se a a\xe7\xe3o de fechar menu lateral',onClick:function(){return t()}})}),(0,a.jsx)(x.TR,{title:"MoveMoneyFX logotipo"})]}),(0,a.jsxs)("nav",{children:[N.map(function(e){return(0,a.jsx)(r(),{href:e.link,children:(0,a.jsxs)("a",{onClick:function(){c(0),t()},children:[(0,a.jsx)("span",{style:{width:24,height:24},className:i()(y(e.link)&&b().hasNotification),"data-badge":y(e.link)?"1":null,children:e.image}),(0,a.jsx)("span",{className:i()(l.pathname.includes(e.link)&&b().active),children:e.label})]})},e.label)}),(0,a.jsx)("div",{className:b().actions,children:p?(0,a.jsxs)(a.Fragment,{children:[!!s&&(0,a.jsx)(f.z,{typeBtn:"btn-radius-soft",label:"deixe seu feedback",justifyContent:"center",color:"theme-gray",onClick:function(){return s()}}),(0,a.jsx)(f.z,{typeBtn:"btn-radius-soft",label:"sair",justifyContent:"center",color:"theme-gray",onClick:function(){c(0),(0,h.unstable_batchedUpdates)(function(){(0,g.h)().getState().resetStore()}),l.push(m.Xv.LOGIN)}})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.z,{type:"button",label:"entrar",color:"theme-blue",onClick:function(){return l.push("/login")},justifyContent:"center"}),(0,a.jsx)(f.z,{type:"button",label:"cadastrar",color:"theme-blue-light",onClick:function(){return l.push("/cadastro")},justifyContent:"center"})]})})]})]})]})};n.default=v},29523:function(e){e.exports={overlayActive:"styles_overlayActive__t5xlS",overlay:"styles_overlay__mNXFp",openContainer:"styles_openContainer__YL3uw",container:"styles_container__Oe77z",active:"styles_active__fEiKq",hasNotification:"styles_hasNotification__WE6dQ",actions:"styles_actions__0hOjf",closeIcon:"styles_closeIcon__9RP9V"}}}]);