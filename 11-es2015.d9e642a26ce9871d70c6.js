(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{lY0r:function(e,t,n){"use strict";n.r(t),n.d(t,"SampleFirstModule",(function(){return v}));var a=n("An66"),i=n("1VvW"),c=n("5Q2+"),o=n("zMYQ"),l=n("umqh"),r=n("kZht"),b=n("mcff"),h=n("aJOL"),s=n("3kIJ"),d=n("EmXI"),g=n("IOEv"),u=n("pTnX"),m=n("Tcl6"),p=n("UDV5"),K=n("hCLc"),f=n("1ZKX"),w=n("qvIn");function W(e,t){1&e&&r.Sb(0,"mat-spinner",17),2&e&&r.qc("diameter",30)}const X=function(){return{standalone:!0}};let x=(()=>{class e{constructor(e,t,n){this.cd=e,this.dialog=t,this.ngZone=n,this.width="100%",this.height=null,this.rowHeight=null,this.dataSize="100x20",this.loading=!1,this.simple=[],this.regenerate=!1,this.idInterval=null}ngOnInit(){this.updateTable(),this.ngZone.runOutsideAngular(()=>{this.idInterval=window.setInterval(()=>{this.regenerate&&this.updateTable()},14500)})}ngOnDestroy(){window.clearInterval(this.idInterval)}showSample(){this.dialog.open(l.a,{data:{title:"Overview simple table",description:"If you want enabled virtual scroll, you need use auto-height or height attribute.",code:'\x3c!-- simple - is Array any objects --\x3e\n<ngx-table-builder [source]="simple"></ngx-table-builder>\n\n\n\x3c!-- also you can set height, width for cell in table --\x3e\n<ngx-table-builder\n   [source]="simple"\n   [width]="width"\n   [height]="height"\n   [row-height]="rowHeight"\n></ngx-table-builder>\n'},height:"450px",width:"600px"})}updateTable(){switch(this.loading=!0,this.dataSize){case"10x5":o.a.generator(10,5).then(e=>this.setData(e));break;case"100x20":o.a.generator(100,20).then(e=>this.setData(e));break;case"1000x30":o.a.generator(1e3,30).then(e=>this.setData(e));break;case"10000x50":o.a.generator(1e4,50).then(e=>this.setData(e));break;case"100000x100":o.a.generator(1e5,100).then(e=>this.setData(e))}this.cd.detectChanges()}setData(e){this.simple=e,window.setTimeout(()=>{this.loading=!1,this.cd.detectChanges()},500)}}return e.\u0275fac=function(t){return new(t||e)(r.Qb(r.h),r.Qb(b.b),r.Qb(r.C))},e.\u0275cmp=r.Kb({type:e,selectors:[["sample-first"]],decls:84,vars:14,consts:[["header",""],[1,"simple-toolbar"],["class","spinner","strokeWidth","5",3,"diameter",4,"ngIf"],[3,"value","valueChange","selectionChange"],["value","10x5"],["value","100x20"],["value","1000x30"],["value","10000x50"],["value","100000x100"],[1,"red"],["matInput","","name","width",3,"ngModel","ngModelChange"],["matInput","","name","height","type","number",3,"ngModel","ngModelChange"],["matInput","","name","rowHeight","type","number",3,"ngModel","ngModelChange"],[1,"regenerate",3,"ngModel","ngModelOptions","ngModelChange"],["mat-raised-button","",3,"click"],[1,"content-visible"],[3,"source","width","height","row-height"],["strokeWidth","5",1,"spinner",3,"diameter"]],template:function(e,t){if(1&e&&(r.Xb(0,"div",null,0),r.Kc(2,"\n    "),r.Xb(3,"mat-toolbar",1),r.Kc(4,"\n        "),r.Xb(5,"span"),r.Kc(6,"Virtual scroll table"),r.Wb(),r.Kc(7,"\n        "),r.Ic(8,W,1,1,"mat-spinner",2),r.Kc(9,"\n    "),r.Wb(),r.Kc(10,"\n\n    "),r.Xb(11,"form"),r.Kc(12,"\n        "),r.Xb(13,"mat-form-field"),r.Kc(14,"\n            "),r.Xb(15,"mat-label"),r.Kc(16,"Data size"),r.Wb(),r.Kc(17,"\n            "),r.Xb(18,"mat-select",3),r.fc("valueChange",(function(e){return t.dataSize=e}))("selectionChange",(function(){return t.updateTable()})),r.Kc(19,"\n                "),r.Xb(20,"mat-option",4),r.Kc(21,"10 x 5"),r.Wb(),r.Kc(22,"\n                "),r.Xb(23,"mat-option",5),r.Kc(24,"100 x 20"),r.Wb(),r.Kc(25,"\n                "),r.Xb(26,"mat-option",6),r.Kc(27,"1000 x 30"),r.Wb(),r.Kc(28,"\n                "),r.Xb(29,"mat-option",7),r.Kc(30,"10 000 x 50"),r.Wb(),r.Kc(31,"\n                "),r.Xb(32,"mat-option",8),r.Xb(33,"span",9),r.Kc(34,"100 000 x 100 (1.5Gb memory usage)"),r.Wb(),r.Wb(),r.Kc(35,"\n            "),r.Wb(),r.Kc(36,"\n        "),r.Wb(),r.Kc(37,"\n\n        "),r.Xb(38,"mat-form-field"),r.Kc(39,"\n            "),r.Xb(40,"mat-label"),r.Kc(41,"Table width"),r.Wb(),r.Kc(42,"\n            "),r.Xb(43,"label"),r.Kc(44,"\n                "),r.Xb(45,"input",10),r.fc("ngModelChange",(function(e){return t.width=e})),r.Wb(),r.Kc(46,"\n            "),r.Wb(),r.Kc(47,"\n        "),r.Wb(),r.Kc(48,"\n\n        "),r.Xb(49,"mat-form-field"),r.Kc(50,"\n            "),r.Xb(51,"mat-label"),r.Kc(52,"Table height (px)"),r.Wb(),r.Kc(53,"\n            "),r.Xb(54,"label"),r.Kc(55,"\n                "),r.Xb(56,"input",11),r.fc("ngModelChange",(function(e){return t.height=e})),r.Wb(),r.Kc(57,"\n            "),r.Wb(),r.Kc(58,"\n        "),r.Wb(),r.Kc(59,"\n\n        "),r.Xb(60,"mat-form-field"),r.Kc(61,"\n            "),r.Xb(62,"mat-label"),r.Kc(63,"Table row height"),r.Wb(),r.Kc(64,"\n            "),r.Xb(65,"label"),r.Kc(66,"\n                "),r.Xb(67,"input",12),r.fc("ngModelChange",(function(e){return t.rowHeight=e})),r.Wb(),r.Kc(68,"\n            "),r.Wb(),r.Kc(69,"\n        "),r.Wb(),r.Kc(70,"\n\n        "),r.Xb(71,"mat-checkbox",13),r.fc("ngModelChange",(function(e){return t.regenerate=e})),r.Kc(72,"\n            Auto regenerate (15sec)\n        "),r.Wb(),r.Kc(73,"\n\n        "),r.Xb(74,"button",14),r.fc("click",(function(){return t.showSample()})),r.Kc(75,"show code sample"),r.Wb(),r.Kc(76,"\n    "),r.Wb(),r.Kc(77,"\n"),r.Wb(),r.Kc(78,"\n\n"),r.Xb(79,"div",15),r.Kc(80,"\n    "),r.Sb(81,"ngx-table-builder",16),r.Kc(82,"\n"),r.Wb(),r.Kc(83,"\n")),2&e){const e=r.yc(1);r.Eb(8),r.qc("ngIf",t.loading),r.Eb(10),r.qc("value",t.dataSize),r.Eb(27),r.qc("ngModel",t.width),r.Eb(11),r.qc("ngModel",t.height),r.Eb(11),r.qc("ngModel",t.rowHeight),r.Eb(4),r.qc("ngModel",t.regenerate)("ngModelOptions",r.sc(13,X)),r.Eb(8),r.Fc("height","calc(100% - "+e.offsetHeight+"px)"),r.Eb(2),r.qc("source",t.simple)("width",t.width)("height",t.height)("row-height",t.rowHeight)}},directives:[h.a,a.m,s.q,s.l,s.m,d.b,d.e,g.a,u.i,m.a,s.b,s.k,s.n,s.o,p.a,K.a,f.a,w.b],encapsulation:2,changeDetection:0}),e})(),v=(()=>{class e{}return e.\u0275mod=r.Ob({type:e}),e.\u0275inj=r.Nb({factory:function(t){return new(t||e)},imports:[[a.b,c.a,i.b.forChild([{path:"",component:x}])]]}),e})()}}]);