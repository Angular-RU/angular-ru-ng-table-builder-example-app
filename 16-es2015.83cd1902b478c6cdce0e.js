(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{ikNa:function(c,n,e){"use strict";e.r(n),e.d(n,"SampleNightModule",function(){return T});var t=e("An66"),i=e("1VvW"),a=e("5Q2+"),l=e("kZht"),o=e("mcff"),r=e("zMYQ"),u=e("umqh"),s=e("aJOL"),d=e("UDV5"),f=e("3kIJ"),g=e("hCLc"),m=e("WGpx"),V=e("EmXI"),b=e("Tcl6"),p=e("ydE+"),h=e("IOEv"),k=e("pTnX");function v(c,n){if(1&c&&(l.kc(0,"mat-option",19),l.Vc(1),l.jc()),2&c){const c=n.$implicit;l.Dc("value",c.value),l.Rb(1),l.Xc("\n                                ",c.key,"\n                            ")}}function j(c,n){if(1&c&&l.Vc(0),2&c){const c=l.wc().$implicit;l.Wc(c)}}function x(c,n){1&c&&l.Vc(0),2&c&&l.Wc(n.$implicit)}function w(c,n){1&c&&(l.kc(0,"ngx-column"),l.Vc(1,"\n                "),l.Tc(2,j,1,1,"ng-template",20),l.Vc(3,"\n                "),l.Tc(4,x,1,1,"ng-template",21),l.Vc(5,"\n            "),l.jc())}function y(c,n){if(1&c&&(l.kc(0,"mat-option",19),l.Vc(1),l.jc()),2&c){const c=n.$implicit;l.Dc("value",c.value),l.Rb(1),l.Xc("\n                                ",c.key,"\n                            ")}}function M(c,n){if(1&c&&l.Vc(0),2&c){const c=l.wc().$implicit;l.Wc(c)}}function C(c,n){1&c&&l.Vc(0),2&c&&l.Wc(n.$implicit)}function D(c,n){1&c&&(l.kc(0,"ngx-column"),l.Vc(1,"\n                "),l.Tc(2,M,1,1,"ng-template",20),l.Vc(3,"\n                "),l.Tc(4,C,1,1,"ng-template",21),l.Vc(5,"\n            "),l.jc())}const F=function(){return["my-filter"]};let R=(()=>{class c{constructor(c,n){this.cd=c,this.dataFirst=[],this.dataSecond=[],this.nativeScrollbar=!1,this.dialog=n.get(o.b),this.ngZone=n.get(l.L)}ngOnInit(){Promise.all([r.a.generator(11,30),r.a.generator(1e4,30)]).then(([c,n])=>{this.dataFirst=c,this.dataSecond=n,this.cd.detectChanges()})}ngAfterViewInit(){document.querySelectorAll("pre code").forEach(c=>{hljs.highlightBlock(c)})}update(){this.ngZone.runOutsideAngular(()=>{setTimeout(()=>{this.cd.detectChanges()})})}showSample(){this.dialog.open(u.a,{data:{title:"Custom layout",description:"Automatic height calculation",code:'\n<style>\n    #main-column {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        height: calc(100% - 100px);\n    }\n\n    #widget1,\n    #widget2 {\n        flex: 1;\n        flex-shrink: 0;\n        overflow: auto;\n        margin: 5px;\n    }\n</style>\n\n<div id="main-column">\n    <div id="widget1">\n        <ngx-table-builder [source]="data"></ngx-table-builder>\n    </div>\n    <div id="widget2">\n        <ngx-table-builder [source]="data"></ngx-table-builder>\n    </div>\n</div>\n\n                    '},height:"750px",width:"700px"})}}return c.\u0275fac=function(n){return new(n||c)(l.dc(l.i),l.dc(l.B))},c.\u0275cmp=l.Xb({type:c,selectors:[["sample-night"]],decls:95,vars:21,consts:[[1,"simple-toolbar"],[1,"mat-checkbox-flat",2,"margin-left","10px",3,"ngModel","ngModelChange","change"],["mat-raised-button","",1,"show-simple",3,"click"],["id","main-column"],["id","widget1"],["enable-filtering","",3,"source","native-scrollbar"],["table1",""],["height","65",3,"css-class"],[1,"filter-form"],["appearance","outline"],["matInput","","name","width","autocomplete","off",3,"ngModel","ngModelChange"],["matSuffix",""],["appearance","outline",1,"filter-options"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],["is-draggable",""],[4,"ngFor","ngForOf"],["id","widget2"],["table2",""],[3,"value"],["ngx-th",""],["ngx-td",""]],template:function(c,n){if(1&c){const c=l.mc();l.kc(0,"mat-toolbar",0),l.Vc(1,"\n    "),l.kc(2,"span"),l.Vc(3,"Example table in columns"),l.jc(),l.Vc(4,"\n    "),l.kc(5,"mat-checkbox",1),l.sc("ngModelChange",function(c){return n.nativeScrollbar=c})("change",function(){return n.update()}),l.Vc(6,"\n        Enable native scrollbar\n    "),l.jc(),l.Vc(7,"\n\n    "),l.kc(8,"button",2),l.sc("click",function(){return n.showSample()}),l.Vc(9,"show code sample"),l.jc(),l.Vc(10,"\n"),l.jc(),l.Vc(11,"\n\n"),l.kc(12,"div",3),l.Vc(13,"\n    "),l.kc(14,"div",4),l.Vc(15,"\n        "),l.kc(16,"ngx-table-builder",5,6),l.Vc(18,"\n            "),l.kc(19,"ngx-header",7),l.Vc(20,"\n                "),l.kc(21,"div",8),l.Vc(22,"\n                    "),l.kc(23,"mat-form-field",9),l.Vc(24,"\n                        "),l.kc(25,"mat-label"),l.Vc(26,"Filter"),l.jc(),l.Vc(27,"\n                        "),l.kc(28,"input",10),l.sc("ngModelChange",function(n){return l.Mc(c),l.Lc(17).filterable.filterValue=n})("ngModelChange",function(){return l.Mc(c),l.Lc(17).filter()}),l.jc(),l.Vc(29,"\n                        "),l.kc(30,"mat-icon",11),l.Vc(31,"search"),l.jc(),l.Vc(32,"\n                    "),l.jc(),l.Vc(33,"\n\n                    "),l.kc(34,"mat-form-field",12),l.Vc(35,"\n                        "),l.kc(36,"mat-label"),l.Vc(37,"Find options"),l.jc(),l.Vc(38,"\n                        "),l.kc(39,"mat-select",13),l.sc("valueChange",function(n){return l.Mc(c),l.Lc(17).filterable.filterType=n})("valueChange",function(){return l.Mc(c),l.Lc(17).filter()}),l.Vc(40,"\n                            "),l.Tc(41,v,2,2,"mat-option",14),l.xc(42,"keyvalue"),l.Vc(43,"\n                        "),l.jc(),l.Vc(44,"\n                    "),l.jc(),l.Vc(45,"\n                "),l.jc(),l.Vc(46,"\n            "),l.jc(),l.Vc(47,"\n\n            "),l.fc(48,"ngx-options",15),l.Vc(49,"\n            "),l.Tc(50,w,6,0,"ngx-column",16),l.Vc(51,"\n        "),l.jc(),l.Vc(52,"\n    "),l.jc(),l.Vc(53,"\n\n    "),l.kc(54,"div",17),l.Vc(55,"\n        "),l.kc(56,"ngx-table-builder",5,18),l.Vc(58,"\n            "),l.kc(59,"ngx-header",7),l.Vc(60,"\n                "),l.kc(61,"div",8),l.Vc(62,"\n                    "),l.kc(63,"mat-form-field",9),l.Vc(64,"\n                        "),l.kc(65,"mat-label"),l.Vc(66,"Filter"),l.jc(),l.Vc(67,"\n                        "),l.kc(68,"input",10),l.sc("ngModelChange",function(n){return l.Mc(c),l.Lc(57).filterable.filterValue=n})("ngModelChange",function(){return l.Mc(c),l.Lc(57).filter()}),l.jc(),l.Vc(69,"\n                        "),l.kc(70,"mat-icon",11),l.Vc(71,"search"),l.jc(),l.Vc(72,"\n                    "),l.jc(),l.Vc(73,"\n\n                    "),l.kc(74,"mat-form-field",12),l.Vc(75,"\n                        "),l.kc(76,"mat-label"),l.Vc(77,"Find options"),l.jc(),l.Vc(78,"\n                        "),l.kc(79,"mat-select",13),l.sc("valueChange",function(n){return l.Mc(c),l.Lc(57).filterable.filterType=n})("valueChange",function(){return l.Mc(c),l.Lc(57).filter()}),l.Vc(80,"\n                            "),l.Tc(81,y,2,2,"mat-option",14),l.xc(82,"keyvalue"),l.Vc(83,"\n                        "),l.jc(),l.Vc(84,"\n                    "),l.jc(),l.Vc(85,"\n                "),l.jc(),l.Vc(86,"\n            "),l.jc(),l.Vc(87,"\n\n            "),l.fc(88,"ngx-options",15),l.Vc(89,"\n            "),l.Tc(90,D,6,0,"ngx-column",16),l.Vc(91,"\n        "),l.jc(),l.Vc(92,"\n    "),l.jc(),l.Vc(93,"\n"),l.jc(),l.Vc(94,"\n")}if(2&c){const c=l.Lc(17),e=l.Lc(57);l.Rb(5),l.Dc("ngModel",n.nativeScrollbar),l.Rb(11),l.Dc("source",n.dataFirst)("native-scrollbar",n.nativeScrollbar),l.Rb(3),l.Dc("css-class",l.Fc(19,F)),l.Rb(9),l.Dc("ngModel",c.filterable.filterValue),l.Rb(11),l.Dc("value",c.filterable.filterType),l.Rb(2),l.Dc("ngForOf",l.yc(42,15,c.filterable.types)),l.Rb(9),l.Dc("ngForOf",c.modelColumnKeys),l.Rb(6),l.Dc("source",n.dataSecond)("native-scrollbar",n.nativeScrollbar),l.Rb(3),l.Dc("css-class",l.Fc(20,F)),l.Rb(9),l.Dc("ngModel",e.filterable.filterValue),l.Rb(11),l.Dc("value",e.filterable.filterType),l.Rb(2),l.Dc("ngForOf",l.yc(82,17,e.filterable.types)),l.Rb(9),l.Dc("ngForOf",e.modelColumnKeys)}},directives:[s.a,d.a,f.k,f.n,g.a,m.m,m.h,V.b,V.e,b.a,f.b,p.a,V.f,h.a,t.l,m.j,k.h,m.a,m.q,m.p],pipes:[t.g],encapsulation:2,changeDetection:0}),c})(),T=(()=>{class c{}return c.\u0275mod=l.bc({type:c}),c.\u0275inj=l.ac({factory:function(n){return new(n||c)},imports:[[t.b,a.a,i.b.forChild([{path:"",component:R}])]]}),c})()}}]);