(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{ulYL:function(n,e,t){"use strict";t.r(e),t.d(e,"SampleSecondModule",(function(){return O}));var c=t("An66"),o=t("1VvW"),i=t("5Q2+"),m=t("kZht"),l=t("aJOL"),a=t("1ZKX"),s=t("BL99"),b=t("ctyY"),p=t("j5U8"),r=t("hCLc"),u=t("ydE+"),g=t("O+XF"),d=t("EmXI"),I=t("IOEv"),h=t("pTnX");function y(n,e){1&n&&m.Ic(0,"License")}function x(n,e){1&n&&(m.Ic(0),m.kc(1,"uppercase")),2&n&&m.Jc(m.lc(1,1,e.$implicit))}function V(n,e){1&n&&m.Ic(0,"Price")}function w(n,e){1&n&&(m.Ic(0),m.kc(1,"currency")),2&n&&m.Jc(m.lc(1,1,e.$implicit))}function f(n,e){}function W(n,e){1&n&&(m.Ic(0,"\n                    "),m.Wb(1,"button",17),m.Ic(2,"\n                        "),m.Wb(3,"mat-icon"),m.Ic(4,"done"),m.Vb(),m.Ic(5,"\n                    "),m.Vb(),m.Ic(6,"\n                "))}function k(n,e){1&n&&m.Ic(0),2&n&&m.Kc("\u2116",e.$implicit,"")}function C(n,e){1&n&&(m.Ic(0),m.kc(1,"uppercase")),2&n&&m.Jc(m.lc(1,1,e.$implicit))}function v(n,e){if(1&n&&(m.Ic(0,"\n                    "),m.Wb(1,"button",18),m.Ic(2),m.kc(3,"currency"),m.Vb(),m.Ic(4,"\n                    "),m.Wb(5,"mat-menu",null,19),m.Ic(7,"\n                        "),m.Wb(8,"button",20),m.Ic(9,"EUR"),m.Vb(),m.Ic(10,"\n                        "),m.Wb(11,"button",20),m.Ic(12,"DOL"),m.Vb(),m.Ic(13,"\n                    "),m.Vb(),m.Ic(14,"\n                ")),2&n){const n=e.$implicit,t=m.yc(6);m.Cb(1),m.qc("matMenuTriggerFor",t),m.Cb(1),m.Jc(m.lc(3,2,n))}}function L(n,e){if(1&n){const n=m.Yb();m.Wb(0,"mat-option",22),m.fc("click",(function(){return m.zc(n),m.jc(2).cd.detectChanges()})),m.Ic(1),m.Vb()}if(2&n){const n=e.$implicit;m.qc("value",n.name),m.Cb(1),m.Kc("\n                                ",n.name,"\n                            ")}}function S(n,e){if(1&n&&(m.Ic(0,"\n                    "),m.Wb(1,"mat-form-field"),m.Ic(2,"\n                        "),m.Wb(3,"mat-label"),m.Ic(4,"Relative"),m.Vb(),m.Ic(5,"\n                        "),m.Wb(6,"mat-select"),m.Ic(7,"\n                            "),m.Gc(8,L,2,2,"mat-option",21),m.Ic(9,"\n                        "),m.Vb(),m.Ic(10,"\n                    "),m.Vb(),m.Ic(11,"\n                ")),2&n){const n=m.jc();m.Cb(8),m.qc("ngForOf",n.licenses)}}const F=function(){return["status-column"]};let N=(()=>{class n{constructor(n){this.cd=n,this.licenses=[],this.columns=["name","position","weight","symbol","position","weight","symbol","status"],this.elements=[{position:1,name:"Hydrogen",weight:1.0079,symbol:"H"},{position:2,name:"Helium",weight:4.0026,symbol:"He"},{position:3,name:"Lithium",weight:6.941,symbol:"Li"},{position:4,name:"Beryllium",weight:9.0122,symbol:"Be"},{position:5,name:"Boron",weight:10.811,symbol:"B"},{position:6,name:"Carbon",weight:12.0107,symbol:"C"},{position:7,name:"Nitrogen",weight:14.0067,symbol:"N"},{position:8,name:"Oxygen",weight:15.9994,symbol:"O"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"}]}ngAfterViewInit(){document.querySelectorAll("pre code").forEach(n=>{hljs.highlightBlock(n)}),setTimeout(()=>{this.licenses=[{id:1,name:"single",price:29.3},{id:2,name:"developer",price:49.8},{id:3,name:"premium",price:99.5},{id:4,name:"enterprise",price:199}],this.cd.detectChanges()})}}return n.\u0275fac=function(e){return new(e||n)(m.Pb(m.h))},n.\u0275cmp=m.Jb({type:n,selectors:[["sample-second"]],decls:138,vars:7,consts:[[1,"simple-toolbar"],[1,"column-samples"],[1,"column"],[1,"javascript"],[3,"source"],["key","name"],["ngx-th",""],["ngx-td",""],["key","price"],[3,"source","striped","keys"],["key","name","sticky",""],["key","status","width","50","sticky-end","",3,"css-class"],["row-height","60",3,"source"],["key","id","width","100","empty-head",""],["key","name","head-title","License name"],["key","price","head-title","Cost"],["key","change","width","250","empty-head","","custom-key",""],["mat-button","",1,"button__done"],["mat-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item",""],[3,"value","click",4,"ngFor","ngForOf"],[3,"value","click"]],template:function(n,e){1&n&&(m.Wb(0,"mat-toolbar",0),m.Ic(1,"\n    "),m.Wb(2,"span"),m.Ic(3,"Example custom templates"),m.Vb(),m.Ic(4,"\n"),m.Vb(),m.Ic(5,"\n\n"),m.Wb(6,"h4"),m.Ic(7,"1. Override columns rendering"),m.Vb(),m.Ic(8,"\n\n"),m.Wb(9,"div",1),m.Ic(10,"\n    "),m.Wb(11,"div",2),m.Ic(12,"\n        "),m.Wb(13,"pre"),m.Wb(14,"code",3),m.Ic(15,"\n  // app.component.ts\n  import { Component } from \"@angular/core\";\n  import { LicenseSample } from \"./license.interface\";\n\n  @Component({\n    selector: 'app',\n    templateUrl: './app.component.html'\n  })\n  export class AppComponent {\n\n    public licenses: LicenseSample[] = [\n      {\n        id: 1,\n        name: 'single',\n        price: 29.3\n      },\n      {\n        id: 2,\n        name: 'developer',\n        price: 49.8\n      },\n      {\n        id: 3,\n        name: 'premium',\n        price: 99.5\n      },\n      {\n        id: 4,\n        name: 'enterprise',\n        price: 199\n      }\n    ];\n\n  }\n\n"),m.Vb(),m.Vb(),m.Ic(16,"\n    "),m.Vb(),m.Ic(17,"\n\n    "),m.Wb(18,"div",2),m.Ic(19,"\n        "),m.Wb(20,"pre"),m.Wb(21,"code",3),m.Qb(),m.Ic(22,'\n    \x3c!-- app.component.html --\x3e\n    <ngx-table-builder [source]="licenses">\n\n      <ngx-column key="name">\n          <ng-template ngx-th>License</ng-template>\n          <ng-template ngx-td let-name>\n            {{ name | uppercase }}\n          </ng-template>\n      </ngx-column>\n\n      <ngx-column key="price">\n          <ng-template ngx-th>Cost</ng-template>\n          <ng-template ngx-td let-price>\n            {{ price | currency }}\n          </ng-template>\n      </ngx-column>\n\n    </ngx-table-builder>\n\n'),m.Xb(),m.Vb(),m.Vb(),m.Ic(23,"\n\n        "),m.Wb(24,"ngx-table-builder",4),m.Ic(25,"\n            "),m.Wb(26,"ngx-column",5),m.Ic(27,"\n                "),m.Gc(28,y,1,0,"ng-template",6),m.Ic(29,"\n                "),m.Gc(30,x,2,3,"ng-template",7),m.Ic(31,"\n            "),m.Vb(),m.Ic(32,"\n\n            "),m.Wb(33,"ngx-column",8),m.Ic(34,"\n                "),m.Gc(35,V,1,0,"ng-template",6),m.Ic(36,"\n                "),m.Gc(37,w,2,3,"ng-template",7),m.Ic(38,"\n            "),m.Vb(),m.Ic(39,"\n        "),m.Vb(),m.Ic(40,"\n    "),m.Vb(),m.Ic(41,"\n"),m.Vb(),m.Ic(42,"\n\n"),m.Wb(43,"h4"),m.Ic(44,"2. Sticky and Custom Columns"),m.Vb(),m.Ic(45,"\n\n"),m.Wb(46,"div",1),m.Ic(47,"\n    "),m.Wb(48,"div",2),m.Ic(49,"\n        "),m.Wb(50,"pre"),m.Wb(51,"code",3),m.Ic(52,"\n  // app.component.ts\n  import { Component } from \"@angular/core\";\n\n  export interface PeriodicElement {\n      name: string;\n      position: number;\n      weight: number;\n      symbol: string;\n  }\n\n  @Component({\n    selector: 'app',\n    templateUrl: './app.component.html',\n    styles: [\n      `\n         // Use custom CSS for column and cell\n        .status-column .table-grid__cell {\n          padding: 0;\n          color: green;\n        }\n\n         // Reset CSS for default mat-button style\n        .button__done[mat-button] {\n          padding: 0;\n          min-width: 100%;\n        }\n      `\n    ],\n    // Use to disable CSS Encapsulation for this component\n    encapsulation: ViewEncapsulation.None,\n  })\n  export class AppComponent {\n    public columns: string[] = [\n      'name', 'position', 'weight', 'symbol',\n      'position', 'weight', 'symbol', 'status'\n    ];\n\n    public data: PeriodicElement[] = [\n      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },\n      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },\n      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },\n      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },\n      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },\n      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },\n      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },\n      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },\n      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },\n      { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },\n    ];\n  }\n\n\n"),m.Vb(),m.Vb(),m.Ic(53,"\n\n        "),m.Wb(54,"p"),m.Ic(55,"\n            "),m.Wb(56,"b"),m.Ic(57,"Note"),m.Vb(),m.Ic(58,": If you use the keys array, then the columns will be drawn to agree with their order (including\n            repetitions). If you do not use the keys array, then the columns will be drawn to agree with the specified\n            templates (ngx-column). "),m.Rb(59,"br"),m.Ic(60,"\n        "),m.Vb(),m.Ic(61,"\n\n        "),m.Rb(62,"hr"),m.Ic(63,"\n\n        "),m.Wb(64,"p"),m.Ic(65,"\n            "),m.Wb(66,"b"),m.Ic(67,"Note"),m.Vb(),m.Ic(68,": You can also use keywords "),m.Wb(69,"b"),m.Ic(70," "),m.Wb(71,"i"),m.Ic(72,"empty-head"),m.Vb(),m.Ic(73," "),m.Vb(),m.Ic(74,",\n            "),m.Wb(75,"b"),m.Ic(76,"\n                "),m.Wb(77,"i"),m.Ic(78,"head-title"),m.Vb(),m.Ic(79,"\n            "),m.Vb(),m.Ic(80,"\n            for print simple text in table head.\n        "),m.Vb(),m.Ic(81,"\n\n        "),m.Wb(82,"pre"),m.Wb(83,"code",3),m.Qb(),m.Ic(84,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder [source]="licenses" row-height="60">\n      <ngx-column key="id" width="100" empty-head>\n          <ng-template ngx-td let-id>\u2116{{ id }}</ng-template>\n      </ngx-column>\n\n      <ngx-column key="name" head-title="License name">\n          <ng-template ngx-td let-name>{{ name | uppercase }}</ng-template>\n      </ngx-column>\n\n      <ngx-column key="price" head-title="Cost">\n          <ng-template ngx-td let-price>\n              <button mat-button [matMenuTriggerFor]="menu">{{ price | currency }}</button>\n              <mat-menu #menu="matMenu">\n                  <button mat-menu-item>EUR</button>\n                  <button mat-menu-item>DOL</button>\n              </mat-menu>\n          </ng-template>\n      </ngx-column>\n\n      <ngx-column key="change" width="250" empty-head custom-key>\n          <ng-template ngx-td>\n              <mat-form-field>\n                  <mat-label>Relative</mat-label>\n                  <mat-select>\n                      <mat-option\n                          [value]="license.name"\n                          (click)="cd.detectChanges()"\n                          *ngFor="let license of licenses"\n                      >\n                          {{ license.name }}\n                      </mat-option>\n                  </mat-select>\n              </mat-form-field>\n          </ng-template>\n      </ngx-column>\n  </ngx-table-builder>\n\n'),m.Xb(),m.Vb(),m.Vb(),m.Ic(85,"\n    "),m.Vb(),m.Ic(86,"\n\n    "),m.Wb(87,"div",2),m.Ic(88,"\n        "),m.Wb(89,"ngx-table-builder",9),m.Ic(90,"\n            "),m.Rb(91,"ngx-column",10),m.Ic(92,"\n\n            "),m.Wb(93,"ngx-column",11),m.Ic(94,"\n                "),m.Gc(95,f,0,0,"ng-template",6),m.Ic(96,"\n                "),m.Gc(97,W,7,0,"ng-template",7),m.Ic(98,"\n            "),m.Vb(),m.Ic(99,"\n        "),m.Vb(),m.Ic(100,"\n        "),m.Wb(101,"div"),m.Rb(102,"br"),m.Vb(),m.Ic(103,"\n\n        "),m.Wb(104,"pre"),m.Wb(105,"code",3),m.Qb(),m.Ic(106,'\n  \x3c!-- app.component.html --\x3e\n  <ngx-table-builder [source]="data" [striped]="false" [keys]="columns">\n\n      <ngx-column key="name" sticky></ngx-column>\n\n      <ngx-column width="50" key="status" sticky-end [css-class]="[\'status-column\']">\n          <ng-template ngx-th></ng-template>\n          <ng-template ngx-td>\n              <button class="button__done" mat-button>\n                  <mat-icon>done</mat-icon>\n              </button>\n          </ng-template>\n      </ngx-column>\n\n  </ngx-table-builder>\n'),m.Xb(),m.Vb(),m.Vb(),m.Ic(107,"\n\n        "),m.Rb(108,"hr"),m.Ic(109,"\n\n        "),m.Wb(110,"ngx-table-builder",12),m.Ic(111,"\n            "),m.Wb(112,"ngx-column",13),m.Ic(113,"\n                "),m.Gc(114,k,1,1,"ng-template",7),m.Ic(115,"\n            "),m.Vb(),m.Ic(116,"\n\n            "),m.Wb(117,"ngx-column",14),m.Ic(118,"\n                "),m.Gc(119,C,2,3,"ng-template",7),m.Ic(120,"\n            "),m.Vb(),m.Ic(121,"\n\n            "),m.Wb(122,"ngx-column",15),m.Ic(123,"\n                "),m.Gc(124,v,15,4,"ng-template",7),m.Ic(125,"\n            "),m.Vb(),m.Ic(126,"\n\n            "),m.Wb(127,"ngx-column",16),m.Ic(128,"\n                "),m.Gc(129,S,12,1,"ng-template",7),m.Ic(130,"\n            "),m.Vb(),m.Ic(131,"\n        "),m.Vb(),m.Ic(132,"\n    "),m.Vb(),m.Ic(133,"\n"),m.Vb(),m.Ic(134,"\n\n"),m.Wb(135,"div"),m.Rb(136,"br"),m.Vb(),m.Ic(137,"\n")),2&n&&(m.Cb(24),m.qc("source",e.licenses),m.Cb(65),m.qc("source",e.elements)("striped",!1)("keys",e.columns),m.Cb(4),m.qc("css-class",m.sc(6,F)),m.Cb(17),m.qc("source",e.licenses))},directives:[l.a,a.a,s.a,b.a,p.a,r.a,u.a,g.c,g.d,g.a,d.b,d.e,I.a,c.l,h.i],pipes:[c.v,c.c],styles:["\n            /*noinspection CssUnusedSymbol*/\n            .status-column .table-grid__cell {\n                padding: 0;\n                color: green;\n            }\n\n            /*noinspection CssUnusedSymbol*/\n            .button__done[mat-button] {\n                padding: 0;\n                min-width: 100%;\n            }\n        "],encapsulation:2,changeDetection:0}),n})(),O=(()=>{class n{}return n.\u0275mod=m.Nb({type:n}),n.\u0275inj=m.Mb({factory:function(e){return new(e||n)},imports:[[c.b,i.a,o.b.forChild([{path:"",component:N}])]]}),n})()}}]);