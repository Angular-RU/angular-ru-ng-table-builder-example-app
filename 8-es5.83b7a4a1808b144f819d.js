!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var c=e[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(n,c.key,c)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{qQ93:function(t,c,o){"use strict";o.r(c),o.d(c,"SampleElevenModule",(function(){return O}));var i=o("An66"),m=o("1VvW"),b=o("5Q2+"),u=o("zMYQ"),x=o("kZht"),l=o("aJOL"),a=o("sq1e"),g=o("1ZKX"),r=o("YW/L"),J=o("t+BJ"),s=o("oIp9"),p=o("BL99"),d=o("j5U8"),f=o("oTne"),h=o("ctyY"),W=o("UDV5");function X(n,e){if(1&n){var t=x.Zb();x.Xb(0,"ngx-context-menu-item",34),x.ec("onClick",(function(n){x.yc(t);var c=e.$implicit;return x.ic(),x.xc(22).toggleColumnVisibility(c.key),n.preventDefault()})),x.Jc(1,"\n                                            "),x.Xb(2,"ngx-menu-content",35),x.Jc(3),x.Wb(),x.Jc(4,"\n                                            "),x.Xb(5,"ngx-menu-content",36),x.Jc(6,"\n                                                "),x.Sb(7,"mat-checkbox",37),x.Jc(8,"\n                                            "),x.Wb(),x.Jc(9,"\n                                        "),x.Wb()}if(2&n){var c=e.$implicit;x.pc("visible",c.isModel),x.Eb(3),x.Kc(c.key),x.Eb(4),x.pc("checked",c.isVisible)}}function y(n,e){if(1&n){var t=x.Zb();x.Xb(0,"ngx-context-menu-item",13,18),x.ec("onClick",(function(){x.yc(t);var n=x.xc(1);return x.ic(2).copyId(n.state.value)})),x.Jc(2,"\n                                    "),x.Sb(3,"ngx-menu-content",15),x.Jc(4,"\n                                    "),x.Xb(5,"ngx-menu-content"),x.Jc(6,"Copy in buffer ID"),x.Wb(),x.Jc(7,"\n                                "),x.Wb()}}function v(n,e){if(1&n&&(x.Xb(0,"ngx-context-menu-item",null,18),x.Jc(2,"\n                                    "),x.Sb(3,"ngx-menu-content",15),x.Jc(4,"\n                                    "),x.Xb(5,"ngx-menu-content"),x.Jc(6),x.Wb(),x.Jc(7,"\n                                "),x.Wb()),2&n){var t=x.xc(1);x.Eb(6),x.Lc("Price: ",t.state.textContent,"")}}function k(n,e){1&n&&(x.Jc(0),x.jc(1,"currency")),2&n&&x.Kc(x.kc(1,1,e.$implicit))}function C(n,e){}function w(n,e){if(1&n&&x.Jc(0),2&n){var t=e.$implicit;x.ic();var c=x.xc(106);x.Lc("\n                                ",c.selectionModel.get(t.id)?"x":"-","\n                            ")}}function S(n,e){1&n&&x.Sb(0,"ngx-column",38),2&n&&x.pc("key",e.$implicit)}function E(n,e){if(1&n){var t=x.Zb();x.Xb(0,"ngx-context-menu-item",34),x.ec("onClick",(function(n){x.yc(t);var c=e.$implicit;return x.ic(),x.xc(106).toggleColumnVisibility(c.key),n.preventDefault()})),x.Jc(1,"\n                                    "),x.Xb(2,"ngx-menu-content",35),x.Jc(3),x.Wb(),x.Jc(4,"\n                                    "),x.Xb(5,"ngx-menu-content",36),x.Jc(6,"\n                                        "),x.Sb(7,"mat-checkbox",37),x.Jc(8,"\n                                    "),x.Wb(),x.Jc(9,"\n                                "),x.Wb()}if(2&n){var c=e.$implicit;x.pc("visible",c.isModel),x.Eb(3),x.Kc(c.key),x.Eb(4),x.pc("checked",c.isVisible)}}function I(n,e){if(1&n){var t=x.Zb();x.Xb(0,"div",3),x.Jc(1,"\n        "),x.Xb(2,"mat-tab-group",4),x.ec("selectedTabChange",(function(){return x.yc(t),x.ic().update()})),x.Jc(3,"\n            "),x.Xb(4,"mat-tab",5),x.Jc(5,"\n                "),x.Xb(6,"div",6),x.Jc(7,"\n                    "),x.Xb(8,"div",3),x.Jc(9,"\n                        "),x.Sb(10,"br"),x.Jc(11,"\n                        "),x.Xb(12,"pre"),x.Xb(13,"code",7),x.Jc(14,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder [source]="data">\n    <ngx-context-menu>\n\n      <ngx-context-menu-item contextTitle divider>\n        <ngx-menu-content icon="./assets/angular.svg"></ngx-menu-content>\n        <ngx-menu-content>My custom context menu title</ngx-menu-content>\n      </ngx-context-menu-item>\n\n      <ngx-context-menu-item (onClick)="exportExcel(data)">\n        <ngx-menu-content icon="./assets/excel.png"></ngx-menu-content>\n        <ngx-menu-content>Export Excel</ngx-menu-content>\n      </ngx-context-menu-item>\n\n      <ngx-context-menu-item #item divider\n       [disable]="!item.state.key"\n       (onClick)="showLine(item.state.key, item.state.item)">\n        <ngx-menu-content icon></ngx-menu-content>\n        <ngx-menu-content>Show item row</ngx-menu-content>\n      </ngx-context-menu-item>\n\n      <ngx-context-menu-item #item\n       *ngIf="item.state.key === \'id\'"\n       (onClick)="copyId(item.state.value)">\n        <ngx-menu-content icon></ngx-menu-content>\n        <ngx-menu-content>Show item row</ngx-menu-content>\n      </ngx-context-menu-item>\n\n    </ngx-context-menu>\n  </ngx-table-builder>\n\n'),x.Wb(),x.Wb(),x.Jc(15,"\n                    "),x.Wb(),x.Jc(16,"\n                    "),x.Xb(17,"div",3),x.Jc(18,"\n                        "),x.Sb(19,"br"),x.Jc(20,"\n\n                        "),x.Xb(21,"ngx-table-builder",8,9),x.Jc(23,"\n                            "),x.Xb(24,"ngx-context-menu",10),x.Jc(25,"\n                                "),x.Xb(26,"ngx-context-menu-item",11),x.Jc(27,"\n                                    "),x.Xb(28,"ngx-menu-content",12),x.Jc(29,"\n                                    "),x.Wb(),x.Jc(30,"\n                                    "),x.Xb(31,"ngx-menu-content"),x.Jc(32," My custom context menu title"),x.Wb(),x.Jc(33,"\n                                "),x.Wb(),x.Jc(34,"\n\n                                "),x.Xb(35,"ngx-context-menu-item",13),x.ec("onClick",(function(){x.yc(t);var n=x.ic();return n.exportExcel(n.licences)})),x.Jc(36,"\n                                    "),x.Xb(37,"ngx-menu-content",14),x.Jc(38,"\n                                    "),x.Wb(),x.Jc(39,"\n                                    "),x.Xb(40,"ngx-menu-content"),x.Jc(41,"Export Excel"),x.Wb(),x.Jc(42,"\n                                "),x.Wb(),x.Jc(43,"\n\n                                "),x.Xb(44,"ngx-context-menu-item"),x.Jc(45,"\n                                    "),x.Sb(46,"ngx-menu-content",15),x.Jc(47,"\n                                    "),x.Xb(48,"ngx-menu-content"),x.Jc(49,"Column settings"),x.Wb(),x.Jc(50,"\n\n                                    "),x.Xb(51,"ngx-context-menu-item"),x.Jc(52,"\n                                        "),x.Xb(53,"ngx-menu-content"),x.Jc(54,"List"),x.Wb(),x.Jc(55,"\n\n                                        "),x.Hc(56,X,10,3,"ngx-context-menu-item",16),x.Jc(57,"\n                                    "),x.Wb(),x.Jc(58,"\n                                "),x.Wb(),x.Jc(59,"\n\n                                "),x.Xb(60,"ngx-context-menu-item",17,18),x.ec("onClick",(function(){x.yc(t);var n=x.xc(61);return x.ic().showLine(n.state.key,n.state.item)})),x.Jc(62,"\n                                    "),x.Sb(63,"ngx-menu-content",15),x.Jc(64,"\n                                    "),x.Xb(65,"ngx-menu-content"),x.Jc(66,"Show item row"),x.Wb(),x.Jc(67,"\n                                "),x.Wb(),x.Jc(68,"\n\n                                "),x.Hc(69,y,8,0,"ngx-context-menu-item",19),x.Jc(70,"\n\n                                "),x.Hc(71,v,8,1,"ngx-context-menu-item",20),x.Jc(72,"\n\n                                "),x.Xb(73,"ngx-context-menu-item"),x.Jc(74,"\n                                    "),x.Sb(75,"ngx-menu-content",15),x.Jc(76,"\n                                    "),x.Xb(77,"ngx-menu-content"),x.Jc(78),x.Wb(),x.Jc(79,"\n                                "),x.Wb(),x.Jc(80,"\n                            "),x.Wb(),x.Jc(81,"\n\n                            "),x.Xb(82,"ngx-column",21),x.Jc(83,"\n                                "),x.Hc(84,k,2,3,"ng-template",22),x.Jc(85,"\n                            "),x.Wb(),x.Jc(86,"\n                        "),x.Wb(),x.Jc(87,"\n\n                        "),x.Sb(88,"br"),x.Jc(89,"\n                        "),x.Sb(90,"br"),x.Jc(91,"\n\n                        "),x.Xb(92,"pre"),x.Xb(93,"code",23),x.Jc(94,"\n  // app.component.ts\n  import { Component } from \"@angular/core\";\n  import { Data } from \"./data.interface\";\n\n  @Component({\n    selector: 'app',\n    templateUrl: './app.component.html'\n  })\n  export class AppComponent {\n\n    public data: Data[] = [ .. ];\n\n    public exportExcel(data: Data[]): void {\n        window.alert('export excel - ' + JSON.stringify(data));\n    }\n\n    public showLine(key: string, item: Data): void {\n        window.alert('key - ' + key + ' item - ' + JSON.stringify(item));\n    }\n\n    public copyId(id: string): void {\n        window.alert('Copy on buffer - ' + id);\n    }\n\n  }\n\n"),x.Wb(),x.Wb(),x.Jc(95,"\n                    "),x.Wb(),x.Jc(96,"\n                "),x.Wb(),x.Jc(97,"\n            "),x.Wb(),x.Jc(98,"\n\n            "),x.Xb(99,"mat-tab",24),x.Jc(100,"\n                "),x.Sb(101,"br"),x.Jc(102,"\n                "),x.Xb(103,"div"),x.Jc(104,"\n                    "),x.Xb(105,"ngx-table-builder",25,26),x.ec("schemaChanges",(function(n){return x.yc(t),x.ic().updatedSchema(n)})),x.Jc(107,"\n                        "),x.Sb(108,"ngx-options",27),x.Jc(109,"\n\n                        "),x.Xb(110,"ngx-column",28),x.Jc(111,"\n                            "),x.Hc(112,C,0,0,"ng-template",29),x.Jc(113,"\n                            "),x.Hc(114,w,1,1,"ng-template",30),x.Jc(115,"\n                        "),x.Wb(),x.Jc(116,"\n\n                        "),x.Hc(117,S,1,1,"ngx-column",31),x.Jc(118,"\n\n                        "),x.Xb(119,"ngx-context-menu"),x.Jc(120,"\n                            "),x.Xb(121,"ngx-context-menu-item",11),x.Jc(122,"\n                                "),x.Xb(123,"ngx-menu-content"),x.Jc(124),x.Wb(),x.Jc(125,"\n                            "),x.Wb(),x.Jc(126,"\n\n                            "),x.Xb(127,"ngx-context-menu-item"),x.Jc(128,"\n                                "),x.Sb(129,"ngx-menu-content",15),x.Jc(130,"\n                                "),x.Xb(131,"ngx-menu-content"),x.Jc(132,"Item1"),x.Wb(),x.Jc(133,"\n                            "),x.Wb(),x.Jc(134,"\n\n                            "),x.Xb(135,"ngx-context-menu-item"),x.Jc(136,"\n                                "),x.Sb(137,"ngx-menu-content",15),x.Jc(138,"\n                                "),x.Xb(139,"ngx-menu-content"),x.Jc(140,"Item2"),x.Wb(),x.Jc(141,"\n                            "),x.Wb(),x.Jc(142,"\n\n                            "),x.Xb(143,"ngx-context-menu-item"),x.Jc(144,"\n                                "),x.Sb(145,"ngx-menu-content",15),x.Jc(146,"\n                                "),x.Xb(147,"ngx-menu-content"),x.Jc(148,"Item3"),x.Wb(),x.Jc(149,"\n                            "),x.Wb(),x.Jc(150,"\n\n                            "),x.Xb(151,"ngx-context-menu-item",32),x.Jc(152,"\n                                "),x.Sb(153,"ngx-menu-content",15),x.Jc(154,"\n                                "),x.Xb(155,"ngx-menu-content"),x.Jc(156,"Item4"),x.Wb(),x.Jc(157,"\n                            "),x.Wb(),x.Jc(158,"\n\n                            "),x.Xb(159,"ngx-context-menu-item"),x.Jc(160,"\n                                "),x.Xb(161,"ngx-menu-content"),x.Jc(162,"Column list"),x.Wb(),x.Jc(163,"\n\n                                "),x.Hc(164,E,10,3,"ngx-context-menu-item",16),x.Jc(165,"\n                            "),x.Wb(),x.Jc(166,"\n\n                            "),x.Xb(167,"ngx-context-menu-item",33),x.ec("onClick",(function(){return x.yc(t),x.xc(106).resetSchema()})),x.Jc(168,"\n                                "),x.Xb(169,"ngx-menu-content"),x.Jc(170,"Reset table settings"),x.Wb(),x.Jc(171,"\n                            "),x.Wb(),x.Jc(172,"\n\n                            "),x.Xb(173,"ngx-context-menu-item"),x.Jc(174,"\n                                "),x.Xb(175,"ngx-menu-content"),x.Jc(176,"Example tree"),x.Wb(),x.Jc(177,"\n\n                                "),x.Xb(178,"ngx-context-menu-item"),x.Jc(179,"\n                                    "),x.Xb(180,"ngx-menu-content"),x.Jc(181,"Root A"),x.Wb(),x.Jc(182,"\n                                    "),x.Xb(183,"ngx-context-menu-item"),x.Jc(184,"\n                                        "),x.Xb(185,"ngx-menu-content"),x.Jc(186,"Child A1"),x.Wb(),x.Jc(187,"\n                                    "),x.Wb(),x.Jc(188,"\n                                    "),x.Xb(189,"ngx-context-menu-item"),x.Jc(190,"\n                                        "),x.Xb(191,"ngx-menu-content"),x.Jc(192,"Child A2"),x.Wb(),x.Jc(193,"\n                                    "),x.Wb(),x.Jc(194,"\n                                    "),x.Xb(195,"ngx-context-menu-item"),x.Jc(196,"\n                                        "),x.Xb(197,"ngx-menu-content"),x.Jc(198,"Child A3"),x.Wb(),x.Jc(199,"\n                                    "),x.Wb(),x.Jc(200,"\n                                "),x.Wb(),x.Jc(201,"\n\n                                "),x.Xb(202,"ngx-context-menu-item"),x.Jc(203,"\n                                    "),x.Xb(204,"ngx-menu-content"),x.Jc(205,"Root B"),x.Wb(),x.Jc(206,"\n                                "),x.Wb(),x.Jc(207,"\n\n                                "),x.Xb(208,"ngx-context-menu-item"),x.Jc(209,"\n                                    "),x.Xb(210,"ngx-menu-content"),x.Jc(211,"Root C"),x.Wb(),x.Jc(212,"\n                                    "),x.Xb(213,"ngx-context-menu-item"),x.Jc(214,"\n                                        "),x.Xb(215,"ngx-menu-content"),x.Jc(216," Child C1"),x.Wb(),x.Jc(217,"\n                                    "),x.Wb(),x.Jc(218,"\n                                    "),x.Xb(219,"ngx-context-menu-item"),x.Jc(220,"\n                                        "),x.Xb(221,"ngx-menu-content"),x.Jc(222,"Child C2"),x.Wb(),x.Jc(223,"\n                                    "),x.Wb(),x.Jc(224,"\n                                    "),x.Xb(225,"ngx-context-menu-item"),x.Jc(226,"\n                                        "),x.Xb(227,"ngx-menu-content"),x.Jc(228,"Child C3"),x.Wb(),x.Jc(229,"\n                                    "),x.Wb(),x.Jc(230,"\n                                "),x.Wb(),x.Jc(231,"\n                            "),x.Wb(),x.Jc(232,"\n                        "),x.Wb(),x.Jc(233,"\n                    "),x.Wb(),x.Jc(234,"\n                "),x.Wb(),x.Jc(235,"\n                "),x.Xb(236,"div",6),x.Jc(237,"\n                    "),x.Xb(238,"div",3),x.Jc(239,"\n                        "),x.Sb(240,"br"),x.Jc(241,"\n\n                        "),x.Xb(242,"p"),x.Xb(243,"b"),x.Jc(244,"Note"),x.Wb(),x.Jc(245,": You can also wrap the templates in your component."),x.Wb(),x.Jc(246,"\n\n                        "),x.Xb(247,"pre"),x.Xb(248,"code",7),x.Rb(),x.Jc(249,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder #table [source]="data" height="500" enable-selection>\n    <ngx-options [resizable]="true" [sortable]="true"></ngx-options>\n\n    <ngx-context-menu>\n       <my-menu [table]="table"></my-menu>\n    </ngx-context-menu>\n\n    <ngx-column key="action" custom-key sticky [resizable]="false" [width]="50">\n        <ng-template ngx-th></ng-template>\n        <ng-template ngx-td row let-row>\n            {{ table.selectionModel.get($any(row).id) ? \'x\' : \'-\' }}\n        </ng-template>\n    </ngx-column>\n\n    <ngx-column *ngFor="let key of table.modelColumnKeys" [key]="key"></ngx-column>\n  </ngx-table-builder>\n\n'),x.Yb(),x.Wb(),x.Wb(),x.Jc(250,"\n                        "),x.Sb(251,"br"),x.Jc(252,"\n                        "),x.Xb(253,"pre"),x.Xb(254,"code",23),x.Jc(255,"\n  // my-menu.component.ts\n  import { TableBuilderComponent } from \"@angular-ru/ng-table-builder\";\n  import { Component } from \"@angular/core\";\n\n  @Component({\n    selector: 'my-menu',\n    templateUrl: './my-menu.component.html'\n  })\n  export class MyMenuComponent {\n    @Input() public table: TableBuilderComponent;\n  }\n\n"),x.Wb(),x.Wb(),x.Jc(256,"\n                    "),x.Wb(),x.Jc(257,"\n                    "),x.Xb(258,"div",3),x.Jc(259,"\n                        "),x.Sb(260,"br"),x.Jc(261,"\n                        "),x.Xb(262,"p"),x.Xb(263,"b"),x.Jc(264,"Note"),x.Wb(),x.Jc(265,": You can also wrap the templates in your component."),x.Wb(),x.Jc(266,"\n                        "),x.Xb(267,"pre"),x.Xb(268,"code",7),x.Rb(),x.Jc(269,'\n  \x3c!-- my-menu.component.html --\x3e\n\n  \x3c!-- first item --\x3e\n  <ngx-context-menu-item contextTitle divider>\n      <ngx-menu-content>Menu</ngx-menu-content>\n  </ngx-context-menu-item>\n\n  \x3c!-- second item --\x3e\n  <ngx-context-menu-item>\n      <ngx-menu-content>Column list</ngx-menu-content>\n\n      <ngx-context-menu-item\n          *ngFor="let column of table.columnSchema"\n          (onClick)="table.toggleColumnVisibility(column.key); $events.preventDefault()"\n          [visible]="column.isModel"\n      >\n          <ngx-menu-content no-margin>{{ column.key }}</ngx-menu-content>\n          <ngx-menu-content no-margin align-center>\n              <mat-checkbox\n                  color="primary"\n                  [checked]="column.visible"\n              ></mat-checkbox>\n          </ngx-menu-content>\n      </ngx-context-menu-item>\n  </ngx-context-menu-item>\n\n  \x3c!-- third item --\x3e\n  <ngx-context-menu-item (onClick)="table.resetSchema()" divider>\n      <ngx-menu-content>Reset table settings</ngx-menu-content>\n  </ngx-context-menu-item>\n\n  \x3c!-- fourth item --\x3e\n  <ngx-context-menu-item>\n\n      <ngx-menu-content>Example tree</ngx-menu-content>\n\n      <ngx-context-menu-item>\n          <ngx-menu-content>Root A</ngx-menu-content>\n          <ngx-context-menu-item>\n              <ngx-menu-content>Child A1</ngx-menu-content>\n          </ngx-context-menu-item>\n          <ngx-context-menu-item>\n              <ngx-menu-content>Child A2</ngx-menu-content>\n          </ngx-context-menu-item>\n          <ngx-context-menu-item>\n              <ngx-menu-content>Child A3</ngx-menu-content>\n          </ngx-context-menu-item>\n      </ngx-context-menu-item>\n\n      <ngx-context-menu-item>\n          <ngx-menu-content>Root B</ngx-menu-content>\n      </ngx-context-menu-item>\n\n      <ngx-context-menu-item>\n          <ngx-menu-content>Root C</ngx-menu-content>\n          <ngx-context-menu-item>\n              <ngx-menu-content> Child C1</ngx-menu-content>\n          </ngx-context-menu-item>\n          <ngx-context-menu-item>\n              <ngx-menu-content>Child C2</ngx-menu-content>\n          </ngx-context-menu-item>\n          <ngx-context-menu-item>\n              <ngx-menu-content>Child C3</ngx-menu-content>\n          </ngx-context-menu-item>\n      </ngx-context-menu-item>\n\n  </ngx-context-menu-item>\n\n'),x.Yb(),x.Wb(),x.Wb(),x.Jc(270,"\n                    "),x.Wb(),x.Jc(271,"\n                "),x.Wb(),x.Jc(272,"\n            "),x.Wb(),x.Jc(273,"\n        "),x.Wb(),x.Jc(274,"\n    "),x.Wb()}if(2&n){var c=x.xc(22),o=x.xc(61),i=x.xc(106),m=x.ic();x.Eb(21),x.pc("source",m.licences),x.Eb(3),x.pc("height",null),x.Eb(32),x.pc("ngForOf",c.columnSchema),x.Eb(4),x.pc("disable",!o.state.key),x.Eb(9),x.pc("ngIf","id"===o.state.key),x.Eb(2),x.pc("ngIf","price"===o.state.key),x.Eb(7),x.Lc("\n                                        Selected items (",null==c||null==c.selectedItems?null:c.selectedItems.length,")\n                                    "),x.Eb(27),x.pc("source",m.data),x.Eb(5),x.pc("is-draggable",!1),x.Eb(7),x.pc("ngForOf",i.modelColumnKeys),x.Eb(7),x.Lc("Menu ",i.selection.selectionModel.size,""),x.Eb(40),x.pc("ngForOf",i.columnSchema)}}var L,M,A=((M=function(){function t(e){n(this,t),this.cd=e,this.data=[],this.licences=[{id:1,name:"single",price:29.3},{id:2,name:"developer",price:49.8},{id:3,name:"premium",price:99.5},{id:4,name:"enterprise",price:199}]}var c,o,i;return c=t,(o=[{key:"ngOnInit",value:function(){var n=this;u.a.generator(50,15).then((function(e){n.data=e,n.cd.detectChanges()}))}},{key:"ngAfterViewInit",value:function(){this.update()}},{key:"update",value:function(){document.querySelectorAll("pre code").forEach((function(n){hljs.highlightBlock(n)}))}},{key:"exportExcel",value:function(n){window.alert("export excel - "+JSON.stringify(n))}},{key:"showLine",value:function(n,e){window.alert("key - "+n+" item - "+JSON.stringify(e))}},{key:"copyId",value:function(n){window.alert("Copy on buffer - "+n)}},{key:"updatedSchema",value:function(n){console.log("Update schema",n)}}])&&e(c.prototype,o),i&&e(c,i),t}()).\u0275fac=function(n){return new(n||M)(x.Qb(x.h))},M.\u0275cmp=x.Kb({type:M,selectors:[["sample-eleven"]],decls:11,vars:1,consts:[[1,"simple-toolbar"],[1,"night"],["class","column",4,"ngIf"],[1,"column"],[3,"selectedTabChange"],["label","Custom context menu"],[1,"column-samples"],[1,"html"],["enable-selection","",3,"source"],["table1",""],[3,"height"],["contextTitle","","divider",""],["icon","https://angular.io/assets/images/logos/angular/angular.svg"],[3,"onClick"],["icon","http://www.myiconfinder.com/uploads/iconsets/ae86b3a8881d697b6c42528aff5ba48b-excel.png"],["icon",""],[3,"visible","onClick",4,"ngFor","ngForOf"],["divider","",3,"disable","onClick"],["item",""],[3,"onClick",4,"ngIf"],[4,"ngIf"],["key","price","important-template",""],["ngx-td",""],[1,"javascript"],["label","Custom sub menu"],["height","500","enable-selection","",3,"source","schemaChanges"],["table2",""],["is-draggable","","is-sortable",""],["key","action","custom-key","","sticky","","width","50",3,"is-draggable"],["ngx-th",""],["ngx-td","","row",""],[3,"key",4,"ngFor","ngForOf"],["divider",""],["divider","",3,"onClick"],[3,"visible","onClick"],["no-margin",""],["no-margin","","align-center",""],["color","primary",3,"checked"],[3,"key"]],template:function(n,e){1&n&&(x.Xb(0,"mat-toolbar",0),x.Jc(1,"\n    "),x.Xb(2,"span"),x.Jc(3,"Example context menu"),x.Wb(),x.Jc(4,"\n"),x.Wb(),x.Jc(5,"\n\n"),x.Xb(6,"div",1),x.Jc(7,"\n    "),x.Hc(8,I,275,12,"div",2),x.Jc(9,"\n"),x.Wb(),x.Jc(10,"\n")),2&n&&(x.Eb(8),x.pc("ngIf",e.licences.length))},directives:[l.a,i.m,a.b,a.a,g.a,r.a,J.a,s.a,i.l,p.a,d.a,f.a,h.a,W.a],pipes:[i.c],styles:["\n            .night {\n                position: relative;\n                margin: auto;\n            }\n\n            /*noinspection CssUnusedSymbol*/\n            .night .mat-tab-body-content {\n                padding: 5px 0;\n                height: calc(100% - 10px);\n                overflow: hidden;\n            }\n\n            /*noinspection ALL*/\n            .night .mat-tab-body-wrapper .mat-tab-body.mat-tab-body-active {\n                overflow: visible;\n                max-width: 100%;\n            }\n        "],encapsulation:2,changeDetection:0}),M),O=((L=function e(){n(this,e)}).\u0275mod=x.Ob({type:L}),L.\u0275inj=x.Nb({factory:function(n){return new(n||L)},imports:[[i.b,b.a,m.b.forChild([{path:"",component:A}])]]}),L)}}])}();