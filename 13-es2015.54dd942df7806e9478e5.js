(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{mhqm:function(n,c,e){"use strict";e.r(c),e.d(c,"SampleFiveModule",function(){return b});var t=e("An66"),o=e("1VvW"),a=e("5Q2+"),i=e("zMYQ"),s=e("umqh"),l=e("kZht"),r=e("mcff"),u=e("aJOL"),d=e("hCLc"),p=e("WGpx");function h(n,c){if(1&n&&(l.kc(0,"span"),l.Vc(1),l.jc()),2&n){l.wc();const n=l.Lc(19);l.Rb(1),l.Yc(" (",null==n.source?null:n.source.length,"x",null==n.displayedColumns?null:n.displayedColumns.length,")")}}const m=function(){return["guid"]};let g=(()=>{class n{constructor(n,c){this.dialog=n,this.cd=c,this.data=[]}ngOnInit(){i.a.generator(1e3,40).then(n=>{this.data=n,this.cd.detectChanges()})}ngAfterViewInit(){document.querySelectorAll("pre code").forEach(n=>{hljs.highlightBlock(n)})}showSample(){this.dialog.open(s.a,{data:{title:"Overview resizable table",description:"",code:'\n<ngx-table-builder [source]="data">\n    \x3c!--\n       <ngx-options /> - declaration common options for columns\n\n       Also you can customize your columns manually\n       <ngx-column key="myKey" [resizable]="true">...</ngx-column>\n    --\x3e\n    <ngx-options is-draggable></ngx-options>\n</ngx-table-builder>\n\n                '},height:"350px",width:"700px"})}updatedSchema(n){console.log(n)}}return n.\u0275fac=function(c){return new(c||n)(l.dc(r.b),l.dc(l.i))},n.\u0275cmp=l.Xb({type:n,selectors:[["sample-five"]],decls:27,vars:7,consts:[[1,"simple-toolbar"],[4,"ngIf"],["mat-raised-button","",1,"show-simple",3,"click"],[3,"source","row-height","exclude-keys","vertical-border","schemaChanges"],["table",""],["is-draggable","",3,"nowrap"],["key","id","width","80","important-template","","sticky",""]],template:function(n,c){if(1&n&&(l.kc(0,"mat-toolbar",0),l.Vc(1,"\n    "),l.kc(2,"span"),l.Vc(3,"\n        Example resizing\n        "),l.Tc(4,h,2,2,"span",1),l.Vc(5,"\n    "),l.jc(),l.Vc(6,"\n    "),l.kc(7,"button",2),l.sc("click",function(){return c.showSample()}),l.Vc(8,"show code sample"),l.jc(),l.Vc(9,"\n"),l.jc(),l.Vc(10,"\n\n"),l.kc(11,"b"),l.Vc(12,"Default col width"),l.jc(),l.Vc(13,": 150px\n"),l.fc(14,"br"),l.Vc(15,"\n"),l.fc(16,"br"),l.Vc(17,"\n\n"),l.kc(18,"ngx-table-builder",3,4),l.sc("schemaChanges",function(n){return c.updatedSchema(n)}),l.Vc(20,"\n    "),l.Vc(21,"\n    "),l.fc(22,"ngx-options",5),l.Vc(23,"\n\n    "),l.fc(24,"ngx-column",6),l.Vc(25,"\n"),l.jc(),l.Vc(26,"\n")),2&n){const n=l.Lc(19);l.Rb(4),l.Dc("ngIf",n.isRendered),l.Rb(14),l.Dc("source",c.data)("row-height",55)("exclude-keys",l.Fc(6,m))("vertical-border",!1),l.Rb(4),l.Dc("nowrap",!1)}},directives:[u.a,t.m,d.a,p.m,p.j,p.a],encapsulation:2,changeDetection:0}),n})(),b=(()=>{class n{}return n.\u0275mod=l.bc({type:n}),n.\u0275inj=l.ac({factory:function(c){return new(c||n)},imports:[[t.b,a.a,o.b.forChild([{path:"",component:g}])]]}),n})()}}]);