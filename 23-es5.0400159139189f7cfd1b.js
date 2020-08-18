!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var c=0;c<e.length;c++){var t=e[c];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{OcR2:function(c,t,b){"use strict";b.r(t),b.d(t,"SampleTwelveModule",(function(){return X}));var o,a,r=b("An66"),i=b("1VvW"),l=b("5Q2+"),d=b("zMYQ"),s=b("kZht"),K=b("aJOL"),u=b("1ZKX"),p=b("QAKa"),g=b("25ch"),x=b("Psfq"),h=b("cxIm"),f=b("oTne"),m=function(){return[]},W=((a=function(){function c(e){n(this,c),this.cd=e,this.data=[],this.licences=[{id:1,name:"single",price:29.3},{id:2,name:"developer",price:49.8},{id:3,name:"premium",price:99.5},{id:4,name:"enterprise",price:199}]}var t,b,o;return t=c,(b=[{key:"ngOnInit",value:function(){var n=this;d.a.generator(50,15).then((function(e){n.data=e,n.cd.detectChanges()}))}},{key:"ngAfterViewInit",value:function(){this.update()}},{key:"update",value:function(){document.querySelectorAll("pre code").forEach((function(n){hljs.highlightBlock(n)}))}}])&&e(t.prototype,b),o&&e(t,o),c}()).\u0275fac=function(n){return new(n||a)(s.Qb(s.h))},a.\u0275cmp=s.Kb({type:a,selectors:[["sample-twelve"]],decls:136,vars:7,consts:[[1,"simple-toolbar"],[1,"column-samples"],[1,"column"],[3,"source"],[1,"no-data"],[1,"html"],[1,"css"],["content-cell","","align-center","","bold",""],[3,"source","height"],["is-draggable","","is-sortable",""]],template:function(n,e){1&n&&(s.Xb(0,"mat-toolbar",0),s.Kc(1,"\n    "),s.Xb(2,"span"),s.Kc(3,"Example table header, footer"),s.Wb(),s.Kc(4,"\n"),s.Wb(),s.Kc(5,"\n\n"),s.Kc(6,"\n\n"),s.Xb(7,"h3"),s.Xb(8,"i"),s.Kc(9,"<ngx-source-null></ngx-source-null>"),s.Wb(),s.Kc(10," - display content when table value not set"),s.Wb(),s.Kc(11,"\n"),s.Sb(12,"br"),s.Kc(13,"\n\n"),s.Xb(14,"div",1),s.Kc(15,"\n    "),s.Xb(16,"div",2),s.Kc(17,"\n        "),s.Xb(18,"ngx-table-builder",3),s.Kc(19,"\n            "),s.Xb(20,"ngx-source-null"),s.Kc(21,"\n                "),s.Xb(22,"div",4),s.Kc(23,"Source not set (null/undefined/NaN)"),s.Wb(),s.Kc(24,"\n            "),s.Wb(),s.Kc(25,"\n        "),s.Wb(),s.Kc(26,"\n\n        "),s.Xb(27,"pre"),s.Xb(28,"code",5),s.Rb(),s.Kc(29,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder [source]="null">\n    <ngx-source-null>\n      <div class="no-data">Source not set (null/undefined/NaN)</div>\n    </ngx-source-null>\n  </ngx-table-builder>\n\n'),s.Yb(),s.Wb(),s.Wb(),s.Kc(30,"\n    "),s.Wb(),s.Kc(31,"\n\n    "),s.Xb(32,"div",2),s.Kc(33,"\n        "),s.Xb(34,"pre"),s.Xb(35,"code",6),s.Rb(),s.Kc(36,"\n  /* app.component.css */\n\n  .no-data {\n      text-align: center;\n      font-size: 16px;\n      font-weight: bold;\n      margin-bottom: 10px;\n  }\n\n"),s.Yb(),s.Wb(),s.Wb(),s.Kc(37,"\n    "),s.Wb(),s.Kc(38,"\n"),s.Wb(),s.Kc(39,"\n\n"),s.Xb(40,"h3"),s.Xb(41,"i"),s.Kc(42,"<ngx-empty></ngx-empty>"),s.Wb(),s.Kc(43," - display content when empty table"),s.Wb(),s.Kc(44,"\n"),s.Sb(45,"br"),s.Kc(46,"\n\n"),s.Xb(47,"div",1),s.Kc(48,"\n    "),s.Xb(49,"div",2),s.Kc(50,"\n        "),s.Xb(51,"ngx-table-builder",3),s.Kc(52,"\n            "),s.Xb(53,"ngx-empty"),s.Kc(54,"\n                "),s.Xb(55,"div",4),s.Kc(56,"No data"),s.Wb(),s.Kc(57,"\n            "),s.Wb(),s.Kc(58,"\n        "),s.Wb(),s.Kc(59,"\n\n        "),s.Xb(60,"pre"),s.Xb(61,"code",5),s.Rb(),s.Kc(62,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder [source]="[]">\n    <ngx-empty>\n      <div class="no-data">No data</div>\n    </ngx-empty>\n  </ngx-table-builder>\n\n'),s.Yb(),s.Wb(),s.Wb(),s.Kc(63,"\n    "),s.Wb(),s.Kc(64,"\n\n    "),s.Xb(65,"div",2),s.Kc(66,"\n        "),s.Xb(67,"pre"),s.Xb(68,"code",6),s.Rb(),s.Kc(69,"\n  /* app.component.css */\n\n  .no-data {\n      text-align: center;\n      font-size: 16px;\n      font-weight: bold;\n      margin-bottom: 10px;\n  }\n\n"),s.Yb(),s.Wb(),s.Wb(),s.Kc(70,"\n    "),s.Wb(),s.Kc(71,"\n"),s.Wb(),s.Kc(72,"\n\n"),s.Xb(73,"h3"),s.Kc(74,"\n    "),s.Xb(75,"i"),s.Kc(76,"<ngx-header></ngx-header>"),s.Wb(),s.Kc(77," - display table header, "),s.Xb(78,"i"),s.Kc(79,"<ngx-footer></ngx-footer>"),s.Wb(),s.Kc(80," - display\n    table footer\n"),s.Wb(),s.Kc(81,"\n"),s.Sb(82,"br"),s.Kc(83,"\n\n"),s.Xb(84,"div",1),s.Kc(85,"\n    "),s.Xb(86,"div",2),s.Kc(87,"\n        "),s.Xb(88,"ngx-table-builder",3),s.Kc(89,"\n            "),s.Xb(90,"ngx-header",7),s.Kc(91,"License list"),s.Wb(),s.Kc(92,"\n        "),s.Wb(),s.Kc(93,"\n        "),s.Sb(94,"br"),s.Kc(95,"\n\n        "),s.Xb(96,"pre"),s.Xb(97,"code",5),s.Rb(),s.Kc(98,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder [source]="data">\n     <ngx-header content-cell align-center bold>License list</ngx-header>\n  </ngx-table-builder>\n\n'),s.Yb(),s.Wb(),s.Wb(),s.Kc(99,"\n    "),s.Wb(),s.Kc(100,"\n\n    "),s.Xb(101,"div",2),s.Kc(102,"\n        "),s.Xb(103,"ngx-table-builder",3),s.Kc(104,"\n            "),s.Xb(105,"ngx-footer",7),s.Kc(106,"Footer"),s.Wb(),s.Kc(107,"\n        "),s.Wb(),s.Kc(108,"\n        "),s.Sb(109,"br"),s.Kc(110,"\n\n        "),s.Xb(111,"pre"),s.Xb(112,"code",5),s.Rb(),s.Kc(113,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder [source]="data">\n     <ngx-footer content-cell align-center bold>Footer</ngx-footer>\n  </ngx-table-builder>\n\n'),s.Yb(),s.Wb(),s.Wb(),s.Kc(114,"\n    "),s.Wb(),s.Kc(115,"\n"),s.Wb(),s.Kc(116,"\n\n"),s.Xb(117,"h3"),s.Kc(118,"Header and footer are always sticky position"),s.Wb(),s.Kc(119,"\n"),s.Sb(120,"br"),s.Kc(121,"\n\n"),s.Xb(122,"ngx-table-builder",8),s.Kc(123,"\n    "),s.Sb(124,"ngx-options",9),s.Kc(125,"\n    "),s.Xb(126,"ngx-header",7),s.Kc(127,"Header 1"),s.Wb(),s.Kc(128,"\n    "),s.Xb(129,"ngx-footer",7),s.Kc(130,"Footer 1"),s.Wb(),s.Kc(131,"\n"),s.Wb(),s.Kc(132,"\n\n"),s.Sb(133,"br"),s.Sb(134,"br"),s.Kc(135,"\n")),2&n&&(s.Eb(18),s.qc("source",null),s.Eb(33),s.qc("source",s.sc(6,m)),s.Eb(37),s.qc("source",e.licences),s.Eb(15),s.qc("source",e.licences),s.Eb(19),s.qc("source",e.data)("height",500))},directives:[K.a,u.a,p.a,g.a,x.a,h.a,f.a],styles:["\n    .no-data {\n        text-align: center;\n        font-size: 16px;\n        font-weight: bold;\n        margin-bottom: 10px;\n    }\n"],encapsulation:2,changeDetection:0}),a),X=((o=function e(){n(this,e)}).\u0275mod=s.Ob({type:o}),o.\u0275inj=s.Nb({factory:function(n){return new(n||o)},imports:[[r.b,l.a,i.b.forChild([{path:"",component:W}])]]}),o)}}])}();