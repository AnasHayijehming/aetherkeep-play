var pd=Object.defineProperty;var md=(i,e,t)=>e in i?pd(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var A=(i,e,t)=>md(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gl="180",gd=0,Gl=1,vd=2,Uh=1,_d=2,Dn=3,Jn=0,Gt=1,rn=2,Zn=0,Ei=1,Wr=2,Wl=3,$l=4,xd=5,xi=100,bd=101,Md=102,yd=103,Sd=104,Ed=200,wd=201,Td=202,Ad=203,vo=204,_o=205,Rd=206,Cd=207,Pd=208,Id=209,Ld=210,Dd=211,Ud=212,Nd=213,Fd=214,xo=0,bo=1,Mo=2,vs=3,yo=4,So=5,Eo=6,wo=7,Nh=0,kd=1,Od=2,Fn=0,Bd=1,zd=2,Hd=3,Vd=4,Gd=5,Wd=6,$d=7,Fh=300,_s=301,xs=302,To=303,Ao=304,ta=306,$r=1e3,yi=1001,Ro=1002,Zt=1003,Xd=1004,lr=1005,jt=1006,ga=1007,Si=1008,Bn=1009,kh=1010,Oh=1011,Gs=1012,vl=1013,Ci=1014,yn=1015,Zs=1016,_l=1017,xl=1018,Ws=1020,Bh=35902,zh=35899,Hh=1021,Vh=1022,pn=1023,$s=1026,Xs=1027,bl=1028,Ml=1029,Gh=1030,yl=1031,Sl=1033,kr=33776,Or=33777,Br=33778,zr=33779,Co=35840,Po=35841,Io=35842,Lo=35843,Do=36196,Uo=37492,No=37496,Fo=37808,ko=37809,Oo=37810,Bo=37811,zo=37812,Ho=37813,Vo=37814,Go=37815,Wo=37816,$o=37817,Xo=37818,qo=37819,Yo=37820,Ko=37821,jo=36492,Zo=36494,Jo=36495,Qo=36283,el=36284,tl=36285,nl=36286,qd=3200,Yd=3201,Kd=0,jd=1,Un="",At="srgb",bs="srgb-linear",Xr="linear",it="srgb",zi=7680,Xl=519,Zd=512,Jd=513,Qd=514,Wh=515,ef=516,tf=517,nf=518,sf=519,ql=35044,Jt=35048,Yl="300 es",Sn=2e3,qr=2001;class Es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],va=Math.PI/180,il=180/Math.PI;function Js(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function rf(i,e){return(i%e+e)%e}function _a(i,e,t){return(1-t)*i+t*e}function Rs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*v,S=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const I=Math.sqrt(E),P=Math.atan2(I,f*S);m=Math.sin(m*P)/I,o=Math.sin(o*P)/I}const y=o*S;if(l=l*m+d*y,c=c*m+p*y,h=h*m+g*y,u=u*m+v*y,m===1-o){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xa.copy(this).projectOnVector(e),this.sub(xa)}reflect(e){return this.sub(xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xa=new O,Kl=new Hn;class ze{constructor(e,t,n,s,r,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],v=s[0],m=s[3],f=s[6],S=s[1],E=s[4],y=s[7],I=s[2],P=s[5],T=s[8];return r[0]=a*v+o*S+l*I,r[3]=a*m+o*E+l*P,r[6]=a*f+o*y+l*T,r[1]=c*v+h*S+u*I,r[4]=c*m+h*E+u*P,r[7]=c*f+h*y+u*T,r[2]=d*v+p*S+g*I,r[5]=d*m+p*E+g*P,r[8]=d*f+p*y+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=t*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ba.makeScale(e,t)),this}rotate(e){return this.premultiply(ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new ze;function $h(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function af(){const i=qs("canvas");return i.style.display="block",i}const jl={};function Ys(i){i in jl||(jl[i]=!0,console.warn(i))}function of(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Zl=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jl=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lf(){const i={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(s.r=gs(s.r),s.g=gs(s.g),s.b=gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?Xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[bs]:{primaries:e,whitePoint:n,transfer:Xr,toXYZ:Zl,fromXYZ:Jl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:n,transfer:it,toXYZ:Zl,fromXYZ:Jl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),i}const Qe=lf();function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Hi;class cf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hi===void 0&&(Hi=qs("canvas")),Hi.width=e.width,Hi.height=e.height;const s=Hi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Hi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=kn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hf=0;class El{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Js(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ma(s[a].image)):r.push(Ma(s[a]))}else r=Ma(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ma(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uf=0;const ya=new O;class Rt extends Es{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=yi,s=yi,r=jt,a=Si,o=pn,l=Bn,c=Rt.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Js(),this.name="",this.source=new El(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ya).x}get height(){return this.source.getSize(ya).y}get depth(){return this.source.getSize(ya).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $r:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case Ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $r:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case Ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Fh;Rt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,y=(p+1)/2,I=(f+1)/2,P=(h+d)/4,T=(u+v)/4,D=(g+m)/4;return E>y&&E>I?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=P/n,r=T/n):y>I?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=P/s,r=D/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=T/r,s=D/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class df extends Es{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Rt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new El(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends df{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xh extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ff extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Li{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)),cr.applyMatrix4(e.matrixWorld),this.union(cr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),hr.subVectors(this.max,Cs),Vi.subVectors(e.a,Cs),Gi.subVectors(e.b,Cs),Wi.subVectors(e.c,Cs),Vn.subVectors(Gi,Vi),Gn.subVectors(Wi,Gi),ai.subVectors(Vi,Wi);let t=[0,-Vn.z,Vn.y,0,-Gn.z,Gn.y,0,-ai.z,ai.y,Vn.z,0,-Vn.x,Gn.z,0,-Gn.x,ai.z,0,-ai.x,-Vn.y,Vn.x,0,-Gn.y,Gn.x,0,-ai.y,ai.x,0];return!Sa(t,Vi,Gi,Wi,hr)||(t=[1,0,0,0,1,0,0,0,1],!Sa(t,Vi,Gi,Wi,hr))?!1:(ur.crossVectors(Vn,Gn),t=[ur.x,ur.y,ur.z],Sa(t,Vi,Gi,Wi,hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Rn=[new O,new O,new O,new O,new O,new O,new O,new O],ln=new O,cr=new Li,Vi=new O,Gi=new O,Wi=new O,Vn=new O,Gn=new O,ai=new O,Cs=new O,hr=new O,ur=new O,oi=new O;function Sa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){oi.fromArray(i,r);const o=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const pf=new Li,Ps=new O,Ea=new O;class Qs{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ps.subVectors(e,this.center);const t=Ps.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ps,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ps.copy(e.center).add(Ea)),this.expandByPoint(Ps.copy(e.center).sub(Ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Cn=new O,wa=new O,dr=new O,Wn=new O,Ta=new O,fr=new O,Aa=new O;class mf{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){wa.copy(e).add(t).multiplyScalar(.5),dr.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(wa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(dr),o=Wn.dot(this.direction),l=-Wn.dot(dr),c=Wn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(wa).addScaledVector(dr,d),p}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),s=Cn.dot(Cn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,s,r){Ta.subVectors(t,e),fr.subVectors(n,e),Aa.crossVectors(Ta,fr);let a=this.direction.dot(Aa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,e);const l=o*this.direction.dot(fr.crossVectors(Wn,fr));if(l<0)return null;const c=o*this.direction.dot(Ta.cross(Wn));if(c<0||l+c>a)return null;const h=-o*Wn.dot(Aa);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,s,r,a,o,l,c,h,u,d,p,g,v,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,p,g,v,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),a=1/$i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,p=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gf,e,vf)}lookAt(e,t,n){const s=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),$n.crossVectors(n,qt),$n.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),$n.crossVectors(n,qt)),$n.normalize(),pr.crossVectors(qt,$n),s[0]=$n.x,s[4]=pr.x,s[8]=qt.x,s[1]=$n.y,s[5]=pr.y,s[9]=qt.y,s[2]=$n.z,s[6]=pr.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],S=n[3],E=n[7],y=n[11],I=n[15],P=s[0],T=s[4],D=s[8],M=s[12],b=s[1],L=s[5],k=s[9],W=s[13],ee=s[2],j=s[6],Z=s[10],ne=s[14],G=s[3],ce=s[7],me=s[11],ge=s[15];return r[0]=a*P+o*b+l*ee+c*G,r[4]=a*T+o*L+l*j+c*ce,r[8]=a*D+o*k+l*Z+c*me,r[12]=a*M+o*W+l*ne+c*ge,r[1]=h*P+u*b+d*ee+p*G,r[5]=h*T+u*L+d*j+p*ce,r[9]=h*D+u*k+d*Z+p*me,r[13]=h*M+u*W+d*ne+p*ge,r[2]=g*P+v*b+m*ee+f*G,r[6]=g*T+v*L+m*j+f*ce,r[10]=g*D+v*k+m*Z+f*me,r[14]=g*M+v*W+m*ne+f*ge,r[3]=S*P+E*b+y*ee+I*G,r[7]=S*T+E*L+y*j+I*ce,r[11]=S*D+E*k+y*Z+I*me,r[15]=S*M+E*W+y*ne+I*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+v*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],S=u*m*c-v*d*c+v*l*p-o*m*p-u*l*f+o*d*f,E=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,y=h*v*c-g*u*c+g*o*p-a*v*p-h*o*f+a*u*f,I=g*u*l-h*v*l-g*o*d+a*v*d+h*o*m-a*u*m,P=t*S+n*E+s*y+r*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/P;return e[0]=S*T,e[1]=(v*d*r-u*m*r-v*s*p+n*m*p+u*s*f-n*d*f)*T,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*f+n*l*f)*T,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*T,e[4]=E*T,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*T,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*f-t*l*f)*T,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*p+t*l*p)*T,e[8]=y*T,e[9]=(g*u*r-h*v*r-g*n*p+t*v*p+h*n*f-t*u*f)*T,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*f+t*o*f)*T,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*T,e[12]=I*T,e[13]=(h*v*s-g*u*s+g*n*d-t*v*d-h*n*m+t*u*m)*T,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*m-t*o*m)*T,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,v=a*h,m=a*u,f=o*u,S=l*c,E=l*h,y=l*u,I=n.x,P=n.y,T=n.z;return s[0]=(1-(v+f))*I,s[1]=(p+y)*I,s[2]=(g-E)*I,s[3]=0,s[4]=(p-y)*P,s[5]=(1-(d+f))*P,s[6]=(m+S)*P,s[7]=0,s[8]=(g+E)*T,s[9]=(m-S)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=$i.set(s[0],s[1],s[2]).length();const a=$i.set(s[4],s[5],s[6]).length(),o=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],cn.copy(this);const c=1/r,h=1/a,u=1/o;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,t.setFromRotationMatrix(cn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Sn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Sn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===qr)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Sn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Sn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===qr)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $i=new O,cn=new ot,gf=new O(0,0,0),vf=new O(1,1,1),$n=new O,pr=new O,qt=new O,Ql=new ot,ec=new Hn;class zn{constructor(e=0,t=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ql,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ec.setFromEuler(this),this.setFromQuaternion(ec,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class qh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _f=0;const tc=new O,Xi=new Hn,Pn=new ot,mr=new O,Is=new O,xf=new O,bf=new Hn,nc=new O(1,0,0),ic=new O(0,1,0),sc=new O(0,0,1),rc={type:"added"},Mf={type:"removed"},qi={type:"childadded",child:null},Ra={type:"childremoved",child:null};class Qt extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new O,t=new zn,n=new Hn,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new ze}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(nc,e)}rotateY(e){return this.rotateOnAxis(ic,e)}rotateZ(e){return this.rotateOnAxis(sc,e)}translateOnAxis(e,t){return tc.copy(e).applyQuaternion(this.quaternion),this.position.add(tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nc,e)}translateY(e){return this.translateOnAxis(ic,e)}translateZ(e){return this.translateOnAxis(sc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mr.copy(e):mr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Is,mr,this.up):Pn.lookAt(mr,Is,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rc),qi.child=e,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mf),Ra.child=e,this.dispatchEvent(Ra),Ra.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rc),qi.child=e,this.dispatchEvent(qi),qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,xf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,bf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Qt.DEFAULT_UP=new O(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new O,In=new O,Ca=new O,Ln=new O,Yi=new O,Ki=new O,ac=new O,Pa=new O,Ia=new O,La=new O,Da=new gt,Ua=new gt,Na=new gt;class fn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hn.subVectors(e,t),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hn.subVectors(s,t),In.subVectors(n,t),Ca.subVectors(e,t);const a=hn.dot(hn),o=hn.dot(In),l=hn.dot(Ca),c=In.dot(In),h=In.dot(Ca),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Da.setScalar(0),Ua.setScalar(0),Na.setScalar(0),Da.fromBufferAttribute(e,t),Ua.fromBufferAttribute(e,n),Na.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Da,r.x),a.addScaledVector(Ua,r.y),a.addScaledVector(Na,r.z),a}static isFrontFacing(e,t,n,s){return hn.subVectors(n,t),In.subVectors(e,t),hn.cross(In).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),hn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return fn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Yi.subVectors(s,n),Ki.subVectors(r,n),Pa.subVectors(e,n);const l=Yi.dot(Pa),c=Ki.dot(Pa);if(l<=0&&c<=0)return t.copy(n);Ia.subVectors(e,s);const h=Yi.dot(Ia),u=Ki.dot(Ia);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Yi,a);La.subVectors(e,r);const p=Yi.dot(La),g=Ki.dot(La);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ki,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return ac.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(ac,o);const f=1/(m+v+d);return a=v*f,o=d*f,t.copy(n).addScaledVector(Yi,a).addScaledVector(Ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},gr={h:0,s:0,l:0};function Fa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=rf(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Fa(a,r,e+1/3),this.g=Fa(a,r,e),this.b=Fa(a,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const n=Yh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Qe.workingToColorSpace(Pt.copy(this),e),Math.round(Ye(Pt.r*255,0,255))*65536+Math.round(Ye(Pt.g*255,0,255))*256+Math.round(Ye(Pt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Pt.copy(this),t);const n=Pt.r,s=Pt.g,r=Pt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=At){Qe.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,s=Pt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(gr);const n=_a(Xn.h,gr.h,t),s=_a(Xn.s,gr.s,t),r=_a(Xn.l,gr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Ke;Ke.NAMES=Yh;let yf=0;class na extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=Ei,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vo,this.blendDst=_o,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vo&&(n.blendSrc=this.blendSrc),this.blendDst!==_o&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kt extends na{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new O,vr=new et;let Sf=0;class mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ql,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXY(t,vr.x,vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rs(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rs(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rs(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),s=kt(s,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ql&&(e.usage=this.usage),e}}class Kh extends mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jh extends mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wi extends mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ef=0;const nn=new ot,ka=new Qt,ji=new O,Yt=new Li,Ls=new Li,St=new O;class Di extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($h(e)?jh:Kh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return ka.lookAt(e),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new wi(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ls.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Yt.min,Ls.min),Yt.expandByPoint(St),St.addVectors(Yt.max,Ls.max),Yt.expandByPoint(St)):(Yt.expandByPoint(Ls.min),Yt.expandByPoint(Ls.max))}Yt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)St.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(St));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)St.fromBufferAttribute(o,c),l&&(ji.fromBufferAttribute(e,c),St.add(ji)),s=Math.max(s,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new O,l[D]=new O;const c=new O,h=new O,u=new O,d=new et,p=new et,g=new et,v=new O,m=new O;function f(D,M,b){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),o[D].add(v),o[M].add(v),o[b].add(v),l[D].add(m),l[M].add(m),l[b].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let D=0,M=S.length;D<M;++D){const b=S[D],L=b.start,k=b.count;for(let W=L,ee=L+k;W<ee;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const E=new O,y=new O,I=new O,P=new O;function T(D){I.fromBufferAttribute(s,D),P.copy(I);const M=o[D];E.copy(M),E.sub(I.multiplyScalar(I.dot(M))).normalize(),y.crossVectors(P,M);const L=y.dot(l[D])<0?-1:1;a.setXYZW(D,E.x,E.y,E.z,L)}for(let D=0,M=S.length;D<M;++D){const b=S[D],L=b.start,k=b.count;for(let W=L,ee=L+k;W<ee;W+=3)T(e.getX(W+0)),T(e.getX(W+1)),T(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,u=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new mn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Di,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oc=new ot,li=new mf,_r=new Qs,lc=new O,xr=new O,br=new O,Mr=new O,Oa=new O,yr=new O,cc=new O,Sr=new O;class Vt extends Qt{constructor(e=new Di,t=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){yr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Oa.fromBufferAttribute(u,e),a?yr.addScaledVector(Oa,h):yr.addScaledVector(Oa.sub(t),h))}t.add(yr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),li.copy(e.ray).recast(e.near),!(_r.containsPoint(li.origin)===!1&&(li.intersectSphere(_r,lc)===null||li.origin.distanceToSquared(lc)>(e.far-e.near)**2))&&(oc.copy(r).invert(),li.copy(e.ray).applyMatrix4(oc),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,I=E;y<I;y+=3){const P=o.getX(y),T=o.getX(y+1),D=o.getX(y+2);s=Er(this,f,e,n,c,h,u,P,T,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const S=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);s=Er(this,a,e,n,c,h,u,S,E,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,I=E;y<I;y+=3){const P=y,T=y+1,D=y+2;s=Er(this,f,e,n,c,h,u,P,T,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const S=m,E=m+1,y=m+2;s=Er(this,a,e,n,c,h,u,S,E,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function wf(i,e,t,n,s,r,a,o){let l;if(e.side===Gt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Jn,o),l===null)return null;Sr.copy(o),Sr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Sr);return c<t.near||c>t.far?null:{distance:c,point:Sr.clone(),object:i}}function Er(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,xr),i.getVertexPosition(l,br),i.getVertexPosition(c,Mr);const h=wf(i,e,t,n,xr,br,Mr,cc);if(h){const u=new O;fn.getBarycoord(cc,xr,br,Mr,u),s&&(h.uv=fn.getInterpolatedAttribute(s,o,l,c,u,new et)),r&&(h.uv1=fn.getInterpolatedAttribute(r,o,l,c,u,new et)),a&&(h.normal=fn.getInterpolatedAttribute(a,o,l,c,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new O,materialIndex:0};fn.getNormal(xr,br,Mr,d.normal),h.face=d,h.barycoord=u}return h}class er extends Di{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new wi(c,3)),this.setAttribute("normal",new wi(h,3)),this.setAttribute("uv",new wi(u,2));function g(v,m,f,S,E,y,I,P,T,D,M){const b=y/T,L=I/D,k=y/2,W=I/2,ee=P/2,j=T+1,Z=D+1;let ne=0,G=0;const ce=new O;for(let me=0;me<Z;me++){const ge=me*L-W;for(let De=0;De<j;De++){const Ie=De*b-k;ce[v]=Ie*S,ce[m]=ge*E,ce[f]=ee,c.push(ce.x,ce.y,ce.z),ce[v]=0,ce[m]=0,ce[f]=P>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(De/T),u.push(1-me/D),ne+=1}}for(let me=0;me<D;me++)for(let ge=0;ge<T;ge++){const De=d+ge+j*me,Ie=d+ge+j*(me+1),We=d+(ge+1)+j*(me+1),Ze=d+(ge+1)+j*me;l.push(De,Ie,Ze),l.push(Ie,We,Ze),G+=6}o.addGroup(p,G,M),p+=G,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ms(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ut(i){const e={};for(let t=0;t<i.length;t++){const n=Ms(i[t]);for(const s in n)e[s]=n[s]}return e}function Tf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Af={clone:Ms,merge:Ut};var Rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends na{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rf,this.fragmentShader=Cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=Tf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Jh extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qn=new O,hc=new et,uc=new et;class dn extends Jh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=il*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return il*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,hc,uc),t.subVectors(uc,hc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(va*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zi=-90,Ji=1;class Pf extends Qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(Zi,Ji,e,t);s.layers=this.layers,this.add(s);const r=new dn(Zi,Ji,e,t);r.layers=this.layers,this.add(r);const a=new dn(Zi,Ji,e,t);a.layers=this.layers,this.add(a);const o=new dn(Zi,Ji,e,t);o.layers=this.layers,this.add(o);const l=new dn(Zi,Ji,e,t);l.layers=this.layers,this.add(l);const c=new dn(Zi,Ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Qh extends Rt{constructor(e=[],t=_s,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class If extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Qh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new er(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:Zn});r.uniforms.tEquirect.value=t;const a=new Vt(s,r),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=jt),new Pf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class wr extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lf={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Lf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new wr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Df extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class wl extends Rt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Zt,h=Zt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn extends mn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Qi=new ot,dc=new ot,Tr=[],fc=new Li,Uf=new ot,Ds=new Vt,Us=new Qs;class tr extends Vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Uf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Li),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qi),fc.copy(e.boundingBox).applyMatrix4(Qi),this.boundingBox.union(fc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qi),Us.copy(e.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(Us)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Us.copy(this.boundingSphere),Us.applyMatrix4(n),e.ray.intersectsSphere(Us)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qi),dc.multiplyMatrices(n,Qi),Ds.matrixWorld=dc,Ds.raycast(e,Tr);for(let a=0,o=Tr.length;a<o;a++){const l=Tr[a];l.instanceId=r,l.object=this,t.push(l)}Tr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Tn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wl(new Float32Array(s*this.count),s,this.count,bl,yn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const za=new O,Nf=new O,Ff=new ze;class vi{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=za.subVectors(n,t).cross(Nf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(za),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ff.getNormalMatrix(e),s=this.coplanarPoint(za).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new Qs,kf=new et(.5,.5),Ar=new O;class eu{constructor(e=new vi,t=new vi,n=new vi,s=new vi,r=new vi,a=new vi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],v=r[9],m=r[10],f=r[11],S=r[12],E=r[13],y=r[14],I=r[15];if(s[0].setComponents(c-a,p-h,f-g,I-S).normalize(),s[1].setComponents(c+a,p+h,f+g,I+S).normalize(),s[2].setComponents(c+o,p+u,f+v,I+E).normalize(),s[3].setComponents(c-o,p-u,f-v,I-E).normalize(),n)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,p-d,f-m,I-y).normalize();else if(s[4].setComponents(c-l,p-d,f-m,I-y).normalize(),t===Sn)s[5].setComponents(c+l,p+d,f+m,I+y).normalize();else if(t===qr)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){ci.center.set(0,0,0);const t=kf.distanceTo(e.center);return ci.radius=.7071067811865476+t,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ar.x=s.normal.x>0?e.max.x:e.min.x,Ar.y=s.normal.y>0?e.max.y:e.min.y,Ar.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tl extends Rt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tu extends Rt{constructor(e,t,n=Ci,s,r,a,o=Zt,l=Zt,c,h=$s,u=1){if(h!==$s&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new El(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nu extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _n extends Di{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const S=f*d-a;for(let E=0;E<c;E++){const y=E*u-r;g.push(y,-S,0),v.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){const E=S+c*f,y=S+c*(f+1),I=S+1+c*(f+1),P=S+1+c*f;p.push(E,y,P),p.push(y,I,P)}this.setIndex(p),this.setAttribute("position",new wi(g,3)),this.setAttribute("normal",new wi(v,3)),this.setAttribute("uv",new wi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.width,e.height,e.widthSegments,e.heightSegments)}}class Of extends na{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bf extends na{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ha={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class zf{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Hf=new zf;class Al{constructor(e){this.manager=e!==void 0?e:Hf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Al.DEFAULT_MATERIAL_NAME="__DEFAULT";const es=new WeakMap;class Vf extends Al{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ha.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=es.get(a);u===void 0&&(u=[],es.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=qs("img");function l(){h(),t&&t(this);const u=es.get(this)||[];for(let d=0;d<u.length;d++){const p=u[d];p.onLoad&&p.onLoad(this)}es.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Ha.remove(`image:${e}`);const d=es.get(this)||[];for(let p=0;p<d.length;p++){const g=d[p];g.onError&&g.onError(u)}es.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ha.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class iu extends Al{constructor(e){super(e)}load(e,t,n,s){const r=new Rt,a=new Vf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class su extends Jh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Gf extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function pc(i,e,t,n){const s=Wf(n);switch(t){case Hh:return i*e;case bl:return i*e/s.components*s.byteLength;case Ml:return i*e/s.components*s.byteLength;case Gh:return i*e*2/s.components*s.byteLength;case yl:return i*e*2/s.components*s.byteLength;case Vh:return i*e*3/s.components*s.byteLength;case pn:return i*e*4/s.components*s.byteLength;case Sl:return i*e*4/s.components*s.byteLength;case kr:case Or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Br:case zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Po:case Lo:return Math.max(i,16)*Math.max(e,8)/4;case Co:case Io:return Math.max(i,8)*Math.max(e,8)/2;case Do:case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case No:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ko:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $o:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case qo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ko:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case jo:case Zo:case Jo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qo:case el:return Math.ceil(i/4)*Math.ceil(e/4)*8;case tl:case nl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wf(i){switch(i){case Bn:case kh:return{byteLength:1,components:1};case Gs:case Oh:case Zs:return{byteLength:2,components:1};case _l:case xl:return{byteLength:2,components:4};case Ci:case vl:case yn:return{byteLength:4,components:1};case Bh:case zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ru(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function $f(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qf=`#ifdef USE_ALPHAHASH
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
#endif`,Yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jf=`#ifdef USE_AOMAP
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
#endif`,Qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ep=`#ifdef USE_BATCHING
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
#endif`,tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rp=`#ifdef USE_IRIDESCENCE
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
#endif`,ap=`#ifdef USE_BUMPMAP
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mp=`#define PI 3.141592653589793
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
} // validated`,gp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vp=`vec3 transformedNormal = objectNormal;
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
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ep=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dp=`#ifdef USE_GRADIENTMAP
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
}`,Up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kp=`uniform bool receiveShadow;
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
#endif`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gp=`PhysicalMaterial material;
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
#endif`,Wp=`struct PhysicalMaterial {
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
}`,$p=`
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
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tm=`#if defined( USE_POINTS_UV )
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
#endif`,nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`#ifdef USE_MORPHTARGETS
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
#endif`,lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pm=`#ifdef USE_NORMALMAP
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
#endif`,mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pm=`float getShadowMask() {
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
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lm=`#ifdef USE_SKINNING
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
#endif`,Dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Um=`#ifdef USE_SKINNING
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
#endif`,Nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Om=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bm=`#ifdef USE_TRANSMISSION
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
#endif`,zm=`#ifdef USE_TRANSMISSION
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xm=`uniform sampler2D t2D;
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`#include <common>
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
}`,Jm=`#if DEPTH_PACKING == 3200
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
}`,Qm=`#define DISTANCE
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
}`,e0=`#define DISTANCE
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
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
}`,s0=`uniform vec3 diffuse;
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
}`,r0=`#include <common>
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
}`,a0=`uniform vec3 diffuse;
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
}`,o0=`#define LAMBERT
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
}`,l0=`#define LAMBERT
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
}`,c0=`#define MATCAP
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
}`,h0=`#define MATCAP
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
}`,u0=`#define NORMAL
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
}`,d0=`#define NORMAL
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
}`,f0=`#define PHONG
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
}`,p0=`#define PHONG
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
}`,m0=`#define STANDARD
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
}`,g0=`#define STANDARD
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
}`,v0=`#define TOON
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
}`,_0=`#define TOON
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
}`,x0=`uniform float size;
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
}`,b0=`uniform vec3 diffuse;
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
}`,M0=`#include <common>
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
}`,y0=`uniform vec3 color;
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
}`,S0=`uniform float rotation;
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
}`,E0=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Xf,alphahash_pars_fragment:qf,alphamap_fragment:Yf,alphamap_pars_fragment:Kf,alphatest_fragment:jf,alphatest_pars_fragment:Zf,aomap_fragment:Jf,aomap_pars_fragment:Qf,batching_pars_vertex:ep,batching_vertex:tp,begin_vertex:np,beginnormal_vertex:ip,bsdfs:sp,iridescence_fragment:rp,bumpmap_pars_fragment:ap,clipping_planes_fragment:op,clipping_planes_pars_fragment:lp,clipping_planes_pars_vertex:cp,clipping_planes_vertex:hp,color_fragment:up,color_pars_fragment:dp,color_pars_vertex:fp,color_vertex:pp,common:mp,cube_uv_reflection_fragment:gp,defaultnormal_vertex:vp,displacementmap_pars_vertex:_p,displacementmap_vertex:xp,emissivemap_fragment:bp,emissivemap_pars_fragment:Mp,colorspace_fragment:yp,colorspace_pars_fragment:Sp,envmap_fragment:Ep,envmap_common_pars_fragment:wp,envmap_pars_fragment:Tp,envmap_pars_vertex:Ap,envmap_physical_pars_fragment:Op,envmap_vertex:Rp,fog_vertex:Cp,fog_pars_vertex:Pp,fog_fragment:Ip,fog_pars_fragment:Lp,gradientmap_pars_fragment:Dp,lightmap_pars_fragment:Up,lights_lambert_fragment:Np,lights_lambert_pars_fragment:Fp,lights_pars_begin:kp,lights_toon_fragment:Bp,lights_toon_pars_fragment:zp,lights_phong_fragment:Hp,lights_phong_pars_fragment:Vp,lights_physical_fragment:Gp,lights_physical_pars_fragment:Wp,lights_fragment_begin:$p,lights_fragment_maps:Xp,lights_fragment_end:qp,logdepthbuf_fragment:Yp,logdepthbuf_pars_fragment:Kp,logdepthbuf_pars_vertex:jp,logdepthbuf_vertex:Zp,map_fragment:Jp,map_pars_fragment:Qp,map_particle_fragment:em,map_particle_pars_fragment:tm,metalnessmap_fragment:nm,metalnessmap_pars_fragment:im,morphinstance_vertex:sm,morphcolor_vertex:rm,morphnormal_vertex:am,morphtarget_pars_vertex:om,morphtarget_vertex:lm,normal_fragment_begin:cm,normal_fragment_maps:hm,normal_pars_fragment:um,normal_pars_vertex:dm,normal_vertex:fm,normalmap_pars_fragment:pm,clearcoat_normal_fragment_begin:mm,clearcoat_normal_fragment_maps:gm,clearcoat_pars_fragment:vm,iridescence_pars_fragment:_m,opaque_fragment:xm,packing:bm,premultiplied_alpha_fragment:Mm,project_vertex:ym,dithering_fragment:Sm,dithering_pars_fragment:Em,roughnessmap_fragment:wm,roughnessmap_pars_fragment:Tm,shadowmap_pars_fragment:Am,shadowmap_pars_vertex:Rm,shadowmap_vertex:Cm,shadowmask_pars_fragment:Pm,skinbase_vertex:Im,skinning_pars_vertex:Lm,skinning_vertex:Dm,skinnormal_vertex:Um,specularmap_fragment:Nm,specularmap_pars_fragment:Fm,tonemapping_fragment:km,tonemapping_pars_fragment:Om,transmission_fragment:Bm,transmission_pars_fragment:zm,uv_pars_fragment:Hm,uv_pars_vertex:Vm,uv_vertex:Gm,worldpos_vertex:Wm,background_vert:$m,background_frag:Xm,backgroundCube_vert:qm,backgroundCube_frag:Ym,cube_vert:Km,cube_frag:jm,depth_vert:Zm,depth_frag:Jm,distanceRGBA_vert:Qm,distanceRGBA_frag:e0,equirect_vert:t0,equirect_frag:n0,linedashed_vert:i0,linedashed_frag:s0,meshbasic_vert:r0,meshbasic_frag:a0,meshlambert_vert:o0,meshlambert_frag:l0,meshmatcap_vert:c0,meshmatcap_frag:h0,meshnormal_vert:u0,meshnormal_frag:d0,meshphong_vert:f0,meshphong_frag:p0,meshphysical_vert:m0,meshphysical_frag:g0,meshtoon_vert:v0,meshtoon_frag:_0,points_vert:x0,points_frag:b0,shadow_vert:M0,shadow_frag:y0,sprite_vert:S0,sprite_frag:E0},de={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Mn={basic:{uniforms:Ut([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Ut([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Ut([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Ut([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Ut([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Ut([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Ut([de.points,de.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Ut([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Ut([de.common,de.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Ut([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Ut([de.sprite,de.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Ut([de.common,de.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Ut([de.lights,de.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Mn.physical={uniforms:Ut([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Rr={r:0,b:0,g:0},hi=new zn,w0=new ot;function T0(i,e,t,n,s,r,a){const o=new Ke(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function v(E){let y=!1;const I=g(E);I===null?f(o,l):I&&I.isColor&&(f(I,1),y=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){const I=g(y);I&&(I.isCubeTexture||I.mapping===ta)?(h===void 0&&(h=new Vt(new er(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Ms(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),hi.copy(y.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(w0.makeRotationFromEuler(hi)),h.material.toneMapped=Qe.getTransfer(I.colorSpace)!==it,(u!==I||d!==I.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=I,d=I.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new Vt(new _n(2,2),new Qn({name:"BackgroundMaterial",uniforms:Ms(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(I.colorSpace)!==it,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(u!==I||d!==I.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=I,d=I.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,y){E.getRGB(Rr,Zh(i)),n.buffers.color.setClear(Rr.r,Rr.g,Rr.b,y,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,y=1){o.set(E),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:v,addToRenderList:m,dispose:S}}function A0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(b,L,k,W,ee){let j=!1;const Z=u(W,k,L);r!==Z&&(r=Z,c(r.object)),j=p(b,W,k,ee),j&&g(b,W,k,ee),ee!==null&&e.update(ee,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,y(b,L,k,W),ee!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,L,k){const W=k.wireframe===!0;let ee=n[b.id];ee===void 0&&(ee={},n[b.id]=ee);let j=ee[L.id];j===void 0&&(j={},ee[L.id]=j);let Z=j[W];return Z===void 0&&(Z=d(l()),j[W]=Z),Z}function d(b){const L=[],k=[],W=[];for(let ee=0;ee<t;ee++)L[ee]=0,k[ee]=0,W[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:W,object:b,attributes:{},index:null}}function p(b,L,k,W){const ee=r.attributes,j=L.attributes;let Z=0;const ne=k.getAttributes();for(const G in ne)if(ne[G].location>=0){const me=ee[G];let ge=j[G];if(ge===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(ge=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(ge=b.instanceColor)),me===void 0||me.attribute!==ge||ge&&me.data!==ge.data)return!0;Z++}return r.attributesNum!==Z||r.index!==W}function g(b,L,k,W){const ee={},j=L.attributes;let Z=0;const ne=k.getAttributes();for(const G in ne)if(ne[G].location>=0){let me=j[G];me===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(me=b.instanceColor));const ge={};ge.attribute=me,me&&me.data&&(ge.data=me.data),ee[G]=ge,Z++}r.attributes=ee,r.attributesNum=Z,r.index=W}function v(){const b=r.newAttributes;for(let L=0,k=b.length;L<k;L++)b[L]=0}function m(b){f(b,0)}function f(b,L){const k=r.newAttributes,W=r.enabledAttributes,ee=r.attributeDivisors;k[b]=1,W[b]===0&&(i.enableVertexAttribArray(b),W[b]=1),ee[b]!==L&&(i.vertexAttribDivisor(b,L),ee[b]=L)}function S(){const b=r.newAttributes,L=r.enabledAttributes;for(let k=0,W=L.length;k<W;k++)L[k]!==b[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function E(b,L,k,W,ee,j,Z){Z===!0?i.vertexAttribIPointer(b,L,k,ee,j):i.vertexAttribPointer(b,L,k,W,ee,j)}function y(b,L,k,W){v();const ee=W.attributes,j=k.getAttributes(),Z=L.defaultAttributeValues;for(const ne in j){const G=j[ne];if(G.location>=0){let ce=ee[ne];if(ce===void 0&&(ne==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),ne==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor)),ce!==void 0){const me=ce.normalized,ge=ce.itemSize,De=e.get(ce);if(De===void 0)continue;const Ie=De.buffer,We=De.type,Ze=De.bytesPerElement,J=We===i.INT||We===i.UNSIGNED_INT||ce.gpuType===vl;if(ce.isInterleavedBufferAttribute){const ie=ce.data,be=ie.stride,Ae=ce.offset;if(ie.isInstancedInterleavedBuffer){for(let ve=0;ve<G.locationSize;ve++)f(G.location+ve,ie.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ve=0;ve<G.locationSize;ve++)m(G.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let ve=0;ve<G.locationSize;ve++)E(G.location+ve,ge/G.locationSize,We,me,be*Ze,(Ae+ge/G.locationSize*ve)*Ze,J)}else{if(ce.isInstancedBufferAttribute){for(let ie=0;ie<G.locationSize;ie++)f(G.location+ie,ce.meshPerAttribute);b.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ie=0;ie<G.locationSize;ie++)m(G.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let ie=0;ie<G.locationSize;ie++)E(G.location+ie,ge/G.locationSize,We,me,ge*Ze,ge/G.locationSize*ie*Ze,J)}}else if(Z!==void 0){const me=Z[ne];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(G.location,me);break;case 3:i.vertexAttrib3fv(G.location,me);break;case 4:i.vertexAttrib4fv(G.location,me);break;default:i.vertexAttrib1fv(G.location,me)}}}}S()}function I(){D();for(const b in n){const L=n[b];for(const k in L){const W=L[k];for(const ee in W)h(W[ee].object),delete W[ee];delete L[k]}delete n[b]}}function P(b){if(n[b.id]===void 0)return;const L=n[b.id];for(const k in L){const W=L[k];for(const ee in W)h(W[ee].object),delete W[ee];delete L[k]}delete n[b.id]}function T(b){for(const L in n){const k=n[L];if(k[b.id]===void 0)continue;const W=k[b.id];for(const ee in W)h(W[ee].object),delete W[ee];delete k[b.id]}}function D(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function R0(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function C0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==pn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const D=T===Zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Bn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==yn&&!D)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:I,maxSamples:P}}function P0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new vi,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,E=S*4;let y=f.clippingState||null;l.value=y,y=h(g,d,E,p);for(let I=0;I!==E;++I)y[I]=t[I];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,y=p;E!==v;++E,y+=4)a.copy(u[E]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function I0(i){let e=new WeakMap;function t(a,o){return o===To?a.mapping=_s:o===Ao&&(a.mapping=xs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===To||o===Ao)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new If(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ps=4,mc=[.125,.215,.35,.446,.526,.582],bi=20,Va=new su,gc=new Ke;let Ga=null,Wa=0,$a=0,Xa=!1;const _i=(1+Math.sqrt(5))/2,ts=1/_i,vc=[new O(-_i,ts,0),new O(_i,ts,0),new O(-ts,0,_i),new O(ts,0,_i),new O(0,_i,-ts),new O(0,_i,ts),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],L0=new O;class _c{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=L0}=r;Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ga,Wa,$a),this._renderer.xr.enabled=Xa,e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Zs,format:pn,colorSpace:bs,depthBuffer:!1},s=xc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D0(r)),this._blurMaterial=U0(r,e,t)}return s}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,n,s,r){const l=new dn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(gc),u.toneMapping=Fn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const v=new Kt({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),m=new Vt(new er,v);let f=!1;const S=e.background;S?S.isColor&&(v.color.copy(S),e.background=null,f=!0):(v.color.copy(gc),f=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const I=this._cubeSize;Cr(s,y*I,E>2?I:0,I,I),u.setRenderTarget(s),f&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===_s||e.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Vt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Cr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Va)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vc[(s-r-1)%vc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Vt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*bi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):bi;m>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);const f=[];let S=0;for(let T=0;T<bi;++T){const D=T/v,M=Math.exp(-D*D/2);f.push(M),T===0?S+=M:T<m&&(S+=2*M)}for(let T=0;T<f.length;T++)f[T]=f[T]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const y=this._sizeLods[s],I=3*y*(s>E-ps?s-E+ps:0),P=4*(this._cubeSize-y);Cr(t,I,P,3*y,2*y),l.setRenderTarget(t),l.render(u,Va)}}function D0(i){const e=[],t=[],n=[];let s=i;const r=i-ps+1+mc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ps?l=mc[a-i+ps-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,S=new Float32Array(v*g*p),E=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let P=0;P<p;P++){const T=P%3*2/3-1,D=P>2?0:-1,M=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];S.set(M,v*g*P),E.set(d,m*g*P);const b=[P,P,P,P,P,P];y.set(b,f*g*P)}const I=new Di;I.setAttribute("position",new mn(S,v)),I.setAttribute("uv",new mn(E,m)),I.setAttribute("faceIndex",new mn(y,f)),e.push(I),s>ps&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xc(i,e,t){const n=new Pi(i,e,t);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function U0(i,e,t){const n=new Float32Array(bi),s=new O(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function bc(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Mc(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Rl(){return`

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
	`}function N0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===To||l===Ao,h=l===_s||l===xs;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new _c(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new _c(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function F0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function k0(i,e,t,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const S=p.array;v=p.version;for(let E=0,y=S.length;E<y;E+=3){const I=S[E+0],P=S[E+1],T=S[E+2];d.push(I,P,P,T,T,I)}}else if(g!==void 0){const S=g.array;v=g.version;for(let E=0,y=S.length/3-1;E<y;E+=3){const I=E+0,P=E+1,T=E+2;d.push(I,P,P,T,T,I)}}else return;const m=new($h(d)?jh:Kh)(d,1);m.version=v;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function O0(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let f=0;for(let S=0;S<g;S++)f+=p[S]*v[S];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function B0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function z0(i,e,t){const n=new WeakMap,s=new gt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let b=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var p=b;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let I=o.attributes.position.count*y,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const T=new Float32Array(I*P*4*u),D=new Xh(T,I,P,u);D.type=yn,D.needsUpdate=!0;const M=y*4;for(let L=0;L<u;L++){const k=f[L],W=S[L],ee=E[L],j=I*P*4*L;for(let Z=0;Z<k.count;Z++){const ne=Z*M;g===!0&&(s.fromBufferAttribute(k,Z),T[j+ne+0]=s.x,T[j+ne+1]=s.y,T[j+ne+2]=s.z,T[j+ne+3]=0),v===!0&&(s.fromBufferAttribute(W,Z),T[j+ne+4]=s.x,T[j+ne+5]=s.y,T[j+ne+6]=s.z,T[j+ne+7]=0),m===!0&&(s.fromBufferAttribute(ee,Z),T[j+ne+8]=s.x,T[j+ne+9]=s.y,T[j+ne+10]=s.z,T[j+ne+11]=ee.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new et(I,P)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function H0(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const au=new Rt,yc=new tu(1,1),ou=new Xh,lu=new ff,cu=new Qh,Sc=[],Ec=[],wc=new Float32Array(16),Tc=new Float32Array(9),Ac=new Float32Array(4);function ws(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Sc[s];if(r===void 0&&(r=new Float32Array(s),Sc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ia(i,e){let t=Ec[e];t===void 0&&(t=new Int32Array(e),Ec[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function V0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function G0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function W0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function $0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function X0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,n))return;Ac.set(n),i.uniformMatrix2fv(this.addr,!1,Ac),yt(t,n)}}function q0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,n))return;Tc.set(n),i.uniformMatrix3fv(this.addr,!1,Tc),yt(t,n)}}function Y0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,n))return;wc.set(n),i.uniformMatrix4fv(this.addr,!1,wc),yt(t,n)}}function K0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function j0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function Z0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function J0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function Q0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function ng(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function ig(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(yc.compareFunction=Wh,r=yc):r=au,t.setTexture2D(e||r,s)}function sg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||lu,s)}function rg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||cu,s)}function ag(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ou,s)}function og(i){switch(i){case 5126:return V0;case 35664:return G0;case 35665:return W0;case 35666:return $0;case 35674:return X0;case 35675:return q0;case 35676:return Y0;case 5124:case 35670:return K0;case 35667:case 35671:return j0;case 35668:case 35672:return Z0;case 35669:case 35673:return J0;case 5125:return Q0;case 36294:return eg;case 36295:return tg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return ag}}function lg(i,e){i.uniform1fv(this.addr,e)}function cg(i,e){const t=ws(e,this.size,2);i.uniform2fv(this.addr,t)}function hg(i,e){const t=ws(e,this.size,3);i.uniform3fv(this.addr,t)}function ug(i,e){const t=ws(e,this.size,4);i.uniform4fv(this.addr,t)}function dg(i,e){const t=ws(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fg(i,e){const t=ws(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function pg(i,e){const t=ws(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mg(i,e){i.uniform1iv(this.addr,e)}function gg(i,e){i.uniform2iv(this.addr,e)}function vg(i,e){i.uniform3iv(this.addr,e)}function _g(i,e){i.uniform4iv(this.addr,e)}function xg(i,e){i.uniform1uiv(this.addr,e)}function bg(i,e){i.uniform2uiv(this.addr,e)}function Mg(i,e){i.uniform3uiv(this.addr,e)}function yg(i,e){i.uniform4uiv(this.addr,e)}function Sg(i,e,t){const n=this.cache,s=e.length,r=ia(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||au,r[a])}function Eg(i,e,t){const n=this.cache,s=e.length,r=ia(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||lu,r[a])}function wg(i,e,t){const n=this.cache,s=e.length,r=ia(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||cu,r[a])}function Tg(i,e,t){const n=this.cache,s=e.length,r=ia(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ou,r[a])}function Ag(i){switch(i){case 5126:return lg;case 35664:return cg;case 35665:return hg;case 35666:return ug;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return vg;case 35669:case 35673:return _g;case 5125:return xg;case 36294:return bg;case 36295:return Mg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Tg}}class Rg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=og(t.type)}}class Cg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ag(t.type)}}class Pg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const qa=/(\w+)(\])?(\[|\.)?/g;function Rc(i,e){i.seq.push(e),i.map[e.id]=e}function Ig(i,e,t){const n=i.name,s=n.length;for(qa.lastIndex=0;;){const r=qa.exec(n),a=qa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Rc(t,c===void 0?new Rg(o,i,e):new Cg(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Pg(o),Rc(t,u)),t=u}}}class Hr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Ig(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Cc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Lg=37297;let Dg=0;function Ug(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Pc=new ze;function Ng(i){Qe._getMatrix(Pc,Qe.workingColorSpace,i);const e=`mat3( ${Pc.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Xr:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ic(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ug(i.getShaderSource(e),o)}else return r}function Fg(i,e){const t=Ng(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function kg(i,e){let t;switch(e){case Bd:t="Linear";break;case zd:t="Reinhard";break;case Hd:t="Cineon";break;case Vd:t="ACESFilmic";break;case Wd:t="AgX";break;case $d:t="Neutral";break;case Gd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pr=new O;function Og(){Qe.getLuminanceCoefficients(Pr);const i=Pr.x.toFixed(4),e=Pr.y.toFixed(4),t=Pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function zg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Os(i){return i!==""}function Lc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(i){return i.replace(Vg,Wg)}const Gg=new Map;function Wg(i,e){let t=Ve[e];if(t===void 0){const n=Gg.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sl(t)}const $g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uc(i){return i.replace($g,Xg)}function Xg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function qg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===_d?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function Yg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _s:case xs:e="ENVMAP_TYPE_CUBE";break;case ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function jg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Nh:e="ENVMAP_BLENDING_MULTIPLY";break;case kd:e="ENVMAP_BLENDING_MIX";break;case Od:e="ENVMAP_BLENDING_ADD";break}return e}function Zg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Jg(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=qg(t),c=Yg(t),h=Kg(t),u=jg(t),d=Zg(t),p=Bg(t),g=zg(r),v=s.createProgram();let m,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Os).join(`
`),f.length>0&&(f+=`
`)):(m=[Nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),f=[Nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Fn?kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Fg("linearToOutputTexel",t.outputColorSpace),Og(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Os).join(`
`)),a=sl(a),a=Lc(a,t),a=Dc(a,t),o=sl(o),o=Lc(o,t),o=Dc(o,t),a=Uc(a),o=Uc(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=S+m+a,y=S+f+o,I=Cc(s,s.VERTEX_SHADER,E),P=Cc(s,s.FRAGMENT_SHADER,y);s.attachShader(v,I),s.attachShader(v,P),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(L){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(v)||"",W=s.getShaderInfoLog(I)||"",ee=s.getShaderInfoLog(P)||"",j=k.trim(),Z=W.trim(),ne=ee.trim();let G=!0,ce=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,I,P);else{const me=Ic(s,I,"vertex"),ge=Ic(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+j+`
`+me+`
`+ge)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(Z===""||ne==="")&&(ce=!1);ce&&(L.diagnostics={runnable:G,programLog:j,vertexShader:{log:Z,prefix:m},fragmentShader:{log:ne,prefix:f}})}s.deleteShader(I),s.deleteShader(P),D=new Hr(s,v),M=Hg(s,v)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,Lg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=P,this}let Qg=0;class ev{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new tv(e),t.set(e,n)),n}}class tv{constructor(e){this.id=Qg++,this.code=e,this.usedTimes=0}}function nv(i,e,t,n,s,r,a){const o=new qh,l=new ev,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,b,L,k,W){const ee=k.fog,j=W.geometry,Z=M.isMeshStandardMaterial?k.environment:null,ne=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),G=ne&&ne.mapping===ta?ne.image.height:null,ce=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const me=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ge=me!==void 0?me.length:0;let De=0;j.morphAttributes.position!==void 0&&(De=1),j.morphAttributes.normal!==void 0&&(De=2),j.morphAttributes.color!==void 0&&(De=3);let Ie,We,Ze,J;if(ce){const Be=Mn[ce];Ie=Be.vertexShader,We=Be.fragmentShader}else Ie=M.vertexShader,We=M.fragmentShader,l.update(M),Ze=l.getVertexShaderID(M),J=l.getFragmentShaderID(M);const ie=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Ae=W.isInstancedMesh===!0,ve=W.isBatchedMesh===!0,$e=!!M.map,He=!!M.matcap,R=!!ne,st=!!M.aoMap,Fe=!!M.lightMap,Re=!!M.bumpMap,Me=!!M.normalMap,rt=!!M.displacementMap,ye=!!M.emissiveMap,ke=!!M.metalnessMap,vt=!!M.roughnessMap,ht=M.anisotropy>0,w=M.clearcoat>0,_=M.dispersion>0,F=M.iridescence>0,Y=M.sheen>0,se=M.transmission>0,X=ht&&!!M.anisotropyMap,Se=w&&!!M.clearcoatMap,he=w&&!!M.clearcoatNormalMap,Ee=w&&!!M.clearcoatRoughnessMap,_e=F&&!!M.iridescenceMap,re=F&&!!M.iridescenceThicknessMap,ue=Y&&!!M.sheenColorMap,B=Y&&!!M.sheenRoughnessMap,H=!!M.specularMap,$=!!M.specularColorMap,oe=!!M.specularIntensityMap,C=se&&!!M.transmissionMap,Q=se&&!!M.thicknessMap,te=!!M.gradientMap,ae=!!M.alphaMap,K=M.alphaTest>0,q=!!M.alphaHash,fe=!!M.extensions;let Te=Fn;M.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Te=i.toneMapping);const Ge={shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:Ie,fragmentShader:We,defines:M.defines,customVertexShaderID:Ze,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:ve,batchingColor:ve&&W._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&W.instanceColor!==null,instancingMorph:Ae&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:bs,alphaToCoverage:!!M.alphaToCoverage,map:$e,matcap:He,envMap:R,envMapMode:R&&ne.mapping,envMapCubeUVHeight:G,aoMap:st,lightMap:Fe,bumpMap:Re,normalMap:Me,displacementMap:d&&rt,emissiveMap:ye,normalMapObjectSpace:Me&&M.normalMapType===jd,normalMapTangentSpace:Me&&M.normalMapType===Kd,metalnessMap:ke,roughnessMap:vt,anisotropy:ht,anisotropyMap:X,clearcoat:w,clearcoatMap:Se,clearcoatNormalMap:he,clearcoatRoughnessMap:Ee,dispersion:_,iridescence:F,iridescenceMap:_e,iridescenceThicknessMap:re,sheen:Y,sheenColorMap:ue,sheenRoughnessMap:B,specularMap:H,specularColorMap:$,specularIntensityMap:oe,transmission:se,transmissionMap:C,thicknessMap:Q,gradientMap:te,opaque:M.transparent===!1&&M.blending===Ei&&M.alphaToCoverage===!1,alphaMap:ae,alphaTest:K,alphaHash:q,combine:M.combine,mapUv:$e&&v(M.map.channel),aoMapUv:st&&v(M.aoMap.channel),lightMapUv:Fe&&v(M.lightMap.channel),bumpMapUv:Re&&v(M.bumpMap.channel),normalMapUv:Me&&v(M.normalMap.channel),displacementMapUv:rt&&v(M.displacementMap.channel),emissiveMapUv:ye&&v(M.emissiveMap.channel),metalnessMapUv:ke&&v(M.metalnessMap.channel),roughnessMapUv:vt&&v(M.roughnessMap.channel),anisotropyMapUv:X&&v(M.anisotropyMap.channel),clearcoatMapUv:Se&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:re&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:B&&v(M.sheenRoughnessMap.channel),specularMapUv:H&&v(M.specularMap.channel),specularColorMapUv:$&&v(M.specularColorMap.channel),specularIntensityMapUv:oe&&v(M.specularIntensityMap.channel),transmissionMapUv:C&&v(M.transmissionMap.channel),thicknessMapUv:Q&&v(M.thicknessMap.channel),alphaMapUv:ae&&v(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Me||ht),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!j.attributes.uv&&($e||ae),fog:!!ee,useFog:M.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:be,skinning:W.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:De,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:$e&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===it,decodeVideoTextureEmissive:ye&&M.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(M.emissiveMap.colorSpace)===it,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===rn,flipSided:M.side===Gt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:fe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&M.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function f(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)b.push(L),b.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(S(b,M),E(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function S(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function E(M,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){const b=g[M.type];let L;if(b){const k=Mn[b];L=Af.clone(k.uniforms)}else L=M.uniforms;return L}function I(M,b){let L;for(let k=0,W=h.length;k<W;k++){const ee=h[k];if(ee.cacheKey===b){L=ee,++L.usedTimes;break}}return L===void 0&&(L=new Jg(i,b,M,r),h.push(L)),L}function P(M){if(--M.usedTimes===0){const b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function T(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:I,releaseProgram:P,releaseShaderCache:T,programs:h,dispose:D}}function iv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function sv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Fc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,p,g,v,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),e++,f}function o(u,d,p,g,v,m){const f=a(u,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,g,v,m){const f=a(u,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||sv),n.length>1&&n.sort(d||Fc),s.length>1&&s.sort(d||Fc)}function h(){for(let u=e,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function rv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new kc,i.set(n,[a])):s>=r.length?(a=new kc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function av(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ke};break;case"SpotLight":t={position:new O,direction:new O,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function ov(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let lv=0;function cv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function hv(i){const e=new av,t=ov(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const s=new O,r=new ot,a=new ot;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,S=0,E=0,y=0,I=0,P=0,T=0;c.sort(cv);for(let M=0,b=c.length;M<b;M++){const L=c[M],k=L.color,W=L.intensity,ee=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=k.r*W,u+=k.g*W,d+=k.b*W;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(L.sh.coefficients[Z],W);T++}else if(L.isDirectionalLight){const Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ne=L.shadow,G=t.get(L);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=L.shadow.matrix,S++}n.directional[p]=Z,p++}else if(L.isSpotLight){const Z=e.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(k).multiplyScalar(W),Z.distance=ee,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,n.spot[v]=Z;const ne=L.shadow;if(L.map&&(n.spotLightMap[I]=L.map,I++,ne.updateMatrices(L),L.castShadow&&P++),n.spotLightMatrix[v]=ne.matrix,L.castShadow){const G=t.get(L);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=j,y++}v++}else if(L.isRectAreaLight){const Z=e.get(L);Z.color.copy(k).multiplyScalar(W),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=Z,m++}else if(L.isPointLight){const Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){const ne=L.shadow,G=t.get(L);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,G.shadowCameraNear=ne.camera.near,G.shadowCameraFar=ne.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=Z,g++}else if(L.isHemisphereLight){const Z=e.get(L);Z.skyColor.copy(L.color).multiplyScalar(W),Z.groundColor.copy(L.groundColor).multiplyScalar(W),n.hemi[f]=Z,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==S||D.numPointShadows!==E||D.numSpotShadows!==y||D.numSpotMaps!==I||D.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+I-P,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=T,D.directionalLength=p,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=S,D.numPointShadows=E,D.numSpotShadows=y,D.numSpotMaps=I,D.numLightProbes=T,n.version=lv++)}function l(c,h){let u=0,d=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){const E=c[f];if(E.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(E.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Oc(i){const e=new hv(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function uv(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Oc(i),e.set(s,[o])):r>=a.length?(o=new Oc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fv=`uniform sampler2D shadow_pass;
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
}`;function pv(i,e,t){let n=new eu;const s=new et,r=new et,a=new gt,o=new Of({depthPacking:Yd}),l=new Bf,c={},h=t.maxTextureSize,u={[Jn]:Gt,[Gt]:Jn,[rn]:rn},d=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:dv,fragmentShader:fv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Di;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Vt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uh;let f=this.type;this.render=function(P,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const M=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Zn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const W=f!==Dn&&this.type===Dn,ee=f===Dn&&this.type!==Dn;for(let j=0,Z=P.length;j<Z;j++){const ne=P[j],G=ne.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ce=G.getFrameExtents();if(s.multiply(ce),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,G.mapSize.y=r.y)),G.map===null||W===!0||ee===!0){const ge=this.type!==Dn?{minFilter:Zt,magFilter:Zt}:{};G.map!==null&&G.map.dispose(),G.map=new Pi(s.x,s.y,ge),G.map.texture.name=ne.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const me=G.getViewportCount();for(let ge=0;ge<me;ge++){const De=G.getViewport(ge);a.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),k.viewport(a),G.updateMatrices(ne,ge),n=G.getFrustum(),y(T,D,G.camera,ne,this.type)}G.isPointLightShadow!==!0&&this.type===Dn&&S(G,D),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,b,L)};function S(P,T){const D=e.update(v);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Pi(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(T,null,D,d,v,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(T,null,D,p,v,null)}function E(P,T,D,M){let b=null;const L=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)b=L;else if(b=D.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const k=b.uuid,W=T.uuid;let ee=c[k];ee===void 0&&(ee={},c[k]=ee);let j=ee[W];j===void 0&&(j=b.clone(),ee[W]=j,T.addEventListener("dispose",I)),b=j}if(b.visible=T.visible,b.wireframe=T.wireframe,M===Dn?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const k=i.properties.get(b);k.light=D}return b}function y(P,T,D,M,b){if(P.visible===!1)return;if(P.layers.test(T.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===Dn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const W=e.update(P),ee=P.material;if(Array.isArray(ee)){const j=W.groups;for(let Z=0,ne=j.length;Z<ne;Z++){const G=j[Z],ce=ee[G.materialIndex];if(ce&&ce.visible){const me=E(P,ce,M,b);P.onBeforeShadow(i,P,T,D,W,me,G),i.renderBufferDirect(D,null,W,me,P,G),P.onAfterShadow(i,P,T,D,W,me,G)}}}else if(ee.visible){const j=E(P,ee,M,b);P.onBeforeShadow(i,P,T,D,W,j,null),i.renderBufferDirect(D,null,W,j,P,null),P.onAfterShadow(i,P,T,D,W,j,null)}}const k=P.children;for(let W=0,ee=k.length;W<ee;W++)y(k[W],T,D,M,b)}function I(P){P.target.removeEventListener("dispose",I);for(const D in c){const M=c[D],b=P.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const mv={[xo]:bo,[Mo]:Eo,[yo]:wo,[vs]:So,[bo]:xo,[Eo]:Mo,[wo]:yo,[So]:vs};function gv(i,e){function t(){let C=!1;const Q=new gt;let te=null;const ae=new gt(0,0,0,0);return{setMask:function(K){te!==K&&!C&&(i.colorMask(K,K,K,K),te=K)},setLocked:function(K){C=K},setClear:function(K,q,fe,Te,Ge){Ge===!0&&(K*=Te,q*=Te,fe*=Te),Q.set(K,q,fe,Te),ae.equals(Q)===!1&&(i.clearColor(K,q,fe,Te),ae.copy(Q))},reset:function(){C=!1,te=null,ae.set(-1,0,0,0)}}}function n(){let C=!1,Q=!1,te=null,ae=null,K=null;return{setReversed:function(q){if(Q!==q){const fe=e.get("EXT_clip_control");q?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),Q=q;const Te=K;K=null,this.setClear(Te)}},getReversed:function(){return Q},setTest:function(q){q?ie(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(q){te!==q&&!C&&(i.depthMask(q),te=q)},setFunc:function(q){if(Q&&(q=mv[q]),ae!==q){switch(q){case xo:i.depthFunc(i.NEVER);break;case bo:i.depthFunc(i.ALWAYS);break;case Mo:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case yo:i.depthFunc(i.EQUAL);break;case So:i.depthFunc(i.GEQUAL);break;case Eo:i.depthFunc(i.GREATER);break;case wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=q}},setLocked:function(q){C=q},setClear:function(q){K!==q&&(Q&&(q=1-q),i.clearDepth(q),K=q)},reset:function(){C=!1,te=null,ae=null,K=null,Q=!1}}}function s(){let C=!1,Q=null,te=null,ae=null,K=null,q=null,fe=null,Te=null,Ge=null;return{setTest:function(Be){C||(Be?ie(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Be){Q!==Be&&!C&&(i.stencilMask(Be),Q=Be)},setFunc:function(Be,It,mt){(te!==Be||ae!==It||K!==mt)&&(i.stencilFunc(Be,It,mt),te=Be,ae=It,K=mt)},setOp:function(Be,It,mt){(q!==Be||fe!==It||Te!==mt)&&(i.stencilOp(Be,It,mt),q=Be,fe=It,Te=mt)},setLocked:function(Be){C=Be},setClear:function(Be){Ge!==Be&&(i.clearStencil(Be),Ge=Be)},reset:function(){C=!1,Q=null,te=null,ae=null,K=null,q=null,fe=null,Te=null,Ge=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,S=null,E=null,y=null,I=null,P=null,T=new Ke(0,0,0),D=0,M=!1,b=null,L=null,k=null,W=null,ee=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ne=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(G)[1]),Z=ne>=1):G.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Z=ne>=2);let ce=null,me={};const ge=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),Ie=new gt().fromArray(ge),We=new gt().fromArray(De);function Ze(C,Q,te,ae){const K=new Uint8Array(4),q=i.createTexture();i.bindTexture(C,q),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let fe=0;fe<te;fe++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,K):i.texImage2D(Q+fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,K);return q}const J={};J[i.TEXTURE_2D]=Ze(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),a.setFunc(vs),Re(!1),Me(Gl),ie(i.CULL_FACE),st(Zn);function ie(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function be(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function Ae(C,Q){return u[C]!==Q?(i.bindFramebuffer(C,Q),u[C]=Q,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Q),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function ve(C,Q){let te=p,ae=!1;if(C){te=d.get(Q),te===void 0&&(te=[],d.set(Q,te));const K=C.textures;if(te.length!==K.length||te[0]!==i.COLOR_ATTACHMENT0){for(let q=0,fe=K.length;q<fe;q++)te[q]=i.COLOR_ATTACHMENT0+q;te.length=K.length,ae=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,ae=!0);ae&&i.drawBuffers(te)}function $e(C){return g!==C?(i.useProgram(C),g=C,!0):!1}const He={[xi]:i.FUNC_ADD,[bd]:i.FUNC_SUBTRACT,[Md]:i.FUNC_REVERSE_SUBTRACT};He[yd]=i.MIN,He[Sd]=i.MAX;const R={[Ed]:i.ZERO,[wd]:i.ONE,[Td]:i.SRC_COLOR,[vo]:i.SRC_ALPHA,[Ld]:i.SRC_ALPHA_SATURATE,[Pd]:i.DST_COLOR,[Rd]:i.DST_ALPHA,[Ad]:i.ONE_MINUS_SRC_COLOR,[_o]:i.ONE_MINUS_SRC_ALPHA,[Id]:i.ONE_MINUS_DST_COLOR,[Cd]:i.ONE_MINUS_DST_ALPHA,[Dd]:i.CONSTANT_COLOR,[Ud]:i.ONE_MINUS_CONSTANT_COLOR,[Nd]:i.CONSTANT_ALPHA,[Fd]:i.ONE_MINUS_CONSTANT_ALPHA};function st(C,Q,te,ae,K,q,fe,Te,Ge,Be){if(C===Zn){v===!0&&(be(i.BLEND),v=!1);return}if(v===!1&&(ie(i.BLEND),v=!0),C!==xd){if(C!==m||Be!==M){if((f!==xi||y!==xi)&&(i.blendEquation(i.FUNC_ADD),f=xi,y=xi),Be)switch(C){case Ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wr:i.blendFunc(i.ONE,i.ONE);break;case Wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $l:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $l:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}S=null,E=null,I=null,P=null,T.set(0,0,0),D=0,m=C,M=Be}return}K=K||Q,q=q||te,fe=fe||ae,(Q!==f||K!==y)&&(i.blendEquationSeparate(He[Q],He[K]),f=Q,y=K),(te!==S||ae!==E||q!==I||fe!==P)&&(i.blendFuncSeparate(R[te],R[ae],R[q],R[fe]),S=te,E=ae,I=q,P=fe),(Te.equals(T)===!1||Ge!==D)&&(i.blendColor(Te.r,Te.g,Te.b,Ge),T.copy(Te),D=Ge),m=C,M=!1}function Fe(C,Q){C.side===rn?be(i.CULL_FACE):ie(i.CULL_FACE);let te=C.side===Gt;Q&&(te=!te),Re(te),C.blending===Ei&&C.transparent===!1?st(Zn):st(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);const ae=C.stencilWrite;o.setTest(ae),ae&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),ye(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(C){b!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),b=C)}function Me(C){C!==gd?(ie(i.CULL_FACE),C!==L&&(C===Gl?i.cullFace(i.BACK):C===vd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),L=C}function rt(C){C!==k&&(Z&&i.lineWidth(C),k=C)}function ye(C,Q,te){C?(ie(i.POLYGON_OFFSET_FILL),(W!==Q||ee!==te)&&(i.polygonOffset(Q,te),W=Q,ee=te)):be(i.POLYGON_OFFSET_FILL)}function ke(C){C?ie(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function vt(C){C===void 0&&(C=i.TEXTURE0+j-1),ce!==C&&(i.activeTexture(C),ce=C)}function ht(C,Q,te){te===void 0&&(ce===null?te=i.TEXTURE0+j-1:te=ce);let ae=me[te];ae===void 0&&(ae={type:void 0,texture:void 0},me[te]=ae),(ae.type!==C||ae.texture!==Q)&&(ce!==te&&(i.activeTexture(te),ce=te),i.bindTexture(C,Q||J[C]),ae.type=C,ae.texture=Q)}function w(){const C=me[ce];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Y(){try{i.texSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function se(){try{i.texSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{i.texStorage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ee(){try{i.texStorage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{i.texImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function re(){try{i.texImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(C){Ie.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Ie.copy(C))}function B(C){We.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),We.copy(C))}function H(C,Q){let te=c.get(Q);te===void 0&&(te=new WeakMap,c.set(Q,te));let ae=te.get(C);ae===void 0&&(ae=i.getUniformBlockIndex(Q,C.name),te.set(C,ae))}function $(C,Q){const ae=c.get(Q).get(C);l.get(Q)!==ae&&(i.uniformBlockBinding(Q,ae,C.__bindingPointIndex),l.set(Q,ae))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ce=null,me={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,S=null,E=null,y=null,I=null,P=null,T=new Ke(0,0,0),D=0,M=!1,b=null,L=null,k=null,W=null,ee=null,Ie.set(0,0,i.canvas.width,i.canvas.height),We.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:be,bindFramebuffer:Ae,drawBuffers:ve,useProgram:$e,setBlending:st,setMaterial:Fe,setFlipSided:Re,setCullFace:Me,setLineWidth:rt,setPolygonOffset:ye,setScissorTest:ke,activeTexture:vt,bindTexture:ht,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:_e,texImage3D:re,updateUBOMapping:H,uniformBlockBinding:$,texStorage2D:he,texStorage3D:Ee,texSubImage2D:Y,texSubImage3D:se,compressedTexSubImage2D:X,compressedTexSubImage3D:Se,scissor:ue,viewport:B,reset:oe}}function vv(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return p?new OffscreenCanvas(w,_):qs("canvas")}function v(w,_,F){let Y=1;const se=ht(w);if((se.width>F||se.height>F)&&(Y=F/Math.max(se.width,se.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const X=Math.floor(Y*se.width),Se=Math.floor(Y*se.height);u===void 0&&(u=g(X,Se));const he=_?g(X,Se):u;return he.width=X,he.height=Se,he.getContext("2d").drawImage(w,0,0,X,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+X+"x"+Se+")."),he}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){i.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,_,F,Y,se=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let X=_;if(_===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),_===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),_===i.RGBA){const Se=se?Xr:Qe.getTransfer(Y);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=Se===it?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function y(w,_){let F;return w?_===null||_===Ci||_===Ws?F=i.DEPTH24_STENCIL8:_===yn?F=i.DEPTH32F_STENCIL8:_===Gs&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ci||_===Ws?F=i.DEPTH_COMPONENT24:_===yn?F=i.DEPTH_COMPONENT32F:_===Gs&&(F=i.DEPTH_COMPONENT16),F}function I(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Zt&&w.minFilter!==jt?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function P(w){const _=w.target;_.removeEventListener("dispose",P),D(_),_.isVideoTexture&&h.delete(_)}function T(w){const _=w.target;_.removeEventListener("dispose",T),b(_)}function D(w){const _=n.get(w);if(_.__webglInit===void 0)return;const F=w.source,Y=d.get(F);if(Y){const se=Y[_.__cacheKey];se.usedTimes--,se.usedTimes===0&&M(w),Object.keys(Y).length===0&&d.delete(F)}n.remove(w)}function M(w){const _=n.get(w);i.deleteTexture(_.__webglTexture);const F=w.source,Y=d.get(F);delete Y[_.__cacheKey],a.memory.textures--}function b(w){const _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let se=0;se<_.__webglFramebuffer[Y].length;se++)i.deleteFramebuffer(_.__webglFramebuffer[Y][se]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=w.textures;for(let Y=0,se=F.length;Y<se;Y++){const X=n.get(F[Y]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(F[Y])}n.remove(w)}let L=0;function k(){L=0}function W(){const w=L;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),L+=1,w}function ee(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function j(w,_){const F=n.get(w);if(w.isVideoTexture&&ke(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){const Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(F,w,_);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function Z(w,_){const F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){J(F,w,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function ne(w,_){const F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){J(F,w,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function G(w,_){const F=n.get(w);if(w.version>0&&F.__version!==w.version){ie(F,w,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const ce={[$r]:i.REPEAT,[yi]:i.CLAMP_TO_EDGE,[Ro]:i.MIRRORED_REPEAT},me={[Zt]:i.NEAREST,[Xd]:i.NEAREST_MIPMAP_NEAREST,[lr]:i.NEAREST_MIPMAP_LINEAR,[jt]:i.LINEAR,[ga]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},ge={[Zd]:i.NEVER,[sf]:i.ALWAYS,[Jd]:i.LESS,[Wh]:i.LEQUAL,[Qd]:i.EQUAL,[nf]:i.GEQUAL,[ef]:i.GREATER,[tf]:i.NOTEQUAL};function De(w,_){if(_.type===yn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===jt||_.magFilter===ga||_.magFilter===lr||_.magFilter===Si||_.minFilter===jt||_.minFilter===ga||_.minFilter===lr||_.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ce[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ce[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ce[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,me[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,me[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ge[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Zt||_.minFilter!==lr&&_.minFilter!==Si||_.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ie(w,_){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",P));const Y=_.source;let se=d.get(Y);se===void 0&&(se={},d.set(Y,se));const X=ee(_);if(X!==w.__cacheKey){se[X]===void 0&&(se[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),se[X].usedTimes++;const Se=se[w.__cacheKey];Se!==void 0&&(se[w.__cacheKey].usedTimes--,Se.usedTimes===0&&M(_)),w.__cacheKey=X,w.__webglTexture=se[X].texture}return F}function We(w,_,F){return Math.floor(Math.floor(w/F)/_)}function Ze(w,_,F,Y){const X=w.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,Y,_.data);else{X.sort((re,ue)=>re.start-ue.start);let Se=0;for(let re=1;re<X.length;re++){const ue=X[Se],B=X[re],H=ue.start+ue.count,$=We(B.start,_.width,4),oe=We(ue.start,_.width,4);B.start<=H+1&&$===oe&&We(B.start+B.count-1,_.width,4)===$?ue.count=Math.max(ue.count,B.start+B.count-ue.start):(++Se,X[Se]=B)}X.length=Se+1;const he=i.getParameter(i.UNPACK_ROW_LENGTH),Ee=i.getParameter(i.UNPACK_SKIP_PIXELS),_e=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let re=0,ue=X.length;re<ue;re++){const B=X[re],H=Math.floor(B.start/4),$=Math.ceil(B.count/4),oe=H%_.width,C=Math.floor(H/_.width),Q=$,te=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,C),t.texSubImage2D(i.TEXTURE_2D,0,oe,C,Q,te,F,Y,_.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,he),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function J(w,_,F){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);const se=Ie(w,_),X=_.source;t.bindTexture(Y,w.__webglTexture,i.TEXTURE0+F);const Se=n.get(X);if(X.version!==Se.__version||se===!0){t.activeTexture(i.TEXTURE0+F);const he=Qe.getPrimaries(Qe.workingColorSpace),Ee=_.colorSpace===Un?null:Qe.getPrimaries(_.colorSpace),_e=_.colorSpace===Un||he===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let re=v(_.image,!1,s.maxTextureSize);re=vt(_,re);const ue=r.convert(_.format,_.colorSpace),B=r.convert(_.type);let H=E(_.internalFormat,ue,B,_.colorSpace,_.isVideoTexture);De(Y,_);let $;const oe=_.mipmaps,C=_.isVideoTexture!==!0,Q=Se.__version===void 0||se===!0,te=X.dataReady,ae=I(_,re);if(_.isDepthTexture)H=y(_.format===Xs,_.type),Q&&(C?t.texStorage2D(i.TEXTURE_2D,1,H,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,H,re.width,re.height,0,ue,B,null));else if(_.isDataTexture)if(oe.length>0){C&&Q&&t.texStorage2D(i.TEXTURE_2D,ae,H,oe[0].width,oe[0].height);for(let K=0,q=oe.length;K<q;K++)$=oe[K],C?te&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,$.width,$.height,ue,B,$.data):t.texImage2D(i.TEXTURE_2D,K,H,$.width,$.height,0,ue,B,$.data);_.generateMipmaps=!1}else C?(Q&&t.texStorage2D(i.TEXTURE_2D,ae,H,re.width,re.height),te&&Ze(_,re,ue,B)):t.texImage2D(i.TEXTURE_2D,0,H,re.width,re.height,0,ue,B,re.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){C&&Q&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,H,oe[0].width,oe[0].height,re.depth);for(let K=0,q=oe.length;K<q;K++)if($=oe[K],_.format!==pn)if(ue!==null)if(C){if(te)if(_.layerUpdates.size>0){const fe=pc($.width,$.height,_.format,_.type);for(const Te of _.layerUpdates){const Ge=$.data.subarray(Te*fe/$.data.BYTES_PER_ELEMENT,(Te+1)*fe/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Te,$.width,$.height,1,ue,Ge)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,$.width,$.height,re.depth,ue,$.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,H,$.width,$.height,re.depth,0,$.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else C?te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,$.width,$.height,re.depth,ue,B,$.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,H,$.width,$.height,re.depth,0,ue,B,$.data)}else{C&&Q&&t.texStorage2D(i.TEXTURE_2D,ae,H,oe[0].width,oe[0].height);for(let K=0,q=oe.length;K<q;K++)$=oe[K],_.format!==pn?ue!==null?C?te&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,$.width,$.height,ue,$.data):t.compressedTexImage2D(i.TEXTURE_2D,K,H,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?te&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,$.width,$.height,ue,B,$.data):t.texImage2D(i.TEXTURE_2D,K,H,$.width,$.height,0,ue,B,$.data)}else if(_.isDataArrayTexture)if(C){if(Q&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,H,re.width,re.height,re.depth),te)if(_.layerUpdates.size>0){const K=pc(re.width,re.height,_.format,_.type);for(const q of _.layerUpdates){const fe=re.data.subarray(q*K/re.data.BYTES_PER_ELEMENT,(q+1)*K/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,re.width,re.height,1,ue,B,fe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ue,B,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,H,re.width,re.height,re.depth,0,ue,B,re.data);else if(_.isData3DTexture)C?(Q&&t.texStorage3D(i.TEXTURE_3D,ae,H,re.width,re.height,re.depth),te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ue,B,re.data)):t.texImage3D(i.TEXTURE_3D,0,H,re.width,re.height,re.depth,0,ue,B,re.data);else if(_.isFramebufferTexture){if(Q)if(C)t.texStorage2D(i.TEXTURE_2D,ae,H,re.width,re.height);else{let K=re.width,q=re.height;for(let fe=0;fe<ae;fe++)t.texImage2D(i.TEXTURE_2D,fe,H,K,q,0,ue,B,null),K>>=1,q>>=1}}else if(oe.length>0){if(C&&Q){const K=ht(oe[0]);t.texStorage2D(i.TEXTURE_2D,ae,H,K.width,K.height)}for(let K=0,q=oe.length;K<q;K++)$=oe[K],C?te&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ue,B,$):t.texImage2D(i.TEXTURE_2D,K,H,ue,B,$);_.generateMipmaps=!1}else if(C){if(Q){const K=ht(re);t.texStorage2D(i.TEXTURE_2D,ae,H,K.width,K.height)}te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,B,re)}else t.texImage2D(i.TEXTURE_2D,0,H,ue,B,re);m(_)&&f(Y),Se.__version=X.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ie(w,_,F){if(_.image.length!==6)return;const Y=Ie(w,_),se=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);const X=n.get(se);if(se.version!==X.__version||Y===!0){t.activeTexture(i.TEXTURE0+F);const Se=Qe.getPrimaries(Qe.workingColorSpace),he=_.colorSpace===Un?null:Qe.getPrimaries(_.colorSpace),Ee=_.colorSpace===Un||Se===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const _e=_.isCompressedTexture||_.image[0].isCompressedTexture,re=_.image[0]&&_.image[0].isDataTexture,ue=[];for(let q=0;q<6;q++)!_e&&!re?ue[q]=v(_.image[q],!0,s.maxCubemapSize):ue[q]=re?_.image[q].image:_.image[q],ue[q]=vt(_,ue[q]);const B=ue[0],H=r.convert(_.format,_.colorSpace),$=r.convert(_.type),oe=E(_.internalFormat,H,$,_.colorSpace),C=_.isVideoTexture!==!0,Q=X.__version===void 0||Y===!0,te=se.dataReady;let ae=I(_,B);De(i.TEXTURE_CUBE_MAP,_);let K;if(_e){C&&Q&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,oe,B.width,B.height);for(let q=0;q<6;q++){K=ue[q].mipmaps;for(let fe=0;fe<K.length;fe++){const Te=K[fe];_.format!==pn?H!==null?C?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,fe,0,0,Te.width,Te.height,H,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,fe,oe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,fe,0,0,Te.width,Te.height,H,$,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,fe,oe,Te.width,Te.height,0,H,$,Te.data)}}}else{if(K=_.mipmaps,C&&Q){K.length>0&&ae++;const q=ht(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,oe,q.width,q.height)}for(let q=0;q<6;q++)if(re){C?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ue[q].width,ue[q].height,H,$,ue[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,oe,ue[q].width,ue[q].height,0,H,$,ue[q].data);for(let fe=0;fe<K.length;fe++){const Ge=K[fe].image[q].image;C?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,fe+1,0,0,Ge.width,Ge.height,H,$,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,fe+1,oe,Ge.width,Ge.height,0,H,$,Ge.data)}}else{C?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,H,$,ue[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,oe,H,$,ue[q]);for(let fe=0;fe<K.length;fe++){const Te=K[fe];C?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,fe+1,0,0,H,$,Te.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,fe+1,oe,H,$,Te.image[q])}}}m(_)&&f(i.TEXTURE_CUBE_MAP),X.__version=se.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function be(w,_,F,Y,se,X){const Se=r.convert(F.format,F.colorSpace),he=r.convert(F.type),Ee=E(F.internalFormat,Se,he,F.colorSpace),_e=n.get(_),re=n.get(F);if(re.__renderTarget=_,!_e.__hasExternalTextures){const ue=Math.max(1,_.width>>X),B=Math.max(1,_.height>>X);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,X,Ee,ue,B,_.depth,0,Se,he,null):t.texImage2D(se,X,Ee,ue,B,0,Se,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ye(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,se,re.__webglTexture,0,rt(_)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,se,re.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(w,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){const Y=_.depthTexture,se=Y&&Y.isDepthTexture?Y.type:null,X=y(_.stencilBuffer,se),Se=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=rt(_);ye(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,X,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,X,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,X,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,w)}else{const Y=_.textures;for(let se=0;se<Y.length;se++){const X=Y[se],Se=r.convert(X.format,X.colorSpace),he=r.convert(X.type),Ee=E(X.internalFormat,Se,he,X.colorSpace),_e=rt(_);F&&ye(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,Ee,_.width,_.height):ye(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,Ee,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const se=Y.__webglTexture,X=rt(_);if(_.depthTexture.format===$s)ye(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(_.depthTexture.format===Xs)ye(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function $e(w){const _=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const se=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",se)};Y.addEventListener("dispose",se),_.__depthDisposeCallback=se}_.__boundDepthTexture=Y}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const Y=w.texture.mipmaps;Y&&Y.length>0?ve(_.__webglFramebuffer[0],w):ve(_.__webglFramebuffer,w)}else if(F){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),Ae(_.__webglDepthbuffer[Y],w,!1);else{const se=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,X)}}else{const Y=w.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ae(_.__webglDepthbuffer,w,!1);else{const se=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(w,_,F){const Y=n.get(w);_!==void 0&&be(Y.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&$e(w)}function R(w){const _=w.texture,F=n.get(w),Y=n.get(_);w.addEventListener("dispose",T);const se=w.textures,X=w.isWebGLCubeRenderTarget===!0,Se=se.length>1;if(Se||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[he]=[];for(let Ee=0;Ee<_.mipmaps.length;Ee++)F.__webglFramebuffer[he][Ee]=i.createFramebuffer()}else F.__webglFramebuffer[he]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let he=0;he<_.mipmaps.length;he++)F.__webglFramebuffer[he]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Se)for(let he=0,Ee=se.length;he<Ee;he++){const _e=n.get(se[he]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ye(w)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let he=0;he<se.length;he++){const Ee=se[he];F.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[he]);const _e=r.convert(Ee.format,Ee.colorSpace),re=r.convert(Ee.type),ue=E(Ee.internalFormat,_e,re,Ee.colorSpace,w.isXRRenderTarget===!0),B=rt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,B,ue,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,F.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),De(i.TEXTURE_CUBE_MAP,_);for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ee=0;Ee<_.mipmaps.length;Ee++)be(F.__webglFramebuffer[he][Ee],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee);else be(F.__webglFramebuffer[he],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(_)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let he=0,Ee=se.length;he<Ee;he++){const _e=se[he],re=n.get(_e);let ue=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ue=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,re.__webglTexture),De(ue,_e),be(F.__webglFramebuffer,w,_e,i.COLOR_ATTACHMENT0+he,ue,0),m(_e)&&f(ue)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(he=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,Y.__webglTexture),De(he,_),_.mipmaps&&_.mipmaps.length>0)for(let Ee=0;Ee<_.mipmaps.length;Ee++)be(F.__webglFramebuffer[Ee],w,_,i.COLOR_ATTACHMENT0,he,Ee);else be(F.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,he,0);m(_)&&f(he),t.unbindTexture()}w.depthBuffer&&$e(w)}function st(w){const _=w.textures;for(let F=0,Y=_.length;F<Y;F++){const se=_[F];if(m(se)){const X=S(w),Se=n.get(se).__webglTexture;t.bindTexture(X,Se),f(X),t.unbindTexture()}}}const Fe=[],Re=[];function Me(w){if(w.samples>0){if(ye(w)===!1){const _=w.textures,F=w.width,Y=w.height;let se=i.COLOR_BUFFER_BIT;const X=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(w),he=_.length>1;if(he)for(let _e=0;_e<_.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Ee=w.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let _e=0;_e<_.length;_e++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[_e]);const re=n.get(_[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,se,i.NEAREST),l===!0&&(Fe.length=0,Re.length=0,Fe.push(i.COLOR_ATTACHMENT0+_e),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Fe.push(X),Re.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let _e=0;_e<_.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Se.__webglColorRenderbuffer[_e]);const re=n.get(_[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function rt(w){return Math.min(s.maxSamples,w.samples)}function ye(w){const _=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ke(w){const _=a.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function vt(w,_){const F=w.colorSpace,Y=w.format,se=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==bs&&F!==Un&&(Qe.getTransfer(F)===it?(Y!==pn||se!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function ht(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=k,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=ne,this.setTextureCube=G,this.rebindTextures=He,this.setupRenderTarget=R,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ye}function _v(i,e){function t(n,s=Un){let r;const a=Qe.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===kh)return i.BYTE;if(n===Oh)return i.SHORT;if(n===Gs)return i.UNSIGNED_SHORT;if(n===vl)return i.INT;if(n===Ci)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===Zs)return i.HALF_FLOAT;if(n===Hh)return i.ALPHA;if(n===Vh)return i.RGB;if(n===pn)return i.RGBA;if(n===$s)return i.DEPTH_COMPONENT;if(n===Xs)return i.DEPTH_STENCIL;if(n===bl)return i.RED;if(n===Ml)return i.RED_INTEGER;if(n===Gh)return i.RG;if(n===yl)return i.RG_INTEGER;if(n===Sl)return i.RGBA_INTEGER;if(n===kr||n===Or||n===Br||n===zr)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Co||n===Po||n===Io||n===Lo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Co)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Do||n===Uo||n===No)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Do||n===Uo)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===No)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fo||n===ko||n===Oo||n===Bo||n===zo||n===Ho||n===Vo||n===Go||n===Wo||n===$o||n===Xo||n===qo||n===Yo||n===Ko)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ko)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ho)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Go)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$o)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ko)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jo||n===Zo||n===Jo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===jo)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qo||n===el||n===tl||n===nl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bv=`
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

}`;class Mv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new nu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Qn({vertexShader:xv,fragmentShader:bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new _n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yv extends Es{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Mv,f={},S=t.getContextAttributes();let E=null,y=null;const I=[],P=[],T=new et;let D=null;const M=new dn;M.viewport=new gt;const b=new dn;b.viewport=new gt;const L=[M,b],k=new Gf;let W=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ie=I[J];return ie===void 0&&(ie=new Ba,I[J]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(J){let ie=I[J];return ie===void 0&&(ie=new Ba,I[J]=ie),ie.getGripSpace()},this.getHand=function(J){let ie=I[J];return ie===void 0&&(ie=new Ba,I[J]=ie),ie.getHandSpace()};function j(J){const ie=P.indexOf(J.inputSource);if(ie===-1)return;const be=I[ie];be!==void 0&&(be.update(J.inputSource,J.frame,c||a),be.dispatchEvent({type:J.type,data:J.inputSource}))}function Z(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",ne);for(let J=0;J<I.length;J++){const ie=P[J];ie!==null&&(P[J]=null,I[J].disconnect(ie))}W=null,ee=null,m.reset();for(const J in f)delete f[J];e.setRenderTarget(E),p=null,d=null,u=null,s=null,y=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",ne),S.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ae=null,ve=null;S.depth&&(ve=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=S.stencil?Xs:$s,Ae=S.stencil?Ws:Ci);const $e={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer($e),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Pi(d.textureWidth,d.textureHeight,{format:pn,type:Bn,depthTexture:new tu(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const be={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Pi(p.framebufferWidth,p.framebufferHeight,{format:pn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ze.setContext(s),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(J){for(let ie=0;ie<J.removed.length;ie++){const be=J.removed[ie],Ae=P.indexOf(be);Ae>=0&&(P[Ae]=null,I[Ae].disconnect(be))}for(let ie=0;ie<J.added.length;ie++){const be=J.added[ie];let Ae=P.indexOf(be);if(Ae===-1){for(let $e=0;$e<I.length;$e++)if($e>=P.length){P.push(be),Ae=$e;break}else if(P[$e]===null){P[$e]=be,Ae=$e;break}if(Ae===-1)break}const ve=I[Ae];ve&&ve.connect(be)}}const G=new O,ce=new O;function me(J,ie,be){G.setFromMatrixPosition(ie.matrixWorld),ce.setFromMatrixPosition(be.matrixWorld);const Ae=G.distanceTo(ce),ve=ie.projectionMatrix.elements,$e=be.projectionMatrix.elements,He=ve[14]/(ve[10]-1),R=ve[14]/(ve[10]+1),st=(ve[9]+1)/ve[5],Fe=(ve[9]-1)/ve[5],Re=(ve[8]-1)/ve[0],Me=($e[8]+1)/$e[0],rt=He*Re,ye=He*Me,ke=Ae/(-Re+Me),vt=ke*-Re;if(ie.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(vt),J.translateZ(ke),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ve[10]===-1)J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const ht=He+ke,w=R+ke,_=rt-vt,F=ye+(Ae-vt),Y=st*R/w*ht,se=Fe*R/w*ht;J.projectionMatrix.makePerspective(_,F,Y,se,ht,w),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ge(J,ie){ie===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ie.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ie=J.near,be=J.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(be=m.depthFar)),k.near=b.near=M.near=ie,k.far=b.far=M.far=be,(W!==k.near||ee!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),W=k.near,ee=k.far),k.layers.mask=J.layers.mask|6,M.layers.mask=k.layers.mask&3,b.layers.mask=k.layers.mask&5;const Ae=J.parent,ve=k.cameras;ge(k,Ae);for(let $e=0;$e<ve.length;$e++)ge(ve[$e],Ae);ve.length===2?me(k,M,b):k.projectionMatrix.copy(M.projectionMatrix),De(J,k,Ae)};function De(J,ie,be){be===null?J.matrix.copy(ie.matrixWorld):(J.matrix.copy(be.matrixWorld),J.matrix.invert(),J.matrix.multiply(ie.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=il*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(J){return f[J]};let Ie=null;function We(J,ie){if(h=ie.getViewerPose(c||a),g=ie,h!==null){const be=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Ae=!1;be.length!==k.cameras.length&&(k.cameras.length=0,Ae=!0);for(let R=0;R<be.length;R++){const st=be[R];let Fe=null;if(p!==null)Fe=p.getViewport(st);else{const Me=u.getViewSubImage(d,st);Fe=Me.viewport,R===0&&(e.setRenderTargetTextures(y,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(y))}let Re=L[R];Re===void 0&&(Re=new dn,Re.layers.enable(R),Re.viewport=new gt,L[R]=Re),Re.matrix.fromArray(st.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(st.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),R===0&&(k.matrix.copy(Re.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ae===!0&&k.cameras.push(Re)}const ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const R=u.getDepthInformation(be[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(ve&&ve.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let R=0;R<be.length;R++){const st=be[R].camera;if(st){let Fe=f[st];Fe||(Fe=new nu,f[st]=Fe);const Re=u.getCameraImage(st);Fe.sourceTexture=Re}}}}for(let be=0;be<I.length;be++){const Ae=P[be],ve=I[be];Ae!==null&&ve!==void 0&&ve.update(Ae,ie,c||a)}Ie&&Ie(J,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Ze=new ru;Ze.setAnimationLoop(We),this.setAnimationLoop=function(J){Ie=J},this.dispose=function(){}}}const ui=new zn,Sv=new ot;function Ev(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Zh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,E,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,S,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Gt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Gt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=e.get(f),E=S.envMap,y=S.envMapRotation;E&&(m.envMap.value=E,ui.copy(y),ui.x*=-1,ui.y*=-1,ui.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),m.envMapRotation.value.setFromMatrix4(Sv.makeRotationFromEuler(ui)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Gt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wv(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const y=E.program;n.uniformBlockBinding(S,y)}function c(S,E){let y=s[S.id];y===void 0&&(g(S),y=h(S),s[S.id]=y,S.addEventListener("dispose",m));const I=E.program;n.updateUBOMapping(S,I);const P=e.render.frame;r[S.id]!==P&&(d(S),r[S.id]=P)}function h(S){const E=u();S.__bindingPointIndex=E;const y=i.createBuffer(),I=S.__size,P=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,I,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const E=s[S.id],y=S.uniforms,I=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let P=0,T=y.length;P<T;P++){const D=Array.isArray(y[P])?y[P]:[y[P]];for(let M=0,b=D.length;M<b;M++){const L=D[M];if(p(L,P,M,I)===!0){const k=L.__offset,W=Array.isArray(L.value)?L.value:[L.value];let ee=0;for(let j=0;j<W.length;j++){const Z=W[j],ne=v(Z);typeof Z=="number"||typeof Z=="boolean"?(L.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,k+ee,L.__data)):Z.isMatrix3?(L.__data[0]=Z.elements[0],L.__data[1]=Z.elements[1],L.__data[2]=Z.elements[2],L.__data[3]=0,L.__data[4]=Z.elements[3],L.__data[5]=Z.elements[4],L.__data[6]=Z.elements[5],L.__data[7]=0,L.__data[8]=Z.elements[6],L.__data[9]=Z.elements[7],L.__data[10]=Z.elements[8],L.__data[11]=0):(Z.toArray(L.__data,ee),ee+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,E,y,I){const P=S.value,T=E+"_"+y;if(I[T]===void 0)return typeof P=="number"||typeof P=="boolean"?I[T]=P:I[T]=P.clone(),!0;{const D=I[T];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return I[T]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function g(S){const E=S.uniforms;let y=0;const I=16;for(let T=0,D=E.length;T<D;T++){const M=Array.isArray(E[T])?E[T]:[E[T]];for(let b=0,L=M.length;b<L;b++){const k=M[b],W=Array.isArray(k.value)?k.value:[k.value];for(let ee=0,j=W.length;ee<j;ee++){const Z=W[ee],ne=v(Z),G=y%I,ce=G%ne.boundary,me=G+ce;y+=ce,me!==0&&I-me<ne.storage&&(y+=I-me),k.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=ne.storage}}}const P=y%I;return P>0&&(y+=I-P),S.__size=y,S.__cache={},this}function v(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Tv{constructor(e={}){const{canvas:t=af(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const S=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let I=!1;this._outputColorSpace=At;let P=0,T=0,D=null,M=-1,b=null;const L=new gt,k=new gt;let W=null;const ee=new Ke(0);let j=0,Z=t.width,ne=t.height,G=1,ce=null,me=null;const ge=new gt(0,0,Z,ne),De=new gt(0,0,Z,ne);let Ie=!1;const We=new eu;let Ze=!1,J=!1;const ie=new ot,be=new O,Ae=new gt,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function He(){return D===null?G:1}let R=n;function st(x,U){return t.getContext(x,U)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gl}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",K,!1),R===null){const U="webgl2";if(R=st(U,x),R===null)throw st(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Fe,Re,Me,rt,ye,ke,vt,ht,w,_,F,Y,se,X,Se,he,Ee,_e,re,ue,B,H,$,oe;function C(){Fe=new F0(R),Fe.init(),H=new _v(R,Fe),Re=new C0(R,Fe,e,H),Me=new gv(R,Fe),Re.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),rt=new B0(R),ye=new iv,ke=new vv(R,Fe,Me,ye,Re,H,rt),vt=new I0(y),ht=new N0(y),w=new $f(R),$=new A0(R,w),_=new k0(R,w,rt,$),F=new H0(R,_,w,rt),re=new z0(R,Re,ke),he=new P0(ye),Y=new nv(y,vt,ht,Fe,Re,$,he),se=new Ev(y,ye),X=new rv,Se=new uv(Fe),_e=new T0(y,vt,ht,Me,F,p,l),Ee=new pv(y,F,Re),oe=new wv(R,rt,Re,Me),ue=new R0(R,Fe,rt),B=new O0(R,Fe,rt),rt.programs=Y.programs,y.capabilities=Re,y.extensions=Fe,y.properties=ye,y.renderLists=X,y.shadowMap=Ee,y.state=Me,y.info=rt}C();const Q=new yv(y,R);this.xr=Q,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const x=Fe.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Fe.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(x){x!==void 0&&(G=x,this.setSize(Z,ne,!1))},this.getSize=function(x){return x.set(Z,ne)},this.setSize=function(x,U,z=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=x,ne=U,t.width=Math.floor(x*G),t.height=Math.floor(U*G),z===!0&&(t.style.width=x+"px",t.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(Z*G,ne*G).floor()},this.setDrawingBufferSize=function(x,U,z){Z=x,ne=U,G=z,t.width=Math.floor(x*z),t.height=Math.floor(U*z),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(L)},this.getViewport=function(x){return x.copy(ge)},this.setViewport=function(x,U,z,V){x.isVector4?ge.set(x.x,x.y,x.z,x.w):ge.set(x,U,z,V),Me.viewport(L.copy(ge).multiplyScalar(G).round())},this.getScissor=function(x){return x.copy(De)},this.setScissor=function(x,U,z,V){x.isVector4?De.set(x.x,x.y,x.z,x.w):De.set(x,U,z,V),Me.scissor(k.copy(De).multiplyScalar(G).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(x){Me.setScissorTest(Ie=x)},this.setOpaqueSort=function(x){ce=x},this.setTransparentSort=function(x){me=x},this.getClearColor=function(x){return x.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(x=!0,U=!0,z=!0){let V=0;if(x){let N=!1;if(D!==null){const le=D.texture.format;N=le===Sl||le===yl||le===Ml}if(N){const le=D.texture.type,pe=le===Bn||le===Ci||le===Gs||le===Ws||le===_l||le===xl,we=_e.getClearColor(),xe=_e.getClearAlpha(),Le=we.r,Ue=we.g,Ce=we.b;pe?(g[0]=Le,g[1]=Ue,g[2]=Ce,g[3]=xe,R.clearBufferuiv(R.COLOR,0,g)):(v[0]=Le,v[1]=Ue,v[2]=Ce,v[3]=xe,R.clearBufferiv(R.COLOR,0,v))}else V|=R.COLOR_BUFFER_BIT}U&&(V|=R.DEPTH_BUFFER_BIT),z&&(V|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",K,!1),_e.dispose(),X.dispose(),Se.dispose(),ye.dispose(),vt.dispose(),ht.dispose(),F.dispose(),$.dispose(),oe.dispose(),Y.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",mt),Q.removeEventListener("sessionend",xn),Lt.stop()};function te(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const x=rt.autoReset,U=Ee.enabled,z=Ee.autoUpdate,V=Ee.needsUpdate,N=Ee.type;C(),rt.autoReset=x,Ee.enabled=U,Ee.autoUpdate=z,Ee.needsUpdate=V,Ee.type=N}function K(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function q(x){const U=x.target;U.removeEventListener("dispose",q),fe(U)}function fe(x){Te(x),ye.remove(x)}function Te(x){const U=ye.get(x).programs;U!==void 0&&(U.forEach(function(z){Y.releaseProgram(z)}),x.isShaderMaterial&&Y.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,z,V,N,le){U===null&&(U=ve);const pe=N.isMesh&&N.matrixWorld.determinant()<0,we=Oi(x,U,z,V,N);Me.setMaterial(V,pe);let xe=z.index,Le=1;if(V.wireframe===!0){if(xe=_.getWireframeAttribute(z),xe===void 0)return;Le=2}const Ue=z.drawRange,Ce=z.attributes.position;let Xe=Ue.start*Le,tt=(Ue.start+Ue.count)*Le;le!==null&&(Xe=Math.max(Xe,le.start*Le),tt=Math.min(tt,(le.start+le.count)*Le)),xe!==null?(Xe=Math.max(Xe,0),tt=Math.min(tt,xe.count)):Ce!=null&&(Xe=Math.max(Xe,0),tt=Math.min(tt,Ce.count));const pt=tt-Xe;if(pt<0||pt===1/0)return;$.setup(N,V,we,z,xe);let lt,at=ue;if(xe!==null&&(lt=w.get(xe),at=B,at.setIndex(lt)),N.isMesh)V.wireframe===!0?(Me.setLineWidth(V.wireframeLinewidth*He()),at.setMode(R.LINES)):at.setMode(R.TRIANGLES);else if(N.isLine){let Pe=V.linewidth;Pe===void 0&&(Pe=1),Me.setLineWidth(Pe*He()),N.isLineSegments?at.setMode(R.LINES):N.isLineLoop?at.setMode(R.LINE_LOOP):at.setMode(R.LINE_STRIP)}else N.isPoints?at.setMode(R.POINTS):N.isSprite&&at.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))at.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Pe=N._multiDrawStarts,dt=N._multiDrawCounts,Je=N._multiDrawCount,$t=xe?w.get(xe).bytesPerElement:1,Bi=ye.get(V).currentProgram.getUniforms();for(let Xt=0;Xt<Je;Xt++)Bi.setValue(R,"_gl_DrawID",Xt),at.render(Pe[Xt]/$t,dt[Xt])}else if(N.isInstancedMesh)at.renderInstances(Xe,pt,N.count);else if(z.isInstancedBufferGeometry){const Pe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,dt=Math.min(z.instanceCount,Pe);at.renderInstances(Xe,pt,dt)}else at.render(Xe,pt)};function Ge(x,U,z){x.transparent===!0&&x.side===rn&&x.forceSinglePass===!1?(x.side=Gt,x.needsUpdate=!0,si(x,U,z),x.side=Jn,x.needsUpdate=!0,si(x,U,z),x.side=rn):si(x,U,z)}this.compile=function(x,U,z=null){z===null&&(z=x),f=Se.get(z),f.init(U),E.push(f),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),x!==z&&x.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const V=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const le=N.material;if(le)if(Array.isArray(le))for(let pe=0;pe<le.length;pe++){const we=le[pe];Ge(we,z,N),V.add(we)}else Ge(le,z,N),V.add(le)}),f=E.pop(),V},this.compileAsync=function(x,U,z=null){const V=this.compile(x,U,z);return new Promise(N=>{function le(){if(V.forEach(function(pe){ye.get(pe).currentProgram.isReady()&&V.delete(pe)}),V.size===0){N(x);return}setTimeout(le,10)}Fe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Be=null;function It(x){Be&&Be(x)}function mt(){Lt.stop()}function xn(){Lt.start()}const Lt=new ru;Lt.setAnimationLoop(It),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(x){Be=x,Q.setAnimationLoop(x),x===null?Lt.stop():Lt.start()},Q.addEventListener("sessionstart",mt),Q.addEventListener("sessionend",xn),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(U),U=Q.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,U,D),f=Se.get(x,E.length),f.init(U),E.push(f),ie.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),We.setFromProjectionMatrix(ie,Sn,U.reversedDepth),J=this.localClippingEnabled,Ze=he.init(this.clippingPlanes,J),m=X.get(x,S.length),m.init(),S.push(m),Q.enabled===!0&&Q.isPresenting===!0){const le=y.xr.getDepthSensingMesh();le!==null&&An(le,U,-1/0,y.sortObjects)}An(x,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ce,me),$e=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,$e&&_e.addToRenderList(m,x),this.info.render.frame++,Ze===!0&&he.beginShadows();const z=f.state.shadowsArray;Ee.render(z,x,U),Ze===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){const le=U.cameras;if(N.length>0)for(let pe=0,we=le.length;pe<we;pe++){const xe=le[pe];Ni(V,N,x,xe)}$e&&_e.render(x);for(let pe=0,we=le.length;pe<we;pe++){const xe=le[pe];Ui(m,x,xe,xe.viewport)}}else N.length>0&&Ni(V,N,x,U),$e&&_e.render(x),Ui(m,x,U);D!==null&&T===0&&(ke.updateMultisampleRenderTarget(D),ke.updateRenderTargetMipmap(D)),x.isScene===!0&&x.onAfterRender(y,x,U),$.resetDefaultState(),M=-1,b=null,E.pop(),E.length>0?(f=E[E.length-1],Ze===!0&&he.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function An(x,U,z,V){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||We.intersectsSprite(x)){V&&Ae.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ie);const pe=F.update(x),we=x.material;we.visible&&m.push(x,pe,we,z,Ae.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||We.intersectsObject(x))){const pe=F.update(x),we=x.material;if(V&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ae.copy(x.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ae.copy(pe.boundingSphere.center)),Ae.applyMatrix4(x.matrixWorld).applyMatrix4(ie)),Array.isArray(we)){const xe=pe.groups;for(let Le=0,Ue=xe.length;Le<Ue;Le++){const Ce=xe[Le],Xe=we[Ce.materialIndex];Xe&&Xe.visible&&m.push(x,pe,Xe,z,Ae.z,Ce)}}else we.visible&&m.push(x,pe,we,z,Ae.z,null)}}const le=x.children;for(let pe=0,we=le.length;pe<we;pe++)An(le[pe],U,z,V)}function Ui(x,U,z,V){const N=x.opaque,le=x.transmissive,pe=x.transparent;f.setupLightsView(z),Ze===!0&&he.setGlobalState(y.clippingPlanes,z),V&&Me.viewport(L.copy(V)),N.length>0&&ii(N,U,z),le.length>0&&ii(le,U,z),pe.length>0&&ii(pe,U,z),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Ni(x,U,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new Pi(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Zs:Bn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const le=f.state.transmissionRenderTarget[V.id],pe=V.viewport||L;le.setSize(pe.z*y.transmissionResolutionScale,pe.w*y.transmissionResolutionScale);const we=y.getRenderTarget(),xe=y.getActiveCubeFace(),Le=y.getActiveMipmapLevel();y.setRenderTarget(le),y.getClearColor(ee),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),$e&&_e.render(z);const Ue=y.toneMapping;y.toneMapping=Fn;const Ce=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),Ze===!0&&he.setGlobalState(y.clippingPlanes,V),ii(x,z,V),ke.updateMultisampleRenderTarget(le),ke.updateRenderTargetMipmap(le),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let tt=0,pt=U.length;tt<pt;tt++){const lt=U[tt],at=lt.object,Pe=lt.geometry,dt=lt.material,Je=lt.group;if(dt.side===rn&&at.layers.test(V.layers)){const $t=dt.side;dt.side=Gt,dt.needsUpdate=!0,Fi(at,z,V,Pe,dt,Je),dt.side=$t,dt.needsUpdate=!0,Xe=!0}}Xe===!0&&(ke.updateMultisampleRenderTarget(le),ke.updateRenderTargetMipmap(le))}y.setRenderTarget(we,xe,Le),y.setClearColor(ee,j),Ce!==void 0&&(V.viewport=Ce),y.toneMapping=Ue}function ii(x,U,z){const V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,le=x.length;N<le;N++){const pe=x[N],we=pe.object,xe=pe.geometry,Le=pe.group;let Ue=pe.material;Ue.allowOverride===!0&&V!==null&&(Ue=V),we.layers.test(z.layers)&&Fi(we,U,z,xe,Ue,Le)}}function Fi(x,U,z,V,N,le){x.onBeforeRender(y,U,z,V,N,le),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(y,U,z,V,x,le),N.transparent===!0&&N.side===rn&&N.forceSinglePass===!1?(N.side=Gt,N.needsUpdate=!0,y.renderBufferDirect(z,U,V,N,x,le),N.side=Jn,N.needsUpdate=!0,y.renderBufferDirect(z,U,V,N,x,le),N.side=rn):y.renderBufferDirect(z,U,V,N,x,le),x.onAfterRender(y,U,z,V,N,le)}function si(x,U,z){U.isScene!==!0&&(U=ve);const V=ye.get(x),N=f.state.lights,le=f.state.shadowsArray,pe=N.state.version,we=Y.getParameters(x,N.state,le,U,z),xe=Y.getProgramCacheKey(we);let Le=V.programs;V.environment=x.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(x.isMeshStandardMaterial?ht:vt).get(x.envMap||V.environment),V.envMapRotation=V.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,Le===void 0&&(x.addEventListener("dispose",q),Le=new Map,V.programs=Le);let Ue=Le.get(xe);if(Ue!==void 0){if(V.currentProgram===Ue&&V.lightsStateVersion===pe)return or(x,we),Ue}else we.uniforms=Y.getUniforms(x),x.onBeforeCompile(we,y),Ue=Y.acquireProgram(we,xe),Le.set(xe,Ue),V.uniforms=we.uniforms;const Ce=V.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ce.clippingPlanes=he.uniform),or(x,we),V.needsLights=pa(x),V.lightsStateVersion=pe,V.needsLights&&(Ce.ambientLightColor.value=N.state.ambient,Ce.lightProbe.value=N.state.probe,Ce.directionalLights.value=N.state.directional,Ce.directionalLightShadows.value=N.state.directionalShadow,Ce.spotLights.value=N.state.spot,Ce.spotLightShadows.value=N.state.spotShadow,Ce.rectAreaLights.value=N.state.rectArea,Ce.ltc_1.value=N.state.rectAreaLTC1,Ce.ltc_2.value=N.state.rectAreaLTC2,Ce.pointLights.value=N.state.point,Ce.pointLightShadows.value=N.state.pointShadow,Ce.hemisphereLights.value=N.state.hemi,Ce.directionalShadowMap.value=N.state.directionalShadowMap,Ce.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ce.spotShadowMap.value=N.state.spotShadowMap,Ce.spotLightMatrix.value=N.state.spotLightMatrix,Ce.spotLightMap.value=N.state.spotLightMap,Ce.pointShadowMap.value=N.state.pointShadowMap,Ce.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Ue,V.uniformsList=null,Ue}function ki(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=Hr.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function or(x,U){const z=ye.get(x);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Oi(x,U,z,V,N){U.isScene!==!0&&(U=ve),ke.resetTextureUnits();const le=U.fog,pe=V.isMeshStandardMaterial?U.environment:null,we=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:bs,xe=(V.isMeshStandardMaterial?ht:vt).get(V.envMap||pe),Le=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ue=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ce=!!z.morphAttributes.position,Xe=!!z.morphAttributes.normal,tt=!!z.morphAttributes.color;let pt=Fn;V.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(pt=y.toneMapping);const lt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,at=lt!==void 0?lt.length:0,Pe=ye.get(V),dt=f.state.lights;if(Ze===!0&&(J===!0||x!==b)){const Dt=x===b&&V.id===M;he.setState(V,x,Dt)}let Je=!1;V.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==dt.state.version||Pe.outputColorSpace!==we||N.isBatchedMesh&&Pe.batching===!1||!N.isBatchedMesh&&Pe.batching===!0||N.isBatchedMesh&&Pe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Pe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Pe.instancing===!1||!N.isInstancedMesh&&Pe.instancing===!0||N.isSkinnedMesh&&Pe.skinning===!1||!N.isSkinnedMesh&&Pe.skinning===!0||N.isInstancedMesh&&Pe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Pe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Pe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Pe.instancingMorph===!1&&N.morphTexture!==null||Pe.envMap!==xe||V.fog===!0&&Pe.fog!==le||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==he.numPlanes||Pe.numIntersection!==he.numIntersection)||Pe.vertexAlphas!==Le||Pe.vertexTangents!==Ue||Pe.morphTargets!==Ce||Pe.morphNormals!==Xe||Pe.morphColors!==tt||Pe.toneMapping!==pt||Pe.morphTargetsCount!==at)&&(Je=!0):(Je=!0,Pe.__version=V.version);let $t=Pe.currentProgram;Je===!0&&($t=si(V,U,N));let Bi=!1,Xt=!1,As=!1;const ft=$t.getUniforms(),en=Pe.uniforms;if(Me.useProgram($t.program)&&(Bi=!0,Xt=!0,As=!0),V.id!==M&&(M=V.id,Xt=!0),Bi||b!==x){Me.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ft.setValue(R,"projectionMatrix",x.projectionMatrix),ft.setValue(R,"viewMatrix",x.matrixWorldInverse);const Ft=ft.map.cameraPosition;Ft!==void 0&&Ft.setValue(R,be.setFromMatrixPosition(x.matrixWorld)),Re.logarithmicDepthBuffer&&ft.setValue(R,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ft.setValue(R,"isOrthographic",x.isOrthographicCamera===!0),b!==x&&(b=x,Xt=!0,As=!0)}if(N.isSkinnedMesh){ft.setOptional(R,N,"bindMatrix"),ft.setOptional(R,N,"bindMatrixInverse");const Dt=N.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),ft.setValue(R,"boneTexture",Dt.boneTexture,ke))}N.isBatchedMesh&&(ft.setOptional(R,N,"batchingTexture"),ft.setValue(R,"batchingTexture",N._matricesTexture,ke),ft.setOptional(R,N,"batchingIdTexture"),ft.setValue(R,"batchingIdTexture",N._indirectTexture,ke),ft.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&ft.setValue(R,"batchingColorTexture",N._colorsTexture,ke));const tn=z.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&re.update(N,z,$t),(Xt||Pe.receiveShadow!==N.receiveShadow)&&(Pe.receiveShadow=N.receiveShadow,ft.setValue(R,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(en.envMap.value=xe,en.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(en.envMapIntensity.value=U.environmentIntensity),Xt&&(ft.setValue(R,"toneMappingExposure",y.toneMappingExposure),Pe.needsLights&&Ts(en,As),le&&V.fog===!0&&se.refreshFogUniforms(en,le),se.refreshMaterialUniforms(en,V,G,ne,f.state.transmissionRenderTarget[x.id]),Hr.upload(R,ki(Pe),en,ke)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Hr.upload(R,ki(Pe),en,ke),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ft.setValue(R,"center",N.center),ft.setValue(R,"modelViewMatrix",N.modelViewMatrix),ft.setValue(R,"normalMatrix",N.normalMatrix),ft.setValue(R,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Dt=V.uniformsGroups;for(let Ft=0,ma=Dt.length;Ft<ma;Ft++){const ri=Dt[Ft];oe.update(ri,$t),oe.bind(ri,$t)}}return $t}function Ts(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function pa(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(x,U,z){const V=ye.get(x);V.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),ye.get(x.texture).__webglTexture=U,ye.get(x.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,U){const z=ye.get(x);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const ud=R.createFramebuffer();this.setRenderTarget=function(x,U=0,z=0){D=x,P=U,T=z;let V=!0,N=null,le=!1,pe=!1;if(x){const xe=ye.get(x);if(xe.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(R.FRAMEBUFFER,null),V=!1;else if(xe.__webglFramebuffer===void 0)ke.setupRenderTarget(x);else if(xe.__hasExternalTextures)ke.rebindTextures(x,ye.get(x.texture).__webglTexture,ye.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ce=x.depthTexture;if(xe.__boundDepthTexture!==Ce){if(Ce!==null&&ye.has(Ce)&&(x.width!==Ce.image.width||x.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(x)}}const Le=x.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(pe=!0);const Ue=ye.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?N=Ue[U][z]:N=Ue[U],le=!0):x.samples>0&&ke.useMultisampledRTT(x)===!1?N=ye.get(x).__webglMultisampledFramebuffer:Array.isArray(Ue)?N=Ue[z]:N=Ue,L.copy(x.viewport),k.copy(x.scissor),W=x.scissorTest}else L.copy(ge).multiplyScalar(G).floor(),k.copy(De).multiplyScalar(G).floor(),W=Ie;if(z!==0&&(N=ud),Me.bindFramebuffer(R.FRAMEBUFFER,N)&&V&&Me.drawBuffers(x,N),Me.viewport(L),Me.scissor(k),Me.setScissorTest(W),le){const xe=ye.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,z)}else if(pe){const xe=U;for(let Le=0;Le<x.textures.length;Le++){const Ue=ye.get(x.textures[Le]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Le,Ue.__webglTexture,z,xe)}}else if(x!==null&&z!==0){const xe=ye.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,xe.__webglTexture,z)}M=-1},this.readRenderTargetPixels=function(x,U,z,V,N,le,pe,we=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=ye.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&pe!==void 0&&(xe=xe[pe]),xe){Me.bindFramebuffer(R.FRAMEBUFFER,xe);try{const Le=x.textures[we],Ue=Le.format,Ce=Le.type;if(!Re.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-V&&z>=0&&z<=x.height-N&&(x.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+we),R.readPixels(U,z,V,N,H.convert(Ue),H.convert(Ce),le))}finally{const Le=D!==null?ye.get(D).__webglFramebuffer:null;Me.bindFramebuffer(R.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(x,U,z,V,N,le,pe,we=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=ye.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&pe!==void 0&&(xe=xe[pe]),xe)if(U>=0&&U<=x.width-V&&z>=0&&z<=x.height-N){Me.bindFramebuffer(R.FRAMEBUFFER,xe);const Le=x.textures[we],Ue=Le.format,Ce=Le.type;if(!Re.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Xe),R.bufferData(R.PIXEL_PACK_BUFFER,le.byteLength,R.STREAM_READ),x.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+we),R.readPixels(U,z,V,N,H.convert(Ue),H.convert(Ce),0);const tt=D!==null?ye.get(D).__webglFramebuffer:null;Me.bindFramebuffer(R.FRAMEBUFFER,tt);const pt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await of(R,pt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Xe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,le),R.deleteBuffer(Xe),R.deleteSync(pt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,U=null,z=0){const V=Math.pow(2,-z),N=Math.floor(x.image.width*V),le=Math.floor(x.image.height*V),pe=U!==null?U.x:0,we=U!==null?U.y:0;ke.setTexture2D(x,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,pe,we,N,le),Me.unbindTexture()};const dd=R.createFramebuffer(),fd=R.createFramebuffer();this.copyTextureToTexture=function(x,U,z=null,V=null,N=0,le=null){le===null&&(N!==0?(Ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=N,N=0):le=0);let pe,we,xe,Le,Ue,Ce,Xe,tt,pt;const lt=x.isCompressedTexture?x.mipmaps[le]:x.image;if(z!==null)pe=z.max.x-z.min.x,we=z.max.y-z.min.y,xe=z.isBox3?z.max.z-z.min.z:1,Le=z.min.x,Ue=z.min.y,Ce=z.isBox3?z.min.z:0;else{const tn=Math.pow(2,-N);pe=Math.floor(lt.width*tn),we=Math.floor(lt.height*tn),x.isDataArrayTexture?xe=lt.depth:x.isData3DTexture?xe=Math.floor(lt.depth*tn):xe=1,Le=0,Ue=0,Ce=0}V!==null?(Xe=V.x,tt=V.y,pt=V.z):(Xe=0,tt=0,pt=0);const at=H.convert(U.format),Pe=H.convert(U.type);let dt;U.isData3DTexture?(ke.setTexture3D(U,0),dt=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ke.setTexture2DArray(U,0),dt=R.TEXTURE_2D_ARRAY):(ke.setTexture2D(U,0),dt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const Je=R.getParameter(R.UNPACK_ROW_LENGTH),$t=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Bi=R.getParameter(R.UNPACK_SKIP_PIXELS),Xt=R.getParameter(R.UNPACK_SKIP_ROWS),As=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,lt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,lt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Le),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ue),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ce);const ft=x.isDataArrayTexture||x.isData3DTexture,en=U.isDataArrayTexture||U.isData3DTexture;if(x.isDepthTexture){const tn=ye.get(x),Dt=ye.get(U),Ft=ye.get(tn.__renderTarget),ma=ye.get(Dt.__renderTarget);Me.bindFramebuffer(R.READ_FRAMEBUFFER,Ft.__webglFramebuffer),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,ma.__webglFramebuffer);for(let ri=0;ri<xe;ri++)ft&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.get(x).__webglTexture,N,Ce+ri),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.get(U).__webglTexture,le,pt+ri)),R.blitFramebuffer(Le,Ue,pe,we,Xe,tt,pe,we,R.DEPTH_BUFFER_BIT,R.NEAREST);Me.bindFramebuffer(R.READ_FRAMEBUFFER,null),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||ye.has(x)){const tn=ye.get(x),Dt=ye.get(U);Me.bindFramebuffer(R.READ_FRAMEBUFFER,dd),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,fd);for(let Ft=0;Ft<xe;Ft++)ft?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,tn.__webglTexture,N,Ce+Ft):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,tn.__webglTexture,N),en?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Dt.__webglTexture,le,pt+Ft):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Dt.__webglTexture,le),N!==0?R.blitFramebuffer(Le,Ue,pe,we,Xe,tt,pe,we,R.COLOR_BUFFER_BIT,R.NEAREST):en?R.copyTexSubImage3D(dt,le,Xe,tt,pt+Ft,Le,Ue,pe,we):R.copyTexSubImage2D(dt,le,Xe,tt,Le,Ue,pe,we);Me.bindFramebuffer(R.READ_FRAMEBUFFER,null),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else en?x.isDataTexture||x.isData3DTexture?R.texSubImage3D(dt,le,Xe,tt,pt,pe,we,xe,at,Pe,lt.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(dt,le,Xe,tt,pt,pe,we,xe,at,lt.data):R.texSubImage3D(dt,le,Xe,tt,pt,pe,we,xe,at,Pe,lt):x.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,le,Xe,tt,pe,we,at,Pe,lt.data):x.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,le,Xe,tt,lt.width,lt.height,at,lt.data):R.texSubImage2D(R.TEXTURE_2D,le,Xe,tt,pe,we,at,Pe,lt);R.pixelStorei(R.UNPACK_ROW_LENGTH,Je),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,$t),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Bi),R.pixelStorei(R.UNPACK_SKIP_ROWS,Xt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,As),le===0&&U.generateMipmaps&&R.generateMipmap(dt),Me.unbindTexture()},this.initRenderTarget=function(x){ye.get(x).__webglFramebuffer===void 0&&ke.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?ke.setTextureCube(x,0):x.isData3DTexture?ke.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?ke.setTexture2DArray(x,0):ke.setTexture2D(x,0),Me.unbindTexture()},this.resetState=function(){P=0,T=0,D=null,Me.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function hu(i){return!0}const uu=1.5;function du(i,e){return e&&new URLSearchParams(i).get("dprFloor")==="1"?1:uu}function fu(i,e,t=uu){return e?Math.min(2,Math.max(t,i)):Math.min(i,1.25)}function Av(i,e){const t=new Tv({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance"});return t.setPixelRatio(fu(devicePixelRatio,e,du(location.search,!1))),t.setSize(innerWidth,innerHeight),t}const an={"green-blob":{model:"gloom-blob",label:"ก้อนวุ้น",height:1.25,footprint:1.65,hover:0,bob:.045,frequency:5.2,accent:13073919,glow:13131007,moveSpeed:1.7},demon:{model:"bat-gargoyle",label:"การ์กอยล์",height:1.55,footprint:2.3,hover:1,bob:.11,frequency:3.2,accent:13662207,glow:13662207,moveSpeed:2.2},yeti:{model:"horned-brute",label:"นักรบเขาเหล็ก",height:1.65,footprint:2.05,hover:0,bob:.035,frequency:2.1,accent:16747069,glow:16747050,moveSpeed:.682},orc:{model:"crystal-golem",label:"โกเลมผลึก",height:2.05,footprint:2.3,hover:0,bob:.055,frequency:2.7,accent:5228799,glow:4179199,moveSpeed:.55},"orc-skull":{model:"crystal-golem",label:"โกเลมผลึก · Overload",height:2.2,footprint:2.45,hover:0,bob:.055,frequency:2.9,accent:11820287,tint:14207231,elite:!0,glow:11820287,moveSpeed:.55},alien:{model:"ember-demon",label:"เขี้ยวถ่าน",height:1.5,footprint:1.5,hover:0,bob:.1,frequency:4.3,accent:16734778,glow:16773800,moveSpeed:2.321},"mushroom-king":{model:"hollow-wraith",label:"วิญญาณ",height:1.95,footprint:2.05,hover:.2,bob:.08,frequency:2.2,accent:9428223,glow:9430271,moveSpeed:.75},"blue-demon":{model:"bat-gargoyle",label:"การ์กอยล์ · Ion",height:1.6,footprint:2.35,hover:1.05,bob:.1,frequency:3.6,accent:9157375,tint:11386879,elite:!0,glow:9165055,moveSpeed:2.2}};[...new Set(Object.values(an).map(i=>i.model))];const rl={landscape:{image:"island.webp",size:[2304,1184],frame:[384,96,1920,1120],plaza:[1152,566],island:[660,315],outline:[[448,544],[456,468],[488,410],[520,392],[557,360],[594,372],[614,348],[662,316],[710,304],[758,276],[806,248],[854,232],[902,204],[950,200],[998,204],[1046,212],[1094,188],[1142,188],[1190,208],[1238,220],[1286,212],[1334,228],[1382,248],[1430,256],[1466,212],[1500,204],[1528,170],[1556,204],[1592,208],[1622,256],[1670,248],[1718,312],[1766,400],[1814,452],[1840,520],[1856,544],[1856,556],[1840,600],[1832,700],[1814,760],[1800,790],[1766,864],[1718,896],[1670,916],[1622,952],[1574,984],[1526,972],[1478,996],[1430,1020],[1382,1044],[1334,1048],[1286,1044],[1238,1056],[1190,1040],[1142,1048],[1094,1076],[1046,1068],[998,1020],[950,984],[902,1004],[854,1012],[806,1012],[758,976],[710,936],[662,868],[614,908],[566,864],[540,796],[520,762],[496,718],[472,654],[456,610],[448,572]],gates:[{mouth:[555,476,37,48],art:[456,362,656,554]},{mouth:[1529,284,35,48],art:[1430,172,1626,366]},{mouth:[1649,676,37,47],art:[1546,553,1747,748],front:702}],gateArt:"island-gates.webp",tower:{image:"tower.webp",base:[1152,566],width:312},actorScale:30}},Rv="level-01",Cv=[{role:"short",control:[[16.078,3.565],[11.357,1.853],[6.399,.414],[1.984,.253]]},{role:"long",control:[[-11.912,11.182],[-6.977,12.013],[-2.832,11.131],[-1.634,8.058],[-4.331,5.496],[-9.962,5.382],[-13.03,2.571],[-12.03,-.528],[-8.505,-1.287],[-4.715,.608],[-1.764,1.186]]},{role:"medium",control:[[-12.3,-11.047],[-7.982,-11.705],[-3.917,-10.38],[-3.031,-7.847],[-5.812,-6.589],[-9.358,-7.243],[-11.815,-6.952],[-12.997,-5.591],[-12.182,-4.075],[-10.038,-3.499],[-6.057,-3.092],[-1.41,-1.591]]}],Pv="island-day",Iv={width:2.6,tile:"slab"},Lv={at:[0,0],radius:3.6},Dv={id:Rv,lanes:Cv,base:Pv,road:Iv,plaza:Lv},Ya=["short","long","medium"];class Ka extends Error{constructor(){super(...arguments);A(this,"name","LevelDataError")}}const Bc=801;function Uv(i){const e=i.map(([a,o])=>({x:a,z:o})),t=[];for(let a=0;a<e.length-1;a++){const o=e[Math.max(0,a-1)],l=e[a],c=e[a+1],h=e[Math.min(e.length-1,a+2)];for(let u=0;u<32;u++){const d=u/32,p=d*d,g=p*d,v=(m,f,S,E)=>.5*(2*f+(-m+S)*d+(2*m-5*f+4*S-E)*p+(-m+3*f-3*S+E)*g);t.push({x:v(o.x,l.x,c.x,h.x),z:v(o.z,l.z,c.z,h.z)})}}t.push(e[e.length-1]);const n=[0];for(let a=1;a<t.length;a++)n.push(n[a-1]+Math.hypot(t[a].x-t[a-1].x,t[a].z-t[a-1].z));const s=n[n.length-1],r=[];for(let a=0,o=0;a<Bc;a++){const l=s*a/(Bc-1);for(;o<t.length-2&&n[o+1]<l;)o++;const c=(l-n[o])/Math.max(1e-9,n[o+1]-n[o]);r.push({x:t[o].x+(t[o+1].x-t[o].x)*c,z:t[o].z+(t[o+1].z-t[o].z)*c})}return{points:r,length:s}}const Ir=i=>typeof i=="object"&&i!==null&&!Array.isArray(i),ja=i=>typeof i=="string"&&/^[a-z0-9]+(-[a-z0-9]+)*$/.test(i),zc=i=>Array.isArray(i)&&i.length===2&&Number.isFinite(i[0])&&Number.isFinite(i[1]);function Nv(i){if(!Ir(i))throw new Ka("level: not an object");const{id:e,lanes:t,base:n,road:s,plaza:r}=i;if(!ja(e))throw new Ka('level: id must be lower-case words joined by "-"');const a=l=>new Ka(`${e}: ${l}`);if(!Array.isArray(t)||t.length!==Ya.length)throw a(`lanes must be ${Ya.length}`);const o=Ya.map((l,c)=>{const h=t[c];if(!Ir(h))throw a(`lanes[${c}] is not an object`);if(h.role!==l)throw a(`lanes[${c}].role must be "${l}"`);const{control:u}=h;if(!Array.isArray(u)||u.length<2)throw a(`lanes[${c}].control needs 2 or more points`);for(let g=0;g<u.length;g++)if(!zc(u[g]))throw a(`lanes[${c}].control[${g}] is not [x, z]`);const{points:d,length:p}=Uv(u);if(!Number.isFinite(p)||!d.every(g=>Number.isFinite(g.x)&&Number.isFinite(g.z)))throw a(`lanes[${c}] is too long to sample`);if(!(p>1e-6))throw a(`lanes[${c}] has no length`);return Object.freeze({role:l,points:Object.freeze(d.map(g=>Object.freeze(g))),length:p})});if(!ja(n))throw a('base must be a kit name like "island-day"');if(!Ir(s)||!(typeof s.width=="number"&&s.width>=1&&s.width<=4))throw a("road.width must be 1–4 world units");if(!ja(s.tile))throw a('road.tile must be a kit name like "slab"');if(!Ir(r)||!zc(r.at))throw a("plaza.at is not [x, z]");if(!(typeof r.radius=="number"&&r.radius>0&&r.radius<=8))throw a("plaza.radius must be above 0 and at most 8");return Object.freeze({id:e,lanes:Object.freeze(o),base:n,road:Object.freeze({width:s.width,tile:s.tile}),plaza:Object.freeze({at:Object.freeze([r.at[0],r.at[1]]),radius:r.radius})})}const pu={speed:1.6,main:3,of:5},Fv=19.87/15;function mu(i,e){return e*19.87/sa(i)}let kv=Nv(Dv);const gu=i=>kv.lanes[(i%3+3)%3];function sa(i){return gu(i).length}function vu(i,e){const t=gu(i).points,s=Math.max(0,Math.min(1,e))*(t.length-1),r=Math.min(t.length-2,Math.floor(s)),a=s-r;return{x:t[r].x+(t[r+1].x-t[r].x)*a,z:t[r].z+(t[r+1].z-t[r].z)*a}}const Hc=18.2,Vc={from:[6,36.5,-47],to:[0,-1.5,0]},Gc=i=>{const e=Math.hypot(...i);return i.map(t=>t/e)},wn=(()=>{const i=Vc.from,e=Vc.to,t=Gc([i[0]-e[0],i[1]-e[1],i[2]-e[2]]),n=Gc([t[2],0,-t[0]]),s=[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]];return{right:n,up:s,sinPitch:t[1],cosPitch:Math.hypot(t[0],t[2]),yaw:Math.atan2(t[0],t[2])}})();class Ov{constructor(e){A(this,"sx");A(this,"sy");this.layout=e,this.sx=e.island[0]/Hc,this.sy=e.island[1]/(Hc*wn.sinPitch)}toImage(e,t){const{right:n,up:s}=wn;return[this.layout.plaza[0]+this.sx*(e*n[0]+t*n[2]),this.layout.plaza[1]-this.sy*(e*s[0]+t*s[2])]}toWorld(e,t){const{right:n,up:s}=wn,r=(e-this.layout.plaza[0])/this.sx,a=-(t-this.layout.plaza[1])/this.sy,o=n[0]*s[2]-n[2]*s[0];return{x:(r*s[2]-a*n[2])/o,z:(n[0]*a-s[0]*r)/o}}}function Bv(i,e=121){return[0,1,2].map(t=>Array.from({length:e},(n,s)=>{const r=vu(t,s/(e-1));return i.toImage(r.x,r.z)}))}const _u=1.55,xu=1.35;function zv(i){return Math.max(...Object.values(an).map(t=>t.height+t.hover))*_u*i.actorScale*xu+12}function Hv(i,e,t=36){const n=[...e.flat(),i.plaza],s=i.gates.map(r=>r.art);return[Math.min(...n.map(r=>r[0]),...s.map(r=>r[0]))-t,Math.min(...n.map(r=>r[1]-zv(i)),...s.map(r=>r[1])),Math.max(...n.map(r=>r[0]),...s.map(r=>r[2]))+t,Math.max(...n.map(r=>r[1]+t),...s.map(r=>r[3]))]}const Vv=.88,Gv=.08;function Wv(i,e=24){return i.flatMap((t,n)=>{const s=i[(n+1)%i.length],r=Math.max(1,Math.ceil(Math.hypot(s[0]-t[0],s[1]-t[1])/e));return Array.from({length:r},(a,o)=>[t[0]+(s[0]-t[0])*o/r,t[1]+(s[1]-t[1])*o/r])})}function $v(i,e,[t,n],s,r,a){const o=a.margin??8;return i.every(([l,c])=>{const h=t+l*e,u=n+c*e;return h>=0&&h<=s&&u>=0&&u<=r&&a.panels.every(([d,p,g,v])=>h<d-o||h>g+o||u<p-o||u>v+o)})}class Xv{constructor(){A(this,"widest",new Map);A(this,"screen","")}update(e,t,n){let s=!1;const r=`${e}x${t}`;r!==this.screen&&(this.widest.clear(),this.screen=r,s=!0);for(const[a,o]of n){const l=this.widest.get(a),c=l?[Math.min(l[0],o[0]),Math.min(l[1],o[1]),Math.max(l[2],o[2]),Math.max(l[3],o[3])]:o;(!l||c.some((h,u)=>Math.abs(h-l[u])>.5))&&(this.widest.set(a,c),s=!0)}return s}get boxes(){return[...this.widest.values()]}}function qv(i,e,t,n,s,r,a,o,l){const c=Math.ceil(n),h=Math.floor(s)-c+1,u=l.margin??8;if(h<1)return null;const d=new Int32Array(h+1),p=(m,f)=>{const S=Math.max(0,Math.ceil(m)-c),E=Math.min(h-1,Math.floor(f)-c);S<=E&&(d[S]++,d[E+1]--)};for(const[m,f]of i){const S=t+m*e,E=f*e;if(S<0||S>a){d[0]++,d[h]--;continue}p(-1/0,-E-1e-6),p(o-E+1e-6,1/0);for(const[y,I,P,T]of l.panels)S>=y-u&&S<=P+u&&p(Math.max(I-u,0)-E,Math.min(T+u,o)-E)}let g=null,v=0;for(let m=0;m<h;m++){v+=d[m];const f=c+m;(!g||v<g.covered||v===g.covered&&Math.abs(f-r)<Math.abs(g.oy-r))&&(g={oy:f,covered:v})}return g}function Wc(i,e,t,n,s,r){const{size:a,frame:[o,l,c,h],plaza:u}=t;let d=Math.max(i/(c-o),e/(h-l)),p=[i/2-u[0]*d,e/2-(l+h)/2*d];if(n&&s){const[v,m,f,S]=s,E=Math.max(1,n.bottom-n.top),y=(T,D,M,b,L,k,W,ee,j)=>{let Z=j-ee*T;return Z=L>=D?Math.min(Math.max(Z,D-L),0):(D-L)/2,Math.max(Math.min(Z,b-W*T),M-k*T)},I=T=>[y(T,i,0,i,a[0]*T,v,f,u[0],i/2),y(T,e,n.top,n.bottom,a[1]*T,m,S,(m+S)/2,(n.top+n.bottom)/2)];d=Math.min(d,E/(S-m),i/(f-v)),p=I(d);const P=r?Wv(r.outline):[];if(r&&!$v(P,d,p,i,e,r)){const T=d,D=12,M=Math.max(T*Vv,Math.min(T,Math.max(i/a[0],e/a[1])));let b=null;const L=Math.floor(i*Gv/8);for(let k=0;k<=D&&(b==null?void 0:b.covered)!==0;k++){const W=T-(T-M)*k/D,[ee,j]=I(W),Z=a[0]*W;let ne=n.top-m*W,G=n.bottom-S*W;const ce=Math.max(ne,e-a[1]*W),me=Math.min(G,0);ce<=me&&([ne,G]=[ce,me]);for(let ge=0;ge<=2*L&&(b==null?void 0:b.covered)!==0;ge++){const De=ee+(ge%2?1:-1)*Math.ceil(ge/2)*8;if(De+v*W<-1e-6||De+f*W>i+1e-6||ee<=1e-6&&ee+Z>=i-1e-6&&(De>1e-6||De+Z<i-1e-6))continue;const Ie=qv(P,W,De,ne,G,j,i,e,r);Ie&&(!b||Ie.covered<b.covered)&&(b={scale:W,offset:[De,Ie.oy],covered:Ie.covered})}}b&&({scale:d,offset:p}=b)}}const g=p[0]<=1e-6&&p[1]<=1e-6&&p[0]+a[0]*d>=i-1e-6&&p[1]+a[1]*d>=e-1e-6;return{scale:d,offset:p,cover:g}}function $c(i,e){return Math.abs(i.scale-e.scale)>1e-6*Math.max(i.scale,e.scale)||Math.hypot(i.offset[0]-e.offset[0],i.offset[1]-e.offset[1])>1e-6}function Yv(i,e,t){return $c(i,e)?t&&!$c(i,{scale:e.scale,offset:i.offset})?"slide":"clear":"none"}function Kv(i){const e=[];let t=0;const n=(s,r)=>{const[a,o,l,c]=i.gates[s].art;e.push({gate:s,kind:r,x:t,y:0,w:l-a,h:c-o}),t+=l-a};return i.gates.forEach((s,r)=>n(r,"sealed")),i.gates.forEach((s,r)=>{s.front!==void 0&&n(r,"front")}),{size:[t,Math.max(...i.gates.map(s=>s.art[3]-s.art[1]))],rects:e}}const nt=(i,e,t,n,s,r)=>({id:i,branch:e,slot:t,cost:t==="cap"?2:1,name:n,effect:s,counters:r}),Ti=[nt("core-lens","core","I-a","เลนส์โฟกัส","ลูกศรอีเธอร์แรงขึ้น 20% และเจาะเกราะ 50%",["armor"]),nt("core-mine","core","I-b","เหมืองอีเธอร์","พลังงานจากการกำจัดศัตรูเพิ่ม 15%",[]),nt("core-nova-power","core","II-A","โนวาทำลายล้าง","Nova แรงขึ้น 60% และผลักศัตรูถอยหลัง",["armor","shield"]),nt("core-nova-rush","core","II-B","โนวาเร่งรอบ","คูลดาวน์ Nova ลดจาก 25 เหลือ 16 วินาที",[]),nt("core-nova-freeze","core","III-A","โนวาเยือกแข็ง","Nova ทำให้ศัตรูหยุดนิ่ง 1.2 วินาที",["dash"]),nt("core-nova-awaken","core","III-B","โนวาปลุกพลัง","หลังใช้ Nova ทุกการโจมตีของป้อมยิงเร็วขึ้น 25% นาน 5 วินาที",["regen"]),nt("core-prism","core","cap","แกนปริซึม","ลูกศรอีเธอร์ยิง 3 เป้าพร้อมกัน (เป้ารองแรง 25%) และเก็บ Nova ได้ 2 ครั้ง",["flying","split"]),nt("fire-fuel","fire","I-a","เชื้อเพลิงเข้ม","ไฟเผานานขึ้น 60%",["regen"]),nt("fire-blast","fire","I-b","ระเบิดกว้าง","รัศมีระเบิดเพิ่ม 25%",["split"]),nt("fire-meteor","fire","II-A","อุกกาบาต","สกิลทุก 7 วินาที: หินตกใส่จุดที่ศัตรูหนาแน่นที่สุด แรง ×3 ไม่สนเกราะ",["armor"]),nt("fire-wildfire","fire","II-B","ไฟลาม","สกิลทุก 5 วินาที: ฝนไฟ 4 ลูกจุดไฟศัตรู 4 ตัว และตัวที่ตายขณะติดไฟ ไฟลามไปอีก 2 ตัว",["split"]),nt("fire-lava","fire","III-A","หลุมลาวา","อุกกาบาตทิ้งลาวาไว้ 3 วินาที ลาวาทำให้ศัตรูบนพื้นติดไฟ",["regen"]),nt("fire-stack","fire","III-B","ไฟซ้อน","ไฟเผาซ้อนกันได้ 3 ชั้น",["regen"]),nt("fire-sunfall","fire","cap","สุริยะถล่ม","อุกกาบาตเป็นหินยักษ์ แรง ×2 รัศมี ×1.6 หรือฝนไฟเพิ่มเป็น 8 ลูก",["armor","split"]),nt("frost-chill","frost","I-a","ความหนาวลึก","ศัตรูที่โดน Frost ช้าลงอีก 10%",["dash"]),nt("frost-wide","frost","I-b","ลมหนาวกว้าง","รัศมี Frost เพิ่ม 25%",["dash","split"]),nt("frost-glacier","frost","II-A","ธารน้ำแข็ง","สกิลทุก 7 วินาที: แช่แข็งศัตรูรอบตัวหน้าสุด หยุดนิ่ง 1.2 วินาที",["dash","boss"]),nt("frost-brittle","frost","II-B","เปราะแตก","สกิลทุก 6 วินาที: หอกน้ำแข็งทะลุแนว ตัวที่โดนเปราะ 4 วินาที รับดาเมจเพิ่ม 20% และโดนเจาะเกราะ 50%",["armor","shield"]),nt("frost-field","frost","III-A","ทุ่งน้ำแข็ง","การแช่แข็งทิ้งน้ำแข็งไว้ 4 วินาที ชะลอศัตรูบนพื้นที่เดินเข้า",["dash"]),nt("frost-shatter","frost","III-B","แตกกระจาย","ตัวที่ตายขณะเปราะ ระเบิดเศษน้ำแข็งใส่ตัวรอบ ๆ",["split"]),nt("frost-ice-age","frost","cap","ยุคน้ำแข็ง","พายุหิมะรัศมี 9 รอบป้อม ชะลอศัตรู 25% Frost ยิงเร็วขึ้น 25% และสกิลน้ำแข็งใหญ่ขึ้น",["flying","dash"]),nt("storm-conductor","storm","I-a","ตัวนำไฟฟ้า","ชิ่งเพิ่ม 2 เป้า (ฟ้าผ่าก็โดนเพิ่ม 2 เป้า) และระยะชิ่งเพิ่ม 15%",["split"]),nt("storm-overcharge","storm","I-b","ประจุเกิน","เป้าแรกรับดาเมจเพิ่ม 50% และทำดาเมจใส่โล่ 3 เท่า",["shield"]),nt("storm-chain","storm","II-A","ลูกโซ่ไม่ขาด","สกิลทุก 6 วินาที: สายฟ้าชิ่งใหญ่ 8 เป้า ข้ามเลน ดาเมจไม่ลดตามการชิ่ง",["split","flying"]),nt("storm-thunder","storm","II-B","ฟ้าผ่า","สกิลทุก 6 วินาที: ฟ้าผ่าตัวที่ HP มากที่สุดและอีก 1 ตัว (เพิ่มตามตัวนำไฟฟ้า) แรง ×3 หยุดนิ่ง 0.5 วินาที",["armor","shield","boss"]),nt("storm-static","storm","III-A","สนามประจุ","ตัวที่มีประจุ เมื่อโดน Fire หรือ Frost จะปล่อยสายฟ้าแรง 40% ไปหาตัวข้าง ๆ (ต้องมี Fire หรือ Frost)",[]),nt("storm-clap","storm","III-B","ฟ้าคำราม","ฟ้าผ่าสร้างคลื่นกระแทกรัศมี 2 แรง 50% ของฟ้าผ่า ใส่ศัตรูรอบ ๆ",["split"]),nt("storm-tempest","storm","cap","พายุคลั่ง","สกิลสายฟ้าเรียกฟ้าผ่าลงศัตรูเพิ่ม 5 ตัว (ฟ้าผ่าโดน 5 เป้า)",["flying","shield"])],jv=new Map(Ti.map(i=>[i.id,i])),Ai=["core","fire","frost","storm"],ei={core:"แกนป้อม",fire:"FIRE",frost:"FROST",storm:"STORM"};function wt(i){const e=jv.get(i);if(!e)throw new Error(`Unknown skill node ${i}`);return e}function En(i,e){return Ti.find(t=>t.branch===i&&t.slot===e)}const Ne={lens:{damage:1.2,pierce:.5},mine:{gold:1.15},novaPower:{damage:1.6,push:.06,bossPush:.3},novaRush:{cooldown:16},novaFreeze:{stun:1.2},novaAwaken:{rate:1.25,duration:5},prism:{targets:3,splash:.25,charges:2},fuel:{burn:1.6},blast:{radius:1.25},meteor:{cooldown:7,damage:3,delay:.6},wildfire:{radius:2.5,count:2,depth:2},rain:{cooldown:5,embers:4,damage:.8,radius:1.2,delay:.45},lava:{radius:2,life:3},stack:{max:3},sunfall:{damage:2,radius:1.6,embers:8},chill:{slow:.1,floor:.2},wide:{radius:1.25},glacier:{cooldown:7,radius:2.6,damage:2,stun:1.2},brittle:{cooldown:6,damage:2.5,width:.9,reach:2,duration:4,taken:1.2,pierce:.5},field:{radius:2.5,life:4,slow:.3},shatter:{ratio:.3,radius:2,cap:3},iceAge:{radius:9,speed:.75,rate:1.25,freeze:1.5,spear:1.6,brittle:6},conductor:{jumps:2,range:1.15},overcharge:{first:1.5,shield:3},chain:{cooldown:6,targets:8,range:1.5,damage:1.5},thunder:{cooldown:6,targets:2,first:3,others:1,stun:.5},staticField:{life:3,ratio:.4},clap:{radius:2,ratio:.5},tempest:{strikes:5},respec:{base:150,step:100},zoneCap:12},fs={meteor:{node:"fire-meteor",element:"fire",cap:"fire-sunfall"},rain:{node:"fire-wildfire",element:"fire",cap:"fire-sunfall"},freeze:{node:"frost-glacier",element:"frost",cap:"frost-ice-age"},spear:{node:"frost-brittle",element:"frost",cap:"frost-ice-age"},chain:{node:"storm-chain",element:"storm",cap:"storm-tempest"},thunder:{node:"storm-thunder",element:"storm",cap:"storm-tempest"}},Zv={meteor:"meteor",rain:"rain",freeze:"glacier",spear:"brittle",chain:"chain",thunder:"thunder"};function bu(i){return Ne[Zv[i]].cooldown}function Za(i,e){const t=Object.keys(fs).find(n=>fs[n].element===e&&i(fs[n].node));return t?{id:t,node:fs[t].node,ultimate:i(fs[t].cap)}:null}const Xc=new Map;function ti(i){const e=[...i.skills].sort().join(","),t=Xc.get(e);if(t)return t;const n=a=>i.skills.includes(a),s=Ne,r={boltDamage:n("core-lens")?s.lens.damage:1,boltPierce:n("core-lens")?s.lens.pierce:0,boltTargets:n("core-prism")?s.prism.targets:1,goldMul:n("core-mine")?s.mine.gold:1,novaDamage:n("core-nova-power")?s.novaPower.damage:1,novaPush:n("core-nova-power")?s.novaPower.push:0,novaCooldown:n("core-nova-rush")?s.novaRush.cooldown:25,novaStun:n("core-nova-freeze")?s.novaFreeze.stun:0,novaAwaken:n("core-nova-awaken"),novaCharges:n("core-prism")?s.prism.charges:1,burnDuration:n("fire-fuel")?s.fuel.burn:1,fireRadius:n("fire-blast")?s.blast.radius:1,wildfire:n("fire-wildfire"),lava:n("fire-lava"),burnStacks:n("fire-stack")?s.stack.max:1,slowBonus:n("frost-chill")?s.chill.slow:0,frostRadius:n("frost-wide")?s.wide.radius:1,iceField:n("frost-field"),shatter:n("frost-shatter"),iceAge:n("frost-ice-age"),stormJumps:n("storm-conductor")?s.conductor.jumps:0,stormRange:n("storm-conductor")?s.conductor.range:1,stormFirst:n("storm-overcharge")?s.overcharge.first:1,stormShield:n("storm-overcharge")?s.overcharge.shield:2,staticField:n("storm-static"),thunderclap:n("storm-clap"),skill:{fire:Za(n,"fire"),frost:Za(n,"frost"),storm:Za(n,"storm")}};return Xc.set(e,r),r}function Mu(i,e){return i.skills.reduce((t,n)=>t+(wt(n).branch===e?wt(n).cost:0),0)}function ra(i,e){const t=wt(e),n=a=>i.skills.includes(a);if(n(e))return{state:"owned"};const s=En(t.branch,"II-A"),r=En(t.branch,"II-B");if((t.slot==="II-A"||t.slot==="III-A")&&n(r.id))return{state:"blocked",reason:`เลือกทาง ${r.name} แล้ว`};if((t.slot==="II-B"||t.slot==="III-B")&&n(s.id))return{state:"blocked",reason:`เลือกทาง ${s.name} แล้ว`};if(t.slot==="cap"){const a=i.skills.map(wt).find(o=>o.slot==="cap");if(a)return{state:"blocked",reason:`มีขั้นสูงสุด ${a.name} แล้ว · เลือกได้ 1 ตัวต่อรอบ`}}return(t.branch==="core"?!i.built:i.levels[t.branch]<1)?{state:"locked",reason:t.branch==="core"?"สร้างป้อมก่อน":`ต้องปลดล็อก ${ei[t.branch]} ด้วยพลังงานก่อน`}:(t.slot==="II-A"||t.slot==="II-B")&&!n(En(t.branch,"I-a").id)&&!n(En(t.branch,"I-b").id)?{state:"locked",reason:"ต้องมีโหนดชั้น I ในสายนี้ก่อน"}:t.slot==="III-A"&&!n(s.id)?{state:"locked",reason:`ต้องมี ${s.name} ก่อน`}:t.slot==="III-B"&&!n(r.id)?{state:"locked",reason:`ต้องมี ${r.name} ก่อน`}:t.slot==="cap"&&Mu(i,t.branch)<4?{state:"locked",reason:"ต้องใช้ข้อมูลวิจัยในสายนี้ครบ 4 หน่วย"}:i.skillPoints<t.cost?{state:"locked",reason:`ต้องมีข้อมูลวิจัย ${t.cost} หน่วย`}:{state:"available"}}function Jv(i,e){const t=[];if(i.phase==="victory"||i.phase==="defeat")return{ok:!1,message:"การต่อสู้จบแล้ว",events:t};const n=ra(i,e);if(n.state!=="available")return{ok:!1,message:n.state==="owned"?"ปลดโหนดนี้แล้ว":n.reason,events:t};const s=wt(e);return i.skillPoints-=s.cost,i.skills.push(e),t.push({type:s.slot==="cap"?"capstone":"skill",node:e,element:s.branch==="core"?"arcane":s.branch}),{ok:!0,message:`ปลด ${s.name} แล้ว`,events:t}}function yu(i){return Ne.respec.base+Ne.respec.step*i.respecCount}function Qv(i){const e=[];if(i.phase!=="ready")return{ok:!1,message:"รีเซ็ตได้ระหว่างระลอกเท่านั้น",events:e};if(!i.skills.length)return{ok:!1,message:"ยังไม่มีโหนดให้รีเซ็ต",events:e};const t=yu(i);if(i.gold<t)return{ok:!1,message:`ต้องการ ${t} พลังงานเพื่อรีเซ็ต`,events:e};const n=i.skills.reduce((s,r)=>s+wt(r).cost,0);return i.gold-=t,i.skillPoints+=n,i.skills=[],i.respecCount++,i.novaCharges=Math.min(i.novaCharges,1),i.runtime.haste=0,e.push({type:"respec",value:n}),{ok:!0,message:`รีเซ็ตผังทักษะแล้ว คืนข้อมูลวิจัย ${n} หน่วย`,events:e}}function e_(i,e){const t=wt(e),n=r=>i.skills.includes(r),s=[t.branch==="core"?{label:"สร้างป้อมแล้ว",met:i.built}:{label:`ปลดล็อก ${ei[t.branch]} ด้วยพลังงานแล้ว`,met:i.levels[t.branch]>=1}];if(t.slot==="II-A"||t.slot==="II-B"){const r=En(t.branch,"I-a"),a=En(t.branch,"I-b"),o=En(t.branch,t.slot==="II-A"?"II-B":"II-A");s.push({label:`มี ${r.name} หรือ ${a.name}`,met:n(r.id)||n(a.id)}),s.push({label:`ยังไม่ได้เลือกทาง ${o.name}`,met:!n(o.id)})}if(t.slot==="III-A"||t.slot==="III-B"){const r=En(t.branch,t.slot==="III-A"?"II-A":"II-B");s.push({label:`มี ${r.name}`,met:n(r.id)})}if(t.slot==="cap"){const r=i.skills.map(wt).find(a=>a.slot==="cap"&&a.id!==e);s.push({label:"ใช้ข้อมูลวิจัยในสายนี้ครบ 4 หน่วย",met:Mu(i,t.branch)>=4}),s.push({label:"ยังไม่มีขั้นสูงสุดสายอื่น",met:!r})}return s.push({label:`มีข้อมูลวิจัย ${t.cost} หน่วย`,met:n(e)||i.skillPoints>=t.cost}),s}function t_(i){const e=wt(i);if(e.slot==="II-A"||e.slot==="II-B"){const t=En(e.branch,e.slot==="II-A"?"II-B":"II-A"),n=En(e.branch,e.slot==="II-A"?"III-B":"III-A");return`เลือกทางนี้จะปิด ${t.name} และ ${n.name}`}return e.slot==="cap"?"เลือกขั้นสูงสุดได้ครั้งละ 1 สาย เปลี่ยนได้เมื่อรีเซ็ตผัง":null}const Ii=["split","flying","regen","armor","dash","shield"],nr={"green-blob":{trait:"split"},demon:{trait:"flying"},orc:{trait:"regen",regen:.04},"orc-skull":{trait:"regen",regen:.07},yeti:{trait:"armor"},alien:{trait:"dash"},"mushroom-king":{trait:"shield"},"blue-demon":{trait:"flying",stunImmune:!0}},ut={split:{count:2,hp:.2,speed:1.3,radius:.6,reward:1,leakDamage:.5,aliveCap:60,maxProgress:.92},regen:{delay:1.5},armor:{floor:.25,dot:.5},dash:{every:4,telegraph:.3,duration:.8,speed:2.5},shield:{ratio:.5,bossRatio:.6,delay:4,regen:.1,storm:2,fire:1},flying:{storm:1.25},stun:{immunity:2,boss:.3}},n_=Object.freeze({shield:0,maxShield:0,armor:0,sinceDamage:0,dashTimer:0,dashLeft:0,stun:0,stunImmune:0,mini:!1,brittle:0,charged:0,burnStacks:0,burnDepth:0});function gn(i){return nr[i].trait}function i_(i){const e=Math.max(0,i-1);return 6*(1+.17*e+.026*e*e)}function Su(i,e,t,n,s){const r=gn(i),a=r==="shield"?Math.round(t*(e?ut.shield.bossRatio:ut.shield.ratio)):0;return{...n_,shield:a,maxShield:a,armor:r==="armor"?i_(n):0,dashTimer:r==="dash"?ut.dash.every-s%4*.5:0}}function Eu(i,e){return Math.max(Ne.chill.floor,Math.max(.45,.8-.025*i)-e)}function wu(i,e){return gn(i)==="flying"?1-(1-e)/2:e}function s_(i,e){const t={damage:0,blocked:0,shieldDamage:0,shieldBroken:!1};if(i.hp<=0||!(e.amount>0))return t;let n=e.amount*(e.taken??1);if(gn(i.kind)==="flying"&&e.element==="storm"&&(n*=ut.flying.storm),i.shield>0){const s=e.element==="storm"?e.stormShield??ut.shield.storm:e.element==="fire"?ut.shield.fire:1,r=Math.min(i.shield,n*s);i.shield-=r,t.shieldDamage=r,n=Math.max(0,n-r/s),i.shield<=1e-9&&(i.shield=0,t.shieldBroken=!0)}if(n>0&&i.armor>0){const s=Math.min(1,Math.max(0,e.pierce??0)),r=n;n=e.dot?n*ut.armor.dot:Math.max(n*ut.armor.floor,n-i.armor*(1-s)),t.blocked=r-n}return i.hp=Math.max(0,i.hp-n),i.sinceDamage=0,t.damage=n,t}function r_(i,e){return i.hp<=0||!(e>0)||nr[i.kind].stunImmune||i.stunImmune>0?!1:(i.stun=Math.max(i.stun,e*(i.boss?ut.stun.boss:1)),!0)}function ns(i,e){return i-e>1e-9?i-e:0}function a_(i,e,t,n){const s=nr[i.kind];i.sinceDamage+=e,i.charged=ns(i.charged,e),i.brittle=ns(i.brittle,e),i.stun>0?(i.stun=ns(i.stun,e),i.stun===0&&(i.stunImmune=ut.stun.immunity)):i.stunImmune=ns(i.stunImmune,e);const r=i.stun>0;s.trait==="regen"&&i.sinceDamage>=ut.regen.delay&&i.burn<=0&&i.hp<i.maxHp&&(i.hp=Math.min(i.maxHp,i.hp+i.maxHp*(s.regen??0)*e)),i.maxShield>0&&i.sinceDamage>=ut.shield.delay&&i.shield<i.maxShield&&(i.shield=Math.min(i.maxShield,i.shield+i.maxShield*ut.shield.regen*e));let a=1;return s.trait==="dash"&&(t||r?(i.dashTimer=ut.dash.every,i.dashLeft=0):(i.dashTimer=ns(i.dashTimer,e),i.dashTimer===0&&(i.dashTimer=ut.dash.every,i.dashLeft=ut.dash.duration,n.push({type:"dash",target:i.id,kind:i.kind,lane:i.lane,to:{x:i.x,z:i.z}})),i.dashLeft>0&&(a=ut.dash.speed,i.dashLeft=ns(i.dashLeft,e)))),{move:!r,speed:a}}const o_={"green-blob":1,alien:1,demon:1,"blue-demon":1,yeti:1,"mushroom-king":1,orc:.75,"orc-skull":.75};function l_(i,e){return o_[i]*(e.boss?_u:e.mini?ut.split.radius:1)}const c_=.56;function h_(i){return Math.min(xu,Math.max(1,c_/i))}function u_(i,e,t){const[n,s]=i.bind;return Math.min(Math.min(3.4,e.height*t)/n,Math.min(3.2,e.footprint*t)/s)}function d_(i,e){if(e>=.5){const s=i*.6;return[{dx:s*.1,dy:s*.04,w:s,h:s*.32,alpha:.2}]}const t=i*1.25,n=i*.95;return[{dx:t*.22,dy:t*.07,w:t,h:t*.34,alpha:.36},{dx:0,dy:n*.08,w:n,h:n*.32,alpha:.58}]}const f_={alien:{ground:16742938,air:16756794}};function p_(i,e){const t=f_[i];if(!t)return[];const n=e*2.1,s=e*1.9;return[{dx:0,dy:e*.1,w:n,h:n*.45,color:t.ground,k:.6},{dx:0,dy:-e*.45,w:s,h:s,color:t.air,k:.35}]}class m_{constructor(e,t,n,s,r,a){A(this,"quads",[]);this.layout=n,this.backZ=s,this.depthOf=r;const o=Kv(n),[l,c]=o.size;for(const h of o.rects){const u=new _n(1,1),d=u.attributes.uv;for(let v=0;v<d.count;v++)d.setXY(v,(h.x+d.getX(v)*h.w)/l,1-(h.y+(1-d.getY(v))*h.h)/c);const p=new Kt({map:t,transparent:!0,depthWrite:!1}),g=new Vt(u,p);g.frustumCulled=!1,g.renderOrder=this.inDepthOrder(h)?a.body:a.back,e.add(g),this.quads.push({rect:h,mesh:g})}}inDepthOrder(e){return this.layout.gates[e.gate].front!==void 0}update(e,t){const n=e.scale,[s,r]=e.offset;for(const{rect:a,mesh:o}of this.quads){const l=this.layout.gates[a.gate],[c,h,u,d]=l.art,p=a.kind==="sealed",g=p?1-t:1;o.visible=g>.001,o.material.opacity=g;const v=l.front===void 0?this.backZ:this.depthOf(r+l.front*n)+(p?.01:0);o.position.set(s+(c+u)/2*n,-(r+(h+d)/2*n),v),o.scale.set((u-c)*n,(d-h)*n,1)}}get drawn(){return this.quads.filter(e=>e.mesh.visible).length}}const vn={x:0,z:0},je=i=>({x:i.x,z:i.z}),Wt=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z),Cl=i=>(e,t)=>Wt(e,i)-Wt(t,i);function ir(i){return i.state.runtime.haste>0?Ne.novaAwaken.rate:1}function Tu(i,e){return i*e.boltDamage}function aa(i){return 15+i*12}function sr(i){return 7+5*i}function Au(i,e){return(18+i*14)*e.stormFirst}function oa(i){return Au(i.state.levels.storm,i.mods)}function g_(i,e){return Math.min(20,3+i+e.stormJumps)}function Ru(i,e){return(5.2+.15*i)*e}function Pl(i){return Ru(i.state.levels.storm,i.mods.stormRange)}function Il(i,e,t,n){r_(e,t)&&i.events.push({type:"stun",element:n,target:e.id,to:je(e),value:e.stun})}function Ll(i,e,t){const n=e.burn>0;e.burn=Math.max(e.burn,2.8*i.mods.burnDuration),e.burnStacks=Math.min(i.mods.burnStacks,e.burnStacks+1),e.burnDepth=n?Math.min(e.burnDepth,t):t}function la(i,e){if(!i.mods.staticField||e.charged<=0||!i.state.levels.storm)return;e.charged=0;const t=i.living().filter(s=>s!==e&&Wt(s,e)<Pl(i)).sort(Cl(e))[0];if(!t)return;const n=oa(i)*Ne.staticField.ratio;i.events.push({type:"discharge",element:"storm",target:t.id,from:je(e),to:je(t),damage:n}),i.damage(t,n,"storm",{from:je(e)})}function Cu(i,e,t,n,s){const r=i.state.zones;r.length>=Ne.zoneCap&&r.shift();const a={id:i.state.runtime.nextZoneId++,kind:e,x:t.x,z:t.z,radius:n,life:s};r.push(a),i.events.push({type:"zone",element:e==="lava"?"fire":"frost",target:a.id,to:t,value:n})}function Pu(i,e,t,n,s){const r=i.living().filter(o=>Wt(o,e)<=t),a=r.map(je);for(const o of r)Ll(i,o,0),i.damage(o,n,"fire",{from:e,pierce:s}),la(i,o);return a}function v_(i){const e=i.state.runtime;if(e.boltTimer>0)return;const t=i.aim(i.stats.range).slice(0,i.mods.boltTargets);if(!t.length)return;const n=Tu(i.stats.damage,i.mods);t.forEach((s,r)=>{const a=n*(r?Ne.prism.splash:1);i.events.push({type:"shot",element:"arcane",target:s.id,from:vn,to:je(s),damage:a}),i.damage(s,a,"arcane",{pierce:i.mods.boltPierce})}),e.boltTimer=1/(i.stats.rate*ir(i))}function Iu(i){return(2.35+.13*i.state.levels.fire)*i.mods.fireRadius}function __(i){const{state:e}=i,t=e.levels.fire;if(!t||e.runtime.fireTimer>0)return;const n=i.aim(i.stats.range)[0];if(!n)return;const s=je(n),r=Iu(i),a=i.living().filter(o=>Wt(o,s)<=r);i.events.push({type:"shot",element:"fire",target:n.id,from:vn,to:s,targets:a.map(je),value:r}),Pu(i,s,r,aa(t),0),e.runtime.fireTimer=Math.max(.75,2.15-.075*t)/ir(i)}function x_(i){const{state:e,mods:t}=i,n=e.levels.frost;if(!n||e.runtime.frostTimer>0)return;const s=i.aim(i.stats.range+.8)[0];if(!s)return;const r=(3.1+.16*n)*t.frostRadius,a=i.living().filter(o=>Wt(o,s)<=r);i.events.push({type:"shot",element:"frost",target:s.id,from:vn,to:je(s),targets:a.map(je),value:r});for(const o of a)o.slow=Math.max(o.slow,3.1+.25*n),i.damage(o,sr(n),"frost"),la(i,o);e.runtime.frostTimer=Math.max(1,3.05-.09*n)/(t.iceAge?Ne.iceAge.rate:1)/ir(i)}function Lu(i,e,t,n){const s=[e];for(;s.length<t;){const r=s[s.length-1],a=i.living().filter(o=>!s.includes(o)&&Wt(o,r)<n).sort(Cl(r))[0];if(!a)break;s.push(a)}return s}function b_(i){const{state:e,mods:t}=i,n=e.levels.storm;if(!n||e.runtime.stormTimer>0)return;const s=i.aim(i.stats.range+.4)[0];if(!s)return;const r=Lu(i,s,g_(n,t),Pl(i)),a=18+n*14,o=oa(i);i.events.push({type:"shot",element:"storm",target:s.id,from:vn,to:je(s),targets:r.map(je),value:0}),r.forEach((l,c)=>{const h=c===0?o:a*Math.max(.55,1-c*.06);i.damage(l,h,"storm",{from:c===0?vn:je(r[c-1])}),t.staticField&&l.hp>0&&(l.charged=Ne.staticField.life)}),e.runtime.stormTimer=Math.max(.65,2.2-.08*n)/ir(i)}function M_(i,e,t){const n=i.living();let s=e[0],r=-1;for(const a of e){const o=n.reduce((l,c)=>l+(Wt(c,a)<=t?1:0),0);o>r&&(r=o,s=a)}return s}function y_(i,e){const t=i.aim(i.stats.range);if(!t.length)return!1;const n=Ne,s=Iu(i)*(e?n.sunfall.radius:1),r=M_(i,t,s),a=aa(i.state.levels.fire)*n.meteor.damage*(e?n.sunfall.damage:1);return i.state.runtime.strikes.push({x:r.x,z:r.z,radius:s,damage:a,life:n.meteor.delay,skill:"meteor",ultimate:e}),i.events.push({type:"cast",skill:"meteor",ultimate:e,element:"fire",target:r.id,to:je(r),value:s}),!0}function S_(i,e){const t=Ne,n=i.aim(i.stats.range).slice(0,e?t.sunfall.embers:t.rain.embers);if(!n.length)return!1;const s=t.rain.radius*i.mods.fireRadius,r=aa(i.state.levels.fire)*t.rain.damage;return n.forEach((a,o)=>i.state.runtime.strikes.push({x:a.x,z:a.z,radius:s,damage:r,life:t.rain.delay+o*.06,skill:"rain",ultimate:e})),i.events.push({type:"cast",skill:"rain",ultimate:e,element:"fire",target:n[0].id,to:je(n[0]),targets:n.map(je),value:s}),!0}function E_(i,e){const t=i.aim(i.stats.range+.8)[0];if(!t)return!1;const n=Ne,s=i.state.levels.frost,r=je(t),a=n.glacier.radius*i.mods.frostRadius*(e?n.iceAge.freeze:1),o=i.living().filter(l=>Wt(l,r)<=a);i.events.push({type:"cast",skill:"freeze",ultimate:e,element:"frost",target:t.id,to:r,targets:o.map(je),value:a});for(const l of o)l.slow=Math.max(l.slow,3.1+.25*s),i.damage(l,sr(s)*n.glacier.damage,"frost",{from:r}),l.hp>0&&Il(i,l,n.glacier.stun,"frost"),la(i,l);return i.mods.iceField&&Cu(i,"ice",r,n.field.radius,n.field.life),!0}function w_(i,e,t){const n=t.x-e.x,s=t.z-e.z,r=n*n+s*s,a=r?Math.max(0,Math.min(1,((i.x-e.x)*n+(i.z-e.z)*s)/r)):0;return Math.hypot(i.x-(e.x+n*a),i.z-(e.z+s*a))}function T_(i,e){const t=i.aim(i.stats.range+.8)[0];if(!t)return!1;const n=Ne,s=i.state.levels.frost,r=i.stats.range+.8+n.brittle.reach,a=Math.hypot(t.x,t.z)||1,o={x:t.x/a*r,z:t.z/a*r},l=n.brittle.width*i.mods.frostRadius*(e?n.iceAge.spear:1),c=e?n.iceAge.brittle:n.brittle.duration,h=i.living().filter(u=>w_(u,vn,o)<=l+u.radius*.5);i.events.push({type:"cast",skill:"spear",ultimate:e,element:"frost",target:t.id,from:vn,to:o,targets:h.map(je),value:l});for(const u of h)u.slow=Math.max(u.slow,3.1+.25*s),u.brittle=Math.max(u.brittle,c),i.damage(u,sr(s)*n.brittle.damage,"frost",{from:vn}),la(i,u);return!0}function A_(i,e){const t=i.aim(i.stats.range+.4).filter(a=>a.hp>0),n=t.filter(a=>!e.includes(a)),s=t.filter(a=>e.includes(a)),r=oa(i);for(let a=0;a<Ne.tempest.strikes&&(n.length||s.length);a++){const o=n.length?n:s,[l]=o.splice(Math.floor(i.random()*o.length),1);i.events.push({type:"tempest",element:"storm",target:l.id,to:je(l),damage:r}),i.damage(l,r,"storm")}}function R_(i,e){const t=i.aim(i.stats.range+.4)[0];if(!t)return!1;const n=Ne,s=i.mods,r=Lu(i,t,n.chain.targets+s.stormJumps,Pl(i)*n.chain.range),a=(18+i.state.levels.storm*14)*n.chain.damage;return i.events.push({type:"cast",skill:"chain",ultimate:e,element:"storm",target:t.id,from:vn,to:je(t),targets:r.map(je),value:0}),r.forEach((o,l)=>{i.damage(o,l===0?a*s.stormFirst:a,"storm",{from:l===0?vn:je(r[l-1])}),s.staticField&&o.hp>0&&(o.charged=n.staticField.life)}),e&&A_(i,r),!0}function C_(i,e){const t=i.aim(i.stats.range+.4);if(!t.length)return!1;const n=Ne,s=i.mods,r=(e?n.tempest.strikes:n.thunder.targets)+s.stormJumps,a=[...t].sort((h,u)=>u.hp-h.hp||t.indexOf(h)-t.indexOf(u)).slice(0,r),o=a[0],l=oa(i),c=18+i.state.levels.storm*14;if(i.events.push({type:"cast",skill:"thunder",ultimate:e,element:"storm",target:o.id,to:je(o),targets:a.map(je),value:0}),a.forEach((h,u)=>{i.damage(h,u===0?l*n.thunder.first:c*n.thunder.others,"storm"),h.hp>0&&Il(i,h,n.thunder.stun,"storm")}),s.thunderclap)for(const h of i.living().filter(u=>u!==o&&Wt(u,o)<=n.clap.radius))i.damage(h,l*n.thunder.first*n.clap.ratio,"storm",{from:je(o)});return!0}const P_={meteor:y_,rain:S_,freeze:E_,spear:T_,chain:R_,thunder:C_};function I_(i){const{state:e}=i;for(const t of["fire","frost","storm"]){const n=i.mods.skill[t];!n||!e.levels[t]||e.runtime.skillTimers[t]>1e-9||P_[n.id](i,n.ultimate)&&(e.runtime.skillTimers[t]=bu(n.id))}}function L_(i){v_(i),__(i),x_(i),b_(i),I_(i)}function D_(i,e){const t=i.state.runtime;for(const s of["fire","frost","storm"])t.skillTimers[s]=Math.max(0,t.skillTimers[s]-e*ir(i));t.haste=Math.max(0,t.haste-e);for(const s of i.state.zones)s.life-=e;i.state.zones=i.state.zones.filter(s=>s.life>1e-9);for(const s of t.strikes)s.life-=e;const n=t.strikes.filter(s=>s.life<=1e-9);t.strikes=t.strikes.filter(s=>s.life>1e-9);for(const s of n){const r=s.skill==="meteor",a={x:s.x,z:s.z},o=i.living().filter(l=>Wt(l,a)<=s.radius);i.events.push({type:"cast-impact",skill:s.skill,ultimate:s.ultimate,element:"fire",to:a,targets:o.map(je),value:s.radius}),Pu(i,a,s.radius,s.damage,r?1:0),r&&i.mods.lava&&Cu(i,"lava",a,Ne.lava.radius,Ne.lava.life)}if(i.state.zones.length){for(const s of i.living())if(gn(s.kind)!=="flying")for(const r of i.state.zones)Wt(s,r)>r.radius||(r.kind==="lava"?Ll(i,s,0):s.slow=Math.max(s.slow,Ne.field.slow))}}function U_(i){const{state:e,mods:t}=i,n=i.aim(15.6);if(!n.length)return!1;e.novaCharges--,e.cooldown===0&&(e.cooldown=t.novaCooldown),i.events.push({type:"nova",element:"arcane",from:vn,targets:n.map(je),value:t.novaPush>0?1:0});const s=(72+e.core*12)*t.novaDamage;for(const r of n)i.damage(r,s,"arcane"),r.slow=Math.max(r.slow,2),t.novaStun&&r.hp>0&&Il(i,r,t.novaStun,"arcane");if(t.novaPush)for(const r of n.filter(a=>a.hp>0).sort((a,o)=>a.progress-o.progress))i.retreat(r,Math.max(0,r.progress-mu(r.lane,t.novaPush*(r.boss?Ne.novaPower.bossPush:1))));return t.novaAwaken&&(e.runtime.haste=Ne.novaAwaken.duration),!0}function N_(i,e){if(i.mods.wildfire&&e.burn>0&&e.burnDepth<Ne.wildfire.depth){const t=i.living().filter(n=>n!==e&&n.burn<=0&&Wt(n,e)<=Ne.wildfire.radius).sort(Cl(e)).slice(0,Ne.wildfire.count);for(const n of t)Ll(i,n,e.burnDepth+1),i.events.push({type:"spread",element:"fire",target:n.id,from:je(e),to:je(n)})}if(i.mods.shatter&&e.brittle>0){const t=Math.min(e.maxHp*Ne.shatter.ratio,sr(i.state.levels.frost)*Ne.shatter.cap),n=i.living().filter(s=>s!==e&&Wt(s,e)<=Ne.shatter.radius);i.events.push({type:"shatter",element:"frost",target:e.id,to:je(e),targets:n.map(je),damage:t});for(const s of n)i.damage(s,t,"frost",{from:je(e)})}}const Ja={energy:"พลังงานรอยแยก",research:"ข้อมูลวิจัย"},F_=["เราพบวิธีปิดประตูอย่างปลอดภัย เหนือเมฆ เงียบจนได้ยินเสียงประตู","พอเริ่มปิดประตู พวกมันก็เข้าหาแสง","บางตัวหยุดตรงขอบ ราวกับหวงพื้นที่","เปลือกของมัน เก็บพลังงานเป็นจังหวะ","รอยแยกแคบลง แต่พลังงานยังแกว่งอยู่","รับสัญญาณจาง ๆ จากเครือข่ายเก่า ยังไม่ทราบที่มา","บางตัวเลี่ยงแสง บางตัวยังคงตามมันมา","แรงสั่นเบาลง เราเริ่มวัดขอบประตูได้","สัญญาณเดิมกลับมา แล้วหายไปในความเงียบ","ขอบรอยแยกใกล้บรรจบ เราจะเฝ้าดูจนสุดทาง"],qc=["คลังข้อมูลพร้อม เริ่มทบทวนการปิดประตู","ภาพจำลองแสดงจังหวะพลังงาน ที่เราเคยพบ","ลองสังเกตอีกครั้ง พฤติกรรมยังมีสิ่งให้เรียนรู้","หอคอยเก็บบันทึกไว้ ให้เราศึกษาต่อในความสงบ"],k_={split:"เมื่อร่างใหญ่แตก สิ่งมีชีวิตเล็กสองตัว ยังเคลื่อนไหวต่อ เรากำลังบันทึกวิธีอยู่รอด ของพวกมัน",flying:"มันลอยตามแนวพลังงานเหนือพื้นดิน ราวกับกำลังหาทางผ่าน ในอากาศที่ไม่คุ้นเคย",regen:"เมื่อไม่ถูกโจมตี ร่างของมันค่อย ๆ ประสาน ความร้อนทำให้กระบวนการนี้หยุดลง",armor:"มันก้มตัวปกป้องส่วนอ่อนใต้เปลือก เมื่อพลังงานผันผวน มันหันเข้าหาหอคอย",dash:"ก่อนพุ่ง ร่างของมันสว่างวาบ มันตอบสนองต่อจังหวะพลังงาน เร็วจนเราจับภาพแทบไม่ทัน",shield:"ม่านพลังหุ้มร่างของมัน ขณะเคลื่อนออกจากประตู ดูคล้ายขอบเขตเล็ก ๆ ที่มันพยายามรักษาไว้"},O_=[{id:"overload",kind:"orc-skull",note:"โกเลมผลึก · Overload ฟื้น HP 7% ต่อวินาที"},{id:"ion",kind:"blue-demon",note:"การ์กอยล์ · Ion บินได้ และหยุดนิ่งไม่ได้"},{id:"crown-boss",kind:"mushroom-king",boss:!0,note:"บอสวิญญาณ มีโล่ 60% ของ HP"},{id:"ion-boss",kind:"blue-demon",boss:!0,note:"บอสการ์กอยล์ · Ion บินได้ และหยุดนิ่งไม่ได้"}],Oe={towerLog:"บันทึกหอคอย",speaker:"ทีมวิจัยหอคอย",chapter:"บทที่ 1–2 · หอคอยและประตูมิติแห่งแรก",foundation:"หลายปีหลังหายนะ เราเริ่มสร้าง Element Tower เพื่อศึกษาพลังงานรอยแยก",gateProgress:"ความคืบหน้าการปิดรอยแยก",monsters:"มอนสเตอร์จากรอยแยก",watcher:"ผู้เฝ้าป้อม",loading:{initial:"กำลังเชื่อมต่อหอคอย…",progress:"กำลังเตรียมหอคอยและมอนสเตอร์จากรอยแยก",ready:"หอคอยพร้อมแล้ว"},intro:{tagline:"โลกที่เราเสียไป โลกที่เราจะฟื้นคืน",panels:[{title:"วันที่โลกแตกสลาย",body:"การทดลองขยายประตูมิติผิดพลาด พลังงานจากมิติอื่น ทะลักเข้ามา แผ่นดินแตกออก และถูกพยุงไว้กลางฟ้า เป็นเกาะลอยนับไม่ถ้วน"},{title:"มอนสเตอร์จากรอยแยก",body:"ประตูมิติจำนวนมากเปิดค้าง สิ่งมีชีวิตประหลาด เริ่มออกมาจากอีกฟาก ผู้รอดชีวิตต้องเริ่มต้นใหม่ บนเกาะลอยฟ้า"},{title:"Element Tower",body:"หลายปีต่อมา เราสร้างหอคอย ที่แปลงพลังงานรอยแยก เป็นไฟ น้ำแข็ง และสายฟ้า เพื่อปกป้องเกาะ จนกว่าจะปิดประตูได้"}],start:"เริ่มเกม",resume:"กลับสู่เกม",replay:"ดูเรื่องราว"},research:{tab:"บันทึกวิจัย",intro:"มอนสเตอร์จากรอยแยก (Rift Monsters) เป็นสิ่งมีชีวิตจากต่างมิติ พลังงานที่ผันผวนระหว่างปิดประตู ดึงดูดพวกมันเข้าหาหอคอย",empty:"ยังไม่มีบันทึก พบสิ่งมีชีวิตระหว่างระลอก เพื่อเริ่มสังเกตพฤติกรรม",pending:"ความสามารถที่ยังไม่พบ จะบันทึกเมื่อปรากฏจริง ในรอบนี้",unlocked:"บันทึกวิจัยใหม่"},helpSteps:[{heading:"ผู้เฝ้าป้อม สร้างป้อมแล้วเริ่มระลอก",body:"Element Tower คือหอคอยวิจัย ที่ป้องกันเกาะอัตโนมัติ มอนสเตอร์จากรอยแยก เข้ามาทางประตู 3 จุด ปกป้องหอคอยให้ครบ 10 ระลอก เพื่อปิดประตูอย่างปลอดภัย"},{heading:"ใช้พลังงานรอยแยกเพิ่มพลัง",body:"พลังงานรอยแยก (Rift Energy) จากประตู แปลงเป็นธาตุ FIRE FROST STORM ใช้การ์ดด้านล่าง เพื่อเพิ่มพลังธาตุและระดับแกนป้อม"},{heading:"ใช้ข้อมูลวิจัยในผังทักษะ",body:"ได้ข้อมูลเมื่อสร้างป้อมและผ่านระลอก ใช้ปลดโหนด เพื่อปรับวิธีป้องกันเกาะ"},{heading:"ใช้ Nova ในจังหวะคับขัน",body:"ปล่อยพลังฉุกเฉินจากแกนป้อม แล้วรอชาร์จ"}],treeGuide:[{heading:"ข้อมูลวิจัย",body:"สร้างป้อม +1 · ผ่านระลอก +1 · ระลอกบอส (5, 10, …) เพิ่มอีก +1 · ก่อนระลอก 10 มีรวม 11 หน่วย"},{heading:"โครงของสาย",body:"4 สาย สายละ 7 โหนด: ชั้น I 2 โหนด → ทางแยก II เลือก 1 ทาง → ชั้น III ของทางนั้น → ขั้นสูงสุด ★"},{heading:"ขั้นสูงสุด",body:"ใช้ข้อมูลวิจัย 2 หน่วย ต้องใช้ในสายนั้นครบ 4 หน่วย และมีได้ 1 โหนดต่อรอบ"},{heading:"พลังงานกับข้อมูลวิจัย",body:"พลังงานซื้อระดับพลังและซ่อม · ข้อมูลวิจัยปลดโหนด · สายธาตุต้องปลดด้วยพลังงานก่อน"},{heading:"รีเซ็ต",body:"ทำได้เฉพาะระหว่างระลอก คืนข้อมูลวิจัยทั้งหมด ครั้งแรก 150 พลังงาน แพงขึ้นครั้งละ 100 พลังงาน"},{heading:"เปิดผังได้ทุกเวลา",body:'เกมหยุดขณะเปิด เลือกโหนดก่อน แล้วกด "ปลดโหนด" เพื่อยืนยัน'}],simulation:{label:"การจำลองจากคลังข้อมูลของหอคอย",short:"การจำลอง",action:"จำลองแบบไม่สิ้นสุด",start:"เริ่มการจำลองจากคลังข้อมูลของหอคอย",locked:"ปิดประตูแรกก่อน เพื่อใช้คลังข้อมูลของหอคอย",explanation:"ศึกษาต่อได้ด้วยการจำลอง จากคลังข้อมูลของหอคอย"},victory:{title:"ประตูแรกปิดลงแล้ว",lines:["เราปิดประตูได้อย่างปลอดภัย แผ่นดินใกล้เคียง ค่อย ๆ เชื่อมกัน","หอคอยใช้ข้อมูลวิจัย ควบคุมให้เกาะลดระดับลงช้า ๆ เมฆเคลื่อนผ่านขอบผา","พลังธาตุค่อย ๆ จาง งานวิจัยยังอยู่กับเรา","ผู้เฝ้าป้อม วันนี้เรารู้แล้วว่า เราฟื้นฟูโลกได้"]},defeat:{title:"หอคอยเงียบลง",line:"ประตูยังเปิดอยู่ บันทึกครั้งนี้ช่วยให้เรา เตรียมพร้อมครั้งต่อไป ลองปรับธาตุ ใช้ Nova และซ่อมป้อม",simulationTitle:"สิ้นสุดการจำลอง",simulationLine:"บันทึกการจำลองครั้งนี้ไว้แล้ว เรากลับมาทบทวน สิ่งที่เรียนรู้ได้เสมอ"}};function B_(i){return i.phase!=="build"&&i.phase!=="ready"?null:i.phase==="build"?Oe.foundation:i.endless?qc[Math.max(0,i.wave-10)%qc.length]:F_[i.wave]??null}function z_(i){return Ii.filter(e=>i.seenTraits.includes(e)).map(e=>({trait:e,note:k_[e]}))}function H_(i){return O_.filter(e=>i.seenMonsters.some(t=>t.kind===e.kind&&(e.boss===void 0||t.boss===e.boss)))}const Du=10,Dl={"green-blob":{hp:22,speed:1.05,reward:7,damage:8,radius:.825},demon:{hp:31,speed:1.24,reward:9,damage:10,radius:1.15},yeti:{hp:64,speed:.8,reward:13,damage:15,radius:1.025},orc:{hp:43,speed:1,reward:10,damage:12,radius:.925},"orc-skull":{hp:54,speed:.94,reward:12,damage:14,radius:.99},alien:{hp:25,speed:1.55,reward:10,damage:8,radius:.69},"mushroom-king":{hp:48,speed:.86,reward:11,damage:12,radius:1.025},"blue-demon":{hp:39,speed:1.35,reward:12,damage:11,radius:1.175}},Uu=.1,Nu=1e6,V_=1.3,G_={2:.8,3:.9,4:.85,5:.9};function On(i,e){return vu(i,e)}function rr(i){const e=On(i.lane,i.progress),t=On(i.lane,i.progress-.002),n=On(i.lane,i.progress+.002),s=n.x-t.x,r=n.z-t.z,a=Math.hypot(s,r)||1,o=Math.floor((i.id-1)/3)%3-1,l=Math.min(1,Math.max(0,(1-i.progress)/Fu)),c=o*Math.min(.85,Math.max(0,1.35-i.radius))*l;return{x:e.x-r/a*c,z:e.z+s/a*c}}const Fu=.16,W_=.005;function Ul(i,e,t){const n=rr({...i,progress:e}),s=On(i.lane,e);return t.every(r=>{const a=i.radius+r.radius+Uu+W_;return al(n,r)<a?!1:Math.max(e,r.progress)<1-Fu||al(s,On(r.lane,r.progress))>=a})}function ku(){return{phase:"build",built:!1,wave:0,gold:320,hp:120,maxHp:120,kills:0,score:0,core:1,levels:{fire:0,frost:0,storm:0},enemies:[],spawned:0,total:0,extra:0,remaining:0,cooldown:0,novaCharges:1,skillPoints:0,skills:[],respecCount:0,zones:[],seed:20261015,paused:!1,speed:1,endless:!1,seenTraits:[],seenMonsters:[],time:0,runtime:{accumulator:0,spawnTimer:0,boltTimer:0,fireTimer:0,frostTimer:0,stormTimer:0,nextId:1,nextMiniId:Nu,queue:[],splits:[],haste:0,skillTimers:{fire:0,frost:0,storm:0},strikes:[],nextZoneId:1}}}function Nl(i,e){return Math.round(e==="core"?75*1.5**(i.core-1):{fire:80,frost:95,storm:110}[e]*1.55**i.levels[e])}function Fl(i){return{damage:26+10*(i.core-1),range:Math.min(14.5,9.8+.36*(i.core-1)),rate:Math.min(4.5,1.5+.16*(i.core-1))}}function Bs(i){return{x:i.x,z:i.z}}function al(i,e){return Math.hypot(i.x-e.x,i.z-e.z)}function ca(i){return i.enemies.filter(e=>e.hp>0)}function $_(i){return i.seed=i.seed*1664525+1013904223>>>0,i.seed/4294967296}function Ou(i,e){const t={state:i,events:e,mods:ti(i),stats:Fl(i),damage:(n,s,r,a={})=>X_(t,n,s,r,a),aim:n=>Q_(i,n),living:()=>ca(i),retreat:(n,s)=>Y_(i,n,s),random:()=>$_(i)};return t}function X_(i,e,t,n,s){const{state:r,events:a,mods:o}=i;if(e.hp<=0)return;const l=e.brittle>0,c=l?1-(1-(s.pierce??0))*(1-Ne.brittle.pierce):s.pierce,h=s_(e,{amount:t,element:n,dot:s.dot,pierce:c,taken:l?Ne.brittle.taken:1,stormShield:o.stormShield});if(!s.silent&&!s.dot&&(a.push({type:"hit",element:n,target:e.id,from:s.from??{x:0,z:0},to:Bs(e),damage:h.damage}),h.blocked>0&&a.push({type:"armor-block",element:n,target:e.id,to:Bs(e),damage:h.blocked})),h.shieldBroken&&a.push({type:"shield-break",element:n,target:e.id,to:Bs(e),kind:e.kind,boss:e.boss}),e.hp===0){const u=e.mini?ut.split.reward:Math.round(Dl[e.kind].reward*(e.boss?6:1)*o.goldMul);r.gold+=u,r.kills++,r.score+=u*10+(e.boss?500:0),a.push({type:"kill",element:n,target:e.id,to:Bs(e),kind:e.kind,boss:e.boss,value:u}),gn(e.kind)==="split"&&!e.mini&&q_(r,e),N_(i,e)}}function Bu(i){return i.runtime.splits.reduce((e,t)=>e+t.count,0)}function zu(i){return i.total-i.spawned+i.enemies.length+Bu(i)}function q_(i,e){const t=ut.split,n=Math.max(0,Math.min(t.count,t.aliveCap-ca(i).length-Bu(i)));n&&(i.extra+=n,i.runtime.splits.push({kind:e.kind,lane:e.lane,progress:e.progress,radius:e.radius,maxHp:e.maxHp,speed:e.speed,x:e.x,z:e.z,count:n}))}function Y_(i,e,t){const n=i.enemies.filter(a=>a!==e&&a.hp>0&&a.lane===e.lane),s=a=>Ul(e,a,n);let r=e.progress;for(;r>t+1e-9;){const a=Math.max(t,r-.005);if(!s(a))break;r=a}e.progress=r,Object.assign(e,rr(e))}function K_(i,e){const t=ti(i);if(i.novaCharges>=t.novaCharges){i.novaCharges=t.novaCharges,i.cooldown=0;return}i.cooldown=Math.max(0,i.cooldown-e),i.cooldown===0&&(i.novaCharges++,i.novaCharges<t.novaCharges&&(i.cooldown=t.novaCooldown))}function Hu(i,e){const t=ut.split;for(const n of i.runtime.splits){const s=n.radius*t.radius;for(const r of[0,-.07,.07,-.14,.14,-.21]){if(!n.count)break;const a=n.progress+mu(n.lane,r);if(a<0||a>t.maxProgress)continue;const o=i.runtime.nextMiniId,l=rr({id:o,lane:n.lane,progress:a,radius:s});if(!Ul({id:o,lane:n.lane,radius:s},a,ca(i).filter(h=>h.lane===n.lane)))continue;const c=Math.max(1,Math.round(n.maxHp*t.hp));i.enemies.push({...Su(n.kind,!1,c,i.wave,o),mini:!0,id:o,kind:n.kind,lane:n.lane,progress:a,hp:c,maxHp:c,speed:n.speed*t.speed,radius:s,boss:!1,slow:0,burn:0,...l}),i.runtime.nextMiniId++,n.count--,e.push({type:"split",target:o,kind:n.kind,lane:n.lane,from:{x:n.x,z:n.z},to:l})}}i.runtime.splits=i.runtime.splits.filter(n=>n.count>0)}function kl(i){const e=i.phase==="wave"?i.wave:i.wave+1,t=ol(e),n=Object.fromEntries(Ii.map(a=>[a,0]));for(const a of t)n[gn(a.kind)]++;const s=new Set;for(let a=1;a<e;a++)for(const o of ol(a))s.add(gn(o.kind));const r=t.filter(a=>a.boss);return{wave:e,total:t.length,traits:n,newTraits:Ii.filter(a=>n[a]>0&&!s.has(a)),boss:r.length?{kind:r[0].kind,trait:gn(r[0].kind),count:r.length,stunImmune:!!nr[r[0].kind].stunImmune}:null,lanes:[0,1,2].map(a=>t.filter(o=>o.lane===a).length),mainLane:Vu(e)}}function Vu(i){return[1,0,2][((i-1)%3+3)%3]}function j_(i,e){const t=Vu(i),n=[0,1,2].filter(l=>l!==t),{main:s,of:r}=pu,a=e%r;return Math.floor((a+1)*s/r)>Math.floor(a*s/r)?t:n[(e-Math.floor((e+1)*s/r))%2]}function ol(i){const e=["green-blob","demon"];i>=2&&e.push("orc"),i>=3&&e.push("yeti","mushroom-king"),i>=4&&e.push("alien","orc-skull"),i>=6&&e.push("blue-demon");const t=Math.min(170,18+(i-1)*12),n=[];for(let s=0;s<t;s++){const r=i%5===0&&(s===t-1||i>=10&&s===Math.floor(t*.55)),a=r?i%10===0?"blue-demon":"mushroom-king":i===1?"green-blob":e[(s*7+Math.floor(s/3)+i)%e.length],o=r?i>=10&&s===t-1?2:1:j_(i,s);n.push({kind:a,lane:o,boss:r})}return n}function Z_(i,e){const t=i.runtime.queue[i.spawned];if(!t)return!1;const n=Dl[t.kind],s=1+1.35*(i.wave-1)+.026*(i.wave-1)**2,r=Math.round(n.hp*s*(t.boss?1.5:1)*V_*(G_[i.wave]??1)),a=i.runtime.nextId,o=Math.min(1.6,n.radius*(t.boss?1.55:1)),l=rr({id:a,lane:t.lane,progress:0,radius:o});if(i.enemies.some(p=>p.hp>0&&p.lane===t.lane&&al(p,l)<p.radius+o+Uu))return!1;const c={...Su(t.kind,t.boss,r,i.wave,a),id:a,kind:t.kind,lane:t.lane,progress:0,hp:r,maxHp:r,speed:n.speed*(1+Math.min(.4,(i.wave-1)*.018))*(t.boss?.68:1),radius:o,boss:t.boss,slow:0,burn:0,...l};i.enemies.push(c),i.runtime.nextId++,i.spawned++,e.push({type:"spawn",target:c.id,to:l,kind:c.kind,boss:c.boss,lane:c.lane}),i.seenMonsters.some(p=>p.kind===c.kind&&p.boss===c.boss)||i.seenMonsters.push({kind:c.kind,boss:c.boss});const h=gn(c.kind);i.seenTraits.includes(h)||(i.seenTraits.push(h),e.push({type:"research",trait:h}));const u=i.runtime.queue.slice(i.spawned).findIndex(p=>p.lane===c.lane),d=u>=0?i.runtime.queue[i.spawned+u]:void 0;return d!=null&&d.boss&&e.push({type:"boss-warning",target:i.runtime.nextId+u,lane:d.lane,kind:d.kind,boss:!0,to:On(d.lane,0)}),!0}function J_(i,e,t){const n=t.filter(r=>r.hp>0&&r.lane===i.lane),s=r=>Ul(i,r,n);if(!s(e)){let r=i.progress,a=e;for(let o=0;o<12;o++){const l=(r+a)/2;s(l)?r=l:a=l}e=r}i.progress=e,Object.assign(i,rr(i))}const Yc=i=>(1-i.progress)*sa(i.lane);function Q_(i,e){return ca(i).filter(t=>Math.hypot(t.x,t.z)<=e).sort((t,n)=>Yc(t)-Yc(n)||t.id-n.id)}function ex(i,e,t){if(i.time+=e,K_(i,e),i.phase!=="wave")return;const n=i.runtime,s=Ou(i,t);n.spawnTimer-=e,n.boltTimer-=e,n.fireTimer-=e,n.frostTimer-=e,n.stormTimer-=e;const r=i.wave<=3?i.total:3*(6+Math.min(i.wave,10));for(;n.spawnTimer<=0&&i.spawned<i.total;){if(i.enemies.length>=50){n.spawnTimer=.35;break}const l=r-i.spawned%r,c=Math.min(3,i.total-i.spawned,50-i.enemies.length,l),h=i.spawned;for(let u=0;u<c&&Z_(i,t);u++);if(i.spawned<h+c){n.spawnTimer=.05;break}n.spawnTimer+=i.spawned%r===0?11.5:.35}D_(s,e);const a=Eu(i.levels.frost,s.mods.slowBonus),o=[];for(const l of[...i.enemies].sort((c,h)=>h.progress-c.progress||c.id-h.id)){if(l.hp<=0)continue;const c=l.slow>0,h=l.burn>0;if(l.slow=Math.max(0,l.slow-e),l.burn=Math.max(0,l.burn-e),h&&s.damage(l,(4+4*i.levels.fire)*Math.max(1,l.burnStacks)*e,"fire",{dot:!0,silent:!0}),l.burn<=1e-9&&(l.burnStacks=0,l.burnDepth=0),l.hp<=0)continue;const u=s.mods.iceAge&&Math.hypot(l.x,l.z)<=Ne.iceAge.radius?Ne.iceAge.speed:1,d=a_(l,e,c||u<1,t),p=c?wu(l.kind,a):1,g=d.move?l.speed*p*u*d.speed*e*Fv*pu.speed/sa(l.lane):0;if(J_(l,Math.min(1,l.progress+g),o),o.push(l),l.progress>=1){const v=l.boss?35:Math.round(Dl[l.kind].damage*(l.mini?ut.split.leakDamage:1));if(i.hp=Math.max(0,i.hp-v),l.hp=0,t.push({type:"leak",target:l.id,to:Bs(l),kind:l.kind,boss:l.boss,damage:v}),i.hp===0){i.phase="defeat",t.push({type:"defeat",value:i.wave});break}}}if(i.phase==="wave"&&L_(s),i.phase==="wave"?Hu(i,t):i.runtime.splits=[],i.enemies=i.enemies.filter(l=>l.hp>0),i.remaining=zu(i),i.phase==="wave"&&i.remaining===0){const l=45+i.wave*12;i.gold+=l,i.score+=i.wave*100;const c=1+(i.wave%5===0?1:0);i.skillPoints+=c,t.push({type:"points",value:c}),i.zones=[],n.strikes=[],n.haste=0,i.wave>=Du&&!i.endless?(i.phase="victory",t.push({type:"victory",value:i.score})):(i.phase="ready",t.push({type:"wave",value:i.wave}))}}function Kc(i,e){const t=[];if(i.paused||i.phase==="defeat"||i.phase==="victory"||!Number.isFinite(e)||e<=0)return t;i.runtime.accumulator+=e*i.speed;const n=1/30;for(;i.runtime.accumulator+1e-10>=n;)if(i.runtime.accumulator-=n,Math.abs(i.runtime.accumulator)<1e-10&&(i.runtime.accumulator=0),ex(i,n,t),["defeat","victory"].includes(i.phase)){i.runtime.accumulator=0;break}return t}function tx(i,e){return typeof e=="string"?ha(i,e):e.type==="unlock"?Jv(i,e.node):Qv(i)}function ha(i,e){const t=[],n=o=>({ok:!1,message:o,events:t}),s=o=>({ok:!0,message:o,events:t});if(e==="restart")return Object.assign(i,ku()),s("เริ่มการป้องกันครั้งใหม่");if(e==="endless")return i.phase!=="victory"?n(Oe.simulation.locked):(i.endless=!0,i.phase="ready",i.paused=!1,s(Oe.simulation.start));if(i.phase==="victory"||i.phase==="defeat")return n("การต่อสู้จบแล้ว");if(e==="pause")return i.paused=!i.paused,s(i.paused?"หยุดเกมชั่วคราว":"กลับสู่การต่อสู้");if(e==="speed")return i.speed=i.speed===1?2:1,s(`ความเร็ว ${i.speed} เท่า`);if(i.paused)return n("เล่นต่อก่อนใช้คำสั่งนี้");if(e==="build")return i.built?n("มีป้อมอยู่แล้ว"):i.gold<120?n("ต้องการ 120 พลังงานเพื่อสร้างป้อม"):(i.gold-=120,i.built=!0,i.phase="ready",i.skillPoints+=1,t.push({type:"build",to:{x:0,z:0}},{type:"points",value:1}),s("สร้าง Element Tower แล้ว เลือกพลังและเริ่มระลอกแรก"));if(!i.built)return n("สร้างป้อมก่อน");if(e==="wave")return i.phase!=="ready"?n("กำจัดศัตรูระลอกนี้ก่อน"):(i.wave++,i.phase="wave",i.runtime.queue=ol(i.wave),i.spawned=0,i.total=i.runtime.queue.length,i.extra=0,i.runtime.splits=[],i.runtime.strikes=[],i.runtime.skillTimers={fire:0,frost:0,storm:0},i.runtime.haste=0,i.zones=[],i.remaining=i.total,i.runtime.spawnTimer=.3,i.runtime.boltTimer=0,i.runtime.fireTimer=0,i.runtime.frostTimer=0,i.runtime.stormTimer=0,t.push({type:"wave",value:i.wave}),s(`ระลอก ${i.wave} เริ่มแล้ว`));if(e==="nova")return i.phase!=="wave"?n("ใช้ Nova ระหว่างต่อสู้"):i.novaCharges<=0?n(`Nova พร้อมใน ${Math.ceil(i.cooldown)} วินาที`):U_(Ou(i,t))?(Hu(i,t),i.enemies=i.enemies.filter(o=>o.hp>0),i.remaining=zu(i),s("ปล่อย Nova")):n("ยังไม่มีศัตรูในระยะ Nova");if(e==="repair"){if(i.hp===i.maxHp)return n("พลังป้อมเต็มแล้ว");if(i.gold<60)return n("ต้องการ 60 พลังงานเพื่อซ่อมป้อม");i.gold-=60;const o=Math.min(45,i.maxHp-i.hp);return i.hp+=o,t.push({type:"upgrade",to:{x:0,z:0},value:o}),s(`ซ่อมป้อม +${o} พลัง`)}const r=Nl(i,e);return i.gold<r?n(`ต้องการ ${r} พลังงาน`):(i.gold-=r,e==="core"?i.core++:i.levels[e]++,t.push({type:"upgrade",element:e==="core"?"arcane":e,to:{x:0,z:0},value:e==="core"?i.core:i.levels[e]}),s(`${{core:"แกนป้อม",fire:"เพลิง",frost:"น้ำแข็ง",storm:"สายฟ้า"}[e]} ระดับ ${e==="core"?i.core:i.levels[e]}`))}const Nt={cell:128,columns:16,rows:8,directions:5,clips:{move:8,attack:6,death:8}},nx={move:0,attack:Nt.clips.move,death:Nt.clips.move+Nt.clips.attack},ix=Nt.clips.move+Nt.clips.attack+Nt.clips.death;function jc(i){const e=an[i];return e.elite?i:e.model}const sx=Object.keys(an).filter((i,e,t)=>an[i].elite||t.find(n=>an[n].model===an[i].model&&!an[n].elite)===i);function rx(i,e,t){return t*ix+nx[i]+e}function ax(i){const e=Math.atan2(Math.sin(i),Math.cos(i)),t=Nt.directions-1,n=Math.min(t,Math.round(Math.abs(e)/(Math.PI/t)));return{dir:n,flip:e<0&&n>0&&n<t}}const ox=.3;function lx(i,e){const t=ti(e),n=i.burn>0,s=i.slow>0?1-wu(i.kind,Eu(e.levels.frost,t.slowBonus)):0,r=gn(i.kind);return{shield:i.shield<=0?"none":i.shield<i.maxShield*ox?"cracked":"full",regen:r==="regen"&&i.hp<i.maxHp&&i.burn<=0&&i.sinceDamage>=ut.regen.delay,dashTelegraph:r==="dash"&&i.dashLeft===0&&i.stun<=0&&i.slow<=0&&i.dashTimer<=ut.dash.telegraph,dashing:i.dashLeft>0&&i.stun<=0&&i.slow<=0,stunned:i.stun>0,burnStacks:i.burn>0?Math.max(1,i.burnStacks):0,brittle:i.brittle>0,flying:r==="flying",burnPips:n&&t.burnStacks>1?{filled:Math.max(1,i.burnStacks),total:Ne.stack.max}:null,burnHot:n&&t.burnDuration>1,slowDepth:s,chill:t.slowBonus>0&&i.slow>0,charged:t.staticField&&i.charged>0}}function cx(i){const e=[];return i.burnPips&&e.push("burn"),i.charged&&e.push("charge"),e}function hx(i,e){return i.slice(1).map((t,n)=>e!==null&&Math.hypot(t.x-i[n].x,t.z-i[n].z)>=e)}function ux(i){var t;const e=ti(i);return{arcane:e.boltTargets>1?"prism":"bolt",nova:e.novaPush>0?"shockwave":"pulse",clap:e.thunderclap,lens:e.boltDamage>1,mine:e.goldMul>1,conductor:e.stormJumps>0,overcharge:e.stormFirst>1,bridgeRange:((t=e.skill.storm)==null?void 0:t.id)==="chain"?Ru(i.levels.storm,e.stormRange):null}}const dx=.2;class fx{constructor(){A(this,"last",new Map);A(this,"time",-1/0)}update(e,t){t<this.time&&this.last.clear(),this.time=t;const n=[],s=new Map;for(const r of e){const a=this.last.get(r.id);a!==void 0&&(a-r.progress)*sa(r.lane)>=dx&&n.push({id:r.id,lane:r.lane,from:a,to:r.progress}),s.set(r.id,r.progress)}return this.last=s,n}get size(){return this.last.size}}function px(i,e){return e?1:Math.max(.55,1-i*.06)}function mx(i){return .45}function Gu(i){var n;const e=i.skills.map(wt),t=s=>{var a;const r=e.filter(o=>o.branch===s);return{fork:((a=r.find(o=>o.slot==="II-A"||o.slot==="II-B"))==null?void 0:a.id)??null,deep:r.some(o=>o.slot==="III-A"||o.slot==="III-B")}};return{ports:{core:t("core"),fire:t("fire"),frost:t("frost"),storm:t("storm")},capstone:((n=e.find(s=>s.slot==="cap"))==null?void 0:n.id)??null,chargeRing:i.skills.includes("core-nova-rush"),hasteAura:i.skills.includes("core-nova-awaken")}}function gx(i){const e=ti(i);return i.novaCharges>=e.novaCharges?1:Math.min(1,Math.max(0,1-i.cooldown/e.novaCooldown))}function vx(i){return Math.min(1,Math.max(0,i.runtime.haste/Ne.novaAwaken.duration))}const Yr=Ne.iceAge.radius,_x={node:1,capstone:1.5,total:3,reduced:.3};function xx(i,e){const t=_x,n=i.map(wt),s=n.some(l=>l.slot==="cap")&&!e?t.capstone:0,r=n.filter(l=>l.slot!=="cap"||e).length,a=e?Math.min(t.reduced,t.total/Math.max(1,n.length)):r?Math.min(t.node,(t.total-s)/r):0;let o=0;return n.map(l=>{const c=l.slot==="cap",h=c&&!e?t.capstone:a,u={node:l.id,branch:l.branch,capstone:c,start:o,duration:h};return o+=h,u})}class bx{constructor(){A(this,"nodes",[])}add(e){let t=!1;for(const n of e)(n.type==="skill"||n.type==="capstone")&&n.node&&this.nodes.push(n.node),n.type==="respec"&&(this.nodes=[],t=!0);return t}clear(){this.nodes=[]}take(e){const t=this.nodes.filter((n,s)=>e.skills.includes(n)&&this.nodes.indexOf(n)===s);return this.nodes=[],t}get length(){return this.nodes.length}}class Mx{constructor(){A(this,"cues",[]);A(this,"elapsed",0);A(this,"started",0);A(this,"ended",0)}play(e){this.cues=[...e],this.elapsed=0,this.started=this.ended=0}cancel(){this.cues=[],this.started=this.ended=0}get active(){return this.cues.find(e=>this.elapsed>=e.start&&this.elapsed<e.start+e.duration)??null}get busy(){return this.ended<this.cues.length}get activeProgress(){const e=this.active;return e?Math.min(1,(this.elapsed-e.start)/e.duration):0}advance(e){this.elapsed+=e;const t=[],n=[];for(;this.started<this.cues.length&&this.elapsed>=this.cues[this.started].start;)t.push(this.cues[this.started++]);for(;this.ended<this.cues.length&&this.elapsed>=this.cues[this.ended].start+this.cues[this.ended].duration-1e-9;)n.push(this.cues[this.ended++]);return{started:t,ended:n}}}const Wu={arcane:"bolt",nova:"pulse",clap:!1,lens:!1,mine:!1,conductor:!1,overcharge:!1,bridgeRange:null},Ol={1:0,3:1,5:2};function yx(i){return i>=5?5:i>=3?3:i>0?1:0}function Sx(i,e){return i==="arcane"?e.core>=7?5:e.core>=4?3:1:yx(e.levels[i])||1}const Ex={fire:{size:96,flight:.26,arc:[40,.1]},frost:{size:84,flight:.24,arc:[26,.06]},arcane:{size:76,flight:.22,arc:[16,.04]}};function Vr(i,e,t){const n=Ol[e],s=Ex[i],r={...s,sprite:`${i}-shot-${e}`,size:s.size*(1+.12*n),glow:1.15,glowAlpha:.45+.12*n,hot:.2*n,trail:1+.35*n,every:.035-.0065*n};return i==="arcane"&&t.lens?{...r,size:r.size*1.35,glowAlpha:r.glowAlpha+.15,hot:r.hot+.3,trail:r.trail*1.3}:r}function Qa(i,e){const t=Ol[i];return{width:32*(1+.2*t)*(e.conductor?1.3:1),glowAlpha:.7+.12*t}}function Lr(i){return 1+.12*Ol[i]}const wx=["fire-orb","frost-orb","storm-orb","arcane-orb","lightning-bolt","impact-star","explosion","frost-burst","ring","rune-circle","ember","ice-chip","spark","sparkle","smoke","snowflake","glow","meteor","lava-pool","ice-field","ground-crack","frost-ring","cracks","pip","charge-glyph","stun-star","coin","wind-blade","dust-streak","ice-block","beam","band","fire-shot-1","fire-shot-3","fire-shot-5","frost-shot-1","frost-shot-3","frost-shot-5","arcane-shot-1","arcane-shot-3","arcane-shot-5","ice-spear","scorch","frost-patch","char-mark"],Mi={columns:4,rows:12};function eo(i){const e=wx.indexOf(i),t=e%Mi.columns,n=Math.floor(e/Mi.columns);return[t/Mi.columns,(Mi.rows-1-n)/Mi.rows]}const to={particles:400,perImpact:20,marks:20},jn={fire:16747069,frost:9430271,storm:13863935,arcane:12559103};function Tx(i,e,t,n){return t<=0?{...i}:t>=1?{...e}:{x:i.x+(e.x-i.x)*t,y:i.y+(e.y-i.y)*t-n*4*t*(1-t)}}const Ax={fire:"ember",frost:"snowflake",arcane:"sparkle"},Rx=[[0,.065,1],[.135,.205,.85]];class Cx{constructor(e=1){A(this,"particles",[]);A(this,"projectiles",[]);A(this,"bolts",[]);A(this,"still",!1);A(this,"scale",1);A(this,"metric",{xx:30,xy:0,zx:0,zy:15});A(this,"view",{w:1280,h:720});A(this,"screen");A(this,"marks",[]);A(this,"seed");this.seed=e>>>0||1}get reduced(){return this.still}set reduced(e){const t=e&&!this.still;if(this.still=e,!t)return;const n=this.projectiles;this.projectiles=[];for(const s of n)s.land?s.land():this.impact(s.element,s.to(),s.radius);this.particles=this.particles.filter(s=>!s.follow||n.every(r=>s.follow!==r.ride));for(const s of this.particles)s.follow||(s.vx=s.vy=s.gravity=s.spin=0);for(const s of this.bolts)s.still=!0,s.pulse=!1}px(e){return e*Math.max(.45,this.scale)}arcOf(e,t){return Math.min(e.arc[0]*this.scale,t*e.arc[1])}rand(){this.seed=this.seed+1831565813>>>0;let e=this.seed;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.rand()}clear(){this.particles=[],this.projectiles=[],this.bolts=[],this.marks=[]}shift(e,t){for(const n of this.particles)n.follow||(n.x+=e,n.y+=t);for(const n of this.projectiles)n.from.x+=e,n.from.y+=t,n.pos.x+=e,n.pos.y+=t}add(e){if(this.particles.length>=to.particles)return;const t=!this.reduced||e.follow,n={additive:!1,tint:16777215,vx:0,vy:0,gravity:0,drag:0,t:0,size1:e.size0,alpha0:1,alpha1:0,rot:0,spin:0,...e,...t?{}:{vx:0,vy:0,gravity:0,spin:0}};return this.particles.push(n),n}burst(e,t,n,s,r){const a=Math.min(t,e.left);e.left-=a;for(let o=0;o<a;o++){const l=(o+this.rand()*.8)/a*Math.PI*2,c=this.range(...r),h=n(l,c);this.add({x:s.x,y:s.y,vx:Math.cos(l)*c,vy:Math.sin(l)*c*.7,...h})}}shot(e,t,n,s,r,a,o){if(e==="storm"){this.chain(()=>t,[n,...s],{width:36});for(const p of[n,...s])this.impact("storm",p(),r*.5);return}const l=o??(()=>this.impact(e,n(),r));if(this.reduced){l();return}const c=a??Vr(e,1,Wu),h=n(),u=Math.hypot(h.x-t.x,h.y-t.y),d={element:e,from:{...t},to:n,t:0,flight:c.flight,arc:this.arcOf(c,u),radius:r,pos:{...t},rot:0,trail:0,look:c,land:o};this.projectiles.push(d),this.flier(d,c.sprite,this.px(c.size),jn[e],c.glow,c.glowAlpha,c.hot)}flier(e,t,n,s,r,a,o){const l=e.flight,c=e.ride=()=>({x:e.pos.x,y:e.pos.y,rot:e.rot});this.add({sprite:"glow",additive:!0,tint:s,x:e.pos.x,y:e.pos.y,life:l,size0:n*r,alpha0:a,alpha1:a,follow:c}),this.add({sprite:t,x:e.pos.x,y:e.pos.y,life:l,size0:n,alpha0:1,alpha1:1,follow:c}),o>0&&this.add({sprite:"glow",additive:!0,tint:16777215,x:e.pos.x,y:e.pos.y,life:l,size0:n*.6,alpha0:o,alpha1:o,follow:c})}throw(e,t,n,s,r){if(this.reduced){r==null||r();return}const a=n(),o=Math.hypot(a.x-t.x,a.y-t.y),l={element:e,from:{...t},to:n,t:0,flight:s.flight,arc:this.arcOf(s,o),radius:0,pos:{...t},rot:0,trail:0,look:s,land:r??(()=>{})};this.projectiles.push(l),this.flier(l,s.sprite,this.px(s.size),jn[e],s.glow,s.glowAlpha,s.hot)}advanceShot(e,t){e.t+=t/e.flight;const n=e.pos,s=e.to();if(e.pos=Tx(e.from,s,e.t,e.arc),Math.hypot(e.pos.x-n.x,e.pos.y-n.y)>.01&&(e.rot=Math.atan2(e.pos.y-n.y,e.pos.x-n.x)),this.reduced||e.element==="storm"||(e.trail-=t,e.trail>0))return;e.trail=e.look.every;const r=e.look.trail,a=this.px(e.look.size)/60,o={x:e.pos.x-Math.cos(e.rot)*10*a,y:e.pos.y-Math.sin(e.rot)*10*a},l=Ax[e.element];e.look.streak&&this.add({sprite:"glow",additive:!0,tint:jn[e.element],x:o.x,y:o.y,life:.3,size0:this.px(e.look.size)*e.look.streak,size1:this.px(e.look.size)*e.look.streak*.6,aspect:.3,alpha0:.75,rot:e.rot}),e.element==="fire"?(this.add({sprite:l,x:o.x,y:o.y,vx:this.range(-30,30),vy:this.range(-60,-20),life:this.range(.25,.4)*r,size0:this.px(12)*Math.max(1,a),size1:this.px(3),spin:this.range(-4,4)}),this.rand()<(e.look.sprite==="meteor"?.8:.4)&&this.add({sprite:"smoke",x:o.x,y:o.y,vy:-25,life:.45*r,size0:this.px(12)*a,size1:this.px(24)*a,alpha0:.55})):e.element==="frost"?this.add({sprite:this.rand()<.5?"snowflake":"ice-chip",x:o.x,y:o.y,vx:this.range(-25,25),vy:this.range(-20,20),life:.35*r,size0:this.px(10),size1:this.px(4),spin:this.range(-3,3)}):this.add({sprite:l,additive:!0,tint:jn.arcane,x:o.x,y:o.y,vx:this.range(-20,20),vy:this.range(-20,20),life:.3*r,size0:this.px(14),size1:this.px(2)})}impact(e,t,n,s=1){const r=Math.max(this.px(40),n)*s,a={left:to.perImpact},o=h=>{const u=Math.min(h,a.left);return a.left-=u,u},l=jn[e],c=h=>Math.round(h*Math.min(2,s));o(1)&&this.add({sprite:"glow",additive:!0,tint:l,x:t.x,y:t.y,life:.22,size0:r*1.6,size1:r*2.2,alpha0:.9}),e==="fire"?(o(1)&&this.add({sprite:"explosion",x:t.x,y:t.y-r*.15,life:.42,size0:r*1.1,size1:r*1.7,alpha0:1,rot:this.range(0,6.28)}),this.burst(a,c(8),()=>({sprite:"ember",gravity:320,life:this.range(.35,.6),size0:this.px(14),size1:this.px(3),spin:this.range(-6,6)}),t,[120,240]),this.burst(a,3,()=>({sprite:"smoke",gravity:-40,drag:2,life:.7,size0:r*.4,size1:r*.8,alpha0:.6}),t,[20,50])):e==="frost"?(o(1)&&this.add({sprite:"frost-burst",x:t.x,y:t.y,life:.4,size0:r,size1:r*1.45,rot:this.range(0,6.28)}),this.burst(a,c(8),()=>({sprite:"ice-chip",gravity:360,life:this.range(.35,.55),size0:this.px(13),size1:this.px(6),spin:this.range(-8,8)}),t,[110,220]),this.burst(a,3,()=>({sprite:"snowflake",drag:3,life:.6,size0:this.px(12),size1:this.px(8),spin:this.range(-2,2)}),t,[30,70])):e==="storm"?(o(1)&&this.add({sprite:"storm-orb",x:t.x,y:t.y,life:.18,size0:r*.7,size1:r*.9}),this.burst(a,c(6),()=>({sprite:"spark",additive:!0,tint:16777215,drag:6,life:this.range(.15,.3),size0:this.px(16),size1:this.px(4),rot:this.range(0,6.28)}),t,[160,300])):(o(1)&&this.add({sprite:"impact-star",x:t.x,y:t.y,life:.22,size0:r*.7,size1:r,spin:3}),o(1)&&this.add({sprite:"spark",additive:!0,tint:16777215,x:t.x,y:t.y,life:.12,size0:r*.9,size1:r*.5,rot:this.range(0,6.28)}),this.burst(a,c(6),()=>({sprite:"sparkle",additive:!0,tint:l,drag:4,life:.35,size0:this.px(15),size1:this.px(3)}),t,[90,180]))}groundRing(e,t,n,s={}){const r=t*2,a=this.reduced?1:s.from??.35;this.add({sprite:s.sprite??"band",additive:s.additive??!1,tint:n,x:e.x,y:e.y,t:-(s.delay??0),life:s.life??.55,size0:r*a,size1:r,alpha0:s.alpha??.9,alpha1:0,ground:!0,flat:!0,ease:"out"})}edge(e,t,n,s=.5,r="band",a=.85){this.add({sprite:r,tint:n,x:e.x,y:e.y,life:s,size0:t*2,size1:t*2,alpha0:a,alpha1:0,ground:!0,flat:!0})}scar(e,t,n,s,r=16777215,a=.9,o=!1){this.add({sprite:n,additive:o,tint:r,x:e.x,y:e.y,life:s,size0:t*2,size1:t*2,alpha0:a,alpha1:0,rot:this.range(0,6.28),ground:!0,flat:!0})}mark(e,t,n,s,r=16777215,a=.8){if(this.marks=this.marks.filter(c=>c.t<c.life),this.marks.length>=to.marks){const c=this.marks.shift();this.particles=this.particles.filter(h=>h!==c)}const o=t*2,l=this.add({sprite:n,tint:r,x:e.x,y:e.y,life:s,size0:o*.85,size1:o,alpha0:a,alpha1:0,rot:this.range(0,6.28),ground:!0,flat:!0,ease:"out",late:!0});l&&this.marks.push(l)}skyBolt(e,t){const n=()=>{const s=e();return{x:s.x+(t.lean??0),y:s.y-t.height}};this.bolts.push({a:n,b:e,t:0,life:t.life??.25,width:t.width,tint:t.tint,glow:t.glow,contour:t.contour,pulse:!!t.pulse&&!this.reduced,still:this.reduced})}beam(e,t,n,s,r,a=.24){this.bolts.push({a:()=>e,b:t,t:0,life:a,width:n,sprite:"beam",tint:s,glow:r,glowAlpha:.6,still:!0})}chain(e,t,n){const s=n.life??.22,r=this.reduced,a=n.glowAlpha;t.forEach((o,l)=>{var d,p;const c=l?t[l-1]:e,h=n.width*(l?.75:1),u=l?((d=n.bright)==null?void 0:d.call(n,l))??1:n.first??1;if(l&&((p=n.bridges)!=null&&p[l-1])){const g=()=>Math.max(this.px(40),Math.hypot(o().x-c().x,o().y-c().y)*.35),v=m=>()=>{const f=c(),S=o();return{x:f.x+(S.x-f.x)*m,y:f.y+(S.y-f.y)*m-g()*4*m*(1-m)}};for(let m=0;m<3;m++)this.bolts.push({a:v(m/3),b:v((m+1)/3),t:0,life:s*1.6,width:h*1.15,tint:15984895,glow:14929151,glowAlpha:a,alpha:u,still:r,arch:!0});return}this.bolts.push({a:c,b:o,t:0,life:s,width:h,tint:n.tint,glow:n.glow,glowAlpha:a,alpha:u,still:r})})}shards(e,t){const n=t.length?t.slice(0,8):Array.from({length:5},(r,a)=>({x:e.x+Math.cos(a*1.26)*this.px(50),y:e.y+Math.sin(a*1.26)*this.px(30)})),s=.22;for(const r of n)this.add({sprite:"ice-chip",x:e.x,y:e.y,vx:(r.x-e.x)/s,vy:(r.y-e.y)/s,life:s,size0:this.px(17),size1:this.px(12),alpha0:1,alpha1:.6,rot:Math.atan2(r.y-e.y,r.x-e.x)})}streak(e,t,n){const s=Math.hypot(t.x-e.x,t.y-e.y);this.reduced||s<1||this.add({sprite:"dust-streak",x:(e.x+t.x)/2,y:(e.y+t.y)/2,life:1.2,size0:s+n,aspect:n/(s+n),alpha0:.9,alpha1:0,rot:Math.atan2(t.y-e.y,t.x-e.x),ground:!0})}screenGlow(e,t,n,s){if(this.screen&&this.particles.includes(this.screen))return;const r=Math.max(this.view.w,this.view.h)*2.6;this.screen=this.add({sprite:"glow",additive:!0,tint:t,x:e.x,y:e.y,life:s,size0:r*.8,size1:r,alpha0:n,alpha1:0,ease:"out"})}waves(e,t,n,s=3,r=.12){for(let a=0;a<s;a++)this.groundRing(e,t*(.55+.45*(a+1)/s),n,{sprite:"ring",additive:!0,life:.65,from:.12,delay:a*r,alpha:.85})}nova(e,t,n,s=[]){const r=this.reduced?1:.5;if(this.add({sprite:"rune-circle",tint:8019199,x:e.x,y:e.y,life:1.1,size0:12*r,size1:12,alpha0:.9,spin:1.5,ground:!0,flat:!0,ease:"out"}),this.add({sprite:"rune-circle",additive:!0,tint:jn.arcane,x:e.x,y:e.y,life:1.1,size0:12*r,size1:12,alpha0:.8,spin:1.5,ground:!0,flat:!0,ease:"out"}),this.add({sprite:"rune-circle",additive:!0,tint:16767370,x:e.x,y:e.y,life:1,size0:16*r,size1:16,alpha0:.6,rot:.4,spin:-1,ground:!0,flat:!0,ease:"out"}),this.groundRing(e,t,3127528,{sprite:"ring",life:.6,from:.12}),this.groundRing(e,t*.82,9399295,{sprite:"ring",life:.7,from:.1,delay:.08}),this.waves(e,t,16773320),this.screenGlow(e,13018879,.3,.65),!this.reduced){const a=(o,l,c)=>this.add({sprite:"glow",additive:!0,tint:16773840,x:e.x,y:e.y,vx:o,vy:l,life:c,size0:this.px(80),size1:this.px(30),aspect:.22,alpha0:.95,alpha1:.3,rot:Math.atan2(l,o)});if(s.length)for(const o of s.slice(0,10))a((o.x-e.x)/.35,(o.y-e.y)/.35,.35);else for(let o=0;o<10;o++){const l=(o+this.rand()*.8)/10*Math.PI*2,c=this.range(this.px(260),this.px(420));a(Math.cos(l)*c,Math.sin(l)*c*.7,.55)}}if(this.burst({left:8},8,()=>({sprite:"sparkle",additive:!0,tint:16777215,drag:2,life:.5,size0:this.px(16),size1:this.px(3)}),e,[this.px(160),this.px(260)]),!!n){this.groundRing(e,t*1.1,2080686,{sprite:"ring",life:.8,from:.08,alpha:1}),this.groundRing(e,t*1.04,2080686,{sprite:"ring",life:.7,from:.08,alpha:.8,delay:.06});for(let a=0;a<6;a++){const o=a/6*Math.PI*2+.3,l={x:Math.cos(o)*4.2,z:Math.sin(o)*4.2};this.scar({x:e.x+this.metric.xx*l.x+this.metric.zx*l.z,y:e.y+this.metric.xy*l.x+this.metric.zy*l.z},1.3,"ground-crack",1.5)}}}update(e){for(const n of this.projectiles)this.advanceShot(n,e);const t=this.projectiles.filter(n=>n.t>=1);this.projectiles=this.projectiles.filter(n=>n.t<1);for(const n of t)n.land?n.land():this.impact(n.element,n.to(),n.radius);for(const n of this.particles){if(n.t+=e,n.t<0)continue;if(n.follow){const r=n.follow();n.x=r.x,n.y=r.y,n.rot=r.rot;continue}const s=Math.exp(-n.drag*e);n.vx*=s,n.vy=n.vy*s+n.gravity*e,n.x+=n.vx*e,n.y+=n.vy*e,n.rot+=n.spin*e}this.particles=this.particles.filter(n=>n.t<n.life);for(const n of this.bolts)n.t+=e;this.bolts=this.bolts.filter(n=>n.t<n.life)}}function Px(i){if(i.t<0)return{size:i.size0,alpha:0};const e=Math.min(1,i.t/i.life),t=i.ease==="out"?1-(1-e)**3:e,n=i.late?Math.max(0,(e-.65)/.35):e;return{size:i.size0+(i.size1-i.size0)*t,alpha:i.alpha0+(i.alpha1-i.alpha0)*n}}function Ix(i){var t;const e=i.alpha??1;return i.pulse?e*(((t=Rx.find(([n,s])=>i.t>=n&&i.t<s))==null?void 0:t[2])??0):e*Math.min(1,(1-i.t/i.life)*1.6)}class Dr{constructor(e,t,n,s,r){A(this,"mesh");A(this,"cell");A(this,"alpha");A(this,"count",0);A(this,"m",new ot);A(this,"q",new Hn);A(this,"c",new Ke);A(this,"axis",new O(0,0,1));A(this,"p",new O);A(this,"s",new O);this.capacity=n,this.depth=r;const a=new _n(1,1);this.cell=new Tn(new Float32Array(n*2),2),this.alpha=new Tn(new Float32Array(n),1),this.cell.setUsage(Jt),this.alpha.setUsage(Jt),a.setAttribute("iCell",this.cell),a.setAttribute("iAlpha",this.alpha);const o=new Kt({map:e,transparent:!0,depthTest:r!==void 0,depthWrite:!1,blending:t?Wr:Ei,premultipliedAlpha:!1,side:rn,forceSinglePass:!0}),l=new et(1/Mi.columns,1/Mi.rows);o.onBeforeCompile=c=>{c.uniforms.uCellSize={value:l},c.vertexShader=`attribute vec2 iCell;
attribute float iAlpha;
uniform vec2 uCellSize;
varying float vAlpha;
`+c.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = uv * uCellSize + iCell;
vAlpha = iAlpha;`),c.fragmentShader=`varying float vAlpha;
`+c.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.a *= vAlpha;`)},o.customProgramCacheKey=()=>`vfx2d-${t}`,this.mesh=new tr(a,o,n),this.mesh.instanceMatrix.setUsage(Jt),this.mesh.frustumCulled=!1,this.mesh.renderOrder=s,this.mesh.setColorAt(0,this.c.set(16777215)),this.mesh.count=0,this.mesh.visible=!1}begin(){this.count=0}put(e,t,n){this.mesh.setMatrixAt(this.count,this.m),this.mesh.setColorAt(this.count,this.c.set(t)),this.cell.setXY(this.count,e[0],e[1]),this.alpha.setX(this.count,n),this.count++}push(e,t,n,s,r,a,o,l){this.count>=this.capacity||l<=0||(this.q.setFromAxisAngle(this.axis,-a),this.m.compose(this.p.set(t,-n,this.depth??0),this.q,this.s.set(s,r,1)),this.put(e,o,l))}pushFlat(e,t,n,s,r,a,o,l,c){if(this.count>=this.capacity||l<=0)return;const h=Math.cos(a),u=Math.sin(a),d=h*s,p=u*s,g=-u*r,v=h*r;this.m.set(c.xx*d+c.zx*p,c.xx*g+c.zx*v,0,t,-(c.xy*d+c.zy*p),-(c.xy*g+c.zy*v),0,-n,0,0,1,this.depth??0,0,0,0,1),this.put(e,o,l)}end(){if(this.mesh.count=this.count,this.mesh.visible=this.count>0,!!this.count)for(const e of[this.mesh.instanceMatrix,this.mesh.instanceColor,this.cell,this.alpha])e&&(e.clearUpdateRanges(),e.addUpdateRange(0,this.count*e.itemSize),e.needsUpdate=!0)}}class Lx{constructor(e,t,n,s,r){A(this,"shapes");A(this,"glows");A(this,"groundShapes");A(this,"groundGlows");A(this,"batches");this.shapes=new Dr(t,!1,1536,n+1),this.glows=new Dr(t,!0,1024,n),this.groundShapes=new Dr(t,!1,384,s+.01,r),this.groundGlows=new Dr(t,!0,256,s,r),this.batches=[this.shapes,this.glows,this.groundShapes,this.groundGlows],e.add(...this.batches.map(a=>a.mesh))}batch(e,t){return e?t?this.groundGlows:this.groundShapes:t?this.glows:this.shapes}sprite(e,t,n,s,r,a,o,l,c,h,u,d){const p=this.batch(t,n),g=eo(e);s?p.pushFlat(g,r,a,o,l,c,h,u,d):p.push(g,r,a,o,l,c,h,u)}draw(e,t,n){for(const r of this.batches)r.begin();const s=e.metric;for(const r of e.particles){const{size:a,alpha:o}=Px(r);this.sprite(r.sprite,r.ground,r.additive,r.flat,r.x,r.y,a,a*(r.aspect??1),r.rot,r.tint,o,s)}for(const r of t)this.sprite(r.sprite,r.ground,r.additive,r.flat,r.x,r.y,r.w,r.h,r.rot,r.tint,r.alpha,s);for(const r of e.bolts){const a=r.a(),o=r.b(),l=Math.hypot(o.x-a.x,o.y-a.y),c=Math.atan2(o.y-a.y,o.x-a.x),h=Ix(r);if(h<=0||l<.5)continue;const u=(a.x+o.x)/2,d=(a.y+o.y)/2,p=r.still||Math.floor((n+r.t)*20)%2?1:-1,g=r.pulse?h:(r.alpha??1)*(1-r.t/r.life),v=eo(r.sprite??"lightning-bolt");this.glows.push(eo("glow"),u,d,l*1.05,r.width*2.6,c,r.glow??13863935,(r.glowAlpha??.8)*g),r.contour!==void 0&&this.shapes.push(v,u,d,l,r.width*2.2*p,c,r.contour,Math.min(1,h)),(r.additive?this.glows:this.shapes).push(v,u,d,l,r.width*p,c,r.tint??16777215,Math.min(1,h))}for(const r of this.batches)r.end()}get counts(){return{top:this.shapes.mesh.count+this.glows.mesh.count,ground:this.groundShapes.mesh.count+this.groundGlows.mesh.count}}}function Dx(i){const[e,t]=i(0,0),[n,s]=i(1,0),[r,a]=i(0,1);return{xx:n-e,xy:s-t,zx:r-e,zy:a-t}}function no(i,e,t){return{x:i.xx*e+i.zx*t,y:i.xy*e+i.zy*t}}function Ux(i,e){return{rx:e*Math.hypot(i.xx,i.zx),ry:e*Math.hypot(i.xy,i.zy)}}const Nx=.5,Fx=.25,kx={lava:Ne.lava.life,ice:Ne.field.life},Ox={lava:.12,ice:.04};function Bx(i,e,t){const n=[];for(const s of i){const r=Math.min(1,Math.max(0,s.life)/Nx),a=kx[s.kind]-s.life,o=Math.min(1,Math.max(0,a)/Fx),l=s.radius*(t?1:.6+.4*(1-(1-o)**2)),c=s.id*1.7+(t?0:e*Ox[s.kind]),h={x:s.x,z:s.z};if(s.kind==="lava"){const u=t?0:.12*Math.sin(e*3.2+s.id);n.push({sprite:"glow",additive:!0,tint:16742954,alpha:(.45+u)*r,at:h,radius:l*1.25,rot:0}),n.push({sprite:"lava-pool",additive:!1,tint:16777215,alpha:.62*r,at:h,radius:l,rot:c})}else n.push({sprite:"glow",additive:!0,tint:10479871,alpha:.12*r,at:h,radius:l*1.1,rot:0}),n.push({sprite:"ice-field",additive:!1,tint:16777215,alpha:.55*r,at:h,radius:l,rot:c}),n.push({sprite:"frost-ring",additive:!1,tint:16777215,alpha:.75*r,at:h,radius:l,rot:-c})}return n}function zx(i,e,t=1){const n={x:0,z:0},s=e?0:i*.03;return[{sprite:"ice-field",additive:!1,tint:16777215,alpha:.12*t,at:n,radius:Yr,rot:s},{sprite:"glow",additive:!0,tint:12578815,alpha:.08*t,at:n,radius:Yr*1.05,rot:0}]}const di={rime:12579583,rimeDeep:3116287,burn:16751165,burnDim:4860442,hot:16773824,burnGlow:16747069,hotGlow:16771496},Zc=-.6;function Hx(i,e,t,n,s,r){const a=[],o=Math.max(.75,r),l=Math.max(1,e.feet-e.top),c=(d,p,g,v,m=16777215,f=1,S=!1,E=0)=>a.push({sprite:d,additive:S,tint:m,alpha:f,x:p,y:g,w:v,h:v,rot:E});if(i.slowDepth>0){const d=Math.max(.2,t*(.18+.7*i.slowDepth));a.push({sprite:"frost-ring",additive:!1,tint:i.chill?di.rimeDeep:di.rime,alpha:i.chill?.9:.75,x:e.x,y:e.feet,w:2*d,h:2*d,rot:0,ground:!0,flat:!0})}i.brittle&&c("cracks",e.x,e.top+l*.5,Math.min(e.width,l)*.85,16777215,.9,!1,e.id%7*.9);let h=0;if(i.burnStacks>0){const d=Math.min(3,i.burnStacks),p=Math.min(64*o,Math.max(14*o,l*(.26+.12*d)));c("glow",e.x,e.top,p*1.6,i.burnHot?di.hotGlow:di.burnGlow,i.burnHot?.5:.35,!0);for(let g=0;g<d;g++){const v=g===0?0:g===1?-1:1,m=s?1:1+.08*Math.sin(n*13+e.id+g*2.1),f=p*(g?.72:1)*m,S=f*.8,E=e.x+v*p*.36,y=e.top+p*.12-f/2;a.push({sprite:"ember",additive:!1,tint:16777215,alpha:1,x:E,y,w:S,h:f,rot:Zc}),i.burnHot&&a.push({sprite:"ember",additive:!0,tint:di.hot,alpha:.8,x:E,y,w:S*.9,h:f*.9,rot:Zc})}h=p}if(i.stunned){const d=Math.max(10*o,e.width*.32),p=d*.4,g=e.top-6*o,v=s?0:n*4;for(let m=0;m<3;m++){const f=v+m*Math.PI*2/3;c("stun-star",e.x+Math.cos(f)*d,g+Math.sin(f)*p,13*o,16777215,1,!1,s?0:f*.5)}h=Math.max(h,12*o)}let u=e.top-h-17*o;for(const d of cx(i)){if(d==="charge"){c("charge-glyph",e.x,u-3*o,18*o),u-=20*o;continue}const p=i.burnPips;for(let g=0;g<p.total;g++){const v=g<p.filled,m=v?di.burn:di.burnDim;c("pip",e.x+(g-(p.total-1)/2)*12*o,u,10*o,m,v?1:.8)}u-=13*o}return a}const Vx=15.6,Gx=1400,Jc={x:0,z:0},Wx=12124144,Qc=44,is=i=>`${i.x},${i.z}`,$x=new Set(["hit","kill","stun","tempest","shot","armor-block","shield-break","spread","discharge","shatter","leak"]),Xx=.25,io=(i,e)=>`${i}:${e}`;class qx{constructor(e,t){A(this,"quads",[]);A(this,"styles",Wu);A(this,"stages",{fire:1,frost:1,storm:1,arcane:1});A(this,"knockbacks",new fx);A(this,"mainBolt",null);A(this,"frozen",new Map);A(this,"bubbles",0);A(this,"clock",0);A(this,"ids",new Map);A(this,"deaths",new Map);A(this,"flights",[]);A(this,"aimed",new Map);A(this,"carried",new Map);A(this,"struck",new Map);A(this,"onCoin");this.vfx=e,this.space=t}onImpact(e,t){this.after(this.carried.get(e),t)}after(e,t){e&&this.flights.includes(e)?e.held.push(t):t()}aim(e,t,n){for(const s of t)s!==void 0&&(n?this.aimed.set(io(e,s),n):this.aimed.delete(io(e,s)))}unaim(e){for(const t of[...this.aimed.keys()])t.startsWith(`${e}:`)&&this.aimed.delete(t)}carry(e){if(e.target===void 0)return;let t;e.type==="hit"?(t=this.aimed.get(io(e.element,e.target)),this.struck.set(e.target,t)):e.type==="kill"&&(t=this.struck.get(e.target)),t&&this.carried.set(e,t)}fly(e,t,n){const s={left:n+Xx,held:[]};return this.flights.push(s),this.aim(e,t,s),()=>this.release([s])}release(e){for(const t of e){const n=this.flights.indexOf(t);if(!(n<0)){this.flights.splice(n,1);for(const s of t.held)s()}}}deathFlight(e){const t=e===void 0?void 0:this.deaths.get(e);return t&&this.carried.get(t)}idsOf(e){return(e??[]).map(t=>this.ids.get(is(t)))}follow(e,t,n){const s=this.space,r=s.ground(e),a=t??this.ids.get(is(e));let o=s.actor(e,a),l={x:r.x,y:r.y-this.vfx.px(Qc)*n};const c=()=>{o===void 0&&a!==void 0&&(o=s.actor(e,a));const h=o===void 0?void 0:s.place(o);return h&&(l={x:h.x,y:h.y-h.height*n}),l};return c(),c}heightOf(e,t){var s;const n=this.space.actor(e,t);return(n===void 0||(s=this.space.place(n))==null?void 0:s.height)??this.vfx.px(Qc)}sync(e){this.styles=ux(e);for(const t of["fire","frost","storm","arcane"])this.stages[t]=Sx(t,e)}handle(e){this.mainBolt=null,this.ids.clear(),this.deaths.clear(),this.aimed.clear(),this.carried.clear(),this.struck.clear();for(const t of e){if(t.type==="kill"&&t.target!==void 0&&this.deaths.set(t.target,t),!t.to||t.target===void 0||!$x.has(t.type))continue;const n=is(t.to);this.ids.has(n)||this.ids.set(n,t.target)}for(const t of e)this.carry(t),this.event(t)}event(e){const t=e.to;switch(e.type){case"shot":t&&this.shot(e,t);break;case"cast":this.aim(e.element==="arcane"||!e.element?"arcane":e.element,this.idsOf(e.targets),void 0),t&&this.cast(e,t);break;case"cast-impact":this.aim("fire",this.idsOf(e.targets),void 0),t&&this.landed(e,t);break;case"tempest":this.unaim("storm"),t&&this.tempest(t,e.target);break;case"stun":t&&this.stun(e.element??"arcane",t,e.target);break;case"zone":t&&this.zone(e.element==="fire"?"lava":"ice",t,e.value??2);break;case"shatter":if(t){const n=this.deathFlight(e.target);this.aim("frost",this.idsOf(e.targets),n),this.after(n,this.shatter(t,e.targets??[],e.target))}break;case"spread":e.from&&t&&this.after(this.deathFlight(this.ids.get(is(e.from))),this.spread(e.from,t,e.target));break;case"discharge":if(e.from&&t){const n=this.ids.get(is(e.from)),s=n===void 0?void 0:this.struck.get(n);this.aim("storm",[e.target],s),this.after(s,this.discharge(e.from,t,e.target))}break;case"nova":this.unaim("arcane"),this.vfx.nova(this.space.ground(Jc),Vx,e.value===1,(e.targets??[]).map(n=>this.follow(n,void 0,.5)()));break;case"kill":if(t){const n=this.follow(t,e.target,.5),s=this.styles.mine;this.onImpact(e,()=>{var r;return(r=this.onCoin)==null?void 0:r.call(this,n(),s)})}break}}shot(e,t){const n=e.element??"arcane",s=this.vfx,r=this.space;if(n==="storm"){this.unaim("storm"),this.storm(e,t);return}if(n==="arcane"){const d=e.damage??1,p=this.mainBolt===null||d>=this.mainBolt*.5;p&&(this.mainBolt=d);const g=Vr("arcane",this.stages.arcane,this.styles),v=this.follow(t,e.target,.5);if(!p){this.aim("arcane",[e.target],void 0),s.beam(r.towerTop(),v,s.px(g.size*.5)*mx(),10185727,14272255),s.impact("arcane",v(),s.px(26),.6);return}const m=Lr(this.stages.arcane)*(this.styles.lens?1.6:1),f=this.fly("arcane",[e.target],g.flight);s.shot("arcane",r.towerTop(),v,[],0,g,()=>{s.impact("arcane",v(),s.px(34),m),f()});return}const a=Vr(n,this.stages[n],this.styles),o=e.value??2.5,l=r.ground(t),c=this.heightOf(t,e.target),h={x:l.x,y:l.y-c*.3},u=this.fly(n,[e.target,...this.idsOf(e.targets)],a.flight);s.shot(n,r.towerTop(),()=>h,[],0,a,()=>{this.blast(n,h,l,o,"normal"),u()})}blast(e,t,n,s,r){const a=this.vfx,o=Lr(this.stages[e])*(r==="giant"?1.5:r==="meteor"?1.2:1),l=Math.min(Ux(a.metric,s).rx*.55,a.px(64));e==="fire"?(a.groundRing(n,s,16747050,{life:.4,alpha:.5}),a.groundRing(n,s,16760944,{additive:!0,life:.35,alpha:.5}),a.scar(n,s*.8,"glow",.35,16751162,.45,!0),a.edge(n,s,16751162,.4,"band",.4),a.mark(n,s*(r==="normal"?.45:.75),"scorch",r==="normal"?3:4.5,16777215,r==="normal"?.7:.85),r!=="normal"&&(a.scar(n,s*(r==="giant"?.6:.5),"ground-crack",r==="giant"?2.2:1.4),a.scar(n,s*.7,"glow",r==="giant"?1:.7,16742954,.75,!0)),r==="giant"&&(a.groundRing(n,s*1.12,16760938,{life:.75,delay:.08,from:.2}),a.waves(n,s*1.3,16765562),a.screenGlow(n,16751178,.18,.5))):(a.groundRing(n,s,7329535,{life:.4,alpha:.5}),a.edge(n,s,16777215,.4,"frost-ring",.45),a.mark(n,s*.5,"frost-patch",3,16777215,.7)),a.impact(e,t,l,o)}cast(e,t){const n=!!e.ultimate,s=e.value??2;switch(e.skill){case"meteor":this.meteorWarning(t,s,n);break;case"rain":this.rain(e.targets??[t],n);break;case"freeze":this.freeze(t,s,n);break;case"spear":this.spear(t,s,n);break;case"chain":this.chainCast(e,t);break;case"thunder":this.thunderCast(e,t);break}}landed(e,t){const n=this.vfx,s=this.space.ground(t),r=e.value??2;if(e.skill==="meteor"){this.blast("fire",{x:s.x,y:s.y-n.px(18)},s,r,e.ultimate?"giant":"meteor");return}n.groundRing(s,r,16747050,{life:.35,alpha:.55}),n.scar(s,r*.8,"glow",.3,16751162,.5,!0),n.mark(s,r*.8,"scorch",2.5,16777215,.7),n.impact("fire",{x:s.x,y:s.y-n.px(12)},n.px(34),.9)}rain(e,t){const n=this.vfx,s=Ne.rain;t&&n.screenGlow(this.space.ground(e[0]),16751178,.16,.5),e.forEach((r,a)=>{const o=this.space.ground(r),l=s.delay+a*.06;if(n.reduced)return;const c={sprite:"fire-orb",size:44,glow:1.7,glowAlpha:.75,hot:.45,trail:1.2,every:.02,flight:l,arc:[0,0],streak:1.7};n.throw("fire",{x:o.x-n.px(70),y:o.y-n.px(380)},()=>({x:o.x,y:o.y-n.px(10)}),c)})}freeze(e,t,n){const s=this.vfx,r=this.space.ground(e);s.add({sprite:"rune-circle",tint:3842008,x:r.x,y:r.y,life:.9,size0:t*1.4,size1:t*2.2,alpha0:.7,spin:-1.2,ground:!0,flat:!0,ease:"out"}),s.add({sprite:"rune-circle",additive:!0,tint:12579583,x:r.x,y:r.y,life:.9,size0:t*1.4,size1:t*2.2,alpha0:.6,spin:-1.2,ground:!0,flat:!0,ease:"out"}),s.groundRing(r,t,7329535,{life:.5,alpha:.6}),s.edge(r,t,16777215,.6,"frost-ring",.55),s.waves(r,t*1.15,15137791),s.mark(r,t*.8,"frost-patch",3.5,16777215,.8),s.impact("frost",{x:r.x,y:r.y-s.px(20)},s.px(70),1.6),n&&s.screenGlow(r,10479871,.2,.5)}spear(e,t,n){const s=this.vfx,r=this.space,a=r.towerTop(),o=r.ground(e),l={sprite:"ice-spear",size:120*t/Ne.brittle.width,glow:1.2,glowAlpha:.55,hot:.2,trail:1,every:.02,flight:.26,arc:[0,0],streak:1.4},c=()=>{for(const h of[.45,.7,.95])s.mark(r.ground({x:e.x*h,z:e.z*h}),t*.9,"frost-patch",3,16777215,.65)};s.throw("frost",a,()=>({x:o.x,y:o.y-s.px(16)}),l,()=>{s.impact("frost",o,s.px(30),.6),c()}),n&&s.screenGlow(a,10479871,.16,.45)}chainCast(e,t){const n=this.vfx,s=this.space,r=this.styles,a=Qa(this.stages.storm,r),o=[t,...(e.targets??[]).slice(1)],l=o.map((c,h)=>this.follow(c,h?void 0:e.target,.5));n.chain(()=>s.towerTop(),l,{width:n.px(a.width*1.4),glowAlpha:Math.min(1,a.glowAlpha+.2),life:.32,bridges:hx(o,r.bridgeRange)}),n.impact("storm",l[0](),n.px(44),1.4),l.slice(1).forEach(c=>n.impact("storm",c(),n.px(30),1));for(const c of o)n.mark(s.ground(c),.6,"char-mark",2.5,16777215,.75);e.ultimate&&n.screenGlow(l[0](),14268671,.16,.45)}thunderCast(e,t){const n=this.vfx,s=this.space,r=this.styles,a=Qa(this.stages.storm,r),o=Lr(this.stages.storm),l=[t,...(e.targets??[]).slice(1)].map((h,u)=>this.follow(h,u?void 0:e.target,.5)),c=l[0];if(n.skyBolt(c,{width:n.px(a.width*1.1),height:n.px(340),life:.35,lean:n.px(16)}),(e.ultimate?[t]:e.targets??[t]).forEach((h,u)=>n.mark(s.ground(h),u?.75:1.1,"char-mark",3.5,16777215,.85)),n.impact("storm",c(),n.px(46),o*(r.overcharge?1.4:1)),n.add({sprite:"ring",additive:!0,tint:r.overcharge?15985407:jn.storm,x:c().x,y:c().y,life:.45,size0:n.px(30),size1:n.px(90),alpha0:.9,ease:"out"}),r.clap){const h=s.ground(t);n.groundRing(h,Ne.clap.radius,11565823,{life:.45}),n.groundRing(h,Ne.clap.radius,15127295,{additive:!0,life:.4,alpha:.6}),n.edge(h,Ne.clap.radius,4857984,.35,"band",.35)}if(e.ultimate){(e.targets??[]).slice(1).forEach(h=>this.tempest(h)),n.screenGlow(c(),14268671,.18,.45);return}for(const h of l.slice(1))n.skyBolt(h,{width:n.px(18),height:n.px(280),life:.28,lean:-n.px(10)}),n.impact("storm",h(),n.px(28),.8)}meteorWarning(e,t,n){const s=this.vfx,r=this.space.ground(e),a=Ne.meteor.delay;if(s.add({sprite:"glow",tint:16734746,x:r.x,y:r.y,life:a,size0:t*1.9,alpha0:.25,alpha1:.5,ground:!0,flat:!0}),s.add({sprite:"band",tint:12068890,x:r.x,y:r.y,life:a,size0:t*2,alpha0:.5,alpha1:.7,ground:!0,flat:!0}),s.add({sprite:"rune-circle",tint:14172186,x:r.x,y:r.y,life:a,size0:t*1.6,size1:t*1.9,alpha0:.55,alpha1:.8,spin:2,ground:!0,flat:!0,ease:"out"}),s.add({sprite:"rune-circle",additive:!0,tint:16752704,x:r.x,y:r.y,life:a,size0:t*1.6,size1:t*1.9,alpha0:.5,alpha1:.7,spin:2,ground:!0,flat:!0,ease:"out"}),!s.reduced)for(let l=0;l<3;l++)s.groundRing(r,t,16747050,{additive:!0,life:.25,from:.75,delay:l*.2,alpha:.5});if(s.reduced){s.add({sprite:"meteor",x:r.x,y:r.y-s.px(120),life:a,size0:s.px(n?110:80),alpha0:1,alpha1:1,rot:1.2});return}const o={sprite:"meteor",size:n?100:72,glow:1.5,glowAlpha:.7,hot:.45,trail:1.6,every:.018,flight:a,arc:[0,0],streak:1.8};s.throw("fire",{x:r.x-s.px(180),y:r.y-s.px(560)},()=>({x:r.x,y:r.y-s.px(12)}),o)}storm(e,t){const n=this.vfx,s=this.space,r=this.styles,a=this.stages.storm,o=Qa(a,r),l=[t];for(const g of e.targets??[]){const v=l[l.length-1];Math.hypot(g.x-v.x,g.z-v.z)>=.14&&l.push(g)}const c=l.map((g,v)=>this.follow(g,v?void 0:e.target,.5)),h=c[0],u=()=>s.towerTop(),d=Lr(a),p=g=>n.add({sprite:"ring",additive:!0,tint:r.overcharge?15985407:jn.storm,x:g.x,y:g.y,life:.4,size0:n.px(r.overcharge?39:26),size1:n.px(r.overcharge?96:64),alpha0:r.overcharge?1:.75,ease:"out"});n.chain(u,c,{width:n.px(o.width),glowAlpha:o.glowAlpha,bright:g=>px(g,!1)}),n.impact("storm",h(),n.px(36),d*(r.overcharge?1.3:1)),p(h()),c.slice(1).forEach((g,v)=>n.impact("storm",g(),n.px(v<3?26:18),v<3?.8:.5))}tempest(e,t){const n=this.vfx,s=this.follow(e,t,.5);n.skyBolt(s,{width:n.px(18),height:n.px(300),life:.3,tint:15852287,glow:14531071,contour:6501018,pulse:!0,lean:n.px(14)}),n.impact("storm",s(),n.px(28),.8),n.mark(this.space.ground(e),.8,"char-mark",3,16777215,.8)}discharge(e,t,n){const s=this.vfx,r=this.follow(e,void 0,.5),a=this.follow(t,n,.5);return()=>{const o=r();s.bolts.push({a:r,b:a,t:0,life:.25,width:s.px(12),sprite:"beam",tint:16762938,glow:16773280,glowAlpha:.9,still:!0}),s.add({sprite:"ring",additive:!0,tint:16773280,x:o.x,y:o.y,life:.3,size0:s.px(18),size1:s.px(46),alpha0:.95,ease:"out"}),s.impact("storm",a(),s.px(24),.7)}}spread(e,t,n){const s=this.vfx,r=this.follow(e,void 0,.5),a=this.follow(t,n,.5),o=this.follow(t,n,0),l={...Vr("fire",this.stages.fire,this.styles),size:30,flight:.3,arc:[30,.25]};return()=>s.throw("fire",r(),a,l,()=>{s.impact("fire",a(),s.px(26),.6),s.groundRing(o(),.9,16747050,{life:.35,alpha:.5})})}shatter(e,t,n){const s=this.vfx,r=this.follow(e,n,.5),a=t.map(l=>this.follow(l,void 0,.5)),o=Ne.shatter.radius;return()=>{const l=this.space.ground(e),c=r();s.groundRing(l,o,7329535,{life:.35,alpha:.5}),s.edge(l,o,16777215,.35,"frost-ring",.4),s.impact("frost",c,s.px(34),.8),s.shards(c,a.map(h=>h()))}}stun(e,t,n){const s=n??this.ids.get(is(t))??this.space.actor(t);if(e==="frost"||e==="arcane"){s!==void 0&&this.frozen.set(s,e==="arcane"?Wx:16777215);return}const r=this.follow(t,n,.5)();this.vfx.impact("storm",{x:r.x,y:r.y-this.heightOf(t,n)*.45},this.vfx.px(24),.7)}zone(e,t,n){this.vfx.groundRing(this.space.ground(t),n,e==="lava"?16742946:12579583,{life:.35,from:.5,alpha:.8})}frame(e,t,n,s=1){this.quads=[];const r=this.vfx,a=Gu(e);e.time<this.clock&&(this.release([...this.flights]),r.clear(),this.frozen.clear(),this.mainBolt=null),this.clock=e.time,r.reduced&&this.release([...this.flights]);for(const o of this.flights)o.left-=n;this.release(this.flights.filter(o=>o.left<0));for(const o of this.frozen.keys())e.enemies.some(l=>l.id===o)||this.frozen.delete(o);for(const o of Bx(e.zones,t,r.reduced))this.decal(o);if(a.capstone==="frost-ice-age"&&s>.001&&this.iceAge(t,s),n>0&&!r.reduced&&this.lavaBubbles(e.zones,n),n>0)for(const o of this.knockbacks.update(e.enemies,e.time))r.streak(this.space.ground(On(o.lane,o.from)),this.space.ground(On(o.lane,o.to)),r.px(24))}marks(e,t,n,s){const r=this.frozen.get(t.id);if(r!==void 0&&!e.stunned)this.frozen.delete(t.id);else if(r!==void 0){const a=Math.max(1,t.feet-t.top),o=Math.max(t.width,a)*1.1,l=t.top+a*.55;this.push({sprite:"glow",additive:!0,tint:10479871,alpha:.35,x:t.x,y:l,w:o*1.35,h:o*1.35,rot:0}),this.push({sprite:"ice-block",additive:!1,tint:r,alpha:.72,x:t.x,y:l,w:o,h:o,rot:0})}for(const a of Hx(e,t,n,s,this.vfx.reduced,this.vfx.scale))this.push(a)}push(e){this.quads.length<Gx&&this.quads.push(e)}decal(e){const t=this.space.ground(e.at);this.push({sprite:e.sprite,additive:e.additive,tint:e.tint,alpha:e.alpha,x:t.x,y:t.y,w:e.radius*2,h:e.radius*2,rot:e.rot,ground:!0,flat:!0})}around(e,t,n=0){const s=this.space.ground(Jc),r=no(this.vfx.metric,Math.cos(t)*e,Math.sin(t)*e);return{x:s.x+r.x,y:s.y+r.y-n}}iceAge(e,t){const n=this.vfx;for(const s of zx(e,n.reduced,t))this.decal(s);if(!n.reduced)for(let s=0;s<3;s++){const r=e*.9+s*2.09,a=this.around(Yr*.72,r,n.px(14)),o=no(n.metric,-Math.sin(r),Math.cos(r));this.push({sprite:"wind-blade",additive:!0,tint:15137791,alpha:.32*t,x:a.x,y:a.y,w:n.px(80),h:n.px(80)*.55,rot:Math.atan2(o.y,o.x)})}}lavaBubbles(e,t){const n=this.vfx,s=e.filter(r=>r.kind==="lava");if(s.length)for(this.bubbles-=t;this.bubbles<=0;this.bubbles+=.25/s.length){const r=s[Math.floor(n.rand()*s.length)],a=n.rand()*Math.PI*2,o=Math.sqrt(n.rand())*r.radius*.8,l=this.space.ground({x:r.x,z:r.z}),c=no(n.metric,Math.cos(a)*o,Math.sin(a)*o);n.add({sprite:"ember",x:l.x+c.x,y:l.y+c.y,vy:-55,gravity:-30,life:.55,size0:n.px(11),size1:n.px(3),alpha0:1,alpha1:.2,spin:n.range(-3,3)})}}}const Yx=.5;function Kx(i,e){return Yx}const ll=Kx(),eh={landscape:{mask:"island-ambient.png",trees:[[669,354,41,37],[758,330,35,58],[846,283,43,49],[803,417,55,55],[705,407,27,25],[873,437,35,55],[923,330,55,47],[925,242,38,40],[955,272,32,50],[1015,252,32,50],[1055,235,23,21],[1050,410,22,22],[1128,232,55,45],[1198,247,20,23],[1283,249,38,38],[1409,280,20,22],[1415,404,32,22],[1653,294,29,48],[1648,387,40,40],[1700,337,23,25],[1745,454,37,28],[1783,592,45,45],[1718,584,24,22],[1468,510,42,20],[490,570,40,18],[615,667,48,45],[713,622,32,40],[803,662,25,35],[778,747,30,25],[885,712,57,60],[979,670,41,60],[973,737,40,25],[1056,648,51,48],[1144,657,40,30],[1154,752,56,50],[1198,797,50,42],[1328,794,30,27],[1583,784,35,18],[1488,807,40,25]],waterfalls:[{x0:640,x1:702,top:762,bottom:1044},{x0:930,x1:994,top:832,bottom:1092}],farIslands:[[92,87,68,55],[238,260,130,110],[50,374,30,28],[110,434,50,45],[250,524,85,70],[196,717,76,75],[328,817,73,85],[555,120,45,43],[620,177,25,30],[535,884,55,28],[1400,172,50,50],[2118,77,65,52],[1888,180,78,68],[1781,214,26,28],[2110,354,132,108],[2295,370,20,25],[2256,447,28,26],[1806,432,24,30],[1898,487,33,35],[2054,607,88,82],[1943,772,62,60],[2176,870,108,95]],birdSky:[0,40,2304,332],sparkles:[1152,584,610,295]}},jx=i=>[(i.x0+i.x1)/2,i.bottom],zt={sway:{amplitude:3.4,rustle:.45,direction:[.94,.34],gustFrequency:.011,gustSpeed:1.1,swaySpeed:1.6,rustleSpeed:4.6},bob:{height:3.2,speed:.65},water:{speed:120,light:.32},clouds:{drift:7,opacity:.22,warp:2.5},birds:{maxFlocks:2,perFlock:[3,5],firstDelay:[2,5],interval:[9,16],speed:[55,80],size:[15,20],flap:9,margin:60},puffs:{interval:.25,life:2,rise:12,spread:.35,size:[.8,1.7],alpha:.6},sparkles:{count:9,interval:.45,life:[2.4,4],rise:30,size:[11,17]}},Kr=["bird-up","bird-down","puff","sparkle"];function $u(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}class Zx{constructor(e,t=1){A(this,"rand");A(this,"flocks",[]);A(this,"puffs",[]);A(this,"motes",[]);A(this,"nextFlock");A(this,"puffClock",0);A(this,"moteClock",0);A(this,"time",0);this.layout=e,this.rand=$u(t),this.nextFlock=this.between(zt.birds.firstDelay)}between([e,t]){return e+(t-e)*this.rand()}update(e,t=!1){if(t){this.flocks=[],this.puffs=[],this.motes=[];return}this.time+=e,this.updateBirds(e),this.updatePuffs(e),this.updateMotes(e)}updateBirds(e){const t=zt.birds,[n,s,r,a]=this.layout.birdSky;if(this.nextFlock-=e,this.nextFlock<=0&&this.flocks.length<t.maxFlocks){const o=this.rand()<.5?1:-1,l=Math.round(this.between([t.perFlock[0],t.perFlock[1]])),c=Array.from({length:l},(h,u)=>{const d=Math.ceil(u/2),p=u%2?-1:1;return{dx:-o*d*14,dy:p*d*9,phase:this.rand()*6.2832,size:this.between(t.size)}});this.flocks.push({dir:o,x:o>0?n-t.margin:r+t.margin,baseY:this.between([s+20,a-20]),speed:this.between(t.speed),t:0,birds:c}),this.nextFlock=this.between(t.interval)}for(const o of this.flocks)o.t+=e,o.x+=o.dir*o.speed*e;this.flocks=this.flocks.filter(o=>o.dir>0?o.x<r+t.margin*2:o.x>n-t.margin*2)}updatePuffs(e){const t=zt.puffs;for(const n of this.puffs)n.age+=e,n.x+=n.vx*e,n.y-=t.rise*e;for(this.puffs=this.puffs.filter(n=>n.age<t.life),this.puffClock+=e;this.puffClock>=t.interval;this.puffClock-=t.interval)for(const n of this.layout.waterfalls){const[s,r]=jx(n),a=n.x1-n.x0;this.puffs.push({x:s+(this.rand()-.5)*a*t.spread*2,y:r-6,vx:(this.rand()-.5)*8,age:0,width:a})}}updateMotes(e){const t=zt.sparkles,[n,s,r,a]=this.layout.sparkles;for(const o of this.motes)o.age+=e,o.y-=t.rise/o.life*e;for(this.motes=this.motes.filter(o=>o.age<o.life),this.moteClock+=e;this.moteClock>=t.interval;this.moteClock-=t.interval){if(this.motes.length>=t.count)continue;const o=this.rand()*6.2832,l=Math.sqrt(this.rand());this.motes.push({x:n+Math.cos(o)*l*r,y:s+Math.sin(o)*l*a,age:0,life:this.between(t.life),size:this.between(t.size),phase:this.rand()*6.2832})}}sprites(){const e=[],t=zt.puffs;for(const n of this.puffs){const s=n.age/t.life;e.push({cell:"puff",x:n.x,y:n.y,size:n.width*(t.size[0]+(t.size[1]-t.size[0])*s),rot:0,alpha:t.alpha*Math.sin(Math.PI*s),flip:!1})}for(const n of this.flocks)for(const s of n.birds){const r=Math.sin(n.t*zt.birds.flap+s.phase)>0;e.push({cell:r?"bird-up":"bird-down",x:n.x+s.dx,y:n.baseY+s.dy+Math.sin(n.t*.8+s.phase*.2)*6,size:s.size,rot:0,alpha:1,flip:n.dir<0})}for(const n of this.motes){const s=n.age/n.life;e.push({cell:"sparkle",x:n.x,y:n.y,size:n.size,rot:n.age*1.5,alpha:Math.sin(Math.PI*s)*(.65+.35*Math.sin(n.age*8+n.phase)),flip:!1})}return e}}function th(i,e,t){const n=$u(t),s=new Float32Array(i*i),r=c=>c*c*(3-2*c);let a=1;for(let c=0,h=e;c<3;c++,h*=2,a*=.5){const u=Array.from({length:h*h},n),d=(p,g)=>u[g%h*h+p%h];for(let p=0;p<i;p++)for(let g=0;g<i;g++){const v=g/i*h,m=p/i*h,f=Math.floor(v),S=Math.floor(m),E=r(v-f),y=r(m-S),I=d(f,S)+(d(f+1,S)-d(f,S))*E,P=d(f,S+1)+(d(f+1,S+1)-d(f,S+1))*E;s[p*i+g]+=a*(I+(P-I)*y)}}let o=1/0,l=-1/0;for(const c of s)o=Math.min(o,c),l=Math.max(l,c);for(let c=0;c<s.length;c++)s[c]=(s[c]-o)/(l-o||1);return s}const Ns=64,Ur=128,ss=128,Tt=i=>i.toFixed(5);function Jx(){const i=document.createElement("canvas");i.width=Ns*Kr.length,i.height=Ns;const e=i.getContext("2d"),t=(r,a)=>{e.save(),e.translate(Kr.indexOf(r)*Ns+Ns/2,Ns/2),a(),e.restore()},n=r=>()=>{e.fillStyle="#34465c",e.strokeStyle="#34465c",e.lineCap="round",e.lineJoin="round",e.lineWidth=5;const a=r?-16:12,o=r?-4:6;e.beginPath(),e.moveTo(-26,a),e.quadraticCurveTo(-14,o-6,-3,2),e.quadraticCurveTo(0,4,3,2),e.quadraticCurveTo(14,o-6,26,a),e.stroke(),e.beginPath(),e.ellipse(2,3,7,4,0,0,Math.PI*2),e.fill()};t("bird-up",n(!0)),t("bird-down",n(!1)),t("puff",()=>{for(const[r,a,o]of[[-9,4,17],[9,3,16],[0,-6,19],[0,8,15]]){const l=e.createRadialGradient(r,a,0,r,a,o);l.addColorStop(0,"rgba(255,255,255,.85)"),l.addColorStop(.6,"rgba(240,250,255,.45)"),l.addColorStop(1,"rgba(235,248,255,0)"),e.fillStyle=l,e.beginPath(),e.arc(r,a,o,0,Math.PI*2),e.fill()}}),t("sparkle",()=>{const r=e.createRadialGradient(0,0,0,0,0,26);r.addColorStop(0,"rgba(255,250,215,.9)"),r.addColorStop(.35,"rgba(255,236,160,.35)"),r.addColorStop(1,"rgba(255,236,160,0)"),e.fillStyle=r,e.beginPath(),e.arc(0,0,26,0,Math.PI*2),e.fill(),e.fillStyle="#fffbe8",e.beginPath();for(let a=0;a<8;a++){const o=a*Math.PI/4,l=a%2?4:20;e.lineTo(Math.cos(o)*l,Math.sin(o)*l)}e.closePath(),e.fill()});const s=new Tl(i);return s.colorSpace=At,s}function Qx(){const i=th(ss,4,21),e=th(ss,8,34),t=new Uint8Array(ss*ss*4);for(let s=0;s<i.length;s++)t.set([i[s]*255,e[s]*255,0,255],s*4);const n=new wl(t,ss,ss);return n.wrapS=n.wrapT=$r,n.magFilter=n.minFilter=jt,n.needsUpdate=!0,n}function e1(){const i=zt.sway,e=Math.hypot(i.direction[0],i.direction[1]);return`#ifdef USE_MAP
  vec2 paintPx = vec2(vMapUv.x, 1.0 - vMapUv.y) * uPaintSize;
  vec4 amb = texture2D(uAmbient, vMapUv);
  float isle = max(0.0, (1.0 - amb.a) / 0.8);
  vec2 o = vec2(0.0);
  float gust = 0.55 + 0.45 * sin(dot(paintPx, vec2(${Tt(i.direction[0]/e)}, ${Tt(i.direction[1]/e)})) * ${Tt(i.gustFrequency)} - uTime * ${Tt(i.gustSpeed)});
  float sway = 0.75 + 0.25 * sin(uTime * ${Tt(i.swaySpeed)} + paintPx.x * 0.031 + paintPx.y * 0.017);
  float leaf = uTime * ${Tt(i.rustleSpeed)} + paintPx.x * 0.12 + paintPx.y * 0.1;
  o += amb.r * vec2(${Tt(i.amplitude)} * gust * sway + ${Tt(i.rustle)} * sin(leaf), ${Tt(i.rustle)} * cos(leaf * 1.3));
  o.y += isle * ${Tt(zt.bob.height)} * sin(uTime * ${Tt(zt.bob.speed)} + (paintPx.x * 0.0045 + paintPx.y * 0.003) * 6.2832);
  vec2 cloudUv = (paintPx + vec2(-uTime * ${Tt(zt.clouds.drift)}, 0.0)) / 520.0;
  float cloud = texture2D(uNoise, cloudUv).r;
  o += amb.b * ${Tt(zt.clouds.warp)} * vec2(cloud - 0.5, texture2D(uNoise, cloudUv * 1.7 + 0.37).r - 0.5);
  o *= uStrength;
  vec4 sampledDiffuseColor = texture2D(map, vMapUv + vec2(-o.x, o.y) / uPaintSize);
  diffuseColor *= sampledDiffuseColor;
  float streak = texture2D(uNoise, vec2(paintPx.x / 26.0, (paintPx.y - uTime * ${Tt(zt.water.speed)}) / 340.0)).g;
  diffuseColor.rgb += amb.g * uStrength * ${Tt(zt.water.light)} * smoothstep(0.5, 0.82, streak) * vec3(0.92, 1.0, 1.0);
  diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), smoothstep(0.55, 0.78, cloud) * amb.b * uStrength * ${Tt(zt.clouds.opacity)});
#endif`}class nh{constructor(e,t,n,s,r){A(this,"uniforms",{uAmbient:{value:null},uNoise:{value:Qx()},uTime:{value:0},uStrength:{value:1},uPaintSize:{value:new et(1,1)}});A(this,"sims",{landscape:new Zx(eh.landscape,1)});A(this,"mesh");A(this,"cell");A(this,"alpha");A(this,"m",new ot);A(this,"q",new Hn);A(this,"axis",new O(0,0,1));A(this,"p",new O);A(this,"s",new O);this.masks=n,this.depth=s,t.onBeforeCompile=l=>{Object.assign(l.uniforms,this.uniforms),l.fragmentShader=`uniform sampler2D uAmbient;
uniform sampler2D uNoise;
uniform float uTime;
uniform float uStrength;
uniform vec2 uPaintSize;
`+l.fragmentShader.replace("#include <map_fragment>",e1())},t.customProgramCacheKey=()=>"ambient-backdrop",t.needsUpdate=!0;const a=new _n(1,1);this.cell=new Tn(new Float32Array(Ur),1),this.alpha=new Tn(new Float32Array(Ur),1),this.cell.setUsage(Jt),this.alpha.setUsage(Jt),a.setAttribute("iCell",this.cell),a.setAttribute("iAlpha",this.alpha);const o=new Kt({map:Jx(),transparent:!0,depthWrite:!1,side:rn,forceSinglePass:!0});o.onBeforeCompile=l=>{l.vertexShader=`attribute float iCell;
attribute float iAlpha;
varying float vAlpha;
`+l.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = vec2((uv.x + iCell) / ${Tt(Kr.length)}, uv.y);
vAlpha = iAlpha;`),l.fragmentShader=`varying float vAlpha;
`+l.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.a *= vAlpha;`)},o.customProgramCacheKey=()=>"ambient-sprites",this.mesh=new tr(a,o,Ur),this.mesh.instanceMatrix.setUsage(Jt),this.mesh.frustumCulled=!1,this.mesh.renderOrder=r,this.mesh.count=0,e.add(this.mesh)}static async loadMasks(e){const t=await new iu().loadAsync(e+eh.landscape.mask);return t.colorSpace=Un,t.premultiplyAlpha=!1,t.generateMipmaps=!1,t.minFilter=t.magFilter=jt,{landscape:t}}update(e,t,n,s){const r=Math.min(.1,Math.max(0,e)),a=rl[t].size;this.uniforms.uAmbient.value=this.masks[t],this.uniforms.uPaintSize.value.set(a[0],a[1]),this.uniforms.uStrength.value=s?0:1,s||(this.uniforms.uTime.value+=r);const o=this.sims[t];o.update(r,s);let l=0;for(const c of o.sprites()){if(l>=Ur)break;const h=c.cell==="bird-up"||c.cell==="bird-down",u=Math.max(h?10:0,c.size*n.scale);this.q.setFromAxisAngle(this.axis,-c.rot),this.p.set(n.offset[0]+c.x*n.scale,-(n.offset[1]+c.y*n.scale),this.depth),this.m.compose(this.p,this.q,this.s.set(c.flip?-u:u,u,1)),this.mesh.setMatrixAt(l,this.m),this.cell.setX(l,Kr.indexOf(c.cell)),this.alpha.setX(l,c.alpha),l++}this.mesh.count=l,this.mesh.instanceMatrix.needsUpdate=this.cell.needsUpdate=this.alpha.needsUpdate=!0}get sprites(){return this.mesh.count}}const t1=1.8,Xu=.24,n1=6,i1=.7,rs=(i,[e,t])=>Math.min(1,Math.max(0,(i-e)/(t-e))),s1=i=>i*i*(3-2*i),as=i=>1-(1-i)**3,os={body:[0,.4],dust:[0,.45],crystal:[.62,.88],flash:[.88,1],canister:i=>[.3+.06*i,.48+.06*i],ring:i=>[.45+.07*i,.7+.07*i]};function ih(i,e){const t=n=>Math.round((i>>n&255)+(255-(i>>n&255))*e)<<n;return t(16)|t(8)|t(0)}function r1(i){return i>=7?3:i>=4?2:1}const Ks=["fire","frost","storm","core"],a1=["core-prism","fire-sunfall","frost-ice-age","storm-tempest"];function o1(i){return i<=0?0:Math.round(Math.min(1,.2+.16*i)*100)/100}function l1(i){const e=Gu(i),t=i.built;return{built:t,stage:t?r1(i.core):1,canisters:Ks.map(n=>{const s=n==="core"?i.core:i.levels[n];return{branch:n,level:s,fill:t?o1(s):0}}),forks:t?Object.fromEntries(Ks.flatMap(n=>{const s=e.ports[n].fork;return s&&Object.hasOwn(ju,s)?[[n,s]]:[]})):{},capstone:t&&e.capstone&&a1.includes(e.capstone)?e.capstone:null,chargeRing:t&&e.chargeRing,hasteAura:t&&e.hasteAura}}const jr=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],qu=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],sh=i=>{const e=Math.hypot(...i)||1;return[i[0]/e,i[1]/e,i[2]/e]},Yu=wn.right,Ku=wn.up,so=qu(Yu,Ku),ro=i=>[jr(i,Yu),-jr(i,Ku)];function rh(i,e,t=4){const[n,s,r]=[i.tiltX,i.spin*e,i.tiltZ],[a,o,l,c,h,u]=[Math.cos(n),Math.sin(n),Math.cos(s),Math.sin(s),Math.cos(r),Math.sin(r)],d=(E,y,I)=>{const P=[h*E-u*y,u*E+h*y,I],T=[l*P[0]+c*P[2],P[1],-c*P[0]+l*P[2]];return[T[0],a*T[1]-o*T[2],o*T[1]+a*T[2]]},p=d(0,1,0),g=d(1,0,0),v=d(0,0,1),m=sh(so.map((E,y)=>E-jr(so,p)*p[y])),f=sh(qu(p,m)),S=Array.from({length:t},(E,y)=>{const I=y/t*Math.PI*2,P=g.map((b,L)=>b*Math.cos(I)+v[L]*Math.sin(I)),[T,D]=ro(P),M=jr(P,so);return{x:T,y:D,front:M>0,depth:M}});return{major:ro(f),front:ro(m),studs:S}}const c1=.3,h1=4,u1={arcane:"core",fire:"fire",frost:"frost",storm:"storm"};class d1{constructor(){A(this,"crystal",0);A(this,"build",1);A(this,"nova",0);A(this,"muzzles",[]);A(this,"shots",0);A(this,"flash",{fire:0,frost:0,storm:0,core:0})}handle(e){for(const t of e){const n=t.element?u1[t.element]:void 0;if(t.type==="shot"&&(this.crystal=1,n&&(this.flash[n]=1,this.muzzles.push({branch:n,age:0,seed:this.shots++})),this.muzzles.length>n1&&this.muzzles.shift()),t.type==="upgrade"&&n&&(this.flash[n]=1),t.type==="cast"&&n&&(this.flash[n]=1),t.type==="tempest"&&(this.flash.storm=1),t.type==="build"){this.build=0,this.muzzles.length=0,this.nova=0,this.crystal=0;for(const s of Ks)this.flash[s]=0}t.type==="nova"&&(this.nova=1)}}update(e,t){const n=s=>Math.max(0,s-e/c1);this.crystal=n(this.crystal);for(const s of Ks)this.flash[s]=n(this.flash[s]);t&&this.build<1?(this.build=1,this.crystal=1):this.build=Math.min(1,this.build+e/t1),this.nova=Math.max(0,this.nova-e/i1);for(const s of this.muzzles)s.age+=e;for(;this.muzzles.length&&this.muzzles[0].age>=Xu;)this.muzzles.shift()}canister(e){return this.flash[e]}ringRate(){return 1+h1*this.nova}}const cl={1:{body:"body-1",dais:[245,732],daisWidth:435,cup:[240,562],crystal:150,rings:[92],canister:74,canisters:[[141,644],[161,711],[354,711],[371,644]],display:1},2:{body:"body-2",dais:[727,728],daisWidth:474,cup:[710,490],crystal:170,rings:[100,112],canister:82,canisters:[[597,597],[620,687],[840,687],[865,597]],display:1},3:{body:"body-3",dais:[1242,700],daisWidth:542,cup:[1236,402],crystal:195,rings:[114,126,138],canister:90,canisters:[[1086,554],[1044,790],[1440,790],[1381,554]],display:1}},f1={1:[100,150],2:[110,185],3:[134,240]},p1={1:{column:1,crown:1},2:{column:1,crown:1},3:{column:1,crown:1}},ah=[{spec:{tiltX:.3,tiltZ:-.25,spin:.18},dy:0},{spec:{tiltX:-.45,tiltZ:.3,spin:-.22},dy:-8},{spec:{tiltX:.15,tiltZ:.55,spin:.26},dy:8}],oh=14,m1=30,ls=.92,g1={crystal:{piece:"crystal",height:1,glow:8378623},"core-prism":{piece:"cap-prism",height:1.08,glow:10483711},"fire-sunfall":{piece:"cap-sun",height:.62,glow:16751162},"frost-ice-age":{piece:"cap-ice",height:1.08,glow:14219007},"storm-tempest":{piece:"cap-storm",height:1.25,glow:10181887}},v1={tiltX:.5,tiltZ:.2,spin:.6},Gr={fire:16742958,frost:6543103,storm:11561983,core:7339984},ju={"fire-meteor":{turn:1.4,sway:.22},"fire-wildfire":{turn:1.3},"frost-glacier":{breathe:[.05,.8]},"frost-brittle":{breathe:[.06,1.1]},"storm-chain":{crackle:!0},"storm-thunder":{crackle:!0},"core-nova-power":{breathe:[.07,2.4]},"core-nova-rush":{turn:1.8}},_1=.42,x1=13684944,fi={foot:[.5,.985],window:[.253,.357,.802,.756],orb:[.491,.118]},b1=.62,Fs={tint:8382719,alpha:.38},M1=.98,y1=.12,S1=2.4,E1=.35,w1=60,T1=1.1,lh=5,A1=12580095,ao=16769696,R1=6,pi=8781788,ch=15137791,C1=12950527,Nr=24,hh=48,uh=24,P1=9102809,dh=120;function I1(i){return i.island[1]/i.island[0]}const mi=(i,e,t,n)=>[i[0]+Math.cos(t)*e,i[1]+Math.sin(t)*e*n];function L1(i,e,t){const n=cl[i.stage],s=[],r=[],a=!i.built,o=a?1:t.pulse.build,l=o<1,c=wn.sinPitch,h=a&&!t.reduced?Math.sin(t.time*S1):0,u=a?Fs.tint:16777215,d=a?Fs.alpha+.05*h:1,p=B=>[B[0]-n.dais[0],B[1]-n.dais[1]],g=(B,H,$,oe,C,Q=u,te=d,ae)=>s.push({name:B,x:H,y:$,ux:oe,uy:0,vx:0,vy:-C,tint:Q,alpha:te,...ae?{sub:ae}:{}}),v=(B,H,$,oe,C,Q,te)=>{const ae=e.pieces[B],K=Math.max(ae.art[0],ae.art[1]),q=oe*ae.art[0]/K,fe=oe*ae.art[1]/K,Te=Math.cos(C),Ge=Math.sin(C);s.push({name:B,x:H,y:$,ux:q*Te,uy:q*Ge,vx:fe*Ge,vy:-fe*Te,tint:Q,alpha:te})},m=(B,H,$,oe,C)=>{a||r.push({x:B,y:H,size:$,color:oe,k:C*t.energy})};if(a){const B=n.daisWidth*M1,H=t.reduced?0:t.time*y1,$=Math.cos(H),oe=Math.sin(H);s.push({name:"fx-rune",x:0,y:0,ux:B*$,uy:B*oe*c,vx:B*oe,vy:-B*$*c,tint:Fs.tint,alpha:.5+.05*h}),r.push({x:0,y:0,size:n.daisWidth*.95,color:Fs.tint,k:(.22+.1*h)*t.energy})}const f=e.pieces.canister,S=e.pieces.liquid,E=n.canister/f.art[0],[y,I,P,T]=fi.window;function D(){const B=i.canisters.map((H,$)=>$).sort((H,$)=>n.canisters[H][1]-n.canisters[$][1]);for(const H of B){const{branch:$,fill:oe}=i.canisters[H],C=l?rs(o,os.canister(H)):1;if(C<=0)continue;const[Q,te]=p(n.canisters[H]),ae=f.art[0]*E,K=f.art[1]*E,q=Q-fi.foot[0]*ae,fe=te-fi.foot[1]*K-w1*(1-C**2);g("canister",q+ae/2,fe+K/2,ae,K);const Te=a?0:oe*t.energy;if(Te<=0)continue;const Ge=Gr[$],Be=t.pulse.canister($),It=ih(Ge,.55*Be),mt=(P-y)*ae,xn=q+(y+P)/2*ae,Lt=fe+T*K,An=(T-I)*K,Ui=mt*S.art[1]/S.art[0]*.3,Ni=An*Te,ii=Lt-Ni;g("liquid",xn,(Lt+ii+Ui/2)/2,mt,Math.max(0,Ni-Ui/2),It,.92,[0,.3,1,.95]),g("liquid",xn,ii,mt,Ui,It,.95,[0,0,1,.3]);const Fi=e.pieces[`glyph-${$}`],si=mt*.62/Fi.art[0];g(`glyph-${$}`,xn,Lt-An*.5,Fi.art[0]*si,Fi.art[1]*si,16777215,Math.min(1,.55+Te*.45));const ki=e.pieces.pip;if(ki){const Ts=ae*b1,pa=Ts*ki.art[0]/ki.art[1];g("pip",q+fi.orb[0]*ae,fe+fi.orb[1]*K-Ts*.42,pa,Ts,ih(Ge,.35+.4*Be),1)}const or=t.reduced?1:.85+.15*Math.sin(t.time*3+H*1.7),Oi=[q+fi.orb[0]*ae,fe+fi.orb[1]*K];m(xn,Lt-Ni/2,mt*(1.6+Te),Ge,(.18+.3*Te+.5*Be)*or),m(Oi[0],Oi[1],mt*(.8+Te*.6),Ge,.35+.4*Te+.4*Be),Be>0&&v("fx-spark",Oi[0],Oi[1],mt*(t.reduced?1.2:1.2+.5*(1-Be)),0,Ge,Be)}}const M=e.pieces[n.body],b=M.at[0]+M.art[0]/2-n.dais[0],L=M.at[1]+M.art[1]-n.dais[1],k=t.shape??p1[i.stage],[W,ee]=f1[i.stage],j=M.art[1],Z=(ee-W)*(1-k.column),ne=j-Z,G=l?s1(rs(o,os.body)):1,ce=ne*G;if(Z===0)g(n.body,b,L-ce/2,M.art[0],ce,u,d,G<1?[0,1-G,1,1]:void 0);else{let B=L,H=ce;for(const[$,oe,C]of[[ee,j,1],[W,ee,k.column],[0,W,1]]){const Q=(oe-$)*C,te=Math.min(Q,H);if(te<=0)break;g(n.body,b,B-te/2,M.art[0],te,u,d,[0,(oe-(oe-$)*te/Q)/j,1,oe/j]),B-=te,H-=te}}const me=Z===0?s[s.length-1]:{name:n.body,x:b,y:L-ce/2,ux:M.art[0],uy:0,vx:0,vy:-ce,tint:u,alpha:d};if(l){if(G>0&&G<1)for(let H=0;H<5;H++)m(b+(H-2)*M.art[0]*.16,L-ce,M.art[0]*.32,A1,.75*(1-G**4));const B=rs(o,os.dust);if(B>0&&B<1)for(let H=0;H<4;H++){const[$,oe]=mi([0,0],n.daisWidth*.5,Math.PI*(.12+.76*H/3),c),C=oe-120*as(B);v("fx-dust",$,oe-34*B,n.daisWidth*(.2+.16*B),H%2?.2:-.2,16777215,.85*(1-B)),v("fx-spark",$+(H-1.5)*10*B,C,n.crystal*.09*(1-B),0,ao,1-B),m($,C,n.crystal*.25,ao,.5*(1-B))}}const ge=g1[i.capstone??"crystal"],De=e.pieces[ge.piece],Ie=n.crystal*k.crown,We=Ie*ge.height,Ze=We*De.art[0]/De.art[1],J=p(n.cup)[0],ie=p(n.cup)[1]+Z,be=t.reduced?0:Math.sin(t.time*1.6)*3*t.energy,Ae=[J,ie+oh-Ie/2+be],ve=l?as(rs(o,os.crystal)):1,$e=(t.reduced?0:R1*t.pulse.crystal**2)-(1-ve)*Ie*T1,He=i.capstone==="fire-sunfall"?[Ae[0],Ae[1]-Ie*.1+$e]:[J,ie+oh-We/2+be+$e],R=t.reduced?0:t.ringTime,st=B=>({...B,tiltX:B.tiltX*t.energy,tiltZ:B.tiltZ*t.energy}),Fe=B=>l?as(rs(o,os.ring(B))):1,Re=a?[]:n.rings.map((B,H)=>{const $=Fe(H);return{r:B*k.crown*(.3+.7*$),open:$,c:[Ae[0],Ae[1]+ah[H].dy*k.crown],...rh(st(ah[H].spec),R+(1-$)*lh)}});i.capstone==="fire-sunfall"&&!a&&Re.push({r:We*.62*(.3+.7*ve),open:ve,c:He,...rh(st(v1),R+(1-ve)*lh)});const Me=e.pieces.stud.art,rt=m1*k.crown/Me[0],ye=n.rings.length-1,ke=t.energy>0?i.forks:{},vt=(B,H,$,oe,C,Q,te)=>{const ae=e.pieces[`fork-${B}`],K=ju[B],[q,fe]=K.breathe??[0,0],Te=Ie*_1*(1+q*Math.sin(R*fe)),Ge=Math.max(ae.art[0],ae.art[1]),Be=Te*ae.art[0]/Ge,It=Te*ae.art[1]/Ge,mt=K.turn?K.sway?K.sway*Math.sin(R*K.turn):R*K.turn:0,xn=Math.cos(mt),Lt=Math.sin(mt),An=K.crackle&&!t.reduced?.78+.22*Math.sin(R*11+$)**2:1;s.push({name:`fork-${B}`,x:oe,y:C,ux:Be*xn,uy:Be*Lt,vx:It*Lt,vy:-It*xn,tint:Q>0?16777215:x1,alpha:t.energy*An*te}),Q>0&&m(oe,C,Te*1.5,Gr[H],(.4+.45*t.pulse.canister(H))*An*Math.min(1,Q/.3)*te)},ht=B=>{const{r:H,c:$,studs:oe,open:C}=Re[ye];C>0&&Ks.forEach((Q,te)=>{const ae=ke[Q],K=oe[te];ae&&K.front===B&&vt(ae,Q,te,$[0]+K.x*H*ls,$[1]+K.y*H*ls,K.depth,C)})},w=B=>{Re.forEach(({r:H,c:$,major:oe,front:C,studs:Q,open:te},ae)=>{if(te<=0)return;const K=oe[0]<0?[-oe[0],-oe[1]]:oe,q=B?1:-1;s.push({name:"ring",x:$[0]+C[0]*H/2*q,y:$[1]+C[1]*H/2*q,ux:K[0]*2*H,uy:K[1]*2*H,vx:-C[0]*H,vy:-C[1]*H,tint:B?16777215:14272936,alpha:te,sub:B?[0,.5,1,1]:[0,0,1,.5]});for(const fe of Q)fe.front===B&&g("stud",$[0]+fe.x*H*ls,$[1]+fe.y*H*ls,Me[0]*rt,Me[1]*rt,B?16777215:13284490,te);ae===ye&&!B&&ht(!1)}),B&&Re.length&&ht(!0)},_=a?0:t.charge??0,F=_>=1&&!t.reduced&&t.energy>0&&ve>=1,Y=B=>{if(a)for(let H=0;H<3;H++){const $=H/3*Math.PI*2+(t.reduced?0:t.time*E1),oe=Math.sin($),C=t.reduced?0:Math.sin(t.time*1.3+H*2)*5;oe>0===B&&v("crystal",J+Math.cos($)*Ie*.62,Ae[1]+oe*Ie*.62*c+C,Ie*.2,(H-1)*.3,Fs.tint,.5+.05*h)}if(F)for(let H=0;H<3;H++){const $=R*1.6+H/3*Math.PI*2,oe=Math.sin($);oe>0===B&&v("fx-spark",He[0]+Math.cos($)*We*.55,He[1]+oe*We*.22,Ie*.08,0,pi,.9*t.energy)}};w(!1),Y(!1),ve>0&&g(ge.piece,He[0],He[1],Ze,We,u,d*Math.min(1,ve*2)),m(He[0],He[1],We*(i.capstone==="fire-sunfall"?2:1.3),ge.glow,(.45+.35*t.pulse.crystal)*(t.reduced?1:.85+.15*Math.sin(t.time*2.3))*ve);const se=_>=1?t.reduced?.4:.35+.12*Math.sin(t.time*3):.45*_**3;se>0&&ve>0&&m(He[0],He[1],We*1.7,pi,se*ve),w(!0),Y(!0),D();const X=t.reduced?0:t.time,Se=t.groundRatio??wn.sinPitch,he=M.art[0]*.42,Ee=(B,H,$,oe)=>{(B[1]>=0||Math.abs(B[0])>=he)&&m(B[0],B[1],H,$,oe)};if(t.range&&t.range.k>0)for(let B=0;B<dh;B++)Ee(mi([0,0],t.range.radius,B/dh*Math.PI*2,Se),24,P1,t.range.k);if(i.chargeRing){const B=Math.round((t.charge??0)*Nr);for(let H=0;H<Nr;H++)m(...mi([0,0],n.daisWidth*.56,Math.PI*(.94-.88*H/(Nr-1)),Se),30,pi,H<B?B===Nr?.8:.55:.12)}if(i.hasteAura&&(t.haste??0)>0)for(let B=0;B<8;B++)m(...mi([0,ie*.45],n.daisWidth*.36,B/8*Math.PI*2+X*2.4,Se),46,pi,.7*(t.haste??0));if(i.capstone==="frost-ice-age"&&t.iceRadius){for(let B=0;B<hh;B++)Ee(mi([0,0],t.iceRadius,B/hh*Math.PI*2,Se),26,ch,.3);for(let B=0;B<uh;B++)Ee(mi([0,0],t.iceRadius*(.55+.4*(B*37%11)/10),B/uh*Math.PI*2+X*.3,Se),34+B%3*10,ch,.75)}if(i.capstone==="storm-tempest"&&!t.reduced&&Re.forEach(({r:B,c:H,studs:$},oe)=>$.forEach((C,Q)=>{Math.sin(t.time*13+Q*2.1+oe*4.3)>.55&&m(H[0]+C.x*B*ls,H[1]+C.y*B*ls,34,C1,.8)})),t.unlock){const{color:B,t:H}=t.unlock,$=.85*Math.sin(Math.PI*Math.min(1,Math.max(0,H)));if(t.reduced)m(Ae[0],Ae[1],Ie*2,B,$);else for(let oe=0;oe<32;oe++)m(...mi([0,Ae[1]*H],n.daisWidth/2+(n.rings[0]*k.crown-n.daisWidth/2)*H,oe/32*Math.PI*2+H*3,wn.sinPitch),48,B,$)}const _e=i.capstone==="fire-sunfall"?He:[He[0],He[1]-We/2];if(!a&&t.energy>0)for(const{branch:B,age:H,seed:$}of t.pulse.muzzles){const oe=Math.min(1,H/Xu),C=1-oe,Q=Gr[B],te=$*2.39996;if(m(_e[0],_e[1],Ie*(t.reduced?.85:.6+.5*oe),Q,.8*C),v("fx-flare",_e[0],_e[1],Ie*.3*(t.reduced?1:.7+.6*oe),te,Q,C*t.energy),!t.reduced)for(let ae=0;ae<3;ae++){const K=te+ae*2.1,q=Ie*.45*as(oe);v("fx-spark",_e[0]+Math.cos(K)*q,_e[1]+Math.sin(K)*q*.8,Ie*.1*(1-.5*oe),0,Q,C*t.energy)}}const re=a||t.energy<=0?0:t.pulse.nova;if(re>0){const B=1-re,H=(He[1]+We/2)*(1-as(B));if(m(He[0],He[1],We*1.9,pi,.75*re),v("fx-flare",He[0],He[1],Ie*(t.reduced?.9:.7+.7*B),t.reduced?0:B*1.5,pi,re*t.energy),!t.reduced)for(let $=0;$<5;$++)m(b+($-2)*M.art[0]*.14,H,M.art[0]*.35,pi,.75*re)}const ue=l?rs(o,os.flash):0;if(ue>0&&ue<1){m(He[0],He[1],We*2.8,ge.glow,.9*(1-ue)),v("fx-flare",He[0],He[1],Ie*(.6+1.1*ue),ue,ge.glow,1-ue);for(let B=0;B<6;B++){const H=B/6*Math.PI*2,$=Ie*.7*as(ue);v("fx-spark",He[0]+Math.cos(H)*$,He[1]+Math.sin(H)*$*.7,Ie*.1,0,ao,1-ue)}}return{sprites:s,glows:r,top:_e,body:me}}const D1=.72,Fr=160;class oo{constructor(e,t,n){A(this,"mesh");A(this,"top",[0,0]);A(this,"box",[0,0,0,0]);A(this,"cans",new Float64Array(16));A(this,"canCount",0);A(this,"uv");A(this,"alpha");A(this,"pulse",new d1);A(this,"m",new ot);A(this,"c",new Ke);A(this,"time",0);A(this,"ringTime",0);A(this,"count",0);this.atlas=t;const s=new _n(1,1);this.uv=new Tn(new Float32Array(Fr*4),4),this.alpha=new Tn(new Float32Array(Fr),1),this.uv.setUsage(Jt),this.alpha.setUsage(Jt),s.setAttribute("iUv",this.uv),s.setAttribute("iAlpha",this.alpha);const r=new Kt({map:e,transparent:!0,alphaTest:.02,side:rn,forceSinglePass:!0});r.onBeforeCompile=a=>{a.vertexShader=`attribute vec4 iUv;
attribute float iAlpha;
varying float vAlpha;
`+a.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = iUv.xy + uv * iUv.zw;
vAlpha = iAlpha;`),a.fragmentShader=`varying float vAlpha;
`+a.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.a *= vAlpha;`)},r.customProgramCacheKey=()=>"tower-2d",this.mesh=new tr(s,r,Fr),this.mesh.instanceMatrix.setUsage(Jt),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n,this.mesh.setColorAt(0,this.c.set(16777215)),this.mesh.count=0}static async load(e,t,n){const[s,r]=await Promise.all([t.loadAsync(e),fetch(e.replace(/\.webp$/,".json")).then(a=>a.json())]);return s.colorSpace=At,s.anisotropy=n,{texture:s,atlas:r}}handle(e){this.pulse.handle(e)}update(e,t,n){this.time+=e,this.ringTime+=e*n*this.pulse.ringRate(),this.pulse.update(e,t)}draw(e,t,n,s,r,a){n*=cl[e.stage].display;const{sprites:o,glows:l,top:c,body:h}=L1(e,this.atlas,{...r,iceRadius:r.iceRadius&&r.iceRadius/n,range:r.range&&{...r.range,radius:r.range.radius/n},time:this.time,ringTime:this.ringTime,pulse:this.pulse}),u=n,[d,p]=this.atlas.size;this.count=0,this.canCount=0;for(const g of o){const v=this.atlas.pieces[g.name];if(!v||this.count>=Fr)continue;const[m,f,S,E]=v.rect,[y,I,P,T]=g.sub??[0,0,1,1],D=t[0]+g.x*n,M=t[1]+g.y*u;if(g.name==="canister"&&this.canCount<4){const b=this.canCount++*4,L=Math.abs(g.ux)*n/2,k=Math.abs(g.vy)*u/2;this.cans[b]=D-L,this.cans[b+1]=M-k,this.cans[b+2]=D+L,this.cans[b+3]=M+k}this.m.set(g.ux*n,g.vx*n,0,D,-g.uy*u,-g.vy*u,0,-M,0,0,1,s,0,0,0,1),this.mesh.setMatrixAt(this.count,this.m),this.mesh.setColorAt(this.count,this.c.set(g.tint)),this.uv.setXYZW(this.count,(m+y*S)/d,1-(f+T*E)/p,(P-y)*S/d,(T-I)*E/p),this.alpha.setX(this.count,g.alpha),this.count++}this.mesh.count=this.count,this.mesh.instanceMatrix.needsUpdate=this.uv.needsUpdate=this.alpha.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0);for(const g of l)a({...g,x:t[0]+g.x*n,y:t[1]+g.y*u,size:g.size*n});return this.top=[t[0]+c[0]*n,t[1]+c[1]*u],this.box=[t[0]+(h.x-h.ux/2)*n,t[1]+(h.y+h.vy/2)*u,t[0]+(h.x+h.ux/2)*n,t[1]+(h.y-h.vy/2)*u],this.count}hit(e,t){const[n,s,r,a]=this.box,o=(r-n)*.18;if(e>n+o&&e<r-o&&t>s&&t<a)return!0;for(let l=0;l<this.canCount*4;l+=4)if(e>this.cans[l]&&e<this.cans[l+2]&&t>this.cans[l+1]&&t<this.cans[l+3])return!0;return!1}static scaleFor(e){return e*D1/cl[3].daisWidth}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}}const lo=i=>{const e=Math.max(0,Math.min(1,i));return e*e*(3-2*e)};class U1{constructor(){A(this,"seconds",0)}update(e,t,n){return e.phase!=="victory"||e.endless?this.seconds=0:n?this.seconds=12:e.paused||(this.seconds=Math.min(12,this.seconds+Math.max(0,t))),{energy:1-lo(this.seconds/4),land:lo((this.seconds-4)/8),lowered:lo((this.seconds-4)/8)}}}const N1="painted/",F1=[16729690,16732360,12475135],co={top:".hud-top",bottom:".hud-bottom"},fh=.45,ph=.13,Yn=160,ho={color:[.479,.716,1],strength:.45,side:.6};function k1(i){const[e,t,n]=ho.color;return`varying vec2 vFx;
`+i.replace("#include <map_fragment>",`#include <map_fragment>
vec2 rimPx = vec2(abs(dFdx(vMapUv).x), abs(dFdy(vMapUv).y));
float rimUp = 1. - min(texture2D(map, vMapUv + vec2(0., rimPx.y)).a, texture2D(map, vMapUv + vec2(0., 2. * rimPx.y)).a);
float rimSide = 1. - min(texture2D(map, vMapUv - vec2(rimPx.x, 0.)).a, texture2D(map, vMapUv + vec2(rimPx.x, 0.)).a);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(${e}, ${t}, ${n}), ${ho.strength} * clamp(rimUp + ${ho.side} * rimSide, 0., 1.));
diffuseColor.rgb += vFx.x * .6;
if (vFx.y < .999 && fract(sin(dot(floor(gl_FragCoord.xy), vec2(12.9898, 78.233))) * 43758.5453) > vFx.y) discard;`)}const Ot={back:0,ambient:.5,ground:.8,groundGlowBack:.84,shadowBack:.85,tower:.9,groundGlow:.95,shadow:1,body:2,glow:3,vfx:4,bars:6},uo=-900,O1=-100,ks=i=>i*.1,mh=.5;function B1(i){const e=i.image,t=(s,r,a)=>{const o=document.createElement("canvas");o.width=r,o.height=a;const l=o.getContext("2d");return l.imageSmoothingQuality="high",l.drawImage(s,0,0,r,a),o},n=new Tl(t(t(e,288,148),36,18));return n.colorSpace=i.colorSpace,n}function fo(i=64,e=!1,t=1.6){const n=new Uint8Array(i*i*4);for(let r=0;r<i;r++)for(let a=0;a<i;a++){const o=Math.hypot(a+.5-i/2,r+.5-i/2)/(i/2),l=e?Math.max(0,1-Math.abs(o-.85)/.15):Math.max(0,1-o)**t;n.set([255*l,255*l,255*l,255*l],(r*i+a)*4)}const s=new wl(n,i,i);return s.magFilter=s.minFilter=jt,s.needsUpdate=!0,s}class cs{constructor(e,t,n){A(this,"mesh");A(this,"count",0);A(this,"m",new ot);A(this,"q",new Hn);A(this,"c",new Ke);this.capacity=t,this.mesh=new tr(new _n(1,1),e,t),this.mesh.instanceMatrix.setUsage(Jt),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n,this.mesh.setColorAt(0,new Ke(1,1,1))}begin(){this.count=0}push(e,t,n,s,r,a,o=1,l=0){this.count>=this.capacity||(this.q.setFromAxisAngle(new O(0,0,1),-r),this.m.compose(new O(e,-t,l),this.q,new O(n,s,1)),this.mesh.setMatrixAt(this.count,this.m),this.mesh.setColorAt(this.count,this.c.setHex(a).multiplyScalar(o)),this.count++)}end(){this.mesh.count=this.count,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}}function z1(i){const e=new Kt({transparent:!0,opacity:i,depthTest:!1,depthWrite:!1});return e.onBeforeCompile=t=>{t.vertexShader=`varying vec2 vBarUv;
varying vec2 vBarSize;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vBarUv = uv;
vBarSize = vec2(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz));`),t.fragmentShader=`varying vec2 vBarUv;
varying vec2 vBarSize;
`+t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
vec2 barHalf = vBarSize * .5; float barR = min(barHalf.x, barHalf.y);
vec2 barQ = abs((vBarUv - .5) * vBarSize) - barHalf + barR;
float barD = length(max(barQ, 0.)) + min(max(barQ.x, barQ.y), 0.) - barR;
diffuseColor.a *= clamp(.5 - barD, 0., 1.);`)},e.customProgramCacheKey=()=>"hp-capsule",e}function H1(i){const e=document.createElement("canvas");e.width=i.width,e.height=i.height;const t=e.getContext("2d",{willReadFrequently:!0});t.drawImage(i,0,0);const n=t.getImageData(0,0,e.width,e.height),s=n.data,r=new Uint8ClampedArray(256),a=l=>l<=.04045?l/12.92:((l+.055)/1.055)**2.4,o=l=>l<=.0031308?l*12.92:1.055*l**(1/2.4)-.055;for(let l=0;l<256;l++){const c=Math.min(.999,a(l/255)),h=c/(1-c),u=.76,d=1-u;r[l]=Math.round(o(Math.min(1,h<u?h:1-d*d/(h+d-u)))*255)}for(let l=0;l<s.length;l+=4)s[l]=r[s[l]],s[l+1]=r[s[l+1]],s[l+2]=r[s[l+2]];return t.putImageData(n,0,0),e}class Bl{constructor(e,t,n,s,r,a,o,l){A(this,"onCueStart");A(this,"onCoin");A(this,"scene",new Df);A(this,"camera",new su(0,1,0,-1,-1e3,1e3));A(this,"layout",rl.landscape);A(this,"map",new Ov(this.layout));A(this,"laneTraces",Bv(this.map));A(this,"fit",Wc(1,1,this.layout));A(this,"panels",new Xv);A(this,"resizeQueued",!1);A(this,"placed",[0,0]);A(this,"gateArt");A(this,"restoration",new U1);A(this,"backdrop");A(this,"under");A(this,"tower");A(this,"towerHover",!1);A(this,"lastStateTime",0);A(this,"sheets",new Map);A(this,"shadows");A(this,"shadowsBack");A(this,"groundGlow");A(this,"groundGlowBack");A(this,"glow");A(this,"bars");A(this,"vfx",new Cx(7));A(this,"vfxLayer");A(this,"skills",new qx(this.vfx,this.vfxSpace()));A(this,"ambient");A(this,"gateFlash",[0,0,0]);A(this,"actors",new Map);A(this,"held",new Set);A(this,"time",0);A(this,"frameMs",0);A(this,"unlockQueue",new bx);A(this,"unlockPlayer",new Mx);A(this,"reduced",matchMedia("(prefers-reduced-motion: reduce)").matches);this.renderer=e,this.high=t,e.toneMapping=Fn,e.outputColorSpace=At,e.shadowMap.enabled=!1,this.scene.background=new Ke(8373243);const c=()=>new _n(1,1);this.under=new Vt(c(),new Kt({map:B1(n),color:15134454,depthWrite:!1})),this.backdrop=new Vt(c(),new Kt({map:n,depthWrite:!1})),this.under.renderOrder=this.backdrop.renderOrder=Ot.back,this.tower=new oo(s.texture,s.atlas,Ot.tower),l&&(this.gateArt=new m_(this.scene,l,this.layout,uo+2,ks,{back:Ot.ambient+.1,body:Ot.body}));const h=fo(),u=f=>new Kt({map:f,blending:Wr,transparent:!0,depthWrite:!1,depthTest:!1}),d=new Kt({color:1780244,alphaMap:fo(64,!1,.7),transparent:!0,depthWrite:!1});d.onBeforeCompile=f=>{f.fragmentShader=f.fragmentShader.replace("#include <color_fragment>","diffuseColor.a *= vColor.r;")},d.customProgramCacheKey=()=>"ground-shadow",this.shadows=new cs(d,Yn*2,Ot.shadow),this.shadowsBack=new cs(d,Yn*2,Ot.shadowBack);const p=new Kt({alphaMap:fo(64,!1,.9),transparent:!0,depthWrite:!1});p.onBeforeCompile=f=>{f.fragmentShader=f.fragmentShader.replace("#include <color_fragment>","float glowAlpha = max(vColor.r, max(vColor.g, vColor.b)); diffuseColor.rgb = vColor / max(glowAlpha, 1e-3); diffuseColor.a *= glowAlpha;")},p.customProgramCacheKey=()=>"ground-glow",this.groundGlow=new cs(p,Yn*2,Ot.groundGlow),this.groundGlowBack=new cs(p,Yn*2,Ot.groundGlowBack),this.glow=new cs(u(h),512,Ot.glow),this.bars=new cs(z1(.92),Yn*2,Ot.bars),this.scene.add(this.under,this.backdrop,this.tower.mesh,this.shadowsBack.mesh,this.shadows.mesh,this.groundGlowBack.mesh,this.groundGlow.mesh,this.glow.mesh,this.bars.mesh),a&&(this.vfxLayer=new Lx(this.scene,a,Ot.vfx,Ot.ground,O1)),o&&(this.ambient=new nh(this.scene,this.backdrop.material,o,uo+1,Ot.ambient));for(const[f,{meta:S,texture:E}]of r)this.sheets.set(f,this.makeSheet(S,E));this.skills.onCoin=(f,S)=>{var y;const E=e.domElement.getBoundingClientRect();(y=this.onCoin)==null||y.call(this,{x:E.left+f.x,y:E.top+f.y},S)},this.resize(),addEventListener("resize",()=>this.queueResize());const g=new ResizeObserver(()=>this.queueResize());document.querySelectorAll(Object.values(co).join(",")).forEach(f=>g.observe(f));const v=new ResizeObserver(()=>{this.panels.update(innerWidth,innerHeight,this.panelBoxes())&&this.queueResize()});document.querySelectorAll("[data-hud-panel]").forEach(f=>v.observe(f)),document.fonts.ready.then(()=>this.queueResize()),matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",f=>{this.reduced=f.matches});const m=f=>{this.towerHover=f,e.domElement.style.cursor=f?"pointer":"default"};e.domElement.addEventListener("pointermove",f=>{const S=e.domElement.getBoundingClientRect();m(this.tower.hit(f.clientX-S.left,f.clientY-S.top))});for(const f of["pointerleave","pointercancel"])e.domElement.addEventListener(f,()=>m(!1))}static async create(e,t,n=()=>{}){const s="./"+N1,r=new iu,a=rl.landscape,o=[...new Set(sx.map(jc))];let l=0;const c=5+o.length,h=()=>n(++l/c),u=async S=>{const E=await r.loadAsync(s+S);return E.colorSpace=At,E.anisotropy=e.capabilities.getMaxAnisotropy(),h(),E},[d,p]=await Promise.all([u(a.image),oo.load(s+a.tower.image,r,e.capabilities.getMaxAnisotropy()).then(S=>(h(),S))]),g=await u(a.gateArt).catch(S=>{console.warn("painted gate art",S)}),v=await u("vfx.webp").catch(S=>{console.warn("painted vfx atlas",S)}),m=await nh.loadMasks(s).catch(S=>{console.warn("painted motion masks",S)}),f=new Map;return await Promise.all(o.map(async S=>{try{const E=await(await fetch(`${s}sheets/${S}.json`)).json(),y=await new Promise((P,T)=>{const D=new Image;D.onload=()=>P(D),D.onerror=T,D.src=`${s}sheets/${S}.webp`}),I=new Tl(H1(y));I.colorSpace=At,f.set(S,{meta:E,texture:I})}catch(E){console.warn("painted sheet",S,E)}h()})),new Bl(e,t,d,p,f,v,m,g)}makeSheet(e,t){const n=new _n(1,1),s=new Tn(new Float32Array(Yn*3),3),r=new Tn(new Float32Array(Yn*2),2);s.setUsage(Jt),r.setUsage(Jt),n.setAttribute("iCell",s),n.setAttribute("iFx",r);const a=new Kt({map:t,alphaTest:.5}),o=new et(Nt.cell/e.width,Nt.cell/e.height);a.onBeforeCompile=c=>{c.uniforms.uCellSize={value:o},c.vertexShader=`attribute vec3 iCell;
attribute vec2 iFx;
uniform vec2 uCellSize;
varying vec2 vFx;
`+c.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = vec2(iCell.z > .5 ? 1. - uv.x : uv.x, uv.y) * uCellSize + iCell.xy;
vFx = iFx;`),c.fragmentShader=k1(c.fragmentShader)},a.customProgramCacheKey=()=>"view2d-sprite";const l=new tr(n,a,Yn);return l.instanceMatrix.setUsage(Jt),l.frustumCulled=!1,l.renderOrder=Ot.body,l.count=0,this.scene.add(l),{meta:e,mesh:l,cell:s,fx:r}}resize(){const e=innerWidth,t=innerHeight;this.renderer.setSize(e,t),this.vfx.view={w:e,h:t},this.camera.left=0,this.camera.right=e,this.camera.top=0,this.camera.bottom=-t,this.camera.updateProjectionMatrix(),this.panels.update(e,t,this.panelBoxes()),this.place()}queueResize(){this.resizeQueued||(this.resizeQueued=!0,requestAnimationFrame(()=>{this.resizeQueued=!1,this.resize()}))}place(){const e=innerWidth,t=innerHeight,[n,s]=this.layout.size,r=this.fit,a=e===this.placed[0]&&t===this.placed[1];this.placed=[e,t],this.fit=Wc(e,t,this.layout,this.safeBand(t),Hv(this.layout,this.laneTraces),{outline:this.layout.outline,panels:this.panels.boxes});const o=Yv(r,this.fit,a);o==="clear"?this.vfx.clear():o==="slide"&&this.vfx.shift(this.fit.offset[0]-r.offset[0],this.fit.offset[1]-r.offset[1]);const[l,c]=this.fit.offset,h=this.fit.scale;this.backdrop.position.set(l+n*h/2,-(c+s*h/2),uo),this.backdrop.scale.set(n*h,s*h,1);const u=Math.max(e/n,t/s);this.under.visible=!this.fit.cover,this.under.position.set(e/2,-t/2,-950),this.under.scale.set(n*u,s*u,1)}panelBoxes(){return Array.from(document.querySelectorAll("[data-hud-panel]")).filter(e=>e.getClientRects().length).map(e=>[e,e.getBoundingClientRect()]).filter(([,e])=>e.width>0&&e.height>0).map(([e,t])=>[e,[t.left,t.top,t.right,t.bottom]])}safeBand(e){const t=r=>Array.from(document.querySelectorAll(r)).filter(a=>a.getClientRects().length).map(a=>a.getBoundingClientRect()),n=Math.max(0,...t(co.top).map(r=>r.bottom)),s=Math.min(e,...t(co.bottom).map(r=>r.top));return s-n>80?{top:n+8,bottom:s-8}:{top:0,bottom:e}}screen(e){return[this.fit.offset[0]+e[0]*this.fit.scale,this.fit.offset[1]+e[1]*this.fit.scale]}paint(e){const t=this.ground(e);return this.map.toImage(t.x,t.z)}ground(e){const t=this.actorNear(e);return t?{x:t.x,z:t.z}:{x:e.x,z:e.z}}actorNear(e,t){const n=t===void 0?void 0:this.actors.get(t);if(n)return n;let s,r=1.2;for(const a of this.actors.values()){const o=Math.hypot(a.rx-e.x,a.rz-e.z);o<r&&(r=o,s=a)}return s}screenPoint(e){const[t,n]=this.screen(this.paint(e)),s=this.renderer.domElement.getBoundingClientRect();return{x:s.left+t,y:s.top+n,ndcX:t/Math.max(1,innerWidth)*2-1}}vfxSpace(){const e=(t,n)=>{const[s,r]=this.screen(this.map.toImage(t,n));return{x:s,y:r}};return{actor:(t,n)=>{var s;return n!==void 0?this.actors.has(n)?n:void 0:(s=this.actorNear(t))==null?void 0:s.id},place:t=>{const n=this.actors.get(t);return n&&{...e(n.x,n.z),height:n.height??44*this.fit.scale}},ground:t=>e(t.x,t.z),metric:()=>this.vfx.metric,towerTop:()=>({x:this.tower.top[0],y:this.tower.top[1]})}}handle(e){this.unlockQueue.add(e)&&this.unlockPlayer.cancel(),this.tower.handle(e),this.skills.handle(e);for(const t of e){const n=t.target;t.type==="hit"&&n!==void 0&&this.skills.onImpact(t,()=>{const s=this.actors.get(n);s&&(s.flash=ph)}),t.type==="kill"&&n!==void 0&&(this.held.add(n),this.skills.onImpact(t,()=>{this.held.delete(n),this.exit(n,"kill")})),t.type==="leak"&&n!==void 0&&this.exit(n,"leak"),t.type==="spawn"&&t.lane!==void 0&&(this.gateFlash[t.lane%3]=mh)}}exit(e,t){const n=this.actors.get(e);n&&!n.exit&&(n.exit={kind:t,t:0})}update(e,t){var o,l;const n=performance.now(),s=e.paused?0:t*e.speed*ll;this.time+=s,e.time<this.lastStateTime&&(this.unlockQueue.clear(),this.unlockPlayer.cancel()),this.lastStateTime=e.time,this.playUnlocks(e,t);const r=new Set;for(const c of e.enemies){r.add(c.id);const h={x:c.x,z:c.z};let u=this.actors.get(c.id);u||(u={id:c.id,kind:c.kind,lane:c.lane,progress:c.progress,rx:c.x,rz:c.z,x:h.x,z:h.z,px:h.x,pz:h.z,hp:c.hp,maxHp:c.maxHp,boss:c.boss,mini:!!c.mini,flash:0,walk:0},this.actors.set(c.id,u));const d=Math.hypot(h.x-u.x,h.z-u.z);d>1e-4&&(u.px=u.x,u.pz=u.z),u.walk+=d,u.x=h.x,u.z=h.z,u.rx=c.x,u.rz=c.z,u.lane=c.lane,u.progress=c.progress,u.hp=c.hp,u.maxHp=c.maxHp,u.cues=lx(c,e)}for(const c of this.actors.values())c.flash=Math.max(0,c.flash-s),!r.has(c.id)&&!c.exit&&!this.held.has(c.id)&&(c.exit={kind:"kill",t:0}),c.exit&&(c.exit.t+=s),c.exit&&c.exit.t>fh&&this.actors.delete(c.id);for(let c=0;c<3;c++)this.gateFlash[c]=Math.max(0,this.gateFlash[c]-s);this.vfx.reduced=this.reduced,this.vfx.scale=this.fit.scale,this.vfx.metric=Dx((c,h)=>this.screen(this.map.toImage(c,h)));const{energy:a}=this.restoration.update(e,t,this.reduced);this.skills.sync(e),this.skills.frame(e,this.time,s,a),this.vfx.update(s),(o=this.ambient)==null||o.update(t,"landscape",this.fit,this.reduced),(l=this.gateArt)==null||l.update(this.fit,a),this.tower.update(s,this.reduced,a),this.draw(e,a),this.renderer.render(this.scene,this.camera),this.frameMs=performance.now()-n}playUnlocks(e,t){var n;if(!e.paused){if(document.body.dataset.uiModal!=="true"&&!this.unlockPlayer.busy){const s=this.unlockQueue.take(e);s.length&&this.unlockPlayer.play(xx(s,this.reduced))}if(this.unlockPlayer.busy)for(const s of this.unlockPlayer.advance(t).started)(n=this.onCueStart)==null||n.call(this,s)}}draw(e,t){var o;const n=this.fit.scale,s=h_(n);for(const l of[this.shadows,this.shadowsBack,this.groundGlow,this.groundGlowBack,this.glow,this.bars])l.begin();const r=this.screen(this.layout.tower.base)[1];this.drawTower(e,t);const a=new Map;for(const l of this.actors.values()){const[c,h]=this.screen(this.map.toImage(l.x,l.z)),u=an[l.kind],d=l_(l.kind,l),p=l.exit?Math.min(1,l.exit.t/fh):0,g=u.height*d*this.layout.actorScale*n*s,v=u.footprint*d*this.layout.actorScale*n*s*(1-p*.6),m=h>r,f=m?this.shadows:this.shadowsBack,S=m?this.groundGlow:this.groundGlowBack;for(const T of d_(v,u.hover))f.push(c+T.dx,h+T.dy,T.w,T.h,0,16777215,T.alpha,ks(h)-.01);const E=this.reduced?1:.85+.15*Math.sin(this.time*9+l.id);for(const T of p_(l.kind,v))S.push(c+T.dx,h+T.dy,T.w,T.h,0,T.color,T.k*E*(1-p),ks(h)-.01);const y=jc(l.kind),I=this.sheets.get(y);let P=h-g;if(I){const T=a.get(y)??0;a.set(y,T+1),P=this.placeSprite(I,T,l,c,h-u.hover*this.layout.actorScale*n*.7,d,s,p)}if(l.height=h-P,l.cues&&!l.exit&&this.skills.marks(l.cues,{id:l.id,x:c,feet:h,top:P,width:g*.84},u.footprint*d,this.time),!l.exit){const T=Math.max(26,g*.7),D=P-6,M=Math.max(0,l.hp/l.maxHp);this.bars.push(c,D,T,7,0,1385012),this.bars.push(c-(T-4)*(1-M)/2,D,(T-4)*M,4,0,l.boss?16760670:11134918)}}for(const[l,c]of this.sheets)c.mesh.count=a.get(l)??0,c.mesh.instanceMatrix.needsUpdate=c.cell.needsUpdate=c.fx.needsUpdate=!0;this.layout.gates.forEach((l,c)=>{const h=this.gateFlash[c]/mh,[u,d,p,g]=l.mouth,[v,m]=this.screen([u,d]),f=1.75*Math.max(p,g)*n;t>.001&&this.glow.push(v,m,f*2,f*2,0,F1[c],(.4+(this.reduced?0:.15*Math.sin(this.time*2+c))+.5*h)*t)}),(o=this.vfxLayer)==null||o.draw(this.vfx,this.skills.quads,this.time);for(const l of[this.shadows,this.shadowsBack,this.groundGlow,this.groundGlowBack,this.glow,this.bars])l.end()}drawTower(e,t){const[n,s]=this.screen(this.layout.tower.base),r=oo.scaleFor(this.layout.tower.width*this.fit.scale),a=this.unlockPlayer.active;this.tower.draw(l1(e),[n,s],r,ks(s),{reduced:this.reduced,energy:t,charge:gx(e),haste:vx(e),unlock:a?{color:Gr[a.branch],t:this.unlockPlayer.activeProgress}:void 0,iceRadius:Yr*this.map.sx*this.fit.scale,groundRatio:I1(this.layout),range:{radius:Fl(e).range*this.map.sx*this.fit.scale,k:this.towerHover?.6:e.phase==="wave"?.05:.2}},o=>this.glow.push(o.x,o.y,o.size,o.size,0,o.color,o.k))}placeSprite(e,t,n,s,r,a,o,l){var D,M;const c=e.meta,h=an[n.kind],u=u_(c,h,a),d=((D=n.exit)==null?void 0:D.kind)==="kill"?"death":"move",p=Nt.clips[d],g=d==="death"?Math.min(p-1,Math.floor(l*p)):Math.floor(n.walk/Math.max(1e-6,h.moveSpeed*u*o)/c.durations.move*p)%p,v=Math.atan2(n.x-n.px,n.z-n.pz),{dir:m,flip:f}=ax(v-wn.yaw),S=rx(d,g,m),E=c.cells[d];e.cell.setXYZ(t,S%Nt.columns*Nt.cell/c.width,(Nt.rows-1-Math.floor(S/Nt.columns))*Nt.cell/c.height,f?1:0),e.fx.setXY(t,n.flash/ph,((M=n.exit)==null?void 0:M.kind)==="leak"||d==="death"&&l>.7?1-l:1);const y=E.world/c.fitScale*u*this.layout.actorScale*this.fit.scale*o/wn.cosPitch,I=f?1-E.anchor[0]:E.anchor[0],P=s+(.5-I)*y,T=r-(.5-E.anchor[1])*y;return e.mesh.setMatrixAt(t,new ot().compose(new O(P,-T,ks(r)),new Hn,new O(y,y,1))),r-(1-E.anchor[1])*y+y*.12}toggleQuality(){return this.high=!this.high,this.renderer.setPixelRatio(fu(devicePixelRatio,this.high,du(location.search,!1))),this.resize(),this.high}benchCounts(){var t;const e=(t=this.vfxLayer)==null?void 0:t.counts;return{enemies:this.actors.size,effects:this.vfx.particles.length+this.vfx.bolts.length,projectiles:this.vfx.projectiles.length,statusQuads:this.skills.quads.length,vfxQuads:((e==null?void 0:e.top)??0)+((e==null?void 0:e.ground)??0),glow:this.glow.mesh.count,bars:this.bars.mesh.count}}diagnostics(){var n,s,r;const e=this.renderer.info.render,t=this.renderer.domElement;return{view:"2d",layout:"landscape",scale:this.fit.scale,cover:this.fit.cover,cssSize:[t.clientWidth,t.clientHeight],drawingBuffer:[t.width,t.height],pixelRatio:this.renderer.getPixelRatio(),drawCalls:e.calls,triangles:e.triangles,textures:this.renderer.info.memory.textures,enemies:this.actors.size,effects:this.vfx.particles.length+this.vfx.bolts.length,projectiles:this.vfx.projectiles.length,sheets:this.sheets.size,frameMs:this.frameMs,quality:this.high?"high":"standard",tower:{instances:this.tower.mesh.count,top:this.tower.top},layers:{shadows:this.shadows.mesh.count+this.shadowsBack.mesh.count,glow:this.glow.mesh.count,bars:this.bars.mesh.count,vfx:!!this.vfxLayer,ambient:((n=this.ambient)==null?void 0:n.sprites)??-1,gates:((s=this.gateArt)==null?void 0:s.drawn)??-1},skillVfx:{quads:this.skills.quads.length,...(r=this.vfxLayer)==null?void 0:r.counts}}}}function V1(i,e,t){return t&&e>i?"rotate":"ok"}function G1(i,e){return e==="rotate"&&i.phase==="wave"&&!i.paused}function zl(i){return i==="rotate"}async function W1(){const i=typeof screen<"u"?screen.orientation:void 0;if(!(i!=null&&i.lock))return!1;try{return await i.lock("landscape"),!0}catch{return!1}}function $1(i){return i.touch&&!i.fullscreen&&!i.standalone&&i.supported}const Zu=i=>({hp:i.hp,maxHp:i.maxHp,novaCharges:i.novaCharges,phase:i.phase}),hl=.3,X1={"green-blob":"small",alien:"medium","mushroom-king":"medium",yeti:"heavy",orc:"heavy","orc-skull":"heavy",demon:"flying","blue-demon":"flying"};function q1(i,e,t){return e?"boss":t?"small":X1[i]}const Y1={small:"deathSmall",medium:"deathMedium",heavy:"deathHeavy",flying:"deathFlying",boss:"deathBoss"},gh={arcane:"shotArcane",fire:"shotFire",frost:"shotFrost",storm:"shotStorm"},K1={"armor-block":"armor","shield-break":"shieldBreak",split:"split",dash:"dash",stun:"stun",shatter:"shatter",spread:"spread",discharge:"discharge","cast-impact":"meteorImpact",tempest:"tempest",nova:"nova",build:"build",upgrade:"build",points:"points",skill:"skill",capstone:"skill",respec:"respec",victory:"victory",defeat:"defeat",leak:"alertLeak"},j1=i=>i.startsWith("alert")||i==="deathBoss";function Z1(i,e,t){const n=[];let s=0;for(const a of i){const o=a.to;switch(a.type){case"shot":n.push({name:gh[a.element??"arcane"],at:o,element:a.element??"arcane"});break;case"hit":n.push({name:"hit",at:o,element:a.element??"arcane"});break;case"kill":{const l=(a.target??0)>=Nu;n.push({name:Y1[q1(a.kind??"green-blob",!!a.boss,l)],at:o}),(a.value??0)>0&&n.push({name:"coin",at:o,step:Math.min(s++,4)});break}case"spawn":n.push({name:a.boss?"spawnBoss":"spawn",at:o});break;case"cast":n.push(a.skill==="meteor"?{name:"meteorWarning",at:o}:a.skill==="thunder"?{name:"tempest",at:o}:{name:gh[a.element??"arcane"],at:o,element:a.element??"arcane"});break;case"zone":n.push({name:a.element==="fire"?"zoneLava":"zoneIce",at:o});break;case"boss-warning":n.push({name:"alertBoss",at:On(a.lane??0,0)});break;case"wave":t.phase==="wave"?n.push({name:kl(t).newTraits.length?"alertNewAbility":"waveStart"}):t.phase==="ready"&&n.push({name:"waveClear"});break;default:{const l=K1[a.type];l&&n.push({name:l,at:o})}}}const r=t.maxHp*hl;return e.hp>e.maxHp*hl&&t.hp<=r&&t.hp>0&&t.phase!=="defeat"&&n.push({name:"alertHpLow"}),e.novaCharges===0&&t.novaCharges>0&&t.phase==="wave"&&n.push({name:"alertNovaReady"}),n}const J1={shotArcane:.09,shotFire:.09,shotFrost:.09,shotStorm:.09,hit:.07,armor:.15,shieldBreak:.12,deathSmall:.06,deathMedium:.06,deathHeavy:.06,deathFlying:.06,coin:.08,split:.12,dash:.25,spawn:.4,stun:.15,shatter:.15,zoneLava:.3,zoneIce:.3,spread:.12,discharge:.12,meteorWarning:.3,meteorImpact:.3,tempest:.3,uiClick:.05,uiDisabled:.05},Q1=1.5;class eb{constructor(){A(this,"last",new Map)}allow(e,t){const n=e.startsWith("alert")?Q1:J1[e]??0,s=this.last.get(e);return n>0&&s!==void 0&&t-s<n?!1:(this.last.set(e,t),!0)}}const tb=24;class nb{constructor(e,t,n,s){A(this,"nodes",[]);this.input=e,this.alert=t,this.music=n,this.end=s,this.nodes.push(e)}add(e){return this.nodes.push(e),e}}const Nn=i=>440*Math.pow(2,(i-69)/12);class ib{constructor(e){A(this,"master");A(this,"sfx");A(this,"duckGain");A(this,"music");A(this,"musicScore");A(this,"verb");A(this,"musicVerb");A(this,"noiseBuffer");A(this,"voices",[]);A(this,"timers",new Set);A(this,"peak",0);this.ctx=e;const t=e.createDynamicsCompressor();t.threshold.value=-14,t.knee.value=12,t.ratio.value=4,t.attack.value=.003,t.release.value=.25,t.connect(e.destination),this.master=this.gain(.9,t),this.sfx=this.gain(.8,this.master),this.duckGain=this.gain(1,this.master),this.music=this.gain(.5,this.duckGain),this.musicScore=this.gain(.8,this.music),this.verb=e.createConvolver(),this.verb.buffer=this.impulse(1.8,2.6),this.verb.connect(this.gain(.32,this.sfx)),this.musicVerb=e.createConvolver(),this.musicVerb.buffer=this.verb.buffer,this.musicVerb.connect(this.gain(.32,this.musicScore)),this.noiseBuffer=this.makeNoise(2)}get noise(){return this.noiseBuffer}get now(){return this.ctx.currentTime+.01}gain(e,t){const n=this.ctx.createGain();return n.gain.value=e,t&&n.connect(t),n}makeNoise(e){const t=this.ctx.createBuffer(1,Math.floor(this.ctx.sampleRate*e),this.ctx.sampleRate),n=t.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1;return t}impulse(e,t){const n=Math.floor(this.ctx.sampleRate*e),s=this.ctx.createBuffer(2,n,this.ctx.sampleRate);for(let r=0;r<2;r++){const a=s.getChannelData(r);for(let o=0;o<n;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/n,t)}return s}liveEffectVoices(){const e=this.ctx.currentTime;return this.voices.filter(t=>!t.music&&t.end>e).length}voice({bus:e=this.sfx,pan:t=0,send:n=.15,dur:s=1,alert:r=!1,music:a=!1}={}){const o=this.ctx,l=o.createGain(),c=new nb(l,r,a,o.currentTime+s),h=c.add(o.createStereoPanner());if(h.pan.value=Math.max(-.6,Math.min(.6,t)),l.connect(h),h.connect(e),n>0){const d=c.add(this.gain(n));h.connect(d),d.connect(a?this.musicVerb:this.verb)}this.voices.push(c);const u=window.setTimeout(()=>{this.timers.delete(u),this.release(c)},(s+.3)*1e3);return this.timers.add(u),a||(this.peak=Math.max(this.peak,this.liveEffectVoices())),c}release(e){var n;const t=this.voices.indexOf(e);if(!(t<0)){this.voices.splice(t,1);for(const s of e.nodes){try{(n=s.stop)==null||n.call(s)}catch{}try{s.disconnect()}catch{}}}}stopVoice(e){this.release(e)}makeRoom(){for(;this.liveEffectVoices()>=tb;){const e=this.ctx.currentTime,t=this.voices.find(n=>!n.alert&&!n.music&&n.end>e);if(!t)return!1;this.release(t)}return!0}env(e,t,n,s,r){e.cancelScheduledValues(t),e.setValueAtTime(1e-4,t),e.linearRampToValueAtTime(s,t+n),e.exponentialRampToValueAtTime(1e-4,t+Math.max(r,n+.01))}filter(e,t,n,s){if(!t)return e.input;const r=e.add(this.ctx.createBiquadFilter());return r.type=t.type,r.Q.value=t.q??.7,r.frequency.setValueAtTime(t.f,n),t.f2&&r.frequency.exponentialRampToValueAtTime(t.f2,n+(t.ft??s)),r.connect(e.input),r}tone(e,t,{type:n="sine",f:s,f2:r,dur:a=.2,gain:o=.1,a:l=.005,detune:c=0,filter:h,glide:u}){const d=e.add(this.ctx.createOscillator()),p=e.add(this.ctx.createGain());return d.type=n,d.detune.value=c,d.frequency.setValueAtTime(s,t),r&&d.frequency.exponentialRampToValueAtTime(r,t+(u??a)),this.env(p.gain,t,l,o,a),d.connect(p),p.connect(this.filter(e,h,t,a)),d.start(t),d.stop(t+a+.05),d}noiseBurst(e,t,{dur:n=.2,gain:s=.1,a:r=.003,filter:a}){const o=e.add(this.ctx.createBufferSource()),l=e.add(this.ctx.createGain());o.buffer=this.noiseBuffer,this.env(l.gain,t,r,s,n),o.connect(l),l.connect(this.filter(e,a,t,n)),o.start(t,Math.random()*1.2),o.stop(t+n+.05)}bell(e,t,n,{dur:s=1.2,gain:r=.08,bright:a=1}={}){for(const[o,l,c]of[[1,1,1],[2.76,.45*a,.6],[5.4,.22*a,.35],[8.93,.1*a,.2]])n*o<16e3&&this.tone(e,t,{f:n*o,dur:s*c,gain:r*l,a:.002})}pluck(e,t,n,{dur:s=1.6,gain:r=.05}={}){this.tone(e,t,{type:"triangle",f:n,dur:s,gain:r,a:.003}),this.tone(e,t,{f:n*2,dur:s*.5,gain:r*.35,a:.002})}drum(e,t,n){this.tone(e,t,{f:95,f2:50,dur:.32,gain:n,glide:.25}),this.noiseBurst(e,t,{dur:.12,gain:n*.35,filter:{type:"lowpass",f:320}})}duck(){const e=this.duckGain.gain,t=this.ctx.currentTime;e.cancelScheduledValues(t),e.setValueAtTime(e.value,t),e.linearRampToValueAtTime(.35,t+.08),e.setValueAtTime(.35,t+.5),e.linearRampToValueAtTime(1,t+1.7)}play(e,t){!this.makeRoom()&&!j1(e.name)||(e.name.startsWith("alert")&&this.duck(),sb[e.name](this,t,e))}dispose(){this.timers.forEach(e=>clearTimeout(e)),this.timers.clear(),[...this.voices].forEach(e=>this.release(e))}}function vh(i,e,t,n,s,r,a,o,l,c){const h=i.tone(e,t,{type:"sawtooth",f:n,dur:s,gain:r,filter:{type:"highpass",f:a}});for(let u=1;u<o;u++)h.frequency.setValueAtTime(l+Math.random()*c,t+u*.011)}const sb={shotArcane(i,e){const t=i.now,n=i.voice({pan:e,dur:.3,send:.12});i.tone(n,t,{f:880,f2:520,dur:.18,gain:.1}),i.tone(n,t,{type:"triangle",f:1320,f2:760,dur:.14,gain:.05}),i.noiseBurst(n,t,{dur:.03,gain:.05,filter:{type:"highpass",f:5e3}})},shotFire(i,e){const t=i.now,n=i.voice({pan:e,dur:.4,send:.1});i.noiseBurst(n,t,{dur:.3,gain:.32,a:.015,filter:{type:"bandpass",f:1100,f2:260,q:1.1}}),i.tone(n,t,{f:120,f2:55,dur:.2,gain:.22})},shotFrost(i,e){const t=i.now,n=i.voice({pan:e,dur:.6,send:.3});i.bell(n,t,1568,{dur:.45,gain:.06,bright:1.3}),i.noiseBurst(n,t,{dur:.16,gain:.05,filter:{type:"highpass",f:6500}})},shotStorm(i,e){const t=i.now,n=i.voice({pan:e,dur:.3,send:.1});vh(i,n,t,1400,.13,.06,900,12,600,1800),i.noiseBurst(n,t,{dur:.05,gain:.14,filter:{type:"bandpass",f:3200,q:1.5}})},hit(i,e,t){const n=i.now,s=i.voice({pan:e,dur:.15,send:0});i.tone(s,n,{f:240,f2:90,dur:.07,gain:.07}),t.element==="fire"&&i.noiseBurst(s,n,{dur:.08,gain:.06,filter:{type:"lowpass",f:900}}),t.element==="frost"&&i.tone(s,n,{f:2400,dur:.05,gain:.02}),t.element==="storm"&&i.noiseBurst(s,n,{dur:.03,gain:.05,filter:{type:"highpass",f:3e3}})},armor(i,e){const t=i.now,n=i.voice({pan:e,dur:.3,send:.12});i.tone(n,t,{f:1230,dur:.2,gain:.06,a:.001}),i.tone(n,t,{f:1913,dur:.16,gain:.045,a:.001}),i.noiseBurst(n,t,{dur:.02,gain:.08,filter:{type:"highpass",f:5e3}})},shieldBreak(i,e){const t=i.now,n=i.voice({pan:e,dur:.8,send:.3});i.noiseBurst(n,t,{dur:.35,gain:.2,filter:{type:"highpass",f:3e3}}),[2637,2093,1568].forEach((s,r)=>i.bell(n,t+r*.045,s,{dur:.4,gain:.045}))},deathSmall(i,e){const t=i.now,n=i.voice({pan:e,dur:.2,send:.05});i.tone(n,t,{f:520,f2:1400,dur:.08,gain:.11}),i.noiseBurst(n,t,{dur:.05,gain:.06,filter:{type:"bandpass",f:2200,q:2}})},deathMedium(i,e){const t=i.now,n=i.voice({pan:e,dur:.35,send:.08});i.noiseBurst(n,t,{dur:.2,gain:.2,filter:{type:"bandpass",f:1300,f2:380,q:1.4}}),i.tone(n,t,{type:"square",f:300,f2:80,dur:.16,gain:.045,filter:{type:"lowpass",f:1500}})},deathHeavy(i,e){const t=i.now,n=i.voice({pan:e,dur:.5,send:.12});i.tone(n,t,{f:95,f2:38,dur:.38,gain:.38}),i.noiseBurst(n,t,{dur:.3,gain:.22,filter:{type:"lowpass",f:420}}),i.noiseBurst(n,t+.02,{dur:.12,gain:.08,filter:{type:"bandpass",f:900,q:1}})},deathFlying(i,e){const t=i.now,n=i.voice({pan:e,dur:.6,send:.15});i.noiseBurst(n,t,{dur:.45,gain:.14,a:.02,filter:{type:"bandpass",f:1600,f2:280,q:1.6}}),i.tone(n,t,{f:760,f2:190,dur:.32,gain:.045})},deathBoss(i,e){const t=i.now,n=i.voice({pan:e,dur:1.8,send:.45,alert:!0});i.tone(n,t,{f:62,f2:28,dur:1.3,gain:.5}),i.noiseBurst(n,t,{dur:1.1,gain:.34,filter:{type:"lowpass",f:900,f2:90}}),i.noiseBurst(n,t,{dur:.2,gain:.18,filter:{type:"bandpass",f:1800,q:.8}}),[50,57,62].forEach(s=>i.tone(n,t+.05,{type:"sawtooth",f:Nn(s),dur:1.4,gain:.025,a:.02,filter:{type:"lowpass",f:1400,f2:300}}))},coin(i,e,t){const n=i.now,s=i.voice({pan:e,dur:.3,send:.15}),r=Math.pow(2,(t.step??0)*2/12);i.tone(s,n,{f:1975*r,dur:.09,gain:.05,a:.001}),i.tone(s,n+.05,{f:2637*r,dur:.16,gain:.05,a:.001})},split(i,e){const t=i.now,n=i.voice({pan:e,dur:.3,send:.08});i.tone(n,t,{f:180,f2:540,dur:.16,gain:.12,filter:{type:"lowpass",f:1200}}),i.tone(n,t+.07,{f:260,f2:620,dur:.12,gain:.07,filter:{type:"lowpass",f:1400}})},dash(i,e){const t=i.now,n=i.voice({pan:e,dur:.3,send:.05});i.noiseBurst(n,t,{dur:.2,gain:.1,a:.03,filter:{type:"bandpass",f:600,f2:2600,q:2}})},spawn(i,e){const t=i.now,n=i.voice({pan:e,dur:.8,send:.3});i.tone(n,t,{f:150,f2:230,dur:.55,gain:.05,a:.2}),i.noiseBurst(n,t,{dur:.5,gain:.04,a:.2,filter:{type:"bandpass",f:500,q:2}})},spawnBoss(i,e){const t=i.now,n=i.voice({pan:e,dur:1.4,send:.4});[110,164.8].forEach(s=>i.tone(n,t,{type:"sawtooth",f:s,dur:1.1,gain:.07,a:.15,filter:{type:"lowpass",f:450,f2:900,q:2}}))},stun(i,e){const t=i.now,n=i.voice({pan:e,dur:.4,send:.2});for(let s=0;s<6;s++)i.noiseBurst(n,t+s*.03+Math.random()*.02,{dur:.025,gain:.07,filter:{type:"highpass",f:3800}});i.tone(n,t,{f:3136,dur:.25,gain:.02})},shatter(i,e){const t=i.now,n=i.voice({pan:e,dur:.8,send:.35});i.noiseBurst(n,t,{dur:.3,gain:.2,filter:{type:"highpass",f:2500}}),[3136,2349,1760,2637].forEach((s,r)=>i.bell(n,t+r*.03,s,{dur:.45,gain:.035}))},zoneLava(i,e){const t=i.now,n=i.voice({pan:e,dur:.9,send:.15});i.noiseBurst(n,t,{dur:.6,gain:.1,a:.05,filter:{type:"lowpass",f:380}}),[0,.14,.3,.41].forEach(s=>i.tone(n,t+s,{f:120+Math.random()*60,f2:300+Math.random()*120,dur:.07,gain:.08,filter:{type:"lowpass",f:900}}))},zoneIce(i,e){const t=i.now,n=i.voice({pan:e,dur:1,send:.4});[1319,1568,1976,2637].forEach((s,r)=>i.bell(n,t+r*.06,s,{dur:.6,gain:.03})),i.noiseBurst(n,t,{dur:.5,gain:.04,a:.1,filter:{type:"highpass",f:5e3}})},spread(i,e){const t=i.now,n=i.voice({pan:e,dur:.25,send:.05});i.noiseBurst(n,t,{dur:.12,gain:.1,filter:{type:"bandpass",f:1500,f2:700,q:1}})},discharge(i,e){const t=i.now,n=i.voice({pan:e,dur:.15,send:.05});vh(i,n,t,2e3,.06,.04,1200,6,900,2e3)},meteorWarning(i,e){const t=i.now,n=i.voice({pan:e,dur:.9,send:.2});i.tone(n,t,{f:600,f2:1900,dur:.75,gain:.045,a:.5}),i.noiseBurst(n,t,{dur:.7,gain:.03,a:.5,filter:{type:"highpass",f:4e3}})},meteorImpact(i,e){const t=i.now,n=i.voice({pan:e,dur:1,send:.35});i.tone(n,t,{f:85,f2:34,dur:.6,gain:.45}),i.noiseBurst(n,t,{dur:.6,gain:.36,filter:{type:"lowpass",f:1300,f2:180}})},tempest(i,e){const t=i.now,n=i.voice({pan:e,dur:2,send:.5});i.noiseBurst(n,t,{dur:.09,gain:.38,a:.001,filter:{type:"highpass",f:1400}}),i.noiseBurst(n,t+.04,{dur:1.7,gain:.28,a:.05,filter:{type:"lowpass",f:320,f2:120}})},nova(i){const e=i.now,t=i.voice({dur:1.8,send:.5});i.tone(t,e,{f:72,f2:34,dur:.9,gain:.45}),i.tone(t,e,{f:1100,f2:160,dur:1.1,gain:.1}),i.noiseBurst(t,e,{dur:1.2,gain:.05,a:.02,filter:{type:"highpass",f:6e3}}),[659,988,1319].forEach(n=>i.tone(t,e+.05,{f:n,dur:1.4,gain:.028,a:.05}))},build(i){const e=i.now,t=i.voice({dur:1.4,send:.35});[392,494,587,784].forEach((n,s)=>i.bell(t,e+s*.07,n,{dur:.9,gain:.07}))},points(i){const e=i.now,t=i.voice({dur:.5,send:.4});for(let n=0;n<4;n++)i.tone(t,e+n*.035,{f:2e3+Math.random()*2e3,dur:.12,gain:.025,a:.001})},skill(i){const e=i.now,t=i.voice({dur:1,send:.4});i.bell(t,e,659,{dur:.8,gain:.07}),i.bell(t,e+.09,988,{dur:.8,gain:.06})},unlockCue(i){const e=i.now,t=i.voice({dur:1,send:.45});i.tone(t,e,{f:660,f2:990,dur:.3,gain:.1}),i.bell(t,e+.08,990,{dur:.8,gain:.07})},capstone(i){const e=i.now,t=i.voice({dur:2,send:.5});[330,440,554,660,880].forEach((n,s)=>i.bell(t,e+s*.09,n,{dur:1.2,gain:.08}))},respec(i){const e=i.now,t=i.voice({dur:.6,send:.3});i.noiseBurst(t,e,{dur:.42,gain:.1,a:.3,filter:{type:"bandpass",f:2400,f2:400,q:1.5}})},waveStart(i){const e=i.now,t=i.voice({dur:2.2,send:.35});i.drum(t,e,.5),i.drum(t,e+.28,.42),[146.8,220].forEach(n=>i.tone(t,e+.35,{type:"sawtooth",f:n,dur:1.3,gain:.05,a:.4,filter:{type:"lowpass",f:600,f2:1500,q:1.5}}))},waveClear(i){const e=i.now,t=i.voice({dur:2.2,send:.5});[74,81,76,86].forEach((n,s)=>i.bell(t,e+s*.11,Nn(n),{dur:1.6,gain:.055}))},victory(i){const e=i.now,t=i.voice({dur:3,send:.45,alert:!0});[62,66,69,74].forEach((n,s)=>i.bell(t,e+s*.16,Nn(n+12),{dur:1.2,gain:.07})),[62,66,69].forEach(n=>i.tone(t,e+.64,{type:"sawtooth",f:Nn(n),dur:2,gain:.035,a:.1,filter:{type:"lowpass",f:1800}}))},defeat(i){const e=i.now,t=i.voice({dur:3.2,send:.5,alert:!0});[69,65,62,57].forEach((n,s)=>i.tone(t,e+s*.35,{type:"sawtooth",f:Nn(n),dur:1.6,gain:.045,a:.05,filter:{type:"lowpass",f:1100,f2:300}})),i.tone(t,e+1.4,{f:73.4,f2:55,dur:1.6,gain:.3})},uiClick(i){const e=i.now,t=i.voice({dur:.08,send:0});i.tone(t,e,{f:1250,dur:.03,gain:.05,a:.001}),i.noiseBurst(t,e,{dur:.012,gain:.03,filter:{type:"highpass",f:4e3}})},uiDisabled(i){const e=i.now,t=i.voice({dur:.1,send:0});i.tone(t,e,{f:190,f2:150,dur:.06,gain:.07,filter:{type:"lowpass",f:700}})},alertBoss(i,e){const t=i.now,n=i.voice({pan:e,dur:2.2,send:.45,alert:!0});[0,.6].forEach(s=>[73.4,110].forEach(r=>i.tone(n,t+s,{type:"sawtooth",f:r,dur:.55,gain:.1,a:.06,filter:{type:"lowpass",f:520,q:3}}))),[1175,1568,2349].forEach((s,r)=>i.bell(n,t+1.15+r*.08,s,{dur:.7,gain:.04}))},alertHpLow(i){const e=i.now,t=i.voice({dur:1.2,send:.2,alert:!0});[0,.2].forEach(n=>i.tone(t,e+n,{f:62,f2:44,dur:.18,gain:.55})),[.45,.62].forEach(n=>i.tone(t,e+n,{type:"square",f:880,dur:.1,gain:.035,filter:{type:"lowpass",f:2200}}))},alertLeak(i,e){const t=i.now,n=i.voice({pan:e,dur:.9,send:.25,alert:!0});i.tone(n,t,{f:64,f2:30,dur:.5,gain:.55}),i.noiseBurst(n,t,{dur:.16,gain:.22,filter:{type:"bandpass",f:2e3,q:1}}),i.noiseBurst(n,t+.03,{dur:.35,gain:.12,filter:{type:"lowpass",f:500}})},alertNewAbility(i){const e=i.now,t=i.voice({dur:2.2,send:.5,alert:!0});i.drum(t,e,.45),i.drum(t,e+.26,.38),[587.3,622.3,880].forEach((n,s)=>{const r=i.tone(t,e+.55+s*.22,{type:"triangle",f:n,dur:.7,gain:.07,a:.02}),a=t.add(i.ctx.createOscillator()),o=t.add(i.gain(6));a.frequency.value=6,a.connect(o),o.connect(r.frequency),a.start(e),a.stop(e+2)})},alertNovaReady(i){const e=i.now,t=i.voice({dur:1.2,send:.45,alert:!0});i.bell(t,e,1319,{dur:.9,gain:.08,bright:1.2}),i.bell(t,e+.12,1760,{dur:1,gain:.08,bright:1.2})}},rb=72,bn=60/rb,_h=[[50,53,57,60,64],[46,50,53,57,62],[53,57,60,67,69],[48,50,55,62,64]],po=[74,77,79,81,84,86],xh=[38,38,41,38,33,33,36,33];function ab(i){return i.phase==="victory"?"victory":i.phase==="defeat"?"defeat":i.phase!=="wave"?"calm":i.enemies.some(e=>e.boss&&e.hp>0)?"boss":"wave"}function ob(i,e,t){const n={},s=()=>po[Math.min(po.length-1,Math.floor(t()*po.length))];return i%8===0?(n.chord=_h[i/8%_h.length],n.harp=s(),n.harpOffbeat=!0):t()<.3&&(n.harpOffbeat=t()>=.5,n.harp=s()),(e==="wave"||e==="boss")&&(i%4===0?n.drum=.2:i%4===2&&(n.drum=.11),n.shaker=!0),e==="boss"&&(n.bass=[0,1].map(r=>xh[(i*2+r)%xh.length])),n}class lb{constructor(e){A(this,"on",!1);A(this,"layer","calm");A(this,"beat",0);A(this,"next",0);A(this,"timer",0);A(this,"bus");A(this,"layers");this.engine=e}get ctx(){return this.engine.ctx}start(){if(this.on)return;this.on=!0;const e=this.ctx.currentTime;this.bus=this.engine.gain(0,this.engine.musicScore),this.bus.gain.setValueAtTime(0,e),this.bus.gain.linearRampToValueAtTime(1,e+3),this.layers={pad:this.engine.gain(1,this.bus),wave:this.engine.gain(0,this.bus),boss:this.engine.gain(0,this.bus)},this.applyLayer(!0),this.beat=0,this.next=e+.1,this.timer=window.setInterval(()=>this.schedule(),100),this.schedule()}stop(e=1.5){if(!this.on||!this.bus)return;this.on=!1,clearInterval(this.timer);const t=this.bus,n=this.ctx.currentTime;t.gain.cancelScheduledValues(n),t.gain.setValueAtTime(t.gain.value,n),t.gain.linearRampToValueAtTime(0,n+e),window.setTimeout(()=>t.disconnect(),(e+.3)*1e3),this.bus=void 0,this.layers=void 0}get playing(){return this.on}setMixGain(e){this.engine.musicScore.gain.setTargetAtTime(e,this.ctx.currentTime,.3)}setLayer(e){if(e===this.layer)return;const t=this.layer;if(this.layer=e,e==="defeat"){this.stop();return}if(t==="defeat"&&!this.on){this.start();return}e==="victory"&&this.victoryChord(),this.applyLayer(!1)}applyLayer(e){if(!this.layers)return;const t=this.ctx.currentTime,n=e?.01:2,s={wave:this.layer==="wave"||this.layer==="boss"?1:0,boss:this.layer==="boss"?1:0};for(const r of["wave","boss"]){const a=this.layers[r].gain;a.cancelScheduledValues(t),a.setValueAtTime(a.value,t),a.linearRampToValueAtTime(s[r],t+n)}}schedule(){const e=this.ctx.currentTime;if(this.next<e-bn){const t=Math.ceil((e-this.next)/bn);this.beat+=t,this.next+=t*bn}for(;this.next<e+.25;)this.playBeat(this.beat,this.next),this.next+=bn,this.beat++}voice(e,t,n){return this.engine.voice({bus:e,dur:t,send:n,music:!0})}playBeat(e,t){if(!this.layers)return;const n=this.engine,s=ob(e,this.layer,Math.random);if(s.chord){const r=8*bn+2.5,a=this.voice(this.layers.pad,r+.5,.5),o=a.add(this.ctx.createBiquadFilter());o.type="lowpass",o.Q.value=.6,o.frequency.setValueAtTime(this.layer==="calm"?750:1100,t),o.connect(a.input);for(const l of s.chord)for(const c of[-6,6]){const h=a.add(this.ctx.createOscillator()),u=a.add(this.ctx.createGain());h.type="sawtooth",h.frequency.value=Nn(l),h.detune.value=c,u.gain.setValueAtTime(1e-4,t),u.gain.linearRampToValueAtTime(.014,t+2.5),u.gain.setValueAtTime(.014,t+r-3),u.gain.linearRampToValueAtTime(1e-4,t+r),h.connect(u),u.connect(o),h.start(t),h.stop(t+r+.05)}}if(s.harp!==void 0){const r=this.voice(this.layers.pad,2,.6);n.pluck(r,t+(s.harpOffbeat?bn/2:0),Nn(s.harp),{gain:.045})}if(s.drum||s.shaker){const r=this.voice(this.layers.wave,1,.15);s.drum&&n.drum(r,t,s.drum),s.shaker&&n.noiseBurst(r,t+bn/2,{dur:.05,gain:.018,filter:{type:"highpass",f:6500}})}if(s.bass){const r=this.voice(this.layers.boss,bn+.3,.05);s.bass.forEach((a,o)=>n.tone(r,t+o*bn/2,{type:"sawtooth",f:Nn(a),dur:bn/2-.03,gain:.08,a:.01,filter:{type:"lowpass",f:300,q:4}}))}}victoryChord(){if(!this.layers)return;const e=this.ctx.currentTime+.05,t=this.voice(this.layers.pad,4,.6);[62,66,69,74].forEach(n=>this.engine.tone(t,e,{type:"triangle",f:Nn(n),dur:3.5,gain:.03,a:.4}))}}const Ju="aetherkeep.audio.v1",zs=Object.freeze({enabled:!0,sfx:80,music:50}),bh=(i,e)=>typeof i=="number"&&Number.isFinite(i)?Math.min(100,Math.max(0,Math.round(i/10)*10)):e;function cb(i){let e;try{e=i===null?null:JSON.parse(i)}catch{e=null}if(!e||typeof e!="object"||Array.isArray(e))return{...zs};const t=e;return{enabled:typeof t.enabled=="boolean"?t.enabled:zs.enabled,sfx:bh(t.sfx,zs.sfx),music:bh(t.music,zs.music)}}const Qu=()=>{try{return globalThis.localStorage}catch{return}};function hb(i=Qu()){try{return cb((i==null?void 0:i.getItem(Ju))??null)}catch{return{...zs}}}function Mh(i,e=Qu()){try{e==null||e.setItem(Ju,JSON.stringify(i))}catch{}}const ul="golden-island",ub={"golden-island":{calm:{wind:.9,waterfall:1,air:1.15,music:.8,oneShot:1,intervalScale:1},wave:{wind:.65,waterfall:.65,air:.8,music:.9,oneShot:.45,intervalScale:1.8},boss:{wind:.5,waterfall:.5,air:.7,music:1,oneShot:.3,intervalScale:2.5},victory:{wind:.8,waterfall:1,air:1.2,music:.9,oneShot:.7,intervalScale:1.3},defeat:{wind:.25,waterfall:.2,air:.3,music:0,oneShot:0,intervalScale:3}},"moonlit-island":{calm:{wind:1,waterfall:1,air:1,music:.8,oneShot:1,intervalScale:1},wave:{wind:.7,waterfall:.65,air:.7,music:.9,oneShot:.45,intervalScale:1.8},boss:{wind:.55,waterfall:.5,air:.6,music:1,oneShot:.3,intervalScale:2.5},victory:{wind:.85,waterfall:1,air:1,music:.9,oneShot:.7,intervalScale:1.3},defeat:{wind:.25,waterfall:.2,air:.3,music:0,oneShot:0,intervalScale:3}}};function ys(i){return i==="moonlit-island"?i:ul}const ed=[{kind:"gust",interval:[11,23],gain:[.045,.075],pan:[-.55,.55],gentle:.4,variants:[{id:"low-swell",duration:4.8,frequency:240,endFrequency:500,pulses:1},{id:"high-drift",duration:5.6,frequency:620,endFrequency:340,pulses:1},{id:"long-breath",duration:6.4,frequency:380,endFrequency:760,pulses:1}]},{kind:"nightCall",scenes:["moonlit-island"],interval:[15,30],gain:[.014,.026],pan:[-.6,.6],gentle:1,variants:[{id:"falling-pair",duration:2.3,frequency:880,endFrequency:660,pulses:2},{id:"single-distant",duration:2,frequency:740,endFrequency:830,pulses:1},{id:"three-notes",duration:3,frequency:1040,endFrequency:780,pulses:3}]},{kind:"stoneFall",interval:[20,38],gain:[.018,.033],pan:[-.6,.6],gentle:.8,variants:[{id:"loose-grit",duration:1.4,frequency:1700,endFrequency:500,pulses:3},{id:"pebble-pair",duration:1.8,frequency:950,endFrequency:300,pulses:2},{id:"earth-trickle",duration:2.1,frequency:650,endFrequency:180,pulses:4}]},{kind:"towerHum",interval:[18,34],gain:[.012,.022],pan:[-.35,.35],gentle:1,variants:[{id:"glass-fifth",duration:3.5,frequency:440,endFrequency:660,pulses:2},{id:"quiet-scan",duration:4.2,frequency:587.33,endFrequency:880,pulses:2},{id:"clear-octave",duration:3.8,frequency:523.25,endFrequency:1046.5,pulses:2}]},{kind:"riftEcho",interval:[95,160],gain:[.018,.03],pan:[-.4,.4],gentle:.25,variants:[{id:"hollow-exhale",duration:6,frequency:73.4,endFrequency:55,pulses:1},{id:"deep-resonance",duration:7,frequency:55,endFrequency:46.25,pulses:1},{id:"organic-answer",duration:6.5,frequency:82.4,endFrequency:61.7,pulses:2}]},{kind:"cricket",scenes:["moonlit-island"],interval:[5,11],gain:[.006,.012],pan:[-.6,.6],gentle:1,variants:[{id:"two-chirps",duration:.9,frequency:4300,endFrequency:4420,pulses:2},{id:"three-chirps",duration:1,frequency:4460,endFrequency:4320,pulses:3},{id:"four-chirps",duration:1.1,frequency:4180,endFrequency:4380,pulses:4}]},{kind:"dayBird",scenes:["golden-island"],interval:[13,25],gain:[.008,.014],pan:[-.55,.55],gentle:1,variants:[{id:"soft-rise",duration:1.8,frequency:1020,endFrequency:1380,pulses:1},{id:"distant-pair",duration:2.3,frequency:1260,endFrequency:980,pulses:2},{id:"warm-answer",duration:2.6,frequency:1120,endFrequency:1440,pulses:3}]},{kind:"dayInsect",scenes:["golden-island"],interval:[9,18],gain:[.004,.008],pan:[-.5,.5],gentle:1,variants:[{id:"low-buzz",duration:3.2,frequency:1200,endFrequency:1e3,pulses:1},{id:"distant-cicada",duration:4.2,frequency:1550,endFrequency:1150,pulses:2},{id:"long-haze",duration:5.2,frequency:1750,endFrequency:1250,pulses:3}]}];function Zr(i){return{...ub[ys(i.scene)][i.state],master:i.enabled?Math.max(0,Math.min(100,i.music))/100*(i.dimmed?.5:1):0}}const db=2;class fb{constructor({clock:e=()=>performance.now()/1e3,random:t=Math.random,definitions:n=ed,maxVoices:s=db}={}){A(this,"clock");A(this,"random");A(this,"maxVoices");A(this,"allSlots");A(this,"slots");A(this,"ends",[]);A(this,"input");A(this,"allowed",!1);A(this,"mix");A(this,"played",0);A(this,"peak",0);A(this,"dropped",0);this.clock=e,this.random=t,this.maxVoices=s,this.allSlots=n.map(r=>({definition:r,due:1/0,last:-1,counts:r.variants.map(()=>0)})),this.slots=this.slotsFor(ul)}slotsFor(e){return this.allSlots.filter(t=>!t.definition.scenes||t.definition.scenes.includes(e))}update(e){var l,c;const t=ys(e.scene),n=Zr(e),s=n.master>0&&n.oneShot>0&&!e.hidden&&!e.dimmed,r=t!==((l=this.input)==null?void 0:l.scene),a=s!==this.allowed||r,o=((c=this.mix)==null?void 0:c.intervalScale)??n.intervalScale;if(this.input={...e,scene:t},this.mix=n,this.allowed=s,r&&(this.slots=this.slotsFor(t)),(!s||r)&&(this.ends.length=0),a)this.resetDeadlines(this.clock());else if(s&&n.intervalScale!==o){const h=this.clock();for(const u of this.slots)u.due>h&&(u.due=h+(u.due-h)*n.intervalScale/o)}}between([e,t]){return e+Math.max(0,Math.min(.999999999999,this.random()))*(t-e)}resetDeadlines(e){for(const t of this.slots)t.due=this.allowed?e+this.between(t.definition.interval)*this.mix.intervalScale:1/0}tick(){const e=[];if(!this.allowed||!this.mix||!this.input)return e;const t=this.clock();for(let n=this.ends.length-1;n>=0;n--)this.ends[n]<=t&&this.ends.splice(n,1);for(const n of this.slots){if(n.due>t)continue;const s=n.definition,r=t-n.due>1;if(n.due=t+this.between(s.interval)*this.mix.intervalScale,r)continue;if(this.ends.length>=this.maxVoices){this.dropped++;continue}const a=s.variants.length-(n.last<0?0:1);let o=Math.floor(this.between([0,a]));n.last>=0&&o>=n.last&&o++;const l=s.variants[o].duration;e.push({kind:s.kind,variant:o,duration:l,pan:this.between(s.pan),gain:this.between(s.gain)*this.mix.oneShot*(this.input.reducedMotion?s.gentle:1),gentle:this.input.reducedMotion}),this.ends.push(t+l),n.last=o,n.counts[o]++,this.played++,this.peak=Math.max(this.peak,this.ends.length)}return e}stats(){var s;const e=this.clock(),t={},n={};for(const r of this.slots)t[r.definition.kind]=r.due,n[r.definition.kind]=[...r.counts];return{scene:((s=this.input)==null?void 0:s.scene)??ul,next:t,counts:n,played:this.played,active:this.ends.filter(r=>r>e).length,peak:this.peak,dropped:this.dropped}}}const yh=8;class pb{constructor(e){A(this,"scheduler",new fb);A(this,"nodes",[]);A(this,"loop");A(this,"wind");A(this,"waterfall");A(this,"air");A(this,"live",[]);A(this,"input");A(this,"timer");this.engine=e;const t=e,n=t.ctx;this.loop=this.makeLoop(),this.wind=this.add(t.gain(0,t.music)),this.waterfall=this.add(t.gain(0,t.music)),this.air=this.add(t.gain(0,t.music));const s=this.band(this.wind,220,.5,.065,-.15,0);this.modulate(s.filter.frequency,.029,85),this.modulate(s.gain.gain,.043,.018);const r=this.band(this.wind,900,.65,.018,.2,2.3);this.modulate(r.filter.frequency,.019,320),this.modulate(r.pan.pan,.017,.3);const a=this.band(this.waterfall,430,.45,.055,-.1,4.7),o=this.add(n.createBiquadFilter());o.type="lowpass",o.frequency.value=1250,a.filter.disconnect(),a.filter.connect(o),o.connect(a.gain),this.modulate(a.pan.pan,.013,.35);const l=this.band(this.air,5800,.55,.0025,0,6.1);this.modulate(l.gain.gain,.021,.001),this.timer=window.setInterval(()=>this.tick(),250)}add(e){return this.nodes.push(e),e}makeLoop(){const e=this.engine.ctx,t=Math.round(e.sampleRate*yh),n=e.createBuffer(2,t,e.sampleRate),s=Math.round(e.sampleRate*.5);for(let r=0;r<2;r++){const a=new Float32Array(t+s),o=n.getChannelData(r);for(let l=0;l<a.length;l++)a[l]=Math.random()*2-1;for(let l=0;l<t;l++){const c=l/s*Math.PI/2;o[l]=l<s?a[t+l]*Math.cos(c)+a[l]*Math.sin(c):a[l]}}return n}band(e,t,n,s,r,a){const o=this.engine.ctx,l=this.add(o.createBufferSource());l.buffer=this.loop,l.loop=!0;const c=this.add(o.createBiquadFilter());c.type="bandpass",c.frequency.value=t,c.Q.value=n;const h=this.add(this.engine.gain(s)),u=this.add(o.createStereoPanner());return u.pan.value=r,l.connect(c),c.connect(h),h.connect(u),u.connect(e),l.start(0,a),{filter:c,gain:h,pan:u}}modulate(e,t,n){const s=this.add(this.engine.ctx.createOscillator()),r=this.add(this.engine.gain(n));s.frequency.value=t,s.connect(r),r.connect(e),s.start()}update(e){const t=!!this.input&&ys(e.scene)!==ys(this.input.scene);this.input=e,this.scheduler.update(e);const n=Zr(e),s=this.engine.ctx.currentTime;this.wind.gain.setTargetAtTime(n.wind,s,.8),this.waterfall.gain.setTargetAtTime(n.waterfall,s,.8),this.air.gain.setTargetAtTime(n.air,s,.8),n.master===0||n.oneShot===0||e.hidden||e.dimmed?this.stopOneShots():t&&this.fadeOneShots(s)}fadeOneShots(e){for(const t of this.live)t.voice.input.gain.cancelAndHoldAtTime(e),t.voice.input.gain.linearRampToValueAtTime(0,e+.2),t.end=Math.min(t.end,e+.2)}stopOneShots(){for(const{voice:e}of this.live)this.engine.stopVoice(e);this.live.length=0}tick(){if(this.engine.ctx.state!=="running")return;const e=this.engine.ctx.currentTime;for(let t=this.live.length-1;t>=0;t--)this.live[t].end<=e&&(this.engine.stopVoice(this.live[t].voice),this.live.splice(t,1));for(const t of this.scheduler.tick())this.play(t)}noise(e,t,n,s,r,a,o){const l=this.engine,c=l.ctx,h=e.add(c.createBufferSource()),u=e.add(c.createGain());h.buffer=this.loop,h.loop=!0;const d=e.add(c.createBiquadFilter());d.type="bandpass",d.Q.value=.7,d.frequency.setValueAtTime(r,t),d.frequency.exponentialRampToValueAtTime(a,t+n),l.env(u.gain,t,o,s,n),h.connect(d),d.connect(u),u.connect(e.input),h.start(t),h.stop(t+n+.03)}play(e){const t=this.engine,n=ed.find(d=>d.kind===e.kind),s=n.variants[e.variant],r=t.now,a=e.duration-.4,o=t.voice({bus:t.music,pan:e.pan,dur:e.duration-.3,send:0,music:!0}),l=e.gain,c=s.frequency,h=s.endFrequency,u=s.pulses;if(e.kind==="gust")this.noise(o,r,a,l,c,h,e.gentle?1.6:1.1),this.noise(o,r,a,l*.25,c*2.4,h*1.5,1.5);else if(e.kind==="nightCall")for(let d=0;d<u;d++)t.tone(o,r+d*.48,{f:c*(1-d*.04),f2:h,dur:.65,gain:l,a:.16});else if(e.kind==="dayBird")for(let d=0;d<u;d++)t.tone(o,r+d*.42,{f:c*(1+d*.025),f2:h,dur:.24,gain:l/(1+d*.25),a:.065,filter:{type:"lowpass",f:1900}});else if(e.kind==="dayInsect")this.noise(o,r,a,l*.55,c,h,.8),t.tone(o,r,{f:c*.18,f2:h*.18,dur:a,gain:l*.18,a:.7}),u>1&&this.noise(o,r+.35,a-.35,l*.2,c*1.3,h,1);else if(e.kind==="stoneFall")for(let d=0;d<u;d++)this.noise(o,r+d*.16,.25,l/(1+d*.25),c,h,.025);else if(e.kind==="towerHum")t.tone(o,r,{f:c,dur:a,gain:l,a:.65}),t.tone(o,r+.3,{f:h,dur:a-.3,gain:l*.45,a:.5}),t.tone(o,r+.6,{f:c*2,dur:a-.6,gain:l*.12,a:.7});else if(e.kind==="riftEcho")t.tone(o,r,{f:c,f2:h,dur:a,gain:l,a:e.gentle?2.2:1.6}),t.tone(o,r+.15,{f:c*1.47,f2:h*1.5,dur:a-.15,gain:l*.35,a:1.8}),this.noise(o,r,a,l*.45,170,95,1.8),u>1&&t.tone(o,r+1.5,{f:c*.75,f2:h*.8,dur:a-1.5,gain:l*.4,a:1.5});else for(let d=0;d<u;d++)t.tone(o,r+d*.06,{f:c,f2:h,dur:.035,gain:l,a:.004});this.live.push({voice:o,end:t.ctx.currentTime+e.duration})}stats(){var n,s,r,a;const e=this.input?Zr(this.input):void 0,t=!!e&&e.master>0&&!((n=this.input)!=null&&n.hidden);return{preset:((s=this.input)==null?void 0:s.state)??"calm",mix:e,layers:{ambience:t,music:t&&e.music>0,oneShots:t&&!((r=this.input)!=null&&r.dimmed)&&e.oneShot>0},loop:{seconds:yh,channels:2,bytes:this.loop.length*2*4,nodes:this.nodes.length},reducedMotion:((a=this.input)==null?void 0:a.reducedMotion)??!1,...this.scheduler.stats(),active:this.live.filter(o=>o.end>this.engine.ctx.currentTime).length}}dispose(){var e;clearInterval(this.timer),this.stopOneShots();for(const t of this.nodes){try{(e=t.stop)==null||e.call(t)}catch{}t.disconnect()}}}class mb{constructor(){A(this,"ctx");A(this,"engine");A(this,"music");A(this,"soundscape");A(this,"reduced",matchMedia("(prefers-reduced-motion: reduce)"));A(this,"limiter",new eb);A(this,"current",hb());A(this,"layer","calm");A(this,"scene",ys(new URLSearchParams(window.location.search).get("soundscape")));A(this,"dimmed",!1);A(this,"counts",{played:0,refused:0});document.addEventListener("visibilitychange",()=>this.syncRunning()),this.reduced.addEventListener("change",()=>this.applyVolumes()),window.addEventListener("pagehide",e=>{var t;e.persisted||(t=this.soundscape)==null||t.dispose()})}get settings(){return{...this.current}}unlock(){if(this.current.enabled){if(!this.ctx){try{this.ctx=new AudioContext}catch{return}this.engine=new ib(this.ctx),this.music=new lb(this.engine),this.soundscape=new pb(this.engine),this.ctx.addEventListener("statechange",()=>this.applyVolumes()),this.applyVolumes(!0),this.music.start(),this.music.setLayer(this.layer)}this.syncRunning()}}toggle(){return this.current.enabled=!this.current.enabled,Mh(this.current),this.current.enabled?this.unlock():this.syncRunning(),this.current.enabled}setVolume(e,t){this.current[e]=Math.min(100,Math.max(0,Math.round(t/10)*10)),Mh(this.current),this.applyVolumes()}setScene(e){const t=ys(e);t!==this.scene&&(this.scene=t,this.applyVolumes())}setDimmed(e){e!==this.dimmed&&(this.dimmed=e,this.applyVolumes())}follow(e){var n;const t=ab(e);t!==this.layer&&(this.layer=t,(n=this.music)==null||n.setLayer(t),this.applyVolumes())}handle(e,t,n,s){if(this.running)for(const r of Z1(e,t,n))this.play(r,r.at?s(r.at):0)}ui(e){this.running&&this.play({name:e?"uiDisabled":"uiClick"},0)}unlockCue(e){this.running&&this.play({name:e?"capstone":"unlockCue"},0)}preview(){this.running&&this.play({name:"coin"},0)}stats(){var e,t,n,s,r;return{state:((e=this.ctx)==null?void 0:e.state)??"none",enabled:this.current.enabled,layer:this.layer,music:((t=this.music)==null?void 0:t.playing)??!1,voices:((n=this.engine)==null?void 0:n.liveEffectVoices())??0,peak:((s=this.engine)==null?void 0:s.peak)??0,...this.counts,soundscape:((r=this.soundscape)==null?void 0:r.stats())??null}}get running(){var e;return!!this.engine&&this.current.enabled&&((e=this.ctx)==null?void 0:e.state)!=="closed"}play(e,t){if(!this.engine||!this.limiter.allow(e.name,this.engine.ctx.currentTime)){this.counts.refused++;return}this.counts.played++,this.engine.play(e,Math.max(-.6,Math.min(.6,t*.6)))}applyVolumes(e=!1){var a,o;if(!this.engine)return;const t=this.engine.ctx.currentTime,n=e?.001:.03;this.engine.sfx.gain.setTargetAtTime(this.current.sfx/100,t,n);const s=this.soundscapeInput(),r=Zr(s);this.engine.music.gain.setTargetAtTime(r.master,t,n),(a=this.music)==null||a.setMixGain(r.music),(o=this.soundscape)==null||o.update(s)}soundscapeInput(){var e;return{scene:this.scene,state:this.layer,enabled:this.current.enabled,music:this.current.music,dimmed:this.dimmed,hidden:document.hidden||((e=this.ctx)==null?void 0:e.state)!=="running",reducedMotion:this.reduced.matches}}syncRunning(){this.ctx&&(this.applyVolumes(),document.hidden||!this.current.enabled?this.ctx.suspend():this.ctx.resume())}}function gb(i,e){if(e<=0)return 0;const t=e*hl;return i>t?0:Math.min(1,Math.max(0,1-Math.max(0,i)/t))}const ea=class ea{constructor(){A(this,"sum",0);A(this,"since",NaN)}add(e,t){e<=0||(Number.isNaN(this.since)&&(this.since=t),this.sum+=e)}take(e){if(Number.isNaN(this.since)||e-this.since<ea.WINDOW-1e-9)return null;const t=this.sum;return this.sum=0,this.since=NaN,t}};A(ea,"WINDOW",.5);let dl=ea;const Sh=600;class vb{constructor(e,t,n){A(this,"free",[]);A(this,"all",[]);A(this,"waiting",[]);this.layer=e,this.target=t,this.onArrive=n}setPool(e){for(;this.all.length<e;){const t=document.createElement("img");t.className="fly-coin",t.src="ui/icons/coin.webp",t.alt="",t.width=22,t.height=22,t.decoding="async",t.hidden=!0,this.layer.append(t),this.all.push(t),this.free.push(t)}for(;this.all.length>e&&this.free.length;){const t=this.free.pop();this.all.splice(this.all.indexOf(t),1),t.remove()}}launch(e,t,n=!1,s=!1){const r=this.free.pop();if(!r)return this.waiting.length<24&&this.waiting.push({x:e,y:t,rich:n,still:s}),!1;if(r.classList.toggle("rich",n),s){r.hidden=!1;const d=r.animate([{transform:`translate(${e-11}px, ${t-11}px)`,opacity:0},{transform:`translate(${e-11}px, ${t-11}px)`,opacity:1,offset:.2},{transform:`translate(${e-11}px, ${t-11}px)`,opacity:0}],{duration:Sh});return d.onfinish=d.oncancel=()=>this.release(r,!1),!0}const a=this.target(),o=a.left+a.width*.22,l=a.top+a.height/2,c=e+(o-e)*.3,h=t+(l-t)*.7;r.hidden=!1;const u=r.animate([{transform:`translate(${e-11}px, ${t-11}px) scale(.5)`,opacity:0},{transform:`translate(${e-11}px, ${t-21}px) scale(1.1)`,opacity:1,offset:.15},{transform:`translate(${c-11}px, ${h-11}px) scale(1)`,opacity:1,offset:.55},{transform:`translate(${o-11}px, ${l-11}px) scale(.8)`,opacity:.9}],{duration:Sh,easing:"cubic-bezier(.45,0,.7,1)"});return u.onfinish=u.oncancel=()=>this.release(r,u.playState==="finished"),!0}release(e,t){e.hidden=!0,this.all.includes(e)?this.free.push(e):e.remove(),t&&this.onArrive();const n=this.waiting.shift();n&&this.launch(n.x,n.y,n.rich,n.still)}}const Ss=i=>String(i).padStart(2,"0"),_b=new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}),xb=i=>_b.format(Math.round(i)),js={split:{name:"แตกตัว",icon:"circles-four",rule:"ตายแล้วแตกเป็นตัวเล็ก 2 ตัว HP 20% ของตัวแม่ เร็วขึ้น 30%",counters:"ดาเมจพื้นที่, ไฟลาม, สายฟ้าลูกโซ่"},flying:{name:"บิน",icon:"bird",rule:"ไม่โดนหลุมลาวาและทุ่งน้ำแข็ง การชะลอได้ผลครึ่งเดียว Storm แรงขึ้น 25%",counters:"Storm, ลูกศรอีเธอร์"},regen:{name:"ซ่อมตัว",icon:"heartbeat",rule:"ไม่โดนดาเมจ 1.5 วินาที จะฟื้น HP 4% ต่อวินาที ขณะติดไฟฟื้นไม่ได้",counters:"ไฟเผา, ดาเมจต่อเนื่อง"},armor:{name:"เกราะ",icon:"shield",rule:"ลดดาเมจทุกนัด แต่เหลืออย่างน้อย 25% ของนัด ไฟเผาลดครึ่งหนึ่ง",counters:"นัดใหญ่, เปราะแตก"},dash:{name:"พุ่ง",icon:"wind",rule:"ทุก 4 วินาที เรืองแสงเตือน แล้วพุ่งเร็ว 2.5 เท่า นาน 0.8 วินาที ขณะโดนชะลอ หรือหยุดนิ่ง พุ่งไม่ได้",counters:"Frost"},shield:{name:"โล่",icon:"shield-chevron",rule:"โล่ 50% ของ HP รับดาเมจก่อน Storm ทำใส่โล่ 2 เท่า ไม่โดนดาเมจ 4 วินาที โล่ฟื้น",counters:"Storm, การรุมยิงเป้าเดียว"}},td={core:{icon:"diamond",tagline:"เสริมพลังป้อมหลัก"},fire:{icon:"flame",tagline:"ระเบิดและเผาไหม้"},frost:{icon:"snowflake",tagline:"ชะลอและหยุดการเคลื่อนไหว"},storm:{icon:"lightning",tagline:"สายฟ้าชิ่งหลายเป้า"}},bb={"I-a":"ชั้น I","I-b":"ชั้น I","II-A":"ทางแยก II","II-B":"ทางแยก II","III-A":"ชั้น III","III-B":"ชั้น III",cap:"ขั้นสูงสุด"},fl={owned:"มีแล้ว",available:"ปลดได้",locked:"ยังล็อก",blocked:"ปิดจากอีกทาง"},Ht=i=>i.phase==="victory"||i.phase==="defeat";function Mb(i){const e=i.total+i.extra,t=i.phase==="wave"||Ht(i)?i.wave:i.wave+1,n=i.endless?"∞":Du,s=`ระลอก ${Ss(t)} / ${n}`,r=i.built?i.phase==="wave"?"กำลังต่อสู้":i.phase==="ready"?i.wave===0?"เตรียมรับระลอกแรก":`ผ่านระลอก ${Ss(i.wave)} · เตรียมตัวให้พร้อม`:s:"วางป้อมกลางเกาะเพื่อเริ่ม",a=i.phase==="wave";return{status:r,waveLabel:s,fighting:a,left:a?i.remaining:0,label:a?`ระลอก ${t}/${n} · เหลือ ${i.remaining}/${e}`:s,progress:i.phase==="wave"&&e>0?1-i.remaining/e:0,remaining:i.phase==="wave"?`เหลือ ${i.remaining} / ${e} ตัว`:"",gold:i.gold,hp:i.hp,maxHp:i.maxHp,critical:i.hp<=i.maxHp*.3}}function nd(i,e){var n;const t=i.skills.map(wt).filter(s=>s.branch===e);return{owned:t,route:t.filter(s=>s.slot.startsWith("II")).map(s=>s.name),capstone:((n=t.find(s=>s.slot==="cap"))==null?void 0:n.name)??null}}function yb(i){const e=!i.built||i.paused||Ht(i);return Ai.map(t=>{var p;const n=t==="core"?i.core:i.levels[t],{owned:s,route:r,capstone:a}=nd(i,t),o=Nl(i,t),l=n>0,c=l?"เพิ่มพลัง":"ปลดด้วยพลังงาน",h=i.built?i.paused?"เกมหยุดอยู่ · เล่นต่อเพื่อใช้พลังงาน":i.gold<o?`${c} · ${o} พลังงาน · พลังงานยังไม่พอ`:`${c} ${ei[t]} เป็นระดับ ${n+1} · ${o} พลังงาน`:"สร้างป้อมก่อน",u=((p=s.find(g=>g.slot==="II-A"||g.slot==="II-B"))==null?void 0:p.id)??null,d=l?r.length?r.join(" → "):"ยังไม่เลือกทาง":"ใช้พลังงานปลดธาตุ";return{key:t,name:ei[t],icon:td[t].icon,level:n,levelText:l?`ระดับ ${n}`:"ยังล็อก",path:d,capstone:a,fork:u,look:l?"owned":i.gold>=o?"unlock":"locked",upgrade:{label:c,cost:o,affordable:i.gold>=o,disabled:e||i.gold<o,title:h}}})}const Sb={meteor:"skill-fire-meteor",rain:"skill-fire-rain",freeze:"skill-frost-freeze",spear:"skill-frost-spear",chain:"skill-storm-chain",thunder:"skill-storm-thunder"},Eb={fire:"skill-fire-sunfall",frost:"skill-frost-iceage",storm:"skill-storm-tempest"};function Eh(i,e){const t=ti(i).skill[e];if(!t||!i.levels[e])return null;const n=wt(t.ultimate?fs[t.id].cap:t.node);return{icon:t.ultimate?Eb[e]:Sb[t.id],name:n.name,left:Math.min(1,Math.max(0,i.runtime.skillTimers[e]/bu(t.id)))}}function wb(i,e){const t=e==="core"?i.core:i.levels[e],n=ti(i),s=c=>e==="core"?Tu(Fl({...i,core:c}).damage,n):e==="fire"?aa(c):e==="frost"?sr(c):Au(c,n),r=Nl(i,e),a=nd(i,e),o=[a.route.length?`ทาง ${a.route.join(" → ")}`:"",a.capstone?`★ ${a.capstone}`:""].filter(Boolean).join(" · ")||null,l=i.built?Ht(i)?"การต่อสู้จบแล้ว":i.paused?"เกมหยุดอยู่ · เล่นต่อเพื่อใช้พลังงาน":i.gold<r?`พลังงานยังไม่พอ · ขาดอีก ${r-i.gold} พลังงาน`:null:"สร้างป้อมก่อน";return{key:e,name:ei[e],level:t,next:t+1,stat:"ความเสียหาย",before:t>0?s(t):null,after:s(t+1),cost:r,label:t>0?"อัปเกรด":"ปลดธาตุ",disabled:l!==null,reason:l,route:o}}function Tb(){return[["Space","หยุด / เล่นต่อ"],["N","เริ่มระลอกถัดไป"],["T","เปิด / ปิดผังทักษะ"],["1 / 2 / 3","เพิ่มพลังไฟ / น้ำแข็ง / สายฟ้า"],["Q","ปล่อย Nova"]]}function Ab(i){const e=!i.built||i.paused||Ht(i),t=Math.ceil(i.cooldown),n=i.novaCharges>0,s=ti(i),r=i.novaCharges<s.novaCharges,a=e||i.gold<60||i.hp>=i.maxHp,o=Ht(i)?"การต่อสู้จบแล้ว":i.built?i.paused?"เกมหยุดอยู่":i.hp>=i.maxHp?"พลังป้อมเต็มแล้ว":i.gold<60?"ต้องการ 60 พลังงาน":"ฟื้นพลังป้อม 45 หน่วย · 60 พลังงาน":"สร้างป้อมก่อน";return{tree:{points:i.skillPoints,badge:i.skillPoints>0?String(i.skillPoints):"",glow:i.skillPoints>0&&!Ht(i),disabled:Ht(i)},primary:{action:i.built?"wave":"build",label:i.built?i.phase==="wave"?"เริ่มระลอก":`เริ่มระลอก ${Ss(i.wave+1)}`:"สร้างป้อม",sub:i.built?i.phase==="wave"?"กำลังต่อสู้…":"พร้อมแล้ว · N":"ใช้พลังงาน 120",disabled:i.paused||Ht(i)||i.phase==="wave"||!i.built&&i.gold<120},nova:{accessibleText:s.novaCharges>1?`Nova พร้อมใช้ ${i.novaCharges} จาก ${s.novaCharges} ครั้ง · ${r?`ครั้งถัดไปอีก ${t} วิ`:"เต็มแล้ว"}`:`Nova · ${n?"พร้อม":`อีก ${t} วิ`}`,label:i.novaCharges>1?`Nova ×${i.novaCharges}`:"Nova",sub:n?"พร้อม":`อีก ${t} วิ`,ready:n&&!e&&i.phase==="wave",disabled:e||!n||i.phase!=="wave",tag:s.novaCharges>1&&i.novaCharges>0?`${i.novaCharges}/${s.novaCharges}`:i.novaCharges>1?`×${i.novaCharges}`:n?"":`${t} วิ`,charging:r,progress:r?Math.max(0,Math.min(1,1-i.cooldown/s.novaCooldown)):0},repair:{cost:60,disabled:a,reason:o},pause:{paused:i.paused,label:i.paused?"เล่นต่อ":"หยุด",disabled:Ht(i)},speed:{fast:i.speed===2,label:`ความเร็ว ${i.speed} เท่า · กดเปลี่ยนเป็น ${i.speed===1?2:1} เท่า`,caption:`×${i.speed}`,disabled:Ht(i)}}}const wh=i=>an[i].label,id=i=>Object.keys(nr).find(e=>gn(e)===i&&!an[e].elite);function Th(i){const e=kl(i),t=Ht(i)?i.wave:e.wave,n=Ht(i)?i.total:e.total,s=Ii.find(r=>e.traits[r]>0);return{count:n,portrait:id(s),expandable:i.phase==="build"||i.phase==="ready",visible:i.phase!=="wave",label:`ศัตรูระลอก ${Ss(t)} · ${n} ตัว`}}const Rb=["สายสั้น","สายยาว","สายกลาง"],Cb=["ประตูแดง","ประตูชมพู","ประตูม่วง"];function Pb(i){var s;if(i.phase!=="ready"&&i.phase!=="build")return null;const e=kl(i),t=Ii.filter(r=>e.traits[r]>0).map(r=>({trait:r,...js[r],portrait:id(r),count:e.traits[r],isNew:e.newTraits.includes(r)})),n=e.mainLane;return{title:`ระลอก ${Ss(e.wave)} · ${e.total} ตัว`,lane:{main:n,text:`สายหลัก: ${Rb[n]} (${Cb[n]}) · ${e.lanes[n]}/${e.total} ตัว`},chips:t,spotlight:e.boss?null:((s=t.find(r=>r.isNew))==null?void 0:s.trait)??null,boss:e.boss&&{name:wh(e.boss.kind),portrait:e.boss.kind,count:e.boss.count,text:`บอส: ${wh(e.boss.kind)}${e.boss.count>1?` ×${e.boss.count}`:""} · ${js[e.boss.trait].name}${e.boss.stunImmune?" · หยุดนิ่งไม่ได้":""}`}}}function Ib(i){const e=a=>i[a]==="owned",t=(a,o)=>a?"closed":o?"lit":"open",n=a=>{const o=`II-${a}`,l=`III-${a}`;return{fork:t(i[o]==="blocked",e("I-a")||e("I-b")),mid:t(i[l]==="blocked",e(o)),cap:t(i[l]==="blocked"||i.cap==="blocked",e(l))}},s=n("A"),r=n("B");return{tierA:t(!1,e("I-a")),tierB:t(!1,e("I-b")),forkA:s.fork,forkB:r.fork,midA:s.mid,midB:r.mid,capA:s.cap,capB:r.cap}}function Ah(i){return{points:i.skillPoints,gold:i.gold,branches:Ai.map(e=>{const t=e==="core"?i.built:i.levels[e]>0,n=Ti.filter(a=>a.branch===e).map(a=>({id:a.id,slot:a.slot,name:a.name,cost:a.cost,status:ra(i,a.id).state})),s=Object.fromEntries(n.map(a=>[a.slot,a.status])),r=n.find(a=>(a.slot==="II-A"||a.slot==="II-B")&&a.status==="owned");return{branch:e,name:ei[e],...td[e],unlocked:t,gate:e==="core"?t?"สร้างป้อมแล้ว":"สร้างป้อมก่อน":t?"ปลดธาตุแล้ว":"ปลดธาตุด้วยพลังงาน",nodes:n,fork:r?r.slot==="II-A"?"A":"B":null,forkNote:r?`ทาง ${r.name}`:"เลือก 1 ทาง",links:Ib(s)}}),reset:Lb(i)}}function Lb(i){const e=yu(i),t=i.phase!=="ready"?"รีเซ็ตได้ระหว่างระลอกเท่านั้น":i.skills.length?i.gold<e?`ต้องการ ${e} พลังงานเพื่อรีเซ็ต`:null:"ยังไม่มีโหนดให้รีเซ็ต";return{cost:e,reason:t,note:i.respecCount?"แพงขึ้นครั้งละ 100 พลังงาน":"ราคารีเซ็ตครั้งแรก"}}function Db(i,e){const t=wt(e),n=ra(i,e),s=Ht(i)?"การต่อสู้จบแล้ว":"reason"in n?n.reason:null;return{id:e,name:t.name,branch:t.branch,place:`${ei[t.branch]} · ${bb[t.slot]}`,status:n.state,statusLabel:fl[n.state],effect:t.effect,counters:t.counters.length?`แก้ทาง: ${t.counters.map(r=>r==="boss"?"บอส":js[r].name).join(", ")}`:null,choice:n.state==="available"||n.state==="locked"?t_(e):null,requirements:e_(i,e),action:{label:n.state==="owned"?"ปลดแล้ว":`ปลดโหนด · ${t.cost} หน่วย`,disabled:n.state!=="available"||Ht(i),reason:s}}}const Rh={"I-a":0,"I-b":0,"II-A":1,"II-B":1,"III-A":2,"III-B":2,cap:3},Ub={"I-a":0,"I-b":1,"II-A":0,"II-B":1,"III-A":0,"III-B":1,cap:.5};function Nb(i,e,t=Ai){const n=c=>t.indexOf(c.branch)*2+Ub[c.slot],s=wt(i),[r,a]={left:[-1,0],right:[1,0],up:[0,-1],down:[0,1]}[e];let o,l=1/0;for(const c of Ti){if(c.id===i||!t.includes(c.branch))continue;const h=n(c)-n(s),u=Rh[c.slot]-Rh[s.slot],d=h*r+u*a;if(d<=0||r&&u)continue;const p=d+3*Math.abs(r?u:h);p<l&&([o,l]=[c,p])}return(o==null?void 0:o.id)??i}function Fb(i){return Ai.flatMap(e=>{const t=i.skills.map(wt).filter(r=>r.branch===e);if(!t.length)return[];const n=t.filter(r=>r.slot.startsWith("II")).map(r=>r.name),s=t.find(r=>r.slot==="cap");return[`${ei[e]}: ${n.length?n.join(" → "):`ชั้น I ${t.length} โหนด`}${s?` · ★ ${s.name}`:""}`]})}function sd(i){return i.some(e=>e.type==="boss-warning")?"boss":"normal"}function rd(i,e){const t=[];for(const n of i)n.type==="wave"&&e.phase==="ready"&&t.unshift(`ผ่านระลอก ${Ss(e.wave)}`),n.type==="points"&&t.push(`ได้ข้อมูลวิจัย +${n.value}`),n.type==="skill"&&n.node&&t.push(`ปลด ${wt(n.node).name} แล้ว`),n.type==="capstone"&&n.node&&t.push(`ป้อมแปลงร่าง · ${wt(n.node).name}`),n.type==="boss-warning"&&t.push(`บอสกำลังมา · ประตู ${(n.lane??0)+1}`);return!i.some(n=>n.type==="boss-warning")&&i.some(n=>n.type==="research")?Oe.research.unlocked:t.length?t.join(" · "):null}const Ri=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Ch=" ",Ph=/^[\d,.]+$/,kb=/^\(?×?[\d,.]+%?\)?$/,Ob=14;function ct(i){const e=i.split(" ").filter(Boolean),t=[];return e.forEach((n,s)=>{const r=t.at(-1);r!==void 0&&(n==="ๆ"||Ph.test(r.split(Ch).at(-1))||kb.test(n)&&(!Ph.test(n)||s===e.length-1)&&[...r].length<=Ob)?t[t.length-1]+=Ch+n:t.push(n)}),t.map(n=>`<span class="keep">${Ri(n)}</span>`).join(" ")}const mo={owned:"check",available:"plus",locked:"lock-simple",blocked:"x"},Ih={"core-lens":"crosshair","core-mine":"coins","core-nova-power":"star-four","core-nova-rush":"timer","core-nova-freeze":"hourglass","core-nova-awaken":"sparkle","core-prism":"diamonds-four","fire-fuel":"drop","fire-blast":"sun","fire-meteor":"meteor","fire-wildfire":"fire","fire-lava":"mountains","fire-stack":"stack","fire-sunfall":"sun-horizon","frost-chill":"thermometer-cold","frost-wide":"wind","frost-glacier":"cube","frost-brittle":"drop-half","frost-field":"snowflake","frost-shatter":"asterisk","frost-ice-age":"globe-hemisphere-west","storm-conductor":"plugs-connected","storm-overcharge":"battery-charging","storm-chain":"link","storm-thunder":"lightning","storm-static":"atom","storm-clap":"waves","storm-tempest":"cloud-lightning"},Et=(i,e="")=>`<i class="ph ph-${i} ${e}" aria-hidden="true"></i>`,Bb=[["I-a","I-b"],["II-A","II-B"],["III-A","III-B"],["cap"]],zb=["I","II","III","★"],ad='<span class="fork-badge" aria-hidden="true">Y</span>',Kn=(i,e)=>`<span class="link-line link-${i}" data-link="${e}"></span>`,Hb=i=>[`<div class="tree-link is-fork" aria-hidden="true">${Kn("ta",i.tierA)}${Kn("tb",i.tierB)}${Kn("fa",i.forkA)}${Kn("fb",i.forkB)}${ad}</div>`,`<div class="tree-link" aria-hidden="true">${Kn("a",i.midA)}${Kn("b",i.midB)}</div>`,`<div class="tree-link is-cap" aria-hidden="true">${Kn("a",i.capA)}${Kn("b",i.capB)}</div>`],Vb=()=>window.matchMedia("(max-width: 760px)").matches&&!window.matchMedia("(max-height: 420px) and (min-aspect-ratio: 3/2)").matches;function Gb(i){return Array.from(i.querySelectorAll('button:not(:disabled), [tabindex="0"]')).filter(e=>{var t;return e.tabIndex>=0&&(((t=e.checkVisibility)==null?void 0:t.call(e))??e.offsetParent!==null)})}function pl(i,e){const t=Gb(i);if(!t.length)return;const n=t.indexOf(document.activeElement);e.shiftKey&&n<=0?(e.preventDefault(),t.at(-1).focus()):!e.shiftKey&&(n===-1||n===t.length-1)&&(e.preventDefault(),t[0].focus())}class Wb{constructor(e,t,n){A(this,"isOpen",!1);A(this,"confirmOpen",!1);A(this,"root");A(this,"content");A(this,"live");A(this,"state");A(this,"selected","core-lens");A(this,"tab","core");A(this,"signature","");A(this,"returnFocus",null);this.onCommand=t,this.onChange=n,this.root=document.createElement("div"),this.root.className="tree-shade",this.root.hidden=!0,this.content=document.createElement("div"),this.content.className="tree-content",this.live=document.createElement("p"),this.live.className="tree-live",this.live.setAttribute("role","status"),this.live.setAttribute("aria-live","polite"),this.root.append(this.content,this.live),e.append(this.root),this.root.addEventListener("click",s=>{const r=s.target.closest("button");if(!r)return;const{tree:a,node:o,branch:l}=r.dataset;o?(this.select(o,!0),this.revealDetail()):l?this.setTab(l,!0):a==="close"?this.close():a==="unlock"?this.onCommand({type:"unlock",node:this.selected}):a==="reset"?this.askReset():a==="reset-cancel"?this.setConfirm(!1):a==="reset-confirm"&&(this.setConfirm(!1),this.onCommand({type:"respec"}))})}open(e){if(this.isOpen)return;this.returnFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.state=e,this.isOpen=!0,this.live.textContent="";const t=Ti.find(n=>ra(e,n.id).state==="available");this.selected=(t==null?void 0:t.id)??"core-lens",this.tab=(t==null?void 0:t.branch)??"core",this.root.hidden=!1,this.render(!0),this.onChange(),this.focus(`[data-node="${this.selected}"]`)}close(){var e;this.isOpen&&(this.isOpen=!1,this.confirmOpen=!1,this.root.hidden=!0,this.onChange(),(e=this.returnFocus)==null||e.focus())}update(e){this.state=e,this.isOpen&&this.render()}message(e){this.live.textContent=e,this.live.classList.remove("flash"),this.live.offsetWidth,this.live.classList.add("flash")}handleKey(e){const t=e.key;if(this.confirmOpen)return t==="Escape"?(e.preventDefault(),this.setConfirm(!1),!0):t==="Tab"?(pl(this.root.querySelector(".tree-confirm"),e),!0):!1;if(t==="Escape"||t.toLowerCase()==="t")return e.preventDefault(),this.close(),!0;if(t==="Tab")return pl(this.root.querySelector(".tree-panel"),e),!0;const n={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down"}[t];if(!n)return!1;const s=document.activeElement;if(s!=null&&s.dataset.branch&&(n==="left"||n==="right")){const r=Ai.indexOf(s.dataset.branch),a=Ai[(r+(n==="left"?3:1))%4];return e.preventDefault(),this.setTab(a,!0),this.focus(`[data-branch="${a}"]`),!0}return s!=null&&s.dataset.node?(e.preventDefault(),this.move(n),!0):!1}move(e){const t=Nb(this.selected,e,Vb()?[this.tab]:Ai);this.select(t,!0)}select(e,t){this.selected=e,this.tab=Ti.find(n=>n.id===e).branch,this.render(),t&&this.focus(`[data-node="${e}"]`)}revealDetail(){const e=this.root.querySelector(".tree-detail"),t=e==null?void 0:e.querySelector(".detail-unlock");!e||!t||t.getBoundingClientRect().bottom<=innerHeight||(e.scrollIntoView({block:"start"}),t.getBoundingClientRect().bottom>innerHeight&&t.scrollIntoView({block:"end"}))}setTab(e,t){this.tab=e,this.selected.startsWith(e)||(this.selected=Ti.find(n=>n.branch===e).id),this.render(),t&&this.focus(`[data-branch="${e}"]`)}askReset(){const e=Ah(this.state).reset.reason;if(e){this.message(e);return}this.setConfirm(!0)}setConfirm(e){this.confirmOpen=e,this.render(!0),this.onChange(),this.focus(e?'[data-tree="reset-cancel"]':'[data-tree="reset"]')}focus(e,t=!1){var n;(n=this.root.querySelector(e))==null||n.focus({preventScroll:t})}render(e=!1){var u,d;const t=this.state,n=Ah(t),s=Db(t,this.selected),r=JSON.stringify([n,s,this.tab,this.confirmOpen]);if(!e&&r===this.signature)return;this.signature=r;const a=(u=document.activeElement)==null?void 0:u.closest("[data-node],[data-branch],[data-tree]"),o=a&&this.root.contains(a)?a.dataset.node?`[data-node="${a.dataset.node}"]`:a.dataset.branch?`[data-branch="${a.dataset.branch}"]`:`[data-tree="${a.dataset.tree}"]`:null,l=n.branches.find(p=>p.branch===this.tab),c=((d=this.root.querySelector(".tree-panel"))==null?void 0:d.scrollTop)??0;this.content.innerHTML=`
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
        <div class="tree-tabs" role="tablist" aria-label="สายของผังทักษะ">${n.branches.map(p=>`
          <button role="tab" id="tree-tab-${p.branch}" data-branch="${p.branch}" aria-selected="${p.branch===this.tab}"
            aria-controls="tree-col-${p.branch}" tabindex="${p.branch===this.tab?0:-1}" style="--branch: var(--${p.branch})">
            ${Et(p.icon)}<span>${p.name}</span>${p.unlocked?"":Et("lock-simple","tab-lock")}
          </button>`).join("")}
        </div>
        <p class="tree-branch-status" style="--branch: var(--${l.branch})">${Et(l.icon)}<b>${l.name}</b> · ${l.gate}<span>${l.forkNote}</span></p>
        <div class="tree-body">
          <div class="tree-columns" data-tab="${this.tab}">
            <ol class="tree-row-labels" aria-hidden="true">${zb.map((p,g)=>`<li>${p}${g===1?"<small>เลือก 1 ทาง</small>":""}</li>`).join("")}</ol>
            ${n.branches.map(p=>`
            <section class="tree-col" id="tree-col-${p.branch}" role="tabpanel" aria-labelledby="tree-tab-${p.branch}"
              data-branch-col="${p.branch}" style="--branch: var(--${p.branch})">
              <header class="tree-col-head">${Et(p.icon,"col-icon")}<div><b>${p.name}</b><small>${p.unlocked?p.tagline:`${Et("lock-simple")} ${p.gate}`}</small></div></header>
              <div class="tree-grid">${Bb.map((g,v)=>`<div class="tree-row tree-row-${g.length===1?"cap":"pair"}">${g.map(m=>{const f=p.nodes.find(S=>S.slot===m);return`<button class="tree-node${f.slot==="cap"?" is-cap":""}" data-node="${f.id}" data-status="${f.status}"
                  aria-pressed="${f.id===this.selected}" aria-label="${Ri(`${f.name} · ${fl[f.status]}${f.cost===2?" · 2 หน่วย":""}`)}">
                  ${Et(Ih[f.id],"node-icon")}<span class="node-text"><span class="node-name">${f.name}</span>${f.cost===2?"<small>2 หน่วย</small>":""}</span>
                  ${Et(mo[f.status],"node-status")}
                </button>`}).join("")}</div>${Hb(p.links)[v]??""}`).join("")}</div>
            </section>`).join("")}
          </div>
          <aside class="tree-detail" style="--branch: var(--${s.branch})" aria-live="polite">
            <div class="detail-head">${Et(Ih[s.id],"detail-icon")}<div><small>${s.place}</small><h3>${s.name}</h3>
              <span class="detail-status" data-status="${s.status}">${Et(mo[s.status])}${s.statusLabel}</span></div></div>
            <p class="detail-effect">${ct(s.effect)}</p>
            ${s.counters?`<p class="detail-counters">${ct(s.counters)}</p>`:""}
            ${s.choice?`<p class="detail-choice">${ad}<span>${ct(s.choice)}</span></p>`:""}
            <h4>เงื่อนไขที่ต้องมี</h4>
            <ul class="detail-reqs">${s.requirements.map(p=>`<li data-met="${p.met}">${Et(p.met?"check":"x")}<span>${ct(p.label)}</span></li>`).join("")}</ul>
            <button class="detail-unlock" data-tree="unlock" ${s.action.disabled?"disabled":""}>${s.action.label}</button>
            ${s.action.disabled&&s.action.reason?`<p class="detail-reason">${ct(s.action.reason)}</p>`:""}
          </aside>
        </div>
        <footer class="tree-foot">
          <ul class="tree-legend">
            ${["owned","available","locked","blocked"].map(p=>`<li data-status="${p}">${Et(mo[p],"legend-icon")}<b>${fl[p]}</b><small>${$b[p]}</small></li>`).join("")}
          </ul>
          <p class="tree-rules"><b>ขั้นสูงสุดใช้ข้อมูลวิจัย 2 หน่วย · เลือกได้ 1 สายต่อรอบ</b><span>สร้างป้อม +1 · ผ่านระลอก +1 · ระลอกบอสเพิ่ม +1</span></p>
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
      </div>`:""}`;const h=this.root.querySelector(".tree-panel");if(h.scrollTop=c,h.toggleAttribute("inert",this.confirmOpen),o){const p=this.root.querySelector(o);p&&!p.disabled?p.focus({preventScroll:!0}):this.focus(`[data-node="${this.selected}"]`,!0)}}}const $b={owned:"ปลดแล้ว ใช้งานอยู่",available:"ใช้ข้อมูลวิจัยเพื่อปลด",locked:"เงื่อนไขยังไม่ครบ",blocked:"เลือกอีกทางไปแล้ว"};class Xb{constructor(e){A(this,"key","");A(this,"view",null);A(this,"active",null);this.slot=e;const t=n=>n.target.closest(".trait-chip");e.addEventListener("pointerover",n=>{n.pointerType==="mouse"&&this.show(t(n))}),e.addEventListener("pointerleave",n=>{n.pointerType==="mouse"&&(document.activeElement===e||!e.contains(document.activeElement))&&this.show(null)}),e.addEventListener("focusin",n=>this.show(t(n))),e.addEventListener("focusout",n=>{e.contains(n.relatedTarget)||this.show(null)}),e.addEventListener("click",n=>this.show(t(n))),document.addEventListener("pointerdown",n=>{e.contains(n.target)||this.show(null)})}clear(){this.show(null)}render(e){const t=JSON.stringify(e);if(t===this.key)return;if(this.key=t,this.view=e,this.active=null,!e){this.slot.replaceChildren(),this.slot.classList.remove("has-content"),delete this.slot.dataset.chips;return}this.slot.classList.add("has-content"),this.slot.dataset.chips=String(e.chips.length);const n=[null,...e.chips.map(s=>s.trait)].map(s=>{const{html:r,boss:a}=this.infoOf(s,"sizer-portrait");return`<p${a?' class="is-boss"':""}>${r}</p>`}).join("");this.slot.innerHTML=`
      <div class="preview-head sr-only"><strong>${Ri(e.title)}</strong></div>
      <div class="preview-chips">${e.chips.map(s=>`
        <button class="trait-chip" data-trait="${s.trait}" aria-describedby="preview-info" aria-pressed="false"
          aria-label="${Ri(`${s.name} ${s.count} ตัว${s.isNew?" · ความสามารถใหม่":""}`)}">
          <img class="chip-portrait" src="ui/portraits/${s.portrait}.webp" width="44" height="44" alt="" decoding="async"><b class="chip-count">×${s.count}</b>
          ${s.isNew?'<em class="new-badge">ใหม่!</em>':""}
        </button>`).join("")}
      </div>
      <div class="preview-body">
        <p class="preview-info" id="preview-info" aria-live="polite"></p>
        <div class="preview-sizer" aria-hidden="true">${n}</div>
      </div>
      <p class="preview-lane" data-lane="${e.lane.main}"><i class="lane-dot" aria-hidden="true"></i>${Ri(e.lane.text)}</p>`,this.paintInfo()}show(e){const t=(e==null?void 0:e.dataset.trait)??null;t!==this.active&&(this.active=t,this.slot.querySelectorAll(".trait-chip").forEach(n=>n.setAttribute("aria-pressed",String(n===e))),this.paintInfo())}paintInfo(){const e=this.slot.querySelector(".preview-info");if(!e||!this.view)return;const{html:t,boss:n}=this.infoOf(this.active,"boss-portrait");e.innerHTML=t,e.classList.toggle("is-boss",n)}infoOf(e,t){var r,a,o;const n=e??((r=this.view)!=null&&r.boss?null:((a=this.view)==null?void 0:a.spotlight)??null);if(n){const l=js[n];return{html:`<b>${ct(l.name)}</b> ${ct(l.rule)} · <span class="counters">${ct(`แพ้ทาง: ${l.counters}`)}</span>`,boss:!1}}const s=(o=this.view)==null?void 0:o.boss;return s?{html:`<img class="${t}" src="ui/portraits/${s.portrait}.webp" width="20" height="20" alt=""> ${ct(s.text)}`,boss:!0}:{html:`<span class="muted">${ct("แตะหรือชี้ที่ชิปเพื่อดูกติกาและจุดอ่อน")}</span>`,boss:!1}}}class qb{constructor(){A(this,"target",null);A(this,"release","tab")}arm(e,t="tab"){this.target=e,this.release=t}blocks(e,t){return(e==="Tab"||this.release==="tab-or-arrow"&&e.startsWith("Arrow"))&&(this.target=null),e===" "&&this.target!==null&&t===this.target}}const Bt=(i,e="")=>`<i class="ph ph-${i} ${e}" aria-hidden="true"></i>`,sn=(i,e="")=>`<i class="ph-fill ph-${i} ${e}" aria-hidden="true"></i>`,gi=(i,e,t,n="")=>`<img class="${t}" src="ui/icons/${i}.webp" width="${e}" height="${e}" alt="" decoding="async"${n?` data-ref="${n}"`:""}>`,un=i=>Math.round(i).toLocaleString("en-US"),Lh=i=>i.toLocaleString("en-US",{maximumFractionDigits:1}),Yb=["core","fire","frost","storm"],hs=[["play","วิธีเล่น"],["tree","ผังทักษะ"],["traits",Oe.research.tab],["settings","ตั้งค่า"]],Vs=class Vs{constructor(e,t,n){A(this,"refs",new Map);A(this,"state");A(this,"signature","");A(this,"previousPhase","");A(this,"researchSignature",null);A(this,"helpOpen",!1);A(this,"helpTab","play");A(this,"pausedByHelp",!1);A(this,"soundEnabled",!0);A(this,"reduced",matchMedia("(prefers-reduced-motion: reduce)"));A(this,"coins");A(this,"goldTally",new dl);A(this,"vignette",-1);A(this,"feedbackTimers",new Map);A(this,"highQuality",hu());A(this,"helpTrigger",null);A(this,"card",null);A(this,"panelOpen",!1);A(this,"spaceGuard",new qb);A(this,"preview");A(this,"tree");A(this,"storyOpen",!0);A(this,"skillLook",{fire:"",frost:"",storm:""});this.container=e,this.onCommand=t,this.options=n,e.classList.add("hud-cartoon"),e.innerHTML=`
      <div class="vignette" data-ref="vignette" aria-hidden="true"></div>
      <header class="hud-top panel-glass">
        <h1 class="sr-only">Aetherkeep · ${Oe.chapter}</h1>
        <div class="top-status" data-hud-panel>
          <div class="wave-status" data-ref="wave-box" aria-label="สถานะระลอก">
            <span class="wave-icon" aria-hidden="true">${sn("flag-pennant")}${gi("swords",24,"fight-icon")}</span>
            <div class="wave-text"><strong data-ref="wave-title">ระลอก 01 / 10</strong>
              <div class="wave-progress" aria-hidden="true"><i data-ref="wave-fill"></i></div></div>
            <small class="sr-only" data-ref="wave-status"></small><small class="sr-only" data-ref="wave-detail"></small></div>
          <div class="resource" data-ref="gold-resource">${gi("coin",26,"gold-icon")}<b data-ref="gold">320</b><b class="gold-gain" data-ref="gold-gain" aria-hidden="true"></b></div>
          <div class="resource health" data-ref="health-resource">${gi("shield",26,"hp-icon")}<div><b><span data-ref="hp">120</span> / <span data-ref="hp-max">120</span></b>
            <div class="health-track"><i data-ref="health-fill"></i></div></div></div>
        </div>
        <div class="boss-area" data-ref="boss-toasts" role="status" aria-live="assertive"></div>
      </header>
      <aside class="hud-left">
        <button class="enemy-pill" data-hud-panel data-tool="enemies" data-ref="enemy-pill" aria-expanded="false" aria-controls="enemy-panel">
          <img class="pill-portrait" data-ref="pill-portrait" src="ui/portraits/green-blob.webp" width="36" height="36" alt="" decoding="async">
          <span class="pill-text">มอนสเตอร์ <b data-ref="enemy-count">18</b></span>${Bt("caret-down","pill-caret")}</button>
        <section class="enemy-panel" id="enemy-panel" data-ref="preview-slot" tabindex="-1" aria-label="มอนสเตอร์จากรอยแยกระลอกถัดไป" hidden></section>
      </aside>
      <nav class="utility" data-hud-panel aria-label="เครื่องมือเกม">
        <button class="tool" data-tool="menu" data-ref="menu-button" aria-expanded="false" aria-controls="help-panel" aria-label="เมนู · คู่มือและตั้งค่า">${sn("gear")}</button>
      </nav>
      <div class="paused-chip" data-ref="paused" hidden>${Bt("pause")}<div>เกมหยุดชั่วคราว<small>กด Space หรือปุ่มเล่นต่อ</small></div></div>
      <footer class="hud-bottom panel-glass" data-ref="hud-bottom">
        <p class="tower-log" data-ref="tower-log" role="status" aria-live="polite" aria-atomic="true"></p>
        <section class="build-bar" data-hud-panel data-ref="build-bar" aria-label="บิลด์ของคุณ">
          <div class="build-cards">${Yb.map(l=>`
            <div class="build-card" data-branch="${l}" data-ref="${l}-card" role="group" style="--branch: var(--${l})">
              <button class="card-buy" data-card="${l}" data-ref="${l}-buy" aria-expanded="false" aria-controls="upgrade-pop" aria-describedby="${l}-skill-text">
                <span class="hex-gem">${gi(`gem-${l}`,54,"gem-art",`${l}-gem`)}<span class="skill-cd" data-ref="${l}-cd" aria-hidden="true"></span><b class="skill-count" data-ref="${l}-count" aria-hidden="true" hidden></b><b class="hex-level" data-ref="${l}-level" hidden></b>${sn("lock-simple","hex-lock")}${Bt("plus","hex-unlock")}</span>
              <span class="card-price">${gi("coin",18,"coin-icon",`${l}-buy-icon`)}<b data-ref="${l}-cost"></b></span>
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
            <button class="pop-confirm" data-ref="upgrade-confirm">${gi("coin",22,"coin-icon")}<b data-ref="pop-action"></b></button>
            <p class="pop-reason" id="pop-reason" data-ref="pop-reason" hidden></p>
          </section>
        </section>
        <nav class="command-bar" data-hud-panel aria-label="คำสั่ง">
          <button class="tree-orb" data-tool="tree" data-ref="tree-button">${Bt("tree-structure")}<span class="command-caption" aria-hidden="true">ทักษะ</span><b class="badge" data-ref="tree-points" hidden></b></button>
          <button class="cmd cmd-primary" data-ref="primary" data-action="build">${sn("castle-turret","primary-icon")}${gi("swords",26,"primary-icon swords-icon")}<b data-ref="primary-label">สร้างป้อม</b><small class="sr-only" data-ref="primary-sub"></small></button>
          <button class="cmd cmd-icon cmd-nova" data-action="nova" data-ref="nova" hidden>${sn("star-four")}<span class="sr-only"><b data-ref="nova-label">Nova</b> <small data-ref="nova-sub"></small></span><small class="cmd-tag" data-ref="nova-tag" aria-hidden="true"></small><span class="command-caption" aria-hidden="true">Nova</span></button>
          <button class="cmd cmd-icon" data-action="repair" data-ref="repair" hidden>${sn("wrench")}<span class="sr-only"><b>ซ่อม</b> <small data-ref="repair-sub">60 พลังงาน</small></span><span class="command-caption" aria-hidden="true">ซ่อม</span></button>
          <button class="cmd cmd-icon" data-action="pause" data-ref="pause">${sn("pause")}<span class="sr-only"><b data-ref="pause-label">หยุด</b></span><span class="command-caption" data-ref="pause-caption" aria-hidden="true">หยุด</span></button>
          <button class="cmd cmd-icon" data-action="speed" data-ref="speed" aria-pressed="false">${sn("fast-forward")}<span class="command-caption" data-ref="speed-caption" aria-hidden="true">×1</span></button>
        </nav>
        <div class="toast-area" data-ref="toasts" role="status" aria-live="polite"></div>
      </footer>
      <div class="fly-layer" data-ref="fly-layer" aria-hidden="true"></div>
      <div class="modal-shade" data-ref="help-shade" hidden>
        <section class="help-panel" id="help-panel" data-ref="help-panel" role="dialog" aria-modal="true" aria-labelledby="help-title">
          <header><h2 id="help-title">คู่มือ Aetherkeep</h2><button class="tool panel-close" data-tool="close-help" data-ref="close-help" aria-label="ปิดคู่มือ">${Bt("x")}</button></header>
          <div class="help-tabs" role="tablist" aria-label="หัวข้อคู่มือ">${hs.map(([l,c])=>`
            <button role="tab" id="help-tab-${l}" data-help-tab="${l}" aria-controls="help-page-${l}">${c}</button>`).join("")}</div>
          <div class="help-page" id="help-page-play" role="tabpanel" aria-labelledby="help-tab-play">
            <ol class="help-steps">${Oe.helpSteps.map(l=>`<li><b>${ct(l.heading)}</b>${ct(l.body)}</li>`).join("")}</ol>
            <h3>การควบคุม</h3>
            <div class="key-grid">${Tb().map(([l,c])=>`<kbd>${l}</kbd><span>${c}</span>`).join("")}</div>
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
            <button class="setting-row" data-tool="sound" data-ref="sound-row" aria-pressed="true"><span>${sn("speaker-high","icon-sound")}เสียงทั้งหมด</span><span class="switch" aria-hidden="true"><i></i></span><b data-ref="sound-setting">เปิด</b></button>
            <label class="setting-slider" for="volume-sfx"><span>${sn("bell-simple-ringing","icon-sfx")}เสียงประกอบ</span><input class="volume" type="range" id="volume-sfx" min="0" max="100" step="10" data-volume="sfx"><b data-ref="volume-sfx-value" aria-hidden="true"></b></label>
            <label class="setting-slider" for="volume-music"><span>${sn("music-notes","icon-music")}เพลงและบรรยากาศ</span><input class="volume" type="range" id="volume-music" min="0" max="100" step="10" data-volume="music"><b data-ref="volume-music-value" aria-hidden="true"></b></label>
            <button class="setting-row" data-tool="story"><span>${Bt("book-open")}${Oe.intro.replay}</span><b>3 ภาพ</b></button>
            <button class="setting-row" data-tool="quality"><span>${Bt("sparkle")}คุณภาพเอฟเฟกต์</span><b data-ref="quality-setting">${this.highQuality?"สูง":"ประหยัดพลังงาน"}</b></button>
          </div>
          <p class="help-live" role="status" aria-live="polite" data-ref="help-live"></p>
        </section>
      </div>
      <div class="end-screen" data-ref="end-screen" hidden>
        <section class="end-card" data-ref="end-card" role="dialog" aria-modal="true" aria-labelledby="end-title">
          <div data-ref="end-icon">${Bt("crown","end-icon")}</div>
          <h2 class="end-title" id="end-title" data-ref="end-title"></h2>
          <p class="end-log-label" data-ref="end-log-label">${Oe.towerLog} · ${Oe.speaker}</p>
          <p class="end-description" data-ref="end-description"></p>
          <div class="end-stats"><div><b data-ref="end-wave">10</b><span>ระลอก</span></div><div><b data-ref="end-kills">0</b><span>มอนสเตอร์ที่หยุด</span></div><div><b data-ref="end-score">0</b><span>คะแนน</span></div></div>
          <h3>บิลด์ที่ใช้</h3><ul class="end-build" data-ref="end-build"></ul>
          <p class="end-archive" data-ref="end-archive">${ct(Oe.simulation.explanation)}</p>
          <div class="end-actions"><button class="cmd cmd-primary" data-action="endless" data-ref="endless" aria-label="${Oe.simulation.label} · ไม่สิ้นสุด">${Bt("infinity")}${Oe.simulation.action}</button><button class="cmd" data-action="restart" data-ref="restart">${Bt("arrow-counter-clockwise")}เริ่มใหม่</button></div>
        </section>
      </div>
      <section class="loading-screen story" data-ref="loading" role="dialog" aria-modal="true" aria-labelledby="story-title">
        <header class="story-head"><h1 class="loading-wordmark" id="story-title">Aetherkeep</h1><p class="story-tagline">${Oe.intro.tagline}</p></header>
        <ol class="story-panels">${Oe.intro.panels.map((l,c)=>`
          <li class="story-panel" style="--i: ${c}"><img src="ui/story/panel-${c+1}.webp" width="768" height="512" alt="" decoding="async">
            <div class="story-caption"><b>${c+1} · ${l.title}</b><span>${ct(l.body)}</span></div></li>`).join("")}</ol>
        <footer class="story-foot">
          <div class="story-load"><div class="loading-track"><i data-ref="loading-progress"></i></div><p data-ref="loading-text" role="status" aria-live="polite">${Oe.loading.initial}</p></div>
          <button class="cmd cmd-primary story-start" data-tool="story-start" data-ref="story-start" hidden>${Bt("play")}${Oe.intro.start}</button>
        </footer>
      </section>`,e.querySelectorAll("[data-ref]").forEach(l=>this.refs.set(l.dataset.ref,l));let s=!1;try{s=localStorage.getItem(Vs.STORY_SEEN)==="1"}catch{}const r=this.ref("loading");(s||matchMedia("(prefers-reduced-motion: reduce)").matches)&&r.classList.add("all"),r.addEventListener("pointerdown",()=>r.classList.add("all"));const a=matchMedia("(max-width: 760px)"),o=()=>{const l=this.ref("menu-button").parentElement,c=this.ref("enemy-pill").parentElement,h=l.contains(document.activeElement)?document.activeElement:null;a.matches?c.before(l):c.after(l),h==null||h.focus({preventScroll:!0})};o(),a.addEventListener("change",o),this.preview=new Xb(this.ref("preview-slot")),this.tree=new Wb(e,l=>this.onCommand(l),()=>this.syncModal()),this.setHelpTab("play"),this.syncQuality(),this.coins=new vb(this.ref("fly-layer"),()=>this.ref("gold-resource").getBoundingClientRect(),()=>this.goldArrived()),this.coins.setPool(this.highQuality?8:4),this.soundEnabled=n.audio.enabled,this.syncSound();for(const l of["sfx","music"]){const c=this.container.querySelector(`#volume-${l}`);c.value=String(n.audio[l]),this.syncVolume(l,n.audio[l]),c.addEventListener("input",()=>{this.syncVolume(l,+c.value),this.options.onVolume(l,+c.value)}),l==="sfx"&&c.addEventListener("change",()=>this.options.onVolumePreview())}e.addEventListener("click",l=>{const c=l.target.closest("button");if(!c||c.disabled)return;const h=l.detail===0;if(c.dataset.action){this.onCommand(c.dataset.action);return}if(c.dataset.helpTab){this.setHelpTab(c.dataset.helpTab);return}if(c.dataset.card){this.toggleCard(c.dataset.card,h);return}if(c.dataset.ref==="upgrade-confirm"){this.confirmUpgrade(h);return}switch(c.dataset.tool){case"menu":this.openHelp(this.helpTab,c,!h);break;case"enemies":this.togglePanel();break;case"close-help":this.closeHelp();break;case"tree":this.toggleTree();break;case"sound":this.toggleSound();break;case"story-start":this.closeStory();break;case"story":this.openStory();break;case"quality":this.highQuality=this.options.onQuality(),this.syncQuality(),this.coins.setPool(this.highQuality?8:4),this.toast(this.highQuality?"เปิดเอฟเฟกต์คุณภาพสูง":"ใช้โหมดประหยัดพลังงาน");break}}),document.addEventListener("pointerdown",l=>{const c=l.target;this.card&&!(c instanceof Element&&c.closest(".card-buy, .upgrade-pop"))&&this.closeCard(!1),this.panelOpen&&!this.ref("enemy-pill").parentElement.contains(c)&&this.closePanel(!1)}),this.ref("build-bar").addEventListener("focusout",l=>{const c=l.relatedTarget;this.card&&c&&!this.ref("build-bar").contains(c)&&this.closeCard(!1)}),this.ref("enemy-pill").parentElement.addEventListener("focusout",l=>{const c=l.relatedTarget;this.panelOpen&&c&&!this.ref("enemy-pill").parentElement.contains(c)&&this.closePanel(!1)}),this.ref("help-shade").addEventListener("click",l=>{l.target===this.ref("help-shade")&&this.closeHelp()}),window.addEventListener("keydown",l=>{if(this.storyOpen){const h=this.ref("story-start"),u=r.contains(l.target);l.key==="Escape"&&!h.hidden?(l.preventDefault(),this.closeStory()):(l.key==="Tab"||!u)&&(l.preventDefault(),h.hidden||h.focus({preventScroll:!0})),l.stopImmediatePropagation();return}if(this.tree.isOpen){this.tree.handleKey(l),l.stopImmediatePropagation();return}const c=this.helpOpen?this.ref("help-panel"):this.ref("end-screen").hidden?null:this.ref("end-card");if(!c){l.key==="Escape"&&this.card?(l.preventDefault(),this.closeCard(!0)):l.key==="Escape"&&this.panelOpen&&(l.preventDefault(),this.closePanel(!0));return}if(this.spaceGuard.blocks(l.key,l.target)&&l.preventDefault(),l.key==="Escape"&&this.helpOpen)l.preventDefault(),this.closeHelp();else if(l.key==="Tab")pl(c,l);else if(this.helpOpen&&(l.key==="ArrowLeft"||l.key==="ArrowRight")&&l.target.dataset.helpTab){const h=hs.findIndex(([d])=>d===this.helpTab),u=hs[(h+(l.key==="ArrowLeft"?hs.length-1:1))%hs.length][0];l.preventDefault(),this.setHelpTab(u),this.container.querySelector(`[data-help-tab="${u}"]`).focus()}l.stopImmediatePropagation()},{capture:!0})}ref(e){return this.refs.get(e)}text(e,t){const n=this.ref(e);n.textContent!==t&&(n.textContent=t)}hidden(e,t){const n=this.ref(e);n.hidden!==t&&(n.hidden=t)}attribute(e,t,n){e.getAttribute(t)!==n&&e.setAttribute(t,n)}button(e,t,n){const s=this.ref(e);s.disabled=t,n&&(s.title=n)}syncModal(){this.helpOpen||this.tree.isOpen||!this.ref("end-screen").hidden||this.storyOpen?document.body.dataset.uiModal="true":delete document.body.dataset.uiModal}toggleTree(){!this.state||this.state.phase==="victory"||this.state.phase==="defeat"||(this.tree.isOpen?this.tree.close():(this.closeOverlays(),this.tree.open(this.state)))}update(e){this.state=e;const t=Ab(e);this.tree.update(e),this.preview.render(Pb(e)),this.syncPill(e),this.syncCard(),this.syncStory(e),this.syncSkills(e);const n=[e.phase,e.gold,e.hp,e.maxHp,e.wave,e.core,e.levels.fire,e.levels.frost,e.levels.storm,e.remaining,e.total,e.extra,e.kills,e.score,Math.ceil(e.cooldown),e.novaCharges,e.skillPoints,e.skills.join(),e.paused,e.speed,e.endless,e.built].join("|");if(n===this.signature)return;this.signature=n;const s=e.phase==="defeat"||e.phase==="victory",r=Mb(e),a=this.ref("wave-title"),l=r.label.split(" · ").map((u,d,p)=>`<span class="keep">${Ri(d<p.length-1?`${u} ·`:u)}</span>`).join(" ");a.innerHTML!==l&&(a.innerHTML=l),this.ref("wave-box").classList.toggle("is-fighting",r.fighting),this.ref("wave-box").setAttribute("aria-label",`${e.endless?Oe.simulation.label:Oe.gateProgress} · ${r.waveLabel}`),this.ref("wave-box").title=e.endless?Oe.simulation.label:Oe.gateProgress,this.text("wave-status",r.status),this.text("wave-detail",r.remaining),this.ref("wave-fill").style.width=`${r.progress*100}%`,this.text("gold",un(r.gold)),this.ref("gold-resource").setAttribute("aria-label",`${Ja.energy} ${un(r.gold)}`),this.ref("gold-resource").title=Ja.energy;const c=xb;this.text("hp",c(r.hp)),this.text("hp-max",c(r.maxHp)),this.ref("health-resource").setAttribute("aria-label",`พลังป้อม ${un(r.hp)} จาก ${un(r.maxHp)}`),this.ref("health-resource").classList.toggle("critical",r.critical),this.ref("health-fill").style.width=`${100*Math.max(0,r.hp)/r.maxHp}%`;for(const u of yb(e)){this.ref(`${u.key}-level`).hidden=u.level===0,this.text(`${u.key}-level`,String(u.level));const d=u.key==="core"?null:Eh(e,u.key);this.ref(`${u.key}-card`).setAttribute("aria-label",[`${u.name} · ${u.levelText}`,u.fork?u.path:"",u.capstone?`★ ${u.capstone}`:"",d?`สกิล ${d.name}`:""].filter(Boolean).join(" · ")),this.text(`${u.key}-cost`,un(u.upgrade.cost));const p=this.ref(`${u.key}-buy`);p.disabled=s,p.classList.toggle("is-short",!u.upgrade.affordable);const g=u.look==="unlock"?" · พลังงานพอ":u.upgrade.affordable?"":" · พลังงานไม่พอ";p.setAttribute("aria-label",`${u.name} ${u.levelText} · ${u.level?"อัปเกรด":"ปลดธาตุ"} ${un(u.upgrade.cost)} พลังงาน${g} · ดูผลก่อนยืนยัน`),this.ref(`${u.key}-card`).dataset.look=u.look}this.ref("tree-points").hidden=!t.tree.badge,this.text("tree-points",t.tree.badge),this.ref("tree-button").classList.toggle("glow",t.tree.glow),this.ref("tree-button").setAttribute("aria-label",`ผังทักษะ · ${Ja.research}คงเหลือ ${t.tree.points} · T`),this.button("tree-button",t.tree.disabled);const h=this.ref("primary");if(h.hidden=r.fighting,this.ref("nova").hidden=!r.fighting,this.ref("repair").hidden=!r.fighting,h.dataset.action=t.primary.action,h.disabled=t.primary.disabled,h.classList.toggle("is-wave",e.built),this.text("primary-label",t.primary.label),this.text("primary-sub",t.primary.sub),this.text("nova-label",t.nova.label),this.text("nova-sub",t.nova.sub),this.text("nova-tag",t.nova.tag),this.ref("nova").setAttribute("aria-label",`${t.nova.accessibleText} · Q`),this.button("nova",t.nova.disabled,"ปล่อย Nova ใส่มอนสเตอร์ · Q"),this.ref("nova").classList.toggle("ready",t.nova.ready),this.ref("nova").style.setProperty("--nova-progress",String(t.nova.progress)),this.ref("nova").classList.toggle("is-charging",t.nova.charging),this.button("repair",t.repair.disabled,t.repair.reason),this.text("repair-sub",t.repair.disabled?t.repair.reason:"60 พลังงาน"),this.ref("repair").setAttribute("aria-label",`ซ่อม · ${t.repair.disabled?t.repair.reason:"60 พลังงาน"}`),this.text("pause-label",t.pause.label),this.text("pause-caption",t.pause.label),this.ref("pause").setAttribute("aria-label",`${t.pause.label} · Space`),this.ref("pause").querySelector("i").className=`ph-fill ph-${t.pause.paused?"play":"pause"}`,this.ref("pause").classList.toggle("is-active",t.pause.paused),this.ref("pause").title=`${t.pause.label} · Space`,this.button("pause",t.pause.disabled),this.ref("speed").setAttribute("aria-pressed",String(t.speed.fast)),this.ref("speed").classList.toggle("is-active",t.speed.fast),this.text("speed-caption",t.speed.caption),this.ref("speed").setAttribute("aria-label",t.speed.label),this.button("speed",t.speed.disabled,t.speed.label),this.ref("paused").hidden=!e.paused||s||this.helpOpen||this.tree.isOpen,this.ref("end-screen").hidden=!s,s){this.closeOverlays(),this.tree.isOpen&&this.tree.close();const u=e.phase==="victory";this.ref("end-card").classList.toggle("is-defeat",!u),this.ref("end-icon").innerHTML=Bt(u?"crown":"shield-slash","end-icon"),this.text("end-title",u?Oe.victory.title:e.endless?Oe.defeat.simulationTitle:Oe.defeat.title);const d=u?Oe.victory.lines:[e.endless?Oe.defeat.simulationLine:Oe.defeat.line];this.ref("end-description").innerHTML=d.map(g=>`<span class="end-log-line">${ct(g)}</span>`).join(" "),this.ref("end-log-label").hidden=!u,this.ref("end-archive").hidden=!u,this.text("end-wave",String(e.wave)),this.text("end-kills",un(e.kills)),this.text("end-score",un(e.score));const p=Fb(e);this.ref("end-build").innerHTML=(p.length?p:["ไม่ได้ใช้ผังทักษะ"]).map(g=>`<li>${Ri(g)}</li>`).join(""),this.ref("endless").hidden=!u,this.previousPhase!==e.phase&&window.setTimeout(()=>{const g=this.ref(u?"endless":"restart");g.focus(),this.spaceGuard.arm(g,"tab")},30)}this.syncModal(),this.previousPhase=e.phase}syncStory(e){const t=B_(e),n=this.ref("tower-log");this.hidden("tower-log",t===null);const s=t===null?"":`<span class="tower-log-label">${Oe.towerLog} · ${e.endless?Oe.simulation.short:Oe.speaker}</span> <span>${ct(t)}</span>`;n.innerHTML!==s&&(n.innerHTML=s);const r=`${e.seenTraits.join("|")};${e.seenMonsters.map(l=>`${l.kind}:${l.boss}`).join("|")}`;if(r===this.researchSignature)return;this.researchSignature=r;const a=z_(e);this.text("research-count",`บันทึกแล้ว ${a.length} / ${Ii.length} ความสามารถ`),this.ref("research-list").innerHTML=a.map(({trait:l,note:c})=>{const h=js[l];return`<li data-research-trait="${l}">${Bt(h.icon,"trait-icon")}<div><b>${h.name}</b><p class="research-note">${ct(c)}</p><p>${ct(h.rule)}</p><small>${ct(`แพ้ทาง: ${h.counters}`)}</small></div></li>`}).join(""),this.ref("research-pending").hidden=a.length===Ii.length,this.ref("research-pending").innerHTML=ct(a.length?Oe.research.pending:Oe.research.empty);const o=H_(e);this.ref("research-special-title").hidden=o.length===0,this.ref("research-special-list").innerHTML=o.map(l=>`<li data-research-special="${l.id}">${ct(l.note)}</li>`).join("")}toast(e,t="normal"){if(this.tree.isOpen){this.tree.message(e);return}if(this.helpOpen){this.ref("help-live").textContent=e;return}const n=this.ref(t==="boss"?"boss-toasts":"toasts");n.replaceChildren();const s=document.createElement("div");s.className=t==="boss"?"toast boss":"toast",t==="boss"&&(s.innerHTML=sn("crown")),s.append(e),n.append(s),window.setTimeout(()=>{s.classList.add("leaving"),window.setTimeout(()=>s.remove(),260)},2900)}setLoading(e,t){this.ref("loading-progress").style.width=`${Math.min(100,Math.max(0,e<=1?e*100:e))}%`,this.text("loading-text",t)}ready(){if(this.setLoading(1,Oe.loading.ready),this.options.story===!1){this.closeStory();return}const e=this.ref("story-start");e.hidden=!1,e.focus({preventScroll:!0})}closeStory(){const e=this.ref("loading");e.classList.add("is-ready"),window.setTimeout(()=>{this.storyOpen||(e.hidden=!0)},650),this.storyOpen=!1;try{localStorage.setItem(Vs.STORY_SEEN,"1")}catch{}this.syncModal()}openStory(){this.helpOpen&&this.closeHelp();const e=this.ref("loading"),t=this.ref("story-start");e.hidden=!1,e.classList.remove("is-ready"),e.classList.add("all"),t.innerHTML=`${Bt("play")}${Oe.intro.resume}`,t.hidden=!1,this.storyOpen=!0,this.syncModal(),t.focus({preventScroll:!0})}syncQuality(){document.body.dataset.quality=this.highQuality?"high":"standard",this.text("quality-setting",this.highQuality?"สูง":"ประหยัดพลังงาน")}setHelpTab(e){this.helpTab=e;for(const[t]of hs){const n=this.container.querySelector(`[data-help-tab="${t}"]`);n.setAttribute("aria-selected",String(t===e)),n.tabIndex=t===e?0:-1,this.container.querySelector(`#help-page-${t}`).hidden=t!==e}}coinFlight(e,t,n){this.coins.launch(e,t,n,this.reduced.matches)}feedback(e,t,n){const s=Math.round(gb(n.hp,n.maxHp)*100)/100;if(s!==this.vignette){this.vignette=s;const l=this.ref("vignette");l.style.setProperty("--vignette",String(s)),l.classList.toggle("on",s>0),l.classList.toggle("pulse",s>0&&!this.reduced.matches)}const r=performance.now()/1e3,a=this.reduced.matches;for(const l of e)l.type==="leak"&&!a&&this.pulseClass("vignette","flash",400),l.type==="cast"&&l.element&&l.element!=="arcane"&&this.pulseClass(`${l.element}-card`,"cast",600),l.type==="kill"&&(l.value??0)>0&&this.goldTally.add(l.value,r);const o=this.goldTally.take(r);o&&(this.ref("gold-gain").textContent=`+${un(o)}`,this.pulseClass("gold-gain","show",1100)),t.novaCharges===0&&n.novaCharges>0&&n.phase==="wave"&&!a&&this.pulseClass("nova","ring",800)}goldArrived(){this.pulseClass("gold-resource","gold-hit",220)}syncSkills(e){for(const t of["fire","frost","storm"]){const n=Eh(e,t),s=n?Math.round(n.left*100)/100:0,r=n?Math.ceil(e.runtime.skillTimers[t]-1e-9):0,a=n?`${n.icon}|${s}|${r}`:"";if(a===this.skillLook[t])continue;this.skillLook[t]=a,this.text(`${t}-skill-text`,n?`สกิล ${n.name} · ${r>0?`พร้อมในอีก ${r} วินาที`:"พร้อม"}`:"");const o=this.ref(`${t}-card`),l=this.ref(`${t}-gem`),c=`ui/icons/${n?n.icon:`gem-${t}`}.webp`;l.getAttribute("src")!==c&&l.setAttribute("src",c),o.classList.toggle("has-skill",!!n),o.classList.toggle("skill-ready",!!n&&s===0),this.ref(`${t}-cd`).style.setProperty("--cd",String(s));const h=this.ref(`${t}-count`);h.hidden=!n||r<=0;const u=r>0?String(r):"";h.textContent!==u&&(h.textContent=u)}}pulseClass(e,t,n){const s=this.ref(e),r=`${e}:${t}`;s.classList.remove(t),s.offsetWidth,s.classList.add(t),clearTimeout(this.feedbackTimers.get(r)),this.feedbackTimers.set(r,window.setTimeout(()=>s.classList.remove(t),n))}syncVolume(e,t){const n=this.container.querySelector(`#volume-${e}`);n.style.setProperty("--fill",`${t}%`),n.setAttribute("aria-valuetext",`${t} เปอร์เซ็นต์`),this.text(`volume-${e}-value`,`${t}%`)}toggleSound(){this.soundEnabled=this.options.onSound(),this.syncSound()}syncSound(){this.ref("sound-row").setAttribute("aria-pressed",String(this.soundEnabled)),this.text("sound-setting",this.soundEnabled?"เปิด":"ปิด")}syncPill(e){const t=Th(e),n=this.ref("enemy-pill");this.text("enemy-count",String(t.count));const s=this.ref("pill-portrait"),r=`ui/portraits/${t.portrait}.webp`;s.getAttribute("src")!==r&&s.setAttribute("src",r),this.attribute(n,"aria-label",t.label),!t.expandable&&this.panelOpen&&this.closePanel(!1),n.disabled!==!t.expandable&&(n.disabled=!t.expandable);const a=n.parentElement;!t.visible&&a.contains(document.activeElement)&&this.ref("pause").focus({preventScroll:!0}),a.hidden!==!t.visible&&(a.hidden=!t.visible)}togglePanel(){this.panelOpen?this.closePanel(!0):this.openPanel()}openPanel(){!this.state||!Th(this.state).expandable||(this.closeCard(!1),this.panelOpen=!0,this.ref("preview-slot").hidden=!1,this.ref("enemy-pill").setAttribute("aria-expanded","true"),this.ref("preview-slot").focus())}closePanel(e){var s;if(!this.panelOpen)return;const t=this.ref("preview-slot").contains(document.activeElement);this.panelOpen=!1,this.preview.clear(),this.ref("preview-slot").hidden=!0,this.ref("enemy-pill").setAttribute("aria-expanded","false");const n=this.ref("enemy-pill");(e||t)&&!n.disabled?n.focus():t&&((s=document.activeElement)==null||s.blur())}toggleCard(e,t){if(this.card===e){this.closeCard(t);return}if(this.closePanel(!1),this.card&&this.ref(`${this.card}-buy`).setAttribute("aria-expanded","false"),this.card=e,this.ref(`${e}-buy`).setAttribute("aria-expanded","true"),this.ref("upgrade-pop").hidden=!1,this.syncCard(),this.ref("upgrade-pop").scrollTop=0,t){const n=this.ref("upgrade-confirm");(n.disabled?this.ref("upgrade-pop"):n).focus()}}closeCard(e){if(!this.card)return;const t=this.ref(`${this.card}-buy`),n=this.ref("upgrade-pop").contains(document.activeElement);this.card=null,t.setAttribute("aria-expanded","false"),this.ref("upgrade-pop").hidden=!0,(e||n)&&t.focus()}closeOverlays(){this.closeCard(!1),this.closePanel(!1)}confirmUpgrade(e){if(!this.card)return;const t=this.card;this.closeCard(e),this.onCommand(t)}syncCard(){if(!this.card||!this.state)return;const e=wb(this.state,this.card),t=this.ref("pop-gem"),n=`ui/icons/gem-${e.key}.webp`;t.getAttribute("src")!==n&&t.setAttribute("src",n),this.text("pop-name",e.name),this.text("pop-from",String(e.level)),this.text("pop-to",String(e.next)),this.hidden("pop-route",!e.route),this.text("pop-route",e.route??""),this.text("pop-stat",e.stat),this.text("pop-before",e.before===null?"–":Lh(e.before)),this.text("pop-after",Lh(e.after)),this.text("pop-action",`${e.label} · ${un(e.cost)}`);const s=this.ref("upgrade-confirm");s.disabled=e.disabled,s.setAttribute("aria-label",`${e.label} ${e.name} เป็นระดับ ${e.next} · ${un(e.cost)} พลังงาน`),this.ref("pop-reason").hidden=!e.reason,this.text("pop-reason",e.reason??"");const r=this.ref("upgrade-pop"),a=this.ref("build-bar").getBoundingClientRect(),o=this.ref(`${e.key}-buy`).getBoundingClientRect(),l=(o.left+o.right)/2,c=Math.min(Math.max(12,l-r.offsetWidth/2),innerWidth-12-r.offsetWidth);r.style.setProperty("--pop-left",`${c-a.left}px`),r.style.setProperty("--arrow-x",`${l-c}px`);const h=Math.floor(r.getBoundingClientRect().bottom-8),u=r.scrollHeight+r.offsetHeight-r.clientHeight,d=r.offsetHeight>0&&u>h?`${h}px`:"";r.style.maxHeight!==d&&(r.style.maxHeight=d,r.classList.toggle("is-tight",d!==""))}openHelp(e,t,n=!1){this.helpOpen||(this.closeOverlays(),this.helpTrigger=t,this.spaceGuard.arm(n?this.ref("close-help"):null,"tab-or-arrow"),this.helpOpen=!0,this.setHelpTab(e),this.ref("help-shade").hidden=!1,t.setAttribute("aria-expanded","true"),this.ref("paused").hidden=!0,this.syncModal(),this.pausedByHelp=!!this.state&&!this.state.paused&&this.state.phase!=="defeat"&&this.state.phase!=="victory",this.pausedByHelp&&this.onCommand("pause"),this.ref("close-help").focus())}closeHelp(){var e,t,n;this.helpOpen&&(this.helpOpen=!1,this.ref("help-shade").hidden=!0,(e=this.helpTrigger)==null||e.setAttribute("aria-expanded","false"),this.ref("help-live").textContent="",this.syncModal(),this.pausedByHelp&&((t=this.state)!=null&&t.paused)&&this.onCommand("pause"),this.pausedByHelp=!1,this.signature="",this.state&&this.update(this.state),(n=this.helpTrigger)==null||n.focus())}};A(Vs,"STORY_SEEN","aetherkeep:story-seen");let ml=Vs;const ua=document.querySelector("#world"),ar=document.querySelector("#ui"),qe=ku(),Kb=null,Dh=[],us=void 0;ua.setAttribute("aria-label","เกาะลอยฟ้า ภาพวาดมุมคงที่");let jb;let ds;const on=new mb;let bt,da=!1,ms="ok",Hl=null;ar.addEventListener("pointerdown",i=>{document.body.dataset.uiModal!=="true"&&(Hl=i.target instanceof Element?i.target.closest("button"):null)});window.addEventListener("keydown",i=>{i.key==="Tab"&&(Hl=null)},{capture:!0});for(const i of["pointerdown","keydown"])window.addEventListener(i,()=>on.unlock(),{capture:!0});window.addEventListener("keydown",i=>{zl(ms)&&i.stopImmediatePropagation()},{capture:!0});ar.addEventListener("pointerdown",i=>{const e=i.target instanceof Element?i.target.closest("button"):null;e&&on.ui(e.disabled)});const od=i=>(bt==null?void 0:bt.screenPoint(i).ndcX)??0,xt=new ml(ar,i=>ld(i),{onSound:()=>on.toggle(),onVolume:(i,e)=>on.setVolume(i,e),onVolumePreview:()=>on.preview(),audio:on.settings,onQuality:()=>(bt==null?void 0:bt.toggleQuality())??!1,story:!Kb});function ld(i){if(!da)return;if(zl(ms))return{ok:!1,message:"กรุณาหมุนเครื่องเป็นแนวนอน",events:[]};on.unlock();const e=Zu(qe),t=tx(qe,i),n=rd(t.events,qe)??t.message;return n&&xt.toast(n,sd(t.events)),n!==Oe.research.unlocked&&t.events.some(s=>s.type==="research")&&xt.toast(Oe.research.unlocked),bt==null||bt.handle(t.events),on.handle(t.events,e,qe,od),xt.feedback(t.events,e,qe),xt.update(qe),t}async function Zb(){var i;try{let e=function(l){requestAnimationFrame(e);const c=l-s,h=Math.max(0,Math.min(c/1e3,.05));if(s=l,!document.hidden){if(document.body.dataset.uiModal!=="true"){const u=Zu(qe),d=Kc(qe,h*ll);us==null||us.add(qe.time,d),bt.handle(d),on.handle(d,u,qe,od),xt.feedback(d,u,qe);const p=rd(d,qe);p&&xt.toast(p,sd(d)),p!==Oe.research.unlocked&&d.some(g=>g.type==="research")&&xt.toast(Oe.research.unlocked)}ds==null||ds.begin(),bt.update(qe,h),ds==null||ds.end(),r+=h,jb&&qe.phase,r>.08&&(xt.update(qe),r=0,on.follow(qe),on.setDimmed(qe.paused||document.body.dataset.uiModal==="true"))}};xt.setLoading(0,Oe.loading.initial);const t=hu(innerWidth),n=Av(ua,t);bt=await Bl.create(n,t,l=>xt.setLoading(l,Oe.loading.progress)),bt.onCoin=(l,c)=>xt.coinFlight(l.x,l.y,c),bt.onCueStart=l=>{on.unlockCue(l.capstone)},Dh.length&&bt.handle(Dh),bt.update(qe,0),da=!0,xt.ready(),xt.update(qe),fa();let s=performance.now(),r=0;requestAnimationFrame(e);const a=l=>{qe.skillPoints+=l,xt.update(qe)},o=l=>{for(let c=0;c<Math.round(l*30);c++){const h=Kc(qe,.03333333333333333);us==null||us.add(qe.time,h),bt.handle(h),bt.update(qe,1/30/ll)}return xt.update(qe),qe.time};Object.defineProperty(window,"__AETHERKEEP__",{value:{getState:()=>JSON.parse(JSON.stringify(qe)),diagnostics:(l=!1)=>bt.diagnostics(l),version:"1.0.0"},writable:!1})}catch(e){console.error(e),ar.innerHTML='<section class="boot-error" style="position:fixed;inset:0;display:grid;place-content:center;background:#102734;color:white;text-align:center;padding:24px;font-family:sans-serif"><h1>เปิดเกาะไม่สำเร็จ</h1><p>โปรดใช้เบราว์เซอร์ที่รองรับ WebGL 2 แล้วลองโหลดเกมอีกครั้ง</p><button id="reload-game" style="padding:12px">ลองอีกครั้ง</button></section>',(i=document.querySelector("#reload-game"))==null||i.addEventListener("click",()=>location.reload())}}window.addEventListener("keydown",i=>{const e=i.key.toLowerCase(),t=i.key===" "&&i.target===Hl;if(t&&document.body.dataset.uiModal!=="true"&&i.preventDefault(),document.body.dataset.uiModal==="true"||i.target instanceof HTMLElement&&(/INPUT|TEXTAREA|SELECT/.test(i.target.tagName)||i.target.isContentEditable)||i.repeat||i.target instanceof HTMLButtonElement&&(i.key==="Enter"||i.key===" "&&!t))return;const n={" ":"pause",n:"wave",1:"fire",2:"frost",3:"storm",q:"nova"};if(e==="t"){i.preventDefault(),xt.toggleTree();return}n[e]&&(i.preventDefault(),ld(n[e]))});document.addEventListener("visibilitychange",()=>{document.hidden&&da&&!qe.paused&&qe.phase==="wave"&&(ha(qe,"pause"),xt.update(qe))});ua.addEventListener("webglcontextlost",i=>{i.preventDefault(),qe.paused||ha(qe,"pause"),xt.toast("กราฟิกหยุดชั่วคราว กรุณาโหลดหน้าใหม่เพื่อเล่นต่อ")});const ni=document.createElement("section");ni.className="rotate-screen";ni.setAttribute("role","alertdialog");ni.setAttribute("aria-modal","true");ni.setAttribute("aria-label","กรุณาหมุนเครื่องเป็นแนวนอน");ni.hidden=!0;ni.innerHTML='<svg class="rotate-icon" viewBox="0 0 64 64" aria-hidden="true"><rect x="20" y="6" width="24" height="42" rx="5" fill="none" stroke="currentColor" stroke-width="4"/><path d="M10 40a24 24 0 0 0 30 18" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M36 52l6 6-8 3" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg><h2>กรุณาหมุนเครื่องเป็นแนวนอน</h2><p>เกมนี้เล่นในแนวนอนเท่านั้น</p>';document.body.append(ni);const cd=matchMedia("(pointer: coarse)");function fa(){ms=V1(innerWidth,innerHeight,cd.matches),ni.hidden=ms==="ok";const i=zl(ms);i?document.body.dataset.rotateScreen="true":delete document.body.dataset.rotateScreen;for(const e of[ar,ua])e.inert=i,i&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&document.activeElement.blur();da&&G1(qe,ms)&&(ha(qe,"pause"),xt.update(qe))}const Vl=()=>{(document.fullscreenElement||matchMedia("(display-mode: standalone)").matches)&&W1()};for(const i of["resize","orientationchange"])addEventListener(i,fa);cd.addEventListener("change",fa);let Hs=!0,Jr=!1,Qr=-1/0,go=-1/0,hd=-1/0;document.addEventListener("fullscreenchange",()=>{if(Vl(),document.fullscreenElement){Jr=!0;return}Qr=performance.now(),Jr&&Qr-hd<=1e3&&(Hs=!0)});document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){go=performance.now();return}hd=performance.now(),Jr&&!document.fullscreenElement&&Qr>=go-1e3?Hs=!0:!document.fullscreenElement&&Qr<go-1e3&&(Jr=!1),Vl()});window.addEventListener("pointerup",i=>{if(!Hs)return;Hs=!1;const e=matchMedia("(display-mode: standalone)").matches;$1({touch:i.pointerType==="touch",fullscreen:!!document.fullscreenElement,standalone:e,supported:document.fullscreenEnabled})?document.documentElement.requestFullscreen({navigationUI:"hide"}).catch(()=>{Hs=!0}):Vl()},{capture:!0});fa();Zb();
