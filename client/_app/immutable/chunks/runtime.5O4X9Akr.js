var Nn=Array.isArray,Pn=Array.from,bn=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,zt=Object.getOwnPropertyDescriptors,Fn=Object.prototype,qn=Array.prototype,Wt=Object.getPrototypeOf;const Mn=()=>{};function Ln(t){return t()}function Xt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,dt=4,j=8,lt=16,T=32,z=64,tt=128,k=256,G=512,h=1024,R=2048,H=4096,C=8192,P=16384,Jt=32768,Et=65536,Yn=1<<17,Qt=1<<19,yt=1<<20,ct=Symbol("$state"),jn=Symbol("legacy props");function wt(t){return t===this.v}function tn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Tt(t){return!tn(t,this.v)}function nn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function rn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function en(t){throw new Error("https://svelte.dev/e/effect_orphan")}function sn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Hn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Un(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Bn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Vn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ln(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let W=!1;function Gn(){W=!0}const Kn=1,$n=2,Zn=16,zn=1,Wn=2,Xn=4,Jn=8,Qn=16,tr=1,nr=2,un="[",on="[!",fn="]",mt={},rr=Symbol();function at(t,n){var r={f:0,v:t,reactions:null,equals:wt,version:0};return r}function er(t){return gt(at(t))}function _n(t,n=!1){var e;const r=at(t);return n||(r.equals=Tt),W&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function sr(t,n=!1){return gt(_n(t,n))}function gt(t){return o!==null&&o.f&y&&(w===null?An([t]):w.push(t)),t}function lr(t,n){return At(t,On(()=>Zt(t))),n}function At(t,n){return o!==null&&it()&&o.f&(y|lt)&&(w===null||!w.includes(t))&&an(),cn(t,n)}function cn(t,n){return t.equals(n)||(t.v=n,t.version=Ut(),Rt(t,R),it()&&u!==null&&u.f&h&&!(u.f&T)&&(v!==null&&v.includes(t)?(m(u,R),Q(u)):A===null?Rn([t]):A.push(t))),n}function Rt(t,n){var r=t.reactions;if(r!==null)for(var e=it(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&R||!e&&a===u||(m(a,n),i&(h|k)&&(i&y?Rt(a,H):Q(a)))}}function xt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let N=!1;function ar(t){N=t}let g;function q(t){if(t===null)throw xt(),mt;return g=t}function ur(){return q(b(g))}function or(t){if(N){if(b(g)!==null)throw xt(),mt;g=t}}function ir(){for(var t=0,n=g;;){if(n.nodeType===8){var r=n.data;if(r===fn){if(t===0)return n;t-=1}else(r===un||r===on)&&(t+=1)}var e=b(n);n.remove(),n=e}}var vt,Dt,St;function fr(){if(vt===void 0){vt=window;var t=Element.prototype,n=Node.prototype;Dt=_t(n,"firstChild").get,St=_t(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return Dt.call(t)}function b(t){return St.call(t)}function _r(t,n){if(!N)return rt(t);var r=rt(g);if(r===null)r=g.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),q(e),e}return q(r),r}function cr(t,n){if(!N){var r=rt(t);return r instanceof Comment&&r.data===""?b(r):r}return g}function vr(t,n=1,r=!1){let e=N?g:t;for(var s;n--;)s=e,e=b(e);if(!N)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=nt();return e===null?s==null||s.after(a):e.before(a),q(a),a}return q(e),e}function pr(t){t.textContent=""}function vn(t){var n=y|R;u===null?n|=k:u.f|=yt;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:wt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function hr(t){const n=vn(t);return n.equals=Tt,n}function kt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ut(e):S(e)}}}function pn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function It(t){var n,r=u;Z(pn(t));try{kt(t),n=Bt(t)}finally{Z(r)}return n}function Ot(t){var n=It(t),r=(D||t.f&k)&&t.deps!==null?H:h;m(t,r),t.equals(n)||(t.v=n,t.version=Ut())}function ut(t){kt(t),Y(t,0),m(t,P),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ct(t){u===null&&o===null&&en(),o!==null&&o.f&k&&rn(),ot&&nn()}function hn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var s=(t&z)!==0,l=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=I;try{pt(!0),J(a),a.f|=Jt}catch(_){throw S(a),_}finally{pt(i)}}else n!==null&&Q(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&yt)===0;if(!p&&!s&&e&&(l!==null&&hn(a,l),o!==null&&o.f&y)){var d=o;(d.children??(d.children=[])).push(a)}return a}function dr(t){const n=F(j,null,!1);return m(n,h),n.teardown=t,n}function Er(t){Ct();var n=u!==null&&(u.f&T)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Nt(t);return e}}function yr(t){return Ct(),dn(t)}function wr(t){const n=F(z,t,!0);return(r={})=>new Promise(e=>{r.outro?wn(n,()=>{S(n),e(void 0)}):(S(n),e(void 0))})}function Nt(t){return F(dt,t,!1)}function dn(t){return F(j,t,!0)}function Tr(t){return En(t)}function En(t,n=0){return F(j|lt|n,t,!0)}function mr(t,n=!0){return F(j|T,t,!0,n)}function Pt(t){var n=t.teardown;if(n!==null){const r=ot,e=o;ht(!0),$(null);try{n.call(null)}finally{ht(r),$(e)}}}function bt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ut(n[r])}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;S(r,n),r=e}}function yn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&T||S(n),n=r}}function S(t,n=!0){var r=!1;if((n||t.f&Qt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:b(e);e.remove(),e=l}r=!0}Ft(t,n&&!r),bt(t),Y(t,0),m(t,P);var a=t.transitions;if(a!==null)for(const p of a)p.stop();Pt(t);var i=t.parent;i!==null&&i.first!==null&&qt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function qt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function wn(t,n){var r=[];Mt(t,r,!0),Tn(r,()=>{S(t),n&&n()})}function Tn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Mt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&Et)!==0||(e.f&T)!==0;Mt(e,n,l?r:!1),e=s}}}function gr(t){Lt(t,!0)}function Lt(t,n){if(t.f&C){U(t)&&J(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&Et)!==0||(r.f&T)!==0;Lt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let K=!1,et=[];function Yt(){K=!1;const t=et.slice();et=[],Xt(t)}function Ar(t){K||(K=!0,queueMicrotask(Yt)),et.push(t)}function mn(){K&&Yt()}const jt=0,gn=1;let B=!1,V=jt,M=!1,L=null,I=!1,ot=!1;function pt(t){I=t}function ht(t){ot=t}let x=[],O=0;let o=null;function $(t){o=t}let u=null;function Z(t){u=t}let w=null;function An(t){w=t}let v=null,E=0,A=null;function Rn(t){A=t}let Ht=1,D=!1,f=null;function Ut(){return++Ht}function it(){return!W||f!==null&&f.l===null}function U(t){var a,i;var n=t.f;if(n&R)return!0;if(n&H){var r=t.deps,e=(n&k)!==0;if(r!==null){var s;if(n&G){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=G}for(s=0;s<r.length;s++){var l=r[s];if(U(l)&&Ot(l),e&&u!==null&&!D&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}(!e||u!==null&&!D)&&m(t,h)}return!1}function xn(t,n){for(var r=n;r!==null;){if(r.f&tt)try{r.fn(t);return}catch{r.f^=tt}r=r.parent}throw B=!1,t}function Dn(t){return(t.f&P)===0&&(t.parent===null||(t.parent.f&tt)===0)}function X(t,n,r,e){if(B){if(r===null&&(B=!1),Dn(n))throw t;return}r!==null&&(B=!0);{xn(t,n);return}}function Bt(t){var ft;var n=v,r=E,e=A,s=o,l=D,a=w,i=f,p=t.f;v=null,E=0,A=null,o=p&(T|z)?null:t,D=!I&&(p&k)!==0,w=null,f=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(Y(t,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else t.deps=_=v;if(!D)for(c=E;c<_.length;c++)((ft=_[c]).reactions??(ft.reactions=[])).push(t)}else _!==null&&E<_.length&&(Y(t,E),_.length=E);return d}finally{v=n,E=r,A=e,o=s,D=l,w=a,f=i}}function Sn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(v===null||!v.includes(n))&&(m(n,H),n.f&(k|G)||(n.f^=G),Y(n,0))}function Y(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Sn(t,r[e])}function J(t){var n=t.f;if(!(n&P)){m(t,h);var r=u,e=f;u=t;try{n&lt?yn(t):Ft(t),bt(t),Pt(t);var s=Bt(t);t.teardown=typeof s=="function"?s:null,t.version=Ht}catch(l){X(l,t,r,e||t.ctx)}finally{u=r}}}function Vt(){if(O>1e3){O=0;try{sn()}catch(t){if(L!==null)X(t,L,null);else throw t}}O++}function Gt(t){var n=t.length;if(n!==0){Vt();var r=I;I=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var l=[];Kt(s,l),kn(l)}}finally{I=r}}}function kn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(P|C)))try{U(e)&&(J(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qt(e):e.fn=null))}catch(s){X(s,e,null,e.ctx)}}}function In(){if(M=!1,O>1001)return;const t=x;x=[],Gt(t),M||(O=0,L=null)}function Q(t){V===jt&&(M||(M=!0,queueMicrotask(In))),L=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(z|T)){if(!(r&h))return;n.f^=h}}x.push(n)}function Kt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&T)!==0,a=l&&(s&h)!==0,i=r.next;if(!a&&!(s&C))if(s&j){if(l)r.f^=h;else try{U(r)&&J(r)}catch(c){X(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&dt&&e.push(r);if(i===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=i}for(var _=0;_<e.length;_++)p=e[_],n.push(p),Kt(p,n)}function $t(t){var n=V,r=x;try{Vt();const s=[];V=gn,x=s,M=!1,Gt(r);var e=t==null?void 0:t();return mn(),(x.length>0||s.length>0)&&$t(),O=0,L=null,e}finally{V=n,x=r}}async function Rr(){await Promise.resolve(),$t()}function Zt(t){var _;var n=t.f,r=(n&y)!==0;if(r&&n&P){var e=It(t);return ut(t),e}if(o!==null){w!==null&&w.includes(t)&&ln();var s=o.deps;v===null&&s!==null&&s[E]===t?E++:v===null?v=[t]:v.push(t),A!==null&&u!==null&&u.f&h&&!(u.f&T)&&A.includes(t)&&(m(u,R),Q(u))}else if(r&&t.deps===null)for(var l=t,a=l.parent,i=l;a!==null;)if(a.f&y){var p=a;i=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(i)||(d.deriveds??(d.deriveds=[])).push(i);break}return r&&(l=t,U(l)&&Ot(l)),t.v}function On(t){const n=o;try{return o=null,t()}finally{o=n}}const Cn=~(R|H|h);function m(t,n){t.f=t.f&Cn|n}function xr(t,n=1){var r=Zt(t),e=n===1?r++:r--;return At(t,r),e}function Dr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},W&&!n&&(f.l={s:null,u:null,r1:[],r2:at(!1)})}function Sr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];Z(l.effect),$(l.reaction),Nt(l.fn)}}finally{Z(r),$(e)}}f=n.p,n.m=!0}return{}}function kr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)st(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&st(r)}}}function st(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],n)}catch{}const r=Wt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=zt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{Jn as $,at as A,Bn as B,At as C,_t as D,Et as E,u as F,Vn as G,Wt as H,Nn as I,ur as J,on as K,ir as L,q as M,ar as N,gr as O,wn as P,Un as Q,Yn as R,ct as S,Xn as T,rr as U,Tt as V,T as W,z as X,Z as Y,zn as Z,Wn as _,mr as a,jn as a0,hr as a1,_n as a2,Qn as a3,$ as a4,o as a5,dr as a6,Ar as a7,bn as a8,fr as a9,sr as aA,xr as aB,lr as aC,tn as aD,rt as aa,un as ab,b as ac,mt as ad,fn as ae,xt as af,Hn as ag,pr as ah,Pn as ai,wr as aj,nt as ak,tr as al,nr as am,Nt as an,dn as ao,$t as ap,Rr as aq,er as ar,C as as,cn as at,Mt as au,Tn as av,$n as aw,Kn as ax,Zn as ay,zt as az,En as b,g as c,S as d,Sr as e,cr as f,_r as g,N as h,Er as i,f as j,On as k,Xt as l,Zt as m,Mn as n,Ln as o,Dr as p,kr as q,or as r,vr as s,Tr as t,yr as u,vn as v,Gn as w,W as x,Fn as y,qn as z};
