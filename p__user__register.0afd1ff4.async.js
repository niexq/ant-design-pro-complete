(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8803],{31962:function(d){d.exports={main:"main___2kx2N",password:"password___2JDrd",getCaptcha:"getCaptcha___1oboe",submit:"submit___34wM2",login:"login___1qBuj",success:"success___3hl98",warning:"warning___2i2r2",error:"error___3JfQo","progress-pass":"progress-pass___BM1Xu",progress:"progress___2s68u"}},15581:function(d,n,s){"use strict";s.r(n),s.d(n,{default:function(){return H}});var u=s(80754),f=s(80021),Z=s(96118),A=s(27914),ms=s(88988),B=s(97325),hs=s(71723),U=s(93096),fs=s(10628),W=s(37159),xs=s(32562),z=s(97655),p=s(12581),js=s(17803),c=s(91426),Fs=s(28426),D=s(84695),Es=s(6663),x=s(36239),m=s(59301),j=s(42355),K=s(80444),L=s(51102),V=s(92211),M=s.n(V);function G(E){return F.apply(this,arguments)}function F(){return F=(0,L.Z)(M().mark(function E(C){return M().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,j.WY)("/api/register",{method:"POST",data:C}));case 1:case"end":return l.stop()}},E)})),F.apply(this,arguments)}var $=s(31962),a=s.n($),e=s(37712),v=x.Z.Item,S=D.Z.Option,J=c.Z.Group,Q={ok:(0,e.jsx)("div",{className:a().success,children:(0,e.jsx)("span",{children:"\u5F3A\u5EA6\uFF1A\u5F3A"})}),pass:(0,e.jsx)("div",{className:a().warning,children:(0,e.jsx)("span",{children:"\u5F3A\u5EA6\uFF1A\u4E2D"})}),poor:(0,e.jsx)("div",{className:a().error,children:(0,e.jsx)("span",{children:"\u5F3A\u5EA6\uFF1A\u592A\u77ED"})})},X={ok:"success",pass:"normal",poor:"exception"},Y=function(){var C=(0,m.useState)(0),y=(0,p.Z)(C,2),l=y[0],O=y[1],k=(0,m.useState)(!1),I=(0,p.Z)(k,2),P=I[0],R=I[1],b=(0,m.useState)("86"),T=(0,p.Z)(b,2),q=T[0],ss=T[1],es=(0,m.useState)(!1),_=(0,p.Z)(es,2),rs=_[0],ts=_[1],as=!1,h,ns=x.Z.useForm(),us=(0,p.Z)(ns,1),i=us[0];(0,m.useEffect)(function(){return function(){clearInterval(h)}},[h]);var ls=function(){var r=59;O(r),h=window.setInterval(function(){r-=1,O(r),r===0&&clearInterval(h)},1e3)},N=function(){var r=i.getFieldValue("password");return r&&r.length>9?"ok":r&&r.length>5?"pass":"poor"},w=(0,j.QT)(G,{manual:!0,onSuccess:function(r,t){r.status==="ok"&&(z.default.success("\u6CE8\u518C\u6210\u529F\uFF01"),j.m8.push({pathname:"/user/register-result",state:{account:t.email}}))}}),os=w.loading,is=w.run,ds=function(r){is(r)},cs=function(r,t){var g=Promise;return t&&t!==i.getFieldValue("password")?g.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u5339\u914D!"):g.resolve()},vs=function(r,t){var g=Promise;return t?(P||R(!!t),ts(!rs),t.length<6?g.reject(""):(t&&as&&i.validateFields(["confirm"]),g.resolve())):(R(!!t),g.reject("\u8BF7\u8F93\u5165\u5BC6\u7801!"))},gs=function(r){ss(r)},ps=function(){var r=i.getFieldValue("password"),t=N();return r&&r.length?(0,e.jsx)("div",{className:a()["progress-".concat(t)],children:(0,e.jsx)(W.Z,{status:X[t],className:a().progress,strokeWidth:6,percent:r.length*10>100?100:r.length*10,showInfo:!1})}):null};return(0,e.jsxs)("div",{className:a().main,children:[(0,e.jsx)("h3",{children:"\u6CE8\u518C"}),(0,e.jsxs)(x.Z,{form:i,name:"UserRegister",onFinish:ds,children:[(0,e.jsx)(v,{name:"mail",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740!"},{type:"email",message:"\u90AE\u7BB1\u5730\u5740\u683C\u5F0F\u9519\u8BEF!"}],children:(0,e.jsx)(c.Z,{size:"large",placeholder:"\u90AE\u7BB1"})}),(0,e.jsx)(U.Z,{getPopupContainer:function(r){return r&&r.parentNode?r.parentNode:r},content:P&&(0,e.jsxs)("div",{style:{padding:"4px 0"},children:[Q[N()],ps(),(0,e.jsx)("div",{style:{marginTop:10},children:(0,e.jsx)("span",{children:"\u8BF7\u81F3\u5C11\u8F93\u5165 6 \u4E2A\u5B57\u7B26\u3002\u8BF7\u4E0D\u8981\u4F7F\u7528\u5BB9\u6613\u88AB\u731C\u5230\u7684\u5BC6\u7801\u3002"})})]}),overlayStyle:{width:240},placement:"right",visible:P,children:(0,e.jsx)(v,{name:"password",className:i.getFieldValue("password")&&i.getFieldValue("password").length>0&&a().password,rules:[{validator:vs}],children:(0,e.jsx)(c.Z,{size:"large",type:"password",placeholder:"\u81F3\u5C116\u4F4D\u5BC6\u7801\uFF0C\u533A\u5206\u5927\u5C0F\u5199"})})}),(0,e.jsx)(v,{name:"confirm",rules:[{required:!0,message:"\u786E\u8BA4\u5BC6\u7801"},{validator:cs}],children:(0,e.jsx)(c.Z,{size:"large",type:"password",placeholder:"\u786E\u8BA4\u5BC6\u7801"})}),(0,e.jsxs)(J,{compact:!0,children:[(0,e.jsxs)(D.Z,{size:"large",value:q,onChange:gs,style:{width:"20%"},children:[(0,e.jsx)(S,{value:"86",children:"+86"}),(0,e.jsx)(S,{value:"87",children:"+87"})]}),(0,e.jsx)(v,{style:{width:"80%"},name:"mobile",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7!"},{pattern:/^\d{11}$/,message:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF!"}],children:(0,e.jsx)(c.Z,{size:"large",placeholder:"\u624B\u673A\u53F7"})})]}),(0,e.jsxs)(f.Z,{gutter:8,children:[(0,e.jsx)(B.Z,{span:16,children:(0,e.jsx)(v,{name:"captcha",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801!"}],children:(0,e.jsx)(c.Z,{size:"large",placeholder:"\u9A8C\u8BC1\u7801"})})}),(0,e.jsx)(B.Z,{span:8,children:(0,e.jsx)(A.Z,{size:"large",disabled:!!l,className:a().getCaptcha,onClick:ls,children:l?"".concat(l," s"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"})})]}),(0,e.jsxs)(v,{children:[(0,e.jsx)(A.Z,{size:"large",loading:os,className:a().submit,type:"primary",htmlType:"submit",children:(0,e.jsx)("span",{children:"\u6CE8\u518C"})}),(0,e.jsx)(K.rU,{className:a().login,to:"/user/login",children:(0,e.jsx)("span",{children:"\u4F7F\u7528\u5DF2\u6709\u8D26\u6237\u767B\u5F55"})})]})]})]})},H=Y},97325:function(d,n,s){"use strict";var u=s(21002);n.Z=u.Z},88988:function(d,n,s){"use strict";var u=s(90887),f=s.n(u),Z=s(6079)},80021:function(d,n,s){"use strict";var u=s(63468);n.Z=u.Z},80754:function(d,n,s){"use strict";var u=s(90887),f=s.n(u),Z=s(6079)}}]);
