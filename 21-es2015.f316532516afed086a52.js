(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"32Dg":function(n,e,t){"use strict";t.r(e),t.d(e,"SampleSixteenModule",function(){return U});var c=t("An66"),i=t("1VvW"),o=t("5Q2+"),s=t("b5Xb"),a=t("zMYQ"),l=t("kZht"),b=t("mcff"),r=t("aJOL"),m=t("hCLc"),u=t("1ZKX"),g=t("oTne"),d=t("YW/L"),h=t("t+BJ"),G=t("oIp9"),p=t("BL99"),x=t("j5U8"),f=t("UDV5"),k=t("ydE+");function v(n,e){if(1&n){const n=l.Xb();l.Vb(0,"ngx-context-menu-item",13),l.dc("onClick",function(t){l.xc(n);const c=e.$implicit;return l.hc(),l.wc(10).toggleColumnVisibility(c.key),t.preventDefault()}),l.Gc(1,"\n                "),l.Vb(2,"ngx-menu-content",14),l.Gc(3),l.Ub(),l.Gc(4,"\n                "),l.Vb(5,"ngx-menu-content",15),l.Gc(6,"\n                    "),l.Qb(7,"mat-checkbox",16),l.Gc(8,"\n                "),l.Ub(),l.Gc(9,"\n            "),l.Ub()}if(2&n){const n=e.$implicit;l.oc("visible",n.isModel),l.Cb(3),l.Hc(n.key),l.Cb(4),l.oc("checked",n.isVisible)}}function y(n,e){1&n&&l.Qb(0,"ngx-column",17),2&n&&l.oc("key",e.$implicit)}function w(n,e){1&n&&(l.Gc(0,"\n            "),l.Vb(1,"button",18),l.Vb(2,"mat-icon"),l.Gc(3,"info"),l.Ub(),l.Ub(),l.Gc(4,"\n        "))}const V=function(){return["reverseId"]};let C=(()=>{class n{constructor(n,e,t){this.dialog=n,this.cd=e,this.tableChanges=t,this.data=[],this.schema=null,this.testName="test",this.sub=null}ngOnInit(){var n;this.schema=JSON.parse(null!==(n=window.localStorage.getItem(this.testName))&&void 0!==n?n:"{}"),a.a.generator(3,10).then(n=>{this.data=n,this.cd.detectChanges()}),this.sub=this.tableChanges.events.subscribe(n=>this.save(n))}ngAfterViewInit(){document.querySelectorAll("pre code").forEach(n=>{hljs.highlightBlock(n)})}ngOnDestroy(){var n;null===(n=this.sub)||void 0===n||n.unsubscribe()}save(n){console.log("update schema",n),window.localStorage.setItem(this.testName,JSON.stringify(n))}}return n.\u0275fac=function(e){return new(e||n)(l.Ob(b.b),l.Ob(l.h),l.Ob(s.a))},n.\u0275cmp=l.Ib({type:n,selectors:[["sample-sixteen"]],decls:49,vars:10,consts:[[1,"simple-toolbar"],["mat-raised-button","",1,"show-simple"],[3,"source","name","schema-version","schema-columns","vertical-border","exclude-keys"],["table",""],["is-draggable","","is-filterable","","is-sortable",""],["contextTitle","","divider",""],[3,"visible","onClick",4,"ngFor","ngForOf"],["divider","",3,"onClick"],["key","id","sticky","","custom-key","","width","100","vertical-line","","important-template","",3,"is-draggable"],["key","reverseId","custom-key","","width","150","vertical-line","","important-template",""],[3,"key",4,"ngFor","ngForOf"],["key","edit","custom-key","","width","60","vertical-line","","sticky-end","","empty-head",""],["ngx-td","","row",""],[3,"visible","onClick"],["no-margin",""],["no-margin","","align-center",""],["color","primary",3,"checked"],[3,"key"],["mat-button",""]],template:function(n,e){if(1&n){const n=l.Xb();l.Vb(0,"mat-toolbar",0),l.Gc(1,"\n    "),l.Vb(2,"span"),l.Gc(3,"Persistent state"),l.Ub(),l.Gc(4,"\n    "),l.Vb(5,"button",1),l.Gc(6,"show code sample"),l.Ub(),l.Gc(7,"\n"),l.Ub(),l.Gc(8,"\n\n"),l.Vb(9,"ngx-table-builder",2,3),l.Gc(11,"\n    "),l.Qb(12,"ngx-options",4),l.Gc(13,"\n\n    "),l.Vb(14,"ngx-context-menu"),l.Gc(15,"\n        "),l.Vb(16,"ngx-context-menu-item",5),l.Gc(17,"\n            "),l.Vb(18,"ngx-menu-content"),l.Gc(19,"Menu"),l.Ub(),l.Gc(20,"\n        "),l.Ub(),l.Gc(21,"\n\n        "),l.Vb(22,"ngx-context-menu-item"),l.Gc(23,"\n            "),l.Vb(24,"ngx-menu-content"),l.Gc(25,"Column list"),l.Ub(),l.Gc(26,"\n\n            "),l.Ec(27,v,10,3,"ngx-context-menu-item",6),l.Gc(28,"\n        "),l.Ub(),l.Gc(29,"\n\n        "),l.Vb(30,"ngx-context-menu-item",7),l.dc("onClick",function(){return l.xc(n),l.wc(10).resetSchema()}),l.Gc(31,"\n            "),l.Vb(32,"ngx-menu-content"),l.Gc(33,"Reset table settings"),l.Ub(),l.Gc(34,"\n        "),l.Ub(),l.Gc(35,"\n    "),l.Ub(),l.Gc(36,"\n\n    "),l.Qb(37,"ngx-column",8),l.Gc(38,"\n\n    "),l.Qb(39,"ngx-column",9),l.Gc(40,"\n\n    "),l.Ec(41,y,1,1,"ngx-column",10),l.Gc(42,"\n\n    "),l.Vb(43,"ngx-column",11),l.Gc(44,"\n        "),l.Ec(45,w,5,0,"ng-template",12),l.Gc(46,"\n    "),l.Ub(),l.Gc(47,"\n"),l.Ub(),l.Gc(48,"\n")}if(2&n){const n=l.wc(10);l.Cb(9),l.oc("source",e.data)("name",e.testName)("schema-version",1)("schema-columns",e.schema)("vertical-border",!1)("exclude-keys",l.qc(9,V)),l.Cb(18),l.oc("ngForOf",n.columnSchema),l.Cb(10),l.oc("is-draggable",!1),l.Cb(4),l.oc("ngForOf",n.modelColumnKeys)}},directives:[r.a,m.a,u.a,g.a,d.a,h.a,G.a,c.l,p.a,x.a,f.a,k.a],encapsulation:2,changeDetection:0}),n})(),U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=l.Mb({type:n}),n.\u0275inj=l.Lb({imports:[[c.b,o.a,i.b.forChild([{path:"",component:C}])]]}),n})()}}]);