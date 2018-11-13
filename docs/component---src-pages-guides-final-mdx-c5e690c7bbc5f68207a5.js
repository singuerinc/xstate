(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{150:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",function(){return i});var n=t(184),s=t.n(n),c=t(0),o=t.n(c),l=t(174),m=t(181);a.default=function(e){var a=e.components,t=s()(e,["components"]);return o.a.createElement(l.MDXTag,{name:"wrapper",Layout:m.a,layoutProps:t,components:a},o.a.createElement(l.MDXTag,{name:"h1",components:a,props:{id:"final-states"}},o.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"h1",props:{href:"#final-states","aria-hidden":!0,class:"anchor"}}),"Final States"),o.a.createElement(l.MDXTag,{name:"p",components:a},'A final state node indicates the completion of a part of the statechart, or the entire statechart. Specifically, it indicates that its parent compound state node is "done". If the parent is the root statechart, then the entire statechart is "done" and any further execution is stopped.'),o.a.createElement(l.MDXTag,{name:"p",components:a},"This has many useful use-cases. To indicate that a state node is final, set its ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"type")," property to ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"'final'"),":"),o.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},o.a.createElement("pre",{className:"language-js"},o.a.createElement("code",{className:"language-js"},o.a.createElement("span",{className:"token keyword"},"const")," lightMachine ",o.a.createElement("span",{className:"token operator"},"=")," ",o.a.createElement("span",{className:"token function"},"Machine"),o.a.createElement("span",{className:"token punctuation"},"("),o.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ","id",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'light'"),o.a.createElement("span",{className:"token punctuation"},","),"\n","  ","initial",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'green'"),o.a.createElement("span",{className:"token punctuation"},","),"\n","  ","states",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","green",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","on",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{")," ",o.a.createElement("span",{className:"token constant"},"TIMER"),o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'yellow'")," ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},","),"\n","    ","yellow",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","on",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{")," ",o.a.createElement("span",{className:"token constant"},"TIMER"),o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'red'")," ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},","),"\n","    ","red",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","type",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'parallel'"),o.a.createElement("span",{className:"token punctuation"},","),"\n","      ","states",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ","crosswalkNorth",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","          ","initial",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'walk'"),o.a.createElement("span",{className:"token punctuation"},","),"\n","          ","states",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","            ","walk",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","              ","on",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{")," ",o.a.createElement("span",{className:"token constant"},"PED_WAIT"),o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'wait'")," ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","            ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},","),"\n","            ","wait",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","              ","on",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{")," ",o.a.createElement("span",{className:"token constant"},"PED_STOP"),o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'stop'")," ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","            ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},","),"\n","            ","stop",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","              ",o.a.createElement("span",{className:"token comment"},"// 'stop' is a final state node for 'crosswalkNorth'"),"\n","              ","type",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'final'"),"\n","            ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","          ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},","),"\n","          ","onDone",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","            ","actions",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'stopCrosswalkNorth'"),"\n","          ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","        ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},","),"\n","        ","crosswalkEast",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","          ","initial",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'walk'"),o.a.createElement("span",{className:"token punctuation"},","),"\n","          ","states",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","            ","walk",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","              ","on",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{")," ",o.a.createElement("span",{className:"token constant"},"PED_WAIT"),o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'wait'")," ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","            ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},","),"\n","            ","wait",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","              ","on",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{")," ",o.a.createElement("span",{className:"token constant"},"PED_STOP"),o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'stop'")," ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","            ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},","),"\n","            ","stop",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","              ","type",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'final'"),"\n","            ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","          ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},","),"\n","          ","onDone",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","            ",o.a.createElement("span",{className:"token comment"},"// 'stop' is a final state node for 'crosswalkEast'"),"\n","            ","actions",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'stopCrosswalkEast'"),"\n","          ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","        ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","      ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},","),"\n","      ","onDone",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'green'"),"\n","    ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","  ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},";")))),o.a.createElement(l.MDXTag,{name:"p",components:a},"In a compound state, reaching a final child state node (with ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"{ type: 'final' }"),") will interally raise a ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"done(...)")," event for that compound state node (e.g., ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},'"done.state.light.crosswalkEast"'),"). Using ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"onDone")," is equivalent to defining a transition for this event."),o.a.createElement(l.MDXTag,{name:"h2",components:a,props:{id:"parallel-states"}},o.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#parallel-states","aria-hidden":!0,class:"anchor"}}),"Parallel states"),o.a.createElement(l.MDXTag,{name:"p",components:a},"When every child state node in a parallel state node is ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"p"},"done"),", the parent parallel state node is also ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"p"},"done"),". That is, when every final state node in every child compound node is reached, the ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"done(...)")," event will be raised for the parallel state node."),o.a.createElement(l.MDXTag,{name:"p",components:a},"This is very useful in modeling parallel tasks. For example, suppose ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"user")," and ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"items")," are two parallel tasks:"),o.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},o.a.createElement("pre",{className:"language-js"},o.a.createElement("code",{className:"language-js"},o.a.createElement("span",{className:"token keyword"},"const")," shoppingMachine ",o.a.createElement("span",{className:"token operator"},"=")," ",o.a.createElement("span",{className:"token function"},"Machine"),o.a.createElement("span",{className:"token punctuation"},"("),o.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ","id",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'shopping'"),o.a.createElement("span",{className:"token punctuation"},","),"\n","  ","type",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'parallel'"),o.a.createElement("span",{className:"token punctuation"},","),"\n","  ","states",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","user",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","initial",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'pending'"),o.a.createElement("span",{className:"token punctuation"},","),"\n","      ","states",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ","pending",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","          ","onEntry",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'getUser'"),o.a.createElement("span",{className:"token punctuation"},","),"\n","          ","on",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","            ",o.a.createElement("span",{className:"token constant"},"RESOLVE_USER"),o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'success'"),o.a.createElement("span",{className:"token punctuation"},","),"\n","            ",o.a.createElement("span",{className:"token constant"},"REJECT_USER"),o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'failure'"),"\n","          ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","        ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},","),"\n","        ","success",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{")," type",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'final'")," ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},","),"\n","        ","failure",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),o.a.createElement("span",{className:"token punctuation"},"}"),"\n","      ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},","),"\n","    ","items",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","initial",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'pending'"),o.a.createElement("span",{className:"token punctuation"},","),"\n","      ","states",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ","pending",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","          ","onEntry",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'getItems'"),o.a.createElement("span",{className:"token punctuation"},","),"\n","          ","on",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","            ",o.a.createElement("span",{className:"token constant"},"RESOLVE_ITEMS"),o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'success'"),o.a.createElement("span",{className:"token punctuation"},","),"\n","            ",o.a.createElement("span",{className:"token constant"},"REJECT_ITEMS"),o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'failure'"),"\n","          ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","        ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},","),"\n","        ","success",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{")," type",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'final'")," ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},","),"\n","        ","failure",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),o.a.createElement("span",{className:"token punctuation"},"}"),"\n","      ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","  ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},","),"\n","  ","onDone",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","actions",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'renderScreen'"),"\n","  ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},";")))),o.a.createElement(l.MDXTag,{name:"p",components:a},"Only when all of the child states (e.g., ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"'user'")," and ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"'items'"),") are in their final states will the ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"onDone")," transition take place. In this case, once the ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"'shopping.user.success'")," and ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"'shopping.items.success'")," state nodes are reached, the ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"'renderScreen'")," action will be executed."),o.a.createElement(l.MDXTag,{name:"h2",components:a,props:{id:"scxml"}},o.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#scxml","aria-hidden":!0,class:"anchor"}}),"SCXML"),o.a.createElement(l.MDXTag,{name:"p",components:a},"Final states correspond to the SCXML spec: ",o.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://www.w3.org/TR/scxml/#final"}},"https://www.w3.org/TR/scxml/#final")),o.a.createElement(l.MDXTag,{name:"h2",components:a,props:{id:"notes"}},o.a.createElement(l.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#notes","aria-hidden":!0,class:"anchor"}}),"Notes"),o.a.createElement(l.MDXTag,{name:"ul",components:a},o.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},"A final state node only indicates that its immediate parent is ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"li"},"done"),". It does not affect the ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"li"},"done")," status of any higher parents, except with parallel state nodes, which are ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"li"},"done")," when all of its child compound state nodes are ",o.a.createElement(l.MDXTag,{name:"em",components:a,parentName:"li"},"done"),"."),o.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},"Final state nodes cannot have any children. They are atomic state nodes."),o.a.createElement(l.MDXTag,{name:"li",components:a,parentName:"ul"},"You can specify ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"onEntry")," and ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"onExit")," actions on final state nodes.")))};var i={}},168:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return E}),t.d(a,"StaticQueryContext",function(){return p}),t.d(a,"StaticQuery",function(){return N});var n=t(0),s=t.n(n),c=t(4),o=t.n(c),l=t(167),m=t.n(l);t.d(a,"Link",function(){return m.a}),t.d(a,"withPrefix",function(){return l.withPrefix}),t.d(a,"navigate",function(){return l.navigate}),t.d(a,"push",function(){return l.push}),t.d(a,"replace",function(){return l.replace}),t.d(a,"navigateTo",function(){return l.navigateTo});var i=t(170),r=t.n(i);t.d(a,"PageRenderer",function(){return r.a});var u=t(34);t.d(a,"parsePath",function(){return u.a});var p=s.a.createContext({}),N=function(e){return s.a.createElement(p.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};function E(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}N.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},170:function(e,a,t){var n;e.exports=(n=t(173))&&n.default||n},171:function(e,a,t){e.exports={heading:"typography-module--heading--1nwnC",h1:"typography-module--h1--2Esa2",h2:"typography-module--h2--3ie0v",code:"typography-module--code--240F2",anchor:"typography-module--anchor--1uJIO"}},172:function(e){e.exports={data:{site:{siteMetadata:{title:"XState Documentation"}}}}},173:function(e,a,t){"use strict";t.r(a);var n=t(10),s=t.n(n),c=t(0),o=t.n(c),l=t(4),m=t.n(l),i=t(51),r=t(2),u=function(e){var a=e.location,t=r.default.getResourcesForPathnameSync(a.pathname);return o.a.createElement(i.a,s()({location:a,pageResources:t},t.json))};u.propTypes={location:m.a.shape({pathname:m.a.string.isRequired}).isRequired},a.default=u},175:function(e,a,t){e.exports={layout:"layout-module--layout--WT_lX",header:"layout-module--header--7X126",sidebar:"layout-module--sidebar--3qq0Q",content:"layout-module--content--2CPz1"}},176:function(e,a){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNzkuOCA5OC41IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNzkuOCA5OC41OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGcgaWQ9IkxheWVyXzYiPgoJCTxwYXRoIGQ9Ik01NS44LDEwLjRMNTUuOCwxMC40aDE5LjVMNTUuNiw0NC42bDAsMEM0OS42LDMzLjksNDkuNywyMC45LDU1LjgsMTAuNHoiIGZpbGw9InZhcigtLWZpbGwsIGJsYWNrKSIvPgoJCTxwb2x5Z29uIHBvaW50cz0iNzUuNCw4OC4xIDMwLjUsMTAuNCAxMSwxMC40IDMzLjQsNDkuMyAxMSw4OC4xIDMwLjUsODguMSA0My4yLDY2LjIgNTUuOCw4OC4xIiBmaWxsPSJ2YXIoLS1maWxsLCBibGFjaykiLz4KCTwvZz4KCTxnIGNsYXNzPSJzdDAiPgoJCTxwYXRoIGQ9Ik04OS4xLDU5LjhjMy4yLDIuNyw2LjksNCwxMS4zLDQuMWM1LjItMC4xLDcuOC0yLDcuOS01LjdjMC0zLjEtMS43LTQuOS01LjItNS41Yy0xLjYtMC4yLTMuNC0wLjUtNS4zLTAuOAoJCQljLTMuNC0wLjYtNi0xLjktNy44LTMuOWMtMS44LTIuMS0yLjgtNC42LTIuOC03LjZjMC0zLjYsMS4yLTYuNSwzLjUtOC43YzIuMi0yLjIsNS40LTMuMyw5LjUtMy4zYzQuOSwwLjEsOS4yLDEuNSwxMi45LDQuMgoJCQlsLTMuNCw1LjFjLTMtMi02LjMtMy4xLTkuOC0zLjJjLTEuOSwwLTMuNCwwLjUtNC42LDEuNGMtMS4zLDEtMiwyLjUtMiw0LjRjMCwxLjIsMC40LDIuMywxLjMsMy4yYzAuOSwxLDIuMywxLjcsNC4zLDIKCQkJYzEuMSwwLjIsMi42LDAuNCw0LjUsMC42YzMuNywwLjUsNi41LDEuOSw4LjMsNC4xYzEuOCwyLjIsMi42LDQuNywyLjYsNy43QzExNCw2NiwxMDkuNCw2OS45LDEwMC4zLDcwYy01LjksMC0xMC45LTEuOS0xNS4yLTUuNgoJCQlMODkuMSw1OS44eiIgZmlsbD0idmFyKC0tZmlsbCwgYmxhY2spIi8+CgkJPHBhdGggZD0iTTEzNS41LDM0LjJoLTEwLjl2LTUuNWgyNy44djUuNWgtMTAuOXYzNS41aC02VjM0LjJ6IiBmaWxsPSJ2YXIoLS1maWxsLCBibGFjaykiLz4KCQk8cGF0aCBkPSJNMTgwLjksNjAuNWgtMTUuMWwtMy4xLDkuMmgtNi40bDE0LjQtNDFoNWwxNC40LDQxSDE4NEwxODAuOSw2MC41eiBNMTc5LjIsNTVsLTUuNy0xNy45aC0wLjFMMTY3LjYsNTVIMTc5LjJ6IiBmaWxsPSJ2YXIoLS1maWxsLCBibGFjaykiLz4KCQk8cGF0aCBkPSJNMjA1LjQsMzQuMmgtMTAuOXYtNS41aDI3Ljh2NS41aC0xMC45djM1LjVoLTZWMzQuMnoiIGZpbGw9InZhcigtLWZpbGwsIGJsYWNrKSIvPgoJCTxwYXRoIGQ9Ik0yMzQuMiwyOC43aDI1LjR2NS44aC0xOS40djExLjdoMTYuNXY1LjVoLTE2LjV2MTIuMWgxOS40djUuOGgtMjUuNFYyOC43eiIgZmlsbD0idmFyKC0tZmlsbCwgYmxhY2spIi8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="},177:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48cGF0aCBkPSJNMTY1LjkgMzk3LjRjMCAyLTIuMyAzLjYtNS4yIDMuNi0zLjMuMy01LjYtMS4zLTUuNi0zLjYgMC0yIDIuMy0zLjYgNS4yLTMuNiAzLS4zIDUuNiAxLjMgNS42IDMuNnptLTMxLjEtNC41Yy0uNyAyIDEuMyA0LjMgNC4zIDQuOSAyLjYgMSA1LjYgMCA2LjItMnMtMS4zLTQuMy00LjMtNS4yYy0yLjYtLjctNS41LjMtNi4yIDIuM3ptNDQuMi0xLjdjLTIuOS43LTQuOSAyLjYtNC42IDQuOS4zIDIgMi45IDMuMyA1LjkgMi42IDIuOS0uNyA0LjktMi42IDQuNi00LjYtLjMtMS45LTMtMy4yLTUuOS0yLjl6TTI0NC44IDhDMTA2LjEgOCAwIDExMy4zIDAgMjUyYzAgMTEwLjkgNjkuOCAyMDUuOCAxNjkuNSAyMzkuMiAxMi44IDIuMyAxNy4zLTUuNiAxNy4zLTEyLjEgMC02LjItLjMtNDAuNC0uMy02MS40IDAgMC03MCAxNS04NC43LTI5LjggMCAwLTExLjQtMjkuMS0yNy44LTM2LjYgMCAwLTIyLjktMTUuNyAxLjYtMTUuNCAwIDAgMjQuOSAyIDM4LjYgMjUuOCAyMS45IDM4LjYgNTguNiAyNy41IDcyLjkgMjAuOSAyLjMtMTYgOC44LTI3LjEgMTYtMzMuNy01NS45LTYuMi0xMTIuMy0xNC4zLTExMi4zLTExMC41IDAtMjcuNSA3LjYtNDEuMyAyMy42LTU4LjktMi42LTYuNS0xMS4xLTMzLjMgMi42LTY3LjkgMjAuOS02LjUgNjkgMjcgNjkgMjcgMjAtNS42IDQxLjUtOC41IDYyLjgtOC41czQyLjggMi45IDYyLjggOC41YzAgMCA0OC4xLTMzLjYgNjktMjcgMTMuNyAzNC43IDUuMiA2MS40IDIuNiA2Ny45IDE2IDE3LjcgMjUuOCAzMS41IDI1LjggNTguOSAwIDk2LjUtNTguOSAxMDQuMi0xMTQuOCAxMTAuNSA5LjIgNy45IDE3IDIyLjkgMTcgNDYuNCAwIDMzLjctLjMgNzUuNC0uMyA4My42IDAgNi41IDQuNiAxNC40IDE3LjMgMTIuMUM0MjguMiA0NTcuOCA0OTYgMzYyLjkgNDk2IDI1MiA0OTYgMTEzLjMgMzgzLjUgOCAyNDQuOCA4ek05Ny4yIDM1Mi45Yy0xLjMgMS0xIDMuMy43IDUuMiAxLjYgMS42IDMuOSAyLjMgNS4yIDEgMS4zLTEgMS0zLjMtLjctNS4yLTEuNi0xLjYtMy45LTIuMy01LjItMXptLTEwLjgtOC4xYy0uNyAxLjMuMyAyLjkgMi4zIDMuOSAxLjYgMSAzLjYuNyA0LjMtLjcuNy0xLjMtLjMtMi45LTIuMy0zLjktMi0uNi0zLjYtLjMtNC4zLjd6bTMyLjQgMzUuNmMtMS42IDEuMy0xIDQuMyAxLjMgNi4yIDIuMyAyLjMgNS4yIDIuNiA2LjUgMSAxLjMtMS4zLjctNC4zLTEuMy02LjItMi4yLTIuMy01LjItMi42LTYuNS0xem0tMTEuNC0xNC43Yy0xLjYgMS0xLjYgMy42IDAgNS45IDEuNiAyLjMgNC4zIDMuMyA1LjYgMi4zIDEuNi0xLjMgMS42LTMuOSAwLTYuMi0xLjQtMi4zLTQtMy4zLTUuNi0yeiIvPjwvc3ZnPgo8IS0tCkZvbnQgQXdlc29tZSBQcm8gNS40LjIgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20KTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkKLS0+Cg=="},178:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBkPSJNNDQyIDExNEg2YTYgNiAwIDAgMS02LTZWODRhNiA2IDAgMCAxIDYtNmg0MzZhNiA2IDAgMCAxIDYgNnYyNGE2IDYgMCAwIDEtNiA2em0wIDE2MEg2YTYgNiAwIDAgMS02LTZ2LTI0YTYgNiAwIDAgMSA2LTZoNDM2YTYgNiAwIDAgMSA2IDZ2MjRhNiA2IDAgMCAxLTYgNnptMCAxNjBINmE2IDYgMCAwIDEtNi02di0yNGE2IDYgMCAwIDEgNi02aDQzNmE2IDYgMCAwIDEgNiA2djI0YTYgNiAwIDAgMS02IDZ6Ii8+PC9zdmc+CjwhLS0KRm9udCBBd2Vzb21lIFBybyA1LjQuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbQpMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKQotLT4K"},179:function(e,a,t){e.exports={logo:"header-module--logo--3gu8x",header:"header-module--header--2Q3RK",github:"header-module--github--2n2t6",viz:"header-module--viz--E9thS",links:"header-module--links--Di_J3",menu:"header-module--menu--3bKjy"}},180:function(e,a,t){e.exports={nav:"sidebar-module--nav--dK6KB",items:"sidebar-module--items--3H_1t",item:"sidebar-module--item--3A0ef",topLevel:"sidebar-module--topLevel--3yzSB",link:"sidebar-module--link--2azLL"}},181:function(e,a,t){"use strict";t(76),t(182);var n=t(7),s=t.n(n),c=t(172),o=t(0),l=t.n(o),m=t(4),i=t.n(m),r=t(183),u=t.n(r),p=t(168),N=t(174),E=t(175),M=t.n(E),g=t(171),k=t.n(g),d=(t(185),t(169)),L=t.n(d),y=(t(186),function(e){function a(){return e.apply(this,arguments)||this}return s()(a,e),a.prototype.render=function(){var e=this.props,a=e.tag,t=e.id;return l.a.createElement(a,{className:L()(k.a.heading,k.a[a]),id:t},l.a.createElement("span",null,this.props.children))},a}(l.a.Component));function j(e){return l.a.createElement("a",Object.assign({},e,{className:L()(k.a.anchor)}))}var h=t(187),I=t.n(h),T=t(176),D=t.n(T),C=t(177),S=t.n(C),w=t(178),A=t.n(w),x=t(179),f=t.n(x),z=function(e){var a=e.siteTitle,t=e.className,n=e.onToggleMenu;return l.a.createElement("header",{className:L()(t,f.a.header)},l.a.createElement(p.Link,{to:"/",style:{color:"white",textDecoration:"none"},alt:a,className:f.a.logo},l.a.createElement("img",{src:D.a,width:"auto"})),l.a.createElement("div",{className:f.a.links},l.a.createElement("a",{href:"https://statecharts.github.io/xstate-viz",className:f.a.viz},"viz"),l.a.createElement("a",{href:"https://github.com/davidkpiano/xstate",alt:"XState on GitHub",className:f.a.github},l.a.createElement("img",{src:S.a,width:"auto"})),l.a.createElement("button",{className:f.a.menu,onClick:n},l.a.createElement("img",{src:A.a,width:"auto"}))))},Y=(t(188),t(77),t(50),t(189),t(49),t(180)),b=t.n(Y);console.log(b.a);var v={guides:{title:"Guides",pages:{start:{title:"Getting Started"},installation:{title:"Installation"},states:{title:"States"},transitions:{title:"Transitions"},hierarchical:{title:"Hierarchical States"},parallel:{title:"Parallel States"},actions:{title:"Actions"},guards:{title:"Guards"},context:{title:"Context"},activities:{title:"Activities"},communication:{title:"Communication"},delays:{title:"Delays"},final:{title:"Final States"},history:{title:"History State Nodes"},ids:{title:"Identifying States"},internal:{title:"Internal Transitions"},interpretation:{title:"Interpreting Machines"},typescript:{title:"TypeScript Usage"}}},recipes:{title:"Recipes",pages:{react:{title:"React"},rxjs:{title:"RxJS"}}},api:{title:"API Docs",pages:{api:{title:"TypeScript",link:"/docs/api"},v3:{title:"Version 3.x",link:"/docs-v3"}}}},O=function(e){function a(){return e.apply(this,arguments)||this}s()(a,e);var t=a.prototype;return t.renderPages=function(e,a){return l.a.createElement("ul",{className:b.a.items},Object.keys(e).map(function(t){var n=e[t],s=e[t].link||"docs/"+a+"/"+t;return l.a.createElement("li",{className:b.a.item},l.a.createElement(p.Link,{to:s,className:b.a.link},n.title))}))},t.render=function(){var e=this;this.props.visible;return l.a.createElement("nav",{className:b.a.nav},l.a.createElement("ul",{className:b.a.items},Object.keys(v).map(function(a){var t=v[a],n=t.pages,s=t.title,c=t.link,o=void 0===c?"docs/"+a:c;return l.a.createElement("li",{className:L()(b.a.item,b.a.topLevel)},l.a.createElement(p.Link,{to:o,className:b.a.link},s),n&&e.renderPages(n,a))})))},a}(l.a.Component),X=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return(a=e.call.apply(e,[this].concat(n))||this).state={menuToggled:!1},a}s()(a,e);var t=a.prototype;return t.componentDidMount=function(){I.a.initHighlighting()},t.toggleMenu=function(){this.setState({menuToggled:!this.state.menuToggled})},t.render=function(){var e=this,a=this.props.children;return l.a.createElement(p.StaticQuery,{query:"1044757290",render:function(t){return l.a.createElement("main",{className:M.a.layout},l.a.createElement(u.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"XState is a library for creating state machines and statecharts in JavaScript."},{name:"keywords",content:"sample, something"}]},l.a.createElement("html",{lang:"en"}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:300,700|Source+Code+Pro",rel:"stylesheet"})),l.a.createElement(z,{className:M.a.header,siteTitle:t.site.siteMetadata.title,onToggleMenu:e.toggleMenu.bind(e)}),l.a.createElement("div",{className:M.a.sidebar,"data-visible":e.state.menuToggled||void 0},l.a.createElement(O,null)),l.a.createElement(N.MDXProvider,{components:{h1:function(e){return l.a.createElement(y,Object.assign({tag:"h1"},e))},h2:function(e){return l.a.createElement(y,Object.assign({tag:"h2"},e))},h3:function(e){return l.a.createElement(y,Object.assign({tag:"h3"},e))},a:function(e){return l.a.createElement(j,e)},inlineCode:function(e){return l.a.createElement("code",{className:k.a.code},e.children)}}},l.a.createElement("main",{className:M.a.content},a)))},data:c})},a}(l.a.Component);X.propTypes={children:i.a.node.isRequired};a.a=X}}]);
//# sourceMappingURL=component---src-pages-guides-final-mdx-c5e690c7bbc5f68207a5.js.map