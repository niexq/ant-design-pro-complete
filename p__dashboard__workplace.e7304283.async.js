(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8767],{19697:function(x){x.exports={linkGroup:"linkGroup___3u5k3"}},5598:function(x){x.exports={activitiesList:"activitiesList___1iz4w",username:"username___2CaQo",event:"event___37Bra",pageHeaderContent:"pageHeaderContent___1v9Rj",avatar:"avatar___2REGU",content:"content___2JXYM",contentTitle:"contentTitle___2ZQYk",extraContent:"extraContent___171XZ",statItem:"statItem___WnzK8",members:"members___pCbZL",member:"member___1PrAP",projectList:"projectList___1-phY",cardTitle:"cardTitle___i2mGR",projectGrid:"projectGrid___2_ET-",projectItemContent:"projectItemContent___1Af7z",datetime:"datetime___3wNS1",activeCard:"activeCard___2L47N"}},10443:function(x,A,e){"use strict";e.r(A),e.d(A,{default:function(){return q}});var rt=e(80754),B=e(80021),nt=e(88988),g=e(97325),st=e(27820),d=e(75054),lt=e(10631),y=e(66871),it=e(66377),C=e(92948),dt=e(88812),p=e(75971),ot=e(88117),D=e(51586),z=e(63871),u=e(42355),h=e(80444),U=e(89716),R=e(28950),G=e.n(R),ut=e(96118),b=e(27914),S=e(59301),W=e(60615),Y=e(19697),$=e.n(Y),t=e(37712),L=function(s){var a=s.links,v=s.linkElement,f=s.onAdd;return(0,t.jsxs)("div",{className:$().linkGroup,children:[a.map(function(o){return(0,S.createElement)(v,{key:"linkGroup-item-".concat(o.id||o.title),to:o.href,href:o.href},o.title)}),(0,t.jsxs)(b.Z,{size:"small",type:"primary",ghost:!0,onClick:f,children:[(0,t.jsx)(W.Z,{})," \u6DFB\u52A0"]})]})};L.defaultProps={links:[],onAdd:function(){},linkElement:"a"};var H=L,Q=e(5598),r=e.n(Q),E=e(51102),X=e(92211),c=e.n(X);function M(){return N.apply(this,arguments)}function N(){return N=(0,E.Z)(c().mark(function i(){return c().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,u.WY)("/api/project/notice"));case 1:case"end":return a.stop()}},i)})),N.apply(this,arguments)}function k(){return Z.apply(this,arguments)}function Z(){return Z=(0,E.Z)(c().mark(function i(){return c().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,u.WY)("/api/activities"));case 1:case"end":return a.stop()}},i)})),Z.apply(this,arguments)}function O(){return F.apply(this,arguments)}function F(){return F=(0,E.Z)(c().mark(function i(){return c().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,u.WY)("/api/fake_workplace_chart_data"));case 1:case"end":return a.stop()}},i)})),F.apply(this,arguments)}var J=[{title:"\u64CD\u4F5C\u4E00",href:""},{title:"\u64CD\u4F5C\u4E8C",href:""},{title:"\u64CD\u4F5C\u4E09",href:""},{title:"\u64CD\u4F5C\u56DB",href:""},{title:"\u64CD\u4F5C\u4E94",href:""},{title:"\u64CD\u4F5C\u516D",href:""}],K=function(s){var a=s.currentUser,v=a&&Object.keys(a).length;return v?(0,t.jsxs)("div",{className:r().pageHeaderContent,children:[(0,t.jsx)("div",{className:r().avatar,children:(0,t.jsx)(p.C,{size:"large",src:a.avatar})}),(0,t.jsxs)("div",{className:r().content,children:[(0,t.jsxs)("div",{className:r().contentTitle,children:["\u65E9\u5B89\uFF0C",a.name,"\uFF0C\u795D\u4F60\u5F00\u5FC3\u6BCF\u4E00\u5929\uFF01"]}),(0,t.jsxs)("div",{children:[a.title," |",a.group]})]})]}):(0,t.jsx)(D.Z,{avatar:!0,paragraph:{rows:1},active:!0})},V=function(){return(0,t.jsxs)("div",{className:r().extraContent,children:[(0,t.jsx)("div",{className:r().statItem,children:(0,t.jsx)(C.Z,{title:"\u9879\u76EE\u6570",value:56})}),(0,t.jsx)("div",{className:r().statItem,children:(0,t.jsx)(C.Z,{title:"\u56E2\u961F\u5185\u6392\u540D",value:8,suffix:"/ 24"})}),(0,t.jsx)("div",{className:r().statItem,children:(0,t.jsx)(C.Z,{title:"\u9879\u76EE\u8BBF\u95EE",value:2223})})]})},w=function(){var s,a=(0,u.QT)(M),v=a.loading,f=a.data,o=f===void 0?[]:f,P=(0,u.QT)(k),I=P.loading,T=P.data,_=T===void 0?[]:T,tt=(0,u.QT)(O),m=tt.data,et=function(l){var at=l.template.split(/@\{([^{}]*)\}/gi).map(function(j){return l[j]?(0,t.jsx)("a",{href:l[j].link,children:l[j].name},l[j].name):j});return(0,t.jsx)(y.ZP.Item,{children:(0,t.jsx)(y.ZP.Item.Meta,{avatar:(0,t.jsx)(p.C,{src:l.user.avatar}),title:(0,t.jsxs)("span",{children:[(0,t.jsx)("a",{className:r().username,children:l.user.name}),"\xA0",(0,t.jsx)("span",{className:r().event,children:at})]}),description:(0,t.jsx)("span",{className:r().datetime,title:l.updatedAt,children:G()(l.updatedAt).fromNow()})})},l.id)};return(0,t.jsx)(U.ZP,{content:(0,t.jsx)(K,{currentUser:{avatar:"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",name:"\u5434\u5F66\u7956",userid:"00000001",email:"antdesign@alipay.com",signature:"\u6D77\u7EB3\u767E\u5DDD\uFF0C\u6709\u5BB9\u4E43\u5927",title:"\u4EA4\u4E92\u4E13\u5BB6",group:"\u8682\u8681\u91D1\u670D\uFF0D\u67D0\u67D0\u67D0\u4E8B\u4E1A\u7FA4\uFF0D\u67D0\u67D0\u5E73\u53F0\u90E8\uFF0D\u67D0\u67D0\u6280\u672F\u90E8\uFF0DUED"}}),extraContent:(0,t.jsx)(V,{}),children:(0,t.jsxs)(B.Z,{gutter:24,children:[(0,t.jsxs)(g.Z,{xl:16,lg:24,md:24,sm:24,xs:24,children:[(0,t.jsx)(d.Z,{className:r().projectList,style:{marginBottom:24},title:"\u8FDB\u884C\u4E2D\u7684\u9879\u76EE",bordered:!1,extra:(0,t.jsx)(h.rU,{to:"/",children:"\u5168\u90E8\u9879\u76EE"}),loading:v,bodyStyle:{padding:0},children:o.map(function(n){return(0,t.jsx)(d.Z.Grid,{className:r().projectGrid,children:(0,t.jsxs)(d.Z,{bodyStyle:{padding:0},bordered:!1,children:[(0,t.jsx)(d.Z.Meta,{title:(0,t.jsxs)("div",{className:r().cardTitle,children:[(0,t.jsx)(p.C,{size:"small",src:n.logo}),(0,t.jsx)(h.rU,{to:n.href,children:n.title})]}),description:n.description}),(0,t.jsxs)("div",{className:r().projectItemContent,children:[(0,t.jsx)(h.rU,{to:n.memberLink,children:n.member||""}),n.updatedAt&&(0,t.jsx)("span",{className:r().datetime,title:n.updatedAt,children:G()(n.updatedAt).fromNow()})]})]})},n.id)})}),(0,t.jsx)(d.Z,{bodyStyle:{padding:0},bordered:!1,className:r().activeCard,title:"\u52A8\u6001",loading:I,children:(0,t.jsx)(y.ZP,{loading:I,renderItem:function(l){return et(l)},dataSource:_,className:r().activitiesList,size:"large"})})]}),(0,t.jsxs)(g.Z,{xl:8,lg:24,md:24,sm:24,xs:24,children:[(0,t.jsx)(d.Z,{style:{marginBottom:24},title:"\u5FEB\u901F\u5F00\u59CB / \u4FBF\u6377\u5BFC\u822A",bordered:!1,bodyStyle:{padding:0},children:(0,t.jsx)(H,{onAdd:function(){},links:J,linkElement:h.rU})}),(0,t.jsx)(d.Z,{style:{marginBottom:24},bordered:!1,title:"XX \u6307\u6570",loading:(m==null||(s=m.radarData)===null||s===void 0?void 0:s.length)===0,children:(0,t.jsx)("div",{className:r().chart,children:(0,t.jsx)(z.Fk,{height:343,data:(m==null?void 0:m.radarData)||[],angleField:"label",seriesField:"name",radiusField:"value",area:{visible:!1},point:{visible:!0},legend:{position:"bottom-center"}})})}),(0,t.jsx)(d.Z,{bodyStyle:{paddingTop:12,paddingBottom:12},bordered:!1,title:"\u56E2\u961F",loading:v,children:(0,t.jsx)("div",{className:r().members,children:(0,t.jsx)(B.Z,{gutter:48,children:o.map(function(n){return(0,t.jsx)(g.Z,{span:12,children:(0,t.jsxs)(h.rU,{to:n.href,children:[(0,t.jsx)(p.C,{src:n.logo,size:"small"}),(0,t.jsx)("span",{className:r().member,children:n.member})]})},"members-item-".concat(n.id))})})})})]})]})})},q=w}}]);
