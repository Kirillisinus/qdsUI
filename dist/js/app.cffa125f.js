(function(){"use strict";var t={9658:function(t,n,s){var e=s(9242),i=s(3396);const a={id:"content"},r=(0,i._)("div",{id:"footer"},null,-1);function o(t,n,s,e,o,l){const c=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",a,[(0,i.Wm)(c)]),r],64)}var l={},c=s(89);const d=(0,c.Z)(l,[["render",o]]);var u=d,v=s(678),m=s(7139),p=s(5713);const g={class:"btn-back"},_=(0,i.Uk)(" Назад "),f=(0,i._)("img",{src:p,alt:"logo",id:"logo-lobby"},null,-1),w={class:"lobby"},y={class:"room"},h={class:"players"},b=(0,i._)("div",{class:"count-players"},"Players 1/16",-1),k={class:"player"},E=(0,i.uE)('<div class="empty">Empty</div><div class="empty">Empty</div><div class="empty">Empty</div><div class="empty">Empty</div><div class="empty">Empty</div><div class="empty">Empty</div><div class="empty">Empty</div><div class="empty">Empty</div><div class="empty">Empty</div><div class="empty">Empty</div><div class="empty">Empty</div><div class="empty">Empty</div>',12),x={class:"game-settings"},O=(0,i._)("div",{class:"settings-text"},"Custom settings",-1),C=(0,i._)("div",{class:"settings"},null,-1),W={class:"start-game"},P=(0,i._)("div",null,"Начать",-1),j=(0,i._)("i",{class:"icon-arrow-right"},null,-1),D=(0,i._)("div",{class:"button invite-btn"},[(0,i._)("div",null,"Пригласить"),(0,i._)("i",{class:"icon-arrow-right"})],-1);function Z(t,n,s,e,a,r){const o=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",g,[(0,i.Wm)(o,{class:"back",to:"/"},{default:(0,i.w5)((()=>[_])),_:1}),f]),(0,i._)("div",w,[(0,i._)("div",y,[(0,i._)("section",h,[b,(0,i._)("div",k,(0,m.zw)(a.name),1),E]),(0,i._)("section",x,[O,C,(0,i._)("div",W,[(0,i.Wm)(o,{class:"button start-btn",to:"/write"},{default:(0,i.w5)((()=>[P,j])),_:1}),D])])])])],64)}var U={data(){return{name:String=""}},methods:{mounted(){this.name=this.$cookies.get("username")}}};const M=(0,c.Z)(U,[["render",Z]]);var $=M;const z=(0,i._)("div",{id:"header"},[(0,i._)("img",{src:p,alt:"logo",id:"logo"})],-1),H={class:"entrance"},T=(0,i._)("span",{class:"invite"},"Представьтесь, пожалуйста ",-1),Y=(0,i._)("i",{class:"icon-arrow-right"},null,-1),q=(0,i._)("div",null,"Cоздать комнату",-1),B=(0,i._)("i",{class:"icon-arrow-right"},null,-1);function S(t,n,s,a,r,o){const l=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[z,(0,i._)("div",H,[T,(0,i.wy)((0,i._)("input",{type:"text",class:"input-name",placeholder:"Гость123123123","onUpdate:modelValue":n[0]||(n[0]=t=>r.name=t)},null,512),[[e.nr,r.name]]),(0,i.Wm)(l,{class:"button continue",to:"/lobby",onClick:o.setCookie},{default:(0,i.w5)((()=>[(0,i._)("div",null,"Продолжить как "+(0,m.zw)(r.name),1),Y])),_:1},8,["onClick"]),(0,i.Wm)(l,{class:"button create-room",to:"#"},{default:(0,i.w5)((()=>[q,B])),_:1})])],64)}var F={data(){return{name:String="Гость123123123"}},methods:{setCookie(){this.$cookies.set("username",this.name,"1d"),console.log(document.cookie)}}};const V=(0,c.Z)(F,[["render",S]]);var A=V,G=s(9885);const I={class:"write-sentence"},J=(0,i.uE)('<div class="up"><div class="rounds">1/16</div><img src="'+p+'" alt="logo" id="logo-write"><div class="timer"><svg class="timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g class="timer__circle"><circle class="timer__path-elapsed" cx="50" cy="50" r="45"></circle><path id="timer-path-remaining" stroke-dasharray="283" class="timer__path-remaining ${remainingPathColor}" d="\n          M 50, 50\n          m -45, 0\n          a 45,45 0 1,0 90,0\n          a 45,45 0 1,0 -90,0\n        "></path></g></svg><span></span></div></div>',1),K={class:"middle"},L=(0,i._)("div",{class:"middle-logo"},[(0,i._)("img",{src:G,alt:"logo",class:"mid-logo"}),(0,i._)("div",{class:"card"},"Write a sentence")],-1),N={class:"input-sentence"},Q={class:"input"},R=(0,i._)("input",{class:"sentence",type:"text"},null,-1),X=(0,i.Uk)("done");function tt(t,n){const s=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",I,[J,(0,i._)("div",K,[L,(0,i._)("div",N,[(0,i._)("div",Q,[R,(0,i.Wm)(s,{class:"write",to:"/draw"},{default:(0,i.w5)((()=>[X])),_:1})])])])])}const nt={},st=(0,c.Z)(nt,[["render",tt]]);var et=st;const it={class:"draw-image"},at=(0,i.uE)('<div class="up"><div class="rounds">1/16</div><img src="'+p+'" alt="logo" id="logo-write"><div class="timer"><svg class="timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g class="timer__circle"><circle class="timer__path-elapsed" cx="50" cy="50" r="45"></circle><path id="timer-path-remaining" stroke-dasharray="283" class="timer__path-remaining ${remainingPathColor}" d="\n          M 50, 50\n          m -45, 0\n          a 45,45 0 1,0 90,0\n          a 45,45 0 1,0 -90,0\n        "></path></g></svg><span></span></div></div>',1),rt={class:"middle"},ot=(0,i._)("canvas",{id:"canvas"},"Обновите браузер",-1),lt=(0,i._)("div",{class:"cursor",id:"cursor"},null,-1),ct={class:"controls"},dt=(0,i._)("div",{class:"btn-row"},null,-1),ut=(0,i._)("div",{class:"btn-row"},null,-1),vt=(0,i.Uk)("done"),mt=(0,i._)("div",{class:"down"},null,-1);function pt(t,n){const s=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",it,[at,(0,i._)("div",rt,[ot,lt,(0,i._)("div",ct,[dt,ut,(0,i.Wm)(s,{class:"write",to:"/album"},{default:(0,i.w5)((()=>[vt])),_:1})])]),mt])}const gt={},_t=(0,c.Z)(gt,[["render",pt]]);var ft=_t;const wt={class:"lobby"},yt=(0,i.Uk)(" home "),ht={class:"room"},bt={class:"players"},kt=(0,i._)("div",{class:"count-players"},"Players 1/16",-1),Et={class:"player"},xt=(0,i._)("div",{class:"empty"},"Empty",-1),Ot=(0,i.uE)('<section class="album"><div class="album-name">album</div><div class="settings"></div><div class="end-game"><div class="end"><p class="end-p">end of &#39;s album</p></div><button class="write">new turn</button></div></section>',1);function Ct(t,n){const s=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",wt,[(0,i.Wm)(s,{class:"back",to:"/"},{default:(0,i.w5)((()=>[yt])),_:1}),(0,i._)("div",ht,[(0,i._)("section",bt,[kt,(0,i._)("div",Et,(0,m.zw)(t.name),1),xt]),Ot])])}const Wt={},Pt=(0,c.Z)(Wt,[["render",Ct]]);var jt=Pt;const Dt=[{path:"/",name:"entrace",component:A},{path:"/lobby",name:"lobby",component:$},{path:"/write",name:"write",component:et},{path:"/draw",name:"draw",component:ft},{path:"/album",name:"album",component:jt}],Zt=(0,v.p7)({history:(0,v.PO)("/"),routes:Dt});var Ut=Zt,Mt=s(65),$t=(0,Mt.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),zt=s(8510),Ht=s.n(zt);(0,e.ri)(u).use($t).use(Ut).use(Ht()).mount("#app")},5713:function(t,n,s){t.exports=s.p+"img/logo_transparent.e79611e3.png"},9885:function(t,n,s){t.exports=s.p+"img/pen.3e6bfdad.png"}},n={};function s(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,s),a.exports}s.m=t,function(){var t=[];s.O=function(n,e,i,a){if(!e){var r=1/0;for(d=0;d<t.length;d++){e=t[d][0],i=t[d][1],a=t[d][2];for(var o=!0,l=0;l<e.length;l++)(!1&a||r>=a)&&Object.keys(s.O).every((function(t){return s.O[t](e[l])}))?e.splice(l--,1):(o=!1,a<r&&(r=a));if(o){t.splice(d--,1);var c=i();void 0!==c&&(n=c)}}return n}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[e,i,a]}}(),function(){s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,{a:n}),n}}(),function(){s.d=function(t,n){for(var e in n)s.o(n,e)&&!s.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){s.p="/"}(),function(){var t={143:0};s.O.j=function(n){return 0===t[n]};var n=function(n,e){var i,a,r=e[0],o=e[1],l=e[2],c=0;if(r.some((function(n){return 0!==t[n]}))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(l)var d=l(s)}for(n&&n(e);c<r.length;c++)a=r[c],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(d)},e=self["webpackChunkqdsui"]=self["webpackChunkqdsui"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=s.O(void 0,[998],(function(){return s(9658)}));e=s.O(e)})();
//# sourceMappingURL=app.cffa125f.js.map