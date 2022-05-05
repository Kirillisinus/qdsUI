(function(){"use strict";var e={5864:function(e,t,n){var s=n(9242),o=n(3396);const a={id:"content"},l=(0,o._)("div",{id:"footer"},null,-1);function r(e,t,n,s,r,i){const c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.WI)(e.$slots,"default"),(0,o._)("div",a,[(0,o.Wm)(c)]),l],64)}var i={data(){return{socket:2}},created(){this.socket=io("https://qds-serv.herokuapp.com/")},errorHandler(e,t,n){alert(`Error: ${e.toString()}\nInfo: ${n}`)},errorCaptured(e,t,n){return"render function"===n&&alert(`cat EC: ${e.toString()}\ninfo: ${n}`),!1}},c=n(89);const u=(0,c.Z)(i,[["render",r]]);var d=u,m=n(678),h=n(7139),p=n(5713);const v={class:"btn-back"},g=(0,o.Uk)(" Назад "),f=(0,o._)("img",{src:p,alt:"logo",id:"logo-lobby"},null,-1),_={class:"lobby"},b={class:"room"},y={class:"right-side"},w={class:"count-players"},k={class:"players"},x={class:"game-settings"},$=(0,o._)("div",{class:"settings-text"},"Custom settings",-1),C=(0,o._)("div",{class:"settings"},null,-1),P={class:"start-game"},T=(0,o._)("div",null,"Начать",-1),M=(0,o._)("i",{class:"icon-arrow-right"},null,-1),E=(0,o._)("div",{class:"button invite-btn"},[(0,o._)("div",null,"Пригласить"),(0,o._)("i",{class:"icon-arrow-right"})],-1);function I(e,t,n,s,a,l){const r=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",v,[(0,o.Wm)(r,{class:"back",to:"#",onClick:l.goBack},{default:(0,o.w5)((()=>[g])),_:1},8,["onClick"]),f]),(0,o._)("div",_,[(0,o._)("div",b,[(0,o._)("div",y,[(0,o._)("div",w," Players "+(0,h.zw)(this.$store.getters.getNumPlayers)+"/16 ",1),(0,o._)("section",k,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(this.$store.getters.getPlayers,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"player",key:t},(0,h.zw)(e.user),1)))),128))])]),(0,o._)("section",x,[$,C,(0,o._)("div",P,[(0,o.Wm)(r,{class:"button start-btn",to:"#",onClick:l.startGame},{default:(0,o.w5)((()=>[T,M])),_:1},8,["onClick"]),E])])])])],64)}var z=n(6265),O=n.n(z),W={data(){return{name:localStorage.name,lobbys:this.$store.getters.getPlayers}},beforeMount(){this.$root.socket.emit("enterLobby",this.name),setTimeout((()=>{}),1e3),this.$root.socket.on("enterMsg",(e=>{setTimeout((()=>{this.$store.dispatch("reqPlayers")}),1e3)})),this.$root.socket.on("exitMsg",(e=>{setTimeout((()=>{this.$store.dispatch("reqPlayers")}),1e3)})),this.$root.socket.on("startMsg",(()=>{this.$router.push("/write")}))},mounted(){this.$forceUpdate()},created(){},beforeUnmount(){this.$root.socket.emit("exitLobby",this.name)},methods:{startGame(){this.$root.socket.emit("startGame")},goBack(){this.$router.push("/")}}};const D=(0,c.Z)(W,[["render",I]]);var S=D;const U={class:"entrance"},j=(0,o._)("div",{id:"header"},[(0,o._)("img",{src:p,alt:"logo",id:"logo"})],-1),B=(0,o._)("span",{class:"invite"},"Представьтесь, пожалуйста ",-1),L=(0,o._)("span",{class:"wrong-name"},"Name has already taken",-1),N=(0,o._)("i",{class:"icon-arrow-right"},null,-1),Y=(0,o._)("div",null,"Cоздать комнату",-1),Z=(0,o._)("i",{class:"icon-arrow-right"},null,-1);function q(e,t,n,a,l,r){const i=(0,o.up)("Loader"),c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(i,{id:"load"}),(0,o._)("div",U,[j,B,L,(0,o.wy)((0,o._)("input",{type:"text",class:"input-name",placeholder:"Гость123123123","onUpdate:modelValue":t[0]||(t[0]=e=>l.name=e)},null,512),[[s.nr,l.name]]),(0,o.Wm)(c,{class:"button continue",onClick:r.saveName,to:"#"},{default:(0,o.w5)((()=>[(0,o._)("div",null,"Продолжить как "+(0,h.zw)(l.name),1),N])),_:1},8,["onClick"]),(0,o.Wm)(c,{class:"button create-room",to:"#"},{default:(0,o.w5)((()=>[Y,Z])),_:1})])],64)}const H=e=>((0,o.dD)("data-v-05853095"),e=e(),(0,o.Cn)(),e),A={class:"lds-default"},G=H((()=>(0,o._)("div",null,null,-1))),V=H((()=>(0,o._)("div",null,null,-1))),X=H((()=>(0,o._)("div",null,null,-1))),K=H((()=>(0,o._)("div",null,null,-1))),F=H((()=>(0,o._)("div",null,null,-1))),R=H((()=>(0,o._)("div",null,null,-1))),J=H((()=>(0,o._)("div",null,null,-1))),Q=H((()=>(0,o._)("div",null,null,-1))),ee=H((()=>(0,o._)("div",null,null,-1))),te=H((()=>(0,o._)("div",null,null,-1))),ne=H((()=>(0,o._)("div",null,null,-1))),se=H((()=>(0,o._)("div",null,null,-1))),oe=[G,V,X,K,F,R,J,Q,ee,te,ne,se];function ae(e,t){return(0,o.wg)(),(0,o.iD)("div",A,oe)}const le={},re=(0,c.Z)(le,[["render",ae],["__scopeId","data-v-05853095"]]);var ie=re,ce={components:{Loader:ie},data(){return{name:String="Гость123123123"}},mounted(){localStorage.name&&(this.name=localStorage.name)},methods:{async saveName(){let e=document.getElementById("load"),t=document.getElementsByClassName("entrance")[0];t.style.display="none",e.style.display="block";let n="https://qds-serv.herokuapp.com/login/"+this.name,s="notok";if(await O().get(n).then((n=>{s=n.data.result,e.style.display="none",t.style.display="flex"})),"ok"!=s){let e=document.getElementsByClassName("wrong-name")[0],t=document.getElementsByClassName("input-name")[0];return e.style.display="inline-block",void(t.style.border="1px solid red")}localStorage.name=this.name,this.$router.push("/lobby")}}};const ue=(0,c.Z)(ce,[["render",q]]);var de=ue,me=n(9885);const he={class:"up"},pe=(0,o._)("div",{class:"rounds"},"1/16",-1),ve=(0,o._)("img",{src:p,alt:"logo",id:"logo-write"},null,-1),ge={class:"middle"},fe=(0,o._)("div",{class:"middle-logo"},[(0,o._)("img",{src:me,alt:"logo",class:"mid-logo"}),(0,o._)("div",{class:"card"},"Write a sentence")],-1),_e={class:"input-sentence"},be={class:"input"},ye=(0,o._)("input",{class:"sentence",type:"text"},null,-1),we=(0,o.Uk)("done");function ke(e,t,n,s,a,l){const r=(0,o.up)("baseTimer"),i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",he,[pe,ve,(0,o.Wm)(r,{id:"timer",class:"base-timer"})]),(0,o._)("div",ge,[fe,(0,o._)("div",_e,[(0,o._)("div",be,[ye,(0,o.Wm)(i,{class:"write",to:"#",onClick:l.done},{default:(0,o.w5)((()=>[we])),_:1},8,["onClick"])])])])],64)}const xe={class:"timer"},$e={viewBox:"-1 -1 2 2",class:"timer__svg donut"},Ce=(0,o._)("circle",{cx:"0",cy:"0",r:"1",fill:"#dddddd"},null,-1),Pe=["d","fill"];function Te(e,t,n,s,a,l){return(0,o.wg)(),(0,o.iD)("div",xe,[((0,o.wg)(),(0,o.iD)("svg",$e,[Ce,(0,o._)("path",{d:l.calc,fill:a.color},null,8,Pe)]))])}var Me={data(){return{time:this.$store.getters.getTimeLimit,percent:1,color:"green",startX:1,startY:0,currentPercent:0}},methods:{getPieVal(e){const t=Math.cos(2*Math.PI*e),n=Math.sin(2*Math.PI*e);return[t,n]},start(){TweenMax.to(this.$data,this.time,{currentPercent:this.$data.percent,onComplete:this.complete,ease:Power0.easeNone})},stop(){TweenMax.pauseAll()},complete(){}},computed:{calc(){const[e,t]=this.getPieVal(this.$data.currentPercent),n=this.currentPercent>.5?1:0,s=[`M ${this.$data.startX} ${this.startY}`,`A 1 1 0 ${n} 1 ${e} ${t}`,"L 0 0"].join(" ");return s}},beforeUnmount(){},mounted(){setTimeout((()=>{this.start()}),100)}};const Ee=(0,c.Z)(Me,[["render",Te]]);var Ie=Ee,ze={data(){return{}},components:{baseTimer:Ie},methods:{done(){TweenMax.pauseAll();let e=document.getElementById("timer");e.style.display="none",this.$router.push("/draw")}},mounted(){this.$forceUpdate()}};const Oe=(0,c.Z)(ze,[["render",ke]]);var We=Oe;const De={class:"draw-image"},Se={class:"up"},Ue=(0,o._)("div",{class:"rounds"},"1/16",-1),je=(0,o._)("img",{src:p,alt:"logo",id:"logo-write"},null,-1),Be={class:"middle"},Le=(0,o._)("div",{id:"palette"},null,-1),Ne={class:"controls"},Ye={class:"btn-row"},Ze={class:"btn-row"},qe=["value","onChange"],He=(0,o._)("div",{class:"btn-row"},null,-1),Ae=(0,o.Uk)("done"),Ge=(0,o._)("div",{class:"down"},null,-1);function Ve(e,t,n,a,l,r){const i=(0,o.up)("baseTimer"),c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",De,[(0,o._)("div",Se,[Ue,je,(0,o.Wm)(i,{class:"base-timer"})]),(0,o._)("div",Be,[Le,(0,o._)("canvas",{id:"canvas",onMousemove:t[0]||(t[0]=e=>r.drawIfPressed(e)),height:"500",width:"900"},"Обновите браузер!",32),(0,o._)("div",Ne,[(0,o._)("div",Ye,[(0,o._)("button",{type:"button",onClick:t[1]||(t[1]=(...e)=>r.clear&&r.clear(...e)),class:"back"},"Clear")]),(0,o._)("div",Ze,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.sizes,(e=>((0,o.wg)(),(0,o.iD)("label",{class:"size-item",key:e},[(0,o.wy)((0,o._)("input",{type:"radio",name:"size","onUpdate:modelValue":t[2]||(t[2]=e=>l.size=e),value:e,class:"size",style:(0,h.j5)({width:e+10+"px",height:e+10+"px"}),onChange:t=>r.setSize(e)},null,44,qe),[[s.G2,l.size]])])))),128))]),He,(0,o.Wm)(c,{class:"write",to:"#",onClick:r.done},{default:(0,o.w5)((()=>[Ae])),_:1},8,["onClick"])])]),Ge])}var Xe={components:{baseTimer:Ie},data(){return{size:12,sizes:[6,12,24,48],canvas:null,context:null,colors:["#13f7ab","#13f3f7","#13c5f7","#138cf7","#1353f7","#2d13f7","#7513f7","#a713f7","#d413f7","#f713e0","#f71397","#f7135b","#f71313","#f76213","#f79413","#f7e013"]}},mounted(){this.$forceUpdate(),this.canvas=document.getElementById("canvas"),this.context=this.canvas.getContext("2d"),this.context.lineCap="round",this.context.lineWidth=this.size;for(var e=document.getElementById("palette"),t=0,n=this.colors.length;t<n;t++){var s=document.createElement("div");s.className="color",s.addEventListener("click",this.changeColor),s.style.backgroundColor=this.colors[t],e.appendChild(s)}},methods:{done(){TweenMax.pauseAll(),this.$router.push("/album")},setSize(e){this.context.lineWidth=e},changeColor(e){this.context.strokeStyle=e.target.style.backgroundColor},clear(){this.context.clearRect(0,0,canvas.width,canvas.height)},drawIfPressed(e){var t=e.offsetX,n=e.offsetY,s=e.movementX,o=e.movementY;e.buttons>0&&(this.context.beginPath(),this.context.moveTo(t,n),this.context.lineTo(t-s,n-o),this.context.stroke(),this.context.closePath())}}};const Ke=(0,c.Z)(Xe,[["render",Ve]]);var Fe=Ke;const Re={class:"lobby"},Je=(0,o.Uk)(" home "),Qe={class:"room"},et={class:"players"},tt=(0,o._)("div",{class:"count-players"},"Players 1/16",-1),nt={class:"player"},st=(0,o._)("div",{class:"empty"},"Empty",-1),ot={class:"album"},at=(0,o._)("div",{class:"album-name"},"album",-1),lt=(0,o._)("div",{class:"settings"},null,-1),rt={class:"end-game"},it={class:"end"},ct={class:"end-p"},ut=(0,o._)("button",{class:"write"},"new turn",-1);function dt(e,t,n,s,a,l){const r=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",Re,[(0,o.Wm)(r,{class:"back",to:"/"},{default:(0,o.w5)((()=>[Je])),_:1}),(0,o._)("div",Qe,[(0,o._)("section",et,[tt,(0,o._)("div",nt,(0,h.zw)(a.name),1),st]),(0,o._)("section",ot,[at,lt,(0,o._)("div",rt,[(0,o._)("div",it,[(0,o._)("p",ct,"end of "+(0,h.zw)(a.name)+"'s album",1)]),ut])])])])}var mt={data(){return{name:""}},async mounted(){localStorage.name&&(this.name=localStorage.name)},methods:{}};const ht=(0,c.Z)(mt,[["render",dt]]);var pt=ht;const vt=[{path:"/",name:"entrace",component:de},{path:"/lobby",name:"lobby",component:S},{path:"/write",name:"write",component:We},{path:"/draw",name:"draw",component:Fe},{path:"/album",name:"album",component:pt}],gt=(0,m.p7)({history:(0,m.PO)("/"),routes:vt});var ft=gt,_t=n(65),bt=(0,_t.MT)({state:{TIME_LIMIT:120,lobbys:[]},getters:{getTimeLimit(e){return e.TIME_LIMIT},getPlayers(e){return e.lobbys},getNumPlayers(e){return e.lobbys.length}},mutations:{updatePlayers(e,t){e.lobbys=t}},actions:{async reqPlayers(e){O().get("https://qds-serv.herokuapp.com/players").then((t=>{e.commit("updatePlayers",t.data)}))}},modules:{}}),yt=n(6423);(0,s.ri)(d).use(bt).use(ft).use(yt.Z,O()).mount("#app")},5713:function(e,t,n){e.exports=n.p+"img/logo_transparent.e79611e3.png"},9885:function(e,t,n){e.exports=n.p+"img/pen.3e6bfdad.png"}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var a=t[s]={id:s,loaded:!1,exports:{}};return e[s](a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,s,o,a){if(!s){var l=1/0;for(u=0;u<e.length;u++){s=e[u][0],o=e[u][1],a=e[u][2];for(var r=!0,i=0;i<s.length;i++)(!1&a||l>=a)&&Object.keys(n.O).every((function(e){return n.O[e](s[i])}))?s.splice(i--,1):(r=!1,a<l&&(l=a));if(r){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[s,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,a,l=s[0],r=s[1],i=s[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(i)var u=i(n)}for(t&&t(s);c<l.length;c++)a=l[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},s=self["webpackChunkqdsui"]=self["webpackChunkqdsui"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(5864)}));s=n.O(s)})();
//# sourceMappingURL=app.4bcd7e37.js.map