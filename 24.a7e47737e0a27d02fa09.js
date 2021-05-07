(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{OcR2:function(n,e,c){"use strict";c.r(e),c.d(e,"SampleTwelveModule",function(){return V});var t=c("An66"),b=c("1VvW"),o=c("5Q2+"),a=c("zMYQ"),r=c("kZht"),i=c("aJOL"),l=c("1ZKX"),d=c("QAKa"),G=c("25ch"),s=c("Psfq"),p=c("cxIm"),u=c("oTne"),g=function(){return[]},x=function(){function n(n){this.cd=n,this.data=[],this.licences=[{id:1,name:"single",price:29.3},{id:2,name:"developer",price:49.8},{id:3,name:"premium",price:99.5},{id:4,name:"enterprise",price:199}]}return n.prototype.ngOnInit=function(){var n=this;a.a.generator(50,15).then(function(e){n.data=e,n.cd.detectChanges()})},n.prototype.ngAfterViewInit=function(){this.update()},n.prototype.update=function(){document.querySelectorAll("pre code").forEach(function(n){hljs.highlightBlock(n)})},n.\u0275fac=function(e){return new(e||n)(r.Ob(r.h))},n.\u0275cmp=r.Ib({type:n,selectors:[["sample-twelve"]],decls:136,vars:7,consts:[[1,"simple-toolbar"],[1,"column-samples"],[1,"column"],[3,"source"],[1,"no-data"],[1,"html"],[1,"css"],["content-cell","","align-center","","bold",""],[3,"source","height"],["is-draggable","","is-sortable",""]],template:function(n,e){1&n&&(r.Vb(0,"mat-toolbar",0),r.Gc(1,"\n    "),r.Vb(2,"span"),r.Gc(3,"Example table header, footer"),r.Ub(),r.Gc(4,"\n"),r.Ub(),r.Gc(5,"\n\n"),r.Gc(6,"\n\n"),r.Vb(7,"h3"),r.Vb(8,"i"),r.Gc(9,"<ngx-source-null></ngx-source-null>"),r.Ub(),r.Gc(10," - display content when table value not set"),r.Ub(),r.Gc(11,"\n"),r.Qb(12,"br"),r.Gc(13,"\n\n"),r.Vb(14,"div",1),r.Gc(15,"\n    "),r.Vb(16,"div",2),r.Gc(17,"\n        "),r.Vb(18,"ngx-table-builder",3),r.Gc(19,"\n            "),r.Vb(20,"ngx-source-null"),r.Gc(21,"\n                "),r.Vb(22,"div",4),r.Gc(23,"Source not set (null/undefined/NaN)"),r.Ub(),r.Gc(24,"\n            "),r.Ub(),r.Gc(25,"\n        "),r.Ub(),r.Gc(26,"\n\n        "),r.Vb(27,"pre"),r.Vb(28,"code",5),r.Pb(),r.Gc(29,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder [source]="null">\n    <ngx-source-null>\n      <div class="no-data">Source not set (null/undefined/NaN)</div>\n    </ngx-source-null>\n  </ngx-table-builder>\n\n'),r.Wb(),r.Ub(),r.Ub(),r.Gc(30,"\n    "),r.Ub(),r.Gc(31,"\n\n    "),r.Vb(32,"div",2),r.Gc(33,"\n        "),r.Vb(34,"pre"),r.Vb(35,"code",6),r.Pb(),r.Gc(36,"\n  /* app.component.css */\n\n  .no-data {\n      text-align: center;\n      font-size: 16px;\n      font-weight: bold;\n      margin-bottom: 10px;\n  }\n\n"),r.Wb(),r.Ub(),r.Ub(),r.Gc(37,"\n    "),r.Ub(),r.Gc(38,"\n"),r.Ub(),r.Gc(39,"\n\n"),r.Vb(40,"h3"),r.Vb(41,"i"),r.Gc(42,"<ngx-empty></ngx-empty>"),r.Ub(),r.Gc(43," - display content when empty table"),r.Ub(),r.Gc(44,"\n"),r.Qb(45,"br"),r.Gc(46,"\n\n"),r.Vb(47,"div",1),r.Gc(48,"\n    "),r.Vb(49,"div",2),r.Gc(50,"\n        "),r.Vb(51,"ngx-table-builder",3),r.Gc(52,"\n            "),r.Vb(53,"ngx-empty"),r.Gc(54,"\n                "),r.Vb(55,"div",4),r.Gc(56,"No data"),r.Ub(),r.Gc(57,"\n            "),r.Ub(),r.Gc(58,"\n        "),r.Ub(),r.Gc(59,"\n\n        "),r.Vb(60,"pre"),r.Vb(61,"code",5),r.Pb(),r.Gc(62,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder [source]="[]">\n    <ngx-empty>\n      <div class="no-data">No data</div>\n    </ngx-empty>\n  </ngx-table-builder>\n\n'),r.Wb(),r.Ub(),r.Ub(),r.Gc(63,"\n    "),r.Ub(),r.Gc(64,"\n\n    "),r.Vb(65,"div",2),r.Gc(66,"\n        "),r.Vb(67,"pre"),r.Vb(68,"code",6),r.Pb(),r.Gc(69,"\n  /* app.component.css */\n\n  .no-data {\n      text-align: center;\n      font-size: 16px;\n      font-weight: bold;\n      margin-bottom: 10px;\n  }\n\n"),r.Wb(),r.Ub(),r.Ub(),r.Gc(70,"\n    "),r.Ub(),r.Gc(71,"\n"),r.Ub(),r.Gc(72,"\n\n"),r.Vb(73,"h3"),r.Gc(74,"\n    "),r.Vb(75,"i"),r.Gc(76,"<ngx-header></ngx-header>"),r.Ub(),r.Gc(77," - display table header, "),r.Vb(78,"i"),r.Gc(79,"<ngx-footer></ngx-footer>"),r.Ub(),r.Gc(80," - display\n    table footer\n"),r.Ub(),r.Gc(81,"\n"),r.Qb(82,"br"),r.Gc(83,"\n\n"),r.Vb(84,"div",1),r.Gc(85,"\n    "),r.Vb(86,"div",2),r.Gc(87,"\n        "),r.Vb(88,"ngx-table-builder",3),r.Gc(89,"\n            "),r.Vb(90,"ngx-header",7),r.Gc(91,"License list"),r.Ub(),r.Gc(92,"\n        "),r.Ub(),r.Gc(93,"\n        "),r.Qb(94,"br"),r.Gc(95,"\n\n        "),r.Vb(96,"pre"),r.Vb(97,"code",5),r.Pb(),r.Gc(98,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder [source]="data">\n     <ngx-header content-cell align-center bold>License list</ngx-header>\n  </ngx-table-builder>\n\n'),r.Wb(),r.Ub(),r.Ub(),r.Gc(99,"\n    "),r.Ub(),r.Gc(100,"\n\n    "),r.Vb(101,"div",2),r.Gc(102,"\n        "),r.Vb(103,"ngx-table-builder",3),r.Gc(104,"\n            "),r.Vb(105,"ngx-footer",7),r.Gc(106,"Footer"),r.Ub(),r.Gc(107,"\n        "),r.Ub(),r.Gc(108,"\n        "),r.Qb(109,"br"),r.Gc(110,"\n\n        "),r.Vb(111,"pre"),r.Vb(112,"code",5),r.Pb(),r.Gc(113,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder [source]="data">\n     <ngx-footer content-cell align-center bold>Footer</ngx-footer>\n  </ngx-table-builder>\n\n'),r.Wb(),r.Ub(),r.Ub(),r.Gc(114,"\n    "),r.Ub(),r.Gc(115,"\n"),r.Ub(),r.Gc(116,"\n\n"),r.Vb(117,"h3"),r.Gc(118,"Header and footer are always sticky position"),r.Ub(),r.Gc(119,"\n"),r.Qb(120,"br"),r.Gc(121,"\n\n"),r.Vb(122,"ngx-table-builder",8),r.Gc(123,"\n    "),r.Qb(124,"ngx-options",9),r.Gc(125,"\n    "),r.Vb(126,"ngx-header",7),r.Gc(127,"Header 1"),r.Ub(),r.Gc(128,"\n    "),r.Vb(129,"ngx-footer",7),r.Gc(130,"Footer 1"),r.Ub(),r.Gc(131,"\n"),r.Ub(),r.Gc(132,"\n\n"),r.Qb(133,"br"),r.Qb(134,"br"),r.Gc(135,"\n")),2&n&&(r.Cb(18),r.oc("source",null),r.Cb(33),r.oc("source",r.qc(6,g)),r.Cb(37),r.oc("source",e.licences),r.Cb(15),r.oc("source",e.licences),r.Cb(19),r.oc("source",e.data)("height",500))},directives:[i.a,l.a,d.a,G.a,s.a,p.a,u.a],styles:["\n    .no-data {\n        text-align: center;\n        font-size: 16px;\n        font-weight: bold;\n        margin-bottom: 10px;\n    }\n"],encapsulation:2,changeDetection:0}),n}(),V=function(){function n(){}return n.\u0275mod=r.Mb({type:n}),n.\u0275inj=r.Lb({factory:function(e){return new(e||n)},imports:[[t.b,o.a,b.b.forChild([{path:"",component:x}])]]}),n}()}}]);