(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{OcR2:function(n,e,c){"use strict";c.r(e),c.d(e,"SampleTwelveModule",function(){return h});var b=c("An66"),t=c("1VvW"),o=c("5Q2+"),a=c("zMYQ"),r=c("kZht"),l=c("aJOL"),i=c("1ZKX"),d=c("QAKa"),s=c("25ch"),K=c("Psfq"),p=c("cxIm"),u=c("oTne");const g=function(){return[]};let x=(()=>{class n{constructor(n){this.cd=n,this.data=[],this.licences=[{id:1,name:"single",price:29.3},{id:2,name:"developer",price:49.8},{id:3,name:"premium",price:99.5},{id:4,name:"enterprise",price:199}]}ngOnInit(){a.a.generator(50,15).then(n=>{this.data=n,this.cd.detectChanges()})}ngAfterViewInit(){this.update()}update(){document.querySelectorAll("pre code").forEach(n=>{hljs.highlightBlock(n)})}}return n.\u0275fac=function(e){return new(e||n)(r.Qb(r.h))},n.\u0275cmp=r.Kb({type:n,selectors:[["sample-twelve"]],decls:136,vars:7,consts:[[1,"simple-toolbar"],[1,"column-samples"],[1,"column"],[3,"source"],[1,"no-data"],[1,"html"],[1,"css"],["content-cell","","align-center","","bold",""],[3,"source","height"],["is-draggable","","is-sortable",""]],template:function(n,e){1&n&&(r.Xb(0,"mat-toolbar",0),r.Kc(1,"\n    "),r.Xb(2,"span"),r.Kc(3,"Example table header, footer"),r.Wb(),r.Kc(4,"\n"),r.Wb(),r.Kc(5,"\n\n"),r.Kc(6,"\n\n"),r.Xb(7,"h3"),r.Xb(8,"i"),r.Kc(9,"<ngx-source-null></ngx-source-null>"),r.Wb(),r.Kc(10," - display content when table value not set"),r.Wb(),r.Kc(11,"\n"),r.Sb(12,"br"),r.Kc(13,"\n\n"),r.Xb(14,"div",1),r.Kc(15,"\n    "),r.Xb(16,"div",2),r.Kc(17,"\n        "),r.Xb(18,"ngx-table-builder",3),r.Kc(19,"\n            "),r.Xb(20,"ngx-source-null"),r.Kc(21,"\n                "),r.Xb(22,"div",4),r.Kc(23,"Source not set (null/undefined/NaN)"),r.Wb(),r.Kc(24,"\n            "),r.Wb(),r.Kc(25,"\n        "),r.Wb(),r.Kc(26,"\n\n        "),r.Xb(27,"pre"),r.Xb(28,"code",5),r.Rb(),r.Kc(29,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder [source]="null">\n    <ngx-source-null>\n      <div class="no-data">Source not set (null/undefined/NaN)</div>\n    </ngx-source-null>\n  </ngx-table-builder>\n\n'),r.Yb(),r.Wb(),r.Wb(),r.Kc(30,"\n    "),r.Wb(),r.Kc(31,"\n\n    "),r.Xb(32,"div",2),r.Kc(33,"\n        "),r.Xb(34,"pre"),r.Xb(35,"code",6),r.Rb(),r.Kc(36,"\n  /* app.component.css */\n\n  .no-data {\n      text-align: center;\n      font-size: 16px;\n      font-weight: bold;\n      margin-bottom: 10px;\n  }\n\n"),r.Yb(),r.Wb(),r.Wb(),r.Kc(37,"\n    "),r.Wb(),r.Kc(38,"\n"),r.Wb(),r.Kc(39,"\n\n"),r.Xb(40,"h3"),r.Xb(41,"i"),r.Kc(42,"<ngx-empty></ngx-empty>"),r.Wb(),r.Kc(43," - display content when empty table"),r.Wb(),r.Kc(44,"\n"),r.Sb(45,"br"),r.Kc(46,"\n\n"),r.Xb(47,"div",1),r.Kc(48,"\n    "),r.Xb(49,"div",2),r.Kc(50,"\n        "),r.Xb(51,"ngx-table-builder",3),r.Kc(52,"\n            "),r.Xb(53,"ngx-empty"),r.Kc(54,"\n                "),r.Xb(55,"div",4),r.Kc(56,"No data"),r.Wb(),r.Kc(57,"\n            "),r.Wb(),r.Kc(58,"\n        "),r.Wb(),r.Kc(59,"\n\n        "),r.Xb(60,"pre"),r.Xb(61,"code",5),r.Rb(),r.Kc(62,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder [source]="[]">\n    <ngx-empty>\n      <div class="no-data">No data</div>\n    </ngx-empty>\n  </ngx-table-builder>\n\n'),r.Yb(),r.Wb(),r.Wb(),r.Kc(63,"\n    "),r.Wb(),r.Kc(64,"\n\n    "),r.Xb(65,"div",2),r.Kc(66,"\n        "),r.Xb(67,"pre"),r.Xb(68,"code",6),r.Rb(),r.Kc(69,"\n  /* app.component.css */\n\n  .no-data {\n      text-align: center;\n      font-size: 16px;\n      font-weight: bold;\n      margin-bottom: 10px;\n  }\n\n"),r.Yb(),r.Wb(),r.Wb(),r.Kc(70,"\n    "),r.Wb(),r.Kc(71,"\n"),r.Wb(),r.Kc(72,"\n\n"),r.Xb(73,"h3"),r.Kc(74,"\n    "),r.Xb(75,"i"),r.Kc(76,"<ngx-header></ngx-header>"),r.Wb(),r.Kc(77," - display table header, "),r.Xb(78,"i"),r.Kc(79,"<ngx-footer></ngx-footer>"),r.Wb(),r.Kc(80," - display\n    table footer\n"),r.Wb(),r.Kc(81,"\n"),r.Sb(82,"br"),r.Kc(83,"\n\n"),r.Xb(84,"div",1),r.Kc(85,"\n    "),r.Xb(86,"div",2),r.Kc(87,"\n        "),r.Xb(88,"ngx-table-builder",3),r.Kc(89,"\n            "),r.Xb(90,"ngx-header",7),r.Kc(91,"License list"),r.Wb(),r.Kc(92,"\n        "),r.Wb(),r.Kc(93,"\n        "),r.Sb(94,"br"),r.Kc(95,"\n\n        "),r.Xb(96,"pre"),r.Xb(97,"code",5),r.Rb(),r.Kc(98,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder [source]="data">\n     <ngx-header content-cell align-center bold>License list</ngx-header>\n  </ngx-table-builder>\n\n'),r.Yb(),r.Wb(),r.Wb(),r.Kc(99,"\n    "),r.Wb(),r.Kc(100,"\n\n    "),r.Xb(101,"div",2),r.Kc(102,"\n        "),r.Xb(103,"ngx-table-builder",3),r.Kc(104,"\n            "),r.Xb(105,"ngx-footer",7),r.Kc(106,"Footer"),r.Wb(),r.Kc(107,"\n        "),r.Wb(),r.Kc(108,"\n        "),r.Sb(109,"br"),r.Kc(110,"\n\n        "),r.Xb(111,"pre"),r.Xb(112,"code",5),r.Rb(),r.Kc(113,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder [source]="data">\n     <ngx-footer content-cell align-center bold>Footer</ngx-footer>\n  </ngx-table-builder>\n\n'),r.Yb(),r.Wb(),r.Wb(),r.Kc(114,"\n    "),r.Wb(),r.Kc(115,"\n"),r.Wb(),r.Kc(116,"\n\n"),r.Xb(117,"h3"),r.Kc(118,"Header and footer are always sticky position"),r.Wb(),r.Kc(119,"\n"),r.Sb(120,"br"),r.Kc(121,"\n\n"),r.Xb(122,"ngx-table-builder",8),r.Kc(123,"\n    "),r.Sb(124,"ngx-options",9),r.Kc(125,"\n    "),r.Xb(126,"ngx-header",7),r.Kc(127,"Header 1"),r.Wb(),r.Kc(128,"\n    "),r.Xb(129,"ngx-footer",7),r.Kc(130,"Footer 1"),r.Wb(),r.Kc(131,"\n"),r.Wb(),r.Kc(132,"\n\n"),r.Sb(133,"br"),r.Sb(134,"br"),r.Kc(135,"\n")),2&n&&(r.Eb(18),r.qc("source",null),r.Eb(33),r.qc("source",r.sc(6,g)),r.Eb(37),r.qc("source",e.licences),r.Eb(15),r.qc("source",e.licences),r.Eb(19),r.qc("source",e.data)("height",500))},directives:[l.a,i.a,d.a,s.a,K.a,p.a,u.a],styles:["\n    .no-data {\n        text-align: center;\n        font-size: 16px;\n        font-weight: bold;\n        margin-bottom: 10px;\n    }\n"],encapsulation:2,changeDetection:0}),n})(),h=(()=>{class n{}return n.\u0275mod=r.Ob({type:n}),n.\u0275inj=r.Nb({factory:function(e){return new(e||n)},imports:[[b.b,o.a,t.b.forChild([{path:"",component:x}])]]}),n})()}}]);