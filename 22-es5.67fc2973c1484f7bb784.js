!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var c=0;c<n.length;c++){var t=n[c];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{bQGT:function(c,t,l){"use strict";l.r(t),l.d(t,"SampleThirdModule",function(){return V});var o=l("An66"),i=l("1VvW"),a=l("5Q2+"),r=l("zMYQ"),s=l("umqh"),u=l("kZht"),d=l("mcff"),g=l("aJOL"),m=l("hCLc"),h=l("WGpx"),p=l("UDV5");function f(e,n){if(1&e&&(u.kc(0,"span"),u.Vc(1),u.jc()),2&e){u.wc();var c=u.Lc(15);u.Rb(1),u.Yc(" (",null==c.source?null:c.source.length,"x",null==c.displayedColumns?null:c.displayedColumns.length,")")}}function b(e,n){if(1&e){var c=u.mc();u.Vc(0,"\n            "),u.kc(1,"mat-checkbox",10),u.sc("change",function(){u.Mc(c);var e=u.wc();return u.Lc(15).selection.toggleAll(e.data)}),u.jc(),u.Vc(2,"\n        ")}if(2&e){u.wc();var t=u.Lc(15);u.Rb(1),u.Dc("indeterminate",t.selectionModel.isIndeterminate)("checked",t.selectionModel.isAll)}}function k(e,n){if(1&e){var c=u.mc();u.Vc(0,"\n            "),u.kc(1,"mat-checkbox",11),u.sc("change",function(){u.Mc(c);var e=n.$implicit;return u.wc(),u.Lc(15).selection.toggle(e)}),u.jc(),u.Vc(2,"\n        ")}if(2&e){var t=n.$implicit;u.wc();var l=u.Lc(15);u.Rb(1),u.Dc("checked",l.selectionModel.get(t.id))}}function y(e,n){1&e&&u.fc(0,"ngx-column",12),2&e&&u.Dc("key",n.$implicit)}var w,x,v=((x=function(){function c(n,t){e(this,c),this.dialog=n,this.cd=t,this.data=[]}var t,l,o;return t=c,(l=[{key:"ngOnInit",value:function(){var e=this;r.a.generator(1e3,59).then(function(n){e.data=n,e.cd.detectChanges()})}},{key:"disableFn",value:function(e){return e.id%5==0}},{key:"ngAfterViewInit",value:function(){document.querySelectorAll("pre code").forEach(function(e){hljs.highlightBlock(e)})}},{key:"showSample",value:function(){this.dialog.open(s.a,{data:{title:"Overview selection table",description:"In order to use the API for string highlighting, you can use the table.selection service. <br>In more detail you can read in the guide.",code:'\n<ngx-table-builder #table [source]="data" enable-selection>\n    <ngx-column key="selection" sticky width="55" custom-key>\n        <ng-template ngx-th>\n            <mat-checkbox\n                (change)="table.selection.toggleAll(data)"\n                [indeterminate]="table.selectionModel.isIndeterminate"\n                [checked]="table.selectionModel.isAll"\n            ></mat-checkbox>\n        </ng-template>\n        <ng-template ngx-td row let-row (onClick)="$event.preventDefault()">\n            <mat-checkbox\n                [checked]="table.selectionModel.get($any(row).id)"\n                (change)="table.selection.toggle(row)"\n            ></mat-checkbox>\n        </ng-template>\n    </ngx-column>\n\n    <ngx-column *ngFor="let key of table.modelColumnKeys" [key]="key">\n       \x3c!--\n        If you want to parameterize your templates, you can describe the code here.\n        <ng-template ngx-th>{{ key }}</ng-template>\n        <ng-template ngx-td let-cell>{{ cell }}</ng-template>\n       --\x3e\n    </ngx-column>\n</ngx-table-builder>\n                    '},height:"650px",width:"900px"})}}])&&n(t.prototype,l),o&&n(t,o),c}()).\u0275fac=function(e){return new(e||x)(u.dc(d.b),u.dc(u.i))},x.\u0275cmp=u.Xb({type:x,selectors:[["sample-third"]],decls:27,vars:5,consts:[[1,"simple-toolbar"],[4,"ngIf"],[2,"margin-left","5px"],["mat-raised-button","",1,"show-simple",3,"click"],["enable-selection","",3,"source","produce-disable-fn"],["table",""],["key","selection","sticky","","width","55","custom-key",""],["ngx-th",""],["ngx-td","","row","",3,"onClick"],[3,"key",4,"ngFor","ngForOf"],[3,"indeterminate","checked","change"],[3,"checked","change"],[3,"key"]],template:function(e,n){if(1&e&&(u.kc(0,"mat-toolbar",0),u.Vc(1,"\n    "),u.kc(2,"span"),u.Vc(3,"\n        Example selection\n        "),u.Tc(4,f,2,2,"span",1),u.Vc(5,"\n        "),u.kc(6,"span",2),u.Vc(7),u.jc(),u.Vc(8,"\n    "),u.jc(),u.Vc(9,"\n    "),u.kc(10,"button",3),u.sc("click",function(){return n.showSample()}),u.Vc(11,"show code sample"),u.jc(),u.Vc(12,"\n"),u.jc(),u.Vc(13,"\n\n"),u.kc(14,"ngx-table-builder",4,5),u.Vc(16,"\n    "),u.kc(17,"ngx-column",6),u.Vc(18,"\n        "),u.Tc(19,b,3,2,"ng-template",7),u.Vc(20,"\n        "),u.Tc(21,k,3,1,"ng-template",8),u.sc("onClick",function(e){return e.preventDefault()}),u.Vc(22,"\n    "),u.jc(),u.Vc(23,"\n\n    "),u.Tc(24,y,1,1,"ngx-column",9),u.Vc(25,"\n"),u.jc(),u.Vc(26,"\n")),2&e){var c=u.Lc(15);u.Rb(4),u.Dc("ngIf",c.isRendered),u.Rb(3),u.Xc("Selected: ",c.selection.selectionModel.size,""),u.Rb(7),u.Dc("source",n.data)("produce-disable-fn",n.disableFn),u.Rb(10),u.Dc("ngForOf",c.modelColumnKeys)}},directives:[g.a,o.m,m.a,h.m,h.a,h.q,h.p,o.l,p.a],encapsulation:2,changeDetection:0}),x),V=((w=function n(){e(this,n)}).\u0275mod=u.bc({type:w}),w.\u0275inj=u.ac({factory:function(e){return new(e||w)},imports:[[o.b,a.a,i.b.forChild([{path:"",component:v}])]]}),w)}}])}();