(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{bQGT:function(e,n,t){"use strict";t.r(n),t.d(n,"SampleThirdModule",function(){return w});var c=t("An66"),l=t("1VvW"),o=t("5Q2+"),i=t("zMYQ"),a=t("umqh"),s=t("kZht"),r=t("mcff"),d=t("aJOL"),b=t("hCLc"),u=t("1ZKX"),g=t("BL99"),h=t("ctyY"),m=t("j5U8"),p=t("UDV5");function f(e,n){if(1&e&&(s.Xb(0,"span"),s.Kc(1),s.Wb()),2&e){s.jc();const e=s.yc(15);s.Eb(1),s.Nc(" (",null==e.source?null:e.source.length,"x",null==e.displayedColumns?null:e.displayedColumns.length,")")}}function k(e,n){if(1&e){const e=s.Zb();s.Kc(0,"\n            "),s.Xb(1,"mat-checkbox",10),s.fc("change",function(){s.zc(e);const n=s.jc();return s.yc(15).selection.toggleAll(n.data)}),s.Wb(),s.Kc(2,"\n        ")}if(2&e){s.jc();const e=s.yc(15);s.Eb(1),s.qc("indeterminate",e.selectionModel.isIndeterminate)("checked",e.selectionModel.isAll)}}function y(e,n){if(1&e){const e=s.Zb();s.Kc(0,"\n            "),s.Xb(1,"mat-checkbox",11),s.fc("change",function(){s.zc(e);const t=n.$implicit;return s.jc(),s.yc(15).selection.toggle(t)}),s.Wb(),s.Kc(2,"\n        ")}if(2&e){const e=n.$implicit;s.jc();const t=s.yc(15);s.Eb(1),s.qc("checked",t.selectionModel.get(e.id))}}function x(e,n){1&e&&s.Sb(0,"ngx-column",12),2&e&&s.qc("key",n.$implicit)}let K=(()=>{class e{constructor(e,n){this.dialog=e,this.cd=n,this.data=[]}ngOnInit(){i.a.generator(1e3,59).then(e=>{this.data=e,this.cd.detectChanges()})}disableFn(e){return e.id%5==0}ngAfterViewInit(){document.querySelectorAll("pre code").forEach(e=>{hljs.highlightBlock(e)})}showSample(){this.dialog.open(a.a,{data:{title:"Overview selection table",description:"In order to use the API for string highlighting, you can use the table.selection service. <br>In more detail you can read in the guide.",code:'\n<ngx-table-builder #table [source]="data" enable-selection>\n    <ngx-column key="selection" sticky width="55" custom-key>\n        <ng-template ngx-th>\n            <mat-checkbox\n                (change)="table.selection.toggleAll(data)"\n                [indeterminate]="table.selectionModel.isIndeterminate"\n                [checked]="table.selectionModel.isAll"\n            ></mat-checkbox>\n        </ng-template>\n        <ng-template ngx-td row let-row (onClick)="$event.preventDefault()">\n            <mat-checkbox\n                [checked]="table.selectionModel.get($any(row).id)"\n                (change)="table.selection.toggle(row)"\n            ></mat-checkbox>\n        </ng-template>\n    </ngx-column>\n\n    <ngx-column *ngFor="let key of table.modelColumnKeys" [key]="key">\n       \x3c!--\n        If you want to parameterize your templates, you can describe the code here.\n        <ng-template ngx-th>{{ key }}</ng-template>\n        <ng-template ngx-td let-cell>{{ cell }}</ng-template>\n       --\x3e\n    </ngx-column>\n</ngx-table-builder>\n                    '},height:"650px",width:"900px"})}}return e.\u0275fac=function(n){return new(n||e)(s.Qb(r.b),s.Qb(s.h))},e.\u0275cmp=s.Kb({type:e,selectors:[["sample-third"]],decls:27,vars:5,consts:[[1,"simple-toolbar"],[4,"ngIf"],[2,"margin-left","5px"],["mat-raised-button","",1,"show-simple",3,"click"],["enable-selection","",3,"source","produce-disable-fn"],["table",""],["key","selection","sticky","","width","55","custom-key",""],["ngx-th",""],["ngx-td","","row","",3,"onClick"],[3,"key",4,"ngFor","ngForOf"],[3,"indeterminate","checked","change"],[3,"checked","change"],[3,"key"]],template:function(e,n){if(1&e&&(s.Xb(0,"mat-toolbar",0),s.Kc(1,"\n    "),s.Xb(2,"span"),s.Kc(3,"\n        Example selection\n        "),s.Ic(4,f,2,2,"span",1),s.Kc(5,"\n        "),s.Xb(6,"span",2),s.Kc(7),s.Wb(),s.Kc(8,"\n    "),s.Wb(),s.Kc(9,"\n    "),s.Xb(10,"button",3),s.fc("click",function(){return n.showSample()}),s.Kc(11,"show code sample"),s.Wb(),s.Kc(12,"\n"),s.Wb(),s.Kc(13,"\n\n"),s.Xb(14,"ngx-table-builder",4,5),s.Kc(16,"\n    "),s.Xb(17,"ngx-column",6),s.Kc(18,"\n        "),s.Ic(19,k,3,2,"ng-template",7),s.Kc(20,"\n        "),s.Ic(21,y,3,1,"ng-template",8),s.fc("onClick",function(e){return e.preventDefault()}),s.Kc(22,"\n    "),s.Wb(),s.Kc(23,"\n\n    "),s.Ic(24,x,1,1,"ngx-column",9),s.Kc(25,"\n"),s.Wb(),s.Kc(26,"\n")),2&e){const e=s.yc(15);s.Eb(4),s.qc("ngIf",e.isRendered),s.Eb(3),s.Mc("Selected: ",e.selection.selectionModel.size,""),s.Eb(7),s.qc("source",n.data)("produce-disable-fn",n.disableFn),s.Eb(10),s.qc("ngForOf",e.modelColumnKeys)}},directives:[d.a,c.m,b.a,u.a,g.a,h.a,m.a,c.l,p.a],encapsulation:2,changeDetection:0}),e})(),w=(()=>{class e{}return e.\u0275mod=s.Ob({type:e}),e.\u0275inj=s.Nb({factory:function(n){return new(n||e)},imports:[[c.b,o.a,l.b.forChild([{path:"",component:K}])]]}),e})()}}]);