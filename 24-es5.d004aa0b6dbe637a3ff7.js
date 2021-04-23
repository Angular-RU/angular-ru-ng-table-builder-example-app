!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var c=0;c<e.length;c++){var t=e[c];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{OcR2:function(c,t,b){"use strict";b.r(t),b.d(t,"SampleTwelveModule",function(){return U});var o,a,r=b("An66"),i=b("1VvW"),l=b("5Q2+"),d=b("zMYQ"),s=b("kZht"),u=b("aJOL"),G=b("1ZKX"),p=b("QAKa"),g=b("25ch"),x=b("Psfq"),h=b("cxIm"),f=b("oTne"),m=function(){return[]},V=((a=function(){function c(e){n(this,c),this.cd=e,this.data=[],this.licences=[{id:1,name:"single",price:29.3},{id:2,name:"developer",price:49.8},{id:3,name:"premium",price:99.5},{id:4,name:"enterprise",price:199}]}var t,b,o;return t=c,(b=[{key:"ngOnInit",value:function(){var n=this;d.a.generator(50,15).then(function(e){n.data=e,n.cd.detectChanges()})}},{key:"ngAfterViewInit",value:function(){this.update()}},{key:"update",value:function(){document.querySelectorAll("pre code").forEach(function(n){hljs.highlightBlock(n)})}}])&&e(t.prototype,b),o&&e(t,o),c}()).\u0275fac=function(n){return new(n||a)(s.Ob(s.h))},a.\u0275cmp=s.Ib({type:a,selectors:[["sample-twelve"]],decls:136,vars:7,consts:[[1,"simple-toolbar"],[1,"column-samples"],[1,"column"],[3,"source"],[1,"no-data"],[1,"html"],[1,"css"],["content-cell","","align-center","","bold",""],[3,"source","height"],["is-draggable","","is-sortable",""]],template:function(n,e){1&n&&(s.Vb(0,"mat-toolbar",0),s.Gc(1,"\n    "),s.Vb(2,"span"),s.Gc(3,"Example table header, footer"),s.Ub(),s.Gc(4,"\n"),s.Ub(),s.Gc(5,"\n\n"),s.Gc(6,"\n\n"),s.Vb(7,"h3"),s.Vb(8,"i"),s.Gc(9,"<ngx-source-null></ngx-source-null>"),s.Ub(),s.Gc(10," - display content when table value not set"),s.Ub(),s.Gc(11,"\n"),s.Qb(12,"br"),s.Gc(13,"\n\n"),s.Vb(14,"div",1),s.Gc(15,"\n    "),s.Vb(16,"div",2),s.Gc(17,"\n        "),s.Vb(18,"ngx-table-builder",3),s.Gc(19,"\n            "),s.Vb(20,"ngx-source-null"),s.Gc(21,"\n                "),s.Vb(22,"div",4),s.Gc(23,"Source not set (null/undefined/NaN)"),s.Ub(),s.Gc(24,"\n            "),s.Ub(),s.Gc(25,"\n        "),s.Ub(),s.Gc(26,"\n\n        "),s.Vb(27,"pre"),s.Vb(28,"code",5),s.Pb(),s.Gc(29,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder [source]="null">\n    <ngx-source-null>\n      <div class="no-data">Source not set (null/undefined/NaN)</div>\n    </ngx-source-null>\n  </ngx-table-builder>\n\n'),s.Wb(),s.Ub(),s.Ub(),s.Gc(30,"\n    "),s.Ub(),s.Gc(31,"\n\n    "),s.Vb(32,"div",2),s.Gc(33,"\n        "),s.Vb(34,"pre"),s.Vb(35,"code",6),s.Pb(),s.Gc(36,"\n  /* app.component.css */\n\n  .no-data {\n      text-align: center;\n      font-size: 16px;\n      font-weight: bold;\n      margin-bottom: 10px;\n  }\n\n"),s.Wb(),s.Ub(),s.Ub(),s.Gc(37,"\n    "),s.Ub(),s.Gc(38,"\n"),s.Ub(),s.Gc(39,"\n\n"),s.Vb(40,"h3"),s.Vb(41,"i"),s.Gc(42,"<ngx-empty></ngx-empty>"),s.Ub(),s.Gc(43," - display content when empty table"),s.Ub(),s.Gc(44,"\n"),s.Qb(45,"br"),s.Gc(46,"\n\n"),s.Vb(47,"div",1),s.Gc(48,"\n    "),s.Vb(49,"div",2),s.Gc(50,"\n        "),s.Vb(51,"ngx-table-builder",3),s.Gc(52,"\n            "),s.Vb(53,"ngx-empty"),s.Gc(54,"\n                "),s.Vb(55,"div",4),s.Gc(56,"No data"),s.Ub(),s.Gc(57,"\n            "),s.Ub(),s.Gc(58,"\n        "),s.Ub(),s.Gc(59,"\n\n        "),s.Vb(60,"pre"),s.Vb(61,"code",5),s.Pb(),s.Gc(62,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder [source]="[]">\n    <ngx-empty>\n      <div class="no-data">No data</div>\n    </ngx-empty>\n  </ngx-table-builder>\n\n'),s.Wb(),s.Ub(),s.Ub(),s.Gc(63,"\n    "),s.Ub(),s.Gc(64,"\n\n    "),s.Vb(65,"div",2),s.Gc(66,"\n        "),s.Vb(67,"pre"),s.Vb(68,"code",6),s.Pb(),s.Gc(69,"\n  /* app.component.css */\n\n  .no-data {\n      text-align: center;\n      font-size: 16px;\n      font-weight: bold;\n      margin-bottom: 10px;\n  }\n\n"),s.Wb(),s.Ub(),s.Ub(),s.Gc(70,"\n    "),s.Ub(),s.Gc(71,"\n"),s.Ub(),s.Gc(72,"\n\n"),s.Vb(73,"h3"),s.Gc(74,"\n    "),s.Vb(75,"i"),s.Gc(76,"<ngx-header></ngx-header>"),s.Ub(),s.Gc(77," - display table header, "),s.Vb(78,"i"),s.Gc(79,"<ngx-footer></ngx-footer>"),s.Ub(),s.Gc(80," - display\n    table footer\n"),s.Ub(),s.Gc(81,"\n"),s.Qb(82,"br"),s.Gc(83,"\n\n"),s.Vb(84,"div",1),s.Gc(85,"\n    "),s.Vb(86,"div",2),s.Gc(87,"\n        "),s.Vb(88,"ngx-table-builder",3),s.Gc(89,"\n            "),s.Vb(90,"ngx-header",7),s.Gc(91,"License list"),s.Ub(),s.Gc(92,"\n        "),s.Ub(),s.Gc(93,"\n        "),s.Qb(94,"br"),s.Gc(95,"\n\n        "),s.Vb(96,"pre"),s.Vb(97,"code",5),s.Pb(),s.Gc(98,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder [source]="data">\n     <ngx-header content-cell align-center bold>License list</ngx-header>\n  </ngx-table-builder>\n\n'),s.Wb(),s.Ub(),s.Ub(),s.Gc(99,"\n    "),s.Ub(),s.Gc(100,"\n\n    "),s.Vb(101,"div",2),s.Gc(102,"\n        "),s.Vb(103,"ngx-table-builder",3),s.Gc(104,"\n            "),s.Vb(105,"ngx-footer",7),s.Gc(106,"Footer"),s.Ub(),s.Gc(107,"\n        "),s.Ub(),s.Gc(108,"\n        "),s.Qb(109,"br"),s.Gc(110,"\n\n        "),s.Vb(111,"pre"),s.Vb(112,"code",5),s.Pb(),s.Gc(113,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder [source]="data">\n     <ngx-footer content-cell align-center bold>Footer</ngx-footer>\n  </ngx-table-builder>\n\n'),s.Wb(),s.Ub(),s.Ub(),s.Gc(114,"\n    "),s.Ub(),s.Gc(115,"\n"),s.Ub(),s.Gc(116,"\n\n"),s.Vb(117,"h3"),s.Gc(118,"Header and footer are always sticky position"),s.Ub(),s.Gc(119,"\n"),s.Qb(120,"br"),s.Gc(121,"\n\n"),s.Vb(122,"ngx-table-builder",8),s.Gc(123,"\n    "),s.Qb(124,"ngx-options",9),s.Gc(125,"\n    "),s.Vb(126,"ngx-header",7),s.Gc(127,"Header 1"),s.Ub(),s.Gc(128,"\n    "),s.Vb(129,"ngx-footer",7),s.Gc(130,"Footer 1"),s.Ub(),s.Gc(131,"\n"),s.Ub(),s.Gc(132,"\n\n"),s.Qb(133,"br"),s.Qb(134,"br"),s.Gc(135,"\n")),2&n&&(s.Cb(18),s.oc("source",null),s.Cb(33),s.oc("source",s.qc(6,m)),s.Cb(37),s.oc("source",e.licences),s.Cb(15),s.oc("source",e.licences),s.Cb(19),s.oc("source",e.data)("height",500))},directives:[u.a,G.a,p.a,g.a,x.a,h.a,f.a],styles:["\n    .no-data {\n        text-align: center;\n        font-size: 16px;\n        font-weight: bold;\n        margin-bottom: 10px;\n    }\n"],encapsulation:2,changeDetection:0}),a),U=((o=function e(){n(this,e)}).\u0275mod=s.Mb({type:o}),o.\u0275inj=s.Lb({factory:function(n){return new(n||o)},imports:[[r.b,l.a,i.b.forChild([{path:"",component:V}])]]}),o)}}])}();