!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var c=e[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(n,c.key,c)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{mhqm:function(t,c,o){"use strict";o.r(c),o.d(c,"SampleFiveModule",(function(){return J}));var a=o("An66"),i=o("1VvW"),r=o("5Q2+"),l=o("zMYQ"),u=o("umqh"),s=o("kZht"),b=o("mcff"),d=o("aJOL"),p=o("hCLc"),h=o("1ZKX"),f=o("oTne"),m=o("BL99");function g(n,e){if(1&n&&(s.Xb(0,"span"),s.Jc(1),s.Wb()),2&n){s.ic();var t=s.xc(19);s.Eb(1),s.Mc(" (",null==t.source?null:t.source.length,"x",null==t.displayedColumns?null:t.displayedColumns.length,")")}}var w,y,v=function(){return["guid"]},x=((y=function(){function t(e,c){n(this,t),this.dialog=e,this.cd=c,this.data=[]}var c,o,a;return c=t,(o=[{key:"ngOnInit",value:function(){var n=this;l.a.generator(1e3,40).then((function(e){n.data=e,n.cd.detectChanges()}))}},{key:"ngAfterViewInit",value:function(){document.querySelectorAll("pre code").forEach((function(n){hljs.highlightBlock(n)}))}},{key:"showSample",value:function(){this.dialog.open(u.a,{data:{title:"Overview resizable table",description:"",code:'\n<ngx-table-builder [source]="data">\n    \x3c!--\n       <ngx-options /> - declaration common options for columns\n\n       Also you can customize your columns manually\n       <ngx-column key="myKey" [resizable]="true">...</ngx-column>\n    --\x3e\n    <ngx-options is-draggable></ngx-options>\n</ngx-table-builder>\n\n                '},height:"350px",width:"700px"})}},{key:"updatedSchema",value:function(n){console.log(n)}}])&&e(c.prototype,o),a&&e(c,a),t}()).\u0275fac=function(n){return new(n||y)(s.Qb(b.b),s.Qb(s.h))},y.\u0275cmp=s.Kb({type:y,selectors:[["sample-five"]],decls:27,vars:7,consts:[[1,"simple-toolbar"],[4,"ngIf"],["mat-raised-button","",1,"show-simple",3,"click"],[3,"source","row-height","exclude-keys","vertical-border","schemaChanges"],["table",""],["is-draggable","",3,"nowrap"],["key","id","width","80","important-template","","sticky",""]],template:function(n,e){if(1&n&&(s.Xb(0,"mat-toolbar",0),s.Jc(1,"\n    "),s.Xb(2,"span"),s.Jc(3,"\n        Example resizing\n        "),s.Hc(4,g,2,2,"span",1),s.Jc(5,"\n    "),s.Wb(),s.Jc(6,"\n    "),s.Xb(7,"button",2),s.ec("click",(function(){return e.showSample()})),s.Jc(8,"show code sample"),s.Wb(),s.Jc(9,"\n"),s.Wb(),s.Jc(10,"\n\n"),s.Xb(11,"b"),s.Jc(12,"Default col width"),s.Wb(),s.Jc(13,": 150px\n"),s.Sb(14,"br"),s.Jc(15,"\n"),s.Sb(16,"br"),s.Jc(17,"\n\n"),s.Xb(18,"ngx-table-builder",3,4),s.ec("schemaChanges",(function(n){return e.updatedSchema(n)})),s.Jc(20,"\n    "),s.Jc(21,"\n    "),s.Sb(22,"ngx-options",5),s.Jc(23,"\n\n    "),s.Sb(24,"ngx-column",6),s.Jc(25,"\n"),s.Wb(),s.Jc(26,"\n")),2&n){var t=s.xc(19);s.Eb(4),s.pc("ngIf",t.isRendered),s.Eb(14),s.pc("source",e.data)("row-height",55)("exclude-keys",s.rc(6,v))("vertical-border",!1),s.Eb(4),s.pc("nowrap",!1)}},directives:[d.a,a.m,p.a,h.a,f.a,m.a],encapsulation:2,changeDetection:0}),y),J=((w=function e(){n(this,e)}).\u0275mod=s.Ob({type:w}),w.\u0275inj=s.Nb({factory:function(n){return new(n||w)},imports:[[a.b,r.a,i.b.forChild([{path:"",component:x}])]]}),w)}}])}();