(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{mhqm:function(n,e,t){"use strict";t.r(e),t.d(e,"SampleFiveModule",function(){return w});var o=t("An66"),c=t("1VvW"),a=t("5Q2+"),i=t("zMYQ"),r=t("umqh"),l=t("kZht"),s=t("mcff"),u=t("aJOL"),b=t("hCLc"),d=t("1ZKX"),p=t("oTne"),h=t("BL99");function m(n,e){if(1&n&&(l.Vb(0,"span"),l.Gc(1),l.Ub()),2&n){l.hc();var t=l.wc(19);l.Cb(1),l.Jc(" (",null==t.source?null:t.source.length,"x",null==t.displayedColumns?null:t.displayedColumns.length,")")}}var g=function(){return["guid"]},f=function(){function n(n,e){this.dialog=n,this.cd=e,this.data=[]}return n.prototype.ngOnInit=function(){var n=this;i.a.generator(1e3,40).then(function(e){n.data=e,n.cd.detectChanges()})},n.prototype.ngAfterViewInit=function(){document.querySelectorAll("pre code").forEach(function(n){hljs.highlightBlock(n)})},n.prototype.showSample=function(){this.dialog.open(r.a,{data:{title:"Overview resizable table",description:"",code:'\n<ngx-table-builder [source]="data">\n    \x3c!--\n       <ngx-options /> - declaration common options for columns\n\n       Also you can customize your columns manually\n       <ngx-column key="myKey" [resizable]="true">...</ngx-column>\n    --\x3e\n    <ngx-options is-draggable></ngx-options>\n</ngx-table-builder>\n\n                '},height:"350px",width:"700px"})},n.prototype.updatedSchema=function(n){console.log(n)},n.\u0275fac=function(e){return new(e||n)(l.Ob(s.b),l.Ob(l.h))},n.\u0275cmp=l.Ib({type:n,selectors:[["sample-five"]],decls:27,vars:7,consts:[[1,"simple-toolbar"],[4,"ngIf"],["mat-raised-button","",1,"show-simple",3,"click"],[3,"source","row-height","exclude-keys","vertical-border","schemaChanges"],["table",""],["is-draggable","",3,"nowrap"],["key","id","width","80","important-template","","sticky",""]],template:function(n,e){if(1&n&&(l.Vb(0,"mat-toolbar",0),l.Gc(1,"\n    "),l.Vb(2,"span"),l.Gc(3,"\n        Example resizing\n        "),l.Ec(4,m,2,2,"span",1),l.Gc(5,"\n    "),l.Ub(),l.Gc(6,"\n    "),l.Vb(7,"button",2),l.dc("click",function(){return e.showSample()}),l.Gc(8,"show code sample"),l.Ub(),l.Gc(9,"\n"),l.Ub(),l.Gc(10,"\n\n"),l.Vb(11,"b"),l.Gc(12,"Default col width"),l.Ub(),l.Gc(13,": 150px\n"),l.Qb(14,"br"),l.Gc(15,"\n"),l.Qb(16,"br"),l.Gc(17,"\n\n"),l.Vb(18,"ngx-table-builder",3,4),l.dc("schemaChanges",function(n){return e.updatedSchema(n)}),l.Gc(20,"\n    "),l.Gc(21,"\n    "),l.Qb(22,"ngx-options",5),l.Gc(23,"\n\n    "),l.Qb(24,"ngx-column",6),l.Gc(25,"\n"),l.Ub(),l.Gc(26,"\n")),2&n){var t=l.wc(19);l.Cb(4),l.oc("ngIf",t.isRendered),l.Cb(14),l.oc("source",e.data)("row-height",55)("exclude-keys",l.qc(6,g))("vertical-border",!1),l.Cb(4),l.oc("nowrap",!1)}},directives:[u.a,o.m,b.a,d.a,p.a,h.a],encapsulation:2,changeDetection:0}),n}(),w=function(){function n(){}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=l.Mb({type:n}),n.\u0275inj=l.Lb({imports:[[o.b,a.a,c.b.forChild([{path:"",component:f}])]]}),n}()}}]);