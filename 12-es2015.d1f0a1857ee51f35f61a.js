(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{mhqm:function(n,e,t){"use strict";t.r(e),t.d(e,"SampleFiveModule",function(){return w});var c=t("An66"),o=t("1VvW"),a=t("5Q2+"),i=t("zMYQ"),s=t("umqh"),l=t("kZht"),r=t("mcff"),u=t("aJOL"),b=t("hCLc"),d=t("1ZKX"),h=t("oTne"),p=t("BL99");function m(n,e){if(1&n&&(l.Xb(0,"span"),l.Kc(1),l.Wb()),2&n){l.jc();const n=l.yc(19);l.Eb(1),l.Nc(" (",null==n.source?null:n.source.length,"x",null==n.displayedColumns?null:n.displayedColumns.length,")")}}const g=function(){return["guid"]};let f=(()=>{class n{constructor(n,e){this.dialog=n,this.cd=e,this.data=[]}ngOnInit(){i.a.generator(1e3,40).then(n=>{this.data=n,this.cd.detectChanges()})}ngAfterViewInit(){document.querySelectorAll("pre code").forEach(n=>{hljs.highlightBlock(n)})}showSample(){this.dialog.open(s.a,{data:{title:"Overview resizable table",description:"",code:'\n<ngx-table-builder [source]="data">\n    \x3c!--\n       <ngx-options /> - declaration common options for columns\n\n       Also you can customize your columns manually\n       <ngx-column key="myKey" [resizable]="true">...</ngx-column>\n    --\x3e\n    <ngx-options is-draggable></ngx-options>\n</ngx-table-builder>\n\n                '},height:"350px",width:"700px"})}updatedSchema(n){console.log(n)}}return n.\u0275fac=function(e){return new(e||n)(l.Qb(r.b),l.Qb(l.h))},n.\u0275cmp=l.Kb({type:n,selectors:[["sample-five"]],decls:27,vars:7,consts:[[1,"simple-toolbar"],[4,"ngIf"],["mat-raised-button","",1,"show-simple",3,"click"],[3,"source","row-height","exclude-keys","vertical-border","schemaChanges"],["table",""],["is-draggable","",3,"nowrap"],["key","id","width","80","important-template","","sticky",""]],template:function(n,e){if(1&n&&(l.Xb(0,"mat-toolbar",0),l.Kc(1,"\n    "),l.Xb(2,"span"),l.Kc(3,"\n        Example resizing\n        "),l.Ic(4,m,2,2,"span",1),l.Kc(5,"\n    "),l.Wb(),l.Kc(6,"\n    "),l.Xb(7,"button",2),l.fc("click",function(){return e.showSample()}),l.Kc(8,"show code sample"),l.Wb(),l.Kc(9,"\n"),l.Wb(),l.Kc(10,"\n\n"),l.Xb(11,"b"),l.Kc(12,"Default col width"),l.Wb(),l.Kc(13,": 150px\n"),l.Sb(14,"br"),l.Kc(15,"\n"),l.Sb(16,"br"),l.Kc(17,"\n\n"),l.Xb(18,"ngx-table-builder",3,4),l.fc("schemaChanges",function(n){return e.updatedSchema(n)}),l.Kc(20,"\n    "),l.Kc(21,"\n    "),l.Sb(22,"ngx-options",5),l.Kc(23,"\n\n    "),l.Sb(24,"ngx-column",6),l.Kc(25,"\n"),l.Wb(),l.Kc(26,"\n")),2&n){const n=l.yc(19);l.Eb(4),l.qc("ngIf",n.isRendered),l.Eb(14),l.qc("source",e.data)("row-height",55)("exclude-keys",l.sc(6,g))("vertical-border",!1),l.Eb(4),l.qc("nowrap",!1)}},directives:[u.a,c.m,b.a,d.a,h.a,p.a],encapsulation:2,changeDetection:0}),n})(),w=(()=>{class n{}return n.\u0275mod=l.Ob({type:n}),n.\u0275inj=l.Nb({factory:function(e){return new(e||n)},imports:[[c.b,a.a,o.b.forChild([{path:"",component:f}])]]}),n})()}}]);