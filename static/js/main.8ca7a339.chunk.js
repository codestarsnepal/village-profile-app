(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),s=n(35),c=n.n(s),i=n(11),o=n(5),u=n(0);function d(){return Object(u.jsx)("div",{className:"home",children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)("h3",{children:"\u0916\u093e\u0901\u0921\u093e\u0926\u0947\u0935\u0940 \u0917\u093e\u0909\u0901\u092a\u093e\u0932\u093f\u0915\u093e"}),Object(u.jsx)("p",{children:"\u092e\u093e\u0915\u093e\u0926\u0941\u092e , \u0930\u093e\u092e\u0947\u091b\u093e\u092a, \u092a\u094d\u0930\u0926\u0947\u0936 \u0928\u0902 \u0969"})]}),Object(u.jsx)(i.b,{to:"/village-profile-app/app",children:"Village Profile App"})]})})}var l=n(18),h=n(16),p=n(1),b=n.n(p),f=n(3),j=n(4),v=n(7),m=n(13),O=n(15),x=n(22),w=n(39),g=n(38),_=new(function(e){Object(w.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(m.a)(this,n),(e=t.call(this,"VPDB")).users=void 0,e.wards=void 0,e.bastis=void 0,e.households=void 0;var r=Object(x.a)(e);return r.version(1).stores({users:"++id, name, phone, password",wards:"id, name, status",bastis:"id, name, status, wardId",households:"++id, name, phone, password, [user_id+is_posted]"}),r.open().then(function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("DB opened Succefully"),console.log("Sync Complete");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("DB error",e)})),e}return n}(n(37).a)),k=function(){function e(t,n,r,a){Object(m.a)(this,e),this.id=void 0,this.name=void 0,this.status=void 0,this.wardId=void 0,this.name=t,this.status=n,this.wardId=r,a&&(this.id=a),_.bastis.mapToClass(e)}return Object(O.a)(e,[{key:"save",value:function(){return _.bastis.put(this)}}]),e}();function y(e){return N.apply(this,arguments)}function N(){return(N=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.transaction("rw",_.bastis,Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.bastis.add(new k(t.name,t.status,t.wardId,t.id));case 2:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return C.apply(this,arguments)}function C(){return(C=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.bastis.where("name").startsWithAnyOfIgnoreCase(t).toArray();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){return A.apply(this,arguments)}function A(){return(A=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.bastis.where({wardId:parseInt(t)}).toArray();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(){function e(t){Object(m.a)(this,e),this.id=void 0,this.hoh_name=void 0,this.hoh=void 0,this.ward_id=void 0,this.basti_id=void 0,this.marga_id=void 0,this.religion=void 0,this.jaati=void 0,this.mother_tongue=void 0,this.main_occupation=void 0,this.has_bank_acc=void 0,this.has_cooperative_acc=void 0,this.has_garden=void 0,this.member_with_life_insurance=void 0,this.member_with_health_insurance=void 0,this.responder_name=void 0,this.house_num=void 0,this.num_of_member=void 0,this.resident_type=void 0,this.phone_num=void 0,this.mobile_num=void 0,this.longitude=void 0,this.latitude=void 0,this.geo_location=void 0,this.altitude=void 0,this.accuracy=void 0,this.responder_image=void 0,this.step=void 0,this.status=void 0,this.remarks=void 0,this.user_id=void 0,this.is_posted=void 0,this.hoh_name=t.hoh_name,this.hoh=t.hoh,this.ward_id=t.ward_id,this.basti_id=t.basti_id,this.marga_id=t.marga_id,this.religion=t.religion,this.jaati=t.jaati,this.mother_tongue=t.mother_tongue,this.main_occupation=t.main_occupation,this.has_bank_acc=t.has_bank_acc,this.has_cooperative_acc=t.has_cooperative_acc,this.has_garden=t.has_garden,this.member_with_life_insurance=t.member_with_life_insurance,this.member_with_health_insurance=t.member_with_health_insurance,this.responder_name=t.responder_name,this.house_num=t.house_num,this.num_of_member=t.num_of_member,this.resident_type=t.resident_type,this.phone_num=t.phone_num,this.mobile_num=t.mobile_num,this.longitude=t.longitude,this.latitude=t.latitude,this.geo_location=t.geo_location,this.altitude=t.altitude,this.accuracy=t.accuracy,this.responder_image=t.responder_image,this.step=t.step,this.status=t.status,this.remarks=t.remarks,this.user_id=t.user_id,this.is_posted=t.is_posted,_.households.mapToClass(e)}return Object(O.a)(e,[{key:"save",value:function(){return _.households.put(this)}}]),e}();function P(e){return E.apply(this,arguments)}function E(){return(E=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.transaction("rw",_.households,Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.households.add(new I(Object(j.a)({},t)));case 2:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return D.apply(this,arguments)}function D(){return(D=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.transaction("r",_.households,Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.households.toArray();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return q.apply(this,arguments)}function q(){return(q=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.households.where("[user_id+is_posted]").equals([t,"0"]).toArray();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e){return L.apply(this,arguments)}function L(){return(L=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.households.put(Object(j.a)({},t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=function(){function e(t){Object(m.a)(this,e),this.id=void 0,this.name=void 0,this.username=void 0,this.phone=void 0,this.password=void 0,this.office_name=void 0,this.office_id=void 0,this.name=t.name,this.username=t.username,this.phone=t.phone,this.password=t.password,this.office_name=t.office_name,this.office_id=t.office_id,t.id&&(this.id=t.id),_.users.mapToClass(e)}return Object(O.a)(e,[{key:"save",value:function(){return _.users.put(this)}}]),e}();function U(e){return z.apply(this,arguments)}function z(){return(z=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.transaction("rw",_.users,Object(f.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.users.add(new T(Object(j.a)({},t)));case 2:n=e.sent,console.log(n);case 4:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return M.apply(this,arguments)}function M(){return(M=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.transaction("r",_.users,Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.users.toArray();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return(R=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.users.clear();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V=function(){function e(t,n,r){Object(m.a)(this,e),this.id=void 0,this.name=void 0,this.status=void 0,this.name=t,this.status=n,r&&(this.id=r),_.wards.mapToClass(e)}return Object(O.a)(e,[{key:"save",value:function(){return _.wards.put(this)}}]),e}();function Y(e){return K.apply(this,arguments)}function K(){return(K=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.transaction("rw",_.wards,Object(f.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.wards.add(new V(t.name,t.status,t.id));case 2:n=e.sent,console.log(n);case 4:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(){return $.apply(this,arguments)}function $(){return($=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.transaction("r",_.wards,Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.wards.toArray();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.wards.where("name").startsWithAnyOfIgnoreCase(t).toArray();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){var t=e.data,n=e.bastis,r=e.wards,a=e.household,s=e.handleChange,c=function(e){return((null===t||void 0===t?void 0:t.requiredFields)||[]).indexOf(e)>-1};return Object(u.jsxs)("div",{className:"vp-form",children:[Object(u.jsxs)("div",{className:"form-group ".concat(t&&c(1)?"required":""),id:"1",children:[Object(u.jsx)("label",{className:"label",children:"1. Ward No"}),Object(u.jsx)("div",{className:"options-verical",onChange:function(e){return s(e)},children:r.map((function(e,t){return Object(u.jsx)("div",{className:"radio",children:Object(u.jsxs)("label",{children:[a.ward_id==e.id?Object(u.jsx)("input",{type:"radio",value:e.id,name:"ward_id",defaultChecked:!0}):Object(u.jsx)("input",{type:"radio",value:e.id,name:"ward_id"}),e.name]})},t)}))})]}),Object(u.jsxs)("div",{className:"form-group ".concat(t&&c(2)?"required":""),id:"2",children:[Object(u.jsx)("label",{className:"label",children:"2. Basti ko Naam"}),Object(u.jsx)("div",{className:"options-verical",onChange:function(e){return s(e)},children:n.map((function(e,t){return Object(u.jsx)("div",{className:"radio",children:Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",value:e.id,name:"basti_id"}),e.name]})},t)}))})]})]})}var ee=[1,2];function te(e){var t=Object(o.f)(),n=e.data,a=Object(r.useState)({}),s=Object(v.a)(a,2),c=s[0],i=s[1],d=Object(r.useState)([]),p=Object(v.a)(d,2),m=p[0],O=p[1],x=Object(r.useState)([]),w=Object(v.a)(x,2),g=w[0],_=w[1],k=Object(r.useState)(Object(j.a)({},n.household)),y=Object(v.a)(k,2),N=y[0],S=y[1];n.requiredFields=ee,Object(r.useEffect)((function(){C(),function(){A.apply(this,arguments)}()}),[]);var C=function(){var e=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:(t=e.sent).length&&i(Object(j.a)({},t[0]));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function A(){return(A=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X();case 2:t=e.sent,O(Object(h.a)(t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(){var e=Object(f.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(Object(j.a)(Object(j.a)({},N),{},{status:"0",is_posted:"0",user_id:null===(n=c.id)||void 0===n?void 0:n.toString()}));case 2:t.push("/village-profile-app/app");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,e.next=3,W(n);case 3:r=e.sent,_(Object(h.a)(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"vp-form-wrapper",children:[Object(u.jsxs)("div",{className:"save-btns",children:[Object(u.jsx)("button",{onClick:I,children:"Save"}),Object(u.jsx)("button",{children:"Save & Exit"})]}),Object(u.jsx)(Z,{data:n,household:N,handleChange:function(e){"ward_id"===e.target.name&&E(e),S((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(l.a)({},e.target.name,e.target.value))}))},wards:m,bastis:g})]})}var ne=n(14),re=n.n(ne);re.a.defaults.xsrfHeaderName="X-CSRFTOKEN",re.a.defaults.xsrfCookieName="csrftoken";var ae="".concat("http://af56-2400-1a00-b050-4eb5-9cd2-d777-6e65-cea8.ngrok.io","/api/"),se={loadCollectors:function(){return re.a.get("".concat(ae,"collectors/"))},loadWada:function(e){return re.a.get("".concat(ae,"wards/"),{params:{office_id:e}})},loadMarga:function(e){return re.a.get("".concat(ae,"margas/"),{params:{office_id:e}})},loadBasti:function(e){return re.a.get("".concat(ae,"bastis/"),{params:{office_id:e}})},login:function(e){return re.a.post("".concat(ae,"login/"),{data:e})},postHousehold:function(e){return re.a.post("".concat(ae,"post-household/"),{data:e})}};function ce(){var e=Object(r.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)({}),c=Object(v.a)(s,2),i=c[0],d=c[1],l=Object(o.f)();Object(r.useEffect)((function(){O(),p()}),[]);var p=function(){var e=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(i.id?i.id.toString():"");case 2:t=e.sent,a(Object(h.a)(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.navigator.onLine){e.next=13;break}return e.next=3,se.postHousehold(t);case 3:if(200!==e.sent.status){e.next=9;break}return e.next=7,H(Object(j.a)(Object(j.a)({},t),{},{is_posted:1}));case 7:e.next=10;break;case 9:console.log(t.id,"Failed");case 10:p(),e.next=14;break;case 13:alert("Please connect to WIFI!");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:(t=e.sent).length&&d(Object(j.a)({},t[0]));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"btn btn-warning",onClick:function(){return l.push("/village-profile-app/app")},children:"Back"}),Object(u.jsxs)("table",{className:"table table-striped table-bordered table-hover",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"SN"}),Object(u.jsx)("th",{children:"Household Id"}),Object(u.jsx)("th",{children:"Ward"}),Object(u.jsx)("th",{children:"Posted"}),Object(u.jsx)("th",{children:"Action"})]})}),Object(u.jsx)("tbody",{children:n.length?n.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:++t}),Object(u.jsx)("td",{children:e.id}),Object(u.jsx)("td",{children:e.ward_id}),Object(u.jsx)("td",{children:"1"==e.is_posted?Object(u.jsx)("label",{className:"badge badge-success",children:"YES"}):Object(u.jsx)("label",{className:"badge badge-danger",children:"NO"})}),Object(u.jsx)("td",{children:"0"==e.is_posted&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{className:"btn btn-warning",onClick:function(){return m(e)},children:"Edit"}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){return m(e)},children:"Post"})]})})]},t)})):Object(u.jsx)("tr",{children:Object(u.jsx)("td",{children:"No Data"})})})]})]})}function ie(e){return oe.apply(this,arguments)}function oe(){return(oe=Object(f.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Synchronizing Wards..."),e.next=3,se.loadWada(t);case 3:if(200!==(n=e.sent).status){e.next=9;break}return(r=n.data).map(function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(t.name);case 2:if(0!==e.sent.length){e.next=6;break}return e.next=6,Y({name:t.name,status:t.status,id:t.id});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),console.log(r.length," Wards Synced."),e.abrupt("return",r);case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(e){return de.apply(this,arguments)}function de(){return(de=Object(f.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Synchronizing Basti..."),e.next=3,se.loadBasti(t);case 3:200===(n=e.sent).status&&((r=n.data).map(function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t.name);case 2:if(0!==e.sent.length){e.next=6;break}return e.next=6,y({name:t.name,status:t.status,id:t.id,wardId:t.ward_id});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),console.log(r.length," Bastis Synced."));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(e){return he.apply(this,arguments)}function he(){return(he=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.navigator.onLine){e.next=5;break}return e.next=3,ie(t.office_id);case 3:return e.next=5,ue(t.office_id);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var pe={name:"",username:"",phone:"",password:"",office_name:"",office_id:""};function be(){var e=Object(r.useState)(pe),t=Object(v.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(!1),c=Object(v.a)(s,2),o=c[0],d=c[1],h=Object(r.useState)(""),p=Object(v.a)(h,2),m=p[0],O=p[1];Object(r.useEffect)((function(){g()}),[]);var x=function(e){e.persist(),a((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(l.a)({},e.target.name,e.target.value))}))},w=function(){var e=Object(f.a)(b.a.mark((function e(t){var r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),d(!0),e.next=4,se.login(n);case 4:if(!(r=e.sent).data){e.next=14;break}return s=r.data,e.next=9,U(s);case 9:return e.next=11,le(s);case 11:a(Object(j.a)({},s)),e.next=15;break;case 14:O("Phone or Password did not match!");case 15:d(!1);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:t=e.sent,console.log(t),t.length&&a(Object(j.a)({},t[0]));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o?Object(u.jsx)("div",{className:"vp-home",children:"Loading..."}):n.id?Object(u.jsxs)("div",{className:"vp-home",children:[Object(u.jsxs)("div",{className:"welcome",children:["Welcome ",Object(u.jsx)("br",{}),null===n||void 0===n?void 0:n.name,Object(u.jsx)("p",{className:"logout",onClick:function(){a(Object(j.a)({},pe)),function(){R.apply(this,arguments)}()},children:"Logout"})]}),Object(u.jsx)(i.b,{to:"/village-profile-app/app/add-new",children:"Add New Household"}),Object(u.jsx)(i.b,{to:"/village-profile-app/app/pending",children:"Pending Data"}),Object(u.jsx)(i.b,{to:"/village-profile-app/app/incomplete",children:"Incomplete Data"}),Object(u.jsx)(i.b,{to:"/village-profile-app/app/all",children:"All Data"})]}):Object(u.jsx)("div",{className:"vp-home",children:Object(u.jsxs)("form",{method:"post",onSubmit:w,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Username"}),Object(u.jsx)("input",{type:"username",placeholder:"Username",name:"username",value:null===n||void 0===n?void 0:n.username,onChange:x,required:!0})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",placeholder:"Password",name:"password",value:null===n||void 0===n?void 0:n.password,onChange:x,required:!0})]}),Object(u.jsx)("p",{style:{color:"red"},children:m}),Object(u.jsx)("button",{children:"Submit"})]})})}n(72);function fe(){var e=Object(r.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1],s=Object(o.f)();Object(r.useEffect)((function(){c()}),[]);var c=function(){var e=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,console.log(t),a(Object(h.a)(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.navigator.onLine){e.next=13;break}return e.next=3,se.postHousehold(t);case 3:if(200!==e.sent.status){e.next=9;break}return e.next=7,H(Object(j.a)(Object(j.a)({},t),{},{is_posted:1}));case 7:e.next=10;break;case 9:console.log(t.id,"Failed");case 10:c(),e.next=14;break;case 13:alert("Please connect to WIFI!");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"btn btn-warning",onClick:function(){return s.push("/village-profile-app/app")},children:"Back"}),Object(u.jsxs)("table",{className:"table table-striped table-bordered table-hover",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"SN"}),Object(u.jsx)("th",{children:"Household Id"}),Object(u.jsx)("th",{children:"Ward"}),Object(u.jsx)("th",{children:"Posted"}),Object(u.jsx)("th",{children:"Action"})]})}),Object(u.jsx)("tbody",{children:n.length?n.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:++t}),Object(u.jsx)("td",{children:e.id}),Object(u.jsx)("td",{children:e.ward_id}),Object(u.jsx)("td",{children:"1"==e.is_posted?Object(u.jsx)("label",{className:"badge badge-success",children:"YES"}):Object(u.jsx)("label",{className:"badge badge-danger",children:"NO"})}),Object(u.jsx)("td",{children:"0"==e.is_posted&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{className:"btn btn-warning",onClick:function(){return i(e)},children:"Edit"}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){return i(e)},children:"Post"})]})})]},t)})):Object(u.jsx)("tr",{children:Object(u.jsx)("td",{children:"No Data"})})})]})]})}function je(){return _.open(),Object(u.jsx)(i.a,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/village-profile-app/app/add-new",children:Object(u.jsx)(te,{data:{}})}),Object(u.jsx)(o.a,{path:"/village-profile-app/app/pending",children:Object(u.jsx)(ce,{})}),Object(u.jsx)(o.a,{path:"/village-profile-app/app/all",children:Object(u.jsx)(fe,{})}),Object(u.jsx)(o.a,{path:"/village-profile-app/app",children:Object(u.jsx)(be,{})}),Object(u.jsx)(o.a,{path:"/",children:Object(u.jsx)(d,{})}),Object(u.jsx)(o.a,{path:"/village-profile-app",children:Object(u.jsx)(d,{})})]})})}var ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function me(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(je,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");ve?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):me(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):me(t,e)}))}}()}},[[73,1,2]]]);
//# sourceMappingURL=main.8ca7a339.chunk.js.map