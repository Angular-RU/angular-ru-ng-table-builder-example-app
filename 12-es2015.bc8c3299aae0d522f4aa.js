(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{mhqm:function(n,e,t){"use strict";t.r(e),t.d(e,"SampleFiveModule",function(){return w});var c=t("An66"),o=t("1VvW"),a=t("5Q2+"),s=t("zMYQ"),i=t("umqh"),l=t("kZht"),r=t("mcff"),u=t("aJOL"),b=t("hCLc"),d=t("1ZKX"),h=t("oTne"),p=t("BL99");function m(n,e){if(1&n&&(l.Zb(0,"span"),l.Kc(1),l.Yb()),2&n){l.lc();const n=l.Ac(19);l.Gb(1),l.Nc(" (",null==n.source?null:n.source.length,"x",null==n.displayedColumns?null:n.displayedColumns.length,")")}}const g=function(){return["guid"]};let f=(()=>{class n{constructor(n,e){this.dialog=n,this.cd=e,this.data=[]}ngOnInit(){s.a.generator(1e3,40).then(n=>{this.data=n,this.cd.detectChanges()})}ngAfterViewInit(){document.querySelectorAll("pre code").forEach(n=>{hljs.highlightBlock(n)})}showSample(){this.dialog.open(i.a,{data:{title:"Overview resizable table",description:"",code:'\n<ngx-table-builder [source]="data">\n    \x3c!--\n       <ngx-options /> - declaration common options for columns\n\n       Also you can customize your columns manually\n       <ngx-column key="myKey" [resizable]="true">...</ngx-column>\n    --\x3e\n    <ngx-options is-draggable></ngx-options>\n</ngx-table-builder>\n\n                '},height:"350px",width:"700px"})}updatedSchema(n){console.log(n)}}return n.\u0275fac=function(e){return new(e||n)(l.Sb(r.b),l.Sb(l.h))},n.\u0275cmp=l.Mb({type:n,selectors:[["sample-five"]],decls:27,vars:7,consts:[[1,"simple-toolbar"],[4,"ngIf"],["mat-raised-button","",1,"show-simple",3,"click"],[3,"source","row-height","exclude-keys","vertical-border","schemaChanges"],["table",""],["is-draggable","",3,"nowrap"],["key","id","width","80","important-template","","sticky",""]],template:function(n,e){if(1&n&&(l.Zb(0,"mat-toolbar",0),l.Kc(1,"\n    "),l.Zb(2,"span"),l.Kc(3,"\n        Example resizing\n        "),l.Ic(4,m,2,2,"span",1),l.Kc(5,"\n    "),l.Yb(),l.Kc(6,"\n    "),l.Zb(7,"button",2),l.hc("click",function(){return e.showSample()}),l.Kc(8,"show code sample"),l.Yb(),l.Kc(9,"\n"),l.Yb(),l.Kc(10,"\n\n"),l.Zb(11,"b"),l.Kc(12,"Default col width"),l.Yb(),l.Kc(13,": 150px\n"),l.Ub(14,"br"),l.Kc(15,"\n"),l.Ub(16,"br"),l.Kc(17,"\n\n"),l.Zb(18,"ngx-table-builder",3,4),l.hc("schemaChanges",function(n){return e.updatedSchema(n)}),l.Kc(20,"\n    "),l.Kc(21,"\n    "),l.Ub(22,"ngx-options",5),l.Kc(23,"\n\n    "),l.Ub(24,"ngx-column",6),l.Kc(25,"\n"),l.Yb(),l.Kc(26,"\n")),2&n){const n=l.Ac(19);l.Gb(4),l.sc("ngIf",n.isRendered),l.Gb(14),l.sc("source",e.data)("row-height",55)("exclude-keys",l.uc(6,g))("vertical-border",!1),l.Gb(4),l.sc("nowrap",!1)}},directives:[u.a,c.m,b.a,d.a,h.a,p.a],encapsulation:2,changeDetection:0}),n})(),w=(()=>{class n{}return n.\u0275mod=l.Qb({type:n}),n.\u0275inj=l.Pb({factory:function(e){return new(e||n)},imports:[[c.b,a.a,o.b.forChild([{path:"",component:f}])]]}),n})()}}]);