(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"Ip/z":function(t,e,n){"use strict";n.r(e),n.d(e,"AlphabetModule",function(){return b});var s=n("ofXK"),r=n("tyNb"),i=n("fXoL");let o=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.xb({type:t,selectors:[["app-english"]],decls:2,vars:0,template:function(t,e){1&t&&(i.Gb(0,"p"),i.Sb(1,"english works!"),i.Fb())},styles:[""]}),t})();const c=new Map([[0,"\u0430"],[1,"\u0431"],[2,"\u0432"],[3,"\u0433"],[4,"\u0491"],[5,"\u0434"],[6,"\u0435"],[7,"\u0454"],[8,"\u0436"],[9,"\u0437"],[10,"\u0438"],[11,"\u0456"],[12,"\u0457"],[13,"\u0439"],[14,"\u043a"],[15,"\u043b"],[16,"\u043c"],[17,"\u043d"],[18,"\u043e"],[19,"\u043f"],[20,"\u0440"],[21,"\u0441"],[22,"\u0442"],[23,"\u0443"],[24,"\u0444"],[25,"\u0445"],[26,"\u0446"],[27,"\u0447"],[28,"\u0448"],[29,"\u0449"],[30,"\u044e"],[31,"\u044f"],[32,"\u044c"]]),u=[{path:"",redirectTo:"ukr"},{path:"ukr",component:(()=>{class t{constructor(){this.letter="",this.success=new Set,this.idx=0}ngOnInit(){this.success=new Set,this.showNextLetter(!1)}showNextLetter(t){if(t&&this.success.add(this.idx),32!==this.success.size)do{this.idx=this.randomInt(0,32),this.letter=c.get(this.idx)}while(this.success.has(this.idx));else this.letter="end"}randomInt(t,e){return t+Math.floor((e-t)*Math.random())}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.xb({type:t,selectors:[["app-ukraine"]],decls:7,vars:1,consts:[[1,"wrapper"],[3,"innerHTML"],[3,"click"]],template:function(t,e){1&t&&(i.Gb(0,"div",0),i.Eb(1,"main",1),i.Gb(2,"footer"),i.Gb(3,"button",2),i.Lb("click",function(){return e.showNextLetter(!0)}),i.Sb(4,"Yes"),i.Fb(),i.Gb(5,"button",2),i.Lb("click",function(){return e.showNextLetter(!1)}),i.Sb(6,"No"),i.Fb(),i.Fb(),i.Fb()),2&t&&(i.ub(1),i.Nb("innerHTML",e.letter,i.Pb))},styles:[""]}),t})()},{path:"eng",component:o}];let a=(()=>{class t{}return t.\u0275mod=i.Bb({type:t}),t.\u0275inj=i.Ab({factory:function(e){return new(e||t)},imports:[[r.a.forChild(u)],r.a]}),t})(),b=(()=>{class t{}return t.\u0275mod=i.Bb({type:t}),t.\u0275inj=i.Ab({factory:function(e){return new(e||t)},imports:[[s.b,a]]}),t})()}}]);