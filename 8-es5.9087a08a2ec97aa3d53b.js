!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var c=e[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(n,c.key,c)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{qQ93:function(t,c,o){"use strict";o.r(c),o.d(c,"SampleElevenModule",function(){return B});var i=o("An66"),m=o("1VvW"),b=o("5Q2+"),u=o("zMYQ"),x=o("kZht"),l=o("aJOL"),a=o("sq1e"),g=o("1ZKX"),r=o("YW/L"),s=o("t+BJ"),K=o("oIp9"),p=o("BL99"),d=o("j5U8"),h=o("oTne"),f=o("ctyY"),Y=o("UDV5");function Z(n,e){if(1&n){var t=x.bc();x.Zb(0,"ngx-context-menu-item",34),x.hc("onClick",function(n){x.Bc(t);var c=e.$implicit;return x.lc(),x.Ac(22).toggleColumnVisibility(c.key),n.preventDefault()}),x.Kc(1,"\n                                            "),x.Zb(2,"ngx-menu-content",35),x.Kc(3),x.Yb(),x.Kc(4,"\n                                            "),x.Zb(5,"ngx-menu-content",36),x.Kc(6,"\n                                                "),x.Ub(7,"mat-checkbox",37),x.Kc(8,"\n                                            "),x.Yb(),x.Kc(9,"\n                                        "),x.Yb()}if(2&n){var c=e.$implicit;x.sc("visible",c.isModel),x.Gb(3),x.Lc(c.key),x.Gb(4),x.sc("checked",c.isVisible)}}function y(n,e){if(1&n){var t=x.bc();x.Zb(0,"ngx-context-menu-item",13,18),x.hc("onClick",function(){x.Bc(t);var n=x.Ac(1);return x.lc(2).copyId(n.state.value)}),x.Kc(2,"\n                                    "),x.Ub(3,"ngx-menu-content",15),x.Kc(4,"\n                                    "),x.Zb(5,"ngx-menu-content"),x.Kc(6,"Copy in buffer ID"),x.Yb(),x.Kc(7,"\n                                "),x.Yb()}}function v(n,e){if(1&n&&(x.Zb(0,"ngx-context-menu-item",null,18),x.Kc(2,"\n                                    "),x.Ub(3,"ngx-menu-content",15),x.Kc(4,"\n                                    "),x.Zb(5,"ngx-menu-content"),x.Kc(6),x.Yb(),x.Kc(7,"\n                                "),x.Yb()),2&n){var t=x.Ac(1);x.Gb(6),x.Mc("Price: ",t.state.textContent,"")}}function k(n,e){1&n&&(x.Kc(0),x.mc(1,"currency")),2&n&&x.Lc(x.nc(1,1,e.$implicit))}function C(n,e){}function w(n,e){if(1&n&&x.Kc(0),2&n){var t=e.$implicit;x.lc();var c=x.Ac(106);x.Mc("\n                                ",c.selectionModel.get(t.id)?"x":"-","\n                            ")}}function I(n,e){1&n&&x.Ub(0,"ngx-column",38),2&n&&x.sc("key",e.$implicit)}function U(n,e){if(1&n){var t=x.bc();x.Zb(0,"ngx-context-menu-item",34),x.hc("onClick",function(n){x.Bc(t);var c=e.$implicit;return x.lc(),x.Ac(106).toggleColumnVisibility(c.key),n.preventDefault()}),x.Kc(1,"\n                                    "),x.Zb(2,"ngx-menu-content",35),x.Kc(3),x.Yb(),x.Kc(4,"\n                                    "),x.Zb(5,"ngx-menu-content",36),x.Kc(6,"\n                                        "),x.Ub(7,"mat-checkbox",37),x.Kc(8,"\n                                    "),x.Yb(),x.Kc(9,"\n                                "),x.Yb()}if(2&n){var c=e.$implicit;x.sc("visible",c.isModel),x.Gb(3),x.Lc(c.key),x.Gb(4),x.sc("checked",c.isVisible)}}function A(n,e){if(1&n){var t=x.bc();x.Zb(0,"div",3),x.Kc(1,"\n        "),x.Zb(2,"mat-tab-group",4),x.hc("selectedTabChange",function(){return x.Bc(t),x.lc().update()}),x.Kc(3,"\n            "),x.Zb(4,"mat-tab",5),x.Kc(5,"\n                "),x.Zb(6,"div",6),x.Kc(7,"\n                    "),x.Zb(8,"div",3),x.Kc(9,"\n                        "),x.Ub(10,"br"),x.Kc(11,"\n                        "),x.Zb(12,"pre"),x.Zb(13,"code",7),x.Kc(14,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder [source]="data">\n    <ngx-context-menu>\n\n      <ngx-context-menu-item contextTitle divider>\n        <ngx-menu-content icon="./assets/angular.svg"></ngx-menu-content>\n        <ngx-menu-content>My custom context menu title</ngx-menu-content>\n      </ngx-context-menu-item>\n\n      <ngx-context-menu-item (onClick)="exportExcel(data)">\n        <ngx-menu-content icon="./assets/excel.png"></ngx-menu-content>\n        <ngx-menu-content>Export Excel</ngx-menu-content>\n      </ngx-context-menu-item>\n\n      <ngx-context-menu-item #item divider\n       [disable]="!item.state.key"\n       (onClick)="showLine(item.state.key, item.state.item)">\n        <ngx-menu-content icon></ngx-menu-content>\n        <ngx-menu-content>Show item row</ngx-menu-content>\n      </ngx-context-menu-item>\n\n      <ngx-context-menu-item #item\n       *ngIf="item.state.key === \'id\'"\n       (onClick)="copyId(item.state.value)">\n        <ngx-menu-content icon></ngx-menu-content>\n        <ngx-menu-content>Show item row</ngx-menu-content>\n      </ngx-context-menu-item>\n\n    </ngx-context-menu>\n  </ngx-table-builder>\n\n'),x.Yb(),x.Yb(),x.Kc(15,"\n                    "),x.Yb(),x.Kc(16,"\n                    "),x.Zb(17,"div",3),x.Kc(18,"\n                        "),x.Ub(19,"br"),x.Kc(20,"\n\n                        "),x.Zb(21,"ngx-table-builder",8,9),x.Kc(23,"\n                            "),x.Zb(24,"ngx-context-menu",10),x.Kc(25,"\n                                "),x.Zb(26,"ngx-context-menu-item",11),x.Kc(27,"\n                                    "),x.Zb(28,"ngx-menu-content",12),x.Kc(29,"\n                                    "),x.Yb(),x.Kc(30,"\n                                    "),x.Zb(31,"ngx-menu-content"),x.Kc(32," My custom context menu title"),x.Yb(),x.Kc(33,"\n                                "),x.Yb(),x.Kc(34,"\n\n                                "),x.Zb(35,"ngx-context-menu-item",13),x.hc("onClick",function(){x.Bc(t);var n=x.lc();return n.exportExcel(n.licences)}),x.Kc(36,"\n                                    "),x.Zb(37,"ngx-menu-content",14),x.Kc(38,"\n                                    "),x.Yb(),x.Kc(39,"\n                                    "),x.Zb(40,"ngx-menu-content"),x.Kc(41,"Export Excel"),x.Yb(),x.Kc(42,"\n                                "),x.Yb(),x.Kc(43,"\n\n                                "),x.Zb(44,"ngx-context-menu-item"),x.Kc(45,"\n                                    "),x.Ub(46,"ngx-menu-content",15),x.Kc(47,"\n                                    "),x.Zb(48,"ngx-menu-content"),x.Kc(49,"Column settings"),x.Yb(),x.Kc(50,"\n\n                                    "),x.Zb(51,"ngx-context-menu-item"),x.Kc(52,"\n                                        "),x.Zb(53,"ngx-menu-content"),x.Kc(54,"List"),x.Yb(),x.Kc(55,"\n\n                                        "),x.Ic(56,Z,10,3,"ngx-context-menu-item",16),x.Kc(57,"\n                                    "),x.Yb(),x.Kc(58,"\n                                "),x.Yb(),x.Kc(59,"\n\n                                "),x.Zb(60,"ngx-context-menu-item",17,18),x.hc("onClick",function(){x.Bc(t);var n=x.Ac(61);return x.lc().showLine(n.state.key,n.state.item)}),x.Kc(62,"\n                                    "),x.Ub(63,"ngx-menu-content",15),x.Kc(64,"\n                                    "),x.Zb(65,"ngx-menu-content"),x.Kc(66,"Show item row"),x.Yb(),x.Kc(67,"\n                                "),x.Yb(),x.Kc(68,"\n\n                                "),x.Ic(69,y,8,0,"ngx-context-menu-item",19),x.Kc(70,"\n\n                                "),x.Ic(71,v,8,1,"ngx-context-menu-item",20),x.Kc(72,"\n\n                                "),x.Zb(73,"ngx-context-menu-item"),x.Kc(74,"\n                                    "),x.Ub(75,"ngx-menu-content",15),x.Kc(76,"\n                                    "),x.Zb(77,"ngx-menu-content"),x.Kc(78),x.Yb(),x.Kc(79,"\n                                "),x.Yb(),x.Kc(80,"\n                            "),x.Yb(),x.Kc(81,"\n\n                            "),x.Zb(82,"ngx-column",21),x.Kc(83,"\n                                "),x.Ic(84,k,2,3,"ng-template",22),x.Kc(85,"\n                            "),x.Yb(),x.Kc(86,"\n                        "),x.Yb(),x.Kc(87,"\n\n                        "),x.Ub(88,"br"),x.Kc(89,"\n                        "),x.Ub(90,"br"),x.Kc(91,"\n\n                        "),x.Zb(92,"pre"),x.Zb(93,"code",23),x.Kc(94,"\n  // app.component.ts\n  import { Component } from \"@angular/core\";\n  import { Data } from \"./data.interface\";\n\n  @Component({\n    selector: 'app',\n    templateUrl: './app.component.html'\n  })\n  export class AppComponent {\n\n    public data: Data[] = [ .. ];\n\n    public exportExcel(data: Data[]): void {\n        window.alert('export excel - ' + JSON.stringify(data));\n    }\n\n    public showLine(key: string, item: Data): void {\n        window.alert('key - ' + key + ' item - ' + JSON.stringify(item));\n    }\n\n    public copyId(id: string): void {\n        window.alert('Copy on buffer - ' + id);\n    }\n\n  }\n\n"),x.Yb(),x.Yb(),x.Kc(95,"\n                    "),x.Yb(),x.Kc(96,"\n                "),x.Yb(),x.Kc(97,"\n            "),x.Yb(),x.Kc(98,"\n\n            "),x.Zb(99,"mat-tab",24),x.Kc(100,"\n                "),x.Ub(101,"br"),x.Kc(102,"\n                "),x.Zb(103,"div"),x.Kc(104,"\n                    "),x.Zb(105,"ngx-table-builder",25,26),x.hc("schemaChanges",function(n){return x.Bc(t),x.lc().updatedSchema(n)}),x.Kc(107,"\n                        "),x.Ub(108,"ngx-options",27),x.Kc(109,"\n\n                        "),x.Zb(110,"ngx-column",28),x.Kc(111,"\n                            "),x.Ic(112,C,0,0,"ng-template",29),x.Kc(113,"\n                            "),x.Ic(114,w,1,1,"ng-template",30),x.Kc(115,"\n                        "),x.Yb(),x.Kc(116,"\n\n                        "),x.Ic(117,I,1,1,"ngx-column",31),x.Kc(118,"\n\n                        "),x.Zb(119,"ngx-context-menu"),x.Kc(120,"\n                            "),x.Zb(121,"ngx-context-menu-item",11),x.Kc(122,"\n                                "),x.Zb(123,"ngx-menu-content"),x.Kc(124),x.Yb(),x.Kc(125,"\n                            "),x.Yb(),x.Kc(126,"\n\n                            "),x.Zb(127,"ngx-context-menu-item"),x.Kc(128,"\n                                "),x.Ub(129,"ngx-menu-content",15),x.Kc(130,"\n                                "),x.Zb(131,"ngx-menu-content"),x.Kc(132,"Item1"),x.Yb(),x.Kc(133,"\n                            "),x.Yb(),x.Kc(134,"\n\n                            "),x.Zb(135,"ngx-context-menu-item"),x.Kc(136,"\n                                "),x.Ub(137,"ngx-menu-content",15),x.Kc(138,"\n                                "),x.Zb(139,"ngx-menu-content"),x.Kc(140,"Item2"),x.Yb(),x.Kc(141,"\n                            "),x.Yb(),x.Kc(142,"\n\n                            "),x.Zb(143,"ngx-context-menu-item"),x.Kc(144,"\n                                "),x.Ub(145,"ngx-menu-content",15),x.Kc(146,"\n                                "),x.Zb(147,"ngx-menu-content"),x.Kc(148,"Item3"),x.Yb(),x.Kc(149,"\n                            "),x.Yb(),x.Kc(150,"\n\n                            "),x.Zb(151,"ngx-context-menu-item",32),x.Kc(152,"\n                                "),x.Ub(153,"ngx-menu-content",15),x.Kc(154,"\n                                "),x.Zb(155,"ngx-menu-content"),x.Kc(156,"Item4"),x.Yb(),x.Kc(157,"\n                            "),x.Yb(),x.Kc(158,"\n\n                            "),x.Zb(159,"ngx-context-menu-item"),x.Kc(160,"\n                                "),x.Zb(161,"ngx-menu-content"),x.Kc(162,"Column list"),x.Yb(),x.Kc(163,"\n\n                                "),x.Ic(164,U,10,3,"ngx-context-menu-item",16),x.Kc(165,"\n                            "),x.Yb(),x.Kc(166,"\n\n                            "),x.Zb(167,"ngx-context-menu-item",33),x.hc("onClick",function(){return x.Bc(t),x.Ac(106).resetSchema()}),x.Kc(168,"\n                                "),x.Zb(169,"ngx-menu-content"),x.Kc(170,"Reset table settings"),x.Yb(),x.Kc(171,"\n                            "),x.Yb(),x.Kc(172,"\n\n                            "),x.Zb(173,"ngx-context-menu-item"),x.Kc(174,"\n                                "),x.Zb(175,"ngx-menu-content"),x.Kc(176,"Example tree"),x.Yb(),x.Kc(177,"\n\n                                "),x.Zb(178,"ngx-context-menu-item"),x.Kc(179,"\n                                    "),x.Zb(180,"ngx-menu-content"),x.Kc(181,"Root A"),x.Yb(),x.Kc(182,"\n                                    "),x.Zb(183,"ngx-context-menu-item"),x.Kc(184,"\n                                        "),x.Zb(185,"ngx-menu-content"),x.Kc(186,"Child A1"),x.Yb(),x.Kc(187,"\n                                    "),x.Yb(),x.Kc(188,"\n                                    "),x.Zb(189,"ngx-context-menu-item"),x.Kc(190,"\n                                        "),x.Zb(191,"ngx-menu-content"),x.Kc(192,"Child A2"),x.Yb(),x.Kc(193,"\n                                    "),x.Yb(),x.Kc(194,"\n                                    "),x.Zb(195,"ngx-context-menu-item"),x.Kc(196,"\n                                        "),x.Zb(197,"ngx-menu-content"),x.Kc(198,"Child A3"),x.Yb(),x.Kc(199,"\n                                    "),x.Yb(),x.Kc(200,"\n                                "),x.Yb(),x.Kc(201,"\n\n                                "),x.Zb(202,"ngx-context-menu-item"),x.Kc(203,"\n                                    "),x.Zb(204,"ngx-menu-content"),x.Kc(205,"Root B"),x.Yb(),x.Kc(206,"\n                                "),x.Yb(),x.Kc(207,"\n\n                                "),x.Zb(208,"ngx-context-menu-item"),x.Kc(209,"\n                                    "),x.Zb(210,"ngx-menu-content"),x.Kc(211,"Root C"),x.Yb(),x.Kc(212,"\n                                    "),x.Zb(213,"ngx-context-menu-item"),x.Kc(214,"\n                                        "),x.Zb(215,"ngx-menu-content"),x.Kc(216," Child C1"),x.Yb(),x.Kc(217,"\n                                    "),x.Yb(),x.Kc(218,"\n                                    "),x.Zb(219,"ngx-context-menu-item"),x.Kc(220,"\n                                        "),x.Zb(221,"ngx-menu-content"),x.Kc(222,"Child C2"),x.Yb(),x.Kc(223,"\n                                    "),x.Yb(),x.Kc(224,"\n                                    "),x.Zb(225,"ngx-context-menu-item"),x.Kc(226,"\n                                        "),x.Zb(227,"ngx-menu-content"),x.Kc(228,"Child C3"),x.Yb(),x.Kc(229,"\n                                    "),x.Yb(),x.Kc(230,"\n                                "),x.Yb(),x.Kc(231,"\n                            "),x.Yb(),x.Kc(232,"\n                        "),x.Yb(),x.Kc(233,"\n                    "),x.Yb(),x.Kc(234,"\n                "),x.Yb(),x.Kc(235,"\n                "),x.Zb(236,"div",6),x.Kc(237,"\n                    "),x.Zb(238,"div",3),x.Kc(239,"\n                        "),x.Ub(240,"br"),x.Kc(241,"\n\n                        "),x.Zb(242,"p"),x.Zb(243,"b"),x.Kc(244,"Note"),x.Yb(),x.Kc(245,": You can also wrap the templates in your component."),x.Yb(),x.Kc(246,"\n\n                        "),x.Zb(247,"pre"),x.Zb(248,"code",7),x.Tb(),x.Kc(249,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder #table [source]="data" height="500" enable-selection>\n    <ngx-options [resizable]="true" [sortable]="true"></ngx-options>\n\n    <ngx-context-menu>\n       <my-menu [table]="table"></my-menu>\n    </ngx-context-menu>\n\n    <ngx-column key="action" custom-key sticky [resizable]="false" [width]="50">\n        <ng-template ngx-th></ng-template>\n        <ng-template ngx-td row let-row>\n            {{ table.selectionModel.get($any(row).id) ? \'x\' : \'-\' }}\n        </ng-template>\n    </ngx-column>\n\n    <ngx-column *ngFor="let key of table.modelColumnKeys" [key]="key"></ngx-column>\n  </ngx-table-builder>\n\n'),x.ac(),x.Yb(),x.Yb(),x.Kc(250,"\n                        "),x.Ub(251,"br"),x.Kc(252,"\n                        "),x.Zb(253,"pre"),x.Zb(254,"code",23),x.Kc(255,"\n  // my-menu.component.ts\n  import { TableBuilderComponent } from \"@angular-ru/ng-table-builder\";\n  import { Component } from \"@angular/core\";\n\n  @Component({\n    selector: 'my-menu',\n    templateUrl: './my-menu.component.html'\n  })\n  export class MyMenuComponent {\n    @Input() public table: TableBuilderComponent;\n  }\n\n"),x.Yb(),x.Yb(),x.Kc(256,"\n                    "),x.Yb(),x.Kc(257,"\n                    "),x.Zb(258,"div",3),x.Kc(259,"\n                        "),x.Ub(260,"br"),x.Kc(261,"\n                        "),x.Zb(262,"p"),x.Zb(263,"b"),x.Kc(264,"Note"),x.Yb(),x.Kc(265,": You can also wrap the templates in your component."),x.Yb(),x.Kc(266,"\n                        "),x.Zb(267,"pre"),x.Zb(268,"code",7),x.Tb(),x.Kc(269,'\n  \x3c!-- my-menu.component.html --\x3e\n\n  \x3c!-- first item --\x3e\n  <ngx-context-menu-item contextTitle divider>\n      <ngx-menu-content>Menu</ngx-menu-content>\n  </ngx-context-menu-item>\n\n  \x3c!-- second item --\x3e\n  <ngx-context-menu-item>\n      <ngx-menu-content>Column list</ngx-menu-content>\n\n      <ngx-context-menu-item\n          *ngFor="let column of table.columnSchema"\n          (onClick)="table.toggleColumnVisibility(column.key); $events.preventDefault()"\n          [visible]="column.isModel"\n      >\n          <ngx-menu-content no-margin>{{ column.key }}</ngx-menu-content>\n          <ngx-menu-content no-margin align-center>\n              <mat-checkbox\n                  color="primary"\n                  [checked]="column.visible"\n              ></mat-checkbox>\n          </ngx-menu-content>\n      </ngx-context-menu-item>\n  </ngx-context-menu-item>\n\n  \x3c!-- third item --\x3e\n  <ngx-context-menu-item (onClick)="table.resetSchema()" divider>\n      <ngx-menu-content>Reset table settings</ngx-menu-content>\n  </ngx-context-menu-item>\n\n  \x3c!-- fourth item --\x3e\n  <ngx-context-menu-item>\n\n      <ngx-menu-content>Example tree</ngx-menu-content>\n\n      <ngx-context-menu-item>\n          <ngx-menu-content>Root A</ngx-menu-content>\n          <ngx-context-menu-item>\n              <ngx-menu-content>Child A1</ngx-menu-content>\n          </ngx-context-menu-item>\n          <ngx-context-menu-item>\n              <ngx-menu-content>Child A2</ngx-menu-content>\n          </ngx-context-menu-item>\n          <ngx-context-menu-item>\n              <ngx-menu-content>Child A3</ngx-menu-content>\n          </ngx-context-menu-item>\n      </ngx-context-menu-item>\n\n      <ngx-context-menu-item>\n          <ngx-menu-content>Root B</ngx-menu-content>\n      </ngx-context-menu-item>\n\n      <ngx-context-menu-item>\n          <ngx-menu-content>Root C</ngx-menu-content>\n          <ngx-context-menu-item>\n              <ngx-menu-content> Child C1</ngx-menu-content>\n          </ngx-context-menu-item>\n          <ngx-context-menu-item>\n              <ngx-menu-content>Child C2</ngx-menu-content>\n          </ngx-context-menu-item>\n          <ngx-context-menu-item>\n              <ngx-menu-content>Child C3</ngx-menu-content>\n          </ngx-context-menu-item>\n      </ngx-context-menu-item>\n\n  </ngx-context-menu-item>\n\n'),x.ac(),x.Yb(),x.Yb(),x.Kc(270,"\n                    "),x.Yb(),x.Kc(271,"\n                "),x.Yb(),x.Kc(272,"\n            "),x.Yb(),x.Kc(273,"\n        "),x.Yb(),x.Kc(274,"\n    "),x.Yb()}if(2&n){var c=x.Ac(22),o=x.Ac(61),i=x.Ac(106),m=x.lc();x.Gb(21),x.sc("source",m.licences),x.Gb(3),x.sc("height",null),x.Gb(32),x.sc("ngForOf",c.columnSchema),x.Gb(4),x.sc("disable",!o.state.key),x.Gb(9),x.sc("ngIf","id"===o.state.key),x.Gb(2),x.sc("ngIf","price"===o.state.key),x.Gb(7),x.Mc("\n                                        Selected items (",null==c||null==c.selectedItems?null:c.selectedItems.length,")\n                                    "),x.Gb(27),x.sc("source",m.data),x.Gb(5),x.sc("is-draggable",!1),x.Gb(7),x.sc("ngForOf",i.modelColumnKeys),x.Gb(7),x.Mc("Menu ",i.selection.selectionModel.size,""),x.Gb(40),x.sc("ngForOf",i.columnSchema)}}var M,S,G=((S=function(){function t(e){n(this,t),this.cd=e,this.data=[],this.licences=[{id:1,name:"single",price:29.3},{id:2,name:"developer",price:49.8},{id:3,name:"premium",price:99.5},{id:4,name:"enterprise",price:199}]}var c,o,i;return c=t,(o=[{key:"ngOnInit",value:function(){var n=this;u.a.generator(50,15).then(function(e){n.data=e,n.cd.detectChanges()})}},{key:"ngAfterViewInit",value:function(){this.update()}},{key:"update",value:function(){document.querySelectorAll("pre code").forEach(function(n){hljs.highlightBlock(n)})}},{key:"exportExcel",value:function(n){window.alert("export excel - "+JSON.stringify(n))}},{key:"showLine",value:function(n,e){window.alert("key - "+n+" item - "+JSON.stringify(e))}},{key:"copyId",value:function(n){window.alert("Copy on buffer - "+n)}},{key:"updatedSchema",value:function(n){console.log("Update schema",n)}}])&&e(c.prototype,o),i&&e(c,i),t}()).\u0275fac=function(n){return new(n||S)(x.Sb(x.h))},S.\u0275cmp=x.Mb({type:S,selectors:[["sample-eleven"]],decls:11,vars:1,consts:[[1,"simple-toolbar"],[1,"night"],["class","column",4,"ngIf"],[1,"column"],[3,"selectedTabChange"],["label","Custom context menu"],[1,"column-samples"],[1,"html"],["enable-selection","",3,"source"],["table1",""],[3,"height"],["contextTitle","","divider",""],["icon","https://angular.io/assets/images/logos/angular/angular.svg"],[3,"onClick"],["icon","http://www.myiconfinder.com/uploads/iconsets/ae86b3a8881d697b6c42528aff5ba48b-excel.png"],["icon",""],[3,"visible","onClick",4,"ngFor","ngForOf"],["divider","",3,"disable","onClick"],["item",""],[3,"onClick",4,"ngIf"],[4,"ngIf"],["key","price","important-template",""],["ngx-td",""],[1,"javascript"],["label","Custom sub menu"],["height","500","enable-selection","",3,"source","schemaChanges"],["table2",""],["is-draggable","","is-sortable",""],["key","action","custom-key","","sticky","","width","50",3,"is-draggable"],["ngx-th",""],["ngx-td","","row",""],[3,"key",4,"ngFor","ngForOf"],["divider",""],["divider","",3,"onClick"],[3,"visible","onClick"],["no-margin",""],["no-margin","","align-center",""],["color","primary",3,"checked"],[3,"key"]],template:function(n,e){1&n&&(x.Zb(0,"mat-toolbar",0),x.Kc(1,"\n    "),x.Zb(2,"span"),x.Kc(3,"Example context menu"),x.Yb(),x.Kc(4,"\n"),x.Yb(),x.Kc(5,"\n\n"),x.Zb(6,"div",1),x.Kc(7,"\n    "),x.Ic(8,A,275,12,"div",2),x.Kc(9,"\n"),x.Yb(),x.Kc(10,"\n")),2&n&&(x.Gb(8),x.sc("ngIf",e.licences.length))},directives:[l.a,i.m,a.b,a.a,g.a,r.a,s.a,K.a,i.l,p.a,d.a,h.a,f.a,Y.a],pipes:[i.c],styles:["\n            .night {\n                position: relative;\n                margin: auto;\n            }\n\n            /*noinspection CssUnusedSymbol*/\n            .night .mat-tab-body-content {\n                padding: 5px 0;\n                height: calc(100% - 10px);\n                overflow: hidden;\n            }\n\n            /*noinspection ALL*/\n            .night .mat-tab-body-wrapper .mat-tab-body.mat-tab-body-active {\n                overflow: visible;\n                max-width: 100%;\n            }\n        "],encapsulation:2,changeDetection:0}),S),B=((M=function e(){n(this,e)}).\u0275mod=x.Qb({type:M}),M.\u0275inj=x.Pb({factory:function(n){return new(n||M)},imports:[[i.b,b.a,m.b.forChild([{path:"",component:G}])]]}),M)}}])}();