!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var c=n[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{bQGT:function(t,c,o){"use strict";o.r(c),o.d(c,"SampleThirdModule",function(){return V});var l=o("An66"),i=o("1VvW"),a=o("5Q2+"),r=o("zMYQ"),s=o("umqh"),u=o("kZht"),d=o("mcff"),b=o("aJOL"),h=o("hCLc"),g=o("1ZKX"),m=o("BL99"),f=o("ctyY"),p=o("j5U8"),k=o("UDV5");function y(e,n){if(1&e&&(u.Vb(0,"span"),u.Gc(1),u.Ub()),2&e){u.hc();var t=u.wc(15);u.Cb(1),u.Jc(" (",null==t.source?null:t.source.length,"x",null==t.displayedColumns?null:t.displayedColumns.length,")")}}function w(e,n){if(1&e){var t=u.Xb();u.Gc(0,"\n            "),u.Vb(1,"mat-checkbox",10),u.dc("change",function(){u.xc(t);var e=u.hc();return u.wc(15).selection.toggleAll(e.data)}),u.Ub(),u.Gc(2,"\n        ")}if(2&e){u.hc();var c=u.wc(15);u.Cb(1),u.oc("indeterminate",c.selectionModel.isIndeterminate)("checked",c.selectionModel.isAll)}}function x(e,n){if(1&e){var t=u.Xb();u.Gc(0,"\n            "),u.Vb(1,"mat-checkbox",11),u.dc("change",function(){u.xc(t);var e=n.$implicit;return u.hc(),u.wc(15).selection.toggle(e)}),u.Ub(),u.Gc(2,"\n        ")}if(2&e){var c=n.$implicit;u.hc();var o=u.wc(15);u.Cb(1),u.oc("checked",o.selectionModel.get(c.id))}}function v(e,n){1&e&&u.Qb(0,"ngx-column",12),2&e&&u.oc("key",n.$implicit)}var G,C,I=((C=function(){function t(n,c){e(this,t),this.dialog=n,this.cd=c,this.data=[]}var c,o,l;return c=t,(o=[{key:"ngOnInit",value:function(){var e=this;r.a.generator(1e3,59).then(function(n){e.data=n,e.cd.detectChanges()})}},{key:"disableFn",value:function(e){return(null==e?void 0:e.id)%5==0}},{key:"ngAfterViewInit",value:function(){document.querySelectorAll("pre code").forEach(function(e){hljs.highlightBlock(e)})}},{key:"showSample",value:function(){this.dialog.open(s.a,{data:{title:"Overview selection table",description:"In order to use the API for string highlighting, you can use the table.selection service. <br>In more detail you can read in the guide.",code:'\n<ngx-table-builder #table [source]="data" enable-selection>\n    <ngx-column key="selection" sticky width="55" custom-key>\n        <ng-template ngx-th>\n            <mat-checkbox\n                (change)="table.selection.toggleAll(data)"\n                [indeterminate]="table.selectionModel.isIndeterminate"\n                [checked]="table.selectionModel.isAll"\n            ></mat-checkbox>\n        </ng-template>\n        <ng-template ngx-td row let-row (onClick)="$event.preventDefault()">\n            <mat-checkbox\n                [checked]="table.selectionModel.get($any(row).id)"\n                (change)="table.selection.toggle(row)"\n            ></mat-checkbox>\n        </ng-template>\n    </ngx-column>\n\n    <ngx-column *ngFor="let key of table.modelColumnKeys" [key]="key">\n       \x3c!--\n        If you want to parameterize your templates, you can describe the code here.\n        <ng-template ngx-th>{{ key }}</ng-template>\n        <ng-template ngx-td let-cell>{{ cell }}</ng-template>\n       --\x3e\n    </ngx-column>\n</ngx-table-builder>\n                    '},height:"650px",width:"900px"})}}])&&n(c.prototype,o),l&&n(c,l),t}()).\u0275fac=function(e){return new(e||C)(u.Ob(d.b),u.Ob(u.h))},C.\u0275cmp=u.Ib({type:C,selectors:[["sample-third"]],decls:27,vars:5,consts:[[1,"simple-toolbar"],[4,"ngIf"],[2,"margin-left","5px"],["mat-raised-button","",1,"show-simple",3,"click"],["enable-selection","",3,"source","produce-disable-fn"],["table",""],["key","selection","sticky","","width","55","custom-key",""],["ngx-th",""],["ngx-td","","row","",3,"onClick"],[3,"key",4,"ngFor","ngForOf"],[3,"indeterminate","checked","change"],[3,"checked","change"],[3,"key"]],template:function(e,n){if(1&e&&(u.Vb(0,"mat-toolbar",0),u.Gc(1,"\n    "),u.Vb(2,"span"),u.Gc(3,"\n        Example selection\n        "),u.Ec(4,y,2,2,"span",1),u.Gc(5,"\n        "),u.Vb(6,"span",2),u.Gc(7),u.Ub(),u.Gc(8,"\n    "),u.Ub(),u.Gc(9,"\n    "),u.Vb(10,"button",3),u.dc("click",function(){return n.showSample()}),u.Gc(11,"show code sample"),u.Ub(),u.Gc(12,"\n"),u.Ub(),u.Gc(13,"\n\n"),u.Vb(14,"ngx-table-builder",4,5),u.Gc(16,"\n    "),u.Vb(17,"ngx-column",6),u.Gc(18,"\n        "),u.Ec(19,w,3,2,"ng-template",7),u.Gc(20,"\n        "),u.Ec(21,x,3,1,"ng-template",8),u.dc("onClick",function(e){return e.preventDefault()}),u.Gc(22,"\n    "),u.Ub(),u.Gc(23,"\n\n    "),u.Ec(24,v,1,1,"ngx-column",9),u.Gc(25,"\n"),u.Ub(),u.Gc(26,"\n")),2&e){var t=u.wc(15);u.Cb(4),u.oc("ngIf",t.isRendered),u.Cb(3),u.Ic("Selected: ",t.selection.selectionModel.size,""),u.Cb(7),u.oc("source",n.data)("produce-disable-fn",n.disableFn),u.Cb(10),u.oc("ngForOf",t.modelColumnKeys)}},directives:[b.a,l.m,h.a,g.a,m.a,f.a,p.a,l.l,k.a],encapsulation:2,changeDetection:0}),C),V=((G=function n(){e(this,n)}).\u0275mod=u.Mb({type:G}),G.\u0275inj=u.Lb({factory:function(e){return new(e||G)},imports:[[l.b,a.a,i.b.forChild([{path:"",component:I}])]]}),G)}}])}();