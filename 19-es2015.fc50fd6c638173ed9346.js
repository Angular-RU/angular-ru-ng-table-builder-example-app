(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{AKJP:function(n,t,e){"use strict";e.r(t),e.d(t,"SampleSixModule",function(){return x});var o=e("An66"),s=e("1VvW"),c=e("5Q2+"),a=e("zMYQ"),r=e("umqh"),i=e("kZht"),l=e("mcff"),d=e("aJOL"),b=e("UDV5"),p=e("3kIJ"),u=e("hCLc"),h=e("1ZKX"),g=e("25ch"),m=e("QAKa"),f=e("oTne");const K=function(){return{standalone:!0}},k=function(){return{id:"desc"}};let w=(()=>{class n{constructor(n,t){this.dialog=n,this.cd=t,this.data=[],this.skipSort=!1}ngOnInit(){a.a.generator(1e4,50).then(n=>{this.data=n,this.cd.detectChanges()})}ngAfterViewInit(){document.querySelectorAll("pre code").forEach(n=>{hljs.highlightBlock(n)})}sortChanges(n){console.log("orderedField",n)}showSample(){this.dialog.open(r.a,{data:{title:"Overview sortable table",description:"",code:'<ngx-table-builder [source]="data"  [sort-types]="{ myKey: \'asc\' }"></ngx-table-builder>'},height:"350px",width:"700px"})}}return n.\u0275fac=function(t){return new(t||n)(i.Qb(l.b),i.Qb(i.h))},n.\u0275cmp=i.Kb({type:n,selectors:[["sample-six"]],decls:23,vars:7,consts:[[1,"simple-toolbar"],[1,"regenerate",3,"ngModel","ngModelOptions","ngModelChange"],["mat-raised-button","",1,"show-simple",3,"click"],[3,"source","skip-sort","sort-types","sortChanges"],["is-sortable",""]],template:function(n,t){1&n&&(i.Xb(0,"mat-toolbar",0),i.Kc(1,"\n    "),i.Xb(2,"span"),i.Kc(3,"\n        Example sorting\n\n        "),i.Xb(4,"mat-checkbox",1),i.fc("ngModelChange",function(n){return t.skipSort=n}),i.Kc(5,"\n            Skip internal sort\n        "),i.Wb(),i.Kc(6,"\n    "),i.Wb(),i.Kc(7,"\n\n    "),i.Xb(8,"button",2),i.fc("click",function(){return t.showSample()}),i.Kc(9,"show code sample"),i.Wb(),i.Kc(10,"\n"),i.Wb(),i.Kc(11,"\n\n"),i.Xb(12,"ngx-table-builder",3),i.fc("sortChanges",function(n){return t.sortChanges(n)}),i.Kc(13,"\n    "),i.Xb(14,"ngx-empty"),i.Kc(15,"No data"),i.Wb(),i.Kc(16,"\n    "),i.Xb(17,"ngx-source-null"),i.Kc(18,"Loading"),i.Wb(),i.Kc(19,"\n    "),i.Sb(20,"ngx-options",4),i.Kc(21,"\n"),i.Wb(),i.Kc(22,"\n")),2&n&&(i.Eb(4),i.qc("ngModel",t.skipSort)("ngModelOptions",i.sc(5,K)),i.Eb(8),i.qc("source",t.data)("skip-sort",t.skipSort)("sort-types",i.sc(6,k)))},directives:[d.a,b.a,p.k,p.n,u.a,h.a,g.a,m.a,f.a],encapsulation:2,changeDetection:0}),n})(),x=(()=>{class n{}return n.\u0275mod=i.Ob({type:n}),n.\u0275inj=i.Nb({factory:function(t){return new(t||n)},imports:[[o.b,c.a,s.b.forChild([{path:"",component:w}])]]}),n})()}}]);