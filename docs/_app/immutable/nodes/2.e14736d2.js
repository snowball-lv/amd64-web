import{S as Ae,i as Ne,s as $e,k as o,q as S,a as E,l as c,m as f,r as T,h as r,c as b,n as R,p as Q,b as G,G as t,J as Pe,u as we,H as oe,K as $t,L as Ul,M as Ye,w as Yl,g as J,v as Rt,f as Dt,d as Z,I as it,y as ye,z as Se,A as Te,B as Ie,N as kl,O as xl}from"../chunks/index.6ff9695e.js";import{w as Ol}from"../chunks/index.537af74c.js";function Bl(h,e){return Math.floor((h+e-1)/e)*e}const W={NONE:"NONE",INTEGER:"INTEGER",SSE:"SSE",SSEUP:"SSEUP",X87:"X87",X87UP:"X87UP",COMPLEX_X87:"COMPLEX_X87",NO_CLASS:"NO_CLASS",MEMORY:"MEMORY"};class qe{constructor(e,s=0,l=0,a=!0){this.name=e,this.size=s,this.align=l,this.user=a,this.fields=[],this.argclasses=[],this.classify()}combine(e,s){return e==s?e:e==W.NO_CLASS?s:s==W.NO_CLASS?e:e==W.MEMORY||s==W.MEMORY?W.MEMORY:e==W.INTEGER||s==W.INTEGER?W.INTEGER:W.SSE}classify(){this.argclasses=[];const e=Math.ceil(this.size/8);switch(this.argclasses=Array(e).fill(W.NO_CLASS),this.name){case"char":case"short":case"int":case"long":this.argclasses[0]=W.INTEGER;return;case"float":case"double":this.argclasses[0]=W.SSE;return}if(this.size>4*8){this.argclasses.fill(W.MEMORY);return}for(const s of this.fields){const l=Math.floor(s.offset/8);for(let a=0;a<s.type.argclasses.length;a++){const d=s.type.argclasses[a];this.argclasses[l+a]=this.combine(this.argclasses[l+a],d)}}if(this.argclasses.includes(W.MEMORY)){this.argclasses.fill(W.MEMORY);return}if(this.size>2*8&&(this.argclasses[0]!=W.SSE||!this.argclasses.includes(W.SSEUP))){this.argclasses.fill(W.MEMORY);return}}update(){if(!this.user)return;if(this.size=0,this.align=0,this.fields.length===0){this.classify();return}let e=0;for(let s of this.fields)s.offset=Bl(e,s.type.align),e=s.offset+s.type.size;this.align=this.fields.reduce((s,l)=>Math.max(s,l.type.align),0),this.size=Math.ceil(e/this.align)*this.align,this.classify()}}class Cl{constructor(e,s=0){this.type=e,this.offset=s}}const Ns=[new qe("char",1,1,!1),new qe("short",2,2,!1),new qe("int",4,4,!1),new qe("long",8,8,!1),new qe("float",4,4,!1),new qe("double",8,8,!1)],ge=Ol([...Ns]),Ue=Ol([]);function gl(h,e,s){const l=h.slice();return l[10]=e[s],l[12]=s,l}function ml(h){let e,s=h[1],l=[];for(let a=0;a<s.length;a+=1)l[a]=El(gl(h,s,a));return{c(){e=o("div");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=c(a,"DIV",{class:!0,id:!0,style:!0});var d=f(e);for(let n=0;n<l.length;n+=1)l[n].l(d);d.forEach(r),this.h()},h(){R(e,"class","frame svelte-zbbqa6"),R(e,"id","list-container"),Q(e,"margin-top","4px")},m(a,d){G(a,e,d);for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(e,null)},p(a,d){if(d&34){s=a[1];let n;for(n=0;n<s.length;n+=1){const v=gl(a,s,n);l[n]?l[n].p(v,d):(l[n]=El(v),l[n].c(),l[n].m(e,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=s.length}},d(a){a&&r(e),Ye(l,a)}}}function El(h){let e,s,l=h[10]+"",a,d,n,v;function u(){return h[7](h[12])}return{c(){e=o("button"),s=o("span"),a=S(l),d=E(),this.h()},l(p){e=c(p,"BUTTON",{class:!0});var i=f(e);s=c(i,"SPAN",{class:!0});var g=f(s);a=T(g,l),g.forEach(r),d=b(i),i.forEach(r),this.h()},h(){R(s,"class","type"),R(e,"class","btn opt svelte-zbbqa6")},m(p,i){G(p,e,i),t(e,s),t(s,a),t(e,d),n||(v=Pe(e,"click",u),n=!0)},p(p,i){h=p,i&2&&l!==(l=h[10]+"")&&we(a,l)},d(p){p&&r(e),n=!1,v()}}}function Vl(h){let e,s,l,a=h[1][h[0]]+"",d,n,v,u,p=h[2]&&ml(h);return{c(){e=o("div"),s=o("button"),l=o("span"),d=S(a),n=E(),p&&p.c(),this.h()},l(i){e=c(i,"DIV",{style:!0});var g=f(e);s=c(g,"BUTTON",{class:!0,id:!0});var y=f(s);l=c(y,"SPAN",{class:!0});var I=f(l);d=T(I,a),I.forEach(r),y.forEach(r),n=b(g),p&&p.l(g),g.forEach(r),this.h()},h(){R(l,"class","type"),R(s,"class","frame btn svelte-zbbqa6"),R(s,"id","val"),Q(e,"display","inline-block")},m(i,g){G(i,e,g),t(e,s),t(s,l),t(l,d),t(e,n),p&&p.m(e,null),h[8](e),v||(u=[Pe(window,"click",h[6]),Pe(s,"click",h[4])],v=!0)},p(i,[g]){g&3&&a!==(a=i[1][i[0]]+"")&&we(d,a),i[2]?p?p.p(i,g):(p=ml(i),p.c(),p.m(e,null)):p&&(p.d(1),p=null)},i:oe,o:oe,d(i){i&&r(e),p&&p.d(),h[8](null),v=!1,$t(u)}}}function zl(h,e,s){let{values:l=[]}=e,{selected:a=0}=e;const d=Ul();let n=!1;function v(){s(2,n=!0)}function u(I){s(0,a=I),s(2,n=!1),d("select",l[I])}let p;function i(I){p.contains(I.target)==!1&&s(2,n=!1)}const g=I=>u(I);function y(I){Yl[I?"unshift":"push"](()=>{p=I,s(3,p)})}return h.$$set=I=>{"values"in I&&s(1,l=I.values),"selected"in I&&s(0,a=I.selected)},[a,l,n,p,v,u,i,g,y]}class ql extends Ae{constructor(e){super(),Ne(this,e,zl,Vl,$e,{values:1,selected:0})}}function bl(h,e,s){const l=h.slice();return l[7]=e[s],l[9]=s,l}function yl(h){let e,s,l,a,d="p"+h[9],n,v,u,p=",",i,g;function y(...I){return h[6](h[9],...I)}return s=new ql({props:{values:h[0],selected:h[0].indexOf(h[7].name)}}),s.$on("select",y),{c(){e=o("div"),ye(s.$$.fragment),l=E(),a=o("span"),n=S(d),v=E(),u=o("span"),i=S(p),this.h()},l(I){e=c(I,"DIV",{class:!0});var _=f(e);Se(s.$$.fragment,_),l=b(_),a=c(_,"SPAN",{class:!0});var P=f(a);n=T(P,d),P.forEach(r),v=b(_),u=c(_,"SPAN",{class:!0});var $=f(u);i=T($,p),$.forEach(r),_.forEach(r),this.h()},h(){R(a,"class","text"),R(u,"class","text"),R(e,"class","param-container svelte-6n32qs")},m(I,_){G(I,e,_),Te(s,e,null),t(e,l),t(e,a),t(a,n),t(e,v),t(e,u),t(u,i),g=!0},p(I,_){h=I;const P={};_&1&&(P.values=h[0]),_&3&&(P.selected=h[0].indexOf(h[7].name)),s.$set(P)},i(I){g||(J(s.$$.fragment,I),g=!0)},o(I){Z(s.$$.fragment,I),g=!1},d(I){I&&r(e),Ie(s)}}}function Gl(h){let e,s,l,a,d,n,v,u,p,i,g,y,I,_,P,$,w,A,k,C,Y=h[1],N=[];for(let M=0;M<Y.length;M+=1)N[M]=yl(bl(h,Y,M));const q=M=>Z(N[M],1,1,()=>{N[M]=null});return{c(){e=o("div"),s=o("p"),l=o("span"),a=S("void"),d=E(),n=o("span"),v=S("foo("),u=E();for(let M=0;M<N.length;M+=1)N[M].c();p=E(),i=o("button"),g=S("+"),y=E(),I=o("button"),_=S("-"),P=E(),$=o("span"),w=S(");"),this.h()},l(M){e=c(M,"DIV",{class:!0});var L=f(e);s=c(L,"P",{});var m=f(s);l=c(m,"SPAN",{class:!0});var V=f(l);a=T(V,"void"),V.forEach(r),d=b(m),n=c(m,"SPAN",{class:!0});var D=f(n);v=T(D,"foo("),D.forEach(r),u=b(m);for(let ee=0;ee<N.length;ee+=1)N[ee].l(m);p=b(m),i=c(m,"BUTTON",{});var x=f(i);g=T(x,"+"),x.forEach(r),y=b(m),I=c(m,"BUTTON",{});var te=f(I);_=T(te,"-"),te.forEach(r),P=b(m),$=c(m,"SPAN",{class:!0});var K=f($);w=T(K,");"),K.forEach(r),m.forEach(r),L.forEach(r),this.h()},h(){R(l,"class","type"),R(n,"class","text"),R($,"class","text"),R(e,"class","frame svelte-6n32qs")},m(M,L){G(M,e,L),t(e,s),t(s,l),t(l,a),t(s,d),t(s,n),t(n,v),t(s,u);for(let m=0;m<N.length;m+=1)N[m]&&N[m].m(s,null);t(s,p),t(s,i),t(i,g),t(s,y),t(s,I),t(I,_),t(s,P),t(s,$),t($,w),A=!0,k||(C=[Pe(i,"click",h[2]),Pe(I,"click",h[3])],k=!0)},p(M,[L]){if(L&19){Y=M[1];let m;for(m=0;m<Y.length;m+=1){const V=bl(M,Y,m);N[m]?(N[m].p(V,L),J(N[m],1)):(N[m]=yl(V),N[m].c(),J(N[m],1),N[m].m(s,p))}for(Rt(),m=Y.length;m<N.length;m+=1)q(m);Dt()}},i(M){if(!A){for(let L=0;L<Y.length;L+=1)J(N[L]);A=!0}},o(M){N=N.filter(Boolean);for(let L=0;L<N.length;L+=1)Z(N[L]);A=!1},d(M){M&&r(e),Ye(N,M),k=!1,$t(C)}}}function jl(h,e,s){let l,a,d;it(h,Ue,i=>s(1,a=i)),it(h,ge,i=>s(5,d=i));function n(){a.push(d[0]),Ue.set(a)}function v(){a.pop(),Ue.set(a)}function u(i,g){kl(Ue,a[i]=d.find(y=>y.name===g),a),Ue.set(a)}const p=(i,g)=>u(i,g.detail);return h.$$.update=()=>{h.$$.dirty&32&&s(0,l=d.map(i=>i.name))},[l,a,n,v,u,d,p]}class Xl extends Ae{constructor(e){super(),Ne(this,e,jl,Gl,$e,{})}}function Sl(h,e,s){const l=h.slice();return l[2]=e[s],l}function Tl(h,e,s){const l=h.slice();return l[2]=e[s],l}function Il(h){let e,s,l,a=h[2]+"",d,n,v;return{c(){e=o("div"),s=o("span"),l=S("%"),d=S(a),n=S(":"),v=E(),this.h()},l(u){e=c(u,"DIV",{});var p=f(e);s=c(p,"SPAN",{class:!0});var i=f(s);l=T(i,"%"),d=T(i,a),n=T(i,":"),i.forEach(r),v=b(p),p.forEach(r),this.h()},h(){R(s,"class","text")},m(u,p){G(u,e,p),t(e,s),t(s,l),t(s,d),t(s,n),t(e,v)},p:oe,d(u){u&&r(e)}}}function Pl(h){let e,s,l,a=h[2]+"",d,n,v;return{c(){e=o("div"),s=o("span"),l=S("%"),d=S(a),n=S(":"),v=E(),this.h()},l(u){e=c(u,"DIV",{});var p=f(e);s=c(p,"SPAN",{class:!0});var i=f(s);l=T(i,"%"),d=T(i,a),n=T(i,":"),i.forEach(r),v=b(p),p.forEach(r),this.h()},h(){R(s,"class","text")},m(u,p){G(u,e,p),t(e,s),t(s,l),t(s,d),t(s,n),t(e,v)},p:oe,d(u){u&&r(e)}}}function Fl(h){let e,s,l,a,d,n,v,u,p,i,g,y,I,_,P,$,w,A,k,C,Y,N=h[0],q=[];for(let m=0;m<N.length;m+=1)q[m]=Il(Tl(h,N,m));let M=h[1],L=[];for(let m=0;m<M.length;m+=1)L[m]=Pl(Sl(h,M,m));return{c(){e=o("table"),s=o("tr"),l=o("td"),a=o("div"),d=S("gp regs"),n=E(),v=o("br"),u=E();for(let m=0;m<q.length;m+=1)q[m].c();p=E(),i=o("td"),g=o("div"),y=S("fp regs"),I=E(),_=o("br"),P=E();for(let m=0;m<L.length;m+=1)L[m].c();$=E(),w=o("td"),A=o("div"),k=S("stack"),C=E(),Y=o("br"),this.h()},l(m){e=c(m,"TABLE",{class:!0,style:!0});var V=f(e);s=c(V,"TR",{});var D=f(s);l=c(D,"TD",{class:!0});var x=f(l);a=c(x,"DIV",{class:!0,style:!0});var te=f(a);d=T(te,"gp regs"),te.forEach(r),n=b(x),v=c(x,"BR",{}),u=b(x);for(let X=0;X<q.length;X+=1)q[X].l(x);x.forEach(r),p=b(D),i=c(D,"TD",{class:!0});var K=f(i);g=c(K,"DIV",{class:!0,style:!0});var ee=f(g);y=T(ee,"fp regs"),ee.forEach(r),I=b(K),_=c(K,"BR",{}),P=b(K);for(let X=0;X<L.length;X+=1)L[X].l(K);K.forEach(r),$=b(D),w=c(D,"TD",{class:!0});var re=f(w);A=c(re,"DIV",{class:!0,style:!0});var ae=f(A);k=T(ae,"stack"),ae.forEach(r),C=b(re),Y=c(re,"BR",{}),re.forEach(r),D.forEach(r),V.forEach(r),this.h()},h(){R(a,"class","hdr text svelte-1hgub3f"),Q(a,"min-width","16ch"),R(l,"class","svelte-1hgub3f"),R(g,"class","hdr text svelte-1hgub3f"),Q(g,"min-width","16ch"),R(i,"class","svelte-1hgub3f"),R(A,"class","hdr text svelte-1hgub3f"),Q(A,"min-width","16ch"),R(w,"class","svelte-1hgub3f"),R(e,"class","frame"),Q(e,"border-spacing","0px")},m(m,V){G(m,e,V),t(e,s),t(s,l),t(l,a),t(a,d),t(l,n),t(l,v),t(l,u);for(let D=0;D<q.length;D+=1)q[D]&&q[D].m(l,null);t(s,p),t(s,i),t(i,g),t(g,y),t(i,I),t(i,_),t(i,P);for(let D=0;D<L.length;D+=1)L[D]&&L[D].m(i,null);t(s,$),t(s,w),t(w,A),t(A,k),t(w,C),t(w,Y)},p(m,[V]){if(V&1){N=m[0];let D;for(D=0;D<N.length;D+=1){const x=Tl(m,N,D);q[D]?q[D].p(x,V):(q[D]=Il(x),q[D].c(),q[D].m(l,null))}for(;D<q.length;D+=1)q[D].d(1);q.length=N.length}if(V&2){M=m[1];let D;for(D=0;D<M.length;D+=1){const x=Sl(m,M,D);L[D]?L[D].p(x,V):(L[D]=Pl(x),L[D].c(),L[D].m(i,null))}for(;D<L.length;D+=1)L[D].d(1);L.length=M.length}},i:oe,o:oe,d(m){m&&r(e),Ye(q,m),Ye(L,m)}}}function Hl(h){let e=["rdi","rsi","rdx","rcx","r8","r9"],s=[];for(let l=0;l<8;l++)s.push(`xmm${l}`);return[e,s]}class Jl extends Ae{constructor(e){super(),Ne(this,e,Hl,Fl,$e,{})}}function Kl(h){let e,s,l,a,d,n,v,u=h[0].offset+"",p,i,g,y,I,_,P,$,w;return y=new ql({props:{values:h[3],selected:h[2].indexOf(h[0].type)}}),y.$on("select",h[4]),{c(){e=o("td"),s=E(),l=o("td"),a=o("span"),d=S("offset"),n=E(),v=o("span"),p=S(u),i=E(),g=o("td"),ye(y.$$.fragment),I=E(),_=o("td"),P=o("span"),$=S(h[1]),this.h()},l(A){e=c(A,"TD",{style:!0}),f(e).forEach(r),s=b(A),l=c(A,"TD",{style:!0});var k=f(l);a=c(k,"SPAN",{class:!0});var C=f(a);d=T(C,"offset"),C.forEach(r),n=b(k),v=c(k,"SPAN",{class:!0});var Y=f(v);p=T(Y,u),Y.forEach(r),k.forEach(r),i=b(A),g=c(A,"TD",{});var N=f(g);Se(y.$$.fragment,N),N.forEach(r),I=b(A),_=c(A,"TD",{});var q=f(_);P=c(q,"SPAN",{class:!0,style:!0});var M=f(P);$=T(M,h[1]),M.forEach(r),q.forEach(r),this.h()},h(){Q(e,"min-width","2ch"),R(a,"class","text"),R(v,"class","num"),Q(l,"min-width","8ch"),R(P,"class","text"),Q(P,"margin-left","1ch")},m(A,k){G(A,e,k),G(A,s,k),G(A,l,k),t(l,a),t(a,d),t(l,n),t(l,v),t(v,p),G(A,i,k),G(A,g,k),Te(y,g,null),G(A,I,k),G(A,_,k),t(_,P),t(P,$),w=!0},p(A,[k]){(!w||k&1)&&u!==(u=A[0].offset+"")&&we(p,u);const C={};k&8&&(C.values=A[3]),k&5&&(C.selected=A[2].indexOf(A[0].type)),y.$set(C),(!w||k&2)&&we($,A[1])},i(A){w||(J(y.$$.fragment,A),w=!0)},o(A){Z(y.$$.fragment,A),w=!1},d(A){A&&r(e),A&&r(s),A&&r(l),A&&r(i),A&&r(g),Ie(y),A&&r(I),A&&r(_)}}}function Ql(h,e,s){let l,a;it(h,ge,i=>s(2,a=i));let{field:d}=e,{name:n}=e,{parent:v}=e;function u(i){return a.find(g=>g.name===i)}function p(i){const g=i.detail;s(0,d.type=u(g),d),ge.set(a)}return h.$$set=i=>{"field"in i&&s(0,d=i.field),"name"in i&&s(1,n=i.name),"parent"in i&&s(5,v=i.parent)},h.$$.update=()=>{h.$$.dirty&36&&s(3,l=a.slice(0,a.indexOf(v)).map(i=>i.name))},[d,n,a,l,p,v]}class Wl extends Ae{constructor(e){super(),Ne(this,e,Ql,Kl,$e,{field:0,name:1,parent:5})}}function Al(h,e,s){const l=h.slice();return l[5]=e[s],l[7]=s,l}function Nl(h,e,s){const l=h.slice();return l[8]=e[s],l[7]=s,l}function $l(h){let e,s,l,a,d=h[0].fields,n=[];for(let u=0;u<d.length;u+=1)n[u]=Rl(Nl(h,d,u));const v=u=>Z(n[u],1,1,()=>{n[u]=null});return{c(){e=o("tr"),s=o("td"),l=o("table");for(let u=0;u<n.length;u+=1)n[u].c()},l(u){e=c(u,"TR",{});var p=f(e);s=c(p,"TD",{});var i=f(s);l=c(i,"TABLE",{});var g=f(l);for(let y=0;y<n.length;y+=1)n[y].l(g);g.forEach(r),i.forEach(r),p.forEach(r)},m(u,p){G(u,e,p),t(e,s),t(s,l);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(l,null);a=!0},p(u,p){if(p&1){d=u[0].fields;let i;for(i=0;i<d.length;i+=1){const g=Nl(u,d,i);n[i]?(n[i].p(g,p),J(n[i],1)):(n[i]=Rl(g),n[i].c(),J(n[i],1),n[i].m(l,null))}for(Rt(),i=d.length;i<n.length;i+=1)v(i);Dt()}},i(u){if(!a){for(let p=0;p<d.length;p+=1)J(n[p]);a=!0}},o(u){n=n.filter(Boolean);for(let p=0;p<n.length;p+=1)Z(n[p]);a=!1},d(u){u&&r(e),Ye(n,u)}}}function Rl(h){let e,s,l,a;return s=new Wl({props:{parent:h[0],field:h[8],name:"f"+h[7]}}),{c(){e=o("tr"),ye(s.$$.fragment),l=E()},l(d){e=c(d,"TR",{});var n=f(e);Se(s.$$.fragment,n),l=b(n),n.forEach(r)},m(d,n){G(d,e,n),Te(s,e,null),t(e,l),a=!0},p(d,n){const v={};n&1&&(v.parent=d[0]),n&1&&(v.field=d[8]),s.$set(v)},i(d){a||(J(s.$$.fragment,d),a=!0)},o(d){Z(s.$$.fragment,d),a=!1},d(d){d&&r(e),Ie(s)}}}function Dl(h){let e,s,l,a,d,n,v,u,p,i,g=h[5]+"",y,I;return{c(){e=o("tr"),s=o("td"),l=E(),a=o("td"),d=o("span"),n=S("#"),v=S(h[7]),u=E(),p=o("td"),i=o("span"),y=S(g),I=E(),this.h()},l(_){e=c(_,"TR",{});var P=f(e);s=c(P,"TD",{style:!0}),f(s).forEach(r),l=b(P),a=c(P,"TD",{style:!0});var $=f(a);d=c($,"SPAN",{class:!0});var w=f(d);n=T(w,"#"),v=T(w,h[7]),w.forEach(r),$.forEach(r),u=b(P),p=c(P,"TD",{});var A=f(p);i=c(A,"SPAN",{class:!0});var k=f(i);y=T(k,g),k.forEach(r),A.forEach(r),I=b(P),P.forEach(r),this.h()},h(){Q(s,"min-width","2ch"),R(d,"class","num"),Q(a,"min-width","4ch"),R(i,"class","type")},m(_,P){G(_,e,P),t(e,s),t(e,l),t(e,a),t(a,d),t(d,n),t(d,v),t(e,u),t(e,p),t(p,i),t(i,y),t(e,I)},p(_,P){P&1&&g!==(g=_[5]+"")&&we(y,g)},d(_){_&&r(e)}}}function Ll(h){let e,s,l,a,d,n,v,u,p;return{c(){e=o("tr"),s=o("td"),l=o("button"),a=S("+"),d=E(),n=o("button"),v=S("-"),this.h()},l(i){e=c(i,"TR",{});var g=f(e);s=c(g,"TD",{style:!0});var y=f(s);l=c(y,"BUTTON",{});var I=f(l);a=T(I,"+"),I.forEach(r),d=b(y),n=c(y,"BUTTON",{});var _=f(n);v=T(_,"-"),_.forEach(r),y.forEach(r),g.forEach(r),this.h()},h(){Q(s,"text-align","right")},m(i,g){G(i,e,g),t(e,s),t(s,l),t(l,a),t(s,d),t(s,n),t(n,v),u||(p=[Pe(l,"click",h[1]),Pe(n,"click",h[2])],u=!0)},p:oe,d(i){i&&r(e),u=!1,$t(p)}}}function Zl(h){let e,s,l,a,d,n,v,u=h[0].name+"",p,i,g,y,I,_,P,$,w,A=h[0].size+"",k,C,Y,N,q,M,L=h[0].align+"",m,V,D,x,te,K,ee,re,ae,X,ne,ke,ce,z=h[0].user&&$l(h),he=h[0].argclasses,H=[];for(let U=0;U<he.length;U+=1)H[U]=Dl(Al(h,he,U));let F=h[0].user&&Ll(h);return{c(){e=o("table"),s=o("tr"),l=o("td"),a=o("table"),d=o("tr"),n=o("td"),v=o("span"),p=S(u),i=E(),g=o("td"),y=E(),I=o("td"),_=o("span"),P=S("size"),$=E(),w=o("span"),k=S(A),C=E(),Y=o("span"),N=S("| align"),q=E(),M=o("span"),m=S(L),V=E(),z&&z.c(),D=E(),x=o("tr"),te=o("td"),K=o("span"),ee=S("8 bytes:"),re=E(),ae=o("tr"),X=o("td"),ne=o("table");for(let U=0;U<H.length;U+=1)H[U].c();ke=E(),F&&F.c(),this.h()},l(U){e=c(U,"TABLE",{class:!0});var j=f(e);s=c(j,"TR",{});var B=f(s);l=c(B,"TD",{});var fe=f(l);a=c(fe,"TABLE",{style:!0});var xe=f(a);d=c(xe,"TR",{});var de=f(d);n=c(de,"TD",{});var Re=f(n);v=c(Re,"SPAN",{class:!0});var Be=f(v);p=T(Be,u),Be.forEach(r),Re.forEach(r),i=b(de),g=c(de,"TD",{}),f(g).forEach(r),y=b(de),I=c(de,"TD",{style:!0});var ie=f(I);_=c(ie,"SPAN",{class:!0});var De=f(_);P=T(De,"size"),De.forEach(r),$=b(ie),w=c(ie,"SPAN",{class:!0});var Ce=f(w);k=T(Ce,A),Ce.forEach(r),C=b(ie),Y=c(ie,"SPAN",{class:!0});var Ve=f(Y);N=T(Ve,"| align"),Ve.forEach(r),q=b(ie),M=c(ie,"SPAN",{class:!0});var me=f(M);m=T(me,L),me.forEach(r),ie.forEach(r),de.forEach(r),xe.forEach(r),fe.forEach(r),B.forEach(r),V=b(j),z&&z.l(j),D=b(j),x=c(j,"TR",{});var ze=f(x);te=c(ze,"TD",{});var Ge=f(te);K=c(Ge,"SPAN",{class:!0});var Ee=f(K);ee=T(Ee,"8 bytes:"),Ee.forEach(r),Ge.forEach(r),ze.forEach(r),re=b(j),ae=c(j,"TR",{});var je=f(ae);X=c(je,"TD",{});var Xe=f(X);ne=c(Xe,"TABLE",{});var be=f(ne);for(let Oe=0;Oe<H.length;Oe+=1)H[Oe].l(be);be.forEach(r),Xe.forEach(r),je.forEach(r),ke=b(j),F&&F.l(j),j.forEach(r),this.h()},h(){R(v,"class","type"),R(_,"class","text"),R(w,"class","num"),R(Y,"class","text"),R(M,"class","num"),Q(I,"text-align","right"),Q(a,"width","100%"),R(K,"class","text"),R(e,"class","frame svelte-19jicr")},m(U,j){G(U,e,j),t(e,s),t(s,l),t(l,a),t(a,d),t(d,n),t(n,v),t(v,p),t(d,i),t(d,g),t(d,y),t(d,I),t(I,_),t(_,P),t(I,$),t(I,w),t(w,k),t(I,C),t(I,Y),t(Y,N),t(I,q),t(I,M),t(M,m),t(e,V),z&&z.m(e,null),t(e,D),t(e,x),t(x,te),t(te,K),t(K,ee),t(e,re),t(e,ae),t(ae,X),t(X,ne);for(let B=0;B<H.length;B+=1)H[B]&&H[B].m(ne,null);t(e,ke),F&&F.m(e,null),ce=!0},p(U,[j]){if((!ce||j&1)&&u!==(u=U[0].name+"")&&we(p,u),(!ce||j&1)&&A!==(A=U[0].size+"")&&we(k,A),(!ce||j&1)&&L!==(L=U[0].align+"")&&we(m,L),U[0].user?z?(z.p(U,j),j&1&&J(z,1)):(z=$l(U),z.c(),J(z,1),z.m(e,D)):z&&(Rt(),Z(z,1,1,()=>{z=null}),Dt()),j&1){he=U[0].argclasses;let B;for(B=0;B<he.length;B+=1){const fe=Al(U,he,B);H[B]?H[B].p(fe,j):(H[B]=Dl(fe),H[B].c(),H[B].m(ne,null))}for(;B<H.length;B+=1)H[B].d(1);H.length=he.length}U[0].user?F?F.p(U,j):(F=Ll(U),F.c(),F.m(e,null)):F&&(F.d(1),F=null)},i(U){ce||(J(z),ce=!0)},o(U){Z(z),ce=!1},d(U){U&&r(e),z&&z.d(),Ye(H,U),F&&F.d()}}}function er(h,e,s){let l;it(h,ge,u=>s(3,l=u));let{type:a}=e;function d(u){return l.find(p=>p.name===u)}function n(){a.fields.push(new Cl(d("int"))),ge.set(l)}function v(){a.fields.length>0&&(a.fields.pop(),ge.set(l))}return h.$$set=u=>{"type"in u&&s(0,a=u.type)},[a,n,v]}class tr extends Ae{constructor(e){super(),Ne(this,e,er,Zl,$e,{type:0})}}function Ml(h,e,s){const l=h.slice();return l[4]=e[s],l}function wl(h){let e,s;return e=new tr({props:{type:h[4]}}),{c(){ye(e.$$.fragment)},l(l){Se(e.$$.fragment,l)},m(l,a){Te(e,l,a),s=!0},p(l,a){const d={};a&1&&(d.type=l[4]),e.$set(d)},i(l){s||(J(e.$$.fragment,l),s=!0)},o(l){Z(e.$$.fragment,l),s=!1},d(l){Ie(e,l)}}}function sr(h){let e,s,l,a,d,n,v,u,p,i,g=h[0],y=[];for(let _=0;_<g.length;_+=1)y[_]=wl(Ml(h,g,_));const I=_=>Z(y[_],1,1,()=>{y[_]=null});return{c(){for(let _=0;_<y.length;_+=1)y[_].c();e=E(),s=o("div"),l=o("button"),a=S("+"),d=E(),n=o("button"),v=S("-"),this.h()},l(_){for(let A=0;A<y.length;A+=1)y[A].l(_);e=b(_),s=c(_,"DIV",{style:!0});var P=f(s);l=c(P,"BUTTON",{});var $=f(l);a=T($,"+"),$.forEach(r),d=b(P),n=c(P,"BUTTON",{});var w=f(n);v=T(w,"-"),w.forEach(r),P.forEach(r),this.h()},h(){Q(s,"margin","4px")},m(_,P){for(let $=0;$<y.length;$+=1)y[$]&&y[$].m(_,P);G(_,e,P),G(_,s,P),t(s,l),t(l,a),t(s,d),t(s,n),t(n,v),u=!0,p||(i=[Pe(l,"click",h[1]),Pe(n,"click",h[2])],p=!0)},p(_,[P]){if(P&1){g=_[0];let $;for($=0;$<g.length;$+=1){const w=Ml(_,g,$);y[$]?(y[$].p(w,P),J(y[$],1)):(y[$]=wl(w),y[$].c(),J(y[$],1),y[$].m(e.parentNode,e))}for(Rt(),$=g.length;$<y.length;$+=1)I($);Dt()}},i(_){if(!u){for(let P=0;P<g.length;P+=1)J(y[P]);u=!0}},o(_){y=y.filter(Boolean);for(let P=0;P<y.length;P+=1)Z(y[P]);u=!1},d(_){Ye(y,_),_&&r(e),_&&r(s),p=!1,$t(i)}}}function lr(h,e,s){let l,a;it(h,Ue,v=>s(3,l=v)),it(h,ge,v=>s(0,a=v));function d(){const v=a.length-Ns.length;a.push(new qe("Type_"+v)),ge.set(a)}function n(){if(a.length>Ns.length){const v=a[a.length-1];a.pop(),ge.set(a),kl(Ue,l=l.filter(u=>u!==v),l)}}return[a,d,n]}class rr extends Ae{constructor(e){super(),Ne(this,e,lr,sr,$e,{})}}function ar(h){let e,s,l,a,d,n,v,u,p,i,g,y,I,_,P,$,w,A,k,C,Y,N,q,M,L,m,V,D,x,te,K,ee,re,ae,X,ne,ke,ce,z,he,H,F,U,j,B,fe,xe,de,Re,Be,ie,De,Ce,Ve,me,ze,Ge,Ee,je,Xe,be,Oe,Lt,Fe,Mt,wt,Le,ot,kt,Ot,ct,qt,Ut,He,Yt,xt,ue,ft,Bt,Ct,ht,Vt,zt,Je,Gt,le,dt,jt,Xt,ut,Ft,Ht,pt,Jt,Kt,_t,Qt,Wt,vt,Zt,es,Ke,ts,ss,pe,gt,ls,rs,mt,as,ns,Et,is,os,Qe,cs,fs,se,bt,hs,ds,We,us,yt,St,ps,_s,Tt,vs,gs,It,ms,Es,Pt,bs,ys,Ze,Ss,Ts,et,Is;return{c(){e=o("div"),s=o("p"),l=S("Notes"),a=E(),d=o("p"),n=S("(from the AMD64 SysV ABI)"),v=E(),u=o("p"),p=S(`Arguments are first classified into classes that have
        corresponding amd64 registers.`),i=E(),g=o("p"),y=S("These are:"),I=E(),_=o("table"),P=o("tr"),$=o("td"),w=S("INTEGER"),A=E(),k=o("td"),C=S("-"),Y=E(),N=o("td"),q=S("types that fit into general purpose registers"),M=E(),L=o("tr"),m=o("td"),V=S("SSE"),D=E(),x=o("td"),te=S("-"),K=E(),ee=o("td"),re=S("types that fit into vector registers"),ae=E(),X=o("tr"),ne=o("td"),ke=S("SSEUP"),ce=E(),z=o("td"),he=S("-"),H=E(),F=o("td"),U=S("types that fit into the upper bytes of vector registers"),j=E(),B=o("tr"),fe=o("td"),xe=S("MEMORY"),de=E(),Re=o("td"),Be=S("-"),ie=E(),De=o("td"),Ce=S("types to be passed on the stack"),Ve=E(),me=o("p"),ze=S("(n.b. there are more classes for more complex unimplemented types)"),Ge=E(),Ee=o("p"),je=S("Classification:"),Xe=E(),be=o("p"),Oe=S("Arguments are rounded up to 8 bytes (8-bytes from now on)."),Lt=E(),Fe=o("p"),Mt=S("Scalars are assigned the following classes:"),wt=E(),Le=o("ul"),ot=o("li"),kt=S(`char, short, int, long, long long and pointers
            are classified as INTEGER`),Ot=E(),ct=o("li"),qt=S("float and double are classified as SSE"),Ut=E(),He=o("p"),Yt=S("Classification of aggregate types:"),xt=E(),ue=o("ol"),ft=o("li"),Bt=S(`If the object is larger than four 8-bytes, or if it contains
            unaligned fields it is classified as MEMORY.`),Ct=E(),ht=o("li"),Vt=S(`If the size of the object is larger than a single 8-byte then
            each 8-byte gets classified individually. The initial class
            of each 8-byte is set to NO_CLASS.`),zt=E(),Je=o("li"),Gt=S(`The class of an 8-byte is determined by recursively combining
            the classes of the fields of an object that overlap this 8-byte.
            `),le=o("ol"),dt=o("li"),jt=S("If both classes are equal, this is the resulting class."),Xt=E(),ut=o("li"),Ft=S("If one class is NO_CLASS, the result is the other class."),Ht=E(),pt=o("li"),Jt=S("If one class is MEMORY, the result is MEMORY."),Kt=E(),_t=o("li"),Qt=S("If one class is INTEGER, the result is INTEGER."),Wt=E(),vt=o("li"),Zt=S("Otherwise the class is SSE."),es=E(),Ke=o("p"),ts=S("Post-processing for aggregate types:"),ss=E(),pe=o("ul"),gt=o("li"),ls=S(`If one of the classes is MEMORY then the entire argument
            is passed in memory.`),rs=E(),mt=o("li"),as=S(`If the size of the object is larger than two 8-bytes
            and the first 8-byte isn't SSE and if any other 8-byte isn't
            SSEUP then the whole object is passed in memory.`),ns=E(),Et=o("li"),is=S("If SSEUP is not preceded by SSE or SSEUP, it is converted to SSE."),os=E(),Qe=o("p"),cs=S("After classification arguments are assigned their registers in order."),fs=E(),se=o("ul"),bt=o("li"),hs=S("If the class is MEMORY, pass it on the stack."),ds=E(),We=o("li"),us=S(`If the class is INTEGER, pick the next available register
            from the list:
                `),yt=o("ul"),St=o("li"),ps=S("%rdi, %rsi, %rdx, %rcx, %r8, %r9,"),_s=E(),Tt=o("li"),vs=S(`If the class is SSE, pick the next available register
            from %xmm0 to %xmm7`),gs=E(),It=o("li"),ms=S(`If the class is SSEUP, pick the next available 8-byte in the
            last used vector register.`),Es=E(),Pt=o("li"),bs=S(`If there are no more registers available for any 8-byte of an
            object, pass the entire object in memory. Previous register
            assignments are discarded.`),ys=E(),Ze=o("p"),Ss=S(`After registers are assigned, the arguments passed in memory get
        pushed onto the stack in reverse order.`),Ts=E(),et=o("p"),Is=S("*** This is how I understood the ABI. Not necessarily correct."),this.h()},l(At){e=c(At,"DIV",{class:!0});var O=f(e);s=c(O,"P",{class:!0,id:!0});var $s=f(s);l=T($s,"Notes"),$s.forEach(r),a=b(O),d=c(O,"P",{class:!0,id:!0});var Rs=f(d);n=T(Rs,"(from the AMD64 SysV ABI)"),Rs.forEach(r),v=b(O),u=c(O,"P",{class:!0});var Ds=f(u);p=T(Ds,`Arguments are first classified into classes that have
        corresponding amd64 registers.`),Ds.forEach(r),i=b(O),g=c(O,"P",{class:!0});var Ls=f(g);y=T(Ls,"These are:"),Ls.forEach(r),I=b(O),_=c(O,"TABLE",{class:!0});var Me=f(_);P=c(Me,"TR",{});var tt=f(P);$=c(tt,"TD",{});var Ms=f($);w=T(Ms,"INTEGER"),Ms.forEach(r),A=b(tt),k=c(tt,"TD",{});var ws=f(k);C=T(ws,"-"),ws.forEach(r),Y=b(tt),N=c(tt,"TD",{});var ks=f(N);q=T(ks,"types that fit into general purpose registers"),ks.forEach(r),tt.forEach(r),M=b(Me),L=c(Me,"TR",{});var st=f(L);m=c(st,"TD",{});var Os=f(m);V=T(Os,"SSE"),Os.forEach(r),D=b(st),x=c(st,"TD",{});var qs=f(x);te=T(qs,"-"),qs.forEach(r),K=b(st),ee=c(st,"TD",{});var Us=f(ee);re=T(Us,"types that fit into vector registers"),Us.forEach(r),st.forEach(r),ae=b(Me),X=c(Me,"TR",{});var lt=f(X);ne=c(lt,"TD",{});var Ys=f(ne);ke=T(Ys,"SSEUP"),Ys.forEach(r),ce=b(lt),z=c(lt,"TD",{});var xs=f(z);he=T(xs,"-"),xs.forEach(r),H=b(lt),F=c(lt,"TD",{});var Bs=f(F);U=T(Bs,"types that fit into the upper bytes of vector registers"),Bs.forEach(r),lt.forEach(r),j=b(Me),B=c(Me,"TR",{});var rt=f(B);fe=c(rt,"TD",{});var Cs=f(fe);xe=T(Cs,"MEMORY"),Cs.forEach(r),de=b(rt),Re=c(rt,"TD",{});var Vs=f(Re);Be=T(Vs,"-"),Vs.forEach(r),ie=b(rt),De=c(rt,"TD",{});var zs=f(De);Ce=T(zs,"types to be passed on the stack"),zs.forEach(r),rt.forEach(r),Me.forEach(r),Ve=b(O),me=c(O,"P",{class:!0});var Gs=f(me);ze=T(Gs,"(n.b. there are more classes for more complex unimplemented types)"),Gs.forEach(r),Ge=b(O),Ee=c(O,"P",{class:!0});var js=f(Ee);je=T(js,"Classification:"),js.forEach(r),Xe=b(O),be=c(O,"P",{class:!0});var Xs=f(be);Oe=T(Xs,"Arguments are rounded up to 8 bytes (8-bytes from now on)."),Xs.forEach(r),Lt=b(O),Fe=c(O,"P",{class:!0});var Fs=f(Fe);Mt=T(Fs,"Scalars are assigned the following classes:"),Fs.forEach(r),wt=b(O),Le=c(O,"UL",{class:!0});var Nt=f(Le);ot=c(Nt,"LI",{});var Hs=f(ot);kt=T(Hs,`char, short, int, long, long long and pointers
            are classified as INTEGER`),Hs.forEach(r),Ot=b(Nt),ct=c(Nt,"LI",{});var Js=f(ct);qt=T(Js,"float and double are classified as SSE"),Js.forEach(r),Nt.forEach(r),Ut=b(O),He=c(O,"P",{class:!0});var Ks=f(He);Yt=T(Ks,"Classification of aggregate types:"),Ks.forEach(r),xt=b(O),ue=c(O,"OL",{class:!0});var at=f(ue);ft=c(at,"LI",{});var Qs=f(ft);Bt=T(Qs,`If the object is larger than four 8-bytes, or if it contains
            unaligned fields it is classified as MEMORY.`),Qs.forEach(r),Ct=b(at),ht=c(at,"LI",{});var Ws=f(ht);Vt=T(Ws,`If the size of the object is larger than a single 8-byte then
            each 8-byte gets classified individually. The initial class
            of each 8-byte is set to NO_CLASS.`),Ws.forEach(r),zt=b(at),Je=c(at,"LI",{});var Ps=f(Je);Gt=T(Ps,`The class of an 8-byte is determined by recursively combining
            the classes of the fields of an object that overlap this 8-byte.
            `),le=c(Ps,"OL",{});var _e=f(le);dt=c(_e,"LI",{});var Zs=f(dt);jt=T(Zs,"If both classes are equal, this is the resulting class."),Zs.forEach(r),Xt=b(_e),ut=c(_e,"LI",{});var el=f(ut);Ft=T(el,"If one class is NO_CLASS, the result is the other class."),el.forEach(r),Ht=b(_e),pt=c(_e,"LI",{});var tl=f(pt);Jt=T(tl,"If one class is MEMORY, the result is MEMORY."),tl.forEach(r),Kt=b(_e),_t=c(_e,"LI",{});var sl=f(_t);Qt=T(sl,"If one class is INTEGER, the result is INTEGER."),sl.forEach(r),Wt=b(_e),vt=c(_e,"LI",{});var ll=f(vt);Zt=T(ll,"Otherwise the class is SSE."),ll.forEach(r),_e.forEach(r),Ps.forEach(r),at.forEach(r),es=b(O),Ke=c(O,"P",{class:!0});var rl=f(Ke);ts=T(rl,"Post-processing for aggregate types:"),rl.forEach(r),ss=b(O),pe=c(O,"UL",{class:!0});var nt=f(pe);gt=c(nt,"LI",{});var al=f(gt);ls=T(al,`If one of the classes is MEMORY then the entire argument
            is passed in memory.`),al.forEach(r),rs=b(nt),mt=c(nt,"LI",{});var nl=f(mt);as=T(nl,`If the size of the object is larger than two 8-bytes
            and the first 8-byte isn't SSE and if any other 8-byte isn't
            SSEUP then the whole object is passed in memory.`),nl.forEach(r),ns=b(nt),Et=c(nt,"LI",{});var il=f(Et);is=T(il,"If SSEUP is not preceded by SSE or SSEUP, it is converted to SSE."),il.forEach(r),nt.forEach(r),os=b(O),Qe=c(O,"P",{class:!0});var ol=f(Qe);cs=T(ol,"After classification arguments are assigned their registers in order."),ol.forEach(r),fs=b(O),se=c(O,"UL",{class:!0});var ve=f(se);bt=c(ve,"LI",{});var cl=f(bt);hs=T(cl,"If the class is MEMORY, pass it on the stack."),cl.forEach(r),ds=b(ve),We=c(ve,"LI",{});var As=f(We);us=T(As,`If the class is INTEGER, pick the next available register
            from the list:
                `),yt=c(As,"UL",{});var fl=f(yt);St=c(fl,"LI",{});var hl=f(St);ps=T(hl,"%rdi, %rsi, %rdx, %rcx, %r8, %r9,"),hl.forEach(r),fl.forEach(r),As.forEach(r),_s=b(ve),Tt=c(ve,"LI",{});var dl=f(Tt);vs=T(dl,`If the class is SSE, pick the next available register
            from %xmm0 to %xmm7`),dl.forEach(r),gs=b(ve),It=c(ve,"LI",{});var ul=f(It);ms=T(ul,`If the class is SSEUP, pick the next available 8-byte in the
            last used vector register.`),ul.forEach(r),Es=b(ve),Pt=c(ve,"LI",{});var pl=f(Pt);bs=T(pl,`If there are no more registers available for any 8-byte of an
            object, pass the entire object in memory. Previous register
            assignments are discarded.`),pl.forEach(r),ve.forEach(r),ys=b(O),Ze=c(O,"P",{class:!0});var _l=f(Ze);Ss=T(_l,`After registers are assigned, the arguments passed in memory get
        pushed onto the stack in reverse order.`),_l.forEach(r),Ts=b(O),et=c(O,"P",{class:!0});var vl=f(et);Is=T(vl,"*** This is how I understood the ABI. Not necessarily correct."),vl.forEach(r),O.forEach(r),this.h()},h(){R(s,"class","type svelte-1o8gqrm"),R(s,"id","title"),R(d,"class","type svelte-1o8gqrm"),R(d,"id","subtitle"),R(u,"class","text svelte-1o8gqrm"),R(g,"class","text svelte-1o8gqrm"),R(_,"class","text svelte-1o8gqrm"),R(me,"class","text svelte-1o8gqrm"),R(Ee,"class","text svelte-1o8gqrm"),R(be,"class","text svelte-1o8gqrm"),R(Fe,"class","text svelte-1o8gqrm"),R(Le,"class","text svelte-1o8gqrm"),R(He,"class","text svelte-1o8gqrm"),R(ue,"class","text svelte-1o8gqrm"),R(Ke,"class","text svelte-1o8gqrm"),R(pe,"class","text svelte-1o8gqrm"),R(Qe,"class","text svelte-1o8gqrm"),R(se,"class","text svelte-1o8gqrm"),R(Ze,"class","text svelte-1o8gqrm"),R(et,"class","text svelte-1o8gqrm"),R(e,"class","frame svelte-1o8gqrm")},m(At,O){G(At,e,O),t(e,s),t(s,l),t(e,a),t(e,d),t(d,n),t(e,v),t(e,u),t(u,p),t(e,i),t(e,g),t(g,y),t(e,I),t(e,_),t(_,P),t(P,$),t($,w),t(P,A),t(P,k),t(k,C),t(P,Y),t(P,N),t(N,q),t(_,M),t(_,L),t(L,m),t(m,V),t(L,D),t(L,x),t(x,te),t(L,K),t(L,ee),t(ee,re),t(_,ae),t(_,X),t(X,ne),t(ne,ke),t(X,ce),t(X,z),t(z,he),t(X,H),t(X,F),t(F,U),t(_,j),t(_,B),t(B,fe),t(fe,xe),t(B,de),t(B,Re),t(Re,Be),t(B,ie),t(B,De),t(De,Ce),t(e,Ve),t(e,me),t(me,ze),t(e,Ge),t(e,Ee),t(Ee,je),t(e,Xe),t(e,be),t(be,Oe),t(e,Lt),t(e,Fe),t(Fe,Mt),t(e,wt),t(e,Le),t(Le,ot),t(ot,kt),t(Le,Ot),t(Le,ct),t(ct,qt),t(e,Ut),t(e,He),t(He,Yt),t(e,xt),t(e,ue),t(ue,ft),t(ft,Bt),t(ue,Ct),t(ue,ht),t(ht,Vt),t(ue,zt),t(ue,Je),t(Je,Gt),t(Je,le),t(le,dt),t(dt,jt),t(le,Xt),t(le,ut),t(ut,Ft),t(le,Ht),t(le,pt),t(pt,Jt),t(le,Kt),t(le,_t),t(_t,Qt),t(le,Wt),t(le,vt),t(vt,Zt),t(e,es),t(e,Ke),t(Ke,ts),t(e,ss),t(e,pe),t(pe,gt),t(gt,ls),t(pe,rs),t(pe,mt),t(mt,as),t(pe,ns),t(pe,Et),t(Et,is),t(e,os),t(e,Qe),t(Qe,cs),t(e,fs),t(e,se),t(se,bt),t(bt,hs),t(se,ds),t(se,We),t(We,us),t(We,yt),t(yt,St),t(St,ps),t(se,_s),t(se,Tt),t(Tt,vs),t(se,gs),t(se,It),t(It,ms),t(se,Es),t(se,Pt),t(Pt,bs),t(e,ys),t(e,Ze),t(Ze,Ss),t(e,Ts),t(e,et),t(et,Is)},p:oe,i:oe,o:oe,d(At){At&&r(e)}}}class nr extends Ae{constructor(e){super(),Ne(this,e,null,ar,$e,{})}}function ir(h){let e,s,l,a,d,n,v,u,p,i,g,y,I,_,P,$,w,A,k,C,Y;return n=new rr({}),i=new Xl({}),P=new Jl({}),C=new nr({}),{c(){e=o("p"),s=S("amd64 sysv calling convention"),l=E(),a=o("div"),d=o("div"),ye(n.$$.fragment),v=E(),u=o("div"),p=o("div"),ye(i.$$.fragment),g=E(),y=o("div"),I=E(),_=o("div"),ye(P.$$.fragment),$=E(),w=o("div"),A=E(),k=o("div"),ye(C.$$.fragment),this.h()},l(N){e=c(N,"P",{class:!0});var q=f(e);s=T(q,"amd64 sysv calling convention"),q.forEach(r),l=b(N),a=c(N,"DIV",{id:!0,class:!0});var M=f(a);d=c(M,"DIV",{});var L=f(d);Se(n.$$.fragment,L),L.forEach(r),v=b(M),u=c(M,"DIV",{style:!0});var m=f(u);p=c(m,"DIV",{});var V=f(p);Se(i.$$.fragment,V),V.forEach(r),g=b(m),y=c(m,"DIV",{style:!0}),f(y).forEach(r),I=b(m),_=c(m,"DIV",{});var D=f(_);Se(P.$$.fragment,D),D.forEach(r),$=b(m),w=c(m,"DIV",{style:!0}),f(w).forEach(r),A=b(m),k=c(m,"DIV",{});var x=f(k);Se(C.$$.fragment,x),x.forEach(r),m.forEach(r),M.forEach(r),this.h()},h(){R(e,"class","text svelte-fmgthi"),Q(y,"height","32px"),Q(w,"height","32px"),Q(u,"flex-grow","2"),Q(u,"padding-left","32px"),R(a,"id","main"),R(a,"class","svelte-fmgthi")},m(N,q){G(N,e,q),t(e,s),G(N,l,q),G(N,a,q),t(a,d),Te(n,d,null),t(a,v),t(a,u),t(u,p),Te(i,p,null),t(u,g),t(u,y),t(u,I),t(u,_),Te(P,_,null),t(u,$),t(u,w),t(u,A),t(u,k),Te(C,k,null),Y=!0},p:oe,i(N){Y||(J(n.$$.fragment,N),J(i.$$.fragment,N),J(P.$$.fragment,N),J(C.$$.fragment,N),Y=!0)},o(N){Z(n.$$.fragment,N),Z(i.$$.fragment,N),Z(P.$$.fragment,N),Z(C.$$.fragment,N),Y=!1},d(N){N&&r(e),N&&r(l),N&&r(a),Ie(n),Ie(i),Ie(P),Ie(C)}}}function or(h){return xl(ge.subscribe(e=>{for(const s of e)s.update()})),[]}class cr extends Ae{constructor(e){super(),Ne(this,e,or,ir,$e,{})}}function fr(h){let e,s;return e=new cr({}),{c(){ye(e.$$.fragment)},l(l){Se(e.$$.fragment,l)},m(l,a){Te(e,l,a),s=!0},p:oe,i(l){s||(J(e.$$.fragment,l),s=!0)},o(l){Z(e.$$.fragment,l),s=!1},d(l){Ie(e,l)}}}class ur extends Ae{constructor(e){super(),Ne(this,e,null,fr,$e,{})}}export{ur as component};
