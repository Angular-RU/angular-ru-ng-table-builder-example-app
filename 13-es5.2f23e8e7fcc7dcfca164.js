!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{mhqm:function(t,o,c){"use strict";c.r(o),c.d(o,"SampleFiveModule",function(){return G});var a=c("An66"),i=c("1VvW"),r=c("5Q2+"),l=c("zMYQ"),u=c("umqh"),s=c("kZht"),b=c("mcff"),d=c("aJOL"),h=c("hCLc"),p=c("1ZKX"),f=c("oTne"),m=c("BL99");function g(n,e){if(1&n&&(s.Vb(0,"span"),s.Gc(1),s.Ub()),2&n){s.hc();var t=s.wc(19);s.Cb(1),s.Jc(" (",null==t.source?null:t.source.length,"x",null==t.displayedColumns?null:t.displayedColumns.length,")")}}var w,y,v=function(){return["guid"]},x=((y=function(){function t(e,o){n(this,t),this.dialog=e,this.cd=o,this.data=[]}var o,c,a;return o=t,(c=[{key:"ngOnInit",value:function(){var n=this;l.a.generator(1e3,40).then(function(e){n.data=e,n.cd.detectChanges()})}},{key:"ngAfterViewInit",value:function(){document.querySelectorAll("pre code").forEach(function(n){hljs.highlightBlock(n)})}},{key:"showSample",value:function(){this.dialog.open(u.a,{data:{title:"Overview resizable table",description:"",code:'\n<ngx-table-builder [source]="data">\n    \x3c!--\n       <ngx-options /> - declaration common options for columns\n\n       Also you can customize your columns manually\n       <ngx-column key="myKey" [resizable]="true">...</ngx-column>\n    --\x3e\n    <ngx-options is-draggable></ngx-options>\n</ngx-table-builder>\n\n                '},height:"350px",width:"700px"})}},{key:"updatedSchema",value:function(n){console.log(n)}}])&&e(o.prototype,c),a&&e(o,a),t}()).\u0275fac=function(n){return new(n||y)(s.Ob(b.b),s.Ob(s.h))},y.\u0275cmp=s.Ib({type:y,selectors:[["sample-five"]],decls:27,vars:7,consts:[[1,"simple-toolbar"],[4,"ngIf"],["mat-raised-button","",1,"show-simple",3,"click"],[3,"source","row-height","exclude-keys","vertical-border","schemaChanges"],["table",""],["is-draggable","",3,"nowrap"],["key","id","width","80","important-template","","sticky",""]],template:function(n,e){if(1&n&&(s.Vb(0,"mat-toolbar",0),s.Gc(1,"\n    "),s.Vb(2,"span"),s.Gc(3,"\n        Example resizing\n        "),s.Ec(4,g,2,2,"span",1),s.Gc(5,"\n    "),s.Ub(),s.Gc(6,"\n    "),s.Vb(7,"button",2),s.dc("click",function(){return e.showSample()}),s.Gc(8,"show code sample"),s.Ub(),s.Gc(9,"\n"),s.Ub(),s.Gc(10,"\n\n"),s.Vb(11,"b"),s.Gc(12,"Default col width"),s.Ub(),s.Gc(13,": 150px\n"),s.Qb(14,"br"),s.Gc(15,"\n"),s.Qb(16,"br"),s.Gc(17,"\n\n"),s.Vb(18,"ngx-table-builder",3,4),s.dc("schemaChanges",function(n){return e.updatedSchema(n)}),s.Gc(20,"\n    "),s.Gc(21,"\n    "),s.Qb(22,"ngx-options",5),s.Gc(23,"\n\n    "),s.Qb(24,"ngx-column",6),s.Gc(25,"\n"),s.Ub(),s.Gc(26,"\n")),2&n){var t=s.wc(19);s.Cb(4),s.oc("ngIf",t.isRendered),s.Cb(14),s.oc("source",e.data)("row-height",55)("exclude-keys",s.qc(6,v))("vertical-border",!1),s.Cb(4),s.oc("nowrap",!1)}},directives:[d.a,a.m,h.a,p.a,f.a,m.a],encapsulation:2,changeDetection:0}),y),G=((w=function e(){n(this,e)}).\u0275mod=s.Mb({type:w}),w.\u0275inj=s.Lb({factory:function(n){return new(n||w)},imports:[[a.b,r.a,i.b.forChild([{path:"",component:x}])]]}),w)}}])}();