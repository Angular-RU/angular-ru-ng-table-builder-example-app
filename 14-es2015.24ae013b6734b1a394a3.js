(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Dg70:function(n,e,l){"use strict";l.d(e,"a",(function(){return a})),l.d(e,"b",(function(){return i}));var t=l("8Y7J"),a=(l("BL99"),t.rb({encapsulation:2,styles:[],data:{}}));function i(n){return t.Pb(2,[],null,null)}},U5XC:function(n,e,l){"use strict";l.r(e);var t=l("8Y7J");class a{}var i=l("t68o"),o=l("xYTU"),c=l("M+Kz"),r=l("COKN"),u=l("pMnS"),b=l("Z5h4"),m=l("s7LF"),s=l("r0V8"),d=l("5GAg"),h=l("omvX"),k=l("j5U8"),p=l("Dg70"),f=l("BL99"),g=l("SVse"),x=l("dJrM"),y=l("HsOI"),v=l("Xd0L"),F=l("IP0z"),w=l("/HVE"),D=l("ZwOa"),L=l("oapL"),C=l("FbN9"),N=l("BzsH"),_=l("/+Uf"),M=l("iw8E"),I=l("tB7w"),T=l("LfaC"),O=l("qZCv"),P=l("AsIM"),S=l("PkaT"),z=l("S8xl"),E=l("bp/E"),K=l("1ZKX"),q=l("ctyY"),j=l("oFYP");const A=["Maia","Asher","Olivia","Atticus","Amelia","Jack","Charlotte","Theodore","Isla","Oliver","Isabella","Jasper","Cora","Levi","Violet","Arthur","Mia","Thomas","Elizabeth"],R=["maroon","red","orange","yellow","olive","green","purple","fuchsia","lime","teal","aqua","blue","navy","black","gray"];class B{constructor(n,e){this.cd=n,this.ngZone=e,this.data=[],this.regenerate=!1,this.idInterval=null,this.timeout=null}ngOnInit(){this.updateTable(),this.ngZone.runOutsideAngular(()=>{this.idInterval=window.setInterval(()=>{this.regenerate&&(this.updateTable(),this.cd.detectChanges())},14500)})}ngOnDestroy(){window.clearInterval(this.idInterval)}updateRow(n,e,l){const t=Object.assign(Object.assign({},n),{[e]:l});this.data=function(n,e,l){const t=n.slice(0);return t[e]=l,t}(this.data,this.data.indexOf(n),t),Object(j.a)(this.cd)}asyncRow(n,e,l){window.clearTimeout(this.timeout),this.timeout=window.setTimeout(()=>this.updateRow(n,e,l),500)}ngAfterViewInit(){document.querySelectorAll("pre code").forEach(n=>{hljs.highlightBlock(n)})}updateTable(){this.data=new Array(1e3).fill(0).map((n,e)=>({id:e,symbol:R[Math.round(Math.random()*(R.length-1))],item:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',cost:Math.floor(100*Math.random())+1,active:!0,name:A[Math.round(Math.random()*(A.length-1))]+" "+A[Math.round(Math.random()*(A.length-1))].charAt(0)+".",weight:Math.round(100*Math.random()).toString(),firstName:A[Math.round(Math.random()*(A.length-1))],lastName:A[Math.round(Math.random()*(A.length-1))],dateOfBirth:1985,spokenLanguages:{native:"English"+Math.round(100*Math.random()).toString(),fluent:"Spanish"+Math.round(100*Math.random()).toString(),intermediate:"Chinese"+Math.round(100*Math.random()).toString()}}))}}var V=t.rb({encapsulation:0,styles:[".cost-disable[_ngcontent-%COMP%] {\n                opacity: 0.5;\n                color: red;\n                text-decoration: line-through;\n            }",".example-full-width[_ngcontent-%COMP%] {\n        padding: 5px;\n    }"],data:{}});function X(n){return t.Pb(0,[(n()(),t.ib(0,null,null,0))],null,null)}function H(n){return t.Pb(0,[(n()(),t.Nb(-1,null,["\n            "])),(n()(),t.tb(1,0,null,null,5,"div",[],[[24,"@.disabled",0]],null,null,null,null)),(n()(),t.Nb(-1,null,["\n                "])),(n()(),t.tb(3,0,null,null,2,"mat-checkbox",[["class","mat-checkbox"]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null]],[[null,"change"]],(function(n,e,l){var t=!0;return"change"===e&&(t=!1!==n.component.updateRow(n.context.$implicit,"active",l.checked)&&t),t}),b.b,b.a)),t.Kb(5120,null,m.k,(function(n){return[n]}),[s.b]),t.sb(5,8568832,null,0,s.b,[t.k,t.h,d.e,t.y,[8,null],[2,s.a],[2,h.a]],{checked:[0,"checked"]},{change:"change"}),(n()(),t.Nb(-1,null,["\n            "])),(n()(),t.Nb(-1,null,["\n        "]))],(function(n,e){var l;n(e,5,0,null==(l=e.context.$implicit)?null:l.active)}),(function(n,e){n(e,1,0,!0),n(e,3,0,t.Fb(e,5).id,null,t.Fb(e,5).indeterminate,t.Fb(e,5).checked,t.Fb(e,5).disabled,"before"==t.Fb(e,5).labelPosition,"NoopAnimations"===t.Fb(e,5)._animationMode)}))}function J(n){return t.Pb(0,[(n()(),t.Nb(-1,null,["\n            "])),(n()(),t.tb(1,0,null,null,2,"span",[],[[2,"cost-disable",null]],null,null,null,null)),(n()(),t.Nb(2,null,["",""])),t.Jb(3,1),(n()(),t.Nb(-1,null,["\n        "]))],null,(function(n,e){var l;n(e,1,0,!(null!=(l=e.context.$implicit)&&l.active));var a,i=t.Ob(e,2,0,n(e,3,0,t.Fb(e.parent,0),null==(a=e.context.$implicit)?null:a.cost));n(e,2,0,i)}))}function $(n){return t.Pb(0,[(n()(),t.Nb(0,null,[" "," "]))],null,(function(n,e){n(e,0,0,e.context.$implicit)}))}function U(n){return t.Pb(0,[(n()(),t.tb(0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),t.Nb(-1,null,["\n            "])),(n()(),t.ib(0,null,null,1,null,$)),t.sb(3,16384,[[13,4]],0,k.a,[[2,t.L]],{type:[0,"type"]},null),(n()(),t.Nb(-1,null,["\n        "]))],(function(n,e){n(e,3,0,"")}),null)}function Z(n){return t.Pb(0,[(n()(),t.Nb(0,null,["",""]))],null,(function(n,e){n(e,0,0,e.context.$implicit)}))}function Y(n){return t.Pb(0,[(n()(),t.tb(0,0,null,null,10,"ngx-column",[],null,null,null,p.b,p.a)),t.sb(1,49152,[[3,4]],2,f.a,[],{key:[0,"key"]},null),t.Lb(603979776,12,{th:0}),t.Lb(603979776,13,{td:0}),(n()(),t.Nb(-1,null,["\n        "])),(n()(),t.ib(16777216,null,null,1,null,U)),t.sb(6,16384,null,0,g.m,[t.O,t.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),t.Nb(-1,null,["\n\n        "])),(n()(),t.ib(0,[["other",2]],null,1,null,Z)),t.sb(9,16384,[[13,4]],0,k.a,[[2,t.L]],{nowrap:[0,"nowrap"],type:[1,"type"]},null),(n()(),t.Nb(-1,null,["\n    "]))],(function(n,e){n(e,1,0,e.context.$implicit),n(e,6,0,"symbol"===e.context.$implicit,t.Fb(e,8)),n(e,9,0,!1,"")}),null)}function G(n){return t.Pb(0,[(n()(),t.Nb(-1,null,["\n            "])),(n()(),t.tb(1,0,null,null,23,"mat-form-field",[["class","example-full-width mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,x.b,x.a)),t.sb(2,7520256,null,9,y.b,[t.k,t.h,[2,v.f],[2,F.b],[2,y.a],w.a,t.y,[2,h.a]],null,null),t.Lb(603979776,16,{_controlNonStatic:0}),t.Lb(335544320,17,{_controlStatic:0}),t.Lb(603979776,18,{_labelChildNonStatic:0}),t.Lb(335544320,19,{_labelChildStatic:0}),t.Lb(603979776,20,{_placeholderChild:0}),t.Lb(603979776,21,{_errorChildren:1}),t.Lb(603979776,22,{_hintChildren:1}),t.Lb(603979776,23,{_prefixChildren:1}),t.Lb(603979776,24,{_suffixChildren:1}),(n()(),t.Nb(-1,1,["\n                "])),(n()(),t.tb(13,0,null,1,10,"div",[],[[24,"@.disabled",0]],null,null,null,null)),(n()(),t.Nb(-1,null,["\n                    "])),(n()(),t.tb(15,0,null,null,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["placeholder","Editable field"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(n,e,l){var a=!0,i=n.component;return"input"===e&&(a=!1!==t.Fb(n,16)._handleInput(l.target.value)&&a),"blur"===e&&(a=!1!==t.Fb(n,16).onTouched()&&a),"compositionstart"===e&&(a=!1!==t.Fb(n,16)._compositionStart()&&a),"compositionend"===e&&(a=!1!==t.Fb(n,16)._compositionEnd(l.target.value)&&a),"blur"===e&&(a=!1!==t.Fb(n,21)._focusChanged(!1)&&a),"focus"===e&&(a=!1!==t.Fb(n,21)._focusChanged(!0)&&a),"input"===e&&(a=!1!==t.Fb(n,21)._onInput()&&a),"ngModelChange"===e&&(a=!1!==i.asyncRow(n.context.$implicit,"symbol",l)&&a),a}),null,null)),t.sb(16,16384,null,0,m.d,[t.D,t.k,[2,m.a]],null,null),t.Kb(1024,null,m.k,(function(n){return[n]}),[m.d]),t.sb(18,671744,null,0,m.p,[[8,null],[8,null],[8,null],[6,m.k]],{model:[0,"model"]},{update:"ngModelChange"}),t.Kb(2048,null,m.l,null,[m.p]),t.sb(20,16384,null,0,m.m,[[4,m.l]],null,null),t.sb(21,999424,null,0,D.a,[t.k,w.a,[6,m.l],[2,m.o],[2,m.h],v.b,[8,null],L.a,t.y],{placeholder:[0,"placeholder"]},null),t.Kb(2048,[[16,4],[17,4]],y.c,null,[D.a]),(n()(),t.Nb(-1,null,["\n                "])),(n()(),t.Nb(-1,1,["\n            "])),(n()(),t.Nb(-1,null,["\n        "]))],(function(n,e){var l;n(e,18,0,null==(l=e.context.$implicit)?null:l.symbol),n(e,21,0,"Editable field")}),(function(n,e){n(e,1,1,["standard"==t.Fb(e,2).appearance,"fill"==t.Fb(e,2).appearance,"outline"==t.Fb(e,2).appearance,"legacy"==t.Fb(e,2).appearance,t.Fb(e,2)._control.errorState,t.Fb(e,2)._canLabelFloat,t.Fb(e,2)._shouldLabelFloat(),t.Fb(e,2)._hasFloatingLabel(),t.Fb(e,2)._hideControlPlaceholder(),t.Fb(e,2)._control.disabled,t.Fb(e,2)._control.autofilled,t.Fb(e,2)._control.focused,"accent"==t.Fb(e,2).color,"warn"==t.Fb(e,2).color,t.Fb(e,2)._shouldForward("untouched"),t.Fb(e,2)._shouldForward("touched"),t.Fb(e,2)._shouldForward("pristine"),t.Fb(e,2)._shouldForward("dirty"),t.Fb(e,2)._shouldForward("valid"),t.Fb(e,2)._shouldForward("invalid"),t.Fb(e,2)._shouldForward("pending"),!t.Fb(e,2)._animationsEnabled]),n(e,13,0,!0),n(e,15,1,[t.Fb(e,20).ngClassUntouched,t.Fb(e,20).ngClassTouched,t.Fb(e,20).ngClassPristine,t.Fb(e,20).ngClassDirty,t.Fb(e,20).ngClassValid,t.Fb(e,20).ngClassInvalid,t.Fb(e,20).ngClassPending,t.Fb(e,21)._isServer,t.Fb(e,21).id,t.Fb(e,21).placeholder,t.Fb(e,21).disabled,t.Fb(e,21).required,t.Fb(e,21).readonly&&!t.Fb(e,21)._isNativeSelect||null,t.Fb(e,21)._ariaDescribedby||null,t.Fb(e,21).errorState,t.Fb(e,21).required.toString()])}))}function Q(n){return t.Pb(2,[t.Hb(0,g.c,[t.t]),(n()(),t.tb(1,0,null,null,15,"mat-toolbar",[["class","simple-toolbar mat-toolbar"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,C.b,C.a)),t.sb(2,4243456,null,1,N.a,[t.k,w.a,g.d],null,null),t.Lb(603979776,1,{_toolbarRows:1}),(n()(),t.Nb(-1,0,["\n    "])),(n()(),t.tb(5,0,null,0,1,"span",[],null,null,null,null,null)),(n()(),t.Nb(-1,null,["Example dynamic changes"])),(n()(),t.Nb(-1,0,["\n\n    "])),(n()(),t.tb(8,0,null,0,7,"mat-checkbox",[["class","regenerate mat-checkbox"]],[[8,"id",0],[1,"tabindex",0],[2,"mat-checkbox-indeterminate",null],[2,"mat-checkbox-checked",null],[2,"mat-checkbox-disabled",null],[2,"mat-checkbox-label-before",null],[2,"_mat-animation-noopable",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],(function(n,e,l){var t=!0;return"ngModelChange"===e&&(t=!1!==(n.component.regenerate=l)&&t),t}),b.b,b.a)),t.sb(9,8568832,null,0,s.b,[t.k,t.h,d.e,t.y,[8,null],[2,s.a],[2,h.a]],null,null),t.Kb(1024,null,m.k,(function(n){return[n]}),[s.b]),t.sb(11,671744,null,0,m.p,[[8,null],[8,null],[8,null],[6,m.k]],{model:[0,"model"],options:[1,"options"]},{update:"ngModelChange"}),t.Ib(12,{standalone:0}),t.Kb(2048,null,m.l,null,[m.p]),t.sb(14,16384,null,0,m.m,[[4,m.l]],null,null),(n()(),t.Nb(-1,0,["\n        Auto regenerate (15sec)\n    "])),(n()(),t.Nb(-1,0,["\n"])),(n()(),t.Nb(-1,null,["\n\n"])),(n()(),t.Nb(-1,null,["\n\n"])),(n()(),t.tb(19,0,null,null,48,"ngx-table-builder",[],null,null,null,_.b,_.a)),t.Kb(4608,null,M.a,M.a,[]),t.Kb(4608,null,I.a,I.a,[T.a,t.y]),t.Kb(135680,null,O.a,O.a,[t.y]),t.Kb(4608,null,P.a,P.a,[]),t.Kb(4608,null,S.a,S.a,[]),t.Kb(4608,null,z.a,z.a,[t.q]),t.Kb(4608,null,E.a,E.a,[M.a]),t.sb(27,14401536,[["table",4]],6,K.a,[t.h,t.q],{source:[0,"source"],verticalBorder:[1,"verticalBorder"],rowHeight:[2,"rowHeight"]},null),t.Lb(603979776,2,{columnOptions:0}),t.Lb(603979776,3,{columnTemplates:1}),t.Lb(603979776,4,{contextMenuTemplate:0}),t.Lb(603979776,5,{headerTemplate:0}),t.Lb(603979776,6,{footerTemplate:0}),t.Lb(603979776,7,{filterTemplate:0}),(n()(),t.Nb(-1,null,["\n    "])),(n()(),t.tb(35,0,null,null,10,"ngx-column",[["important-template",""],["key","active"],["sticky",""],["vertical-line",""],["width","60"]],null,null,null,p.b,p.a)),t.sb(36,49152,[[3,4]],2,f.a,[],{width:[0,"width"],key:[1,"key"],stickyLeft:[2,"stickyLeft"],verticalLine:[3,"verticalLine"],importantTemplate:[4,"importantTemplate"]},null),t.Lb(603979776,8,{th:0}),t.Lb(603979776,9,{td:0}),(n()(),t.Nb(-1,null,["\n        "])),(n()(),t.ib(0,null,null,1,null,X)),t.sb(41,16384,[[8,4]],0,q.a,[[2,t.L]],{type:[0,"type"]},null),(n()(),t.Nb(-1,null,["\n        "])),(n()(),t.ib(0,null,null,1,null,H)),t.sb(44,16384,[[9,4]],0,k.a,[[2,t.L]],{row:[0,"row"],type:[1,"type"]},null),(n()(),t.Nb(-1,null,["\n    "])),(n()(),t.Nb(-1,null,["\n\n    "])),(n()(),t.tb(47,0,null,null,7,"ngx-column",[["important-template",""],["key","cost"]],null,null,null,p.b,p.a)),t.sb(48,49152,[[3,4]],2,f.a,[],{key:[0,"key"],importantTemplate:[1,"importantTemplate"]},null),t.Lb(603979776,10,{th:0}),t.Lb(603979776,11,{td:0}),(n()(),t.Nb(-1,null,["\n        "])),(n()(),t.ib(0,null,null,1,null,J)),t.sb(53,16384,[[11,4]],0,k.a,[[2,t.L]],{row:[0,"row"],type:[1,"type"]},null),(n()(),t.Nb(-1,null,["\n    "])),(n()(),t.Nb(-1,null,["\n\n    "])),(n()(),t.ib(16777216,null,null,1,null,Y)),t.sb(57,278528,null,0,g.l,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null),(n()(),t.Nb(-1,null,["\n\n    "])),(n()(),t.tb(59,0,null,null,7,"ngx-column",[["custom-key",""],["important-template",""],["key","symbol-edit"],["sticky-end",""],["vertical-line",""]],null,null,null,p.b,p.a)),t.sb(60,49152,[[3,4]],2,f.a,[],{key:[0,"key"],customKey:[1,"customKey"],stickyRight:[2,"stickyRight"],verticalLine:[3,"verticalLine"],importantTemplate:[4,"importantTemplate"]},null),t.Lb(603979776,14,{th:0}),t.Lb(603979776,15,{td:0}),(n()(),t.Nb(-1,null,["\n        "])),(n()(),t.ib(0,null,null,1,null,G)),t.sb(65,16384,[[15,4]],0,k.a,[[2,t.L]],{row:[0,"row"],type:[1,"type"]},null),(n()(),t.Nb(-1,null,["\n    "])),(n()(),t.Nb(-1,null,["\n"])),(n()(),t.Nb(-1,null,["\n"]))],(function(n,e){var l=e.component,a=l.regenerate,i=n(e,12,0,!0);n(e,11,0,a,i),n(e,27,0,l.data,!1,40),n(e,36,0,"60","active","","",""),n(e,41,0,""),n(e,44,0,"",""),n(e,48,0,"cost",""),n(e,53,0,"",""),n(e,57,0,t.Fb(e,27).modelColumnKeys),n(e,60,0,"symbol-edit","","","",""),n(e,65,0,"","")}),(function(n,e){n(e,1,0,t.Fb(e,2)._toolbarRows.length>0,0===t.Fb(e,2)._toolbarRows.length),n(e,8,1,[t.Fb(e,9).id,null,t.Fb(e,9).indeterminate,t.Fb(e,9).checked,t.Fb(e,9).disabled,"before"==t.Fb(e,9).labelPosition,"NoopAnimations"===t.Fb(e,9)._animationMode,t.Fb(e,14).ngClassUntouched,t.Fb(e,14).ngClassTouched,t.Fb(e,14).ngClassPristine,t.Fb(e,14).ngClassDirty,t.Fb(e,14).ngClassValid,t.Fb(e,14).ngClassInvalid,t.Fb(e,14).ngClassPending])}))}function W(n){return t.Pb(0,[(n()(),t.tb(0,0,null,null,1,"sample-eight",[],null,null,null,Q,V)),t.sb(1,4440064,null,0,B,[t.h,t.y],null,null)],(function(n,e){n(e,1,0)}),null)}var nn=t.pb("sample-eight",B,W,{},{},[]),en=l("Mc5n"),ln=l("hOhj"),tn=l("BSYy"),an=l("POq0"),on=l("QQfA"),cn=l("gavF"),rn=l("s6ns"),un=l("JjoW"),bn=l("NHUw"),mn=l("cUpR"),sn=l("Fwaw"),dn=l("zMNK"),hn=l("BV1i"),kn=l("02hT"),pn=l("Q+lL"),fn=l("igqZ"),gn=l("W5yJ"),xn=l("dFDH"),yn=l("Gi4r"),vn=l("zQui"),Fn=l("8rEH"),wn=l("rWV4"),Dn=l("5Q2+"),Ln=l("iInd");l.d(e,"SampleEightModuleNgFactory",(function(){return Cn}));var Cn=t.qb(a,[],(function(n){return t.Cb([t.Db(512,t.j,t.ab,[[8,[i.a,o.a,o.b,c.a,r.a,u.a,nn]],[3,t.j],t.w]),t.Db(4608,g.o,g.n,[t.t,[2,g.G]]),t.Db(4608,en.g,en.g,[g.d,t.y,ln.e,en.i]),t.Db(4608,tn.a,tn.a,[[2,t.y]]),t.Db(4608,T.a,T.a,[]),t.Db(4608,m.t,m.t,[]),t.Db(4608,an.c,an.c,[]),t.Db(4608,v.b,v.b,[]),t.Db(4608,m.e,m.e,[]),t.Db(4608,on.c,on.c,[on.i,on.e,t.j,on.h,on.f,t.q,t.y,g.d,F.b,[2,g.i]]),t.Db(5120,on.j,on.k,[on.c]),t.Db(5120,cn.c,cn.j,[on.c]),t.Db(5120,rn.c,rn.d,[on.c]),t.Db(135680,rn.e,rn.e,[on.c,t.q,[2,g.i],[2,rn.b],rn.c,[3,rn.e],on.e]),t.Db(5120,un.a,un.b,[on.c]),t.Db(1073742336,g.b,g.b,[]),t.Db(1073742336,en.h,en.h,[]),t.Db(1073742336,bn.a,bn.a,[]),t.Db(1073742336,F.a,F.a,[]),t.Db(1073742336,v.j,v.j,[[2,v.c],[2,mn.f]]),t.Db(1073742336,w.b,w.b,[]),t.Db(1073742336,v.s,v.s,[]),t.Db(1073742336,sn.c,sn.c,[]),t.Db(1073742336,m.s,m.s,[]),t.Db(1073742336,m.i,m.i,[]),t.Db(1073742336,L.c,L.c,[]),t.Db(1073742336,an.d,an.d,[]),t.Db(1073742336,y.d,y.d,[]),t.Db(1073742336,D.b,D.b,[]),t.Db(1073742336,m.r,m.r,[]),t.Db(1073742336,dn.g,dn.g,[]),t.Db(1073742336,ln.c,ln.c,[]),t.Db(1073742336,on.g,on.g,[]),t.Db(1073742336,cn.i,cn.i,[]),t.Db(1073742336,cn.f,cn.f,[]),t.Db(1073742336,rn.h,rn.h,[]),t.Db(1073742336,s.d,s.d,[]),t.Db(1073742336,s.c,s.c,[]),t.Db(1073742336,hn.h,hn.h,[]),t.Db(1073742336,N.b,N.b,[]),t.Db(1073742336,kn.b,kn.b,[]),t.Db(1073742336,v.k,v.k,[]),t.Db(1073742336,v.q,v.q,[]),t.Db(1073742336,pn.c,pn.c,[]),t.Db(1073742336,fn.a,fn.a,[]),t.Db(1073742336,v.o,v.o,[]),t.Db(1073742336,un.d,un.d,[]),t.Db(1073742336,gn.c,gn.c,[]),t.Db(1073742336,xn.d,xn.d,[]),t.Db(1073742336,yn.c,yn.c,[]),t.Db(1073742336,vn.o,vn.o,[]),t.Db(1073742336,Fn.a,Fn.a,[]),t.Db(1073742336,d.a,d.a,[]),t.Db(1073742336,wn.j,wn.j,[]),t.Db(1073742336,Dn.a,Dn.a,[]),t.Db(1073742336,Ln.m,Ln.m,[[2,Ln.r],[2,Ln.k]]),t.Db(1073742336,a,a,[]),t.Db(1024,Ln.i,(function(){return[[{path:"",component:B}]]}),[])])}))},Z5h4:function(n,e,l){"use strict";l.d(e,"a",(function(){return r})),l.d(e,"b",(function(){return u}));var t=l("8Y7J"),a=(l("r0V8"),l("SVse"),l("POq0")),i=(l("IP0z"),l("Xd0L")),o=(l("cUpR"),l("/HVE")),c=l("omvX"),r=(l("s7LF"),l("5GAg"),t.rb({encapsulation:2,styles:["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.91026}50%{animation-timing-function:cubic-bezier(0,0,.2,.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0,0,0,1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(.4,0,1,1);stroke-dashoffset:0}to{stroke-dashoffset:-22.91026}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}100%,32.8%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0,0,.2,.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}@media (-ms-high-contrast:active){.mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0,0,.2,.1),opacity 90ms cubic-bezier(0,0,.2,.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media (hover:none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.91026;stroke-dasharray:22.91026;stroke-width:2.13333px}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0);border-radius:2px}@media (-ms-high-contrast:active){.mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0s mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0s mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:.3s linear 0s mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}"],data:{}}));function u(n){return t.Pb(2,[t.Lb(671088640,1,{_inputElement:0}),t.Lb(671088640,2,{ripple:0}),(n()(),t.tb(2,0,[["label",1]],null,16,"label",[["class","mat-checkbox-layout"]],[[1,"for",0]],null,null,null,null)),(n()(),t.tb(3,0,null,null,10,"div",[["class","mat-checkbox-inner-container"]],[[2,"mat-checkbox-inner-container-no-side-margin",null]],null,null,null,null)),(n()(),t.tb(4,0,[[1,0],["input",1]],null,0,"input",[["class","mat-checkbox-input cdk-visually-hidden"],["type","checkbox"]],[[8,"id",0],[8,"required",0],[8,"checked",0],[1,"value",0],[8,"disabled",0],[1,"name",0],[8,"tabIndex",0],[8,"indeterminate",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-checked",0]],[[null,"change"],[null,"click"]],(function(n,e,l){var t=!0,a=n.component;return"change"===e&&(t=!1!==a._onInteractionEvent(l)&&t),"click"===e&&(t=!1!==a._onInputClick(l)&&t),t}),null,null)),(n()(),t.tb(5,0,null,null,3,"div",[["class","mat-checkbox-ripple mat-ripple"],["matRipple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),t.sb(6,212992,[[2,4]],0,i.r,[t.k,t.y,o.a,[2,i.i],[2,c.a]],{centered:[0,"centered"],radius:[1,"radius"],animation:[2,"animation"],disabled:[3,"disabled"],trigger:[4,"trigger"]},null),t.Ib(7,{enterDuration:0}),(n()(),t.tb(8,0,null,null,0,"div",[["class","mat-ripple-element mat-checkbox-persistent-ripple"]],null,null,null,null,null)),(n()(),t.tb(9,0,null,null,0,"div",[["class","mat-checkbox-frame"]],null,null,null,null,null)),(n()(),t.tb(10,0,null,null,3,"div",[["class","mat-checkbox-background"]],null,null,null,null,null)),(n()(),t.tb(11,0,null,null,1,":svg:svg",[[":xml:space","preserve"],["class","mat-checkbox-checkmark"],["focusable","false"],["version","1.1"],["viewBox","0 0 24 24"]],null,null,null,null,null)),(n()(),t.tb(12,0,null,null,0,":svg:path",[["class","mat-checkbox-checkmark-path"],["d","M4.1,12.7 9,17.6 20.3,6.3"],["fill","none"],["stroke","white"]],null,null,null,null,null)),(n()(),t.tb(13,0,null,null,0,"div",[["class","mat-checkbox-mixedmark"]],null,null,null,null,null)),(n()(),t.tb(14,0,[["checkboxLabel",1]],null,4,"span",[["class","mat-checkbox-label"]],null,[[null,"cdkObserveContent"]],(function(n,e,l){var t=!0;return"cdkObserveContent"===e&&(t=!1!==n.component._onLabelTextChange()&&t),t}),null,null)),t.sb(15,1196032,null,0,a.a,[a.b,t.k,t.y],null,{event:"cdkObserveContent"}),(n()(),t.tb(16,0,null,null,1,"span",[["style","display:none"]],null,null,null,null,null)),(n()(),t.Nb(-1,null,["\xa0"])),t.Eb(null,0)],(function(n,e){var l=e.component,a=n(e,7,0,150);n(e,6,0,!0,20,a,l._isRippleDisabled(),t.Fb(e,2))}),(function(n,e){var l=e.component;n(e,2,0,l.inputId),n(e,3,0,!t.Fb(e,14).textContent||!t.Fb(e,14).textContent.trim()),n(e,4,1,[l.inputId,l.required,l.checked,l.value,l.disabled,l.name,l.tabIndex,l.indeterminate,l.ariaLabel||null,l.ariaLabelledby,l._getAriaChecked()]),n(e,5,0,t.Fb(e,6).unbounded)}))}}}]);