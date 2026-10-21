const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./decor-layout-DEa3-cWX.js","./grass-mask-DRTdgJFI.js"])))=>i.map(i=>d[i]);
var Fd=Object.defineProperty;var kd=(i,e,t)=>e in i?Fd(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var E=(i,e,t)=>kd(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Il="180",Od=0,sc=1,Bd=2,tu=1,zd=2,On=3,si=0,Xt=1,on=2,ii=0,Ii=1,Qs=2,rc=3,ac=4,Hd=5,wi=100,Gd=101,Vd=102,Wd=103,$d=104,Xd=200,qd=201,Yd=202,Kd=203,Po=204,Io=205,jd=206,Zd=207,Jd=208,Qd=209,ef=210,tf=211,nf=212,sf=213,rf=214,Lo=0,Do=1,Uo=2,Es=3,No=4,Fo=5,ko=6,Oo=7,nu=0,af=1,of=2,Hn=0,lf=1,cf=2,hf=3,uf=4,df=5,ff=6,pf=7,iu=300,Ts=301,As=302,Bo=303,zo=304,ua=306,ia=1e3,Ai=1001,Ho=1002,Qt=1003,mf=1004,xr=1005,Jt=1006,Ra=1007,Ri=1008,Vn=1009,su=1010,ru=1011,er=1012,Ll=1013,Fi=1014,Tn=1015,cr=1016,Dl=1017,Ul=1018,tr=1020,au=35902,ou=35899,lu=1021,cu=1022,vn=1023,nr=1026,ir=1027,Nl=1028,Fl=1029,hu=1030,kl=1031,Ol=1033,jr=33776,Zr=33777,Jr=33778,Qr=33779,Go=35840,Vo=35841,Wo=35842,$o=35843,Xo=36196,qo=37492,Yo=37496,Ko=37808,jo=37809,Zo=37810,Jo=37811,Qo=37812,el=37813,tl=37814,nl=37815,il=37816,sl=37817,rl=37818,al=37819,ol=37820,ll=37821,cl=36492,hl=36494,ul=36495,dl=36283,fl=36284,pl=36285,ml=36286,gf=3200,vf=3201,_f=0,xf=1,Bn="",Tt="srgb",Rs="srgb-linear",sa="linear",it="srgb",qi=7680,oc=519,bf=512,yf=513,Mf=514,uu=515,Sf=516,wf=517,Ef=518,Tf=519,lc=35044,Dt=35048,cc="300 es",An=2e3,ra=2001;class Ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ca=Math.PI/180,gl=180/Math.PI;function hr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function Af(i,e){return(i%e+e)%e}function Pa(i,e,t){return(1-t)*i+t*e}function ks(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $n{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const u=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==u||c!==f||h!==g){let m=1-o;const p=l*u+c*f+h*g+d*v,S=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const A=Math.sqrt(w),C=Math.atan2(A,p*S);m=Math.sin(m*C)/A,o=Math.sin(o*C)/A}const x=o*S;if(l=l*m+u*x,c=c*m+f*x,h=h*m+g*x,d=d*m+v*x,m===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ia.copy(this).projectOnVector(e),this.sub(Ia)}reflect(e){return this.sub(Ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ia=new k,hc=new $n;class ze{constructor(e,t,n,s,r,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],S=s[1],w=s[4],x=s[7],A=s[2],C=s[5],R=s[8];return r[0]=a*v+o*S+l*A,r[3]=a*m+o*w+l*C,r[6]=a*p+o*x+l*R,r[1]=c*v+h*S+d*A,r[4]=c*m+h*w+d*C,r[7]=c*p+h*x+d*R,r[2]=u*v+f*S+g*A,r[5]=u*m+f*w+g*C,r[8]=u*p+f*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(La.makeScale(e,t)),this}rotate(e){return this.premultiply(La.makeRotation(-e)),this}translate(e,t){return this.premultiply(La.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const La=new ze;function du(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rf(){const i=sr("canvas");return i.style.display="block",i}const uc={};function rr(i){i in uc||(uc[i]=!0,console.warn(i))}function Cf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const dc=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fc=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pf(){const i={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(s.r=Gn(s.r),s.g=Gn(s.g),s.b=Gn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bn?sa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Rs]:{primaries:e,whitePoint:n,transfer:sa,toXYZ:dc,fromXYZ:fc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:dc,fromXYZ:fc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),i}const Qe=Pf();function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yi;class If{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yi===void 0&&(Yi=sr("canvas")),Yi.width=e.width,Yi.height=e.height;const s=Yi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lf=0;class Bl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=hr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Da(s[a].image)):r.push(Da(s[a]))}else r=Da(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?If.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Df=0;const Ua=new k;class Pt extends Ds{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Ai,s=Ai,r=Jt,a=Ri,o=vn,l=Vn,c=Pt.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=hr(),this.name="",this.source=new Bl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ua).x}get height(){return this.source.getSize(Ua).y}get depth(){return this.source.getSize(Ua).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ia:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case Ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ia:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case Ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=iu;Pt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,s=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,x=(f+1)/2,A=(p+1)/2,C=(h+u)/4,R=(d+v)/4,D=(g+m)/4;return w>x&&w>A?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=C/n,r=R/n):x>A?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=C/s,r=D/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=D/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-v)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uf extends Ds{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Pt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Bl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends Uf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class fu extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nf extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bi{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,un):un.fromBufferAttribute(r,a),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(e.matrixWorld),this.union(br)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),yr.subVectors(this.max,Os),Ki.subVectors(e.a,Os),ji.subVectors(e.b,Os),Zi.subVectors(e.c,Os),Xn.subVectors(ji,Ki),qn.subVectors(Zi,ji),ui.subVectors(Ki,Zi);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-ui.z,ui.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,ui.z,0,-ui.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-ui.y,ui.x,0];return!Na(t,Ki,ji,Zi,yr)||(t=[1,0,0,0,1,0,0,0,1],!Na(t,Ki,ji,Zi,yr))?!1:(Mr.crossVectors(Xn,qn),t=[Mr.x,Mr.y,Mr.z],Na(t,Ki,ji,Zi,yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Dn=[new k,new k,new k,new k,new k,new k,new k,new k],un=new k,br=new Bi,Ki=new k,ji=new k,Zi=new k,Xn=new k,qn=new k,ui=new k,Os=new k,yr=new k,Mr=new k,di=new k;function Na(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){di.fromArray(i,r);const o=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),h=n.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ff=new Bi,Bs=new k,Fa=new k;class ur{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ff.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);const t=Bs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Bs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(Fa)),this.expandByPoint(Bs.copy(e.center).sub(Fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Un=new k,ka=new k,Sr=new k,Yn=new k,Oa=new k,wr=new k,Ba=new k;class kf{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ka.copy(e).add(t).multiplyScalar(.5),Sr.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(ka);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Sr),o=Yn.dot(this.direction),l=-Yn.dot(Sr),c=Yn.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ka).addScaledVector(Sr,u),f}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,s,r){Oa.subVectors(t,e),wr.subVectors(n,e),Ba.crossVectors(Oa,wr);let a=this.direction.dot(Ba),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,e);const l=o*this.direction.dot(wr.crossVectors(Yn,wr));if(l<0)return null;const c=o*this.direction.dot(Oa.cross(Yn));if(c<0||l+c>a)return null;const h=-o*Yn.dot(Ba);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,s,r,a,o,l,c,h,d,u,f,g,v,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,f,g,v,m)}set(e,t,n,s,r,a,o,l,c,h,d,u,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ji.setFromMatrixColumn(e,0).length(),r=1/Ji.setFromMatrixColumn(e,1).length(),a=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,g=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,v=c*d;t[0]=u+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,v=c*d;t[0]=u-v*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,g=o*h,v=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-v*d}else if(e.order==="XZY"){const u=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Of,e,Bf)}lookAt(e,t,n){const s=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Kn.crossVectors(n,jt),Kn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Kn.crossVectors(n,jt)),Kn.normalize(),Er.crossVectors(jt,Kn),s[0]=Kn.x,s[4]=Er.x,s[8]=jt.x,s[1]=Kn.y,s[5]=Er.y,s[9]=jt.y,s[2]=Kn.z,s[6]=Er.z,s[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],S=n[3],w=n[7],x=n[11],A=n[15],C=s[0],R=s[4],D=s[8],M=s[12],y=s[1],L=s[5],O=s[9],z=s[13],X=s[2],J=s[6],q=s[10],oe=s[14],W=s[3],ce=s[7],me=s[11],ge=s[15];return r[0]=a*C+o*y+l*X+c*W,r[4]=a*R+o*L+l*J+c*ce,r[8]=a*D+o*O+l*q+c*me,r[12]=a*M+o*z+l*oe+c*ge,r[1]=h*C+d*y+u*X+f*W,r[5]=h*R+d*L+u*J+f*ce,r[9]=h*D+d*O+u*q+f*me,r[13]=h*M+d*z+u*oe+f*ge,r[2]=g*C+v*y+m*X+p*W,r[6]=g*R+v*L+m*J+p*ce,r[10]=g*D+v*O+m*q+p*me,r[14]=g*M+v*z+m*oe+p*ge,r[3]=S*C+w*y+x*X+A*W,r[7]=S*R+w*L+x*J+A*ce,r[11]=S*D+w*O+x*q+A*me,r[15]=S*M+w*z+x*oe+A*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*o*u+n*c*u+s*o*f-n*l*f)+v*(+t*l*f-t*c*u+r*a*u-s*a*f+s*c*h-r*l*h)+m*(+t*c*d-t*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-t*l*d+t*o*u+s*a*d-n*a*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],S=d*m*c-v*u*c+v*l*f-o*m*f-d*l*p+o*u*p,w=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,x=h*v*c-g*d*c+g*o*f-a*v*f-h*o*p+a*d*p,A=g*d*l-h*v*l-g*o*u+a*v*u+h*o*m-a*d*m,C=t*S+n*w+s*x+r*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=S*R,e[1]=(v*u*r-d*m*r-v*s*f+n*m*f+d*s*p-n*u*p)*R,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*p+n*l*p)*R,e[3]=(d*l*r-o*u*r-d*s*c+n*u*c+o*s*f-n*l*f)*R,e[4]=w*R,e[5]=(h*m*r-g*u*r+g*s*f-t*m*f-h*s*p+t*u*p)*R,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*R,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*f+t*l*f)*R,e[8]=x*R,e[9]=(g*d*r-h*v*r-g*n*f+t*v*f+h*n*p-t*d*p)*R,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*p+t*o*p)*R,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*f-t*o*f)*R,e[12]=A*R,e[13]=(h*v*s-g*d*s+g*n*u-t*v*u-h*n*m+t*d*m)*R,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*m-t*o*m)*R,e[15]=(a*d*s-h*o*s+h*n*l-t*d*l-a*n*u+t*o*u)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,v=a*h,m=a*d,p=o*d,S=l*c,w=l*h,x=l*d,A=n.x,C=n.y,R=n.z;return s[0]=(1-(v+p))*A,s[1]=(f+x)*A,s[2]=(g-w)*A,s[3]=0,s[4]=(f-x)*C,s[5]=(1-(u+p))*C,s[6]=(m+S)*C,s[7]=0,s[8]=(g+w)*R,s[9]=(m-S)*R,s[10]=(1-(u+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ji.set(s[0],s[1],s[2]).length();const a=Ji.set(s[4],s[5],s[6]).length(),o=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],dn.copy(this);const c=1/r,h=1/a,d=1/o;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=d,dn.elements[9]*=d,dn.elements[10]*=d,t.setFromRotationMatrix(dn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=An,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===An)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ra)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=An,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===An)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===ra)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ji=new k,dn=new st,Of=new k(0,0,0),Bf=new k(1,1,1),Kn=new k,Er=new k,jt=new k,pc=new st,mc=new $n;class Wn{constructor(e=0,t=0,n=0,s=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mc.setFromEuler(this),this.setFromQuaternion(mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class pu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zf=0;const gc=new k,Qi=new $n,Nn=new st,Tr=new k,zs=new k,Hf=new k,Gf=new $n,vc=new k(1,0,0),_c=new k(0,1,0),xc=new k(0,0,1),bc={type:"added"},Vf={type:"removed"},es={type:"childadded",child:null},za={type:"childremoved",child:null};class en extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new k,t=new Wn,n=new $n,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new ze}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(vc,e)}rotateY(e){return this.rotateOnAxis(_c,e)}rotateZ(e){return this.rotateOnAxis(xc,e)}translateOnAxis(e,t){return gc.copy(e).applyQuaternion(this.quaternion),this.position.add(gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vc,e)}translateY(e){return this.translateOnAxis(_c,e)}translateZ(e){return this.translateOnAxis(xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Tr.copy(e):Tr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(zs,Tr,this.up):Nn.lookAt(Tr,zs,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bc),es.child=e,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vf),za.child=e,this.dispatchEvent(za),za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bc),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,Hf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,Gf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}en.DEFAULT_UP=new k(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new k,Fn=new k,Ha=new k,kn=new k,ts=new k,ns=new k,yc=new k,Ga=new k,Va=new k,Wa=new k,$a=new ft,Xa=new ft,qa=new ft;class gn{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),fn.subVectors(e,t),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){fn.subVectors(s,t),Fn.subVectors(n,t),Ha.subVectors(e,t);const a=fn.dot(fn),o=fn.dot(Fn),l=fn.dot(Ha),c=Fn.dot(Fn),h=Fn.dot(Ha),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return $a.setScalar(0),Xa.setScalar(0),qa.setScalar(0),$a.fromBufferAttribute(e,t),Xa.fromBufferAttribute(e,n),qa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector($a,r.x),a.addScaledVector(Xa,r.y),a.addScaledVector(qa,r.z),a}static isFrontFacing(e,t,n,s){return fn.subVectors(n,t),Fn.subVectors(e,t),fn.cross(Fn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),fn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ts.subVectors(s,n),ns.subVectors(r,n),Ga.subVectors(e,n);const l=ts.dot(Ga),c=ns.dot(Ga);if(l<=0&&c<=0)return t.copy(n);Va.subVectors(e,s);const h=ts.dot(Va),d=ns.dot(Va);if(h>=0&&d<=h)return t.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ts,a);Wa.subVectors(e,r);const f=ts.dot(Wa),g=ns.dot(Wa);if(g>=0&&f<=g)return t.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ns,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return yc.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(yc,o);const p=1/(m+v+u);return a=v*p,o=u*p,t.copy(n).addScaledVector(ts,a).addScaledVector(ns,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Ya(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=Af(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ya(a,r,e+1/3),this.g=Ya(a,r,e),this.b=Ya(a,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=mu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Qe.workingToColorSpace(Lt.copy(this),e),Math.round(Ye(Lt.r*255,0,255))*65536+Math.round(Ye(Lt.g*255,0,255))*256+Math.round(Ye(Lt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Lt.copy(this),t);const n=Lt.r,s=Lt.g,r=Lt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Tt){Qe.workingToColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,s=Lt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(Ar);const n=Pa(jn.h,Ar.h,t),s=Pa(jn.s,Ar.s,t),r=Pa(jn.l,Ar.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Ke;Ke.NAMES=mu;let Wf=0;class da extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=Ii,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Po,this.blendDst=Io,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Po&&(n.blendSrc=this.blendSrc),this.blendDst!==Io&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wt extends da{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new k,Rr=new et;let $f=0;class _n{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$f++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lc,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXY(t,Rr.x,Rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ks(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lc&&(e.usage=this.usage),e}}class gu extends _n{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vu extends _n{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Li extends _n{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xf=0;const rn=new st,Ka=new en,is=new k,Zt=new Bi,Hs=new Bi,St=new k;class zi extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(du(e)?vu:gu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return Ka.lookAt(e),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Li(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Zt.min,Hs.min),Zt.expandByPoint(St),St.addVectors(Zt.max,Hs.max),Zt.expandByPoint(St)):(Zt.expandByPoint(Hs.min),Zt.expandByPoint(Hs.max))}Zt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)St.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(St));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)St.fromBufferAttribute(o,c),l&&(is.fromBufferAttribute(e,c),St.add(is)),s=Math.max(s,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new k,l[D]=new k;const c=new k,h=new k,d=new k,u=new et,f=new et,g=new et,v=new k,m=new k;function p(D,M,y){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,y),u.fromBufferAttribute(r,D),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[D].add(v),o[M].add(v),o[y].add(v),l[D].add(m),l[M].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let D=0,M=S.length;D<M;++D){const y=S[D],L=y.start,O=y.count;for(let z=L,X=L+O;z<X;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const w=new k,x=new k,A=new k,C=new k;function R(D){A.fromBufferAttribute(s,D),C.copy(A);const M=o[D];w.copy(M),w.sub(A.multiplyScalar(A.dot(M))).normalize(),x.crossVectors(C,M);const L=x.dot(l[D])<0?-1:1;a.setXYZW(D,w.x,w.y,w.z,L)}for(let D=0,M=S.length;D<M;++D){const y=S[D],L=y.start,O=y.count;for(let z=L,X=L+O;z<X;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,h=new k,d=new k;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new _n(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zi,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mc=new st,fi=new kf,Cr=new ur,Sc=new k,Pr=new k,Ir=new k,Lr=new k,ja=new k,Dr=new k,wc=new k,Ur=new k;class zt extends en{constructor(e=new zi,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(ja.fromBufferAttribute(d,e),a?Dr.addScaledVector(ja,h):Dr.addScaledVector(ja.sub(t),h))}t.add(Dr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(r),fi.copy(e.ray).recast(e.near),!(Cr.containsPoint(fi.origin)===!1&&(fi.intersectSphere(Cr,Sc)===null||fi.origin.distanceToSquared(Sc)>(e.far-e.near)**2))&&(Mc.copy(r).invert(),fi.copy(e.ray).applyMatrix4(Mc),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,A=w;x<A;x+=3){const C=o.getX(x),R=o.getX(x+1),D=o.getX(x+2);s=Nr(this,p,e,n,c,h,d,C,R,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const S=o.getX(m),w=o.getX(m+1),x=o.getX(m+2);s=Nr(this,a,e,n,c,h,d,S,w,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,A=w;x<A;x+=3){const C=x,R=x+1,D=x+2;s=Nr(this,p,e,n,c,h,d,C,R,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const S=m,w=m+1,x=m+2;s=Nr(this,a,e,n,c,h,d,S,w,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function qf(i,e,t,n,s,r,a,o){let l;if(e.side===Xt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===si,o),l===null)return null;Ur.copy(o),Ur.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ur);return c<t.near||c>t.far?null:{distance:c,point:Ur.clone(),object:i}}function Nr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Pr),i.getVertexPosition(l,Ir),i.getVertexPosition(c,Lr);const h=qf(i,e,t,n,Pr,Ir,Lr,wc);if(h){const d=new k;gn.getBarycoord(wc,Pr,Ir,Lr,d),s&&(h.uv=gn.getInterpolatedAttribute(s,o,l,c,d,new et)),r&&(h.uv1=gn.getInterpolatedAttribute(r,o,l,c,d,new et)),a&&(h.normal=gn.getInterpolatedAttribute(a,o,l,c,d,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new k,materialIndex:0};gn.getNormal(Pr,Ir,Lr,u.normal),h.face=u,h.barycoord=d}return h}class dr extends zi{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Li(c,3)),this.setAttribute("normal",new Li(h,3)),this.setAttribute("uv",new Li(d,2));function g(v,m,p,S,w,x,A,C,R,D,M){const y=x/R,L=A/D,O=x/2,z=A/2,X=C/2,J=R+1,q=D+1;let oe=0,W=0;const ce=new k;for(let me=0;me<q;me++){const ge=me*L-z;for(let De=0;De<J;De++){const Ie=De*y-O;ce[v]=Ie*S,ce[m]=ge*w,ce[p]=X,c.push(ce.x,ce.y,ce.z),ce[v]=0,ce[m]=0,ce[p]=C>0?1:-1,h.push(ce.x,ce.y,ce.z),d.push(De/R),d.push(1-me/D),oe+=1}}for(let me=0;me<D;me++)for(let ge=0;ge<R;ge++){const De=u+ge+J*me,Ie=u+ge+J*(me+1),We=u+(ge+1)+J*(me+1),Ze=u+(ge+1)+J*me;l.push(De,Ie,Ze),l.push(Ie,We,Ze),W+=6}o.addGroup(f,W,M),f+=W,u+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ot(i){const e={};for(let t=0;t<i.length;t++){const n=Cs(i[t]);for(const s in n)e[s]=n[s]}return e}function Yf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _u(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Kf={clone:Cs,merge:Ot};var jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends da{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jf,this.fragmentShader=Zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=Yf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xu extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new k,Ec=new et,Tc=new et;class mn extends xu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gl*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,Ec,Tc),t.subVectors(Tc,Ec)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ca*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ss=-90,rs=1;class Jf extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(ss,rs,e,t);s.layers=this.layers,this.add(s);const r=new mn(ss,rs,e,t);r.layers=this.layers,this.add(r);const a=new mn(ss,rs,e,t);a.layers=this.layers,this.add(a);const o=new mn(ss,rs,e,t);o.layers=this.layers,this.add(o);const l=new mn(ss,rs,e,t);l.layers=this.layers,this.add(l);const c=new mn(ss,rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class bu extends Pt{constructor(e=[],t=Ts,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qf extends ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new bu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dr(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:ii});r.uniforms.tEquirect.value=t;const a=new zt(s,r),o=t.minFilter;return t.minFilter===Ri&&(t.minFilter=Jt),new Jf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class Fr extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ep={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ep)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Fr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class tp extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class zl extends Pt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Qt,h=Qt,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cn extends _n{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const as=new st,Ac=new st,kr=[],Rc=new Bi,np=new st,Gs=new zt,Vs=new ur;class Ps extends zt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,np)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,as),Rc.copy(e.boundingBox).applyMatrix4(as),this.boundingBox.union(Rc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ur),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,as),Vs.copy(e.boundingSphere).applyMatrix4(as),this.boundingSphere.union(Vs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(n),e.ray.intersectsSphere(Vs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,as),Ac.multiplyMatrices(n,as),Gs.matrixWorld=Ac,Gs.raycast(e,kr);for(let a=0,o=kr.length;a<o;a++){const l=kr[a];l.instanceId=r,l.object=this,t.push(l)}kr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new cn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zl(new Float32Array(s*this.count),s,this.count,Nl,Tn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ja=new k,ip=new k,sp=new ze;class Mi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ja.subVectors(n,t).cross(ip.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ja),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sp.getNormalMatrix(e),s=this.coplanarPoint(Ja).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new ur,rp=new et(.5,.5),Or=new k;class yu{constructor(e=new Mi,t=new Mi,n=new Mi,s=new Mi,r=new Mi,a=new Mi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],S=r[12],w=r[13],x=r[14],A=r[15];if(s[0].setComponents(c-a,f-h,p-g,A-S).normalize(),s[1].setComponents(c+a,f+h,p+g,A+S).normalize(),s[2].setComponents(c+o,f+d,p+v,A+w).normalize(),s[3].setComponents(c-o,f-d,p-v,A-w).normalize(),n)s[4].setComponents(l,u,m,x).normalize(),s[5].setComponents(c-l,f-u,p-m,A-x).normalize();else if(s[4].setComponents(c-l,f-u,p-m,A-x).normalize(),t===An)s[5].setComponents(c+l,f+u,p+m,A+x).normalize();else if(t===ra)s[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){pi.center.set(0,0,0);const t=rp.distanceTo(e.center);return pi.radius=.7071067811865476+t,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Or.x=s.normal.x>0?e.max.x:e.min.x,Or.y=s.normal.y>0?e.max.y:e.min.y,Or.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Or)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hl extends Pt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mu extends Pt{constructor(e,t,n=Fi,s,r,a,o=Qt,l=Qt,c,h=nr,d=1){if(h!==nr&&h!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Su extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class tn extends zi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const S=p*u-a;for(let w=0;w<c;w++){const x=w*d-r;g.push(x,-S,0),v.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const w=S+c*p,x=S+c*(p+1),A=S+1+c*(p+1),C=S+1+c*p;f.push(w,x,C),f.push(x,A,C)}this.setIndex(f),this.setAttribute("position",new Li(g,3)),this.setAttribute("normal",new Li(v,3)),this.setAttribute("uv",new Li(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.width,e.height,e.widthSegments,e.heightSegments)}}class ap extends da{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class op extends da{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qa={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class lp{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const cp=new lp;class Gl{constructor(e){this.manager=e!==void 0?e:cp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Gl.DEFAULT_MATERIAL_NAME="__DEFAULT";const os=new WeakMap;class hp extends Gl{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Qa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=os.get(a);d===void 0&&(d=[],os.set(a,d)),d.push({onLoad:t,onError:s})}return a}const o=sr("img");function l(){h(),t&&t(this);const d=os.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}os.delete(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),Qa.remove(`image:${e}`);const u=os.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(d)}os.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Qa.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class vl extends Gl{constructor(e){super(e)}load(e,t,n,s){const r=new Pt,a=new hp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class wu extends xu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class up extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Cc(i,e,t,n){const s=dp(n);switch(t){case lu:return i*e;case Nl:return i*e/s.components*s.byteLength;case Fl:return i*e/s.components*s.byteLength;case hu:return i*e*2/s.components*s.byteLength;case kl:return i*e*2/s.components*s.byteLength;case cu:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case Ol:return i*e*4/s.components*s.byteLength;case jr:case Zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jr:case Qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vo:case $o:return Math.max(i,16)*Math.max(e,8)/4;case Go:case Wo:return Math.max(i,8)*Math.max(e,8)/2;case Xo:case qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case el:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case tl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case il:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case sl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case al:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ol:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ll:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case cl:case hl:case ul:return Math.ceil(i/4)*Math.ceil(e/4)*16;case dl:case fl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case pl:case ml:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dp(i){switch(i){case Vn:case su:return{byteLength:1,components:1};case er:case ru:case cr:return{byteLength:2,components:1};case Dl:case Ul:return{byteLength:2,components:4};case Fi:case Ll:case Tn:return{byteLength:4,components:1};case au:case ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Il);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Eu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function fp(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mp=`#ifdef USE_ALPHAHASH
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
#endif`,gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_p=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bp=`#ifdef USE_AOMAP
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
#endif`,yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mp=`#ifdef USE_BATCHING
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
#endif`,Sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ap=`#ifdef USE_IRIDESCENCE
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
#endif`,Rp=`#ifdef USE_BUMPMAP
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
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kp=`#define PI 3.141592653589793
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
} // validated`,Op=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bp=`vec3 transformedNormal = objectNormal;
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
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",$p=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tm=`#ifdef USE_GRADIENTMAP
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
}`,nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rm=`uniform bool receiveShadow;
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
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,um=`PhysicalMaterial material;
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
#endif`,dm=`struct PhysicalMaterial {
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
}`,fm=`
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
#endif`,pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sm=`#if defined( USE_POINTS_UV )
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
#endif`,wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cm=`#ifdef USE_MORPHTARGETS
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
#endif`,Pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fm=`#ifdef USE_NORMALMAP
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
#endif`,km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jm=`float getShadowMask() {
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
}`,Qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e0=`#ifdef USE_SKINNING
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
#endif`,t0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n0=`#ifdef USE_SKINNING
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
#endif`,i0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o0=`#ifdef USE_TRANSMISSION
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
#endif`,l0=`#ifdef USE_TRANSMISSION
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
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const f0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p0=`uniform sampler2D t2D;
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
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`#include <common>
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
}`,b0=`#if DEPTH_PACKING == 3200
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
}`,y0=`#define DISTANCE
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
}`,M0=`#define DISTANCE
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
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`uniform float scale;
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
}`,T0=`uniform vec3 diffuse;
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
}`,A0=`#include <common>
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
}`,R0=`uniform vec3 diffuse;
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
}`,C0=`#define LAMBERT
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
}`,P0=`#define LAMBERT
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
}`,I0=`#define MATCAP
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
}`,L0=`#define MATCAP
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
}`,D0=`#define NORMAL
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
}`,U0=`#define NORMAL
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
}`,N0=`#define PHONG
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
}`,F0=`#define PHONG
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
}`,k0=`#define STANDARD
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
}`,O0=`#define STANDARD
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
}`,B0=`#define TOON
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
}`,z0=`#define TOON
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
}`,H0=`uniform float size;
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
}`,G0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,W0=`uniform vec3 color;
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
}`,$0=`uniform float rotation;
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
}`,X0=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:pp,alphahash_pars_fragment:mp,alphamap_fragment:gp,alphamap_pars_fragment:vp,alphatest_fragment:_p,alphatest_pars_fragment:xp,aomap_fragment:bp,aomap_pars_fragment:yp,batching_pars_vertex:Mp,batching_vertex:Sp,begin_vertex:wp,beginnormal_vertex:Ep,bsdfs:Tp,iridescence_fragment:Ap,bumpmap_pars_fragment:Rp,clipping_planes_fragment:Cp,clipping_planes_pars_fragment:Pp,clipping_planes_pars_vertex:Ip,clipping_planes_vertex:Lp,color_fragment:Dp,color_pars_fragment:Up,color_pars_vertex:Np,color_vertex:Fp,common:kp,cube_uv_reflection_fragment:Op,defaultnormal_vertex:Bp,displacementmap_pars_vertex:zp,displacementmap_vertex:Hp,emissivemap_fragment:Gp,emissivemap_pars_fragment:Vp,colorspace_fragment:Wp,colorspace_pars_fragment:$p,envmap_fragment:Xp,envmap_common_pars_fragment:qp,envmap_pars_fragment:Yp,envmap_pars_vertex:Kp,envmap_physical_pars_fragment:am,envmap_vertex:jp,fog_vertex:Zp,fog_pars_vertex:Jp,fog_fragment:Qp,fog_pars_fragment:em,gradientmap_pars_fragment:tm,lightmap_pars_fragment:nm,lights_lambert_fragment:im,lights_lambert_pars_fragment:sm,lights_pars_begin:rm,lights_toon_fragment:om,lights_toon_pars_fragment:lm,lights_phong_fragment:cm,lights_phong_pars_fragment:hm,lights_physical_fragment:um,lights_physical_pars_fragment:dm,lights_fragment_begin:fm,lights_fragment_maps:pm,lights_fragment_end:mm,logdepthbuf_fragment:gm,logdepthbuf_pars_fragment:vm,logdepthbuf_pars_vertex:_m,logdepthbuf_vertex:xm,map_fragment:bm,map_pars_fragment:ym,map_particle_fragment:Mm,map_particle_pars_fragment:Sm,metalnessmap_fragment:wm,metalnessmap_pars_fragment:Em,morphinstance_vertex:Tm,morphcolor_vertex:Am,morphnormal_vertex:Rm,morphtarget_pars_vertex:Cm,morphtarget_vertex:Pm,normal_fragment_begin:Im,normal_fragment_maps:Lm,normal_pars_fragment:Dm,normal_pars_vertex:Um,normal_vertex:Nm,normalmap_pars_fragment:Fm,clearcoat_normal_fragment_begin:km,clearcoat_normal_fragment_maps:Om,clearcoat_pars_fragment:Bm,iridescence_pars_fragment:zm,opaque_fragment:Hm,packing:Gm,premultiplied_alpha_fragment:Vm,project_vertex:Wm,dithering_fragment:$m,dithering_pars_fragment:Xm,roughnessmap_fragment:qm,roughnessmap_pars_fragment:Ym,shadowmap_pars_fragment:Km,shadowmap_pars_vertex:jm,shadowmap_vertex:Zm,shadowmask_pars_fragment:Jm,skinbase_vertex:Qm,skinning_pars_vertex:e0,skinning_vertex:t0,skinnormal_vertex:n0,specularmap_fragment:i0,specularmap_pars_fragment:s0,tonemapping_fragment:r0,tonemapping_pars_fragment:a0,transmission_fragment:o0,transmission_pars_fragment:l0,uv_pars_fragment:c0,uv_pars_vertex:h0,uv_vertex:u0,worldpos_vertex:d0,background_vert:f0,background_frag:p0,backgroundCube_vert:m0,backgroundCube_frag:g0,cube_vert:v0,cube_frag:_0,depth_vert:x0,depth_frag:b0,distanceRGBA_vert:y0,distanceRGBA_frag:M0,equirect_vert:S0,equirect_frag:w0,linedashed_vert:E0,linedashed_frag:T0,meshbasic_vert:A0,meshbasic_frag:R0,meshlambert_vert:C0,meshlambert_frag:P0,meshmatcap_vert:I0,meshmatcap_frag:L0,meshnormal_vert:D0,meshnormal_frag:U0,meshphong_vert:N0,meshphong_frag:F0,meshphysical_vert:k0,meshphysical_frag:O0,meshtoon_vert:B0,meshtoon_frag:z0,points_vert:H0,points_frag:G0,shadow_vert:V0,shadow_frag:W0,sprite_vert:$0,sprite_frag:X0},de={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},En={basic:{uniforms:Ot([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ot([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ot([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ot([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ot([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ot([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ot([de.points,de.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ot([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ot([de.common,de.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ot([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ot([de.sprite,de.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ot([de.common,de.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ot([de.lights,de.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};En.physical={uniforms:Ot([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Br={r:0,b:0,g:0},mi=new Wn,q0=new st;function Y0(i,e,t,n,s,r,a){const o=new Ke(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?t:e).get(x)),x}function v(w){let x=!1;const A=g(w);A===null?p(o,l):A&&A.isColor&&(p(A,1),x=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,x){const A=g(x);A&&(A.isCubeTexture||A.mapping===ua)?(h===void 0&&(h=new zt(new dr(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Cs(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),mi.copy(x.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(q0.makeRotationFromEuler(mi)),h.material.toneMapped=Qe.getTransfer(A.colorSpace)!==it,(d!==A||u!==A.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=A,u=A.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new zt(new tn(2,2),new ri({name:"BackgroundMaterial",uniforms:Cs(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(A.colorSpace)!==it,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||u!==A.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=A,u=A.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,x){w.getRGB(Br,_u(i)),n.buffers.color.setClear(Br.r,Br.g,Br.b,x,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,x=1){o.set(w),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(o,l)},render:v,addToRenderList:m,dispose:S}}function K0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(y,L,O,z,X){let J=!1;const q=d(z,O,L);r!==q&&(r=q,c(r.object)),J=f(y,z,O,X),J&&g(y,z,O,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,x(y,L,O,z),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,L,O){const z=O.wireframe===!0;let X=n[y.id];X===void 0&&(X={},n[y.id]=X);let J=X[L.id];J===void 0&&(J={},X[L.id]=J);let q=J[z];return q===void 0&&(q=u(l()),J[z]=q),q}function u(y){const L=[],O=[],z=[];for(let X=0;X<t;X++)L[X]=0,O[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:z,object:y,attributes:{},index:null}}function f(y,L,O,z){const X=r.attributes,J=L.attributes;let q=0;const oe=O.getAttributes();for(const W in oe)if(oe[W].location>=0){const me=X[W];let ge=J[W];if(ge===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),me===void 0||me.attribute!==ge||ge&&me.data!==ge.data)return!0;q++}return r.attributesNum!==q||r.index!==z}function g(y,L,O,z){const X={},J=L.attributes;let q=0;const oe=O.getAttributes();for(const W in oe)if(oe[W].location>=0){let me=J[W];me===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(me=y.instanceColor));const ge={};ge.attribute=me,me&&me.data&&(ge.data=me.data),X[W]=ge,q++}r.attributes=X,r.attributesNum=q,r.index=z}function v(){const y=r.newAttributes;for(let L=0,O=y.length;L<O;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const O=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;O[y]=1,z[y]===0&&(i.enableVertexAttribArray(y),z[y]=1),X[y]!==L&&(i.vertexAttribDivisor(y,L),X[y]=L)}function S(){const y=r.newAttributes,L=r.enabledAttributes;for(let O=0,z=L.length;O<z;O++)L[O]!==y[O]&&(i.disableVertexAttribArray(O),L[O]=0)}function w(y,L,O,z,X,J,q){q===!0?i.vertexAttribIPointer(y,L,O,X,J):i.vertexAttribPointer(y,L,O,z,X,J)}function x(y,L,O,z){v();const X=z.attributes,J=O.getAttributes(),q=L.defaultAttributeValues;for(const oe in J){const W=J[oe];if(W.location>=0){let ce=X[oe];if(ce===void 0&&(oe==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),oe==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor)),ce!==void 0){const me=ce.normalized,ge=ce.itemSize,De=e.get(ce);if(De===void 0)continue;const Ie=De.buffer,We=De.type,Ze=De.bytesPerElement,Q=We===i.INT||We===i.UNSIGNED_INT||ce.gpuType===Ll;if(ce.isInterleavedBufferAttribute){const ne=ce.data,be=ne.stride,Ae=ce.offset;if(ne.isInstancedInterleavedBuffer){for(let ve=0;ve<W.locationSize;ve++)p(W.location+ve,ne.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ve=0;ve<W.locationSize;ve++)m(W.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let ve=0;ve<W.locationSize;ve++)w(W.location+ve,ge/W.locationSize,We,me,be*Ze,(Ae+ge/W.locationSize*ve)*Ze,Q)}else{if(ce.isInstancedBufferAttribute){for(let ne=0;ne<W.locationSize;ne++)p(W.location+ne,ce.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ne=0;ne<W.locationSize;ne++)m(W.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let ne=0;ne<W.locationSize;ne++)w(W.location+ne,ge/W.locationSize,We,me,ge*Ze,ge/W.locationSize*ne*Ze,Q)}}else if(q!==void 0){const me=q[oe];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(W.location,me);break;case 3:i.vertexAttrib3fv(W.location,me);break;case 4:i.vertexAttrib4fv(W.location,me);break;default:i.vertexAttrib1fv(W.location,me)}}}}S()}function A(){D();for(const y in n){const L=n[y];for(const O in L){const z=L[O];for(const X in z)h(z[X].object),delete z[X];delete L[O]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const O in L){const z=L[O];for(const X in z)h(z[X].object),delete z[X];delete L[O]}delete n[y.id]}function R(y){for(const L in n){const O=n[L];if(O[y.id]===void 0)continue;const z=O[y.id];for(const X in z)h(z[X].object),delete z[X];delete O[y.id]}}function D(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function j0(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*u[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Z0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const D=R===cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Tn&&!D)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:A,maxSamples:C}}function J0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Mi,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,w=S*4;let x=p.clippingState||null;l.value=x,x=h(g,u,w,f);for(let A=0;A!==w;++A)x[A]=t[A];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,x=f;w!==v;++w,x+=4)a.copy(d[w]).applyMatrix4(S,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Q0(i){let e=new WeakMap;function t(a,o){return o===Bo?a.mapping=Ts:o===zo&&(a.mapping=As),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Bo||o===zo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Qf(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Ss=4,Pc=[.125,.215,.35,.446,.526,.582],Ei=20,eo=new wu,Ic=new Ke;let to=null,no=0,io=0,so=!1;const Si=(1+Math.sqrt(5))/2,ls=1/Si,Lc=[new k(-Si,ls,0),new k(Si,ls,0),new k(-ls,0,Si),new k(ls,0,Si),new k(0,Si,-ls),new k(0,Si,ls),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],eg=new k;class Dc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=eg}=r;to=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(to,no,io),this._renderer.xr.enabled=so,e.scissorTest=!1,zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),to=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:cr,format:vn,colorSpace:Rs,depthBuffer:!1},s=Uc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tg(r)),this._blurMaterial=ng(r,e,t)}return s}_compileMaterial(e){const t=new zt(this._lodPlanes[0],e);this._renderer.compile(t,eo)}_sceneToCubeUV(e,t,n,s,r){const l=new mn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Ic),d.toneMapping=Hn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const v=new Wt({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),m=new zt(new dr,v);let p=!1;const S=e.background;S?S.isColor&&(v.color.copy(S),e.background=null,p=!0):(v.color.copy(Ic),p=!0);for(let w=0;w<6;w++){const x=w%3;x===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):x===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const A=this._cubeSize;zr(s,x*A,w>2?A:0,A,A),d.setRenderTarget(s),p&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ts||e.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new zt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;zr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,eo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Lc[(s-r-1)%Lc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new zt(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ei-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ei;m>Ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const p=[];let S=0;for(let R=0;R<Ei;++R){const D=R/v,M=Math.exp(-D*D/2);p.push(M),R===0?S+=M:R<m&&(S+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:w}=this;u.dTheta.value=g,u.mipInt.value=w-n;const x=this._sizeLods[s],A=3*x*(s>w-Ss?s-w+Ss:0),C=4*(this._cubeSize-x);zr(t,A,C,3*x,2*x),l.setRenderTarget(t),l.render(d,eo)}}function tg(i){const e=[],t=[],n=[];let s=i;const r=i-Ss+1+Pc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Ss?l=Pc[a-i+Ss-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,p=1,S=new Float32Array(v*g*f),w=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let C=0;C<f;C++){const R=C%3*2/3-1,D=C>2?0:-1,M=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];S.set(M,v*g*C),w.set(u,m*g*C);const y=[C,C,C,C,C,C];x.set(y,p*g*C)}const A=new zi;A.setAttribute("position",new _n(S,v)),A.setAttribute("uv",new _n(w,m)),A.setAttribute("faceIndex",new _n(x,p)),e.push(A),s>Ss&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Uc(i,e,t){const n=new ki(i,e,t);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ng(i,e,t){const n=new Float32Array(Ei),s=new k(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Nc(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Fc(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Vl(){return`

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
	`}function ig(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Bo||l===zo,h=l===Ts||l===As;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Dc(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Dc(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function sg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&rr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rg(i,e,t,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const S=f.array;v=f.version;for(let w=0,x=S.length;w<x;w+=3){const A=S[w+0],C=S[w+1],R=S[w+2];u.push(A,C,C,R,R,A)}}else if(g!==void 0){const S=g.array;v=g.version;for(let w=0,x=S.length/3-1;w<x;w+=3){const A=w+0,C=w+1,R=w+2;u.push(A,C,C,R,R,A)}}else return;const m=new(du(u)?vu:gu)(u,1);m.version=v;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function ag(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*a,g),t.update(f,n,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(u,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,v,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*v[S];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function og(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function lg(i,e,t){const n=new WeakMap,s=new ft;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let M=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let w=0;f===!0&&(w=1),g===!0&&(w=2),v===!0&&(w=3);let x=o.attributes.position.count*w,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const C=new Float32Array(x*A*4*d),R=new fu(C,x,A,d);R.type=Tn,R.needsUpdate=!0;const D=w*4;for(let y=0;y<d;y++){const L=m[y],O=p[y],z=S[y],X=x*A*4*y;for(let J=0;J<L.count;J++){const q=J*D;f===!0&&(s.fromBufferAttribute(L,J),C[X+q+0]=s.x,C[X+q+1]=s.y,C[X+q+2]=s.z,C[X+q+3]=0),g===!0&&(s.fromBufferAttribute(O,J),C[X+q+4]=s.x,C[X+q+5]=s.y,C[X+q+6]=s.z,C[X+q+7]=0),v===!0&&(s.fromBufferAttribute(z,J),C[X+q+8]=s.x,C[X+q+9]=s.y,C[X+q+10]=s.z,C[X+q+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new et(x,A)},n.set(o,u),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function cg(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Tu=new Pt,kc=new Mu(1,1),Au=new fu,Ru=new Nf,Cu=new bu,Oc=[],Bc=[],zc=new Float32Array(16),Hc=new Float32Array(9),Gc=new Float32Array(4);function Us(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Oc[s];if(r===void 0&&(r=new Float32Array(s),Oc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fa(i,e){let t=Bc[e];t===void 0&&(t=new Int32Array(e),Bc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function hg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ug(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function pg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;Gc.set(n),i.uniformMatrix2fv(this.addr,!1,Gc),Mt(t,n)}}function mg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;Hc.set(n),i.uniformMatrix3fv(this.addr,!1,Hc),Mt(t,n)}}function gg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;zc.set(n),i.uniformMatrix4fv(this.addr,!1,zc),Mt(t,n)}}function vg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function bg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function yg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function Sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function Eg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kc.compareFunction=uu,r=kc):r=Tu,t.setTexture2D(e||r,s)}function Tg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ru,s)}function Ag(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Cu,s)}function Rg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Au,s)}function Cg(i){switch(i){case 5126:return hg;case 35664:return ug;case 35665:return dg;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return vg;case 35667:case 35671:return _g;case 35668:case 35672:return xg;case 35669:case 35673:return bg;case 5125:return yg;case 36294:return Mg;case 36295:return Sg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Rg}}function Pg(i,e){i.uniform1fv(this.addr,e)}function Ig(i,e){const t=Us(e,this.size,2);i.uniform2fv(this.addr,t)}function Lg(i,e){const t=Us(e,this.size,3);i.uniform3fv(this.addr,t)}function Dg(i,e){const t=Us(e,this.size,4);i.uniform4fv(this.addr,t)}function Ug(i,e){const t=Us(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ng(i,e){const t=Us(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Fg(i,e){const t=Us(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function kg(i,e){i.uniform1iv(this.addr,e)}function Og(i,e){i.uniform2iv(this.addr,e)}function Bg(i,e){i.uniform3iv(this.addr,e)}function zg(i,e){i.uniform4iv(this.addr,e)}function Hg(i,e){i.uniform1uiv(this.addr,e)}function Gg(i,e){i.uniform2uiv(this.addr,e)}function Vg(i,e){i.uniform3uiv(this.addr,e)}function Wg(i,e){i.uniform4uiv(this.addr,e)}function $g(i,e,t){const n=this.cache,s=e.length,r=fa(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Tu,r[a])}function Xg(i,e,t){const n=this.cache,s=e.length,r=fa(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ru,r[a])}function qg(i,e,t){const n=this.cache,s=e.length,r=fa(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Cu,r[a])}function Yg(i,e,t){const n=this.cache,s=e.length,r=fa(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Au,r[a])}function Kg(i){switch(i){case 5126:return Pg;case 35664:return Ig;case 35665:return Lg;case 35666:return Dg;case 35674:return Ug;case 35675:return Ng;case 35676:return Fg;case 5124:case 35670:return kg;case 35667:case 35671:return Og;case 35668:case 35672:return Bg;case 35669:case 35673:return zg;case 5125:return Hg;case 36294:return Gg;case 36295:return Vg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}}class jg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cg(t.type)}}class Zg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kg(t.type)}}class Jg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const ro=/(\w+)(\])?(\[|\.)?/g;function Vc(i,e){i.seq.push(e),i.map[e.id]=e}function Qg(i,e,t){const n=i.name,s=n.length;for(ro.lastIndex=0;;){const r=ro.exec(n),a=ro.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Vc(t,c===void 0?new jg(o,i,e):new Zg(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Jg(o),Vc(t,d)),t=d}}}class ea{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Qg(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Wc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ev=37297;let tv=0;function nv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const $c=new ze;function iv(i){Qe._getMatrix($c,Qe.workingColorSpace,i);const e=`mat3( ${$c.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case sa:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+nv(i.getShaderSource(e),o)}else return r}function sv(i,e){const t=iv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rv(i,e){let t;switch(e){case lf:t="Linear";break;case cf:t="Reinhard";break;case hf:t="Cineon";break;case uf:t="ACESFilmic";break;case ff:t="AgX";break;case pf:t="Neutral";break;case df:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hr=new k;function av(){Qe.getLuminanceCoefficients(Hr);const i=Hr.x.toFixed(4),e=Hr.y.toFixed(4),t=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ov(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function lv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ys(i){return i!==""}function qc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hv=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(i){return i.replace(hv,dv)}const uv=new Map;function dv(i,e){let t=Ge[e];if(t===void 0){const n=uv.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _l(t)}const fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kc(i){return i.replace(fv,pv)}function pv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===tu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===zd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function gv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ts:case As:e="ENVMAP_TYPE_CUBE";break;case ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function _v(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nu:e="ENVMAP_BLENDING_MULTIPLY";break;case af:e="ENVMAP_BLENDING_MIX";break;case of:e="ENVMAP_BLENDING_ADD";break}return e}function xv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function bv(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=mv(t),c=gv(t),h=vv(t),d=_v(t),u=xv(t),f=ov(t),g=lv(r),v=s.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ys).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ys).join(`
`),p.length>0&&(p+=`
`)):(m=[jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),p=[jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Hn?rv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,sv("linearToOutputTexel",t.outputColorSpace),av(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),a=_l(a),a=qc(a,t),a=Yc(a,t),o=_l(o),o=qc(o,t),o=Yc(o,t),a=Kc(a),o=Kc(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=S+m+a,x=S+p+o,A=Wc(s,s.VERTEX_SHADER,w),C=Wc(s,s.FRAGMENT_SHADER,x);s.attachShader(v,A),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(L){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(v)||"",z=s.getShaderInfoLog(A)||"",X=s.getShaderInfoLog(C)||"",J=O.trim(),q=z.trim(),oe=X.trim();let W=!0,ce=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,A,C);else{const me=Xc(s,A,"vertex"),ge=Xc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+J+`
`+me+`
`+ge)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(q===""||oe==="")&&(ce=!1);ce&&(L.diagnostics={runnable:W,programLog:J,vertexShader:{log:q,prefix:m},fragmentShader:{log:oe,prefix:p}})}s.deleteShader(A),s.deleteShader(C),D=new ea(s,v),M=cv(s,v)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,ev)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=C,this}let yv=0;class Mv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Sv(e),t.set(e,n)),n}}class Sv{constructor(e){this.id=yv++,this.code=e,this.usedTimes=0}}function wv(i,e,t,n,s,r,a){const o=new pu,l=new Mv,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,L,O,z){const X=O.fog,J=z.geometry,q=M.isMeshStandardMaterial?O.environment:null,oe=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),W=oe&&oe.mapping===ua?oe.image.height:null,ce=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const me=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ge=me!==void 0?me.length:0;let De=0;J.morphAttributes.position!==void 0&&(De=1),J.morphAttributes.normal!==void 0&&(De=2),J.morphAttributes.color!==void 0&&(De=3);let Ie,We,Ze,Q;if(ce){const Be=En[ce];Ie=Be.vertexShader,We=Be.fragmentShader}else Ie=M.vertexShader,We=M.fragmentShader,l.update(M),Ze=l.getVertexShaderID(M),Q=l.getFragmentShaderID(M);const ne=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Ae=z.isInstancedMesh===!0,ve=z.isBatchedMesh===!0,$e=!!M.map,He=!!M.matcap,P=!!oe,rt=!!M.aoMap,Fe=!!M.lightMap,Re=!!M.bumpMap,ye=!!M.normalMap,at=!!M.displacementMap,Me=!!M.emissiveMap,ke=!!M.metalnessMap,_t=!!M.roughnessMap,ut=M.anisotropy>0,T=M.clearcoat>0,_=M.dispersion>0,F=M.iridescence>0,j=M.sheen>0,ie=M.transmission>0,Y=ut&&!!M.anisotropyMap,Se=T&&!!M.clearcoatMap,he=T&&!!M.clearcoatNormalMap,we=T&&!!M.clearcoatRoughnessMap,_e=F&&!!M.iridescenceMap,se=F&&!!M.iridescenceThicknessMap,ue=j&&!!M.sheenColorMap,B=j&&!!M.sheenRoughnessMap,G=!!M.specularMap,$=!!M.specularColorMap,ae=!!M.specularIntensityMap,I=ie&&!!M.transmissionMap,ee=ie&&!!M.thicknessMap,te=!!M.gradientMap,re=!!M.alphaMap,Z=M.alphaTest>0,K=!!M.alphaHash,fe=!!M.extensions;let Te=Hn;M.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Te=i.toneMapping);const Ve={shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:Ie,fragmentShader:We,defines:M.defines,customVertexShaderID:Ze,customFragmentShaderID:Q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ve,batchingColor:ve&&z._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&z.instanceColor!==null,instancingMorph:Ae&&z.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Rs,alphaToCoverage:!!M.alphaToCoverage,map:$e,matcap:He,envMap:P,envMapMode:P&&oe.mapping,envMapCubeUVHeight:W,aoMap:rt,lightMap:Fe,bumpMap:Re,normalMap:ye,displacementMap:u&&at,emissiveMap:Me,normalMapObjectSpace:ye&&M.normalMapType===xf,normalMapTangentSpace:ye&&M.normalMapType===_f,metalnessMap:ke,roughnessMap:_t,anisotropy:ut,anisotropyMap:Y,clearcoat:T,clearcoatMap:Se,clearcoatNormalMap:he,clearcoatRoughnessMap:we,dispersion:_,iridescence:F,iridescenceMap:_e,iridescenceThicknessMap:se,sheen:j,sheenColorMap:ue,sheenRoughnessMap:B,specularMap:G,specularColorMap:$,specularIntensityMap:ae,transmission:ie,transmissionMap:I,thicknessMap:ee,gradientMap:te,opaque:M.transparent===!1&&M.blending===Ii&&M.alphaToCoverage===!1,alphaMap:re,alphaTest:Z,alphaHash:K,combine:M.combine,mapUv:$e&&v(M.map.channel),aoMapUv:rt&&v(M.aoMap.channel),lightMapUv:Fe&&v(M.lightMap.channel),bumpMapUv:Re&&v(M.bumpMap.channel),normalMapUv:ye&&v(M.normalMap.channel),displacementMapUv:at&&v(M.displacementMap.channel),emissiveMapUv:Me&&v(M.emissiveMap.channel),metalnessMapUv:ke&&v(M.metalnessMap.channel),roughnessMapUv:_t&&v(M.roughnessMap.channel),anisotropyMapUv:Y&&v(M.anisotropyMap.channel),clearcoatMapUv:Se&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:se&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:B&&v(M.sheenRoughnessMap.channel),specularMapUv:G&&v(M.specularMap.channel),specularColorMapUv:$&&v(M.specularColorMap.channel),specularIntensityMapUv:ae&&v(M.specularIntensityMap.channel),transmissionMapUv:I&&v(M.transmissionMap.channel),thicknessMapUv:ee&&v(M.thicknessMap.channel),alphaMapUv:re&&v(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ye||ut),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!J.attributes.uv&&($e||re),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:z.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:De,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:$e&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===it,decodeVideoTextureEmissive:Me&&M.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(M.emissiveMap.colorSpace)===it,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===on,flipSided:M.side===Xt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:fe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&M.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)y.push(L),y.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(S(y,M),w(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function S(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function w(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){const y=g[M.type];let L;if(y){const O=En[y];L=Kf.clone(O.uniforms)}else L=M.uniforms;return L}function A(M,y){let L;for(let O=0,z=h.length;O<z;O++){const X=h[O];if(X.cacheKey===y){L=X,++L.usedTimes;break}}return L===void 0&&(L=new bv(i,y,M,r),h.push(L)),L}function C(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function R(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:C,releaseShaderCache:R,programs:h,dispose:D}}function Ev(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Tv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Zc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,u,f,g,v,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function o(d,u,f,g,v,m){const p=a(d,u,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,u,f,g,v,m){const p=a(d,u,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||Tv),n.length>1&&n.sort(u||Zc),s.length>1&&s.sort(u||Zc)}function h(){for(let d=e,u=i.length;d<u;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Av(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Jc,i.set(n,[a])):s>=r.length?(a=new Jc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Rv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Ke};break;case"SpotLight":t={position:new k,direction:new k,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Cv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Pv=0;function Iv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Lv(i){const e=new Rv,t=Cv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const s=new k,r=new st,a=new st;function o(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,S=0,w=0,x=0,A=0,C=0,R=0;c.sort(Iv);for(let M=0,y=c.length;M<y;M++){const L=c[M],O=L.color,z=L.intensity,X=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*z,d+=O.g*z,u+=O.b*z;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],z);R++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const oe=L.shadow,W=t.get(L);W.shadowIntensity=oe.intensity,W.shadowBias=oe.bias,W.shadowNormalBias=oe.normalBias,W.shadowRadius=oe.radius,W.shadowMapSize=oe.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=L.shadow.matrix,S++}n.directional[f]=q,f++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(O).multiplyScalar(z),q.distance=X,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[v]=q;const oe=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,oe.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[v]=oe.matrix,L.castShadow){const W=t.get(L);W.shadowIntensity=oe.intensity,W.shadowBias=oe.bias,W.shadowNormalBias=oe.normalBias,W.shadowRadius=oe.radius,W.shadowMapSize=oe.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=J,x++}v++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(O).multiplyScalar(z),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=q,m++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const oe=L.shadow,W=t.get(L);W.shadowIntensity=oe.intensity,W.shadowBias=oe.bias,W.shadowNormalBias=oe.normalBias,W.shadowRadius=oe.radius,W.shadowMapSize=oe.mapSize,W.shadowCameraNear=oe.camera.near,W.shadowCameraFar=oe.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=L.shadow.matrix,w++}n.point[g]=q,g++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(z),q.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==S||D.numPointShadows!==w||D.numSpotShadows!==x||D.numSpotMaps!==A||D.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=x+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,D.directionalLength=f,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=S,D.numPointShadows=w,D.numSpotShadows=x,D.numSpotMaps=A,D.numLightProbes=R,n.version=Pv++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const w=c[p];if(w.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(w.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(w.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),u++}else if(w.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Qc(i){const e=new Lv(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Dv(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Qc(i),e.set(s,[o])):r>=a.length?(o=new Qc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nv=`uniform sampler2D shadow_pass;
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
}`;function Fv(i,e,t){let n=new yu;const s=new et,r=new et,a=new ft,o=new ap({depthPacking:vf}),l=new op,c={},h=t.maxTextureSize,d={[si]:Xt,[Xt]:si,[on]:on},u=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Uv,fragmentShader:Nv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new zi;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new zt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tu;let p=this.type;this.render=function(C,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(ii),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=p!==On&&this.type===On,X=p===On&&this.type!==On;for(let J=0,q=C.length;J<q;J++){const oe=C[J],W=oe.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ce=W.getFrameExtents();if(s.multiply(ce),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,W.mapSize.y=r.y)),W.map===null||z===!0||X===!0){const ge=this.type!==On?{minFilter:Qt,magFilter:Qt}:{};W.map!==null&&W.map.dispose(),W.map=new ki(s.x,s.y,ge),W.map.texture.name=oe.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const me=W.getViewportCount();for(let ge=0;ge<me;ge++){const De=W.getViewport(ge);a.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),O.viewport(a),W.updateMatrices(oe,ge),n=W.getFrustum(),x(R,D,W.camera,oe,this.type)}W.isPointLightShadow!==!0&&this.type===On&&S(W,D),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,y,L)};function S(C,R){const D=e.update(v);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ki(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,D,u,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,D,f,v,null)}function w(C,R,D,M){let y=null;const L=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)y=L;else if(y=D.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=y.uuid,z=R.uuid;let X=c[O];X===void 0&&(X={},c[O]=X);let J=X[z];J===void 0&&(J=y.clone(),X[z]=J,R.addEventListener("dispose",A)),y=J}if(y.visible=R.visible,y.wireframe=R.wireframe,M===On?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:d[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=i.properties.get(y);O.light=D}return y}function x(C,R,D,M,y){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===On)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const z=e.update(C),X=C.material;if(Array.isArray(X)){const J=z.groups;for(let q=0,oe=J.length;q<oe;q++){const W=J[q],ce=X[W.materialIndex];if(ce&&ce.visible){const me=w(C,ce,M,y);C.onBeforeShadow(i,C,R,D,z,me,W),i.renderBufferDirect(D,null,z,me,C,W),C.onAfterShadow(i,C,R,D,z,me,W)}}}else if(X.visible){const J=w(C,X,M,y);C.onBeforeShadow(i,C,R,D,z,J,null),i.renderBufferDirect(D,null,z,J,C,null),C.onAfterShadow(i,C,R,D,z,J,null)}}const O=C.children;for(let z=0,X=O.length;z<X;z++)x(O[z],R,D,M,y)}function A(C){C.target.removeEventListener("dispose",A);for(const D in c){const M=c[D],y=C.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const kv={[Lo]:Do,[Uo]:ko,[No]:Oo,[Es]:Fo,[Do]:Lo,[ko]:Uo,[Oo]:No,[Fo]:Es};function Ov(i,e){function t(){let I=!1;const ee=new ft;let te=null;const re=new ft(0,0,0,0);return{setMask:function(Z){te!==Z&&!I&&(i.colorMask(Z,Z,Z,Z),te=Z)},setLocked:function(Z){I=Z},setClear:function(Z,K,fe,Te,Ve){Ve===!0&&(Z*=Te,K*=Te,fe*=Te),ee.set(Z,K,fe,Te),re.equals(ee)===!1&&(i.clearColor(Z,K,fe,Te),re.copy(ee))},reset:function(){I=!1,te=null,re.set(-1,0,0,0)}}}function n(){let I=!1,ee=!1,te=null,re=null,Z=null;return{setReversed:function(K){if(ee!==K){const fe=e.get("EXT_clip_control");K?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),ee=K;const Te=Z;Z=null,this.setClear(Te)}},getReversed:function(){return ee},setTest:function(K){K?ne(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(K){te!==K&&!I&&(i.depthMask(K),te=K)},setFunc:function(K){if(ee&&(K=kv[K]),re!==K){switch(K){case Lo:i.depthFunc(i.NEVER);break;case Do:i.depthFunc(i.ALWAYS);break;case Uo:i.depthFunc(i.LESS);break;case Es:i.depthFunc(i.LEQUAL);break;case No:i.depthFunc(i.EQUAL);break;case Fo:i.depthFunc(i.GEQUAL);break;case ko:i.depthFunc(i.GREATER);break;case Oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=K}},setLocked:function(K){I=K},setClear:function(K){Z!==K&&(ee&&(K=1-K),i.clearDepth(K),Z=K)},reset:function(){I=!1,te=null,re=null,Z=null,ee=!1}}}function s(){let I=!1,ee=null,te=null,re=null,Z=null,K=null,fe=null,Te=null,Ve=null;return{setTest:function(Be){I||(Be?ne(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Be){ee!==Be&&!I&&(i.stencilMask(Be),ee=Be)},setFunc:function(Be,Ut,vt){(te!==Be||re!==Ut||Z!==vt)&&(i.stencilFunc(Be,Ut,vt),te=Be,re=Ut,Z=vt)},setOp:function(Be,Ut,vt){(K!==Be||fe!==Ut||Te!==vt)&&(i.stencilOp(Be,Ut,vt),K=Be,fe=Ut,Te=vt)},setLocked:function(Be){I=Be},setClear:function(Be){Ve!==Be&&(i.clearStencil(Be),Ve=Be)},reset:function(){I=!1,ee=null,te=null,re=null,Z=null,K=null,fe=null,Te=null,Ve=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,S=null,w=null,x=null,A=null,C=null,R=new Ke(0,0,0),D=0,M=!1,y=null,L=null,O=null,z=null,X=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,oe=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=oe>=1):W.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=oe>=2);let ce=null,me={};const ge=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),Ie=new ft().fromArray(ge),We=new ft().fromArray(De);function Ze(I,ee,te,re){const Z=new Uint8Array(4),K=i.createTexture();i.bindTexture(I,K),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let fe=0;fe<te;fe++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,Z):i.texImage2D(ee+fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Z);return K}const Q={};Q[i.TEXTURE_2D]=Ze(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(Es),Re(!1),ye(sc),ne(i.CULL_FACE),rt(ii);function ne(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function be(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Ae(I,ee){return d[I]!==ee?(i.bindFramebuffer(I,ee),d[I]=ee,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ee),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function ve(I,ee){let te=f,re=!1;if(I){te=u.get(ee),te===void 0&&(te=[],u.set(ee,te));const Z=I.textures;if(te.length!==Z.length||te[0]!==i.COLOR_ATTACHMENT0){for(let K=0,fe=Z.length;K<fe;K++)te[K]=i.COLOR_ATTACHMENT0+K;te.length=Z.length,re=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,re=!0);re&&i.drawBuffers(te)}function $e(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const He={[wi]:i.FUNC_ADD,[Gd]:i.FUNC_SUBTRACT,[Vd]:i.FUNC_REVERSE_SUBTRACT};He[Wd]=i.MIN,He[$d]=i.MAX;const P={[Xd]:i.ZERO,[qd]:i.ONE,[Yd]:i.SRC_COLOR,[Po]:i.SRC_ALPHA,[ef]:i.SRC_ALPHA_SATURATE,[Jd]:i.DST_COLOR,[jd]:i.DST_ALPHA,[Kd]:i.ONE_MINUS_SRC_COLOR,[Io]:i.ONE_MINUS_SRC_ALPHA,[Qd]:i.ONE_MINUS_DST_COLOR,[Zd]:i.ONE_MINUS_DST_ALPHA,[tf]:i.CONSTANT_COLOR,[nf]:i.ONE_MINUS_CONSTANT_COLOR,[sf]:i.CONSTANT_ALPHA,[rf]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(I,ee,te,re,Z,K,fe,Te,Ve,Be){if(I===ii){v===!0&&(be(i.BLEND),v=!1);return}if(v===!1&&(ne(i.BLEND),v=!0),I!==Hd){if(I!==m||Be!==M){if((p!==wi||x!==wi)&&(i.blendEquation(i.FUNC_ADD),p=wi,x=wi),Be)switch(I){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qs:i.blendFunc(i.ONE,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ac:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case rc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ac:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,w=null,A=null,C=null,R.set(0,0,0),D=0,m=I,M=Be}return}Z=Z||ee,K=K||te,fe=fe||re,(ee!==p||Z!==x)&&(i.blendEquationSeparate(He[ee],He[Z]),p=ee,x=Z),(te!==S||re!==w||K!==A||fe!==C)&&(i.blendFuncSeparate(P[te],P[re],P[K],P[fe]),S=te,w=re,A=K,C=fe),(Te.equals(R)===!1||Ve!==D)&&(i.blendColor(Te.r,Te.g,Te.b,Ve),R.copy(Te),D=Ve),m=I,M=!1}function Fe(I,ee){I.side===on?be(i.CULL_FACE):ne(i.CULL_FACE);let te=I.side===Xt;ee&&(te=!te),Re(te),I.blending===Ii&&I.transparent===!1?rt(ii):rt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const re=I.stencilWrite;o.setTest(re),re&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Me(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(I){y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),y=I)}function ye(I){I!==Od?(ne(i.CULL_FACE),I!==L&&(I===sc?i.cullFace(i.BACK):I===Bd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),L=I}function at(I){I!==O&&(q&&i.lineWidth(I),O=I)}function Me(I,ee,te){I?(ne(i.POLYGON_OFFSET_FILL),(z!==ee||X!==te)&&(i.polygonOffset(ee,te),z=ee,X=te)):be(i.POLYGON_OFFSET_FILL)}function ke(I){I?ne(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function _t(I){I===void 0&&(I=i.TEXTURE0+J-1),ce!==I&&(i.activeTexture(I),ce=I)}function ut(I,ee,te){te===void 0&&(ce===null?te=i.TEXTURE0+J-1:te=ce);let re=me[te];re===void 0&&(re={type:void 0,texture:void 0},me[te]=re),(re.type!==I||re.texture!==ee)&&(ce!==te&&(i.activeTexture(te),ce=te),i.bindTexture(I,ee||Q[I]),re.type=I,re.texture=ee)}function T(){const I=me[ce];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(I){Ie.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Ie.copy(I))}function B(I){We.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),We.copy(I))}function G(I,ee){let te=c.get(ee);te===void 0&&(te=new WeakMap,c.set(ee,te));let re=te.get(I);re===void 0&&(re=i.getUniformBlockIndex(ee,I.name),te.set(I,re))}function $(I,ee){const re=c.get(ee).get(I);l.get(ee)!==re&&(i.uniformBlockBinding(ee,re,I.__bindingPointIndex),l.set(ee,re))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ce=null,me={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,S=null,w=null,x=null,A=null,C=null,R=new Ke(0,0,0),D=0,M=!1,y=null,L=null,O=null,z=null,X=null,Ie.set(0,0,i.canvas.width,i.canvas.height),We.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:be,bindFramebuffer:Ae,drawBuffers:ve,useProgram:$e,setBlending:rt,setMaterial:Fe,setFlipSided:Re,setCullFace:ye,setLineWidth:at,setPolygonOffset:Me,setScissorTest:ke,activeTexture:_t,bindTexture:ut,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:_e,texImage3D:se,updateUBOMapping:G,uniformBlockBinding:$,texStorage2D:he,texStorage3D:we,texSubImage2D:j,texSubImage3D:ie,compressedTexSubImage2D:Y,compressedTexSubImage3D:Se,scissor:ue,viewport:B,reset:ae}}function Bv(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return f?new OffscreenCanvas(T,_):sr("canvas")}function v(T,_,F){let j=1;const ie=ut(T);if((ie.width>F||ie.height>F)&&(j=F/Math.max(ie.width,ie.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(j*ie.width),Se=Math.floor(j*ie.height);d===void 0&&(d=g(Y,Se));const he=_?g(Y,Se):d;return he.width=Y,he.height=Se,he.getContext("2d").drawImage(T,0,0,Y,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Y+"x"+Se+")."),he}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(T,_,F,j,ie=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=_;if(_===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),_===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){const Se=ie?sa:Qe.getTransfer(j);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=Se===it?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(T,_){let F;return T?_===null||_===Fi||_===tr?F=i.DEPTH24_STENCIL8:_===Tn?F=i.DEPTH32F_STENCIL8:_===er&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Fi||_===tr?F=i.DEPTH_COMPONENT24:_===Tn?F=i.DEPTH_COMPONENT32F:_===er&&(F=i.DEPTH_COMPONENT16),F}function A(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Qt&&T.minFilter!==Jt?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function C(T){const _=T.target;_.removeEventListener("dispose",C),D(_),_.isVideoTexture&&h.delete(_)}function R(T){const _=T.target;_.removeEventListener("dispose",R),y(_)}function D(T){const _=n.get(T);if(_.__webglInit===void 0)return;const F=T.source,j=u.get(F);if(j){const ie=j[_.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&M(T),Object.keys(j).length===0&&u.delete(F)}n.remove(T)}function M(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const F=T.source,j=u.get(F);delete j[_.__cacheKey],a.memory.textures--}function y(T){const _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let ie=0;ie<_.__webglFramebuffer[j].length;ie++)i.deleteFramebuffer(_.__webglFramebuffer[j][ie]);else i.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)i.deleteFramebuffer(_.__webglFramebuffer[j]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=T.textures;for(let j=0,ie=F.length;j<ie;j++){const Y=n.get(F[j]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(F[j])}n.remove(T)}let L=0;function O(){L=0}function z(){const T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function X(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function J(T,_){const F=n.get(T);if(T.isVideoTexture&&ke(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(F,T,_);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function q(T,_){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Q(F,T,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function oe(T,_){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Q(F,T,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function W(T,_){const F=n.get(T);if(T.version>0&&F.__version!==T.version){ne(F,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const ce={[ia]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[Ho]:i.MIRRORED_REPEAT},me={[Qt]:i.NEAREST,[mf]:i.NEAREST_MIPMAP_NEAREST,[xr]:i.NEAREST_MIPMAP_LINEAR,[Jt]:i.LINEAR,[Ra]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},ge={[bf]:i.NEVER,[Tf]:i.ALWAYS,[yf]:i.LESS,[uu]:i.LEQUAL,[Mf]:i.EQUAL,[Ef]:i.GEQUAL,[Sf]:i.GREATER,[wf]:i.NOTEQUAL};function De(T,_){if(_.type===Tn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Jt||_.magFilter===Ra||_.magFilter===xr||_.magFilter===Ri||_.minFilter===Jt||_.minFilter===Ra||_.minFilter===xr||_.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ce[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ce[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ce[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,me[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,me[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ge[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Qt||_.minFilter!==xr&&_.minFilter!==Ri||_.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ie(T,_){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",C));const j=_.source;let ie=u.get(j);ie===void 0&&(ie={},u.set(j,ie));const Y=X(_);if(Y!==T.__cacheKey){ie[Y]===void 0&&(ie[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ie[Y].usedTimes++;const Se=ie[T.__cacheKey];Se!==void 0&&(ie[T.__cacheKey].usedTimes--,Se.usedTimes===0&&M(_)),T.__cacheKey=Y,T.__webglTexture=ie[Y].texture}return F}function We(T,_,F){return Math.floor(Math.floor(T/F)/_)}function Ze(T,_,F,j){const Y=T.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,j,_.data);else{Y.sort((se,ue)=>se.start-ue.start);let Se=0;for(let se=1;se<Y.length;se++){const ue=Y[Se],B=Y[se],G=ue.start+ue.count,$=We(B.start,_.width,4),ae=We(ue.start,_.width,4);B.start<=G+1&&$===ae&&We(B.start+B.count-1,_.width,4)===$?ue.count=Math.max(ue.count,B.start+B.count-ue.start):(++Se,Y[Se]=B)}Y.length=Se+1;const he=i.getParameter(i.UNPACK_ROW_LENGTH),we=i.getParameter(i.UNPACK_SKIP_PIXELS),_e=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let se=0,ue=Y.length;se<ue;se++){const B=Y[se],G=Math.floor(B.start/4),$=Math.ceil(B.count/4),ae=G%_.width,I=Math.floor(G/_.width),ee=$,te=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,ae,I,ee,te,F,j,_.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,he),i.pixelStorei(i.UNPACK_SKIP_PIXELS,we),i.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function Q(T,_,F){let j=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=i.TEXTURE_3D);const ie=Ie(T,_),Y=_.source;t.bindTexture(j,T.__webglTexture,i.TEXTURE0+F);const Se=n.get(Y);if(Y.version!==Se.__version||ie===!0){t.activeTexture(i.TEXTURE0+F);const he=Qe.getPrimaries(Qe.workingColorSpace),we=_.colorSpace===Bn?null:Qe.getPrimaries(_.colorSpace),_e=_.colorSpace===Bn||he===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let se=v(_.image,!1,s.maxTextureSize);se=_t(_,se);const ue=r.convert(_.format,_.colorSpace),B=r.convert(_.type);let G=w(_.internalFormat,ue,B,_.colorSpace,_.isVideoTexture);De(j,_);let $;const ae=_.mipmaps,I=_.isVideoTexture!==!0,ee=Se.__version===void 0||ie===!0,te=Y.dataReady,re=A(_,se);if(_.isDepthTexture)G=x(_.format===ir,_.type),ee&&(I?t.texStorage2D(i.TEXTURE_2D,1,G,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,G,se.width,se.height,0,ue,B,null));else if(_.isDataTexture)if(ae.length>0){I&&ee&&t.texStorage2D(i.TEXTURE_2D,re,G,ae[0].width,ae[0].height);for(let Z=0,K=ae.length;Z<K;Z++)$=ae[Z],I?te&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,$.width,$.height,ue,B,$.data):t.texImage2D(i.TEXTURE_2D,Z,G,$.width,$.height,0,ue,B,$.data);_.generateMipmaps=!1}else I?(ee&&t.texStorage2D(i.TEXTURE_2D,re,G,se.width,se.height),te&&Ze(_,se,ue,B)):t.texImage2D(i.TEXTURE_2D,0,G,se.width,se.height,0,ue,B,se.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,G,ae[0].width,ae[0].height,se.depth);for(let Z=0,K=ae.length;Z<K;Z++)if($=ae[Z],_.format!==vn)if(ue!==null)if(I){if(te)if(_.layerUpdates.size>0){const fe=Cc($.width,$.height,_.format,_.type);for(const Te of _.layerUpdates){const Ve=$.data.subarray(Te*fe/$.data.BYTES_PER_ELEMENT,(Te+1)*fe/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,Te,$.width,$.height,1,ue,Ve)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,$.width,$.height,se.depth,ue,$.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,G,$.width,$.height,se.depth,0,$.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,$.width,$.height,se.depth,ue,B,$.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,G,$.width,$.height,se.depth,0,ue,B,$.data)}else{I&&ee&&t.texStorage2D(i.TEXTURE_2D,re,G,ae[0].width,ae[0].height);for(let Z=0,K=ae.length;Z<K;Z++)$=ae[Z],_.format!==vn?ue!==null?I?te&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,$.width,$.height,ue,$.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,G,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?te&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,$.width,$.height,ue,B,$.data):t.texImage2D(i.TEXTURE_2D,Z,G,$.width,$.height,0,ue,B,$.data)}else if(_.isDataArrayTexture)if(I){if(ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,G,se.width,se.height,se.depth),te)if(_.layerUpdates.size>0){const Z=Cc(se.width,se.height,_.format,_.type);for(const K of _.layerUpdates){const fe=se.data.subarray(K*Z/se.data.BYTES_PER_ELEMENT,(K+1)*Z/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,se.width,se.height,1,ue,B,fe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ue,B,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,G,se.width,se.height,se.depth,0,ue,B,se.data);else if(_.isData3DTexture)I?(ee&&t.texStorage3D(i.TEXTURE_3D,re,G,se.width,se.height,se.depth),te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ue,B,se.data)):t.texImage3D(i.TEXTURE_3D,0,G,se.width,se.height,se.depth,0,ue,B,se.data);else if(_.isFramebufferTexture){if(ee)if(I)t.texStorage2D(i.TEXTURE_2D,re,G,se.width,se.height);else{let Z=se.width,K=se.height;for(let fe=0;fe<re;fe++)t.texImage2D(i.TEXTURE_2D,fe,G,Z,K,0,ue,B,null),Z>>=1,K>>=1}}else if(ae.length>0){if(I&&ee){const Z=ut(ae[0]);t.texStorage2D(i.TEXTURE_2D,re,G,Z.width,Z.height)}for(let Z=0,K=ae.length;Z<K;Z++)$=ae[Z],I?te&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ue,B,$):t.texImage2D(i.TEXTURE_2D,Z,G,ue,B,$);_.generateMipmaps=!1}else if(I){if(ee){const Z=ut(se);t.texStorage2D(i.TEXTURE_2D,re,G,Z.width,Z.height)}te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,B,se)}else t.texImage2D(i.TEXTURE_2D,0,G,ue,B,se);m(_)&&p(j),Se.__version=Y.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ne(T,_,F){if(_.image.length!==6)return;const j=Ie(T,_),ie=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const Y=n.get(ie);if(ie.version!==Y.__version||j===!0){t.activeTexture(i.TEXTURE0+F);const Se=Qe.getPrimaries(Qe.workingColorSpace),he=_.colorSpace===Bn?null:Qe.getPrimaries(_.colorSpace),we=_.colorSpace===Bn||Se===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const _e=_.isCompressedTexture||_.image[0].isCompressedTexture,se=_.image[0]&&_.image[0].isDataTexture,ue=[];for(let K=0;K<6;K++)!_e&&!se?ue[K]=v(_.image[K],!0,s.maxCubemapSize):ue[K]=se?_.image[K].image:_.image[K],ue[K]=_t(_,ue[K]);const B=ue[0],G=r.convert(_.format,_.colorSpace),$=r.convert(_.type),ae=w(_.internalFormat,G,$,_.colorSpace),I=_.isVideoTexture!==!0,ee=Y.__version===void 0||j===!0,te=ie.dataReady;let re=A(_,B);De(i.TEXTURE_CUBE_MAP,_);let Z;if(_e){I&&ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,re,ae,B.width,B.height);for(let K=0;K<6;K++){Z=ue[K].mipmaps;for(let fe=0;fe<Z.length;fe++){const Te=Z[fe];_.format!==vn?G!==null?I?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe,0,0,Te.width,Te.height,G,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe,ae,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe,0,0,Te.width,Te.height,G,$,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe,ae,Te.width,Te.height,0,G,$,Te.data)}}}else{if(Z=_.mipmaps,I&&ee){Z.length>0&&re++;const K=ut(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,re,ae,K.width,K.height)}for(let K=0;K<6;K++)if(se){I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ue[K].width,ue[K].height,G,$,ue[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ae,ue[K].width,ue[K].height,0,G,$,ue[K].data);for(let fe=0;fe<Z.length;fe++){const Ve=Z[fe].image[K].image;I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe+1,0,0,Ve.width,Ve.height,G,$,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe+1,ae,Ve.width,Ve.height,0,G,$,Ve.data)}}else{I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,G,$,ue[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ae,G,$,ue[K]);for(let fe=0;fe<Z.length;fe++){const Te=Z[fe];I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe+1,0,0,G,$,Te.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,fe+1,ae,G,$,Te.image[K])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),Y.__version=ie.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function be(T,_,F,j,ie,Y){const Se=r.convert(F.format,F.colorSpace),he=r.convert(F.type),we=w(F.internalFormat,Se,he,F.colorSpace),_e=n.get(_),se=n.get(F);if(se.__renderTarget=_,!_e.__hasExternalTextures){const ue=Math.max(1,_.width>>Y),B=Math.max(1,_.height>>Y);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,Y,we,ue,B,_.depth,0,Se,he,null):t.texImage2D(ie,Y,we,ue,B,0,Se,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ie,se.__webglTexture,0,at(_)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ie,se.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(T,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){const j=_.depthTexture,ie=j&&j.isDepthTexture?j.type:null,Y=x(_.stencilBuffer,ie),Se=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=at(_);Me(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,Y,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,T)}else{const j=_.textures;for(let ie=0;ie<j.length;ie++){const Y=j[ie],Se=r.convert(Y.format,Y.colorSpace),he=r.convert(Y.type),we=w(Y.internalFormat,Se,he,Y.colorSpace),_e=at(_);F&&Me(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,we,_.width,_.height):Me(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,we,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,we,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(_.depthTexture);j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);const ie=j.__webglTexture,Y=at(_);if(_.depthTexture.format===nr)Me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(_.depthTexture.format===ir)Me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function $e(T){const _=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){const ie=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",ie)};j.addEventListener("dispose",ie),_.__depthDisposeCallback=ie}_.__boundDepthTexture=j}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const j=T.texture.mipmaps;j&&j.length>0?ve(_.__webglFramebuffer[0],T):ve(_.__webglFramebuffer,T)}else if(F){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=i.createRenderbuffer(),Ae(_.__webglDepthbuffer[j],T,!1);else{const ie=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Y)}}else{const j=T.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ae(_.__webglDepthbuffer,T,!1);else{const ie=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(T,_,F){const j=n.get(T);_!==void 0&&be(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&$e(T)}function P(T){const _=T.texture,F=n.get(T),j=n.get(_);T.addEventListener("dispose",R);const ie=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Se=ie.length>1;if(Se||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=_.version,a.memory.textures++),Y){F.__webglFramebuffer=[];for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[he]=[];for(let we=0;we<_.mipmaps.length;we++)F.__webglFramebuffer[he][we]=i.createFramebuffer()}else F.__webglFramebuffer[he]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let he=0;he<_.mipmaps.length;he++)F.__webglFramebuffer[he]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Se)for(let he=0,we=ie.length;he<we;he++){const _e=n.get(ie[he]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Me(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let he=0;he<ie.length;he++){const we=ie[he];F.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[he]);const _e=r.convert(we.format,we.colorSpace),se=r.convert(we.type),ue=w(we.internalFormat,_e,se,we.colorSpace,T.isXRRenderTarget===!0),B=at(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,B,ue,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,F.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),De(i.TEXTURE_CUBE_MAP,_);for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0)for(let we=0;we<_.mipmaps.length;we++)be(F.__webglFramebuffer[he][we],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,we);else be(F.__webglFramebuffer[he],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let he=0,we=ie.length;he<we;he++){const _e=ie[he],se=n.get(_e);let ue=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ue=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,se.__webglTexture),De(ue,_e),be(F.__webglFramebuffer,T,_e,i.COLOR_ATTACHMENT0+he,ue,0),m(_e)&&p(ue)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,j.__webglTexture),De(he,_),_.mipmaps&&_.mipmaps.length>0)for(let we=0;we<_.mipmaps.length;we++)be(F.__webglFramebuffer[we],T,_,i.COLOR_ATTACHMENT0,he,we);else be(F.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,he,0);m(_)&&p(he),t.unbindTexture()}T.depthBuffer&&$e(T)}function rt(T){const _=T.textures;for(let F=0,j=_.length;F<j;F++){const ie=_[F];if(m(ie)){const Y=S(T),Se=n.get(ie).__webglTexture;t.bindTexture(Y,Se),p(Y),t.unbindTexture()}}}const Fe=[],Re=[];function ye(T){if(T.samples>0){if(Me(T)===!1){const _=T.textures,F=T.width,j=T.height;let ie=i.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(T),he=_.length>1;if(he)for(let _e=0;_e<_.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const we=T.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let _e=0;_e<_.length;_e++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[_e]);const se=n.get(_[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,F,j,0,0,F,j,ie,i.NEAREST),l===!0&&(Fe.length=0,Re.length=0,Fe.push(i.COLOR_ATTACHMENT0+_e),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Fe.push(Y),Re.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let _e=0;_e<_.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Se.__webglColorRenderbuffer[_e]);const se=n.get(_[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function at(T){return Math.min(s.maxSamples,T.samples)}function Me(T){const _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ke(T){const _=a.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function _t(T,_){const F=T.colorSpace,j=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Rs&&F!==Bn&&(Qe.getTransfer(F)===it?(j!==vn||ie!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function ut(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=J,this.setTexture2DArray=q,this.setTexture3D=oe,this.setTextureCube=W,this.rebindTextures=He,this.setupRenderTarget=P,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Me}function zv(i,e){function t(n,s=Bn){let r;const a=Qe.getTransfer(s);if(n===Vn)return i.UNSIGNED_BYTE;if(n===Dl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===au)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ou)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===su)return i.BYTE;if(n===ru)return i.SHORT;if(n===er)return i.UNSIGNED_SHORT;if(n===Ll)return i.INT;if(n===Fi)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===cr)return i.HALF_FLOAT;if(n===lu)return i.ALPHA;if(n===cu)return i.RGB;if(n===vn)return i.RGBA;if(n===nr)return i.DEPTH_COMPONENT;if(n===ir)return i.DEPTH_STENCIL;if(n===Nl)return i.RED;if(n===Fl)return i.RED_INTEGER;if(n===hu)return i.RG;if(n===kl)return i.RG_INTEGER;if(n===Ol)return i.RGBA_INTEGER;if(n===jr||n===Zr||n===Jr||n===Qr)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Go||n===Vo||n===Wo||n===$o)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xo||n===qo||n===Yo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xo||n===qo)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ko||n===jo||n===Zo||n===Jo||n===Qo||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ko)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===el)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===il)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===al)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ol)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ll)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cl||n===hl||n===ul)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===cl)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dl||n===fl||n===pl||n===ml)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===dl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gv=`
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

}`;class Vv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Su(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ri({vertexShader:Hv,fragmentShader:Gv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zt(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wv extends Ds{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Vv,p={},S=t.getContextAttributes();let w=null,x=null;const A=[],C=[],R=new et;let D=null;const M=new mn;M.viewport=new ft;const y=new mn;y.viewport=new ft;const L=[M,y],O=new up;let z=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ne=A[Q];return ne===void 0&&(ne=new Za,A[Q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Q){let ne=A[Q];return ne===void 0&&(ne=new Za,A[Q]=ne),ne.getGripSpace()},this.getHand=function(Q){let ne=A[Q];return ne===void 0&&(ne=new Za,A[Q]=ne),ne.getHandSpace()};function J(Q){const ne=C.indexOf(Q.inputSource);if(ne===-1)return;const be=A[ne];be!==void 0&&(be.update(Q.inputSource,Q.frame,c||a),be.dispatchEvent({type:Q.type,data:Q.inputSource}))}function q(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",oe);for(let Q=0;Q<A.length;Q++){const ne=C[Q];ne!==null&&(C[Q]=null,A[Q].disconnect(ne))}z=null,X=null,m.reset();for(const Q in p)delete p[Q];e.setRenderTarget(w),f=null,u=null,d=null,s=null,x=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",q),s.addEventListener("inputsourceschange",oe),S.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ae=null,ve=null;S.depth&&(ve=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=S.stencil?ir:nr,Ae=S.stencil?tr:Fi);const $e={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer($e),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new ki(u.textureWidth,u.textureHeight,{format:vn,type:Vn,depthTexture:new Mu(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const be={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ki(f.framebufferWidth,f.framebufferHeight,{format:vn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ze.setContext(s),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe(Q){for(let ne=0;ne<Q.removed.length;ne++){const be=Q.removed[ne],Ae=C.indexOf(be);Ae>=0&&(C[Ae]=null,A[Ae].disconnect(be))}for(let ne=0;ne<Q.added.length;ne++){const be=Q.added[ne];let Ae=C.indexOf(be);if(Ae===-1){for(let $e=0;$e<A.length;$e++)if($e>=C.length){C.push(be),Ae=$e;break}else if(C[$e]===null){C[$e]=be,Ae=$e;break}if(Ae===-1)break}const ve=A[Ae];ve&&ve.connect(be)}}const W=new k,ce=new k;function me(Q,ne,be){W.setFromMatrixPosition(ne.matrixWorld),ce.setFromMatrixPosition(be.matrixWorld);const Ae=W.distanceTo(ce),ve=ne.projectionMatrix.elements,$e=be.projectionMatrix.elements,He=ve[14]/(ve[10]-1),P=ve[14]/(ve[10]+1),rt=(ve[9]+1)/ve[5],Fe=(ve[9]-1)/ve[5],Re=(ve[8]-1)/ve[0],ye=($e[8]+1)/$e[0],at=He*Re,Me=He*ye,ke=Ae/(-Re+ye),_t=ke*-Re;if(ne.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(_t),Q.translateZ(ke),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ve[10]===-1)Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const ut=He+ke,T=P+ke,_=at-_t,F=Me+(Ae-_t),j=rt*P/T*ut,ie=Fe*P/T*ut;Q.projectionMatrix.makePerspective(_,F,j,ie,ut,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ge(Q,ne){ne===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ne.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ne=Q.near,be=Q.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(be=m.depthFar)),O.near=y.near=M.near=ne,O.far=y.far=M.far=be,(z!==O.near||X!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),z=O.near,X=O.far),O.layers.mask=Q.layers.mask|6,M.layers.mask=O.layers.mask&3,y.layers.mask=O.layers.mask&5;const Ae=Q.parent,ve=O.cameras;ge(O,Ae);for(let $e=0;$e<ve.length;$e++)ge(ve[$e],Ae);ve.length===2?me(O,M,y):O.projectionMatrix.copy(M.projectionMatrix),De(Q,O,Ae)};function De(Q,ne,be){be===null?Q.matrix.copy(ne.matrixWorld):(Q.matrix.copy(be.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ne.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=gl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Q){return p[Q]};let Ie=null;function We(Q,ne){if(h=ne.getViewerPose(c||a),g=ne,h!==null){const be=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ae=!1;be.length!==O.cameras.length&&(O.cameras.length=0,Ae=!0);for(let P=0;P<be.length;P++){const rt=be[P];let Fe=null;if(f!==null)Fe=f.getViewport(rt);else{const ye=d.getViewSubImage(u,rt);Fe=ye.viewport,P===0&&(e.setRenderTargetTextures(x,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(x))}let Re=L[P];Re===void 0&&(Re=new mn,Re.layers.enable(P),Re.viewport=new ft,L[P]=Re),Re.matrix.fromArray(rt.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(rt.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),P===0&&(O.matrix.copy(Re.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ae===!0&&O.cameras.push(Re)}const ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const P=d.getDepthInformation(be[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(ve&&ve.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let P=0;P<be.length;P++){const rt=be[P].camera;if(rt){let Fe=p[rt];Fe||(Fe=new Su,p[rt]=Fe);const Re=d.getCameraImage(rt);Fe.sourceTexture=Re}}}}for(let be=0;be<A.length;be++){const Ae=C[be],ve=A[be];Ae!==null&&ve!==void 0&&ve.update(Ae,ne,c||a)}Ie&&Ie(Q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Ze=new Eu;Ze.setAnimationLoop(We),this.setAnimationLoop=function(Q){Ie=Q},this.dispose=function(){}}}const gi=new Wn,$v=new st;function Xv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,_u(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,w,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),w=S.envMap,x=S.envMapRotation;w&&(m.envMap.value=w,gi.copy(x),gi.x*=-1,gi.y*=-1,gi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),m.envMapRotation.value.setFromMatrix4($v.makeRotationFromEuler(gi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function qv(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){const x=w.program;n.uniformBlockBinding(S,x)}function c(S,w){let x=s[S.id];x===void 0&&(g(S),x=h(S),s[S.id]=x,S.addEventListener("dispose",m));const A=w.program;n.updateUBOMapping(S,A);const C=e.render.frame;r[S.id]!==C&&(u(S),r[S.id]=C)}function h(S){const w=d();S.__bindingPointIndex=w;const x=i.createBuffer(),A=S.__size,C=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,A,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,x),x}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const w=s[S.id],x=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let C=0,R=x.length;C<R;C++){const D=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,y=D.length;M<y;M++){const L=D[M];if(f(L,C,M,A)===!0){const O=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let J=0;J<z.length;J++){const q=z[J],oe=v(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,O+X,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,X),X+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,w,x,A){const C=S.value,R=w+"_"+x;if(A[R]===void 0)return typeof C=="number"||typeof C=="boolean"?A[R]=C:A[R]=C.clone(),!0;{const D=A[R];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return A[R]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(S){const w=S.uniforms;let x=0;const A=16;for(let R=0,D=w.length;R<D;R++){const M=Array.isArray(w[R])?w[R]:[w[R]];for(let y=0,L=M.length;y<L;y++){const O=M[y],z=Array.isArray(O.value)?O.value:[O.value];for(let X=0,J=z.length;X<J;X++){const q=z[X],oe=v(q),W=x%A,ce=W%oe.boundary,me=W+ce;x+=ce,me!==0&&A-me<oe.storage&&(x+=A-me),O.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=oe.storage}}}const C=x%A;return C>0&&(x+=A-C),S.__size=x,S.__cache={},this}function v(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function m(S){const w=S.target;w.removeEventListener("dispose",m);const x=a.indexOf(w.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Yv{constructor(e={}){const{canvas:t=Rf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const S=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let A=!1;this._outputColorSpace=Tt;let C=0,R=0,D=null,M=-1,y=null;const L=new ft,O=new ft;let z=null;const X=new Ke(0);let J=0,q=t.width,oe=t.height,W=1,ce=null,me=null;const ge=new ft(0,0,q,oe),De=new ft(0,0,q,oe);let Ie=!1;const We=new yu;let Ze=!1,Q=!1;const ne=new st,be=new k,Ae=new ft,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function He(){return D===null?W:1}let P=n;function rt(b,U){return t.getContext(b,U)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Il}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",Z,!1),P===null){const U="webgl2";if(P=rt(U,b),P===null)throw rt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Fe,Re,ye,at,Me,ke,_t,ut,T,_,F,j,ie,Y,Se,he,we,_e,se,ue,B,G,$,ae;function I(){Fe=new sg(P),Fe.init(),G=new zv(P,Fe),Re=new Z0(P,Fe,e,G),ye=new Ov(P,Fe),Re.reversedDepthBuffer&&u&&ye.buffers.depth.setReversed(!0),at=new og(P),Me=new Ev,ke=new Bv(P,Fe,ye,Me,Re,G,at),_t=new Q0(x),ut=new ig(x),T=new fp(P),$=new K0(P,T),_=new rg(P,T,at,$),F=new cg(P,_,T,at),se=new lg(P,Re,ke),he=new J0(Me),j=new wv(x,_t,ut,Fe,Re,$,he),ie=new Xv(x,Me),Y=new Av,Se=new Dv(Fe),_e=new Y0(x,_t,ut,ye,F,f,l),we=new Fv(x,F,Re),ae=new qv(P,at,Re,ye),ue=new j0(P,Fe,at),B=new ag(P,Fe,at),at.programs=j.programs,x.capabilities=Re,x.extensions=Fe,x.properties=Me,x.renderLists=Y,x.shadowMap=we,x.state=ye,x.info=at}I();const ee=new Wv(x,P);this.xr=ee,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=Fe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Fe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(q,oe,!1))},this.getSize=function(b){return b.set(q,oe)},this.setSize=function(b,U,H=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,oe=U,t.width=Math.floor(b*W),t.height=Math.floor(U*W),H===!0&&(t.style.width=b+"px",t.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(q*W,oe*W).floor()},this.setDrawingBufferSize=function(b,U,H){q=b,oe=U,W=H,t.width=Math.floor(b*H),t.height=Math.floor(U*H),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(ge)},this.setViewport=function(b,U,H,V){b.isVector4?ge.set(b.x,b.y,b.z,b.w):ge.set(b,U,H,V),ye.viewport(L.copy(ge).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(De)},this.setScissor=function(b,U,H,V){b.isVector4?De.set(b.x,b.y,b.z,b.w):De.set(b,U,H,V),ye.scissor(O.copy(De).multiplyScalar(W).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(b){ye.setScissorTest(Ie=b)},this.setOpaqueSort=function(b){ce=b},this.setTransparentSort=function(b){me=b},this.getClearColor=function(b){return b.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,H=!0){let V=0;if(b){let N=!1;if(D!==null){const le=D.texture.format;N=le===Ol||le===kl||le===Fl}if(N){const le=D.texture.type,pe=le===Vn||le===Fi||le===er||le===tr||le===Dl||le===Ul,Ee=_e.getClearColor(),xe=_e.getClearAlpha(),Le=Ee.r,Ue=Ee.g,Ce=Ee.b;pe?(g[0]=Le,g[1]=Ue,g[2]=Ce,g[3]=xe,P.clearBufferuiv(P.COLOR,0,g)):(v[0]=Le,v[1]=Ue,v[2]=Ce,v[3]=xe,P.clearBufferiv(P.COLOR,0,v))}else V|=P.COLOR_BUFFER_BIT}U&&(V|=P.DEPTH_BUFFER_BIT),H&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),_e.dispose(),Y.dispose(),Se.dispose(),Me.dispose(),_t.dispose(),ut.dispose(),F.dispose(),$.dispose(),ae.dispose(),j.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",vt),ee.removeEventListener("sessionend",yn),Nt.stop()};function te(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=at.autoReset,U=we.enabled,H=we.autoUpdate,V=we.needsUpdate,N=we.type;I(),at.autoReset=b,we.enabled=U,we.autoUpdate=H,we.needsUpdate=V,we.type=N}function Z(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function K(b){const U=b.target;U.removeEventListener("dispose",K),fe(U)}function fe(b){Te(b),Me.remove(b)}function Te(b){const U=Me.get(b).programs;U!==void 0&&(U.forEach(function(H){j.releaseProgram(H)}),b.isShaderMaterial&&j.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,H,V,N,le){U===null&&(U=ve);const pe=N.isMesh&&N.matrixWorld.determinant()<0,Ee=$i(b,U,H,V,N);ye.setMaterial(V,pe);let xe=H.index,Le=1;if(V.wireframe===!0){if(xe=_.getWireframeAttribute(H),xe===void 0)return;Le=2}const Ue=H.drawRange,Ce=H.attributes.position;let qe=Ue.start*Le,tt=(Ue.start+Ue.count)*Le;le!==null&&(qe=Math.max(qe,le.start*Le),tt=Math.min(tt,(le.start+le.count)*Le)),xe!==null?(qe=Math.max(qe,0),tt=Math.min(tt,xe.count)):Ce!=null&&(qe=Math.max(qe,0),tt=Math.min(tt,Ce.count));const gt=tt-qe;if(gt<0||gt===1/0)return;$.setup(N,V,Ee,H,xe);let lt,ot=ue;if(xe!==null&&(lt=T.get(xe),ot=B,ot.setIndex(lt)),N.isMesh)V.wireframe===!0?(ye.setLineWidth(V.wireframeLinewidth*He()),ot.setMode(P.LINES)):ot.setMode(P.TRIANGLES);else if(N.isLine){let Pe=V.linewidth;Pe===void 0&&(Pe=1),ye.setLineWidth(Pe*He()),N.isLineSegments?ot.setMode(P.LINES):N.isLineLoop?ot.setMode(P.LINE_LOOP):ot.setMode(P.LINE_STRIP)}else N.isPoints?ot.setMode(P.POINTS):N.isSprite&&ot.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)rr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))ot.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Pe=N._multiDrawStarts,pt=N._multiDrawCounts,Je=N._multiDrawCount,Yt=xe?T.get(xe).bytesPerElement:1,Xi=Me.get(V).currentProgram.getUniforms();for(let Kt=0;Kt<Je;Kt++)Xi.setValue(P,"_gl_DrawID",Kt),ot.render(Pe[Kt]/Yt,pt[Kt])}else if(N.isInstancedMesh)ot.renderInstances(qe,gt,N.count);else if(H.isInstancedBufferGeometry){const Pe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,pt=Math.min(H.instanceCount,Pe);ot.renderInstances(qe,gt,pt)}else ot.render(qe,gt)};function Ve(b,U,H){b.transparent===!0&&b.side===on&&b.forceSinglePass===!1?(b.side=Xt,b.needsUpdate=!0,ci(b,U,H),b.side=si,b.needsUpdate=!0,ci(b,U,H),b.side=on):ci(b,U,H)}this.compile=function(b,U,H=null){H===null&&(H=b),p=Se.get(H),p.init(U),w.push(p),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==H&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const V=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const le=N.material;if(le)if(Array.isArray(le))for(let pe=0;pe<le.length;pe++){const Ee=le[pe];Ve(Ee,H,N),V.add(Ee)}else Ve(le,H,N),V.add(le)}),p=w.pop(),V},this.compileAsync=function(b,U,H=null){const V=this.compile(b,U,H);return new Promise(N=>{function le(){if(V.forEach(function(pe){Me.get(pe).currentProgram.isReady()&&V.delete(pe)}),V.size===0){N(b);return}setTimeout(le,10)}Fe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Be=null;function Ut(b){Be&&Be(b)}function vt(){Nt.stop()}function yn(){Nt.start()}const Nt=new Eu;Nt.setAnimationLoop(Ut),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(b){Be=b,ee.setAnimationLoop(b),b===null?Nt.stop():Nt.start()},ee.addEventListener("sessionstart",vt),ee.addEventListener("sessionend",yn),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(U),U=ee.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,U,D),p=Se.get(b,w.length),p.init(U),w.push(p),ne.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),We.setFromProjectionMatrix(ne,An,U.reversedDepth),Q=this.localClippingEnabled,Ze=he.init(this.clippingPlanes,Q),m=Y.get(b,S.length),m.init(),S.push(m),ee.enabled===!0&&ee.isPresenting===!0){const le=x.xr.getDepthSensingMesh();le!==null&&Ln(le,U,-1/0,x.sortObjects)}Ln(b,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ce,me),$e=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,$e&&_e.addToRenderList(m,b),this.info.render.frame++,Ze===!0&&he.beginShadows();const H=p.state.shadowsArray;we.render(H,b,U),Ze===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const le=U.cameras;if(N.length>0)for(let pe=0,Ee=le.length;pe<Ee;pe++){const xe=le[pe];Gi(V,N,b,xe)}$e&&_e.render(b);for(let pe=0,Ee=le.length;pe<Ee;pe++){const xe=le[pe];Hi(m,b,xe,xe.viewport)}}else N.length>0&&Gi(V,N,b,U),$e&&_e.render(b),Hi(m,b,U);D!==null&&R===0&&(ke.updateMultisampleRenderTarget(D),ke.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(x,b,U),$.resetDefaultState(),M=-1,y=null,w.pop(),w.length>0?(p=w[w.length-1],Ze===!0&&he.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Ln(b,U,H,V){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||We.intersectsSprite(b)){V&&Ae.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ne);const pe=F.update(b),Ee=b.material;Ee.visible&&m.push(b,pe,Ee,H,Ae.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||We.intersectsObject(b))){const pe=F.update(b),Ee=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ae.copy(b.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ae.copy(pe.boundingSphere.center)),Ae.applyMatrix4(b.matrixWorld).applyMatrix4(ne)),Array.isArray(Ee)){const xe=pe.groups;for(let Le=0,Ue=xe.length;Le<Ue;Le++){const Ce=xe[Le],qe=Ee[Ce.materialIndex];qe&&qe.visible&&m.push(b,pe,qe,H,Ae.z,Ce)}}else Ee.visible&&m.push(b,pe,Ee,H,Ae.z,null)}}const le=b.children;for(let pe=0,Ee=le.length;pe<Ee;pe++)Ln(le[pe],U,H,V)}function Hi(b,U,H,V){const N=b.opaque,le=b.transmissive,pe=b.transparent;p.setupLightsView(H),Ze===!0&&he.setGlobalState(x.clippingPlanes,H),V&&ye.viewport(L.copy(V)),N.length>0&&li(N,U,H),le.length>0&&li(le,U,H),pe.length>0&&li(pe,U,H),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Gi(b,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new ki(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?cr:Vn,minFilter:Ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const le=p.state.transmissionRenderTarget[V.id],pe=V.viewport||L;le.setSize(pe.z*x.transmissionResolutionScale,pe.w*x.transmissionResolutionScale);const Ee=x.getRenderTarget(),xe=x.getActiveCubeFace(),Le=x.getActiveMipmapLevel();x.setRenderTarget(le),x.getClearColor(X),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),$e&&_e.render(H);const Ue=x.toneMapping;x.toneMapping=Hn;const Ce=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),Ze===!0&&he.setGlobalState(x.clippingPlanes,V),li(b,H,V),ke.updateMultisampleRenderTarget(le),ke.updateRenderTargetMipmap(le),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let tt=0,gt=U.length;tt<gt;tt++){const lt=U[tt],ot=lt.object,Pe=lt.geometry,pt=lt.material,Je=lt.group;if(pt.side===on&&ot.layers.test(V.layers)){const Yt=pt.side;pt.side=Xt,pt.needsUpdate=!0,Vi(ot,H,V,Pe,pt,Je),pt.side=Yt,pt.needsUpdate=!0,qe=!0}}qe===!0&&(ke.updateMultisampleRenderTarget(le),ke.updateRenderTargetMipmap(le))}x.setRenderTarget(Ee,xe,Le),x.setClearColor(X,J),Ce!==void 0&&(V.viewport=Ce),x.toneMapping=Ue}function li(b,U,H){const V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,le=b.length;N<le;N++){const pe=b[N],Ee=pe.object,xe=pe.geometry,Le=pe.group;let Ue=pe.material;Ue.allowOverride===!0&&V!==null&&(Ue=V),Ee.layers.test(H.layers)&&Vi(Ee,U,H,xe,Ue,Le)}}function Vi(b,U,H,V,N,le){b.onBeforeRender(x,U,H,V,N,le),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(x,U,H,V,b,le),N.transparent===!0&&N.side===on&&N.forceSinglePass===!1?(N.side=Xt,N.needsUpdate=!0,x.renderBufferDirect(H,U,V,N,b,le),N.side=si,N.needsUpdate=!0,x.renderBufferDirect(H,U,V,N,b,le),N.side=on):x.renderBufferDirect(H,U,V,N,b,le),b.onAfterRender(x,U,H,V,N,le)}function ci(b,U,H){U.isScene!==!0&&(U=ve);const V=Me.get(b),N=p.state.lights,le=p.state.shadowsArray,pe=N.state.version,Ee=j.getParameters(b,N.state,le,U,H),xe=j.getProgramCacheKey(Ee);let Le=V.programs;V.environment=b.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(b.isMeshStandardMaterial?ut:_t).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Le===void 0&&(b.addEventListener("dispose",K),Le=new Map,V.programs=Le);let Ue=Le.get(xe);if(Ue!==void 0){if(V.currentProgram===Ue&&V.lightsStateVersion===pe)return _r(b,Ee),Ue}else Ee.uniforms=j.getUniforms(b),b.onBeforeCompile(Ee,x),Ue=j.acquireProgram(Ee,xe),Le.set(xe,Ue),V.uniforms=Ee.uniforms;const Ce=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ce.clippingPlanes=he.uniform),_r(b,Ee),V.needsLights=Ta(b),V.lightsStateVersion=pe,V.needsLights&&(Ce.ambientLightColor.value=N.state.ambient,Ce.lightProbe.value=N.state.probe,Ce.directionalLights.value=N.state.directional,Ce.directionalLightShadows.value=N.state.directionalShadow,Ce.spotLights.value=N.state.spot,Ce.spotLightShadows.value=N.state.spotShadow,Ce.rectAreaLights.value=N.state.rectArea,Ce.ltc_1.value=N.state.rectAreaLTC1,Ce.ltc_2.value=N.state.rectAreaLTC2,Ce.pointLights.value=N.state.point,Ce.pointLightShadows.value=N.state.pointShadow,Ce.hemisphereLights.value=N.state.hemi,Ce.directionalShadowMap.value=N.state.directionalShadowMap,Ce.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ce.spotShadowMap.value=N.state.spotShadowMap,Ce.spotLightMatrix.value=N.state.spotLightMatrix,Ce.spotLightMap.value=N.state.spotLightMap,Ce.pointShadowMap.value=N.state.pointShadowMap,Ce.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Ue,V.uniformsList=null,Ue}function Wi(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=ea.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function _r(b,U){const H=Me.get(b);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function $i(b,U,H,V,N){U.isScene!==!0&&(U=ve),ke.resetTextureUnits();const le=U.fog,pe=V.isMeshStandardMaterial?U.environment:null,Ee=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Rs,xe=(V.isMeshStandardMaterial?ut:_t).get(V.envMap||pe),Le=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ue=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ce=!!H.morphAttributes.position,qe=!!H.morphAttributes.normal,tt=!!H.morphAttributes.color;let gt=Hn;V.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(gt=x.toneMapping);const lt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ot=lt!==void 0?lt.length:0,Pe=Me.get(V),pt=p.state.lights;if(Ze===!0&&(Q===!0||b!==y)){const Ft=b===y&&V.id===M;he.setState(V,b,Ft)}let Je=!1;V.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==pt.state.version||Pe.outputColorSpace!==Ee||N.isBatchedMesh&&Pe.batching===!1||!N.isBatchedMesh&&Pe.batching===!0||N.isBatchedMesh&&Pe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Pe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Pe.instancing===!1||!N.isInstancedMesh&&Pe.instancing===!0||N.isSkinnedMesh&&Pe.skinning===!1||!N.isSkinnedMesh&&Pe.skinning===!0||N.isInstancedMesh&&Pe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Pe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Pe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Pe.instancingMorph===!1&&N.morphTexture!==null||Pe.envMap!==xe||V.fog===!0&&Pe.fog!==le||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==he.numPlanes||Pe.numIntersection!==he.numIntersection)||Pe.vertexAlphas!==Le||Pe.vertexTangents!==Ue||Pe.morphTargets!==Ce||Pe.morphNormals!==qe||Pe.morphColors!==tt||Pe.toneMapping!==gt||Pe.morphTargetsCount!==ot)&&(Je=!0):(Je=!0,Pe.__version=V.version);let Yt=Pe.currentProgram;Je===!0&&(Yt=ci(V,U,N));let Xi=!1,Kt=!1,Fs=!1;const mt=Yt.getUniforms(),nn=Pe.uniforms;if(ye.useProgram(Yt.program)&&(Xi=!0,Kt=!0,Fs=!0),V.id!==M&&(M=V.id,Kt=!0),Xi||y!==b){ye.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),mt.setValue(P,"projectionMatrix",b.projectionMatrix),mt.setValue(P,"viewMatrix",b.matrixWorldInverse);const Ht=mt.map.cameraPosition;Ht!==void 0&&Ht.setValue(P,be.setFromMatrixPosition(b.matrixWorld)),Re.logarithmicDepthBuffer&&mt.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&mt.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Kt=!0,Fs=!0)}if(N.isSkinnedMesh){mt.setOptional(P,N,"bindMatrix"),mt.setOptional(P,N,"bindMatrixInverse");const Ft=N.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),mt.setValue(P,"boneTexture",Ft.boneTexture,ke))}N.isBatchedMesh&&(mt.setOptional(P,N,"batchingTexture"),mt.setValue(P,"batchingTexture",N._matricesTexture,ke),mt.setOptional(P,N,"batchingIdTexture"),mt.setValue(P,"batchingIdTexture",N._indirectTexture,ke),mt.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&mt.setValue(P,"batchingColorTexture",N._colorsTexture,ke));const sn=H.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&se.update(N,H,Yt),(Kt||Pe.receiveShadow!==N.receiveShadow)&&(Pe.receiveShadow=N.receiveShadow,mt.setValue(P,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(nn.envMap.value=xe,nn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(nn.envMapIntensity.value=U.environmentIntensity),Kt&&(mt.setValue(P,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&Ns(nn,Fs),le&&V.fog===!0&&ie.refreshFogUniforms(nn,le),ie.refreshMaterialUniforms(nn,V,W,oe,p.state.transmissionRenderTarget[b.id]),ea.upload(P,Wi(Pe),nn,ke)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ea.upload(P,Wi(Pe),nn,ke),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&mt.setValue(P,"center",N.center),mt.setValue(P,"modelViewMatrix",N.modelViewMatrix),mt.setValue(P,"normalMatrix",N.normalMatrix),mt.setValue(P,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ft=V.uniformsGroups;for(let Ht=0,Aa=Ft.length;Ht<Aa;Ht++){const hi=Ft[Ht];ae.update(hi,Yt),ae.bind(hi,Yt)}}return Yt}function Ns(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Ta(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,U,H){const V=Me.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Me.get(b.texture).__webglTexture=U,Me.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const H=Me.get(b);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};const Dd=P.createFramebuffer();this.setRenderTarget=function(b,U=0,H=0){D=b,C=U,R=H;let V=!0,N=null,le=!1,pe=!1;if(b){const xe=Me.get(b);if(xe.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(P.FRAMEBUFFER,null),V=!1;else if(xe.__webglFramebuffer===void 0)ke.setupRenderTarget(b);else if(xe.__hasExternalTextures)ke.rebindTextures(b,Me.get(b.texture).__webglTexture,Me.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ce=b.depthTexture;if(xe.__boundDepthTexture!==Ce){if(Ce!==null&&Me.has(Ce)&&(b.width!==Ce.image.width||b.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(b)}}const Le=b.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(pe=!0);const Ue=Me.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?N=Ue[U][H]:N=Ue[U],le=!0):b.samples>0&&ke.useMultisampledRTT(b)===!1?N=Me.get(b).__webglMultisampledFramebuffer:Array.isArray(Ue)?N=Ue[H]:N=Ue,L.copy(b.viewport),O.copy(b.scissor),z=b.scissorTest}else L.copy(ge).multiplyScalar(W).floor(),O.copy(De).multiplyScalar(W).floor(),z=Ie;if(H!==0&&(N=Dd),ye.bindFramebuffer(P.FRAMEBUFFER,N)&&V&&ye.drawBuffers(b,N),ye.viewport(L),ye.scissor(O),ye.setScissorTest(z),le){const xe=Me.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,H)}else if(pe){const xe=U;for(let Le=0;Le<b.textures.length;Le++){const Ue=Me.get(b.textures[Le]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Le,Ue.__webglTexture,H,xe)}}else if(b!==null&&H!==0){const xe=Me.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xe.__webglTexture,H)}M=-1},this.readRenderTargetPixels=function(b,U,H,V,N,le,pe,Ee=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Me.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(xe=xe[pe]),xe){ye.bindFramebuffer(P.FRAMEBUFFER,xe);try{const Le=b.textures[Ee],Ue=Le.format,Ce=Le.type;if(!Re.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-V&&H>=0&&H<=b.height-N&&(b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ee),P.readPixels(U,H,V,N,G.convert(Ue),G.convert(Ce),le))}finally{const Le=D!==null?Me.get(D).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(b,U,H,V,N,le,pe,Ee=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Me.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(xe=xe[pe]),xe)if(U>=0&&U<=b.width-V&&H>=0&&H<=b.height-N){ye.bindFramebuffer(P.FRAMEBUFFER,xe);const Le=b.textures[Ee],Ue=Le.format,Ce=Le.type;if(!Re.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,qe),P.bufferData(P.PIXEL_PACK_BUFFER,le.byteLength,P.STREAM_READ),b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ee),P.readPixels(U,H,V,N,G.convert(Ue),G.convert(Ce),0);const tt=D!==null?Me.get(D).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,tt);const gt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Cf(P,gt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,qe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,le),P.deleteBuffer(qe),P.deleteSync(gt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,H=0){const V=Math.pow(2,-H),N=Math.floor(b.image.width*V),le=Math.floor(b.image.height*V),pe=U!==null?U.x:0,Ee=U!==null?U.y:0;ke.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,pe,Ee,N,le),ye.unbindTexture()};const Ud=P.createFramebuffer(),Nd=P.createFramebuffer();this.copyTextureToTexture=function(b,U,H=null,V=null,N=0,le=null){le===null&&(N!==0?(rr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=N,N=0):le=0);let pe,Ee,xe,Le,Ue,Ce,qe,tt,gt;const lt=b.isCompressedTexture?b.mipmaps[le]:b.image;if(H!==null)pe=H.max.x-H.min.x,Ee=H.max.y-H.min.y,xe=H.isBox3?H.max.z-H.min.z:1,Le=H.min.x,Ue=H.min.y,Ce=H.isBox3?H.min.z:0;else{const sn=Math.pow(2,-N);pe=Math.floor(lt.width*sn),Ee=Math.floor(lt.height*sn),b.isDataArrayTexture?xe=lt.depth:b.isData3DTexture?xe=Math.floor(lt.depth*sn):xe=1,Le=0,Ue=0,Ce=0}V!==null?(qe=V.x,tt=V.y,gt=V.z):(qe=0,tt=0,gt=0);const ot=G.convert(U.format),Pe=G.convert(U.type);let pt;U.isData3DTexture?(ke.setTexture3D(U,0),pt=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ke.setTexture2DArray(U,0),pt=P.TEXTURE_2D_ARRAY):(ke.setTexture2D(U,0),pt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Je=P.getParameter(P.UNPACK_ROW_LENGTH),Yt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Xi=P.getParameter(P.UNPACK_SKIP_PIXELS),Kt=P.getParameter(P.UNPACK_SKIP_ROWS),Fs=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,lt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,lt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Le),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ue),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ce);const mt=b.isDataArrayTexture||b.isData3DTexture,nn=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const sn=Me.get(b),Ft=Me.get(U),Ht=Me.get(sn.__renderTarget),Aa=Me.get(Ft.__renderTarget);ye.bindFramebuffer(P.READ_FRAMEBUFFER,Ht.__webglFramebuffer),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,Aa.__webglFramebuffer);for(let hi=0;hi<xe;hi++)mt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Me.get(b).__webglTexture,N,Ce+hi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Me.get(U).__webglTexture,le,gt+hi)),P.blitFramebuffer(Le,Ue,pe,Ee,qe,tt,pe,Ee,P.DEPTH_BUFFER_BIT,P.NEAREST);ye.bindFramebuffer(P.READ_FRAMEBUFFER,null),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||b.isRenderTargetTexture||Me.has(b)){const sn=Me.get(b),Ft=Me.get(U);ye.bindFramebuffer(P.READ_FRAMEBUFFER,Ud),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,Nd);for(let Ht=0;Ht<xe;Ht++)mt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,sn.__webglTexture,N,Ce+Ht):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,sn.__webglTexture,N),nn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ft.__webglTexture,le,gt+Ht):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ft.__webglTexture,le),N!==0?P.blitFramebuffer(Le,Ue,pe,Ee,qe,tt,pe,Ee,P.COLOR_BUFFER_BIT,P.NEAREST):nn?P.copyTexSubImage3D(pt,le,qe,tt,gt+Ht,Le,Ue,pe,Ee):P.copyTexSubImage2D(pt,le,qe,tt,Le,Ue,pe,Ee);ye.bindFramebuffer(P.READ_FRAMEBUFFER,null),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else nn?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(pt,le,qe,tt,gt,pe,Ee,xe,ot,Pe,lt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(pt,le,qe,tt,gt,pe,Ee,xe,ot,lt.data):P.texSubImage3D(pt,le,qe,tt,gt,pe,Ee,xe,ot,Pe,lt):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,le,qe,tt,pe,Ee,ot,Pe,lt.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,le,qe,tt,lt.width,lt.height,ot,lt.data):P.texSubImage2D(P.TEXTURE_2D,le,qe,tt,pe,Ee,ot,Pe,lt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Je),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Yt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Xi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Kt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Fs),le===0&&U.generateMipmaps&&P.generateMipmap(pt),ye.unbindTexture()},this.initRenderTarget=function(b){Me.get(b).__webglFramebuffer===void 0&&ke.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ke.setTextureCube(b,0):b.isData3DTexture?ke.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ke.setTexture2DArray(b,0):ke.setTexture2D(b,0),ye.unbindTexture()},this.resetState=function(){C=0,R=0,D=null,ye.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function Pu(i){return!0}const Iu=1.5;function Lu(i,e){return e&&new URLSearchParams(i).get("dprFloor")==="1"?1:Iu}function Du(i,e,t=Iu){return e?Math.min(2,Math.max(t,i)):Math.min(i,1.25)}function Kv(i,e){const t=new Yv({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance"});return t.setPixelRatio(Du(devicePixelRatio,e,Lu(location.search,!1))),t.setSize(innerWidth,innerHeight),t}const jv="modulepreload",Zv=function(i,e){return new URL(i,e).href},eh={},ao=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let a=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=a(t.map(h=>{if(h=Zv(h,n),h in eh)return;eh[h]=!0;const d=h.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(!!n)for(let v=o.length-1;v>=0;v--){const m=o[v];if(m.href===h&&(!d||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${u}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":jv,d||(g.as="script"),g.crossOrigin="",g.href=h,c&&g.setAttribute("nonce",c),document.head.appendChild(g),d)return new Promise((v,m)=>{g.addEventListener("load",v),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},ln={"green-blob":{model:"gloom-blob",label:"ก้อนวุ้น",height:1.25,footprint:1.65,hover:0,bob:.045,frequency:5.2,accent:13073919,glow:13131007,moveSpeed:1.7},demon:{model:"bat-gargoyle",label:"การ์กอยล์",height:1.55,footprint:2.3,hover:1,bob:.11,frequency:3.2,accent:13662207,glow:13662207,moveSpeed:2.2},yeti:{model:"horned-brute",label:"นักรบเขาเหล็ก",height:1.65,footprint:2.05,hover:0,bob:.035,frequency:2.1,accent:16747069,glow:16747050,moveSpeed:.682},orc:{model:"crystal-golem",label:"โกเลมผลึก",height:2.05,footprint:2.3,hover:0,bob:.055,frequency:2.7,accent:5228799,glow:4179199,moveSpeed:.55},"orc-skull":{model:"crystal-golem",label:"โกเลมผลึก · Overload",height:2.2,footprint:2.45,hover:0,bob:.055,frequency:2.9,accent:11820287,tint:14207231,elite:!0,glow:11820287,moveSpeed:.55},alien:{model:"ember-demon",label:"เขี้ยวถ่าน",height:1.5,footprint:1.5,hover:0,bob:.1,frequency:4.3,accent:16734778,glow:16773800,moveSpeed:2.321},"mushroom-king":{model:"hollow-wraith",label:"วิญญาณ",height:1.95,footprint:2.05,hover:.2,bob:.08,frequency:2.2,accent:9428223,glow:9430271,moveSpeed:.75},"blue-demon":{model:"bat-gargoyle",label:"การ์กอยล์ · Ion",height:1.6,footprint:2.35,hover:1.05,bob:.1,frequency:3.6,accent:9157375,tint:11386879,elite:!0,glow:9165055,moveSpeed:2.2}};[...new Set(Object.values(ln).map(i=>i.model))];const Ci={landscape:{image:"island.webp",size:[2304,1184],frame:[384,96,1920,1120],plaza:[1152,566],island:[660,315],outline:[[448,544],[456,468],[488,410],[520,392],[557,360],[594,372],[614,348],[662,316],[710,304],[758,276],[806,248],[854,232],[902,204],[950,200],[998,204],[1046,212],[1094,188],[1142,188],[1190,208],[1238,220],[1286,212],[1334,228],[1382,248],[1430,256],[1466,212],[1500,204],[1528,170],[1556,204],[1592,208],[1622,256],[1670,248],[1718,312],[1766,400],[1814,452],[1840,520],[1856,544],[1856,556],[1840,600],[1832,700],[1814,760],[1800,790],[1766,864],[1718,896],[1670,916],[1622,952],[1574,984],[1526,972],[1478,996],[1430,1020],[1382,1044],[1334,1048],[1286,1044],[1238,1056],[1190,1040],[1142,1048],[1094,1076],[1046,1068],[998,1020],[950,984],[902,1004],[854,1012],[806,1012],[758,976],[710,936],[662,868],[614,908],[566,864],[540,796],[520,762],[496,718],[472,654],[456,610],[448,572]],gates:[{mouth:[555,476,37,48],art:[456,362,656,554]},{mouth:[1529,284,35,48],art:[1430,172,1626,366]},{mouth:[1649,676,37,47],art:[1546,553,1747,748],front:702}],gateArt:"island-gates.webp",tower:{image:"tower.webp",base:[1152,566],width:312},actorScale:30}},Jv="layout-b",Qv=[{role:"short",control:[[-6.188,-14.702],[-3.162,-14.719],[-.287,-13.545],[1.169,-10.738],[.937,-7.34],[.654,-3.546]]},{role:"long",control:[[2.984,16.108],[3.871,13.902],[5.475,12.393],[7.461,11.84],[9.25,10.456],[10.302,6.961],[10.264,2.52],[9.031,-.46],[6.986,-1.024],[4.74,-.806],[2.655,-.266]]},{role:"medium",control:[[-9.957,13.246],[-12.334,11.329],[-13.94,8.906],[-14.626,5.593],[-13.972,2.047],[-11.372,-.948],[-8.269,-1.56],[-5.466,-1.404],[-3.111,-.901]]}],e_="island-day",t_={width:2.6,tile:"slab"},n_={at:[0,0],radius:3.6},i_=.8,s_=JSON.parse('[{"piece":"trees-10","at":[-14.45,-9.21],"width":2.29,"flip":true},{"piece":"trees-32","at":[-12.67,-9.33],"width":1.14},{"piece":"trees-00","at":[-11.05,-12.47],"width":2.35,"flip":true},{"piece":"trees-33","at":[-10.35,-14.28],"width":1.45},{"piece":"trees-13","at":[-12.31,-10.52],"width":2.63,"flip":true},{"piece":"trees-30","at":[-11.57,-9.41],"width":1.42},{"piece":"trees-20","at":[-7.03,1.81],"width":2.42,"flip":true},{"piece":"trees-30","at":[-8.28,0.93],"width":1.21},{"piece":"trees-31","at":[-6.55,7.64],"width":1.15},{"piece":"trees-00","at":[-5.47,12.47],"width":2.24},{"piece":"trees-23","at":[-2.88,6.13],"width":2.64},{"piece":"trees-00","at":[-3.03,4.62],"width":2.71},{"piece":"trees-10","at":[-5.48,5.41],"width":2.59,"flip":true},{"piece":"trees-30","at":[-4.4,3.78],"width":1.32},{"piece":"trees-13","at":[-3.83,15.7],"width":2.68,"flip":true},{"piece":"trees-31","at":[-4.44,14.5],"width":1.31},{"piece":"trees-31","at":[-2.58,-8.39],"width":1.17},{"piece":"trees-11","at":[-0.95,4.95],"width":2.72,"flip":true},{"piece":"trees-01","at":[-0.2,6.27],"width":2.28,"flip":true},{"piece":"trees-21","at":[-2.36,13.02],"width":2.15},{"piece":"trees-33","at":[-0.75,11.39],"width":1.39},{"piece":"trees-12","at":[-2.49,14.55],"width":2.51,"flip":true},{"piece":"trees-30","at":[-0.69,13.04],"width":1.48},{"piece":"trees-11","at":[9.04,-12.25],"width":2.4},{"piece":"trees-12","at":[8.61,-10.66],"width":2.56,"flip":true},{"piece":"trees-00","at":[5.97,2.47],"width":2.11},{"piece":"trees-12","at":[16.04,-5.18],"width":2.73},{"piece":"trees-30","at":[14.89,-2.06],"width":1.35},{"piece":"trees-20","at":[15.53,1.28],"width":2.64},{"piece":"trees-00","at":[16.51,2.94],"width":2.74},{"piece":"trees-02","at":[15.32,4.34],"width":2.32,"flip":true},{"piece":"rocks-03","at":[-9.62,5.06],"width":1.36},{"piece":"rocks-01","at":[-2.97,-9.51],"width":1.41,"flip":true},{"piece":"rocks-33","at":[-4.35,10.28],"width":1.52,"flip":true},{"piece":"rocks-22","at":[-9.16,2.15],"width":1.82,"flip":true},{"piece":"rocks-00","at":[5.78,3.87],"width":1.78,"flip":true},{"piece":"rocks-33","at":[-2.01,7.32],"width":1.91,"flip":true},{"piece":"rocks-02","at":[5.96,-8],"width":1.5},{"piece":"rocks-02","at":[5.19,-11.83],"width":1.3},{"piece":"rocks-01","at":[2.83,5.73],"width":1.52},{"piece":"rocks-22","at":[6.04,-9.29],"width":1.62},{"piece":"rocks-21","at":[8.84,-8.76],"width":1.8,"flip":true},{"piece":"rocks-03","at":[-2.9,8.92],"width":1.9,"flip":true},{"piece":"rocks-22","at":[4.94,5.84],"width":1.99},{"piece":"rocks-30","at":[6.47,-10.63],"width":1.34,"flip":true},{"piece":"rocks-20","at":[-4.42,7.61],"width":2.2},{"piece":"rocks-10","at":[-6.09,6.99],"width":0.95,"flip":true},{"piece":"rocks-22","at":[-4.1,6.29],"width":1.2},{"piece":"rocks-20","at":[0,8.92],"width":2.2},{"piece":"rocks-13","at":[1.47,8.21],"width":1.1},{"piece":"rocks-12","at":[-1.42,8.14],"width":0.95},{"piece":"rocks-21","at":[0.27,7.27],"width":1.2},{"piece":"rocks-20","at":[-6.19,3.86],"width":2.2,"flip":true},{"piece":"rocks-12","at":[-7.69,3.06],"width":0.95},{"piece":"rocks-22","at":[-5.87,2.19],"width":1.2},{"piece":"trees-30","at":[14.34,-3.23],"width":1.4},{"piece":"trees-13","at":[-3.45,12.13],"width":2.2},{"piece":"trees-01","at":[2.57,4.6],"width":2.2},{"piece":"trees-30","at":[14.64,0.38],"width":1.4,"flip":true},{"piece":"trees-21","at":[-0.85,14.09],"width":2.2,"flip":true},{"piece":"trees-13","at":[11.07,-11.78],"width":2.6,"flip":true},{"piece":"trees-00","at":[7.54,-7.66],"width":1.8},{"piece":"trees-20","at":[15.42,-3.02],"width":2.2},{"piece":"trees-10","at":[1.26,6.31],"width":1.7,"flip":true},{"piece":"trees-31","at":[13.56,-4.3],"width":1.1,"flip":true},{"piece":"trees-32","at":[-3.08,16.54],"width":1.1},{"piece":"trees-12","at":[-0.67,7.71],"width":1.8},{"piece":"trees-10","at":[-10.9,-10.84],"width":2.2},{"piece":"trees-22","at":[-3.31,13.57],"width":1.7},{"piece":"trees-33","at":[-1.27,6.39],"width":1.4,"flip":true},{"piece":"trees-02","at":[14.1,9.25],"width":2.2,"flip":true},{"piece":"trees-32","at":[-11.87,-7.78],"width":1.4},{"piece":"trees-12","at":[-5.34,9.86],"width":2.2},{"piece":"trees-32","at":[8.2,-6.64],"width":1.4,"flip":true},{"piece":"trees-30","at":[13.24,10.87],"width":1.4},{"piece":"trees-32","at":[-5.06,3.6],"width":1.1,"flip":true},{"piece":"trees-33","at":[7.94,-5.79],"width":1.1,"flip":true},{"piece":"trees-31","at":[-1.07,12.15],"width":1.4,"flip":true},{"piece":"trees-23","at":[7.91,-11.67],"width":1.7,"flip":true},{"piece":"trees-30","at":[14.51,3.78],"width":1.1,"flip":true},{"piece":"trees-33","at":[-14.2,-10.16],"width":1.1},{"piece":"trees-33","at":[-6.54,5.89],"width":1.4},{"piece":"trees-31","at":[-1.85,12.23],"width":1.1},{"piece":"trees-02","at":[-2.83,10.39],"width":2.2,"flip":true},{"piece":"trees-33","at":[13.28,-5.29],"width":1.4},{"piece":"trees-20","at":[14.75,7.65],"width":2.2},{"piece":"trees-33","at":[-11.73,-6.83],"width":1.4,"flip":true},{"piece":"trees-20","at":[15.59,-0.7],"width":2.2},{"piece":"trees-02","at":[-0.76,15.32],"width":1.7,"flip":true},{"piece":"trees-30","at":[-5.66,8],"width":1.4,"flip":true},{"piece":"trees-30","at":[-0.13,12.54],"width":1.1,"flip":true},{"piece":"trees-20","at":[-6.28,16.2],"width":2.2},{"piece":"trees-23","at":[-5.3,1.54],"width":1.8},{"piece":"trees-32","at":[3.52,6.42],"width":1.4},{"piece":"trees-30","at":[8.94,15.17],"width":1.4},{"piece":"trees-20","at":[-5.57,14.79],"width":2.6},{"piece":"trees-23","at":[11.81,-12.96],"width":1.7},{"piece":"trees-33","at":[-5.24,15.82],"width":1.1},{"piece":"trees-32","at":[5.4,-11.04],"width":1.4},{"piece":"trees-33","at":[-4.69,16.72],"width":1.4},{"piece":"trees-13","at":[16.5,4.56],"width":1.7,"flip":true},{"piece":"trees-31","at":[-9.9,4.17],"width":1.4,"flip":true},{"piece":"trees-20","at":[15.8,6.59],"width":1.8},{"piece":"trees-31","at":[-13.95,-6.43],"width":1.1},{"piece":"trees-30","at":[4.7,-6.34],"width":1.1},{"piece":"trees-31","at":[-15.27,-6.25],"width":1.4,"flip":true},{"piece":"trees-13","at":[-7.21,6.49],"width":1.7},{"piece":"trees-03","at":[10.35,-7.22],"width":1.7},{"piece":"trees-30","at":[-10.65,-8.96],"width":1.4,"flip":true},{"piece":"trees-20","at":[16.64,-1.26],"width":1.7},{"piece":"trees-30","at":[6.6,-6.12],"width":1.1,"flip":true},{"piece":"trees-10","at":[-12.94,-7.91],"width":1.7,"flip":true},{"piece":"trees-33","at":[5.9,-6.45],"width":1.4},{"piece":"trees-31","at":[15.42,5.71],"width":1.4,"flip":true},{"piece":"trees-31","at":[11.35,-10.52],"width":1.1},{"piece":"trees-30","at":[16.32,5.8],"width":1.4,"flip":true},{"piece":"trees-31","at":[-10.73,-7.97],"width":1.4,"flip":true},{"piece":"trees-33","at":[11.25,-5.61],"width":1.4,"flip":true},{"piece":"trees-12","at":[10.07,-13.43],"width":2.6,"flip":true},{"piece":"trees-32","at":[9.01,-7.94],"width":1.1,"flip":true},{"piece":"trees-11","at":[-7.69,5.3],"width":1.8,"flip":true},{"piece":"trees-11","at":[-8.54,4.37],"width":1.8},{"piece":"trees-10","at":[-0.94,10.28],"width":2.2},{"piece":"trees-33","at":[14.37,-4.07],"width":1.4,"flip":true},{"piece":"trees-23","at":[4.36,3.79],"width":1.8},{"piece":"trees-30","at":[-5.18,10.92],"width":1.4},{"piece":"trees-32","at":[-12.02,-8.48],"width":1.1,"flip":true},{"piece":"trees-32","at":[-0.95,9.01],"width":1.1,"flip":true},{"piece":"trees-11","at":[-8.67,3.26],"width":1.8,"flip":true},{"piece":"trees-03","at":[14.53,5.37],"width":1.8},{"piece":"trees-31","at":[-0.01,10.22],"width":1.1},{"piece":"trees-20","at":[9.62,-9.47],"width":1.7},{"piece":"trees-33","at":[-16.01,-4.06],"width":1.1,"flip":true},{"piece":"trees-33","at":[-13.3,-10.88],"width":1.1},{"piece":"trees-31","at":[-13.35,-10.11],"width":1.1,"flip":true},{"piece":"trees-22","at":[-16.24,-5.59],"width":1.7},{"piece":"trees-31","at":[12.21,-11.13],"width":1.1},{"piece":"trees-33","at":[9.66,-10.87],"width":1.1,"flip":true},{"piece":"trees-33","at":[-15.16,-5.24],"width":1.1,"flip":true},{"piece":"trees-30","at":[-3.11,-10.6],"width":1.1,"flip":true},{"piece":"trees-30","at":[6.62,-8.73],"width":1.1,"flip":true},{"piece":"trees-32","at":[-3.46,-8.65],"width":1.1},{"piece":"trees-33","at":[-7.77,8.15],"width":1.1,"flip":true},{"piece":"trees-01","at":[-1.96,16.78],"width":2.2},{"piece":"trees-31","at":[10.32,14.29],"width":1.1},{"piece":"trees-31","at":[-13.31,-6.6],"width":1.1,"flip":true},{"piece":"trees-21","at":[7.86,15.42],"width":1.7},{"piece":"trees-30","at":[4.67,6.98],"width":1.1,"flip":true},{"piece":"trees-23","at":[14.66,6.48],"width":1.7},{"piece":"trees-31","at":[-2.23,-9.85],"width":1.4,"flip":true},{"piece":"trees-31","at":[3.11,-17.27],"width":1.1,"flip":true},{"piece":"trees-32","at":[9.63,-6.61],"width":1.4},{"piece":"trees-31","at":[5.79,-10.06],"width":1.1},{"piece":"trees-30","at":[-2.49,11.28],"width":1.1},{"piece":"trees-30","at":[-8.84,5.66],"width":1.4,"flip":true},{"piece":"trees-33","at":[-14.03,-7.5],"width":1.4,"flip":true},{"piece":"trees-32","at":[-6.11,11.15],"width":1.1,"flip":true},{"piece":"trees-31","at":[2.31,7.09],"width":1.4,"flip":true},{"piece":"trees-31","at":[12.36,-5.43],"width":1.1,"flip":true},{"piece":"trees-32","at":[16.22,0.07],"width":1.1},{"piece":"trees-31","at":[10.71,-6.28],"width":1.4},{"piece":"trees-32","at":[4.15,5.27],"width":1.4,"flip":true},{"piece":"trees-22","at":[-7.4,4.17],"width":2.2,"flip":true},{"piece":"trees-03","at":[4.43,2.63],"width":2.2,"flip":true},{"piece":"trees-33","at":[9.71,-5.25],"width":1.1,"flip":true},{"piece":"trees-30","at":[-8.8,6.7],"width":1.1,"flip":true},{"piece":"trees-30","at":[-1.05,16.33],"width":1.4},{"piece":"trees-32","at":[-6.53,8.74],"width":1.1},{"piece":"trees-03","at":[16.78,-2.28],"width":1.8},{"piece":"trees-20","at":[-4.45,2.56],"width":2.2},{"piece":"trees-32","at":[-4.16,11.09],"width":1.4},{"piece":"trees-21","at":[-15.35,-7.81],"width":1.7},{"piece":"trees-30","at":[16.97,-4.09],"width":1.4},{"piece":"trees-32","at":[14.66,-0.62],"width":1.1},{"piece":"trees-33","at":[14.49,-5.5],"width":1.4,"flip":true},{"piece":"trees-33","at":[2.17,7.81],"width":1.1,"flip":true}]'),r_={seed:28,spacing:[.55,1.1],mix:{tuft:.35,flower:.3,bush:.25,rock:.1}},a_={seed:29,count:45,cluster:3,pieces:["flowers-00","flowers-00","flowers-00","flowers-00","flowers-00","flowers-00","flowers-01","flowers-01","flowers-01","flowers-01","flowers-01","flowers-01","flowers-02","flowers-02","flowers-02","flowers-02","flowers-02","flowers-02","flowers-03","flowers-03","flowers-03","flowers-03","flowers-03","flowers-03","flowers-10","flowers-10","flowers-11","flowers-11","flowers-12","flowers-12","flowers-13","flowers-13","flowers-20","flowers-21","flowers-22","flowers-23","flowers-30","flowers-30","flowers-31","flowers-31","flowers-32","flowers-32","flowers-33","flowers-33"]},o_=[{at:[13.29,-8.32],radius:2.6},{at:[6.58,-14.54],radius:2.6},{at:[-17.05,.74],radius:2.6}],l_={id:Jv,lanes:Qv,base:e_,road:t_,plaza:n_,pace:i_,decor:s_,edgeDecor:r_,fieldDecor:a_,keepClear:o_},oo=["short","long","medium"],th=["tuft","flower","bush","rock"];class lo extends Error{constructor(){super(...arguments);E(this,"name","LevelDataError")}}const nh=801;function c_(i){const e=i.map(([a,o])=>({x:a,z:o})),t=[];for(let a=0;a<e.length-1;a++){const o=e[Math.max(0,a-1)],l=e[a],c=e[a+1],h=e[Math.min(e.length-1,a+2)];for(let d=0;d<32;d++){const u=d/32,f=u*u,g=f*u,v=(m,p,S,w)=>.5*(2*p+(-m+S)*u+(2*m-5*p+4*S-w)*f+(-m+3*p-3*S+w)*g);t.push({x:v(o.x,l.x,c.x,h.x),z:v(o.z,l.z,c.z,h.z)})}}t.push(e[e.length-1]);const n=[0];for(let a=1;a<t.length;a++)n.push(n[a-1]+Math.hypot(t[a].x-t[a-1].x,t[a].z-t[a-1].z));const s=n[n.length-1],r=[];for(let a=0,o=0;a<nh;a++){const l=s*a/(nh-1);for(;o<t.length-2&&n[o+1]<l;)o++;const c=(l-n[o])/Math.max(1e-9,n[o+1]-n[o]);r.push({x:t[o].x+(t[o+1].x-t[o].x)*c,z:t[o].z+(t[o+1].z-t[o].z)*c})}return{points:r,length:s}}const Mn=i=>typeof i=="object"&&i!==null&&!Array.isArray(i),ih=i=>typeof i=="string"&&/^[a-z]+(-[a-z]+)*-\d\d$/.test(i),Gr=i=>Object.freeze([i[0],i[1]]),co=i=>typeof i=="string"&&/^[a-z0-9]+(-[a-z0-9]+)*$/.test(i),cs=i=>Array.isArray(i)&&i.length===2&&Number.isFinite(i[0])&&Number.isFinite(i[1]),h_=new Set(["level-01"]),ho=i=>!h_.has(i.id);function u_(i){if(!Mn(i))throw new lo("level: not an object");const{id:e,lanes:t,base:n,road:s,plaza:r,pace:a=1,decor:o=[],fences:l=[],edgeDecor:c,fieldDecor:h,keepClear:d=[]}=i;if(!co(e))throw new lo('level: id must be lower-case words joined by "-"');const u=x=>new lo(`${e}: ${x}`);if(!Array.isArray(t)||t.length!==oo.length)throw u(`lanes must be ${oo.length}`);const f=oo.map((x,A)=>{const C=t[A];if(!Mn(C))throw u(`lanes[${A}] is not an object`);if(C.role!==x)throw u(`lanes[${A}].role must be "${x}"`);const{control:R}=C;if(!Array.isArray(R)||R.length<2)throw u(`lanes[${A}].control needs 2 or more points`);for(let y=0;y<R.length;y++)if(!cs(R[y]))throw u(`lanes[${A}].control[${y}] is not [x, z]`);const{points:D,length:M}=c_(R);if(!Number.isFinite(M)||!D.every(y=>Number.isFinite(y.x)&&Number.isFinite(y.z)))throw u(`lanes[${A}] is too long to sample`);if(!(M>1e-6))throw u(`lanes[${A}] has no length`);return Object.freeze({role:x,points:Object.freeze(D.map(y=>Object.freeze(y))),length:M})});if(!co(n))throw u('base must be a kit name like "island-day"');if(!Mn(s)||!(typeof s.width=="number"&&s.width>=1&&s.width<=4))throw u("road.width must be 1–4 world units");if(!co(s.tile))throw u('road.tile must be a kit name like "slab"');if(!Mn(r)||!cs(r.at))throw u("plaza.at is not [x, z]");if(!(typeof r.radius=="number"&&r.radius>0&&r.radius<=8))throw u("plaza.radius must be above 0 and at most 8");if(!(typeof a=="number"&&a>=.5&&a<=1.5))throw u("pace must be 0.5–1.5");const g=(x,A)=>{if(!Array.isArray(x))throw u(`${A} must be a list`);return x},v=g(o,"decor").map((x,A)=>{if(!Mn(x)||!ih(x.piece))throw u(`decor[${A}].piece must be an atlas piece like "trees-00"`);if(!cs(x.at))throw u(`decor[${A}].at is not [x, z]`);if(!(typeof x.width=="number"&&x.width>0&&x.width<=20))throw u(`decor[${A}].width must be above 0 and at most 20`);return Object.freeze({piece:x.piece,at:Gr(x.at),width:x.width,...x.flip===!0?{flip:!0}:{}})}),m=g(l,"fences").map((x,A)=>{if(!Mn(x)||!Array.isArray(x.points)||x.points.length<2)throw u(`fences[${A}].points needs 2 or more points`);const C=x.points;for(let R=0;R<C.length;R++)if(!cs(C[R]))throw u(`fences[${A}].points[${R}] is not [x, z]`);return Object.freeze({points:Object.freeze(C.map(Gr))})}),p=g(d,"keepClear").map((x,A)=>{if(!Mn(x)||!cs(x.at))throw u(`keepClear[${A}].at is not [x, z]`);if(!(typeof x.radius=="number"&&x.radius>0))throw u(`keepClear[${A}].radius must be above 0`);return Object.freeze({at:Gr(x.at),radius:x.radius})});let S;if(c!==void 0){if(!Mn(c)||!Number.isFinite(c.seed))throw u("edgeDecor.seed must be a number");const x=c.spacing;if(!cs(x)||!(x[0]>0&&x[1]>=x[0]))throw u("edgeDecor.spacing must be [min, max] above 0");const A=c.mix;if(!Mn(A)||!Object.entries(A).every(([C,R])=>th.includes(C)&&typeof R=="number"&&R>=0)||!Object.values(A).some(C=>C>0))throw u(`edgeDecor.mix must share out ${th.join(", ")}`);S=Object.freeze({seed:c.seed,spacing:Gr(x),mix:Object.freeze({...A})})}let w;if(h!==void 0){if(!Mn(h)||!Number.isFinite(h.seed))throw u("fieldDecor.seed must be a number");if(!(Number.isInteger(h.count)&&h.count>=0))throw u("fieldDecor.count must be a whole number");if(!Array.isArray(h.pieces)||!h.pieces.length||!h.pieces.every(ih))throw u("fieldDecor.pieces must list atlas pieces");if(h.cluster!==void 0&&!(Number.isInteger(h.cluster)&&h.cluster>=1&&h.cluster<=5))throw u("fieldDecor.cluster must be a whole number 1 to 5");w=Object.freeze({seed:h.seed,count:h.count,pieces:Object.freeze([...h.pieces]),...h.cluster!==void 0?{cluster:h.cluster}:{}})}return Object.freeze({id:e,lanes:Object.freeze(f),base:n,pace:a,decor:Object.freeze(v),fences:Object.freeze(m),keepClear:Object.freeze(p),...S?{edgeDecor:S}:{},...w?{fieldDecor:w}:{},road:Object.freeze({width:s.width,tile:s.tile}),plaza:Object.freeze({at:Object.freeze([r.at[0],r.at[1]]),radius:r.radius})})}const Uu={speed:1.6,main:3,of:5},d_=19.87/15;function Nu(i,e){return e*19.87/pa(i)}let Wl=u_(l_);function ti(){return Wl}function f_(){return Wl.pace}const Fu=i=>Wl.lanes[(i%3+3)%3];function pa(i){return Fu(i).length}function ku(i,e){const t=Fu(i).points,s=Math.max(0,Math.min(1,e))*(t.length-1),r=Math.min(t.length-2,Math.floor(s)),a=s-r;return{x:t[r].x+(t[r+1].x-t[r].x)*a,z:t[r].z+(t[r+1].z-t[r].z)*a}}const sh=18.2,rh={from:[6,36.5,-47],to:[0,-1.5,0]};const ah=i=>{const e=Math.hypot(...i);return i.map(t=>t/e)},Cn=(()=>{const i=rh.from,e=rh.to,t=ah([i[0]-e[0],i[1]-e[1],i[2]-e[2]]),n=ah([t[2],0,-t[0]]),s=[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]];return{right:n,up:s,sinPitch:t[1],cosPitch:Math.hypot(t[0],t[2]),yaw:Math.atan2(t[0],t[2])}})();class oh{constructor(e){E(this,"sx");E(this,"sy");this.layout=e,this.sx=e.island[0]/sh,this.sy=e.island[1]/(sh*Cn.sinPitch)}toImage(e,t){const{right:n,up:s}=Cn;return[this.layout.plaza[0]+this.sx*(e*n[0]+t*n[2]),this.layout.plaza[1]-this.sy*(e*s[0]+t*s[2])]}toWorld(e,t){const{right:n,up:s}=Cn,r=(e-this.layout.plaza[0])/this.sx,a=-(t-this.layout.plaza[1])/this.sy,o=n[0]*s[2]-n[2]*s[0];return{x:(r*s[2]-a*n[2])/o,z:(n[0]*a-s[0]*r)/o}}}function p_(i,e=121){return[0,1,2].map(t=>Array.from({length:e},(n,s)=>{const r=ku(t,s/(e-1));return i.toImage(r.x,r.z)}))}const Ou=1.55,Bu=1.35;function m_(i){return Math.max(...Object.values(ln).map(t=>t.height+t.hover))*Ou*i.actorScale*Bu+12}function g_(i,e,t=36){const n=[...e.flat(),i.plaza],s=i.gates.map(r=>r.art);return[Math.min(...n.map(r=>r[0]),...s.map(r=>r[0]))-t,Math.min(...n.map(r=>r[1]-m_(i)),...s.map(r=>r[1])),Math.max(...n.map(r=>r[0]),...s.map(r=>r[2]))+t,Math.max(...n.map(r=>r[1]+t),...s.map(r=>r[3]))]}const v_=.88,__=.08;function x_(i,e=24){return i.flatMap((t,n)=>{const s=i[(n+1)%i.length],r=Math.max(1,Math.ceil(Math.hypot(s[0]-t[0],s[1]-t[1])/e));return Array.from({length:r},(a,o)=>[t[0]+(s[0]-t[0])*o/r,t[1]+(s[1]-t[1])*o/r])})}function b_(i,e,[t,n],s,r,a){const o=a.margin??8;return i.every(([l,c])=>{const h=t+l*e,d=n+c*e;return h>=0&&h<=s&&d>=0&&d<=r&&a.panels.every(([u,f,g,v])=>h<u-o||h>g+o||d<f-o||d>v+o)})}class y_{constructor(){E(this,"widest",new Map);E(this,"screen","")}update(e,t,n){let s=!1;const r=`${e}x${t}`;r!==this.screen&&(this.widest.clear(),this.screen=r,s=!0);for(const[a,o]of n){const l=this.widest.get(a),c=l?[Math.min(l[0],o[0]),Math.min(l[1],o[1]),Math.max(l[2],o[2]),Math.max(l[3],o[3])]:o;(!l||c.some((h,d)=>Math.abs(h-l[d])>.5))&&(this.widest.set(a,c),s=!0)}return s}get boxes(){return[...this.widest.values()]}}function M_(i,e,t,n,s,r,a,o,l){const c=Math.ceil(n),h=Math.floor(s)-c+1,d=l.margin??8;if(h<1)return null;const u=new Int32Array(h+1),f=(m,p)=>{const S=Math.max(0,Math.ceil(m)-c),w=Math.min(h-1,Math.floor(p)-c);S<=w&&(u[S]++,u[w+1]--)};for(const[m,p]of i){const S=t+m*e,w=p*e;if(S<0||S>a){u[0]++,u[h]--;continue}f(-1/0,-w-1e-6),f(o-w+1e-6,1/0);for(const[x,A,C,R]of l.panels)S>=x-d&&S<=C+d&&f(Math.max(A-d,0)-w,Math.min(R+d,o)-w)}let g=null,v=0;for(let m=0;m<h;m++){v+=u[m];const p=c+m;(!g||v<g.covered||v===g.covered&&Math.abs(p-r)<Math.abs(g.oy-r))&&(g={oy:p,covered:v})}return g}function lh(i,e,t,n,s,r){const{size:a,frame:[o,l,c,h],plaza:d}=t;let u=Math.max(i/(c-o),e/(h-l)),f=[i/2-d[0]*u,e/2-(l+h)/2*u];if(n&&s){const[v,m,p,S]=s,w=Math.max(1,n.bottom-n.top),x=(R,D,M,y,L,O,z,X,J)=>{let q=J-X*R;return q=L>=D?Math.min(Math.max(q,D-L),0):(D-L)/2,Math.max(Math.min(q,y-z*R),M-O*R)},A=R=>[x(R,i,0,i,a[0]*R,v,p,d[0],i/2),x(R,e,n.top,n.bottom,a[1]*R,m,S,(m+S)/2,(n.top+n.bottom)/2)];u=Math.min(u,w/(S-m),i/(p-v)),f=A(u);const C=r?x_(r.outline):[];if(r&&!b_(C,u,f,i,e,r)){const R=u,D=12,M=Math.max(R*v_,Math.min(R,Math.max(i/a[0],e/a[1])));let y=null;const L=Math.floor(i*__/8);for(let O=0;O<=D&&(y==null?void 0:y.covered)!==0;O++){const z=R-(R-M)*O/D,[X,J]=A(z),q=a[0]*z;let oe=n.top-m*z,W=n.bottom-S*z;const ce=Math.max(oe,e-a[1]*z),me=Math.min(W,0);ce<=me&&([oe,W]=[ce,me]);for(let ge=0;ge<=2*L&&(y==null?void 0:y.covered)!==0;ge++){const De=X+(ge%2?1:-1)*Math.ceil(ge/2)*8;if(De+v*z<-1e-6||De+p*z>i+1e-6||X<=1e-6&&X+q>=i-1e-6&&(De>1e-6||De+q<i-1e-6))continue;const Ie=M_(C,z,De,oe,W,J,i,e,r);Ie&&(!y||Ie.covered<y.covered)&&(y={scale:z,offset:[De,Ie.oy],covered:Ie.covered})}}y&&({scale:u,offset:f}=y)}}const g=f[0]<=1e-6&&f[1]<=1e-6&&f[0]+a[0]*u>=i-1e-6&&f[1]+a[1]*u>=e-1e-6;return{scale:u,offset:f,cover:g}}function ch(i,e){return Math.abs(i.scale-e.scale)>1e-6*Math.max(i.scale,e.scale)||Math.hypot(i.offset[0]-e.offset[0],i.offset[1]-e.offset[1])>1e-6}function S_(i,e,t){return ch(i,e)?t&&!ch(i,{scale:e.scale,offset:i.offset})?"slide":"clear":"none"}function w_(i){const e=[];let t=0;const n=(s,r)=>{const[a,o,l,c]=i.gates[s].art;e.push({gate:s,kind:r,x:t,y:0,w:l-a,h:c-o}),t+=l-a};return i.gates.forEach((s,r)=>n(r,"sealed")),i.gates.forEach((s,r)=>{s.front!==void 0&&n(r,"front")}),{size:[t,Math.max(...i.gates.map(s=>s.art[3]-s.art[1]))],rects:e}}const Hy=["gates-00","gates-01","gates-10"],Gy=["gates-sealed-00","gates-sealed-01","gates-sealed-10"],E_=5.5,T_=[{aspect:.9535,foot:.07,mouth:[.4878,.5418,.1958,.2425]},{aspect:.9535,foot:.07,mouth:[.4889,.5429,.1947,.2436]},{aspect:.9557,foot:.07,mouth:[.4945,.5325,.1885,.2332]}];function A_(i,e){return i.lanes.map((t,n)=>{const s=t.points[0],[r,a]=e.toImage(s.x,s.z),o=t.points.find(w=>Math.hypot(w.x-s.x,w.z-s.z)>2)??t.points[t.points.length-1],l=e.toImage(o.x,o.z)[0]>r,c=T_[n],h=E_*e.sx,d=h*c.aspect,u=a+d*c.foot,f=u-d,g=r-h/2,[v,m,p,S]=c.mouth;return{lane:n,x:r,y:a,w:h,flip:l,art:[g,f,g+h,u],mouth:[g+(l?1-v:v)*h,f+m*d,p*h,S*d]}})}function Vy(i){const e=1-Math.max(0,Math.min(1,i));return{open:Math.min(1,2-2*e),sealed:Math.min(1,2*e)}}const nt=(i,e,t,n,s,r)=>({id:i,branch:e,slot:t,cost:t==="cap"?2:1,name:n,effect:s,counters:r}),Di=[nt("core-lens","core","I-a","เลนส์โฟกัส","ลูกศรอีเธอร์แรงขึ้น 20% และเจาะเกราะ 50%",["armor"]),nt("core-mine","core","I-b","เหมืองอีเธอร์","พลังงานจากการกำจัดศัตรูเพิ่ม 15%",[]),nt("core-nova-power","core","II-A","โนวาทำลายล้าง","Nova แรงขึ้น 60% และผลักศัตรูถอยหลัง",["armor","shield"]),nt("core-nova-rush","core","II-B","โนวาเร่งรอบ","คูลดาวน์ Nova ลดจาก 25 เหลือ 16 วินาที",[]),nt("core-nova-freeze","core","III-A","โนวาเยือกแข็ง","Nova ทำให้ศัตรูหยุดนิ่ง 1.2 วินาที",["dash"]),nt("core-nova-awaken","core","III-B","โนวาปลุกพลัง","หลังใช้ Nova ทุกการโจมตีของป้อมยิงเร็วขึ้น 25% นาน 5 วินาที",["regen"]),nt("core-prism","core","cap","แกนปริซึม","ลูกศรอีเธอร์ยิง 3 เป้าพร้อมกัน (เป้ารองแรง 25%) และเก็บ Nova ได้ 2 ครั้ง",["flying","split"]),nt("fire-fuel","fire","I-a","เชื้อเพลิงเข้ม","ไฟเผานานขึ้น 60%",["regen"]),nt("fire-blast","fire","I-b","ระเบิดกว้าง","รัศมีระเบิดเพิ่ม 25%",["split"]),nt("fire-meteor","fire","II-A","อุกกาบาต","สกิลทุก 7 วินาที: หินตกใส่จุดที่ศัตรูหนาแน่นที่สุด แรง ×3 ไม่สนเกราะ",["armor"]),nt("fire-wildfire","fire","II-B","ไฟลาม","สกิลทุก 5 วินาที: ฝนไฟ 4 ลูกจุดไฟศัตรู 4 ตัว และตัวที่ตายขณะติดไฟ ไฟลามไปอีก 2 ตัว",["split"]),nt("fire-lava","fire","III-A","หลุมลาวา","อุกกาบาตทิ้งลาวาไว้ 3 วินาที ลาวาทำให้ศัตรูบนพื้นติดไฟ",["regen"]),nt("fire-stack","fire","III-B","ไฟซ้อน","ไฟเผาซ้อนกันได้ 3 ชั้น",["regen"]),nt("fire-sunfall","fire","cap","สุริยะถล่ม","อุกกาบาตเป็นหินยักษ์ แรง ×2 รัศมี ×1.6 หรือฝนไฟเพิ่มเป็น 8 ลูก",["armor","split"]),nt("frost-chill","frost","I-a","ความหนาวลึก","ศัตรูที่โดน Frost ช้าลงอีก 10%",["dash"]),nt("frost-wide","frost","I-b","ลมหนาวกว้าง","รัศมี Frost เพิ่ม 25%",["dash","split"]),nt("frost-glacier","frost","II-A","ธารน้ำแข็ง","สกิลทุก 7 วินาที: แช่แข็งศัตรูรอบตัวหน้าสุด หยุดนิ่ง 1.2 วินาที",["dash","boss"]),nt("frost-brittle","frost","II-B","เปราะแตก","สกิลทุก 6 วินาที: หอกน้ำแข็งทะลุแนว ตัวที่โดนเปราะ 4 วินาที รับดาเมจเพิ่ม 20% และโดนเจาะเกราะ 50%",["armor","shield"]),nt("frost-field","frost","III-A","ทุ่งน้ำแข็ง","การแช่แข็งทิ้งน้ำแข็งไว้ 4 วินาที ชะลอศัตรูบนพื้นที่เดินเข้า",["dash"]),nt("frost-shatter","frost","III-B","แตกกระจาย","ตัวที่ตายขณะเปราะ ระเบิดเศษน้ำแข็งใส่ตัวรอบ ๆ",["split"]),nt("frost-ice-age","frost","cap","ยุคน้ำแข็ง","พายุหิมะรัศมี 9 รอบป้อม ชะลอศัตรู 25% Frost ยิงเร็วขึ้น 25% และสกิลน้ำแข็งใหญ่ขึ้น",["flying","dash"]),nt("storm-conductor","storm","I-a","ตัวนำไฟฟ้า","ชิ่งเพิ่ม 2 เป้า (ฟ้าผ่าก็โดนเพิ่ม 2 เป้า) และระยะชิ่งเพิ่ม 15%",["split"]),nt("storm-overcharge","storm","I-b","ประจุเกิน","เป้าแรกรับดาเมจเพิ่ม 50% และทำดาเมจใส่โล่ 3 เท่า",["shield"]),nt("storm-chain","storm","II-A","ลูกโซ่ไม่ขาด","สกิลทุก 6 วินาที: สายฟ้าชิ่งใหญ่ 8 เป้า ข้ามเลน ดาเมจไม่ลดตามการชิ่ง",["split","flying"]),nt("storm-thunder","storm","II-B","ฟ้าผ่า","สกิลทุก 6 วินาที: ฟ้าผ่าตัวที่ HP มากที่สุดและอีก 1 ตัว (เพิ่มตามตัวนำไฟฟ้า) แรง ×3 หยุดนิ่ง 0.5 วินาที",["armor","shield","boss"]),nt("storm-static","storm","III-A","สนามประจุ","ตัวที่มีประจุ เมื่อโดน Fire หรือ Frost จะปล่อยสายฟ้าแรง 40% ไปหาตัวข้าง ๆ (ต้องมี Fire หรือ Frost)",[]),nt("storm-clap","storm","III-B","ฟ้าคำราม","ฟ้าผ่าสร้างคลื่นกระแทกรัศมี 2 แรง 50% ของฟ้าผ่า ใส่ศัตรูรอบ ๆ",["split"]),nt("storm-tempest","storm","cap","พายุคลั่ง","สกิลสายฟ้าเรียกฟ้าผ่าลงศัตรูเพิ่ม 5 ตัว (ฟ้าผ่าโดน 5 เป้า)",["flying","shield"])],R_=new Map(Di.map(i=>[i.id,i])),Ui=["core","fire","frost","storm"],ai={core:"แกนป้อม",fire:"FIRE",frost:"FROST",storm:"STORM"};function At(i){const e=R_.get(i);if(!e)throw new Error(`Unknown skill node ${i}`);return e}function Rn(i,e){return Di.find(t=>t.branch===i&&t.slot===e)}const Ne={lens:{damage:1.2,pierce:.5},mine:{gold:1.15},novaPower:{damage:1.6,push:.06,bossPush:.3},novaRush:{cooldown:16},novaFreeze:{stun:1.2},novaAwaken:{rate:1.25,duration:5},prism:{targets:3,splash:.25,charges:2},fuel:{burn:1.6},blast:{radius:1.25},meteor:{cooldown:7,damage:3,delay:.6},wildfire:{radius:2.5,count:2,depth:2},rain:{cooldown:5,embers:4,damage:.8,radius:1.2,delay:.45},lava:{radius:2,life:3},stack:{max:3},sunfall:{damage:2,radius:1.6,embers:8},chill:{slow:.1,floor:.2},wide:{radius:1.25},glacier:{cooldown:7,radius:2.6,damage:2,stun:1.2},brittle:{cooldown:6,damage:2.5,width:.9,reach:2,duration:4,taken:1.2,pierce:.5},field:{radius:2.5,life:4,slow:.3},shatter:{ratio:.3,radius:2,cap:3},iceAge:{radius:9,speed:.75,rate:1.25,freeze:1.5,spear:1.6,brittle:6},conductor:{jumps:2,range:1.15},overcharge:{first:1.5,shield:3},chain:{cooldown:6,targets:8,range:1.5,damage:1.5},thunder:{cooldown:6,targets:2,first:3,others:1,stun:.5},staticField:{life:3,ratio:.4},clap:{radius:2,ratio:.5},tempest:{strikes:5},respec:{base:150,step:100},zoneCap:12},Ms={meteor:{node:"fire-meteor",element:"fire",cap:"fire-sunfall"},rain:{node:"fire-wildfire",element:"fire",cap:"fire-sunfall"},freeze:{node:"frost-glacier",element:"frost",cap:"frost-ice-age"},spear:{node:"frost-brittle",element:"frost",cap:"frost-ice-age"},chain:{node:"storm-chain",element:"storm",cap:"storm-tempest"},thunder:{node:"storm-thunder",element:"storm",cap:"storm-tempest"}},C_={meteor:"meteor",rain:"rain",freeze:"glacier",spear:"brittle",chain:"chain",thunder:"thunder"};function zu(i){return Ne[C_[i]].cooldown}function uo(i,e){const t=Object.keys(Ms).find(n=>Ms[n].element===e&&i(Ms[n].node));return t?{id:t,node:Ms[t].node,ultimate:i(Ms[t].cap)}:null}const hh=new Map;function oi(i){const e=[...i.skills].sort().join(","),t=hh.get(e);if(t)return t;const n=a=>i.skills.includes(a),s=Ne,r={boltDamage:n("core-lens")?s.lens.damage:1,boltPierce:n("core-lens")?s.lens.pierce:0,boltTargets:n("core-prism")?s.prism.targets:1,goldMul:n("core-mine")?s.mine.gold:1,novaDamage:n("core-nova-power")?s.novaPower.damage:1,novaPush:n("core-nova-power")?s.novaPower.push:0,novaCooldown:n("core-nova-rush")?s.novaRush.cooldown:25,novaStun:n("core-nova-freeze")?s.novaFreeze.stun:0,novaAwaken:n("core-nova-awaken"),novaCharges:n("core-prism")?s.prism.charges:1,burnDuration:n("fire-fuel")?s.fuel.burn:1,fireRadius:n("fire-blast")?s.blast.radius:1,wildfire:n("fire-wildfire"),lava:n("fire-lava"),burnStacks:n("fire-stack")?s.stack.max:1,slowBonus:n("frost-chill")?s.chill.slow:0,frostRadius:n("frost-wide")?s.wide.radius:1,iceField:n("frost-field"),shatter:n("frost-shatter"),iceAge:n("frost-ice-age"),stormJumps:n("storm-conductor")?s.conductor.jumps:0,stormRange:n("storm-conductor")?s.conductor.range:1,stormFirst:n("storm-overcharge")?s.overcharge.first:1,stormShield:n("storm-overcharge")?s.overcharge.shield:2,staticField:n("storm-static"),thunderclap:n("storm-clap"),skill:{fire:uo(n,"fire"),frost:uo(n,"frost"),storm:uo(n,"storm")}};return hh.set(e,r),r}function Hu(i,e){return i.skills.reduce((t,n)=>t+(At(n).branch===e?At(n).cost:0),0)}function ma(i,e){const t=At(e),n=a=>i.skills.includes(a);if(n(e))return{state:"owned"};const s=Rn(t.branch,"II-A"),r=Rn(t.branch,"II-B");if((t.slot==="II-A"||t.slot==="III-A")&&n(r.id))return{state:"blocked",reason:`เลือกทาง ${r.name} แล้ว`};if((t.slot==="II-B"||t.slot==="III-B")&&n(s.id))return{state:"blocked",reason:`เลือกทาง ${s.name} แล้ว`};if(t.slot==="cap"){const a=i.skills.map(At).find(o=>o.slot==="cap");if(a)return{state:"blocked",reason:`มีขั้นสูงสุด ${a.name} แล้ว · เลือกได้ 1 ตัวต่อรอบ`}}return(t.branch==="core"?!i.built:i.levels[t.branch]<1)?{state:"locked",reason:t.branch==="core"?"สร้างป้อมก่อน":`ต้องปลดล็อก ${ai[t.branch]} ด้วยพลังงานก่อน`}:(t.slot==="II-A"||t.slot==="II-B")&&!n(Rn(t.branch,"I-a").id)&&!n(Rn(t.branch,"I-b").id)?{state:"locked",reason:"ต้องมีโหนดชั้น I ในสายนี้ก่อน"}:t.slot==="III-A"&&!n(s.id)?{state:"locked",reason:`ต้องมี ${s.name} ก่อน`}:t.slot==="III-B"&&!n(r.id)?{state:"locked",reason:`ต้องมี ${r.name} ก่อน`}:t.slot==="cap"&&Hu(i,t.branch)<4?{state:"locked",reason:"ต้องใช้ข้อมูลวิจัยในสายนี้ครบ 4 หน่วย"}:i.skillPoints<t.cost?{state:"locked",reason:`ต้องมีข้อมูลวิจัย ${t.cost} หน่วย`}:{state:"available"}}function P_(i,e){const t=[];if(i.phase==="victory"||i.phase==="defeat")return{ok:!1,message:"การต่อสู้จบแล้ว",events:t};const n=ma(i,e);if(n.state!=="available")return{ok:!1,message:n.state==="owned"?"ปลดโหนดนี้แล้ว":n.reason,events:t};const s=At(e);return i.skillPoints-=s.cost,i.skills.push(e),t.push({type:s.slot==="cap"?"capstone":"skill",node:e,element:s.branch==="core"?"arcane":s.branch}),{ok:!0,message:`ปลด ${s.name} แล้ว`,events:t}}function Gu(i){return Ne.respec.base+Ne.respec.step*i.respecCount}function I_(i){const e=[];if(i.phase!=="ready")return{ok:!1,message:"รีเซ็ตได้ระหว่างระลอกเท่านั้น",events:e};if(!i.skills.length)return{ok:!1,message:"ยังไม่มีโหนดให้รีเซ็ต",events:e};const t=Gu(i);if(i.gold<t)return{ok:!1,message:`ต้องการ ${t} พลังงานเพื่อรีเซ็ต`,events:e};const n=i.skills.reduce((s,r)=>s+At(r).cost,0);return i.gold-=t,i.skillPoints+=n,i.skills=[],i.respecCount++,i.novaCharges=Math.min(i.novaCharges,1),i.runtime.haste=0,e.push({type:"respec",value:n}),{ok:!0,message:`รีเซ็ตผังทักษะแล้ว คืนข้อมูลวิจัย ${n} หน่วย`,events:e}}function L_(i,e){const t=At(e),n=r=>i.skills.includes(r),s=[t.branch==="core"?{label:"สร้างป้อมแล้ว",met:i.built}:{label:`ปลดล็อก ${ai[t.branch]} ด้วยพลังงานแล้ว`,met:i.levels[t.branch]>=1}];if(t.slot==="II-A"||t.slot==="II-B"){const r=Rn(t.branch,"I-a"),a=Rn(t.branch,"I-b"),o=Rn(t.branch,t.slot==="II-A"?"II-B":"II-A");s.push({label:`มี ${r.name} หรือ ${a.name}`,met:n(r.id)||n(a.id)}),s.push({label:`ยังไม่ได้เลือกทาง ${o.name}`,met:!n(o.id)})}if(t.slot==="III-A"||t.slot==="III-B"){const r=Rn(t.branch,t.slot==="III-A"?"II-A":"II-B");s.push({label:`มี ${r.name}`,met:n(r.id)})}if(t.slot==="cap"){const r=i.skills.map(At).find(a=>a.slot==="cap"&&a.id!==e);s.push({label:"ใช้ข้อมูลวิจัยในสายนี้ครบ 4 หน่วย",met:Hu(i,t.branch)>=4}),s.push({label:"ยังไม่มีขั้นสูงสุดสายอื่น",met:!r})}return s.push({label:`มีข้อมูลวิจัย ${t.cost} หน่วย`,met:n(e)||i.skillPoints>=t.cost}),s}function D_(i){const e=At(i);if(e.slot==="II-A"||e.slot==="II-B"){const t=Rn(e.branch,e.slot==="II-A"?"II-B":"II-A"),n=Rn(e.branch,e.slot==="II-A"?"III-B":"III-A");return`เลือกทางนี้จะปิด ${t.name} และ ${n.name}`}return e.slot==="cap"?"เลือกขั้นสูงสุดได้ครั้งละ 1 สาย เปลี่ยนได้เมื่อรีเซ็ตผัง":null}const Oi=["split","flying","regen","armor","dash","shield"],fr={"green-blob":{trait:"split"},demon:{trait:"flying"},orc:{trait:"regen",regen:.04},"orc-skull":{trait:"regen",regen:.07},yeti:{trait:"armor"},alien:{trait:"dash"},"mushroom-king":{trait:"shield"},"blue-demon":{trait:"flying",stunImmune:!0}},dt={split:{count:2,hp:.2,speed:1.3,radius:.6,reward:1,leakDamage:.5,aliveCap:60,maxProgress:.92},regen:{delay:1.5},armor:{floor:.25,dot:.5},dash:{every:4,telegraph:.3,duration:.8,speed:2.5},shield:{ratio:.5,bossRatio:.6,delay:4,regen:.1,storm:2,fire:1},flying:{storm:1.25},stun:{immunity:2,boss:.3}},U_=Object.freeze({shield:0,maxShield:0,armor:0,sinceDamage:0,dashTimer:0,dashLeft:0,stun:0,stunImmune:0,mini:!1,brittle:0,charged:0,burnStacks:0,burnDepth:0});function xn(i){return fr[i].trait}function N_(i){const e=Math.max(0,i-1);return 6*(1+.17*e+.026*e*e)}function Vu(i,e,t,n,s){const r=xn(i),a=r==="shield"?Math.round(t*(e?dt.shield.bossRatio:dt.shield.ratio)):0;return{...U_,shield:a,maxShield:a,armor:r==="armor"?N_(n):0,dashTimer:r==="dash"?dt.dash.every-s%4*.5:0}}function Wu(i,e){return Math.max(Ne.chill.floor,Math.max(.45,.8-.025*i)-e)}function $u(i,e){return xn(i)==="flying"?1-(1-e)/2:e}function F_(i,e){const t={damage:0,blocked:0,shieldDamage:0,shieldBroken:!1};if(i.hp<=0||!(e.amount>0))return t;let n=e.amount*(e.taken??1);if(xn(i.kind)==="flying"&&e.element==="storm"&&(n*=dt.flying.storm),i.shield>0){const s=e.element==="storm"?e.stormShield??dt.shield.storm:e.element==="fire"?dt.shield.fire:1,r=Math.min(i.shield,n*s);i.shield-=r,t.shieldDamage=r,n=Math.max(0,n-r/s),i.shield<=1e-9&&(i.shield=0,t.shieldBroken=!0)}if(n>0&&i.armor>0){const s=Math.min(1,Math.max(0,e.pierce??0)),r=n;n=e.dot?n*dt.armor.dot:Math.max(n*dt.armor.floor,n-i.armor*(1-s)),t.blocked=r-n}return i.hp=Math.max(0,i.hp-n),i.sinceDamage=0,t.damage=n,t}function k_(i,e){return i.hp<=0||!(e>0)||fr[i.kind].stunImmune||i.stunImmune>0?!1:(i.stun=Math.max(i.stun,e*(i.boss?dt.stun.boss:1)),!0)}function hs(i,e){return i-e>1e-9?i-e:0}function O_(i,e,t,n){const s=fr[i.kind];i.sinceDamage+=e,i.charged=hs(i.charged,e),i.brittle=hs(i.brittle,e),i.stun>0?(i.stun=hs(i.stun,e),i.stun===0&&(i.stunImmune=dt.stun.immunity)):i.stunImmune=hs(i.stunImmune,e);const r=i.stun>0;s.trait==="regen"&&i.sinceDamage>=dt.regen.delay&&i.burn<=0&&i.hp<i.maxHp&&(i.hp=Math.min(i.maxHp,i.hp+i.maxHp*(s.regen??0)*e)),i.maxShield>0&&i.sinceDamage>=dt.shield.delay&&i.shield<i.maxShield&&(i.shield=Math.min(i.maxShield,i.shield+i.maxShield*dt.shield.regen*e));let a=1;return s.trait==="dash"&&(t||r?(i.dashTimer=dt.dash.every,i.dashLeft=0):(i.dashTimer=hs(i.dashTimer,e),i.dashTimer===0&&(i.dashTimer=dt.dash.every,i.dashLeft=dt.dash.duration,n.push({type:"dash",target:i.id,kind:i.kind,lane:i.lane,to:{x:i.x,z:i.z}})),i.dashLeft>0&&(a=dt.dash.speed,i.dashLeft=hs(i.dashLeft,e)))),{move:!r,speed:a}}const B_={"green-blob":1,alien:1,demon:1,"blue-demon":1,yeti:1,"mushroom-king":1,orc:.75,"orc-skull":.75};function z_(i,e){return B_[i]*(e.boss?Ou:e.mini?dt.split.radius:1)}const H_=.56;function G_(i){return Math.min(Bu,Math.max(1,H_/i))}function V_(i,e,t){const[n,s]=i.bind;return Math.min(Math.min(3.4,e.height*t)/n,Math.min(3.2,e.footprint*t)/s)}function W_(i,e){if(e>=.5){const s=i*.6;return[{dx:s*.1,dy:s*.04,w:s,h:s*.32,alpha:.2}]}const t=i*1.25,n=i*.95;return[{dx:t*.22,dy:t*.07,w:t,h:t*.34,alpha:.36},{dx:0,dy:n*.08,w:n,h:n*.32,alpha:.58}]}const $_={alien:{ground:16742938,air:16756794}};function X_(i,e){const t=$_[i];if(!t)return[];const n=e*2.1,s=e*1.9;return[{dx:0,dy:e*.1,w:n,h:n*.45,color:t.ground,k:.6},{dx:0,dy:-e*.45,w:s,h:s,color:t.air,k:.35}]}class q_{constructor(e,t,n,s,r,a){E(this,"quads",[]);this.layout=n,this.backZ=s,this.depthOf=r;const o=w_(n),[l,c]=o.size;for(const h of o.rects){const d=new tn(1,1),u=d.attributes.uv;for(let v=0;v<u.count;v++)u.setXY(v,(h.x+u.getX(v)*h.w)/l,1-(h.y+(1-u.getY(v))*h.h)/c);const f=new Wt({map:t,transparent:!0,depthWrite:!1}),g=new zt(d,f);g.frustumCulled=!1,g.renderOrder=this.inDepthOrder(h)?a.body:a.back,e.add(g),this.quads.push({rect:h,mesh:g})}}inDepthOrder(e){return this.layout.gates[e.gate].front!==void 0}update(e,t,n=[0,0,0],s,r=0){const a=e.scale,[o,l]=e.offset;for(const{rect:c,mesh:h}of this.quads){const d=this.layout.gates[c.gate],[u,f,g,v]=d.art,m=c.kind==="sealed",p=(m?1-t:1)*(1-(n[c.gate]??0));h.visible=p>.001,h.material.opacity=p;const S=d.front===void 0?this.backZ:this.depthOf(l+d.front*a)+(m?.01:0),w=(s==null?void 0:s[c.gate])??0,x=w*Math.sin(r*71)*3*a,A=w*Math.cos(r*57)*2*a;h.position.set(o+(u+g)/2*a+x,-(l+(f+v)/2*a+A),S),h.scale.set((g-u)*a,(v-f)*a,1)}}get drawn(){return this.quads.filter(e=>e.mesh.visible).length}}const bn={x:0,z:0},je=i=>({x:i.x,z:i.z}),qt=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z),$l=i=>(e,t)=>qt(e,i)-qt(t,i);function pr(i){return i.state.runtime.haste>0?Ne.novaAwaken.rate:1}function Xu(i,e){return i*e.boltDamage}function ga(i){return 15+i*12}function mr(i){return 7+5*i}function qu(i,e){return(18+i*14)*e.stormFirst}function va(i){return qu(i.state.levels.storm,i.mods)}function Y_(i,e){return Math.min(20,3+i+e.stormJumps)}function Yu(i,e){return(5.2+.15*i)*e}function Xl(i){return Yu(i.state.levels.storm,i.mods.stormRange)}function ql(i,e,t,n){k_(e,t)&&i.events.push({type:"stun",element:n,target:e.id,to:je(e),value:e.stun})}function Yl(i,e,t){const n=e.burn>0;e.burn=Math.max(e.burn,2.8*i.mods.burnDuration),e.burnStacks=Math.min(i.mods.burnStacks,e.burnStacks+1),e.burnDepth=n?Math.min(e.burnDepth,t):t}function _a(i,e){if(!i.mods.staticField||e.charged<=0||!i.state.levels.storm)return;e.charged=0;const t=i.living().filter(s=>s!==e&&qt(s,e)<Xl(i)).sort($l(e))[0];if(!t)return;const n=va(i)*Ne.staticField.ratio;i.events.push({type:"discharge",element:"storm",target:t.id,from:je(e),to:je(t),damage:n}),i.damage(t,n,"storm",{from:je(e)})}function Ku(i,e,t,n,s){const r=i.state.zones;r.length>=Ne.zoneCap&&r.shift();const a={id:i.state.runtime.nextZoneId++,kind:e,x:t.x,z:t.z,radius:n,life:s};r.push(a),i.events.push({type:"zone",element:e==="lava"?"fire":"frost",target:a.id,to:t,value:n})}function ju(i,e,t,n,s){const r=i.living().filter(o=>qt(o,e)<=t),a=r.map(je);for(const o of r)Yl(i,o,0),i.damage(o,n,"fire",{from:e,pierce:s}),_a(i,o);return a}function K_(i){const e=i.state.runtime;if(e.boltTimer>0)return;const t=i.aim(i.stats.range).slice(0,i.mods.boltTargets);if(!t.length)return;const n=Xu(i.stats.damage,i.mods);t.forEach((s,r)=>{const a=n*(r?Ne.prism.splash:1);i.events.push({type:"shot",element:"arcane",target:s.id,from:bn,to:je(s),damage:a}),i.damage(s,a,"arcane",{pierce:i.mods.boltPierce})}),e.boltTimer=1/(i.stats.rate*pr(i))}function Zu(i){return(2.35+.13*i.state.levels.fire)*i.mods.fireRadius}function j_(i){const{state:e}=i,t=e.levels.fire;if(!t||e.runtime.fireTimer>0)return;const n=i.aim(i.stats.range)[0];if(!n)return;const s=je(n),r=Zu(i),a=i.living().filter(o=>qt(o,s)<=r);i.events.push({type:"shot",element:"fire",target:n.id,from:bn,to:s,targets:a.map(je),value:r}),ju(i,s,r,ga(t),0),e.runtime.fireTimer=Math.max(.75,2.15-.075*t)/pr(i)}function Z_(i){const{state:e,mods:t}=i,n=e.levels.frost;if(!n||e.runtime.frostTimer>0)return;const s=i.aim(i.stats.range+.8)[0];if(!s)return;const r=(3.1+.16*n)*t.frostRadius,a=i.living().filter(o=>qt(o,s)<=r);i.events.push({type:"shot",element:"frost",target:s.id,from:bn,to:je(s),targets:a.map(je),value:r});for(const o of a)o.slow=Math.max(o.slow,3.1+.25*n),i.damage(o,mr(n),"frost"),_a(i,o);e.runtime.frostTimer=Math.max(1,3.05-.09*n)/(t.iceAge?Ne.iceAge.rate:1)/pr(i)}function Ju(i,e,t,n){const s=[e];for(;s.length<t;){const r=s[s.length-1],a=i.living().filter(o=>!s.includes(o)&&qt(o,r)<n).sort($l(r))[0];if(!a)break;s.push(a)}return s}function J_(i){const{state:e,mods:t}=i,n=e.levels.storm;if(!n||e.runtime.stormTimer>0)return;const s=i.aim(i.stats.range+.4)[0];if(!s)return;const r=Ju(i,s,Y_(n,t),Xl(i)),a=18+n*14,o=va(i);i.events.push({type:"shot",element:"storm",target:s.id,from:bn,to:je(s),targets:r.map(je),value:0}),r.forEach((l,c)=>{const h=c===0?o:a*Math.max(.55,1-c*.06);i.damage(l,h,"storm",{from:c===0?bn:je(r[c-1])}),t.staticField&&l.hp>0&&(l.charged=Ne.staticField.life)}),e.runtime.stormTimer=Math.max(.65,2.2-.08*n)/pr(i)}function Q_(i,e,t){const n=i.living();let s=e[0],r=-1;for(const a of e){const o=n.reduce((l,c)=>l+(qt(c,a)<=t?1:0),0);o>r&&(r=o,s=a)}return s}function ex(i,e){const t=i.aim(i.stats.range);if(!t.length)return!1;const n=Ne,s=Zu(i)*(e?n.sunfall.radius:1),r=Q_(i,t,s),a=ga(i.state.levels.fire)*n.meteor.damage*(e?n.sunfall.damage:1);return i.state.runtime.strikes.push({x:r.x,z:r.z,radius:s,damage:a,life:n.meteor.delay,skill:"meteor",ultimate:e}),i.events.push({type:"cast",skill:"meteor",ultimate:e,element:"fire",target:r.id,to:je(r),value:s}),!0}function tx(i,e){const t=Ne,n=i.aim(i.stats.range).slice(0,e?t.sunfall.embers:t.rain.embers);if(!n.length)return!1;const s=t.rain.radius*i.mods.fireRadius,r=ga(i.state.levels.fire)*t.rain.damage;return n.forEach((a,o)=>i.state.runtime.strikes.push({x:a.x,z:a.z,radius:s,damage:r,life:t.rain.delay+o*.06,skill:"rain",ultimate:e})),i.events.push({type:"cast",skill:"rain",ultimate:e,element:"fire",target:n[0].id,to:je(n[0]),targets:n.map(je),value:s}),!0}function nx(i,e){const t=i.aim(i.stats.range+.8)[0];if(!t)return!1;const n=Ne,s=i.state.levels.frost,r=je(t),a=n.glacier.radius*i.mods.frostRadius*(e?n.iceAge.freeze:1),o=i.living().filter(l=>qt(l,r)<=a);i.events.push({type:"cast",skill:"freeze",ultimate:e,element:"frost",target:t.id,to:r,targets:o.map(je),value:a});for(const l of o)l.slow=Math.max(l.slow,3.1+.25*s),i.damage(l,mr(s)*n.glacier.damage,"frost",{from:r}),l.hp>0&&ql(i,l,n.glacier.stun,"frost"),_a(i,l);return i.mods.iceField&&Ku(i,"ice",r,n.field.radius,n.field.life),!0}function ix(i,e,t){const n=t.x-e.x,s=t.z-e.z,r=n*n+s*s,a=r?Math.max(0,Math.min(1,((i.x-e.x)*n+(i.z-e.z)*s)/r)):0;return Math.hypot(i.x-(e.x+n*a),i.z-(e.z+s*a))}function sx(i,e){const t=i.aim(i.stats.range+.8)[0];if(!t)return!1;const n=Ne,s=i.state.levels.frost,r=i.stats.range+.8+n.brittle.reach,a=Math.hypot(t.x,t.z)||1,o={x:t.x/a*r,z:t.z/a*r},l=n.brittle.width*i.mods.frostRadius*(e?n.iceAge.spear:1),c=e?n.iceAge.brittle:n.brittle.duration,h=i.living().filter(d=>ix(d,bn,o)<=l+d.radius*.5);i.events.push({type:"cast",skill:"spear",ultimate:e,element:"frost",target:t.id,from:bn,to:o,targets:h.map(je),value:l});for(const d of h)d.slow=Math.max(d.slow,3.1+.25*s),d.brittle=Math.max(d.brittle,c),i.damage(d,mr(s)*n.brittle.damage,"frost",{from:bn}),_a(i,d);return!0}function rx(i,e){const t=i.aim(i.stats.range+.4).filter(a=>a.hp>0),n=t.filter(a=>!e.includes(a)),s=t.filter(a=>e.includes(a)),r=va(i);for(let a=0;a<Ne.tempest.strikes&&(n.length||s.length);a++){const o=n.length?n:s,[l]=o.splice(Math.floor(i.random()*o.length),1);i.events.push({type:"tempest",element:"storm",target:l.id,to:je(l),damage:r}),i.damage(l,r,"storm")}}function ax(i,e){const t=i.aim(i.stats.range+.4)[0];if(!t)return!1;const n=Ne,s=i.mods,r=Ju(i,t,n.chain.targets+s.stormJumps,Xl(i)*n.chain.range),a=(18+i.state.levels.storm*14)*n.chain.damage;return i.events.push({type:"cast",skill:"chain",ultimate:e,element:"storm",target:t.id,from:bn,to:je(t),targets:r.map(je),value:0}),r.forEach((o,l)=>{i.damage(o,l===0?a*s.stormFirst:a,"storm",{from:l===0?bn:je(r[l-1])}),s.staticField&&o.hp>0&&(o.charged=n.staticField.life)}),e&&rx(i,r),!0}function ox(i,e){const t=i.aim(i.stats.range+.4);if(!t.length)return!1;const n=Ne,s=i.mods,r=(e?n.tempest.strikes:n.thunder.targets)+s.stormJumps,a=[...t].sort((h,d)=>d.hp-h.hp||t.indexOf(h)-t.indexOf(d)).slice(0,r),o=a[0],l=va(i),c=18+i.state.levels.storm*14;if(i.events.push({type:"cast",skill:"thunder",ultimate:e,element:"storm",target:o.id,to:je(o),targets:a.map(je),value:0}),a.forEach((h,d)=>{i.damage(h,d===0?l*n.thunder.first:c*n.thunder.others,"storm"),h.hp>0&&ql(i,h,n.thunder.stun,"storm")}),s.thunderclap)for(const h of i.living().filter(d=>d!==o&&qt(d,o)<=n.clap.radius))i.damage(h,l*n.thunder.first*n.clap.ratio,"storm",{from:je(o)});return!0}const lx={meteor:ex,rain:tx,freeze:nx,spear:sx,chain:ax,thunder:ox};function cx(i){const{state:e}=i;for(const t of["fire","frost","storm"]){const n=i.mods.skill[t];!n||!e.levels[t]||e.runtime.skillTimers[t]>1e-9||lx[n.id](i,n.ultimate)&&(e.runtime.skillTimers[t]=zu(n.id))}}function hx(i){K_(i),j_(i),Z_(i),J_(i),cx(i)}function ux(i,e){const t=i.state.runtime;for(const s of["fire","frost","storm"])t.skillTimers[s]=Math.max(0,t.skillTimers[s]-e*pr(i));t.haste=Math.max(0,t.haste-e);for(const s of i.state.zones)s.life-=e;i.state.zones=i.state.zones.filter(s=>s.life>1e-9);for(const s of t.strikes)s.life-=e;const n=t.strikes.filter(s=>s.life<=1e-9);t.strikes=t.strikes.filter(s=>s.life>1e-9);for(const s of n){const r=s.skill==="meteor",a={x:s.x,z:s.z},o=i.living().filter(l=>qt(l,a)<=s.radius);i.events.push({type:"cast-impact",skill:s.skill,ultimate:s.ultimate,element:"fire",to:a,targets:o.map(je),value:s.radius}),ju(i,a,s.radius,s.damage,r?1:0),r&&i.mods.lava&&Ku(i,"lava",a,Ne.lava.radius,Ne.lava.life)}if(i.state.zones.length){for(const s of i.living())if(xn(s.kind)!=="flying")for(const r of i.state.zones)qt(s,r)>r.radius||(r.kind==="lava"?Yl(i,s,0):s.slow=Math.max(s.slow,Ne.field.slow))}}function dx(i){const{state:e,mods:t}=i,n=i.aim(1/0);if(!n.length)return!1;e.novaCharges--,e.cooldown===0&&(e.cooldown=t.novaCooldown),i.events.push({type:"nova",element:"arcane",from:bn,targets:n.map(je),value:t.novaPush>0?1:0});const s=(72+e.core*12)*t.novaDamage;for(const r of n)i.damage(r,s,"arcane"),r.slow=Math.max(r.slow,2),t.novaStun&&r.hp>0&&ql(i,r,t.novaStun,"arcane");if(t.novaPush)for(const r of n.filter(a=>a.hp>0).sort((a,o)=>a.progress-o.progress))i.retreat(r,Math.max(0,r.progress-Nu(r.lane,t.novaPush*(r.boss?Ne.novaPower.bossPush:1))));return t.novaAwaken&&(e.runtime.haste=Ne.novaAwaken.duration),!0}function fx(i,e){if(i.mods.wildfire&&e.burn>0&&e.burnDepth<Ne.wildfire.depth){const t=i.living().filter(n=>n!==e&&n.burn<=0&&qt(n,e)<=Ne.wildfire.radius).sort($l(e)).slice(0,Ne.wildfire.count);for(const n of t)Yl(i,n,e.burnDepth+1),i.events.push({type:"spread",element:"fire",target:n.id,from:je(e),to:je(n)})}if(i.mods.shatter&&e.brittle>0){const t=Math.min(e.maxHp*Ne.shatter.ratio,mr(i.state.levels.frost)*Ne.shatter.cap),n=i.living().filter(s=>s!==e&&qt(s,e)<=Ne.shatter.radius);i.events.push({type:"shatter",element:"frost",target:e.id,to:je(e),targets:n.map(je),damage:t});for(const s of n)i.damage(s,t,"frost",{from:je(e)})}}const fo={energy:"พลังงานรอยแยก",research:"ข้อมูลวิจัย"},px=["เราพบวิธีปิดประตูอย่างปลอดภัย เหนือเมฆ เงียบจนได้ยินเสียงประตู","พอเริ่มปิดประตู พวกมันก็เข้าหาแสง","บางตัวหยุดตรงขอบ ราวกับหวงพื้นที่","เปลือกของมัน เก็บพลังงานเป็นจังหวะ","รอยแยกแคบลง แต่พลังงานยังแกว่งอยู่","รับสัญญาณจาง ๆ จากเครือข่ายเก่า ยังไม่ทราบที่มา","บางตัวเลี่ยงแสง บางตัวยังคงตามมันมา","แรงสั่นเบาลง เราเริ่มวัดขอบประตูได้","สัญญาณเดิมกลับมา แล้วหายไปในความเงียบ","ขอบรอยแยกใกล้บรรจบ เราจะเฝ้าดูจนสุดทาง"],uh=["คลังข้อมูลพร้อม เริ่มทบทวนการปิดประตู","ภาพจำลองแสดงจังหวะพลังงาน ที่เราเคยพบ","ลองสังเกตอีกครั้ง พฤติกรรมยังมีสิ่งให้เรียนรู้","หอคอยเก็บบันทึกไว้ ให้เราศึกษาต่อในความสงบ"],mx={split:"เมื่อร่างใหญ่แตก สิ่งมีชีวิตเล็กสองตัว ยังเคลื่อนไหวต่อ เรากำลังบันทึกวิธีอยู่รอด ของพวกมัน",flying:"มันลอยตามแนวพลังงานเหนือพื้นดิน ราวกับกำลังหาทางผ่าน ในอากาศที่ไม่คุ้นเคย",regen:"เมื่อไม่ถูกโจมตี ร่างของมันค่อย ๆ ประสาน ความร้อนทำให้กระบวนการนี้หยุดลง",armor:"มันก้มตัวปกป้องส่วนอ่อนใต้เปลือก เมื่อพลังงานผันผวน มันหันเข้าหาหอคอย",dash:"ก่อนพุ่ง ร่างของมันสว่างวาบ มันตอบสนองต่อจังหวะพลังงาน เร็วจนเราจับภาพแทบไม่ทัน",shield:"ม่านพลังหุ้มร่างของมัน ขณะเคลื่อนออกจากประตู ดูคล้ายขอบเขตเล็ก ๆ ที่มันพยายามรักษาไว้"},gx=[{id:"overload",kind:"orc-skull",note:"โกเลมผลึก · Overload ฟื้น HP 7% ต่อวินาที"},{id:"ion",kind:"blue-demon",note:"การ์กอยล์ · Ion บินได้ และหยุดนิ่งไม่ได้"},{id:"golem-boss",kind:"orc",boss:!0,note:"บอสโกเลมผลึก · ฟื้น HP 4% ต่อวินาที เมื่อไม่ถูกโจมตี"},{id:"crown-boss",kind:"mushroom-king",boss:!0,note:"บอสวิญญาณ มีโล่ 60% ของ HP"},{id:"brute-boss",kind:"yeti",boss:!0,note:"บอสนักรบเขาเหล็ก · เกราะหนา ลดดาเมจทุกนัด"},{id:"ion-boss",kind:"blue-demon",boss:!0,note:"บอสการ์กอยล์ · Ion บินได้ และหยุดนิ่งไม่ได้"}],Oe={towerLog:"บันทึกหอคอย",speaker:"ทีมวิจัยหอคอย",chapter:"บทที่ 1–2 · หอคอยและประตูมิติแห่งแรก",foundation:"หลายปีหลังหายนะ เราเริ่มสร้าง Element Tower เพื่อศึกษาพลังงานรอยแยก",gateProgress:"ความคืบหน้าการปิดรอยแยก",monsters:"มอนสเตอร์จากรอยแยก",watcher:"ผู้เฝ้าป้อม",loading:{initial:"กำลังเชื่อมต่อหอคอย…",progress:"กำลังเตรียมหอคอยและมอนสเตอร์จากรอยแยก",ready:"หอคอยพร้อมแล้ว"},intro:{tagline:"โลกที่เราเสียไป โลกที่เราจะฟื้นคืน",panels:[{title:"วันที่โลกแตกสลาย",body:"การทดลองขยายประตูมิติผิดพลาด พลังงานจากมิติอื่น ทะลักเข้ามา แผ่นดินแตกออก และถูกพยุงไว้กลางฟ้า เป็นเกาะลอยนับไม่ถ้วน"},{title:"มอนสเตอร์จากรอยแยก",body:"ประตูมิติจำนวนมากเปิดค้าง สิ่งมีชีวิตประหลาด เริ่มออกมาจากอีกฟาก ผู้รอดชีวิตต้องเริ่มต้นใหม่ บนเกาะลอยฟ้า"},{title:"Element Tower",body:"หลายปีต่อมา เราสร้างหอคอย ที่แปลงพลังงานรอยแยก เป็นไฟ น้ำแข็ง และสายฟ้า เพื่อปกป้องเกาะ จนกว่าจะปิดประตูได้"}],start:"เริ่มเกม",resume:"กลับสู่เกม",replay:"ดูเรื่องราว"},research:{tab:"บันทึกวิจัย",intro:"มอนสเตอร์จากรอยแยก (Rift Monsters) เป็นสิ่งมีชีวิตจากต่างมิติ พลังงานที่ผันผวนระหว่างปิดประตู ดึงดูดพวกมันเข้าหาหอคอย",empty:"ยังไม่มีบันทึก พบสิ่งมีชีวิตระหว่างระลอก เพื่อเริ่มสังเกตพฤติกรรม",pending:"ความสามารถที่ยังไม่พบ จะบันทึกเมื่อปรากฏจริง ในรอบนี้",unlocked:"บันทึกวิจัยใหม่"},helpSteps:[{heading:"ผู้เฝ้าป้อม สร้างป้อมแล้วเริ่มระลอก",body:"Element Tower คือหอคอยวิจัย ที่ป้องกันเกาะอัตโนมัติ มอนสเตอร์จากรอยแยก เข้ามาทางประตู 3 จุด ปกป้องหอคอยให้ครบ 10 ระลอก เพื่อปิดประตูอย่างปลอดภัย"},{heading:"ใช้พลังงานรอยแยกเพิ่มพลัง",body:"พลังงานรอยแยก (Rift Energy) จากประตู แปลงเป็นธาตุ FIRE FROST STORM ใช้การ์ดด้านล่าง เพื่อเพิ่มพลังธาตุและระดับแกนป้อม"},{heading:"ใช้ข้อมูลวิจัยในผังทักษะ",body:"ได้ข้อมูลเมื่อสร้างป้อมและผ่านระลอก ใช้ปลดโหนด เพื่อปรับวิธีป้องกันเกาะ"},{heading:"ใช้ Nova ในจังหวะคับขัน",body:"ปล่อยพลังฉุกเฉินจากแกนป้อม แล้วรอชาร์จ"}],treeGuide:[{heading:"ข้อมูลวิจัย",body:"สร้างป้อม +1 · ผ่านระลอก +1 · ระลอก 5, 10, … เพิ่มอีก +1 · ก่อนระลอก 10 มีรวม 11 หน่วย"},{heading:"โครงของสาย",body:"4 สาย สายละ 7 โหนด: ชั้น I 2 โหนด → ทางแยก II เลือก 1 ทาง → ชั้น III ของทางนั้น → ขั้นสูงสุด ★"},{heading:"ขั้นสูงสุด",body:"ใช้ข้อมูลวิจัย 2 หน่วย ต้องใช้ในสายนั้นครบ 4 หน่วย และมีได้ 1 โหนดต่อรอบ"},{heading:"พลังงานกับข้อมูลวิจัย",body:"พลังงานซื้อระดับพลังและซ่อม · ข้อมูลวิจัยปลดโหนด · สายธาตุต้องปลดด้วยพลังงานก่อน"},{heading:"รีเซ็ต",body:"ทำได้เฉพาะระหว่างระลอก คืนข้อมูลวิจัยทั้งหมด ครั้งแรก 150 พลังงาน แพงขึ้นครั้งละ 100 พลังงาน"},{heading:"เปิดผังได้ทุกเวลา",body:'เกมหยุดขณะเปิด เลือกโหนดก่อน แล้วกด "ปลดโหนด" เพื่อยืนยัน'}],simulation:{label:"การจำลองจากคลังข้อมูลของหอคอย",short:"การจำลอง",action:"จำลองแบบไม่สิ้นสุด",start:"เริ่มการจำลองจากคลังข้อมูลของหอคอย",locked:"ปิดประตูแรกก่อน เพื่อใช้คลังข้อมูลของหอคอย",explanation:"ศึกษาต่อได้ด้วยการจำลอง จากคลังข้อมูลของหอคอย"},victory:{title:"ประตูแรกปิดลงแล้ว",lines:["เราปิดประตูได้อย่างปลอดภัย แผ่นดินใกล้เคียง ค่อย ๆ เชื่อมกัน","หอคอยใช้ข้อมูลวิจัย ควบคุมให้เกาะลดระดับลงช้า ๆ เมฆเคลื่อนผ่านขอบผา","พลังธาตุค่อย ๆ จาง งานวิจัยยังอยู่กับเรา","ผู้เฝ้าป้อม วันนี้เรารู้แล้วว่า เราฟื้นฟูโลกได้"]},defeat:{title:"หอคอยเงียบลง",line:"ประตูยังเปิดอยู่ บันทึกครั้งนี้ช่วยให้เรา เตรียมพร้อมครั้งต่อไป ลองปรับธาตุ ใช้ Nova และซ่อมป้อม",simulationTitle:"สิ้นสุดการจำลอง",simulationLine:"บันทึกการจำลองครั้งนี้ไว้แล้ว เรากลับมาทบทวน สิ่งที่เรียนรู้ได้เสมอ"}};function vx(i){return i.phase!=="build"&&i.phase!=="ready"?null:i.phase==="build"?Oe.foundation:i.endless?uh[Math.max(0,i.wave-10)%uh.length]:px[i.wave]??null}function _x(i){return Oi.filter(e=>i.seenTraits.includes(e)).map(e=>({trait:e,note:mx[e]}))}function xx(i){return gx.filter(e=>i.seenMonsters.some(t=>t.kind===e.kind&&(e.boss===void 0||t.boss===e.boss)))}const Qu=10,Kl={"green-blob":{hp:22,speed:1.05,reward:7,damage:8,radius:.825},demon:{hp:31,speed:1.24,reward:9,damage:10,radius:1.15},yeti:{hp:64,speed:.8,reward:13,damage:15,radius:1.025},orc:{hp:43,speed:1,reward:10,damage:12,radius:.925},"orc-skull":{hp:54,speed:.94,reward:12,damage:14,radius:.99},alien:{hp:25,speed:1.55,reward:10,damage:8,radius:.69},"mushroom-king":{hp:48,speed:.86,reward:11,damage:12,radius:1.025},"blue-demon":{hp:39,speed:1.35,reward:12,damage:11,radius:1.175}},ed=.1,td=1e6,bx=1.3,nd=.85,yx={2:.8,3:.9,4:.85,5:.9};function Pn(i,e){return ku(i,e)}function gr(i){const e=Pn(i.lane,i.progress),t=Pn(i.lane,i.progress-.002),n=Pn(i.lane,i.progress+.002),s=n.x-t.x,r=n.z-t.z,a=Math.hypot(s,r)||1,o=Math.floor((i.id-1)/3)%3-1,l=Math.min(1,Math.max(0,(1-i.progress)/id)),c=o*Math.min(nd,Math.max(0,1.35-i.radius))*l;return{x:e.x-r/a*c,z:e.z+s/a*c}}const id=.16,Mx=.005;function jl(i,e,t){const n=gr({...i,progress:e}),s=Pn(i.lane,e);return t.every(r=>{const a=i.radius+r.radius+ed+Mx;return xl(n,r)<a?!1:Math.max(e,r.progress)<1-id||xl(s,Pn(r.lane,r.progress))>=a})}function sd(){return{phase:"build",built:!1,wave:0,gold:320,hp:120,maxHp:120,kills:0,score:0,core:1,levels:{fire:0,frost:0,storm:0},enemies:[],spawned:0,total:0,extra:0,remaining:0,cooldown:0,novaCharges:1,skillPoints:0,skills:[],respecCount:0,zones:[],seed:20261015,paused:!1,speed:1,endless:!1,seenTraits:[],seenMonsters:[],time:0,runtime:{accumulator:0,spawnTimer:0,boltTimer:0,fireTimer:0,frostTimer:0,stormTimer:0,nextId:1,nextMiniId:td,queue:[],splits:[],haste:0,skillTimers:{fire:0,frost:0,storm:0},strikes:[],nextZoneId:1}}}function Zl(i,e){return Math.round(e==="core"?75*1.5**(i.core-1):{fire:80,frost:95,storm:110}[e]*1.55**i.levels[e])}function Jl(i){return{damage:26+10*(i.core-1),range:Math.min(14.5,9.8+.36*(i.core-1)),rate:Math.min(4.5,1.5+.16*(i.core-1))}}function Ks(i){return{x:i.x,z:i.z}}function xl(i,e){return Math.hypot(i.x-e.x,i.z-e.z)}function xa(i){return i.enemies.filter(e=>e.hp>0)}function Sx(i){return i.seed=i.seed*1664525+1013904223>>>0,i.seed/4294967296}function rd(i,e){const t={state:i,events:e,mods:oi(i),stats:Jl(i),damage:(n,s,r,a={})=>wx(t,n,s,r,a),aim:n=>Dx(i,n),living:()=>xa(i),retreat:(n,s)=>Tx(i,n,s),random:()=>Sx(i)};return t}function wx(i,e,t,n,s){const{state:r,events:a,mods:o}=i;if(e.hp<=0)return;const l=e.brittle>0,c=l?1-(1-(s.pierce??0))*(1-Ne.brittle.pierce):s.pierce,h=F_(e,{amount:t,element:n,dot:s.dot,pierce:c,taken:l?Ne.brittle.taken:1,stormShield:o.stormShield});if(!s.silent&&!s.dot&&(a.push({type:"hit",element:n,target:e.id,from:s.from??{x:0,z:0},to:Ks(e),damage:h.damage}),h.blocked>0&&a.push({type:"armor-block",element:n,target:e.id,to:Ks(e),damage:h.blocked})),h.shieldBroken&&a.push({type:"shield-break",element:n,target:e.id,to:Ks(e),kind:e.kind,boss:e.boss}),e.hp===0){const d=e.mini?dt.split.reward:Math.round(Kl[e.kind].reward*(e.boss?6:1)*o.goldMul);r.gold+=d,r.kills++,r.score+=d*10+(e.boss?500:0),a.push({type:"kill",element:n,target:e.id,to:Ks(e),kind:e.kind,boss:e.boss,value:d}),xn(e.kind)==="split"&&!e.mini&&Ex(r,e),fx(i,e)}}function ad(i){return i.runtime.splits.reduce((e,t)=>e+t.count,0)}function od(i){return i.total-i.spawned+i.enemies.length+ad(i)}function Ex(i,e){const t=dt.split,n=Math.max(0,Math.min(t.count,t.aliveCap-xa(i).length-ad(i)));n&&(i.extra+=n,i.runtime.splits.push({kind:e.kind,lane:e.lane,progress:e.progress,radius:e.radius,maxHp:e.maxHp,speed:e.speed,x:e.x,z:e.z,count:n}))}function Tx(i,e,t){const n=i.enemies.filter(a=>a!==e&&a.hp>0&&a.lane===e.lane),s=a=>jl(e,a,n);let r=e.progress;for(;r>t+1e-9;){const a=Math.max(t,r-.005);if(!s(a))break;r=a}e.progress=r,Object.assign(e,gr(e))}function Ax(i,e){const t=oi(i);if(i.novaCharges>=t.novaCharges){i.novaCharges=t.novaCharges,i.cooldown=0;return}i.cooldown=Math.max(0,i.cooldown-e),i.cooldown===0&&(i.novaCharges++,i.novaCharges<t.novaCharges&&(i.cooldown=t.novaCooldown))}function ld(i,e){const t=dt.split;for(const n of i.runtime.splits){const s=n.radius*t.radius;for(const r of[0,-.07,.07,-.14,.14,-.21]){if(!n.count)break;const a=n.progress+Nu(n.lane,r);if(a<0||a>t.maxProgress)continue;const o=i.runtime.nextMiniId,l=gr({id:o,lane:n.lane,progress:a,radius:s});if(!jl({id:o,lane:n.lane,radius:s},a,xa(i).filter(h=>h.lane===n.lane)))continue;const c=Math.max(1,Math.round(n.maxHp*t.hp));i.enemies.push({...Vu(n.kind,!1,c,i.wave,o),mini:!0,id:o,kind:n.kind,lane:n.lane,progress:a,hp:c,maxHp:c,speed:n.speed*t.speed,radius:s,boss:!1,slow:0,burn:0,...l}),i.runtime.nextMiniId++,n.count--,e.push({type:"split",target:o,kind:n.kind,lane:n.lane,from:{x:n.x,z:n.z},to:l})}}i.runtime.splits=i.runtime.splits.filter(n=>n.count>0)}function Ql(i){const e=i.phase==="wave"?i.wave:i.wave+1,t=bl(e),n=Object.fromEntries(Oi.map(a=>[a,0]));for(const a of t)n[xn(a.kind)]++;const s=new Set;for(let a=1;a<e;a++)for(const o of bl(a))s.add(xn(o.kind));const r=t.filter(a=>a.boss);return{wave:e,total:t.length,traits:n,newTraits:Oi.filter(a=>n[a]>0&&!s.has(a)),boss:r.length?{kind:r[0].kind,trait:xn(r[0].kind),count:r.length,stunImmune:!!fr[r[0].kind].stunImmune}:null,lanes:[0,1,2].map(a=>t.filter(o=>o.lane===a).length),mainLane:cd(e)}}function cd(i){return[1,0,2][((i-1)%3+3)%3]}function Rx(i,e){const t=cd(i),n=[0,1,2].filter(l=>l!==t),{main:s,of:r}=Uu,a=e%r;return Math.floor((a+1)*s/r)>Math.floor(a*s/r)?t:n[(e-Math.floor((e+1)*s/r))%2]}const Cx={3:"orc",5:"mushroom-king",7:"yeti",0:"blue-demon"};function Px(i){return Cx[i%10]}function bl(i){const e=["green-blob","demon"];i>=2&&e.push("orc"),i>=3&&e.push("yeti","mushroom-king"),i>=4&&e.push("alien","orc-skull"),i>=6&&e.push("blue-demon");const t=Math.min(170,18+(i-1)*12),n=[],s=Px(i);for(let r=0;r<t;r++){const a=!!s&&(r===t-1||i>=10&&r===Math.floor(t*.55)),o=a?s:i===1?"green-blob":e[(r*7+Math.floor(r/3)+i)%e.length],l=a?i>=10&&r===t-1?2:1:Rx(i,r);n.push({kind:o,lane:l,boss:a})}return n}function Ix(i,e){const t=i.runtime.queue[i.spawned];if(!t)return!1;const n=Kl[t.kind],s=1+1.35*(i.wave-1)+.026*(i.wave-1)**2,r=Math.round(n.hp*s*(t.boss?1.5:1)*bx*(yx[i.wave]??1)),a=i.runtime.nextId,o=Math.min(1.6,n.radius*(t.boss?1.55:1)),l=gr({id:a,lane:t.lane,progress:0,radius:o});if(i.enemies.some(f=>f.hp>0&&f.lane===t.lane&&xl(f,l)<f.radius+o+ed))return!1;const c={...Vu(t.kind,t.boss,r,i.wave,a),id:a,kind:t.kind,lane:t.lane,progress:0,hp:r,maxHp:r,speed:n.speed*(1+Math.min(.4,(i.wave-1)*.018))*(t.boss?.68:1),radius:o,boss:t.boss,slow:0,burn:0,...l};i.enemies.push(c),i.runtime.nextId++,i.spawned++,e.push({type:"spawn",target:c.id,to:l,kind:c.kind,boss:c.boss,lane:c.lane}),i.seenMonsters.some(f=>f.kind===c.kind&&f.boss===c.boss)||i.seenMonsters.push({kind:c.kind,boss:c.boss});const h=xn(c.kind);i.seenTraits.includes(h)||(i.seenTraits.push(h),e.push({type:"research",trait:h}));const d=i.runtime.queue.slice(i.spawned).findIndex(f=>f.lane===c.lane),u=d>=0?i.runtime.queue[i.spawned+d]:void 0;return u!=null&&u.boss&&e.push({type:"boss-warning",target:i.runtime.nextId+d,lane:u.lane,kind:u.kind,boss:!0,to:Pn(u.lane,0)}),!0}function Lx(i,e,t){const n=t.filter(r=>r.hp>0&&r.lane===i.lane),s=r=>jl(i,r,n);if(!s(e)){let r=i.progress,a=e;for(let o=0;o<12;o++){const l=(r+a)/2;s(l)?r=l:a=l}e=r}i.progress=e,Object.assign(i,gr(i))}const dh=i=>(1-i.progress)*pa(i.lane);function Dx(i,e){return xa(i).filter(t=>Math.hypot(t.x,t.z)<=e).sort((t,n)=>dh(t)-dh(n)||t.id-n.id)}function Ux(i,e,t){if(i.time+=e,Ax(i,e),i.phase!=="wave")return;const n=i.runtime,s=rd(i,t);n.spawnTimer-=e,n.boltTimer-=e,n.fireTimer-=e,n.frostTimer-=e,n.stormTimer-=e;const r=i.wave<=3?i.total:3*(6+Math.min(i.wave,10));for(;n.spawnTimer<=0&&i.spawned<i.total;){if(i.enemies.length>=50){n.spawnTimer=.35;break}const l=r-i.spawned%r,c=Math.min(3,i.total-i.spawned,50-i.enemies.length,l),h=i.spawned;for(let d=0;d<c&&Ix(i,t);d++);if(i.spawned<h+c){n.spawnTimer=.05;break}n.spawnTimer+=i.spawned%r===0?11.5:.35}ux(s,e);const a=Wu(i.levels.frost,s.mods.slowBonus),o=[];for(const l of[...i.enemies].sort((c,h)=>h.progress-c.progress||c.id-h.id)){if(l.hp<=0)continue;const c=l.slow>0,h=l.burn>0;if(l.slow=Math.max(0,l.slow-e),l.burn=Math.max(0,l.burn-e),h&&s.damage(l,(4+4*i.levels.fire)*Math.max(1,l.burnStacks)*e,"fire",{dot:!0,silent:!0}),l.burn<=1e-9&&(l.burnStacks=0,l.burnDepth=0),l.hp<=0)continue;const d=s.mods.iceAge&&Math.hypot(l.x,l.z)<=Ne.iceAge.radius?Ne.iceAge.speed:1,u=O_(l,e,c||d<1,t),f=c?$u(l.kind,a):1,g=u.move?l.speed*f*d*u.speed*e*d_*Uu.speed*f_()/pa(l.lane):0;if(Lx(l,Math.min(1,l.progress+g),o),o.push(l),l.progress>=1){const v=l.boss?35:Math.round(Kl[l.kind].damage*(l.mini?dt.split.leakDamage:1));if(i.hp=Math.max(0,i.hp-v),l.hp=0,t.push({type:"leak",target:l.id,to:Ks(l),kind:l.kind,boss:l.boss,damage:v}),i.hp===0){i.phase="defeat",t.push({type:"defeat",value:i.wave});break}}}if(i.phase==="wave"&&hx(s),i.phase==="wave"?ld(i,t):i.runtime.splits=[],i.enemies=i.enemies.filter(l=>l.hp>0),i.remaining=od(i),i.phase==="wave"&&i.remaining===0){const l=45+i.wave*12;i.gold+=l,i.score+=i.wave*100;const c=1+(i.wave%5===0?1:0);i.skillPoints+=c,t.push({type:"points",value:c}),i.zones=[],n.strikes=[],n.haste=0,i.wave>=Qu&&!i.endless?(i.phase="victory",t.push({type:"victory",value:i.score})):(i.phase="ready",t.push({type:"wave",value:i.wave}))}}function fh(i,e){const t=[];if(i.paused||i.phase==="defeat"||i.phase==="victory"||!Number.isFinite(e)||e<=0)return t;i.runtime.accumulator+=e*i.speed;const n=1/30;for(;i.runtime.accumulator+1e-10>=n;)if(i.runtime.accumulator-=n,Math.abs(i.runtime.accumulator)<1e-10&&(i.runtime.accumulator=0),Ux(i,n,t),["defeat","victory"].includes(i.phase)){i.runtime.accumulator=0;break}return t}function Nx(i,e){return typeof e=="string"?ba(i,e):e.type==="unlock"?P_(i,e.node):I_(i)}function ba(i,e){const t=[],n=o=>({ok:!1,message:o,events:t}),s=o=>({ok:!0,message:o,events:t});if(e==="restart")return Object.assign(i,sd()),s("เริ่มการป้องกันครั้งใหม่");if(e==="endless")return i.phase!=="victory"?n(Oe.simulation.locked):(i.endless=!0,i.phase="ready",i.paused=!1,s(Oe.simulation.start));if(i.phase==="victory"||i.phase==="defeat")return n("การต่อสู้จบแล้ว");if(e==="pause")return i.paused=!i.paused,s(i.paused?"หยุดเกมชั่วคราว":"กลับสู่การต่อสู้");if(e==="speed")return i.speed=i.speed===1?2:1,s(`ความเร็ว ${i.speed} เท่า`);if(i.paused)return n("เล่นต่อก่อนใช้คำสั่งนี้");if(e==="build")return i.built?n("มีป้อมอยู่แล้ว"):i.gold<120?n("ต้องการ 120 พลังงานเพื่อสร้างป้อม"):(i.gold-=120,i.built=!0,i.phase="ready",i.skillPoints+=1,t.push({type:"build",to:{x:0,z:0}},{type:"points",value:1}),s("สร้าง Element Tower แล้ว เลือกพลังและเริ่มระลอกแรก"));if(!i.built)return n("สร้างป้อมก่อน");if(e==="wave")return i.phase!=="ready"?n("กำจัดศัตรูระลอกนี้ก่อน"):(i.wave++,i.phase="wave",i.runtime.queue=bl(i.wave),i.spawned=0,i.total=i.runtime.queue.length,i.extra=0,i.runtime.splits=[],i.runtime.strikes=[],i.runtime.skillTimers={fire:0,frost:0,storm:0},i.runtime.haste=0,i.zones=[],i.remaining=i.total,i.runtime.spawnTimer=.3,i.runtime.boltTimer=0,i.runtime.fireTimer=0,i.runtime.frostTimer=0,i.runtime.stormTimer=0,t.push({type:"wave",value:i.wave}),s(`ระลอก ${i.wave} เริ่มแล้ว`));if(e==="nova")return i.phase!=="wave"?n("ใช้ Nova ระหว่างต่อสู้"):i.novaCharges<=0?n(`Nova พร้อมใน ${Math.ceil(i.cooldown)} วินาที`):dx(rd(i,t))?(ld(i,t),i.enemies=i.enemies.filter(o=>o.hp>0),i.remaining=od(i),s("ปล่อย Nova")):n("ยังไม่มีศัตรูในสนาม");if(e==="repair"){if(i.hp===i.maxHp)return n("พลังป้อมเต็มแล้ว");if(i.gold<60)return n("ต้องการ 60 พลังงานเพื่อซ่อมป้อม");i.gold-=60;const o=Math.min(45,i.maxHp-i.hp);return i.hp+=o,t.push({type:"upgrade",to:{x:0,z:0},value:o}),s(`ซ่อมป้อม +${o} พลัง`)}const r=Zl(i,e);return i.gold<r?n(`ต้องการ ${r} พลังงาน`):(i.gold-=r,e==="core"?i.core++:i.levels[e]++,t.push({type:"upgrade",element:e==="core"?"arcane":e,to:{x:0,z:0},value:e==="core"?i.core:i.levels[e]}),s(`${{core:"แกนป้อม",fire:"เพลิง",frost:"น้ำแข็ง",storm:"สายฟ้า"}[e]} ระดับ ${e==="core"?i.core:i.levels[e]}`))}const Bt={cell:128,columns:16,rows:8,directions:5,clips:{move:8,attack:6,death:8}},Fx={move:0,attack:Bt.clips.move,death:Bt.clips.move+Bt.clips.attack},kx=Bt.clips.move+Bt.clips.attack+Bt.clips.death;function ph(i){const e=ln[i];return e.elite?i:e.model}const Ox=Object.keys(ln).filter((i,e,t)=>ln[i].elite||t.find(n=>ln[n].model===ln[i].model&&!ln[n].elite)===i);function Bx(i,e,t){return t*kx+Fx[i]+e}function zx(i){const e=Math.atan2(Math.sin(i),Math.cos(i)),t=Bt.directions-1,n=Math.min(t,Math.round(Math.abs(e)/(Math.PI/t)));return{dir:n,flip:e<0&&n>0&&n<t}}const Hx=.3;function Gx(i,e){const t=oi(e),n=i.burn>0,s=i.slow>0?1-$u(i.kind,Wu(e.levels.frost,t.slowBonus)):0,r=xn(i.kind);return{shield:i.shield<=0?"none":i.shield<i.maxShield*Hx?"cracked":"full",regen:r==="regen"&&i.hp<i.maxHp&&i.burn<=0&&i.sinceDamage>=dt.regen.delay,dashTelegraph:r==="dash"&&i.dashLeft===0&&i.stun<=0&&i.slow<=0&&i.dashTimer<=dt.dash.telegraph,dashing:i.dashLeft>0&&i.stun<=0&&i.slow<=0,stunned:i.stun>0,burnStacks:i.burn>0?Math.max(1,i.burnStacks):0,brittle:i.brittle>0,flying:r==="flying",burnPips:n&&t.burnStacks>1?{filled:Math.max(1,i.burnStacks),total:Ne.stack.max}:null,burnHot:n&&t.burnDuration>1,slowDepth:s,chill:t.slowBonus>0&&i.slow>0,charged:t.staticField&&i.charged>0}}function Vx(i){const e=[];return i.burnPips&&e.push("burn"),i.charged&&e.push("charge"),e}function Wx(i,e){return i.slice(1).map((t,n)=>e!==null&&Math.hypot(t.x-i[n].x,t.z-i[n].z)>=e)}function $x(i){var t;const e=oi(i);return{arcane:e.boltTargets>1?"prism":"bolt",nova:e.novaPush>0?"shockwave":"pulse",clap:e.thunderclap,lens:e.boltDamage>1,mine:e.goldMul>1,conductor:e.stormJumps>0,overcharge:e.stormFirst>1,bridgeRange:((t=e.skill.storm)==null?void 0:t.id)==="chain"?Yu(i.levels.storm,e.stormRange):null}}const Xx=.2;class qx{constructor(){E(this,"last",new Map);E(this,"time",-1/0)}update(e,t){t<this.time&&this.last.clear(),this.time=t;const n=[],s=new Map;for(const r of e){const a=this.last.get(r.id);a!==void 0&&(a-r.progress)*pa(r.lane)>=Xx&&n.push({id:r.id,lane:r.lane,from:a,to:r.progress}),s.set(r.id,r.progress)}return this.last=s,n}get size(){return this.last.size}}function Yx(i,e){return e?1:Math.max(.55,1-i*.06)}function Kx(i){return .45}function hd(i){var n;const e=i.skills.map(At),t=s=>{var a;const r=e.filter(o=>o.branch===s);return{fork:((a=r.find(o=>o.slot==="II-A"||o.slot==="II-B"))==null?void 0:a.id)??null,deep:r.some(o=>o.slot==="III-A"||o.slot==="III-B")}};return{ports:{core:t("core"),fire:t("fire"),frost:t("frost"),storm:t("storm")},capstone:((n=e.find(s=>s.slot==="cap"))==null?void 0:n.id)??null,chargeRing:i.skills.includes("core-nova-rush"),hasteAura:i.skills.includes("core-nova-awaken")}}function jx(i){const e=oi(i);return i.novaCharges>=e.novaCharges?1:Math.min(1,Math.max(0,1-i.cooldown/e.novaCooldown))}function Zx(i){return Math.min(1,Math.max(0,i.runtime.haste/Ne.novaAwaken.duration))}const aa=Ne.iceAge.radius,Jx={node:1,capstone:1.5,total:3,reduced:.3};function Qx(i,e){const t=Jx,n=i.map(At),s=n.some(l=>l.slot==="cap")&&!e?t.capstone:0,r=n.filter(l=>l.slot!=="cap"||e).length,a=e?Math.min(t.reduced,t.total/Math.max(1,n.length)):r?Math.min(t.node,(t.total-s)/r):0;let o=0;return n.map(l=>{const c=l.slot==="cap",h=c&&!e?t.capstone:a,d={node:l.id,branch:l.branch,capstone:c,start:o,duration:h};return o+=h,d})}class e1{constructor(){E(this,"nodes",[])}add(e){let t=!1;for(const n of e)(n.type==="skill"||n.type==="capstone")&&n.node&&this.nodes.push(n.node),n.type==="respec"&&(this.nodes=[],t=!0);return t}clear(){this.nodes=[]}take(e){const t=this.nodes.filter((n,s)=>e.skills.includes(n)&&this.nodes.indexOf(n)===s);return this.nodes=[],t}get length(){return this.nodes.length}}class t1{constructor(){E(this,"cues",[]);E(this,"elapsed",0);E(this,"started",0);E(this,"ended",0)}play(e){this.cues=[...e],this.elapsed=0,this.started=this.ended=0}cancel(){this.cues=[],this.started=this.ended=0}get active(){return this.cues.find(e=>this.elapsed>=e.start&&this.elapsed<e.start+e.duration)??null}get busy(){return this.ended<this.cues.length}get activeProgress(){const e=this.active;return e?Math.min(1,(this.elapsed-e.start)/e.duration):0}advance(e){this.elapsed+=e;const t=[],n=[];for(;this.started<this.cues.length&&this.elapsed>=this.cues[this.started].start;)t.push(this.cues[this.started++]);for(;this.ended<this.cues.length&&this.elapsed>=this.cues[this.ended].start+this.cues[this.ended].duration-1e-9;)n.push(this.cues[this.ended++]);return{started:t,ended:n}}}const ud={arcane:"bolt",nova:"pulse",clap:!1,lens:!1,mine:!1,conductor:!1,overcharge:!1,bridgeRange:null},ec={1:0,3:1,5:2};function n1(i){return i>=5?5:i>=3?3:i>0?1:0}function i1(i,e){return i==="arcane"?e.core>=7?5:e.core>=4?3:1:n1(e.levels[i])||1}const s1={fire:{size:96,flight:.26,arc:[40,.1]},frost:{size:84,flight:.24,arc:[26,.06]},arcane:{size:76,flight:.22,arc:[16,.04]}};function ta(i,e,t){const n=ec[e],s=s1[i],r={...s,sprite:`${i}-shot-${e}`,size:s.size*(1+.12*n),glow:1.15,glowAlpha:.45+.12*n,hot:.2*n,trail:1+.35*n,every:.035-.0065*n};return i==="arcane"&&t.lens?{...r,size:r.size*1.35,glowAlpha:r.glowAlpha+.15,hot:r.hot+.3,trail:r.trail*1.3}:r}function po(i,e){const t=ec[i];return{width:32*(1+.2*t)*(e.conductor?1.3:1),glowAlpha:.7+.12*t}}function Vr(i){return 1+.12*ec[i]}const r1=["fire-orb","frost-orb","storm-orb","arcane-orb","lightning-bolt","impact-star","explosion","frost-burst","ring","rune-circle","ember","ice-chip","spark","sparkle","smoke","snowflake","glow","meteor","lava-pool","ice-field","ground-crack","frost-ring","cracks","pip","charge-glyph","stun-star","coin","wind-blade","dust-streak","ice-block","beam","band","fire-shot-1","fire-shot-3","fire-shot-5","frost-shot-1","frost-shot-3","frost-shot-5","arcane-shot-1","arcane-shot-3","arcane-shot-5","ice-spear","scorch","frost-patch","char-mark"],Ti={columns:4,rows:12};function mo(i){const e=r1.indexOf(i),t=e%Ti.columns,n=Math.floor(e/Ti.columns);return[t/Ti.columns,(Ti.rows-1-n)/Ti.rows]}const go={particles:400,perImpact:20,marks:20},ni={fire:16747069,frost:9430271,storm:13863935,arcane:12559103};function a1(i,e,t,n){return t<=0?{...i}:t>=1?{...e}:{x:i.x+(e.x-i.x)*t,y:i.y+(e.y-i.y)*t-n*4*t*(1-t)}}const o1={fire:"ember",frost:"snowflake",arcane:"sparkle"},l1=[[0,.065,1],[.135,.205,.85]];class c1{constructor(e=1){E(this,"particles",[]);E(this,"projectiles",[]);E(this,"bolts",[]);E(this,"still",!1);E(this,"scale",1);E(this,"metric",{xx:30,xy:0,zx:0,zy:15});E(this,"view",{w:1280,h:720});E(this,"screen");E(this,"marks",[]);E(this,"seed");this.seed=e>>>0||1}get reduced(){return this.still}set reduced(e){const t=e&&!this.still;if(this.still=e,!t)return;const n=this.projectiles;this.projectiles=[];for(const s of n)s.land?s.land():this.impact(s.element,s.to(),s.radius);this.particles=this.particles.filter(s=>!s.follow||n.every(r=>s.follow!==r.ride));for(const s of this.particles)s.flicker=0,s.follow||(s.vx=s.vy=s.gravity=s.spin=0);for(const s of this.bolts)s.still=!0,s.pulse=!1}px(e){return e*Math.max(.45,this.scale)}arcOf(e,t){return Math.min(e.arc[0]*this.scale,t*e.arc[1])}rand(){this.seed=this.seed+1831565813>>>0;let e=this.seed;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.rand()}clear(){this.particles=[],this.projectiles=[],this.bolts=[],this.marks=[]}shift(e,t){for(const n of this.particles)n.follow||(n.x+=e,n.y+=t);for(const n of this.projectiles)n.from.x+=e,n.from.y+=t,n.pos.x+=e,n.pos.y+=t}add(e){if(this.particles.length>=go.particles)return;const t=!this.reduced||e.follow,n={additive:!1,tint:16777215,vx:0,vy:0,gravity:0,drag:0,t:0,size1:e.size0,alpha0:1,alpha1:0,rot:0,spin:0,...e,...t?{}:{vx:0,vy:0,gravity:0,spin:0,flicker:0}};return this.particles.push(n),n}burst(e,t,n,s,r){const a=Math.min(t,e.left);e.left-=a;for(let o=0;o<a;o++){const l=(o+this.rand()*.8)/a*Math.PI*2,c=this.range(...r),h=n(l,c);this.add({x:s.x,y:s.y,vx:Math.cos(l)*c,vy:Math.sin(l)*c*.7,...h})}}shot(e,t,n,s,r,a,o){if(e==="storm"){this.chain(()=>t,[n,...s],{width:36});for(const f of[n,...s])this.impact("storm",f(),r*.5);return}const l=o??(()=>this.impact(e,n(),r));if(this.reduced){l();return}const c=a??ta(e,1,ud),h=n(),d=Math.hypot(h.x-t.x,h.y-t.y),u={element:e,from:{...t},to:n,t:0,flight:c.flight,arc:this.arcOf(c,d),radius:r,pos:{...t},rot:0,trail:0,look:c,land:o};this.projectiles.push(u),this.flier(u,c.sprite,this.px(c.size),ni[e],c.glow,c.glowAlpha,c.hot)}flier(e,t,n,s,r,a,o){const l=e.flight,c=e.ride=()=>({x:e.pos.x,y:e.pos.y,rot:e.rot}),h=e.element==="fire",d=h?.16:.05,u=this.rand()*6.28;this.add({sprite:"glow",additive:!0,tint:s,x:e.pos.x,y:e.pos.y,life:l,size0:n*r,alpha0:a,alpha1:a,follow:c,flicker:d*1.4,seed:u}),h&&t==="meteor"&&this.add({sprite:"fire-shot-5",additive:!0,tint:16760944,x:e.pos.x,y:e.pos.y,life:l,size0:n*1.9,alpha0:.85,alpha1:.85,follow:c,flicker:.22,seed:u+2}),this.add({sprite:t,x:e.pos.x,y:e.pos.y,life:l,size0:n,alpha0:1,alpha1:1,follow:c,flicker:d,seed:u+1}),h&&this.add({sprite:t==="meteor"?"fire-shot-3":t,additive:!0,tint:16765066,x:e.pos.x,y:e.pos.y,life:l,size0:n*(t==="meteor"?1.3:1.12),alpha0:.5,alpha1:.5,follow:c,flicker:.3,seed:u+3.5}),o>0&&this.add({sprite:"glow",additive:!0,tint:16777215,x:e.pos.x,y:e.pos.y,life:l,size0:n*.6,alpha0:o,alpha1:o,follow:c,flicker:d*1.6,seed:u+5})}throw(e,t,n,s,r){if(this.reduced){r==null||r();return}const a=n(),o=Math.hypot(a.x-t.x,a.y-t.y),l={element:e,from:{...t},to:n,t:0,flight:s.flight,arc:this.arcOf(s,o),radius:0,pos:{...t},rot:0,trail:0,look:s,land:r??(()=>{})};this.projectiles.push(l),this.flier(l,s.sprite,this.px(s.size),ni[e],s.glow,s.glowAlpha,s.hot)}advanceShot(e,t){e.t+=t/e.flight;const n=e.pos,s=e.to();if(e.pos=a1(e.from,s,e.t,e.arc),Math.hypot(e.pos.x-n.x,e.pos.y-n.y)>.01&&(e.rot=Math.atan2(e.pos.y-n.y,e.pos.x-n.x)),this.reduced||e.element==="storm"||(e.trail-=t,e.trail>0))return;e.trail=e.look.every;const r=e.look.trail,a=this.px(e.look.size)/60,o={x:e.pos.x-Math.cos(e.rot)*10*a,y:e.pos.y-Math.sin(e.rot)*10*a},l=o1[e.element];e.look.streak&&this.add({sprite:"glow",additive:!0,tint:ni[e.element],x:o.x,y:o.y,life:.3,size0:this.px(e.look.size)*e.look.streak,size1:this.px(e.look.size)*e.look.streak*.6,aspect:.3,alpha0:.75,rot:e.rot}),e.element==="fire"?(this.add({sprite:"fire-shot-1",additive:!0,tint:16756832,x:o.x,y:o.y,vx:-Math.cos(e.rot)*40+this.range(-15,15),vy:-Math.sin(e.rot)*40+this.range(-50,-20),life:this.range(.14,.22)*r,size0:this.px(30)*Math.max(1,a),size1:this.px(10),alpha0:.85,rot:e.rot,flicker:.25,seed:this.rand()*6.28}),this.add({sprite:l,x:o.x,y:o.y,vx:this.range(-30,30),vy:this.range(-60,-20),life:this.range(.25,.4)*r,size0:this.px(12)*Math.max(1,a),size1:this.px(3),spin:this.range(-4,4)}),this.rand()<(e.look.sprite==="meteor"?.8:.4)&&this.add({sprite:"smoke",x:o.x,y:o.y,vy:-25,life:.45*r,size0:this.px(12)*a,size1:this.px(24)*a,alpha0:.55})):e.element==="frost"?this.add({sprite:this.rand()<.5?"snowflake":"ice-chip",x:o.x,y:o.y,vx:this.range(-25,25),vy:this.range(-20,20),life:.35*r,size0:this.px(10),size1:this.px(4),spin:this.range(-3,3)}):this.add({sprite:l,additive:!0,tint:ni.arcane,x:o.x,y:o.y,vx:this.range(-20,20),vy:this.range(-20,20),life:.3*r,size0:this.px(14),size1:this.px(2)})}impact(e,t,n,s=1){const r=Math.max(this.px(40),n)*s,a={left:go.perImpact},o=h=>{const d=Math.min(h,a.left);return a.left-=d,d},l=ni[e],c=h=>Math.round(h*Math.min(2,s));o(1)&&this.add({sprite:"glow",additive:!0,tint:l,x:t.x,y:t.y,life:.22,size0:r*1.6,size1:r*2.2,alpha0:.9}),e==="fire"?(o(1)&&this.add({sprite:"explosion",x:t.x,y:t.y-r*.15,life:.42,size0:r*1.1,size1:r*1.7,alpha0:1,rot:this.range(0,6.28),spin:this.range(-1.5,1.5),flicker:.12,seed:this.rand()*6.28}),this.burst(a,c(8),()=>({sprite:"ember",gravity:320,life:this.range(.35,.6),size0:this.px(14),size1:this.px(3),spin:this.range(-6,6)}),t,[120,240]),this.burst(a,3,()=>({sprite:"smoke",gravity:-40,drag:2,life:.7,size0:r*.4,size1:r*.8,alpha0:.6}),t,[20,50])):e==="frost"?(o(1)&&this.add({sprite:"frost-burst",x:t.x,y:t.y,life:.4,size0:r,size1:r*1.45,rot:this.range(0,6.28)}),this.burst(a,c(8),()=>({sprite:"ice-chip",gravity:360,life:this.range(.35,.55),size0:this.px(13),size1:this.px(6),spin:this.range(-8,8)}),t,[110,220]),this.burst(a,3,()=>({sprite:"snowflake",drag:3,life:.6,size0:this.px(12),size1:this.px(8),spin:this.range(-2,2)}),t,[30,70])):e==="storm"?(o(1)&&this.add({sprite:"storm-orb",x:t.x,y:t.y,life:.18,size0:r*.7,size1:r*.9}),this.burst(a,c(6),()=>({sprite:"spark",additive:!0,tint:16777215,drag:6,life:this.range(.15,.3),size0:this.px(16),size1:this.px(4),rot:this.range(0,6.28)}),t,[160,300])):(o(1)&&this.add({sprite:"impact-star",x:t.x,y:t.y,life:.22,size0:r*.7,size1:r,spin:3}),o(1)&&this.add({sprite:"spark",additive:!0,tint:16777215,x:t.x,y:t.y,life:.12,size0:r*.9,size1:r*.5,rot:this.range(0,6.28)}),this.burst(a,c(6),()=>({sprite:"sparkle",additive:!0,tint:l,drag:4,life:.35,size0:this.px(15),size1:this.px(3)}),t,[90,180]))}groundRing(e,t,n,s={}){const r=t*2,a=this.reduced?1:s.from??.35;this.add({sprite:s.sprite??"band",additive:s.additive??!1,tint:n,x:e.x,y:e.y,t:-(s.delay??0),life:s.life??.55,size0:r*a,size1:r,alpha0:s.alpha??.9,alpha1:0,ground:!0,flat:!0,ease:"out"})}edge(e,t,n,s=.5,r="band",a=.85){this.add({sprite:r,tint:n,x:e.x,y:e.y,life:s,size0:t*2,size1:t*2,alpha0:a,alpha1:0,ground:!0,flat:!0})}scar(e,t,n,s,r=16777215,a=.9,o=!1){this.add({sprite:n,additive:o,tint:r,x:e.x,y:e.y,life:s,size0:t*2,size1:t*2,alpha0:a,alpha1:0,rot:this.range(0,6.28),ground:!0,flat:!0})}mark(e,t,n,s,r=16777215,a=.8){if(this.marks=this.marks.filter(c=>c.t<c.life),this.marks.length>=go.marks){const c=this.marks.shift();this.particles=this.particles.filter(h=>h!==c)}const o=t*2,l=this.add({sprite:n,tint:r,x:e.x,y:e.y,life:s,size0:o*.85,size1:o,alpha0:a,alpha1:0,rot:this.range(0,6.28),ground:!0,flat:!0,ease:"out",late:!0});l&&this.marks.push(l)}skyBolt(e,t){const n=()=>{const s=e();return{x:s.x+(t.lean??0),y:s.y-t.height}};this.bolts.push({a:n,b:e,t:0,life:t.life??.25,width:t.width,tint:t.tint,glow:t.glow,contour:t.contour,pulse:!!t.pulse&&!this.reduced,still:this.reduced})}beam(e,t,n,s,r,a=.24){this.bolts.push({a:()=>e,b:t,t:0,life:a,width:n,sprite:"beam",tint:s,glow:r,glowAlpha:.6,still:!0})}chain(e,t,n){const s=n.life??.22,r=this.reduced,a=n.glowAlpha;t.forEach((o,l)=>{var u,f;const c=l?t[l-1]:e,h=n.width*(l?.75:1),d=l?((u=n.bright)==null?void 0:u.call(n,l))??1:n.first??1;if(l&&((f=n.bridges)!=null&&f[l-1])){const g=()=>Math.max(this.px(40),Math.hypot(o().x-c().x,o().y-c().y)*.35),v=m=>()=>{const p=c(),S=o();return{x:p.x+(S.x-p.x)*m,y:p.y+(S.y-p.y)*m-g()*4*m*(1-m)}};for(let m=0;m<3;m++)this.bolts.push({a:v(m/3),b:v((m+1)/3),t:0,life:s*1.6,width:h*1.15,tint:15984895,glow:14929151,glowAlpha:a,alpha:d,still:r,arch:!0});return}this.bolts.push({a:c,b:o,t:0,life:s,width:h,tint:n.tint,glow:n.glow,glowAlpha:a,alpha:d,still:r})})}shards(e,t){const n=t.length?t.slice(0,8):Array.from({length:5},(r,a)=>({x:e.x+Math.cos(a*1.26)*this.px(50),y:e.y+Math.sin(a*1.26)*this.px(30)})),s=.22;for(const r of n)this.add({sprite:"ice-chip",x:e.x,y:e.y,vx:(r.x-e.x)/s,vy:(r.y-e.y)/s,life:s,size0:this.px(17),size1:this.px(12),alpha0:1,alpha1:.6,rot:Math.atan2(r.y-e.y,r.x-e.x)})}streak(e,t,n){const s=Math.hypot(t.x-e.x,t.y-e.y);this.reduced||s<1||this.add({sprite:"dust-streak",x:(e.x+t.x)/2,y:(e.y+t.y)/2,life:1.2,size0:s+n,aspect:n/(s+n),alpha0:.9,alpha1:0,rot:Math.atan2(t.y-e.y,t.x-e.x),ground:!0})}screenGlow(e,t,n,s){if(this.screen&&this.particles.includes(this.screen))return;const r=Math.max(this.view.w,this.view.h)*2.6;this.screen=this.add({sprite:"glow",additive:!0,tint:t,x:e.x,y:e.y,life:s,size0:r*.8,size1:r,alpha0:n,alpha1:0,ease:"out"})}waves(e,t,n,s=3,r=.12){for(let a=0;a<s;a++)this.groundRing(e,t*(.55+.45*(a+1)/s),n,{sprite:"ring",additive:!0,life:.65,from:.12,delay:a*r,alpha:.85})}nova(e,t,n,s=[]){const r=this.reduced?1:.5;if(this.add({sprite:"rune-circle",tint:8019199,x:e.x,y:e.y,life:1.1,size0:12*r,size1:12,alpha0:.9,spin:1.5,ground:!0,flat:!0,ease:"out"}),this.add({sprite:"rune-circle",additive:!0,tint:ni.arcane,x:e.x,y:e.y,life:1.1,size0:12*r,size1:12,alpha0:.8,spin:1.5,ground:!0,flat:!0,ease:"out"}),this.add({sprite:"rune-circle",additive:!0,tint:16767370,x:e.x,y:e.y,life:1,size0:16*r,size1:16,alpha0:.6,rot:.4,spin:-1,ground:!0,flat:!0,ease:"out"}),this.groundRing(e,t,3127528,{sprite:"ring",life:.6,from:.12}),this.groundRing(e,t*.82,9399295,{sprite:"ring",life:.7,from:.1,delay:.08}),this.waves(e,t,16773320),this.screenGlow(e,13018879,.3,.65),!this.reduced){const a=(o,l,c)=>this.add({sprite:"glow",additive:!0,tint:16773840,x:e.x,y:e.y,vx:o,vy:l,life:c,size0:this.px(80),size1:this.px(30),aspect:.22,alpha0:.95,alpha1:.3,rot:Math.atan2(l,o)});if(s.length)for(const o of s.slice(0,10))a((o.x-e.x)/.35,(o.y-e.y)/.35,.35);else for(let o=0;o<10;o++){const l=(o+this.rand()*.8)/10*Math.PI*2,c=this.range(this.px(260),this.px(420));a(Math.cos(l)*c,Math.sin(l)*c*.7,.55)}}if(this.burst({left:8},8,()=>({sprite:"sparkle",additive:!0,tint:16777215,drag:2,life:.5,size0:this.px(16),size1:this.px(3)}),e,[this.px(160),this.px(260)]),!!n){this.groundRing(e,t*1.1,2080686,{sprite:"ring",life:.8,from:.08,alpha:1}),this.groundRing(e,t*1.04,2080686,{sprite:"ring",life:.7,from:.08,alpha:.8,delay:.06});for(let a=0;a<6;a++){const o=a/6*Math.PI*2+.3,l={x:Math.cos(o)*4.2,z:Math.sin(o)*4.2};this.scar({x:e.x+this.metric.xx*l.x+this.metric.zx*l.z,y:e.y+this.metric.xy*l.x+this.metric.zy*l.z},1.3,"ground-crack",1.5)}}}update(e){for(const n of this.projectiles)this.advanceShot(n,e);const t=this.projectiles.filter(n=>n.t>=1);this.projectiles=this.projectiles.filter(n=>n.t<1);for(const n of t)n.land?n.land():this.impact(n.element,n.to(),n.radius);for(const n of this.particles){if(n.t+=e,n.t<0)continue;if(n.follow){const r=n.follow();n.x=r.x,n.y=r.y,n.rot=r.rot;continue}const s=Math.exp(-n.drag*e);n.vx*=s,n.vy=n.vy*s+n.gravity*e,n.x+=n.vx*e,n.y+=n.vy*e,n.rot+=n.spin*e}this.particles=this.particles.filter(n=>n.t<n.life);for(const n of this.bolts)n.t+=e;this.bolts=this.bolts.filter(n=>n.t<n.life)}}function h1(i){const e=i.aspect??1;if(i.t<0)return{size:i.size0,alpha:0,aspect:e};const t=Math.min(1,i.t/i.life),n=i.ease==="out"?1-(1-t)**3:t,s=i.late?Math.max(0,(t-.65)/.35):t;let r=i.size0+(i.size1-i.size0)*n,a=i.alpha0+(i.alpha1-i.alpha0)*s,o=e;if(i.flicker){const l=i.t*2*Math.PI,c=i.seed??0,h=Math.sin(l*9.3+c)*.6+Math.sin(l*14.1+c*1.7)*.4,d=Math.sin(l*11.7+c*2.3);r*=1+i.flicker*h,o*=1-i.flicker*.7*d,a*=1-i.flicker*.45*(1+Math.sin(l*7.9+c*3.1))/2}return{size:r,alpha:a,aspect:o}}function u1(i){var t;const e=i.alpha??1;return i.pulse?e*(((t=l1.find(([n,s])=>i.t>=n&&i.t<s))==null?void 0:t[2])??0):e*Math.min(1,(1-i.t/i.life)*1.6)}class Wr{constructor(e,t,n,s,r){E(this,"mesh");E(this,"cell");E(this,"alpha");E(this,"count",0);E(this,"m",new st);E(this,"q",new $n);E(this,"c",new Ke);E(this,"axis",new k(0,0,1));E(this,"p",new k);E(this,"s",new k);this.capacity=n,this.depth=r;const a=new tn(1,1);this.cell=new cn(new Float32Array(n*2),2),this.alpha=new cn(new Float32Array(n),1),this.cell.setUsage(Dt),this.alpha.setUsage(Dt),a.setAttribute("iCell",this.cell),a.setAttribute("iAlpha",this.alpha);const o=new Wt({map:e,transparent:!0,depthTest:r!==void 0,depthWrite:!1,blending:t?Qs:Ii,premultipliedAlpha:!1,side:on,forceSinglePass:!0}),l=new et(1/Ti.columns,1/Ti.rows);o.onBeforeCompile=c=>{c.uniforms.uCellSize={value:l},c.vertexShader=`attribute vec2 iCell;
attribute float iAlpha;
uniform vec2 uCellSize;
varying float vAlpha;
`+c.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = uv * uCellSize + iCell;
vAlpha = iAlpha;`),c.fragmentShader=`varying float vAlpha;
`+c.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.a *= vAlpha;`)},o.customProgramCacheKey=()=>`vfx2d-${t}`,this.mesh=new Ps(a,o,n),this.mesh.instanceMatrix.setUsage(Dt),this.mesh.frustumCulled=!1,this.mesh.renderOrder=s,this.mesh.setColorAt(0,this.c.set(16777215)),this.mesh.count=0,this.mesh.visible=!1}begin(){this.count=0}put(e,t,n){this.mesh.setMatrixAt(this.count,this.m),this.mesh.setColorAt(this.count,this.c.set(t)),this.cell.setXY(this.count,e[0],e[1]),this.alpha.setX(this.count,n),this.count++}push(e,t,n,s,r,a,o,l){this.count>=this.capacity||l<=0||(this.q.setFromAxisAngle(this.axis,-a),this.m.compose(this.p.set(t,-n,this.depth??0),this.q,this.s.set(s,r,1)),this.put(e,o,l))}pushFlat(e,t,n,s,r,a,o,l,c){if(this.count>=this.capacity||l<=0)return;const h=Math.cos(a),d=Math.sin(a),u=h*s,f=d*s,g=-d*r,v=h*r;this.m.set(c.xx*u+c.zx*f,c.xx*g+c.zx*v,0,t,-(c.xy*u+c.zy*f),-(c.xy*g+c.zy*v),0,-n,0,0,1,this.depth??0,0,0,0,1),this.put(e,o,l)}end(){if(this.mesh.count=this.count,this.mesh.visible=this.count>0,!!this.count)for(const e of[this.mesh.instanceMatrix,this.mesh.instanceColor,this.cell,this.alpha])e&&(e.clearUpdateRanges(),e.addUpdateRange(0,this.count*e.itemSize),e.needsUpdate=!0)}}class d1{constructor(e,t,n,s,r){E(this,"shapes");E(this,"glows");E(this,"groundShapes");E(this,"groundGlows");E(this,"batches");this.shapes=new Wr(t,!1,1536,n+1),this.glows=new Wr(t,!0,1024,n),this.groundShapes=new Wr(t,!1,384,s+.01,r),this.groundGlows=new Wr(t,!0,256,s,r),this.batches=[this.shapes,this.glows,this.groundShapes,this.groundGlows],e.add(...this.batches.map(a=>a.mesh))}batch(e,t){return e?t?this.groundGlows:this.groundShapes:t?this.glows:this.shapes}sprite(e,t,n,s,r,a,o,l,c,h,d,u){const f=this.batch(t,n),g=mo(e);s?f.pushFlat(g,r,a,o,l,c,h,d,u):f.push(g,r,a,o,l,c,h,d)}draw(e,t,n){for(const r of this.batches)r.begin();const s=e.metric;for(const r of e.particles){const{size:a,alpha:o,aspect:l}=h1(r);this.sprite(r.sprite,r.ground,r.additive,r.flat,r.x,r.y,a,a*l,r.rot,r.tint,o,s)}for(const r of t)this.sprite(r.sprite,r.ground,r.additive,r.flat,r.x,r.y,r.w,r.h,r.rot,r.tint,r.alpha,s);for(const r of e.bolts){const a=r.a(),o=r.b(),l=Math.hypot(o.x-a.x,o.y-a.y),c=Math.atan2(o.y-a.y,o.x-a.x),h=u1(r);if(h<=0||l<.5)continue;const d=(a.x+o.x)/2,u=(a.y+o.y)/2,f=r.still||Math.floor((n+r.t)*20)%2?1:-1,g=r.pulse?h:(r.alpha??1)*(1-r.t/r.life),v=mo(r.sprite??"lightning-bolt");this.glows.push(mo("glow"),d,u,l*1.05,r.width*2.6,c,r.glow??13863935,(r.glowAlpha??.8)*g),r.contour!==void 0&&this.shapes.push(v,d,u,l,r.width*2.2*f,c,r.contour,Math.min(1,h)),(r.additive?this.glows:this.shapes).push(v,d,u,l,r.width*f,c,r.tint??16777215,Math.min(1,h))}for(const r of this.batches)r.end()}get counts(){return{top:this.shapes.mesh.count+this.glows.mesh.count,ground:this.groundShapes.mesh.count+this.groundGlows.mesh.count}}}function f1(i){const[e,t]=i(0,0),[n,s]=i(1,0),[r,a]=i(0,1);return{xx:n-e,xy:s-t,zx:r-e,zy:a-t}}function vo(i,e,t){return{x:i.xx*e+i.zx*t,y:i.xy*e+i.zy*t}}function p1(i,e){return{rx:e*Math.hypot(i.xx,i.zx),ry:e*Math.hypot(i.xy,i.zy)}}const m1=.5,g1=.25,v1={lava:Ne.lava.life,ice:Ne.field.life},_1={lava:.12,ice:.04};function x1(i,e,t){const n=[];for(const s of i){const r=Math.min(1,Math.max(0,s.life)/m1),a=v1[s.kind]-s.life,o=Math.min(1,Math.max(0,a)/g1),l=s.radius*(t?1:.6+.4*(1-(1-o)**2)),c=s.id*1.7+(t?0:e*_1[s.kind]),h={x:s.x,z:s.z};if(s.kind==="lava"){const d=t?0:.12*Math.sin(e*3.2+s.id);n.push({sprite:"glow",additive:!0,tint:16742954,alpha:(.45+d)*r,at:h,radius:l*1.25,rot:0}),n.push({sprite:"lava-pool",additive:!1,tint:16777215,alpha:.62*r,at:h,radius:l,rot:c})}else n.push({sprite:"glow",additive:!0,tint:10479871,alpha:.12*r,at:h,radius:l*1.1,rot:0}),n.push({sprite:"ice-field",additive:!1,tint:16777215,alpha:.55*r,at:h,radius:l,rot:c}),n.push({sprite:"frost-ring",additive:!1,tint:16777215,alpha:.75*r,at:h,radius:l,rot:-c})}return n}function b1(i,e,t=1){const n={x:0,z:0},s=e?0:i*.03;return[{sprite:"ice-field",additive:!1,tint:16777215,alpha:.12*t,at:n,radius:aa,rot:s},{sprite:"glow",additive:!0,tint:12578815,alpha:.08*t,at:n,radius:aa*1.05,rot:0}]}const vi={rime:12579583,rimeDeep:3116287,burn:16751165,burnDim:4860442,hot:16773824,burnGlow:16747069,hotGlow:16771496},mh=-.6;function y1(i,e,t,n,s,r){const a=[],o=Math.max(.75,r),l=Math.max(1,e.feet-e.top),c=(u,f,g,v,m=16777215,p=1,S=!1,w=0)=>a.push({sprite:u,additive:S,tint:m,alpha:p,x:f,y:g,w:v,h:v,rot:w});if(i.slowDepth>0){const u=Math.max(.2,t*(.18+.7*i.slowDepth));a.push({sprite:"frost-ring",additive:!1,tint:i.chill?vi.rimeDeep:vi.rime,alpha:i.chill?.9:.75,x:e.x,y:e.feet,w:2*u,h:2*u,rot:0,ground:!0,flat:!0})}i.brittle&&c("cracks",e.x,e.top+l*.5,Math.min(e.width,l)*.85,16777215,.9,!1,e.id%7*.9);let h=0;if(i.burnStacks>0){const u=Math.min(3,i.burnStacks),f=Math.min(64*o,Math.max(14*o,l*(.26+.12*u)));c("glow",e.x,e.top,f*1.6,i.burnHot?vi.hotGlow:vi.burnGlow,i.burnHot?.5:.35,!0);for(let g=0;g<u;g++){const v=g===0?0:g===1?-1:1,m=s?1:1+.08*Math.sin(n*13+e.id+g*2.1),p=f*(g?.72:1)*m,S=p*.8,w=e.x+v*f*.36,x=e.top+f*.12-p/2;a.push({sprite:"ember",additive:!1,tint:16777215,alpha:1,x:w,y:x,w:S,h:p,rot:mh}),i.burnHot&&a.push({sprite:"ember",additive:!0,tint:vi.hot,alpha:.8,x:w,y:x,w:S*.9,h:p*.9,rot:mh})}h=f}if(i.stunned){const u=Math.max(10*o,e.width*.32),f=u*.4,g=e.top-6*o,v=s?0:n*4;for(let m=0;m<3;m++){const p=v+m*Math.PI*2/3;c("stun-star",e.x+Math.cos(p)*u,g+Math.sin(p)*f,13*o,16777215,1,!1,s?0:p*.5)}h=Math.max(h,12*o)}let d=e.top-h-17*o;for(const u of Vx(i)){if(u==="charge"){c("charge-glyph",e.x,d-3*o,18*o),d-=20*o;continue}const f=i.burnPips;for(let g=0;g<f.total;g++){const v=g<f.filled,m=v?vi.burn:vi.burnDim;c("pip",e.x+(g-(f.total-1)/2)*12*o,d,10*o,m,v?1:.8)}d-=13*o}return a}let Ws;function M1(){const i=ti().id;if((Ws==null?void 0:Ws.level)!==i){let e=0;for(let t=0;t<3;t++)for(let n=0;n<=100;n++){const s=Pn(t,n/100);e=Math.max(e,Math.hypot(s.x,s.z))}Ws={level:i,value:Math.ceil((e+nd+.1)*10)/10}}return Ws.value}const S1=1400,gh={x:0,z:0},w1=12124144,vh=44,us=i=>`${i.x},${i.z}`,E1=new Set(["hit","kill","stun","tempest","shot","armor-block","shield-break","spread","discharge","shatter","leak"]),T1=.25,_o=(i,e)=>`${i}:${e}`;class A1{constructor(e,t){E(this,"quads",[]);E(this,"styles",ud);E(this,"stages",{fire:1,frost:1,storm:1,arcane:1});E(this,"knockbacks",new qx);E(this,"mainBolt",null);E(this,"frozen",new Map);E(this,"bubbles",0);E(this,"clock",0);E(this,"ids",new Map);E(this,"deaths",new Map);E(this,"flights",[]);E(this,"aimed",new Map);E(this,"carried",new Map);E(this,"struck",new Map);E(this,"onCoin");this.vfx=e,this.space=t}onImpact(e,t){this.after(this.carried.get(e),t)}after(e,t){e&&this.flights.includes(e)?e.held.push(t):t()}aim(e,t,n){for(const s of t)s!==void 0&&(n?this.aimed.set(_o(e,s),n):this.aimed.delete(_o(e,s)))}unaim(e){for(const t of[...this.aimed.keys()])t.startsWith(`${e}:`)&&this.aimed.delete(t)}carry(e){if(e.target===void 0)return;let t;e.type==="hit"?(t=this.aimed.get(_o(e.element,e.target)),this.struck.set(e.target,t)):e.type==="kill"&&(t=this.struck.get(e.target)),t&&this.carried.set(e,t)}fly(e,t,n){const s={left:n+T1,held:[]};return this.flights.push(s),this.aim(e,t,s),()=>this.release([s])}release(e){for(const t of e){const n=this.flights.indexOf(t);if(!(n<0)){this.flights.splice(n,1);for(const s of t.held)s()}}}deathFlight(e){const t=e===void 0?void 0:this.deaths.get(e);return t&&this.carried.get(t)}idsOf(e){return(e??[]).map(t=>this.ids.get(us(t)))}follow(e,t,n){const s=this.space,r=s.ground(e),a=t??this.ids.get(us(e));let o=s.actor(e,a),l={x:r.x,y:r.y-this.vfx.px(vh)*n};const c=()=>{o===void 0&&a!==void 0&&(o=s.actor(e,a));const h=o===void 0?void 0:s.place(o);return h&&(l={x:h.x,y:h.y-h.height*n}),l};return c(),c}heightOf(e,t){var s;const n=this.space.actor(e,t);return(n===void 0||(s=this.space.place(n))==null?void 0:s.height)??this.vfx.px(vh)}sync(e){this.styles=$x(e);for(const t of["fire","frost","storm","arcane"])this.stages[t]=i1(t,e)}handle(e){this.mainBolt=null,this.ids.clear(),this.deaths.clear(),this.aimed.clear(),this.carried.clear(),this.struck.clear();for(const t of e){if(t.type==="kill"&&t.target!==void 0&&this.deaths.set(t.target,t),!t.to||t.target===void 0||!E1.has(t.type))continue;const n=us(t.to);this.ids.has(n)||this.ids.set(n,t.target)}for(const t of e)this.carry(t),this.event(t)}event(e){const t=e.to;switch(e.type){case"shot":t&&this.shot(e,t);break;case"cast":this.aim(e.element==="arcane"||!e.element?"arcane":e.element,this.idsOf(e.targets),void 0),t&&this.cast(e,t);break;case"cast-impact":this.aim("fire",this.idsOf(e.targets),void 0),t&&this.landed(e,t);break;case"tempest":this.unaim("storm"),t&&this.tempest(t,e.target);break;case"stun":t&&this.stun(e.element??"arcane",t,e.target);break;case"zone":t&&this.zone(e.element==="fire"?"lava":"ice",t,e.value??2);break;case"shatter":if(t){const n=this.deathFlight(e.target);this.aim("frost",this.idsOf(e.targets),n),this.after(n,this.shatter(t,e.targets??[],e.target))}break;case"spread":e.from&&t&&this.after(this.deathFlight(this.ids.get(us(e.from))),this.spread(e.from,t,e.target));break;case"discharge":if(e.from&&t){const n=this.ids.get(us(e.from)),s=n===void 0?void 0:this.struck.get(n);this.aim("storm",[e.target],s),this.after(s,this.discharge(e.from,t,e.target))}break;case"nova":this.unaim("arcane"),this.vfx.nova(this.space.ground(gh),M1(),e.value===1,(e.targets??[]).map(n=>this.follow(n,void 0,.5)()));break;case"kill":if(t){const n=this.follow(t,e.target,.5),s=this.styles.mine;this.onImpact(e,()=>{var r;return(r=this.onCoin)==null?void 0:r.call(this,n(),s)})}break}}shot(e,t){const n=e.element??"arcane",s=this.vfx,r=this.space;if(n==="storm"){this.unaim("storm"),this.storm(e,t);return}if(n==="arcane"){const u=e.damage??1,f=this.mainBolt===null||u>=this.mainBolt*.5;f&&(this.mainBolt=u);const g=ta("arcane",this.stages.arcane,this.styles),v=this.follow(t,e.target,.5);if(!f){this.aim("arcane",[e.target],void 0),s.beam(r.towerTop(),v,s.px(g.size*.5)*Kx(),10185727,14272255),s.impact("arcane",v(),s.px(26),.6);return}const m=Vr(this.stages.arcane)*(this.styles.lens?1.6:1),p=this.fly("arcane",[e.target],g.flight);s.shot("arcane",r.towerTop(),v,[],0,g,()=>{s.impact("arcane",v(),s.px(34),m),p()});return}const a=ta(n,this.stages[n],this.styles),o=e.value??2.5,l=r.ground(t),c=this.heightOf(t,e.target),h={x:l.x,y:l.y-c*.3},d=this.fly(n,[e.target,...this.idsOf(e.targets)],a.flight);s.shot(n,r.towerTop(),()=>h,[],0,a,()=>{this.blast(n,h,l,o,"normal"),d()})}blast(e,t,n,s,r){const a=this.vfx,o=Vr(this.stages[e])*(r==="giant"?1.5:r==="meteor"?1.2:1),l=Math.min(p1(a.metric,s).rx*.55,a.px(64));e==="fire"?(a.groundRing(n,s,16747050,{life:.4,alpha:.5}),a.groundRing(n,s,16760944,{additive:!0,life:.35,alpha:.5}),a.scar(n,s*.8,"glow",.35,16751162,.45,!0),a.edge(n,s,16751162,.4,"band",.4),a.mark(n,s*(r==="normal"?.45:.75),"scorch",r==="normal"?3:4.5,16777215,r==="normal"?.7:.85),r!=="normal"&&(a.scar(n,s*(r==="giant"?.6:.5),"ground-crack",r==="giant"?2.2:1.4),a.scar(n,s*.7,"glow",r==="giant"?1:.7,16742954,.75,!0)),r==="giant"&&(a.groundRing(n,s*1.12,16760938,{life:.75,delay:.08,from:.2}),a.waves(n,s*1.3,16765562),a.screenGlow(n,16751178,.18,.5))):(a.groundRing(n,s,7329535,{life:.4,alpha:.5}),a.edge(n,s,16777215,.4,"frost-ring",.45),a.mark(n,s*.5,"frost-patch",3,16777215,.7)),a.impact(e,t,l,o)}cast(e,t){const n=!!e.ultimate,s=e.value??2;switch(e.skill){case"meteor":this.meteorWarning(t,s,n);break;case"rain":this.rain(e.targets??[t],n);break;case"freeze":this.freeze(t,s,n);break;case"spear":this.spear(t,s,n);break;case"chain":this.chainCast(e,t);break;case"thunder":this.thunderCast(e,t);break}}landed(e,t){const n=this.vfx,s=this.space.ground(t),r=e.value??2;if(e.skill==="meteor"){this.blast("fire",{x:s.x,y:s.y-n.px(18)},s,r,e.ultimate?"giant":"meteor");return}n.groundRing(s,r,16747050,{life:.35,alpha:.55}),n.scar(s,r*.8,"glow",.3,16751162,.5,!0),n.mark(s,r*.8,"scorch",2.5,16777215,.7),n.impact("fire",{x:s.x,y:s.y-n.px(12)},n.px(34),.9)}rain(e,t){const n=this.vfx,s=Ne.rain;t&&n.screenGlow(this.space.ground(e[0]),16751178,.16,.5),e.forEach((r,a)=>{const o=this.space.ground(r),l=s.delay+a*.06;if(n.reduced)return;const c={sprite:"fire-orb",size:44,glow:1.7,glowAlpha:.75,hot:.45,trail:1.2,every:.02,flight:l,arc:[0,0],streak:1.7};n.throw("fire",{x:o.x-n.px(70),y:o.y-n.px(380)},()=>({x:o.x,y:o.y-n.px(10)}),c)})}freeze(e,t,n){const s=this.vfx,r=this.space.ground(e);s.add({sprite:"rune-circle",tint:3842008,x:r.x,y:r.y,life:.9,size0:t*1.4,size1:t*2.2,alpha0:.7,spin:-1.2,ground:!0,flat:!0,ease:"out"}),s.add({sprite:"rune-circle",additive:!0,tint:12579583,x:r.x,y:r.y,life:.9,size0:t*1.4,size1:t*2.2,alpha0:.6,spin:-1.2,ground:!0,flat:!0,ease:"out"}),s.groundRing(r,t,7329535,{life:.5,alpha:.6}),s.edge(r,t,16777215,.6,"frost-ring",.55),s.waves(r,t*1.15,15137791),s.mark(r,t*.8,"frost-patch",3.5,16777215,.8),s.impact("frost",{x:r.x,y:r.y-s.px(20)},s.px(70),1.6),n&&s.screenGlow(r,10479871,.2,.5)}spear(e,t,n){const s=this.vfx,r=this.space,a=r.towerTop(),o=r.ground(e),l={sprite:"ice-spear",size:120*t/Ne.brittle.width,glow:1.2,glowAlpha:.55,hot:.2,trail:1,every:.02,flight:.26,arc:[0,0],streak:1.4},c=()=>{for(const h of[.45,.7,.95])s.mark(r.ground({x:e.x*h,z:e.z*h}),t*.9,"frost-patch",3,16777215,.65)};s.throw("frost",a,()=>({x:o.x,y:o.y-s.px(16)}),l,()=>{s.impact("frost",o,s.px(30),.6),c()}),n&&s.screenGlow(a,10479871,.16,.45)}chainCast(e,t){const n=this.vfx,s=this.space,r=this.styles,a=po(this.stages.storm,r),o=[t,...(e.targets??[]).slice(1)],l=o.map((c,h)=>this.follow(c,h?void 0:e.target,.5));n.chain(()=>s.towerTop(),l,{width:n.px(a.width*1.4),glowAlpha:Math.min(1,a.glowAlpha+.2),life:.32,bridges:Wx(o,r.bridgeRange)}),n.impact("storm",l[0](),n.px(44),1.4),l.slice(1).forEach(c=>n.impact("storm",c(),n.px(30),1));for(const c of o)n.mark(s.ground(c),.6,"char-mark",2.5,16777215,.75);e.ultimate&&n.screenGlow(l[0](),14268671,.16,.45)}thunderCast(e,t){const n=this.vfx,s=this.space,r=this.styles,a=po(this.stages.storm,r),o=Vr(this.stages.storm),l=[t,...(e.targets??[]).slice(1)].map((h,d)=>this.follow(h,d?void 0:e.target,.5)),c=l[0];if(n.skyBolt(c,{width:n.px(a.width*1.1),height:n.px(340),life:.35,lean:n.px(16)}),(e.ultimate?[t]:e.targets??[t]).forEach((h,d)=>n.mark(s.ground(h),d?.75:1.1,"char-mark",3.5,16777215,.85)),n.impact("storm",c(),n.px(46),o*(r.overcharge?1.4:1)),n.add({sprite:"ring",additive:!0,tint:r.overcharge?15985407:ni.storm,x:c().x,y:c().y,life:.45,size0:n.px(30),size1:n.px(90),alpha0:.9,ease:"out"}),r.clap){const h=s.ground(t);n.groundRing(h,Ne.clap.radius,11565823,{life:.45}),n.groundRing(h,Ne.clap.radius,15127295,{additive:!0,life:.4,alpha:.6}),n.edge(h,Ne.clap.radius,4857984,.35,"band",.35)}if(e.ultimate){(e.targets??[]).slice(1).forEach(h=>this.tempest(h)),n.screenGlow(c(),14268671,.18,.45);return}for(const h of l.slice(1))n.skyBolt(h,{width:n.px(18),height:n.px(280),life:.28,lean:-n.px(10)}),n.impact("storm",h(),n.px(28),.8)}meteorWarning(e,t,n){const s=this.vfx,r=this.space.ground(e),a=Ne.meteor.delay;if(s.add({sprite:"glow",tint:16734746,x:r.x,y:r.y,life:a,size0:t*1.9,alpha0:.25,alpha1:.5,ground:!0,flat:!0}),s.add({sprite:"band",tint:12068890,x:r.x,y:r.y,life:a,size0:t*2,alpha0:.5,alpha1:.7,ground:!0,flat:!0}),s.add({sprite:"rune-circle",tint:14172186,x:r.x,y:r.y,life:a,size0:t*1.6,size1:t*1.9,alpha0:.55,alpha1:.8,spin:2,ground:!0,flat:!0,ease:"out"}),s.add({sprite:"rune-circle",additive:!0,tint:16752704,x:r.x,y:r.y,life:a,size0:t*1.6,size1:t*1.9,alpha0:.5,alpha1:.7,spin:2,ground:!0,flat:!0,ease:"out"}),!s.reduced)for(let l=0;l<3;l++)s.groundRing(r,t,16747050,{additive:!0,life:.25,from:.75,delay:l*.2,alpha:.5});if(s.reduced){s.add({sprite:"meteor",x:r.x,y:r.y-s.px(120),life:a,size0:s.px(n?110:80),alpha0:1,alpha1:1,rot:1.2});return}const o={sprite:"meteor",size:n?100:72,glow:1.5,glowAlpha:.7,hot:.45,trail:1.6,every:.018,flight:a,arc:[0,0],streak:1.8};s.throw("fire",{x:r.x-s.px(180),y:r.y-s.px(560)},()=>({x:r.x,y:r.y-s.px(12)}),o)}storm(e,t){const n=this.vfx,s=this.space,r=this.styles,a=this.stages.storm,o=po(a,r),l=[t];for(const g of e.targets??[]){const v=l[l.length-1];Math.hypot(g.x-v.x,g.z-v.z)>=.14&&l.push(g)}const c=l.map((g,v)=>this.follow(g,v?void 0:e.target,.5)),h=c[0],d=()=>s.towerTop(),u=Vr(a),f=g=>n.add({sprite:"ring",additive:!0,tint:r.overcharge?15985407:ni.storm,x:g.x,y:g.y,life:.4,size0:n.px(r.overcharge?39:26),size1:n.px(r.overcharge?96:64),alpha0:r.overcharge?1:.75,ease:"out"});n.chain(d,c,{width:n.px(o.width),glowAlpha:o.glowAlpha,bright:g=>Yx(g,!1)}),n.impact("storm",h(),n.px(36),u*(r.overcharge?1.3:1)),f(h()),c.slice(1).forEach((g,v)=>n.impact("storm",g(),n.px(v<3?26:18),v<3?.8:.5))}tempest(e,t){const n=this.vfx,s=this.follow(e,t,.5);n.skyBolt(s,{width:n.px(18),height:n.px(300),life:.3,tint:15852287,glow:14531071,contour:6501018,pulse:!0,lean:n.px(14)}),n.impact("storm",s(),n.px(28),.8),n.mark(this.space.ground(e),.8,"char-mark",3,16777215,.8)}discharge(e,t,n){const s=this.vfx,r=this.follow(e,void 0,.5),a=this.follow(t,n,.5);return()=>{const o=r();s.bolts.push({a:r,b:a,t:0,life:.25,width:s.px(12),sprite:"beam",tint:16762938,glow:16773280,glowAlpha:.9,still:!0}),s.add({sprite:"ring",additive:!0,tint:16773280,x:o.x,y:o.y,life:.3,size0:s.px(18),size1:s.px(46),alpha0:.95,ease:"out"}),s.impact("storm",a(),s.px(24),.7)}}spread(e,t,n){const s=this.vfx,r=this.follow(e,void 0,.5),a=this.follow(t,n,.5),o=this.follow(t,n,0),l={...ta("fire",this.stages.fire,this.styles),size:30,flight:.3,arc:[30,.25]};return()=>s.throw("fire",r(),a,l,()=>{s.impact("fire",a(),s.px(26),.6),s.groundRing(o(),.9,16747050,{life:.35,alpha:.5})})}shatter(e,t,n){const s=this.vfx,r=this.follow(e,n,.5),a=t.map(l=>this.follow(l,void 0,.5)),o=Ne.shatter.radius;return()=>{const l=this.space.ground(e),c=r();s.groundRing(l,o,7329535,{life:.35,alpha:.5}),s.edge(l,o,16777215,.35,"frost-ring",.4),s.impact("frost",c,s.px(34),.8),s.shards(c,a.map(h=>h()))}}stun(e,t,n){const s=n??this.ids.get(us(t))??this.space.actor(t);if(e==="frost"||e==="arcane"){s!==void 0&&this.frozen.set(s,e==="arcane"?w1:16777215);return}const r=this.follow(t,n,.5)();this.vfx.impact("storm",{x:r.x,y:r.y-this.heightOf(t,n)*.45},this.vfx.px(24),.7)}zone(e,t,n){this.vfx.groundRing(this.space.ground(t),n,e==="lava"?16742946:12579583,{life:.35,from:.5,alpha:.8})}frame(e,t,n,s=1){this.quads=[];const r=this.vfx,a=hd(e);e.time<this.clock&&(this.release([...this.flights]),r.clear(),this.frozen.clear(),this.mainBolt=null),this.clock=e.time,r.reduced&&this.release([...this.flights]);for(const o of this.flights)o.left-=n;this.release(this.flights.filter(o=>o.left<0));for(const o of this.frozen.keys())e.enemies.some(l=>l.id===o)||this.frozen.delete(o);for(const o of x1(e.zones,t,r.reduced))this.decal(o);if(a.capstone==="frost-ice-age"&&s>.001&&this.iceAge(t,s),n>0&&!r.reduced&&this.lavaBubbles(e.zones,n),n>0)for(const o of this.knockbacks.update(e.enemies,e.time))r.streak(this.space.ground(Pn(o.lane,o.from)),this.space.ground(Pn(o.lane,o.to)),r.px(24))}marks(e,t,n,s){const r=this.frozen.get(t.id);if(r!==void 0&&!e.stunned)this.frozen.delete(t.id);else if(r!==void 0){const a=Math.max(1,t.feet-t.top),o=Math.max(t.width,a)*1.1,l=t.top+a*.55;this.push({sprite:"glow",additive:!0,tint:10479871,alpha:.35,x:t.x,y:l,w:o*1.35,h:o*1.35,rot:0}),this.push({sprite:"ice-block",additive:!1,tint:r,alpha:.72,x:t.x,y:l,w:o,h:o,rot:0})}for(const a of y1(e,t,n,s,this.vfx.reduced,this.vfx.scale))this.push(a)}push(e){this.quads.length<S1&&this.quads.push(e)}decal(e){const t=this.space.ground(e.at);this.push({sprite:e.sprite,additive:e.additive,tint:e.tint,alpha:e.alpha,x:t.x,y:t.y,w:e.radius*2,h:e.radius*2,rot:e.rot,ground:!0,flat:!0})}around(e,t,n=0){const s=this.space.ground(gh),r=vo(this.vfx.metric,Math.cos(t)*e,Math.sin(t)*e);return{x:s.x+r.x,y:s.y+r.y-n}}iceAge(e,t){const n=this.vfx;for(const s of b1(e,n.reduced,t))this.decal(s);if(!n.reduced)for(let s=0;s<3;s++){const r=e*.9+s*2.09,a=this.around(aa*.72,r,n.px(14)),o=vo(n.metric,-Math.sin(r),Math.cos(r));this.push({sprite:"wind-blade",additive:!0,tint:15137791,alpha:.32*t,x:a.x,y:a.y,w:n.px(80),h:n.px(80)*.55,rot:Math.atan2(o.y,o.x)})}}lavaBubbles(e,t){const n=this.vfx,s=e.filter(r=>r.kind==="lava");if(s.length)for(this.bubbles-=t;this.bubbles<=0;this.bubbles+=.25/s.length){const r=s[Math.floor(n.rand()*s.length)],a=n.rand()*Math.PI*2,o=Math.sqrt(n.rand())*r.radius*.8,l=this.space.ground({x:r.x,z:r.z}),c=vo(n.metric,Math.cos(a)*o,Math.sin(a)*o);n.add({sprite:"ember",x:l.x+c.x,y:l.y+c.y,vy:-55,gravity:-30,life:.55,size0:n.px(11),size1:n.px(3),alpha0:1,alpha1:.2,spin:n.range(-3,3)})}}}const R1=.5;function C1(i,e){return R1}const yl=C1(),$r={landscape:{mask:"island-ambient.png",trees:[[669,354,41,37],[758,330,35,58],[846,283,43,49],[803,417,55,55],[705,407,27,25],[873,437,35,55],[923,330,55,47],[925,242,38,40],[955,272,32,50],[1015,252,32,50],[1055,235,23,21],[1050,410,22,22],[1128,232,55,45],[1198,247,20,23],[1283,249,38,38],[1409,280,20,22],[1415,404,32,22],[1653,294,29,48],[1648,387,40,40],[1700,337,23,25],[1745,454,37,28],[1783,592,45,45],[1718,584,24,22],[1468,510,42,20],[490,570,40,18],[615,667,48,45],[713,622,32,40],[803,662,25,35],[778,747,30,25],[885,712,57,60],[979,670,41,60],[973,737,40,25],[1056,648,51,48],[1144,657,40,30],[1154,752,56,50],[1198,797,50,42],[1328,794,30,27],[1583,784,35,18],[1488,807,40,25]],waterfalls:[{x0:640,x1:702,top:762,bottom:1044},{x0:930,x1:994,top:832,bottom:1092}],farIslands:[[92,87,68,55],[238,260,130,110],[50,374,30,28],[110,434,50,45],[250,524,85,70],[196,717,76,75],[328,817,73,85],[555,120,45,43],[620,177,25,30],[535,884,55,28],[1400,172,50,50],[2118,77,65,52],[1888,180,78,68],[1781,214,26,28],[2110,354,132,108],[2295,370,20,25],[2256,447,28,26],[1806,432,24,30],[1898,487,33,35],[2054,607,88,82],[1943,772,62,60],[2176,870,108,95]],birdSky:[0,40,2304,332],sparkles:[1152,584,610,295]}},P1=i=>[(i.x0+i.x1)/2,i.bottom],Ct={sway:{amplitude:6.5,rustle:1.1,direction:[.94,.34],gustFrequency:.011,gustSpeed:1.1,swaySpeed:1.6,rustleSpeed:5.2},bob:{height:3.2,speed:.65},water:{speed:120,light:.32},clouds:{drift:7,opacity:.22,warp:2.5},birds:{maxFlocks:2,perFlock:[3,5],firstDelay:[2,5],interval:[9,16],speed:[55,80],size:[15,20],flap:9,margin:60},puffs:{interval:.25,life:2,rise:12,spread:.35,size:[.8,1.7],alpha:.6},sparkles:{count:9,interval:.45,life:[2.4,4],rise:30,size:[11,17]},leaves:{max:12,interval:.55,life:[3.5,5.5],drift:[22,38],fall:[7,13],size:[17,25],petal:.3},portals:{spin:1.1,swirl:.55,core:.4,motes:6,pull:1.8}},Zs=["bird-up","bird-down","puff","sparkle","leaf","petal","swirl","glow","rock","shard"],xo={rocks:16,shards:7,dust:8,gravity:420,life:1.5,seamDust:6},I1=8382719,oa=Ct.sway,_h=Math.hypot(oa.direction[0],oa.direction[1]),xh=[oa.direction[0]/_h,oa.direction[1]/_h];function dd(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}class bh{constructor(e,t=1,n=[]){E(this,"rand");E(this,"flocks",[]);E(this,"puffs",[]);E(this,"motes",[]);E(this,"leaves",[]);E(this,"nextFlock");E(this,"puffClock",0);E(this,"moteClock",0);E(this,"leafClock",0);E(this,"time",0);E(this,"energy",1);E(this,"simulated",!1);E(this,"debris",[]);E(this,"burst",[!1,!1,!1]);E(this,"seamed",[!1,!1,!1]);this.layout=e,this.portals=n,this.rand=dd(t),this.nextFlock=this.between(Ct.birds.firstDelay)}ending(e,t){if(!e){this.burst=[!1,!1,!1],this.seamed=[!1,!1,!1],this.debris=[];return}const n=xo;t.gates.forEach(([s,r,a,o],l)=>{if(e.shake[l]>.3&&this.rand()<.25&&this.throwDebris("rock",s+(a-s)*this.rand(),r+(o-r)*.4*this.rand(),o,6,.4),!(this.burst[l]||e.broken[l]<=0)){this.burst[l]=!0;for(let c=0;c<n.rocks;c++)this.throwDebris("rock",s+(a-s)*(.15+.7*this.rand()),r+(o-r)*.75*this.rand(),o-6,14+14*this.rand(),1);for(let c=0;c<n.shards;c++)this.throwDebris("shard",s+(a-s)*this.rand(),r+(o-r)*.25*this.rand(),o-6,12+8*this.rand(),1.3);for(let c=0;c<n.dust;c++)this.debris.push({cell:"puff",x:s+(a-s)*this.rand(),y:o-20*this.rand(),vx:(this.rand()-.5)*50,vy:-10-15*this.rand(),age:0,life:1.8+this.rand(),size:70+60*this.rand(),rot:0,spin:0,floor:1/0})}}),t.seams.forEach(([s,r],a)=>{if(!(this.seamed[a]||e.islands[a]<.97)){this.seamed[a]=!0;for(let o=0;o<n.seamDust;o++)this.debris.push({cell:"puff",x:s+(this.rand()-.5)*160,y:r+(this.rand()-.5)*60,vx:(this.rand()-.5)*30,vy:-12,age:0,life:2+this.rand(),size:90+50*this.rand(),rot:0,spin:0,floor:1/0});for(let o=0;o<10;o++)this.motes.push({x:s+(this.rand()-.5)*220,y:r+(this.rand()-.5)*80,age:0,life:1.5+this.rand(),size:16+8*this.rand(),phase:this.rand()*6.2832})}})}throwDebris(e,t,n,s,r,a){this.debris.push({cell:e,x:t,y:n,vx:(this.rand()-.5)*140*a,vy:(-80-100*this.rand())*a,age:0,life:xo.life*(.7+.5*this.rand()),size:r,rot:this.rand()*6.28,spin:(this.rand()-.5)*9,floor:s})}between([e,t]){return e+(t-e)*this.rand()}update(e,t=!1){if(t){this.flocks=[],this.puffs=[],this.motes=[],this.leaves=[],this.debris=[];return}this.time+=e,this.updateBirds(e),this.updatePuffs(e),this.updateMotes(e),this.updateLeaves(e);for(const n of this.debris){if(n.age+=e,n.x+=n.vx*e,n.rot+=n.spin*e,n.cell==="puff"){n.y+=n.vy*e;continue}n.vy+=xo.gravity*e,n.y+=n.vy*e,n.y>n.floor&&(n.y=n.floor,n.vy*=-.25,n.vx*=.5,n.spin*=.4)}this.debris=this.debris.filter(n=>n.age<n.life)}updateLeaves(e){const t=Ct.leaves,n=this.layout.trees;for(const s of this.leaves)s.age+=e,s.x+=s.vx*e,s.y+=s.vy*e;if(this.leaves=this.leaves.filter(s=>s.age<s.life),!!n.length)for(this.leafClock+=e;this.leafClock>=t.interval;this.leafClock-=t.interval){if(this.leaves.length>=t.max)continue;const[s,r,a,o]=n[Math.floor(this.rand()*n.length)],l=this.rand()*Math.PI*2,c=this.between(t.drift);this.leaves.push({x:s+Math.cos(l)*a*.7,y:r-o*.4+Math.sin(l)*o*.4,age:0,life:this.between(t.life),vx:xh[0]*c,vy:xh[1]*c*.3+this.between(t.fall),size:this.between(t.size),phase:this.rand()*6.2832,petal:this.rand()<t.petal})}}updateBirds(e){const t=Ct.birds,[n,s,r,a]=this.layout.birdSky;if(this.nextFlock-=e,this.nextFlock<=0&&this.flocks.length<t.maxFlocks){const o=this.rand()<.5?1:-1,l=Math.round(this.between([t.perFlock[0],t.perFlock[1]])),c=Array.from({length:l},(h,d)=>{const u=Math.ceil(d/2),f=d%2?-1:1;return{dx:-o*u*14,dy:f*u*9,phase:this.rand()*6.2832,size:this.between(t.size)}});this.flocks.push({dir:o,x:o>0?n-t.margin:r+t.margin,baseY:this.between([s+20,a-20]),speed:this.between(t.speed),t:0,birds:c}),this.nextFlock=this.between(t.interval)}for(const o of this.flocks)o.t+=e,o.x+=o.dir*o.speed*e;this.flocks=this.flocks.filter(o=>o.dir>0?o.x<r+t.margin*2:o.x>n-t.margin*2)}updatePuffs(e){const t=Ct.puffs;for(const n of this.puffs)n.age+=e,n.x+=n.vx*e,n.y-=t.rise*e;for(this.puffs=this.puffs.filter(n=>n.age<t.life),this.puffClock+=e;this.puffClock>=t.interval;this.puffClock-=t.interval)for(const n of this.layout.waterfalls){const[s,r]=P1(n),a=n.x1-n.x0;this.puffs.push({x:s+(this.rand()-.5)*a*t.spread*2,y:r-6,vx:(this.rand()-.5)*8,age:0,width:a})}}updateMotes(e){const t=Ct.sparkles,[n,s,r,a]=this.layout.sparkles;for(const o of this.motes)o.age+=e,o.y-=t.rise/o.life*e;for(this.motes=this.motes.filter(o=>o.age<o.life),this.moteClock+=e;this.moteClock>=t.interval;this.moteClock-=t.interval){if(this.motes.length>=t.count)continue;const o=this.rand()*6.2832,l=Math.sqrt(this.rand());this.motes.push({x:n+Math.cos(o)*l*r,y:s+Math.sin(o)*l*a,age:0,life:this.between(t.life),size:this.between(t.size),phase:this.rand()*6.2832})}}sprites(){const e=[],t=Ct.puffs,n=Ct.portals,s=this.simulated?.75:this.energy;s>.001&&this.portals.forEach((r,a)=>{const o=this.simulated?{...r,tint:I1}:r,[l,c,h,d]=o.mouth,u=this.time,f=a%2?-1:1,g=d/h;e.push({cell:"swirl",x:l,y:c,size:h*2.1,rot:f*u*n.spin+a,alpha:s*n.swirl*(.8+.2*Math.sin(u*2.3+a)),flip:!1,glow:!0,tint:o.tint,aspect:g}),e.push({cell:"swirl",x:l,y:c,size:h*1.4,rot:-f*u*n.spin*1.6+a*2,alpha:s*n.swirl*.7,flip:!1,glow:!0,tint:16777215,aspect:g}),e.push({cell:"glow",x:l,y:c,size:h*(1.3+.25*Math.sin(u*3.1+a)),rot:0,alpha:s*n.core*(.7+.3*Math.sin(u*3.1+a)),flip:!1,glow:!0,tint:o.tint,aspect:g});for(let v=0;v<n.motes;v++){const m=(u/n.pull+v/n.motes+a*.37)%1,p=f*(m*5+v*1.047),S=1.7*(1-m);e.push({cell:"sparkle",x:l+Math.cos(p)*h*S,y:c+Math.sin(p)*d*S,size:10+6*(1-m),rot:p,alpha:s*Math.sin(Math.PI*m),flip:!1,glow:!0,tint:o.tint})}});for(const r of this.debris){const a=r.age/r.life;e.push(r.cell==="puff"?{cell:"puff",x:r.x,y:r.y,size:r.size*(.7+.5*a),rot:0,alpha:.75*Math.sin(Math.PI*Math.min(1,a*1.4))*(1-a),flip:!1}:{cell:r.cell,x:r.x,y:r.y,size:r.size,rot:r.rot,alpha:Math.min(1,(1-a)*3),flip:!1})}for(const r of this.leaves){const a=r.age/r.life,o=Math.sin(r.age*3.2+r.phase);e.push({cell:r.petal?"petal":"leaf",x:r.x+o*6,y:r.y,size:r.size*(.75+.25*Math.abs(Math.cos(r.age*4+r.phase))),rot:r.phase+r.age*1.6+o*.8,alpha:Math.min(1,a*6,(1-a)*4),flip:o<0})}for(const r of this.puffs){const a=r.age/t.life;e.push({cell:"puff",x:r.x,y:r.y,size:r.width*(t.size[0]+(t.size[1]-t.size[0])*a),rot:0,alpha:t.alpha*Math.sin(Math.PI*a),flip:!1})}for(const r of this.flocks)for(const a of r.birds){const o=Math.sin(r.t*Ct.birds.flap+a.phase)>0;e.push({cell:o?"bird-up":"bird-down",x:r.x+a.dx,y:r.baseY+a.dy+Math.sin(r.t*.8+a.phase*.2)*6,size:a.size,rot:0,alpha:1,flip:r.dir<0})}for(const r of this.motes){const a=r.age/r.life;e.push({cell:"sparkle",x:r.x,y:r.y,size:r.size,rot:r.age*1.5,alpha:Math.sin(Math.PI*a)*(.65+.35*Math.sin(r.age*8+r.phase)),flip:!1})}return e}}function yh(i,e,t){const n=dd(t),s=new Float32Array(i*i),r=c=>c*c*(3-2*c);let a=1;for(let c=0,h=e;c<3;c++,h*=2,a*=.5){const d=Array.from({length:h*h},n),u=(f,g)=>d[g%h*h+f%h];for(let f=0;f<i;f++)for(let g=0;g<i;g++){const v=g/i*h,m=f/i*h,p=Math.floor(v),S=Math.floor(m),w=r(v-p),x=r(m-S),A=u(p,S)+(u(p+1,S)-u(p,S))*w,C=u(p,S+1)+(u(p+1,S+1)-u(p,S+1))*w;s[f*i+g]+=a*(A+(C-A)*x)}}let o=1/0,l=-1/0;for(const c of s)o=Math.min(o,c),l=Math.max(l,c);for(let c=0;c<s.length;c++)s[c]=(s[c]-o)/(l-o||1);return s}const $s=64,Xr=128,qr=48,ds=128,Rt=i=>i.toFixed(5);function L1(){const i=document.createElement("canvas");i.width=$s*Zs.length,i.height=$s;const e=i.getContext("2d"),t=(r,a)=>{e.save(),e.translate(Zs.indexOf(r)*$s+$s/2,$s/2),a(),e.restore()},n=r=>()=>{e.fillStyle="#34465c",e.strokeStyle="#34465c",e.lineCap="round",e.lineJoin="round",e.lineWidth=5;const a=r?-16:12,o=r?-4:6;e.beginPath(),e.moveTo(-26,a),e.quadraticCurveTo(-14,o-6,-3,2),e.quadraticCurveTo(0,4,3,2),e.quadraticCurveTo(14,o-6,26,a),e.stroke(),e.beginPath(),e.ellipse(2,3,7,4,0,0,Math.PI*2),e.fill()};t("bird-up",n(!0)),t("bird-down",n(!1)),t("puff",()=>{for(const[r,a,o]of[[-9,4,17],[9,3,16],[0,-6,19],[0,8,15]]){const l=e.createRadialGradient(r,a,0,r,a,o);l.addColorStop(0,"rgba(255,255,255,.85)"),l.addColorStop(.6,"rgba(240,250,255,.45)"),l.addColorStop(1,"rgba(235,248,255,0)"),e.fillStyle=l,e.beginPath(),e.arc(r,a,o,0,Math.PI*2),e.fill()}}),t("sparkle",()=>{const r=e.createRadialGradient(0,0,0,0,0,26);r.addColorStop(0,"rgba(255,250,215,.9)"),r.addColorStop(.35,"rgba(255,236,160,.35)"),r.addColorStop(1,"rgba(255,236,160,0)"),e.fillStyle=r,e.beginPath(),e.arc(0,0,26,0,Math.PI*2),e.fill(),e.fillStyle="#fffbe8",e.beginPath();for(let a=0;a<8;a++){const o=a*Math.PI/4,l=a%2?4:20;e.lineTo(Math.cos(o)*l,Math.sin(o)*l)}e.closePath(),e.fill()}),t("leaf",()=>{e.rotate(-.5),e.fillStyle="#4f9a2e",e.beginPath(),e.moveTo(-22,0),e.quadraticCurveTo(0,-15,22,0),e.quadraticCurveTo(0,15,-22,0),e.fill(),e.fillStyle="#7cc443",e.beginPath(),e.moveTo(-22,0),e.quadraticCurveTo(0,-15,22,0),e.quadraticCurveTo(0,-3,-22,0),e.fill(),e.strokeStyle="#2f6b1c",e.lineWidth=2,e.beginPath(),e.moveTo(-22,0),e.lineTo(18,0),e.stroke()}),t("petal",()=>{const r=e.createRadialGradient(-4,-3,2,0,0,20);r.addColorStop(0,"#fff2f8"),r.addColorStop(.6,"#ffb6d6"),r.addColorStop(1,"#f58ab8"),e.fillStyle=r,e.beginPath(),e.moveTo(0,-20),e.bezierCurveTo(16,-10,14,14,0,18),e.bezierCurveTo(-14,14,-16,-10,0,-20),e.fill()}),t("swirl",()=>{e.lineCap="round";for(let r=0;r<4;r++)for(let a=0;a<26;a++){const o=a/26,l=r*Math.PI/2+o*4.2,c=6+o*24;e.strokeStyle=`rgba(255,255,255,${(.15+.75*o*(1-o)*4/4).toFixed(3)})`,e.lineWidth=2+4*o*(1-o)*4,e.beginPath(),e.arc(0,0,c,l,l+.2),e.stroke()}}),t("rock",()=>{e.rotate(.3),e.fillStyle="#8f8576",e.beginPath(),e.moveTo(-22,-6),e.lineTo(-10,-20),e.lineTo(16,-16),e.lineTo(24,4),e.lineTo(10,20),e.lineTo(-16,16),e.closePath(),e.fill(),e.fillStyle="#cfc4b0",e.beginPath(),e.moveTo(-22,-6),e.lineTo(-10,-20),e.lineTo(16,-16),e.lineTo(6,-2),e.lineTo(-14,2),e.closePath(),e.fill(),e.strokeStyle="#6d6455",e.lineWidth=2,e.beginPath(),e.moveTo(-6,-8),e.lineTo(4,6),e.stroke()}),t("shard",()=>{e.fillStyle="#7d52b8",e.beginPath(),e.moveTo(0,-26),e.lineTo(11,-2),e.lineTo(4,24),e.lineTo(-8,6),e.closePath(),e.fill(),e.fillStyle="#c7a3f0",e.beginPath(),e.moveTo(0,-26),e.lineTo(4,24),e.lineTo(-8,6),e.closePath(),e.fill()}),t("glow",()=>{const r=e.createRadialGradient(0,0,0,0,0,31);r.addColorStop(0,"rgba(255,255,255,.95)"),r.addColorStop(.4,"rgba(255,255,255,.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=r,e.beginPath(),e.arc(0,0,31,0,Math.PI*2),e.fill()});const s=new Hl(i);return s.colorSpace=Tt,s}const D1=[16734842,16743128,12160255],U1=(i,e=Ci[i].gates)=>e.map((t,n)=>({mouth:t.mouth,tint:D1[n%3]}));function N1(){const i=yh(ds,4,21),e=yh(ds,8,34),t=new Uint8Array(ds*ds*4);for(let s=0;s<i.length;s++)t.set([i[s]*255,e[s]*255,0,255],s*4);const n=new zl(t,ds,ds);return n.wrapS=n.wrapT=ia,n.magFilter=n.minFilter=Jt,n.needsUpdate=!0,n}function F1(){const i=Ct.sway,e=Math.hypot(i.direction[0],i.direction[1]);return`#ifdef USE_MAP
  vec2 paintPx = vec2(vMapUv.x, 1.0 - vMapUv.y) * uPaintSize;
  vec4 amb = texture2D(uAmbient, vMapUv);
  float isle = max(0.0, (1.0 - amb.a) / 0.8);
  vec2 o = vec2(0.0);
  float gust = 0.55 + 0.45 * sin(dot(paintPx, vec2(${Rt(i.direction[0]/e)}, ${Rt(i.direction[1]/e)})) * ${Rt(i.gustFrequency)} - uTime * ${Rt(i.gustSpeed)});
  float sway = 0.75 + 0.25 * sin(uTime * ${Rt(i.swaySpeed)} + paintPx.x * 0.031 + paintPx.y * 0.017);
  float leaf = uTime * ${Rt(i.rustleSpeed)} + paintPx.x * 0.12 + paintPx.y * 0.1;
  o += amb.r * vec2(${Rt(i.amplitude)} * gust * sway + ${Rt(i.rustle)} * sin(leaf), ${Rt(i.rustle)} * cos(leaf * 1.3));
  o.y += isle * ${Rt(Ct.bob.height)} * sin(uTime * ${Rt(Ct.bob.speed)} + (paintPx.x * 0.0045 + paintPx.y * 0.003) * 6.2832);
  vec2 cloudUv = (paintPx + vec2(-uTime * ${Rt(Ct.clouds.drift)}, 0.0)) / 520.0;
  float cloud = texture2D(uNoise, cloudUv).r;
  o += amb.b * ${Rt(Ct.clouds.warp)} * vec2(cloud - 0.5, texture2D(uNoise, cloudUv * 1.7 + 0.37).r - 0.5);
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
  if (uHasRestored > 0.5 && reveal > 0.0) sampledDiffuseColor = mix(sampledDiffuseColor, texture2D(uRestored, vMapUv + vec2(-o.x, o.y) / uPaintSize), reveal);
  diffuseColor *= sampledDiffuseColor;
  float streak = texture2D(uNoise, vec2(paintPx.x / 26.0, (paintPx.y - uTime * ${Rt(Ct.water.speed)}) / 340.0)).g;
  diffuseColor.rgb += amb.g * uStrength * ${Rt(Ct.water.light)} * smoothstep(0.5, 0.82, streak) * vec3(0.92, 1.0, 1.0);
  diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), smoothstep(0.55, 0.78, cloud) * amb.b * uStrength * ${Rt(Ct.clouds.opacity)});
#endif`}class Mh{constructor(e,t,n,s,r,a=r,o){E(this,"uniforms",{uAmbient:{value:null},uNoise:{value:N1()},uTime:{value:0},uStrength:{value:1},uPaintSize:{value:new et(1,1)},uRestored:{value:null},uHasRestored:{value:0},uBroken:{value:new k},uShake:{value:new k},uGateBox:{value:[new ft,new ft,new ft]},uLand:{value:0}});E(this,"scene");E(this,"sims");E(this,"portals");E(this,"mesh");E(this,"lights");E(this,"lightCell");E(this,"lightAlpha");E(this,"c",new Ke);E(this,"cell");E(this,"alpha");E(this,"m",new st);E(this,"q",new $n);E(this,"axis",new k(0,0,1));E(this,"p",new k);E(this,"s",new k);E(this,"squash",new st);E(this,"zero",new k);this.masks=n,this.depth=s,this.portals=U1("landscape",o==null?void 0:o.gates),this.sims={landscape:new bh(o?{...$r.landscape,trees:[]}:$r.landscape,1,this.portals)},t.onBeforeCompile=f=>{Object.assign(f.uniforms,this.uniforms),f.fragmentShader=`uniform sampler2D uAmbient;
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
`+f.fragmentShader.replace("#include <map_fragment>",F1())},t.customProgramCacheKey=()=>"ambient-backdrop",t.needsUpdate=!0;const l=new tn(1,1);this.cell=new cn(new Float32Array(Xr),1),this.alpha=new cn(new Float32Array(Xr),1),this.cell.setUsage(Dt),this.alpha.setUsage(Dt),l.setAttribute("iCell",this.cell),l.setAttribute("iAlpha",this.alpha);const c=new Wt({map:L1(),transparent:!0,depthWrite:!1,side:on,forceSinglePass:!0});c.onBeforeCompile=f=>{f.vertexShader=`attribute float iCell;
attribute float iAlpha;
varying float vAlpha;
`+f.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = vec2((uv.x + iCell) / ${Rt(Zs.length)}, uv.y);
vAlpha = iAlpha;`),f.fragmentShader=`varying float vAlpha;
`+f.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.a *= vAlpha;`)},c.customProgramCacheKey=()=>"ambient-sprites",this.mesh=new Ps(l,c,Xr),this.mesh.instanceMatrix.setUsage(Dt),this.mesh.frustumCulled=!1,this.mesh.renderOrder=r,this.mesh.count=0,e.add(this.mesh);const h=new tn(1,1);this.lightCell=new cn(new Float32Array(qr),1),this.lightAlpha=new cn(new Float32Array(qr),1),this.lightCell.setUsage(Dt),this.lightAlpha.setUsage(Dt),h.setAttribute("iCell",this.lightCell),h.setAttribute("iAlpha",this.lightAlpha);const d=c.clone();d.blending=Qs,d.onBeforeCompile=c.onBeforeCompile,d.customProgramCacheKey=()=>"ambient-lights",this.lights=new Ps(h,d,qr),this.lights.instanceMatrix.setUsage(Dt),this.lights.frustumCulled=!1,this.lights.renderOrder=a,this.lights.count=0,this.lights.setColorAt(0,this.c.set(16777215)),e.add(this.lights);const u=((o==null?void 0:o.gates)??Ci.landscape.gates).map(f=>f.art);o||u.forEach((f,g)=>this.uniforms.uGateBox.value[g].set(f[0],f[1],f[2],f[3])),this.scene={gates:u,seams:o?[]:[[470,520],[1150,230],[1850,560]]}}setRestored(e){this.uniforms.uRestored.value=e,this.uniforms.uHasRestored.value=1}static async loadMasks(e,t=$r.landscape.mask){const n=await new vl().loadAsync(e+t);return n.colorSpace=Bn,n.premultiplyAlpha=!1,n.generateMipmaps=!1,n.minFilter=n.magFilter=Jt,{landscape:n}}setLeafTrees(e){this.sims.landscape=new bh({...$r.landscape,trees:e},1,this.portals)}update(e,t,n,s,r=1,a=null,o=!1){const l=Math.min(.1,Math.max(0,e)),c=Ci[t].size;this.uniforms.uAmbient.value=this.masks[t],this.uniforms.uPaintSize.value.set(c[0],c[1]),this.uniforms.uStrength.value=s?0:1,s||(this.uniforms.uTime.value+=l);const h=this.sims[t];h.energy=r,h.simulated=o&&!!a;const d=this.uniforms;d.uBroken.value.set(...(a==null?void 0:a.broken)??[0,0,0]),d.uShake.value.set(...s?[0,0,0]:(a==null?void 0:a.shake)??[0,0,0]),d.uLand.value=(a==null?void 0:a.land)??0,h.ending(a,this.scene),h.update(l,s);let u=0,f=0;for(const g of h.sprites()){if(g.glow){if(f>=qr)continue;const p=g.size*n.scale;this.q.setFromAxisAngle(this.axis,-g.rot),this.p.set(n.offset[0]+g.x*n.scale,-(n.offset[1]+g.y*n.scale),this.depth),this.m.compose(this.zero,this.q,this.s.set(p,p,1)),g.aspect&&g.aspect!==1&&this.m.premultiply(this.squash.makeScale(1,g.aspect,1)),this.m.setPosition(this.p),this.lights.setMatrixAt(f,this.m),this.lights.setColorAt(f,this.c.set(g.tint??16777215)),this.lightCell.setX(f,Zs.indexOf(g.cell)),this.lightAlpha.setX(f,g.alpha),f++;continue}if(u>=Xr)break;const v=g.cell==="bird-up"||g.cell==="bird-down",m=Math.max(v?10:0,g.size*n.scale);this.q.setFromAxisAngle(this.axis,-g.rot),this.p.set(n.offset[0]+g.x*n.scale,-(n.offset[1]+g.y*n.scale),this.depth),this.m.compose(this.p,this.q,this.s.set(g.flip?-m:m,m,1)),this.mesh.setMatrixAt(u,this.m),this.cell.setX(u,Zs.indexOf(g.cell)),this.alpha.setX(u,g.alpha),u++}this.mesh.count=u,this.mesh.instanceMatrix.needsUpdate=this.cell.needsUpdate=this.alpha.needsUpdate=!0,this.lights.count=f,this.lights.instanceMatrix.needsUpdate=this.lightCell.needsUpdate=this.lightAlpha.needsUpdate=!0,this.lights.instanceColor&&(this.lights.instanceColor.needsUpdate=!0)}get sprites(){return this.mesh.count+this.lights.count}}const k1=1.8,fd=.24,O1=6,B1=.7,fs=(i,[e,t])=>Math.min(1,Math.max(0,(i-e)/(t-e))),z1=i=>i*i*(3-2*i),ps=i=>1-(1-i)**3,ms={body:[0,.4],dust:[0,.45],crystal:[.62,.88],flash:[.88,1],canister:i=>[.3+.06*i,.48+.06*i],ring:i=>[.45+.07*i,.7+.07*i]};function Sh(i,e){const t=n=>Math.round((i>>n&255)+(255-(i>>n&255))*e)<<n;return t(16)|t(8)|t(0)}function H1(i){return i>=7?3:i>=4?2:1}const ar=["fire","frost","storm","core"],G1=["core-prism","fire-sunfall","frost-ice-age","storm-tempest"];function V1(i){return i<=0?0:Math.round(Math.min(1,.2+.16*i)*100)/100}function W1(i){const e=hd(i),t=i.built;return{built:t,stage:t?H1(i.core):1,canisters:ar.map(n=>{const s=n==="core"?i.core:i.levels[n];return{branch:n,level:s,fill:t?V1(s):0}}),forks:t?Object.fromEntries(ar.flatMap(n=>{const s=e.ports[n].fork;return s&&Object.hasOwn(vd,s)?[[n,s]]:[]})):{},capstone:t&&e.capstone&&G1.includes(e.capstone)?e.capstone:null,chargeRing:t&&e.chargeRing,hasteAura:t&&e.hasteAura}}const la=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],pd=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],wh=i=>{const e=Math.hypot(...i)||1;return[i[0]/e,i[1]/e,i[2]/e]},md=Cn.right,gd=Cn.up,bo=pd(md,gd),yo=i=>[la(i,md),-la(i,gd)];function Eh(i,e,t=4){const[n,s,r]=[i.tiltX,i.spin*e,i.tiltZ],[a,o,l,c,h,d]=[Math.cos(n),Math.sin(n),Math.cos(s),Math.sin(s),Math.cos(r),Math.sin(r)],u=(w,x,A)=>{const C=[h*w-d*x,d*w+h*x,A],R=[l*C[0]+c*C[2],C[1],-c*C[0]+l*C[2]];return[R[0],a*R[1]-o*R[2],o*R[1]+a*R[2]]},f=u(0,1,0),g=u(1,0,0),v=u(0,0,1),m=wh(bo.map((w,x)=>w-la(bo,f)*f[x])),p=wh(pd(f,m)),S=Array.from({length:t},(w,x)=>{const A=x/t*Math.PI*2,C=g.map((y,L)=>y*Math.cos(A)+v[L]*Math.sin(A)),[R,D]=yo(C),M=la(C,bo);return{x:R,y:D,front:M>0,depth:M}});return{major:yo(p),front:yo(m),studs:S}}const $1=.3,X1=4,q1={arcane:"core",fire:"fire",frost:"frost",storm:"storm"};class Y1{constructor(){E(this,"crystal",0);E(this,"build",1);E(this,"nova",0);E(this,"muzzles",[]);E(this,"shots",0);E(this,"flash",{fire:0,frost:0,storm:0,core:0})}handle(e){for(const t of e){const n=t.element?q1[t.element]:void 0;if(t.type==="shot"&&(this.crystal=1,n&&(this.flash[n]=1,this.muzzles.push({branch:n,age:0,seed:this.shots++})),this.muzzles.length>O1&&this.muzzles.shift()),t.type==="upgrade"&&n&&(this.flash[n]=1),t.type==="cast"&&n&&(this.flash[n]=1),t.type==="tempest"&&(this.flash.storm=1),t.type==="build"){this.build=0,this.muzzles.length=0,this.nova=0,this.crystal=0;for(const s of ar)this.flash[s]=0}t.type==="nova"&&(this.nova=1)}}update(e,t){const n=s=>Math.max(0,s-e/$1);this.crystal=n(this.crystal);for(const s of ar)this.flash[s]=n(this.flash[s]);t&&this.build<1?(this.build=1,this.crystal=1):this.build=Math.min(1,this.build+e/k1),this.nova=Math.max(0,this.nova-e/B1);for(const s of this.muzzles)s.age+=e;for(;this.muzzles.length&&this.muzzles[0].age>=fd;)this.muzzles.shift()}canister(e){return this.flash[e]}ringRate(){return 1+X1*this.nova}}const Ml={1:{body:"body-1",dais:[245,732],daisWidth:435,cup:[240,562],crystal:150,rings:[92],canister:74,canisters:[[141,644],[161,711],[354,711],[371,644]],display:1},2:{body:"body-2",dais:[727,728],daisWidth:474,cup:[710,490],crystal:170,rings:[100,112],canister:82,canisters:[[597,597],[620,687],[840,687],[865,597]],display:1},3:{body:"body-3",dais:[1242,700],daisWidth:542,cup:[1236,402],crystal:195,rings:[114,126,138],canister:90,canisters:[[1086,554],[1044,790],[1440,790],[1381,554]],display:1}},K1={1:[100,150],2:[110,185],3:[134,240]},j1={1:{column:1,crown:1},2:{column:1,crown:1},3:{column:1,crown:1}},Th=[{spec:{tiltX:.3,tiltZ:-.25,spin:.18},dy:0},{spec:{tiltX:-.45,tiltZ:.3,spin:-.22},dy:-8},{spec:{tiltX:.15,tiltZ:.55,spin:.26},dy:8}],Ah=14,Z1=30,gs=.92,J1={crystal:{piece:"crystal",height:1,glow:8378623},"core-prism":{piece:"cap-prism",height:1.08,glow:10483711},"fire-sunfall":{piece:"cap-sun",height:.62,glow:16751162},"frost-ice-age":{piece:"cap-ice",height:1.08,glow:14219007},"storm-tempest":{piece:"cap-storm",height:1.25,glow:10181887}},Q1={tiltX:.5,tiltZ:.2,spin:.6},na={fire:16742958,frost:6543103,storm:11561983,core:7339984},vd={"fire-meteor":{turn:1.4,sway:.22},"fire-wildfire":{turn:1.3},"frost-glacier":{breathe:[.05,.8]},"frost-brittle":{breathe:[.06,1.1]},"storm-chain":{crackle:!0},"storm-thunder":{crackle:!0},"core-nova-power":{breathe:[.07,2.4]},"core-nova-rush":{turn:1.8}},eb=.42,tb=13684944,_i={foot:[.5,.985],window:[.253,.357,.802,.756],orb:[.491,.118]},nb=.62,Xs={tint:8382719,alpha:.38},ib=.98,sb=.12,rb=2.4,ab=.35,ob=60,lb=1.1,Rh=5,cb=12580095,Mo=16769696,hb=6,xi=8781788,Ch=15137791,ub=12950527,Yr=24,Ph=48,Ih=24,db=9102809,Lh=120;function fb(i){return i.island[1]/i.island[0]}const bi=(i,e,t,n)=>[i[0]+Math.cos(t)*e,i[1]+Math.sin(t)*e*n];function pb(i,e,t){const n=Ml[i.stage],s=[],r=[],a=!i.built,o=a?1:t.pulse.build,l=o<1,c=Cn.sinPitch,h=a&&!t.reduced?Math.sin(t.time*rb):0,d=a?Xs.tint:16777215,u=a?Xs.alpha+.05*h:1,f=B=>[B[0]-n.dais[0],B[1]-n.dais[1]],g=(B,G,$,ae,I,ee=d,te=u,re)=>s.push({name:B,x:G,y:$,ux:ae,uy:0,vx:0,vy:-I,tint:ee,alpha:te,...re?{sub:re}:{}}),v=(B,G,$,ae,I,ee,te)=>{const re=e.pieces[B],Z=Math.max(re.art[0],re.art[1]),K=ae*re.art[0]/Z,fe=ae*re.art[1]/Z,Te=Math.cos(I),Ve=Math.sin(I);s.push({name:B,x:G,y:$,ux:K*Te,uy:K*Ve,vx:fe*Ve,vy:-fe*Te,tint:ee,alpha:te})},m=(B,G,$,ae,I)=>{a||r.push({x:B,y:G,size:$,color:ae,k:I*t.energy})};if(a){const B=n.daisWidth*ib,G=t.reduced?0:t.time*sb,$=Math.cos(G),ae=Math.sin(G);s.push({name:"fx-rune",x:0,y:0,ux:B*$,uy:B*ae*c,vx:B*ae,vy:-B*$*c,tint:Xs.tint,alpha:.5+.05*h}),r.push({x:0,y:0,size:n.daisWidth*.95,color:Xs.tint,k:(.22+.1*h)*t.energy})}const p=e.pieces.canister,S=e.pieces.liquid,w=n.canister/p.art[0],[x,A,C,R]=_i.window;function D(){const B=i.canisters.map((G,$)=>$).sort((G,$)=>n.canisters[G][1]-n.canisters[$][1]);for(const G of B){const{branch:$,fill:ae}=i.canisters[G],I=l?fs(o,ms.canister(G)):1;if(I<=0)continue;const[ee,te]=f(n.canisters[G]),re=p.art[0]*w,Z=p.art[1]*w,K=ee-_i.foot[0]*re,fe=te-_i.foot[1]*Z-ob*(1-I**2);g("canister",K+re/2,fe+Z/2,re,Z);const Te=a?0:ae*t.energy;if(Te<=0)continue;const Ve=na[$],Be=t.pulse.canister($),Ut=Sh(Ve,.55*Be),vt=(C-x)*re,yn=K+(x+C)/2*re,Nt=fe+R*Z,Ln=(R-A)*Z,Hi=vt*S.art[1]/S.art[0]*.3,Gi=Ln*Te,li=Nt-Gi;g("liquid",yn,(Nt+li+Hi/2)/2,vt,Math.max(0,Gi-Hi/2),Ut,.92,[0,.3,1,.95]),g("liquid",yn,li,vt,Hi,Ut,.95,[0,0,1,.3]);const Vi=e.pieces[`glyph-${$}`],ci=vt*.62/Vi.art[0];g(`glyph-${$}`,yn,Nt-Ln*.5,Vi.art[0]*ci,Vi.art[1]*ci,16777215,Math.min(1,.55+Te*.45));const Wi=e.pieces.pip;if(Wi){const Ns=re*nb,Ta=Ns*Wi.art[0]/Wi.art[1];g("pip",K+_i.orb[0]*re,fe+_i.orb[1]*Z-Ns*.42,Ta,Ns,Sh(Ve,.35+.4*Be),1)}const _r=t.reduced?1:.85+.15*Math.sin(t.time*3+G*1.7),$i=[K+_i.orb[0]*re,fe+_i.orb[1]*Z];m(yn,Nt-Gi/2,vt*(1.6+Te),Ve,(.18+.3*Te+.5*Be)*_r),m($i[0],$i[1],vt*(.8+Te*.6),Ve,.35+.4*Te+.4*Be),Be>0&&v("fx-spark",$i[0],$i[1],vt*(t.reduced?1.2:1.2+.5*(1-Be)),0,Ve,Be)}}const M=e.pieces[n.body],y=M.at[0]+M.art[0]/2-n.dais[0],L=M.at[1]+M.art[1]-n.dais[1],O=t.shape??j1[i.stage],[z,X]=K1[i.stage],J=M.art[1],q=(X-z)*(1-O.column),oe=J-q,W=l?z1(fs(o,ms.body)):1,ce=oe*W;if(q===0)g(n.body,y,L-ce/2,M.art[0],ce,d,u,W<1?[0,1-W,1,1]:void 0);else{let B=L,G=ce;for(const[$,ae,I]of[[X,J,1],[z,X,O.column],[0,z,1]]){const ee=(ae-$)*I,te=Math.min(ee,G);if(te<=0)break;g(n.body,y,B-te/2,M.art[0],te,d,u,[0,(ae-(ae-$)*te/ee)/J,1,ae/J]),B-=te,G-=te}}const me=q===0?s[s.length-1]:{name:n.body,x:y,y:L-ce/2,ux:M.art[0],uy:0,vx:0,vy:-ce,tint:d,alpha:u};if(l){if(W>0&&W<1)for(let G=0;G<5;G++)m(y+(G-2)*M.art[0]*.16,L-ce,M.art[0]*.32,cb,.75*(1-W**4));const B=fs(o,ms.dust);if(B>0&&B<1)for(let G=0;G<4;G++){const[$,ae]=bi([0,0],n.daisWidth*.5,Math.PI*(.12+.76*G/3),c),I=ae-120*ps(B);v("fx-dust",$,ae-34*B,n.daisWidth*(.2+.16*B),G%2?.2:-.2,16777215,.85*(1-B)),v("fx-spark",$+(G-1.5)*10*B,I,n.crystal*.09*(1-B),0,Mo,1-B),m($,I,n.crystal*.25,Mo,.5*(1-B))}}const ge=J1[i.capstone??"crystal"],De=e.pieces[ge.piece],Ie=n.crystal*O.crown,We=Ie*ge.height,Ze=We*De.art[0]/De.art[1],Q=f(n.cup)[0],ne=f(n.cup)[1]+q,be=t.reduced?0:Math.sin(t.time*1.6)*3*t.energy,Ae=[Q,ne+Ah-Ie/2+be],ve=l?ps(fs(o,ms.crystal)):1,$e=(t.reduced?0:hb*t.pulse.crystal**2)-(1-ve)*Ie*lb,He=i.capstone==="fire-sunfall"?[Ae[0],Ae[1]-Ie*.1+$e]:[Q,ne+Ah-We/2+be+$e],P=t.reduced?0:t.ringTime,rt=B=>({...B,tiltX:B.tiltX*t.energy,tiltZ:B.tiltZ*t.energy}),Fe=B=>l?ps(fs(o,ms.ring(B))):1,Re=a?[]:n.rings.map((B,G)=>{const $=Fe(G);return{r:B*O.crown*(.3+.7*$),open:$,c:[Ae[0],Ae[1]+Th[G].dy*O.crown],...Eh(rt(Th[G].spec),P+(1-$)*Rh)}});i.capstone==="fire-sunfall"&&!a&&Re.push({r:We*.62*(.3+.7*ve),open:ve,c:He,...Eh(rt(Q1),P+(1-ve)*Rh)});const ye=e.pieces.stud.art,at=Z1*O.crown/ye[0],Me=n.rings.length-1,ke=t.energy>0?i.forks:{},_t=(B,G,$,ae,I,ee,te)=>{const re=e.pieces[`fork-${B}`],Z=vd[B],[K,fe]=Z.breathe??[0,0],Te=Ie*eb*(1+K*Math.sin(P*fe)),Ve=Math.max(re.art[0],re.art[1]),Be=Te*re.art[0]/Ve,Ut=Te*re.art[1]/Ve,vt=Z.turn?Z.sway?Z.sway*Math.sin(P*Z.turn):P*Z.turn:0,yn=Math.cos(vt),Nt=Math.sin(vt),Ln=Z.crackle&&!t.reduced?.78+.22*Math.sin(P*11+$)**2:1;s.push({name:`fork-${B}`,x:ae,y:I,ux:Be*yn,uy:Be*Nt,vx:Ut*Nt,vy:-Ut*yn,tint:ee>0?16777215:tb,alpha:t.energy*Ln*te}),ee>0&&m(ae,I,Te*1.5,na[G],(.4+.45*t.pulse.canister(G))*Ln*Math.min(1,ee/.3)*te)},ut=B=>{const{r:G,c:$,studs:ae,open:I}=Re[Me];I>0&&ar.forEach((ee,te)=>{const re=ke[ee],Z=ae[te];re&&Z.front===B&&_t(re,ee,te,$[0]+Z.x*G*gs,$[1]+Z.y*G*gs,Z.depth,I)})},T=B=>{Re.forEach(({r:G,c:$,major:ae,front:I,studs:ee,open:te},re)=>{if(te<=0)return;const Z=ae[0]<0?[-ae[0],-ae[1]]:ae,K=B?1:-1;s.push({name:"ring",x:$[0]+I[0]*G/2*K,y:$[1]+I[1]*G/2*K,ux:Z[0]*2*G,uy:Z[1]*2*G,vx:-I[0]*G,vy:-I[1]*G,tint:B?16777215:14272936,alpha:te,sub:B?[0,.5,1,1]:[0,0,1,.5]});for(const fe of ee)fe.front===B&&g("stud",$[0]+fe.x*G*gs,$[1]+fe.y*G*gs,ye[0]*at,ye[1]*at,B?16777215:13284490,te);re===Me&&!B&&ut(!1)}),B&&Re.length&&ut(!0)},_=a?0:t.charge??0,F=_>=1&&!t.reduced&&t.energy>0&&ve>=1,j=B=>{if(a)for(let G=0;G<3;G++){const $=G/3*Math.PI*2+(t.reduced?0:t.time*ab),ae=Math.sin($),I=t.reduced?0:Math.sin(t.time*1.3+G*2)*5;ae>0===B&&v("crystal",Q+Math.cos($)*Ie*.62,Ae[1]+ae*Ie*.62*c+I,Ie*.2,(G-1)*.3,Xs.tint,.5+.05*h)}if(F)for(let G=0;G<3;G++){const $=P*1.6+G/3*Math.PI*2,ae=Math.sin($);ae>0===B&&v("fx-spark",He[0]+Math.cos($)*We*.55,He[1]+ae*We*.22,Ie*.08,0,xi,.9*t.energy)}};T(!1),j(!1),ve>0&&g(ge.piece,He[0],He[1],Ze,We,d,u*Math.min(1,ve*2)),m(He[0],He[1],We*(i.capstone==="fire-sunfall"?2:1.3),ge.glow,(.45+.35*t.pulse.crystal)*(t.reduced?1:.85+.15*Math.sin(t.time*2.3))*ve);const ie=_>=1?t.reduced?.4:.35+.12*Math.sin(t.time*3):.45*_**3;ie>0&&ve>0&&m(He[0],He[1],We*1.7,xi,ie*ve),T(!0),j(!0),D();const Y=t.reduced?0:t.time,Se=t.groundRatio??Cn.sinPitch,he=M.art[0]*.42,we=(B,G,$,ae)=>{(B[1]>=0||Math.abs(B[0])>=he)&&m(B[0],B[1],G,$,ae)};if(t.range&&t.range.k>0)for(let B=0;B<Lh;B++)we(bi([0,0],t.range.radius,B/Lh*Math.PI*2,Se),24,db,t.range.k);if(i.chargeRing){const B=Math.round((t.charge??0)*Yr);for(let G=0;G<Yr;G++)m(...bi([0,0],n.daisWidth*.56,Math.PI*(.94-.88*G/(Yr-1)),Se),30,xi,G<B?B===Yr?.8:.55:.12)}if(i.hasteAura&&(t.haste??0)>0)for(let B=0;B<8;B++)m(...bi([0,ne*.45],n.daisWidth*.36,B/8*Math.PI*2+Y*2.4,Se),46,xi,.7*(t.haste??0));if(i.capstone==="frost-ice-age"&&t.iceRadius){for(let B=0;B<Ph;B++)we(bi([0,0],t.iceRadius,B/Ph*Math.PI*2,Se),26,Ch,.3);for(let B=0;B<Ih;B++)we(bi([0,0],t.iceRadius*(.55+.4*(B*37%11)/10),B/Ih*Math.PI*2+Y*.3,Se),34+B%3*10,Ch,.75)}if(i.capstone==="storm-tempest"&&!t.reduced&&Re.forEach(({r:B,c:G,studs:$},ae)=>$.forEach((I,ee)=>{Math.sin(t.time*13+ee*2.1+ae*4.3)>.55&&m(G[0]+I.x*B*gs,G[1]+I.y*B*gs,34,ub,.8)})),t.unlock){const{color:B,t:G}=t.unlock,$=.85*Math.sin(Math.PI*Math.min(1,Math.max(0,G)));if(t.reduced)m(Ae[0],Ae[1],Ie*2,B,$);else for(let ae=0;ae<32;ae++)m(...bi([0,Ae[1]*G],n.daisWidth/2+(n.rings[0]*O.crown-n.daisWidth/2)*G,ae/32*Math.PI*2+G*3,Cn.sinPitch),48,B,$)}const _e=i.capstone==="fire-sunfall"?He:[He[0],He[1]-We/2];if(!a&&t.energy>0)for(const{branch:B,age:G,seed:$}of t.pulse.muzzles){const ae=Math.min(1,G/fd),I=1-ae,ee=na[B],te=$*2.39996;if(m(_e[0],_e[1],Ie*(t.reduced?.85:.6+.5*ae),ee,.8*I),v("fx-flare",_e[0],_e[1],Ie*.3*(t.reduced?1:.7+.6*ae),te,ee,I*t.energy),!t.reduced)for(let re=0;re<3;re++){const Z=te+re*2.1,K=Ie*.45*ps(ae);v("fx-spark",_e[0]+Math.cos(Z)*K,_e[1]+Math.sin(Z)*K*.8,Ie*.1*(1-.5*ae),0,ee,I*t.energy)}}const se=a||t.energy<=0?0:t.pulse.nova;if(se>0){const B=1-se,G=(He[1]+We/2)*(1-ps(B));if(m(He[0],He[1],We*1.9,xi,.75*se),v("fx-flare",He[0],He[1],Ie*(t.reduced?.9:.7+.7*B),t.reduced?0:B*1.5,xi,se*t.energy),!t.reduced)for(let $=0;$<5;$++)m(y+($-2)*M.art[0]*.14,G,M.art[0]*.35,xi,.75*se)}const ue=l?fs(o,ms.flash):0;if(ue>0&&ue<1){m(He[0],He[1],We*2.8,ge.glow,.9*(1-ue)),v("fx-flare",He[0],He[1],Ie*(.6+1.1*ue),ue,ge.glow,1-ue);for(let B=0;B<6;B++){const G=B/6*Math.PI*2,$=Ie*.7*ps(ue);v("fx-spark",He[0]+Math.cos(G)*$,He[1]+Math.sin(G)*$*.7,Ie*.1,0,Mo,1-ue)}}return{sprites:s,glows:r,top:_e,body:me}}const mb=.72,Vt={body:"body-4",dais:[627,906],crystal:[627,300],display:.7},qs=160;class So{constructor(e,t,n){E(this,"mesh");E(this,"top",[0,0]);E(this,"box",[0,0,0,0]);E(this,"cans",new Float64Array(16));E(this,"canCount",0);E(this,"uv");E(this,"alpha");E(this,"pulse",new Y1);E(this,"m",new st);E(this,"c",new Ke);E(this,"time",0);E(this,"ringTime",0);E(this,"count",0);this.atlas=t;const s=new tn(1,1);this.uv=new cn(new Float32Array(qs*4),4),this.alpha=new cn(new Float32Array(qs),1),this.uv.setUsage(Dt),this.alpha.setUsage(Dt),s.setAttribute("iUv",this.uv),s.setAttribute("iAlpha",this.alpha);const r=new Wt({map:e,transparent:!0,alphaTest:.02,side:on,forceSinglePass:!0});r.onBeforeCompile=a=>{a.vertexShader=`attribute vec4 iUv;
attribute float iAlpha;
varying float vAlpha;
`+a.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = iUv.xy + uv * iUv.zw;
vAlpha = iAlpha;`),a.fragmentShader=`varying float vAlpha;
`+a.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.a *= vAlpha;`)},r.customProgramCacheKey=()=>"tower-2d",this.mesh=new Ps(s,r,qs),this.mesh.instanceMatrix.setUsage(Dt),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n,this.mesh.setColorAt(0,this.c.set(16777215)),this.mesh.count=0}static async load(e,t,n){const[s,r]=await Promise.all([t.loadAsync(e),fetch(e.replace(/\.webp$/,".json")).then(a=>a.json())]);return s.colorSpace=Tt,s.anisotropy=n,{texture:s,atlas:r}}handle(e){this.pulse.handle(e)}update(e,t,n){this.time+=e,this.ringTime+=e*n*this.pulse.ringRate(),this.pulse.update(e,t)}draw(e,t,n,s,r,a,o){const l=n;n*=Ml[e.stage].display;const{sprites:c,glows:h,top:d,body:u}=pb(e,this.atlas,{...r,iceRadius:r.iceRadius&&r.iceRadius/n,range:r.range&&{...r.range,radius:r.range.radius/n},time:this.time,ringTime:this.ringTime,pulse:this.pulse}),f=n,[g,v]=this.atlas.size;this.count=0,this.canCount=0;for(const S of c){const w=this.atlas.pieces[S.name];if(!w||this.count>=qs)continue;const[x,A,C,R]=w.rect,[D,M,y,L]=S.sub??[0,0,1,1],O=t[0]+S.x*n,z=t[1]+S.y*f;if(S.name==="canister"&&this.canCount<4){const X=this.canCount++*4,J=Math.abs(S.ux)*n/2,q=Math.abs(S.vy)*f/2;this.cans[X]=O-J,this.cans[X+1]=z-q,this.cans[X+2]=O+J,this.cans[X+3]=z+q}this.m.set(S.ux*n,S.vx*n,0,O,-S.uy*f,-S.vy*f,0,-z,0,0,1,s,0,0,0,1),this.mesh.setMatrixAt(this.count,this.m),this.mesh.setColorAt(this.count,this.c.set(S.tint)),this.uv.setXYZW(this.count,(x+D*C)/g,1-(A+L*R)/v,(y-D)*C/g,(L-M)*R/v),this.alpha.setX(this.count,S.alpha),this.count++}this.mesh.count=this.count,this.mesh.instanceMatrix.needsUpdate=this.uv.needsUpdate=this.alpha.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0);const m=(o==null?void 0:o.grown)??0,p=1-m;for(const S of h)a({...S,x:t[0]+S.x*n,y:t[1]+S.y*f,size:S.size*n,k:S.k*p});return this.top=[t[0]+d[0]*n,t[1]+d[1]*f],this.box=[t[0]+(u.x-u.ux/2)*n,t[1]+(u.y+u.vy/2)*f,t[0]+(u.x+u.ux/2)*n,t[1]+(u.y-u.vy/2)*f],o&&this.stageTwo(t,l,s,o,d,n,a),this.count}stageTwo(e,t,n,s,r,a,o){const l=this.atlas.pieces[Vt.body],c=[e[0]+r[0]*a,e[1]+r[1]*a];if(s.charge>0&&s.grown<1&&o({x:c[0],y:c[1],size:160*t*(1+s.charge),color:16771504,k:.9*s.charge*(1-s.grown)}),s.flash>0&&o({x:c[0],y:c[1]+60*t,size:900*t,color:16774358,k:s.flash}),!l||s.grown<=0)return;for(let x=0;x<this.count;x++)this.alpha.setX(x,this.alpha.getX(x)*(1-s.grown));const h=s.grown<1?.86+.14*s.grown+.06*Math.sin(Math.PI*s.grown):1,d=t*Vt.display*h,[u,f,g,v]=l.rect,[m,p]=this.atlas.size,S=e[0]+(l.at[0]+l.art[0]/2-Vt.dais[0])*d,w=e[1]+(l.at[1]+l.art[1]/2-Vt.dais[1])*d;this.count<qs&&(this.m.set(l.art[0]*d,0,0,S,0,l.art[1]*d,0,-w,0,0,1,n,0,0,0,1),this.mesh.setMatrixAt(this.count,this.m),this.mesh.setColorAt(this.count,this.c.set(16777215)),this.uv.setXYZW(this.count,u/m,1-(f+v)/p,g/m,v/p),this.alpha.setX(this.count,s.grown),this.count++,this.mesh.count=this.count,this.mesh.instanceMatrix.needsUpdate=this.uv.needsUpdate=this.alpha.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)),o({x:e[0]+(Vt.crystal[0]-Vt.dais[0])*d,y:e[1]+(Vt.crystal[1]-Vt.dais[1])*d,size:220*t,color:16773320,k:.45*s.grown}),s.grown>=1&&(this.top=[e[0]+(Vt.crystal[0]-Vt.dais[0])*d,e[1]+(Vt.crystal[1]-Vt.dais[1])*d],this.box=[e[0]-l.art[0]*d*.4,e[1]+(l.at[1]-Vt.dais[1])*d,e[0]+l.art[0]*d*.4,e[1]+(l.at[1]+l.art[1]-Vt.dais[1])*d],this.canCount=0)}hit(e,t){const[n,s,r,a]=this.box,o=(r-n)*.18;if(e>n+o&&e<r-o&&t>s&&t<a)return!0;for(let l=0;l<this.canCount*4;l+=4)if(e>this.cans[l]&&e<this.cans[l+2]&&t>this.cans[l+1]&&t<this.cans[l+3])return!0;return!1}static scaleFor(e){return e*mb/Ml[3].daisWidth}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}}const wn={fade:[0,1.5],gates:{start:1,gap:1.2,shake:.8,fall:1.6},tower:[6,9],land:{start:9,each:.9,drift:3.2,settle:14},length:15.5},wo=[{at:1.2,text:"ประตูมิติดับลงแล้ว"},{at:6.2,text:"หอคอยปรับสู่ระยะที่ 2"},{at:9.4,text:"แผ่นดินใกล้เคียงกลับมาเชื่อมต่อกัน"}],gb=i=>Math.max(0,Math.min(1,i)),Jn=i=>{const e=gb(i);return e*e*(3-2*e)};function vb(i){const e=wn.gates,t=wn.land,[n,s]=wn.tower,r=f=>{const g=e.start+f*e.gap,v=(i-g)/e.shake;return{shake:v>0&&v<1?Math.sin(Math.PI*v):0,broken:Jn((i-g-e.shake)/e.fall)}},a=[r(0),r(1),r(2)],o=(i-n)/(s-n),l=f=>Jn((i-t.start-f*t.each)/t.drift),c=[l(0),l(1),l(2)],h=[...wo].reverse().find(f=>i>=f.at),d=h?wo[wo.indexOf(h)+1]:void 0,u=d?d.at-.2:t.settle+.8;return{energy:1-Jn((i-wn.fade[0])/(wn.fade[1]-wn.fade[0])),shake:[a[0].shake,a[1].shake,a[2].shake],broken:[a[0].broken,a[1].broken,a[2].broken],charge:Jn(o/.55),flash:o>.5&&o<.85?Math.sin(Math.PI*(o-.5)/.35):0,grown:Jn((o-.6)/.4),islands:c,land:Jn((i-(t.start+2*t.each+t.drift-.4))/.8),zoom:Math.min(Jn((i-t.start)/3),1-Jn((i-t.settle-.2)/1)),caption:h&&i<u?{text:h.text,alpha:Math.min(1,(i-h.at)/.4,(u-i)/.4)}:null,done:i>=wn.length}}class _b{constructor(){E(this,"seconds",0);E(this,"won",!1)}update(e,t,n,s=!0){return e.phase==="victory"||this.won&&e.endless?(this.won=!0,n||e.endless?this.seconds=wn.length:!e.paused&&s&&(this.seconds=Math.min(wn.length,this.seconds+Math.max(0,t))),vb(this.seconds)):(this.won=!1,this.seconds=0,null)}skip(){this.won&&(this.seconds=wn.length)}}const xb="painted/",bb=[16729690,16732360,12475135],yb=8382719,Eo={top:".hud-top",bottom:".hud-bottom"},Dh=.45,Uh=.13,Qn=160,To={color:[.479,.716,1],strength:.45,side:.6};function Mb(i){const[e,t,n]=To.color;return`varying vec2 vFx;
`+i.replace("#include <map_fragment>",`#include <map_fragment>
vec2 rimPx = vec2(abs(dFdx(vMapUv).x), abs(dFdy(vMapUv).y));
float rimUp = 1. - min(texture2D(map, vMapUv + vec2(0., rimPx.y)).a, texture2D(map, vMapUv + vec2(0., 2. * rimPx.y)).a);
float rimSide = 1. - min(texture2D(map, vMapUv - vec2(rimPx.x, 0.)).a, texture2D(map, vMapUv + vec2(rimPx.x, 0.)).a);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(${e}, ${t}, ${n}), ${To.strength} * clamp(rimUp + ${To.side} * rimSide, 0., 1.));
diffuseColor.rgb += vFx.x * .6;
if (vFx.y < .999 && fract(sin(dot(floor(gl_FragCoord.xy), vec2(12.9898, 78.233))) * 43758.5453) > vFx.y) discard;`)}const wt={back:0,ambient:.5,ground:.8,groundGlowBack:.84,shadowBack:.85,tower:.9,groundGlow:.95,shadow:1,body:2,glow:3,vfx:4,bars:6},Kr=-900,Nh=-100,vs=i=>i*.1,Fh=.5;function Sb(i){const e=i.image,t=(s,r,a)=>{const o=document.createElement("canvas");o.width=r,o.height=a;const l=o.getContext("2d");return l.imageSmoothingQuality="high",l.drawImage(s,0,0,r,a),o},n=new Hl(t(t(e,288,148),36,18));return n.colorSpace=i.colorSpace,n}function Ao(i=64,e=!1,t=1.6){const n=new Uint8Array(i*i*4);for(let r=0;r<i;r++)for(let a=0;a<i;a++){const o=Math.hypot(a+.5-i/2,r+.5-i/2)/(i/2),l=e?Math.max(0,1-Math.abs(o-.85)/.15):Math.max(0,1-o)**t;n.set([255*l,255*l,255*l,255*l],(r*i+a)*4)}const s=new zl(n,i,i);return s.magFilter=s.minFilter=Jt,s.needsUpdate=!0,s}class _s{constructor(e,t,n){E(this,"mesh");E(this,"count",0);E(this,"m",new st);E(this,"q",new $n);E(this,"c",new Ke);this.capacity=t,this.mesh=new Ps(new tn(1,1),e,t),this.mesh.instanceMatrix.setUsage(Dt),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n,this.mesh.setColorAt(0,new Ke(1,1,1))}begin(){this.count=0}push(e,t,n,s,r,a,o=1,l=0){this.count>=this.capacity||(this.q.setFromAxisAngle(new k(0,0,1),-r),this.m.compose(new k(e,-t,l),this.q,new k(n,s,1)),this.mesh.setMatrixAt(this.count,this.m),this.mesh.setColorAt(this.count,this.c.setHex(a).multiplyScalar(o)),this.count++)}end(){this.mesh.count=this.count,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}}function wb(i){const e=new Wt({transparent:!0,opacity:i,depthTest:!1,depthWrite:!1});return e.onBeforeCompile=t=>{t.vertexShader=`varying vec2 vBarUv;
varying vec2 vBarSize;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vBarUv = uv;
vBarSize = vec2(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz));`),t.fragmentShader=`varying vec2 vBarUv;
varying vec2 vBarSize;
`+t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
vec2 barHalf = vBarSize * .5; float barR = min(barHalf.x, barHalf.y);
vec2 barQ = abs((vBarUv - .5) * vBarSize) - barHalf + barR;
float barD = length(max(barQ, 0.)) + min(max(barQ.x, barQ.y), 0.) - barR;
diffuseColor.a *= clamp(.5 - barD, 0., 1.);`)},e.customProgramCacheKey=()=>"hp-capsule",e}function Eb(i){const e=document.createElement("canvas");e.width=i.width,e.height=i.height;const t=e.getContext("2d",{willReadFrequently:!0});t.drawImage(i,0,0);const n=t.getImageData(0,0,e.width,e.height),s=n.data,r=new Uint8ClampedArray(256),a=l=>l<=.04045?l/12.92:((l+.055)/1.055)**2.4,o=l=>l<=.0031308?l*12.92:1.055*l**(1/2.4)-.055;for(let l=0;l<256;l++){const c=Math.min(.999,a(l/255)),h=c/(1-c),d=.76,u=1-d;r[l]=Math.round(o(Math.min(1,h<d?h:1-u*u/(h+u-d)))*255)}for(let l=0;l<s.length;l+=4)s[l]=r[s[l]],s[l+1]=r[s[l+1]],s[l+2]=r[s[l+2]];return t.putImageData(n,0,0),e}class tc{constructor(e,t,n,s,r,a,o,l){E(this,"onCueStart");E(this,"onCoin");E(this,"scene",new tp);E(this,"camera",new wu(0,1,0,-1,-1e3,1e3));E(this,"layout",ho(ti())?{...Ci.landscape,gates:A_(ti(),new oh(Ci.landscape))}:Ci.landscape);E(this,"map",new oh(this.layout));E(this,"laneTraces",p_(this.map));E(this,"fit",lh(1,1,this.layout));E(this,"panels",new y_);E(this,"resizeQueued",!1);E(this,"placed",[0,0]);E(this,"gateArt");E(this,"endingClock",new _b);E(this,"ending",null);E(this,"gateLight",1);E(this,"baseFit",this.fit);E(this,"pieces",[]);E(this,"endingLoad");E(this,"endingReady",!1);E(this,"endingBase","");E(this,"backdrop");E(this,"under");E(this,"tower");E(this,"towerHover",!1);E(this,"lastStateTime",0);E(this,"sheets",new Map);E(this,"shadows");E(this,"shadowsBack");E(this,"groundGlow");E(this,"groundGlowBack");E(this,"glow");E(this,"bars");E(this,"vfx",new c1(7));E(this,"vfxLayer");E(this,"skills",new A1(this.vfx,this.vfxSpace()));E(this,"ambient");E(this,"decor");E(this,"gateFlash",[0,0,0]);E(this,"actors",new Map);E(this,"held",new Set);E(this,"time",0);E(this,"frameMs",0);E(this,"unlockQueue",new e1);E(this,"unlockPlayer",new t1);E(this,"reduced",matchMedia("(prefers-reduced-motion: reduce)").matches);this.renderer=e,this.high=t,e.toneMapping=Hn,e.outputColorSpace=Tt,e.shadowMap.enabled=!1,this.scene.background=new Ke(8373243);const c=()=>new tn(1,1);this.under=new zt(c(),new Wt({map:Sb(n),color:15134454,depthWrite:!1})),this.backdrop=new zt(c(),new Wt({map:n,depthWrite:!1})),this.under.renderOrder=this.backdrop.renderOrder=wt.back,this.tower=new So(s.texture,s.atlas,wt.tower),l&&(this.gateArt=new q_(this.scene,l,this.layout,Kr+2,vs,{back:wt.ambient+.1,body:wt.body}));const h=Ao(),d=p=>new Wt({map:p,blending:Qs,transparent:!0,depthWrite:!1,depthTest:!1}),u=new Wt({color:1780244,alphaMap:Ao(64,!1,.7),transparent:!0,depthWrite:!1});u.onBeforeCompile=p=>{p.fragmentShader=p.fragmentShader.replace("#include <color_fragment>","diffuseColor.a *= vColor.r;")},u.customProgramCacheKey=()=>"ground-shadow",this.shadows=new _s(u,Qn*2,wt.shadow),this.shadowsBack=new _s(u,Qn*2,wt.shadowBack);const f=new Wt({alphaMap:Ao(64,!1,.9),transparent:!0,depthWrite:!1});f.onBeforeCompile=p=>{p.fragmentShader=p.fragmentShader.replace("#include <color_fragment>","float glowAlpha = max(vColor.r, max(vColor.g, vColor.b)); diffuseColor.rgb = vColor / max(glowAlpha, 1e-3); diffuseColor.a *= glowAlpha;")},f.customProgramCacheKey=()=>"ground-glow",this.groundGlow=new _s(f,Qn*2,wt.groundGlow),this.groundGlowBack=new _s(f,Qn*2,wt.groundGlowBack),this.glow=new _s(d(h),512,wt.glow),this.bars=new _s(wb(.92),Qn*2,wt.bars),this.scene.add(this.under,this.backdrop,this.tower.mesh,this.shadowsBack.mesh,this.shadows.mesh,this.groundGlowBack.mesh,this.groundGlow.mesh,this.glow.mesh,this.bars.mesh),a&&(this.vfxLayer=new d1(this.scene,a,wt.vfx,wt.ground,Nh)),o&&(this.ambient=new Mh(this.scene,this.backdrop.material,o,Kr+1,wt.ambient,wt.body+.01,ho(ti())?{gates:this.layout.gates}:void 0));for(const[p,{meta:S,texture:w}]of r)this.sheets.set(p,this.makeSheet(S,w));this.skills.onCoin=(p,S)=>{var x;const w=e.domElement.getBoundingClientRect();(x=this.onCoin)==null||x.call(this,{x:w.left+p.x,y:w.top+p.y},S)},this.resize(),addEventListener("resize",()=>this.queueResize());const g=new ResizeObserver(()=>this.queueResize());document.querySelectorAll(Object.values(Eo).join(",")).forEach(p=>g.observe(p));const v=new ResizeObserver(()=>{this.panels.update(innerWidth,innerHeight,this.panelBoxes())&&this.queueResize()});document.querySelectorAll("[data-hud-panel]").forEach(p=>v.observe(p)),document.fonts.ready.then(()=>this.queueResize()),matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",p=>{this.reduced=p.matches});const m=p=>{this.towerHover=p,e.domElement.style.cursor=p?"pointer":"default"};e.domElement.addEventListener("pointermove",p=>{const S=e.domElement.getBoundingClientRect();m(this.tower.hit(p.clientX-S.left,p.clientY-S.top))});for(const p of["pointerleave","pointercancel"])e.domElement.addEventListener(p,()=>m(!1))}skipEnding(){this.endingClock.skip()}loadEnding(e){return this.endingBase=e,this.endingLoad??(this.endingLoad=this.loadEndingArt(e).finally(()=>{this.endingReady=!0})),this.endingLoad}async loadEndingArt(e){var s;const t=new vl,n=async r=>{const a=await t.loadAsync(e+r);return a.colorSpace=Tt,a};try{const[r,a]=await Promise.all([n("island-restored.webp"),fetch(e+"island-pieces.json").then(o=>o.json())]);(s=this.ambient)==null||s.setRestored(r);for(const o of a.pieces){const l=new Wt({map:await n(o.file),transparent:!0,depthWrite:!1,opacity:0}),c=new zt(new tn(1,1),l);c.frustumCulled=!1,c.renderOrder=wt.ambient+.05,c.visible=!1,this.scene.add(c),this.pieces.push({mesh:c,rect:o.rect,from:o.from})}}catch(r){console.warn("ending art",r)}}drawPieces(e){this.pieces.forEach(({mesh:t,rect:n,from:s},r)=>{const a=(e==null?void 0:e.islands[r])??0,o=!!e&&e.land<1&&a>0;if(t.visible=o,!o)return;const l=this.fit.scale,[c,h]=this.fit.offset,[d,u,f,g]=n,v=1-a,m=this.reduced?0:Math.sin(this.time*1.3+r)*4*v;t.position.set(c+(d+f/2+s[0]*v)*l,-(h+(u+g/2+s[1]*v+m)*l),Kr+1.5);const p=.9+.1*a;t.scale.set(f*l*p,g*l*p,1),t.material.opacity=Math.min(1,a*3)*(1-e.land)})}zoomFit(e){const t=e>0?(()=>{const[n,s]=this.layout.size,r=Math.max(innerWidth/n,innerHeight/s),a=this.baseFit.scale,o=Math.min(a,Math.max(r*1.02,a*(1-.24*e))),[l,c]=this.layout.plaza;if(o>=a)return this.baseFit;const h=this.baseFit.offset[0]+l*a,d=this.baseFit.offset[1]+c*a,u=(f,g,v)=>Math.min(0,Math.max(v-g*o,f));return{...this.baseFit,scale:o,offset:[u(h-l*o,n,innerWidth),u(d-c*o+30*e,s,innerHeight)]}})():this.baseFit;t.scale===this.fit.scale&&t.offset[0]===this.fit.offset[0]&&t.offset[1]===this.fit.offset[1]||(this.fit=t,this.vfx.clear(),this.placeBackdrop())}placeBackdrop(){const[e,t]=this.layout.size,[n,s]=this.fit.offset,r=this.fit.scale;this.backdrop.position.set(n+e*r/2,-(s+t*r/2),Kr),this.backdrop.scale.set(e*r,t*r,1)}static async create(e,t,n=()=>{}){var x;const s="./"+xb,r=new vl,a=Ci.landscape,o=[...new Set(Ox.map(ph))],l=ho(ti());let c=0;const h=5+o.length+(l?1:0),d=()=>n(++c/h),u=async A=>{const C=await r.loadAsync(s+A);return C.colorSpace=Tt,C.anisotropy=e.capabilities.getMaxAnisotropy(),d(),C},[f,g]=await Promise.all([u(l?`../levels/${ti().id}/ground.webp`:a.image),So.load(s+a.tower.image,r,e.capabilities.getMaxAnisotropy()).then(A=>(d(),A))]),v=l?(d(),void 0):await u(a.gateArt).catch(A=>{console.warn("painted gate art",A)}),m=await u("vfx.webp").catch(A=>{console.warn("painted vfx atlas",A)}),p=await Mh.loadMasks(l?"./levels/kit/":s,l?"ambient.png":void 0).catch(A=>{console.warn("painted motion masks",A)}),S=new Map;await Promise.all(o.map(async A=>{try{const C=await(await fetch(`${s}sheets/${A}.json`)).json(),R=await new Promise((M,y)=>{const L=new Image;L.onload=()=>M(L),L.onerror=y,L.src=`${s}sheets/${A}.webp`}),D=new Hl(Eb(R));D.colorSpace=Tt,S.set(A,{meta:C,texture:D})}catch(C){console.warn("painted sheet",A,C)}d()}));const w=new tc(e,t,f,g,S,m,p,v);if(l){try{const[{Decor2DLayer:A},{decorLayout:C,islandEllipse:R,leafCrowns:D},{grassContext:M,readGrassMask:y}]=await Promise.all([ao(()=>import("./decor-2d-layer-C_J0KDZj.js"),[],import.meta.url),ao(()=>import("./decor-layout-DEa3-cWX.js"),__vite__mapDeps([0,1]),import.meta.url),ao(()=>import("./grass-mask-DRTdgJFI.js"),[],import.meta.url)]),{atlas:L,texture:O}=await A.loadAtlas("./"),z=await fetch(`./levels/kit/grass-${ti().base}.json`).then(J=>J.ok?J.json():void 0).catch(()=>{}),X=C(ti(),{map:w.map,atlas:L,island:R(w.layout),...z?{grass:M(y(z),w.layout)}:{}});w.decor=new A(w.scene,O,X,{shade:wt.ambient+.2,decor:wt.body+.5},vs,Nh),(x=w.ambient)==null||x.setLeafTrees(D(X))}catch(A){console.warn("kit decor",A)}d()}return l||(w.endingBase=s,window.setTimeout(()=>void w.loadEnding(s),2500)),w}makeSheet(e,t){const n=new tn(1,1),s=new cn(new Float32Array(Qn*3),3),r=new cn(new Float32Array(Qn*2),2);s.setUsage(Dt),r.setUsage(Dt),n.setAttribute("iCell",s),n.setAttribute("iFx",r);const a=new Wt({map:t,alphaTest:.5}),o=new et(Bt.cell/e.width,Bt.cell/e.height);a.onBeforeCompile=c=>{c.uniforms.uCellSize={value:o},c.vertexShader=`attribute vec3 iCell;
attribute vec2 iFx;
uniform vec2 uCellSize;
varying vec2 vFx;
`+c.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = vec2(iCell.z > .5 ? 1. - uv.x : uv.x, uv.y) * uCellSize + iCell.xy;
vFx = iFx;`),c.fragmentShader=Mb(c.fragmentShader)},a.customProgramCacheKey=()=>"view2d-sprite";const l=new Ps(n,a,Qn);return l.instanceMatrix.setUsage(Dt),l.frustumCulled=!1,l.renderOrder=wt.body,l.count=0,this.scene.add(l),{meta:e,mesh:l,cell:s,fx:r}}resize(){const e=innerWidth,t=innerHeight;this.renderer.setSize(e,t),this.vfx.view={w:e,h:t},this.camera.left=0,this.camera.right=e,this.camera.top=0,this.camera.bottom=-t,this.camera.updateProjectionMatrix(),this.panels.update(e,t,this.panelBoxes()),this.place()}queueResize(){this.resizeQueued||(this.resizeQueued=!0,requestAnimationFrame(()=>{this.resizeQueued=!1,this.resize()}))}place(){const e=innerWidth,t=innerHeight,[n,s]=this.layout.size,r=this.fit,a=e===this.placed[0]&&t===this.placed[1];this.placed=[e,t],this.fit=this.baseFit=lh(e,t,this.layout,this.safeBand(t),g_(this.layout,this.laneTraces),{outline:this.layout.outline,panels:this.panels.boxes});const o=S_(r,this.fit,a);o==="clear"?this.vfx.clear():o==="slide"&&this.vfx.shift(this.fit.offset[0]-r.offset[0],this.fit.offset[1]-r.offset[1]),this.placeBackdrop();const l=Math.max(e/n,t/s);this.under.visible=!this.fit.cover,this.under.position.set(e/2,-t/2,-950),this.under.scale.set(n*l,s*l,1)}panelBoxes(){return Array.from(document.querySelectorAll("[data-hud-panel]")).filter(e=>e.getClientRects().length).map(e=>[e,e.getBoundingClientRect()]).filter(([,e])=>e.width>0&&e.height>0).map(([e,t])=>[e,[t.left,t.top,t.right,t.bottom]])}safeBand(e){const t=r=>Array.from(document.querySelectorAll(r)).filter(a=>a.getClientRects().length).map(a=>a.getBoundingClientRect()),n=Math.max(0,...t(Eo.top).map(r=>r.bottom)),s=Math.min(e,...t(Eo.bottom).map(r=>r.top));return s-n>80?{top:n+8,bottom:s-8}:{top:0,bottom:e}}screen(e){return[this.fit.offset[0]+e[0]*this.fit.scale,this.fit.offset[1]+e[1]*this.fit.scale]}paint(e){const t=this.ground(e);return this.map.toImage(t.x,t.z)}ground(e){const t=this.actorNear(e);return t?{x:t.x,z:t.z}:{x:e.x,z:e.z}}actorNear(e,t){const n=t===void 0?void 0:this.actors.get(t);if(n)return n;let s,r=1.2;for(const a of this.actors.values()){const o=Math.hypot(a.rx-e.x,a.rz-e.z);o<r&&(r=o,s=a)}return s}screenPoint(e){const[t,n]=this.screen(this.paint(e)),s=this.renderer.domElement.getBoundingClientRect();return{x:s.left+t,y:s.top+n,ndcX:t/Math.max(1,innerWidth)*2-1}}vfxSpace(){const e=(t,n)=>{const[s,r]=this.screen(this.map.toImage(t,n));return{x:s,y:r}};return{actor:(t,n)=>{var s;return n!==void 0?this.actors.has(n)?n:void 0:(s=this.actorNear(t))==null?void 0:s.id},place:t=>{const n=this.actors.get(t);return n&&{...e(n.x,n.z),height:n.height??44*this.fit.scale}},ground:t=>e(t.x,t.z),metric:()=>this.vfx.metric,towerTop:()=>({x:this.tower.top[0],y:this.tower.top[1]})}}handle(e){this.unlockQueue.add(e)&&this.unlockPlayer.cancel(),this.tower.handle(e),this.skills.handle(e);for(const t of e){const n=t.target;t.type==="hit"&&n!==void 0&&this.skills.onImpact(t,()=>{const s=this.actors.get(n);s&&(s.flash=Uh)}),t.type==="kill"&&n!==void 0&&(this.held.add(n),this.skills.onImpact(t,()=>{this.held.delete(n),this.exit(n,"kill")})),t.type==="leak"&&n!==void 0&&this.exit(n,"leak"),t.type==="spawn"&&t.lane!==void 0&&(this.gateFlash[t.lane%3]=Fh)}}exit(e,t){const n=this.actors.get(e);n&&!n.exit&&(n.exit={kind:t,t:0})}update(e,t){var l,c,h;const n=performance.now(),s=e.paused?0:t*e.speed*yl;this.time+=s,e.time<this.lastStateTime&&(this.unlockQueue.clear(),this.unlockPlayer.cancel()),this.lastStateTime=e.time,this.playUnlocks(e,t);const r=new Set;for(const d of e.enemies){r.add(d.id);const u={x:d.x,z:d.z};let f=this.actors.get(d.id);f||(f={id:d.id,kind:d.kind,lane:d.lane,progress:d.progress,rx:d.x,rz:d.z,x:u.x,z:u.z,px:u.x,pz:u.z,hp:d.hp,maxHp:d.maxHp,boss:d.boss,mini:!!d.mini,flash:0,walk:0},this.actors.set(d.id,f));const g=Math.hypot(u.x-f.x,u.z-f.z);g>1e-4&&(f.px=f.x,f.pz=f.z),f.walk+=g,f.x=u.x,f.z=u.z,f.rx=d.x,f.rz=d.z,f.lane=d.lane,f.progress=d.progress,f.hp=d.hp,f.maxHp=d.maxHp,f.cues=Gx(d,e)}for(const d of this.actors.values())d.flash=Math.max(0,d.flash-s),!r.has(d.id)&&!d.exit&&!this.held.has(d.id)&&(d.exit={kind:"kill",t:0}),d.exit&&(d.exit.t+=s),d.exit&&d.exit.t>Dh&&this.actors.delete(d.id);for(let d=0;d<3;d++)this.gateFlash[d]=Math.max(0,this.gateFlash[d]-s);this.vfx.reduced=this.reduced,this.vfx.scale=this.fit.scale,this.vfx.metric=f1((d,u)=>this.screen(this.map.toImage(d,u))),e.phase==="victory"&&!this.endingLoad&&this.endingBase&&this.loadEnding(this.endingBase);const a=this.ending=this.endingClock.update(e,t,this.reduced,this.endingReady||!this.endingBase);this.zoomFit((a==null?void 0:a.zoom)??0),this.drawPieces(a);const o=a&&!e.endless?a.energy:1;this.gateLight=a?e.endless?0:a.energy:1,this.skills.sync(e),this.skills.frame(e,this.time,s,o),this.vfx.update(s),(l=this.ambient)==null||l.update(t,"landscape",this.fit,this.reduced,this.gateLight,a,e.endless),(c=this.decor)==null||c.update(this.fit,s,this.reduced,this.gateLight),(h=this.gateArt)==null||h.update(this.fit,this.gateLight,a==null?void 0:a.broken,this.reduced||a==null?void 0:a.shake,this.time),this.tower.update(s,this.reduced,o),this.draw(e,o),this.renderer.render(this.scene,this.camera),this.frameMs=performance.now()-n}playUnlocks(e,t){var n;if(!e.paused){if(document.body.dataset.uiModal!=="true"&&!this.unlockPlayer.busy){const s=this.unlockQueue.take(e);s.length&&this.unlockPlayer.play(Qx(s,this.reduced))}if(this.unlockPlayer.busy)for(const s of this.unlockPlayer.advance(t).started)(n=this.onCueStart)==null||n.call(this,s)}}draw(e,t){var o;const n=this.fit.scale,s=G_(n);for(const l of[this.shadows,this.shadowsBack,this.groundGlow,this.groundGlowBack,this.glow,this.bars])l.begin();const r=this.screen(this.layout.tower.base)[1];this.drawTower(e,t);const a=new Map;for(const l of this.actors.values()){const[c,h]=this.screen(this.map.toImage(l.x,l.z)),d=ln[l.kind],u=z_(l.kind,l),f=l.exit?Math.min(1,l.exit.t/Dh):0,g=d.height*u*this.layout.actorScale*n*s,v=d.footprint*u*this.layout.actorScale*n*s*(1-f*.6),m=h>r,p=m?this.shadows:this.shadowsBack,S=m?this.groundGlow:this.groundGlowBack;for(const R of W_(v,d.hover))p.push(c+R.dx,h+R.dy,R.w,R.h,0,16777215,R.alpha,vs(h)-.01);const w=this.reduced?1:.85+.15*Math.sin(this.time*9+l.id);for(const R of X_(l.kind,v))S.push(c+R.dx,h+R.dy,R.w,R.h,0,R.color,R.k*w*(1-f),vs(h)-.01);const x=ph(l.kind),A=this.sheets.get(x);let C=h-g;if(A){const R=a.get(x)??0;a.set(x,R+1),C=this.placeSprite(A,R,l,c,h-d.hover*this.layout.actorScale*n*.7,u,s,f)}if(l.height=h-C,l.cues&&!l.exit&&this.skills.marks(l.cues,{id:l.id,x:c,feet:h,top:C,width:g*.84},d.footprint*u,this.time),!l.exit){const R=Math.max(26,g*.7),D=C-6,M=Math.max(0,l.hp/l.maxHp);this.bars.push(c,D,R,7,0,1385012),this.bars.push(c-(R-4)*(1-M)/2,D,(R-4)*M,4,0,l.boss?16760670:11134918)}}for(const[l,c]of this.sheets)c.mesh.count=a.get(l)??0,c.mesh.instanceMatrix.needsUpdate=c.cell.needsUpdate=c.fx.needsUpdate=!0;this.layout.gates.forEach((l,c)=>{const h=this.gateFlash[c]/Fh,[d,u,f,g]=l.mouth,[v,m]=this.screen([d,u]),p=1.75*Math.max(f,g)*n;this.gateLight>.001?this.glow.push(v,m,p*2,p*2,0,bb[c],(.4+(this.reduced?0:.15*Math.sin(this.time*2+c))+.5*h)*this.gateLight):h>0&&this.ending&&this.glow.push(v,m,p*2,p*2,0,yb,.6*h)}),(o=this.vfxLayer)==null||o.draw(this.vfx,this.skills.quads,this.time);for(const l of[this.shadows,this.shadowsBack,this.groundGlow,this.groundGlowBack,this.glow,this.bars])l.end()}drawTower(e,t){const[n,s]=this.screen(this.layout.tower.base),r=So.scaleFor(this.layout.tower.width*this.fit.scale),a=this.unlockPlayer.active;this.tower.draw(W1(e),[n,s],r,vs(s),{reduced:this.reduced,energy:t,charge:jx(e),haste:Zx(e),unlock:a?{color:na[a.branch],t:this.unlockPlayer.activeProgress}:void 0,iceRadius:aa*this.map.sx*this.fit.scale,groundRatio:fb(this.layout),range:{radius:Jl(e).range*this.map.sx*this.fit.scale,k:this.towerHover?.6:e.phase==="wave"?.05:.2}},o=>this.glow.push(o.x,o.y,o.size,o.size,0,o.color,o.k),this.ending??void 0)}placeSprite(e,t,n,s,r,a,o,l){var D,M;const c=e.meta,h=ln[n.kind],d=V_(c,h,a),u=((D=n.exit)==null?void 0:D.kind)==="kill"?"death":"move",f=Bt.clips[u],g=u==="death"?Math.min(f-1,Math.floor(l*f)):Math.floor(n.walk/Math.max(1e-6,h.moveSpeed*d*o)/c.durations.move*f)%f,v=Math.atan2(n.x-n.px,n.z-n.pz),{dir:m,flip:p}=zx(v-Cn.yaw),S=Bx(u,g,m),w=c.cells[u];e.cell.setXYZ(t,S%Bt.columns*Bt.cell/c.width,(Bt.rows-1-Math.floor(S/Bt.columns))*Bt.cell/c.height,p?1:0),e.fx.setXY(t,n.flash/Uh,((M=n.exit)==null?void 0:M.kind)==="leak"||u==="death"&&l>.7?1-l:1);const x=w.world/c.fitScale*d*this.layout.actorScale*this.fit.scale*o/Cn.cosPitch,A=p?1-w.anchor[0]:w.anchor[0],C=s+(.5-A)*x,R=r-(.5-w.anchor[1])*x;return e.mesh.setMatrixAt(t,new st().compose(new k(C,-R,vs(r)),new $n,new k(x,x,1))),r-(1-w.anchor[1])*x+x*.12}toggleQuality(){return this.high=!this.high,this.renderer.setPixelRatio(Du(devicePixelRatio,this.high,Lu(location.search,!1))),this.resize(),this.high}benchCounts(){var t;const e=(t=this.vfxLayer)==null?void 0:t.counts;return{enemies:this.actors.size,effects:this.vfx.particles.length+this.vfx.bolts.length,projectiles:this.vfx.projectiles.length,statusQuads:this.skills.quads.length,vfxQuads:((e==null?void 0:e.top)??0)+((e==null?void 0:e.ground)??0),glow:this.glow.mesh.count,bars:this.bars.mesh.count}}diagnostics(){var n,s,r,a;const e=this.renderer.info.render,t=this.renderer.domElement;return{view:"2d",layout:"landscape",scale:this.fit.scale,cover:this.fit.cover,cssSize:[t.clientWidth,t.clientHeight],drawingBuffer:[t.width,t.height],pixelRatio:this.renderer.getPixelRatio(),drawCalls:e.calls,triangles:e.triangles,textures:this.renderer.info.memory.textures,enemies:this.actors.size,effects:this.vfx.particles.length+this.vfx.bolts.length,projectiles:this.vfx.projectiles.length,sheets:this.sheets.size,frameMs:this.frameMs,quality:this.high?"high":"standard",tower:{instances:this.tower.mesh.count,top:this.tower.top},layers:{shadows:this.shadows.mesh.count+this.shadowsBack.mesh.count,glow:this.glow.mesh.count,bars:this.bars.mesh.count,vfx:!!this.vfxLayer,ambient:((n=this.ambient)==null?void 0:n.sprites)??-1,gates:((s=this.gateArt)==null?void 0:s.drawn)??-1,decor:((r=this.decor)==null?void 0:r.count)??-1},skillVfx:{quads:this.skills.quads.length,...(a=this.vfxLayer)==null?void 0:a.counts}}}}function Tb(i,e){return!i.paused&&!e&&i.phase!=="victory"&&i.phase!=="defeat"}const Ab=()=>typeof navigator>"u"?void 0:navigator.wakeLock;class Rb{constructor(e=Ab(),t=()=>document.visibilityState==="visible"){E(this,"lock");E(this,"pending",!1);E(this,"refused",!1);E(this,"retries",0);E(this,"want",!1);this.api=e,this.visible=t}sync(e){if(this.want=e,!e){const n=this.lock;this.lock=void 0,n==null||n.release().catch(()=>{});return}if(this.lock&&!this.lock.released||!this.api||this.pending||this.refused||!this.visible())return;this.pending=!0;const t=this.retries;this.api.request("screen").then(n=>{this.pending=!1,this.want?this.lock=n:n.release().catch(()=>{})},()=>{this.pending=!1,this.refused=t===this.retries})}retry(){this.refused=!1,this.retries++}}function Cb(i,e,t){return t&&e>i?"rotate":"ok"}function Pb(i,e){return e==="rotate"&&i.phase==="wave"&&!i.paused}function ya(i){return i==="rotate"}async function Ib(){const i=typeof screen<"u"?screen.orientation:void 0;if(!(i!=null&&i.lock))return!1;try{return await i.lock("landscape"),!0}catch{return!1}}function Lb(i){return i.touch&&!i.fullscreen&&!i.standalone&&i.supported}const _d=i=>({hp:i.hp,maxHp:i.maxHp,novaCharges:i.novaCharges,phase:i.phase}),Sl=.3,Db={"green-blob":"small",alien:"medium","mushroom-king":"medium",yeti:"heavy",orc:"heavy","orc-skull":"heavy",demon:"flying","blue-demon":"flying"};function Ub(i,e,t){return e?"boss":t?"small":Db[i]}const Nb={small:"deathSmall",medium:"deathMedium",heavy:"deathHeavy",flying:"deathFlying",boss:"deathBoss"},kh={arcane:"shotArcane",fire:"shotFire",frost:"shotFrost",storm:"shotStorm"},Fb={"armor-block":"armor","shield-break":"shieldBreak",split:"split",dash:"dash",stun:"stun",shatter:"shatter",spread:"spread",discharge:"discharge","cast-impact":"meteorImpact",tempest:"tempest",nova:"nova",build:"build",upgrade:"build",points:"points",skill:"skill",capstone:"skill",respec:"respec",victory:"victory",defeat:"defeat",leak:"alertLeak"},kb=i=>i.startsWith("alert")||i==="deathBoss";function Ob(i,e,t){const n=[];let s=0;for(const a of i){const o=a.to;switch(a.type){case"shot":n.push({name:kh[a.element??"arcane"],at:o,element:a.element??"arcane"});break;case"hit":n.push({name:"hit",at:o,element:a.element??"arcane"});break;case"kill":{const l=(a.target??0)>=td;n.push({name:Nb[Ub(a.kind??"green-blob",!!a.boss,l)],at:o}),(a.value??0)>0&&n.push({name:"coin",at:o,step:Math.min(s++,4)});break}case"spawn":n.push({name:a.boss?"spawnBoss":"spawn",at:o});break;case"cast":n.push(a.skill==="meteor"?{name:"meteorWarning",at:o}:a.skill==="thunder"?{name:"tempest",at:o}:{name:kh[a.element??"arcane"],at:o,element:a.element??"arcane"});break;case"zone":n.push({name:a.element==="fire"?"zoneLava":"zoneIce",at:o});break;case"boss-warning":n.push({name:"alertBoss",at:Pn(a.lane??0,0)});break;case"wave":t.phase==="wave"?n.push({name:Ql(t).newTraits.length?"alertNewAbility":"waveStart"}):t.phase==="ready"&&n.push({name:"waveClear"});break;default:{const l=Fb[a.type];l&&n.push({name:l,at:o})}}}const r=t.maxHp*Sl;return e.hp>e.maxHp*Sl&&t.hp<=r&&t.hp>0&&t.phase!=="defeat"&&n.push({name:"alertHpLow"}),e.novaCharges===0&&t.novaCharges>0&&t.phase==="wave"&&n.push({name:"alertNovaReady"}),n}const Bb={shotArcane:.09,shotFire:.09,shotFrost:.09,shotStorm:.09,hit:.07,armor:.15,shieldBreak:.12,deathSmall:.06,deathMedium:.06,deathHeavy:.06,deathFlying:.06,coin:.08,split:.12,dash:.25,spawn:.4,stun:.15,shatter:.15,zoneLava:.3,zoneIce:.3,spread:.12,discharge:.12,meteorWarning:.3,meteorImpact:.3,tempest:.3,uiClick:.05,uiDisabled:.05},zb=1.5;class Hb{constructor(){E(this,"last",new Map)}allow(e,t){const n=e.startsWith("alert")?zb:Bb[e]??0,s=this.last.get(e);return n>0&&s!==void 0&&t-s<n?!1:(this.last.set(e,t),!0)}}const Gb=24;class Vb{constructor(e,t,n,s){E(this,"nodes",[]);this.input=e,this.alert=t,this.music=n,this.end=s,this.nodes.push(e)}add(e){return this.nodes.push(e),e}}const zn=i=>440*Math.pow(2,(i-69)/12);class Wb{constructor(e){E(this,"master");E(this,"sfx");E(this,"duckGain");E(this,"music");E(this,"musicScore");E(this,"verb");E(this,"musicVerb");E(this,"noiseBuffer");E(this,"voices",[]);E(this,"timers",new Set);E(this,"peak",0);this.ctx=e;const t=e.createDynamicsCompressor();t.threshold.value=-14,t.knee.value=12,t.ratio.value=4,t.attack.value=.003,t.release.value=.25,t.connect(e.destination),this.master=this.gain(.9,t),this.sfx=this.gain(.8,this.master),this.duckGain=this.gain(1,this.master),this.music=this.gain(.5,this.duckGain),this.musicScore=this.gain(.8,this.music),this.verb=e.createConvolver(),this.verb.buffer=this.impulse(1.8,2.6),this.verb.connect(this.gain(.32,this.sfx)),this.musicVerb=e.createConvolver(),this.musicVerb.buffer=this.verb.buffer,this.musicVerb.connect(this.gain(.32,this.musicScore)),this.noiseBuffer=this.makeNoise(2)}get noise(){return this.noiseBuffer}get now(){return this.ctx.currentTime+.01}gain(e,t){const n=this.ctx.createGain();return n.gain.value=e,t&&n.connect(t),n}makeNoise(e){const t=this.ctx.createBuffer(1,Math.floor(this.ctx.sampleRate*e),this.ctx.sampleRate),n=t.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1;return t}impulse(e,t){const n=Math.floor(this.ctx.sampleRate*e),s=this.ctx.createBuffer(2,n,this.ctx.sampleRate);for(let r=0;r<2;r++){const a=s.getChannelData(r);for(let o=0;o<n;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/n,t)}return s}liveEffectVoices(){const e=this.ctx.currentTime;return this.voices.filter(t=>!t.music&&t.end>e).length}voice({bus:e=this.sfx,pan:t=0,send:n=.15,dur:s=1,alert:r=!1,music:a=!1}={}){const o=this.ctx,l=o.createGain(),c=new Vb(l,r,a,o.currentTime+s),h=c.add(o.createStereoPanner());if(h.pan.value=Math.max(-.6,Math.min(.6,t)),l.connect(h),h.connect(e),n>0){const u=c.add(this.gain(n));h.connect(u),u.connect(a?this.musicVerb:this.verb)}this.voices.push(c);const d=window.setTimeout(()=>{this.timers.delete(d),this.release(c)},(s+.3)*1e3);return this.timers.add(d),a||(this.peak=Math.max(this.peak,this.liveEffectVoices())),c}release(e){var n;const t=this.voices.indexOf(e);if(!(t<0)){this.voices.splice(t,1);for(const s of e.nodes){try{(n=s.stop)==null||n.call(s)}catch{}try{s.disconnect()}catch{}}}}stopVoice(e){this.release(e)}makeRoom(){for(;this.liveEffectVoices()>=Gb;){const e=this.ctx.currentTime,t=this.voices.find(n=>!n.alert&&!n.music&&n.end>e);if(!t)return!1;this.release(t)}return!0}env(e,t,n,s,r){e.cancelScheduledValues(t),e.setValueAtTime(1e-4,t),e.linearRampToValueAtTime(s,t+n),e.exponentialRampToValueAtTime(1e-4,t+Math.max(r,n+.01))}filter(e,t,n,s){if(!t)return e.input;const r=e.add(this.ctx.createBiquadFilter());return r.type=t.type,r.Q.value=t.q??.7,r.frequency.setValueAtTime(t.f,n),t.f2&&r.frequency.exponentialRampToValueAtTime(t.f2,n+(t.ft??s)),r.connect(e.input),r}tone(e,t,{type:n="sine",f:s,f2:r,dur:a=.2,gain:o=.1,a:l=.005,detune:c=0,filter:h,glide:d}){const u=e.add(this.ctx.createOscillator()),f=e.add(this.ctx.createGain());return u.type=n,u.detune.value=c,u.frequency.setValueAtTime(s,t),r&&u.frequency.exponentialRampToValueAtTime(r,t+(d??a)),this.env(f.gain,t,l,o,a),u.connect(f),f.connect(this.filter(e,h,t,a)),u.start(t),u.stop(t+a+.05),u}noiseBurst(e,t,{dur:n=.2,gain:s=.1,a:r=.003,filter:a}){const o=e.add(this.ctx.createBufferSource()),l=e.add(this.ctx.createGain());o.buffer=this.noiseBuffer,this.env(l.gain,t,r,s,n),o.connect(l),l.connect(this.filter(e,a,t,n)),o.start(t,Math.random()*1.2),o.stop(t+n+.05)}bell(e,t,n,{dur:s=1.2,gain:r=.08,bright:a=1}={}){for(const[o,l,c]of[[1,1,1],[2.76,.45*a,.6],[5.4,.22*a,.35],[8.93,.1*a,.2]])n*o<16e3&&this.tone(e,t,{f:n*o,dur:s*c,gain:r*l,a:.002})}pluck(e,t,n,{dur:s=1.6,gain:r=.05}={}){this.tone(e,t,{type:"triangle",f:n,dur:s,gain:r,a:.003}),this.tone(e,t,{f:n*2,dur:s*.5,gain:r*.35,a:.002})}drum(e,t,n){this.tone(e,t,{f:95,f2:50,dur:.32,gain:n,glide:.25}),this.noiseBurst(e,t,{dur:.12,gain:n*.35,filter:{type:"lowpass",f:320}})}duck(){const e=this.duckGain.gain,t=this.ctx.currentTime;e.cancelScheduledValues(t),e.setValueAtTime(e.value,t),e.linearRampToValueAtTime(.35,t+.08),e.setValueAtTime(.35,t+.5),e.linearRampToValueAtTime(1,t+1.7)}play(e,t){!this.makeRoom()&&!kb(e.name)||(e.name.startsWith("alert")&&this.duck(),$b[e.name](this,t,e))}dispose(){this.timers.forEach(e=>clearTimeout(e)),this.timers.clear(),[...this.voices].forEach(e=>this.release(e))}}function Oh(i,e,t,n,s,r,a,o,l,c){const h=i.tone(e,t,{type:"sawtooth",f:n,dur:s,gain:r,filter:{type:"highpass",f:a}});for(let d=1;d<o;d++)h.frequency.setValueAtTime(l+Math.random()*c,t+d*.011)}const $b={shotArcane(i,e){const t=i.now,n=i.voice({pan:e,dur:.3,send:.12});i.tone(n,t,{f:880,f2:520,dur:.18,gain:.1}),i.tone(n,t,{type:"triangle",f:1320,f2:760,dur:.14,gain:.05}),i.noiseBurst(n,t,{dur:.03,gain:.05,filter:{type:"highpass",f:5e3}})},shotFire(i,e){const t=i.now,n=i.voice({pan:e,dur:.4,send:.1});i.noiseBurst(n,t,{dur:.3,gain:.32,a:.015,filter:{type:"bandpass",f:1100,f2:260,q:1.1}}),i.tone(n,t,{f:120,f2:55,dur:.2,gain:.22})},shotFrost(i,e){const t=i.now,n=i.voice({pan:e,dur:.6,send:.3});i.bell(n,t,1568,{dur:.45,gain:.06,bright:1.3}),i.noiseBurst(n,t,{dur:.16,gain:.05,filter:{type:"highpass",f:6500}})},shotStorm(i,e){const t=i.now,n=i.voice({pan:e,dur:.3,send:.1});Oh(i,n,t,1400,.13,.06,900,12,600,1800),i.noiseBurst(n,t,{dur:.05,gain:.14,filter:{type:"bandpass",f:3200,q:1.5}})},hit(i,e,t){const n=i.now,s=i.voice({pan:e,dur:.15,send:0});i.tone(s,n,{f:240,f2:90,dur:.07,gain:.07}),t.element==="fire"&&i.noiseBurst(s,n,{dur:.08,gain:.06,filter:{type:"lowpass",f:900}}),t.element==="frost"&&i.tone(s,n,{f:2400,dur:.05,gain:.02}),t.element==="storm"&&i.noiseBurst(s,n,{dur:.03,gain:.05,filter:{type:"highpass",f:3e3}})},armor(i,e){const t=i.now,n=i.voice({pan:e,dur:.3,send:.12});i.tone(n,t,{f:1230,dur:.2,gain:.06,a:.001}),i.tone(n,t,{f:1913,dur:.16,gain:.045,a:.001}),i.noiseBurst(n,t,{dur:.02,gain:.08,filter:{type:"highpass",f:5e3}})},shieldBreak(i,e){const t=i.now,n=i.voice({pan:e,dur:.8,send:.3});i.noiseBurst(n,t,{dur:.35,gain:.2,filter:{type:"highpass",f:3e3}}),[2637,2093,1568].forEach((s,r)=>i.bell(n,t+r*.045,s,{dur:.4,gain:.045}))},deathSmall(i,e){const t=i.now,n=i.voice({pan:e,dur:.2,send:.05});i.tone(n,t,{f:520,f2:1400,dur:.08,gain:.11}),i.noiseBurst(n,t,{dur:.05,gain:.06,filter:{type:"bandpass",f:2200,q:2}})},deathMedium(i,e){const t=i.now,n=i.voice({pan:e,dur:.35,send:.08});i.noiseBurst(n,t,{dur:.2,gain:.2,filter:{type:"bandpass",f:1300,f2:380,q:1.4}}),i.tone(n,t,{type:"square",f:300,f2:80,dur:.16,gain:.045,filter:{type:"lowpass",f:1500}})},deathHeavy(i,e){const t=i.now,n=i.voice({pan:e,dur:.5,send:.12});i.tone(n,t,{f:95,f2:38,dur:.38,gain:.38}),i.noiseBurst(n,t,{dur:.3,gain:.22,filter:{type:"lowpass",f:420}}),i.noiseBurst(n,t+.02,{dur:.12,gain:.08,filter:{type:"bandpass",f:900,q:1}})},deathFlying(i,e){const t=i.now,n=i.voice({pan:e,dur:.6,send:.15});i.noiseBurst(n,t,{dur:.45,gain:.14,a:.02,filter:{type:"bandpass",f:1600,f2:280,q:1.6}}),i.tone(n,t,{f:760,f2:190,dur:.32,gain:.045})},deathBoss(i,e){const t=i.now,n=i.voice({pan:e,dur:1.8,send:.45,alert:!0});i.tone(n,t,{f:62,f2:28,dur:1.3,gain:.5}),i.noiseBurst(n,t,{dur:1.1,gain:.34,filter:{type:"lowpass",f:900,f2:90}}),i.noiseBurst(n,t,{dur:.2,gain:.18,filter:{type:"bandpass",f:1800,q:.8}}),[50,57,62].forEach(s=>i.tone(n,t+.05,{type:"sawtooth",f:zn(s),dur:1.4,gain:.025,a:.02,filter:{type:"lowpass",f:1400,f2:300}}))},coin(i,e,t){const n=i.now,s=i.voice({pan:e,dur:.3,send:.15}),r=Math.pow(2,(t.step??0)*2/12);i.tone(s,n,{f:1975*r,dur:.09,gain:.05,a:.001}),i.tone(s,n+.05,{f:2637*r,dur:.16,gain:.05,a:.001})},split(i,e){const t=i.now,n=i.voice({pan:e,dur:.3,send:.08});i.tone(n,t,{f:180,f2:540,dur:.16,gain:.12,filter:{type:"lowpass",f:1200}}),i.tone(n,t+.07,{f:260,f2:620,dur:.12,gain:.07,filter:{type:"lowpass",f:1400}})},dash(i,e){const t=i.now,n=i.voice({pan:e,dur:.3,send:.05});i.noiseBurst(n,t,{dur:.2,gain:.1,a:.03,filter:{type:"bandpass",f:600,f2:2600,q:2}})},spawn(i,e){const t=i.now,n=i.voice({pan:e,dur:.8,send:.3});i.tone(n,t,{f:150,f2:230,dur:.55,gain:.05,a:.2}),i.noiseBurst(n,t,{dur:.5,gain:.04,a:.2,filter:{type:"bandpass",f:500,q:2}})},spawnBoss(i,e){const t=i.now,n=i.voice({pan:e,dur:1.4,send:.4});[110,164.8].forEach(s=>i.tone(n,t,{type:"sawtooth",f:s,dur:1.1,gain:.07,a:.15,filter:{type:"lowpass",f:450,f2:900,q:2}}))},stun(i,e){const t=i.now,n=i.voice({pan:e,dur:.4,send:.2});for(let s=0;s<6;s++)i.noiseBurst(n,t+s*.03+Math.random()*.02,{dur:.025,gain:.07,filter:{type:"highpass",f:3800}});i.tone(n,t,{f:3136,dur:.25,gain:.02})},shatter(i,e){const t=i.now,n=i.voice({pan:e,dur:.8,send:.35});i.noiseBurst(n,t,{dur:.3,gain:.2,filter:{type:"highpass",f:2500}}),[3136,2349,1760,2637].forEach((s,r)=>i.bell(n,t+r*.03,s,{dur:.45,gain:.035}))},zoneLava(i,e){const t=i.now,n=i.voice({pan:e,dur:.9,send:.15});i.noiseBurst(n,t,{dur:.6,gain:.1,a:.05,filter:{type:"lowpass",f:380}}),[0,.14,.3,.41].forEach(s=>i.tone(n,t+s,{f:120+Math.random()*60,f2:300+Math.random()*120,dur:.07,gain:.08,filter:{type:"lowpass",f:900}}))},zoneIce(i,e){const t=i.now,n=i.voice({pan:e,dur:1,send:.4});[1319,1568,1976,2637].forEach((s,r)=>i.bell(n,t+r*.06,s,{dur:.6,gain:.03})),i.noiseBurst(n,t,{dur:.5,gain:.04,a:.1,filter:{type:"highpass",f:5e3}})},spread(i,e){const t=i.now,n=i.voice({pan:e,dur:.25,send:.05});i.noiseBurst(n,t,{dur:.12,gain:.1,filter:{type:"bandpass",f:1500,f2:700,q:1}})},discharge(i,e){const t=i.now,n=i.voice({pan:e,dur:.15,send:.05});Oh(i,n,t,2e3,.06,.04,1200,6,900,2e3)},meteorWarning(i,e){const t=i.now,n=i.voice({pan:e,dur:.9,send:.2});i.tone(n,t,{f:600,f2:1900,dur:.75,gain:.045,a:.5}),i.noiseBurst(n,t,{dur:.7,gain:.03,a:.5,filter:{type:"highpass",f:4e3}})},meteorImpact(i,e){const t=i.now,n=i.voice({pan:e,dur:1,send:.35});i.tone(n,t,{f:85,f2:34,dur:.6,gain:.45}),i.noiseBurst(n,t,{dur:.6,gain:.36,filter:{type:"lowpass",f:1300,f2:180}})},tempest(i,e){const t=i.now,n=i.voice({pan:e,dur:2,send:.5});i.noiseBurst(n,t,{dur:.09,gain:.38,a:.001,filter:{type:"highpass",f:1400}}),i.noiseBurst(n,t+.04,{dur:1.7,gain:.28,a:.05,filter:{type:"lowpass",f:320,f2:120}})},nova(i){const e=i.now,t=i.voice({dur:1.8,send:.5});i.tone(t,e,{f:72,f2:34,dur:.9,gain:.45}),i.tone(t,e,{f:1100,f2:160,dur:1.1,gain:.1}),i.noiseBurst(t,e,{dur:1.2,gain:.05,a:.02,filter:{type:"highpass",f:6e3}}),[659,988,1319].forEach(n=>i.tone(t,e+.05,{f:n,dur:1.4,gain:.028,a:.05}))},build(i){const e=i.now,t=i.voice({dur:1.4,send:.35});[392,494,587,784].forEach((n,s)=>i.bell(t,e+s*.07,n,{dur:.9,gain:.07}))},points(i){const e=i.now,t=i.voice({dur:.5,send:.4});for(let n=0;n<4;n++)i.tone(t,e+n*.035,{f:2e3+Math.random()*2e3,dur:.12,gain:.025,a:.001})},skill(i){const e=i.now,t=i.voice({dur:1,send:.4});i.bell(t,e,659,{dur:.8,gain:.07}),i.bell(t,e+.09,988,{dur:.8,gain:.06})},unlockCue(i){const e=i.now,t=i.voice({dur:1,send:.45});i.tone(t,e,{f:660,f2:990,dur:.3,gain:.1}),i.bell(t,e+.08,990,{dur:.8,gain:.07})},capstone(i){const e=i.now,t=i.voice({dur:2,send:.5});[330,440,554,660,880].forEach((n,s)=>i.bell(t,e+s*.09,n,{dur:1.2,gain:.08}))},respec(i){const e=i.now,t=i.voice({dur:.6,send:.3});i.noiseBurst(t,e,{dur:.42,gain:.1,a:.3,filter:{type:"bandpass",f:2400,f2:400,q:1.5}})},waveStart(i){const e=i.now,t=i.voice({dur:2.2,send:.35});i.drum(t,e,.5),i.drum(t,e+.28,.42),[146.8,220].forEach(n=>i.tone(t,e+.35,{type:"sawtooth",f:n,dur:1.3,gain:.05,a:.4,filter:{type:"lowpass",f:600,f2:1500,q:1.5}}))},waveClear(i){const e=i.now,t=i.voice({dur:2.2,send:.5});[74,81,76,86].forEach((n,s)=>i.bell(t,e+s*.11,zn(n),{dur:1.6,gain:.055}))},victory(i){const e=i.now,t=i.voice({dur:3,send:.45,alert:!0});[62,66,69,74].forEach((n,s)=>i.bell(t,e+s*.16,zn(n+12),{dur:1.2,gain:.07})),[62,66,69].forEach(n=>i.tone(t,e+.64,{type:"sawtooth",f:zn(n),dur:2,gain:.035,a:.1,filter:{type:"lowpass",f:1800}}))},defeat(i){const e=i.now,t=i.voice({dur:3.2,send:.5,alert:!0});[69,65,62,57].forEach((n,s)=>i.tone(t,e+s*.35,{type:"sawtooth",f:zn(n),dur:1.6,gain:.045,a:.05,filter:{type:"lowpass",f:1100,f2:300}})),i.tone(t,e+1.4,{f:73.4,f2:55,dur:1.6,gain:.3})},uiClick(i){const e=i.now,t=i.voice({dur:.08,send:0});i.tone(t,e,{f:1250,dur:.03,gain:.05,a:.001}),i.noiseBurst(t,e,{dur:.012,gain:.03,filter:{type:"highpass",f:4e3}})},uiDisabled(i){const e=i.now,t=i.voice({dur:.1,send:0});i.tone(t,e,{f:190,f2:150,dur:.06,gain:.07,filter:{type:"lowpass",f:700}})},alertBoss(i,e){const t=i.now,n=i.voice({pan:e,dur:2.2,send:.45,alert:!0});[0,.6].forEach(s=>[73.4,110].forEach(r=>i.tone(n,t+s,{type:"sawtooth",f:r,dur:.55,gain:.1,a:.06,filter:{type:"lowpass",f:520,q:3}}))),[1175,1568,2349].forEach((s,r)=>i.bell(n,t+1.15+r*.08,s,{dur:.7,gain:.04}))},alertHpLow(i){const e=i.now,t=i.voice({dur:1.2,send:.2,alert:!0});[0,.2].forEach(n=>i.tone(t,e+n,{f:62,f2:44,dur:.18,gain:.55})),[.45,.62].forEach(n=>i.tone(t,e+n,{type:"square",f:880,dur:.1,gain:.035,filter:{type:"lowpass",f:2200}}))},alertLeak(i,e){const t=i.now,n=i.voice({pan:e,dur:.9,send:.25,alert:!0});i.tone(n,t,{f:64,f2:30,dur:.5,gain:.55}),i.noiseBurst(n,t,{dur:.16,gain:.22,filter:{type:"bandpass",f:2e3,q:1}}),i.noiseBurst(n,t+.03,{dur:.35,gain:.12,filter:{type:"lowpass",f:500}})},alertNewAbility(i){const e=i.now,t=i.voice({dur:2.2,send:.5,alert:!0});i.drum(t,e,.45),i.drum(t,e+.26,.38),[587.3,622.3,880].forEach((n,s)=>{const r=i.tone(t,e+.55+s*.22,{type:"triangle",f:n,dur:.7,gain:.07,a:.02}),a=t.add(i.ctx.createOscillator()),o=t.add(i.gain(6));a.frequency.value=6,a.connect(o),o.connect(r.frequency),a.start(e),a.stop(e+2)})},alertNovaReady(i){const e=i.now,t=i.voice({dur:1.2,send:.45,alert:!0});i.bell(t,e,1319,{dur:.9,gain:.08,bright:1.2}),i.bell(t,e+.12,1760,{dur:1,gain:.08,bright:1.2})}},Xb=72,Sn=60/Xb,Bh=[[50,53,57,60,64],[46,50,53,57,62],[53,57,60,67,69],[48,50,55,62,64]],Ro=[74,77,79,81,84,86],zh=[38,38,41,38,33,33,36,33];function qb(i){return i.phase==="victory"?"victory":i.phase==="defeat"?"defeat":i.phase!=="wave"?"calm":i.enemies.some(e=>e.boss&&e.hp>0)?"boss":"wave"}function Yb(i,e,t){const n={},s=()=>Ro[Math.min(Ro.length-1,Math.floor(t()*Ro.length))];return i%8===0?(n.chord=Bh[i/8%Bh.length],n.harp=s(),n.harpOffbeat=!0):t()<.3&&(n.harpOffbeat=t()>=.5,n.harp=s()),(e==="wave"||e==="boss")&&(i%4===0?n.drum=.2:i%4===2&&(n.drum=.11),n.shaker=!0),e==="boss"&&(n.bass=[0,1].map(r=>zh[(i*2+r)%zh.length])),n}class Kb{constructor(e){E(this,"on",!1);E(this,"layer","calm");E(this,"beat",0);E(this,"next",0);E(this,"timer",0);E(this,"bus");E(this,"layers");this.engine=e}get ctx(){return this.engine.ctx}start(){if(this.on)return;this.on=!0;const e=this.ctx.currentTime;this.bus=this.engine.gain(0,this.engine.musicScore),this.bus.gain.setValueAtTime(0,e),this.bus.gain.linearRampToValueAtTime(1,e+3),this.layers={pad:this.engine.gain(1,this.bus),wave:this.engine.gain(0,this.bus),boss:this.engine.gain(0,this.bus)},this.applyLayer(!0),this.beat=0,this.next=e+.1,this.timer=window.setInterval(()=>this.schedule(),100),this.schedule()}stop(e=1.5){if(!this.on||!this.bus)return;this.on=!1,clearInterval(this.timer);const t=this.bus,n=this.ctx.currentTime;t.gain.cancelScheduledValues(n),t.gain.setValueAtTime(t.gain.value,n),t.gain.linearRampToValueAtTime(0,n+e),window.setTimeout(()=>t.disconnect(),(e+.3)*1e3),this.bus=void 0,this.layers=void 0}get playing(){return this.on}setMixGain(e){this.engine.musicScore.gain.setTargetAtTime(e,this.ctx.currentTime,.3)}setLayer(e){if(e===this.layer)return;const t=this.layer;if(this.layer=e,e==="defeat"){this.stop();return}if(t==="defeat"&&!this.on){this.start();return}e==="victory"&&this.victoryChord(),this.applyLayer(!1)}applyLayer(e){if(!this.layers)return;const t=this.ctx.currentTime,n=e?.01:2,s={wave:this.layer==="wave"||this.layer==="boss"?1:0,boss:this.layer==="boss"?1:0};for(const r of["wave","boss"]){const a=this.layers[r].gain;a.cancelScheduledValues(t),a.setValueAtTime(a.value,t),a.linearRampToValueAtTime(s[r],t+n)}}schedule(){const e=this.ctx.currentTime;if(this.next<e-Sn){const t=Math.ceil((e-this.next)/Sn);this.beat+=t,this.next+=t*Sn}for(;this.next<e+.25;)this.playBeat(this.beat,this.next),this.next+=Sn,this.beat++}voice(e,t,n){return this.engine.voice({bus:e,dur:t,send:n,music:!0})}playBeat(e,t){if(!this.layers)return;const n=this.engine,s=Yb(e,this.layer,Math.random);if(s.chord){const r=8*Sn+2.5,a=this.voice(this.layers.pad,r+.5,.5),o=a.add(this.ctx.createBiquadFilter());o.type="lowpass",o.Q.value=.6,o.frequency.setValueAtTime(this.layer==="calm"?750:1100,t),o.connect(a.input);for(const l of s.chord)for(const c of[-6,6]){const h=a.add(this.ctx.createOscillator()),d=a.add(this.ctx.createGain());h.type="sawtooth",h.frequency.value=zn(l),h.detune.value=c,d.gain.setValueAtTime(1e-4,t),d.gain.linearRampToValueAtTime(.014,t+2.5),d.gain.setValueAtTime(.014,t+r-3),d.gain.linearRampToValueAtTime(1e-4,t+r),h.connect(d),d.connect(o),h.start(t),h.stop(t+r+.05)}}if(s.harp!==void 0){const r=this.voice(this.layers.pad,2,.6);n.pluck(r,t+(s.harpOffbeat?Sn/2:0),zn(s.harp),{gain:.045})}if(s.drum||s.shaker){const r=this.voice(this.layers.wave,1,.15);s.drum&&n.drum(r,t,s.drum),s.shaker&&n.noiseBurst(r,t+Sn/2,{dur:.05,gain:.018,filter:{type:"highpass",f:6500}})}if(s.bass){const r=this.voice(this.layers.boss,Sn+.3,.05);s.bass.forEach((a,o)=>n.tone(r,t+o*Sn/2,{type:"sawtooth",f:zn(a),dur:Sn/2-.03,gain:.08,a:.01,filter:{type:"lowpass",f:300,q:4}}))}}victoryChord(){if(!this.layers)return;const e=this.ctx.currentTime+.05,t=this.voice(this.layers.pad,4,.6);[62,66,69,74].forEach(n=>this.engine.tone(t,e,{type:"triangle",f:zn(n),dur:3.5,gain:.03,a:.4}))}}const xd="aetherkeep.audio.v1",js=Object.freeze({enabled:!0,sfx:80,music:50}),Hh=(i,e)=>typeof i=="number"&&Number.isFinite(i)?Math.min(100,Math.max(0,Math.round(i/10)*10)):e;function jb(i){let e;try{e=i===null?null:JSON.parse(i)}catch{e=null}if(!e||typeof e!="object"||Array.isArray(e))return{...js};const t=e;return{enabled:typeof t.enabled=="boolean"?t.enabled:js.enabled,sfx:Hh(t.sfx,js.sfx),music:Hh(t.music,js.music)}}const bd=()=>{try{return globalThis.localStorage}catch{return}};function Zb(i=bd()){try{return jb((i==null?void 0:i.getItem(xd))??null)}catch{return{...js}}}function Gh(i,e=bd()){try{e==null||e.setItem(xd,JSON.stringify(i))}catch{}}const wl="golden-island",Jb={"golden-island":{calm:{wind:.9,waterfall:1,air:1.15,music:.8,oneShot:1,intervalScale:1},wave:{wind:.65,waterfall:.65,air:.8,music:.9,oneShot:.45,intervalScale:1.8},boss:{wind:.5,waterfall:.5,air:.7,music:1,oneShot:.3,intervalScale:2.5},victory:{wind:.8,waterfall:1,air:1.2,music:.9,oneShot:.7,intervalScale:1.3},defeat:{wind:.25,waterfall:.2,air:.3,music:0,oneShot:0,intervalScale:3}},"moonlit-island":{calm:{wind:1,waterfall:1,air:1,music:.8,oneShot:1,intervalScale:1},wave:{wind:.7,waterfall:.65,air:.7,music:.9,oneShot:.45,intervalScale:1.8},boss:{wind:.55,waterfall:.5,air:.6,music:1,oneShot:.3,intervalScale:2.5},victory:{wind:.85,waterfall:1,air:1,music:.9,oneShot:.7,intervalScale:1.3},defeat:{wind:.25,waterfall:.2,air:.3,music:0,oneShot:0,intervalScale:3}}};function Is(i){return i==="moonlit-island"?i:wl}const yd=[{kind:"gust",interval:[11,23],gain:[.045,.075],pan:[-.55,.55],gentle:.4,variants:[{id:"low-swell",duration:4.8,frequency:240,endFrequency:500,pulses:1},{id:"high-drift",duration:5.6,frequency:620,endFrequency:340,pulses:1},{id:"long-breath",duration:6.4,frequency:380,endFrequency:760,pulses:1}]},{kind:"nightCall",scenes:["moonlit-island"],interval:[15,30],gain:[.014,.026],pan:[-.6,.6],gentle:1,variants:[{id:"falling-pair",duration:2.3,frequency:880,endFrequency:660,pulses:2},{id:"single-distant",duration:2,frequency:740,endFrequency:830,pulses:1},{id:"three-notes",duration:3,frequency:1040,endFrequency:780,pulses:3}]},{kind:"stoneFall",interval:[20,38],gain:[.018,.033],pan:[-.6,.6],gentle:.8,variants:[{id:"loose-grit",duration:1.4,frequency:1700,endFrequency:500,pulses:3},{id:"pebble-pair",duration:1.8,frequency:950,endFrequency:300,pulses:2},{id:"earth-trickle",duration:2.1,frequency:650,endFrequency:180,pulses:4}]},{kind:"towerHum",interval:[18,34],gain:[.012,.022],pan:[-.35,.35],gentle:1,variants:[{id:"glass-fifth",duration:3.5,frequency:440,endFrequency:660,pulses:2},{id:"quiet-scan",duration:4.2,frequency:587.33,endFrequency:880,pulses:2},{id:"clear-octave",duration:3.8,frequency:523.25,endFrequency:1046.5,pulses:2}]},{kind:"riftEcho",interval:[95,160],gain:[.018,.03],pan:[-.4,.4],gentle:.25,variants:[{id:"hollow-exhale",duration:6,frequency:73.4,endFrequency:55,pulses:1},{id:"deep-resonance",duration:7,frequency:55,endFrequency:46.25,pulses:1},{id:"organic-answer",duration:6.5,frequency:82.4,endFrequency:61.7,pulses:2}]},{kind:"cricket",scenes:["moonlit-island"],interval:[5,11],gain:[.006,.012],pan:[-.6,.6],gentle:1,variants:[{id:"two-chirps",duration:.9,frequency:4300,endFrequency:4420,pulses:2},{id:"three-chirps",duration:1,frequency:4460,endFrequency:4320,pulses:3},{id:"four-chirps",duration:1.1,frequency:4180,endFrequency:4380,pulses:4}]},{kind:"dayBird",scenes:["golden-island"],interval:[13,25],gain:[.008,.014],pan:[-.55,.55],gentle:1,variants:[{id:"soft-rise",duration:1.8,frequency:1020,endFrequency:1380,pulses:1},{id:"distant-pair",duration:2.3,frequency:1260,endFrequency:980,pulses:2},{id:"warm-answer",duration:2.6,frequency:1120,endFrequency:1440,pulses:3}]},{kind:"dayInsect",scenes:["golden-island"],interval:[9,18],gain:[.004,.008],pan:[-.5,.5],gentle:1,variants:[{id:"low-buzz",duration:3.2,frequency:1200,endFrequency:1e3,pulses:1},{id:"distant-cicada",duration:4.2,frequency:1550,endFrequency:1150,pulses:2},{id:"long-haze",duration:5.2,frequency:1750,endFrequency:1250,pulses:3}]}];function ca(i){return{...Jb[Is(i.scene)][i.state],master:i.enabled?Math.max(0,Math.min(100,i.music))/100*(i.dimmed?.5:1):0}}const Qb=2;class ey{constructor({clock:e=()=>performance.now()/1e3,random:t=Math.random,definitions:n=yd,maxVoices:s=Qb}={}){E(this,"clock");E(this,"random");E(this,"maxVoices");E(this,"allSlots");E(this,"slots");E(this,"ends",[]);E(this,"input");E(this,"allowed",!1);E(this,"mix");E(this,"played",0);E(this,"peak",0);E(this,"dropped",0);this.clock=e,this.random=t,this.maxVoices=s,this.allSlots=n.map(r=>({definition:r,due:1/0,last:-1,counts:r.variants.map(()=>0)})),this.slots=this.slotsFor(wl)}slotsFor(e){return this.allSlots.filter(t=>!t.definition.scenes||t.definition.scenes.includes(e))}update(e){var l,c;const t=Is(e.scene),n=ca(e),s=n.master>0&&n.oneShot>0&&!e.hidden&&!e.dimmed,r=t!==((l=this.input)==null?void 0:l.scene),a=s!==this.allowed||r,o=((c=this.mix)==null?void 0:c.intervalScale)??n.intervalScale;if(this.input={...e,scene:t},this.mix=n,this.allowed=s,r&&(this.slots=this.slotsFor(t)),(!s||r)&&(this.ends.length=0),a)this.resetDeadlines(this.clock());else if(s&&n.intervalScale!==o){const h=this.clock();for(const d of this.slots)d.due>h&&(d.due=h+(d.due-h)*n.intervalScale/o)}}between([e,t]){return e+Math.max(0,Math.min(.999999999999,this.random()))*(t-e)}resetDeadlines(e){for(const t of this.slots)t.due=this.allowed?e+this.between(t.definition.interval)*this.mix.intervalScale:1/0}tick(){const e=[];if(!this.allowed||!this.mix||!this.input)return e;const t=this.clock();for(let n=this.ends.length-1;n>=0;n--)this.ends[n]<=t&&this.ends.splice(n,1);for(const n of this.slots){if(n.due>t)continue;const s=n.definition,r=t-n.due>1;if(n.due=t+this.between(s.interval)*this.mix.intervalScale,r)continue;if(this.ends.length>=this.maxVoices){this.dropped++;continue}const a=s.variants.length-(n.last<0?0:1);let o=Math.floor(this.between([0,a]));n.last>=0&&o>=n.last&&o++;const l=s.variants[o].duration;e.push({kind:s.kind,variant:o,duration:l,pan:this.between(s.pan),gain:this.between(s.gain)*this.mix.oneShot*(this.input.reducedMotion?s.gentle:1),gentle:this.input.reducedMotion}),this.ends.push(t+l),n.last=o,n.counts[o]++,this.played++,this.peak=Math.max(this.peak,this.ends.length)}return e}stats(){var s;const e=this.clock(),t={},n={};for(const r of this.slots)t[r.definition.kind]=r.due,n[r.definition.kind]=[...r.counts];return{scene:((s=this.input)==null?void 0:s.scene)??wl,next:t,counts:n,played:this.played,active:this.ends.filter(r=>r>e).length,peak:this.peak,dropped:this.dropped}}}const Vh=8;class ty{constructor(e){E(this,"scheduler",new ey);E(this,"nodes",[]);E(this,"loop");E(this,"wind");E(this,"waterfall");E(this,"air");E(this,"live",[]);E(this,"input");E(this,"timer");this.engine=e;const t=e,n=t.ctx;this.loop=this.makeLoop(),this.wind=this.add(t.gain(0,t.music)),this.waterfall=this.add(t.gain(0,t.music)),this.air=this.add(t.gain(0,t.music));const s=this.band(this.wind,220,.5,.065,-.15,0);this.modulate(s.filter.frequency,.029,85),this.modulate(s.gain.gain,.043,.018);const r=this.band(this.wind,900,.65,.018,.2,2.3);this.modulate(r.filter.frequency,.019,320),this.modulate(r.pan.pan,.017,.3);const a=this.band(this.waterfall,430,.45,.055,-.1,4.7),o=this.add(n.createBiquadFilter());o.type="lowpass",o.frequency.value=1250,a.filter.disconnect(),a.filter.connect(o),o.connect(a.gain),this.modulate(a.pan.pan,.013,.35);const l=this.band(this.air,5800,.55,.0025,0,6.1);this.modulate(l.gain.gain,.021,.001),this.timer=window.setInterval(()=>this.tick(),250)}add(e){return this.nodes.push(e),e}makeLoop(){const e=this.engine.ctx,t=Math.round(e.sampleRate*Vh),n=e.createBuffer(2,t,e.sampleRate),s=Math.round(e.sampleRate*.5);for(let r=0;r<2;r++){const a=new Float32Array(t+s),o=n.getChannelData(r);for(let l=0;l<a.length;l++)a[l]=Math.random()*2-1;for(let l=0;l<t;l++){const c=l/s*Math.PI/2;o[l]=l<s?a[t+l]*Math.cos(c)+a[l]*Math.sin(c):a[l]}}return n}band(e,t,n,s,r,a){const o=this.engine.ctx,l=this.add(o.createBufferSource());l.buffer=this.loop,l.loop=!0;const c=this.add(o.createBiquadFilter());c.type="bandpass",c.frequency.value=t,c.Q.value=n;const h=this.add(this.engine.gain(s)),d=this.add(o.createStereoPanner());return d.pan.value=r,l.connect(c),c.connect(h),h.connect(d),d.connect(e),l.start(0,a),{filter:c,gain:h,pan:d}}modulate(e,t,n){const s=this.add(this.engine.ctx.createOscillator()),r=this.add(this.engine.gain(n));s.frequency.value=t,s.connect(r),r.connect(e),s.start()}update(e){const t=!!this.input&&Is(e.scene)!==Is(this.input.scene);this.input=e,this.scheduler.update(e);const n=ca(e),s=this.engine.ctx.currentTime;this.wind.gain.setTargetAtTime(n.wind,s,.8),this.waterfall.gain.setTargetAtTime(n.waterfall,s,.8),this.air.gain.setTargetAtTime(n.air,s,.8),n.master===0||n.oneShot===0||e.hidden||e.dimmed?this.stopOneShots():t&&this.fadeOneShots(s)}fadeOneShots(e){for(const t of this.live)t.voice.input.gain.cancelAndHoldAtTime(e),t.voice.input.gain.linearRampToValueAtTime(0,e+.2),t.end=Math.min(t.end,e+.2)}stopOneShots(){for(const{voice:e}of this.live)this.engine.stopVoice(e);this.live.length=0}tick(){if(this.engine.ctx.state!=="running")return;const e=this.engine.ctx.currentTime;for(let t=this.live.length-1;t>=0;t--)this.live[t].end<=e&&(this.engine.stopVoice(this.live[t].voice),this.live.splice(t,1));for(const t of this.scheduler.tick())this.play(t)}noise(e,t,n,s,r,a,o){const l=this.engine,c=l.ctx,h=e.add(c.createBufferSource()),d=e.add(c.createGain());h.buffer=this.loop,h.loop=!0;const u=e.add(c.createBiquadFilter());u.type="bandpass",u.Q.value=.7,u.frequency.setValueAtTime(r,t),u.frequency.exponentialRampToValueAtTime(a,t+n),l.env(d.gain,t,o,s,n),h.connect(u),u.connect(d),d.connect(e.input),h.start(t),h.stop(t+n+.03)}play(e){const t=this.engine,n=yd.find(u=>u.kind===e.kind),s=n.variants[e.variant],r=t.now,a=e.duration-.4,o=t.voice({bus:t.music,pan:e.pan,dur:e.duration-.3,send:0,music:!0}),l=e.gain,c=s.frequency,h=s.endFrequency,d=s.pulses;if(e.kind==="gust")this.noise(o,r,a,l,c,h,e.gentle?1.6:1.1),this.noise(o,r,a,l*.25,c*2.4,h*1.5,1.5);else if(e.kind==="nightCall")for(let u=0;u<d;u++)t.tone(o,r+u*.48,{f:c*(1-u*.04),f2:h,dur:.65,gain:l,a:.16});else if(e.kind==="dayBird")for(let u=0;u<d;u++)t.tone(o,r+u*.42,{f:c*(1+u*.025),f2:h,dur:.24,gain:l/(1+u*.25),a:.065,filter:{type:"lowpass",f:1900}});else if(e.kind==="dayInsect")this.noise(o,r,a,l*.55,c,h,.8),t.tone(o,r,{f:c*.18,f2:h*.18,dur:a,gain:l*.18,a:.7}),d>1&&this.noise(o,r+.35,a-.35,l*.2,c*1.3,h,1);else if(e.kind==="stoneFall")for(let u=0;u<d;u++)this.noise(o,r+u*.16,.25,l/(1+u*.25),c,h,.025);else if(e.kind==="towerHum")t.tone(o,r,{f:c,dur:a,gain:l,a:.65}),t.tone(o,r+.3,{f:h,dur:a-.3,gain:l*.45,a:.5}),t.tone(o,r+.6,{f:c*2,dur:a-.6,gain:l*.12,a:.7});else if(e.kind==="riftEcho")t.tone(o,r,{f:c,f2:h,dur:a,gain:l,a:e.gentle?2.2:1.6}),t.tone(o,r+.15,{f:c*1.47,f2:h*1.5,dur:a-.15,gain:l*.35,a:1.8}),this.noise(o,r,a,l*.45,170,95,1.8),d>1&&t.tone(o,r+1.5,{f:c*.75,f2:h*.8,dur:a-1.5,gain:l*.4,a:1.5});else for(let u=0;u<d;u++)t.tone(o,r+u*.06,{f:c,f2:h,dur:.035,gain:l,a:.004});this.live.push({voice:o,end:t.ctx.currentTime+e.duration})}stats(){var n,s,r,a;const e=this.input?ca(this.input):void 0,t=!!e&&e.master>0&&!((n=this.input)!=null&&n.hidden);return{preset:((s=this.input)==null?void 0:s.state)??"calm",mix:e,layers:{ambience:t,music:t&&e.music>0,oneShots:t&&!((r=this.input)!=null&&r.dimmed)&&e.oneShot>0},loop:{seconds:Vh,channels:2,bytes:this.loop.length*2*4,nodes:this.nodes.length},reducedMotion:((a=this.input)==null?void 0:a.reducedMotion)??!1,...this.scheduler.stats(),active:this.live.filter(o=>o.end>this.engine.ctx.currentTime).length}}dispose(){var e;clearInterval(this.timer),this.stopOneShots();for(const t of this.nodes){try{(e=t.stop)==null||e.call(t)}catch{}t.disconnect()}}}class ny{constructor(){E(this,"ctx");E(this,"engine");E(this,"music");E(this,"soundscape");E(this,"reduced",matchMedia("(prefers-reduced-motion: reduce)"));E(this,"limiter",new Hb);E(this,"current",Zb());E(this,"layer","calm");E(this,"scene",Is(new URLSearchParams(window.location.search).get("soundscape")));E(this,"dimmed",!1);E(this,"counts",{played:0,refused:0});document.addEventListener("visibilitychange",()=>this.syncRunning()),this.reduced.addEventListener("change",()=>this.applyVolumes()),window.addEventListener("pagehide",e=>{var t;e.persisted||(t=this.soundscape)==null||t.dispose()})}get settings(){return{...this.current}}unlock(){if(this.current.enabled){if(!this.ctx){try{this.ctx=new AudioContext}catch{return}this.engine=new Wb(this.ctx),this.music=new Kb(this.engine),this.soundscape=new ty(this.engine),this.ctx.addEventListener("statechange",()=>this.applyVolumes()),this.applyVolumes(!0),this.music.start(),this.music.setLayer(this.layer)}this.syncRunning()}}toggle(){return this.current.enabled=!this.current.enabled,Gh(this.current),this.current.enabled?this.unlock():this.syncRunning(),this.current.enabled}setVolume(e,t){this.current[e]=Math.min(100,Math.max(0,Math.round(t/10)*10)),Gh(this.current),this.applyVolumes()}setScene(e){const t=Is(e);t!==this.scene&&(this.scene=t,this.applyVolumes())}setDimmed(e){e!==this.dimmed&&(this.dimmed=e,this.applyVolumes())}follow(e){var n;const t=qb(e);t!==this.layer&&(this.layer=t,(n=this.music)==null||n.setLayer(t),this.applyVolumes())}handle(e,t,n,s){if(this.running)for(const r of Ob(e,t,n))this.play(r,r.at?s(r.at):0)}ui(e){this.running&&this.play({name:e?"uiDisabled":"uiClick"},0)}unlockCue(e){this.running&&this.play({name:e?"capstone":"unlockCue"},0)}preview(){this.running&&this.play({name:"coin"},0)}stats(){var e,t,n,s,r;return{state:((e=this.ctx)==null?void 0:e.state)??"none",enabled:this.current.enabled,layer:this.layer,music:((t=this.music)==null?void 0:t.playing)??!1,voices:((n=this.engine)==null?void 0:n.liveEffectVoices())??0,peak:((s=this.engine)==null?void 0:s.peak)??0,...this.counts,soundscape:((r=this.soundscape)==null?void 0:r.stats())??null}}get running(){var e;return!!this.engine&&this.current.enabled&&((e=this.ctx)==null?void 0:e.state)!=="closed"}play(e,t){if(!this.engine||!this.limiter.allow(e.name,this.engine.ctx.currentTime)){this.counts.refused++;return}this.counts.played++,this.engine.play(e,Math.max(-.6,Math.min(.6,t*.6)))}applyVolumes(e=!1){var a,o;if(!this.engine)return;const t=this.engine.ctx.currentTime,n=e?.001:.03;this.engine.sfx.gain.setTargetAtTime(this.current.sfx/100,t,n);const s=this.soundscapeInput(),r=ca(s);this.engine.music.gain.setTargetAtTime(r.master,t,n),(a=this.music)==null||a.setMixGain(r.music),(o=this.soundscape)==null||o.update(s)}soundscapeInput(){var e;return{scene:this.scene,state:this.layer,enabled:this.current.enabled,music:this.current.music,dimmed:this.dimmed,hidden:document.hidden||((e=this.ctx)==null?void 0:e.state)!=="running",reducedMotion:this.reduced.matches}}syncRunning(){this.ctx&&(this.applyVolumes(),document.hidden||!this.current.enabled?this.ctx.suspend():this.ctx.resume())}}function iy(i,e){if(e<=0)return 0;const t=e*Sl;return i>t?0:Math.min(1,Math.max(0,1-Math.max(0,i)/t))}const ha=class ha{constructor(){E(this,"sum",0);E(this,"since",NaN)}add(e,t){e<=0||(Number.isNaN(this.since)&&(this.since=t),this.sum+=e)}take(e){if(Number.isNaN(this.since)||e-this.since<ha.WINDOW-1e-9)return null;const t=this.sum;return this.sum=0,this.since=NaN,t}};E(ha,"WINDOW",.5);let El=ha;const Wh=600;class sy{constructor(e,t,n){E(this,"free",[]);E(this,"all",[]);E(this,"waiting",[]);this.layer=e,this.target=t,this.onArrive=n}setPool(e){for(;this.all.length<e;){const t=document.createElement("img");t.className="fly-coin",t.src="ui/icons/coin.webp",t.alt="",t.width=22,t.height=22,t.decoding="async",t.hidden=!0,this.layer.append(t),this.all.push(t),this.free.push(t)}for(;this.all.length>e&&this.free.length;){const t=this.free.pop();this.all.splice(this.all.indexOf(t),1),t.remove()}}launch(e,t,n=!1,s=!1){const r=this.free.pop();if(!r)return this.waiting.length<24&&this.waiting.push({x:e,y:t,rich:n,still:s}),!1;if(r.classList.toggle("rich",n),s){r.hidden=!1;const u=r.animate([{transform:`translate(${e-11}px, ${t-11}px)`,opacity:0},{transform:`translate(${e-11}px, ${t-11}px)`,opacity:1,offset:.2},{transform:`translate(${e-11}px, ${t-11}px)`,opacity:0}],{duration:Wh});return u.onfinish=u.oncancel=()=>this.release(r,!1),!0}const a=this.target(),o=a.left+a.width*.22,l=a.top+a.height/2,c=e+(o-e)*.3,h=t+(l-t)*.7;r.hidden=!1;const d=r.animate([{transform:`translate(${e-11}px, ${t-11}px) scale(.5)`,opacity:0},{transform:`translate(${e-11}px, ${t-21}px) scale(1.1)`,opacity:1,offset:.15},{transform:`translate(${c-11}px, ${h-11}px) scale(1)`,opacity:1,offset:.55},{transform:`translate(${o-11}px, ${l-11}px) scale(.8)`,opacity:.9}],{duration:Wh,easing:"cubic-bezier(.45,0,.7,1)"});return d.onfinish=d.oncancel=()=>this.release(r,d.playState==="finished"),!0}release(e,t){e.hidden=!0,this.all.includes(e)?this.free.push(e):e.remove(),t&&this.onArrive();const n=this.waiting.shift();n&&this.launch(n.x,n.y,n.rich,n.still)}}const Ls=i=>String(i).padStart(2,"0"),ry=new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}),ay=i=>ry.format(Math.round(i)),or={split:{name:"แตกตัว",icon:"circles-four",rule:"ตายแล้วแตกเป็นตัวเล็ก 2 ตัว HP 20% ของตัวแม่ เร็วขึ้น 30%",counters:"ดาเมจพื้นที่, ไฟลาม, สายฟ้าลูกโซ่"},flying:{name:"บิน",icon:"bird",rule:"ไม่โดนหลุมลาวาและทุ่งน้ำแข็ง การชะลอได้ผลครึ่งเดียว Storm แรงขึ้น 25%",counters:"Storm, ลูกศรอีเธอร์"},regen:{name:"ซ่อมตัว",icon:"heartbeat",rule:"ไม่โดนดาเมจ 1.5 วินาที จะฟื้น HP 4% ต่อวินาที ขณะติดไฟฟื้นไม่ได้",counters:"ไฟเผา, ดาเมจต่อเนื่อง"},armor:{name:"เกราะ",icon:"shield",rule:"ลดดาเมจทุกนัด แต่เหลืออย่างน้อย 25% ของนัด ไฟเผาลดครึ่งหนึ่ง",counters:"นัดใหญ่, เปราะแตก"},dash:{name:"พุ่ง",icon:"wind",rule:"ทุก 4 วินาที เรืองแสงเตือน แล้วพุ่งเร็ว 2.5 เท่า นาน 0.8 วินาที ขณะโดนชะลอ หรือหยุดนิ่ง พุ่งไม่ได้",counters:"Frost"},shield:{name:"โล่",icon:"shield-chevron",rule:"โล่ 50% ของ HP รับดาเมจก่อน Storm ทำใส่โล่ 2 เท่า ไม่โดนดาเมจ 4 วินาที โล่ฟื้น",counters:"Storm, การรุมยิงเป้าเดียว"}},Md={core:{icon:"diamond",tagline:"เสริมพลังป้อมหลัก"},fire:{icon:"flame",tagline:"ระเบิดและเผาไหม้"},frost:{icon:"snowflake",tagline:"ชะลอและหยุดการเคลื่อนไหว"},storm:{icon:"lightning",tagline:"สายฟ้าชิ่งหลายเป้า"}},oy={"I-a":"ชั้น I","I-b":"ชั้น I","II-A":"ทางแยก II","II-B":"ทางแยก II","III-A":"ชั้น III","III-B":"ชั้น III",cap:"ขั้นสูงสุด"},Tl={owned:"มีแล้ว",available:"ปลดได้",locked:"ยังล็อก",blocked:"ปิดจากอีกทาง"},$t=i=>i.phase==="victory"||i.phase==="defeat";function ly(i){const e=i.total+i.extra,t=i.phase==="wave"||$t(i)?i.wave:i.wave+1,n=i.endless?"∞":Qu,s=`ระลอก ${Ls(t)} / ${n}`,r=i.built?i.phase==="wave"?"กำลังต่อสู้":i.phase==="ready"?i.wave===0?"เตรียมรับระลอกแรก":`ผ่านระลอก ${Ls(i.wave)} · เตรียมตัวให้พร้อม`:s:"วางป้อมกลางเกาะเพื่อเริ่ม",a=i.phase==="wave";return{status:r,waveLabel:s,fighting:a,left:a?i.remaining:0,label:a?`ระลอก ${t}/${n} · เหลือ ${i.remaining}/${e}`:s,progress:i.phase==="wave"&&e>0?1-i.remaining/e:0,remaining:i.phase==="wave"?`เหลือ ${i.remaining} / ${e} ตัว`:"",gold:i.gold,hp:i.hp,maxHp:i.maxHp,critical:i.hp<=i.maxHp*.3}}function Sd(i,e){var n;const t=i.skills.map(At).filter(s=>s.branch===e);return{owned:t,route:t.filter(s=>s.slot.startsWith("II")).map(s=>s.name),capstone:((n=t.find(s=>s.slot==="cap"))==null?void 0:n.name)??null}}function cy(i){const e=!i.built||i.paused||$t(i);return Ui.map(t=>{var f;const n=t==="core"?i.core:i.levels[t],{owned:s,route:r,capstone:a}=Sd(i,t),o=Zl(i,t),l=n>0,c=l?"เพิ่มพลัง":"ปลดด้วยพลังงาน",h=i.built?i.paused?"เกมหยุดอยู่ · เล่นต่อเพื่อใช้พลังงาน":i.gold<o?`${c} · ${o} พลังงาน · พลังงานยังไม่พอ`:`${c} ${ai[t]} เป็นระดับ ${n+1} · ${o} พลังงาน`:"สร้างป้อมก่อน",d=((f=s.find(g=>g.slot==="II-A"||g.slot==="II-B"))==null?void 0:f.id)??null,u=l?r.length?r.join(" → "):"ยังไม่เลือกทาง":"ใช้พลังงานปลดธาตุ";return{key:t,name:ai[t],icon:Md[t].icon,level:n,levelText:l?`ระดับ ${n}`:"ยังล็อก",path:u,capstone:a,fork:d,look:l?"owned":i.gold>=o?"unlock":"locked",upgrade:{label:c,cost:o,affordable:i.gold>=o,disabled:e||i.gold<o,title:h}}})}const hy={meteor:"skill-fire-meteor",rain:"skill-fire-rain",freeze:"skill-frost-freeze",spear:"skill-frost-spear",chain:"skill-storm-chain",thunder:"skill-storm-thunder"},uy={fire:"skill-fire-sunfall",frost:"skill-frost-iceage",storm:"skill-storm-tempest"};function $h(i,e){const t=oi(i).skill[e];if(!t||!i.levels[e])return null;const n=At(t.ultimate?Ms[t.id].cap:t.node);return{icon:t.ultimate?uy[e]:hy[t.id],name:n.name,left:Math.min(1,Math.max(0,i.runtime.skillTimers[e]/zu(t.id)))}}function dy(i,e){const t=e==="core"?i.core:i.levels[e],n=oi(i),s=c=>e==="core"?Xu(Jl({...i,core:c}).damage,n):e==="fire"?ga(c):e==="frost"?mr(c):qu(c,n),r=Zl(i,e),a=Sd(i,e),o=[a.route.length?`ทาง ${a.route.join(" → ")}`:"",a.capstone?`★ ${a.capstone}`:""].filter(Boolean).join(" · ")||null,l=i.built?$t(i)?"การต่อสู้จบแล้ว":i.paused?"เกมหยุดอยู่ · เล่นต่อเพื่อใช้พลังงาน":i.gold<r?`พลังงานยังไม่พอ · ขาดอีก ${r-i.gold} พลังงาน`:null:"สร้างป้อมก่อน";return{key:e,name:ai[e],level:t,next:t+1,stat:"ความเสียหาย",before:t>0?s(t):null,after:s(t+1),cost:r,label:t>0?"อัปเกรด":"ปลดธาตุ",disabled:l!==null,reason:l,route:o}}function fy(){return[["Space","หยุด / เล่นต่อ"],["N","เริ่มระลอกถัดไป"],["T","เปิด / ปิดผังทักษะ"],["1 / 2 / 3","เพิ่มพลังไฟ / น้ำแข็ง / สายฟ้า"],["Q","ปล่อย Nova"]]}function py(i){const e=!i.built||i.paused||$t(i),t=Math.ceil(i.cooldown),n=i.novaCharges>0,s=oi(i),r=i.novaCharges<s.novaCharges,a=e||i.gold<60||i.hp>=i.maxHp,o=$t(i)?"การต่อสู้จบแล้ว":i.built?i.paused?"เกมหยุดอยู่":i.hp>=i.maxHp?"พลังป้อมเต็มแล้ว":i.gold<60?"ต้องการ 60 พลังงาน":"ฟื้นพลังป้อม 45 หน่วย · 60 พลังงาน":"สร้างป้อมก่อน";return{tree:{points:i.skillPoints,badge:i.skillPoints>0?String(i.skillPoints):"",glow:i.skillPoints>0&&!$t(i),disabled:$t(i)},primary:{action:i.built?"wave":"build",label:i.built?i.phase==="wave"?"เริ่มระลอก":`เริ่มระลอก ${Ls(i.wave+1)}`:"สร้างป้อม",sub:i.built?i.phase==="wave"?"กำลังต่อสู้…":"พร้อมแล้ว · N":"ใช้พลังงาน 120",disabled:i.paused||$t(i)||i.phase==="wave"||!i.built&&i.gold<120},nova:{accessibleText:s.novaCharges>1?`Nova พร้อมใช้ ${i.novaCharges} จาก ${s.novaCharges} ครั้ง · ${r?`ครั้งถัดไปอีก ${t} วิ`:"เต็มแล้ว"}`:`Nova · ${n?"พร้อม":`อีก ${t} วิ`}`,label:i.novaCharges>1?`Nova ×${i.novaCharges}`:"Nova",sub:n?"พร้อม":`อีก ${t} วิ`,ready:n&&!e&&i.phase==="wave",disabled:e||!n||i.phase!=="wave",tag:s.novaCharges>1&&i.novaCharges>0?`${i.novaCharges}/${s.novaCharges}`:i.novaCharges>1?`×${i.novaCharges}`:n?"":`${t} วิ`,charging:r,progress:r?Math.max(0,Math.min(1,1-i.cooldown/s.novaCooldown)):0},repair:{cost:60,disabled:a,reason:o},pause:{paused:i.paused,label:i.paused?"เล่นต่อ":"หยุด",disabled:$t(i)},speed:{fast:i.speed===2,label:`ความเร็ว ${i.speed} เท่า · กดเปลี่ยนเป็น ${i.speed===1?2:1} เท่า`,caption:`×${i.speed}`,disabled:$t(i)}}}const Xh=i=>ln[i].label,wd=i=>Object.keys(fr).find(e=>xn(e)===i&&!ln[e].elite);function qh(i){const e=Ql(i),t=$t(i)?i.wave:e.wave,n=$t(i)?i.total:e.total,s=Oi.find(r=>e.traits[r]>0);return{count:n,portrait:wd(s),expandable:i.phase==="build"||i.phase==="ready",visible:i.phase!=="wave",label:`ศัตรูระลอก ${Ls(t)} · ${n} ตัว`}}const my=["สายสั้น","สายยาว","สายกลาง"],gy=["ประตูแดง","ประตูชมพู","ประตูม่วง"];function vy(i){var s;if(i.phase!=="ready"&&i.phase!=="build")return null;const e=Ql(i),t=Oi.filter(r=>e.traits[r]>0).map(r=>({trait:r,...or[r],portrait:wd(r),count:e.traits[r],isNew:e.newTraits.includes(r)})),n=e.mainLane;return{title:`ระลอก ${Ls(e.wave)} · ${e.total} ตัว`,lane:{main:n,text:`สายหลัก: ${my[n]} (${gy[n]}) · ${e.lanes[n]}/${e.total} ตัว`},chips:t,spotlight:e.boss?null:((s=t.find(r=>r.isNew))==null?void 0:s.trait)??null,boss:e.boss&&{name:Xh(e.boss.kind),portrait:e.boss.kind,count:e.boss.count,text:`บอส: ${Xh(e.boss.kind)}${e.boss.count>1?` ×${e.boss.count}`:""} · ${or[e.boss.trait].name}${e.boss.stunImmune?" · หยุดนิ่งไม่ได้":""}`}}}function _y(i){const e=a=>i[a]==="owned",t=(a,o)=>a?"closed":o?"lit":"open",n=a=>{const o=`II-${a}`,l=`III-${a}`;return{fork:t(i[o]==="blocked",e("I-a")||e("I-b")),mid:t(i[l]==="blocked",e(o)),cap:t(i[l]==="blocked"||i.cap==="blocked",e(l))}},s=n("A"),r=n("B");return{tierA:t(!1,e("I-a")),tierB:t(!1,e("I-b")),forkA:s.fork,forkB:r.fork,midA:s.mid,midB:r.mid,capA:s.cap,capB:r.cap}}function Yh(i){return{points:i.skillPoints,gold:i.gold,branches:Ui.map(e=>{const t=e==="core"?i.built:i.levels[e]>0,n=Di.filter(a=>a.branch===e).map(a=>({id:a.id,slot:a.slot,name:a.name,cost:a.cost,status:ma(i,a.id).state})),s=Object.fromEntries(n.map(a=>[a.slot,a.status])),r=n.find(a=>(a.slot==="II-A"||a.slot==="II-B")&&a.status==="owned");return{branch:e,name:ai[e],...Md[e],unlocked:t,gate:e==="core"?t?"สร้างป้อมแล้ว":"สร้างป้อมก่อน":t?"ปลดธาตุแล้ว":"ปลดธาตุด้วยพลังงาน",nodes:n,fork:r?r.slot==="II-A"?"A":"B":null,forkNote:r?`ทาง ${r.name}`:"เลือก 1 ทาง",links:_y(s)}}),reset:xy(i)}}function xy(i){const e=Gu(i),t=i.phase!=="ready"?"รีเซ็ตได้ระหว่างระลอกเท่านั้น":i.skills.length?i.gold<e?`ต้องการ ${e} พลังงานเพื่อรีเซ็ต`:null:"ยังไม่มีโหนดให้รีเซ็ต";return{cost:e,reason:t,note:i.respecCount?"แพงขึ้นครั้งละ 100 พลังงาน":"ราคารีเซ็ตครั้งแรก"}}function by(i,e){const t=At(e),n=ma(i,e),s=$t(i)?"การต่อสู้จบแล้ว":"reason"in n?n.reason:null;return{id:e,name:t.name,branch:t.branch,place:`${ai[t.branch]} · ${oy[t.slot]}`,status:n.state,statusLabel:Tl[n.state],effect:t.effect,counters:t.counters.length?`แก้ทาง: ${t.counters.map(r=>r==="boss"?"บอส":or[r].name).join(", ")}`:null,choice:n.state==="available"||n.state==="locked"?D_(e):null,requirements:L_(i,e),action:{label:n.state==="owned"?"ปลดแล้ว":`ปลดโหนด · ${t.cost} หน่วย`,disabled:n.state!=="available"||$t(i),reason:s}}}const Kh={"I-a":0,"I-b":0,"II-A":1,"II-B":1,"III-A":2,"III-B":2,cap:3},yy={"I-a":0,"I-b":1,"II-A":0,"II-B":1,"III-A":0,"III-B":1,cap:.5};function My(i,e,t=Ui){const n=c=>t.indexOf(c.branch)*2+yy[c.slot],s=At(i),[r,a]={left:[-1,0],right:[1,0],up:[0,-1],down:[0,1]}[e];let o,l=1/0;for(const c of Di){if(c.id===i||!t.includes(c.branch))continue;const h=n(c)-n(s),d=Kh[c.slot]-Kh[s.slot],u=h*r+d*a;if(u<=0||r&&d)continue;const f=u+3*Math.abs(r?d:h);f<l&&([o,l]=[c,f])}return(o==null?void 0:o.id)??i}function Sy(i){return Ui.flatMap(e=>{const t=i.skills.map(At).filter(r=>r.branch===e);if(!t.length)return[];const n=t.filter(r=>r.slot.startsWith("II")).map(r=>r.name),s=t.find(r=>r.slot==="cap");return[`${ai[e]}: ${n.length?n.join(" → "):`ชั้น I ${t.length} โหนด`}${s?` · ★ ${s.name}`:""}`]})}function Ed(i){return i.some(e=>e.type==="boss-warning")?"boss":"normal"}function Td(i,e){const t=[];for(const n of i)n.type==="wave"&&e.phase==="ready"&&t.unshift(`ผ่านระลอก ${Ls(e.wave)}`),n.type==="points"&&t.push(`ได้ข้อมูลวิจัย +${n.value}`),n.type==="skill"&&n.node&&t.push(`ปลด ${At(n.node).name} แล้ว`),n.type==="capstone"&&n.node&&t.push(`ป้อมแปลงร่าง · ${At(n.node).name}`),n.type==="boss-warning"&&t.push(`บอสกำลังมา · ประตู ${(n.lane??0)+1}`);return!i.some(n=>n.type==="boss-warning")&&i.some(n=>n.type==="research")?Oe.research.unlocked:t.length?t.join(" · "):null}const Ni=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),jh=" ",Zh=/^[\d,.]+$/,wy=/^\(?×?[\d,.]+%?\)?$/,Ey=14;function ct(i){const e=i.split(" ").filter(Boolean),t=[];return e.forEach((n,s)=>{const r=t.at(-1);r!==void 0&&(n==="ๆ"||Zh.test(r.split(jh).at(-1))||wy.test(n)&&(!Zh.test(n)||s===e.length-1)&&[...r].length<=Ey)?t[t.length-1]+=jh+n:t.push(n)}),t.map(n=>`<span class="keep">${Ni(n)}</span>`).join(" ")}const Co={owned:"check",available:"plus",locked:"lock-simple",blocked:"x"},Jh={"core-lens":"crosshair","core-mine":"coins","core-nova-power":"star-four","core-nova-rush":"timer","core-nova-freeze":"hourglass","core-nova-awaken":"sparkle","core-prism":"diamonds-four","fire-fuel":"drop","fire-blast":"sun","fire-meteor":"meteor","fire-wildfire":"fire","fire-lava":"mountains","fire-stack":"stack","fire-sunfall":"sun-horizon","frost-chill":"thermometer-cold","frost-wide":"wind","frost-glacier":"cube","frost-brittle":"drop-half","frost-field":"snowflake","frost-shatter":"asterisk","frost-ice-age":"globe-hemisphere-west","storm-conductor":"plugs-connected","storm-overcharge":"battery-charging","storm-chain":"link","storm-thunder":"lightning","storm-static":"atom","storm-clap":"waves","storm-tempest":"cloud-lightning"},Et=(i,e="")=>`<i class="ph ph-${i} ${e}" aria-hidden="true"></i>`,Ty=[["I-a","I-b"],["II-A","II-B"],["III-A","III-B"],["cap"]],Ay=["I","II","III","★"],Ad='<span class="fork-badge" aria-hidden="true">Y</span>',ei=(i,e)=>`<span class="link-line link-${i}" data-link="${e}"></span>`,Ry=i=>[`<div class="tree-link is-fork" aria-hidden="true">${ei("ta",i.tierA)}${ei("tb",i.tierB)}${ei("fa",i.forkA)}${ei("fb",i.forkB)}${Ad}</div>`,`<div class="tree-link" aria-hidden="true">${ei("a",i.midA)}${ei("b",i.midB)}</div>`,`<div class="tree-link is-cap" aria-hidden="true">${ei("a",i.capA)}${ei("b",i.capB)}</div>`],Cy=()=>window.matchMedia("(max-width: 760px)").matches&&!window.matchMedia("(max-height: 420px) and (min-aspect-ratio: 3/2)").matches;function Py(i){return Array.from(i.querySelectorAll('button:not(:disabled), [tabindex="0"]')).filter(e=>{var t;return e.tabIndex>=0&&(((t=e.checkVisibility)==null?void 0:t.call(e))??e.offsetParent!==null)})}function Al(i,e){const t=Py(i);if(!t.length)return;const n=t.indexOf(document.activeElement);e.shiftKey&&n<=0?(e.preventDefault(),t.at(-1).focus()):!e.shiftKey&&(n===-1||n===t.length-1)&&(e.preventDefault(),t[0].focus())}class Iy{constructor(e,t,n){E(this,"isOpen",!1);E(this,"confirmOpen",!1);E(this,"root");E(this,"content");E(this,"live");E(this,"state");E(this,"selected","core-lens");E(this,"tab","core");E(this,"signature","");E(this,"returnFocus",null);this.onCommand=t,this.onChange=n,this.root=document.createElement("div"),this.root.className="tree-shade",this.root.hidden=!0,this.content=document.createElement("div"),this.content.className="tree-content",this.live=document.createElement("p"),this.live.className="tree-live",this.live.setAttribute("role","status"),this.live.setAttribute("aria-live","polite"),this.root.append(this.content,this.live),e.append(this.root),this.root.addEventListener("click",s=>{const r=s.target.closest("button");if(!r)return;const{tree:a,node:o,branch:l}=r.dataset;o?(this.select(o,!0),this.revealDetail()):l?this.setTab(l,!0):a==="close"?this.close():a==="unlock"?this.onCommand({type:"unlock",node:this.selected}):a==="reset"?this.askReset():a==="reset-cancel"?this.setConfirm(!1):a==="reset-confirm"&&(this.setConfirm(!1),this.onCommand({type:"respec"}))})}open(e){if(this.isOpen)return;this.returnFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.state=e,this.isOpen=!0,this.live.textContent="";const t=Di.find(n=>ma(e,n.id).state==="available");this.selected=(t==null?void 0:t.id)??"core-lens",this.tab=(t==null?void 0:t.branch)??"core",this.root.hidden=!1,this.render(!0),this.onChange(),this.focus(`[data-node="${this.selected}"]`)}close(){var e;this.isOpen&&(this.isOpen=!1,this.confirmOpen=!1,this.root.hidden=!0,this.onChange(),(e=this.returnFocus)==null||e.focus())}update(e){this.state=e,this.isOpen&&this.render()}message(e){this.live.textContent=e,this.live.classList.remove("flash"),this.live.offsetWidth,this.live.classList.add("flash")}handleKey(e){const t=e.key;if(this.confirmOpen)return t==="Escape"?(e.preventDefault(),this.setConfirm(!1),!0):t==="Tab"?(Al(this.root.querySelector(".tree-confirm"),e),!0):!1;if(t==="Escape"||t.toLowerCase()==="t")return e.preventDefault(),this.close(),!0;if(t==="Tab")return Al(this.root.querySelector(".tree-panel"),e),!0;const n={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down"}[t];if(!n)return!1;const s=document.activeElement;if(s!=null&&s.dataset.branch&&(n==="left"||n==="right")){const r=Ui.indexOf(s.dataset.branch),a=Ui[(r+(n==="left"?3:1))%4];return e.preventDefault(),this.setTab(a,!0),this.focus(`[data-branch="${a}"]`),!0}return s!=null&&s.dataset.node?(e.preventDefault(),this.move(n),!0):!1}move(e){const t=My(this.selected,e,Cy()?[this.tab]:Ui);this.select(t,!0)}select(e,t){this.selected=e,this.tab=Di.find(n=>n.id===e).branch,this.render(),t&&this.focus(`[data-node="${e}"]`)}revealDetail(){const e=this.root.querySelector(".tree-detail"),t=e==null?void 0:e.querySelector(".detail-unlock");!e||!t||t.getBoundingClientRect().bottom<=innerHeight||(e.scrollIntoView({block:"start"}),t.getBoundingClientRect().bottom>innerHeight&&t.scrollIntoView({block:"end"}))}setTab(e,t){this.tab=e,this.selected.startsWith(e)||(this.selected=Di.find(n=>n.branch===e).id),this.render(),t&&this.focus(`[data-branch="${e}"]`)}askReset(){const e=Yh(this.state).reset.reason;if(e){this.message(e);return}this.setConfirm(!0)}setConfirm(e){this.confirmOpen=e,this.render(!0),this.onChange(),this.focus(e?'[data-tree="reset-cancel"]':'[data-tree="reset"]')}focus(e,t=!1){var n;(n=this.root.querySelector(e))==null||n.focus({preventScroll:t})}render(e=!1){var d,u;const t=this.state,n=Yh(t),s=by(t,this.selected),r=JSON.stringify([n,s,this.tab,this.confirmOpen]);if(!e&&r===this.signature)return;this.signature=r;const a=(d=document.activeElement)==null?void 0:d.closest("[data-node],[data-branch],[data-tree]"),o=a&&this.root.contains(a)?a.dataset.node?`[data-node="${a.dataset.node}"]`:a.dataset.branch?`[data-branch="${a.dataset.branch}"]`:`[data-tree="${a.dataset.tree}"]`:null,l=n.branches.find(f=>f.branch===this.tab),c=((u=this.root.querySelector(".tree-panel"))==null?void 0:u.scrollTop)??0;this.content.innerHTML=`
      <section class="tree-panel" role="dialog" aria-modal="true" aria-labelledby="tree-title">
        <header class="tree-top">
          <button class="tree-back" data-tree="close" aria-label="กลับสู่เกม">${Et("caret-left")}</button>
          <h2 id="tree-title">ผังทักษะ</h2>
          <span class="tree-paused">${Et("pause")}เกมหยุดชั่วคราว</span>
          <div class="tree-stats">
            <span class="tree-points">${Et("hexagon")}ข้อมูลวิจัย <b>${n.points}</b></span>
            <span class="tree-gold" aria-label="พลังงานรอยแยก ${n.gold.toLocaleString("en-US")}">${Et("coins")}<b>${n.gold.toLocaleString("en-US")}</b></span>
            <button class="tree-return" data-tree="close">${Et("play")}กลับสู่เกม</button>
          </div>
        </header>
        <div class="tree-tabs" role="tablist" aria-label="สายของผังทักษะ">${n.branches.map(f=>`
          <button role="tab" id="tree-tab-${f.branch}" data-branch="${f.branch}" aria-selected="${f.branch===this.tab}"
            aria-controls="tree-col-${f.branch}" tabindex="${f.branch===this.tab?0:-1}" style="--branch: var(--${f.branch})">
            ${Et(f.icon)}<span>${f.name}</span>${f.unlocked?"":Et("lock-simple","tab-lock")}
          </button>`).join("")}
        </div>
        <p class="tree-branch-status" style="--branch: var(--${l.branch})">${Et(l.icon)}<b>${l.name}</b> · ${l.gate}<span>${l.forkNote}</span></p>
        <div class="tree-body">
          <div class="tree-columns" data-tab="${this.tab}">
            <ol class="tree-row-labels" aria-hidden="true">${Ay.map((f,g)=>`<li>${f}${g===1?"<small>เลือก 1 ทาง</small>":""}</li>`).join("")}</ol>
            ${n.branches.map(f=>`
            <section class="tree-col" id="tree-col-${f.branch}" role="tabpanel" aria-labelledby="tree-tab-${f.branch}"
              data-branch-col="${f.branch}" style="--branch: var(--${f.branch})">
              <header class="tree-col-head">${Et(f.icon,"col-icon")}<div><b>${f.name}</b><small>${f.unlocked?f.tagline:`${Et("lock-simple")} ${f.gate}`}</small></div></header>
              <div class="tree-grid">${Ty.map((g,v)=>`<div class="tree-row tree-row-${g.length===1?"cap":"pair"}">${g.map(m=>{const p=f.nodes.find(S=>S.slot===m);return`<button class="tree-node${p.slot==="cap"?" is-cap":""}" data-node="${p.id}" data-status="${p.status}"
                  aria-pressed="${p.id===this.selected}" aria-label="${Ni(`${p.name} · ${Tl[p.status]}${p.cost===2?" · 2 หน่วย":""}`)}">
                  ${Et(Jh[p.id],"node-icon")}<span class="node-text"><span class="node-name">${p.name}</span>${p.cost===2?"<small>2 หน่วย</small>":""}</span>
                  ${Et(Co[p.status],"node-status")}
                </button>`}).join("")}</div>${Ry(f.links)[v]??""}`).join("")}</div>
            </section>`).join("")}
          </div>
          <aside class="tree-detail" style="--branch: var(--${s.branch})" aria-live="polite">
            <div class="detail-head">${Et(Jh[s.id],"detail-icon")}<div><small>${s.place}</small><h3>${s.name}</h3>
              <span class="detail-status" data-status="${s.status}">${Et(Co[s.status])}${s.statusLabel}</span></div></div>
            <p class="detail-effect">${ct(s.effect)}</p>
            ${s.counters?`<p class="detail-counters">${ct(s.counters)}</p>`:""}
            ${s.choice?`<p class="detail-choice">${Ad}<span>${ct(s.choice)}</span></p>`:""}
            <h4>เงื่อนไขที่ต้องมี</h4>
            <ul class="detail-reqs">${s.requirements.map(f=>`<li data-met="${f.met}">${Et(f.met?"check":"x")}<span>${ct(f.label)}</span></li>`).join("")}</ul>
            <button class="detail-unlock" data-tree="unlock" ${s.action.disabled?"disabled":""}>${s.action.label}</button>
            ${s.action.disabled&&s.action.reason?`<p class="detail-reason">${ct(s.action.reason)}</p>`:""}
          </aside>
        </div>
        <footer class="tree-foot">
          <ul class="tree-legend">
            ${["owned","available","locked","blocked"].map(f=>`<li data-status="${f}">${Et(Co[f],"legend-icon")}<b>${Tl[f]}</b><small>${Ly[f]}</small></li>`).join("")}
          </ul>
          <p class="tree-rules"><b>ขั้นสูงสุดใช้ข้อมูลวิจัย 2 หน่วย · เลือกได้ 1 สายต่อรอบ</b><span>สร้างป้อม +1 · ผ่านระลอก +1 · ระลอก 5, 10 เพิ่ม +1</span></p>
          <div class="tree-reset"><button data-tree="reset" aria-describedby="reset-note">${Et("arrows-clockwise")}รีเซ็ต · ${Et("coins")}${n.reset.cost} พลังงาน</button>
            <small id="reset-note">${n.reset.reason??n.reset.note}</small></div>
        </footer>
      </section>
      ${this.confirmOpen?`
      <div class="tree-confirm-shade">
        <section class="tree-confirm" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title" aria-describedby="confirm-body">
          <h3 id="confirm-title">รีเซ็ตผังทักษะ · ${n.reset.cost} พลังงาน</h3>
          <p id="confirm-body">${ct("คืนข้อมูลวิจัยทั้งหมดและล้างขั้นสูงสุด ครั้งถัดไปแพงขึ้น 100 พลังงาน")}</p>
          <div><button data-tree="reset-cancel">ยกเลิก</button><button class="danger" data-tree="reset-confirm">รีเซ็ต</button></div>
        </section>
      </div>`:""}`;const h=this.root.querySelector(".tree-panel");if(h.scrollTop=c,h.toggleAttribute("inert",this.confirmOpen),o){const f=this.root.querySelector(o);f&&!f.disabled?f.focus({preventScroll:!0}):this.focus(`[data-node="${this.selected}"]`,!0)}}}const Ly={owned:"ปลดแล้ว ใช้งานอยู่",available:"ใช้ข้อมูลวิจัยเพื่อปลด",locked:"เงื่อนไขยังไม่ครบ",blocked:"เลือกอีกทางไปแล้ว"};class Dy{constructor(e){E(this,"key","");E(this,"view",null);E(this,"active",null);this.slot=e;const t=n=>n.target.closest(".trait-chip");e.addEventListener("pointerover",n=>{n.pointerType==="mouse"&&this.show(t(n))}),e.addEventListener("pointerleave",n=>{n.pointerType==="mouse"&&(document.activeElement===e||!e.contains(document.activeElement))&&this.show(null)}),e.addEventListener("focusin",n=>this.show(t(n))),e.addEventListener("focusout",n=>{e.contains(n.relatedTarget)||this.show(null)}),e.addEventListener("click",n=>this.show(t(n))),document.addEventListener("pointerdown",n=>{e.contains(n.target)||this.show(null)})}clear(){this.show(null)}render(e){const t=JSON.stringify(e);if(t===this.key)return;if(this.key=t,this.view=e,this.active=null,!e){this.slot.replaceChildren(),this.slot.classList.remove("has-content"),delete this.slot.dataset.chips;return}this.slot.classList.add("has-content"),this.slot.dataset.chips=String(e.chips.length);const n=[null,...e.chips.map(s=>s.trait)].map(s=>{const{html:r,boss:a}=this.infoOf(s,"sizer-portrait");return`<p${a?' class="is-boss"':""}>${r}</p>`}).join("");this.slot.innerHTML=`
      <div class="preview-head sr-only"><strong>${Ni(e.title)}</strong></div>
      <div class="preview-chips">${e.chips.map(s=>`
        <button class="trait-chip" data-trait="${s.trait}" aria-describedby="preview-info" aria-pressed="false"
          aria-label="${Ni(`${s.name} ${s.count} ตัว${s.isNew?" · ความสามารถใหม่":""}`)}">
          <img class="chip-portrait" src="ui/portraits/${s.portrait}.webp" width="44" height="44" alt="" decoding="async"><b class="chip-count">×${s.count}</b>
          ${s.isNew?'<em class="new-badge">ใหม่!</em>':""}
        </button>`).join("")}
      </div>
      <div class="preview-body">
        <p class="preview-info" id="preview-info" aria-live="polite"></p>
        <div class="preview-sizer" aria-hidden="true">${n}</div>
      </div>
      <p class="preview-lane" data-lane="${e.lane.main}"><i class="lane-dot" aria-hidden="true"></i>${Ni(e.lane.text)}</p>`,this.paintInfo()}show(e){const t=(e==null?void 0:e.dataset.trait)??null;t!==this.active&&(this.active=t,this.slot.querySelectorAll(".trait-chip").forEach(n=>n.setAttribute("aria-pressed",String(n===e))),this.paintInfo())}paintInfo(){const e=this.slot.querySelector(".preview-info");if(!e||!this.view)return;const{html:t,boss:n}=this.infoOf(this.active,"boss-portrait");e.innerHTML=t,e.classList.toggle("is-boss",n)}infoOf(e,t){var r,a,o;const n=e??((r=this.view)!=null&&r.boss?null:((a=this.view)==null?void 0:a.spotlight)??null);if(n){const l=or[n];return{html:`<b>${ct(l.name)}</b> ${ct(l.rule)} · <span class="counters">${ct(`แพ้ทาง: ${l.counters}`)}</span>`,boss:!1}}const s=(o=this.view)==null?void 0:o.boss;return s?{html:`<img class="${t}" src="ui/portraits/${s.portrait}.webp" width="20" height="20" alt=""> ${ct(s.text)}`,boss:!0}:{html:`<span class="muted">${ct("แตะหรือชี้ที่ชิปเพื่อดูกติกาและจุดอ่อน")}</span>`,boss:!1}}}class Uy{constructor(){E(this,"target",null);E(this,"release","tab")}arm(e,t="tab"){this.target=e,this.release=t}blocks(e,t){return(e==="Tab"||this.release==="tab-or-arrow"&&e.startsWith("Arrow"))&&(this.target=null),e===" "&&this.target!==null&&t===this.target}}const kt=(i,e="")=>`<i class="ph ph-${i} ${e}" aria-hidden="true"></i>`,an=(i,e="")=>`<i class="ph-fill ph-${i} ${e}" aria-hidden="true"></i>`,yi=(i,e,t,n="")=>`<img class="${t}" src="ui/icons/${i}.webp" width="${e}" height="${e}" alt="" decoding="async"${n?` data-ref="${n}"`:""}>`,pn=i=>Math.round(i).toLocaleString("en-US"),Qh=i=>i.toLocaleString("en-US",{maximumFractionDigits:1}),Ny=["core","fire","frost","storm"],xs=[["play","วิธีเล่น"],["tree","ผังทักษะ"],["traits",Oe.research.tab],["settings","ตั้งค่า"]],Js=class Js{constructor(e,t,n){E(this,"refs",new Map);E(this,"state");E(this,"signature","");E(this,"previousPhase","");E(this,"researchSignature",null);E(this,"helpOpen",!1);E(this,"helpTab","play");E(this,"pausedByHelp",!1);E(this,"soundEnabled",!0);E(this,"reduced",matchMedia("(prefers-reduced-motion: reduce)"));E(this,"coins");E(this,"goldTally",new El);E(this,"vignette",-1);E(this,"feedbackTimers",new Map);E(this,"highQuality",Pu());E(this,"helpTrigger",null);E(this,"card",null);E(this,"panelOpen",!1);E(this,"spaceGuard",new Uy);E(this,"preview");E(this,"tree");E(this,"storyOpen",!0);E(this,"endingRunning",!1);E(this,"endingCaption","");E(this,"skillLook",{fire:"",frost:"",storm:""});this.container=e,this.onCommand=t,this.options=n,e.classList.add("hud-cartoon"),e.innerHTML=`
      <div class="vignette" data-ref="vignette" aria-hidden="true"></div>
      <header class="hud-top panel-glass">
        <h1 class="sr-only">Aetherkeep · ${Oe.chapter}</h1>
        <div class="top-status" data-hud-panel>
          <div class="wave-status" data-ref="wave-box" aria-label="สถานะระลอก">
            <span class="wave-icon" aria-hidden="true">${an("flag-pennant")}${yi("swords",24,"fight-icon")}</span>
            <div class="wave-text"><strong data-ref="wave-title">ระลอก 01 / 10</strong>
              <div class="wave-progress" aria-hidden="true"><i data-ref="wave-fill"></i></div></div>
            <small class="sr-only" data-ref="wave-status"></small><small class="sr-only" data-ref="wave-detail"></small></div>
          <div class="resource" data-ref="gold-resource">${yi("coin",26,"gold-icon")}<b data-ref="gold">320</b><b class="gold-gain" data-ref="gold-gain" aria-hidden="true"></b></div>
          <div class="resource health" data-ref="health-resource">${yi("shield",26,"hp-icon")}<div><b><span data-ref="hp">120</span> / <span data-ref="hp-max">120</span></b>
            <div class="health-track"><i data-ref="health-fill"></i></div></div></div>
        </div>
        <div class="boss-area" data-ref="boss-toasts" role="status" aria-live="assertive"></div>
      </header>
      <aside class="hud-left">
        <button class="enemy-pill" data-hud-panel data-tool="enemies" data-ref="enemy-pill" aria-expanded="false" aria-controls="enemy-panel">
          <img class="pill-portrait" data-ref="pill-portrait" src="ui/portraits/green-blob.webp" width="36" height="36" alt="" decoding="async">
          <span class="pill-text">มอนสเตอร์ <b data-ref="enemy-count">18</b></span>${kt("caret-down","pill-caret")}</button>
        <section class="enemy-panel" id="enemy-panel" data-ref="preview-slot" tabindex="-1" aria-label="มอนสเตอร์จากรอยแยกระลอกถัดไป" hidden></section>
      </aside>
      <nav class="utility" data-hud-panel aria-label="เครื่องมือเกม">
        <button class="tool" data-tool="menu" data-ref="menu-button" aria-expanded="false" aria-controls="help-panel" aria-label="เมนู · คู่มือและตั้งค่า">${an("gear")}</button>
      </nav>
      <div class="paused-chip" data-ref="paused" hidden>${kt("pause")}<div>เกมหยุดชั่วคราว<small>กด Space หรือปุ่มเล่นต่อ</small></div></div>
      <footer class="hud-bottom panel-glass" data-ref="hud-bottom">
        <p class="tower-log" data-ref="tower-log" role="status" aria-live="polite" aria-atomic="true"></p>
        <section class="build-bar" data-hud-panel data-ref="build-bar" aria-label="บิลด์ของคุณ">
          <div class="build-cards">${Ny.map(l=>`
            <div class="build-card" data-branch="${l}" data-ref="${l}-card" role="group" style="--branch: var(--${l})">
              <button class="card-buy" data-card="${l}" data-ref="${l}-buy" aria-expanded="false" aria-controls="upgrade-pop" aria-describedby="${l}-skill-text">
                <span class="hex-gem">${yi(`gem-${l}`,54,"gem-art",`${l}-gem`)}<span class="skill-cd" data-ref="${l}-cd" aria-hidden="true"></span><b class="skill-count" data-ref="${l}-count" aria-hidden="true" hidden></b><b class="hex-level" data-ref="${l}-level" hidden></b>${an("lock-simple","hex-lock")}${kt("plus","hex-unlock")}</span>
              <span class="card-price">${yi("coin",18,"coin-icon",`${l}-buy-icon`)}<b data-ref="${l}-cost"></b></span>
              </button>
              <span class="sr-only" id="${l}-skill-text" data-ref="${l}-skill-text"></span>
            </div>`).join("")}
          </div>
          <section class="upgrade-pop" id="upgrade-pop" data-ref="upgrade-pop" role="dialog" tabindex="-1" aria-labelledby="pop-name" aria-describedby="pop-effect pop-reason" hidden>
            <header class="pop-head"><img class="pop-gem" data-ref="pop-gem" src="ui/icons/gem-core.webp" width="34" height="34" alt="" decoding="async">
              <b class="pop-name" id="pop-name" data-ref="pop-name"></b>
              <span class="pop-level">ระดับ <span data-ref="pop-from"></span> → <b class="pop-to" data-ref="pop-to"></b></span></header>
            <p class="pop-route" data-ref="pop-route" hidden></p>
            <p class="pop-line" id="pop-effect"><span data-ref="pop-stat"></span><span><span class="pop-before" data-ref="pop-before"></span> → <b class="pop-after" data-ref="pop-after"></b></span></p>
            <button class="pop-confirm" data-ref="upgrade-confirm">${yi("coin",22,"coin-icon")}<b data-ref="pop-action"></b></button>
            <p class="pop-reason" id="pop-reason" data-ref="pop-reason" hidden></p>
          </section>
        </section>
        <nav class="command-bar" data-hud-panel aria-label="คำสั่ง">
          <button class="tree-orb" data-tool="tree" data-ref="tree-button">${kt("tree-structure")}<span class="command-caption" aria-hidden="true">ทักษะ</span><b class="badge" data-ref="tree-points" hidden></b></button>
          <button class="cmd cmd-primary" data-ref="primary" data-action="build">${an("castle-turret","primary-icon")}${yi("swords",26,"primary-icon swords-icon")}<b data-ref="primary-label">สร้างป้อม</b><small class="sr-only" data-ref="primary-sub"></small></button>
          <button class="cmd cmd-icon cmd-nova" data-action="nova" data-ref="nova" hidden>${an("star-four")}<span class="sr-only"><b data-ref="nova-label">Nova</b> <small data-ref="nova-sub"></small></span><small class="cmd-tag" data-ref="nova-tag" aria-hidden="true"></small><span class="command-caption" aria-hidden="true">Nova</span></button>
          <button class="cmd cmd-icon" data-action="repair" data-ref="repair" hidden>${an("wrench")}<span class="sr-only"><b>ซ่อม</b> <small data-ref="repair-sub">60 พลังงาน</small></span><span class="command-caption" aria-hidden="true">ซ่อม</span></button>
          <button class="cmd cmd-icon" data-action="pause" data-ref="pause">${an("pause")}<span class="sr-only"><b data-ref="pause-label">หยุด</b></span><span class="command-caption" data-ref="pause-caption" aria-hidden="true">หยุด</span></button>
          <button class="cmd cmd-icon" data-action="speed" data-ref="speed" aria-pressed="false">${an("fast-forward")}<span class="command-caption" data-ref="speed-caption" aria-hidden="true">×1</span></button>
        </nav>
        <div class="toast-area" data-ref="toasts" role="status" aria-live="polite"></div>
      </footer>
      <div class="fly-layer" data-ref="fly-layer" aria-hidden="true"></div>
      <div class="modal-shade" data-ref="help-shade" hidden>
        <section class="help-panel" id="help-panel" data-ref="help-panel" role="dialog" aria-modal="true" aria-labelledby="help-title">
          <header><h2 id="help-title">คู่มือ Aetherkeep</h2><button class="tool panel-close" data-tool="close-help" data-ref="close-help" aria-label="ปิดคู่มือ">${kt("x")}</button></header>
          <div class="help-tabs" role="tablist" aria-label="หัวข้อคู่มือ">${xs.map(([l,c])=>`
            <button role="tab" id="help-tab-${l}" data-help-tab="${l}" aria-controls="help-page-${l}">${c}</button>`).join("")}</div>
          <div class="help-page" id="help-page-play" role="tabpanel" aria-labelledby="help-tab-play">
            <ol class="help-steps">${Oe.helpSteps.map(l=>`<li><b>${ct(l.heading)}</b>${ct(l.body)}</li>`).join("")}</ol>
            <h3>การควบคุม</h3>
            <div class="key-grid">${fy().map(([l,c])=>`<kbd>${l}</kbd><span>${c}</span>`).join("")}</div>
          </div>
          <div class="help-page" id="help-page-tree" role="tabpanel" aria-labelledby="help-tab-tree" hidden>
            <ul class="help-list">${Oe.treeGuide.map(l=>`<li><b>${ct(l.heading)}</b>${ct(l.body)}</li>`).join("")}</ul>
          </div>
          <div class="help-page" id="help-page-traits" role="tabpanel" aria-labelledby="help-tab-traits" hidden>
            <p class="research-intro">${ct(Oe.research.intro)}</p>
            <p class="research-count" data-ref="research-count"></p>
            <ul class="trait-list" data-ref="research-list"></ul>
            <p class="research-pending" data-ref="research-pending"></p>
            <h3 data-ref="research-special-title" hidden>ตัวพิเศษและบอส</h3>
            <ul class="help-list compact" data-ref="research-special-list"></ul>
          </div>
          <div class="help-page" id="help-page-settings" role="tabpanel" aria-labelledby="help-tab-settings" hidden>
            <button class="setting-row" data-tool="sound" data-ref="sound-row" aria-pressed="true"><span>${an("speaker-high","icon-sound")}เสียงทั้งหมด</span><span class="switch" aria-hidden="true"><i></i></span><b data-ref="sound-setting">เปิด</b></button>
            <label class="setting-slider" for="volume-sfx"><span>${an("bell-simple-ringing","icon-sfx")}เสียงประกอบ</span><input class="volume" type="range" id="volume-sfx" min="0" max="100" step="10" data-volume="sfx"><b data-ref="volume-sfx-value" aria-hidden="true"></b></label>
            <label class="setting-slider" for="volume-music"><span>${an("music-notes","icon-music")}เพลงและบรรยากาศ</span><input class="volume" type="range" id="volume-music" min="0" max="100" step="10" data-volume="music"><b data-ref="volume-music-value" aria-hidden="true"></b></label>
            <button class="setting-row" data-tool="story"><span>${kt("book-open")}${Oe.intro.replay}</span><b>3 ภาพ</b></button>
            <button class="setting-row" data-tool="quality"><span>${kt("sparkle")}คุณภาพเอฟเฟกต์</span><b data-ref="quality-setting">${this.highQuality?"สูง":"ประหยัดพลังงาน"}</b></button>
          </div>
          <p class="help-live" role="status" aria-live="polite" data-ref="help-live"></p>
        </section>
      </div>
      <div class="ending" data-ref="ending" hidden>
        <p class="ending-caption" data-ref="ending-caption" aria-live="polite"></p>
        <button class="ending-skip" data-tool="ending-skip">${kt("fast-forward")}แตะเพื่อข้าม</button>
      </div>
      <div class="end-screen" data-ref="end-screen" hidden>
        <section class="end-card" data-ref="end-card" role="dialog" aria-modal="true" aria-labelledby="end-title">
          <div data-ref="end-icon">${kt("crown","end-icon")}</div>
          <h2 class="end-title" id="end-title" data-ref="end-title"></h2>
          <p class="end-log-label" data-ref="end-log-label">${Oe.towerLog} · ${Oe.speaker}</p>
          <p class="end-description" data-ref="end-description"></p>
          <div class="end-stats"><div><b data-ref="end-wave">10</b><span>ระลอก</span></div><div><b data-ref="end-kills">0</b><span>มอนสเตอร์ที่หยุด</span></div><div><b data-ref="end-score">0</b><span>คะแนน</span></div></div>
          <h3>บิลด์ที่ใช้</h3><ul class="end-build" data-ref="end-build"></ul>
          <p class="end-archive" data-ref="end-archive">${ct(Oe.simulation.explanation)}</p>
          <div class="end-actions"><button class="cmd cmd-primary" data-action="endless" data-ref="endless" aria-label="${Oe.simulation.label} · ไม่สิ้นสุด">${kt("infinity")}${Oe.simulation.action}</button><button class="cmd" data-action="restart" data-ref="restart">${kt("arrow-counter-clockwise")}เริ่มใหม่</button></div>
        </section>
      </div>
      <section class="loading-screen story" data-ref="loading" role="dialog" aria-modal="true" aria-labelledby="story-title">
        <header class="story-head"><h1 class="loading-wordmark" id="story-title">Aetherkeep</h1><p class="story-tagline">${Oe.intro.tagline}</p></header>
        <ol class="story-panels">${Oe.intro.panels.map((l,c)=>`
          <li class="story-panel" style="--i: ${c}"><img src="ui/story/panel-${c+1}.webp" width="768" height="512" alt="" decoding="async">
            <div class="story-caption"><b>${c+1} · ${l.title}</b><span>${ct(l.body)}</span></div></li>`).join("")}</ol>
        <footer class="story-foot">
          <div class="story-load"><div class="loading-track"><i data-ref="loading-progress"></i></div><p data-ref="loading-text" role="status" aria-live="polite">${Oe.loading.initial}</p></div>
          <button class="cmd cmd-primary story-start" data-tool="story-start" data-ref="story-start" hidden>${kt("play")}${Oe.intro.start}</button>
        </footer>
      </section>`,e.querySelectorAll("[data-ref]").forEach(l=>this.refs.set(l.dataset.ref,l));let s=!1;try{s=localStorage.getItem(Js.STORY_SEEN)==="1"}catch{}const r=this.ref("loading");(s||matchMedia("(prefers-reduced-motion: reduce)").matches)&&r.classList.add("all"),r.addEventListener("pointerdown",()=>r.classList.add("all"));const a=matchMedia("(max-width: 760px)"),o=()=>{const l=this.ref("menu-button").parentElement,c=this.ref("enemy-pill").parentElement,h=l.contains(document.activeElement)?document.activeElement:null;a.matches?c.before(l):c.after(l),h==null||h.focus({preventScroll:!0})};o(),a.addEventListener("change",o),this.preview=new Dy(this.ref("preview-slot")),this.tree=new Iy(e,l=>this.onCommand(l),()=>this.syncModal()),this.setHelpTab("play"),this.syncQuality(),this.coins=new sy(this.ref("fly-layer"),()=>this.ref("gold-resource").getBoundingClientRect(),()=>this.goldArrived()),this.coins.setPool(this.highQuality?8:4),this.soundEnabled=n.audio.enabled,this.syncSound();for(const l of["sfx","music"]){const c=this.container.querySelector(`#volume-${l}`);c.value=String(n.audio[l]),this.syncVolume(l,n.audio[l]),c.addEventListener("input",()=>{this.syncVolume(l,+c.value),this.options.onVolume(l,+c.value)}),l==="sfx"&&c.addEventListener("change",()=>this.options.onVolumePreview())}e.addEventListener("click",l=>{var d,u;const c=l.target.closest("button");if(!c||c.disabled)return;const h=l.detail===0;if(c.dataset.action){this.onCommand(c.dataset.action);return}if(c.dataset.helpTab){this.setHelpTab(c.dataset.helpTab);return}if(c.dataset.card){this.toggleCard(c.dataset.card,h);return}if(c.dataset.ref==="upgrade-confirm"){this.confirmUpgrade(h);return}switch(c.dataset.tool){case"menu":this.openHelp(this.helpTab,c,!h);break;case"enemies":this.togglePanel();break;case"close-help":this.closeHelp();break;case"tree":this.toggleTree();break;case"sound":this.toggleSound();break;case"story-start":this.closeStory();break;case"ending-skip":(u=(d=this.options).onEndingSkip)==null||u.call(d);break;case"story":this.openStory();break;case"quality":this.highQuality=this.options.onQuality(),this.syncQuality(),this.coins.setPool(this.highQuality?8:4),this.toast(this.highQuality?"เปิดเอฟเฟกต์คุณภาพสูง":"ใช้โหมดประหยัดพลังงาน");break}}),document.addEventListener("pointerdown",l=>{const c=l.target;this.card&&!(c instanceof Element&&c.closest(".card-buy, .upgrade-pop"))&&this.closeCard(!1),this.panelOpen&&!this.ref("enemy-pill").parentElement.contains(c)&&this.closePanel(!1)}),this.ref("build-bar").addEventListener("focusout",l=>{const c=l.relatedTarget;this.card&&c&&!this.ref("build-bar").contains(c)&&this.closeCard(!1)}),this.ref("enemy-pill").parentElement.addEventListener("focusout",l=>{const c=l.relatedTarget;this.panelOpen&&c&&!this.ref("enemy-pill").parentElement.contains(c)&&this.closePanel(!1)}),this.ref("help-shade").addEventListener("click",l=>{l.target===this.ref("help-shade")&&this.closeHelp()}),window.addEventListener("keydown",l=>{var h,d;if(this.endingRunning){(l.key==="Enter"||l.key===" "||l.key==="Escape")&&(l.preventDefault(),(d=(h=this.options).onEndingSkip)==null||d.call(h)),l.stopImmediatePropagation();return}if(this.storyOpen){const u=this.ref("story-start"),f=r.contains(l.target);l.key==="Escape"&&!u.hidden?(l.preventDefault(),this.closeStory()):(l.key==="Tab"||!f)&&(l.preventDefault(),u.hidden||u.focus({preventScroll:!0})),l.stopImmediatePropagation();return}if(this.tree.isOpen){this.tree.handleKey(l),l.stopImmediatePropagation();return}const c=this.helpOpen?this.ref("help-panel"):this.ref("end-screen").hidden?null:this.ref("end-card");if(!c){l.key==="Escape"&&this.card?(l.preventDefault(),this.closeCard(!0)):l.key==="Escape"&&this.panelOpen&&(l.preventDefault(),this.closePanel(!0));return}if(this.spaceGuard.blocks(l.key,l.target)&&l.preventDefault(),l.key==="Escape"&&this.helpOpen)l.preventDefault(),this.closeHelp();else if(l.key==="Tab")Al(c,l);else if(this.helpOpen&&(l.key==="ArrowLeft"||l.key==="ArrowRight")&&l.target.dataset.helpTab){const u=xs.findIndex(([g])=>g===this.helpTab),f=xs[(u+(l.key==="ArrowLeft"?xs.length-1:1))%xs.length][0];l.preventDefault(),this.setHelpTab(f),this.container.querySelector(`[data-help-tab="${f}"]`).focus()}l.stopImmediatePropagation()},{capture:!0})}ref(e){return this.refs.get(e)}text(e,t){const n=this.ref(e);n.textContent!==t&&(n.textContent=t)}hidden(e,t){const n=this.ref(e);n.hidden!==t&&(n.hidden=t)}attribute(e,t,n){e.getAttribute(t)!==n&&e.setAttribute(t,n)}button(e,t,n){const s=this.ref(e);s.disabled=t,n&&(s.title=n)}syncModal(){this.helpOpen||this.tree.isOpen||!this.ref("end-screen").hidden||this.storyOpen?document.body.dataset.uiModal="true":delete document.body.dataset.uiModal}toggleTree(){!this.state||this.state.phase==="victory"||this.state.phase==="defeat"||(this.tree.isOpen?this.tree.close():(this.closeOverlays(),this.tree.open(this.state)))}update(e){this.state=e;const t=py(e);this.tree.update(e),this.preview.render(vy(e)),this.syncPill(e),this.syncCard(),this.syncStory(e),this.syncSkills(e);const n=[e.phase,e.gold,e.hp,e.maxHp,e.wave,e.core,e.levels.fire,e.levels.frost,e.levels.storm,e.remaining,e.total,e.extra,e.kills,e.score,Math.ceil(e.cooldown),e.novaCharges,e.skillPoints,e.skills.join(),e.paused,e.speed,e.endless,e.built,this.endingRunning].join("|");if(n===this.signature)return;this.signature=n;const s=e.phase==="defeat"||e.phase==="victory",r=ly(e),a=this.ref("wave-title"),l=r.label.split(" · ").map((u,f,g)=>`<span class="keep">${Ni(f<g.length-1?`${u} ·`:u)}</span>`).join(" ");a.innerHTML!==l&&(a.innerHTML=l),this.ref("wave-box").classList.toggle("is-fighting",r.fighting),this.ref("wave-box").setAttribute("aria-label",`${e.endless?Oe.simulation.label:Oe.gateProgress} · ${r.waveLabel}`),this.ref("wave-box").title=e.endless?Oe.simulation.label:Oe.gateProgress,this.text("wave-status",r.status),this.text("wave-detail",r.remaining),this.ref("wave-fill").style.width=`${r.progress*100}%`,this.text("gold",pn(r.gold)),this.ref("gold-resource").setAttribute("aria-label",`${fo.energy} ${pn(r.gold)}`),this.ref("gold-resource").title=fo.energy;const c=ay;this.text("hp",c(r.hp)),this.text("hp-max",c(r.maxHp)),this.ref("health-resource").setAttribute("aria-label",`พลังป้อม ${pn(r.hp)} จาก ${pn(r.maxHp)}`),this.ref("health-resource").classList.toggle("critical",r.critical),this.ref("health-fill").style.width=`${100*Math.max(0,r.hp)/r.maxHp}%`;for(const u of cy(e)){this.ref(`${u.key}-level`).hidden=u.level===0,this.text(`${u.key}-level`,String(u.level));const f=u.key==="core"?null:$h(e,u.key);this.ref(`${u.key}-card`).setAttribute("aria-label",[`${u.name} · ${u.levelText}`,u.fork?u.path:"",u.capstone?`★ ${u.capstone}`:"",f?`สกิล ${f.name}`:""].filter(Boolean).join(" · ")),this.text(`${u.key}-cost`,pn(u.upgrade.cost));const g=this.ref(`${u.key}-buy`);g.disabled=s,g.classList.toggle("is-short",!u.upgrade.affordable);const v=u.look==="unlock"?" · พลังงานพอ":u.upgrade.affordable?"":" · พลังงานไม่พอ";g.setAttribute("aria-label",`${u.name} ${u.levelText} · ${u.level?"อัปเกรด":"ปลดธาตุ"} ${pn(u.upgrade.cost)} พลังงาน${v} · ดูผลก่อนยืนยัน`),this.ref(`${u.key}-card`).dataset.look=u.look}this.ref("tree-points").hidden=!t.tree.badge,this.text("tree-points",t.tree.badge),this.ref("tree-button").classList.toggle("glow",t.tree.glow),this.ref("tree-button").setAttribute("aria-label",`ผังทักษะ · ${fo.research}คงเหลือ ${t.tree.points} · T`),this.button("tree-button",t.tree.disabled);const h=this.ref("primary");h.hidden=r.fighting,this.ref("nova").hidden=!r.fighting,this.ref("repair").hidden=!r.fighting,h.dataset.action=t.primary.action,h.disabled=t.primary.disabled,h.classList.toggle("is-wave",e.built),this.text("primary-label",t.primary.label),this.text("primary-sub",t.primary.sub),this.text("nova-label",t.nova.label),this.text("nova-sub",t.nova.sub),this.text("nova-tag",t.nova.tag),this.ref("nova").setAttribute("aria-label",`${t.nova.accessibleText} · Q`),this.button("nova",t.nova.disabled,"ปล่อย Nova ใส่มอนสเตอร์ · Q"),this.ref("nova").classList.toggle("ready",t.nova.ready),this.ref("nova").style.setProperty("--nova-progress",String(t.nova.progress)),this.ref("nova").classList.toggle("is-charging",t.nova.charging),this.button("repair",t.repair.disabled,t.repair.reason),this.text("repair-sub",t.repair.disabled?t.repair.reason:"60 พลังงาน"),this.ref("repair").setAttribute("aria-label",`ซ่อม · ${t.repair.disabled?t.repair.reason:"60 พลังงาน"}`),this.text("pause-label",t.pause.label),this.text("pause-caption",t.pause.label),this.ref("pause").setAttribute("aria-label",`${t.pause.label} · Space`),this.ref("pause").querySelector("i").className=`ph-fill ph-${t.pause.paused?"play":"pause"}`,this.ref("pause").classList.toggle("is-active",t.pause.paused),this.ref("pause").title=`${t.pause.label} · Space`,this.button("pause",t.pause.disabled),this.ref("speed").setAttribute("aria-pressed",String(t.speed.fast)),this.ref("speed").classList.toggle("is-active",t.speed.fast),this.text("speed-caption",t.speed.caption),this.ref("speed").setAttribute("aria-label",t.speed.label),this.button("speed",t.speed.disabled,t.speed.label),this.ref("paused").hidden=!e.paused||s||this.helpOpen||this.tree.isOpen;const d=this.ref("end-screen").hidden;if(this.ref("end-screen").hidden=!s||this.endingRunning,s&&!this.endingRunning){this.closeOverlays(),this.tree.isOpen&&this.tree.close();const u=e.phase==="victory";this.ref("end-card").classList.toggle("is-defeat",!u),this.ref("end-icon").innerHTML=kt(u?"crown":"shield-slash","end-icon"),this.text("end-title",u?Oe.victory.title:e.endless?Oe.defeat.simulationTitle:Oe.defeat.title);const f=u?Oe.victory.lines:[e.endless?Oe.defeat.simulationLine:Oe.defeat.line];this.ref("end-description").innerHTML=f.map(v=>`<span class="end-log-line">${ct(v)}</span>`).join(" "),this.ref("end-log-label").hidden=!u,this.ref("end-archive").hidden=!u,this.text("end-wave",String(e.wave)),this.text("end-kills",pn(e.kills)),this.text("end-score",pn(e.score));const g=Sy(e);this.ref("end-build").innerHTML=(g.length?g:["ไม่ได้ใช้ผังทักษะ"]).map(v=>`<li>${Ni(v)}</li>`).join(""),this.ref("endless").hidden=!u,(this.previousPhase!==e.phase||d)&&window.setTimeout(()=>{const v=this.ref(u?"endless":"restart");v.focus(),this.spaceGuard.arm(v,"tab")},30)}this.syncModal(),this.previousPhase=e.phase}syncStory(e){const t=vx(e),n=this.ref("tower-log");this.hidden("tower-log",t===null);const s=t===null?"":`<span class="tower-log-label">${Oe.towerLog} · ${e.endless?Oe.simulation.short:Oe.speaker}</span> <span>${ct(t)}</span>`;n.innerHTML!==s&&(n.innerHTML=s);const r=`${e.seenTraits.join("|")};${e.seenMonsters.map(l=>`${l.kind}:${l.boss}`).join("|")}`;if(r===this.researchSignature)return;this.researchSignature=r;const a=_x(e);this.text("research-count",`บันทึกแล้ว ${a.length} / ${Oi.length} ความสามารถ`),this.ref("research-list").innerHTML=a.map(({trait:l,note:c})=>{const h=or[l];return`<li data-research-trait="${l}">${kt(h.icon,"trait-icon")}<div><b>${h.name}</b><p class="research-note">${ct(c)}</p><p>${ct(h.rule)}</p><small>${ct(`แพ้ทาง: ${h.counters}`)}</small></div></li>`}).join(""),this.ref("research-pending").hidden=a.length===Oi.length,this.ref("research-pending").innerHTML=ct(a.length?Oe.research.pending:Oe.research.empty);const o=xx(e);this.ref("research-special-title").hidden=o.length===0,this.ref("research-special-list").innerHTML=o.map(l=>`<li data-research-special="${l.id}">${ct(l.note)}</li>`).join("")}toast(e,t="normal"){if(this.tree.isOpen){this.tree.message(e);return}if(this.helpOpen){this.ref("help-live").textContent=e;return}const n=this.ref(t==="boss"?"boss-toasts":"toasts");n.replaceChildren();const s=document.createElement("div");s.className=t==="boss"?"toast boss":"toast",t==="boss"&&(s.innerHTML=an("crown")),s.append(e),n.append(s),window.setTimeout(()=>{s.classList.add("leaving"),window.setTimeout(()=>s.remove(),260)},2900)}setLoading(e,t){this.ref("loading-progress").style.width=`${Math.min(100,Math.max(0,e<=1?e*100:e))}%`,this.text("loading-text",t)}ready(){if(this.setLoading(1,Oe.loading.ready),this.options.story===!1){this.closeStory();return}const e=this.ref("story-start");e.hidden=!1,e.focus({preventScroll:!0})}closeStory(){const e=this.ref("loading");e.classList.add("is-ready"),window.setTimeout(()=>{this.storyOpen||(e.hidden=!0)},650),this.storyOpen=!1;try{localStorage.setItem(Js.STORY_SEEN,"1")}catch{}this.syncModal()}openStory(){this.helpOpen&&this.closeHelp();const e=this.ref("loading"),t=this.ref("story-start");e.hidden=!1,e.classList.remove("is-ready"),e.classList.add("all"),t.innerHTML=`${kt("play")}${Oe.intro.resume}`,t.hidden=!1,this.storyOpen=!0,this.syncModal(),t.focus({preventScroll:!0})}syncQuality(){document.body.dataset.quality=this.highQuality?"high":"standard",this.text("quality-setting",this.highQuality?"สูง":"ประหยัดพลังงาน")}setHelpTab(e){this.helpTab=e;for(const[t]of xs){const n=this.container.querySelector(`[data-help-tab="${t}"]`);n.setAttribute("aria-selected",String(t===e)),n.tabIndex=t===e?0:-1,this.container.querySelector(`#help-page-${t}`).hidden=t!==e}}coinFlight(e,t,n){this.coins.launch(e,t,n,this.reduced.matches)}feedback(e,t,n){const s=Math.round(iy(n.hp,n.maxHp)*100)/100;if(s!==this.vignette){this.vignette=s;const l=this.ref("vignette");l.style.setProperty("--vignette",String(s)),l.classList.toggle("on",s>0),l.classList.toggle("pulse",s>0&&!this.reduced.matches)}const r=performance.now()/1e3,a=this.reduced.matches;for(const l of e)l.type==="leak"&&!a&&this.pulseClass("vignette","flash",400),l.type==="cast"&&l.element&&l.element!=="arcane"&&this.pulseClass(`${l.element}-card`,"cast",600),l.type==="kill"&&(l.value??0)>0&&this.goldTally.add(l.value,r);const o=this.goldTally.take(r);o&&(this.ref("gold-gain").textContent=`+${pn(o)}`,this.pulseClass("gold-gain","show",1100)),t.novaCharges===0&&n.novaCharges>0&&n.phase==="wave"&&!a&&this.pulseClass("nova","ring",800)}goldArrived(){this.pulseClass("gold-resource","gold-hit",220)}ending(e){var r,a;const t=!!e&&!e.done;if(t!==this.endingRunning&&(this.endingRunning=t,this.ref("ending").hidden=!t,t?document.body.dataset.ending="true":delete document.body.dataset.ending,this.signature="",this.state&&this.update(this.state)),!t)return;const n=this.ref("ending-caption"),s=((r=e.caption)==null?void 0:r.text)??"";s!==this.endingCaption&&(this.endingCaption=s,n.textContent=s),n.style.opacity=String(((a=e.caption)==null?void 0:a.alpha)??0)}syncSkills(e){for(const t of["fire","frost","storm"]){const n=$h(e,t),s=n?Math.round(n.left*100)/100:0,r=n?Math.ceil(e.runtime.skillTimers[t]-1e-9):0,a=n?`${n.icon}|${s}|${r}`:"";if(a===this.skillLook[t])continue;this.skillLook[t]=a,this.text(`${t}-skill-text`,n?`สกิล ${n.name} · ${r>0?`พร้อมในอีก ${r} วินาที`:"พร้อม"}`:"");const o=this.ref(`${t}-card`),l=this.ref(`${t}-gem`),c=`ui/icons/${n?n.icon:`gem-${t}`}.webp`;l.getAttribute("src")!==c&&l.setAttribute("src",c),o.classList.toggle("has-skill",!!n),o.classList.toggle("skill-ready",!!n&&s===0),this.ref(`${t}-cd`).style.setProperty("--cd",String(s));const h=this.ref(`${t}-count`);h.hidden=!n||r<=0;const d=r>0?String(r):"";h.textContent!==d&&(h.textContent=d)}}pulseClass(e,t,n){const s=this.ref(e),r=`${e}:${t}`;s.classList.remove(t),s.offsetWidth,s.classList.add(t),clearTimeout(this.feedbackTimers.get(r)),this.feedbackTimers.set(r,window.setTimeout(()=>s.classList.remove(t),n))}syncVolume(e,t){const n=this.container.querySelector(`#volume-${e}`);n.style.setProperty("--fill",`${t}%`),n.setAttribute("aria-valuetext",`${t} เปอร์เซ็นต์`),this.text(`volume-${e}-value`,`${t}%`)}toggleSound(){this.soundEnabled=this.options.onSound(),this.syncSound()}syncSound(){this.ref("sound-row").setAttribute("aria-pressed",String(this.soundEnabled)),this.text("sound-setting",this.soundEnabled?"เปิด":"ปิด")}syncPill(e){const t=qh(e),n=this.ref("enemy-pill");this.text("enemy-count",String(t.count));const s=this.ref("pill-portrait"),r=`ui/portraits/${t.portrait}.webp`;s.getAttribute("src")!==r&&s.setAttribute("src",r),this.attribute(n,"aria-label",t.label),!t.expandable&&this.panelOpen&&this.closePanel(!1),n.disabled!==!t.expandable&&(n.disabled=!t.expandable);const a=n.parentElement;!t.visible&&a.contains(document.activeElement)&&this.ref("pause").focus({preventScroll:!0}),a.hidden!==!t.visible&&(a.hidden=!t.visible)}togglePanel(){this.panelOpen?this.closePanel(!0):this.openPanel()}openPanel(){!this.state||!qh(this.state).expandable||(this.closeCard(!1),this.panelOpen=!0,this.ref("preview-slot").hidden=!1,this.ref("enemy-pill").setAttribute("aria-expanded","true"),this.ref("preview-slot").focus())}closePanel(e){var s;if(!this.panelOpen)return;const t=this.ref("preview-slot").contains(document.activeElement);this.panelOpen=!1,this.preview.clear(),this.ref("preview-slot").hidden=!0,this.ref("enemy-pill").setAttribute("aria-expanded","false");const n=this.ref("enemy-pill");(e||t)&&!n.disabled?n.focus():t&&((s=document.activeElement)==null||s.blur())}toggleCard(e,t){if(this.card===e){this.closeCard(t);return}if(this.closePanel(!1),this.card&&this.ref(`${this.card}-buy`).setAttribute("aria-expanded","false"),this.card=e,this.ref(`${e}-buy`).setAttribute("aria-expanded","true"),this.ref("upgrade-pop").hidden=!1,this.syncCard(),this.ref("upgrade-pop").scrollTop=0,t){const n=this.ref("upgrade-confirm");(n.disabled?this.ref("upgrade-pop"):n).focus()}}closeCard(e){if(!this.card)return;const t=this.ref(`${this.card}-buy`),n=this.ref("upgrade-pop").contains(document.activeElement);this.card=null,t.setAttribute("aria-expanded","false"),this.ref("upgrade-pop").hidden=!0,(e||n)&&t.focus()}closeOverlays(){this.closeCard(!1),this.closePanel(!1)}confirmUpgrade(e){if(!this.card)return;const t=this.card;this.closeCard(e),this.onCommand(t)}syncCard(){if(!this.card||!this.state)return;const e=dy(this.state,this.card),t=this.ref("pop-gem"),n=`ui/icons/gem-${e.key}.webp`;t.getAttribute("src")!==n&&t.setAttribute("src",n),this.text("pop-name",e.name),this.text("pop-from",String(e.level)),this.text("pop-to",String(e.next)),this.hidden("pop-route",!e.route),this.text("pop-route",e.route??""),this.text("pop-stat",e.stat),this.text("pop-before",e.before===null?"–":Qh(e.before)),this.text("pop-after",Qh(e.after)),this.text("pop-action",`${e.label} · ${pn(e.cost)}`);const s=this.ref("upgrade-confirm");s.disabled=e.disabled,s.setAttribute("aria-label",`${e.label} ${e.name} เป็นระดับ ${e.next} · ${pn(e.cost)} พลังงาน`),this.ref("pop-reason").hidden=!e.reason,this.text("pop-reason",e.reason??"");const r=this.ref("upgrade-pop"),a=this.ref("build-bar").getBoundingClientRect(),o=this.ref(`${e.key}-buy`).getBoundingClientRect(),l=(o.left+o.right)/2,c=Math.min(Math.max(12,l-r.offsetWidth/2),innerWidth-12-r.offsetWidth);r.style.setProperty("--pop-left",`${c-a.left}px`),r.style.setProperty("--arrow-x",`${l-c}px`);const h=Math.floor(r.getBoundingClientRect().bottom-8),d=r.scrollHeight+r.offsetHeight-r.clientHeight,u=r.offsetHeight>0&&d>h?`${h}px`:"";r.style.maxHeight!==u&&(r.style.maxHeight=u,r.classList.toggle("is-tight",u!==""))}openHelp(e,t,n=!1){this.helpOpen||(this.closeOverlays(),this.helpTrigger=t,this.spaceGuard.arm(n?this.ref("close-help"):null,"tab-or-arrow"),this.helpOpen=!0,this.setHelpTab(e),this.ref("help-shade").hidden=!1,t.setAttribute("aria-expanded","true"),this.ref("paused").hidden=!0,this.syncModal(),this.pausedByHelp=!!this.state&&!this.state.paused&&this.state.phase!=="defeat"&&this.state.phase!=="victory",this.pausedByHelp&&this.onCommand("pause"),this.ref("close-help").focus())}closeHelp(){var e,t,n;this.helpOpen&&(this.helpOpen=!1,this.ref("help-shade").hidden=!0,(e=this.helpTrigger)==null||e.setAttribute("aria-expanded","false"),this.ref("help-live").textContent="",this.syncModal(),this.pausedByHelp&&((t=this.state)!=null&&t.paused)&&this.onCommand("pause"),this.pausedByHelp=!1,this.signature="",this.state&&this.update(this.state),(n=this.helpTrigger)==null||n.focus())}};E(Js,"STORY_SEEN","aetherkeep:story-seen");let Rl=Js;const Ma=document.querySelector("#world"),vr=document.querySelector("#ui"),Xe=sd(),Fy=null,eu=[],bs=void 0,nc=new Rb;Ma.setAttribute("aria-label","เกาะลอยฟ้า ภาพวาดมุมคงที่");let ky;let ys;const hn=new ny;let ht,Sa=!1,Pi="ok",ic=null;vr.addEventListener("pointerdown",i=>{document.body.dataset.uiModal!=="true"&&(ic=i.target instanceof Element?i.target.closest("button"):null)});window.addEventListener("keydown",i=>{i.key==="Tab"&&(ic=null)},{capture:!0});for(const i of["pointerdown","keydown"])window.addEventListener(i,()=>hn.unlock(),{capture:!0});window.addEventListener("keydown",i=>{ya(Pi)&&i.stopImmediatePropagation()},{capture:!0});vr.addEventListener("pointerdown",i=>{const e=i.target instanceof Element?i.target.closest("button"):null;e&&hn.ui(e.disabled)});const Rd=i=>(ht==null?void 0:ht.screenPoint(i).ndcX)??0,bt=new Rl(vr,i=>Cd(i),{onSound:()=>hn.toggle(),onVolume:(i,e)=>hn.setVolume(i,e),onVolumePreview:()=>hn.preview(),audio:hn.settings,onQuality:()=>(ht==null?void 0:ht.toggleQuality())??!1,story:!Fy,onEndingSkip:()=>{var i;return(i=ht==null?void 0:ht.skipEnding)==null?void 0:i.call(ht)}});function Cd(i){if(!Sa)return;if(ya(Pi))return{ok:!1,message:"กรุณาหมุนเครื่องเป็นแนวนอน",events:[]};hn.unlock();const e=_d(Xe),t=Nx(Xe,i),n=Td(t.events,Xe)??t.message;return n&&bt.toast(n,Ed(t.events)),n!==Oe.research.unlocked&&t.events.some(s=>s.type==="research")&&bt.toast(Oe.research.unlocked),ht==null||ht.handle(t.events),hn.handle(t.events,e,Xe,Rd),bt.feedback(t.events,e,Xe),bt.update(Xe),t}async function Oy(){var i;try{let e=function(l){requestAnimationFrame(e);const c=l-s,h=Math.max(0,Math.min(c/1e3,.05));if(s=l,!document.hidden){if(document.body.dataset.uiModal!=="true"){const d=_d(Xe),u=fh(Xe,h*yl);bs==null||bs.add(Xe.time,u),ht.handle(u),hn.handle(u,d,Xe,Rd),bt.feedback(u,d,Xe);const f=Td(u,Xe);f&&bt.toast(f,Ed(u)),f!==Oe.research.unlocked&&u.some(g=>g.type==="research")&&bt.toast(Oe.research.unlocked)}if(ys==null||ys.begin(),ht.update(Xe,h),ys==null||ys.end(),r+=h,bt.ending(ht.ending??null),ky&&Xe.phase,r>.08){bt.update(Xe),r=0;const d=document.body.dataset.uiModal==="true";hn.follow(Xe),hn.setDimmed(Xe.paused||d),nc.sync(Tb(Xe,d||ya(Pi)))}}};bt.setLoading(0,Oe.loading.initial);const t=Pu(innerWidth),n=Kv(Ma,t);ht=await tc.create(n,t,l=>bt.setLoading(l,Oe.loading.progress)),ht.onCoin=(l,c)=>bt.coinFlight(l.x,l.y,c),ht.onCueStart=l=>{hn.unlockCue(l.capstone)},eu.length&&ht.handle(eu),ht.update(Xe,0),Sa=!0,bt.ready(),bt.update(Xe),wa();let s=performance.now(),r=0;requestAnimationFrame(e);const a=l=>{Xe.skillPoints+=l,bt.update(Xe)},o=l=>{for(let c=0;c<Math.round(l*30);c++){const h=fh(Xe,.03333333333333333);bs==null||bs.add(Xe.time,h),ht.handle(h),ht.update(Xe,1/30/yl)}return bt.update(Xe),Xe.time};Object.defineProperty(window,"__AETHERKEEP__",{value:{getState:()=>JSON.parse(JSON.stringify(Xe)),diagnostics:(l=!1)=>ht.diagnostics(l),version:"1.0.0"},writable:!1})}catch(e){console.error(e),vr.innerHTML='<section class="boot-error" style="position:fixed;inset:0;display:grid;place-content:center;background:#102734;color:white;text-align:center;padding:24px;font-family:sans-serif"><h1>เปิดเกาะไม่สำเร็จ</h1><p>โปรดใช้เบราว์เซอร์ที่รองรับ WebGL 2 แล้วลองโหลดเกมอีกครั้ง</p><button id="reload-game" style="padding:12px">ลองอีกครั้ง</button></section>',(i=document.querySelector("#reload-game"))==null||i.addEventListener("click",()=>location.reload())}}window.addEventListener("keydown",i=>{const e=i.key.toLowerCase(),t=i.key===" "&&i.target===ic;if(t&&document.body.dataset.uiModal!=="true"&&i.preventDefault(),document.body.dataset.uiModal==="true"||i.target instanceof HTMLElement&&(/INPUT|TEXTAREA|SELECT/.test(i.target.tagName)||i.target.isContentEditable)||i.repeat||i.target instanceof HTMLButtonElement&&(i.key==="Enter"||i.key===" "&&!t))return;const n={" ":"pause",n:"wave",1:"fire",2:"frost",3:"storm",q:"nova"};if(e==="t"){i.preventDefault(),bt.toggleTree();return}n[e]&&(i.preventDefault(),Cd(n[e]))});document.addEventListener("visibilitychange",()=>nc.retry());addEventListener("pointerdown",()=>nc.retry(),{capture:!0});document.addEventListener("visibilitychange",()=>{document.hidden&&Sa&&!Xe.paused&&Xe.phase==="wave"&&(ba(Xe,"pause"),bt.update(Xe))});Ma.addEventListener("webglcontextlost",i=>{i.preventDefault(),Xe.paused||ba(Xe,"pause"),bt.toast("กราฟิกหยุดชั่วคราว กรุณาโหลดหน้าใหม่เพื่อเล่นต่อ")});const In=document.createElement("section");In.className="rotate-screen";In.setAttribute("role","alertdialog");In.setAttribute("aria-modal","true");In.setAttribute("aria-label","กรุณาหมุนเครื่องเป็นแนวนอน");In.hidden=!0;In.innerHTML='<svg class="rotate-icon" viewBox="0 0 64 64" aria-hidden="true"><rect x="20" y="6" width="24" height="42" rx="5" fill="none" stroke="currentColor" stroke-width="4"/><path d="M10 40a24 24 0 0 0 30 18" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M36 52l6 6-8 3" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg><h2>กรุณาหมุนเครื่องเป็นแนวนอน</h2><p>เกมนี้เล่นในแนวนอนเท่านั้น</p>';document.body.append(In);const Pd=matchMedia("(pointer: coarse)");function wa(){Pi=Cb(innerWidth,innerHeight,Pd.matches),In.hidden=Pi==="ok";const i=ya(Pi);i?document.body.dataset.rotateScreen="true":delete document.body.dataset.rotateScreen;for(const e of[vr,Ma])e.inert=i,i&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&document.activeElement.blur();Sa&&Pb(Xe,Pi)&&(ba(Xe,"pause"),bt.update(Xe))}const Ea=()=>{(document.fullscreenElement||matchMedia("(display-mode: standalone)").matches)&&Ib()};for(const i of["resize","orientationchange"])addEventListener(i,wa);Pd.addEventListener("change",wa);const By=()=>matchMedia("(display-mode: standalone)").matches,Id=i=>Lb({touch:i,fullscreen:!!document.fullscreenElement,standalone:By(),supported:document.fullscreenEnabled});let lr=!0,Cl=!1,Pl=0;const Ld=()=>void document.documentElement.requestFullscreen({navigationUI:"hide"}).catch(()=>{lr=!0});document.addEventListener("fullscreenchange",()=>{if(Ea(),window.clearTimeout(Pl),document.fullscreenElement){Cl=!0;return}document.visibilityState==="visible"&&(Pl=window.setTimeout(()=>{document.visibilityState==="visible"&&!document.fullscreenElement&&(Cl=!1)},1e3))});document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){window.clearTimeout(Pl);return}Cl&&(lr=!0),Ea()});window.addEventListener("pointerup",i=>{lr&&(lr=!1,Id(i.pointerType==="touch")?Ld():Ea())},{capture:!0});In.addEventListener("pointerup",i=>{Id(i.pointerType==="touch")?(lr=!1,Ld()):Ea()});document.fullscreenEnabled&&In.insertAdjacentHTML("beforeend",'<p class="rotate-hint">แตะหน้าจอเพื่อเล่นแบบเต็มจอแนวนอน</p>');wa();Oy();export{zi as B,on as D,th as E,Hy as G,Jt as L,zt as M,Tt as S,vl as T,Wt as a,_n as b,zl as c,Gy as d,Vy as g,A_ as k};
