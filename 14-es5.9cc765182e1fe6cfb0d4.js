!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{I68A:function(t,a,c){"use strict";c.r(a),c.d(a,"SampleFourthModule",function(){return k});var l=c("An66"),o=c("1VvW"),i=c("5Q2+"),m=c("kZht"),p=c("aJOL"),u=c("1ZKX"),r=c("BL99"),s=c("ctyY"),b=c("j5U8");function d(n,e){1&n&&m.Kc(0,"Small")}function g(n,e){1&n&&(m.Kc(0),m.kc(1,"currency")),2&n&&m.Lc(m.lc(1,1,e.$implicit))}function K(n,e){1&n&&m.Kc(0,"Medium")}function y(n,e){1&n&&(m.Kc(0),m.kc(1,"currency")),2&n&&m.Lc(m.lc(1,1,e.$implicit))}function h(n,e){1&n&&m.Kc(0,"Large")}function f(n,e){1&n&&(m.Kc(0),m.kc(1,"currency")),2&n&&m.Lc(m.lc(1,1,e.$implicit))}function x(n,e){1&n&&m.Kc(0,"Date")}function v(n,e){1&n&&(m.Kc(0),m.kc(1,"date")),2&n&&m.Mc("\n                    ",m.mc(1,1,e.$implicit,"dd.MM.yyyy HH:mm"),"\n                ")}var W,X,w=((X=function(){function t(){n(this,t),this.data=[],this.elements=[]}var a,c,l;return a=t,(c=[{key:"ngOnInit",value:function(){this.data=[{toppings:["tomato sauce","mozzarella cheese"],prices:{small:"5.00",medium:"6.00",large:"7.00"}},{toppings:["tomato sauce","mozzarella cheese","ham"],prices:{small:"6.50",medium:"7.50",large:"8.50"}}],this.elements=[{position:null,name:"Hydrogen",date:{value:NaN},symbol:"H",status:!0},{position:2,name:"",date:{value:new Date},symbol:void 0,status:!1},{position:3,name:"Lithium",date:{value:1/0},symbol:"Li",status:!0},{position:4,name:"Beryllium",date:{value:0},symbol:"    ",status:!1}]}},{key:"ngAfterViewInit",value:function(){document.querySelectorAll("pre code").forEach(function(n){hljs.highlightBlock(n)})}}])&&e(a.prototype,c),l&&e(a,l),t}()).\u0275fac=function(n){return new(n||X)},X.\u0275cmp=m.Kb({type:X,selectors:[["sample-fourth"]],decls:101,vars:3,consts:[[1,"simple-toolbar"],[1,"column-samples"],[1,"column"],[1,"javascript"],["auto-width","",3,"source"],["key","toppings","width","350"],["key","prices.small"],["ngx-th",""],["ngx-td",""],["key","prices.medium"],["key","prices.large"],["key","date.value","important-template","",3,"stub"]],template:function(n,e){1&n&&(m.Xb(0,"mat-toolbar",0),m.Kc(1,"\n    "),m.Xb(2,"span"),m.Kc(3,"Example nested models"),m.Wb(),m.Kc(4,"\n"),m.Wb(),m.Kc(5,"\n\n"),m.Xb(6,"div",1),m.Kc(7,"\n    "),m.Xb(8,"div",2),m.Kc(9,"\n        "),m.Xb(10,"pre"),m.Xb(11,"code",3),m.Kc(12,"\n  // app.component.ts\n  import { Component } from \"@angular/core\";\n  import { Pizza } from \"./pizza.interface\";\n\n  @Component({\n    selector: 'app',\n    templateUrl: './app.component.html'\n  })\n  export class AppComponent {\n\n    public pizzas: Pizza[] = [\n        {\n            toppings: ['tomato sauce', 'mozzarella cheese'],\n            prices: {\n              small: '5.00',\n              medium: '6.00',\n              large: '7.00'\n            }\n        },\n        {\n            toppings: ['tomato sauce', 'mozzarella cheese', 'ham'],\n            prices: {\n              small: '6.50',\n              medium: '7.50',\n              large: '8.50'\n            }\n        }\n    ];\n\n  }\n\n"),m.Wb(),m.Wb(),m.Kc(13,"\n    "),m.Wb(),m.Kc(14,"\n    "),m.Xb(15,"div",2),m.Kc(16,"\n        "),m.Xb(17,"pre"),m.Xb(18,"code",3),m.Rb(),m.Kc(19,'\n  \x3c!-- app.component.html --\x3e\n\n  <ngx-table-builder [source]="data" auto-width>\n    <ngx-column key="toppings" width="350"></ngx-column>\n\n    <ngx-column key="prices.small">\n      <ng-template ngx-th>Small</ng-template>\n      <ng-template ngx-td let-cell>{{ cell | currency }}</ng-template>\n    </ngx-column>\n\n     <ngx-column key="prices.small">\n      <ng-template ngx-th>Small</ng-template>\n      <ng-template ngx-td let-cell>{{ cell | currency }}</ng-template>\n    </ngx-column>\n\n    <ngx-column key="prices.small">\n      <ng-template ngx-th>Small</ng-template>\n      <ng-template ngx-td let-cell>{{ cell | currency }}</ng-template>\n    </ngx-column>\n  </ngx-table-builder>\n\n'),m.Yb(),m.Wb(),m.Wb(),m.Kc(20,"\n\n        "),m.Xb(21,"ngx-table-builder",4),m.Kc(22,"\n            "),m.Sb(23,"ngx-column",5),m.Kc(24,"\n\n            "),m.Xb(25,"ngx-column",6),m.Kc(26,"\n                "),m.Ic(27,d,1,0,"ng-template",7),m.Kc(28,"\n                "),m.Ic(29,g,2,3,"ng-template",8),m.Kc(30,"\n            "),m.Wb(),m.Kc(31,"\n\n            "),m.Xb(32,"ngx-column",9),m.Kc(33,"\n                "),m.Ic(34,K,1,0,"ng-template",7),m.Kc(35,"\n                "),m.Ic(36,y,2,3,"ng-template",8),m.Kc(37,"\n            "),m.Wb(),m.Kc(38,"\n\n            "),m.Xb(39,"ngx-column",10),m.Kc(40,"\n                "),m.Ic(41,h,1,0,"ng-template",7),m.Kc(42,"\n                "),m.Ic(43,f,2,3,"ng-template",8),m.Kc(44,"\n            "),m.Wb(),m.Kc(45,"\n        "),m.Wb(),m.Kc(46,"\n    "),m.Wb(),m.Kc(47,"\n"),m.Wb(),m.Kc(48,"\n\n"),m.Sb(49,"br"),m.Kc(50,"\n\n"),m.Xb(51,"div",1),m.Kc(52,"\n    "),m.Xb(53,"div",2),m.Kc(54,"\n        "),m.Xb(55,"ngx-table-builder",4),m.Kc(56,"\n            "),m.Xb(57,"ngx-column",11),m.Kc(58,"\n                "),m.Ic(59,x,1,0,"ng-template",7),m.Kc(60,"\n                "),m.Ic(61,v,2,4,"ng-template",8),m.Kc(62,"\n            "),m.Wb(),m.Kc(63,"\n        "),m.Wb(),m.Kc(64,"\n        "),m.Sb(65,"br"),m.Kc(66,"\n\n        "),m.Xb(67,"pre"),m.Xb(68,"code",3),m.Rb(),m.Kc(69,'\n   \x3c!-- app.component.html --\x3e\n\n   <ngx-table-builder [source]="data" auto-width>\n     \x3c!-- important-template - keyword to override table column styles --\x3e\n     <ngx-column key="date.value" important-template [stub]="null">\n        <ng-template ngx-th>Date</ng-template>\n        <ng-template ngx-td let-date>\n          {{ date | date: \'dd.MM.yyyy HH:mm\' }}\n        </ng-template>\n     </ngx-column>\n   </ngx-table-builder>\n\n        '),m.Yb(),m.Wb(),m.Wb(),m.Kc(70,"\n\n        By default we use '--' for stub invalid value. In some cases, you need not to use a stub. For example, if you\n        leave a stub, an error may occur: "),m.Sb(71,"br"),m.Sb(72,"br"),m.Kc(73,"\n        "),m.Xb(74,"pre"),m.Kc(75," InvalidPipeArgument: 'Unable to convert \"-\" into a date' for pipe 'DatePipe'."),m.Wb(),m.Kc(76,"\n    "),m.Wb(),m.Kc(77,"\n    "),m.Xb(78,"div",2),m.Kc(79,"\n        "),m.Xb(80,"pre"),m.Xb(81,"code",3),m.Rb(),m.Kc(82,"\n  // app.component.ts\n  import { Component } from \"@angular/core\";\n  import { Elements } from \"./elements.interface\";\n\n  @Component({\n    selector: 'app',\n    templateUrl: './app.component.html'\n  })\n  export class AppComponent {\n    public data: Elements[] = [\n     { position: null, name: 'Hydrogen', date: { value: NaN }, symbol: 'H', status: true },\n     { position: 2, name: '', date: { value: new Date() }, symbol: undefined, status: false },\n     { position: 3, name: 'Lithium', date: { value: Infinity }, symbol: 'Li', status: true },\n     { position: 4, name: 'Beryllium', date: { value: 0 }, symbol: '    ', status: false }\n    ];\n  }\n\n"),m.Yb(),m.Wb(),m.Wb(),m.Kc(83,"\n\n        "),m.Xb(84,"p"),m.Kc(85,"\n            "),m.Xb(86,"strong"),m.Kc(87,"Note"),m.Wb(),m.Kc(88,": If you want to override the template body of the table, you just use only ng-template\n            with ngx-td. If you use templating, then you need to specify the keys (example with toppings) in the\n            template in the order in which you want to display your columns.\n        "),m.Wb(),m.Kc(89,"\n\n        "),m.Xb(90,"p"),m.Kc(91,"\n            "),m.Xb(92,"strong"),m.Kc(93,"Note"),m.Wb(),m.Kc(94,": By default, if the cell value is invalid, then the default separator is used. You can\n            override or disable it in the module settings.\n        "),m.Wb(),m.Kc(95,"\n    "),m.Wb(),m.Kc(96,"\n"),m.Wb(),m.Kc(97,"\n\n"),m.Sb(98,"br"),m.Sb(99,"br"),m.Kc(100,"\n")),2&n&&(m.Eb(21),m.qc("source",e.data),m.Eb(34),m.qc("source",e.elements),m.Eb(2),m.qc("stub",null))},directives:[p.a,u.a,r.a,s.a,b.a],pipes:[l.c,l.e],encapsulation:2,changeDetection:0}),X),k=((W=function e(){n(this,e)}).\u0275mod=m.Ob({type:W}),W.\u0275inj=m.Nb({factory:function(n){return new(n||W)},imports:[[l.b,i.a,o.b.forChild([{path:"",component:w}])]]}),W)}}])}();