(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{hQ7L:function(e,t,n){"use strict";n.r(t),n.d(t,"SampleFourteenModule",function(){return z});var c=n("An66"),l=n("1VvW"),a=n("5Q2+"),i=n("b5Xb"),o=n("zMYQ"),r=n("umqh"),b=n("kZht"),s=n("mcff"),f=n("aJOL"),u=n("hCLc"),p=n("1ZKX"),m=n("oTne"),d=n("QAKa"),g=n("25ch");let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=b.Ib({type:e,selectors:[["not-found"]],decls:2,vars:0,template:function(e,t){1&e&&(b.Vb(0,"b"),b.Gc(1,"Not found"),b.Ub())},encapsulation:2,changeDetection:0}),e})();var G=n("Psfq"),y=n("EmXI"),v=n("Tcl6"),x=n("3kIJ"),k=n("ydE+"),V=n("IOEv"),U=n("BL99"),w=n("ctyY"),C=n("j5U8"),F=n("xwis"),I=n("pTnX");function M(e,t){if(1&e&&(b.Vb(0,"mat-option",6),b.Gc(1),b.Ub()),2&e){const e=t.$implicit;b.oc("value",e.value),b.Cb(1),b.Ic("\n                ",e.key,"\n            ")}}let E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=b.Ib({type:e,selectors:[["context-menu-sample"]],inputs:{table:"table",state:"state"},decls:27,vars:8,consts:[[1,"my-filter"],["appearance","outline"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],["matInput","","name","width","autocomplete","off",3,"ngModel","ngModelChange"],["matSuffix",""],[3,"value"]],template:function(e,t){1&e&&(b.Vb(0,"div",0),b.Gc(1,"\n    "),b.Vb(2,"mat-form-field",1),b.Gc(3,"\n        "),b.Vb(4,"mat-label"),b.Gc(5,"Find options"),b.Ub(),b.Gc(6,"\n        "),b.Vb(7,"mat-select",2),b.dc("valueChange",function(e){return t.table.filterable.updateFilterTypeBy(e,t.state.key),t.table.filter()}),b.Gc(8,"\n            "),b.Ec(9,M,2,2,"mat-option",3),b.ic(10,"keyvalue"),b.Gc(11,"\n        "),b.Ub(),b.Gc(12,"\n    "),b.Ub(),b.Gc(13,"\n\n    "),b.Vb(14,"mat-form-field",1),b.Gc(15,"\n        "),b.Vb(16,"mat-label"),b.Gc(17),b.ic(18,"uppercase"),b.Ub(),b.Gc(19,"\n        "),b.Vb(20,"input",4),b.dc("ngModelChange",function(e){return t.table.filterable.updateFilterValueBy(e,t.state.key),t.table.filter()}),b.Ub(),b.Gc(21,"\n        "),b.Vb(22,"mat-icon",5),b.Gc(23,"search"),b.Ub(),b.Gc(24,"\n    "),b.Ub(),b.Gc(25,"\n"),b.Ub(),b.Gc(26,"\n")),2&e&&(b.Cb(7),b.oc("value",t.table.filterable.filterTypeDefinition[t.state.key]),b.Cb(2),b.oc("ngForOf",b.jc(10,4,t.table.filterable.types)),b.Cb(8),b.Ic("Filter by ",b.jc(18,6,t.state.key),""),b.Cb(3),b.oc("ngModel",t.table.filterable.definition[t.state.key]))},directives:[y.b,y.e,V.a,c.l,v.a,x.b,x.k,x.n,k.a,y.f,I.i],pipes:[c.g,c.v],encapsulation:2,changeDetection:0}),e})();var O=n("cxIm"),Q=n("UDV5"),T=n("aw6g");const $=["table"];function _(e,t){if(1&e&&(b.Vb(0,"mat-option",23),b.Gc(1),b.Ub()),2&e){const e=t.$implicit;b.oc("value",e.value),b.Cb(1),b.Ic("\n                        ",e.key,"\n                    ")}}function A(e,t){if(1&e){const e=b.Xb();b.Gc(0,"\n            "),b.Vb(1,"mat-checkbox",24),b.dc("change",function(){b.xc(e);const t=b.hc();return b.wc(19).selection.toggleAll(t.data)}),b.Ub(),b.Gc(2,"\n        ")}if(2&e){b.hc();const e=b.wc(19);b.Cb(1),b.oc("indeterminate",e.selectionModel.isIndeterminate)("checked",e.selectionModel.isAll)}}function D(e,t){if(1&e){const e=b.Xb();b.Gc(0,"\n            "),b.Vb(1,"mat-checkbox",25),b.dc("change",function(){b.xc(e);const n=t.$implicit;return b.hc(),b.wc(19).selection.toggle(n)}),b.Ub(),b.Gc(2,"\n        ")}if(2&e){const e=t.$implicit;b.hc();const n=b.wc(19);b.Cb(1),b.oc("checked",n.selectionModel.get(e.id))}}function S(e,t){if(1&e&&(b.Gc(0,"\n            "),b.Vb(1,"a",28),b.Gc(2,"\n                "),b.Qb(3,"ngx-filter-viewer",29),b.Gc(4,"\n            "),b.Ub(),b.Gc(5,"\n        ")),2&e){const e=t.$implicit,n=b.hc().$implicit;b.Cb(3),b.oc("key",n)("text",e)}}function j(e,t){1&e&&(b.Vb(0,"ngx-column",26),b.Gc(1,"\n        "),b.Ec(2,S,6,2,"ng-template",27),b.Gc(3,"\n    "),b.Ub()),2&e&&(b.oc("key",t.$implicit),b.Cb(2),b.oc("nowrap",!1))}function L(e,t){1&e&&(b.Gc(0,"\n            "),b.Vb(1,"mat-icon"),b.Gc(2,"all_inbox"),b.Ub(),b.Gc(3,"\n        "))}const X=function(){return["my-filter"]};let B=(()=>{class e{constructor(e,t){this.dialog=e,this.cd=t,this.data=[]}ngOnInit(){o.a.generator(100,59).then(e=>{this.data=e,this.cd.detectChanges()})}ngAfterViewInit(){document.querySelectorAll("pre code").forEach(e=>{hljs.highlightBlock(e)})}clearFilter(){this.table.filterable.reset()}filterFromFifth(){this.table.filterable.setDefinition([{key:"id",type:i.c.MORE_OR_EQUAL,value:5}]),this.table.filter()}showSample(){this.dialog.open(r.a,{data:{title:"Overview selection table",description:"In order to use the API for string highlighting, you can use the table.selection service. <br>In more detail you can read in the guide.",code:'\n    <ngx-filter #filter>\n        <div class="my-filter">\n            <mat-form-field appearance="outline">\n                <mat-label>Find options</mat-label>\n                <mat-select\n                    [value]="table.filterable.filterTypeDefinition[filter.state.key!]"\n                    (valueChange)="table.filterable.updateFilterTypeBy($event, filter.state.key); table.filter()"\n                >\n                    <mat-option *ngFor="let type of table.filterable.types | keyvalue" [value]="type.value">\n                        {{ type.key }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n\n            <mat-form-field appearance="outline">\n                <mat-label>Filter by {{ filter.state.key! | uppercase }}</mat-label>\n                <input\n                    matInput\n                    name="width"\n                    autocomplete="off"\n                    [ngModel]="table.filterable.definition[filter.state.key!]"\n                    (ngModelChange)="table.filterable.updateFilterValueBy($event, filter.state.key); table.filter()"\n                />\n                <mat-icon matSuffix>search</mat-icon>\n            </mat-form-field>\n        </div>\n    </ngx-filter>\n                    '},height:"650px",width:"900px"})}}return e.\u0275fac=function(t){return new(t||e)(b.Ob(s.b),b.Ob(b.h))},e.\u0275cmp=b.Ib({type:e,selectors:[["sample-fourteen"]],viewQuery:function(e,t){if(1&e&&b.Kc($,1),2&e){let e;b.vc(e=b.ec())&&(t.table=e.first)}},decls:88,vars:15,consts:[[1,"simple-toolbar"],[1,"show-simple"],["mat-raised-button","",3,"click"],["enable-filtering","","enable-selection","",1,"filter-example",3,"source","row-height"],["table",""],["is-sortable","","is-filterable","","is-draggable","","is-resizable",""],["height","65",3,"css-class"],[1,"filter-form"],["appearance","outline"],["matInput","","name","width","autocomplete","off",3,"ngModel","ngModelChange"],["matSuffix",""],["appearance","outline",1,"filter-options"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],["key","selection","sticky","","width","55","custom-key",""],["ngx-th",""],["ngx-td","","row","",3,"onClick"],[3,"key",4,"ngFor","ngForOf"],["custom-key","","key","action","sticky-end","","width","50","empty-head",""],["ngx-td",""],["filter",""],[3,"state","table"],[2,"padding","3px 0 0 20px"],[3,"value"],[3,"indeterminate","checked","change"],[3,"checked","change"],[3,"key"],["ngx-td","",3,"nowrap"],["onclick","javascript:void(0)"],[3,"key","text"]],template:function(e,t){if(1&e){const e=b.Xb();b.Vb(0,"mat-toolbar",0),b.Gc(1,"\n    "),b.Vb(2,"span"),b.Gc(3),b.Ub(),b.Gc(4,"\n    "),b.Vb(5,"div",1),b.Gc(6,"\n        "),b.Vb(7,"button",2),b.dc("click",function(){return t.filterFromFifth()}),b.Gc(8,"filter from fifth"),b.Ub(),b.Gc(9,"\n        "),b.Vb(10,"button",2),b.dc("click",function(){return t.clearFilter()}),b.Gc(11,"clear filter"),b.Ub(),b.Gc(12,"\n        "),b.Vb(13,"button",2),b.dc("click",function(){return t.showSample()}),b.Gc(14,"show code sample"),b.Ub(),b.Gc(15,"\n    "),b.Ub(),b.Gc(16,"\n"),b.Ub(),b.Gc(17,"\n\n"),b.Vb(18,"ngx-table-builder",3,4),b.Gc(20,"\n    "),b.Qb(21,"ngx-options",5),b.Gc(22,"\n    "),b.Vb(23,"ngx-source-null"),b.Gc(24,"Loading..."),b.Ub(),b.Gc(25,"\n    "),b.Vb(26,"ngx-empty"),b.Qb(27,"not-found"),b.Ub(),b.Gc(28,"\n\n    "),b.Vb(29,"ngx-header",6),b.Gc(30,"\n        "),b.Vb(31,"div",7),b.Gc(32,"\n            "),b.Vb(33,"mat-form-field",8),b.Gc(34,"\n                "),b.Vb(35,"mat-label"),b.Gc(36,"Filter"),b.Ub(),b.Gc(37,"\n                "),b.Vb(38,"input",9),b.dc("ngModelChange",function(){return b.xc(e),b.wc(19).filter()})("ngModelChange",function(t){return b.xc(e),b.wc(19).filterable.filterValue=t}),b.Ub(),b.Gc(39,"\n                "),b.Vb(40,"mat-icon",10),b.Gc(41,"search"),b.Ub(),b.Gc(42,"\n            "),b.Ub(),b.Gc(43,"\n\n            "),b.Vb(44,"mat-form-field",11),b.Gc(45,"\n                "),b.Vb(46,"mat-label"),b.Gc(47,"Find options"),b.Ub(),b.Gc(48,"\n                "),b.Vb(49,"mat-select",12),b.dc("valueChange",function(t){return b.xc(e),b.wc(19).filterable.filterType=t})("valueChange",function(){return b.xc(e),b.wc(19).filter()}),b.Gc(50,"\n                    "),b.Ec(51,_,2,2,"mat-option",13),b.ic(52,"keyvalue"),b.Gc(53,"\n                "),b.Ub(),b.Gc(54,"\n            "),b.Ub(),b.Gc(55,"\n        "),b.Ub(),b.Gc(56,"\n    "),b.Ub(),b.Gc(57,"\n\n    "),b.Vb(58,"ngx-column",14),b.Gc(59,"\n        "),b.Ec(60,A,3,2,"ng-template",15),b.Gc(61,"\n        "),b.Ec(62,D,3,1,"ng-template",16),b.dc("onClick",function(e){return e.preventDefault()}),b.Gc(63,"\n    "),b.Ub(),b.Gc(64,"\n\n    "),b.Ec(65,j,4,2,"ngx-column",17),b.Gc(66,"\n\n    "),b.Vb(67,"ngx-column",18),b.Gc(68,"\n        "),b.Ec(69,L,4,0,"ng-template",19),b.Gc(70,"\n    "),b.Ub(),b.Gc(71,"\n\n    "),b.Vb(72,"ngx-filter",null,20),b.Gc(74,"\n        "),b.Qb(75,"context-menu-sample",21),b.Gc(76,"\n    "),b.Ub(),b.Gc(77,"\n\n    "),b.Vb(78,"ngx-footer"),b.Gc(79,"\n        "),b.Vb(80,"p",22),b.Gc(81,"\n            "),b.Vb(82,"b"),b.Gc(83,"Size"),b.Ub(),b.Gc(84),b.Ub(),b.Gc(85,"\n    "),b.Ub(),b.Gc(86,"\n"),b.Ub(),b.Gc(87,"\n")}if(2&e){const e=b.wc(19),n=b.wc(73);b.Cb(3),b.Ic("Example filters (",null==e?null:e.size,")"),b.Cb(15),b.oc("source",t.data)("row-height",40),b.Cb(11),b.oc("css-class",b.qc(14,X)),b.Cb(9),b.oc("ngModel",e.filterable.filterValue),b.Cb(11),b.oc("value",e.filterable.filterType),b.Cb(2),b.oc("ngForOf",b.jc(52,12,e.filterable.types)),b.Cb(14),b.oc("ngForOf",e.modelColumnKeys),b.Cb(10),b.oc("state",n.state)("table",e),b.Cb(9),b.Jc(": ",null==e.source?null:e.source.length," x ",null==e||null==e.displayedColumns?null:e.displayedColumns.length,"\n        ")}},directives:[f.a,u.a,p.a,m.a,d.a,g.a,h,G.a,y.b,y.e,v.a,x.b,x.k,x.n,k.a,y.f,V.a,c.l,U.a,w.a,C.a,F.a,E,O.a,I.i,Q.a,T.a],pipes:[c.g],styles:["\n            .filter-example .table-grid__column {\n                text-transform: uppercase;\n            }\n\n            .filter-example .table-grid__cell > * {\n                font-size: 12px;\n            }\n\n            .filter-example .table-grid__header-cell {\n                min-height: 50px;\n                max-height: 50px;\n            }\n        "],encapsulation:2,changeDetection:0}),e})(),z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b.Mb({type:e}),e.\u0275inj=b.Lb({imports:[[c.b,a.a,l.b.forChild([{path:"",component:B}])]]}),e})()}}]);