(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{ikNa:function(n,e,c){"use strict";c.r(e),c.d(e,"SampleNightModule",function(){return j});var t=c("An66"),i=c("1VvW"),a=c("5Q2+"),l=c("kZht"),o=c("mcff"),r=c("zMYQ"),b=c("umqh"),u=c("aJOL"),s=c("UDV5"),d=c("3kIJ"),f=c("hCLc"),g=c("1ZKX"),m=c("Psfq"),G=c("EmXI"),p=c("Tcl6"),h=c("ydE+"),v=c("IOEv"),x=c("oTne"),V=c("pTnX"),C=c("BL99"),U=c("ctyY"),w=c("j5U8");function y(n,e){if(1&n&&(l.Vb(0,"mat-option",19),l.Gc(1),l.Ub()),2&n){const n=e.$implicit;l.oc("value",n.value),l.Cb(1),l.Ic("\n                                ",n.key,"\n                            ")}}function k(n,e){if(1&n&&l.Gc(0),2&n){const n=l.hc().$implicit;l.Hc(n)}}function F(n,e){1&n&&l.Gc(0),2&n&&l.Hc(e.$implicit)}function M(n,e){1&n&&(l.Vb(0,"ngx-column"),l.Gc(1,"\n                "),l.Ec(2,k,1,1,"ng-template",20),l.Gc(3,"\n                "),l.Ec(4,F,1,1,"ng-template",21),l.Gc(5,"\n            "),l.Ub())}function E(n,e){if(1&n&&(l.Vb(0,"mat-option",19),l.Gc(1),l.Ub()),2&n){const n=e.$implicit;l.oc("value",n.value),l.Cb(1),l.Ic("\n                                ",n.key,"\n                            ")}}function S(n,e){if(1&n&&l.Gc(0),2&n){const n=l.hc().$implicit;l.Hc(n)}}function O(n,e){1&n&&l.Gc(0),2&n&&l.Hc(e.$implicit)}function I(n,e){1&n&&(l.Vb(0,"ngx-column"),l.Gc(1,"\n                "),l.Ec(2,S,1,1,"ng-template",20),l.Gc(3,"\n                "),l.Ec(4,O,1,1,"ng-template",21),l.Gc(5,"\n            "),l.Ub())}const T=function(){return["my-filter"]};let $=(()=>{class n{constructor(n,e){this.cd=n,this.dataFirst=[],this.dataSecond=[],this.nativeScrollbar=!1,this.dialog=e.get(o.b),this.ngZone=e.get(l.B)}ngOnInit(){Promise.all([r.a.generator(11,30),r.a.generator(1e4,30)]).then(([n,e])=>{this.dataFirst=n,this.dataSecond=e,this.cd.detectChanges()})}ngAfterViewInit(){document.querySelectorAll("pre code").forEach(n=>{hljs.highlightBlock(n)})}update(){this.ngZone.runOutsideAngular(()=>{setTimeout(()=>{this.cd.detectChanges()})})}showSample(){this.dialog.open(b.a,{data:{title:"Custom layout",description:"Automatic height calculation",code:'\n<style>\n    #main-column {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        height: calc(100% - 100px);\n    }\n\n    #widget1,\n    #widget2 {\n        flex: 1;\n        flex-shrink: 0;\n        overflow: auto;\n        margin: 5px;\n    }\n</style>\n\n<div id="main-column">\n    <div id="widget1">\n        <ngx-table-builder [source]="data"></ngx-table-builder>\n    </div>\n    <div id="widget2">\n        <ngx-table-builder [source]="data"></ngx-table-builder>\n    </div>\n</div>\n\n                    '},height:"750px",width:"700px"})}}return n.\u0275fac=function(e){return new(e||n)(l.Ob(l.h),l.Ob(l.t))},n.\u0275cmp=l.Ib({type:n,selectors:[["sample-night"]],decls:95,vars:21,consts:[[1,"simple-toolbar"],[1,"mat-checkbox-flat",2,"margin-left","10px",3,"ngModel","ngModelChange","change"],["mat-raised-button","",1,"show-simple",3,"click"],["id","main-column"],["id","widget1"],["enable-filtering","",3,"source","native-scrollbar"],["table1",""],["height","65",3,"css-class"],[1,"filter-form"],["appearance","outline"],["matInput","","name","width","autocomplete","off",3,"ngModel","ngModelChange"],["matSuffix",""],["appearance","outline",1,"filter-options"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],["is-draggable",""],[4,"ngFor","ngForOf"],["id","widget2"],["table2",""],[3,"value"],["ngx-th",""],["ngx-td",""]],template:function(n,e){if(1&n){const n=l.Xb();l.Vb(0,"mat-toolbar",0),l.Gc(1,"\n    "),l.Vb(2,"span"),l.Gc(3,"Example table in columns"),l.Ub(),l.Gc(4,"\n    "),l.Vb(5,"mat-checkbox",1),l.dc("ngModelChange",function(n){return e.nativeScrollbar=n})("change",function(){return e.update()}),l.Gc(6,"\n        Enable native scrollbar\n    "),l.Ub(),l.Gc(7,"\n\n    "),l.Vb(8,"button",2),l.dc("click",function(){return e.showSample()}),l.Gc(9,"show code sample"),l.Ub(),l.Gc(10,"\n"),l.Ub(),l.Gc(11,"\n\n"),l.Vb(12,"div",3),l.Gc(13,"\n    "),l.Vb(14,"div",4),l.Gc(15,"\n        "),l.Vb(16,"ngx-table-builder",5,6),l.Gc(18,"\n            "),l.Vb(19,"ngx-header",7),l.Gc(20,"\n                "),l.Vb(21,"div",8),l.Gc(22,"\n                    "),l.Vb(23,"mat-form-field",9),l.Gc(24,"\n                        "),l.Vb(25,"mat-label"),l.Gc(26,"Filter"),l.Ub(),l.Gc(27,"\n                        "),l.Vb(28,"input",10),l.dc("ngModelChange",function(e){return l.xc(n),l.wc(17).filterable.filterValue=e})("ngModelChange",function(){return l.xc(n),l.wc(17).filter()}),l.Ub(),l.Gc(29,"\n                        "),l.Vb(30,"mat-icon",11),l.Gc(31,"search"),l.Ub(),l.Gc(32,"\n                    "),l.Ub(),l.Gc(33,"\n\n                    "),l.Vb(34,"mat-form-field",12),l.Gc(35,"\n                        "),l.Vb(36,"mat-label"),l.Gc(37,"Find options"),l.Ub(),l.Gc(38,"\n                        "),l.Vb(39,"mat-select",13),l.dc("valueChange",function(e){return l.xc(n),l.wc(17).filterable.filterType=e})("valueChange",function(){return l.xc(n),l.wc(17).filter()}),l.Gc(40,"\n                            "),l.Ec(41,y,2,2,"mat-option",14),l.ic(42,"keyvalue"),l.Gc(43,"\n                        "),l.Ub(),l.Gc(44,"\n                    "),l.Ub(),l.Gc(45,"\n                "),l.Ub(),l.Gc(46,"\n            "),l.Ub(),l.Gc(47,"\n\n            "),l.Qb(48,"ngx-options",15),l.Gc(49,"\n            "),l.Ec(50,M,6,0,"ngx-column",16),l.Gc(51,"\n        "),l.Ub(),l.Gc(52,"\n    "),l.Ub(),l.Gc(53,"\n\n    "),l.Vb(54,"div",17),l.Gc(55,"\n        "),l.Vb(56,"ngx-table-builder",5,18),l.Gc(58,"\n            "),l.Vb(59,"ngx-header",7),l.Gc(60,"\n                "),l.Vb(61,"div",8),l.Gc(62,"\n                    "),l.Vb(63,"mat-form-field",9),l.Gc(64,"\n                        "),l.Vb(65,"mat-label"),l.Gc(66,"Filter"),l.Ub(),l.Gc(67,"\n                        "),l.Vb(68,"input",10),l.dc("ngModelChange",function(e){return l.xc(n),l.wc(57).filterable.filterValue=e})("ngModelChange",function(){return l.xc(n),l.wc(57).filter()}),l.Ub(),l.Gc(69,"\n                        "),l.Vb(70,"mat-icon",11),l.Gc(71,"search"),l.Ub(),l.Gc(72,"\n                    "),l.Ub(),l.Gc(73,"\n\n                    "),l.Vb(74,"mat-form-field",12),l.Gc(75,"\n                        "),l.Vb(76,"mat-label"),l.Gc(77,"Find options"),l.Ub(),l.Gc(78,"\n                        "),l.Vb(79,"mat-select",13),l.dc("valueChange",function(e){return l.xc(n),l.wc(57).filterable.filterType=e})("valueChange",function(){return l.xc(n),l.wc(57).filter()}),l.Gc(80,"\n                            "),l.Ec(81,E,2,2,"mat-option",14),l.ic(82,"keyvalue"),l.Gc(83,"\n                        "),l.Ub(),l.Gc(84,"\n                    "),l.Ub(),l.Gc(85,"\n                "),l.Ub(),l.Gc(86,"\n            "),l.Ub(),l.Gc(87,"\n\n            "),l.Qb(88,"ngx-options",15),l.Gc(89,"\n            "),l.Ec(90,I,6,0,"ngx-column",16),l.Gc(91,"\n        "),l.Ub(),l.Gc(92,"\n    "),l.Ub(),l.Gc(93,"\n"),l.Ub(),l.Gc(94,"\n")}if(2&n){const n=l.wc(17),c=l.wc(57);l.Cb(5),l.oc("ngModel",e.nativeScrollbar),l.Cb(11),l.oc("source",e.dataFirst)("native-scrollbar",e.nativeScrollbar),l.Cb(3),l.oc("css-class",l.qc(19,T)),l.Cb(9),l.oc("ngModel",n.filterable.filterValue),l.Cb(11),l.oc("value",n.filterable.filterType),l.Cb(2),l.oc("ngForOf",l.jc(42,15,n.filterable.types)),l.Cb(9),l.oc("ngForOf",n.modelColumnKeys),l.Cb(6),l.oc("source",e.dataSecond)("native-scrollbar",e.nativeScrollbar),l.Cb(3),l.oc("css-class",l.qc(20,T)),l.Cb(9),l.oc("ngModel",c.filterable.filterValue),l.Cb(11),l.oc("value",c.filterable.filterType),l.Cb(2),l.oc("ngForOf",l.jc(82,17,c.filterable.types)),l.Cb(9),l.oc("ngForOf",c.modelColumnKeys)}},directives:[u.a,s.a,d.k,d.n,f.a,g.a,m.a,G.b,G.e,p.a,d.b,h.a,G.f,v.a,t.l,x.a,V.i,C.a,U.a,w.a],pipes:[t.g],encapsulation:2,changeDetection:0}),n})(),j=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=l.Mb({type:n}),n.\u0275inj=l.Lb({imports:[[t.b,a.a,i.b.forChild([{path:"",component:$}])]]}),n})()}}]);