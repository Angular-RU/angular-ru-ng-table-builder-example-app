!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null==t)return;var c,a,i=[],l=!0,r=!1;try{for(t=t.call(n);!(l=(c=t.next()).done)&&(i.push(c.value),!e||i.length!==e);l=!0);}catch(o){r=!0,a=o}finally{try{l||null==t.return||t.return()}finally{if(r)throw a}}return i}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var c=Object.prototype.toString.call(n).slice(8,-1);"Object"===c&&n.constructor&&(c=n.constructor.name);if("Map"===c||"Set"===c)return Array.from(n);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,c=new Array(e);t<e;t++)c[t]=n[t];return c}function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function c(n,e){for(var t=0;t<e.length;t++){var c=e[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(n,c.key,c)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{ikNa:function(e,a,i){"use strict";i.r(a),i.d(a,"SampleNightModule",function(){return L});var l=i("An66"),r=i("1VvW"),o=i("5Q2+"),u=i("kZht"),b=i("mcff"),f=i("zMYQ"),d=i("umqh"),s=i("aJOL"),g=i("UDV5"),m=i("3kIJ"),p=i("hCLc"),h=i("1ZKX"),G=i("Psfq"),v=i("EmXI"),y=i("Tcl6"),w=i("ydE+"),x=i("IOEv"),V=i("oTne"),C=i("pTnX"),U=i("BL99"),k=i("ctyY"),S=i("j5U8");function E(n,e){if(1&n&&(u.Vb(0,"mat-option",19),u.Gc(1),u.Ub()),2&n){var t=e.$implicit;u.oc("value",t.value),u.Cb(1),u.Ic("\n                                ",t.key,"\n                            ")}}function M(n,e){if(1&n&&u.Gc(0),2&n){var t=u.hc().$implicit;u.Hc(t)}}function F(n,e){1&n&&u.Gc(0),2&n&&u.Hc(e.$implicit)}function O(n,e){1&n&&(u.Vb(0,"ngx-column"),u.Gc(1,"\n                "),u.Ec(2,M,1,1,"ng-template",20),u.Gc(3,"\n                "),u.Ec(4,F,1,1,"ng-template",21),u.Gc(5,"\n            "),u.Ub())}function I(n,e){if(1&n&&(u.Vb(0,"mat-option",19),u.Gc(1),u.Ub()),2&n){var t=e.$implicit;u.oc("value",t.value),u.Cb(1),u.Ic("\n                                ",t.key,"\n                            ")}}function A(n,e){if(1&n&&u.Gc(0),2&n){var t=u.hc().$implicit;u.Hc(t)}}function T(n,e){1&n&&u.Gc(0),2&n&&u.Hc(e.$implicit)}function j(n,e){1&n&&(u.Vb(0,"ngx-column"),u.Gc(1,"\n                "),u.Ec(2,A,1,1,"ng-template",20),u.Gc(3,"\n                "),u.Ec(4,T,1,1,"ng-template",21),u.Gc(5,"\n            "),u.Ub())}var $,q,H=function(){return["my-filter"]},J=((q=function(){function e(n,c){t(this,e),this.cd=n,this.dataFirst=[],this.dataSecond=[],this.nativeScrollbar=!1,this.dialog=c.get(b.b),this.ngZone=c.get(u.B)}var a,i,l;return a=e,(i=[{key:"ngOnInit",value:function(){var e=this;Promise.all([f.a.generator(11,30),f.a.generator(1e4,30)]).then(function(t){var c=n(t,2),a=c[0],i=c[1];e.dataFirst=a,e.dataSecond=i,e.cd.detectChanges()})}},{key:"ngAfterViewInit",value:function(){document.querySelectorAll("pre code").forEach(function(n){hljs.highlightBlock(n)})}},{key:"update",value:function(){var n=this;this.ngZone.runOutsideAngular(function(){setTimeout(function(){n.cd.detectChanges()})})}},{key:"showSample",value:function(){this.dialog.open(d.a,{data:{title:"Custom layout",description:"Automatic height calculation",code:'\n<style>\n    #main-column {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        height: calc(100% - 100px);\n    }\n\n    #widget1,\n    #widget2 {\n        flex: 1;\n        flex-shrink: 0;\n        overflow: auto;\n        margin: 5px;\n    }\n</style>\n\n<div id="main-column">\n    <div id="widget1">\n        <ngx-table-builder [source]="data"></ngx-table-builder>\n    </div>\n    <div id="widget2">\n        <ngx-table-builder [source]="data"></ngx-table-builder>\n    </div>\n</div>\n\n                    '},height:"750px",width:"700px"})}}])&&c(a.prototype,i),l&&c(a,l),e}()).\u0275fac=function(n){return new(n||q)(u.Ob(u.h),u.Ob(u.t))},q.\u0275cmp=u.Ib({type:q,selectors:[["sample-night"]],decls:95,vars:21,consts:[[1,"simple-toolbar"],[1,"mat-checkbox-flat",2,"margin-left","10px",3,"ngModel","ngModelChange","change"],["mat-raised-button","",1,"show-simple",3,"click"],["id","main-column"],["id","widget1"],["enable-filtering","",3,"source","native-scrollbar"],["table1",""],["height","65",3,"css-class"],[1,"filter-form"],["appearance","outline"],["matInput","","name","width","autocomplete","off",3,"ngModel","ngModelChange"],["matSuffix",""],["appearance","outline",1,"filter-options"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],["is-draggable",""],[4,"ngFor","ngForOf"],["id","widget2"],["table2",""],[3,"value"],["ngx-th",""],["ngx-td",""]],template:function(n,e){if(1&n){var t=u.Xb();u.Vb(0,"mat-toolbar",0),u.Gc(1,"\n    "),u.Vb(2,"span"),u.Gc(3,"Example table in columns"),u.Ub(),u.Gc(4,"\n    "),u.Vb(5,"mat-checkbox",1),u.dc("ngModelChange",function(n){return e.nativeScrollbar=n})("change",function(){return e.update()}),u.Gc(6,"\n        Enable native scrollbar\n    "),u.Ub(),u.Gc(7,"\n\n    "),u.Vb(8,"button",2),u.dc("click",function(){return e.showSample()}),u.Gc(9,"show code sample"),u.Ub(),u.Gc(10,"\n"),u.Ub(),u.Gc(11,"\n\n"),u.Vb(12,"div",3),u.Gc(13,"\n    "),u.Vb(14,"div",4),u.Gc(15,"\n        "),u.Vb(16,"ngx-table-builder",5,6),u.Gc(18,"\n            "),u.Vb(19,"ngx-header",7),u.Gc(20,"\n                "),u.Vb(21,"div",8),u.Gc(22,"\n                    "),u.Vb(23,"mat-form-field",9),u.Gc(24,"\n                        "),u.Vb(25,"mat-label"),u.Gc(26,"Filter"),u.Ub(),u.Gc(27,"\n                        "),u.Vb(28,"input",10),u.dc("ngModelChange",function(n){return u.xc(t),u.wc(17).filterable.filterValue=n})("ngModelChange",function(){return u.xc(t),u.wc(17).filter()}),u.Ub(),u.Gc(29,"\n                        "),u.Vb(30,"mat-icon",11),u.Gc(31,"search"),u.Ub(),u.Gc(32,"\n                    "),u.Ub(),u.Gc(33,"\n\n                    "),u.Vb(34,"mat-form-field",12),u.Gc(35,"\n                        "),u.Vb(36,"mat-label"),u.Gc(37,"Find options"),u.Ub(),u.Gc(38,"\n                        "),u.Vb(39,"mat-select",13),u.dc("valueChange",function(n){return u.xc(t),u.wc(17).filterable.filterType=n})("valueChange",function(){return u.xc(t),u.wc(17).filter()}),u.Gc(40,"\n                            "),u.Ec(41,E,2,2,"mat-option",14),u.ic(42,"keyvalue"),u.Gc(43,"\n                        "),u.Ub(),u.Gc(44,"\n                    "),u.Ub(),u.Gc(45,"\n                "),u.Ub(),u.Gc(46,"\n            "),u.Ub(),u.Gc(47,"\n\n            "),u.Qb(48,"ngx-options",15),u.Gc(49,"\n            "),u.Ec(50,O,6,0,"ngx-column",16),u.Gc(51,"\n        "),u.Ub(),u.Gc(52,"\n    "),u.Ub(),u.Gc(53,"\n\n    "),u.Vb(54,"div",17),u.Gc(55,"\n        "),u.Vb(56,"ngx-table-builder",5,18),u.Gc(58,"\n            "),u.Vb(59,"ngx-header",7),u.Gc(60,"\n                "),u.Vb(61,"div",8),u.Gc(62,"\n                    "),u.Vb(63,"mat-form-field",9),u.Gc(64,"\n                        "),u.Vb(65,"mat-label"),u.Gc(66,"Filter"),u.Ub(),u.Gc(67,"\n                        "),u.Vb(68,"input",10),u.dc("ngModelChange",function(n){return u.xc(t),u.wc(57).filterable.filterValue=n})("ngModelChange",function(){return u.xc(t),u.wc(57).filter()}),u.Ub(),u.Gc(69,"\n                        "),u.Vb(70,"mat-icon",11),u.Gc(71,"search"),u.Ub(),u.Gc(72,"\n                    "),u.Ub(),u.Gc(73,"\n\n                    "),u.Vb(74,"mat-form-field",12),u.Gc(75,"\n                        "),u.Vb(76,"mat-label"),u.Gc(77,"Find options"),u.Ub(),u.Gc(78,"\n                        "),u.Vb(79,"mat-select",13),u.dc("valueChange",function(n){return u.xc(t),u.wc(57).filterable.filterType=n})("valueChange",function(){return u.xc(t),u.wc(57).filter()}),u.Gc(80,"\n                            "),u.Ec(81,I,2,2,"mat-option",14),u.ic(82,"keyvalue"),u.Gc(83,"\n                        "),u.Ub(),u.Gc(84,"\n                    "),u.Ub(),u.Gc(85,"\n                "),u.Ub(),u.Gc(86,"\n            "),u.Ub(),u.Gc(87,"\n\n            "),u.Qb(88,"ngx-options",15),u.Gc(89,"\n            "),u.Ec(90,j,6,0,"ngx-column",16),u.Gc(91,"\n        "),u.Ub(),u.Gc(92,"\n    "),u.Ub(),u.Gc(93,"\n"),u.Ub(),u.Gc(94,"\n")}if(2&n){var c=u.wc(17),a=u.wc(57);u.Cb(5),u.oc("ngModel",e.nativeScrollbar),u.Cb(11),u.oc("source",e.dataFirst)("native-scrollbar",e.nativeScrollbar),u.Cb(3),u.oc("css-class",u.qc(19,H)),u.Cb(9),u.oc("ngModel",c.filterable.filterValue),u.Cb(11),u.oc("value",c.filterable.filterType),u.Cb(2),u.oc("ngForOf",u.jc(42,15,c.filterable.types)),u.Cb(9),u.oc("ngForOf",c.modelColumnKeys),u.Cb(6),u.oc("source",e.dataSecond)("native-scrollbar",e.nativeScrollbar),u.Cb(3),u.oc("css-class",u.qc(20,H)),u.Cb(9),u.oc("ngModel",a.filterable.filterValue),u.Cb(11),u.oc("value",a.filterable.filterType),u.Cb(2),u.oc("ngForOf",u.jc(82,17,a.filterable.types)),u.Cb(9),u.oc("ngForOf",a.modelColumnKeys)}},directives:[s.a,g.a,m.k,m.n,p.a,h.a,G.a,v.b,v.e,y.a,m.b,w.a,v.f,x.a,l.l,V.a,C.i,U.a,k.a,S.a],pipes:[l.g],encapsulation:2,changeDetection:0}),q),L=(($=function n(){t(this,n)}).\u0275fac=function(n){return new(n||$)},$.\u0275mod=u.Mb({type:$}),$.\u0275inj=u.Lb({imports:[[l.b,o.a,r.b.forChild([{path:"",component:J}])]]}),$)}}])}();