(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{ikNa:function(n,e,c){"use strict";c.r(e),c.d(e,"SampleNightModule",function(){return S});var t=c("An66"),i=c("1VvW"),l=c("5Q2+"),a=c("kZht"),o=c("mcff"),r=c("zMYQ"),b=c("umqh"),u=c("aJOL"),d=c("UDV5"),s=c("3kIJ"),f=c("hCLc"),g=c("WGpx"),m=c("EmXI"),p=c("Tcl6"),G=c("ydE+"),h=c("IOEv"),v=c("pTnX");function x(n,e){if(1&n&&(a.Vb(0,"mat-option",19),a.Gc(1),a.Ub()),2&n){const n=e.$implicit;a.oc("value",n.value),a.Cb(1),a.Ic("\n                                ",n.key,"\n                            ")}}function V(n,e){if(1&n&&a.Gc(0),2&n){const n=a.hc().$implicit;a.Hc(n)}}function C(n,e){1&n&&a.Gc(0),2&n&&a.Hc(e.$implicit)}function w(n,e){1&n&&(a.Vb(0,"ngx-column"),a.Gc(1,"\n                "),a.Ec(2,V,1,1,"ng-template",20),a.Gc(3,"\n                "),a.Ec(4,C,1,1,"ng-template",21),a.Gc(5,"\n            "),a.Ub())}function U(n,e){if(1&n&&(a.Vb(0,"mat-option",19),a.Gc(1),a.Ub()),2&n){const n=e.$implicit;a.oc("value",n.value),a.Cb(1),a.Ic("\n                                ",n.key,"\n                            ")}}function y(n,e){if(1&n&&a.Gc(0),2&n){const n=a.hc().$implicit;a.Hc(n)}}function k(n,e){1&n&&a.Gc(0),2&n&&a.Hc(e.$implicit)}function F(n,e){1&n&&(a.Vb(0,"ngx-column"),a.Gc(1,"\n                "),a.Ec(2,y,1,1,"ng-template",20),a.Gc(3,"\n                "),a.Ec(4,k,1,1,"ng-template",21),a.Gc(5,"\n            "),a.Ub())}const M=function(){return["my-filter"]};let E=(()=>{class n{constructor(n,e){this.cd=n,this.dataFirst=[],this.dataSecond=[],this.nativeScrollbar=!1,this.dialog=e.get(o.b),this.ngZone=e.get(a.B)}ngOnInit(){Promise.all([r.a.generator(11,30),r.a.generator(1e4,30)]).then(([n,e])=>{this.dataFirst=n,this.dataSecond=e,this.cd.detectChanges()})}ngAfterViewInit(){document.querySelectorAll("pre code").forEach(n=>{hljs.highlightBlock(n)})}update(){this.ngZone.runOutsideAngular(()=>{setTimeout(()=>{this.cd.detectChanges()})})}showSample(){this.dialog.open(b.a,{data:{title:"Custom layout",description:"Automatic height calculation",code:'\n<style>\n    #main-column {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        height: calc(100% - 100px);\n    }\n\n    #widget1,\n    #widget2 {\n        flex: 1;\n        flex-shrink: 0;\n        overflow: auto;\n        margin: 5px;\n    }\n</style>\n\n<div id="main-column">\n    <div id="widget1">\n        <ngx-table-builder [source]="data"></ngx-table-builder>\n    </div>\n    <div id="widget2">\n        <ngx-table-builder [source]="data"></ngx-table-builder>\n    </div>\n</div>\n\n                    '},height:"750px",width:"700px"})}}return n.\u0275fac=function(e){return new(e||n)(a.Ob(a.h),a.Ob(a.t))},n.\u0275cmp=a.Ib({type:n,selectors:[["sample-night"]],decls:95,vars:21,consts:[[1,"simple-toolbar"],[1,"mat-checkbox-flat",2,"margin-left","10px",3,"ngModel","ngModelChange","change"],["mat-raised-button","",1,"show-simple",3,"click"],["id","main-column"],["id","widget1"],["enable-filtering","",3,"source","native-scrollbar"],["table1",""],["height","65",3,"css-class"],[1,"filter-form"],["appearance","outline"],["matInput","","name","width","autocomplete","off",3,"ngModel","ngModelChange"],["matSuffix",""],["appearance","outline",1,"filter-options"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],["is-draggable",""],[4,"ngFor","ngForOf"],["id","widget2"],["table2",""],[3,"value"],["ngx-th",""],["ngx-td",""]],template:function(n,e){if(1&n){const n=a.Xb();a.Vb(0,"mat-toolbar",0),a.Gc(1,"\n    "),a.Vb(2,"span"),a.Gc(3,"Example table in columns"),a.Ub(),a.Gc(4,"\n    "),a.Vb(5,"mat-checkbox",1),a.dc("ngModelChange",function(n){return e.nativeScrollbar=n})("change",function(){return e.update()}),a.Gc(6,"\n        Enable native scrollbar\n    "),a.Ub(),a.Gc(7,"\n\n    "),a.Vb(8,"button",2),a.dc("click",function(){return e.showSample()}),a.Gc(9,"show code sample"),a.Ub(),a.Gc(10,"\n"),a.Ub(),a.Gc(11,"\n\n"),a.Vb(12,"div",3),a.Gc(13,"\n    "),a.Vb(14,"div",4),a.Gc(15,"\n        "),a.Vb(16,"ngx-table-builder",5,6),a.Gc(18,"\n            "),a.Vb(19,"ngx-header",7),a.Gc(20,"\n                "),a.Vb(21,"div",8),a.Gc(22,"\n                    "),a.Vb(23,"mat-form-field",9),a.Gc(24,"\n                        "),a.Vb(25,"mat-label"),a.Gc(26,"Filter"),a.Ub(),a.Gc(27,"\n                        "),a.Vb(28,"input",10),a.dc("ngModelChange",function(e){return a.xc(n),a.wc(17).filterable.filterValue=e})("ngModelChange",function(){return a.xc(n),a.wc(17).filter()}),a.Ub(),a.Gc(29,"\n                        "),a.Vb(30,"mat-icon",11),a.Gc(31,"search"),a.Ub(),a.Gc(32,"\n                    "),a.Ub(),a.Gc(33,"\n\n                    "),a.Vb(34,"mat-form-field",12),a.Gc(35,"\n                        "),a.Vb(36,"mat-label"),a.Gc(37,"Find options"),a.Ub(),a.Gc(38,"\n                        "),a.Vb(39,"mat-select",13),a.dc("valueChange",function(e){return a.xc(n),a.wc(17).filterable.filterType=e})("valueChange",function(){return a.xc(n),a.wc(17).filter()}),a.Gc(40,"\n                            "),a.Ec(41,x,2,2,"mat-option",14),a.ic(42,"keyvalue"),a.Gc(43,"\n                        "),a.Ub(),a.Gc(44,"\n                    "),a.Ub(),a.Gc(45,"\n                "),a.Ub(),a.Gc(46,"\n            "),a.Ub(),a.Gc(47,"\n\n            "),a.Qb(48,"ngx-options",15),a.Gc(49,"\n            "),a.Ec(50,w,6,0,"ngx-column",16),a.Gc(51,"\n        "),a.Ub(),a.Gc(52,"\n    "),a.Ub(),a.Gc(53,"\n\n    "),a.Vb(54,"div",17),a.Gc(55,"\n        "),a.Vb(56,"ngx-table-builder",5,18),a.Gc(58,"\n            "),a.Vb(59,"ngx-header",7),a.Gc(60,"\n                "),a.Vb(61,"div",8),a.Gc(62,"\n                    "),a.Vb(63,"mat-form-field",9),a.Gc(64,"\n                        "),a.Vb(65,"mat-label"),a.Gc(66,"Filter"),a.Ub(),a.Gc(67,"\n                        "),a.Vb(68,"input",10),a.dc("ngModelChange",function(e){return a.xc(n),a.wc(57).filterable.filterValue=e})("ngModelChange",function(){return a.xc(n),a.wc(57).filter()}),a.Ub(),a.Gc(69,"\n                        "),a.Vb(70,"mat-icon",11),a.Gc(71,"search"),a.Ub(),a.Gc(72,"\n                    "),a.Ub(),a.Gc(73,"\n\n                    "),a.Vb(74,"mat-form-field",12),a.Gc(75,"\n                        "),a.Vb(76,"mat-label"),a.Gc(77,"Find options"),a.Ub(),a.Gc(78,"\n                        "),a.Vb(79,"mat-select",13),a.dc("valueChange",function(e){return a.xc(n),a.wc(57).filterable.filterType=e})("valueChange",function(){return a.xc(n),a.wc(57).filter()}),a.Gc(80,"\n                            "),a.Ec(81,U,2,2,"mat-option",14),a.ic(82,"keyvalue"),a.Gc(83,"\n                        "),a.Ub(),a.Gc(84,"\n                    "),a.Ub(),a.Gc(85,"\n                "),a.Ub(),a.Gc(86,"\n            "),a.Ub(),a.Gc(87,"\n\n            "),a.Qb(88,"ngx-options",15),a.Gc(89,"\n            "),a.Ec(90,F,6,0,"ngx-column",16),a.Gc(91,"\n        "),a.Ub(),a.Gc(92,"\n    "),a.Ub(),a.Gc(93,"\n"),a.Ub(),a.Gc(94,"\n")}if(2&n){const n=a.wc(17),c=a.wc(57);a.Cb(5),a.oc("ngModel",e.nativeScrollbar),a.Cb(11),a.oc("source",e.dataFirst)("native-scrollbar",e.nativeScrollbar),a.Cb(3),a.oc("css-class",a.qc(19,M)),a.Cb(9),a.oc("ngModel",n.filterable.filterValue),a.Cb(11),a.oc("value",n.filterable.filterType),a.Cb(2),a.oc("ngForOf",a.jc(42,15,n.filterable.types)),a.Cb(9),a.oc("ngForOf",n.modelColumnKeys),a.Cb(6),a.oc("source",e.dataSecond)("native-scrollbar",e.nativeScrollbar),a.Cb(3),a.oc("css-class",a.qc(20,M)),a.Cb(9),a.oc("ngModel",c.filterable.filterValue),a.Cb(11),a.oc("value",c.filterable.filterType),a.Cb(2),a.oc("ngForOf",a.jc(82,17,c.filterable.types)),a.Cb(9),a.oc("ngForOf",c.modelColumnKeys)}},directives:[u.a,d.a,s.k,s.n,f.a,g.m,g.h,m.b,m.e,p.a,s.b,G.a,m.f,h.a,t.l,g.j,v.h,g.a,g.q,g.p],pipes:[t.g],encapsulation:2,changeDetection:0}),n})(),S=(()=>{class n{}return n.\u0275mod=a.Mb({type:n}),n.\u0275inj=a.Lb({factory:function(e){return new(e||n)},imports:[[t.b,l.a,i.b.forChild([{path:"",component:E}])]]}),n})()}}]);