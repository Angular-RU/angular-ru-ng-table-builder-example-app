!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var c=e[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(n,c.key,c)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"32Dg":function(t,c,i){"use strict";i.r(c),i.d(c,"SampleSixteenModule",function(){return U});var o=i("An66"),a=i("1VvW"),s=i("5Q2+"),r=i("b5Xb"),l=i("zMYQ"),b=i("kZht"),u=i("mcff"),m=i("aJOL"),g=i("hCLc"),h=i("1ZKX"),d=i("oTne"),f=i("YW/L"),K=i("t+BJ"),v=i("oIp9"),p=i("BL99"),y=i("j5U8"),k=i("UDV5"),x=i("ydE+");function w(n,e){if(1&n){var t=b.bc();b.Zb(0,"ngx-context-menu-item",13),b.hc("onClick",function(n){b.Bc(t);var c=e.$implicit;return b.lc(),b.Ac(10).toggleColumnVisibility(c.key),n.preventDefault()}),b.Kc(1,"\n                "),b.Zb(2,"ngx-menu-content",14),b.Kc(3),b.Yb(),b.Kc(4,"\n                "),b.Zb(5,"ngx-menu-content",15),b.Kc(6,"\n                    "),b.Ub(7,"mat-checkbox",16),b.Kc(8,"\n                "),b.Yb(),b.Kc(9,"\n            "),b.Yb()}if(2&n){var c=e.$implicit;b.sc("visible",c.isModel),b.Gb(3),b.Lc(c.key),b.Gb(4),b.sc("checked",c.isVisible)}}function Y(n,e){1&n&&b.Ub(0,"ngx-column",17),2&n&&b.sc("key",e.$implicit)}function Z(n,e){1&n&&(b.Kc(0,"\n            "),b.Zb(1,"button",18),b.Zb(2,"mat-icon"),b.Kc(3,"info"),b.Yb(),b.Yb(),b.Kc(4,"\n        "))}var C,S,I=function(){return["reverseId"]},O=((S=function(){function t(e,c,i){n(this,t),this.dialog=e,this.cd=c,this.tableChanges=i,this.data=[],this.schema=null,this.testName="test",this.sub=null}var c,i,o;return c=t,(i=[{key:"ngOnInit",value:function(){var n,e=this;this.schema=JSON.parse(null!==(n=window.localStorage.getItem(this.testName))&&void 0!==n?n:"{}"),l.a.generator(3,10).then(function(n){e.data=n,e.cd.detectChanges()}),this.sub=this.tableChanges.events.subscribe(function(n){return e.save(n)})}},{key:"ngAfterViewInit",value:function(){document.querySelectorAll("pre code").forEach(function(n){hljs.highlightBlock(n)})}},{key:"ngOnDestroy",value:function(){var n;null===(n=this.sub)||void 0===n||n.unsubscribe()}},{key:"save",value:function(n){console.log("update schema",n),window.localStorage.setItem(this.testName,JSON.stringify(n))}}])&&e(c.prototype,i),o&&e(c,o),t}()).\u0275fac=function(n){return new(n||S)(b.Sb(u.b),b.Sb(b.h),b.Sb(r.a))},S.\u0275cmp=b.Mb({type:S,selectors:[["sample-sixteen"]],decls:49,vars:10,consts:[[1,"simple-toolbar"],["mat-raised-button","",1,"show-simple"],[3,"source","name","schema-version","schema-columns","vertical-border","exclude-keys"],["table",""],["is-draggable","","is-filterable","","is-sortable",""],["contextTitle","","divider",""],[3,"visible","onClick",4,"ngFor","ngForOf"],["divider","",3,"onClick"],["key","id","sticky","","custom-key","","width","100","vertical-line","","important-template","",3,"is-draggable"],["key","reverseId","custom-key","","width","150","vertical-line","","important-template",""],[3,"key",4,"ngFor","ngForOf"],["key","edit","custom-key","","width","60","vertical-line","","sticky-end","","empty-head",""],["ngx-td","","row",""],[3,"visible","onClick"],["no-margin",""],["no-margin","","align-center",""],["color","primary",3,"checked"],[3,"key"],["mat-button",""]],template:function(n,e){if(1&n){var t=b.bc();b.Zb(0,"mat-toolbar",0),b.Kc(1,"\n    "),b.Zb(2,"span"),b.Kc(3,"Persistent state"),b.Yb(),b.Kc(4,"\n    "),b.Zb(5,"button",1),b.Kc(6,"show code sample"),b.Yb(),b.Kc(7,"\n"),b.Yb(),b.Kc(8,"\n\n"),b.Zb(9,"ngx-table-builder",2,3),b.Kc(11,"\n    "),b.Ub(12,"ngx-options",4),b.Kc(13,"\n\n    "),b.Zb(14,"ngx-context-menu"),b.Kc(15,"\n        "),b.Zb(16,"ngx-context-menu-item",5),b.Kc(17,"\n            "),b.Zb(18,"ngx-menu-content"),b.Kc(19,"Menu"),b.Yb(),b.Kc(20,"\n        "),b.Yb(),b.Kc(21,"\n\n        "),b.Zb(22,"ngx-context-menu-item"),b.Kc(23,"\n            "),b.Zb(24,"ngx-menu-content"),b.Kc(25,"Column list"),b.Yb(),b.Kc(26,"\n\n            "),b.Ic(27,w,10,3,"ngx-context-menu-item",6),b.Kc(28,"\n        "),b.Yb(),b.Kc(29,"\n\n        "),b.Zb(30,"ngx-context-menu-item",7),b.hc("onClick",function(){return b.Bc(t),b.Ac(10).resetSchema()}),b.Kc(31,"\n            "),b.Zb(32,"ngx-menu-content"),b.Kc(33,"Reset table settings"),b.Yb(),b.Kc(34,"\n        "),b.Yb(),b.Kc(35,"\n    "),b.Yb(),b.Kc(36,"\n\n    "),b.Ub(37,"ngx-column",8),b.Kc(38,"\n\n    "),b.Ub(39,"ngx-column",9),b.Kc(40,"\n\n    "),b.Ic(41,Y,1,1,"ngx-column",10),b.Kc(42,"\n\n    "),b.Zb(43,"ngx-column",11),b.Kc(44,"\n        "),b.Ic(45,Z,5,0,"ng-template",12),b.Kc(46,"\n    "),b.Yb(),b.Kc(47,"\n"),b.Yb(),b.Kc(48,"\n")}if(2&n){var c=b.Ac(10);b.Gb(9),b.sc("source",e.data)("name",e.testName)("schema-version",1)("schema-columns",e.schema)("vertical-border",!1)("exclude-keys",b.uc(9,I)),b.Gb(18),b.sc("ngForOf",c.columnSchema),b.Gb(10),b.sc("is-draggable",!1),b.Gb(4),b.sc("ngForOf",c.modelColumnKeys)}},directives:[m.a,g.a,h.a,d.a,f.a,K.a,v.a,o.l,p.a,y.a,k.a,x.a],encapsulation:2,changeDetection:0}),S),U=((C=function e(){n(this,e)}).\u0275mod=b.Qb({type:C}),C.\u0275inj=b.Pb({factory:function(n){return new(n||C)},imports:[[o.b,s.a,a.b.forChild([{path:"",component:O}])]]}),C)}}])}();