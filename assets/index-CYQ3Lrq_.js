(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))c(u);new MutationObserver(u=>{for(const m of u)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function o(u){const m={};return u.integrity&&(m.integrity=u.integrity),u.referrerPolicy&&(m.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?m.credentials="include":u.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(u){if(u.ep)return;u.ep=!0;const m=o(u);fetch(u.href,m)}})();function Ac(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Tm={exports:{}},Gl={};var x1;function S3(){if(x1)return Gl;x1=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function o(c,u,m){var g=null;if(m!==void 0&&(g=""+m),u.key!==void 0&&(g=""+u.key),"key"in u){m={};for(var x in u)x!=="key"&&(m[x]=u[x])}else m=u;return u=m.ref,{$$typeof:n,type:c,key:g,ref:u!==void 0?u:null,props:m}}return Gl.Fragment=a,Gl.jsx=o,Gl.jsxs=o,Gl}var _1;function T3(){return _1||(_1=1,Tm.exports=S3()),Tm.exports}var d=T3(),Cm={exports:{}},At={};var b1;function C3(){if(b1)return At;b1=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),g=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),A=Symbol.iterator;function O(V){return V===null||typeof V!="object"?null:(V=A&&V[A]||V["@@iterator"],typeof V=="function"?V:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,I={};function D(V,W,ct){this.props=V,this.context=W,this.refs=I,this.updater=ct||R}D.prototype.isReactComponent={},D.prototype.setState=function(V,W){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,W,"setState")},D.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function M(){}M.prototype=D.prototype;function B(V,W,ct){this.props=V,this.context=W,this.refs=I,this.updater=ct||R}var Q=B.prototype=new M;Q.constructor=B,P(Q,D.prototype),Q.isPureReactComponent=!0;var tt=Array.isArray;function ot(){}var $={H:null,A:null,T:null,S:null},lt=Object.prototype.hasOwnProperty;function pt(V,W,ct){var ut=ct.ref;return{$$typeof:n,type:V,key:W,ref:ut!==void 0?ut:null,props:ct}}function gt(V,W){return pt(V.type,W,V.props)}function Tt(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function at(V){var W={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(ct){return W[ct]})}var zt=/\/+/g;function Bt(V,W){return typeof V=="object"&&V!==null&&V.key!=null?at(""+V.key):W.toString(36)}function ge(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(ot,ot):(V.status="pending",V.then(function(W){V.status==="pending"&&(V.status="fulfilled",V.value=W)},function(W){V.status==="pending"&&(V.status="rejected",V.reason=W)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function X(V,W,ct,ut,mt){var ht=typeof V;(ht==="undefined"||ht==="boolean")&&(V=null);var Mt=!1;if(V===null)Mt=!0;else switch(ht){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(V.$$typeof){case n:case a:Mt=!0;break;case T:return Mt=V._init,X(Mt(V._payload),W,ct,ut,mt)}}if(Mt)return mt=mt(V),Mt=ut===""?"."+Bt(V,0):ut,tt(mt)?(ct="",Mt!=null&&(ct=Mt.replace(zt,"$&/")+"/"),X(mt,W,ct,"",function(un){return un})):mt!=null&&(Tt(mt)&&(mt=gt(mt,ct+(mt.key==null||V&&V.key===mt.key?"":(""+mt.key).replace(zt,"$&/")+"/")+Mt)),W.push(mt)),1;Mt=0;var Jt=ut===""?".":ut+":";if(tt(V))for(var Xt=0;Xt<V.length;Xt++)ut=V[Xt],ht=Jt+Bt(ut,Xt),Mt+=X(ut,W,ct,ht,mt);else if(Xt=O(V),typeof Xt=="function")for(V=Xt.call(V),Xt=0;!(ut=V.next()).done;)ut=ut.value,ht=Jt+Bt(ut,Xt++),Mt+=X(ut,W,ct,ht,mt);else if(ht==="object"){if(typeof V.then=="function")return X(ge(V),W,ct,ut,mt);throw W=String(V),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function st(V,W,ct){if(V==null)return V;var ut=[],mt=0;return X(V,ut,"","",function(ht){return W.call(ct,ht,mt++)}),ut}function rt(V){if(V._status===-1){var W=V._result;W=W(),W.then(function(ct){(V._status===0||V._status===-1)&&(V._status=1,V._result=ct)},function(ct){(V._status===0||V._status===-1)&&(V._status=2,V._result=ct)}),V._status===-1&&(V._status=0,V._result=W)}if(V._status===1)return V._result.default;throw V._result}var Ct=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)},dt={map:st,forEach:function(V,W,ct){st(V,function(){W.apply(this,arguments)},ct)},count:function(V){var W=0;return st(V,function(){W++}),W},toArray:function(V){return st(V,function(W){return W})||[]},only:function(V){if(!Tt(V))throw Error("React.Children.only expected to receive a single React element child.");return V}};return At.Activity=C,At.Children=dt,At.Component=D,At.Fragment=o,At.Profiler=u,At.PureComponent=B,At.StrictMode=c,At.Suspense=y,At.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,At.__COMPILER_RUNTIME={__proto__:null,c:function(V){return $.H.useMemoCache(V)}},At.cache=function(V){return function(){return V.apply(null,arguments)}},At.cacheSignal=function(){return null},At.cloneElement=function(V,W,ct){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var ut=P({},V.props),mt=V.key;if(W!=null)for(ht in W.key!==void 0&&(mt=""+W.key),W)!lt.call(W,ht)||ht==="key"||ht==="__self"||ht==="__source"||ht==="ref"&&W.ref===void 0||(ut[ht]=W[ht]);var ht=arguments.length-2;if(ht===1)ut.children=ct;else if(1<ht){for(var Mt=Array(ht),Jt=0;Jt<ht;Jt++)Mt[Jt]=arguments[Jt+2];ut.children=Mt}return pt(V.type,mt,ut)},At.createContext=function(V){return V={$$typeof:g,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:m,_context:V},V},At.createElement=function(V,W,ct){var ut,mt={},ht=null;if(W!=null)for(ut in W.key!==void 0&&(ht=""+W.key),W)lt.call(W,ut)&&ut!=="key"&&ut!=="__self"&&ut!=="__source"&&(mt[ut]=W[ut]);var Mt=arguments.length-2;if(Mt===1)mt.children=ct;else if(1<Mt){for(var Jt=Array(Mt),Xt=0;Xt<Mt;Xt++)Jt[Xt]=arguments[Xt+2];mt.children=Jt}if(V&&V.defaultProps)for(ut in Mt=V.defaultProps,Mt)mt[ut]===void 0&&(mt[ut]=Mt[ut]);return pt(V,ht,mt)},At.createRef=function(){return{current:null}},At.forwardRef=function(V){return{$$typeof:x,render:V}},At.isValidElement=Tt,At.lazy=function(V){return{$$typeof:T,_payload:{_status:-1,_result:V},_init:rt}},At.memo=function(V,W){return{$$typeof:_,type:V,compare:W===void 0?null:W}},At.startTransition=function(V){var W=$.T,ct={};$.T=ct;try{var ut=V(),mt=$.S;mt!==null&&mt(ct,ut),typeof ut=="object"&&ut!==null&&typeof ut.then=="function"&&ut.then(ot,Ct)}catch(ht){Ct(ht)}finally{W!==null&&ct.types!==null&&(W.types=ct.types),$.T=W}},At.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},At.use=function(V){return $.H.use(V)},At.useActionState=function(V,W,ct){return $.H.useActionState(V,W,ct)},At.useCallback=function(V,W){return $.H.useCallback(V,W)},At.useContext=function(V){return $.H.useContext(V)},At.useDebugValue=function(){},At.useDeferredValue=function(V,W){return $.H.useDeferredValue(V,W)},At.useEffect=function(V,W){return $.H.useEffect(V,W)},At.useEffectEvent=function(V){return $.H.useEffectEvent(V)},At.useId=function(){return $.H.useId()},At.useImperativeHandle=function(V,W,ct){return $.H.useImperativeHandle(V,W,ct)},At.useInsertionEffect=function(V,W){return $.H.useInsertionEffect(V,W)},At.useLayoutEffect=function(V,W){return $.H.useLayoutEffect(V,W)},At.useMemo=function(V,W){return $.H.useMemo(V,W)},At.useOptimistic=function(V,W){return $.H.useOptimistic(V,W)},At.useReducer=function(V,W,ct){return $.H.useReducer(V,W,ct)},At.useRef=function(V){return $.H.useRef(V)},At.useState=function(V){return $.H.useState(V)},At.useSyncExternalStore=function(V,W,ct){return $.H.useSyncExternalStore(V,W,ct)},At.useTransition=function(){return $.H.useTransition()},At.version="19.2.3",At}var w1;function fg(){return w1||(w1=1,Cm.exports=C3()),Cm.exports}var z=fg();const oe=Ac(z);var jm={exports:{}},ql={},Em={exports:{}},Am={};var S1;function j3(){return S1||(S1=1,(function(n){function a(X,st){var rt=X.length;X.push(st);t:for(;0<rt;){var Ct=rt-1>>>1,dt=X[Ct];if(0<u(dt,st))X[Ct]=st,X[rt]=dt,rt=Ct;else break t}}function o(X){return X.length===0?null:X[0]}function c(X){if(X.length===0)return null;var st=X[0],rt=X.pop();if(rt!==st){X[0]=rt;t:for(var Ct=0,dt=X.length,V=dt>>>1;Ct<V;){var W=2*(Ct+1)-1,ct=X[W],ut=W+1,mt=X[ut];if(0>u(ct,rt))ut<dt&&0>u(mt,ct)?(X[Ct]=mt,X[ut]=rt,Ct=ut):(X[Ct]=ct,X[W]=rt,Ct=W);else if(ut<dt&&0>u(mt,rt))X[Ct]=mt,X[ut]=rt,Ct=ut;else break t}}return st}function u(X,st){var rt=X.sortIndex-st.sortIndex;return rt!==0?rt:X.id-st.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;n.unstable_now=function(){return m.now()}}else{var g=Date,x=g.now();n.unstable_now=function(){return g.now()-x}}var y=[],_=[],T=1,C=null,A=3,O=!1,R=!1,P=!1,I=!1,D=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function Q(X){for(var st=o(_);st!==null;){if(st.callback===null)c(_);else if(st.startTime<=X)c(_),st.sortIndex=st.expirationTime,a(y,st);else break;st=o(_)}}function tt(X){if(P=!1,Q(X),!R)if(o(y)!==null)R=!0,ot||(ot=!0,at());else{var st=o(_);st!==null&&ge(tt,st.startTime-X)}}var ot=!1,$=-1,lt=5,pt=-1;function gt(){return I?!0:!(n.unstable_now()-pt<lt)}function Tt(){if(I=!1,ot){var X=n.unstable_now();pt=X;var st=!0;try{t:{R=!1,P&&(P=!1,M($),$=-1),O=!0;var rt=A;try{e:{for(Q(X),C=o(y);C!==null&&!(C.expirationTime>X&&gt());){var Ct=C.callback;if(typeof Ct=="function"){C.callback=null,A=C.priorityLevel;var dt=Ct(C.expirationTime<=X);if(X=n.unstable_now(),typeof dt=="function"){C.callback=dt,Q(X),st=!0;break e}C===o(y)&&c(y),Q(X)}else c(y);C=o(y)}if(C!==null)st=!0;else{var V=o(_);V!==null&&ge(tt,V.startTime-X),st=!1}}break t}finally{C=null,A=rt,O=!1}st=void 0}}finally{st?at():ot=!1}}}var at;if(typeof B=="function")at=function(){B(Tt)};else if(typeof MessageChannel<"u"){var zt=new MessageChannel,Bt=zt.port2;zt.port1.onmessage=Tt,at=function(){Bt.postMessage(null)}}else at=function(){D(Tt,0)};function ge(X,st){$=D(function(){X(n.unstable_now())},st)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(X){X.callback=null},n.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):lt=0<X?Math.floor(1e3/X):5},n.unstable_getCurrentPriorityLevel=function(){return A},n.unstable_next=function(X){switch(A){case 1:case 2:case 3:var st=3;break;default:st=A}var rt=A;A=st;try{return X()}finally{A=rt}},n.unstable_requestPaint=function(){I=!0},n.unstable_runWithPriority=function(X,st){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var rt=A;A=X;try{return st()}finally{A=rt}},n.unstable_scheduleCallback=function(X,st,rt){var Ct=n.unstable_now();switch(typeof rt=="object"&&rt!==null?(rt=rt.delay,rt=typeof rt=="number"&&0<rt?Ct+rt:Ct):rt=Ct,X){case 1:var dt=-1;break;case 2:dt=250;break;case 5:dt=1073741823;break;case 4:dt=1e4;break;default:dt=5e3}return dt=rt+dt,X={id:T++,callback:st,priorityLevel:X,startTime:rt,expirationTime:dt,sortIndex:-1},rt>Ct?(X.sortIndex=rt,a(_,X),o(y)===null&&X===o(_)&&(P?(M($),$=-1):P=!0,ge(tt,rt-Ct))):(X.sortIndex=dt,a(y,X),R||O||(R=!0,ot||(ot=!0,at()))),X},n.unstable_shouldYield=gt,n.unstable_wrapCallback=function(X){var st=A;return function(){var rt=A;A=st;try{return X.apply(this,arguments)}finally{A=rt}}}})(Am)),Am}var T1;function E3(){return T1||(T1=1,Em.exports=j3()),Em.exports}var Mm={exports:{}},Je={};var C1;function A3(){if(C1)return Je;C1=1;var n=fg();function a(y){var _="https://react.dev/errors/"+y;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)_+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+y+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var c={d:{f:o,r:function(){throw Error(a(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function m(y,_,T){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:C==null?null:""+C,children:y,containerInfo:_,implementation:T}}var g=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(y,_){if(y==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Je.createPortal=function(y,_){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(a(299));return m(y,_,null,T)},Je.flushSync=function(y){var _=g.T,T=c.p;try{if(g.T=null,c.p=2,y)return y()}finally{g.T=_,c.p=T,c.d.f()}},Je.preconnect=function(y,_){typeof y=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,c.d.C(y,_))},Je.prefetchDNS=function(y){typeof y=="string"&&c.d.D(y)},Je.preinit=function(y,_){if(typeof y=="string"&&_&&typeof _.as=="string"){var T=_.as,C=x(T,_.crossOrigin),A=typeof _.integrity=="string"?_.integrity:void 0,O=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;T==="style"?c.d.S(y,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:C,integrity:A,fetchPriority:O}):T==="script"&&c.d.X(y,{crossOrigin:C,integrity:A,fetchPriority:O,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Je.preinitModule=function(y,_){if(typeof y=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var T=x(_.as,_.crossOrigin);c.d.M(y,{crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&c.d.M(y)},Je.preload=function(y,_){if(typeof y=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var T=_.as,C=x(T,_.crossOrigin);c.d.L(y,T,{crossOrigin:C,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Je.preloadModule=function(y,_){if(typeof y=="string")if(_){var T=x(_.as,_.crossOrigin);c.d.m(y,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else c.d.m(y)},Je.requestFormReset=function(y){c.d.r(y)},Je.unstable_batchedUpdates=function(y,_){return y(_)},Je.useFormState=function(y,_,T){return g.H.useFormState(y,_,T)},Je.useFormStatus=function(){return g.H.useHostTransitionStatus()},Je.version="19.2.3",Je}var j1;function s2(){if(j1)return Mm.exports;j1=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),Mm.exports=A3(),Mm.exports}var E1;function M3(){if(E1)return ql;E1=1;var n=E3(),a=fg(),o=s2();function c(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function m(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function x(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function y(t){if(m(t)!==t)throw Error(c(188))}function _(t){var e=t.alternate;if(!e){if(e=m(t),e===null)throw Error(c(188));return e!==t?null:t}for(var r=t,l=e;;){var h=r.return;if(h===null)break;var p=h.alternate;if(p===null){if(l=h.return,l!==null){r=l;continue}break}if(h.child===p.child){for(p=h.child;p;){if(p===r)return y(h),t;if(p===l)return y(h),e;p=p.sibling}throw Error(c(188))}if(r.return!==l.return)r=h,l=p;else{for(var w=!1,E=h.child;E;){if(E===r){w=!0,r=h,l=p;break}if(E===l){w=!0,l=h,r=p;break}E=E.sibling}if(!w){for(E=p.child;E;){if(E===r){w=!0,r=p,l=h;break}if(E===l){w=!0,l=p,r=h;break}E=E.sibling}if(!w)throw Error(c(189))}}if(r.alternate!==l)throw Error(c(190))}if(r.tag!==3)throw Error(c(188));return r.stateNode.current===r?t:e}function T(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=T(t),e!==null)return e;t=t.sibling}return null}var C=Object.assign,A=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),B=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),tt=Symbol.for("react.suspense"),ot=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),pt=Symbol.for("react.activity"),gt=Symbol.for("react.memo_cache_sentinel"),Tt=Symbol.iterator;function at(t){return t===null||typeof t!="object"?null:(t=Tt&&t[Tt]||t["@@iterator"],typeof t=="function"?t:null)}var zt=Symbol.for("react.client.reference");function Bt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===zt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case P:return"Fragment";case D:return"Profiler";case I:return"StrictMode";case tt:return"Suspense";case ot:return"SuspenseList";case pt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case B:return t.displayName||"Context";case M:return(t._context.displayName||"Context")+".Consumer";case Q:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $:return e=t.displayName||null,e!==null?e:Bt(t.type)||"Memo";case lt:e=t._payload,t=t._init;try{return Bt(t(e))}catch{}}return null}var ge=Array.isArray,X=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rt={pending:!1,data:null,method:null,action:null},Ct=[],dt=-1;function V(t){return{current:t}}function W(t){0>dt||(t.current=Ct[dt],Ct[dt]=null,dt--)}function ct(t,e){dt++,Ct[dt]=t.current,t.current=e}var ut=V(null),mt=V(null),ht=V(null),Mt=V(null);function Jt(t,e){switch(ct(ht,e),ct(mt,t),ct(ut,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Zy(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Zy(e),t=Iy(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}W(ut),ct(ut,t)}function Xt(){W(ut),W(mt),W(ht)}function un(t){t.memoizedState!==null&&ct(Mt,t);var e=ut.current,r=Iy(e,t.type);e!==r&&(ct(mt,t),ct(ut,r))}function dn(t){mt.current===t&&(W(ut),W(mt)),Mt.current===t&&(W(Mt),Hl._currentValue=rt)}var ke,xi;function fn(t){if(ke===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);ke=e&&e[1]||"",xi=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ke+t+xi}var jn=!1;function ho(t,e){if(!t||jn)return"";jn=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var it=function(){throw Error()};if(Object.defineProperty(it.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(it,[])}catch(K){var F=K}Reflect.construct(t,[],it)}else{try{it.call()}catch(K){F=K}t.call(it.prototype)}}else{try{throw Error()}catch(K){F=K}(it=t())&&typeof it.catch=="function"&&it.catch(function(){})}}catch(K){if(K&&F&&typeof K.stack=="string")return[K.stack,F.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),w=p[0],E=p[1];if(w&&E){var N=w.split(`
`),q=E.split(`
`);for(h=l=0;l<N.length&&!N[l].includes("DetermineComponentFrameRoot");)l++;for(;h<q.length&&!q[h].includes("DetermineComponentFrameRoot");)h++;if(l===N.length||h===q.length)for(l=N.length-1,h=q.length-1;1<=l&&0<=h&&N[l]!==q[h];)h--;for(;1<=l&&0<=h;l--,h--)if(N[l]!==q[h]){if(l!==1||h!==1)do if(l--,h--,0>h||N[l]!==q[h]){var J=`
`+N[l].replace(" at new "," at ");return t.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",t.displayName)),J}while(1<=l&&0<=h);break}}}finally{jn=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?fn(r):""}function Ns(t,e){switch(t.tag){case 26:case 27:case 5:return fn(t.type);case 16:return fn("Lazy");case 13:return t.child!==e&&e!==null?fn("Suspense Fallback"):fn("Suspense");case 19:return fn("SuspenseList");case 0:case 15:return ho(t.type,!1);case 11:return ho(t.type.render,!1);case 1:return ho(t.type,!0);case 31:return fn("Activity");default:return""}}function hr(t){try{var e="",r=null;do e+=Ns(t,r),r=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Vs=Object.prototype.hasOwnProperty,mo=n.unstable_scheduleCallback,mr=n.unstable_cancelCallback,Zc=n.unstable_shouldYield,Ic=n.unstable_requestPaint,nn=n.unstable_now,jf=n.unstable_getCurrentPriorityLevel,po=n.unstable_ImmediatePriority,Hs=n.unstable_UserBlockingPriority,pr=n.unstable_NormalPriority,Ef=n.unstable_LowPriority,Us=n.unstable_IdlePriority,Gc=n.log,Af=n.unstable_setDisableYieldValue,xa=null,qe=null;function ei(t){if(typeof Gc=="function"&&Af(t),qe&&typeof qe.setStrictMode=="function")try{qe.setStrictMode(xa,t)}catch{}}var an=Math.clz32?Math.clz32:zf,gr=Math.log,Mf=Math.LN2;function zf(t){return t>>>=0,t===0?32:31-(gr(t)/Mf|0)|0}var vr=256,yr=262144,xr=4194304;function Vi(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function go(t,e,r){var l=t.pendingLanes;if(l===0)return 0;var h=0,p=t.suspendedLanes,w=t.pingedLanes;t=t.warmLanes;var E=l&134217727;return E!==0?(l=E&~p,l!==0?h=Vi(l):(w&=E,w!==0?h=Vi(w):r||(r=E&~t,r!==0&&(h=Vi(r))))):(E=l&~p,E!==0?h=Vi(E):w!==0?h=Vi(w):r||(r=l&~t,r!==0&&(h=Vi(r)))),h===0?0:e!==0&&e!==h&&(e&p)===0&&(p=h&-h,r=e&-e,p>=r||p===32&&(r&4194048)!==0)?e:h}function _r(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Lf(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qc(){var t=xr;return xr<<=1,(xr&62914560)===0&&(xr=4194304),t}function Zs(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Hi(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Of(t,e,r,l,h,p){var w=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var E=t.entanglements,N=t.expirationTimes,q=t.hiddenUpdates;for(r=w&~r;0<r;){var J=31-an(r),it=1<<J;E[J]=0,N[J]=-1;var F=q[J];if(F!==null)for(q[J]=null,J=0;J<F.length;J++){var K=F[J];K!==null&&(K.lane&=-536870913)}r&=~it}l!==0&&Yc(t,l,0),p!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=p&~(w&~e))}function Yc(t,e,r){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-an(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|r&261930}function Fc(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var l=31-an(r),h=1<<l;h&e|t[l]&e&&(t[l]|=e),r&=~h}}function $c(t,e){var r=e&-e;return r=(r&42)!==0?1:hn(r),(r&(t.suspendedLanes|e))!==0?0:r}function hn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function _t(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Is(){var t=st.p;return t!==0?t:(t=window.event,t===void 0?32:f1(t.type))}function Gs(t,e){var r=st.p;try{return st.p=t,e()}finally{st.p=r}}var ni=Math.random().toString(36).slice(2),Ee="__reactFiber$"+ni,Ue="__reactProps$"+ni,Ui="__reactContainer$"+ni,_i="__reactEvents$"+ni,Xc="__reactListeners$"+ni,Df="__reactHandles$"+ni,Kc="__reactResources$"+ni,br="__reactMarker$"+ni;function qs(t){delete t[Ee],delete t[Ue],delete t[_i],delete t[Xc],delete t[Df]}function Zi(t){var e=t[Ee];if(e)return e;for(var r=t.parentNode;r;){if(e=r[Ui]||r[Ee]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=Ky(t);t!==null;){if(r=t[Ee])return r;t=Ky(t)}return e}t=r,r=t.parentNode}return null}function _a(t){if(t=t[Ee]||t[Ui]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function bi(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(c(33))}function ba(t){var e=t[Kc];return e||(e=t[Kc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ae(t){t[br]=!0}var Qc=new Set,Wc={};function Ii(t,e){wi(t,e),wi(t+"Capture",e)}function wi(t,e){for(Wc[t]=e,t=0;t<e.length;t++)Qc.add(e[t])}var wr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ys={},Fs={};function Sr(t){return Vs.call(Fs,t)?!0:Vs.call(Ys,t)?!1:wr.test(t)?Fs[t]=!0:(Ys[t]=!0,!1)}function Pt(t,e,r){if(Sr(e))if(r===null)t.removeAttribute(e);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+r)}}function ne(t,e,r){if(r===null)t.removeAttribute(e);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+r)}}function mn(t,e,r,l){if(l===null)t.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(e,r,""+l)}}function Be(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gi(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $s(t,e,r){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,p=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return h.call(this)},set:function(w){r=""+w,p.call(this,w)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(w){r=""+w},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Et(t){if(!t._valueTracker){var e=Gi(t)?"checked":"value";t._valueTracker=$s(t,e,""+t[e])}}function he(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),l="";return t&&(l=Gi(t)?t.checked?"true":"false":t.value),t=l,t!==r?(e.setValue(t),!0):!1}function wa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var vo=/[\n"\\]/g;function ce(t){return t.replace(vo,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Xs(t,e,r,l,h,p,w,E){t.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.type=w:t.removeAttribute("type"),e!=null?w==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Be(e)):t.value!==""+Be(e)&&(t.value=""+Be(e)):w!=="submit"&&w!=="reset"||t.removeAttribute("value"),e!=null?ii(t,w,Be(e)):r!=null?ii(t,w,Be(r)):l!=null&&t.removeAttribute("value"),h==null&&p!=null&&(t.defaultChecked=!!p),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Be(E):t.removeAttribute("name")}function Tr(t,e,r,l,h,p,w,E){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),e!=null||r!=null){if(!(p!=="submit"&&p!=="reset"||e!=null)){Et(t);return}r=r!=null?""+Be(r):"",e=e!=null?""+Be(e):r,E||e===t.value||(t.value=e),t.defaultValue=e}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=E?t.checked:!!l,t.defaultChecked=!!l,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(t.name=w),Et(t)}function ii(t,e,r){e==="number"&&wa(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function se(t,e,r,l){if(t=t.options,e){e={};for(var h=0;h<r.length;h++)e["$"+r[h]]=!0;for(r=0;r<t.length;r++)h=e.hasOwnProperty("$"+t[r].value),t[r].selected!==h&&(t[r].selected=h),h&&l&&(t[r].defaultSelected=!0)}else{for(r=""+Be(r),e=null,h=0;h<t.length;h++){if(t[h].value===r){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}e!==null||t[h].disabled||(e=t[h])}e!==null&&(e.selected=!0)}}function Si(t,e,r){if(e!=null&&(e=""+Be(e),e!==t.value&&(t.value=e),r==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=r!=null?""+Be(r):""}function Sa(t,e,r,l){if(e==null){if(l!=null){if(r!=null)throw Error(c(92));if(ge(l)){if(1<l.length)throw Error(c(93));l=l[0]}r=l}r==null&&(r=""),e=r}r=Be(e),t.defaultValue=r,l=t.textContent,l===r&&l!==""&&l!==null&&(t.value=l),Et(t)}function Nn(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Ks=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ta(t,e,r){var l=e.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,r):typeof r!="number"||r===0||Ks.has(e)?e==="float"?t.cssFloat=r:t[e]=(""+r).trim():t[e]=r+"px"}function yo(t,e,r){if(e!=null&&typeof e!="object")throw Error(c(62));if(t=t.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in e)l=e[h],e.hasOwnProperty(h)&&r[h]!==l&&Ta(t,h,l)}else for(var p in e)e.hasOwnProperty(p)&&Ta(t,p,e[p])}function Cr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xo=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qs=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ca(t){return Qs.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function pn(){}var _o=null;function jr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ja=null,jt=null;function En(t){var e=_a(t);if(e&&(t=e.stateNode)){var r=t[Ue]||null;t:switch(t=e.stateNode,e.type){case"input":if(Xs(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ce(""+e)+'"][type="radio"]'),e=0;e<r.length;e++){var l=r[e];if(l!==t&&l.form===t.form){var h=l[Ue]||null;if(!h)throw Error(c(90));Xs(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(e=0;e<r.length;e++)l=r[e],l.form===t.form&&he(l)}break t;case"textarea":Si(t,r.value,r.defaultValue);break t;case"select":e=r.value,e!=null&&se(t,!!r.multiple,e,!1)}}}var Wt=!1;function Ws(t,e,r){if(Wt)return t(e,r);Wt=!0;try{var l=t(e);return l}finally{if(Wt=!1,(ja!==null||jt!==null)&&($u(),ja&&(e=ja,t=jt,jt=ja=null,En(e),t)))for(e=0;e<t.length;e++)En(t[e])}}function qi(t,e){var r=t.stateNode;if(r===null)return null;var l=r[Ue]||null;if(l===null)return null;r=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(c(231,e,typeof r));return r}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Er=!1;if(An)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){Er=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{Er=!1}var Vn=null,Yi=null,_e=null;function Ti(){if(_e)return _e;var t,e=Yi,r=e.length,l,h="value"in Vn?Vn.value:Vn.textContent,p=h.length;for(t=0;t<r&&e[t]===h[t];t++);var w=r-t;for(l=1;l<=w&&e[r-l]===h[p-l];l++);return _e=h.slice(t,1<l?1-l:void 0)}function Ar(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Mr(){return!0}function Jc(){return!1}function Ye(t){function e(r,l,h,p,w){this._reactName=r,this._targetInst=h,this.type=l,this.nativeEvent=p,this.target=w,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(r=t[E],this[E]=r?r(p):p[E]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Mr:Jc,this.isPropagationStopped=Jc,this}return C(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Mr)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Mr)},persist:function(){},isPersistent:Mr}),e}var ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bo=Ye(ai),Ea=C({},ai,{view:0,detail:0}),Ut=Ye(Ea),Js,rn,ri,zr=C({},Ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ri&&(ri&&t.type==="mousemove"?(Js=t.screenX-ri.screenX,rn=t.screenY-ri.screenY):rn=Js=0,ri=t),Js)},movementY:function(t){return"movementY"in t?t.movementY:rn}}),tu=Ye(zr),tl=C({},zr,{dataTransfer:0}),Rf=Ye(tl),eu=C({},Ea,{relatedTarget:0}),el=Ye(eu),kf=C({},ai,{animationName:0,elapsedTime:0,pseudoElement:0}),nl=Ye(kf),Bf=C({},ai,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hn=Ye(Bf),Pf=C({},ai,{data:0}),il=Ye(Pf),Ci={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function al(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iu[t])?!!e[t]:!1}function rl(){return al}var au=C({},Ea,{key:function(t){if(t.key){var e=Ci[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ar(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rl,charCode:function(t){return t.type==="keypress"?Ar(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ar(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ru=Ye(au),Nf=C({},zr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ou=Ye(Nf),ol=C({},Ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rl}),Vf=Ye(ol),su=C({},ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),lu=Ye(su),wo=C({},zr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fi=Ye(wo),Hf=C({},ai,{newState:0,oldState:0}),Lr=Ye(Hf),gn=[9,13,27,32],So=An&&"CompositionEvent"in window,Aa=null;An&&"documentMode"in document&&(Aa=document.documentMode);var Uf=An&&"TextEvent"in window&&!Aa,To=An&&(!So||Aa&&8<Aa&&11>=Aa),Co=" ",cu=!1;function uu(t,e){switch(t){case"keyup":return gn.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sl(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ma=!1;function zn(t,e){switch(t){case"compositionend":return sl(e);case"keypress":return e.which!==32?null:(cu=!0,Co);case"textInput":return t=e.data,t===Co&&cu?null:t;default:return null}}function za(t,e){if(Ma)return t==="compositionend"||!So&&uu(t,e)?(t=Ti(),_e=Yi=Vn=null,Ma=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return To&&e.locale!=="ko"?null:e.data;default:return null}}var Zf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Un(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Zf[t.type]:e==="textarea"}function du(t,e,r,l){ja?jt?jt.push(l):jt=[l]:ja=l,e=ed(e,"onChange"),0<e.length&&(r=new bo("onChange","change",null,r,l),t.push({event:r,listeners:e}))}var Zn=null,Or=null;function Dr(t){By(t,0)}function Rr(t){var e=bi(t);if(he(e))return t}function kr(t,e){if(t==="change")return e}var fu=!1;if(An){var In;if(An){var La="oninput"in document;if(!La){var hu=document.createElement("div");hu.setAttribute("oninput","return;"),La=typeof hu.oninput=="function"}In=La}else In=!1;fu=In&&(!document.documentMode||9<document.documentMode)}function jo(){Zn&&(Zn.detachEvent("onpropertychange",mu),Or=Zn=null)}function mu(t){if(t.propertyName==="value"&&Rr(Or)){var e=[];du(e,Or,t,jr(t)),Ws(Dr,e)}}function oi(t,e,r){t==="focusin"?(jo(),Zn=e,Or=r,Zn.attachEvent("onpropertychange",mu)):t==="focusout"&&jo()}function If(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rr(Or)}function Oa(t,e){if(t==="click")return Rr(e)}function Gf(t,e){if(t==="input"||t==="change")return Rr(e)}function si(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ze=typeof Object.is=="function"?Object.is:si;function Da(t,e){if(Ze(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),l=Object.keys(e);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var h=r[l];if(!Vs.call(e,h)||!Ze(t[h],e[h]))return!1}return!0}function Eo(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Br(t,e){var r=Eo(t);t=0;for(var l;r;){if(r.nodeType===3){if(l=t+r.textContent.length,t<=e&&l>=e)return{node:r,offset:e-t};t=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Eo(r)}}function Ao(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ao(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Pr(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=wa(t.document);e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=wa(t.document)}return e}function ji(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Mo=An&&"documentMode"in document&&11>=document.documentMode,Ei=null,zo=null,Nr=null,Ra=!1;function pu(t,e,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ra||Ei==null||Ei!==wa(l)||(l=Ei,"selectionStart"in l&&ji(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Nr&&Da(Nr,l)||(Nr=l,l=ed(zo,"onSelect"),0<l.length&&(e=new bo("onSelect","select",null,e,r),t.push({event:e,listeners:l}),e.target=Ei)))}function Ai(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var ka={animationend:Ai("Animation","AnimationEnd"),animationiteration:Ai("Animation","AnimationIteration"),animationstart:Ai("Animation","AnimationStart"),transitionrun:Ai("Transition","TransitionRun"),transitionstart:Ai("Transition","TransitionStart"),transitioncancel:Ai("Transition","TransitionCancel"),transitionend:Ai("Transition","TransitionEnd")},Lo={},gu={};An&&(gu=document.createElement("div").style,"AnimationEvent"in window||(delete ka.animationend.animation,delete ka.animationiteration.animation,delete ka.animationstart.animation),"TransitionEvent"in window||delete ka.transitionend.transition);function Ie(t){if(Lo[t])return Lo[t];if(!ka[t])return t;var e=ka[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in gu)return Lo[t]=e[r];return t}var Vr=Ie("animationend"),vu=Ie("animationiteration"),Hr=Ie("animationstart"),qf=Ie("transitionrun"),yu=Ie("transitionstart"),Yf=Ie("transitioncancel"),Ba=Ie("transitionend"),xu=new Map,Mi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mi.push("scrollEnd");function vn(t,e){xu.set(t,e),Ii(e,[t])}var Ur=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},yn=[],Qe=0,Oo=0;function Zr(){for(var t=Qe,e=Oo=Qe=0;e<t;){var r=yn[e];yn[e++]=null;var l=yn[e];yn[e++]=null;var h=yn[e];yn[e++]=null;var p=yn[e];if(yn[e++]=null,l!==null&&h!==null){var w=l.pending;w===null?h.next=h:(h.next=w.next,w.next=h),l.pending=h}p!==0&&Pa(r,h,p)}}function zi(t,e,r,l){yn[Qe++]=t,yn[Qe++]=e,yn[Qe++]=r,yn[Qe++]=l,Oo|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function ll(t,e,r,l){return zi(t,e,r,l),Ir(t)}function Gn(t,e){return zi(t,null,null,e),Ir(t)}function Pa(t,e,r){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r);for(var h=!1,p=t.return;p!==null;)p.childLanes|=r,l=p.alternate,l!==null&&(l.childLanes|=r),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(h=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,h&&e!==null&&(h=31-an(r),t=p.hiddenUpdates,l=t[h],l===null?t[h]=[e]:l.push(e),e.lane=r|536870912),p):null}function Ir(t){if(50<Dl)throw Dl=0,$h=null,Error(c(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var $i={};function Ff(t,e,r,l){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(t,e,r,l){return new Ff(t,e,r,l)}function Do(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qn(t,e){var r=t.alternate;return r===null?(r=We(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function cl(t,e){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,e=r.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Gr(t,e,r,l,h,p){var w=0;if(l=t,typeof t=="function")Do(t)&&(w=1);else if(typeof t=="string")w=d3(t,r,ut.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case pt:return t=We(31,r,e,h),t.elementType=pt,t.lanes=p,t;case P:return Xi(r.children,h,p,e);case I:w=8,h|=24;break;case D:return t=We(12,r,e,h|2),t.elementType=D,t.lanes=p,t;case tt:return t=We(13,r,e,h),t.elementType=tt,t.lanes=p,t;case ot:return t=We(19,r,e,h),t.elementType=ot,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:w=10;break t;case M:w=9;break t;case Q:w=11;break t;case $:w=14;break t;case lt:w=16,l=null;break t}w=29,r=Error(c(130,t===null?"null":typeof t,"")),l=null}return e=We(w,r,e,h),e.elementType=t,e.type=l,e.lanes=p,e}function Xi(t,e,r,l){return t=We(7,t,l,e),t.lanes=r,t}function Ro(t,e,r){return t=We(6,t,null,e),t.lanes=r,t}function ul(t){var e=We(18,null,null,0);return e.stateNode=t,e}function dl(t,e,r){return e=We(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var i=new WeakMap;function s(t,e){if(typeof t=="object"&&t!==null){var r=i.get(t);return r!==void 0?r:(e={value:t,source:e,stack:hr(e)},i.set(t,e),e)}return{value:t,source:e,stack:hr(e)}}var f=[],v=0,b=null,j=0,k=[],Z=0,Y=null,nt=1,ft="";function bt(t,e){f[v++]=j,f[v++]=b,b=t,j=e}function Ot(t,e,r){k[Z++]=nt,k[Z++]=ft,k[Z++]=Y,Y=t;var l=nt;t=ft;var h=32-an(l)-1;l&=~(1<<h),r+=1;var p=32-an(e)+h;if(30<p){var w=h-h%5;p=(l&(1<<w)-1).toString(32),l>>=w,h-=w,nt=1<<32-an(e)+h|r<<h|l,ft=p+t}else nt=1<<p|r<<h|l,ft=t}function Pe(t){t.return!==null&&(bt(t,1),Ot(t,1,0))}function be(t){for(;t===b;)b=f[--v],f[v]=null,j=f[--v],f[v]=null;for(;t===Y;)Y=k[--Z],k[Z]=null,ft=k[--Z],k[Z]=null,nt=k[--Z],k[Z]=null}function on(t,e){k[Z++]=nt,k[Z++]=ft,k[Z++]=Y,nt=e.id,ft=e.overflow,Y=t}var qt=null,Yt=null,Nt=!1,Li=null,xn=!1,ko=Error(c(519));function Oi(t){var e=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qr(s(e,t)),ko}function fl(t){var e=t.stateNode,r=t.type,l=t.memoizedProps;switch(e[Ee]=t,e[Ue]=l,r){case"dialog":Ht("cancel",e),Ht("close",e);break;case"iframe":case"object":case"embed":Ht("load",e);break;case"video":case"audio":for(r=0;r<kl.length;r++)Ht(kl[r],e);break;case"source":Ht("error",e);break;case"img":case"image":case"link":Ht("error",e),Ht("load",e);break;case"details":Ht("toggle",e);break;case"input":Ht("invalid",e),Tr(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ht("invalid",e);break;case"textarea":Ht("invalid",e),Sa(e,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||e.textContent===""+r||l.suppressHydrationWarning===!0||Hy(e.textContent,r)?(l.popover!=null&&(Ht("beforetoggle",e),Ht("toggle",e)),l.onScroll!=null&&Ht("scroll",e),l.onScrollEnd!=null&&Ht("scrollend",e),l.onClick!=null&&(e.onclick=pn),e=!0):e=!1,e||Oi(t,!0)}function ve(t){for(qt=t.return;qt;)switch(qt.tag){case 5:case 31:case 13:xn=!1;return;case 27:case 3:xn=!0;return;default:qt=qt.return}}function li(t){if(t!==qt)return!1;if(!Nt)return ve(t),Nt=!0,!1;var e=t.tag,r;if((r=e!==3&&e!==27)&&((r=e===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||cm(t.type,t.memoizedProps)),r=!r),r&&Yt&&Oi(t),ve(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));Yt=Xy(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));Yt=Xy(t)}else e===27?(e=Yt,Qa(t.type)?(t=mm,mm=null,Yt=t):Yt=e):Yt=qt?Fn(t.stateNode.nextSibling):null;return!0}function Ki(){Yt=qt=null,Nt=!1}function hl(){var t=Li;return t!==null&&(Sn===null?Sn=t:Sn.push.apply(Sn,t),Li=null),t}function qr(t){Li===null?Li=[t]:Li.push(t)}var Yr=V(null),Di=null,ci=null;function Na(t,e,r){ct(Yr,e._currentValue),e._currentValue=r}function Qi(t){t._currentValue=Yr.current,W(Yr)}function $f(t,e,r){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===r)break;t=t.return}}function Xf(t,e,r,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var p=h.dependencies;if(p!==null){var w=h.child;p=p.firstContext;t:for(;p!==null;){var E=p;p=h;for(var N=0;N<e.length;N++)if(E.context===e[N]){p.lanes|=r,E=p.alternate,E!==null&&(E.lanes|=r),$f(p.return,r,t),l||(w=null);break t}p=E.next}}else if(h.tag===18){if(w=h.return,w===null)throw Error(c(341));w.lanes|=r,p=w.alternate,p!==null&&(p.lanes|=r),$f(w,r,t),w=null}else w=h.child;if(w!==null)w.return=h;else for(w=h;w!==null;){if(w===t){w=null;break}if(h=w.sibling,h!==null){h.return=w.return,w=h;break}w=w.return}h=w}}function Bo(t,e,r,l){t=null;for(var h=e,p=!1;h!==null;){if(!p){if((h.flags&524288)!==0)p=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var w=h.alternate;if(w===null)throw Error(c(387));if(w=w.memoizedProps,w!==null){var E=h.type;Ze(h.pendingProps.value,w.value)||(t!==null?t.push(E):t=[E])}}else if(h===Mt.current){if(w=h.alternate,w===null)throw Error(c(387));w.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Hl):t=[Hl])}h=h.return}t!==null&&Xf(e,t,r,l),e.flags|=262144}function _u(t){for(t=t.firstContext;t!==null;){if(!Ze(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Fr(t){Di=t,ci=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Fe(t){return C0(Di,t)}function bu(t,e){return Di===null&&Fr(t),C0(t,e)}function C0(t,e){var r=e._currentValue;if(e={context:e,memoizedValue:r,next:null},ci===null){if(t===null)throw Error(c(308));ci=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ci=ci.next=e;return r}var sw=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(r,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(r){return r()})}},lw=n.unstable_scheduleCallback,cw=n.unstable_NormalPriority,Me={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kf(){return{controller:new sw,data:new Map,refCount:0}}function ml(t){t.refCount--,t.refCount===0&&lw(cw,function(){t.controller.abort()})}var pl=null,Qf=0,Po=0,No=null;function uw(t,e){if(pl===null){var r=pl=[];Qf=0,Po=tm(),No={status:"pending",value:void 0,then:function(l){r.push(l)}}}return Qf++,e.then(j0,j0),e}function j0(){if(--Qf===0&&pl!==null){No!==null&&(No.status="fulfilled");var t=pl;pl=null,Po=0,No=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function dw(t,e){var r=[],l={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var h=0;h<r.length;h++)(0,r[h])(e)},function(h){for(l.status="rejected",l.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),l}var E0=X.S;X.S=function(t,e){uy=nn(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&uw(t,e),E0!==null&&E0(t,e)};var $r=V(null);function Wf(){var t=$r.current;return t!==null?t:le.pooledCache}function wu(t,e){e===null?ct($r,$r.current):ct($r,e.pool)}function A0(){var t=Wf();return t===null?null:{parent:Me._currentValue,pool:t}}var Vo=Error(c(460)),Jf=Error(c(474)),Su=Error(c(542)),Tu={then:function(){}};function M0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function z0(t,e,r){switch(r=t[r],r===void 0?t.push(e):r!==e&&(e.then(pn,pn),e=r),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,O0(t),t;default:if(typeof e.status=="string")e.then(pn,pn);else{if(t=le,t!==null&&100<t.shellSuspendCounter)throw Error(c(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var h=e;h.status="fulfilled",h.value=l}},function(l){if(e.status==="pending"){var h=e;h.status="rejected",h.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,O0(t),t}throw Kr=e,Vo}}function Xr(t){try{var e=t._init;return e(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Kr=r,Vo):r}}var Kr=null;function L0(){if(Kr===null)throw Error(c(459));var t=Kr;return Kr=null,t}function O0(t){if(t===Vo||t===Su)throw Error(c(483))}var Ho=null,gl=0;function Cu(t){var e=gl;return gl+=1,Ho===null&&(Ho=[]),z0(Ho,t,e)}function vl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ju(t,e){throw e.$$typeof===A?Error(c(525)):(t=Object.prototype.toString.call(e),Error(c(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function D0(t){function e(U,H){if(t){var G=U.deletions;G===null?(U.deletions=[H],U.flags|=16):G.push(H)}}function r(U,H){if(!t)return null;for(;H!==null;)e(U,H),H=H.sibling;return null}function l(U){for(var H=new Map;U!==null;)U.key!==null?H.set(U.key,U):H.set(U.index,U),U=U.sibling;return H}function h(U,H){return U=qn(U,H),U.index=0,U.sibling=null,U}function p(U,H,G){return U.index=G,t?(G=U.alternate,G!==null?(G=G.index,G<H?(U.flags|=67108866,H):G):(U.flags|=67108866,H)):(U.flags|=1048576,H)}function w(U){return t&&U.alternate===null&&(U.flags|=67108866),U}function E(U,H,G,et){return H===null||H.tag!==6?(H=Ro(G,U.mode,et),H.return=U,H):(H=h(H,G),H.return=U,H)}function N(U,H,G,et){var wt=G.type;return wt===P?J(U,H,G.props.children,et,G.key):H!==null&&(H.elementType===wt||typeof wt=="object"&&wt!==null&&wt.$$typeof===lt&&Xr(wt)===H.type)?(H=h(H,G.props),vl(H,G),H.return=U,H):(H=Gr(G.type,G.key,G.props,null,U.mode,et),vl(H,G),H.return=U,H)}function q(U,H,G,et){return H===null||H.tag!==4||H.stateNode.containerInfo!==G.containerInfo||H.stateNode.implementation!==G.implementation?(H=dl(G,U.mode,et),H.return=U,H):(H=h(H,G.children||[]),H.return=U,H)}function J(U,H,G,et,wt){return H===null||H.tag!==7?(H=Xi(G,U.mode,et,wt),H.return=U,H):(H=h(H,G),H.return=U,H)}function it(U,H,G){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=Ro(""+H,U.mode,G),H.return=U,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case O:return G=Gr(H.type,H.key,H.props,null,U.mode,G),vl(G,H),G.return=U,G;case R:return H=dl(H,U.mode,G),H.return=U,H;case lt:return H=Xr(H),it(U,H,G)}if(ge(H)||at(H))return H=Xi(H,U.mode,G,null),H.return=U,H;if(typeof H.then=="function")return it(U,Cu(H),G);if(H.$$typeof===B)return it(U,bu(U,H),G);ju(U,H)}return null}function F(U,H,G,et){var wt=H!==null?H.key:null;if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return wt!==null?null:E(U,H,""+G,et);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case O:return G.key===wt?N(U,H,G,et):null;case R:return G.key===wt?q(U,H,G,et):null;case lt:return G=Xr(G),F(U,H,G,et)}if(ge(G)||at(G))return wt!==null?null:J(U,H,G,et,null);if(typeof G.then=="function")return F(U,H,Cu(G),et);if(G.$$typeof===B)return F(U,H,bu(U,G),et);ju(U,G)}return null}function K(U,H,G,et,wt){if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return U=U.get(G)||null,E(H,U,""+et,wt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case O:return U=U.get(et.key===null?G:et.key)||null,N(H,U,et,wt);case R:return U=U.get(et.key===null?G:et.key)||null,q(H,U,et,wt);case lt:return et=Xr(et),K(U,H,G,et,wt)}if(ge(et)||at(et))return U=U.get(G)||null,J(H,U,et,wt,null);if(typeof et.then=="function")return K(U,H,G,Cu(et),wt);if(et.$$typeof===B)return K(U,H,G,bu(H,et),wt);ju(H,et)}return null}function vt(U,H,G,et){for(var wt=null,Ft=null,xt=H,Dt=H=0,It=null;xt!==null&&Dt<G.length;Dt++){xt.index>Dt?(It=xt,xt=null):It=xt.sibling;var $t=F(U,xt,G[Dt],et);if($t===null){xt===null&&(xt=It);break}t&&xt&&$t.alternate===null&&e(U,xt),H=p($t,H,Dt),Ft===null?wt=$t:Ft.sibling=$t,Ft=$t,xt=It}if(Dt===G.length)return r(U,xt),Nt&&bt(U,Dt),wt;if(xt===null){for(;Dt<G.length;Dt++)xt=it(U,G[Dt],et),xt!==null&&(H=p(xt,H,Dt),Ft===null?wt=xt:Ft.sibling=xt,Ft=xt);return Nt&&bt(U,Dt),wt}for(xt=l(xt);Dt<G.length;Dt++)It=K(xt,U,Dt,G[Dt],et),It!==null&&(t&&It.alternate!==null&&xt.delete(It.key===null?Dt:It.key),H=p(It,H,Dt),Ft===null?wt=It:Ft.sibling=It,Ft=It);return t&&xt.forEach(function(nr){return e(U,nr)}),Nt&&bt(U,Dt),wt}function St(U,H,G,et){if(G==null)throw Error(c(151));for(var wt=null,Ft=null,xt=H,Dt=H=0,It=null,$t=G.next();xt!==null&&!$t.done;Dt++,$t=G.next()){xt.index>Dt?(It=xt,xt=null):It=xt.sibling;var nr=F(U,xt,$t.value,et);if(nr===null){xt===null&&(xt=It);break}t&&xt&&nr.alternate===null&&e(U,xt),H=p(nr,H,Dt),Ft===null?wt=nr:Ft.sibling=nr,Ft=nr,xt=It}if($t.done)return r(U,xt),Nt&&bt(U,Dt),wt;if(xt===null){for(;!$t.done;Dt++,$t=G.next())$t=it(U,$t.value,et),$t!==null&&(H=p($t,H,Dt),Ft===null?wt=$t:Ft.sibling=$t,Ft=$t);return Nt&&bt(U,Dt),wt}for(xt=l(xt);!$t.done;Dt++,$t=G.next())$t=K(xt,U,Dt,$t.value,et),$t!==null&&(t&&$t.alternate!==null&&xt.delete($t.key===null?Dt:$t.key),H=p($t,H,Dt),Ft===null?wt=$t:Ft.sibling=$t,Ft=$t);return t&&xt.forEach(function(w3){return e(U,w3)}),Nt&&bt(U,Dt),wt}function re(U,H,G,et){if(typeof G=="object"&&G!==null&&G.type===P&&G.key===null&&(G=G.props.children),typeof G=="object"&&G!==null){switch(G.$$typeof){case O:t:{for(var wt=G.key;H!==null;){if(H.key===wt){if(wt=G.type,wt===P){if(H.tag===7){r(U,H.sibling),et=h(H,G.props.children),et.return=U,U=et;break t}}else if(H.elementType===wt||typeof wt=="object"&&wt!==null&&wt.$$typeof===lt&&Xr(wt)===H.type){r(U,H.sibling),et=h(H,G.props),vl(et,G),et.return=U,U=et;break t}r(U,H);break}else e(U,H);H=H.sibling}G.type===P?(et=Xi(G.props.children,U.mode,et,G.key),et.return=U,U=et):(et=Gr(G.type,G.key,G.props,null,U.mode,et),vl(et,G),et.return=U,U=et)}return w(U);case R:t:{for(wt=G.key;H!==null;){if(H.key===wt)if(H.tag===4&&H.stateNode.containerInfo===G.containerInfo&&H.stateNode.implementation===G.implementation){r(U,H.sibling),et=h(H,G.children||[]),et.return=U,U=et;break t}else{r(U,H);break}else e(U,H);H=H.sibling}et=dl(G,U.mode,et),et.return=U,U=et}return w(U);case lt:return G=Xr(G),re(U,H,G,et)}if(ge(G))return vt(U,H,G,et);if(at(G)){if(wt=at(G),typeof wt!="function")throw Error(c(150));return G=wt.call(G),St(U,H,G,et)}if(typeof G.then=="function")return re(U,H,Cu(G),et);if(G.$$typeof===B)return re(U,H,bu(U,G),et);ju(U,G)}return typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint"?(G=""+G,H!==null&&H.tag===6?(r(U,H.sibling),et=h(H,G),et.return=U,U=et):(r(U,H),et=Ro(G,U.mode,et),et.return=U,U=et),w(U)):r(U,H)}return function(U,H,G,et){try{gl=0;var wt=re(U,H,G,et);return Ho=null,wt}catch(xt){if(xt===Vo||xt===Su)throw xt;var Ft=We(29,xt,null,U.mode);return Ft.lanes=et,Ft.return=U,Ft}}}var Qr=D0(!0),R0=D0(!1),Va=!1;function th(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function eh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ua(t,e,r){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Kt&2)!==0){var h=l.pending;return h===null?e.next=e:(e.next=h.next,h.next=e),l.pending=e,e=Ir(t),Pa(t,null,r),e}return zi(t,l,e,r),Ir(t)}function yl(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,r|=l,e.lanes=r,Fc(t,r)}}function nh(t,e){var r=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var h=null,p=null;if(r=r.firstBaseUpdate,r!==null){do{var w={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};p===null?h=p=w:p=p.next=w,r=r.next}while(r!==null);p===null?h=p=e:p=p.next=e}else h=p=e;r={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}var ih=!1;function xl(){if(ih){var t=No;if(t!==null)throw t}}function _l(t,e,r,l){ih=!1;var h=t.updateQueue;Va=!1;var p=h.firstBaseUpdate,w=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var N=E,q=N.next;N.next=null,w===null?p=q:w.next=q,w=N;var J=t.alternate;J!==null&&(J=J.updateQueue,E=J.lastBaseUpdate,E!==w&&(E===null?J.firstBaseUpdate=q:E.next=q,J.lastBaseUpdate=N))}if(p!==null){var it=h.baseState;w=0,J=q=N=null,E=p;do{var F=E.lane&-536870913,K=F!==E.lane;if(K?(Zt&F)===F:(l&F)===F){F!==0&&F===Po&&(ih=!0),J!==null&&(J=J.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var vt=t,St=E;F=e;var re=r;switch(St.tag){case 1:if(vt=St.payload,typeof vt=="function"){it=vt.call(re,it,F);break t}it=vt;break t;case 3:vt.flags=vt.flags&-65537|128;case 0:if(vt=St.payload,F=typeof vt=="function"?vt.call(re,it,F):vt,F==null)break t;it=C({},it,F);break t;case 2:Va=!0}}F=E.callback,F!==null&&(t.flags|=64,K&&(t.flags|=8192),K=h.callbacks,K===null?h.callbacks=[F]:K.push(F))}else K={lane:F,tag:E.tag,payload:E.payload,callback:E.callback,next:null},J===null?(q=J=K,N=it):J=J.next=K,w|=F;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;K=E,E=K.next,K.next=null,h.lastBaseUpdate=K,h.shared.pending=null}}while(!0);J===null&&(N=it),h.baseState=N,h.firstBaseUpdate=q,h.lastBaseUpdate=J,p===null&&(h.shared.lanes=0),Ya|=w,t.lanes=w,t.memoizedState=it}}function k0(t,e){if(typeof t!="function")throw Error(c(191,t));t.call(e)}function B0(t,e){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)k0(r[t],e)}var Uo=V(null),Eu=V(0);function P0(t,e){t=oa,ct(Eu,t),ct(Uo,e),oa=t|e.baseLanes}function ah(){ct(Eu,oa),ct(Uo,Uo.current)}function rh(){oa=Eu.current,W(Uo),W(Eu)}var Ln=V(null),Yn=null;function Za(t){var e=t.alternate;ct(Ce,Ce.current&1),ct(Ln,t),Yn===null&&(e===null||Uo.current!==null||e.memoizedState!==null)&&(Yn=t)}function oh(t){ct(Ce,Ce.current),ct(Ln,t),Yn===null&&(Yn=t)}function N0(t){t.tag===22?(ct(Ce,Ce.current),ct(Ln,t),Yn===null&&(Yn=t)):Ia()}function Ia(){ct(Ce,Ce.current),ct(Ln,Ln.current)}function On(t){W(Ln),Yn===t&&(Yn=null),W(Ce)}var Ce=V(0);function Au(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||fm(r)||hm(r)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wi=0,Lt=null,ie=null,ze=null,Mu=!1,Zo=!1,Wr=!1,zu=0,bl=0,Io=null,fw=0;function we(){throw Error(c(321))}function sh(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Ze(t[r],e[r]))return!1;return!0}function lh(t,e,r,l,h,p){return Wi=p,Lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,X.H=t===null||t.memoizedState===null?bv:Sh,Wr=!1,p=r(l,h),Wr=!1,Zo&&(p=H0(e,r,l,h)),V0(t),p}function V0(t){X.H=Tl;var e=ie!==null&&ie.next!==null;if(Wi=0,ze=ie=Lt=null,Mu=!1,bl=0,Io=null,e)throw Error(c(300));t===null||Le||(t=t.dependencies,t!==null&&_u(t)&&(Le=!0))}function H0(t,e,r,l){Lt=t;var h=0;do{if(Zo&&(Io=null),bl=0,Zo=!1,25<=h)throw Error(c(301));if(h+=1,ze=ie=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}X.H=wv,p=e(r,l)}while(Zo);return p}function hw(){var t=X.H,e=t.useState()[0];return e=typeof e.then=="function"?wl(e):e,t=t.useState()[0],(ie!==null?ie.memoizedState:null)!==t&&(Lt.flags|=1024),e}function ch(){var t=zu!==0;return zu=0,t}function uh(t,e,r){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r}function dh(t){if(Mu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Mu=!1}Wi=0,ze=ie=Lt=null,Zo=!1,bl=zu=0,Io=null}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Lt.memoizedState=ze=t:ze=ze.next=t,ze}function je(){if(ie===null){var t=Lt.alternate;t=t!==null?t.memoizedState:null}else t=ie.next;var e=ze===null?Lt.memoizedState:ze.next;if(e!==null)ze=e,ie=t;else{if(t===null)throw Lt.alternate===null?Error(c(467)):Error(c(310));ie=t,t={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ze===null?Lt.memoizedState=ze=t:ze=ze.next=t}return ze}function Lu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wl(t){var e=bl;return bl+=1,Io===null&&(Io=[]),t=z0(Io,t,e),e=Lt,(ze===null?e.memoizedState:ze.next)===null&&(e=e.alternate,X.H=e===null||e.memoizedState===null?bv:Sh),t}function Ou(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return wl(t);if(t.$$typeof===B)return Fe(t)}throw Error(c(438,String(t)))}function fh(t){var e=null,r=Lt.updateQueue;if(r!==null&&(e=r.memoCache),e==null){var l=Lt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(h){return h.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),r===null&&(r=Lu(),Lt.updateQueue=r),r.memoCache=e,r=e.data[e.index],r===void 0)for(r=e.data[e.index]=Array(t),l=0;l<t;l++)r[l]=gt;return e.index++,r}function Ji(t,e){return typeof e=="function"?e(t):e}function Du(t){var e=je();return hh(e,ie,t)}function hh(t,e,r){var l=t.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=r;var h=t.baseQueue,p=l.pending;if(p!==null){if(h!==null){var w=h.next;h.next=p.next,p.next=w}e.baseQueue=h=p,l.pending=null}if(p=t.baseState,h===null)t.memoizedState=p;else{e=h.next;var E=w=null,N=null,q=e,J=!1;do{var it=q.lane&-536870913;if(it!==q.lane?(Zt&it)===it:(Wi&it)===it){var F=q.revertLane;if(F===0)N!==null&&(N=N.next={lane:0,revertLane:0,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),it===Po&&(J=!0);else if((Wi&F)===F){q=q.next,F===Po&&(J=!0);continue}else it={lane:0,revertLane:q.revertLane,gesture:null,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},N===null?(E=N=it,w=p):N=N.next=it,Lt.lanes|=F,Ya|=F;it=q.action,Wr&&r(p,it),p=q.hasEagerState?q.eagerState:r(p,it)}else F={lane:it,revertLane:q.revertLane,gesture:q.gesture,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},N===null?(E=N=F,w=p):N=N.next=F,Lt.lanes|=it,Ya|=it;q=q.next}while(q!==null&&q!==e);if(N===null?w=p:N.next=E,!Ze(p,t.memoizedState)&&(Le=!0,J&&(r=No,r!==null)))throw r;t.memoizedState=p,t.baseState=w,t.baseQueue=N,l.lastRenderedState=p}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function mh(t){var e=je(),r=e.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=t;var l=r.dispatch,h=r.pending,p=e.memoizedState;if(h!==null){r.pending=null;var w=h=h.next;do p=t(p,w.action),w=w.next;while(w!==h);Ze(p,e.memoizedState)||(Le=!0),e.memoizedState=p,e.baseQueue===null&&(e.baseState=p),r.lastRenderedState=p}return[p,l]}function U0(t,e,r){var l=Lt,h=je(),p=Nt;if(p){if(r===void 0)throw Error(c(407));r=r()}else r=e();var w=!Ze((ie||h).memoizedState,r);if(w&&(h.memoizedState=r,Le=!0),h=h.queue,vh(G0.bind(null,l,h,t),[t]),h.getSnapshot!==e||w||ze!==null&&ze.memoizedState.tag&1){if(l.flags|=2048,Go(9,{destroy:void 0},I0.bind(null,l,h,r,e),null),le===null)throw Error(c(349));p||(Wi&127)!==0||Z0(l,e,r)}return r}function Z0(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=Lt.updateQueue,e===null?(e=Lu(),Lt.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function I0(t,e,r,l){e.value=r,e.getSnapshot=l,q0(e)&&Y0(t)}function G0(t,e,r){return r(function(){q0(e)&&Y0(t)})}function q0(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Ze(t,r)}catch{return!0}}function Y0(t){var e=Gn(t,2);e!==null&&Tn(e,t,2)}function ph(t){var e=sn();if(typeof t=="function"){var r=t;if(t=r(),Wr){ei(!0);try{r()}finally{ei(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:t},e}function F0(t,e,r,l){return t.baseState=r,hh(t,ie,typeof l=="function"?l:Ji)}function mw(t,e,r,l,h){if(Bu(t))throw Error(c(485));if(t=e.action,t!==null){var p={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){p.listeners.push(w)}};X.T!==null?r(!0):p.isTransition=!1,l(p),r=e.pending,r===null?(p.next=e.pending=p,$0(e,p)):(p.next=r.next,e.pending=r.next=p)}}function $0(t,e){var r=e.action,l=e.payload,h=t.state;if(e.isTransition){var p=X.T,w={};X.T=w;try{var E=r(h,l),N=X.S;N!==null&&N(w,E),X0(t,e,E)}catch(q){gh(t,e,q)}finally{p!==null&&w.types!==null&&(p.types=w.types),X.T=p}}else try{p=r(h,l),X0(t,e,p)}catch(q){gh(t,e,q)}}function X0(t,e,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){K0(t,e,l)},function(l){return gh(t,e,l)}):K0(t,e,r)}function K0(t,e,r){e.status="fulfilled",e.value=r,Q0(e),t.state=r,e=t.pending,e!==null&&(r=e.next,r===e?t.pending=null:(r=r.next,e.next=r,$0(t,r)))}function gh(t,e,r){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=r,Q0(e),e=e.next;while(e!==l)}t.action=null}function Q0(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function W0(t,e){return e}function J0(t,e){if(Nt){var r=le.formState;if(r!==null){t:{var l=Lt;if(Nt){if(Yt){e:{for(var h=Yt,p=xn;h.nodeType!==8;){if(!p){h=null;break e}if(h=Fn(h.nextSibling),h===null){h=null;break e}}p=h.data,h=p==="F!"||p==="F"?h:null}if(h){Yt=Fn(h.nextSibling),l=h.data==="F!";break t}}Oi(l)}l=!1}l&&(e=r[0])}}return r=sn(),r.memoizedState=r.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:W0,lastRenderedState:e},r.queue=l,r=yv.bind(null,Lt,l),l.dispatch=r,l=ph(!1),p=wh.bind(null,Lt,!1,l.queue),l=sn(),h={state:e,dispatch:null,action:t,pending:null},l.queue=h,r=mw.bind(null,Lt,h,p,r),h.dispatch=r,l.memoizedState=t,[e,r,!1]}function tv(t){var e=je();return ev(e,ie,t)}function ev(t,e,r){if(e=hh(t,e,W0)[0],t=Du(Ji)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=wl(e)}catch(w){throw w===Vo?Su:w}else l=e;e=je();var h=e.queue,p=h.dispatch;return r!==e.memoizedState&&(Lt.flags|=2048,Go(9,{destroy:void 0},pw.bind(null,h,r),null)),[l,p,t]}function pw(t,e){t.action=e}function nv(t){var e=je(),r=ie;if(r!==null)return ev(e,r,t);je(),e=e.memoizedState,r=je();var l=r.queue.dispatch;return r.memoizedState=t,[e,l,!1]}function Go(t,e,r,l){return t={tag:t,create:r,deps:l,inst:e,next:null},e=Lt.updateQueue,e===null&&(e=Lu(),Lt.updateQueue=e),r=e.lastEffect,r===null?e.lastEffect=t.next=t:(l=r.next,r.next=t,t.next=l,e.lastEffect=t),t}function iv(){return je().memoizedState}function Ru(t,e,r,l){var h=sn();Lt.flags|=t,h.memoizedState=Go(1|e,{destroy:void 0},r,l===void 0?null:l)}function ku(t,e,r,l){var h=je();l=l===void 0?null:l;var p=h.memoizedState.inst;ie!==null&&l!==null&&sh(l,ie.memoizedState.deps)?h.memoizedState=Go(e,p,r,l):(Lt.flags|=t,h.memoizedState=Go(1|e,p,r,l))}function av(t,e){Ru(8390656,8,t,e)}function vh(t,e){ku(2048,8,t,e)}function gw(t){Lt.flags|=4;var e=Lt.updateQueue;if(e===null)e=Lu(),Lt.updateQueue=e,e.events=[t];else{var r=e.events;r===null?e.events=[t]:r.push(t)}}function rv(t){var e=je().memoizedState;return gw({ref:e,nextImpl:t}),function(){if((Kt&2)!==0)throw Error(c(440));return e.impl.apply(void 0,arguments)}}function ov(t,e){return ku(4,2,t,e)}function sv(t,e){return ku(4,4,t,e)}function lv(t,e){if(typeof e=="function"){t=t();var r=e(t);return function(){typeof r=="function"?r():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cv(t,e,r){r=r!=null?r.concat([t]):null,ku(4,4,lv.bind(null,e,t),r)}function yh(){}function uv(t,e){var r=je();e=e===void 0?null:e;var l=r.memoizedState;return e!==null&&sh(e,l[1])?l[0]:(r.memoizedState=[t,e],t)}function dv(t,e){var r=je();e=e===void 0?null:e;var l=r.memoizedState;if(e!==null&&sh(e,l[1]))return l[0];if(l=t(),Wr){ei(!0);try{t()}finally{ei(!1)}}return r.memoizedState=[l,e],l}function xh(t,e,r){return r===void 0||(Wi&1073741824)!==0&&(Zt&261930)===0?t.memoizedState=e:(t.memoizedState=r,t=fy(),Lt.lanes|=t,Ya|=t,r)}function fv(t,e,r,l){return Ze(r,e)?r:Uo.current!==null?(t=xh(t,r,l),Ze(t,e)||(Le=!0),t):(Wi&42)===0||(Wi&1073741824)!==0&&(Zt&261930)===0?(Le=!0,t.memoizedState=r):(t=fy(),Lt.lanes|=t,Ya|=t,e)}function hv(t,e,r,l,h){var p=st.p;st.p=p!==0&&8>p?p:8;var w=X.T,E={};X.T=E,wh(t,!1,e,r);try{var N=h(),q=X.S;if(q!==null&&q(E,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var J=dw(N,l);Sl(t,e,J,kn(t))}else Sl(t,e,l,kn(t))}catch(it){Sl(t,e,{then:function(){},status:"rejected",reason:it},kn())}finally{st.p=p,w!==null&&E.types!==null&&(w.types=E.types),X.T=w}}function vw(){}function _h(t,e,r,l){if(t.tag!==5)throw Error(c(476));var h=mv(t).queue;hv(t,h,e,rt,r===null?vw:function(){return pv(t),r(l)})}function mv(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:rt,baseState:rt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:rt},next:null};var r={};return e.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:r},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function pv(t){var e=mv(t);e.next===null&&(e=t.alternate.memoizedState),Sl(t,e.next.queue,{},kn())}function bh(){return Fe(Hl)}function gv(){return je().memoizedState}function vv(){return je().memoizedState}function yw(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var r=kn();t=Ha(r);var l=Ua(e,t,r);l!==null&&(Tn(l,e,r),yl(l,e,r)),e={cache:Kf()},t.payload=e;return}e=e.return}}function xw(t,e,r){var l=kn();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bu(t)?xv(e,r):(r=ll(t,e,r,l),r!==null&&(Tn(r,t,l),_v(r,e,l)))}function yv(t,e,r){var l=kn();Sl(t,e,r,l)}function Sl(t,e,r,l){var h={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Bu(t))xv(e,h);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=e.lastRenderedReducer,p!==null))try{var w=e.lastRenderedState,E=p(w,r);if(h.hasEagerState=!0,h.eagerState=E,Ze(E,w))return zi(t,e,h,0),le===null&&Zr(),!1}catch{}if(r=ll(t,e,h,l),r!==null)return Tn(r,t,l),_v(r,e,l),!0}return!1}function wh(t,e,r,l){if(l={lane:2,revertLane:tm(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Bu(t)){if(e)throw Error(c(479))}else e=ll(t,r,l,2),e!==null&&Tn(e,t,2)}function Bu(t){var e=t.alternate;return t===Lt||e!==null&&e===Lt}function xv(t,e){Zo=Mu=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function _v(t,e,r){if((r&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,r|=l,e.lanes=r,Fc(t,r)}}var Tl={readContext:Fe,use:Ou,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useLayoutEffect:we,useInsertionEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useSyncExternalStore:we,useId:we,useHostTransitionStatus:we,useFormState:we,useActionState:we,useOptimistic:we,useMemoCache:we,useCacheRefresh:we};Tl.useEffectEvent=we;var bv={readContext:Fe,use:Ou,useCallback:function(t,e){return sn().memoizedState=[t,e===void 0?null:e],t},useContext:Fe,useEffect:av,useImperativeHandle:function(t,e,r){r=r!=null?r.concat([t]):null,Ru(4194308,4,lv.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Ru(4194308,4,t,e)},useInsertionEffect:function(t,e){Ru(4,2,t,e)},useMemo:function(t,e){var r=sn();e=e===void 0?null:e;var l=t();if(Wr){ei(!0);try{t()}finally{ei(!1)}}return r.memoizedState=[l,e],l},useReducer:function(t,e,r){var l=sn();if(r!==void 0){var h=r(e);if(Wr){ei(!0);try{r(e)}finally{ei(!1)}}}else h=e;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=xw.bind(null,Lt,t),[l.memoizedState,t]},useRef:function(t){var e=sn();return t={current:t},e.memoizedState=t},useState:function(t){t=ph(t);var e=t.queue,r=yv.bind(null,Lt,e);return e.dispatch=r,[t.memoizedState,r]},useDebugValue:yh,useDeferredValue:function(t,e){var r=sn();return xh(r,t,e)},useTransition:function(){var t=ph(!1);return t=hv.bind(null,Lt,t.queue,!0,!1),sn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,r){var l=Lt,h=sn();if(Nt){if(r===void 0)throw Error(c(407));r=r()}else{if(r=e(),le===null)throw Error(c(349));(Zt&127)!==0||Z0(l,e,r)}h.memoizedState=r;var p={value:r,getSnapshot:e};return h.queue=p,av(G0.bind(null,l,p,t),[t]),l.flags|=2048,Go(9,{destroy:void 0},I0.bind(null,l,p,r,e),null),r},useId:function(){var t=sn(),e=le.identifierPrefix;if(Nt){var r=ft,l=nt;r=(l&~(1<<32-an(l)-1)).toString(32)+r,e="_"+e+"R_"+r,r=zu++,0<r&&(e+="H"+r.toString(32)),e+="_"}else r=fw++,e="_"+e+"r_"+r.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:bh,useFormState:J0,useActionState:J0,useOptimistic:function(t){var e=sn();e.memoizedState=e.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=r,e=wh.bind(null,Lt,!0,r),r.dispatch=e,[t,e]},useMemoCache:fh,useCacheRefresh:function(){return sn().memoizedState=yw.bind(null,Lt)},useEffectEvent:function(t){var e=sn(),r={impl:t};return e.memoizedState=r,function(){if((Kt&2)!==0)throw Error(c(440));return r.impl.apply(void 0,arguments)}}},Sh={readContext:Fe,use:Ou,useCallback:uv,useContext:Fe,useEffect:vh,useImperativeHandle:cv,useInsertionEffect:ov,useLayoutEffect:sv,useMemo:dv,useReducer:Du,useRef:iv,useState:function(){return Du(Ji)},useDebugValue:yh,useDeferredValue:function(t,e){var r=je();return fv(r,ie.memoizedState,t,e)},useTransition:function(){var t=Du(Ji)[0],e=je().memoizedState;return[typeof t=="boolean"?t:wl(t),e]},useSyncExternalStore:U0,useId:gv,useHostTransitionStatus:bh,useFormState:tv,useActionState:tv,useOptimistic:function(t,e){var r=je();return F0(r,ie,t,e)},useMemoCache:fh,useCacheRefresh:vv};Sh.useEffectEvent=rv;var wv={readContext:Fe,use:Ou,useCallback:uv,useContext:Fe,useEffect:vh,useImperativeHandle:cv,useInsertionEffect:ov,useLayoutEffect:sv,useMemo:dv,useReducer:mh,useRef:iv,useState:function(){return mh(Ji)},useDebugValue:yh,useDeferredValue:function(t,e){var r=je();return ie===null?xh(r,t,e):fv(r,ie.memoizedState,t,e)},useTransition:function(){var t=mh(Ji)[0],e=je().memoizedState;return[typeof t=="boolean"?t:wl(t),e]},useSyncExternalStore:U0,useId:gv,useHostTransitionStatus:bh,useFormState:nv,useActionState:nv,useOptimistic:function(t,e){var r=je();return ie!==null?F0(r,ie,t,e):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:fh,useCacheRefresh:vv};wv.useEffectEvent=rv;function Th(t,e,r,l){e=t.memoizedState,r=r(l,e),r=r==null?e:C({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Ch={enqueueSetState:function(t,e,r){t=t._reactInternals;var l=kn(),h=Ha(l);h.payload=e,r!=null&&(h.callback=r),e=Ua(t,h,l),e!==null&&(Tn(e,t,l),yl(e,t,l))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var l=kn(),h=Ha(l);h.tag=1,h.payload=e,r!=null&&(h.callback=r),e=Ua(t,h,l),e!==null&&(Tn(e,t,l),yl(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=kn(),l=Ha(r);l.tag=2,e!=null&&(l.callback=e),e=Ua(t,l,r),e!==null&&(Tn(e,t,r),yl(e,t,r))}};function Sv(t,e,r,l,h,p,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,w):e.prototype&&e.prototype.isPureReactComponent?!Da(r,l)||!Da(h,p):!0}function Tv(t,e,r,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,l),e.state!==t&&Ch.enqueueReplaceState(e,e.state,null)}function Jr(t,e){var r=e;if("ref"in e){r={};for(var l in e)l!=="ref"&&(r[l]=e[l])}if(t=t.defaultProps){r===e&&(r=C({},r));for(var h in t)r[h]===void 0&&(r[h]=t[h])}return r}function Cv(t){Ur(t)}function jv(t){console.error(t)}function Ev(t){Ur(t)}function Pu(t,e){try{var r=t.onUncaughtError;r(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Av(t,e,r){try{var l=t.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function jh(t,e,r){return r=Ha(r),r.tag=3,r.payload={element:null},r.callback=function(){Pu(t,e)},r}function Mv(t){return t=Ha(t),t.tag=3,t}function zv(t,e,r,l){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var p=l.value;t.payload=function(){return h(p)},t.callback=function(){Av(e,r,l)}}var w=r.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(t.callback=function(){Av(e,r,l),typeof h!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function _w(t,e,r,l,h){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=r.alternate,e!==null&&Bo(e,r,h,!0),r=Ln.current,r!==null){switch(r.tag){case 31:case 13:return Yn===null?Xu():r.alternate===null&&Se===0&&(Se=3),r.flags&=-257,r.flags|=65536,r.lanes=h,l===Tu?r.flags|=16384:(e=r.updateQueue,e===null?r.updateQueue=new Set([l]):e.add(l),Qh(t,l,h)),!1;case 22:return r.flags|=65536,l===Tu?r.flags|=16384:(e=r.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=e):(r=e.retryQueue,r===null?e.retryQueue=new Set([l]):r.add(l)),Qh(t,l,h)),!1}throw Error(c(435,r.tag))}return Qh(t,l,h),Xu(),!1}if(Nt)return e=Ln.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=h,l!==ko&&(t=Error(c(422),{cause:l}),qr(s(t,r)))):(l!==ko&&(e=Error(c(423),{cause:l}),qr(s(e,r))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=s(l,r),h=jh(t.stateNode,l,h),nh(t,h),Se!==4&&(Se=2)),!1;var p=Error(c(520),{cause:l});if(p=s(p,r),Ol===null?Ol=[p]:Ol.push(p),Se!==4&&(Se=2),e===null)return!0;l=s(l,r),r=e;do{switch(r.tag){case 3:return r.flags|=65536,t=h&-h,r.lanes|=t,t=jh(r.stateNode,l,t),nh(r,t),!1;case 1:if(e=r.type,p=r.stateNode,(r.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Fa===null||!Fa.has(p))))return r.flags|=65536,h&=-h,r.lanes|=h,h=Mv(h),zv(h,t,r,l),nh(r,h),!1}r=r.return}while(r!==null);return!1}var Eh=Error(c(461)),Le=!1;function $e(t,e,r,l){e.child=t===null?R0(e,null,r,l):Qr(e,t.child,r,l)}function Lv(t,e,r,l,h){r=r.render;var p=e.ref;if("ref"in l){var w={};for(var E in l)E!=="ref"&&(w[E]=l[E])}else w=l;return Fr(e),l=lh(t,e,r,w,p,h),E=ch(),t!==null&&!Le?(uh(t,e,h),ta(t,e,h)):(Nt&&E&&Pe(e),e.flags|=1,$e(t,e,l,h),e.child)}function Ov(t,e,r,l,h){if(t===null){var p=r.type;return typeof p=="function"&&!Do(p)&&p.defaultProps===void 0&&r.compare===null?(e.tag=15,e.type=p,Dv(t,e,p,l,h)):(t=Gr(r.type,null,l,e,e.mode,h),t.ref=e.ref,t.return=e,e.child=t)}if(p=t.child,!kh(t,h)){var w=p.memoizedProps;if(r=r.compare,r=r!==null?r:Da,r(w,l)&&t.ref===e.ref)return ta(t,e,h)}return e.flags|=1,t=qn(p,l),t.ref=e.ref,t.return=e,e.child=t}function Dv(t,e,r,l,h){if(t!==null){var p=t.memoizedProps;if(Da(p,l)&&t.ref===e.ref)if(Le=!1,e.pendingProps=l=p,kh(t,h))(t.flags&131072)!==0&&(Le=!0);else return e.lanes=t.lanes,ta(t,e,h)}return Ah(t,e,r,l,h)}function Rv(t,e,r,l){var h=l.children,p=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(p=p!==null?p.baseLanes|r:r,t!==null){for(l=e.child=t.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~p}else l=0,e.child=null;return kv(t,e,p,r,l)}if((r&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&wu(e,p!==null?p.cachePool:null),p!==null?P0(e,p):ah(),N0(e);else return l=e.lanes=536870912,kv(t,e,p!==null?p.baseLanes|r:r,r,l)}else p!==null?(wu(e,p.cachePool),P0(e,p),Ia(),e.memoizedState=null):(t!==null&&wu(e,null),ah(),Ia());return $e(t,e,h,r),e.child}function Cl(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function kv(t,e,r,l,h){var p=Wf();return p=p===null?null:{parent:Me._currentValue,pool:p},e.memoizedState={baseLanes:r,cachePool:p},t!==null&&wu(e,null),ah(),N0(e),t!==null&&Bo(t,e,l,!0),e.childLanes=h,null}function Nu(t,e){return e=Hu({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Bv(t,e,r){return Qr(e,t.child,null,r),t=Nu(e,e.pendingProps),t.flags|=2,On(e),e.memoizedState=null,t}function bw(t,e,r){var l=e.pendingProps,h=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Nt){if(l.mode==="hidden")return t=Nu(e,l),e.lanes=536870912,Cl(null,t);if(oh(e),(t=Yt)?(t=$y(t,xn),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Y!==null?{id:nt,overflow:ft}:null,retryLane:536870912,hydrationErrors:null},r=ul(t),r.return=e,e.child=r,qt=e,Yt=null)):t=null,t===null)throw Oi(e);return e.lanes=536870912,null}return Nu(e,l)}var p=t.memoizedState;if(p!==null){var w=p.dehydrated;if(oh(e),h)if(e.flags&256)e.flags&=-257,e=Bv(t,e,r);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(c(558));else if(Le||Bo(t,e,r,!1),h=(r&t.childLanes)!==0,Le||h){if(l=le,l!==null&&(w=$c(l,r),w!==0&&w!==p.retryLane))throw p.retryLane=w,Gn(t,w),Tn(l,t,w),Eh;Xu(),e=Bv(t,e,r)}else t=p.treeContext,Yt=Fn(w.nextSibling),qt=e,Nt=!0,Li=null,xn=!1,t!==null&&on(e,t),e=Nu(e,l),e.flags|=4096;return e}return t=qn(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Vu(t,e){var r=e.ref;if(r===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(c(284));(t===null||t.ref!==r)&&(e.flags|=4194816)}}function Ah(t,e,r,l,h){return Fr(e),r=lh(t,e,r,l,void 0,h),l=ch(),t!==null&&!Le?(uh(t,e,h),ta(t,e,h)):(Nt&&l&&Pe(e),e.flags|=1,$e(t,e,r,h),e.child)}function Pv(t,e,r,l,h,p){return Fr(e),e.updateQueue=null,r=H0(e,l,r,h),V0(t),l=ch(),t!==null&&!Le?(uh(t,e,p),ta(t,e,p)):(Nt&&l&&Pe(e),e.flags|=1,$e(t,e,r,p),e.child)}function Nv(t,e,r,l,h){if(Fr(e),e.stateNode===null){var p=$i,w=r.contextType;typeof w=="object"&&w!==null&&(p=Fe(w)),p=new r(l,p),e.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Ch,e.stateNode=p,p._reactInternals=e,p=e.stateNode,p.props=l,p.state=e.memoizedState,p.refs={},th(e),w=r.contextType,p.context=typeof w=="object"&&w!==null?Fe(w):$i,p.state=e.memoizedState,w=r.getDerivedStateFromProps,typeof w=="function"&&(Th(e,r,w,l),p.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(w=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),w!==p.state&&Ch.enqueueReplaceState(p,p.state,null),_l(e,l,p,h),xl(),p.state=e.memoizedState),typeof p.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){p=e.stateNode;var E=e.memoizedProps,N=Jr(r,E);p.props=N;var q=p.context,J=r.contextType;w=$i,typeof J=="object"&&J!==null&&(w=Fe(J));var it=r.getDerivedStateFromProps;J=typeof it=="function"||typeof p.getSnapshotBeforeUpdate=="function",E=e.pendingProps!==E,J||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(E||q!==w)&&Tv(e,p,l,w),Va=!1;var F=e.memoizedState;p.state=F,_l(e,l,p,h),xl(),q=e.memoizedState,E||F!==q||Va?(typeof it=="function"&&(Th(e,r,it,l),q=e.memoizedState),(N=Va||Sv(e,r,N,l,F,q,w))?(J||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(e.flags|=4194308)):(typeof p.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=q),p.props=l,p.state=q,p.context=w,l=N):(typeof p.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{p=e.stateNode,eh(t,e),w=e.memoizedProps,J=Jr(r,w),p.props=J,it=e.pendingProps,F=p.context,q=r.contextType,N=$i,typeof q=="object"&&q!==null&&(N=Fe(q)),E=r.getDerivedStateFromProps,(q=typeof E=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w!==it||F!==N)&&Tv(e,p,l,N),Va=!1,F=e.memoizedState,p.state=F,_l(e,l,p,h),xl();var K=e.memoizedState;w!==it||F!==K||Va||t!==null&&t.dependencies!==null&&_u(t.dependencies)?(typeof E=="function"&&(Th(e,r,E,l),K=e.memoizedState),(J=Va||Sv(e,r,J,l,F,K,N)||t!==null&&t.dependencies!==null&&_u(t.dependencies))?(q||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,K,N),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,K,N)),typeof p.componentDidUpdate=="function"&&(e.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof p.componentDidUpdate!="function"||w===t.memoizedProps&&F===t.memoizedState||(e.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&F===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=K),p.props=l,p.state=K,p.context=N,l=J):(typeof p.componentDidUpdate!="function"||w===t.memoizedProps&&F===t.memoizedState||(e.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&F===t.memoizedState||(e.flags|=1024),l=!1)}return p=l,Vu(t,e),l=(e.flags&128)!==0,p||l?(p=e.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:p.render(),e.flags|=1,t!==null&&l?(e.child=Qr(e,t.child,null,h),e.child=Qr(e,null,r,h)):$e(t,e,r,h),e.memoizedState=p.state,t=e.child):t=ta(t,e,h),t}function Vv(t,e,r,l){return Ki(),e.flags|=256,$e(t,e,r,l),e.child}var Mh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zh(t){return{baseLanes:t,cachePool:A0()}}function Lh(t,e,r){return t=t!==null?t.childLanes&~r:0,e&&(t|=Rn),t}function Hv(t,e,r){var l=e.pendingProps,h=!1,p=(e.flags&128)!==0,w;if((w=p)||(w=t!==null&&t.memoizedState===null?!1:(Ce.current&2)!==0),w&&(h=!0,e.flags&=-129),w=(e.flags&32)!==0,e.flags&=-33,t===null){if(Nt){if(h?Za(e):Ia(),(t=Yt)?(t=$y(t,xn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Y!==null?{id:nt,overflow:ft}:null,retryLane:536870912,hydrationErrors:null},r=ul(t),r.return=e,e.child=r,qt=e,Yt=null)):t=null,t===null)throw Oi(e);return hm(t)?e.lanes=32:e.lanes=536870912,null}var E=l.children;return l=l.fallback,h?(Ia(),h=e.mode,E=Hu({mode:"hidden",children:E},h),l=Xi(l,h,r,null),E.return=e,l.return=e,E.sibling=l,e.child=E,l=e.child,l.memoizedState=zh(r),l.childLanes=Lh(t,w,r),e.memoizedState=Mh,Cl(null,l)):(Za(e),Oh(e,E))}var N=t.memoizedState;if(N!==null&&(E=N.dehydrated,E!==null)){if(p)e.flags&256?(Za(e),e.flags&=-257,e=Dh(t,e,r)):e.memoizedState!==null?(Ia(),e.child=t.child,e.flags|=128,e=null):(Ia(),E=l.fallback,h=e.mode,l=Hu({mode:"visible",children:l.children},h),E=Xi(E,h,r,null),E.flags|=2,l.return=e,E.return=e,l.sibling=E,e.child=l,Qr(e,t.child,null,r),l=e.child,l.memoizedState=zh(r),l.childLanes=Lh(t,w,r),e.memoizedState=Mh,e=Cl(null,l));else if(Za(e),hm(E)){if(w=E.nextSibling&&E.nextSibling.dataset,w)var q=w.dgst;w=q,l=Error(c(419)),l.stack="",l.digest=w,qr({value:l,source:null,stack:null}),e=Dh(t,e,r)}else if(Le||Bo(t,e,r,!1),w=(r&t.childLanes)!==0,Le||w){if(w=le,w!==null&&(l=$c(w,r),l!==0&&l!==N.retryLane))throw N.retryLane=l,Gn(t,l),Tn(w,t,l),Eh;fm(E)||Xu(),e=Dh(t,e,r)}else fm(E)?(e.flags|=192,e.child=t.child,e=null):(t=N.treeContext,Yt=Fn(E.nextSibling),qt=e,Nt=!0,Li=null,xn=!1,t!==null&&on(e,t),e=Oh(e,l.children),e.flags|=4096);return e}return h?(Ia(),E=l.fallback,h=e.mode,N=t.child,q=N.sibling,l=qn(N,{mode:"hidden",children:l.children}),l.subtreeFlags=N.subtreeFlags&65011712,q!==null?E=qn(q,E):(E=Xi(E,h,r,null),E.flags|=2),E.return=e,l.return=e,l.sibling=E,e.child=l,Cl(null,l),l=e.child,E=t.child.memoizedState,E===null?E=zh(r):(h=E.cachePool,h!==null?(N=Me._currentValue,h=h.parent!==N?{parent:N,pool:N}:h):h=A0(),E={baseLanes:E.baseLanes|r,cachePool:h}),l.memoizedState=E,l.childLanes=Lh(t,w,r),e.memoizedState=Mh,Cl(t.child,l)):(Za(e),r=t.child,t=r.sibling,r=qn(r,{mode:"visible",children:l.children}),r.return=e,r.sibling=null,t!==null&&(w=e.deletions,w===null?(e.deletions=[t],e.flags|=16):w.push(t)),e.child=r,e.memoizedState=null,r)}function Oh(t,e){return e=Hu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Hu(t,e){return t=We(22,t,null,e),t.lanes=0,t}function Dh(t,e,r){return Qr(e,t.child,null,r),t=Oh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Uv(t,e,r){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),$f(t.return,e,r)}function Rh(t,e,r,l,h,p){var w=t.memoizedState;w===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:h,treeForkCount:p}:(w.isBackwards=e,w.rendering=null,w.renderingStartTime=0,w.last=l,w.tail=r,w.tailMode=h,w.treeForkCount=p)}function Zv(t,e,r){var l=e.pendingProps,h=l.revealOrder,p=l.tail;l=l.children;var w=Ce.current,E=(w&2)!==0;if(E?(w=w&1|2,e.flags|=128):w&=1,ct(Ce,w),$e(t,e,l,r),l=Nt?j:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Uv(t,r,e);else if(t.tag===19)Uv(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(h){case"forwards":for(r=e.child,h=null;r!==null;)t=r.alternate,t!==null&&Au(t)===null&&(h=r),r=r.sibling;r=h,r===null?(h=e.child,e.child=null):(h=r.sibling,r.sibling=null),Rh(e,!1,h,r,p,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,h=e.child,e.child=null;h!==null;){if(t=h.alternate,t!==null&&Au(t)===null){e.child=h;break}t=h.sibling,h.sibling=r,r=h,h=t}Rh(e,!0,r,null,p,l);break;case"together":Rh(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function ta(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),Ya|=e.lanes,(r&e.childLanes)===0)if(t!==null){if(Bo(t,e,r,!1),(r&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(c(153));if(e.child!==null){for(t=e.child,r=qn(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=qn(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function kh(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&_u(t)))}function ww(t,e,r){switch(e.tag){case 3:Jt(e,e.stateNode.containerInfo),Na(e,Me,t.memoizedState.cache),Ki();break;case 27:case 5:un(e);break;case 4:Jt(e,e.stateNode.containerInfo);break;case 10:Na(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,oh(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(Za(e),e.flags|=128,null):(r&e.child.childLanes)!==0?Hv(t,e,r):(Za(e),t=ta(t,e,r),t!==null?t.sibling:null);Za(e);break;case 19:var h=(t.flags&128)!==0;if(l=(r&e.childLanes)!==0,l||(Bo(t,e,r,!1),l=(r&e.childLanes)!==0),h){if(l)return Zv(t,e,r);e.flags|=128}if(h=e.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ct(Ce,Ce.current),l)break;return null;case 22:return e.lanes=0,Rv(t,e,r,e.pendingProps);case 24:Na(e,Me,t.memoizedState.cache)}return ta(t,e,r)}function Iv(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps)Le=!0;else{if(!kh(t,r)&&(e.flags&128)===0)return Le=!1,ww(t,e,r);Le=(t.flags&131072)!==0}else Le=!1,Nt&&(e.flags&1048576)!==0&&Ot(e,j,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=Xr(e.elementType),e.type=t,typeof t=="function")Do(t)?(l=Jr(t,l),e.tag=1,e=Nv(null,e,t,l,r)):(e.tag=0,e=Ah(null,e,t,l,r));else{if(t!=null){var h=t.$$typeof;if(h===Q){e.tag=11,e=Lv(null,e,t,l,r);break t}else if(h===$){e.tag=14,e=Ov(null,e,t,l,r);break t}}throw e=Bt(t)||t,Error(c(306,e,""))}}return e;case 0:return Ah(t,e,e.type,e.pendingProps,r);case 1:return l=e.type,h=Jr(l,e.pendingProps),Nv(t,e,l,h,r);case 3:t:{if(Jt(e,e.stateNode.containerInfo),t===null)throw Error(c(387));l=e.pendingProps;var p=e.memoizedState;h=p.element,eh(t,e),_l(e,l,null,r);var w=e.memoizedState;if(l=w.cache,Na(e,Me,l),l!==p.cache&&Xf(e,[Me],r,!0),xl(),l=w.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:w.cache},e.updateQueue.baseState=p,e.memoizedState=p,e.flags&256){e=Vv(t,e,l,r);break t}else if(l!==h){h=s(Error(c(424)),e),qr(h),e=Vv(t,e,l,r);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Yt=Fn(t.firstChild),qt=e,Nt=!0,Li=null,xn=!0,r=R0(e,null,l,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ki(),l===h){e=ta(t,e,r);break t}$e(t,e,l,r)}e=e.child}return e;case 26:return Vu(t,e),t===null?(r=t1(e.type,null,e.pendingProps,null))?e.memoizedState=r:Nt||(r=e.type,t=e.pendingProps,l=nd(ht.current).createElement(r),l[Ee]=e,l[Ue]=t,Xe(l,r,t),Ae(l),e.stateNode=l):e.memoizedState=t1(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return un(e),t===null&&Nt&&(l=e.stateNode=Qy(e.type,e.pendingProps,ht.current),qt=e,xn=!0,h=Yt,Qa(e.type)?(mm=h,Yt=Fn(l.firstChild)):Yt=h),$e(t,e,e.pendingProps.children,r),Vu(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Nt&&((h=l=Yt)&&(l=Ww(l,e.type,e.pendingProps,xn),l!==null?(e.stateNode=l,qt=e,Yt=Fn(l.firstChild),xn=!1,h=!0):h=!1),h||Oi(e)),un(e),h=e.type,p=e.pendingProps,w=t!==null?t.memoizedProps:null,l=p.children,cm(h,p)?l=null:w!==null&&cm(h,w)&&(e.flags|=32),e.memoizedState!==null&&(h=lh(t,e,hw,null,null,r),Hl._currentValue=h),Vu(t,e),$e(t,e,l,r),e.child;case 6:return t===null&&Nt&&((t=r=Yt)&&(r=Jw(r,e.pendingProps,xn),r!==null?(e.stateNode=r,qt=e,Yt=null,t=!0):t=!1),t||Oi(e)),null;case 13:return Hv(t,e,r);case 4:return Jt(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=Qr(e,null,l,r):$e(t,e,l,r),e.child;case 11:return Lv(t,e,e.type,e.pendingProps,r);case 7:return $e(t,e,e.pendingProps,r),e.child;case 8:return $e(t,e,e.pendingProps.children,r),e.child;case 12:return $e(t,e,e.pendingProps.children,r),e.child;case 10:return l=e.pendingProps,Na(e,e.type,l.value),$e(t,e,l.children,r),e.child;case 9:return h=e.type._context,l=e.pendingProps.children,Fr(e),h=Fe(h),l=l(h),e.flags|=1,$e(t,e,l,r),e.child;case 14:return Ov(t,e,e.type,e.pendingProps,r);case 15:return Dv(t,e,e.type,e.pendingProps,r);case 19:return Zv(t,e,r);case 31:return bw(t,e,r);case 22:return Rv(t,e,r,e.pendingProps);case 24:return Fr(e),l=Fe(Me),t===null?(h=Wf(),h===null&&(h=le,p=Kf(),h.pooledCache=p,p.refCount++,p!==null&&(h.pooledCacheLanes|=r),h=p),e.memoizedState={parent:l,cache:h},th(e),Na(e,Me,h)):((t.lanes&r)!==0&&(eh(t,e),_l(e,null,null,r),xl()),h=t.memoizedState,p=e.memoizedState,h.parent!==l?(h={parent:l,cache:l},e.memoizedState=h,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=h),Na(e,Me,l)):(l=p.cache,Na(e,Me,l),l!==h.cache&&Xf(e,[Me],r,!0))),$e(t,e,e.pendingProps.children,r),e.child;case 29:throw e.pendingProps}throw Error(c(156,e.tag))}function ea(t){t.flags|=4}function Bh(t,e,r,l,h){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(h&335544128)===h)if(t.stateNode.complete)t.flags|=8192;else if(gy())t.flags|=8192;else throw Kr=Tu,Jf}else t.flags&=-16777217}function Gv(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!r1(e))if(gy())t.flags|=8192;else throw Kr=Tu,Jf}function Uu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?qc():536870912,t.lanes|=e,$o|=e)}function jl(t,e){if(!Nt)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ue(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,l=0;if(e)for(var h=t.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=r,e}function Sw(t,e,r){var l=e.pendingProps;switch(be(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(e),null;case 1:return ue(e),null;case 3:return r=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Qi(Me),Xt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(li(e)?ea(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,hl())),ue(e),null;case 26:var h=e.type,p=e.memoizedState;return t===null?(ea(e),p!==null?(ue(e),Gv(e,p)):(ue(e),Bh(e,h,null,l,r))):p?p!==t.memoizedState?(ea(e),ue(e),Gv(e,p)):(ue(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&ea(e),ue(e),Bh(e,h,t,l,r)),null;case 27:if(dn(e),r=ht.current,h=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&ea(e);else{if(!l){if(e.stateNode===null)throw Error(c(166));return ue(e),null}t=ut.current,li(e)?fl(e):(t=Qy(h,l,r),e.stateNode=t,ea(e))}return ue(e),null;case 5:if(dn(e),h=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&ea(e);else{if(!l){if(e.stateNode===null)throw Error(c(166));return ue(e),null}if(p=ut.current,li(e))fl(e);else{var w=nd(ht.current);switch(p){case 1:p=w.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:p=w.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":p=w.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":p=w.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":p=w.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?w.createElement("select",{is:l.is}):w.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?w.createElement(h,{is:l.is}):w.createElement(h)}}p[Ee]=e,p[Ue]=l;t:for(w=e.child;w!==null;){if(w.tag===5||w.tag===6)p.appendChild(w.stateNode);else if(w.tag!==4&&w.tag!==27&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===e)break t;for(;w.sibling===null;){if(w.return===null||w.return===e)break t;w=w.return}w.sibling.return=w.return,w=w.sibling}e.stateNode=p;t:switch(Xe(p,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&ea(e)}}return ue(e),Bh(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,r),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&ea(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(c(166));if(t=ht.current,li(e)){if(t=e.stateNode,r=e.memoizedProps,l=null,h=qt,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[Ee]=e,t=!!(t.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||Hy(t.nodeValue,r)),t||Oi(e,!0)}else t=nd(t).createTextNode(l),t[Ee]=e,e.stateNode=t}return ue(e),null;case 31:if(r=e.memoizedState,t===null||t.memoizedState!==null){if(l=li(e),r!==null){if(t===null){if(!l)throw Error(c(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(557));t[Ee]=e}else Ki(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ue(e),t=!1}else r=hl(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return e.flags&256?(On(e),e):(On(e),null);if((e.flags&128)!==0)throw Error(c(558))}return ue(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=li(e),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(c(318));if(h=e.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(c(317));h[Ee]=e}else Ki(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;ue(e),h=!1}else h=hl(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return e.flags&256?(On(e),e):(On(e),null)}return On(e),(e.flags&128)!==0?(e.lanes=r,e):(r=l!==null,t=t!==null&&t.memoizedState!==null,r&&(l=e.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==h&&(l.flags|=2048)),r!==t&&r&&(e.child.flags|=8192),Uu(e,e.updateQueue),ue(e),null);case 4:return Xt(),t===null&&am(e.stateNode.containerInfo),ue(e),null;case 10:return Qi(e.type),ue(e),null;case 19:if(W(Ce),l=e.memoizedState,l===null)return ue(e),null;if(h=(e.flags&128)!==0,p=l.rendering,p===null)if(h)jl(l,!1);else{if(Se!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(p=Au(t),p!==null){for(e.flags|=128,jl(l,!1),t=p.updateQueue,e.updateQueue=t,Uu(e,t),e.subtreeFlags=0,t=r,r=e.child;r!==null;)cl(r,t),r=r.sibling;return ct(Ce,Ce.current&1|2),Nt&&bt(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&nn()>Yu&&(e.flags|=128,h=!0,jl(l,!1),e.lanes=4194304)}else{if(!h)if(t=Au(p),t!==null){if(e.flags|=128,h=!0,t=t.updateQueue,e.updateQueue=t,Uu(e,t),jl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Nt)return ue(e),null}else 2*nn()-l.renderingStartTime>Yu&&r!==536870912&&(e.flags|=128,h=!0,jl(l,!1),e.lanes=4194304);l.isBackwards?(p.sibling=e.child,e.child=p):(t=l.last,t!==null?t.sibling=p:e.child=p,l.last=p)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=nn(),t.sibling=null,r=Ce.current,ct(Ce,h?r&1|2:r&1),Nt&&bt(e,l.treeForkCount),t):(ue(e),null);case 22:case 23:return On(e),rh(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(r&536870912)!==0&&(e.flags&128)===0&&(ue(e),e.subtreeFlags&6&&(e.flags|=8192)):ue(e),r=e.updateQueue,r!==null&&Uu(e,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==r&&(e.flags|=2048),t!==null&&W($r),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),Qi(Me),ue(e),null;case 25:return null;case 30:return null}throw Error(c(156,e.tag))}function Tw(t,e){switch(be(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qi(Me),Xt(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return dn(e),null;case 31:if(e.memoizedState!==null){if(On(e),e.alternate===null)throw Error(c(340));Ki()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(On(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(c(340));Ki()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return W(Ce),null;case 4:return Xt(),null;case 10:return Qi(e.type),null;case 22:case 23:return On(e),rh(),t!==null&&W($r),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Qi(Me),null;case 25:return null;default:return null}}function qv(t,e){switch(be(e),e.tag){case 3:Qi(Me),Xt();break;case 26:case 27:case 5:dn(e);break;case 4:Xt();break;case 31:e.memoizedState!==null&&On(e);break;case 13:On(e);break;case 19:W(Ce);break;case 10:Qi(e.type);break;case 22:case 23:On(e),rh(),t!==null&&W($r);break;case 24:Qi(Me)}}function El(t,e){try{var r=e.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var h=l.next;r=h;do{if((r.tag&t)===t){l=void 0;var p=r.create,w=r.inst;l=p(),w.destroy=l}r=r.next}while(r!==h)}}catch(E){ee(e,e.return,E)}}function Ga(t,e,r){try{var l=e.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var p=h.next;l=p;do{if((l.tag&t)===t){var w=l.inst,E=w.destroy;if(E!==void 0){w.destroy=void 0,h=e;var N=r,q=E;try{q()}catch(J){ee(h,N,J)}}}l=l.next}while(l!==p)}}catch(J){ee(e,e.return,J)}}function Yv(t){var e=t.updateQueue;if(e!==null){var r=t.stateNode;try{B0(e,r)}catch(l){ee(t,t.return,l)}}}function Fv(t,e,r){r.props=Jr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(l){ee(t,e,l)}}function Al(t,e){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof r=="function"?t.refCleanup=r(l):r.current=l}}catch(h){ee(t,e,h)}}function Ri(t,e){var r=t.ref,l=t.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(h){ee(t,e,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){ee(t,e,h)}else r.current=null}function $v(t){var e=t.type,r=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(h){ee(t,t.return,h)}}function Ph(t,e,r){try{var l=t.stateNode;Yw(l,t.type,r,e),l[Ue]=e}catch(h){ee(t,t.return,h)}}function Xv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Qa(t.type)||t.tag===4}function Nh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Xv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vh(t,e,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,e):(e=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,e.appendChild(t),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=pn));else if(l!==4&&(l===27&&Qa(t.type)&&(r=t.stateNode,e=null),t=t.child,t!==null))for(Vh(t,e,r),t=t.sibling;t!==null;)Vh(t,e,r),t=t.sibling}function Zu(t,e,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(l!==4&&(l===27&&Qa(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Zu(t,e,r),t=t.sibling;t!==null;)Zu(t,e,r),t=t.sibling}function Kv(t){var e=t.stateNode,r=t.memoizedProps;try{for(var l=t.type,h=e.attributes;h.length;)e.removeAttributeNode(h[0]);Xe(e,l,r),e[Ee]=t,e[Ue]=r}catch(p){ee(t,t.return,p)}}var na=!1,Oe=!1,Hh=!1,Qv=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Cw(t,e){if(t=t.containerInfo,sm=cd,t=Pr(t),ji(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var h=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{r.nodeType,p.nodeType}catch{r=null;break t}var w=0,E=-1,N=-1,q=0,J=0,it=t,F=null;e:for(;;){for(var K;it!==r||h!==0&&it.nodeType!==3||(E=w+h),it!==p||l!==0&&it.nodeType!==3||(N=w+l),it.nodeType===3&&(w+=it.nodeValue.length),(K=it.firstChild)!==null;)F=it,it=K;for(;;){if(it===t)break e;if(F===r&&++q===h&&(E=w),F===p&&++J===l&&(N=w),(K=it.nextSibling)!==null)break;it=F,F=it.parentNode}it=K}r=E===-1||N===-1?null:{start:E,end:N}}else r=null}r=r||{start:0,end:0}}else r=null;for(lm={focusedElem:t,selectionRange:r},cd=!1,Ge=e;Ge!==null;)if(e=Ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ge=t;else for(;Ge!==null;){switch(e=Ge,p=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)h=t[r],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,r=e,h=p.memoizedProps,p=p.memoizedState,l=r.stateNode;try{var vt=Jr(r.type,h);t=l.getSnapshotBeforeUpdate(vt,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(St){ee(r,r.return,St)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,r=t.nodeType,r===9)dm(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":dm(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(c(163))}if(t=e.sibling,t!==null){t.return=e.return,Ge=t;break}Ge=e.return}}function Wv(t,e,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:aa(t,r),l&4&&El(5,r);break;case 1:if(aa(t,r),l&4)if(t=r.stateNode,e===null)try{t.componentDidMount()}catch(w){ee(r,r.return,w)}else{var h=Jr(r.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(h,e,t.__reactInternalSnapshotBeforeUpdate)}catch(w){ee(r,r.return,w)}}l&64&&Yv(r),l&512&&Al(r,r.return);break;case 3:if(aa(t,r),l&64&&(t=r.updateQueue,t!==null)){if(e=null,r.child!==null)switch(r.child.tag){case 27:case 5:e=r.child.stateNode;break;case 1:e=r.child.stateNode}try{B0(t,e)}catch(w){ee(r,r.return,w)}}break;case 27:e===null&&l&4&&Kv(r);case 26:case 5:aa(t,r),e===null&&l&4&&$v(r),l&512&&Al(r,r.return);break;case 12:aa(t,r);break;case 31:aa(t,r),l&4&&ey(t,r);break;case 13:aa(t,r),l&4&&ny(t,r),l&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=Rw.bind(null,r),t3(t,r))));break;case 22:if(l=r.memoizedState!==null||na,!l){e=e!==null&&e.memoizedState!==null||Oe,h=na;var p=Oe;na=l,(Oe=e)&&!p?ra(t,r,(r.subtreeFlags&8772)!==0):aa(t,r),na=h,Oe=p}break;case 30:break;default:aa(t,r)}}function Jv(t){var e=t.alternate;e!==null&&(t.alternate=null,Jv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&qs(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var me=null,_n=!1;function ia(t,e,r){for(r=r.child;r!==null;)ty(t,e,r),r=r.sibling}function ty(t,e,r){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(xa,r)}catch{}switch(r.tag){case 26:Oe||Ri(r,e),ia(t,e,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Oe||Ri(r,e);var l=me,h=_n;Qa(r.type)&&(me=r.stateNode,_n=!1),ia(t,e,r),Pl(r.stateNode),me=l,_n=h;break;case 5:Oe||Ri(r,e);case 6:if(l=me,h=_n,me=null,ia(t,e,r),me=l,_n=h,me!==null)if(_n)try{(me.nodeType===9?me.body:me.nodeName==="HTML"?me.ownerDocument.body:me).removeChild(r.stateNode)}catch(p){ee(r,e,p)}else try{me.removeChild(r.stateNode)}catch(p){ee(r,e,p)}break;case 18:me!==null&&(_n?(t=me,Yy(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),ns(t)):Yy(me,r.stateNode));break;case 4:l=me,h=_n,me=r.stateNode.containerInfo,_n=!0,ia(t,e,r),me=l,_n=h;break;case 0:case 11:case 14:case 15:Ga(2,r,e),Oe||Ga(4,r,e),ia(t,e,r);break;case 1:Oe||(Ri(r,e),l=r.stateNode,typeof l.componentWillUnmount=="function"&&Fv(r,e,l)),ia(t,e,r);break;case 21:ia(t,e,r);break;case 22:Oe=(l=Oe)||r.memoizedState!==null,ia(t,e,r),Oe=l;break;default:ia(t,e,r)}}function ey(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ns(t)}catch(r){ee(e,e.return,r)}}}function ny(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ns(t)}catch(r){ee(e,e.return,r)}}function jw(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Qv),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Qv),e;default:throw Error(c(435,t.tag))}}function Iu(t,e){var r=jw(t);e.forEach(function(l){if(!r.has(l)){r.add(l);var h=kw.bind(null,t,l);l.then(h,h)}})}function bn(t,e){var r=e.deletions;if(r!==null)for(var l=0;l<r.length;l++){var h=r[l],p=t,w=e,E=w;t:for(;E!==null;){switch(E.tag){case 27:if(Qa(E.type)){me=E.stateNode,_n=!1;break t}break;case 5:me=E.stateNode,_n=!1;break t;case 3:case 4:me=E.stateNode.containerInfo,_n=!0;break t}E=E.return}if(me===null)throw Error(c(160));ty(p,w,h),me=null,_n=!1,p=h.alternate,p!==null&&(p.return=null),h.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)iy(e,t),e=e.sibling}var ui=null;function iy(t,e){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:bn(e,t),wn(t),l&4&&(Ga(3,t,t.return),El(3,t),Ga(5,t,t.return));break;case 1:bn(e,t),wn(t),l&512&&(Oe||r===null||Ri(r,r.return)),l&64&&na&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var h=ui;if(bn(e,t),wn(t),l&512&&(Oe||r===null||Ri(r,r.return)),l&4){var p=r!==null?r.memoizedState:null;if(l=t.memoizedState,r===null)if(l===null)if(t.stateNode===null){t:{l=t.type,r=t.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":p=h.getElementsByTagName("title")[0],(!p||p[br]||p[Ee]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=h.createElement(l),h.head.insertBefore(p,h.querySelector("head > title"))),Xe(p,l,r),p[Ee]=t,Ae(p),l=p;break t;case"link":var w=i1("link","href",h).get(l+(r.href||""));if(w){for(var E=0;E<w.length;E++)if(p=w[E],p.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&p.getAttribute("rel")===(r.rel==null?null:r.rel)&&p.getAttribute("title")===(r.title==null?null:r.title)&&p.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){w.splice(E,1);break e}}p=h.createElement(l),Xe(p,l,r),h.head.appendChild(p);break;case"meta":if(w=i1("meta","content",h).get(l+(r.content||""))){for(E=0;E<w.length;E++)if(p=w[E],p.getAttribute("content")===(r.content==null?null:""+r.content)&&p.getAttribute("name")===(r.name==null?null:r.name)&&p.getAttribute("property")===(r.property==null?null:r.property)&&p.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&p.getAttribute("charset")===(r.charSet==null?null:r.charSet)){w.splice(E,1);break e}}p=h.createElement(l),Xe(p,l,r),h.head.appendChild(p);break;default:throw Error(c(468,l))}p[Ee]=t,Ae(p),l=p}t.stateNode=l}else a1(h,t.type,t.stateNode);else t.stateNode=n1(h,l,t.memoizedProps);else p!==l?(p===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):p.count--,l===null?a1(h,t.type,t.stateNode):n1(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Ph(t,t.memoizedProps,r.memoizedProps)}break;case 27:bn(e,t),wn(t),l&512&&(Oe||r===null||Ri(r,r.return)),r!==null&&l&4&&Ph(t,t.memoizedProps,r.memoizedProps);break;case 5:if(bn(e,t),wn(t),l&512&&(Oe||r===null||Ri(r,r.return)),t.flags&32){h=t.stateNode;try{Nn(h,"")}catch(vt){ee(t,t.return,vt)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,Ph(t,h,r!==null?r.memoizedProps:h)),l&1024&&(Hh=!0);break;case 6:if(bn(e,t),wn(t),l&4){if(t.stateNode===null)throw Error(c(162));l=t.memoizedProps,r=t.stateNode;try{r.nodeValue=l}catch(vt){ee(t,t.return,vt)}}break;case 3:if(rd=null,h=ui,ui=id(e.containerInfo),bn(e,t),ui=h,wn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{ns(e.containerInfo)}catch(vt){ee(t,t.return,vt)}Hh&&(Hh=!1,ay(t));break;case 4:l=ui,ui=id(t.stateNode.containerInfo),bn(e,t),wn(t),ui=l;break;case 12:bn(e,t),wn(t);break;case 31:bn(e,t),wn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Iu(t,l)));break;case 13:bn(e,t),wn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(qu=nn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Iu(t,l)));break;case 22:h=t.memoizedState!==null;var N=r!==null&&r.memoizedState!==null,q=na,J=Oe;if(na=q||h,Oe=J||N,bn(e,t),Oe=J,na=q,wn(t),l&8192)t:for(e=t.stateNode,e._visibility=h?e._visibility&-2:e._visibility|1,h&&(r===null||N||na||Oe||to(t)),r=null,e=t;;){if(e.tag===5||e.tag===26){if(r===null){N=r=e;try{if(p=N.stateNode,h)w=p.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{E=N.stateNode;var it=N.memoizedProps.style,F=it!=null&&it.hasOwnProperty("display")?it.display:null;E.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(vt){ee(N,N.return,vt)}}}else if(e.tag===6){if(r===null){N=e;try{N.stateNode.nodeValue=h?"":N.memoizedProps}catch(vt){ee(N,N.return,vt)}}}else if(e.tag===18){if(r===null){N=e;try{var K=N.stateNode;h?Fy(K,!0):Fy(N.stateNode,!1)}catch(vt){ee(N,N.return,vt)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;r===e&&(r=null),e=e.return}r===e&&(r=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Iu(t,r))));break;case 19:bn(e,t),wn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Iu(t,l)));break;case 30:break;case 21:break;default:bn(e,t),wn(t)}}function wn(t){var e=t.flags;if(e&2){try{for(var r,l=t.return;l!==null;){if(Xv(l)){r=l;break}l=l.return}if(r==null)throw Error(c(160));switch(r.tag){case 27:var h=r.stateNode,p=Nh(t);Zu(t,p,h);break;case 5:var w=r.stateNode;r.flags&32&&(Nn(w,""),r.flags&=-33);var E=Nh(t);Zu(t,E,w);break;case 3:case 4:var N=r.stateNode.containerInfo,q=Nh(t);Vh(t,q,N);break;default:throw Error(c(161))}}catch(J){ee(t,t.return,J)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ay(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;ay(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function aa(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Wv(t,e.alternate,e),e=e.sibling}function to(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ga(4,e,e.return),to(e);break;case 1:Ri(e,e.return);var r=e.stateNode;typeof r.componentWillUnmount=="function"&&Fv(e,e.return,r),to(e);break;case 27:Pl(e.stateNode);case 26:case 5:Ri(e,e.return),to(e);break;case 22:e.memoizedState===null&&to(e);break;case 30:to(e);break;default:to(e)}t=t.sibling}}function ra(t,e,r){for(r=r&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,h=t,p=e,w=p.flags;switch(p.tag){case 0:case 11:case 15:ra(h,p,r),El(4,p);break;case 1:if(ra(h,p,r),l=p,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(q){ee(l,l.return,q)}if(l=p,h=l.updateQueue,h!==null){var E=l.stateNode;try{var N=h.shared.hiddenCallbacks;if(N!==null)for(h.shared.hiddenCallbacks=null,h=0;h<N.length;h++)k0(N[h],E)}catch(q){ee(l,l.return,q)}}r&&w&64&&Yv(p),Al(p,p.return);break;case 27:Kv(p);case 26:case 5:ra(h,p,r),r&&l===null&&w&4&&$v(p),Al(p,p.return);break;case 12:ra(h,p,r);break;case 31:ra(h,p,r),r&&w&4&&ey(h,p);break;case 13:ra(h,p,r),r&&w&4&&ny(h,p);break;case 22:p.memoizedState===null&&ra(h,p,r),Al(p,p.return);break;case 30:break;default:ra(h,p,r)}e=e.sibling}}function Uh(t,e){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&ml(r))}function Zh(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ml(t))}function di(t,e,r,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ry(t,e,r,l),e=e.sibling}function ry(t,e,r,l){var h=e.flags;switch(e.tag){case 0:case 11:case 15:di(t,e,r,l),h&2048&&El(9,e);break;case 1:di(t,e,r,l);break;case 3:di(t,e,r,l),h&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ml(t)));break;case 12:if(h&2048){di(t,e,r,l),t=e.stateNode;try{var p=e.memoizedProps,w=p.id,E=p.onPostCommit;typeof E=="function"&&E(w,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(N){ee(e,e.return,N)}}else di(t,e,r,l);break;case 31:di(t,e,r,l);break;case 13:di(t,e,r,l);break;case 23:break;case 22:p=e.stateNode,w=e.alternate,e.memoizedState!==null?p._visibility&2?di(t,e,r,l):Ml(t,e):p._visibility&2?di(t,e,r,l):(p._visibility|=2,qo(t,e,r,l,(e.subtreeFlags&10256)!==0||!1)),h&2048&&Uh(w,e);break;case 24:di(t,e,r,l),h&2048&&Zh(e.alternate,e);break;default:di(t,e,r,l)}}function qo(t,e,r,l,h){for(h=h&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var p=t,w=e,E=r,N=l,q=w.flags;switch(w.tag){case 0:case 11:case 15:qo(p,w,E,N,h),El(8,w);break;case 23:break;case 22:var J=w.stateNode;w.memoizedState!==null?J._visibility&2?qo(p,w,E,N,h):Ml(p,w):(J._visibility|=2,qo(p,w,E,N,h)),h&&q&2048&&Uh(w.alternate,w);break;case 24:qo(p,w,E,N,h),h&&q&2048&&Zh(w.alternate,w);break;default:qo(p,w,E,N,h)}e=e.sibling}}function Ml(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var r=t,l=e,h=l.flags;switch(l.tag){case 22:Ml(r,l),h&2048&&Uh(l.alternate,l);break;case 24:Ml(r,l),h&2048&&Zh(l.alternate,l);break;default:Ml(r,l)}e=e.sibling}}var zl=8192;function Yo(t,e,r){if(t.subtreeFlags&zl)for(t=t.child;t!==null;)oy(t,e,r),t=t.sibling}function oy(t,e,r){switch(t.tag){case 26:Yo(t,e,r),t.flags&zl&&t.memoizedState!==null&&f3(r,ui,t.memoizedState,t.memoizedProps);break;case 5:Yo(t,e,r);break;case 3:case 4:var l=ui;ui=id(t.stateNode.containerInfo),Yo(t,e,r),ui=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=zl,zl=16777216,Yo(t,e,r),zl=l):Yo(t,e,r));break;default:Yo(t,e,r)}}function sy(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ll(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var r=0;r<e.length;r++){var l=e[r];Ge=l,cy(l,t)}sy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ly(t),t=t.sibling}function ly(t){switch(t.tag){case 0:case 11:case 15:Ll(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:Ll(t);break;case 12:Ll(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Gu(t)):Ll(t);break;default:Ll(t)}}function Gu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var r=0;r<e.length;r++){var l=e[r];Ge=l,cy(l,t)}sy(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ga(8,e,e.return),Gu(e);break;case 22:r=e.stateNode,r._visibility&2&&(r._visibility&=-3,Gu(e));break;default:Gu(e)}t=t.sibling}}function cy(t,e){for(;Ge!==null;){var r=Ge;switch(r.tag){case 0:case 11:case 15:Ga(8,r,e);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ml(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Ge=l;else t:for(r=t;Ge!==null;){l=Ge;var h=l.sibling,p=l.return;if(Jv(l),l===r){Ge=null;break t}if(h!==null){h.return=p,Ge=h;break t}Ge=p}}}var Ew={getCacheForType:function(t){var e=Fe(Me),r=e.data.get(t);return r===void 0&&(r=t(),e.data.set(t,r)),r},cacheSignal:function(){return Fe(Me).controller.signal}},Aw=typeof WeakMap=="function"?WeakMap:Map,Kt=0,le=null,Vt=null,Zt=0,te=0,Dn=null,qa=!1,Fo=!1,Ih=!1,oa=0,Se=0,Ya=0,eo=0,Gh=0,Rn=0,$o=0,Ol=null,Sn=null,qh=!1,qu=0,uy=0,Yu=1/0,Fu=null,Fa=null,Ne=0,$a=null,Xo=null,sa=0,Yh=0,Fh=null,dy=null,Dl=0,$h=null;function kn(){return(Kt&2)!==0&&Zt!==0?Zt&-Zt:X.T!==null?tm():Is()}function fy(){if(Rn===0)if((Zt&536870912)===0||Nt){var t=yr;yr<<=1,(yr&3932160)===0&&(yr=262144),Rn=t}else Rn=536870912;return t=Ln.current,t!==null&&(t.flags|=32),Rn}function Tn(t,e,r){(t===le&&(te===2||te===9)||t.cancelPendingCommit!==null)&&(Ko(t,0),Xa(t,Zt,Rn,!1)),Hi(t,r),((Kt&2)===0||t!==le)&&(t===le&&((Kt&2)===0&&(eo|=r),Se===4&&Xa(t,Zt,Rn,!1)),ki(t))}function hy(t,e,r){if((Kt&6)!==0)throw Error(c(327));var l=!r&&(e&127)===0&&(e&t.expiredLanes)===0||_r(t,e),h=l?Lw(t,e):Kh(t,e,!0),p=l;do{if(h===0){Fo&&!l&&Xa(t,e,0,!1);break}else{if(r=t.current.alternate,p&&!Mw(r)){h=Kh(t,e,!1),p=!1;continue}if(h===2){if(p=e,t.errorRecoveryDisabledLanes&p)var w=0;else w=t.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){e=w;t:{var E=t;h=Ol;var N=E.current.memoizedState.isDehydrated;if(N&&(Ko(E,w).flags|=256),w=Kh(E,w,!1),w!==2){if(Ih&&!N){E.errorRecoveryDisabledLanes|=p,eo|=p,h=4;break t}p=Sn,Sn=h,p!==null&&(Sn===null?Sn=p:Sn.push.apply(Sn,p))}h=w}if(p=!1,h!==2)continue}}if(h===1){Ko(t,0),Xa(t,e,0,!0);break}t:{switch(l=t,p=h,p){case 0:case 1:throw Error(c(345));case 4:if((e&4194048)!==e)break;case 6:Xa(l,e,Rn,!qa);break t;case 2:Sn=null;break;case 3:case 5:break;default:throw Error(c(329))}if((e&62914560)===e&&(h=qu+300-nn(),10<h)){if(Xa(l,e,Rn,!qa),go(l,0,!0)!==0)break t;sa=e,l.timeoutHandle=Gy(my.bind(null,l,r,Sn,Fu,qh,e,Rn,eo,$o,qa,p,"Throttled",-0,0),h);break t}my(l,r,Sn,Fu,qh,e,Rn,eo,$o,qa,p,null,-0,0)}}break}while(!0);ki(t)}function my(t,e,r,l,h,p,w,E,N,q,J,it,F,K){if(t.timeoutHandle=-1,it=e.subtreeFlags,it&8192||(it&16785408)===16785408){it={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pn},oy(e,p,it);var vt=(p&62914560)===p?qu-nn():(p&4194048)===p?uy-nn():0;if(vt=h3(it,vt),vt!==null){sa=p,t.cancelPendingCommit=vt(wy.bind(null,t,e,p,r,l,h,w,E,N,J,it,null,F,K)),Xa(t,p,w,!q);return}}wy(t,e,p,r,l,h,w,E,N)}function Mw(t){for(var e=t;;){var r=e.tag;if((r===0||r===11||r===15)&&e.flags&16384&&(r=e.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var h=r[l],p=h.getSnapshot;h=h.value;try{if(!Ze(p(),h))return!1}catch{return!1}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xa(t,e,r,l){e&=~Gh,e&=~eo,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var h=e;0<h;){var p=31-an(h),w=1<<p;l[p]=-1,h&=~w}r!==0&&Yc(t,r,e)}function $u(){return(Kt&6)===0?(Rl(0),!1):!0}function Xh(){if(Vt!==null){if(te===0)var t=Vt.return;else t=Vt,ci=Di=null,dh(t),Ho=null,gl=0,t=Vt;for(;t!==null;)qv(t.alternate,t),t=t.return;Vt=null}}function Ko(t,e){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,Xw(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),sa=0,Xh(),le=t,Vt=r=qn(t.current,null),Zt=e,te=0,Dn=null,qa=!1,Fo=_r(t,e),Ih=!1,$o=Rn=Gh=eo=Ya=Se=0,Sn=Ol=null,qh=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var h=31-an(l),p=1<<h;e|=t[h],l&=~p}return oa=e,Zr(),r}function py(t,e){Lt=null,X.H=Tl,e===Vo||e===Su?(e=L0(),te=3):e===Jf?(e=L0(),te=4):te=e===Eh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Dn=e,Vt===null&&(Se=1,Pu(t,s(e,t.current)))}function gy(){var t=Ln.current;return t===null?!0:(Zt&4194048)===Zt?Yn===null:(Zt&62914560)===Zt||(Zt&536870912)!==0?t===Yn:!1}function vy(){var t=X.H;return X.H=Tl,t===null?Tl:t}function yy(){var t=X.A;return X.A=Ew,t}function Xu(){Se=4,qa||(Zt&4194048)!==Zt&&Ln.current!==null||(Fo=!0),(Ya&134217727)===0&&(eo&134217727)===0||le===null||Xa(le,Zt,Rn,!1)}function Kh(t,e,r){var l=Kt;Kt|=2;var h=vy(),p=yy();(le!==t||Zt!==e)&&(Fu=null,Ko(t,e)),e=!1;var w=Se;t:do try{if(te!==0&&Vt!==null){var E=Vt,N=Dn;switch(te){case 8:Xh(),w=6;break t;case 3:case 2:case 9:case 6:Ln.current===null&&(e=!0);var q=te;if(te=0,Dn=null,Qo(t,E,N,q),r&&Fo){w=0;break t}break;default:q=te,te=0,Dn=null,Qo(t,E,N,q)}}zw(),w=Se;break}catch(J){py(t,J)}while(!0);return e&&t.shellSuspendCounter++,ci=Di=null,Kt=l,X.H=h,X.A=p,Vt===null&&(le=null,Zt=0,Zr()),w}function zw(){for(;Vt!==null;)xy(Vt)}function Lw(t,e){var r=Kt;Kt|=2;var l=vy(),h=yy();le!==t||Zt!==e?(Fu=null,Yu=nn()+500,Ko(t,e)):Fo=_r(t,e);t:do try{if(te!==0&&Vt!==null){e=Vt;var p=Dn;e:switch(te){case 1:te=0,Dn=null,Qo(t,e,p,1);break;case 2:case 9:if(M0(p)){te=0,Dn=null,_y(e);break}e=function(){te!==2&&te!==9||le!==t||(te=7),ki(t)},p.then(e,e);break t;case 3:te=7;break t;case 4:te=5;break t;case 7:M0(p)?(te=0,Dn=null,_y(e)):(te=0,Dn=null,Qo(t,e,p,7));break;case 5:var w=null;switch(Vt.tag){case 26:w=Vt.memoizedState;case 5:case 27:var E=Vt;if(w?r1(w):E.stateNode.complete){te=0,Dn=null;var N=E.sibling;if(N!==null)Vt=N;else{var q=E.return;q!==null?(Vt=q,Ku(q)):Vt=null}break e}}te=0,Dn=null,Qo(t,e,p,5);break;case 6:te=0,Dn=null,Qo(t,e,p,6);break;case 8:Xh(),Se=6;break t;default:throw Error(c(462))}}Ow();break}catch(J){py(t,J)}while(!0);return ci=Di=null,X.H=l,X.A=h,Kt=r,Vt!==null?0:(le=null,Zt=0,Zr(),Se)}function Ow(){for(;Vt!==null&&!Zc();)xy(Vt)}function xy(t){var e=Iv(t.alternate,t,oa);t.memoizedProps=t.pendingProps,e===null?Ku(t):Vt=e}function _y(t){var e=t,r=e.alternate;switch(e.tag){case 15:case 0:e=Pv(r,e,e.pendingProps,e.type,void 0,Zt);break;case 11:e=Pv(r,e,e.pendingProps,e.type.render,e.ref,Zt);break;case 5:dh(e);default:qv(r,e),e=Vt=cl(e,oa),e=Iv(r,e,oa)}t.memoizedProps=t.pendingProps,e===null?Ku(t):Vt=e}function Qo(t,e,r,l){ci=Di=null,dh(e),Ho=null,gl=0;var h=e.return;try{if(_w(t,h,e,r,Zt)){Se=1,Pu(t,s(r,t.current)),Vt=null;return}}catch(p){if(h!==null)throw Vt=h,p;Se=1,Pu(t,s(r,t.current)),Vt=null;return}e.flags&32768?(Nt||l===1?t=!0:Fo||(Zt&536870912)!==0?t=!1:(qa=t=!0,(l===2||l===9||l===3||l===6)&&(l=Ln.current,l!==null&&l.tag===13&&(l.flags|=16384))),by(e,t)):Ku(e)}function Ku(t){var e=t;do{if((e.flags&32768)!==0){by(e,qa);return}t=e.return;var r=Sw(e.alternate,e,oa);if(r!==null){Vt=r;return}if(e=e.sibling,e!==null){Vt=e;return}Vt=e=t}while(e!==null);Se===0&&(Se=5)}function by(t,e){do{var r=Tw(t.alternate,t);if(r!==null){r.flags&=32767,Vt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!e&&(t=t.sibling,t!==null)){Vt=t;return}Vt=t=r}while(t!==null);Se=6,Vt=null}function wy(t,e,r,l,h,p,w,E,N){t.cancelPendingCommit=null;do Qu();while(Ne!==0);if((Kt&6)!==0)throw Error(c(327));if(e!==null){if(e===t.current)throw Error(c(177));if(p=e.lanes|e.childLanes,p|=Oo,Of(t,r,p,w,E,N),t===le&&(Vt=le=null,Zt=0),Xo=e,$a=t,sa=r,Yh=p,Fh=h,dy=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Bw(pr,function(){return Ey(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=X.T,X.T=null,h=st.p,st.p=2,w=Kt,Kt|=4;try{Cw(t,e,r)}finally{Kt=w,st.p=h,X.T=l}}Ne=1,Sy(),Ty(),Cy()}}function Sy(){if(Ne===1){Ne=0;var t=$a,e=Xo,r=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||r){r=X.T,X.T=null;var l=st.p;st.p=2;var h=Kt;Kt|=4;try{iy(e,t);var p=lm,w=Pr(t.containerInfo),E=p.focusedElem,N=p.selectionRange;if(w!==E&&E&&E.ownerDocument&&Ao(E.ownerDocument.documentElement,E)){if(N!==null&&ji(E)){var q=N.start,J=N.end;if(J===void 0&&(J=q),"selectionStart"in E)E.selectionStart=q,E.selectionEnd=Math.min(J,E.value.length);else{var it=E.ownerDocument||document,F=it&&it.defaultView||window;if(F.getSelection){var K=F.getSelection(),vt=E.textContent.length,St=Math.min(N.start,vt),re=N.end===void 0?St:Math.min(N.end,vt);!K.extend&&St>re&&(w=re,re=St,St=w);var U=Br(E,St),H=Br(E,re);if(U&&H&&(K.rangeCount!==1||K.anchorNode!==U.node||K.anchorOffset!==U.offset||K.focusNode!==H.node||K.focusOffset!==H.offset)){var G=it.createRange();G.setStart(U.node,U.offset),K.removeAllRanges(),St>re?(K.addRange(G),K.extend(H.node,H.offset)):(G.setEnd(H.node,H.offset),K.addRange(G))}}}}for(it=[],K=E;K=K.parentNode;)K.nodeType===1&&it.push({element:K,left:K.scrollLeft,top:K.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<it.length;E++){var et=it[E];et.element.scrollLeft=et.left,et.element.scrollTop=et.top}}cd=!!sm,lm=sm=null}finally{Kt=h,st.p=l,X.T=r}}t.current=e,Ne=2}}function Ty(){if(Ne===2){Ne=0;var t=$a,e=Xo,r=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||r){r=X.T,X.T=null;var l=st.p;st.p=2;var h=Kt;Kt|=4;try{Wv(t,e.alternate,e)}finally{Kt=h,st.p=l,X.T=r}}Ne=3}}function Cy(){if(Ne===4||Ne===3){Ne=0,Ic();var t=$a,e=Xo,r=sa,l=dy;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Ne=5:(Ne=0,Xo=$a=null,jy(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Fa=null),_t(r),e=e.stateNode,qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(xa,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=X.T,h=st.p,st.p=2,X.T=null;try{for(var p=t.onRecoverableError,w=0;w<l.length;w++){var E=l[w];p(E.value,{componentStack:E.stack})}}finally{X.T=e,st.p=h}}(sa&3)!==0&&Qu(),ki(t),h=t.pendingLanes,(r&261930)!==0&&(h&42)!==0?t===$h?Dl++:(Dl=0,$h=t):Dl=0,Rl(0)}}function jy(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ml(e)))}function Qu(){return Sy(),Ty(),Cy(),Ey()}function Ey(){if(Ne!==5)return!1;var t=$a,e=Yh;Yh=0;var r=_t(sa),l=X.T,h=st.p;try{st.p=32>r?32:r,X.T=null,r=Fh,Fh=null;var p=$a,w=sa;if(Ne=0,Xo=$a=null,sa=0,(Kt&6)!==0)throw Error(c(331));var E=Kt;if(Kt|=4,ly(p.current),ry(p,p.current,w,r),Kt=E,Rl(0,!1),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(xa,p)}catch{}return!0}finally{st.p=h,X.T=l,jy(t,e)}}function Ay(t,e,r){e=s(r,e),e=jh(t.stateNode,e,2),t=Ua(t,e,2),t!==null&&(Hi(t,2),ki(t))}function ee(t,e,r){if(t.tag===3)Ay(t,t,r);else for(;e!==null;){if(e.tag===3){Ay(e,t,r);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Fa===null||!Fa.has(l))){t=s(r,t),r=Mv(2),l=Ua(e,r,2),l!==null&&(zv(r,l,e,t),Hi(l,2),ki(l));break}}e=e.return}}function Qh(t,e,r){var l=t.pingCache;if(l===null){l=t.pingCache=new Aw;var h=new Set;l.set(e,h)}else h=l.get(e),h===void 0&&(h=new Set,l.set(e,h));h.has(r)||(Ih=!0,h.add(r),t=Dw.bind(null,t,e,r),e.then(t,t))}function Dw(t,e,r){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,le===t&&(Zt&r)===r&&(Se===4||Se===3&&(Zt&62914560)===Zt&&300>nn()-qu?(Kt&2)===0&&Ko(t,0):Gh|=r,$o===Zt&&($o=0)),ki(t)}function My(t,e){e===0&&(e=qc()),t=Gn(t,e),t!==null&&(Hi(t,e),ki(t))}function Rw(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),My(t,r)}function kw(t,e){var r=0;switch(t.tag){case 31:case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(r=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(c(314))}l!==null&&l.delete(e),My(t,r)}function Bw(t,e){return mo(t,e)}var Wu=null,Wo=null,Wh=!1,Ju=!1,Jh=!1,Ka=0;function ki(t){t!==Wo&&t.next===null&&(Wo===null?Wu=Wo=t:Wo=Wo.next=t),Ju=!0,Wh||(Wh=!0,Nw())}function Rl(t,e){if(!Jh&&Ju){Jh=!0;do for(var r=!1,l=Wu;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var p=0;else{var w=l.suspendedLanes,E=l.pingedLanes;p=(1<<31-an(42|t)+1)-1,p&=h&~(w&~E),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(r=!0,Dy(l,p))}else p=Zt,p=go(l,l===le?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||_r(l,p)||(r=!0,Dy(l,p));l=l.next}while(r);Jh=!1}}function Pw(){zy()}function zy(){Ju=Wh=!1;var t=0;Ka!==0&&$w()&&(t=Ka);for(var e=nn(),r=null,l=Wu;l!==null;){var h=l.next,p=Ly(l,e);p===0?(l.next=null,r===null?Wu=h:r.next=h,h===null&&(Wo=r)):(r=l,(t!==0||(p&3)!==0)&&(Ju=!0)),l=h}Ne!==0&&Ne!==5||Rl(t),Ka!==0&&(Ka=0)}function Ly(t,e){for(var r=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var w=31-an(p),E=1<<w,N=h[w];N===-1?((E&r)===0||(E&l)!==0)&&(h[w]=Lf(E,e)):N<=e&&(t.expiredLanes|=E),p&=~E}if(e=le,r=Zt,r=go(t,t===e?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,r===0||t===e&&(te===2||te===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&mr(l),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||_r(t,r)){if(e=r&-r,e===t.callbackPriority)return e;switch(l!==null&&mr(l),_t(r)){case 2:case 8:r=Hs;break;case 32:r=pr;break;case 268435456:r=Us;break;default:r=pr}return l=Oy.bind(null,t),r=mo(r,l),t.callbackPriority=e,t.callbackNode=r,e}return l!==null&&l!==null&&mr(l),t.callbackPriority=2,t.callbackNode=null,2}function Oy(t,e){if(Ne!==0&&Ne!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(Qu()&&t.callbackNode!==r)return null;var l=Zt;return l=go(t,t===le?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(hy(t,l,e),Ly(t,nn()),t.callbackNode!=null&&t.callbackNode===r?Oy.bind(null,t):null)}function Dy(t,e){if(Qu())return null;hy(t,e,!0)}function Nw(){Kw(function(){(Kt&6)!==0?mo(po,Pw):zy()})}function tm(){if(Ka===0){var t=Po;t===0&&(t=vr,vr<<=1,(vr&261888)===0&&(vr=256)),Ka=t}return Ka}function Ry(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ca(""+t)}function ky(t,e){var r=e.ownerDocument.createElement("input");return r.name=e.name,r.value=e.value,t.id&&r.setAttribute("form",t.id),e.parentNode.insertBefore(r,e),t=new FormData(t),r.parentNode.removeChild(r),t}function Vw(t,e,r,l,h){if(e==="submit"&&r&&r.stateNode===h){var p=Ry((h[Ue]||null).action),w=l.submitter;w&&(e=(e=w[Ue]||null)?Ry(e.formAction):w.getAttribute("formAction"),e!==null&&(p=e,w=null));var E=new bo("action","action",null,l,h);t.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ka!==0){var N=w?ky(h,w):new FormData(h);_h(r,{pending:!0,data:N,method:h.method,action:p},null,N)}}else typeof p=="function"&&(E.preventDefault(),N=w?ky(h,w):new FormData(h),_h(r,{pending:!0,data:N,method:h.method,action:p},p,N))},currentTarget:h}]})}}for(var em=0;em<Mi.length;em++){var nm=Mi[em],Hw=nm.toLowerCase(),Uw=nm[0].toUpperCase()+nm.slice(1);vn(Hw,"on"+Uw)}vn(Vr,"onAnimationEnd"),vn(vu,"onAnimationIteration"),vn(Hr,"onAnimationStart"),vn("dblclick","onDoubleClick"),vn("focusin","onFocus"),vn("focusout","onBlur"),vn(qf,"onTransitionRun"),vn(yu,"onTransitionStart"),vn(Yf,"onTransitionCancel"),vn(Ba,"onTransitionEnd"),wi("onMouseEnter",["mouseout","mouseover"]),wi("onMouseLeave",["mouseout","mouseover"]),wi("onPointerEnter",["pointerout","pointerover"]),wi("onPointerLeave",["pointerout","pointerover"]),Ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ii("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(kl));function By(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var l=t[r],h=l.event;l=l.listeners;t:{var p=void 0;if(e)for(var w=l.length-1;0<=w;w--){var E=l[w],N=E.instance,q=E.currentTarget;if(E=E.listener,N!==p&&h.isPropagationStopped())break t;p=E,h.currentTarget=q;try{p(h)}catch(J){Ur(J)}h.currentTarget=null,p=N}else for(w=0;w<l.length;w++){if(E=l[w],N=E.instance,q=E.currentTarget,E=E.listener,N!==p&&h.isPropagationStopped())break t;p=E,h.currentTarget=q;try{p(h)}catch(J){Ur(J)}h.currentTarget=null,p=N}}}}function Ht(t,e){var r=e[_i];r===void 0&&(r=e[_i]=new Set);var l=t+"__bubble";r.has(l)||(Py(e,t,2,!1),r.add(l))}function im(t,e,r){var l=0;e&&(l|=4),Py(r,t,l,e)}var td="_reactListening"+Math.random().toString(36).slice(2);function am(t){if(!t[td]){t[td]=!0,Qc.forEach(function(r){r!=="selectionchange"&&(Zw.has(r)||im(r,!1,t),im(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[td]||(e[td]=!0,im("selectionchange",!1,e))}}function Py(t,e,r,l){switch(f1(e)){case 2:var h=g3;break;case 8:h=v3;break;default:h=xm}r=h.bind(null,e,r,t),h=void 0,!Er||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(e,r,{capture:!0,passive:h}):t.addEventListener(e,r,!0):h!==void 0?t.addEventListener(e,r,{passive:h}):t.addEventListener(e,r,!1)}function rm(t,e,r,l,h){var p=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var E=l.stateNode.containerInfo;if(E===h)break;if(w===4)for(w=l.return;w!==null;){var N=w.tag;if((N===3||N===4)&&w.stateNode.containerInfo===h)return;w=w.return}for(;E!==null;){if(w=Zi(E),w===null)return;if(N=w.tag,N===5||N===6||N===26||N===27){l=p=w;continue t}E=E.parentNode}}l=l.return}Ws(function(){var q=p,J=jr(r),it=[];t:{var F=xu.get(t);if(F!==void 0){var K=bo,vt=t;switch(t){case"keypress":if(Ar(r)===0)break t;case"keydown":case"keyup":K=ru;break;case"focusin":vt="focus",K=el;break;case"focusout":vt="blur",K=el;break;case"beforeblur":case"afterblur":K=el;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=Rf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=Vf;break;case Vr:case vu:case Hr:K=nl;break;case Ba:K=lu;break;case"scroll":case"scrollend":K=Ut;break;case"wheel":K=Fi;break;case"copy":case"cut":case"paste":K=Hn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=ou;break;case"toggle":case"beforetoggle":K=Lr}var St=(e&4)!==0,re=!St&&(t==="scroll"||t==="scrollend"),U=St?F!==null?F+"Capture":null:F;St=[];for(var H=q,G;H!==null;){var et=H;if(G=et.stateNode,et=et.tag,et!==5&&et!==26&&et!==27||G===null||U===null||(et=qi(H,U),et!=null&&St.push(Bl(H,et,G))),re)break;H=H.return}0<St.length&&(F=new K(F,vt,null,r,J),it.push({event:F,listeners:St}))}}if((e&7)===0){t:{if(F=t==="mouseover"||t==="pointerover",K=t==="mouseout"||t==="pointerout",F&&r!==_o&&(vt=r.relatedTarget||r.fromElement)&&(Zi(vt)||vt[Ui]))break t;if((K||F)&&(F=J.window===J?J:(F=J.ownerDocument)?F.defaultView||F.parentWindow:window,K?(vt=r.relatedTarget||r.toElement,K=q,vt=vt?Zi(vt):null,vt!==null&&(re=m(vt),St=vt.tag,vt!==re||St!==5&&St!==27&&St!==6)&&(vt=null)):(K=null,vt=q),K!==vt)){if(St=tu,et="onMouseLeave",U="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(St=ou,et="onPointerLeave",U="onPointerEnter",H="pointer"),re=K==null?F:bi(K),G=vt==null?F:bi(vt),F=new St(et,H+"leave",K,r,J),F.target=re,F.relatedTarget=G,et=null,Zi(J)===q&&(St=new St(U,H+"enter",vt,r,J),St.target=G,St.relatedTarget=re,et=St),re=et,K&&vt)e:{for(St=Iw,U=K,H=vt,G=0,et=U;et;et=St(et))G++;et=0;for(var wt=H;wt;wt=St(wt))et++;for(;0<G-et;)U=St(U),G--;for(;0<et-G;)H=St(H),et--;for(;G--;){if(U===H||H!==null&&U===H.alternate){St=U;break e}U=St(U),H=St(H)}St=null}else St=null;K!==null&&Ny(it,F,K,St,!1),vt!==null&&re!==null&&Ny(it,re,vt,St,!0)}}t:{if(F=q?bi(q):window,K=F.nodeName&&F.nodeName.toLowerCase(),K==="select"||K==="input"&&F.type==="file")var Ft=kr;else if(Un(F))if(fu)Ft=Gf;else{Ft=If;var xt=oi}else K=F.nodeName,!K||K.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?q&&Cr(q.elementType)&&(Ft=kr):Ft=Oa;if(Ft&&(Ft=Ft(t,q))){du(it,Ft,r,J);break t}xt&&xt(t,F,q),t==="focusout"&&q&&F.type==="number"&&q.memoizedProps.value!=null&&ii(F,"number",F.value)}switch(xt=q?bi(q):window,t){case"focusin":(Un(xt)||xt.contentEditable==="true")&&(Ei=xt,zo=q,Nr=null);break;case"focusout":Nr=zo=Ei=null;break;case"mousedown":Ra=!0;break;case"contextmenu":case"mouseup":case"dragend":Ra=!1,pu(it,r,J);break;case"selectionchange":if(Mo)break;case"keydown":case"keyup":pu(it,r,J)}var Dt;if(So)t:{switch(t){case"compositionstart":var It="onCompositionStart";break t;case"compositionend":It="onCompositionEnd";break t;case"compositionupdate":It="onCompositionUpdate";break t}It=void 0}else Ma?uu(t,r)&&(It="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(It="onCompositionStart");It&&(To&&r.locale!=="ko"&&(Ma||It!=="onCompositionStart"?It==="onCompositionEnd"&&Ma&&(Dt=Ti()):(Vn=J,Yi="value"in Vn?Vn.value:Vn.textContent,Ma=!0)),xt=ed(q,It),0<xt.length&&(It=new il(It,t,null,r,J),it.push({event:It,listeners:xt}),Dt?It.data=Dt:(Dt=sl(r),Dt!==null&&(It.data=Dt)))),(Dt=Uf?zn(t,r):za(t,r))&&(It=ed(q,"onBeforeInput"),0<It.length&&(xt=new il("onBeforeInput","beforeinput",null,r,J),it.push({event:xt,listeners:It}),xt.data=Dt)),Vw(it,t,q,r,J)}By(it,e)})}function Bl(t,e,r){return{instance:t,listener:e,currentTarget:r}}function ed(t,e){for(var r=e+"Capture",l=[];t!==null;){var h=t,p=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||p===null||(h=qi(t,r),h!=null&&l.unshift(Bl(t,h,p)),h=qi(t,e),h!=null&&l.push(Bl(t,h,p))),t.tag===3)return l;t=t.return}return[]}function Iw(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ny(t,e,r,l,h){for(var p=e._reactName,w=[];r!==null&&r!==l;){var E=r,N=E.alternate,q=E.stateNode;if(E=E.tag,N!==null&&N===l)break;E!==5&&E!==26&&E!==27||q===null||(N=q,h?(q=qi(r,p),q!=null&&w.unshift(Bl(r,q,N))):h||(q=qi(r,p),q!=null&&w.push(Bl(r,q,N)))),r=r.return}w.length!==0&&t.push({event:e,listeners:w})}var Gw=/\r\n?/g,qw=/\u0000|\uFFFD/g;function Vy(t){return(typeof t=="string"?t:""+t).replace(Gw,`
`).replace(qw,"")}function Hy(t,e){return e=Vy(e),Vy(t)===e}function ae(t,e,r,l,h,p){switch(r){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||Nn(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&Nn(t,""+l);break;case"className":ne(t,"class",l);break;case"tabIndex":ne(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ne(t,r,l);break;case"style":yo(t,l,p);break;case"data":if(e!=="object"){ne(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||r!=="href")){t.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=Ca(""+l),t.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(r==="formAction"?(e!=="input"&&ae(t,e,"name",h.name,h,null),ae(t,e,"formEncType",h.formEncType,h,null),ae(t,e,"formMethod",h.formMethod,h,null),ae(t,e,"formTarget",h.formTarget,h,null)):(ae(t,e,"encType",h.encType,h,null),ae(t,e,"method",h.method,h,null),ae(t,e,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=Ca(""+l),t.setAttribute(r,l);break;case"onClick":l!=null&&(t.onclick=pn);break;case"onScroll":l!=null&&Ht("scroll",t);break;case"onScrollEnd":l!=null&&Ht("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(c(60));t.innerHTML=r}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}r=Ca(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""+l):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":l===!0?t.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,l):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(r,l):t.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(r):t.setAttribute(r,l);break;case"popover":Ht("beforetoggle",t),Ht("toggle",t),Pt(t,"popover",l);break;case"xlinkActuate":mn(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":mn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":mn(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":mn(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":mn(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":mn(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":mn(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":mn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":mn(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Pt(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=xo.get(r)||r,Pt(t,r,l))}}function om(t,e,r,l,h,p){switch(r){case"style":yo(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(c(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(c(60));t.innerHTML=r}}break;case"children":typeof l=="string"?Nn(t,l):(typeof l=="number"||typeof l=="bigint")&&Nn(t,""+l);break;case"onScroll":l!=null&&Ht("scroll",t);break;case"onScrollEnd":l!=null&&Ht("scrollend",t);break;case"onClick":l!=null&&(t.onclick=pn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wc.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),e=r.slice(2,h?r.length-7:void 0),p=t[Ue]||null,p=p!=null?p[r]:null,typeof p=="function"&&t.removeEventListener(e,p,h),typeof l=="function")){typeof p!="function"&&p!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(e,l,h);break t}r in t?t[r]=l:l===!0?t.setAttribute(r,""):Pt(t,r,l)}}}function Xe(t,e,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ht("error",t),Ht("load",t);var l=!1,h=!1,p;for(p in r)if(r.hasOwnProperty(p)){var w=r[p];if(w!=null)switch(p){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:ae(t,e,p,w,r,null)}}h&&ae(t,e,"srcSet",r.srcSet,r,null),l&&ae(t,e,"src",r.src,r,null);return;case"input":Ht("invalid",t);var E=p=w=h=null,N=null,q=null;for(l in r)if(r.hasOwnProperty(l)){var J=r[l];if(J!=null)switch(l){case"name":h=J;break;case"type":w=J;break;case"checked":N=J;break;case"defaultChecked":q=J;break;case"value":p=J;break;case"defaultValue":E=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(c(137,e));break;default:ae(t,e,l,J,r,null)}}Tr(t,p,E,N,q,w,h,!1);return;case"select":Ht("invalid",t),l=w=p=null;for(h in r)if(r.hasOwnProperty(h)&&(E=r[h],E!=null))switch(h){case"value":p=E;break;case"defaultValue":w=E;break;case"multiple":l=E;default:ae(t,e,h,E,r,null)}e=p,r=w,t.multiple=!!l,e!=null?se(t,!!l,e,!1):r!=null&&se(t,!!l,r,!0);return;case"textarea":Ht("invalid",t),p=h=l=null;for(w in r)if(r.hasOwnProperty(w)&&(E=r[w],E!=null))switch(w){case"value":l=E;break;case"defaultValue":h=E;break;case"children":p=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(c(91));break;default:ae(t,e,w,E,r,null)}Sa(t,l,h,p);return;case"option":for(N in r)r.hasOwnProperty(N)&&(l=r[N],l!=null)&&(N==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":ae(t,e,N,l,r,null));return;case"dialog":Ht("beforetoggle",t),Ht("toggle",t),Ht("cancel",t),Ht("close",t);break;case"iframe":case"object":Ht("load",t);break;case"video":case"audio":for(l=0;l<kl.length;l++)Ht(kl[l],t);break;case"image":Ht("error",t),Ht("load",t);break;case"details":Ht("toggle",t);break;case"embed":case"source":case"link":Ht("error",t),Ht("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in r)if(r.hasOwnProperty(q)&&(l=r[q],l!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:ae(t,e,q,l,r,null)}return;default:if(Cr(e)){for(J in r)r.hasOwnProperty(J)&&(l=r[J],l!==void 0&&om(t,e,J,l,r,void 0));return}}for(E in r)r.hasOwnProperty(E)&&(l=r[E],l!=null&&ae(t,e,E,l,r,null))}function Yw(t,e,r,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,p=null,w=null,E=null,N=null,q=null,J=null;for(K in r){var it=r[K];if(r.hasOwnProperty(K)&&it!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":N=it;default:l.hasOwnProperty(K)||ae(t,e,K,null,l,it)}}for(var F in l){var K=l[F];if(it=r[F],l.hasOwnProperty(F)&&(K!=null||it!=null))switch(F){case"type":p=K;break;case"name":h=K;break;case"checked":q=K;break;case"defaultChecked":J=K;break;case"value":w=K;break;case"defaultValue":E=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(c(137,e));break;default:K!==it&&ae(t,e,F,K,l,it)}}Xs(t,w,E,N,q,J,p,h);return;case"select":K=w=E=F=null;for(p in r)if(N=r[p],r.hasOwnProperty(p)&&N!=null)switch(p){case"value":break;case"multiple":K=N;default:l.hasOwnProperty(p)||ae(t,e,p,null,l,N)}for(h in l)if(p=l[h],N=r[h],l.hasOwnProperty(h)&&(p!=null||N!=null))switch(h){case"value":F=p;break;case"defaultValue":E=p;break;case"multiple":w=p;default:p!==N&&ae(t,e,h,p,l,N)}e=E,r=w,l=K,F!=null?se(t,!!r,F,!1):!!l!=!!r&&(e!=null?se(t,!!r,e,!0):se(t,!!r,r?[]:"",!1));return;case"textarea":K=F=null;for(E in r)if(h=r[E],r.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:ae(t,e,E,null,l,h)}for(w in l)if(h=l[w],p=r[w],l.hasOwnProperty(w)&&(h!=null||p!=null))switch(w){case"value":F=h;break;case"defaultValue":K=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(c(91));break;default:h!==p&&ae(t,e,w,h,l,p)}Si(t,F,K);return;case"option":for(var vt in r)F=r[vt],r.hasOwnProperty(vt)&&F!=null&&!l.hasOwnProperty(vt)&&(vt==="selected"?t.selected=!1:ae(t,e,vt,null,l,F));for(N in l)F=l[N],K=r[N],l.hasOwnProperty(N)&&F!==K&&(F!=null||K!=null)&&(N==="selected"?t.selected=F&&typeof F!="function"&&typeof F!="symbol":ae(t,e,N,F,l,K));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var St in r)F=r[St],r.hasOwnProperty(St)&&F!=null&&!l.hasOwnProperty(St)&&ae(t,e,St,null,l,F);for(q in l)if(F=l[q],K=r[q],l.hasOwnProperty(q)&&F!==K&&(F!=null||K!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(c(137,e));break;default:ae(t,e,q,F,l,K)}return;default:if(Cr(e)){for(var re in r)F=r[re],r.hasOwnProperty(re)&&F!==void 0&&!l.hasOwnProperty(re)&&om(t,e,re,void 0,l,F);for(J in l)F=l[J],K=r[J],!l.hasOwnProperty(J)||F===K||F===void 0&&K===void 0||om(t,e,J,F,l,K);return}}for(var U in r)F=r[U],r.hasOwnProperty(U)&&F!=null&&!l.hasOwnProperty(U)&&ae(t,e,U,null,l,F);for(it in l)F=l[it],K=r[it],!l.hasOwnProperty(it)||F===K||F==null&&K==null||ae(t,e,it,F,l,K)}function Uy(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Fw(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var h=r[l],p=h.transferSize,w=h.initiatorType,E=h.duration;if(p&&E&&Uy(w)){for(w=0,E=h.responseEnd,l+=1;l<r.length;l++){var N=r[l],q=N.startTime;if(q>E)break;var J=N.transferSize,it=N.initiatorType;J&&Uy(it)&&(N=N.responseEnd,w+=J*(N<E?1:(E-q)/(N-q)))}if(--l,e+=8*(p+w)/(h.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var sm=null,lm=null;function nd(t){return t.nodeType===9?t:t.ownerDocument}function Zy(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Iy(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function cm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var um=null;function $w(){var t=window.event;return t&&t.type==="popstate"?t===um?!1:(um=t,!0):(um=null,!1)}var Gy=typeof setTimeout=="function"?setTimeout:void 0,Xw=typeof clearTimeout=="function"?clearTimeout:void 0,qy=typeof Promise=="function"?Promise:void 0,Kw=typeof queueMicrotask=="function"?queueMicrotask:typeof qy<"u"?function(t){return qy.resolve(null).then(t).catch(Qw)}:Gy;function Qw(t){setTimeout(function(){throw t})}function Qa(t){return t==="head"}function Yy(t,e){var r=e,l=0;do{var h=r.nextSibling;if(t.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"||r==="/&"){if(l===0){t.removeChild(h),ns(e);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")Pl(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Pl(r);for(var p=r.firstChild;p;){var w=p.nextSibling,E=p.nodeName;p[br]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&p.rel.toLowerCase()==="stylesheet"||r.removeChild(p),p=w}}else r==="body"&&Pl(t.ownerDocument.body);r=h}while(r);ns(e)}function Fy(t,e){var r=t;t=0;do{var l=r.nextSibling;if(r.nodeType===1?e?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(e?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=l}while(r)}function dm(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var r=e;switch(e=e.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":dm(r),qs(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function Ww(t,e,r,l){for(;t.nodeType===1;){var h=r;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[br])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var p=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=Fn(t.nextSibling),t===null)break}return null}function Jw(t,e,r){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Fn(t.nextSibling),t===null))return null;return t}function $y(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Fn(t.nextSibling),t===null))return null;return t}function fm(t){return t.data==="$?"||t.data==="$~"}function hm(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function t3(t,e){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||r.readyState!=="loading")e();else{var l=function(){e(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Fn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var mm=null;function Xy(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(e===0)return Fn(t.nextSibling);e--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||e++}t=t.nextSibling}return null}function Ky(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(e===0)return t;e--}else r!=="/$"&&r!=="/&"||e++}t=t.previousSibling}return null}function Qy(t,e,r){switch(e=nd(r),t){case"html":if(t=e.documentElement,!t)throw Error(c(452));return t;case"head":if(t=e.head,!t)throw Error(c(453));return t;case"body":if(t=e.body,!t)throw Error(c(454));return t;default:throw Error(c(451))}}function Pl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);qs(t)}var $n=new Map,Wy=new Set;function id(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var la=st.d;st.d={f:e3,r:n3,D:i3,C:a3,L:r3,m:o3,X:l3,S:s3,M:c3};function e3(){var t=la.f(),e=$u();return t||e}function n3(t){var e=_a(t);e!==null&&e.tag===5&&e.type==="form"?pv(e):la.r(t)}var Jo=typeof document>"u"?null:document;function Jy(t,e,r){var l=Jo;if(l&&typeof e=="string"&&e){var h=ce(e);h='link[rel="'+t+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),Wy.has(h)||(Wy.add(h),t={rel:t,crossOrigin:r,href:e},l.querySelector(h)===null&&(e=l.createElement("link"),Xe(e,"link",t),Ae(e),l.head.appendChild(e)))}}function i3(t){la.D(t),Jy("dns-prefetch",t,null)}function a3(t,e){la.C(t,e),Jy("preconnect",t,e)}function r3(t,e,r){la.L(t,e,r);var l=Jo;if(l&&t&&e){var h='link[rel="preload"][as="'+ce(e)+'"]';e==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+ce(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+ce(r.imageSizes)+'"]')):h+='[href="'+ce(t)+'"]';var p=h;switch(e){case"style":p=ts(t);break;case"script":p=es(t)}$n.has(p)||(t=C({rel:"preload",href:e==="image"&&r&&r.imageSrcSet?void 0:t,as:e},r),$n.set(p,t),l.querySelector(h)!==null||e==="style"&&l.querySelector(Nl(p))||e==="script"&&l.querySelector(Vl(p))||(e=l.createElement("link"),Xe(e,"link",t),Ae(e),l.head.appendChild(e)))}}function o3(t,e){la.m(t,e);var r=Jo;if(r&&t){var l=e&&typeof e.as=="string"?e.as:"script",h='link[rel="modulepreload"][as="'+ce(l)+'"][href="'+ce(t)+'"]',p=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=es(t)}if(!$n.has(p)&&(t=C({rel:"modulepreload",href:t},e),$n.set(p,t),r.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Vl(p)))return}l=r.createElement("link"),Xe(l,"link",t),Ae(l),r.head.appendChild(l)}}}function s3(t,e,r){la.S(t,e,r);var l=Jo;if(l&&t){var h=ba(l).hoistableStyles,p=ts(t);e=e||"default";var w=h.get(p);if(!w){var E={loading:0,preload:null};if(w=l.querySelector(Nl(p)))E.loading=5;else{t=C({rel:"stylesheet",href:t,"data-precedence":e},r),(r=$n.get(p))&&pm(t,r);var N=w=l.createElement("link");Ae(N),Xe(N,"link",t),N._p=new Promise(function(q,J){N.onload=q,N.onerror=J}),N.addEventListener("load",function(){E.loading|=1}),N.addEventListener("error",function(){E.loading|=2}),E.loading|=4,ad(w,e,l)}w={type:"stylesheet",instance:w,count:1,state:E},h.set(p,w)}}}function l3(t,e){la.X(t,e);var r=Jo;if(r&&t){var l=ba(r).hoistableScripts,h=es(t),p=l.get(h);p||(p=r.querySelector(Vl(h)),p||(t=C({src:t,async:!0},e),(e=$n.get(h))&&gm(t,e),p=r.createElement("script"),Ae(p),Xe(p,"link",t),r.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(h,p))}}function c3(t,e){la.M(t,e);var r=Jo;if(r&&t){var l=ba(r).hoistableScripts,h=es(t),p=l.get(h);p||(p=r.querySelector(Vl(h)),p||(t=C({src:t,async:!0,type:"module"},e),(e=$n.get(h))&&gm(t,e),p=r.createElement("script"),Ae(p),Xe(p,"link",t),r.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(h,p))}}function t1(t,e,r,l){var h=(h=ht.current)?id(h):null;if(!h)throw Error(c(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(e=ts(r.href),r=ba(h).hoistableStyles,l=r.get(e),l||(l={type:"style",instance:null,count:0,state:null},r.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=ts(r.href);var p=ba(h).hoistableStyles,w=p.get(t);if(w||(h=h.ownerDocument||h,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,w),(p=h.querySelector(Nl(t)))&&!p._p&&(w.instance=p,w.state.loading=5),$n.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},$n.set(t,r),p||u3(h,t,r,w.state))),e&&l===null)throw Error(c(528,""));return w}if(e&&l!==null)throw Error(c(529,""));return null;case"script":return e=r.async,r=r.src,typeof r=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=es(r),r=ba(h).hoistableScripts,l=r.get(e),l||(l={type:"script",instance:null,count:0,state:null},r.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,t))}}function ts(t){return'href="'+ce(t)+'"'}function Nl(t){return'link[rel="stylesheet"]['+t+"]"}function e1(t){return C({},t,{"data-precedence":t.precedence,precedence:null})}function u3(t,e,r,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),Xe(e,"link",r),Ae(e),t.head.appendChild(e))}function es(t){return'[src="'+ce(t)+'"]'}function Vl(t){return"script[async]"+t}function n1(t,e,r){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+ce(r.href)+'"]');if(l)return e.instance=l,Ae(l),l;var h=C({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Ae(l),Xe(l,"style",h),ad(l,r.precedence,t),e.instance=l;case"stylesheet":h=ts(r.href);var p=t.querySelector(Nl(h));if(p)return e.state.loading|=4,e.instance=p,Ae(p),p;l=e1(r),(h=$n.get(h))&&pm(l,h),p=(t.ownerDocument||t).createElement("link"),Ae(p);var w=p;return w._p=new Promise(function(E,N){w.onload=E,w.onerror=N}),Xe(p,"link",l),e.state.loading|=4,ad(p,r.precedence,t),e.instance=p;case"script":return p=es(r.src),(h=t.querySelector(Vl(p)))?(e.instance=h,Ae(h),h):(l=r,(h=$n.get(p))&&(l=C({},r),gm(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),Ae(h),Xe(h,"link",l),t.head.appendChild(h),e.instance=h);case"void":return null;default:throw Error(c(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,ad(l,r.precedence,t));return e.instance}function ad(t,e,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,p=h,w=0;w<l.length;w++){var E=l[w];if(E.dataset.precedence===e)p=E;else if(p!==h)break}p?p.parentNode.insertBefore(t,p.nextSibling):(e=r.nodeType===9?r.head:r,e.insertBefore(t,e.firstChild))}function pm(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function gm(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var rd=null;function i1(t,e,r){if(rd===null){var l=new Map,h=rd=new Map;h.set(r,l)}else h=rd,l=h.get(r),l||(l=new Map,h.set(r,l));if(l.has(t))return l;for(l.set(t,null),r=r.getElementsByTagName(t),h=0;h<r.length;h++){var p=r[h];if(!(p[br]||p[Ee]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var w=p.getAttribute(e)||"";w=t+w;var E=l.get(w);E?E.push(p):l.set(w,[p])}}return l}function a1(t,e,r){t=t.ownerDocument||t,t.head.insertBefore(r,e==="title"?t.querySelector("head > title"):null)}function d3(t,e,r){if(r===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function r1(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function f3(t,e,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=ts(l.href),p=e.querySelector(Nl(h));if(p){e=p._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=od.bind(t),e.then(t,t)),r.state.loading|=4,r.instance=p,Ae(p);return}p=e.ownerDocument||e,l=e1(l),(h=$n.get(h))&&pm(l,h),p=p.createElement("link"),Ae(p);var w=p;w._p=new Promise(function(E,N){w.onload=E,w.onerror=N}),Xe(p,"link",l),r.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,e),(e=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=od.bind(t),e.addEventListener("load",r),e.addEventListener("error",r))}}var vm=0;function h3(t,e){return t.stylesheets&&t.count===0&&ld(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var l=setTimeout(function(){if(t.stylesheets&&ld(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+e);0<t.imgBytes&&vm===0&&(vm=62500*Fw());var h=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ld(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>vm?50:800)+e);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function od(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ld(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var sd=null;function ld(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,sd=new Map,e.forEach(m3,t),sd=null,od.call(t))}function m3(t,e){if(!(e.state.loading&4)){var r=sd.get(t);if(r)var l=r.get(null);else{r=new Map,sd.set(t,r);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<h.length;p++){var w=h[p];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(r.set(w.dataset.precedence,w),l=w)}l&&r.set(null,l)}h=e.instance,w=h.getAttribute("data-precedence"),p=r.get(w)||l,p===l&&r.set(null,h),r.set(w,h),this.count++,l=od.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),p?p.parentNode.insertBefore(h,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),e.state.loading|=4}}var Hl={$$typeof:B,Provider:null,Consumer:null,_currentValue:rt,_currentValue2:rt,_threadCount:0};function p3(t,e,r,l,h,p,w,E,N){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zs(0),this.hiddenUpdates=Zs(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=p,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.incompleteTransitions=new Map}function o1(t,e,r,l,h,p,w,E,N,q,J,it){return t=new p3(t,e,r,w,N,q,J,it,E),e=1,p===!0&&(e|=24),p=We(3,null,null,e),t.current=p,p.stateNode=t,e=Kf(),e.refCount++,t.pooledCache=e,e.refCount++,p.memoizedState={element:l,isDehydrated:r,cache:e},th(p),t}function s1(t){return t?(t=$i,t):$i}function l1(t,e,r,l,h,p){h=s1(h),l.context===null?l.context=h:l.pendingContext=h,l=Ha(e),l.payload={element:r},p=p===void 0?null:p,p!==null&&(l.callback=p),r=Ua(t,l,e),r!==null&&(Tn(r,t,e),yl(r,t,e))}function c1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function ym(t,e){c1(t,e),(t=t.alternate)&&c1(t,e)}function u1(t){if(t.tag===13||t.tag===31){var e=Gn(t,67108864);e!==null&&Tn(e,t,67108864),ym(t,67108864)}}function d1(t){if(t.tag===13||t.tag===31){var e=kn();e=hn(e);var r=Gn(t,e);r!==null&&Tn(r,t,e),ym(t,e)}}var cd=!0;function g3(t,e,r,l){var h=X.T;X.T=null;var p=st.p;try{st.p=2,xm(t,e,r,l)}finally{st.p=p,X.T=h}}function v3(t,e,r,l){var h=X.T;X.T=null;var p=st.p;try{st.p=8,xm(t,e,r,l)}finally{st.p=p,X.T=h}}function xm(t,e,r,l){if(cd){var h=_m(l);if(h===null)rm(t,e,l,ud,r),h1(t,l);else if(x3(h,t,e,r,l))l.stopPropagation();else if(h1(t,l),e&4&&-1<y3.indexOf(t)){for(;h!==null;){var p=_a(h);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var w=Vi(p.pendingLanes);if(w!==0){var E=p;for(E.pendingLanes|=2,E.entangledLanes|=2;w;){var N=1<<31-an(w);E.entanglements[1]|=N,w&=~N}ki(p),(Kt&6)===0&&(Yu=nn()+500,Rl(0))}}break;case 31:case 13:E=Gn(p,2),E!==null&&Tn(E,p,2),$u(),ym(p,2)}if(p=_m(l),p===null&&rm(t,e,l,ud,r),p===h)break;h=p}h!==null&&l.stopPropagation()}else rm(t,e,l,null,r)}}function _m(t){return t=jr(t),bm(t)}var ud=null;function bm(t){if(ud=null,t=Zi(t),t!==null){var e=m(t);if(e===null)t=null;else{var r=e.tag;if(r===13){if(t=g(e),t!==null)return t;t=null}else if(r===31){if(t=x(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return ud=t,null}function f1(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jf()){case po:return 2;case Hs:return 8;case pr:case Ef:return 32;case Us:return 268435456;default:return 32}default:return 32}}var wm=!1,Wa=null,Ja=null,tr=null,Ul=new Map,Zl=new Map,er=[],y3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function h1(t,e){switch(t){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":Ul.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zl.delete(e.pointerId)}}function Il(t,e,r,l,h,p){return t===null||t.nativeEvent!==p?(t={blockedOn:e,domEventName:r,eventSystemFlags:l,nativeEvent:p,targetContainers:[h]},e!==null&&(e=_a(e),e!==null&&u1(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,h!==null&&e.indexOf(h)===-1&&e.push(h),t)}function x3(t,e,r,l,h){switch(e){case"focusin":return Wa=Il(Wa,t,e,r,l,h),!0;case"dragenter":return Ja=Il(Ja,t,e,r,l,h),!0;case"mouseover":return tr=Il(tr,t,e,r,l,h),!0;case"pointerover":var p=h.pointerId;return Ul.set(p,Il(Ul.get(p)||null,t,e,r,l,h)),!0;case"gotpointercapture":return p=h.pointerId,Zl.set(p,Il(Zl.get(p)||null,t,e,r,l,h)),!0}return!1}function m1(t){var e=Zi(t.target);if(e!==null){var r=m(e);if(r!==null){if(e=r.tag,e===13){if(e=g(r),e!==null){t.blockedOn=e,Gs(t.priority,function(){d1(r)});return}}else if(e===31){if(e=x(r),e!==null){t.blockedOn=e,Gs(t.priority,function(){d1(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dd(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=_m(t.nativeEvent);if(r===null){r=t.nativeEvent;var l=new r.constructor(r.type,r);_o=l,r.target.dispatchEvent(l),_o=null}else return e=_a(r),e!==null&&u1(e),t.blockedOn=r,!1;e.shift()}return!0}function p1(t,e,r){dd(t)&&r.delete(e)}function _3(){wm=!1,Wa!==null&&dd(Wa)&&(Wa=null),Ja!==null&&dd(Ja)&&(Ja=null),tr!==null&&dd(tr)&&(tr=null),Ul.forEach(p1),Zl.forEach(p1)}function fd(t,e){t.blockedOn===e&&(t.blockedOn=null,wm||(wm=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,_3)))}var hd=null;function g1(t){hd!==t&&(hd=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){hd===t&&(hd=null);for(var e=0;e<t.length;e+=3){var r=t[e],l=t[e+1],h=t[e+2];if(typeof l!="function"){if(bm(l||r)===null)continue;break}var p=_a(r);p!==null&&(t.splice(e,3),e-=3,_h(p,{pending:!0,data:h,method:r.method,action:l},l,h))}}))}function ns(t){function e(N){return fd(N,t)}Wa!==null&&fd(Wa,t),Ja!==null&&fd(Ja,t),tr!==null&&fd(tr,t),Ul.forEach(e),Zl.forEach(e);for(var r=0;r<er.length;r++){var l=er[r];l.blockedOn===t&&(l.blockedOn=null)}for(;0<er.length&&(r=er[0],r.blockedOn===null);)m1(r),r.blockedOn===null&&er.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var h=r[l],p=r[l+1],w=h[Ue]||null;if(typeof p=="function")w||g1(r);else if(w){var E=null;if(p&&p.hasAttribute("formAction")){if(h=p,w=p[Ue]||null)E=w.formAction;else if(bm(h)!==null)continue}else E=w.action;typeof E=="function"?r[l+1]=E:(r.splice(l,3),l-=3),g1(r)}}}function v1(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(w){return h=w})},focusReset:"manual",scroll:"manual"})}function e(){h!==null&&(h(),h=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),h!==null&&(h(),h=null)}}}function Sm(t){this._internalRoot=t}md.prototype.render=Sm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(c(409));var r=e.current,l=kn();l1(r,l,t,e,null,null)},md.prototype.unmount=Sm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;l1(t.current,2,null,t,null,null),$u(),e[Ui]=null}};function md(t){this._internalRoot=t}md.prototype.unstable_scheduleHydration=function(t){if(t){var e=Is();t={blockedOn:null,target:t,priority:e};for(var r=0;r<er.length&&e!==0&&e<er[r].priority;r++);er.splice(r,0,t),r===0&&m1(t)}};var y1=a.version;if(y1!=="19.2.3")throw Error(c(527,y1,"19.2.3"));st.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(c(188)):(t=Object.keys(t).join(","),Error(c(268,t)));return t=_(e),t=t!==null?T(t):null,t=t===null?null:t.stateNode,t};var b3={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pd.isDisabled&&pd.supportsFiber)try{xa=pd.inject(b3),qe=pd}catch{}}return ql.createRoot=function(t,e){if(!u(t))throw Error(c(299));var r=!1,l="",h=Cv,p=jv,w=Ev;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(h=e.onUncaughtError),e.onCaughtError!==void 0&&(p=e.onCaughtError),e.onRecoverableError!==void 0&&(w=e.onRecoverableError)),e=o1(t,1,!1,null,null,r,l,null,h,p,w,v1),t[Ui]=e.current,am(t),new Sm(e)},ql.hydrateRoot=function(t,e,r){if(!u(t))throw Error(c(299));var l=!1,h="",p=Cv,w=jv,E=Ev,N=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(p=r.onUncaughtError),r.onCaughtError!==void 0&&(w=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.formState!==void 0&&(N=r.formState)),e=o1(t,1,!0,e,r??null,l,h,N,p,w,E,v1),e.context=s1(null),r=e.current,l=kn(),l=hn(l),h=Ha(l),h.callback=null,Ua(r,h,l),r=l,e.current.lanes=r,Hi(e,r),ki(e),t[Ui]=e.current,am(t),new md(e)},ql.version="19.2.3",ql}var A1;function z3(){if(A1)return jm.exports;A1=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),jm.exports=M3(),jm.exports}var L3=z3(),zm,M1;function O3(){if(M1)return zm;M1=1;var n=typeof Element<"u",a=typeof Map=="function",o=typeof Set=="function",c=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function u(m,g){if(m===g)return!0;if(m&&g&&typeof m=="object"&&typeof g=="object"){if(m.constructor!==g.constructor)return!1;var x,y,_;if(Array.isArray(m)){if(x=m.length,x!=g.length)return!1;for(y=x;y--!==0;)if(!u(m[y],g[y]))return!1;return!0}var T;if(a&&m instanceof Map&&g instanceof Map){if(m.size!==g.size)return!1;for(T=m.entries();!(y=T.next()).done;)if(!g.has(y.value[0]))return!1;for(T=m.entries();!(y=T.next()).done;)if(!u(y.value[1],g.get(y.value[0])))return!1;return!0}if(o&&m instanceof Set&&g instanceof Set){if(m.size!==g.size)return!1;for(T=m.entries();!(y=T.next()).done;)if(!g.has(y.value[0]))return!1;return!0}if(c&&ArrayBuffer.isView(m)&&ArrayBuffer.isView(g)){if(x=m.length,x!=g.length)return!1;for(y=x;y--!==0;)if(m[y]!==g[y])return!1;return!0}if(m.constructor===RegExp)return m.source===g.source&&m.flags===g.flags;if(m.valueOf!==Object.prototype.valueOf&&typeof m.valueOf=="function"&&typeof g.valueOf=="function")return m.valueOf()===g.valueOf();if(m.toString!==Object.prototype.toString&&typeof m.toString=="function"&&typeof g.toString=="function")return m.toString()===g.toString();if(_=Object.keys(m),x=_.length,x!==Object.keys(g).length)return!1;for(y=x;y--!==0;)if(!Object.prototype.hasOwnProperty.call(g,_[y]))return!1;if(n&&m instanceof Element)return!1;for(y=x;y--!==0;)if(!((_[y]==="_owner"||_[y]==="__v"||_[y]==="__o")&&m.$$typeof)&&!u(m[_[y]],g[_[y]]))return!1;return!0}return m!==m&&g!==g}return zm=function(g,x){try{return u(g,x)}catch(y){if((y.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw y}},zm}var D3=O3();const R3=Ac(D3);var Lm,z1;function k3(){if(z1)return Lm;z1=1;var n=function(a,o,c,u,m,g,x,y){if(!a){var _;if(o===void 0)_=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var T=[c,u,m,g,x,y],C=0;_=new Error(o.replace(/%s/g,function(){return T[C++]})),_.name="Invariant Violation"}throw _.framesToPop=1,_}};return Lm=n,Lm}var B3=k3();const L1=Ac(B3);var Om,O1;function P3(){return O1||(O1=1,Om=function(a,o,c,u){var m=c?c.call(u,a,o):void 0;if(m!==void 0)return!!m;if(a===o)return!0;if(typeof a!="object"||!a||typeof o!="object"||!o)return!1;var g=Object.keys(a),x=Object.keys(o);if(g.length!==x.length)return!1;for(var y=Object.prototype.hasOwnProperty.bind(o),_=0;_<g.length;_++){var T=g[_];if(!y(T))return!1;var C=a[T],A=o[T];if(m=c?c.call(u,C,A,T):void 0,m===!1||m===void 0&&C!==A)return!1}return!0}),Om}var N3=P3();const V3=Ac(N3);var l2=(n=>(n.BASE="base",n.BODY="body",n.HEAD="head",n.HTML="html",n.LINK="link",n.META="meta",n.NOSCRIPT="noscript",n.SCRIPT="script",n.STYLE="style",n.TITLE="title",n.FRAGMENT="Symbol(react.fragment)",n))(l2||{}),Dm={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},D1=Object.values(l2),hg={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},H3=Object.entries(hg).reduce((n,[a,o])=>(n[o]=a,n),{}),pi="data-rh",ps={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},gs=(n,a)=>{for(let o=n.length-1;o>=0;o-=1){const c=n[o];if(Object.prototype.hasOwnProperty.call(c,a))return c[a]}return null},U3=n=>{let a=gs(n,"title");const o=gs(n,ps.TITLE_TEMPLATE);if(Array.isArray(a)&&(a=a.join("")),o&&a)return o.replace(/%s/g,()=>a);const c=gs(n,ps.DEFAULT_TITLE);return a||c||void 0},Z3=n=>gs(n,ps.ON_CHANGE_CLIENT_STATE)||(()=>{}),Rm=(n,a)=>a.filter(o=>typeof o[n]<"u").map(o=>o[n]).reduce((o,c)=>({...o,...c}),{}),I3=(n,a)=>a.filter(o=>typeof o.base<"u").map(o=>o.base).reverse().reduce((o,c)=>{if(!o.length){const u=Object.keys(c);for(let m=0;m<u.length;m+=1){const x=u[m].toLowerCase();if(n.indexOf(x)!==-1&&c[x])return o.concat(c)}}return o},[]),G3=n=>console&&typeof console.warn=="function"&&console.warn(n),Yl=(n,a,o)=>{const c={};return o.filter(u=>Array.isArray(u[n])?!0:(typeof u[n]<"u"&&G3(`Helmet: ${n} should be of type "Array". Instead found type "${typeof u[n]}"`),!1)).map(u=>u[n]).reverse().reduce((u,m)=>{const g={};m.filter(y=>{let _;const T=Object.keys(y);for(let A=0;A<T.length;A+=1){const O=T[A],R=O.toLowerCase();a.indexOf(R)!==-1&&!(_==="rel"&&y[_].toLowerCase()==="canonical")&&!(R==="rel"&&y[R].toLowerCase()==="stylesheet")&&(_=R),a.indexOf(O)!==-1&&(O==="innerHTML"||O==="cssText"||O==="itemprop")&&(_=O)}if(!_||!y[_])return!1;const C=y[_].toLowerCase();return c[_]||(c[_]={}),g[_]||(g[_]={}),c[_][C]?!1:(g[_][C]=!0,!0)}).reverse().forEach(y=>u.push(y));const x=Object.keys(g);for(let y=0;y<x.length;y+=1){const _=x[y],T={...c[_],...g[_]};c[_]=T}return u},[]).reverse()},q3=(n,a)=>{if(Array.isArray(n)&&n.length){for(let o=0;o<n.length;o+=1)if(n[o][a])return!0}return!1},Y3=n=>({baseTag:I3(["href"],n),bodyAttributes:Rm("bodyAttributes",n),defer:gs(n,ps.DEFER),encode:gs(n,ps.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Rm("htmlAttributes",n),linkTags:Yl("link",["rel","href"],n),metaTags:Yl("meta",["name","charset","http-equiv","property","itemprop"],n),noscriptTags:Yl("noscript",["innerHTML"],n),onChangeClientState:Z3(n),scriptTags:Yl("script",["src","innerHTML"],n),styleTags:Yl("style",["cssText"],n),title:U3(n),titleAttributes:Rm("titleAttributes",n),prioritizeSeoTags:q3(n,ps.PRIORITIZE_SEO_TAGS)}),c2=n=>Array.isArray(n)?n.join(""):n,F3=(n,a)=>{const o=Object.keys(n);for(let c=0;c<o.length;c+=1)if(a[o[c]]&&a[o[c]].includes(n[o[c]]))return!0;return!1},km=(n,a)=>Array.isArray(n)?n.reduce((o,c)=>(F3(c,a)?o.priority.push(c):o.default.push(c),o),{priority:[],default:[]}):{default:n,priority:[]},R1=(n,a)=>({...n,[a]:void 0}),$3=["noscript","script","style"],zp=(n,a=!0)=>a===!1?String(n):String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),u2=n=>Object.keys(n).reduce((a,o)=>{const c=typeof n[o]<"u"?`${o}="${n[o]}"`:`${o}`;return a?`${a} ${c}`:c},""),X3=(n,a,o,c)=>{const u=u2(o),m=c2(a);return u?`<${n} ${pi}="true" ${u}>${zp(m,c)}</${n}>`:`<${n} ${pi}="true">${zp(m,c)}</${n}>`},K3=(n,a,o=!0)=>a.reduce((c,u)=>{const m=u,g=Object.keys(m).filter(_=>!(_==="innerHTML"||_==="cssText")).reduce((_,T)=>{const C=typeof m[T]>"u"?T:`${T}="${zp(m[T],o)}"`;return _?`${_} ${C}`:C},""),x=m.innerHTML||m.cssText||"",y=$3.indexOf(n)===-1;return`${c}<${n} ${pi}="true" ${g}${y?"/>":`>${x}</${n}>`}`},""),d2=(n,a={})=>Object.keys(n).reduce((o,c)=>{const u=hg[c];return o[u||c]=n[c],o},a),Q3=(n,a,o)=>{const c={key:a,[pi]:!0},u=d2(o,c);return[oe.createElement("title",u,a)]},zd=(n,a)=>a.map((o,c)=>{const u={key:c,[pi]:!0};return Object.keys(o).forEach(m=>{const x=hg[m]||m;if(x==="innerHTML"||x==="cssText"){const y=o.innerHTML||o.cssText;u.dangerouslySetInnerHTML={__html:y}}else u[x]=o[m]}),oe.createElement(n,u)}),Kn=(n,a,o=!0)=>{switch(n){case"title":return{toComponent:()=>Q3(n,a.title,a.titleAttributes),toString:()=>X3(n,a.title,a.titleAttributes,o)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>d2(a),toString:()=>u2(a)};default:return{toComponent:()=>zd(n,a),toString:()=>K3(n,a,o)}}},W3=({metaTags:n,linkTags:a,scriptTags:o,encode:c})=>{const u=km(n,Dm.meta),m=km(a,Dm.link),g=km(o,Dm.script);return{priorityMethods:{toComponent:()=>[...zd("meta",u.priority),...zd("link",m.priority),...zd("script",g.priority)],toString:()=>`${Kn("meta",u.priority,c)} ${Kn("link",m.priority,c)} ${Kn("script",g.priority,c)}`},metaTags:u.default,linkTags:m.default,scriptTags:g.default}},J3=n=>{const{baseTag:a,bodyAttributes:o,encode:c=!0,htmlAttributes:u,noscriptTags:m,styleTags:g,title:x="",titleAttributes:y,prioritizeSeoTags:_}=n;let{linkTags:T,metaTags:C,scriptTags:A}=n,O={toComponent:()=>{},toString:()=>""};return _&&({priorityMethods:O,linkTags:T,metaTags:C,scriptTags:A}=W3(n)),{priority:O,base:Kn("base",a,c),bodyAttributes:Kn("bodyAttributes",o,c),htmlAttributes:Kn("htmlAttributes",u,c),link:Kn("link",T,c),meta:Kn("meta",C,c),noscript:Kn("noscript",m,c),script:Kn("script",A,c),style:Kn("style",g,c),title:Kn("title",{title:x,titleAttributes:y},c)}},Lp=J3,gd=[],f2=!!(typeof window<"u"&&window.document&&window.document.createElement),Op=class{instances=[];canUseDOM=f2;context;value={setHelmet:n=>{this.context.helmet=n},helmetInstances:{get:()=>this.canUseDOM?gd:this.instances,add:n=>{(this.canUseDOM?gd:this.instances).push(n)},remove:n=>{const a=(this.canUseDOM?gd:this.instances).indexOf(n);(this.canUseDOM?gd:this.instances).splice(a,1)}}};constructor(n,a){this.context=n,this.canUseDOM=a||!1,a||(n.helmet=Lp({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},t4={},h2=oe.createContext(t4),m2=class p2 extends z.Component{static canUseDOM=f2;helmetData;constructor(a){super(a),this.helmetData=new Op(this.props.context||{},p2.canUseDOM)}render(){return oe.createElement(h2.Provider,{value:this.helmetData.value},this.props.children)}},is=(n,a)=>{const o=document.head||document.querySelector("head"),c=o.querySelectorAll(`${n}[${pi}]`),u=[].slice.call(c),m=[];let g;return a&&a.length&&a.forEach(x=>{const y=document.createElement(n);for(const _ in x)if(Object.prototype.hasOwnProperty.call(x,_))if(_==="innerHTML")y.innerHTML=x.innerHTML;else if(_==="cssText")y.styleSheet?y.styleSheet.cssText=x.cssText:y.appendChild(document.createTextNode(x.cssText));else{const T=_,C=typeof x[T]>"u"?"":x[T];y.setAttribute(_,C)}y.setAttribute(pi,"true"),u.some((_,T)=>(g=T,y.isEqualNode(_)))?u.splice(g,1):m.push(y)}),u.forEach(x=>x.parentNode?.removeChild(x)),m.forEach(x=>o.appendChild(x)),{oldTags:u,newTags:m}},Dp=(n,a)=>{const o=document.getElementsByTagName(n)[0];if(!o)return;const c=o.getAttribute(pi),u=c?c.split(","):[],m=[...u],g=Object.keys(a);for(const x of g){const y=a[x]||"";o.getAttribute(x)!==y&&o.setAttribute(x,y),u.indexOf(x)===-1&&u.push(x);const _=m.indexOf(x);_!==-1&&m.splice(_,1)}for(let x=m.length-1;x>=0;x-=1)o.removeAttribute(m[x]);u.length===m.length?o.removeAttribute(pi):o.getAttribute(pi)!==g.join(",")&&o.setAttribute(pi,g.join(","))},e4=(n,a)=>{typeof n<"u"&&document.title!==n&&(document.title=c2(n)),Dp("title",a)},k1=(n,a)=>{const{baseTag:o,bodyAttributes:c,htmlAttributes:u,linkTags:m,metaTags:g,noscriptTags:x,onChangeClientState:y,scriptTags:_,styleTags:T,title:C,titleAttributes:A}=n;Dp("body",c),Dp("html",u),e4(C,A);const O={baseTag:is("base",o),linkTags:is("link",m),metaTags:is("meta",g),noscriptTags:is("noscript",x),scriptTags:is("script",_),styleTags:is("style",T)},R={},P={};Object.keys(O).forEach(I=>{const{newTags:D,oldTags:M}=O[I];D.length&&(R[I]=D),M.length&&(P[I]=O[I].oldTags)}),a&&a(),y(n,R,P)},Fl=null,n4=n=>{Fl&&cancelAnimationFrame(Fl),n.defer?Fl=requestAnimationFrame(()=>{k1(n,()=>{Fl=null})}):(k1(n),Fl=null)},i4=n4,B1=class extends z.Component{rendered=!1;shouldComponentUpdate(n){return!V3(n,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:n}=this.props.context;n.remove(this),this.emitChange()}emitChange(){const{helmetInstances:n,setHelmet:a}=this.props.context;let o=null;const c=Y3(n.get().map(u=>{const m={...u.props};return delete m.context,m}));m2.canUseDOM?i4(c):Lp&&(o=Lp(c)),a(o)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:n}=this.props.context;n.add(this),this.emitChange()}render(){return this.init(),null}},cr=class extends z.Component{static defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1};shouldComponentUpdate(n){return!R3(R1(this.props,"helmetData"),R1(n,"helmetData"))}mapNestedChildrenToProps(n,a){if(!a)return null;switch(n.type){case"script":case"noscript":return{innerHTML:a};case"style":return{cssText:a};default:throw new Error(`<${n.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(n,a,o,c){return{...a,[n.type]:[...a[n.type]||[],{...o,...this.mapNestedChildrenToProps(n,c)}]}}mapObjectTypeChildren(n,a,o,c){switch(n.type){case"title":return{...a,[n.type]:c,titleAttributes:{...o}};case"body":return{...a,bodyAttributes:{...o}};case"html":return{...a,htmlAttributes:{...o}};default:return{...a,[n.type]:{...o}}}}mapArrayTypeChildrenToProps(n,a){let o={...a};return Object.keys(n).forEach(c=>{o={...o,[c]:n[c]}}),o}warnOnInvalidChildren(n,a){return L1(D1.some(o=>n.type===o),typeof n.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${D1.join(", ")} are allowed. Helmet does not support rendering <${n.type}> elements. Refer to our API for more information.`),L1(!a||typeof a=="string"||Array.isArray(a)&&!a.some(o=>typeof o!="string"),`Helmet expects a string as a child of <${n.type}>. Did you forget to wrap your children in braces? ( <${n.type}>{\`\`}</${n.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(n,a){let o={};return oe.Children.forEach(n,c=>{if(!c||!c.props)return;const{children:u,...m}=c.props,g=Object.keys(m).reduce((y,_)=>(y[H3[_]||_]=m[_],y),{});let{type:x}=c;switch(typeof x=="symbol"?x=x.toString():this.warnOnInvalidChildren(c,u),x){case"Symbol(react.fragment)":a=this.mapChildrenToProps(u,a);break;case"link":case"meta":case"noscript":case"script":case"style":o=this.flattenArrayTypeChildren(c,o,g,u);break;default:a=this.mapObjectTypeChildren(c,a,g,u);break}}),this.mapArrayTypeChildrenToProps(o,a)}render(){const{children:n,...a}=this.props;let o={...a},{helmetData:c}=a;if(n&&(o=this.mapChildrenToProps(n,o)),c&&!(c instanceof Op)){const u=c;c=new Op(u.context,!0),delete o.helmetData}return c?oe.createElement(B1,{...o,context:c.value}):oe.createElement(h2.Consumer,null,u=>oe.createElement(B1,{...o,context:u}))}};var P1="popstate";function a4(n={}){function a(c,u){let{pathname:m,search:g,hash:x}=c.location;return Rp("",{pathname:m,search:g,hash:x},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function o(c,u){return typeof u=="string"?u:_c(u)}return o4(a,o,null,n)}function xe(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function yi(n,a){if(!n){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function r4(){return Math.random().toString(36).substring(2,10)}function N1(n,a){return{usr:n.state,key:n.key,idx:a}}function Rp(n,a,o=null,c){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof a=="string"?zs(a):a,state:o,key:a&&a.key||c||r4()}}function _c({pathname:n="/",search:a="",hash:o=""}){return a&&a!=="?"&&(n+=a.charAt(0)==="?"?a:"?"+a),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function zs(n){let a={};if(n){let o=n.indexOf("#");o>=0&&(a.hash=n.substring(o),n=n.substring(0,o));let c=n.indexOf("?");c>=0&&(a.search=n.substring(c),n=n.substring(0,c)),n&&(a.pathname=n)}return a}function o4(n,a,o,c={}){let{window:u=document.defaultView,v5Compat:m=!1}=c,g=u.history,x="POP",y=null,_=T();_==null&&(_=0,g.replaceState({...g.state,idx:_},""));function T(){return(g.state||{idx:null}).idx}function C(){x="POP";let I=T(),D=I==null?null:I-_;_=I,y&&y({action:x,location:P.location,delta:D})}function A(I,D){x="PUSH";let M=Rp(P.location,I,D);_=T()+1;let B=N1(M,_),Q=P.createHref(M);try{g.pushState(B,"",Q)}catch(tt){if(tt instanceof DOMException&&tt.name==="DataCloneError")throw tt;u.location.assign(Q)}m&&y&&y({action:x,location:P.location,delta:1})}function O(I,D){x="REPLACE";let M=Rp(P.location,I,D);_=T();let B=N1(M,_),Q=P.createHref(M);g.replaceState(B,"",Q),m&&y&&y({action:x,location:P.location,delta:0})}function R(I){return s4(I)}let P={get action(){return x},get location(){return n(u,g)},listen(I){if(y)throw new Error("A history only accepts one active listener");return u.addEventListener(P1,C),y=I,()=>{u.removeEventListener(P1,C),y=null}},createHref(I){return a(u,I)},createURL:R,encodeLocation(I){let D=R(I);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:A,replace:O,go(I){return g.go(I)}};return P}function s4(n,a=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),xe(o,"No window.location.(origin|href) available to create URL");let c=typeof n=="string"?n:_c(n);return c=c.replace(/ $/,"%20"),!a&&c.startsWith("//")&&(c=o+c),new URL(c,o)}function g2(n,a,o="/"){return l4(n,a,o,!1)}function l4(n,a,o,c){let u=typeof a=="string"?zs(a):a,m=ga(u.pathname||"/",o);if(m==null)return null;let g=v2(n);c4(g);let x=null;for(let y=0;x==null&&y<g.length;++y){let _=_4(m);x=y4(g[y],_,c)}return x}function v2(n,a=[],o=[],c="",u=!1){let m=(g,x,y=u,_)=>{let T={relativePath:_===void 0?g.path||"":_,caseSensitive:g.caseSensitive===!0,childrenIndex:x,route:g};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(c)&&y)return;xe(T.relativePath.startsWith(c),`Absolute route path "${T.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(c.length)}let C=ma([c,T.relativePath]),A=o.concat(T);g.children&&g.children.length>0&&(xe(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${C}".`),v2(g.children,a,A,C,y)),!(g.path==null&&!g.index)&&a.push({path:C,score:g4(C,g.index),routesMeta:A})};return n.forEach((g,x)=>{if(g.path===""||!g.path?.includes("?"))m(g,x);else for(let y of y2(g.path))m(g,x,!0,y)}),a}function y2(n){let a=n.split("/");if(a.length===0)return[];let[o,...c]=a,u=o.endsWith("?"),m=o.replace(/\?$/,"");if(c.length===0)return u?[m,""]:[m];let g=y2(c.join("/")),x=[];return x.push(...g.map(y=>y===""?m:[m,y].join("/"))),u&&x.push(...g),x.map(y=>n.startsWith("/")&&y===""?"/":y)}function c4(n){n.sort((a,o)=>a.score!==o.score?o.score-a.score:v4(a.routesMeta.map(c=>c.childrenIndex),o.routesMeta.map(c=>c.childrenIndex)))}var u4=/^:[\w-]+$/,d4=3,f4=2,h4=1,m4=10,p4=-2,V1=n=>n==="*";function g4(n,a){let o=n.split("/"),c=o.length;return o.some(V1)&&(c+=p4),a&&(c+=f4),o.filter(u=>!V1(u)).reduce((u,m)=>u+(u4.test(m)?d4:m===""?h4:m4),c)}function v4(n,a){return n.length===a.length&&n.slice(0,-1).every((c,u)=>c===a[u])?n[n.length-1]-a[a.length-1]:0}function y4(n,a,o=!1){let{routesMeta:c}=n,u={},m="/",g=[];for(let x=0;x<c.length;++x){let y=c[x],_=x===c.length-1,T=m==="/"?a:a.slice(m.length)||"/",C=$d({path:y.relativePath,caseSensitive:y.caseSensitive,end:_},T),A=y.route;if(!C&&_&&o&&!c[c.length-1].route.index&&(C=$d({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},T)),!C)return null;Object.assign(u,C.params),g.push({params:u,pathname:ma([m,C.pathname]),pathnameBase:T4(ma([m,C.pathnameBase])),route:A}),C.pathnameBase!=="/"&&(m=ma([m,C.pathnameBase]))}return g}function $d(n,a){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[o,c]=x4(n.path,n.caseSensitive,n.end),u=a.match(o);if(!u)return null;let m=u[0],g=m.replace(/(.)\/+$/,"$1"),x=u.slice(1);return{params:c.reduce((_,{paramName:T,isOptional:C},A)=>{if(T==="*"){let R=x[A]||"";g=m.slice(0,m.length-R.length).replace(/(.)\/+$/,"$1")}const O=x[A];return C&&!O?_[T]=void 0:_[T]=(O||"").replace(/%2F/g,"/"),_},{}),pathname:m,pathnameBase:g,pattern:n}}function x4(n,a=!1,o=!0){yi(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let c=[],u="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,x,y)=>(c.push({paramName:x,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(c.push({paramName:"*"}),u+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?u+="\\/*$":n!==""&&n!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,a?void 0:"i"),c]}function _4(n){try{return n.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return yi(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),n}}function ga(n,a){if(a==="/")return n;if(!n.toLowerCase().startsWith(a.toLowerCase()))return null;let o=a.endsWith("/")?a.length-1:a.length,c=n.charAt(o);return c&&c!=="/"?null:n.slice(o)||"/"}var x2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,b4=n=>x2.test(n);function w4(n,a="/"){let{pathname:o,search:c="",hash:u=""}=typeof n=="string"?zs(n):n,m;if(o)if(b4(o))m=o;else{if(o.includes("//")){let g=o;o=o.replace(/\/\/+/g,"/"),yi(!1,`Pathnames cannot have embedded double slashes - normalizing ${g} -> ${o}`)}o.startsWith("/")?m=H1(o.substring(1),"/"):m=H1(o,a)}else m=a;return{pathname:m,search:C4(c),hash:j4(u)}}function H1(n,a){let o=a.replace(/\/+$/,"").split("/");return n.split("/").forEach(u=>{u===".."?o.length>1&&o.pop():u!=="."&&o.push(u)}),o.length>1?o.join("/"):"/"}function Bm(n,a,o,c){return`Cannot include a '${n}' character in a manually specified \`to.${a}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function S4(n){return n.filter((a,o)=>o===0||a.route.path&&a.route.path.length>0)}function _2(n){let a=S4(n);return a.map((o,c)=>c===a.length-1?o.pathname:o.pathnameBase)}function b2(n,a,o,c=!1){let u;typeof n=="string"?u=zs(n):(u={...n},xe(!u.pathname||!u.pathname.includes("?"),Bm("?","pathname","search",u)),xe(!u.pathname||!u.pathname.includes("#"),Bm("#","pathname","hash",u)),xe(!u.search||!u.search.includes("#"),Bm("#","search","hash",u)));let m=n===""||u.pathname==="",g=m?"/":u.pathname,x;if(g==null)x=o;else{let C=a.length-1;if(!c&&g.startsWith("..")){let A=g.split("/");for(;A[0]==="..";)A.shift(),C-=1;u.pathname=A.join("/")}x=C>=0?a[C]:"/"}let y=w4(u,x),_=g&&g!=="/"&&g.endsWith("/"),T=(m||g===".")&&o.endsWith("/");return!y.pathname.endsWith("/")&&(_||T)&&(y.pathname+="/"),y}var ma=n=>n.join("/").replace(/\/\/+/g,"/"),T4=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),C4=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,j4=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,E4=class{constructor(n,a,o,c=!1){this.status=n,this.statusText=a||"",this.internal=c,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function A4(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function M4(n){return n.map(a=>a.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var w2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function S2(n,a){let o=n;if(typeof o!="string"||!x2.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let c=o,u=!1;if(w2)try{let m=new URL(window.location.href),g=o.startsWith("//")?new URL(m.protocol+o):new URL(o),x=ga(g.pathname,a);g.origin===m.origin&&x!=null?o=x+g.search+g.hash:u=!0}catch{yi(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:u,to:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var T2=["POST","PUT","PATCH","DELETE"];new Set(T2);var z4=["GET",...T2];new Set(z4);var Ls=z.createContext(null);Ls.displayName="DataRouter";var hf=z.createContext(null);hf.displayName="DataRouterState";var L4=z.createContext(!1),C2=z.createContext({isTransitioning:!1});C2.displayName="ViewTransition";var O4=z.createContext(new Map);O4.displayName="Fetchers";var D4=z.createContext(null);D4.displayName="Await";var ti=z.createContext(null);ti.displayName="Navigation";var Mc=z.createContext(null);Mc.displayName="Location";var ya=z.createContext({outlet:null,matches:[],isDataRoute:!1});ya.displayName="Route";var mg=z.createContext(null);mg.displayName="RouteError";var j2="REACT_ROUTER_ERROR",R4="REDIRECT",k4="ROUTE_ERROR_RESPONSE";function B4(n){if(n.startsWith(`${j2}:${R4}:{`))try{let a=JSON.parse(n.slice(28));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.location=="string"&&typeof a.reloadDocument=="boolean"&&typeof a.replace=="boolean")return a}catch{}}function P4(n){if(n.startsWith(`${j2}:${k4}:{`))try{let a=JSON.parse(n.slice(40));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string")return new E4(a.status,a.statusText,a.data)}catch{}}function N4(n,{relative:a}={}){xe(zc(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:c}=z.useContext(ti),{hash:u,pathname:m,search:g}=Oc(n,{relative:a}),x=m;return o!=="/"&&(x=m==="/"?o:ma([o,m])),c.createHref({pathname:x,search:g,hash:u})}function zc(){return z.useContext(Mc)!=null}function Ni(){return xe(zc(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(Mc).location}var E2="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function A2(n){z.useContext(ti).static||z.useLayoutEffect(n)}function Lc(){let{isDataRoute:n}=z.useContext(ya);return n?Q4():V4()}function V4(){xe(zc(),"useNavigate() may be used only in the context of a <Router> component.");let n=z.useContext(Ls),{basename:a,navigator:o}=z.useContext(ti),{matches:c}=z.useContext(ya),{pathname:u}=Ni(),m=JSON.stringify(_2(c)),g=z.useRef(!1);return A2(()=>{g.current=!0}),z.useCallback((y,_={})=>{if(yi(g.current,E2),!g.current)return;if(typeof y=="number"){o.go(y);return}let T=b2(y,JSON.parse(m),u,_.relative==="path");n==null&&a!=="/"&&(T.pathname=T.pathname==="/"?a:ma([a,T.pathname])),(_.replace?o.replace:o.push)(T,_.state,_)},[a,o,m,u,n])}z.createContext(null);function Oc(n,{relative:a}={}){let{matches:o}=z.useContext(ya),{pathname:c}=Ni(),u=JSON.stringify(_2(o));return z.useMemo(()=>b2(n,JSON.parse(u),c,a==="path"),[n,u,c,a])}function H4(n,a){return M2(n,a)}function M2(n,a,o,c,u){xe(zc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=z.useContext(ti),{matches:g}=z.useContext(ya),x=g[g.length-1],y=x?x.params:{},_=x?x.pathname:"/",T=x?x.pathnameBase:"/",C=x&&x.route;{let M=C&&C.path||"";L2(_,!C||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${_}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let A=Ni(),O;if(a){let M=typeof a=="string"?zs(a):a;xe(T==="/"||M.pathname?.startsWith(T),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${T}" but pathname "${M.pathname}" was given in the \`location\` prop.`),O=M}else O=A;let R=O.pathname||"/",P=R;if(T!=="/"){let M=T.replace(/^\//,"").split("/");P="/"+R.replace(/^\//,"").split("/").slice(M.length).join("/")}let I=g2(n,{pathname:P});yi(C||I!=null,`No routes matched location "${O.pathname}${O.search}${O.hash}" `),yi(I==null||I[I.length-1].route.element!==void 0||I[I.length-1].route.Component!==void 0||I[I.length-1].route.lazy!==void 0,`Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let D=q4(I&&I.map(M=>Object.assign({},M,{params:Object.assign({},y,M.params),pathname:ma([T,m.encodeLocation?m.encodeLocation(M.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?T:ma([T,m.encodeLocation?m.encodeLocation(M.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:M.pathnameBase])})),g,o,c,u);return a&&D?z.createElement(Mc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...O},navigationType:"POP"}},D):D}function U4(){let n=K4(),a=A4(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),o=n instanceof Error?n.stack:null,c="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:c},m={padding:"2px 4px",backgroundColor:c},g=null;return console.error("Error handled by React Router default ErrorBoundary:",n),g=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:m},"ErrorBoundary")," or"," ",z.createElement("code",{style:m},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},a),o?z.createElement("pre",{style:u},o):null,g)}var Z4=z.createElement(U4,null),z2=class extends z.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,a){return a.location!==n.location||a.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:a.error,location:a.location,revalidation:n.revalidation||a.revalidation}}componentDidCatch(n,a){this.props.onError?this.props.onError(n,a):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const o=P4(n.digest);o&&(n=o)}let a=n!==void 0?z.createElement(ya.Provider,{value:this.props.routeContext},z.createElement(mg.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?z.createElement(I4,{error:n},a):a}};z2.contextType=L4;var Pm=new WeakMap;function I4({children:n,error:a}){let{basename:o}=z.useContext(ti);if(typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){let c=B4(a.digest);if(c){let u=Pm.get(a);if(u)throw u;let m=S2(c.location,o);if(w2&&!Pm.get(a))if(m.isExternal||c.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:c.replace}));throw Pm.set(a,g),g}return z.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return n}function G4({routeContext:n,match:a,children:o}){let c=z.useContext(Ls);return c&&c.static&&c.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=a.route.id),z.createElement(ya.Provider,{value:n},o)}function q4(n,a=[],o=null,c=null,u=null){if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(a.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let m=n,g=o?.errors;if(g!=null){let T=m.findIndex(C=>C.route.id&&g?.[C.route.id]!==void 0);xe(T>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),m=m.slice(0,Math.min(m.length,T+1))}let x=!1,y=-1;if(o)for(let T=0;T<m.length;T++){let C=m[T];if((C.route.HydrateFallback||C.route.hydrateFallbackElement)&&(y=T),C.route.id){let{loaderData:A,errors:O}=o,R=C.route.loader&&!A.hasOwnProperty(C.route.id)&&(!O||O[C.route.id]===void 0);if(C.route.lazy||R){x=!0,y>=0?m=m.slice(0,y+1):m=[m[0]];break}}}let _=o&&c?(T,C)=>{c(T,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:M4(o.matches),errorInfo:C})}:void 0;return m.reduceRight((T,C,A)=>{let O,R=!1,P=null,I=null;o&&(O=g&&C.route.id?g[C.route.id]:void 0,P=C.route.errorElement||Z4,x&&(y<0&&A===0?(L2("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,I=null):y===A&&(R=!0,I=C.route.hydrateFallbackElement||null)));let D=a.concat(m.slice(0,A+1)),M=()=>{let B;return O?B=P:R?B=I:C.route.Component?B=z.createElement(C.route.Component,null):C.route.element?B=C.route.element:B=T,z.createElement(G4,{match:C,routeContext:{outlet:T,matches:D,isDataRoute:o!=null},children:B})};return o&&(C.route.ErrorBoundary||C.route.errorElement||A===0)?z.createElement(z2,{location:o.location,revalidation:o.revalidation,component:P,error:O,children:M(),routeContext:{outlet:null,matches:D,isDataRoute:!0},onError:_}):M()},null)}function pg(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Y4(n){let a=z.useContext(Ls);return xe(a,pg(n)),a}function F4(n){let a=z.useContext(hf);return xe(a,pg(n)),a}function $4(n){let a=z.useContext(ya);return xe(a,pg(n)),a}function gg(n){let a=$4(n),o=a.matches[a.matches.length-1];return xe(o.route.id,`${n} can only be used on routes that contain a unique "id"`),o.route.id}function X4(){return gg("useRouteId")}function K4(){let n=z.useContext(mg),a=F4("useRouteError"),o=gg("useRouteError");return n!==void 0?n:a.errors?.[o]}function Q4(){let{router:n}=Y4("useNavigate"),a=gg("useNavigate"),o=z.useRef(!1);return A2(()=>{o.current=!0}),z.useCallback(async(u,m={})=>{yi(o.current,E2),o.current&&(typeof u=="number"?await n.navigate(u):await n.navigate(u,{fromRouteId:a,...m}))},[n,a])}var U1={};function L2(n,a,o){!a&&!U1[n]&&(U1[n]=!0,yi(!1,o))}z.memo(W4);function W4({routes:n,future:a,state:o,onError:c}){return M2(n,void 0,o,c,a)}function Bn(n){xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function J4({basename:n="/",children:a=null,location:o,navigationType:c="POP",navigator:u,static:m=!1,unstable_useTransitions:g}){xe(!zc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=n.replace(/^\/*/,"/"),y=z.useMemo(()=>({basename:x,navigator:u,static:m,unstable_useTransitions:g,future:{}}),[x,u,m,g]);typeof o=="string"&&(o=zs(o));let{pathname:_="/",search:T="",hash:C="",state:A=null,key:O="default"}=o,R=z.useMemo(()=>{let P=ga(_,x);return P==null?null:{location:{pathname:P,search:T,hash:C,state:A,key:O},navigationType:c}},[x,_,T,C,A,O,c]);return yi(R!=null,`<Router basename="${x}"> is not able to match the URL "${_}${T}${C}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:z.createElement(ti.Provider,{value:y},z.createElement(Mc.Provider,{children:a,value:R}))}function tS({children:n,location:a}){return H4(kp(n),a)}function kp(n,a=[]){let o=[];return z.Children.forEach(n,(c,u)=>{if(!z.isValidElement(c))return;let m=[...a,u];if(c.type===z.Fragment){o.push.apply(o,kp(c.props.children,m));return}xe(c.type===Bn,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),xe(!c.props.index||!c.props.children,"An index route cannot have child routes.");let g={id:c.props.id||m.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(g.children=kp(c.props.children,m)),o.push(g)}),o}var Ld="get",Od="application/x-www-form-urlencoded";function mf(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function eS(n){return mf(n)&&n.tagName.toLowerCase()==="button"}function nS(n){return mf(n)&&n.tagName.toLowerCase()==="form"}function iS(n){return mf(n)&&n.tagName.toLowerCase()==="input"}function aS(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function rS(n,a){return n.button===0&&(!a||a==="_self")&&!aS(n)}var vd=null;function oS(){if(vd===null)try{new FormData(document.createElement("form"),0),vd=!1}catch{vd=!0}return vd}var sS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Nm(n){return n!=null&&!sS.has(n)?(yi(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Od}"`),null):n}function lS(n,a){let o,c,u,m,g;if(nS(n)){let x=n.getAttribute("action");c=x?ga(x,a):null,o=n.getAttribute("method")||Ld,u=Nm(n.getAttribute("enctype"))||Od,m=new FormData(n)}else if(eS(n)||iS(n)&&(n.type==="submit"||n.type==="image")){let x=n.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=n.getAttribute("formaction")||x.getAttribute("action");if(c=y?ga(y,a):null,o=n.getAttribute("formmethod")||x.getAttribute("method")||Ld,u=Nm(n.getAttribute("formenctype"))||Nm(x.getAttribute("enctype"))||Od,m=new FormData(x,n),!oS()){let{name:_,type:T,value:C}=n;if(T==="image"){let A=_?`${_}.`:"";m.append(`${A}x`,"0"),m.append(`${A}y`,"0")}else _&&m.append(_,C)}}else{if(mf(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Ld,c=null,u=Od,g=n}return m&&u==="text/plain"&&(g=m,m=void 0),{action:c,method:o.toLowerCase(),encType:u,formData:m,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vg(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function cS(n,a,o,c){let u=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return o?u.pathname.endsWith("/")?u.pathname=`${u.pathname}_.${c}`:u.pathname=`${u.pathname}.${c}`:u.pathname==="/"?u.pathname=`_root.${c}`:a&&ga(u.pathname,a)==="/"?u.pathname=`${a.replace(/\/$/,"")}/_root.${c}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${c}`,u}async function uS(n,a){if(n.id in a)return a[n.id];try{let o=await import(n.module);return a[n.id]=o,o}catch(o){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function dS(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function fS(n,a,o){let c=await Promise.all(n.map(async u=>{let m=a.routes[u.route.id];if(m){let g=await uS(m,o);return g.links?g.links():[]}return[]}));return gS(c.flat(1).filter(dS).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function Z1(n,a,o,c,u,m){let g=(y,_)=>o[_]?y.route.id!==o[_].route.id:!0,x=(y,_)=>o[_].pathname!==y.pathname||o[_].route.path?.endsWith("*")&&o[_].params["*"]!==y.params["*"];return m==="assets"?a.filter((y,_)=>g(y,_)||x(y,_)):m==="data"?a.filter((y,_)=>{let T=c.routes[y.route.id];if(!T||!T.hasLoader)return!1;if(g(y,_)||x(y,_))return!0;if(y.route.shouldRevalidate){let C=y.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function hS(n,a,{includeHydrateFallback:o}={}){return mS(n.map(c=>{let u=a.routes[c.route.id];if(!u)return[];let m=[u.module];return u.clientActionModule&&(m=m.concat(u.clientActionModule)),u.clientLoaderModule&&(m=m.concat(u.clientLoaderModule)),o&&u.hydrateFallbackModule&&(m=m.concat(u.hydrateFallbackModule)),u.imports&&(m=m.concat(u.imports)),m}).flat(1))}function mS(n){return[...new Set(n)]}function pS(n){let a={},o=Object.keys(n).sort();for(let c of o)a[c]=n[c];return a}function gS(n,a){let o=new Set;return new Set(a),n.reduce((c,u)=>{let m=JSON.stringify(pS(u));return o.has(m)||(o.add(m),c.push({key:m,link:u})),c},[])}function O2(){let n=z.useContext(Ls);return vg(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function vS(){let n=z.useContext(hf);return vg(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var yg=z.createContext(void 0);yg.displayName="FrameworkContext";function D2(){let n=z.useContext(yg);return vg(n,"You must render this element inside a <HydratedRouter> element"),n}function yS(n,a){let o=z.useContext(yg),[c,u]=z.useState(!1),[m,g]=z.useState(!1),{onFocus:x,onBlur:y,onMouseEnter:_,onMouseLeave:T,onTouchStart:C}=a,A=z.useRef(null);z.useEffect(()=>{if(n==="render"&&g(!0),n==="viewport"){let P=D=>{D.forEach(M=>{g(M.isIntersecting)})},I=new IntersectionObserver(P,{threshold:.5});return A.current&&I.observe(A.current),()=>{I.disconnect()}}},[n]),z.useEffect(()=>{if(c){let P=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(P)}}},[c]);let O=()=>{u(!0)},R=()=>{u(!1),g(!1)};return o?n!=="intent"?[m,A,{}]:[m,A,{onFocus:$l(x,O),onBlur:$l(y,R),onMouseEnter:$l(_,O),onMouseLeave:$l(T,R),onTouchStart:$l(C,O)}]:[!1,A,{}]}function $l(n,a){return o=>{n&&n(o),o.defaultPrevented||a(o)}}function xS({page:n,...a}){let{router:o}=O2(),c=z.useMemo(()=>g2(o.routes,n,o.basename),[o.routes,n,o.basename]);return c?z.createElement(bS,{page:n,matches:c,...a}):null}function _S(n){let{manifest:a,routeModules:o}=D2(),[c,u]=z.useState([]);return z.useEffect(()=>{let m=!1;return fS(n,a,o).then(g=>{m||u(g)}),()=>{m=!0}},[n,a,o]),c}function bS({page:n,matches:a,...o}){let c=Ni(),{future:u,manifest:m,routeModules:g}=D2(),{basename:x}=O2(),{loaderData:y,matches:_}=vS(),T=z.useMemo(()=>Z1(n,a,_,m,c,"data"),[n,a,_,m,c]),C=z.useMemo(()=>Z1(n,a,_,m,c,"assets"),[n,a,_,m,c]),A=z.useMemo(()=>{if(n===c.pathname+c.search+c.hash)return[];let P=new Set,I=!1;if(a.forEach(M=>{let B=m.routes[M.route.id];!B||!B.hasLoader||(!T.some(Q=>Q.route.id===M.route.id)&&M.route.id in y&&g[M.route.id]?.shouldRevalidate||B.hasClientLoader?I=!0:P.add(M.route.id))}),P.size===0)return[];let D=cS(n,x,u.unstable_trailingSlashAwareDataRequests,"data");return I&&P.size>0&&D.searchParams.set("_routes",a.filter(M=>P.has(M.route.id)).map(M=>M.route.id).join(",")),[D.pathname+D.search]},[x,u.unstable_trailingSlashAwareDataRequests,y,c,m,T,a,n,g]),O=z.useMemo(()=>hS(C,m),[C,m]),R=_S(C);return z.createElement(z.Fragment,null,A.map(P=>z.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...o})),O.map(P=>z.createElement("link",{key:P,rel:"modulepreload",href:P,...o})),R.map(({key:P,link:I})=>z.createElement("link",{key:P,nonce:o.nonce,...I})))}function wS(...n){return a=>{n.forEach(o=>{typeof o=="function"?o(a):o!=null&&(o.current=a)})}}var SS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{SS&&(window.__reactRouterVersion="7.12.0")}catch{}function TS({basename:n,children:a,unstable_useTransitions:o,window:c}){let u=z.useRef();u.current==null&&(u.current=a4({window:c,v5Compat:!0}));let m=u.current,[g,x]=z.useState({action:m.action,location:m.location}),y=z.useCallback(_=>{o===!1?x(_):z.startTransition(()=>x(_))},[o]);return z.useLayoutEffect(()=>m.listen(y),[m,y]),z.createElement(J4,{basename:n,children:a,location:g.location,navigationType:g.action,navigator:m,unstable_useTransitions:o})}var R2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gi=z.forwardRef(function({onClick:a,discover:o="render",prefetch:c="none",relative:u,reloadDocument:m,replace:g,state:x,target:y,to:_,preventScrollReset:T,viewTransition:C,unstable_defaultShouldRevalidate:A,...O},R){let{basename:P,unstable_useTransitions:I}=z.useContext(ti),D=typeof _=="string"&&R2.test(_),M=S2(_,P);_=M.to;let B=N4(_,{relative:u}),[Q,tt,ot]=yS(c,O),$=AS(_,{replace:g,state:x,target:y,preventScrollReset:T,relative:u,viewTransition:C,unstable_defaultShouldRevalidate:A,unstable_useTransitions:I});function lt(gt){a&&a(gt),gt.defaultPrevented||$(gt)}let pt=z.createElement("a",{...O,...ot,href:M.absoluteURL||B,onClick:M.isExternal||m?a:lt,ref:wS(R,tt),target:y,"data-discover":!D&&o==="render"?"true":void 0});return Q&&!D?z.createElement(z.Fragment,null,pt,z.createElement(xS,{page:B})):pt});gi.displayName="Link";var CS=z.forwardRef(function({"aria-current":a="page",caseSensitive:o=!1,className:c="",end:u=!1,style:m,to:g,viewTransition:x,children:y,..._},T){let C=Oc(g,{relative:_.relative}),A=Ni(),O=z.useContext(hf),{navigator:R,basename:P}=z.useContext(ti),I=O!=null&&DS(C)&&x===!0,D=R.encodeLocation?R.encodeLocation(C).pathname:C.pathname,M=A.pathname,B=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;o||(M=M.toLowerCase(),B=B?B.toLowerCase():null,D=D.toLowerCase()),B&&P&&(B=ga(B,P)||B);const Q=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let tt=M===D||!u&&M.startsWith(D)&&M.charAt(Q)==="/",ot=B!=null&&(B===D||!u&&B.startsWith(D)&&B.charAt(D.length)==="/"),$={isActive:tt,isPending:ot,isTransitioning:I},lt=tt?a:void 0,pt;typeof c=="function"?pt=c($):pt=[c,tt?"active":null,ot?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let gt=typeof m=="function"?m($):m;return z.createElement(gi,{..._,"aria-current":lt,className:pt,ref:T,style:gt,to:g,viewTransition:x},typeof y=="function"?y($):y)});CS.displayName="NavLink";var jS=z.forwardRef(({discover:n="render",fetcherKey:a,navigate:o,reloadDocument:c,replace:u,state:m,method:g=Ld,action:x,onSubmit:y,relative:_,preventScrollReset:T,viewTransition:C,unstable_defaultShouldRevalidate:A,...O},R)=>{let{unstable_useTransitions:P}=z.useContext(ti),I=LS(),D=OS(x,{relative:_}),M=g.toLowerCase()==="get"?"get":"post",B=typeof x=="string"&&R2.test(x),Q=tt=>{if(y&&y(tt),tt.defaultPrevented)return;tt.preventDefault();let ot=tt.nativeEvent.submitter,$=ot?.getAttribute("formmethod")||g,lt=()=>I(ot||tt.currentTarget,{fetcherKey:a,method:$,navigate:o,replace:u,state:m,relative:_,preventScrollReset:T,viewTransition:C,unstable_defaultShouldRevalidate:A});P&&o!==!1?z.startTransition(()=>lt()):lt()};return z.createElement("form",{ref:R,method:M,action:D,onSubmit:c?y:Q,...O,"data-discover":!B&&n==="render"?"true":void 0})});jS.displayName="Form";function ES(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function k2(n){let a=z.useContext(Ls);return xe(a,ES(n)),a}function AS(n,{target:a,replace:o,state:c,preventScrollReset:u,relative:m,viewTransition:g,unstable_defaultShouldRevalidate:x,unstable_useTransitions:y}={}){let _=Lc(),T=Ni(),C=Oc(n,{relative:m});return z.useCallback(A=>{if(rS(A,a)){A.preventDefault();let O=o!==void 0?o:_c(T)===_c(C),R=()=>_(n,{replace:O,state:c,preventScrollReset:u,relative:m,viewTransition:g,unstable_defaultShouldRevalidate:x});y?z.startTransition(()=>R()):R()}},[T,_,C,o,c,a,n,u,m,g,x,y])}var MS=0,zS=()=>`__${String(++MS)}__`;function LS(){let{router:n}=k2("useSubmit"),{basename:a}=z.useContext(ti),o=X4(),c=n.fetch,u=n.navigate;return z.useCallback(async(m,g={})=>{let{action:x,method:y,encType:_,formData:T,body:C}=lS(m,a);if(g.navigate===!1){let A=g.fetcherKey||zS();await c(A,o,g.action||x,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:T,body:C,formMethod:g.method||y,formEncType:g.encType||_,flushSync:g.flushSync})}else await u(g.action||x,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:T,body:C,formMethod:g.method||y,formEncType:g.encType||_,replace:g.replace,state:g.state,fromRouteId:o,flushSync:g.flushSync,viewTransition:g.viewTransition})},[c,u,a,o])}function OS(n,{relative:a}={}){let{basename:o}=z.useContext(ti),c=z.useContext(ya);xe(c,"useFormAction must be used inside a RouteContext");let[u]=c.matches.slice(-1),m={...Oc(n||".",{relative:a})},g=Ni();if(n==null){m.search=g.search;let x=new URLSearchParams(m.search),y=x.getAll("index");if(y.some(T=>T==="")){x.delete("index"),y.filter(C=>C).forEach(C=>x.append("index",C));let T=x.toString();m.search=T?`?${T}`:""}}return(!n||n===".")&&u.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(m.pathname=m.pathname==="/"?o:ma([o,m.pathname])),_c(m)}function DS(n,{relative:a}={}){let o=z.useContext(C2);xe(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=k2("useViewTransitionState"),u=Oc(n,{relative:a});if(!o.isTransitioning)return!1;let m=ga(o.currentLocation.pathname,c)||o.currentLocation.pathname,g=ga(o.nextLocation.pathname,c)||o.nextLocation.pathname;return $d(u.pathname,g)!=null||$d(u.pathname,m)!=null}var RS=s2(),Cn=function(){return Cn=Object.assign||function(a){for(var o,c=1,u=arguments.length;c<u;c++){o=arguments[c];for(var m in o)Object.prototype.hasOwnProperty.call(o,m)&&(a[m]=o[m])}return a},Cn.apply(this,arguments)};function Xd(n,a,o){if(o||arguments.length===2)for(var c=0,u=a.length,m;c<u;c++)(m||!(c in a))&&(m||(m=Array.prototype.slice.call(a,0,c)),m[c]=a[c]);return n.concat(m||Array.prototype.slice.call(a))}var de="-ms-",pc="-moz-",Qt="-webkit-",B2="comm",pf="rule",xg="decl",kS="@import",BS="@namespace",P2="@keyframes",PS="@layer",N2=Math.abs,_g=String.fromCharCode,Bp=Object.assign;function NS(n,a){return He(n,0)^45?(((a<<2^He(n,0))<<2^He(n,1))<<2^He(n,2))<<2^He(n,3):0}function V2(n){return n.trim()}function ha(n,a){return(n=a.exec(n))?n[0]:n}function Rt(n,a,o){return n.replace(a,o)}function Dd(n,a,o){return n.indexOf(a,o)}function He(n,a){return n.charCodeAt(a)|0}function uo(n,a,o){return n.slice(a,o)}function mi(n){return n.length}function H2(n){return n.length}function ac(n,a){return a.push(n),n}function VS(n,a){return n.map(a).join("")}function I1(n,a){return n.filter(function(o){return!ha(o,a)})}var gf=1,xs=1,U2=0,Jn=0,Re=0,Os="";function vf(n,a,o,c,u,m,g,x){return{value:n,root:a,parent:o,type:c,props:u,children:m,line:gf,column:xs,length:g,return:"",siblings:x}}function ar(n,a){return Bp(vf("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},a)}function as(n){for(;n.root;)n=ar(n.root,{children:[n]});ac(n,n.siblings)}function HS(){return Re}function US(){return Re=Jn>0?He(Os,--Jn):0,xs--,Re===10&&(xs=1,gf--),Re}function vi(){return Re=Jn<U2?He(Os,Jn++):0,xs++,Re===10&&(xs=1,gf++),Re}function or(){return He(Os,Jn)}function Rd(){return Jn}function yf(n,a){return uo(Os,n,a)}function bc(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ZS(n){return gf=xs=1,U2=mi(Os=n),Jn=0,[]}function IS(n){return Os="",n}function Vm(n){return V2(yf(Jn-1,Pp(n===91?n+2:n===40?n+1:n)))}function GS(n){for(;(Re=or())&&Re<33;)vi();return bc(n)>2||bc(Re)>3?"":" "}function qS(n,a){for(;--a&&vi()&&!(Re<48||Re>102||Re>57&&Re<65||Re>70&&Re<97););return yf(n,Rd()+(a<6&&or()==32&&vi()==32))}function Pp(n){for(;vi();)switch(Re){case n:return Jn;case 34:case 39:n!==34&&n!==39&&Pp(Re);break;case 40:n===41&&Pp(n);break;case 92:vi();break}return Jn}function YS(n,a){for(;vi()&&n+Re!==57;)if(n+Re===84&&or()===47)break;return"/*"+yf(a,Jn-1)+"*"+_g(n===47?n:vi())}function FS(n){for(;!bc(or());)vi();return yf(n,Jn)}function $S(n){return IS(kd("",null,null,null,[""],n=ZS(n),0,[0],n))}function kd(n,a,o,c,u,m,g,x,y){for(var _=0,T=0,C=g,A=0,O=0,R=0,P=1,I=1,D=1,M=0,B="",Q=u,tt=m,ot=c,$=B;I;)switch(R=M,M=vi()){case 40:if(R!=108&&He($,C-1)==58){Dd($+=Rt(Vm(M),"&","&\f"),"&\f",N2(_?x[_-1]:0))!=-1&&(D=-1);break}case 34:case 39:case 91:$+=Vm(M);break;case 9:case 10:case 13:case 32:$+=GS(R);break;case 92:$+=qS(Rd()-1,7);continue;case 47:switch(or()){case 42:case 47:ac(XS(YS(vi(),Rd()),a,o,y),y),(bc(R||1)==5||bc(or()||1)==5)&&mi($)&&uo($,-1,void 0)!==" "&&($+=" ");break;default:$+="/"}break;case 123*P:x[_++]=mi($)*D;case 125*P:case 59:case 0:switch(M){case 0:case 125:I=0;case 59+T:D==-1&&($=Rt($,/\f/g,"")),O>0&&(mi($)-C||P===0&&R===47)&&ac(O>32?q1($+";",c,o,C-1,y):q1(Rt($," ","")+";",c,o,C-2,y),y);break;case 59:$+=";";default:if(ac(ot=G1($,a,o,_,T,u,x,B,Q=[],tt=[],C,m),m),M===123)if(T===0)kd($,a,ot,ot,Q,m,C,x,tt);else{switch(A){case 99:if(He($,3)===110)break;case 108:if(He($,2)===97)break;default:T=0;case 100:case 109:case 115:}T?kd(n,ot,ot,c&&ac(G1(n,ot,ot,0,0,u,x,B,u,Q=[],C,tt),tt),u,tt,C,x,c?Q:tt):kd($,ot,ot,ot,[""],tt,0,x,tt)}}_=T=O=0,P=D=1,B=$="",C=g;break;case 58:C=1+mi($),O=R;default:if(P<1){if(M==123)--P;else if(M==125&&P++==0&&US()==125)continue}switch($+=_g(M),M*P){case 38:D=T>0?1:($+="\f",-1);break;case 44:x[_++]=(mi($)-1)*D,D=1;break;case 64:or()===45&&($+=Vm(vi())),A=or(),T=C=mi(B=$+=FS(Rd())),M++;break;case 45:R===45&&mi($)==2&&(P=0)}}return m}function G1(n,a,o,c,u,m,g,x,y,_,T,C){for(var A=u-1,O=u===0?m:[""],R=H2(O),P=0,I=0,D=0;P<c;++P)for(var M=0,B=uo(n,A+1,A=N2(I=g[P])),Q=n;M<R;++M)(Q=V2(I>0?O[M]+" "+B:Rt(B,/&\f/g,O[M])))&&(y[D++]=Q);return vf(n,a,o,u===0?pf:x,y,_,T,C)}function XS(n,a,o,c){return vf(n,a,o,B2,_g(HS()),uo(n,2,-2),0,c)}function q1(n,a,o,c,u){return vf(n,a,o,xg,uo(n,0,c),uo(n,c+1,-1),c,u)}function Z2(n,a,o){switch(NS(n,a)){case 5103:return Qt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Qt+n+n;case 4855:return Qt+n.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+n;case 4789:return pc+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Qt+n+pc+n+de+n+n;case 5936:switch(He(n,a+11)){case 114:return Qt+n+de+Rt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Qt+n+de+Rt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Qt+n+de+Rt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Qt+n+de+n+n;case 6165:return Qt+n+de+"flex-"+n+n;case 5187:return Qt+n+Rt(n,/(\w+).+(:[^]+)/,Qt+"box-$1$2"+de+"flex-$1$2")+n;case 5443:return Qt+n+de+"flex-item-"+Rt(n,/flex-|-self/g,"")+(ha(n,/flex-|baseline/)?"":de+"grid-row-"+Rt(n,/flex-|-self/g,""))+n;case 4675:return Qt+n+de+"flex-line-pack"+Rt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Qt+n+de+Rt(n,"shrink","negative")+n;case 5292:return Qt+n+de+Rt(n,"basis","preferred-size")+n;case 6060:return Qt+"box-"+Rt(n,"-grow","")+Qt+n+de+Rt(n,"grow","positive")+n;case 4554:return Qt+Rt(n,/([^-])(transform)/g,"$1"+Qt+"$2")+n;case 6187:return Rt(Rt(Rt(n,/(zoom-|grab)/,Qt+"$1"),/(image-set)/,Qt+"$1"),n,"")+n;case 5495:case 3959:return Rt(n,/(image-set\([^]*)/,Qt+"$1$`$1");case 4968:return Rt(Rt(n,/(.+:)(flex-)?(.*)/,Qt+"box-pack:$3"+de+"flex-pack:$3"),/space-between/,"justify")+Qt+n+n;case 4200:if(!ha(n,/flex-|baseline/))return de+"grid-column-align"+uo(n,a)+n;break;case 2592:case 3360:return de+Rt(n,"template-","")+n;case 4384:case 3616:return o&&o.some(function(c,u){return a=u,ha(c.props,/grid-\w+-end/)})?~Dd(n+(o=o[a].value),"span",0)?n:de+Rt(n,"-start","")+n+de+"grid-row-span:"+(~Dd(o,"span",0)?ha(o,/\d+/):+ha(o,/\d+/)-+ha(n,/\d+/))+";":de+Rt(n,"-start","")+n;case 4896:case 4128:return o&&o.some(function(c){return ha(c.props,/grid-\w+-start/)})?n:de+Rt(Rt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Rt(n,/(.+)-inline(.+)/,Qt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mi(n)-1-a>6)switch(He(n,a+1)){case 109:if(He(n,a+4)!==45)break;case 102:return Rt(n,/(.+:)(.+)-([^]+)/,"$1"+Qt+"$2-$3$1"+pc+(He(n,a+3)==108?"$3":"$2-$3"))+n;case 115:return~Dd(n,"stretch",0)?Z2(Rt(n,"stretch","fill-available"),a,o)+n:n}break;case 5152:case 5920:return Rt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(c,u,m,g,x,y,_){return de+u+":"+m+_+(g?de+u+"-span:"+(x?y:+y-+m)+_:"")+n});case 4949:if(He(n,a+6)===121)return Rt(n,":",":"+Qt)+n;break;case 6444:switch(He(n,He(n,14)===45?18:11)){case 120:return Rt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Qt+(He(n,14)===45?"inline-":"")+"box$3$1"+Qt+"$2$3$1"+de+"$2box$3")+n;case 100:return Rt(n,":",":"+de)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Rt(n,"scroll-","scroll-snap-")+n}return n}function Kd(n,a){for(var o="",c=0;c<n.length;c++)o+=a(n[c],c,n,a)||"";return o}function KS(n,a,o,c){switch(n.type){case PS:if(n.children.length)break;case kS:case BS:case xg:return n.return=n.return||n.value;case B2:return"";case P2:return n.return=n.value+"{"+Kd(n.children,c)+"}";case pf:if(!mi(n.value=n.props.join(",")))return""}return mi(o=Kd(n.children,c))?n.return=n.value+"{"+o+"}":""}function QS(n){var a=H2(n);return function(o,c,u,m){for(var g="",x=0;x<a;x++)g+=n[x](o,c,u,m)||"";return g}}function WS(n){return function(a){a.root||(a=a.return)&&n(a)}}function JS(n,a,o,c){if(n.length>-1&&!n.return)switch(n.type){case xg:n.return=Z2(n.value,n.length,o);return;case P2:return Kd([ar(n,{value:Rt(n.value,"@","@"+Qt)})],c);case pf:if(n.length)return VS(o=n.props,function(u){switch(ha(u,c=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":as(ar(n,{props:[Rt(u,/:(read-\w+)/,":"+pc+"$1")]})),as(ar(n,{props:[u]})),Bp(n,{props:I1(o,c)});break;case"::placeholder":as(ar(n,{props:[Rt(u,/:(plac\w+)/,":"+Qt+"input-$1")]})),as(ar(n,{props:[Rt(u,/:(plac\w+)/,":"+pc+"$1")]})),as(ar(n,{props:[Rt(u,/:(plac\w+)/,de+"input-$1")]})),as(ar(n,{props:[u]})),Bp(n,{props:I1(o,c)});break}return""})}}var t6={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pn={},_s=typeof process<"u"&&Pn!==void 0&&(Pn.REACT_APP_SC_ATTR||Pn.SC_ATTR)||"data-styled",I2="active",G2="data-styled-version",xf="6.3.8",bg=`/*!sc*/
`,Qd=typeof window<"u"&&typeof document<"u",bs=oe.createContext===void 0,e6=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Pn!==void 0&&Pn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Pn.REACT_APP_SC_DISABLE_SPEEDY!==""?Pn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Pn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Pn!==void 0&&Pn.SC_DISABLE_SPEEDY!==void 0&&Pn.SC_DISABLE_SPEEDY!==""&&Pn.SC_DISABLE_SPEEDY!=="false"&&Pn.SC_DISABLE_SPEEDY),_f=Object.freeze([]),ws=Object.freeze({});function n6(n,a,o){return o===void 0&&(o=ws),n.theme!==o.theme&&n.theme||a||o.theme}var q2=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),i6=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,a6=/(^-|-$)/g;function Y1(n){return n.replace(i6,"-").replace(a6,"")}var r6=/(a)(d)/gi,F1=function(n){return String.fromCharCode(n+(n>25?39:97))};function Np(n){var a,o="";for(a=Math.abs(n);a>52;a=a/52|0)o=F1(a%52)+o;return(F1(a%52)+o).replace(r6,"$1-$2")}var Hm,os=function(n,a){for(var o=a.length;o;)n=33*n^a.charCodeAt(--o);return n},Y2=function(n){return os(5381,n)};function o6(n){return Np(Y2(n)>>>0)}function s6(n){return n.displayName||n.name||"Component"}function Um(n){return typeof n=="string"&&!0}var F2=typeof Symbol=="function"&&Symbol.for,$2=F2?Symbol.for("react.memo"):60115,l6=F2?Symbol.for("react.forward_ref"):60112,c6={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u6={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},X2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},d6=((Hm={})[l6]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hm[$2]=X2,Hm);function $1(n){return("type"in(a=n)&&a.type.$$typeof)===$2?X2:"$$typeof"in n?d6[n.$$typeof]:c6;var a}var f6=Object.defineProperty,h6=Object.getOwnPropertyNames,X1=Object.getOwnPropertySymbols,m6=Object.getOwnPropertyDescriptor,p6=Object.getPrototypeOf,K1=Object.prototype;function K2(n,a,o){if(typeof a!="string"){if(K1){var c=p6(a);c&&c!==K1&&K2(n,c,o)}var u=h6(a);X1&&(u=u.concat(X1(a)));for(var m=$1(n),g=$1(a),x=0;x<u.length;++x){var y=u[x];if(!(y in u6||o&&o[y]||g&&y in g||m&&y in m)){var _=m6(a,y);try{f6(n,y,_)}catch{}}}}return n}function Ss(n){return typeof n=="function"}function wg(n){return typeof n=="object"&&"styledComponentId"in n}function ro(n,a){return n&&a?"".concat(n," ").concat(a):n||a||""}function Q1(n,a){if(n.length===0)return"";for(var o=n[0],c=1;c<n.length;c++)o+=n[c];return o}function wc(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Vp(n,a,o){if(o===void 0&&(o=!1),!o&&!wc(n)&&!Array.isArray(n))return a;if(Array.isArray(a))for(var c=0;c<a.length;c++)n[c]=Vp(n[c],a[c]);else if(wc(a))for(var c in a)n[c]=Vp(n[c],a[c]);return n}function Sg(n,a){Object.defineProperty(n,"toString",{value:a})}function Dc(n){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var g6=(function(){function n(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return n.prototype.indexOfGroup=function(a){for(var o=0,c=0;c<a;c++)o+=this.groupSizes[c];return o},n.prototype.insertRules=function(a,o){if(a>=this.groupSizes.length){for(var c=this.groupSizes,u=c.length,m=u;a>=m;)if((m<<=1)<0)throw Dc(16,"".concat(a));this.groupSizes=new Uint32Array(m),this.groupSizes.set(c),this.length=m;for(var g=u;g<m;g++)this.groupSizes[g]=0}for(var x=this.indexOfGroup(a+1),y=(g=0,o.length);g<y;g++)this.tag.insertRule(x,o[g])&&(this.groupSizes[a]++,x++)},n.prototype.clearGroup=function(a){if(a<this.length){var o=this.groupSizes[a],c=this.indexOfGroup(a),u=c+o;this.groupSizes[a]=0;for(var m=c;m<u;m++)this.tag.deleteRule(c)}},n.prototype.getGroup=function(a){var o="";if(a>=this.length||this.groupSizes[a]===0)return o;for(var c=this.groupSizes[a],u=this.indexOfGroup(a),m=u+c,g=u;g<m;g++)o+="".concat(this.tag.getRule(g)).concat(bg);return o},n})(),Bd=new Map,Wd=new Map,Pd=1,rc=function(n){if(Bd.has(n))return Bd.get(n);for(;Wd.has(Pd);)Pd++;var a=Pd++;return Bd.set(n,a),Wd.set(a,n),a},v6=function(n,a){Pd=a+1,Bd.set(n,a),Wd.set(a,n)},y6="style[".concat(_s,"][").concat(G2,'="').concat(xf,'"]'),x6=new RegExp("^".concat(_s,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),_6=function(n,a,o){for(var c,u=o.split(","),m=0,g=u.length;m<g;m++)(c=u[m])&&n.registerName(a,c)},b6=function(n,a){for(var o,c=((o=a.textContent)!==null&&o!==void 0?o:"").split(bg),u=[],m=0,g=c.length;m<g;m++){var x=c[m].trim();if(x){var y=x.match(x6);if(y){var _=0|parseInt(y[1],10),T=y[2];_!==0&&(v6(T,_),_6(n,T,y[3]),n.getTag().insertRules(_,u)),u.length=0}else u.push(x)}}},W1=function(n){for(var a=document.querySelectorAll(y6),o=0,c=a.length;o<c;o++){var u=a[o];u&&u.getAttribute(_s)!==I2&&(b6(n,u),u.parentNode&&u.parentNode.removeChild(u))}};function w6(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Q2=function(n){var a=document.head,o=n||a,c=document.createElement("style"),u=(function(x){var y=Array.from(x.querySelectorAll("style[".concat(_s,"]")));return y[y.length-1]})(o),m=u!==void 0?u.nextSibling:null;c.setAttribute(_s,I2),c.setAttribute(G2,xf);var g=w6();return g&&c.setAttribute("nonce",g),o.insertBefore(c,m),c},S6=(function(){function n(a){this.element=Q2(a),this.element.appendChild(document.createTextNode("")),this.sheet=(function(o){if(o.sheet)return o.sheet;for(var c=document.styleSheets,u=0,m=c.length;u<m;u++){var g=c[u];if(g.ownerNode===o)return g}throw Dc(17)})(this.element),this.length=0}return n.prototype.insertRule=function(a,o){try{return this.sheet.insertRule(o,a),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},n.prototype.getRule=function(a){var o=this.sheet.cssRules[a];return o&&o.cssText?o.cssText:""},n})(),T6=(function(){function n(a){this.element=Q2(a),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(a,o){if(a<=this.length&&a>=0){var c=document.createTextNode(o);return this.element.insertBefore(c,this.nodes[a]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},n.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},n})(),C6=(function(){function n(a){this.rules=[],this.length=0}return n.prototype.insertRule=function(a,o){return a<=this.length&&(this.rules.splice(a,0,o),this.length++,!0)},n.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},n.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},n})(),J1=Qd,j6={isServer:!Qd,useCSSOMInjection:!e6},W2=(function(){function n(a,o,c){a===void 0&&(a=ws),o===void 0&&(o={});var u=this;this.options=Cn(Cn({},j6),a),this.gs=o,this.names=new Map(c),this.server=!!a.isServer,!this.server&&Qd&&J1&&(J1=!1,W1(this)),Sg(this,function(){return(function(m){for(var g=m.getTag(),x=g.length,y="",_=function(C){var A=(function(D){return Wd.get(D)})(C);if(A===void 0)return"continue";var O=m.names.get(A),R=g.getGroup(C);if(O===void 0||!O.size||R.length===0)return"continue";var P="".concat(_s,".g").concat(C,'[id="').concat(A,'"]'),I="";O!==void 0&&O.forEach(function(D){D.length>0&&(I+="".concat(D,","))}),y+="".concat(R).concat(P,'{content:"').concat(I,'"}').concat(bg)},T=0;T<x;T++)_(T);return y})(u)})}return n.registerId=function(a){return rc(a)},n.prototype.rehydrate=function(){!this.server&&Qd&&W1(this)},n.prototype.reconstructWithOptions=function(a,o){return o===void 0&&(o=!0),new n(Cn(Cn({},this.options),a),this.gs,o&&this.names||void 0)},n.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(a=(function(o){var c=o.useCSSOMInjection,u=o.target;return o.isServer?new C6(u):c?new S6(u):new T6(u)})(this.options),new g6(a)));var a},n.prototype.hasNameForId=function(a,o){return this.names.has(a)&&this.names.get(a).has(o)},n.prototype.registerName=function(a,o){if(rc(a),this.names.has(a))this.names.get(a).add(o);else{var c=new Set;c.add(o),this.names.set(a,c)}},n.prototype.insertRules=function(a,o,c){this.registerName(a,o),this.getTag().insertRules(rc(a),c)},n.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},n.prototype.clearRules=function(a){this.getTag().clearGroup(rc(a)),this.clearNames(a)},n.prototype.clearTag=function(){this.tag=void 0},n})(),E6=/&/g,ss=47;function tx(n){if(n.indexOf("}")===-1)return!1;for(var a=n.length,o=0,c=0,u=!1,m=0;m<a;m++){var g=n.charCodeAt(m);if(c!==0||u||g!==ss||n.charCodeAt(m+1)!==42)if(u)g===42&&n.charCodeAt(m+1)===ss&&(u=!1,m++);else if(g!==34&&g!==39||m!==0&&n.charCodeAt(m-1)===92){if(c===0){if(g===123)o++;else if(g===125&&--o<0)return!0}}else c===0?c=g:c===g&&(c=0);else u=!0,m++}return o!==0||c!==0}function J2(n,a){return n.map(function(o){return o.type==="rule"&&(o.value="".concat(a," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(a," ")),o.props=o.props.map(function(c){return"".concat(a," ").concat(c)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=J2(o.children,a)),o})}function A6(n){var a,o,c,u=ws,m=u.options,g=m===void 0?ws:m,x=u.plugins,y=x===void 0?_f:x,_=function(A,O,R){return R.startsWith(o)&&R.endsWith(o)&&R.replaceAll(o,"").length>0?".".concat(a):A},T=y.slice();T.push(function(A){A.type===pf&&A.value.includes("&")&&(A.props[0]=A.props[0].replace(E6,o).replace(c,_))}),g.prefix&&T.push(JS),T.push(KS);var C=function(A,O,R,P){O===void 0&&(O=""),R===void 0&&(R=""),P===void 0&&(P="&"),a=P,o=O,c=new RegExp("\\".concat(o,"\\b"),"g");var I=(function(B){if(!tx(B))return B;for(var Q=B.length,tt="",ot=0,$=0,lt=0,pt=!1,gt=0;gt<Q;gt++){var Tt=B.charCodeAt(gt);if(lt!==0||pt||Tt!==ss||B.charCodeAt(gt+1)!==42)if(pt)Tt===42&&B.charCodeAt(gt+1)===ss&&(pt=!1,gt++);else if(Tt!==34&&Tt!==39||gt!==0&&B.charCodeAt(gt-1)===92){if(lt===0)if(Tt===123)$++;else if(Tt===125){if(--$<0){for(var at=gt+1;at<Q;){var zt=B.charCodeAt(at);if(zt===59||zt===10)break;at++}at<Q&&B.charCodeAt(at)===59&&at++,$=0,gt=at-1,ot=at;continue}$===0&&(tt+=B.substring(ot,gt+1),ot=gt+1)}else Tt===59&&$===0&&(tt+=B.substring(ot,gt+1),ot=gt+1)}else lt===0?lt=Tt:lt===Tt&&(lt=0);else pt=!0,gt++}if(ot<Q){var Bt=B.substring(ot);tx(Bt)||(tt+=Bt)}return tt})((function(B){if(B.indexOf("//")===-1)return B;for(var Q=B.length,tt=[],ot=0,$=0,lt=0,pt=0;$<Q;){var gt=B.charCodeAt($);if(gt!==34&&gt!==39||$!==0&&B.charCodeAt($-1)===92)if(lt===0)if(gt===40&&$>=3&&(32|B.charCodeAt($-1))==108&&(32|B.charCodeAt($-2))==114&&(32|B.charCodeAt($-3))==117)pt=1,$++;else if(pt>0)gt===41?pt--:gt===40&&pt++,$++;else if(gt===ss&&$+1<Q&&B.charCodeAt($+1)===ss){for($>ot&&tt.push(B.substring(ot,$));$<Q&&B.charCodeAt($)!==10;)$++;ot=$}else $++;else $++;else lt===0?lt=gt:lt===gt&&(lt=0),$++}return ot===0?B:(ot<Q&&tt.push(B.substring(ot)),tt.join(""))})(A)),D=$S(R||O?"".concat(R," ").concat(O," { ").concat(I," }"):I);g.namespace&&(D=J2(D,g.namespace));var M=[];return Kd(D,QS(T.concat(WS(function(B){return M.push(B)})))),M};return C.hash=y.length?y.reduce(function(A,O){return O.name||Dc(15),os(A,O.name)},5381).toString():"",C}var M6=new W2,Hp=A6(),Up={shouldForwardProp:void 0,styleSheet:M6,stylis:Hp},tb=bs?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(Up)}}:oe.createContext(Up);tb.Consumer;bs||oe.createContext(void 0);function ex(){return bs?Up:oe.useContext(tb)}var z6=(function(){function n(a,o){var c=this;this.inject=function(u,m){m===void 0&&(m=Hp);var g=c.name+m.hash;u.hasNameForId(c.id,g)||u.insertRules(c.id,g,m(c.rules,g,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=o,Sg(this,function(){throw Dc(12,String(c.name))})}return n.prototype.getName=function(a){return a===void 0&&(a=Hp),this.name+a.hash},n})();function L6(n,a){return a==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||n in t6||n.startsWith("--")?String(a).trim():"".concat(a,"px")}var O6=function(n){return n>="A"&&n<="Z"};function nx(n){for(var a="",o=0;o<n.length;o++){var c=n[o];if(o===1&&c==="-"&&n[0]==="-")return n;O6(c)?a+="-"+c.toLowerCase():a+=c}return a.startsWith("ms-")?"-"+a:a}var eb=function(n){return n==null||n===!1||n===""},nb=function(n){var a=[];for(var o in n){var c=n[o];n.hasOwnProperty(o)&&!eb(c)&&(Array.isArray(c)&&c.isCss||Ss(c)?a.push("".concat(nx(o),":"),c,";"):wc(c)?a.push.apply(a,Xd(Xd(["".concat(o," {")],nb(c),!1),["}"],!1)):a.push("".concat(nx(o),": ").concat(L6(o,c),";")))}return a};function lo(n,a,o,c){if(eb(n))return[];if(wg(n))return[".".concat(n.styledComponentId)];if(Ss(n)){if(!Ss(m=n)||m.prototype&&m.prototype.isReactComponent||!a)return[n];var u=n(a);return lo(u,a,o,c)}var m;return n instanceof z6?o?(n.inject(o,c),[n.getName(c)]):[n]:wc(n)?nb(n):Array.isArray(n)?Array.prototype.concat.apply(_f,n.map(function(g){return lo(g,a,o,c)})):[n.toString()]}function D6(n){for(var a=0;a<n.length;a+=1){var o=n[a];if(Ss(o)&&!wg(o))return!1}return!0}var R6=Y2(xf),k6=(function(){function n(a,o,c){this.rules=a,this.staticRulesId="",this.isStatic=(c===void 0||c.isStatic)&&D6(a),this.componentId=o,this.baseHash=os(R6,o),this.baseStyle=c,W2.registerId(o)}return n.prototype.generateAndInjectStyles=function(a,o,c){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,o,c).className:"";if(this.isStatic&&!c.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))u=ro(u,this.staticRulesId);else{var m=Q1(lo(this.rules,a,o,c)),g=Np(os(this.baseHash,m)>>>0);if(!o.hasNameForId(this.componentId,g)){var x=c(m,".".concat(g),void 0,this.componentId);o.insertRules(this.componentId,g,x)}u=ro(u,g),this.staticRulesId=g}else{for(var y=os(this.baseHash,c.hash),_="",T=0;T<this.rules.length;T++){var C=this.rules[T];if(typeof C=="string")_+=C;else if(C){var A=Q1(lo(C,a,o,c));y=os(y,A+T),_+=A}}if(_){var O=Np(y>>>0);if(!o.hasNameForId(this.componentId,O)){var R=c(_,".".concat(O),void 0,this.componentId);o.insertRules(this.componentId,O,R)}u=ro(u,O)}}return{className:u,css:typeof window>"u"?o.getTag().getGroup(rc(this.componentId)):""}},n})(),ib=bs?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(void 0)}}:oe.createContext(void 0);ib.Consumer;var Zm={};function B6(n,a,o){var c=wg(n),u=n,m=!Um(n),g=a.attrs,x=g===void 0?_f:g,y=a.componentId,_=y===void 0?(function(Q,tt){var ot=typeof Q!="string"?"sc":Y1(Q);Zm[ot]=(Zm[ot]||0)+1;var $="".concat(ot,"-").concat(o6(xf+ot+Zm[ot]));return tt?"".concat(tt,"-").concat($):$})(a.displayName,a.parentComponentId):y,T=a.displayName,C=T===void 0?(function(Q){return Um(Q)?"styled.".concat(Q):"Styled(".concat(s6(Q),")")})(n):T,A=a.displayName&&a.componentId?"".concat(Y1(a.displayName),"-").concat(a.componentId):a.componentId||_,O=c&&u.attrs?u.attrs.concat(x).filter(Boolean):x,R=a.shouldForwardProp;if(c&&u.shouldForwardProp){var P=u.shouldForwardProp;if(a.shouldForwardProp){var I=a.shouldForwardProp;R=function(Q,tt){return P(Q,tt)&&I(Q,tt)}}else R=P}var D=new k6(o,A,c?u.componentStyle:void 0);function M(Q,tt){return(function(ot,$,lt){var pt=ot.attrs,gt=ot.componentStyle,Tt=ot.defaultProps,at=ot.foldedComponentIds,zt=ot.styledComponentId,Bt=ot.target,ge=bs?void 0:oe.useContext(ib),X=ex(),st=ot.shouldForwardProp||X.shouldForwardProp,rt=n6($,ge,Tt)||ws,Ct=(function(Jt,Xt,un){for(var dn,ke=Cn(Cn({},Xt),{className:void 0,theme:un}),xi=0;xi<Jt.length;xi+=1){var fn=Ss(dn=Jt[xi])?dn(ke):dn;for(var jn in fn)jn==="className"?ke.className=ro(ke.className,fn[jn]):jn==="style"?ke.style=Cn(Cn({},ke.style),fn[jn]):ke[jn]=fn[jn]}return"className"in Xt&&typeof Xt.className=="string"&&(ke.className=ro(ke.className,Xt.className)),ke})(pt,$,rt),dt=Ct.as||Bt,V={};for(var W in Ct)Ct[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&Ct.theme===rt||(W==="forwardedAs"?V.as=Ct.forwardedAs:st&&!st(W,dt)||(V[W]=Ct[W]));var ct=(function(Jt,Xt){var un=ex(),dn=Jt.generateAndInjectStyles(Xt,un.styleSheet,un.stylis);return dn})(gt,Ct),ut=ct.className,mt=ct.css,ht=ro(at,zt);ut&&(ht+=" "+ut),Ct.className&&(ht+=" "+Ct.className),V[Um(dt)&&!q2.has(dt)?"class":"className"]=ht,lt&&(V.ref=lt);var Mt=z.createElement(dt,V);return bs&&mt?oe.createElement(oe.Fragment,null,oe.createElement("style",{precedence:"styled-components",href:"sc-".concat(zt,"-").concat(ut),children:mt}),Mt):Mt})(B,Q,tt)}M.displayName=C;var B=oe.forwardRef(M);return B.attrs=O,B.componentStyle=D,B.displayName=C,B.shouldForwardProp=R,B.foldedComponentIds=c?ro(u.foldedComponentIds,u.styledComponentId):"",B.styledComponentId=A,B.target=c?u.target:n,Object.defineProperty(B,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Q){this._foldedDefaultProps=c?(function(tt){for(var ot=[],$=1;$<arguments.length;$++)ot[$-1]=arguments[$];for(var lt=0,pt=ot;lt<pt.length;lt++)Vp(tt,pt[lt],!0);return tt})({},u.defaultProps,Q):Q}}),Sg(B,function(){return".".concat(B.styledComponentId)}),m&&K2(B,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),B}function ix(n,a){for(var o=[n[0]],c=0,u=a.length;c<u;c+=1)o.push(a[c],n[c+1]);return o}var ax=function(n){return Object.assign(n,{isCss:!0})};function P6(n){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];if(Ss(n)||wc(n))return ax(lo(ix(_f,Xd([n],a,!0))));var c=n;return a.length===0&&c.length===1&&typeof c[0]=="string"?lo(c):ax(lo(ix(c,a)))}function Zp(n,a,o){if(o===void 0&&(o=ws),!a)throw Dc(1,a);var c=function(u){for(var m=[],g=1;g<arguments.length;g++)m[g-1]=arguments[g];return n(a,o,P6.apply(void 0,Xd([u],m,!1)))};return c.attrs=function(u){return Zp(n,a,Cn(Cn({},o),{attrs:Array.prototype.concat(o.attrs,u).filter(Boolean)}))},c.withConfig=function(u){return Zp(n,a,Cn(Cn({},o),u))},c}var ab=function(n){return Zp(B6,n)},S=ab;q2.forEach(function(n){S[n]=ab(n)});var rb={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},rx=oe.createContext&&oe.createContext(rb),N6=["attr","size","title"];function V6(n,a){if(n==null)return{};var o=H6(n,a),c,u;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(n);for(u=0;u<m.length;u++)c=m[u],!(a.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(n,c)&&(o[c]=n[c])}return o}function H6(n,a){if(n==null)return{};var o={};for(var c in n)if(Object.prototype.hasOwnProperty.call(n,c)){if(a.indexOf(c)>=0)continue;o[c]=n[c]}return o}function Jd(){return Jd=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(n[c]=o[c])}return n},Jd.apply(this,arguments)}function ox(n,a){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);a&&(c=c.filter(function(u){return Object.getOwnPropertyDescriptor(n,u).enumerable})),o.push.apply(o,c)}return o}function tf(n){for(var a=1;a<arguments.length;a++){var o=arguments[a]!=null?arguments[a]:{};a%2?ox(Object(o),!0).forEach(function(c){U6(n,c,o[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):ox(Object(o)).forEach(function(c){Object.defineProperty(n,c,Object.getOwnPropertyDescriptor(o,c))})}return n}function U6(n,a,o){return a=Z6(a),a in n?Object.defineProperty(n,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[a]=o,n}function Z6(n){var a=I6(n,"string");return typeof a=="symbol"?a:a+""}function I6(n,a){if(typeof n!="object"||!n)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var c=o.call(n,a);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(n)}function ob(n){return n&&n.map((a,o)=>oe.createElement(a.tag,tf({key:o},a.attr),ob(a.child)))}function kt(n){return a=>oe.createElement(G6,Jd({attr:tf({},n.attr)},a),ob(n.child))}function G6(n){var a=o=>{var{attr:c,size:u,title:m}=n,g=V6(n,N6),x=u||o.size||"1em",y;return o.className&&(y=o.className),n.className&&(y=(y?y+" ":"")+n.className),oe.createElement("svg",Jd({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,c,g,{className:y,style:tf(tf({color:n.color||o.color},o.style),n.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),m&&oe.createElement("title",null,m),n.children)};return rx!==void 0?oe.createElement(rx.Consumer,null,o=>a(o)):a(rb)}function q6(n){return kt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(n)}function Y6(n){return kt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(n)}function F6(n){return kt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(n)}function Tg(n){return kt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(n)}function sb(n){return kt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(n)}function $6(n){return kt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(n)}function ef(n){return kt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"},child:[]}]})(n)}function X6(n){return kt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H272v192h238.7c-.4-2.5-.4-5-1.2-7.4zM240 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-.8 2.4-.8 4.9-1.2 7.4H240V0zM0 224v240c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V224H0z"},child:[]}]})(n)}function K6(n){return kt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"},child:[]}]})(n)}function Q6(n){return kt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(n)}function ls(n){return kt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(n)}function W6(n){return kt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(n)}function lb(n){return kt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(n)}function J6(n){return kt({attr:{viewBox:"0 0 288 512"},child:[{tag:"path",attr:{d:"M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"},child:[]}]})(n)}function Cg(n){return kt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(n)}function cb(n){return kt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(n)}function t8(n){return kt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(n)}function vs(n){return kt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"},child:[]}]})(n)}function e8(n){return kt({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm-11.34 240.23c-2.89 4.82-8.1 7.77-13.72 7.77h-.31c-4.24 0-8.31 1.69-11.31 4.69l-5.66 5.66c-3.12 3.12-3.12 8.19 0 11.31l5.66 5.66c3 3 4.69 7.07 4.69 11.31V304c0 8.84-7.16 16-16 16h-6.11c-6.06 0-11.6-3.42-14.31-8.85l-22.62-45.23c-2.44-4.88-8.95-5.94-12.81-2.08l-19.47 19.46c-3 3-7.07 4.69-11.31 4.69H50.81C49.12 277.55 48 266.92 48 256c0-110.28 89.72-200 200-200 21.51 0 42.2 3.51 61.63 9.82l-50.16 38.53c-5.11 3.41-4.63 11.06.86 13.81l10.83 5.41c5.42 2.71 8.84 8.25 8.84 14.31V216c0 4.42-3.58 8-8 8h-3.06c-3.03 0-5.8-1.71-7.15-4.42-1.56-3.12-5.96-3.29-7.76-.3l-17.37 28.95zM408 358.43c0 4.24-1.69 8.31-4.69 11.31l-9.57 9.57c-3 3-7.07 4.69-11.31 4.69h-15.16c-4.24 0-8.31-1.69-11.31-4.69l-13.01-13.01a26.767 26.767 0 0 0-25.42-7.04l-21.27 5.32c-1.27.32-2.57.48-3.88.48h-10.34c-4.24 0-8.31-1.69-11.31-4.69l-11.91-11.91a8.008 8.008 0 0 1-2.34-5.66v-10.2c0-3.27 1.99-6.21 5.03-7.43l39.34-15.74c1.98-.79 3.86-1.82 5.59-3.05l23.71-16.89a7.978 7.978 0 0 1 4.64-1.48h12.09c3.23 0 6.15 1.94 7.39 4.93l5.35 12.85a4 4 0 0 0 3.69 2.46h3.8c1.78 0 3.35-1.18 3.84-2.88l4.2-14.47c.5-1.71 2.06-2.88 3.84-2.88h6.06c2.21 0 4 1.79 4 4v12.93c0 2.12.84 4.16 2.34 5.66l11.91 11.91c3 3 4.69 7.07 4.69 11.31v24.6z"},child:[]}]})(n)}function n8(n){return kt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(n)}function i8(n){return kt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"},child:[]}]})(n)}function ub(n){return kt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(n)}function db(n){return kt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"},child:[]}]})(n)}function fb(n){return kt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"},child:[]}]})(n)}function a8(n){return kt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(n)}function jg(n){return kt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(n)}function r8(n){return kt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM240 320h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h96c52.9 0 96 43.1 96 96s-43.1 96-96 96zm0-128h-48v64h48c17.6 0 32-14.4 32-32s-14.4-32-32-32z"},child:[]}]})(n)}function bf(n){return kt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(n)}function Ts(n){return kt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(n)}function o8(n){return kt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"},child:[]}]})(n)}function s8(n){return kt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"},child:[]}]})(n)}function Eg(n){return kt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(n)}function Cs(n){return kt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(n)}function l8(n){return kt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"},child:[]}]})(n)}function c8(n){return kt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(n)}function nf(n){return kt({attr:{viewBox:"0 0 616 512"},child:[{tag:"path",attr:{d:"M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z"},child:[]}]})(n)}function fo(n){return kt({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(n)}function Ag(n){return kt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(n)}function u8(n){return kt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"},child:[]}]})(n)}function af(n){return kt({attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(n)}const d8=()=>{const[n,a]=z.useState(!1),[o,c]=z.useState(!1),u=Ni();z.useEffect(()=>{const g=()=>{a(window.scrollY>50)};return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[]),z.useEffect(()=>{c(!1)},[u]);const m=[{path:"/menu",label:"MENU",desc:"메뉴"},{path:"/simulator",label:"CUSTOMIZE",desc:"나만의 카레"},{path:"/store",label:"STORE",desc:"매장찾기"},{path:"/brand",label:"BRAND",desc:"브랜드"},{path:"/franchise",label:"FRANCHISE",desc:"창업안내"},{path:"/notice",label:"NOTICE",desc:"공지사항"},{path:"/faq",label:"FAQ",desc:"자주 묻는 질문"}];return d.jsx(f8,{$scrolled:n,children:d.jsxs(h8,{children:[d.jsx(m8,{to:"/",children:d.jsxs(p8,{children:["CoCo",d.jsx("br",{}),d.jsx(g8,{children:"ICHIBANYA"})]})}),d.jsx(v8,{children:m.map(g=>d.jsxs(y8,{to:g.path,$active:u.pathname===g.path,children:[d.jsx(x8,{children:g.label}),d.jsx(_8,{children:g.desc})]},g.path))}),d.jsx(b8,{onClick:()=>c(!o),children:o?d.jsx(fo,{}):d.jsx($6,{})}),d.jsx(w8,{$open:o,children:m.map(g=>d.jsx(S8,{to:g.path,$active:u.pathname===g.path,children:g.desc},g.path))})]})})},f8=S.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-fixed);
  background: ${n=>n.$scrolled?"rgba(255, 255, 255, 0.98)":"rgba(255, 255, 255, 0.95)"};
  backdrop-filter: blur(10px);
  box-shadow: ${n=>n.$scrolled?"0 2px 20px rgba(0,0,0,0.1)":"0 2px 10px rgba(0,0,0,0.05)"};
  transition: all var(--transition-normal);
`,h8=S.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,m8=S(gi)`
  text-decoration: none;
  z-index: 1001;
`,p8=S.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1.2;
  letter-spacing: -0.5px;
`,g8=S.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-dark);
  letter-spacing: 1px;
`,v8=S.nav`
  display: flex;
  gap: 3rem;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`,y8=S(gi)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  position: relative;
  padding: 0.5rem 0;
  transition: var(--transition-fast);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${n=>n.$active?"100%":"0"};
    height: 2px;
    background: var(--color-primary);
    transition: width var(--transition-normal);
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    transform: translateY(-2px);
  }
`,x8=S.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-dark);
  letter-spacing: 0.5px;
`,_8=S.span`
  font-size: 0.75rem;
  color: var(--color-gray);
`,b8=S.button`
  display: none;
  font-size: 1.5rem;
  color: var(--color-dark);
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`,w8=S.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background: var(--color-white);
    box-shadow: -5px 0 15px rgba(0,0,0,0.1);
    padding: 5rem 2rem 2rem;
    gap: 2rem;
    transform: translateX(${n=>n.$open?"0":"100%"});
    visibility: ${n=>n.$open?"visible":"hidden"};
    transition: transform var(--transition-normal), visibility 0s ${n=>n.$open?"0s":"0.3s"};
    z-index: 1000;
  }
`,S8=S(gi)`
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${n=>n.$active?"var(--color-primary)":"var(--color-dark)"};
  padding: 1rem;
  border-bottom: 1px solid var(--color-light-gray);
  transition: var(--transition-fast);

  &:hover {
    color: var(--color-primary);
    padding-left: 1.5rem;
  }
`,T8=()=>d.jsx(C8,{children:d.jsxs(j8,{children:[d.jsxs(E8,{children:[d.jsxs(yd,{children:[d.jsx(xd,{children:"CoCo ICHIBANYA"}),d.jsxs(sx,{children:["세계 No.1 카레 전문점",d.jsx("br",{}),"코코이찌방야가 여러분을 초대합니다"]}),d.jsxs(A8,{children:[d.jsx(Gm,{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:d.jsx(q6,{})}),d.jsx(Gm,{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:d.jsx(Y6,{})}),d.jsx(Gm,{href:"https://youtube.com",target:"_blank",rel:"noopener noreferrer",children:d.jsx(F6,{})})]})]}),d.jsxs(yd,{children:[d.jsx(xd,{children:"메뉴"}),d.jsxs(Im,{children:[d.jsx(no,{to:"/menu",children:"메뉴 소개"}),d.jsx(no,{to:"/simulator",children:"나만의 카레"}),d.jsx(no,{to:"/store",children:"매장 찾기"})]})]}),d.jsxs(yd,{children:[d.jsx(xd,{children:"브랜드"}),d.jsxs(Im,{children:[d.jsx(no,{to:"/brand",children:"브랜드 소개"}),d.jsx(no,{to:"/franchise",children:"창업 안내"})]})]}),d.jsxs(yd,{children:[d.jsx(xd,{children:"고객 지원"}),d.jsxs(Im,{children:[d.jsx(no,{to:"/notice",children:"공지사항"}),d.jsx(no,{to:"/faq",children:"자주 묻는 질문"})]}),d.jsxs(M8,{style:{marginTop:"1rem"},children:[d.jsxs(lx,{children:[d.jsx(bf,{}),d.jsx("span",{children:"1588-0000"})]}),d.jsxs(lx,{children:[d.jsx(cb,{}),d.jsx("span",{children:"info@cocoichibanya.co.kr"})]})]}),d.jsxs(sx,{style:{marginTop:"1rem",fontSize:"0.875rem"},children:["평일 09:00 - 18:00",d.jsx("br",{}),"(주말 및 공휴일 휴무)"]})]})]}),d.jsxs(z8,{children:[d.jsxs(L8,{children:[d.jsx("p",{children:"(주)농심 | 대표이사: 박준 | 사업자등록번호: 118-81-00433"}),d.jsx("p",{children:"서울특별시 동작구 여의대방로 112 | 통신판매업신고: 2021-서울동작-0001"})]}),d.jsxs(O8,{children:["© ",new Date().getFullYear()," CoCo ICHIBANYA Korea. All Rights Reserved."]})]})]})}),C8=S.footer`
  background: var(--color-dark);
  color: rgba(255, 255, 255, 0.8);
  margin-top: auto;
`,j8=S.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem 1.5rem;
  }
`,E8=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }
`,yd=S.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,xd=S.h4`
  color: var(--color-white);
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`,sx=S.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
`,Im=S.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,no=S(gi)`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  transition: var(--transition-fast);

  &:hover {
    color: var(--color-primary);
    padding-left: 0.5rem;
  }
`,A8=S.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`,Gm=S.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  font-size: 1.25rem;
  transition: var(--transition-fast);

  &:hover {
    background: var(--color-primary);
    transform: translateY(-3px);
  }
`,M8=S.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,lx=S.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;

  svg {
    color: var(--color-primary);
  }
`,z8=S.div`
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    padding-top: 1.5rem;
  }
`,L8=S.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.6;

  p {
    margin-bottom: 0.25rem;
  }
`,O8=S.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
`,Mg=z.createContext({});function zg(n){const a=z.useRef(null);return a.current===null&&(a.current=n()),a.current}const hb=typeof window<"u",mb=hb?z.useLayoutEffect:z.useEffect,wf=z.createContext(null);function Lg(n,a){n.indexOf(a)===-1&&n.push(a)}function Og(n,a){const o=n.indexOf(a);o>-1&&n.splice(o,1)}const Pi=(n,a,o)=>o>a?a:o<n?n:o;let Dg=()=>{};const va={},pb=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function gb(n){return typeof n=="object"&&n!==null}const vb=n=>/^0[^.\s]+$/u.test(n);function Rg(n){let a;return()=>(a===void 0&&(a=n()),a)}const Wn=n=>n,D8=(n,a)=>o=>a(n(o)),Rc=(...n)=>n.reduce(D8),Sc=(n,a,o)=>{const c=a-n;return c===0?1:(o-n)/c};class kg{constructor(){this.subscriptions=[]}add(a){return Lg(this.subscriptions,a),()=>Og(this.subscriptions,a)}notify(a,o,c){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](a,o,c);else for(let m=0;m<u;m++){const g=this.subscriptions[m];g&&g(a,o,c)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const pa=n=>n*1e3,Qn=n=>n/1e3;function yb(n,a){return a?n*(1e3/a):0}const xb=(n,a,o)=>(((1-3*o+3*a)*n+(3*o-6*a))*n+3*a)*n,R8=1e-7,k8=12;function B8(n,a,o,c,u){let m,g,x=0;do g=a+(o-a)/2,m=xb(g,c,u)-n,m>0?o=g:a=g;while(Math.abs(m)>R8&&++x<k8);return g}function kc(n,a,o,c){if(n===a&&o===c)return Wn;const u=m=>B8(m,0,1,n,o);return m=>m===0||m===1?m:xb(u(m),a,c)}const _b=n=>a=>a<=.5?n(2*a)/2:(2-n(2*(1-a)))/2,bb=n=>a=>1-n(1-a),wb=kc(.33,1.53,.69,.99),Bg=bb(wb),Sb=_b(Bg),Tb=n=>(n*=2)<1?.5*Bg(n):.5*(2-Math.pow(2,-10*(n-1))),Pg=n=>1-Math.sin(Math.acos(n)),Cb=bb(Pg),jb=_b(Pg),P8=kc(.42,0,1,1),N8=kc(0,0,.58,1),Eb=kc(.42,0,.58,1),V8=n=>Array.isArray(n)&&typeof n[0]!="number",Ab=n=>Array.isArray(n)&&typeof n[0]=="number",H8={linear:Wn,easeIn:P8,easeInOut:Eb,easeOut:N8,circIn:Pg,circInOut:jb,circOut:Cb,backIn:Bg,backInOut:Sb,backOut:wb,anticipate:Tb},U8=n=>typeof n=="string",cx=n=>{if(Ab(n)){Dg(n.length===4);const[a,o,c,u]=n;return kc(a,o,c,u)}else if(U8(n))return H8[n];return n},_d=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Z8(n,a){let o=new Set,c=new Set,u=!1,m=!1;const g=new WeakSet;let x={delta:0,timestamp:0,isProcessing:!1};function y(T){g.has(T)&&(_.schedule(T),n()),T(x)}const _={schedule:(T,C=!1,A=!1)=>{const R=A&&u?o:c;return C&&g.add(T),R.has(T)||R.add(T),T},cancel:T=>{c.delete(T),g.delete(T)},process:T=>{if(x=T,u){m=!0;return}u=!0,[o,c]=[c,o],o.forEach(y),o.clear(),u=!1,m&&(m=!1,_.process(T))}};return _}const I8=40;function Mb(n,a){let o=!1,c=!0;const u={delta:0,timestamp:0,isProcessing:!1},m=()=>o=!0,g=_d.reduce((B,Q)=>(B[Q]=Z8(m),B),{}),{setup:x,read:y,resolveKeyframes:_,preUpdate:T,update:C,preRender:A,render:O,postRender:R}=g,P=()=>{const B=va.useManualTiming?u.timestamp:performance.now();o=!1,va.useManualTiming||(u.delta=c?1e3/60:Math.max(Math.min(B-u.timestamp,I8),1)),u.timestamp=B,u.isProcessing=!0,x.process(u),y.process(u),_.process(u),T.process(u),C.process(u),A.process(u),O.process(u),R.process(u),u.isProcessing=!1,o&&a&&(c=!1,n(P))},I=()=>{o=!0,c=!0,u.isProcessing||n(P)};return{schedule:_d.reduce((B,Q)=>{const tt=g[Q];return B[Q]=(ot,$=!1,lt=!1)=>(o||I(),tt.schedule(ot,$,lt)),B},{}),cancel:B=>{for(let Q=0;Q<_d.length;Q++)g[_d[Q]].cancel(B)},state:u,steps:g}}const{schedule:fe,cancel:ur,state:Ke,steps:qm}=Mb(typeof requestAnimationFrame<"u"?requestAnimationFrame:Wn,!0);let Nd;function G8(){Nd=void 0}const ln={now:()=>(Nd===void 0&&ln.set(Ke.isProcessing||va.useManualTiming?Ke.timestamp:performance.now()),Nd),set:n=>{Nd=n,queueMicrotask(G8)}},zb=n=>a=>typeof a=="string"&&a.startsWith(n),Lb=zb("--"),q8=zb("var(--"),Ng=n=>q8(n)?Y8.test(n.split("/*")[0].trim()):!1,Y8=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function ux(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const Ds={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Tc={...Ds,transform:n=>Pi(0,1,n)},bd={...Ds,default:1},gc=n=>Math.round(n*1e5)/1e5,Vg=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function F8(n){return n==null}const $8=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Hg=(n,a)=>o=>!!(typeof o=="string"&&$8.test(o)&&o.startsWith(n)||a&&!F8(o)&&Object.prototype.hasOwnProperty.call(o,a)),Ob=(n,a,o)=>c=>{if(typeof c!="string")return c;const[u,m,g,x]=c.match(Vg);return{[n]:parseFloat(u),[a]:parseFloat(m),[o]:parseFloat(g),alpha:x!==void 0?parseFloat(x):1}},X8=n=>Pi(0,255,n),Ym={...Ds,transform:n=>Math.round(X8(n))},oo={test:Hg("rgb","red"),parse:Ob("red","green","blue"),transform:({red:n,green:a,blue:o,alpha:c=1})=>"rgba("+Ym.transform(n)+", "+Ym.transform(a)+", "+Ym.transform(o)+", "+gc(Tc.transform(c))+")"};function K8(n){let a="",o="",c="",u="";return n.length>5?(a=n.substring(1,3),o=n.substring(3,5),c=n.substring(5,7),u=n.substring(7,9)):(a=n.substring(1,2),o=n.substring(2,3),c=n.substring(3,4),u=n.substring(4,5),a+=a,o+=o,c+=c,u+=u),{red:parseInt(a,16),green:parseInt(o,16),blue:parseInt(c,16),alpha:u?parseInt(u,16)/255:1}}const Ip={test:Hg("#"),parse:K8,transform:oo.transform},Bc=n=>({test:a=>typeof a=="string"&&a.endsWith(n)&&a.split(" ").length===1,parse:parseFloat,transform:a=>`${a}${n}`}),rr=Bc("deg"),Bi=Bc("%"),yt=Bc("px"),Q8=Bc("vh"),W8=Bc("vw"),dx={...Bi,parse:n=>Bi.parse(n)/100,transform:n=>Bi.transform(n*100)},cs={test:Hg("hsl","hue"),parse:Ob("hue","saturation","lightness"),transform:({hue:n,saturation:a,lightness:o,alpha:c=1})=>"hsla("+Math.round(n)+", "+Bi.transform(gc(a))+", "+Bi.transform(gc(o))+", "+gc(Tc.transform(c))+")"},De={test:n=>oo.test(n)||Ip.test(n)||cs.test(n),parse:n=>oo.test(n)?oo.parse(n):cs.test(n)?cs.parse(n):Ip.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?oo.transform(n):cs.transform(n),getAnimatableNone:n=>{const a=De.parse(n);return a.alpha=0,De.transform(a)}},J8=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function tT(n){return isNaN(n)&&typeof n=="string"&&(n.match(Vg)?.length||0)+(n.match(J8)?.length||0)>0}const Db="number",Rb="color",eT="var",nT="var(",fx="${}",iT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Cc(n){const a=n.toString(),o=[],c={color:[],number:[],var:[]},u=[];let m=0;const x=a.replace(iT,y=>(De.test(y)?(c.color.push(m),u.push(Rb),o.push(De.parse(y))):y.startsWith(nT)?(c.var.push(m),u.push(eT),o.push(y)):(c.number.push(m),u.push(Db),o.push(parseFloat(y))),++m,fx)).split(fx);return{values:o,split:x,indexes:c,types:u}}function kb(n){return Cc(n).values}function Bb(n){const{split:a,types:o}=Cc(n),c=a.length;return u=>{let m="";for(let g=0;g<c;g++)if(m+=a[g],u[g]!==void 0){const x=o[g];x===Db?m+=gc(u[g]):x===Rb?m+=De.transform(u[g]):m+=u[g]}return m}}const aT=n=>typeof n=="number"?0:De.test(n)?De.getAnimatableNone(n):n;function rT(n){const a=kb(n);return Bb(n)(a.map(aT))}const dr={test:tT,parse:kb,createTransformer:Bb,getAnimatableNone:rT};function Fm(n,a,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?n+(a-n)*6*o:o<1/2?a:o<2/3?n+(a-n)*(2/3-o)*6:n}function oT({hue:n,saturation:a,lightness:o,alpha:c}){n/=360,a/=100,o/=100;let u=0,m=0,g=0;if(!a)u=m=g=o;else{const x=o<.5?o*(1+a):o+a-o*a,y=2*o-x;u=Fm(y,x,n+1/3),m=Fm(y,x,n),g=Fm(y,x,n-1/3)}return{red:Math.round(u*255),green:Math.round(m*255),blue:Math.round(g*255),alpha:c}}function rf(n,a){return o=>o>0?a:n}const ye=(n,a,o)=>n+(a-n)*o,$m=(n,a,o)=>{const c=n*n,u=o*(a*a-c)+c;return u<0?0:Math.sqrt(u)},sT=[Ip,oo,cs],lT=n=>sT.find(a=>a.test(n));function hx(n){const a=lT(n);if(!a)return!1;let o=a.parse(n);return a===cs&&(o=oT(o)),o}const mx=(n,a)=>{const o=hx(n),c=hx(a);if(!o||!c)return rf(n,a);const u={...o};return m=>(u.red=$m(o.red,c.red,m),u.green=$m(o.green,c.green,m),u.blue=$m(o.blue,c.blue,m),u.alpha=ye(o.alpha,c.alpha,m),oo.transform(u))},Gp=new Set(["none","hidden"]);function cT(n,a){return Gp.has(n)?o=>o<=0?n:a:o=>o>=1?a:n}function uT(n,a){return o=>ye(n,a,o)}function Ug(n){return typeof n=="number"?uT:typeof n=="string"?Ng(n)?rf:De.test(n)?mx:hT:Array.isArray(n)?Pb:typeof n=="object"?De.test(n)?mx:dT:rf}function Pb(n,a){const o=[...n],c=o.length,u=n.map((m,g)=>Ug(m)(m,a[g]));return m=>{for(let g=0;g<c;g++)o[g]=u[g](m);return o}}function dT(n,a){const o={...n,...a},c={};for(const u in o)n[u]!==void 0&&a[u]!==void 0&&(c[u]=Ug(n[u])(n[u],a[u]));return u=>{for(const m in c)o[m]=c[m](u);return o}}function fT(n,a){const o=[],c={color:0,var:0,number:0};for(let u=0;u<a.values.length;u++){const m=a.types[u],g=n.indexes[m][c[m]],x=n.values[g]??0;o[u]=x,c[m]++}return o}const hT=(n,a)=>{const o=dr.createTransformer(a),c=Cc(n),u=Cc(a);return c.indexes.var.length===u.indexes.var.length&&c.indexes.color.length===u.indexes.color.length&&c.indexes.number.length>=u.indexes.number.length?Gp.has(n)&&!u.values.length||Gp.has(a)&&!c.values.length?cT(n,a):Rc(Pb(fT(c,u),u.values),o):rf(n,a)};function Nb(n,a,o){return typeof n=="number"&&typeof a=="number"&&typeof o=="number"?ye(n,a,o):Ug(n)(n,a)}const mT=n=>{const a=({timestamp:o})=>n(o);return{start:(o=!0)=>fe.update(a,o),stop:()=>ur(a),now:()=>Ke.isProcessing?Ke.timestamp:ln.now()}},Vb=(n,a,o=10)=>{let c="";const u=Math.max(Math.round(a/o),2);for(let m=0;m<u;m++)c+=Math.round(n(m/(u-1))*1e4)/1e4+", ";return`linear(${c.substring(0,c.length-2)})`},of=2e4;function Zg(n){let a=0;const o=50;let c=n.next(a);for(;!c.done&&a<of;)a+=o,c=n.next(a);return a>=of?1/0:a}function pT(n,a=100,o){const c=o({...n,keyframes:[0,a]}),u=Math.min(Zg(c),of);return{type:"keyframes",ease:m=>c.next(u*m).value/a,duration:Qn(u)}}const gT=5;function Hb(n,a,o){const c=Math.max(a-gT,0);return yb(o-n(c),a-c)}const Te={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Xm=.001;function vT({duration:n=Te.duration,bounce:a=Te.bounce,velocity:o=Te.velocity,mass:c=Te.mass}){let u,m,g=1-a;g=Pi(Te.minDamping,Te.maxDamping,g),n=Pi(Te.minDuration,Te.maxDuration,Qn(n)),g<1?(u=_=>{const T=_*g,C=T*n,A=T-o,O=qp(_,g),R=Math.exp(-C);return Xm-A/O*R},m=_=>{const C=_*g*n,A=C*o+o,O=Math.pow(g,2)*Math.pow(_,2)*n,R=Math.exp(-C),P=qp(Math.pow(_,2),g);return(-u(_)+Xm>0?-1:1)*((A-O)*R)/P}):(u=_=>{const T=Math.exp(-_*n),C=(_-o)*n+1;return-Xm+T*C},m=_=>{const T=Math.exp(-_*n),C=(o-_)*(n*n);return T*C});const x=5/n,y=xT(u,m,x);if(n=pa(n),isNaN(y))return{stiffness:Te.stiffness,damping:Te.damping,duration:n};{const _=Math.pow(y,2)*c;return{stiffness:_,damping:g*2*Math.sqrt(c*_),duration:n}}}const yT=12;function xT(n,a,o){let c=o;for(let u=1;u<yT;u++)c=c-n(c)/a(c);return c}function qp(n,a){return n*Math.sqrt(1-a*a)}const _T=["duration","bounce"],bT=["stiffness","damping","mass"];function px(n,a){return a.some(o=>n[o]!==void 0)}function wT(n){let a={velocity:Te.velocity,stiffness:Te.stiffness,damping:Te.damping,mass:Te.mass,isResolvedFromDuration:!1,...n};if(!px(n,bT)&&px(n,_T))if(n.visualDuration){const o=n.visualDuration,c=2*Math.PI/(o*1.2),u=c*c,m=2*Pi(.05,1,1-(n.bounce||0))*Math.sqrt(u);a={...a,mass:Te.mass,stiffness:u,damping:m}}else{const o=vT(n);a={...a,...o,mass:Te.mass},a.isResolvedFromDuration=!0}return a}function sf(n=Te.visualDuration,a=Te.bounce){const o=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:a}:n;let{restSpeed:c,restDelta:u}=o;const m=o.keyframes[0],g=o.keyframes[o.keyframes.length-1],x={done:!1,value:m},{stiffness:y,damping:_,mass:T,duration:C,velocity:A,isResolvedFromDuration:O}=wT({...o,velocity:-Qn(o.velocity||0)}),R=A||0,P=_/(2*Math.sqrt(y*T)),I=g-m,D=Qn(Math.sqrt(y/T)),M=Math.abs(I)<5;c||(c=M?Te.restSpeed.granular:Te.restSpeed.default),u||(u=M?Te.restDelta.granular:Te.restDelta.default);let B;if(P<1){const tt=qp(D,P);B=ot=>{const $=Math.exp(-P*D*ot);return g-$*((R+P*D*I)/tt*Math.sin(tt*ot)+I*Math.cos(tt*ot))}}else if(P===1)B=tt=>g-Math.exp(-D*tt)*(I+(R+D*I)*tt);else{const tt=D*Math.sqrt(P*P-1);B=ot=>{const $=Math.exp(-P*D*ot),lt=Math.min(tt*ot,300);return g-$*((R+P*D*I)*Math.sinh(lt)+tt*I*Math.cosh(lt))/tt}}const Q={calculatedDuration:O&&C||null,next:tt=>{const ot=B(tt);if(O)x.done=tt>=C;else{let $=tt===0?R:0;P<1&&($=tt===0?pa(R):Hb(B,tt,ot));const lt=Math.abs($)<=c,pt=Math.abs(g-ot)<=u;x.done=lt&&pt}return x.value=x.done?g:ot,x},toString:()=>{const tt=Math.min(Zg(Q),of),ot=Vb($=>Q.next(tt*$).value,tt,30);return tt+"ms "+ot},toTransition:()=>{}};return Q}sf.applyToOptions=n=>{const a=pT(n,100,sf);return n.ease=a.ease,n.duration=pa(a.duration),n.type="keyframes",n};function Yp({keyframes:n,velocity:a=0,power:o=.8,timeConstant:c=325,bounceDamping:u=10,bounceStiffness:m=500,modifyTarget:g,min:x,max:y,restDelta:_=.5,restSpeed:T}){const C=n[0],A={done:!1,value:C},O=lt=>x!==void 0&&lt<x||y!==void 0&&lt>y,R=lt=>x===void 0?y:y===void 0||Math.abs(x-lt)<Math.abs(y-lt)?x:y;let P=o*a;const I=C+P,D=g===void 0?I:g(I);D!==I&&(P=D-C);const M=lt=>-P*Math.exp(-lt/c),B=lt=>D+M(lt),Q=lt=>{const pt=M(lt),gt=B(lt);A.done=Math.abs(pt)<=_,A.value=A.done?D:gt};let tt,ot;const $=lt=>{O(A.value)&&(tt=lt,ot=sf({keyframes:[A.value,R(A.value)],velocity:Hb(B,lt,A.value),damping:u,stiffness:m,restDelta:_,restSpeed:T}))};return $(0),{calculatedDuration:null,next:lt=>{let pt=!1;return!ot&&tt===void 0&&(pt=!0,Q(lt),$(lt)),tt!==void 0&&lt>=tt?ot.next(lt-tt):(!pt&&Q(lt),A)}}}function ST(n,a,o){const c=[],u=o||va.mix||Nb,m=n.length-1;for(let g=0;g<m;g++){let x=u(n[g],n[g+1]);if(a){const y=Array.isArray(a)?a[g]||Wn:a;x=Rc(y,x)}c.push(x)}return c}function TT(n,a,{clamp:o=!0,ease:c,mixer:u}={}){const m=n.length;if(Dg(m===a.length),m===1)return()=>a[0];if(m===2&&a[0]===a[1])return()=>a[1];const g=n[0]===n[1];n[0]>n[m-1]&&(n=[...n].reverse(),a=[...a].reverse());const x=ST(a,c,u),y=x.length,_=T=>{if(g&&T<n[0])return a[0];let C=0;if(y>1)for(;C<n.length-2&&!(T<n[C+1]);C++);const A=Sc(n[C],n[C+1],T);return x[C](A)};return o?T=>_(Pi(n[0],n[m-1],T)):_}function CT(n,a){const o=n[n.length-1];for(let c=1;c<=a;c++){const u=Sc(0,a,c);n.push(ye(o,1,u))}}function jT(n){const a=[0];return CT(a,n.length-1),a}function ET(n,a){return n.map(o=>o*a)}function AT(n,a){return n.map(()=>a||Eb).splice(0,n.length-1)}function vc({duration:n=300,keyframes:a,times:o,ease:c="easeInOut"}){const u=V8(c)?c.map(cx):cx(c),m={done:!1,value:a[0]},g=ET(o&&o.length===a.length?o:jT(a),n),x=TT(g,a,{ease:Array.isArray(u)?u:AT(a,u)});return{calculatedDuration:n,next:y=>(m.value=x(y),m.done=y>=n,m)}}const MT=n=>n!==null;function Ig(n,{repeat:a,repeatType:o="loop"},c,u=1){const m=n.filter(MT),x=u<0||a&&o!=="loop"&&a%2===1?0:m.length-1;return!x||c===void 0?m[x]:c}const zT={decay:Yp,inertia:Yp,tween:vc,keyframes:vc,spring:sf};function Ub(n){typeof n.type=="string"&&(n.type=zT[n.type])}class Gg{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(a=>{this.resolve=a})}notifyFinished(){this.resolve()}then(a,o){return this.finished.then(a,o)}}const LT=n=>n/100;class qg extends Gg{constructor(a){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:o}=this.options;o&&o.updatedAt!==ln.now()&&this.tick(ln.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=a,this.initAnimation(),this.play(),a.autoplay===!1&&this.pause()}initAnimation(){const{options:a}=this;Ub(a);const{type:o=vc,repeat:c=0,repeatDelay:u=0,repeatType:m,velocity:g=0}=a;let{keyframes:x}=a;const y=o||vc;y!==vc&&typeof x[0]!="number"&&(this.mixKeyframes=Rc(LT,Nb(x[0],x[1])),x=[0,100]);const _=y({...a,keyframes:x});m==="mirror"&&(this.mirroredGenerator=y({...a,keyframes:[...x].reverse(),velocity:-g})),_.calculatedDuration===null&&(_.calculatedDuration=Zg(_));const{calculatedDuration:T}=_;this.calculatedDuration=T,this.resolvedDuration=T+u,this.totalDuration=this.resolvedDuration*(c+1)-u,this.generator=_}updateTime(a){const o=Math.round(a-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(a,o=!1){const{generator:c,totalDuration:u,mixKeyframes:m,mirroredGenerator:g,resolvedDuration:x,calculatedDuration:y}=this;if(this.startTime===null)return c.next(0);const{delay:_=0,keyframes:T,repeat:C,repeatType:A,repeatDelay:O,type:R,onUpdate:P,finalKeyframe:I}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,a):this.speed<0&&(this.startTime=Math.min(a-u/this.speed,this.startTime)),o?this.currentTime=a:this.updateTime(a);const D=this.currentTime-_*(this.playbackSpeed>=0?1:-1),M=this.playbackSpeed>=0?D<0:D>u;this.currentTime=Math.max(D,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let B=this.currentTime,Q=c;if(C){const lt=Math.min(this.currentTime,u)/x;let pt=Math.floor(lt),gt=lt%1;!gt&&lt>=1&&(gt=1),gt===1&&pt--,pt=Math.min(pt,C+1),pt%2&&(A==="reverse"?(gt=1-gt,O&&(gt-=O/x)):A==="mirror"&&(Q=g)),B=Pi(0,1,gt)*x}const tt=M?{done:!1,value:T[0]}:Q.next(B);m&&(tt.value=m(tt.value));let{done:ot}=tt;!M&&y!==null&&(ot=this.playbackSpeed>=0?this.currentTime>=u:this.currentTime<=0);const $=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&ot);return $&&R!==Yp&&(tt.value=Ig(T,this.options,I,this.speed)),P&&P(tt.value),$&&this.finish(),tt}then(a,o){return this.finished.then(a,o)}get duration(){return Qn(this.calculatedDuration)}get iterationDuration(){const{delay:a=0}=this.options||{};return this.duration+Qn(a)}get time(){return Qn(this.currentTime)}set time(a){a=pa(a),this.currentTime=a,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=a:this.driver&&(this.startTime=this.driver.now()-a/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(a){this.updateTime(ln.now());const o=this.playbackSpeed!==a;this.playbackSpeed=a,o&&(this.time=Qn(this.currentTime))}play(){if(this.isStopped)return;const{driver:a=mT,startTime:o}=this.options;this.driver||(this.driver=a(u=>this.tick(u))),this.options.onPlay?.();const c=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=c):this.holdTime!==null?this.startTime=c-this.holdTime:this.startTime||(this.startTime=o??c),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ln.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(a){return this.startTime=0,this.tick(a,!0)}attachTimeline(a){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),a.observe(this)}}function OT(n){for(let a=1;a<n.length;a++)n[a]??(n[a]=n[a-1])}const so=n=>n*180/Math.PI,Fp=n=>{const a=so(Math.atan2(n[1],n[0]));return $p(a)},DT={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Fp,rotateZ:Fp,skewX:n=>so(Math.atan(n[1])),skewY:n=>so(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},$p=n=>(n=n%360,n<0&&(n+=360),n),gx=Fp,vx=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),yx=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),RT={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:vx,scaleY:yx,scale:n=>(vx(n)+yx(n))/2,rotateX:n=>$p(so(Math.atan2(n[6],n[5]))),rotateY:n=>$p(so(Math.atan2(-n[2],n[0]))),rotateZ:gx,rotate:gx,skewX:n=>so(Math.atan(n[4])),skewY:n=>so(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Xp(n){return n.includes("scale")?1:0}function Kp(n,a){if(!n||n==="none")return Xp(a);const o=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let c,u;if(o)c=RT,u=o;else{const x=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);c=DT,u=x}if(!u)return Xp(a);const m=c[a],g=u[1].split(",").map(BT);return typeof m=="function"?m(g):g[m]}const kT=(n,a)=>{const{transform:o="none"}=getComputedStyle(n);return Kp(o,a)};function BT(n){return parseFloat(n.trim())}const Rs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ks=new Set(Rs),xx=n=>n===Ds||n===yt,PT=new Set(["x","y","z"]),NT=Rs.filter(n=>!PT.has(n));function VT(n){const a=[];return NT.forEach(o=>{const c=n.getValue(o);c!==void 0&&(a.push([o,c.get()]),c.set(o.startsWith("scale")?1:0))}),a}const sr={width:({x:n},{paddingLeft:a="0",paddingRight:o="0"})=>n.max-n.min-parseFloat(a)-parseFloat(o),height:({y:n},{paddingTop:a="0",paddingBottom:o="0"})=>n.max-n.min-parseFloat(a)-parseFloat(o),top:(n,{top:a})=>parseFloat(a),left:(n,{left:a})=>parseFloat(a),bottom:({y:n},{top:a})=>parseFloat(a)+(n.max-n.min),right:({x:n},{left:a})=>parseFloat(a)+(n.max-n.min),x:(n,{transform:a})=>Kp(a,"x"),y:(n,{transform:a})=>Kp(a,"y")};sr.translateX=sr.x;sr.translateY=sr.y;const co=new Set;let Qp=!1,Wp=!1,Jp=!1;function Zb(){if(Wp){const n=Array.from(co).filter(c=>c.needsMeasurement),a=new Set(n.map(c=>c.element)),o=new Map;a.forEach(c=>{const u=VT(c);u.length&&(o.set(c,u),c.render())}),n.forEach(c=>c.measureInitialState()),a.forEach(c=>{c.render();const u=o.get(c);u&&u.forEach(([m,g])=>{c.getValue(m)?.set(g)})}),n.forEach(c=>c.measureEndState()),n.forEach(c=>{c.suspendedScrollY!==void 0&&window.scrollTo(0,c.suspendedScrollY)})}Wp=!1,Qp=!1,co.forEach(n=>n.complete(Jp)),co.clear()}function Ib(){co.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Wp=!0)})}function HT(){Jp=!0,Ib(),Zb(),Jp=!1}class Yg{constructor(a,o,c,u,m,g=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...a],this.onComplete=o,this.name=c,this.motionValue=u,this.element=m,this.isAsync=g}scheduleResolve(){this.state="scheduled",this.isAsync?(co.add(this),Qp||(Qp=!0,fe.read(Ib),fe.resolveKeyframes(Zb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:a,name:o,element:c,motionValue:u}=this;if(a[0]===null){const m=u?.get(),g=a[a.length-1];if(m!==void 0)a[0]=m;else if(c&&o){const x=c.readValue(o,g);x!=null&&(a[0]=x)}a[0]===void 0&&(a[0]=g),u&&m===void 0&&u.set(a[0])}OT(a)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(a=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,a),co.delete(this)}cancel(){this.state==="scheduled"&&(co.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const UT=n=>n.startsWith("--");function ZT(n,a,o){UT(a)?n.style.setProperty(a,o):n.style[a]=o}const IT=Rg(()=>window.ScrollTimeline!==void 0),GT={};function qT(n,a){const o=Rg(n);return()=>GT[a]??o()}const Gb=qT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),oc=([n,a,o,c])=>`cubic-bezier(${n}, ${a}, ${o}, ${c})`,_x={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:oc([0,.65,.55,1]),circOut:oc([.55,0,1,.45]),backIn:oc([.31,.01,.66,-.59]),backOut:oc([.33,1.53,.69,.99])};function qb(n,a){if(n)return typeof n=="function"?Gb()?Vb(n,a):"ease-out":Ab(n)?oc(n):Array.isArray(n)?n.map(o=>qb(o,a)||_x.easeOut):_x[n]}function YT(n,a,o,{delay:c=0,duration:u=300,repeat:m=0,repeatType:g="loop",ease:x="easeOut",times:y}={},_=void 0){const T={[a]:o};y&&(T.offset=y);const C=qb(x,u);Array.isArray(C)&&(T.easing=C);const A={delay:c,duration:u,easing:Array.isArray(C)?"linear":C,fill:"both",iterations:m+1,direction:g==="reverse"?"alternate":"normal"};return _&&(A.pseudoElement=_),n.animate(T,A)}function Yb(n){return typeof n=="function"&&"applyToOptions"in n}function FT({type:n,...a}){return Yb(n)&&Gb()?n.applyToOptions(a):(a.duration??(a.duration=300),a.ease??(a.ease="easeOut"),a)}class $T extends Gg{constructor(a){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!a)return;const{element:o,name:c,keyframes:u,pseudoElement:m,allowFlatten:g=!1,finalKeyframe:x,onComplete:y}=a;this.isPseudoElement=!!m,this.allowFlatten=g,this.options=a,Dg(typeof a.type!="string");const _=FT(a);this.animation=YT(o,c,u,_,m),_.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!m){const T=Ig(u,this.options,x,this.speed);this.updateMotionValue?this.updateMotionValue(T):ZT(o,c,T),this.animation.cancel()}y?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:a}=this;a==="idle"||a==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const a=this.animation.effect?.getComputedTiming?.().duration||0;return Qn(Number(a))}get iterationDuration(){const{delay:a=0}=this.options||{};return this.duration+Qn(a)}get time(){return Qn(Number(this.animation.currentTime)||0)}set time(a){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=pa(a)}get speed(){return this.animation.playbackRate}set speed(a){a<0&&(this.finishedTime=null),this.animation.playbackRate=a}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(a){this.manualStartTime=this.animation.startTime=a}attachTimeline({timeline:a,observe:o}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,a&&IT()?(this.animation.timeline=a,Wn):o(this)}}const Fb={anticipate:Tb,backInOut:Sb,circInOut:jb};function XT(n){return n in Fb}function KT(n){typeof n.ease=="string"&&XT(n.ease)&&(n.ease=Fb[n.ease])}const Km=10;class QT extends $T{constructor(a){KT(a),Ub(a),super(a),a.startTime!==void 0&&(this.startTime=a.startTime),this.options=a}updateMotionValue(a){const{motionValue:o,onUpdate:c,onComplete:u,element:m,...g}=this.options;if(!o)return;if(a!==void 0){o.set(a);return}const x=new qg({...g,autoplay:!1}),y=Math.max(Km,ln.now()-this.startTime),_=Pi(0,Km,y-Km);o.setWithVelocity(x.sample(Math.max(0,y-_)).value,x.sample(y).value,_),x.stop()}}const bx=(n,a)=>a==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(dr.test(n)||n==="0")&&!n.startsWith("url("));function WT(n){const a=n[0];if(n.length===1)return!0;for(let o=0;o<n.length;o++)if(n[o]!==a)return!0}function JT(n,a,o,c){const u=n[0];if(u===null)return!1;if(a==="display"||a==="visibility")return!0;const m=n[n.length-1],g=bx(u,a),x=bx(m,a);return!g||!x?!1:WT(n)||(o==="spring"||Yb(o))&&c}function tg(n){n.duration=0,n.type="keyframes"}const tC=new Set(["opacity","clipPath","filter","transform"]),eC=Rg(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function nC(n){const{motionValue:a,name:o,repeatDelay:c,repeatType:u,damping:m,type:g}=n;if(!(a?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:y,transformTemplate:_}=a.owner.getProps();return eC()&&o&&tC.has(o)&&(o!=="transform"||!_)&&!y&&!c&&u!=="mirror"&&m!==0&&g!=="inertia"}const iC=40;class aC extends Gg{constructor({autoplay:a=!0,delay:o=0,type:c="keyframes",repeat:u=0,repeatDelay:m=0,repeatType:g="loop",keyframes:x,name:y,motionValue:_,element:T,...C}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=ln.now();const A={autoplay:a,delay:o,type:c,repeat:u,repeatDelay:m,repeatType:g,name:y,motionValue:_,element:T,...C},O=T?.KeyframeResolver||Yg;this.keyframeResolver=new O(x,(R,P,I)=>this.onKeyframesResolved(R,P,A,!I),y,_,T),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(a,o,c,u){this.keyframeResolver=void 0;const{name:m,type:g,velocity:x,delay:y,isHandoff:_,onUpdate:T}=c;this.resolvedAt=ln.now(),JT(a,m,g,x)||((va.instantAnimations||!y)&&T?.(Ig(a,c,o)),a[0]=a[a.length-1],tg(c),c.repeat=0);const A={startTime:u?this.resolvedAt?this.resolvedAt-this.createdAt>iC?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...c,keyframes:a},O=!_&&nC(A),R=A.motionValue?.owner?.current,P=O?new QT({...A,element:R}):new qg(A);P.finished.then(()=>{this.notifyFinished()}).catch(Wn),this.pendingTimeline&&(this.stopTimeline=P.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=P}get finished(){return this._animation?this.animation.finished:this._finished}then(a,o){return this.finished.finally(a).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),HT()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(a){this.animation.time=a}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(a){this.animation.speed=a}get startTime(){return this.animation.startTime}attachTimeline(a){return this._animation?this.stopTimeline=this.animation.attachTimeline(a):this.pendingTimeline=a,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function $b(n,a,o,c=0,u=1){const m=Array.from(n).sort((_,T)=>_.sortNodePosition(T)).indexOf(a),g=n.size,x=(g-1)*c;return typeof o=="function"?o(m,g):u===1?m*c:x-m*c}const rC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function oC(n){const a=rC.exec(n);if(!a)return[,];const[,o,c,u]=a;return[`--${o??c}`,u]}function Xb(n,a,o=1){const[c,u]=oC(n);if(!c)return;const m=window.getComputedStyle(a).getPropertyValue(c);if(m){const g=m.trim();return pb(g)?parseFloat(g):g}return Ng(u)?Xb(u,a,o+1):u}const sC={type:"spring",stiffness:500,damping:25,restSpeed:10},lC=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),cC={type:"keyframes",duration:.8},uC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},dC=(n,{keyframes:a})=>a.length>2?cC:ks.has(n)?n.startsWith("scale")?lC(a[1]):sC:uC,fC=n=>n!==null;function hC(n,{repeat:a,repeatType:o="loop"},c){const u=n.filter(fC),m=a&&o!=="loop"&&a%2===1?0:u.length-1;return u[m]}function Fg(n,a){return n?.[a]??n?.default??n}function mC({when:n,delay:a,delayChildren:o,staggerChildren:c,staggerDirection:u,repeat:m,repeatType:g,repeatDelay:x,from:y,elapsed:_,...T}){return!!Object.keys(T).length}const $g=(n,a,o,c={},u,m)=>g=>{const x=Fg(c,n)||{},y=x.delay||c.delay||0;let{elapsed:_=0}=c;_=_-pa(y);const T={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:a.getVelocity(),...x,delay:-_,onUpdate:A=>{a.set(A),x.onUpdate&&x.onUpdate(A)},onComplete:()=>{g(),x.onComplete&&x.onComplete()},name:n,motionValue:a,element:m?void 0:u};mC(x)||Object.assign(T,dC(n,T)),T.duration&&(T.duration=pa(T.duration)),T.repeatDelay&&(T.repeatDelay=pa(T.repeatDelay)),T.from!==void 0&&(T.keyframes[0]=T.from);let C=!1;if((T.type===!1||T.duration===0&&!T.repeatDelay)&&(tg(T),T.delay===0&&(C=!0)),(va.instantAnimations||va.skipAnimations)&&(C=!0,tg(T),T.delay=0),T.allowFlatten=!x.type&&!x.ease,C&&!m&&a.get()!==void 0){const A=hC(T.keyframes,x);if(A!==void 0){fe.update(()=>{T.onUpdate(A),T.onComplete()});return}}return x.isSync?new qg(T):new aC(T)};function wx(n){const a=[{},{}];return n?.values.forEach((o,c)=>{a[0][c]=o.get(),a[1][c]=o.getVelocity()}),a}function Xg(n,a,o,c){if(typeof a=="function"){const[u,m]=wx(c);a=a(o!==void 0?o:n.custom,u,m)}if(typeof a=="string"&&(a=n.variants&&n.variants[a]),typeof a=="function"){const[u,m]=wx(c);a=a(o!==void 0?o:n.custom,u,m)}return a}function ys(n,a,o){const c=n.getProps();return Xg(c,a,o!==void 0?o:c.custom,n)}const Kb=new Set(["width","height","top","left","right","bottom",...Rs]),Sx=30,pC=n=>!isNaN(parseFloat(n));class gC{constructor(a,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=c=>{const u=ln.now();if(this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(c),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const m of this.dependents)m.dirty()},this.hasAnimated=!1,this.setCurrent(a),this.owner=o.owner}setCurrent(a){this.current=a,this.updatedAt=ln.now(),this.canTrackVelocity===null&&a!==void 0&&(this.canTrackVelocity=pC(this.current))}setPrevFrameValue(a=this.current){this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt}onChange(a){return this.on("change",a)}on(a,o){this.events[a]||(this.events[a]=new kg);const c=this.events[a].add(o);return a==="change"?()=>{c(),fe.read(()=>{this.events.change.getSize()||this.stop()})}:c}clearListeners(){for(const a in this.events)this.events[a].clear()}attach(a,o){this.passiveEffect=a,this.stopPassiveEffect=o}set(a){this.passiveEffect?this.passiveEffect(a,this.updateAndNotify):this.updateAndNotify(a)}setWithVelocity(a,o,c){this.set(o),this.prev=void 0,this.prevFrameValue=a,this.prevUpdatedAt=this.updatedAt-c}jump(a,o=!0){this.updateAndNotify(a),this.prev=a,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(a){this.dependents||(this.dependents=new Set),this.dependents.add(a)}removeDependent(a){this.dependents&&this.dependents.delete(a)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const a=ln.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||a-this.updatedAt>Sx)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,Sx);return yb(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(a){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=a(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function js(n,a){return new gC(n,a)}const eg=n=>Array.isArray(n);function vC(n,a,o){n.hasValue(a)?n.getValue(a).set(o):n.addValue(a,js(o))}function yC(n){return eg(n)?n[n.length-1]||0:n}function xC(n,a){const o=ys(n,a);let{transitionEnd:c={},transition:u={},...m}=o||{};m={...m,...c};for(const g in m){const x=yC(m[g]);vC(n,g,x)}}const en=n=>!!(n&&n.getVelocity);function _C(n){return!!(en(n)&&n.add)}function ng(n,a){const o=n.getValue("willChange");if(_C(o))return o.add(a);if(!o&&va.WillChange){const c=new va.WillChange("auto");n.addValue("willChange",c),c.add(a)}}function Kg(n){return n.replace(/([A-Z])/g,a=>`-${a.toLowerCase()}`)}const bC="framerAppearId",Qb="data-"+Kg(bC);function Wb(n){return n.props[Qb]}function wC({protectedKeys:n,needsAnimating:a},o){const c=n.hasOwnProperty(o)&&a[o]!==!0;return a[o]=!1,c}function Jb(n,a,{delay:o=0,transitionOverride:c,type:u}={}){let{transition:m=n.getDefaultTransition(),transitionEnd:g,...x}=a;c&&(m=c);const y=[],_=u&&n.animationState&&n.animationState.getState()[u];for(const T in x){const C=n.getValue(T,n.latestValues[T]??null),A=x[T];if(A===void 0||_&&wC(_,T))continue;const O={delay:o,...Fg(m||{},T)},R=C.get();if(R!==void 0&&!C.isAnimating&&!Array.isArray(A)&&A===R&&!O.velocity)continue;let P=!1;if(window.MotionHandoffAnimation){const D=Wb(n);if(D){const M=window.MotionHandoffAnimation(D,T,fe);M!==null&&(O.startTime=M,P=!0)}}ng(n,T),C.start($g(T,C,A,n.shouldReduceMotion&&Kb.has(T)?{type:!1}:O,n,P));const I=C.animation;I&&y.push(I)}return g&&Promise.all(y).then(()=>{fe.update(()=>{g&&xC(n,g)})}),y}function ig(n,a,o={}){const c=ys(n,a,o.type==="exit"?n.presenceContext?.custom:void 0);let{transition:u=n.getDefaultTransition()||{}}=c||{};o.transitionOverride&&(u=o.transitionOverride);const m=c?()=>Promise.all(Jb(n,c,o)):()=>Promise.resolve(),g=n.variantChildren&&n.variantChildren.size?(y=0)=>{const{delayChildren:_=0,staggerChildren:T,staggerDirection:C}=u;return SC(n,a,y,_,T,C,o)}:()=>Promise.resolve(),{when:x}=u;if(x){const[y,_]=x==="beforeChildren"?[m,g]:[g,m];return y().then(()=>_())}else return Promise.all([m(),g(o.delay)])}function SC(n,a,o=0,c=0,u=0,m=1,g){const x=[];for(const y of n.variantChildren)y.notify("AnimationStart",a),x.push(ig(y,a,{...g,delay:o+(typeof c=="function"?0:c)+$b(n.variantChildren,y,c,u,m)}).then(()=>y.notify("AnimationComplete",a)));return Promise.all(x)}function TC(n,a,o={}){n.notify("AnimationStart",a);let c;if(Array.isArray(a)){const u=a.map(m=>ig(n,m,o));c=Promise.all(u)}else if(typeof a=="string")c=ig(n,a,o);else{const u=typeof a=="function"?ys(n,a,o.custom):a;c=Promise.all(Jb(n,u,o))}return c.then(()=>{n.notify("AnimationComplete",a)})}const CC={test:n=>n==="auto",parse:n=>n},t5=n=>a=>a.test(n),e5=[Ds,yt,Bi,rr,W8,Q8,CC],Tx=n=>e5.find(t5(n));function jC(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||vb(n):!0}const EC=new Set(["brightness","contrast","saturate","opacity"]);function AC(n){const[a,o]=n.slice(0,-1).split("(");if(a==="drop-shadow")return n;const[c]=o.match(Vg)||[];if(!c)return n;const u=o.replace(c,"");let m=EC.has(a)?1:0;return c!==o&&(m*=100),a+"("+m+u+")"}const MC=/\b([a-z-]*)\(.*?\)/gu,ag={...dr,getAnimatableNone:n=>{const a=n.match(MC);return a?a.map(AC).join(" "):n}},Cx={...Ds,transform:Math.round},zC={rotate:rr,rotateX:rr,rotateY:rr,rotateZ:rr,scale:bd,scaleX:bd,scaleY:bd,scaleZ:bd,skew:rr,skewX:rr,skewY:rr,distance:yt,translateX:yt,translateY:yt,translateZ:yt,x:yt,y:yt,z:yt,perspective:yt,transformPerspective:yt,opacity:Tc,originX:dx,originY:dx,originZ:yt},Qg={borderWidth:yt,borderTopWidth:yt,borderRightWidth:yt,borderBottomWidth:yt,borderLeftWidth:yt,borderRadius:yt,radius:yt,borderTopLeftRadius:yt,borderTopRightRadius:yt,borderBottomRightRadius:yt,borderBottomLeftRadius:yt,width:yt,maxWidth:yt,height:yt,maxHeight:yt,top:yt,right:yt,bottom:yt,left:yt,inset:yt,insetBlock:yt,insetBlockStart:yt,insetBlockEnd:yt,insetInline:yt,insetInlineStart:yt,insetInlineEnd:yt,padding:yt,paddingTop:yt,paddingRight:yt,paddingBottom:yt,paddingLeft:yt,paddingBlock:yt,paddingBlockStart:yt,paddingBlockEnd:yt,paddingInline:yt,paddingInlineStart:yt,paddingInlineEnd:yt,margin:yt,marginTop:yt,marginRight:yt,marginBottom:yt,marginLeft:yt,marginBlock:yt,marginBlockStart:yt,marginBlockEnd:yt,marginInline:yt,marginInlineStart:yt,marginInlineEnd:yt,backgroundPositionX:yt,backgroundPositionY:yt,...zC,zIndex:Cx,fillOpacity:Tc,strokeOpacity:Tc,numOctaves:Cx},LC={...Qg,color:De,backgroundColor:De,outlineColor:De,fill:De,stroke:De,borderColor:De,borderTopColor:De,borderRightColor:De,borderBottomColor:De,borderLeftColor:De,filter:ag,WebkitFilter:ag},n5=n=>LC[n];function i5(n,a){let o=n5(n);return o!==ag&&(o=dr),o.getAnimatableNone?o.getAnimatableNone(a):void 0}const OC=new Set(["auto","none","0"]);function DC(n,a,o){let c=0,u;for(;c<n.length&&!u;){const m=n[c];typeof m=="string"&&!OC.has(m)&&Cc(m).values.length&&(u=n[c]),c++}if(u&&o)for(const m of a)n[m]=i5(o,u)}class RC extends Yg{constructor(a,o,c,u,m){super(a,o,c,u,m,!0)}readKeyframes(){const{unresolvedKeyframes:a,element:o,name:c}=this;if(!o||!o.current)return;super.readKeyframes();for(let T=0;T<a.length;T++){let C=a[T];if(typeof C=="string"&&(C=C.trim(),Ng(C))){const A=Xb(C,o.current);A!==void 0&&(a[T]=A),T===a.length-1&&(this.finalKeyframe=C)}}if(this.resolveNoneKeyframes(),!Kb.has(c)||a.length!==2)return;const[u,m]=a,g=Tx(u),x=Tx(m),y=ux(u),_=ux(m);if(y!==_&&sr[c]){this.needsMeasurement=!0;return}if(g!==x)if(xx(g)&&xx(x))for(let T=0;T<a.length;T++){const C=a[T];typeof C=="string"&&(a[T]=parseFloat(C))}else sr[c]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:a,name:o}=this,c=[];for(let u=0;u<a.length;u++)(a[u]===null||jC(a[u]))&&c.push(u);c.length&&DC(a,c,o)}measureInitialState(){const{element:a,unresolvedKeyframes:o,name:c}=this;if(!a||!a.current)return;c==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=sr[c](a.measureViewportBox(),window.getComputedStyle(a.current)),o[0]=this.measuredOrigin;const u=o[o.length-1];u!==void 0&&a.getValue(c,u).jump(u,!1)}measureEndState(){const{element:a,name:o,unresolvedKeyframes:c}=this;if(!a||!a.current)return;const u=a.getValue(o);u&&u.jump(this.measuredOrigin,!1);const m=c.length-1,g=c[m];c[m]=sr[o](a.measureViewportBox(),window.getComputedStyle(a.current)),g!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=g),this.removedTransforms?.length&&this.removedTransforms.forEach(([x,y])=>{a.getValue(x).set(y)}),this.resolveNoneKeyframes()}}function kC(n,a,o){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let c=document;const u=o?.[n]??c.querySelectorAll(n);return u?Array.from(u):[]}return Array.from(n).filter(c=>c!=null)}const a5=(n,a)=>a&&typeof n=="number"?a.transform(n):n;function rg(n){return gb(n)&&"offsetHeight"in n}const{schedule:Wg}=Mb(queueMicrotask,!1),hi={x:!1,y:!1};function r5(){return hi.x||hi.y}function BC(n){return n==="x"||n==="y"?hi[n]?null:(hi[n]=!0,()=>{hi[n]=!1}):hi.x||hi.y?null:(hi.x=hi.y=!0,()=>{hi.x=hi.y=!1})}function o5(n,a){const o=kC(n),c=new AbortController,u={passive:!0,...a,signal:c.signal};return[o,u,()=>c.abort()]}function jx(n){return!(n.pointerType==="touch"||r5())}function PC(n,a,o={}){const[c,u,m]=o5(n,o),g=x=>{if(!jx(x))return;const{target:y}=x,_=a(y,x);if(typeof _!="function"||!y)return;const T=C=>{jx(C)&&(_(C),y.removeEventListener("pointerleave",T))};y.addEventListener("pointerleave",T,u)};return c.forEach(x=>{x.addEventListener("pointerenter",g,u)}),m}const s5=(n,a)=>a?n===a?!0:s5(n,a.parentElement):!1,Jg=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,NC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function l5(n){return NC.has(n.tagName)||n.isContentEditable===!0}const Vd=new WeakSet;function Ex(n){return a=>{a.key==="Enter"&&n(a)}}function Qm(n,a){n.dispatchEvent(new PointerEvent("pointer"+a,{isPrimary:!0,bubbles:!0}))}const VC=(n,a)=>{const o=n.currentTarget;if(!o)return;const c=Ex(()=>{if(Vd.has(o))return;Qm(o,"down");const u=Ex(()=>{Qm(o,"up")}),m=()=>Qm(o,"cancel");o.addEventListener("keyup",u,a),o.addEventListener("blur",m,a)});o.addEventListener("keydown",c,a),o.addEventListener("blur",()=>o.removeEventListener("keydown",c),a)};function Ax(n){return Jg(n)&&!r5()}function HC(n,a,o={}){const[c,u,m]=o5(n,o),g=x=>{const y=x.currentTarget;if(!Ax(x))return;Vd.add(y);const _=a(y,x),T=(O,R)=>{window.removeEventListener("pointerup",C),window.removeEventListener("pointercancel",A),Vd.has(y)&&Vd.delete(y),Ax(O)&&typeof _=="function"&&_(O,{success:R})},C=O=>{T(O,y===window||y===document||o.useGlobalTarget||s5(y,O.target))},A=O=>{T(O,!1)};window.addEventListener("pointerup",C,u),window.addEventListener("pointercancel",A,u)};return c.forEach(x=>{(o.useGlobalTarget?window:x).addEventListener("pointerdown",g,u),rg(x)&&(x.addEventListener("focus",_=>VC(_,u)),!l5(x)&&!x.hasAttribute("tabindex")&&(x.tabIndex=0))}),m}function c5(n){return gb(n)&&"ownerSVGElement"in n}function UC(n){return c5(n)&&n.tagName==="svg"}const ZC=[...e5,De,dr],IC=n=>ZC.find(t5(n)),Mx=()=>({translate:0,scale:1,origin:0,originPoint:0}),us=()=>({x:Mx(),y:Mx()}),zx=()=>({min:0,max:0}),Ve=()=>({x:zx(),y:zx()}),og={current:null},u5={current:!1},GC=typeof window<"u";function qC(){if(u5.current=!0,!!GC)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),a=()=>og.current=n.matches;n.addEventListener("change",a),a()}else og.current=!1}const YC=new WeakMap;function Sf(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function jc(n){return typeof n=="string"||Array.isArray(n)}const t0=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],e0=["initial",...t0];function Tf(n){return Sf(n.animate)||e0.some(a=>jc(n[a]))}function d5(n){return!!(Tf(n)||n.variants)}function FC(n,a,o){for(const c in a){const u=a[c],m=o[c];if(en(u))n.addValue(c,u);else if(en(m))n.addValue(c,js(u,{owner:n}));else if(m!==u)if(n.hasValue(c)){const g=n.getValue(c);g.liveStyle===!0?g.jump(u):g.hasAnimated||g.set(u)}else{const g=n.getStaticValue(c);n.addValue(c,js(g!==void 0?g:u,{owner:n}))}}for(const c in o)a[c]===void 0&&n.removeValue(c);return a}const Lx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let lf={};function f5(n){lf=n}function $C(){return lf}class XC{scrapeMotionValuesFromProps(a,o,c){return{}}constructor({parent:a,props:o,presenceContext:c,reducedMotionConfig:u,blockInitialAnimation:m,visualState:g},x={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Yg,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const A=ln.now();this.renderScheduledAt<A&&(this.renderScheduledAt=A,fe.render(this.render,!1,!0))};const{latestValues:y,renderState:_}=g;this.latestValues=y,this.baseTarget={...y},this.initialValues=o.initial?{...y}:{},this.renderState=_,this.parent=a,this.props=o,this.presenceContext=c,this.depth=a?a.depth+1:0,this.reducedMotionConfig=u,this.options=x,this.blockInitialAnimation=!!m,this.isControllingVariants=Tf(o),this.isVariantNode=d5(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(a&&a.current);const{willChange:T,...C}=this.scrapeMotionValuesFromProps(o,{},this);for(const A in C){const O=C[A];y[A]!==void 0&&en(O)&&O.set(y[A])}}mount(a){this.current=a,YC.set(a,this),this.projection&&!this.projection.instance&&this.projection.mount(a),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,c)=>this.bindToMotionValue(c,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(u5.current||qC(),this.shouldReduceMotion=og.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),ur(this.notifyUpdate),ur(this.render),this.valueSubscriptions.forEach(a=>a()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const a in this.events)this.events[a].clear();for(const a in this.features){const o=this.features[a];o&&(o.unmount(),o.isMounted=!1)}this.current=null}addChild(a){this.children.add(a),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(a)}removeChild(a){this.children.delete(a),this.enteringChildren&&this.enteringChildren.delete(a)}bindToMotionValue(a,o){this.valueSubscriptions.has(a)&&this.valueSubscriptions.get(a)();const c=ks.has(a);c&&this.onBindTransform&&this.onBindTransform();const u=o.on("change",g=>{this.latestValues[a]=g,this.props.onUpdate&&fe.preRender(this.notifyUpdate),c&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let m;typeof window<"u"&&window.MotionCheckAppearSync&&(m=window.MotionCheckAppearSync(this,a,o)),this.valueSubscriptions.set(a,()=>{u(),m&&m(),o.owner&&o.stop()})}sortNodePosition(a){return!this.current||!this.sortInstanceNodePosition||this.type!==a.type?0:this.sortInstanceNodePosition(this.current,a.current)}updateFeatures(){let a="animation";for(a in lf){const o=lf[a];if(!o)continue;const{isEnabled:c,Feature:u}=o;if(!this.features[a]&&u&&c(this.props)&&(this.features[a]=new u(this)),this.features[a]){const m=this.features[a];m.isMounted?m.update():(m.mount(),m.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ve()}getStaticValue(a){return this.latestValues[a]}setStaticValue(a,o){this.latestValues[a]=o}update(a,o){(a.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=a,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let c=0;c<Lx.length;c++){const u=Lx[c];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const m="on"+u,g=a[m];g&&(this.propEventSubscriptions[u]=this.on(u,g))}this.prevMotionValues=FC(this,this.scrapeMotionValuesFromProps(a,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(a){return this.props.variants?this.props.variants[a]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(a){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(a),()=>o.variantChildren.delete(a)}addValue(a,o){const c=this.values.get(a);o!==c&&(c&&this.removeValue(a),this.bindToMotionValue(a,o),this.values.set(a,o),this.latestValues[a]=o.get())}removeValue(a){this.values.delete(a);const o=this.valueSubscriptions.get(a);o&&(o(),this.valueSubscriptions.delete(a)),delete this.latestValues[a],this.removeValueFromRenderState(a,this.renderState)}hasValue(a){return this.values.has(a)}getValue(a,o){if(this.props.values&&this.props.values[a])return this.props.values[a];let c=this.values.get(a);return c===void 0&&o!==void 0&&(c=js(o===null?void 0:o,{owner:this}),this.addValue(a,c)),c}readValue(a,o){let c=this.latestValues[a]!==void 0||!this.current?this.latestValues[a]:this.getBaseTargetFromProps(this.props,a)??this.readValueFromInstance(this.current,a,this.options);return c!=null&&(typeof c=="string"&&(pb(c)||vb(c))?c=parseFloat(c):!IC(c)&&dr.test(o)&&(c=i5(a,o)),this.setBaseTarget(a,en(c)?c.get():c)),en(c)?c.get():c}setBaseTarget(a,o){this.baseTarget[a]=o}getBaseTarget(a){const{initial:o}=this.props;let c;if(typeof o=="string"||typeof o=="object"){const m=Xg(this.props,o,this.presenceContext?.custom);m&&(c=m[a])}if(o&&c!==void 0)return c;const u=this.getBaseTargetFromProps(this.props,a);return u!==void 0&&!en(u)?u:this.initialValues[a]!==void 0&&c===void 0?void 0:this.baseTarget[a]}on(a,o){return this.events[a]||(this.events[a]=new kg),this.events[a].add(o)}notify(a,...o){this.events[a]&&this.events[a].notify(...o)}scheduleRenderMicrotask(){Wg.render(this.render)}}class h5 extends XC{constructor(){super(...arguments),this.KeyframeResolver=RC}sortInstanceNodePosition(a,o){return a.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(a,o){const c=a.style;return c?c[o]:void 0}removeValueFromRenderState(a,{vars:o,style:c}){delete o[a],delete c[a]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:a}=this.props;en(a)&&(this.childSubscription=a.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}class fr{constructor(a){this.isMounted=!1,this.node=a}update(){}}function m5({top:n,left:a,right:o,bottom:c}){return{x:{min:a,max:o},y:{min:n,max:c}}}function KC({x:n,y:a}){return{top:a.min,right:n.max,bottom:a.max,left:n.min}}function QC(n,a){if(!a)return n;const o=a({x:n.left,y:n.top}),c=a({x:n.right,y:n.bottom});return{top:o.y,left:o.x,bottom:c.y,right:c.x}}function Wm(n){return n===void 0||n===1}function sg({scale:n,scaleX:a,scaleY:o}){return!Wm(n)||!Wm(a)||!Wm(o)}function ao(n){return sg(n)||p5(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function p5(n){return Ox(n.x)||Ox(n.y)}function Ox(n){return n&&n!=="0%"}function cf(n,a,o){const c=n-o,u=a*c;return o+u}function Dx(n,a,o,c,u){return u!==void 0&&(n=cf(n,u,c)),cf(n,o,c)+a}function lg(n,a=0,o=1,c,u){n.min=Dx(n.min,a,o,c,u),n.max=Dx(n.max,a,o,c,u)}function g5(n,{x:a,y:o}){lg(n.x,a.translate,a.scale,a.originPoint),lg(n.y,o.translate,o.scale,o.originPoint)}const Rx=.999999999999,kx=1.0000000000001;function WC(n,a,o,c=!1){const u=o.length;if(!u)return;a.x=a.y=1;let m,g;for(let x=0;x<u;x++){m=o[x],g=m.projectionDelta;const{visualElement:y}=m.options;y&&y.props.style&&y.props.style.display==="contents"||(c&&m.options.layoutScroll&&m.scroll&&m!==m.root&&fs(n,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),g&&(a.x*=g.x.scale,a.y*=g.y.scale,g5(n,g)),c&&ao(m.latestValues)&&fs(n,m.latestValues))}a.x<kx&&a.x>Rx&&(a.x=1),a.y<kx&&a.y>Rx&&(a.y=1)}function ds(n,a){n.min=n.min+a,n.max=n.max+a}function Bx(n,a,o,c,u=.5){const m=ye(n.min,n.max,u);lg(n,a,o,m,c)}function fs(n,a){Bx(n.x,a.x,a.scaleX,a.scale,a.originX),Bx(n.y,a.y,a.scaleY,a.scale,a.originY)}function v5(n,a){return m5(QC(n.getBoundingClientRect(),a))}function JC(n,a,o){const c=v5(n,o),{scroll:u}=a;return u&&(ds(c.x,u.offset.x),ds(c.y,u.offset.y)),c}const tj={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ej=Rs.length;function nj(n,a,o){let c="",u=!0;for(let m=0;m<ej;m++){const g=Rs[m],x=n[g];if(x===void 0)continue;let y=!0;if(typeof x=="number")y=x===(g.startsWith("scale")?1:0);else{const _=parseFloat(x);y=g.startsWith("scale")?_===1:_===0}if(!y||o){const _=a5(x,Qg[g]);if(!y){u=!1;const T=tj[g]||g;c+=`${T}(${_}) `}o&&(a[g]=_)}}return c=c.trim(),o?c=o(a,u?"":c):u&&(c="none"),c}function n0(n,a,o){const{style:c,vars:u,transformOrigin:m}=n;let g=!1,x=!1;for(const y in a){const _=a[y];if(ks.has(y)){g=!0;continue}else if(Lb(y)){u[y]=_;continue}else{const T=a5(_,Qg[y]);y.startsWith("origin")?(x=!0,m[y]=T):c[y]=T}}if(a.transform||(g||o?c.transform=nj(a,n.transform,o):c.transform&&(c.transform="none")),x){const{originX:y="50%",originY:_="50%",originZ:T=0}=m;c.transformOrigin=`${y} ${_} ${T}`}}function y5(n,{style:a,vars:o},c,u){const m=n.style;let g;for(g in a)m[g]=a[g];u?.applyProjectionStyles(m,c);for(g in o)m.setProperty(g,o[g])}function Px(n,a){return a.max===a.min?0:n/(a.max-a.min)*100}const Xl={correct:(n,a)=>{if(!a.target)return n;if(typeof n=="string")if(yt.test(n))n=parseFloat(n);else return n;const o=Px(n,a.target.x),c=Px(n,a.target.y);return`${o}% ${c}%`}},ij={correct:(n,{treeScale:a,projectionDelta:o})=>{const c=n,u=dr.parse(n);if(u.length>5)return c;const m=dr.createTransformer(n),g=typeof u[0]!="number"?1:0,x=o.x.scale*a.x,y=o.y.scale*a.y;u[0+g]/=x,u[1+g]/=y;const _=ye(x,y,.5);return typeof u[2+g]=="number"&&(u[2+g]/=_),typeof u[3+g]=="number"&&(u[3+g]/=_),m(u)}},cg={borderRadius:{...Xl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Xl,borderTopRightRadius:Xl,borderBottomLeftRadius:Xl,borderBottomRightRadius:Xl,boxShadow:ij};function x5(n,{layout:a,layoutId:o}){return ks.has(n)||n.startsWith("origin")||(a||o!==void 0)&&(!!cg[n]||n==="opacity")}function i0(n,a,o){const c=n.style,u=a?.style,m={};if(!c)return m;for(const g in c)(en(c[g])||u&&en(u[g])||x5(g,n)||o?.getValue(g)?.liveStyle!==void 0)&&(m[g]=c[g]);return m}function aj(n){return window.getComputedStyle(n)}class rj extends h5{constructor(){super(...arguments),this.type="html",this.renderInstance=y5}readValueFromInstance(a,o){if(ks.has(o))return this.projection?.isProjecting?Xp(o):kT(a,o);{const c=aj(a),u=(Lb(o)?c.getPropertyValue(o):c[o])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(a,{transformPagePoint:o}){return v5(a,o)}build(a,o,c){n0(a,o,c.transformTemplate)}scrapeMotionValuesFromProps(a,o,c){return i0(a,o,c)}}const oj={offset:"stroke-dashoffset",array:"stroke-dasharray"},sj={offset:"strokeDashoffset",array:"strokeDasharray"};function lj(n,a,o=1,c=0,u=!0){n.pathLength=1;const m=u?oj:sj;n[m.offset]=`${-c}`,n[m.array]=`${a} ${o}`}const cj=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function _5(n,{attrX:a,attrY:o,attrScale:c,pathLength:u,pathSpacing:m=1,pathOffset:g=0,...x},y,_,T){if(n0(n,x,_),y){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:C,style:A}=n;C.transform&&(A.transform=C.transform,delete C.transform),(A.transform||C.transformOrigin)&&(A.transformOrigin=C.transformOrigin??"50% 50%",delete C.transformOrigin),A.transform&&(A.transformBox=T?.transformBox??"fill-box",delete C.transformBox);for(const O of cj)C[O]!==void 0&&(A[O]=C[O],delete C[O]);a!==void 0&&(C.x=a),o!==void 0&&(C.y=o),c!==void 0&&(C.scale=c),u!==void 0&&lj(C,u,m,g,!1)}const b5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),w5=n=>typeof n=="string"&&n.toLowerCase()==="svg";function uj(n,a,o,c){y5(n,a,void 0,c);for(const u in a.attrs)n.setAttribute(b5.has(u)?u:Kg(u),a.attrs[u])}function S5(n,a,o){const c=i0(n,a,o);for(const u in n)if(en(n[u])||en(a[u])){const m=Rs.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;c[m]=n[u]}return c}class dj extends h5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ve}getBaseTargetFromProps(a,o){return a[o]}readValueFromInstance(a,o){if(ks.has(o)){const c=n5(o);return c&&c.default||0}return o=b5.has(o)?o:Kg(o),a.getAttribute(o)}scrapeMotionValuesFromProps(a,o,c){return S5(a,o,c)}build(a,o,c){_5(a,o,this.isSVGTag,c.transformTemplate,c.style)}renderInstance(a,o,c,u){uj(a,o,c,u)}mount(a){this.isSVGTag=w5(a.tagName),super.mount(a)}}const fj=e0.length;function T5(n){if(!n)return;if(!n.isControllingVariants){const o=n.parent?T5(n.parent)||{}:{};return n.props.initial!==void 0&&(o.initial=n.props.initial),o}const a={};for(let o=0;o<fj;o++){const c=e0[o],u=n.props[c];(jc(u)||u===!1)&&(a[c]=u)}return a}function C5(n,a){if(!Array.isArray(a))return!1;const o=a.length;if(o!==n.length)return!1;for(let c=0;c<o;c++)if(a[c]!==n[c])return!1;return!0}const hj=[...t0].reverse(),mj=t0.length;function pj(n){return a=>Promise.all(a.map(({animation:o,options:c})=>TC(n,o,c)))}function gj(n){let a=pj(n),o=Nx(),c=!0;const u=y=>(_,T)=>{const C=ys(n,T,y==="exit"?n.presenceContext?.custom:void 0);if(C){const{transition:A,transitionEnd:O,...R}=C;_={..._,...R,...O}}return _};function m(y){a=y(n)}function g(y){const{props:_}=n,T=T5(n.parent)||{},C=[],A=new Set;let O={},R=1/0;for(let I=0;I<mj;I++){const D=hj[I],M=o[D],B=_[D]!==void 0?_[D]:T[D],Q=jc(B),tt=D===y?M.isActive:null;tt===!1&&(R=I);let ot=B===T[D]&&B!==_[D]&&Q;if(ot&&c&&n.manuallyAnimateOnMount&&(ot=!1),M.protectedKeys={...O},!M.isActive&&tt===null||!B&&!M.prevProp||Sf(B)||typeof B=="boolean")continue;const $=vj(M.prevProp,B);let lt=$||D===y&&M.isActive&&!ot&&Q||I>R&&Q,pt=!1;const gt=Array.isArray(B)?B:[B];let Tt=gt.reduce(u(D),{});tt===!1&&(Tt={});const{prevResolvedValues:at={}}=M,zt={...at,...Tt},Bt=st=>{lt=!0,A.has(st)&&(pt=!0,A.delete(st)),M.needsAnimating[st]=!0;const rt=n.getValue(st);rt&&(rt.liveStyle=!1)};for(const st in zt){const rt=Tt[st],Ct=at[st];if(O.hasOwnProperty(st))continue;let dt=!1;eg(rt)&&eg(Ct)?dt=!C5(rt,Ct):dt=rt!==Ct,dt?rt!=null?Bt(st):A.add(st):rt!==void 0&&A.has(st)?Bt(st):M.protectedKeys[st]=!0}M.prevProp=B,M.prevResolvedValues=Tt,M.isActive&&(O={...O,...Tt}),c&&n.blockInitialAnimation&&(lt=!1);const ge=ot&&$;lt&&(!ge||pt)&&C.push(...gt.map(st=>{const rt={type:D};if(typeof st=="string"&&c&&!ge&&n.manuallyAnimateOnMount&&n.parent){const{parent:Ct}=n,dt=ys(Ct,st);if(Ct.enteringChildren&&dt){const{delayChildren:V}=dt.transition||{};rt.delay=$b(Ct.enteringChildren,n,V)}}return{animation:st,options:rt}}))}if(A.size){const I={};if(typeof _.initial!="boolean"){const D=ys(n,Array.isArray(_.initial)?_.initial[0]:_.initial);D&&D.transition&&(I.transition=D.transition)}A.forEach(D=>{const M=n.getBaseTarget(D),B=n.getValue(D);B&&(B.liveStyle=!0),I[D]=M??null}),C.push({animation:I})}let P=!!C.length;return c&&(_.initial===!1||_.initial===_.animate)&&!n.manuallyAnimateOnMount&&(P=!1),c=!1,P?a(C):Promise.resolve()}function x(y,_){if(o[y].isActive===_)return Promise.resolve();n.variantChildren?.forEach(C=>C.animationState?.setActive(y,_)),o[y].isActive=_;const T=g(y);for(const C in o)o[C].protectedKeys={};return T}return{animateChanges:g,setActive:x,setAnimateFunction:m,getState:()=>o,reset:()=>{o=Nx()}}}function vj(n,a){return typeof a=="string"?a!==n:Array.isArray(a)?!C5(a,n):!1}function io(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Nx(){return{animate:io(!0),whileInView:io(),whileHover:io(),whileTap:io(),whileDrag:io(),whileFocus:io(),exit:io()}}function Vx(n,a){n.min=a.min,n.max=a.max}function fi(n,a){Vx(n.x,a.x),Vx(n.y,a.y)}function Hx(n,a){n.translate=a.translate,n.scale=a.scale,n.originPoint=a.originPoint,n.origin=a.origin}const j5=1e-4,yj=1-j5,xj=1+j5,E5=.01,_j=0-E5,bj=0+E5;function cn(n){return n.max-n.min}function wj(n,a,o){return Math.abs(n-a)<=o}function Ux(n,a,o,c=.5){n.origin=c,n.originPoint=ye(a.min,a.max,n.origin),n.scale=cn(o)/cn(a),n.translate=ye(o.min,o.max,n.origin)-n.originPoint,(n.scale>=yj&&n.scale<=xj||isNaN(n.scale))&&(n.scale=1),(n.translate>=_j&&n.translate<=bj||isNaN(n.translate))&&(n.translate=0)}function yc(n,a,o,c){Ux(n.x,a.x,o.x,c?c.originX:void 0),Ux(n.y,a.y,o.y,c?c.originY:void 0)}function Zx(n,a,o){n.min=o.min+a.min,n.max=n.min+cn(a)}function Sj(n,a,o){Zx(n.x,a.x,o.x),Zx(n.y,a.y,o.y)}function Ix(n,a,o){n.min=a.min-o.min,n.max=n.min+cn(a)}function uf(n,a,o){Ix(n.x,a.x,o.x),Ix(n.y,a.y,o.y)}function Gx(n,a,o,c,u){return n-=a,n=cf(n,1/o,c),u!==void 0&&(n=cf(n,1/u,c)),n}function Tj(n,a=0,o=1,c=.5,u,m=n,g=n){if(Bi.test(a)&&(a=parseFloat(a),a=ye(g.min,g.max,a/100)-g.min),typeof a!="number")return;let x=ye(m.min,m.max,c);n===m&&(x-=a),n.min=Gx(n.min,a,o,x,u),n.max=Gx(n.max,a,o,x,u)}function qx(n,a,[o,c,u],m,g){Tj(n,a[o],a[c],a[u],a.scale,m,g)}const Cj=["x","scaleX","originX"],jj=["y","scaleY","originY"];function Yx(n,a,o,c){qx(n.x,a,Cj,o?o.x:void 0,c?c.x:void 0),qx(n.y,a,jj,o?o.y:void 0,c?c.y:void 0)}function Fx(n){return n.translate===0&&n.scale===1}function A5(n){return Fx(n.x)&&Fx(n.y)}function $x(n,a){return n.min===a.min&&n.max===a.max}function Ej(n,a){return $x(n.x,a.x)&&$x(n.y,a.y)}function Xx(n,a){return Math.round(n.min)===Math.round(a.min)&&Math.round(n.max)===Math.round(a.max)}function M5(n,a){return Xx(n.x,a.x)&&Xx(n.y,a.y)}function Kx(n){return cn(n.x)/cn(n.y)}function Qx(n,a){return n.translate===a.translate&&n.scale===a.scale&&n.originPoint===a.originPoint}function Xn(n){return[n("x"),n("y")]}function Aj(n,a,o){let c="";const u=n.x.translate/a.x,m=n.y.translate/a.y,g=o?.z||0;if((u||m||g)&&(c=`translate3d(${u}px, ${m}px, ${g}px) `),(a.x!==1||a.y!==1)&&(c+=`scale(${1/a.x}, ${1/a.y}) `),o){const{transformPerspective:_,rotate:T,rotateX:C,rotateY:A,skewX:O,skewY:R}=o;_&&(c=`perspective(${_}px) ${c}`),T&&(c+=`rotate(${T}deg) `),C&&(c+=`rotateX(${C}deg) `),A&&(c+=`rotateY(${A}deg) `),O&&(c+=`skewX(${O}deg) `),R&&(c+=`skewY(${R}deg) `)}const x=n.x.scale*a.x,y=n.y.scale*a.y;return(x!==1||y!==1)&&(c+=`scale(${x}, ${y})`),c||"none"}const z5=["TopLeft","TopRight","BottomLeft","BottomRight"],Mj=z5.length,Wx=n=>typeof n=="string"?parseFloat(n):n,Jx=n=>typeof n=="number"||yt.test(n);function zj(n,a,o,c,u,m){u?(n.opacity=ye(0,o.opacity??1,Lj(c)),n.opacityExit=ye(a.opacity??1,0,Oj(c))):m&&(n.opacity=ye(a.opacity??1,o.opacity??1,c));for(let g=0;g<Mj;g++){const x=`border${z5[g]}Radius`;let y=t_(a,x),_=t_(o,x);if(y===void 0&&_===void 0)continue;y||(y=0),_||(_=0),y===0||_===0||Jx(y)===Jx(_)?(n[x]=Math.max(ye(Wx(y),Wx(_),c),0),(Bi.test(_)||Bi.test(y))&&(n[x]+="%")):n[x]=_}(a.rotate||o.rotate)&&(n.rotate=ye(a.rotate||0,o.rotate||0,c))}function t_(n,a){return n[a]!==void 0?n[a]:n.borderRadius}const Lj=L5(0,.5,Cb),Oj=L5(.5,.95,Wn);function L5(n,a,o){return c=>c<n?0:c>a?1:o(Sc(n,a,c))}function Dj(n,a,o){const c=en(n)?n:js(n);return c.start($g("",c,a,o)),c.animation}function Ec(n,a,o,c={passive:!0}){return n.addEventListener(a,o,c),()=>n.removeEventListener(a,o)}const Rj=(n,a)=>n.depth-a.depth;class kj{constructor(){this.children=[],this.isDirty=!1}add(a){Lg(this.children,a),this.isDirty=!0}remove(a){Og(this.children,a),this.isDirty=!0}forEach(a){this.isDirty&&this.children.sort(Rj),this.isDirty=!1,this.children.forEach(a)}}function Bj(n,a){const o=ln.now(),c=({timestamp:u})=>{const m=u-o;m>=a&&(ur(c),n(m-a))};return fe.setup(c,!0),()=>ur(c)}function Hd(n){return en(n)?n.get():n}class Pj{constructor(){this.members=[]}add(a){Lg(this.members,a),a.scheduleRender()}remove(a){if(Og(this.members,a),a===this.prevLead&&(this.prevLead=void 0),a===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(a){const o=this.members.findIndex(u=>a===u);if(o===0)return!1;let c;for(let u=o;u>=0;u--){const m=this.members[u];if(m.isPresent!==!1){c=m;break}}return c?(this.promote(c),!0):!1}promote(a,o){const c=this.lead;if(a!==c&&(this.prevLead=c,this.lead=a,a.show(),c)){c.instance&&c.scheduleRender(),a.scheduleRender(),a.resumeFrom=c,o&&(a.resumeFrom.preserveOpacity=!0),c.snapshot&&(a.snapshot=c.snapshot,a.snapshot.latestValues=c.animationValues||c.latestValues),a.root&&a.root.isUpdating&&(a.isLayoutDirty=!0);const{crossfade:u}=a.options;u===!1&&c.hide()}}exitAnimationComplete(){this.members.forEach(a=>{const{options:o,resumingFrom:c}=a;o.onExitComplete&&o.onExitComplete(),c&&c.options.onExitComplete&&c.options.onExitComplete()})}scheduleRender(){this.members.forEach(a=>{a.instance&&a.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const Ud={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Jm=["","X","Y","Z"],Nj=1e3;let Vj=0;function tp(n,a,o,c){const{latestValues:u}=a;u[n]&&(o[n]=u[n],a.setStaticValue(n,0),c&&(c[n]=0))}function O5(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:a}=n.options;if(!a)return;const o=Wb(a);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:u,layoutId:m}=n.options;window.MotionCancelOptimisedAnimation(o,"transform",fe,!(u||m))}const{parent:c}=n;c&&!c.hasCheckedOptimisedAppear&&O5(c)}function D5({attachResizeListener:n,defaultParent:a,measureScroll:o,checkIsScrollRoot:c,resetTransform:u}){return class{constructor(g={},x=a?.()){this.id=Vj++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Zj),this.nodes.forEach(Yj),this.nodes.forEach(Fj),this.nodes.forEach(Ij)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=g,this.root=x?x.root||x:this,this.path=x?[...x.path,x]:[],this.parent=x,this.depth=x?x.depth+1:0;for(let y=0;y<this.path.length;y++)this.path[y].shouldResetTransform=!0;this.root===this&&(this.nodes=new kj)}addEventListener(g,x){return this.eventHandlers.has(g)||this.eventHandlers.set(g,new kg),this.eventHandlers.get(g).add(x)}notifyListeners(g,...x){const y=this.eventHandlers.get(g);y&&y.notify(...x)}hasListeners(g){return this.eventHandlers.has(g)}mount(g){if(this.instance)return;this.isSVG=c5(g)&&!UC(g),this.instance=g;const{layoutId:x,layout:y,visualElement:_}=this.options;if(_&&!_.current&&_.mount(g),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(y||x)&&(this.isLayoutDirty=!0),n){let T,C=0;const A=()=>this.root.updateBlockedByResize=!1;fe.read(()=>{C=window.innerWidth}),n(g,()=>{const O=window.innerWidth;O!==C&&(C=O,this.root.updateBlockedByResize=!0,T&&T(),T=Bj(A,250),Ud.hasAnimatedSinceResize&&(Ud.hasAnimatedSinceResize=!1,this.nodes.forEach(i_)))})}x&&this.root.registerSharedNode(x,this),this.options.animate!==!1&&_&&(x||y)&&this.addEventListener("didUpdate",({delta:T,hasLayoutChanged:C,hasRelativeLayoutChanged:A,layout:O})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const R=this.options.transition||_.getDefaultTransition()||Wj,{onLayoutAnimationStart:P,onLayoutAnimationComplete:I}=_.getProps(),D=!this.targetLayout||!M5(this.targetLayout,O),M=!C&&A;if(this.options.layoutRoot||this.resumeFrom||M||C&&(D||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const B={...Fg(R,"layout"),onPlay:P,onComplete:I};(_.shouldReduceMotion||this.options.layoutRoot)&&(B.delay=0,B.type=!1),this.startAnimation(B),this.setAnimationOrigin(T,M)}else C||i_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=O})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const g=this.getStack();g&&g.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ur(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach($j),this.animationId++)}getTransformTemplate(){const{visualElement:g}=this.options;return g&&g.getProps().transformTemplate}willUpdate(g=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&O5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let T=0;T<this.path.length;T++){const C=this.path[T];C.shouldResetTransform=!0,C.updateScroll("snapshot"),C.options.layoutRoot&&C.willUpdate(!1)}const{layoutId:x,layout:y}=this.options;if(x===void 0&&!y)return;const _=this.getTransformTemplate();this.prevTransformTemplateValue=_?_(this.latestValues,""):void 0,this.updateSnapshot(),g&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(e_);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(n_);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(qj),this.nodes.forEach(Hj),this.nodes.forEach(Uj)):this.nodes.forEach(n_),this.clearAllSnapshots();const x=ln.now();Ke.delta=Pi(0,1e3/60,x-Ke.timestamp),Ke.timestamp=x,Ke.isProcessing=!0,qm.update.process(Ke),qm.preRender.process(Ke),qm.render.process(Ke),Ke.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Wg.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Gj),this.sharedNodes.forEach(Xj)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,fe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){fe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!cn(this.snapshot.measuredBox.x)&&!cn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let y=0;y<this.path.length;y++)this.path[y].updateScroll();const g=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Ve(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:x}=this.options;x&&x.notify("LayoutMeasure",this.layout.layoutBox,g?g.layoutBox:void 0)}updateScroll(g="measure"){let x=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===g&&(x=!1),x&&this.instance){const y=c(this.instance);this.scroll={animationId:this.root.animationId,phase:g,isRoot:y,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:y}}}resetTransform(){if(!u)return;const g=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,x=this.projectionDelta&&!A5(this.projectionDelta),y=this.getTransformTemplate(),_=y?y(this.latestValues,""):void 0,T=_!==this.prevTransformTemplateValue;g&&this.instance&&(x||ao(this.latestValues)||T)&&(u(this.instance,_),this.shouldResetTransform=!1,this.scheduleRender())}measure(g=!0){const x=this.measurePageBox();let y=this.removeElementScroll(x);return g&&(y=this.removeTransform(y)),Jj(y),{animationId:this.root.animationId,measuredBox:x,layoutBox:y,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:g}=this.options;if(!g)return Ve();const x=g.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(t7))){const{scroll:_}=this.root;_&&(ds(x.x,_.offset.x),ds(x.y,_.offset.y))}return x}removeElementScroll(g){const x=Ve();if(fi(x,g),this.scroll?.wasRoot)return x;for(let y=0;y<this.path.length;y++){const _=this.path[y],{scroll:T,options:C}=_;_!==this.root&&T&&C.layoutScroll&&(T.wasRoot&&fi(x,g),ds(x.x,T.offset.x),ds(x.y,T.offset.y))}return x}applyTransform(g,x=!1){const y=Ve();fi(y,g);for(let _=0;_<this.path.length;_++){const T=this.path[_];!x&&T.options.layoutScroll&&T.scroll&&T!==T.root&&fs(y,{x:-T.scroll.offset.x,y:-T.scroll.offset.y}),ao(T.latestValues)&&fs(y,T.latestValues)}return ao(this.latestValues)&&fs(y,this.latestValues),y}removeTransform(g){const x=Ve();fi(x,g);for(let y=0;y<this.path.length;y++){const _=this.path[y];if(!_.instance||!ao(_.latestValues))continue;sg(_.latestValues)&&_.updateSnapshot();const T=Ve(),C=_.measurePageBox();fi(T,C),Yx(x,_.latestValues,_.snapshot?_.snapshot.layoutBox:void 0,T)}return ao(this.latestValues)&&Yx(x,this.latestValues),x}setTargetDelta(g){this.targetDelta=g,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(g){this.options={...this.options,...g,crossfade:g.crossfade!==void 0?g.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ke.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(g=!1){const x=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=x.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=x.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=x.isSharedProjectionDirty);const y=!!this.resumingFrom||this!==x;if(!(g||y&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:T,layoutId:C}=this.options;if(!this.layout||!(T||C))return;this.resolvedRelativeTargetAt=Ke.timestamp;const A=this.getClosestProjectingParent();A&&this.linkedParentVersion!==A.layoutVersion&&!A.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(A&&A.layout?this.createRelativeTarget(A,this.layout.layoutBox,A.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ve(),this.targetWithTransforms=Ve()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Sj(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):fi(this.target,this.layout.layoutBox),g5(this.target,this.targetDelta)):fi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,A&&!!A.resumingFrom==!!this.resumingFrom&&!A.options.layoutScroll&&A.target&&this.animationProgress!==1?this.createRelativeTarget(A,this.target,A.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||sg(this.parent.latestValues)||p5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(g,x,y){this.relativeParent=g,this.linkedParentVersion=g.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ve(),this.relativeTargetOrigin=Ve(),uf(this.relativeTargetOrigin,x,y),fi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const g=this.getLead(),x=!!this.resumingFrom||this!==g;let y=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(y=!1),x&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(y=!1),this.resolvedRelativeTargetAt===Ke.timestamp&&(y=!1),y)return;const{layout:_,layoutId:T}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(_||T))return;fi(this.layoutCorrected,this.layout.layoutBox);const C=this.treeScale.x,A=this.treeScale.y;WC(this.layoutCorrected,this.treeScale,this.path,x),g.layout&&!g.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(g.target=g.layout.layoutBox,g.targetWithTransforms=Ve());const{target:O}=g;if(!O){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Hx(this.prevProjectionDelta.x,this.projectionDelta.x),Hx(this.prevProjectionDelta.y,this.projectionDelta.y)),yc(this.projectionDelta,this.layoutCorrected,O,this.latestValues),(this.treeScale.x!==C||this.treeScale.y!==A||!Qx(this.projectionDelta.x,this.prevProjectionDelta.x)||!Qx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",O))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(g=!0){if(this.options.visualElement?.scheduleRender(),g){const x=this.getStack();x&&x.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=us(),this.projectionDelta=us(),this.projectionDeltaWithTransform=us()}setAnimationOrigin(g,x=!1){const y=this.snapshot,_=y?y.latestValues:{},T={...this.latestValues},C=us();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!x;const A=Ve(),O=y?y.source:void 0,R=this.layout?this.layout.source:void 0,P=O!==R,I=this.getStack(),D=!I||I.members.length<=1,M=!!(P&&!D&&this.options.crossfade===!0&&!this.path.some(Qj));this.animationProgress=0;let B;this.mixTargetDelta=Q=>{const tt=Q/1e3;a_(C.x,g.x,tt),a_(C.y,g.y,tt),this.setTargetDelta(C),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(uf(A,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Kj(this.relativeTarget,this.relativeTargetOrigin,A,tt),B&&Ej(this.relativeTarget,B)&&(this.isProjectionDirty=!1),B||(B=Ve()),fi(B,this.relativeTarget)),P&&(this.animationValues=T,zj(T,_,this.latestValues,tt,M,D)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=tt},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(g){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(ur(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=fe.update(()=>{Ud.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=js(0)),this.currentAnimation=Dj(this.motionValue,[0,1e3],{...g,velocity:0,isSync:!0,onUpdate:x=>{this.mixTargetDelta(x),g.onUpdate&&g.onUpdate(x)},onStop:()=>{},onComplete:()=>{g.onComplete&&g.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const g=this.getStack();g&&g.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Nj),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const g=this.getLead();let{targetWithTransforms:x,target:y,layout:_,latestValues:T}=g;if(!(!x||!y||!_)){if(this!==g&&this.layout&&_&&R5(this.options.animationType,this.layout.layoutBox,_.layoutBox)){y=this.target||Ve();const C=cn(this.layout.layoutBox.x);y.x.min=g.target.x.min,y.x.max=y.x.min+C;const A=cn(this.layout.layoutBox.y);y.y.min=g.target.y.min,y.y.max=y.y.min+A}fi(x,y),fs(x,T),yc(this.projectionDeltaWithTransform,this.layoutCorrected,x,T)}}registerSharedNode(g,x){this.sharedNodes.has(g)||this.sharedNodes.set(g,new Pj),this.sharedNodes.get(g).add(x);const _=x.options.initialPromotionConfig;x.promote({transition:_?_.transition:void 0,preserveFollowOpacity:_&&_.shouldPreserveFollowOpacity?_.shouldPreserveFollowOpacity(x):void 0})}isLead(){const g=this.getStack();return g?g.lead===this:!0}getLead(){const{layoutId:g}=this.options;return g?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:g}=this.options;return g?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:g}=this.options;if(g)return this.root.sharedNodes.get(g)}promote({needsReset:g,transition:x,preserveFollowOpacity:y}={}){const _=this.getStack();_&&_.promote(this,y),g&&(this.projectionDelta=void 0,this.needsReset=!0),x&&this.setOptions({transition:x})}relegate(){const g=this.getStack();return g?g.relegate(this):!1}resetSkewAndRotation(){const{visualElement:g}=this.options;if(!g)return;let x=!1;const{latestValues:y}=g;if((y.z||y.rotate||y.rotateX||y.rotateY||y.rotateZ||y.skewX||y.skewY)&&(x=!0),!x)return;const _={};y.z&&tp("z",g,_,this.animationValues);for(let T=0;T<Jm.length;T++)tp(`rotate${Jm[T]}`,g,_,this.animationValues),tp(`skew${Jm[T]}`,g,_,this.animationValues);g.render();for(const T in _)g.setStaticValue(T,_[T]),this.animationValues&&(this.animationValues[T]=_[T]);g.scheduleRender()}applyProjectionStyles(g,x){if(!this.instance||this.isSVG)return;if(!this.isVisible){g.visibility="hidden";return}const y=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,g.visibility="",g.opacity="",g.pointerEvents=Hd(x?.pointerEvents)||"",g.transform=y?y(this.latestValues,""):"none";return}const _=this.getLead();if(!this.projectionDelta||!this.layout||!_.target){this.options.layoutId&&(g.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,g.pointerEvents=Hd(x?.pointerEvents)||""),this.hasProjected&&!ao(this.latestValues)&&(g.transform=y?y({},""):"none",this.hasProjected=!1);return}g.visibility="";const T=_.animationValues||_.latestValues;this.applyTransformsToTarget();let C=Aj(this.projectionDeltaWithTransform,this.treeScale,T);y&&(C=y(T,C)),g.transform=C;const{x:A,y:O}=this.projectionDelta;g.transformOrigin=`${A.origin*100}% ${O.origin*100}% 0`,_.animationValues?g.opacity=_===this?T.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:T.opacityExit:g.opacity=_===this?T.opacity!==void 0?T.opacity:"":T.opacityExit!==void 0?T.opacityExit:0;for(const R in cg){if(T[R]===void 0)continue;const{correct:P,applyTo:I,isCSSVariable:D}=cg[R],M=C==="none"?T[R]:P(T[R],_);if(I){const B=I.length;for(let Q=0;Q<B;Q++)g[I[Q]]=M}else D?this.options.visualElement.renderState.vars[R]=M:g[R]=M}this.options.layoutId&&(g.pointerEvents=_===this?Hd(x?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(g=>g.currentAnimation?.stop()),this.root.nodes.forEach(e_),this.root.sharedNodes.clear()}}}function Hj(n){n.updateLayout()}function Uj(n){const a=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&a&&n.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:c}=n.layout,{animationType:u}=n.options,m=a.source!==n.layout.source;u==="size"?Xn(T=>{const C=m?a.measuredBox[T]:a.layoutBox[T],A=cn(C);C.min=o[T].min,C.max=C.min+A}):R5(u,a.layoutBox,o)&&Xn(T=>{const C=m?a.measuredBox[T]:a.layoutBox[T],A=cn(o[T]);C.max=C.min+A,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[T].max=n.relativeTarget[T].min+A)});const g=us();yc(g,o,a.layoutBox);const x=us();m?yc(x,n.applyTransform(c,!0),a.measuredBox):yc(x,o,a.layoutBox);const y=!A5(g);let _=!1;if(!n.resumeFrom){const T=n.getClosestProjectingParent();if(T&&!T.resumeFrom){const{snapshot:C,layout:A}=T;if(C&&A){const O=Ve();uf(O,a.layoutBox,C.layoutBox);const R=Ve();uf(R,o,A.layoutBox),M5(O,R)||(_=!0),T.options.layoutRoot&&(n.relativeTarget=R,n.relativeTargetOrigin=O,n.relativeParent=T)}}}n.notifyListeners("didUpdate",{layout:o,snapshot:a,delta:x,layoutDelta:g,hasLayoutChanged:y,hasRelativeLayoutChanged:_})}else if(n.isLead()){const{onExitComplete:o}=n.options;o&&o()}n.options.transition=void 0}function Zj(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function Ij(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function Gj(n){n.clearSnapshot()}function e_(n){n.clearMeasurements()}function n_(n){n.isLayoutDirty=!1}function qj(n){const{visualElement:a}=n.options;a&&a.getProps().onBeforeLayoutMeasure&&a.notify("BeforeLayoutMeasure"),n.resetTransform()}function i_(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function Yj(n){n.resolveTargetDelta()}function Fj(n){n.calcProjection()}function $j(n){n.resetSkewAndRotation()}function Xj(n){n.removeLeadSnapshot()}function a_(n,a,o){n.translate=ye(a.translate,0,o),n.scale=ye(a.scale,1,o),n.origin=a.origin,n.originPoint=a.originPoint}function r_(n,a,o,c){n.min=ye(a.min,o.min,c),n.max=ye(a.max,o.max,c)}function Kj(n,a,o,c){r_(n.x,a.x,o.x,c),r_(n.y,a.y,o.y,c)}function Qj(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const Wj={duration:.45,ease:[.4,0,.1,1]},o_=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),s_=o_("applewebkit/")&&!o_("chrome/")?Math.round:Wn;function l_(n){n.min=s_(n.min),n.max=s_(n.max)}function Jj(n){l_(n.x),l_(n.y)}function R5(n,a,o){return n==="position"||n==="preserve-aspect"&&!wj(Kx(a),Kx(o),.2)}function t7(n){return n!==n.root&&n.scroll?.wasRoot}const e7=D5({attachResizeListener:(n,a)=>Ec(n,"resize",a),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),ep={current:void 0},k5=D5({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!ep.current){const n=new e7({});n.mount(window),n.setOptions({layoutScroll:!0}),ep.current=n}return ep.current},resetTransform:(n,a)=>{n.style.transform=a!==void 0?a:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),a0=z.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function c_(n,a){if(typeof n=="function")return n(a);n!=null&&(n.current=a)}function n7(...n){return a=>{let o=!1;const c=n.map(u=>{const m=c_(u,a);return!o&&typeof m=="function"&&(o=!0),m});if(o)return()=>{for(let u=0;u<c.length;u++){const m=c[u];typeof m=="function"?m():c_(n[u],null)}}}}function i7(...n){return z.useCallback(n7(...n),n)}class a7 extends z.Component{getSnapshotBeforeUpdate(a){const o=this.props.childRef.current;if(o&&a.isPresent&&!this.props.isPresent){const c=o.offsetParent,u=rg(c)&&c.offsetWidth||0,m=rg(c)&&c.offsetHeight||0,g=this.props.sizeRef.current;g.height=o.offsetHeight||0,g.width=o.offsetWidth||0,g.top=o.offsetTop,g.left=o.offsetLeft,g.right=u-g.width-g.left,g.bottom=m-g.height-g.top}return null}componentDidUpdate(){}render(){return this.props.children}}function r7({children:n,isPresent:a,anchorX:o,anchorY:c,root:u}){const m=z.useId(),g=z.useRef(null),x=z.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:y}=z.useContext(a0),_=n.props?.ref??n?.ref,T=i7(g,_);return z.useInsertionEffect(()=>{const{width:C,height:A,top:O,left:R,right:P,bottom:I}=x.current;if(a||!g.current||!C||!A)return;const D=o==="left"?`left: ${R}`:`right: ${P}`,M=c==="bottom"?`bottom: ${I}`:`top: ${O}`;g.current.dataset.motionPopId=m;const B=document.createElement("style");y&&(B.nonce=y);const Q=u??document.head;return Q.appendChild(B),B.sheet&&B.sheet.insertRule(`
          [data-motion-pop-id="${m}"] {
            position: absolute !important;
            width: ${C}px !important;
            height: ${A}px !important;
            ${D}px !important;
            ${M}px !important;
          }
        `),()=>{Q.contains(B)&&Q.removeChild(B)}},[a]),d.jsx(a7,{isPresent:a,childRef:g,sizeRef:x,children:z.cloneElement(n,{ref:T})})}const o7=({children:n,initial:a,isPresent:o,onExitComplete:c,custom:u,presenceAffectsLayout:m,mode:g,anchorX:x,anchorY:y,root:_})=>{const T=zg(s7),C=z.useId();let A=!0,O=z.useMemo(()=>(A=!1,{id:C,initial:a,isPresent:o,custom:u,onExitComplete:R=>{T.set(R,!0);for(const P of T.values())if(!P)return;c&&c()},register:R=>(T.set(R,!1),()=>T.delete(R))}),[o,T,c]);return m&&A&&(O={...O}),z.useMemo(()=>{T.forEach((R,P)=>T.set(P,!1))},[o]),z.useEffect(()=>{!o&&!T.size&&c&&c()},[o]),g==="popLayout"&&(n=d.jsx(r7,{isPresent:o,anchorX:x,anchorY:y,root:_,children:n})),d.jsx(wf.Provider,{value:O,children:n})};function s7(){return new Map}function B5(n=!0){const a=z.useContext(wf);if(a===null)return[!0,null];const{isPresent:o,onExitComplete:c,register:u}=a,m=z.useId();z.useEffect(()=>{if(n)return u(m)},[n]);const g=z.useCallback(()=>n&&c&&c(m),[m,c,n]);return!o&&c?[!1,g]:[!0]}const wd=n=>n.key||"";function u_(n){const a=[];return z.Children.forEach(n,o=>{z.isValidElement(o)&&a.push(o)}),a}const l7=({children:n,custom:a,initial:o=!0,onExitComplete:c,presenceAffectsLayout:u=!0,mode:m="sync",propagate:g=!1,anchorX:x="left",anchorY:y="top",root:_})=>{const[T,C]=B5(g),A=z.useMemo(()=>u_(n),[n]),O=g&&!T?[]:A.map(wd),R=z.useRef(!0),P=z.useRef(A),I=zg(()=>new Map),D=z.useRef(new Set),[M,B]=z.useState(A),[Q,tt]=z.useState(A);mb(()=>{R.current=!1,P.current=A;for(let lt=0;lt<Q.length;lt++){const pt=wd(Q[lt]);O.includes(pt)?(I.delete(pt),D.current.delete(pt)):I.get(pt)!==!0&&I.set(pt,!1)}},[Q,O.length,O.join("-")]);const ot=[];if(A!==M){let lt=[...A];for(let pt=0;pt<Q.length;pt++){const gt=Q[pt],Tt=wd(gt);O.includes(Tt)||(lt.splice(pt,0,gt),ot.push(gt))}return m==="wait"&&ot.length&&(lt=ot),tt(u_(lt)),B(A),null}const{forceRender:$}=z.useContext(Mg);return d.jsx(d.Fragment,{children:Q.map(lt=>{const pt=wd(lt),gt=g&&!T?!1:A===Q||O.includes(pt),Tt=()=>{if(D.current.has(pt))return;if(D.current.add(pt),I.has(pt))I.set(pt,!0);else return;let at=!0;I.forEach(zt=>{zt||(at=!1)}),at&&($?.(),tt(P.current),g&&C?.(),c&&c())};return d.jsx(o7,{isPresent:gt,initial:!R.current||o?void 0:!1,custom:a,presenceAffectsLayout:u,mode:m,root:_,onExitComplete:gt?void 0:Tt,anchorX:x,anchorY:y,children:lt},pt)})})},P5=z.createContext({strict:!1}),d_={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let f_=!1;function c7(){if(f_)return;const n={};for(const a in d_)n[a]={isEnabled:o=>d_[a].some(c=>!!o[c])};f5(n),f_=!0}function N5(){return c7(),$C()}function u7(n){const a=N5();for(const o in n)a[o]={...a[o],...n[o]};f5(a)}const d7=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function df(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||d7.has(n)}let V5=n=>!df(n);function f7(n){typeof n=="function"&&(V5=a=>a.startsWith("on")?!df(a):n(a))}try{f7(require("@emotion/is-prop-valid").default)}catch{}function h7(n,a,o){const c={};for(const u in n)u==="values"&&typeof n.values=="object"||(V5(u)||o===!0&&df(u)||!a&&!df(u)||n.draggable&&u.startsWith("onDrag"))&&(c[u]=n[u]);return c}const Cf=z.createContext({});function m7(n,a){if(Tf(n)){const{initial:o,animate:c}=n;return{initial:o===!1||jc(o)?o:void 0,animate:jc(c)?c:void 0}}return n.inherit!==!1?a:{}}function p7(n){const{initial:a,animate:o}=m7(n,z.useContext(Cf));return z.useMemo(()=>({initial:a,animate:o}),[h_(a),h_(o)])}function h_(n){return Array.isArray(n)?n.join(" "):n}const r0=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function H5(n,a,o){for(const c in a)!en(a[c])&&!x5(c,o)&&(n[c]=a[c])}function g7({transformTemplate:n},a){return z.useMemo(()=>{const o=r0();return n0(o,a,n),Object.assign({},o.vars,o.style)},[a])}function v7(n,a){const o=n.style||{},c={};return H5(c,o,n),Object.assign(c,g7(n,a)),c}function y7(n,a){const o={},c=v7(n,a);return n.drag&&n.dragListener!==!1&&(o.draggable=!1,c.userSelect=c.WebkitUserSelect=c.WebkitTouchCallout="none",c.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(o.tabIndex=0),o.style=c,o}const U5=()=>({...r0(),attrs:{}});function x7(n,a,o,c){const u=z.useMemo(()=>{const m=U5();return _5(m,a,w5(c),n.transformTemplate,n.style),{...m.attrs,style:{...m.style}}},[a]);if(n.style){const m={};H5(m,n.style,n),u.style={...m,...u.style}}return u}const _7=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function o0(n){return typeof n!="string"||n.includes("-")?!1:!!(_7.indexOf(n)>-1||/[A-Z]/u.test(n))}function b7(n,a,o,{latestValues:c},u,m=!1,g){const y=(g??o0(n)?x7:y7)(a,c,u,n),_=h7(a,typeof n=="string",m),T=n!==z.Fragment?{..._,...y,ref:o}:{},{children:C}=a,A=z.useMemo(()=>en(C)?C.get():C,[C]);return z.createElement(n,{...T,children:A})}function w7({scrapeMotionValuesFromProps:n,createRenderState:a},o,c,u){return{latestValues:S7(o,c,u,n),renderState:a()}}function S7(n,a,o,c){const u={},m=c(n,{});for(const A in m)u[A]=Hd(m[A]);let{initial:g,animate:x}=n;const y=Tf(n),_=d5(n);a&&_&&!y&&n.inherit!==!1&&(g===void 0&&(g=a.initial),x===void 0&&(x=a.animate));let T=o?o.initial===!1:!1;T=T||g===!1;const C=T?x:g;if(C&&typeof C!="boolean"&&!Sf(C)){const A=Array.isArray(C)?C:[C];for(let O=0;O<A.length;O++){const R=Xg(n,A[O]);if(R){const{transitionEnd:P,transition:I,...D}=R;for(const M in D){let B=D[M];if(Array.isArray(B)){const Q=T?B.length-1:0;B=B[Q]}B!==null&&(u[M]=B)}for(const M in P)u[M]=P[M]}}}return u}const Z5=n=>(a,o)=>{const c=z.useContext(Cf),u=z.useContext(wf),m=()=>w7(n,a,c,u);return o?m():zg(m)},T7=Z5({scrapeMotionValuesFromProps:i0,createRenderState:r0}),C7=Z5({scrapeMotionValuesFromProps:S5,createRenderState:U5}),j7=Symbol.for("motionComponentSymbol");function E7(n,a,o){const c=z.useRef(o);z.useInsertionEffect(()=>{c.current=o});const u=z.useRef(null);return z.useCallback(m=>{m&&n.onMount?.(m),a&&(m?a.mount(m):a.unmount());const g=c.current;if(typeof g=="function")if(m){const x=g(m);typeof x=="function"&&(u.current=x)}else u.current?(u.current(),u.current=null):g(m);else g&&(g.current=m)},[a])}const I5=z.createContext({});function sc(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function A7(n,a,o,c,u,m){const{visualElement:g}=z.useContext(Cf),x=z.useContext(P5),y=z.useContext(wf),_=z.useContext(a0).reducedMotion,T=z.useRef(null);c=c||x.renderer,!T.current&&c&&(T.current=c(n,{visualState:a,parent:g,props:o,presenceContext:y,blockInitialAnimation:y?y.initial===!1:!1,reducedMotionConfig:_,isSVG:m}));const C=T.current,A=z.useContext(I5);C&&!C.projection&&u&&(C.type==="html"||C.type==="svg")&&M7(T.current,o,u,A);const O=z.useRef(!1);z.useInsertionEffect(()=>{C&&O.current&&C.update(o,y)});const R=o[Qb],P=z.useRef(!!R&&!window.MotionHandoffIsComplete?.(R)&&window.MotionHasOptimisedAnimation?.(R));return mb(()=>{C&&(O.current=!0,window.MotionIsMounted=!0,C.updateFeatures(),C.scheduleRenderMicrotask(),P.current&&C.animationState&&C.animationState.animateChanges())}),z.useEffect(()=>{C&&(!P.current&&C.animationState&&C.animationState.animateChanges(),P.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(R)}),P.current=!1),C.enteringChildren=void 0)}),C}function M7(n,a,o,c){const{layoutId:u,layout:m,drag:g,dragConstraints:x,layoutScroll:y,layoutRoot:_,layoutCrossfade:T}=a;n.projection=new o(n.latestValues,a["data-framer-portal-id"]?void 0:G5(n.parent)),n.projection.setOptions({layoutId:u,layout:m,alwaysMeasureLayout:!!g||x&&sc(x),visualElement:n,animationType:typeof m=="string"?m:"both",initialPromotionConfig:c,crossfade:T,layoutScroll:y,layoutRoot:_})}function G5(n){if(n)return n.options.allowProjection!==!1?n.projection:G5(n.parent)}function np(n,{forwardMotionProps:a=!1,type:o}={},c,u){c&&u7(c);const m=o?o==="svg":o0(n),g=m?C7:T7;function x(_,T){let C;const A={...z.useContext(a0),..._,layoutId:z7(_)},{isStatic:O}=A,R=p7(_),P=g(_,O);if(!O&&hb){L7();const I=O7(A);C=I.MeasureLayout,R.visualElement=A7(n,P,A,u,I.ProjectionNode,m)}return d.jsxs(Cf.Provider,{value:R,children:[C&&R.visualElement?d.jsx(C,{visualElement:R.visualElement,...A}):null,b7(n,_,E7(P,R.visualElement,T),P,O,a,m)]})}x.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const y=z.forwardRef(x);return y[j7]=n,y}function z7({layoutId:n}){const a=z.useContext(Mg).id;return a&&n!==void 0?a+"-"+n:n}function L7(n,a){z.useContext(P5).strict}function O7(n){const a=N5(),{drag:o,layout:c}=a;if(!o&&!c)return{};const u={...o,...c};return{MeasureLayout:o?.isEnabled(n)||c?.isEnabled(n)?u.MeasureLayout:void 0,ProjectionNode:u.ProjectionNode}}function D7(n,a){if(typeof Proxy>"u")return np;const o=new Map,c=(m,g)=>np(m,g,n,a),u=(m,g)=>c(m,g);return new Proxy(u,{get:(m,g)=>g==="create"?c:(o.has(g)||o.set(g,np(g,void 0,n,a)),o.get(g))})}const R7=(n,a)=>a.isSVG??o0(n)?new dj(a):new rj(a,{allowProjection:n!==z.Fragment});class k7 extends fr{constructor(a){super(a),a.animationState||(a.animationState=gj(a))}updateAnimationControlsSubscription(){const{animate:a}=this.node.getProps();Sf(a)&&(this.unmountControls=a.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:a}=this.node.getProps(),{animate:o}=this.node.prevProps||{};a!==o&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let B7=0;class P7 extends fr{constructor(){super(...arguments),this.id=B7++}update(){if(!this.node.presenceContext)return;const{isPresent:a,onExitComplete:o}=this.node.presenceContext,{isPresent:c}=this.node.prevPresenceContext||{};if(!this.node.animationState||a===c)return;const u=this.node.animationState.setActive("exit",!a);o&&!a&&u.then(()=>{o(this.id)})}mount(){const{register:a,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),a&&(this.unmount=a(this.id))}unmount(){}}const N7={animation:{Feature:k7},exit:{Feature:P7}};function Pc(n){return{point:{x:n.pageX,y:n.pageY}}}const V7=n=>a=>Jg(a)&&n(a,Pc(a));function xc(n,a,o,c){return Ec(n,a,V7(o),c)}const q5=({current:n})=>n?n.ownerDocument.defaultView:null,m_=(n,a)=>Math.abs(n-a);function H7(n,a){const o=m_(n.x,a.x),c=m_(n.y,a.y);return Math.sqrt(o**2+c**2)}const p_=new Set(["auto","scroll"]);class Y5{constructor(a,o,{transformPagePoint:c,contextWindow:u=window,dragSnapToOrigin:m=!1,distanceThreshold:g=3,element:x}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=O=>{this.handleScroll(O.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const O=ap(this.lastMoveEventInfo,this.history),R=this.startEvent!==null,P=H7(O.offset,{x:0,y:0})>=this.distanceThreshold;if(!R&&!P)return;const{point:I}=O,{timestamp:D}=Ke;this.history.push({...I,timestamp:D});const{onStart:M,onMove:B}=this.handlers;R||(M&&M(this.lastMoveEvent,O),this.startEvent=this.lastMoveEvent),B&&B(this.lastMoveEvent,O)},this.handlePointerMove=(O,R)=>{this.lastMoveEvent=O,this.lastMoveEventInfo=ip(R,this.transformPagePoint),fe.update(this.updatePoint,!0)},this.handlePointerUp=(O,R)=>{this.end();const{onEnd:P,onSessionEnd:I,resumeAnimation:D}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&D&&D(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const M=ap(O.type==="pointercancel"?this.lastMoveEventInfo:ip(R,this.transformPagePoint),this.history);this.startEvent&&P&&P(O,M),I&&I(O,M)},!Jg(a))return;this.dragSnapToOrigin=m,this.handlers=o,this.transformPagePoint=c,this.distanceThreshold=g,this.contextWindow=u||window;const y=Pc(a),_=ip(y,this.transformPagePoint),{point:T}=_,{timestamp:C}=Ke;this.history=[{...T,timestamp:C}];const{onSessionStart:A}=o;A&&A(a,ap(_,this.history)),this.removeListeners=Rc(xc(this.contextWindow,"pointermove",this.handlePointerMove),xc(this.contextWindow,"pointerup",this.handlePointerUp),xc(this.contextWindow,"pointercancel",this.handlePointerUp)),x&&this.startScrollTracking(x)}startScrollTracking(a){let o=a.parentElement;for(;o;){const c=getComputedStyle(o);(p_.has(c.overflowX)||p_.has(c.overflowY))&&this.scrollPositions.set(o,{x:o.scrollLeft,y:o.scrollTop}),o=o.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(a){const o=this.scrollPositions.get(a);if(!o)return;const c=a===window,u=c?{x:window.scrollX,y:window.scrollY}:{x:a.scrollLeft,y:a.scrollTop},m={x:u.x-o.x,y:u.y-o.y};m.x===0&&m.y===0||(c?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=m.x,this.lastMoveEventInfo.point.y+=m.y):this.history.length>0&&(this.history[0].x-=m.x,this.history[0].y-=m.y),this.scrollPositions.set(a,u),fe.update(this.updatePoint,!0))}updateHandlers(a){this.handlers=a}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ur(this.updatePoint)}}function ip(n,a){return a?{point:a(n.point)}:n}function g_(n,a){return{x:n.x-a.x,y:n.y-a.y}}function ap({point:n},a){return{point:n,delta:g_(n,F5(a)),offset:g_(n,U7(a)),velocity:Z7(a,.1)}}function U7(n){return n[0]}function F5(n){return n[n.length-1]}function Z7(n,a){if(n.length<2)return{x:0,y:0};let o=n.length-1,c=null;const u=F5(n);for(;o>=0&&(c=n[o],!(u.timestamp-c.timestamp>pa(a)));)o--;if(!c)return{x:0,y:0};const m=Qn(u.timestamp-c.timestamp);if(m===0)return{x:0,y:0};const g={x:(u.x-c.x)/m,y:(u.y-c.y)/m};return g.x===1/0&&(g.x=0),g.y===1/0&&(g.y=0),g}function I7(n,{min:a,max:o},c){return a!==void 0&&n<a?n=c?ye(a,n,c.min):Math.max(n,a):o!==void 0&&n>o&&(n=c?ye(o,n,c.max):Math.min(n,o)),n}function v_(n,a,o){return{min:a!==void 0?n.min+a:void 0,max:o!==void 0?n.max+o-(n.max-n.min):void 0}}function G7(n,{top:a,left:o,bottom:c,right:u}){return{x:v_(n.x,o,u),y:v_(n.y,a,c)}}function y_(n,a){let o=a.min-n.min,c=a.max-n.max;return a.max-a.min<n.max-n.min&&([o,c]=[c,o]),{min:o,max:c}}function q7(n,a){return{x:y_(n.x,a.x),y:y_(n.y,a.y)}}function Y7(n,a){let o=.5;const c=cn(n),u=cn(a);return u>c?o=Sc(a.min,a.max-c,n.min):c>u&&(o=Sc(n.min,n.max-u,a.min)),Pi(0,1,o)}function F7(n,a){const o={};return a.min!==void 0&&(o.min=a.min-n.min),a.max!==void 0&&(o.max=a.max-n.min),o}const ug=.35;function $7(n=ug){return n===!1?n=0:n===!0&&(n=ug),{x:x_(n,"left","right"),y:x_(n,"top","bottom")}}function x_(n,a,o){return{min:__(n,a),max:__(n,o)}}function __(n,a){return typeof n=="number"?n:n[a]||0}const X7=new WeakMap;class K7{constructor(a){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ve(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=a}start(a,{snapToCursor:o=!1,distanceThreshold:c}={}){const{presenceContext:u}=this.visualElement;if(u&&u.isPresent===!1)return;const m=C=>{o?(this.stopAnimation(),this.snapToCursor(Pc(C).point)):this.pauseAnimation()},g=(C,A)=>{this.stopAnimation();const{drag:O,dragPropagation:R,onDragStart:P}=this.getProps();if(O&&!R&&(this.openDragLock&&this.openDragLock(),this.openDragLock=BC(O),!this.openDragLock))return;this.latestPointerEvent=C,this.latestPanInfo=A,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Xn(D=>{let M=this.getAxisMotionValue(D).get()||0;if(Bi.test(M)){const{projection:B}=this.visualElement;if(B&&B.layout){const Q=B.layout.layoutBox[D];Q&&(M=cn(Q)*(parseFloat(M)/100))}}this.originPoint[D]=M}),P&&fe.postRender(()=>P(C,A)),ng(this.visualElement,"transform");const{animationState:I}=this.visualElement;I&&I.setActive("whileDrag",!0)},x=(C,A)=>{this.latestPointerEvent=C,this.latestPanInfo=A;const{dragPropagation:O,dragDirectionLock:R,onDirectionLock:P,onDrag:I}=this.getProps();if(!O&&!this.openDragLock)return;const{offset:D}=A;if(R&&this.currentDirection===null){this.currentDirection=Q7(D),this.currentDirection!==null&&P&&P(this.currentDirection);return}this.updateAxis("x",A.point,D),this.updateAxis("y",A.point,D),this.visualElement.render(),I&&I(C,A)},y=(C,A)=>{this.latestPointerEvent=C,this.latestPanInfo=A,this.stop(C,A),this.latestPointerEvent=null,this.latestPanInfo=null},_=()=>Xn(C=>this.getAnimationState(C)==="paused"&&this.getAxisMotionValue(C).animation?.play()),{dragSnapToOrigin:T}=this.getProps();this.panSession=new Y5(a,{onSessionStart:m,onStart:g,onMove:x,onSessionEnd:y,resumeAnimation:_},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:T,distanceThreshold:c,contextWindow:q5(this.visualElement),element:this.visualElement.current})}stop(a,o){const c=a||this.latestPointerEvent,u=o||this.latestPanInfo,m=this.isDragging;if(this.cancel(),!m||!u||!c)return;const{velocity:g}=u;this.startAnimation(g);const{onDragEnd:x}=this.getProps();x&&fe.postRender(()=>x(c,u))}cancel(){this.isDragging=!1;const{projection:a,animationState:o}=this.visualElement;a&&(a.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:c}=this.getProps();!c&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(a,o,c){const{drag:u}=this.getProps();if(!c||!Sd(a,u,this.currentDirection))return;const m=this.getAxisMotionValue(a);let g=this.originPoint[a]+c[a];this.constraints&&this.constraints[a]&&(g=I7(g,this.constraints[a],this.elastic[a])),m.set(g)}resolveConstraints(){const{dragConstraints:a,dragElastic:o}=this.getProps(),c=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,u=this.constraints;a&&sc(a)?this.constraints||(this.constraints=this.resolveRefConstraints()):a&&c?this.constraints=G7(c.layoutBox,a):this.constraints=!1,this.elastic=$7(o),u!==this.constraints&&c&&this.constraints&&!this.hasMutatedConstraints&&Xn(m=>{this.constraints!==!1&&this.getAxisMotionValue(m)&&(this.constraints[m]=F7(c.layoutBox[m],this.constraints[m]))})}resolveRefConstraints(){const{dragConstraints:a,onMeasureDragConstraints:o}=this.getProps();if(!a||!sc(a))return!1;const c=a.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const m=JC(c,u.root,this.visualElement.getTransformPagePoint());let g=q7(u.layout.layoutBox,m);if(o){const x=o(KC(g));this.hasMutatedConstraints=!!x,x&&(g=m5(x))}return g}startAnimation(a){const{drag:o,dragMomentum:c,dragElastic:u,dragTransition:m,dragSnapToOrigin:g,onDragTransitionEnd:x}=this.getProps(),y=this.constraints||{},_=Xn(T=>{if(!Sd(T,o,this.currentDirection))return;let C=y&&y[T]||{};g&&(C={min:0,max:0});const A=u?200:1e6,O=u?40:1e7,R={type:"inertia",velocity:c?a[T]:0,bounceStiffness:A,bounceDamping:O,timeConstant:750,restDelta:1,restSpeed:10,...m,...C};return this.startAxisValueAnimation(T,R)});return Promise.all(_).then(x)}startAxisValueAnimation(a,o){const c=this.getAxisMotionValue(a);return ng(this.visualElement,a),c.start($g(a,c,0,o,this.visualElement,!1))}stopAnimation(){Xn(a=>this.getAxisMotionValue(a).stop())}pauseAnimation(){Xn(a=>this.getAxisMotionValue(a).animation?.pause())}getAnimationState(a){return this.getAxisMotionValue(a).animation?.state}getAxisMotionValue(a){const o=`_drag${a.toUpperCase()}`,c=this.visualElement.getProps(),u=c[o];return u||this.visualElement.getValue(a,(c.initial?c.initial[a]:void 0)||0)}snapToCursor(a){Xn(o=>{const{drag:c}=this.getProps();if(!Sd(o,c,this.currentDirection))return;const{projection:u}=this.visualElement,m=this.getAxisMotionValue(o);if(u&&u.layout){const{min:g,max:x}=u.layout.layoutBox[o],y=m.get()||0;m.set(a[o]-ye(g,x,.5)+y)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:a,dragConstraints:o}=this.getProps(),{projection:c}=this.visualElement;if(!sc(o)||!c||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Xn(g=>{const x=this.getAxisMotionValue(g);if(x&&this.constraints!==!1){const y=x.get();u[g]=Y7({min:y,max:y},this.constraints[g])}});const{transformTemplate:m}=this.visualElement.getProps();this.visualElement.current.style.transform=m?m({},""):"none",c.root&&c.root.updateScroll(),c.updateLayout(),this.resolveConstraints(),Xn(g=>{if(!Sd(g,a,null))return;const x=this.getAxisMotionValue(g),{min:y,max:_}=this.constraints[g];x.set(ye(y,_,u[g]))})}addListeners(){if(!this.visualElement.current)return;X7.set(this.visualElement,this);const a=this.visualElement.current,o=xc(a,"pointerdown",y=>{const{drag:_,dragListener:T=!0}=this.getProps(),C=y.target,A=C!==a&&l5(C);_&&T&&!A&&this.start(y)}),c=()=>{const{dragConstraints:y}=this.getProps();sc(y)&&y.current&&(this.constraints=this.resolveRefConstraints())},{projection:u}=this.visualElement,m=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),fe.read(c);const g=Ec(window,"resize",()=>this.scalePositionWithinConstraints()),x=u.addEventListener("didUpdate",(({delta:y,hasLayoutChanged:_})=>{this.isDragging&&_&&(Xn(T=>{const C=this.getAxisMotionValue(T);C&&(this.originPoint[T]+=y[T].translate,C.set(C.get()+y[T].translate))}),this.visualElement.render())}));return()=>{g(),o(),m(),x&&x()}}getProps(){const a=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:c=!1,dragPropagation:u=!1,dragConstraints:m=!1,dragElastic:g=ug,dragMomentum:x=!0}=a;return{...a,drag:o,dragDirectionLock:c,dragPropagation:u,dragConstraints:m,dragElastic:g,dragMomentum:x}}}function Sd(n,a,o){return(a===!0||a===n)&&(o===null||o===n)}function Q7(n,a=10){let o=null;return Math.abs(n.y)>a?o="y":Math.abs(n.x)>a&&(o="x"),o}class W7 extends fr{constructor(a){super(a),this.removeGroupControls=Wn,this.removeListeners=Wn,this.controls=new K7(a)}mount(){const{dragControls:a}=this.node.getProps();a&&(this.removeGroupControls=a.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Wn}update(){const{dragControls:a}=this.node.getProps(),{dragControls:o}=this.node.prevProps||{};a!==o&&(this.removeGroupControls(),a&&(this.removeGroupControls=a.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.endPanSession()}}const b_=n=>(a,o)=>{n&&fe.postRender(()=>n(a,o))};class J7 extends fr{constructor(){super(...arguments),this.removePointerDownListener=Wn}onPointerDown(a){this.session=new Y5(a,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:q5(this.node)})}createPanHandlers(){const{onPanSessionStart:a,onPanStart:o,onPan:c,onPanEnd:u}=this.node.getProps();return{onSessionStart:b_(a),onStart:b_(o),onMove:c,onEnd:(m,g)=>{delete this.session,u&&fe.postRender(()=>u(m,g))}}}mount(){this.removePointerDownListener=xc(this.node.current,"pointerdown",a=>this.onPointerDown(a))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let rp=!1;class tE extends z.Component{componentDidMount(){const{visualElement:a,layoutGroup:o,switchLayoutGroup:c,layoutId:u}=this.props,{projection:m}=a;m&&(o.group&&o.group.add(m),c&&c.register&&u&&c.register(m),rp&&m.root.didUpdate(),m.addEventListener("animationComplete",()=>{this.safeToRemove()}),m.setOptions({...m.options,onExitComplete:()=>this.safeToRemove()})),Ud.hasEverUpdated=!0}getSnapshotBeforeUpdate(a){const{layoutDependency:o,visualElement:c,drag:u,isPresent:m}=this.props,{projection:g}=c;return g&&(g.isPresent=m,rp=!0,u||a.layoutDependency!==o||o===void 0||a.isPresent!==m?g.willUpdate():this.safeToRemove(),a.isPresent!==m&&(m?g.promote():g.relegate()||fe.postRender(()=>{const x=g.getStack();(!x||!x.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:a}=this.props.visualElement;a&&(a.root.didUpdate(),Wg.postRender(()=>{!a.currentAnimation&&a.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:a,layoutGroup:o,switchLayoutGroup:c}=this.props,{projection:u}=a;rp=!0,u&&(u.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(u),c&&c.deregister&&c.deregister(u))}safeToRemove(){const{safeToRemove:a}=this.props;a&&a()}render(){return null}}function $5(n){const[a,o]=B5(),c=z.useContext(Mg);return d.jsx(tE,{...n,layoutGroup:c,switchLayoutGroup:z.useContext(I5),isPresent:a,safeToRemove:o})}const eE={pan:{Feature:J7},drag:{Feature:W7,ProjectionNode:k5,MeasureLayout:$5}};function w_(n,a,o){const{props:c}=n;n.animationState&&c.whileHover&&n.animationState.setActive("whileHover",o==="Start");const u="onHover"+o,m=c[u];m&&fe.postRender(()=>m(a,Pc(a)))}class nE extends fr{mount(){const{current:a}=this.node;a&&(this.unmount=PC(a,(o,c)=>(w_(this.node,c,"Start"),u=>w_(this.node,u,"End"))))}unmount(){}}class iE extends fr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let a=!1;try{a=this.node.current.matches(":focus-visible")}catch{a=!0}!a||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Rc(Ec(this.node.current,"focus",()=>this.onFocus()),Ec(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function S_(n,a,o){const{props:c}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&c.whileTap&&n.animationState.setActive("whileTap",o==="Start");const u="onTap"+(o==="End"?"":o),m=c[u];m&&fe.postRender(()=>m(a,Pc(a)))}class aE extends fr{mount(){const{current:a}=this.node;a&&(this.unmount=HC(a,(o,c)=>(S_(this.node,c,"Start"),(u,{success:m})=>S_(this.node,u,m?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const dg=new WeakMap,op=new WeakMap,rE=n=>{const a=dg.get(n.target);a&&a(n)},oE=n=>{n.forEach(rE)};function sE({root:n,...a}){const o=n||document;op.has(o)||op.set(o,{});const c=op.get(o),u=JSON.stringify(a);return c[u]||(c[u]=new IntersectionObserver(oE,{root:n,...a})),c[u]}function lE(n,a,o){const c=sE(a);return dg.set(n,o),c.observe(n),()=>{dg.delete(n),c.unobserve(n)}}const cE={some:0,all:1};class uE extends fr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:a={}}=this.node.getProps(),{root:o,margin:c,amount:u="some",once:m}=a,g={root:o?o.current:void 0,rootMargin:c,threshold:typeof u=="number"?u:cE[u]},x=y=>{const{isIntersecting:_}=y;if(this.isInView===_||(this.isInView=_,m&&!_&&this.hasEnteredView))return;_&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",_);const{onViewportEnter:T,onViewportLeave:C}=this.node.getProps(),A=_?T:C;A&&A(y)};return lE(this.node.current,g,x)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:a,prevProps:o}=this.node;["amount","margin","root"].some(dE(a,o))&&this.startObserver()}unmount(){}}function dE({viewport:n={}},{viewport:a={}}={}){return o=>n[o]!==a[o]}const fE={inView:{Feature:uE},tap:{Feature:aE},focus:{Feature:iE},hover:{Feature:nE}},hE={layout:{ProjectionNode:k5,MeasureLayout:$5}},mE={...N7,...fE,...eE,...hE},Gt=D7(mE,R7),tn=({children:n,variant:a="primary",size:o="medium",fullWidth:c=!1,...u})=>d.jsx(pE,{$variant:a,$size:o,$fullWidth:c,...u,children:n}),pE=S.button`
  font-family: var(--font-primary);
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all var(--transition-normal);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  /* 크기 변형 */
  ${n=>{switch(n.$size){case"small":return`
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        `;case"large":return`
          padding: 1rem 2.5rem;
          font-size: 1.125rem;
        `;default:return`
          padding: 0.75rem 2rem;
          font-size: 1rem;
        `}}}

  /* 스타일 변형 */
  ${n=>{switch(n.$variant){case"secondary":return`
          background: var(--color-white);
          color: var(--color-primary);
          border: 2px solid var(--color-primary);
          
          &:hover:not(:disabled) {
            background: var(--color-primary);
            color: var(--color-white);
          }
        `;case"outline":return`
          background: transparent;
          color: var(--color-dark);
          border: 2px solid var(--color-dark);
          
          &:hover:not(:disabled) {
            background: var(--color-dark);
            color: var(--color-white);
          }
        `;case"ghost":return`
          background: transparent;
          color: var(--color-dark);
          
          &:hover:not(:disabled) {
            background: var(--color-light-gray);
          }
        `;default:return`
          background: var(--gradient-primary);
          color: var(--color-white);
          box-shadow: var(--shadow-md);
          
          &:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
          }
        `}}}

  width: ${n=>n.$fullWidth?"100%":"auto"};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`,Zd=({children:n,hover:a=!1,...o})=>d.jsx(X5,{$hover:a,...o,children:n}),X5=S.div`
  background: var(--color-white);
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: all var(--transition-normal);

  ${n=>n.$hover&&`
    cursor: pointer;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
    }
  `}
`,Id=S.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: var(--color-light-gray);
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
  }

  ${X5}:hover & img {
    transform: scale(1.05);
  }
`,Gd=S.div`
  padding: 1.5rem;
`,qd=S.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
`,Yd=S.p`
  font-size: 0.9rem;
  color: var(--color-gray);
  line-height: 1.6;
  margin-bottom: 1rem;
`,Fd=S.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
`,Bs=({title:n="코코이찌방야",description:a="세계 No.1 카레 전문점 코코이찌방야. 나만의 카레를 만들어보세요.",keywords:o="코코이찌방야, 카레, 일본카레, 돈까스카레, 맛집, CoCo ICHIBANYA",image:c="/images/og-image.jpg",url:u="https://cocoichibanya.co.kr",type:m="website"})=>{const g=n==="코코이찌방야"?"코코이찌방야 - 세계 No.1 카레 전문점":`${n} | 코코이찌방야`;return d.jsxs(cr,{children:[d.jsx("title",{children:g}),d.jsx("meta",{name:"description",content:a}),d.jsx("meta",{name:"keywords",content:o}),d.jsx("meta",{property:"og:type",content:m}),d.jsx("meta",{property:"og:title",content:g}),d.jsx("meta",{property:"og:description",content:a}),d.jsx("meta",{property:"og:image",content:c}),d.jsx("meta",{property:"og:url",content:u}),d.jsx("meta",{property:"og:site_name",content:"코코이찌방야"}),d.jsx("meta",{property:"og:locale",content:"ko_KR"}),d.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),d.jsx("meta",{name:"twitter:title",content:g}),d.jsx("meta",{name:"twitter:description",content:a}),d.jsx("meta",{name:"twitter:image",content:c}),d.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=5"}),d.jsx("meta",{name:"mobile-web-app-capable",content:"yes"}),d.jsx("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),d.jsx("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"}),d.jsx("meta",{name:"robots",content:"index, follow"}),d.jsx("meta",{name:"googlebot",content:"index, follow"}),d.jsx("meta",{name:"author",content:"코코이찌방야"}),d.jsx("meta",{name:"copyright",content:"© 2024 코코이찌방야 All Rights Reserved"}),d.jsx("meta",{httpEquiv:"content-language",content:"ko"}),d.jsx("link",{rel:"canonical",href:u}),d.jsx("link",{rel:"icon",type:"image/svg+xml",href:"/vite.svg"}),d.jsx("link",{rel:"apple-touch-icon",href:"/apple-touch-icon.png"})]})},Kl=[{level:0,name:"보통맛",description:"매운맛이 없는 기본 카레",heat:0},{level:1,name:"1단계",description:"살짝 매콤한 맛",heat:10},{level:2,name:"2단계",description:"약간 매운 맛",heat:20},{level:3,name:"3단계",description:"은은하게 매운 맛",heat:30},{level:4,name:"4단계",description:"적당히 매운 맛",heat:40},{level:5,name:"5단계",description:"중간 정도 매운 맛",heat:50},{level:6,name:"6단계",description:"제법 매운 맛",heat:60},{level:7,name:"7단계",description:"많이 매운 맛",heat:70},{level:8,name:"8단계",description:"상당히 매운 맛",heat:80},{level:9,name:"9단계",description:"아주 매운 맛",heat:90},{level:10,name:"10단계",description:"극강의 매운맛",heat:100}],Td=[{value:"less",name:"적게 (200g)",price:0},{value:"normal",name:"보통 (300g)",price:0},{value:"more",name:"많이 (400g)",price:0}],T_=[{value:"normal",name:"보통",price:0},{value:"extra",name:"추가 (50ml)",price:500}],K5=[{id:"pork-cutlet",name:"로스카츠 카레",category:"pork",price:7800,description:"코코이찌방야의 대표 메뉴! 바삭한 로스카츠와 진한 카레의 환상 조합",image:"/images/menu/pork-cutlet.jpg",popular:!0,allergens:["돼지고기","밀","대두"],calories:850,spicy:0},{id:"chicken-cutlet",name:"치킨카츠 카레",category:"chicken",price:7500,description:"부드러운 치킨카츠와 코코이찌방야 특제 카레",image:"/images/menu/chicken-cutlet.jpg",popular:!0,allergens:["닭고기","밀","대두"],calories:780,spicy:0},{id:"beef-cutlet",name:"비프카츠 카레",category:"beef",price:8500,description:"프리미엄 소고기 카츠와 풍부한 카레 소스",image:"/images/menu/beef-cutlet.jpg",popular:!1,allergens:["쇠고기","밀","대두"],calories:920,spicy:0},{id:"shrimp-cutlet",name:"새우카츠 카레",category:"seafood",price:8800,description:"통통한 새우카츠가 들어간 시그니처 카레",image:"/images/menu/shrimp-cutlet.jpg",popular:!0,allergens:["새우","밀","대두"],calories:800,spicy:0},{id:"vegetable",name:"야채 카레",category:"vegetable",price:6500,description:"신선한 제철 야채가 가득한 건강한 카레",image:"/images/menu/vegetable.jpg",popular:!1,allergens:["대두","밀"],calories:550,spicy:0},{id:"cheese",name:"치즈카츠 카레",category:"special",price:8200,description:"고소한 치즈가 쏟아지는 특별한 카레",image:"/images/menu/cheese.jpg",popular:!0,allergens:["돼지고기","우유","밀","대두"],calories:950,spicy:0},{id:"grand-mother",name:"그랜드마더 카레",category:"special",price:9500,description:"로스카츠, 소시지, 치즈가 모두 들어간 프리미엄 카레",image:"/images/menu/grand-mother.jpg",popular:!0,allergens:["돼지고기","우유","밀","대두"],calories:1150,spicy:0}],Ql=[{id:"cheese",name:"치즈",price:1e3,category:"dairy",image:"/images/toppings/cheese.jpg",description:"고소한 체다치즈",allergens:["우유"]},{id:"egg",name:"계란후라이",price:800,category:"protein",image:"/images/toppings/egg.jpg",description:"반숙 계란후라이",allergens:["계란"]},{id:"sausage",name:"소시지",price:1200,category:"protein",image:"/images/toppings/sausage.jpg",description:"육즙 가득한 소시지",allergens:["돼지고기"]},{id:"pork-cutlet",name:"로스카츠",price:2500,category:"protein",image:"/images/toppings/pork-cutlet.jpg",description:"바삭한 로스카츠 추가",allergens:["돼지고기","밀"]},{id:"chicken-cutlet",name:"치킨카츠",price:2300,category:"protein",image:"/images/toppings/chicken-cutlet.jpg",description:"치킨카츠 추가",allergens:["닭고기","밀"]},{id:"shrimp",name:"새우튀김",price:2800,category:"seafood",image:"/images/toppings/shrimp.jpg",description:"바삭한 새우튀김 3마리",allergens:["새우","밀"]},{id:"vegetables",name:"야채믹스",price:1500,category:"vegetable",image:"/images/toppings/vegetables.jpg",description:"신선한 야채 모음",allergens:[]},{id:"mushroom",name:"버섯",price:1e3,category:"vegetable",image:"/images/toppings/mushroom.jpg",description:"갓 구운 버섯",allergens:[]},{id:"corn",name:"콘",price:800,category:"vegetable",image:"/images/toppings/corn.jpg",description:"달콤한 옥수수",allergens:[]},{id:"garlic",name:"마늘칩",price:500,category:"seasoning",image:"/images/toppings/garlic.jpg",description:"바삭한 마늘칩",allergens:[]}],gE=[{id:"all",name:"전체"},{id:"protein",name:"단백질"},{id:"seafood",name:"해산물"},{id:"vegetable",name:"야채"},{id:"dairy",name:"유제품"},{id:"seasoning",name:"양념"}],vE=K5.filter(n=>n.popular),yE=()=>{const[n,a]=z.useState(0),o=[{title:"세계 No.1 카레 전문점",subtitle:"CoCo ICHIBANYA",description:"나만의 완벽한 카레를 만들어보세요",video:"/images/hero/hero-1.mp4",cta:"메뉴 보기",link:"/menu"},{title:"나만의 커스텀 카레",subtitle:"무한한 조합",description:"밥 양, 맵기, 토핑을 자유롭게 선택하세요",video:"/images/hero/hero-2.mp4",cta:"카레 만들기",link:"/simulator"},{title:"전국 매장 안내",subtitle:"가까운 곳에서 만나요",description:"가장 가까운 코코이찌방야를 찾아보세요",video:"/images/hero/hero-3.mp4",cta:"매장 찾기",link:"/store"}],c=[{icon:d.jsx(af,{}),title:"다양한 메뉴",description:"40가지 이상의 카레와 토핑 조합"},{icon:d.jsx(vs,{}),title:"맵기 조절",description:"0~10단계 맵기 선택 가능"},{icon:d.jsx(fb,{}),title:"신선한 재료",description:"매일 아침 신선하게 준비"},{icon:d.jsx(sb,{}),title:"프리미엄 품질",description:"일본 본사의 까다로운 품질 기준"}];return d.jsxs(xE,{children:[d.jsx(Bs,{title:"코코이찌방야",description:"세계 No.1 카레 전문점 코코이찌방야. 40가지 이상의 카레 메뉴와 커스터마이징 시스템으로 나만의 완벽한 카레를 만들어보세요.",keywords:"코코이찌방야, 카레, 일본카레, 돈까스카레, 치킨카레, 커리, 맛집, 농심, CoCo ICHIBANYA",url:"https://cocoichibanya.co.kr"}),d.jsxs(_E,{children:[o.map((u,m)=>d.jsxs(bE,{$active:n===m,children:[d.jsx(wE,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,$active:n===m,children:d.jsx("source",{src:u.video,type:"video/mp4"})}),d.jsx(SE,{}),d.jsxs(TE,{as:Gt.div,initial:{opacity:0,y:50},animate:{opacity:n===m?1:0,y:n===m?0:50},transition:{duration:.8},children:[d.jsx(CE,{children:u.subtitle}),d.jsx(jE,{children:u.title}),d.jsx(EE,{children:u.description}),d.jsx(AE,{to:u.link,children:d.jsx(tn,{size:"large",children:u.cta})})]})]},m)),d.jsx(ME,{children:o.map((u,m)=>d.jsx(zE,{$active:n===m,onClick:()=>a(m)},m))})]}),d.jsx(LE,{children:d.jsx(sp,{children:d.jsx(OE,{children:c.map((u,m)=>d.jsxs(DE,{as:Gt.div,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:m*.1},children:[d.jsx(RE,{children:u.icon}),d.jsx(kE,{children:u.title}),d.jsx(BE,{children:u.description})]},m))})})}),d.jsx(PE,{children:d.jsxs(sp,{children:[d.jsxs(NE,{as:Gt.div,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[d.jsxs(VE,{children:[d.jsx(ub,{})," BEST MENU"]}),d.jsx(HE,{children:"인기 메뉴"}),d.jsx(UE,{children:"코코이찌방야에서 가장 사랑받는 메뉴들을 만나보세요"})]}),d.jsx(ZE,{children:vE.slice(0,4).map((u,m)=>d.jsx(Gt.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:m*.1},children:d.jsxs(Zd,{hover:!0,children:[d.jsxs(Id,{children:[d.jsx(IE,{src:u.image,alt:u.name}),u.popular&&d.jsx(GE,{children:"BEST"})]}),d.jsxs(Gd,{children:[d.jsx(qd,{children:u.name}),d.jsx(Yd,{children:u.description}),d.jsxs(Fd,{children:[u.price.toLocaleString(),"원"]})]})]})},u.id))}),d.jsx(qE,{children:d.jsx(gi,{to:"/menu",children:d.jsx(tn,{variant:"secondary",size:"large",children:"전체 메뉴 보기"})})})]})}),d.jsxs(YE,{children:[d.jsx(FE,{}),d.jsx(sp,{children:d.jsxs($E,{as:Gt.div,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[d.jsx(XE,{children:"나만의 완벽한 카레를 만들어보세요"}),d.jsxs(KE,{children:["밥 양, 맵기, 토핑을 자유롭게 선택하고",d.jsx("br",{}),"당신만의 특별한 카레를 완성하세요"]}),d.jsxs(QE,{children:[d.jsx(gi,{to:"/simulator",children:d.jsx(tn,{size:"large",children:"카레 만들기"})}),d.jsx(gi,{to:"/store",children:d.jsxs(tn,{variant:"secondary",size:"large",children:[d.jsx(jg,{})," 매장 찾기"]})})]})]})})]})]})},xE=S.main`
  padding-top: 80px;
`,_E=S.section`
  position: relative;
  height: calc(100vh - 80px);
  min-height: 600px;
  overflow: hidden;
`,bE=S.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${n=>n.$active?1:0};
  transition: opacity 1s ease;
  pointer-events: ${n=>n.$active?"auto":"none"};
`,wE=S.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: ${n=>n.$active?1:0};
  transition: opacity 1s ease;
`,SE=S.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gradient-overlay);
`,TE=S.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--color-white);
  padding: 2rem;
  z-index: 1;
`,CE=S.p`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,jE=S.h1`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--color-white);
  text-shadow: 0 2px 20px rgba(0,0,0,0.5);
`,EE=S.p`
  font-size: 1.5rem;
  margin-bottom: 3rem;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`,AE=S(gi)`
  text-decoration: none;
`,ME=S.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 2;
`,zE=S.button`
  width: ${n=>n.$active?"40px":"12px"};
  height: 12px;
  border-radius: 6px;
  background: ${n=>n.$active?"var(--color-primary)":"rgba(255,255,255,0.5)"};
  border: none;
  cursor: pointer;
  transition: all var(--transition-normal);
`,LE=S.section`
  padding: 6rem 0;
  background: var(--color-light-gray);
`,sp=S.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,OE=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,DE=S.div`
  background: var(--color-white);
  padding: 3rem 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`,RE=S.div`
  font-size: 3rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`,kE=S.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 0.75rem;
`,BE=S.p`
  font-size: 0.95rem;
  color: var(--color-gray);
  line-height: 1.6;
`,PE=S.section`
  padding: 6rem 0;
`,NE=S.div`
  text-align: center;
  margin-bottom: 4rem;
`,VE=S.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-light-gray);
  color: var(--color-primary);
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`,HE=S.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--color-dark);
  margin-bottom: 1rem;
`,UE=S.p`
  font-size: 1.125rem;
  color: var(--color-gray);
  max-width: 600px;
  margin: 0 auto;
`,ZE=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,IE=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,GE=S.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--color-primary);
  color: var(--color-white);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.875rem;
`,qE=S.div`
  text-align: center;
  
  a {
    text-decoration: none;
  }
`,YE=S.section`
  position: relative;
  padding: 8rem 0;
  background: url('/images/cta-bg.jpg') center/cover;
  color: var(--color-white);
`,FE=S.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(230, 0, 18, 0.9), rgba(255, 107, 53, 0.9));
`,$E=S.div`
  position: relative;
  text-align: center;
  z-index: 1;
`,XE=S.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--color-white);
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
`,KE=S.p`
  font-size: 1.25rem;
  margin-bottom: 3rem;
  line-height: 1.8;
`,QE=S.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  
  a {
    text-decoration: none;
  }
`,lc="cocoichibanya_curry_menus",cc="cocoichibanya_toppings",uc="cocoichibanya_sides",dc="cocoichibanya_drinks";class WE{async getAllCurryMenus(){const a=localStorage.getItem(lc);return(a?JSON.parse(a):[]).sort((c,u)=>{const m=c.displayOrder??9999,g=u.displayOrder??9999;return m-g})}async createCurryMenu(a){const o=await this.getAllCurryMenus(),c={...a,id:`curry-${Date.now()}`,createdAt:new Date().toISOString()};return o.push(c),localStorage.setItem(lc,JSON.stringify(o)),c}async updateCurryMenu(a,o){const c=await this.getAllCurryMenus(),u=c.findIndex(m=>m.id===a);if(u===-1)throw new Error("메뉴를 찾을 수 없습니다.");return c[u]={...c[u],...o,updatedAt:new Date().toISOString()},localStorage.setItem(lc,JSON.stringify(c)),c[u]}async deleteCurryMenu(a){const c=(await this.getAllCurryMenus()).filter(u=>u.id!==a);return localStorage.setItem(lc,JSON.stringify(c)),{success:!0}}async getAllToppings(){const a=localStorage.getItem(cc);return(a?JSON.parse(a):[]).sort((c,u)=>{const m=c.displayOrder??9999,g=u.displayOrder??9999;return m-g})}async createTopping(a){const o=await this.getAllToppings(),c={...a,id:`topping-${Date.now()}`,createdAt:new Date().toISOString()};return o.push(c),localStorage.setItem(cc,JSON.stringify(o)),c}async updateTopping(a,o){const c=await this.getAllToppings(),u=c.findIndex(m=>m.id===a);if(u===-1)throw new Error("토핑을 찾을 수 없습니다.");return c[u]={...c[u],...o,updatedAt:new Date().toISOString()},localStorage.setItem(cc,JSON.stringify(c)),c[u]}async deleteTopping(a){const c=(await this.getAllToppings()).filter(u=>u.id!==a);return localStorage.setItem(cc,JSON.stringify(c)),{success:!0}}async getAllSides(){const a=localStorage.getItem(uc);return(a?JSON.parse(a):[]).sort((c,u)=>{const m=c.displayOrder??9999,g=u.displayOrder??9999;return m-g})}async createSide(a){const o=await this.getAllSides(),c={...a,id:`side-${Date.now()}`,createdAt:new Date().toISOString()};return o.push(c),localStorage.setItem(uc,JSON.stringify(o)),c}async updateSide(a,o){const c=await this.getAllSides(),u=c.findIndex(m=>m.id===a);if(u===-1)throw new Error("사이드를 찾을 수 없습니다.");return c[u]={...c[u],...o,updatedAt:new Date().toISOString()},localStorage.setItem(uc,JSON.stringify(c)),c[u]}async deleteSide(a){const c=(await this.getAllSides()).filter(u=>u.id!==a);return localStorage.setItem(uc,JSON.stringify(c)),{success:!0}}async getAllDrinks(){const a=localStorage.getItem(dc);return(a?JSON.parse(a):[]).sort((c,u)=>{const m=c.displayOrder??9999,g=u.displayOrder??9999;return m-g})}async createDrink(a){const o=await this.getAllDrinks(),c={...a,id:`drink-${Date.now()}`,createdAt:new Date().toISOString()};return o.push(c),localStorage.setItem(dc,JSON.stringify(o)),c}async updateDrink(a,o){const c=await this.getAllDrinks(),u=c.findIndex(m=>m.id===a);if(u===-1)throw new Error("음료를 찾을 수 없습니다.");return c[u]={...c[u],...o,updatedAt:new Date().toISOString()},localStorage.setItem(dc,JSON.stringify(c)),c[u]}async deleteDrink(a){const c=(await this.getAllDrinks()).filter(u=>u.id!==a);return localStorage.setItem(dc,JSON.stringify(c)),{success:!0}}}const pe=new WE,Q5=async()=>{if((await pe.getAllCurryMenus()).length===0){const u=[{id:"pork-cutlet",name:"로스카츠 카레",category:"pork",price:7800,description:"코코이찌방야의 대표 메뉴! 바삭한 로스카츠와 진한 카레의 환상 조합",image:"/images/menu/pork-cutlet.jpg",popular:!0,allergens:["돼지고기","밀","대두"],calories:850,spicy:0},{id:"chicken-cutlet",name:"치킨카츠 카레",category:"chicken",price:7500,description:"부드러운 치킨카츠와 코코이찌방야 특제 카레",image:"/images/menu/chicken-cutlet.jpg",popular:!0,allergens:["닭고기","밀","대두"],calories:780,spicy:0}];localStorage.setItem(lc,JSON.stringify(u))}if((await pe.getAllToppings()).length===0){const u=[{id:"cheese",name:"치즈",price:1e3,category:"dairy",image:"/images/toppings/cheese.jpg",description:"고소한 체다치즈",allergens:["우유"]},{id:"egg",name:"계란후라이",price:800,category:"protein",image:"/images/toppings/egg.jpg",description:"반숙 계란후라이",allergens:["계란"]}];localStorage.setItem(cc,JSON.stringify(u))}if((await pe.getAllSides()).length===0){const u=[{id:"salad",name:"코울슬로 샐러드",category:"salad",price:2500,description:"상큼한 양배추 샐러드",image:"/images/sides/salad.jpg",calories:150},{id:"soup",name:"미소시루",category:"soup",price:1500,description:"따뜻한 된장국",image:"/images/sides/soup.jpg",calories:50}];localStorage.setItem(uc,JSON.stringify(u))}if((await pe.getAllDrinks()).length===0){const u=[{id:"cola",name:"콜라",category:"soft",price:2e3,description:"시원한 코카콜라",image:"/images/drinks/cola.jpg"},{id:"orange-juice",name:"오렌지주스",category:"juice",price:2500,description:"생과일 오렌지주스",image:"/images/drinks/orange.jpg"}];localStorage.setItem(dc,JSON.stringify(u))}},JE=[{id:"all",name:"전체",icon:"🍛"},{id:"pork",name:"돈까스 카레",icon:"🐷"},{id:"chicken",name:"치킨 카레",icon:"🐔"},{id:"beef",name:"비프 카레",icon:"🥩"},{id:"seafood",name:"해산물 카레",icon:"🦐"},{id:"vegetable",name:"야채 카레",icon:"🥗"},{id:"special",name:"스페셜 메뉴",icon:"⭐"}],tA=()=>{const[n,a]=z.useState([]),[o,c]=z.useState([]),[u,m]=z.useState([]),[g,x]=z.useState([]),[y,_]=z.useState(!0),[T,C]=z.useState("all"),[A,O]=z.useState(""),[R,P]=z.useState("curry");z.useEffect(()=>{(async()=>{try{await Q5();const M=await pe.getAllCurryMenus(),B=await pe.getAllToppings(),Q=await pe.getAllSides(),tt=await pe.getAllDrinks();a(M),c(B),m(Q),x(tt)}catch(M){console.error("메뉴 데이터 로드 실패:",M)}finally{_(!1)}})()},[]);const I=n.filter(D=>{const M=T==="all"||D.category===T,B=D.name.toLowerCase().includes(A.toLowerCase())||D.description.toLowerCase().includes(A.toLowerCase());return M&&B});return y?d.jsx(C_,{children:d.jsx(OA,{children:"메뉴를 불러오는 중..."})}):d.jsxs(C_,{children:[d.jsx(Bs,{title:"메뉴",description:"코코이찌방야의 다양한 카레 메뉴를 확인하세요. 로스카츠 카레, 치킨카츠 카레, 해산물 카레 등 40가지 이상의 메뉴와 20여 가지 토핑을 제공합니다.",keywords:"코코이찌방야 메뉴, 카레 메뉴, 돈까스 카레, 치킨 카레, 토핑, 사이드메뉴",url:"https://cocoichibanya.co.kr/menu"}),d.jsxs(eA,{children:[d.jsx(nA,{}),d.jsxs(iA,{children:[d.jsx(aA,{as:Gt.h1,initial:{opacity:0,y:30},animate:{opacity:1,y:0},children:"메뉴"}),d.jsx(rA,{as:Gt.p,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.1},children:"코코이찌방야의 다양한 메뉴를 만나보세요"})]})]}),d.jsxs(oA,{children:[d.jsxs(sA,{children:[d.jsx(Cd,{$active:R==="curry",onClick:()=>P("curry"),children:"카레 메뉴"}),d.jsx(Cd,{$active:R==="topping",onClick:()=>P("topping"),children:"토핑"}),d.jsx(Cd,{$active:R==="side",onClick:()=>P("side"),children:"사이드"}),d.jsx(Cd,{$active:R==="drink",onClick:()=>P("drink"),children:"음료"})]}),R==="curry"&&d.jsxs(d.Fragment,{children:[d.jsx(lA,{children:d.jsxs(cA,{children:[d.jsx(Cs,{}),d.jsx(uA,{type:"text",placeholder:"메뉴 검색...",value:A,onChange:D=>O(D.target.value)})]})}),d.jsx(dA,{children:JE.map(D=>d.jsxs(fA,{$active:T===D.id,onClick:()=>C(D.id),children:[d.jsx("span",{children:D.icon}),d.jsx("span",{children:D.name})]},D.id))}),d.jsx(hA,{children:I.map((D,M)=>d.jsx(Gt.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:M*.05},children:d.jsxs(Zd,{hover:!0,children:[d.jsxs(Id,{children:[d.jsx(lp,{src:D.image,alt:D.name}),D.popular&&d.jsx(mA,{children:"BEST"}),d.jsx(pA,{children:D.calories&&d.jsxs(gA,{children:[D.calories," kcal"]})})]}),d.jsxs(Gd,{children:[d.jsx(qd,{children:D.name}),d.jsx(Yd,{children:D.description}),D.allergens&&D.allergens.length>0&&d.jsxs(vA,{children:[d.jsx(yA,{children:"알레르기:"}),D.allergens.map((B,Q)=>d.jsx(xA,{children:B},Q))]}),d.jsx(_A,{children:d.jsxs(Fd,{children:[D.price.toLocaleString(),"원"]})})]})]})},D.id))}),I.length===0&&d.jsx(bA,{children:d.jsx("p",{children:"검색 결과가 없습니다."})}),d.jsxs(wA,{children:[d.jsx(SA,{children:"나만의 카레를 만들어보세요!"}),d.jsx(TA,{children:"원하는 토핑과 맵기를 선택하여 나만의 완벽한 카레를 완성하세요"}),d.jsx(gi,{to:"/simulator",children:d.jsx(tn,{size:"large",children:"카레 시뮬레이터"})})]})]}),R==="topping"&&d.jsxs(d.Fragment,{children:[d.jsx(cp,{children:"토핑 추가"}),d.jsx(up,{children:"카레에 토핑을 추가하여 더욱 풍성하게 즐겨보세요"}),d.jsx(CA,{children:o.map((D,M)=>d.jsx(Gt.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:M*.05},children:d.jsxs(jA,{children:[d.jsx(EA,{src:D.image,alt:D.name}),d.jsxs(AA,{children:[d.jsx(MA,{children:D.name}),d.jsx(zA,{children:D.description}),d.jsxs(LA,{children:["+",D.price.toLocaleString(),"원"]})]})]})},D.id))})]}),R==="side"&&d.jsxs(d.Fragment,{children:[d.jsx(cp,{children:"사이드 메뉴"}),d.jsx(up,{children:"카레와 함께 즐기기 좋은 사이드 메뉴"}),d.jsx(j_,{children:u.map((D,M)=>d.jsx(Gt.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:M*.1},children:d.jsxs(Zd,{hover:!0,children:[d.jsx(Id,{children:d.jsx(lp,{src:D.image,alt:D.name})}),d.jsxs(Gd,{children:[d.jsx(qd,{children:D.name}),d.jsx(Yd,{children:D.description}),d.jsxs(Fd,{children:[D.price.toLocaleString(),"원"]})]})]})},D.id))})]}),R==="drink"&&d.jsxs(d.Fragment,{children:[d.jsx(cp,{children:"음료"}),d.jsx(up,{children:"시원한 음료와 함께 완벽한 한 끼"}),d.jsx(j_,{children:g.map((D,M)=>d.jsx(Gt.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:M*.1},children:d.jsxs(Zd,{hover:!0,children:[d.jsx(Id,{children:d.jsx(lp,{src:D.image,alt:D.name})}),d.jsxs(Gd,{children:[d.jsx(qd,{children:D.name}),d.jsx(Yd,{children:D.description}),d.jsxs(Fd,{children:[D.price.toLocaleString(),"원"]})]})]})},D.id))})]})]})]})},C_=S.div`
  padding-top: 80px;
  min-height: 100vh;
`,eA=S.div`
  position: relative;
  height: 300px;
  background: url('/images/menu-header.jpg') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    height: 200px;
  }
`,nA=S.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(230, 0, 18, 0.8), rgba(255, 107, 53, 0.8));
`,iA=S.div`
  position: relative;
  text-align: center;
  color: var(--color-white);
  z-index: 1;
`,aA=S.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--color-white);
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
`,rA=S.p`
  font-size: 1.25rem;
`,oA=S.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,sA=S.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
`,Cd=S.button`
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  background: ${n=>n.$active?"var(--gradient-primary)":"var(--color-white)"};
  color: ${n=>n.$active?"var(--color-white)":"var(--color-dark)"};
  border: 2px solid ${n=>n.$active?"transparent":"var(--color-light-gray)"};
  border-radius: 50px;
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
`,lA=S.div`
  margin-bottom: 2rem;
`,cA=S.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  background: var(--color-white);
  border: 2px solid var(--color-light-gray);
  border-radius: 50px;
  transition: var(--transition-fast);

  &:focus-within {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-md);
  }

  svg {
    color: var(--color-gray);
    font-size: 1.25rem;
  }
`,uA=S.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  font-family: var(--font-primary);
`,dA=S.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  overflow-x: auto;
  padding: 0.5rem 0;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-light-gray);
    border-radius: 3px;
  }
`,fA=S.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${n=>n.$active?"var(--color-primary)":"var(--color-white)"};
  color: ${n=>n.$active?"var(--color-white)":"var(--color-dark)"};
  border: 2px solid ${n=>n.$active?"var(--color-primary)":"var(--color-light-gray)"};
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    transform: translateY(-2px);
  }
`,hA=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,lp=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,mA=S.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--color-primary);
  color: var(--color-white);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.875rem;
`,pA=S.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,gA=S.div`
  background: rgba(0, 0, 0, 0.7);
  color: var(--color-white);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
`,vA=S.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
  padding-top: 1rem;
  border-top: 1px solid var(--color-light-gray);
`,yA=S.span`
  font-size: 0.875rem;
  color: var(--color-gray);
  font-weight: 600;
`,xA=S.span`
  background: var(--color-light-gray);
  color: var(--color-dark);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
`,_A=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`,bA=S.div`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--color-gray);
  font-size: 1.125rem;
`,wA=S.div`
  text-align: center;
  padding: 4rem 2rem;
  background: var(--gradient-primary);
  border-radius: 20px;
  color: var(--color-white);
  
  a {
    text-decoration: none;
  }
`,SA=S.h2`
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--color-white);
`,TA=S.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.95;
`,cp=S.h2`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
`,up=S.p`
  text-align: center;
  font-size: 1.125rem;
  color: var(--color-gray);
  margin-bottom: 3rem;
`,CA=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`,jA=S.div`
  background: var(--color-white);
  border: 2px solid var(--color-light-gray);
  border-radius: 12px;
  overflow: hidden;
  transition: all var(--transition-normal);
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
    border-color: var(--color-primary);
  }
`,EA=S.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`,AA=S.div`
  padding: 1.5rem;
`,MA=S.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
`,zA=S.p`
  font-size: 0.875rem;
  color: var(--color-gray);
  margin-bottom: 1rem;
`,LA=S.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
`,j_=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`,OA=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: 1.25rem;
  color: var(--color-gray);
`,DA=()=>{const[n,a]=z.useState(1),[o,c]=z.useState(null),[u,m]=z.useState("normal"),[g,x]=z.useState("normal"),[y,_]=z.useState(0),[T,C]=z.useState([]),[A,O]=z.useState("all"),R=()=>{let M=o?o.price:0;const B=Td.find(tt=>tt.value===u);B&&(M+=B.price);const Q=T_.find(tt=>tt.value===g);return Q&&(M+=Q.price),T.forEach(tt=>{const ot=Ql.find($=>$.id===tt);ot&&(M+=ot.price)}),M},P=M=>{T.includes(M)?C(T.filter(B=>B!==M)):C([...T,M])},I=A==="all"?Ql:Ql.filter(M=>M.category===A),D=()=>{a(1),c(null),m("normal"),x("normal"),_(0),C([]),O("all")};return d.jsxs(RA,{children:[d.jsx(Bs,{title:"나만의 카레 만들기",description:"코코이찌방야의 인터랙티브 카레 시뮬레이터로 나만의 완벽한 카레를 만들어보세요. 베이스, 밥 양, 맵기, 토핑을 자유롭게 선택할 수 있습니다.",keywords:"카레 시뮬레이터, 커스터마이징, 나만의 카레, 맵기 조절, 토핑 선택",url:"https://cocoichibanya.co.kr/simulator"}),d.jsx(kA,{children:d.jsxs(E_,{children:[d.jsx(BA,{as:Gt.h1,initial:{opacity:0,y:30},animate:{opacity:1,y:0},children:"나만의 카레 만들기"}),d.jsx(PA,{children:"원하는 토핑과 맵기를 선택하여 당신만의 완벽한 카레를 만들어보세요"})]})}),d.jsx(E_,{children:d.jsxs(NA,{children:[d.jsx(VA,{children:[{num:1,label:"베이스 선택"},{num:2,label:"밥/소스"},{num:3,label:"맵기"},{num:4,label:"토핑"},{num:5,label:"완성"}].map(({num:M,label:B})=>d.jsxs(HA,{$active:n===M,$completed:n>M,children:[d.jsx(UA,{$active:n===M,$completed:n>M,children:n>M?d.jsx(ls,{}):M}),d.jsx(ZA,{children:B})]},M))}),d.jsxs(IA,{children:[d.jsx(GA,{children:d.jsxs(l7,{mode:"wait",children:[n===1&&d.jsxs(Wl,{as:Gt.div,initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:-50},children:[d.jsx(Jl,{children:"베이스 카레를 선택하세요"}),d.jsx(qA,{children:K5.map(M=>d.jsxs(YA,{$selected:o?.id===M.id,onClick:()=>c(M),children:[d.jsx(FA,{src:M.image,alt:M.name}),d.jsx($A,{children:M.name}),d.jsxs(XA,{children:[M.price.toLocaleString(),"원"]}),o?.id===M.id&&d.jsx(A_,{children:d.jsx(ls,{})})]},M.id))}),d.jsx(tc,{children:d.jsx(tn,{size:"large",disabled:!o,onClick:()=>a(2),children:"다음 단계"})})]},"step1"),n===2&&d.jsxs(Wl,{as:Gt.div,initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:-50},children:[d.jsx(Jl,{children:"밥 양과 소스를 선택하세요"}),d.jsxs(M_,{children:[d.jsx(z_,{children:"밥 양"}),d.jsx(L_,{children:Td.map(M=>d.jsxs(O_,{$selected:u===M.value,onClick:()=>m(M.value),children:[d.jsx(D_,{children:M.name}),M.price>0&&d.jsxs(R_,{children:["+",M.price,"원"]})]},M.value))})]}),d.jsxs(M_,{children:[d.jsx(z_,{children:"카레 소스"}),d.jsx(L_,{children:T_.map(M=>d.jsxs(O_,{$selected:g===M.value,onClick:()=>x(M.value),children:[d.jsx(D_,{children:M.name}),M.price>0&&d.jsxs(R_,{children:["+",M.price,"원"]})]},M.value))})]}),d.jsxs(tc,{children:[d.jsx(tn,{variant:"outline",onClick:()=>a(1),children:"이전"}),d.jsx(tn,{size:"large",onClick:()=>a(3),children:"다음 단계"})]})]},"step2"),n===3&&d.jsxs(Wl,{as:Gt.div,initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:-50},children:[d.jsx(Jl,{children:"맵기를 선택하세요"}),d.jsxs(KA,{children:[d.jsx(QA,{$level:y,children:d.jsx(vs,{})}),d.jsxs(WA,{children:["단계 ",y]}),d.jsx(JA,{children:Kl[y].name}),d.jsx(t9,{children:Kl[y].description})]}),d.jsxs(e9,{children:[d.jsx(n9,{type:"range",min:"0",max:"10",value:y,onChange:M=>_(parseInt(M.target.value))}),d.jsxs(i9,{children:[d.jsx("span",{children:"보통"}),d.jsx("span",{children:"중간"}),d.jsx("span",{children:"극강"})]})]}),d.jsx(a9,{children:Kl.map(M=>d.jsxs(r9,{$selected:y===M.level,onClick:()=>_(M.level),children:[d.jsx(vs,{style:{opacity:M.heat/100,color:M.heat>50?"#e60012":"#ff6b35"}}),d.jsx("span",{children:M.level})]},M.level))}),d.jsxs(tc,{children:[d.jsx(tn,{variant:"outline",onClick:()=>a(2),children:"이전"}),d.jsx(tn,{size:"large",onClick:()=>a(4),children:"다음 단계"})]})]},"step3"),n===4&&d.jsxs(Wl,{as:Gt.div,initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:-50},children:[d.jsxs(Jl,{children:["토핑을 선택하세요 (",T.length,"개 선택)"]}),d.jsx(o9,{children:gE.map(M=>d.jsx(s9,{$active:A===M.id,onClick:()=>O(M.id),children:M.name},M.id))}),d.jsx(l9,{children:I.map(M=>d.jsxs(c9,{$selected:T.includes(M.id),onClick:()=>P(M.id),children:[d.jsx(u9,{src:M.image,alt:M.name}),d.jsxs(d9,{children:[d.jsx(f9,{children:M.name}),d.jsxs(h9,{children:["+",M.price.toLocaleString(),"원"]})]}),T.includes(M.id)&&d.jsx(A_,{children:d.jsx(ls,{})})]},M.id))}),d.jsxs(tc,{children:[d.jsx(tn,{variant:"outline",onClick:()=>a(3),children:"이전"}),d.jsx(tn,{size:"large",onClick:()=>a(5),children:"완성하기"})]})]},"step4"),n===5&&d.jsxs(Wl,{as:Gt.div,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},children:[d.jsxs(m9,{children:[d.jsx(ls,{})," 완성!"]}),d.jsx(Jl,{children:"나만의 카레가 완성되었습니다!"}),d.jsxs(p9,{children:[d.jsx(g9,{children:"주문 내역"}),d.jsxs(jd,{children:[d.jsx("span",{children:"베이스"}),d.jsx("span",{children:o?.name}),d.jsxs("span",{children:[o?.price.toLocaleString(),"원"]})]}),d.jsxs(jd,{children:[d.jsx("span",{children:"밥 양"}),d.jsx("span",{children:Td.find(M=>M.value===u)?.name})]}),d.jsxs(jd,{children:[d.jsx("span",{children:"맵기"}),d.jsx("span",{children:Kl[y].name})]}),T.length>0&&d.jsxs(d.Fragment,{children:[d.jsx(k_,{}),d.jsx(v9,{children:"토핑"}),T.map(M=>{const B=Ql.find(Q=>Q.id===M);return d.jsxs(jd,{children:[d.jsx("span",{children:B?.name}),d.jsxs("span",{children:["+",B?.price.toLocaleString(),"원"]})]},M)})]}),d.jsx(k_,{}),d.jsxs(y9,{children:[d.jsx("span",{children:"총 금액"}),d.jsxs("span",{children:[R().toLocaleString(),"원"]})]})]}),d.jsxs(tc,{children:[d.jsxs(tn,{variant:"outline",size:"large",onClick:D,children:[d.jsx(s8,{})," 다시 만들기"]}),d.jsxs(tn,{size:"large",children:[d.jsx(l8,{})," 매장 찾기"]})]})]},"step5")]})}),d.jsx(x9,{children:d.jsxs(_9,{children:[d.jsx(b9,{children:"미리보기"}),o&&d.jsx(w9,{src:o.image,alt:"preview"}),d.jsxs(S9,{children:[d.jsxs(Ed,{children:[d.jsx(Ad,{children:"베이스"}),d.jsx(dp,{children:o?.name||"선택하세요"})]}),d.jsxs(Ed,{children:[d.jsx(Ad,{children:"밥 양"}),d.jsx(dp,{children:Td.find(M=>M.value===u)?.name})]}),d.jsxs(Ed,{children:[d.jsx(Ad,{children:"맵기"}),d.jsxs(dp,{children:[Kl[y].name,d.jsx(vs,{style:{marginLeft:"0.5rem",color:y>5?"#e60012":"#ff6b35",opacity:y/10}})]})]}),T.length>0&&d.jsxs(Ed,{children:[d.jsxs(Ad,{children:["토핑 (",T.length,")"]}),d.jsx(T9,{children:T.map(M=>{const B=Ql.find(Q=>Q.id===M);return d.jsx(C9,{children:B?.name},M)})})]})]}),d.jsxs(j9,{children:[d.jsx(E9,{children:"예상 금액"}),d.jsxs(A9,{children:[R().toLocaleString(),"원"]})]})]})})]})]})})]})},RA=S.div`
  padding-top: 80px;
  min-height: 100vh;
  background: var(--color-light-gray);
`,kA=S.div`
  background: var(--gradient-primary);
  color: var(--color-white);
  padding: 4rem 0 3rem;
  text-align: center;
`,E_=S.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,BA=S.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 1rem;
`,PA=S.p`
  font-size: 1.125rem;
  opacity: 0.95;
`,NA=S.div`
  padding: 3rem 0;
`,VA=S.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;
  padding: 2rem;
  background: var(--color-white);
  border-radius: 16px;
  box-shadow: var(--shadow-sm);
  overflow-x: auto;

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1rem;
  }
`,HA=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: ${n=>n.$active||n.$completed?1:.4};
  transition: var(--transition-normal);
`,UA=S.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
  background: ${n=>n.$active||n.$completed?"var(--gradient-primary)":"var(--color-light-gray)"};
  color: ${n=>n.$active||n.$completed?"var(--color-white)":"var(--color-gray)"};
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`,ZA=S.span`
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
`,IA=S.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,GA=S.div`
  background: var(--color-white);
  border-radius: 16px;
  padding: 3rem;
  box-shadow: var(--shadow-md);
  min-height: 600px;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,Wl=S.div``,Jl=S.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  margin-bottom: 2rem;
  color: var(--color-dark);
`,qA=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`,YA=S.div`
  position: relative;
  background: var(--color-white);
  border: 3px solid ${n=>n.$selected?"var(--color-primary)":"var(--color-light-gray)"};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`,FA=S.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`,$A=S.div`
  padding: 1rem;
  font-weight: 700;
  text-align: center;
`,XA=S.div`
  padding: 0 1rem 1rem;
  text-align: center;
  color: var(--color-primary);
  font-weight: 700;
`,A_=S.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 30px;
  height: 30px;
  background: var(--color-primary);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
`,tc=S.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
`,M_=S.div`
  margin-bottom: 2rem;
`,z_=S.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,L_=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`,O_=S.div`
  padding: 1.5rem;
  background: ${n=>n.$selected?"var(--gradient-primary)":"var(--color-light-gray)"};
  color: ${n=>n.$selected?"var(--color-white)":"var(--color-dark)"};
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-3px);
  }
`,D_=S.div`
  font-weight: 700;
  margin-bottom: 0.5rem;
`,R_=S.div`
  font-size: 0.875rem;
  opacity: 0.9;
`,KA=S.div`
  text-align: center;
  padding: 3rem 2rem;
  background: var(--color-light-gray);
  border-radius: 16px;
  margin-bottom: 2rem;
`,QA=S.div`
  font-size: 4rem;
  color: var(--color-primary);
  opacity: ${n=>n.$level/10};
  margin-bottom: 1rem;
`,WA=S.div`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`,JA=S.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`,t9=S.div`
  color: var(--color-gray);
`,e9=S.div`
  margin: 3rem 0;
`,n9=S.input`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(to right, #ffeb3b, #ff9800, #e60012);
  outline: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--color-white);
    border: 3px solid var(--color-primary);
    cursor: pointer;
    box-shadow: var(--shadow-md);
  }

  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--color-white);
    border: 3px solid var(--color-primary);
    cursor: pointer;
    box-shadow: var(--shadow-md);
  }
`,i9=S.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: var(--color-gray);
  font-weight: 600;
`,a9=S.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  gap: 0.5rem;
  margin-bottom: 2rem;
`,r9=S.div`
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background: ${n=>n.$selected?"var(--gradient-primary)":"var(--color-light-gray)"};
  color: ${n=>n.$selected?"var(--color-white)":"var(--color-dark)"};
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 700;
  transition: all var(--transition-fast);

  &:hover {
    transform: scale(1.1);
  }
`,o9=S.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
`,s9=S.button`
  padding: 0.75rem 1.5rem;
  background: ${n=>n.$active?"var(--color-primary)":"var(--color-light-gray)"};
  color: ${n=>n.$active?"var(--color-white)":"var(--color-dark)"};
  border: none;
  border-radius: 50px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    transform: translateY(-2px);
  }
`,l9=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`,c9=S.div`
  position: relative;
  background: var(--color-white);
  border: 3px solid ${n=>n.$selected?"var(--color-primary)":"var(--color-light-gray)"};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
`,u9=S.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
`,d9=S.div`
  padding: 0.75rem;
  text-align: center;
`,f9=S.div`
  font-weight: 700;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`,h9=S.div`
  font-size: 0.75rem;
  color: var(--color-primary);
  font-weight: 700;
`,m9=S.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--gradient-primary);
  color: var(--color-white);
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 2rem;
`,p9=S.div`
  background: var(--color-light-gray);
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
`,g9=S.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`,v9=S.h4`
  font-size: 1rem;
  font-weight: 700;
  margin: 1rem 0 0.5rem;
  color: var(--color-gray);
`,jd=S.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr auto;
  gap: 1rem;
  padding: 0.75rem 0;
  font-size: 0.95rem;

  span:first-child {
    color: var(--color-gray);
  }

  span:last-child {
    font-weight: 700;
    text-align: right;
  }
`,k_=S.div`
  height: 1px;
  background: var(--color-gray);
  opacity: 0.3;
  margin: 1rem 0;
`,y9=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-primary);
  padding-top: 1rem;
`,x9=S.div`
  @media (max-width: 1024px) {
    display: none;
  }
`,_9=S.div`
  position: sticky;
  top: 100px;
  background: var(--color-white);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: var(--shadow-md);
`,b9=S.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`,w9=S.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1.5rem;
`,S9=S.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`,Ed=S.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Ad=S.div`
  font-size: 0.875rem;
  color: var(--color-gray);
  font-weight: 600;
`,dp=S.div`
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-dark);
  display: flex;
  align-items: center;
`,T9=S.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,C9=S.span`
  background: var(--color-light-gray);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
`,j9=S.div`
  padding-top: 1.5rem;
  border-top: 2px solid var(--color-light-gray);
  text-align: center;
`,E9=S.div`
  font-size: 0.875rem;
  color: var(--color-gray);
  margin-bottom: 0.5rem;
`,A9=S.div`
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-primary);
`;function W5(n,a){const o=z.useRef(a);z.useEffect(function(){a!==o.current&&n.attributionControl!=null&&(o.current!=null&&n.attributionControl.removeAttribution(o.current),a!=null&&n.attributionControl.addAttribution(a)),o.current=a},[n,a])}const M9=1;function z9(n){return Object.freeze({__version:M9,map:n})}function L9(n,a){return Object.freeze({...n,...a})}const s0=z.createContext(null);function J5(){const n=z.use(s0);if(n==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return n}function O9(n){function a(o,c){const{instance:u,context:m}=n(o).current;z.useImperativeHandle(c,()=>u);const{children:g}=o;return g==null?null:oe.createElement(s0,{value:m},g)}return z.forwardRef(a)}function D9(n){function a(o,c){const[u,m]=z.useState(!1),{instance:g}=n(o,m).current;z.useImperativeHandle(c,()=>g),z.useEffect(function(){u&&g.update()},[g,u,o.children]);const x=g._contentNode;return x?RS.createPortal(o.children,x):null}return z.forwardRef(a)}function R9(n){function a(o,c){const{instance:u}=n(o).current;return z.useImperativeHandle(c,()=>u),null}return z.forwardRef(a)}function tw(n,a){const o=z.useRef(void 0);z.useEffect(function(){return a!=null&&n.instance.on(a),o.current=a,function(){o.current!=null&&n.instance.off(o.current),o.current=null}},[n,a])}function l0(n,a){const o=n.pane??a.pane;return o?{...n,pane:o}:n}function k9(n,a){return function(c,u){const m=J5(),g=n(l0(c,m),m);return W5(m.map,c.attribution),tw(g.current,c.eventHandlers),a(g.current,m,c,u),g}}var fc={exports:{}};var B9=fc.exports,B_;function P9(){return B_||(B_=1,(function(n,a){(function(o,c){c(a)})(B9,(function(o){var c="1.9.4";function u(i){var s,f,v,b;for(f=1,v=arguments.length;f<v;f++){b=arguments[f];for(s in b)i[s]=b[s]}return i}var m=Object.create||(function(){function i(){}return function(s){return i.prototype=s,new i}})();function g(i,s){var f=Array.prototype.slice;if(i.bind)return i.bind.apply(i,f.call(arguments,1));var v=f.call(arguments,2);return function(){return i.apply(s,v.length?v.concat(f.call(arguments)):arguments)}}var x=0;function y(i){return"_leaflet_id"in i||(i._leaflet_id=++x),i._leaflet_id}function _(i,s,f){var v,b,j,k;return k=function(){v=!1,b&&(j.apply(f,b),b=!1)},j=function(){v?b=arguments:(i.apply(f,arguments),setTimeout(k,s),v=!0)},j}function T(i,s,f){var v=s[1],b=s[0],j=v-b;return i===v&&f?i:((i-b)%j+j)%j+b}function C(){return!1}function A(i,s){if(s===!1)return i;var f=Math.pow(10,s===void 0?6:s);return Math.round(i*f)/f}function O(i){return i.trim?i.trim():i.replace(/^\s+|\s+$/g,"")}function R(i){return O(i).split(/\s+/)}function P(i,s){Object.prototype.hasOwnProperty.call(i,"options")||(i.options=i.options?m(i.options):{});for(var f in s)i.options[f]=s[f];return i.options}function I(i,s,f){var v=[];for(var b in i)v.push(encodeURIComponent(f?b.toUpperCase():b)+"="+encodeURIComponent(i[b]));return(!s||s.indexOf("?")===-1?"?":"&")+v.join("&")}var D=/\{ *([\w_ -]+) *\}/g;function M(i,s){return i.replace(D,function(f,v){var b=s[v];if(b===void 0)throw new Error("No value provided for variable "+f);return typeof b=="function"&&(b=b(s)),b})}var B=Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"};function Q(i,s){for(var f=0;f<i.length;f++)if(i[f]===s)return f;return-1}var tt="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function ot(i){return window["webkit"+i]||window["moz"+i]||window["ms"+i]}var $=0;function lt(i){var s=+new Date,f=Math.max(0,16-(s-$));return $=s+f,window.setTimeout(i,f)}var pt=window.requestAnimationFrame||ot("RequestAnimationFrame")||lt,gt=window.cancelAnimationFrame||ot("CancelAnimationFrame")||ot("CancelRequestAnimationFrame")||function(i){window.clearTimeout(i)};function Tt(i,s,f){if(f&&pt===lt)i.call(s);else return pt.call(window,g(i,s))}function at(i){i&&gt.call(window,i)}var zt={__proto__:null,extend:u,create:m,bind:g,get lastId(){return x},stamp:y,throttle:_,wrapNum:T,falseFn:C,formatNum:A,trim:O,splitWords:R,setOptions:P,getParamString:I,template:M,isArray:B,indexOf:Q,emptyImageUrl:tt,requestFn:pt,cancelFn:gt,requestAnimFrame:Tt,cancelAnimFrame:at};function Bt(){}Bt.extend=function(i){var s=function(){P(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},f=s.__super__=this.prototype,v=m(f);v.constructor=s,s.prototype=v;for(var b in this)Object.prototype.hasOwnProperty.call(this,b)&&b!=="prototype"&&b!=="__super__"&&(s[b]=this[b]);return i.statics&&u(s,i.statics),i.includes&&(ge(i.includes),u.apply(null,[v].concat(i.includes))),u(v,i),delete v.statics,delete v.includes,v.options&&(v.options=f.options?m(f.options):{},u(v.options,i.options)),v._initHooks=[],v.callInitHooks=function(){if(!this._initHooksCalled){f.callInitHooks&&f.callInitHooks.call(this),this._initHooksCalled=!0;for(var j=0,k=v._initHooks.length;j<k;j++)v._initHooks[j].call(this)}},s},Bt.include=function(i){var s=this.prototype.options;return u(this.prototype,i),i.options&&(this.prototype.options=s,this.mergeOptions(i.options)),this},Bt.mergeOptions=function(i){return u(this.prototype.options,i),this},Bt.addInitHook=function(i){var s=Array.prototype.slice.call(arguments,1),f=typeof i=="function"?i:function(){this[i].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(f),this};function ge(i){if(!(typeof L>"u"||!L||!L.Mixin)){i=B(i)?i:[i];for(var s=0;s<i.length;s++)i[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var X={on:function(i,s,f){if(typeof i=="object")for(var v in i)this._on(v,i[v],s);else{i=R(i);for(var b=0,j=i.length;b<j;b++)this._on(i[b],s,f)}return this},off:function(i,s,f){if(!arguments.length)delete this._events;else if(typeof i=="object")for(var v in i)this._off(v,i[v],s);else{i=R(i);for(var b=arguments.length===1,j=0,k=i.length;j<k;j++)b?this._off(i[j]):this._off(i[j],s,f)}return this},_on:function(i,s,f,v){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(i,s,f)===!1){f===this&&(f=void 0);var b={fn:s,ctx:f};v&&(b.once=!0),this._events=this._events||{},this._events[i]=this._events[i]||[],this._events[i].push(b)}},_off:function(i,s,f){var v,b,j;if(this._events&&(v=this._events[i],!!v)){if(arguments.length===1){if(this._firingCount)for(b=0,j=v.length;b<j;b++)v[b].fn=C;delete this._events[i];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var k=this._listens(i,s,f);if(k!==!1){var Z=v[k];this._firingCount&&(Z.fn=C,this._events[i]=v=v.slice()),v.splice(k,1)}}},fire:function(i,s,f){if(!this.listens(i,f))return this;var v=u({},s,{type:i,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var b=this._events[i];if(b){this._firingCount=this._firingCount+1||1;for(var j=0,k=b.length;j<k;j++){var Z=b[j],Y=Z.fn;Z.once&&this.off(i,Y,Z.ctx),Y.call(Z.ctx||this,v)}this._firingCount--}}return f&&this._propagateEvent(v),this},listens:function(i,s,f,v){typeof i!="string"&&console.warn('"string" type argument expected');var b=s;typeof s!="function"&&(v=!!s,b=void 0,f=void 0);var j=this._events&&this._events[i];if(j&&j.length&&this._listens(i,b,f)!==!1)return!0;if(v){for(var k in this._eventParents)if(this._eventParents[k].listens(i,s,f,v))return!0}return!1},_listens:function(i,s,f){if(!this._events)return!1;var v=this._events[i]||[];if(!s)return!!v.length;f===this&&(f=void 0);for(var b=0,j=v.length;b<j;b++)if(v[b].fn===s&&v[b].ctx===f)return b;return!1},once:function(i,s,f){if(typeof i=="object")for(var v in i)this._on(v,i[v],s,!0);else{i=R(i);for(var b=0,j=i.length;b<j;b++)this._on(i[b],s,f,!0)}return this},addEventParent:function(i){return this._eventParents=this._eventParents||{},this._eventParents[y(i)]=i,this},removeEventParent:function(i){return this._eventParents&&delete this._eventParents[y(i)],this},_propagateEvent:function(i){for(var s in this._eventParents)this._eventParents[s].fire(i.type,u({layer:i.target,propagatedFrom:i.target},i),!0)}};X.addEventListener=X.on,X.removeEventListener=X.clearAllEventListeners=X.off,X.addOneTimeEventListener=X.once,X.fireEvent=X.fire,X.hasEventListeners=X.listens;var st=Bt.extend(X);function rt(i,s,f){this.x=f?Math.round(i):i,this.y=f?Math.round(s):s}var Ct=Math.trunc||function(i){return i>0?Math.floor(i):Math.ceil(i)};rt.prototype={clone:function(){return new rt(this.x,this.y)},add:function(i){return this.clone()._add(dt(i))},_add:function(i){return this.x+=i.x,this.y+=i.y,this},subtract:function(i){return this.clone()._subtract(dt(i))},_subtract:function(i){return this.x-=i.x,this.y-=i.y,this},divideBy:function(i){return this.clone()._divideBy(i)},_divideBy:function(i){return this.x/=i,this.y/=i,this},multiplyBy:function(i){return this.clone()._multiplyBy(i)},_multiplyBy:function(i){return this.x*=i,this.y*=i,this},scaleBy:function(i){return new rt(this.x*i.x,this.y*i.y)},unscaleBy:function(i){return new rt(this.x/i.x,this.y/i.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Ct(this.x),this.y=Ct(this.y),this},distanceTo:function(i){i=dt(i);var s=i.x-this.x,f=i.y-this.y;return Math.sqrt(s*s+f*f)},equals:function(i){return i=dt(i),i.x===this.x&&i.y===this.y},contains:function(i){return i=dt(i),Math.abs(i.x)<=Math.abs(this.x)&&Math.abs(i.y)<=Math.abs(this.y)},toString:function(){return"Point("+A(this.x)+", "+A(this.y)+")"}};function dt(i,s,f){return i instanceof rt?i:B(i)?new rt(i[0],i[1]):i==null?i:typeof i=="object"&&"x"in i&&"y"in i?new rt(i.x,i.y):new rt(i,s,f)}function V(i,s){if(i)for(var f=s?[i,s]:i,v=0,b=f.length;v<b;v++)this.extend(f[v])}V.prototype={extend:function(i){var s,f;if(!i)return this;if(i instanceof rt||typeof i[0]=="number"||"x"in i)s=f=dt(i);else if(i=W(i),s=i.min,f=i.max,!s||!f)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=f.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(f.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(f.y,this.max.y)),this},getCenter:function(i){return dt((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,i)},getBottomLeft:function(){return dt(this.min.x,this.max.y)},getTopRight:function(){return dt(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(i){var s,f;return typeof i[0]=="number"||i instanceof rt?i=dt(i):i=W(i),i instanceof V?(s=i.min,f=i.max):s=f=i,s.x>=this.min.x&&f.x<=this.max.x&&s.y>=this.min.y&&f.y<=this.max.y},intersects:function(i){i=W(i);var s=this.min,f=this.max,v=i.min,b=i.max,j=b.x>=s.x&&v.x<=f.x,k=b.y>=s.y&&v.y<=f.y;return j&&k},overlaps:function(i){i=W(i);var s=this.min,f=this.max,v=i.min,b=i.max,j=b.x>s.x&&v.x<f.x,k=b.y>s.y&&v.y<f.y;return j&&k},isValid:function(){return!!(this.min&&this.max)},pad:function(i){var s=this.min,f=this.max,v=Math.abs(s.x-f.x)*i,b=Math.abs(s.y-f.y)*i;return W(dt(s.x-v,s.y-b),dt(f.x+v,f.y+b))},equals:function(i){return i?(i=W(i),this.min.equals(i.getTopLeft())&&this.max.equals(i.getBottomRight())):!1}};function W(i,s){return!i||i instanceof V?i:new V(i,s)}function ct(i,s){if(i)for(var f=s?[i,s]:i,v=0,b=f.length;v<b;v++)this.extend(f[v])}ct.prototype={extend:function(i){var s=this._southWest,f=this._northEast,v,b;if(i instanceof mt)v=i,b=i;else if(i instanceof ct){if(v=i._southWest,b=i._northEast,!v||!b)return this}else return i?this.extend(ht(i)||ut(i)):this;return!s&&!f?(this._southWest=new mt(v.lat,v.lng),this._northEast=new mt(b.lat,b.lng)):(s.lat=Math.min(v.lat,s.lat),s.lng=Math.min(v.lng,s.lng),f.lat=Math.max(b.lat,f.lat),f.lng=Math.max(b.lng,f.lng)),this},pad:function(i){var s=this._southWest,f=this._northEast,v=Math.abs(s.lat-f.lat)*i,b=Math.abs(s.lng-f.lng)*i;return new ct(new mt(s.lat-v,s.lng-b),new mt(f.lat+v,f.lng+b))},getCenter:function(){return new mt((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new mt(this.getNorth(),this.getWest())},getSouthEast:function(){return new mt(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(i){typeof i[0]=="number"||i instanceof mt||"lat"in i?i=ht(i):i=ut(i);var s=this._southWest,f=this._northEast,v,b;return i instanceof ct?(v=i.getSouthWest(),b=i.getNorthEast()):v=b=i,v.lat>=s.lat&&b.lat<=f.lat&&v.lng>=s.lng&&b.lng<=f.lng},intersects:function(i){i=ut(i);var s=this._southWest,f=this._northEast,v=i.getSouthWest(),b=i.getNorthEast(),j=b.lat>=s.lat&&v.lat<=f.lat,k=b.lng>=s.lng&&v.lng<=f.lng;return j&&k},overlaps:function(i){i=ut(i);var s=this._southWest,f=this._northEast,v=i.getSouthWest(),b=i.getNorthEast(),j=b.lat>s.lat&&v.lat<f.lat,k=b.lng>s.lng&&v.lng<f.lng;return j&&k},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(i,s){return i?(i=ut(i),this._southWest.equals(i.getSouthWest(),s)&&this._northEast.equals(i.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function ut(i,s){return i instanceof ct?i:new ct(i,s)}function mt(i,s,f){if(isNaN(i)||isNaN(s))throw new Error("Invalid LatLng object: ("+i+", "+s+")");this.lat=+i,this.lng=+s,f!==void 0&&(this.alt=+f)}mt.prototype={equals:function(i,s){if(!i)return!1;i=ht(i);var f=Math.max(Math.abs(this.lat-i.lat),Math.abs(this.lng-i.lng));return f<=(s===void 0?1e-9:s)},toString:function(i){return"LatLng("+A(this.lat,i)+", "+A(this.lng,i)+")"},distanceTo:function(i){return Jt.distance(this,ht(i))},wrap:function(){return Jt.wrapLatLng(this)},toBounds:function(i){var s=180*i/40075017,f=s/Math.cos(Math.PI/180*this.lat);return ut([this.lat-s,this.lng-f],[this.lat+s,this.lng+f])},clone:function(){return new mt(this.lat,this.lng,this.alt)}};function ht(i,s,f){return i instanceof mt?i:B(i)&&typeof i[0]!="object"?i.length===3?new mt(i[0],i[1],i[2]):i.length===2?new mt(i[0],i[1]):null:i==null?i:typeof i=="object"&&"lat"in i?new mt(i.lat,"lng"in i?i.lng:i.lon,i.alt):s===void 0?null:new mt(i,s,f)}var Mt={latLngToPoint:function(i,s){var f=this.projection.project(i),v=this.scale(s);return this.transformation._transform(f,v)},pointToLatLng:function(i,s){var f=this.scale(s),v=this.transformation.untransform(i,f);return this.projection.unproject(v)},project:function(i){return this.projection.project(i)},unproject:function(i){return this.projection.unproject(i)},scale:function(i){return 256*Math.pow(2,i)},zoom:function(i){return Math.log(i/256)/Math.LN2},getProjectedBounds:function(i){if(this.infinite)return null;var s=this.projection.bounds,f=this.scale(i),v=this.transformation.transform(s.min,f),b=this.transformation.transform(s.max,f);return new V(v,b)},infinite:!1,wrapLatLng:function(i){var s=this.wrapLng?T(i.lng,this.wrapLng,!0):i.lng,f=this.wrapLat?T(i.lat,this.wrapLat,!0):i.lat,v=i.alt;return new mt(f,s,v)},wrapLatLngBounds:function(i){var s=i.getCenter(),f=this.wrapLatLng(s),v=s.lat-f.lat,b=s.lng-f.lng;if(v===0&&b===0)return i;var j=i.getSouthWest(),k=i.getNorthEast(),Z=new mt(j.lat-v,j.lng-b),Y=new mt(k.lat-v,k.lng-b);return new ct(Z,Y)}},Jt=u({},Mt,{wrapLng:[-180,180],R:6371e3,distance:function(i,s){var f=Math.PI/180,v=i.lat*f,b=s.lat*f,j=Math.sin((s.lat-i.lat)*f/2),k=Math.sin((s.lng-i.lng)*f/2),Z=j*j+Math.cos(v)*Math.cos(b)*k*k,Y=2*Math.atan2(Math.sqrt(Z),Math.sqrt(1-Z));return this.R*Y}}),Xt=6378137,un={R:Xt,MAX_LATITUDE:85.0511287798,project:function(i){var s=Math.PI/180,f=this.MAX_LATITUDE,v=Math.max(Math.min(f,i.lat),-f),b=Math.sin(v*s);return new rt(this.R*i.lng*s,this.R*Math.log((1+b)/(1-b))/2)},unproject:function(i){var s=180/Math.PI;return new mt((2*Math.atan(Math.exp(i.y/this.R))-Math.PI/2)*s,i.x*s/this.R)},bounds:(function(){var i=Xt*Math.PI;return new V([-i,-i],[i,i])})()};function dn(i,s,f,v){if(B(i)){this._a=i[0],this._b=i[1],this._c=i[2],this._d=i[3];return}this._a=i,this._b=s,this._c=f,this._d=v}dn.prototype={transform:function(i,s){return this._transform(i.clone(),s)},_transform:function(i,s){return s=s||1,i.x=s*(this._a*i.x+this._b),i.y=s*(this._c*i.y+this._d),i},untransform:function(i,s){return s=s||1,new rt((i.x/s-this._b)/this._a,(i.y/s-this._d)/this._c)}};function ke(i,s,f,v){return new dn(i,s,f,v)}var xi=u({},Jt,{code:"EPSG:3857",projection:un,transformation:(function(){var i=.5/(Math.PI*un.R);return ke(i,.5,-i,.5)})()}),fn=u({},xi,{code:"EPSG:900913"});function jn(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function ho(i,s){var f="",v,b,j,k,Z,Y;for(v=0,j=i.length;v<j;v++){for(Z=i[v],b=0,k=Z.length;b<k;b++)Y=Z[b],f+=(b?"L":"M")+Y.x+" "+Y.y;f+=s?_t.svg?"z":"x":""}return f||"M0 0"}var Ns=document.documentElement.style,hr="ActiveXObject"in window,Vs=hr&&!document.addEventListener,mo="msLaunchUri"in navigator&&!("documentMode"in document),mr=hn("webkit"),Zc=hn("android"),Ic=hn("android 2")||hn("android 3"),nn=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),jf=Zc&&hn("Google")&&nn<537&&!("AudioNode"in window),po=!!window.opera,Hs=!mo&&hn("chrome"),pr=hn("gecko")&&!mr&&!po&&!hr,Ef=!Hs&&hn("safari"),Us=hn("phantom"),Gc="OTransition"in Ns,Af=navigator.platform.indexOf("Win")===0,xa=hr&&"transition"in Ns,qe="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Ic,ei="MozPerspective"in Ns,an=!window.L_DISABLE_3D&&(xa||qe||ei)&&!Gc&&!Us,gr=typeof orientation<"u"||hn("mobile"),Mf=gr&&mr,zf=gr&&qe,vr=!window.PointerEvent&&window.MSPointerEvent,yr=!!(window.PointerEvent||vr),xr="ontouchstart"in window||!!window.TouchEvent,Vi=!window.L_NO_TOUCH&&(xr||yr),go=gr&&po,_r=gr&&pr,Lf=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,qc=(function(){var i=!1;try{var s=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("testPassiveEventSupport",C,s),window.removeEventListener("testPassiveEventSupport",C,s)}catch{}return i})(),Zs=(function(){return!!document.createElement("canvas").getContext})(),Hi=!!(document.createElementNS&&jn("svg").createSVGRect),Of=!!Hi&&(function(){var i=document.createElement("div");return i.innerHTML="<svg/>",(i.firstChild&&i.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),Yc=!Hi&&(function(){try{var i=document.createElement("div");i.innerHTML='<v:shape adj="1"/>';var s=i.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}})(),Fc=navigator.platform.indexOf("Mac")===0,$c=navigator.platform.indexOf("Linux")===0;function hn(i){return navigator.userAgent.toLowerCase().indexOf(i)>=0}var _t={ie:hr,ielt9:Vs,edge:mo,webkit:mr,android:Zc,android23:Ic,androidStock:jf,opera:po,chrome:Hs,gecko:pr,safari:Ef,phantom:Us,opera12:Gc,win:Af,ie3d:xa,webkit3d:qe,gecko3d:ei,any3d:an,mobile:gr,mobileWebkit:Mf,mobileWebkit3d:zf,msPointer:vr,pointer:yr,touch:Vi,touchNative:xr,mobileOpera:go,mobileGecko:_r,retina:Lf,passiveEvents:qc,canvas:Zs,svg:Hi,vml:Yc,inlineSvg:Of,mac:Fc,linux:$c},Is=_t.msPointer?"MSPointerDown":"pointerdown",Gs=_t.msPointer?"MSPointerMove":"pointermove",ni=_t.msPointer?"MSPointerUp":"pointerup",Ee=_t.msPointer?"MSPointerCancel":"pointercancel",Ue={touchstart:Is,touchmove:Gs,touchend:ni,touchcancel:Ee},Ui={touchstart:ba,touchmove:bi,touchend:bi,touchcancel:bi},_i={},Xc=!1;function Df(i,s,f){return s==="touchstart"&&_a(),Ui[s]?(f=Ui[s].bind(this,f),i.addEventListener(Ue[s],f,!1),f):(console.warn("wrong event specified:",s),C)}function Kc(i,s,f){if(!Ue[s]){console.warn("wrong event specified:",s);return}i.removeEventListener(Ue[s],f,!1)}function br(i){_i[i.pointerId]=i}function qs(i){_i[i.pointerId]&&(_i[i.pointerId]=i)}function Zi(i){delete _i[i.pointerId]}function _a(){Xc||(document.addEventListener(Is,br,!0),document.addEventListener(Gs,qs,!0),document.addEventListener(ni,Zi,!0),document.addEventListener(Ee,Zi,!0),Xc=!0)}function bi(i,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var f in _i)s.touches.push(_i[f]);s.changedTouches=[s],i(s)}}function ba(i,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&_e(s),bi(i,s)}function Ae(i){var s={},f,v;for(v in i)f=i[v],s[v]=f&&f.bind?f.bind(i):f;return i=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var Qc=200;function Wc(i,s){i.addEventListener("dblclick",s);var f=0,v;function b(j){if(j.detail!==1){v=j.detail;return}if(!(j.pointerType==="mouse"||j.sourceCapabilities&&!j.sourceCapabilities.firesTouchEvents)){var k=Ar(j);if(!(k.some(function(Y){return Y instanceof HTMLLabelElement&&Y.attributes.for})&&!k.some(function(Y){return Y instanceof HTMLInputElement||Y instanceof HTMLSelectElement}))){var Z=Date.now();Z-f<=Qc?(v++,v===2&&s(Ae(j))):v=1,f=Z}}}return i.addEventListener("click",b),{dblclick:s,simDblclick:b}}function Ii(i,s){i.removeEventListener("dblclick",s.dblclick),i.removeEventListener("click",s.simDblclick)}var wi=Tr(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),wr=Tr(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Ys=wr==="webkitTransition"||wr==="OTransition"?wr+"End":"transitionend";function Fs(i){return typeof i=="string"?document.getElementById(i):i}function Sr(i,s){var f=i.style[s]||i.currentStyle&&i.currentStyle[s];if((!f||f==="auto")&&document.defaultView){var v=document.defaultView.getComputedStyle(i,null);f=v?v[s]:null}return f==="auto"?null:f}function Pt(i,s,f){var v=document.createElement(i);return v.className=s||"",f&&f.appendChild(v),v}function ne(i){var s=i.parentNode;s&&s.removeChild(i)}function mn(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function Be(i){var s=i.parentNode;s&&s.lastChild!==i&&s.appendChild(i)}function Gi(i){var s=i.parentNode;s&&s.firstChild!==i&&s.insertBefore(i,s.firstChild)}function $s(i,s){if(i.classList!==void 0)return i.classList.contains(s);var f=vo(i);return f.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(f)}function Et(i,s){if(i.classList!==void 0)for(var f=R(s),v=0,b=f.length;v<b;v++)i.classList.add(f[v]);else if(!$s(i,s)){var j=vo(i);wa(i,(j?j+" ":"")+s)}}function he(i,s){i.classList!==void 0?i.classList.remove(s):wa(i,O((" "+vo(i)+" ").replace(" "+s+" "," ")))}function wa(i,s){i.className.baseVal===void 0?i.className=s:i.className.baseVal=s}function vo(i){return i.correspondingElement&&(i=i.correspondingElement),i.className.baseVal===void 0?i.className:i.className.baseVal}function ce(i,s){"opacity"in i.style?i.style.opacity=s:"filter"in i.style&&Xs(i,s)}function Xs(i,s){var f=!1,v="DXImageTransform.Microsoft.Alpha";try{f=i.filters.item(v)}catch{if(s===1)return}s=Math.round(s*100),f?(f.Enabled=s!==100,f.Opacity=s):i.style.filter+=" progid:"+v+"(opacity="+s+")"}function Tr(i){for(var s=document.documentElement.style,f=0;f<i.length;f++)if(i[f]in s)return i[f];return!1}function ii(i,s,f){var v=s||new rt(0,0);i.style[wi]=(_t.ie3d?"translate("+v.x+"px,"+v.y+"px)":"translate3d("+v.x+"px,"+v.y+"px,0)")+(f?" scale("+f+")":"")}function se(i,s){i._leaflet_pos=s,_t.any3d?ii(i,s):(i.style.left=s.x+"px",i.style.top=s.y+"px")}function Si(i){return i._leaflet_pos||new rt(0,0)}var Sa,Nn,Ks;if("onselectstart"in document)Sa=function(){jt(window,"selectstart",_e)},Nn=function(){Wt(window,"selectstart",_e)};else{var Ta=Tr(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Sa=function(){if(Ta){var i=document.documentElement.style;Ks=i[Ta],i[Ta]="none"}},Nn=function(){Ta&&(document.documentElement.style[Ta]=Ks,Ks=void 0)}}function yo(){jt(window,"dragstart",_e)}function Cr(){Wt(window,"dragstart",_e)}var xo,Qs;function Ca(i){for(;i.tabIndex===-1;)i=i.parentNode;i.style&&(pn(),xo=i,Qs=i.style.outlineStyle,i.style.outlineStyle="none",jt(window,"keydown",pn))}function pn(){xo&&(xo.style.outlineStyle=Qs,xo=void 0,Qs=void 0,Wt(window,"keydown",pn))}function _o(i){do i=i.parentNode;while((!i.offsetWidth||!i.offsetHeight)&&i!==document.body);return i}function jr(i){var s=i.getBoundingClientRect();return{x:s.width/i.offsetWidth||1,y:s.height/i.offsetHeight||1,boundingClientRect:s}}var ja={__proto__:null,TRANSFORM:wi,TRANSITION:wr,TRANSITION_END:Ys,get:Fs,getStyle:Sr,create:Pt,remove:ne,empty:mn,toFront:Be,toBack:Gi,hasClass:$s,addClass:Et,removeClass:he,setClass:wa,getClass:vo,setOpacity:ce,testProp:Tr,setTransform:ii,setPosition:se,getPosition:Si,get disableTextSelection(){return Sa},get enableTextSelection(){return Nn},disableImageDrag:yo,enableImageDrag:Cr,preventOutline:Ca,restoreOutline:pn,getSizedParentNode:_o,getScale:jr};function jt(i,s,f,v){if(s&&typeof s=="object")for(var b in s)An(i,b,s[b],f);else{s=R(s);for(var j=0,k=s.length;j<k;j++)An(i,s[j],f,v)}return this}var En="_leaflet_events";function Wt(i,s,f,v){if(arguments.length===1)Ws(i),delete i[En];else if(s&&typeof s=="object")for(var b in s)Er(i,b,s[b],f);else if(s=R(s),arguments.length===2)Ws(i,function(Z){return Q(s,Z)!==-1});else for(var j=0,k=s.length;j<k;j++)Er(i,s[j],f,v);return this}function Ws(i,s){for(var f in i[En]){var v=f.split(/\d/)[0];(!s||s(v))&&Er(i,v,null,null,f)}}var qi={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function An(i,s,f,v){var b=s+y(f)+(v?"_"+y(v):"");if(i[En]&&i[En][b])return this;var j=function(Z){return f.call(v||i,Z||window.event)},k=j;!_t.touchNative&&_t.pointer&&s.indexOf("touch")===0?j=Df(i,s,j):_t.touch&&s==="dblclick"?j=Wc(i,j):"addEventListener"in i?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?i.addEventListener(qi[s]||s,j,_t.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(j=function(Z){Z=Z||window.event,ai(i,Z)&&k(Z)},i.addEventListener(qi[s],j,!1)):i.addEventListener(s,k,!1):i.attachEvent("on"+s,j),i[En]=i[En]||{},i[En][b]=j}function Er(i,s,f,v,b){b=b||s+y(f)+(v?"_"+y(v):"");var j=i[En]&&i[En][b];if(!j)return this;!_t.touchNative&&_t.pointer&&s.indexOf("touch")===0?Kc(i,s,j):_t.touch&&s==="dblclick"?Ii(i,j):"removeEventListener"in i?i.removeEventListener(qi[s]||s,j,!1):i.detachEvent("on"+s,j),i[En][b]=null}function Mn(i){return i.stopPropagation?i.stopPropagation():i.originalEvent?i.originalEvent._stopped=!0:i.cancelBubble=!0,this}function Vn(i){return An(i,"wheel",Mn),this}function Yi(i){return jt(i,"mousedown touchstart dblclick contextmenu",Mn),i._leaflet_disable_click=!0,this}function _e(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,this}function Ti(i){return _e(i),Mn(i),this}function Ar(i){if(i.composedPath)return i.composedPath();for(var s=[],f=i.target;f;)s.push(f),f=f.parentNode;return s}function Mr(i,s){if(!s)return new rt(i.clientX,i.clientY);var f=jr(s),v=f.boundingClientRect;return new rt((i.clientX-v.left)/f.x-s.clientLeft,(i.clientY-v.top)/f.y-s.clientTop)}var Jc=_t.linux&&_t.chrome?window.devicePixelRatio:_t.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Ye(i){return _t.edge?i.wheelDeltaY/2:i.deltaY&&i.deltaMode===0?-i.deltaY/Jc:i.deltaY&&i.deltaMode===1?-i.deltaY*20:i.deltaY&&i.deltaMode===2?-i.deltaY*60:i.deltaX||i.deltaZ?0:i.wheelDelta?(i.wheelDeltaY||i.wheelDelta)/2:i.detail&&Math.abs(i.detail)<32765?-i.detail*20:i.detail?i.detail/-32765*60:0}function ai(i,s){var f=s.relatedTarget;if(!f)return!0;try{for(;f&&f!==i;)f=f.parentNode}catch{return!1}return f!==i}var bo={__proto__:null,on:jt,off:Wt,stopPropagation:Mn,disableScrollPropagation:Vn,disableClickPropagation:Yi,preventDefault:_e,stop:Ti,getPropagationPath:Ar,getMousePosition:Mr,getWheelDelta:Ye,isExternalTarget:ai,addListener:jt,removeListener:Wt},Ea=st.extend({run:function(i,s,f,v){this.stop(),this._el=i,this._inProgress=!0,this._duration=f||.25,this._easeOutPower=1/Math.max(v||.5,.2),this._startPos=Si(i),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=Tt(this._animate,this),this._step()},_step:function(i){var s=+new Date-this._startTime,f=this._duration*1e3;s<f?this._runFrame(this._easeOut(s/f),i):(this._runFrame(1),this._complete())},_runFrame:function(i,s){var f=this._startPos.add(this._offset.multiplyBy(i));s&&f._round(),se(this._el,f),this.fire("step")},_complete:function(){at(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(i){return 1-Math.pow(1-i,this._easeOutPower)}}),Ut=st.extend({options:{crs:xi,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(i,s){s=P(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(i),this._initLayout(),this._onResize=g(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView(ht(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=wr&&_t.any3d&&!_t.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),jt(this._proxy,Ys,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(i,s,f){if(s=s===void 0?this._zoom:this._limitZoom(s),i=this._limitCenter(ht(i),s,this.options.maxBounds),f=f||{},this._stop(),this._loaded&&!f.reset&&f!==!0){f.animate!==void 0&&(f.zoom=u({animate:f.animate},f.zoom),f.pan=u({animate:f.animate,duration:f.duration},f.pan));var v=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(i,s,f.zoom):this._tryAnimatedPan(i,f.pan);if(v)return clearTimeout(this._sizeTimer),this}return this._resetView(i,s,f.pan&&f.pan.noMoveStart),this},setZoom:function(i,s){return this._loaded?this.setView(this.getCenter(),i,{zoom:s}):(this._zoom=i,this)},zoomIn:function(i,s){return i=i||(_t.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+i,s)},zoomOut:function(i,s){return i=i||(_t.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-i,s)},setZoomAround:function(i,s,f){var v=this.getZoomScale(s),b=this.getSize().divideBy(2),j=i instanceof rt?i:this.latLngToContainerPoint(i),k=j.subtract(b).multiplyBy(1-1/v),Z=this.containerPointToLatLng(b.add(k));return this.setView(Z,s,{zoom:f})},_getBoundsCenterZoom:function(i,s){s=s||{},i=i.getBounds?i.getBounds():ut(i);var f=dt(s.paddingTopLeft||s.padding||[0,0]),v=dt(s.paddingBottomRight||s.padding||[0,0]),b=this.getBoundsZoom(i,!1,f.add(v));if(b=typeof s.maxZoom=="number"?Math.min(s.maxZoom,b):b,b===1/0)return{center:i.getCenter(),zoom:b};var j=v.subtract(f).divideBy(2),k=this.project(i.getSouthWest(),b),Z=this.project(i.getNorthEast(),b),Y=this.unproject(k.add(Z).divideBy(2).add(j),b);return{center:Y,zoom:b}},fitBounds:function(i,s){if(i=ut(i),!i.isValid())throw new Error("Bounds are not valid.");var f=this._getBoundsCenterZoom(i,s);return this.setView(f.center,f.zoom,s)},fitWorld:function(i){return this.fitBounds([[-90,-180],[90,180]],i)},panTo:function(i,s){return this.setView(i,this._zoom,{pan:s})},panBy:function(i,s){if(i=dt(i).round(),s=s||{},!i.x&&!i.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(i))return this._resetView(this.unproject(this.project(this.getCenter()).add(i)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Ea,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){Et(this._mapPane,"leaflet-pan-anim");var f=this._getMapPanePos().subtract(i).round();this._panAnim.run(this._mapPane,f,s.duration||.25,s.easeLinearity)}else this._rawPanBy(i),this.fire("move").fire("moveend");return this},flyTo:function(i,s,f){if(f=f||{},f.animate===!1||!_t.any3d)return this.setView(i,s,f);this._stop();var v=this.project(this.getCenter()),b=this.project(i),j=this.getSize(),k=this._zoom;i=ht(i),s=s===void 0?k:s;var Z=Math.max(j.x,j.y),Y=Z*this.getZoomScale(k,s),nt=b.distanceTo(v)||1,ft=1.42,bt=ft*ft;function Ot(ve){var li=ve?-1:1,Ki=ve?Y:Z,hl=Y*Y-Z*Z+li*bt*bt*nt*nt,qr=2*Ki*bt*nt,Yr=hl/qr,Di=Math.sqrt(Yr*Yr+1)-Yr,ci=Di<1e-9?-18:Math.log(Di);return ci}function Pe(ve){return(Math.exp(ve)-Math.exp(-ve))/2}function be(ve){return(Math.exp(ve)+Math.exp(-ve))/2}function on(ve){return Pe(ve)/be(ve)}var qt=Ot(0);function Yt(ve){return Z*(be(qt)/be(qt+ft*ve))}function Nt(ve){return Z*(be(qt)*on(qt+ft*ve)-Pe(qt))/bt}function Li(ve){return 1-Math.pow(1-ve,1.5)}var xn=Date.now(),ko=(Ot(1)-qt)/ft,Oi=f.duration?1e3*f.duration:1e3*ko*.8;function fl(){var ve=(Date.now()-xn)/Oi,li=Li(ve)*ko;ve<=1?(this._flyToFrame=Tt(fl,this),this._move(this.unproject(v.add(b.subtract(v).multiplyBy(Nt(li)/nt)),k),this.getScaleZoom(Z/Yt(li),k),{flyTo:!0})):this._move(i,s)._moveEnd(!0)}return this._moveStart(!0,f.noMoveStart),fl.call(this),this},flyToBounds:function(i,s){var f=this._getBoundsCenterZoom(i,s);return this.flyTo(f.center,f.zoom,s)},setMaxBounds:function(i){return i=ut(i),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),i.isValid()?(this.options.maxBounds=i,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(i){var s=this.options.minZoom;return this.options.minZoom=i,this._loaded&&s!==i&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(i):this},setMaxZoom:function(i){var s=this.options.maxZoom;return this.options.maxZoom=i,this._loaded&&s!==i&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(i):this},panInsideBounds:function(i,s){this._enforcingBounds=!0;var f=this.getCenter(),v=this._limitCenter(f,this._zoom,ut(i));return f.equals(v)||this.panTo(v,s),this._enforcingBounds=!1,this},panInside:function(i,s){s=s||{};var f=dt(s.paddingTopLeft||s.padding||[0,0]),v=dt(s.paddingBottomRight||s.padding||[0,0]),b=this.project(this.getCenter()),j=this.project(i),k=this.getPixelBounds(),Z=W([k.min.add(f),k.max.subtract(v)]),Y=Z.getSize();if(!Z.contains(j)){this._enforcingBounds=!0;var nt=j.subtract(Z.getCenter()),ft=Z.extend(j).getSize().subtract(Y);b.x+=nt.x<0?-ft.x:ft.x,b.y+=nt.y<0?-ft.y:ft.y,this.panTo(this.unproject(b),s),this._enforcingBounds=!1}return this},invalidateSize:function(i){if(!this._loaded)return this;i=u({animate:!1,pan:!0},i===!0?{animate:!0}:i);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var f=this.getSize(),v=s.divideBy(2).round(),b=f.divideBy(2).round(),j=v.subtract(b);return!j.x&&!j.y?this:(i.animate&&i.pan?this.panBy(j):(i.pan&&this._rawPanBy(j),this.fire("move"),i.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(g(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:f}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(i){if(i=this._locateOptions=u({timeout:1e4,watch:!1},i),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=g(this._handleGeolocationResponse,this),f=g(this._handleGeolocationError,this);return i.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,f,i):navigator.geolocation.getCurrentPosition(s,f,i),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(i){if(this._container._leaflet_id){var s=i.code,f=i.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+f+"."})}},_handleGeolocationResponse:function(i){if(this._container._leaflet_id){var s=i.coords.latitude,f=i.coords.longitude,v=new mt(s,f),b=v.toBounds(i.coords.accuracy*2),j=this._locateOptions;if(j.setView){var k=this.getBoundsZoom(b);this.setView(v,j.maxZoom?Math.min(k,j.maxZoom):k)}var Z={latlng:v,bounds:b,timestamp:i.timestamp};for(var Y in i.coords)typeof i.coords[Y]=="number"&&(Z[Y]=i.coords[Y]);this.fire("locationfound",Z)}},addHandler:function(i,s){if(!s)return this;var f=this[i]=new s(this);return this._handlers.push(f),this.options[i]&&f.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),ne(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(at(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var i;for(i in this._layers)this._layers[i].remove();for(i in this._panes)ne(this._panes[i]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(i,s){var f="leaflet-pane"+(i?" leaflet-"+i.replace("Pane","")+"-pane":""),v=Pt("div",f,s||this._mapPane);return i&&(this._panes[i]=v),v},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var i=this.getPixelBounds(),s=this.unproject(i.getBottomLeft()),f=this.unproject(i.getTopRight());return new ct(s,f)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(i,s,f){i=ut(i),f=dt(f||[0,0]);var v=this.getZoom()||0,b=this.getMinZoom(),j=this.getMaxZoom(),k=i.getNorthWest(),Z=i.getSouthEast(),Y=this.getSize().subtract(f),nt=W(this.project(Z,v),this.project(k,v)).getSize(),ft=_t.any3d?this.options.zoomSnap:1,bt=Y.x/nt.x,Ot=Y.y/nt.y,Pe=s?Math.max(bt,Ot):Math.min(bt,Ot);return v=this.getScaleZoom(Pe,v),ft&&(v=Math.round(v/(ft/100))*(ft/100),v=s?Math.ceil(v/ft)*ft:Math.floor(v/ft)*ft),Math.max(b,Math.min(j,v))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new rt(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(i,s){var f=this._getTopLeftPoint(i,s);return new V(f,f.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(i){return this.options.crs.getProjectedBounds(i===void 0?this.getZoom():i)},getPane:function(i){return typeof i=="string"?this._panes[i]:i},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(i,s){var f=this.options.crs;return s=s===void 0?this._zoom:s,f.scale(i)/f.scale(s)},getScaleZoom:function(i,s){var f=this.options.crs;s=s===void 0?this._zoom:s;var v=f.zoom(i*f.scale(s));return isNaN(v)?1/0:v},project:function(i,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint(ht(i),s)},unproject:function(i,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(dt(i),s)},layerPointToLatLng:function(i){var s=dt(i).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(i){var s=this.project(ht(i))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(i){return this.options.crs.wrapLatLng(ht(i))},wrapLatLngBounds:function(i){return this.options.crs.wrapLatLngBounds(ut(i))},distance:function(i,s){return this.options.crs.distance(ht(i),ht(s))},containerPointToLayerPoint:function(i){return dt(i).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(i){return dt(i).add(this._getMapPanePos())},containerPointToLatLng:function(i){var s=this.containerPointToLayerPoint(dt(i));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(i){return this.layerPointToContainerPoint(this.latLngToLayerPoint(ht(i)))},mouseEventToContainerPoint:function(i){return Mr(i,this._container)},mouseEventToLayerPoint:function(i){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i))},mouseEventToLatLng:function(i){return this.layerPointToLatLng(this.mouseEventToLayerPoint(i))},_initContainer:function(i){var s=this._container=Fs(i);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");jt(s,"scroll",this._onScroll,this),this._containerId=y(s)},_initLayout:function(){var i=this._container;this._fadeAnimated=this.options.fadeAnimation&&_t.any3d,Et(i,"leaflet-container"+(_t.touch?" leaflet-touch":"")+(_t.retina?" leaflet-retina":"")+(_t.ielt9?" leaflet-oldie":"")+(_t.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=Sr(i,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&s!=="sticky"&&(i.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var i=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),se(this._mapPane,new rt(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Et(i.markerPane,"leaflet-zoom-hide"),Et(i.shadowPane,"leaflet-zoom-hide"))},_resetView:function(i,s,f){se(this._mapPane,new rt(0,0));var v=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var b=this._zoom!==s;this._moveStart(b,f)._move(i,s)._moveEnd(b),this.fire("viewreset"),v&&this.fire("load")},_moveStart:function(i,s){return i&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(i,s,f,v){s===void 0&&(s=this._zoom);var b=this._zoom!==s;return this._zoom=s,this._lastCenter=i,this._pixelOrigin=this._getNewPixelOrigin(i),v?f&&f.pinch&&this.fire("zoom",f):((b||f&&f.pinch)&&this.fire("zoom",f),this.fire("move",f)),this},_moveEnd:function(i){return i&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return at(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(i){se(this._mapPane,this._getMapPanePos().subtract(i))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(i){this._targets={},this._targets[y(this._container)]=this;var s=i?Wt:jt;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),_t.any3d&&this.options.transform3DLimit&&(i?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){at(this._resizeRequest),this._resizeRequest=Tt(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var i=this._getMapPanePos();Math.max(Math.abs(i.x),Math.abs(i.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(i,s){for(var f=[],v,b=s==="mouseout"||s==="mouseover",j=i.target||i.srcElement,k=!1;j;){if(v=this._targets[y(j)],v&&(s==="click"||s==="preclick")&&this._draggableMoved(v)){k=!0;break}if(v&&v.listens(s,!0)&&(b&&!ai(j,i)||(f.push(v),b))||j===this._container)break;j=j.parentNode}return!f.length&&!k&&!b&&this.listens(s,!0)&&(f=[this]),f},_isClickDisabled:function(i){for(;i&&i!==this._container;){if(i._leaflet_disable_click)return!0;i=i.parentNode}},_handleDOMEvent:function(i){var s=i.target||i.srcElement;if(!(!this._loaded||s._leaflet_disable_events||i.type==="click"&&this._isClickDisabled(s))){var f=i.type;f==="mousedown"&&Ca(s),this._fireDOMEvent(i,f)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(i,s,f){if(i.type==="click"){var v=u({},i);v.type="preclick",this._fireDOMEvent(v,v.type,f)}var b=this._findEventTargets(i,s);if(f){for(var j=[],k=0;k<f.length;k++)f[k].listens(s,!0)&&j.push(f[k]);b=j.concat(b)}if(b.length){s==="contextmenu"&&_e(i);var Z=b[0],Y={originalEvent:i};if(i.type!=="keypress"&&i.type!=="keydown"&&i.type!=="keyup"){var nt=Z.getLatLng&&(!Z._radius||Z._radius<=10);Y.containerPoint=nt?this.latLngToContainerPoint(Z.getLatLng()):this.mouseEventToContainerPoint(i),Y.layerPoint=this.containerPointToLayerPoint(Y.containerPoint),Y.latlng=nt?Z.getLatLng():this.layerPointToLatLng(Y.layerPoint)}for(k=0;k<b.length;k++)if(b[k].fire(s,Y,!0),Y.originalEvent._stopped||b[k].options.bubblingMouseEvents===!1&&Q(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(i){return i=i.dragging&&i.dragging.enabled()?i:this,i.dragging&&i.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var i=0,s=this._handlers.length;i<s;i++)this._handlers[i].disable()},whenReady:function(i,s){return this._loaded?i.call(s||this,{target:this}):this.on("load",i,s),this},_getMapPanePos:function(){return Si(this._mapPane)||new rt(0,0)},_moved:function(){var i=this._getMapPanePos();return i&&!i.equals([0,0])},_getTopLeftPoint:function(i,s){var f=i&&s!==void 0?this._getNewPixelOrigin(i,s):this.getPixelOrigin();return f.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(i,s){var f=this.getSize()._divideBy(2);return this.project(i,s)._subtract(f)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(i,s,f){var v=this._getNewPixelOrigin(f,s);return this.project(i,s)._subtract(v)},_latLngBoundsToNewLayerBounds:function(i,s,f){var v=this._getNewPixelOrigin(f,s);return W([this.project(i.getSouthWest(),s)._subtract(v),this.project(i.getNorthWest(),s)._subtract(v),this.project(i.getSouthEast(),s)._subtract(v),this.project(i.getNorthEast(),s)._subtract(v)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(i){return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint())},_limitCenter:function(i,s,f){if(!f)return i;var v=this.project(i,s),b=this.getSize().divideBy(2),j=new V(v.subtract(b),v.add(b)),k=this._getBoundsOffset(j,f,s);return Math.abs(k.x)<=1&&Math.abs(k.y)<=1?i:this.unproject(v.add(k),s)},_limitOffset:function(i,s){if(!s)return i;var f=this.getPixelBounds(),v=new V(f.min.add(i),f.max.add(i));return i.add(this._getBoundsOffset(v,s))},_getBoundsOffset:function(i,s,f){var v=W(this.project(s.getNorthEast(),f),this.project(s.getSouthWest(),f)),b=v.min.subtract(i.min),j=v.max.subtract(i.max),k=this._rebound(b.x,-j.x),Z=this._rebound(b.y,-j.y);return new rt(k,Z)},_rebound:function(i,s){return i+s>0?Math.round(i-s)/2:Math.max(0,Math.ceil(i))-Math.max(0,Math.floor(s))},_limitZoom:function(i){var s=this.getMinZoom(),f=this.getMaxZoom(),v=_t.any3d?this.options.zoomSnap:1;return v&&(i=Math.round(i/v)*v),Math.max(s,Math.min(f,i))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){he(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(i,s){var f=this._getCenterOffset(i)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(f)?!1:(this.panBy(f,s),!0)},_createAnimProxy:function(){var i=this._proxy=Pt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(i),this.on("zoomanim",function(s){var f=wi,v=this._proxy.style[f];ii(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),v===this._proxy.style[f]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){ne(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var i=this.getCenter(),s=this.getZoom();ii(this._proxy,this.project(i,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(i){this._animatingZoom&&i.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(i,s,f){if(this._animatingZoom)return!0;if(f=f||{},!this._zoomAnimated||f.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var v=this.getZoomScale(s),b=this._getCenterOffset(i)._divideBy(1-1/v);return f.animate!==!0&&!this.getSize().contains(b)?!1:(Tt(function(){this._moveStart(!0,f.noMoveStart||!1)._animateZoom(i,s,!0)},this),!0)},_animateZoom:function(i,s,f,v){this._mapPane&&(f&&(this._animatingZoom=!0,this._animateToCenter=i,this._animateToZoom=s,Et(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:i,zoom:s,noUpdate:v}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(g(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&he(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Js(i,s){return new Ut(i,s)}var rn=Bt.extend({options:{position:"topright"},initialize:function(i){P(this,i)},getPosition:function(){return this.options.position},setPosition:function(i){var s=this._map;return s&&s.removeControl(this),this.options.position=i,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(i){this.remove(),this._map=i;var s=this._container=this.onAdd(i),f=this.getPosition(),v=i._controlCorners[f];return Et(s,"leaflet-control"),f.indexOf("bottom")!==-1?v.insertBefore(s,v.firstChild):v.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(ne(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(i){this._map&&i&&i.screenX>0&&i.screenY>0&&this._map.getContainer().focus()}}),ri=function(i){return new rn(i)};Ut.include({addControl:function(i){return i.addTo(this),this},removeControl:function(i){return i.remove(),this},_initControlPos:function(){var i=this._controlCorners={},s="leaflet-",f=this._controlContainer=Pt("div",s+"control-container",this._container);function v(b,j){var k=s+b+" "+s+j;i[b+j]=Pt("div",k,f)}v("top","left"),v("top","right"),v("bottom","left"),v("bottom","right")},_clearControlPos:function(){for(var i in this._controlCorners)ne(this._controlCorners[i]);ne(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var zr=rn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(i,s,f,v){return f<v?-1:v<f?1:0}},initialize:function(i,s,f){P(this,f),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var v in i)this._addLayer(i[v],v);for(v in s)this._addLayer(s[v],v,!0)},onAdd:function(i){this._initLayout(),this._update(),this._map=i,i.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(i){return rn.prototype.addTo.call(this,i),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(i,s){return this._addLayer(i,s),this._map?this._update():this},addOverlay:function(i,s){return this._addLayer(i,s,!0),this._map?this._update():this},removeLayer:function(i){i.off("add remove",this._onLayerChange,this);var s=this._getLayer(y(i));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){Et(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var i=this._map.getSize().y-(this._container.offsetTop+50);return i<this._section.clientHeight?(Et(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=i+"px"):he(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return he(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var i="leaflet-control-layers",s=this._container=Pt("div",i),f=this.options.collapsed;s.setAttribute("aria-haspopup",!0),Yi(s),Vn(s);var v=this._section=Pt("section",i+"-list");f&&(this._map.on("click",this.collapse,this),jt(s,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var b=this._layersLink=Pt("a",i+"-toggle",s);b.href="#",b.title="Layers",b.setAttribute("role","button"),jt(b,{keydown:function(j){j.keyCode===13&&this._expandSafely()},click:function(j){_e(j),this._expandSafely()}},this),f||this.expand(),this._baseLayersList=Pt("div",i+"-base",v),this._separator=Pt("div",i+"-separator",v),this._overlaysList=Pt("div",i+"-overlays",v),s.appendChild(v)},_getLayer:function(i){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&y(this._layers[s].layer)===i)return this._layers[s]},_addLayer:function(i,s,f){this._map&&i.on("add remove",this._onLayerChange,this),this._layers.push({layer:i,name:s,overlay:f}),this.options.sortLayers&&this._layers.sort(g(function(v,b){return this.options.sortFunction(v.layer,b.layer,v.name,b.name)},this)),this.options.autoZIndex&&i.setZIndex&&(this._lastZIndex++,i.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;mn(this._baseLayersList),mn(this._overlaysList),this._layerControlInputs=[];var i,s,f,v,b=0;for(f=0;f<this._layers.length;f++)v=this._layers[f],this._addItem(v),s=s||v.overlay,i=i||!v.overlay,b+=v.overlay?0:1;return this.options.hideSingleBase&&(i=i&&b>1,this._baseLayersList.style.display=i?"":"none"),this._separator.style.display=s&&i?"":"none",this},_onLayerChange:function(i){this._handlingClick||this._update();var s=this._getLayer(y(i.target)),f=s.overlay?i.type==="add"?"overlayadd":"overlayremove":i.type==="add"?"baselayerchange":null;f&&this._map.fire(f,s)},_createRadioElement:function(i,s){var f='<input type="radio" class="leaflet-control-layers-selector" name="'+i+'"'+(s?' checked="checked"':"")+"/>",v=document.createElement("div");return v.innerHTML=f,v.firstChild},_addItem:function(i){var s=document.createElement("label"),f=this._map.hasLayer(i.layer),v;i.overlay?(v=document.createElement("input"),v.type="checkbox",v.className="leaflet-control-layers-selector",v.defaultChecked=f):v=this._createRadioElement("leaflet-base-layers_"+y(this),f),this._layerControlInputs.push(v),v.layerId=y(i.layer),jt(v,"click",this._onInputClick,this);var b=document.createElement("span");b.innerHTML=" "+i.name;var j=document.createElement("span");s.appendChild(j),j.appendChild(v),j.appendChild(b);var k=i.overlay?this._overlaysList:this._baseLayersList;return k.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){if(!this._preventClick){var i=this._layerControlInputs,s,f,v=[],b=[];this._handlingClick=!0;for(var j=i.length-1;j>=0;j--)s=i[j],f=this._getLayer(s.layerId).layer,s.checked?v.push(f):s.checked||b.push(f);for(j=0;j<b.length;j++)this._map.hasLayer(b[j])&&this._map.removeLayer(b[j]);for(j=0;j<v.length;j++)this._map.hasLayer(v[j])||this._map.addLayer(v[j]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var i=this._layerControlInputs,s,f,v=this._map.getZoom(),b=i.length-1;b>=0;b--)s=i[b],f=this._getLayer(s.layerId).layer,s.disabled=f.options.minZoom!==void 0&&v<f.options.minZoom||f.options.maxZoom!==void 0&&v>f.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var i=this._section;this._preventClick=!0,jt(i,"click",_e),this.expand();var s=this;setTimeout(function(){Wt(i,"click",_e),s._preventClick=!1})}}),tu=function(i,s,f){return new zr(i,s,f)},tl=rn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(i){var s="leaflet-control-zoom",f=Pt("div",s+" leaflet-bar"),v=this.options;return this._zoomInButton=this._createButton(v.zoomInText,v.zoomInTitle,s+"-in",f,this._zoomIn),this._zoomOutButton=this._createButton(v.zoomOutText,v.zoomOutTitle,s+"-out",f,this._zoomOut),this._updateDisabled(),i.on("zoomend zoomlevelschange",this._updateDisabled,this),f},onRemove:function(i){i.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(i){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(i.shiftKey?3:1))},_zoomOut:function(i){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(i.shiftKey?3:1))},_createButton:function(i,s,f,v,b){var j=Pt("a",f,v);return j.innerHTML=i,j.href="#",j.title=s,j.setAttribute("role","button"),j.setAttribute("aria-label",s),Yi(j),jt(j,"click",Ti),jt(j,"click",b,this),jt(j,"click",this._refocusOnMap,this),j},_updateDisabled:function(){var i=this._map,s="leaflet-disabled";he(this._zoomInButton,s),he(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||i._zoom===i.getMinZoom())&&(Et(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||i._zoom===i.getMaxZoom())&&(Et(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});Ut.mergeOptions({zoomControl:!0}),Ut.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new tl,this.addControl(this.zoomControl))});var Rf=function(i){return new tl(i)},eu=rn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(i){var s="leaflet-control-scale",f=Pt("div",s),v=this.options;return this._addScales(v,s+"-line",f),i.on(v.updateWhenIdle?"moveend":"move",this._update,this),i.whenReady(this._update,this),f},onRemove:function(i){i.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(i,s,f){i.metric&&(this._mScale=Pt("div",s,f)),i.imperial&&(this._iScale=Pt("div",s,f))},_update:function(){var i=this._map,s=i.getSize().y/2,f=i.distance(i.containerPointToLatLng([0,s]),i.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(f)},_updateScales:function(i){this.options.metric&&i&&this._updateMetric(i),this.options.imperial&&i&&this._updateImperial(i)},_updateMetric:function(i){var s=this._getRoundNum(i),f=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,f,s/i)},_updateImperial:function(i){var s=i*3.2808399,f,v,b;s>5280?(f=s/5280,v=this._getRoundNum(f),this._updateScale(this._iScale,v+" mi",v/f)):(b=this._getRoundNum(s),this._updateScale(this._iScale,b+" ft",b/s))},_updateScale:function(i,s,f){i.style.width=Math.round(this.options.maxWidth*f)+"px",i.innerHTML=s},_getRoundNum:function(i){var s=Math.pow(10,(Math.floor(i)+"").length-1),f=i/s;return f=f>=10?10:f>=5?5:f>=3?3:f>=2?2:1,s*f}}),el=function(i){return new eu(i)},kf='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',nl=rn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(_t.inlineSvg?kf+" ":"")+"Leaflet</a>"},initialize:function(i){P(this,i),this._attributions={}},onAdd:function(i){i.attributionControl=this,this._container=Pt("div","leaflet-control-attribution"),Yi(this._container);for(var s in i._layers)i._layers[s].getAttribution&&this.addAttribution(i._layers[s].getAttribution());return this._update(),i.on("layeradd",this._addAttribution,this),this._container},onRemove:function(i){i.off("layeradd",this._addAttribution,this)},_addAttribution:function(i){i.layer.getAttribution&&(this.addAttribution(i.layer.getAttribution()),i.layer.once("remove",function(){this.removeAttribution(i.layer.getAttribution())},this))},setPrefix:function(i){return this.options.prefix=i,this._update(),this},addAttribution:function(i){return i?(this._attributions[i]||(this._attributions[i]=0),this._attributions[i]++,this._update(),this):this},removeAttribution:function(i){return i?(this._attributions[i]&&(this._attributions[i]--,this._update()),this):this},_update:function(){if(this._map){var i=[];for(var s in this._attributions)this._attributions[s]&&i.push(s);var f=[];this.options.prefix&&f.push(this.options.prefix),i.length&&f.push(i.join(", ")),this._container.innerHTML=f.join(' <span aria-hidden="true">|</span> ')}}});Ut.mergeOptions({attributionControl:!0}),Ut.addInitHook(function(){this.options.attributionControl&&new nl().addTo(this)});var Bf=function(i){return new nl(i)};rn.Layers=zr,rn.Zoom=tl,rn.Scale=eu,rn.Attribution=nl,ri.layers=tu,ri.zoom=Rf,ri.scale=el,ri.attribution=Bf;var Hn=Bt.extend({initialize:function(i){this._map=i},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Hn.addTo=function(i,s){return i.addHandler(s,this),this};var Pf={Events:X},il=_t.touch?"touchstart mousedown":"mousedown",Ci=st.extend({options:{clickTolerance:3},initialize:function(i,s,f,v){P(this,v),this._element=i,this._dragStartTarget=s||i,this._preventOutline=f},enable:function(){this._enabled||(jt(this._dragStartTarget,il,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Ci._dragging===this&&this.finishDrag(!0),Wt(this._dragStartTarget,il,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(i){if(this._enabled&&(this._moved=!1,!$s(this._element,"leaflet-zoom-anim"))){if(i.touches&&i.touches.length!==1){Ci._dragging===this&&this.finishDrag();return}if(!(Ci._dragging||i.shiftKey||i.which!==1&&i.button!==1&&!i.touches)&&(Ci._dragging=this,this._preventOutline&&Ca(this._element),yo(),Sa(),!this._moving)){this.fire("down");var s=i.touches?i.touches[0]:i,f=_o(this._element);this._startPoint=new rt(s.clientX,s.clientY),this._startPos=Si(this._element),this._parentScale=jr(f);var v=i.type==="mousedown";jt(document,v?"mousemove":"touchmove",this._onMove,this),jt(document,v?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(i){if(this._enabled){if(i.touches&&i.touches.length>1){this._moved=!0;return}var s=i.touches&&i.touches.length===1?i.touches[0]:i,f=new rt(s.clientX,s.clientY)._subtract(this._startPoint);!f.x&&!f.y||Math.abs(f.x)+Math.abs(f.y)<this.options.clickTolerance||(f.x/=this._parentScale.x,f.y/=this._parentScale.y,_e(i),this._moved||(this.fire("dragstart"),this._moved=!0,Et(document.body,"leaflet-dragging"),this._lastTarget=i.target||i.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Et(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(f),this._moving=!0,this._lastEvent=i,this._updatePosition())}},_updatePosition:function(){var i={originalEvent:this._lastEvent};this.fire("predrag",i),se(this._element,this._newPos),this.fire("drag",i)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(i){he(document.body,"leaflet-dragging"),this._lastTarget&&(he(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Wt(document,"mousemove touchmove",this._onMove,this),Wt(document,"mouseup touchend touchcancel",this._onUp,this),Cr(),Nn();var s=this._moved&&this._moving;this._moving=!1,Ci._dragging=!1,s&&this.fire("dragend",{noInertia:i,distance:this._newPos.distanceTo(this._startPos)})}});function nu(i,s,f){var v,b=[1,4,2,8],j,k,Z,Y,nt,ft,bt,Ot;for(j=0,ft=i.length;j<ft;j++)i[j]._code=Fi(i[j],s);for(Z=0;Z<4;Z++){for(bt=b[Z],v=[],j=0,ft=i.length,k=ft-1;j<ft;k=j++)Y=i[j],nt=i[k],Y._code&bt?nt._code&bt||(Ot=wo(nt,Y,bt,s,f),Ot._code=Fi(Ot,s),v.push(Ot)):(nt._code&bt&&(Ot=wo(nt,Y,bt,s,f),Ot._code=Fi(Ot,s),v.push(Ot)),v.push(Y));i=v}return i}function iu(i,s){var f,v,b,j,k,Z,Y,nt,ft;if(!i||i.length===0)throw new Error("latlngs not passed");gn(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var bt=ht([0,0]),Ot=ut(i),Pe=Ot.getNorthWest().distanceTo(Ot.getSouthWest())*Ot.getNorthEast().distanceTo(Ot.getNorthWest());Pe<1700&&(bt=al(i));var be=i.length,on=[];for(f=0;f<be;f++){var qt=ht(i[f]);on.push(s.project(ht([qt.lat-bt.lat,qt.lng-bt.lng])))}for(Z=Y=nt=0,f=0,v=be-1;f<be;v=f++)b=on[f],j=on[v],k=b.y*j.x-j.y*b.x,Y+=(b.x+j.x)*k,nt+=(b.y+j.y)*k,Z+=k*3;Z===0?ft=on[0]:ft=[Y/Z,nt/Z];var Yt=s.unproject(dt(ft));return ht([Yt.lat+bt.lat,Yt.lng+bt.lng])}function al(i){for(var s=0,f=0,v=0,b=0;b<i.length;b++){var j=ht(i[b]);s+=j.lat,f+=j.lng,v++}return ht([s/v,f/v])}var rl={__proto__:null,clipPolygon:nu,polygonCenter:iu,centroid:al};function au(i,s){if(!s||!i.length)return i.slice();var f=s*s;return i=Vf(i,f),i=ou(i,f),i}function ru(i,s,f){return Math.sqrt(Lr(i,s,f,!0))}function Nf(i,s,f){return Lr(i,s,f)}function ou(i,s){var f=i.length,v=typeof Uint8Array<"u"?Uint8Array:Array,b=new v(f);b[0]=b[f-1]=1,ol(i,b,s,0,f-1);var j,k=[];for(j=0;j<f;j++)b[j]&&k.push(i[j]);return k}function ol(i,s,f,v,b){var j=0,k,Z,Y;for(Z=v+1;Z<=b-1;Z++)Y=Lr(i[Z],i[v],i[b],!0),Y>j&&(k=Z,j=Y);j>f&&(s[k]=1,ol(i,s,f,v,k),ol(i,s,f,k,b))}function Vf(i,s){for(var f=[i[0]],v=1,b=0,j=i.length;v<j;v++)Hf(i[v],i[b])>s&&(f.push(i[v]),b=v);return b<j-1&&f.push(i[j-1]),f}var su;function lu(i,s,f,v,b){var j=v?su:Fi(i,f),k=Fi(s,f),Z,Y,nt;for(su=k;;){if(!(j|k))return[i,s];if(j&k)return!1;Z=j||k,Y=wo(i,s,Z,f,b),nt=Fi(Y,f),Z===j?(i=Y,j=nt):(s=Y,k=nt)}}function wo(i,s,f,v,b){var j=s.x-i.x,k=s.y-i.y,Z=v.min,Y=v.max,nt,ft;return f&8?(nt=i.x+j*(Y.y-i.y)/k,ft=Y.y):f&4?(nt=i.x+j*(Z.y-i.y)/k,ft=Z.y):f&2?(nt=Y.x,ft=i.y+k*(Y.x-i.x)/j):f&1&&(nt=Z.x,ft=i.y+k*(Z.x-i.x)/j),new rt(nt,ft,b)}function Fi(i,s){var f=0;return i.x<s.min.x?f|=1:i.x>s.max.x&&(f|=2),i.y<s.min.y?f|=4:i.y>s.max.y&&(f|=8),f}function Hf(i,s){var f=s.x-i.x,v=s.y-i.y;return f*f+v*v}function Lr(i,s,f,v){var b=s.x,j=s.y,k=f.x-b,Z=f.y-j,Y=k*k+Z*Z,nt;return Y>0&&(nt=((i.x-b)*k+(i.y-j)*Z)/Y,nt>1?(b=f.x,j=f.y):nt>0&&(b+=k*nt,j+=Z*nt)),k=i.x-b,Z=i.y-j,v?k*k+Z*Z:new rt(b,j)}function gn(i){return!B(i[0])||typeof i[0][0]!="object"&&typeof i[0][0]<"u"}function So(i){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),gn(i)}function Aa(i,s){var f,v,b,j,k,Z,Y,nt;if(!i||i.length===0)throw new Error("latlngs not passed");gn(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var ft=ht([0,0]),bt=ut(i),Ot=bt.getNorthWest().distanceTo(bt.getSouthWest())*bt.getNorthEast().distanceTo(bt.getNorthWest());Ot<1700&&(ft=al(i));var Pe=i.length,be=[];for(f=0;f<Pe;f++){var on=ht(i[f]);be.push(s.project(ht([on.lat-ft.lat,on.lng-ft.lng])))}for(f=0,v=0;f<Pe-1;f++)v+=be[f].distanceTo(be[f+1])/2;if(v===0)nt=be[0];else for(f=0,j=0;f<Pe-1;f++)if(k=be[f],Z=be[f+1],b=k.distanceTo(Z),j+=b,j>v){Y=(j-v)/b,nt=[Z.x-Y*(Z.x-k.x),Z.y-Y*(Z.y-k.y)];break}var qt=s.unproject(dt(nt));return ht([qt.lat+ft.lat,qt.lng+ft.lng])}var Uf={__proto__:null,simplify:au,pointToSegmentDistance:ru,closestPointOnSegment:Nf,clipSegment:lu,_getEdgeIntersection:wo,_getBitCode:Fi,_sqClosestPointOnSegment:Lr,isFlat:gn,_flat:So,polylineCenter:Aa},To={project:function(i){return new rt(i.lng,i.lat)},unproject:function(i){return new mt(i.y,i.x)},bounds:new V([-180,-90],[180,90])},Co={R:6378137,R_MINOR:6356752314245179e-9,bounds:new V([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(i){var s=Math.PI/180,f=this.R,v=i.lat*s,b=this.R_MINOR/f,j=Math.sqrt(1-b*b),k=j*Math.sin(v),Z=Math.tan(Math.PI/4-v/2)/Math.pow((1-k)/(1+k),j/2);return v=-f*Math.log(Math.max(Z,1e-10)),new rt(i.lng*s*f,v)},unproject:function(i){for(var s=180/Math.PI,f=this.R,v=this.R_MINOR/f,b=Math.sqrt(1-v*v),j=Math.exp(-i.y/f),k=Math.PI/2-2*Math.atan(j),Z=0,Y=.1,nt;Z<15&&Math.abs(Y)>1e-7;Z++)nt=b*Math.sin(k),nt=Math.pow((1-nt)/(1+nt),b/2),Y=Math.PI/2-2*Math.atan(j*nt)-k,k+=Y;return new mt(k*s,i.x*s/f)}},cu={__proto__:null,LonLat:To,Mercator:Co,SphericalMercator:un},uu=u({},Jt,{code:"EPSG:3395",projection:Co,transformation:(function(){var i=.5/(Math.PI*Co.R);return ke(i,.5,-i,.5)})()}),sl=u({},Jt,{code:"EPSG:4326",projection:To,transformation:ke(1/180,1,-1/180,.5)}),Ma=u({},Mt,{projection:To,transformation:ke(1,0,-1,0),scale:function(i){return Math.pow(2,i)},zoom:function(i){return Math.log(i)/Math.LN2},distance:function(i,s){var f=s.lng-i.lng,v=s.lat-i.lat;return Math.sqrt(f*f+v*v)},infinite:!0});Mt.Earth=Jt,Mt.EPSG3395=uu,Mt.EPSG3857=xi,Mt.EPSG900913=fn,Mt.EPSG4326=sl,Mt.Simple=Ma;var zn=st.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(i){return i.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(i){return i&&i.removeLayer(this),this},getPane:function(i){return this._map.getPane(i?this.options[i]||i:this.options.pane)},addInteractiveTarget:function(i){return this._map._targets[y(i)]=this,this},removeInteractiveTarget:function(i){return delete this._map._targets[y(i)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(i){var s=i.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var f=this.getEvents();s.on(f,this),this.once("remove",function(){s.off(f,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});Ut.include({addLayer:function(i){if(!i._layerAdd)throw new Error("The provided object is not a Layer.");var s=y(i);return this._layers[s]?this:(this._layers[s]=i,i._mapToAdd=this,i.beforeAdd&&i.beforeAdd(this),this.whenReady(i._layerAdd,i),this)},removeLayer:function(i){var s=y(i);return this._layers[s]?(this._loaded&&i.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:i}),i.fire("remove")),i._map=i._mapToAdd=null,this):this},hasLayer:function(i){return y(i)in this._layers},eachLayer:function(i,s){for(var f in this._layers)i.call(s,this._layers[f]);return this},_addLayers:function(i){i=i?B(i)?i:[i]:[];for(var s=0,f=i.length;s<f;s++)this.addLayer(i[s])},_addZoomLimit:function(i){(!isNaN(i.options.maxZoom)||!isNaN(i.options.minZoom))&&(this._zoomBoundLayers[y(i)]=i,this._updateZoomLevels())},_removeZoomLimit:function(i){var s=y(i);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var i=1/0,s=-1/0,f=this._getZoomSpan();for(var v in this._zoomBoundLayers){var b=this._zoomBoundLayers[v].options;i=b.minZoom===void 0?i:Math.min(i,b.minZoom),s=b.maxZoom===void 0?s:Math.max(s,b.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=i===1/0?void 0:i,f!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var za=zn.extend({initialize:function(i,s){P(this,s),this._layers={};var f,v;if(i)for(f=0,v=i.length;f<v;f++)this.addLayer(i[f])},addLayer:function(i){var s=this.getLayerId(i);return this._layers[s]=i,this._map&&this._map.addLayer(i),this},removeLayer:function(i){var s=i in this._layers?i:this.getLayerId(i);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(i){var s=typeof i=="number"?i:this.getLayerId(i);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(i){var s=Array.prototype.slice.call(arguments,1),f,v;for(f in this._layers)v=this._layers[f],v[i]&&v[i].apply(v,s);return this},onAdd:function(i){this.eachLayer(i.addLayer,i)},onRemove:function(i){this.eachLayer(i.removeLayer,i)},eachLayer:function(i,s){for(var f in this._layers)i.call(s,this._layers[f]);return this},getLayer:function(i){return this._layers[i]},getLayers:function(){var i=[];return this.eachLayer(i.push,i),i},setZIndex:function(i){return this.invoke("setZIndex",i)},getLayerId:function(i){return y(i)}}),Zf=function(i,s){return new za(i,s)},Un=za.extend({addLayer:function(i){return this.hasLayer(i)?this:(i.addEventParent(this),za.prototype.addLayer.call(this,i),this.fire("layeradd",{layer:i}))},removeLayer:function(i){return this.hasLayer(i)?(i in this._layers&&(i=this._layers[i]),i.removeEventParent(this),za.prototype.removeLayer.call(this,i),this.fire("layerremove",{layer:i})):this},setStyle:function(i){return this.invoke("setStyle",i)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var i=new ct;for(var s in this._layers){var f=this._layers[s];i.extend(f.getBounds?f.getBounds():f.getLatLng())}return i}}),du=function(i,s){return new Un(i,s)},Zn=Bt.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(i){P(this,i)},createIcon:function(i){return this._createIcon("icon",i)},createShadow:function(i){return this._createIcon("shadow",i)},_createIcon:function(i,s){var f=this._getIconUrl(i);if(!f){if(i==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var v=this._createImg(f,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(v,i),(this.options.crossOrigin||this.options.crossOrigin==="")&&(v.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),v},_setIconStyles:function(i,s){var f=this.options,v=f[s+"Size"];typeof v=="number"&&(v=[v,v]);var b=dt(v),j=dt(s==="shadow"&&f.shadowAnchor||f.iconAnchor||b&&b.divideBy(2,!0));i.className="leaflet-marker-"+s+" "+(f.className||""),j&&(i.style.marginLeft=-j.x+"px",i.style.marginTop=-j.y+"px"),b&&(i.style.width=b.x+"px",i.style.height=b.y+"px")},_createImg:function(i,s){return s=s||document.createElement("img"),s.src=i,s},_getIconUrl:function(i){return _t.retina&&this.options[i+"RetinaUrl"]||this.options[i+"Url"]}});function Or(i){return new Zn(i)}var Dr=Zn.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(i){return typeof Dr.imagePath!="string"&&(Dr.imagePath=this._detectIconPath()),(this.options.imagePath||Dr.imagePath)+Zn.prototype._getIconUrl.call(this,i)},_stripUrl:function(i){var s=function(f,v,b){var j=v.exec(f);return j&&j[b]};return i=s(i,/^url\((['"])?(.+)\1\)$/,2),i&&s(i,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var i=Pt("div","leaflet-default-icon-path",document.body),s=Sr(i,"background-image")||Sr(i,"backgroundImage");if(document.body.removeChild(i),s=this._stripUrl(s),s)return s;var f=document.querySelector('link[href$="leaflet.css"]');return f?f.href.substring(0,f.href.length-11-1):""}}),Rr=Hn.extend({initialize:function(i){this._marker=i},addHooks:function(){var i=this._marker._icon;this._draggable||(this._draggable=new Ci(i,i,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Et(i,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&he(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(i){var s=this._marker,f=s._map,v=this._marker.options.autoPanSpeed,b=this._marker.options.autoPanPadding,j=Si(s._icon),k=f.getPixelBounds(),Z=f.getPixelOrigin(),Y=W(k.min._subtract(Z).add(b),k.max._subtract(Z).subtract(b));if(!Y.contains(j)){var nt=dt((Math.max(Y.max.x,j.x)-Y.max.x)/(k.max.x-Y.max.x)-(Math.min(Y.min.x,j.x)-Y.min.x)/(k.min.x-Y.min.x),(Math.max(Y.max.y,j.y)-Y.max.y)/(k.max.y-Y.max.y)-(Math.min(Y.min.y,j.y)-Y.min.y)/(k.min.y-Y.min.y)).multiplyBy(v);f.panBy(nt,{animate:!1}),this._draggable._newPos._add(nt),this._draggable._startPos._add(nt),se(s._icon,this._draggable._newPos),this._onDrag(i),this._panRequest=Tt(this._adjustPan.bind(this,i))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(i){this._marker.options.autoPan&&(at(this._panRequest),this._panRequest=Tt(this._adjustPan.bind(this,i)))},_onDrag:function(i){var s=this._marker,f=s._shadow,v=Si(s._icon),b=s._map.layerPointToLatLng(v);f&&se(f,v),s._latlng=b,i.latlng=b,i.oldLatLng=this._oldLatLng,s.fire("move",i).fire("drag",i)},_onDragEnd:function(i){at(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",i)}}),kr=zn.extend({options:{icon:new Dr,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(i,s){P(this,s),this._latlng=ht(i)},onAdd:function(i){this._zoomAnimated=this._zoomAnimated&&i.options.markerZoomAnimation,this._zoomAnimated&&i.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(i){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&i.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(i){var s=this._latlng;return this._latlng=ht(i),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(i){return this.options.zIndexOffset=i,this.update()},getIcon:function(){return this.options.icon},setIcon:function(i){return this.options.icon=i,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var i=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(i)}return this},_initIcon:function(){var i=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),f=i.icon.createIcon(this._icon),v=!1;f!==this._icon&&(this._icon&&this._removeIcon(),v=!0,i.title&&(f.title=i.title),f.tagName==="IMG"&&(f.alt=i.alt||"")),Et(f,s),i.keyboard&&(f.tabIndex="0",f.setAttribute("role","button")),this._icon=f,i.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&jt(f,"focus",this._panOnFocus,this);var b=i.icon.createShadow(this._shadow),j=!1;b!==this._shadow&&(this._removeShadow(),j=!0),b&&(Et(b,s),b.alt=""),this._shadow=b,i.opacity<1&&this._updateOpacity(),v&&this.getPane().appendChild(this._icon),this._initInteraction(),b&&j&&this.getPane(i.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Wt(this._icon,"focus",this._panOnFocus,this),ne(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&ne(this._shadow),this._shadow=null},_setPos:function(i){this._icon&&se(this._icon,i),this._shadow&&se(this._shadow,i),this._zIndex=i.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(i){this._icon&&(this._icon.style.zIndex=this._zIndex+i)},_animateZoom:function(i){var s=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(Et(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Rr)){var i=this.options.draggable;this.dragging&&(i=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Rr(this),i&&this.dragging.enable()}},setOpacity:function(i){return this.options.opacity=i,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var i=this.options.opacity;this._icon&&ce(this._icon,i),this._shadow&&ce(this._shadow,i)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var i=this._map;if(i){var s=this.options.icon.options,f=s.iconSize?dt(s.iconSize):dt(0,0),v=s.iconAnchor?dt(s.iconAnchor):dt(0,0);i.panInside(this._latlng,{paddingTopLeft:v,paddingBottomRight:f.subtract(v)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function fu(i,s){return new kr(i,s)}var In=zn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(i){this._renderer=i.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(i){return P(this,i),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&i&&Object.prototype.hasOwnProperty.call(i,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),La=In.extend({options:{fill:!0,radius:10},initialize:function(i,s){P(this,s),this._latlng=ht(i),this._radius=this.options.radius},setLatLng:function(i){var s=this._latlng;return this._latlng=ht(i),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(i){return this.options.radius=this._radius=i,this.redraw()},getRadius:function(){return this._radius},setStyle:function(i){var s=i&&i.radius||this._radius;return In.prototype.setStyle.call(this,i),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var i=this._radius,s=this._radiusY||i,f=this._clickTolerance(),v=[i+f,s+f];this._pxBounds=new V(this._point.subtract(v),this._point.add(v))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(i){return i.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function hu(i,s){return new La(i,s)}var jo=La.extend({initialize:function(i,s,f){if(typeof s=="number"&&(s=u({},f,{radius:s})),P(this,s),this._latlng=ht(i),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(i){return this._mRadius=i,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var i=[this._radius,this._radiusY||this._radius];return new ct(this._map.layerPointToLatLng(this._point.subtract(i)),this._map.layerPointToLatLng(this._point.add(i)))},setStyle:In.prototype.setStyle,_project:function(){var i=this._latlng.lng,s=this._latlng.lat,f=this._map,v=f.options.crs;if(v.distance===Jt.distance){var b=Math.PI/180,j=this._mRadius/Jt.R/b,k=f.project([s+j,i]),Z=f.project([s-j,i]),Y=k.add(Z).divideBy(2),nt=f.unproject(Y).lat,ft=Math.acos((Math.cos(j*b)-Math.sin(s*b)*Math.sin(nt*b))/(Math.cos(s*b)*Math.cos(nt*b)))/b;(isNaN(ft)||ft===0)&&(ft=j/Math.cos(Math.PI/180*s)),this._point=Y.subtract(f.getPixelOrigin()),this._radius=isNaN(ft)?0:Y.x-f.project([nt,i-ft]).x,this._radiusY=Y.y-k.y}else{var bt=v.unproject(v.project(this._latlng).subtract([this._mRadius,0]));this._point=f.latLngToLayerPoint(this._latlng),this._radius=this._point.x-f.latLngToLayerPoint(bt).x}this._updateBounds()}});function mu(i,s,f){return new jo(i,s,f)}var oi=In.extend({options:{smoothFactor:1,noClip:!1},initialize:function(i,s){P(this,s),this._setLatLngs(i)},getLatLngs:function(){return this._latlngs},setLatLngs:function(i){return this._setLatLngs(i),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(i){for(var s=1/0,f=null,v=Lr,b,j,k=0,Z=this._parts.length;k<Z;k++)for(var Y=this._parts[k],nt=1,ft=Y.length;nt<ft;nt++){b=Y[nt-1],j=Y[nt];var bt=v(i,b,j,!0);bt<s&&(s=bt,f=v(i,b,j))}return f&&(f.distance=Math.sqrt(s)),f},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Aa(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(i,s){return s=s||this._defaultShape(),i=ht(i),s.push(i),this._bounds.extend(i),this.redraw()},_setLatLngs:function(i){this._bounds=new ct,this._latlngs=this._convertLatLngs(i)},_defaultShape:function(){return gn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(i){for(var s=[],f=gn(i),v=0,b=i.length;v<b;v++)f?(s[v]=ht(i[v]),this._bounds.extend(s[v])):s[v]=this._convertLatLngs(i[v]);return s},_project:function(){var i=new V;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,i),this._bounds.isValid()&&i.isValid()&&(this._rawPxBounds=i,this._updateBounds())},_updateBounds:function(){var i=this._clickTolerance(),s=new rt(i,i);this._rawPxBounds&&(this._pxBounds=new V([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(i,s,f){var v=i[0]instanceof mt,b=i.length,j,k;if(v){for(k=[],j=0;j<b;j++)k[j]=this._map.latLngToLayerPoint(i[j]),f.extend(k[j]);s.push(k)}else for(j=0;j<b;j++)this._projectLatlngs(i[j],s,f)},_clipPoints:function(){var i=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,f,v,b,j,k,Z,Y;for(f=0,b=0,j=this._rings.length;f<j;f++)for(Y=this._rings[f],v=0,k=Y.length;v<k-1;v++)Z=lu(Y[v],Y[v+1],i,v,!0),Z&&(s[b]=s[b]||[],s[b].push(Z[0]),(Z[1]!==Y[v+1]||v===k-2)&&(s[b].push(Z[1]),b++))}},_simplifyPoints:function(){for(var i=this._parts,s=this.options.smoothFactor,f=0,v=i.length;f<v;f++)i[f]=au(i[f],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(i,s){var f,v,b,j,k,Z,Y=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(f=0,j=this._parts.length;f<j;f++)for(Z=this._parts[f],v=0,k=Z.length,b=k-1;v<k;b=v++)if(!(!s&&v===0)&&ru(i,Z[b],Z[v])<=Y)return!0;return!1}});function If(i,s){return new oi(i,s)}oi._flat=So;var Oa=oi.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return iu(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(i){var s=oi.prototype._convertLatLngs.call(this,i),f=s.length;return f>=2&&s[0]instanceof mt&&s[0].equals(s[f-1])&&s.pop(),s},_setLatLngs:function(i){oi.prototype._setLatLngs.call(this,i),gn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return gn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var i=this._renderer._bounds,s=this.options.weight,f=new rt(s,s);if(i=new V(i.min.subtract(f),i.max.add(f)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}for(var v=0,b=this._rings.length,j;v<b;v++)j=nu(this._rings[v],i,!0),j.length&&this._parts.push(j)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(i){var s=!1,f,v,b,j,k,Z,Y,nt;if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(j=0,Y=this._parts.length;j<Y;j++)for(f=this._parts[j],k=0,nt=f.length,Z=nt-1;k<nt;Z=k++)v=f[k],b=f[Z],v.y>i.y!=b.y>i.y&&i.x<(b.x-v.x)*(i.y-v.y)/(b.y-v.y)+v.x&&(s=!s);return s||oi.prototype._containsPoint.call(this,i,!0)}});function Gf(i,s){return new Oa(i,s)}var si=Un.extend({initialize:function(i,s){P(this,s),this._layers={},i&&this.addData(i)},addData:function(i){var s=B(i)?i:i.features,f,v,b;if(s){for(f=0,v=s.length;f<v;f++)b=s[f],(b.geometries||b.geometry||b.features||b.coordinates)&&this.addData(b);return this}var j=this.options;if(j.filter&&!j.filter(i))return this;var k=Ze(i,j);return k?(k.feature=Mo(i),k.defaultOptions=k.options,this.resetStyle(k),j.onEachFeature&&j.onEachFeature(i,k),this.addLayer(k)):this},resetStyle:function(i){return i===void 0?this.eachLayer(this.resetStyle,this):(i.options=u({},i.defaultOptions),this._setLayerStyle(i,this.options.style),this)},setStyle:function(i){return this.eachLayer(function(s){this._setLayerStyle(s,i)},this)},_setLayerStyle:function(i,s){i.setStyle&&(typeof s=="function"&&(s=s(i.feature)),i.setStyle(s))}});function Ze(i,s){var f=i.type==="Feature"?i.geometry:i,v=f?f.coordinates:null,b=[],j=s&&s.pointToLayer,k=s&&s.coordsToLatLng||Eo,Z,Y,nt,ft;if(!v&&!f)return null;switch(f.type){case"Point":return Z=k(v),Da(j,i,Z,s);case"MultiPoint":for(nt=0,ft=v.length;nt<ft;nt++)Z=k(v[nt]),b.push(Da(j,i,Z,s));return new Un(b);case"LineString":case"MultiLineString":return Y=Br(v,f.type==="LineString"?0:1,k),new oi(Y,s);case"Polygon":case"MultiPolygon":return Y=Br(v,f.type==="Polygon"?1:2,k),new Oa(Y,s);case"GeometryCollection":for(nt=0,ft=f.geometries.length;nt<ft;nt++){var bt=Ze({geometry:f.geometries[nt],type:"Feature",properties:i.properties},s);bt&&b.push(bt)}return new Un(b);case"FeatureCollection":for(nt=0,ft=f.features.length;nt<ft;nt++){var Ot=Ze(f.features[nt],s);Ot&&b.push(Ot)}return new Un(b);default:throw new Error("Invalid GeoJSON object.")}}function Da(i,s,f,v){return i?i(s,f):new kr(f,v&&v.markersInheritOptions&&v)}function Eo(i){return new mt(i[1],i[0],i[2])}function Br(i,s,f){for(var v=[],b=0,j=i.length,k;b<j;b++)k=s?Br(i[b],s-1,f):(f||Eo)(i[b]),v.push(k);return v}function Ao(i,s){return i=ht(i),i.alt!==void 0?[A(i.lng,s),A(i.lat,s),A(i.alt,s)]:[A(i.lng,s),A(i.lat,s)]}function Pr(i,s,f,v){for(var b=[],j=0,k=i.length;j<k;j++)b.push(s?Pr(i[j],gn(i[j])?0:s-1,f,v):Ao(i[j],v));return!s&&f&&b.length>0&&b.push(b[0].slice()),b}function ji(i,s){return i.feature?u({},i.feature,{geometry:s}):Mo(s)}function Mo(i){return i.type==="Feature"||i.type==="FeatureCollection"?i:{type:"Feature",properties:{},geometry:i}}var Ei={toGeoJSON:function(i){return ji(this,{type:"Point",coordinates:Ao(this.getLatLng(),i)})}};kr.include(Ei),jo.include(Ei),La.include(Ei),oi.include({toGeoJSON:function(i){var s=!gn(this._latlngs),f=Pr(this._latlngs,s?1:0,!1,i);return ji(this,{type:(s?"Multi":"")+"LineString",coordinates:f})}}),Oa.include({toGeoJSON:function(i){var s=!gn(this._latlngs),f=s&&!gn(this._latlngs[0]),v=Pr(this._latlngs,f?2:s?1:0,!0,i);return s||(v=[v]),ji(this,{type:(f?"Multi":"")+"Polygon",coordinates:v})}}),za.include({toMultiPoint:function(i){var s=[];return this.eachLayer(function(f){s.push(f.toGeoJSON(i).geometry.coordinates)}),ji(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(i){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(i);var f=s==="GeometryCollection",v=[];return this.eachLayer(function(b){if(b.toGeoJSON){var j=b.toGeoJSON(i);if(f)v.push(j.geometry);else{var k=Mo(j);k.type==="FeatureCollection"?v.push.apply(v,k.features):v.push(k)}}}),f?ji(this,{geometries:v,type:"GeometryCollection"}):{type:"FeatureCollection",features:v}}});function zo(i,s){return new si(i,s)}var Nr=zo,Ra=zn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(i,s,f){this._url=i,this._bounds=ut(s),P(this,f)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Et(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){ne(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(i){return this.options.opacity=i,this._image&&this._updateOpacity(),this},setStyle:function(i){return i.opacity&&this.setOpacity(i.opacity),this},bringToFront:function(){return this._map&&Be(this._image),this},bringToBack:function(){return this._map&&Gi(this._image),this},setUrl:function(i){return this._url=i,this._image&&(this._image.src=i),this},setBounds:function(i){return this._bounds=ut(i),this._map&&this._reset(),this},getEvents:function(){var i={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var i=this._url.tagName==="IMG",s=this._image=i?this._url:Pt("img");if(Et(s,"leaflet-image-layer"),this._zoomAnimated&&Et(s,"leaflet-zoom-animated"),this.options.className&&Et(s,this.options.className),s.onselectstart=C,s.onmousemove=C,s.onload=g(this.fire,this,"load"),s.onerror=g(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),i){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(i){var s=this._map.getZoomScale(i.zoom),f=this._map._latLngBoundsToNewLayerBounds(this._bounds,i.zoom,i.center).min;ii(this._image,f,s)},_reset:function(){var i=this._image,s=new V(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),f=s.getSize();se(i,s.min),i.style.width=f.x+"px",i.style.height=f.y+"px"},_updateOpacity:function(){ce(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var i=this.options.errorOverlayUrl;i&&this._url!==i&&(this._url=i,this._image.src=i)},getCenter:function(){return this._bounds.getCenter()}}),pu=function(i,s,f){return new Ra(i,s,f)},Ai=Ra.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var i=this._url.tagName==="VIDEO",s=this._image=i?this._url:Pt("video");if(Et(s,"leaflet-image-layer"),this._zoomAnimated&&Et(s,"leaflet-zoom-animated"),this.options.className&&Et(s,this.options.className),s.onselectstart=C,s.onmousemove=C,s.onloadeddata=g(this.fire,this,"load"),i){for(var f=s.getElementsByTagName("source"),v=[],b=0;b<f.length;b++)v.push(f[b].src);this._url=f.length>0?v:[s.src];return}B(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var j=0;j<this._url.length;j++){var k=Pt("source");k.src=this._url[j],s.appendChild(k)}}});function ka(i,s,f){return new Ai(i,s,f)}var Lo=Ra.extend({_initImage:function(){var i=this._image=this._url;Et(i,"leaflet-image-layer"),this._zoomAnimated&&Et(i,"leaflet-zoom-animated"),this.options.className&&Et(i,this.options.className),i.onselectstart=C,i.onmousemove=C}});function gu(i,s,f){return new Lo(i,s,f)}var Ie=zn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(i,s){i&&(i instanceof mt||B(i))?(this._latlng=ht(i),P(this,s)):(P(this,i),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(i){return i=arguments.length?i:this._source._map,i.hasLayer(this)||i.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(i){return this._map?this.close():(arguments.length?this._source=i:i=this._source,this._prepareOpen(),this.openOn(i._map)),this},onAdd:function(i){this._zoomAnimated=i._zoomAnimated,this._container||this._initLayout(),i._fadeAnimated&&ce(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),i._fadeAnimated&&ce(this._container,1),this.bringToFront(),this.options.interactive&&(Et(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(i){i._fadeAnimated?(ce(this._container,0),this._removeTimeout=setTimeout(g(ne,void 0,this._container),200)):ne(this._container),this.options.interactive&&(he(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(i){return this._latlng=ht(i),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(i){return this._content=i,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var i={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Be(this._container),this},bringToBack:function(){return this._map&&Gi(this._container),this},_prepareOpen:function(i){var s=this._source;if(!s._map)return!1;if(s instanceof Un){s=null;var f=this._source._layers;for(var v in f)if(f[v]._map){s=f[v];break}if(!s)return!1;this._source=s}if(!i)if(s.getCenter)i=s.getCenter();else if(s.getLatLng)i=s.getLatLng();else if(s.getBounds)i=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(i),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var i=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")i.innerHTML=s;else{for(;i.hasChildNodes();)i.removeChild(i.firstChild);i.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var i=this._map.latLngToLayerPoint(this._latlng),s=dt(this.options.offset),f=this._getAnchor();this._zoomAnimated?se(this._container,i.add(f)):s=s.add(i).add(f);var v=this._containerBottom=-s.y,b=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=v+"px",this._container.style.left=b+"px"}},_getAnchor:function(){return[0,0]}});Ut.include({_initOverlay:function(i,s,f,v){var b=s;return b instanceof i||(b=new i(v).setContent(s)),f&&b.setLatLng(f),b}}),zn.include({_initOverlay:function(i,s,f,v){var b=f;return b instanceof i?(P(b,v),b._source=this):(b=s&&!v?s:new i(v,this),b.setContent(f)),b}});var Vr=Ie.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(i){return i=arguments.length?i:this._source._map,!i.hasLayer(this)&&i._popup&&i._popup.options.autoClose&&i.removeLayer(i._popup),i._popup=this,Ie.prototype.openOn.call(this,i)},onAdd:function(i){Ie.prototype.onAdd.call(this,i),i.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof In||this._source.on("preclick",Mn))},onRemove:function(i){Ie.prototype.onRemove.call(this,i),i.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof In||this._source.off("preclick",Mn))},getEvents:function(){var i=Ie.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(i.preclick=this.close),this.options.keepInView&&(i.moveend=this._adjustPan),i},_initLayout:function(){var i="leaflet-popup",s=this._container=Pt("div",i+" "+(this.options.className||"")+" leaflet-zoom-animated"),f=this._wrapper=Pt("div",i+"-content-wrapper",s);if(this._contentNode=Pt("div",i+"-content",f),Yi(s),Vn(this._contentNode),jt(s,"contextmenu",Mn),this._tipContainer=Pt("div",i+"-tip-container",s),this._tip=Pt("div",i+"-tip",this._tipContainer),this.options.closeButton){var v=this._closeButton=Pt("a",i+"-close-button",s);v.setAttribute("role","button"),v.setAttribute("aria-label","Close popup"),v.href="#close",v.innerHTML='<span aria-hidden="true">&#215;</span>',jt(v,"click",function(b){_e(b),this.close()},this)}},_updateLayout:function(){var i=this._contentNode,s=i.style;s.width="",s.whiteSpace="nowrap";var f=i.offsetWidth;f=Math.min(f,this.options.maxWidth),f=Math.max(f,this.options.minWidth),s.width=f+1+"px",s.whiteSpace="",s.height="";var v=i.offsetHeight,b=this.options.maxHeight,j="leaflet-popup-scrolled";b&&v>b?(s.height=b+"px",Et(i,j)):he(i,j),this._containerWidth=this._container.offsetWidth},_animateZoom:function(i){var s=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center),f=this._getAnchor();se(this._container,s.add(f))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var i=this._map,s=parseInt(Sr(this._container,"marginBottom"),10)||0,f=this._container.offsetHeight+s,v=this._containerWidth,b=new rt(this._containerLeft,-f-this._containerBottom);b._add(Si(this._container));var j=i.layerPointToContainerPoint(b),k=dt(this.options.autoPanPadding),Z=dt(this.options.autoPanPaddingTopLeft||k),Y=dt(this.options.autoPanPaddingBottomRight||k),nt=i.getSize(),ft=0,bt=0;j.x+v+Y.x>nt.x&&(ft=j.x+v-nt.x+Y.x),j.x-ft-Z.x<0&&(ft=j.x-Z.x),j.y+f+Y.y>nt.y&&(bt=j.y+f-nt.y+Y.y),j.y-bt-Z.y<0&&(bt=j.y-Z.y),(ft||bt)&&(this.options.keepInView&&(this._autopanning=!0),i.fire("autopanstart").panBy([ft,bt]))}},_getAnchor:function(){return dt(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),vu=function(i,s){return new Vr(i,s)};Ut.mergeOptions({closePopupOnClick:!0}),Ut.include({openPopup:function(i,s,f){return this._initOverlay(Vr,i,s,f).openOn(this),this},closePopup:function(i){return i=arguments.length?i:this._popup,i&&i.close(),this}}),zn.include({bindPopup:function(i,s){return this._popup=this._initOverlay(Vr,this._popup,i,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(i){return this._popup&&(this instanceof Un||(this._popup._source=this),this._popup._prepareOpen(i||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(i){return this._popup&&this._popup.setContent(i),this},getPopup:function(){return this._popup},_openPopup:function(i){if(!(!this._popup||!this._map)){Ti(i);var s=i.layer||i.target;if(this._popup._source===s&&!(s instanceof In)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(i.latlng);return}this._popup._source=s,this.openPopup(i.latlng)}},_movePopup:function(i){this._popup.setLatLng(i.latlng)},_onKeyPress:function(i){i.originalEvent.keyCode===13&&this._openPopup(i)}});var Hr=Ie.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(i){Ie.prototype.onAdd.call(this,i),this.setOpacity(this.options.opacity),i.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(i){Ie.prototype.onRemove.call(this,i),i.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var i=Ie.prototype.getEvents.call(this);return this.options.permanent||(i.preclick=this.close),i},_initLayout:function(){var i="leaflet-tooltip",s=i+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Pt("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+y(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(i){var s,f,v=this._map,b=this._container,j=v.latLngToContainerPoint(v.getCenter()),k=v.layerPointToContainerPoint(i),Z=this.options.direction,Y=b.offsetWidth,nt=b.offsetHeight,ft=dt(this.options.offset),bt=this._getAnchor();Z==="top"?(s=Y/2,f=nt):Z==="bottom"?(s=Y/2,f=0):Z==="center"?(s=Y/2,f=nt/2):Z==="right"?(s=0,f=nt/2):Z==="left"?(s=Y,f=nt/2):k.x<j.x?(Z="right",s=0,f=nt/2):(Z="left",s=Y+(ft.x+bt.x)*2,f=nt/2),i=i.subtract(dt(s,f,!0)).add(ft).add(bt),he(b,"leaflet-tooltip-right"),he(b,"leaflet-tooltip-left"),he(b,"leaflet-tooltip-top"),he(b,"leaflet-tooltip-bottom"),Et(b,"leaflet-tooltip-"+Z),se(b,i)},_updatePosition:function(){var i=this._map.latLngToLayerPoint(this._latlng);this._setPosition(i)},setOpacity:function(i){this.options.opacity=i,this._container&&ce(this._container,i)},_animateZoom:function(i){var s=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center);this._setPosition(s)},_getAnchor:function(){return dt(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),qf=function(i,s){return new Hr(i,s)};Ut.include({openTooltip:function(i,s,f){return this._initOverlay(Hr,i,s,f).openOn(this),this},closeTooltip:function(i){return i.close(),this}}),zn.include({bindTooltip:function(i,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Hr,this._tooltip,i,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(i){if(!(!i&&this._tooltipHandlersAdded)){var s=i?"off":"on",f={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?f.add=this._openTooltip:(f.mouseover=this._openTooltip,f.mouseout=this.closeTooltip,f.click=this._openTooltip,this._map?this._addFocusListeners():f.add=this._addFocusListeners),this._tooltip.options.sticky&&(f.mousemove=this._moveTooltip),this[s](f),this._tooltipHandlersAdded=!i}},openTooltip:function(i){return this._tooltip&&(this instanceof Un||(this._tooltip._source=this),this._tooltip._prepareOpen(i)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(i){return this._tooltip&&this._tooltip.setContent(i),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(i){var s=typeof i.getElement=="function"&&i.getElement();s&&(jt(s,"focus",function(){this._tooltip._source=i,this.openTooltip()},this),jt(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(i){var s=typeof i.getElement=="function"&&i.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(i){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var s=this;this._map.once("moveend",function(){s._openOnceFlag=!1,s._openTooltip(i)});return}this._tooltip._source=i.layer||i.target,this.openTooltip(this._tooltip.options.sticky?i.latlng:void 0)}},_moveTooltip:function(i){var s=i.latlng,f,v;this._tooltip.options.sticky&&i.originalEvent&&(f=this._map.mouseEventToContainerPoint(i.originalEvent),v=this._map.containerPointToLayerPoint(f),s=this._map.layerPointToLatLng(v)),this._tooltip.setLatLng(s)}});var yu=Zn.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(i){var s=i&&i.tagName==="DIV"?i:document.createElement("div"),f=this.options;if(f.html instanceof Element?(mn(s),s.appendChild(f.html)):s.innerHTML=f.html!==!1?f.html:"",f.bgPos){var v=dt(f.bgPos);s.style.backgroundPosition=-v.x+"px "+-v.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function Yf(i){return new yu(i)}Zn.Default=Dr;var Ba=zn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:_t.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(i){P(this,i)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(i){i._addZoomLimit(this)},onRemove:function(i){this._removeAllTiles(),ne(this._container),i._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Be(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Gi(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(i){return this.options.opacity=i,this._updateOpacity(),this},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var i=this._clampZoom(this._map.getZoom());i!==this._tileZoom&&(this._tileZoom=i,this._updateLevels()),this._update()}return this},getEvents:function(){var i={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=_(this._onMoveEnd,this.options.updateInterval,this)),i.move=this._onMove),this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},createTile:function(){return document.createElement("div")},getTileSize:function(){var i=this.options.tileSize;return i instanceof rt?i:new rt(i,i)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(i){for(var s=this.getPane().children,f=-i(-1/0,1/0),v=0,b=s.length,j;v<b;v++)j=s[v].style.zIndex,s[v]!==this._container&&j&&(f=i(f,+j));isFinite(f)&&(this.options.zIndex=f+i(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!_t.ielt9){ce(this._container,this.options.opacity);var i=+new Date,s=!1,f=!1;for(var v in this._tiles){var b=this._tiles[v];if(!(!b.current||!b.loaded)){var j=Math.min(1,(i-b.loaded)/200);ce(b.el,j),j<1?s=!0:(b.active?f=!0:this._onOpaqueTile(b),b.active=!0)}}f&&!this._noPrune&&this._pruneTiles(),s&&(at(this._fadeFrame),this._fadeFrame=Tt(this._updateOpacity,this))}},_onOpaqueTile:C,_initContainer:function(){this._container||(this._container=Pt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var i=this._tileZoom,s=this.options.maxZoom;if(i!==void 0){for(var f in this._levels)f=Number(f),this._levels[f].el.children.length||f===i?(this._levels[f].el.style.zIndex=s-Math.abs(i-f),this._onUpdateLevel(f)):(ne(this._levels[f].el),this._removeTilesAtZoom(f),this._onRemoveLevel(f),delete this._levels[f]);var v=this._levels[i],b=this._map;return v||(v=this._levels[i]={},v.el=Pt("div","leaflet-tile-container leaflet-zoom-animated",this._container),v.el.style.zIndex=s,v.origin=b.project(b.unproject(b.getPixelOrigin()),i).round(),v.zoom=i,this._setZoomTransform(v,b.getCenter(),b.getZoom()),C(v.el.offsetWidth),this._onCreateLevel(v)),this._level=v,v}},_onUpdateLevel:C,_onRemoveLevel:C,_onCreateLevel:C,_pruneTiles:function(){if(this._map){var i,s,f=this._map.getZoom();if(f>this.options.maxZoom||f<this.options.minZoom){this._removeAllTiles();return}for(i in this._tiles)s=this._tiles[i],s.retain=s.current;for(i in this._tiles)if(s=this._tiles[i],s.current&&!s.active){var v=s.coords;this._retainParent(v.x,v.y,v.z,v.z-5)||this._retainChildren(v.x,v.y,v.z,v.z+2)}for(i in this._tiles)this._tiles[i].retain||this._removeTile(i)}},_removeTilesAtZoom:function(i){for(var s in this._tiles)this._tiles[s].coords.z===i&&this._removeTile(s)},_removeAllTiles:function(){for(var i in this._tiles)this._removeTile(i)},_invalidateAll:function(){for(var i in this._levels)ne(this._levels[i].el),this._onRemoveLevel(Number(i)),delete this._levels[i];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(i,s,f,v){var b=Math.floor(i/2),j=Math.floor(s/2),k=f-1,Z=new rt(+b,+j);Z.z=+k;var Y=this._tileCoordsToKey(Z),nt=this._tiles[Y];return nt&&nt.active?(nt.retain=!0,!0):(nt&&nt.loaded&&(nt.retain=!0),k>v?this._retainParent(b,j,k,v):!1)},_retainChildren:function(i,s,f,v){for(var b=2*i;b<2*i+2;b++)for(var j=2*s;j<2*s+2;j++){var k=new rt(b,j);k.z=f+1;var Z=this._tileCoordsToKey(k),Y=this._tiles[Z];if(Y&&Y.active){Y.retain=!0;continue}else Y&&Y.loaded&&(Y.retain=!0);f+1<v&&this._retainChildren(b,j,f+1,v)}},_resetView:function(i){var s=i&&(i.pinch||i.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(i){this._setView(i.center,i.zoom,!0,i.noUpdate)},_clampZoom:function(i){var s=this.options;return s.minNativeZoom!==void 0&&i<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<i?s.maxNativeZoom:i},_setView:function(i,s,f,v){var b=Math.round(s);this.options.maxZoom!==void 0&&b>this.options.maxZoom||this.options.minZoom!==void 0&&b<this.options.minZoom?b=void 0:b=this._clampZoom(b);var j=this.options.updateWhenZooming&&b!==this._tileZoom;(!v||j)&&(this._tileZoom=b,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),b!==void 0&&this._update(i),f||this._pruneTiles(),this._noPrune=!!f),this._setZoomTransforms(i,s)},_setZoomTransforms:function(i,s){for(var f in this._levels)this._setZoomTransform(this._levels[f],i,s)},_setZoomTransform:function(i,s,f){var v=this._map.getZoomScale(f,i.zoom),b=i.origin.multiplyBy(v).subtract(this._map._getNewPixelOrigin(s,f)).round();_t.any3d?ii(i.el,b,v):se(i.el,b)},_resetGrid:function(){var i=this._map,s=i.options.crs,f=this._tileSize=this.getTileSize(),v=this._tileZoom,b=this._map.getPixelWorldBounds(this._tileZoom);b&&(this._globalTileRange=this._pxBoundsToTileRange(b)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(i.project([0,s.wrapLng[0]],v).x/f.x),Math.ceil(i.project([0,s.wrapLng[1]],v).x/f.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(i.project([s.wrapLat[0],0],v).y/f.x),Math.ceil(i.project([s.wrapLat[1],0],v).y/f.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(i){var s=this._map,f=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),v=s.getZoomScale(f,this._tileZoom),b=s.project(i,this._tileZoom).floor(),j=s.getSize().divideBy(v*2);return new V(b.subtract(j),b.add(j))},_update:function(i){var s=this._map;if(s){var f=this._clampZoom(s.getZoom());if(i===void 0&&(i=s.getCenter()),this._tileZoom!==void 0){var v=this._getTiledPixelBounds(i),b=this._pxBoundsToTileRange(v),j=b.getCenter(),k=[],Z=this.options.keepBuffer,Y=new V(b.getBottomLeft().subtract([Z,-Z]),b.getTopRight().add([Z,-Z]));if(!(isFinite(b.min.x)&&isFinite(b.min.y)&&isFinite(b.max.x)&&isFinite(b.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var nt in this._tiles){var ft=this._tiles[nt].coords;(ft.z!==this._tileZoom||!Y.contains(new rt(ft.x,ft.y)))&&(this._tiles[nt].current=!1)}if(Math.abs(f-this._tileZoom)>1){this._setView(i,f);return}for(var bt=b.min.y;bt<=b.max.y;bt++)for(var Ot=b.min.x;Ot<=b.max.x;Ot++){var Pe=new rt(Ot,bt);if(Pe.z=this._tileZoom,!!this._isValidTile(Pe)){var be=this._tiles[this._tileCoordsToKey(Pe)];be?be.current=!0:k.push(Pe)}}if(k.sort(function(qt,Yt){return qt.distanceTo(j)-Yt.distanceTo(j)}),k.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var on=document.createDocumentFragment();for(Ot=0;Ot<k.length;Ot++)this._addTile(k[Ot],on);this._level.el.appendChild(on)}}}},_isValidTile:function(i){var s=this._map.options.crs;if(!s.infinite){var f=this._globalTileRange;if(!s.wrapLng&&(i.x<f.min.x||i.x>f.max.x)||!s.wrapLat&&(i.y<f.min.y||i.y>f.max.y))return!1}if(!this.options.bounds)return!0;var v=this._tileCoordsToBounds(i);return ut(this.options.bounds).overlaps(v)},_keyToBounds:function(i){return this._tileCoordsToBounds(this._keyToTileCoords(i))},_tileCoordsToNwSe:function(i){var s=this._map,f=this.getTileSize(),v=i.scaleBy(f),b=v.add(f),j=s.unproject(v,i.z),k=s.unproject(b,i.z);return[j,k]},_tileCoordsToBounds:function(i){var s=this._tileCoordsToNwSe(i),f=new ct(s[0],s[1]);return this.options.noWrap||(f=this._map.wrapLatLngBounds(f)),f},_tileCoordsToKey:function(i){return i.x+":"+i.y+":"+i.z},_keyToTileCoords:function(i){var s=i.split(":"),f=new rt(+s[0],+s[1]);return f.z=+s[2],f},_removeTile:function(i){var s=this._tiles[i];s&&(ne(s.el),delete this._tiles[i],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(i)}))},_initTile:function(i){Et(i,"leaflet-tile");var s=this.getTileSize();i.style.width=s.x+"px",i.style.height=s.y+"px",i.onselectstart=C,i.onmousemove=C,_t.ielt9&&this.options.opacity<1&&ce(i,this.options.opacity)},_addTile:function(i,s){var f=this._getTilePos(i),v=this._tileCoordsToKey(i),b=this.createTile(this._wrapCoords(i),g(this._tileReady,this,i));this._initTile(b),this.createTile.length<2&&Tt(g(this._tileReady,this,i,null,b)),se(b,f),this._tiles[v]={el:b,coords:i,current:!0},s.appendChild(b),this.fire("tileloadstart",{tile:b,coords:i})},_tileReady:function(i,s,f){s&&this.fire("tileerror",{error:s,tile:f,coords:i});var v=this._tileCoordsToKey(i);f=this._tiles[v],f&&(f.loaded=+new Date,this._map._fadeAnimated?(ce(f.el,0),at(this._fadeFrame),this._fadeFrame=Tt(this._updateOpacity,this)):(f.active=!0,this._pruneTiles()),s||(Et(f.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:f.el,coords:i})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),_t.ielt9||!this._map._fadeAnimated?Tt(this._pruneTiles,this):setTimeout(g(this._pruneTiles,this),250)))},_getTilePos:function(i){return i.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(i){var s=new rt(this._wrapX?T(i.x,this._wrapX):i.x,this._wrapY?T(i.y,this._wrapY):i.y);return s.z=i.z,s},_pxBoundsToTileRange:function(i){var s=this.getTileSize();return new V(i.min.unscaleBy(s).floor(),i.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var i in this._tiles)if(!this._tiles[i].loaded)return!1;return!0}});function xu(i){return new Ba(i)}var Mi=Ba.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(i,s){this._url=i,s=P(this,s),s.detectRetina&&_t.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(i,s){return this._url===i&&s===void 0&&(s=!0),this._url=i,s||this.redraw(),this},createTile:function(i,s){var f=document.createElement("img");return jt(f,"load",g(this._tileOnLoad,this,s,f)),jt(f,"error",g(this._tileOnError,this,s,f)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(f.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(f.referrerPolicy=this.options.referrerPolicy),f.alt="",f.src=this.getTileUrl(i),f},getTileUrl:function(i){var s={r:_t.retina?"@2x":"",s:this._getSubdomain(i),x:i.x,y:i.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var f=this._globalTileRange.max.y-i.y;this.options.tms&&(s.y=f),s["-y"]=f}return M(this._url,u(s,this.options))},_tileOnLoad:function(i,s){_t.ielt9?setTimeout(g(i,this,null,s),0):i(null,s)},_tileOnError:function(i,s,f){var v=this.options.errorTileUrl;v&&s.getAttribute("src")!==v&&(s.src=v),i(f,s)},_onTileRemove:function(i){i.tile.onload=null},_getZoomForUrl:function(){var i=this._tileZoom,s=this.options.maxZoom,f=this.options.zoomReverse,v=this.options.zoomOffset;return f&&(i=s-i),i+v},_getSubdomain:function(i){var s=Math.abs(i.x+i.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var i,s;for(i in this._tiles)if(this._tiles[i].coords.z!==this._tileZoom&&(s=this._tiles[i].el,s.onload=C,s.onerror=C,!s.complete)){s.src=tt;var f=this._tiles[i].coords;ne(s),delete this._tiles[i],this.fire("tileabort",{tile:s,coords:f})}},_removeTile:function(i){var s=this._tiles[i];if(s)return s.el.setAttribute("src",tt),Ba.prototype._removeTile.call(this,i)},_tileReady:function(i,s,f){if(!(!this._map||f&&f.getAttribute("src")===tt))return Ba.prototype._tileReady.call(this,i,s,f)}});function vn(i,s){return new Mi(i,s)}var Ur=Mi.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(i,s){this._url=i;var f=u({},this.defaultWmsParams);for(var v in s)v in this.options||(f[v]=s[v]);s=P(this,s);var b=s.detectRetina&&_t.retina?2:1,j=this.getTileSize();f.width=j.x*b,f.height=j.y*b,this.wmsParams=f},onAdd:function(i){this._crs=this.options.crs||i.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,Mi.prototype.onAdd.call(this,i)},getTileUrl:function(i){var s=this._tileCoordsToNwSe(i),f=this._crs,v=W(f.project(s[0]),f.project(s[1])),b=v.min,j=v.max,k=(this._wmsVersion>=1.3&&this._crs===sl?[b.y,b.x,j.y,j.x]:[b.x,b.y,j.x,j.y]).join(","),Z=Mi.prototype.getTileUrl.call(this,i);return Z+I(this.wmsParams,Z,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+k},setParams:function(i,s){return u(this.wmsParams,i),s||this.redraw(),this}});function yn(i,s){return new Ur(i,s)}Mi.WMS=Ur,vn.wms=yn;var Qe=zn.extend({options:{padding:.1},initialize:function(i){P(this,i),y(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Et(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var i={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(i.zoomanim=this._onAnimZoom),i},_onAnimZoom:function(i){this._updateTransform(i.center,i.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(i,s){var f=this._map.getZoomScale(s,this._zoom),v=this._map.getSize().multiplyBy(.5+this.options.padding),b=this._map.project(this._center,s),j=v.multiplyBy(-f).add(b).subtract(this._map._getNewPixelOrigin(i,s));_t.any3d?ii(this._container,j,f):se(this._container,j)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var i in this._layers)this._layers[i]._reset()},_onZoomEnd:function(){for(var i in this._layers)this._layers[i]._project()},_updatePaths:function(){for(var i in this._layers)this._layers[i]._update()},_update:function(){var i=this.options.padding,s=this._map.getSize(),f=this._map.containerPointToLayerPoint(s.multiplyBy(-i)).round();this._bounds=new V(f,f.add(s.multiplyBy(1+i*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Oo=Qe.extend({options:{tolerance:0},getEvents:function(){var i=Qe.prototype.getEvents.call(this);return i.viewprereset=this._onViewPreReset,i},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Qe.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var i=this._container=document.createElement("canvas");jt(i,"mousemove",this._onMouseMove,this),jt(i,"click dblclick mousedown mouseup contextmenu",this._onClick,this),jt(i,"mouseout",this._handleMouseOut,this),i._leaflet_disable_events=!0,this._ctx=i.getContext("2d")},_destroyContainer:function(){at(this._redrawRequest),delete this._ctx,ne(this._container),Wt(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var i;this._redrawBounds=null;for(var s in this._layers)i=this._layers[s],i._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Qe.prototype._update.call(this);var i=this._bounds,s=this._container,f=i.getSize(),v=_t.retina?2:1;se(s,i.min),s.width=v*f.x,s.height=v*f.y,s.style.width=f.x+"px",s.style.height=f.y+"px",_t.retina&&this._ctx.scale(2,2),this._ctx.translate(-i.min.x,-i.min.y),this.fire("update")}},_reset:function(){Qe.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(i){this._updateDashArray(i),this._layers[y(i)]=i;var s=i._order={layer:i,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(i){this._requestRedraw(i)},_removePath:function(i){var s=i._order,f=s.next,v=s.prev;f?f.prev=v:this._drawLast=v,v?v.next=f:this._drawFirst=f,delete i._order,delete this._layers[y(i)],this._requestRedraw(i)},_updatePath:function(i){this._extendRedrawBounds(i),i._project(),i._update(),this._requestRedraw(i)},_updateStyle:function(i){this._updateDashArray(i),this._requestRedraw(i)},_updateDashArray:function(i){if(typeof i.options.dashArray=="string"){var s=i.options.dashArray.split(/[, ]+/),f=[],v,b;for(b=0;b<s.length;b++){if(v=Number(s[b]),isNaN(v))return;f.push(v)}i.options._dashArray=f}else i.options._dashArray=i.options.dashArray},_requestRedraw:function(i){this._map&&(this._extendRedrawBounds(i),this._redrawRequest=this._redrawRequest||Tt(this._redraw,this))},_extendRedrawBounds:function(i){if(i._pxBounds){var s=(i.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new V,this._redrawBounds.extend(i._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(i._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var i=this._redrawBounds;if(i){var s=i.getSize();this._ctx.clearRect(i.min.x,i.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var i,s=this._redrawBounds;if(this._ctx.save(),s){var f=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,f.x,f.y),this._ctx.clip()}this._drawing=!0;for(var v=this._drawFirst;v;v=v.next)i=v.layer,(!s||i._pxBounds&&i._pxBounds.intersects(s))&&i._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(i,s){if(this._drawing){var f,v,b,j,k=i._parts,Z=k.length,Y=this._ctx;if(Z){for(Y.beginPath(),f=0;f<Z;f++){for(v=0,b=k[f].length;v<b;v++)j=k[f][v],Y[v?"lineTo":"moveTo"](j.x,j.y);s&&Y.closePath()}this._fillStroke(Y,i)}}},_updateCircle:function(i){if(!(!this._drawing||i._empty())){var s=i._point,f=this._ctx,v=Math.max(Math.round(i._radius),1),b=(Math.max(Math.round(i._radiusY),1)||v)/v;b!==1&&(f.save(),f.scale(1,b)),f.beginPath(),f.arc(s.x,s.y/b,v,0,Math.PI*2,!1),b!==1&&f.restore(),this._fillStroke(f,i)}},_fillStroke:function(i,s){var f=s.options;f.fill&&(i.globalAlpha=f.fillOpacity,i.fillStyle=f.fillColor||f.color,i.fill(f.fillRule||"evenodd")),f.stroke&&f.weight!==0&&(i.setLineDash&&i.setLineDash(s.options&&s.options._dashArray||[]),i.globalAlpha=f.opacity,i.lineWidth=f.weight,i.strokeStyle=f.color,i.lineCap=f.lineCap,i.lineJoin=f.lineJoin,i.stroke())},_onClick:function(i){for(var s=this._map.mouseEventToLayerPoint(i),f,v,b=this._drawFirst;b;b=b.next)f=b.layer,f.options.interactive&&f._containsPoint(s)&&(!(i.type==="click"||i.type==="preclick")||!this._map._draggableMoved(f))&&(v=f);this._fireEvent(v?[v]:!1,i)},_onMouseMove:function(i){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(i);this._handleMouseHover(i,s)}},_handleMouseOut:function(i){var s=this._hoveredLayer;s&&(he(this._container,"leaflet-interactive"),this._fireEvent([s],i,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(i,s){if(!this._mouseHoverThrottled){for(var f,v,b=this._drawFirst;b;b=b.next)f=b.layer,f.options.interactive&&f._containsPoint(s)&&(v=f);v!==this._hoveredLayer&&(this._handleMouseOut(i),v&&(Et(this._container,"leaflet-interactive"),this._fireEvent([v],i,"mouseover"),this._hoveredLayer=v)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,i),this._mouseHoverThrottled=!0,setTimeout(g(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(i,s,f){this._map._fireDOMEvent(s,f||s.type,i)},_bringToFront:function(i){var s=i._order;if(s){var f=s.next,v=s.prev;if(f)f.prev=v;else return;v?v.next=f:f&&(this._drawFirst=f),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(i)}},_bringToBack:function(i){var s=i._order;if(s){var f=s.next,v=s.prev;if(v)v.next=f;else return;f?f.prev=v:v&&(this._drawLast=v),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(i)}}});function Zr(i){return _t.canvas?new Oo(i):null}var zi=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(i){return document.createElement("<lvml:"+i+' class="lvml">')}}catch{}return function(i){return document.createElement("<"+i+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),ll={_initContainer:function(){this._container=Pt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Qe.prototype._update.call(this),this.fire("update"))},_initPath:function(i){var s=i._container=zi("shape");Et(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",i._path=zi("path"),s.appendChild(i._path),this._updateStyle(i),this._layers[y(i)]=i},_addPath:function(i){var s=i._container;this._container.appendChild(s),i.options.interactive&&i.addInteractiveTarget(s)},_removePath:function(i){var s=i._container;ne(s),i.removeInteractiveTarget(s),delete this._layers[y(i)]},_updateStyle:function(i){var s=i._stroke,f=i._fill,v=i.options,b=i._container;b.stroked=!!v.stroke,b.filled=!!v.fill,v.stroke?(s||(s=i._stroke=zi("stroke")),b.appendChild(s),s.weight=v.weight+"px",s.color=v.color,s.opacity=v.opacity,v.dashArray?s.dashStyle=B(v.dashArray)?v.dashArray.join(" "):v.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=v.lineCap.replace("butt","flat"),s.joinstyle=v.lineJoin):s&&(b.removeChild(s),i._stroke=null),v.fill?(f||(f=i._fill=zi("fill")),b.appendChild(f),f.color=v.fillColor||v.color,f.opacity=v.fillOpacity):f&&(b.removeChild(f),i._fill=null)},_updateCircle:function(i){var s=i._point.round(),f=Math.round(i._radius),v=Math.round(i._radiusY||f);this._setPath(i,i._empty()?"M0 0":"AL "+s.x+","+s.y+" "+f+","+v+" 0,"+65535*360)},_setPath:function(i,s){i._path.v=s},_bringToFront:function(i){Be(i._container)},_bringToBack:function(i){Gi(i._container)}},Gn=_t.vml?zi:jn,Pa=Qe.extend({_initContainer:function(){this._container=Gn("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Gn("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){ne(this._container),Wt(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Qe.prototype._update.call(this);var i=this._bounds,s=i.getSize(),f=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,f.setAttribute("width",s.x),f.setAttribute("height",s.y)),se(f,i.min),f.setAttribute("viewBox",[i.min.x,i.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(i){var s=i._path=Gn("path");i.options.className&&Et(s,i.options.className),i.options.interactive&&Et(s,"leaflet-interactive"),this._updateStyle(i),this._layers[y(i)]=i},_addPath:function(i){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(i._path),i.addInteractiveTarget(i._path)},_removePath:function(i){ne(i._path),i.removeInteractiveTarget(i._path),delete this._layers[y(i)]},_updatePath:function(i){i._project(),i._update()},_updateStyle:function(i){var s=i._path,f=i.options;s&&(f.stroke?(s.setAttribute("stroke",f.color),s.setAttribute("stroke-opacity",f.opacity),s.setAttribute("stroke-width",f.weight),s.setAttribute("stroke-linecap",f.lineCap),s.setAttribute("stroke-linejoin",f.lineJoin),f.dashArray?s.setAttribute("stroke-dasharray",f.dashArray):s.removeAttribute("stroke-dasharray"),f.dashOffset?s.setAttribute("stroke-dashoffset",f.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),f.fill?(s.setAttribute("fill",f.fillColor||f.color),s.setAttribute("fill-opacity",f.fillOpacity),s.setAttribute("fill-rule",f.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(i,s){this._setPath(i,ho(i._parts,s))},_updateCircle:function(i){var s=i._point,f=Math.max(Math.round(i._radius),1),v=Math.max(Math.round(i._radiusY),1)||f,b="a"+f+","+v+" 0 1,0 ",j=i._empty()?"M0 0":"M"+(s.x-f)+","+s.y+b+f*2+",0 "+b+-f*2+",0 ";this._setPath(i,j)},_setPath:function(i,s){i._path.setAttribute("d",s)},_bringToFront:function(i){Be(i._path)},_bringToBack:function(i){Gi(i._path)}});_t.vml&&Pa.include(ll);function Ir(i){return _t.svg||_t.vml?new Pa(i):null}Ut.include({getRenderer:function(i){var s=i.options.renderer||this._getPaneRenderer(i.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(i){if(i==="overlayPane"||i===void 0)return!1;var s=this._paneRenderers[i];return s===void 0&&(s=this._createRenderer({pane:i}),this._paneRenderers[i]=s),s},_createRenderer:function(i){return this.options.preferCanvas&&Zr(i)||Ir(i)}});var $i=Oa.extend({initialize:function(i,s){Oa.prototype.initialize.call(this,this._boundsToLatLngs(i),s)},setBounds:function(i){return this.setLatLngs(this._boundsToLatLngs(i))},_boundsToLatLngs:function(i){return i=ut(i),[i.getSouthWest(),i.getNorthWest(),i.getNorthEast(),i.getSouthEast()]}});function Ff(i,s){return new $i(i,s)}Pa.create=Gn,Pa.pointsToPath=ho,si.geometryToLayer=Ze,si.coordsToLatLng=Eo,si.coordsToLatLngs=Br,si.latLngToCoords=Ao,si.latLngsToCoords=Pr,si.getFeature=ji,si.asFeature=Mo,Ut.mergeOptions({boxZoom:!0});var We=Hn.extend({initialize:function(i){this._map=i,this._container=i._container,this._pane=i._panes.overlayPane,this._resetStateTimeout=0,i.on("unload",this._destroy,this)},addHooks:function(){jt(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Wt(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){ne(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(i){if(!i.shiftKey||i.which!==1&&i.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Sa(),yo(),this._startPoint=this._map.mouseEventToContainerPoint(i),jt(document,{contextmenu:Ti,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(i){this._moved||(this._moved=!0,this._box=Pt("div","leaflet-zoom-box",this._container),Et(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(i);var s=new V(this._point,this._startPoint),f=s.getSize();se(this._box,s.min),this._box.style.width=f.x+"px",this._box.style.height=f.y+"px"},_finish:function(){this._moved&&(ne(this._box),he(this._container,"leaflet-crosshair")),Nn(),Cr(),Wt(document,{contextmenu:Ti,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(i){if(!(i.which!==1&&i.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(g(this._resetState,this),0);var s=new ct(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(i){i.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});Ut.addInitHook("addHandler","boxZoom",We),Ut.mergeOptions({doubleClickZoom:!0});var Do=Hn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(i){var s=this._map,f=s.getZoom(),v=s.options.zoomDelta,b=i.originalEvent.shiftKey?f-v:f+v;s.options.doubleClickZoom==="center"?s.setZoom(b):s.setZoomAround(i.containerPoint,b)}});Ut.addInitHook("addHandler","doubleClickZoom",Do),Ut.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var qn=Hn.extend({addHooks:function(){if(!this._draggable){var i=this._map;this._draggable=new Ci(i._mapPane,i._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),i.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),i.on("zoomend",this._onZoomEnd,this),i.whenReady(this._onZoomEnd,this))}Et(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){he(this._map._container,"leaflet-grab"),he(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var i=this._map;if(i._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=ut(this._map.options.maxBounds);this._offsetLimit=W(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;i.fire("movestart").fire("dragstart"),i.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(i){if(this._map.options.inertia){var s=this._lastTime=+new Date,f=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(f),this._times.push(s),this._prunePositions(s)}this._map.fire("move",i).fire("drag",i)},_prunePositions:function(i){for(;this._positions.length>1&&i-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var i=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(i).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(i,s){return i-(i-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var i=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;i.x<s.min.x&&(i.x=this._viscousLimit(i.x,s.min.x)),i.y<s.min.y&&(i.y=this._viscousLimit(i.y,s.min.y)),i.x>s.max.x&&(i.x=this._viscousLimit(i.x,s.max.x)),i.y>s.max.y&&(i.y=this._viscousLimit(i.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(i)}},_onPreDragWrap:function(){var i=this._worldWidth,s=Math.round(i/2),f=this._initialWorldOffset,v=this._draggable._newPos.x,b=(v-s+f)%i+s-f,j=(v+s+f)%i-s-f,k=Math.abs(b+f)<Math.abs(j+f)?b:j;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=k},_onDragEnd:function(i){var s=this._map,f=s.options,v=!f.inertia||i.noInertia||this._times.length<2;if(s.fire("dragend",i),v)s.fire("moveend");else{this._prunePositions(+new Date);var b=this._lastPos.subtract(this._positions[0]),j=(this._lastTime-this._times[0])/1e3,k=f.easeLinearity,Z=b.multiplyBy(k/j),Y=Z.distanceTo([0,0]),nt=Math.min(f.inertiaMaxSpeed,Y),ft=Z.multiplyBy(nt/Y),bt=nt/(f.inertiaDeceleration*k),Ot=ft.multiplyBy(-bt/2).round();!Ot.x&&!Ot.y?s.fire("moveend"):(Ot=s._limitOffset(Ot,s.options.maxBounds),Tt(function(){s.panBy(Ot,{duration:bt,easeLinearity:k,noMoveStart:!0,animate:!0})}))}}});Ut.addInitHook("addHandler","dragging",qn),Ut.mergeOptions({keyboard:!0,keyboardPanDelta:80});var cl=Hn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(i){this._map=i,this._setPanDelta(i.options.keyboardPanDelta),this._setZoomDelta(i.options.zoomDelta)},addHooks:function(){var i=this._map._container;i.tabIndex<=0&&(i.tabIndex="0"),jt(i,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Wt(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var i=document.body,s=document.documentElement,f=i.scrollTop||s.scrollTop,v=i.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(v,f)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(i){var s=this._panKeys={},f=this.keyCodes,v,b;for(v=0,b=f.left.length;v<b;v++)s[f.left[v]]=[-1*i,0];for(v=0,b=f.right.length;v<b;v++)s[f.right[v]]=[i,0];for(v=0,b=f.down.length;v<b;v++)s[f.down[v]]=[0,i];for(v=0,b=f.up.length;v<b;v++)s[f.up[v]]=[0,-1*i]},_setZoomDelta:function(i){var s=this._zoomKeys={},f=this.keyCodes,v,b;for(v=0,b=f.zoomIn.length;v<b;v++)s[f.zoomIn[v]]=i;for(v=0,b=f.zoomOut.length;v<b;v++)s[f.zoomOut[v]]=-i},_addHooks:function(){jt(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Wt(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(i){if(!(i.altKey||i.ctrlKey||i.metaKey)){var s=i.keyCode,f=this._map,v;if(s in this._panKeys){if(!f._panAnim||!f._panAnim._inProgress)if(v=this._panKeys[s],i.shiftKey&&(v=dt(v).multiplyBy(3)),f.options.maxBounds&&(v=f._limitOffset(dt(v),f.options.maxBounds)),f.options.worldCopyJump){var b=f.wrapLatLng(f.unproject(f.project(f.getCenter()).add(v)));f.panTo(b)}else f.panBy(v)}else if(s in this._zoomKeys)f.setZoom(f.getZoom()+(i.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&f._popup&&f._popup.options.closeOnEscapeKey)f.closePopup();else return;Ti(i)}}});Ut.addInitHook("addHandler","keyboard",cl),Ut.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Gr=Hn.extend({addHooks:function(){jt(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Wt(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(i){var s=Ye(i),f=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(i),this._startTime||(this._startTime=+new Date);var v=Math.max(f-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(g(this._performZoom,this),v),Ti(i)},_performZoom:function(){var i=this._map,s=i.getZoom(),f=this._map.options.zoomSnap||0;i._stop();var v=this._delta/(this._map.options.wheelPxPerZoomLevel*4),b=4*Math.log(2/(1+Math.exp(-Math.abs(v))))/Math.LN2,j=f?Math.ceil(b/f)*f:b,k=i._limitZoom(s+(this._delta>0?j:-j))-s;this._delta=0,this._startTime=null,k&&(i.options.scrollWheelZoom==="center"?i.setZoom(s+k):i.setZoomAround(this._lastMousePos,s+k))}});Ut.addInitHook("addHandler","scrollWheelZoom",Gr);var Xi=600;Ut.mergeOptions({tapHold:_t.touchNative&&_t.safari&&_t.mobile,tapTolerance:15});var Ro=Hn.extend({addHooks:function(){jt(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Wt(this._map._container,"touchstart",this._onDown,this)},_onDown:function(i){if(clearTimeout(this._holdTimeout),i.touches.length===1){var s=i.touches[0];this._startPos=this._newPos=new rt(s.clientX,s.clientY),this._holdTimeout=setTimeout(g(function(){this._cancel(),this._isTapValid()&&(jt(document,"touchend",_e),jt(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),Xi),jt(document,"touchend touchcancel contextmenu",this._cancel,this),jt(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function i(){Wt(document,"touchend",_e),Wt(document,"touchend touchcancel",i)},_cancel:function(){clearTimeout(this._holdTimeout),Wt(document,"touchend touchcancel contextmenu",this._cancel,this),Wt(document,"touchmove",this._onMove,this)},_onMove:function(i){var s=i.touches[0];this._newPos=new rt(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(i,s){var f=new MouseEvent(i,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});f._simulated=!0,s.target.dispatchEvent(f)}});Ut.addInitHook("addHandler","tapHold",Ro),Ut.mergeOptions({touchZoom:_t.touch,bounceAtZoomLimits:!0});var ul=Hn.extend({addHooks:function(){Et(this._map._container,"leaflet-touch-zoom"),jt(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){he(this._map._container,"leaflet-touch-zoom"),Wt(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(i){var s=this._map;if(!(!i.touches||i.touches.length!==2||s._animatingZoom||this._zooming)){var f=s.mouseEventToContainerPoint(i.touches[0]),v=s.mouseEventToContainerPoint(i.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(f.add(v)._divideBy(2))),this._startDist=f.distanceTo(v),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),jt(document,"touchmove",this._onTouchMove,this),jt(document,"touchend touchcancel",this._onTouchEnd,this),_e(i)}},_onTouchMove:function(i){if(!(!i.touches||i.touches.length!==2||!this._zooming)){var s=this._map,f=s.mouseEventToContainerPoint(i.touches[0]),v=s.mouseEventToContainerPoint(i.touches[1]),b=f.distanceTo(v)/this._startDist;if(this._zoom=s.getScaleZoom(b,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&b<1||this._zoom>s.getMaxZoom()&&b>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,b===1)return}else{var j=f._add(v)._divideBy(2)._subtract(this._centerPoint);if(b===1&&j.x===0&&j.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(j),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),at(this._animRequest);var k=g(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=Tt(k,this,!0),_e(i)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,at(this._animRequest),Wt(document,"touchmove",this._onTouchMove,this),Wt(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});Ut.addInitHook("addHandler","touchZoom",ul),Ut.BoxZoom=We,Ut.DoubleClickZoom=Do,Ut.Drag=qn,Ut.Keyboard=cl,Ut.ScrollWheelZoom=Gr,Ut.TapHold=Ro,Ut.TouchZoom=ul,o.Bounds=V,o.Browser=_t,o.CRS=Mt,o.Canvas=Oo,o.Circle=jo,o.CircleMarker=La,o.Class=Bt,o.Control=rn,o.DivIcon=yu,o.DivOverlay=Ie,o.DomEvent=bo,o.DomUtil=ja,o.Draggable=Ci,o.Evented=st,o.FeatureGroup=Un,o.GeoJSON=si,o.GridLayer=Ba,o.Handler=Hn,o.Icon=Zn,o.ImageOverlay=Ra,o.LatLng=mt,o.LatLngBounds=ct,o.Layer=zn,o.LayerGroup=za,o.LineUtil=Uf,o.Map=Ut,o.Marker=kr,o.Mixin=Pf,o.Path=In,o.Point=rt,o.PolyUtil=rl,o.Polygon=Oa,o.Polyline=oi,o.Popup=Vr,o.PosAnimation=Ea,o.Projection=cu,o.Rectangle=$i,o.Renderer=Qe,o.SVG=Pa,o.SVGOverlay=Lo,o.TileLayer=Mi,o.Tooltip=Hr,o.Transformation=dn,o.Util=zt,o.VideoOverlay=Ai,o.bind=g,o.bounds=W,o.canvas=Zr,o.circle=mu,o.circleMarker=hu,o.control=ri,o.divIcon=Yf,o.extend=u,o.featureGroup=du,o.geoJSON=zo,o.geoJson=Nr,o.gridLayer=xu,o.icon=Or,o.imageOverlay=pu,o.latLng=ht,o.latLngBounds=ut,o.layerGroup=Zf,o.map=Js,o.marker=fu,o.point=dt,o.polygon=Gf,o.polyline=If,o.popup=vu,o.rectangle=Ff,o.setOptions=P,o.stamp=y,o.svg=Ir,o.svgOverlay=gu,o.tileLayer=vn,o.tooltip=qf,o.transformation=ke,o.version=c,o.videoOverlay=ka;var dl=window.L;o.noConflict=function(){return window.L=dl,this},window.L=o}))})(fc,fc.exports)),fc.exports}var Nc=P9();const ew=Ac(Nc);function c0(n,a,o){return Object.freeze({instance:n,context:a,container:o})}function u0(n,a){return a==null?function(c,u){const m=z.useRef(void 0);return m.current||(m.current=n(c,u)),m}:function(c,u){const m=z.useRef(void 0);m.current||(m.current=n(c,u));const g=z.useRef(c),{instance:x}=m.current;return z.useEffect(function(){g.current!==c&&(a(x,c,g.current),g.current=c)},[x,c,a]),m}}function N9(n,a){z.useEffect(function(){return(a.layerContainer??a.map).addLayer(n.instance),function(){a.layerContainer?.removeLayer(n.instance),a.map.removeLayer(n.instance)}},[a,n])}function nw(n){return function(o){const c=J5(),u=n(l0(o,c),c);return W5(c.map,o.attribution),tw(u.current,o.eventHandlers),N9(u.current,c),u}}function V9(n,a){const o=u0(n,a),c=nw(o);return O9(c)}function H9(n,a){const o=u0(n),c=k9(o,a);return D9(c)}function U9(n,a){const o=u0(n,a),c=nw(o);return R9(c)}function Z9(n,a,o){const{opacity:c,zIndex:u}=a;c!=null&&c!==o.opacity&&n.setOpacity(c),u!=null&&u!==o.zIndex&&n.setZIndex(u)}function I9({bounds:n,boundsOptions:a,center:o,children:c,className:u,id:m,placeholder:g,style:x,whenReady:y,zoom:_,...T},C){const[A]=z.useState({className:u,id:m,style:x}),[O,R]=z.useState(null),P=z.useRef(void 0);z.useImperativeHandle(C,()=>O?.map??null,[O]);const I=z.useCallback(M=>{if(M!==null&&!P.current){const B=new Nc.Map(M,T);P.current=B,o!=null&&_!=null?B.setView(o,_):n!=null&&B.fitBounds(n,a),y!=null&&B.whenReady(y),R(z9(B))}},[]);z.useEffect(()=>()=>{O?.map.remove()},[O]);const D=O?oe.createElement(s0,{value:O},c):g??null;return oe.createElement("div",{...A,ref:I},D)}const G9=z.forwardRef(I9),q9=V9(function({position:a,...o},c){const u=new Nc.Marker(a,o);return c0(u,L9(c,{overlayContainer:u}))},function(a,o,c){o.position!==c.position&&a.setLatLng(o.position),o.icon!=null&&o.icon!==c.icon&&a.setIcon(o.icon),o.zIndexOffset!=null&&o.zIndexOffset!==c.zIndexOffset&&a.setZIndexOffset(o.zIndexOffset),o.opacity!=null&&o.opacity!==c.opacity&&a.setOpacity(o.opacity),a.dragging!=null&&o.draggable!==c.draggable&&(o.draggable===!0?a.dragging.enable():a.dragging.disable())}),Y9=H9(function(a,o){const c=new Nc.Popup(a,o.overlayContainer);return c0(c,o)},function(a,o,{position:c},u){z.useEffect(function(){const{instance:g}=a;function x(_){_.popup===g&&(g.update(),u(!0))}function y(_){_.popup===g&&u(!1)}return o.map.on({popupopen:x,popupclose:y}),o.overlayContainer==null?(c!=null&&g.setLatLng(c),g.openOn(o.map)):o.overlayContainer.bindPopup(g),function(){o.map.off({popupopen:x,popupclose:y}),o.overlayContainer?.unbindPopup(),o.map.removeLayer(g)}},[a,o,u,c])}),F9=U9(function({url:a,...o},c){const u=new Nc.TileLayer(a,l0(o,c));return c0(u,c)},function(a,o,c){Z9(a,o,c);const{url:u}=o;u!=null&&u!==c.url&&a.setUrl(u)});delete ew.Icon.Default.prototype._getIconUrl;ew.Icon.Default.mergeOptions({iconRetinaUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",iconUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"});const $9=({stores:n,selectedStore:a,onStoreSelect:o})=>{const c=a?[a.lat,a.lng]:[37.5665,126.978],u=a?15:11;return d.jsxs(X9,{children:[d.jsxs(G9,{center:c,zoom:u,style:{height:"100%",width:"100%"},children:[d.jsx(F9,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),n.map(m=>d.jsx(q9,{position:[m.lat,m.lng],eventHandlers:{click:()=>o(m)},children:d.jsx(Y9,{children:d.jsxs(W9,{children:[d.jsx(J9,{children:m.name}),d.jsxs(hp,{children:["📍 ",m.address]}),d.jsxs(hp,{children:["📞 ",m.phone]}),d.jsxs(hp,{children:["🕐 ",m.hours]})]})})},m.id))]},`${c[0]}-${c[1]}-${u}`),d.jsxs(K9,{children:[d.jsx(Q9,{children:"🗺️ 지도 사용법"}),d.jsx(fp,{children:"• 마커를 클릭하면 매장 정보를 볼 수 있습니다"}),d.jsx(fp,{children:"• 마우스 휠로 확대/축소"}),d.jsx(fp,{children:"• 드래그로 이동"})]})]})},X9=S.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);

  .leaflet-container {
    background: #f8f9fa;
  }
`,K9=S.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  z-index: 1000;
  max-width: 200px;

  @media (max-width: 768px) {
    display: none;
  }
`,Q9=S.div`
  font-weight: 700;
  font-size: 0.875rem;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
`,fp=S.div`
  font-size: 0.75rem;
  color: var(--color-gray);
  margin-bottom: 0.25rem;
`,W9=S.div`
  min-width: 200px;
`,J9=S.h3`
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`,hp=S.p`
  font-size: 0.875rem;
  color: var(--color-dark);
  margin-bottom: 0.25rem;
`,hc="cocoichibanya_stores";class tM{async getAllStores(){const a=localStorage.getItem(hc);return(a?JSON.parse(a):[]).sort((c,u)=>{const m=c.displayOrder??9999,g=u.displayOrder??9999;return m-g})}async createStore(a){const o=await this.getAllStores(),c={...a,id:`store-${Date.now()}`,createdAt:new Date().toISOString()};return o.push(c),localStorage.setItem(hc,JSON.stringify(o)),c}async updateStore(a,o){const c=await this.getAllStores(),u=c.findIndex(m=>m.id===a);if(u===-1)throw new Error("매장을 찾을 수 없습니다.");return c[u]={...c[u],...o,updatedAt:new Date().toISOString()},localStorage.setItem(hc,JSON.stringify(c)),c[u]}async deleteStore(a){const c=(await this.getAllStores()).filter(u=>u.id!==a);return localStorage.setItem(hc,JSON.stringify(c)),{success:!0}}async getStoreById(a){return(await this.getAllStores()).find(c=>c.id===a)}}const hs=new tM,iw=async()=>{if((await hs.getAllStores()).length>0)return;const a=[{id:"gangnam",name:"강남점",address:"서울특별시 강남구 강남대로 123",phone:"02-1234-5678",hours:"11:00 - 22:00",lat:37.4979,lng:127.0276,features:["주차가능","배달가능","포장가능","단체석"],images:["/images/stores/gangnam-1.jpg"]},{id:"hongdae",name:"홍대점",address:"서울특별시 마포구 양화로 456",phone:"02-2345-6789",hours:"11:00 - 23:00",lat:37.5563,lng:126.9245,features:["배달가능","포장가능","24시간"],images:["/images/stores/hongdae-1.jpg"]}];localStorage.setItem(hc,JSON.stringify(a))},eM=[{id:"parking",label:"주차가능",icon:"🅿️"},{id:"delivery",label:"배달가능",icon:"🚚"},{id:"takeout",label:"포장가능",icon:"🥡"},{id:"group",label:"단체석",icon:"👥"},{id:"kids",label:"키즈존",icon:"👶"},{id:"24h",label:"24시간",icon:"🕐"}],nM=()=>{const[n,a]=z.useState([]),[o,c]=z.useState(!0),[u,m]=z.useState(null),[g,x]=z.useState(""),[y,_]=z.useState([]);z.useEffect(()=>{(async()=>{try{await iw();const O=await hs.getAllStores();a(O)}catch(O){console.error("매장 데이터 로드 실패:",O)}finally{c(!1)}})()},[]);const T=A=>{y.includes(A)?_(y.filter(O=>O!==A)):_([...y,A])},C=n.filter(A=>{const O=A.name.toLowerCase().includes(g.toLowerCase())||A.address.toLowerCase().includes(g.toLowerCase()),R=y.length===0||y.every(P=>P==="parking"?A.features.includes("주차가능"):P==="delivery"?A.features.includes("배달가능"):P==="takeout"?A.features.includes("포장가능"):P==="group"?A.features.includes("단체석"):P==="kids"?A.features.includes("키즈존"):P==="24h"?A.features.includes("24시간"):!0);return O&&R});return o?d.jsx(P_,{children:d.jsx(EM,{children:"매장 정보를 불러오는 중..."})}):d.jsxs(P_,{children:[d.jsx(Bs,{title:"매장 찾기",description:"전국 코코이찌방야 매장을 찾아보세요. 서울 강남, 홍대, 잠실을 비롯한 주요 지역에 매장이 있습니다. 주차 가능, 배달 가능 매장 검색.",keywords:"코코이찌방야 매장, 가까운 매장, 지점 찾기, 영업시간, 배달 가능 매장",url:"https://cocoichibanya.co.kr/store"}),d.jsxs(iM,{children:[d.jsx(aM,{}),d.jsxs(rM,{children:[d.jsx(oM,{as:Gt.h1,initial:{opacity:0,y:30},animate:{opacity:1,y:0},children:"매장 찾기"}),d.jsx(sM,{as:Gt.p,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.1},children:"가장 가까운 코코이찌방야를 찾아보세요"})]})]}),d.jsx(lM,{children:d.jsxs(cM,{children:[d.jsxs(uM,{children:[d.jsxs(dM,{children:[d.jsx(Cs,{}),d.jsx(fM,{type:"text",placeholder:"지역, 매장명으로 검색...",value:g,onChange:A=>x(A.target.value)})]}),d.jsx(hM,{children:eM.map(A=>d.jsxs(mM,{$active:y.includes(A.id),onClick:()=>T(A.id),children:[d.jsx("span",{children:A.icon}),d.jsx("span",{children:A.label})]},A.id))})]}),d.jsxs(pM,{children:[d.jsxs(gM,{children:[d.jsxs(vM,{children:["전체 ",C.length,"개 매장"]}),d.jsxs(yM,{children:[C.map((A,O)=>d.jsxs(xM,{as:Gt.div,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:O*.05},$selected:u?.id===A.id,onClick:()=>m(A),children:[d.jsx(_M,{children:A.name}),d.jsxs(bM,{children:[d.jsxs(mp,{children:[d.jsx(jg,{}),d.jsx("span",{children:A.address})]}),d.jsxs(mp,{children:[d.jsx(bf,{}),d.jsx("span",{children:A.phone})]}),d.jsxs(mp,{children:[d.jsx(lb,{}),d.jsx("span",{children:A.hours})]})]}),d.jsx(wM,{children:A.features.map((R,P)=>d.jsxs(SM,{children:[R==="주차가능"&&d.jsx(r8,{}),R==="배달가능"&&d.jsx(u8,{}),R==="포장가능"&&d.jsx(X6,{}),R]},P))}),d.jsx(TM,{children:d.jsx(tn,{variant:"outline",size:"small",fullWidth:!0,children:"상세보기"})})]},A.id)),C.length===0&&d.jsxs(CM,{children:[d.jsx("p",{children:"검색 결과가 없습니다."}),d.jsx("p",{children:"다른 검색어나 필터를 사용해보세요."})]})]})]}),d.jsx(jM,{children:d.jsx($9,{stores:C,selectedStore:u,onStoreSelect:m})})]})]})})]})},P_=S.div`
  padding-top: 80px;
  min-height: 100vh;
`,iM=S.div`
  position: relative;
  height: 300px;
  background: url('/images/store-header.jpg') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    height: 200px;
  }
`,aM=S.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(230, 0, 18, 0.8), rgba(255, 107, 53, 0.8));
`,rM=S.div`
  position: relative;
  text-align: center;
  color: var(--color-white);
  z-index: 1;
`,oM=S.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--color-white);
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
`,sM=S.p`
  font-size: 1.25rem;
`,lM=S.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 3rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,cM=S.div``,uM=S.div`
  margin-bottom: 3rem;
`,dM=S.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  padding: 1rem 1.5rem;
  background: var(--color-white);
  border: 2px solid var(--color-light-gray);
  border-radius: 50px;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-fast);

  &:focus-within {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-md);
  }

  svg {
    color: var(--color-gray);
    font-size: 1.25rem;
  }
`,fM=S.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  font-family: var(--font-primary);
`,hM=S.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`,mM=S.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${n=>n.$active?"var(--color-primary)":"var(--color-white)"};
  color: ${n=>n.$active?"var(--color-white)":"var(--color-dark)"};
  border: 2px solid ${n=>n.$active?"var(--color-primary)":"var(--color-light-gray)"};
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
  }
`,pM=S.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,gM=S.div``,vM=S.div`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--color-dark);
`,yM=S.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-height: 800px;
  overflow-y: auto;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-gray);
    border-radius: 3px;
  }
`,xM=S.div`
  background: var(--color-white);
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid ${n=>n.$selected?"var(--color-primary)":"var(--color-light-gray)"};
  box-shadow: ${n=>n.$selected?"var(--shadow-md)":"var(--shadow-sm)"};
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
`,_M=S.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-dark);
  margin-bottom: 1rem;
`,bM=S.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
`,mp=S.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--color-gray);

  svg {
    color: var(--color-primary);
    margin-top: 0.25rem;
    flex-shrink: 0;
  }
`,wM=S.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,SM=S.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: var(--color-light-gray);
  color: var(--color-dark);
  padding: 0.4rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;

  svg {
    font-size: 0.875rem;
  }
`,TM=S.div`
  margin-top: 1rem;
`,CM=S.div`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--color-gray);

  p {
    margin-bottom: 0.5rem;
  }
`,jM=S.div`
  position: sticky;
  top: 100px;
  height: 800px;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;S.div`
  width: 100%;
  height: 100%;
  background: var(--color-light-gray);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  box-shadow: var(--shadow-md);

  svg {
    font-size: 4rem;
    color: var(--color-gray);
    opacity: 0.5;
  }
`;S.p`
  text-align: center;
  color: var(--color-gray);
  line-height: 1.6;
`;S.div`
  background: var(--color-white);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  text-align: center;
  margin-top: 2rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--color-gray);
    margin-bottom: 1rem;
  }
`;const EM=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: 1.25rem;
  color: var(--color-gray);
`,AM=()=>{const n=[{icon:d.jsx(sb,{}),title:"세계 1위",description:"전 세계 1,400개 이상의 매장을 운영하는 세계 최대 카레 전문 체인"},{icon:d.jsx(fb,{}),title:"신선한 재료",description:"매일 아침 신선한 재료를 준비하여 최상의 맛을 제공합니다"},{icon:d.jsx(ub,{}),title:"고객 맞춤",description:"밥 양, 맵기, 토핑을 자유롭게 선택하는 커스터마이징 시스템"},{icon:d.jsx(e8,{}),title:"글로벌 브랜드",description:"일본을 넘어 아시아 전역에서 사랑받는 프리미엄 카레"}],a=[{year:"1978",event:"나고야에서 코코이찌방야 1호점 오픈"},{year:"1982",event:"일본 전국 체인 확장 시작"},{year:"1997",event:"해외 진출 (대만 1호점)"},{year:"2008",event:"한국 진출 (농심과 라이센스 계약)"},{year:"2015",event:"한국 내 50호점 돌파"},{year:"2024",event:"전 세계 1,400개 매장 돌파"}],o=["40가지 이상의 다양한 카레 메뉴","0~10단계까지 선택 가능한 맵기 조절","20여 가지 토핑 자유 선택","신선한 재료와 엄선된 향신료 사용","일본 본사의 까다로운 품질 관리","한국인 입맛에 맞춘 현지화"];return d.jsxs(MM,{children:[d.jsx(Bs,{title:"브랜드 소개",description:"1978년 일본 나고야에서 시작된 세계 No.1 카레 전문점 코코이찌방야. 전 세계 1,400개 이상의 매장을 운영하는 글로벌 브랜드의 역사와 철학을 소개합니다.",keywords:"코코이찌방야 브랜드, 일본 카레, 농심, 브랜드 스토리, 회사 소개",url:"https://cocoichibanya.co.kr/brand"}),d.jsxs(zM,{children:[d.jsx(LM,{}),d.jsxs(OM,{children:[d.jsx(DM,{as:Gt.div,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},children:"CoCo ICHIBANYA"}),d.jsx(RM,{as:Gt.p,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.2},children:"세계가 인정한 카레 전문점"})]})]}),d.jsx(kM,{children:d.jsxs(ec,{children:[d.jsxs(N_,{children:[d.jsx(V_,{children:"브랜드 가치"}),d.jsx(H_,{children:"코코이찌방야가 추구하는 핵심 가치"})]}),d.jsx(BM,{children:n.map((c,u)=>d.jsxs(PM,{as:Gt.div,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:u*.1},children:[d.jsx(NM,{children:c.icon}),d.jsx(VM,{children:c.title}),d.jsx(HM,{children:c.description})]},u))})]})}),d.jsx(UM,{children:d.jsx(ec,{children:d.jsxs(ZM,{children:[d.jsx(IM,{children:d.jsx("img",{src:"/images/brand-story.jpg",alt:"코코이찌방야 스토리"})}),d.jsxs(GM,{as:Gt.div,initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!0},children:[d.jsx(qM,{children:"우리의 이야기"}),d.jsx(pp,{children:"1978년 일본 나고야에서 시작된 코코이찌방야는 '고객 한 분 한 분의 취향에 맞춘 카레'라는 철학으로 세계 최대의 카레 전문 체인으로 성장했습니다."}),d.jsx(pp,{children:"한국에는 2008년 농심과의 파트너십을 통해 진출하여, 일본의 정통 카레 맛과 한국인의 입맛을 완벽하게 조화시킨 메뉴를 선보이고 있습니다."}),d.jsx(pp,{children:"매일 아침 신선하게 준비하는 재료, 엄선된 향신료, 그리고 고객 맞춤형 서비스로 전국 수십 개 매장에서 많은 사랑을 받고 있습니다."})]})]})})}),d.jsx(YM,{children:d.jsxs(ec,{children:[d.jsxs(N_,{children:[d.jsx(V_,{children:"연혁"}),d.jsx(H_,{children:"코코이찌방야의 역사"})]}),d.jsx(FM,{children:a.map((c,u)=>d.jsxs($M,{as:Gt.div,initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:u*.1},children:[d.jsx(XM,{children:c.year}),d.jsx(KM,{children:c.event})]},u))})]})}),d.jsx(QM,{children:d.jsx(ec,{children:d.jsxs(WM,{children:[d.jsx(JM,{children:d.jsx("img",{src:"/images/curry-making.jpg",alt:"카레 제조"})}),d.jsxs(tz,{children:[d.jsx(ez,{children:"코코이찌방야만의 특별함"}),d.jsx(nz,{children:o.map((c,u)=>d.jsxs(iz,{as:Gt.div,initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:u*.05},children:[d.jsx(ls,{}),d.jsx("span",{children:c})]},u))})]})]})})}),d.jsxs(az,{children:[d.jsx(rz,{}),d.jsx(ec,{children:d.jsxs(oz,{children:[d.jsx(sz,{children:"코코이찌방야와 함께하세요"}),d.jsx(lz,{children:"창업 문의부터 메뉴 개발까지, 함께 성장할 파트너를 찾습니다"}),d.jsx(cz,{href:"/franchise",children:"창업 안내 보기"})]})})]})]})},MM=S.div`
  padding-top: 80px;
`,zM=S.section`
  position: relative;
  height: 500px;
  background: url('/images/brand-hero.jpg') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
`,LM=S.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(230, 0, 18, 0.85), rgba(255, 107, 53, 0.85));
`,OM=S.div`
  position: relative;
  text-align: center;
  color: var(--color-white);
  z-index: 1;
`,DM=S.div`
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 900;
  letter-spacing: 2px;
  margin-bottom: 1rem;
`,RM=S.p`
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 1px;
  color: var(--color-white);
  text-shadow: 0 2px 5px rgba(0,0,0,0.3);
`,kM=S.section`
  padding: 6rem 0;
  background: var(--color-white);
`,ec=S.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,N_=S.div`
  text-align: center;
  margin-bottom: 4rem;
`,V_=S.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 1rem;
`,H_=S.p`
  font-size: 1.125rem;
  color: var(--color-gray);
`,BM=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`,PM=S.div`
  text-align: center;
  padding: 2rem;
`,NM=S.div`
  font-size: 4rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`,VM=S.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,HM=S.p`
  color: var(--color-gray);
  line-height: 1.6;
`,UM=S.section`
  padding: 6rem 0;
  background: var(--color-light-gray);
`,ZM=S.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,IM=S.div`
  img {
    width: 100%;
    border-radius: 16px;
    box-shadow: var(--shadow-lg);
  }
`,GM=S.div``,qM=S.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 2rem;
`,pp=S.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--color-gray);
  margin-bottom: 1.5rem;
`,YM=S.section`
  padding: 6rem 0;
  background: var(--color-white);
`,FM=S.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 80px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--color-primary);

    @media (max-width: 768px) {
      left: 60px;
    }
  }
`,$M=S.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 100px 1fr;
    gap: 1rem;
  }
`,XM=S.div`
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-primary);
  text-align: right;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,KM=S.div`
  background: var(--color-light-gray);
  padding: 1.5rem;
  border-radius: 12px;
  font-size: 1.125rem;
  line-height: 1.6;
  box-shadow: var(--shadow-sm);
`,QM=S.section`
  padding: 6rem 0;
  background: var(--color-light-gray);
`,WM=S.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,JM=S.div`
  order: 2;

  img {
    width: 100%;
    border-radius: 16px;
    box-shadow: var(--shadow-lg);
  }

  @media (max-width: 1024px) {
    order: 1;
  }
`,tz=S.div`
  order: 1;

  @media (max-width: 1024px) {
    order: 2;
  }
`,ez=S.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 2rem;
`,nz=S.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,iz=S.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.125rem;

  svg {
    color: var(--color-primary);
    font-size: 1.5rem;
    flex-shrink: 0;
  }
`,az=S.section`
  position: relative;
  padding: 6rem 0;
  background: url('/images/cta-bg.jpg') center/cover;
  text-align: center;
  color: var(--color-white);
`,rz=S.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gradient-overlay);
`,oz=S.div`
  position: relative;
  z-index: 1;
`,sz=S.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--color-white);
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
`,lz=S.p`
  font-size: 1.25rem;
  margin-bottom: 3rem;
`,cz=S.a`
  display: inline-block;
  padding: 1rem 3rem;
  background: var(--color-white);
  color: var(--color-primary);
  font-size: 1.125rem;
  font-weight: 700;
  border-radius: 50px;
  text-decoration: none;
  transition: var(--transition-normal);
  box-shadow: var(--shadow-lg);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }
`,uz=()=>{const[n,a]=z.useState("process"),[o,c]=z.useState({name:"",phone:"",email:"",location:"",message:""}),u=[{icon:d.jsx(nf,{}),title:"검증된 브랜드",description:"40년 이상의 노하우와 글로벌 1위 브랜드 파워"},{icon:d.jsx(n8,{}),title:"체계적 교육",description:"본사의 전문 교육 프로그램과 매장 운영 컨설팅"},{icon:d.jsx(Q6,{}),title:"안정적 수익",description:"높은 재방문율과 검증된 수익 모델"},{icon:d.jsx(i8,{}),title:"지속 지원",description:"마케팅부터 운영까지 본사의 지속적인 지원"}],m=[{step:1,title:"상담 신청",description:"온라인 또는 전화로 창업 상담 신청"},{step:2,title:"개설 상담",description:"희망 지역 및 매장 조건 확인"},{step:3,title:"입지 조사",description:"전문가의 상권 분석 및 입지 평가"},{step:4,title:"계약 체결",description:"가맹 계약 및 비용 정산"},{step:5,title:"인테리어",description:"매장 설계 및 시공 진행"},{step:6,title:"교육 훈련",description:"본사 교육센터에서 운영 교육"},{step:7,title:"오픈 준비",description:"직원 채용 및 오픈 준비"},{step:8,title:"매장 오픈",description:"그랜드 오픈 및 마케팅 지원"}],g=[{item:"가맹비",amount:"1,000만원",note:"최초 1회"},{item:"교육비",amount:"200만원",note:"2주 교육 프로그램"},{item:"보증금",amount:"1,000만원",note:"계약 종료 시 반환"},{item:"인테리어",amount:"8,000~1억",note:"평수 및 입지에 따라 상이"},{item:"기자재",amount:"3,000만원",note:"주방 기자재 일체"}],x=["브랜드 사용권","운영 매뉴얼 제공","전문 교육 프로그램","식자재 공급 시스템","마케팅 자료 제공","정기 점검 및 컨설팅","신메뉴 개발 지원","본사 통합 마케팅"],y=T=>{c({...o,[T.target.name]:T.target.value})},_=T=>{T.preventDefault(),alert("상담 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다."),c({name:"",phone:"",email:"",location:"",message:""})};return d.jsxs(dz,{children:[d.jsx(Bs,{title:"창업 안내",description:"코코이찌방야 가맹점 창업 안내. 검증된 브랜드로 안정적인 창업을 시작하세요. 창업 절차, 비용, 본사 지원 사항을 자세히 안내합니다.",keywords:"코코이찌방야 창업, 가맹점, 프랜차이즈, 창업 비용, 가맹 문의",url:"https://cocoichibanya.co.kr/franchise"}),d.jsxs(fz,{children:[d.jsx(hz,{}),d.jsxs(mz,{children:[d.jsx(pz,{as:Gt.h1,initial:{opacity:0,y:30},animate:{opacity:1,y:0},children:"코코이찌방야와 함께하세요"}),d.jsx(gz,{as:Gt.p,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.1},children:"검증된 브랜드로 성공 창업의 꿈을 실현하세요"})]})]}),d.jsx(vz,{children:d.jsxs(gp,{children:[d.jsxs(yz,{children:[d.jsx(xz,{children:"창업 혜택"}),d.jsx(_z,{children:"코코이찌방야 가맹점만의 특별한 혜택"})]}),d.jsx(bz,{children:u.map((T,C)=>d.jsxs(wz,{as:Gt.div,initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:C*.1},children:[d.jsx(Sz,{children:T.icon}),d.jsx(Tz,{children:T.title}),d.jsx(Cz,{children:T.description})]},C))})]})}),d.jsx(jz,{children:d.jsxs(gp,{children:[d.jsxs(Ez,{children:[d.jsx(vp,{$active:n==="process",onClick:()=>a("process"),children:"창업 절차"}),d.jsx(vp,{$active:n==="cost",onClick:()=>a("cost"),children:"창업 비용"}),d.jsx(vp,{$active:n==="support",onClick:()=>a("support"),children:"본사 지원"})]}),d.jsxs(Az,{children:[n==="process"&&d.jsx(Mz,{as:Gt.div,initial:{opacity:0},animate:{opacity:1},children:m.map((T,C)=>d.jsxs(zz,{as:Gt.div,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:C*.05},children:[d.jsxs(Lz,{children:["STEP ",T.step]}),d.jsx(Oz,{children:T.title}),d.jsx(Dz,{children:T.description})]},T.step))}),n==="cost"&&d.jsxs(Rz,{as:Gt.div,initial:{opacity:0},animate:{opacity:1},children:[d.jsxs(kz,{children:[d.jsx("div",{children:"항목"}),d.jsx("div",{children:"금액"}),d.jsx("div",{children:"비고"})]}),g.map((T,C)=>d.jsxs(Bz,{as:Gt.div,initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{delay:C*.1},children:[d.jsx(Pz,{children:T.item}),d.jsx(Nz,{children:T.amount}),d.jsx(Vz,{children:T.note})]},C)),d.jsx(Hz,{children:"* 총 창업 비용은 입지 및 평수에 따라 1.5억 ~ 2.5억 원 예상"})]}),n==="support"&&d.jsx(Uz,{as:Gt.div,initial:{opacity:0},animate:{opacity:1},children:x.map((T,C)=>d.jsxs(Zz,{as:Gt.div,initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{delay:C*.05},children:[d.jsx(ls,{}),d.jsx("span",{children:T})]},C))})]})]})}),d.jsx(Iz,{children:d.jsx(gp,{children:d.jsxs(Gz,{children:[d.jsxs(qz,{children:[d.jsx(Yz,{children:"창업 상담 문의"}),d.jsxs(Fz,{children:["코코이찌방야 창업에 관심이 있으시다면",d.jsx("br",{}),"아래 연락처로 문의주시거나",d.jsx("br",{}),"상담 신청서를 작성해 주세요."]}),d.jsxs($z,{children:[d.jsxs(U_,{children:[d.jsx(bf,{}),d.jsxs("div",{children:[d.jsx(Z_,{children:"전화 문의"}),d.jsx(I_,{children:"1588-0000"}),d.jsx(G_,{children:"평일 09:00 - 18:00"})]})]}),d.jsxs(U_,{children:[d.jsx(cb,{}),d.jsxs("div",{children:[d.jsx(Z_,{children:"이메일 문의"}),d.jsx(I_,{children:"franchise@cocoichibanya.co.kr"}),d.jsx(G_,{children:"24시간 접수 가능"})]})]})]})]}),d.jsxs(Xz,{onSubmit:_,children:[d.jsx(Kz,{children:"온라인 상담 신청"}),d.jsxs(nc,{children:[d.jsx(ic,{children:"이름 *"}),d.jsx(Md,{type:"text",name:"name",value:o.name,onChange:y,required:!0,placeholder:"이름을 입력하세요"})]}),d.jsxs(nc,{children:[d.jsx(ic,{children:"연락처 *"}),d.jsx(Md,{type:"tel",name:"phone",value:o.phone,onChange:y,required:!0,placeholder:"010-0000-0000"})]}),d.jsxs(nc,{children:[d.jsx(ic,{children:"이메일 *"}),d.jsx(Md,{type:"email",name:"email",value:o.email,onChange:y,required:!0,placeholder:"email@example.com"})]}),d.jsxs(nc,{children:[d.jsx(ic,{children:"희망 지역"}),d.jsx(Md,{type:"text",name:"location",value:o.location,onChange:y,placeholder:"예) 서울 강남구"})]}),d.jsxs(nc,{children:[d.jsx(ic,{children:"문의 내용"}),d.jsx(Qz,{name:"message",value:o.message,onChange:y,rows:"5",placeholder:"궁금하신 내용을 자유롭게 작성해주세요"})]}),d.jsx(Wz,{type:"submit",children:d.jsx(tn,{size:"large",fullWidth:!0,children:"상담 신청하기"})})]})]})})})]})},dz=S.div`
  padding-top: 80px;
`,fz=S.section`
  position: relative;
  height: 400px;
  background: url('/images/franchise-hero.jpg') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
`,hz=S.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(230, 0, 18, 0.85), rgba(255, 107, 53, 0.85));
`,mz=S.div`
  position: relative;
  text-align: center;
  color: var(--color-white);
  z-index: 1;
`,pz=S.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--color-white);
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
`,gz=S.p`
  font-size: 1.5rem;
  font-weight: 300;
`,vz=S.section`
  padding: 6rem 0;
  background: var(--color-white);
`,gp=S.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,yz=S.div`
  text-align: center;
  margin-bottom: 4rem;
`,xz=S.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 1rem;
`,_z=S.p`
  font-size: 1.125rem;
  color: var(--color-gray);
`,bz=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`,wz=S.div`
  text-align: center;
  padding: 2rem;
  background: var(--color-light-gray);
  border-radius: 16px;
  transition: var(--transition-normal);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`,Sz=S.div`
  font-size: 4rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`,Tz=S.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`,Cz=S.p`
  color: var(--color-gray);
  line-height: 1.6;
`,jz=S.section`
  padding: 6rem 0;
  background: var(--color-light-gray);
`,Ez=S.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
`,vp=S.button`
  padding: 1rem 3rem;
  font-size: 1.125rem;
  font-weight: 600;
  background: ${n=>n.$active?"var(--gradient-primary)":"var(--color-white)"};
  color: ${n=>n.$active?"var(--color-white)":"var(--color-dark)"};
  border: 2px solid ${n=>n.$active?"transparent":"var(--color-light-gray)"};
  border-radius: 50px;
  cursor: pointer;
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    width: 100%;
  }
`,Az=S.div`
  background: var(--color-white);
  padding: 4rem;
  border-radius: 16px;
  box-shadow: var(--shadow-md);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,Mz=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`,zz=S.div`
  text-align: center;
  padding: 2rem;
  background: var(--color-light-gray);
  border-radius: 12px;
  transition: var(--transition-normal);

  &:hover {
    transform: translateY(-5px);
    background: var(--gradient-primary);
    color: var(--color-white);
  }
`,Lz=S.div`
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  opacity: 0.8;
`,Oz=S.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`,Dz=S.p`
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.9;
`,Rz=S.div`
  max-width: 900px;
  margin: 0 auto;
`,kz=S.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr 2fr;
  padding: 1.5rem;
  background: var(--gradient-primary);
  color: var(--color-white);
  font-weight: 700;
  border-radius: 12px 12px 0 0;

  @media (max-width: 768px) {
    display: none;
  }
`,Bz=S.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr 2fr;
  padding: 1.5rem;
  border-bottom: 1px solid var(--color-light-gray);
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    padding: 1.5rem;
    background: var(--color-white);
    border-radius: 8px;
    margin-bottom: 1rem;
    box-shadow: var(--shadow-sm);
  }
`,Pz=S.div`
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`,Nz=S.div`
  font-weight: 700;
  color: var(--color-primary);
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`,Vz=S.div`
  font-size: 0.875rem;
  color: var(--color-gray);
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`,Hz=S.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: var(--color-light-gray);
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  color: var(--color-gray);
`,Uz=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
`,Zz=S.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--color-light-gray);
  border-radius: 12px;
  font-size: 1.125rem;
  transition: var(--transition-normal);

  svg {
    color: var(--color-primary);
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  &:hover {
    transform: translateX(10px);
    background: var(--color-primary);
    color: var(--color-white);

    svg {
      color: var(--color-white);
    }
  }
`,Iz=S.section`
  padding: 6rem 0;
  background: var(--color-white);
`,Gz=S.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,qz=S.div``,Yz=S.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
`,Fz=S.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--color-gray);
  margin-bottom: 3rem;
`,$z=S.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,U_=S.div`
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--color-light-gray);
  border-radius: 12px;

  svg {
    font-size: 2rem;
    color: var(--color-primary);
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1rem;
    
    svg {
      font-size: 1.5rem;
    }
  }
`,Z_=S.div`
  font-size: 0.875rem;
  color: var(--color-gray);
  margin-bottom: 0.5rem;
`,I_=S.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
  word-break: break-all;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,G_=S.div`
  font-size: 0.875rem;
  color: var(--color-gray);
`,Xz=S.form`
  background: var(--color-light-gray);
  padding: 3rem;
  border-radius: 16px;
  box-shadow: var(--shadow-sm);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,Kz=S.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`,nc=S.div`
  margin-bottom: 1.5rem;
`,ic=S.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-dark);
`,Md=S.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--color-light-gray);
  border-radius: 8px;
  font-size: 1rem;
  font-family: var(--font-primary);
  background: var(--color-white);
  transition: var(--transition-fast);

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`,Qz=S.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--color-light-gray);
  border-radius: 8px;
  font-size: 1rem;
  font-family: var(--font-primary);
  background: var(--color-white);
  resize: vertical;
  transition: var(--transition-fast);

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`,Wz=S.div`
  margin-top: 2rem;
`,mc="cocoichibanya_notices";class Jz{async getAllNotices(){const a=localStorage.getItem(mc);return a?JSON.parse(a):[]}async createNotice(a){const o=await this.getAllNotices(),c={...a,id:Date.now(),date:new Date().toISOString().split("T")[0],createdAt:new Date().toISOString()};return o.unshift(c),localStorage.setItem(mc,JSON.stringify(o)),c}async updateNotice(a,o){const c=await this.getAllNotices(),u=c.findIndex(m=>m.id===a);if(u===-1)throw new Error("공지사항을 찾을 수 없습니다.");return c[u]={...c[u],...o,updatedAt:new Date().toISOString()},localStorage.setItem(mc,JSON.stringify(c)),c[u]}async deleteNotice(a){const c=(await this.getAllNotices()).filter(u=>u.id!==a);return localStorage.setItem(mc,JSON.stringify(c)),{success:!0}}async getNoticeById(a){return(await this.getAllNotices()).find(c=>c.id===a)}}const ms=new Jz,aw=async()=>{if((await ms.getAllNotices()).length>0)return;const a=[{id:1,category:"이벤트",title:"신메뉴 출시 기념 특별 할인 이벤트",content:`신메뉴 '그랑마더 커리' 출시를 기념하여 특별 할인 이벤트를 진행합니다!

기간: 2026년 2월 1일 ~ 2월 28일
혜택: 그랑마더 커리 20% 할인
대상: 전국 모든 매장

이 기회를 놓치지 마세요!`,date:"2026-01-20",isImportant:!0,author:"코코이찌방야"},{id:2,category:"공지",title:"설 연휴 매장 운영 안내",content:`설 연휴 기간 동안 매장별 운영 시간이 다를 수 있습니다.

연휴 기간: 2026년 1월 28일 ~ 1월 31일

매장별 운영 시간은 '매장 찾기' 페이지에서 확인하실 수 있습니다.
방문 전 해당 매장에 문의하시기 바랍니다.

즐거운 명절 되세요!`,date:"2026-01-18",isImportant:!0,author:"코코이찌방야"}];localStorage.setItem(mc,JSON.stringify(a))},yp={공지:"#3b82f6",이벤트:"#ef4444",시스템:"#10b981"},tL=()=>{const[n,a]=z.useState([]),[o,c]=z.useState(null),[u,m]=z.useState(""),[g,x]=z.useState("all"),[y,_]=z.useState(!0);z.useEffect(()=>{T(),aw()},[]);const T=async()=>{try{const D=await ms.getAllNotices();a(D)}catch(D){console.error("공지사항을 불러오는데 실패했습니다:",D)}finally{_(!1)}},C=["all",...new Set(n.map(D=>D.category))],A=n.filter(D=>{const M=D.title.toLowerCase().includes(u.toLowerCase())||D.content.toLowerCase().includes(u.toLowerCase()),B=g==="all"||D.category===g;return M&&B}),O=A.filter(D=>D.isImportant),R=A.filter(D=>!D.isImportant),P=D=>new Date(D).toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),I=D=>{const M=new Date(D),Q=Math.abs(new Date-M);return Math.ceil(Q/(1e3*60*60*24))<=7};return d.jsxs(d.Fragment,{children:[d.jsxs(cr,{children:[d.jsx("title",{children:"공지사항 - 코코이찌방야"}),d.jsx("meta",{name:"description",content:"코코이찌방야의 최신 소식과 공지사항을 확인하세요."})]}),d.jsxs(eL,{children:[d.jsx(nL,{children:d.jsx(q_,{children:d.jsxs(iL,{children:[d.jsx(aL,{children:d.jsx(ef,{})}),d.jsx(rL,{children:"공지사항"}),d.jsx(oL,{children:"코코이찌방야의 최신 소식을 전해드립니다"})]})})}),d.jsx(q_,{children:d.jsxs(sL,{children:[d.jsxs(lL,{children:[d.jsxs(cL,{children:[d.jsx(Cs,{}),d.jsx(uL,{type:"text",placeholder:"공지사항 검색...",value:u,onChange:D=>m(D.target.value)}),u&&d.jsx(dL,{onClick:()=>m(""),children:d.jsx(fo,{})})]}),d.jsx(fL,{children:C.map(D=>d.jsx(hL,{$active:g===D,onClick:()=>x(D),children:D==="all"?"전체":D},D))})]}),y?d.jsx(gL,{children:"공지사항을 불러오는 중..."}):d.jsxs(mL,{children:[O.length>0&&d.jsx(d.Fragment,{children:O.map(D=>d.jsxs(Y_,{$important:!0,onClick:()=>c(D),children:[d.jsxs(F_,{children:[d.jsxs(xp,{children:[d.jsx($_,{children:"중요"}),d.jsx(_p,{$color:yp[D.category],children:D.category}),I(D.date)&&d.jsx(X_,{children:"NEW"})]}),d.jsx(K_,{children:P(D.date)})]}),d.jsx(Q_,{children:D.title}),d.jsxs(W_,{children:[D.content.split(`
`)[0].substring(0,100),"..."]})]},D.id))}),R.map(D=>d.jsxs(Y_,{onClick:()=>c(D),children:[d.jsxs(F_,{children:[d.jsxs(xp,{children:[d.jsx(_p,{$color:yp[D.category],children:D.category}),I(D.date)&&d.jsx(X_,{children:"NEW"})]}),d.jsx(K_,{children:P(D.date)})]}),d.jsx(Q_,{children:D.title}),d.jsxs(W_,{children:[D.content.split(`
`)[0].substring(0,100),"..."]})]},D.id)),A.length===0&&d.jsxs(pL,{children:[d.jsx(Cs,{size:48}),d.jsx("p",{children:"검색 결과가 없습니다"})]})]})]})}),o&&d.jsx(vL,{onClick:()=>c(null),children:d.jsxs(yL,{onClick:D=>D.stopPropagation(),children:[d.jsxs(xL,{children:[d.jsxs("div",{children:[d.jsxs(xp,{children:[o.isImportant&&d.jsx($_,{children:"중요"}),d.jsx(_p,{$color:yp[o.category],children:o.category})]}),d.jsx(_L,{children:o.title}),d.jsxs(bL,{children:[d.jsx("span",{children:P(o.date)}),d.jsxs("span",{children:["작성자: ",o.author]})]})]}),d.jsx(wL,{onClick:()=>c(null),children:d.jsx(fo,{})})]}),d.jsx(SL,{children:o.content.split(`
`).map((D,M)=>d.jsx("p",{children:D||d.jsx("br",{})},M))})]})})]})]})},eL=S.div`
  min-height: 100vh;
  padding-top: 80px;
  background: var(--color-background);
`,nL=S.section`
  background: linear-gradient(135deg, var(--color-primary) 0%, #d97706 100%);
  padding: 4rem 0;
  color: white;
  margin-bottom: 3rem;
`,q_=S.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,iL=S.div`
  text-align: center;
`,aL=S.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: bell 2s ease-in-out infinite;

  @keyframes bell {
    0%, 100% { transform: rotate(0deg); }
    10%, 30% { transform: rotate(-10deg); }
    20%, 40% { transform: rotate(10deg); }
  }
`,rL=S.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,oL=S.p`
  font-size: 1.25rem;
  opacity: 0.95;
`,sL=S.div`
  padding-bottom: 5rem;
`,lL=S.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,cL=S.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: white;
  border-radius: 50px;
  box-shadow: var(--shadow-sm);
  color: var(--color-gray);
`,uL=S.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  color: var(--color-dark);

  &::placeholder {
    color: var(--color-gray);
  }
`,dL=S.button`
  color: var(--color-gray);
  transition: var(--transition-fast);

  &:hover {
    color: var(--color-dark);
  }
`,fL=S.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`,hL=S.button`
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  background: ${n=>n.$active?"var(--color-primary)":"white"};
  color: ${n=>n.$active?"white":"var(--color-dark)"};
  box-shadow: var(--shadow-sm);
  transition: var(--transition-fast);

  &:hover {
    background: ${n=>n.$active?"var(--color-primary)":"var(--color-light-gray)"};
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
`,mL=S.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Y_=S.div`
  background: white;
  padding: 2rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: var(--transition-fast);
  border-left: ${n=>n.$important?"4px solid var(--color-primary)":"none"};

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`,F_=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`,xp=S.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`,d0=S.span`
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 600;
`,$_=S(d0)`
  background: var(--color-primary);
  color: white;
`,_p=S(d0)`
  background: ${n=>n.$color||"var(--color-gray)"};
  color: white;
`,X_=S(d0)`
  background: #ef4444;
  color: white;
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`,K_=S.span`
  color: var(--color-gray);
  font-size: 0.875rem;
`,Q_=S.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
`,W_=S.p`
  color: var(--color-gray);
  line-height: 1.6;
`,pL=S.div`
  text-align: center;
  padding: 5rem 2rem;
  color: var(--color-gray);

  svg {
    margin-bottom: 1rem;
    opacity: 0.3;
  }

  p {
    font-size: 1.125rem;
  }
`,gL=S.div`
  text-align: center;
  padding: 5rem 2rem;
  color: var(--color-gray);
  font-size: 1.125rem;
`,vL=S.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`,yL=S.div`
  background: white;
  border-radius: var(--radius-lg);
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`,xL=S.div`
  padding: 2rem;
  border-bottom: 1px solid var(--color-light-gray);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
`,_L=S.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-dark);
  margin: 1rem 0;
`,bL=S.div`
  display: flex;
  gap: 1rem;
  color: var(--color-gray);
  font-size: 0.875rem;
`,wL=S.button`
  font-size: 1.5rem;
  color: var(--color-gray);
  transition: var(--transition-fast);
  flex-shrink: 0;

  &:hover {
    color: var(--color-dark);
    transform: rotate(90deg);
  }
`,SL=S.div`
  padding: 2rem;
  overflow-y: auto;
  line-height: 1.8;
  color: var(--color-dark);

  p {
    margin-bottom: 1rem;
  }
`,TL=[{id:"menu",name:"메뉴",icon:"🍛"},{id:"order",name:"주문/결제",icon:"💳"},{id:"store",name:"매장",icon:"🏪"},{id:"franchise",name:"창업",icon:"💼"},{id:"etc",name:"기타",icon:"❓"}],ff=[{id:1,category:"menu",question:"맵기 단계는 어떻게 선택하나요?",answer:`코코이찌방야의 카레는 0단계부터 10단계까지 맵기를 선택하실 수 있습니다.

- 0단계: 전혀 맵지 않음 (어린이 추천)
- 1-2단계: 약간 매운맛
- 3-4단계: 보통 매운맛 (가장 인기)
- 5-6단계: 상당히 매운맛
- 7-8단계: 매우 매운맛
- 9-10단계: 극한의 매운맛

처음 방문하시는 경우 3단계를 추천드립니다. 주문 시 직원에게 말씀해주시면 됩니다.`},{id:2,category:"menu",question:"토핑은 몇 개까지 추가할 수 있나요?",answer:`토핑은 제한 없이 원하는 만큼 추가하실 수 있습니다.

인기 토핑:
- 치즈 (+1,500원)
- 로스 커틀렛 (+2,500원)
- 소시지 (+1,000원)
- 마늘 (+500원)

'나만의 카레' 시뮬레이터에서 미리 조합을 만들어보실 수 있습니다!`},{id:3,category:"menu",question:"베지테리안 메뉴가 있나요?",answer:`네, 베지테리안 고객을 위한 메뉴가 있습니다.

베지테리안 커리: 고기를 사용하지 않고 채소만으로 만든 카레
추천 토핑: 야채, 버섯, 치즈, 두부

주문 시 베지테리안 메뉴를 원하신다고 말씀해주시면 됩니다.
완전 채식(비건)을 원하시는 경우, 치즈 등 유제품 토핑을 제외해주세요.`},{id:4,category:"menu",question:"라이스 양 조절이 가능한가요?",answer:`네, 라이스 양은 무료로 조절 가능합니다.

선택 가능한 옵션:
- 소(Small): 150g
- 보통(Regular): 300g - 기본
- 대(Large): 400g
- 특대(Extra): 500g

라이스 양 변경은 추가 요금이 없으니 부담 없이 요청하세요!`},{id:5,category:"order",question:"배달 주문이 가능한가요?",answer:`네, 배달 주문이 가능합니다.

이용 가능한 배달 앱:
- 배달의민족
- 쿠팡이츠
- 요기요

또는 매장에 직접 전화주문도 가능합니다.
매장별 배달 가능 여부와 최소 주문 금액은 다를 수 있으니 확인 후 주문해주세요.`},{id:6,category:"order",question:"어떤 결제 수단을 사용할 수 있나요?",answer:`다양한 결제 수단을 지원합니다.

- 현금
- 신용카드/체크카드 (모든 카드사)
- 간편결제 (카카오페이, 네이버페이, 토스)
- 상품권 (백화점 상품권 등)
- 제로페이

일부 매장에서는 특정 결제 수단이 제한될 수 있으니 방문 전 확인해주세요.`},{id:7,category:"order",question:"포장 주문도 가능한가요?",answer:`네, 모든 메뉴 포장 가능합니다.

포장 주문 방법:
1. 매장 방문 후 직접 주문
2. 전화 주문 후 픽업
3. 배달앱을 통한 포장 주문

포장 용기 비용은 별도로 부과되지 않습니다.
주문하신 음식은 가능한 빨리 드시는 것을 권장드립니다.`},{id:8,category:"store",question:"영업 시간이 어떻게 되나요?",answer:`매장마다 영업 시간이 다릅니다.

일반적인 영업 시간:
- 평일: 11:00 - 22:00
- 주말: 11:00 - 22:00
- 공휴일: 매장별 상이

정확한 영업 시간은 '매장 찾기' 페이지에서 확인하실 수 있습니다.
일부 매장은 브레이크 타임이 있을 수 있으니 방문 전 확인을 권장드립니다.`},{id:9,category:"store",question:"주차가 가능한가요?",answer:`매장별로 주차 시설이 다릅니다.

- 백화점/쇼핑몰 입점 매장: 해당 건물 주차장 이용
- 단독 매장: 매장별 주차 공간 상이

'매장 찾기'에서 각 매장의 주차 가능 여부를 확인하실 수 있습니다.
주차 지원 여부 및 시간은 매장에 문의해주세요.`},{id:10,category:"store",question:"단체 예약이 가능한가요?",answer:`네, 대부분의 매장에서 단체 예약을 받고 있습니다.

단체 예약 안내:
- 10명 이상부터 예약 가능
- 최소 3일 전 예약 필요
- 매장 규모에 따라 수용 인원 상이

단체 예약을 원하시는 경우 방문 예정 매장으로 직접 연락주시기 바랍니다.
일부 매장은 단체 예약이 어려울 수 있습니다.`},{id:11,category:"franchise",question:"가맹 비용은 얼마인가요?",answer:`가맹 비용은 매장 유형과 규모에 따라 다릅니다.

기본 비용 (예상):
- 가맹비: 별도 문의
- 인테리어 비용: 5,000만원 ~ 1억원
- 설비 및 집기: 3,000만원 ~ 5,000만원

정확한 비용은 '창업 안내' 페이지에서 상담 신청 후 확인하실 수 있습니다.
상담은 무료이니 부담 없이 문의해주세요.`},{id:12,category:"franchise",question:"창업 절차는 어떻게 되나요?",answer:`체계적인 창업 프로세스로 진행됩니다.

1. 상담 신청 및 브리핑
2. 사업성 검토 및 입지 분석
3. 계약 체결
4. 매장 설계 및 인테리어
5. 교육 프로그램 이수
6. 매장 오픈 준비
7. 그랜드 오픈

전 과정에 본사의 전문적인 지원이 제공됩니다.
평균 소요 기간: 3~6개월`},{id:13,category:"franchise",question:"교육 프로그램이 있나요?",answer:`네, 체계적인 교육 프로그램을 제공합니다.

교육 내용:
- 조리 교육 (2주)
- 매장 운영 교육 (1주)
- 서비스 교육 (1주)
- 위생 관리 교육
- POS 시스템 교육

교육 기간: 총 4주
교육 장소: 본사 교육센터 및 모델 매장

가맹점 운영에 필요한 모든 내용을 실무 위주로 교육합니다.`},{id:14,category:"etc",question:"멤버십 제도가 있나요?",answer:`네, 코코이찌방야 멤버십을 운영하고 있습니다.

멤버십 혜택:
- 구매 금액의 5% 적립
- 생일 쿠폰 제공
- 신메뉴 우선 체험 기회
- 시즌별 특별 할인

가입 방법:
- 매장에서 직접 가입
- 모바일 앱을 통한 가입

가입비 및 연회비 무료입니다!`},{id:15,category:"etc",question:"알레르기 정보를 알 수 있나요?",answer:`네, 알레르기 정보를 제공하고 있습니다.

주요 알레르기 유발 성분:
- 밀 (카레 루)
- 우유 (카레 루, 일부 토핑)
- 대두
- 돼지고기, 쇠고기, 닭고기 등

알레르기가 있으신 경우 주문 시 반드시 직원에게 말씀해주세요.
메뉴판에도 알레르기 성분 표시가 되어 있습니다.`},{id:16,category:"etc",question:"기프티콘 사용이 가능한가요?",answer:`네, 제휴된 플랫폼의 기프티콘을 사용하실 수 있습니다.

사용 가능한 기프티콘:
- 카카오톡 선물하기
- 네이버 선물하기

사용 방법:
1. 기프티콘 화면을 직원에게 제시
2. 바코드 스캔 또는 번호 입력
3. 결제 완료

유효기간이 지난 기프티콘은 사용이 불가능하니 확인 후 방문해주세요.`}],CL=n=>n==="all"?ff:ff.filter(a=>a.category===n),jL=n=>{const a=n.toLowerCase();return ff.filter(o=>o.question.toLowerCase().includes(a)||o.answer.toLowerCase().includes(a))},EL=()=>{const[n,a]=z.useState("all"),[o,c]=z.useState(""),[u,m]=z.useState(null),x=o?jL(o):n==="all"?ff:CL(n),y=_=>{m(u===_?null:_)};return d.jsxs(d.Fragment,{children:[d.jsxs(cr,{children:[d.jsx("title",{children:"자주 묻는 질문 (FAQ) - 코코이찌방야"}),d.jsx("meta",{name:"description",content:"코코이찌방야에 대해 자주 묻는 질문과 답변을 확인하세요."})]}),d.jsxs(AL,{children:[d.jsx(ML,{children:d.jsx(J_,{children:d.jsxs(zL,{children:[d.jsx(LL,{children:d.jsx(o8,{})}),d.jsx(OL,{children:"자주 묻는 질문"}),d.jsx(DL,{children:"궁금하신 내용을 빠르게 찾아보세요"})]})})}),d.jsx(J_,{children:d.jsxs(RL,{children:[d.jsxs(kL,{children:[d.jsxs(BL,{children:[d.jsx(Cs,{}),d.jsx(PL,{type:"text",placeholder:"궁금한 내용을 검색하세요...",value:o,onChange:_=>c(_.target.value)}),o&&d.jsx(NL,{onClick:()=>c(""),children:d.jsx(fo,{})})]}),o&&d.jsxs(VL,{children:[x.length,"개의 검색 결과"]})]}),!o&&d.jsxs(HL,{children:[d.jsxs(t2,{$active:n==="all",onClick:()=>a("all"),children:[d.jsx(e2,{children:"🌟"}),d.jsx(n2,{children:"전체"})]}),TL.map(_=>d.jsxs(t2,{$active:n===_.id,onClick:()=>a(_.id),children:[d.jsx(e2,{children:_.icon}),d.jsx(n2,{children:_.name})]},_.id))]}),d.jsx(UL,{children:x.length>0?x.map(_=>d.jsxs(ZL,{children:[d.jsxs(IL,{onClick:()=>y(_.id),$isOpen:u===_.id,children:[d.jsx(GL,{children:"Q"}),d.jsx(qL,{children:_.question}),d.jsx(YL,{$isOpen:u===_.id,children:d.jsx(W6,{})})]}),d.jsxs(FL,{$isOpen:u===_.id,children:[d.jsx($L,{children:"A"}),d.jsx(XL,{children:_.answer.split(`
`).map((T,C)=>d.jsx("p",{children:T||d.jsx("br",{})},C))})]})]},_.id)):d.jsxs(KL,{children:[d.jsx(Cs,{size:48}),d.jsx("p",{children:"검색 결과가 없습니다"}),d.jsx("p",{children:"다른 키워드로 검색해보세요"})]})}),d.jsxs(QL,{children:[d.jsx(WL,{children:"찾으시는 답변이 없으신가요?"}),d.jsx(JL,{children:"더 궁금하신 사항은 고객센터로 문의해주세요"}),d.jsxs(tO,{children:[d.jsxs(bp,{children:[d.jsx(wp,{children:"고객센터 전화"}),d.jsx(Sp,{children:"1588-0000"})]}),d.jsxs(bp,{children:[d.jsx(wp,{children:"운영 시간"}),d.jsx(Sp,{children:"평일 09:00 - 18:00"})]}),d.jsxs(bp,{children:[d.jsx(wp,{children:"이메일"}),d.jsx(Sp,{children:"support@cocoichibanya.co.kr"})]})]})]})]})})]})]})},AL=S.div`
  min-height: 100vh;
  padding-top: 80px;
  background: var(--color-background);
`,ML=S.section`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  padding: 4rem 0;
  color: white;
  margin-bottom: 3rem;
`,J_=S.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
`,zL=S.div`
  text-align: center;
`,LL=S.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`,OL=S.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,DL=S.p`
  font-size: 1.25rem;
  opacity: 0.95;
`,RL=S.div`
  padding-bottom: 5rem;
`,kL=S.div`
  margin-bottom: 2rem;
`,BL=S.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: white;
  border-radius: 50px;
  box-shadow: var(--shadow-md);
  color: var(--color-gray);
  transition: var(--transition-fast);

  &:focus-within {
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
  }
`,PL=S.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  color: var(--color-dark);

  &::placeholder {
    color: var(--color-gray);
  }
`,NL=S.button`
  color: var(--color-gray);
  transition: var(--transition-fast);

  &:hover {
    color: var(--color-dark);
  }
`,VL=S.p`
  margin-top: 1rem;
  color: var(--color-gray);
  font-size: 0.875rem;
  padding-left: 1rem;
`,HL=S.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-light-gray);
    border-radius: 2px;
  }
`,t2=S.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.25rem 2rem;
  background: ${n=>n.$active?"white":"transparent"};
  border-radius: var(--radius-lg);
  box-shadow: ${n=>n.$active?"var(--shadow-md)":"none"};
  transition: var(--transition-fast);
  min-width: 100px;
  white-space: nowrap;

  &:hover {
    background: white;
    box-shadow: var(--shadow-sm);
    transform: translateY(-2px);
  }
`,e2=S.span`
  font-size: 2rem;
`,n2=S.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-dark);
`,UL=S.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,ZL=S.div`
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-fast);

  &:hover {
    box-shadow: var(--shadow-md);
  }
`,IL=S.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  text-align: left;
  background: ${n=>n.$isOpen?"var(--color-background)":"white"};
  transition: var(--transition-fast);
  cursor: pointer;

  &:hover {
    background: var(--color-background);
  }
`,GL=S.span`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  color: white;
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.875rem;
`,qL=S.span`
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-dark);
`,YL=S.span`
  flex-shrink: 0;
  color: var(--color-gray);
  transition: transform var(--transition-fast);
  transform: rotate(${n=>n.$isOpen?"180deg":"0deg"});
`,FL=S.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  padding: ${n=>n.$isOpen?"0 1.5rem 1.5rem 1.5rem":"0 1.5rem"};
  max-height: ${n=>n.$isOpen?"1000px":"0"};
  opacity: ${n=>n.$isOpen?"1":"0"};
  overflow: hidden;
  transition: all var(--transition-normal);
`,$L=S.span`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #10b981;
  color: white;
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.875rem;
`,XL=S.div`
  color: var(--color-dark);
  line-height: 1.8;

  p {
    margin-bottom: 0.75rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`,KL=S.div`
  text-align: center;
  padding: 5rem 2rem;
  color: var(--color-gray);

  svg {
    margin-bottom: 1rem;
    opacity: 0.3;
  }

  p {
    font-size: 1.125rem;

    &:first-of-type {
      margin-bottom: 0.5rem;
      font-weight: 600;
    }
  }
`,QL=S.div`
  margin-top: 4rem;
  padding: 3rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: var(--radius-lg);
  text-align: center;
`,WL=S.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
`,JL=S.p`
  color: var(--color-gray);
  margin-bottom: 2rem;
`,tO=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,bp=S.div`
  text-align: center;
`,wp=S.div`
  font-size: 0.875rem;
  color: var(--color-gray);
  margin-bottom: 0.5rem;
`,Sp=S.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-primary);
`,eO="coco2026",nO=()=>{const[n,a]=z.useState(!1),[o,c]=z.useState(""),u=Lc();z.useEffect(()=>{sessionStorage.getItem("admin_session")==="authenticated"&&a(!0)},[]);const m=y=>{y.preventDefault(),o===eO?(a(!0),sessionStorage.setItem("admin_session","authenticated")):alert("비밀번호가 올바르지 않습니다.")},g=()=>{a(!1),sessionStorage.removeItem("admin_session"),c("")},x=[{id:"notice",title:"공지사항 관리",description:"공지사항 등록, 수정, 삭제",icon:d.jsx(ef,{}),path:"/admin/notice",color:"#f59e0b"},{id:"store",title:"매장 관리",description:"매장 정보 등록 및 관리",icon:d.jsx(nf,{}),path:"/admin/store",color:"#3b82f6"},{id:"menu",title:"메뉴 관리",description:"메뉴, 토핑, 사이드 관리",icon:d.jsx(af,{}),path:"/admin/menu",color:"#ef4444"}];return n?d.jsxs(d.Fragment,{children:[d.jsx(cr,{children:d.jsx("title",{children:"관리자 대시보드 - 코코이찌방야"})}),d.jsxs(fO,{children:[d.jsx(hO,{children:d.jsx(i2,{children:d.jsxs(mO,{children:[d.jsxs(pO,{children:[d.jsx(K6,{}),d.jsx(gO,{children:"관리자 대시보드"})]}),d.jsxs(vO,{onClick:g,children:[d.jsx(c8,{})," 로그아웃"]})]})})}),d.jsx(i2,{children:d.jsxs(yO,{children:[d.jsxs(xO,{children:[d.jsx(_O,{children:"코코이찌방야 관리 시스템에 오신 것을 환영합니다! 👋"}),d.jsx(bO,{children:"공지사항, 매장, 메뉴를 손쉽게 관리할 수 있습니다."})]}),d.jsx(wO,{children:x.map(y=>d.jsxs(SO,{onClick:()=>u(y.path),$color:y.color,children:[d.jsx(TO,{$color:y.color,children:y.icon}),d.jsx(CO,{children:y.title}),d.jsx(jO,{children:y.description}),d.jsx(EO,{children:"관리하기 →"})]},y.id))}),d.jsxs(AO,{children:[d.jsx(MO,{children:"💡 관리 가이드"}),d.jsxs(zO,{children:[d.jsxs(Tp,{children:[d.jsx(Cp,{children:"공지사항"}),d.jsx(jp,{children:"중요 공지는 체크박스로 상단 고정 가능합니다"})]}),d.jsxs(Tp,{children:[d.jsx(Cp,{children:"매장"}),d.jsx(jp,{children:"위도/경도는 네이버/카카오맵에서 확인 가능합니다"})]}),d.jsxs(Tp,{children:[d.jsx(Cp,{children:"메뉴"}),d.jsx(jp,{children:"카레, 토핑, 사이드, 음료를 개별 관리할 수 있습니다"})]})]})]}),d.jsxs(LO,{children:[d.jsx(OO,{children:"⚙️ 데이터 저장 방식"}),d.jsxs(DO,{children:["현재 ",d.jsx("strong",{children:"LocalStorage"}),"를 사용 중입니다. 실서버 배포 시에는 각 서비스 파일 (noticeService.js, storeService.js, menuService.js)에서 2줄만 수정하면 API로 전환됩니다."]})]})]})})]})]}):d.jsxs(d.Fragment,{children:[d.jsx(cr,{children:d.jsx("title",{children:"관리자 로그인 - 코코이찌방야"})}),d.jsx(iO,{children:d.jsxs(aO,{children:[d.jsx(rO,{children:d.jsx(a8,{})}),d.jsx(oO,{children:"관리자 대시보드"}),d.jsx(sO,{children:"코코이찌방야 통합 관리 시스템"}),d.jsxs(lO,{onSubmit:m,children:[d.jsx(cO,{type:"password",placeholder:"비밀번호를 입력하세요",value:o,onChange:y=>c(y.target.value),autoFocus:!0}),d.jsx(uO,{type:"submit",children:"로그인"})]}),d.jsx(dO,{children:"개발용 비밀번호: coco2026"})]})})]})},iO=S.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-primary) 0%, #d97706 100%);
`,aO=S.div`
  background: white;
  padding: 3rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  width: 100%;
  max-width: 450px;
  text-align: center;
`,rO=S.div`
  font-size: 3.5rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
`,oO=S.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
`,sO=S.p`
  color: var(--color-gray);
  margin-bottom: 2rem;
  font-size: 0.95rem;
`,lO=S.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,cO=S.input`
  padding: 1rem;
  border: 2px solid var(--color-light-gray);
  border-radius: var(--radius-md);
  font-size: 1rem;
  transition: var(--transition-fast);

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`,uO=S.button`
  padding: 1rem;
  background: var(--color-primary);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border-radius: var(--radius-md);
  transition: var(--transition-fast);

  &:hover {
    background: #cc0010;
    transform: translateY(-2px);
  }
`,dO=S.p`
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: var(--color-gray);
  padding: 0.75rem;
  background: var(--color-background);
  border-radius: var(--radius-md);
`,fO=S.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8fafc 0%, #e2e8f0 100%);
`,hO=S.div`
  background: white;
  box-shadow: var(--shadow-sm);
  padding: 1.5rem 0;
  margin-bottom: 3rem;
`,i2=S.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,mO=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,pO=S.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  color: var(--color-primary);
`,gO=S.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-dark);
`,vO=S.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: var(--color-gray);
  color: white;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 600;
  transition: var(--transition-fast);

  &:hover {
    background: var(--color-dark);
  }
`,yO=S.div`
  padding: 2rem 0 5rem;
`,xO=S.div`
  text-align: center;
  margin-bottom: 3rem;
`,_O=S.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 1rem;
`,bO=S.p`
  font-size: 1.125rem;
  color: var(--color-gray);
`,wO=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,SO=S.div`
  background: white;
  padding: 2.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  cursor: pointer;
  transition: var(--transition-normal);
  border-top: 4px solid ${n=>n.$color};

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
  }
`,TO=S.div`
  font-size: 3rem;
  color: ${n=>n.$color};
  margin-bottom: 1.5rem;
`,CO=S.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 0.75rem;
`,jO=S.p`
  color: var(--color-gray);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,EO=S.div`
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.95rem;
`,AO=S.div`
  background: white;
  padding: 2rem;
  border-radius: var(--radius-lg);
  margin-bottom: 2rem;
  box-shadow: var(--shadow-sm);
`,MO=S.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 1.5rem;
`,zO=S.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Tp=S.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,Cp=S.span`
  padding: 0.5rem 1rem;
  background: var(--color-primary);
  color: white;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  min-width: 80px;
  text-align: center;
`,jp=S.p`
  color: var(--color-gray);
  flex: 1;
`,LO=S.div`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 2rem;
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--color-primary);
`,OO=S.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 1rem;
`,DO=S.p`
  color: var(--color-dark);
  line-height: 1.8;

  strong {
    color: var(--color-primary);
  }
`,f0=S.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8fafc 0%, #e2e8f0 100%);
  padding-top: 80px;
`,h0=S.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 2rem 0;
  margin-bottom: 3rem;
  border-bottom: 1px solid #e2e8f0;
`,Es=S.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,m0=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`,p0=S.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`,g0=S.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(135deg, #64748b 0%, #475569 100%);
  color: white;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #475569 0%, #334155 100%);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`,v0=S.h1`
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--color-primary) 0%, #d97706 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,y0=S.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`,x0=S.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-weight: 600;
  color: var(--color-dark);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

  span {
    color: var(--color-primary);
    font-size: 1.25rem;
  }
`,_0=S.div`
  padding-bottom: 4rem;
`,b0=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;S.div`
  flex: 1;
  max-width: 400px;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 1rem;
    color: var(--color-dark);

    &::placeholder {
      color: #94a3b8;
    }
  }

  svg {
    color: #94a3b8;
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;const As=S.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--color-primary) 0%, #d97706 100%);
  color: white;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(230, 0, 18, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(230, 0, 18, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    font-size: 1.25rem;
  }
`,w0=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ps=S.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    border-color: var(--color-primary);
  }
`,Vc=S.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
`,S0=S.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-dark);
  flex: 1;
  line-height: 1.4;
`,a2=S.span`
  padding: 0.375rem 1rem;
  background: ${n=>n.$color||"#3b82f6"};
  color: white;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,Hc=S.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
`,lr=S.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-gray);
  font-size: 0.95rem;

  svg {
    color: var(--color-primary);
    font-size: 1.1rem;
    flex-shrink: 0;
  }
`,Uc=S.div`
  display: flex;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
`,Ms=S.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem;
  background: ${n=>n.$variant==="danger"?"#fee2e2":"#eff6ff"};
  color: ${n=>n.$variant==="danger"?"#dc2626":"#2563eb"};
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background: ${n=>n.$variant==="danger"?"#fecaca":"#dbeafe"};
    transform: scale(1.02);
  }

  svg {
    font-size: 1rem;
  }
`,T0=S.div`
  text-align: center;
  padding: 6rem 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  svg {
    font-size: 4rem;
    color: #cbd5e1;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-dark);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--color-gray);
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`,RO=S.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  background: white;
  padding: 0.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 2px;
  }
`,kO=S.button`
  flex: 1;
  min-width: 150px;
  padding: 1rem 1.5rem;
  background: ${n=>n.$active?"linear-gradient(135deg, var(--color-primary) 0%, #d97706 100%)":"transparent"};
  color: ${n=>n.$active?"white":"var(--color-dark)"};
  font-weight: 700;
  font-size: 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: ${n=>n.$active?"linear-gradient(135deg, var(--color-primary) 0%, #d97706 100%)":"#f1f5f9"};
  }
`,BO={공지:"#3b82f6",이벤트:"#ef4444",시스템:"#10b981"},PO=()=>{const n=Lc(),[a,o]=z.useState([]),[c,u]=z.useState(!1),[m,g]=z.useState(null),[x,y]=z.useState({title:"",category:"공지",content:"",isImportant:!1,author:"코코이찌방야"});z.useEffect(()=>{_(),aw()},[]);const _=async()=>{try{const R=await ms.getAllNotices();o(R)}catch{alert("공지사항을 불러오는데 실패했습니다.")}},T=()=>{u(!0),g(null),y({title:"",category:"공지",content:"",isImportant:!1,author:"코코이찌방야"})},C=R=>{u(!0),g(R),y({title:R.title,category:R.category,content:R.content,isImportant:R.isImportant,author:R.author})},A=async R=>{if(R.preventDefault(),!x.title.trim()||!x.content.trim()){alert("제목과 내용을 입력해주세요.");return}try{m?(await ms.updateNotice(m.id,x),alert("공지사항이 수정되었습니다.")):(await ms.createNotice(x),alert("공지사항이 등록되었습니다.")),u(!1),g(null),_()}catch{alert("저장에 실패했습니다.")}},O=async R=>{if(window.confirm("정말 삭제하시겠습니까?"))try{await ms.deleteNotice(R),alert("공지사항이 삭제되었습니다."),_()}catch{alert("삭제에 실패했습니다.")}};return d.jsxs(d.Fragment,{children:[d.jsx(cr,{children:d.jsx("title",{children:"공지사항 관리 - 코코이찌방야"})}),d.jsxs(f0,{children:[d.jsx(h0,{children:d.jsx(Es,{children:d.jsxs(m0,{children:[d.jsxs(p0,{children:[d.jsxs(g0,{onClick:()=>n("/admin"),children:[d.jsx(Tg,{})," 대시보드"]}),d.jsxs(v0,{children:[d.jsx(ef,{})," 공지사항 관리"]})]}),d.jsx(y0,{children:d.jsxs(x0,{children:[d.jsx("span",{children:a.length}),"개 공지사항"]})})]})})}),d.jsx(Es,{children:d.jsx(_0,{children:c?d.jsxs(VO,{children:[d.jsxs(HO,{children:[d.jsx(UO,{children:m?"공지사항 수정":"새 공지사항 작성"}),d.jsxs(ZO,{children:[d.jsxs(IO,{onClick:()=>u(!1),children:[d.jsx(fo,{})," 취소"]}),d.jsxs(GO,{onClick:A,children:[d.jsx(Eg,{})," 저장"]})]})]}),d.jsxs(qO,{onSubmit:A,children:[d.jsxs(YO,{children:[d.jsxs(Ep,{flex:"2",children:[d.jsx(Ap,{children:"제목 *"}),d.jsx(FO,{type:"text",value:x.title,onChange:R=>y({...x,title:R.target.value}),placeholder:"공지사항 제목",required:!0})]}),d.jsxs(Ep,{flex:"1",children:[d.jsx(Ap,{children:"카테고리 *"}),d.jsxs($O,{value:x.category,onChange:R=>y({...x,category:R.target.value}),children:[d.jsx("option",{value:"공지",children:"공지"}),d.jsx("option",{value:"이벤트",children:"이벤트"}),d.jsx("option",{value:"시스템",children:"시스템"})]})]})]}),d.jsxs(Ep,{children:[d.jsx(Ap,{children:"내용 *"}),d.jsx(XO,{value:x.content,onChange:R=>y({...x,content:R.target.value}),placeholder:"공지사항 내용을 입력하세요",rows:"12",required:!0})]}),d.jsx(KO,{children:d.jsxs(QO,{children:[d.jsx("input",{type:"checkbox",checked:x.isImportant,onChange:R=>y({...x,isImportant:R.target.checked})}),d.jsx("span",{children:"⭐ 중요 공지사항 (상단 고정)"})]})})]})]}):d.jsxs(d.Fragment,{children:[d.jsxs(b0,{children:[d.jsx("div",{}),d.jsxs(As,{onClick:T,children:[d.jsx(Ts,{})," 새 공지사항 작성"]})]}),a.length===0?d.jsxs(T0,{children:[d.jsx(ef,{}),d.jsx("h3",{children:"등록된 공지사항이 없습니다"}),d.jsx("p",{children:"새 공지사항을 작성해보세요"}),d.jsxs(As,{onClick:T,children:[d.jsx(Ts,{})," 첫 공지사항 작성하기"]})]}):d.jsx(w0,{children:a.map(R=>d.jsxs(Ps,{children:[d.jsx(Vc,{children:d.jsx(S0,{children:R.title})}),d.jsxs(Hc,{children:[d.jsxs(lr,{children:[d.jsx(a2,{$color:BO[R.category],children:R.category}),R.isImportant&&d.jsxs(a2,{$color:"#ef4444",children:[d.jsx(t8,{})," 중요"]})]}),d.jsxs(lr,{children:["📅 ",R.date]}),d.jsxs(lr,{children:["✍️ ",R.author]}),d.jsxs(NO,{children:[R.content.substring(0,100),"..."]})]}),d.jsxs(Uc,{children:[d.jsxs(Ms,{onClick:()=>C(R),children:[d.jsx(Cg,{})," 수정"]}),d.jsxs(Ms,{$variant:"danger",onClick:()=>O(R.id),children:[d.jsx(Ag,{})," 삭제"]})]})]},R.id))})]})})})]})]})},NO=S.p`
  color: var(--color-gray);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-top: 0.5rem;
`,VO=S(Ps)`
  max-width: 900px;
  margin: 0 auto;
`,HO=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #e2e8f0;
`,UO=S.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-dark);
`,ZO=S.div`
  display: flex;
  gap: 0.75rem;
`,IO=S.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: #f1f5f9;
  color: #475569;
  font-weight: 600;
  border-radius: 10px;
  transition: all 0.2s ease;

  &:hover {
    background: #e2e8f0;
  }
`,GO=S.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, var(--color-primary) 0%, #d97706 100%);
  color: white;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(230, 0, 18, 0.3);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(230, 0, 18, 0.4);
  }
`,qO=S.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,YO=S.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Ep=S.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: ${n=>n.flex||"1"};
`,Ap=S.label`
  font-weight: 600;
  color: var(--color-dark);
  font-size: 0.95rem;
`,FO=S.input`
  padding: 0.875rem 1.25rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(230, 0, 18, 0.1);
  }
`,$O=S.select`
  padding: 0.875rem 1.25rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(230, 0, 18, 0.1);
  }
`,XO=S.textarea`
  padding: 0.875rem 1.25rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  line-height: 1.6;
  resize: vertical;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(230, 0, 18, 0.1);
  }
`,KO=S.div`
  padding: 1.5rem;
  background: #fef2f2;
  border: 2px solid #fecaca;
  border-radius: 10px;
`,QO=S.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  font-weight: 600;
  color: var(--color-dark);

  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  span {
    font-size: 1rem;
  }
`,WO=()=>{const n=Lc(),[a,o]=z.useState([]),[c,u]=z.useState(!1),[m,g]=z.useState(null),[x,y]=z.useState({name:"",address:"",phone:"",hours:"11:00 - 22:00",lat:37.5665,lng:126.978,features:[],images:["/images/stores/default.jpg"],displayOrder:0}),_=["주차가능","배달가능","포장가능","단체석","키즈존","24시간","외국어가능","학생할인"];z.useEffect(()=>{T(),iw()},[]);const T=async()=>{try{const M=await hs.getAllStores();o(M)}catch{alert("매장을 불러오는데 실패했습니다.")}},C=M=>{const{name:B,value:Q}=M.target;y(tt=>({...tt,[B]:Q}))},A=M=>{const B=M.target.files[0];if(!B)return;if(B.size>2*1024*1024){alert("이미지 크기는 2MB 이하로 해주세요.");return}if(!B.type.startsWith("image/")){alert("이미지 파일만 업로드 가능합니다.");return}const Q=new FileReader;Q.onloadend=()=>{y(tt=>({...tt,images:[Q.result]}))},Q.readAsDataURL(B)},O=M=>{y(B=>({...B,features:B.features.includes(M)?B.features.filter(Q=>Q!==M):[...B.features,M]}))},R=()=>{u(!0),g(null),y({name:"",address:"",phone:"",hours:"11:00 - 22:00",lat:37.5665,lng:126.978,features:[],images:["/images/stores/default.jpg"],displayOrder:a.length+1})},P=M=>{u(!0),g(M),y({name:M.name,address:M.address,phone:M.phone,hours:M.hours,lat:M.lat,lng:M.lng,features:M.features||[],images:M.images||["/images/stores/default.jpg"],displayOrder:M.displayOrder??0})},I=async M=>{if(M.preventDefault(),!x.name||!x.address||!x.phone){alert("필수 항목을 모두 입력해주세요.");return}try{m?(await hs.updateStore(m.id,x),alert("매장이 수정되었습니다.")):(await hs.createStore(x),alert("매장이 등록되었습니다.")),u(!1),g(null),T()}catch{alert("저장에 실패했습니다.")}},D=async M=>{if(window.confirm("정말 삭제하시겠습니까?"))try{await hs.deleteStore(M),alert("매장이 삭제되었습니다."),T()}catch{alert("삭제에 실패했습니다.")}};return d.jsxs(d.Fragment,{children:[d.jsx(cr,{children:d.jsx("title",{children:"매장 관리 - 코코이찌방야"})}),d.jsxs(f0,{children:[d.jsx(h0,{children:d.jsx(Es,{children:d.jsxs(m0,{children:[d.jsxs(p0,{children:[d.jsxs(g0,{onClick:()=>n("/admin"),children:[d.jsx(Tg,{})," 대시보드"]}),d.jsxs(v0,{children:[d.jsx(nf,{})," 매장 관리"]})]}),d.jsx(y0,{children:d.jsxs(x0,{children:[d.jsx("span",{children:a.length}),"개 매장"]})})]})})}),d.jsx(Es,{children:d.jsx(_0,{children:c?d.jsxs(aD,{children:[d.jsxs(rD,{children:[d.jsx(oD,{children:m?"매장 수정":"새 매장 등록"}),d.jsxs(sD,{children:[d.jsxs(lD,{onClick:()=>u(!1),children:[d.jsx(fo,{})," 취소"]}),d.jsxs(cD,{onClick:I,children:[d.jsx(Eg,{})," 저장"]})]})]}),d.jsxs(uD,{onSubmit:I,children:[d.jsxs(Mp,{children:[d.jsxs(ca,{flex:"2",children:[d.jsx(ua,{children:"매장명 *"}),d.jsx(ir,{name:"name",value:x.name,onChange:C,placeholder:"코코이찌방야 강남점",required:!0})]}),d.jsxs(ca,{flex:"1",children:[d.jsx(ua,{children:"전화번호 *"}),d.jsx(ir,{name:"phone",value:x.phone,onChange:C,placeholder:"02-1234-5678",required:!0})]})]}),d.jsxs(ca,{children:[d.jsx(ua,{children:"주소 *"}),d.jsx(ir,{name:"address",value:x.address,onChange:C,placeholder:"서울특별시 강남구...",required:!0})]}),d.jsxs(Mp,{children:[d.jsxs(ca,{flex:"2",children:[d.jsx(ua,{children:"영업시간"}),d.jsx(ir,{name:"hours",value:x.hours,onChange:C,placeholder:"11:00 - 22:00"})]}),d.jsxs(ca,{flex:"1",children:[d.jsx(ua,{children:"🔢 노출 순서"}),d.jsx(ir,{type:"number",name:"displayOrder",value:x.displayOrder,onChange:C,placeholder:"0",min:"0"})]})]}),d.jsxs(Mp,{children:[d.jsxs(ca,{flex:"1",children:[d.jsx(ua,{children:"위도 (Latitude)"}),d.jsx(ir,{type:"number",step:"0.000001",name:"lat",value:x.lat,onChange:C})]}),d.jsxs(ca,{flex:"1",children:[d.jsx(ua,{children:"경도 (Longitude)"}),d.jsx(ir,{type:"number",step:"0.000001",name:"lng",value:x.lng,onChange:C})]})]}),d.jsxs(ca,{children:[d.jsx(ua,{children:"매장 특징"}),d.jsx(dD,{children:_.map(M=>d.jsxs(fD,{children:[d.jsx("input",{type:"checkbox",checked:x.features.includes(M),onChange:()=>O(M)}),d.jsx("span",{children:M})]},M))})]}),d.jsxs(ca,{children:[d.jsxs(ua,{children:[d.jsx(db,{})," 매장 이미지"]}),d.jsxs(hD,{children:[d.jsxs(mD,{children:[d.jsx("input",{type:"file",accept:"image/*",onChange:A,style:{display:"none"},id:"store-image-upload"}),d.jsx("label",{htmlFor:"store-image-upload",children:"📁 이미지 파일 선택 (최대 2MB)"})]}),d.jsx(pD,{children:"또는"}),d.jsx(ir,{name:"imageUrl",value:x.images?.[0]?.startsWith("data:")?"":x.images?.[0]||"",onChange:M=>y(B=>({...B,images:[M.target.value]})),placeholder:"이미지 URL 입력: /images/stores/example.jpg"})]}),x.images?.[0]&&d.jsxs(gD,{children:[d.jsx(vD,{src:x.images[0],alt:"매장 미리보기",onError:M=>M.target.src="/images/stores/default.jpg"}),d.jsx(yD,{children:"미리보기"})]})]})]})]}):d.jsxs(d.Fragment,{children:[d.jsxs(b0,{children:[d.jsx("div",{}),d.jsxs(As,{onClick:R,children:[d.jsx(Ts,{})," 새 매장 등록"]})]}),a.length===0?d.jsxs(T0,{children:[d.jsx(nf,{}),d.jsx("h3",{children:"등록된 매장이 없습니다"}),d.jsx("p",{children:"새 매장을 등록해보세요"}),d.jsxs(As,{onClick:R,children:[d.jsx(Ts,{})," 첫 매장 등록하기"]})]}):d.jsx(w0,{children:a.map(M=>d.jsxs(rw,{children:[d.jsxs(JO,{children:[d.jsx(tD,{src:M.images?.[0]||"/images/stores/default.jpg",alt:M.name,onError:B=>B.target.src="/images/stores/default.jpg"}),M.displayOrder!==void 0&&d.jsxs(eD,{children:["#",M.displayOrder]})]}),d.jsx(Vc,{children:d.jsx(S0,{children:M.name})}),d.jsxs(Hc,{children:[d.jsxs(lr,{children:[d.jsx(jg,{})," ",M.address]}),d.jsxs(lr,{children:[d.jsx(bf,{})," ",M.phone]}),d.jsxs(lr,{children:[d.jsx(lb,{})," ",M.hours]}),M.features&&M.features.length>0&&d.jsx(nD,{children:M.features.map((B,Q)=>d.jsx(iD,{children:B},Q))})]}),d.jsxs(Uc,{children:[d.jsxs(Ms,{onClick:()=>P(M),children:[d.jsx(Cg,{})," 수정"]}),d.jsxs(Ms,{$variant:"danger",onClick:()=>D(M.id),children:[d.jsx(Ag,{})," 삭제"]})]})]},M.id))})]})})})]})]})},rw=S(Ps)`
  overflow: hidden;
  padding: 0;

  /* 이미지 아래 콘텐츠 영역에 여백 추가 */
  ${Vc},
  ${Hc} {
    padding: 1.5rem;
  }

  ${Uc} {
    padding: 1.5rem;
    padding-top: 0;
  }
`,JO=S.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: linear-gradient(to bottom, #f1f5f9, #e2e8f0);
  position: relative;
`,tD=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${rw}:hover & {
    transform: scale(1.05);
  }
`,eD=S.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: linear-gradient(135deg, var(--color-primary) 0%, #d97706 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(230, 0, 18, 0.4);
  z-index: 10;
`,nD=S.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
`,iD=S.span`
  padding: 0.375rem 0.875rem;
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  color: var(--color-dark);
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid #cbd5e1;
`,aD=S(Ps)`
  max-width: 1000px;
  margin: 0 auto;
`,rD=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #e2e8f0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`,oD=S.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-dark);
`,sD=S.div`
  display: flex;
  gap: 0.75rem;
`,lD=S.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: #f1f5f9;
  color: #475569;
  font-weight: 600;
  border-radius: 10px;
  transition: all 0.2s ease;

  &:hover {
    background: #e2e8f0;
  }
`,cD=S.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, var(--color-primary) 0%, #d97706 100%);
  color: white;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(230, 0, 18, 0.3);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(230, 0, 18, 0.4);
  }
`,uD=S.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Mp=S.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,ca=S.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: ${n=>n.flex||"1"};
`,ua=S.label`
  font-weight: 600;
  color: var(--color-dark);
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ir=S.input`
  padding: 0.875rem 1.25rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(230, 0, 18, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`,dD=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.75rem;
  padding: 1.5rem;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
`,fD=S.label`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
  font-weight: 500;
  color: var(--color-dark);
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background: white;
  }

  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: var(--color-primary);
  }

  span {
    font-size: 0.9rem;
  }
`,hD=S.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
`,mD=S.div`
  label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.875rem 1.5rem;
    background: linear-gradient(135deg, var(--color-primary) 0%, #d97706 100%);
    color: white;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(230, 0, 18, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(230, 0, 18, 0.4);
    }
  }
`,pD=S.div`
  text-align: center;
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 600;
  position: relative;
  padding: 0 1rem;
  
  &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: calc(50% - 2rem);
    height: 2px;
    background: #cbd5e1;
  }
  
  &::before { left: 0; }
  &::after { right: 0; }
`,gD=S.div`
  margin-top: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  max-width: 400px;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,vD=S.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`,yD=S.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  backdrop-filter: blur(4px);
`,xD=()=>{const n=Lc(),[a,o]=z.useState("curry"),[c,u]=z.useState([]),[m,g]=z.useState([]),[x,y]=z.useState([]),[_,T]=z.useState([]),[C,A]=z.useState(!1),[O,R]=z.useState(null),[P,I]=z.useState({}),D=[{id:"curry",name:"카레 메뉴",icon:"🍛",color:"#f59e0b"},{id:"topping",name:"토핑",icon:"🧀",color:"#10b981"},{id:"side",name:"사이드",icon:"🥗",color:"#3b82f6"},{id:"drink",name:"음료",icon:"🥤",color:"#8b5cf6"}],M={curry:["pork","chicken","beef","seafood","vegetable","special"],topping:["protein","seafood","vegetable","dairy","seasoning"],side:["salad","soup","pickle","etc"],drink:["soft","juice","tea","etc"]};z.useEffect(()=>{B(),Q5()},[a]);const B=async()=>{try{if(a==="curry"){const at=await pe.getAllCurryMenus();u(at)}else if(a==="topping"){const at=await pe.getAllToppings();g(at)}else if(a==="side"){const at=await pe.getAllSides();y(at)}else if(a==="drink"){const at=await pe.getAllDrinks();T(at)}}catch(at){console.error("데이터 로드 실패:",at)}},Q=()=>a==="curry"?c:a==="topping"?m:a==="side"?x:a==="drink"?_:[],tt=()=>c.length+m.length+x.length+_.length,ot=()=>{A(!0),R(null);const at=Q();a==="curry"?I({name:"",category:"pork",price:0,description:"",image:"/images/menu/default.jpg",popular:!1,allergens:[],calories:0,spicy:0,displayOrder:at.length+1}):a==="topping"?I({name:"",category:"protein",price:0,description:"",image:"/images/toppings/default.jpg",allergens:[],displayOrder:at.length+1}):a==="side"?I({name:"",category:"salad",price:0,description:"",image:"/images/sides/default.jpg",calories:0,displayOrder:at.length+1}):a==="drink"&&I({name:"",category:"soft",price:0,description:"",image:"/images/drinks/default.jpg",displayOrder:at.length+1})},$=at=>{A(!0),R(at),I({...at,displayOrder:at.displayOrder??0})},lt=async at=>{if(at.preventDefault(),!P.name||!P.price){alert("필수 항목을 입력해주세요.");return}const zt={...P,allergens:typeof P.allergens=="string"?P.allergens.split(",").map(Bt=>Bt.trim()).filter(Bt=>Bt):P.allergens||[]};try{a==="curry"?O?await pe.updateCurryMenu(O.id,zt):await pe.createCurryMenu(zt):a==="topping"?O?await pe.updateTopping(O.id,zt):await pe.createTopping(zt):a==="side"?O?await pe.updateSide(O.id,zt):await pe.createSide(zt):a==="drink"&&(O?await pe.updateDrink(O.id,zt):await pe.createDrink(zt)),alert("저장되었습니다."),A(!1),B()}catch{alert("저장 실패")}},pt=async at=>{if(window.confirm("삭제하시겠습니까?"))try{a==="curry"?await pe.deleteCurryMenu(at):a==="topping"?await pe.deleteTopping(at):a==="side"?await pe.deleteSide(at):a==="drink"&&await pe.deleteDrink(at),alert("삭제되었습니다."),B()}catch{alert("삭제 실패")}},gt=at=>{const{name:zt,value:Bt,type:ge,checked:X}=at.target;I(st=>({...st,[zt]:ge==="checkbox"?X:ge==="number"?parseFloat(Bt):Bt}))},Tt=at=>{const zt=at.target.files[0];if(!zt)return;if(zt.size>2*1024*1024){alert("이미지 크기는 2MB 이하로 해주세요.");return}if(!zt.type.startsWith("image/")){alert("이미지 파일만 업로드 가능합니다.");return}const Bt=new FileReader;Bt.onloadend=()=>{I(ge=>({...ge,image:Bt.result}))},Bt.readAsDataURL(zt)};return d.jsxs(d.Fragment,{children:[d.jsx(cr,{children:d.jsx("title",{children:"메뉴 관리 - 코코이찌방야"})}),d.jsxs(f0,{children:[d.jsx(h0,{children:d.jsx(Es,{children:d.jsxs(m0,{children:[d.jsxs(p0,{children:[d.jsxs(g0,{onClick:()=>n("/admin"),children:[d.jsx(Tg,{})," 대시보드"]}),d.jsxs(v0,{children:[d.jsx(af,{})," 메뉴 관리"]})]}),d.jsx(y0,{children:d.jsxs(x0,{children:[d.jsx("span",{children:tt()}),"개 메뉴"]})})]})})}),d.jsx(Es,{children:d.jsxs(_0,{children:[d.jsx(RO,{children:D.map(at=>d.jsxs(kO,{$active:a===at.id,onClick:()=>{o(at.id),A(!1)},children:[at.icon," ",at.name]},at.id))}),C?d.jsxs(AD,{children:[d.jsxs(MD,{children:[d.jsx(zD,{children:O?"메뉴 수정":"새 메뉴 등록"}),d.jsxs(LD,{children:[d.jsxs(OD,{onClick:()=>A(!1),children:[d.jsx(fo,{})," 취소"]}),d.jsxs(DD,{onClick:lt,children:[d.jsx(Eg,{})," 저장"]})]})]}),d.jsxs(RD,{onSubmit:lt,children:[d.jsxs(r2,{children:[d.jsxs(da,{flex:"2",children:[d.jsx(fa,{children:"메뉴명 *"}),d.jsx(rs,{name:"name",value:P.name||"",onChange:gt,placeholder:"메뉴 이름",required:!0})]}),d.jsxs(da,{flex:"1",children:[d.jsx(fa,{children:"가격 *"}),d.jsx(rs,{type:"number",name:"price",value:P.price||0,onChange:gt,placeholder:"0",required:!0})]})]}),d.jsxs(r2,{children:[d.jsxs(da,{flex:"1",children:[d.jsx(fa,{children:"카테고리"}),d.jsx(kD,{name:"category",value:P.category||"",onChange:gt,children:M[a]?.map(at=>d.jsx("option",{value:at,children:at},at))})]}),d.jsxs(da,{flex:"1",children:[d.jsx(fa,{children:"🔢 노출 순서"}),d.jsx(rs,{type:"number",name:"displayOrder",value:P.displayOrder||0,onChange:gt,placeholder:"0",min:"0"})]}),(a==="curry"||a==="side")&&d.jsxs(da,{flex:"1",children:[d.jsxs(fa,{children:[d.jsx(vs,{})," 칼로리"]}),d.jsx(rs,{type:"number",name:"calories",value:P.calories||0,onChange:gt,placeholder:"0"})]}),a==="curry"&&d.jsxs(da,{flex:"1",children:[d.jsx(fa,{children:"🌶️ 맵기 (0-5)"}),d.jsx(rs,{type:"number",min:"0",max:"5",name:"spicy",value:P.spicy||0,onChange:gt})]})]}),d.jsxs(da,{children:[d.jsx(fa,{children:"설명"}),d.jsx(o2,{name:"description",value:P.description||"",onChange:gt,placeholder:"메뉴 설명을 입력하세요",rows:"3"})]}),d.jsxs(da,{children:[d.jsxs(fa,{children:[d.jsx(db,{})," 메뉴 이미지"]}),d.jsxs(BD,{children:[d.jsxs(PD,{children:[d.jsx("input",{type:"file",accept:"image/*",onChange:Tt,style:{display:"none"},id:"menu-image-upload"}),d.jsx("label",{htmlFor:"menu-image-upload",children:"📁 이미지 파일 선택 (최대 2MB)"})]}),d.jsx(ND,{children:"또는"}),d.jsx(rs,{name:"imageUrl",value:P.image?.startsWith("data:")?"":P.image||"",onChange:at=>I(zt=>({...zt,image:at.target.value})),placeholder:"이미지 URL 입력: /images/menu/example.jpg"})]}),P.image&&d.jsxs(VD,{children:[d.jsx(HD,{src:P.image,alt:"메뉴 미리보기",onError:at=>at.target.src="/images/menu/default.jpg"}),d.jsx(UD,{children:"미리보기"})]})]}),(a==="curry"||a==="topping")&&d.jsxs(da,{children:[d.jsx(fa,{children:"⚠️ 알러지 정보"}),d.jsx(o2,{name:"allergens_text",value:typeof P.allergens=="string"?P.allergens:(P.allergens||[]).join(", "),onChange:at=>I(zt=>({...zt,allergens:at.target.value})),placeholder:`돼지고기, 밀, 대두 (쉼표로 구분)\r
예: 돼지고기, 우유, 밀, 대두`,rows:"2"}),d.jsx(GD,{children:"💡 여러 알러지 정보는 쉼표(,)로 구분해서 입력하세요"})]}),a==="curry"&&d.jsx(ZD,{children:d.jsxs(ID,{children:[d.jsx("input",{type:"checkbox",name:"popular",checked:P.popular||!1,onChange:gt}),d.jsx("span",{children:"⭐ 인기 메뉴로 설정"})]})})]})]}):d.jsxs(d.Fragment,{children:[d.jsxs(b0,{children:[d.jsx("div",{}),d.jsxs(As,{onClick:ot,children:[d.jsx(Ts,{})," 새 ",D.find(at=>at.id===a)?.name," 등록"]})]}),Q().length===0?d.jsxs(T0,{children:[d.jsx(af,{}),d.jsx("h3",{children:"등록된 메뉴가 없습니다"}),d.jsx("p",{children:"새 메뉴를 등록해보세요"}),d.jsxs(As,{onClick:ot,children:[d.jsx(Ts,{})," 첫 메뉴 등록하기"]})]}):d.jsx(w0,{children:Q().map(at=>d.jsxs(ow,{children:[d.jsxs(_D,{children:[d.jsx(bD,{src:at.image||"/images/menu/default.jpg",alt:at.name,onError:zt=>zt.target.src="/images/menu/default.jpg"}),at.displayOrder!==void 0&&d.jsxs(wD,{children:["#",at.displayOrder]}),at.popular&&d.jsx(SD,{children:"⭐ 인기"})]}),d.jsx(Vc,{children:d.jsx(S0,{children:at.name})}),d.jsxs(Hc,{children:[d.jsxs(TD,{children:[d.jsx(J6,{style:{color:"var(--color-primary)"}}),d.jsxs(CD,{children:[at.price.toLocaleString(),"원"]})]}),at.calories&&d.jsxs(lr,{children:[d.jsx(vs,{})," ",at.calories,"kcal"]}),d.jsxs(lr,{children:["📁 ",at.category]}),at.description&&d.jsx(jD,{children:at.description}),at.allergens&&at.allergens.length>0&&d.jsxs(ED,{children:["⚠️ ",at.allergens.join(", ")]})]}),d.jsxs(Uc,{children:[d.jsxs(Ms,{onClick:()=>$(at),children:[d.jsx(Cg,{})," 수정"]}),d.jsxs(Ms,{$variant:"danger",onClick:()=>pt(at.id),children:[d.jsx(Ag,{})," 삭제"]})]})]},at.id))})]})]})})]})]})},ow=S(Ps)`
  overflow: hidden;
  padding: 0;

  /* 이미지 아래 콘텐츠 영역에 여백 추가 */
  ${Vc},
  ${Hc} {
    padding: 1.5rem;
  }

  ${Uc} {
    padding: 1.5rem;
    padding-top: 0;
  }
`,_D=S.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: linear-gradient(to bottom, #f1f5f9, #e2e8f0);
  position: relative;
`,bD=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ow}:hover & {
    transform: scale(1.05);
  }
`,wD=S.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: linear-gradient(135deg, var(--color-primary) 0%, #d97706 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(230, 0, 18, 0.4);
  z-index: 10;
`,SD=S.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
`,TD=S.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`,CD=S.span`
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-primary);
`,jD=S.p`
  color: var(--color-gray);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-top: 0.75rem;
`,ED=S.div`
  margin-top: 0.75rem;
  padding: 0.75rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  font-size: 0.85rem;
  color: #991b1b;
  line-height: 1.4;
`,AD=S(Ps)`
  max-width: 1000px;
  margin: 0 auto;
`,MD=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #e2e8f0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`,zD=S.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-dark);
`,LD=S.div`
  display: flex;
  gap: 0.75rem;
`,OD=S.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: #f1f5f9;
  color: #475569;
  font-weight: 600;
  border-radius: 10px;
  transition: all 0.2s ease;

  &:hover {
    background: #e2e8f0;
  }
`,DD=S.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, var(--color-primary) 0%, #d97706 100%);
  color: white;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(230, 0, 18, 0.3);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(230, 0, 18, 0.4);
  }
`,RD=S.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,r2=S.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,da=S.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: ${n=>n.flex||"1"};
`,fa=S.label`
  font-weight: 600;
  color: var(--color-dark);
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,rs=S.input`
  padding: 0.875rem 1.25rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(230, 0, 18, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`,kD=S.select`
  padding: 0.875rem 1.25rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(230, 0, 18, 0.1);
  }
`,o2=S.textarea`
  padding: 0.875rem 1.25rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  line-height: 1.6;
  resize: vertical;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(230, 0, 18, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
`,BD=S.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
`,PD=S.div`
  label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.875rem 1.5rem;
    background: linear-gradient(135deg, var(--color-primary) 0%, #d97706 100%);
    color: white;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(230, 0, 18, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(230, 0, 18, 0.4);
    }
  }
`,ND=S.div`
  text-align: center;
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 600;
  position: relative;
  padding: 0 1rem;
  
  &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: calc(50% - 2rem);
    height: 2px;
    background: #cbd5e1;
  }
  
  &::before { left: 0; }
  &::after { right: 0; }
`,VD=S.div`
  margin-top: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  max-width: 400px;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`,HD=S.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`,UD=S.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  backdrop-filter: blur(4px);
`,ZD=S.div`
  padding: 1.5rem;
  background: #fef3c7;
  border: 2px solid #fde047;
  border-radius: 10px;
`,ID=S.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  font-weight: 600;
  color: var(--color-dark);

  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: var(--color-primary);
  }

  span {
    font-size: 1rem;
  }
`,GD=S.p`
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.5;
  margin-top: 0.5rem;
`,qD=()=>{const{pathname:n}=Ni();return z.useEffect(()=>{window.scrollTo(0,0)},[n]),null};function YD(){const a=Ni().pathname.startsWith("/admin");return d.jsxs("div",{className:"App",children:[!a&&d.jsx(d8,{}),d.jsxs(tS,{children:[d.jsx(Bn,{path:"/",element:d.jsx(yE,{})}),d.jsx(Bn,{path:"/menu",element:d.jsx(tA,{})}),d.jsx(Bn,{path:"/simulator",element:d.jsx(DA,{})}),d.jsx(Bn,{path:"/store",element:d.jsx(nM,{})}),d.jsx(Bn,{path:"/brand",element:d.jsx(AM,{})}),d.jsx(Bn,{path:"/franchise",element:d.jsx(uz,{})}),d.jsx(Bn,{path:"/notice",element:d.jsx(tL,{})}),d.jsx(Bn,{path:"/faq",element:d.jsx(EL,{})}),d.jsx(Bn,{path:"/admin",element:d.jsx(nO,{})}),d.jsx(Bn,{path:"/admin/notice",element:d.jsx(PO,{})}),d.jsx(Bn,{path:"/admin/store",element:d.jsx(WO,{})}),d.jsx(Bn,{path:"/admin/menu",element:d.jsx(xD,{})})]}),!a&&d.jsx(T8,{})]})}function FD(){return d.jsxs(TS,{children:[d.jsx(qD,{}),d.jsx(YD,{})]})}L3.createRoot(document.getElementById("root")).render(d.jsx(z.StrictMode,{children:d.jsx(m2,{children:d.jsx(FD,{})})}));
