(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{qQ93:function(n,e,t){"use strict";t.r(e),t.d(e,"SampleElevenModule",(function(){return I}));var c=t("An66"),o=t("1VvW"),i=t("5Q2+"),m=t("zMYQ"),b=t("kZht"),x=t("aJOL"),u=t("sq1e"),l=t("1ZKX"),g=t("YW/L"),a=t("t+BJ"),J=t("oIp9"),r=t("BL99"),s=t("j5U8"),p=t("oTne"),d=t("ctyY"),h=t("UDV5");function W(n,e){if(1&n){const n=b.Zb();b.Xb(0,"ngx-context-menu-item",34),b.ec("onClick",(function(t){b.yc(n);const c=e.$implicit;return b.ic(),b.xc(22).toggleColumnVisibility(c.key),t.preventDefault()})),b.Jc(1,"\n                                            "),b.Xb(2,"ngx-menu-content",35),b.Jc(3),b.Wb(),b.Jc(4,"\n                                            "),b.Xb(5,"ngx-menu-content",36),b.Jc(6,"\n                                                "),b.Sb(7,"mat-checkbox",37),b.Jc(8,"\n                                            "),b.Wb(),b.Jc(9,"\n                                        "),b.Wb()}if(2&n){const n=e.$implicit;b.pc("visible",n.isModel),b.Eb(3),b.Kc(n.key),b.Eb(4),b.pc("checked",n.isVisible)}}function X(n,e){if(1&n){const n=b.Zb();b.Xb(0,"ngx-context-menu-item",13,18),b.ec("onClick",(function(){b.yc(n);const e=b.xc(1);return b.ic(2).copyId(e.state.value)})),b.Jc(2,"\n                                    "),b.Sb(3,"ngx-menu-content",15),b.Jc(4,"\n                                    "),b.Xb(5,"ngx-menu-content"),b.Jc(6,"Copy in buffer ID"),b.Wb(),b.Jc(7,"\n                                "),b.Wb()}}function y(n,e){if(1&n&&(b.Xb(0,"ngx-context-menu-item",null,18),b.Jc(2,"\n                                    "),b.Sb(3,"ngx-menu-content",15),b.Jc(4,"\n                                    "),b.Xb(5,"ngx-menu-content"),b.Jc(6),b.Wb(),b.Jc(7,"\n                                "),b.Wb()),2&n){const n=b.xc(1);b.Eb(6),b.Lc("Price: ",n.state.textContent,"")}}function f(n,e){1&n&&(b.Jc(0),b.jc(1,"currency")),2&n&&b.Kc(b.kc(1,1,e.$implicit))}function C(n,e){}function k(n,e){if(1&n&&b.Jc(0),2&n){const n=e.$implicit;b.ic();const t=b.xc(106);b.Lc("\n                                ",t.selectionModel.get(n.id)?"x":"-","\n                            ")}}function v(n,e){1&n&&b.Sb(0,"ngx-column",38),2&n&&b.pc("key",e.$implicit)}function w(n,e){if(1&n){const n=b.Zb();b.Xb(0,"ngx-context-menu-item",34),b.ec("onClick",(function(t){b.yc(n);const c=e.$implicit;return b.ic(),b.xc(106).toggleColumnVisibility(c.key),t.preventDefault()})),b.Jc(1,"\n                                    "),b.Xb(2,"ngx-menu-content",35),b.Jc(3),b.Wb(),b.Jc(4,"\n                                    "),b.Xb(5,"ngx-menu-content",36),b.Jc(6,"\n                                        "),b.Sb(7,"mat-checkbox",37),b.Jc(8,"\n                                    "),b.Wb(),b.Jc(9,"\n                                "),b.Wb()}if(2&n){const n=e.$implicit;b.pc("visible",n.isModel),b.Eb(3),b.Kc(n.key),b.Eb(4),b.pc("checked",n.isVisible)}}function S(n,e){if(1&n){const n=b.Zb();b.Xb(0,"div",3),b.Jc(1,"\n        "),b.Xb(2,"mat-tab-group",4),b.ec("selectedTabChange",(function(){return b.yc(n),b.ic().update()})),b.Jc(3,"\n            "),b.Xb(4,"mat-tab",5),b.Jc(5,"\n                "),b.Xb(6,"div",6),b.Jc(7,"\n                    "),b.Xb(8,"div",3),b.Jc(9,"\n                        "),b.Sb(10,"br"),b.Jc(11,"\n                        "),b.Xb(12,"pre"),b.Xb(13,"code",7),b.Jc(14,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder [source]="data">\n    <ngx-context-menu>\n\n      <ngx-context-menu-item contextTitle divider>\n        <ngx-menu-content icon="./assets/angular.svg"></ngx-menu-content>\n        <ngx-menu-content>My custom context menu title</ngx-menu-content>\n      </ngx-context-menu-item>\n\n      <ngx-context-menu-item (onClick)="exportExcel(data)">\n        <ngx-menu-content icon="./assets/excel.png"></ngx-menu-content>\n        <ngx-menu-content>Export Excel</ngx-menu-content>\n      </ngx-context-menu-item>\n\n      <ngx-context-menu-item #item divider\n       [disable]="!item.state.key"\n       (onClick)="showLine(item.state.key, item.state.item)">\n        <ngx-menu-content icon></ngx-menu-content>\n        <ngx-menu-content>Show item row</ngx-menu-content>\n      </ngx-context-menu-item>\n\n      <ngx-context-menu-item #item\n       *ngIf="item.state.key === \'id\'"\n       (onClick)="copyId(item.state.value)">\n        <ngx-menu-content icon></ngx-menu-content>\n        <ngx-menu-content>Show item row</ngx-menu-content>\n      </ngx-context-menu-item>\n\n    </ngx-context-menu>\n  </ngx-table-builder>\n\n'),b.Wb(),b.Wb(),b.Jc(15,"\n                    "),b.Wb(),b.Jc(16,"\n                    "),b.Xb(17,"div",3),b.Jc(18,"\n                        "),b.Sb(19,"br"),b.Jc(20,"\n\n                        "),b.Xb(21,"ngx-table-builder",8,9),b.Jc(23,"\n                            "),b.Xb(24,"ngx-context-menu",10),b.Jc(25,"\n                                "),b.Xb(26,"ngx-context-menu-item",11),b.Jc(27,"\n                                    "),b.Xb(28,"ngx-menu-content",12),b.Jc(29,"\n                                    "),b.Wb(),b.Jc(30,"\n                                    "),b.Xb(31,"ngx-menu-content"),b.Jc(32," My custom context menu title"),b.Wb(),b.Jc(33,"\n                                "),b.Wb(),b.Jc(34,"\n\n                                "),b.Xb(35,"ngx-context-menu-item",13),b.ec("onClick",(function(){b.yc(n);const e=b.ic();return e.exportExcel(e.licences)})),b.Jc(36,"\n                                    "),b.Xb(37,"ngx-menu-content",14),b.Jc(38,"\n                                    "),b.Wb(),b.Jc(39,"\n                                    "),b.Xb(40,"ngx-menu-content"),b.Jc(41,"Export Excel"),b.Wb(),b.Jc(42,"\n                                "),b.Wb(),b.Jc(43,"\n\n                                "),b.Xb(44,"ngx-context-menu-item"),b.Jc(45,"\n                                    "),b.Sb(46,"ngx-menu-content",15),b.Jc(47,"\n                                    "),b.Xb(48,"ngx-menu-content"),b.Jc(49,"Column settings"),b.Wb(),b.Jc(50,"\n\n                                    "),b.Xb(51,"ngx-context-menu-item"),b.Jc(52,"\n                                        "),b.Xb(53,"ngx-menu-content"),b.Jc(54,"List"),b.Wb(),b.Jc(55,"\n\n                                        "),b.Hc(56,W,10,3,"ngx-context-menu-item",16),b.Jc(57,"\n                                    "),b.Wb(),b.Jc(58,"\n                                "),b.Wb(),b.Jc(59,"\n\n                                "),b.Xb(60,"ngx-context-menu-item",17,18),b.ec("onClick",(function(){b.yc(n);const e=b.xc(61);return b.ic().showLine(e.state.key,e.state.item)})),b.Jc(62,"\n                                    "),b.Sb(63,"ngx-menu-content",15),b.Jc(64,"\n                                    "),b.Xb(65,"ngx-menu-content"),b.Jc(66,"Show item row"),b.Wb(),b.Jc(67,"\n                                "),b.Wb(),b.Jc(68,"\n\n                                "),b.Hc(69,X,8,0,"ngx-context-menu-item",19),b.Jc(70,"\n\n                                "),b.Hc(71,y,8,1,"ngx-context-menu-item",20),b.Jc(72,"\n\n                                "),b.Xb(73,"ngx-context-menu-item"),b.Jc(74,"\n                                    "),b.Sb(75,"ngx-menu-content",15),b.Jc(76,"\n                                    "),b.Xb(77,"ngx-menu-content"),b.Jc(78),b.Wb(),b.Jc(79,"\n                                "),b.Wb(),b.Jc(80,"\n                            "),b.Wb(),b.Jc(81,"\n\n                            "),b.Xb(82,"ngx-column",21),b.Jc(83,"\n                                "),b.Hc(84,f,2,3,"ng-template",22),b.Jc(85,"\n                            "),b.Wb(),b.Jc(86,"\n                        "),b.Wb(),b.Jc(87,"\n\n                        "),b.Sb(88,"br"),b.Jc(89,"\n                        "),b.Sb(90,"br"),b.Jc(91,"\n\n                        "),b.Xb(92,"pre"),b.Xb(93,"code",23),b.Jc(94,"\n  // app.component.ts\n  import { Component } from \"@angular/core\";\n  import { Data } from \"./data.interface\";\n\n  @Component({\n    selector: 'app',\n    templateUrl: './app.component.html'\n  })\n  export class AppComponent {\n\n    public data: Data[] = [ .. ];\n\n    public exportExcel(data: Data[]): void {\n        window.alert('export excel - ' + JSON.stringify(data));\n    }\n\n    public showLine(key: string, item: Data): void {\n        window.alert('key - ' + key + ' item - ' + JSON.stringify(item));\n    }\n\n    public copyId(id: string): void {\n        window.alert('Copy on buffer - ' + id);\n    }\n\n  }\n\n"),b.Wb(),b.Wb(),b.Jc(95,"\n                    "),b.Wb(),b.Jc(96,"\n                "),b.Wb(),b.Jc(97,"\n            "),b.Wb(),b.Jc(98,"\n\n            "),b.Xb(99,"mat-tab",24),b.Jc(100,"\n                "),b.Sb(101,"br"),b.Jc(102,"\n                "),b.Xb(103,"div"),b.Jc(104,"\n                    "),b.Xb(105,"ngx-table-builder",25,26),b.ec("schemaChanges",(function(e){return b.yc(n),b.ic().updatedSchema(e)})),b.Jc(107,"\n                        "),b.Sb(108,"ngx-options",27),b.Jc(109,"\n\n                        "),b.Xb(110,"ngx-column",28),b.Jc(111,"\n                            "),b.Hc(112,C,0,0,"ng-template",29),b.Jc(113,"\n                            "),b.Hc(114,k,1,1,"ng-template",30),b.Jc(115,"\n                        "),b.Wb(),b.Jc(116,"\n\n                        "),b.Hc(117,v,1,1,"ngx-column",31),b.Jc(118,"\n\n                        "),b.Xb(119,"ngx-context-menu"),b.Jc(120,"\n                            "),b.Xb(121,"ngx-context-menu-item",11),b.Jc(122,"\n                                "),b.Xb(123,"ngx-menu-content"),b.Jc(124),b.Wb(),b.Jc(125,"\n                            "),b.Wb(),b.Jc(126,"\n\n                            "),b.Xb(127,"ngx-context-menu-item"),b.Jc(128,"\n                                "),b.Sb(129,"ngx-menu-content",15),b.Jc(130,"\n                                "),b.Xb(131,"ngx-menu-content"),b.Jc(132,"Item1"),b.Wb(),b.Jc(133,"\n                            "),b.Wb(),b.Jc(134,"\n\n                            "),b.Xb(135,"ngx-context-menu-item"),b.Jc(136,"\n                                "),b.Sb(137,"ngx-menu-content",15),b.Jc(138,"\n                                "),b.Xb(139,"ngx-menu-content"),b.Jc(140,"Item2"),b.Wb(),b.Jc(141,"\n                            "),b.Wb(),b.Jc(142,"\n\n                            "),b.Xb(143,"ngx-context-menu-item"),b.Jc(144,"\n                                "),b.Sb(145,"ngx-menu-content",15),b.Jc(146,"\n                                "),b.Xb(147,"ngx-menu-content"),b.Jc(148,"Item3"),b.Wb(),b.Jc(149,"\n                            "),b.Wb(),b.Jc(150,"\n\n                            "),b.Xb(151,"ngx-context-menu-item",32),b.Jc(152,"\n                                "),b.Sb(153,"ngx-menu-content",15),b.Jc(154,"\n                                "),b.Xb(155,"ngx-menu-content"),b.Jc(156,"Item4"),b.Wb(),b.Jc(157,"\n                            "),b.Wb(),b.Jc(158,"\n\n                            "),b.Xb(159,"ngx-context-menu-item"),b.Jc(160,"\n                                "),b.Xb(161,"ngx-menu-content"),b.Jc(162,"Column list"),b.Wb(),b.Jc(163,"\n\n                                "),b.Hc(164,w,10,3,"ngx-context-menu-item",16),b.Jc(165,"\n                            "),b.Wb(),b.Jc(166,"\n\n                            "),b.Xb(167,"ngx-context-menu-item",33),b.ec("onClick",(function(){return b.yc(n),b.xc(106).resetSchema()})),b.Jc(168,"\n                                "),b.Xb(169,"ngx-menu-content"),b.Jc(170,"Reset table settings"),b.Wb(),b.Jc(171,"\n                            "),b.Wb(),b.Jc(172,"\n\n                            "),b.Xb(173,"ngx-context-menu-item"),b.Jc(174,"\n                                "),b.Xb(175,"ngx-menu-content"),b.Jc(176,"Example tree"),b.Wb(),b.Jc(177,"\n\n                                "),b.Xb(178,"ngx-context-menu-item"),b.Jc(179,"\n                                    "),b.Xb(180,"ngx-menu-content"),b.Jc(181,"Root A"),b.Wb(),b.Jc(182,"\n                                    "),b.Xb(183,"ngx-context-menu-item"),b.Jc(184,"\n                                        "),b.Xb(185,"ngx-menu-content"),b.Jc(186,"Child A1"),b.Wb(),b.Jc(187,"\n                                    "),b.Wb(),b.Jc(188,"\n                                    "),b.Xb(189,"ngx-context-menu-item"),b.Jc(190,"\n                                        "),b.Xb(191,"ngx-menu-content"),b.Jc(192,"Child A2"),b.Wb(),b.Jc(193,"\n                                    "),b.Wb(),b.Jc(194,"\n                                    "),b.Xb(195,"ngx-context-menu-item"),b.Jc(196,"\n                                        "),b.Xb(197,"ngx-menu-content"),b.Jc(198,"Child A3"),b.Wb(),b.Jc(199,"\n                                    "),b.Wb(),b.Jc(200,"\n                                "),b.Wb(),b.Jc(201,"\n\n                                "),b.Xb(202,"ngx-context-menu-item"),b.Jc(203,"\n                                    "),b.Xb(204,"ngx-menu-content"),b.Jc(205,"Root B"),b.Wb(),b.Jc(206,"\n                                "),b.Wb(),b.Jc(207,"\n\n                                "),b.Xb(208,"ngx-context-menu-item"),b.Jc(209,"\n                                    "),b.Xb(210,"ngx-menu-content"),b.Jc(211,"Root C"),b.Wb(),b.Jc(212,"\n                                    "),b.Xb(213,"ngx-context-menu-item"),b.Jc(214,"\n                                        "),b.Xb(215,"ngx-menu-content"),b.Jc(216," Child C1"),b.Wb(),b.Jc(217,"\n                                    "),b.Wb(),b.Jc(218,"\n                                    "),b.Xb(219,"ngx-context-menu-item"),b.Jc(220,"\n                                        "),b.Xb(221,"ngx-menu-content"),b.Jc(222,"Child C2"),b.Wb(),b.Jc(223,"\n                                    "),b.Wb(),b.Jc(224,"\n                                    "),b.Xb(225,"ngx-context-menu-item"),b.Jc(226,"\n                                        "),b.Xb(227,"ngx-menu-content"),b.Jc(228,"Child C3"),b.Wb(),b.Jc(229,"\n                                    "),b.Wb(),b.Jc(230,"\n                                "),b.Wb(),b.Jc(231,"\n                            "),b.Wb(),b.Jc(232,"\n                        "),b.Wb(),b.Jc(233,"\n                    "),b.Wb(),b.Jc(234,"\n                "),b.Wb(),b.Jc(235,"\n                "),b.Xb(236,"div",6),b.Jc(237,"\n                    "),b.Xb(238,"div",3),b.Jc(239,"\n                        "),b.Sb(240,"br"),b.Jc(241,"\n\n                        "),b.Xb(242,"p"),b.Xb(243,"b"),b.Jc(244,"Note"),b.Wb(),b.Jc(245,": You can also wrap the templates in your component."),b.Wb(),b.Jc(246,"\n\n                        "),b.Xb(247,"pre"),b.Xb(248,"code",7),b.Rb(),b.Jc(249,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder #table [source]="data" height="500" enable-selection>\n    <ngx-options [resizable]="true" [sortable]="true"></ngx-options>\n\n    <ngx-context-menu>\n       <my-menu [table]="table"></my-menu>\n    </ngx-context-menu>\n\n    <ngx-column key="action" custom-key sticky [resizable]="false" [width]="50">\n        <ng-template ngx-th></ng-template>\n        <ng-template ngx-td row let-row>\n            {{ table.selectionModel.get($any(row).id) ? \'x\' : \'-\' }}\n        </ng-template>\n    </ngx-column>\n\n    <ngx-column *ngFor="let key of table.modelColumnKeys" [key]="key"></ngx-column>\n  </ngx-table-builder>\n\n'),b.Yb(),b.Wb(),b.Wb(),b.Jc(250,"\n                        "),b.Sb(251,"br"),b.Jc(252,"\n                        "),b.Xb(253,"pre"),b.Xb(254,"code",23),b.Jc(255,"\n  // my-menu.component.ts\n  import { TableBuilderComponent } from \"@angular-ru/ng-table-builder\";\n  import { Component } from \"@angular/core\";\n\n  @Component({\n    selector: 'my-menu',\n    templateUrl: './my-menu.component.html'\n  })\n  export class MyMenuComponent {\n    @Input() public table: TableBuilderComponent;\n  }\n\n"),b.Wb(),b.Wb(),b.Jc(256,"\n                    "),b.Wb(),b.Jc(257,"\n                    "),b.Xb(258,"div",3),b.Jc(259,"\n                        "),b.Sb(260,"br"),b.Jc(261,"\n                        "),b.Xb(262,"p"),b.Xb(263,"b"),b.Jc(264,"Note"),b.Wb(),b.Jc(265,": You can also wrap the templates in your component."),b.Wb(),b.Jc(266,"\n                        "),b.Xb(267,"pre"),b.Xb(268,"code",7),b.Rb(),b.Jc(269,'\n  \x3c!-- my-menu.component.html --\x3e\n\n  \x3c!-- first item --\x3e\n  <ngx-context-menu-item contextTitle divider>\n      <ngx-menu-content>Menu</ngx-menu-content>\n  </ngx-context-menu-item>\n\n  \x3c!-- second item --\x3e\n  <ngx-context-menu-item>\n      <ngx-menu-content>Column list</ngx-menu-content>\n\n      <ngx-context-menu-item\n          *ngFor="let column of table.columnSchema"\n          (onClick)="table.toggleColumnVisibility(column.key); $events.preventDefault()"\n          [visible]="column.isModel"\n      >\n          <ngx-menu-content no-margin>{{ column.key }}</ngx-menu-content>\n          <ngx-menu-content no-margin align-center>\n              <mat-checkbox\n                  color="primary"\n                  [checked]="column.visible"\n              ></mat-checkbox>\n          </ngx-menu-content>\n      </ngx-context-menu-item>\n  </ngx-context-menu-item>\n\n  \x3c!-- third item --\x3e\n  <ngx-context-menu-item (onClick)="table.resetSchema()" divider>\n      <ngx-menu-content>Reset table settings</ngx-menu-content>\n  </ngx-context-menu-item>\n\n  \x3c!-- fourth item --\x3e\n  <ngx-context-menu-item>\n\n      <ngx-menu-content>Example tree</ngx-menu-content>\n\n      <ngx-context-menu-item>\n          <ngx-menu-content>Root A</ngx-menu-content>\n          <ngx-context-menu-item>\n              <ngx-menu-content>Child A1</ngx-menu-content>\n          </ngx-context-menu-item>\n          <ngx-context-menu-item>\n              <ngx-menu-content>Child A2</ngx-menu-content>\n          </ngx-context-menu-item>\n          <ngx-context-menu-item>\n              <ngx-menu-content>Child A3</ngx-menu-content>\n          </ngx-context-menu-item>\n      </ngx-context-menu-item>\n\n      <ngx-context-menu-item>\n          <ngx-menu-content>Root B</ngx-menu-content>\n      </ngx-context-menu-item>\n\n      <ngx-context-menu-item>\n          <ngx-menu-content>Root C</ngx-menu-content>\n          <ngx-context-menu-item>\n              <ngx-menu-content> Child C1</ngx-menu-content>\n          </ngx-context-menu-item>\n          <ngx-context-menu-item>\n              <ngx-menu-content>Child C2</ngx-menu-content>\n          </ngx-context-menu-item>\n          <ngx-context-menu-item>\n              <ngx-menu-content>Child C3</ngx-menu-content>\n          </ngx-context-menu-item>\n      </ngx-context-menu-item>\n\n  </ngx-context-menu-item>\n\n'),b.Yb(),b.Wb(),b.Wb(),b.Jc(270,"\n                    "),b.Wb(),b.Jc(271,"\n                "),b.Wb(),b.Jc(272,"\n            "),b.Wb(),b.Jc(273,"\n        "),b.Wb(),b.Jc(274,"\n    "),b.Wb()}if(2&n){const n=b.xc(22),e=b.xc(61),t=b.xc(106),c=b.ic();b.Eb(21),b.pc("source",c.licences),b.Eb(3),b.pc("height",null),b.Eb(32),b.pc("ngForOf",n.columnSchema),b.Eb(4),b.pc("disable",!e.state.key),b.Eb(9),b.pc("ngIf","id"===e.state.key),b.Eb(2),b.pc("ngIf","price"===e.state.key),b.Eb(7),b.Lc("\n                                        Selected items (",null==n||null==n.selectedItems?null:n.selectedItems.length,")\n                                    "),b.Eb(27),b.pc("source",c.data),b.Eb(5),b.pc("is-draggable",!1),b.Eb(7),b.pc("ngForOf",t.modelColumnKeys),b.Eb(7),b.Lc("Menu ",t.selection.selectionModel.size,""),b.Eb(40),b.pc("ngForOf",t.columnSchema)}}let E=(()=>{class n{constructor(n){this.cd=n,this.data=[],this.licences=[{id:1,name:"single",price:29.3},{id:2,name:"developer",price:49.8},{id:3,name:"premium",price:99.5},{id:4,name:"enterprise",price:199}]}ngOnInit(){m.a.generator(50,15).then(n=>{this.data=n,this.cd.detectChanges()})}ngAfterViewInit(){this.update()}update(){document.querySelectorAll("pre code").forEach(n=>{hljs.highlightBlock(n)})}exportExcel(n){window.alert("export excel - "+JSON.stringify(n))}showLine(n,e){window.alert("key - "+n+" item - "+JSON.stringify(e))}copyId(n){window.alert("Copy on buffer - "+n)}updatedSchema(n){console.log("Update schema",n)}}return n.\u0275fac=function(e){return new(e||n)(b.Qb(b.h))},n.\u0275cmp=b.Kb({type:n,selectors:[["sample-eleven"]],decls:11,vars:1,consts:[[1,"simple-toolbar"],[1,"night"],["class","column",4,"ngIf"],[1,"column"],[3,"selectedTabChange"],["label","Custom context menu"],[1,"column-samples"],[1,"html"],["enable-selection","",3,"source"],["table1",""],[3,"height"],["contextTitle","","divider",""],["icon","https://angular.io/assets/images/logos/angular/angular.svg"],[3,"onClick"],["icon","http://www.myiconfinder.com/uploads/iconsets/ae86b3a8881d697b6c42528aff5ba48b-excel.png"],["icon",""],[3,"visible","onClick",4,"ngFor","ngForOf"],["divider","",3,"disable","onClick"],["item",""],[3,"onClick",4,"ngIf"],[4,"ngIf"],["key","price","important-template",""],["ngx-td",""],[1,"javascript"],["label","Custom sub menu"],["height","500","enable-selection","",3,"source","schemaChanges"],["table2",""],["is-draggable","","is-sortable",""],["key","action","custom-key","","sticky","","width","50",3,"is-draggable"],["ngx-th",""],["ngx-td","","row",""],[3,"key",4,"ngFor","ngForOf"],["divider",""],["divider","",3,"onClick"],[3,"visible","onClick"],["no-margin",""],["no-margin","","align-center",""],["color","primary",3,"checked"],[3,"key"]],template:function(n,e){1&n&&(b.Xb(0,"mat-toolbar",0),b.Jc(1,"\n    "),b.Xb(2,"span"),b.Jc(3,"Example context menu"),b.Wb(),b.Jc(4,"\n"),b.Wb(),b.Jc(5,"\n\n"),b.Xb(6,"div",1),b.Jc(7,"\n    "),b.Hc(8,S,275,12,"div",2),b.Jc(9,"\n"),b.Wb(),b.Jc(10,"\n")),2&n&&(b.Eb(8),b.pc("ngIf",e.licences.length))},directives:[x.a,c.m,u.b,u.a,l.a,g.a,a.a,J.a,c.l,r.a,s.a,p.a,d.a,h.a],pipes:[c.c],styles:["\n            .night {\n                position: relative;\n                margin: auto;\n            }\n\n            /*noinspection CssUnusedSymbol*/\n            .night .mat-tab-body-content {\n                padding: 5px 0;\n                height: calc(100% - 10px);\n                overflow: hidden;\n            }\n\n            /*noinspection ALL*/\n            .night .mat-tab-body-wrapper .mat-tab-body.mat-tab-body-active {\n                overflow: visible;\n                max-width: 100%;\n            }\n        "],encapsulation:2,changeDetection:0}),n})(),I=(()=>{class n{}return n.\u0275mod=b.Ob({type:n}),n.\u0275inj=b.Nb({factory:function(e){return new(e||n)},imports:[[c.b,i.a,o.b.forChild([{path:"",component:E}])]]}),n})()}}]);