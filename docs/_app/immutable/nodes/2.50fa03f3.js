import{S as le,i as se,s as ne,k as g,q as O,a as I,l as b,m as y,r as R,h as c,c as L,n as V,p as H,b as M,G as r,J as W,u as ie,H as te,K as de,L as Me,M as fe,w as Ce,g as Y,v as _e,f as pe,d as F,I as ce,y as X,z as Z,A as x,B as ee,N as Oe,O as Ye}from"../chunks/index.6ff9695e.js";import{w as Re}from"../chunks/index.537af74c.js";function qe(n,e){return Math.floor((n+e-1)/e)*e}class ae{constructor(e,t=0,l=0,s=!0){this.name=e,this.size=t,this.align=l,this.user=s,this.fields=[]}update(){if(!this.user||(this.size=0,this.align=0,this.fields.length===0))return;let e=0;for(let t of this.fields)t.offset=qe(e,t.type.align),e=t.offset+t.type.size;this.align=this.fields.reduce((t,l)=>Math.max(t,l.type.align),0),this.size=Math.ceil(e/this.align)*this.align}}class Fe{constructor(e,t=0){this.type=e,this.offset=t}}const ve=[new ae("char",1,1,!1),new ae("short",2,2,!1),new ae("int",4,4,!1),new ae("long",8,8,!1),new ae("float",4,4,!1),new ae("double",8,8,!1)],K=Re([...ve]),oe=Re([]);function ye(n,e,t){const l=n.slice();return l[10]=e[t],l[12]=t,l}function $e(n){let e,t=n[1],l=[];for(let s=0;s<t.length;s+=1)l[s]=we(ye(n,t,s));return{c(){e=g("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=b(s,"DIV",{class:!0,id:!0,style:!0});var i=y(e);for(let a=0;a<l.length;a+=1)l[a].l(i);i.forEach(c),this.h()},h(){V(e,"class","frame svelte-zbbqa6"),V(e,"id","list-container"),H(e,"margin-top","4px")},m(s,i){M(s,e,i);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(e,null)},p(s,i){if(i&34){t=s[1];let a;for(a=0;a<t.length;a+=1){const d=ye(s,t,a);l[a]?l[a].p(d,i):(l[a]=we(d),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=t.length}},d(s){s&&c(e),fe(l,s)}}}function we(n){let e,t,l=n[10]+"",s,i,a,d;function h(){return n[7](n[12])}return{c(){e=g("button"),t=g("span"),s=O(l),i=I(),this.h()},l(u){e=b(u,"BUTTON",{class:!0});var o=y(e);t=b(o,"SPAN",{class:!0});var v=y(t);s=R(v,l),v.forEach(c),i=L(o),o.forEach(c),this.h()},h(){V(t,"class","type"),V(e,"class","btn opt svelte-zbbqa6")},m(u,o){M(u,e,o),r(e,t),r(t,s),r(e,i),a||(d=W(e,"click",h),a=!0)},p(u,o){n=u,o&2&&l!==(l=n[10]+"")&&ie(s,l)},d(u){u&&c(e),a=!1,d()}}}function He(n){let e,t,l,s=n[1][n[0]]+"",i,a,d,h,u=n[2]&&$e(n);return{c(){e=g("div"),t=g("button"),l=g("span"),i=O(s),a=I(),u&&u.c(),this.h()},l(o){e=b(o,"DIV",{style:!0});var v=y(e);t=b(v,"BUTTON",{class:!0,id:!0});var m=y(t);l=b(m,"SPAN",{class:!0});var w=y(l);i=R(w,s),w.forEach(c),m.forEach(c),a=L(v),u&&u.l(v),v.forEach(c),this.h()},h(){V(l,"class","type"),V(t,"class","frame btn svelte-zbbqa6"),V(t,"id","val"),H(e,"display","inline-block")},m(o,v){M(o,e,v),r(e,t),r(t,l),r(l,i),r(e,a),u&&u.m(e,null),n[8](e),d||(h=[W(window,"click",n[6]),W(t,"click",n[4])],d=!0)},p(o,[v]){v&3&&s!==(s=o[1][o[0]]+"")&&ie(i,s),o[2]?u?u.p(o,v):(u=$e(o),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i:te,o:te,d(o){o&&c(e),u&&u.d(),n[8](null),d=!1,de(h)}}}function Ge(n,e,t){let{values:l=[]}=e,{selected:s=0}=e;const i=Me();let a=!1;function d(){t(2,a=!0)}function h(w){t(0,s=w),t(2,a=!1),i("select",l[w])}let u;function o(w){u.contains(w.target)==!1&&t(2,a=!1)}const v=w=>h(w);function m(w){Ce[w?"unshift":"push"](()=>{u=w,t(3,u)})}return n.$$set=w=>{"values"in w&&t(1,l=w.values),"selected"in w&&t(0,s=w.selected)},[s,l,a,u,d,h,o,v,m]}class Ue extends le{constructor(e){super(),se(this,e,Ge,He,ne,{values:1,selected:0})}}function ke(n,e,t){const l=n.slice();return l[7]=e[t],l[9]=t,l}function Ae(n){let e,t,l,s,i="p"+n[9],a,d,h,u=",",o,v;function m(...w){return n[6](n[9],...w)}return t=new Ue({props:{values:n[0],selected:n[0].indexOf(n[7].name)}}),t.$on("select",m),{c(){e=g("div"),X(t.$$.fragment),l=I(),s=g("span"),a=O(i),d=I(),h=g("span"),o=O(u),this.h()},l(w){e=b(w,"DIV",{class:!0});var E=y(e);Z(t.$$.fragment,E),l=L(E),s=b(E,"SPAN",{class:!0});var $=y(s);a=R($,i),$.forEach(c),d=L(E),h=b(E,"SPAN",{class:!0});var _=y(h);o=R(_,u),_.forEach(c),E.forEach(c),this.h()},h(){V(s,"class","text"),V(h,"class","text"),V(e,"class","param-container svelte-68cinz")},m(w,E){M(w,e,E),x(t,e,null),r(e,l),r(e,s),r(s,a),r(e,d),r(e,h),r(h,o),v=!0},p(w,E){n=w;const $={};E&1&&($.values=n[0]),E&3&&($.selected=n[0].indexOf(n[7].name)),t.$set($)},i(w){v||(Y(t.$$.fragment,w),v=!0)},o(w){F(t.$$.fragment,w),v=!1},d(w){w&&c(e),ee(t)}}}function Je(n){let e,t,l,s,i,a,d,h,u,o,v,m,w,E,$,_,A,f,k,D,z=n[1],P=[];for(let S=0;S<z.length;S+=1)P[S]=Ae(ke(n,z,S));const B=S=>F(P[S],1,1,()=>{P[S]=null});return{c(){e=g("div"),t=g("p"),l=g("span"),s=O("void"),i=I(),a=g("span"),d=O("foo("),h=I();for(let S=0;S<P.length;S+=1)P[S].c();u=I(),o=g("button"),v=O("+"),m=I(),w=g("button"),E=O("-"),$=I(),_=g("span"),A=O(");"),this.h()},l(S){e=b(S,"DIV",{class:!0});var N=y(e);t=b(N,"P",{});var p=y(t);l=b(p,"SPAN",{class:!0});var C=y(l);s=R(C,"void"),C.forEach(c),i=L(p),a=b(p,"SPAN",{class:!0});var T=y(a);d=R(T,"foo("),T.forEach(c),h=L(p);for(let j=0;j<P.length;j+=1)P[j].l(p);u=L(p),o=b(p,"BUTTON",{});var U=y(o);v=R(U,"+"),U.forEach(c),m=L(p),w=b(p,"BUTTON",{});var q=y(w);E=R(q,"-"),q.forEach(c),$=L(p),_=b(p,"SPAN",{class:!0});var G=y(_);A=R(G,");"),G.forEach(c),p.forEach(c),N.forEach(c),this.h()},h(){V(l,"class","type"),V(a,"class","text"),V(_,"class","text"),V(e,"class","frame svelte-68cinz")},m(S,N){M(S,e,N),r(e,t),r(t,l),r(l,s),r(t,i),r(t,a),r(a,d),r(t,h);for(let p=0;p<P.length;p+=1)P[p]&&P[p].m(t,null);r(t,u),r(t,o),r(o,v),r(t,m),r(t,w),r(w,E),r(t,$),r(t,_),r(_,A),f=!0,k||(D=[W(o,"click",n[2]),W(w,"click",n[3])],k=!0)},p(S,[N]){if(N&19){z=S[1];let p;for(p=0;p<z.length;p+=1){const C=ke(S,z,p);P[p]?(P[p].p(C,N),Y(P[p],1)):(P[p]=Ae(C),P[p].c(),Y(P[p],1),P[p].m(t,u))}for(_e(),p=z.length;p<P.length;p+=1)B(p);pe()}},i(S){if(!f){for(let N=0;N<z.length;N+=1)Y(P[N]);f=!0}},o(S){P=P.filter(Boolean);for(let N=0;N<P.length;N+=1)F(P[N]);f=!1},d(S){S&&c(e),fe(P,S),k=!1,de(D)}}}function Ke(n,e,t){let l,s,i;ce(n,oe,o=>t(1,s=o)),ce(n,K,o=>t(5,i=o));function a(){s.push(i[0]),oe.set(s)}function d(){s.pop(),oe.set(s)}function h(o,v){Oe(oe,s[o]=i.find(m=>m.name===v),s),oe.set(s)}const u=(o,v)=>h(o,v.detail);return n.$$.update=()=>{n.$$.dirty&32&&t(0,l=i.map(o=>o.name))},[l,s,a,d,h,i,u]}class je extends le{constructor(e){super(),se(this,e,Ke,Je,ne,{})}}function De(n,e,t){const l=n.slice();return l[2]=e[t],l}function Pe(n,e,t){const l=n.slice();return l[2]=e[t],l}function Se(n){let e,t,l,s=n[2]+"",i,a,d;return{c(){e=g("div"),t=g("span"),l=O("%"),i=O(s),a=O(":"),d=I(),this.h()},l(h){e=b(h,"DIV",{});var u=y(e);t=b(u,"SPAN",{class:!0});var o=y(t);l=R(o,"%"),i=R(o,s),a=R(o,":"),o.forEach(c),d=L(u),u.forEach(c),this.h()},h(){V(t,"class","text")},m(h,u){M(h,e,u),r(e,t),r(t,l),r(t,i),r(t,a),r(e,d)},p:te,d(h){h&&c(e)}}}function Ne(n){let e,t,l,s=n[2]+"",i,a,d;return{c(){e=g("div"),t=g("span"),l=O("%"),i=O(s),a=O(":"),d=I(),this.h()},l(h){e=b(h,"DIV",{});var u=y(e);t=b(u,"SPAN",{class:!0});var o=y(t);l=R(o,"%"),i=R(o,s),a=R(o,":"),o.forEach(c),d=L(u),u.forEach(c),this.h()},h(){V(t,"class","text")},m(h,u){M(h,e,u),r(e,t),r(t,l),r(t,i),r(t,a),r(e,d)},p:te,d(h){h&&c(e)}}}function Qe(n){let e,t,l,s,i,a,d,h,u,o,v,m,w,E,$,_,A,f,k,D,z,P=n[0],B=[];for(let p=0;p<P.length;p+=1)B[p]=Se(Pe(n,P,p));let S=n[1],N=[];for(let p=0;p<S.length;p+=1)N[p]=Ne(De(n,S,p));return{c(){e=g("table"),t=g("tr"),l=g("td"),s=g("div"),i=O("gp regs"),a=I(),d=g("br"),h=I();for(let p=0;p<B.length;p+=1)B[p].c();u=I(),o=g("td"),v=g("div"),m=O("fp regs"),w=I(),E=g("br"),$=I();for(let p=0;p<N.length;p+=1)N[p].c();_=I(),A=g("td"),f=g("div"),k=O("stack"),D=I(),z=g("br"),this.h()},l(p){e=b(p,"TABLE",{class:!0,style:!0});var C=y(e);t=b(C,"TR",{});var T=y(t);l=b(T,"TD",{class:!0});var U=y(l);s=b(U,"DIV",{class:!0,style:!0});var q=y(s);i=R(q,"gp regs"),q.forEach(c),a=L(U),d=b(U,"BR",{}),h=L(U);for(let J=0;J<B.length;J+=1)B[J].l(U);U.forEach(c),u=L(T),o=b(T,"TD",{class:!0});var G=y(o);v=b(G,"DIV",{class:!0,style:!0});var j=y(v);m=R(j,"fp regs"),j.forEach(c),w=L(G),E=b(G,"BR",{}),$=L(G);for(let J=0;J<N.length;J+=1)N[J].l(G);G.forEach(c),_=L(T),A=b(T,"TD",{class:!0});var re=y(A);f=b(re,"DIV",{class:!0,style:!0});var Q=y(f);k=R(Q,"stack"),Q.forEach(c),D=L(re),z=b(re,"BR",{}),re.forEach(c),T.forEach(c),C.forEach(c),this.h()},h(){V(s,"class","hdr text svelte-1hgub3f"),H(s,"min-width","16ch"),V(l,"class","svelte-1hgub3f"),V(v,"class","hdr text svelte-1hgub3f"),H(v,"min-width","16ch"),V(o,"class","svelte-1hgub3f"),V(f,"class","hdr text svelte-1hgub3f"),H(f,"min-width","16ch"),V(A,"class","svelte-1hgub3f"),V(e,"class","frame"),H(e,"border-spacing","0px")},m(p,C){M(p,e,C),r(e,t),r(t,l),r(l,s),r(s,i),r(l,a),r(l,d),r(l,h);for(let T=0;T<B.length;T+=1)B[T]&&B[T].m(l,null);r(t,u),r(t,o),r(o,v),r(v,m),r(o,w),r(o,E),r(o,$);for(let T=0;T<N.length;T+=1)N[T]&&N[T].m(o,null);r(t,_),r(t,A),r(A,f),r(f,k),r(A,D),r(A,z)},p(p,[C]){if(C&1){P=p[0];let T;for(T=0;T<P.length;T+=1){const U=Pe(p,P,T);B[T]?B[T].p(U,C):(B[T]=Se(U),B[T].c(),B[T].m(l,null))}for(;T<B.length;T+=1)B[T].d(1);B.length=P.length}if(C&2){S=p[1];let T;for(T=0;T<S.length;T+=1){const U=De(p,S,T);N[T]?N[T].p(U,C):(N[T]=Ne(U),N[T].c(),N[T].m(o,null))}for(;T<N.length;T+=1)N[T].d(1);N.length=S.length}},i:te,o:te,d(p){p&&c(e),fe(B,p),fe(N,p)}}}function We(n){let e=["rdi","rsi","rdx","rcx","r8","r9"],t=[];for(let l=0;l<8;l++)t.push(`xmm${l}`);return[e,t]}class Xe extends le{constructor(e){super(),se(this,e,We,Qe,ne,{})}}function Ze(n){let e,t,l,s,i,a,d,h=n[0].offset+"",u,o,v,m,w,E,$,_,A;return m=new Ue({props:{values:n[3],selected:n[2].indexOf(n[0].type)}}),m.$on("select",n[4]),{c(){e=g("td"),t=I(),l=g("td"),s=g("span"),i=O("offset"),a=I(),d=g("span"),u=O(h),o=I(),v=g("td"),X(m.$$.fragment),w=I(),E=g("td"),$=g("span"),_=O(n[1]),this.h()},l(f){e=b(f,"TD",{style:!0}),y(e).forEach(c),t=L(f),l=b(f,"TD",{style:!0});var k=y(l);s=b(k,"SPAN",{class:!0});var D=y(s);i=R(D,"offset"),D.forEach(c),a=L(k),d=b(k,"SPAN",{class:!0});var z=y(d);u=R(z,h),z.forEach(c),k.forEach(c),o=L(f),v=b(f,"TD",{});var P=y(v);Z(m.$$.fragment,P),P.forEach(c),w=L(f),E=b(f,"TD",{});var B=y(E);$=b(B,"SPAN",{class:!0,style:!0});var S=y($);_=R(S,n[1]),S.forEach(c),B.forEach(c),this.h()},h(){H(e,"min-width","2ch"),V(s,"class","text"),V(d,"class","num"),H(l,"min-width","8ch"),V($,"class","text"),H($,"margin-left","1ch")},m(f,k){M(f,e,k),M(f,t,k),M(f,l,k),r(l,s),r(s,i),r(l,a),r(l,d),r(d,u),M(f,o,k),M(f,v,k),x(m,v,null),M(f,w,k),M(f,E,k),r(E,$),r($,_),A=!0},p(f,[k]){(!A||k&1)&&h!==(h=f[0].offset+"")&&ie(u,h);const D={};k&8&&(D.values=f[3]),k&5&&(D.selected=f[2].indexOf(f[0].type)),m.$set(D),(!A||k&2)&&ie(_,f[1])},i(f){A||(Y(m.$$.fragment,f),A=!0)},o(f){F(m.$$.fragment,f),A=!1},d(f){f&&c(e),f&&c(t),f&&c(l),f&&c(o),f&&c(v),ee(m),f&&c(w),f&&c(E)}}}function xe(n,e,t){let l,s;ce(n,K,o=>t(2,s=o));let{field:i}=e,{name:a}=e,{parent:d}=e;function h(o){return s.find(v=>v.name===o)}function u(o){const v=o.detail;t(0,i.type=h(v),i),K.set(s)}return n.$$set=o=>{"field"in o&&t(0,i=o.field),"name"in o&&t(1,a=o.name),"parent"in o&&t(5,d=o.parent)},n.$$.update=()=>{n.$$.dirty&36&&t(3,l=s.slice(0,s.indexOf(d)).map(o=>o.name))},[i,a,s,l,u,d]}class et extends le{constructor(e){super(),se(this,e,xe,Ze,ne,{field:0,name:1,parent:5})}}function Be(n,e,t){const l=n.slice();return l[5]=e[t],l[7]=t,l}function Ie(n){let e,t,l,s,i,a,d,h,u,o,v,m,w,E,$=n[0].fields,_=[];for(let f=0;f<$.length;f+=1)_[f]=Le(Be(n,$,f));const A=f=>F(_[f],1,1,()=>{_[f]=null});return{c(){e=g("tr"),t=g("td"),l=g("table");for(let f=0;f<_.length;f+=1)_[f].c();s=I(),i=g("tr"),a=g("td"),d=g("button"),h=O("+"),u=I(),o=g("button"),v=O("-"),this.h()},l(f){e=b(f,"TR",{});var k=y(e);t=b(k,"TD",{});var D=y(t);l=b(D,"TABLE",{});var z=y(l);for(let p=0;p<_.length;p+=1)_[p].l(z);z.forEach(c),D.forEach(c),k.forEach(c),s=L(f),i=b(f,"TR",{});var P=y(i);a=b(P,"TD",{style:!0});var B=y(a);d=b(B,"BUTTON",{});var S=y(d);h=R(S,"+"),S.forEach(c),u=L(B),o=b(B,"BUTTON",{});var N=y(o);v=R(N,"-"),N.forEach(c),B.forEach(c),P.forEach(c),this.h()},h(){H(a,"text-align","right")},m(f,k){M(f,e,k),r(e,t),r(t,l);for(let D=0;D<_.length;D+=1)_[D]&&_[D].m(l,null);M(f,s,k),M(f,i,k),r(i,a),r(a,d),r(d,h),r(a,u),r(a,o),r(o,v),m=!0,w||(E=[W(d,"click",n[1]),W(o,"click",n[2])],w=!0)},p(f,k){if(k&1){$=f[0].fields;let D;for(D=0;D<$.length;D+=1){const z=Be(f,$,D);_[D]?(_[D].p(z,k),Y(_[D],1)):(_[D]=Le(z),_[D].c(),Y(_[D],1),_[D].m(l,null))}for(_e(),D=$.length;D<_.length;D+=1)A(D);pe()}},i(f){if(!m){for(let k=0;k<$.length;k+=1)Y(_[k]);m=!0}},o(f){_=_.filter(Boolean);for(let k=0;k<_.length;k+=1)F(_[k]);m=!1},d(f){f&&c(e),fe(_,f),f&&c(s),f&&c(i),w=!1,de(E)}}}function Le(n){let e,t,l,s;return t=new et({props:{parent:n[0],field:n[5],name:"f"+n[7]}}),{c(){e=g("tr"),X(t.$$.fragment),l=I()},l(i){e=b(i,"TR",{});var a=y(e);Z(t.$$.fragment,a),l=L(a),a.forEach(c)},m(i,a){M(i,e,a),x(t,e,null),r(e,l),s=!0},p(i,a){const d={};a&1&&(d.parent=i[0]),a&1&&(d.field=i[5]),t.$set(d)},i(i){s||(Y(t.$$.fragment,i),s=!0)},o(i){F(t.$$.fragment,i),s=!1},d(i){i&&c(e),ee(t)}}}function tt(n){let e,t,l,s,i,a,d,h=n[0].name+"",u,o,v,m,w,E,$,_=n[0].size+"",A,f,k,D,z,P,B,S=n[0].align+"",N,p,C,T=n[0].user&&Ie(n);return{c(){e=g("table"),t=g("tr"),l=g("td"),s=g("table"),i=g("tr"),a=g("td"),d=g("span"),u=O(h),o=I(),v=g("td"),m=g("span"),w=O("size"),E=I(),$=g("span"),A=O(_),f=I(),k=g("td"),D=g("span"),z=O("| align"),P=I(),B=g("span"),N=O(S),p=I(),T&&T.c(),this.h()},l(U){e=b(U,"TABLE",{class:!0});var q=y(e);t=b(q,"TR",{});var G=y(t);l=b(G,"TD",{});var j=y(l);s=b(j,"TABLE",{});var re=y(s);i=b(re,"TR",{});var Q=y(i);a=b(Q,"TD",{style:!0});var J=y(a);d=b(J,"SPAN",{class:!0});var me=y(d);u=R(me,h),me.forEach(c),J.forEach(c),o=L(Q),v=b(Q,"TD",{});var ue=y(v);m=b(ue,"SPAN",{class:!0});var ge=y(m);w=R(ge,"size"),ge.forEach(c),E=L(ue),$=b(ue,"SPAN",{class:!0});var be=y($);A=R(be,_),be.forEach(c),ue.forEach(c),f=L(Q),k=b(Q,"TD",{});var he=y(k);D=b(he,"SPAN",{class:!0});var Ee=y(D);z=R(Ee,"| align"),Ee.forEach(c),P=L(he),B=b(he,"SPAN",{class:!0});var Te=y(B);N=R(Te,S),Te.forEach(c),he.forEach(c),Q.forEach(c),re.forEach(c),j.forEach(c),G.forEach(c),p=L(q),T&&T.l(q),q.forEach(c),this.h()},h(){V(d,"class","type"),H(a,"min-width","20ch"),V(m,"class","text"),V($,"class","num"),V(D,"class","text"),V(B,"class","num"),V(e,"class","frame svelte-mc53ao")},m(U,q){M(U,e,q),r(e,t),r(t,l),r(l,s),r(s,i),r(i,a),r(a,d),r(d,u),r(i,o),r(i,v),r(v,m),r(m,w),r(v,E),r(v,$),r($,A),r(i,f),r(i,k),r(k,D),r(D,z),r(k,P),r(k,B),r(B,N),r(e,p),T&&T.m(e,null),C=!0},p(U,[q]){(!C||q&1)&&h!==(h=U[0].name+"")&&ie(u,h),(!C||q&1)&&_!==(_=U[0].size+"")&&ie(A,_),(!C||q&1)&&S!==(S=U[0].align+"")&&ie(N,S),U[0].user?T?(T.p(U,q),q&1&&Y(T,1)):(T=Ie(U),T.c(),Y(T,1),T.m(e,null)):T&&(_e(),F(T,1,1,()=>{T=null}),pe())},i(U){C||(Y(T),C=!0)},o(U){F(T),C=!1},d(U){U&&c(e),T&&T.d()}}}function lt(n,e,t){let l;ce(n,K,h=>t(3,l=h));let{type:s}=e;function i(h){return l.find(u=>u.name===h)}function a(){s.fields.push(new Fe(i("int"))),K.set(l)}function d(){s.fields.length>0&&(s.fields.pop(),K.set(l))}return n.$$set=h=>{"type"in h&&t(0,s=h.type)},[s,a,d]}class st extends le{constructor(e){super(),se(this,e,lt,tt,ne,{type:0})}}function Ve(n,e,t){const l=n.slice();return l[4]=e[t],l}function ze(n){let e,t;return e=new st({props:{type:n[4]}}),{c(){X(e.$$.fragment)},l(l){Z(e.$$.fragment,l)},m(l,s){x(e,l,s),t=!0},p(l,s){const i={};s&1&&(i.type=l[4]),e.$set(i)},i(l){t||(Y(e.$$.fragment,l),t=!0)},o(l){F(e.$$.fragment,l),t=!1},d(l){ee(e,l)}}}function nt(n){let e,t,l,s,i,a,d,h,u,o,v=n[0],m=[];for(let E=0;E<v.length;E+=1)m[E]=ze(Ve(n,v,E));const w=E=>F(m[E],1,1,()=>{m[E]=null});return{c(){for(let E=0;E<m.length;E+=1)m[E].c();e=I(),t=g("div"),l=g("button"),s=O("+"),i=I(),a=g("button"),d=O("-"),this.h()},l(E){for(let f=0;f<m.length;f+=1)m[f].l(E);e=L(E),t=b(E,"DIV",{style:!0});var $=y(t);l=b($,"BUTTON",{});var _=y(l);s=R(_,"+"),_.forEach(c),i=L($),a=b($,"BUTTON",{});var A=y(a);d=R(A,"-"),A.forEach(c),$.forEach(c),this.h()},h(){H(t,"margin","4px")},m(E,$){for(let _=0;_<m.length;_+=1)m[_]&&m[_].m(E,$);M(E,e,$),M(E,t,$),r(t,l),r(l,s),r(t,i),r(t,a),r(a,d),h=!0,u||(o=[W(l,"click",n[1]),W(a,"click",n[2])],u=!0)},p(E,[$]){if($&1){v=E[0];let _;for(_=0;_<v.length;_+=1){const A=Ve(E,v,_);m[_]?(m[_].p(A,$),Y(m[_],1)):(m[_]=ze(A),m[_].c(),Y(m[_],1),m[_].m(e.parentNode,e))}for(_e(),_=v.length;_<m.length;_+=1)w(_);pe()}},i(E){if(!h){for(let $=0;$<v.length;$+=1)Y(m[$]);h=!0}},o(E){m=m.filter(Boolean);for(let $=0;$<m.length;$+=1)F(m[$]);h=!1},d(E){fe(m,E),E&&c(e),E&&c(t),u=!1,de(o)}}}function rt(n,e,t){let l,s;ce(n,oe,d=>t(3,l=d)),ce(n,K,d=>t(0,s=d));function i(){const d=s.length-ve.length;s.push(new ae("Type_"+d)),K.set(s)}function a(){if(s.length>ve.length){const d=s[s.length-1];s.pop(),K.set(s),Oe(oe,l=l.filter(h=>h!==d),l)}}return[s,i,a]}class at extends le{constructor(e){super(),se(this,e,rt,nt,ne,{})}}function ot(n){let e,t,l,s,i,a,d,h,u,o,v,m,w,E,$,_;return a=new at({}),o=new je({}),$=new Xe({}),{c(){e=g("h1"),t=O("amd64 sysv calling convention"),l=I(),s=g("div"),i=g("div"),X(a.$$.fragment),d=I(),h=g("div"),u=g("div"),X(o.$$.fragment),v=I(),m=g("div"),w=I(),E=g("div"),X($.$$.fragment),this.h()},l(A){e=b(A,"H1",{class:!0});var f=y(e);t=R(f,"amd64 sysv calling convention"),f.forEach(c),l=L(A),s=b(A,"DIV",{id:!0,class:!0});var k=y(s);i=b(k,"DIV",{});var D=y(i);Z(a.$$.fragment,D),D.forEach(c),d=L(k),h=b(k,"DIV",{style:!0});var z=y(h);u=b(z,"DIV",{});var P=y(u);Z(o.$$.fragment,P),P.forEach(c),v=L(z),m=b(z,"DIV",{style:!0}),y(m).forEach(c),w=L(z),E=b(z,"DIV",{});var B=y(E);Z($.$$.fragment,B),B.forEach(c),z.forEach(c),k.forEach(c),this.h()},h(){V(e,"class","text svelte-dyiw47"),H(m,"height","32px"),H(h,"flex-grow","2"),H(h,"padding-left","32px"),V(s,"id","main"),V(s,"class","svelte-dyiw47")},m(A,f){M(A,e,f),r(e,t),M(A,l,f),M(A,s,f),r(s,i),x(a,i,null),r(s,d),r(s,h),r(h,u),x(o,u,null),r(h,v),r(h,m),r(h,w),r(h,E),x($,E,null),_=!0},p:te,i(A){_||(Y(a.$$.fragment,A),Y(o.$$.fragment,A),Y($.$$.fragment,A),_=!0)},o(A){F(a.$$.fragment,A),F(o.$$.fragment,A),F($.$$.fragment,A),_=!1},d(A){A&&c(e),A&&c(l),A&&c(s),ee(a),ee(o),ee($)}}}function it(n){return Ye(K.subscribe(e=>{for(const t of e)t.update()})),[]}class ft extends le{constructor(e){super(),se(this,e,it,ot,ne,{})}}function ct(n){let e,t;return e=new ft({}),{c(){X(e.$$.fragment)},l(l){Z(e.$$.fragment,l)},m(l,s){x(e,l,s),t=!0},p:te,i(l){t||(Y(e.$$.fragment,l),t=!0)},o(l){F(e.$$.fragment,l),t=!1},d(l){ee(e,l)}}}class dt extends le{constructor(e){super(),se(this,e,null,ct,ne,{})}}export{dt as component};
