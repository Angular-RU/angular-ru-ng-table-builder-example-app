(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{k5xG:function(e,n,t){"use strict";t.r(n),t.d(n,"SampleThirteenModule",function(){return C});var c=t("An66"),l=t("1VvW"),o=t("MRfT"),i=t("5Q2+"),a=t("kZht"),r=t("aJOL"),s=t("1ZKX"),b=t("BL99"),m=t("ctyY"),d=t("j5U8"),u=t("UDV5");function g(e,n){if(1&e){const e=a.Zb();a.Kc(0,"\n                    "),a.Xb(1,"mat-checkbox",12),a.fc("change",function(){a.zc(e);const n=a.jc();return a.yc(31).selection.toggleAll(n.data)}),a.Wb(),a.Kc(2,"\n                ")}if(2&e){a.jc();const e=a.yc(31);a.Eb(1),a.qc("indeterminate",e.selectionModel.isIndeterminate)("checked",e.selectionModel.isAll)}}function p(e,n){if(1&e){const e=a.Zb();a.Kc(0,"\n                    "),a.Xb(1,"mat-checkbox",13),a.fc("change",function(){a.zc(e);const t=n.$implicit;return a.jc(),a.yc(31).selection.toggle(t)}),a.Wb(),a.Kc(2,"\n                ")}if(2&e){const e=n.$implicit;a.jc();const t=a.yc(31);a.Eb(1),a.qc("checked",t.selectionModel.get(e.id))}}function f(e,n){1&e&&a.Kc(0),2&e&&a.Mc("\n                    ",n.$implicit,"\n                ")}function k(e,n){if(1&e){const e=a.Zb();a.Xb(0,"ngx-column",14),a.Kc(1,"\n                "),a.Ic(2,f,1,1,"ng-template",15),a.fc("onClick",function(n){return a.zc(e),a.jc().rowOnClick(n)}),a.Kc(3,"\n            "),a.Wb()}2&e&&a.qc("key",n.$implicit)}function h(e,n){if(1&e){const e=a.Zb();a.Kc(0,"\n                    "),a.Xb(1,"mat-checkbox",12),a.fc("change",function(){a.zc(e);const n=a.jc();return a.yc(52).selection.toggleAll(n.data)}),a.Wb(),a.Kc(2,"\n                ")}if(2&e){a.jc();const e=a.yc(52);a.Eb(1),a.qc("indeterminate",e.selectionModel.isIndeterminate)("checked",e.selectionModel.isAll)}}function K(e,n){if(1&e){const e=a.Zb();a.Kc(0,"\n                    "),a.Xb(1,"mat-checkbox",13),a.fc("change",function(){a.zc(e);const t=n.$implicit;return a.jc(),a.yc(52).selection.toggle(t)}),a.Wb(),a.Kc(2,"\n                ")}if(2&e){const e=n.$implicit;a.jc();const t=a.yc(52);a.Eb(1),a.qc("checked",t.selectionModel.get(e.id))}}function x(e,n){1&e&&a.Kc(0),2&e&&a.Mc("\n                    ",n.$implicit,"\n                ")}function y(e,n){if(1&e){const e=a.Zb();a.Xb(0,"ngx-column",14),a.Kc(1,"\n                "),a.Ic(2,x,1,1,"ng-template",16),a.fc("dblClick",function(n){return a.zc(e),a.jc().rowDblClick(n)}),a.Kc(3,"\n            "),a.Wb()}2&e&&a.qc("key",n.$implicit)}let v=(()=>{class e{constructor(e){this.toast=e,this.data=[{id:1,name:"single",price:29.3},{id:2,name:"developer",price:49.8},{id:3,name:"premium",price:99.5},{id:4,name:"enterprise",price:199}]}ngAfterViewInit(){this.update()}update(){document.querySelectorAll("pre code").forEach(e=>{hljs.highlightBlock(e)})}rowOnClick(e){this.toast.success(JSON.stringify(e,null,4),"OnClick",{timeOut:2e3,onActivateTick:!0})}rowDblClick(e){this.toast.success(JSON.stringify(e,null,4),"DblClick",{timeOut:2e3,onActivateTick:!0})}}return e.\u0275fac=function(n){return new(n||e)(a.Qb(o.b))},e.\u0275cmp=a.Kb({type:e,selectors:[["sample-thirteen"]],features:[a.Db([o.b])],decls:74,vars:4,consts:[[1,"simple-toolbar"],[1,"column-samples"],[1,"column"],[1,"html"],["enable-selection","",3,"source"],["tableFirst",""],["key","selection","sticky","","width","55","custom-key",""],["ngx-th",""],["ngx-td","","row","",3,"onClick"],[3,"key",4,"ngFor","ngForOf"],["tableSecond",""],[1,"javascript"],[3,"indeterminate","checked","change"],[3,"checked","change"],[3,"key"],["ngx-td","",3,"onClick"],["ngx-td","",3,"dblClick"]],template:function(e,n){if(1&e&&(a.Xb(0,"mat-toolbar",0),a.Kc(1,"\n    "),a.Xb(2,"span"),a.Kc(3,"Example mouse events"),a.Wb(),a.Kc(4,"\n"),a.Wb(),a.Kc(5,"\n\n"),a.Xb(6,"div",1),a.Kc(7,"\n    "),a.Xb(8,"div",2),a.Kc(9,"\n        "),a.Sb(10,"br"),a.Kc(11,"\n        "),a.Xb(12,"pre"),a.Xb(13,"code",3),a.Rb(),a.Kc(14,'\n  <b>OnClick</b>:\n\n  <ngx-table-builder [source]="data" enable-selection #tableFirst>\n      <ngx-column key="selection" sticky width="55" custom-key>\n          <ng-template ngx-th>\n              <mat-checkbox\n                  (change)="tableFirst.selection.toggleAll(data)"\n                  [indeterminate]="tableFirst.selectionModel.isIndeterminate"\n                  [checked]="tableFirst.selectionModel.isAll"\n              ></mat-checkbox>\n          </ng-template>\n          <ng-template ngx-td row let-row (onClick)="$events.preventDefault()">\n              <mat-checkbox\n                  [checked]="tableFirst.selectionModel.get($any(row).id)"\n                  (change)="tableFirst.selection.toggle(row)"\n              ></mat-checkbox>\n          </ng-template>\n      </ngx-column>\n\n      <ngx-column *ngFor="let key of tableFirst.modelColumnKeys" [key]="key">\n          <ng-template ngx-td (onClick)="rowOnClick($events)" let-cell>\n            {{ cell }}\n            </ng-template>\n      </ngx-column>\n  </ngx-table-builder>\n\n  <b>DblClick</b>:\n\n  <ngx-table-builder [source]="data" enable-selection #tableSecond>\n      <ngx-column key="selection" sticky width="55" custom-key>\n          <ng-template ngx-th>\n              <mat-checkbox\n                  (change)="tableSecond.selection.toggleAll(data)"\n                  [indeterminate]="tableSecond.selectionModel.isIndeterminate"\n                  [checked]="tableSecond.selectionModel.isAll"\n              ></mat-checkbox>\n          </ng-template>\n          <ng-template ngx-td row let-row (onClick)="$events.preventDefault()">\n              <mat-checkbox\n                  [checked]="tableSecond.selectionModel.get($any(row).id)"\n                  (change)="tableSecond.selection.toggle(row)"\n              ></mat-checkbox>\n          </ng-template>\n      </ngx-column>\n\n      <ngx-column *ngFor="let key of tableSecond.modelColumnKeys" [key]="key">\n          <ng-template ngx-td (dblClick)="rowDblClick($events)" let-cell>\n            {{ cell }}\n            </ng-template>\n      </ngx-column>\n  </ngx-table-builder>\n\n'),a.Yb(),a.Wb(),a.Wb(),a.Kc(15,"\n\n        "),a.Xb(16,"p"),a.Kc(17,"\n            A template reference variable is often a reference to a DOM element within a template. It can also refer to\n            a directive (which contains a component), an element, TemplateRef, or a web component. Use the hash symbol\n            (#) to declare a reference variable. As per Official documentation it is not recommended to give same name\n            for template reference variables as it will yield inconsistent results at runtime. Therefore, use different\n            reference names (#tableFirst, #tableSecond).\n        "),a.Wb(),a.Kc(18,"\n    "),a.Wb(),a.Kc(19,"\n    "),a.Xb(20,"div",2),a.Kc(21,"\n        "),a.Sb(22,"br"),a.Kc(23,"\n\n        "),a.Xb(24,"b"),a.Kc(25,"OnClick"),a.Wb(),a.Kc(26,": "),a.Sb(27,"br"),a.Sb(28,"br"),a.Kc(29,"\n\n        "),a.Xb(30,"ngx-table-builder",4,5),a.Kc(32,"\n            "),a.Xb(33,"ngx-column",6),a.Kc(34,"\n                "),a.Ic(35,g,3,2,"ng-template",7),a.Kc(36,"\n                "),a.Ic(37,p,3,1,"ng-template",8),a.fc("onClick",function(e){return e.preventDefault()}),a.Kc(38,"\n            "),a.Wb(),a.Kc(39,"\n\n            "),a.Ic(40,k,4,1,"ngx-column",9),a.Kc(41,"\n        "),a.Wb(),a.Kc(42,"\n\n        "),a.Sb(43,"br"),a.Kc(44,"\n\n        "),a.Xb(45,"b"),a.Kc(46,"DblClick"),a.Wb(),a.Kc(47,": "),a.Sb(48,"br"),a.Sb(49,"br"),a.Kc(50,"\n\n        "),a.Xb(51,"ngx-table-builder",4,10),a.Kc(53,"\n            "),a.Xb(54,"ngx-column",6),a.Kc(55,"\n                "),a.Ic(56,h,3,2,"ng-template",7),a.Kc(57,"\n                "),a.Ic(58,K,3,1,"ng-template",8),a.fc("onClick",function(e){return e.preventDefault()}),a.Kc(59,"\n            "),a.Wb(),a.Kc(60,"\n\n            "),a.Ic(61,y,4,1,"ngx-column",9),a.Kc(62,"\n        "),a.Wb(),a.Kc(63,"\n\n        "),a.Sb(64,"br"),a.Kc(65,"\n        "),a.Sb(66,"br"),a.Kc(67,"\n\n        "),a.Xb(68,"pre"),a.Xb(69,"code",11),a.Kc(70,"\n  // app.component.ts\n  import { TableEvent } from \"@angular-ru/ng-table-builder\";\n  import { Component } from \"@angular/core\";\n  import { ToastService } from \"./toast.service\";\n  import { Data } from \"./data.interface\";\n\n  @Component({\n    selector: 'app',\n    templateUrl: './app.component.html'\n  })\n  export class AppComponent {\n    public data: Data[] = [ .. ];\n    constructor(private toast: ToastService) {}\n\n    public rowOnClick(events: TableEvent): void {\n        this.toast.success('OnClick', events);\n    }\n\n    public rowDblClick(events: TableEvent): void {\n        this.toast.success('DblClick', events);\n    }\n\n  }\n\n"),a.Wb(),a.Wb(),a.Kc(71,"\n    "),a.Wb(),a.Kc(72,"\n"),a.Wb(),a.Kc(73,"\n")),2&e){const e=a.yc(31),t=a.yc(52);a.Eb(30),a.qc("source",n.data),a.Eb(10),a.qc("ngForOf",e.modelColumnKeys),a.Eb(11),a.qc("source",n.data),a.Eb(10),a.qc("ngForOf",t.modelColumnKeys)}},directives:[r.a,s.a,b.a,m.a,d.a,c.l,u.a],encapsulation:2,changeDetection:0}),e})(),C=(()=>{class e{}return e.\u0275mod=a.Ob({type:e}),e.\u0275inj=a.Nb({factory:function(n){return new(n||e)},imports:[[c.b,i.a,o.a,l.b.forChild([{path:"",component:v}])]]}),e})()}}]);