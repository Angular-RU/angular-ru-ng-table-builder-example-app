(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{AKJP:function(t,n,e){"use strict";e.r(n),e.d(n,"SampleSixModule",function(){return G});var o=e("An66"),s=e("1VvW"),c=e("5Q2+"),r=e("zMYQ"),i=e("umqh"),a=e("kZht"),d=e("mcff"),l=e("aJOL"),b=e("hCLc"),p=e("UDV5"),u=e("3kIJ"),h=e("WGpx");const g=function(){return{standalone:!0}},m=function(){return{id:"asc"}},k=function(){return{id:"desc"}};let f=(()=>{class t{constructor(t,n){this.dialog=t,this.cd=n,this.sortByIdDirection=!0,this.data=[],this.skipSort=!1}ngOnInit(){r.a.generator(1e4,50).then(t=>{this.data=t,this.cd.detectChanges()})}ngAfterViewInit(){document.querySelectorAll("pre code").forEach(t=>{hljs.highlightBlock(t)})}sortChanges(t){console.log("orderedField",t)}showSample(){this.dialog.open(i.a,{data:{title:"Overview sortable table",description:"",code:'\n<ngx-table-builder\n    [source]="data"\n    [skip-sort]="skipSort"\n    [sort-types]="sortByIdDirection ? { id: \'asc\' } : { id: \'desc\' }"\n    (sortChanges)="sortChanges($event)"\n></ngx-table-builder>'},height:"350px",width:"700px"})}}return t.\u0275fac=function(n){return new(n||t)(a.Ob(d.b),a.Ob(a.h))},t.\u0275cmp=a.Ib({type:t,selectors:[["sample-six"]],decls:26,vars:8,consts:[[1,"simple-toolbar"],["mat-raised-button","",3,"click"],[1,"regenerate",3,"ngModel","ngModelOptions","ngModelChange"],["mat-raised-button","",1,"show-simple",3,"click"],[3,"source","skip-sort","sort-types","sortChanges"],["is-sortable",""]],template:function(t,n){1&t&&(a.Vb(0,"mat-toolbar",0),a.Gc(1,"\n    "),a.Vb(2,"span"),a.Gc(3,"\n        Example sorting\n\n        "),a.Vb(4,"button",1),a.dc("click",function(){return n.sortByIdDirection=!n.sortByIdDirection}),a.Gc(5,"Toggle sort by ID"),a.Ub(),a.Gc(6,"\n        "),a.Vb(7,"mat-checkbox",2),a.dc("ngModelChange",function(t){return n.skipSort=t}),a.Gc(8,"\n            Skip internal sort\n        "),a.Ub(),a.Gc(9,"\n    "),a.Ub(),a.Gc(10,"\n\n    "),a.Vb(11,"button",3),a.dc("click",function(){return n.showSample()}),a.Gc(12,"show code sample"),a.Ub(),a.Gc(13,"\n"),a.Ub(),a.Gc(14,"\n\n"),a.Vb(15,"ngx-table-builder",4),a.dc("sortChanges",function(t){return n.sortChanges(t)}),a.Gc(16,"\n    "),a.Vb(17,"ngx-empty"),a.Gc(18,"No data"),a.Ub(),a.Gc(19,"\n    "),a.Vb(20,"ngx-source-null"),a.Gc(21,"Loading"),a.Ub(),a.Gc(22,"\n    "),a.Qb(23,"ngx-options",5),a.Gc(24,"\n"),a.Ub(),a.Gc(25,"\n")),2&t&&(a.Cb(7),a.oc("ngModel",n.skipSort)("ngModelOptions",a.qc(5,g)),a.Cb(8),a.oc("source",n.data)("skip-sort",n.skipSort)("sort-types",n.sortByIdDirection?a.qc(6,m):a.qc(7,k)))},directives:[l.a,b.a,p.a,u.k,u.n,h.m,h.d,h.k,h.j],encapsulation:2,changeDetection:0}),t})(),G=(()=>{class t{}return t.\u0275mod=a.Mb({type:t}),t.\u0275inj=a.Lb({factory:function(n){return new(n||t)},imports:[[o.b,c.a,s.b.forChild([{path:"",component:f}])]]}),t})()}}]);