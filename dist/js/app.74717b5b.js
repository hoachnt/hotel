(function(){"use strict";var e={9043:function(e,t,o){var s=o(9963),a=o(6252);const r={class:"app"};function l(e,t,o,l,n,i){const u=(0,a.up)("navbar"),d=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(u),(0,a._)("div",r,[(0,a.Wm)(d,null,{default:(0,a.w5)((({Component:e})=>[(0,a.Wm)(s.uT,{name:"fade",mode:"out-in"},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)((0,a.LL)(e)))])),_:2},1024)])),_:1})])],64)}o(7658);var n=o.p+"img/logo.965b105d.png";const i=e=>((0,a.dD)("data-v-46ccee43"),e=e(),(0,a.Cn)(),e),u={class:"navbar"},d=i((()=>(0,a._)("img",{src:n,alt:"",class:"logo"},null,-1))),c=[d],m={class:"navbar__btn"},h=i((()=>(0,a._)("div",{class:"activeBtn"},null,-1))),p={class:"navbar__btn bottombar__btn"},f=i((()=>(0,a._)("p",null,"hotels",-1))),g=i((()=>(0,a._)("div",{class:"activeBtn"},null,-1)));function v(e,t,o,r,l,n){const i=(0,a.up)("my-button"),d=(0,a.up)("font-awesome-icon");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",u,[(0,a._)("div",{style:{cursor:"pointer",color:"#000"},onClick:t[0]||(t[0]=t=>e.$router.push("/")),class:"icon"},c),(0,a.wy)((0,a._)("div",m,[(0,a.Wm)(i,{onClick:t[1]||(t[1]=t=>e.$router.push("/hotels")),class:"waves-effect waves-light"},{default:(0,a.w5)((()=>[(0,a.Uk)("Hotels")])),_:1}),h],512),[[s.F8,r.auth]]),r.auth?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:t[2]||(t[2]=(...e)=>r.logOut&&r.logOut(...e)),class:"log-out text-white border-2 border-rose-700 w-40 h-12 ml-2 mr-4 font-semibold transition ease-in-out duration-150 hover:w-60 rounded-[10px] waves-effect waves-light"},[(0,a.Uk)(" Log out "),(0,a.Wm)(d,{icon:"fa-solid fa-right-from-bracket",class:"ml-2"})])):(0,a.kq)("",!0)]),(0,a._)("div",p,[(0,a.Wm)(i,{onClick:t[3]||(t[3]=t=>e.$router.push("/hotels")),class:"waves-effect waves-light"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{icon:"fa-solid fa-hotel"}),f])),_:1}),g])],64)}var w=o(2201),b=o(3907),y=o(9669),_=o.n(y),k={setup(){const e=(0,w.tv)(),t=(0,b.oR)(),o=(0,a.Fl)((()=>t.state.post.authenticated)),s=async()=>{try{await _().post("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/auth/logout",{refresh_token:localStorage.getItem("refresh_token")});localStorage.clear(),t.dispatch("post/authFalse"),e.push("/login?message=logout")}catch(o){alert(o)}};return{auth:o,logOut:s}},mounted(){const e=document.querySelectorAll(".navbar__btn > button");document.querySelector(".icon");function t(){e.forEach((e=>{e.addEventListener("click",(()=>{o(),e.classList.add("active")}))}))}function o(){e.forEach((e=>{e.classList.remove("active")}))}t()}},x=o(3744);const $=(0,x.Z)(k,[["render",v],["__scopeId","data-v-46ccee43"]]);var C=$,I={components:{Navbar:C},data(){return{dark:!1,root:null}},mounted(){this.root=document.documentElement},watch:{dark:{handler:function(){this.$nextTick((()=>{this.dark?(this.root.style.setProperty("--main-background-color","#f2f2f2"),this.root.style.setProperty("--dark-background-color","#000"),this.root.style.setProperty("--main-text-color","#000"),this.root.style.setProperty("--white-text-color","#fff"),this.root.style.setProperty("--white-color","#fff"),this.root.style.setProperty("--main-button-color","#42b883"),this.root.style.setProperty("--delete-color","#c21e56"),this.root.style.setProperty("--page-wrapper-bg","rgba(32, 32, 32, 0.1)")):(this.root.style.setProperty("--main-background-color","#000"),this.root.style.setProperty("--dark-background-color","#fff"),this.root.style.setProperty("--main-text-color","#fff"),this.root.style.setProperty("--white-text-color","#000"),this.root.style.setProperty("--white-color","#161617"),this.root.style.setProperty("--main-button-color","#2EE59D"),this.root.style.setProperty("--delete-color","#fa0b5b"),this.root.style.setProperty("--page-wrapper-bg","rgb(31 255 131 / 10%)"))}))},immediate:!0}}};const S=(0,x.Z)(I,[["render",l]]);var P=S;const W={class:"btn waves-effect waves-light"};function D(e,t,o,s,r,l){return(0,a.wg)(),(0,a.iD)("button",W,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])}var H={name:"my-button"};const U=(0,x.Z)(H,[["render",D],["__scopeId","data-v-a8f050fc"]]);var q=U;const L=["value"];function T(e,t,o,s,r,l){return(0,a.wg)(),(0,a.iD)("input",{value:o.value,onInput:t[0]||(t[0]=(...e)=>l.updateInput&&l.updateInput(...e)),type:"text",name:"text",class:"input"},null,40,L)}var E={name:"my-input",props:{value:[Number,String]},methods:{updateInput(e){this.$emit("update:value",e.target.value)}}};const O=(0,x.Z)(E,[["render",T],["__scopeId","data-v-066fdc30"]]);var B=O;function j(e,t,o,r,l,n){return e.show?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"dialog",onClick:t[1]||(t[1]=(...t)=>e.hideDialog&&e.hideDialog(...t))},[(0,a._)("div",{onClick:t[0]||(t[0]=(0,s.iM)((()=>{}),["stop"])),class:"dialog__content"},[(0,a.WI)(e.$slots,"default",{},void 0,!0)])])):(0,a.kq)("",!0)}var A={props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}}},Z={name:"my-dialog",mixins:[A]};const N=(0,x.Z)(Z,[["render",j],["__scopeId","data-v-5a3cc983"]]);var Y=N,F=o(3577);const R={class:"text-4xl font-semibold italic text-left text-slate-900 mb-10 mt-14"},z={class:"header-text"},Q={class:"relative text-white"};function V(e,t,o,s,r,l){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("blockquote",R,[(0,a._)("span",z,[(0,a._)("h1",Q,(0,F.zw)(o.header),1)])])])}var X={name:"my-header",props:{header:String}};const G=(0,x.Z)(X,[["render",V]]);var K=G,J=o.p+"img/it-img.3558535a.webp";const ee={class:"flex justify-center items-center mt-10"},te={class:"text-4xl text-center mb-5"},oe=(0,a._)("img",{src:J,alt:"",class:"max-h-full min-w-full mb-3 rounded-lg"},null,-1);function se(e,t,o,s,r,l){return(0,a.wg)(),(0,a.iD)("div",ee,[(0,a._)("div",{class:"3d-card max-w-xl p-5 rounded-lg shadow-2xl cursor-pointer waves-effect waves-light",id:"tilt",onClick:t[0]||(t[0]=t=>e.$router.push("/hotels"))},[(0,a._)("h1",te,(0,F.zw)(o.greeting),1),oe])])}var ae={name:"my-3d-card",props:{greeting:{type:String}},mounted(){let e=document.getElementById("tilt");const t=e.clientHeight,o=e.clientWidth;function s(s){const a=s.layerX,r=s.layerY,l=(a-o/2)/o*20,n=(r-t/2)/t*-20,i="perspective(500px) scale(1.1) rotateX("+n+"deg) rotateY("+l+"deg)";e.style.transform=i}e.addEventListener("mousemove",s),e.addEventListener("mouseout",(function(){e.style.transform="perspective(500px) scale(1) rotateX(0) rotateY(0)"})),e.addEventListener("mousedown",(function(){e.style.transform="perspective(500px) scale(0.9) rotateX(0) rotateY(0)"})),e.addEventListener("mouseup",(function(){e.style.transform="perspective(500px) scale(1.1) rotateX(0) rotateY(0)"}))}};const re=(0,x.Z)(ae,[["render",se]]);var le=re,ne=[q,B,Y,K,le];const ie={class:"container"};function ue(e,t,o,s,r,l){const n=(0,a.up)("my-3d-card"),i=(0,a.up)("footer-vue");return(0,a.wg)(),(0,a.iD)("div",ie,[(0,a.Wm)(n,{greeting:s.message},null,8,["greeting"]),(0,a.Wm)(i)])}var de=o(2262);const ce=(0,a._)("footer",{class:"page-footer"},[(0,a._)("div",{class:"footer-copyright h-12"},[(0,a._)("div",{class:"container"},[(0,a.Uk)(" © 2022 Copyright CNTT "),(0,a._)("a",{class:"grey-text text-lighten-4 right underline underline-offset-8 hover:underline-offset-4 duration-300 ease-out",href:"https://github.com/hoach-linux"},"GitHub")])])],-1),me=[ce];function he(e,t,o,s,r,l){return(0,a.wg)(),(0,a.iD)("div",null,me)}var pe={};const fe=(0,x.Z)(pe,[["render",he]]);var ge=fe,ve={logout:"Success. You are logged out",login:"Success. You are logged in",registered:"Success. You are registered",hotel_created:"Success. Hotel was created",menu_created:"Success. Menu was created"},we={components:{footerVue:ge},name:"MainPage",setup(){const e=(0,de.iH)("Welcome !"),t=(0,w.tv)(),o=(0,b.oR)(),s=JSON.parse(localStorage.getItem("userData"));return(0,a.bv)((async()=>{try{let t=await _().get("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/users",{params:{limit:1e3},headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});await o.dispatch("post/authTrue");const a=t.data.data.filter((e=>s.email===e.email));e.value=`Welcome ${a[0].first_name} ${a[0].last_name} !`}catch(a){await _().post("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/auth/logout",{refresh_token:localStorage.getItem("refresh_token")}),localStorage.clear(),o.dispatch("post/authFalse"),t.push("/register")}})),{message:e}},mounted(){ve[this.$route.query.message]&&this.$message(ve[this.$route.query.message])}};const be=(0,x.Z)(we,[["render",ue]]);var ye=be;const _e={class:"container"},ke={class:"app__btns"},xe={key:1,style:{"will-change":"transform"},class:"posts-loading"},$e={class:"observer"};function Ce(e,t,o,r,l,n){const i=(0,a.up)("my-input"),u=(0,a.up)("my-button"),d=(0,a.up)("hotel-form"),c=(0,a.up)("my-dialog"),m=(0,a.up)("my-header"),h=(0,a.up)("hotel-list"),p=(0,a.Q2)("intersection");return(0,a.wg)(),(0,a.j4)(s.uT,null,{default:(0,a.w5)((()=>[(0,a._)("div",_e,[(0,a.Wm)(i,{value:r.searchQuery,"onUpdate:value":t[0]||(t[0]=e=>r.searchQuery=e),placeholder:"Search..."},null,8,["value"]),(0,a._)("div",ke,[(0,a.Wm)(u,{onClick:n.showDialog,class:"create-post flex-1 md:flex-auto m-0"},{default:(0,a.w5)((()=>[(0,a.Uk)("Create Hotel")])),_:1},8,["onClick"])]),((0,a.wg)(),(0,a.j4)(a.lR,{to:"body"},[(0,a.Wm)(s.uT,{name:"modal-show"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{show:l.dialogVisible,"onUpdate:show":t[1]||(t[1]=e=>l.dialogVisible=e),style:{"will-change":"transform"}},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{onCreate:n.createPost},null,8,["onCreate"])])),_:1},8,["show"])])),_:1})])),(0,a.Wm)(m,{header:"Your Hotels"}),(0,a.Wm)(s.uT,{mode:"out-in"},{default:(0,a.w5)((()=>[r.isHotelLoading?((0,a.wg)(),(0,a.iD)("div",xe," Hotels Loading... ")):((0,a.wg)(),(0,a.j4)(h,{key:0,hotels:r.searchedHotels,onRemove:n.removePost,style:{"will-change":"transform"},class:"posts"},null,8,["hotels","onRemove"]))])),_:1}),(0,a.wy)((0,a._)("div",$e,null,512),[[p,r.loadMoreHotels]])])])),_:1})}o(541);const Ie=e=>((0,a.dD)("data-v-8d19a340"),e=e(),(0,a.Cn)(),e),Se=Ie((()=>(0,a._)("h2",{class:"text-white text-4xl"},"Create Hotel",-1))),Pe=["value"],We=Ie((()=>(0,a._)("input",{type:"file",id:"file",class:"block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-sky-600 hover:file:bg-blue-600 hover:file:text-white"},null,-1)));function De(e,t,o,r,l,n){const i=(0,a.up)("my-input"),u=(0,a.up)("my-button"),d=(0,a.Q2)("focus");return(0,a.wg)(),(0,a.iD)("form",{onSubmit:t[2]||(t[2]=(0,s.iM)((()=>{}),["prevent"]))},[Se,(0,a.wy)((0,a.Wm)(i,{value:l.hotel.title,"onUpdate:value":t[0]||(t[0]=e=>l.hotel.title=e),type:"text",placeholder:"Title",required:"",minlength:"1",class:"input-modal"},null,8,["value"]),[[d]]),(0,a._)("textarea",{name:"text",id:"",cols:"30",rows:"10",value:l.hotel.address,onInput:t[1]||(t[1]=e=>l.hotel.address=e.target.value),placeholder:"Address",required:"",minlength:"10",class:"input-modal"},null,40,Pe),We,(0,a.Wm)(u,{class:"btn",onClick:n.canClickBtn,type:"submit"},{default:(0,a.w5)((()=>[(0,a.Uk)("Create")])),_:1},8,["onClick"])],32)}var He={data(){return{hotel:{title:"",logo:"",address:""}}},methods:{createHotel(){this.file=document.getElementById("file"),this.$emit("create",this.hotel,this.file),this.hotel={title:"",logo:"",address:""}},canClickBtn(){this.file=document.getElementById("file");let e=document.querySelector(".input-modal");if(void 0==this.file.files[0]&&alert("Please choose a file"),e.value.length>=1&&void 0!=this.file.files[0])return this.createHotel()}},mounted(){}};const Ue=(0,x.Z)(He,[["render",De],["__scopeId","data-v-8d19a340"]]);var Me=Ue;const qe={key:0,class:"hotels"},Le={key:1,style:{color:"#c21e56","text-align":"center",display:"block"},class:"text-2xl"};function Te(e,t,o,r,l,n){const i=(0,a.up)("hotel-item");return this.hotels.length>0?((0,a.wg)(),(0,a.iD)("div",qe,[(0,a.Wm)(s.W3,{name:"hotel-list",mode:"out-in"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.hotels,(t=>((0,a.wg)(),(0,a.j4)(i,{hotel:t,key:t.id,onRemove:o=>e.$emit("remove",t),style:{"will-change":"transform"}},null,8,["hotel","onRemove"])))),128))])),_:1})])):((0,a.wg)(),(0,a.iD)("h2",Le," HOTEL LIST IS EMPTY! "))}const Ee={class:"post-wrapper"},Oe={class:"post min-w-full"},Be={class:"post-main title mb-8"},je={class:"img-wrapper"},Ae=["src"],Ze={class:"post-main first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left selection:bg-sky-300 selection:text-sky-900"},Ne={class:"buttons"};function Ye(e,t,o,r,l,n){const i=(0,a.up)("my-button");return(0,a.wg)(),(0,a.iD)("div",Ee,[(0,a.Wm)(s.uT,{mode:"out-in"},{default:(0,a.w5)((()=>[(0,a._)("div",Oe,[(0,a._)("div",null,[(0,a._)("div",Be,(0,F.zw)(o.hotel.title),1),(0,a._)("div",je,[(0,a._)("img",{src:`https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/assets/${o.hotel.logo}`,alt:"",class:"img"},null,8,Ae)]),(0,a._)("p",Ze,(0,F.zw)(o.hotel.address),1)]),(0,a._)("div",Ne,[(0,a.Wm)(i,{class:"btn-read_more-post post-button",onClick:t[0]||(t[0]=t=>e.$router.push(`/hotels/${o.hotel.id}`))},{default:(0,a.w5)((()=>[(0,a.Uk)("Menu")])),_:1}),(0,a.Wm)(i,{class:"btn-delete-post post-button",onClick:t[1]||(t[1]=t=>e.$emit("remove",o.hotel))},{default:(0,a.w5)((()=>[(0,a.Uk)("Remove")])),_:1})])])])),_:1})])}var Fe={data(){return{maxSymbol:300}},props:{hotel:{type:Object,required:!0}},methods:{truncate(e){null!=e.address&&(e.address=e.address.length>this.maxSymbol?`${e.address.slice(0,this.maxSymbol-1)}...`:e.address)}},mounted(){this.truncate(this.hotel)}};const Re=(0,x.Z)(Fe,[["render",Ye],["__scopeId","data-v-14c853b0"]]);var ze=Re,Qe={components:{hotelItem:ze},props:{hotels:{type:Array,required:!0}}};const Ve=(0,x.Z)(Qe,[["render",Te],["__scopeId","data-v-1ebd7942"]]);var Xe=Ve;function Ge(e){let t=(0,de.iH)(1);const o=(0,de.iH)("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net"),s=(0,de.iH)("total_count"),r=(0,de.iH)([]),l=(0,de.iH)(0),n=(0,de.iH)(!0),i=async()=>{try{const a=await _()({headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},method:"get",url:`${o.value}/items/hotels`,params:{meta:s.value}});l.value=Math.ceil(a.data.meta.total_count/e),t.value=l.value;const i=await _().get(`${o.value}/items/hotels`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},params:{page:t.value,limit:e}});r.value=await i.data.data.reverse()}catch(a){console.log(a.name,a.message)}finally{setTimeout((()=>n.value=!1),0)}},u=async()=>{try{if(1!=t.value){t.value-=1;const s=await _().get(`${o.value}/items/hotels`,{params:{page:t.value,limit:e}});r.value=await([...r.value,...s.data.data.reverse()])}}catch(s){document.location.reload(!0)}};return(0,a.bv)(i),{hotels:r,totalPages:l,isHotelLoading:n,page:t,meta:s,serverUrl:o,loadMoreHotels:u}}function Ke(e){const t=(0,de.iH)(""),o=(0,a.Fl)((()=>[...e.value].sort(((e,o)=>e[t.value]?.localeCompare(o[t.value])))));return{selectedSort:t,sortedHotels:o}}function Je(e){const t=(0,de.iH)(""),o=(0,a.Fl)((()=>e.value.filter((e=>e.title.toLowerCase().includes(t.value.toLowerCase())))));return{searchQuery:t,searchedHotels:o}}var et={components:{hotelList:Xe,hotelForm:Me},data(){return{dialogVisible:!1}},setup(){const e=(0,b.oR)(),{hotels:t,totalPages:o,isHotelLoading:s,page:a,meta:r,serverUrl:l,loadMoreHotels:n}=Ge(10),{selectedSort:i,sortedHotels:u}=Ke(t),{searchQuery:d,searchedHotels:c}=Je(u);return e.dispatch("post/authTrue"),{hotels:t,totalPages:o,isHotelLoading:s,page:a,meta:r,serverUrl:l,loadMoreHotels:n,selectedSort:i,sortedHotels:u,searchQuery:d,searchedHotels:c}},methods:{...(0,b.nv)({}),...(0,b.OI)({}),createPost(e,t){this.dialogVisible=!1,this.pushHotelImage(t),setTimeout((()=>{_().get(`${this.serverUrl}/files?sort=uploaded_on`,{params:{limit:1e6}}).then((t=>{let o=t.data.data;return _()({method:"post",url:`${this.serverUrl}/items/hotels`,headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},data:{title:e.title,logo:o[o.length-1].id,address:e.address}}).then((()=>this.hotels.unshift(e))).then((()=>{this.$router.push("/hotels?message=hotel_created")})).then((()=>{document.location.reload(!0)}))}))}),1e3)},pushHotelImage(e){const t=new FormData;return console.log(e),t.append("title","Image"),t.append("file",e.files[0]),_().post(`${this.serverUrl}/files`,t)},removePost(e){try{return this.hotels=this.hotels.filter((t=>t.id!==e.id)),_()["delete"](`${this.serverUrl}/items/hotels/${e.id}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})}catch(t){alert("You are not registered")}},showDialog(){this.dialogVisible=!0},changePage(e){this.page=e}},computed:{...(0,b.rn)({metaAll:e=>e.post.metaAll,totalPages:e=>e.post.totalPages,sortOptions:e=>e.post.sortOptions}),...(0,b.Se)({})},mounted(){ve[this.$route.query.message]&&this.$message(ve[this.$route.query.message])}};const tt=(0,x.Z)(et,[["render",Ce]]);var ot=tt;const st={class:"post-id-page container"},at={key:0,class:"app__btns"},rt={class:"menus"},lt=["menu"],nt={class:"img-wrapper min-h-full min-w-full md:min-w-0"},it=["src"],ut={class:"main-menu md:mt-0 md:ml-5 ml-0 mt-5 flex-1"},dt={class:"post-main title mb-2"},ct={class:"post-main mb-10"};function mt(e,t,o,r,l,n){const i=(0,a.up)("my-button"),u=(0,a.up)("my-header"),d=(0,a.up)("menu-form"),c=(0,a.up)("my-dialog");return(0,a.wg)(),(0,a.iD)("div",st,[r.auth?((0,a.wg)(),(0,a.iD)("div",at,[(0,a.Wm)(i,{onClick:n.showDialog,class:"create-post flex-1 md:flex-auto m-0"},{default:(0,a.w5)((()=>[(0,a.Uk)("Create Menu")])),_:1},8,["onClick"])])):(0,a.kq)("",!0),(0,a.Wm)(u,{header:"Today's menu",class:"header"}),((0,a.wg)(),(0,a.j4)(a.lR,{to:"body"},[(0,a.Wm)(s.uT,{name:"modal-show"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{show:l.dialogVisible,"onUpdate:show":t[0]||(t[0]=e=>l.dialogVisible=e),style:{"will-change":"transform"}},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{onCreate:n.createMenu},null,8,["onCreate"])])),_:1},8,["show"])])),_:1})])),(0,a.Wm)(s.uT,{mode:"out-in"},{default:(0,a.w5)((()=>[(0,a._)("div",rt,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.menus,(e=>((0,a.wg)(),(0,a.iD)("div",{menu:e,key:e.id,style:{"will-change":"transform"},class:"post min-w-full flex-col md:flex-row"},[(0,a._)("div",nt,[(0,a._)("img",{src:`https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/assets/${e.logo}`,alt:"",class:"img"},null,8,it)]),(0,a._)("div",ut,[(0,a._)("div",dt,(0,F.zw)(e.title),1),(0,a._)("blockquote",ct,(0,F.zw)(e.description),1),r.auth?((0,a.wg)(),(0,a.j4)(i,{key:0,onClick:t=>n.removeMenu(e),class:"button-remove content-between min-w-full"},{default:(0,a.w5)((()=>[(0,a.Uk)("Remove")])),_:2},1032,["onClick"])):(0,a.kq)("",!0)])],8,lt)))),128))])])),_:1})])}const ht=e=>((0,a.dD)("data-v-3225954d"),e=e(),(0,a.Cn)(),e),pt=ht((()=>(0,a._)("h2",{class:"text-white text-4xl"},"Create Menu",-1))),ft=["value"],gt=ht((()=>(0,a._)("input",{type:"file",id:"file",class:"block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-sky-600 hover:file:bg-blue-600 hover:file:text-white"},null,-1)));function vt(e,t,o,r,l,n){const i=(0,a.up)("my-input"),u=(0,a.up)("my-button"),d=(0,a.Q2)("focus");return(0,a.wg)(),(0,a.iD)("form",{onSubmit:t[2]||(t[2]=(0,s.iM)((()=>{}),["prevent"]))},[pt,(0,a.wy)((0,a.Wm)(i,{value:l.menu.title,"onUpdate:value":t[0]||(t[0]=e=>l.menu.title=e),type:"text",placeholder:"Title",required:"",minlength:"1",class:"input-modal"},null,8,["value"]),[[d]]),(0,a._)("input",{type:"text",value:l.menu.description,onInput:t[1]||(t[1]=e=>l.menu.description=e.target.value),placeholder:"Description",required:"",minlength:"1",class:"input-modal"},null,40,ft),gt,(0,a.Wm)(u,{class:"btn-menu",onClick:n.canClickBtn,type:"submit"},{default:(0,a.w5)((()=>[(0,a.Uk)("Create")])),_:1},8,["onClick"])],32)}var wt={data(){return{menu:{title:"",logo:"",description:""}}},methods:{createMenu(){this.file=document.getElementById("file"),this.$emit("create",this.menu,this.file),this.menu={title:"",logo:"",description:""}},canClickBtn(){this.file=document.getElementById("file");let e=document.querySelector(".input-modal");if(void 0==this.file.files[0]&&alert("Please choose a file"),e.value.length>=1&&void 0!=this.file.files[0])return this.createMenu()}},mounted(){}};const bt=(0,x.Z)(wt,[["render",vt],["__scopeId","data-v-3225954d"]]);var yt=bt,_t={components:{hotelItem:ze,menuForm:yt},data(){return{menus:[],dialogVisible:!1}},setup(){const e=(0,b.oR)(),t=(0,de.iH)(localStorage.getItem("token"));return t.value&&e.dispatch("post/authTrue"),{auth:t}},methods:{filterMenu(){this.menus=this.menus.filter((e=>e.id==this.$route.params.id))},showDialog(){this.dialogVisible=!0},async fetchMenu(){try{const e=await _().get(`${this.$store.state.post.serverUrl}/items/menu`);this.menus=e.data.data}catch(e){}},createMenu(e,t){this.dialogVisible=!1,this.pushMenuImage(t),setTimeout((()=>{_().get(`${this.$store.state.post.serverUrl}/files?sort=uploaded_on`,{params:{limit:1e6}}).then((t=>{let o=t.data.data;return _()({method:"post",url:`${this.$store.state.post.serverUrl}/items/menu`,headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},data:{title:e.title,logo:o[o.length-1].id,description:e.description}}).then((()=>this.menus.unshift(e))).then((()=>{document.location.reload(!0)}))}))}),1e3)},pushMenuImage(e){const t=new FormData;return console.log(e),t.append("title","Image"),t.append("file",e.files[0]),_().post(`${this.$store.state.post.serverUrl}/files`,t)},removeMenu(e){try{return this.menus=this.menus.filter((t=>t.id!==e.id)),_()["delete"](`${this.$store.state.post.serverUrl}/items/menu/${e.id}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})}catch(t){alert("You are not registered")}}},mounted(){this.fetchMenu()}};const kt=(0,x.Z)(_t,[["render",mt],["__scopeId","data-v-4310484f"]]);var xt=kt;const $t=e=>((0,a.dD)("data-v-2c26ddd6"),e=e(),(0,a.Cn)(),e),Ct={class:"flex justify-center items-center min-h-screen container"},It=$t((()=>(0,a._)("h1",{class:"text-4xl mb-5"},"Sign in",-1)));function St(e,t,o,r,l,n){const i=(0,a.up)("my-input"),u=(0,a.up)("my-button");return(0,a.wg)(),(0,a.iD)("div",Ct,[(0,a._)("form",{class:"flex flex-col p-5 rounded-xl w-96 register-form",onSubmit:t[5]||(t[5]=(0,s.iM)(((...e)=>r.submit&&r.submit(...e)),["prevent"]))},[It,(0,a.Wm)(i,{value:r.data.firstName,"onUpdate:value":t[0]||(t[0]=e=>r.data.firstName=e),type:"text",placeholder:"First Name",required:""},null,8,["value"]),(0,a.Wm)(i,{value:r.data.lastName,"onUpdate:value":t[1]||(t[1]=e=>r.data.lastName=e),type:"text",placeholder:"Last Name",required:""},null,8,["value"]),(0,a.Wm)(i,{value:r.data.email,"onUpdate:value":t[2]||(t[2]=e=>r.data.email=e),type:"email",placeholder:"Email",required:""},null,8,["value"]),(0,a.Wm)(i,{value:r.data.password,"onUpdate:value":t[3]||(t[3]=e=>r.data.password=e),type:"password",placeholder:"Password",required:""},null,8,["value"]),(0,a.Wm)(u,{type:"submit",class:"btn-register border-solid border-blue-700 border-2 text-white mt-1"},{default:(0,a.w5)((()=>[(0,a.Uk)("Continue")])),_:1}),(0,a._)("p",{onClick:t[4]||(t[4]=t=>e.$router.push("/login")),class:"text-right cursor-pointer mt-2 underline underline-offset-8 hover:underline-offset-4 duration-300 hover:text-blue-400 ease-out"}," I have an account ")],32)])}var Pt={name:"Register",setup(){const e=(0,de.qj)({firstName:"",lastName:"",role:"4e967166-975d-4a12-8fd8-e3fdb9e5be54",email:"",password:""}),t=(0,w.tv)(),o=async()=>{await _().post("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/users",{first_name:e.firstName,last_name:e.lastName,email:e.email,password:e.password,role:e.role}),await t.push("/login?message=registered")};return{data:e,submit:o}}};const Wt=(0,x.Z)(Pt,[["render",St],["__scopeId","data-v-2c26ddd6"]]);var Dt=Wt;const Ht=e=>((0,a.dD)("data-v-873e44d6"),e=e(),(0,a.Cn)(),e),Ut={class:"flex justify-center items-center min-h-screen container"},Mt=Ht((()=>(0,a._)("h1",{class:"text-4xl mb-5"},"Log in",-1)));function qt(e,t,o,r,l,n){const i=(0,a.up)("my-input"),u=(0,a.up)("my-button");return(0,a.wg)(),(0,a.iD)("div",Ut,[(0,a._)("form",{class:"flex flex-col bg-gray-900 p-5 rounded-xl w-96 login-form",onSubmit:t[3]||(t[3]=(0,s.iM)(((...e)=>r.submit&&r.submit(...e)),["prevent"]))},[Mt,(0,a.Wm)(i,{value:r.data.email,"onUpdate:value":t[0]||(t[0]=e=>r.data.email=e),type:"email",placeholder:"Email",required:""},null,8,["value"]),(0,a.Wm)(i,{value:r.data.password,"onUpdate:value":t[1]||(t[1]=e=>r.data.password=e),type:"password",placeholder:"Password",required:""},null,8,["value"]),(0,a.Wm)(u,{type:"submit",class:"btn-register border-solid border-blue-700 border-2 text-white mt-1"},{default:(0,a.w5)((()=>[(0,a.Uk)("Continue")])),_:1}),(0,a._)("p",{onClick:t[2]||(t[2]=t=>e.$router.push("/register")),class:"text-right cursor-pointer mt-2 underline underline-offset-8 hover:underline-offset-4 duration-300 hover:text-blue-400 ease-out"},"Register")],32)])}var Lt={name:"Login",setup(){const e=(0,de.qj)({email:"",password:""}),t=(0,w.tv)(),o=async()=>{try{let o=await _().post("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/auth/login",{email:e.email,password:e.password});await localStorage.setItem("userData",o.config.data),await localStorage.setItem("token",o.data.data.access_token),await localStorage.setItem("refresh_token",o.data.data.refresh_token),await t.push("/?message=login")}catch(o){alert("Wrong email or password")}};return{data:e,submit:o}},mounted(){ve[this.$route.query.message]&&this.$message(ve[this.$route.query.message])}};const Tt=(0,x.Z)(Lt,[["render",qt],["__scopeId","data-v-873e44d6"]]);var Et=Tt;const Ot=[{path:"/",meta:{auth:!0},component:ye},{path:"/hotels",component:ot,meta:{auth:!0},name:"hotels"},{path:"/hotels/:id",component:xt},{path:"/register",component:Dt,name:"register"},{path:"/login",component:Et}],Bt=(0,w.p7)({routes:Ot,history:(0,w.PO)("/")});Bt.beforeEach(((e,t,o)=>{const s=localStorage.getItem("token"),a=e.matched.some((e=>e.meta.auth));!s&&a?o("/register"):o()}));var jt=Bt,At={mounted(e){e.focus()},name:"focus"},Zt={mounted(e,t){const o={rootMargin:"0px",threshold:1},s=(e,o)=>{e[0].isIntersecting&&t.value()},a=new IntersectionObserver(s,o);a.observe(e)},name:"intersection"},Nt=[At,Zt];const Yt={state:()=>({authenticated:!1,auth:null,posts:[],isPostLoading:!1,dark:!1,root:null,selectedSort:"",searchQuery:"",page:1,limit:1,metaAll:0,meta:"total_count",totalPages:0,serverUrl:"https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net",sortOptions:[{value:"title",name:"Title"},{value:"body",name:"Description"}]}),getters:{sortedPosts(e){return[...e.posts].sort(((t,o)=>t[e.selectedSort]?.localeCompare(o[e.selectedSort])))},searchedPosts(e,t){return t.sortedPosts.filter((t=>t.title.toLowerCase().includes(e.searchQuery.toLowerCase())))}},mutations:{setPosts(e,t){e.posts=t},setPostLoading(e,t){e.isPostLoading=t},setPage(e,t){e.page=t},setSelectedSort(e,t){e.selectedSort=t},setTotalPages(e,t){e.totalPages=t},setSearchQuery(e,t){e.searchQuery=t},setAuth(e,t){e.authenticated=t}},actions:{authTrue({state:e,commit:t}){t("setAuth",e.auth=!0)},authFalse({state:e,commit:t}){t("setAuth",e.auth=!1)}},namespaced:!0};var Ft=(0,b.MT)({modules:{post:Yt}}),Rt=o(5205);(0,Rt.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var zt=o(3636),Qt=o(7810),Vt=o(9417),Xt=o(5779);o(4415);(0,s.ri)({});var Gt={install(e,t){e.config.globalProperties.$message=e=>{M.toast({html:e})},e.config.globalProperties.$error=e=>{M.toast({html:`[Error]: ${e}`})}}};zt.vI.add(Vt.M_6,Vt.DBf,Vt.acZ,Vt.mXR,Vt.r5q,Vt.Ht4);const Kt=(0,s.ri)(P);ne.forEach((e=>{Kt.component(e.name,e)})),Nt.forEach((e=>{Kt.directive(e.name,e)})),document.addEventListener("DOMContentLoaded",(()=>{Kt.use(Xt.Z),Kt.use(Gt).use(Ft).use(jt).component("font-awesome-icon",Qt.GN).mount("#app")}))}},t={};function o(s){var a=t[s];if(void 0!==a)return a.exports;var r=t[s]={exports:{}};return e[s].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,s,a,r){if(!s){var l=1/0;for(d=0;d<e.length;d++){s=e[d][0],a=e[d][1],r=e[d][2];for(var n=!0,i=0;i<s.length;i++)(!1&r||l>=r)&&Object.keys(o.O).every((function(e){return o.O[e](s[i])}))?s.splice(i--,1):(n=!1,r<l&&(l=r));if(n){e.splice(d--,1);var u=a();void 0!==u&&(t=u)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[s,a,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,r,l=s[0],n=s[1],i=s[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(a in n)o.o(n,a)&&(o.m[a]=n[a]);if(i)var d=i(o)}for(t&&t(s);u<l.length;u++)r=l[u],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},s=self["webpackChunkhotel"]=self["webpackChunkhotel"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(9043)}));s=o.O(s)})();
//# sourceMappingURL=app.74717b5b.js.map