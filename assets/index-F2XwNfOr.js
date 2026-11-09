const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./decor-layout-BD7wZAht.js","./grass-mask-DRTdgJFI.js","./phone-bench-CUDNWS63.js","./dev-scenario-DpxQtqc6.js"])))=>i.map(i=>d[i]);
var lp=Object.defineProperty;var cp=(n,e,t)=>e in n?lp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var S=(n,e,t)=>cp(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const hp="modulepreload",dp=function(n,e){return new URL(n,e).href},Yc={},xr=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let a=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=a(t.map(h=>{if(h=dp(h,i),h in Yc)return;Yc[h]=!0;const d=h.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(!!i)for(let v=o.length-1;v>=0;v--){const m=o[v];if(m.href===h&&(!d||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${u}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":hp,d||(g.as="script"),g.crossOrigin="",g.href=h,c&&g.setAttribute("nonce",c),document.head.appendChild(g),d)return new Promise((v,m)=>{g.addEventListener("load",v),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sc="180",up=0,jc=1,fp=2,hu=1,pp=2,$n=3,gi=0,Qt=1,fn=2,fi=0,zi=1,Mr=2,Kc=3,Zc=4,mp=5,Di=100,gp=101,vp=102,_p=103,xp=104,bp=200,yp=201,wp=202,Mp=203,bl=204,yl=205,Sp=206,Ep=207,Tp=208,Ap=209,Rp=210,Cp=211,Pp=212,Ip=213,Lp=214,wl=0,Ml=1,Sl=2,ks=3,El=4,Tl=5,Al=6,Rl=7,du=0,Dp=1,kp=2,Zn=0,Up=1,Np=2,Fp=3,Op=4,Bp=5,zp=6,Hp=7,uu=300,Us=301,Ns=302,Cl=303,Pl=304,Ka=306,Da=1e3,Ni=1001,Il=1002,on=1003,Vp=1004,Wr=1005,an=1006,vo=1007,Fi=1008,Qn=1009,fu=1010,pu=1011,Sr=1012,Ec=1013,Gi=1014,In=1015,Ur=1016,Tc=1017,Ac=1018,Er=1020,mu=35902,gu=35899,vu=1021,_u=1022,Mn=1023,Tr=1026,Ar=1027,Rc=1028,Cc=1029,xu=1030,Pc=1031,Ic=1033,Ma=33776,Sa=33777,Ea=33778,Ta=33779,Ll=35840,Dl=35841,kl=35842,Ul=35843,Nl=36196,Fl=37492,Ol=37496,Bl=37808,zl=37809,Hl=37810,Vl=37811,Gl=37812,Wl=37813,$l=37814,Xl=37815,ql=37816,Yl=37817,jl=37818,Kl=37819,Zl=37820,Jl=37821,Ql=36492,ec=36494,tc=36495,nc=36283,ic=36284,sc=36285,rc=36286,Gp=3200,Wp=3201,$p=0,Xp=1,Yn="",Ct="srgb",Fs="srgb-linear",ka="linear",rt="srgb",Qi=7680,Jc=519,qp=512,Yp=513,jp=514,bu=515,Kp=516,Zp=517,Jp=518,Qp=519,Qc=35044,Ft=35048,eh="300 es",Ln=2e3,Ua=2001;class Ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_o=Math.PI/180,ac=180/Math.PI;function Nr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function em(n,e){return(n%e+e)%e}function xo(n,e,t){return(1-t)*n+t*e}function er(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ni{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const u=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==u||c!==f||h!==g){let m=1-o;const p=l*u+c*f+h*g+d*v,w=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const R=Math.sqrt(E),C=Math.atan2(R,p*w);m=Math.sin(m*C)/R,o=Math.sin(o*C)/R}const x=o*w;if(l=l*m+u*x,c=c*m+f*x,h=h*m+g*x,d=d*m+v*x,m===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(th.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bo.copy(this).projectOnVector(e),this.sub(bo)}reflect(e){return this.sub(bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bo=new O,th=new ni;class He{constructor(e,t,i,s,r,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],w=s[1],E=s[4],x=s[7],R=s[2],C=s[5],A=s[8];return r[0]=a*v+o*w+l*R,r[3]=a*m+o*E+l*C,r[6]=a*p+o*x+l*A,r[1]=c*v+h*w+d*R,r[4]=c*m+h*E+d*C,r[7]=c*p+h*x+d*A,r[2]=u*v+f*w+g*R,r[5]=u*m+f*E+g*C,r[8]=u*p+f*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(s*c-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(yo.makeScale(e,t)),this}rotate(e){return this.premultiply(yo.makeRotation(-e)),this}translate(e,t){return this.premultiply(yo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yo=new He;function yu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tm(){const n=Rr("canvas");return n.style.display="block",n}const nh={};function Cr(n){n in nh||(nh[n]=!0,console.warn(n))}function nm(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const ih=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function im(){const n={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rt&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(s.r=Ls(s.r),s.g=Ls(s.g),s.b=Ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?ka:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Cr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Cr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Fs]:{primaries:e,whitePoint:i,transfer:ka,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),n}const et=im();function Jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ls(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let es;class sm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{es===void 0&&(es=Rr("canvas")),es.width=e.width,es.height=e.height;const s=es.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=es}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Jn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Jn(t[i]/255)*255):t[i]=Jn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rm=0;class Lc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Nr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wo(s[a].image)):r.push(wo(s[a]))}else r=wo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let am=0;const Mo=new O;class kt extends Ws{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=Ni,s=Ni,r=an,a=Fi,o=Mn,l=Qn,c=kt.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Nr(),this.name="",this.source=new Lc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Mo).x}get height(){return this.source.getSize(Mo).y}get depth(){return this.source.getSize(Mo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Da:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case Il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Da:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case Il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=uu;kt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,s=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,x=(f+1)/2,R=(p+1)/2,C=(h+u)/4,A=(d+v)/4,k=(g+m)/4;return E>x&&E>R?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=C/i,r=A/i):x>R?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=C/s,r=k/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=A/r,s=k/r),this.set(i,s,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-v)/w,this.z=(u-h)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class om extends Ws{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new kt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Lc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends om{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class wu extends kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lm extends kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $i{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$r.copy(i.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),Xr.subVectors(this.max,tr),ts.subVectors(e.a,tr),ns.subVectors(e.b,tr),is.subVectors(e.c,tr),ii.subVectors(ns,ts),si.subVectors(is,ns),Mi.subVectors(ts,is);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-Mi.z,Mi.y,ii.z,0,-ii.x,si.z,0,-si.x,Mi.z,0,-Mi.x,-ii.y,ii.x,0,-si.y,si.x,0,-Mi.y,Mi.x,0];return!So(t,ts,ns,is,Xr)||(t=[1,0,0,0,1,0,0,0,1],!So(t,ts,ns,is,Xr))?!1:(qr.crossVectors(ii,si),t=[qr.x,qr.y,qr.z],So(t,ts,ns,is,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bn=[new O,new O,new O,new O,new O,new O,new O,new O],_n=new O,$r=new $i,ts=new O,ns=new O,is=new O,ii=new O,si=new O,Mi=new O,tr=new O,Xr=new O,qr=new O,Si=new O;function So(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Si.fromArray(n,r);const o=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),l=e.dot(Si),c=t.dot(Si),h=i.dot(Si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const cm=new $i,nr=new O,Eo=new O;class Fr{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):cm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);const t=nr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(nr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(Eo)),this.expandByPoint(nr.copy(e.center).sub(Eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const zn=new O,To=new O,Yr=new O,ri=new O,Ao=new O,jr=new O,Ro=new O;class hm{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){To.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(To);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Yr),o=ri.dot(this.direction),l=-ri.dot(Yr),c=ri.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(To).addScaledVector(Yr,u),f}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),s=zn.dot(zn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,s,r){Ao.subVectors(t,e),jr.subVectors(i,e),Ro.crossVectors(Ao,jr);let a=this.direction.dot(Ro),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,e);const l=o*this.direction.dot(jr.crossVectors(ri,jr));if(l<0)return null;const c=o*this.direction.dot(Ao.cross(ri));if(c<0||l+c>a)return null;const h=-o*ri.dot(Ro);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,s,r,a,o,l,c,h,d,u,f,g,v,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,d,u,f,g,v,m)}set(e,t,i,s,r,a,o,l,c,h,d,u,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ss.setFromMatrixColumn(e,0).length(),r=1/ss.setFromMatrixColumn(e,1).length(),a=1/ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,g=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,v=c*d;t[0]=u+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,v=c*d;t[0]=u-v*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,g=o*h,v=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-v*d}else if(e.order==="XZY"){const u=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dm,e,um)}lookAt(e,t,i){const s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ai.crossVectors(i,nn),ai.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ai.crossVectors(i,nn)),ai.normalize(),Kr.crossVectors(nn,ai),s[0]=ai.x,s[4]=Kr.x,s[8]=nn.x,s[1]=ai.y,s[5]=Kr.y,s[9]=nn.y,s[2]=ai.z,s[6]=Kr.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],w=i[3],E=i[7],x=i[11],R=i[15],C=s[0],A=s[4],k=s[8],M=s[12],y=s[1],L=s[5],D=s[9],B=s[13],G=s[2],Y=s[6],X=s[10],se=s[14],z=s[3],ce=s[7],ue=s[11],ge=s[15];return r[0]=a*C+o*y+l*G+c*z,r[4]=a*A+o*L+l*Y+c*ce,r[8]=a*k+o*D+l*X+c*ue,r[12]=a*M+o*B+l*se+c*ge,r[1]=h*C+d*y+u*G+f*z,r[5]=h*A+d*L+u*Y+f*ce,r[9]=h*k+d*D+u*X+f*ue,r[13]=h*M+d*B+u*se+f*ge,r[2]=g*C+v*y+m*G+p*z,r[6]=g*A+v*L+m*Y+p*ce,r[10]=g*k+v*D+m*X+p*ue,r[14]=g*M+v*B+m*se+p*ge,r[3]=w*C+E*y+x*G+R*z,r[7]=w*A+E*L+x*Y+R*ce,r[11]=w*k+E*D+x*X+R*ue,r[15]=w*M+E*B+x*se+R*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*o*u+i*c*u+s*o*f-i*l*f)+v*(+t*l*f-t*c*u+r*a*u-s*a*f+s*c*h-r*l*h)+m*(+t*c*d-t*o*f-r*a*d+i*a*f+r*o*h-i*c*h)+p*(-s*o*h-t*l*d+t*o*u+s*a*d-i*a*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],w=d*m*c-v*u*c+v*l*f-o*m*f-d*l*p+o*u*p,E=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,x=h*v*c-g*d*c+g*o*f-a*v*f-h*o*p+a*d*p,R=g*d*l-h*v*l-g*o*u+a*v*u+h*o*m-a*d*m,C=t*w+i*E+s*x+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=w*A,e[1]=(v*u*r-d*m*r-v*s*f+i*m*f+d*s*p-i*u*p)*A,e[2]=(o*m*r-v*l*r+v*s*c-i*m*c-o*s*p+i*l*p)*A,e[3]=(d*l*r-o*u*r-d*s*c+i*u*c+o*s*f-i*l*f)*A,e[4]=E*A,e[5]=(h*m*r-g*u*r+g*s*f-t*m*f-h*s*p+t*u*p)*A,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*A,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*f+t*l*f)*A,e[8]=x*A,e[9]=(g*d*r-h*v*r-g*i*f+t*v*f+h*i*p-t*d*p)*A,e[10]=(a*v*r-g*o*r+g*i*c-t*v*c-a*i*p+t*o*p)*A,e[11]=(h*o*r-a*d*r-h*i*c+t*d*c+a*i*f-t*o*f)*A,e[12]=R*A,e[13]=(h*v*s-g*d*s+g*i*u-t*v*u-h*i*m+t*d*m)*A,e[14]=(g*o*s-a*v*s-g*i*l+t*v*l+a*i*m-t*o*m)*A,e[15]=(a*d*s-h*o*s+h*i*l-t*d*l-a*i*u+t*o*u)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,v=a*h,m=a*d,p=o*d,w=l*c,E=l*h,x=l*d,R=i.x,C=i.y,A=i.z;return s[0]=(1-(v+p))*R,s[1]=(f+x)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(f-x)*C,s[5]=(1-(u+p))*C,s[6]=(m+w)*C,s[7]=0,s[8]=(g+E)*A,s[9]=(m-w)*A,s[10]=(1-(u+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ss.set(s[0],s[1],s[2]).length();const a=ss.set(s[4],s[5],s[6]).length(),o=ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],xn.copy(this);const c=1/r,h=1/a,d=1/o;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=d,xn.elements[9]*=d,xn.elements[10]*=d,t.setFromRotationMatrix(xn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Ln,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Ln)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ua)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Ln,l=!1){const c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Ln)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Ua)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ss=new O,xn=new ot,dm=new O(0,0,0),um=new O(1,1,1),ai=new O,Kr=new O,nn=new O,rh=new ot,ah=new ni;class ei{constructor(e=0,t=0,i=0,s=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class Mu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fm=0;const oh=new O,rs=new ni,Hn=new ot,Zr=new O,ir=new O,pm=new O,mm=new ni,lh=new O(1,0,0),ch=new O(0,1,0),hh=new O(0,0,1),dh={type:"added"},gm={type:"removed"},as={type:"childadded",child:null},Co={type:"childremoved",child:null};class ln extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new O,t=new ei,i=new ni,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new He}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(lh,e)}rotateY(e){return this.rotateOnAxis(ch,e)}rotateZ(e){return this.rotateOnAxis(hh,e)}translateOnAxis(e,t){return oh.copy(e).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lh,e)}translateY(e){return this.translateOnAxis(ch,e)}translateZ(e){return this.translateOnAxis(hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zr.copy(e):Zr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(ir,Zr,this.up):Hn.lookAt(Zr,ir,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(Hn),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dh),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gm),Co.child=e,this.dispatchEvent(Co),Co.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dh),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,e,pm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,mm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}ln.DEFAULT_UP=new O(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new O,Vn=new O,Po=new O,Gn=new O,os=new O,ls=new O,uh=new O,Io=new O,Lo=new O,Do=new O,ko=new ut,Uo=new ut,No=new ut;class wn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),bn.subVectors(e,t),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){bn.subVectors(s,t),Vn.subVectors(i,t),Po.subVectors(e,t);const a=bn.dot(bn),o=bn.dot(Vn),l=bn.dot(Po),c=Vn.dot(Vn),h=Vn.dot(Po),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(a,Gn.y),l.addScaledVector(o,Gn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return ko.setScalar(0),Uo.setScalar(0),No.setScalar(0),ko.fromBufferAttribute(e,t),Uo.fromBufferAttribute(e,i),No.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ko,r.x),a.addScaledVector(Uo,r.y),a.addScaledVector(No,r.z),a}static isFrontFacing(e,t,i,s){return bn.subVectors(i,t),Vn.subVectors(e,t),bn.cross(Vn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),bn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return wn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;os.subVectors(s,i),ls.subVectors(r,i),Io.subVectors(e,i);const l=os.dot(Io),c=ls.dot(Io);if(l<=0&&c<=0)return t.copy(i);Lo.subVectors(e,s);const h=os.dot(Lo),d=ls.dot(Lo);if(h>=0&&d<=h)return t.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(os,a);Do.subVectors(e,r);const f=os.dot(Do),g=ls.dot(Do);if(g>=0&&f<=g)return t.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ls,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return uh.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(uh,o);const p=1/(m+v+u);return a=v*p,o=u*p,t.copy(i).addScaledVector(os,a).addScaledVector(ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function Fo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=et.workingColorSpace){if(e=em(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Fo(a,r,e+1/3),this.g=Fo(a,r,e),this.b=Fo(a,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=Ct){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const i=Su[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return et.workingToColorSpace(Nt.copy(this),e),Math.round(je(Nt.r*255,0,255))*65536+Math.round(je(Nt.g*255,0,255))*256+Math.round(je(Nt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Nt.copy(this),t);const i=Nt.r,s=Nt.g,r=Nt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Ct){et.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,s=Nt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(Jr);const i=xo(oi.h,Jr.h,t),s=xo(oi.s,Jr.s,t),r=xo(oi.l,Jr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Ke;Ke.NAMES=Su;let vm=0;class Za extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Nr(),this.name="",this.type="Material",this.blending=zi,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=yl,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bl&&(i.blendSrc=this.blendSrc),this.blendDst!==yl&&(i.blendDst=this.blendDst),this.blendEquation!==Di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zt extends Za{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new O,Qr=new tt;let _m=0;class Sn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_m++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=er(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=er(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=er(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=er(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),s=Yt(s,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qc&&(e.usage=this.usage),e}}class Eu extends Sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Tu extends Sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Hi extends Sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let xm=0;const un=new ot,Oo=new ln,cs=new O,sn=new $i,sr=new $i,Et=new O;class Xi extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yu(e)?Tu:Eu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new He().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return Oo.lookAt(e),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Hi(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(sn.min,sr.min),sn.expandByPoint(Et),Et.addVectors(sn.max,sr.max),sn.expandByPoint(Et)):(sn.expandByPoint(sr.min),sn.expandByPoint(sr.max))}sn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Et.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Et));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Et.fromBufferAttribute(o,c),l&&(cs.fromBufferAttribute(e,c),Et.add(cs)),s=Math.max(s,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let k=0;k<i.count;k++)o[k]=new O,l[k]=new O;const c=new O,h=new O,d=new O,u=new tt,f=new tt,g=new tt,v=new O,m=new O;function p(k,M,y){c.fromBufferAttribute(i,k),h.fromBufferAttribute(i,M),d.fromBufferAttribute(i,y),u.fromBufferAttribute(r,k),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[k].add(v),o[M].add(v),o[y].add(v),l[k].add(m),l[M].add(m),l[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let k=0,M=w.length;k<M;++k){const y=w[k],L=y.start,D=y.count;for(let B=L,G=L+D;B<G;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const E=new O,x=new O,R=new O,C=new O;function A(k){R.fromBufferAttribute(s,k),C.copy(R);const M=o[k];E.copy(M),E.sub(R.multiplyScalar(R.dot(M))).normalize(),x.crossVectors(C,M);const L=x.dot(l[k])<0?-1:1;a.setXYZW(k,E.x,E.y,E.z,L)}for(let k=0,M=w.length;k<M;++k){const y=w[k],L=y.start,D=y.count;for(let B=L,G=L+D;B<G;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,d=new O;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Sn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xi,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fh=new ot,Ei=new hm,ea=new Fr,ph=new O,ta=new O,na=new O,ia=new O,Bo=new O,sa=new O,mh=new O,ra=new O;class Gt extends ln{constructor(e=new Xi,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){sa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Bo.fromBufferAttribute(d,e),a?sa.addScaledVector(Bo,h):sa.addScaledVector(Bo.sub(t),h))}t.add(sa)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ea.copy(i.boundingSphere),ea.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!(ea.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(ea,ph)===null||Ei.origin.distanceToSquared(ph)>(e.far-e.near)**2))&&(fh.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(fh),!(i.boundingBox!==null&&Ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,R=E;x<R;x+=3){const C=o.getX(x),A=o.getX(x+1),k=o.getX(x+2);s=aa(this,p,e,i,c,h,d,C,A,k),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const w=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);s=aa(this,a,e,i,c,h,d,w,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,R=E;x<R;x+=3){const C=x,A=x+1,k=x+2;s=aa(this,p,e,i,c,h,d,C,A,k),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const w=m,E=m+1,x=m+2;s=aa(this,a,e,i,c,h,d,w,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function bm(n,e,t,i,s,r,a,o){let l;if(e.side===Qt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===gi,o),l===null)return null;ra.copy(o),ra.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ra);return c<t.near||c>t.far?null:{distance:c,point:ra.clone(),object:n}}function aa(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,ta),n.getVertexPosition(l,na),n.getVertexPosition(c,ia);const h=bm(n,e,t,i,ta,na,ia,mh);if(h){const d=new O;wn.getBarycoord(mh,ta,na,ia,d),s&&(h.uv=wn.getInterpolatedAttribute(s,o,l,c,d,new tt)),r&&(h.uv1=wn.getInterpolatedAttribute(r,o,l,c,d,new tt)),a&&(h.normal=wn.getInterpolatedAttribute(a,o,l,c,d,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new O,materialIndex:0};wn.getNormal(ta,na,ia,u.normal),h.face=u,h.barycoord=d}return h}class Or extends Xi{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Hi(c,3)),this.setAttribute("normal",new Hi(h,3)),this.setAttribute("uv",new Hi(d,2));function g(v,m,p,w,E,x,R,C,A,k,M){const y=x/A,L=R/k,D=x/2,B=R/2,G=C/2,Y=A+1,X=k+1;let se=0,z=0;const ce=new O;for(let ue=0;ue<X;ue++){const ge=ue*L-B;for(let Ue=0;Ue<Y;Ue++){const De=Ue*y-D;ce[v]=De*w,ce[m]=ge*E,ce[p]=G,c.push(ce.x,ce.y,ce.z),ce[v]=0,ce[m]=0,ce[p]=C>0?1:-1,h.push(ce.x,ce.y,ce.z),d.push(Ue/A),d.push(1-ue/k),se+=1}}for(let ue=0;ue<k;ue++)for(let ge=0;ge<A;ge++){const Ue=u+ge+Y*ue,De=u+ge+Y*(ue+1),$e=u+(ge+1)+Y*(ue+1),Je=u+(ge+1)+Y*ue;l.push(Ue,De,Je),l.push(De,$e,Je),z+=6}o.addGroup(f,z,M),f+=z,u+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ht(n){const e={};for(let t=0;t<n.length;t++){const i=Os(n[t]);for(const s in i)e[s]=i[s]}return e}function ym(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Au(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const wm={clone:Os,merge:Ht};var Mm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Za{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mm,this.fragmentShader=Sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=ym(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ru extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new O,gh=new tt,vh=new tt;class yn extends Ru{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ac*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ac*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,gh,vh),t.subVectors(vh,gh)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_o*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hs=-90,ds=1;class Em extends ln{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new yn(hs,ds,e,t);s.layers=this.layers,this.add(s);const r=new yn(hs,ds,e,t);r.layers=this.layers,this.add(r);const a=new yn(hs,ds,e,t);a.layers=this.layers,this.add(a);const o=new yn(hs,ds,e,t);o.layers=this.layers,this.add(o);const l=new yn(hs,ds,e,t);l.layers=this.layers,this.add(l);const c=new yn(hs,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Cu extends kt{constructor(e=[],t=Us,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tm extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Cu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Or(5,5,5),r=new vi({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:fi});r.uniforms.tEquirect.value=t;const a=new Gt(s,r),o=t.minFilter;return t.minFilter===Fi&&(t.minFilter=an),new Em(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class oa extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Am={type:"move"};class zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Am)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new oa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Rm extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Dc extends kt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=on,h=on,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pn extends Sn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const us=new ot,_h=new ot,la=[],xh=new $i,Cm=new ot,rr=new Gt,ar=new Fr;class Bs extends Gt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Cm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,us),xh.copy(e.boundingBox).applyMatrix4(us),this.boundingBox.union(xh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,us),ar.copy(e.boundingSphere).applyMatrix4(us),this.boundingSphere.union(ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(i),e.ray.intersectsSphere(ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,us),_h.multiplyMatrices(i,us),rr.matrixWorld=_h,rr.raycast(e,la);for(let a=0,o=la.length;a<o;a++){const l=la[a];l.instanceId=r,l.object=this,t.push(l)}la.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new pn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Dc(new Float32Array(s*this.count),s,this.count,Rc,In));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ho=new O,Pm=new O,Im=new He;class Ii{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ho.subVectors(i,t).cross(Pm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ho),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Im.getNormalMatrix(e),s=this.coplanarPoint(Ho).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Fr,Lm=new tt(.5,.5),ca=new O;class Pu{constructor(e=new Ii,t=new Ii,i=new Ii,s=new Ii,r=new Ii,a=new Ii){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],w=r[12],E=r[13],x=r[14],R=r[15];if(s[0].setComponents(c-a,f-h,p-g,R-w).normalize(),s[1].setComponents(c+a,f+h,p+g,R+w).normalize(),s[2].setComponents(c+o,f+d,p+v,R+E).normalize(),s[3].setComponents(c-o,f-d,p-v,R-E).normalize(),i)s[4].setComponents(l,u,m,x).normalize(),s[5].setComponents(c-l,f-u,p-m,R-x).normalize();else if(s[4].setComponents(c-l,f-u,p-m,R-x).normalize(),t===Ln)s[5].setComponents(c+l,f+u,p+m,R+x).normalize();else if(t===Ua)s[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);const t=Lm.distanceTo(e.center);return Ti.radius=.7071067811865476+t,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ca.x=s.normal.x>0?e.max.x:e.min.x,ca.y=s.normal.y>0?e.max.y:e.min.y,ca.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kc extends kt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Iu extends kt{constructor(e,t,i=Gi,s,r,a,o=on,l=on,c,h=Tr,d=1){if(h!==Tr&&h!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lu extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cn extends Xi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const w=p*u-a;for(let E=0;E<c;E++){const x=E*d-r;g.push(x,-w,0),v.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){const E=w+c*p,x=w+c*(p+1),R=w+1+c*(p+1),C=w+1+c*p;f.push(E,x,C),f.push(x,R,C)}this.setIndex(f),this.setAttribute("position",new Hi(g,3)),this.setAttribute("normal",new Hi(v,3)),this.setAttribute("uv",new Hi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Dm extends Za{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class km extends Za{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Um{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Nm=new Um;class Uc{constructor(e){this.manager=e!==void 0?e:Nm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Uc.DEFAULT_MATERIAL_NAME="__DEFAULT";const fs=new WeakMap;class Fm extends Uc{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Vo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=fs.get(a);d===void 0&&(d=[],fs.set(a,d)),d.push({onLoad:t,onError:s})}return a}const o=Rr("img");function l(){h(),t&&t(this);const d=fs.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}fs.delete(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),Vo.remove(`image:${e}`);const u=fs.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(d)}fs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Vo.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class oc extends Uc{constructor(e){super(e)}load(e,t,i,s){const r=new kt,a=new Fm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Du extends Ru{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Om extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function bh(n,e,t,i){const s=Bm(i);switch(t){case vu:return n*e;case Rc:return n*e/s.components*s.byteLength;case Cc:return n*e/s.components*s.byteLength;case xu:return n*e*2/s.components*s.byteLength;case Pc:return n*e*2/s.components*s.byteLength;case _u:return n*e*3/s.components*s.byteLength;case Mn:return n*e*4/s.components*s.byteLength;case Ic:return n*e*4/s.components*s.byteLength;case Ma:case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ea:case Ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dl:case Ul:return Math.max(n,16)*Math.max(e,8)/4;case Ll:case kl:return Math.max(n,8)*Math.max(e,8)/2;case Nl:case Fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case $l:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ql:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case jl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ql:case ec:case tc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case nc:case ic:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sc:case rc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bm(n){switch(n){case Qn:case fu:return{byteLength:1,components:1};case Sr:case pu:case Ur:return{byteLength:2,components:1};case Tc:case Ac:return{byteLength:2,components:4};case Gi:case Ec:case In:return{byteLength:4,components:1};case mu:case gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ku(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function zm(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$m=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Km=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,e0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,t0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,h0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,d0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,u0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v0="gl_FragColor = linearToOutputTexel( gl_FragColor );",_0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,w0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,S0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,C0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,D0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,k0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,B0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,z0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,H0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,V0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,K0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ng=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_g=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Eg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ag=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ug=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ev=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,av=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ov=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_v=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Hm,alphahash_pars_fragment:Vm,alphamap_fragment:Gm,alphamap_pars_fragment:Wm,alphatest_fragment:$m,alphatest_pars_fragment:Xm,aomap_fragment:qm,aomap_pars_fragment:Ym,batching_pars_vertex:jm,batching_vertex:Km,begin_vertex:Zm,beginnormal_vertex:Jm,bsdfs:Qm,iridescence_fragment:e0,bumpmap_pars_fragment:t0,clipping_planes_fragment:n0,clipping_planes_pars_fragment:i0,clipping_planes_pars_vertex:s0,clipping_planes_vertex:r0,color_fragment:a0,color_pars_fragment:o0,color_pars_vertex:l0,color_vertex:c0,common:h0,cube_uv_reflection_fragment:d0,defaultnormal_vertex:u0,displacementmap_pars_vertex:f0,displacementmap_vertex:p0,emissivemap_fragment:m0,emissivemap_pars_fragment:g0,colorspace_fragment:v0,colorspace_pars_fragment:_0,envmap_fragment:x0,envmap_common_pars_fragment:b0,envmap_pars_fragment:y0,envmap_pars_vertex:w0,envmap_physical_pars_fragment:D0,envmap_vertex:M0,fog_vertex:S0,fog_pars_vertex:E0,fog_fragment:T0,fog_pars_fragment:A0,gradientmap_pars_fragment:R0,lightmap_pars_fragment:C0,lights_lambert_fragment:P0,lights_lambert_pars_fragment:I0,lights_pars_begin:L0,lights_toon_fragment:k0,lights_toon_pars_fragment:U0,lights_phong_fragment:N0,lights_phong_pars_fragment:F0,lights_physical_fragment:O0,lights_physical_pars_fragment:B0,lights_fragment_begin:z0,lights_fragment_maps:H0,lights_fragment_end:V0,logdepthbuf_fragment:G0,logdepthbuf_pars_fragment:W0,logdepthbuf_pars_vertex:$0,logdepthbuf_vertex:X0,map_fragment:q0,map_pars_fragment:Y0,map_particle_fragment:j0,map_particle_pars_fragment:K0,metalnessmap_fragment:Z0,metalnessmap_pars_fragment:J0,morphinstance_vertex:Q0,morphcolor_vertex:eg,morphnormal_vertex:tg,morphtarget_pars_vertex:ng,morphtarget_vertex:ig,normal_fragment_begin:sg,normal_fragment_maps:rg,normal_pars_fragment:ag,normal_pars_vertex:og,normal_vertex:lg,normalmap_pars_fragment:cg,clearcoat_normal_fragment_begin:hg,clearcoat_normal_fragment_maps:dg,clearcoat_pars_fragment:ug,iridescence_pars_fragment:fg,opaque_fragment:pg,packing:mg,premultiplied_alpha_fragment:gg,project_vertex:vg,dithering_fragment:_g,dithering_pars_fragment:xg,roughnessmap_fragment:bg,roughnessmap_pars_fragment:yg,shadowmap_pars_fragment:wg,shadowmap_pars_vertex:Mg,shadowmap_vertex:Sg,shadowmask_pars_fragment:Eg,skinbase_vertex:Tg,skinning_pars_vertex:Ag,skinning_vertex:Rg,skinnormal_vertex:Cg,specularmap_fragment:Pg,specularmap_pars_fragment:Ig,tonemapping_fragment:Lg,tonemapping_pars_fragment:Dg,transmission_fragment:kg,transmission_pars_fragment:Ug,uv_pars_fragment:Ng,uv_pars_vertex:Fg,uv_vertex:Og,worldpos_vertex:Bg,background_vert:zg,background_frag:Hg,backgroundCube_vert:Vg,backgroundCube_frag:Gg,cube_vert:Wg,cube_frag:$g,depth_vert:Xg,depth_frag:qg,distanceRGBA_vert:Yg,distanceRGBA_frag:jg,equirect_vert:Kg,equirect_frag:Zg,linedashed_vert:Jg,linedashed_frag:Qg,meshbasic_vert:ev,meshbasic_frag:tv,meshlambert_vert:nv,meshlambert_frag:iv,meshmatcap_vert:sv,meshmatcap_frag:rv,meshnormal_vert:av,meshnormal_frag:ov,meshphong_vert:lv,meshphong_frag:cv,meshphysical_vert:hv,meshphysical_frag:dv,meshtoon_vert:uv,meshtoon_frag:fv,points_vert:pv,points_frag:mv,shadow_vert:gv,shadow_frag:vv,sprite_vert:_v,sprite_frag:xv},fe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Pn={basic:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ht([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ht([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ht([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ht([fe.points,fe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ht([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ht([fe.common,fe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ht([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ht([fe.sprite,fe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ht([fe.common,fe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ht([fe.lights,fe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Pn.physical={uniforms:Ht([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const ha={r:0,b:0,g:0},Ai=new ei,bv=new ot;function yv(n,e,t,i,s,r,a){const o=new Ke(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?t:e).get(x)),x}function v(E){let x=!1;const R=g(E);R===null?p(o,l):R&&R.isColor&&(p(R,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===Ka)?(h===void 0&&(h=new Gt(new Or(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Os(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ai.copy(x.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bv.makeRotationFromEuler(Ai)),h.material.toneMapped=et.getTransfer(R.colorSpace)!==rt,(d!==R||u!==R.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=R,u=R.version,f=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Gt(new cn(2,2),new vi({name:"BackgroundMaterial",uniforms:Os(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=et.getTransfer(R.colorSpace)!==rt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||u!==R.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=R,u=R.version,f=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,x){E.getRGB(ha,Au(n)),i.buffers.color.setClear(ha.r,ha.g,ha.b,x,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,x=1){o.set(E),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:v,addToRenderList:m,dispose:w}}function wv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(y,L,D,B,G){let Y=!1;const X=d(B,D,L);r!==X&&(r=X,c(r.object)),Y=f(y,B,D,G),Y&&g(y,B,D,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,x(y,L,D,B),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function d(y,L,D){const B=D.wireframe===!0;let G=i[y.id];G===void 0&&(G={},i[y.id]=G);let Y=G[L.id];Y===void 0&&(Y={},G[L.id]=Y);let X=Y[B];return X===void 0&&(X=u(l()),Y[B]=X),X}function u(y){const L=[],D=[],B=[];for(let G=0;G<t;G++)L[G]=0,D[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:B,object:y,attributes:{},index:null}}function f(y,L,D,B){const G=r.attributes,Y=L.attributes;let X=0;const se=D.getAttributes();for(const z in se)if(se[z].location>=0){const ue=G[z];let ge=Y[z];if(ge===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),ue===void 0||ue.attribute!==ge||ge&&ue.data!==ge.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function g(y,L,D,B){const G={},Y=L.attributes;let X=0;const se=D.getAttributes();for(const z in se)if(se[z].location>=0){let ue=Y[z];ue===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor));const ge={};ge.attribute=ue,ue&&ue.data&&(ge.data=ue.data),G[z]=ge,X++}r.attributes=G,r.attributesNum=X,r.index=B}function v(){const y=r.newAttributes;for(let L=0,D=y.length;L<D;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const D=r.newAttributes,B=r.enabledAttributes,G=r.attributeDivisors;D[y]=1,B[y]===0&&(n.enableVertexAttribArray(y),B[y]=1),G[y]!==L&&(n.vertexAttribDivisor(y,L),G[y]=L)}function w(){const y=r.newAttributes,L=r.enabledAttributes;for(let D=0,B=L.length;D<B;D++)L[D]!==y[D]&&(n.disableVertexAttribArray(D),L[D]=0)}function E(y,L,D,B,G,Y,X){X===!0?n.vertexAttribIPointer(y,L,D,G,Y):n.vertexAttribPointer(y,L,D,B,G,Y)}function x(y,L,D,B){v();const G=B.attributes,Y=D.getAttributes(),X=L.defaultAttributeValues;for(const se in Y){const z=Y[se];if(z.location>=0){let ce=G[se];if(ce===void 0&&(se==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),se==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor)),ce!==void 0){const ue=ce.normalized,ge=ce.itemSize,Ue=e.get(ce);if(Ue===void 0)continue;const De=Ue.buffer,$e=Ue.type,Je=Ue.bytesPerElement,Q=$e===n.INT||$e===n.UNSIGNED_INT||ce.gpuType===Ec;if(ce.isInterleavedBufferAttribute){const ie=ce.data,ye=ie.stride,Re=ce.offset;if(ie.isInstancedInterleavedBuffer){for(let ve=0;ve<z.locationSize;ve++)p(z.location+ve,ie.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ve=0;ve<z.locationSize;ve++)m(z.location+ve);n.bindBuffer(n.ARRAY_BUFFER,De);for(let ve=0;ve<z.locationSize;ve++)E(z.location+ve,ge/z.locationSize,$e,ue,ye*Je,(Re+ge/z.locationSize*ve)*Je,Q)}else{if(ce.isInstancedBufferAttribute){for(let ie=0;ie<z.locationSize;ie++)p(z.location+ie,ce.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ie=0;ie<z.locationSize;ie++)m(z.location+ie);n.bindBuffer(n.ARRAY_BUFFER,De);for(let ie=0;ie<z.locationSize;ie++)E(z.location+ie,ge/z.locationSize,$e,ue,ge*Je,ge/z.locationSize*ie*Je,Q)}}else if(X!==void 0){const ue=X[se];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(z.location,ue);break;case 3:n.vertexAttrib3fv(z.location,ue);break;case 4:n.vertexAttrib4fv(z.location,ue);break;default:n.vertexAttrib1fv(z.location,ue)}}}}w()}function R(){k();for(const y in i){const L=i[y];for(const D in L){const B=L[D];for(const G in B)h(B[G].object),delete B[G];delete L[D]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const L=i[y.id];for(const D in L){const B=L[D];for(const G in B)h(B[G].object),delete B[G];delete L[D]}delete i[y.id]}function A(y){for(const L in i){const D=i[L];if(D[y.id]===void 0)continue;const B=D[y.id];for(const G in B)h(B[G].object),delete B[G];delete D[y.id]}}function k(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:k,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function Mv(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,i,1)}function l(c,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*u[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Sv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Mn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const k=A===Ur&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Qn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==In&&!k)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:R,maxSamples:C}}function Ev(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Ii,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const w=r?0:i,E=w*4;let x=p.clippingState||null;l.value=x,x=h(g,u,E,f);for(let R=0;R!==E;++R)x[R]=t[R];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=f;E!==v;++E,x+=4)a.copy(d[E]).applyMatrix4(w,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Tv(n){let e=new WeakMap;function t(a,o){return o===Cl?a.mapping=Us:o===Pl&&(a.mapping=Ns),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Cl||o===Pl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Tm(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Cs=4,yh=[.125,.215,.35,.446,.526,.582],ki=20,Go=new Du,wh=new Ke;let Wo=null,$o=0,Xo=0,qo=!1;const Li=(1+Math.sqrt(5))/2,ps=1/Li,Mh=[new O(-Li,ps,0),new O(Li,ps,0),new O(-ps,0,Li),new O(ps,0,Li),new O(0,Li,-ps),new O(0,Li,ps),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Av=new O;class Sh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Av}=r;Wo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wo,$o,Xo),this._renderer.xr.enabled=qo,e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:Ur,format:Mn,colorSpace:Fs,depthBuffer:!1},s=Eh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rv(r)),this._blurMaterial=Cv(r,e,t)}return s}_compileMaterial(e){const t=new Gt(this._lodPlanes[0],e);this._renderer.compile(t,Go)}_sceneToCubeUV(e,t,i,s,r){const l=new yn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(wh),d.toneMapping=Zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const v=new Zt({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),m=new Gt(new Or,v);let p=!1;const w=e.background;w?w.isColor&&(v.color.copy(w),e.background=null,p=!0):(v.color.copy(wh),p=!0);for(let E=0;E<6;E++){const x=E%3;x===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):x===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const R=this._cubeSize;da(s,x*R,E>2?R:0,R,R),d.setRenderTarget(s),p&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Us||e.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Th());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Gt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;da(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Go)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Mh[(s-r-1)%Mh.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Gt(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ki-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):ki;m>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const p=[];let w=0;for(let A=0;A<ki;++A){const k=A/v,M=Math.exp(-k*k/2);p.push(M),A===0?w+=M:A<m&&(w+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/w;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:E}=this;u.dTheta.value=g,u.mipInt.value=E-i;const x=this._sizeLods[s],R=3*x*(s>E-Cs?s-E+Cs:0),C=4*(this._cubeSize-x);da(t,R,C,3*x,2*x),l.setRenderTarget(t),l.render(d,Go)}}function Rv(n){const e=[],t=[],i=[];let s=n;const r=n-Cs+1+yh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Cs?l=yh[a-n+Cs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,p=1,w=new Float32Array(v*g*f),E=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let C=0;C<f;C++){const A=C%3*2/3-1,k=C>2?0:-1,M=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];w.set(M,v*g*C),E.set(u,m*g*C);const y=[C,C,C,C,C,C];x.set(y,p*g*C)}const R=new Xi;R.setAttribute("position",new Sn(w,v)),R.setAttribute("uv",new Sn(E,m)),R.setAttribute("faceIndex",new Sn(x,p)),e.push(R),s>Cs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Eh(n,e,t){const i=new Wi(n,e,t);return i.texture.mapping=Ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function da(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Cv(n,e,t){const i=new Float32Array(ki),s=new O(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Th(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Ah(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Nc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Cl||l===Pl,h=l===Us||l===Ns;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Sh(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Sh(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Iv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Cr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Lv(n,e,t,i){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],n.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const w=f.array;v=f.version;for(let E=0,x=w.length;E<x;E+=3){const R=w[E+0],C=w[E+1],A=w[E+2];u.push(R,C,C,A,A,R)}}else if(g!==void 0){const w=g.array;v=g.version;for(let E=0,x=w.length/3-1;E<x;E+=3){const R=E+0,C=E+1,A=E+2;u.push(R,C,C,A,A,R)}}else return;const m=new(yu(u)?Tu:Eu)(u,1);m.version=v;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Dv(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*a),t.update(f,i,1)}function c(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,u*a,g),t.update(f,i,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(u,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,v,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*v[w];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function kv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Uv(n,e,t){const i=new WeakMap,s=new ut;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let M=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let E=0;f===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let x=o.attributes.position.count*E,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const C=new Float32Array(x*R*4*d),A=new wu(C,x,R,d);A.type=In,A.needsUpdate=!0;const k=E*4;for(let y=0;y<d;y++){const L=m[y],D=p[y],B=w[y],G=x*R*4*y;for(let Y=0;Y<L.count;Y++){const X=Y*k;f===!0&&(s.fromBufferAttribute(L,Y),C[G+X+0]=s.x,C[G+X+1]=s.y,C[G+X+2]=s.z,C[G+X+3]=0),g===!0&&(s.fromBufferAttribute(D,Y),C[G+X+4]=s.x,C[G+X+5]=s.y,C[G+X+6]=s.z,C[G+X+7]=0),v===!0&&(s.fromBufferAttribute(B,Y),C[G+X+8]=s.x,C[G+X+9]=s.y,C[G+X+10]=s.z,C[G+X+11]=B.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new tt(x,R)},i.set(o,u),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Nv(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Uu=new kt,Rh=new Iu(1,1),Nu=new wu,Fu=new lm,Ou=new Cu,Ch=[],Ph=[],Ih=new Float32Array(16),Lh=new Float32Array(9),Dh=new Float32Array(4);function $s(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ch[s];if(r===void 0&&(r=new Float32Array(s),Ch[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ja(n,e){let t=Ph[e];t===void 0&&(t=new Int32Array(e),Ph[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Fv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function Bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function Hv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;Dh.set(i),n.uniformMatrix2fv(this.addr,!1,Dh),St(t,i)}}function Vv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;Lh.set(i),n.uniformMatrix3fv(this.addr,!1,Lh),St(t,i)}}function Gv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;Ih.set(i),n.uniformMatrix4fv(this.addr,!1,Ih),St(t,i)}}function Wv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $v(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function Xv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function Yv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function Kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function Zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function Jv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Rh.compareFunction=bu,r=Rh):r=Uu,t.setTexture2D(e||r,s)}function Qv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Fu,s)}function e1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ou,s)}function t1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Nu,s)}function n1(n){switch(n){case 5126:return Fv;case 35664:return Ov;case 35665:return Bv;case 35666:return zv;case 35674:return Hv;case 35675:return Vv;case 35676:return Gv;case 5124:case 35670:return Wv;case 35667:case 35671:return $v;case 35668:case 35672:return Xv;case 35669:case 35673:return qv;case 5125:return Yv;case 36294:return jv;case 36295:return Kv;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return e1;case 36289:case 36303:case 36311:case 36292:return t1}}function i1(n,e){n.uniform1fv(this.addr,e)}function s1(n,e){const t=$s(e,this.size,2);n.uniform2fv(this.addr,t)}function r1(n,e){const t=$s(e,this.size,3);n.uniform3fv(this.addr,t)}function a1(n,e){const t=$s(e,this.size,4);n.uniform4fv(this.addr,t)}function o1(n,e){const t=$s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function l1(n,e){const t=$s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function c1(n,e){const t=$s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function h1(n,e){n.uniform1iv(this.addr,e)}function d1(n,e){n.uniform2iv(this.addr,e)}function u1(n,e){n.uniform3iv(this.addr,e)}function f1(n,e){n.uniform4iv(this.addr,e)}function p1(n,e){n.uniform1uiv(this.addr,e)}function m1(n,e){n.uniform2uiv(this.addr,e)}function g1(n,e){n.uniform3uiv(this.addr,e)}function v1(n,e){n.uniform4uiv(this.addr,e)}function _1(n,e,t){const i=this.cache,s=e.length,r=Ja(t,s);Mt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Uu,r[a])}function x1(n,e,t){const i=this.cache,s=e.length,r=Ja(t,s);Mt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Fu,r[a])}function b1(n,e,t){const i=this.cache,s=e.length,r=Ja(t,s);Mt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ou,r[a])}function y1(n,e,t){const i=this.cache,s=e.length,r=Ja(t,s);Mt(i,r)||(n.uniform1iv(this.addr,r),St(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Nu,r[a])}function w1(n){switch(n){case 5126:return i1;case 35664:return s1;case 35665:return r1;case 35666:return a1;case 35674:return o1;case 35675:return l1;case 35676:return c1;case 5124:case 35670:return h1;case 35667:case 35671:return d1;case 35668:case 35672:return u1;case 35669:case 35673:return f1;case 5125:return p1;case 36294:return m1;case 36295:return g1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return _1;case 35679:case 36299:case 36307:return x1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return y1}}class M1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=n1(t.type)}}class S1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=w1(t.type)}}class E1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Yo=/(\w+)(\])?(\[|\.)?/g;function kh(n,e){n.seq.push(e),n.map[e.id]=e}function T1(n,e,t){const i=n.name,s=i.length;for(Yo.lastIndex=0;;){const r=Yo.exec(i),a=Yo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){kh(t,c===void 0?new M1(o,n,e):new S1(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new E1(o),kh(t,d)),t=d}}}class Aa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);T1(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Uh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const A1=37297;let R1=0;function C1(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Nh=new He;function P1(n){et._getMatrix(Nh,et.workingColorSpace,n);const e=`mat3( ${Nh.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case ka:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Fh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+C1(n.getShaderSource(e),o)}else return r}function I1(n,e){const t=P1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function L1(n,e){let t;switch(e){case Up:t="Linear";break;case Np:t="Reinhard";break;case Fp:t="Cineon";break;case Op:t="ACESFilmic";break;case zp:t="AgX";break;case Hp:t="Neutral";break;case Bp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ua=new O;function D1(){et.getLuminanceCoefficients(ua);const n=ua.x.toFixed(4),e=ua.y.toFixed(4),t=ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function U1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function N1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function mr(n){return n!==""}function Oh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const F1=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(n){return n.replace(F1,B1)}const O1=new Map;function B1(n,e){let t=Ge[e];if(t===void 0){const i=O1.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lc(t)}const z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(n){return n.replace(z1,H1)}function H1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function V1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===pp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function G1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Us:case Ns:e="ENVMAP_TYPE_CUBE";break;case Ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function $1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case du:e="ENVMAP_BLENDING_MULTIPLY";break;case Dp:e="ENVMAP_BLENDING_MIX";break;case kp:e="ENVMAP_BLENDING_ADD";break}return e}function X1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function q1(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=V1(t),c=G1(t),h=W1(t),d=$1(t),u=X1(t),f=k1(t),g=U1(r),v=s.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),p.length>0&&(p+=`
`)):(m=[Hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),p=[Hh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Zn?L1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,I1("linearToOutputTexel",t.outputColorSpace),D1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),a=lc(a),a=Oh(a,t),a=Bh(a,t),o=lc(o),o=Oh(o,t),o=Bh(o,t),a=zh(a),o=zh(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=w+m+a,x=w+p+o,R=Uh(s,s.VERTEX_SHADER,E),C=Uh(s,s.FRAGMENT_SHADER,x);s.attachShader(v,R),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(L){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(v)||"",B=s.getShaderInfoLog(R)||"",G=s.getShaderInfoLog(C)||"",Y=D.trim(),X=B.trim(),se=G.trim();let z=!0,ce=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,R,C);else{const ue=Fh(s,R,"vertex"),ge=Fh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Y+`
`+ue+`
`+ge)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(X===""||se==="")&&(ce=!1);ce&&(L.diagnostics={runnable:z,programLog:Y,vertexShader:{log:X,prefix:m},fragmentShader:{log:se,prefix:p}})}s.deleteShader(R),s.deleteShader(C),k=new Aa(s,v),M=N1(s,v)}let k;this.getUniforms=function(){return k===void 0&&A(this),k};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,A1)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=C,this}let Y1=0;class j1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new K1(e),t.set(e,i)),i}}class K1{constructor(e){this.id=Y1++,this.code=e,this.usedTimes=0}}function Z1(n,e,t,i,s,r,a){const o=new Mu,l=new j1,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,L,D,B){const G=D.fog,Y=B.geometry,X=M.isMeshStandardMaterial?D.environment:null,se=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),z=se&&se.mapping===Ka?se.image.height:null,ce=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const ue=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ge=ue!==void 0?ue.length:0;let Ue=0;Y.morphAttributes.position!==void 0&&(Ue=1),Y.morphAttributes.normal!==void 0&&(Ue=2),Y.morphAttributes.color!==void 0&&(Ue=3);let De,$e,Je,Q;if(ce){const ze=Pn[ce];De=ze.vertexShader,$e=ze.fragmentShader}else De=M.vertexShader,$e=M.fragmentShader,l.update(M),Je=l.getVertexShaderID(M),Q=l.getFragmentShaderID(M);const ie=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),Re=B.isInstancedMesh===!0,ve=B.isBatchedMesh===!0,Xe=!!M.map,Ve=!!M.matcap,P=!!se,lt=!!M.aoMap,Fe=!!M.lightMap,Pe=!!M.bumpMap,we=!!M.normalMap,ct=!!M.displacementMap,Me=!!M.emissiveMap,Be=!!M.metalnessMap,xt=!!M.roughnessMap,ft=M.anisotropy>0,T=M.clearcoat>0,_=M.dispersion>0,F=M.iridescence>0,Z=M.sheen>0,ne=M.transmission>0,j=ft&&!!M.anisotropyMap,Ee=T&&!!M.clearcoatMap,he=T&&!!M.clearcoatNormalMap,Se=T&&!!M.clearcoatRoughnessMap,_e=F&&!!M.iridescenceMap,re=F&&!!M.iridescenceThicknessMap,de=Z&&!!M.sheenColorMap,H=Z&&!!M.sheenRoughnessMap,W=!!M.specularMap,q=!!M.specularColorMap,oe=!!M.specularIntensityMap,I=ne&&!!M.transmissionMap,ee=ne&&!!M.thicknessMap,te=!!M.gradientMap,ae=!!M.alphaMap,J=M.alphaTest>0,K=!!M.alphaHash,pe=!!M.extensions;let Ae=Zn;M.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ae=n.toneMapping);const We={shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:De,fragmentShader:$e,defines:M.defines,customVertexShaderID:Je,customFragmentShaderID:Q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ve,batchingColor:ve&&B._colorsTexture!==null,instancing:Re,instancingColor:Re&&B.instanceColor!==null,instancingMorph:Re&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Fs,alphaToCoverage:!!M.alphaToCoverage,map:Xe,matcap:Ve,envMap:P,envMapMode:P&&se.mapping,envMapCubeUVHeight:z,aoMap:lt,lightMap:Fe,bumpMap:Pe,normalMap:we,displacementMap:u&&ct,emissiveMap:Me,normalMapObjectSpace:we&&M.normalMapType===Xp,normalMapTangentSpace:we&&M.normalMapType===$p,metalnessMap:Be,roughnessMap:xt,anisotropy:ft,anisotropyMap:j,clearcoat:T,clearcoatMap:Ee,clearcoatNormalMap:he,clearcoatRoughnessMap:Se,dispersion:_,iridescence:F,iridescenceMap:_e,iridescenceThicknessMap:re,sheen:Z,sheenColorMap:de,sheenRoughnessMap:H,specularMap:W,specularColorMap:q,specularIntensityMap:oe,transmission:ne,transmissionMap:I,thicknessMap:ee,gradientMap:te,opaque:M.transparent===!1&&M.blending===zi&&M.alphaToCoverage===!1,alphaMap:ae,alphaTest:J,alphaHash:K,combine:M.combine,mapUv:Xe&&v(M.map.channel),aoMapUv:lt&&v(M.aoMap.channel),lightMapUv:Fe&&v(M.lightMap.channel),bumpMapUv:Pe&&v(M.bumpMap.channel),normalMapUv:we&&v(M.normalMap.channel),displacementMapUv:ct&&v(M.displacementMap.channel),emissiveMapUv:Me&&v(M.emissiveMap.channel),metalnessMapUv:Be&&v(M.metalnessMap.channel),roughnessMapUv:xt&&v(M.roughnessMap.channel),anisotropyMapUv:j&&v(M.anisotropyMap.channel),clearcoatMapUv:Ee&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:re&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:de&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:H&&v(M.sheenRoughnessMap.channel),specularMapUv:W&&v(M.specularMap.channel),specularColorMapUv:q&&v(M.specularColorMap.channel),specularIntensityMapUv:oe&&v(M.specularIntensityMap.channel),transmissionMapUv:I&&v(M.transmissionMap.channel),thicknessMapUv:ee&&v(M.thicknessMap.channel),alphaMapUv:ae&&v(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(we||ft),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(Xe||ae),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ye,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ue,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Xe&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===rt,decodeVideoTextureEmissive:Me&&M.emissiveMap.isVideoTexture===!0&&et.getTransfer(M.emissiveMap.colorSpace)===rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===fn,flipSided:M.side===Qt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:pe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&M.extensions.multiDraw===!0||ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)y.push(L),y.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(w(y,M),E(y,M),y.push(n.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function w(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function E(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){const y=g[M.type];let L;if(y){const D=Pn[y];L=wm.clone(D.uniforms)}else L=M.uniforms;return L}function R(M,y){let L;for(let D=0,B=h.length;D<B;D++){const G=h[D];if(G.cacheKey===y){L=G,++L.usedTimes;break}}return L===void 0&&(L=new q1(n,y,M,r),h.push(L)),L}function C(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function A(M){l.remove(M)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:C,releaseShaderCache:A,programs:h,dispose:k}}function J1(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Q1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,u,f,g,v,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function o(d,u,f,g,v,m){const p=a(d,u,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,u,f,g,v,m){const p=a(d,u,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||Q1),i.length>1&&i.sort(u||Vh),s.length>1&&s.sort(u||Vh)}function h(){for(let d=e,u=n.length;d<u;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function e_(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Gh,n.set(i,[a])):s>=r.length?(a=new Gh,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function t_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ke};break;case"SpotLight":t={position:new O,direction:new O,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function n_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let i_=0;function s_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function r_(n){const e=new t_,t=n_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const s=new O,r=new ot,a=new ot;function o(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,w=0,E=0,x=0,R=0,C=0,A=0;c.sort(s_);for(let M=0,y=c.length;M<y;M++){const L=c[M],D=L.color,B=L.intensity,G=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=D.r*B,d+=D.g*B,u+=D.b*B;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],B);A++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const se=L.shadow,z=t.get(L);z.shadowIntensity=se.intensity,z.shadowBias=se.bias,z.shadowNormalBias=se.normalBias,z.shadowRadius=se.radius,z.shadowMapSize=se.mapSize,i.directionalShadow[f]=z,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=L.shadow.matrix,w++}i.directional[f]=X,f++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(D).multiplyScalar(B),X.distance=G,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[v]=X;const se=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,se.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[v]=se.matrix,L.castShadow){const z=t.get(L);z.shadowIntensity=se.intensity,z.shadowBias=se.bias,z.shadowNormalBias=se.normalBias,z.shadowRadius=se.radius,z.shadowMapSize=se.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=Y,x++}v++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(D).multiplyScalar(B),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=X,m++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const se=L.shadow,z=t.get(L);z.shadowIntensity=se.intensity,z.shadowBias=se.bias,z.shadowNormalBias=se.normalBias,z.shadowRadius=se.radius,z.shadowMapSize=se.mapSize,z.shadowCameraNear=se.camera.near,z.shadowCameraFar=se.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=L.shadow.matrix,E++}i.point[g]=X,g++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(B),X.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[p]=X,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const k=i.hash;(k.directionalLength!==f||k.pointLength!==g||k.spotLength!==v||k.rectAreaLength!==m||k.hemiLength!==p||k.numDirectionalShadows!==w||k.numPointShadows!==E||k.numSpotShadows!==x||k.numSpotMaps!==R||k.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=x+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,k.directionalLength=f,k.pointLength=g,k.spotLength=v,k.rectAreaLength=m,k.hemiLength=p,k.numDirectionalShadows=w,k.numPointShadows=E,k.numSpotShadows=x,k.numSpotMaps=R,k.numLightProbes=A,i.version=i_++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const E=c[p];if(E.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(E.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const x=i.point[u];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),u++}else if(E.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Wh(n){const e=new r_(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function a_(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Wh(n),e.set(s,[o])):r>=a.length?(o=new Wh(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const o_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function c_(n,e,t){let i=new Pu;const s=new tt,r=new tt,a=new ut,o=new Dm({depthPacking:Wp}),l=new km,c={},h=t.maxTextureSize,d={[gi]:Qt,[Qt]:gi,[fn]:fn},u=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:o_,fragmentShader:l_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Xi;g.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Gt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hu;let p=this.type;this.render=function(C,A,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const M=n.getRenderTarget(),y=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),D=n.state;D.setBlending(fi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const B=p!==$n&&this.type===$n,G=p===$n&&this.type!==$n;for(let Y=0,X=C.length;Y<X;Y++){const se=C[Y],z=se.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ce=z.getFrameExtents();if(s.multiply(ce),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,z.mapSize.y=r.y)),z.map===null||B===!0||G===!0){const ge=this.type!==$n?{minFilter:on,magFilter:on}:{};z.map!==null&&z.map.dispose(),z.map=new Wi(s.x,s.y,ge),z.map.texture.name=se.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const ue=z.getViewportCount();for(let ge=0;ge<ue;ge++){const Ue=z.getViewport(ge);a.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),D.viewport(a),z.updateMatrices(se,ge),i=z.getFrustum(),x(A,k,z.camera,se,this.type)}z.isPointLightShadow!==!0&&this.type===$n&&w(z,k),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,y,L)};function w(C,A){const k=e.update(v);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Wi(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(A,null,k,u,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(A,null,k,f,v,null)}function E(C,A,k,M){let y=null;const L=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)y=L;else if(y=k.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const D=y.uuid,B=A.uuid;let G=c[D];G===void 0&&(G={},c[D]=G);let Y=G[B];Y===void 0&&(Y=y.clone(),G[B]=Y,A.addEventListener("dispose",R)),y=Y}if(y.visible=A.visible,y.wireframe=A.wireframe,M===$n?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:d[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,k.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const D=n.properties.get(y);D.light=k}return y}function x(C,A,k,M,y){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===$n)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);const B=e.update(C),G=C.material;if(Array.isArray(G)){const Y=B.groups;for(let X=0,se=Y.length;X<se;X++){const z=Y[X],ce=G[z.materialIndex];if(ce&&ce.visible){const ue=E(C,ce,M,y);C.onBeforeShadow(n,C,A,k,B,ue,z),n.renderBufferDirect(k,null,B,ue,C,z),C.onAfterShadow(n,C,A,k,B,ue,z)}}}else if(G.visible){const Y=E(C,G,M,y);C.onBeforeShadow(n,C,A,k,B,Y,null),n.renderBufferDirect(k,null,B,Y,C,null),C.onAfterShadow(n,C,A,k,B,Y,null)}}const D=C.children;for(let B=0,G=D.length;B<G;B++)x(D[B],A,k,M,y)}function R(C){C.target.removeEventListener("dispose",R);for(const k in c){const M=c[k],y=C.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const h_={[wl]:Ml,[Sl]:Al,[El]:Rl,[ks]:Tl,[Ml]:wl,[Al]:Sl,[Rl]:El,[Tl]:ks};function d_(n,e){function t(){let I=!1;const ee=new ut;let te=null;const ae=new ut(0,0,0,0);return{setMask:function(J){te!==J&&!I&&(n.colorMask(J,J,J,J),te=J)},setLocked:function(J){I=J},setClear:function(J,K,pe,Ae,We){We===!0&&(J*=Ae,K*=Ae,pe*=Ae),ee.set(J,K,pe,Ae),ae.equals(ee)===!1&&(n.clearColor(J,K,pe,Ae),ae.copy(ee))},reset:function(){I=!1,te=null,ae.set(-1,0,0,0)}}}function i(){let I=!1,ee=!1,te=null,ae=null,J=null;return{setReversed:function(K){if(ee!==K){const pe=e.get("EXT_clip_control");K?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),ee=K;const Ae=J;J=null,this.setClear(Ae)}},getReversed:function(){return ee},setTest:function(K){K?ie(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(K){te!==K&&!I&&(n.depthMask(K),te=K)},setFunc:function(K){if(ee&&(K=h_[K]),ae!==K){switch(K){case wl:n.depthFunc(n.NEVER);break;case Ml:n.depthFunc(n.ALWAYS);break;case Sl:n.depthFunc(n.LESS);break;case ks:n.depthFunc(n.LEQUAL);break;case El:n.depthFunc(n.EQUAL);break;case Tl:n.depthFunc(n.GEQUAL);break;case Al:n.depthFunc(n.GREATER);break;case Rl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=K}},setLocked:function(K){I=K},setClear:function(K){J!==K&&(ee&&(K=1-K),n.clearDepth(K),J=K)},reset:function(){I=!1,te=null,ae=null,J=null,ee=!1}}}function s(){let I=!1,ee=null,te=null,ae=null,J=null,K=null,pe=null,Ae=null,We=null;return{setTest:function(ze){I||(ze?ie(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(ze){ee!==ze&&!I&&(n.stencilMask(ze),ee=ze)},setFunc:function(ze,Ot,vt){(te!==ze||ae!==Ot||J!==vt)&&(n.stencilFunc(ze,Ot,vt),te=ze,ae=Ot,J=vt)},setOp:function(ze,Ot,vt){(K!==ze||pe!==Ot||Ae!==vt)&&(n.stencilOp(ze,Ot,vt),K=ze,pe=Ot,Ae=vt)},setLocked:function(ze){I=ze},setClear:function(ze){We!==ze&&(n.clearStencil(ze),We=ze)},reset:function(){I=!1,ee=null,te=null,ae=null,J=null,K=null,pe=null,Ae=null,We=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,w=null,E=null,x=null,R=null,C=null,A=new Ke(0,0,0),k=0,M=!1,y=null,L=null,D=null,B=null,G=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,se=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(z)[1]),X=se>=1):z.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),X=se>=2);let ce=null,ue={};const ge=n.getParameter(n.SCISSOR_BOX),Ue=n.getParameter(n.VIEWPORT),De=new ut().fromArray(ge),$e=new ut().fromArray(Ue);function Je(I,ee,te,ae){const J=new Uint8Array(4),K=n.createTexture();n.bindTexture(I,K),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pe=0;pe<te;pe++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ee,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(ee+pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return K}const Q={};Q[n.TEXTURE_2D]=Je(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=Je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=Je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=Je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(ks),Pe(!1),we(jc),ie(n.CULL_FACE),lt(fi);function ie(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function ye(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Re(I,ee){return d[I]!==ee?(n.bindFramebuffer(I,ee),d[I]=ee,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ee),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ee),!0):!1}function ve(I,ee){let te=f,ae=!1;if(I){te=u.get(ee),te===void 0&&(te=[],u.set(ee,te));const J=I.textures;if(te.length!==J.length||te[0]!==n.COLOR_ATTACHMENT0){for(let K=0,pe=J.length;K<pe;K++)te[K]=n.COLOR_ATTACHMENT0+K;te.length=J.length,ae=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,ae=!0);ae&&n.drawBuffers(te)}function Xe(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const Ve={[Di]:n.FUNC_ADD,[gp]:n.FUNC_SUBTRACT,[vp]:n.FUNC_REVERSE_SUBTRACT};Ve[_p]=n.MIN,Ve[xp]=n.MAX;const P={[bp]:n.ZERO,[yp]:n.ONE,[wp]:n.SRC_COLOR,[bl]:n.SRC_ALPHA,[Rp]:n.SRC_ALPHA_SATURATE,[Tp]:n.DST_COLOR,[Sp]:n.DST_ALPHA,[Mp]:n.ONE_MINUS_SRC_COLOR,[yl]:n.ONE_MINUS_SRC_ALPHA,[Ap]:n.ONE_MINUS_DST_COLOR,[Ep]:n.ONE_MINUS_DST_ALPHA,[Cp]:n.CONSTANT_COLOR,[Pp]:n.ONE_MINUS_CONSTANT_COLOR,[Ip]:n.CONSTANT_ALPHA,[Lp]:n.ONE_MINUS_CONSTANT_ALPHA};function lt(I,ee,te,ae,J,K,pe,Ae,We,ze){if(I===fi){v===!0&&(ye(n.BLEND),v=!1);return}if(v===!1&&(ie(n.BLEND),v=!0),I!==mp){if(I!==m||ze!==M){if((p!==Di||x!==Di)&&(n.blendEquation(n.FUNC_ADD),p=Di,x=Di),ze)switch(I){case zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mr:n.blendFunc(n.ONE,n.ONE);break;case Kc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Kc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,E=null,R=null,C=null,A.set(0,0,0),k=0,m=I,M=ze}return}J=J||ee,K=K||te,pe=pe||ae,(ee!==p||J!==x)&&(n.blendEquationSeparate(Ve[ee],Ve[J]),p=ee,x=J),(te!==w||ae!==E||K!==R||pe!==C)&&(n.blendFuncSeparate(P[te],P[ae],P[K],P[pe]),w=te,E=ae,R=K,C=pe),(Ae.equals(A)===!1||We!==k)&&(n.blendColor(Ae.r,Ae.g,Ae.b,We),A.copy(Ae),k=We),m=I,M=!1}function Fe(I,ee){I.side===fn?ye(n.CULL_FACE):ie(n.CULL_FACE);let te=I.side===Qt;ee&&(te=!te),Pe(te),I.blending===zi&&I.transparent===!1?lt(fi):lt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const ae=I.stencilWrite;o.setTest(ae),ae&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Me(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(I){y!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),y=I)}function we(I){I!==up?(ie(n.CULL_FACE),I!==L&&(I===jc?n.cullFace(n.BACK):I===fp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),L=I}function ct(I){I!==D&&(X&&n.lineWidth(I),D=I)}function Me(I,ee,te){I?(ie(n.POLYGON_OFFSET_FILL),(B!==ee||G!==te)&&(n.polygonOffset(ee,te),B=ee,G=te)):ye(n.POLYGON_OFFSET_FILL)}function Be(I){I?ie(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function xt(I){I===void 0&&(I=n.TEXTURE0+Y-1),ce!==I&&(n.activeTexture(I),ce=I)}function ft(I,ee,te){te===void 0&&(ce===null?te=n.TEXTURE0+Y-1:te=ce);let ae=ue[te];ae===void 0&&(ae={type:void 0,texture:void 0},ue[te]=ae),(ae.type!==I||ae.texture!==ee)&&(ce!==te&&(n.activeTexture(te),ce=te),n.bindTexture(I,ee||Q[I]),ae.type=I,ae.texture=ee)}function T(){const I=ue[ce];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(I){De.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),De.copy(I))}function H(I){$e.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),$e.copy(I))}function W(I,ee){let te=c.get(ee);te===void 0&&(te=new WeakMap,c.set(ee,te));let ae=te.get(I);ae===void 0&&(ae=n.getUniformBlockIndex(ee,I.name),te.set(I,ae))}function q(I,ee){const ae=c.get(ee).get(I);l.get(ee)!==ae&&(n.uniformBlockBinding(ee,ae,I.__bindingPointIndex),l.set(ee,ae))}function oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ce=null,ue={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,w=null,E=null,x=null,R=null,C=null,A=new Ke(0,0,0),k=0,M=!1,y=null,L=null,D=null,B=null,G=null,De.set(0,0,n.canvas.width,n.canvas.height),$e.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:ye,bindFramebuffer:Re,drawBuffers:ve,useProgram:Xe,setBlending:lt,setMaterial:Fe,setFlipSided:Pe,setCullFace:we,setLineWidth:ct,setPolygonOffset:Me,setScissorTest:Be,activeTexture:xt,bindTexture:ft,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:_e,texImage3D:re,updateUBOMapping:W,uniformBlockBinding:q,texStorage2D:he,texStorage3D:Se,texSubImage2D:Z,texSubImage3D:ne,compressedTexSubImage2D:j,compressedTexSubImage3D:Ee,scissor:de,viewport:H,reset:oe}}function u_(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return f?new OffscreenCanvas(T,_):Rr("canvas")}function v(T,_,F){let Z=1;const ne=ft(T);if((ne.width>F||ne.height>F)&&(Z=F/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor(Z*ne.width),Ee=Math.floor(Z*ne.height);d===void 0&&(d=g(j,Ee));const he=_?g(j,Ee):d;return he.width=j,he.height=Ee,he.getContext("2d").drawImage(T,0,0,j,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+j+"x"+Ee+")."),he}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(T,_,F,Z,ne=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=_;if(_===n.RED&&(F===n.FLOAT&&(j=n.R32F),F===n.HALF_FLOAT&&(j=n.R16F),F===n.UNSIGNED_BYTE&&(j=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.R8UI),F===n.UNSIGNED_SHORT&&(j=n.R16UI),F===n.UNSIGNED_INT&&(j=n.R32UI),F===n.BYTE&&(j=n.R8I),F===n.SHORT&&(j=n.R16I),F===n.INT&&(j=n.R32I)),_===n.RG&&(F===n.FLOAT&&(j=n.RG32F),F===n.HALF_FLOAT&&(j=n.RG16F),F===n.UNSIGNED_BYTE&&(j=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RG8UI),F===n.UNSIGNED_SHORT&&(j=n.RG16UI),F===n.UNSIGNED_INT&&(j=n.RG32UI),F===n.BYTE&&(j=n.RG8I),F===n.SHORT&&(j=n.RG16I),F===n.INT&&(j=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGB8UI),F===n.UNSIGNED_SHORT&&(j=n.RGB16UI),F===n.UNSIGNED_INT&&(j=n.RGB32UI),F===n.BYTE&&(j=n.RGB8I),F===n.SHORT&&(j=n.RGB16I),F===n.INT&&(j=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),F===n.UNSIGNED_INT&&(j=n.RGBA32UI),F===n.BYTE&&(j=n.RGBA8I),F===n.SHORT&&(j=n.RGBA16I),F===n.INT&&(j=n.RGBA32I)),_===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),_===n.RGBA){const Ee=ne?ka:et.getTransfer(Z);F===n.FLOAT&&(j=n.RGBA32F),F===n.HALF_FLOAT&&(j=n.RGBA16F),F===n.UNSIGNED_BYTE&&(j=Ee===rt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(T,_){let F;return T?_===null||_===Gi||_===Er?F=n.DEPTH24_STENCIL8:_===In?F=n.DEPTH32F_STENCIL8:_===Sr&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Gi||_===Er?F=n.DEPTH_COMPONENT24:_===In?F=n.DEPTH_COMPONENT32F:_===Sr&&(F=n.DEPTH_COMPONENT16),F}function R(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==on&&T.minFilter!==an?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function C(T){const _=T.target;_.removeEventListener("dispose",C),k(_),_.isVideoTexture&&h.delete(_)}function A(T){const _=T.target;_.removeEventListener("dispose",A),y(_)}function k(T){const _=i.get(T);if(_.__webglInit===void 0)return;const F=T.source,Z=u.get(F);if(Z){const ne=Z[_.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(T),Object.keys(Z).length===0&&u.delete(F)}i.remove(T)}function M(T){const _=i.get(T);n.deleteTexture(_.__webglTexture);const F=T.source,Z=u.get(F);delete Z[_.__cacheKey],a.memory.textures--}function y(T){const _=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let ne=0;ne<_.__webglFramebuffer[Z].length;ne++)n.deleteFramebuffer(_.__webglFramebuffer[Z][ne]);else n.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[Z]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=T.textures;for(let Z=0,ne=F.length;Z<ne;Z++){const j=i.get(F[Z]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(F[Z])}i.remove(T)}let L=0;function D(){L=0}function B(){const T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function G(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function Y(T,_){const F=i.get(T);if(T.isVideoTexture&&Be(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(F,T,_);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function X(T,_){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Q(F,T,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function se(T,_){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Q(F,T,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function z(T,_){const F=i.get(T);if(T.version>0&&F.__version!==T.version){ie(F,T,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}const ce={[Da]:n.REPEAT,[Ni]:n.CLAMP_TO_EDGE,[Il]:n.MIRRORED_REPEAT},ue={[on]:n.NEAREST,[Vp]:n.NEAREST_MIPMAP_NEAREST,[Wr]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[vo]:n.LINEAR_MIPMAP_NEAREST,[Fi]:n.LINEAR_MIPMAP_LINEAR},ge={[qp]:n.NEVER,[Qp]:n.ALWAYS,[Yp]:n.LESS,[bu]:n.LEQUAL,[jp]:n.EQUAL,[Jp]:n.GEQUAL,[Kp]:n.GREATER,[Zp]:n.NOTEQUAL};function Ue(T,_){if(_.type===In&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===an||_.magFilter===vo||_.magFilter===Wr||_.magFilter===Fi||_.minFilter===an||_.minFilter===vo||_.minFilter===Wr||_.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ce[_.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ce[_.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ce[_.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ue[_.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ue[_.minFilter]),_.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ge[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===on||_.minFilter!==Wr&&_.minFilter!==Fi||_.type===In&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function De(T,_){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",C));const Z=_.source;let ne=u.get(Z);ne===void 0&&(ne={},u.set(Z,ne));const j=G(_);if(j!==T.__cacheKey){ne[j]===void 0&&(ne[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ne[j].usedTimes++;const Ee=ne[T.__cacheKey];Ee!==void 0&&(ne[T.__cacheKey].usedTimes--,Ee.usedTimes===0&&M(_)),T.__cacheKey=j,T.__webglTexture=ne[j].texture}return F}function $e(T,_,F){return Math.floor(Math.floor(T/F)/_)}function Je(T,_,F,Z){const j=T.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,Z,_.data);else{j.sort((re,de)=>re.start-de.start);let Ee=0;for(let re=1;re<j.length;re++){const de=j[Ee],H=j[re],W=de.start+de.count,q=$e(H.start,_.width,4),oe=$e(de.start,_.width,4);H.start<=W+1&&q===oe&&$e(H.start+H.count-1,_.width,4)===q?de.count=Math.max(de.count,H.start+H.count-de.start):(++Ee,j[Ee]=H)}j.length=Ee+1;const he=n.getParameter(n.UNPACK_ROW_LENGTH),Se=n.getParameter(n.UNPACK_SKIP_PIXELS),_e=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let re=0,de=j.length;re<de;re++){const H=j[re],W=Math.floor(H.start/4),q=Math.ceil(H.count/4),oe=W%_.width,I=Math.floor(W/_.width),ee=q,te=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,oe),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,oe,I,ee,te,F,Z,_.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),n.pixelStorei(n.UNPACK_SKIP_ROWS,_e)}}function Q(T,_,F){let Z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=n.TEXTURE_3D);const ne=De(T,_),j=_.source;t.bindTexture(Z,T.__webglTexture,n.TEXTURE0+F);const Ee=i.get(j);if(j.version!==Ee.__version||ne===!0){t.activeTexture(n.TEXTURE0+F);const he=et.getPrimaries(et.workingColorSpace),Se=_.colorSpace===Yn?null:et.getPrimaries(_.colorSpace),_e=_.colorSpace===Yn||he===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let re=v(_.image,!1,s.maxTextureSize);re=xt(_,re);const de=r.convert(_.format,_.colorSpace),H=r.convert(_.type);let W=E(_.internalFormat,de,H,_.colorSpace,_.isVideoTexture);Ue(Z,_);let q;const oe=_.mipmaps,I=_.isVideoTexture!==!0,ee=Ee.__version===void 0||ne===!0,te=j.dataReady,ae=R(_,re);if(_.isDepthTexture)W=x(_.format===Ar,_.type),ee&&(I?t.texStorage2D(n.TEXTURE_2D,1,W,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,W,re.width,re.height,0,de,H,null));else if(_.isDataTexture)if(oe.length>0){I&&ee&&t.texStorage2D(n.TEXTURE_2D,ae,W,oe[0].width,oe[0].height);for(let J=0,K=oe.length;J<K;J++)q=oe[J],I?te&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,q.width,q.height,de,H,q.data):t.texImage2D(n.TEXTURE_2D,J,W,q.width,q.height,0,de,H,q.data);_.generateMipmaps=!1}else I?(ee&&t.texStorage2D(n.TEXTURE_2D,ae,W,re.width,re.height),te&&Je(_,re,de,H)):t.texImage2D(n.TEXTURE_2D,0,W,re.width,re.height,0,de,H,re.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,W,oe[0].width,oe[0].height,re.depth);for(let J=0,K=oe.length;J<K;J++)if(q=oe[J],_.format!==Mn)if(de!==null)if(I){if(te)if(_.layerUpdates.size>0){const pe=bh(q.width,q.height,_.format,_.type);for(const Ae of _.layerUpdates){const We=q.data.subarray(Ae*pe/q.data.BYTES_PER_ELEMENT,(Ae+1)*pe/q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Ae,q.width,q.height,1,de,We)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,q.width,q.height,re.depth,de,q.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,W,q.width,q.height,re.depth,0,q.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?te&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,q.width,q.height,re.depth,de,H,q.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,W,q.width,q.height,re.depth,0,de,H,q.data)}else{I&&ee&&t.texStorage2D(n.TEXTURE_2D,ae,W,oe[0].width,oe[0].height);for(let J=0,K=oe.length;J<K;J++)q=oe[J],_.format!==Mn?de!==null?I?te&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,q.width,q.height,de,q.data):t.compressedTexImage2D(n.TEXTURE_2D,J,W,q.width,q.height,0,q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?te&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,q.width,q.height,de,H,q.data):t.texImage2D(n.TEXTURE_2D,J,W,q.width,q.height,0,de,H,q.data)}else if(_.isDataArrayTexture)if(I){if(ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,W,re.width,re.height,re.depth),te)if(_.layerUpdates.size>0){const J=bh(re.width,re.height,_.format,_.type);for(const K of _.layerUpdates){const pe=re.data.subarray(K*J/re.data.BYTES_PER_ELEMENT,(K+1)*J/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,re.width,re.height,1,de,H,pe)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,de,H,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,W,re.width,re.height,re.depth,0,de,H,re.data);else if(_.isData3DTexture)I?(ee&&t.texStorage3D(n.TEXTURE_3D,ae,W,re.width,re.height,re.depth),te&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,de,H,re.data)):t.texImage3D(n.TEXTURE_3D,0,W,re.width,re.height,re.depth,0,de,H,re.data);else if(_.isFramebufferTexture){if(ee)if(I)t.texStorage2D(n.TEXTURE_2D,ae,W,re.width,re.height);else{let J=re.width,K=re.height;for(let pe=0;pe<ae;pe++)t.texImage2D(n.TEXTURE_2D,pe,W,J,K,0,de,H,null),J>>=1,K>>=1}}else if(oe.length>0){if(I&&ee){const J=ft(oe[0]);t.texStorage2D(n.TEXTURE_2D,ae,W,J.width,J.height)}for(let J=0,K=oe.length;J<K;J++)q=oe[J],I?te&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,de,H,q):t.texImage2D(n.TEXTURE_2D,J,W,de,H,q);_.generateMipmaps=!1}else if(I){if(ee){const J=ft(re);t.texStorage2D(n.TEXTURE_2D,ae,W,J.width,J.height)}te&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,H,re)}else t.texImage2D(n.TEXTURE_2D,0,W,de,H,re);m(_)&&p(Z),Ee.__version=j.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ie(T,_,F){if(_.image.length!==6)return;const Z=De(T,_),ne=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+F);const j=i.get(ne);if(ne.version!==j.__version||Z===!0){t.activeTexture(n.TEXTURE0+F);const Ee=et.getPrimaries(et.workingColorSpace),he=_.colorSpace===Yn?null:et.getPrimaries(_.colorSpace),Se=_.colorSpace===Yn||Ee===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const _e=_.isCompressedTexture||_.image[0].isCompressedTexture,re=_.image[0]&&_.image[0].isDataTexture,de=[];for(let K=0;K<6;K++)!_e&&!re?de[K]=v(_.image[K],!0,s.maxCubemapSize):de[K]=re?_.image[K].image:_.image[K],de[K]=xt(_,de[K]);const H=de[0],W=r.convert(_.format,_.colorSpace),q=r.convert(_.type),oe=E(_.internalFormat,W,q,_.colorSpace),I=_.isVideoTexture!==!0,ee=j.__version===void 0||Z===!0,te=ne.dataReady;let ae=R(_,H);Ue(n.TEXTURE_CUBE_MAP,_);let J;if(_e){I&&ee&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,oe,H.width,H.height);for(let K=0;K<6;K++){J=de[K].mipmaps;for(let pe=0;pe<J.length;pe++){const Ae=J[pe];_.format!==Mn?W!==null?I?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,0,0,Ae.width,Ae.height,W,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,oe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,0,0,Ae.width,Ae.height,W,q,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe,oe,Ae.width,Ae.height,0,W,q,Ae.data)}}}else{if(J=_.mipmaps,I&&ee){J.length>0&&ae++;const K=ft(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,oe,K.width,K.height)}for(let K=0;K<6;K++)if(re){I?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,de[K].width,de[K].height,W,q,de[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,oe,de[K].width,de[K].height,0,W,q,de[K].data);for(let pe=0;pe<J.length;pe++){const We=J[pe].image[K].image;I?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,0,0,We.width,We.height,W,q,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,oe,We.width,We.height,0,W,q,We.data)}}else{I?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,W,q,de[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,oe,W,q,de[K]);for(let pe=0;pe<J.length;pe++){const Ae=J[pe];I?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,0,0,W,q,Ae.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,pe+1,oe,W,q,Ae.image[K])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),j.__version=ne.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ye(T,_,F,Z,ne,j){const Ee=r.convert(F.format,F.colorSpace),he=r.convert(F.type),Se=E(F.internalFormat,Ee,he,F.colorSpace),_e=i.get(_),re=i.get(F);if(re.__renderTarget=_,!_e.__hasExternalTextures){const de=Math.max(1,_.width>>j),H=Math.max(1,_.height>>j);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,j,Se,de,H,_.depth,0,Ee,he,null):t.texImage2D(ne,j,Se,de,H,0,Ee,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Me(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ne,re.__webglTexture,0,ct(_)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ne,re.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(T,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,T),_.depthBuffer){const Z=_.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,j=x(_.stencilBuffer,ne),Ee=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=ct(_);Me(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,j,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,j,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,j,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,T)}else{const Z=_.textures;for(let ne=0;ne<Z.length;ne++){const j=Z[ne],Ee=r.convert(j.format,j.colorSpace),he=r.convert(j.type),Se=E(j.internalFormat,Ee,he,j.colorSpace),_e=ct(_);F&&Me(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,Se,_.width,_.height):Me(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,Se,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Se,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ve(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(_.depthTexture);Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y(_.depthTexture,0);const ne=Z.__webglTexture,j=ct(_);if(_.depthTexture.format===Tr)Me(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(_.depthTexture.format===Ar)Me(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Xe(T){const _=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){const ne=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",ne)};Z.addEventListener("dispose",ne),_.__depthDisposeCallback=ne}_.__boundDepthTexture=Z}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const Z=T.texture.mipmaps;Z&&Z.length>0?ve(_.__webglFramebuffer[0],T):ve(_.__webglFramebuffer,T)}else if(F){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=n.createRenderbuffer(),Re(_.__webglDepthbuffer[Z],T,!1);else{const ne=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,j)}}else{const Z=T.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Re(_.__webglDepthbuffer,T,!1);else{const ne=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(T,_,F){const Z=i.get(T);_!==void 0&&ye(Z.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Xe(T)}function P(T){const _=T.texture,F=i.get(T),Z=i.get(_);T.addEventListener("dispose",A);const ne=T.textures,j=T.isWebGLCubeRenderTarget===!0,Ee=ne.length>1;if(Ee||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=_.version,a.memory.textures++),j){F.__webglFramebuffer=[];for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[he]=[];for(let Se=0;Se<_.mipmaps.length;Se++)F.__webglFramebuffer[he][Se]=n.createFramebuffer()}else F.__webglFramebuffer[he]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let he=0;he<_.mipmaps.length;he++)F.__webglFramebuffer[he]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let he=0,Se=ne.length;he<Se;he++){const _e=i.get(ne[he]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Me(T)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let he=0;he<ne.length;he++){const Se=ne[he];F.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[he]);const _e=r.convert(Se.format,Se.colorSpace),re=r.convert(Se.type),de=E(Se.internalFormat,_e,re,Se.colorSpace,T.isXRRenderTarget===!0),H=ct(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,H,de,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,F.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Re(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,_);for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0)for(let Se=0;Se<_.mipmaps.length;Se++)ye(F.__webglFramebuffer[he][Se],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se);else ye(F.__webglFramebuffer[he],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let he=0,Se=ne.length;he<Se;he++){const _e=ne[he],re=i.get(_e);let de=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(de=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,re.__webglTexture),Ue(de,_e),ye(F.__webglFramebuffer,T,_e,n.COLOR_ATTACHMENT0+he,de,0),m(_e)&&p(de)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,Z.__webglTexture),Ue(he,_),_.mipmaps&&_.mipmaps.length>0)for(let Se=0;Se<_.mipmaps.length;Se++)ye(F.__webglFramebuffer[Se],T,_,n.COLOR_ATTACHMENT0,he,Se);else ye(F.__webglFramebuffer,T,_,n.COLOR_ATTACHMENT0,he,0);m(_)&&p(he),t.unbindTexture()}T.depthBuffer&&Xe(T)}function lt(T){const _=T.textures;for(let F=0,Z=_.length;F<Z;F++){const ne=_[F];if(m(ne)){const j=w(T),Ee=i.get(ne).__webglTexture;t.bindTexture(j,Ee),p(j),t.unbindTexture()}}}const Fe=[],Pe=[];function we(T){if(T.samples>0){if(Me(T)===!1){const _=T.textures,F=T.width,Z=T.height;let ne=n.COLOR_BUFFER_BIT;const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(T),he=_.length>1;if(he)for(let _e=0;_e<_.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Se=T.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let _e=0;_e<_.length;_e++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[_e]);const re=i.get(_[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,F,Z,0,0,F,Z,ne,n.NEAREST),l===!0&&(Fe.length=0,Pe.length=0,Fe.push(n.COLOR_ATTACHMENT0+_e),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Fe.push(j),Pe.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Pe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let _e=0;_e<_.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[_e]);const re=i.get(_[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ct(T){return Math.min(s.maxSamples,T.samples)}function Me(T){const _=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Be(T){const _=a.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function xt(T,_){const F=T.colorSpace,Z=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Fs&&F!==Yn&&(et.getTransfer(F)===rt?(Z!==Mn||ne!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function ft(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=se,this.setTextureCube=z,this.rebindTextures=Ve,this.setupRenderTarget=P,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Me}function f_(n,e){function t(i,s=Yn){let r;const a=et.getTransfer(s);if(i===Qn)return n.UNSIGNED_BYTE;if(i===Tc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ac)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===fu)return n.BYTE;if(i===pu)return n.SHORT;if(i===Sr)return n.UNSIGNED_SHORT;if(i===Ec)return n.INT;if(i===Gi)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===Ur)return n.HALF_FLOAT;if(i===vu)return n.ALPHA;if(i===_u)return n.RGB;if(i===Mn)return n.RGBA;if(i===Tr)return n.DEPTH_COMPONENT;if(i===Ar)return n.DEPTH_STENCIL;if(i===Rc)return n.RED;if(i===Cc)return n.RED_INTEGER;if(i===xu)return n.RG;if(i===Pc)return n.RG_INTEGER;if(i===Ic)return n.RGBA_INTEGER;if(i===Ma||i===Sa||i===Ea||i===Ta)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ll||i===Dl||i===kl||i===Ul)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nl||i===Fl||i===Ol)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Nl||i===Fl)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ol)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bl||i===zl||i===Hl||i===Vl||i===Gl||i===Wl||i===$l||i===Xl||i===ql||i===Yl||i===jl||i===Kl||i===Zl||i===Jl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Bl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$l)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ql)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ql||i===ec||i===tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ql)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nc||i===ic||i===sc||i===rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===nc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const p_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class g_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Lu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new vi({vertexShader:p_,fragmentShader:m_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new cn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v_ extends Ws{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new g_,p={},w=t.getContextAttributes();let E=null,x=null;const R=[],C=[],A=new tt;let k=null;const M=new yn;M.viewport=new ut;const y=new yn;y.viewport=new ut;const L=[M,y],D=new Om;let B=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=R[Q];return ie===void 0&&(ie=new zo,R[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=R[Q];return ie===void 0&&(ie=new zo,R[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=R[Q];return ie===void 0&&(ie=new zo,R[Q]=ie),ie.getHandSpace()};function Y(Q){const ie=C.indexOf(Q.inputSource);if(ie===-1)return;const ye=R[ie];ye!==void 0&&(ye.update(Q.inputSource,Q.frame,c||a),ye.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",se);for(let Q=0;Q<R.length;Q++){const ie=C[Q];ie!==null&&(C[Q]=null,R[Q].disconnect(ie))}B=null,G=null,m.reset();for(const Q in p)delete p[Q];e.setRenderTarget(E),f=null,u=null,d=null,s=null,x=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(k),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",X),s.addEventListener("inputsourceschange",se),w.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Re=null,ve=null;w.depth&&(ve=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=w.stencil?Ar:Tr,Re=w.stencil?Er:Gi);const Xe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Xe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Wi(u.textureWidth,u.textureHeight,{format:Mn,type:Qn,depthTexture:new Iu(u.textureWidth,u.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ye={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Wi(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Je.setContext(s),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(Q){for(let ie=0;ie<Q.removed.length;ie++){const ye=Q.removed[ie],Re=C.indexOf(ye);Re>=0&&(C[Re]=null,R[Re].disconnect(ye))}for(let ie=0;ie<Q.added.length;ie++){const ye=Q.added[ie];let Re=C.indexOf(ye);if(Re===-1){for(let Xe=0;Xe<R.length;Xe++)if(Xe>=C.length){C.push(ye),Re=Xe;break}else if(C[Xe]===null){C[Xe]=ye,Re=Xe;break}if(Re===-1)break}const ve=R[Re];ve&&ve.connect(ye)}}const z=new O,ce=new O;function ue(Q,ie,ye){z.setFromMatrixPosition(ie.matrixWorld),ce.setFromMatrixPosition(ye.matrixWorld);const Re=z.distanceTo(ce),ve=ie.projectionMatrix.elements,Xe=ye.projectionMatrix.elements,Ve=ve[14]/(ve[10]-1),P=ve[14]/(ve[10]+1),lt=(ve[9]+1)/ve[5],Fe=(ve[9]-1)/ve[5],Pe=(ve[8]-1)/ve[0],we=(Xe[8]+1)/Xe[0],ct=Ve*Pe,Me=Ve*we,Be=Re/(-Pe+we),xt=Be*-Pe;if(ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(xt),Q.translateZ(Be),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ve[10]===-1)Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const ft=Ve+Be,T=P+Be,_=ct-xt,F=Me+(Re-xt),Z=lt*P/T*ft,ne=Fe*P/T*ft;Q.projectionMatrix.makePerspective(_,F,Z,ne,ft,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ge(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ie=Q.near,ye=Q.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),D.near=y.near=M.near=ie,D.far=y.far=M.far=ye,(B!==D.near||G!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),B=D.near,G=D.far),D.layers.mask=Q.layers.mask|6,M.layers.mask=D.layers.mask&3,y.layers.mask=D.layers.mask&5;const Re=Q.parent,ve=D.cameras;ge(D,Re);for(let Xe=0;Xe<ve.length;Xe++)ge(ve[Xe],Re);ve.length===2?ue(D,M,y):D.projectionMatrix.copy(M.projectionMatrix),Ue(Q,D,Re)};function Ue(Q,ie,ye){ye===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(ye.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ac*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(Q){return p[Q]};let De=null;function $e(Q,ie){if(h=ie.getViewerPose(c||a),g=ie,h!==null){const ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Re=!1;ye.length!==D.cameras.length&&(D.cameras.length=0,Re=!0);for(let P=0;P<ye.length;P++){const lt=ye[P];let Fe=null;if(f!==null)Fe=f.getViewport(lt);else{const we=d.getViewSubImage(u,lt);Fe=we.viewport,P===0&&(e.setRenderTargetTextures(x,we.colorTexture,we.depthStencilTexture),e.setRenderTarget(x))}let Pe=L[P];Pe===void 0&&(Pe=new yn,Pe.layers.enable(P),Pe.viewport=new ut,L[P]=Pe),Pe.matrix.fromArray(lt.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(lt.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),P===0&&(D.matrix.copy(Pe.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Re===!0&&D.cameras.push(Pe)}const ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const P=d.getDepthInformation(ye[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(ve&&ve.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let P=0;P<ye.length;P++){const lt=ye[P].camera;if(lt){let Fe=p[lt];Fe||(Fe=new Lu,p[lt]=Fe);const Pe=d.getCameraImage(lt);Fe.sourceTexture=Pe}}}}for(let ye=0;ye<R.length;ye++){const Re=C[ye],ve=R[ye];Re!==null&&ve!==void 0&&ve.update(Re,ie,c||a)}De&&De(Q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Je=new ku;Je.setAnimationLoop($e),this.setAnimationLoop=function(Q){De=Q},this.dispose=function(){}}}const Ri=new ei,__=new ot;function x_(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Au(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,E,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),E=w.envMap,x=w.envMapRotation;E&&(m.envMap.value=E,Ri.copy(x),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(__.makeRotationFromEuler(Ri)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function b_(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){const x=E.program;i.uniformBlockBinding(w,x)}function c(w,E){let x=s[w.id];x===void 0&&(g(w),x=h(w),s[w.id]=x,w.addEventListener("dispose",m));const R=E.program;i.updateUBOMapping(w,R);const C=e.render.frame;r[w.id]!==C&&(u(w),r[w.id]=C)}function h(w){const E=d();w.__bindingPointIndex=E;const x=n.createBuffer(),R=w.__size,C=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,R,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,x),x}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const E=s[w.id],x=w.uniforms,R=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let C=0,A=x.length;C<A;C++){const k=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,y=k.length;M<y;M++){const L=k[M];if(f(L,C,M,R)===!0){const D=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let G=0;for(let Y=0;Y<B.length;Y++){const X=B[Y],se=v(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,D+G,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,G),G+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(w,E,x,R){const C=w.value,A=E+"_"+x;if(R[A]===void 0)return typeof C=="number"||typeof C=="boolean"?R[A]=C:R[A]=C.clone(),!0;{const k=R[A];if(typeof C=="number"||typeof C=="boolean"){if(k!==C)return R[A]=C,!0}else if(k.equals(C)===!1)return k.copy(C),!0}return!1}function g(w){const E=w.uniforms;let x=0;const R=16;for(let A=0,k=E.length;A<k;A++){const M=Array.isArray(E[A])?E[A]:[E[A]];for(let y=0,L=M.length;y<L;y++){const D=M[y],B=Array.isArray(D.value)?D.value:[D.value];for(let G=0,Y=B.length;G<Y;G++){const X=B[G],se=v(X),z=x%R,ce=z%se.boundary,ue=z+ce;x+=ce,ue!==0&&R-ue<se.storage&&(x+=R-ue),D.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=se.storage}}}const C=x%R;return C>0&&(x+=R-C),w.__size=x,w.__cache={},this}function v(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){const E=w.target;E.removeEventListener("dispose",m);const x=a.indexOf(E.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const w in s)n.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class y_{constructor(e={}){const{canvas:t=tm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const w=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let R=!1;this._outputColorSpace=Ct;let C=0,A=0,k=null,M=-1,y=null;const L=new ut,D=new ut;let B=null;const G=new Ke(0);let Y=0,X=t.width,se=t.height,z=1,ce=null,ue=null;const ge=new ut(0,0,X,se),Ue=new ut(0,0,X,se);let De=!1;const $e=new Pu;let Je=!1,Q=!1;const ie=new ot,ye=new O,Re=new ut,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function Ve(){return k===null?z:1}let P=i;function lt(b,U){return t.getContext(b,U)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sc}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",J,!1),P===null){const U="webgl2";if(P=lt(U,b),P===null)throw lt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Fe,Pe,we,ct,Me,Be,xt,ft,T,_,F,Z,ne,j,Ee,he,Se,_e,re,de,H,W,q,oe;function I(){Fe=new Iv(P),Fe.init(),W=new f_(P,Fe),Pe=new Sv(P,Fe,e,W),we=new d_(P,Fe),Pe.reversedDepthBuffer&&u&&we.buffers.depth.setReversed(!0),ct=new kv(P),Me=new J1,Be=new u_(P,Fe,we,Me,Pe,W,ct),xt=new Tv(x),ft=new Pv(x),T=new zm(P),q=new wv(P,T),_=new Lv(P,T,ct,q),F=new Nv(P,_,T,ct),re=new Uv(P,Pe,Be),he=new Ev(Me),Z=new Z1(x,xt,ft,Fe,Pe,q,he),ne=new x_(x,Me),j=new e_,Ee=new a_(Fe),_e=new yv(x,xt,ft,we,F,f,l),Se=new c_(x,F,Pe),oe=new b_(P,ct,Pe,we),de=new Mv(P,Fe,ct),H=new Dv(P,Fe,ct),ct.programs=Z.programs,x.capabilities=Pe,x.extensions=Fe,x.properties=Me,x.renderLists=j,x.shadowMap=Se,x.state=we,x.info=ct}I();const ee=new v_(x,P);this.xr=ee,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=Fe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Fe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(b){b!==void 0&&(z=b,this.setSize(X,se,!1))},this.getSize=function(b){return b.set(X,se)},this.setSize=function(b,U,V=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,se=U,t.width=Math.floor(b*z),t.height=Math.floor(U*z),V===!0&&(t.style.width=b+"px",t.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(X*z,se*z).floor()},this.setDrawingBufferSize=function(b,U,V){X=b,se=U,z=V,t.width=Math.floor(b*V),t.height=Math.floor(U*V),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(ge)},this.setViewport=function(b,U,V,$){b.isVector4?ge.set(b.x,b.y,b.z,b.w):ge.set(b,U,V,$),we.viewport(L.copy(ge).multiplyScalar(z).round())},this.getScissor=function(b){return b.copy(Ue)},this.setScissor=function(b,U,V,$){b.isVector4?Ue.set(b.x,b.y,b.z,b.w):Ue.set(b,U,V,$),we.scissor(D.copy(Ue).multiplyScalar(z).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(b){we.setScissorTest(De=b)},this.setOpaqueSort=function(b){ce=b},this.setTransparentSort=function(b){ue=b},this.getClearColor=function(b){return b.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,V=!0){let $=0;if(b){let N=!1;if(k!==null){const le=k.texture.format;N=le===Ic||le===Pc||le===Cc}if(N){const le=k.texture.type,me=le===Qn||le===Gi||le===Sr||le===Er||le===Tc||le===Ac,Te=_e.getClearColor(),xe=_e.getClearAlpha(),ke=Te.r,Ne=Te.g,Ie=Te.b;me?(g[0]=ke,g[1]=Ne,g[2]=Ie,g[3]=xe,P.clearBufferuiv(P.COLOR,0,g)):(v[0]=ke,v[1]=Ne,v[2]=Ie,v[3]=xe,P.clearBufferiv(P.COLOR,0,v))}else $|=P.COLOR_BUFFER_BIT}U&&($|=P.DEPTH_BUFFER_BIT),V&&($|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",J,!1),_e.dispose(),j.dispose(),Ee.dispose(),Me.dispose(),xt.dispose(),ft.dispose(),F.dispose(),q.dispose(),oe.dispose(),Z.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",vt),ee.removeEventListener("sessionend",En),Bt.stop()};function te(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=ct.autoReset,U=Se.enabled,V=Se.autoUpdate,$=Se.needsUpdate,N=Se.type;I(),ct.autoReset=b,Se.enabled=U,Se.autoUpdate=V,Se.needsUpdate=$,Se.type=N}function J(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function K(b){const U=b.target;U.removeEventListener("dispose",K),pe(U)}function pe(b){Ae(b),Me.remove(b)}function Ae(b){const U=Me.get(b).programs;U!==void 0&&(U.forEach(function(V){Z.releaseProgram(V)}),b.isShaderMaterial&&Z.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,V,$,N,le){U===null&&(U=ve);const me=N.isMesh&&N.matrixWorld.determinant()<0,Te=Zi(b,U,V,$,N);we.setMaterial($,me);let xe=V.index,ke=1;if($.wireframe===!0){if(xe=_.getWireframeAttribute(V),xe===void 0)return;ke=2}const Ne=V.drawRange,Ie=V.attributes.position;let qe=Ne.start*ke,st=(Ne.start+Ne.count)*ke;le!==null&&(qe=Math.max(qe,le.start*ke),st=Math.min(st,(le.start+le.count)*ke)),xe!==null?(qe=Math.max(qe,0),st=Math.min(st,xe.count)):Ie!=null&&(qe=Math.max(qe,0),st=Math.min(st,Ie.count));const gt=st-qe;if(gt<0||gt===1/0)return;q.setup(N,$,Te,V,xe);let dt,ht=de;if(xe!==null&&(dt=T.get(xe),ht=H,ht.setIndex(dt)),N.isMesh)$.wireframe===!0?(we.setLineWidth($.wireframeLinewidth*Ve()),ht.setMode(P.LINES)):ht.setMode(P.TRIANGLES);else if(N.isLine){let Le=$.linewidth;Le===void 0&&(Le=1),we.setLineWidth(Le*Ve()),N.isLineSegments?ht.setMode(P.LINES):N.isLineLoop?ht.setMode(P.LINE_LOOP):ht.setMode(P.LINE_STRIP)}else N.isPoints?ht.setMode(P.POINTS):N.isSprite&&ht.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Cr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))ht.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Le=N._multiDrawStarts,pt=N._multiDrawCounts,Qe=N._multiDrawCount,en=xe?T.get(xe).bytesPerElement:1,Ji=Me.get($).currentProgram.getUniforms();for(let tn=0;tn<Qe;tn++)Ji.setValue(P,"_gl_DrawID",tn),ht.render(Le[tn]/en,pt[tn])}else if(N.isInstancedMesh)ht.renderInstances(qe,gt,N.count);else if(V.isInstancedBufferGeometry){const Le=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,pt=Math.min(V.instanceCount,Le);ht.renderInstances(qe,gt,pt)}else ht.render(qe,gt)};function We(b,U,V){b.transparent===!0&&b.side===fn&&b.forceSinglePass===!1?(b.side=Qt,b.needsUpdate=!0,yi(b,U,V),b.side=gi,b.needsUpdate=!0,yi(b,U,V),b.side=fn):yi(b,U,V)}this.compile=function(b,U,V=null){V===null&&(V=b),p=Ee.get(V),p.init(U),E.push(p),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==V&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const $=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const le=N.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){const Te=le[me];We(Te,V,N),$.add(Te)}else We(le,V,N),$.add(le)}),p=E.pop(),$},this.compileAsync=function(b,U,V=null){const $=this.compile(b,U,V);return new Promise(N=>{function le(){if($.forEach(function(me){Me.get(me).currentProgram.isReady()&&$.delete(me)}),$.size===0){N(b);return}setTimeout(le,10)}Fe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let ze=null;function Ot(b){ze&&ze(b)}function vt(){Bt.stop()}function En(){Bt.start()}const Bt=new ku;Bt.setAnimationLoop(Ot),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(b){ze=b,ee.setAnimationLoop(b),b===null?Bt.stop():Bt.start()},ee.addEventListener("sessionstart",vt),ee.addEventListener("sessionend",En),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(U),U=ee.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,U,k),p=Ee.get(b,E.length),p.init(U),E.push(p),ie.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$e.setFromProjectionMatrix(ie,Ln,U.reversedDepth),Q=this.localClippingEnabled,Je=he.init(this.clippingPlanes,Q),m=j.get(b,w.length),m.init(),w.push(m),ee.enabled===!0&&ee.isPresenting===!0){const le=x.xr.getDepthSensingMesh();le!==null&&On(le,U,-1/0,x.sortObjects)}On(b,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ce,ue),Xe=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Xe&&_e.addToRenderList(m,b),this.info.render.frame++,Je===!0&&he.beginShadows();const V=p.state.shadowsArray;Se.render(V,b,U),Je===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const le=U.cameras;if(N.length>0)for(let me=0,Te=le.length;me<Te;me++){const xe=le[me];Yi($,N,b,xe)}Xe&&_e.render(b);for(let me=0,Te=le.length;me<Te;me++){const xe=le[me];qi(m,b,xe,xe.viewport)}}else N.length>0&&Yi($,N,b,U),Xe&&_e.render(b),qi(m,b,U);k!==null&&A===0&&(Be.updateMultisampleRenderTarget(k),Be.updateRenderTargetMipmap(k)),b.isScene===!0&&b.onAfterRender(x,b,U),q.resetDefaultState(),M=-1,y=null,E.pop(),E.length>0?(p=E[E.length-1],Je===!0&&he.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function On(b,U,V,$){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$e.intersectsSprite(b)){$&&Re.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ie);const me=F.update(b),Te=b.material;Te.visible&&m.push(b,me,Te,V,Re.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$e.intersectsObject(b))){const me=F.update(b),Te=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Re.copy(b.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Re.copy(me.boundingSphere.center)),Re.applyMatrix4(b.matrixWorld).applyMatrix4(ie)),Array.isArray(Te)){const xe=me.groups;for(let ke=0,Ne=xe.length;ke<Ne;ke++){const Ie=xe[ke],qe=Te[Ie.materialIndex];qe&&qe.visible&&m.push(b,me,qe,V,Re.z,Ie)}}else Te.visible&&m.push(b,me,Te,V,Re.z,null)}}const le=b.children;for(let me=0,Te=le.length;me<Te;me++)On(le[me],U,V,$)}function qi(b,U,V,$){const N=b.opaque,le=b.transmissive,me=b.transparent;p.setupLightsView(V),Je===!0&&he.setGlobalState(x.clippingPlanes,V),$&&we.viewport(L.copy($)),N.length>0&&bi(N,U,V),le.length>0&&bi(le,U,V),me.length>0&&bi(me,U,V),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Yi(b,U,V,$){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Wi(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Ur:Qn,minFilter:Fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const le=p.state.transmissionRenderTarget[$.id],me=$.viewport||L;le.setSize(me.z*x.transmissionResolutionScale,me.w*x.transmissionResolutionScale);const Te=x.getRenderTarget(),xe=x.getActiveCubeFace(),ke=x.getActiveMipmapLevel();x.setRenderTarget(le),x.getClearColor(G),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Xe&&_e.render(V);const Ne=x.toneMapping;x.toneMapping=Zn;const Ie=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),Je===!0&&he.setGlobalState(x.clippingPlanes,$),bi(b,V,$),Be.updateMultisampleRenderTarget(le),Be.updateRenderTargetMipmap(le),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let st=0,gt=U.length;st<gt;st++){const dt=U[st],ht=dt.object,Le=dt.geometry,pt=dt.material,Qe=dt.group;if(pt.side===fn&&ht.layers.test($.layers)){const en=pt.side;pt.side=Qt,pt.needsUpdate=!0,ji(ht,V,$,Le,pt,Qe),pt.side=en,pt.needsUpdate=!0,qe=!0}}qe===!0&&(Be.updateMultisampleRenderTarget(le),Be.updateRenderTargetMipmap(le))}x.setRenderTarget(Te,xe,ke),x.setClearColor(G,Y),Ie!==void 0&&($.viewport=Ie),x.toneMapping=Ne}function bi(b,U,V){const $=U.isScene===!0?U.overrideMaterial:null;for(let N=0,le=b.length;N<le;N++){const me=b[N],Te=me.object,xe=me.geometry,ke=me.group;let Ne=me.material;Ne.allowOverride===!0&&$!==null&&(Ne=$),Te.layers.test(V.layers)&&ji(Te,U,V,xe,Ne,ke)}}function ji(b,U,V,$,N,le){b.onBeforeRender(x,U,V,$,N,le),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(x,U,V,$,b,le),N.transparent===!0&&N.side===fn&&N.forceSinglePass===!1?(N.side=Qt,N.needsUpdate=!0,x.renderBufferDirect(V,U,$,N,b,le),N.side=gi,N.needsUpdate=!0,x.renderBufferDirect(V,U,$,N,b,le),N.side=fn):x.renderBufferDirect(V,U,$,N,b,le),b.onAfterRender(x,U,V,$,N,le)}function yi(b,U,V){U.isScene!==!0&&(U=ve);const $=Me.get(b),N=p.state.lights,le=p.state.shadowsArray,me=N.state.version,Te=Z.getParameters(b,N.state,le,U,V),xe=Z.getProgramCacheKey(Te);let ke=$.programs;$.environment=b.isMeshStandardMaterial?U.environment:null,$.fog=U.fog,$.envMap=(b.isMeshStandardMaterial?ft:xt).get(b.envMap||$.environment),$.envMapRotation=$.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,ke===void 0&&(b.addEventListener("dispose",K),ke=new Map,$.programs=ke);let Ne=ke.get(xe);if(Ne!==void 0){if($.currentProgram===Ne&&$.lightsStateVersion===me)return Gr(b,Te),Ne}else Te.uniforms=Z.getUniforms(b),b.onBeforeCompile(Te,x),Ne=Z.acquireProgram(Te,xe),ke.set(xe,Ne),$.uniforms=Te.uniforms;const Ie=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ie.clippingPlanes=he.uniform),Gr(b,Te),$.needsLights=mo(b),$.lightsStateVersion=me,$.needsLights&&(Ie.ambientLightColor.value=N.state.ambient,Ie.lightProbe.value=N.state.probe,Ie.directionalLights.value=N.state.directional,Ie.directionalLightShadows.value=N.state.directionalShadow,Ie.spotLights.value=N.state.spot,Ie.spotLightShadows.value=N.state.spotShadow,Ie.rectAreaLights.value=N.state.rectArea,Ie.ltc_1.value=N.state.rectAreaLTC1,Ie.ltc_2.value=N.state.rectAreaLTC2,Ie.pointLights.value=N.state.point,Ie.pointLightShadows.value=N.state.pointShadow,Ie.hemisphereLights.value=N.state.hemi,Ie.directionalShadowMap.value=N.state.directionalShadowMap,Ie.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ie.spotShadowMap.value=N.state.spotShadowMap,Ie.spotLightMatrix.value=N.state.spotLightMatrix,Ie.spotLightMap.value=N.state.spotLightMap,Ie.pointShadowMap.value=N.state.pointShadowMap,Ie.pointShadowMatrix.value=N.state.pointShadowMatrix),$.currentProgram=Ne,$.uniformsList=null,Ne}function Ki(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Aa.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Gr(b,U){const V=Me.get(b);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Zi(b,U,V,$,N){U.isScene!==!0&&(U=ve),Be.resetTextureUnits();const le=U.fog,me=$.isMeshStandardMaterial?U.environment:null,Te=k===null?x.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Fs,xe=($.isMeshStandardMaterial?ft:xt).get($.envMap||me),ke=$.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ne=!!V.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ie=!!V.morphAttributes.position,qe=!!V.morphAttributes.normal,st=!!V.morphAttributes.color;let gt=Zn;$.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(gt=x.toneMapping);const dt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ht=dt!==void 0?dt.length:0,Le=Me.get($),pt=p.state.lights;if(Je===!0&&(Q===!0||b!==y)){const zt=b===y&&$.id===M;he.setState($,b,zt)}let Qe=!1;$.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==pt.state.version||Le.outputColorSpace!==Te||N.isBatchedMesh&&Le.batching===!1||!N.isBatchedMesh&&Le.batching===!0||N.isBatchedMesh&&Le.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Le.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Le.instancing===!1||!N.isInstancedMesh&&Le.instancing===!0||N.isSkinnedMesh&&Le.skinning===!1||!N.isSkinnedMesh&&Le.skinning===!0||N.isInstancedMesh&&Le.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Le.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Le.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Le.instancingMorph===!1&&N.morphTexture!==null||Le.envMap!==xe||$.fog===!0&&Le.fog!==le||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==he.numPlanes||Le.numIntersection!==he.numIntersection)||Le.vertexAlphas!==ke||Le.vertexTangents!==Ne||Le.morphTargets!==Ie||Le.morphNormals!==qe||Le.morphColors!==st||Le.toneMapping!==gt||Le.morphTargetsCount!==ht)&&(Qe=!0):(Qe=!0,Le.__version=$.version);let en=Le.currentProgram;Qe===!0&&(en=yi($,U,N));let Ji=!1,tn=!1,Qs=!1;const mt=en.getUniforms(),hn=Le.uniforms;if(we.useProgram(en.program)&&(Ji=!0,tn=!0,Qs=!0),$.id!==M&&(M=$.id,tn=!0),Ji||y!==b){we.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),mt.setValue(P,"projectionMatrix",b.projectionMatrix),mt.setValue(P,"viewMatrix",b.matrixWorldInverse);const qt=mt.map.cameraPosition;qt!==void 0&&qt.setValue(P,ye.setFromMatrixPosition(b.matrixWorld)),Pe.logarithmicDepthBuffer&&mt.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&mt.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,tn=!0,Qs=!0)}if(N.isSkinnedMesh){mt.setOptional(P,N,"bindMatrix"),mt.setOptional(P,N,"bindMatrixInverse");const zt=N.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),mt.setValue(P,"boneTexture",zt.boneTexture,Be))}N.isBatchedMesh&&(mt.setOptional(P,N,"batchingTexture"),mt.setValue(P,"batchingTexture",N._matricesTexture,Be),mt.setOptional(P,N,"batchingIdTexture"),mt.setValue(P,"batchingIdTexture",N._indirectTexture,Be),mt.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&mt.setValue(P,"batchingColorTexture",N._colorsTexture,Be));const dn=V.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&re.update(N,V,en),(tn||Le.receiveShadow!==N.receiveShadow)&&(Le.receiveShadow=N.receiveShadow,mt.setValue(P,"receiveShadow",N.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(hn.envMap.value=xe,hn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&U.environment!==null&&(hn.envMapIntensity.value=U.environmentIntensity),tn&&(mt.setValue(P,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&Js(hn,Qs),le&&$.fog===!0&&ne.refreshFogUniforms(hn,le),ne.refreshMaterialUniforms(hn,$,z,se,p.state.transmissionRenderTarget[b.id]),Aa.upload(P,Ki(Le),hn,Be)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Aa.upload(P,Ki(Le),hn,Be),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&mt.setValue(P,"center",N.center),mt.setValue(P,"modelViewMatrix",N.modelViewMatrix),mt.setValue(P,"normalMatrix",N.normalMatrix),mt.setValue(P,"modelMatrix",N.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const zt=$.uniformsGroups;for(let qt=0,go=zt.length;qt<go;qt++){const wi=zt[qt];oe.update(wi,en),oe.bind(wi,en)}}return en}function Js(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function mo(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,U,V){const $=Me.get(b);$.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Me.get(b.texture).__webglTexture=U,Me.get(b.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:V,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const V=Me.get(b);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0};const rp=P.createFramebuffer();this.setRenderTarget=function(b,U=0,V=0){k=b,C=U,A=V;let $=!0,N=null,le=!1,me=!1;if(b){const xe=Me.get(b);if(xe.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(P.FRAMEBUFFER,null),$=!1;else if(xe.__webglFramebuffer===void 0)Be.setupRenderTarget(b);else if(xe.__hasExternalTextures)Be.rebindTextures(b,Me.get(b.texture).__webglTexture,Me.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ie=b.depthTexture;if(xe.__boundDepthTexture!==Ie){if(Ie!==null&&Me.has(Ie)&&(b.width!==Ie.image.width||b.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(b)}}const ke=b.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(me=!0);const Ne=Me.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?N=Ne[U][V]:N=Ne[U],le=!0):b.samples>0&&Be.useMultisampledRTT(b)===!1?N=Me.get(b).__webglMultisampledFramebuffer:Array.isArray(Ne)?N=Ne[V]:N=Ne,L.copy(b.viewport),D.copy(b.scissor),B=b.scissorTest}else L.copy(ge).multiplyScalar(z).floor(),D.copy(Ue).multiplyScalar(z).floor(),B=De;if(V!==0&&(N=rp),we.bindFramebuffer(P.FRAMEBUFFER,N)&&$&&we.drawBuffers(b,N),we.viewport(L),we.scissor(D),we.setScissorTest(B),le){const xe=Me.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,V)}else if(me){const xe=U;for(let ke=0;ke<b.textures.length;ke++){const Ne=Me.get(b.textures[ke]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ke,Ne.__webglTexture,V,xe)}}else if(b!==null&&V!==0){const xe=Me.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xe.__webglTexture,V)}M=-1},this.readRenderTargetPixels=function(b,U,V,$,N,le,me,Te=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Me.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){we.bindFramebuffer(P.FRAMEBUFFER,xe);try{const ke=b.textures[Te],Ne=ke.format,Ie=ke.type;if(!Pe.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-$&&V>=0&&V<=b.height-N&&(b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Te),P.readPixels(U,V,$,N,W.convert(Ne),W.convert(Ie),le))}finally{const ke=k!==null?Me.get(k).__webglFramebuffer:null;we.bindFramebuffer(P.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(b,U,V,$,N,le,me,Te=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Me.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe)if(U>=0&&U<=b.width-$&&V>=0&&V<=b.height-N){we.bindFramebuffer(P.FRAMEBUFFER,xe);const ke=b.textures[Te],Ne=ke.format,Ie=ke.type;if(!Pe.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,qe),P.bufferData(P.PIXEL_PACK_BUFFER,le.byteLength,P.STREAM_READ),b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Te),P.readPixels(U,V,$,N,W.convert(Ne),W.convert(Ie),0);const st=k!==null?Me.get(k).__webglFramebuffer:null;we.bindFramebuffer(P.FRAMEBUFFER,st);const gt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await nm(P,gt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,qe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,le),P.deleteBuffer(qe),P.deleteSync(gt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,V=0){const $=Math.pow(2,-V),N=Math.floor(b.image.width*$),le=Math.floor(b.image.height*$),me=U!==null?U.x:0,Te=U!==null?U.y:0;Be.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,me,Te,N,le),we.unbindTexture()};const ap=P.createFramebuffer(),op=P.createFramebuffer();this.copyTextureToTexture=function(b,U,V=null,$=null,N=0,le=null){le===null&&(N!==0?(Cr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=N,N=0):le=0);let me,Te,xe,ke,Ne,Ie,qe,st,gt;const dt=b.isCompressedTexture?b.mipmaps[le]:b.image;if(V!==null)me=V.max.x-V.min.x,Te=V.max.y-V.min.y,xe=V.isBox3?V.max.z-V.min.z:1,ke=V.min.x,Ne=V.min.y,Ie=V.isBox3?V.min.z:0;else{const dn=Math.pow(2,-N);me=Math.floor(dt.width*dn),Te=Math.floor(dt.height*dn),b.isDataArrayTexture?xe=dt.depth:b.isData3DTexture?xe=Math.floor(dt.depth*dn):xe=1,ke=0,Ne=0,Ie=0}$!==null?(qe=$.x,st=$.y,gt=$.z):(qe=0,st=0,gt=0);const ht=W.convert(U.format),Le=W.convert(U.type);let pt;U.isData3DTexture?(Be.setTexture3D(U,0),pt=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Be.setTexture2DArray(U,0),pt=P.TEXTURE_2D_ARRAY):(Be.setTexture2D(U,0),pt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Qe=P.getParameter(P.UNPACK_ROW_LENGTH),en=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ji=P.getParameter(P.UNPACK_SKIP_PIXELS),tn=P.getParameter(P.UNPACK_SKIP_ROWS),Qs=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,dt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,dt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ke),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ne),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ie);const mt=b.isDataArrayTexture||b.isData3DTexture,hn=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const dn=Me.get(b),zt=Me.get(U),qt=Me.get(dn.__renderTarget),go=Me.get(zt.__renderTarget);we.bindFramebuffer(P.READ_FRAMEBUFFER,qt.__webglFramebuffer),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,go.__webglFramebuffer);for(let wi=0;wi<xe;wi++)mt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Me.get(b).__webglTexture,N,Ie+wi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Me.get(U).__webglTexture,le,gt+wi)),P.blitFramebuffer(ke,Ne,me,Te,qe,st,me,Te,P.DEPTH_BUFFER_BIT,P.NEAREST);we.bindFramebuffer(P.READ_FRAMEBUFFER,null),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||b.isRenderTargetTexture||Me.has(b)){const dn=Me.get(b),zt=Me.get(U);we.bindFramebuffer(P.READ_FRAMEBUFFER,ap),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,op);for(let qt=0;qt<xe;qt++)mt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,dn.__webglTexture,N,Ie+qt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,dn.__webglTexture,N),hn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,zt.__webglTexture,le,gt+qt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,zt.__webglTexture,le),N!==0?P.blitFramebuffer(ke,Ne,me,Te,qe,st,me,Te,P.COLOR_BUFFER_BIT,P.NEAREST):hn?P.copyTexSubImage3D(pt,le,qe,st,gt+qt,ke,Ne,me,Te):P.copyTexSubImage2D(pt,le,qe,st,ke,Ne,me,Te);we.bindFramebuffer(P.READ_FRAMEBUFFER,null),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else hn?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(pt,le,qe,st,gt,me,Te,xe,ht,Le,dt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(pt,le,qe,st,gt,me,Te,xe,ht,dt.data):P.texSubImage3D(pt,le,qe,st,gt,me,Te,xe,ht,Le,dt):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,le,qe,st,me,Te,ht,Le,dt.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,le,qe,st,dt.width,dt.height,ht,dt.data):P.texSubImage2D(P.TEXTURE_2D,le,qe,st,me,Te,ht,Le,dt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Qe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,en),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ji),P.pixelStorei(P.UNPACK_SKIP_ROWS,tn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Qs),le===0&&U.generateMipmaps&&P.generateMipmap(pt),we.unbindTexture()},this.initRenderTarget=function(b){Me.get(b).__webglFramebuffer===void 0&&Be.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Be.setTextureCube(b,0):b.isData3DTexture?Be.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Be.setTexture2DArray(b,0):Be.setTexture2D(b,0),we.unbindTexture()},this.resetState=function(){C=0,A=0,k=null,we.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}function Bu(n){return!0}const zu=1.5;function Hu(n,e){return e&&new URLSearchParams(n).get("dprFloor")==="1"?1:zu}function Vu(n,e,t=zu){return e?Math.min(2,Math.max(t,n)):Math.min(n,1.25)}function w_(n,e){const t=new y_({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance"});return t.setPixelRatio(Vu(devicePixelRatio,e,Hu(location.search,!1))),t.setSize(innerWidth,innerHeight),t}const Gu=["rally-herald"],Jt={"green-blob":{model:"gloom-blob",label:"ก้อนวุ้น",height:1.25,footprint:1.65,hover:0,bob:.045,frequency:5.2,accent:13073919,glow:13131007,moveSpeed:1.7},demon:{model:"bat-gargoyle",label:"การ์กอยล์",height:1.55,footprint:2.3,hover:1,bob:.11,frequency:3.2,accent:13662207,glow:13662207,moveSpeed:2.2},yeti:{model:"horned-brute",label:"นักรบเขาเหล็ก",height:1.65,footprint:2.05,hover:0,bob:.035,frequency:2.1,accent:16747069,glow:16747050,moveSpeed:.682},orc:{model:"crystal-golem",label:"โกเลมผลึก",height:2.05,footprint:2.3,hover:0,bob:.055,frequency:2.7,accent:5228799,glow:4179199,moveSpeed:.55},"orc-skull":{model:"crystal-golem",label:"โกเลมผลึก · Overload",height:2.2,footprint:2.45,hover:0,bob:.055,frequency:2.9,accent:11820287,tint:14207231,elite:!0,glow:11820287,moveSpeed:.55},alien:{model:"ember-demon",label:"เขี้ยวถ่าน",height:1.5,footprint:1.5,hover:0,bob:.1,frequency:4.3,accent:16734778,glow:16773800,moveSpeed:2.321},"mushroom-king":{model:"hollow-wraith",label:"วิญญาณ",height:1.95,footprint:2.05,hover:.2,bob:.08,frequency:2.2,accent:9428223,glow:9430271,moveSpeed:.75},"blue-demon":{model:"bat-gargoyle",label:"การ์กอยล์ · Ion",height:1.6,footprint:2.35,hover:1.05,bob:.1,frequency:3.6,accent:9157375,tint:11386879,elite:!0,glow:9165055,moveSpeed:2.2},herald:{model:"rally-herald",label:"ผู้ปลุกฝูง",height:1.68,footprint:1.95,hover:0,bob:.05,frequency:3.4,accent:6285508,glow:6285508,moveSpeed:1.1}},M_=n=>Gu.includes(Jt[n].model);Object.keys(Jt).filter(n=>!M_(n));[...new Set(Object.values(Jt).map(n=>n.model))].filter(n=>!Gu.includes(n));const Oi={landscape:{image:"island.webp",size:[2304,1184],frame:[384,96,1920,1120],plaza:[1152,566],island:[660,315],outline:[[448,544],[456,468],[488,410],[520,392],[557,360],[594,372],[614,348],[662,316],[710,304],[758,276],[806,248],[854,232],[902,204],[950,200],[998,204],[1046,212],[1094,188],[1142,188],[1190,208],[1238,220],[1286,212],[1334,228],[1382,248],[1430,256],[1466,212],[1500,204],[1528,170],[1556,204],[1592,208],[1622,256],[1670,248],[1718,312],[1766,400],[1814,452],[1840,520],[1856,544],[1856,556],[1840,600],[1832,700],[1814,760],[1800,790],[1766,864],[1718,896],[1670,916],[1622,952],[1574,984],[1526,972],[1478,996],[1430,1020],[1382,1044],[1334,1048],[1286,1044],[1238,1056],[1190,1040],[1142,1048],[1094,1076],[1046,1068],[998,1020],[950,984],[902,1004],[854,1012],[806,1012],[758,976],[710,936],[662,868],[614,908],[566,864],[540,796],[520,762],[496,718],[472,654],[456,610],[448,572]],gates:[{mouth:[555,476,37,48],art:[456,362,656,554]},{mouth:[1529,284,35,48],art:[1430,172,1626,366]},{mouth:[1649,676,37,47],art:[1546,553,1747,748],front:702}],gateArt:"island-gates.webp",tower:{image:"tower.webp",base:[1152,566],width:312},actorScale:30}},S_="layout-b",E_=[{role:"short",control:[[-6.188,-14.702],[-3.162,-14.719],[-.287,-13.545],[1.169,-10.738],[.937,-7.34],[.654,-3.546]]},{role:"long",control:[[2.984,16.108],[3.871,13.902],[5.475,12.393],[7.461,11.84],[9.25,10.456],[10.302,6.961],[10.264,2.52],[9.031,-.46],[6.986,-1.024],[4.74,-.806],[2.655,-.266]]},{role:"medium",control:[[-9.957,13.246],[-12.334,11.329],[-13.94,8.906],[-14.626,5.593],[-13.972,2.047],[-11.372,-.948],[-8.269,-1.56],[-5.466,-1.404],[-3.111,-.901]]}],T_="island-day",A_={width:2.6,tile:"slab"},R_={at:[0,0],radius:3.6},C_=.8,P_=JSON.parse('[{"piece":"trees-10","at":[-14.45,-9.21],"width":2.29,"flip":true},{"piece":"trees-32","at":[-12.67,-9.33],"width":1.14},{"piece":"trees-00","at":[-11.05,-12.47],"width":2.35,"flip":true},{"piece":"trees-33","at":[-10.35,-14.28],"width":1.45},{"piece":"trees-13","at":[-12.31,-10.52],"width":2.63,"flip":true},{"piece":"trees-30","at":[-11.57,-9.41],"width":1.42},{"piece":"trees-20","at":[-7.03,1.81],"width":2.42,"flip":true},{"piece":"trees-30","at":[-8.28,0.93],"width":1.21},{"piece":"trees-31","at":[-6.55,7.64],"width":1.15},{"piece":"trees-00","at":[-5.47,12.47],"width":2.24},{"piece":"trees-23","at":[-2.88,6.13],"width":2.64},{"piece":"trees-00","at":[-3.03,4.62],"width":2.71},{"piece":"trees-10","at":[-5.48,5.41],"width":2.59,"flip":true},{"piece":"trees-30","at":[-4.4,3.78],"width":1.32},{"piece":"trees-13","at":[-3.83,15.7],"width":2.68,"flip":true},{"piece":"trees-31","at":[-4.44,14.5],"width":1.31},{"piece":"trees-31","at":[-2.58,-8.39],"width":1.17},{"piece":"trees-11","at":[-0.95,4.95],"width":2.72,"flip":true},{"piece":"trees-01","at":[-0.2,6.27],"width":2.28,"flip":true},{"piece":"trees-21","at":[-2.36,13.02],"width":2.15},{"piece":"trees-33","at":[-0.75,11.39],"width":1.39},{"piece":"trees-12","at":[-2.49,14.55],"width":2.51,"flip":true},{"piece":"trees-30","at":[-0.69,13.04],"width":1.48},{"piece":"trees-11","at":[9.04,-12.25],"width":2.4},{"piece":"trees-12","at":[8.61,-10.66],"width":2.56,"flip":true},{"piece":"trees-00","at":[5.97,2.47],"width":2.11},{"piece":"trees-12","at":[16.04,-5.18],"width":2.73},{"piece":"trees-30","at":[14.89,-2.06],"width":1.35},{"piece":"trees-20","at":[15.53,1.28],"width":2.64},{"piece":"trees-00","at":[16.51,2.94],"width":2.74},{"piece":"trees-02","at":[15.32,4.34],"width":2.32,"flip":true},{"piece":"rocks-03","at":[-9.62,5.06],"width":1.36},{"piece":"rocks-01","at":[-2.97,-9.51],"width":1.41,"flip":true},{"piece":"rocks-33","at":[-4.35,10.28],"width":1.52,"flip":true},{"piece":"rocks-22","at":[-9.16,2.15],"width":1.82,"flip":true},{"piece":"rocks-00","at":[5.78,3.87],"width":1.78,"flip":true},{"piece":"rocks-33","at":[-2.01,7.32],"width":1.91,"flip":true},{"piece":"rocks-02","at":[5.96,-8],"width":1.5},{"piece":"rocks-02","at":[5.19,-11.83],"width":1.3},{"piece":"rocks-01","at":[2.83,5.73],"width":1.52},{"piece":"rocks-22","at":[6.04,-9.29],"width":1.62},{"piece":"rocks-21","at":[8.84,-8.76],"width":1.8,"flip":true},{"piece":"rocks-03","at":[-2.9,8.92],"width":1.9,"flip":true},{"piece":"rocks-22","at":[4.94,5.84],"width":1.99},{"piece":"rocks-30","at":[6.47,-10.63],"width":1.34,"flip":true},{"piece":"rocks-20","at":[-4.42,7.61],"width":2.2},{"piece":"rocks-10","at":[-6.09,6.99],"width":0.95,"flip":true},{"piece":"rocks-22","at":[-4.1,6.29],"width":1.2},{"piece":"rocks-20","at":[0,8.92],"width":2.2},{"piece":"rocks-13","at":[1.47,8.21],"width":1.1},{"piece":"rocks-12","at":[-1.42,8.14],"width":0.95},{"piece":"rocks-21","at":[0.27,7.27],"width":1.2},{"piece":"rocks-20","at":[-6.19,3.86],"width":2.2,"flip":true},{"piece":"rocks-12","at":[-7.69,3.06],"width":0.95},{"piece":"rocks-22","at":[-5.87,2.19],"width":1.2},{"piece":"trees-30","at":[14.34,-3.23],"width":1.4},{"piece":"trees-13","at":[-3.45,12.13],"width":2.2},{"piece":"trees-01","at":[2.57,4.6],"width":2.2},{"piece":"trees-30","at":[14.64,0.38],"width":1.4,"flip":true},{"piece":"trees-21","at":[-0.85,14.09],"width":2.2,"flip":true},{"piece":"trees-13","at":[11.07,-11.78],"width":2.6,"flip":true},{"piece":"trees-00","at":[7.54,-7.66],"width":1.8},{"piece":"trees-20","at":[15.42,-3.02],"width":2.2},{"piece":"trees-10","at":[1.26,6.31],"width":1.7,"flip":true},{"piece":"trees-31","at":[13.56,-4.3],"width":1.1,"flip":true},{"piece":"trees-32","at":[-3.08,16.54],"width":1.1},{"piece":"trees-12","at":[-0.67,7.71],"width":1.8},{"piece":"trees-10","at":[-10.9,-10.84],"width":2.2},{"piece":"trees-22","at":[-3.31,13.57],"width":1.7},{"piece":"trees-33","at":[-1.27,6.39],"width":1.4,"flip":true},{"piece":"trees-02","at":[14.1,9.25],"width":2.2,"flip":true},{"piece":"trees-32","at":[-11.87,-7.78],"width":1.4},{"piece":"trees-12","at":[-5.34,9.86],"width":2.2},{"piece":"trees-32","at":[8.2,-6.64],"width":1.4,"flip":true},{"piece":"trees-30","at":[13.24,10.87],"width":1.4},{"piece":"trees-32","at":[-5.06,3.6],"width":1.1,"flip":true},{"piece":"trees-33","at":[7.94,-5.79],"width":1.1,"flip":true},{"piece":"trees-31","at":[-1.07,12.15],"width":1.4,"flip":true},{"piece":"trees-23","at":[7.91,-11.67],"width":1.7,"flip":true},{"piece":"trees-30","at":[14.51,3.78],"width":1.1,"flip":true},{"piece":"trees-33","at":[-14.2,-10.16],"width":1.1},{"piece":"trees-33","at":[-6.54,5.89],"width":1.4},{"piece":"trees-31","at":[-1.85,12.23],"width":1.1},{"piece":"trees-02","at":[-2.83,10.39],"width":2.2,"flip":true},{"piece":"trees-33","at":[13.28,-5.29],"width":1.4},{"piece":"trees-20","at":[14.75,7.65],"width":2.2},{"piece":"trees-33","at":[-11.73,-6.83],"width":1.4,"flip":true},{"piece":"trees-20","at":[15.59,-0.7],"width":2.2},{"piece":"trees-02","at":[-0.76,15.32],"width":1.7,"flip":true},{"piece":"trees-30","at":[-5.66,8],"width":1.4,"flip":true},{"piece":"trees-30","at":[-0.13,12.54],"width":1.1,"flip":true},{"piece":"trees-20","at":[-6.28,16.2],"width":2.2},{"piece":"trees-23","at":[-5.3,1.54],"width":1.8},{"piece":"trees-32","at":[3.52,6.42],"width":1.4},{"piece":"trees-30","at":[8.94,15.17],"width":1.4},{"piece":"trees-20","at":[-5.57,14.79],"width":2.6},{"piece":"trees-23","at":[11.81,-12.96],"width":1.7},{"piece":"trees-33","at":[-5.24,15.82],"width":1.1},{"piece":"trees-32","at":[5.4,-11.04],"width":1.4},{"piece":"trees-33","at":[-4.69,16.72],"width":1.4},{"piece":"trees-13","at":[16.5,4.56],"width":1.7,"flip":true},{"piece":"trees-31","at":[-9.9,4.17],"width":1.4,"flip":true},{"piece":"trees-20","at":[15.8,6.59],"width":1.8},{"piece":"trees-31","at":[-13.95,-6.43],"width":1.1},{"piece":"trees-30","at":[4.7,-6.34],"width":1.1},{"piece":"trees-31","at":[-15.27,-6.25],"width":1.4,"flip":true},{"piece":"trees-13","at":[-7.21,6.49],"width":1.7},{"piece":"trees-03","at":[10.35,-7.22],"width":1.7},{"piece":"trees-30","at":[-10.65,-8.96],"width":1.4,"flip":true},{"piece":"trees-20","at":[16.64,-1.26],"width":1.7},{"piece":"trees-30","at":[6.6,-6.12],"width":1.1,"flip":true},{"piece":"trees-10","at":[-12.94,-7.91],"width":1.7,"flip":true},{"piece":"trees-33","at":[5.9,-6.45],"width":1.4},{"piece":"trees-31","at":[15.42,5.71],"width":1.4,"flip":true},{"piece":"trees-31","at":[11.35,-10.52],"width":1.1},{"piece":"trees-30","at":[16.32,5.8],"width":1.4,"flip":true},{"piece":"trees-31","at":[-10.73,-7.97],"width":1.4,"flip":true},{"piece":"trees-33","at":[11.25,-5.61],"width":1.4,"flip":true},{"piece":"trees-12","at":[10.07,-13.43],"width":2.6,"flip":true},{"piece":"trees-32","at":[9.01,-7.94],"width":1.1,"flip":true},{"piece":"trees-11","at":[-7.69,5.3],"width":1.8,"flip":true},{"piece":"trees-11","at":[-8.54,4.37],"width":1.8},{"piece":"trees-10","at":[-0.94,10.28],"width":2.2},{"piece":"trees-33","at":[14.37,-4.07],"width":1.4,"flip":true},{"piece":"trees-23","at":[4.36,3.79],"width":1.8},{"piece":"trees-30","at":[-5.18,10.92],"width":1.4},{"piece":"trees-32","at":[-12.02,-8.48],"width":1.1,"flip":true},{"piece":"trees-32","at":[-0.95,9.01],"width":1.1,"flip":true},{"piece":"trees-11","at":[-8.67,3.26],"width":1.8,"flip":true},{"piece":"trees-03","at":[14.53,5.37],"width":1.8},{"piece":"trees-31","at":[-0.01,10.22],"width":1.1},{"piece":"trees-20","at":[9.62,-9.47],"width":1.7},{"piece":"trees-33","at":[-16.01,-4.06],"width":1.1,"flip":true},{"piece":"trees-33","at":[-13.3,-10.88],"width":1.1},{"piece":"trees-31","at":[-13.35,-10.11],"width":1.1,"flip":true},{"piece":"trees-22","at":[-16.24,-5.59],"width":1.7},{"piece":"trees-31","at":[12.21,-11.13],"width":1.1},{"piece":"trees-33","at":[9.66,-10.87],"width":1.1,"flip":true},{"piece":"trees-33","at":[-15.16,-5.24],"width":1.1,"flip":true},{"piece":"trees-30","at":[-3.11,-10.6],"width":1.1,"flip":true},{"piece":"trees-30","at":[6.62,-8.73],"width":1.1,"flip":true},{"piece":"trees-32","at":[-3.46,-8.65],"width":1.1},{"piece":"trees-33","at":[-7.77,8.15],"width":1.1,"flip":true},{"piece":"trees-01","at":[-1.96,16.78],"width":2.2},{"piece":"trees-31","at":[10.32,14.29],"width":1.1},{"piece":"trees-31","at":[-13.31,-6.6],"width":1.1,"flip":true},{"piece":"trees-21","at":[7.86,15.42],"width":1.7},{"piece":"trees-30","at":[4.67,6.98],"width":1.1,"flip":true},{"piece":"trees-23","at":[14.66,6.48],"width":1.7},{"piece":"trees-31","at":[-2.23,-9.85],"width":1.4,"flip":true},{"piece":"trees-31","at":[3.11,-17.27],"width":1.1,"flip":true},{"piece":"trees-32","at":[9.63,-6.61],"width":1.4},{"piece":"trees-31","at":[5.79,-10.06],"width":1.1},{"piece":"trees-30","at":[-2.49,11.28],"width":1.1},{"piece":"trees-30","at":[-8.84,5.66],"width":1.4,"flip":true},{"piece":"trees-33","at":[-14.03,-7.5],"width":1.4,"flip":true},{"piece":"trees-32","at":[-6.11,11.15],"width":1.1,"flip":true},{"piece":"trees-31","at":[2.31,7.09],"width":1.4,"flip":true},{"piece":"trees-31","at":[12.36,-5.43],"width":1.1,"flip":true},{"piece":"trees-32","at":[16.22,0.07],"width":1.1},{"piece":"trees-31","at":[10.71,-6.28],"width":1.4},{"piece":"trees-32","at":[4.15,5.27],"width":1.4,"flip":true},{"piece":"trees-22","at":[-7.4,4.17],"width":2.2,"flip":true},{"piece":"trees-03","at":[4.43,2.63],"width":2.2,"flip":true},{"piece":"trees-33","at":[9.71,-5.25],"width":1.1,"flip":true},{"piece":"trees-30","at":[-8.8,6.7],"width":1.1,"flip":true},{"piece":"trees-30","at":[-1.05,16.33],"width":1.4},{"piece":"trees-32","at":[-6.53,8.74],"width":1.1},{"piece":"trees-03","at":[16.78,-2.28],"width":1.8},{"piece":"trees-20","at":[-4.45,2.56],"width":2.2},{"piece":"trees-32","at":[-4.16,11.09],"width":1.4},{"piece":"trees-21","at":[-15.35,-7.81],"width":1.7},{"piece":"trees-30","at":[16.97,-4.09],"width":1.4},{"piece":"trees-32","at":[14.66,-0.62],"width":1.1},{"piece":"trees-33","at":[14.49,-5.5],"width":1.4,"flip":true},{"piece":"trees-33","at":[2.17,7.81],"width":1.1,"flip":true}]'),I_={seed:28,spacing:[.55,1.1],mix:{tuft:.35,flower:.3,bush:.25,rock:.1}},L_={seed:29,count:45,cluster:3,pieces:["flowers-00","flowers-00","flowers-00","flowers-00","flowers-00","flowers-00","flowers-01","flowers-01","flowers-01","flowers-01","flowers-01","flowers-01","flowers-02","flowers-02","flowers-02","flowers-02","flowers-02","flowers-02","flowers-03","flowers-03","flowers-03","flowers-03","flowers-03","flowers-03","flowers-10","flowers-10","flowers-11","flowers-11","flowers-12","flowers-12","flowers-13","flowers-13","flowers-20","flowers-21","flowers-22","flowers-23","flowers-30","flowers-30","flowers-31","flowers-31","flowers-32","flowers-32","flowers-33","flowers-33"]},D_=[{at:[13.29,-8.32],radius:2.6},{at:[6.58,-14.54],radius:2.6},{at:[-17.05,.74],radius:2.6}],Wu={id:S_,lanes:E_,base:T_,road:A_,plaza:R_,pace:C_,decor:P_,edgeDecor:I_,fieldDecor:L_,keepClear:D_},jo=["short","long","medium"],$h=["tuft","flower","bush","rock"];class Ko extends Error{constructor(){super(...arguments);S(this,"name","LevelDataError")}}const Xh=801;function k_(n){const e=n.map(([a,o])=>({x:a,z:o})),t=[];for(let a=0;a<e.length-1;a++){const o=e[Math.max(0,a-1)],l=e[a],c=e[a+1],h=e[Math.min(e.length-1,a+2)];for(let d=0;d<32;d++){const u=d/32,f=u*u,g=f*u,v=(m,p,w,E)=>.5*(2*p+(-m+w)*u+(2*m-5*p+4*w-E)*f+(-m+3*p-3*w+E)*g);t.push({x:v(o.x,l.x,c.x,h.x),z:v(o.z,l.z,c.z,h.z)})}}t.push(e[e.length-1]);const i=[0];for(let a=1;a<t.length;a++)i.push(i[a-1]+Math.hypot(t[a].x-t[a-1].x,t[a].z-t[a-1].z));const s=i[i.length-1],r=[];for(let a=0,o=0;a<Xh;a++){const l=s*a/(Xh-1);for(;o<t.length-2&&i[o+1]<l;)o++;const c=(l-i[o])/Math.max(1e-9,i[o+1]-i[o]);r.push({x:t[o].x+(t[o+1].x-t[o].x)*c,z:t[o].z+(t[o+1].z-t[o].z)*c})}return{points:r,length:s}}const Tn=n=>typeof n=="object"&&n!==null&&!Array.isArray(n),qh=n=>typeof n=="string"&&/^[a-z]+(-[a-z]+)*-\d\d$/.test(n),fa=n=>Object.freeze([n[0],n[1]]),Zo=n=>typeof n=="string"&&/^[a-z0-9]+(-[a-z0-9]+)*$/.test(n),ms=n=>Array.isArray(n)&&n.length===2&&Number.isFinite(n[0])&&Number.isFinite(n[1]),U_=new Set(["level-01"]),Jo=n=>!U_.has(n.id);function $u(n){if(!Tn(n))throw new Ko("level: not an object");const{id:e,lanes:t,base:i,road:s,plaza:r,pace:a=1,decor:o=[],fences:l=[],edgeDecor:c,fieldDecor:h,keepClear:d=[]}=n;if(!Zo(e))throw new Ko('level: id must be lower-case words joined by "-"');const u=x=>new Ko(`${e}: ${x}`);if(!Array.isArray(t)||t.length!==jo.length)throw u(`lanes must be ${jo.length}`);const f=jo.map((x,R)=>{const C=t[R];if(!Tn(C))throw u(`lanes[${R}] is not an object`);if(C.role!==x)throw u(`lanes[${R}].role must be "${x}"`);const{control:A}=C;if(!Array.isArray(A)||A.length<2)throw u(`lanes[${R}].control needs 2 or more points`);for(let y=0;y<A.length;y++)if(!ms(A[y]))throw u(`lanes[${R}].control[${y}] is not [x, z]`);const{points:k,length:M}=k_(A);if(!Number.isFinite(M)||!k.every(y=>Number.isFinite(y.x)&&Number.isFinite(y.z)))throw u(`lanes[${R}] is too long to sample`);if(!(M>1e-6))throw u(`lanes[${R}] has no length`);return Object.freeze({role:x,points:Object.freeze(k.map(y=>Object.freeze(y))),length:M})});if(!Zo(i))throw u('base must be a kit name like "island-day"');if(!Tn(s)||!(typeof s.width=="number"&&s.width>=1&&s.width<=4))throw u("road.width must be 1–4 world units");if(!Zo(s.tile))throw u('road.tile must be a kit name like "slab"');if(!Tn(r)||!ms(r.at))throw u("plaza.at is not [x, z]");if(!(typeof r.radius=="number"&&r.radius>0&&r.radius<=8))throw u("plaza.radius must be above 0 and at most 8");if(!(typeof a=="number"&&a>=.5&&a<=1.5))throw u("pace must be 0.5–1.5");const g=(x,R)=>{if(!Array.isArray(x))throw u(`${R} must be a list`);return x},v=g(o,"decor").map((x,R)=>{if(!Tn(x)||!qh(x.piece))throw u(`decor[${R}].piece must be an atlas piece like "trees-00"`);if(!ms(x.at))throw u(`decor[${R}].at is not [x, z]`);if(!(typeof x.width=="number"&&x.width>0&&x.width<=20))throw u(`decor[${R}].width must be above 0 and at most 20`);return Object.freeze({piece:x.piece,at:fa(x.at),width:x.width,...x.flip===!0?{flip:!0}:{}})}),m=g(l,"fences").map((x,R)=>{if(!Tn(x)||!Array.isArray(x.points)||x.points.length<2)throw u(`fences[${R}].points needs 2 or more points`);const C=x.points;for(let A=0;A<C.length;A++)if(!ms(C[A]))throw u(`fences[${R}].points[${A}] is not [x, z]`);return Object.freeze({points:Object.freeze(C.map(fa))})}),p=g(d,"keepClear").map((x,R)=>{if(!Tn(x)||!ms(x.at))throw u(`keepClear[${R}].at is not [x, z]`);if(!(typeof x.radius=="number"&&x.radius>0))throw u(`keepClear[${R}].radius must be above 0`);return Object.freeze({at:fa(x.at),radius:x.radius})});let w;if(c!==void 0){if(!Tn(c)||!Number.isFinite(c.seed))throw u("edgeDecor.seed must be a number");const x=c.spacing;if(!ms(x)||!(x[0]>0&&x[1]>=x[0]))throw u("edgeDecor.spacing must be [min, max] above 0");const R=c.mix;if(!Tn(R)||!Object.entries(R).every(([C,A])=>$h.includes(C)&&typeof A=="number"&&A>=0)||!Object.values(R).some(C=>C>0))throw u(`edgeDecor.mix must share out ${$h.join(", ")}`);w=Object.freeze({seed:c.seed,spacing:fa(x),mix:Object.freeze({...R})})}let E;if(h!==void 0){if(!Tn(h)||!Number.isFinite(h.seed))throw u("fieldDecor.seed must be a number");if(!(Number.isInteger(h.count)&&h.count>=0))throw u("fieldDecor.count must be a whole number");if(!Array.isArray(h.pieces)||!h.pieces.length||!h.pieces.every(qh))throw u("fieldDecor.pieces must list atlas pieces");if(h.cluster!==void 0&&!(Number.isInteger(h.cluster)&&h.cluster>=1&&h.cluster<=5))throw u("fieldDecor.cluster must be a whole number 1 to 5");E=Object.freeze({seed:h.seed,count:h.count,pieces:Object.freeze([...h.pieces]),...h.cluster!==void 0?{cluster:h.cluster}:{}})}return Object.freeze({id:e,lanes:Object.freeze(f),base:i,pace:a,decor:Object.freeze(v),fences:Object.freeze(m),keepClear:Object.freeze(p),...w?{edgeDecor:w}:{},...E?{fieldDecor:E}:{},road:Object.freeze({width:s.width,tile:s.tile}),plaza:Object.freeze({at:Object.freeze([r.at[0],r.at[1]]),radius:r.radius})})}const Xu={speed:1.6,main:3,of:5},N_=19.87/15;function F_(n,e){return e*19.87/eo(n)}let Qa=$u(Wu);function wt(){return Qa}function O_(n){Qa=n}function B_(){return Qa.pace}const qu=n=>Qa.lanes[(n%3+3)%3];function eo(n){return qu(n).length}function Yu(n,e){const t=qu(n).points,s=Math.max(0,Math.min(1,e))*(t.length-1),r=Math.min(t.length-2,Math.floor(s)),a=s-r;return{x:t[r].x+(t[r+1].x-t[r].x)*a,z:t[r].z+(t[r+1].z-t[r].z)*a}}const Yh=18.2,jh={from:[6,36.5,-47],to:[0,-1.5,0]};function z_(n,e){return e?new URLSearchParams(n).get("level"):null}const Kh=n=>{const e=Math.hypot(...n);return n.map(t=>t/e)},Dn=(()=>{const n=jh.from,e=jh.to,t=Kh([n[0]-e[0],n[1]-e[1],n[2]-e[2]]),i=Kh([t[2],0,-t[0]]),s=[t[1]*i[2]-t[2]*i[1],t[2]*i[0]-t[0]*i[2],t[0]*i[1]-t[1]*i[0]];return{right:i,up:s,sinPitch:t[1],cosPitch:Math.hypot(t[0],t[2]),yaw:Math.atan2(t[0],t[2])}})();class Zh{constructor(e){S(this,"sx");S(this,"sy");this.layout=e,this.sx=e.island[0]/Yh,this.sy=e.island[1]/(Yh*Dn.sinPitch)}toImage(e,t){const{right:i,up:s}=Dn;return[this.layout.plaza[0]+this.sx*(e*i[0]+t*i[2]),this.layout.plaza[1]-this.sy*(e*s[0]+t*s[2])]}toWorld(e,t){const{right:i,up:s}=Dn,r=(e-this.layout.plaza[0])/this.sx,a=-(t-this.layout.plaza[1])/this.sy,o=i[0]*s[2]-i[2]*s[0];return{x:(r*s[2]-a*i[2])/o,z:(i[0]*a-s[0]*r)/o}}}function H_(n,e=121){return[0,1,2].map(t=>Array.from({length:e},(i,s)=>{const r=Yu(t,s/(e-1));return n.toImage(r.x,r.z)}))}const ju=1.55,Ku=1.35;function V_(n){return Math.max(...Object.values(Jt).map(t=>t.height+t.hover))*ju*n.actorScale*Ku+12}function G_(n,e,t=36,i=[]){const s=[...e.flat(),n.plaza],r=[...n.gates.map(a=>a.art),...i];return[Math.min(...s.map(a=>a[0]),...r.map(a=>a[0]))-t,Math.min(...s.map(a=>a[1]-V_(n)),...r.map(a=>a[1])),Math.max(...s.map(a=>a[0]),...r.map(a=>a[2]))+t,Math.max(...s.map(a=>a[1]+t),...r.map(a=>a[3]))]}const W_=.88,$_=.08;function X_(n,e=24){return n.flatMap((t,i)=>{const s=n[(i+1)%n.length],r=Math.max(1,Math.ceil(Math.hypot(s[0]-t[0],s[1]-t[1])/e));return Array.from({length:r},(a,o)=>[t[0]+(s[0]-t[0])*o/r,t[1]+(s[1]-t[1])*o/r])})}function q_(n,e,[t,i],s,r,a){const o=a.margin??8;return n.every(([l,c])=>{const h=t+l*e,d=i+c*e;return h>=0&&h<=s&&d>=0&&d<=r&&a.panels.every(([u,f,g,v])=>h<u-o||h>g+o||d<f-o||d>v+o)})}class Y_{constructor(){S(this,"widest",new Map);S(this,"screen","")}update(e,t,i){let s=!1;const r=`${e}x${t}`;r!==this.screen&&(this.widest.clear(),this.screen=r,s=!0);for(const[a,o]of i){const l=this.widest.get(a),c=l?[Math.min(l[0],o[0]),Math.min(l[1],o[1]),Math.max(l[2],o[2]),Math.max(l[3],o[3])]:o;(!l||c.some((h,d)=>Math.abs(h-l[d])>.5))&&(this.widest.set(a,c),s=!0)}return s}get boxes(){return[...this.widest.values()]}}function j_(n,e,t,i,s,r,a,o,l){const c=Math.ceil(i),h=Math.floor(s)-c+1,d=l.margin??8;if(h<1)return null;const u=new Int32Array(h+1),f=(m,p)=>{const w=Math.max(0,Math.ceil(m)-c),E=Math.min(h-1,Math.floor(p)-c);w<=E&&(u[w]++,u[E+1]--)};for(const[m,p]of n){const w=t+m*e,E=p*e;if(w<0||w>a){u[0]++,u[h]--;continue}f(-1/0,-E-1e-6),f(o-E+1e-6,1/0);for(const[x,R,C,A]of l.panels)w>=x-d&&w<=C+d&&f(Math.max(R-d,0)-E,Math.min(A+d,o)-E)}let g=null,v=0;for(let m=0;m<h;m++){v+=u[m];const p=c+m;(!g||v<g.covered||v===g.covered&&Math.abs(p-r)<Math.abs(g.oy-r))&&(g={oy:p,covered:v})}return g}function Jh(n,e,t,i,s,r){const{size:a,frame:[o,l,c,h],plaza:d}=t;let u=Math.max(n/(c-o),e/(h-l)),f=[n/2-d[0]*u,e/2-(l+h)/2*u];if(i&&s){const[v,m,p,w]=s,E=Math.max(1,i.bottom-i.top),x=(A,k,M,y,L,D,B,G,Y)=>{let X=Y-G*A;return X=L>=k?Math.min(Math.max(X,k-L),0):(k-L)/2,Math.max(Math.min(X,y-B*A),M-D*A)},R=A=>[x(A,n,0,n,a[0]*A,v,p,d[0],n/2),x(A,e,i.top,i.bottom,a[1]*A,m,w,(m+w)/2,(i.top+i.bottom)/2)];u=Math.min(u,E/(w-m),n/(p-v)),f=R(u);const C=r?X_(r.outline):[];if(r&&!q_(C,u,f,n,e,r)){const A=u,k=12,M=Math.max(A*W_,Math.min(A,Math.max(n/a[0],e/a[1])));let y=null;const L=Math.floor(n*$_/8);for(let D=0;D<=k&&(y==null?void 0:y.covered)!==0;D++){const B=A-(A-M)*D/k,[G,Y]=R(B),X=a[0]*B;let se=i.top-m*B,z=i.bottom-w*B;const ce=Math.max(se,e-a[1]*B),ue=Math.min(z,0);ce<=ue&&([se,z]=[ce,ue]);for(let ge=0;ge<=2*L&&(y==null?void 0:y.covered)!==0;ge++){const Ue=G+(ge%2?1:-1)*Math.ceil(ge/2)*8;if(Ue+v*B<-1e-6||Ue+p*B>n+1e-6||G<=1e-6&&G+X>=n-1e-6&&(Ue>1e-6||Ue+X<n-1e-6))continue;const De=j_(C,B,Ue,se,z,Y,n,e,r);De&&(!y||De.covered<y.covered)&&(y={scale:B,offset:[Ue,De.oy],covered:De.covered})}}y&&({scale:u,offset:f}=y)}}const g=f[0]<=1e-6&&f[1]<=1e-6&&f[0]+a[0]*u>=n-1e-6&&f[1]+a[1]*u>=e-1e-6;return{scale:u,offset:f,cover:g}}function Qh(n,e){return Math.abs(n.scale-e.scale)>1e-6*Math.max(n.scale,e.scale)||Math.hypot(n.offset[0]-e.offset[0],n.offset[1]-e.offset[1])>1e-6}function K_(n,e,t){return Qh(n,e)?t&&!Qh(n,{scale:e.scale,offset:n.offset})?"slide":"clear":"none"}function Z_(n){const e=[];let t=0;const i=(s,r)=>{const[a,o,l,c]=n.gates[s].art;e.push({gate:s,kind:r,x:t,y:0,w:l-a,h:c-o}),t+=l-a};return n.gates.forEach((s,r)=>i(r,"sealed")),n.gates.forEach((s,r)=>{s.front!==void 0&&i(r,"front")}),{size:[t,Math.max(...n.gates.map(s=>s.art[3]-s.art[1]))],rects:e}}function DS(n,e){const t=[...n].sort((i,s)=>i-s);return t.length?+t[Math.min(t.length-1,Math.floor(t.length*e))].toFixed(2):null}function J_(n,e=[]){var r;const t=new Set,i=a=>{var l;if(Array.isArray(a)){a.forEach(i);return}const o=a;o!=null&&o.isTexture&&((l=o.image)!=null&&l.width)&&o.image.height&&t.add(o)};n.traverse(a=>{for(const o of[a.material].flat())if(!(!o||typeof o!="object")){Object.values(o).forEach(i);for(const l of Object.values(o.uniforms??{}))i(l==null?void 0:l.value)}}),e.forEach(i);let s=0;for(const a of t)s+=a.image.width*a.image.height*4*(a.generateMipmaps||(r=a.mipmaps)!=null&&r.length?4/3:1);return{bytes:s,count:t.size}}const kS=["gates-00","gates-01","gates-10"],US=["gates-sealed-00","gates-sealed-01","gates-sealed-10"],NS=["gates-ruin-00","gates-ruin-01","gates-ruin-10"],Q_=5.5,ex=[{aspect:.9535,foot:.07,mouth:[.4878,.5418,.1958,.2425]},{aspect:.9535,foot:.07,mouth:[.4889,.5429,.1947,.2436]},{aspect:.9557,foot:.07,mouth:[.4945,.5325,.1885,.2332]}];function tx(n,e){return n.lanes.map((t,i)=>{const s=t.points[0],[r,a]=e.toImage(s.x,s.z),o=t.points.find(E=>Math.hypot(E.x-s.x,E.z-s.z)>2)??t.points[t.points.length-1],l=e.toImage(o.x,o.z)[0]>r,c=ex[i],h=Q_*e.sx,d=h*c.aspect,u=a+d*c.foot,f=u-d,g=r-h/2,[v,m,p,w]=c.mouth;return{lane:i,x:r,y:a,w:h,flip:l,art:[g,f,g+h,u],mouth:[g+(l?1-v:v)*h,f+m*d,p*h,w*d]}})}function FS(n){const e=1-Math.max(0,Math.min(1,n));return{open:Math.min(1,2-2*e),sealed:Math.min(1,2*e)}}const ed={"core-lens":1,"core-mine":1,"core-nova-power":1,"core-nova-rush":1,"core-nova-freeze":1,"core-nova-awaken":1,"core-prism":2,"fire-fuel":1,"fire-blast":1,"fire-meteor":1,"fire-wildfire":1,"fire-lava":1,"fire-stack":1,"fire-sunfall":2,"frost-chill":1,"frost-wide":1,"frost-glacier":1,"frost-brittle":1,"frost-field":1,"frost-shatter":1,"frost-ice-age":2,"storm-conductor":1,"storm-overcharge":1,"storm-chain":1,"storm-thunder":1,"storm-static":1,"storm-clap":1,"storm-tempest":2},yt=(n,e,t,i,s,r)=>({id:n,branch:e,slot:t,cost:t==="cap"?2:1,name:i,effect:s,counters:r}),kn=[yt("core-pierce","core","II-A","ลูกศรทะลุแนว","ลูกศรอีเธอร์ทะลุไป โดนศัตรูตัวหลัง ในทางเดียวกัน อีก 2 ตัว แรง 50%",["split"]),yt("core-split","core","II-B","ลูกศรแยก","ลูกศรอีเธอร์ยิง 2 เป้าพร้อมกัน เป้ารองแรง 50%",["flying"]),yt("core-mark","core","III-A","ตราอีเธอร์","ศัตรูที่โดนลูกศรอีเธอร์ ติดตรา 3 วินาที รับดาเมจจากไฟ น้ำแข็ง และสายฟ้า เพิ่ม 20%",["armor","boss"]),yt("core-mine","core","III-B","เหมืองอีเธอร์","พลังงานจากการกำจัดศัตรูเพิ่ม 15%",[]),yt("core-prism","core","cap","แกนปริซึม","ลูกศรอีเธอร์ยิง 3 เป้าพร้อมกัน เป้ารองแรง 50%",["flying","split"]),yt("fire-meteor","fire","II-A","อุกกาบาต","สกิลทุก 7.5 วินาที: หินตกใส่จุดที่ศัตรูหนาแน่นที่สุด แรง ×3 ไม่สนเกราะ",["armor"]),yt("fire-wildfire","fire","II-B","ไฟลาม","สกิลทุก 5 วินาที: ฝนไฟ 4 ลูกจุดไฟศัตรู 4 ตัว และตัวที่ตายขณะติดไฟ ไฟลามไปอีก 2 ตัว",["split"]),yt("fire-lava","fire","III-A","หลุมลาวา","อุกกาบาตทิ้งลาวาไว้ 3 วินาที ลาวาทำให้ศัตรูบนพื้นติดไฟ",["regen"]),yt("fire-stack","fire","III-B","ไฟซ้อน","ไฟเผาซ้อนกันได้ 3 ชั้น",["regen"]),yt("fire-sunfall","fire","cap","สุริยะถล่ม","อุกกาบาตเป็นหินยักษ์ แรง ×1.5 รัศมี ×1.5 หรือฝนไฟเพิ่มเป็น 8 ลูก",["armor","split"]),yt("frost-glacier","frost","II-A","ธารน้ำแข็ง","สกิลทุก 7 วินาที: แช่แข็งศัตรูรอบตัวหน้าสุด หยุดนิ่ง 1 วินาที",["dash","boss"]),yt("frost-brittle","frost","II-B","เปราะแตก","สกิลทุก 6 วินาที: หอกน้ำแข็งทะลุแนว ตัวที่โดนเปราะ 4 วินาที รับดาเมจเพิ่ม 20% และโดนเจาะเกราะ 50%",["armor","shield"]),yt("frost-field","frost","III-A","ทุ่งน้ำแข็ง","การแช่แข็งทิ้งน้ำแข็งไว้ 4 วินาที ชะลอศัตรูบนพื้นที่เดินเข้า",["dash"]),yt("frost-shatter","frost","III-B","แตกกระจาย","ตัวที่ตายขณะเปราะ ระเบิดเศษน้ำแข็งใส่ตัวรอบ ๆ",["split"]),yt("frost-ice-age","frost","cap","ยุคน้ำแข็ง","พายุหิมะรัศมี 9 รอบป้อม ชะลอศัตรู 15% น้ำแข็งยิงเร็วขึ้น 25% และสกิลน้ำแข็งใหญ่ขึ้น",["flying","dash"]),yt("storm-chain","storm","II-A","ลูกโซ่ไม่ขาด","สกิลทุก 6 วินาที: สายฟ้าชิ่งใหญ่ 8 เป้า ข้ามเลน ดาเมจไม่ลดตามการชิ่ง",["split","flying"]),yt("storm-thunder","storm","II-B","ฟ้าผ่า","สกิลทุก 6 วินาที: ฟ้าผ่าตัวที่ HP มากที่สุดและอีก 1 ตัว (สายฟ้าระดับ 2 ขึ้นไปเพิ่มเป้า) แรง ×3 หยุดนิ่ง 0.5 วินาที",["armor","shield","boss"]),yt("storm-static","storm","III-A","สนามประจุ","ตัวที่มีประจุ เมื่อโดนไฟหรือน้ำแข็ง จะปล่อยสายฟ้าแรง 40% ไปหาตัวข้าง ๆ (ต้องมีไฟหรือน้ำแข็ง)",[]),yt("storm-clap","storm","III-B","ฟ้าคำราม","ฟ้าผ่าสร้างคลื่นกระแทกรัศมี 2 แรง 50% ของฟ้าผ่า ใส่ศัตรูรอบ ๆ",["split"]),yt("storm-tempest","storm","cap","พายุคลั่ง","สกิลสายฟ้าเรียกฟ้าผ่าลงศัตรูเพิ่ม 5 ตัว (ฟ้าผ่าโดน 5 เป้า)",["flying","shield"])],nx=new Map(kn.map(n=>[n.id,n])),Vi=["core","fire","frost","storm"],_i={core:"อีเธอร์",fire:"ไฟ",frost:"น้ำแข็ง",storm:"สายฟ้า"};function _t(n){const e=nx.get(n);if(!e)throw new Error(`Unknown skill node ${n}`);return e}function zs(n,e){return kn.find(t=>t.branch===n&&t.slot===e)}const Ce={lens:{damage:1.2,pierce:.5},mine:{gold:1.15},pierce:{count:2,reach:3,share:.5},split:{targets:2,splash:.5},prism:{targets:3,splash:.5},mark:{duration:3,taken:1.2},nova:{ether:{slow:2},fire:{damage:1.1},frost:{damage:.7,stun:.6,perLevel:.1,max:1.2},storm:{stun:.3,perLevel:.05,max:.6}},perkLevels:4,novaCard:{damage:72,damageStep:8,cooldown:25,cooldownStep:2,cooldownMin:20,twoChargesAt:5,cost:70,costGrowth:1.5},fuel:{burn:1.6},blast:{radius:1.25},meteor:{cooldown:7.5,damage:3,delay:.6},wildfire:{radius:2.5,count:2,depth:2},rain:{cooldown:5,embers:4,damage:.8,radius:1.2,delay:.45},lava:{radius:2,life:3},stack:{max:3},sunfall:{damage:1.5,radius:1.5,embers:8},chill:{slow:.1,floor:.2},wide:{radius:1.25},glacier:{cooldown:7,radius:2.6,damage:2,stun:1},brittle:{cooldown:6,damage:2.5,width:.9,reach:2,duration:4,taken:1.2,pierce:.5},field:{radius:2.5,life:4,slow:.3},shatter:{ratio:.3,radius:2,cap:3},iceAge:{radius:9,speed:.85,rate:1.25,freeze:1.5,spear:1.6,brittle:6},conductor:{jumps:2,range:1.15},overcharge:{first:1.5,shield:3},chain:{cooldown:6,targets:8,range:1.5,damage:1.5},thunder:{cooldown:6,targets:2,first:3,others:1,stun:.5},staticField:{life:3,ratio:.4},clap:{radius:2,ratio:.5},tempest:{strikes:5},respec:{base:150,step:100},zoneCap:12},di={meteor:{node:"fire-meteor",element:"fire",cap:"fire-sunfall"},rain:{node:"fire-wildfire",element:"fire",cap:"fire-sunfall"},freeze:{node:"frost-glacier",element:"frost",cap:"frost-ice-age"},spear:{node:"frost-brittle",element:"frost",cap:"frost-ice-age"},chain:{node:"storm-chain",element:"storm",cap:"storm-tempest"},thunder:{node:"storm-thunder",element:"storm",cap:"storm-tempest"}},ix={meteor:"meteor",rain:"rain",freeze:"glacier",spear:"brittle",chain:"chain",thunder:"thunder"};function Fc(n){return Ce[ix[n]].cooldown}function Qo(n,e){const t=Object.keys(di).find(i=>di[i].element===e&&n(di[i].node));return t?{id:t,node:di[t].node,ultimate:n(di[t].cap)}:null}const td=new Map;function sx(n){return Math.min(1,Math.max(0,(n-1)/Ce.perkLevels))}const An=(n,e,t=1)=>t+(e-t)*sx(n);function xi(n){const e=Ce.novaCard,t=Math.max(0,n-1);return{damage:e.damage+e.damageStep*t,cooldown:Math.max(e.cooldownMin,e.cooldown-e.cooldownStep*t),charges:n>=e.twoChargesAt?2:1}}function Zu(n){return Math.round(Ce.novaCard.cost*Ce.novaCard.costGrowth**(n-1))}function Br(n){const{fire:e,frost:t,storm:i}=n.levels,s=n.core,r=`${[...n.skills].sort().join(",")};${s},${e},${t},${i}`,a=td.get(r);if(a)return a;const o=h=>n.skills.includes(h),l=Ce,c={boltDamage:An(s,l.lens.damage),boltPierce:An(s,l.lens.pierce,0),boltTargets:o("core-prism")?l.prism.targets:o("core-split")?l.split.targets:1,boltSplash:o("core-prism")?l.prism.splash:l.split.splash,boltLine:o("core-pierce")?l.pierce.count:0,mark:o("core-mark"),goldMul:o("core-mine")?l.mine.gold:1,burnDuration:An(e,l.fuel.burn),fireRadius:An(e,l.blast.radius),wildfire:o("fire-wildfire"),lava:o("fire-lava"),burnStacks:o("fire-stack")?l.stack.max:1,slowBonus:An(t,l.chill.slow,0),frostRadius:An(t,l.wide.radius),iceField:o("frost-field"),shatter:o("frost-shatter"),iceAge:o("frost-ice-age"),stormJumps:Math.round(An(i,l.conductor.jumps,0)),stormRange:An(i,l.conductor.range),stormFirst:An(i,l.overcharge.first),stormShield:An(i,l.overcharge.shield,2),staticField:o("storm-static"),thunderclap:o("storm-clap"),skill:{fire:Qo(o,"fire"),frost:Qo(o,"frost"),storm:Qo(o,"storm")}};return td.set(r,c),c}function Ju(n,e){return n.skills.some(t=>_t(t).branch===e&&(_t(t).slot==="III-A"||_t(t).slot==="III-B"))}function Xs(n,e){const t=_t(e),i=a=>n.skills.includes(a);if(i(e))return{state:"owned"};const s=zs(t.branch,"II-A"),r=zs(t.branch,"II-B");if((t.slot==="II-A"||t.slot==="III-A")&&i(r.id))return{state:"blocked",reason:`เลือกทาง ${r.name} แล้ว`};if((t.slot==="II-B"||t.slot==="III-B")&&i(s.id))return{state:"blocked",reason:`เลือกทาง ${s.name} แล้ว`};if(t.slot==="cap"){const a=n.skills.map(_t).find(o=>o.slot==="cap");if(a)return{state:"blocked",reason:`มีขั้นสูงสุด ${a.name} แล้ว · เลือกได้ 1 ตัวต่อรอบ`}}return(t.branch==="core"?!n.built:n.levels[t.branch]<1)?{state:"locked",reason:t.branch==="core"?"สร้างป้อมก่อน":`ต้องปลดล็อก ${_i[t.branch]} ด้วยพลังงานก่อน`}:t.slot==="III-A"&&!i(s.id)?{state:"locked",reason:`ต้องมี ${s.name} ก่อน`}:t.slot==="III-B"&&!i(r.id)?{state:"locked",reason:`ต้องมี ${r.name} ก่อน`}:t.slot==="cap"&&!Ju(n,t.branch)?{state:"locked",reason:"ต้องมีทักษะชั้น III ในสายนี้ก่อน"}:n.skillPoints<t.cost?{state:"locked",reason:`ต้องมีข้อมูลวิจัย ${t.cost} หน่วย`}:{state:"available"}}function Qu(n,e){const t=[];if(n.phase==="victory"||n.phase==="defeat")return{ok:!1,message:"การต่อสู้จบแล้ว",events:t};const i=Xs(n,e);if(i.state!=="available")return{ok:!1,message:i.state==="owned"?"ปลดโหนดนี้แล้ว":i.reason,events:t};const s=_t(e);return n.skillPoints-=s.cost,n.skills.push(e),t.push({type:s.slot==="cap"?"capstone":"skill",node:e,element:s.branch==="core"?"arcane":s.branch}),{ok:!0,message:`ปลด ${s.name} แล้ว`,events:t}}function ef(n){return Ce.respec.base+Ce.respec.step*n.respecCount}function rx(n){const e=[];if(n.phase!=="ready")return{ok:!1,message:"รีเซ็ตได้ระหว่างระลอกเท่านั้น",events:e};if(!n.skills.length)return{ok:!1,message:"ยังไม่มีโหนดให้รีเซ็ต",events:e};const t=ef(n);if(n.gold<t)return{ok:!1,message:`ต้องการ ${t} พลังงานเพื่อรีเซ็ต`,events:e};const i=n.skills.reduce((s,r)=>s+_t(r).cost,0);return n.gold-=t,n.skillPoints+=i,n.skills=[],n.respecCount++,e.push({type:"respec",value:i}),{ok:!0,message:`รีเซ็ตผังทักษะแล้ว คืนข้อมูลวิจัย ${i} หน่วย`,events:e}}function ax(n,e){const t=_t(e),i=r=>n.skills.includes(r),s=[t.branch==="core"?{label:"สร้างป้อมแล้ว",met:n.built}:{label:`ปลดล็อก ${_i[t.branch]} ด้วยพลังงานแล้ว`,met:n.levels[t.branch]>=1}];if(t.slot==="II-A"||t.slot==="II-B"){const r=zs(t.branch,t.slot==="II-A"?"II-B":"II-A");s.push({label:`ยังไม่ได้เลือกทาง ${r.name}`,met:!i(r.id)})}if(t.slot==="III-A"||t.slot==="III-B"){const r=zs(t.branch,t.slot==="III-A"?"II-A":"II-B");s.push({label:`มี ${r.name}`,met:i(r.id)})}if(t.slot==="cap"){const r=n.skills.map(_t).find(a=>a.slot==="cap"&&a.id!==e);s.push({label:"มีทักษะชั้น III ในสายนี้",met:Ju(n,t.branch)}),s.push({label:"ยังไม่มีขั้นสูงสุดสายอื่น",met:!r})}return s.push({label:`มีข้อมูลวิจัย ${t.cost} หน่วย`,met:i(e)||n.skillPoints>=t.cost}),s}function ox(n){const e=_t(n);if(e.slot==="II-A"||e.slot==="II-B"){const t=zs(e.branch,e.slot==="II-A"?"II-B":"II-A"),i=zs(e.branch,e.slot==="II-A"?"III-B":"III-A");return`เลือกทางนี้จะปิด ${t.name} และ ${i.name}`}return e.slot==="cap"?"เลือกขั้นสูงสุดได้ครั้งละ 1 สาย เปลี่ยนได้เมื่อรีเซ็ตผัง":null}const ti=["split","flying","regen","armor","dash","shield","rally"],zr={"green-blob":{trait:"split"},demon:{trait:"flying"},orc:{trait:"regen",regen:.04},"orc-skull":{trait:"regen",regen:.07},yeti:{trait:"armor"},alien:{trait:"dash"},"mushroom-king":{trait:"shield"},"blue-demon":{trait:"flying",stunImmune:!0},herald:{trait:"rally"}},it={split:{count:2,hp:.2,speed:1.3,radius:.6,reward:1,leakDamage:.5,aliveCap:60,maxProgress:.92},regen:{delay:1.5},armor:{floor:.25,dot:.5},dash:{every:4,telegraph:.3,duration:.8,speed:2.5},shield:{ratio:.5,bossRatio:.6,delay:4,regen:.1,storm:2,fire:1},flying:{storm:1.25,slow:.5},stun:{immunity:2,boss:.3},rally:{radius:3.2,speed:1.3}},lx=Object.freeze({shield:0,maxShield:0,armor:0,sinceDamage:0,dashTimer:0,dashLeft:0,stun:0,stunImmune:0,mini:!1,brittle:0,charged:0,burnStacks:0,burnDepth:0,marked:0,rallied:0});function mn(n){return zr[n].trait}function cx(n){const e=Math.max(0,n-1);return 6*(1+.17*e+.026*e*e)}function tf(n,e,t,i,s){const r=mn(n),a=r==="shield"?Math.round(t*(e?it.shield.bossRatio:it.shield.ratio)):0;return{...lx,shield:a,maxShield:a,armor:r==="armor"?cx(i):0,dashTimer:r==="dash"?it.dash.every-s%4*.5:0}}function Oc(n,e){return Math.max(Ce.chill.floor,Math.max(.45,.8-.025*n)-e)}function nf(n,e){return mn(n)==="flying"?1-(1-e)*it.flying.slow:e}function hx(n,e){const t={damage:0,blocked:0,shieldDamage:0,shieldBroken:!1};if(n.hp<=0||!(e.amount>0))return t;let i=e.amount*(e.taken??1);if(mn(n.kind)==="flying"&&e.element==="storm"&&(i*=it.flying.storm),n.shield>0){const s=e.element==="storm"?e.stormShield??it.shield.storm:e.element==="fire"?it.shield.fire:1,r=Math.min(n.shield,i*s);n.shield-=r,t.shieldDamage=r,i=Math.max(0,i-r/s),n.shield<=1e-9&&(n.shield=0,t.shieldBroken=!0)}if(i>0&&n.armor>0){const s=Math.min(1,Math.max(0,e.pierce??0)),r=i;i=e.dot?i*it.armor.dot:Math.max(i*it.armor.floor,i-n.armor*(1-s)),t.blocked=r-i}return n.hp=Math.max(0,n.hp-i),n.sinceDamage=0,t.damage=i,t}function dx(n,e){return n.hp<=0||!(e>0)||zr[n.kind].stunImmune||n.stunImmune>0?!1:(n.stun=Math.max(n.stun,e*(n.boss?it.stun.boss:1)),!0)}function ux(n){return new Set(n.filter(e=>sf(e,n)).map(e=>e.id))}function sf(n,e){if(n.hp<=0)return!1;const t=it.rally.radius;return e.some(i=>i!==n&&i.hp>0&&i.stun<=0&&mn(i.kind)==="rally"&&Math.hypot(n.x-i.x,n.z-i.z)<=t)}function Ci(n,e){return n-e>1e-9?n-e:0}function fx(n,e,t,i){const s=zr[n.kind];n.sinceDamage+=e,n.charged=Ci(n.charged,e),n.brittle=Ci(n.brittle,e),n.marked=Ci(n.marked,e),n.stun>0?(n.stun=Ci(n.stun,e),n.stun===0&&(n.stunImmune=it.stun.immunity)):n.stunImmune=Ci(n.stunImmune,e);const r=n.stun>0;s.trait==="regen"&&n.sinceDamage>=it.regen.delay&&n.burn<=0&&n.hp<n.maxHp&&(n.hp=Math.min(n.maxHp,n.hp+n.maxHp*(s.regen??0)*e)),n.maxShield>0&&n.sinceDamage>=it.shield.delay&&n.shield<n.maxShield&&(n.shield=Math.min(n.maxShield,n.shield+n.maxShield*it.shield.regen*e));let a=1;return s.trait==="dash"&&(t||r?(n.dashTimer=it.dash.every,n.dashLeft=0):(n.dashTimer=Ci(n.dashTimer,e),n.dashTimer===0&&(n.dashTimer=it.dash.every,n.dashLeft=it.dash.duration,i.push({type:"dash",target:n.id,kind:n.kind,lane:n.lane,to:{x:n.x,z:n.z}})),n.dashLeft>0&&(a=it.dash.speed,n.dashLeft=Ci(n.dashLeft,e)))),{move:!r,speed:a}}const px={"green-blob":1,alien:1,demon:1,"blue-demon":1,yeti:1,"mushroom-king":1,orc:.75,"orc-skull":.75,herald:1};function mx(n,e){return px[n]*(e.boss?ju:e.mini?it.split.radius:1)}const gx=.56;function vx(n){return Math.min(Ku,Math.max(1,gx/n))}function _x(n,e,t){const[i,s]=n.bind;return Math.min(Math.min(3.4,e.height*t)/i,Math.min(3.2,e.footprint*t)/s)}function xx(n,e){if(e>=.5){const s=n*.6;return[{dx:s*.1,dy:s*.04,w:s,h:s*.32,alpha:.2}]}const t=n*1.25,i=n*.95;return[{dx:t*.22,dy:t*.07,w:t,h:t*.34,alpha:.36},{dx:0,dy:i*.08,w:i,h:i*.32,alpha:.58}]}const bx={alien:{ground:16742938,air:16756794}};function yx(n,e){const t=bx[n];if(!t)return[];const i=e*2.1,s=e*1.9;return[{dx:0,dy:e*.1,w:i,h:i*.45,color:t.ground,k:.6},{dx:0,dy:-e*.45,w:s,h:s,color:t.air,k:.35}]}class wx{constructor(e,t,i,s,r,a){S(this,"quads",[]);this.layout=i,this.backZ=s,this.depthOf=r;const o=Z_(i),[l,c]=o.size;for(const h of o.rects){const d=new cn(1,1),u=d.attributes.uv;for(let v=0;v<u.count;v++)u.setXY(v,(h.x+u.getX(v)*h.w)/l,1-(h.y+(1-u.getY(v))*h.h)/c);const f=new Zt({map:t,transparent:!0,depthWrite:!1}),g=new Gt(d,f);g.frustumCulled=!1,g.renderOrder=this.inDepthOrder(h)?a.body:a.back,e.add(g),this.quads.push({rect:h,mesh:g})}}inDepthOrder(e){return this.layout.gates[e.gate].front!==void 0}update(e,t,i=[0,0,0],s,r=0){const a=e.scale,[o,l]=e.offset;for(const{rect:c,mesh:h}of this.quads){const d=this.layout.gates[c.gate],[u,f,g,v]=d.art,m=c.kind==="sealed",p=(m?1-t:1)*(1-(i[c.gate]??0));h.visible=p>.001,h.material.opacity=p;const w=d.front===void 0?this.backZ:this.depthOf(l+d.front*a)+(m?.01:0),E=(s==null?void 0:s[c.gate])??0,x=E*Math.sin(r*71)*3*a,R=E*Math.cos(r*57)*2*a;h.position.set(o+(u+g)/2*a+x,-(l+(f+v)/2*a+R),w),h.scale.set((g-u)*a,(v-f)*a,1)}}get drawn(){return this.quads.filter(e=>e.mesh.visible).length}}const gn={x:0,z:0},Ye=n=>({x:n.x,z:n.z}),Xt=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z),to=n=>(e,t)=>Xt(e,n)-Xt(t,n);function rf(n,e){return n*e.boltDamage}function no(n){return 15+n*12}function af(n,e){return(2.35+.13*n)*e}function of(n){return 4+4*n}function Hr(n){return 7+5*n}function io(n){return 3.1+.25*n}function lf(n,e){return(18+n*14)*e.stormFirst}function so(n){return lf(n.state.levels.storm,n.mods)}function cf(n,e){return Math.min(20,3+n+e.stormJumps)}function hf(n,e){return(5.2+.15*n)*e}function Bc(n){return hf(n.state.levels.storm,n.mods.stormRange)}function Na(n,e,t,i){dx(e,t)&&n.events.push({type:"stun",element:i,target:e.id,to:Ye(e),value:e.stun})}function ro(n,e,t){const i=e.burn>0;e.burn=Math.max(e.burn,2.8*n.mods.burnDuration),e.burnStacks=Math.min(n.mods.burnStacks,e.burnStacks+1),e.burnDepth=i?Math.min(e.burnDepth,t):t}function ao(n,e){if(!n.mods.staticField||e.charged<=0||!n.state.levels.storm)return;e.charged=0;const t=n.living().filter(s=>s!==e&&Xt(s,e)<Bc(n)).sort(to(e))[0];if(!t)return;const i=so(n)*Ce.staticField.ratio;n.events.push({type:"discharge",element:"storm",target:t.id,from:Ye(e),to:Ye(t),damage:i}),n.damage(t,i,"storm",{from:Ye(e)})}function df(n,e,t,i,s){const r=n.state.zones;r.length>=Ce.zoneCap&&r.shift();const a={id:n.state.runtime.nextZoneId++,kind:e,x:t.x,z:t.z,radius:i,life:s};r.push(a),n.events.push({type:"zone",element:e==="lava"?"fire":"frost",target:a.id,to:t,value:i})}function uf(n,e,t,i,s){const r=n.living().filter(o=>Xt(o,e)<=t),a=r.map(Ye);for(const o of r)ro(n,o,0),n.damage(o,i,"fire",{from:e,pierce:s}),ao(n,o);return a}function Mx(n){const e=n.state.runtime;if(e.boltTimer>0)return;const t=n.aim(n.stats.range).slice(0,n.mods.boltTargets);if(!t.length)return;const i=rf(n.stats.damage,n.mods);t.forEach((s,r)=>{const a=i*(r?n.mods.boltSplash:1);if(n.events.push({type:"shot",element:"arcane",target:s.id,from:gn,to:Ye(s),damage:a}),nd(n,s,a,gn),!n.mods.boltLine)return;const o=n.living().filter(l=>l!==s&&l.lane===s.lane&&l.progress<s.progress&&Xt(l,s)<=Ce.pierce.reach).sort(to(s)).slice(0,n.mods.boltLine);for(const l of o)n.events.push({type:"shot",element:"arcane",target:l.id,from:Ye(s),to:Ye(l),damage:a*Ce.pierce.share}),nd(n,l,a*Ce.pierce.share,Ye(s))}),e.boltTimer=1/n.stats.rate}function nd(n,e,t,i){n.damage(e,t,"arcane",{pierce:n.mods.boltPierce,from:i}),n.mods.mark&&e.hp>0&&(e.marked=Ce.mark.duration)}function ff(n){return af(n.state.levels.fire,n.mods.fireRadius)}function Sx(n){const{state:e}=n,t=e.levels.fire;if(!t||e.runtime.fireTimer>0)return;const i=n.aim(n.stats.range)[0];if(!i)return;const s=Ye(i),r=ff(n),a=n.living().filter(o=>Xt(o,s)<=r);n.events.push({type:"shot",element:"fire",target:i.id,from:gn,to:s,targets:a.map(Ye),value:r}),uf(n,s,r,no(t),0),e.runtime.fireTimer=Math.max(.75,2.15-.075*t)}function Ex(n){const{state:e,mods:t}=n,i=e.levels.frost;if(!i||e.runtime.frostTimer>0)return;const s=n.aim(n.stats.range+.8)[0];if(!s)return;const r=(3.1+.16*i)*t.frostRadius,a=n.living().filter(o=>Xt(o,s)<=r);n.events.push({type:"shot",element:"frost",target:s.id,from:gn,to:Ye(s),targets:a.map(Ye),value:r});for(const o of a)o.slow=Math.max(o.slow,io(i)),n.damage(o,Hr(i),"frost"),ao(n,o);e.runtime.frostTimer=Math.max(1,3.05-.09*i)/(t.iceAge?Ce.iceAge.rate:1)}function pf(n,e,t,i){const s=[e];for(;s.length<t;){const r=s[s.length-1],a=n.living().filter(o=>!s.includes(o)&&Xt(o,r)<i).sort(to(r))[0];if(!a)break;s.push(a)}return s}function Tx(n){const{state:e,mods:t}=n,i=e.levels.storm;if(!i||e.runtime.stormTimer>0)return;const s=n.aim(n.stats.range+.4)[0];if(!s)return;const r=pf(n,s,cf(i,t),Bc(n)),a=18+i*14,o=so(n);n.events.push({type:"shot",element:"storm",target:s.id,from:gn,to:Ye(s),targets:r.map(Ye),value:0}),r.forEach((l,c)=>{const h=c===0?o:a*Math.max(.55,1-c*.06);n.damage(l,h,"storm",{from:c===0?gn:Ye(r[c-1])}),t.staticField&&l.hp>0&&(l.charged=Ce.staticField.life)}),e.runtime.stormTimer=Math.max(.65,2.2-.08*i)}function Ax(n,e,t){const i=n.living();let s=e[0],r=-1;for(const a of e){const o=i.reduce((l,c)=>l+(Xt(c,a)<=t?1:0),0);o>r&&(r=o,s=a)}return s}function Rx(n,e){const t=n.aim(n.stats.range);if(!t.length)return!1;const i=Ce,s=ff(n)*(e?i.sunfall.radius:1),r=Ax(n,t,s),a=no(n.state.levels.fire)*i.meteor.damage*(e?i.sunfall.damage:1);return n.state.runtime.strikes.push({x:r.x,z:r.z,radius:s,damage:a,life:i.meteor.delay,skill:"meteor",ultimate:e}),n.events.push({type:"cast",skill:"meteor",ultimate:e,element:"fire",target:r.id,to:Ye(r),value:s}),!0}function Cx(n,e){const t=Ce,i=n.aim(n.stats.range).slice(0,e?t.sunfall.embers:t.rain.embers);if(!i.length)return!1;const s=t.rain.radius*n.mods.fireRadius,r=no(n.state.levels.fire)*t.rain.damage;return i.forEach((a,o)=>n.state.runtime.strikes.push({x:a.x,z:a.z,radius:s,damage:r,life:t.rain.delay+o*.06,skill:"rain",ultimate:e})),n.events.push({type:"cast",skill:"rain",ultimate:e,element:"fire",target:i[0].id,to:Ye(i[0]),targets:i.map(Ye),value:s}),!0}function Px(n,e){const t=n.aim(n.stats.range+.8)[0];if(!t)return!1;const i=Ce,s=n.state.levels.frost,r=Ye(t),a=i.glacier.radius*n.mods.frostRadius*(e?i.iceAge.freeze:1),o=n.living().filter(l=>Xt(l,r)<=a);n.events.push({type:"cast",skill:"freeze",ultimate:e,element:"frost",target:t.id,to:r,targets:o.map(Ye),value:a});for(const l of o)l.slow=Math.max(l.slow,io(s)),n.damage(l,Hr(s)*i.glacier.damage,"frost",{from:r}),l.hp>0&&Na(n,l,i.glacier.stun,"frost"),ao(n,l);return n.mods.iceField&&df(n,"ice",r,i.field.radius,i.field.life),!0}function Ix(n,e,t){const i=t.x-e.x,s=t.z-e.z,r=i*i+s*s,a=r?Math.max(0,Math.min(1,((n.x-e.x)*i+(n.z-e.z)*s)/r)):0;return Math.hypot(n.x-(e.x+i*a),n.z-(e.z+s*a))}function Lx(n,e){const t=n.aim(n.stats.range+.8)[0];if(!t)return!1;const i=Ce,s=n.state.levels.frost,r=n.stats.range+.8+i.brittle.reach,a=Math.hypot(t.x,t.z)||1,o={x:t.x/a*r,z:t.z/a*r},l=i.brittle.width*n.mods.frostRadius*(e?i.iceAge.spear:1),c=e?i.iceAge.brittle:i.brittle.duration,h=n.living().filter(d=>Ix(d,gn,o)<=l+d.radius*.5);n.events.push({type:"cast",skill:"spear",ultimate:e,element:"frost",target:t.id,from:gn,to:o,targets:h.map(Ye),value:l});for(const d of h)d.slow=Math.max(d.slow,io(s)),d.brittle=Math.max(d.brittle,c),n.damage(d,Hr(s)*i.brittle.damage,"frost",{from:gn}),ao(n,d);return!0}function Dx(n,e){const t=n.aim(n.stats.range+.4).filter(a=>a.hp>0),i=t.filter(a=>!e.includes(a)),s=t.filter(a=>e.includes(a)),r=so(n);for(let a=0;a<Ce.tempest.strikes&&(i.length||s.length);a++){const o=i.length?i:s,[l]=o.splice(Math.floor(n.random()*o.length),1);n.events.push({type:"tempest",element:"storm",target:l.id,to:Ye(l),damage:r}),n.damage(l,r,"storm")}}function kx(n,e){const t=n.aim(n.stats.range+.4)[0];if(!t)return!1;const i=Ce,s=n.mods,r=pf(n,t,i.chain.targets+s.stormJumps,Bc(n)*i.chain.range),a=(18+n.state.levels.storm*14)*i.chain.damage;return n.events.push({type:"cast",skill:"chain",ultimate:e,element:"storm",target:t.id,from:gn,to:Ye(t),targets:r.map(Ye),value:0}),r.forEach((o,l)=>{n.damage(o,l===0?a*s.stormFirst:a,"storm",{from:l===0?gn:Ye(r[l-1])}),s.staticField&&o.hp>0&&(o.charged=i.staticField.life)}),e&&Dx(n,r),!0}function Ux(n,e){const t=n.aim(n.stats.range+.4);if(!t.length)return!1;const i=Ce,s=n.mods,r=(e?i.tempest.strikes:i.thunder.targets)+s.stormJumps,a=[...t].sort((h,d)=>d.hp-h.hp||t.indexOf(h)-t.indexOf(d)).slice(0,r),o=a[0],l=so(n),c=18+n.state.levels.storm*14;if(n.events.push({type:"cast",skill:"thunder",ultimate:e,element:"storm",target:o.id,to:Ye(o),targets:a.map(Ye),value:0}),a.forEach((h,d)=>{n.damage(h,d===0?l*i.thunder.first:c*i.thunder.others,"storm"),h.hp>0&&Na(n,h,i.thunder.stun,"storm")}),s.thunderclap)for(const h of n.living().filter(d=>d!==o&&Xt(d,o)<=i.clap.radius))n.damage(h,l*i.thunder.first*i.clap.ratio,"storm",{from:Ye(o)});return!0}const Nx={meteor:Rx,rain:Cx,freeze:Px,spear:Lx,chain:kx,thunder:Ux};function Fx(n){const{state:e}=n;for(const t of["fire","frost","storm"]){const i=n.mods.skill[t];!i||!e.levels[t]||e.runtime.skillTimers[t]>1e-9||Nx[i.id](n,i.ultimate)&&(e.runtime.skillTimers[t]=Fc(i.id))}}function Ox(n){Mx(n),Sx(n),Ex(n),Tx(n),Fx(n)}function Bx(n,e){const t=n.state.runtime;for(const s of["fire","frost","storm"])t.skillTimers[s]=Math.max(0,t.skillTimers[s]-e);for(const s of n.state.zones)s.life-=e;n.state.zones=n.state.zones.filter(s=>s.life>1e-9);for(const s of t.strikes)s.life-=e;const i=t.strikes.filter(s=>s.life<=1e-9);t.strikes=t.strikes.filter(s=>s.life>1e-9);for(const s of i){const r=s.skill==="meteor",a={x:s.x,z:s.z},o=n.living().filter(l=>Xt(l,a)<=s.radius);n.events.push({type:"cast-impact",skill:s.skill,ultimate:s.ultimate,element:"fire",to:a,targets:o.map(Ye),value:s.radius}),uf(n,a,s.radius,s.damage,r?1:0),r&&n.mods.lava&&df(n,"lava",a,Ce.lava.radius,Ce.lava.life)}if(n.state.zones.length){for(const s of n.living())if(mn(s.kind)!=="flying")for(const r of n.state.zones)Xt(s,r)>r.radius||(r.kind==="lava"?ro(n,s,0):s.slow=Math.max(s.slow,Ce.field.slow))}}function zx(n){const{state:e}=n,t=n.aim(1/0);if(!t.length)return!1;const i=xi(e.nova.level),s=e.nova.element;e.novaCharges--,e.cooldown===0&&(e.cooldown=i.cooldown),n.events.push({type:"nova",element:s==="ether"?"arcane":s,from:gn,targets:t.map(Ye),value:e.nova.level>=Ce.novaCard.twoChargesAt?1:0});const r=s==="ether"?0:e.levels[s],a=Ce.nova,o=i.damage*(s==="fire"?a.fire.damage:s==="frost"?a.frost.damage:1);for(const l of t)n.damage(l,o,s==="ether"?"arcane":s),!(l.hp<=0)&&(s==="ether"?l.slow=Math.max(l.slow,a.ether.slow):s==="fire"?ro(n,l,0):s==="frost"?Na(n,l,Math.min(a.frost.max,a.frost.stun+a.frost.perLevel*(r-1)),"frost"):Na(n,l,Math.min(a.storm.max,a.storm.stun+a.storm.perLevel*(r-1)),"storm"));return!0}function Hx(n,e){if(n.mods.wildfire&&e.burn>0&&e.burnDepth<Ce.wildfire.depth){const t=n.living().filter(i=>i!==e&&i.burn<=0&&Xt(i,e)<=Ce.wildfire.radius).sort(to(e)).slice(0,Ce.wildfire.count);for(const i of t)ro(n,i,e.burnDepth+1),n.events.push({type:"spread",element:"fire",target:i.id,from:Ye(e),to:Ye(i)})}if(n.mods.shatter&&e.brittle>0){const t=Math.min(e.maxHp*Ce.shatter.ratio,Hr(n.state.levels.frost)*Ce.shatter.cap),i=n.living().filter(s=>s!==e&&Xt(s,e)<=Ce.shatter.radius);n.events.push({type:"shatter",element:"frost",target:e.id,to:Ye(e),targets:i.map(Ye),damage:t});for(const s of i)n.damage(s,t,"frost",{from:Ye(e)})}}const Ds={energy:"พลังงานรอยแยก",energyShort:"พลังงาน",research:"ข้อมูลวิจัย"},Vx=["เราพบวิธีปิดประตูอย่างปลอดภัย เหนือเมฆ เงียบจนได้ยินเสียงประตู","พอเริ่มปิดประตู พวกมันก็เข้าหาแสง","บางตัวหยุดตรงขอบ ราวกับหวงพื้นที่","เปลือกของมัน เก็บพลังงานเป็นจังหวะ","รอยแยกแคบลง แต่พลังงานยังแกว่งอยู่","รับสัญญาณจาง ๆ จากเครือข่ายเก่า ยังไม่ทราบที่มา","บางตัวเลี่ยงแสง บางตัวยังคงตามมันมา","แรงสั่นเบาลง เราเริ่มวัดขอบประตูได้","สัญญาณเดิมกลับมา แล้วหายไปในความเงียบ","ขอบรอยแยกใกล้บรรจบ เราจะเฝ้าดูจนสุดทาง"],id=["คลังข้อมูลพร้อม เริ่มทบทวนการปิดประตู","ภาพจำลองแสดงจังหวะพลังงาน ที่เราเคยพบ","ลองสังเกตอีกครั้ง พฤติกรรมยังมีสิ่งให้เรียนรู้","หอคอยเก็บบันทึกไว้ ให้เราศึกษาต่อในความสงบ"],Gx={"level-02":{title:"ด่าน 2",line:"ประตูมิติใหม่เปิดบนแผ่นดินที่ฟื้นแล้ว",notes:["เริ่มใหม่: ป้อม ระดับธาตุ ทักษะ พลังงาน และข้อมูลวิจัย","ยังอยู่: สมุดมอนสเตอร์ (มอนสเตอร์และความสามารถที่เคยพบ)"]}},Wx={"level-02":{title:"ประตูที่สองปิดลงแล้ว",lines:["ประตูบนแผ่นดินที่ฟื้นแล้วสงบลง ภูเขาและผืนป่า กลับมาเงียบอีกครั้ง","สมุดมอนสเตอร์ของหอคอยยาวขึ้น ทุกความสามารถที่พบ ถูกเก็บไว้","พลังธาตุค่อย ๆ จาง โครงสร้างของหอคอยยังอยู่","ผู้เฝ้าป้อม แผ่นดินผืนต่อไปกำลังรอเรา"]}},$x={split:"เมื่อร่างใหญ่แตก สิ่งมีชีวิตเล็กสองตัว ยังเคลื่อนไหวต่อ เรากำลังบันทึกวิธีอยู่รอด ของพวกมัน",flying:"มันลอยตามแนวพลังงานเหนือพื้นดิน ราวกับกำลังหาทางผ่าน ในอากาศที่ไม่คุ้นเคย",regen:"เมื่อไม่ถูกโจมตี ร่างของมันค่อย ๆ ประสาน ความร้อนทำให้กระบวนการนี้หยุดลง",armor:"มันก้มตัวปกป้องส่วนอ่อนใต้เปลือก เมื่อพลังงานผันผวน มันหันเข้าหาหอคอย",dash:"ก่อนพุ่ง ร่างของมันสว่างวาบ มันตอบสนองต่อจังหวะพลังงาน เร็วจนเราจับภาพแทบไม่ทัน",shield:"ม่านพลังหุ้มร่างของมัน ขณะเคลื่อนออกจากประตู ดูคล้ายขอบเขตเล็ก ๆ ที่มันพยายามรักษาไว้",rally:"ถุงที่ท้องของมันสั่นเป็นจังหวะ สิ่งมีชีวิตรอบตัวเร่งฝีเท้าตามจังหวะนั้น เมื่อมันหยุดนิ่ง จังหวะก็เงียบลง"},Xx=[{id:"overload",kind:"orc-skull",note:"โกเลมผลึก · Overload ฟื้น HP 7% ต่อวินาที"},{id:"ion",kind:"blue-demon",note:"การ์กอยล์ · Ion บินได้ และหยุดนิ่งไม่ได้"},{id:"golem-boss",kind:"orc",boss:!0,note:"บอสโกเลมผลึก · ฟื้น HP 4% ต่อวินาที เมื่อไม่ถูกโจมตี"},{id:"crown-boss",kind:"mushroom-king",boss:!0,note:"บอสวิญญาณ มีโล่ 60% ของ HP"},{id:"brute-boss",kind:"yeti",boss:!0,note:"บอสนักรบเขาเหล็ก · เกราะหนา ลดดาเมจทุกนัด"},{id:"ion-boss",kind:"blue-demon",boss:!0,note:"บอสการ์กอยล์ · Ion บินได้ และหยุดนิ่งไม่ได้"}],Oe={towerLog:"บันทึกหอคอย",speaker:"ทีมวิจัยหอคอย",chapter:"บทที่ 1–2 · หอคอยและประตูมิติแห่งแรก",foundation:"หลายปีหลังหายนะ เราเริ่มสร้าง Element Tower เพื่อศึกษาพลังงานรอยแยก",gateProgress:"ความคืบหน้าการปิดรอยแยก",monsters:"มอนสเตอร์จากรอยแยก",watcher:"ผู้เฝ้าป้อม",loading:{initial:"กำลังเชื่อมต่อหอคอย…",progress:"กำลังเตรียมหอคอยและมอนสเตอร์จากรอยแยก",ready:"หอคอยพร้อมแล้ว"},intro:{tagline:"โลกที่เราเสียไป โลกที่เราจะฟื้นคืน",panels:[{title:"วันที่โลกแตกสลาย",body:"การทดลองขยายประตูมิติผิดพลาด พลังงานจากมิติอื่น ทะลักเข้ามา แผ่นดินแตกออก และถูกพยุงไว้กลางฟ้า เป็นเกาะลอยนับไม่ถ้วน"},{title:"มอนสเตอร์จากรอยแยก",body:"ประตูมิติจำนวนมากเปิดค้าง สิ่งมีชีวิตประหลาด เริ่มออกมาจากอีกฟาก ผู้รอดชีวิตต้องเริ่มต้นใหม่ บนเกาะลอยฟ้า"},{title:"Element Tower",body:"หลายปีต่อมา เราสร้างหอคอย ที่แปลงพลังงานรอยแยก เป็นไฟ น้ำแข็ง และสายฟ้า เพื่อปกป้องเกาะ จนกว่าจะปิดประตูได้"}],start:"เริ่มเกม",resume:"กลับสู่เกม",replay:"ดูเรื่องราว"},research:{tab:"สมุดมอนสเตอร์",intro:"มอนสเตอร์จากรอยแยก (Rift Monsters) เป็นสิ่งมีชีวิตจากต่างมิติ พลังงานที่ผันผวนระหว่างปิดประตู ดึงดูดพวกมันเข้าหาหอคอย",empty:"ยังไม่มีบันทึก พบสิ่งมีชีวิตระหว่างระลอก เพื่อเริ่มสังเกตพฤติกรรม",pending:"ความสามารถที่ยังไม่พบ จะบันทึกเมื่อปรากฏจริง คลังข้อมูลของหอคอยเก็บบันทึกไว้ทุกรอบ",unlocked:"บันทึกใหม่ในสมุดมอนสเตอร์"},helpSteps:[{heading:"ผู้เฝ้าป้อม สร้างป้อมแล้วเริ่มระลอก",body:"Element Tower คือหอคอยวิจัย ที่ป้องกันเกาะอัตโนมัติ มอนสเตอร์จากรอยแยก เข้ามาทางประตู 3 จุด ปกป้องหอคอยให้ครบ 10 ระลอก เพื่อปิดประตูอย่างปลอดภัย"},{heading:"ใช้พลังงานรอยแยกเพิ่มพลัง",body:"พลังงานรอยแยก (Rift Energy) จากประตู แปลงเป็นธาตุ ไฟ น้ำแข็ง และสายฟ้า ใช้การ์ดด้านล่าง เพื่อเพิ่มพลังธาตุและระดับแกนป้อม ปุ่มดาวข้างปุ่มเริ่ม เพิ่มระดับ Nova และเลือกธาตุของ Nova"},{heading:"ใช้ข้อมูลวิจัยในผังทักษะ",body:"ได้ข้อมูลเมื่อสร้างป้อมและผ่านระลอก ใช้ปลดโหนด เพื่อปรับวิธีป้องกันเกาะ"},{heading:"ใช้ Nova และซ่อมป้อม",body:"Nova โจมตีมอนสเตอร์ทั้งเกาะ แล้วรอชาร์จ ซ่อมป้อมใช้พลังงาน 60 ฟื้นพลังป้อม 45 ทำได้ทั้งระหว่างต่อสู้ และก่อนเริ่มระลอก"}],treeGuide:[{heading:"ข้อมูลวิจัย",body:"สร้างป้อม +1 · ผ่านระลอก +1 · ระลอกบอส (3, 5, 7, 10, …) เพิ่มอีก +1 · ก่อนระลอก 10 มีรวม 13 หน่วย"},{heading:"โครงของสาย",body:"4 สาย สายละ 5 โหนด: ทางแยก II เลือก 1 ทาง → ชั้น III ของทางนั้น → ขั้นสูงสุด ★ · ชั้น II และ III ใช้ 1 หน่วย"},{heading:"ขั้นสูงสุด",body:"ใช้ข้อมูลวิจัย 2 หน่วย ต้องมีชั้น III ในสายนั้น และมีได้ 1 โหนดต่อรอบ"},{heading:"ระดับธาตุกับทักษะ",body:"การ์ดธาตุเพิ่มความแรง (ระดับ 5 ได้ผลเสริมครบ) · ผังทักษะให้ท่าและความสามารถใหม่ · Nova อัปเกรดและเลือกธาตุที่ปุ่มดาว"},{heading:"พลังงานกับข้อมูลวิจัย",body:"พลังงานซื้อระดับพลังและซ่อม · ข้อมูลวิจัยปลดโหนด · สายธาตุต้องปลดด้วยพลังงานก่อน"},{heading:"รีเซ็ต",body:"ทำได้เฉพาะระหว่างระลอก คืนข้อมูลวิจัยทั้งหมด ครั้งแรก 150 พลังงาน แพงขึ้นครั้งละ 100 พลังงาน"},{heading:"เปิดผังได้ทุกเวลา",body:'เกมหยุดขณะเปิด เลือกโหนดก่อน แล้วกด "ปลดโหนด" เพื่อยืนยัน'}],simulation:{label:"การจำลองจากคลังข้อมูลของหอคอย",short:"การจำลอง",action:"จำลองแบบไม่สิ้นสุด",again:"จำลองใหม่ตั้งแต่ระลอก",archive:"คลังข้อมูลของหอคอย",start:"เริ่มการจำลองจากคลังข้อมูลของหอคอย",locked:"ปิดประตูแรกก่อน เพื่อใช้คลังข้อมูลของหอคอย",explanation:"ศึกษาต่อได้ด้วยการจำลอง จากคลังข้อมูลของหอคอย"},victory:{title:"ประตูแรกปิดลงแล้ว",lines:["เราปิดประตูได้อย่างปลอดภัย แผ่นดินใกล้เคียง ค่อย ๆ เชื่อมกัน","หอคอยใช้ข้อมูลวิจัย ควบคุมให้เกาะลดระดับลงช้า ๆ เมฆเคลื่อนผ่านขอบผา","พลังธาตุค่อย ๆ จาง งานวิจัยยังอยู่กับเรา","ผู้เฝ้าป้อม วันนี้เรารู้แล้วว่า เราฟื้นฟูโลกได้"]},defeat:{title:"หอคอยเงียบลง",line:"ประตูยังเปิดอยู่ บันทึกครั้งนี้ช่วยให้เรา เตรียมพร้อมครั้งต่อไป",tip:"ลองปรับธาตุ ใช้ Nova และซ่อมป้อม",simulationTitle:"สิ้นสุดการจำลอง",simulationLine:"บันทึกการจำลองครั้งนี้ไว้แล้ว เรากลับมาทบทวน สิ่งที่เรียนรู้ได้เสมอ"}};function qx(n){return n.phase!=="build"&&n.phase!=="ready"?null:n.phase==="build"?Oe.foundation:n.endless?id[Math.max(0,n.wave-10)%id.length]:Vx[n.wave]??null}function Yx(n){return ti.filter(e=>n.seenTraits.includes(e)).map(e=>({trait:e,note:$x[e]}))}function jx(n){return Xx.filter(e=>n.seenMonsters.some(t=>t.kind===e.kind&&(e.boss===void 0||t.boss===e.boss)))}const zc=10,Hs={"green-blob":{hp:22,speed:1.05,reward:7,damage:8,radius:.825},demon:{hp:31,speed:1.4,reward:9,damage:10,radius:1.15},yeti:{hp:64,speed:.8,reward:13,damage:15,radius:1.025},orc:{hp:43,speed:1,reward:10,damage:12,radius:.925},"orc-skull":{hp:54,speed:.94,reward:12,damage:14,radius:.99},alien:{hp:25,speed:1.55,reward:10,damage:8,radius:.69},"mushroom-king":{hp:48,speed:.86,reward:11,damage:12,radius:1.025},"blue-demon":{hp:39,speed:1.35,reward:12,damage:11,radius:1.175},herald:{hp:40,speed:.95,reward:11,damage:10,radius:.95}},mf=.1,br=1e6,Kx=1.3,gf=.85,Zx={2:.8,3:.9,4:.85,5:.9},vf=.5,Jx=1.08,Qx=7,_f=n=>Math.min(170,18+(n-1)*12);function xf(n){return Math.round(_f(n)*vf)}const sd=n=>Gc(n)?n>=10?2:1:0;function eb(n){return(_f(n)-sd(n))/(xf(n)-sd(n))}function Un(n,e){return Yu(n,e)}function Vr(n){const e=Un(n.lane,n.progress),t=Un(n.lane,n.progress-.002),i=Un(n.lane,n.progress+.002),s=i.x-t.x,r=i.z-t.z,a=Math.hypot(s,r)||1,o=Math.floor((n.id-1)/3)%3-1,l=Math.min(1,Math.max(0,(1-n.progress)/bf)),c=o*Math.min(gf,Math.max(0,1.35-n.radius))*l;return{x:e.x-r/a*c,z:e.z+s/a*c}}const bf=.16,tb=.005;function Hc(n,e,t){const i=Vr({...n,progress:e}),s=Un(n.lane,e);return t.every(r=>{const a=n.radius+r.radius+mf+tb;return cc(i,r)<a?!1:Math.max(e,r.progress)<1-bf||cc(s,Un(r.lane,r.progress))>=a})}function oo(){return{phase:"build",built:!1,wave:0,gold:320,hp:120,maxHp:120,kills:0,score:0,core:1,levels:{fire:0,frost:0,storm:0},enemies:[],spawned:0,total:0,extra:0,remaining:0,cooldown:0,novaCharges:1,nova:{level:1,element:"ether"},skillPoints:0,skills:[],respecCount:0,zones:[],seed:20261015,paused:!1,speed:1,endless:!1,seenTraits:[],seenMonsters:[],time:0,runtime:{accumulator:0,spawnTimer:0,boltTimer:0,fireTimer:0,frostTimer:0,stormTimer:0,nextId:1,nextMiniId:br,queue:[],splits:[],skillTimers:{fire:0,frost:0,storm:0},strikes:[],nextZoneId:1}}}function lo(n,e){return Math.round(e==="core"?75*1.5**(n.core-1):{fire:80,frost:95,storm:110}[e]*1.55**n.levels[e])}function Pr(n){return{damage:26+10*(n.core-1),range:Math.min(14.5,9.8+.36*(n.core-1)),rate:Math.min(4.5,1.5+.16*(n.core-1))}}function gr(n){return{x:n.x,z:n.z}}function cc(n,e){return Math.hypot(n.x-e.x,n.z-e.z)}function co(n){return n.enemies.filter(e=>e.hp>0)}function nb(n){return n.seed=n.seed*1664525+1013904223>>>0,n.seed/4294967296}function yf(n,e){const t={state:n,events:e,mods:Br(n),stats:Pr(n),damage:(i,s,r,a={})=>ib(t,i,s,r,a),aim:i=>ub(n,i),living:()=>co(n),retreat:(i,s)=>rb(n,i,s),random:()=>nb(n)};return t}function ib(n,e,t,i,s){const{state:r,events:a,mods:o}=n;if(e.hp<=0)return;const l=e.brittle>0,c=l?1-(1-(s.pierce??0))*(1-Ce.brittle.pierce):s.pierce,h=e.marked>0&&i!=="arcane"?Ce.mark.taken:1,d=hx(e,{amount:t,element:i,dot:s.dot,pierce:c,taken:(l?Ce.brittle.taken:1)*h,stormShield:o.stormShield});if(!s.silent&&!s.dot&&(a.push({type:"hit",element:i,target:e.id,from:s.from??{x:0,z:0},to:gr(e),damage:d.damage}),d.blocked>0&&a.push({type:"armor-block",element:i,target:e.id,to:gr(e),damage:d.blocked})),d.shieldBroken&&a.push({type:"shield-break",element:i,target:e.id,to:gr(e),kind:e.kind,boss:e.boss}),e.hp===0){const u=Math.round(e.boss?Hs[e.kind].reward*6*o.goldMul:(e.mini?it.split.reward:Hs[e.kind].reward*o.goldMul)*eb(r.wave));r.gold+=u,r.kills++,r.score+=u*10+(e.boss?500:0),a.push({type:"kill",element:i,target:e.id,to:gr(e),kind:e.kind,boss:e.boss,value:u}),mn(e.kind)==="split"&&!e.mini&&sb(r,e),Hx(n,e)}}function wf(n){return n.runtime.splits.reduce((e,t)=>e+t.count,0)}function Mf(n){return n.total-n.spawned+n.enemies.length+wf(n)}function sb(n,e){const t=it.split,i=Math.max(0,Math.min(t.count,t.aliveCap-co(n).length-wf(n)));i&&(n.extra+=i,n.runtime.splits.push({kind:e.kind,lane:e.lane,progress:e.progress,radius:e.radius,maxHp:e.maxHp,speed:e.speed,x:e.x,z:e.z,count:i}))}function rb(n,e,t){const i=n.enemies.filter(a=>a!==e&&a.hp>0&&a.lane===e.lane),s=a=>Hc(e,a,i);let r=e.progress;for(;r>t+1e-9;){const a=Math.max(t,r-.005);if(!s(a))break;r=a}e.progress=r,Object.assign(e,Vr(e))}function ab(n,e){const t=xi(n.nova.level);if(n.novaCharges>=t.charges){n.novaCharges=t.charges,n.cooldown=0;return}n.cooldown=Math.max(0,n.cooldown-e),n.cooldown===0&&(n.novaCharges++,n.novaCharges<t.charges&&(n.cooldown=t.cooldown))}function Sf(n,e){const t=it.split;for(const i of n.runtime.splits){const s=i.radius*t.radius;for(const r of[0,-.07,.07,-.14,.14,-.21]){if(!i.count)break;const a=i.progress+F_(i.lane,r);if(a<0||a>t.maxProgress)continue;const o=n.runtime.nextMiniId,l=Vr({id:o,lane:i.lane,progress:a,radius:s});if(!Hc({id:o,lane:i.lane,radius:s},a,co(n).filter(h=>h.lane===i.lane)))continue;const c=Math.max(1,Math.round(i.maxHp*t.hp));n.enemies.push({...tf(i.kind,!1,c,n.wave,o),mini:!0,id:o,kind:i.kind,lane:i.lane,progress:a,hp:c,maxHp:c,speed:i.speed*t.speed,radius:s,boss:!1,slow:0,burn:0,...l}),n.runtime.nextMiniId++,i.count--,e.push({type:"split",target:o,kind:i.kind,lane:i.lane,from:{x:i.x,z:i.z},to:l})}}n.runtime.splits=n.runtime.splits.filter(i=>i.count>0)}function Vc(n){const e=n.phase==="wave"?n.wave:n.wave+1,t=hc(e),i=Object.fromEntries(ti.map(a=>[a,0]));for(const a of t)i[mn(a.kind)]++;const s=new Set;for(let a=1;a<e;a++)for(const o of hc(a))s.add(mn(o.kind));const r=t.filter(a=>a.boss);return{wave:e,total:t.length,traits:i,newTraits:ti.filter(a=>i[a]>0&&!s.has(a)),boss:r.length?{kind:r[0].kind,trait:mn(r[0].kind),count:r.length,stunImmune:!!zr[r[0].kind].stunImmune}:null,lanes:[0,1,2].map(a=>t.filter(o=>o.lane===a).length),mainLane:Ef(e)}}function Ef(n){return[1,0,2][((n-1)%3+3)%3]}function ob(n,e){const t=Ef(n),i=[0,1,2].filter(l=>l!==t),{main:s,of:r}=Xu,a=e%r;return Math.floor((a+1)*s/r)>Math.floor(a*s/r)?t:i[(e-Math.floor((e+1)*s/r))%2]}const lb={3:"orc",5:"mushroom-king",7:"yeti",0:"blue-demon"};function Gc(n){return lb[n%10]}const cb={"level-02":{join:[{kind:"herald",from:4}],escort:{kind:"herald",from:5}}};function hc(n){const e=["green-blob","demon"];n>=2&&e.push("orc"),n>=3&&e.push("yeti","mushroom-king"),n>=4&&e.push("alien","orc-skull"),n>=6&&e.push("blue-demon");const t=cb[wt().id];for(const{kind:o,from:l}of(t==null?void 0:t.join)??[])n>=l&&e.push(o);const i=t!=null&&t.escort&&n>=t.escort.from?t.escort.kind:void 0,s=xf(n),r=[],a=Gc(n);for(let o=0;o<s;o++){const l=!!a&&(o===s-1||n>=10&&o===Math.floor(s*.55)),c=l?a:n===1?"green-blob":e[(o*7+Math.floor(o/3)+n)%e.length],h=l?n>=10&&o===s-1?2:1:ob(n,o);r.push({kind:c,lane:h,boss:l}),l&&i&&r.push({kind:i,lane:h,boss:!1})}return r}function hb(n,e){const t=n.runtime.queue[n.spawned];if(!t)return!1;const i=Hs[t.kind],s=1+1.35*(n.wave-1)+.026*(n.wave-1)**2,r=Math.round(i.hp*s*(t.boss?1.5:1)*Kx*Jx*(Zx[n.wave]??1)),a=n.runtime.nextId,o=Math.min(1.6,i.radius*(t.boss?1.55:1)),l=Vr({id:a,lane:t.lane,progress:0,radius:o});if(n.enemies.some(f=>f.hp>0&&f.lane===t.lane&&cc(f,l)<f.radius+o+mf))return!1;const c={...tf(t.kind,t.boss,r,n.wave,a),id:a,kind:t.kind,lane:t.lane,progress:0,hp:r,maxHp:r,speed:i.speed*(1+Math.min(.4,(n.wave-1)*.018))*(t.boss?.68:1),radius:o,boss:t.boss,slow:0,burn:0,...l};n.enemies.push(c),n.runtime.nextId++,n.spawned++,e.push({type:"spawn",target:c.id,to:l,kind:c.kind,boss:c.boss,lane:c.lane}),n.seenMonsters.some(f=>f.kind===c.kind&&f.boss===c.boss)||n.seenMonsters.push({kind:c.kind,boss:c.boss});const h=mn(c.kind);n.seenTraits.includes(h)||(n.seenTraits.push(h),e.push({type:"research",trait:h}));const d=n.runtime.queue.slice(n.spawned).findIndex(f=>f.lane===c.lane),u=d>=0?n.runtime.queue[n.spawned+d]:void 0;return u!=null&&u.boss&&e.push({type:"boss-warning",target:n.runtime.nextId+d,lane:u.lane,kind:u.kind,boss:!0,to:Un(u.lane,0)}),!0}function db(n,e,t){const i=t.filter(r=>r.hp>0&&r.lane===n.lane),s=r=>Hc(n,r,i);if(!s(e)){let r=n.progress,a=e;for(let o=0;o<12;o++){const l=(r+a)/2;s(l)?r=l:a=l}e=r}n.progress=e,Object.assign(n,Vr(n))}const rd=n=>(1-n.progress)*eo(n.lane);function ub(n,e){return co(n).filter(t=>Math.hypot(t.x,t.z)<=e).sort((t,i)=>rd(t)-rd(i)||t.id-i.id)}function fb(n,e,t){if(n.time+=e,ab(n,e),n.phase!=="wave")return;const i=n.runtime,s=yf(n,t);i.spawnTimer-=e,i.boltTimer-=e,i.fireTimer-=e,i.frostTimer-=e,i.stormTimer-=e;const r=n.wave<=3?n.total:3*Math.round((6+Math.min(n.wave,10))*vf);for(;i.spawnTimer<=0&&n.spawned<n.total;){if(n.enemies.length>=50){i.spawnTimer=.35;break}const c=r-n.spawned%r,h=Math.min(3,n.total-n.spawned,50-n.enemies.length,c),d=n.spawned;for(let u=0;u<h&&hb(n,t);u++);if(n.spawned<d+h){i.spawnTimer=.05;break}i.spawnTimer+=n.spawned%r===0?Qx:.35}Bx(s,e);const a=Oc(n.levels.frost,s.mods.slowBonus),o=[],l=ux(n.enemies);for(const c of n.enemies)c.rallied=l.has(c.id)?1:0;for(const c of[...n.enemies].sort((h,d)=>d.progress-h.progress||h.id-d.id)){if(c.hp<=0)continue;const h=c.slow>0,d=c.burn>0;if(c.slow=Math.max(0,c.slow-e),c.burn=Math.max(0,c.burn-e),d&&s.damage(c,of(n.levels.fire)*Math.max(1,c.burnStacks)*e,"fire",{dot:!0,silent:!0}),c.burn<=1e-9&&(c.burnStacks=0,c.burnDepth=0),c.hp<=0)continue;const u=s.mods.iceAge&&Math.hypot(c.x,c.z)<=Ce.iceAge.radius?Ce.iceAge.speed:1,f=fx(c,e,h||u<1,t),g=h?nf(c.kind,a):1,v=c.rallied&&sf(c,n.enemies)?it.rally.speed:1,m=f.move?c.speed*g*u*f.speed*v*e*N_*Xu.speed*B_()/eo(c.lane):0;if(db(c,Math.min(1,c.progress+m),o),o.push(c),c.progress>=1){const p=c.boss?35:Math.round(Hs[c.kind].damage*(c.mini?it.split.leakDamage:1));if(n.hp=Math.max(0,n.hp-p),c.hp=0,t.push({type:"leak",target:c.id,to:gr(c),kind:c.kind,boss:c.boss,damage:p}),n.hp===0){n.phase="defeat",t.push({type:"defeat",value:n.wave});break}}}if(n.phase==="wave"&&Ox(s),n.phase==="wave"?Sf(n,t):n.runtime.splits=[],n.enemies=n.enemies.filter(c=>c.hp>0),n.remaining=Mf(n),n.phase==="wave"&&n.remaining===0){const c=45+n.wave*12;n.gold+=c,n.score+=n.wave*100;const h=1+(Gc(n.wave)?1:0);n.skillPoints+=h,t.push({type:"points",value:h}),n.zones=[],i.strikes=[],n.wave>=zc&&!n.endless?(n.phase="victory",t.push({type:"victory",value:n.score})):(n.phase="ready",t.push({type:"wave",value:n.wave}))}}const Wc=1/30;function ad(n,e){const t=[];if(n.paused||n.phase==="defeat"||n.phase==="victory"||!Number.isFinite(e)||e<=0)return t;n.runtime.accumulator+=e*n.speed;const i=Wc;for(;n.runtime.accumulator+1e-10>=i;)if(n.runtime.accumulator-=i,Math.abs(n.runtime.accumulator)<1e-10&&(n.runtime.accumulator=0),fb(n,i,t),["defeat","victory"].includes(n.phase)){n.runtime.accumulator=0;break}return t}function pb(n,e){return typeof e=="string"?ho(n,e):e.type==="nova-element"?mb(n,e.element):e.type==="unlock"?Qu(n,e.node):rx(n)}const od={ether:"อีเธอร์",fire:"ไฟ",frost:"น้ำแข็ง",storm:"สายฟ้า"};function mb(n,e){const t=[];return n.phase==="victory"||n.phase==="defeat"?{ok:!1,message:"การต่อสู้จบแล้ว",events:t}:e!=="ether"&&n.levels[e]<1?{ok:!1,message:`ปลด${od[e]}ก่อน`,events:t}:n.novaCharges<=0?{ok:!1,message:`เปลี่ยนธาตุได้เมื่อ Nova พร้อม · อีก ${Math.ceil(n.cooldown)} วินาที`,events:t}:(n.nova.element=e,{ok:!0,message:`Nova ธาตุ${od[e]}`,events:t})}function ho(n,e){const t=[],i=o=>({ok:!1,message:o,events:t}),s=o=>({ok:!0,message:o,events:t});if(e==="restart")return Object.assign(n,oo()),s("เริ่มการป้องกันครั้งใหม่");if(e==="endless")return n.phase!=="victory"?i(Oe.simulation.locked):(n.endless=!0,n.phase="ready",n.paused=!1,s(Oe.simulation.start));if(n.phase==="victory"||n.phase==="defeat")return i("การต่อสู้จบแล้ว");if(e==="pause")return n.paused=!n.paused,s(n.paused?"หยุดเกมชั่วคราว":"กลับสู่การต่อสู้");if(e==="speed")return n.speed=n.speed===1?2:1,s(`ความเร็ว ${n.speed} เท่า`);if(n.paused)return i("เล่นต่อก่อนใช้คำสั่งนี้");if(e==="build")return n.built?i("มีป้อมอยู่แล้ว"):n.gold<120?i("ต้องการ 120 พลังงานเพื่อสร้างป้อม"):(n.gold-=120,n.built=!0,n.phase="ready",n.skillPoints+=1,t.push({type:"build",to:{x:0,z:0}},{type:"points",value:1}),s("สร้าง Element Tower แล้ว เลือกพลังและเริ่มระลอกแรก"));if(!n.built)return i("สร้างป้อมก่อน");if(e==="wave")return n.phase!=="ready"?i("กำจัดศัตรูระลอกนี้ก่อน"):(n.wave++,n.phase="wave",n.runtime.queue=hc(n.wave),n.spawned=0,n.total=n.runtime.queue.length,n.extra=0,n.runtime.splits=[],n.runtime.strikes=[],n.runtime.skillTimers={fire:0,frost:0,storm:0},n.zones=[],n.remaining=n.total,n.runtime.spawnTimer=.3,n.runtime.boltTimer=0,n.runtime.fireTimer=0,n.runtime.frostTimer=0,n.runtime.stormTimer=0,t.push({type:"wave",value:n.wave}),s(`ระลอก ${n.wave} เริ่มแล้ว`));if(e==="nova")return n.phase!=="wave"?i("ใช้ Nova ระหว่างต่อสู้"):n.novaCharges<=0?i(`Nova พร้อมใน ${Math.ceil(n.cooldown)} วินาที`):zx(yf(n,t))?(Sf(n,t),n.enemies=n.enemies.filter(o=>o.hp>0),n.remaining=Mf(n),s("ปล่อย Nova")):i("ยังไม่มีศัตรูในสนาม");if(e==="nova-level"){if(!n.built)return i("สร้างป้อมก่อน");const o=Zu(n.nova.level);return n.gold<o?i(`ต้องการ ${o} พลังงาน`):(n.gold-=o,n.nova.level++,t.push({type:"upgrade",element:"arcane",to:{x:0,z:0},value:n.nova.level}),s(`Nova ระดับ ${n.nova.level}`))}if(e==="repair"){if(n.hp===n.maxHp)return i("พลังป้อมเต็มแล้ว");if(n.gold<60)return i("ต้องการ 60 พลังงานเพื่อซ่อมป้อม");n.gold-=60;const o=Math.min(45,n.maxHp-n.hp);return n.hp+=o,t.push({type:"upgrade",to:{x:0,z:0},value:o}),s(`ซ่อมป้อม +${o} พลัง`)}const r=lo(n,e);return n.gold<r?i(`ต้องการ ${r} พลังงาน`):(n.gold-=r,e==="core"?n.core++:n.levels[e]++,t.push({type:"upgrade",element:e==="core"?"arcane":e,to:{x:0,z:0},value:e==="core"?n.core:n.levels[e]}),s(`${{core:"แกนป้อม",fire:"เพลิง",frost:"น้ำแข็ง",storm:"สายฟ้า"}[e]} ระดับ ${e==="core"?n.core:n.levels[e]}`))}const Vt={cell:128,columns:16,rows:8,directions:5,clips:{move:8,attack:6,death:8}},gb={move:0,attack:Vt.clips.move,death:Vt.clips.move+Vt.clips.attack},vb=Vt.clips.move+Vt.clips.attack+Vt.clips.death;function ld(n){const e=Jt[n];return e.elite?n:e.model}const _b=Object.keys(Jt).filter((n,e,t)=>Jt[n].elite||t.find(i=>Jt[i].model===Jt[n].model&&!Jt[i].elite)===n);function xb(n,e,t){return t*vb+gb[n]+e}function bb(n){const e=Math.atan2(Math.sin(n),Math.cos(n)),t=Vt.directions-1,i=Math.min(t,Math.round(Math.abs(e)/(Math.PI/t)));return{dir:i,flip:e<0&&i>0&&i<t}}const yb=n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4,wb=n=>n<=.0031308?n*12.92:1.055*n**(1/2.4)-.055,Mb={start:.76,dd:.24};function Sb(n){const e=Math.min(.999,yb(n/255)),t=e/(1-e),{start:i,dd:s}=Mb;return Math.round(wb(Math.min(1,t<i?t:1-s*s/(t+s-i)))*255)}const Tf=.3;function Eb(n,e){const t=Br(e),i=n.burn>0,s=n.slow>0?1-nf(n.kind,Oc(e.levels.frost,t.slowBonus)):0,r=mn(n.kind);return{shield:n.shield<=0?"none":n.shield<n.maxShield*Tf?"cracked":"full",regen:r==="regen"&&n.hp<n.maxHp&&n.burn<=0&&n.sinceDamage>=it.regen.delay,dashTelegraph:r==="dash"&&n.dashLeft===0&&n.stun<=0&&n.slow<=0&&n.dashTimer<=it.dash.telegraph,dashing:n.dashLeft>0&&n.stun<=0&&n.slow<=0,stunned:n.stun>0,burnStacks:n.burn>0?Math.max(1,n.burnStacks):0,brittle:n.brittle>0,flying:r==="flying",burnPips:i&&t.burnStacks>1?{filled:Math.max(1,n.burnStacks),total:Ce.stack.max}:null,burnHot:i&&t.burnDuration>1,slowDepth:s,chill:t.slowBonus>0&&n.slow>0,charged:t.staticField&&n.charged>0,rallying:r==="rally"&&n.stun<=0,rallied:n.rallied>0}}function Tb(n){const e=[];return n.burnPips&&e.push("burn"),n.charged&&e.push("charge"),e}const cd={small:{life:.45,glow:.55,amplitude:3},boss:{life:.9,glow:.95,amplitude:7}};class Ab{constructor(){S(this,"hits",[])}add(e){this.hits.push({t:0,...e.boss?cd.boss:cd.small})}clear(){this.hits=[]}frame(e,t){for(const a of this.hits)a.t+=e;this.hits=this.hits.filter(a=>a.t<a.life);let i=0,s=0,r=0;for(const a of this.hits){const o=1-a.t/a.life;a.glow*o>i&&(i=a.glow*o,s=a.amplitude*o,r=a.t)}return{glow:i,amplitude:s,shake:t?0:s*Math.sin(r*55)}}}function Rb(n,e){return n.slice(1).map((t,i)=>e!==null&&Math.hypot(t.x-n[i].x,t.z-n[i].z)>=e)}function Cb(n){var t;const e=Br(n);return{arcane:e.boltTargets>1?"prism":"bolt",nova:n.nova.level>=Ce.novaCard.twoChargesAt?"shockwave":"pulse",clap:e.thunderclap,lens:e.boltDamage>1,mine:e.goldMul>1,conductor:e.stormJumps>0,overcharge:e.stormFirst>1,bridgeRange:((t=e.skill.storm)==null?void 0:t.id)==="chain"?hf(n.levels.storm,e.stormRange):null}}const Pb=.2;class Ib{constructor(){S(this,"last",new Map);S(this,"time",-1/0)}update(e,t){t<this.time&&this.last.clear(),this.time=t;const i=[],s=new Map;for(const r of e){const a=this.last.get(r.id);a!==void 0&&(a-r.progress)*eo(r.lane)>=Pb&&i.push({id:r.id,lane:r.lane,from:a,to:r.progress}),s.set(r.id,r.progress)}return this.last=s,i}get size(){return this.last.size}}function Lb(n,e){return e?1:Math.max(.55,1-n*.06)}function Db(n){return .45}function Af(n){var i;const e=n.skills.map(_t),t=s=>{var a;const r=e.filter(o=>o.branch===s);return{fork:((a=r.find(o=>o.slot==="II-A"||o.slot==="II-B"))==null?void 0:a.id)??null,deep:r.some(o=>o.slot==="III-A"||o.slot==="III-B")}};return{ports:{core:t("core"),fire:t("fire"),frost:t("frost"),storm:t("storm")},capstone:((i=e.find(s=>s.slot==="cap"))==null?void 0:i.id)??null,chargeRing:n.nova.level>=3}}function kb(n){const e=xi(n.nova.level);return n.novaCharges>=e.charges?1:Math.min(1,Math.max(0,1-n.cooldown/e.cooldown))}const Fa=Ce.iceAge.radius,Ub={node:1,capstone:1.5,total:3,reduced:.3};function Nb(n,e){const t=Ub,i=n.map(_t),s=i.some(l=>l.slot==="cap")&&!e?t.capstone:0,r=i.filter(l=>l.slot!=="cap"||e).length,a=e?Math.min(t.reduced,t.total/Math.max(1,i.length)):r?Math.min(t.node,(t.total-s)/r):0;let o=0;return i.map(l=>{const c=l.slot==="cap",h=c&&!e?t.capstone:a,d={node:l.id,branch:l.branch,capstone:c,start:o,duration:h};return o+=h,d})}class Fb{constructor(){S(this,"nodes",[])}add(e){let t=!1;for(const i of e)(i.type==="skill"||i.type==="capstone")&&i.node&&this.nodes.push(i.node),i.type==="respec"&&(this.nodes=[],t=!0);return t}clear(){this.nodes=[]}take(e){const t=this.nodes.filter((i,s)=>e.skills.includes(i)&&this.nodes.indexOf(i)===s);return this.nodes=[],t}get length(){return this.nodes.length}}class Ob{constructor(){S(this,"cues",[]);S(this,"elapsed",0);S(this,"started",0);S(this,"ended",0)}play(e){this.cues=[...e],this.elapsed=0,this.started=this.ended=0}cancel(){this.cues=[],this.started=this.ended=0}get active(){return this.cues.find(e=>this.elapsed>=e.start&&this.elapsed<e.start+e.duration)??null}get busy(){return this.ended<this.cues.length}get activeProgress(){const e=this.active;return e?Math.min(1,(this.elapsed-e.start)/e.duration):0}advance(e){this.elapsed+=e;const t=[],i=[];for(;this.started<this.cues.length&&this.elapsed>=this.cues[this.started].start;)t.push(this.cues[this.started++]);for(;this.ended<this.cues.length&&this.elapsed>=this.cues[this.ended].start+this.cues[this.ended].duration-1e-9;)i.push(this.cues[this.ended++]);return{started:t,ended:i}}}const rn={rime:12579583,rimeDeep:3116287,burn:16751165,burnDim:4860442,hot:16773824,burnGlow:16747069,hotGlow:16771496,shield:9430015,dash:16773280,regen:8257440,rally:6285508},or={track:1385012,hp:11134918,boss:16760670,shield:9430015,shieldCracked:5214120};function Bb(n,e,t,i){const s=n.boss?Math.max(40,i*.9):Math.max(26,i*.7),r=n.boss?9:7,a=Math.max(0,Math.min(1,n.hp/n.maxHp)),o=[{x:e,y:t,w:s,h:r,tint:or.track},{x:e-(s-4)*(1-a)/2,y:t,w:(s-4)*a,h:r-3,tint:n.boss?or.boss:or.hp}];if(n.maxShield>0&&n.shield>0){const l=Math.min(1,n.shield/n.maxShield);o.push({x:e-s*(1-l)/2,y:t-r/2-3,w:s*l,h:3,tint:n.shield<n.maxShield*Tf?or.shieldCracked:or.shield})}return o}const hd=-.6;function zb(n,e,t,i,s,r){const a=[],o=Math.max(.75,r),l=Math.max(1,e.feet-e.top),c=(u,f,g,v,m=16777215,p=1,w=!1,E=0)=>a.push({sprite:u,additive:w,tint:m,alpha:p,x:f,y:g,w:v,h:v,rot:E});if(n.slowDepth>0){const u=Math.max(.2,t*(.18+.7*n.slowDepth));a.push({sprite:"frost-ring",additive:!1,tint:n.chill?rn.rimeDeep:rn.rime,alpha:n.chill?.9:.75,x:e.x,y:e.feet,w:2*u,h:2*u,rot:0,ground:!0,flat:!0})}if(n.brittle&&c("cracks",e.x,e.top+l*.5,Math.min(e.width,l)*.85,16777215,.9,!1,e.id%7*.9),n.shield!=="none"){const u=n.shield==="cracked",f=Math.max(e.width,l)*1.25;c("glow",e.x,e.top+l*.55,f,rn.shield,u?.25:.48,!0),u&&c("cracks",e.x,e.top+l*.5,Math.min(e.width,l)*.95,rn.shield,.85,!1,e.id%5*1.3)}if(n.dashTelegraph){const u=s?.55:.35+.3*(.5+.5*Math.sin(i*30+e.id));c("glow",e.x,e.top+l*.5,Math.max(e.width,l)*1.1,rn.dash,u,!0)}n.dashing&&c("wind-blade",e.x,e.top+l*.6,e.width*1.1,16777215,.7),n.rallying&&a.push({sprite:"band",additive:!1,tint:rn.rally,alpha:s?.45:.35+.15*Math.sin(i*4+e.id),x:e.x,y:e.feet,w:2*it.rally.radius,h:2*it.rally.radius,rot:0,ground:!0,flat:!0}),n.rallied&&!n.dashing&&c("wind-blade",e.x,e.top+l*.7,e.width*.9,rn.rally,.65);let h=0;if(n.burnStacks>0){const u=Math.min(3,n.burnStacks),f=Math.min(64*o,Math.max(14*o,l*(.26+.12*u)));c("glow",e.x,e.top,f*1.6,n.burnHot?rn.hotGlow:rn.burnGlow,n.burnHot?.5:.35,!0);for(let g=0;g<u;g++){const v=g===0?0:g===1?-1:1,m=s?1:1+.08*Math.sin(i*13+e.id+g*2.1),p=f*(g?.72:1)*m,w=p*.8,E=e.x+v*f*.36,x=e.top+f*.12-p/2;a.push({sprite:"ember",additive:!1,tint:16777215,alpha:1,x:E,y:x,w,h:p,rot:hd}),n.burnHot&&a.push({sprite:"ember",additive:!0,tint:rn.hot,alpha:.8,x:E,y:x,w:w*.9,h:p*.9,rot:hd})}h=f}if(n.stunned){const u=Math.max(10*o,e.width*.32),f=u*.4,g=e.top-6*o,v=s?0:i*4;for(let m=0;m<3;m++){const p=v+m*Math.PI*2/3;c("stun-star",e.x+Math.cos(p)*u,g+Math.sin(p)*f,13*o,16777215,1,!1,s?0:p*.5)}h=Math.max(h,12*o)}if(n.regen)for(let u=0;u<2;u++){const f=s?.5:(i*1.5+u*.5+e.id*.1)%1;c("pip",e.x+(u?8:-8)*o,e.top-4*o-f*14*o,8*o,rn.regen,s?.9:1-f*.8,!0)}let d=e.top-h-17*o;for(const u of Tb(n)){if(u==="charge"){c("charge-glyph",e.x,d-3*o,18*o),d-=20*o;continue}const f=n.burnPips;for(let g=0;g<f.total;g++){const v=g<f.filled,m=v?rn.burn:rn.burnDim;c("pip",e.x+(g-(f.total-1)/2)*12*o,d,10*o,m,v?1:.8)}d-=13*o}return a}const Hb=1.5;function Vb(n){return Math.max(0,Math.min(1,n/Wc))}function dd(n,e,t,i=Hb){return Math.hypot(e.x-n.x,e.z-n.z)>i?{x:e.x,z:e.z}:{x:n.x+(e.x-n.x)*t,z:n.z+(e.z-n.z)*t}}class Gb{constructor(){S(this,"time",NaN);S(this,"last",new Map);S(this,"from",new Map)}update(e){const t=e.time!==this.time,i=Vb(e.runtime.accumulator),s=new Map,r=Number.isFinite(this.time)?Math.max(1,Math.round((e.time-this.time)/Wc)):1;this.time=e.time;for(const a of e.enemies){const o=this.last.get(a.id),l={x:a.x,z:a.z};o?t&&this.from.set(a.id,dd(o,l,(r-1)/r)):this.from.set(a.id,l),this.last.set(a.id,l),s.set(a.id,dd(this.from.get(a.id),l,i))}for(const a of this.last.keys())s.has(a)||(this.last.delete(a),this.from.delete(a));return s}clear(){this.time=NaN,this.last.clear(),this.from.clear()}}const Rf={arcane:"bolt",nova:"pulse",clap:!1,lens:!1,mine:!1,conductor:!1,overcharge:!1,bridgeRange:null},$c={1:0,3:1,5:2};function Wb(n){return n>=5?5:n>=3?3:n>0?1:0}function $b(n,e){return n==="arcane"?e.core>=7?5:e.core>=4?3:1:Wb(e.levels[n])||1}const Xb={fire:{size:96,flight:.26,arc:[40,.1]},frost:{size:84,flight:.24,arc:[26,.06]},arcane:{size:76,flight:.22,arc:[16,.04]}};function Ra(n,e,t){const i=$c[e],s=Xb[n],r={...s,sprite:`${n}-shot-${e}`,size:s.size*(1+.12*i),glow:1.15,glowAlpha:.45+.12*i,hot:.2*i,trail:1+.35*i,every:.035-.0065*i};return n==="arcane"&&t.lens?{...r,size:r.size*1.35,glowAlpha:r.glowAlpha+.15,hot:r.hot+.3,trail:r.trail*1.3}:r}function el(n,e){const t=$c[n];return{width:32*(1+.2*t)*(e.conductor?1.3:1),glowAlpha:.7+.12*t}}function pa(n){return 1+.12*$c[n]}const qb=["fire-orb","frost-orb","storm-orb","arcane-orb","lightning-bolt","impact-star","explosion","frost-burst","ring","control-ring","ember","ice-chip","spark","sparkle","smoke","snowflake","glow","meteor","lava-pool","ice-field","ground-crack","frost-ring","cracks","pip","charge-glyph","stun-star","coin","wind-blade","dust-streak","ice-block","beam","band","fire-shot-1","fire-shot-3","fire-shot-5","frost-shot-1","frost-shot-3","frost-shot-5","arcane-shot-1","arcane-shot-3","arcane-shot-5","ice-spear","scorch","frost-patch","char-mark"],Ui={columns:4,rows:12};function tl(n){const e=qb.indexOf(n),t=e%Ui.columns,i=Math.floor(e/Ui.columns);return[t/Ui.columns,(Ui.rows-1-i)/Ui.rows]}const nl={particles:400,perImpact:20,marks:20},Xn={fire:16747069,frost:9430271,storm:13863935,arcane:12559103},Yb={arcane:{control:8019199,rings:[3127528,9399295],waves:16773320,glow:13018879,comet:16773840},fire:{control:12730636,rings:[16742954,16757575],waves:16769200,glow:16752736,comet:16767392},frost:{control:2850744,rings:[8382207,12577535],waves:15268863,glow:11069695,comet:15793663},storm:{control:7028689,rings:[16773995,13214463],waves:16776144,glow:16774048,comet:16776144}};function jb(n,e,t,i){return t<=0?{...n}:t>=1?{...e}:{x:n.x+(e.x-n.x)*t,y:n.y+(e.y-n.y)*t-i*4*t*(1-t)}}const Kb={fire:"ember",frost:"snowflake",arcane:"sparkle"},Zb=[[0,.065,1],[.135,.205,.85]];class Jb{constructor(e=1){S(this,"particles",[]);S(this,"projectiles",[]);S(this,"bolts",[]);S(this,"still",!1);S(this,"scale",1);S(this,"metric",{xx:30,xy:0,zx:0,zy:15});S(this,"view",{w:1280,h:720});S(this,"screen");S(this,"marks",[]);S(this,"seed");this.seed=e>>>0||1}get reduced(){return this.still}set reduced(e){const t=e&&!this.still;if(this.still=e,!t)return;const i=this.projectiles;this.projectiles=[];for(const s of i)s.land?s.land():this.impact(s.element,s.to(),s.radius);this.particles=this.particles.filter(s=>!s.follow||i.every(r=>s.follow!==r.ride));for(const s of this.particles)s.flicker=0,s.follow||(s.vx=s.vy=s.gravity=s.spin=0);for(const s of this.bolts)s.still=!0,s.pulse=!1}px(e){return e*Math.max(.45,this.scale)}arcOf(e,t){return Math.min(e.arc[0]*this.scale,t*e.arc[1])}rand(){this.seed=this.seed+1831565813>>>0;let e=this.seed;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.rand()}clear(){this.particles=[],this.projectiles=[],this.bolts=[],this.marks=[]}shift(e,t){for(const i of this.particles)i.follow||(i.x+=e,i.y+=t);for(const i of this.projectiles)i.from.x+=e,i.from.y+=t,i.pos.x+=e,i.pos.y+=t}add(e){if(this.particles.length>=nl.particles)return;const t=!this.reduced||e.follow,i={additive:!1,tint:16777215,vx:0,vy:0,gravity:0,drag:0,t:0,size1:e.size0,alpha0:1,alpha1:0,rot:0,spin:0,...e,...t?{}:{vx:0,vy:0,gravity:0,spin:0,flicker:0}};return this.particles.push(i),i}burst(e,t,i,s,r){const a=Math.min(t,e.left);e.left-=a;for(let o=0;o<a;o++){const l=(o+this.rand()*.8)/a*Math.PI*2,c=this.range(...r),h=i(l,c);this.add({x:s.x,y:s.y,vx:Math.cos(l)*c,vy:Math.sin(l)*c*.7,...h})}}shot(e,t,i,s,r,a,o){if(e==="storm"){this.chain(()=>t,[i,...s],{width:36});for(const f of[i,...s])this.impact("storm",f(),r*.5);return}const l=o??(()=>this.impact(e,i(),r));if(this.reduced){l();return}const c=a??Ra(e,1,Rf),h=i(),d=Math.hypot(h.x-t.x,h.y-t.y),u={element:e,from:{...t},to:i,t:0,flight:c.flight,arc:this.arcOf(c,d),radius:r,pos:{...t},rot:0,trail:0,look:c,land:o};this.projectiles.push(u),this.flier(u,c.sprite,this.px(c.size),Xn[e],c.glow,c.glowAlpha,c.hot)}flier(e,t,i,s,r,a,o){const l=e.flight,c=e.ride=()=>({x:e.pos.x,y:e.pos.y,rot:e.rot}),h=e.element==="fire",d=h?.16:.05,u=this.rand()*6.28;this.add({sprite:"glow",additive:!0,tint:s,x:e.pos.x,y:e.pos.y,life:l,size0:i*r,alpha0:a,alpha1:a,follow:c,flicker:d*1.4,seed:u}),h&&t==="meteor"&&this.add({sprite:"fire-shot-5",additive:!0,tint:16760944,x:e.pos.x,y:e.pos.y,life:l,size0:i*1.9,alpha0:.85,alpha1:.85,follow:c,flicker:.22,seed:u+2}),this.add({sprite:t,x:e.pos.x,y:e.pos.y,life:l,size0:i,alpha0:1,alpha1:1,follow:c,flicker:d,seed:u+1}),h&&this.add({sprite:t==="meteor"?"fire-shot-3":t,additive:!0,tint:16765066,x:e.pos.x,y:e.pos.y,life:l,size0:i*(t==="meteor"?1.3:1.12),alpha0:.5,alpha1:.5,follow:c,flicker:.3,seed:u+3.5}),o>0&&this.add({sprite:"glow",additive:!0,tint:16777215,x:e.pos.x,y:e.pos.y,life:l,size0:i*.6,alpha0:o,alpha1:o,follow:c,flicker:d*1.6,seed:u+5})}throw(e,t,i,s,r){if(this.reduced){r==null||r();return}const a=i(),o=Math.hypot(a.x-t.x,a.y-t.y),l={element:e,from:{...t},to:i,t:0,flight:s.flight,arc:this.arcOf(s,o),radius:0,pos:{...t},rot:0,trail:0,look:s,land:r??(()=>{})};this.projectiles.push(l),this.flier(l,s.sprite,this.px(s.size),Xn[e],s.glow,s.glowAlpha,s.hot)}advanceShot(e,t){e.t+=t/e.flight;const i=e.pos,s=e.to();if(e.pos=jb(e.from,s,e.t,e.arc),Math.hypot(e.pos.x-i.x,e.pos.y-i.y)>.01&&(e.rot=Math.atan2(e.pos.y-i.y,e.pos.x-i.x)),this.reduced||e.element==="storm"||(e.trail-=t,e.trail>0))return;e.trail=e.look.every;const r=e.look.trail,a=this.px(e.look.size)/60,o={x:e.pos.x-Math.cos(e.rot)*10*a,y:e.pos.y-Math.sin(e.rot)*10*a},l=Kb[e.element];e.look.streak&&this.add({sprite:"glow",additive:!0,tint:Xn[e.element],x:o.x,y:o.y,life:.3,size0:this.px(e.look.size)*e.look.streak,size1:this.px(e.look.size)*e.look.streak*.6,aspect:.3,alpha0:.75,rot:e.rot}),e.element==="fire"?(this.add({sprite:"fire-shot-1",additive:!0,tint:16756832,x:o.x,y:o.y,vx:-Math.cos(e.rot)*40+this.range(-15,15),vy:-Math.sin(e.rot)*40+this.range(-50,-20),life:this.range(.14,.22)*r,size0:this.px(30)*Math.max(1,a),size1:this.px(10),alpha0:.85,rot:e.rot,flicker:.25,seed:this.rand()*6.28}),this.add({sprite:l,x:o.x,y:o.y,vx:this.range(-30,30),vy:this.range(-60,-20),life:this.range(.25,.4)*r,size0:this.px(12)*Math.max(1,a),size1:this.px(3),spin:this.range(-4,4)}),this.rand()<(e.look.sprite==="meteor"?.8:.4)&&this.add({sprite:"smoke",x:o.x,y:o.y,vy:-25,life:.45*r,size0:this.px(12)*a,size1:this.px(24)*a,alpha0:.55})):e.element==="frost"?this.add({sprite:this.rand()<.5?"snowflake":"ice-chip",x:o.x,y:o.y,vx:this.range(-25,25),vy:this.range(-20,20),life:.35*r,size0:this.px(10),size1:this.px(4),spin:this.range(-3,3)}):this.add({sprite:l,additive:!0,tint:Xn.arcane,x:o.x,y:o.y,vx:this.range(-20,20),vy:this.range(-20,20),life:.3*r,size0:this.px(14),size1:this.px(2)})}impact(e,t,i,s=1){const r=Math.max(this.px(40),i)*s,a={left:nl.perImpact},o=h=>{const d=Math.min(h,a.left);return a.left-=d,d},l=Xn[e],c=h=>Math.round(h*Math.min(2,s));o(1)&&this.add({sprite:"glow",additive:!0,tint:l,x:t.x,y:t.y,life:.22,size0:r*1.6,size1:r*2.2,alpha0:.9}),e==="fire"?(o(1)&&this.add({sprite:"explosion",x:t.x,y:t.y-r*.15,life:.42,size0:r*1.1,size1:r*1.7,alpha0:1,rot:this.range(0,6.28),spin:this.range(-1.5,1.5),flicker:.12,seed:this.rand()*6.28}),this.burst(a,c(8),()=>({sprite:"ember",gravity:320,life:this.range(.35,.6),size0:this.px(14),size1:this.px(3),spin:this.range(-6,6)}),t,[120,240]),this.burst(a,3,()=>({sprite:"smoke",gravity:-40,drag:2,life:.7,size0:r*.4,size1:r*.8,alpha0:.6}),t,[20,50])):e==="frost"?(o(1)&&this.add({sprite:"frost-burst",x:t.x,y:t.y,life:.4,size0:r,size1:r*1.45,rot:this.range(0,6.28)}),this.burst(a,c(8),()=>({sprite:"ice-chip",gravity:360,life:this.range(.35,.55),size0:this.px(13),size1:this.px(6),spin:this.range(-8,8)}),t,[110,220]),this.burst(a,3,()=>({sprite:"snowflake",drag:3,life:.6,size0:this.px(12),size1:this.px(8),spin:this.range(-2,2)}),t,[30,70])):e==="storm"?(o(1)&&this.add({sprite:"storm-orb",x:t.x,y:t.y,life:.18,size0:r*.7,size1:r*.9}),this.burst(a,c(6),()=>({sprite:"spark",additive:!0,tint:16777215,drag:6,life:this.range(.15,.3),size0:this.px(16),size1:this.px(4),rot:this.range(0,6.28)}),t,[160,300])):(o(1)&&this.add({sprite:"impact-star",x:t.x,y:t.y,life:.22,size0:r*.7,size1:r,spin:3}),o(1)&&this.add({sprite:"spark",additive:!0,tint:16777215,x:t.x,y:t.y,life:.12,size0:r*.9,size1:r*.5,rot:this.range(0,6.28)}),this.burst(a,c(6),()=>({sprite:"sparkle",additive:!0,tint:l,drag:4,life:.35,size0:this.px(15),size1:this.px(3)}),t,[90,180]))}groundRing(e,t,i,s={}){const r=t*2,a=this.reduced?1:s.from??.35;this.add({sprite:s.sprite??"band",additive:s.additive??!1,tint:i,x:e.x,y:e.y,t:-(s.delay??0),life:s.life??.55,size0:r*a,size1:r,alpha0:s.alpha??.9,alpha1:0,ground:!0,flat:!0,ease:"out"})}edge(e,t,i,s=.5,r="band",a=.85){this.add({sprite:r,tint:i,x:e.x,y:e.y,life:s,size0:t*2,size1:t*2,alpha0:a,alpha1:0,ground:!0,flat:!0})}scar(e,t,i,s,r=16777215,a=.9,o=!1){this.add({sprite:i,additive:o,tint:r,x:e.x,y:e.y,life:s,size0:t*2,size1:t*2,alpha0:a,alpha1:0,rot:this.range(0,6.28),ground:!0,flat:!0})}mark(e,t,i,s,r=16777215,a=.8){if(this.marks=this.marks.filter(c=>c.t<c.life),this.marks.length>=nl.marks){const c=this.marks.shift();this.particles=this.particles.filter(h=>h!==c)}const o=t*2,l=this.add({sprite:i,tint:r,x:e.x,y:e.y,life:s,size0:o*.85,size1:o,alpha0:a,alpha1:0,rot:this.range(0,6.28),ground:!0,flat:!0,ease:"out",late:!0});l&&this.marks.push(l)}skyBolt(e,t){const i=()=>{const s=e();return{x:s.x+(t.lean??0),y:s.y-t.height}};this.bolts.push({a:i,b:e,t:0,life:t.life??.25,width:t.width,tint:t.tint,glow:t.glow,contour:t.contour,pulse:!!t.pulse&&!this.reduced,still:this.reduced})}beam(e,t,i,s,r,a=.24){this.bolts.push({a:()=>e,b:t,t:0,life:a,width:i,sprite:"beam",tint:s,glow:r,glowAlpha:.6,still:!0})}chain(e,t,i){const s=i.life??.22,r=this.reduced,a=i.glowAlpha;t.forEach((o,l)=>{var u,f;const c=l?t[l-1]:e,h=i.width*(l?.75:1),d=l?((u=i.bright)==null?void 0:u.call(i,l))??1:i.first??1;if(l&&((f=i.bridges)!=null&&f[l-1])){const g=()=>Math.max(this.px(40),Math.hypot(o().x-c().x,o().y-c().y)*.35),v=m=>()=>{const p=c(),w=o();return{x:p.x+(w.x-p.x)*m,y:p.y+(w.y-p.y)*m-g()*4*m*(1-m)}};for(let m=0;m<3;m++)this.bolts.push({a:v(m/3),b:v((m+1)/3),t:0,life:s*1.6,width:h*1.15,tint:15984895,glow:14929151,glowAlpha:a,alpha:d,still:r,arch:!0});return}this.bolts.push({a:c,b:o,t:0,life:s,width:h,tint:i.tint,glow:i.glow,glowAlpha:a,alpha:d,still:r})})}shards(e,t){const i=t.length?t.slice(0,8):Array.from({length:5},(r,a)=>({x:e.x+Math.cos(a*1.26)*this.px(50),y:e.y+Math.sin(a*1.26)*this.px(30)})),s=.22;for(const r of i)this.add({sprite:"ice-chip",x:e.x,y:e.y,vx:(r.x-e.x)/s,vy:(r.y-e.y)/s,life:s,size0:this.px(17),size1:this.px(12),alpha0:1,alpha1:.6,rot:Math.atan2(r.y-e.y,r.x-e.x)})}streak(e,t,i){const s=Math.hypot(t.x-e.x,t.y-e.y);this.reduced||s<1||this.add({sprite:"dust-streak",x:(e.x+t.x)/2,y:(e.y+t.y)/2,life:1.2,size0:s+i,aspect:i/(s+i),alpha0:.9,alpha1:0,rot:Math.atan2(t.y-e.y,t.x-e.x),ground:!0})}screenGlow(e,t,i,s){if(this.screen&&this.particles.includes(this.screen))return;const r=Math.max(this.view.w,this.view.h)*2.6;this.screen=this.add({sprite:"glow",additive:!0,tint:t,x:e.x,y:e.y,life:s,size0:r*.8,size1:r,alpha0:i,alpha1:0,ease:"out"})}waves(e,t,i,s=3,r=.12){for(let a=0;a<s;a++)this.groundRing(e,t*(.55+.45*(a+1)/s),i,{sprite:"ring",additive:!0,life:.65,from:.12,delay:a*r,alpha:.85})}nova(e,t,i,s=[],r="arcane"){const a=Yb[r],o=this.reduced?1:.5;if(this.add({sprite:"control-ring",tint:a.control,x:e.x,y:e.y,life:1.1,size0:12*o,size1:12,alpha0:.9,spin:1.5,ground:!0,flat:!0,ease:"out"}),this.add({sprite:"control-ring",additive:!0,tint:Xn[r],x:e.x,y:e.y,life:1.1,size0:12*o,size1:12,alpha0:.8,spin:1.5,ground:!0,flat:!0,ease:"out"}),this.add({sprite:"control-ring",additive:!0,tint:16767370,x:e.x,y:e.y,life:1,size0:16*o,size1:16,alpha0:.6,rot:.4,spin:-1,ground:!0,flat:!0,ease:"out"}),this.groundRing(e,t,a.rings[0],{sprite:"ring",life:.6,from:.12}),this.groundRing(e,t*.82,a.rings[1],{sprite:"ring",life:.7,from:.1,delay:.08}),this.waves(e,t,a.waves),this.screenGlow(e,a.glow,.3,.65),!this.reduced){const l=(c,h,d)=>this.add({sprite:"glow",additive:!0,tint:a.comet,x:e.x,y:e.y,vx:c,vy:h,life:d,size0:this.px(80),size1:this.px(30),aspect:.22,alpha0:.95,alpha1:.3,rot:Math.atan2(h,c)});if(s.length)for(const c of s.slice(0,10))l((c.x-e.x)/.35,(c.y-e.y)/.35,.35);else for(let c=0;c<10;c++){const h=(c+this.rand()*.8)/10*Math.PI*2,d=this.range(this.px(260),this.px(420));l(Math.cos(h)*d,Math.sin(h)*d*.7,.55)}}if(this.burst({left:8},8,()=>({sprite:"sparkle",additive:!0,tint:16777215,drag:2,life:.5,size0:this.px(16),size1:this.px(3)}),e,[this.px(160),this.px(260)]),!!i){this.groundRing(e,t*1.1,a.rings[0],{sprite:"ring",life:.8,from:.08,alpha:1}),this.groundRing(e,t*1.04,a.rings[0],{sprite:"ring",life:.7,from:.08,alpha:.8,delay:.06});for(let l=0;l<6;l++){const c=l/6*Math.PI*2+.3,h={x:Math.cos(c)*4.2,z:Math.sin(c)*4.2};this.scar({x:e.x+this.metric.xx*h.x+this.metric.zx*h.z,y:e.y+this.metric.xy*h.x+this.metric.zy*h.z},1.3,"ground-crack",1.5)}}}update(e){for(const i of this.projectiles)this.advanceShot(i,e);const t=this.projectiles.filter(i=>i.t>=1);this.projectiles=this.projectiles.filter(i=>i.t<1);for(const i of t)i.land?i.land():this.impact(i.element,i.to(),i.radius);for(const i of this.particles){if(i.t+=e,i.t<0)continue;if(i.follow){const r=i.follow();i.x=r.x,i.y=r.y,i.rot=r.rot;continue}const s=Math.exp(-i.drag*e);i.vx*=s,i.vy=i.vy*s+i.gravity*e,i.x+=i.vx*e,i.y+=i.vy*e,i.rot+=i.spin*e}this.particles=this.particles.filter(i=>i.t<i.life);for(const i of this.bolts)i.t+=e;this.bolts=this.bolts.filter(i=>i.t<i.life)}}function Qb(n){const e=n.aspect??1;if(n.t<0)return{size:n.size0,alpha:0,aspect:e};const t=Math.min(1,n.t/n.life),i=n.ease==="out"?1-(1-t)**3:t,s=n.late?Math.max(0,(t-.65)/.35):t;let r=n.size0+(n.size1-n.size0)*i,a=n.alpha0+(n.alpha1-n.alpha0)*s,o=e;if(n.flicker){const l=n.t*2*Math.PI,c=n.seed??0,h=Math.sin(l*9.3+c)*.6+Math.sin(l*14.1+c*1.7)*.4,d=Math.sin(l*11.7+c*2.3);r*=1+n.flicker*h,o*=1-n.flicker*.7*d,a*=1-n.flicker*.45*(1+Math.sin(l*7.9+c*3.1))/2}return{size:r,alpha:a,aspect:o}}function ey(n){var t;const e=n.alpha??1;return n.pulse?e*(((t=Zb.find(([i,s])=>n.t>=i&&n.t<s))==null?void 0:t[2])??0):e*Math.min(1,(1-n.t/n.life)*1.6)}class ma{constructor(e,t,i,s,r){S(this,"mesh");S(this,"cell");S(this,"alpha");S(this,"count",0);S(this,"m",new ot);S(this,"q",new ni);S(this,"c",new Ke);S(this,"axis",new O(0,0,1));S(this,"p",new O);S(this,"s",new O);this.capacity=i,this.depth=r;const a=new cn(1,1);this.cell=new pn(new Float32Array(i*2),2),this.alpha=new pn(new Float32Array(i),1),this.cell.setUsage(Ft),this.alpha.setUsage(Ft),a.setAttribute("iCell",this.cell),a.setAttribute("iAlpha",this.alpha);const o=new Zt({map:e,transparent:!0,depthTest:r!==void 0,depthWrite:!1,blending:t?Mr:zi,premultipliedAlpha:!1,side:fn,forceSinglePass:!0}),l=new tt(1/Ui.columns,1/Ui.rows);o.onBeforeCompile=c=>{c.uniforms.uCellSize={value:l},c.vertexShader=`attribute vec2 iCell;
attribute float iAlpha;
uniform vec2 uCellSize;
varying float vAlpha;
`+c.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = uv * uCellSize + iCell;
vAlpha = iAlpha;`),c.fragmentShader=`varying float vAlpha;
`+c.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.a *= vAlpha;`)},o.customProgramCacheKey=()=>`vfx2d-${t}`,this.mesh=new Bs(a,o,i),this.mesh.instanceMatrix.setUsage(Ft),this.mesh.frustumCulled=!1,this.mesh.renderOrder=s,this.mesh.setColorAt(0,this.c.set(16777215)),this.mesh.count=0,this.mesh.visible=!1}begin(){this.count=0}put(e,t,i){this.mesh.setMatrixAt(this.count,this.m),this.mesh.setColorAt(this.count,this.c.set(t)),this.cell.setXY(this.count,e[0],e[1]),this.alpha.setX(this.count,i),this.count++}push(e,t,i,s,r,a,o,l){this.count>=this.capacity||l<=0||(this.q.setFromAxisAngle(this.axis,-a),this.m.compose(this.p.set(t,-i,this.depth??0),this.q,this.s.set(s,r,1)),this.put(e,o,l))}pushFlat(e,t,i,s,r,a,o,l,c){if(this.count>=this.capacity||l<=0)return;const h=Math.cos(a),d=Math.sin(a),u=h*s,f=d*s,g=-d*r,v=h*r;this.m.set(c.xx*u+c.zx*f,c.xx*g+c.zx*v,0,t,-(c.xy*u+c.zy*f),-(c.xy*g+c.zy*v),0,-i,0,0,1,this.depth??0,0,0,0,1),this.put(e,o,l)}end(){if(this.mesh.count=this.count,this.mesh.visible=this.count>0,!!this.count)for(const e of[this.mesh.instanceMatrix,this.mesh.instanceColor,this.cell,this.alpha])e&&(e.clearUpdateRanges(),e.addUpdateRange(0,this.count*e.itemSize),e.needsUpdate=!0)}}class ty{constructor(e,t,i,s,r){S(this,"shapes");S(this,"glows");S(this,"groundShapes");S(this,"groundGlows");S(this,"batches");this.shapes=new ma(t,!1,1536,i+1),this.glows=new ma(t,!0,1024,i),this.groundShapes=new ma(t,!1,384,s+.01,r),this.groundGlows=new ma(t,!0,256,s,r),this.batches=[this.shapes,this.glows,this.groundShapes,this.groundGlows],e.add(...this.batches.map(a=>a.mesh))}batch(e,t){return e?t?this.groundGlows:this.groundShapes:t?this.glows:this.shapes}sprite(e,t,i,s,r,a,o,l,c,h,d,u){const f=this.batch(t,i),g=tl(e);s?f.pushFlat(g,r,a,o,l,c,h,d,u):f.push(g,r,a,o,l,c,h,d)}draw(e,t,i){for(const r of this.batches)r.begin();const s=e.metric;for(const r of e.particles){const{size:a,alpha:o,aspect:l}=Qb(r);this.sprite(r.sprite,r.ground,r.additive,r.flat,r.x,r.y,a,a*l,r.rot,r.tint,o,s)}for(const r of t)this.sprite(r.sprite,r.ground,r.additive,r.flat,r.x,r.y,r.w,r.h,r.rot,r.tint,r.alpha,s);for(const r of e.bolts){const a=r.a(),o=r.b(),l=Math.hypot(o.x-a.x,o.y-a.y),c=Math.atan2(o.y-a.y,o.x-a.x),h=ey(r);if(h<=0||l<.5)continue;const d=(a.x+o.x)/2,u=(a.y+o.y)/2,f=r.still||Math.floor((i+r.t)*20)%2?1:-1,g=r.pulse?h:(r.alpha??1)*(1-r.t/r.life),v=tl(r.sprite??"lightning-bolt");this.glows.push(tl("glow"),d,u,l*1.05,r.width*2.6,c,r.glow??13863935,(r.glowAlpha??.8)*g),r.contour!==void 0&&this.shapes.push(v,d,u,l,r.width*2.2*f,c,r.contour,Math.min(1,h)),(r.additive?this.glows:this.shapes).push(v,d,u,l,r.width*f,c,r.tint??16777215,Math.min(1,h))}for(const r of this.batches)r.end()}get counts(){return{top:this.shapes.mesh.count+this.glows.mesh.count,ground:this.groundShapes.mesh.count+this.groundGlows.mesh.count}}}function ny(n){const[e,t]=n(0,0),[i,s]=n(1,0),[r,a]=n(0,1);return{xx:i-e,xy:s-t,zx:r-e,zy:a-t}}function il(n,e,t){return{x:n.xx*e+n.zx*t,y:n.xy*e+n.zy*t}}function iy(n,e){return{rx:e*Math.hypot(n.xx,n.zx),ry:e*Math.hypot(n.xy,n.zy)}}const sy=.5,ry=.25,ay={lava:Ce.lava.life,ice:Ce.field.life},oy={lava:.12,ice:.04};function ly(n,e,t){const i=[];for(const s of n){const r=Math.min(1,Math.max(0,s.life)/sy),a=ay[s.kind]-s.life,o=Math.min(1,Math.max(0,a)/ry),l=s.radius*(t?1:.6+.4*(1-(1-o)**2)),c=s.id*1.7+(t?0:e*oy[s.kind]),h={x:s.x,z:s.z};if(s.kind==="lava"){const d=t?0:.12*Math.sin(e*3.2+s.id);i.push({sprite:"glow",additive:!0,tint:16742954,alpha:(.45+d)*r,at:h,radius:l*1.25,rot:0}),i.push({sprite:"lava-pool",additive:!1,tint:16777215,alpha:.62*r,at:h,radius:l,rot:c})}else i.push({sprite:"glow",additive:!0,tint:10479871,alpha:.12*r,at:h,radius:l*1.1,rot:0}),i.push({sprite:"ice-field",additive:!1,tint:16777215,alpha:.55*r,at:h,radius:l,rot:c}),i.push({sprite:"frost-ring",additive:!1,tint:16777215,alpha:.75*r,at:h,radius:l,rot:-c})}return i}function cy(n,e,t=1){const i={x:0,z:0},s=e?0:n*.03;return[{sprite:"ice-field",additive:!1,tint:16777215,alpha:.12*t,at:i,radius:Fa,rot:s},{sprite:"glow",additive:!0,tint:12578815,alpha:.08*t,at:i,radius:Fa*1.05,rot:0}]}let lr;function hy(){const n=wt().id;if((lr==null?void 0:lr.level)!==n){let e=0;for(let t=0;t<3;t++)for(let i=0;i<=100;i++){const s=Un(t,i/100);e=Math.max(e,Math.hypot(s.x,s.z))}lr={level:n,value:Math.ceil((e+gf+.1)*10)/10}}return lr.value}const dy=1400,ud={x:0,z:0},uy=12124144,fd=44,gs=n=>`${n.x},${n.z}`,pd=15265266,fy=.3,md=9430015,ga={tint:16773583,motes:4,boss:9},py=new Set(["hit","kill","stun","tempest","shot","armor-block","shield-break","spread","discharge","shatter","leak"]),my=.25,sl=(n,e)=>`${n}:${e}`;class gy{constructor(e,t){S(this,"quads",[]);S(this,"styles",Rf);S(this,"stages",{fire:1,frost:1,storm:1,arcane:1});S(this,"knockbacks",new Ib);S(this,"mainBolt",null);S(this,"frozen",new Map);S(this,"bubbles",0);S(this,"clock",0);S(this,"run",0);S(this,"armorSparks",new Map);S(this,"ids",new Map);S(this,"deaths",new Map);S(this,"flights",[]);S(this,"aimed",new Map);S(this,"carried",new Map);S(this,"struck",new Map);S(this,"onCoin");this.vfx=e,this.space=t}onImpact(e,t){this.after(this.carried.get(e),t)}after(e,t){if(!e||!this.flights.includes(e)){t();return}const i=this.run;e.held.push(()=>{i===this.run&&t()})}newRun(){this.run++,this.flights=[],this.vfx.clear(),this.frozen.clear(),this.armorSparks.clear(),this.mainBolt=null}aim(e,t,i){for(const s of t)s!==void 0&&(i?this.aimed.set(sl(e,s),i):this.aimed.delete(sl(e,s)))}unaim(e){for(const t of[...this.aimed.keys()])t.startsWith(`${e}:`)&&this.aimed.delete(t)}carry(e){if(e.target===void 0)return;let t;e.type==="hit"?(t=this.aimed.get(sl(e.element,e.target)),this.struck.set(e.target,t)):e.type==="kill"&&(t=this.struck.get(e.target)),t&&this.carried.set(e,t)}fly(e,t,i){const s={left:i+my,held:[]};return this.flights.push(s),this.aim(e,t,s),()=>this.release([s])}release(e){for(const t of e){const i=this.flights.indexOf(t);if(!(i<0)){this.flights.splice(i,1);for(const s of t.held)s()}}}deathFlight(e){const t=e===void 0?void 0:this.deaths.get(e);return t&&this.carried.get(t)}idsOf(e){return(e??[]).map(t=>this.ids.get(gs(t)))}follow(e,t,i){const s=this.space,r=s.ground(e),a=t??this.ids.get(gs(e));let o=s.actor(e,a),l={x:r.x,y:r.y-this.vfx.px(fd)*i};const c=()=>{o===void 0&&a!==void 0&&(o=s.actor(e,a));const h=o===void 0?void 0:s.place(o);return h&&(l={x:h.x,y:h.y-h.height*i}),l};return c(),c}heightOf(e,t){var s;const i=this.space.actor(e,t);return(i===void 0||(s=this.space.place(i))==null?void 0:s.height)??this.vfx.px(fd)}sync(e){this.styles=Cb(e);for(const t of["fire","frost","storm","arcane"])this.stages[t]=$b(t,e)}handle(e){this.mainBolt=null,this.ids.clear(),this.deaths.clear(),this.aimed.clear(),this.carried.clear(),this.struck.clear();for(const t of e){if(t.type==="kill"&&t.target!==void 0&&this.deaths.set(t.target,t),!t.to||t.target===void 0||!py.has(t.type))continue;const i=gs(t.to);this.ids.has(i)||this.ids.set(i,t.target)}for(const t of e)this.carry(t),this.event(t)}event(e){const t=e.to;switch(e.type){case"shot":t&&this.shot(e,t);break;case"cast":this.aim(e.element==="arcane"||!e.element?"arcane":e.element,this.idsOf(e.targets),void 0),t&&this.cast(e,t);break;case"cast-impact":this.aim("fire",this.idsOf(e.targets),void 0),t&&this.landed(e,t);break;case"tempest":this.unaim("storm"),t&&this.tempest(t,e.target);break;case"stun":t&&this.stun(e.element??"arcane",t,e.target);break;case"zone":t&&this.zone(e.element==="fire"?"lava":"ice",t,e.value??2);break;case"shatter":if(t){const i=this.deathFlight(e.target);this.aim("frost",this.idsOf(e.targets),i),this.after(i,this.shatter(t,e.targets??[],e.target))}break;case"spread":e.from&&t&&this.after(this.deathFlight(this.ids.get(gs(e.from))),this.spread(e.from,t,e.target));break;case"discharge":if(e.from&&t){const i=this.ids.get(gs(e.from)),s=i===void 0?void 0:this.struck.get(i);this.aim("storm",[e.target],s),this.after(s,this.discharge(e.from,t,e.target))}break;case"armor-block":if(t&&e.target!==void 0&&this.sparkDue(e.target)){const i=this.follow(t,e.target,.5);this.after(this.struck.get(e.target),()=>this.armorSpark(i()))}break;case"shield-break":if(t){const i=this.follow(t,e.target,.5);this.after(e.target===void 0?void 0:this.struck.get(e.target),()=>this.shieldBreak(i()))}break;case"nova":this.unaim("arcane"),this.vfx.nova(this.space.ground(ud),hy(),e.value===1,(e.targets??[]).map(i=>this.follow(i,void 0,.5)()),e.element??"arcane");break;case"kill":if(t){const i=this.follow(t,e.target,.5),s=this.styles.mine,r=!!e.boss;this.onImpact(e,()=>{var a;this.deathRelease(i(),r),(a=this.onCoin)==null||a.call(this,i(),s,e.value??0)})}break}}sparkDue(e){const t=this.armorSparks.get(e);return t!==void 0&&this.clock-t<fy?!1:(this.armorSparks.size>200&&this.armorSparks.clear(),this.armorSparks.set(e,this.clock),!0)}deathRelease(e,t){const i=this.vfx,s=t?1.6:1,r=i.px(46*s);if(i.add({sprite:"glow",additive:!0,tint:ga.tint,x:e.x,y:e.y,life:.45,size0:r*.6,size1:i.reduced?r*.6:r,alpha0:.75,ease:"out"}),i.reduced)return;const a=t?ga.boss:ga.motes,o=i.px(14*s);for(let l=0;l<a;l++)i.add({sprite:"sparkle",additive:!0,tint:ga.tint,x:e.x+i.range(-o,o),y:e.y+i.range(-o*.5,o*.5),vx:i.range(-12,12),vy:-i.px(i.range(55,95)),drag:1.2,life:i.range(.6,.9),size0:i.px(i.range(9,14)),size1:i.px(3),alpha0:.9,rot:i.range(0,6.28),spin:i.range(-2,2)})}armorSpark(e){const t=this.vfx,i=(l,c)=>t.reduced?[l,l]:[l,c],[s,r]=i(t.px(24),t.px(8)),[a,o]=i(t.px(14),t.px(20));t.add({sprite:"spark",additive:!0,tint:pd,x:e.x,y:e.y,life:.16,size0:s,size1:r,rot:t.range(0,6.28)}),t.add({sprite:"impact-star",tint:pd,x:e.x,y:e.y,life:.14,size0:a,size1:o,alpha0:.8})}shieldBreak(e){const t=this.vfx,i=t.px(34),s=t.reduced?1:1.5,r=t.reduced?1:2;t.add({sprite:"glow",additive:!0,tint:md,x:e.x,y:e.y,life:.3,size0:i*1.6,size1:i*1.6*s,alpha0:.8}),t.add({sprite:"cracks",tint:md,x:e.x,y:e.y,life:.4,size0:i*.9,size1:i*.9*r,alpha0:.95,rot:t.range(0,6.28)})}shot(e,t){const i=e.element??"arcane",s=this.vfx,r=this.space;if(i==="storm"){this.unaim("storm"),this.storm(e,t);return}if(i==="arcane"){const u=e.damage??1,f=this.mainBolt===null||u>this.mainBolt*.5;f&&(this.mainBolt=u);const g=Ra("arcane",this.stages.arcane,this.styles),v=this.follow(t,e.target,.5);if(!f){this.aim("arcane",[e.target],void 0),s.beam(r.towerTop(),v,s.px(g.size*.5)*Db(),10185727,14272255),s.impact("arcane",v(),s.px(26),.6);return}const m=pa(this.stages.arcane)*(this.styles.lens?1.6:1),p=this.fly("arcane",[e.target],g.flight);s.shot("arcane",r.towerTop(),v,[],0,g,()=>{s.impact("arcane",v(),s.px(34),m),p()});return}const a=Ra(i,this.stages[i],this.styles),o=e.value??2.5,l=r.ground(t),c=this.heightOf(t,e.target),h={x:l.x,y:l.y-c*.3},d=this.fly(i,[e.target,...this.idsOf(e.targets)],a.flight);s.shot(i,r.towerTop(),()=>h,[],0,a,()=>{this.blast(i,h,l,o,"normal"),d()})}blast(e,t,i,s,r){const a=this.vfx,o=pa(this.stages[e])*(r==="giant"?1.5:r==="meteor"?1.2:1),l=Math.min(iy(a.metric,s).rx*.55,a.px(64));e==="fire"?(a.groundRing(i,s,16747050,{life:.4,alpha:.5}),a.groundRing(i,s,16760944,{additive:!0,life:.35,alpha:.5}),a.scar(i,s*.8,"glow",.35,16751162,.45,!0),a.edge(i,s,16751162,.4,"band",.4),a.mark(i,s*(r==="normal"?.45:.75),"scorch",r==="normal"?3:4.5,16777215,r==="normal"?.7:.85),r!=="normal"&&(a.scar(i,s*(r==="giant"?.6:.5),"ground-crack",r==="giant"?2.2:1.4),a.scar(i,s*.7,"glow",r==="giant"?1:.7,16742954,.75,!0)),r==="giant"&&(a.groundRing(i,s*1.12,16760938,{life:.75,delay:.08,from:.2}),a.waves(i,s*1.3,16765562),a.screenGlow(i,16751178,.18,.5))):(a.groundRing(i,s,7329535,{life:.4,alpha:.5}),a.edge(i,s,16777215,.4,"frost-ring",.45),a.mark(i,s*.5,"frost-patch",3,16777215,.7)),a.impact(e,t,l,o)}cast(e,t){const i=!!e.ultimate,s=e.value??2;switch(e.skill){case"meteor":this.meteorWarning(t,s,i);break;case"rain":this.rain(e.targets??[t],i);break;case"freeze":this.freeze(t,s,i);break;case"spear":this.spear(t,s,i);break;case"chain":this.chainCast(e,t);break;case"thunder":this.thunderCast(e,t);break}}landed(e,t){const i=this.vfx,s=this.space.ground(t),r=e.value??2;if(e.skill==="meteor"){this.blast("fire",{x:s.x,y:s.y-i.px(18)},s,r,e.ultimate?"giant":"meteor");return}i.groundRing(s,r,16747050,{life:.35,alpha:.55}),i.scar(s,r*.8,"glow",.3,16751162,.5,!0),i.mark(s,r*.8,"scorch",2.5,16777215,.7),i.impact("fire",{x:s.x,y:s.y-i.px(12)},i.px(34),.9)}rain(e,t){const i=this.vfx,s=Ce.rain;t&&i.screenGlow(this.space.ground(e[0]),16751178,.16,.5),e.forEach((r,a)=>{const o=this.space.ground(r),l=s.delay+a*.06;if(i.reduced)return;const c={sprite:"fire-orb",size:44,glow:1.7,glowAlpha:.75,hot:.45,trail:1.2,every:.02,flight:l,arc:[0,0],streak:1.7};i.throw("fire",{x:o.x-i.px(70),y:o.y-i.px(380)},()=>({x:o.x,y:o.y-i.px(10)}),c)})}freeze(e,t,i){const s=this.vfx,r=this.space.ground(e);s.add({sprite:"control-ring",tint:3842008,x:r.x,y:r.y,life:.9,size0:t*1.4,size1:t*2.2,alpha0:.7,spin:-1.2,ground:!0,flat:!0,ease:"out"}),s.add({sprite:"control-ring",additive:!0,tint:12579583,x:r.x,y:r.y,life:.9,size0:t*1.4,size1:t*2.2,alpha0:.6,spin:-1.2,ground:!0,flat:!0,ease:"out"}),s.groundRing(r,t,7329535,{life:.5,alpha:.6}),s.edge(r,t,16777215,.6,"frost-ring",.55),s.waves(r,t*1.15,15137791),s.mark(r,t*.8,"frost-patch",3.5,16777215,.8),s.impact("frost",{x:r.x,y:r.y-s.px(20)},s.px(70),1.6),i&&s.screenGlow(r,10479871,.2,.5)}spear(e,t,i){const s=this.vfx,r=this.space,a=r.towerTop(),o=r.ground(e),l={sprite:"ice-spear",size:120*t/Ce.brittle.width,glow:1.2,glowAlpha:.55,hot:.2,trail:1,every:.02,flight:.26,arc:[0,0],streak:1.4},c=()=>{for(const h of[.45,.7,.95])s.mark(r.ground({x:e.x*h,z:e.z*h}),t*.9,"frost-patch",3,16777215,.65)};s.throw("frost",a,()=>({x:o.x,y:o.y-s.px(16)}),l,()=>{s.impact("frost",o,s.px(30),.6),c()}),i&&s.screenGlow(a,10479871,.16,.45)}chainCast(e,t){const i=this.vfx,s=this.space,r=this.styles,a=el(this.stages.storm,r),o=[t,...(e.targets??[]).slice(1)],l=o.map((c,h)=>this.follow(c,h?void 0:e.target,.5));i.chain(()=>s.towerTop(),l,{width:i.px(a.width*1.4),glowAlpha:Math.min(1,a.glowAlpha+.2),life:.32,bridges:Rb(o,r.bridgeRange)}),i.impact("storm",l[0](),i.px(44),1.4),l.slice(1).forEach(c=>i.impact("storm",c(),i.px(30),1));for(const c of o)i.mark(s.ground(c),.6,"char-mark",2.5,16777215,.75);e.ultimate&&i.screenGlow(l[0](),14268671,.16,.45)}thunderCast(e,t){const i=this.vfx,s=this.space,r=this.styles,a=el(this.stages.storm,r),o=pa(this.stages.storm),l=[t,...(e.targets??[]).slice(1)].map((h,d)=>this.follow(h,d?void 0:e.target,.5)),c=l[0];if(i.skyBolt(c,{width:i.px(a.width*1.1),height:i.px(340),life:.35,lean:i.px(16)}),(e.ultimate?[t]:e.targets??[t]).forEach((h,d)=>i.mark(s.ground(h),d?.75:1.1,"char-mark",3.5,16777215,.85)),i.impact("storm",c(),i.px(46),o*(r.overcharge?1.4:1)),i.add({sprite:"ring",additive:!0,tint:r.overcharge?15985407:Xn.storm,x:c().x,y:c().y,life:.45,size0:i.px(30),size1:i.px(90),alpha0:.9,ease:"out"}),r.clap){const h=s.ground(t);i.groundRing(h,Ce.clap.radius,11565823,{life:.45}),i.groundRing(h,Ce.clap.radius,15127295,{additive:!0,life:.4,alpha:.6}),i.edge(h,Ce.clap.radius,4857984,.35,"band",.35)}if(e.ultimate){(e.targets??[]).slice(1).forEach(h=>this.tempest(h)),i.screenGlow(c(),14268671,.18,.45);return}for(const h of l.slice(1))i.skyBolt(h,{width:i.px(18),height:i.px(280),life:.28,lean:-i.px(10)}),i.impact("storm",h(),i.px(28),.8)}meteorWarning(e,t,i){const s=this.vfx,r=this.space.ground(e),a=Ce.meteor.delay;if(s.add({sprite:"glow",tint:16734746,x:r.x,y:r.y,life:a,size0:t*1.9,alpha0:.25,alpha1:.5,ground:!0,flat:!0}),s.add({sprite:"band",tint:12068890,x:r.x,y:r.y,life:a,size0:t*2,alpha0:.5,alpha1:.7,ground:!0,flat:!0}),s.add({sprite:"control-ring",tint:14172186,x:r.x,y:r.y,life:a,size0:t*1.6,size1:t*1.9,alpha0:.55,alpha1:.8,spin:2,ground:!0,flat:!0,ease:"out"}),s.add({sprite:"control-ring",additive:!0,tint:16752704,x:r.x,y:r.y,life:a,size0:t*1.6,size1:t*1.9,alpha0:.5,alpha1:.7,spin:2,ground:!0,flat:!0,ease:"out"}),!s.reduced)for(let l=0;l<3;l++)s.groundRing(r,t,16747050,{additive:!0,life:.25,from:.75,delay:l*.2,alpha:.5});if(s.reduced){s.add({sprite:"meteor",x:r.x,y:r.y-s.px(120),life:a,size0:s.px(i?110:80),alpha0:1,alpha1:1,rot:1.2});return}const o={sprite:"meteor",size:i?100:72,glow:1.5,glowAlpha:.7,hot:.45,trail:1.6,every:.018,flight:a,arc:[0,0],streak:1.8};s.throw("fire",{x:r.x-s.px(180),y:r.y-s.px(560)},()=>({x:r.x,y:r.y-s.px(12)}),o)}storm(e,t){const i=this.vfx,s=this.space,r=this.styles,a=this.stages.storm,o=el(a,r),l=[t];for(const g of e.targets??[]){const v=l[l.length-1];Math.hypot(g.x-v.x,g.z-v.z)>=.14&&l.push(g)}const c=l.map((g,v)=>this.follow(g,v?void 0:e.target,.5)),h=c[0],d=()=>s.towerTop(),u=pa(a),f=g=>i.add({sprite:"ring",additive:!0,tint:r.overcharge?15985407:Xn.storm,x:g.x,y:g.y,life:.4,size0:i.px(r.overcharge?39:26),size1:i.px(r.overcharge?96:64),alpha0:r.overcharge?1:.75,ease:"out"});i.chain(d,c,{width:i.px(o.width),glowAlpha:o.glowAlpha,bright:g=>Lb(g,!1)}),i.impact("storm",h(),i.px(36),u*(r.overcharge?1.3:1)),f(h()),c.slice(1).forEach((g,v)=>i.impact("storm",g(),i.px(v<3?26:18),v<3?.8:.5))}tempest(e,t){const i=this.vfx,s=this.follow(e,t,.5);i.skyBolt(s,{width:i.px(18),height:i.px(300),life:.3,tint:15852287,glow:14531071,contour:6501018,pulse:!0,lean:i.px(14)}),i.impact("storm",s(),i.px(28),.8),i.mark(this.space.ground(e),.8,"char-mark",3,16777215,.8)}discharge(e,t,i){const s=this.vfx,r=this.follow(e,void 0,.5),a=this.follow(t,i,.5);return()=>{const o=r();s.bolts.push({a:r,b:a,t:0,life:.25,width:s.px(12),sprite:"beam",tint:16762938,glow:16773280,glowAlpha:.9,still:!0}),s.add({sprite:"ring",additive:!0,tint:16773280,x:o.x,y:o.y,life:.3,size0:s.px(18),size1:s.px(46),alpha0:.95,ease:"out"}),s.impact("storm",a(),s.px(24),.7)}}spread(e,t,i){const s=this.vfx,r=this.follow(e,void 0,.5),a=this.follow(t,i,.5),o=this.follow(t,i,0),l={...Ra("fire",this.stages.fire,this.styles),size:30,flight:.3,arc:[30,.25]};return()=>s.throw("fire",r(),a,l,()=>{s.impact("fire",a(),s.px(26),.6),s.groundRing(o(),.9,16747050,{life:.35,alpha:.5})})}shatter(e,t,i){const s=this.vfx,r=this.follow(e,i,.5),a=t.map(l=>this.follow(l,void 0,.5)),o=Ce.shatter.radius;return()=>{const l=this.space.ground(e),c=r();s.groundRing(l,o,7329535,{life:.35,alpha:.5}),s.edge(l,o,16777215,.35,"frost-ring",.4),s.impact("frost",c,s.px(34),.8),s.shards(c,a.map(h=>h()))}}stun(e,t,i){const s=i??this.ids.get(gs(t))??this.space.actor(t);if(e==="frost"||e==="arcane"){s!==void 0&&this.frozen.set(s,e==="arcane"?uy:16777215);return}const r=this.follow(t,i,.5)();this.vfx.impact("storm",{x:r.x,y:r.y-this.heightOf(t,i)*.45},this.vfx.px(24),.7)}zone(e,t,i){this.vfx.groundRing(this.space.ground(t),i,e==="lava"?16742946:12579583,{life:.35,from:.5,alpha:.8})}frame(e,t,i,s=1){this.quads=[];const r=this.vfx,a=Af(e);e.time<this.clock&&this.newRun(),this.clock=e.time,r.reduced&&this.release([...this.flights]);for(const o of this.flights)o.left-=i;this.release(this.flights.filter(o=>o.left<0));for(const o of this.frozen.keys())e.enemies.some(l=>l.id===o)||this.frozen.delete(o);for(const o of ly(e.zones,t,r.reduced))this.decal(o);if(a.capstone==="frost-ice-age"&&s>.001&&this.iceAge(t,s),i>0&&!r.reduced&&this.lavaBubbles(e.zones,i),i>0)for(const o of this.knockbacks.update(e.enemies,e.time))r.streak(this.space.ground(Un(o.lane,o.from)),this.space.ground(Un(o.lane,o.to)),r.px(24))}marks(e,t,i,s){const r=this.frozen.get(t.id);if(r!==void 0&&!e.stunned)this.frozen.delete(t.id);else if(r!==void 0){const a=Math.max(1,t.feet-t.top),o=Math.max(t.width,a)*1.1,l=t.top+a*.55;this.push({sprite:"glow",additive:!0,tint:10479871,alpha:.35,x:t.x,y:l,w:o*1.35,h:o*1.35,rot:0}),this.push({sprite:"ice-block",additive:!1,tint:r,alpha:.72,x:t.x,y:l,w:o,h:o,rot:0})}for(const a of zb(e,t,i,s,this.vfx.reduced,this.vfx.scale))this.push(a)}push(e){this.quads.length<dy&&this.quads.push(e)}decal(e){const t=this.space.ground(e.at);this.push({sprite:e.sprite,additive:e.additive,tint:e.tint,alpha:e.alpha,x:t.x,y:t.y,w:e.radius*2,h:e.radius*2,rot:e.rot,ground:!0,flat:!0})}around(e,t,i=0){const s=this.space.ground(ud),r=il(this.vfx.metric,Math.cos(t)*e,Math.sin(t)*e);return{x:s.x+r.x,y:s.y+r.y-i}}iceAge(e,t){const i=this.vfx;for(const s of cy(e,i.reduced,t))this.decal(s);if(!i.reduced)for(let s=0;s<3;s++){const r=e*.9+s*2.09,a=this.around(Fa*.72,r,i.px(14)),o=il(i.metric,-Math.sin(r),Math.cos(r));this.push({sprite:"wind-blade",additive:!0,tint:15137791,alpha:.32*t,x:a.x,y:a.y,w:i.px(80),h:i.px(80)*.55,rot:Math.atan2(o.y,o.x)})}}lavaBubbles(e,t){const i=this.vfx,s=e.filter(r=>r.kind==="lava");if(s.length)for(this.bubbles-=t;this.bubbles<=0;this.bubbles+=.25/s.length){const r=s[Math.floor(i.rand()*s.length)],a=i.rand()*Math.PI*2,o=Math.sqrt(i.rand())*r.radius*.8,l=this.space.ground({x:r.x,z:r.z}),c=il(i.metric,Math.cos(a)*o,Math.sin(a)*o);i.add({sprite:"ember",x:l.x+c.x,y:l.y+c.y,vy:-55,gravity:-30,life:.55,size0:i.px(11),size1:i.px(3),alpha0:1,alpha1:.2,spin:i.range(-3,3)})}}}const vy=.55;function _y(n,e){return vy}const dc=_y(),va={landscape:{mask:"island-ambient.png",trees:[[669,354,41,37],[758,330,35,58],[846,283,43,49],[803,417,55,55],[705,407,27,25],[873,437,35,55],[923,330,55,47],[925,242,38,40],[955,272,32,50],[1015,252,32,50],[1055,235,23,21],[1050,410,22,22],[1128,232,55,45],[1198,247,20,23],[1283,249,38,38],[1409,280,20,22],[1415,404,32,22],[1653,294,29,48],[1648,387,40,40],[1700,337,23,25],[1745,454,37,28],[1783,592,45,45],[1718,584,24,22],[1468,510,42,20],[490,570,40,18],[615,667,48,45],[713,622,32,40],[803,662,25,35],[778,747,30,25],[885,712,57,60],[979,670,41,60],[973,737,40,25],[1056,648,51,48],[1144,657,40,30],[1154,752,56,50],[1198,797,50,42],[1328,794,30,27],[1583,784,35,18],[1488,807,40,25]],waterfalls:[{x0:640,x1:702,top:762,bottom:1044},{x0:930,x1:994,top:832,bottom:1092}],farIslands:[[92,87,68,55],[238,260,130,110],[50,374,30,28],[110,434,50,45],[250,524,85,70],[196,717,76,75],[328,817,73,85],[555,120,45,43],[620,177,25,30],[535,884,55,28],[1400,172,50,50],[2118,77,65,52],[1888,180,78,68],[1781,214,26,28],[2110,354,132,108],[2295,370,20,25],[2256,447,28,26],[1806,432,24,30],[1898,487,33,35],[2054,607,88,82],[1943,772,62,60],[2176,870,108,95]],birdSky:[0,40,2304,332],sparkles:[1152,584,610,295]}},xy=n=>[(n.x0+n.x1)/2,n.bottom],Lt={sway:{amplitude:6.5,rustle:1.1,direction:[.94,.34],gustFrequency:.011,gustSpeed:1.1,swaySpeed:1.6,rustleSpeed:5.2},bob:{height:3.2,speed:.65},water:{speed:120,light:.32},clouds:{drift:7,opacity:.22,warp:2.5},birds:{maxFlocks:2,perFlock:[3,5],firstDelay:[2,5],interval:[9,16],speed:[55,80],size:[15,20],flap:9,margin:60},puffs:{interval:.25,life:2,rise:12,spread:.35,size:[.8,1.7],alpha:.6},sparkles:{count:9,interval:.45,life:[2.4,4],rise:30,size:[11,17]},leaves:{max:12,interval:.55,life:[3.5,5.5],drift:[22,38],fall:[7,13],size:[17,25],petal:.3},portals:{spin:1.1,swirl:.55,core:.4,motes:6,pull:1.8}},yr=["bird-up","bird-down","puff","sparkle","leaf","petal","swirl","glow","rock","shard"],rl={rocks:16,shards:7,dust:8,gravity:420,life:1.5,seamDust:6},by=8382719,Oa=Lt.sway,gd=Math.hypot(Oa.direction[0],Oa.direction[1]),vd=[Oa.direction[0]/gd,Oa.direction[1]/gd];function Cf(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}class _d{constructor(e,t=1,i=[]){S(this,"rand");S(this,"flocks",[]);S(this,"puffs",[]);S(this,"motes",[]);S(this,"leaves",[]);S(this,"nextFlock");S(this,"puffClock",0);S(this,"moteClock",0);S(this,"leafClock",0);S(this,"time",0);S(this,"energy",1);S(this,"simulated",!1);S(this,"debris",[]);S(this,"burst",[!1,!1,!1]);S(this,"seamed",[!1,!1,!1]);this.layout=e,this.portals=i,this.rand=Cf(t),this.nextFlock=this.between(Lt.birds.firstDelay)}ending(e,t){if(!e){this.burst=[!1,!1,!1],this.seamed=[!1,!1,!1],this.debris=[];return}const i=rl;t.gates.forEach(([s,r,a,o],l)=>{if(e.shake[l]>.3&&this.rand()<.25&&this.throwDebris("rock",s+(a-s)*this.rand(),r+(o-r)*.4*this.rand(),o,6,.4),!(this.burst[l]||e.broken[l]<=0)){this.burst[l]=!0;for(let c=0;c<i.rocks;c++)this.throwDebris("rock",s+(a-s)*(.15+.7*this.rand()),r+(o-r)*.75*this.rand(),o-6,14+14*this.rand(),1);for(let c=0;c<i.shards;c++)this.throwDebris("shard",s+(a-s)*this.rand(),r+(o-r)*.25*this.rand(),o-6,12+8*this.rand(),1.3);for(let c=0;c<i.dust;c++)this.debris.push({cell:"puff",x:s+(a-s)*this.rand(),y:o-20*this.rand(),vx:(this.rand()-.5)*50,vy:-10-15*this.rand(),age:0,life:1.8+this.rand(),size:70+60*this.rand(),rot:0,spin:0,floor:1/0})}}),t.seams.forEach(([s,r],a)=>{if(!(this.seamed[a]||e.islands[a]<.97)){this.seamed[a]=!0;for(let o=0;o<i.seamDust;o++)this.debris.push({cell:"puff",x:s+(this.rand()-.5)*160,y:r+(this.rand()-.5)*60,vx:(this.rand()-.5)*30,vy:-12,age:0,life:2+this.rand(),size:90+50*this.rand(),rot:0,spin:0,floor:1/0});for(let o=0;o<10;o++)this.motes.push({x:s+(this.rand()-.5)*220,y:r+(this.rand()-.5)*80,age:0,life:1.5+this.rand(),size:16+8*this.rand(),phase:this.rand()*6.2832})}})}throwDebris(e,t,i,s,r,a){this.debris.push({cell:e,x:t,y:i,vx:(this.rand()-.5)*140*a,vy:(-80-100*this.rand())*a,age:0,life:rl.life*(.7+.5*this.rand()),size:r,rot:this.rand()*6.28,spin:(this.rand()-.5)*9,floor:s})}between([e,t]){return e+(t-e)*this.rand()}update(e,t=!1){if(t){this.flocks=[],this.puffs=[],this.motes=[],this.leaves=[],this.debris=[];return}this.time+=e,this.updateBirds(e),this.updatePuffs(e),this.updateMotes(e),this.updateLeaves(e);for(const i of this.debris){if(i.age+=e,i.x+=i.vx*e,i.rot+=i.spin*e,i.cell==="puff"){i.y+=i.vy*e;continue}i.vy+=rl.gravity*e,i.y+=i.vy*e,i.y>i.floor&&(i.y=i.floor,i.vy*=-.25,i.vx*=.5,i.spin*=.4)}this.debris=this.debris.filter(i=>i.age<i.life)}updateLeaves(e){const t=Lt.leaves,i=this.layout.trees;for(const s of this.leaves)s.age+=e,s.x+=s.vx*e,s.y+=s.vy*e;if(this.leaves=this.leaves.filter(s=>s.age<s.life),!!i.length)for(this.leafClock+=e;this.leafClock>=t.interval;this.leafClock-=t.interval){if(this.leaves.length>=t.max)continue;const[s,r,a,o]=i[Math.floor(this.rand()*i.length)],l=this.rand()*Math.PI*2,c=this.between(t.drift);this.leaves.push({x:s+Math.cos(l)*a*.7,y:r-o*.4+Math.sin(l)*o*.4,age:0,life:this.between(t.life),vx:vd[0]*c,vy:vd[1]*c*.3+this.between(t.fall),size:this.between(t.size),phase:this.rand()*6.2832,petal:this.rand()<t.petal})}}updateBirds(e){const t=Lt.birds,[i,s,r,a]=this.layout.birdSky;if(this.nextFlock-=e,this.nextFlock<=0&&this.flocks.length<t.maxFlocks){const o=this.rand()<.5?1:-1,l=Math.round(this.between([t.perFlock[0],t.perFlock[1]])),c=Array.from({length:l},(h,d)=>{const u=Math.ceil(d/2),f=d%2?-1:1;return{dx:-o*u*14,dy:f*u*9,phase:this.rand()*6.2832,size:this.between(t.size)}});this.flocks.push({dir:o,x:o>0?i-t.margin:r+t.margin,baseY:this.between([s+20,a-20]),speed:this.between(t.speed),t:0,birds:c}),this.nextFlock=this.between(t.interval)}for(const o of this.flocks)o.t+=e,o.x+=o.dir*o.speed*e;this.flocks=this.flocks.filter(o=>o.dir>0?o.x<r+t.margin*2:o.x>i-t.margin*2)}updatePuffs(e){const t=Lt.puffs;for(const i of this.puffs)i.age+=e,i.x+=i.vx*e,i.y-=t.rise*e;for(this.puffs=this.puffs.filter(i=>i.age<t.life),this.puffClock+=e;this.puffClock>=t.interval;this.puffClock-=t.interval)for(const i of this.layout.waterfalls){const[s,r]=xy(i),a=i.x1-i.x0;this.puffs.push({x:s+(this.rand()-.5)*a*t.spread*2,y:r-6,vx:(this.rand()-.5)*8,age:0,width:a})}}updateMotes(e){const t=Lt.sparkles,[i,s,r,a]=this.layout.sparkles;for(const o of this.motes)o.age+=e,o.y-=t.rise/o.life*e;for(this.motes=this.motes.filter(o=>o.age<o.life),this.moteClock+=e;this.moteClock>=t.interval;this.moteClock-=t.interval){if(this.motes.length>=t.count)continue;const o=this.rand()*6.2832,l=Math.sqrt(this.rand());this.motes.push({x:i+Math.cos(o)*l*r,y:s+Math.sin(o)*l*a,age:0,life:this.between(t.life),size:this.between(t.size),phase:this.rand()*6.2832})}}sprites(){const e=[],t=Lt.puffs,i=Lt.portals,s=this.simulated?.75:this.energy;s>.001&&this.portals.forEach((r,a)=>{const o=this.simulated?{...r,tint:by}:r,[l,c,h,d]=o.mouth,u=this.time,f=a%2?-1:1,g=d/h;e.push({cell:"swirl",x:l,y:c,size:h*2.1,rot:f*u*i.spin+a,alpha:s*i.swirl*(.8+.2*Math.sin(u*2.3+a)),flip:!1,glow:!0,tint:o.tint,aspect:g}),e.push({cell:"swirl",x:l,y:c,size:h*1.4,rot:-f*u*i.spin*1.6+a*2,alpha:s*i.swirl*.7,flip:!1,glow:!0,tint:16777215,aspect:g}),e.push({cell:"glow",x:l,y:c,size:h*(1.3+.25*Math.sin(u*3.1+a)),rot:0,alpha:s*i.core*(.7+.3*Math.sin(u*3.1+a)),flip:!1,glow:!0,tint:o.tint,aspect:g});for(let v=0;v<i.motes;v++){const m=(u/i.pull+v/i.motes+a*.37)%1,p=f*(m*5+v*1.047),w=1.7*(1-m);e.push({cell:"sparkle",x:l+Math.cos(p)*h*w,y:c+Math.sin(p)*d*w,size:10+6*(1-m),rot:p,alpha:s*Math.sin(Math.PI*m),flip:!1,glow:!0,tint:o.tint})}});for(const r of this.debris){const a=r.age/r.life;e.push(r.cell==="puff"?{cell:"puff",x:r.x,y:r.y,size:r.size*(.7+.5*a),rot:0,alpha:.75*Math.sin(Math.PI*Math.min(1,a*1.4))*(1-a),flip:!1}:{cell:r.cell,x:r.x,y:r.y,size:r.size,rot:r.rot,alpha:Math.min(1,(1-a)*3),flip:!1})}for(const r of this.leaves){const a=r.age/r.life,o=Math.sin(r.age*3.2+r.phase);e.push({cell:r.petal?"petal":"leaf",x:r.x+o*6,y:r.y,size:r.size*(.75+.25*Math.abs(Math.cos(r.age*4+r.phase))),rot:r.phase+r.age*1.6+o*.8,alpha:Math.min(1,a*6,(1-a)*4),flip:o<0})}for(const r of this.puffs){const a=r.age/t.life;e.push({cell:"puff",x:r.x,y:r.y,size:r.width*(t.size[0]+(t.size[1]-t.size[0])*a),rot:0,alpha:t.alpha*Math.sin(Math.PI*a),flip:!1})}for(const r of this.flocks)for(const a of r.birds){const o=Math.sin(r.t*Lt.birds.flap+a.phase)>0;e.push({cell:o?"bird-up":"bird-down",x:r.x+a.dx,y:r.baseY+a.dy+Math.sin(r.t*.8+a.phase*.2)*6,size:a.size,rot:0,alpha:1,flip:r.dir<0})}for(const r of this.motes){const a=r.age/r.life;e.push({cell:"sparkle",x:r.x,y:r.y,size:r.size,rot:r.age*1.5,alpha:Math.sin(Math.PI*a)*(.65+.35*Math.sin(r.age*8+r.phase)),flip:!1})}return e}}function xd(n,e,t){const i=Cf(t),s=new Float32Array(n*n),r=c=>c*c*(3-2*c);let a=1;for(let c=0,h=e;c<3;c++,h*=2,a*=.5){const d=Array.from({length:h*h},i),u=(f,g)=>d[g%h*h+f%h];for(let f=0;f<n;f++)for(let g=0;g<n;g++){const v=g/n*h,m=f/n*h,p=Math.floor(v),w=Math.floor(m),E=r(v-p),x=r(m-w),R=u(p,w)+(u(p+1,w)-u(p,w))*E,C=u(p,w+1)+(u(p+1,w+1)-u(p,w+1))*E;s[f*n+g]+=a*(R+(C-R)*x)}}let o=1/0,l=-1/0;for(const c of s)o=Math.min(o,c),l=Math.max(l,c);for(let c=0;c<s.length;c++)s[c]=(s[c]-o)/(l-o||1);return s}const cr=64,_a=128,xa=48,vs=128,It=n=>n.toFixed(5);function yy(){const n=document.createElement("canvas");n.width=cr*yr.length,n.height=cr;const e=n.getContext("2d"),t=(r,a)=>{e.save(),e.translate(yr.indexOf(r)*cr+cr/2,cr/2),a(),e.restore()},i=r=>()=>{e.fillStyle="#34465c",e.strokeStyle="#34465c",e.lineCap="round",e.lineJoin="round",e.lineWidth=5;const a=r?-16:12,o=r?-4:6;e.beginPath(),e.moveTo(-26,a),e.quadraticCurveTo(-14,o-6,-3,2),e.quadraticCurveTo(0,4,3,2),e.quadraticCurveTo(14,o-6,26,a),e.stroke(),e.beginPath(),e.ellipse(2,3,7,4,0,0,Math.PI*2),e.fill()};t("bird-up",i(!0)),t("bird-down",i(!1)),t("puff",()=>{for(const[r,a,o]of[[-9,4,17],[9,3,16],[0,-6,19],[0,8,15]]){const l=e.createRadialGradient(r,a,0,r,a,o);l.addColorStop(0,"rgba(255,255,255,.85)"),l.addColorStop(.6,"rgba(240,250,255,.45)"),l.addColorStop(1,"rgba(235,248,255,0)"),e.fillStyle=l,e.beginPath(),e.arc(r,a,o,0,Math.PI*2),e.fill()}}),t("sparkle",()=>{const r=e.createRadialGradient(0,0,0,0,0,26);r.addColorStop(0,"rgba(255,250,215,.9)"),r.addColorStop(.35,"rgba(255,236,160,.35)"),r.addColorStop(1,"rgba(255,236,160,0)"),e.fillStyle=r,e.beginPath(),e.arc(0,0,26,0,Math.PI*2),e.fill(),e.fillStyle="#fffbe8",e.beginPath();for(let a=0;a<8;a++){const o=a*Math.PI/4,l=a%2?4:20;e.lineTo(Math.cos(o)*l,Math.sin(o)*l)}e.closePath(),e.fill()}),t("leaf",()=>{e.rotate(-.5),e.fillStyle="#4f9a2e",e.beginPath(),e.moveTo(-22,0),e.quadraticCurveTo(0,-15,22,0),e.quadraticCurveTo(0,15,-22,0),e.fill(),e.fillStyle="#7cc443",e.beginPath(),e.moveTo(-22,0),e.quadraticCurveTo(0,-15,22,0),e.quadraticCurveTo(0,-3,-22,0),e.fill(),e.strokeStyle="#2f6b1c",e.lineWidth=2,e.beginPath(),e.moveTo(-22,0),e.lineTo(18,0),e.stroke()}),t("petal",()=>{const r=e.createRadialGradient(-4,-3,2,0,0,20);r.addColorStop(0,"#fff2f8"),r.addColorStop(.6,"#ffb6d6"),r.addColorStop(1,"#f58ab8"),e.fillStyle=r,e.beginPath(),e.moveTo(0,-20),e.bezierCurveTo(16,-10,14,14,0,18),e.bezierCurveTo(-14,14,-16,-10,0,-20),e.fill()}),t("swirl",()=>{e.lineCap="round";for(let r=0;r<4;r++)for(let a=0;a<26;a++){const o=a/26,l=r*Math.PI/2+o*4.2,c=6+o*24;e.strokeStyle=`rgba(255,255,255,${(.15+.75*o*(1-o)*4/4).toFixed(3)})`,e.lineWidth=2+4*o*(1-o)*4,e.beginPath(),e.arc(0,0,c,l,l+.2),e.stroke()}}),t("rock",()=>{e.rotate(.3),e.fillStyle="#8f8576",e.beginPath(),e.moveTo(-22,-6),e.lineTo(-10,-20),e.lineTo(16,-16),e.lineTo(24,4),e.lineTo(10,20),e.lineTo(-16,16),e.closePath(),e.fill(),e.fillStyle="#cfc4b0",e.beginPath(),e.moveTo(-22,-6),e.lineTo(-10,-20),e.lineTo(16,-16),e.lineTo(6,-2),e.lineTo(-14,2),e.closePath(),e.fill(),e.strokeStyle="#6d6455",e.lineWidth=2,e.beginPath(),e.moveTo(-6,-8),e.lineTo(4,6),e.stroke()}),t("shard",()=>{e.fillStyle="#7d52b8",e.beginPath(),e.moveTo(0,-26),e.lineTo(11,-2),e.lineTo(4,24),e.lineTo(-8,6),e.closePath(),e.fill(),e.fillStyle="#c7a3f0",e.beginPath(),e.moveTo(0,-26),e.lineTo(4,24),e.lineTo(-8,6),e.closePath(),e.fill()}),t("glow",()=>{const r=e.createRadialGradient(0,0,0,0,0,31);r.addColorStop(0,"rgba(255,255,255,.95)"),r.addColorStop(.4,"rgba(255,255,255,.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=r,e.beginPath(),e.arc(0,0,31,0,Math.PI*2),e.fill()});const s=new kc(n);return s.colorSpace=Ct,s}const wy=[16734842,16743128,12160255],My=(n,e=Oi[n].gates)=>e.map((t,i)=>({mouth:t.mouth,tint:wy[i%3]}));function Sy(){const n=xd(vs,4,21),e=xd(vs,8,34),t=new Uint8Array(vs*vs*4);for(let s=0;s<n.length;s++)t.set([n[s]*255,e[s]*255,0,255],s*4);const i=new Dc(t,vs,vs);return i.wrapS=i.wrapT=Da,i.magFilter=i.minFilter=an,i.needsUpdate=!0,i}function Ey(){const n=Lt.sway,e=Math.hypot(n.direction[0],n.direction[1]);return`#ifdef USE_MAP
  vec2 paintPx = vec2(vMapUv.x, 1.0 - vMapUv.y) * uPaintSize;
  vec4 amb = texture2D(uAmbient, vMapUv);
  float isle = max(0.0, (1.0 - amb.a) / 0.8);
  vec2 o = vec2(0.0);
  float gust = 0.55 + 0.45 * sin(dot(paintPx, vec2(${It(n.direction[0]/e)}, ${It(n.direction[1]/e)})) * ${It(n.gustFrequency)} - uTime * ${It(n.gustSpeed)});
  float sway = 0.75 + 0.25 * sin(uTime * ${It(n.swaySpeed)} + paintPx.x * 0.031 + paintPx.y * 0.017);
  float leaf = uTime * ${It(n.rustleSpeed)} + paintPx.x * 0.12 + paintPx.y * 0.1;
  o += amb.r * vec2(${It(n.amplitude)} * gust * sway + ${It(n.rustle)} * sin(leaf), ${It(n.rustle)} * cos(leaf * 1.3));
  o.y += isle * ${It(Lt.bob.height)} * sin(uTime * ${It(Lt.bob.speed)} + (paintPx.x * 0.0045 + paintPx.y * 0.003) * 6.2832);
  vec2 cloudUv = (paintPx + vec2(-uTime * ${It(Lt.clouds.drift)}, 0.0)) / 520.0;
  float cloud = texture2D(uNoise, cloudUv).r;
  o += amb.b * ${It(Lt.clouds.warp)} * vec2(cloud - 0.5, texture2D(uNoise, cloudUv * 1.7 + 0.37).r - 0.5);
  o *= uStrength;
  float reveal = uLand;
  for (int i = 0; i < 3; i++) {
    vec4 box = uGateBox[i];
    vec2 centre = vec2(box.x + box.z, box.y + box.w) * 0.5 + vec2(0.0, 10.0), radius = vec2(box.z - box.x, box.w - box.y) * 0.5 + vec2(8.0, 14.0);
    float e = length((paintPx - centre) / radius);
    // A gate about to break shakes (its art box only); a broken one shows the rubble of the restored painting.
    if (paintPx.x > box.x && paintPx.x < box.z && paintPx.y > box.y && paintPx.y < box.w) o += uShake[i] * vec2(sin(uTime * 71.0) * 3.0, cos(uTime * 57.0) * 2.0);
    reveal = max(reveal, uBroken[i] * smoothstep(1.05, 0.85, e));
  }
  vec4 sampledDiffuseColor = texture2D(map, vMapUv + vec2(-o.x, o.y) / uPaintSize);
  // A kit level's restored backdrop is clear over its island (alpha 0): the kit ground stays there.
  if (uHasRestored > 0.5 && reveal > 0.0) { vec4 restored = texture2D(uRestored, vMapUv + vec2(-o.x, o.y) / uPaintSize); sampledDiffuseColor.rgb = mix(sampledDiffuseColor.rgb, restored.rgb, reveal * restored.a); }
  diffuseColor *= sampledDiffuseColor;
  float streak = texture2D(uNoise, vec2(paintPx.x / 26.0, (paintPx.y - uTime * ${It(Lt.water.speed)}) / 340.0)).g;
  diffuseColor.rgb += amb.g * uStrength * ${It(Lt.water.light)} * smoothstep(0.5, 0.82, streak) * vec3(0.92, 1.0, 1.0);
  diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), smoothstep(0.55, 0.78, cloud) * amb.b * uStrength * ${It(Lt.clouds.opacity)});
#endif`}class bd{constructor(e,t,i,s,r,a=r,o){S(this,"uniforms",{uAmbient:{value:null},uNoise:{value:Sy()},uTime:{value:0},uStrength:{value:1},uPaintSize:{value:new tt(1,1)},uRestored:{value:null},uHasRestored:{value:0},uBroken:{value:new O},uShake:{value:new O},uGateBox:{value:[new ut,new ut,new ut]},uLand:{value:0}});S(this,"scene");S(this,"sims");S(this,"portals");S(this,"mesh");S(this,"lights");S(this,"lightCell");S(this,"lightAlpha");S(this,"c",new Ke);S(this,"cell");S(this,"alpha");S(this,"m",new ot);S(this,"q",new ni);S(this,"axis",new O(0,0,1));S(this,"p",new O);S(this,"s",new O);S(this,"kitFalls");S(this,"squash",new ot);S(this,"zero",new O);this.masks=i,this.depth=s,this.portals=My("landscape",o==null?void 0:o.gates),this.kitFalls=o==null?void 0:o.waterfalls,this.sims={landscape:new _d(o?{...va.landscape,trees:[],...o.waterfalls?{waterfalls:o.waterfalls}:{}}:va.landscape,1,this.portals)},t.onBeforeCompile=f=>{Object.assign(f.uniforms,this.uniforms),f.fragmentShader=`uniform sampler2D uAmbient;
uniform sampler2D uNoise;
uniform float uTime;
uniform float uStrength;
uniform vec2 uPaintSize;
uniform sampler2D uRestored;
uniform float uHasRestored;
uniform vec3 uBroken;
uniform vec3 uShake;
uniform vec4 uGateBox[3];
uniform float uLand;
`+f.fragmentShader.replace("#include <map_fragment>",Ey())},t.customProgramCacheKey=()=>"ambient-backdrop",t.needsUpdate=!0;const l=new cn(1,1);this.cell=new pn(new Float32Array(_a),1),this.alpha=new pn(new Float32Array(_a),1),this.cell.setUsage(Ft),this.alpha.setUsage(Ft),l.setAttribute("iCell",this.cell),l.setAttribute("iAlpha",this.alpha);const c=new Zt({map:yy(),transparent:!0,depthWrite:!1,side:fn,forceSinglePass:!0});c.onBeforeCompile=f=>{f.vertexShader=`attribute float iCell;
attribute float iAlpha;
varying float vAlpha;
`+f.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = vec2((uv.x + iCell) / ${It(yr.length)}, uv.y);
vAlpha = iAlpha;`),f.fragmentShader=`varying float vAlpha;
`+f.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.a *= vAlpha;`)},c.customProgramCacheKey=()=>"ambient-sprites",this.mesh=new Bs(l,c,_a),this.mesh.instanceMatrix.setUsage(Ft),this.mesh.frustumCulled=!1,this.mesh.renderOrder=r,this.mesh.count=0,e.add(this.mesh);const h=new cn(1,1);this.lightCell=new pn(new Float32Array(xa),1),this.lightAlpha=new pn(new Float32Array(xa),1),this.lightCell.setUsage(Ft),this.lightAlpha.setUsage(Ft),h.setAttribute("iCell",this.lightCell),h.setAttribute("iAlpha",this.lightAlpha);const d=c.clone();d.blending=Mr,d.onBeforeCompile=c.onBeforeCompile,d.customProgramCacheKey=()=>"ambient-lights",this.lights=new Bs(h,d,xa),this.lights.instanceMatrix.setUsage(Ft),this.lights.frustumCulled=!1,this.lights.renderOrder=a,this.lights.count=0,this.lights.setColorAt(0,this.c.set(16777215)),e.add(this.lights);const u=((o==null?void 0:o.gates)??Oi.landscape.gates).map(f=>f.art);o||u.forEach((f,g)=>this.uniforms.uGateBox.value[g].set(f[0],f[1],f[2],f[3])),this.scene={gates:u,seams:[[470,520],[1150,230],[1850,560]]}}setRestored(e){this.uniforms.uRestored.value=e,this.uniforms.uHasRestored.value=1}static async loadMasks(e,t=va.landscape.mask){const i=await new oc().loadAsync(e+t);return i.colorSpace=Yn,i.premultiplyAlpha=!1,i.generateMipmaps=!1,i.minFilter=i.magFilter=an,{landscape:i}}textures(){return[this.masks.landscape,this.uniforms.uNoise.value,this.uniforms.uRestored.value].filter(e=>!!e)}setLeafTrees(e){this.sims.landscape=new _d({...va.landscape,trees:e,...this.kitFalls?{waterfalls:this.kitFalls}:{}},1,this.portals)}update(e,t,i,s,r=1,a=null,o=!1){const l=Math.min(.1,Math.max(0,e)),c=Oi[t].size;this.uniforms.uAmbient.value=this.masks[t],this.uniforms.uPaintSize.value.set(c[0],c[1]),this.uniforms.uStrength.value=s?0:1,s||(this.uniforms.uTime.value+=l);const h=this.sims[t];h.energy=r,h.simulated=o&&!!a;const d=this.uniforms;d.uBroken.value.set(...(a==null?void 0:a.broken)??[0,0,0]),d.uShake.value.set(...s?[0,0,0]:(a==null?void 0:a.shake)??[0,0,0]),d.uLand.value=(a==null?void 0:a.land)??0,h.ending(a,this.scene),h.update(l,s);let u=0,f=0;for(const g of h.sprites()){if(g.glow){if(f>=xa)continue;const p=g.size*i.scale;this.q.setFromAxisAngle(this.axis,-g.rot),this.p.set(i.offset[0]+g.x*i.scale,-(i.offset[1]+g.y*i.scale),this.depth),this.m.compose(this.zero,this.q,this.s.set(p,p,1)),g.aspect&&g.aspect!==1&&this.m.premultiply(this.squash.makeScale(1,g.aspect,1)),this.m.setPosition(this.p),this.lights.setMatrixAt(f,this.m),this.lights.setColorAt(f,this.c.set(g.tint??16777215)),this.lightCell.setX(f,yr.indexOf(g.cell)),this.lightAlpha.setX(f,g.alpha),f++;continue}if(u>=_a)break;const v=g.cell==="bird-up"||g.cell==="bird-down",m=Math.max(v?10:0,g.size*i.scale);this.q.setFromAxisAngle(this.axis,-g.rot),this.p.set(i.offset[0]+g.x*i.scale,-(i.offset[1]+g.y*i.scale),this.depth),this.m.compose(this.p,this.q,this.s.set(g.flip?-m:m,m,1)),this.mesh.setMatrixAt(u,this.m),this.cell.setX(u,yr.indexOf(g.cell)),this.alpha.setX(u,g.alpha),u++}this.mesh.count=u,this.mesh.instanceMatrix.needsUpdate=this.cell.needsUpdate=this.alpha.needsUpdate=!0,this.lights.count=f,this.lights.instanceMatrix.needsUpdate=this.lightCell.needsUpdate=this.lightAlpha.needsUpdate=!0,this.lights.instanceColor&&(this.lights.instanceColor.needsUpdate=!0)}get sprites(){return this.mesh.count+this.lights.count}}const Ty=1.8,Pf=.24,Ay=6,Ry=.7,_s=(n,[e,t])=>Math.min(1,Math.max(0,(n-e)/(t-e))),Cy=n=>n*n*(3-2*n),xs=n=>1-(1-n)**3,bs={body:[0,.4],dust:[0,.45],crystal:[.62,.88],flash:[.88,1],canister:n=>[.3+.06*n,.48+.06*n],ring:n=>[.45+.07*n,.7+.07*n]};function yd(n,e){const t=i=>Math.round((n>>i&255)+(255-(n>>i&255))*e)<<i;return t(16)|t(8)|t(0)}function Py(n){return n>=7?3:n>=4?2:1}const Ir=["fire","frost","storm","core"],Iy=["core-prism","fire-sunfall","frost-ice-age","storm-tempest"];function Ly(n){return n<=0?0:Math.round(Math.min(1,.2+.16*n)*100)/100}const wd=n=>n==="core-pierce"?"fork-core-nova-power":n==="core-split"?"fork-core-nova-rush":`fork-${n}`;function Dy(n){const e=Af(n),t=n.built;return{built:t,stage:t?Py(n.core):1,canisters:Ir.map(i=>{const s=i==="core"?n.core:n.levels[i];return{branch:i,level:s,fill:t?Ly(s):0}}),forks:t?Object.fromEntries(Ir.flatMap(i=>{const s=e.ports[i].fork;return s&&Object.hasOwn(kf,s)?[[i,s]]:[]})):{},capstone:t&&e.capstone&&Iy.includes(e.capstone)?e.capstone:null,chargeRing:t&&e.chargeRing}}const Ba=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],If=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],Md=n=>{const e=Math.hypot(...n)||1;return[n[0]/e,n[1]/e,n[2]/e]},Lf=Dn.right,Df=Dn.up,al=If(Lf,Df),ol=n=>[Ba(n,Lf),-Ba(n,Df)];function Sd(n,e,t=4){const[i,s,r]=[n.tiltX,n.spin*e,n.tiltZ],[a,o,l,c,h,d]=[Math.cos(i),Math.sin(i),Math.cos(s),Math.sin(s),Math.cos(r),Math.sin(r)],u=(E,x,R)=>{const C=[h*E-d*x,d*E+h*x,R],A=[l*C[0]+c*C[2],C[1],-c*C[0]+l*C[2]];return[A[0],a*A[1]-o*A[2],o*A[1]+a*A[2]]},f=u(0,1,0),g=u(1,0,0),v=u(0,0,1),m=Md(al.map((E,x)=>E-Ba(al,f)*f[x])),p=Md(If(f,m)),w=Array.from({length:t},(E,x)=>{const R=x/t*Math.PI*2,C=g.map((y,L)=>y*Math.cos(R)+v[L]*Math.sin(R)),[A,k]=ol(C),M=Ba(C,al);return{x:A,y:k,front:M>0,depth:M}});return{major:ol(p),front:ol(m),studs:w}}const ky=.3,Uy=4,Ny={arcane:"core",fire:"fire",frost:"frost",storm:"storm"};class Fy{constructor(){S(this,"crystal",0);S(this,"build",1);S(this,"nova",0);S(this,"muzzles",[]);S(this,"shots",0);S(this,"flash",{fire:0,frost:0,storm:0,core:0})}handle(e){for(const t of e){const i=t.element?Ny[t.element]:void 0;if(t.type==="shot"&&(this.crystal=1,i&&(this.flash[i]=1,this.muzzles.push({branch:i,age:0,seed:this.shots++})),this.muzzles.length>Ay&&this.muzzles.shift()),t.type==="upgrade"&&i&&(this.flash[i]=1),t.type==="cast"&&i&&(this.flash[i]=1),t.type==="tempest"&&(this.flash.storm=1),t.type==="build"){this.build=0,this.muzzles.length=0,this.nova=0,this.crystal=0;for(const s of Ir)this.flash[s]=0}t.type==="nova"&&(this.nova=1)}}update(e,t){const i=s=>Math.max(0,s-e/ky);this.crystal=i(this.crystal);for(const s of Ir)this.flash[s]=i(this.flash[s]);t&&this.build<1?(this.build=1,this.crystal=1):this.build=Math.min(1,this.build+e/Ty),this.nova=Math.max(0,this.nova-e/Ry);for(const s of this.muzzles)s.age+=e;for(;this.muzzles.length&&this.muzzles[0].age>=Pf;)this.muzzles.shift()}canister(e){return this.flash[e]}ringRate(){return 1+Uy*this.nova}}const za={1:{body:"body-1",dais:[245,732],daisWidth:435,cup:[240,562],crystal:150,rings:[92],canister:74,canisters:[[141,644],[161,711],[354,711],[371,644]],display:1},2:{body:"body-2",dais:[727,728],daisWidth:474,cup:[710,490],crystal:170,rings:[100,112],canister:82,canisters:[[597,597],[620,687],[840,687],[865,597]],display:1},3:{body:"body-3",dais:[1242,700],daisWidth:542,cup:[1236,402],crystal:195,rings:[114,126,138],canister:90,canisters:[[1086,554],[1044,790],[1440,790],[1381,554]],display:1}},Oy={1:[100,150],2:[110,185],3:[134,240]},By={1:{column:1,crown:1},2:{column:1,crown:1},3:{column:1,crown:1}},Ed=[{spec:{tiltX:.3,tiltZ:-.25,spin:.18},dy:0},{spec:{tiltX:-.45,tiltZ:.3,spin:-.22},dy:-8},{spec:{tiltX:.15,tiltZ:.55,spin:.26},dy:8}],Td=14,zy=30,ys=.92,Hy={crystal:{piece:"crystal",height:1,glow:8378623},"core-prism":{piece:"cap-prism",height:1.08,glow:10483711},"fire-sunfall":{piece:"cap-sun",height:.62,glow:16751162},"frost-ice-age":{piece:"cap-ice",height:1.08,glow:14219007},"storm-tempest":{piece:"cap-storm",height:1.25,glow:10181887}},Vy={tiltX:.5,tiltZ:.2,spin:.6},Ca={fire:16742958,frost:6543103,storm:11561983,core:7339984},kf={"fire-meteor":{turn:1.4,sway:.22},"fire-wildfire":{turn:1.3},"frost-glacier":{breathe:[.05,.8]},"frost-brittle":{breathe:[.06,1.1]},"storm-chain":{crackle:!0},"storm-thunder":{crackle:!0},"core-pierce":{breathe:[.07,2.4]},"core-split":{turn:1.8}},Gy=.42,Wy=13684944,Pi={foot:[.5,.985],window:[.253,.357,.802,.756],orb:[.491,.118]},$y=.62,hr={tint:8382719,alpha:.38},Xy=.98,qy=.12,Yy=2.4,jy=.35,Ky=60,Zy=1.1,Ad=5,Jy=12580095,ll=16769696,Qy=6,ws=8781788,Rd=15137791,ew=12950527,ba=24,Cd=48,Pd=24,tw=9102809,Id=120;function nw(n){return n.island[1]/n.island[0]}function iw(n,e){if(!n.built)return[];const t=za[n.stage].daisWidth*e;return[{dx:t*.2,dy:t*.07,w:t*1.2,h:t*.4,alpha:.3},{dx:t*.04,dy:t*.03,w:t*.95,h:t*.3,alpha:.34}]}const Ms=(n,e,t,i)=>[n[0]+Math.cos(t)*e,n[1]+Math.sin(t)*e*i];function sw(n,e,t){const i=za[n.stage],s=[],r=[],a=!n.built,o=a?1:t.pulse.build,l=o<1,c=Dn.sinPitch,h=a&&!t.reduced?Math.sin(t.time*Yy):0,d=a?hr.tint:16777215,u=a?hr.alpha+.05*h:1,f=H=>[H[0]-i.dais[0],H[1]-i.dais[1]],g=(H,W,q,oe,I,ee=d,te=u,ae)=>s.push({name:H,x:W,y:q,ux:oe,uy:0,vx:0,vy:-I,tint:ee,alpha:te,...ae?{sub:ae}:{}}),v=(H,W,q,oe,I,ee,te)=>{const ae=e.pieces[H],J=Math.max(ae.art[0],ae.art[1]),K=oe*ae.art[0]/J,pe=oe*ae.art[1]/J,Ae=Math.cos(I),We=Math.sin(I);s.push({name:H,x:W,y:q,ux:K*Ae,uy:K*We,vx:pe*We,vy:-pe*Ae,tint:ee,alpha:te})},m=(H,W,q,oe,I)=>{a||r.push({x:H,y:W,size:q,color:oe,k:I*t.energy})};if(a){const H=i.daisWidth*Xy,W=t.reduced?0:t.time*qy,q=Math.cos(W),oe=Math.sin(W);s.push({name:"fx-rune",x:0,y:0,ux:H*q,uy:H*oe*c,vx:H*oe,vy:-H*q*c,tint:hr.tint,alpha:.5+.05*h}),r.push({x:0,y:0,size:i.daisWidth*.95,color:hr.tint,k:(.22+.1*h)*t.energy})}const p=e.pieces.canister,w=e.pieces.liquid,E=i.canister/p.art[0],[x,R,C,A]=Pi.window;function k(){const H=n.canisters.map((W,q)=>q).sort((W,q)=>i.canisters[W][1]-i.canisters[q][1]);for(const W of H){const{branch:q,fill:oe}=n.canisters[W],I=l?_s(o,bs.canister(W)):1;if(I<=0)continue;const[ee,te]=f(i.canisters[W]),ae=p.art[0]*E,J=p.art[1]*E,K=ee-Pi.foot[0]*ae,pe=te-Pi.foot[1]*J-Ky*(1-I**2);g("canister",K+ae/2,pe+J/2,ae,J);const Ae=a?0:oe*t.energy;if(Ae<=0)continue;const We=Ca[q],ze=t.pulse.canister(q),Ot=yd(We,.55*ze),vt=(C-x)*ae,En=K+(x+C)/2*ae,Bt=pe+A*J,On=(A-R)*J,qi=vt*w.art[1]/w.art[0]*.3,Yi=On*Ae,bi=Bt-Yi;g("liquid",En,(Bt+bi+qi/2)/2,vt,Math.max(0,Yi-qi/2),Ot,.92,[0,.3,1,.95]),g("liquid",En,bi,vt,qi,Ot,.95,[0,0,1,.3]);const ji=e.pieces[`glyph-${q}`],yi=vt*.62/ji.art[0];g(`glyph-${q}`,En,Bt-On*.5,ji.art[0]*yi,ji.art[1]*yi,16777215,Math.min(1,.55+Ae*.45));const Ki=e.pieces.pip;if(Ki){const Js=ae*$y,mo=Js*Ki.art[0]/Ki.art[1];g("pip",K+Pi.orb[0]*ae,pe+Pi.orb[1]*J-Js*.42,mo,Js,yd(We,.35+.4*ze),1)}const Gr=t.reduced?1:.85+.15*Math.sin(t.time*3+W*1.7),Zi=[K+Pi.orb[0]*ae,pe+Pi.orb[1]*J];m(En,Bt-Yi/2,vt*(1.6+Ae),We,(.18+.3*Ae+.5*ze)*Gr),m(Zi[0],Zi[1],vt*(.8+Ae*.6),We,.35+.4*Ae+.4*ze),ze>0&&v("fx-spark",Zi[0],Zi[1],vt*(t.reduced?1.2:1.2+.5*(1-ze)),0,We,ze)}}const M=e.pieces[i.body],y=M.at[0]+M.art[0]/2-i.dais[0],L=M.at[1]+M.art[1]-i.dais[1],D=t.shape??By[n.stage],[B,G]=Oy[n.stage],Y=M.art[1],X=(G-B)*(1-D.column),se=Y-X,z=l?Cy(_s(o,bs.body)):1,ce=se*z;if(X===0)g(i.body,y,L-ce/2,M.art[0],ce,d,u,z<1?[0,1-z,1,1]:void 0);else{let H=L,W=ce;for(const[q,oe,I]of[[G,Y,1],[B,G,D.column],[0,B,1]]){const ee=(oe-q)*I,te=Math.min(ee,W);if(te<=0)break;g(i.body,y,H-te/2,M.art[0],te,d,u,[0,(oe-(oe-q)*te/ee)/Y,1,oe/Y]),H-=te,W-=te}}const ue=X===0?s[s.length-1]:{name:i.body,x:y,y:L-ce/2,ux:M.art[0],uy:0,vx:0,vy:-ce,tint:d,alpha:u};if(l){if(z>0&&z<1)for(let W=0;W<5;W++)m(y+(W-2)*M.art[0]*.16,L-ce,M.art[0]*.32,Jy,.75*(1-z**4));const H=_s(o,bs.dust);if(H>0&&H<1)for(let W=0;W<4;W++){const[q,oe]=Ms([0,0],i.daisWidth*.5,Math.PI*(.12+.76*W/3),c),I=oe-120*xs(H);v("fx-dust",q,oe-34*H,i.daisWidth*(.2+.16*H),W%2?.2:-.2,16777215,.85*(1-H)),v("fx-spark",q+(W-1.5)*10*H,I,i.crystal*.09*(1-H),0,ll,1-H),m(q,I,i.crystal*.25,ll,.5*(1-H))}}const ge=Hy[n.capstone??"crystal"],Ue=e.pieces[ge.piece],De=i.crystal*D.crown,$e=De*ge.height,Je=$e*Ue.art[0]/Ue.art[1],Q=f(i.cup)[0],ie=f(i.cup)[1]+X,ye=t.reduced?0:Math.sin(t.time*1.6)*3*t.energy,Re=[Q,ie+Td-De/2+ye],ve=l?xs(_s(o,bs.crystal)):1,Xe=(t.reduced?0:Qy*t.pulse.crystal**2)-(1-ve)*De*Zy,Ve=n.capstone==="fire-sunfall"?[Re[0],Re[1]-De*.1+Xe]:[Q,ie+Td-$e/2+ye+Xe],P=t.reduced?0:t.ringTime,lt=H=>({...H,tiltX:H.tiltX*t.energy,tiltZ:H.tiltZ*t.energy}),Fe=H=>l?xs(_s(o,bs.ring(H))):1,Pe=a?[]:i.rings.map((H,W)=>{const q=Fe(W);return{r:H*D.crown*(.3+.7*q),open:q,c:[Re[0],Re[1]+Ed[W].dy*D.crown],...Sd(lt(Ed[W].spec),P+(1-q)*Ad)}});n.capstone==="fire-sunfall"&&!a&&Pe.push({r:$e*.62*(.3+.7*ve),open:ve,c:Ve,...Sd(lt(Vy),P+(1-ve)*Ad)});const we=e.pieces.stud.art,ct=zy*D.crown/we[0],Me=i.rings.length-1,Be=t.energy>0?n.forks:{},xt=(H,W,q,oe,I,ee,te)=>{const ae=e.pieces[wd(H)],J=kf[H],[K,pe]=J.breathe??[0,0],Ae=De*Gy*(1+K*Math.sin(P*pe)),We=Math.max(ae.art[0],ae.art[1]),ze=Ae*ae.art[0]/We,Ot=Ae*ae.art[1]/We,vt=J.turn?J.sway?J.sway*Math.sin(P*J.turn):P*J.turn:0,En=Math.cos(vt),Bt=Math.sin(vt),On=J.crackle&&!t.reduced?.78+.22*Math.sin(P*11+q)**2:1;s.push({name:wd(H),x:oe,y:I,ux:ze*En,uy:ze*Bt,vx:Ot*Bt,vy:-Ot*En,tint:ee>0?16777215:Wy,alpha:t.energy*On*te}),ee>0&&m(oe,I,Ae*1.5,Ca[W],(.4+.45*t.pulse.canister(W))*On*Math.min(1,ee/.3)*te)},ft=H=>{const{r:W,c:q,studs:oe,open:I}=Pe[Me];I>0&&Ir.forEach((ee,te)=>{const ae=Be[ee],J=oe[te];ae&&J.front===H&&xt(ae,ee,te,q[0]+J.x*W*ys,q[1]+J.y*W*ys,J.depth,I)})},T=H=>{Pe.forEach(({r:W,c:q,major:oe,front:I,studs:ee,open:te},ae)=>{if(te<=0)return;const J=oe[0]<0?[-oe[0],-oe[1]]:oe,K=H?1:-1;s.push({name:"ring",x:q[0]+I[0]*W/2*K,y:q[1]+I[1]*W/2*K,ux:J[0]*2*W,uy:J[1]*2*W,vx:-I[0]*W,vy:-I[1]*W,tint:H?16777215:14272936,alpha:te,sub:H?[0,.5,1,1]:[0,0,1,.5]});for(const pe of ee)pe.front===H&&g("stud",q[0]+pe.x*W*ys,q[1]+pe.y*W*ys,we[0]*ct,we[1]*ct,H?16777215:13284490,te);ae===Me&&!H&&ft(!1)}),H&&Pe.length&&ft(!0)},_=a?0:t.charge??0,F=_>=1&&!t.reduced&&t.energy>0&&ve>=1,Z=H=>{if(a)for(let W=0;W<3;W++){const q=W/3*Math.PI*2+(t.reduced?0:t.time*jy),oe=Math.sin(q),I=t.reduced?0:Math.sin(t.time*1.3+W*2)*5;oe>0===H&&v("crystal",Q+Math.cos(q)*De*.62,Re[1]+oe*De*.62*c+I,De*.2,(W-1)*.3,hr.tint,.5+.05*h)}if(F)for(let W=0;W<3;W++){const q=P*1.6+W/3*Math.PI*2,oe=Math.sin(q);oe>0===H&&v("fx-spark",Ve[0]+Math.cos(q)*$e*.55,Ve[1]+oe*$e*.22,De*.08,0,ws,.9*t.energy)}};T(!1),Z(!1),ve>0&&g(ge.piece,Ve[0],Ve[1],Je,$e,d,u*Math.min(1,ve*2)),m(Ve[0],Ve[1],$e*(n.capstone==="fire-sunfall"?2:1.3),ge.glow,(.45+.35*t.pulse.crystal)*(t.reduced?1:.85+.15*Math.sin(t.time*2.3))*ve);const ne=_>=1?t.reduced?.4:.35+.12*Math.sin(t.time*3):.45*_**3;ne>0&&ve>0&&m(Ve[0],Ve[1],$e*1.7,ws,ne*ve),T(!0),Z(!0),k();const j=t.reduced?0:t.time,Ee=t.groundRatio??Dn.sinPitch,he=M.art[0]*.42,Se=(H,W,q,oe)=>{(H[1]>=0||Math.abs(H[0])>=he)&&m(H[0],H[1],W,q,oe)};if(t.range&&t.range.k>0)for(let H=0;H<Id;H++)Se(Ms([0,0],t.range.radius,H/Id*Math.PI*2,Ee),t.range.bold?56:24,tw,t.range.k);if(n.chargeRing){const H=Math.round((t.charge??0)*ba);for(let W=0;W<ba;W++)m(...Ms([0,0],i.daisWidth*.56,Math.PI*(.94-.88*W/(ba-1)),Ee),30,ws,W<H?H===ba?.8:.55:.12)}if(n.capstone==="frost-ice-age"&&t.iceRadius){for(let H=0;H<Cd;H++)Se(Ms([0,0],t.iceRadius,H/Cd*Math.PI*2,Ee),26,Rd,.3);for(let H=0;H<Pd;H++)Se(Ms([0,0],t.iceRadius*(.55+.4*(H*37%11)/10),H/Pd*Math.PI*2+j*.3,Ee),34+H%3*10,Rd,.75)}if(n.capstone==="storm-tempest"&&!t.reduced&&Pe.forEach(({r:H,c:W,studs:q},oe)=>q.forEach((I,ee)=>{Math.sin(t.time*13+ee*2.1+oe*4.3)>.55&&m(W[0]+I.x*H*ys,W[1]+I.y*H*ys,34,ew,.8)})),t.unlock){const{color:H,t:W}=t.unlock,q=.85*Math.sin(Math.PI*Math.min(1,Math.max(0,W)));if(t.reduced)m(Re[0],Re[1],De*2,H,q);else for(let oe=0;oe<32;oe++)m(...Ms([0,Re[1]*W],i.daisWidth/2+(i.rings[0]*D.crown-i.daisWidth/2)*W,oe/32*Math.PI*2+W*3,Dn.sinPitch),48,H,q)}const _e=n.capstone==="fire-sunfall"?Ve:[Ve[0],Ve[1]-$e/2];if(!a&&t.energy>0)for(const{branch:H,age:W,seed:q}of t.pulse.muzzles){const oe=Math.min(1,W/Pf),I=1-oe,ee=Ca[H],te=q*2.39996;if(m(_e[0],_e[1],De*(t.reduced?.85:.6+.5*oe),ee,.8*I),v("fx-flare",_e[0],_e[1],De*.3*(t.reduced?1:.7+.6*oe),te,ee,I*t.energy),!t.reduced)for(let ae=0;ae<3;ae++){const J=te+ae*2.1,K=De*.45*xs(oe);v("fx-spark",_e[0]+Math.cos(J)*K,_e[1]+Math.sin(J)*K*.8,De*.1*(1-.5*oe),0,ee,I*t.energy)}}const re=a||t.energy<=0?0:t.pulse.nova;if(re>0){const H=1-re,W=(Ve[1]+$e/2)*(1-xs(H));if(m(Ve[0],Ve[1],$e*1.9,ws,.75*re),v("fx-flare",Ve[0],Ve[1],De*(t.reduced?.9:.7+.7*H),t.reduced?0:H*1.5,ws,re*t.energy),!t.reduced)for(let q=0;q<5;q++)m(y+(q-2)*M.art[0]*.14,W,M.art[0]*.35,ws,.75*re)}const de=l?_s(o,bs.flash):0;if(de>0&&de<1){m(Ve[0],Ve[1],$e*2.8,ge.glow,.9*(1-de)),v("fx-flare",Ve[0],Ve[1],De*(.6+1.1*de),de,ge.glow,1-de);for(let H=0;H<6;H++){const W=H/6*Math.PI*2,q=De*.7*xs(de);v("fx-spark",Ve[0]+Math.cos(W)*q,Ve[1]+Math.sin(W)*q*.7,De*.1,0,ll,1-de)}}return{sprites:s,glows:r,top:_e,body:ue}}const rw=.72,jt={body:"body-4",dais:[627,906],crystal:[627,300],display:.7},dr=160;class cl{constructor(e,t,i){S(this,"mesh");S(this,"top",[0,0]);S(this,"box",[0,0,0,0]);S(this,"cans",new Float64Array(16));S(this,"canCount",0);S(this,"uv");S(this,"alpha");S(this,"pulse",new Fy);S(this,"m",new ot);S(this,"c",new Ke);S(this,"time",0);S(this,"ringTime",0);S(this,"count",0);this.atlas=t;const s=new cn(1,1);this.uv=new pn(new Float32Array(dr*4),4),this.alpha=new pn(new Float32Array(dr),1),this.uv.setUsage(Ft),this.alpha.setUsage(Ft),s.setAttribute("iUv",this.uv),s.setAttribute("iAlpha",this.alpha);const r=new Zt({map:e,transparent:!0,alphaTest:.02,side:fn,forceSinglePass:!0});r.onBeforeCompile=a=>{a.vertexShader=`attribute vec4 iUv;
attribute float iAlpha;
varying float vAlpha;
`+a.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = iUv.xy + uv * iUv.zw;
vAlpha = iAlpha;`),a.fragmentShader=`varying float vAlpha;
`+a.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.a *= vAlpha;`)},r.customProgramCacheKey=()=>"tower-2d",this.mesh=new Bs(s,r,dr),this.mesh.instanceMatrix.setUsage(Ft),this.mesh.frustumCulled=!1,this.mesh.renderOrder=i,this.mesh.setColorAt(0,this.c.set(16777215)),this.mesh.count=0}static async load(e,t,i){const[s,r]=await Promise.all([t.loadAsync(e),fetch(e.replace(/\.webp$/,".json")).then(a=>a.json())]);return s.colorSpace=Ct,s.anisotropy=i,{texture:s,atlas:r}}handle(e){this.pulse.handle(e)}update(e,t,i){this.time+=e,this.ringTime+=e*i*this.pulse.ringRate(),this.pulse.update(e,t)}draw(e,t,i,s,r,a,o){const l=i;i*=za[e.stage].display;const{sprites:c,glows:h,top:d,body:u}=sw(e,this.atlas,{...r,iceRadius:r.iceRadius&&r.iceRadius/i,range:r.range&&{...r.range,radius:r.range.radius/i},time:this.time,ringTime:this.ringTime,pulse:this.pulse}),f=i,[g,v]=this.atlas.size;this.count=0,this.canCount=0;for(const w of c){const E=this.atlas.pieces[w.name];if(!E||this.count>=dr)continue;const[x,R,C,A]=E.rect,[k,M,y,L]=w.sub??[0,0,1,1],D=t[0]+w.x*i,B=t[1]+w.y*f;if(w.name==="canister"&&this.canCount<4){const G=this.canCount++*4,Y=Math.abs(w.ux)*i/2,X=Math.abs(w.vy)*f/2;this.cans[G]=D-Y,this.cans[G+1]=B-X,this.cans[G+2]=D+Y,this.cans[G+3]=B+X}this.m.set(w.ux*i,w.vx*i,0,D,-w.uy*f,-w.vy*f,0,-B,0,0,1,s,0,0,0,1),this.mesh.setMatrixAt(this.count,this.m),this.mesh.setColorAt(this.count,this.c.set(w.tint)),this.uv.setXYZW(this.count,(x+k*C)/g,1-(R+L*A)/v,(y-k)*C/g,(L-M)*A/v),this.alpha.setX(this.count,w.alpha),this.count++}this.mesh.count=this.count,this.mesh.instanceMatrix.needsUpdate=this.uv.needsUpdate=this.alpha.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0);const m=(o==null?void 0:o.grown)??0,p=1-m;for(const w of h)a({...w,x:t[0]+w.x*i,y:t[1]+w.y*f,size:w.size*i,k:w.k*p});return this.top=[t[0]+d[0]*i,t[1]+d[1]*f],this.box=[t[0]+(u.x-u.ux/2)*i,t[1]+(u.y+u.vy/2)*f,t[0]+(u.x+u.ux/2)*i,t[1]+(u.y-u.vy/2)*f],o&&this.stageTwo(t,l,s,o,d,i,a),this.count}stageTwo(e,t,i,s,r,a,o){const l=this.atlas.pieces[jt.body],c=[e[0]+r[0]*a,e[1]+r[1]*a];if(s.charge>0&&s.grown<1&&o({x:c[0],y:c[1],size:160*t*(1+s.charge),color:16771504,k:.9*s.charge*(1-s.grown)}),s.flash>0&&o({x:c[0],y:c[1]+60*t,size:900*t,color:16774358,k:s.flash}),!l||s.grown<=0)return;for(let x=0;x<this.count;x++)this.alpha.setX(x,this.alpha.getX(x)*(1-s.grown));const h=s.grown<1?.86+.14*s.grown+.06*Math.sin(Math.PI*s.grown):1,d=t*jt.display*h,[u,f,g,v]=l.rect,[m,p]=this.atlas.size,w=e[0]+(l.at[0]+l.art[0]/2-jt.dais[0])*d,E=e[1]+(l.at[1]+l.art[1]/2-jt.dais[1])*d;this.count<dr&&(this.m.set(l.art[0]*d,0,0,w,0,l.art[1]*d,0,-E,0,0,1,i,0,0,0,1),this.mesh.setMatrixAt(this.count,this.m),this.mesh.setColorAt(this.count,this.c.set(16777215)),this.uv.setXYZW(this.count,u/m,1-(f+v)/p,g/m,v/p),this.alpha.setX(this.count,s.grown),this.count++,this.mesh.count=this.count,this.mesh.instanceMatrix.needsUpdate=this.uv.needsUpdate=this.alpha.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)),o({x:e[0]+(jt.crystal[0]-jt.dais[0])*d,y:e[1]+(jt.crystal[1]-jt.dais[1])*d,size:220*t,color:16773320,k:.45*s.grown}),s.grown>=1&&(this.top=[e[0]+(jt.crystal[0]-jt.dais[0])*d,e[1]+(jt.crystal[1]-jt.dais[1])*d],this.box=[e[0]-l.art[0]*d*.4,e[1]+(l.at[1]-jt.dais[1])*d,e[0]+l.art[0]*d*.4,e[1]+(l.at[1]+l.art[1]-jt.dais[1])*d],this.canCount=0)}hit(e,t){const[i,s,r,a]=this.box,o=(r-i)*.18;if(e>i+o&&e<r-o&&t>s&&t<a)return!0;for(let l=0;l<this.canCount*4;l+=4)if(e>this.cans[l]&&e<this.cans[l+2]&&t>this.cans[l+1]&&t<this.cans[l+3])return!0;return!1}static scaleFor(e){return e*rw/za[3].daisWidth}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}}const Cn={fade:[0,1.5],gates:{start:1,gap:1.2,shake:.8,fall:1.6},tower:[6,9],land:{start:9,each:.9,drift:3.2,settle:14},length:15.5},hl=[{at:1.2,text:"ประตูมิติดับลงแล้ว"},{at:6.2,text:"หอคอยขยายโครงสร้าง ความรู้ยังอยู่"},{at:9.4,text:"แผ่นดินใกล้เคียงกลับมาเชื่อมต่อกัน"}],aw=n=>Math.max(0,Math.min(1,n)),ci=n=>{const e=aw(n);return e*e*(3-2*e)};function ow(n){const e=Cn.gates,t=Cn.land,[i,s]=Cn.tower,r=f=>{const g=e.start+f*e.gap,v=(n-g)/e.shake;return{shake:v>0&&v<1?Math.sin(Math.PI*v):0,broken:ci((n-g-e.shake)/e.fall)}},a=[r(0),r(1),r(2)],o=(n-i)/(s-i),l=f=>ci((n-t.start-f*t.each)/t.drift),c=[l(0),l(1),l(2)],h=[...hl].reverse().find(f=>n>=f.at),d=h?hl[hl.indexOf(h)+1]:void 0,u=d?d.at-.2:t.settle+.8;return{energy:1-ci((n-Cn.fade[0])/(Cn.fade[1]-Cn.fade[0])),shake:[a[0].shake,a[1].shake,a[2].shake],broken:[a[0].broken,a[1].broken,a[2].broken],charge:ci(o/.55),flash:o>.5&&o<.85?Math.sin(Math.PI*(o-.5)/.35):0,grown:ci((o-.6)/.4),islands:c,land:ci((n-(t.start+2*t.each+t.drift-.4))/.8),zoom:Math.min(ci((n-t.start)/3),1-ci((n-t.settle-.2)/1)),caption:h&&n<u?{text:h.text,alpha:Math.min(1,(n-h.at)/.4,(u-n)/.4)}:null,done:n>=Cn.length}}class lw{constructor(){S(this,"seconds",0);S(this,"won",!1)}update(e,t,i,s=!0){return e.phase==="victory"||this.won&&e.endless?(this.won=!0,i||e.endless?this.seconds=Cn.length:!e.paused&&s&&(this.seconds=Math.min(Cn.length,this.seconds+Math.max(0,t))),ow(this.seconds)):(this.won=!1,this.seconds=0,null)}skip(){this.won&&(this.seconds=Cn.length)}}const cw=3e3;class hw{constructor(){S(this,"pointing",!1);S(this,"until",0)}move(e,t){return e==="mouse"&&(this.pointing=t),this.pointing}leave(){this.pointing=!1}down(e,t,i){e!=="mouse"&&(this.until=t?i+cw:0)}cancel(){this.until=0}lit(e){return this.pointing||e<this.until}}const dw={"level-02":{ponds:[[716,761,70],[986,825,70],[1270,345,90],[930,405,230],[790,545,150]],tall:[[1180,13,1360,345],[700,81,1160,405]],waterfalls:[{x0:680,x1:744,top:802,bottom:1072},{x0:950,x1:1014,top:866,bottom:1136}],source:"3089219ea41a8ca3224eb106786950d672e0226b568f82c2a4019361eb4e690d",image:"4ea968e7b2a097d7567865fd5a9ebbdba2b6f8d21ea65432e8af20fb53ccdf6a",geometry:"1fce0c1a620ae3323463314ebb1720d46d7268748f41bb2c3f743c74cda55ef2",restored:"fea198bc9ebe8e4a2b3ffae4db257c6cd5d7efa0d606d4eb548f09d98e4f56e7",restoredImage:"da39b4f340c737b2732836e989a2d2baa3c304387d64ed84fc0df850b1768a45"}},dl=dw,uw=n=>n==="island-day"?"ambient.png":`ambient-${n}.png`,fw=n=>`restored-${n}.webp`,pw="painted/",mw=[16729690,16732360,12475135],gw=8382719,Ld=16726843,Dd={small:2.8,boss:3.8},ul={top:".hud-top",bottom:".hud-bottom"},kd=.45,Ud=.13,hi=160,fl={color:[.479,.716,1],strength:.45,side:.6},vw=n=>[16,8,0].map(e=>{const t=(n>>e&255)/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4}),Ha={order:["fire","frost","storm","arcane"],mix:.5,add:.22},_w=Ha.order.map(n=>vw(Xn[n])),xw=n=>Math.max(0,Ha.order.indexOf(n??"arcane"));function bw(n){const[e,t,i]=fl.color,s=_w.map(r=>`vec3(${r.map(a=>a.toFixed(4)).join(", ")})`);return`varying vec3 vFx;
`+n.replace("#include <map_fragment>",`#include <map_fragment>
vec2 rimPx = vec2(abs(dFdx(vMapUv).x), abs(dFdy(vMapUv).y));
float rimUp = 1. - min(texture2D(map, vMapUv + vec2(0., rimPx.y)).a, texture2D(map, vMapUv + vec2(0., 2. * rimPx.y)).a);
float rimSide = 1. - min(texture2D(map, vMapUv - vec2(rimPx.x, 0.)).a, texture2D(map, vMapUv + vec2(rimPx.x, 0.)).a);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(${e}, ${t}, ${i}), ${fl.strength} * clamp(rimUp + ${fl.side} * rimSide, 0., 1.));
vec3 flashTint = vFx.z < .5 ? ${s[0]} : vFx.z < 1.5 ? ${s[1]} : vFx.z < 2.5 ? ${s[2]} : ${s[3]};
diffuseColor.rgb = mix(diffuseColor.rgb, flashTint, ${Ha.mix} * vFx.x) + vFx.x * ${Ha.add};
if (vFx.y < .999 && fract(sin(dot(floor(gl_FragCoord.xy), vec2(12.9898, 78.233))) * 43758.5453) > vFx.y) discard;`)}const Tt={back:0,ambient:.5,ground:.8,groundGlowBack:.84,shadowBack:.85,tower:.9,groundGlow:.95,shadow:1,body:2,glow:3,vfx:4,bars:6},ya=-900,pl=-100,Ss=n=>n*.1,Nd=.5;function yw(n){const e=n.image,t=(s,r,a)=>{const o=document.createElement("canvas");o.width=r,o.height=a;const l=o.getContext("2d");return l.imageSmoothingQuality="high",l.drawImage(s,0,0,r,a),o},i=new kc(t(t(e,288,148),36,18));return i.colorSpace=n.colorSpace,i}function ml(n=64,e=!1,t=1.6){const i=new Uint8Array(n*n*4);for(let r=0;r<n;r++)for(let a=0;a<n;a++){const o=Math.hypot(a+.5-n/2,r+.5-n/2)/(n/2),l=e?Math.max(0,1-Math.abs(o-.85)/.15):Math.max(0,1-o)**t;i.set([255*l,255*l,255*l,255*l],(r*n+a)*4)}const s=new Dc(i,n,n);return s.magFilter=s.minFilter=an,s.needsUpdate=!0,s}class Es{constructor(e,t,i){S(this,"mesh");S(this,"count",0);S(this,"m",new ot);S(this,"q",new ni);S(this,"c",new Ke);this.capacity=t,this.mesh=new Bs(new cn(1,1),e,t),this.mesh.instanceMatrix.setUsage(Ft),this.mesh.frustumCulled=!1,this.mesh.renderOrder=i,this.mesh.setColorAt(0,new Ke(1,1,1))}begin(){this.count=0}push(e,t,i,s,r,a,o=1,l=0){this.count>=this.capacity||(this.q.setFromAxisAngle(new O(0,0,1),-r),this.m.compose(new O(e,-t,l),this.q,new O(i,s,1)),this.mesh.setMatrixAt(this.count,this.m),this.mesh.setColorAt(this.count,this.c.setHex(a).multiplyScalar(o)),this.count++)}end(){this.mesh.count=this.count,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}}function ww(n){const e=new Zt({transparent:!0,opacity:n,depthTest:!1,depthWrite:!1});return e.onBeforeCompile=t=>{t.vertexShader=`varying vec2 vBarUv;
varying vec2 vBarSize;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vBarUv = uv;
vBarSize = vec2(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz));`),t.fragmentShader=`varying vec2 vBarUv;
varying vec2 vBarSize;
`+t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
vec2 barHalf = vBarSize * .5; float barR = min(barHalf.x, barHalf.y);
vec2 barQ = abs((vBarUv - .5) * vBarSize) - barHalf + barR;
float barD = length(max(barQ, 0.)) + min(max(barQ.x, barQ.y), 0.) - barR;
diffuseColor.a *= clamp(.5 - barD, 0., 1.);`)},e.customProgramCacheKey=()=>"hp-capsule",e}function Mw(n){const e=document.createElement("canvas");e.width=n.width,e.height=n.height;const t=e.getContext("2d",{willReadFrequently:!0});t.drawImage(n,0,0);const i=t.getImageData(0,0,e.width,e.height),s=i.data,r=Uint8ClampedArray.from({length:256},(a,o)=>Sb(o));for(let a=0;a<s.length;a+=4)s[a]=r[s[a]],s[a+1]=r[s[a+1]],s[a+2]=r[s[a+2]];return t.putImageData(i,0,0),e}class Va{constructor(e,t,i,s,r,a,o,l){S(this,"onCueStart");S(this,"onCoin");S(this,"onLeak");S(this,"scene",new Rm);S(this,"camera",new Du(0,1,0,-1,-1e3,1e3));S(this,"layout",Jo(wt())?{...Oi.landscape,gates:tx(wt(),new Zh(Oi.landscape))}:Oi.landscape);S(this,"map",new Zh(this.layout));S(this,"laneTraces",H_(this.map));S(this,"fit",Jh(1,1,this.layout));S(this,"panels",new Y_);S(this,"resizeQueued",!1);S(this,"placed",[0,0]);S(this,"gateArt");S(this,"endingClock",new lw);S(this,"ending",null);S(this,"gateLight",1);S(this,"baseFit",this.fit);S(this,"pieces",[]);S(this,"endingLoad");S(this,"endingReady",!1);S(this,"pieceFit",{value:new ut});S(this,"endingBase","");S(this,"endingRestored","");S(this,"backdrop");S(this,"under");S(this,"tower");S(this,"towerHighlight",new hw);S(this,"leakCues",new Ab);S(this,"motion",new Gb);S(this,"leak",{glow:0,amplitude:0,shake:0});S(this,"lastStateTime",0);S(this,"sheets",new Map);S(this,"shadows");S(this,"shadowsBack");S(this,"groundGlow");S(this,"groundGlowBack");S(this,"glow");S(this,"bars");S(this,"vfx",new Jb(7));S(this,"vfxLayer");S(this,"skills",new gy(this.vfx,this.vfxSpace()));S(this,"ambient");S(this,"decor");S(this,"gateFlash",[0,0,0]);S(this,"actors",new Map);S(this,"held",new Set);S(this,"time",0);S(this,"frameMs",0);S(this,"unlockQueue",new Fb);S(this,"unlockPlayer",new Ob);S(this,"reduced",matchMedia("(prefers-reduced-motion: reduce)").matches);var p;this.renderer=e,this.high=t,e.toneMapping=Zn,e.outputColorSpace=Ct,e.shadowMap.enabled=!1,this.scene.background=new Ke(8373243);const c=()=>new cn(1,1);this.under=new Gt(c(),new Zt({map:yw(i),color:15134454,depthWrite:!1})),this.backdrop=new Gt(c(),new Zt({map:i,depthWrite:!1})),this.under.renderOrder=this.backdrop.renderOrder=Tt.back,this.tower=new cl(s.texture,s.atlas,Tt.tower),l&&(this.gateArt=new wx(this.scene,l,this.layout,ya+2,Ss,{back:Tt.ambient+.1,body:Tt.body}));const h=ml(),d=w=>new Zt({map:w,blending:Mr,transparent:!0,depthWrite:!1,depthTest:!1}),u=new Zt({color:1780244,alphaMap:ml(64,!1,.7),transparent:!0,depthWrite:!1});u.onBeforeCompile=w=>{w.fragmentShader=w.fragmentShader.replace("#include <color_fragment>","diffuseColor.a *= vColor.r;")},u.customProgramCacheKey=()=>"ground-shadow",this.shadows=new Es(u,hi*2,Tt.shadow),this.shadowsBack=new Es(u,hi*2,Tt.shadowBack);const f=new Zt({alphaMap:ml(64,!1,.9),transparent:!0,depthWrite:!1});f.onBeforeCompile=w=>{w.fragmentShader=w.fragmentShader.replace("#include <color_fragment>","float glowAlpha = max(vColor.r, max(vColor.g, vColor.b)); diffuseColor.rgb = vColor / max(glowAlpha, 1e-3); diffuseColor.a *= glowAlpha;")},f.customProgramCacheKey=()=>"ground-glow",this.groundGlow=new Es(f,hi*2,Tt.groundGlow),this.groundGlowBack=new Es(f,hi*2,Tt.groundGlowBack),this.glow=new Es(d(h),512,Tt.glow),this.bars=new Es(ww(.92),hi*2,Tt.bars),this.scene.add(this.under,this.backdrop,this.tower.mesh,this.shadowsBack.mesh,this.shadows.mesh,this.groundGlowBack.mesh,this.groundGlow.mesh,this.glow.mesh,this.bars.mesh),a&&(this.vfxLayer=new ty(this.scene,a,Tt.vfx,Tt.ground,pl)),o&&(this.ambient=new bd(this.scene,this.backdrop.material,o,ya+1,Tt.ambient,Tt.body+.01,Jo(wt())?{gates:this.layout.gates,waterfalls:(p=dl[wt().base])==null?void 0:p.waterfalls}:void 0));for(const[w,{meta:E,texture:x}]of r)this.sheets.set(w,this.makeSheet(E,x));this.skills.onCoin=(w,E,x)=>{var C;const R=e.domElement.getBoundingClientRect();(C=this.onCoin)==null||C.call(this,{x:R.left+w.x,y:R.top+w.y},E,x)},this.resize(),addEventListener("resize",()=>this.queueResize());const g=new ResizeObserver(()=>this.queueResize());document.querySelectorAll(Object.values(ul).join(",")).forEach(w=>g.observe(w));const v=new ResizeObserver(()=>{this.panels.update(innerWidth,innerHeight,this.panelBoxes())&&this.queueResize()});document.querySelectorAll("[data-hud-panel]").forEach(w=>v.observe(w)),document.fonts.ready.then(()=>this.queueResize()),matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",w=>{this.reduced=w.matches});const m=w=>{const E=e.domElement.getBoundingClientRect();return this.tower.hit(w.clientX-E.left,w.clientY-E.top)};e.domElement.addEventListener("pointermove",w=>{e.domElement.style.cursor=this.towerHighlight.move(w.pointerType,m(w))?"pointer":"default"}),e.domElement.addEventListener("pointerleave",()=>{this.towerHighlight.leave(),e.domElement.style.cursor="default"}),e.domElement.addEventListener("pointercancel",()=>{this.towerHighlight.leave(),this.towerHighlight.cancel()}),addEventListener("pointerdown",w=>{this.towerHighlight.down(w.pointerType,w.target===e.domElement&&m(w),performance.now())},{capture:!0})}skipEnding(){this.endingClock.skip()}loadEnding(e,t=e+"island-restored.webp"){return this.endingBase=e,this.endingRestored=t,this.endingLoad??(this.endingLoad=this.loadEndingArt(e,t).finally(()=>{this.endingReady=!0})),this.endingLoad}async loadEndingArt(e,t){var r;const i=new oc,s=async a=>{const o=await i.loadAsync(a);return o.colorSpace=Ct,o};try{const[a,o]=await Promise.all([s(t),fetch(e+"island-pieces.json").then(c=>c.json())]);(r=this.ambient)==null||r.setRestored(a);const l=!!dl[wt().base];for(const c of o.pieces){const h=new Zt({map:await s(e+c.file),transparent:!0,depthWrite:!1,opacity:0});l&&(h.onBeforeCompile=u=>{u.uniforms.uKeep={value:a},u.uniforms.uFit=this.pieceFit,u.vertexShader=`uniform vec4 uFit;
varying vec2 vPaint;
`+u.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vec4 wp = modelMatrix * vec4(position, 1.0);
vPaint = vec2((wp.x - uFit.x) / uFit.z, (-wp.y - uFit.y) / uFit.z);`),u.fragmentShader=`uniform sampler2D uKeep;
uniform vec4 uFit;
varying vec2 vPaint;
`+u.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.a *= texture2D(uKeep, vec2(vPaint.x / `+this.layout.size[0].toFixed(1)+", 1.0 - vPaint.y / "+this.layout.size[1].toFixed(1)+")).a;")},h.customProgramCacheKey=()=>"ending-piece-masked");const d=new Gt(new cn(1,1),h);d.frustumCulled=!1,d.renderOrder=Tt.ambient+.05,d.visible=!1,this.scene.add(d),this.pieces.push({mesh:d,rect:c.rect,from:c.from})}}catch(a){console.warn("ending art",a)}}drawPieces(e){this.pieces.forEach(({mesh:t,rect:i,from:s},r)=>{const a=(e==null?void 0:e.islands[r])??0,o=!!e&&e.land<1&&a>0;if(t.visible=o,!o)return;const l=this.fit.scale,[c,h]=this.fit.offset,[d,u,f,g]=i,v=1-a,m=this.reduced?0:Math.sin(this.time*1.3+r)*4*v;this.pieceFit.value.set(c,h,l,0),t.position.set(c+(d+f/2+s[0]*v)*l,-(h+(u+g/2+s[1]*v+m)*l),ya+1.5);const p=.9+.1*a;t.scale.set(f*l*p,g*l*p,1),t.material.opacity=Math.min(1,a*3)*(1-e.land)})}zoomFit(e){const t=e>0?(()=>{const[i,s]=this.layout.size,r=Math.max(innerWidth/i,innerHeight/s),a=this.baseFit.scale,o=Math.min(a,Math.max(r*1.02,a*(1-.24*e))),[l,c]=this.layout.plaza;if(o>=a)return this.baseFit;const h=this.baseFit.offset[0]+l*a,d=this.baseFit.offset[1]+c*a,u=(f,g,v)=>Math.min(0,Math.max(v-g*o,f));return{...this.baseFit,scale:o,offset:[u(h-l*o,i,innerWidth),u(d-c*o+30*e,s,innerHeight)]}})():this.baseFit;t.scale===this.fit.scale&&t.offset[0]===this.fit.offset[0]&&t.offset[1]===this.fit.offset[1]||(this.fit=t,this.vfx.clear(),this.placeBackdrop())}placeBackdrop(){const[e,t]=this.layout.size,[i,s]=this.fit.offset,r=this.fit.scale;this.backdrop.position.set(i+e*r/2,-(s+t*r/2),ya),this.backdrop.scale.set(e*r,t*r,1)}static async create(e,t,i=()=>{}){var A;const s="./"+pw,r=new oc,a=Oi.landscape,o=[...new Set(_b.map(ld))],l=Jo(wt());let c=0;const h=5+o.length+(l?1:0),d=()=>i(++c/h),u=async k=>{const M=await r.loadAsync(s+k);return M.colorSpace=Ct,M.anisotropy=e.capabilities.getMaxAnisotropy(),d(),M},[f,g]=await Promise.all([u(l?`../levels/${wt().id}/ground.webp`:a.image),cl.load(s+a.tower.image,r,e.capabilities.getMaxAnisotropy()).then(k=>(d(),k))]),v=l?(d(),void 0):await u(a.gateArt).catch(k=>{console.warn("painted gate art",k)}),m=await u("vfx.webp").catch(k=>{console.warn("painted vfx atlas",k)}),p=await bd.loadMasks(l?"./levels/kit/":s,l?uw(wt().base):void 0).catch(k=>{console.warn("painted motion masks",k)}),w=new Map,[E,x]="".split("=");await Promise.all(o.map(async k=>{try{const M=x&&k===E?x:k,y=await(await fetch(`${s}sheets/${M}.json`)).json(),L=await new Promise((B,G)=>{const Y=new Image;Y.onload=()=>B(Y),Y.onerror=G,Y.src=`${s}sheets/${M}.webp`}),D=new kc(Mw(L));D.colorSpace=Ct,w.set(k,{meta:y,texture:D})}catch(M){console.warn("painted sheet",k,M)}d()}));const R=new Va(e,t,f,g,w,m,p,v);if(l){try{const[{Decor2DLayer:k},{decorLayout:M,islandEllipse:y,leafCrowns:L},{grassContext:D,readGrassMask:B}]=await Promise.all([xr(()=>import("./decor-2d-layer-DBfK3xfy.js"),[],import.meta.url),xr(()=>import("./decor-layout-BD7wZAht.js"),__vite__mapDeps([0,1]),import.meta.url),xr(()=>import("./grass-mask-DRTdgJFI.js"),[],import.meta.url)]),{atlas:G,texture:Y}=await k.loadAtlas("./"),X=await fetch(`./levels/kit/grass-${wt().base}.json`).then(z=>z.ok?z.json():void 0).catch(()=>{}),se=M(wt(),{map:R.map,atlas:G,island:y(R.layout),...X?{grass:D(B(X),R.layout)}:{}});R.decor=new k(R.scene,Y,se,{shade:Tt.ambient+.2,decor:Tt.body+.5},Ss,pl),(A=R.ambient)==null||A.setLeafTrees(L(se))}catch(k){console.warn("kit decor",k)}d()}const C=l?`./levels/kit/${fw(wt().base)}`:s+"island-restored.webp";return R.endingBase=s,R.endingRestored=C,window.setTimeout(()=>void R.loadEnding(s,C),2500),R}makeSheet(e,t){const i=new cn(1,1),s=new pn(new Float32Array(hi*3),3),r=new pn(new Float32Array(hi*3),3);s.setUsage(Ft),r.setUsage(Ft),i.setAttribute("iCell",s),i.setAttribute("iFx",r);const a=new Zt({map:t,alphaTest:.5}),o=new tt(Vt.cell/e.width,Vt.cell/e.height);a.onBeforeCompile=c=>{c.uniforms.uCellSize={value:o},c.vertexShader=`attribute vec3 iCell;
attribute vec3 iFx;
uniform vec2 uCellSize;
varying vec3 vFx;
`+c.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = vec2(iCell.z > .5 ? 1. - uv.x : uv.x, uv.y) * uCellSize + iCell.xy;
vFx = iFx;`),c.fragmentShader=bw(c.fragmentShader)},a.customProgramCacheKey=()=>"view2d-sprite";const l=new Bs(i,a,hi);return l.instanceMatrix.setUsage(Ft),l.frustumCulled=!1,l.renderOrder=Tt.body,l.count=0,this.scene.add(l),{meta:e,mesh:l,cell:s,fx:r}}resize(){const e=innerWidth,t=innerHeight;this.renderer.setSize(e,t),this.vfx.view={w:e,h:t},this.camera.left=0,this.camera.right=e,this.camera.top=0,this.camera.bottom=-t,this.camera.updateProjectionMatrix(),this.panels.update(e,t,this.panelBoxes()),this.place()}queueResize(){this.resizeQueued||(this.resizeQueued=!0,requestAnimationFrame(()=>{this.resizeQueued=!1,this.resize()}))}place(){var c;const e=innerWidth,t=innerHeight,[i,s]=this.layout.size,r=this.fit,a=e===this.placed[0]&&t===this.placed[1];this.placed=[e,t],this.fit=this.baseFit=Jh(e,t,this.layout,this.safeBand(t),G_(this.layout,this.laneTraces,36,((c=dl[wt().base])==null?void 0:c.tall)??[]),{outline:this.layout.outline,panels:this.panels.boxes});const o=K_(r,this.fit,a);o==="clear"?this.vfx.clear():o==="slide"&&this.vfx.shift(this.fit.offset[0]-r.offset[0],this.fit.offset[1]-r.offset[1]),this.placeBackdrop();const l=Math.max(e/i,t/s);this.under.visible=!this.fit.cover,this.under.position.set(e/2,-t/2,-950),this.under.scale.set(i*l,s*l,1)}panelBoxes(){return Array.from(document.querySelectorAll("[data-hud-panel]")).filter(e=>e.getClientRects().length).map(e=>[e,e.getBoundingClientRect()]).filter(([,e])=>e.width>0&&e.height>0).map(([e,t])=>[e,[t.left,t.top,t.right,t.bottom]])}safeBand(e){const t=r=>Array.from(document.querySelectorAll(r)).filter(a=>a.getClientRects().length).map(a=>a.getBoundingClientRect()),i=Math.max(0,...t(ul.top).map(r=>r.bottom)),s=Math.min(e,...t(ul.bottom).map(r=>r.top));return s-i>80?{top:i+8,bottom:s-8}:{top:0,bottom:e}}screen(e){return[this.fit.offset[0]+e[0]*this.fit.scale,this.fit.offset[1]+e[1]*this.fit.scale]}paint(e){const t=this.ground(e);return this.map.toImage(t.x,t.z)}ground(e){const t=this.actorNear(e);return t?{x:t.x,z:t.z}:{x:e.x,z:e.z}}actorNear(e,t){const i=t===void 0?void 0:this.actors.get(t);if(i)return i;let s,r=1.2;for(const a of this.actors.values()){const o=Math.hypot(a.rx-e.x,a.rz-e.z);o<r&&(r=o,s=a)}return s}screenPoint(e){const[t,i]=this.screen(this.paint(e)),s=this.renderer.domElement.getBoundingClientRect();return{x:s.left+t,y:s.top+i,ndcX:t/Math.max(1,innerWidth)*2-1}}vfxSpace(){const e=(t,i)=>{const[s,r]=this.screen(this.map.toImage(t,i));return{x:s,y:r}};return{actor:(t,i)=>{var s;return i!==void 0?this.actors.has(i)?i:void 0:(s=this.actorNear(t))==null?void 0:s.id},place:t=>{const i=this.actors.get(t);return i&&{...e(i.x,i.z),height:i.height??44*this.fit.scale}},ground:t=>e(t.x,t.z),metric:()=>this.vfx.metric,towerTop:()=>({x:this.tower.top[0],y:this.tower.top[1]})}}handle(e){this.unlockQueue.add(e)&&this.unlockPlayer.cancel(),this.tower.handle(e),this.skills.handle(e);for(const t of e){const i=t.target;t.type==="hit"&&i!==void 0&&this.skills.onImpact(t,()=>{const s=this.actors.get(i);s&&(s.flash=Ud,s.flashTint=xw(t.element))}),t.type==="kill"&&i!==void 0&&(this.held.add(i),this.skills.onImpact(t,()=>{this.held.delete(i),this.exit(i,"kill")})),t.type==="leak"&&i!==void 0&&this.exit(i,"leak"),t.type==="leak"&&this.leaked(t.damage??0,!!t.boss),t.type==="spawn"&&t.lane!==void 0&&(this.gateFlash[t.lane%3]=Nd)}}leaked(e,t){var a;this.leakCues.add({damage:e,boss:t});const[i,s]=this.screen(this.layout.tower.base),r=this.renderer.domElement.getBoundingClientRect();this.vfx.groundRing({x:i,y:s},t?Dd.boss:Dd.small,Ld,{life:t?.9:.6,alpha:1}),(a=this.onLeak)==null||a.call(this,{x:r.left+i,y:r.top+this.tower.top[1]-8},e,t)}whenShown(e,t){this.skills.onImpact(e,t)}exit(e,t){const i=this.actors.get(e);i&&!i.exit&&(i.exit={kind:t,t:0})}update(e,t){var c,h,d;const i=performance.now(),s=e.paused?0:t*e.speed*dc;this.time+=s,e.time<this.lastStateTime&&(this.unlockQueue.clear(),this.unlockPlayer.cancel(),this.actors.clear(),this.held.clear(),this.gateFlash.fill(0),this.leakCues.clear(),this.skills.newRun(),this.motion.clear()),this.lastStateTime=e.time,this.playUnlocks(e,t);const r=new Set,a=this.motion.update(e);for(const u of e.enemies){r.add(u.id);const f=a.get(u.id);let g=this.actors.get(u.id);g||(g={id:u.id,kind:u.kind,lane:u.lane,progress:u.progress,rx:u.x,rz:u.z,x:f.x,z:f.z,px:f.x,pz:f.z,hp:u.hp,maxHp:u.maxHp,shield:u.shield,maxShield:u.maxShield,boss:u.boss,mini:!!u.mini,flash:0,flashTint:0,walk:0},this.actors.set(u.id,g));const v=Math.hypot(f.x-g.x,f.z-g.z);v>1e-4&&(g.px=g.x,g.pz=g.z),g.walk+=v,g.x=f.x,g.z=f.z,g.rx=u.x,g.rz=u.z,g.lane=u.lane,g.progress=u.progress,g.hp=u.hp,g.maxHp=u.maxHp,g.shield=u.shield,g.maxShield=u.maxShield,g.cues=Eb(u,e)}for(const u of this.actors.values())u.flash=Math.max(0,u.flash-s),!r.has(u.id)&&!u.exit&&!this.held.has(u.id)&&(u.exit={kind:"kill",t:0}),u.exit&&(u.exit.t+=s),u.exit&&u.exit.t>kd&&this.actors.delete(u.id);for(let u=0;u<3;u++)this.gateFlash[u]=Math.max(0,this.gateFlash[u]-s);this.vfx.reduced=this.reduced,this.vfx.scale=this.fit.scale,this.vfx.metric=ny((u,f)=>this.screen(this.map.toImage(u,f))),e.phase==="victory"&&!this.endingLoad&&this.endingBase&&this.loadEnding(this.endingBase,this.endingRestored);const o=this.ending=this.endingClock.update(e,t,this.reduced,this.endingReady||!this.endingBase);this.zoomFit((o==null?void 0:o.zoom)??0),this.drawPieces(o);const l=o&&!e.endless?o.energy:1;this.gateLight=o?e.endless?0:o.energy:1,this.skills.sync(e),this.skills.frame(e,this.time,s,l),this.vfx.update(s),(c=this.ambient)==null||c.update(t,"landscape",this.fit,this.reduced,this.gateLight,o,e.endless),(h=this.decor)==null||h.update(this.fit,s,this.reduced,this.gateLight,o),(d=this.gateArt)==null||d.update(this.fit,this.gateLight,o==null?void 0:o.broken,this.reduced||o==null?void 0:o.shake,this.time),this.tower.update(s,this.reduced,l),this.leak=this.leakCues.frame(s,this.reduced),this.draw(e,l),this.renderer.render(this.scene,this.camera),this.frameMs=performance.now()-i}playUnlocks(e,t){var i;if(!e.paused){if(document.body.dataset.uiModal!=="true"&&!this.unlockPlayer.busy){const s=this.unlockQueue.take(e);s.length&&this.unlockPlayer.play(Nb(s,this.reduced))}if(this.unlockPlayer.busy)for(const s of this.unlockPlayer.advance(t).started)(i=this.onCueStart)==null||i.call(this,s)}}draw(e,t){var o;const i=this.fit.scale,s=vx(i);for(const l of[this.shadows,this.shadowsBack,this.groundGlow,this.groundGlowBack,this.glow,this.bars])l.begin();const r=this.screen(this.layout.tower.base)[1];this.drawTower(e,t);const a=new Map;for(const l of this.actors.values()){const[c,h]=this.screen(this.map.toImage(l.x,l.z)),d=Jt[l.kind],u=mx(l.kind,l),f=l.exit?Math.min(1,l.exit.t/kd):0,g=d.height*u*this.layout.actorScale*i*s,v=d.footprint*u*this.layout.actorScale*i*s*(1-f*.6),m=h>r,p=m?this.shadows:this.shadowsBack,w=m?this.groundGlow:this.groundGlowBack;for(const A of xx(v,d.hover))p.push(c+A.dx,h+A.dy,A.w,A.h,0,16777215,A.alpha,Ss(h)-.01);const E=this.reduced?1:.85+.15*Math.sin(this.time*9+l.id);for(const A of yx(l.kind,v))w.push(c+A.dx,h+A.dy,A.w,A.h,0,A.color,A.k*E*(1-f),Ss(h)-.01);const x=ld(l.kind),R=this.sheets.get(x);let C=h-g;if(R){const A=a.get(x)??0;a.set(x,A+1),C=this.placeSprite(R,A,l,c,h-d.hover*this.layout.actorScale*i*.7,u,s,f)}if(l.height=h-C,l.cues&&!l.exit&&this.skills.marks(l.cues,{id:l.id,x:c,feet:h,top:C,width:g*.84},d.footprint*u,this.time),!l.exit)for(const A of Bb(l,c,C-6,g))this.bars.push(A.x,A.y,A.w,A.h,0,A.tint)}for(const[l,c]of this.sheets)c.mesh.count=a.get(l)??0,c.mesh.instanceMatrix.needsUpdate=c.cell.needsUpdate=c.fx.needsUpdate=!0;this.layout.gates.forEach((l,c)=>{const h=this.gateFlash[c]/Nd,[d,u,f,g]=l.mouth,[v,m]=this.screen([d,u]),p=1.75*Math.max(f,g)*i;this.gateLight>.001?this.glow.push(v,m,p*2,p*2,0,mw[c],(.4+(this.reduced?0:.15*Math.sin(this.time*2+c))+.5*h)*this.gateLight):h>0&&this.ending&&this.glow.push(v,m,p*2,p*2,0,gw,.6*h)}),(o=this.vfxLayer)==null||o.draw(this.vfx,this.skills.quads,this.time);for(const l of[this.shadows,this.shadowsBack,this.groundGlow,this.groundGlowBack,this.glow,this.bars])l.end()}drawTower(e,t){const[i,s]=this.screen(this.layout.tower.base),r=cl.scaleFor(this.layout.tower.width*this.fit.scale),a=i+this.leak.shake*Math.max(.6,this.fit.scale),o=this.layout.tower.width*this.fit.scale;this.leak.glow>.001&&this.glow.push(i,s-o*.45,o*.9,o*.9,0,Ld,this.leak.glow);const l=this.unlockPlayer.active,c=this.towerHighlight.lit(performance.now()),h=Dy(e);for(const d of iw(h,r))this.shadowsBack.push(a+d.dx,s+d.dy,d.w,d.h,0,16777215,d.alpha,pl);this.tower.draw(h,[a,s],r,Ss(s),{reduced:this.reduced,energy:t,charge:kb(e),unlock:l?{color:Ca[l.branch],t:this.unlockPlayer.activeProgress}:void 0,iceRadius:Fa*this.map.sx*this.fit.scale,groundRatio:nw(this.layout),range:{radius:Pr(e).range*this.map.sx*this.fit.scale,k:c?1:e.phase==="wave"?.05:.2,bold:c}},d=>this.glow.push(d.x,d.y,d.size,d.size,0,d.color,d.k),this.ending??void 0)}placeSprite(e,t,i,s,r,a,o,l){var k,M;const c=e.meta,h=Jt[i.kind],d=_x(c,h,a),u=((k=i.exit)==null?void 0:k.kind)==="kill"?"death":"move",f=Vt.clips[u],g=u==="death"?Math.min(f-1,Math.floor(l*f)):Math.floor(i.walk/Math.max(1e-6,h.moveSpeed*d*o)/c.durations.move*f)%f,v=Math.atan2(i.x-i.px,i.z-i.pz),{dir:m,flip:p}=bb(v-Dn.yaw),w=xb(u,g,m),E=c.cells[u];e.cell.setXYZ(t,w%Vt.columns*Vt.cell/c.width,(Vt.rows-1-Math.floor(w/Vt.columns))*Vt.cell/c.height,p?1:0),e.fx.setXYZ(t,i.flash/Ud,((M=i.exit)==null?void 0:M.kind)==="leak"||u==="death"&&l>.7?1-l:1,i.flashTint);const x=E.world/c.fitScale*d*this.layout.actorScale*this.fit.scale*o/Dn.cosPitch,R=p?1-E.anchor[0]:E.anchor[0],C=s+(.5-R)*x,A=r-(.5-E.anchor[1])*x;return e.mesh.setMatrixAt(t,new ot().compose(new O(C,-A,Ss(r)),new ni,new O(x,x,1))),r-(1-E.anchor[1])*x+x*.12}toggleQuality(){return this.high=!this.high,this.renderer.setPixelRatio(Vu(devicePixelRatio,this.high,Hu(location.search,!1))),this.resize(),this.high}benchCounts(){var t;const e=(t=this.vfxLayer)==null?void 0:t.counts;return{enemies:this.actors.size,effects:this.vfx.particles.length+this.vfx.bolts.length,projectiles:this.vfx.projectiles.length,statusQuads:this.skills.quads.length,vfxQuads:((e==null?void 0:e.top)??0)+((e==null?void 0:e.ground)??0),glow:this.glow.mesh.count,bars:this.bars.mesh.count}}textureBytes(){var e;return J_(this.scene,(e=this.ambient)==null?void 0:e.textures())}diagnostics(){var i,s,r,a;const e=this.renderer.info.render,t=this.renderer.domElement;return{view:"2d",layout:"landscape",scale:this.fit.scale,cover:this.fit.cover,cssSize:[t.clientWidth,t.clientHeight],drawingBuffer:[t.width,t.height],pixelRatio:this.renderer.getPixelRatio(),drawCalls:e.calls,triangles:e.triangles,textures:this.renderer.info.memory.textures,enemies:this.actors.size,effects:this.vfx.particles.length+this.vfx.bolts.length,projectiles:this.vfx.projectiles.length,sheets:this.sheets.size,frameMs:this.frameMs,quality:this.high?"high":"standard",tower:{instances:this.tower.mesh.count,top:this.tower.top},layers:{shadows:this.shadows.mesh.count+this.shadowsBack.mesh.count,glow:this.glow.mesh.count,bars:this.bars.mesh.count,vfx:!!this.vfxLayer,ambient:((i=this.ambient)==null?void 0:i.sprites)??-1,gates:((s=this.gateArt)==null?void 0:s.drawn)??-1,decor:((r=this.decor)==null?void 0:r.count)??-1},skillVfx:{quads:this.skills.quads.length,...(a=this.vfxLayer)==null?void 0:a.counts}}}}const Sw="level-01",Ew=[{role:"short",control:[[16.078,3.565],[11.357,1.853],[6.399,.414],[1.984,.253]]},{role:"long",control:[[-11.912,11.182],[-6.977,12.013],[-2.832,11.131],[-1.634,8.058],[-4.331,5.496],[-9.962,5.382],[-13.03,2.571],[-12.03,-.528],[-8.505,-1.287],[-4.715,.608],[-1.764,1.186]]},{role:"medium",control:[[-12.3,-11.047],[-7.982,-11.705],[-3.917,-10.38],[-3.031,-7.847],[-5.812,-6.589],[-9.358,-7.243],[-11.815,-6.952],[-12.997,-5.591],[-12.182,-4.075],[-10.038,-3.499],[-6.057,-3.092],[-1.41,-1.591]]}],Tw="island-day",Aw={width:2.6,tile:"slab"},Rw={at:[0,0],radius:3.6},Cw={id:Sw,lanes:Ew,base:Tw,road:Aw,plaza:Rw},Pw="level-02",Iw=[{role:"short",control:[[-10.548,11.557],[-10.097,9.599],[-9.198,7.294],[-7.703,5.065],[-6.184,2.638],[-3.647,.139]]},{role:"long",control:[[-15.225,-2.347],[-13.976,-5.817],[-11.637,-8.341],[-8.21,-9.919],[-4.685,-10.679],[-1.486,-10.472],[.27,-8.434],[.661,-5.964],[.456,-3.571]]},{role:"medium",control:[[15.306,.139],[14.124,-3.238],[11.92,-4.93],[8.894,-4.913],[6.285,-3.432],[4.246,-1.676],[3.326,-.785]]}],Lw="level-02",Dw={width:2.6,tile:"slab"},kw={at:[0,0],radius:3.6},Uw=.79,Nw=[{piece:"trees-32",at:[-9.98,-3.11],width:1.4},{piece:"trees-33",at:[-6.71,10.99],width:1.32},{piece:"trees-33",at:[-4.19,-15.57],width:1.12},{piece:"trees-33",at:[-4.87,10.11],width:1.24},{piece:"trees-13",at:[-.51,7.9],width:2.25,flip:!0},{piece:"trees-01",at:[-2.27,9.41],width:2.32},{piece:"trees-31",at:[-1.35,10.46],width:1.33},{piece:"trees-30",at:[2.25,-14.89],width:1.11},{piece:"trees-22",at:[2.22,7.29],width:2.76,flip:!0},{piece:"trees-33",at:[3.81,6.79],width:1.39},{piece:"trees-13",at:[6,2.95],width:2.18},{piece:"trees-13",at:[4.51,3.76],width:2.24},{piece:"trees-31",at:[4.7,1.54],width:1.22},{piece:"trees-10",at:[5.76,15.06],width:2.34},{piece:"trees-10",at:[8.78,8.36],width:2.33,flip:!0},{piece:"trees-11",at:[9.95,11.02],width:2.22,flip:!0},{piece:"trees-31",at:[8.64,10.5],width:1.16},{piece:"trees-33",at:[11.7,-12.18],width:1.12},{piece:"rocks-22",at:[-4.01,-3.6],width:1.31},{piece:"rocks-22",at:[-11.71,3.29],width:1.21},{piece:"rocks-01",at:[-1.83,11.58],width:1.37,flip:!0},{piece:"rocks-22",at:[-1.97,7.29],width:1.49,flip:!0},{piece:"rocks-00",at:[3.13,3.97],width:1.96},{piece:"rocks-33",at:[-3.91,6.35],width:1.77},{piece:"rocks-01",at:[5.93,5.94],width:1.59,flip:!0},{piece:"rocks-00",at:[-5.05,-5.23],width:1.75,flip:!0},{piece:"rocks-21",at:[-10.69,-2.63],width:1.21,flip:!0},{piece:"rocks-00",at:[-.73,6.06],width:1.42,flip:!0},{piece:"rocks-21",at:[-3.38,-5.85],width:1.76,flip:!0},{piece:"rocks-00",at:[-5.95,-4.5],width:1.28},{piece:"rocks-03",at:[4.98,6.39],width:1.82},{piece:"rocks-01",at:[-3.86,8.93],width:1.88},{piece:"rocks-23",at:[1.92,5.61],width:2.2},{piece:"rocks-10",at:[3.43,5.15],width:1.1},{piece:"rocks-13",at:[.29,4.99],width:.95},{piece:"rocks-23",at:[-2.98,7.63],width:2.2,flip:!0},{piece:"rocks-11",at:[-1.19,7.2],width:1.1,flip:!0},{piece:"rocks-10",at:[-4.49,7],width:.95},{piece:"rocks-22",at:[-2.75,6.11],width:1.2,flip:!0},{piece:"rocks-23",at:[-6.47,-5.8],width:2.2},{piece:"rocks-11",at:[-4.76,-6.51],width:1.1,flip:!0},{piece:"rocks-13",at:[-8.04,-6.52],width:.95},{piece:"rocks-22",at:[-5.98,-7.27],width:1.2,flip:!0},{piece:"trees-03",at:[-10.65,-1.29],width:1.8,flip:!0},{piece:"trees-21",at:[6.93,15.45],width:1.8,flip:!0},{piece:"trees-30",at:[-7.41,-6.43],width:1.1},{piece:"trees-01",at:[11.4,12.27],width:2.6,flip:!0},{piece:"trees-31",at:[-9.66,-5.14],width:1.4,flip:!0},{piece:"trees-33",at:[-2.44,-16.48],width:1.4,flip:!0},{piece:"trees-12",at:[-7.71,-4.52],width:1.8,flip:!0},{piece:"trees-20",at:[1.37,-17.42],width:1.7,flip:!0},{piece:"trees-32",at:[-4.14,-6.5],width:1.1},{piece:"trees-22",at:[9.75,-12.81],width:1.8,flip:!0},{piece:"trees-33",at:[10.24,-12.04],width:1.4,flip:!0},{piece:"trees-22",at:[5.31,13.17],width:1.7,flip:!0},{piece:"trees-33",at:[4.89,4.65],width:1.1,flip:!0},{piece:"trees-01",at:[9.93,5.6],width:1.7},{piece:"trees-30",at:[.02,-15.59],width:1.4},{piece:"trees-30",at:[1.93,4.54],width:1.4,flip:!0},{piece:"trees-32",at:[-13.95,10.4],width:1.1},{piece:"trees-21",at:[-3.28,4.82],width:1.7,flip:!0},{piece:"trees-02",at:[6.5,4.57],width:3},{piece:"trees-32",at:[7.77,-10.1],width:1.1},{piece:"trees-30",at:[-8.96,-1.17],width:1.1},{piece:"trees-31",at:[9.81,8.77],width:1.4,flip:!0},{piece:"trees-21",at:[9.02,6.47],width:2.6},{piece:"trees-32",at:[-1.37,9.08],width:1.1,flip:!0},{piece:"trees-31",at:[4.61,-10.91],width:1.1,flip:!0},{piece:"trees-33",at:[6.62,-9.81],width:1.1},{piece:"trees-31",at:[6.95,7.7],width:1.4,flip:!0},{piece:"trees-33",at:[.87,-16.45],width:1.4,flip:!0},{piece:"trees-02",at:[-1.82,16.95],width:1.8},{piece:"trees-30",at:[-2.81,-15.33],width:1.1},{piece:"trees-23",at:[12.05,11.22],width:1.8,flip:!0},{piece:"trees-32",at:[-6.89,-16.07],width:1.1,flip:!0},{piece:"trees-31",at:[-3.38,-6.69],width:1.1},{piece:"trees-12",at:[3.33,-16.35],width:1.7},{piece:"trees-32",at:[-.9,-16.58],width:1.4,flip:!0},{piece:"trees-32",at:[-12.36,3.08],width:1.1},{piece:"trees-33",at:[-11.68,1.98],width:1.4,flip:!0},{piece:"trees-33",at:[.34,15.44],width:1.1,flip:!0},{piece:"trees-30",at:[5.58,16.48],width:1.1},{piece:"trees-33",at:[9.06,-12.08],width:1.1,flip:!0},{piece:"trees-33",at:[-.04,-16.48],width:1.4,flip:!0},{piece:"trees-21",at:[.24,14.2],width:1.7},{piece:"trees-31",at:[7.84,8.95],width:1.4},{piece:"trees-11",at:[-11.13,.05],width:1.7,flip:!0},{piece:"trees-32",at:[-11.64,-1.27],width:1.1,flip:!0},{piece:"trees-33",at:[10.97,13.34],width:1.4},{piece:"trees-23",at:[4.81,2.61],width:1.8},{piece:"trees-33",at:[2.34,-15.62],width:1.4},{piece:"trees-30",at:[6.76,5.99],width:1.1},{piece:"trees-33",at:[-8.58,-1.96],width:1.1,flip:!0},{piece:"trees-23",at:[10.36,-1.01],width:2.6,flip:!0},{piece:"trees-30",at:[-10.02,-.75],width:1.1},{piece:"trees-30",at:[9.24,-10.73],width:1.4,flip:!0},{piece:"trees-30",at:[11.36,-.18],width:1.1},{piece:"trees-01",at:[-3.52,-17.29],width:1.7,flip:!0},{piece:"trees-30",at:[6.47,1.47],width:1.1},{piece:"trees-32",at:[1.07,-15.68],width:1.4},{piece:"trees-33",at:[8.01,15.64],width:1.4,flip:!0},{piece:"trees-30",at:[1.24,6.78],width:1.1,flip:!0},{piece:"trees-33",at:[5.4,-11.28],width:1.4,flip:!0},{piece:"trees-32",at:[-.19,6.59],width:1.1,flip:!0},{piece:"trees-32",at:[10.15,6.5],width:1.4},{piece:"trees-30",at:[-6.89,-4.6],width:1.1,flip:!0},{piece:"trees-22",at:[.2,12.29],width:1.8},{piece:"trees-30",at:[6.68,16.28],width:1.1,flip:!0},{piece:"trees-32",at:[10.39,-10.66],width:1.4,flip:!0},{piece:"trees-20",at:[10.03,7.5],width:1.8,flip:!0},{piece:"trees-31",at:[-8.65,-3.1],width:1.4},{piece:"trees-33",at:[-2.09,6.56],width:1.1,flip:!0},{piece:"trees-33",at:[-2.14,14.31],width:1.1},{piece:"trees-03",at:[-1.8,5.73],width:1.8},{piece:"trees-30",at:[-7.94,-2.93],width:1.1},{piece:"trees-20",at:[-3.92,-7.78],width:1.7},{piece:"trees-32",at:[-2.81,10.24],width:1.1,flip:!0},{piece:"trees-30",at:[6.57,-10.7],width:1.4,flip:!0},{piece:"trees-21",at:[9.6,9.82],width:2.2},{piece:"trees-30",at:[-1.89,-15.2],width:1.1},{piece:"trees-33",at:[8.11,-10.91],width:1.4},{piece:"trees-01",at:[-9.61,-4.18],width:1.8,flip:!0},{piece:"trees-30",at:[13.13,11.41],width:1.4,flip:!0},{piece:"trees-33",at:[5.96,-9.54],width:1.1},{piece:"trees-22",at:[6.52,6.84],width:1.8},{piece:"trees-01",at:[-3,16.86],width:2.2,flip:!0},{piece:"trees-30",at:[-9.03,-6.14],width:1.1,flip:!0},{piece:"trees-33",at:[1.06,5.95],width:1.1},{piece:"trees-30",at:[-3.55,-16.27],width:1.4},{piece:"trees-33",at:[-.91,11.95],width:1.4},{piece:"trees-30",at:[-10.15,-2.12],width:1.4},{piece:"trees-30",at:[9.07,-1.13],width:1.4},{piece:"trees-32",at:[10.27,12.05],width:1.1},{piece:"trees-02",at:[-1.37,-17.55],width:2.2},{piece:"trees-30",at:[3.03,5.65],width:1.1,flip:!0},{piece:"trees-11",at:[-.82,15.64],width:2.6},{piece:"trees-33",at:[-5.59,-6.69],width:1.1},{piece:"trees-30",at:[-4.35,-16.2],width:1.1,flip:!0},{piece:"trees-33",at:[-14.37,8.56],width:1.4},{piece:"trees-31",at:[-5.56,-16.22],width:1.4,flip:!0},{piece:"trees-32",at:[7.43,7.03],width:1.4},{piece:"trees-33",at:[8.11,.04],width:1.1},{piece:"trees-33",at:[-3.45,-4.38],width:1.4},{piece:"trees-21",at:[-8.31,-5.62],width:1.8},{piece:"trees-33",at:[11.43,-12.81],width:1.1},{piece:"trees-22",at:[-2.07,15.46],width:1.8},{piece:"trees-32",at:[-3.4,11.05],width:1.4},{piece:"trees-30",at:[-1.25,-15.57],width:1.1,flip:!0},{piece:"trees-21",at:[4.88,14.15],width:1.8},{piece:"trees-33",at:[.33,-17.12],width:1.1},{piece:"trees-33",at:[-11.94,.91],width:1.4},{piece:"trees-33",at:[-10.72,1.37],width:1.1,flip:!0},{piece:"trees-30",at:[-10.54,-3.92],width:1.4}],Fw={seed:26,spacing:[.55,1.1],mix:{tuft:.35,flower:.3,bush:.25,rock:.1}},Ow={seed:27,count:45,cluster:3,pieces:["flowers-00","flowers-00","flowers-00","flowers-00","flowers-00","flowers-00","flowers-01","flowers-01","flowers-01","flowers-01","flowers-01","flowers-01","flowers-02","flowers-02","flowers-02","flowers-02","flowers-02","flowers-02","flowers-03","flowers-03","flowers-03","flowers-03","flowers-03","flowers-03","flowers-10","flowers-10","flowers-11","flowers-11","flowers-12","flowers-12","flowers-13","flowers-13","flowers-20","flowers-21","flowers-22","flowers-23","flowers-30","flowers-30","flowers-31","flowers-31","flowers-32","flowers-32","flowers-33","flowers-33"]},Bw=[{at:[13.35,-9.65],radius:2.6},{at:[6.44,-14.26],radius:2.6},{at:[-5.03,13.69],radius:2.6},{at:[4.89,10],radius:2.6},{at:[9.75,2.47],radius:2.6}],zw={id:Pw,lanes:Iw,base:Lw,road:Dw,plaza:kw,pace:Uw,decor:Nw,edgeDecor:Fw,fieldDecor:Ow,keepClear:Bw},Hw=Object.assign({"./levels/layout-b.json":Wu,"./levels/level-01.json":Cw,"./levels/level-02.json":zw});function Uf(n){return Hw[`./levels/${n}.json`]}const OS=Object.freeze(Object.defineProperty({__proto__:null,levelData:Uf},Symbol.toStringTag,{value:"Module"})),ur=["layout-b","level-02"],uc="aetherkeep:campaign",Fd=1;class Nf{constructor(e,t=0){S(this,"current");S(this,"usable");this.store=e;let i=Math.max(0,Math.min(ur.length-1,Math.floor(t)||0)),s=!!e;try{const r=e==null?void 0:e.getItem(uc),a=r?JSON.parse(r):null;a&&(i=a.version===Fd?Math.max(0,ur.indexOf(a.level)):0)}catch(r){i=0,r instanceof SyntaxError||(s=!1)}this.current=i,this.usable=s}get level(){return ur[this.current]}get index(){return this.current}get isLast(){return this.current===ur.length-1}get next(){return this.usable?ur[this.current+1]??null:null}advance(){const e=this.next;if(!e)return!1;try{this.store.setItem(uc,JSON.stringify({version:Fd,level:e}))}catch{return!1}return this.current++,!0}}function Vw(n,e){return!n.paused&&!e&&n.phase!=="victory"&&n.phase!=="defeat"}const Gw=()=>typeof navigator>"u"?void 0:navigator.wakeLock;class Ww{constructor(e=Gw(),t=()=>document.visibilityState==="visible"){S(this,"lock");S(this,"pending",!1);S(this,"refused",!1);S(this,"retries",0);S(this,"want",!1);this.api=e,this.visible=t}sync(e){if(this.want=e,!e){const i=this.lock;this.lock=void 0,i==null||i.release().catch(()=>{});return}if(this.lock&&!this.lock.released||!this.api||this.pending||this.refused||!this.visible())return;this.pending=!0;const t=this.retries;this.api.request("screen").then(i=>{this.pending=!1,this.want?this.lock=i:i.release().catch(()=>{})},()=>{this.pending=!1,this.refused=t===this.retries})}retry(){this.refused=!1,this.retries++}}function $w(n,e,t){return t&&e>n?"rotate":"ok"}function Xw(n,e){return e==="rotate"&&n.phase==="wave"&&!n.paused}function qs(n){return n==="rotate"}async function qw(){const n=typeof screen<"u"?screen.orientation:void 0;if(!(n!=null&&n.lock))return!1;try{return await n.lock("landscape"),!0}catch{return!1}}function Yw(n){return n.touch&&!n.fullscreen&&!n.standalone&&n.supported}const Ff=n=>({hp:n.hp,maxHp:n.maxHp,novaCharges:n.novaCharges,phase:n.phase}),fc=.3,jw={"green-blob":"small",alien:"medium","mushroom-king":"medium",yeti:"heavy",orc:"heavy","orc-skull":"heavy",demon:"flying","blue-demon":"flying",herald:"medium"};function Kw(n,e,t){return e?"boss":t?"small":jw[n]}const Zw={small:"deathSmall",medium:"deathMedium",heavy:"deathHeavy",flying:"deathFlying",boss:"deathBoss"},Od={arcane:"shotArcane",fire:"shotFire",frost:"shotFrost",storm:"shotStorm"},Jw={"armor-block":"armor","shield-break":"shieldBreak",split:"split",dash:"dash",stun:"stun",shatter:"shatter",spread:"spread",discharge:"discharge","cast-impact":"meteorImpact",tempest:"tempest",nova:"nova",build:"build",upgrade:"build",points:"points",skill:"skill",capstone:"skill",respec:"respec",victory:"victory",defeat:"defeat",leak:"alertLeak"},Qw=n=>n.startsWith("alert")||n==="deathBoss";function eM(n,e,t){const i=[];let s=0;for(const a of n){const o=a.to;switch(a.type){case"shot":i.push({name:Od[a.element??"arcane"],at:o,element:a.element??"arcane"});break;case"hit":i.push({name:"hit",at:o,element:a.element??"arcane",source:a});break;case"kill":{const l=(a.target??0)>=br;i.push({name:Zw[Kw(a.kind??"green-blob",!!a.boss,l)],at:o,source:a}),(a.value??0)>0&&i.push({name:"coin",at:o,step:Math.min(s++,4),source:a});break}case"spawn":i.push({name:a.boss?"spawnBoss":"spawn",at:o});break;case"cast":i.push(a.skill==="meteor"?{name:"meteorWarning",at:o}:a.skill==="thunder"?{name:"tempest",at:o}:{name:Od[a.element??"arcane"],at:o,element:a.element??"arcane"});break;case"zone":i.push({name:a.element==="fire"?"zoneLava":"zoneIce",at:o});break;case"boss-warning":i.push({name:"alertBoss",at:Un(a.lane??0,0)});break;case"wave":t.phase==="wave"?i.push({name:Vc(t).newTraits.length?"alertNewAbility":"waveStart"}):t.phase==="ready"&&i.push({name:"waveClear"});break;default:{const l=Jw[a.type];l&&i.push({name:l,at:o})}}}const r=t.maxHp*fc;return e.hp>e.maxHp*fc&&t.hp<=r&&t.hp>0&&t.phase!=="defeat"&&i.push({name:"alertHpLow"}),e.novaCharges===0&&t.novaCharges>0&&t.phase==="wave"&&i.push({name:"alertNovaReady"}),i}const tM=n=>!!n.source,nM={deathSmall:4,deathMedium:4,deathHeavy:4,deathFlying:4,deathBoss:2,coin:5},iM=.045;function sM(n){const e=new Map;for(const t of n)e.set(t.name,[...e.get(t.name)??[],t]);return[...e].map(([t,i])=>{const s=Math.min(i.length,nM[t]??1),r=1/Math.sqrt(s);return{name:t,plays:i.slice(0,s).map((a,o)=>({cue:a,delay:o*iM,gain:r}))}})}const rM={shotArcane:.09,shotFire:.09,shotFrost:.09,shotStorm:.09,hit:.07,armor:.15,shieldBreak:.12,deathSmall:.06,deathMedium:.06,deathHeavy:.06,deathFlying:.06,coin:.08,split:.12,dash:.25,spawn:.4,stun:.15,shatter:.15,zoneLava:.3,zoneIce:.3,spread:.12,discharge:.12,meteorWarning:.3,meteorImpact:.3,tempest:.3,uiClick:.05,uiDisabled:.05},aM=1.5;class oM{constructor(){S(this,"last",new Map)}allow(e,t){const i=e.startsWith("alert")?aM:rM[e]??0,s=this.last.get(e);return i>0&&s!==void 0&&t-s<i?!1:(this.last.set(e,t),!0)}}const lM=24;class cM{constructor(e,t,i,s){S(this,"nodes",[]);this.input=e,this.alert=t,this.music=i,this.end=s,this.nodes.push(e)}add(e){return this.nodes.push(e),e}}const jn=n=>440*Math.pow(2,(n-69)/12);class hM{constructor(e){S(this,"master");S(this,"sfx");S(this,"duckGain");S(this,"music");S(this,"musicScore");S(this,"verb");S(this,"musicVerb");S(this,"noiseBuffer");S(this,"voices",[]);S(this,"timers",new Set);S(this,"offset",0);S(this,"scale",1);S(this,"peak",0);this.ctx=e;const t=e.createDynamicsCompressor();t.threshold.value=-14,t.knee.value=12,t.ratio.value=4,t.attack.value=.003,t.release.value=.25,t.connect(e.destination),this.master=this.gain(.9,t),this.sfx=this.gain(.8,this.master),this.duckGain=this.gain(1,this.master),this.music=this.gain(.5,this.duckGain),this.musicScore=this.gain(.8,this.music),this.verb=e.createConvolver(),this.verb.buffer=this.impulse(1.8,2.6),this.verb.connect(this.gain(.32,this.sfx)),this.musicVerb=e.createConvolver(),this.musicVerb.buffer=this.verb.buffer,this.musicVerb.connect(this.gain(.32,this.musicScore)),this.noiseBuffer=this.makeNoise(2)}get noise(){return this.noiseBuffer}get now(){return this.ctx.currentTime+.01+this.offset}gain(e,t){const i=this.ctx.createGain();return i.gain.value=e,t&&i.connect(t),i}makeNoise(e){const t=this.ctx.createBuffer(1,Math.floor(this.ctx.sampleRate*e),this.ctx.sampleRate),i=t.getChannelData(0);for(let s=0;s<i.length;s++)i[s]=Math.random()*2-1;return t}impulse(e,t){const i=Math.floor(this.ctx.sampleRate*e),s=this.ctx.createBuffer(2,i,this.ctx.sampleRate);for(let r=0;r<2;r++){const a=s.getChannelData(r);for(let o=0;o<i;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/i,t)}return s}liveEffectVoices(){const e=this.ctx.currentTime;return this.voices.filter(t=>!t.music&&t.end>e).length}voice({bus:e=this.sfx,pan:t=0,send:i=.15,dur:s=1,alert:r=!1,music:a=!1}={}){const o=this.ctx,l=o.createGain(),c=new cM(l,r,a,o.currentTime+this.offset+s);l.gain.value=this.scale;const h=c.add(o.createStereoPanner());if(h.pan.value=Math.max(-.6,Math.min(.6,t)),l.connect(h),h.connect(e),i>0){const u=c.add(this.gain(i));h.connect(u),u.connect(a?this.musicVerb:this.verb)}this.voices.push(c);const d=window.setTimeout(()=>{this.timers.delete(d),this.release(c)},(this.offset+s+.3)*1e3);return this.timers.add(d),a||(this.peak=Math.max(this.peak,this.liveEffectVoices())),c}release(e){var i;const t=this.voices.indexOf(e);if(!(t<0)){this.voices.splice(t,1);for(const s of e.nodes){try{(i=s.stop)==null||i.call(s)}catch{}try{s.disconnect()}catch{}}}}stopVoice(e){this.release(e)}makeRoom(){for(;this.liveEffectVoices()>=lM;){const e=this.ctx.currentTime,t=this.voices.find(i=>!i.alert&&!i.music&&i.end>e);if(!t)return!1;this.release(t)}return!0}env(e,t,i,s,r){e.cancelScheduledValues(t),e.setValueAtTime(1e-4,t),e.linearRampToValueAtTime(s,t+i),e.exponentialRampToValueAtTime(1e-4,t+Math.max(r,i+.01))}filter(e,t,i,s){if(!t)return e.input;const r=e.add(this.ctx.createBiquadFilter());return r.type=t.type,r.Q.value=t.q??.7,r.frequency.setValueAtTime(t.f,i),t.f2&&r.frequency.exponentialRampToValueAtTime(t.f2,i+(t.ft??s)),r.connect(e.input),r}tone(e,t,{type:i="sine",f:s,f2:r,dur:a=.2,gain:o=.1,a:l=.005,detune:c=0,filter:h,glide:d}){const u=e.add(this.ctx.createOscillator()),f=e.add(this.ctx.createGain());return u.type=i,u.detune.value=c,u.frequency.setValueAtTime(s,t),r&&u.frequency.exponentialRampToValueAtTime(r,t+(d??a)),this.env(f.gain,t,l,o,a),u.connect(f),f.connect(this.filter(e,h,t,a)),u.start(t),u.stop(t+a+.05),u}noiseBurst(e,t,{dur:i=.2,gain:s=.1,a:r=.003,filter:a}){const o=e.add(this.ctx.createBufferSource()),l=e.add(this.ctx.createGain());o.buffer=this.noiseBuffer,this.env(l.gain,t,r,s,i),o.connect(l),l.connect(this.filter(e,a,t,i)),o.start(t,Math.random()*1.2),o.stop(t+i+.05)}bell(e,t,i,{dur:s=1.2,gain:r=.08,bright:a=1}={}){for(const[o,l,c]of[[1,1,1],[2.76,.45*a,.6],[5.4,.22*a,.35],[8.93,.1*a,.2]])i*o<16e3&&this.tone(e,t,{f:i*o,dur:s*c,gain:r*l,a:.002})}pluck(e,t,i,{dur:s=1.6,gain:r=.05}={}){this.tone(e,t,{type:"triangle",f:i,dur:s,gain:r,a:.003}),this.tone(e,t,{f:i*2,dur:s*.5,gain:r*.35,a:.002})}drum(e,t,i){this.tone(e,t,{f:95,f2:50,dur:.32,gain:i,glide:.25}),this.noiseBurst(e,t,{dur:.12,gain:i*.35,filter:{type:"lowpass",f:320}})}duck(){const e=this.duckGain.gain,t=this.ctx.currentTime;e.cancelScheduledValues(t),e.setValueAtTime(e.value,t),e.linearRampToValueAtTime(.35,t+.08),e.setValueAtTime(.35,t+.5),e.linearRampToValueAtTime(1,t+1.7)}play(e,t,i=0,s=1){if(!(!this.makeRoom()&&!Qw(e.name))){e.name.startsWith("alert")&&this.duck(),this.offset=i,this.scale=s;try{dM[e.name](this,t,e)}finally{this.offset=0,this.scale=1}}}dispose(){this.timers.forEach(e=>clearTimeout(e)),this.timers.clear(),[...this.voices].forEach(e=>this.release(e))}}function Bd(n,e,t,i,s,r,a,o,l,c){const h=n.tone(e,t,{type:"sawtooth",f:i,dur:s,gain:r,filter:{type:"highpass",f:a}});for(let d=1;d<o;d++)h.frequency.setValueAtTime(l+Math.random()*c,t+d*.011)}const dM={shotArcane(n,e){const t=n.now,i=n.voice({pan:e,dur:.3,send:.12});n.tone(i,t,{f:880,f2:520,dur:.18,gain:.1}),n.tone(i,t,{type:"triangle",f:1320,f2:760,dur:.14,gain:.05}),n.noiseBurst(i,t,{dur:.03,gain:.05,filter:{type:"highpass",f:5e3}})},shotFire(n,e){const t=n.now,i=n.voice({pan:e,dur:.4,send:.1});n.noiseBurst(i,t,{dur:.3,gain:.32,a:.015,filter:{type:"bandpass",f:1100,f2:260,q:1.1}}),n.tone(i,t,{f:120,f2:55,dur:.2,gain:.22})},shotFrost(n,e){const t=n.now,i=n.voice({pan:e,dur:.6,send:.3});n.bell(i,t,1568,{dur:.45,gain:.06,bright:1.3}),n.noiseBurst(i,t,{dur:.16,gain:.05,filter:{type:"highpass",f:6500}})},shotStorm(n,e){const t=n.now,i=n.voice({pan:e,dur:.3,send:.1});Bd(n,i,t,1400,.13,.06,900,12,600,1800),n.noiseBurst(i,t,{dur:.05,gain:.14,filter:{type:"bandpass",f:3200,q:1.5}})},hit(n,e,t){const i=n.now,s=n.voice({pan:e,dur:.15,send:0});n.tone(s,i,{f:240,f2:90,dur:.07,gain:.07}),t.element==="fire"&&n.noiseBurst(s,i,{dur:.08,gain:.06,filter:{type:"lowpass",f:900}}),t.element==="frost"&&n.tone(s,i,{f:2400,dur:.05,gain:.02}),t.element==="storm"&&n.noiseBurst(s,i,{dur:.03,gain:.05,filter:{type:"highpass",f:3e3}})},armor(n,e){const t=n.now,i=n.voice({pan:e,dur:.3,send:.12});n.tone(i,t,{f:1230,dur:.2,gain:.06,a:.001}),n.tone(i,t,{f:1913,dur:.16,gain:.045,a:.001}),n.noiseBurst(i,t,{dur:.02,gain:.08,filter:{type:"highpass",f:5e3}})},shieldBreak(n,e){const t=n.now,i=n.voice({pan:e,dur:.8,send:.3});n.noiseBurst(i,t,{dur:.35,gain:.2,filter:{type:"highpass",f:3e3}}),[2637,2093,1568].forEach((s,r)=>n.bell(i,t+r*.045,s,{dur:.4,gain:.045}))},deathSmall(n,e){const t=n.now,i=n.voice({pan:e,dur:.2,send:.05});n.tone(i,t,{f:520,f2:1400,dur:.08,gain:.11}),n.noiseBurst(i,t,{dur:.05,gain:.06,filter:{type:"bandpass",f:2200,q:2}})},deathMedium(n,e){const t=n.now,i=n.voice({pan:e,dur:.35,send:.08});n.noiseBurst(i,t,{dur:.2,gain:.2,filter:{type:"bandpass",f:1300,f2:380,q:1.4}}),n.tone(i,t,{type:"square",f:300,f2:80,dur:.16,gain:.045,filter:{type:"lowpass",f:1500}})},deathHeavy(n,e){const t=n.now,i=n.voice({pan:e,dur:.5,send:.12});n.tone(i,t,{f:95,f2:38,dur:.38,gain:.38}),n.noiseBurst(i,t,{dur:.3,gain:.22,filter:{type:"lowpass",f:420}}),n.noiseBurst(i,t+.02,{dur:.12,gain:.08,filter:{type:"bandpass",f:900,q:1}})},deathFlying(n,e){const t=n.now,i=n.voice({pan:e,dur:.6,send:.15});n.noiseBurst(i,t,{dur:.45,gain:.14,a:.02,filter:{type:"bandpass",f:1600,f2:280,q:1.6}}),n.tone(i,t,{f:760,f2:190,dur:.32,gain:.045})},deathBoss(n,e){const t=n.now,i=n.voice({pan:e,dur:1.8,send:.45,alert:!0});n.tone(i,t,{f:62,f2:28,dur:1.3,gain:.5}),n.noiseBurst(i,t,{dur:1.1,gain:.34,filter:{type:"lowpass",f:900,f2:90}}),n.noiseBurst(i,t,{dur:.2,gain:.18,filter:{type:"bandpass",f:1800,q:.8}}),[50,57,62].forEach(s=>n.tone(i,t+.05,{type:"sawtooth",f:jn(s),dur:1.4,gain:.025,a:.02,filter:{type:"lowpass",f:1400,f2:300}}))},coin(n,e,t){const i=n.now,s=n.voice({pan:e,dur:.3,send:.15}),r=Math.pow(2,(t.step??0)*2/12);n.tone(s,i,{f:1975*r,dur:.09,gain:.05,a:.001}),n.tone(s,i+.05,{f:2637*r,dur:.16,gain:.05,a:.001})},split(n,e){const t=n.now,i=n.voice({pan:e,dur:.3,send:.08});n.tone(i,t,{f:180,f2:540,dur:.16,gain:.12,filter:{type:"lowpass",f:1200}}),n.tone(i,t+.07,{f:260,f2:620,dur:.12,gain:.07,filter:{type:"lowpass",f:1400}})},dash(n,e){const t=n.now,i=n.voice({pan:e,dur:.3,send:.05});n.noiseBurst(i,t,{dur:.2,gain:.1,a:.03,filter:{type:"bandpass",f:600,f2:2600,q:2}})},spawn(n,e){const t=n.now,i=n.voice({pan:e,dur:.8,send:.3});n.tone(i,t,{f:150,f2:230,dur:.55,gain:.05,a:.2}),n.noiseBurst(i,t,{dur:.5,gain:.04,a:.2,filter:{type:"bandpass",f:500,q:2}})},spawnBoss(n,e){const t=n.now,i=n.voice({pan:e,dur:1.4,send:.4});[110,164.8].forEach(s=>n.tone(i,t,{type:"sawtooth",f:s,dur:1.1,gain:.07,a:.15,filter:{type:"lowpass",f:450,f2:900,q:2}}))},stun(n,e){const t=n.now,i=n.voice({pan:e,dur:.4,send:.2});for(let s=0;s<6;s++)n.noiseBurst(i,t+s*.03+Math.random()*.02,{dur:.025,gain:.07,filter:{type:"highpass",f:3800}});n.tone(i,t,{f:3136,dur:.25,gain:.02})},shatter(n,e){const t=n.now,i=n.voice({pan:e,dur:.8,send:.35});n.noiseBurst(i,t,{dur:.3,gain:.2,filter:{type:"highpass",f:2500}}),[3136,2349,1760,2637].forEach((s,r)=>n.bell(i,t+r*.03,s,{dur:.45,gain:.035}))},zoneLava(n,e){const t=n.now,i=n.voice({pan:e,dur:.9,send:.15});n.noiseBurst(i,t,{dur:.6,gain:.1,a:.05,filter:{type:"lowpass",f:380}}),[0,.14,.3,.41].forEach(s=>n.tone(i,t+s,{f:120+Math.random()*60,f2:300+Math.random()*120,dur:.07,gain:.08,filter:{type:"lowpass",f:900}}))},zoneIce(n,e){const t=n.now,i=n.voice({pan:e,dur:1,send:.4});[1319,1568,1976,2637].forEach((s,r)=>n.bell(i,t+r*.06,s,{dur:.6,gain:.03})),n.noiseBurst(i,t,{dur:.5,gain:.04,a:.1,filter:{type:"highpass",f:5e3}})},spread(n,e){const t=n.now,i=n.voice({pan:e,dur:.25,send:.05});n.noiseBurst(i,t,{dur:.12,gain:.1,filter:{type:"bandpass",f:1500,f2:700,q:1}})},discharge(n,e){const t=n.now,i=n.voice({pan:e,dur:.15,send:.05});Bd(n,i,t,2e3,.06,.04,1200,6,900,2e3)},meteorWarning(n,e){const t=n.now,i=n.voice({pan:e,dur:.9,send:.2});n.tone(i,t,{f:600,f2:1900,dur:.75,gain:.045,a:.5}),n.noiseBurst(i,t,{dur:.7,gain:.03,a:.5,filter:{type:"highpass",f:4e3}})},meteorImpact(n,e){const t=n.now,i=n.voice({pan:e,dur:1,send:.35});n.tone(i,t,{f:85,f2:34,dur:.6,gain:.45}),n.noiseBurst(i,t,{dur:.6,gain:.36,filter:{type:"lowpass",f:1300,f2:180}})},tempest(n,e){const t=n.now,i=n.voice({pan:e,dur:2,send:.5});n.noiseBurst(i,t,{dur:.09,gain:.38,a:.001,filter:{type:"highpass",f:1400}}),n.noiseBurst(i,t+.04,{dur:1.7,gain:.28,a:.05,filter:{type:"lowpass",f:320,f2:120}})},nova(n){const e=n.now,t=n.voice({dur:1.8,send:.5});n.tone(t,e,{f:72,f2:34,dur:.9,gain:.45}),n.tone(t,e,{f:1100,f2:160,dur:1.1,gain:.1}),n.noiseBurst(t,e,{dur:1.2,gain:.05,a:.02,filter:{type:"highpass",f:6e3}}),[659,988,1319].forEach(i=>n.tone(t,e+.05,{f:i,dur:1.4,gain:.028,a:.05}))},build(n){const e=n.now,t=n.voice({dur:1.4,send:.35});[392,494,587,784].forEach((i,s)=>n.bell(t,e+s*.07,i,{dur:.9,gain:.07}))},points(n){const e=n.now,t=n.voice({dur:.5,send:.4});for(let i=0;i<4;i++)n.tone(t,e+i*.035,{f:2e3+Math.random()*2e3,dur:.12,gain:.025,a:.001})},skill(n){const e=n.now,t=n.voice({dur:1,send:.4});n.bell(t,e,659,{dur:.8,gain:.07}),n.bell(t,e+.09,988,{dur:.8,gain:.06})},unlockCue(n){const e=n.now,t=n.voice({dur:1,send:.45});n.tone(t,e,{f:660,f2:990,dur:.3,gain:.1}),n.bell(t,e+.08,990,{dur:.8,gain:.07})},capstone(n){const e=n.now,t=n.voice({dur:2,send:.5});[330,440,554,660,880].forEach((i,s)=>n.bell(t,e+s*.09,i,{dur:1.2,gain:.08}))},respec(n){const e=n.now,t=n.voice({dur:.6,send:.3});n.noiseBurst(t,e,{dur:.42,gain:.1,a:.3,filter:{type:"bandpass",f:2400,f2:400,q:1.5}})},waveStart(n){const e=n.now,t=n.voice({dur:2.2,send:.35});n.drum(t,e,.5),n.drum(t,e+.28,.42),[146.8,220].forEach(i=>n.tone(t,e+.35,{type:"sawtooth",f:i,dur:1.3,gain:.05,a:.4,filter:{type:"lowpass",f:600,f2:1500,q:1.5}}))},waveClear(n){const e=n.now,t=n.voice({dur:2.2,send:.5});[74,81,76,86].forEach((i,s)=>n.bell(t,e+s*.11,jn(i),{dur:1.6,gain:.055}))},victory(n){const e=n.now,t=n.voice({dur:3,send:.45,alert:!0});[62,66,69,74].forEach((i,s)=>n.bell(t,e+s*.16,jn(i+12),{dur:1.2,gain:.07})),[62,66,69].forEach(i=>n.tone(t,e+.64,{type:"sawtooth",f:jn(i),dur:2,gain:.035,a:.1,filter:{type:"lowpass",f:1800}}))},defeat(n){const e=n.now,t=n.voice({dur:3.2,send:.5,alert:!0});[69,65,62,57].forEach((i,s)=>n.tone(t,e+s*.35,{type:"sawtooth",f:jn(i),dur:1.6,gain:.045,a:.05,filter:{type:"lowpass",f:1100,f2:300}})),n.tone(t,e+1.4,{f:73.4,f2:55,dur:1.6,gain:.3})},uiClick(n){const e=n.now,t=n.voice({dur:.08,send:0});n.tone(t,e,{f:1250,dur:.03,gain:.05,a:.001}),n.noiseBurst(t,e,{dur:.012,gain:.03,filter:{type:"highpass",f:4e3}})},uiDisabled(n){const e=n.now,t=n.voice({dur:.1,send:0});n.tone(t,e,{f:190,f2:150,dur:.06,gain:.07,filter:{type:"lowpass",f:700}})},alertBoss(n,e){const t=n.now,i=n.voice({pan:e,dur:2.2,send:.45,alert:!0});[0,.6].forEach(s=>[73.4,110].forEach(r=>n.tone(i,t+s,{type:"sawtooth",f:r,dur:.55,gain:.1,a:.06,filter:{type:"lowpass",f:520,q:3}}))),[1175,1568,2349].forEach((s,r)=>n.bell(i,t+1.15+r*.08,s,{dur:.7,gain:.04}))},alertHpLow(n){const e=n.now,t=n.voice({dur:1.2,send:.2,alert:!0});[0,.2].forEach(i=>n.tone(t,e+i,{f:62,f2:44,dur:.18,gain:.55})),[.45,.62].forEach(i=>n.tone(t,e+i,{type:"square",f:880,dur:.1,gain:.035,filter:{type:"lowpass",f:2200}}))},alertLeak(n,e){const t=n.now,i=n.voice({pan:e,dur:.9,send:.25,alert:!0});n.tone(i,t,{f:64,f2:30,dur:.5,gain:.55}),n.noiseBurst(i,t,{dur:.16,gain:.22,filter:{type:"bandpass",f:2e3,q:1}}),n.noiseBurst(i,t+.03,{dur:.35,gain:.12,filter:{type:"lowpass",f:500}})},alertNewAbility(n){const e=n.now,t=n.voice({dur:2.2,send:.5,alert:!0});n.drum(t,e,.45),n.drum(t,e+.26,.38),[587.3,622.3,880].forEach((i,s)=>{const r=n.tone(t,e+.55+s*.22,{type:"triangle",f:i,dur:.7,gain:.07,a:.02}),a=t.add(n.ctx.createOscillator()),o=t.add(n.gain(6));a.frequency.value=6,a.connect(o),o.connect(r.frequency),a.start(e),a.stop(e+2)})},alertNovaReady(n){const e=n.now,t=n.voice({dur:1.2,send:.45,alert:!0});n.bell(t,e,1319,{dur:.9,gain:.08,bright:1.2}),n.bell(t,e+.12,1760,{dur:1,gain:.08,bright:1.2})}},uM=72,Rn=60/uM,zd=[[50,53,57,60,64],[46,50,53,57,62],[53,57,60,67,69],[48,50,55,62,64]],gl=[74,77,79,81,84,86],Hd=[38,38,41,38,33,33,36,33];function fM(n){return n.phase==="victory"?"victory":n.phase==="defeat"?"defeat":n.phase!=="wave"?"calm":n.enemies.some(e=>e.boss&&e.hp>0)?"boss":"wave"}function pM(n,e,t){const i={},s=()=>gl[Math.min(gl.length-1,Math.floor(t()*gl.length))];return n%8===0?(i.chord=zd[n/8%zd.length],i.harp=s(),i.harpOffbeat=!0):t()<.3&&(i.harpOffbeat=t()>=.5,i.harp=s()),(e==="wave"||e==="boss")&&(n%4===0?i.drum=.2:n%4===2&&(i.drum=.11),i.shaker=!0),e==="boss"&&(i.bass=[0,1].map(r=>Hd[(n*2+r)%Hd.length])),i}class mM{constructor(e){S(this,"on",!1);S(this,"layer","calm");S(this,"beat",0);S(this,"next",0);S(this,"timer",0);S(this,"bus");S(this,"layers");this.engine=e}get ctx(){return this.engine.ctx}start(){if(this.on)return;this.on=!0;const e=this.ctx.currentTime;this.bus=this.engine.gain(0,this.engine.musicScore),this.bus.gain.setValueAtTime(0,e),this.bus.gain.linearRampToValueAtTime(1,e+3),this.layers={pad:this.engine.gain(1,this.bus),wave:this.engine.gain(0,this.bus),boss:this.engine.gain(0,this.bus)},this.applyLayer(!0),this.beat=0,this.next=e+.1,this.timer=window.setInterval(()=>this.schedule(),100),this.schedule()}stop(e=1.5){if(!this.on||!this.bus)return;this.on=!1,clearInterval(this.timer);const t=this.bus,i=this.ctx.currentTime;t.gain.cancelScheduledValues(i),t.gain.setValueAtTime(t.gain.value,i),t.gain.linearRampToValueAtTime(0,i+e),window.setTimeout(()=>t.disconnect(),(e+.3)*1e3),this.bus=void 0,this.layers=void 0}get playing(){return this.on}setMixGain(e){this.engine.musicScore.gain.setTargetAtTime(e,this.ctx.currentTime,.3)}setLayer(e){if(e===this.layer)return;const t=this.layer;if(this.layer=e,e==="defeat"){this.stop();return}if(t==="defeat"&&!this.on){this.start();return}e==="victory"&&this.victoryChord(),this.applyLayer(!1)}applyLayer(e){if(!this.layers)return;const t=this.ctx.currentTime,i=e?.01:2,s={wave:this.layer==="wave"||this.layer==="boss"?1:0,boss:this.layer==="boss"?1:0};for(const r of["wave","boss"]){const a=this.layers[r].gain;a.cancelScheduledValues(t),a.setValueAtTime(a.value,t),a.linearRampToValueAtTime(s[r],t+i)}}schedule(){const e=this.ctx.currentTime;if(this.next<e-Rn){const t=Math.ceil((e-this.next)/Rn);this.beat+=t,this.next+=t*Rn}for(;this.next<e+.25;)this.playBeat(this.beat,this.next),this.next+=Rn,this.beat++}voice(e,t,i){return this.engine.voice({bus:e,dur:t,send:i,music:!0})}playBeat(e,t){if(!this.layers)return;const i=this.engine,s=pM(e,this.layer,Math.random);if(s.chord){const r=8*Rn+2.5,a=this.voice(this.layers.pad,r+.5,.5),o=a.add(this.ctx.createBiquadFilter());o.type="lowpass",o.Q.value=.6,o.frequency.setValueAtTime(this.layer==="calm"?750:1100,t),o.connect(a.input);for(const l of s.chord)for(const c of[-6,6]){const h=a.add(this.ctx.createOscillator()),d=a.add(this.ctx.createGain());h.type="sawtooth",h.frequency.value=jn(l),h.detune.value=c,d.gain.setValueAtTime(1e-4,t),d.gain.linearRampToValueAtTime(.014,t+2.5),d.gain.setValueAtTime(.014,t+r-3),d.gain.linearRampToValueAtTime(1e-4,t+r),h.connect(d),d.connect(o),h.start(t),h.stop(t+r+.05)}}if(s.harp!==void 0){const r=this.voice(this.layers.pad,2,.6);i.pluck(r,t+(s.harpOffbeat?Rn/2:0),jn(s.harp),{gain:.045})}if(s.drum||s.shaker){const r=this.voice(this.layers.wave,1,.15);s.drum&&i.drum(r,t,s.drum),s.shaker&&i.noiseBurst(r,t+Rn/2,{dur:.05,gain:.018,filter:{type:"highpass",f:6500}})}if(s.bass){const r=this.voice(this.layers.boss,Rn+.3,.05);s.bass.forEach((a,o)=>i.tone(r,t+o*Rn/2,{type:"sawtooth",f:jn(a),dur:Rn/2-.03,gain:.08,a:.01,filter:{type:"lowpass",f:300,q:4}}))}}victoryChord(){if(!this.layers)return;const e=this.ctx.currentTime+.05,t=this.voice(this.layers.pad,4,.6);[62,66,69,74].forEach(i=>this.engine.tone(t,e,{type:"triangle",f:jn(i),dur:3.5,gain:.03,a:.4}))}}const Of="aetherkeep.audio.v1",vr=Object.freeze({enabled:!0,sfx:80,music:50}),Vd=(n,e)=>typeof n=="number"&&Number.isFinite(n)?Math.min(100,Math.max(0,Math.round(n/10)*10)):e;function gM(n){let e;try{e=n===null?null:JSON.parse(n)}catch{e=null}if(!e||typeof e!="object"||Array.isArray(e))return{...vr};const t=e;return{enabled:typeof t.enabled=="boolean"?t.enabled:vr.enabled,sfx:Vd(t.sfx,vr.sfx),music:Vd(t.music,vr.music)}}const Bf=()=>{try{return globalThis.localStorage}catch{return}};function vM(n=Bf()){try{return gM((n==null?void 0:n.getItem(Of))??null)}catch{return{...vr}}}function Gd(n,e=Bf()){try{e==null||e.setItem(Of,JSON.stringify(n))}catch{}}const pc="golden-island",_M={"golden-island":{calm:{wind:.9,waterfall:1,air:1.15,music:.8,oneShot:1,intervalScale:1},wave:{wind:.65,waterfall:.65,air:.8,music:.9,oneShot:.45,intervalScale:1.8},boss:{wind:.5,waterfall:.5,air:.7,music:1,oneShot:.3,intervalScale:2.5},victory:{wind:.8,waterfall:1,air:1.2,music:.9,oneShot:.7,intervalScale:1.3},defeat:{wind:.25,waterfall:.2,air:.3,music:0,oneShot:0,intervalScale:3}},"moonlit-island":{calm:{wind:1,waterfall:1,air:1,music:.8,oneShot:1,intervalScale:1},wave:{wind:.7,waterfall:.65,air:.7,music:.9,oneShot:.45,intervalScale:1.8},boss:{wind:.55,waterfall:.5,air:.6,music:1,oneShot:.3,intervalScale:2.5},victory:{wind:.85,waterfall:1,air:1,music:.9,oneShot:.7,intervalScale:1.3},defeat:{wind:.25,waterfall:.2,air:.3,music:0,oneShot:0,intervalScale:3}}};function Vs(n){return n==="moonlit-island"?n:pc}const zf=[{kind:"gust",interval:[11,23],gain:[.045,.075],pan:[-.55,.55],gentle:.4,variants:[{id:"low-swell",duration:4.8,frequency:240,endFrequency:500,pulses:1},{id:"high-drift",duration:5.6,frequency:620,endFrequency:340,pulses:1},{id:"long-breath",duration:6.4,frequency:380,endFrequency:760,pulses:1}]},{kind:"nightCall",scenes:["moonlit-island"],interval:[15,30],gain:[.014,.026],pan:[-.6,.6],gentle:1,variants:[{id:"falling-pair",duration:2.3,frequency:880,endFrequency:660,pulses:2},{id:"single-distant",duration:2,frequency:740,endFrequency:830,pulses:1},{id:"three-notes",duration:3,frequency:1040,endFrequency:780,pulses:3}]},{kind:"stoneFall",interval:[20,38],gain:[.018,.033],pan:[-.6,.6],gentle:.8,variants:[{id:"loose-grit",duration:1.4,frequency:1700,endFrequency:500,pulses:3},{id:"pebble-pair",duration:1.8,frequency:950,endFrequency:300,pulses:2},{id:"earth-trickle",duration:2.1,frequency:650,endFrequency:180,pulses:4}]},{kind:"towerHum",interval:[18,34],gain:[.012,.022],pan:[-.35,.35],gentle:1,variants:[{id:"glass-fifth",duration:3.5,frequency:440,endFrequency:660,pulses:2},{id:"quiet-scan",duration:4.2,frequency:587.33,endFrequency:880,pulses:2},{id:"clear-octave",duration:3.8,frequency:523.25,endFrequency:1046.5,pulses:2}]},{kind:"riftEcho",interval:[95,160],gain:[.018,.03],pan:[-.4,.4],gentle:.25,variants:[{id:"hollow-exhale",duration:6,frequency:73.4,endFrequency:55,pulses:1},{id:"deep-resonance",duration:7,frequency:55,endFrequency:46.25,pulses:1},{id:"organic-answer",duration:6.5,frequency:82.4,endFrequency:61.7,pulses:2}]},{kind:"cricket",scenes:["moonlit-island"],interval:[5,11],gain:[.006,.012],pan:[-.6,.6],gentle:1,variants:[{id:"two-chirps",duration:.9,frequency:4300,endFrequency:4420,pulses:2},{id:"three-chirps",duration:1,frequency:4460,endFrequency:4320,pulses:3},{id:"four-chirps",duration:1.1,frequency:4180,endFrequency:4380,pulses:4}]},{kind:"dayBird",scenes:["golden-island"],interval:[13,25],gain:[.008,.014],pan:[-.55,.55],gentle:1,variants:[{id:"soft-rise",duration:1.8,frequency:1020,endFrequency:1380,pulses:1},{id:"distant-pair",duration:2.3,frequency:1260,endFrequency:980,pulses:2},{id:"warm-answer",duration:2.6,frequency:1120,endFrequency:1440,pulses:3}]},{kind:"dayInsect",scenes:["golden-island"],interval:[9,18],gain:[.004,.008],pan:[-.5,.5],gentle:1,variants:[{id:"low-buzz",duration:3.2,frequency:1200,endFrequency:1e3,pulses:1},{id:"distant-cicada",duration:4.2,frequency:1550,endFrequency:1150,pulses:2},{id:"long-haze",duration:5.2,frequency:1750,endFrequency:1250,pulses:3}]}];function Ga(n){return{..._M[Vs(n.scene)][n.state],master:n.enabled?Math.max(0,Math.min(100,n.music))/100*(n.dimmed?.5:1):0}}const xM=2;class bM{constructor({clock:e=()=>performance.now()/1e3,random:t=Math.random,definitions:i=zf,maxVoices:s=xM}={}){S(this,"clock");S(this,"random");S(this,"maxVoices");S(this,"allSlots");S(this,"slots");S(this,"ends",[]);S(this,"input");S(this,"allowed",!1);S(this,"mix");S(this,"played",0);S(this,"peak",0);S(this,"dropped",0);this.clock=e,this.random=t,this.maxVoices=s,this.allSlots=i.map(r=>({definition:r,due:1/0,last:-1,counts:r.variants.map(()=>0)})),this.slots=this.slotsFor(pc)}slotsFor(e){return this.allSlots.filter(t=>!t.definition.scenes||t.definition.scenes.includes(e))}update(e){var l,c;const t=Vs(e.scene),i=Ga(e),s=i.master>0&&i.oneShot>0&&!e.hidden&&!e.dimmed,r=t!==((l=this.input)==null?void 0:l.scene),a=s!==this.allowed||r,o=((c=this.mix)==null?void 0:c.intervalScale)??i.intervalScale;if(this.input={...e,scene:t},this.mix=i,this.allowed=s,r&&(this.slots=this.slotsFor(t)),(!s||r)&&(this.ends.length=0),a)this.resetDeadlines(this.clock());else if(s&&i.intervalScale!==o){const h=this.clock();for(const d of this.slots)d.due>h&&(d.due=h+(d.due-h)*i.intervalScale/o)}}between([e,t]){return e+Math.max(0,Math.min(.999999999999,this.random()))*(t-e)}resetDeadlines(e){for(const t of this.slots)t.due=this.allowed?e+this.between(t.definition.interval)*this.mix.intervalScale:1/0}tick(){const e=[];if(!this.allowed||!this.mix||!this.input)return e;const t=this.clock();for(let i=this.ends.length-1;i>=0;i--)this.ends[i]<=t&&this.ends.splice(i,1);for(const i of this.slots){if(i.due>t)continue;const s=i.definition,r=t-i.due>1;if(i.due=t+this.between(s.interval)*this.mix.intervalScale,r)continue;if(this.ends.length>=this.maxVoices){this.dropped++;continue}const a=s.variants.length-(i.last<0?0:1);let o=Math.floor(this.between([0,a]));i.last>=0&&o>=i.last&&o++;const l=s.variants[o].duration;e.push({kind:s.kind,variant:o,duration:l,pan:this.between(s.pan),gain:this.between(s.gain)*this.mix.oneShot*(this.input.reducedMotion?s.gentle:1),gentle:this.input.reducedMotion}),this.ends.push(t+l),i.last=o,i.counts[o]++,this.played++,this.peak=Math.max(this.peak,this.ends.length)}return e}stats(){var s;const e=this.clock(),t={},i={};for(const r of this.slots)t[r.definition.kind]=r.due,i[r.definition.kind]=[...r.counts];return{scene:((s=this.input)==null?void 0:s.scene)??pc,next:t,counts:i,played:this.played,active:this.ends.filter(r=>r>e).length,peak:this.peak,dropped:this.dropped}}}const Wd=8;class yM{constructor(e){S(this,"scheduler",new bM);S(this,"nodes",[]);S(this,"loop");S(this,"wind");S(this,"waterfall");S(this,"air");S(this,"live",[]);S(this,"input");S(this,"timer");this.engine=e;const t=e,i=t.ctx;this.loop=this.makeLoop(),this.wind=this.add(t.gain(0,t.music)),this.waterfall=this.add(t.gain(0,t.music)),this.air=this.add(t.gain(0,t.music));const s=this.band(this.wind,220,.5,.065,-.15,0);this.modulate(s.filter.frequency,.029,85),this.modulate(s.gain.gain,.043,.018);const r=this.band(this.wind,900,.65,.018,.2,2.3);this.modulate(r.filter.frequency,.019,320),this.modulate(r.pan.pan,.017,.3);const a=this.band(this.waterfall,430,.45,.055,-.1,4.7),o=this.add(i.createBiquadFilter());o.type="lowpass",o.frequency.value=1250,a.filter.disconnect(),a.filter.connect(o),o.connect(a.gain),this.modulate(a.pan.pan,.013,.35);const l=this.band(this.air,5800,.55,.0025,0,6.1);this.modulate(l.gain.gain,.021,.001),this.timer=window.setInterval(()=>this.tick(),250)}add(e){return this.nodes.push(e),e}makeLoop(){const e=this.engine.ctx,t=Math.round(e.sampleRate*Wd),i=e.createBuffer(2,t,e.sampleRate),s=Math.round(e.sampleRate*.5);for(let r=0;r<2;r++){const a=new Float32Array(t+s),o=i.getChannelData(r);for(let l=0;l<a.length;l++)a[l]=Math.random()*2-1;for(let l=0;l<t;l++){const c=l/s*Math.PI/2;o[l]=l<s?a[t+l]*Math.cos(c)+a[l]*Math.sin(c):a[l]}}return i}band(e,t,i,s,r,a){const o=this.engine.ctx,l=this.add(o.createBufferSource());l.buffer=this.loop,l.loop=!0;const c=this.add(o.createBiquadFilter());c.type="bandpass",c.frequency.value=t,c.Q.value=i;const h=this.add(this.engine.gain(s)),d=this.add(o.createStereoPanner());return d.pan.value=r,l.connect(c),c.connect(h),h.connect(d),d.connect(e),l.start(0,a),{filter:c,gain:h,pan:d}}modulate(e,t,i){const s=this.add(this.engine.ctx.createOscillator()),r=this.add(this.engine.gain(i));s.frequency.value=t,s.connect(r),r.connect(e),s.start()}update(e){const t=!!this.input&&Vs(e.scene)!==Vs(this.input.scene);this.input=e,this.scheduler.update(e);const i=Ga(e),s=this.engine.ctx.currentTime;this.wind.gain.setTargetAtTime(i.wind,s,.8),this.waterfall.gain.setTargetAtTime(i.waterfall,s,.8),this.air.gain.setTargetAtTime(i.air,s,.8),i.master===0||i.oneShot===0||e.hidden||e.dimmed?this.stopOneShots():t&&this.fadeOneShots(s)}fadeOneShots(e){for(const t of this.live)t.voice.input.gain.cancelAndHoldAtTime(e),t.voice.input.gain.linearRampToValueAtTime(0,e+.2),t.end=Math.min(t.end,e+.2)}stopOneShots(){for(const{voice:e}of this.live)this.engine.stopVoice(e);this.live.length=0}tick(){if(this.engine.ctx.state!=="running")return;const e=this.engine.ctx.currentTime;for(let t=this.live.length-1;t>=0;t--)this.live[t].end<=e&&(this.engine.stopVoice(this.live[t].voice),this.live.splice(t,1));for(const t of this.scheduler.tick())this.play(t)}noise(e,t,i,s,r,a,o){const l=this.engine,c=l.ctx,h=e.add(c.createBufferSource()),d=e.add(c.createGain());h.buffer=this.loop,h.loop=!0;const u=e.add(c.createBiquadFilter());u.type="bandpass",u.Q.value=.7,u.frequency.setValueAtTime(r,t),u.frequency.exponentialRampToValueAtTime(a,t+i),l.env(d.gain,t,o,s,i),h.connect(u),u.connect(d),d.connect(e.input),h.start(t),h.stop(t+i+.03)}play(e){const t=this.engine,i=zf.find(u=>u.kind===e.kind),s=i.variants[e.variant],r=t.now,a=e.duration-.4,o=t.voice({bus:t.music,pan:e.pan,dur:e.duration-.3,send:0,music:!0}),l=e.gain,c=s.frequency,h=s.endFrequency,d=s.pulses;if(e.kind==="gust")this.noise(o,r,a,l,c,h,e.gentle?1.6:1.1),this.noise(o,r,a,l*.25,c*2.4,h*1.5,1.5);else if(e.kind==="nightCall")for(let u=0;u<d;u++)t.tone(o,r+u*.48,{f:c*(1-u*.04),f2:h,dur:.65,gain:l,a:.16});else if(e.kind==="dayBird")for(let u=0;u<d;u++)t.tone(o,r+u*.42,{f:c*(1+u*.025),f2:h,dur:.24,gain:l/(1+u*.25),a:.065,filter:{type:"lowpass",f:1900}});else if(e.kind==="dayInsect")this.noise(o,r,a,l*.55,c,h,.8),t.tone(o,r,{f:c*.18,f2:h*.18,dur:a,gain:l*.18,a:.7}),d>1&&this.noise(o,r+.35,a-.35,l*.2,c*1.3,h,1);else if(e.kind==="stoneFall")for(let u=0;u<d;u++)this.noise(o,r+u*.16,.25,l/(1+u*.25),c,h,.025);else if(e.kind==="towerHum")t.tone(o,r,{f:c,dur:a,gain:l,a:.65}),t.tone(o,r+.3,{f:h,dur:a-.3,gain:l*.45,a:.5}),t.tone(o,r+.6,{f:c*2,dur:a-.6,gain:l*.12,a:.7});else if(e.kind==="riftEcho")t.tone(o,r,{f:c,f2:h,dur:a,gain:l,a:e.gentle?2.2:1.6}),t.tone(o,r+.15,{f:c*1.47,f2:h*1.5,dur:a-.15,gain:l*.35,a:1.8}),this.noise(o,r,a,l*.45,170,95,1.8),d>1&&t.tone(o,r+1.5,{f:c*.75,f2:h*.8,dur:a-1.5,gain:l*.4,a:1.5});else for(let u=0;u<d;u++)t.tone(o,r+u*.06,{f:c,f2:h,dur:.035,gain:l,a:.004});this.live.push({voice:o,end:t.ctx.currentTime+e.duration})}stats(){var i,s,r,a;const e=this.input?Ga(this.input):void 0,t=!!e&&e.master>0&&!((i=this.input)!=null&&i.hidden);return{preset:((s=this.input)==null?void 0:s.state)??"calm",mix:e,layers:{ambience:t,music:t&&e.music>0,oneShots:t&&!((r=this.input)!=null&&r.dimmed)&&e.oneShot>0},loop:{seconds:Wd,channels:2,bytes:this.loop.length*2*4,nodes:this.nodes.length},reducedMotion:((a=this.input)==null?void 0:a.reducedMotion)??!1,...this.scheduler.stats(),active:this.live.filter(o=>o.end>this.engine.ctx.currentTime).length}}dispose(){var e;clearInterval(this.timer),this.stopOneShots();for(const t of this.nodes){try{(e=t.stop)==null||e.call(t)}catch{}t.disconnect()}}}class wM{constructor(){S(this,"ctx");S(this,"engine");S(this,"music");S(this,"soundscape");S(this,"reduced",matchMedia("(prefers-reduced-motion: reduce)"));S(this,"limiter",new oM);S(this,"current",vM());S(this,"layer","calm");S(this,"scene",Vs(new URLSearchParams(window.location.search).get("soundscape")));S(this,"dimmed",!1);S(this,"counts",{played:0,refused:0});S(this,"pending",[]);document.addEventListener("visibilitychange",()=>this.syncRunning()),this.reduced.addEventListener("change",()=>this.applyVolumes()),window.addEventListener("pagehide",e=>{var t;e.persisted||(t=this.soundscape)==null||t.dispose()})}get settings(){return{...this.current}}unlock(){if(this.current.enabled){if(!this.ctx){try{this.ctx=new AudioContext}catch{return}this.engine=new hM(this.ctx),this.music=new mM(this.engine),this.soundscape=new yM(this.engine),this.ctx.addEventListener("statechange",()=>this.applyVolumes()),this.applyVolumes(!0),this.music.start(),this.music.setLayer(this.layer)}this.syncRunning()}}toggle(){return this.current.enabled=!this.current.enabled,Gd(this.current),this.current.enabled?this.unlock():this.syncRunning(),this.current.enabled}setVolume(e,t){this.current[e]=Math.min(100,Math.max(0,Math.round(t/10)*10)),Gd(this.current),this.applyVolumes()}setScene(e){const t=Vs(e);t!==this.scene&&(this.scene=t,this.applyVolumes())}setDimmed(e){e!==this.dimmed&&(this.dimmed=e,this.applyVolumes())}follow(e){var i;const t=fM(e);t!==this.layer&&(this.layer=t,(i=this.music)==null||i.setLayer(t),this.applyVolumes())}handle(e,t,i,s,r){if(this.running)for(const a of eM(e,t,i)){const o=()=>this.queue(a,a.at?s(a.at):0);r&&tM(a)?r(a.source,o):o()}}resetRun(){this.pending=[]}queue(e,t){this.pending.length||queueMicrotask(()=>this.flush()),this.pending.push({cue:e,pan:t})}flush(){const e=this.pending,t=new Map(e.map(i=>[i.cue,i.pan]));if(this.pending=[],!(!this.running||!this.engine))for(const i of sM(e.map(s=>s.cue))){if(!this.limiter.allow(i.name,this.engine.ctx.currentTime)){this.counts.refused+=i.plays.length;continue}for(const s of i.plays)this.counts.played++,this.engine.play(s.cue,Math.max(-.6,Math.min(.6,(t.get(s.cue)??0)*.6)),s.delay,s.gain)}}ui(e){this.running&&this.play({name:e?"uiDisabled":"uiClick"},0)}unlockCue(e){this.running&&this.play({name:e?"capstone":"unlockCue"},0)}preview(){this.running&&this.play({name:"coin"},0)}stats(){var e,t,i,s,r;return{state:((e=this.ctx)==null?void 0:e.state)??"none",enabled:this.current.enabled,layer:this.layer,music:((t=this.music)==null?void 0:t.playing)??!1,voices:((i=this.engine)==null?void 0:i.liveEffectVoices())??0,peak:((s=this.engine)==null?void 0:s.peak)??0,...this.counts,soundscape:((r=this.soundscape)==null?void 0:r.stats())??null}}get running(){var e;return!!this.engine&&this.current.enabled&&((e=this.ctx)==null?void 0:e.state)!=="closed"}play(e,t){if(!this.engine||!this.limiter.allow(e.name,this.engine.ctx.currentTime)){this.counts.refused++;return}this.counts.played++,this.engine.play(e,Math.max(-.6,Math.min(.6,t*.6)))}applyVolumes(e=!1){var a,o;if(!this.engine)return;const t=this.engine.ctx.currentTime,i=e?.001:.03;this.engine.sfx.gain.setTargetAtTime(this.current.sfx/100,t,i);const s=this.soundscapeInput(),r=Ga(s);this.engine.music.gain.setTargetAtTime(r.master,t,i),(a=this.music)==null||a.setMixGain(r.music),(o=this.soundscape)==null||o.update(s)}soundscapeInput(){var e;return{scene:this.scene,state:this.layer,enabled:this.current.enabled,music:this.current.music,dimmed:this.dimmed,hidden:document.hidden||((e=this.ctx)==null?void 0:e.state)!=="running",reducedMotion:this.reduced.matches}}syncRunning(){this.ctx&&(this.applyVolumes(),document.hidden||!this.current.enabled?this.ctx.suspend():this.ctx.resume())}}function MM(n,e){if(e<=0)return 0;const t=e*fc;return n>t?0:Math.min(1,Math.max(0,1-Math.max(0,n)/t))}const ja=class ja{constructor(){S(this,"sum",0);S(this,"since",NaN)}add(e,t){e<=0||(Number.isNaN(this.since)&&(this.since=t),this.sum+=e)}take(e){if(Number.isNaN(this.since)||e-this.since<ja.WINDOW-1e-9)return null;const t=this.sum;return this.sum=0,this.since=NaN,t}};S(ja,"WINDOW",.5);let Wa=ja;const Is=class Is{constructor(){S(this,"damage",0);S(this,"boss",!1);S(this,"since",NaN);S(this,"start",NaN)}add(e,t,i){const s=Number.isNaN(this.since)||i-this.since>=Is.WINDOW||i-this.start>=Is.LONGEST;return s&&(this.damage=0,this.boss=!1,this.start=i),this.since=i,this.damage+=e,this.boss||(this.boss=t),{fresh:s,damage:this.damage,boss:this.boss}}reset(){this.since=NaN,this.start=NaN,this.damage=0,this.boss=!1}};S(Is,"WINDOW",.25),S(Is,"LONGEST",.6);let mc=Is;const $d=600;class SM{constructor(e,t,i){S(this,"free",[]);S(this,"all",[]);S(this,"waiting",[]);this.layer=e,this.target=t,this.onArrive=i}setPool(e){for(;this.all.length<e;){const t=document.createElement("img");t.className="fly-coin",t.src="ui/icons/coin.webp",t.alt="",t.width=22,t.height=22,t.decoding="async",t.hidden=!0,this.layer.append(t),this.all.push(t),this.free.push(t)}for(;this.all.length>e&&this.free.length;){const t=this.free.pop();this.all.splice(this.all.indexOf(t),1),t.remove()}}clearQueue(){this.waiting=[]}launch(e,t,i=!1,s=!1){const r=this.free.pop();if(!r)return this.waiting.length<24&&this.waiting.push({x:e,y:t,rich:i,still:s}),!1;if(r.classList.toggle("rich",i),s){r.hidden=!1;const u=r.animate([{transform:`translate(${e-11}px, ${t-11}px)`,opacity:0},{transform:`translate(${e-11}px, ${t-11}px)`,opacity:1,offset:.2},{transform:`translate(${e-11}px, ${t-11}px)`,opacity:0}],{duration:$d});return u.onfinish=u.oncancel=()=>this.release(r,!1),!0}const a=this.target(),o=a.left+a.width*.22,l=a.top+a.height/2,c=e+(o-e)*.3,h=t+(l-t)*.7;r.hidden=!1;const d=r.animate([{transform:`translate(${e-11}px, ${t-11}px) scale(.5)`,opacity:0},{transform:`translate(${e-11}px, ${t-21}px) scale(1.1)`,opacity:1,offset:.15},{transform:`translate(${c-11}px, ${h-11}px) scale(1)`,opacity:1,offset:.55},{transform:`translate(${o-11}px, ${l-11}px) scale(.8)`,opacity:.9}],{duration:$d,easing:"cubic-bezier(.45,0,.7,1)"});return d.onfinish=d.oncancel=()=>this.release(r,d.playState==="finished"),!0}release(e,t){e.hidden=!0,this.all.includes(e)?this.free.push(e):e.remove(),t&&this.onArrive();const i=this.waiting.shift();i&&this.launch(i.x,i.y,i.rich,i.still)}}const $a="aetherkeep:archive:v1",Hf=1,EM=1e9,Xd=new Set(ti),qd=new Set(Object.keys(Hs)),Yd=64,TM=1e3,AM=60,Ps=()=>({gatesClosed:0,bestSimWave:0,seenTraits:[],seenMonsters:[]});class Vf{constructor(e,t=1){S(this,"data");S(this,"unknown",{traits:[],monsters:[]});S(this,"mark","");S(this,"pending",!1);S(this,"wait",0);this.store=e,this.gates=t;const i=this.read();this.data=i.record,this.unknown=i.unknown}get record(){return this.data}observe(e){const t=`${e.phase}:${e.wave}:${e.endless}:${e.seenTraits.length}:${e.seenMonsters.length}`;return t===this.mark?(this.pending&&++this.wait>=AM&&this.flush(),[]):(this.mark=t,this.sync({gatesClosed:e.phase==="victory"&&!e.endless?this.gates:0,bestSimWave:e.endless&&e.phase!=="ready"?e.wave:0,seenTraits:e.seenTraits,seenMonsters:e.seenMonsters}))}refresh(e=null){const t=jd(e);this.data=_r(this.data,t.record),this.unknown=gc(this.unknown,t.unknown),this.sync(Ps())}flush(){this.pending&&this.sync(Ps())}known(e){const t=_r(this.data,{...Ps(),seenTraits:e.seenTraits,seenMonsters:e.seenMonsters});return{seenTraits:t.seenTraits,seenMonsters:t.seenMonsters}}sync(e){this.wait=0;const t=this.read(),i=_r(t.record,this.data);this.unknown=gc(t.unknown,this.unknown);const s=e.seenTraits.filter(o=>!i.seenTraits.includes(o));if(this.data=_r(i,e),!t.readable)return this.pending=!0,s;const r=new Set(t.unknown.monsters.map(pi)),a=this.unknown.traits.some(o=>!t.unknown.traits.includes(o))||this.unknown.monsters.some(o=>!r.has(pi(o)));return this.pending=(a||JSON.stringify(this.data)!==JSON.stringify(t.record))&&!this.write(),s}read(){var t;let e;try{e=((t=this.store)==null?void 0:t.getItem($a))??null}catch{return{record:Ps(),unknown:{traits:[],monsters:[]},readable:!1}}return jd(e)}write(){var t;const e={version:Hf,gatesClosed:this.data.gatesClosed,bestSimWave:this.data.bestSimWave,seenTraits:[...this.data.seenTraits,...this.unknown.traits],seenMonsters:[...this.data.seenMonsters,...this.unknown.monsters]};try{return(t=this.store)==null||t.setItem($a,JSON.stringify(e)),!0}catch{return!1}}}function RM(n,e){return n.filter(t=>t.type!=="research"||t.trait!==void 0&&e.includes(t.trait))}const pi=n=>`${n.kind}:${n.boss}`;function _r(n,e){const t=new Set(n.seenMonsters.map(pi)),i=[...n.seenMonsters];for(const s of e.seenMonsters)t.has(pi(s))||(t.add(pi(s)),i.push({kind:s.kind,boss:s.boss}));return{gatesClosed:Math.max(n.gatesClosed,e.gatesClosed),bestSimWave:Math.max(n.bestSimWave,e.bestSimWave),seenTraits:[...new Set([...n.seenTraits,...e.seenTraits])],seenMonsters:i}}function gc(n,e){const t=new Set(n.monsters.map(pi)),i=[...n.monsters];for(const s of e.monsters){if(i.length>=Yd)break;t.has(pi(s))||(t.add(pi(s)),i.push(s))}return{traits:[...new Set([...n.traits,...e.traits])].slice(0,Yd),monsters:i}}function jd(n){const e={record:Ps(),unknown:{traits:[],monsters:[]},readable:!0};if(!n)return e;let t;try{t=JSON.parse(n)}catch{return e}if(!t||typeof t!="object"||Array.isArray(t))return e;const i=t;if(i.version!==Hf)return e;const s=l=>Number.isInteger(l)&&l>=0&&l<=EM?l:0,r=l=>Array.isArray(l)?l.slice(0,TM):[],a=r(i.seenMonsters).filter(l=>!!l&&typeof l=="object"&&typeof l.kind=="string"&&typeof l.boss=="boolean").map(l=>({kind:l.kind,boss:l.boss})),o=r(i.seenTraits).filter(l=>typeof l=="string");return{record:_r(Ps(),{gatesClosed:s(i.gatesClosed),bestSimWave:s(i.bestSimWave),seenTraits:o.filter(l=>Xd.has(l)),seenMonsters:a.filter(l=>qd.has(l.kind))}),unknown:gc({traits:[],monsters:[]},{traits:o.filter(l=>!Xd.has(l)),monsters:a.filter(l=>!qd.has(l.kind))}),readable:!0}}const vn=n=>String(n).padStart(2,"0"),CM=new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}),PM=n=>CM.format(Math.round(n)),IM=n=>Math.round(n).toLocaleString("en-US"),Lr={split:{name:"แตกตัว",icon:"circles-four",rule:"ตายแล้วแตกเป็นตัวเล็ก 2 ตัว HP 20% ของตัวแม่ เร็วขึ้น 30%",counters:"ดาเมจพื้นที่, ไฟลาม, สายฟ้าลูกโซ่"},flying:{name:"บิน",icon:"bird",rule:"ไม่โดนหลุมลาวาและทุ่งน้ำแข็ง การชะลอได้ผลครึ่งเดียว สายฟ้าแรงขึ้น 25%",counters:"สายฟ้า, ลูกศรอีเธอร์"},regen:{name:"ซ่อมตัว",icon:"heartbeat",rule:"ไม่โดนดาเมจ 1.5 วินาที จะฟื้น HP 4% ต่อวินาที ขณะติดไฟฟื้นไม่ได้",counters:"ไฟเผา, ดาเมจต่อเนื่อง"},armor:{name:"เกราะ",icon:"shield",rule:"ลดดาเมจทุกนัด แต่เหลืออย่างน้อย 25% ของนัด ไฟเผาลดครึ่งหนึ่ง",counters:"นัดใหญ่, เปราะแตก"},dash:{name:"พุ่ง",icon:"wind",rule:"ทุก 4 วินาที เรืองแสงเตือน แล้วพุ่งเร็ว 2.5 เท่า นาน 0.8 วินาที ขณะโดนชะลอ หรือหยุดนิ่ง พุ่งไม่ได้",counters:"น้ำแข็ง"},shield:{name:"โล่",icon:"shield-chevron",rule:"โล่ 50% ของ HP รับดาเมจก่อน สายฟ้าทำใส่โล่ 2 เท่า ไม่โดนดาเมจ 4 วินาที โล่ฟื้น",counters:"สายฟ้า, การรุมยิงเป้าเดียว"},rally:{name:"ปลุกพลังฝูง",icon:"waveform",rule:"มอนสเตอร์ตัวอื่นในรัศมีรอบตัวเร็วขึ้น 30% จนกว่ามันจะตายหรือโดนหยุดนิ่ง ไม่ซ้อนกัน",counters:"เล็งฆ่าก่อน, การหยุดนิ่ง, ลูกศรอีเธอร์"}},Gf={core:{icon:"diamond",tagline:"เสริมพลังป้อมหลัก"},fire:{icon:"flame",tagline:"ระเบิดและเผาไหม้"},frost:{icon:"snowflake",tagline:"ชะลอและหยุดการเคลื่อนไหว"},storm:{icon:"lightning",tagline:"สายฟ้าชิ่งหลายเป้า"}},LM={"II-A":"ทางแยก II","II-B":"ทางแยก II","III-A":"ชั้น III","III-B":"ชั้น III",cap:"ขั้นสูงสุด"},vc={owned:"มีแล้ว",available:"ปลดได้",locked:"ยังล็อก",blocked:"ปิดจากอีกทาง"},Dt=n=>n.phase==="victory"||n.phase==="defeat";function DM(n){return n.enemies.filter(e=>e.mini).length+n.runtime.splits.reduce((e,t)=>e+t.count,0)}function kM(n){const e=n.phase==="wave",t=e?DM(n):0,i=n.remaining-t,s=n.phase==="wave"||Dt(n)?n.wave:n.wave+1,r=n.endless?"∞":zc,a=`ระลอก ${vn(s)} / ${r}`;return{status:n.built?n.phase==="wave"?"กำลังต่อสู้":n.phase==="ready"?n.wave===0?"เตรียมรับระลอกแรก":`ผ่านระลอก ${vn(n.wave)} · เตรียมตัวให้พร้อม`:a:"วางป้อมกลางเกาะเพื่อเริ่ม",waveLabel:a,fighting:e,left:e?n.remaining:0,minis:t,label:e?`ระลอก ${s}/${r} · เหลือ ${i}/${n.total}`:a,progress:e&&n.total>0?Math.min(1-i/n.total,t?1-.5/n.total:1):0,remaining:e?`เหลือ ${i} / ${n.total} ตัว${t?` · ตัวเล็ก ${t} ตัว`:""}`:"",gold:n.gold,hp:n.hp,maxHp:n.maxHp,critical:n.hp<=n.maxHp*.3}}function Wf(n,e){var i;const t=n.skills.map(_t).filter(s=>s.branch===e);return{owned:t,route:t.filter(s=>s.slot.startsWith("II")).map(s=>s.name),capstone:((i=t.find(s=>s.slot==="cap"))==null?void 0:i.name)??null}}function UM(n){const e=!n.built||n.paused||Dt(n);return Vi.map(t=>{var f;const i=t==="core"?n.core:n.levels[t],{owned:s,route:r,capstone:a}=Wf(n,t),o=lo(n,t),l=i>0,c=l?"เพิ่มพลัง":"ปลดด้วยพลังงาน",h=n.built?n.paused?"เกมหยุดอยู่ · เล่นต่อเพื่อใช้พลังงาน":n.gold<o?`${c} · ${o} พลังงาน · พลังงานยังไม่พอ`:`${c} ${_i[t]} เป็นระดับ ${i+1} · ${o} พลังงาน`:"สร้างป้อมก่อน",d=((f=s.find(g=>g.slot==="II-A"||g.slot==="II-B"))==null?void 0:f.id)??null,u=l?r.length?r.join(" → "):"ยังไม่เลือกทาง":"ใช้พลังงานปลดธาตุ";return{key:t,name:_i[t],icon:Gf[t].icon,level:i,levelText:l?`ระดับ ${i}`:"ยังล็อก",path:u,capstone:a,fork:d,look:l?"owned":n.gold>=o?"unlock":"locked",upgrade:{label:c,cost:o,affordable:n.gold>=o,disabled:e||n.gold<o,title:h}}})}const NM={meteor:"skill-fire-meteor",rain:"skill-fire-rain",freeze:"skill-frost-freeze",spear:"skill-frost-spear",chain:"skill-storm-chain",thunder:"skill-storm-thunder"},FM={fire:"skill-fire-sunfall",frost:"skill-frost-iceage",storm:"skill-storm-tempest"};function Kd(n,e){const t=Br(n).skill[e];if(!t||!n.levels[e])return null;const i=_t(t.ultimate?di[t.id].cap:t.node);return{icon:t.ultimate?FM[e]:NM[t.id],name:i.name,left:Math.min(1,Math.max(0,n.runtime.skillTimers[e]/Fc(t.id)))}}function OM(n,e){const t=e==="core"?n.core:n.levels[e],i=h=>Br(e==="core"?{...n,core:h}:{...n,levels:{...n.levels,[e]:h}}),s=h=>e==="core"?rf(Pr({...n,core:h}).damage,i(h)):e==="fire"?no(h):e==="frost"?Hr(h):lf(h,i(h)),r=lo(n,e),a=Wf(n,e),o=[a.route.length?`ทาง ${a.route.join(" → ")}`:"",a.capstone?`★ ${a.capstone}`:""].filter(Boolean).join(" · ")||null,l=n.built?Dt(n)?"การต่อสู้จบแล้ว":n.paused?"เกมหยุดอยู่ · เล่นต่อเพื่อใช้พลังงาน":n.gold<r?`พลังงานยังไม่พอ · ขาดอีก ${r-n.gold} พลังงาน`:null:"สร้างป้อมก่อน",c=BM[e].map(({stat:h,unit:d,value:u})=>({stat:h,unit:d,before:t>0?u(t,n,i(t)):null,after:u(t+1,n,i(t+1))}));return{key:e,name:_i[e],level:t,next:t+1,stat:"ความเสียหาย",before:t>0?s(t):null,after:s(t+1),details:c,cost:r,label:t>0?"อัปเกรด":"ปลดธาตุ",disabled:l!==null,reason:l,route:o}}const BM={core:[{stat:"ยิงต่อวินาที",unit:"",value:(n,e)=>Pr({...e,core:n}).rate},{stat:"ระยะยิง",unit:"",value:(n,e)=>Pr({...e,core:n}).range}],fire:[{stat:"รัศมีระเบิด",unit:"",value:(n,e,t)=>af(n,t.fireRadius)},{stat:"ไฟเผาต่อวินาที",unit:"",value:n=>of(n)}],frost:[{stat:"ชะลอ",unit:"%",value:(n,e,t)=>(1-Oc(n,t.slowBonus))*100},{stat:"ชะลอนาน",unit:" วิ",value:n=>io(n)}],storm:[{stat:"ชิ่งสูงสุด",unit:" เป้า",value:(n,e,t)=>cf(n,t)}]},zM={" ":"pause",n:"wave",1:"fire",2:"frost",3:"storm",q:"nova",r:"repair",t:"tree"};function HM(n){return n.ctrlKey||n.metaKey||n.altKey?null:zM[n.key.toLowerCase()]??null}function VM(){return[["Space","หยุด / เล่นต่อ"],["N","เริ่มระลอกถัดไป"],["T","เปิด / ปิดผังทักษะ"],["1 / 2 / 3","เพิ่มพลังไฟ / น้ำแข็ง / สายฟ้า"],["Q","ปล่อย Nova"],["R","ซ่อมป้อม"]]}function GM(n){const e=!n.built||n.paused||Dt(n),t=Math.ceil(n.cooldown),i=n.novaCharges>0,s=xi(n.nova.level),r=n.novaCharges<s.charges,a=e||n.gold<60||n.hp>=n.maxHp,o=Dt(n)?"การต่อสู้จบแล้ว":n.built?n.paused?"เกมหยุดอยู่":n.hp>=n.maxHp?"พลังป้อมเต็มแล้ว":n.gold<60?"ต้องการ 60 พลังงาน":"ฟื้นพลังป้อม 45 หน่วย · 60 พลังงาน":"สร้างป้อมก่อน";return{tree:{points:n.skillPoints,badge:n.skillPoints>0?String(n.skillPoints):"",glow:n.skillPoints>0&&!Dt(n),disabled:Dt(n)},primary:{action:n.built?"wave":"build",label:n.built?n.phase==="wave"?"เริ่มระลอก":`เริ่มระลอก ${vn(n.wave+1)}`:"สร้างป้อม",sub:n.built?n.phase==="wave"?"กำลังต่อสู้…":"พร้อมแล้ว · N":"ใช้พลังงาน 120",disabled:n.paused||Dt(n)||n.phase==="wave"||!n.built&&n.gold<120},nova:{accessibleText:s.charges>1?`Nova พร้อมใช้ ${n.novaCharges} จาก ${s.charges} ครั้ง · ${r?`ครั้งถัดไปอีก ${t} วิ`:"เต็มแล้ว"}`:`Nova · ${i?"พร้อม":`อีก ${t} วิ`}`,label:n.novaCharges>1?`Nova ×${n.novaCharges}`:"Nova",sub:i?"พร้อม":`อีก ${t} วิ`,ready:i&&!e&&n.phase==="wave",disabled:e||!i||n.phase!=="wave",tag:s.charges>1&&n.novaCharges>0?`${n.novaCharges}/${s.charges}`:n.novaCharges>1?`×${n.novaCharges}`:i?"":`${t} วิ`,charging:r,progress:r?Math.max(0,Math.min(1,1-n.cooldown/s.cooldown)):0},repair:{cost:60,disabled:a,reason:o,visible:n.phase==="wave"||n.built&&n.phase==="ready"&&n.hp<n.maxHp,tag:"60"},pause:{paused:n.paused,label:n.paused?"เล่นต่อ":"หยุด",disabled:Dt(n)},speed:{fast:n.speed===2,label:`ความเร็ว ${n.speed} เท่า · กดเปลี่ยนเป็น ${n.speed===1?2:1} เท่า`,caption:`×${n.speed}`,disabled:Dt(n)}}}function WM(n){if(!n.built||n.phase!=="ready")return null;if(n.hp<=n.maxHp*.3&&n.gold>=60)return{text:"พลังป้อมต่ำ · ซ่อมป้อมก่อนเริ่มระลอก",card:null};const e=["fire","frost","storm"].every(t=>n.levels[t]===0);return n.wave===0&&e&&lo(n,"fire")<=n.gold?{text:"ปลดธาตุก่อนเริ่มระลอก · แตะการ์ดธาตุด้านล่าง",card:"fire"}:n.skillPoints>0&&n.skills.length===0?{text:`มี${Ds.research} ${n.skillPoints} หน่วย · แตะ "ทักษะ" เพื่อปลดโหนด`,card:null}:null}const Zd=n=>Jt[n].label,$f=n=>Object.keys(zr).find(e=>mn(e)===n&&!Jt[e].elite);function Jd(n){const e=Vc(n),t=Dt(n)?n.wave:e.wave,i=Dt(n)?n.total:e.total,s=ti.find(o=>e.traits[o]>0),r=n.phase==="build"||n.phase==="ready",a=r?e.boss?"boss":e.newTraits.length?"new":null:null;return{count:i,portrait:$f(s),expandable:r,visible:n.phase!=="wave",alert:a,label:`มอนสเตอร์ระลอก ${vn(t)} · ${i} ตัว${a==="boss"?" · มีบอส":a==="new"?" · ความสามารถใหม่":""}`}}const Xf=["สายสั้น","สายยาว","สายกลาง"],qf=["ประตูแดง","ประตูชมพู","ประตูม่วง"];function $M(n){var s;if(n.phase!=="ready"&&n.phase!=="build")return null;const e=Vc(n),t=ti.filter(r=>e.traits[r]>0).map(r=>({trait:r,...Lr[r],portrait:$f(r),count:e.traits[r],isNew:e.newTraits.includes(r)})),i=e.mainLane;return{title:`ระลอก ${vn(e.wave)} · ${e.total} ตัว`,lane:{main:i,text:`สายหลัก: ${Xf[i]} (${qf[i]}) · ${e.lanes[i]}/${e.total} ตัว`},chips:t,spotlight:e.boss?null:((s=t.find(r=>r.isNew))==null?void 0:s.trait)??null,boss:e.boss&&{name:Zd(e.boss.kind),portrait:e.boss.kind,count:e.boss.count,text:`บอส: ${Zd(e.boss.kind)}${e.boss.count>1?` ×${e.boss.count}`:""} · ${Lr[e.boss.trait].name}${e.boss.stunImmune?" · หยุดนิ่งไม่ได้":""}`}}}function XM(n){const e=a=>n[a]==="owned",t=(a,o)=>a?"closed":o?"lit":"open",i=a=>{const o=`II-${a}`,l=`III-${a}`;return{mid:t(n[l]==="blocked",e(o)),cap:t(n[l]==="blocked"||n.cap==="blocked",e(l))}},s=i("A"),r=i("B");return{midA:s.mid,midB:r.mid,capA:s.cap,capB:r.cap}}function Qd(n){return{points:n.skillPoints,gold:n.gold,branches:Vi.map(e=>{const t=e==="core"?n.built:n.levels[e]>0,i=kn.filter(a=>a.branch===e).map(a=>({id:a.id,slot:a.slot,name:a.name,cost:a.cost,status:Xs(n,a.id).state})),s=Object.fromEntries(i.map(a=>[a.slot,a.status])),r=i.find(a=>(a.slot==="II-A"||a.slot==="II-B")&&a.status==="owned");return{branch:e,name:_i[e],...Gf[e],unlocked:t,gate:e==="core"?t?"สร้างป้อมแล้ว":"สร้างป้อมก่อน":t?"ปลดธาตุแล้ว":"ปลดธาตุด้วยพลังงาน",nodes:i,fork:r?r.slot==="II-A"?"A":"B":null,forkNote:r?`ทาง ${r.name}`:"เลือก 1 ทาง",links:XM(s)}}),reset:qM(n)}}function qM(n){const e=ef(n),t=n.phase!=="ready"?"รีเซ็ตได้ระหว่างระลอกเท่านั้น":n.skills.length?n.gold<e?`ต้องการ ${e} พลังงานเพื่อรีเซ็ต`:null:"ยังไม่มีโหนดให้รีเซ็ต";return{cost:e,reason:t,note:n.respecCount?"แพงขึ้นครั้งละ 100 พลังงาน":"ราคารีเซ็ตครั้งแรก"}}function YM(n,e){const t=_t(e),i=Xs(n,e),s=Dt(n)?"การต่อสู้จบแล้ว":"reason"in i?i.reason:null;return{id:e,name:t.name,branch:t.branch,place:`${_i[t.branch]} · ${LM[t.slot]}`,kind:jM(e),status:i.state,statusLabel:vc[i.state],effect:t.effect,counters:t.counters.length?`แก้ทาง: ${t.counters.map(r=>r==="boss"?"บอส":Lr[r].name).join(", ")}`:null,choice:i.state==="available"||i.state==="locked"?ox(e):null,requirements:ax(n,e),action:{label:i.state==="owned"?"ปลดแล้ว":`ปลดโหนด · ${t.cost} หน่วย`,disabled:i.state!=="available"||Dt(n),reason:s}}}function jM(n){const e=_t(n);if(e.slot==="cap")return"ขั้นสูงสุด";const t=Object.keys(di).find(s=>di[s].node===n);return t?`ท่าทำงานเอง · ทุก ${Fc(t)} วิ`:e.branch==="core"?n==="core-mine"?"เพิ่มพลังงาน":"เปลี่ยนลูกศรอีเธอร์":`เสริม${kn.find(s=>s.branch===e.branch&&s.slot===(e.slot==="III-A"?"II-A":"II-B")).name}`}const KM=["ether","fire","frost","storm"],vl={ether:{name:"อีเธอร์",icon:"star-four",effect:"ชะลอทุกตัว"},fire:{name:"ไฟ",icon:"fire",effect:"ติดไฟทุกตัว"},frost:{name:"น้ำแข็ง",icon:"snowflake",effect:"แช่แข็งทุกตัว"},storm:{name:"สายฟ้า",icon:"lightning",effect:"ช็อตหยุด แรงต่อโล่"}};function ZM(n){const e=n.nova.level,t=xi(e),i=xi(e+1),s=Zu(e),r=n.nova.element,a=r==="fire"?Ce.nova.fire.damage:r==="frost"?Ce.nova.frost.damage:1,o=n.built?Dt(n)?"การต่อสู้จบแล้ว":n.paused?"เกมหยุดอยู่ · เล่นต่อเพื่อใช้พลังงาน":n.gold<s?`พลังงานยังไม่พอ · ขาดอีก ${s-n.gold} พลังงาน`:null:"สร้างป้อมก่อน",l=n.novaCharges<=0?`เปลี่ยนธาตุได้เมื่อ Nova พร้อม · อีก ${Math.ceil(n.cooldown)} วินาที`:null;return{level:e,next:e+1,element:n.nova.element,...vl[n.nova.element],details:[{stat:"ดาเมจ",unit:"",before:t.damage*a,after:i.damage*a},{stat:"คูลดาวน์",unit:" วิ",before:t.cooldown,after:i.cooldown},{stat:"เก็บได้",unit:" ครั้ง",before:t.charges,after:i.charges}].filter(c=>c.before!==c.after||c.stat==="ดาเมจ"),upgrade:{label:"อัปเกรด Nova",cost:s,affordable:n.gold>=s,disabled:o!==null,reason:o},elements:KM.map(c=>{const h=c!=="ether"&&n.levels[c]<1;return{key:c,...vl[c],selected:c===n.nova.element,locked:h,disabled:c===n.nova.element||h||!!l||Dt(n),reason:h?`ปลด${vl[c].name}ก่อน`:null}}),elementReason:Dt(n)?null:l}}const eu={"II-A":0,"II-B":0,"III-A":1,"III-B":1,cap:2},JM={"II-A":0,"II-B":1,"III-A":0,"III-B":1,cap:.5};function QM(n,e,t=Vi){const i=c=>t.indexOf(c.branch)*2+JM[c.slot],s=_t(n),[r,a]={left:[-1,0],right:[1,0],up:[0,-1],down:[0,1]}[e];let o,l=1/0;for(const c of kn){if(c.id===n||!t.includes(c.branch))continue;const h=i(c)-i(s),d=eu[c.slot]-eu[s.slot],u=h*r+d*a;if(u<=0||r&&d)continue;const f=u+3*Math.abs(r?d:h);f<l&&([o,l]=[c,f])}return(o==null?void 0:o.id)??n}function eS(n){return Vi.flatMap(e=>{const t=n.skills.map(_t).filter(r=>r.branch===e);if(!t.length)return[];const i=t.filter(r=>r.slot.startsWith("II")).map(r=>r.name),s=t.find(r=>r.slot==="cap");return[`${_i[e]}: ${i.length?i.join(" → "):`ชั้น I ${t.length} โหนด`}${s?` · ★ ${s.name}`:""}`]})}function tS(n){const e=Ds.research,t=n.skillPoints,i=kn.some(r=>Xs(n,r.id).state==="available"),s=["fire","frost","storm"].every(r=>n.levels[r]===0)?"ครั้งหน้า ปลดธาตุด้วยการ์ดด้านล่าง ก่อนเริ่มระลอกแรก":i&&!n.skills.length?`มี${e} ${t} หน่วย · ครั้งหน้าใช้ปลดโหนดในผังทักษะ`:i?`ยังมี${e} ${t} หน่วยที่ยังไม่ได้ใช้ · ปลดโหนดในผังทักษะ`:n.gold>=60?`เหลือ${Ds.energyShort} ${IM(n.gold)} · ใช้ซ่อมป้อมหรือเพิ่มพลังก่อนพลังป้อมหมด`:Oe.defeat.tip;return[n.endless?Oe.defeat.simulationLine:Oe.defeat.line,s]}function nS(n){const t=[n.gatesClosed?`ปิดประตูมิติแล้ว ${n.gatesClosed} แห่ง`:"",n.bestSimWave?`การจำลองไกลสุด ระลอก ${vn(n.bestSimWave)}`:""].filter(Boolean).join(" · ");return t?`${Oe.simulation.archive} · ${t}`:null}function iS(n,e){return!n.endless||n.phase!=="defeat"?null:`การจำลองครั้งนี้ถึงระลอก ${vn(n.wave)} · ไกลสุดในคลังข้อมูล ระลอก ${vn(Math.max(e.bestSimWave,n.wave))}`}function Yf(n,e,t,i=null){const s=RM(n,t),r=rS(s,e)??i,a=[];return r&&a.push({text:r,kind:sS(s)}),r!==Oe.research.unlocked&&s.some(o=>o.type==="research")&&a.push({text:Oe.research.unlocked,kind:"normal"}),a}function sS(n){return n.some(e=>e.type==="boss-warning")?"boss":"normal"}function rS(n,e){const t=[];for(const i of n)i.type==="wave"&&e.phase==="ready"&&t.unshift(`ผ่านระลอก ${vn(e.wave)}`),i.type==="points"&&t.push(`ได้ข้อมูลวิจัย +${i.value}`),i.type==="skill"&&i.node&&t.push(`ปลด ${_t(i.node).name} แล้ว`),i.type==="capstone"&&i.node&&t.push(`ป้อมแปลงร่าง · ${_t(i.node).name}`),i.type==="boss-warning"&&t.push(`บอสกำลังมา · ${Xf[i.lane??0]} (${qf[i.lane??0]})`);return!n.some(i=>i.type==="boss-warning")&&n.some(i=>i.type==="research")?Oe.research.unlocked:t.length?t.join(" · "):null}const mi=n=>n.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),tu=" ",nu=/^[\d,.]+$/,aS=/^\(?×?[\d,.]+%?\)?$/,oS=14;function nt(n){const e=n.split(" ").filter(Boolean),t=[];return e.forEach((i,s)=>{const r=t.at(-1);r!==void 0&&(i==="ๆ"||nu.test(r.split(tu).at(-1))||aS.test(i)&&(!nu.test(i)||s===e.length-1)&&[...r].length<=oS)?t[t.length-1]+=tu+i:t.push(i)}),t.map(i=>`<span class="keep">${mi(i)}</span>`).join(" ")}const _l={owned:"check",available:"plus",locked:"lock-simple",blocked:"x"},iu={"core-pierce":"arrow-fat-lines-right","core-split":"arrows-split","core-mark":"target","core-mine":"coins","core-prism":"diamonds-four","fire-meteor":"meteor","fire-wildfire":"fire","fire-lava":"mountains","fire-stack":"stack","fire-sunfall":"sun-horizon","frost-glacier":"cube","frost-brittle":"drop-half","frost-field":"snowflake","frost-shatter":"asterisk","frost-ice-age":"globe-hemisphere-west","storm-chain":"link","storm-thunder":"lightning","storm-static":"atom","storm-clap":"waves","storm-tempest":"cloud-lightning"},At=(n,e="")=>`<i class="ph ph-${n} ${e}" aria-hidden="true"></i>`,lS=[["II-A","II-B"],["III-A","III-B"],["cap"]],cS=["II","III","★"],su='<span class="fork-badge" aria-hidden="true">Y</span>',wa=(n,e)=>`<span class="link-line link-${n}" data-link="${e}"></span>`,hS=n=>[`<div class="tree-link" aria-hidden="true">${wa("a",n.midA)}${wa("b",n.midB)}</div>`,`<div class="tree-link is-cap" aria-hidden="true">${wa("a",n.capA)}${wa("b",n.capB)}</div>`],dS=()=>window.matchMedia("(max-width: 760px)").matches&&!window.matchMedia("(max-height: 640px) and (min-aspect-ratio: 3/2)").matches;function uS(n){return Array.from(n.querySelectorAll('button:not(:disabled), [tabindex="0"]')).filter(e=>{var t;return e.tabIndex>=0&&(((t=e.checkVisibility)==null?void 0:t.call(e))??e.offsetParent!==null)})}function Xa(n,e){const t=uS(n);if(!t.length)return;const i=t.indexOf(document.activeElement);e.shiftKey&&i<=0?(e.preventDefault(),t.at(-1).focus()):!e.shiftKey&&(i===-1||i===t.length-1)&&(e.preventDefault(),t[0].focus())}class fS{constructor(e,t,i){S(this,"isOpen",!1);S(this,"confirmOpen",!1);S(this,"root");S(this,"content");S(this,"live");S(this,"state");S(this,"selected","core-pierce");S(this,"tab","core");S(this,"signature","");S(this,"returnFocus",null);this.onCommand=t,this.onChange=i,this.root=document.createElement("div"),this.root.className="tree-shade",this.root.hidden=!0,this.content=document.createElement("div"),this.content.className="tree-content",this.live=document.createElement("p"),this.live.className="tree-live",this.live.setAttribute("role","status"),this.live.setAttribute("aria-live","polite"),this.root.append(this.content,this.live),e.append(this.root),this.root.addEventListener("click",s=>{const r=s.target.closest("button");if(!r)return;const{tree:a,node:o,branch:l}=r.dataset;o?(this.select(o,!0),this.revealDetail()):l?this.setTab(l,!0):a==="close"?this.close():a==="unlock"?this.onCommand({type:"unlock",node:this.selected}):a==="reset"?this.askReset():a==="reset-cancel"?this.setConfirm(!1):a==="reset-confirm"&&(this.setConfirm(!1),this.onCommand({type:"respec"}))})}open(e){if(this.isOpen)return;this.returnFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.state=e,this.isOpen=!0,this.live.textContent="";const t=kn.find(i=>Xs(e,i.id).state==="available");this.selected=(t==null?void 0:t.id)??"core-pierce",this.tab=(t==null?void 0:t.branch)??"core",this.root.hidden=!1,this.render(!0),this.onChange(),this.focus(`[data-node="${this.selected}"]`)}close(){var e;this.isOpen&&(this.isOpen=!1,this.confirmOpen=!1,this.root.hidden=!0,this.onChange(),(e=this.returnFocus)==null||e.focus())}update(e){this.state=e,this.isOpen&&this.render()}message(e){this.live.textContent=e,this.live.classList.remove("flash"),this.live.offsetWidth,this.live.classList.add("flash")}handleKey(e){const t=e.key;if(this.confirmOpen)return t==="Escape"?(e.preventDefault(),this.setConfirm(!1),!0):t==="Tab"?(Xa(this.root.querySelector(".tree-confirm"),e),!0):!1;if(t==="Escape"||t.toLowerCase()==="t")return e.preventDefault(),this.close(),!0;if(t==="Tab")return Xa(this.root.querySelector(".tree-panel"),e),!0;const i={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down"}[t];if(!i)return!1;const s=document.activeElement;if(s!=null&&s.dataset.branch&&(i==="left"||i==="right")){const r=Vi.indexOf(s.dataset.branch),a=Vi[(r+(i==="left"?3:1))%4];return e.preventDefault(),this.setTab(a,!0),this.focus(`[data-branch="${a}"]`),!0}return s!=null&&s.dataset.node?(e.preventDefault(),this.move(i),!0):!1}move(e){const t=QM(this.selected,e,dS()?[this.tab]:Vi);this.select(t,!0)}select(e,t){this.selected=e,this.tab=kn.find(i=>i.id===e).branch,this.render(),t&&this.focus(`[data-node="${e}"]`)}revealDetail(){const e=this.root.querySelector(".tree-detail"),t=e==null?void 0:e.querySelector(".detail-unlock");!e||!t||t.getBoundingClientRect().bottom<=innerHeight||(e.scrollIntoView({block:"start"}),t.getBoundingClientRect().bottom>innerHeight&&t.scrollIntoView({block:"end"}))}setTab(e,t){this.tab=e,this.selected.startsWith(e)||(this.selected=kn.find(i=>i.branch===e).id),this.render(),t&&this.focus(`[data-branch="${e}"]`)}askReset(){const e=Qd(this.state).reset.reason;if(e){this.message(e);return}this.setConfirm(!0)}setConfirm(e){this.confirmOpen=e,this.render(!0),this.onChange(),this.focus(e?'[data-tree="reset-cancel"]':'[data-tree="reset"]')}focus(e,t=!1){var i;(i=this.root.querySelector(e))==null||i.focus({preventScroll:t})}render(e=!1){var d,u;const t=this.state,i=Qd(t),s=YM(t,this.selected),r=JSON.stringify([i,s,this.tab,this.confirmOpen]);if(!e&&r===this.signature)return;this.signature=r;const a=(d=document.activeElement)==null?void 0:d.closest("[data-node],[data-branch],[data-tree]"),o=a&&this.root.contains(a)?a.dataset.node?`[data-node="${a.dataset.node}"]`:a.dataset.branch?`[data-branch="${a.dataset.branch}"]`:`[data-tree="${a.dataset.tree}"]`:null,l=i.branches.find(f=>f.branch===this.tab),c=((u=this.root.querySelector(".tree-panel"))==null?void 0:u.scrollTop)??0;this.content.innerHTML=`
      <section class="tree-panel" role="dialog" aria-modal="true" aria-labelledby="tree-title">
        <header class="tree-top">
          <button class="tree-back" data-tree="close" aria-label="กลับสู่เกม">${At("caret-left")}</button>
          <h2 id="tree-title">ผังทักษะ</h2>
          <span class="tree-paused">${At("pause")}เกมหยุดชั่วคราว</span>
          <div class="tree-stats">
            <span class="tree-points">${At("hexagon")}ข้อมูลวิจัย <b>${i.points}</b></span>
            <span class="tree-gold" aria-label="พลังงานรอยแยก ${i.gold.toLocaleString("en-US")}">${At("coins")}<b>${i.gold.toLocaleString("en-US")}</b></span>
            <button class="tree-return" data-tree="close">${At("play")}กลับสู่เกม</button>
          </div>
        </header>
        <div class="tree-tabs" role="tablist" aria-label="สายของผังทักษะ">${i.branches.map(f=>`
          <button role="tab" id="tree-tab-${f.branch}" data-branch="${f.branch}" aria-selected="${f.branch===this.tab}"
            aria-controls="tree-col-${f.branch}" tabindex="${f.branch===this.tab?0:-1}" style="--branch: var(--${f.branch})">
            ${At(f.icon)}<span>${f.name}</span>${f.unlocked?"":At("lock-simple","tab-lock")}
          </button>`).join("")}
        </div>
        <p class="tree-branch-status" style="--branch: var(--${l.branch})">${At(l.icon)}<b>${l.name}</b> · ${l.gate}<span>${l.forkNote}</span></p>
        <div class="tree-body">
          <div class="tree-columns" data-tab="${this.tab}">
            <ol class="tree-row-labels" aria-hidden="true">${cS.map((f,g)=>`<li>${f}${g===0?"<small>เลือก 1 ทาง</small>":""}</li>`).join("")}</ol>
            ${i.branches.map(f=>`
            <section class="tree-col" id="tree-col-${f.branch}" role="tabpanel" aria-labelledby="tree-tab-${f.branch}"
              data-branch-col="${f.branch}" style="--branch: var(--${f.branch})">
              <header class="tree-col-head">${At(f.icon,"col-icon")}<div><b>${f.name}</b><small>${f.unlocked?f.tagline:`${At("lock-simple")} ${f.gate}`}</small></div></header>
              <div class="tree-grid">${lS.map((g,v)=>`<div class="tree-row tree-row-${g.length===1?"cap":"pair"}">${v===0?su:""}${g.map(m=>{const p=f.nodes.find(w=>w.slot===m);return`<button class="tree-node${p.slot==="cap"?" is-cap":""}" data-node="${p.id}" data-status="${p.status}"
                  aria-pressed="${p.id===this.selected}" aria-label="${mi(`${p.name} · ${vc[p.status]} · ${p.cost} หน่วย`)}">
                  ${At(iu[p.id],"node-icon")}<span class="node-text"><span class="node-name">${p.name}</span><small>${p.cost} หน่วย</small></span>
                  ${At(_l[p.status],"node-status")}
                </button>`}).join("")}</div>${hS(f.links)[v]??""}`).join("")}</div>
            </section>`).join("")}
          </div>
          <aside class="tree-detail" style="--branch: var(--${s.branch})" aria-live="polite">
            <div class="detail-head">${At(iu[s.id],"detail-icon")}<div><small>${s.place}</small><h3>${s.name}</h3>
              <span class="detail-status" data-status="${s.status}">${At(_l[s.status])}${s.statusLabel}</span><span class="detail-kind">${s.kind}</span></div></div>
            <p class="detail-effect">${nt(s.effect)}</p>
            ${s.counters?`<p class="detail-counters">${nt(s.counters)}</p>`:""}
            ${s.choice?`<p class="detail-choice">${su}<span>${nt(s.choice)}</span></p>`:""}
            <h4>เงื่อนไขที่ต้องมี</h4>
            <ul class="detail-reqs">${s.requirements.map(f=>`<li data-met="${f.met}">${At(f.met?"check":"x")}<span>${nt(f.label)}</span></li>`).join("")}</ul>
            <button class="detail-unlock" data-tree="unlock" ${s.action.disabled?"disabled":""}>${s.action.label}</button>
            ${s.action.disabled&&s.action.reason?`<p class="detail-reason">${nt(s.action.reason)}</p>`:""}
          </aside>
        </div>
        <footer class="tree-foot">
          <ul class="tree-legend">
            ${["owned","available","locked","blocked"].map(f=>`<li data-status="${f}">${At(_l[f],"legend-icon")}<b>${vc[f]}</b><small>${pS[f]}</small></li>`).join("")}
          </ul>
          <p class="tree-rules"><b>ขั้นสูงสุดใช้ข้อมูลวิจัย 2 หน่วย · เลือกได้ 1 สายต่อรอบ</b><span>สร้างป้อม +1 · ผ่านระลอก +1 · ระลอกบอสเพิ่ม +1</span></p>
          <div class="tree-reset"><button data-tree="reset" aria-describedby="reset-note" aria-label="รีเซ็ต · ${i.reset.cost} พลังงาน">${At("arrows-clockwise")}<span class="reset-word">รีเซ็ต · </span>${At("coins")}${i.reset.cost}<span class="reset-word"> พลังงาน</span></button>
            <small id="reset-note">${i.reset.reason??i.reset.note}</small></div>
        </footer>
      </section>
      ${this.confirmOpen?`
      <div class="tree-confirm-shade">
        <section class="tree-confirm" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title" aria-describedby="confirm-body">
          <h3 id="confirm-title">รีเซ็ตผังทักษะ · ${i.reset.cost} พลังงาน</h3>
          <p id="confirm-body">${nt("คืนข้อมูลวิจัยทั้งหมดและล้างขั้นสูงสุด ครั้งถัดไปแพงขึ้น 100 พลังงาน")}</p>
          <div><button data-tree="reset-cancel">ยกเลิก</button><button class="danger" data-tree="reset-confirm">รีเซ็ต</button></div>
        </section>
      </div>`:""}`;const h=this.root.querySelector(".tree-panel");if(h.scrollTop=c,h.toggleAttribute("inert",this.confirmOpen),o){const f=this.root.querySelector(o);f&&!f.disabled?f.focus({preventScroll:!0}):this.focus(`[data-node="${this.selected}"]`,!0)}}}const pS={owned:"ปลดแล้ว ใช้งานอยู่",available:"ใช้ข้อมูลวิจัยเพื่อปลด",locked:"เงื่อนไขยังไม่ครบ",blocked:"เลือกอีกทางไปแล้ว"};class mS{constructor(e){S(this,"key","");S(this,"view",null);S(this,"active",null);this.slot=e;const t=i=>i.target.closest(".trait-chip");e.addEventListener("pointerover",i=>{i.pointerType==="mouse"&&this.show(t(i))}),e.addEventListener("pointerleave",i=>{i.pointerType==="mouse"&&(document.activeElement===e||!e.contains(document.activeElement))&&this.show(null)}),e.addEventListener("focusin",i=>this.show(t(i))),e.addEventListener("focusout",i=>{e.contains(i.relatedTarget)||this.show(null)}),e.addEventListener("click",i=>this.show(t(i))),document.addEventListener("pointerdown",i=>{e.contains(i.target)||this.show(null)})}clear(){this.show(null)}render(e){const t=JSON.stringify(e);if(t===this.key)return;if(this.key=t,this.view=e,this.active=null,!e){this.slot.replaceChildren(),this.slot.classList.remove("has-content"),delete this.slot.dataset.chips;return}this.slot.classList.add("has-content"),this.slot.dataset.chips=String(e.chips.length);const i=[null,...e.chips.map(s=>s.trait)].map(s=>{const{html:r,boss:a}=this.infoOf(s,"sizer-portrait");return`<p${a?' class="is-boss"':""}>${r}</p>`}).join("");this.slot.innerHTML=`
      <div class="preview-head sr-only"><strong>${mi(e.title)}</strong></div>
      <div class="preview-chips">${e.chips.map(s=>`
        <button class="trait-chip" data-trait="${s.trait}" aria-describedby="preview-info" aria-pressed="false"
          aria-label="${mi(`${s.name} ${s.count} ตัว${s.isNew?" · ความสามารถใหม่":""}`)}">
          <img class="chip-portrait" src="ui/portraits/${s.portrait}.webp" width="44" height="44" alt="" decoding="async"><b class="chip-count">×${s.count}</b>
          ${s.isNew?'<em class="new-badge">ใหม่!</em>':""}
        </button>`).join("")}
      </div>
      <div class="preview-body">
        <p class="preview-info" id="preview-info" aria-live="polite"></p>
        <div class="preview-sizer" aria-hidden="true">${i}</div>
      </div>
      <p class="preview-lane" data-lane="${e.lane.main}"><i class="lane-dot" aria-hidden="true"></i>${mi(e.lane.text)}</p>`,this.paintInfo()}show(e){const t=(e==null?void 0:e.dataset.trait)??null;t!==this.active&&(this.active=t,this.slot.querySelectorAll(".trait-chip").forEach(i=>i.setAttribute("aria-pressed",String(i===e))),this.paintInfo())}paintInfo(){const e=this.slot.querySelector(".preview-info");if(!e||!this.view)return;const{html:t,boss:i}=this.infoOf(this.active,"boss-portrait");e.innerHTML=t,e.classList.toggle("is-boss",i)}infoOf(e,t){var r,a,o;const i=e??((r=this.view)!=null&&r.boss?null:((a=this.view)==null?void 0:a.spotlight)??null);if(i){const l=Lr[i];return{html:`<b>${nt(l.name)}</b> ${nt(l.rule)} · <span class="counters">${nt(`แพ้ทาง: ${l.counters}`)}</span>`,boss:!1}}const s=(o=this.view)==null?void 0:o.boss;return s?{html:`<img class="${t}" src="ui/portraits/${s.portrait}.webp" width="20" height="20" alt=""> ${nt(s.text)}`,boss:!0}:{html:`<span class="muted">${nt("แตะหรือชี้ที่ชิปเพื่อดูกติกาและจุดอ่อน")}</span>`,boss:!1}}}class gS{constructor(){S(this,"target",null);S(this,"release","tab")}arm(e,t="tab"){this.target=e,this.release=t}blocks(e,t){return(e==="Tab"||this.release==="tab-or-arrow"&&e.startsWith("Arrow"))&&(this.target=null),e===" "&&this.target!==null&&t===this.target}}class vS{constructor(){S(this,"button",null);S(this,"byPointer",!1)}pointerDown(e){this.button=e,this.byPointer=!0}keyDown(e){this.byPointer=!1,e==="Tab"&&(this.button=null)}armScriptFocus(){this.byPointer=!0}focused(e){this.byPointer&&(this.button=e)}isPointerSpace(e,t){return e===" "&&this.button!==null&&t===this.button}}const Rt=(n,e="")=>`<i class="ph ph-${n} ${e}" aria-hidden="true"></i>`,ru=`<h1 class="loading-wordmark" id="story-title">Aetherkeep</h1><p class="story-tagline">${Oe.intro.tagline}</p>`,Pt=(n,e="")=>`<i class="ph-fill ph-${n} ${e}" aria-hidden="true"></i>`,Wn=(n,e,t,i="")=>`<img class="${t}" src="ui/icons/${n}.webp" width="${e}" height="${e}" alt="" decoding="async"${i?` data-ref="${i}"`:""}>`,Kt=n=>Math.round(n).toLocaleString("en-US"),Ts=n=>n.toLocaleString("en-US",{maximumFractionDigits:1}),_S=["core","fire","frost","storm"],As=[["play","วิธีเล่น"],["tree","ผังทักษะ"],["traits",Oe.research.tab],["settings","ตั้งค่า"]],wr=class wr{constructor(e,t,i){S(this,"refs",new Map);S(this,"state");S(this,"signature","");S(this,"previousPhase","");S(this,"researchSignature",null);S(this,"helpOpen",!1);S(this,"helpTab","play");S(this,"pausedByHelp",!1);S(this,"soundEnabled",!0);S(this,"reduced",matchMedia("(prefers-reduced-motion: reduce)"));S(this,"coins");S(this,"goldTally",new Wa);S(this,"vignette",-1);S(this,"feedbackTimers",new Map);S(this,"highQuality",Bu());S(this,"helpTrigger",null);S(this,"card",null);S(this,"panelOpen",!1);S(this,"spaceGuard",new gS);S(this,"preview");S(this,"tree");S(this,"towerLogHtml","");S(this,"nextLevelAsked",!1);S(this,"storyOpen",!0);S(this,"leakTally",new mc);S(this,"leakEl");S(this,"endingRunning",!1);S(this,"endingCaption","");S(this,"skillLook",{fire:"",frost:"",storm:""});S(this,"pillAlert",null);S(this,"novaOpen",!1);S(this,"novaHtml","");S(this,"popDetailsHtml","");var l,c;this.container=e,this.onCommand=t,this.options=i,e.classList.add("hud-cartoon"),e.innerHTML=`
      <div class="vignette" data-ref="vignette" aria-hidden="true"></div>
      <header class="hud-top panel-glass">
        <h1 class="sr-only">Aetherkeep · ${Oe.chapter}</h1>
        <div class="top-status" data-hud-panel>
          <div class="wave-status" data-ref="wave-box" aria-label="สถานะระลอก">
            <span class="wave-icon" aria-hidden="true">${Pt("flag-pennant")}${Wn("swords",24,"fight-icon")}</span>
            <div class="wave-text"><strong data-ref="wave-title">ระลอก 01 / 10</strong>
              <div class="wave-progress" aria-hidden="true"><i data-ref="wave-fill"></i></div></div>
            <small class="sr-only" data-ref="wave-status"></small><small class="sr-only" data-ref="wave-detail"></small></div>
          <div class="resource" data-ref="gold-resource">${Wn("coin",26,"gold-icon")}<b data-ref="gold">320</b><b class="gold-gain" data-ref="gold-gain" aria-hidden="true"></b></div>
          <div class="resource health" data-ref="health-resource">${Wn("shield",26,"hp-icon")}<div><b><span data-ref="hp">120</span> / <span data-ref="hp-max">120</span></b>
            <div class="health-track"><i data-ref="health-fill"></i></div></div></div>
        </div>
        <div class="boss-area" data-ref="boss-toasts" role="status" aria-live="assertive"></div>
      </header>
      <aside class="hud-left">
        <button class="enemy-pill" data-hud-panel data-tool="enemies" data-ref="enemy-pill" aria-expanded="false" aria-controls="enemy-panel">
          <img class="pill-portrait" data-ref="pill-portrait" src="ui/portraits/green-blob.webp" width="36" height="36" alt="" decoding="async">
          <b class="pill-alert" data-ref="pill-alert" aria-hidden="true" hidden></b>
          <span class="pill-text">มอนสเตอร์ <b data-ref="enemy-count">18</b></span>${Rt("caret-down","pill-caret")}</button>
        <section class="enemy-panel" id="enemy-panel" data-ref="preview-slot" tabindex="-1" aria-label="มอนสเตอร์จากรอยแยกระลอกถัดไป" hidden></section>
      </aside>
      <nav class="utility" data-hud-panel aria-label="เครื่องมือเกม">
        <button class="tool" data-tool="menu" data-ref="menu-button" aria-expanded="false" aria-controls="help-panel" aria-label="เมนู · คู่มือและตั้งค่า">${Pt("gear")}</button>
      </nav>
      <div class="paused-chip" data-ref="paused" hidden>${Rt("pause")}<div>เกมหยุดชั่วคราว<small>กด Space หรือปุ่มเล่นต่อ</small></div></div>
      <footer class="hud-bottom panel-glass" data-ref="hud-bottom">
        <p class="tower-log" data-ref="tower-log" role="status" aria-live="polite" aria-atomic="true"></p>
        <section class="build-bar" data-hud-panel data-ref="build-bar" aria-label="บิลด์ของคุณ">
          <div class="build-cards">${_S.map(h=>`
            <div class="build-card" data-branch="${h}" data-ref="${h}-card" role="group" style="--branch: var(--${h})">
              <button class="card-buy" data-card="${h}" data-ref="${h}-buy" aria-expanded="false" aria-controls="upgrade-pop" aria-describedby="${h}-skill-text">
                <span class="hex-gem">${Wn(`gem-${h}`,54,"gem-art",`${h}-gem`)}<span class="skill-cd" data-ref="${h}-cd" aria-hidden="true"></span><b class="skill-count" data-ref="${h}-count" aria-hidden="true" hidden></b><b class="hex-level" data-ref="${h}-level" hidden></b>${Pt("lock-simple","hex-lock")}${Rt("plus","hex-unlock")}</span>
              <span class="card-price">${Wn("coin",18,"coin-icon",`${h}-buy-icon`)}<b data-ref="${h}-cost"></b></span>
              </button>
              <span class="sr-only" id="${h}-skill-text" data-ref="${h}-skill-text"></span>
            </div>`).join("")}
          </div>
          <section class="upgrade-pop" id="upgrade-pop" data-ref="upgrade-pop" role="dialog" tabindex="-1" aria-labelledby="pop-name" aria-describedby="pop-effect pop-details pop-reason" hidden>
            <header class="pop-head"><img class="pop-gem" data-ref="pop-gem" src="ui/icons/gem-core.webp" width="34" height="34" alt="" decoding="async">
              <b class="pop-name" id="pop-name" data-ref="pop-name"></b>
              <span class="pop-level">ระดับ <span data-ref="pop-from"></span> → <b class="pop-to" data-ref="pop-to"></b></span></header>
            <p class="pop-route" data-ref="pop-route" hidden></p>
            <p class="pop-line" id="pop-effect"><span data-ref="pop-stat"></span><span><span class="pop-before" data-ref="pop-before"></span> → <b class="pop-after" data-ref="pop-after"></b></span></p>
            <div class="pop-details" id="pop-details" data-ref="pop-details"></div>
            <button class="pop-confirm" data-ref="upgrade-confirm">${Wn("coin",22,"coin-icon")}<b data-ref="pop-action"></b></button>
            <p class="pop-reason" id="pop-reason" data-ref="pop-reason" hidden></p>
          </section>
        </section>
        <nav class="command-bar" data-hud-panel aria-label="คำสั่ง">
          <button class="tree-orb" data-tool="tree" data-ref="tree-button">${Rt("tree-structure")}<span class="command-caption" aria-hidden="true">ทักษะ</span><b class="badge" data-ref="tree-points" hidden></b></button>
          <button class="cmd cmd-icon nova-card" data-tool="nova-card" data-ref="nova-card" aria-expanded="false" aria-controls="nova-pop" hidden><span data-ref="nova-card-icon">${Pt("star-four")}</span><b class="nova-card-level" data-ref="nova-card-level" aria-hidden="true">1</b><span class="command-caption" aria-hidden="true">Nova</span></button>
          <section class="upgrade-pop nova-pop" id="nova-pop" data-ref="nova-pop" role="dialog" tabindex="-1" aria-labelledby="nova-pop-name" hidden>
            <header class="pop-head"><span class="nova-pop-icon" data-ref="nova-pop-icon" aria-hidden="true"></span>
              <b class="pop-name" id="nova-pop-name">Nova</b>
              <span class="pop-level">ระดับ <span data-ref="nova-from"></span> → <b class="pop-to" data-ref="nova-to"></b></span></header>
            <div class="pop-details" data-ref="nova-details"></div>
            <button class="pop-confirm" data-ref="nova-confirm">${Wn("coin",22,"coin-icon")}<b data-ref="nova-action"></b></button>
            <p class="pop-reason" data-ref="nova-reason" hidden></p>
            <p class="nova-pop-label" id="nova-elements-label">ธาตุของ Nova</p>
            <div class="nova-elements" role="group" aria-labelledby="nova-elements-label" data-ref="nova-elements"></div>
            <p class="pop-reason" data-ref="nova-element-reason" hidden></p>
          </section>
          <button class="cmd cmd-primary" data-ref="primary" data-action="build">${Pt("castle-turret","primary-icon")}${Wn("swords",26,"primary-icon swords-icon")}<b data-ref="primary-label">สร้างป้อม</b><small class="sr-only" data-ref="primary-sub"></small></button>
          <button class="cmd cmd-icon cmd-nova" data-action="nova" data-ref="nova" hidden>${Pt("star-four")}<span class="sr-only"><b data-ref="nova-label">Nova</b> <small data-ref="nova-sub"></small></span><small class="cmd-tag" data-ref="nova-tag" aria-hidden="true"></small><span class="command-caption" aria-hidden="true">Nova</span></button>
          <button class="cmd cmd-icon cmd-repair" data-action="repair" data-ref="repair" hidden>${Pt("wrench")}<span class="sr-only"><b>ซ่อม</b> <small data-ref="repair-sub">60 พลังงาน</small></span><span class="repair-price" aria-hidden="true">${Wn("coin",16,"coin-icon")}<b data-ref="repair-tag"></b></span><span class="command-caption" aria-hidden="true">ซ่อม</span></button>
          <button class="cmd cmd-icon" data-action="pause" data-ref="pause">${Pt("pause")}<span class="sr-only"><b data-ref="pause-label">หยุด</b></span><span class="command-caption" data-ref="pause-caption" aria-hidden="true">หยุด</span></button>
          <button class="cmd cmd-icon" data-action="speed" data-ref="speed" aria-pressed="false">${Pt("fast-forward")}<span class="command-caption" data-ref="speed-caption" aria-hidden="true">×1</span></button>
        </nav>
        <div class="toast-area" data-ref="toasts" role="status" aria-live="polite"></div>
      </footer>
      <div class="fly-layer" data-ref="fly-layer" aria-hidden="true"></div>
      <div class="modal-shade" data-ref="help-shade" hidden>
        <section class="help-panel" id="help-panel" data-ref="help-panel" role="dialog" aria-modal="true" aria-labelledby="help-title">
          <header><h2 id="help-title">คู่มือ Aetherkeep</h2><button class="tool panel-close" data-tool="close-help" data-ref="close-help" aria-label="ปิดคู่มือ">${Rt("x")}</button></header>
          <div class="help-tabs" role="tablist" aria-label="หัวข้อคู่มือ">${As.map(([h,d])=>`
            <button role="tab" id="help-tab-${h}" data-help-tab="${h}" aria-controls="help-page-${h}">${d}</button>`).join("")}</div>
          <div class="help-page" id="help-page-play" role="tabpanel" aria-labelledby="help-tab-play">
            <ol class="help-steps">${Oe.helpSteps.map(h=>`<li><b>${nt(h.heading)}</b>${nt(h.body)}</li>`).join("")}</ol>
            <h3>การควบคุม</h3>
            <div class="key-grid">${VM().map(([h,d])=>`<kbd>${h}</kbd><span>${d}</span>`).join("")}</div>
          </div>
          <div class="help-page" id="help-page-tree" role="tabpanel" aria-labelledby="help-tab-tree" hidden>
            <ul class="help-list">${Oe.treeGuide.map(h=>`<li><b>${nt(h.heading)}</b>${nt(h.body)}</li>`).join("")}</ul>
          </div>
          <div class="help-page" id="help-page-traits" role="tabpanel" aria-labelledby="help-tab-traits" hidden>
            <p class="research-intro">${nt(Oe.research.intro)}</p>
            <p class="research-archive" data-ref="research-archive" hidden></p>
            <p class="research-count" data-ref="research-count"></p>
            <ul class="trait-list" data-ref="research-list"></ul>
            <p class="research-pending" data-ref="research-pending"></p>
            <h3 data-ref="research-special-title" hidden>ตัวพิเศษและบอส</h3>
            <ul class="help-list compact" data-ref="research-special-list"></ul>
          </div>
          <div class="help-page" id="help-page-settings" role="tabpanel" aria-labelledby="help-tab-settings" hidden>
            <button class="setting-row" data-tool="sound" data-ref="sound-row" aria-pressed="true"><span>${Pt("speaker-high","icon-sound")}เสียงทั้งหมด</span><span class="switch" aria-hidden="true"><i></i></span><b data-ref="sound-setting">เปิด</b></button>
            <label class="setting-slider" for="volume-sfx"><span>${Pt("bell-simple-ringing","icon-sfx")}เสียงประกอบ</span><input class="volume" type="range" id="volume-sfx" min="0" max="100" step="10" data-volume="sfx"><b data-ref="volume-sfx-value" aria-hidden="true"></b></label>
            <label class="setting-slider" for="volume-music"><span>${Pt("music-notes","icon-music")}เพลงและบรรยากาศ</span><input class="volume" type="range" id="volume-music" min="0" max="100" step="10" data-volume="music"><b data-ref="volume-music-value" aria-hidden="true"></b></label>
            <button class="setting-row" data-tool="story"><span>${Rt("book-open")}${Oe.intro.replay}</span><b>3 ภาพ</b></button>
            <button class="setting-row" data-tool="quality"><span>${Rt("sparkle")}คุณภาพเอฟเฟกต์</span><b data-ref="quality-setting">${this.highQuality?"สูง":"ประหยัดพลังงาน"}</b></button>
          </div>
          <p class="help-live" role="status" aria-live="polite" data-ref="help-live"></p>
        </section>
      </div>
      <div class="ending" data-ref="ending" hidden>
        <p class="ending-caption" data-ref="ending-caption" aria-live="polite"></p>
        <button class="ending-skip" data-tool="ending-skip">${Rt("fast-forward")}แตะเพื่อข้าม</button>
      </div>
      <div class="end-screen" data-ref="end-screen" hidden>
        <section class="end-card" data-ref="end-card" role="dialog" aria-modal="true" aria-labelledby="end-title">
          <div data-ref="end-icon">${Rt("crown","end-icon")}</div>
          <h2 class="end-title" id="end-title" data-ref="end-title"></h2>
          <p class="end-log-label" data-ref="end-log-label">${Oe.towerLog} · ${Oe.speaker}</p>
          <p class="end-description" data-ref="end-description"></p>
          <div class="end-stats"><div><b data-ref="end-wave">10</b><span>ระลอก</span></div><div><b data-ref="end-kills">0</b><span>มอนสเตอร์ที่หยุด</span></div><div><b data-ref="end-score">0</b><span>คะแนน</span></div></div>
          <h3>บิลด์ที่ใช้</h3><ul class="end-build" data-ref="end-build"></ul>
          <p class="end-archive" data-ref="end-archive">${nt(Oe.simulation.explanation)}</p>
          <div class="end-actions"><button class="cmd cmd-primary" data-tool="retry" data-ref="retry" hidden>${Rt("arrow-u-up-left")}<span data-ref="retry-label"></span></button><button class="cmd cmd-primary" data-action="endless" data-ref="endless" aria-label="${Oe.simulation.label} · ไม่สิ้นสุด">${Rt("infinity")}${Oe.simulation.action}</button><button class="cmd" data-tool="sim-again" data-ref="sim-again" hidden>${Rt("infinity")}<span data-ref="sim-again-label"></span></button><button class="cmd" data-action="restart" data-ref="restart">${Rt("arrow-counter-clockwise")}เริ่มเกมใหม่</button></div>
        </section>
      </div>
      <section class="loading-screen story${i.levelCard?" level-card":""}" data-ref="loading" role="dialog" aria-modal="true"
        aria-labelledby="${i.levelCard?"story-title level-card-title":"story-title"}"${i.levelCard?` aria-describedby="level-card-line${(l=i.levelCard.notes)!=null&&l.length?" level-card-notes":""}"`:""}>
        <header class="story-head" data-ref="story-head">${i.levelCard?`<h1 class="loading-wordmark" id="story-title">Aetherkeep</h1><p class="level-card-title" id="level-card-title">${mi(i.levelCard.title)}</p><p class="story-tagline" id="level-card-line">${nt(i.levelCard.line)}</p>${(c=i.levelCard.notes)!=null&&c.length?`<ul class="level-card-notes" id="level-card-notes">${i.levelCard.notes.map(h=>`<li>${nt(h)}</li>`).join("")}</ul>`:""}`:ru}</header>
        <ol class="story-panels">${Oe.intro.panels.map((h,d)=>`
          <li class="story-panel" style="--i: ${d}"><img src="ui/story/panel-${d+1}.webp" width="768" height="512" alt="" decoding="async">
            <div class="story-caption"><b>${d+1} · ${h.title}</b><span>${nt(h.body)}</span></div></li>`).join("")}</ol>
        <footer class="story-foot" data-ref="story-foot">
          <div class="story-load"><div class="loading-track"><i data-ref="loading-progress"></i></div><p data-ref="loading-text" role="status" aria-live="polite">${Oe.loading.initial}</p></div>
          <button class="cmd story-new" data-tool="story-new" data-ref="story-new" hidden>${Rt("arrow-counter-clockwise")}เริ่มเกมใหม่</button>
          <button class="cmd cmd-primary story-start" data-tool="story-start" data-ref="story-start" hidden>${Rt("play")}${i.resumeWave?`เล่นต่อ · ระลอก ${vn(i.resumeWave)}`:Oe.intro.start}</button>
        </footer>
      </section>`,e.querySelectorAll("[data-ref]").forEach(h=>this.refs.set(h.dataset.ref,h));let s=!1;try{s=localStorage.getItem(wr.STORY_SEEN)==="1"}catch{}const r=this.ref("loading");(s||matchMedia("(prefers-reduced-motion: reduce)").matches)&&r.classList.add("all"),r.addEventListener("pointerdown",()=>r.classList.add("all"));const a=matchMedia("(max-width: 760px)"),o=()=>{const h=this.ref("menu-button").parentElement,d=this.ref("enemy-pill").parentElement,u=h.contains(document.activeElement)?document.activeElement:null;a.matches?d.before(h):d.after(h),u==null||u.focus({preventScroll:!0})};o(),a.addEventListener("change",o),this.preview=new mS(this.ref("preview-slot")),this.tree=new fS(e,h=>this.onCommand(h),()=>this.syncModal()),this.setHelpTab("play"),this.syncQuality(),this.coins=new SM(this.ref("fly-layer"),()=>this.ref("gold-resource").getBoundingClientRect(),()=>this.goldArrived()),this.coins.setPool(this.highQuality?8:4),this.soundEnabled=i.audio.enabled,this.syncSound();for(const h of["sfx","music"]){const d=this.container.querySelector(`#volume-${h}`);d.value=String(i.audio[h]),this.syncVolume(h,i.audio[h]),d.addEventListener("input",()=>{this.syncVolume(h,+d.value),this.options.onVolume(h,+d.value)}),h==="sfx"&&d.addEventListener("change",()=>this.options.onVolumePreview())}e.addEventListener("click",h=>{var f,g,v,m,p,w,E,x;const d=h.target.closest("button");if(!d||d.disabled)return;const u=h.detail===0;if(d.dataset.action){this.onCommand(d.dataset.action);return}if(d.dataset.helpTab){this.setHelpTab(d.dataset.helpTab);return}if(d.dataset.card){this.toggleCard(d.dataset.card,u);return}if(d.dataset.ref==="upgrade-confirm"){this.confirmUpgrade(u);return}if(d.dataset.ref==="nova-confirm"){this.onCommand("nova-level");return}if(d.dataset.novaElement){this.onCommand({type:"nova-element",element:d.dataset.novaElement});return}switch(d.dataset.tool){case"menu":this.openHelp(this.helpTab,d,!u);break;case"enemies":this.togglePanel();break;case"close-help":this.closeHelp();break;case"tree":this.toggleTree();break;case"nova-card":this.toggleNova(u);break;case"sound":this.toggleSound();break;case"story-start":this.closeStory(!this.options.levelCard);break;case"story-new":this.closeStory(!this.options.levelCard),(g=(f=this.options).onNewGame)==null||g.call(f);break;case"retry":(m=(v=this.options).onRetry)==null||m.call(v),this.ref("primary").focus({preventScroll:!0});break;case"sim-again":(w=(p=this.options).onSimulateAgain)==null||w.call(p),this.ref("primary").focus({preventScroll:!0});break;case"ending-skip":(x=(E=this.options).onEndingSkip)==null||x.call(E);break;case"story":this.openStory();break;case"quality":this.highQuality=this.options.onQuality(),this.syncQuality(),this.coins.setPool(this.highQuality?8:4),this.toast(this.highQuality?"เปิดเอฟเฟกต์คุณภาพสูง":"ใช้โหมดประหยัดพลังงาน");break}}),document.addEventListener("pointerdown",h=>{const d=h.target;this.card&&!(d instanceof Element&&d.closest(".card-buy, .upgrade-pop:not(.nova-pop)"))&&this.closeCard(!1),this.novaOpen&&!(d instanceof Element&&d.closest(".nova-card, .nova-pop"))&&this.closeNova(!1),this.panelOpen&&!this.ref("enemy-pill").parentElement.contains(d)&&this.closePanel(!1)}),this.ref("build-bar").addEventListener("focusout",h=>{const d=h.relatedTarget;this.card&&d&&!this.ref("build-bar").contains(d)&&this.closeCard(!1)}),this.ref("enemy-pill").parentElement.addEventListener("focusout",h=>{const d=h.relatedTarget;this.panelOpen&&d&&!this.ref("enemy-pill").parentElement.contains(d)&&this.closePanel(!1)}),this.ref("help-shade").addEventListener("click",h=>{h.target===this.ref("help-shade")&&this.closeHelp()}),window.addEventListener("keydown",h=>{var u,f;if(this.endingRunning){(h.key==="Enter"||h.key===" "||h.key==="Escape")&&(h.preventDefault(),(f=(u=this.options).onEndingSkip)==null||f.call(u)),h.stopImmediatePropagation();return}if(this.storyOpen){const g=this.ref("story-start"),v=r.contains(h.target);h.key==="Escape"&&!g.hidden?(h.preventDefault(),this.closeStory()):h.key==="Tab"&&v&&!this.ref("story-new").hidden?Xa(this.ref("story-foot"),h):(h.key==="Tab"||!v)&&(h.preventDefault(),g.hidden||g.focus({preventScroll:!0})),h.stopImmediatePropagation();return}if(this.tree.isOpen){this.tree.handleKey(h),h.stopImmediatePropagation();return}const d=this.helpOpen?this.ref("help-panel"):this.ref("end-screen").hidden?null:this.ref("end-card");if(!d){h.key==="Escape"&&this.card?(h.preventDefault(),this.closeCard(!0)):h.key==="Escape"&&this.novaOpen?(h.preventDefault(),this.closeNova(!0)):h.key==="Escape"&&this.panelOpen&&(h.preventDefault(),this.closePanel(!0));return}if(this.spaceGuard.blocks(h.key,h.target)&&h.preventDefault(),h.key==="Escape"&&this.helpOpen)h.preventDefault(),this.closeHelp();else if(h.key==="Tab")Xa(d,h);else if(this.helpOpen&&(h.key==="ArrowLeft"||h.key==="ArrowRight")&&h.target.dataset.helpTab){const g=As.findIndex(([m])=>m===this.helpTab),v=As[(g+(h.key==="ArrowLeft"?As.length-1:1))%As.length][0];h.preventDefault(),this.setHelpTab(v),this.container.querySelector(`[data-help-tab="${v}"]`).focus()}h.stopImmediatePropagation()},{capture:!0})}ref(e){return this.refs.get(e)}text(e,t){const i=this.ref(e);i.textContent!==t&&(i.textContent=t)}hidden(e,t){const i=this.ref(e);i.hidden!==t&&(i.hidden=t)}attribute(e,t,i){e.getAttribute(t)!==i&&e.setAttribute(t,i)}button(e,t,i){const s=this.ref(e);s.disabled=t,i&&(s.title=i)}syncModal(){this.helpOpen||this.tree.isOpen||!this.ref("end-screen").hidden||this.storyOpen?document.body.dataset.uiModal="true":delete document.body.dataset.uiModal}toggleTree(){!this.state||this.state.phase==="victory"||this.state.phase==="defeat"||(this.tree.isOpen?this.tree.close():(this.closeOverlays(),this.tree.open(this.state)))}update(e){var g,v,m,p,w,E,x,R,C,A,k,M,y,L;this.state=e;const t=GM(e);this.tree.update(e),this.preview.render($M(e)),this.syncPill(e),this.syncCard(),this.syncStory(e),this.syncSkills(e);const i=[e.phase,e.gold,e.hp,e.maxHp,e.wave,e.core,e.levels.fire,e.levels.frost,e.levels.storm,e.remaining,e.total,e.extra,e.kills,e.score,Math.ceil(e.cooldown),e.novaCharges,e.nova.level,e.nova.element,e.skillPoints,e.skills.join(),e.paused,e.speed,e.endless,e.built,this.endingRunning,(g=this.options.archive)==null?void 0:g.record.bestSimWave].join("|");if(i===this.signature)return;this.signature=i;const s=e.phase==="defeat"||e.phase==="victory",r=kM(e),a=this.ref("wave-title"),l=r.label.split(" · ").map((D,B,G)=>`<span class="keep">${mi(B<G.length-1?`${D} ·`:D)}</span>`).join(" ")+(r.minis?` <span class="wave-minis" aria-hidden="true">+${r.minis}</span>`:"");a.innerHTML!==l&&(a.innerHTML=l),this.ref("wave-box").classList.toggle("is-fighting",r.fighting),this.ref("wave-box").setAttribute("aria-label",`${e.endless?Oe.simulation.label:Oe.gateProgress} · ${r.waveLabel}`),this.ref("wave-box").title=e.endless?Oe.simulation.label:Oe.gateProgress,this.text("wave-status",r.status),this.text("wave-detail",r.remaining),this.ref("wave-fill").style.width=`${r.progress*100}%`,this.text("gold",Kt(r.gold)),this.ref("gold-resource").setAttribute("aria-label",`${Ds.energy} ${Kt(r.gold)}`),this.ref("gold-resource").title=Ds.energy;const c=PM;this.text("hp",c(r.hp)),this.text("hp-max",c(r.maxHp)),this.ref("health-resource").setAttribute("aria-label",`พลังป้อม ${Kt(r.hp)} จาก ${Kt(r.maxHp)}`),this.ref("health-resource").classList.toggle("critical",r.critical),this.ref("health-fill").style.width=`${100*Math.max(0,r.hp)/r.maxHp}%`;for(const D of UM(e)){this.ref(`${D.key}-level`).hidden=D.level===0,this.text(`${D.key}-level`,String(D.level));const B=D.key==="core"?null:Kd(e,D.key);this.ref(`${D.key}-card`).setAttribute("aria-label",[`${D.name} · ${D.levelText}`,D.fork?D.path:"",D.capstone?`★ ${D.capstone}`:"",B?`สกิล ${B.name}`:""].filter(Boolean).join(" · ")),this.text(`${D.key}-cost`,Kt(D.upgrade.cost));const G=this.ref(`${D.key}-buy`);G.disabled=s,G.classList.toggle("is-short",!D.upgrade.affordable);const Y=D.look==="unlock"?" · พลังงานพอ":D.upgrade.affordable?"":" · พลังงานไม่พอ";G.setAttribute("aria-label",`${D.name} ${D.levelText} · ${D.level?"อัปเกรด":"ปลดธาตุ"} ${Kt(D.upgrade.cost)} พลังงาน${Y} · ดูผลก่อนยืนยัน`),this.ref(`${D.key}-card`).dataset.look=D.look}this.ref("tree-points").hidden=!t.tree.badge,this.text("tree-points",t.tree.badge),this.ref("tree-button").classList.toggle("glow",t.tree.glow),this.ref("tree-button").setAttribute("aria-label",`ผังทักษะ · ${Ds.research}คงเหลือ ${t.tree.points} · T`),this.button("tree-button",t.tree.disabled);const h=this.ref("primary");h.hidden=r.fighting,this.ref("nova").hidden=!r.fighting,this.ref("nova-card").hidden=!((v=this.state)!=null&&v.built),this.syncNova();const d=this.ref("repair");!t.repair.visible&&!d.hidden&&d.contains(document.activeElement)&&(h.hidden?this.ref("pause"):h).focus({preventScroll:!0}),d.hidden=!t.repair.visible,this.text("repair-tag",t.repair.tag),h.dataset.action=t.primary.action,h.disabled=t.primary.disabled,h.classList.toggle("is-wave",e.built),this.text("primary-label",t.primary.label),this.text("primary-sub",t.primary.sub),this.text("nova-label",t.nova.label),this.text("nova-sub",t.nova.sub),this.text("nova-tag",t.nova.tag),this.ref("nova").setAttribute("aria-label",`${t.nova.accessibleText} · Q`),this.button("nova",t.nova.disabled,"ปล่อย Nova ใส่มอนสเตอร์ · Q"),this.ref("nova").classList.toggle("ready",t.nova.ready),this.ref("nova").style.setProperty("--nova-progress",String(t.nova.progress)),this.ref("nova").classList.toggle("is-charging",t.nova.charging),this.button("repair",t.repair.disabled,`${t.repair.reason} · R`),this.text("repair-sub",t.repair.disabled?t.repair.reason:"60 พลังงาน"),this.ref("repair").setAttribute("aria-label",`ซ่อม · ${t.repair.disabled?t.repair.reason:"60 พลังงาน"} · R`),this.text("pause-label",t.pause.label),this.text("pause-caption",t.pause.label),this.ref("pause").setAttribute("aria-label",`${t.pause.label} · Space`),this.ref("pause").querySelector("i").className=`ph-fill ph-${t.pause.paused?"play":"pause"}`,this.ref("pause").classList.toggle("is-active",t.pause.paused),this.ref("pause").title=`${t.pause.label} · Space`,this.button("pause",t.pause.disabled),this.ref("speed").setAttribute("aria-pressed",String(t.speed.fast)),this.ref("speed").classList.toggle("is-active",t.speed.fast),this.text("speed-caption",t.speed.caption),this.ref("speed").setAttribute("aria-label",t.speed.label),this.button("speed",t.speed.disabled,t.speed.label),this.ref("paused").hidden=!e.paused||s||this.helpOpen||this.tree.isOpen;const u=this.ref("end-screen").hidden,f=e.phase==="victory"&&!e.endless&&!!((p=(m=this.options).nextLevel)!=null&&p.call(m));if(f&&!this.endingRunning&&!this.nextLevelAsked&&(((E=(w=this.options).endingDone)==null?void 0:E.call(w))??!0)&&(this.nextLevelAsked=!0,(R=(x=this.options).onNextLevel)==null||R.call(x)),this.ref("end-screen").hidden=!s||this.endingRunning||f,s&&!this.endingRunning&&!f){this.closeOverlays(),this.tree.isOpen&&this.tree.close();const D=e.phase==="victory";this.ref("end-card").classList.toggle("is-defeat",!D),this.ref("end-icon").innerHTML=Rt(D?"crown":"shield-slash","end-icon");const B=this.options.victory??Oe.victory;this.text("end-title",D?B.title:e.endless?Oe.defeat.simulationTitle:Oe.defeat.title);const G=D?B.lines:tS(e);this.ref("end-description").innerHTML=G.map(ue=>`<span class="end-log-line">${nt(ue)}</span>`).join(" "),this.ref("end-log-label").hidden=!D;const Y=this.options.archive?iS(e,this.options.archive.record):null;this.ref("end-archive").hidden=!D&&!Y,this.ref("end-archive").innerHTML=nt(D?Oe.simulation.explanation:Y??"");const X=D||!((A=(C=this.options).canSimulateAgain)!=null&&A.call(C))?null:((M=(k=this.options).simulationStartWave)==null?void 0:M.call(k))??null;this.ref("sim-again").hidden=X===null,this.text("sim-again-label",X===null?"":`${Oe.simulation.again} ${vn(X)}`),this.text("end-wave",String(e.wave)),this.text("end-kills",Kt(e.kills)),this.text("end-score",Kt(e.score));const se=eS(e);this.ref("end-build").innerHTML=(se.length?se:["ไม่ได้ใช้ผังทักษะ"]).map(ue=>`<li>${mi(ue)}</li>`).join("");const z=D&&this.options.lastLevel!==!1;this.ref("endless").hidden=!z;const ce=D?null:((L=(y=this.options).retryWave)==null?void 0:L.call(y))??null;this.ref("retry").hidden=ce===null,this.text("retry-label",ce===null?"":`ลองระลอก ${vn(ce)} อีกครั้ง`),(this.previousPhase!==e.phase||u)&&window.setTimeout(()=>{const ue=this.ref(z?"endless":ce!==null?"retry":"restart");ue.focus(),this.spaceGuard.arm(ue,"tab")},30)}this.syncModal(),this.previousPhase=e.phase}syncStory(e){var d,u;const t=WM(e),i=qx(e);this.hidden("tower-log",i===null&&!t);for(const f of["fire","frost","storm"])this.ref(`${f}-card`).classList.toggle("coach",(t==null?void 0:t.card)===f);const s=(i===null?"":`<span class="tower-log-label">${Oe.towerLog} · ${e.endless?Oe.simulation.short:Oe.speaker}</span> <span>${nt(i)}</span>`)+(t?`<span class="tower-log-hint"><b>คำแนะนำ</b> ${nt(t.text)}</span>`:"");s!==this.towerLogHtml&&(this.towerLogHtml=s,this.ref("tower-log").innerHTML=s);const r=((d=this.options.archive)==null?void 0:d.known(e))??e,a=(u=this.options.archive)==null?void 0:u.record,o=`${r.seenTraits.join("|")};${r.seenMonsters.map(f=>`${f.kind}:${f.boss}`).join("|")};${a==null?void 0:a.gatesClosed}:${a==null?void 0:a.bestSimWave}`;if(o===this.researchSignature)return;this.researchSignature=o;const l=a?nS(a):null;this.hidden("research-archive",!l),this.text("research-archive",l??"");const c=Yx(r);this.text("research-count",`บันทึกแล้ว ${c.length} / ${ti.length} ความสามารถ`),this.ref("research-list").innerHTML=c.map(({trait:f,note:g})=>{const v=Lr[f];return`<li data-research-trait="${f}">${Rt(v.icon,"trait-icon")}<div><b>${v.name}</b><p class="research-note">${nt(g)}</p><p>${nt(v.rule)}</p><small>${nt(`แพ้ทาง: ${v.counters}`)}</small></div></li>`}).join(""),this.ref("research-pending").hidden=c.length===ti.length,this.ref("research-pending").innerHTML=nt(c.length?Oe.research.pending:Oe.research.empty);const h=jx(r);this.ref("research-special-title").hidden=h.length===0,this.ref("research-special-list").innerHTML=h.map(f=>`<li data-research-special="${f.id}">${nt(f.note)}</li>`).join("")}toast(e,t="normal"){if(this.tree.isOpen){this.tree.message(e);return}if(this.helpOpen){this.ref("help-live").textContent=e;return}const i=this.ref(t==="boss"?"boss-toasts":"toasts");i.replaceChildren();const s=document.createElement("div");s.className=t==="boss"?"toast boss":"toast",t==="boss"&&(s.innerHTML=Pt("crown")),s.append(e),i.append(s),window.setTimeout(()=>{s.classList.add("leaving"),window.setTimeout(()=>s.remove(),260)},2900)}setLoading(e,t){this.ref("loading-progress").style.width=`${Math.min(100,Math.max(0,e<=1?e*100:e))}%`,this.text("loading-text",t)}ready(){if(this.setLoading(1,Oe.loading.ready),this.options.story===!1){this.closeStory(!1);return}const e=this.ref("story-start");e.hidden=!1,this.ref("story-new").hidden=!this.options.resumeWave,e.focus({preventScroll:!0})}closeStory(e=!0){const t=this.ref("loading");if(t.classList.add("is-ready"),window.setTimeout(()=>{this.storyOpen||(t.hidden=!0)},650),this.storyOpen=!1,e&&this.options.rememberStory!==!1)try{localStorage.setItem(wr.STORY_SEEN,"1")}catch{}this.syncModal()}openStory(){this.helpOpen&&this.closeHelp();const e=this.ref("loading"),t=this.ref("story-start");e.classList.contains("level-card")&&(this.ref("story-head").innerHTML=ru,e.setAttribute("aria-labelledby","story-title"),e.removeAttribute("aria-describedby")),e.hidden=!1,e.classList.remove("is-ready","level-card"),e.classList.add("all"),t.innerHTML=`${Rt("play")}${Oe.intro.resume}`,t.hidden=!1,this.ref("story-new").hidden=!0,this.storyOpen=!0,this.syncModal(),t.focus({preventScroll:!0})}syncQuality(){document.body.dataset.quality=this.highQuality?"high":"standard",this.text("quality-setting",this.highQuality?"สูง":"ประหยัดพลังงาน")}setHelpTab(e){this.helpTab=e;for(const[t]of As){const i=this.container.querySelector(`[data-help-tab="${t}"]`);i.setAttribute("aria-selected",String(t===e)),i.tabIndex=t===e?0:-1,this.container.querySelector(`#help-page-${t}`).hidden=t!==e}}coinFlight(e,t,i,s=0){this.coins.launch(e,t,i,this.reduced.matches),s>0&&this.goldTally.add(s,performance.now()/1e3)}leakNumber(e,t,i,s){if(i<=0)return;const r=this.leakTally.add(i,s,performance.now()/1e3);let a=this.leakEl;if(r.fresh||!(a!=null&&a.isConnected)){a=this.leakEl=document.createElement("span"),a.style.left=`${e}px`,a.style.top=`${t}px`,this.ref("fly-layer").append(a);const o=a;window.setTimeout(()=>o.remove(),1100)}a.className=`leak-number${r.boss?" boss":""}${this.reduced.matches?" still":""}`,a.textContent=`−${Kt(r.damage)}`}feedback(e,t,i){const s=Math.round(MM(i.hp,i.maxHp)*100)/100;if(s!==this.vignette){this.vignette=s;const l=this.ref("vignette");l.style.setProperty("--vignette",String(s)),l.classList.toggle("on",s>0),l.classList.toggle("pulse",s>0&&!this.reduced.matches)}const r=performance.now()/1e3,a=this.reduced.matches;for(const l of e)l.type==="leak"&&!a&&this.pulseClass("vignette","flash",400),l.type==="cast"&&l.element&&l.element!=="arcane"&&this.pulseClass(`${l.element}-card`,"cast",600);const o=this.goldTally.take(r);o&&(this.ref("gold-gain").textContent=`+${Kt(o)}`,this.pulseClass("gold-gain","show",1100)),t.novaCharges===0&&i.novaCharges>0&&i.phase==="wave"&&!a&&this.pulseClass("nova","ring",800)}goldArrived(){this.pulseClass("gold-resource","gold-hit",220)}resetRun(){this.goldTally=new Wa,this.nextLevelAsked=!1,this.leakTally.reset(),this.container.querySelectorAll(".leak-number").forEach(t=>t.remove()),this.coins.clearQueue();const e=this.ref("gold-gain");e.textContent="",e.classList.remove("show")}ending(e){var r,a;const t=!!e&&!e.done;if(t!==this.endingRunning&&(this.endingRunning=t,this.ref("ending").hidden=!t,t?document.body.dataset.ending="true":delete document.body.dataset.ending,this.signature="",this.state&&this.update(this.state)),!t)return;const i=this.ref("ending-caption"),s=((r=e.caption)==null?void 0:r.text)??"";s!==this.endingCaption&&(this.endingCaption=s,i.textContent=s),i.style.opacity=String(((a=e.caption)==null?void 0:a.alpha)??0)}syncSkills(e){for(const t of["fire","frost","storm"]){const i=Kd(e,t),s=i?Math.round(i.left*100)/100:0,r=i?Math.ceil(e.runtime.skillTimers[t]-1e-9):0,a=i?`${i.icon}|${s}|${r}`:"";if(a===this.skillLook[t])continue;this.skillLook[t]=a,this.text(`${t}-skill-text`,i?`สกิล ${i.name} · ${r>0?`พร้อมในอีก ${r} วินาที`:"พร้อม"}`:"");const o=this.ref(`${t}-card`),l=this.ref(`${t}-gem`),c=`ui/icons/${i?i.icon:`gem-${t}`}.webp`;l.getAttribute("src")!==c&&l.setAttribute("src",c),o.classList.toggle("has-skill",!!i),o.classList.toggle("skill-ready",!!i&&s===0),this.ref(`${t}-cd`).style.setProperty("--cd",String(s));const h=this.ref(`${t}-count`);h.hidden=!i||r<=0;const d=r>0?String(r):"";h.textContent!==d&&(h.textContent=d)}}pulseClass(e,t,i){const s=this.ref(e),r=`${e}:${t}`;s.classList.remove(t),s.offsetWidth,s.classList.add(t),clearTimeout(this.feedbackTimers.get(r)),this.feedbackTimers.set(r,window.setTimeout(()=>s.classList.remove(t),i))}syncVolume(e,t){const i=this.container.querySelector(`#volume-${e}`);i.style.setProperty("--fill",`${t}%`),i.setAttribute("aria-valuetext",`${t} เปอร์เซ็นต์`),this.text(`volume-${e}-value`,`${t}%`)}toggleSound(){this.soundEnabled=this.options.onSound(),this.syncSound()}syncSound(){this.ref("sound-row").setAttribute("aria-pressed",String(this.soundEnabled)),this.text("sound-setting",this.soundEnabled?"เปิด":"ปิด")}syncPill(e){const t=Jd(e),i=this.ref("enemy-pill");this.text("enemy-count",String(t.count));const s=this.ref("pill-portrait"),r=`ui/portraits/${t.portrait}.webp`;if(s.getAttribute("src")!==r&&s.setAttribute("src",r),this.attribute(i,"aria-label",t.label),t.alert!==this.pillAlert){this.pillAlert=t.alert;const o=this.ref("pill-alert");o.hidden=!t.alert,o.dataset.alert=t.alert??"",o.innerHTML=t.alert==="boss"?Pt("crown"):t.alert==="new"?"ใหม่":"",t.alert&&!this.reduced.matches&&this.pulseClass("enemy-pill","alert-pulse",1300)}!t.expandable&&this.panelOpen&&this.closePanel(!1),i.disabled!==!t.expandable&&(i.disabled=!t.expandable);const a=i.parentElement;!t.visible&&a.contains(document.activeElement)&&this.ref("pause").focus({preventScroll:!0}),a.hidden!==!t.visible&&(a.hidden=!t.visible)}togglePanel(){this.panelOpen?this.closePanel(!0):this.openPanel()}openPanel(){!this.state||!Jd(this.state).expandable||(this.closeCard(!1),this.panelOpen=!0,this.ref("preview-slot").hidden=!1,this.ref("enemy-pill").setAttribute("aria-expanded","true"),this.ref("preview-slot").focus())}closePanel(e){var s;if(!this.panelOpen)return;const t=this.ref("preview-slot").contains(document.activeElement);this.panelOpen=!1,this.preview.clear(),this.ref("preview-slot").hidden=!0,this.ref("enemy-pill").setAttribute("aria-expanded","false");const i=this.ref("enemy-pill");(e||t)&&!i.disabled?i.focus():t&&((s=document.activeElement)==null||s.blur())}toggleCard(e,t){if(this.card===e){this.closeCard(t);return}if(this.closePanel(!1),this.card&&this.ref(`${this.card}-buy`).setAttribute("aria-expanded","false"),this.card=e,this.ref(`${e}-buy`).setAttribute("aria-expanded","true"),this.ref("upgrade-pop").hidden=!1,this.syncCard(),this.ref("upgrade-pop").scrollTop=0,t){const i=this.ref("upgrade-confirm");(i.disabled?this.ref("upgrade-pop"):i).focus()}}closeCard(e){if(!this.card)return;const t=this.ref(`${this.card}-buy`),i=this.ref("upgrade-pop").contains(document.activeElement);this.card=null,t.setAttribute("aria-expanded","false"),this.ref("upgrade-pop").hidden=!0,(e||i)&&t.focus()}closeOverlays(){this.closeCard(!1),this.closePanel(!1),this.closeNova(!1)}toggleNova(e){if(this.novaOpen){this.closeNova(e);return}if(this.closeCard(!1),this.closePanel(!1),this.novaOpen=!0,this.ref("nova-card").setAttribute("aria-expanded","true"),this.ref("nova-pop").hidden=!1,this.syncNova(),e){const t=this.ref("nova-confirm");(t.disabled?this.ref("nova-pop"):t).focus()}}closeNova(e){if(!this.novaOpen)return;const t=this.ref("nova-pop").contains(document.activeElement);this.novaOpen=!1,this.ref("nova-card").setAttribute("aria-expanded","false"),this.ref("nova-pop").hidden=!0,(e||t)&&this.ref("nova-card").focus()}syncNova(){var v,m;if(!this.state)return;const e=ZM(this.state),t=this.ref("nova-card");this.text("nova-card-level",String(e.level)),t.dataset.element=e.element;const i=Pt(e.icon);if(this.ref("nova-card-icon").innerHTML!==i&&(this.ref("nova-card-icon").innerHTML=i),t.setAttribute("aria-label",`Nova ระดับ ${e.level} · ธาตุ${e.name} · อัปเกรดและเลือกธาตุ`),this.ref("nova").dataset.element=e.element,!this.novaOpen)return;this.ref("nova-pop").dataset.element=e.element,this.ref("nova-pop-icon").innerHTML!==i&&(this.ref("nova-pop-icon").innerHTML=i),this.text("nova-from",String(e.level)),this.text("nova-to",String(e.next));const s=e.details.map(p=>`<p class="pop-line"><span>${p.stat}</span><span><span class="pop-before">${Ts(p.before)}${p.unit}</span> → <b class="pop-after">${Ts(p.after)}${p.unit}</b></span></p>`).join(""),r=e.elements.map(p=>`<button class="nova-element" data-nova-element="${p.key}" data-element="${p.key}" aria-pressed="${p.selected}"${p.disabled?" disabled":""}${p.reason?` title="${p.reason}"`:""}>${p.locked?Pt("lock-simple"):Pt(p.icon)}<b>${p.name}</b><small>${p.reason??p.effect}</small></button>`).join("");if(s+r!==this.novaHtml){const p=(m=(v=document.activeElement)==null?void 0:v.dataset)==null?void 0:m.novaElement;if(this.novaHtml=s+r,this.ref("nova-details").innerHTML=s,this.ref("nova-elements").innerHTML=r,p){const w=this.ref("nova-elements").querySelector(`[data-nova-element="${p}"]`);(w&&!w.disabled?w:this.ref("nova-confirm").disabled?this.ref("nova-pop"):this.ref("nova-confirm")).focus({preventScroll:!0})}}this.text("nova-action",`${e.upgrade.label} · ${Kt(e.upgrade.cost)}`);const a=this.ref("nova-confirm");a.disabled=e.upgrade.disabled,a.setAttribute("aria-label",`${e.upgrade.label} เป็นระดับ ${e.next} · ${Kt(e.upgrade.cost)} พลังงาน`),this.ref("nova-reason").hidden=!e.upgrade.reason,this.text("nova-reason",e.upgrade.reason??""),this.ref("nova-element-reason").hidden=!e.elementReason,this.text("nova-element-reason",e.elementReason??"");const o=this.ref("nova-pop"),l=t.parentElement.getBoundingClientRect(),c=t.getBoundingClientRect(),h=(c.left+c.right)/2,d=Math.min(Math.max(12,h-48),innerWidth-12-o.offsetWidth);o.style.setProperty("--pop-left",`${d-l.left}px`),o.style.setProperty("--arrow-x",`${h-d}px`);const u=Math.floor(o.getBoundingClientRect().bottom-8),f=o.scrollHeight+o.offsetHeight-o.clientHeight,g=o.offsetHeight>0&&f>u?`${u}px`:"";o.style.maxHeight!==g&&(o.style.maxHeight=g,o.classList.toggle("is-tight",g!==""))}confirmUpgrade(e){if(!this.card)return;const t=this.card;this.closeCard(e),this.onCommand(t)}syncCard(){if(!this.card||!this.state)return;const e=OM(this.state,this.card),t=this.ref("pop-gem"),i=`ui/icons/gem-${e.key}.webp`;t.getAttribute("src")!==i&&t.setAttribute("src",i),this.text("pop-name",e.name),this.text("pop-from",String(e.level)),this.text("pop-to",String(e.next)),this.hidden("pop-route",!e.route),this.text("pop-route",e.route??""),this.text("pop-stat",e.stat),this.text("pop-before",e.before===null?"–":Ts(e.before)),this.text("pop-after",Ts(e.after));const s=e.details.map(g=>`<p class="pop-line"><span>${g.stat}</span><span><span class="pop-before">${g.before===null?"–":`${Ts(g.before)}${g.unit}`}</span> → <b class="pop-after">${Ts(g.after)}${g.unit}</b></span></p>`).join("");s!==this.popDetailsHtml&&(this.popDetailsHtml=s,this.ref("pop-details").innerHTML=s),this.text("pop-action",`${e.label} · ${Kt(e.cost)}`);const r=this.ref("upgrade-confirm");r.disabled=e.disabled,r.setAttribute("aria-label",`${e.label} ${e.name} เป็นระดับ ${e.next} · ${Kt(e.cost)} พลังงาน`),this.ref("pop-reason").hidden=!e.reason,this.text("pop-reason",e.reason??"");const a=this.ref("upgrade-pop"),o=this.ref("build-bar").getBoundingClientRect(),l=this.ref(`${e.key}-buy`).getBoundingClientRect(),c=(l.left+l.right)/2,h=Math.min(Math.max(12,c-a.offsetWidth/2),innerWidth-12-a.offsetWidth);a.style.setProperty("--pop-left",`${h-o.left}px`),a.style.setProperty("--arrow-x",`${c-h}px`);const d=Math.floor(a.getBoundingClientRect().bottom-8),u=a.scrollHeight+a.offsetHeight-a.clientHeight,f=a.offsetHeight>0&&u>d?`${d}px`:"";a.style.maxHeight!==f&&(a.style.maxHeight=f,a.classList.toggle("is-tight",f!==""))}openHelp(e,t,i=!1){this.helpOpen||(this.closeOverlays(),this.helpTrigger=t,this.spaceGuard.arm(i?this.ref("close-help"):null,"tab-or-arrow"),this.helpOpen=!0,this.setHelpTab(e),this.ref("help-shade").hidden=!1,t.setAttribute("aria-expanded","true"),this.ref("paused").hidden=!0,this.syncModal(),this.pausedByHelp=!!this.state&&!this.state.paused&&this.state.phase!=="defeat"&&this.state.phase!=="victory",this.pausedByHelp&&this.onCommand("pause"),this.ref("close-help").focus())}closeHelp(){var e,t,i;this.helpOpen&&(this.helpOpen=!1,this.ref("help-shade").hidden=!0,(e=this.helpTrigger)==null||e.setAttribute("aria-expanded","false"),this.ref("help-live").textContent="",this.syncModal(),this.pausedByHelp&&((t=this.state)!=null&&t.paused)&&this.onCommand("pause"),this.pausedByHelp=!1,this.signature="",this.state&&this.update(this.state),(i=this.helpTrigger)==null||i.focus())}};S(wr,"STORY_SEEN","aetherkeep:story-seen");let _c=wr;const au="aetherkeep:run",Pa=n=>n==="layout-b"||n==="level-01"?au:`${au}:${n}`,ou=1;class xS{constructor(e,t,i=!0){S(this,"retryPoint",null);S(this,"simulationStart",null);S(this,"mark","");S(this,"stale",!1);S(this,"blocked",!1);this.store=e,this.level=t,this.stale=!i}load(){var t;let e=null;try{e=((t=this.store)==null?void 0:t.getItem(Pa(this.level)))??null}catch{return null}if(!e)return null;try{const i=JSON.parse(e);return i.version===ou&&i.level===this.level?TS(i.state):null}catch{return null}}command(e,t,i){this.claim(e),t==="wave"&&this.beforeWave(e),t==="restart"&&this.restart();const s=t==="endless"&&!e.endless,r=i();return s&&e.endless&&e.phase==="ready"&&(this.simulationStart=structuredClone(e)),this.after(e),e.phase==="ready"&&this.save(e),r}foreignChange(){this.stale=!0}retire(){this.blocked=!0}beforeWave(e){!e.built||e.phase!=="ready"||(this.retryPoint=structuredClone(e),this.save(e))}after(e){const t=`${e.phase}:${e.wave}`;t!==this.mark&&(this.mark=t,e.phase==="ready"&&this.save(e),e.phase==="victory"&&this.remove())}hidden(e){e.phase==="ready"&&this.save(e)}retryWave(e){return e.phase==="defeat"&&this.retryPoint?this.retryPoint.wave+1:null}retry(e){return this.retryWave(e)===null?!1:(this.claim(e),Object.assign(e,structuredClone(this.retryPoint)),this.mark=`${e.phase}:${e.wave}`,!0)}discard(){this.stale=!1,this.restart(),this.blocked=!0}claim(e){this.stale&&(this.stale=!1,e.phase==="victory"||e.endless||!e.built?this.remove():e.phase==="ready"?this.save(e):this.retryPoint&&this.save(this.retryPoint))}simulationStartWave(){return this.simulationStart?this.simulationStart.wave+1:null}canSimulateAgain(e){return e.endless&&e.phase==="defeat"&&this.simulationStart!==null}simulateAgain(e){return this.canSimulateAgain(e)?(this.claim(e),Object.assign(e,structuredClone(this.simulationStart)),this.retryPoint=null,this.mark=`${e.phase}:${e.wave}`,!0):!1}restart(){this.retryPoint=null,this.simulationStart=null,this.remove()}save(e){var i;if(!e.built||e.endless||this.blocked||this.stale)return;const t={version:ou,level:this.level,state:{...e,paused:!1}};try{(i=this.store)==null||i.setItem(Pa(this.level),JSON.stringify(t))}catch{}}remove(){var e;if(!(this.blocked||this.stale))try{(e=this.store)==null||e.removeItem(Pa(this.level))}catch{}}}const bS=new Set(kn.map(n=>n.id)),fr=1e9,pr=100,yS=xi(1).cooldown,wS=new Set(["ether","fire","frost","storm"]);function MS(n){if(!n||typeof n!="object"||Array.isArray(n)||"nova"in n)return n;const e=n,t=Array.isArray(e.skills)?e.skills:null;if(!t||!t.every(s=>typeof s=="string"&&s in ed)||typeof e.skillPoints!="number")return n;const i=t.reduce((s,r)=>s+ed[r],0);return{...n,nova:{level:1,element:"ether"},skills:[],skillPoints:e.skillPoints+i,novaCharges:1,cooldown:0}}const SS=1e4,lu=new Set(Object.keys(Hs)),ES=new Set(ti);function TS(n){const e=MS(n),t=oo();if(!Kf(e,t))return null;const i=e,s=i.runtime,r=(c,h,d=fr)=>Number.isInteger(c)&&c>=h&&c<=d,a=c=>!!c&&typeof c=="object"&&!Array.isArray(c);if(!(i.built&&i.phase==="ready"&&!i.endless&&r(i.wave,0,zc-1)&&(i.speed===1||i.speed===2)&&i.maxHp===t.maxHp&&i.hp>0&&i.hp<=i.maxHp&&r(i.core,1,pr)&&r(i.levels.fire,0,pr)&&r(i.levels.frost,0,pr)&&r(i.levels.storm,0,pr)&&i.gold>=0&&i.gold<=fr&&r(i.skillPoints,0)&&r(i.respecCount,0)&&i.cooldown>=0&&i.time>=0&&i.time<=fr&&r(i.kills,0)&&i.score>=0&&i.score<=fr&&r(i.spawned,0)&&r(i.total,0)&&r(i.extra,0)&&r(i.remaining,0)&&r(i.seed,0,4294967295)&&!i.enemies.length&&!i.zones.length&&!s.splits.length&&!s.strikes.length&&s.accumulator>=-1e-9&&s.accumulator<1&&r(s.nextId,1,br-SS)&&r(s.nextMiniId,br,br+fr)&&r(s.nextZoneId,1)&&i.skills.every(c=>bS.has(c))&&new Set(i.skills).size===i.skills.length&&i.seenTraits.every(c=>ES.has(c))&&i.seenMonsters.every(c=>a(c)&&lu.has(c.kind)&&typeof c.boss=="boolean")&&s.queue.every(c=>a(c)&&lu.has(c.kind)&&r(c.lane,0,2)&&typeof c.boss=="boolean"))||!AS(i))return null;const l=i.nova;return!a(l)||!r(l.level,1,pr)||!wS.has(l.element)||l.element!=="ether"&&i.levels[l.element]<1||!r(i.novaCharges,0,xi(l.level).charges)||i.cooldown>yS?null:jf(t,i)}function AS(n){const e=oo(),t=n.skills.reduce((i,s)=>i+_t(s).cost,0);return Object.assign(e,{built:!0,phase:"ready",core:n.core,levels:{...n.levels},skillPoints:t}),n.skills.every(i=>Xs(e,i).state==="available"&&Qu(e,i).ok)}function jf(n,e){if(Array.isArray(e))return e.map(t=>t&&typeof t=="object"?Object.fromEntries(Object.keys(t).filter(i=>i!=="__proto__").map(i=>[i,t[i]])):t);if(n&&typeof n=="object"){const t={};for(const i of Object.keys(n))t[i]=jf(n[i],e[i]);return t}return e}function Kf(n,e){return Array.isArray(e)?Array.isArray(n):e===null||typeof e!="object"?typeof n==typeof e&&(typeof n!="number"||Number.isFinite(n)):n===null||typeof n!="object"||Array.isArray(n)?!1:Object.entries(e).every(([t,i])=>t in n&&Kf(n[t],i))}const uo=document.querySelector("#world"),Ys=document.querySelector("#ui"),Ia=new URLSearchParams(location.search).get("bench")==="1",qa=Ia||!1,Zf=!!z_(location.search,!1),Gs=(()=>{try{return qa||Zf?null:localStorage}catch{return null}})(),js=new Nf(Gs,new Vf(Gs).record.gatesClosed),cu=Uf(js.level);cu&&O_($u(cu));const Xc=wt().id===js.level,Jf=!Xc||js.isLast;let xc=!1;function bc(){!xc&&Xc&&!Jf&&be.phase==="victory"&&!be.endless&&(xc=js.advance())}const be=oo();let Bi,ui=null;const xl=[],$t=new xS(Gs,wt().id,!1),Dr=$t.load();Dr&&Object.assign(be,Dr);const Nn=new Vf(Gs,js.index+1);Nn.observe(be);let qn;const qc=new Ww;uo.setAttribute("aria-label","เกาะลอยฟ้า ภาพวาดมุมคงที่");let La,yc=0,Rs;const Wt=new wM;let Ze,Ks=!1,Kn="ok";const Zs=new vS,Qf=n=>n instanceof Element?n.closest("button"):null;Ys.addEventListener("pointerdown",n=>{document.body.dataset.uiModal!=="true"&&Zs.pointerDown(Qf(n.target))});Ys.addEventListener("focusin",n=>{const e=Qf(n.target);e&&document.body.dataset.uiModal!=="true"&&Zs.focused(e)});window.addEventListener("keydown",n=>Zs.keyDown(n.key),{capture:!0});for(const n of["pointerdown","keydown"])window.addEventListener(n,()=>Wt.unlock(),{capture:!0});window.addEventListener("keydown",n=>{qs(Kn)&&n.stopImmediatePropagation()},{capture:!0});Ys.addEventListener("pointerdown",n=>{const e=n.target instanceof Element?n.target.closest("button"):null;e&&Wt.ui(e.disabled)});const ep=n=>(Ze==null?void 0:Ze.screenPoint(n).ndcX)??0,tp=(n,e)=>Ze?Ze.whenShown(n,e):e(),at=new _c(Ys,n=>Ya(n),{onSound:()=>Wt.toggle(),onVolume:(n,e)=>Wt.setVolume(n,e),onVolumePreview:()=>Wt.preview(),audio:Wt.settings,onQuality:()=>(Ze==null?void 0:Ze.toggleQuality())??!1,story:!qa,rememberStory:!Zf,onEndingSkip:()=>{var n;return(n=Ze==null?void 0:Ze.skipEnding)==null?void 0:n.call(Ze)},levelCard:qa||!Xc?null:Gx[js.level]??null,victory:Wx[wt().id]??null,nextLevel:()=>xc,lastLevel:Jf,onNextLevel:()=>{Nn.flush(),location.reload()},endingDone:()=>{var n;return!!((n=Ze==null?void 0:Ze.ending)!=null&&n.done)},retryWave:()=>$t.retryWave(be),onRetry:()=>CS(),resumeWave:Dr?Dr.wave+1:null,onNewGame:()=>Ya("restart"),archive:Nn,canSimulateAgain:()=>$t.canSimulateAgain(be),simulationStartWave:()=>$t.simulationStartWave(),onSimulateAgain:()=>RS()});function RS(){!Ks||qs(Kn)||(Zs.armScriptFocus(),$t.simulateAgain(be)&&(at.resetRun(),Wt.resetRun(),at.update(be)))}function CS(){!Ks||qs(Kn)||(Zs.armScriptFocus(),$t.retry(be)&&(at.resetRun(),Wt.resetRun(),at.update(be)))}function Ya(n){if(!Ks)return;if(qs(Kn))return{ok:!1,message:"กรุณาหมุนเครื่องเป็นแนวนอน",events:[]};Wt.unlock();const e=Ff(be),t=$t.command(be,n,()=>pb(be,n));qn==null||qn.add(be.time,t.events),bc(),n==="restart"&&(at.resetRun(),Wt.resetRun()),ui&&Bi&&n==="wave"&&t.ok&&(ui.fill&&Bi.fillQueue(be,ui.fill),La=new Bi.FrameWindow(10,40),yc=be.time);for(const i of Yf(t.events,be,Nn.observe(be),t.message))at.toast(i.text,i.kind);return Ze==null||Ze.handle(t.events),Wt.handle(t.events,e,be,ep,tp),at.feedback(t.events,e,be),at.update(be),t}async function PS(){var n;try{let e=function(c){requestAnimationFrame(e);const h=c-r,d=Math.max(0,Math.min(h/1e3,.05));if(r=c,!document.hidden){if(document.body.dataset.uiModal!=="true"){const u=Ff(be),f=ad(be,d*dc);qn==null||qn.add(be.time,f),Ze.handle(f),$t.after(be),bc(),Wt.handle(f,u,be,ep,tp),at.feedback(f,u,be);for(const g of Yf(f,be,Nn.observe(be)))at.toast(g.text,g.kind)}else Nn.observe(be);if(Rs==null||Rs.begin(),Ze.update(be,d),Rs==null||Rs.end(),a+=d,at.ending(Ze.ending??null),La&&be.phase==="wave"&&La.add(be.time-yc,h),a>.08){at.update(be),a=0;const u=document.body.dataset.uiModal==="true";Wt.follow(be),Wt.setDimmed(be.paused||u),qc.sync(Vw(be,u||qs(Kn)))}}};at.setLoading(0,Oe.loading.initial);const t=Bu(innerWidth),i=w_(uo,t);if(Ia){if(Bi=await xr(()=>import("./dev-scenario-DpxQtqc6.js"),[],import.meta.url),ui=Ia?Bi.parseScenario("?scenario=bench2d&plain=1"):Bi.parseScenario(location.search),ui){const c=Bi.applyScenario(be,ui,xl);c.length&&console.warn("scenario",c)}at.update(be)}const s=Ia?await xr(()=>import("./phone-bench-CUDNWS63.js"),__vite__mapDeps([2,3]),import.meta.url):void 0;await(s==null?void 0:s.useBenchLevel(location.search)),Ze=await Va.create(i,t,c=>at.setLoading(c,Oe.loading.progress)),Ze.onCoin=(c,h,d)=>at.coinFlight(c.x,c.y,h,d),Ze.onLeak=(c,h,d)=>at.leakNumber(c.x,c.y,h,d),Ze.onCueStart=c=>{Wt.unlockCue(c.capstone)},xl.length&&Ze.handle(xl);try{Ze.update(be,0),at.update(be)}catch(c){throw Dr&&$t.discard(),c}Ks=!0,at.ready(),at.update(be),fo();let r=performance.now(),a=0;requestAnimationFrame(e);const o=c=>{be.skillPoints+=c,at.update(be)},l=c=>{for(let h=0;h<Math.round(c*30);h++){const d=ad(be,.03333333333333333);qn==null||qn.add(be.time,d),Ze.handle(d),$t.after(be),bc(),Nn.observe(be),Ze.update(be,1/30/dc)}return at.update(be),be.time};s&&ui&&Ze instanceof Va&&s.runPhoneBench({scenario:ui,state:be,view:Ze,renderer:i,dispatch:Ya,grant:o,advance:l,bench:()=>({window:La,waveStart:yc})}),Object.defineProperty(window,"__AETHERKEEP__",{value:{getState:()=>JSON.parse(JSON.stringify(be)),diagnostics:(c=!1)=>Ze.diagnostics(c),version:"1.0.0"},writable:!1})}catch(e){console.error(e),Ys.innerHTML='<section class="boot-error" style="position:fixed;inset:0;display:grid;place-content:center;background:#102734;color:white;text-align:center;padding:24px;font-family:sans-serif"><h1>เปิดเกาะไม่สำเร็จ</h1><p>โปรดใช้เบราว์เซอร์ที่รองรับ WebGL 2 แล้วลองโหลดเกมอีกครั้ง</p><button id="reload-game" style="padding:12px">ลองอีกครั้ง</button></section>',(n=document.querySelector("#reload-game"))==null||n.addEventListener("click",()=>location.reload())}}window.addEventListener("keydown",n=>{const e=HM(n),t=e==="pause"&&Zs.isPointerSpace(n.key,n.target);t&&document.body.dataset.uiModal!=="true"&&n.preventDefault(),!(document.body.dataset.uiModal==="true"||n.target instanceof HTMLElement&&(/INPUT|TEXTAREA|SELECT/.test(n.target.tagName)||n.target.isContentEditable))&&(n.repeat||!e||n.target instanceof HTMLButtonElement&&(n.key==="Enter"||n.key===" "&&!t)||(n.preventDefault(),e==="tree"?at.toggleTree():Ya(e)))});document.addEventListener("visibilitychange",()=>qc.retry());addEventListener("pointerdown",()=>qc.retry(),{capture:!0});document.addEventListener("visibilitychange",()=>{document.hidden&&Ks&&!be.paused&&be.phase==="wave"&&(ho(be,"pause"),at.update(be))});addEventListener("pagehide",()=>{$t.hidden(be),Nn.flush()});addEventListener("storage",n=>{(n.key===Pa(wt().id)||n.key===null)&&$t.foreignChange()});addEventListener("storage",n=>{!Gs||n.key!==uc&&n.key!==null||new Nf(Gs).level===wt().id||($t.retire(),at.toast("อีกแท็บไปด่านถัดไปแล้ว โหลดหน้าใหม่เพื่อเล่นต่อ"))});qa||addEventListener("storage",n=>{(n.key===$a||n.key===null)&&(Nn.refresh(n.key===$a?n.newValue:null),at.update(be))});addEventListener("pageshow",n=>{n.persisted&&$t.foreignChange()});document.addEventListener("visibilitychange",()=>{document.hidden&&($t.hidden(be),Nn.flush())});uo.addEventListener("webglcontextlost",n=>{n.preventDefault(),be.paused||ho(be,"pause"),at.toast("กราฟิกหยุดชั่วคราว กรุณาโหลดหน้าใหม่เพื่อเล่นต่อ")});const Fn=document.createElement("section");Fn.className="rotate-screen";Fn.setAttribute("role","alertdialog");Fn.setAttribute("aria-modal","true");Fn.setAttribute("aria-label","กรุณาหมุนเครื่องเป็นแนวนอน");Fn.hidden=!0;Fn.innerHTML='<svg class="rotate-icon" viewBox="0 0 64 64" aria-hidden="true"><rect x="20" y="6" width="24" height="42" rx="5" fill="none" stroke="currentColor" stroke-width="4"/><path d="M10 40a24 24 0 0 0 30 18" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M36 52l6 6-8 3" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg><h2>กรุณาหมุนเครื่องเป็นแนวนอน</h2><p>เกมนี้เล่นในแนวนอนเท่านั้น</p>';document.body.append(Fn);const np=matchMedia("(pointer: coarse)");function fo(){Kn=$w(innerWidth,innerHeight,np.matches),Fn.hidden=Kn==="ok";const n=qs(Kn);n?document.body.dataset.rotateScreen="true":delete document.body.dataset.rotateScreen;for(const e of[Ys,uo])e.inert=n,n&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&document.activeElement.blur();Ks&&Xw(be,Kn)&&(ho(be,"pause"),at.update(be))}const po=()=>{(document.fullscreenElement||matchMedia("(display-mode: standalone)").matches)&&qw()};for(const n of["resize","orientationchange"])addEventListener(n,fo);np.addEventListener("change",fo);const IS=()=>matchMedia("(display-mode: standalone)").matches,ip=n=>Yw({touch:n,fullscreen:!!document.fullscreenElement,standalone:IS(),supported:document.fullscreenEnabled});let kr=!0,wc=!1,Mc=0;const sp=()=>void document.documentElement.requestFullscreen({navigationUI:"hide"}).catch(()=>{kr=!0});document.addEventListener("fullscreenchange",()=>{if(po(),window.clearTimeout(Mc),document.fullscreenElement){wc=!0;return}document.visibilityState==="visible"&&(Mc=window.setTimeout(()=>{document.visibilityState==="visible"&&!document.fullscreenElement&&(wc=!1)},1e3))});document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){window.clearTimeout(Mc);return}wc&&(kr=!0),po()});window.addEventListener("pointerup",n=>{kr&&(kr=!1,ip(n.pointerType==="touch")?sp():po())},{capture:!0});Fn.addEventListener("pointerup",n=>{ip(n.pointerType==="touch")?(kr=!1,sp()):po()});document.fullscreenEnabled&&Fn.insertAdjacentHTML("beforeend",'<p class="rotate-hint">แตะหน้าจอเพื่อเล่นแบบเต็มจอแนวนอน</p>');fo();PS();export{Xi as B,fn as D,$h as E,dc as G,an as L,Gt as M,NS as R,Ct as S,oc as T,O as V,xr as _,DS as a,wt as b,ho as c,Qu as d,Zt as e,Sn as f,FS as g,Jt as h,Dc as i,kS as j,tx as k,$u as l,US as m,OS as n,_t as s,O_ as u};
