(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{bQGT:function(e,n,t){"use strict";t.r(n),t.d(n,"SampleThirdModule",function(){return v});var c=t("An66"),o=t("1VvW"),l=t("5Q2+"),i=t("zMYQ"),a=t("umqh"),r=t("kZht"),s=t("mcff"),d=t("aJOL"),u=t("hCLc"),b=t("1ZKX"),h=t("BL99"),g=t("ctyY"),m=t("j5U8"),p=t("UDV5");function f(e,n){if(1&e&&(r.Vb(0,"span"),r.Gc(1),r.Ub()),2&e){r.hc();var t=r.wc(15);r.Cb(1),r.Jc(" (",null==t.source?null:t.source.length,"x",null==t.displayedColumns?null:t.displayedColumns.length,")")}}function k(e,n){if(1&e){var t=r.Xb();r.Gc(0,"\n            "),r.Vb(1,"mat-checkbox",10),r.dc("change",function(){r.xc(t);var e=r.hc();return r.wc(15).selection.toggleAll(e.data)}),r.Ub(),r.Gc(2,"\n        ")}if(2&e){r.hc();var c=r.wc(15);r.Cb(1),r.oc("indeterminate",c.selectionModel.isIndeterminate)("checked",c.selectionModel.isAll)}}function y(e,n){if(1&e){var t=r.Xb();r.Gc(0,"\n            "),r.Vb(1,"mat-checkbox",11),r.dc("change",function(){r.xc(t);var e=n.$implicit;return r.hc(),r.wc(15).selection.toggle(e)}),r.Ub(),r.Gc(2,"\n        ")}if(2&e){var c=n.$implicit;r.hc();var o=r.wc(15);r.Cb(1),r.oc("checked",o.selectionModel.get(c.id))}}function x(e,n){1&e&&r.Qb(0,"ngx-column",12),2&e&&r.oc("key",n.$implicit)}var w=function(){function e(e,n){this.dialog=e,this.cd=n,this.data=[]}return e.prototype.ngOnInit=function(){var e=this;i.a.generator(1e3,59).then(function(n){e.data=n,e.cd.detectChanges()})},e.prototype.disableFn=function(e){return(null==e?void 0:e.id)%5==0},e.prototype.ngAfterViewInit=function(){document.querySelectorAll("pre code").forEach(function(e){hljs.highlightBlock(e)})},e.prototype.showSample=function(){this.dialog.open(a.a,{data:{title:"Overview selection table",description:"In order to use the API for string highlighting, you can use the table.selection service. <br>In more detail you can read in the guide.",code:'\n<ngx-table-builder #table [source]="data" enable-selection>\n    <ngx-column key="selection" sticky width="55" custom-key>\n        <ng-template ngx-th>\n            <mat-checkbox\n                (change)="table.selection.toggleAll(data)"\n                [indeterminate]="table.selectionModel.isIndeterminate"\n                [checked]="table.selectionModel.isAll"\n            ></mat-checkbox>\n        </ng-template>\n        <ng-template ngx-td row let-row (onClick)="$event.preventDefault()">\n            <mat-checkbox\n                [checked]="table.selectionModel.get($any(row).id)"\n                (change)="table.selection.toggle(row)"\n            ></mat-checkbox>\n        </ng-template>\n    </ngx-column>\n\n    <ngx-column *ngFor="let key of table.modelColumnKeys" [key]="key">\n       \x3c!--\n        If you want to parameterize your templates, you can describe the code here.\n        <ng-template ngx-th>{{ key }}</ng-template>\n        <ng-template ngx-td let-cell>{{ cell }}</ng-template>\n       --\x3e\n    </ngx-column>\n</ngx-table-builder>\n                    '},height:"650px",width:"900px"})},e.\u0275fac=function(n){return new(n||e)(r.Ob(s.b),r.Ob(r.h))},e.\u0275cmp=r.Ib({type:e,selectors:[["sample-third"]],decls:27,vars:5,consts:[[1,"simple-toolbar"],[4,"ngIf"],[2,"margin-left","5px"],["mat-raised-button","",1,"show-simple",3,"click"],["enable-selection","",3,"source","produce-disable-fn"],["table",""],["key","selection","sticky","","width","55","custom-key",""],["ngx-th",""],["ngx-td","","row","",3,"onClick"],[3,"key",4,"ngFor","ngForOf"],[3,"indeterminate","checked","change"],[3,"checked","change"],[3,"key"]],template:function(e,n){if(1&e&&(r.Vb(0,"mat-toolbar",0),r.Gc(1,"\n    "),r.Vb(2,"span"),r.Gc(3,"\n        Example selection\n        "),r.Ec(4,f,2,2,"span",1),r.Gc(5,"\n        "),r.Vb(6,"span",2),r.Gc(7),r.Ub(),r.Gc(8,"\n    "),r.Ub(),r.Gc(9,"\n    "),r.Vb(10,"button",3),r.dc("click",function(){return n.showSample()}),r.Gc(11,"show code sample"),r.Ub(),r.Gc(12,"\n"),r.Ub(),r.Gc(13,"\n\n"),r.Vb(14,"ngx-table-builder",4,5),r.Gc(16,"\n    "),r.Vb(17,"ngx-column",6),r.Gc(18,"\n        "),r.Ec(19,k,3,2,"ng-template",7),r.Gc(20,"\n        "),r.Ec(21,y,3,1,"ng-template",8),r.dc("onClick",function(e){return e.preventDefault()}),r.Gc(22,"\n    "),r.Ub(),r.Gc(23,"\n\n    "),r.Ec(24,x,1,1,"ngx-column",9),r.Gc(25,"\n"),r.Ub(),r.Gc(26,"\n")),2&e){var t=r.wc(15);r.Cb(4),r.oc("ngIf",t.isRendered),r.Cb(3),r.Ic("Selected: ",t.selection.selectionModel.size,""),r.Cb(7),r.oc("source",n.data)("produce-disable-fn",n.disableFn),r.Cb(10),r.oc("ngForOf",t.modelColumnKeys)}},directives:[d.a,c.m,u.a,b.a,h.a,g.a,m.a,c.l,p.a],encapsulation:2,changeDetection:0}),e}(),v=function(){function e(){}return e.\u0275mod=r.Mb({type:e}),e.\u0275inj=r.Lb({factory:function(n){return new(n||e)},imports:[[c.b,l.a,o.b.forChild([{path:"",component:w}])]]}),e}()}}]);