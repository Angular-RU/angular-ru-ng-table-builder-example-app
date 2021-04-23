!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{I68A:function(t,a,c){"use strict";c.r(a),c.d(a,"SampleFourthModule",function(){return k});var l=c("An66"),o=c("1VvW"),i=c("5Q2+"),m=c("kZht"),p=c("aJOL"),u=c("1ZKX"),r=c("BL99"),s=c("ctyY"),b=c("j5U8");function d(n,e){1&n&&m.Gc(0,"Small")}function g(n,e){1&n&&(m.Gc(0),m.ic(1,"currency")),2&n&&m.Hc(m.jc(1,1,e.$implicit))}function G(n,e){1&n&&m.Gc(0,"Medium")}function y(n,e){1&n&&(m.Gc(0),m.ic(1,"currency")),2&n&&m.Hc(m.jc(1,1,e.$implicit))}function h(n,e){1&n&&m.Gc(0,"Large")}function f(n,e){1&n&&(m.Gc(0),m.ic(1,"currency")),2&n&&m.Hc(m.jc(1,1,e.$implicit))}function x(n,e){1&n&&m.Gc(0,"Date")}function v(n,e){1&n&&(m.Gc(0),m.ic(1,"date")),2&n&&m.Ic("\n                    ",m.kc(1,1,e.$implicit,"dd.MM.yyyy HH:mm"),"\n                ")}var U,V,w=((V=function(){function t(){n(this,t),this.data=[],this.elements=[]}var a,c,l;return a=t,(c=[{key:"ngOnInit",value:function(){this.data=[{toppings:["tomato sauce","mozzarella cheese"],prices:{small:"5.00",medium:"6.00",large:"7.00"}},{toppings:["tomato sauce","mozzarella cheese","ham"],prices:{small:"6.50",medium:"7.50",large:"8.50"}}],this.elements=[{position:null,name:"Hydrogen",date:{value:NaN},symbol:"H",status:!0},{position:2,name:"",date:{value:new Date},symbol:void 0,status:!1},{position:3,name:"Lithium",date:{value:1/0},symbol:"Li",status:!0},{position:4,name:"Beryllium",date:{value:0},symbol:"    ",status:!1}]}},{key:"ngAfterViewInit",value:function(){document.querySelectorAll("pre code").forEach(function(n){hljs.highlightBlock(n)})}}])&&e(a.prototype,c),l&&e(a,l),t}()).\u0275fac=function(n){return new(n||V)},V.\u0275cmp=m.Ib({type:V,selectors:[["sample-fourth"]],decls:101,vars:3,consts:[[1,"simple-toolbar"],[1,"column-samples"],[1,"column"],[1,"javascript"],["auto-width","",3,"source"],["key","toppings","width","350"],["key","prices.small"],["ngx-th",""],["ngx-td",""],["key","prices.medium"],["key","prices.large"],["key","date.value","important-template","",3,"stub"]],template:function(n,e){1&n&&(m.Vb(0,"mat-toolbar",0),m.Gc(1,"\n    "),m.Vb(2,"span"),m.Gc(3,"Example nested models"),m.Ub(),m.Gc(4,"\n"),m.Ub(),m.Gc(5,"\n\n"),m.Vb(6,"div",1),m.Gc(7,"\n    "),m.Vb(8,"div",2),m.Gc(9,"\n        "),m.Vb(10,"pre"),m.Vb(11,"code",3),m.Gc(12,"\n  // app.component.ts\n  import { Component } from \"@angular/core\";\n  import { Pizza } from \"./pizza.interface\";\n\n  @Component({\n    selector: 'app',\n    templateUrl: './app.component.html'\n  })\n  export class AppComponent {\n\n    public pizzas: Pizza[] = [\n        {\n            toppings: ['tomato sauce', 'mozzarella cheese'],\n            prices: {\n              small: '5.00',\n              medium: '6.00',\n              large: '7.00'\n            }\n        },\n        {\n            toppings: ['tomato sauce', 'mozzarella cheese', 'ham'],\n            prices: {\n              small: '6.50',\n              medium: '7.50',\n              large: '8.50'\n            }\n        }\n    ];\n\n  }\n\n"),m.Ub(),m.Ub(),m.Gc(13,"\n    "),m.Ub(),m.Gc(14,"\n    "),m.Vb(15,"div",2),m.Gc(16,"\n        "),m.Vb(17,"pre"),m.Vb(18,"code",3),m.Pb(),m.Gc(19,'\n  \x3c!-- app.component.html --\x3e\n\n  <ngx-table-builder [source]="data" auto-width>\n    <ngx-column key="toppings" width="350"></ngx-column>\n\n    <ngx-column key="prices.small">\n      <ng-template ngx-th>Small</ng-template>\n      <ng-template ngx-td let-cell>{{ cell | currency }}</ng-template>\n    </ngx-column>\n\n     <ngx-column key="prices.small">\n      <ng-template ngx-th>Small</ng-template>\n      <ng-template ngx-td let-cell>{{ cell | currency }}</ng-template>\n    </ngx-column>\n\n    <ngx-column key="prices.small">\n      <ng-template ngx-th>Small</ng-template>\n      <ng-template ngx-td let-cell>{{ cell | currency }}</ng-template>\n    </ngx-column>\n  </ngx-table-builder>\n\n'),m.Wb(),m.Ub(),m.Ub(),m.Gc(20,"\n\n        "),m.Vb(21,"ngx-table-builder",4),m.Gc(22,"\n            "),m.Qb(23,"ngx-column",5),m.Gc(24,"\n\n            "),m.Vb(25,"ngx-column",6),m.Gc(26,"\n                "),m.Ec(27,d,1,0,"ng-template",7),m.Gc(28,"\n                "),m.Ec(29,g,2,3,"ng-template",8),m.Gc(30,"\n            "),m.Ub(),m.Gc(31,"\n\n            "),m.Vb(32,"ngx-column",9),m.Gc(33,"\n                "),m.Ec(34,G,1,0,"ng-template",7),m.Gc(35,"\n                "),m.Ec(36,y,2,3,"ng-template",8),m.Gc(37,"\n            "),m.Ub(),m.Gc(38,"\n\n            "),m.Vb(39,"ngx-column",10),m.Gc(40,"\n                "),m.Ec(41,h,1,0,"ng-template",7),m.Gc(42,"\n                "),m.Ec(43,f,2,3,"ng-template",8),m.Gc(44,"\n            "),m.Ub(),m.Gc(45,"\n        "),m.Ub(),m.Gc(46,"\n    "),m.Ub(),m.Gc(47,"\n"),m.Ub(),m.Gc(48,"\n\n"),m.Qb(49,"br"),m.Gc(50,"\n\n"),m.Vb(51,"div",1),m.Gc(52,"\n    "),m.Vb(53,"div",2),m.Gc(54,"\n        "),m.Vb(55,"ngx-table-builder",4),m.Gc(56,"\n            "),m.Vb(57,"ngx-column",11),m.Gc(58,"\n                "),m.Ec(59,x,1,0,"ng-template",7),m.Gc(60,"\n                "),m.Ec(61,v,2,4,"ng-template",8),m.Gc(62,"\n            "),m.Ub(),m.Gc(63,"\n        "),m.Ub(),m.Gc(64,"\n        "),m.Qb(65,"br"),m.Gc(66,"\n\n        "),m.Vb(67,"pre"),m.Vb(68,"code",3),m.Pb(),m.Gc(69,'\n   \x3c!-- app.component.html --\x3e\n\n   <ngx-table-builder [source]="data" auto-width>\n     \x3c!-- important-template - keyword to override table column styles --\x3e\n     <ngx-column key="date.value" important-template [stub]="null">\n        <ng-template ngx-th>Date</ng-template>\n        <ng-template ngx-td let-date>\n          {{ date | date: \'dd.MM.yyyy HH:mm\' }}\n        </ng-template>\n     </ngx-column>\n   </ngx-table-builder>\n\n        '),m.Wb(),m.Ub(),m.Ub(),m.Gc(70,"\n\n        By default we use '--' for stub invalid value. In some cases, you need not to use a stub. For example, if you\n        leave a stub, an error may occur: "),m.Qb(71,"br"),m.Qb(72,"br"),m.Gc(73,"\n        "),m.Vb(74,"pre"),m.Gc(75," InvalidPipeArgument: 'Unable to convert \"-\" into a date' for pipe 'DatePipe'."),m.Ub(),m.Gc(76,"\n    "),m.Ub(),m.Gc(77,"\n    "),m.Vb(78,"div",2),m.Gc(79,"\n        "),m.Vb(80,"pre"),m.Vb(81,"code",3),m.Pb(),m.Gc(82,"\n  // app.component.ts\n  import { Component } from \"@angular/core\";\n  import { Elements } from \"./elements.interface\";\n\n  @Component({\n    selector: 'app',\n    templateUrl: './app.component.html'\n  })\n  export class AppComponent {\n    public data: Elements[] = [\n     { position: null, name: 'Hydrogen', date: { value: NaN }, symbol: 'H', status: true },\n     { position: 2, name: '', date: { value: new Date() }, symbol: undefined, status: false },\n     { position: 3, name: 'Lithium', date: { value: Infinity }, symbol: 'Li', status: true },\n     { position: 4, name: 'Beryllium', date: { value: 0 }, symbol: '    ', status: false }\n    ];\n  }\n\n"),m.Wb(),m.Ub(),m.Ub(),m.Gc(83,"\n\n        "),m.Vb(84,"p"),m.Gc(85,"\n            "),m.Vb(86,"strong"),m.Gc(87,"Note"),m.Ub(),m.Gc(88,": If you want to override the template body of the table, you just use only ng-template\n            with ngx-td. If you use templating, then you need to specify the keys (example with toppings) in the\n            template in the order in which you want to display your columns.\n        "),m.Ub(),m.Gc(89,"\n\n        "),m.Vb(90,"p"),m.Gc(91,"\n            "),m.Vb(92,"strong"),m.Gc(93,"Note"),m.Ub(),m.Gc(94,": By default, if the cell value is invalid, then the default separator is used. You can\n            override or disable it in the module settings.\n        "),m.Ub(),m.Gc(95,"\n    "),m.Ub(),m.Gc(96,"\n"),m.Ub(),m.Gc(97,"\n\n"),m.Qb(98,"br"),m.Qb(99,"br"),m.Gc(100,"\n")),2&n&&(m.Cb(21),m.oc("source",e.data),m.Cb(34),m.oc("source",e.elements),m.Cb(2),m.oc("stub",null))},directives:[p.a,u.a,r.a,s.a,b.a],pipes:[l.c,l.e],encapsulation:2,changeDetection:0}),V),k=((U=function e(){n(this,e)}).\u0275mod=m.Mb({type:U}),U.\u0275inj=m.Lb({factory:function(n){return new(n||U)},imports:[[l.b,i.a,o.b.forChild([{path:"",component:w}])]]}),U)}}])}();