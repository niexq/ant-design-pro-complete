(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8442],{73802:function(M,_,e){"use strict";var l=e(29405),n=e(51070),E=e(90452),s=e(59301),m=e(34099),d=["fieldProps","min","proFieldProps","max"],a=function(i,P){var x=i.fieldProps,t=i.min,c=i.proFieldProps,o=i.max,r=(0,E.Z)(i,d);return s.createElement(m.Z,(0,l.Z)({mode:"edit",valueType:"digit",fieldProps:(0,n.Z)({min:t,max:o},x),ref:P,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:c},r))};_.Z=s.forwardRef(a)},2557:function(M,_,e){"use strict";var l=e(29405),n=e(51070),E=e(90452),s=e(59301),m=e(34099),d=e(97398),a=e(46021),p=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],i=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],P=s.forwardRef(function(r,D){var g=r.fieldProps,C=r.children,h=r.params,T=r.proFieldProps,v=r.mode,R=r.valueEnum,Z=r.request,O=r.showSearch,I=r.options,U=(0,E.Z)(r,p),B=(0,s.useContext)(a.Z);return s.createElement(m.Z,(0,l.Z)({mode:"edit",valueEnum:(0,d.h)(R),request:Z,params:h,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,n.Z)({options:I,mode:v,showSearch:O,getPopupContainer:B.getPopupContainer},g),ref:D,proFieldProps:T},U),C)}),x=s.forwardRef(function(r,D){var g=r.fieldProps,C=r.children,h=r.params,T=r.proFieldProps,v=r.mode,R=r.valueEnum,Z=r.request,O=r.options,I=(0,E.Z)(r,i),U=(0,n.Z)({options:O,mode:v||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},g),B=(0,s.useContext)(a.Z);return s.createElement(m.Z,(0,l.Z)({mode:"edit",valueEnum:(0,d.h)(R),request:Z,params:h,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,n.Z)({getPopupContainer:B.getPopupContainer},U),ref:D,proFieldProps:T},I),C)}),t=P,c=x,o=t;o.SearchSelect=c,o.displayName="ProFormComponent",_.Z=o},1069:function(M,_,e){"use strict";var l=e(29405),n=e(90452),E=e(59301),s=e(34099),m=["fieldProps","proFieldProps"],d=["fieldProps","proFieldProps"],a="text",p=function(t){var c=t.fieldProps,o=t.proFieldProps,r=(0,n.Z)(t,m);return E.createElement(s.Z,(0,l.Z)({mode:"edit",valueType:a,fieldProps:c,filedConfig:{valueType:a},proFieldProps:o},r))},i=function(t){var c=t.fieldProps,o=t.proFieldProps,r=(0,n.Z)(t,d);return E.createElement(s.Z,(0,l.Z)({mode:"edit",valueType:"password",fieldProps:c,proFieldProps:o,filedConfig:{valueType:a}},r))},P=p;P.Password=i,P.displayName="ProFormComponent",_.Z=P},93836:function(M){M.exports={card:"card___2gwEq",result:"result___OtC7Q"}},23961:function(M,_,e){"use strict";e.r(_);var l=e(27820),n=e(75054),E=e(38391),s=e(10264),m=e(63501),d=e(22194),a=e(51102),p=e(12581),i=e(20686),P=e(11777),x=e(96118),t=e(27914),c=e(66377),o=e(92948),r=e(48958),D=e(74992),g=e(92211),C=e.n(g),h=e(59301),T=e(89716),v=e(57191),R=e(2557),Z=e(31338),O=e(1069),I=e(73802),U=e(93836),B=e.n(U),u=e(37712),V=function(f){var A=f.stepData,W=f.bordered,b=A.payAccount,N=A.receiverAccount,L=A.receiverName,z=A.amount;return(0,u.jsxs)(D.Z,{column:1,bordered:W,children:[(0,u.jsxs)(D.Z.Item,{label:"\u4ED8\u6B3E\u8D26\u6237",children:[" ",b]}),(0,u.jsxs)(D.Z.Item,{label:"\u6536\u6B3E\u8D26\u6237",children:[" ",N]}),(0,u.jsxs)(D.Z.Item,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D",children:[" ",L]}),(0,u.jsx)(D.Z.Item,{label:"\u8F6C\u8D26\u91D1\u989D",children:(0,u.jsx)(o.Z,{value:z,suffix:(0,u.jsx)("span",{style:{fontSize:14},children:"\u5143"}),precision:2})})]})},J=function(f){return(0,u.jsx)(P.ZP,{status:"success",title:"\u64CD\u4F5C\u6210\u529F",subTitle:"\u9884\u8BA1\u4E24\u5C0F\u65F6\u5185\u5230\u8D26",extra:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(t.Z,{type:"primary",onClick:f.onFinish,children:"\u518D\u8F6C\u4E00\u7B14"}),(0,u.jsx)(t.Z,{children:"\u67E5\u770B\u8D26\u5355"})]}),className:B().result,children:f.children})},Q=function(){var f=(0,h.useState)({payAccount:"ant-design@alipay.com",receiverAccount:"test@example.com",receiverName:"Alex",amount:"500",receiverMode:"alipay"}),A=(0,p.Z)(f,2),W=A[0],b=A[1],N=(0,h.useState)(0),L=(0,p.Z)(N,2),z=L[0],G=L[1],H=(0,h.useRef)();return(0,u.jsx)(T.ZP,{content:"\u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002",children:(0,u.jsxs)(n.Z,{bordered:!1,children:[(0,u.jsxs)(v.Z,{current:z,onCurrentChange:G,submitter:{render:function(F,K){return F.step===2?null:K}},children:[(0,u.jsxs)(v.Z.StepForm,{formRef:H,title:"\u586B\u5199\u8F6C\u8D26\u4FE1\u606F",initialValues:W,onFinish:function(){var y=(0,a.Z)(C().mark(function F(K){return C().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return b(K),S.abrupt("return",!0);case 2:case"end":return S.stop()}},F)}));return function(F){return y.apply(this,arguments)}}(),children:[(0,u.jsx)(R.Z,{label:"\u4ED8\u6B3E\u8D26\u6237",width:"md",name:"payAccount",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED8\u6B3E\u8D26\u6237"}],valueEnum:{"ant-design@alipay.com":"ant-design@alipay.com"}}),(0,u.jsxs)(Z.ZP.Group,{title:"\u6536\u6B3E\u8D26\u6237",size:8,children:[(0,u.jsx)(R.Z,{name:"receiverMode",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED8\u6B3E\u8D26\u6237"}],valueEnum:{alipay:"\u652F\u4ED8\u5B9D",bank:"\u94F6\u884C\u8D26\u6237"}}),(0,u.jsx)(O.Z,{name:"receiverAccount",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u8D26\u6237"},{type:"email",message:"\u8D26\u6237\u540D\u5E94\u4E3A\u90AE\u7BB1\u683C\u5F0F"}],placeholder:"test@example.com"})]}),(0,u.jsx)(O.Z,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D",width:"md",name:"receiverName",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"}],placeholder:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"}),(0,u.jsx)(I.Z,{label:"\u8F6C\u8D26\u91D1\u989D",name:"amount",width:"md",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8F6C\u8D26\u91D1\u989D"},{pattern:/^(\d+)((?:\.\d+)?)$/,message:"\u8BF7\u8F93\u5165\u5408\u6CD5\u91D1\u989D\u6570\u5B57"}],placeholder:"\u8BF7\u8F93\u5165\u91D1\u989D",fieldProps:{prefix:"\uFFE5"}})]}),(0,u.jsx)(v.Z.StepForm,{title:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F",children:(0,u.jsxs)("div",{className:B().result,children:[(0,u.jsx)(d.Z,{closable:!0,showIcon:!0,message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002",style:{marginBottom:24}}),(0,u.jsx)(V,{stepData:W,bordered:!0}),(0,u.jsx)(s.Z,{style:{margin:"24px 0"}}),(0,u.jsx)(O.Z.Password,{label:"\u652F\u4ED8\u5BC6\u7801",width:"md",name:"password",required:!1,rules:[{required:!0,message:"\u9700\u8981\u652F\u4ED8\u5BC6\u7801\u624D\u80FD\u8FDB\u884C\u652F\u4ED8"}]})]})}),(0,u.jsx)(v.Z.StepForm,{title:"\u5B8C\u6210",children:(0,u.jsx)(J,{onFinish:(0,a.Z)(C().mark(function y(){var F;return C().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:G(0),(F=H.current)===null||F===void 0||F.resetFields();case 2:case"end":return j.stop()}},y)})),children:(0,u.jsx)(V,{stepData:W})})})]}),(0,u.jsx)(s.Z,{style:{margin:"40px 0 24px"}}),(0,u.jsxs)("div",{className:B().desc,children:[(0,u.jsx)("h3",{children:"\u8BF4\u660E"}),(0,u.jsx)("h4",{children:"\u8F6C\u8D26\u5230\u652F\u4ED8\u5B9D\u8D26\u6237"}),(0,u.jsx)("p",{children:"\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002"}),(0,u.jsx)("h4",{children:"\u8F6C\u8D26\u5230\u94F6\u884C\u5361"}),(0,u.jsx)("p",{children:"\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002"})]})]})})};_.default=Q},55015:function(M){var _="\\ud800-\\udfff",e="\\u0300-\\u036f",l="\\ufe20-\\ufe2f",n="\\u20d0-\\u20ff",E=e+l+n,s="\\ufe0e\\ufe0f",m="\\u200d",d=RegExp("["+m+_+E+s+"]");function a(p){return d.test(p)}M.exports=a}}]);
