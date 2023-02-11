"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[1956],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>k});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(o),k=a,u=d["".concat(c,".").concat(k)]||d[k]||h[k]||r;return o?n.createElement(u,i(i({ref:t},p),{},{components:o})):n.createElement(u,i({ref:t},p))}));function k(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},50380:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=o(87462),a=(o(67294),o(3905));const r={id:"alert_slack",title:"Alert Slack Webhook Notifications",sidebar_label:"Alert Slack Webhook Notification",keywords:["open source monitoring system","open source alerter","open source slack webhook notification"]},i=void 0,l={unversionedId:"help/alert_slack",id:"help/alert_slack",title:"Alert Slack Webhook Notifications",description:"Send an alarm message after the threshold is triggered, and notify the recipient through the Slack Webhook.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/help/alert_slack.md",sourceDirName:"help",slug:"/help/alert_slack",permalink:"/en/docs/help/alert_slack",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/current/help/alert_slack.md",tags:[],version:"current",frontMatter:{id:"alert_slack",title:"Alert Slack Webhook Notifications",sidebar_label:"Alert Slack Webhook Notification",keywords:["open source monitoring system","open source alerter","open source slack webhook notification"]},sidebar:"docs",previous:{title:"Alert Discord bot notification",permalink:"/en/docs/help/alert_discord"},next:{title:"Alert Telegram bot notification",permalink:"/en/docs/help/alert_telegram"}},c={},s=[{value:"Steps",id:"steps",level:2},{value:"Open Webhook in Slack, get Webhook URL",id:"open-webhook-in-slack-get-webhook-url",level:3},{value:"Add an alarm notifier to HertzBeat, and the notification method is Slack Webhook",id:"add-an-alarm-notifier-to-hertzbeat-and-the-notification-method-is-slack-webhook",level:3},{value:"Slack Notification FAQ",id:"slack-notification-faq",level:3}],p={toc:s};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Send an alarm message after the threshold is triggered, and notify the recipient through the Slack Webhook.")),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("h3",{id:"open-webhook-in-slack-get-webhook-url"},"Open Webhook in Slack, get Webhook URL"),(0,a.kt)("p",null,"Refer to the official website document ",(0,a.kt)("a",{parentName:"p",href:"https://api.slack.com/messaging/webhooks"},"Sending messages using Incoming Webhooks")),(0,a.kt)("h3",{id:"add-an-alarm-notifier-to-hertzbeat-and-the-notification-method-is-slack-webhook"},"Add an alarm notifier to HertzBeat, and the notification method is Slack Webhook"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u3010Alarm Notification\u3011->\u3010Add Recipient\u3011->\u3010Select Slack Webhook Notification Method\u3011->\u3010Set Webhook URL\u3011-> \u3010OK\u3011"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"email",src:o(6036).Z,width:"3782",height:"1002"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Configure the associated alarm notification strategy\u26a0\ufe0f ","[Add notification strategy]"," -> ","[Associate the recipient just set]"," -> ","[OK]"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note \u26a0\ufe0f Adding a new recipient does not mean that it has taken effect and can receive alarm information. It is also necessary to configure the associated alarm notification strategy, that is, specify which messages are sent to which recipients"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"email",src:o(98936).Z,width:"3778",height:"1284"})),(0,a.kt)("h3",{id:"slack-notification-faq"},"Slack Notification FAQ"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Slack did not receive the robot warning notification")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please check whether the alarm information has been triggered in the alarm center",(0,a.kt)("br",{parentName:"p"}),"\n","Please check whether the slack webhook url are configured correctly, and whether the alarm policy association has been configured   ")),(0,a.kt)("p",null,"Other questions can be fed back through the communication group ISSUE!"))}h.isMDXComponent=!0},98936:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/alert-notice-policy-a44e898a35d581c7bb8f52bd2499387f.png"},6036:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/slack-bot-1-5cc584b2823e4afd5adee02aea2fb1ca.png"}}]);