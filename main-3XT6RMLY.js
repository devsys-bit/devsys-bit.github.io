import{a as b,b as N,c as P,e as D,f as S,g as M,h as E}from"./chunk-KYAESGBU.js";import{b as I}from"./chunk-TGALUTEQ.js";import{d as w}from"./chunk-WXDRHQGN.js";import{$a as R,M as p,N as h,Oa as F,Q as c,T as l,Ua as _,V as m,Y as u,ga as g,na as f,ua as y,va as C,wa as v,za as A}from"./chunk-N27LPSTC.js";var O=[{path:"",loadComponent:()=>import("./chunk-Y5A7UOVW.js"),children:[{path:"",loadComponent:()=>import("./chunk-7GZXZZX7.js")},{path:"perfil",loadComponent:()=>import("./chunk-KNKS533D.js")},{path:"proyecto",loadComponent:()=>import("./chunk-ACFPJUSC.js")},{path:"contacto",loadComponent:()=>import("./chunk-Z7MGSQQE.js")}]}];var L="@",U=(()=>{let e=class e{constructor(o,r,i,s,a){this.doc=o,this.delegate=r,this.zone=i,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=l(C,{optional:!0}),this.loadingSchedulerFn=l(V,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let o=()=>this.moduleImpl??import("./chunk-QJK3GRPE.js").then(i=>i),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(o):r=o(),r.catch(i=>{throw new p(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:s})=>{this._engine=i(this.animationType,this.doc);let a=new s(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(o,r){let i=this.delegate.createRenderer(o,r);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let s=new d(i);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let j=a.createRenderer(o,r);s.use(j),this.scheduler?.notify(10)}).catch(a=>{s.use(i)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(r){y()},e.\u0275prov=h({token:e,factory:e.\u0275fac});let n=e;return n})(),d=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,o,r){this.delegate.insertBefore(e,t,o,r)}removeChild(e,t,o){this.delegate.removeChild(e,t,o)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,o,r){this.delegate.setAttribute(e,t,o,r)}removeAttribute(e,t,o){this.delegate.removeAttribute(e,t,o)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,o,r){this.delegate.setStyle(e,t,o,r)}removeStyle(e,t,o){this.delegate.removeStyle(e,t,o)}setProperty(e,t,o){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(e,t,o)),this.delegate.setProperty(e,t,o)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,o){return this.shouldReplay(t)&&this.replay.push(r=>r.listen(e,t,o)),this.delegate.listen(e,t,o)}shouldReplay(e){return this.replay!==null&&e.startsWith(L)}},V=new c("");function T(n="animations"){return A("NgAsyncAnimations"),u([{provide:v,useFactory:(e,t,o)=>new U(e,t,o,n),deps:[w,b,g]},{provide:f,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var x={providers:[R({eventCoalescing:!0}),S(O,E(),M(D)),I(),T()]};var k=(()=>{class n{title="portafolio";static \u0275fac=function(o){return new(o||n)};static \u0275cmp=m({type:n,selectors:[["app-root"]],standalone:!0,features:[_],decls:1,vars:0,template:function(o,r){o&1&&F(0,"router-outlet")},dependencies:[P],encapsulation:2})}return n})();N(k,x).catch(n=>console.error(n));
