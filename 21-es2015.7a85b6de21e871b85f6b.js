(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{k5xG:function(e,n,t){"use strict";t.r(n),t.d(n,"SampleThirteenModule",(function(){return v}));var c=t("An66"),l=t("1VvW"),o=t("MRfT"),i=t("5Q2+"),a=t("kZht"),r=t("aJOL"),s=t("1ZKX"),b=t("BL99"),m=t("ctyY"),d=t("j5U8"),u=t("UDV5");function g(e,n){if(1&e){const e=a.Yb();a.Ic(0,"\n                    "),a.Wb(1,"mat-checkbox",12),a.fc("change",(function(){a.zc(e);const n=a.jc();return a.yc(31).selection.toggleAll(n.data)})),a.Vb(),a.Ic(2,"\n                ")}if(2&e){a.jc();const e=a.yc(31);a.Cb(1),a.qc("indeterminate",e.selectionModel.isIndeterminate)("checked",e.selectionModel.isAll)}}function p(e,n){if(1&e){const e=a.Yb();a.Ic(0,"\n                    "),a.Wb(1,"mat-checkbox",13),a.fc("change",(function(){a.zc(e);const t=n.$implicit;return a.jc(),a.yc(31).selection.toggle(t)})),a.Vb(),a.Ic(2,"\n                ")}if(2&e){const e=n.$implicit;a.jc();const t=a.yc(31);a.Cb(1),a.qc("checked",t.selectionModel.get(e.id))}}function f(e,n){1&e&&a.Ic(0),2&e&&a.Kc("\n                    ",n.$implicit,"\n                ")}function k(e,n){if(1&e){const e=a.Yb();a.Wb(0,"ngx-column",14),a.Ic(1,"\n                "),a.Gc(2,f,1,1,"ng-template",15),a.fc("onClick",(function(n){return a.zc(e),a.jc().rowOnClick(n)})),a.Ic(3,"\n            "),a.Vb()}2&e&&a.qc("key",n.$implicit)}function h(e,n){if(1&e){const e=a.Yb();a.Ic(0,"\n                    "),a.Wb(1,"mat-checkbox",12),a.fc("change",(function(){a.zc(e);const n=a.jc();return a.yc(52).selection.toggleAll(n.data)})),a.Vb(),a.Ic(2,"\n                ")}if(2&e){a.jc();const e=a.yc(52);a.Cb(1),a.qc("indeterminate",e.selectionModel.isIndeterminate)("checked",e.selectionModel.isAll)}}function I(e,n){if(1&e){const e=a.Yb();a.Ic(0,"\n                    "),a.Wb(1,"mat-checkbox",13),a.fc("change",(function(){a.zc(e);const t=n.$implicit;return a.jc(),a.yc(52).selection.toggle(t)})),a.Vb(),a.Ic(2,"\n                ")}if(2&e){const e=n.$implicit;a.jc();const t=a.yc(52);a.Cb(1),a.qc("checked",t.selectionModel.get(e.id))}}function x(e,n){1&e&&a.Ic(0),2&e&&a.Kc("\n                    ",n.$implicit,"\n                ")}function y(e,n){if(1&e){const e=a.Yb();a.Wb(0,"ngx-column",14),a.Ic(1,"\n                "),a.Gc(2,x,1,1,"ng-template",16),a.fc("dblClick",(function(n){return a.zc(e),a.jc().rowDblClick(n)})),a.Ic(3,"\n            "),a.Vb()}2&e&&a.qc("key",n.$implicit)}let C=(()=>{class e{constructor(e){this.toast=e,this.data=[{id:1,name:"single",price:29.3},{id:2,name:"developer",price:49.8},{id:3,name:"premium",price:99.5},{id:4,name:"enterprise",price:199}]}ngAfterViewInit(){this.update()}update(){document.querySelectorAll("pre code").forEach(e=>{hljs.highlightBlock(e)})}rowOnClick(e){this.toast.success(JSON.stringify(e,null,4),"OnClick",{timeOut:2e3,onActivateTick:!0})}rowDblClick(e){this.toast.success(JSON.stringify(e,null,4),"DblClick",{timeOut:2e3,onActivateTick:!0})}}return e.\u0275fac=function(n){return new(n||e)(a.Pb(o.b))},e.\u0275cmp=a.Jb({type:e,selectors:[["sample-thirteen"]],features:[a.Bb([o.b])],decls:74,vars:4,consts:[[1,"simple-toolbar"],[1,"column-samples"],[1,"column"],[1,"html"],["enable-selection","",3,"source"],["tableFirst",""],["key","selection","sticky","","width","55","custom-key",""],["ngx-th",""],["ngx-td","","row","",3,"onClick"],[3,"key",4,"ngFor","ngForOf"],["tableSecond",""],[1,"javascript"],[3,"indeterminate","checked","change"],[3,"checked","change"],[3,"key"],["ngx-td","",3,"onClick"],["ngx-td","",3,"dblClick"]],template:function(e,n){if(1&e&&(a.Wb(0,"mat-toolbar",0),a.Ic(1,"\n    "),a.Wb(2,"span"),a.Ic(3,"Example mouse events"),a.Vb(),a.Ic(4,"\n"),a.Vb(),a.Ic(5,"\n\n"),a.Wb(6,"div",1),a.Ic(7,"\n    "),a.Wb(8,"div",2),a.Ic(9,"\n        "),a.Rb(10,"br"),a.Ic(11,"\n        "),a.Wb(12,"pre"),a.Wb(13,"code",3),a.Qb(),a.Ic(14,'\n  <b>OnClick</b>:\n\n  <ngx-table-builder [source]="data" enable-selection #tableFirst>\n      <ngx-column key="selection" sticky width="55" custom-key>\n          <ng-template ngx-th>\n              <mat-checkbox\n                  (change)="tableFirst.selection.toggleAll(data)"\n                  [indeterminate]="tableFirst.selectionModel.isIndeterminate"\n                  [checked]="tableFirst.selectionModel.isAll"\n              ></mat-checkbox>\n          </ng-template>\n          <ng-template ngx-td row let-row (onClick)="$events.preventDefault()">\n              <mat-checkbox\n                  [checked]="tableFirst.selectionModel.get($any(row).id)"\n                  (change)="tableFirst.selection.toggle(row)"\n              ></mat-checkbox>\n          </ng-template>\n      </ngx-column>\n\n      <ngx-column *ngFor="let key of tableFirst.modelColumnKeys" [key]="key">\n          <ng-template ngx-td (onClick)="rowOnClick($events)" let-cell>\n            {{ cell }}\n            </ng-template>\n      </ngx-column>\n  </ngx-table-builder>\n\n  <b>DblClick</b>:\n\n  <ngx-table-builder [source]="data" enable-selection #tableSecond>\n      <ngx-column key="selection" sticky width="55" custom-key>\n          <ng-template ngx-th>\n              <mat-checkbox\n                  (change)="tableSecond.selection.toggleAll(data)"\n                  [indeterminate]="tableSecond.selectionModel.isIndeterminate"\n                  [checked]="tableSecond.selectionModel.isAll"\n              ></mat-checkbox>\n          </ng-template>\n          <ng-template ngx-td row let-row (onClick)="$events.preventDefault()">\n              <mat-checkbox\n                  [checked]="tableSecond.selectionModel.get($any(row).id)"\n                  (change)="tableSecond.selection.toggle(row)"\n              ></mat-checkbox>\n          </ng-template>\n      </ngx-column>\n\n      <ngx-column *ngFor="let key of tableSecond.modelColumnKeys" [key]="key">\n          <ng-template ngx-td (dblClick)="rowDblClick($events)" let-cell>\n            {{ cell }}\n            </ng-template>\n      </ngx-column>\n  </ngx-table-builder>\n\n'),a.Xb(),a.Vb(),a.Vb(),a.Ic(15,"\n\n        "),a.Wb(16,"p"),a.Ic(17,"\n            A template reference variable is often a reference to a DOM element within a template. It can also refer to\n            a directive (which contains a component), an element, TemplateRef, or a web component. Use the hash symbol\n            (#) to declare a reference variable. As per Official documentation it is not recommended to give same name\n            for template reference variables as it will yield inconsistent results at runtime. Therefore, use different\n            reference names (#tableFirst, #tableSecond).\n        "),a.Vb(),a.Ic(18,"\n    "),a.Vb(),a.Ic(19,"\n    "),a.Wb(20,"div",2),a.Ic(21,"\n        "),a.Rb(22,"br"),a.Ic(23,"\n\n        "),a.Wb(24,"b"),a.Ic(25,"OnClick"),a.Vb(),a.Ic(26,": "),a.Rb(27,"br"),a.Rb(28,"br"),a.Ic(29,"\n\n        "),a.Wb(30,"ngx-table-builder",4,5),a.Ic(32,"\n            "),a.Wb(33,"ngx-column",6),a.Ic(34,"\n                "),a.Gc(35,g,3,2,"ng-template",7),a.Ic(36,"\n                "),a.Gc(37,p,3,1,"ng-template",8),a.fc("onClick",(function(e){return e.preventDefault()})),a.Ic(38,"\n            "),a.Vb(),a.Ic(39,"\n\n            "),a.Gc(40,k,4,1,"ngx-column",9),a.Ic(41,"\n        "),a.Vb(),a.Ic(42,"\n\n        "),a.Rb(43,"br"),a.Ic(44,"\n\n        "),a.Wb(45,"b"),a.Ic(46,"DblClick"),a.Vb(),a.Ic(47,": "),a.Rb(48,"br"),a.Rb(49,"br"),a.Ic(50,"\n\n        "),a.Wb(51,"ngx-table-builder",4,10),a.Ic(53,"\n            "),a.Wb(54,"ngx-column",6),a.Ic(55,"\n                "),a.Gc(56,h,3,2,"ng-template",7),a.Ic(57,"\n                "),a.Gc(58,I,3,1,"ng-template",8),a.fc("onClick",(function(e){return e.preventDefault()})),a.Ic(59,"\n            "),a.Vb(),a.Ic(60,"\n\n            "),a.Gc(61,y,4,1,"ngx-column",9),a.Ic(62,"\n        "),a.Vb(),a.Ic(63,"\n\n        "),a.Rb(64,"br"),a.Ic(65,"\n        "),a.Rb(66,"br"),a.Ic(67,"\n\n        "),a.Wb(68,"pre"),a.Wb(69,"code",11),a.Ic(70,"\n  // app.component.ts\n  import { TableEvent } from \"@angular-ru/ng-table-builder\";\n  import { Component } from \"@angular/core\";\n  import { ToastService } from \"./toast.service\";\n  import { Data } from \"./data.interface\";\n\n  @Component({\n    selector: 'app',\n    templateUrl: './app.component.html'\n  })\n  export class AppComponent {\n    public data: Data[] = [ .. ];\n    constructor(private toast: ToastService) {}\n\n    public rowOnClick(events: TableEvent): void {\n        this.toast.success('OnClick', events);\n    }\n\n    public rowDblClick(events: TableEvent): void {\n        this.toast.success('DblClick', events);\n    }\n\n  }\n\n"),a.Vb(),a.Vb(),a.Ic(71,"\n    "),a.Vb(),a.Ic(72,"\n"),a.Vb(),a.Ic(73,"\n")),2&e){const e=a.yc(31),t=a.yc(52);a.Cb(30),a.qc("source",n.data),a.Cb(10),a.qc("ngForOf",e.modelColumnKeys),a.Cb(11),a.qc("source",n.data),a.Cb(10),a.qc("ngForOf",t.modelColumnKeys)}},directives:[r.a,s.a,b.a,m.a,d.a,c.l,u.a],encapsulation:2,changeDetection:0}),e})(),v=(()=>{class e{}return e.\u0275mod=a.Nb({type:e}),e.\u0275inj=a.Mb({factory:function(n){return new(n||e)},imports:[[c.b,i.a,o.a,l.b.forChild([{path:"",component:C}])]]}),e})()}}]);