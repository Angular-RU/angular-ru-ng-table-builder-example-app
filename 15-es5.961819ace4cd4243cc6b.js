!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],c=!0,a=!1,i=void 0;try{for(var r,l=n[Symbol.iterator]();!(c=(r=l.next()).done)&&(t.push(r.value),!e||t.length!==e);c=!0);}catch(o){a=!0,i=o}finally{try{c||null==l.return||l.return()}finally{if(a)throw i}}return t}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var c=Object.prototype.toString.call(n).slice(8,-1);"Object"===c&&n.constructor&&(c=n.constructor.name);if("Map"===c||"Set"===c)return Array.from(n);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,c=new Array(e);t<e;t++)c[t]=n[t];return c}function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function c(n,e){for(var t=0;t<e.length;t++){var c=e[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(n,c.key,c)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{ikNa:function(e,a,i){"use strict";i.r(a),i.d(a,"SampleNightModule",(function(){return L}));var r=i("An66"),l=i("1VvW"),o=i("5Q2+"),u=i("kZht"),b=i("mcff"),f=i("zMYQ"),s=i("umqh"),d=i("aJOL"),p=i("UDV5"),g=i("3kIJ"),m=i("hCLc"),h=i("1ZKX"),J=i("Psfq"),v=i("EmXI"),y=i("Tcl6"),x=i("ydE+"),X=i("IOEv"),W=i("oTne"),w=i("pTnX"),k=i("BL99"),E=i("ctyY"),C=i("j5U8");function S(n,e){if(1&n&&(u.Xb(0,"mat-option",19),u.Jc(1),u.Wb()),2&n){var t=e.$implicit;u.pc("value",t.value),u.Eb(1),u.Lc("\n                                ",t.key,"\n                            ")}}function F(n,e){if(1&n&&u.Jc(0),2&n){var t=u.ic().$implicit;u.Kc(t)}}function M(n,e){1&n&&u.Jc(0),2&n&&u.Kc(e.$implicit)}function O(n,e){1&n&&(u.Xb(0,"ngx-column"),u.Jc(1,"\n                "),u.Hc(2,F,1,1,"ng-template",20),u.Jc(3,"\n                "),u.Hc(4,M,1,1,"ng-template",21),u.Jc(5,"\n            "),u.Wb())}function A(n,e){if(1&n&&(u.Xb(0,"mat-option",19),u.Jc(1),u.Wb()),2&n){var t=e.$implicit;u.pc("value",t.value),u.Eb(1),u.Lc("\n                                ",t.key,"\n                            ")}}function j(n,e){if(1&n&&u.Jc(0),2&n){var t=u.ic().$implicit;u.Kc(t)}}function T(n,e){1&n&&u.Jc(0),2&n&&u.Kc(e.$implicit)}function I(n,e){1&n&&(u.Xb(0,"ngx-column"),u.Jc(1,"\n                "),u.Hc(2,j,1,1,"ng-template",20),u.Jc(3,"\n                "),u.Hc(4,T,1,1,"ng-template",21),u.Jc(5,"\n            "),u.Wb())}var H,K,V=function(){return["my-filter"]},$=((K=function(){function e(n,c){t(this,e),this.cd=n,this.dataFirst=[],this.dataSecond=[],this.nativeScrollbar=!1,this.dialog=c.get(b.b),this.ngZone=c.get(u.C)}var a,i,r;return a=e,(i=[{key:"ngOnInit",value:function(){var e=this;Promise.all([f.a.generator(11,30),f.a.generator(1e4,30)]).then((function(t){var c=n(t,2),a=c[0],i=c[1];e.dataFirst=a,e.dataSecond=i,e.cd.detectChanges()}))}},{key:"ngAfterViewInit",value:function(){document.querySelectorAll("pre code").forEach((function(n){hljs.highlightBlock(n)}))}},{key:"update",value:function(){var n=this;this.ngZone.runOutsideAngular((function(){setTimeout((function(){n.cd.detectChanges()}))}))}},{key:"showSample",value:function(){this.dialog.open(s.a,{data:{title:"Custom layout",description:"Automatic height calculation",code:'\n<style>\n    #main-column {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        height: calc(100% - 100px);\n    }\n\n    #widget1,\n    #widget2 {\n        flex: 1;\n        flex-shrink: 0;\n        overflow: auto;\n        margin: 5px;\n    }\n</style>\n\n<div id="main-column">\n    <div id="widget1">\n        <ngx-table-builder [source]="data"></ngx-table-builder>\n    </div>\n    <div id="widget2">\n        <ngx-table-builder [source]="data"></ngx-table-builder>\n    </div>\n</div>\n\n                    '},height:"750px",width:"700px"})}}])&&c(a.prototype,i),r&&c(a,r),e}()).\u0275fac=function(n){return new(n||K)(u.Qb(u.h),u.Qb(u.t))},K.\u0275cmp=u.Kb({type:K,selectors:[["sample-night"]],decls:95,vars:21,consts:[[1,"simple-toolbar"],[1,"mat-checkbox-flat",2,"margin-left","10px",3,"ngModel","ngModelChange","change"],["mat-raised-button","",1,"show-simple",3,"click"],["id","main-column"],["id","widget1"],["enable-filtering","",3,"source","native-scrollbar"],["table1",""],["height","65",3,"css-class"],[1,"filter-form"],["appearance","outline"],["matInput","","name","width","autocomplete","off",3,"ngModel","ngModelChange"],["matSuffix",""],["appearance","outline",1,"filter-options"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],["is-draggable",""],[4,"ngFor","ngForOf"],["id","widget2"],["table2",""],[3,"value"],["ngx-th",""],["ngx-td",""]],template:function(n,e){if(1&n){var t=u.Zb();u.Xb(0,"mat-toolbar",0),u.Jc(1,"\n    "),u.Xb(2,"span"),u.Jc(3,"Example table in columns"),u.Wb(),u.Jc(4,"\n    "),u.Xb(5,"mat-checkbox",1),u.ec("ngModelChange",(function(n){return e.nativeScrollbar=n}))("change",(function(){return e.update()})),u.Jc(6,"\n        Enable native scrollbar\n    "),u.Wb(),u.Jc(7,"\n\n    "),u.Xb(8,"button",2),u.ec("click",(function(){return e.showSample()})),u.Jc(9,"show code sample"),u.Wb(),u.Jc(10,"\n"),u.Wb(),u.Jc(11,"\n\n"),u.Xb(12,"div",3),u.Jc(13,"\n    "),u.Xb(14,"div",4),u.Jc(15,"\n        "),u.Xb(16,"ngx-table-builder",5,6),u.Jc(18,"\n            "),u.Xb(19,"ngx-header",7),u.Jc(20,"\n                "),u.Xb(21,"div",8),u.Jc(22,"\n                    "),u.Xb(23,"mat-form-field",9),u.Jc(24,"\n                        "),u.Xb(25,"mat-label"),u.Jc(26,"Filter"),u.Wb(),u.Jc(27,"\n                        "),u.Xb(28,"input",10),u.ec("ngModelChange",(function(n){return u.yc(t),u.xc(17).filterable.filterValue=n}))("ngModelChange",(function(){return u.yc(t),u.xc(17).filter()})),u.Wb(),u.Jc(29,"\n                        "),u.Xb(30,"mat-icon",11),u.Jc(31,"search"),u.Wb(),u.Jc(32,"\n                    "),u.Wb(),u.Jc(33,"\n\n                    "),u.Xb(34,"mat-form-field",12),u.Jc(35,"\n                        "),u.Xb(36,"mat-label"),u.Jc(37,"Find options"),u.Wb(),u.Jc(38,"\n                        "),u.Xb(39,"mat-select",13),u.ec("valueChange",(function(n){return u.yc(t),u.xc(17).filterable.filterType=n}))("valueChange",(function(){return u.yc(t),u.xc(17).filter()})),u.Jc(40,"\n                            "),u.Hc(41,S,2,2,"mat-option",14),u.jc(42,"keyvalue"),u.Jc(43,"\n                        "),u.Wb(),u.Jc(44,"\n                    "),u.Wb(),u.Jc(45,"\n                "),u.Wb(),u.Jc(46,"\n            "),u.Wb(),u.Jc(47,"\n\n            "),u.Sb(48,"ngx-options",15),u.Jc(49,"\n            "),u.Hc(50,O,6,0,"ngx-column",16),u.Jc(51,"\n        "),u.Wb(),u.Jc(52,"\n    "),u.Wb(),u.Jc(53,"\n\n    "),u.Xb(54,"div",17),u.Jc(55,"\n        "),u.Xb(56,"ngx-table-builder",5,18),u.Jc(58,"\n            "),u.Xb(59,"ngx-header",7),u.Jc(60,"\n                "),u.Xb(61,"div",8),u.Jc(62,"\n                    "),u.Xb(63,"mat-form-field",9),u.Jc(64,"\n                        "),u.Xb(65,"mat-label"),u.Jc(66,"Filter"),u.Wb(),u.Jc(67,"\n                        "),u.Xb(68,"input",10),u.ec("ngModelChange",(function(n){return u.yc(t),u.xc(57).filterable.filterValue=n}))("ngModelChange",(function(){return u.yc(t),u.xc(57).filter()})),u.Wb(),u.Jc(69,"\n                        "),u.Xb(70,"mat-icon",11),u.Jc(71,"search"),u.Wb(),u.Jc(72,"\n                    "),u.Wb(),u.Jc(73,"\n\n                    "),u.Xb(74,"mat-form-field",12),u.Jc(75,"\n                        "),u.Xb(76,"mat-label"),u.Jc(77,"Find options"),u.Wb(),u.Jc(78,"\n                        "),u.Xb(79,"mat-select",13),u.ec("valueChange",(function(n){return u.yc(t),u.xc(57).filterable.filterType=n}))("valueChange",(function(){return u.yc(t),u.xc(57).filter()})),u.Jc(80,"\n                            "),u.Hc(81,A,2,2,"mat-option",14),u.jc(82,"keyvalue"),u.Jc(83,"\n                        "),u.Wb(),u.Jc(84,"\n                    "),u.Wb(),u.Jc(85,"\n                "),u.Wb(),u.Jc(86,"\n            "),u.Wb(),u.Jc(87,"\n\n            "),u.Sb(88,"ngx-options",15),u.Jc(89,"\n            "),u.Hc(90,I,6,0,"ngx-column",16),u.Jc(91,"\n        "),u.Wb(),u.Jc(92,"\n    "),u.Wb(),u.Jc(93,"\n"),u.Wb(),u.Jc(94,"\n")}if(2&n){var c=u.xc(17),a=u.xc(57);u.Eb(5),u.pc("ngModel",e.nativeScrollbar),u.Eb(11),u.pc("source",e.dataFirst)("native-scrollbar",e.nativeScrollbar),u.Eb(3),u.pc("css-class",u.rc(19,V)),u.Eb(9),u.pc("ngModel",c.filterable.filterValue),u.Eb(11),u.pc("value",c.filterable.filterType),u.Eb(2),u.pc("ngForOf",u.kc(42,15,c.filterable.types)),u.Eb(9),u.pc("ngForOf",c.modelColumnKeys),u.Eb(6),u.pc("source",e.dataSecond)("native-scrollbar",e.nativeScrollbar),u.Eb(3),u.pc("css-class",u.rc(20,V)),u.Eb(9),u.pc("ngModel",a.filterable.filterValue),u.Eb(11),u.pc("value",a.filterable.filterType),u.Eb(2),u.pc("ngForOf",u.kc(82,17,a.filterable.types)),u.Eb(9),u.pc("ngForOf",a.modelColumnKeys)}},directives:[d.a,p.a,g.k,g.n,m.a,h.a,J.a,v.b,v.e,y.a,g.b,x.a,v.f,X.a,r.l,W.a,w.i,k.a,E.a,C.a],pipes:[r.g],encapsulation:2,changeDetection:0}),K),L=((H=function n(){t(this,n)}).\u0275mod=u.Ob({type:H}),H.\u0275inj=u.Nb({factory:function(n){return new(n||H)},imports:[[r.b,o.a,l.b.forChild([{path:"",component:$}])]]}),H)}}])}();