"use strict";(self["webpackChunkvue_week6"]=self["webpackChunkvue_week6"]||[]).push([[569],{569:function(e,s,r){r.r(s),r.d(s,{default:function(){return b}});var n=r(252),t=r(963);const o={class:"container"},a={class:"row justify-content-center"},i=(0,n._)("h1",{class:"h3 mb-3 font-weight-normal"}," 請先登入 ",-1),u={class:"col-8"},l=(0,n.Uk)("｀ "),c={class:"form-floating mb-3"},d=(0,n._)("label",{for:"username"},"Email address",-1),m={class:"form-floating"},p=(0,n._)("label",{for:"password"},"Password",-1),f=(0,n._)("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1);function h(e,s,r,h,w,v){return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",a,[i,(0,n._)("div",u,[(0,n._)("form",{id:"form",class:"form-signin",onSubmit:s[2]||(s[2]=(0,t.iM)(((...e)=>v.signIn&&v.signIn(...e)),["prevent"]))},[l,(0,n._)("div",c,[(0,n.wy)((0,n._)("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com","onUpdate:modelValue":s[0]||(s[0]=e=>w.user.username=e),required:"",autofocus:""},null,512),[[t.nr,w.user.username]]),d]),(0,n._)("div",m,[(0,n.wy)((0,n._)("input",{type:"password",class:"form-control",id:"password",placeholder:"Password","onUpdate:modelValue":s[1]||(s[1]=e=>w.user.password=e),required:""},null,512),[[t.nr,w.user.password]]),p]),f],32)])])])}var w={data(){return{user:{}}},methods:{signIn(){this.$http.post("https://vue3-course-api.hexschool.io/v2/admin/signin",this.user).then((e=>{const{token:s,expired:r}=e.data;document.cookie=`hexToken=${s}; expires=${new Date(r)};`,this.$router.push("/products")})).catch((e=>{alert(e.response.data.message)}))}}},v=r(744);const _=(0,v.Z)(w,[["render",h]]);var b=_}}]);
//# sourceMappingURL=569.72805188.js.map