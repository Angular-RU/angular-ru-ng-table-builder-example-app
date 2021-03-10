!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var c=n[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{lY0r:function(t,c,a){"use strict";a.r(c),a.d(c,"SampleFirstModule",function(){return C});var i=a("An66"),o=a("1VvW"),r=a("5Q2+"),l=a("zMYQ"),h=a("umqh"),s=a("kZht"),u=a("mcff"),d=a("aJOL"),g=a("3kIJ"),b=a("EmXI"),m=a("IOEv"),f=a("pTnX"),p=a("Tcl6"),V=a("UDV5"),k=a("hCLc"),w=a("WGpx"),v=a("qvIn");function j(e,n){1&e&&s.fc(0,"mat-spinner",17),2&e&&s.Dc("diameter",30)}var x,y,M=function(){return{standalone:!0}},D=((y=function(){function t(n,c,a){e(this,t),this.cd=n,this.dialog=c,this.ngZone=a,this.width="100%",this.height=null,this.rowHeight=null,this.dataSize="100x20",this.loading=!1,this.simple=[],this.regenerate=!1,this.idInterval=null}var c,a,i;return c=t,(a=[{key:"ngOnInit",value:function(){var e=this;this.updateTable(),this.ngZone.runOutsideAngular(function(){e.idInterval=window.setInterval(function(){e.regenerate&&e.updateTable()},14500)})}},{key:"ngOnDestroy",value:function(){window.clearInterval(this.idInterval)}},{key:"showSample",value:function(){this.dialog.open(h.a,{data:{title:"Overview simple table",description:"If you want enabled virtual scroll, you need use auto-height or height attribute.",code:'\x3c!-- simple - is Array any objects --\x3e\n<ngx-table-builder [source]="simple"></ngx-table-builder>\n\n\n\x3c!-- also you can set height, width for cell in table --\x3e\n<ngx-table-builder\n   [source]="simple"\n   [width]="width"\n   [height]="height"\n   [row-height]="rowHeight"\n></ngx-table-builder>\n'},height:"450px",width:"600px"})}},{key:"updateTable",value:function(){var e=this;switch(this.loading=!0,this.dataSize){case"10x5":l.a.generator(10,5).then(function(n){return e.setData(n)});break;case"100x20":l.a.generator(100,20).then(function(n){return e.setData(n)});break;case"1000x30":l.a.generator(1e3,30).then(function(n){return e.setData(n)});break;case"10000x50":l.a.generator(1e4,50).then(function(n){return e.setData(n)});break;case"100000x100":l.a.generator(1e5,100).then(function(n){return e.setData(n)})}this.cd.detectChanges()}},{key:"setData",value:function(e){var n=this;this.simple=e,window.setTimeout(function(){n.loading=!1,n.cd.detectChanges()},500)}}])&&n(c.prototype,a),i&&n(c,i),t}()).\u0275fac=function(e){return new(e||y)(s.dc(s.i),s.dc(u.b),s.dc(s.L))},y.\u0275cmp=s.Xb({type:y,selectors:[["sample-first"]],decls:84,vars:14,consts:[["header",""],[1,"simple-toolbar"],["class","spinner","strokeWidth","5",3,"diameter",4,"ngIf"],[3,"value","valueChange","selectionChange"],["value","10x5"],["value","100x20"],["value","1000x30"],["value","10000x50"],["value","100000x100"],[1,"red"],["matInput","","name","width",3,"ngModel","ngModelChange"],["matInput","","name","height","type","number",3,"ngModel","ngModelChange"],["matInput","","name","rowHeight","type","number",3,"ngModel","ngModelChange"],[1,"regenerate",3,"ngModel","ngModelOptions","ngModelChange"],["mat-raised-button","",3,"click"],[1,"content-visible"],[3,"source","width","height","row-height"],["strokeWidth","5",1,"spinner",3,"diameter"]],template:function(e,n){if(1&e&&(s.kc(0,"div",null,0),s.Vc(2,"\n    "),s.kc(3,"mat-toolbar",1),s.Vc(4,"\n        "),s.kc(5,"span"),s.Vc(6,"Virtual scroll table"),s.jc(),s.Vc(7,"\n        "),s.Tc(8,j,1,1,"mat-spinner",2),s.Vc(9,"\n    "),s.jc(),s.Vc(10,"\n\n    "),s.kc(11,"form"),s.Vc(12,"\n        "),s.kc(13,"mat-form-field"),s.Vc(14,"\n            "),s.kc(15,"mat-label"),s.Vc(16,"Data size"),s.jc(),s.Vc(17,"\n            "),s.kc(18,"mat-select",3),s.sc("valueChange",function(e){return n.dataSize=e})("selectionChange",function(){return n.updateTable()}),s.Vc(19,"\n                "),s.kc(20,"mat-option",4),s.Vc(21,"10 x 5"),s.jc(),s.Vc(22,"\n                "),s.kc(23,"mat-option",5),s.Vc(24,"100 x 20"),s.jc(),s.Vc(25,"\n                "),s.kc(26,"mat-option",6),s.Vc(27,"1000 x 30"),s.jc(),s.Vc(28,"\n                "),s.kc(29,"mat-option",7),s.Vc(30,"10 000 x 50"),s.jc(),s.Vc(31,"\n                "),s.kc(32,"mat-option",8),s.kc(33,"span",9),s.Vc(34,"100 000 x 100 (1.5Gb memory usage)"),s.jc(),s.jc(),s.Vc(35,"\n            "),s.jc(),s.Vc(36,"\n        "),s.jc(),s.Vc(37,"\n\n        "),s.kc(38,"mat-form-field"),s.Vc(39,"\n            "),s.kc(40,"mat-label"),s.Vc(41,"Table width"),s.jc(),s.Vc(42,"\n            "),s.kc(43,"label"),s.Vc(44,"\n                "),s.kc(45,"input",10),s.sc("ngModelChange",function(e){return n.width=e}),s.jc(),s.Vc(46,"\n            "),s.jc(),s.Vc(47,"\n        "),s.jc(),s.Vc(48,"\n\n        "),s.kc(49,"mat-form-field"),s.Vc(50,"\n            "),s.kc(51,"mat-label"),s.Vc(52,"Table height (px)"),s.jc(),s.Vc(53,"\n            "),s.kc(54,"label"),s.Vc(55,"\n                "),s.kc(56,"input",11),s.sc("ngModelChange",function(e){return n.height=e}),s.jc(),s.Vc(57,"\n            "),s.jc(),s.Vc(58,"\n        "),s.jc(),s.Vc(59,"\n\n        "),s.kc(60,"mat-form-field"),s.Vc(61,"\n            "),s.kc(62,"mat-label"),s.Vc(63,"Table row height"),s.jc(),s.Vc(64,"\n            "),s.kc(65,"label"),s.Vc(66,"\n                "),s.kc(67,"input",12),s.sc("ngModelChange",function(e){return n.rowHeight=e}),s.jc(),s.Vc(68,"\n            "),s.jc(),s.Vc(69,"\n        "),s.jc(),s.Vc(70,"\n\n        "),s.kc(71,"mat-checkbox",13),s.sc("ngModelChange",function(e){return n.regenerate=e}),s.Vc(72,"\n            Auto regenerate (15sec)\n        "),s.jc(),s.Vc(73,"\n\n        "),s.kc(74,"button",14),s.sc("click",function(){return n.showSample()}),s.Vc(75,"show code sample"),s.jc(),s.Vc(76,"\n    "),s.jc(),s.Vc(77,"\n"),s.jc(),s.Vc(78,"\n\n"),s.kc(79,"div",15),s.Vc(80,"\n    "),s.fc(81,"ngx-table-builder",16),s.Vc(82,"\n"),s.jc(),s.Vc(83,"\n")),2&e){var t=s.Lc(1);s.Rb(8),s.Dc("ngIf",n.loading),s.Rb(10),s.Dc("value",n.dataSize),s.Rb(27),s.Dc("ngModel",n.width),s.Rb(11),s.Dc("ngModel",n.height),s.Rb(11),s.Dc("ngModel",n.rowHeight),s.Rb(4),s.Dc("ngModel",n.regenerate)("ngModelOptions",s.Fc(13,M)),s.Rb(8),s.Qc("height","calc(100% - "+t.offsetHeight+"px)"),s.Rb(2),s.Dc("source",n.simple)("width",n.width)("height",n.height)("row-height",n.rowHeight)}},directives:[d.a,i.m,g.q,g.l,g.m,b.b,b.e,m.a,f.h,p.a,g.b,g.k,g.n,g.o,V.a,k.a,w.m,v.b],encapsulation:2,changeDetection:0}),y),C=((x=function n(){e(this,n)}).\u0275mod=s.bc({type:x}),x.\u0275inj=s.ac({factory:function(e){return new(e||x)},imports:[[i.b,r.a,o.b.forChild([{path:"",component:D}])]]}),x)}}])}();