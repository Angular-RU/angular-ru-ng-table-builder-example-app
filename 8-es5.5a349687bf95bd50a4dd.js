!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var c=e[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(n,c.key,c)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{qQ93:function(t,c,o){"use strict";o.r(c),o.d(c,"SampleElevenModule",function(){return E});var i=o("An66"),m=o("1VvW"),b=o("5Q2+"),u=o("zMYQ"),x=o("kZht"),l=o("aJOL"),a=o("sq1e"),g=o("1ZKX"),r=o("YW/L"),s=o("t+BJ"),K=o("oIp9"),p=o("BL99"),d=o("j5U8"),h=o("oTne"),f=o("ctyY"),Y=o("UDV5"),Z=o("tmQ6");function y(n,e){if(1&n){var t=x.bc();x.Zb(0,"ngx-context-menu-item",34),x.hc("onClick",function(n){x.Bc(t);var c=e.$implicit;return x.lc(),x.Ac(22).toggleColumnVisibility(c.key),n.preventDefault()}),x.Kc(1,"\n                                            "),x.Zb(2,"ngx-menu-content",35),x.Kc(3),x.Yb(),x.Kc(4,"\n                                            "),x.Zb(5,"ngx-menu-content",36),x.Kc(6,"\n                                                "),x.Ub(7,"mat-checkbox",37),x.Kc(8,"\n                                            "),x.Yb(),x.Kc(9,"\n                                        "),x.Yb()}if(2&n){var c=e.$implicit;x.sc("visible",c.isModel),x.Gb(3),x.Lc(c.key),x.Gb(4),x.sc("checked",c.isVisible)}}function v(n,e){if(1&n){var t=x.bc();x.Zb(0,"ngx-context-menu-item",13,18),x.hc("onClick",function(){x.Bc(t);var n=x.Ac(1);return x.lc(2).copyId(n.state.value)}),x.Kc(2,"\n                                    "),x.Ub(3,"ngx-menu-content",15),x.Kc(4,"\n                                    "),x.Zb(5,"ngx-menu-content"),x.Kc(6,"Copy in buffer ID"),x.Yb(),x.Kc(7,"\n                                "),x.Yb()}}function k(n,e){if(1&n&&(x.Zb(0,"ngx-context-menu-item",null,18),x.Kc(2,"\n                                    "),x.Ub(3,"ngx-menu-content",15),x.Kc(4,"\n                                    "),x.Zb(5,"ngx-menu-content"),x.Kc(6),x.Yb(),x.Kc(7,"\n                                "),x.Yb()),2&n){var t=x.Ac(1);x.Gb(6),x.Mc("Price: ",t.state.textContent,"")}}function C(n,e){1&n&&(x.Kc(0),x.mc(1,"currency")),2&n&&x.Lc(x.nc(1,1,e.$implicit))}function w(n,e){}function I(n,e){if(1&n&&x.Kc(0),2&n){var t=e.$implicit;x.lc();var c=x.Ac(107);x.Mc("\n                                ",c.selectionModel.get(t.id)?"x":"-","\n                            ")}}function U(n,e){1&n&&x.Ub(0,"ngx-column",38),2&n&&x.sc("key",e.$implicit)}function A(n,e){if(1&n){var t=x.bc();x.Zb(0,"ngx-context-menu-item",34),x.hc("onClick",function(n){x.Bc(t);var c=e.$implicit;return x.lc(),x.Ac(107).toggleColumnVisibility(c.key),n.preventDefault()}),x.Kc(1,"\n                                    "),x.Zb(2,"ngx-menu-content",35),x.Kc(3),x.Yb(),x.Kc(4,"\n                                    "),x.Zb(5,"ngx-menu-content",36),x.Kc(6,"\n                                        "),x.Ub(7,"mat-checkbox",37),x.Kc(8,"\n                                    "),x.Yb(),x.Kc(9,"\n                                "),x.Yb()}if(2&n){var c=e.$implicit;x.sc("visible",c.isModel),x.Gb(3),x.Lc(c.key),x.Gb(4),x.sc("checked",c.isVisible)}}function S(n,e){if(1&n){var t=x.bc();x.Zb(0,"div",3),x.Kc(1,"\n        "),x.Zb(2,"mat-tab-group",4),x.hc("selectedTabChange",function(){return x.Bc(t),x.lc().update()}),x.Kc(3,"\n            "),x.Zb(4,"mat-tab",5),x.Kc(5,"\n                "),x.Zb(6,"div",6),x.Kc(7,"\n                    "),x.Zb(8,"div",3),x.Kc(9,"\n                        "),x.Ub(10,"br"),x.Kc(11,"\n                        "),x.Zb(12,"pre"),x.Zb(13,"code",7),x.Kc(14,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder [source]="data">\n    <ngx-context-menu>\n\n      <ngx-context-menu-item contextTitle divider>\n        <ngx-menu-content icon="./assets/angular.svg"></ngx-menu-content>\n        <ngx-menu-content>My custom context menu title</ngx-menu-content>\n      </ngx-context-menu-item>\n\n      <ngx-context-menu-item (onClick)="exportExcel(data)">\n        <ngx-menu-content icon="./assets/excel.png"></ngx-menu-content>\n        <ngx-menu-content>Export Excel</ngx-menu-content>\n      </ngx-context-menu-item>\n\n      <ngx-context-menu-item #item divider\n       [disable]="!item.state.key"\n       (onClick)="showLine(item.state.key, item.state.item)">\n        <ngx-menu-content icon></ngx-menu-content>\n        <ngx-menu-content>Show item row</ngx-menu-content>\n      </ngx-context-menu-item>\n\n      <ngx-context-menu-item #item\n       *ngIf="item.state.key === \'id\'"\n       (onClick)="copyId(item.state.value)">\n        <ngx-menu-content icon></ngx-menu-content>\n        <ngx-menu-content>Show item row</ngx-menu-content>\n      </ngx-context-menu-item>\n\n    </ngx-context-menu>\n  </ngx-table-builder>\n\n'),x.Yb(),x.Yb(),x.Kc(15,"\n                    "),x.Yb(),x.Kc(16,"\n                    "),x.Zb(17,"div",3),x.Kc(18,"\n                        "),x.Ub(19,"br"),x.Kc(20,"\n\n                        "),x.Zb(21,"ngx-table-builder",8,9),x.Kc(23,"\n                            "),x.Zb(24,"ngx-context-menu",10),x.Kc(25,"\n                                "),x.Zb(26,"ngx-context-menu-item",11),x.Kc(27,"\n                                    "),x.Zb(28,"ngx-menu-content",12),x.Kc(29,"\n                                    "),x.Yb(),x.Kc(30,"\n                                    "),x.Zb(31,"ngx-menu-content"),x.Kc(32," My custom context menu title"),x.Yb(),x.Kc(33,"\n                                "),x.Yb(),x.Kc(34,"\n\n                                "),x.Zb(35,"ngx-context-menu-item",13),x.hc("onClick",function(){x.Bc(t);var n=x.lc();return n.exportExcel(n.licences)}),x.Kc(36,"\n                                    "),x.Zb(37,"ngx-menu-content",14),x.Kc(38,"\n                                    "),x.Yb(),x.Kc(39,"\n                                    "),x.Zb(40,"ngx-menu-content"),x.Kc(41,"Export Excel"),x.Yb(),x.Kc(42,"\n                                "),x.Yb(),x.Kc(43,"\n\n                                "),x.Zb(44,"ngx-context-menu-item"),x.Kc(45,"\n                                    "),x.Ub(46,"ngx-menu-content",15),x.Kc(47,"\n                                    "),x.Zb(48,"ngx-menu-content"),x.Kc(49,"Column settings"),x.Yb(),x.Kc(50,"\n\n                                    "),x.Zb(51,"ngx-context-menu-item"),x.Kc(52,"\n                                        "),x.Zb(53,"ngx-menu-content"),x.Kc(54,"List"),x.Yb(),x.Kc(55,"\n\n                                        "),x.Ic(56,y,10,3,"ngx-context-menu-item",16),x.Kc(57,"\n                                    "),x.Yb(),x.Kc(58,"\n                                "),x.Yb(),x.Kc(59,"\n\n                                "),x.Zb(60,"ngx-context-menu-item",17,18),x.hc("onClick",function(){x.Bc(t);var n=x.Ac(61);return x.lc().showLine(n.state.key,n.state.item)}),x.Kc(62,"\n                                    "),x.Ub(63,"ngx-menu-content",15),x.Kc(64,"\n                                    "),x.Zb(65,"ngx-menu-content"),x.Kc(66,"Show item row"),x.Yb(),x.Kc(67,"\n                                "),x.Yb(),x.Kc(68,"\n\n                                "),x.Ic(69,v,8,0,"ngx-context-menu-item",19),x.Kc(70,"\n\n                                "),x.Ic(71,k,8,1,"ngx-context-menu-item",20),x.Kc(72,"\n\n                                "),x.Zb(73,"ngx-context-menu-item"),x.Kc(74,"\n                                    "),x.Ub(75,"ngx-menu-content",15),x.Kc(76,"\n                                    "),x.Zb(77,"ngx-menu-content"),x.Kc(78),x.mc(79,"tableSelectedItems"),x.Yb(),x.Kc(80,"\n                                "),x.Yb(),x.Kc(81,"\n                            "),x.Yb(),x.Kc(82,"\n\n                            "),x.Zb(83,"ngx-column",21),x.Kc(84,"\n                                "),x.Ic(85,C,2,3,"ng-template",22),x.Kc(86,"\n                            "),x.Yb(),x.Kc(87,"\n                        "),x.Yb(),x.Kc(88,"\n\n                        "),x.Ub(89,"br"),x.Kc(90,"\n                        "),x.Ub(91,"br"),x.Kc(92,"\n\n                        "),x.Zb(93,"pre"),x.Zb(94,"code",23),x.Kc(95,"\n  // app.component.ts\n  import { Component } from \"@angular/core\";\n  import { Data } from \"./data.interface\";\n\n  @Component({\n    selector: 'app',\n    templateUrl: './app.component.html'\n  })\n  export class AppComponent {\n\n    public data: Data[] = [ .. ];\n\n    public exportExcel(data: Data[]): void {\n        window.alert('export excel - ' + JSON.stringify(data));\n    }\n\n    public showLine(key: string, item: Data): void {\n        window.alert('key - ' + key + ' item - ' + JSON.stringify(item));\n    }\n\n    public copyId(id: string): void {\n        window.alert('Copy on buffer - ' + id);\n    }\n\n  }\n\n"),x.Yb(),x.Yb(),x.Kc(96,"\n                    "),x.Yb(),x.Kc(97,"\n                "),x.Yb(),x.Kc(98,"\n            "),x.Yb(),x.Kc(99,"\n\n            "),x.Zb(100,"mat-tab",24),x.Kc(101,"\n                "),x.Ub(102,"br"),x.Kc(103,"\n                "),x.Zb(104,"div"),x.Kc(105,"\n                    "),x.Zb(106,"ngx-table-builder",25,26),x.hc("schemaChanges",function(n){return x.Bc(t),x.lc().updatedSchema(n)}),x.Kc(108,"\n                        "),x.Ub(109,"ngx-options",27),x.Kc(110,"\n\n                        "),x.Zb(111,"ngx-column",28),x.Kc(112,"\n                            "),x.Ic(113,w,0,0,"ng-template",29),x.Kc(114,"\n                            "),x.Ic(115,I,1,1,"ng-template",30),x.Kc(116,"\n                        "),x.Yb(),x.Kc(117,"\n\n                        "),x.Ic(118,U,1,1,"ngx-column",31),x.Kc(119,"\n\n                        "),x.Zb(120,"ngx-context-menu"),x.Kc(121,"\n                            "),x.Zb(122,"ngx-context-menu-item",11),x.Kc(123,"\n                                "),x.Zb(124,"ngx-menu-content"),x.Kc(125),x.Yb(),x.Kc(126,"\n                            "),x.Yb(),x.Kc(127,"\n\n                            "),x.Zb(128,"ngx-context-menu-item"),x.Kc(129,"\n                                "),x.Ub(130,"ngx-menu-content",15),x.Kc(131,"\n                                "),x.Zb(132,"ngx-menu-content"),x.Kc(133,"Item1"),x.Yb(),x.Kc(134,"\n                            "),x.Yb(),x.Kc(135,"\n\n                            "),x.Zb(136,"ngx-context-menu-item"),x.Kc(137,"\n                                "),x.Ub(138,"ngx-menu-content",15),x.Kc(139,"\n                                "),x.Zb(140,"ngx-menu-content"),x.Kc(141,"Item2"),x.Yb(),x.Kc(142,"\n                            "),x.Yb(),x.Kc(143,"\n\n                            "),x.Zb(144,"ngx-context-menu-item"),x.Kc(145,"\n                                "),x.Ub(146,"ngx-menu-content",15),x.Kc(147,"\n                                "),x.Zb(148,"ngx-menu-content"),x.Kc(149,"Item3"),x.Yb(),x.Kc(150,"\n                            "),x.Yb(),x.Kc(151,"\n\n                            "),x.Zb(152,"ngx-context-menu-item",32),x.Kc(153,"\n                                "),x.Ub(154,"ngx-menu-content",15),x.Kc(155,"\n                                "),x.Zb(156,"ngx-menu-content"),x.Kc(157,"Item4"),x.Yb(),x.Kc(158,"\n                            "),x.Yb(),x.Kc(159,"\n\n                            "),x.Zb(160,"ngx-context-menu-item"),x.Kc(161,"\n                                "),x.Zb(162,"ngx-menu-content"),x.Kc(163,"Column list"),x.Yb(),x.Kc(164,"\n\n                                "),x.Ic(165,A,10,3,"ngx-context-menu-item",16),x.Kc(166,"\n                            "),x.Yb(),x.Kc(167,"\n\n                            "),x.Zb(168,"ngx-context-menu-item",33),x.hc("onClick",function(){return x.Bc(t),x.Ac(107).resetSchema()}),x.Kc(169,"\n                                "),x.Zb(170,"ngx-menu-content"),x.Kc(171,"Reset table settings"),x.Yb(),x.Kc(172,"\n                            "),x.Yb(),x.Kc(173,"\n\n                            "),x.Zb(174,"ngx-context-menu-item"),x.Kc(175,"\n                                "),x.Zb(176,"ngx-menu-content"),x.Kc(177,"Example tree"),x.Yb(),x.Kc(178,"\n\n                                "),x.Zb(179,"ngx-context-menu-item"),x.Kc(180,"\n                                    "),x.Zb(181,"ngx-menu-content"),x.Kc(182,"Root A"),x.Yb(),x.Kc(183,"\n                                    "),x.Zb(184,"ngx-context-menu-item"),x.Kc(185,"\n                                        "),x.Zb(186,"ngx-menu-content"),x.Kc(187,"Child A1"),x.Yb(),x.Kc(188,"\n                                    "),x.Yb(),x.Kc(189,"\n                                    "),x.Zb(190,"ngx-context-menu-item"),x.Kc(191,"\n                                        "),x.Zb(192,"ngx-menu-content"),x.Kc(193,"Child A2"),x.Yb(),x.Kc(194,"\n                                    "),x.Yb(),x.Kc(195,"\n                                    "),x.Zb(196,"ngx-context-menu-item"),x.Kc(197,"\n                                        "),x.Zb(198,"ngx-menu-content"),x.Kc(199,"Child A3"),x.Yb(),x.Kc(200,"\n                                    "),x.Yb(),x.Kc(201,"\n                                "),x.Yb(),x.Kc(202,"\n\n                                "),x.Zb(203,"ngx-context-menu-item"),x.Kc(204,"\n                                    "),x.Zb(205,"ngx-menu-content"),x.Kc(206,"Root B"),x.Yb(),x.Kc(207,"\n                                "),x.Yb(),x.Kc(208,"\n\n                                "),x.Zb(209,"ngx-context-menu-item"),x.Kc(210,"\n                                    "),x.Zb(211,"ngx-menu-content"),x.Kc(212,"Root C"),x.Yb(),x.Kc(213,"\n                                    "),x.Zb(214,"ngx-context-menu-item"),x.Kc(215,"\n                                        "),x.Zb(216,"ngx-menu-content"),x.Kc(217," Child C1"),x.Yb(),x.Kc(218,"\n                                    "),x.Yb(),x.Kc(219,"\n                                    "),x.Zb(220,"ngx-context-menu-item"),x.Kc(221,"\n                                        "),x.Zb(222,"ngx-menu-content"),x.Kc(223,"Child C2"),x.Yb(),x.Kc(224,"\n                                    "),x.Yb(),x.Kc(225,"\n                                    "),x.Zb(226,"ngx-context-menu-item"),x.Kc(227,"\n                                        "),x.Zb(228,"ngx-menu-content"),x.Kc(229,"Child C3"),x.Yb(),x.Kc(230,"\n                                    "),x.Yb(),x.Kc(231,"\n                                "),x.Yb(),x.Kc(232,"\n                            "),x.Yb(),x.Kc(233,"\n                        "),x.Yb(),x.Kc(234,"\n                    "),x.Yb(),x.Kc(235,"\n                "),x.Yb(),x.Kc(236,"\n                "),x.Zb(237,"div",6),x.Kc(238,"\n                    "),x.Zb(239,"div",3),x.Kc(240,"\n                        "),x.Ub(241,"br"),x.Kc(242,"\n\n                        "),x.Zb(243,"p"),x.Zb(244,"b"),x.Kc(245,"Note"),x.Yb(),x.Kc(246,": You can also wrap the templates in your component."),x.Yb(),x.Kc(247,"\n\n                        "),x.Zb(248,"pre"),x.Zb(249,"code",7),x.Tb(),x.Kc(250,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder #table [source]="data" height="500" enable-selection>\n    <ngx-options [resizable]="true" [sortable]="true"></ngx-options>\n\n    <ngx-context-menu>\n       <my-menu [table]="table"></my-menu>\n    </ngx-context-menu>\n\n    <ngx-column key="action" custom-key sticky [resizable]="false" [width]="50">\n        <ng-template ngx-th></ng-template>\n        <ng-template ngx-td row let-row>\n            {{ table.selectionModel.get($any(row).id) ? \'x\' : \'-\' }}\n        </ng-template>\n    </ngx-column>\n\n    <ngx-column *ngFor="let key of table.modelColumnKeys" [key]="key"></ngx-column>\n  </ngx-table-builder>\n\n'),x.ac(),x.Yb(),x.Yb(),x.Kc(251,"\n                        "),x.Ub(252,"br"),x.Kc(253,"\n                        "),x.Zb(254,"pre"),x.Zb(255,"code",23),x.Kc(256,"\n  // my-menu.component.ts\n  import { TableBuilderComponent } from \"@angular-ru/ng-table-builder\";\n  import { Component } from \"@angular/core\";\n\n  @Component({\n    selector: 'my-menu',\n    templateUrl: './my-menu.component.html'\n  })\n  export class MyMenuComponent {\n    @Input() public table: TableBuilderComponent;\n  }\n\n"),x.Yb(),x.Yb(),x.Kc(257,"\n                    "),x.Yb(),x.Kc(258,"\n                    "),x.Zb(259,"div",3),x.Kc(260,"\n                        "),x.Ub(261,"br"),x.Kc(262,"\n                        "),x.Zb(263,"p"),x.Zb(264,"b"),x.Kc(265,"Note"),x.Yb(),x.Kc(266,": You can also wrap the templates in your component."),x.Yb(),x.Kc(267,"\n                        "),x.Zb(268,"pre"),x.Zb(269,"code",7),x.Tb(),x.Kc(270,'\n  \x3c!-- my-menu.component.html --\x3e\n\n  \x3c!-- first item --\x3e\n  <ngx-context-menu-item contextTitle divider>\n      <ngx-menu-content>Menu</ngx-menu-content>\n  </ngx-context-menu-item>\n\n  \x3c!-- second item --\x3e\n  <ngx-context-menu-item>\n      <ngx-menu-content>Column list</ngx-menu-content>\n\n      <ngx-context-menu-item\n          *ngFor="let column of table.columnSchema"\n          (onClick)="table.toggleColumnVisibility(column.key); $events.preventDefault()"\n          [visible]="column.isModel"\n      >\n          <ngx-menu-content no-margin>{{ column.key }}</ngx-menu-content>\n          <ngx-menu-content no-margin align-center>\n              <mat-checkbox\n                  color="primary"\n                  [checked]="column.visible"\n              ></mat-checkbox>\n          </ngx-menu-content>\n      </ngx-context-menu-item>\n  </ngx-context-menu-item>\n\n  \x3c!-- third item --\x3e\n  <ngx-context-menu-item (onClick)="table.resetSchema()" divider>\n      <ngx-menu-content>Reset table settings</ngx-menu-content>\n  </ngx-context-menu-item>\n\n  \x3c!-- fourth item --\x3e\n  <ngx-context-menu-item>\n\n      <ngx-menu-content>Example tree</ngx-menu-content>\n\n      <ngx-context-menu-item>\n          <ngx-menu-content>Root A</ngx-menu-content>\n          <ngx-context-menu-item>\n              <ngx-menu-content>Child A1</ngx-menu-content>\n          </ngx-context-menu-item>\n          <ngx-context-menu-item>\n              <ngx-menu-content>Child A2</ngx-menu-content>\n          </ngx-context-menu-item>\n          <ngx-context-menu-item>\n              <ngx-menu-content>Child A3</ngx-menu-content>\n          </ngx-context-menu-item>\n      </ngx-context-menu-item>\n\n      <ngx-context-menu-item>\n          <ngx-menu-content>Root B</ngx-menu-content>\n      </ngx-context-menu-item>\n\n      <ngx-context-menu-item>\n          <ngx-menu-content>Root C</ngx-menu-content>\n          <ngx-context-menu-item>\n              <ngx-menu-content> Child C1</ngx-menu-content>\n          </ngx-context-menu-item>\n          <ngx-context-menu-item>\n              <ngx-menu-content>Child C2</ngx-menu-content>\n          </ngx-context-menu-item>\n          <ngx-context-menu-item>\n              <ngx-menu-content>Child C3</ngx-menu-content>\n          </ngx-context-menu-item>\n      </ngx-context-menu-item>\n\n  </ngx-context-menu-item>\n\n'),x.ac(),x.Yb(),x.Yb(),x.Kc(271,"\n                    "),x.Yb(),x.Kc(272,"\n                "),x.Yb(),x.Kc(273,"\n            "),x.Yb(),x.Kc(274,"\n        "),x.Yb(),x.Kc(275,"\n    "),x.Yb()}if(2&n){var c=x.Ac(22),o=x.Ac(61),i=x.Ac(107),m=x.lc();x.Gb(21),x.sc("source",m.licences),x.Gb(3),x.sc("height",null),x.Gb(32),x.sc("ngForOf",c.columnSchema),x.Gb(4),x.sc("disable",!o.state.key),x.Gb(9),x.sc("ngIf","id"===o.state.key),x.Gb(2),x.sc("ngIf","price"===o.state.key),x.Gb(7),x.Mc("\n                                        Selected items (",x.nc(79,12,null==c?null:c.selectionEntries).length,")\n                                    "),x.Gb(28),x.sc("source",m.data),x.Gb(5),x.sc("is-draggable",!1),x.Gb(7),x.sc("ngForOf",i.modelColumnKeys),x.Gb(7),x.Mc("Menu ",i.selection.selectionModel.size,""),x.Gb(40),x.sc("ngForOf",i.columnSchema)}}var M,G,B=((G=function(){function t(e){n(this,t),this.cd=e,this.data=[],this.licences=[{id:1,name:"single",price:29.3},{id:2,name:"developer",price:49.8},{id:3,name:"premium",price:99.5},{id:4,name:"enterprise",price:199}]}var c,o,i;return c=t,(o=[{key:"ngOnInit",value:function(){var n=this;u.a.generator(50,15).then(function(e){n.data=e,n.cd.detectChanges()})}},{key:"ngAfterViewInit",value:function(){this.update()}},{key:"update",value:function(){document.querySelectorAll("pre code").forEach(function(n){hljs.highlightBlock(n)})}},{key:"exportExcel",value:function(n){window.alert("export excel - "+JSON.stringify(n))}},{key:"showLine",value:function(n,e){window.alert("key - "+n+" item - "+JSON.stringify(e))}},{key:"copyId",value:function(n){window.alert("Copy on buffer - "+n)}},{key:"updatedSchema",value:function(n){console.log("Update schema",n)}}])&&e(c.prototype,o),i&&e(c,i),t}()).\u0275fac=function(n){return new(n||G)(x.Sb(x.h))},G.\u0275cmp=x.Mb({type:G,selectors:[["sample-eleven"]],decls:11,vars:1,consts:[[1,"simple-toolbar"],[1,"night"],["class","column",4,"ngIf"],[1,"column"],[3,"selectedTabChange"],["label","Custom context menu"],[1,"column-samples"],[1,"html"],["enable-selection","",3,"source"],["table1",""],[3,"height"],["contextTitle","","divider",""],["icon","https://angular.io/assets/images/logos/angular/angular.svg"],[3,"onClick"],["icon","http://www.myiconfinder.com/uploads/iconsets/ae86b3a8881d697b6c42528aff5ba48b-excel.png"],["icon",""],[3,"visible","onClick",4,"ngFor","ngForOf"],["divider","",3,"disable","onClick"],["item",""],[3,"onClick",4,"ngIf"],[4,"ngIf"],["key","price","important-template",""],["ngx-td",""],[1,"javascript"],["label","Custom sub menu"],["height","500","enable-selection","",3,"source","schemaChanges"],["table2",""],["is-draggable","","is-sortable",""],["key","action","custom-key","","sticky","","width","50",3,"is-draggable"],["ngx-th",""],["ngx-td","","row",""],[3,"key",4,"ngFor","ngForOf"],["divider",""],["divider","",3,"onClick"],[3,"visible","onClick"],["no-margin",""],["no-margin","","align-center",""],["color","primary",3,"checked"],[3,"key"]],template:function(n,e){1&n&&(x.Zb(0,"mat-toolbar",0),x.Kc(1,"\n    "),x.Zb(2,"span"),x.Kc(3,"Example context menu"),x.Yb(),x.Kc(4,"\n"),x.Yb(),x.Kc(5,"\n\n"),x.Zb(6,"div",1),x.Kc(7,"\n    "),x.Ic(8,S,276,14,"div",2),x.Kc(9,"\n"),x.Yb(),x.Kc(10,"\n")),2&n&&(x.Gb(8),x.sc("ngIf",e.licences.length))},directives:[l.a,i.m,a.b,a.a,g.a,r.a,s.a,K.a,i.l,p.a,d.a,h.a,f.a,Y.a],pipes:[Z.a,i.c],styles:["\n            .night {\n                position: relative;\n                margin: auto;\n            }\n\n            /*noinspection CssUnusedSymbol*/\n            .night .mat-tab-body-content {\n                padding: 5px 0;\n                height: calc(100% - 10px);\n                overflow: hidden;\n            }\n\n            /*noinspection ALL*/\n            .night .mat-tab-body-wrapper .mat-tab-body.mat-tab-body-active {\n                overflow: visible;\n                max-width: 100%;\n            }\n        "],encapsulation:2,changeDetection:0}),G),E=((M=function e(){n(this,e)}).\u0275mod=x.Qb({type:M}),M.\u0275inj=x.Pb({factory:function(n){return new(n||M)},imports:[[i.b,b.a,m.b.forChild([{path:"",component:B}])]]}),M)}}])}();