(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{vx63:function(c,t,n){"use strict";n.r(t),n.d(t,"SampleFirstSecondModule",function(){return x});var e=n("An66"),i=n("1VvW"),a=n("5Q2+"),o=n("Vhhf"),s=n("zMYQ"),r=n("3kIJ"),d=n("mcff"),l=n("kZht"),u=n("hCLc"),m=n("EmXI"),f=n("Tcl6");function h(c,t){if(1&c&&(l.kc(0,"mat-form-field"),l.Vc(1,"\n        "),l.fc(2,"input",4),l.Vc(3,"\n    "),l.jc()),2&c){const c=t.$implicit;l.Rb(2),l.Ec("placeholder",c.key),l.Dc("formControlName",c.key)}}function p(c,t){if(1&c&&(l.kc(0,"form",2),l.Vc(1,"\n    "),l.Tc(2,h,4,2,"mat-form-field",3),l.xc(3,"keyvalue"),l.Vc(4,"\n"),l.jc()),2&c){const c=l.wc();l.Dc("formGroup",c.form),l.Rb(2),l.Dc("ngForOf",l.yc(3,2,c.data))}}let g=(()=>{class c{constructor(c,t,n){this.data=c,this.dialogRef=t,this.fb=n,this.form=null}ngOnInit(){this.form=this.fb.group(Object.assign(Object.assign({},this.data),{id:new r.d({value:this.data.id,disabled:!0})}))}save(){var c;this.dialogRef.close(null===(c=this.form)||void 0===c?void 0:c.getRawValue())}}return c.\u0275fac=function(t){return new(t||c)(l.dc(d.a),l.dc(d.d),l.dc(r.c))},c.\u0275cmp=l.Xb({type:c,selectors:[["dialog-template"]],decls:8,vars:1,consts:[[3,"formGroup",4,"ngIf"],["mat-button","",1,"dialog-close",3,"click"],[3,"formGroup"],[4,"ngFor","ngForOf"],["matInput","",3,"placeholder","formControlName"]],template:function(c,t){1&c&&(l.kc(0,"h3"),l.Vc(1,"Edit"),l.jc(),l.Vc(2,"\n\n"),l.Tc(3,p,5,4,"form",0),l.Vc(4,"\n\n"),l.kc(5,"button",1),l.sc("click",function(){return t.save()}),l.Vc(6,"Save"),l.jc(),l.Vc(7,"\n")),2&c&&(l.Rb(3),l.Dc("ngIf",t.form))},directives:[e.m,u.a,r.q,r.l,r.f,e.l,m.b,f.a,r.b,r.k,r.e],pipes:[e.g],encapsulation:2}),c})();var b=n("aJOL"),k=n("WGpx"),V=n("ydE+");function v(c,t){if(1&c&&l.Vc(0),2&c){const c=l.wc().$implicit;l.Wc(c)}}function w(c,t){1&c&&l.Vc(0),2&c&&l.Wc(t.$implicit)}function j(c,t){1&c&&(l.kc(0,"ngx-column",7),l.Vc(1,"\n        "),l.Tc(2,v,1,1,"ng-template",8),l.Vc(3,"\n        "),l.Tc(4,w,1,1,"ng-template",9),l.Vc(5,"\n    "),l.jc()),2&c&&l.Dc("key",t.$implicit)}function y(c,t){if(1&c){const c=l.mc();l.Vc(0,"\n            "),l.kc(1,"button",10),l.sc("click",function(){l.Mc(c);const n=t.$implicit;return l.wc().edit(n)}),l.kc(2,"mat-icon"),l.Vc(3,"edit"),l.jc(),l.jc(),l.Vc(4,"\n            "),l.kc(5,"button",10),l.sc("click",function(){l.Mc(c);const n=t.$implicit;return l.wc().delete(n)}),l.kc(6,"mat-icon"),l.Vc(7,"delete"),l.jc(),l.jc(),l.Vc(8,"\n        ")}}let O=(()=>{class c{constructor(c,t,n){this.cd=c,this.dialog=t,this.ngZone=n,this.data=[],this.idInterval=null}ngOnInit(){this.ngZone.runOutsideAngular(()=>{this.idInterval=window.setInterval(()=>{this.updateTable()},14500)})}ngOnDestroy(){window.clearInterval(this.idInterval)}add(){this.updateTable()}delete(c){this.data=this.data.filter(t=>t!==c),Object(o.c)(this.cd)}edit(c){this.ngZone.run(()=>{this.dialog.open(g,{data:c,width:"1024px"}).afterClosed().subscribe(c=>{c&&(this.data=this.data.map(t=>t.id===c.id?Object.assign({},c):t),Object(o.c)(this.cd))})})}updateTable(){const c=this.data.length?Math.max(...this.data.map(c=>c.id)):0;s.a.generator(1,10,c).then(c=>{this.data=this.data.concat(c),this.cd.detectChanges()})}}return c.\u0275fac=function(t){return new(t||c)(l.dc(l.i),l.dc(d.b),l.dc(l.L))},c.\u0275cmp=l.Xb({type:c,selectors:[["sample-first-second"]],decls:23,vars:2,consts:[[1,"simple-toolbar"],["mat-button","",1,"regenerate",3,"click"],[3,"source"],["table",""],[3,"key",4,"ngFor","ngForOf"],["custom-key","","key","action","sticky-end","","empty-head","","width","140"],["ngx-td","","row",""],[3,"key"],["ngx-th",""],["ngx-td",""],["mat-button","",1,"my-action",3,"click"]],template:function(c,t){if(1&c&&(l.kc(0,"div"),l.Vc(1,"\n    "),l.kc(2,"mat-toolbar",0),l.Vc(3,"\n        "),l.kc(4,"span"),l.Vc(5,"Auto push"),l.jc(),l.Vc(6,"\n\n        "),l.kc(7,"button",1),l.sc("click",function(){return t.add()}),l.Vc(8,"Add"),l.jc(),l.Vc(9,"\n    "),l.jc(),l.Vc(10,"\n"),l.jc(),l.Vc(11,"\n\n"),l.kc(12,"ngx-table-builder",2,3),l.Vc(14,"\n    "),l.Tc(15,j,6,1,"ngx-column",4),l.Vc(16,"\n\n    "),l.kc(17,"ngx-column",5),l.Vc(18,"\n        "),l.Tc(19,y,9,0,"ng-template",6),l.Vc(20,"\n    "),l.jc(),l.Vc(21,"\n"),l.jc(),l.Vc(22,"\n")),2&c){const c=l.Lc(13);l.Rb(12),l.Dc("source",t.data),l.Rb(3),l.Dc("ngForOf",c.modelColumnKeys)}},directives:[b.a,u.a,k.m,e.l,k.a,k.p,k.q,V.a],encapsulation:2,changeDetection:0}),c})(),x=(()=>{class c{}return c.\u0275mod=l.bc({type:c}),c.\u0275inj=l.ac({factory:function(t){return new(t||c)},imports:[[e.b,a.a,i.b.forChild([{path:"",component:O}])]]}),c})()}}]);