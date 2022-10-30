(function(){"use strict";var t={3436:function(t,e,s){var o=s(9963),a=s(6252);const r={class:"app"};function n(t,e,s,n,l,i){const c=(0,a.up)("navbar"),u=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),(0,a._)("div",r,[(0,a.Wm)(u,null,{default:(0,a.w5)((({Component:t})=>[(0,a.Wm)(o.uT,{name:"fade",mode:"out-in"},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)((0,a.LL)(t)))])),_:2},1024)])),_:1})])],64)}s(7658);var l=s.p+"img/logo.965b105d.png";const i=t=>((0,a.dD)("data-v-f4d90942"),t=t(),(0,a.Cn)(),t),c={class:"navbar"},u=i((()=>(0,a._)("img",{src:l,alt:"",class:"logo"},null,-1))),d=[u],p={class:"navbar__btn"},m=i((()=>(0,a._)("div",{class:"activeBtn"},null,-1))),f={class:"navbar__btn bottombar__btn"},h=i((()=>(0,a._)("p",null,"Posts",-1))),v=i((()=>(0,a._)("p",null,"About",-1))),g=i((()=>(0,a._)("div",{class:"activeBtn"},null,-1)));function w(t,e,s,r,n,l){const i=(0,a.up)("my-button"),u=(0,a.up)("font-awesome-icon");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",c,[(0,a._)("div",{style:{cursor:"pointer",color:"#000"},onClick:e[0]||(e[0]=e=>t.$router.push("/")),class:"icon"},d),(0,a.wy)((0,a._)("div",p,[(0,a.Wm)(i,{onClick:e[1]||(e[1]=e=>t.$router.push("/posts")),class:"waves-effect waves-light"},{default:(0,a.w5)((()=>[(0,a.Uk)("Posts")])),_:1}),(0,a.Wm)(i,{onClick:e[2]||(e[2]=e=>t.$router.push("/about")),class:"waves-effect waves-light"},{default:(0,a.w5)((()=>[(0,a.Uk)("About")])),_:1}),m],512),[[o.F8,r.auth]]),r.auth?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:e[3]||(e[3]=(...t)=>r.logOut&&r.logOut(...t)),class:"log-out text-white border-2 border-rose-700 w-40 h-12 ml-2 mr-4 font-semibold transition ease-in-out duration-150 hover:w-60 rounded-[10px] waves-effect waves-light"},[(0,a.Uk)(" Log out "),(0,a.Wm)(u,{icon:"fa-solid fa-right-from-bracket",class:"ml-2"})])):(0,a.kq)("",!0)]),(0,a._)("div",f,[(0,a.Wm)(i,{onClick:e[4]||(e[4]=e=>t.$router.push("/posts")),class:"waves-effect waves-light"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{icon:"fa-solid fa-blog"}),h])),_:1}),(0,a.Wm)(i,{onClick:e[5]||(e[5]=e=>t.$router.push("/about")),class:"waves-effect waves-light"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{icon:"fa-solid fa-circle-info"}),v])),_:1}),g])],64)}var b=s(2201),y=s(3907),_=s(9669),x=s.n(_),k={setup(){const t=(0,b.tv)(),e=(0,y.oR)(),s=(0,a.Fl)((()=>e.state.post.authenticated)),o=async()=>{try{await x().post("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/auth/logout",{refresh_token:localStorage.getItem("refresh_token")});localStorage.clear(),e.dispatch("post/authFalse"),t.push("/register")}catch(s){alert(s)}};return{auth:s,logOut:o}},mounted(){const t=document.querySelectorAll(".navbar__btn > button");document.querySelector(".icon");function e(){t.forEach((t=>{t.addEventListener("click",(()=>{s(),t.classList.add("active")}))}))}function s(){t.forEach((t=>{t.classList.remove("active")}))}e()}},P=s(3744);const S=(0,P.Z)(k,[["render",w],["__scopeId","data-v-f4d90942"]]);var C=S,W={components:{Navbar:C},data(){return{dark:!1,root:null}},mounted(){this.root=document.documentElement},watch:{dark:{handler:function(){this.$nextTick((()=>{this.dark?(this.root.style.setProperty("--main-background-color","#f2f2f2"),this.root.style.setProperty("--dark-background-color","#000"),this.root.style.setProperty("--main-text-color","#000"),this.root.style.setProperty("--white-text-color","#fff"),this.root.style.setProperty("--white-color","#fff"),this.root.style.setProperty("--main-button-color","#42b883"),this.root.style.setProperty("--delete-color","#c21e56"),this.root.style.setProperty("--page-wrapper-bg","rgba(32, 32, 32, 0.1)")):(this.root.style.setProperty("--main-background-color","#000"),this.root.style.setProperty("--dark-background-color","#fff"),this.root.style.setProperty("--main-text-color","#fff"),this.root.style.setProperty("--white-text-color","#000"),this.root.style.setProperty("--white-color","#161617"),this.root.style.setProperty("--main-button-color","#2EE59D"),this.root.style.setProperty("--delete-color","#fa0b5b"),this.root.style.setProperty("--page-wrapper-bg","rgb(31 255 131 / 10%)"))}))},immediate:!0}}};const D=(0,P.Z)(W,[["render",n]]);var I=D;const $={class:"btn waves-effect waves-light"};function E(t,e,s,o,r,n){return(0,a.wg)(),(0,a.iD)("button",$,[(0,a.WI)(t.$slots,"default",{},void 0,!0)])}var T={name:"my-button"};const U=(0,P.Z)(T,[["render",E],["__scopeId","data-v-a8f050fc"]]);var L=U;const O=["value"];function N(t,e,s,o,r,n){return(0,a.wg)(),(0,a.iD)("input",{value:s.value,onInput:e[0]||(e[0]=(...t)=>n.updateInput&&n.updateInput(...t)),type:"text",name:"text",class:"input"},null,40,O)}var Z={name:"my-input",props:{value:[Number,String]},methods:{updateInput(t){this.$emit("update:value",t.target.value)}}};const q=(0,P.Z)(Z,[["render",N],["__scopeId","data-v-066fdc30"]]);var A=q;function j(t,e,s,r,n,l){return t.show?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"dialog",onClick:e[1]||(e[1]=(...e)=>t.hideDialog&&t.hideDialog(...e))},[(0,a._)("div",{onClick:e[0]||(e[0]=(0,o.iM)((()=>{}),["stop"])),class:"dialog__content"},[(0,a.WI)(t.$slots,"default",{},void 0,!0)])])):(0,a.kq)("",!0)}var M={props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}}},H={name:"my-dialog",mixins:[M]};const z=(0,P.Z)(H,[["render",j],["__scopeId","data-v-5a3cc983"]]);var V=z,B=s(3577);const Y={class:"text-4xl font-semibold italic text-left text-slate-900 mb-10 mt-14"},Q={class:"header-text"},F={class:"relative text-white"};function R(t,e,s,o,r,n){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("blockquote",Y,[(0,a._)("span",Q,[(0,a._)("h1",F,(0,B.zw)(s.header),1)])])])}var X={name:"my-header",props:{header:String}};const G=(0,P.Z)(X,[["render",R]]);var K=G,J=s.p+"img/it-img.3558535a.webp";const tt={class:"flex justify-center items-center mt-10"},et={class:"text-4xl text-center mb-5"},st=(0,a._)("img",{src:J,alt:"",class:"max-h-full min-w-full mb-3 rounded-lg"},null,-1),ot=(0,a._)("p",{class:"text-xl"}," Here you can see other people's posts and learn something new from the world. ",-1),at=(0,a._)("p",{class:"text-xl mt-3"},"This web application was created for everyone",-1);function rt(t,e,s,o,r,n){return(0,a.wg)(),(0,a.iD)("div",tt,[(0,a._)("div",{class:"3d-card max-w-xl p-5 rounded-lg shadow-2xl cursor-pointer waves-effect waves-light",id:"tilt",onClick:e[0]||(e[0]=e=>t.$router.push("/posts"))},[(0,a._)("h1",et,(0,B.zw)(s.greeting),1),st,ot,at])])}var nt={name:"my-3d-card",props:{greeting:{type:String}},mounted(){let t=document.getElementById("tilt");const e=t.clientHeight,s=t.clientWidth;function o(o){const a=o.layerX,r=o.layerY,n=(a-s/2)/s*20,l=(r-e/2)/e*-20,i="perspective(500px) scale(1.1) rotateX("+l+"deg) rotateY("+n+"deg)";t.style.transform=i}t.addEventListener("mousemove",o),t.addEventListener("mouseout",(function(){t.style.transform="perspective(500px) scale(1) rotateX(0) rotateY(0)"})),t.addEventListener("mousedown",(function(){t.style.transform="perspective(500px) scale(0.9) rotateX(0) rotateY(0)"})),t.addEventListener("mouseup",(function(){t.style.transform="perspective(500px) scale(1.1) rotateX(0) rotateY(0)"}))}};const lt=(0,P.Z)(nt,[["render",rt]]);var it=lt,ct=[L,A,V,K,it];const ut={class:"container"};function dt(t,e,s,o,r,n){const l=(0,a.up)("my-3d-card"),i=(0,a.up)("footer-vue");return(0,a.wg)(),(0,a.iD)("div",ut,[(0,a.Wm)(l,{greeting:o.message},null,8,["greeting"]),(0,a.Wm)(i)])}var pt=s(2262);const mt=(0,a._)("footer",{class:"page-footer"},[(0,a._)("div",{class:"footer-copyright h-12"},[(0,a._)("div",{class:"container"},[(0,a.Uk)(" © 2022 Copyright CNTT "),(0,a._)("a",{class:"grey-text text-lighten-4 right underline underline-offset-8 hover:underline-offset-4 duration-300 ease-out",href:"https://github.com/hoach-linux"},"GitHub")])])],-1),ft=[mt];function ht(t,e,s,o,r,n){return(0,a.wg)(),(0,a.iD)("div",null,ft)}var vt={};const gt=(0,P.Z)(vt,[["render",ht]]);var wt=gt,bt={components:{footerVue:wt},name:"MainPage",setup(){const t=(0,pt.iH)("Welcome !"),e=(0,b.tv)(),s=(0,y.oR)(),o=JSON.parse(localStorage.getItem("userData"));return(0,a.bv)((async()=>{try{let e=await x().get("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/users",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});await s.dispatch("post/authTrue");const a=e.data.data.filter((t=>o.email===t.email));t.value=`Welcome ${a[0].first_name} ${a[0].last_name} !`}catch(a){e.push("/register")}})),{message:t}}};const yt=(0,P.Z)(bt,[["render",dt]]);var _t=yt;const xt={class:"container"},kt={class:"app__btns"},Pt={key:1,style:{"will-change":"transform"},class:"posts-loading"},St={class:"observer"};function Ct(t,e,s,r,n,l){const i=(0,a.up)("my-input"),c=(0,a.up)("my-button"),u=(0,a.up)("my-select"),d=(0,a.up)("post-nasa-earth"),p=(0,a.up)("post-form"),m=(0,a.up)("my-dialog"),f=(0,a.up)("my-header"),h=(0,a.up)("post-list"),v=(0,a.Q2)("intersection");return(0,a.wg)(),(0,a.j4)(o.uT,null,{default:(0,a.w5)((()=>[(0,a._)("div",xt,[(0,a.Wm)(i,{value:r.searchQuery,"onUpdate:value":e[0]||(e[0]=t=>r.searchQuery=t),placeholder:"Search..."},null,8,["value"]),(0,a._)("div",kt,[(0,a.Wm)(c,{onClick:l.showDialog,class:"create-post flex-1 md:flex-auto"},{default:(0,a.w5)((()=>[(0,a.Uk)("Create Post")])),_:1},8,["onClick"]),(0,a.Wm)(u,{modelValue:r.selectedSort,"onUpdate:modelValue":e[1]||(e[1]=t=>r.selectedSort=t),class:"select flex-1",options:t.sortOptions},null,8,["modelValue","options"])]),(0,a.Wm)(d),((0,a.wg)(),(0,a.j4)(a.lR,{to:"body"},[(0,a.Wm)(o.uT,{name:"modal-show"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{show:n.dialogVisible,"onUpdate:show":e[2]||(e[2]=t=>n.dialogVisible=t),style:{"will-change":"transform"}},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{onCreate:l.createPost},null,8,["onCreate"])])),_:1},8,["show"])])),_:1})])),(0,a.Wm)(f,{header:"Posts from users"}),(0,a.Wm)(o.uT,{mode:"out-in"},{default:(0,a.w5)((()=>[r.isPostLoading?((0,a.wg)(),(0,a.iD)("div",Pt," Posts Loading... ")):((0,a.wg)(),(0,a.j4)(h,{key:0,posts:r.searchedPosts,onRemove:l.removePost,style:{"will-change":"transform"},class:"posts"},null,8,["posts","onRemove"]))])),_:1}),(0,a.wy)((0,a._)("div",St,null,512),[[v,r.loadMorePosts]])])])),_:1})}s(541);const Wt=t=>((0,a.dD)("data-v-7fc60d1c"),t=t(),(0,a.Cn)(),t),Dt=Wt((()=>(0,a._)("h2",{class:"text-white text-4xl"},"Create Post",-1))),It=["value"],$t=Wt((()=>(0,a._)("input",{type:"file",id:"file",class:"block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-sky-600 hover:file:bg-blue-600 hover:file:text-white"},null,-1)));function Et(t,e,s,r,n,l){const i=(0,a.up)("my-input"),c=(0,a.up)("my-button"),u=(0,a.Q2)("focus");return(0,a.wg)(),(0,a.iD)("form",{onSubmit:e[2]||(e[2]=(0,o.iM)((()=>{}),["prevent"]))},[Dt,(0,a.wy)((0,a.Wm)(i,{value:n.post.title,"onUpdate:value":e[0]||(e[0]=t=>n.post.title=t),type:"text",placeholder:"Title",required:"",minlength:"1",class:"input-modal"},null,8,["value"]),[[u]]),(0,a._)("textarea",{name:"text",id:"",cols:"30",rows:"10",value:n.post.body,onInput:e[1]||(e[1]=t=>n.post.body=t.target.value),placeholder:"Description",required:"",minlength:"10",class:"input-modal"},null,40,It),$t,(0,a.Wm)(c,{class:"btn",onClick:l.canClickBtn,type:"submit"},{default:(0,a.w5)((()=>[(0,a.Uk)("Create")])),_:1},8,["onClick"])],32)}var Tt={data(){return{post:{title:"",image:"",body:""}}},methods:{createPost(){this.file=document.getElementById("file"),this.$emit("create",this.post,this.file),this.post={title:"",image:"",body:""}},canClickBtn(){this.file=document.getElementById("file");let t=document.querySelector(".input-modal");if(void 0==this.file.files[0]&&alert("Please choose a file"),t.value.length>=1&&void 0!=this.file.files[0])return this.createPost()}},mounted(){}};const Ut=(0,P.Z)(Tt,[["render",Et],["__scopeId","data-v-7fc60d1c"]]);var Lt=Ut;const Ot={key:0,class:"posts"},Nt={key:1,style:{color:"#c21e56","text-align":"center",display:"block"},class:"text-2xl"};function Zt(t,e,s,r,n,l){const i=(0,a.up)("post-item");return this.posts.length>0?((0,a.wg)(),(0,a.iD)("div",Ot,[(0,a.Wm)(o.W3,{name:"post-list",mode:"out-in"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.posts,(e=>((0,a.wg)(),(0,a.j4)(i,{post:e,key:e.id,onRemove:s=>t.$emit("remove",e),style:{"will-change":"transform"}},null,8,["post","onRemove"])))),128))])),_:1})])):((0,a.wg)(),(0,a.iD)("h2",Nt," POST LIST IS EMPTY! "))}const qt={class:"post-wrapper"},At={class:"post min-w-full"},jt={class:"post-main title mb-8"},Mt={class:"img-wrapper"},Ht=["src"],zt={class:"post-main first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left selection:bg-sky-300 selection:text-sky-900"},Vt={class:"buttons"};function Bt(t,e,s,r,n,l){const i=(0,a.up)("my-button");return(0,a.wg)(),(0,a.iD)("div",qt,[(0,a.Wm)(o.uT,{mode:"out-in"},{default:(0,a.w5)((()=>[(0,a._)("div",At,[(0,a._)("div",null,[(0,a._)("div",jt,(0,B.zw)(s.post.title),1),(0,a._)("div",Mt,[(0,a._)("img",{src:`https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/assets/${s.post.image}`,alt:"",class:"img"},null,8,Ht)]),(0,a._)("p",zt,(0,B.zw)(s.post.body),1)]),(0,a._)("div",Vt,[(0,a.Wm)(i,{class:"btn-read_more-post post-button",onClick:e[0]||(e[0]=e=>t.$router.push(`/posts/${s.post.id}`))},{default:(0,a.w5)((()=>[(0,a.Uk)("Read More")])),_:1})])])])),_:1})])}var Yt={data(){return{maxSymbol:300}},props:{post:{type:Object,required:!0}},methods:{truncate(t){null!=t.body&&(t.body=t.body.length>this.maxSymbol?`${t.body.slice(0,this.maxSymbol-1)}...`:t.body)}},mounted(){this.truncate(this.post)}};const Qt=(0,P.Z)(Yt,[["render",Bt],["__scopeId","data-v-01554ff2"]]);var Ft=Qt,Rt={components:{postItem:Ft},props:{posts:{type:Array,required:!0}}};const Xt=(0,P.Z)(Rt,[["render",Zt],["__scopeId","data-v-0d157f2e"]]);var Gt=Xt;const Kt={class:"post min-w-full"},Jt={class:"creator flex justify-between opacity-50"},te={class:"post-main title mb-8"},ee={class:"img-wrapper"},se=["src"],oe={class:"post-main first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left selection:bg-sky-300 selection:text-sky-900"};function ae(t,e,s,o,r,n){const l=(0,a.up)("my-header");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(l,{header:"News about Earth from NASA"}),(0,a._)("div",Kt,[(0,a._)("div",null,[(0,a._)("div",Jt,[(0,a._)("span",null,(0,B.zw)(r.postsEarth.copyright),1),(0,a._)("p",null,(0,B.zw)(r.postsEarth.date),1)]),(0,a._)("div",te,(0,B.zw)(r.postsEarth.title),1),(0,a._)("div",ee,[(0,a._)("img",{src:`${r.postsEarth.hdurl}`,alt:"",class:"img"},null,8,se)]),(0,a._)("p",oe,(0,B.zw)(r.postsEarth.explanation),1)])])])}var re={data(){return{postsEarth:[],api:"https://api.nasa.gov/planetary/apod?api_key=3wWET2KESGYV3qYhDPGZB6pwaqyhLWdAzZt8ZzV3"}},methods:{async fetchEarth(t){let e=await x().get(t);this.postsEarth=e.data}},mounted(){this.fetchEarth(this.api)}};const ne=(0,P.Z)(re,[["render",ae],["__scopeId","data-v-d0b20914"]]);var le=ne;const ie=t=>((0,a.dD)("data-v-c34e390a"),t=t(),(0,a.Cn)(),t),ce=ie((()=>(0,a._)("option",{disabled:"",value:""},"Select",-1))),ue=["value"];function de(t,e,s,r,n,l){return(0,a.wy)(((0,a.wg)(),(0,a.iD)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>s.modelValue=t),onChange:e[1]||(e[1]=(...t)=>l.changeOption&&l.changeOption(...t))},[ce,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.options,(t=>((0,a.wg)(),(0,a.iD)("option",{key:t.value,value:t.value},(0,B.zw)(t.name),9,ue)))),128))],544)),[[o.bM,s.modelValue]])}var pe={name:"my-select",props:{modelValue:{type:String},options:{type:Array,default:()=>[]}},methods:{changeOption(t){this.$emit("update:modelValue",t.target.value)}}};const me=(0,P.Z)(pe,[["render",de],["__scopeId","data-v-c34e390a"]]);var fe=me;function he(t){let e=(0,pt.iH)(1);const s=(0,pt.iH)("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net"),o=(0,pt.iH)("total_count"),r=(0,pt.iH)([]),n=(0,pt.iH)(0),l=(0,pt.iH)(!0),i=async()=>{try{const a=await x().get(`${s.value}/items/posts`,{params:{meta:o.value}});n.value=Math.ceil(a.data.meta.total_count/t),e.value=n.value;const i=await x().get(`${s.value}/items/posts`,{params:{page:e.value,limit:t}});r.value=await i.data.data.reverse()}catch(a){console.log(a.name,a.message)}finally{setTimeout((()=>l.value=!1),0)}},c=async()=>{try{if(1!=e.value){e.value-=1;const o=await x().get(`${s.value}/items/posts`,{params:{page:e.value,limit:t}});r.value=await([...r.value,...o.data.data.reverse()])}}catch(o){document.location.reload(!0)}};return(0,a.bv)(i),{posts:r,totalPages:n,isPostLoading:l,page:e,meta:o,serverUrl:s,loadMorePosts:c}}function ve(t){const e=(0,pt.iH)(""),s=(0,a.Fl)((()=>[...t.value].sort(((t,s)=>t[e.value]?.localeCompare(s[e.value])))));return{selectedSort:e,sortedPosts:s}}function ge(t){const e=(0,pt.iH)(""),s=(0,a.Fl)((()=>t.value.filter((t=>t.title.toLowerCase().includes(e.value.toLowerCase())))));return{searchQuery:e,searchedPosts:s}}var we={components:{postList:Gt,postForm:Lt,postNasaEarth:le,MySelect:fe},data(){return{dialogVisible:!1}},setup(t){const{posts:e,totalPages:s,isPostLoading:o,page:a,meta:r,serverUrl:n,loadMorePosts:l}=he(5),{selectedSort:i,sortedPosts:c}=ve(e),{searchQuery:u,searchedPosts:d}=ge(c);return{posts:e,totalPages:s,isPostLoading:o,page:a,meta:r,serverUrl:n,loadMorePosts:l,selectedSort:i,sortedPosts:c,searchQuery:u,searchedPosts:d}},methods:{...(0,y.nv)({}),...(0,y.OI)({setPage:"post/setPage",setSearchQuery:"post/setSearchQuery",setSelectedSort:"post/setSelectedSort"}),reversePosts(){this.posts.reverse()},createPost(t,e){this.dialogVisible=!1,this.pushPostImage(e),setTimeout((()=>{x().get(`${this.serverUrl}/files?sort=uploaded_on`).then((e=>{let s=e.data.data;return x()({method:"post",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},url:`${this.serverUrl}/items/posts`,data:{title:t.title,image:s[s.length-1].id,body:t.body}}).then((()=>this.posts.unshift(t))).then((()=>{document.location.reload(!0)}))}))}),1e3)},pushPostImage(t){const e=new FormData;return console.log(t),e.append("title","Image"),e.append("file",t.files[0]),x().post(`${this.serverUrl}/files`,e)},removePost(t){try{return this.posts=this.posts.filter((e=>e.id!==t.id)),x()["delete"](`${this.serverUrl}/items/posts/${t.id}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})}catch(e){alert("You are not registered")}},showDialog(){this.dialogVisible=!0},changePage(t){this.page=t}},computed:{...(0,y.rn)({metaAll:t=>t.post.metaAll,totalPages:t=>t.post.totalPages,sortOptions:t=>t.post.sortOptions}),...(0,y.Se)({})},mounted(){}};const be=(0,P.Z)(we,[["render",Ct]]);var ye=be;const _e={class:"container"},xe=(0,a._)("h1",{class:"text-4xl text-center"},"About site",-1),ke=(0,a._)("p",{class:"text-center mt-5"},[(0,a.Uk)("This website was built by "),(0,a._)("a",{href:"https://hoach.ru",class:"text-blue-500 underline underline-offset-8"},"Nguyen Tien Hoach"),(0,a.Uk)(" with love ❤ ")],-1),Pe=[xe,ke];function Se(t,e,s,o,r,n){return(0,a.wg)(),(0,a.iD)("div",_e,Pe)}var Ce={methods:{...(0,y.nv)({authTrue:"post/authTrue"})},mounted(){this.authTrue()}};const We=(0,P.Z)(Ce,[["render",Se]]);var De=We;const Ie={class:"post-id-page container"},$e=["post"],Ee={class:"post min-w-full"},Te={class:"post-main title mb-8"},Ue={class:"img-wrapper"},Le=["src"],Oe={class:"post-main first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:mr-3 first-letter:float-left selection:bg-sky-300 selection:text-sky-900"};function Ne(t,e,s,o,r,n){const l=(0,a.up)("font-awesome-icon");return(0,a.wg)(),(0,a.iD)("div",Ie,[(0,a.Wm)(l,{icon:"fa-solid fa-arrow-left",class:"return waves-effect waves-light",onClick:e[0]||(e[0]=e=>t.$router.push("/posts"))}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.posts,(t=>((0,a.wg)(),(0,a.iD)("div",{post:t,key:t.id,style:{"will-change":"transform"}},[(0,a._)("div",Ee,[(0,a._)("div",null,[(0,a._)("div",Te,(0,B.zw)(t.title),1),(0,a._)("div",Ue,[(0,a._)("img",{src:`https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/assets/${t.image}`,alt:"",class:"img"},null,8,Le)]),(0,a._)("p",Oe,(0,B.zw)(t.body),1)])])],8,$e)))),128))])}var Ze={components:{postItem:Ft},data(){return{posts:[]}},methods:{filterPost(){this.posts=this.posts.filter((t=>t.id==this.$route.params.id))},async fetchPost(){try{const t=await x().get(this.$store.state.post.serverUrl);this.posts=t.data.data,this.filterPost()}catch(t){}}},mounted(){this.fetchPost()}};const qe=(0,P.Z)(Ze,[["render",Ne]]);var Ae=qe;const je=t=>((0,a.dD)("data-v-12ac6c8a"),t=t(),(0,a.Cn)(),t),Me={class:"flex justify-center items-center min-h-screen container"},He=je((()=>(0,a._)("h1",{class:"text-4xl mb-5"},"Sign in",-1))),ze={class:"main-register-offer flex justify-between"};function Ve(t,e,s,r,n,l){const i=(0,a.up)("my-input"),c=(0,a.up)("my-button");return(0,a.wg)(),(0,a.iD)("div",Me,[(0,a._)("form",{class:"flex flex-col p-5 rounded-xl w-96 register-form",onSubmit:e[6]||(e[6]=(0,o.iM)(((...t)=>r.submit&&r.submit(...t)),["prevent"]))},[He,(0,a.Wm)(i,{value:r.data.firstName,"onUpdate:value":e[0]||(e[0]=t=>r.data.firstName=t),type:"text",placeholder:"First Name",required:""},null,8,["value"]),(0,a.Wm)(i,{value:r.data.lastName,"onUpdate:value":e[1]||(e[1]=t=>r.data.lastName=t),type:"text",placeholder:"Last Name",required:""},null,8,["value"]),(0,a.Wm)(i,{value:r.data.email,"onUpdate:value":e[2]||(e[2]=t=>r.data.email=t),type:"email",placeholder:"Email",required:""},null,8,["value"]),(0,a.Wm)(i,{value:r.data.password,"onUpdate:value":e[3]||(e[3]=t=>r.data.password=t),type:"password",placeholder:"Password",required:""},null,8,["value"]),(0,a.Wm)(c,{type:"submit",class:"btn-register border-solid border-blue-700 border-2 text-white mt-1"},{default:(0,a.w5)((()=>[(0,a.Uk)("Continue")])),_:1}),(0,a._)("div",ze,[(0,a._)("p",{onClick:e[4]||(e[4]=e=>t.$router.push("/posts")),class:"text-right cursor-pointer mt-2 underline underline-offset-8 hover:underline-offset-4 duration-300 hover:text-blue-400 ease-out"}," Watch posts "),(0,a._)("p",{onClick:e[5]||(e[5]=e=>t.$router.push("/login")),class:"text-right cursor-pointer mt-2 underline underline-offset-8 hover:underline-offset-4 duration-300 hover:text-blue-400 ease-out"}," I have an account ")])],32)])}var Be={name:"Register",setup(){const t=(0,pt.qj)({firstName:"",lastName:"",role:"4e967166-975d-4a12-8fd8-e3fdb9e5be54",email:"",password:""}),e=(0,b.tv)(),s=async()=>{await x().post("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/users",{first_name:t.firstName,last_name:t.lastName,email:t.email,password:t.password,role:t.role}),await e.push("/login")};return{data:t,submit:s}}};const Ye=(0,P.Z)(Be,[["render",Ve],["__scopeId","data-v-12ac6c8a"]]);var Qe=Ye;const Fe=t=>((0,a.dD)("data-v-029fe3b6"),t=t(),(0,a.Cn)(),t),Re={class:"flex justify-center items-center min-h-screen container"},Xe=Fe((()=>(0,a._)("h1",{class:"text-4xl mb-5"},"Log in",-1)));function Ge(t,e,s,r,n,l){const i=(0,a.up)("my-input"),c=(0,a.up)("my-button");return(0,a.wg)(),(0,a.iD)("div",Re,[(0,a._)("form",{class:"flex flex-col bg-gray-900 p-5 rounded-xl w-96 login-form",onSubmit:e[3]||(e[3]=(0,o.iM)(((...t)=>r.submit&&r.submit(...t)),["prevent"]))},[Xe,(0,a.Wm)(i,{value:r.data.email,"onUpdate:value":e[0]||(e[0]=t=>r.data.email=t),type:"email",placeholder:"Email",required:""},null,8,["value"]),(0,a.Wm)(i,{value:r.data.password,"onUpdate:value":e[1]||(e[1]=t=>r.data.password=t),type:"password",placeholder:"Password",required:""},null,8,["value"]),(0,a.Wm)(c,{type:"submit",class:"btn-register border-solid border-blue-700 border-2 text-white mt-1"},{default:(0,a.w5)((()=>[(0,a.Uk)("Continue")])),_:1}),(0,a._)("p",{onClick:e[2]||(e[2]=e=>t.$router.push("/register")),class:"text-right cursor-pointer mt-2 underline underline-offset-8 hover:underline-offset-4 duration-300 hover:text-blue-400 ease-out"},"Register")],32)])}var Ke={name:"Login",setup(){const t=(0,pt.qj)({email:"",password:""}),e=(0,b.tv)(),s=async()=>{try{let s=await x().post("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/auth/login",{email:t.email,password:t.password});await localStorage.setItem("userData",s.config.data),await localStorage.setItem("token",s.data.data.access_token),await localStorage.setItem("refresh_token",s.data.data.refresh_token),await e.push("/")}catch(s){alert("Wrong email or password")}};return{data:t,submit:s}}};const Je=(0,P.Z)(Ke,[["render",Ge],["__scopeId","data-v-029fe3b6"]]);var ts=Je;const es=[{path:"/",meta:{auth:!0},component:_t},{path:"/posts",component:ye,name:"posts"},{path:"/about",meta:{auth:!0},component:De},{path:"/posts/:id",meta:{auth:!0},component:Ae},{path:"/register",component:Qe,name:"register"},{path:"/login",component:ts}],ss=(0,b.p7)({routes:es,history:(0,b.PO)("/")});ss.beforeEach(((t,e,s)=>{const o=localStorage.getItem("token"),a=t.matched.some((t=>t.meta.auth));!o&&a?s("/register"):s()}));var os=ss,as={mounted(t){t.focus()},name:"focus"},rs={mounted(t,e){const s={rootMargin:"0px",threshold:1},o=(t,s)=>{t[0].isIntersecting&&e.value()},a=new IntersectionObserver(o,s);a.observe(t)},name:"intersection"},ns=[as,rs];const ls={state:()=>({authenticated:!1,auth:null,posts:[],isPostLoading:!1,dark:!1,root:null,selectedSort:"",searchQuery:"",page:1,limit:1,metaAll:0,meta:"total_count",totalPages:0,serverUrl:"https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/items/posts",sortOptions:[{value:"title",name:"Title"},{value:"body",name:"Description"}]}),getters:{sortedPosts(t){return[...t.posts].sort(((e,s)=>e[t.selectedSort]?.localeCompare(s[t.selectedSort])))},searchedPosts(t,e){return e.sortedPosts.filter((e=>e.title.toLowerCase().includes(t.searchQuery.toLowerCase())))}},mutations:{setPosts(t,e){t.posts=e},setPostLoading(t,e){t.isPostLoading=e},setPage(t,e){t.page=e},setSelectedSort(t,e){t.selectedSort=e},setTotalPages(t,e){t.totalPages=e},setSearchQuery(t,e){t.searchQuery=e},setAuth(t,e){t.authenticated=e}},actions:{authTrue({state:t,commit:e}){e("setAuth",t.auth=!0)},authFalse({state:t,commit:e}){e("setAuth",t.auth=!1)}},namespaced:!0};var is=(0,y.MT)({modules:{post:ls}}),cs=s(5205);(0,cs.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var us=s(3636),ds=s(7810),ps=s(9417),ms=s(5779);s(4415);us.vI.add(ps.M_6,ps.DBf,ps.acZ,ps.mXR,ps.r5q);const fs=(0,o.ri)(I);ct.forEach((t=>{fs.component(t.name,t)})),ns.forEach((t=>{fs.directive(t.name,t)})),document.addEventListener("DOMContentLoaded",(()=>{fs.use(ms.Z),fs.use(is).use(os).component("font-awesome-icon",ds.GN).mount("#app")}))}},e={};function s(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(e,o,a,r){if(!o){var n=1/0;for(u=0;u<t.length;u++){o=t[u][0],a=t[u][1],r=t[u][2];for(var l=!0,i=0;i<o.length;i++)(!1&r||n>=r)&&Object.keys(s.O).every((function(t){return s.O[t](o[i])}))?o.splice(i--,1):(l=!1,r<n&&(n=r));if(l){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[o,a,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var o in e)s.o(e,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p="/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,r,n=o[0],l=o[1],i=o[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(a in l)s.o(l,a)&&(s.m[a]=l[a]);if(i)var u=i(s)}for(e&&e(o);c<n.length;c++)r=n[c],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(u)},o=self["webpackChunkCNTT"]=self["webpackChunkCNTT"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(3436)}));o=s.O(o)})();
//# sourceMappingURL=app.819f117d.js.map