(function(){"use strict";var t={7432:function(t,e,s){var n=s(9242),o=s(3396);const a={id:"content"},r=(0,o._)("div",{id:"footer"},null,-1);function i(t,e,s,n,i,l){const c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.WI)(t.$slots,"default"),(0,o._)("div",a,[(0,o.Wm)(c)]),r],64)}var l={data(){return{socket:2}},created(){this.socket=io("https://qds-serv.herokuapp.com/")},errorHandler(t,e,s){alert(`Error: ${t.toString()}\nInfo: ${s}`)},errorCaptured(t,e,s){return"render function"===s&&setTimeout((()=>{window.location.reload()}),50),!1}},c=s(89);const d=(0,c.Z)(l,[["render",i]]);var u=d,m=s(678),h=s(7139),g=s(5713);const p={class:"lobby-view"},v={class:"btn-back"},y=(0,o.Uk)(" Назад "),f=(0,o._)("img",{src:g,alt:"logo",id:"logo-lobby"},null,-1),w={class:"lobby"},b={class:"room"},_={class:"right-side"},k={class:"count-players"},x={class:"players"},C=(0,o._)("div",{class:"adm-sign"},null,-1),$={class:"game-settings"},T=(0,o._)("div",{class:"settings-text"},"Custom settings",-1),I=(0,o._)("div",{class:"settings"},null,-1),D={class:"start-game"},E=(0,o._)("div",null,"Начать",-1),P=(0,o._)("i",{class:"icon-arrow-right"},null,-1),M=(0,o._)("div",{class:"button invite-btn"},[(0,o._)("div",null,"Пригласить"),(0,o._)("i",{class:"icon-arrow-right"})],-1);function L(t,e,s,n,a,r){const i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",p,[(0,o._)("div",v,[(0,o.Wm)(i,{class:"back",to:"#",onClick:r.goBack},{default:(0,o.w5)((()=>[y])),_:1},8,["onClick"]),f]),(0,o._)("div",w,[(0,o._)("div",b,[(0,o._)("div",_,[(0,o._)("div",k,"Players "+(0,h.zw)(t.getNumPlayers)+"/16",1),(0,o._)("section",x,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.getPlayers,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{id:"plyr",class:"player",key:e},[(0,o.Uk)((0,h.zw)(t.user)+" ",1),C])))),128))])]),(0,o._)("section",$,[T,I,(0,o._)("div",D,[(0,o.Wm)(i,{class:"button start-btn",to:"#",onClick:r.startGame},{default:(0,o.w5)((()=>[E,P])),_:1},8,["onClick"]),M])])])])])}var R=s(6265),S=s.n(R),U=s(65),B={data(){return{name:localStorage.name}},beforeMount(){},mounted(){this.$forceUpdate(),setTimeout((()=>{this.updateAdminDiv()}),500),this.$store.dispatch("setCreator",this.name)},created(){this.$root.socket.on("enterMsg",((...t)=>{this.$store.dispatch("reqPlayers",t)})),this.$root.socket.on("exitMsg",((...t)=>{this.$store.dispatch("reqPlayers",t)})),this.$root.socket.on("startMsg",((...t)=>{this.$store.dispatch("setRounds"),this.$store.dispatch("setTimeLimit",t),this.$router.push("/write")})),this.$root.socket.emit("enterLobby",this.name)},beforeUnmount(){this.$root.socket.emit("exitLobby",this.name)},methods:{startGame(){this.$root.socket.emit("startGame",localStorage.name)},goBack(){this.$router.push("/")},updateAdminDiv(){let t=document.getElementsByClassName("player");for(let e=0;e<t.length;e++){let s=t[e].textContent;s.trim()==this.$store.state.admin_name&&(t[e].childNodes[1].style.display="block")}}},computed:{...(0,U.Se)(["getNumPlayers","getPlayers"])}};const N=(0,c.Z)(B,[["render",L]]);var z=N;const W={class:"entrance"},A=(0,o._)("div",{id:"header"},[(0,o._)("img",{src:g,alt:"logo",id:"logo"})],-1),O=(0,o._)("span",{class:"invite"},"Представьтесь, пожалуйста ",-1),q=(0,o._)("span",{class:"wrong-name"},"Имя уже используется, придумайте другое!",-1),Y=(0,o._)("i",{class:"icon-arrow-right"},null,-1),j=(0,o._)("div",null,"Cоздать комнату",-1),Z=(0,o._)("i",{class:"icon-arrow-right"},null,-1);function G(t,e,s,a,r,i){const l=(0,o.up)("Loader"),c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l,{id:"load"}),(0,o._)("div",W,[A,O,q,(0,o.wy)((0,o._)("input",{type:"text",class:"input-name",placeholder:"Гость123123123","onUpdate:modelValue":e[0]||(e[0]=t=>r.name=t)},null,512),[[n.nr,r.name]]),(0,o.Wm)(c,{class:"button continue",onClick:i.saveName,to:"#"},{default:(0,o.w5)((()=>[(0,o._)("div",null,"Продолжить как "+(0,h.zw)(r.name),1),Y])),_:1},8,["onClick"]),(0,o.Wm)(c,{class:"button create-room",to:"#"},{default:(0,o.w5)((()=>[j,Z])),_:1})])],64)}const H=t=>((0,o.dD)("data-v-05853095"),t=t(),(0,o.Cn)(),t),X={class:"lds-default"},V=H((()=>(0,o._)("div",null,null,-1))),K=H((()=>(0,o._)("div",null,null,-1))),F=H((()=>(0,o._)("div",null,null,-1))),J=H((()=>(0,o._)("div",null,null,-1))),Q=H((()=>(0,o._)("div",null,null,-1))),tt=H((()=>(0,o._)("div",null,null,-1))),et=H((()=>(0,o._)("div",null,null,-1))),st=H((()=>(0,o._)("div",null,null,-1))),nt=H((()=>(0,o._)("div",null,null,-1))),ot=H((()=>(0,o._)("div",null,null,-1))),at=H((()=>(0,o._)("div",null,null,-1))),rt=H((()=>(0,o._)("div",null,null,-1))),it=[V,K,F,J,Q,tt,et,st,nt,ot,at,rt];function lt(t,e){return(0,o.wg)(),(0,o.iD)("div",X,it)}const ct={},dt=(0,c.Z)(ct,[["render",lt],["__scopeId","data-v-05853095"]]);var ut=dt,mt={components:{Loader:ut},data(){return{name:String="Гость123123123"}},mounted(){localStorage.name&&(this.name=localStorage.name)},methods:{async saveName(){let t=document.getElementById("load"),e=document.getElementsByClassName("entrance")[0],s=document.getElementById("content");s.style.border="none",e.style.display="none",t.style.display="block";let n="https://qds-serv.herokuapp.com/login/"+this.name,o="notok";if(await S().get(n).then((n=>{o=n.data.result,t.style.display="none",e.style.display="flex",s.style.border="4px #f5d731f1 solid"})),"ok"!=o){let t=document.getElementsByClassName("wrong-name")[0],e=document.getElementsByClassName("input-name")[0];return t.style.display="inline-block",void(e.style.border="1px solid red")}localStorage.name=this.name,localStorage.reload=!0,this.$router.push("/lobby")}}};const ht=(0,c.Z)(mt,[["render",G]]);var gt=ht,pt=s(8171);const vt={class:"write-player-sentence"},yt={class:"up"},ft={class:"rounds"},wt=(0,o._)("img",{src:g,alt:"logo",id:"logo-write"},null,-1),bt=(0,o._)("img",{src:pt,alt:"ready",class:"ready-icon",id:"rdy-i"},null,-1),_t={class:"middle"},kt=(0,o._)("div",{class:"middle-logo"},[(0,o._)("canvas",{id:"drawed-img"},"Обновите браузер!"),(0,o._)("div",{class:"card"},"Write a sentence")],-1),xt={class:"input"},Ct=(0,o.Uk)("done");function $t(t,e,s,a,r,i){const l=(0,o.up)("baseTimer"),c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",vt,[(0,o._)("div",yt,[(0,o._)("div",ft,(0,h.zw)(t.getCurRound)+"/"+(0,h.zw)(t.getNumRounds),1),wt,(0,o.Wm)(l,{id:"timer",class:"base-timer"}),bt]),(0,o._)("div",_t,[kt,(0,o._)("div",xt,[(0,o.wy)((0,o._)("input",{class:"sentence",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>r.sentence=t)},null,512),[[n.nr,r.sentence]]),(0,o.Wm)(c,{id:"wr-bt",class:"write",to:"#",onClick:i.done},{default:(0,o.w5)((()=>[Ct])),_:1},8,["onClick"])])])])}const Tt={id:"tim",class:"timer"},It={viewBox:"-1 -1 2 2",class:"timer__svg donut"},Dt=(0,o._)("circle",{cx:"0",cy:"0",r:"1",fill:"#dddddd"},null,-1),Et=["d","fill"];function Pt(t,e,s,n,a,r){return(0,o.wg)(),(0,o.iD)("div",Tt,[((0,o.wg)(),(0,o.iD)("svg",It,[Dt,(0,o._)("path",{d:r.calc,fill:a.color},null,8,Et)]))])}var Mt={data(){return{time:this.$store.getters.getTimeLimit,percent:1,color:"green",startX:1,startY:0,currentPercent:0}},methods:{getPieVal(t){const e=Math.cos(2*Math.PI*t),s=Math.sin(2*Math.PI*t);return[e,s]},start(){TweenMax.to(this.$data,this.time,{currentPercent:this.$data.percent,onComplete:this.complete,ease:Power0.easeNone})},stop(){TweenMax.pauseAll()},complete(){document.getElementById("timer").style.display="none",this.$root.socket.emit("timeIsUp")}},computed:{calc(){const[t,e]=this.getPieVal(this.$data.currentPercent),s=this.currentPercent>.5?1:0,n=[`M ${this.$data.startX} ${this.startY}`,`A 1 1 0 ${s} 1 ${t} ${e}`,"L 0 0"].join(" ");return n}},beforeUnmount(){},mounted(){setTimeout((()=>{this.start()}),100)}};const Lt=(0,c.Z)(Mt,[["render",Pt]]);var Rt=Lt,St={data(){return{sentence:"",ready:!1,canvas:null,context:null}},components:{baseTimer:Rt},methods:{done(){document.getElementById("rdy-i").style.display="block";let t=document.getElementById("wr-bt");t.style.backgroundColor="gray",TweenMax.pauseAll();let e=document.getElementById("timer");e.style.display="none",this.ready||this.$root.socket.emit("writeData",{sentence:this.sentence,creator:this.$store.getters.getCreator}),this.ready=!0},async updContent(){let t=this.$store.getters.getCurRound-2;if(t<=0)return;this.$store.getters.getCreator;let e="200",s="https://qds-serv.herokuapp.com/whattomake/"+localStorage.name+"/"+t;await S().get(s).catch((function(t){t.response&&(console.log(t.response.data),console.log(t.response.status),e=t.response.status,console.log(t.response.headers),console.log(t.config))}));var n=new Image;"200"===e&&await S().get(s).then((t=>{n.src=t.data.data,this.context.drawImage(n,0,0,500,300)}))},loadImageURL(t){var e=document.createElement("img");e.addEventListener("load",(function(){var t=this.context.fillStyle,s=this.context.lineWidth;this.context.canvas.width=e.width,this.context.canvas.height=e.height,this.context.drawImage(e,0,0),this.context.fillStyle=t,this.context.strokeStyle=t,this.context.lineWidth=s})),e.src=t}},created(){this.$root.socket.on("goNextMsg",((...t)=>{this.ready||this.$root.socket.emit("writeData",{sentence:this.sentence,creator:this.$store.getters.getCreator}),this.$store.dispatch("setTimeLimit",t[0].round_time),this.$router.push("/"+t[0].next_page)})),this.$root.socket.on("timeIsUp",(()=>{this.ready=!0,this.$root.socket.emit("writeData",{sentence:this.sentence,creator:this.$store.getters.getCreator})}))},beforeMount(){this.updContent()},mounted(){this.$forceUpdate(),this.canvas=document.getElementById("drawed-img"),this.context=this.canvas.getContext("2d")},beforeUnmount(){TweenMax.pauseAll(),this.$store.dispatch("setRound")},computed:{...(0,U.Se)(["getNumRounds","getCurRound"])}};const Ut=(0,c.Z)(St,[["render",$t]]);var Bt=Ut;const Nt={class:"draw-image"},zt={class:"up"},Wt={class:"rounds"},At=(0,o._)("img",{src:g,alt:"logo",id:"logo-write"},null,-1),Ot=(0,o._)("img",{src:pt,alt:"ready",class:"ready-icon",id:"rdy-i"},null,-1),qt=(0,o._)("div",{class:"call-draw"},"Попробуй нарисовать!",-1),Yt={class:"prev-sentence"},jt={class:"middle-draw"},Zt=(0,o._)("div",{id:"palette"},null,-1),Gt={class:"down"},Ht={class:"controls"},Xt={class:"btn-row"},Vt={class:"btn-row"},Kt=["value","onChange"],Ft=(0,o._)("div",{class:"btn-row"},null,-1),Jt=(0,o.Uk)("done");function Qt(t,e,s,a,r,i){const l=(0,o.up)("baseTimer"),c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",Nt,[(0,o._)("div",zt,[(0,o._)("div",Wt,(0,h.zw)(t.getCurRound)+"/"+(0,h.zw)(t.getNumRounds),1),At,(0,o.Wm)(l,{id:"timer",class:"base-timer"}),Ot]),qt,(0,o._)("div",Yt,(0,h.zw)(r.sentence),1),(0,o._)("div",jt,[Zt,(0,o._)("canvas",{id:"canvas",onMousemove:e[0]||(e[0]=t=>i.drawIfPressed(t)),onTouchmove:e[1]||(e[1]=t=>i.drawIfTouched(t)),onTouchstart:e[2]||(e[2]=t=>i.startDrawing(t)),onTouchend:e[3]||(e[3]=t=>i.stopDrawing(t)),height:"500",width:"900"},"Обновите браузер!",32)]),(0,o._)("div",Gt,[(0,o._)("div",Ht,[(0,o._)("div",Xt,[(0,o._)("button",{type:"button",onClick:e[4]||(e[4]=(...t)=>i.clear&&i.clear(...t)),class:"back"},"Clear")]),(0,o._)("div",Vt,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.sizes,(t=>((0,o.wg)(),(0,o.iD)("label",{class:"size-item",key:t},[(0,o.wy)((0,o._)("input",{type:"radio",name:"size","onUpdate:modelValue":e[5]||(e[5]=t=>r.size=t),value:t,class:"size",style:(0,h.j5)({width:t+10+"px",height:t+10+"px"}),onChange:e=>i.setSize(t)},null,44,Kt),[[n.G2,r.size]])])))),128))]),Ft,(0,o.Wm)(c,{id:"d-bt",class:"write",to:"#",onClick:i.done},{default:(0,o.w5)((()=>[Jt])),_:1},8,["onClick"])])])])}var te={components:{baseTimer:Rt},data(){return{sentence:"Lorem ipsum",isDrawing:!1,ready:!1,size:12,sizes:[6,12,24,48],canvas:null,context:null,colors:["#ffffff","#000000","#13f7ab","#13f3f7","#13c5f7","#138cf7","#1353f7","#2d13f7","#7513f7","#a713f7","#d413f7","#f713e0","#f71397","#f7135b","#f71313","#f76213","#f79413","#f7e013"]}},created(){this.$root.socket.on("goNextMsg",((...t)=>{this.ready||this.$root.socket.emit("writeData",{sentence:this.canvas.toDataURL(),creator:this.$store.getters.getCreator}),this.$store.dispatch("setTimeLimit",t[0].round_time),this.$router.push("/"+t[0].next_page)})),this.$root.socket.on("timeIsUp",(()=>{this.ready||this.$root.socket.emit("writeData",{sentence:this.canvas.toDataURL(),creator:this.$store.getters.getCreator}),this.ready=!0}))},beforeMount(){this.updContent()},mounted(){this.$forceUpdate(),this.canvas=document.getElementById("canvas");var t=document.body.getBoundingClientRect();this.canvas.setAttribute("width",.65*t.width),this.context=this.canvas.getContext("2d"),this.context.lineCap="round",this.context.lineWidth=this.size;for(var e=document.getElementById("palette"),s=0,n=this.colors.length;s<n;s++){var o=document.createElement("div");o.className="color",o.addEventListener("click",this.changeColor),o.style.backgroundColor=this.colors[s],e.appendChild(o)}},beforeUnmount(){TweenMax.pauseAll(),this.$store.dispatch("setRound")},methods:{done(){document.getElementById("rdy-i").style.display="block";let t=document.getElementById("d-bt");t.style.backgroundColor="gray",TweenMax.pauseAll();let e=document.getElementById("timer");if(e.style.display="none",!this.ready){let t=this.$store.getters.getCreator;this.$root.socket.emit("writeData",{sentence:this.canvas.toDataURL(),creator:t})}this.ready=!0},async updContent(){let t=this.$store.getters.getCurRound-2,e=(this.$store.getters.getCreator,"200"),s="https://qds-serv.herokuapp.com/whattomake/"+localStorage.name+"/"+t;await S().get(s).catch((function(t){t.response&&(console.log(t.response.data),console.log(t.response.status),e=t.response.status,console.log(t.response.headers),console.log(t.config))})),"200"===e&&await S().get(s).then((t=>{this.sentence=t.data.data,this.$store.dispatch("setCreator",t.data.creator)}))},setSize(t){this.context.lineWidth=t},changeColor(t){this.context.strokeStyle=t.target.style.backgroundColor},clear(){this.context.clearRect(0,0,canvas.width,canvas.height)},drawIfPressed(t){var e=t.offsetX,s=t.offsetY,n=t.movementX,o=t.movementY;t.buttons>0&&(this.context.beginPath(),this.context.moveTo(e,s),this.context.lineTo(e-n,s-o),this.context.stroke(),this.context.closePath())},startDrawing(t){t.target==canvas&&(document.body.style.overflow="hidden",this.isDrawing=!0,this.context.beginPath(),this.context.moveTo(t.touches[0].pageX-this.canvas.offsetLeft,t.touches[0].pageY-this.canvas.offsetTop))},drawIfTouched(t){if(t.target==canvas&&(document.body.style.overflow="hidden",1==this.isDrawing)){var e=t.touches[0].pageX-this.canvas.offsetLeft,s=t.touches[0].pageY-this.canvas.offsetTop;this.context.lineTo(e,s),this.context.stroke()}},stopDrawing(t){document.body.style.overflow="hidden",t.target==canvas&&(this.isDrawing=!0)}},computed:{...(0,U.Se)(["getNumRounds","getCurRound"])}};const ee=(0,c.Z)(te,[["render",Qt]]);var se=ee;const ne={class:"history"},oe=(0,o.Uk)(" home "),ae={class:"room"},re=(0,o._)("section",{class:"players"},null,-1),ie={class:"album"},le=(0,o._)("div",{class:"album-name"},"album",-1),ce=(0,o._)("div",{class:"settings"},null,-1),de={class:"end-game"},ue={class:"end"},me={class:"end-p"};function he(t,e,s,n,a,r){const i=(0,o.up)("Loader"),l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(i,{id:"load"}),(0,o._)("div",ne,[(0,o.Wm)(l,{class:"back",to:"#",onClick:r.home},{default:(0,o.w5)((()=>[oe])),_:1},8,["onClick"]),(0,o._)("div",ae,[re,(0,o._)("section",ie,[le,ce,(0,o._)("div",de,[(0,o._)("div",ue,[(0,o._)("p",me,"end of "+(0,h.zw)(a.name)+"'s album",1)])])])])])],64)}var ge={components:{Loader:ut},data(){return{name:String="Гость123123123"}},mounted(){this.$forceUpdate(),localStorage.name&&(this.name=localStorage.name)},methods:{async newGame(){let t=document.getElementById("load"),e=document.getElementsByClassName("history")[0],s=document.getElementById("content");s.style.border="none",e.style.display="none",t.style.display="block";let n="https://qds-serv.herokuapp.com/login/"+this.name,o="notok";await axios.get(n).then((n=>{o=n.data.result,t.style.display="none",e.style.display="flex",s.style.border="4px #f5d731f1 solid"})),"ok"==o?(localStorage.name=this.name,this.$router.push("/lobby")):alert("В настоящий момент имя "+this.name+" уже используется, придумайте другое!")},home(){this.$root.socket.emit("exitGame"),this.$router.push("/")}},computed:{...(0,U.Se)(["getNumPlayers","getPlayers"])}};const pe=(0,c.Z)(ge,[["render",he]]);var ve=pe;const ye=[{path:"/",name:"entrace",component:gt},{path:"/lobby",name:"lobby",component:z},{path:"/write",name:"write",component:Bt},{path:"/draw",name:"draw",component:se},{path:"/album",name:"album",component:ve}],fe=(0,m.p7)({history:(0,m.r5)(),routes:ye});var we=fe,be=(0,U.MT)({state:{TIME_LIMIT:0,lobbys:[],admin_name:"",rounds:0,round:1,creator:""},getters:{getTimeLimit(t){return t.TIME_LIMIT},getPlayers(t){return t.lobbys},getNumPlayers(t){return t.lobbys.length},getAdminName(t){return t.admin_name},getNumRounds(t){return t.rounds},getCurRound(t){return t.round},getCreator(t){return t.creator}},mutations:{updateTimeLimit(t,e){t.TIME_LIMIT=e},updatePlayers(t,e){t.lobbys=e},updateAdmin(t,e){t.admin_name=e},updateRounds(t,e){t.rounds=e},updateRound(t){t.round++},updateCreator(t,e){t.creator=e}},actions:{setTimeLimit(t,e){t.commit("updateTimeLimit",e)},async reqPlayers(t,e){await S().get("https://qds-serv.herokuapp.com/players").then((s=>{t.commit("updatePlayers",s.data),t.commit("updateAdmin",e)}))},setRounds(t){t.commit("updateRounds",this.state.lobbys.length)},setAdminName(t,e){t.commit("updateAdmin",e)},setRound(t){t.commit("updateRound")},setCreator(t,e){t.commit("updateCreator",e)}},modules:{}}),_e=s(6423);(0,n.ri)(u).use(be).use(we).use(_e.Z,S()).mount("#app")},8171:function(t,e,s){t.exports=s.p+"img/check.5316d6f6.png"},5713:function(t,e,s){t.exports=s.p+"img/logo_transparent.e79611e3.png"}},e={};function s(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={id:n,loaded:!1,exports:{}};return t[n](a,a.exports,s),a.loaded=!0,a.exports}s.m=t,function(){s.amdO={}}(),function(){var t=[];s.O=function(e,n,o,a){if(!n){var r=1/0;for(d=0;d<t.length;d++){n=t[d][0],o=t[d][1],a=t[d][2];for(var i=!0,l=0;l<n.length;l++)(!1&a||r>=a)&&Object.keys(s.O).every((function(t){return s.O[t](n[l])}))?n.splice(l--,1):(i=!1,a<r&&(r=a));if(i){t.splice(d--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[n,o,a]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p="/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,a,r=n[0],i=n[1],l=n[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(l)var d=l(s)}for(e&&e(n);c<r.length;c++)a=r[c],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(d)},n=self["webpackChunkqdsui"]=self["webpackChunkqdsui"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(7432)}));n=s.O(n)})();
//# sourceMappingURL=app.f51ff52e.js.map