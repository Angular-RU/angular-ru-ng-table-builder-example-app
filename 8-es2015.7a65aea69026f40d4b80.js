(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{LEOj:function(n,s,e){"use strict";e.r(s),e.d(s,"SampleEighteenModule",function(){return p});var t=e("An66"),a=e("1VvW"),c=e("5Q2+"),o=e("zMYQ"),i=e("umqh"),l=e("kZht"),r=e("mcff"),h=e("aJOL"),b=e("hCLc"),g=e("WGpx");let d=(()=>{class n{constructor(n,s){this.dialog=n,this.cd=s,this.data=[],this.rowCssClasses={1:["highlight"],3:["highlight"]}}ngOnInit(){o.a.generator(50,5).then(n=>{this.data=n,this.cd.detectChanges()})}showSample(){this.dialog.open(i.a,{data:{title:"Overview sortable table",description:"",code:'\n<ngx-table-builder\n    [source]="data"\n    [row-css-classes]="rowCssClasses"\n    primary-key="id"\n>\n    \x3c!-- rowCssClasses === { 1: [\'highlight\'], 3: [\'highlight\'] } --\x3e\n    <ngx-empty>No data</ngx-empty>\n    <ngx-source-null>Loading</ngx-source-null>\n    <ngx-options is-sortable></ngx-options>\n</ngx-table-builder>\n                '},height:"350px",width:"700px"})}}return n.\u0275fac=function(s){return new(s||n)(l.Ob(r.b),l.Ob(l.h))},n.\u0275cmp=l.Ib({type:n,selectors:[["sample-eighteen"]],decls:20,vars:2,consts:[[1,"simple-toolbar"],["mat-raised-button","",1,"show-simple",3,"click"],["primary-key","id",3,"source","row-css-classes"],["is-sortable",""]],template:function(n,s){1&n&&(l.Vb(0,"mat-toolbar",0),l.Gc(1,"\n    "),l.Vb(2,"span"),l.Gc(3," Example cell css classes "),l.Ub(),l.Gc(4,"\n\n    "),l.Vb(5,"button",1),l.dc("click",function(){return s.showSample()}),l.Gc(6,"show code sample"),l.Ub(),l.Gc(7,"\n"),l.Ub(),l.Gc(8,"\n\n"),l.Vb(9,"ngx-table-builder",2),l.Gc(10,"\n    "),l.Vb(11,"ngx-empty"),l.Gc(12,"No data"),l.Ub(),l.Gc(13,"\n    "),l.Vb(14,"ngx-source-null"),l.Gc(15,"Loading"),l.Ub(),l.Gc(16,"\n    "),l.Qb(17,"ngx-options",3),l.Gc(18,"\n"),l.Ub(),l.Gc(19,"\n")),2&n&&(l.Cb(9),l.oc("source",s.data)("row-css-classes",s.rowCssClasses))},directives:[h.a,b.a,g.m,g.d,g.k,g.j],styles:["\n            .highlight {\n                background: lightgreen;\n            }\n        "],encapsulation:2,changeDetection:0}),n})(),p=(()=>{class n{}return n.\u0275mod=l.Mb({type:n}),n.\u0275inj=l.Lb({factory:function(s){return new(s||n)},imports:[[t.b,c.a,a.b.forChild([{path:"",component:d}])]]}),n})()}}]);