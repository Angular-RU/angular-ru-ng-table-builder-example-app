(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"8ydk":function(l,n,t){"use strict";t.r(n);var a=t("8Y7J");class b{}var u=t("t68o"),o=t("xYTU"),e=t("M+Kz"),i=t("COKN"),c=t("pMnS"),r=t("Dg70"),s=t("BL99"),d=t("ctyY"),m=t("j5U8"),p=t("bujt"),D=t("Fwaw"),h=t("5GAg"),f=t("omvX"),g=t("Mr+X"),y=t("Gi4r"),w=t("FbN9"),N=t("BzsH"),F=t("/HVE"),k=t("SVse"),L=t("/+Uf"),M=t("iw8E"),v=t("tB7w"),j=t("LfaC"),x=t("qZCv"),T=t("AsIM"),O=t("PkaT"),_=t("S8xl"),K=t("bp/E"),A=t("1ZKX"),P=t("oFYP"),q=t("zMYQ"),I=t("qUmT");class ${constructor(l,n,t){this.cd=l,this.dialog=n,this.ngZone=t,this.data=[],this.idInterval=null}ngOnInit(){this.ngZone.runOutsideAngular(()=>{this.idInterval=window.setInterval(()=>{this.updateTable()},14500)})}ngOnDestroy(){window.clearInterval(this.idInterval)}add(){this.updateTable()}delete(l){this.data=this.data.filter(n=>n!==l),Object(P.a)(this.cd)}edit(l){this.ngZone.run(()=>{this.dialog.open(I.a,{data:l,width:"1024px"}).afterClosed().subscribe(l=>{l&&(this.data=this.data.map(n=>n.id===l.id?Object.assign({},l):n),Object(P.a)(this.cd))})})}updateTable(){const l=this.data.length?Math.max(...this.data.map(l=>l.id)):0;q.a.generator(1,10,l).then(l=>{this.data=this.data.concat(l),this.cd.detectChanges()})}}var C=t("s6ns"),H=a.rb({encapsulation:2,styles:[],data:{}});function R(l){return a.Pb(0,[(l()(),a.Nb(0,null,["",""]))],null,(function(l,n){l(n,0,0,n.parent.context.$implicit)}))}function S(l){return a.Pb(0,[(l()(),a.Nb(0,null,["",""]))],null,(function(l,n){l(n,0,0,n.context.$implicit)}))}function Y(l){return a.Pb(0,[(l()(),a.tb(0,0,null,null,10,"ngx-column",[],null,null,null,r.b,r.a)),a.sb(1,49152,[[3,4]],2,s.a,[],{key:[0,"key"]},null),a.Lb(603979776,8,{th:0}),a.Lb(603979776,9,{td:0}),(l()(),a.Nb(-1,null,["\n        "])),(l()(),a.ib(0,null,null,1,null,R)),a.sb(6,16384,[[8,4]],0,d.a,[[2,a.L]],{type:[0,"type"]},null),(l()(),a.Nb(-1,null,["\n        "])),(l()(),a.ib(0,null,null,1,null,S)),a.sb(9,16384,[[9,4]],0,m.a,[[2,a.L]],{type:[0,"type"]},null),(l()(),a.Nb(-1,null,["\n    "]))],(function(l,n){l(n,1,0,n.context.$implicit),l(n,6,0,""),l(n,9,0,"")}),null)}function z(l){return a.Pb(0,[(l()(),a.Nb(-1,null,["\n            "])),(l()(),a.tb(1,0,null,null,4,"button",[["class","my-action"],["mat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,t){var a=!0;return"click"===n&&(a=!1!==l.component.edit(l.context.$implicit)&&a),a}),p.b,p.a)),a.sb(2,180224,null,0,D.b,[a.k,h.e,[2,f.a]],null,null),(l()(),a.tb(3,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,g.b,g.a)),a.sb(4,9158656,null,0,y.b,[a.k,y.d,[8,null],[2,y.a],[2,a.l]],null,null),(l()(),a.Nb(-1,0,["edit"])),(l()(),a.Nb(-1,null,["\n            "])),(l()(),a.tb(7,0,null,null,4,"button",[["class","my-action"],["mat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,t){var a=!0;return"click"===n&&(a=!1!==l.component.delete(l.context.$implicit)&&a),a}),p.b,p.a)),a.sb(8,180224,null,0,D.b,[a.k,h.e,[2,f.a]],null,null),(l()(),a.tb(9,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,g.b,g.a)),a.sb(10,9158656,null,0,y.b,[a.k,y.d,[8,null],[2,y.a],[2,a.l]],null,null),(l()(),a.Nb(-1,0,["delete"])),(l()(),a.Nb(-1,null,["\n        "]))],(function(l,n){l(n,4,0),l(n,10,0)}),(function(l,n){l(n,1,0,a.Fb(n,2).disabled||null,"NoopAnimations"===a.Fb(n,2)._animationMode),l(n,3,0,a.Fb(n,4).inline,"primary"!==a.Fb(n,4).color&&"accent"!==a.Fb(n,4).color&&"warn"!==a.Fb(n,4).color),l(n,7,0,a.Fb(n,8).disabled||null,"NoopAnimations"===a.Fb(n,8)._animationMode),l(n,9,0,a.Fb(n,10).inline,"primary"!==a.Fb(n,10).color&&"accent"!==a.Fb(n,10).color&&"warn"!==a.Fb(n,10).color)}))}function B(l){return a.Pb(2,[(l()(),a.tb(0,0,null,null,13,"div",[],null,null,null,null,null)),(l()(),a.Nb(-1,null,["\n    "])),(l()(),a.tb(2,0,null,null,10,"mat-toolbar",[["class","simple-toolbar mat-toolbar"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,w.b,w.a)),a.sb(3,4243456,null,1,N.a,[a.k,F.a,k.d],null,null),a.Lb(603979776,1,{_toolbarRows:1}),(l()(),a.Nb(-1,0,["\n        "])),(l()(),a.tb(6,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),a.Nb(-1,null,["Auto push"])),(l()(),a.Nb(-1,0,["\n\n        "])),(l()(),a.tb(9,0,null,0,2,"button",[["class","regenerate"],["mat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,t){var a=!0;return"click"===n&&(a=!1!==l.component.add()&&a),a}),p.b,p.a)),a.sb(10,180224,null,0,D.b,[a.k,h.e,[2,f.a]],null,null),(l()(),a.Nb(-1,0,["Add"])),(l()(),a.Nb(-1,0,["\n    "])),(l()(),a.Nb(-1,null,["\n"])),(l()(),a.Nb(-1,null,["\n\n"])),(l()(),a.tb(15,0,null,null,27,"ngx-table-builder",[],null,null,null,L.b,L.a)),a.Kb(4608,null,M.a,M.a,[]),a.Kb(4608,null,v.a,v.a,[j.a,a.y]),a.Kb(135680,null,x.a,x.a,[a.y]),a.Kb(4608,null,T.a,T.a,[]),a.Kb(4608,null,O.a,O.a,[]),a.Kb(4608,null,_.a,_.a,[a.q]),a.Kb(4608,null,K.a,K.a,[M.a]),a.sb(23,14401536,[["table",4]],6,A.a,[a.h,a.q],{source:[0,"source"]},null),a.Lb(603979776,2,{columnOptions:0}),a.Lb(603979776,3,{columnTemplates:1}),a.Lb(603979776,4,{contextMenuTemplate:0}),a.Lb(603979776,5,{headerTemplate:0}),a.Lb(603979776,6,{footerTemplate:0}),a.Lb(603979776,7,{filterTemplate:0}),(l()(),a.Nb(-1,null,["\n    "])),(l()(),a.ib(16777216,null,null,1,null,Y)),a.sb(32,278528,null,0,k.l,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"]},null),(l()(),a.Nb(-1,null,["\n\n    "])),(l()(),a.tb(34,0,null,null,7,"ngx-column",[["custom-key",""],["empty-head",""],["key","action"],["sticky-end",""],["width","140"]],null,null,null,r.b,r.a)),a.sb(35,49152,[[3,4]],2,s.a,[],{width:[0,"width"],key:[1,"key"],emptyHead:[2,"emptyHead"],customKey:[3,"customKey"],stickyRight:[4,"stickyRight"]},null),a.Lb(603979776,10,{th:0}),a.Lb(603979776,11,{td:0}),(l()(),a.Nb(-1,null,["\n        "])),(l()(),a.ib(0,null,null,1,null,z)),a.sb(40,16384,[[11,4]],0,m.a,[[2,a.L]],{row:[0,"row"],type:[1,"type"]},null),(l()(),a.Nb(-1,null,["\n    "])),(l()(),a.Nb(-1,null,["\n"])),(l()(),a.Nb(-1,null,["\n"]))],(function(l,n){l(n,23,0,n.component.data),l(n,32,0,a.Fb(n,23).modelColumnKeys),l(n,35,0,"140","action","","",""),l(n,40,0,"","")}),(function(l,n){l(n,2,0,a.Fb(n,3)._toolbarRows.length>0,0===a.Fb(n,3)._toolbarRows.length),l(n,9,0,a.Fb(n,10).disabled||null,"NoopAnimations"===a.Fb(n,10)._animationMode)}))}function Q(l){return a.Pb(0,[(l()(),a.tb(0,0,null,null,1,"sample-first-second",[],null,null,null,B,H)),a.sb(1,245760,null,0,$,[a.h,C.e,a.y],null,null)],(function(l,n){l(n,1,0)}),null)}var Z=a.pb("sample-first-second",$,Q,{},{},[]),J=t("Mc5n"),U=t("hOhj"),V=t("BSYy"),E=t("s7LF"),X=t("POq0"),G=t("Xd0L"),W=t("QQfA"),ll=t("IP0z"),nl=t("gavF"),tl=t("JjoW"),al=t("NHUw"),bl=t("cUpR"),ul=t("oapL"),ol=t("HsOI"),el=t("ZwOa"),il=t("zMNK"),cl=t("r0V8"),rl=t("BV1i"),sl=t("02hT"),dl=t("Q+lL"),ml=t("igqZ"),pl=t("W5yJ"),Dl=t("dFDH"),hl=t("zQui"),fl=t("8rEH"),gl=t("rWV4"),yl=t("5Q2+"),wl=t("iInd");t.d(n,"SampleFirstSecondModuleNgFactory",(function(){return Nl}));var Nl=a.qb(b,[],(function(l){return a.Cb([a.Db(512,a.j,a.ab,[[8,[u.a,o.a,o.b,e.a,i.a,c.a,Z]],[3,a.j],a.w]),a.Db(4608,k.o,k.n,[a.t,[2,k.G]]),a.Db(4608,J.g,J.g,[k.d,a.y,U.e,J.i]),a.Db(4608,V.a,V.a,[[2,a.y]]),a.Db(4608,j.a,j.a,[]),a.Db(4608,E.t,E.t,[]),a.Db(4608,X.c,X.c,[]),a.Db(4608,G.b,G.b,[]),a.Db(4608,E.e,E.e,[]),a.Db(4608,W.c,W.c,[W.i,W.e,a.j,W.h,W.f,a.q,a.y,k.d,ll.b,[2,k.i]]),a.Db(5120,W.j,W.k,[W.c]),a.Db(5120,nl.c,nl.j,[W.c]),a.Db(5120,C.c,C.d,[W.c]),a.Db(135680,C.e,C.e,[W.c,a.q,[2,k.i],[2,C.b],C.c,[3,C.e],W.e]),a.Db(5120,tl.a,tl.b,[W.c]),a.Db(1073742336,k.b,k.b,[]),a.Db(1073742336,J.h,J.h,[]),a.Db(1073742336,al.a,al.a,[]),a.Db(1073742336,ll.a,ll.a,[]),a.Db(1073742336,G.j,G.j,[[2,G.c],[2,bl.f]]),a.Db(1073742336,F.b,F.b,[]),a.Db(1073742336,G.s,G.s,[]),a.Db(1073742336,D.c,D.c,[]),a.Db(1073742336,E.s,E.s,[]),a.Db(1073742336,E.i,E.i,[]),a.Db(1073742336,ul.c,ul.c,[]),a.Db(1073742336,X.d,X.d,[]),a.Db(1073742336,ol.d,ol.d,[]),a.Db(1073742336,el.b,el.b,[]),a.Db(1073742336,E.r,E.r,[]),a.Db(1073742336,il.g,il.g,[]),a.Db(1073742336,U.c,U.c,[]),a.Db(1073742336,W.g,W.g,[]),a.Db(1073742336,nl.i,nl.i,[]),a.Db(1073742336,nl.f,nl.f,[]),a.Db(1073742336,C.h,C.h,[]),a.Db(1073742336,cl.d,cl.d,[]),a.Db(1073742336,cl.c,cl.c,[]),a.Db(1073742336,rl.h,rl.h,[]),a.Db(1073742336,N.b,N.b,[]),a.Db(1073742336,sl.b,sl.b,[]),a.Db(1073742336,G.k,G.k,[]),a.Db(1073742336,G.q,G.q,[]),a.Db(1073742336,dl.c,dl.c,[]),a.Db(1073742336,ml.a,ml.a,[]),a.Db(1073742336,G.o,G.o,[]),a.Db(1073742336,tl.d,tl.d,[]),a.Db(1073742336,pl.c,pl.c,[]),a.Db(1073742336,Dl.d,Dl.d,[]),a.Db(1073742336,y.c,y.c,[]),a.Db(1073742336,hl.o,hl.o,[]),a.Db(1073742336,fl.a,fl.a,[]),a.Db(1073742336,h.a,h.a,[]),a.Db(1073742336,gl.j,gl.j,[]),a.Db(1073742336,yl.a,yl.a,[]),a.Db(1073742336,wl.m,wl.m,[[2,wl.r],[2,wl.k]]),a.Db(1073742336,b,b,[]),a.Db(1024,wl.i,(function(){return[[{path:"",component:$}]]}),[])])}))},Dg70:function(l,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var a=t("8Y7J"),b=(t("BL99"),a.rb({encapsulation:2,styles:[],data:{}}));function u(l){return a.Pb(2,[],null,null)}},zMYQ:function(l,n,t){"use strict";t.d(n,"a",(function(){return b}));var a=t("LfaC");class b{static generator(l,n,t=0){return(new a.a).run(l=>class{static generateTable(l,n,t){return new Array(l).fill(0).map((a,b)=>{const u=t+b+1,o={id:u,reverseId:1024*Math.round(Math.random()+512*l+n+10*t),name:"Random - "+(100*(Math.random()+1)).toFixed(0)+"__"+u,description:"Random - "+(100*(Math.random()+1)).toFixed(0)+"__"+u,guid:"5cdae5b2ba0a57f709b72142__"+u};if(n>6){o["About Big Text And More Powerful Label Fugiat Tempor Sunt Nostrud"]=[...Array(Math.ceil(0+1e3*Math.random()))].map(()=>(~~(36*Math.random())).toString(36)).join("");for(let l=6;l<=n-1;l++)o["column-"+l]=`$row-${u} $col-${l}`}return o})}}.generateTable(l.rows,l.cols,l.start),{rows:l,cols:n,start:t})}}}}]);