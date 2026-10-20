var Zu=Object.defineProperty;var Ju=(n,e,t)=>e in n?Zu(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var R=(n,e,t)=>Ju(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zo="180",Qu=0,Tl=1,ed=2,fh=1,td=2,Ln=3,Zn=0,Vt=1,sn=2,jn=0,Mi=1,Ur=2,Al=3,Rl=4,nd=5,mi=100,id=101,sd=102,rd=103,ad=104,od=200,ld=201,cd=202,hd=203,Ja=204,Qa=205,ud=206,dd=207,fd=208,pd=209,md=210,gd=211,vd=212,_d=213,xd=214,eo=0,to=1,no=2,cs=3,io=4,so=5,ro=6,ao=7,ph=0,Md=1,bd=2,Nn=0,yd=1,Sd=2,Ed=3,wd=4,Td=5,Ad=6,Rd=7,mh=300,hs=301,us=302,oo=303,lo=304,Gr=306,Nr=1e3,_i=1001,co=1002,Kt=1003,Cd=1004,Qs=1005,Yt=1006,ta=1007,xi=1008,kn=1009,gh=1010,vh=1011,Fs=1012,Jo=1013,wi=1014,xn=1015,Ws=1016,Qo=1017,el=1018,Os=1020,_h=35902,xh=35899,Mh=1021,bh=1022,fn=1023,ks=1026,Bs=1027,tl=1028,nl=1029,yh=1030,il=1031,sl=1033,Ar=33776,Rr=33777,Cr=33778,Pr=33779,ho=35840,uo=35841,fo=35842,po=35843,mo=36196,go=37492,vo=37496,_o=37808,xo=37809,Mo=37810,bo=37811,yo=37812,So=37813,Eo=37814,wo=37815,To=37816,Ao=37817,Ro=37818,Co=37819,Po=37820,Io=37821,Lo=36492,Do=36494,Uo=36495,No=36283,Fo=36284,Oo=36285,ko=36286,Pd=3200,Id=3201,Ld=0,Dd=1,Dn="",At="srgb",ds="srgb-linear",Fr="linear",tt="srgb",Di=7680,Cl=519,Ud=512,Nd=513,Fd=514,Sh=515,Od=516,kd=517,Bd=518,zd=519,Pl=35044,jt=35048,Il="300 es",Mn=2e3,Or=2001;class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],na=Math.PI/180,Bo=180/Math.PI;function $s(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function Hd(n,e){return(n%e+e)%e}function ia(n,e,t){return(1-t)*n+t*e}function bs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*v,S=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const I=Math.sqrt(E),C=Math.atan2(I,f*S);m=Math.sin(m*C)/I,o=Math.sin(o*C)/I}const b=o*S;if(l=l*m+d*b,c=c*m+p*b,h=h*m+g*b,u=u*m+v*b,m===1-o){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ll.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ll.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sa.copy(this).projectOnVector(e),this.sub(sa)}reflect(e){return this.sub(sa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sa=new k,Ll=new zn;class Be{constructor(e,t,i,s,r,a,o,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],v=s[0],m=s[3],f=s[6],S=s[1],E=s[4],b=s[7],I=s[2],C=s[5],T=s[8];return r[0]=a*v+o*S+l*I,r[3]=a*m+o*E+l*C,r[6]=a*f+o*b+l*T,r[1]=c*v+h*S+u*I,r[4]=c*m+h*E+u*C,r[7]=c*f+h*b+u*T,r[2]=d*v+p*S+g*I,r[5]=d*m+p*E+g*C,r[8]=d*f+p*b+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=t*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ra.makeScale(e,t)),this}rotate(e){return this.premultiply(ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new Be;function Eh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function zs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vd(){const n=zs("canvas");return n.style.display="block",n}const Dl={};function Hs(n){n in Dl||(Dl[n]=!0,console.warn(n))}function Gd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Ul=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nl=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wd(){const n={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===tt&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Dn?Fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ds]:{primaries:e,whitePoint:i,transfer:Fr,toXYZ:Ul,fromXYZ:Nl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:Ul,fromXYZ:Nl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),n}const Ze=Wd();function Fn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ls(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ui;class $d{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ui===void 0&&(Ui=zs("canvas")),Ui.width=e.width,Ui.height=e.height;const s=Ui.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ui}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Fn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fn(t[i]/255)*255):t[i]=Fn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xd=0;class rl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=$s(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(aa(s[a].image)):r.push(aa(s[a]))}else r=aa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function aa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$d.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qd=0;const oa=new k;class Rt extends vs{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,i=_i,s=_i,r=Yt,a=xi,o=fn,l=kn,c=Rt.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=$s(),this.name="",this.source=new rl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(oa).x}get height(){return this.source.getSize(oa).y}get depth(){return this.source.getSize(oa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nr:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nr:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=mh;Rt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,b=(p+1)/2,I=(f+1)/2,C=(h+d)/4,T=(u+v)/4,D=(g+m)/4;return E>b&&E>I?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=C/i,r=T/i):b>I?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=C/s,r=D/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=T/r,s=D/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yd extends vs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Rt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new rl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends Yd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class wh extends Rt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kd extends Rt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ri{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,on):on.fromBufferAttribute(r,a),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),er.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),er.copy(i.boundingBox)),er.applyMatrix4(e.matrixWorld),this.union(er)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),tr.subVectors(this.max,ys),Ni.subVectors(e.a,ys),Fi.subVectors(e.b,ys),Oi.subVectors(e.c,ys),Vn.subVectors(Fi,Ni),Gn.subVectors(Oi,Fi),si.subVectors(Ni,Oi);let t=[0,-Vn.z,Vn.y,0,-Gn.z,Gn.y,0,-si.z,si.y,Vn.z,0,-Vn.x,Gn.z,0,-Gn.x,si.z,0,-si.x,-Vn.y,Vn.x,0,-Gn.y,Gn.x,0,-si.y,si.x,0];return!la(t,Ni,Fi,Oi,tr)||(t=[1,0,0,0,1,0,0,0,1],!la(t,Ni,Fi,Oi,tr))?!1:(nr.crossVectors(Vn,Gn),t=[nr.x,nr.y,nr.z],la(t,Ni,Fi,Oi,tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Tn=[new k,new k,new k,new k,new k,new k,new k,new k],on=new k,er=new Ri,Ni=new k,Fi=new k,Oi=new k,Vn=new k,Gn=new k,si=new k,ys=new k,tr=new k,nr=new k,ri=new k;function la(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ri.fromArray(n,r);const o=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),l=e.dot(ri),c=t.dot(ri),h=i.dot(ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const jd=new Ri,Ss=new k,ca=new k;class Xs{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):jd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ss.subVectors(e,this.center);const t=Ss.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ss,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ss.copy(e.center).add(ca)),this.expandByPoint(Ss.copy(e.center).sub(ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const An=new k,ha=new k,ir=new k,Wn=new k,ua=new k,sr=new k,da=new k;class Zd{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ha.copy(e).add(t).multiplyScalar(.5),ir.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(ha);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ir),o=Wn.dot(this.direction),l=-Wn.dot(ir),c=Wn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ha).addScaledVector(ir,d),p}intersectSphere(e,t){An.subVectors(e.center,this.origin);const i=An.dot(this.direction),s=An.dot(An)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,i,s,r){ua.subVectors(t,e),sr.subVectors(i,e),da.crossVectors(ua,sr);let a=this.direction.dot(da),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,e);const l=o*this.direction.dot(sr.crossVectors(Wn,sr));if(l<0)return null;const c=o*this.direction.dot(ua.cross(Wn));if(c<0||l+c>a)return null;const h=-o*Wn.dot(da);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,i,s,r,a,o,l,c,h,u,d,p,g,v,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,d,p,g,v,m)}set(e,t,i,s,r,a,o,l,c,h,u,d,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),a=1/ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,p=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jd,e,Qd)}lookAt(e,t,i){const s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),$n.crossVectors(i,$t),$n.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),$n.crossVectors(i,$t)),$n.normalize(),rr.crossVectors($t,$n),s[0]=$n.x,s[4]=rr.x,s[8]=$t.x,s[1]=$n.y,s[5]=rr.y,s[9]=$t.y,s[2]=$n.z,s[6]=rr.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],S=i[3],E=i[7],b=i[11],I=i[15],C=s[0],T=s[4],D=s[8],y=s[12],M=s[1],L=s[5],B=s[9],H=s[13],ee=s[2],G=s[6],X=s[10],ie=s[14],W=s[3],he=s[7],fe=s[11],ge=s[15];return r[0]=a*C+o*M+l*ee+c*W,r[4]=a*T+o*L+l*G+c*he,r[8]=a*D+o*B+l*X+c*fe,r[12]=a*y+o*H+l*ie+c*ge,r[1]=h*C+u*M+d*ee+p*W,r[5]=h*T+u*L+d*G+p*he,r[9]=h*D+u*B+d*X+p*fe,r[13]=h*y+u*H+d*ie+p*ge,r[2]=g*C+v*M+m*ee+f*W,r[6]=g*T+v*L+m*G+f*he,r[10]=g*D+v*B+m*X+f*fe,r[14]=g*y+v*H+m*ie+f*ge,r[3]=S*C+E*M+b*ee+I*W,r[7]=S*T+E*L+b*G+I*he,r[11]=S*D+E*B+b*X+I*fe,r[15]=S*y+E*H+b*ie+I*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*p-i*l*p)+v*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+i*a*p+r*o*h-i*c*h)+f*(-s*o*h-t*l*u+t*o*d+s*a*u-i*a*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],S=u*m*c-v*d*c+v*l*p-o*m*p-u*l*f+o*d*f,E=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,b=h*v*c-g*u*c+g*o*p-a*v*p-h*o*f+a*u*f,I=g*u*l-h*v*l-g*o*d+a*v*d+h*o*m-a*u*m,C=t*S+i*E+s*b+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=S*T,e[1]=(v*d*r-u*m*r-v*s*p+i*m*p+u*s*f-i*d*f)*T,e[2]=(o*m*r-v*l*r+v*s*c-i*m*c-o*s*f+i*l*f)*T,e[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*p-i*l*p)*T,e[4]=E*T,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*T,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*f-t*l*f)*T,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*p+t*l*p)*T,e[8]=b*T,e[9]=(g*u*r-h*v*r-g*i*p+t*v*p+h*i*f-t*u*f)*T,e[10]=(a*v*r-g*o*r+g*i*c-t*v*c-a*i*f+t*o*f)*T,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*p-t*o*p)*T,e[12]=I*T,e[13]=(h*v*s-g*u*s+g*i*d-t*v*d-h*i*m+t*u*m)*T,e[14]=(g*o*s-a*v*s-g*i*l+t*v*l+a*i*m-t*o*m)*T,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*d+t*o*d)*T,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,v=a*h,m=a*u,f=o*u,S=l*c,E=l*h,b=l*u,I=i.x,C=i.y,T=i.z;return s[0]=(1-(v+f))*I,s[1]=(p+b)*I,s[2]=(g-E)*I,s[3]=0,s[4]=(p-b)*C,s[5]=(1-(d+f))*C,s[6]=(m+S)*C,s[7]=0,s[8]=(g+E)*T,s[9]=(m-S)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ki.set(s[0],s[1],s[2]).length();const a=ki.set(s[4],s[5],s[6]).length(),o=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ln.copy(this);const c=1/r,h=1/a,u=1/o;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,t.setFromRotationMatrix(ln),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Mn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),p=(i+s)/(i-s);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Mn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Or)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Mn,l=!1){const c=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),p=-(i+s)/(i-s);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Mn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Or)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ki=new k,ln=new rt,Jd=new k(0,0,0),Qd=new k(1,1,1),$n=new k,rr=new k,$t=new k,Fl=new rt,Ol=new zn;class Bn{constructor(e=0,t=0,i=0,s=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ol.setFromEuler(this),this.setFromQuaternion(Ol,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class Th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ef=0;const kl=new k,Bi=new zn,Rn=new rt,ar=new k,Es=new k,tf=new k,nf=new zn,Bl=new k(1,0,0),zl=new k(0,1,0),Hl=new k(0,0,1),Vl={type:"added"},sf={type:"removed"},zi={type:"childadded",child:null},fa={type:"childremoved",child:null};class Zt extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new k,t=new Bn,i=new zn,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new Be}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(Bl,e)}rotateY(e){return this.rotateOnAxis(zl,e)}rotateZ(e){return this.rotateOnAxis(Hl,e)}translateOnAxis(e,t){return kl.copy(e).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bl,e)}translateY(e){return this.translateOnAxis(zl,e)}translateZ(e){return this.translateOnAxis(Hl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ar.copy(e):ar.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Es,ar,this.up):Rn.lookAt(ar,Es,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(Rn),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vl),zi.child=e,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sf),fa.child=e,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vl),zi.child=e,this.dispatchEvent(zi),zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,nf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Zt.DEFAULT_UP=new k(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new k,Cn=new k,pa=new k,Pn=new k,Hi=new k,Vi=new k,Gl=new k,ma=new k,ga=new k,va=new k,_a=new mt,xa=new mt,Ma=new mt;class dn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),cn.subVectors(e,t),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){cn.subVectors(s,t),Cn.subVectors(i,t),pa.subVectors(e,t);const a=cn.dot(cn),o=cn.dot(Cn),l=cn.dot(pa),c=Cn.dot(Cn),h=Cn.dot(pa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return _a.setScalar(0),xa.setScalar(0),Ma.setScalar(0),_a.fromBufferAttribute(e,t),xa.fromBufferAttribute(e,i),Ma.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(_a,r.x),a.addScaledVector(xa,r.y),a.addScaledVector(Ma,r.z),a}static isFrontFacing(e,t,i,s){return cn.subVectors(i,t),Cn.subVectors(e,t),cn.cross(Cn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),cn.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return dn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Hi.subVectors(s,i),Vi.subVectors(r,i),ma.subVectors(e,i);const l=Hi.dot(ma),c=Vi.dot(ma);if(l<=0&&c<=0)return t.copy(i);ga.subVectors(e,s);const h=Hi.dot(ga),u=Vi.dot(ga);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Hi,a);va.subVectors(e,r);const p=Hi.dot(va),g=Vi.dot(va);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Vi,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Gl.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Gl,o);const f=1/(m+v+d);return a=v*f,o=d*f,t.copy(i).addScaledVector(Hi,a).addScaledVector(Vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},or={h:0,s:0,l:0};function ba(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ze.workingColorSpace){if(e=Hd(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=ba(a,r,e+1/3),this.g=ba(a,r,e),this.b=ba(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=At){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const i=Ah[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Ze.workingToColorSpace(It.copy(this),e),Math.round(Xe(It.r*255,0,255))*65536+Math.round(Xe(It.g*255,0,255))*256+Math.round(Xe(It.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(It.copy(this),t);const i=It.r,s=It.g,r=It.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=At){Ze.workingToColorSpace(It.copy(this),e);const t=It.r,i=It.g,s=It.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(or);const i=ia(Xn.h,or.h,t),s=ia(Xn.s,or.s,t),r=ia(Xn.l,or.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Ye;Ye.NAMES=Ah;let rf=0;class Wr extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=$s(),this.name="",this.type="Material",this.blending=Mi,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=Qa,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(i.blending=this.blending),this.side!==Zn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ja&&(i.blendSrc=this.blendSrc),this.blendDst!==Qa&&(i.blendDst=this.blendDst),this.blendEquation!==mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qt extends Wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new k,lr=new Je;let af=0;class pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:af++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Pl,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXY(t,lr.x,lr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pl&&(e.usage=this.usage),e}}class Rh extends pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ch extends pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bi extends pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let of=0;const en=new rt,ya=new Zt,Gi=new k,Xt=new Ri,ws=new Ri,yt=new k;class Ci extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eh(e)?Ch:Rh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Be().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,i){return en.makeTranslation(e,t,i),this.applyMatrix4(en),this}scale(e,t,i){return en.makeScale(e,t,i),this.applyMatrix4(en),this}lookAt(e){return ya.lookAt(e),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bi(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Xt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ws.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Xt.min,ws.min),Xt.expandByPoint(yt),yt.addVectors(Xt.max,ws.max),Xt.expandByPoint(yt)):(Xt.expandByPoint(ws.min),Xt.expandByPoint(ws.max))}Xt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(yt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)yt.fromBufferAttribute(o,c),l&&(Gi.fromBufferAttribute(e,c),yt.add(Gi)),s=Math.max(s,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new k,l[D]=new k;const c=new k,h=new k,u=new k,d=new Je,p=new Je,g=new Je,v=new k,m=new k;function f(D,y,M){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,y),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),o[D].add(v),o[y].add(v),o[M].add(v),l[D].add(m),l[y].add(m),l[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let D=0,y=S.length;D<y;++D){const M=S[D],L=M.start,B=M.count;for(let H=L,ee=L+B;H<ee;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new k,b=new k,I=new k,C=new k;function T(D){I.fromBufferAttribute(s,D),C.copy(I);const y=o[D];E.copy(y),E.sub(I.multiplyScalar(I.dot(y))).normalize(),b.crossVectors(C,y);const L=b.dot(l[D])<0?-1:1;a.setXYZW(D,E.x,E.y,E.z,L)}for(let D=0,y=S.length;D<y;++D){const M=S[D],L=M.start,B=M.count;for(let H=L,ee=L+B;H<ee;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,h=new k,u=new k;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new pn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ci,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wl=new rt,ai=new Zd,cr=new Xs,$l=new k,hr=new k,ur=new k,dr=new k,Sa=new k,fr=new k,Xl=new k,pr=new k;class Ht extends Zt{constructor(e=new Ci,t=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){fr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Sa.fromBufferAttribute(u,e),a?fr.addScaledVector(Sa,h):fr.addScaledVector(Sa.sub(t),h))}t.add(fr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cr.copy(i.boundingSphere),cr.applyMatrix4(r),ai.copy(e.ray).recast(e.near),!(cr.containsPoint(ai.origin)===!1&&(ai.intersectSphere(cr,$l)===null||ai.origin.distanceToSquared($l)>(e.far-e.near)**2))&&(Wl.copy(r).invert(),ai.copy(e.ray).applyMatrix4(Wl),!(i.boundingBox!==null&&ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,I=E;b<I;b+=3){const C=o.getX(b),T=o.getX(b+1),D=o.getX(b+2);s=mr(this,f,e,i,c,h,u,C,T,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const S=o.getX(m),E=o.getX(m+1),b=o.getX(m+2);s=mr(this,a,e,i,c,h,u,S,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,I=E;b<I;b+=3){const C=b,T=b+1,D=b+2;s=mr(this,f,e,i,c,h,u,C,T,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const S=m,E=m+1,b=m+2;s=mr(this,a,e,i,c,h,u,S,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function lf(n,e,t,i,s,r,a,o){let l;if(e.side===Vt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Zn,o),l===null)return null;pr.copy(o),pr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(pr);return c<t.near||c>t.far?null:{distance:c,point:pr.clone(),object:n}}function mr(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,hr),n.getVertexPosition(l,ur),n.getVertexPosition(c,dr);const h=lf(n,e,t,i,hr,ur,dr,Xl);if(h){const u=new k;dn.getBarycoord(Xl,hr,ur,dr,u),s&&(h.uv=dn.getInterpolatedAttribute(s,o,l,c,u,new Je)),r&&(h.uv1=dn.getInterpolatedAttribute(r,o,l,c,u,new Je)),a&&(h.normal=dn.getInterpolatedAttribute(a,o,l,c,u,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new k,materialIndex:0};dn.getNormal(hr,ur,dr,d.normal),h.face=d,h.barycoord=u}return h}class qs extends Ci{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new bi(c,3)),this.setAttribute("normal",new bi(h,3)),this.setAttribute("uv",new bi(u,2));function g(v,m,f,S,E,b,I,C,T,D,y){const M=b/T,L=I/D,B=b/2,H=I/2,ee=C/2,G=T+1,X=D+1;let ie=0,W=0;const he=new k;for(let fe=0;fe<X;fe++){const ge=fe*L-H;for(let Ae=0;Ae<G;Ae++){const qe=Ae*M-B;he[v]=qe*S,he[m]=ge*E,he[f]=ee,c.push(he.x,he.y,he.z),he[v]=0,he[m]=0,he[f]=C>0?1:-1,h.push(he.x,he.y,he.z),u.push(Ae/T),u.push(1-fe/D),ie+=1}}for(let fe=0;fe<D;fe++)for(let ge=0;ge<T;ge++){const Ae=d+ge+G*fe,qe=d+ge+G*(fe+1),Ue=d+(ge+1)+G*(fe+1),He=d+(ge+1)+G*fe;l.push(Ae,qe,He),l.push(qe,Ue,He),W+=6}o.addGroup(p,W,y),p+=W,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Dt(n){const e={};for(let t=0;t<n.length;t++){const i=fs(n[t]);for(const s in i)e[s]=i[s]}return e}function cf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ph(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const hf={clone:fs,merge:Dt};var uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends Wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uf,this.fragmentShader=df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=cf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ih extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qn=new k,ql=new Je,Yl=new Je;class un extends Ih{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,ql,Yl),t.subVectors(Yl,ql)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(na*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wi=-90,$i=1;class ff extends Zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(Wi,$i,e,t);s.layers=this.layers,this.add(s);const r=new un(Wi,$i,e,t);r.layers=this.layers,this.add(r);const a=new un(Wi,$i,e,t);a.layers=this.layers,this.add(a);const o=new un(Wi,$i,e,t);o.layers=this.layers,this.add(o);const l=new un(Wi,$i,e,t);l.layers=this.layers,this.add(l);const c=new un(Wi,$i,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Mn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Or)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Lh extends Rt{constructor(e=[],t=hs,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pf extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Lh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qs(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:jn});r.uniforms.tEquirect.value=t;const a=new Ht(s,r),o=t.minFilter;return t.minFilter===xi&&(t.minFilter=Yt),new ff(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class gr extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mf={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class gf extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class al extends Rt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Kt,h=Kt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sn extends pn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xi=new rt,Kl=new rt,vr=[],jl=new Ri,vf=new rt,Ts=new Ht,As=new Xs;class Ys extends Ht{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,vf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xi),jl.copy(e.boundingBox).applyMatrix4(Xi),this.boundingBox.union(jl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xi),As.copy(e.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(As)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ts.geometry=this.geometry,Ts.material=this.material,Ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(i),e.ray.intersectsSphere(As)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xi),Kl.multiplyMatrices(i,Xi),Ts.matrixWorld=Kl,Ts.raycast(e,vr);for(let a=0,o=vr.length;a<o;a++){const l=vr[a];l.instanceId=r,l.object=this,t.push(l)}vr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Sn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new al(new Float32Array(s*this.count),s,this.count,tl,xn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wa=new k,_f=new k,xf=new Be;class fi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=wa.subVectors(i,t).cross(_f.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(wa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||xf.getNormalMatrix(e),s=this.coplanarPoint(wa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new Xs,Mf=new Je(.5,.5),_r=new k;class Dh{constructor(e=new fi,t=new fi,i=new fi,s=new fi,r=new fi,a=new fi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],v=r[9],m=r[10],f=r[11],S=r[12],E=r[13],b=r[14],I=r[15];if(s[0].setComponents(c-a,p-h,f-g,I-S).normalize(),s[1].setComponents(c+a,p+h,f+g,I+S).normalize(),s[2].setComponents(c+o,p+u,f+v,I+E).normalize(),s[3].setComponents(c-o,p-u,f-v,I-E).normalize(),i)s[4].setComponents(l,d,m,b).normalize(),s[5].setComponents(c-l,p-d,f-m,I-b).normalize();else if(s[4].setComponents(c-l,p-d,f-m,I-b).normalize(),t===Mn)s[5].setComponents(c+l,p+d,f+m,I+b).normalize();else if(t===Or)s[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){oi.center.set(0,0,0);const t=Mf.distanceTo(e.center);return oi.radius=.7071067811865476+t,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(_r.x=s.normal.x>0?e.max.x:e.min.x,_r.y=s.normal.y>0?e.max.y:e.min.y,_r.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ol extends Rt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Uh extends Rt{constructor(e,t,i=wi,s,r,a,o=Kt,l=Kt,c,h=ks,u=1){if(h!==ks&&h!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Nh extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gn extends Ci{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const S=f*d-a;for(let E=0;E<c;E++){const b=E*u-r;g.push(b,-S,0),v.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){const E=S+c*f,b=S+c*(f+1),I=S+1+c*(f+1),C=S+1+c*f;p.push(E,b,C),p.push(b,I,C)}this.setIndex(p),this.setAttribute("position",new bi(g,3)),this.setAttribute("normal",new bi(v,3)),this.setAttribute("uv",new bi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.width,e.height,e.widthSegments,e.heightSegments)}}class bf extends Wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yf extends Wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ta={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Sf{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Ef=new Sf;class ll{constructor(e){this.manager=e!==void 0?e:Ef,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ll.DEFAULT_MATERIAL_NAME="__DEFAULT";const qi=new WeakMap;class wf extends ll{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ta.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=qi.get(a);u===void 0&&(u=[],qi.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=zs("img");function l(){h(),t&&t(this);const u=qi.get(this)||[];for(let d=0;d<u.length;d++){const p=u[d];p.onLoad&&p.onLoad(this)}qi.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Ta.remove(`image:${e}`);const d=qi.get(this)||[];for(let p=0;p<d.length;p++){const g=d[p];g.onError&&g.onError(u)}qi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ta.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Fh extends ll{constructor(e){super(e)}load(e,t,i,s){const r=new Rt,a=new wf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Oh extends Ih{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Tf extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Zl(n,e,t,i){const s=Af(i);switch(t){case Mh:return n*e;case tl:return n*e/s.components*s.byteLength;case nl:return n*e/s.components*s.byteLength;case yh:return n*e*2/s.components*s.byteLength;case il:return n*e*2/s.components*s.byteLength;case bh:return n*e*3/s.components*s.byteLength;case fn:return n*e*4/s.components*s.byteLength;case sl:return n*e*4/s.components*s.byteLength;case Ar:case Rr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cr:case Pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uo:case po:return Math.max(n,16)*Math.max(e,8)/4;case ho:case fo:return Math.max(n,8)*Math.max(e,8)/2;case mo:case go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case bo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case yo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case So:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case To:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ro:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Co:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Po:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Io:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Lo:case Do:case Uo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case No:case Fo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Oo:case ko:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Af(n){switch(n){case kn:case gh:return{byteLength:1,components:1};case Fs:case vh:case Ws:return{byteLength:2,components:1};case Qo:case el:return{byteLength:2,components:4};case wi:case Jo:case xn:return{byteLength:4,components:1};case _h:case xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kh(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Rf(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pf=`#ifdef USE_ALPHAHASH
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
#endif`,If=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nf=`#ifdef USE_AOMAP
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
#endif`,Ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Of=`#ifdef USE_BATCHING
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
#endif`,kf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vf=`#ifdef USE_IRIDESCENCE
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
#endif`,Gf=`#ifdef USE_BUMPMAP
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
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jf=`#define PI 3.141592653589793
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
} // validated`,Qf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ep=`vec3 transformedNormal = objectNormal;
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
#endif`,tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",ap=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,op=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gp=`#ifdef USE_GRADIENTMAP
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
}`,vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mp=`uniform bool receiveShadow;
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
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tp=`PhysicalMaterial material;
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
#endif`,Ap=`struct PhysicalMaterial {
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
}`,Rp=`
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
#endif`,Cp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kp=`#if defined( USE_POINTS_UV )
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
#endif`,Bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wp=`#ifdef USE_MORPHTARGETS
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
#endif`,$p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zp=`#ifdef USE_NORMALMAP
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
#endif`,Jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,im=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fm=`float getShadowMask() {
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
}`,pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mm=`#ifdef USE_SKINNING
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
#endif`,gm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vm=`#ifdef USE_SKINNING
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
#endif`,_m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ym=`#ifdef USE_TRANSMISSION
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
#endif`,Sm=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cm=`uniform sampler2D t2D;
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`#include <common>
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
}`,Nm=`#if DEPTH_PACKING == 3200
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
}`,Fm=`#define DISTANCE
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
}`,Om=`#define DISTANCE
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`uniform float scale;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Wm=`#define LAMBERT
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
}`,$m=`#define LAMBERT
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
}`,Xm=`#define MATCAP
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
}`,qm=`#define MATCAP
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
}`,Ym=`#define NORMAL
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
}`,Km=`#define NORMAL
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
}`,jm=`#define PHONG
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
}`,Zm=`#define PHONG
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
}`,Jm=`#define STANDARD
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
}`,Qm=`#define STANDARD
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
}`,e0=`#define TOON
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
}`,t0=`#define TOON
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
}`,n0=`uniform float size;
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
}`,i0=`uniform vec3 diffuse;
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
}`,s0=`#include <common>
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
}`,r0=`uniform vec3 color;
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
}`,a0=`uniform float rotation;
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
}`,o0=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Cf,alphahash_pars_fragment:Pf,alphamap_fragment:If,alphamap_pars_fragment:Lf,alphatest_fragment:Df,alphatest_pars_fragment:Uf,aomap_fragment:Nf,aomap_pars_fragment:Ff,batching_pars_vertex:Of,batching_vertex:kf,begin_vertex:Bf,beginnormal_vertex:zf,bsdfs:Hf,iridescence_fragment:Vf,bumpmap_pars_fragment:Gf,clipping_planes_fragment:Wf,clipping_planes_pars_fragment:$f,clipping_planes_pars_vertex:Xf,clipping_planes_vertex:qf,color_fragment:Yf,color_pars_fragment:Kf,color_pars_vertex:jf,color_vertex:Zf,common:Jf,cube_uv_reflection_fragment:Qf,defaultnormal_vertex:ep,displacementmap_pars_vertex:tp,displacementmap_vertex:np,emissivemap_fragment:ip,emissivemap_pars_fragment:sp,colorspace_fragment:rp,colorspace_pars_fragment:ap,envmap_fragment:op,envmap_common_pars_fragment:lp,envmap_pars_fragment:cp,envmap_pars_vertex:hp,envmap_physical_pars_fragment:bp,envmap_vertex:up,fog_vertex:dp,fog_pars_vertex:fp,fog_fragment:pp,fog_pars_fragment:mp,gradientmap_pars_fragment:gp,lightmap_pars_fragment:vp,lights_lambert_fragment:_p,lights_lambert_pars_fragment:xp,lights_pars_begin:Mp,lights_toon_fragment:yp,lights_toon_pars_fragment:Sp,lights_phong_fragment:Ep,lights_phong_pars_fragment:wp,lights_physical_fragment:Tp,lights_physical_pars_fragment:Ap,lights_fragment_begin:Rp,lights_fragment_maps:Cp,lights_fragment_end:Pp,logdepthbuf_fragment:Ip,logdepthbuf_pars_fragment:Lp,logdepthbuf_pars_vertex:Dp,logdepthbuf_vertex:Up,map_fragment:Np,map_pars_fragment:Fp,map_particle_fragment:Op,map_particle_pars_fragment:kp,metalnessmap_fragment:Bp,metalnessmap_pars_fragment:zp,morphinstance_vertex:Hp,morphcolor_vertex:Vp,morphnormal_vertex:Gp,morphtarget_pars_vertex:Wp,morphtarget_vertex:$p,normal_fragment_begin:Xp,normal_fragment_maps:qp,normal_pars_fragment:Yp,normal_pars_vertex:Kp,normal_vertex:jp,normalmap_pars_fragment:Zp,clearcoat_normal_fragment_begin:Jp,clearcoat_normal_fragment_maps:Qp,clearcoat_pars_fragment:em,iridescence_pars_fragment:tm,opaque_fragment:nm,packing:im,premultiplied_alpha_fragment:sm,project_vertex:rm,dithering_fragment:am,dithering_pars_fragment:om,roughnessmap_fragment:lm,roughnessmap_pars_fragment:cm,shadowmap_pars_fragment:hm,shadowmap_pars_vertex:um,shadowmap_vertex:dm,shadowmask_pars_fragment:fm,skinbase_vertex:pm,skinning_pars_vertex:mm,skinning_vertex:gm,skinnormal_vertex:vm,specularmap_fragment:_m,specularmap_pars_fragment:xm,tonemapping_fragment:Mm,tonemapping_pars_fragment:bm,transmission_fragment:ym,transmission_pars_fragment:Sm,uv_pars_fragment:Em,uv_pars_vertex:wm,uv_vertex:Tm,worldpos_vertex:Am,background_vert:Rm,background_frag:Cm,backgroundCube_vert:Pm,backgroundCube_frag:Im,cube_vert:Lm,cube_frag:Dm,depth_vert:Um,depth_frag:Nm,distanceRGBA_vert:Fm,distanceRGBA_frag:Om,equirect_vert:km,equirect_frag:Bm,linedashed_vert:zm,linedashed_frag:Hm,meshbasic_vert:Vm,meshbasic_frag:Gm,meshlambert_vert:Wm,meshlambert_frag:$m,meshmatcap_vert:Xm,meshmatcap_frag:qm,meshnormal_vert:Ym,meshnormal_frag:Km,meshphong_vert:jm,meshphong_frag:Zm,meshphysical_vert:Jm,meshphysical_frag:Qm,meshtoon_vert:e0,meshtoon_frag:t0,points_vert:n0,points_frag:i0,shadow_vert:s0,shadow_frag:r0,sprite_vert:a0,sprite_frag:o0},de={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},_n={basic:{uniforms:Dt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Dt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Dt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Dt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Dt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Dt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Dt([de.points,de.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Dt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Dt([de.common,de.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Dt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Dt([de.sprite,de.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Dt([de.common,de.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Dt([de.lights,de.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};_n.physical={uniforms:Dt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const xr={r:0,b:0,g:0},li=new Bn,l0=new rt;function c0(n,e,t,i,s,r,a){const o=new Ye(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?t:e).get(b)),b}function v(E){let b=!1;const I=g(E);I===null?f(o,l):I&&I.isColor&&(f(I,1),b=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,b){const I=g(b);I&&(I.isCubeTexture||I.mapping===Gr)?(h===void 0&&(h=new Ht(new qs(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:fs(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),li.copy(b.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(l0.makeRotationFromEuler(li)),h.material.toneMapped=Ze.getTransfer(I.colorSpace)!==tt,(u!==I||d!==I.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=I,d=I.version,p=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new Ht(new gn(2,2),new Jn({name:"BackgroundMaterial",uniforms:fs(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(I.colorSpace)!==tt,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(u!==I||d!==I.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=I,d=I.version,p=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,b){E.getRGB(xr,Ph(n)),i.buffers.color.setClear(xr.r,xr.g,xr.b,b,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),l=b,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:v,addToRenderList:m,dispose:S}}function h0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(M,L,B,H,ee){let G=!1;const X=u(H,B,L);r!==X&&(r=X,c(r.object)),G=p(M,H,B,ee),G&&g(M,H,B,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,b(M,L,B,H),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,L,B){const H=B.wireframe===!0;let ee=i[M.id];ee===void 0&&(ee={},i[M.id]=ee);let G=ee[L.id];G===void 0&&(G={},ee[L.id]=G);let X=G[H];return X===void 0&&(X=d(l()),G[H]=X),X}function d(M){const L=[],B=[],H=[];for(let ee=0;ee<t;ee++)L[ee]=0,B[ee]=0,H[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:H,object:M,attributes:{},index:null}}function p(M,L,B,H){const ee=r.attributes,G=L.attributes;let X=0;const ie=B.getAttributes();for(const W in ie)if(ie[W].location>=0){const fe=ee[W];let ge=G[W];if(ge===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),fe===void 0||fe.attribute!==ge||ge&&fe.data!==ge.data)return!0;X++}return r.attributesNum!==X||r.index!==H}function g(M,L,B,H){const ee={},G=L.attributes;let X=0;const ie=B.getAttributes();for(const W in ie)if(ie[W].location>=0){let fe=G[W];fe===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor));const ge={};ge.attribute=fe,fe&&fe.data&&(ge.data=fe.data),ee[W]=ge,X++}r.attributes=ee,r.attributesNum=X,r.index=H}function v(){const M=r.newAttributes;for(let L=0,B=M.length;L<B;L++)M[L]=0}function m(M){f(M,0)}function f(M,L){const B=r.newAttributes,H=r.enabledAttributes,ee=r.attributeDivisors;B[M]=1,H[M]===0&&(n.enableVertexAttribArray(M),H[M]=1),ee[M]!==L&&(n.vertexAttribDivisor(M,L),ee[M]=L)}function S(){const M=r.newAttributes,L=r.enabledAttributes;for(let B=0,H=L.length;B<H;B++)L[B]!==M[B]&&(n.disableVertexAttribArray(B),L[B]=0)}function E(M,L,B,H,ee,G,X){X===!0?n.vertexAttribIPointer(M,L,B,ee,G):n.vertexAttribPointer(M,L,B,H,ee,G)}function b(M,L,B,H){v();const ee=H.attributes,G=B.getAttributes(),X=L.defaultAttributeValues;for(const ie in G){const W=G[ie];if(W.location>=0){let he=ee[ie];if(he===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),he!==void 0){const fe=he.normalized,ge=he.itemSize,Ae=e.get(he);if(Ae===void 0)continue;const qe=Ae.buffer,Ue=Ae.type,He=Ae.bytesPerElement,J=Ue===n.INT||Ue===n.UNSIGNED_INT||he.gpuType===Jo;if(he.isInterleavedBufferAttribute){const re=he.data,ve=re.stride,Le=he.offset;if(re.isInstancedInterleavedBuffer){for(let Ee=0;Ee<W.locationSize;Ee++)f(W.location+Ee,re.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ee=0;Ee<W.locationSize;Ee++)m(W.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let Ee=0;Ee<W.locationSize;Ee++)E(W.location+Ee,ge/W.locationSize,Ue,fe,ve*He,(Le+ge/W.locationSize*Ee)*He,J)}else{if(he.isInstancedBufferAttribute){for(let re=0;re<W.locationSize;re++)f(W.location+re,he.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let re=0;re<W.locationSize;re++)m(W.location+re);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let re=0;re<W.locationSize;re++)E(W.location+re,ge/W.locationSize,Ue,fe,ge*He,ge/W.locationSize*re*He,J)}}else if(X!==void 0){const fe=X[ie];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(W.location,fe);break;case 3:n.vertexAttrib3fv(W.location,fe);break;case 4:n.vertexAttrib4fv(W.location,fe);break;default:n.vertexAttrib1fv(W.location,fe)}}}}S()}function I(){D();for(const M in i){const L=i[M];for(const B in L){const H=L[B];for(const ee in H)h(H[ee].object),delete H[ee];delete L[B]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const B in L){const H=L[B];for(const ee in H)h(H[ee].object),delete H[ee];delete L[B]}delete i[M.id]}function T(M){for(const L in i){const B=i[L];if(B[M.id]===void 0)continue;const H=B[M.id];for(const ee in H)h(H[ee].object),delete H[ee];delete B[M.id]}}function D(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:y,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function u0(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function d0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==fn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const D=T===Ws&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==kn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==xn&&!D)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:b,vertexTextures:I,maxSamples:C}}function f0(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new fi,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:i,E=S*4;let b=f.clippingState||null;l.value=b,b=h(g,d,E,p);for(let I=0;I!==E;++I)b[I]=t[I];f.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,b=p;E!==v;++E,b+=4)a.copy(u[E]).applyMatrix4(S,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function p0(n){let e=new WeakMap;function t(a,o){return o===oo?a.mapping=hs:o===lo&&(a.mapping=us),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===oo||o===lo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new pf(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const as=4,Jl=[.125,.215,.35,.446,.526,.582],gi=20,Aa=new Oh,Ql=new Ye;let Ra=null,Ca=0,Pa=0,Ia=!1;const pi=(1+Math.sqrt(5))/2,Yi=1/pi,ec=[new k(-pi,Yi,0),new k(pi,Yi,0),new k(-Yi,0,pi),new k(Yi,0,pi),new k(0,pi,-Yi),new k(0,pi,Yi),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],m0=new k;class tc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=m0}=r;Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ra,Ca,Pa),this._renderer.xr.enabled=Ia,e.scissorTest=!1,Mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hs||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Ws,format:fn,colorSpace:ds,depthBuffer:!1},s=nc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g0(r)),this._blurMaterial=v0(r,e,t)}return s}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,Aa)}_sceneToCubeUV(e,t,i,s,r){const l=new un(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Ql),u.toneMapping=Nn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const v=new qt({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),m=new Ht(new qs,v);let f=!1;const S=e.background;S?S.isColor&&(v.color.copy(S),e.background=null,f=!0):(v.color.copy(Ql),f=!0);for(let E=0;E<6;E++){const b=E%3;b===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):b===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const I=this._cubeSize;Mr(s,b*I,E>2?I:0,I,I),u.setRenderTarget(s),f&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===hs||e.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ic());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ht(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Mr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Aa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ec[(s-r-1)%ec.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ht(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*gi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):gi;m>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const f=[];let S=0;for(let T=0;T<gi;++T){const D=T/v,y=Math.exp(-D*D/2);f.push(y),T===0?S+=y:T<m&&(S+=2*y)}for(let T=0;T<f.length;T++)f[T]=f[T]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const b=this._sizeLods[s],I=3*b*(s>E-as?s-E+as:0),C=4*(this._cubeSize-b);Mr(t,I,C,3*b,2*b),l.setRenderTarget(t),l.render(u,Aa)}}function g0(n){const e=[],t=[],i=[];let s=n;const r=n-as+1+Jl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-as?l=Jl[a-n+as-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,S=new Float32Array(v*g*p),E=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let C=0;C<p;C++){const T=C%3*2/3-1,D=C>2?0:-1,y=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];S.set(y,v*g*C),E.set(d,m*g*C);const M=[C,C,C,C,C,C];b.set(M,f*g*C)}const I=new Ci;I.setAttribute("position",new pn(S,v)),I.setAttribute("uv",new pn(E,m)),I.setAttribute("faceIndex",new pn(b,f)),e.push(I),s>as&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function nc(n,e,t){const i=new Ti(n,e,t);return i.texture.mapping=Gr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function v0(n,e,t){const i=new Float32Array(gi),s=new k(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cl(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function ic(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function sc(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function cl(){return`

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
	`}function _0(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===oo||l===lo,h=l===hs||l===us;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new tc(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new tc(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function x0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Hs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function M0(n,e,t,i){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const S=p.array;v=p.version;for(let E=0,b=S.length;E<b;E+=3){const I=S[E+0],C=S[E+1],T=S[E+2];d.push(I,C,C,T,T,I)}}else if(g!==void 0){const S=g.array;v=g.version;for(let E=0,b=S.length/3-1;E<b;E+=3){const I=E+0,C=E+1,T=E+2;d.push(I,C,C,T,T,I)}}else return;const m=new(Eh(d)?Ch:Rh)(d,1);m.version=v;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function b0(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*a),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*a,g),t.update(p,i,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function u(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,v,0,g);let f=0;for(let S=0;S<g;S++)f+=p[S]*v[S];t.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function y0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function S0(n,e,t){const i=new WeakMap,s=new mt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let M=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),v===!0&&(b=2),m===!0&&(b=3);let I=o.attributes.position.count*b,C=1;I>e.maxTextureSize&&(C=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const T=new Float32Array(I*C*4*u),D=new wh(T,I,C,u);D.type=xn,D.needsUpdate=!0;const y=b*4;for(let L=0;L<u;L++){const B=f[L],H=S[L],ee=E[L],G=I*C*4*L;for(let X=0;X<B.count;X++){const ie=X*y;g===!0&&(s.fromBufferAttribute(B,X),T[G+ie+0]=s.x,T[G+ie+1]=s.y,T[G+ie+2]=s.z,T[G+ie+3]=0),v===!0&&(s.fromBufferAttribute(H,X),T[G+ie+4]=s.x,T[G+ie+5]=s.y,T[G+ie+6]=s.z,T[G+ie+7]=0),m===!0&&(s.fromBufferAttribute(ee,X),T[G+ie+8]=s.x,T[G+ie+9]=s.y,T[G+ie+10]=s.z,T[G+ie+11]=ee.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new Je(I,C)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function E0(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Bh=new Rt,rc=new Uh(1,1),zh=new wh,Hh=new Kd,Vh=new Lh,ac=[],oc=[],lc=new Float32Array(16),cc=new Float32Array(9),hc=new Float32Array(4);function _s(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ac[s];if(r===void 0&&(r=new Float32Array(s),ac[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function _t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $r(n,e){let t=oc[e];t===void 0&&(t=new Int32Array(e),oc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function w0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function T0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2fv(this.addr,e),xt(t,e)}}function A0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;n.uniform3fv(this.addr,e),xt(t,e)}}function R0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4fv(this.addr,e),xt(t,e)}}function C0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,i))return;hc.set(i),n.uniformMatrix2fv(this.addr,!1,hc),xt(t,i)}}function P0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,i))return;cc.set(i),n.uniformMatrix3fv(this.addr,!1,cc),xt(t,i)}}function I0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,i))return;lc.set(i),n.uniformMatrix4fv(this.addr,!1,lc),xt(t,i)}}function L0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function D0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2iv(this.addr,e),xt(t,e)}}function U0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3iv(this.addr,e),xt(t,e)}}function N0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4iv(this.addr,e),xt(t,e)}}function F0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function O0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2uiv(this.addr,e),xt(t,e)}}function k0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3uiv(this.addr,e),xt(t,e)}}function B0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4uiv(this.addr,e),xt(t,e)}}function z0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(rc.compareFunction=Sh,r=rc):r=Bh,t.setTexture2D(e||r,s)}function H0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Hh,s)}function V0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Vh,s)}function G0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||zh,s)}function W0(n){switch(n){case 5126:return w0;case 35664:return T0;case 35665:return A0;case 35666:return R0;case 35674:return C0;case 35675:return P0;case 35676:return I0;case 5124:case 35670:return L0;case 35667:case 35671:return D0;case 35668:case 35672:return U0;case 35669:case 35673:return N0;case 5125:return F0;case 36294:return O0;case 36295:return k0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return G0}}function $0(n,e){n.uniform1fv(this.addr,e)}function X0(n,e){const t=_s(e,this.size,2);n.uniform2fv(this.addr,t)}function q0(n,e){const t=_s(e,this.size,3);n.uniform3fv(this.addr,t)}function Y0(n,e){const t=_s(e,this.size,4);n.uniform4fv(this.addr,t)}function K0(n,e){const t=_s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function j0(n,e){const t=_s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Z0(n,e){const t=_s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function J0(n,e){n.uniform1iv(this.addr,e)}function Q0(n,e){n.uniform2iv(this.addr,e)}function eg(n,e){n.uniform3iv(this.addr,e)}function tg(n,e){n.uniform4iv(this.addr,e)}function ng(n,e){n.uniform1uiv(this.addr,e)}function ig(n,e){n.uniform2uiv(this.addr,e)}function sg(n,e){n.uniform3uiv(this.addr,e)}function rg(n,e){n.uniform4uiv(this.addr,e)}function ag(n,e,t){const i=this.cache,s=e.length,r=$r(t,s);_t(i,r)||(n.uniform1iv(this.addr,r),xt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Bh,r[a])}function og(n,e,t){const i=this.cache,s=e.length,r=$r(t,s);_t(i,r)||(n.uniform1iv(this.addr,r),xt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Hh,r[a])}function lg(n,e,t){const i=this.cache,s=e.length,r=$r(t,s);_t(i,r)||(n.uniform1iv(this.addr,r),xt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Vh,r[a])}function cg(n,e,t){const i=this.cache,s=e.length,r=$r(t,s);_t(i,r)||(n.uniform1iv(this.addr,r),xt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||zh,r[a])}function hg(n){switch(n){case 5126:return $0;case 35664:return X0;case 35665:return q0;case 35666:return Y0;case 35674:return K0;case 35675:return j0;case 35676:return Z0;case 5124:case 35670:return J0;case 35667:case 35671:return Q0;case 35668:case 35672:return eg;case 35669:case 35673:return tg;case 5125:return ng;case 36294:return ig;case 36295:return sg;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}class ug{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=W0(t.type)}}class dg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hg(t.type)}}class fg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const La=/(\w+)(\])?(\[|\.)?/g;function uc(n,e){n.seq.push(e),n.map[e.id]=e}function pg(n,e,t){const i=n.name,s=i.length;for(La.lastIndex=0;;){const r=La.exec(i),a=La.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){uc(t,c===void 0?new ug(o,n,e):new dg(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new fg(o),uc(t,u)),t=u}}}class Ir{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);pg(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function dc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const mg=37297;let gg=0;function vg(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const fc=new Be;function _g(n){Ze._getMatrix(fc,Ze.workingColorSpace,n);const e=`mat3( ${fc.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case Fr:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function pc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+vg(n.getShaderSource(e),o)}else return r}function xg(n,e){const t=_g(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Mg(n,e){let t;switch(e){case yd:t="Linear";break;case Sd:t="Reinhard";break;case Ed:t="Cineon";break;case wd:t="ACESFilmic";break;case Ad:t="AgX";break;case Rd:t="Neutral";break;case Td:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const br=new k;function bg(){Ze.getLuminanceCoefficients(br);const n=br.x.toFixed(4),e=br.y.toFixed(4),t=br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function Sg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Eg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ds(n){return n!==""}function mc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function zo(n){return n.replace(wg,Ag)}const Tg=new Map;function Ag(n,e){let t=ze[e];if(t===void 0){const i=Tg.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zo(t)}const Rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vc(n){return n.replace(Rg,Cg)}function Cg(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _c(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Pg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===td?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function Ig(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case hs:case us:e="ENVMAP_TYPE_CUBE";break;case Gr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lg(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case us:e="ENVMAP_MODE_REFRACTION";break}return e}function Dg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ph:e="ENVMAP_BLENDING_MULTIPLY";break;case Md:e="ENVMAP_BLENDING_MIX";break;case bd:e="ENVMAP_BLENDING_ADD";break}return e}function Ug(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ng(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Pg(t),c=Ig(t),h=Lg(t),u=Dg(t),d=Ug(t),p=yg(t),g=Sg(r),v=s.createProgram();let m,f,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ds).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ds).join(`
`),f.length>0&&(f+=`
`)):(m=[_c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),f=[_c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Nn?Mg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,xg("linearToOutputTexel",t.outputColorSpace),bg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),a=zo(a),a=mc(a,t),a=gc(a,t),o=zo(o),o=mc(o,t),o=gc(o,t),a=vc(a),o=vc(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=S+m+a,b=S+f+o,I=dc(s,s.VERTEX_SHADER,E),C=dc(s,s.FRAGMENT_SHADER,b);s.attachShader(v,I),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(L){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(v)||"",H=s.getShaderInfoLog(I)||"",ee=s.getShaderInfoLog(C)||"",G=B.trim(),X=H.trim(),ie=ee.trim();let W=!0,he=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,I,C);else{const fe=pc(s,I,"vertex"),ge=pc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+fe+`
`+ge)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(X===""||ie==="")&&(he=!1);he&&(L.diagnostics={runnable:W,programLog:G,vertexShader:{log:X,prefix:m},fragmentShader:{log:ie,prefix:f}})}s.deleteShader(I),s.deleteShader(C),D=new Ir(s,v),y=Eg(s,v)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,mg)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=C,this}let Fg=0;class Og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new kg(e),t.set(e,i)),i}}class kg{constructor(e){this.id=Fg++,this.code=e,this.usedTimes=0}}function Bg(n,e,t,i,s,r,a){const o=new Th,l=new Og,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,L,B,H){const ee=B.fog,G=H.geometry,X=y.isMeshStandardMaterial?B.environment:null,ie=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),W=ie&&ie.mapping===Gr?ie.image.height:null,he=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const fe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ge=fe!==void 0?fe.length:0;let Ae=0;G.morphAttributes.position!==void 0&&(Ae=1),G.morphAttributes.normal!==void 0&&(Ae=2),G.morphAttributes.color!==void 0&&(Ae=3);let qe,Ue,He,J;if(he){const ke=_n[he];qe=ke.vertexShader,Ue=ke.fragmentShader}else qe=y.vertexShader,Ue=y.fragmentShader,l.update(y),He=l.getVertexShaderID(y),J=l.getFragmentShaderID(y);const re=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),Le=H.isInstancedMesh===!0,Ee=H.isBatchedMesh===!0,Ve=!!y.map,Mt=!!y.matcap,A=!!ie,nt=!!y.aoMap,Fe=!!y.lightMap,Pe=!!y.bumpMap,ye=!!y.normalMap,it=!!y.displacementMap,be=!!y.emissiveMap,Oe=!!y.metalnessMap,pt=!!y.roughnessMap,ot=y.anisotropy>0,w=y.clearcoat>0,_=y.dispersion>0,O=y.iridescence>0,j=y.sheen>0,se=y.transmission>0,$=ot&&!!y.anisotropyMap,we=w&&!!y.clearcoatMap,ce=w&&!!y.clearcoatNormalMap,_e=w&&!!y.clearcoatRoughnessMap,Me=O&&!!y.iridescenceMap,ae=O&&!!y.iridescenceThicknessMap,N=j&&!!y.sheenColorMap,K=j&&!!y.sheenRoughnessMap,Q=!!y.specularMap,Y=!!y.specularColorMap,ue=!!y.specularIntensityMap,P=se&&!!y.transmissionMap,Z=se&&!!y.thicknessMap,te=!!y.gradientMap,le=!!y.alphaMap,ne=y.alphaTest>0,q=!!y.alphaHash,pe=!!y.extensions;let Te=Nn;y.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Te=n.toneMapping);const Ke={shaderID:he,shaderType:y.type,shaderName:y.name,vertexShader:qe,fragmentShader:Ue,defines:y.defines,customVertexShaderID:He,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ee,batchingColor:Ee&&H._colorsTexture!==null,instancing:Le,instancingColor:Le&&H.instanceColor!==null,instancingMorph:Le&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:ds,alphaToCoverage:!!y.alphaToCoverage,map:Ve,matcap:Mt,envMap:A,envMapMode:A&&ie.mapping,envMapCubeUVHeight:W,aoMap:nt,lightMap:Fe,bumpMap:Pe,normalMap:ye,displacementMap:d&&it,emissiveMap:be,normalMapObjectSpace:ye&&y.normalMapType===Dd,normalMapTangentSpace:ye&&y.normalMapType===Ld,metalnessMap:Oe,roughnessMap:pt,anisotropy:ot,anisotropyMap:$,clearcoat:w,clearcoatMap:we,clearcoatNormalMap:ce,clearcoatRoughnessMap:_e,dispersion:_,iridescence:O,iridescenceMap:Me,iridescenceThicknessMap:ae,sheen:j,sheenColorMap:N,sheenRoughnessMap:K,specularMap:Q,specularColorMap:Y,specularIntensityMap:ue,transmission:se,transmissionMap:P,thicknessMap:Z,gradientMap:te,opaque:y.transparent===!1&&y.blending===Mi&&y.alphaToCoverage===!1,alphaMap:le,alphaTest:ne,alphaHash:q,combine:y.combine,mapUv:Ve&&v(y.map.channel),aoMapUv:nt&&v(y.aoMap.channel),lightMapUv:Fe&&v(y.lightMap.channel),bumpMapUv:Pe&&v(y.bumpMap.channel),normalMapUv:ye&&v(y.normalMap.channel),displacementMapUv:it&&v(y.displacementMap.channel),emissiveMapUv:be&&v(y.emissiveMap.channel),metalnessMapUv:Oe&&v(y.metalnessMap.channel),roughnessMapUv:pt&&v(y.roughnessMap.channel),anisotropyMapUv:$&&v(y.anisotropyMap.channel),clearcoatMapUv:we&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:ce&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:N&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:K&&v(y.sheenRoughnessMap.channel),specularMapUv:Q&&v(y.specularMap.channel),specularColorMapUv:Y&&v(y.specularColorMap.channel),specularIntensityMapUv:ue&&v(y.specularIntensityMap.channel),transmissionMapUv:P&&v(y.transmissionMap.channel),thicknessMapUv:Z&&v(y.thicknessMap.channel),alphaMapUv:le&&v(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ye||ot),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!G.attributes.uv&&(Ve||le),fog:!!ee,useFog:y.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ve,skinning:H.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ae,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Te,decodeVideoTexture:Ve&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===tt,decodeVideoTextureEmissive:be&&y.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(y.emissiveMap.colorSpace)===tt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===sn,flipSided:y.side===Vt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:pe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&y.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function f(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)M.push(L),M.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(S(M,y),E(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function S(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function E(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function b(y){const M=g[y.type];let L;if(M){const B=_n[M];L=hf.clone(B.uniforms)}else L=y.uniforms;return L}function I(y,M){let L;for(let B=0,H=h.length;B<H;B++){const ee=h[B];if(ee.cacheKey===M){L=ee,++L.usedTimes;break}}return L===void 0&&(L=new Ng(n,M,y,r),h.push(L)),L}function C(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function T(y){l.remove(y)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:I,releaseProgram:C,releaseShaderCache:T,programs:h,dispose:D}}function zg(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Hg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function xc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Mc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,p,g,v,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),e++,f}function o(u,d,p,g,v,m){const f=a(u,d,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,g,v,m){const f=a(u,d,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Hg),i.length>1&&i.sort(d||xc),s.length>1&&s.sort(d||xc)}function h(){for(let u=e,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Vg(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Mc,n.set(i,[a])):s>=r.length?(a=new Mc,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Gg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Ye};break;case"SpotLight":t={position:new k,direction:new k,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function Wg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $g=0;function Xg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function qg(n){const e=new Gg,t=Wg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const s=new k,r=new rt,a=new rt;function o(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,S=0,E=0,b=0,I=0,C=0,T=0;c.sort(Xg);for(let y=0,M=c.length;y<M;y++){const L=c[y],B=L.color,H=L.intensity,ee=L.distance,G=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=B.r*H,u+=B.g*H,d+=B.b*H;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],H);T++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ie=L.shadow,W=t.get(L);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=L.shadow.matrix,S++}i.directional[p]=X,p++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(B).multiplyScalar(H),X.distance=ee,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[v]=X;const ie=L.shadow;if(L.map&&(i.spotLightMap[I]=L.map,I++,ie.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[v]=ie.matrix,L.castShadow){const W=t.get(L);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=G,b++}v++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(B).multiplyScalar(H),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=X,m++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const ie=L.shadow,W=t.get(L);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,W.shadowCameraNear=ie.camera.near,W.shadowCameraFar=ie.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=L.shadow.matrix,E++}i.point[g]=X,g++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(H),X.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[f]=X,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==S||D.numPointShadows!==E||D.numSpotShadows!==b||D.numSpotMaps!==I||D.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=b+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,D.directionalLength=p,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=S,D.numPointShadows=E,D.numSpotShadows=b,D.numSpotMaps=I,D.numLightProbes=T,i.version=$g++)}function l(c,h){let u=0,d=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){const E=c[f];if(E.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(E.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const b=i.hemi[v];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function bc(n){const e=new qg(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Yg(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new bc(n),e.set(s,[o])):r>=a.length?(o=new bc(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jg=`uniform sampler2D shadow_pass;
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
}`;function Zg(n,e,t){let i=new Dh;const s=new Je,r=new Je,a=new mt,o=new bf({depthPacking:Id}),l=new yf,c={},h=t.maxTextureSize,u={[Zn]:Vt,[Vt]:Zn,[sn]:sn},d=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:Kg,fragmentShader:jg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ci;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ht(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fh;let f=this.type;this.render=function(C,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),B=n.state;B.setBlending(jn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=f!==Ln&&this.type===Ln,ee=f===Ln&&this.type!==Ln;for(let G=0,X=C.length;G<X;G++){const ie=C[G],W=ie.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const he=W.getFrameExtents();if(s.multiply(he),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/he.x),s.x=r.x*he.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/he.y),s.y=r.y*he.y,W.mapSize.y=r.y)),W.map===null||H===!0||ee===!0){const ge=this.type!==Ln?{minFilter:Kt,magFilter:Kt}:{};W.map!==null&&W.map.dispose(),W.map=new Ti(s.x,s.y,ge),W.map.texture.name=ie.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const fe=W.getViewportCount();for(let ge=0;ge<fe;ge++){const Ae=W.getViewport(ge);a.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),B.viewport(a),W.updateMatrices(ie,ge),i=W.getFrustum(),b(T,D,W.camera,ie,this.type)}W.isPointLightShadow!==!0&&this.type===Ln&&S(W,D),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(y,M,L)};function S(C,T){const D=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ti(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(T,null,D,d,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(T,null,D,p,v,null)}function E(C,T,D,y){let M=null;const L=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)M=L;else if(M=D.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const B=M.uuid,H=T.uuid;let ee=c[B];ee===void 0&&(ee={},c[B]=ee);let G=ee[H];G===void 0&&(G=M.clone(),ee[H]=G,T.addEventListener("dispose",I)),M=G}if(M.visible=T.visible,M.wireframe=T.wireframe,y===Ln?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=n.properties.get(M);B.light=D}return M}function b(C,T,D,y,M){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Ln)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const H=e.update(C),ee=C.material;if(Array.isArray(ee)){const G=H.groups;for(let X=0,ie=G.length;X<ie;X++){const W=G[X],he=ee[W.materialIndex];if(he&&he.visible){const fe=E(C,he,y,M);C.onBeforeShadow(n,C,T,D,H,fe,W),n.renderBufferDirect(D,null,H,fe,C,W),C.onAfterShadow(n,C,T,D,H,fe,W)}}}else if(ee.visible){const G=E(C,ee,y,M);C.onBeforeShadow(n,C,T,D,H,G,null),n.renderBufferDirect(D,null,H,G,C,null),C.onAfterShadow(n,C,T,D,H,G,null)}}const B=C.children;for(let H=0,ee=B.length;H<ee;H++)b(B[H],T,D,y,M)}function I(C){C.target.removeEventListener("dispose",I);for(const D in c){const y=c[D],M=C.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const Jg={[eo]:to,[no]:ro,[io]:ao,[cs]:so,[to]:eo,[ro]:no,[ao]:io,[so]:cs};function Qg(n,e){function t(){let P=!1;const Z=new mt;let te=null;const le=new mt(0,0,0,0);return{setMask:function(ne){te!==ne&&!P&&(n.colorMask(ne,ne,ne,ne),te=ne)},setLocked:function(ne){P=ne},setClear:function(ne,q,pe,Te,Ke){Ke===!0&&(ne*=Te,q*=Te,pe*=Te),Z.set(ne,q,pe,Te),le.equals(Z)===!1&&(n.clearColor(ne,q,pe,Te),le.copy(Z))},reset:function(){P=!1,te=null,le.set(-1,0,0,0)}}}function i(){let P=!1,Z=!1,te=null,le=null,ne=null;return{setReversed:function(q){if(Z!==q){const pe=e.get("EXT_clip_control");q?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),Z=q;const Te=ne;ne=null,this.setClear(Te)}},getReversed:function(){return Z},setTest:function(q){q?re(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(q){te!==q&&!P&&(n.depthMask(q),te=q)},setFunc:function(q){if(Z&&(q=Jg[q]),le!==q){switch(q){case eo:n.depthFunc(n.NEVER);break;case to:n.depthFunc(n.ALWAYS);break;case no:n.depthFunc(n.LESS);break;case cs:n.depthFunc(n.LEQUAL);break;case io:n.depthFunc(n.EQUAL);break;case so:n.depthFunc(n.GEQUAL);break;case ro:n.depthFunc(n.GREATER);break;case ao:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=q}},setLocked:function(q){P=q},setClear:function(q){ne!==q&&(Z&&(q=1-q),n.clearDepth(q),ne=q)},reset:function(){P=!1,te=null,le=null,ne=null,Z=!1}}}function s(){let P=!1,Z=null,te=null,le=null,ne=null,q=null,pe=null,Te=null,Ke=null;return{setTest:function(ke){P||(ke?re(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(ke){Z!==ke&&!P&&(n.stencilMask(ke),Z=ke)},setFunc:function(ke,wt,bt){(te!==ke||le!==wt||ne!==bt)&&(n.stencilFunc(ke,wt,bt),te=ke,le=wt,ne=bt)},setOp:function(ke,wt,bt){(q!==ke||pe!==wt||Te!==bt)&&(n.stencilOp(ke,wt,bt),q=ke,pe=wt,Te=bt)},setLocked:function(ke){P=ke},setClear:function(ke){Ke!==ke&&(n.clearStencil(ke),Ke=ke)},reset:function(){P=!1,Z=null,te=null,le=null,ne=null,q=null,pe=null,Te=null,Ke=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,S=null,E=null,b=null,I=null,C=null,T=new Ye(0,0,0),D=0,y=!1,M=null,L=null,B=null,H=null,ee=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ie=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=ie>=1):W.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=ie>=2);let he=null,fe={};const ge=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),qe=new mt().fromArray(ge),Ue=new mt().fromArray(Ae);function He(P,Z,te,le){const ne=new Uint8Array(4),q=n.createTexture();n.bindTexture(P,q),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pe=0;pe<te;pe++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(Z,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,ne):n.texImage2D(Z+pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ne);return q}const J={};J[n.TEXTURE_2D]=He(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=He(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=He(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=He(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(n.DEPTH_TEST),a.setFunc(cs),Pe(!1),ye(Tl),re(n.CULL_FACE),nt(jn);function re(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function ve(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function Le(P,Z){return u[P]!==Z?(n.bindFramebuffer(P,Z),u[P]=Z,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Z),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Z),!0):!1}function Ee(P,Z){let te=p,le=!1;if(P){te=d.get(Z),te===void 0&&(te=[],d.set(Z,te));const ne=P.textures;if(te.length!==ne.length||te[0]!==n.COLOR_ATTACHMENT0){for(let q=0,pe=ne.length;q<pe;q++)te[q]=n.COLOR_ATTACHMENT0+q;te.length=ne.length,le=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,le=!0);le&&n.drawBuffers(te)}function Ve(P){return g!==P?(n.useProgram(P),g=P,!0):!1}const Mt={[mi]:n.FUNC_ADD,[id]:n.FUNC_SUBTRACT,[sd]:n.FUNC_REVERSE_SUBTRACT};Mt[rd]=n.MIN,Mt[ad]=n.MAX;const A={[od]:n.ZERO,[ld]:n.ONE,[cd]:n.SRC_COLOR,[Ja]:n.SRC_ALPHA,[md]:n.SRC_ALPHA_SATURATE,[fd]:n.DST_COLOR,[ud]:n.DST_ALPHA,[hd]:n.ONE_MINUS_SRC_COLOR,[Qa]:n.ONE_MINUS_SRC_ALPHA,[pd]:n.ONE_MINUS_DST_COLOR,[dd]:n.ONE_MINUS_DST_ALPHA,[gd]:n.CONSTANT_COLOR,[vd]:n.ONE_MINUS_CONSTANT_COLOR,[_d]:n.CONSTANT_ALPHA,[xd]:n.ONE_MINUS_CONSTANT_ALPHA};function nt(P,Z,te,le,ne,q,pe,Te,Ke,ke){if(P===jn){v===!0&&(ve(n.BLEND),v=!1);return}if(v===!1&&(re(n.BLEND),v=!0),P!==nd){if(P!==m||ke!==y){if((f!==mi||b!==mi)&&(n.blendEquation(n.FUNC_ADD),f=mi,b=mi),ke)switch(P){case Mi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ur:n.blendFunc(n.ONE,n.ONE);break;case Al:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Mi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ur:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Al:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,E=null,I=null,C=null,T.set(0,0,0),D=0,m=P,y=ke}return}ne=ne||Z,q=q||te,pe=pe||le,(Z!==f||ne!==b)&&(n.blendEquationSeparate(Mt[Z],Mt[ne]),f=Z,b=ne),(te!==S||le!==E||q!==I||pe!==C)&&(n.blendFuncSeparate(A[te],A[le],A[q],A[pe]),S=te,E=le,I=q,C=pe),(Te.equals(T)===!1||Ke!==D)&&(n.blendColor(Te.r,Te.g,Te.b,Ke),T.copy(Te),D=Ke),m=P,y=!1}function Fe(P,Z){P.side===sn?ve(n.CULL_FACE):re(n.CULL_FACE);let te=P.side===Vt;Z&&(te=!te),Pe(te),P.blending===Mi&&P.transparent===!1?nt(jn):nt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const le=P.stencilWrite;o.setTest(le),le&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),be(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(P){M!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),M=P)}function ye(P){P!==Qu?(re(n.CULL_FACE),P!==L&&(P===Tl?n.cullFace(n.BACK):P===ed?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),L=P}function it(P){P!==B&&(X&&n.lineWidth(P),B=P)}function be(P,Z,te){P?(re(n.POLYGON_OFFSET_FILL),(H!==Z||ee!==te)&&(n.polygonOffset(Z,te),H=Z,ee=te)):ve(n.POLYGON_OFFSET_FILL)}function Oe(P){P?re(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function pt(P){P===void 0&&(P=n.TEXTURE0+G-1),he!==P&&(n.activeTexture(P),he=P)}function ot(P,Z,te){te===void 0&&(he===null?te=n.TEXTURE0+G-1:te=he);let le=fe[te];le===void 0&&(le={type:void 0,texture:void 0},fe[te]=le),(le.type!==P||le.texture!==Z)&&(he!==te&&(n.activeTexture(te),he=te),n.bindTexture(P,Z||J[P]),le.type=P,le.texture=Z)}function w(){const P=fe[he];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{n.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{n.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{n.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{n.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{n.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{n.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{n.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function N(P){qe.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),qe.copy(P))}function K(P){Ue.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Ue.copy(P))}function Q(P,Z){let te=c.get(Z);te===void 0&&(te=new WeakMap,c.set(Z,te));let le=te.get(P);le===void 0&&(le=n.getUniformBlockIndex(Z,P.name),te.set(P,le))}function Y(P,Z){const le=c.get(Z).get(P);l.get(Z)!==le&&(n.uniformBlockBinding(Z,le,P.__bindingPointIndex),l.set(Z,le))}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},he=null,fe={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,S=null,E=null,b=null,I=null,C=null,T=new Ye(0,0,0),D=0,y=!1,M=null,L=null,B=null,H=null,ee=null,qe.set(0,0,n.canvas.width,n.canvas.height),Ue.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:re,disable:ve,bindFramebuffer:Le,drawBuffers:Ee,useProgram:Ve,setBlending:nt,setMaterial:Fe,setFlipSided:Pe,setCullFace:ye,setLineWidth:it,setPolygonOffset:be,setScissorTest:Oe,activeTexture:pt,bindTexture:ot,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:O,texImage2D:Me,texImage3D:ae,updateUBOMapping:Q,uniformBlockBinding:Y,texStorage2D:ce,texStorage3D:_e,texSubImage2D:j,texSubImage3D:se,compressedTexSubImage2D:$,compressedTexSubImage3D:we,scissor:N,viewport:K,reset:ue}}function ev(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return p?new OffscreenCanvas(w,_):zs("canvas")}function v(w,_,O){let j=1;const se=ot(w);if((se.width>O||se.height>O)&&(j=O/Math.max(se.width,se.height)),j<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const $=Math.floor(j*se.width),we=Math.floor(j*se.height);u===void 0&&(u=g($,we));const ce=_?g($,we):u;return ce.width=$,ce.height=we,ce.getContext("2d").drawImage(w,0,0,$,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+$+"x"+we+")."),ce}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){n.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(w,_,O,j,se=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=_;if(_===n.RED&&(O===n.FLOAT&&($=n.R32F),O===n.HALF_FLOAT&&($=n.R16F),O===n.UNSIGNED_BYTE&&($=n.R8)),_===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.R8UI),O===n.UNSIGNED_SHORT&&($=n.R16UI),O===n.UNSIGNED_INT&&($=n.R32UI),O===n.BYTE&&($=n.R8I),O===n.SHORT&&($=n.R16I),O===n.INT&&($=n.R32I)),_===n.RG&&(O===n.FLOAT&&($=n.RG32F),O===n.HALF_FLOAT&&($=n.RG16F),O===n.UNSIGNED_BYTE&&($=n.RG8)),_===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.RG8UI),O===n.UNSIGNED_SHORT&&($=n.RG16UI),O===n.UNSIGNED_INT&&($=n.RG32UI),O===n.BYTE&&($=n.RG8I),O===n.SHORT&&($=n.RG16I),O===n.INT&&($=n.RG32I)),_===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.RGB8UI),O===n.UNSIGNED_SHORT&&($=n.RGB16UI),O===n.UNSIGNED_INT&&($=n.RGB32UI),O===n.BYTE&&($=n.RGB8I),O===n.SHORT&&($=n.RGB16I),O===n.INT&&($=n.RGB32I)),_===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.RGBA8UI),O===n.UNSIGNED_SHORT&&($=n.RGBA16UI),O===n.UNSIGNED_INT&&($=n.RGBA32UI),O===n.BYTE&&($=n.RGBA8I),O===n.SHORT&&($=n.RGBA16I),O===n.INT&&($=n.RGBA32I)),_===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),_===n.RGBA){const we=se?Fr:Ze.getTransfer(j);O===n.FLOAT&&($=n.RGBA32F),O===n.HALF_FLOAT&&($=n.RGBA16F),O===n.UNSIGNED_BYTE&&($=we===tt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(w,_){let O;return w?_===null||_===wi||_===Os?O=n.DEPTH24_STENCIL8:_===xn?O=n.DEPTH32F_STENCIL8:_===Fs&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===wi||_===Os?O=n.DEPTH_COMPONENT24:_===xn?O=n.DEPTH_COMPONENT32F:_===Fs&&(O=n.DEPTH_COMPONENT16),O}function I(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Kt&&w.minFilter!==Yt?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function C(w){const _=w.target;_.removeEventListener("dispose",C),D(_),_.isVideoTexture&&h.delete(_)}function T(w){const _=w.target;_.removeEventListener("dispose",T),M(_)}function D(w){const _=i.get(w);if(_.__webglInit===void 0)return;const O=w.source,j=d.get(O);if(j){const se=j[_.__cacheKey];se.usedTimes--,se.usedTimes===0&&y(w),Object.keys(j).length===0&&d.delete(O)}i.remove(w)}function y(w){const _=i.get(w);n.deleteTexture(_.__webglTexture);const O=w.source,j=d.get(O);delete j[_.__cacheKey],a.memory.textures--}function M(w){const _=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let se=0;se<_.__webglFramebuffer[j].length;se++)n.deleteFramebuffer(_.__webglFramebuffer[j][se]);else n.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)n.deleteFramebuffer(_.__webglFramebuffer[j]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=w.textures;for(let j=0,se=O.length;j<se;j++){const $=i.get(O[j]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(O[j])}i.remove(w)}let L=0;function B(){L=0}function H(){const w=L;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),L+=1,w}function ee(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function G(w,_){const O=i.get(w);if(w.isVideoTexture&&Oe(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(O,w,_);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}function X(w,_){const O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){J(O,w,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+_)}function ie(w,_){const O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){J(O,w,_);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+_)}function W(w,_){const O=i.get(w);if(w.version>0&&O.__version!==w.version){re(O,w,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+_)}const he={[Nr]:n.REPEAT,[_i]:n.CLAMP_TO_EDGE,[co]:n.MIRRORED_REPEAT},fe={[Kt]:n.NEAREST,[Cd]:n.NEAREST_MIPMAP_NEAREST,[Qs]:n.NEAREST_MIPMAP_LINEAR,[Yt]:n.LINEAR,[ta]:n.LINEAR_MIPMAP_NEAREST,[xi]:n.LINEAR_MIPMAP_LINEAR},ge={[Ud]:n.NEVER,[zd]:n.ALWAYS,[Nd]:n.LESS,[Sh]:n.LEQUAL,[Fd]:n.EQUAL,[Bd]:n.GEQUAL,[Od]:n.GREATER,[kd]:n.NOTEQUAL};function Ae(w,_){if(_.type===xn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Yt||_.magFilter===ta||_.magFilter===Qs||_.magFilter===xi||_.minFilter===Yt||_.minFilter===ta||_.minFilter===Qs||_.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,he[_.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,he[_.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,he[_.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,fe[_.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,fe[_.minFilter]),_.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,ge[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Kt||_.minFilter!==Qs&&_.minFilter!==xi||_.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function qe(w,_){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",C));const j=_.source;let se=d.get(j);se===void 0&&(se={},d.set(j,se));const $=ee(_);if($!==w.__cacheKey){se[$]===void 0&&(se[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),se[$].usedTimes++;const we=se[w.__cacheKey];we!==void 0&&(se[w.__cacheKey].usedTimes--,we.usedTimes===0&&y(_)),w.__cacheKey=$,w.__webglTexture=se[$].texture}return O}function Ue(w,_,O){return Math.floor(Math.floor(w/O)/_)}function He(w,_,O,j){const $=w.updateRanges;if($.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,O,j,_.data);else{$.sort((ae,N)=>ae.start-N.start);let we=0;for(let ae=1;ae<$.length;ae++){const N=$[we],K=$[ae],Q=N.start+N.count,Y=Ue(K.start,_.width,4),ue=Ue(N.start,_.width,4);K.start<=Q+1&&Y===ue&&Ue(K.start+K.count-1,_.width,4)===Y?N.count=Math.max(N.count,K.start+K.count-N.start):(++we,$[we]=K)}$.length=we+1;const ce=n.getParameter(n.UNPACK_ROW_LENGTH),_e=n.getParameter(n.UNPACK_SKIP_PIXELS),Me=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let ae=0,N=$.length;ae<N;ae++){const K=$[ae],Q=Math.floor(K.start/4),Y=Math.ceil(K.count/4),ue=Q%_.width,P=Math.floor(Q/_.width),Z=Y,te=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ue),n.pixelStorei(n.UNPACK_SKIP_ROWS,P),t.texSubImage2D(n.TEXTURE_2D,0,ue,P,Z,te,O,j,_.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ce),n.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),n.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function J(w,_,O){let j=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=n.TEXTURE_3D);const se=qe(w,_),$=_.source;t.bindTexture(j,w.__webglTexture,n.TEXTURE0+O);const we=i.get($);if($.version!==we.__version||se===!0){t.activeTexture(n.TEXTURE0+O);const ce=Ze.getPrimaries(Ze.workingColorSpace),_e=_.colorSpace===Dn?null:Ze.getPrimaries(_.colorSpace),Me=_.colorSpace===Dn||ce===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let ae=v(_.image,!1,s.maxTextureSize);ae=pt(_,ae);const N=r.convert(_.format,_.colorSpace),K=r.convert(_.type);let Q=E(_.internalFormat,N,K,_.colorSpace,_.isVideoTexture);Ae(j,_);let Y;const ue=_.mipmaps,P=_.isVideoTexture!==!0,Z=we.__version===void 0||se===!0,te=$.dataReady,le=I(_,ae);if(_.isDepthTexture)Q=b(_.format===Bs,_.type),Z&&(P?t.texStorage2D(n.TEXTURE_2D,1,Q,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Q,ae.width,ae.height,0,N,K,null));else if(_.isDataTexture)if(ue.length>0){P&&Z&&t.texStorage2D(n.TEXTURE_2D,le,Q,ue[0].width,ue[0].height);for(let ne=0,q=ue.length;ne<q;ne++)Y=ue[ne],P?te&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,Y.width,Y.height,N,K,Y.data):t.texImage2D(n.TEXTURE_2D,ne,Q,Y.width,Y.height,0,N,K,Y.data);_.generateMipmaps=!1}else P?(Z&&t.texStorage2D(n.TEXTURE_2D,le,Q,ae.width,ae.height),te&&He(_,ae,N,K)):t.texImage2D(n.TEXTURE_2D,0,Q,ae.width,ae.height,0,N,K,ae.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){P&&Z&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Q,ue[0].width,ue[0].height,ae.depth);for(let ne=0,q=ue.length;ne<q;ne++)if(Y=ue[ne],_.format!==fn)if(N!==null)if(P){if(te)if(_.layerUpdates.size>0){const pe=Zl(Y.width,Y.height,_.format,_.type);for(const Te of _.layerUpdates){const Ke=Y.data.subarray(Te*pe/Y.data.BYTES_PER_ELEMENT,(Te+1)*pe/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,Te,Y.width,Y.height,1,N,Ke)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,Y.width,Y.height,ae.depth,N,Y.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,Q,Y.width,Y.height,ae.depth,0,Y.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?te&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,Y.width,Y.height,ae.depth,N,K,Y.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,Q,Y.width,Y.height,ae.depth,0,N,K,Y.data)}else{P&&Z&&t.texStorage2D(n.TEXTURE_2D,le,Q,ue[0].width,ue[0].height);for(let ne=0,q=ue.length;ne<q;ne++)Y=ue[ne],_.format!==fn?N!==null?P?te&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,Y.width,Y.height,N,Y.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,Q,Y.width,Y.height,0,Y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?te&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,Y.width,Y.height,N,K,Y.data):t.texImage2D(n.TEXTURE_2D,ne,Q,Y.width,Y.height,0,N,K,Y.data)}else if(_.isDataArrayTexture)if(P){if(Z&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Q,ae.width,ae.height,ae.depth),te)if(_.layerUpdates.size>0){const ne=Zl(ae.width,ae.height,_.format,_.type);for(const q of _.layerUpdates){const pe=ae.data.subarray(q*ne/ae.data.BYTES_PER_ELEMENT,(q+1)*ne/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,ae.width,ae.height,1,N,K,pe)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,N,K,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Q,ae.width,ae.height,ae.depth,0,N,K,ae.data);else if(_.isData3DTexture)P?(Z&&t.texStorage3D(n.TEXTURE_3D,le,Q,ae.width,ae.height,ae.depth),te&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,N,K,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Q,ae.width,ae.height,ae.depth,0,N,K,ae.data);else if(_.isFramebufferTexture){if(Z)if(P)t.texStorage2D(n.TEXTURE_2D,le,Q,ae.width,ae.height);else{let ne=ae.width,q=ae.height;for(let pe=0;pe<le;pe++)t.texImage2D(n.TEXTURE_2D,pe,Q,ne,q,0,N,K,null),ne>>=1,q>>=1}}else if(ue.length>0){if(P&&Z){const ne=ot(ue[0]);t.texStorage2D(n.TEXTURE_2D,le,Q,ne.width,ne.height)}for(let ne=0,q=ue.length;ne<q;ne++)Y=ue[ne],P?te&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,N,K,Y):t.texImage2D(n.TEXTURE_2D,ne,Q,N,K,Y);_.generateMipmaps=!1}else if(P){if(Z){const ne=ot(ae);t.texStorage2D(n.TEXTURE_2D,le,Q,ne.width,ne.height)}te&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,N,K,ae)}else t.texImage2D(n.TEXTURE_2D,0,Q,N,K,ae);m(_)&&f(j),we.__version=$.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function re(w,_,O){if(_.image.length!==6)return;const j=qe(w,_),se=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+O);const $=i.get(se);if(se.version!==$.__version||j===!0){t.activeTexture(n.TEXTURE0+O);const we=Ze.getPrimaries(Ze.workingColorSpace),ce=_.colorSpace===Dn?null:Ze.getPrimaries(_.colorSpace),_e=_.colorSpace===Dn||we===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Me=_.isCompressedTexture||_.image[0].isCompressedTexture,ae=_.image[0]&&_.image[0].isDataTexture,N=[];for(let q=0;q<6;q++)!Me&&!ae?N[q]=v(_.image[q],!0,s.maxCubemapSize):N[q]=ae?_.image[q].image:_.image[q],N[q]=pt(_,N[q]);const K=N[0],Q=r.convert(_.format,_.colorSpace),Y=r.convert(_.type),ue=E(_.internalFormat,Q,Y,_.colorSpace),P=_.isVideoTexture!==!0,Z=$.__version===void 0||j===!0,te=se.dataReady;let le=I(_,K);Ae(n.TEXTURE_CUBE_MAP,_);let ne;if(Me){P&&Z&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,ue,K.width,K.height);for(let q=0;q<6;q++){ne=N[q].mipmaps;for(let pe=0;pe<ne.length;pe++){const Te=ne[pe];_.format!==fn?Q!==null?P?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe,0,0,Te.width,Te.height,Q,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe,ue,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe,0,0,Te.width,Te.height,Q,Y,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe,ue,Te.width,Te.height,0,Q,Y,Te.data)}}}else{if(ne=_.mipmaps,P&&Z){ne.length>0&&le++;const q=ot(N[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,le,ue,q.width,q.height)}for(let q=0;q<6;q++)if(ae){P?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,N[q].width,N[q].height,Q,Y,N[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ue,N[q].width,N[q].height,0,Q,Y,N[q].data);for(let pe=0;pe<ne.length;pe++){const Ke=ne[pe].image[q].image;P?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe+1,0,0,Ke.width,Ke.height,Q,Y,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe+1,ue,Ke.width,Ke.height,0,Q,Y,Ke.data)}}else{P?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Q,Y,N[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ue,Q,Y,N[q]);for(let pe=0;pe<ne.length;pe++){const Te=ne[pe];P?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe+1,0,0,Q,Y,Te.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe+1,ue,Q,Y,Te.image[q])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),$.__version=se.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ve(w,_,O,j,se,$){const we=r.convert(O.format,O.colorSpace),ce=r.convert(O.type),_e=E(O.internalFormat,we,ce,O.colorSpace),Me=i.get(_),ae=i.get(O);if(ae.__renderTarget=_,!Me.__hasExternalTextures){const N=Math.max(1,_.width>>$),K=Math.max(1,_.height>>$);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,$,_e,N,K,_.depth,0,we,ce,null):t.texImage2D(se,$,_e,N,K,0,we,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),be(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,se,ae.__webglTexture,0,it(_)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,se,ae.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(w,_,O){if(n.bindRenderbuffer(n.RENDERBUFFER,w),_.depthBuffer){const j=_.depthTexture,se=j&&j.isDepthTexture?j.type:null,$=b(_.stencilBuffer,se),we=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=it(_);be(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,$,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,$,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,$,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,w)}else{const j=_.textures;for(let se=0;se<j.length;se++){const $=j[se],we=r.convert($.format,$.colorSpace),ce=r.convert($.type),_e=E($.internalFormat,we,ce,$.colorSpace),Me=it(_);O&&be(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,_e,_.width,_.height):be(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,_e,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,_e,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ee(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(_.depthTexture);j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G(_.depthTexture,0);const se=j.__webglTexture,$=it(_);if(_.depthTexture.format===ks)be(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(_.depthTexture.format===Bs)be(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ve(w){const _=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const j=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){const se=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",se)};j.addEventListener("dispose",se),_.__depthDisposeCallback=se}_.__boundDepthTexture=j}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const j=w.texture.mipmaps;j&&j.length>0?Ee(_.__webglFramebuffer[0],w):Ee(_.__webglFramebuffer,w)}else if(O){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=n.createRenderbuffer(),Le(_.__webglDepthbuffer[j],w,!1);else{const se=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,$)}}else{const j=w.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Le(_.__webglDepthbuffer,w,!1);else{const se=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,$)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Mt(w,_,O){const j=i.get(w);_!==void 0&&ve(j.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ve(w)}function A(w){const _=w.texture,O=i.get(w),j=i.get(_);w.addEventListener("dispose",T);const se=w.textures,$=w.isWebGLCubeRenderTarget===!0,we=se.length>1;if(we||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=_.version,a.memory.textures++),$){O.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[ce]=[];for(let _e=0;_e<_.mipmaps.length;_e++)O.__webglFramebuffer[ce][_e]=n.createFramebuffer()}else O.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let ce=0;ce<_.mipmaps.length;ce++)O.__webglFramebuffer[ce]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(we)for(let ce=0,_e=se.length;ce<_e;ce++){const Me=i.get(se[ce]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&be(w)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ce=0;ce<se.length;ce++){const _e=se[ce];O.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ce]);const Me=r.convert(_e.format,_e.colorSpace),ae=r.convert(_e.type),N=E(_e.internalFormat,Me,ae,_e.colorSpace,w.isXRRenderTarget===!0),K=it(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,K,N,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,O.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,_);for(let ce=0;ce<6;ce++)if(_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)ve(O.__webglFramebuffer[ce][_e],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,_e);else ve(O.__webglFramebuffer[ce],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(_)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ce=0,_e=se.length;ce<_e;ce++){const Me=se[ce],ae=i.get(Me);let N=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(N=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(N,ae.__webglTexture),Ae(N,Me),ve(O.__webglFramebuffer,w,Me,n.COLOR_ATTACHMENT0+ce,N,0),m(Me)&&f(N)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ce=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,j.__webglTexture),Ae(ce,_),_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)ve(O.__webglFramebuffer[_e],w,_,n.COLOR_ATTACHMENT0,ce,_e);else ve(O.__webglFramebuffer,w,_,n.COLOR_ATTACHMENT0,ce,0);m(_)&&f(ce),t.unbindTexture()}w.depthBuffer&&Ve(w)}function nt(w){const _=w.textures;for(let O=0,j=_.length;O<j;O++){const se=_[O];if(m(se)){const $=S(w),we=i.get(se).__webglTexture;t.bindTexture($,we),f($),t.unbindTexture()}}}const Fe=[],Pe=[];function ye(w){if(w.samples>0){if(be(w)===!1){const _=w.textures,O=w.width,j=w.height;let se=n.COLOR_BUFFER_BIT;const $=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(w),ce=_.length>1;if(ce)for(let Me=0;Me<_.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const _e=w.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Me=0;Me<_.length;Me++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[Me]);const ae=i.get(_[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,O,j,0,0,O,j,se,n.NEAREST),l===!0&&(Fe.length=0,Pe.length=0,Fe.push(n.COLOR_ATTACHMENT0+Me),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Fe.push($),Pe.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Pe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Me=0;Me<_.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,we.__webglColorRenderbuffer[Me]);const ae=i.get(_[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const _=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function it(w){return Math.min(s.maxSamples,w.samples)}function be(w){const _=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Oe(w){const _=a.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function pt(w,_){const O=w.colorSpace,j=w.format,se=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==ds&&O!==Dn&&(Ze.getTransfer(O)===tt?(j!==fn||se!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function ot(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=ie,this.setTextureCube=W,this.rebindTextures=Mt,this.setupRenderTarget=A,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=be}function tv(n,e){function t(i,s=Dn){let r;const a=Ze.getTransfer(s);if(i===kn)return n.UNSIGNED_BYTE;if(i===Qo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===el)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_h)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===gh)return n.BYTE;if(i===vh)return n.SHORT;if(i===Fs)return n.UNSIGNED_SHORT;if(i===Jo)return n.INT;if(i===wi)return n.UNSIGNED_INT;if(i===xn)return n.FLOAT;if(i===Ws)return n.HALF_FLOAT;if(i===Mh)return n.ALPHA;if(i===bh)return n.RGB;if(i===fn)return n.RGBA;if(i===ks)return n.DEPTH_COMPONENT;if(i===Bs)return n.DEPTH_STENCIL;if(i===tl)return n.RED;if(i===nl)return n.RED_INTEGER;if(i===yh)return n.RG;if(i===il)return n.RG_INTEGER;if(i===sl)return n.RGBA_INTEGER;if(i===Ar||i===Rr||i===Cr||i===Pr)if(a===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ho||i===uo||i===fo||i===po)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ho)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===po)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mo||i===go||i===vo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===mo||i===go)return a===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===vo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_o||i===xo||i===Mo||i===bo||i===yo||i===So||i===Eo||i===wo||i===To||i===Ao||i===Ro||i===Co||i===Po||i===Io)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===_o)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===So)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Eo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===To)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ao)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ro)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Co)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Po)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Io)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lo||i===Do||i===Uo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Lo)return a===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Do)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===No||i===Fo||i===Oo||i===ko)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===No)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Fo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Os?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const nv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iv=`
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

}`;class sv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Nh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Jn({vertexShader:nv,fragmentShader:iv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new gn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rv extends vs{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new sv,f={},S=t.getContextAttributes();let E=null,b=null;const I=[],C=[],T=new Je;let D=null;const y=new un;y.viewport=new mt;const M=new un;M.viewport=new mt;const L=[y,M],B=new Tf;let H=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let re=I[J];return re===void 0&&(re=new Ea,I[J]=re),re.getTargetRaySpace()},this.getControllerGrip=function(J){let re=I[J];return re===void 0&&(re=new Ea,I[J]=re),re.getGripSpace()},this.getHand=function(J){let re=I[J];return re===void 0&&(re=new Ea,I[J]=re),re.getHandSpace()};function G(J){const re=C.indexOf(J.inputSource);if(re===-1)return;const ve=I[re];ve!==void 0&&(ve.update(J.inputSource,J.frame,c||a),ve.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ie);for(let J=0;J<I.length;J++){const re=C[J];re!==null&&(C[J]=null,I[J].disconnect(re))}H=null,ee=null,m.reset();for(const J in f)delete f[J];e.setRenderTarget(E),p=null,d=null,u=null,s=null,b=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ie),S.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Le=null,Ee=null;S.depth&&(Ee=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=S.stencil?Bs:ks,Le=S.stencil?Os:wi);const Ve={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Ti(d.textureWidth,d.textureHeight,{format:fn,type:kn,depthTexture:new Uh(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ve={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Ti(p.framebufferWidth,p.framebufferHeight,{format:fn,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),He.setContext(s),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(J){for(let re=0;re<J.removed.length;re++){const ve=J.removed[re],Le=C.indexOf(ve);Le>=0&&(C[Le]=null,I[Le].disconnect(ve))}for(let re=0;re<J.added.length;re++){const ve=J.added[re];let Le=C.indexOf(ve);if(Le===-1){for(let Ve=0;Ve<I.length;Ve++)if(Ve>=C.length){C.push(ve),Le=Ve;break}else if(C[Ve]===null){C[Ve]=ve,Le=Ve;break}if(Le===-1)break}const Ee=I[Le];Ee&&Ee.connect(ve)}}const W=new k,he=new k;function fe(J,re,ve){W.setFromMatrixPosition(re.matrixWorld),he.setFromMatrixPosition(ve.matrixWorld);const Le=W.distanceTo(he),Ee=re.projectionMatrix.elements,Ve=ve.projectionMatrix.elements,Mt=Ee[14]/(Ee[10]-1),A=Ee[14]/(Ee[10]+1),nt=(Ee[9]+1)/Ee[5],Fe=(Ee[9]-1)/Ee[5],Pe=(Ee[8]-1)/Ee[0],ye=(Ve[8]+1)/Ve[0],it=Mt*Pe,be=Mt*ye,Oe=Le/(-Pe+ye),pt=Oe*-Pe;if(re.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(pt),J.translateZ(Oe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ee[10]===-1)J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const ot=Mt+Oe,w=A+Oe,_=it-pt,O=be+(Le-pt),j=nt*A/w*ot,se=Fe*A/w*ot;J.projectionMatrix.makePerspective(_,O,j,se,ot,w),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ge(J,re){re===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(re.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let re=J.near,ve=J.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),B.near=M.near=y.near=re,B.far=M.far=y.far=ve,(H!==B.near||ee!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),H=B.near,ee=B.far),B.layers.mask=J.layers.mask|6,y.layers.mask=B.layers.mask&3,M.layers.mask=B.layers.mask&5;const Le=J.parent,Ee=B.cameras;ge(B,Le);for(let Ve=0;Ve<Ee.length;Ve++)ge(Ee[Ve],Le);Ee.length===2?fe(B,y,M):B.projectionMatrix.copy(y.projectionMatrix),Ae(J,B,Le)};function Ae(J,re,ve){ve===null?J.matrix.copy(re.matrixWorld):(J.matrix.copy(ve.matrixWorld),J.matrix.invert(),J.matrix.multiply(re.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Bo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(J){return f[J]};let qe=null;function Ue(J,re){if(h=re.getViewerPose(c||a),g=re,h!==null){const ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Le=!1;ve.length!==B.cameras.length&&(B.cameras.length=0,Le=!0);for(let A=0;A<ve.length;A++){const nt=ve[A];let Fe=null;if(p!==null)Fe=p.getViewport(nt);else{const ye=u.getViewSubImage(d,nt);Fe=ye.viewport,A===0&&(e.setRenderTargetTextures(b,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(b))}let Pe=L[A];Pe===void 0&&(Pe=new un,Pe.layers.enable(A),Pe.viewport=new mt,L[A]=Pe),Pe.matrix.fromArray(nt.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(nt.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),A===0&&(B.matrix.copy(Pe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Le===!0&&B.cameras.push(Pe)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const A=u.getDepthInformation(ve[0]);A&&A.isValid&&A.texture&&m.init(A,s.renderState)}if(Ee&&Ee.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let A=0;A<ve.length;A++){const nt=ve[A].camera;if(nt){let Fe=f[nt];Fe||(Fe=new Nh,f[nt]=Fe);const Pe=u.getCameraImage(nt);Fe.sourceTexture=Pe}}}}for(let ve=0;ve<I.length;ve++){const Le=C[ve],Ee=I[ve];Le!==null&&Ee!==void 0&&Ee.update(Le,re,c||a)}qe&&qe(J,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const He=new kh;He.setAnimationLoop(Ue),this.setAnimationLoop=function(J){qe=J},this.dispose=function(){}}}const ci=new Bn,av=new rt;function ov(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Ph(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,E,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,S,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Vt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Vt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=e.get(f),E=S.envMap,b=S.envMapRotation;E&&(m.envMap.value=E,ci.copy(b),ci.x*=-1,ci.y*=-1,ci.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),m.envMapRotation.value.setFromMatrix4(av.makeRotationFromEuler(ci)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Vt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function lv(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const b=E.program;i.uniformBlockBinding(S,b)}function c(S,E){let b=s[S.id];b===void 0&&(g(S),b=h(S),s[S.id]=b,S.addEventListener("dispose",m));const I=E.program;i.updateUBOMapping(S,I);const C=e.render.frame;r[S.id]!==C&&(d(S),r[S.id]=C)}function h(S){const E=u();S.__bindingPointIndex=E;const b=n.createBuffer(),I=S.__size,C=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,b),b}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const E=s[S.id],b=S.uniforms,I=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let C=0,T=b.length;C<T;C++){const D=Array.isArray(b[C])?b[C]:[b[C]];for(let y=0,M=D.length;y<M;y++){const L=D[y];if(p(L,C,y,I)===!0){const B=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let ee=0;for(let G=0;G<H.length;G++){const X=H[G],ie=v(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,B+ee,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,ee),ee+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,E,b,I){const C=S.value,T=E+"_"+b;if(I[T]===void 0)return typeof C=="number"||typeof C=="boolean"?I[T]=C:I[T]=C.clone(),!0;{const D=I[T];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return I[T]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(S){const E=S.uniforms;let b=0;const I=16;for(let T=0,D=E.length;T<D;T++){const y=Array.isArray(E[T])?E[T]:[E[T]];for(let M=0,L=y.length;M<L;M++){const B=y[M],H=Array.isArray(B.value)?B.value:[B.value];for(let ee=0,G=H.length;ee<G;ee++){const X=H[ee],ie=v(X),W=b%I,he=W%ie.boundary,fe=W+he;b+=he,fe!==0&&I-fe<ie.storage&&(b+=I-fe),B.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=b,b+=ie.storage}}}const C=b%I;return C>0&&(b+=I-C),S.__size=b,S.__cache={},this}function v(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(const S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class cv{constructor(e={}){const{canvas:t=Vd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const S=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let I=!1;this._outputColorSpace=At;let C=0,T=0,D=null,y=-1,M=null;const L=new mt,B=new mt;let H=null;const ee=new Ye(0);let G=0,X=t.width,ie=t.height,W=1,he=null,fe=null;const ge=new mt(0,0,X,ie),Ae=new mt(0,0,X,ie);let qe=!1;const Ue=new Dh;let He=!1,J=!1;const re=new rt,ve=new k,Le=new mt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Mt(){return D===null?W:1}let A=i;function nt(x,U){return t.getContext(x,U)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zo}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ne,!1),A===null){const U="webgl2";if(A=nt(U,x),A===null)throw nt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Fe,Pe,ye,it,be,Oe,pt,ot,w,_,O,j,se,$,we,ce,_e,Me,ae,N,K,Q,Y,ue;function P(){Fe=new x0(A),Fe.init(),Q=new tv(A,Fe),Pe=new d0(A,Fe,e,Q),ye=new Qg(A,Fe),Pe.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),it=new y0(A),be=new zg,Oe=new ev(A,Fe,ye,be,Pe,Q,it),pt=new p0(b),ot=new _0(b),w=new Rf(A),Y=new h0(A,w),_=new M0(A,w,it,Y),O=new E0(A,_,w,it),ae=new S0(A,Pe,Oe),ce=new f0(be),j=new Bg(b,pt,ot,Fe,Pe,Y,ce),se=new ov(b,be),$=new Vg,we=new Yg(Fe),Me=new c0(b,pt,ot,ye,O,p,l),_e=new Zg(b,O,Pe),ue=new lv(A,it,Pe,ye),N=new u0(A,Fe,it),K=new b0(A,Fe,it),it.programs=j.programs,b.capabilities=Pe,b.extensions=Fe,b.properties=be,b.renderLists=$,b.shadowMap=_e,b.state=ye,b.info=it}P();const Z=new rv(b,A);this.xr=Z,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const x=Fe.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Fe.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(x){x!==void 0&&(W=x,this.setSize(X,ie,!1))},this.getSize=function(x){return x.set(X,ie)},this.setSize=function(x,U,z=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=x,ie=U,t.width=Math.floor(x*W),t.height=Math.floor(U*W),z===!0&&(t.style.width=x+"px",t.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(X*W,ie*W).floor()},this.setDrawingBufferSize=function(x,U,z){X=x,ie=U,W=z,t.width=Math.floor(x*z),t.height=Math.floor(U*z),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(L)},this.getViewport=function(x){return x.copy(ge)},this.setViewport=function(x,U,z,V){x.isVector4?ge.set(x.x,x.y,x.z,x.w):ge.set(x,U,z,V),ye.viewport(L.copy(ge).multiplyScalar(W).round())},this.getScissor=function(x){return x.copy(Ae)},this.setScissor=function(x,U,z,V){x.isVector4?Ae.set(x.x,x.y,x.z,x.w):Ae.set(x,U,z,V),ye.scissor(B.copy(Ae).multiplyScalar(W).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(x){ye.setScissorTest(qe=x)},this.setOpaqueSort=function(x){he=x},this.setTransparentSort=function(x){fe=x},this.getClearColor=function(x){return x.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(x=!0,U=!0,z=!0){let V=0;if(x){let F=!1;if(D!==null){const oe=D.texture.format;F=oe===sl||oe===il||oe===nl}if(F){const oe=D.texture.type,me=oe===kn||oe===wi||oe===Fs||oe===Os||oe===Qo||oe===el,Se=Me.getClearColor(),xe=Me.getClearAlpha(),De=Se.r,Ne=Se.g,Ce=Se.b;me?(g[0]=De,g[1]=Ne,g[2]=Ce,g[3]=xe,A.clearBufferuiv(A.COLOR,0,g)):(v[0]=De,v[1]=Ne,v[2]=Ce,v[3]=xe,A.clearBufferiv(A.COLOR,0,v))}else V|=A.COLOR_BUFFER_BIT}U&&(V|=A.DEPTH_BUFFER_BIT),z&&(V|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),Me.dispose(),$.dispose(),we.dispose(),be.dispose(),pt.dispose(),ot.dispose(),O.dispose(),Y.dispose(),ue.dispose(),j.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",bt),Z.removeEventListener("sessionend",Hn),Nt.stop()};function te(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const x=it.autoReset,U=_e.enabled,z=_e.autoUpdate,V=_e.needsUpdate,F=_e.type;P(),it.autoReset=x,_e.enabled=U,_e.autoUpdate=z,_e.needsUpdate=V,_e.type=F}function ne(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function q(x){const U=x.target;U.removeEventListener("dispose",q),pe(U)}function pe(x){Te(x),be.remove(x)}function Te(x){const U=be.get(x).programs;U!==void 0&&(U.forEach(function(z){j.releaseProgram(z)}),x.isShaderMaterial&&j.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,z,V,F,oe){U===null&&(U=Ee);const me=F.isMesh&&F.matrixWorld.determinant()<0,Se=$u(x,U,z,V,F);ye.setMaterial(V,me);let xe=z.index,De=1;if(V.wireframe===!0){if(xe=_.getWireframeAttribute(z),xe===void 0)return;De=2}const Ne=z.drawRange,Ce=z.attributes.position;let We=Ne.start*De,Qe=(Ne.start+Ne.count)*De;oe!==null&&(We=Math.max(We,oe.start*De),Qe=Math.min(Qe,(oe.start+oe.count)*De)),xe!==null?(We=Math.max(We,0),Qe=Math.min(Qe,xe.count)):Ce!=null&&(We=Math.max(We,0),Qe=Math.min(Qe,Ce.count));const dt=Qe-We;if(dt<0||dt===1/0)return;Y.setup(F,V,Se,z,xe);let at,st=N;if(xe!==null&&(at=w.get(xe),st=K,st.setIndex(at)),F.isMesh)V.wireframe===!0?(ye.setLineWidth(V.wireframeLinewidth*Mt()),st.setMode(A.LINES)):st.setMode(A.TRIANGLES);else if(F.isLine){let Ie=V.linewidth;Ie===void 0&&(Ie=1),ye.setLineWidth(Ie*Mt()),F.isLineSegments?st.setMode(A.LINES):F.isLineLoop?st.setMode(A.LINE_LOOP):st.setMode(A.LINE_STRIP)}else F.isPoints?st.setMode(A.POINTS):F.isSprite&&st.setMode(A.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Hs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))st.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ie=F._multiDrawStarts,ht=F._multiDrawCounts,je=F._multiDrawCount,Gt=xe?w.get(xe).bytesPerElement:1,Li=be.get(V).currentProgram.getUniforms();for(let Wt=0;Wt<je;Wt++)Li.setValue(A,"_gl_DrawID",Wt),st.render(Ie[Wt]/Gt,ht[Wt])}else if(F.isInstancedMesh)st.renderInstances(We,dt,F.count);else if(z.isInstancedBufferGeometry){const Ie=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ht=Math.min(z.instanceCount,Ie);st.renderInstances(We,dt,ht)}else st.render(We,dt)};function Ke(x,U,z){x.transparent===!0&&x.side===sn&&x.forceSinglePass===!1?(x.side=Vt,x.needsUpdate=!0,wn(x,U,z),x.side=Zn,x.needsUpdate=!0,wn(x,U,z),x.side=sn):wn(x,U,z)}this.compile=function(x,U,z=null){z===null&&(z=x),f=we.get(z),f.init(U),E.push(f),z.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),x!==z&&x.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const V=new Set;return x.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const oe=F.material;if(oe)if(Array.isArray(oe))for(let me=0;me<oe.length;me++){const Se=oe[me];Ke(Se,z,F),V.add(Se)}else Ke(oe,z,F),V.add(oe)}),f=E.pop(),V},this.compileAsync=function(x,U,z=null){const V=this.compile(x,U,z);return new Promise(F=>{function oe(){if(V.forEach(function(me){be.get(me).currentProgram.isReady()&&V.delete(me)}),V.size===0){F(x);return}setTimeout(oe,10)}Fe.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let ke=null;function wt(x){ke&&ke(x)}function bt(){Nt.stop()}function Hn(){Nt.start()}const Nt=new kh;Nt.setAnimationLoop(wt),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(x){ke=x,Z.setAnimationLoop(x),x===null?Nt.stop():Nt.start()},Z.addEventListener("sessionstart",bt),Z.addEventListener("sessionend",Hn),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(U),U=Z.getCamera()),x.isScene===!0&&x.onBeforeRender(b,x,U,D),f=we.get(x,E.length),f.init(U),E.push(f),re.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ue.setFromProjectionMatrix(re,Mn,U.reversedDepth),J=this.localClippingEnabled,He=ce.init(this.clippingPlanes,J),m=$.get(x,S.length),m.init(),S.push(m),Z.enabled===!0&&Z.isPresenting===!0){const oe=b.xr.getDepthSensingMesh();oe!==null&&ti(oe,U,-1/0,b.sortObjects)}ti(x,U,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(he,fe),Ve=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Ve&&Me.addToRenderList(m,x),this.info.render.frame++,He===!0&&ce.beginShadows();const z=f.state.shadowsArray;_e.render(z,x,U),He===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,F=m.transmissive;if(f.setupLights(),U.isArrayCamera){const oe=U.cameras;if(F.length>0)for(let me=0,Se=oe.length;me<Se;me++){const xe=oe[me];Ii(V,F,x,xe)}Ve&&Me.render(x);for(let me=0,Se=oe.length;me<Se;me++){const xe=oe[me];xs(m,x,xe,xe.viewport)}}else F.length>0&&Ii(V,F,x,U),Ve&&Me.render(x),xs(m,x,U);D!==null&&T===0&&(Oe.updateMultisampleRenderTarget(D),Oe.updateRenderTargetMipmap(D)),x.isScene===!0&&x.onAfterRender(b,x,U),Y.resetDefaultState(),y=-1,M=null,E.pop(),E.length>0?(f=E[E.length-1],He===!0&&ce.setGlobalState(b.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function ti(x,U,z,V){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Ue.intersectsSprite(x)){V&&Le.setFromMatrixPosition(x.matrixWorld).applyMatrix4(re);const me=O.update(x),Se=x.material;Se.visible&&m.push(x,me,Se,z,Le.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Ue.intersectsObject(x))){const me=O.update(x),Se=x.material;if(V&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Le.copy(x.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Le.copy(me.boundingSphere.center)),Le.applyMatrix4(x.matrixWorld).applyMatrix4(re)),Array.isArray(Se)){const xe=me.groups;for(let De=0,Ne=xe.length;De<Ne;De++){const Ce=xe[De],We=Se[Ce.materialIndex];We&&We.visible&&m.push(x,me,We,z,Le.z,Ce)}}else Se.visible&&m.push(x,me,Se,z,Le.z,null)}}const oe=x.children;for(let me=0,Se=oe.length;me<Se;me++)ti(oe[me],U,z,V)}function xs(x,U,z,V){const F=x.opaque,oe=x.transmissive,me=x.transparent;f.setupLightsView(z),He===!0&&ce.setGlobalState(b.clippingPlanes,z),V&&ye.viewport(L.copy(V)),F.length>0&&ni(F,U,z),oe.length>0&&ni(oe,U,z),me.length>0&&ni(me,U,z),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Ii(x,U,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new Ti(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Ws:kn,minFilter:xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const oe=f.state.transmissionRenderTarget[V.id],me=V.viewport||L;oe.setSize(me.z*b.transmissionResolutionScale,me.w*b.transmissionResolutionScale);const Se=b.getRenderTarget(),xe=b.getActiveCubeFace(),De=b.getActiveMipmapLevel();b.setRenderTarget(oe),b.getClearColor(ee),G=b.getClearAlpha(),G<1&&b.setClearColor(16777215,.5),b.clear(),Ve&&Me.render(z);const Ne=b.toneMapping;b.toneMapping=Nn;const Ce=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),He===!0&&ce.setGlobalState(b.clippingPlanes,V),ni(x,z,V),Oe.updateMultisampleRenderTarget(oe),Oe.updateRenderTargetMipmap(oe),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Qe=0,dt=U.length;Qe<dt;Qe++){const at=U[Qe],st=at.object,Ie=at.geometry,ht=at.material,je=at.group;if(ht.side===sn&&st.layers.test(V.layers)){const Gt=ht.side;ht.side=Vt,ht.needsUpdate=!0,Js(st,z,V,Ie,ht,je),ht.side=Gt,ht.needsUpdate=!0,We=!0}}We===!0&&(Oe.updateMultisampleRenderTarget(oe),Oe.updateRenderTargetMipmap(oe))}b.setRenderTarget(Se,xe,De),b.setClearColor(ee,G),Ce!==void 0&&(V.viewport=Ce),b.toneMapping=Ne}function ni(x,U,z){const V=U.isScene===!0?U.overrideMaterial:null;for(let F=0,oe=x.length;F<oe;F++){const me=x[F],Se=me.object,xe=me.geometry,De=me.group;let Ne=me.material;Ne.allowOverride===!0&&V!==null&&(Ne=V),Se.layers.test(z.layers)&&Js(Se,U,z,xe,Ne,De)}}function Js(x,U,z,V,F,oe){x.onBeforeRender(b,U,z,V,F,oe),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),F.onBeforeRender(b,U,z,V,x,oe),F.transparent===!0&&F.side===sn&&F.forceSinglePass===!1?(F.side=Vt,F.needsUpdate=!0,b.renderBufferDirect(z,U,V,F,x,oe),F.side=Zn,F.needsUpdate=!0,b.renderBufferDirect(z,U,V,F,x,oe),F.side=sn):b.renderBufferDirect(z,U,V,F,x,oe),x.onAfterRender(b,U,z,V,F,oe)}function wn(x,U,z){U.isScene!==!0&&(U=Ee);const V=be.get(x),F=f.state.lights,oe=f.state.shadowsArray,me=F.state.version,Se=j.getParameters(x,F.state,oe,U,z),xe=j.getProgramCacheKey(Se);let De=V.programs;V.environment=x.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(x.isMeshStandardMaterial?ot:pt).get(x.envMap||V.environment),V.envMapRotation=V.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,De===void 0&&(x.addEventListener("dispose",q),De=new Map,V.programs=De);let Ne=De.get(xe);if(Ne!==void 0){if(V.currentProgram===Ne&&V.lightsStateVersion===me)return wl(x,Se),Ne}else Se.uniforms=j.getUniforms(x),x.onBeforeCompile(Se,b),Ne=j.acquireProgram(Se,xe),De.set(xe,Ne),V.uniforms=Se.uniforms;const Ce=V.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ce.clippingPlanes=ce.uniform),wl(x,Se),V.needsLights=qu(x),V.lightsStateVersion=me,V.needsLights&&(Ce.ambientLightColor.value=F.state.ambient,Ce.lightProbe.value=F.state.probe,Ce.directionalLights.value=F.state.directional,Ce.directionalLightShadows.value=F.state.directionalShadow,Ce.spotLights.value=F.state.spot,Ce.spotLightShadows.value=F.state.spotShadow,Ce.rectAreaLights.value=F.state.rectArea,Ce.ltc_1.value=F.state.rectAreaLTC1,Ce.ltc_2.value=F.state.rectAreaLTC2,Ce.pointLights.value=F.state.point,Ce.pointLightShadows.value=F.state.pointShadow,Ce.hemisphereLights.value=F.state.hemi,Ce.directionalShadowMap.value=F.state.directionalShadowMap,Ce.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ce.spotShadowMap.value=F.state.spotShadowMap,Ce.spotLightMatrix.value=F.state.spotLightMatrix,Ce.spotLightMap.value=F.state.spotLightMap,Ce.pointShadowMap.value=F.state.pointShadowMap,Ce.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Ne,V.uniformsList=null,Ne}function El(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=Ir.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function wl(x,U){const z=be.get(x);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function $u(x,U,z,V,F){U.isScene!==!0&&(U=Ee),Oe.resetTextureUnits();const oe=U.fog,me=V.isMeshStandardMaterial?U.environment:null,Se=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ds,xe=(V.isMeshStandardMaterial?ot:pt).get(V.envMap||me),De=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ne=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ce=!!z.morphAttributes.position,We=!!z.morphAttributes.normal,Qe=!!z.morphAttributes.color;let dt=Nn;V.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(dt=b.toneMapping);const at=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,st=at!==void 0?at.length:0,Ie=be.get(V),ht=f.state.lights;if(He===!0&&(J===!0||x!==M)){const Lt=x===M&&V.id===y;ce.setState(V,x,Lt)}let je=!1;V.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==ht.state.version||Ie.outputColorSpace!==Se||F.isBatchedMesh&&Ie.batching===!1||!F.isBatchedMesh&&Ie.batching===!0||F.isBatchedMesh&&Ie.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ie.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ie.instancing===!1||!F.isInstancedMesh&&Ie.instancing===!0||F.isSkinnedMesh&&Ie.skinning===!1||!F.isSkinnedMesh&&Ie.skinning===!0||F.isInstancedMesh&&Ie.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ie.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ie.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ie.instancingMorph===!1&&F.morphTexture!==null||Ie.envMap!==xe||V.fog===!0&&Ie.fog!==oe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ce.numPlanes||Ie.numIntersection!==ce.numIntersection)||Ie.vertexAlphas!==De||Ie.vertexTangents!==Ne||Ie.morphTargets!==Ce||Ie.morphNormals!==We||Ie.morphColors!==Qe||Ie.toneMapping!==dt||Ie.morphTargetsCount!==st)&&(je=!0):(je=!0,Ie.__version=V.version);let Gt=Ie.currentProgram;je===!0&&(Gt=wn(V,U,F));let Li=!1,Wt=!1,Ms=!1;const ut=Gt.getUniforms(),Jt=Ie.uniforms;if(ye.useProgram(Gt.program)&&(Li=!0,Wt=!0,Ms=!0),V.id!==y&&(y=V.id,Wt=!0),Li||M!==x){ye.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ut.setValue(A,"projectionMatrix",x.projectionMatrix),ut.setValue(A,"viewMatrix",x.matrixWorldInverse);const Ft=ut.map.cameraPosition;Ft!==void 0&&Ft.setValue(A,ve.setFromMatrixPosition(x.matrixWorld)),Pe.logarithmicDepthBuffer&&ut.setValue(A,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ut.setValue(A,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,Wt=!0,Ms=!0)}if(F.isSkinnedMesh){ut.setOptional(A,F,"bindMatrix"),ut.setOptional(A,F,"bindMatrixInverse");const Lt=F.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),ut.setValue(A,"boneTexture",Lt.boneTexture,Oe))}F.isBatchedMesh&&(ut.setOptional(A,F,"batchingTexture"),ut.setValue(A,"batchingTexture",F._matricesTexture,Oe),ut.setOptional(A,F,"batchingIdTexture"),ut.setValue(A,"batchingIdTexture",F._indirectTexture,Oe),ut.setOptional(A,F,"batchingColorTexture"),F._colorsTexture!==null&&ut.setValue(A,"batchingColorTexture",F._colorsTexture,Oe));const Qt=z.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&ae.update(F,z,Gt),(Wt||Ie.receiveShadow!==F.receiveShadow)&&(Ie.receiveShadow=F.receiveShadow,ut.setValue(A,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Jt.envMap.value=xe,Jt.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Jt.envMapIntensity.value=U.environmentIntensity),Wt&&(ut.setValue(A,"toneMappingExposure",b.toneMappingExposure),Ie.needsLights&&Xu(Jt,Ms),oe&&V.fog===!0&&se.refreshFogUniforms(Jt,oe),se.refreshMaterialUniforms(Jt,V,W,ie,f.state.transmissionRenderTarget[x.id]),Ir.upload(A,El(Ie),Jt,Oe)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ir.upload(A,El(Ie),Jt,Oe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ut.setValue(A,"center",F.center),ut.setValue(A,"modelViewMatrix",F.modelViewMatrix),ut.setValue(A,"normalMatrix",F.normalMatrix),ut.setValue(A,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Lt=V.uniformsGroups;for(let Ft=0,ea=Lt.length;Ft<ea;Ft++){const ii=Lt[Ft];ue.update(ii,Gt),ue.bind(ii,Gt)}}return Gt}function Xu(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function qu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(x,U,z){const V=be.get(x);V.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),be.get(x.texture).__webglTexture=U,be.get(x.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,U){const z=be.get(x);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const Yu=A.createFramebuffer();this.setRenderTarget=function(x,U=0,z=0){D=x,C=U,T=z;let V=!0,F=null,oe=!1,me=!1;if(x){const xe=be.get(x);if(xe.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(A.FRAMEBUFFER,null),V=!1;else if(xe.__webglFramebuffer===void 0)Oe.setupRenderTarget(x);else if(xe.__hasExternalTextures)Oe.rebindTextures(x,be.get(x.texture).__webglTexture,be.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ce=x.depthTexture;if(xe.__boundDepthTexture!==Ce){if(Ce!==null&&be.has(Ce)&&(x.width!==Ce.image.width||x.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(x)}}const De=x.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(me=!0);const Ne=be.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?F=Ne[U][z]:F=Ne[U],oe=!0):x.samples>0&&Oe.useMultisampledRTT(x)===!1?F=be.get(x).__webglMultisampledFramebuffer:Array.isArray(Ne)?F=Ne[z]:F=Ne,L.copy(x.viewport),B.copy(x.scissor),H=x.scissorTest}else L.copy(ge).multiplyScalar(W).floor(),B.copy(Ae).multiplyScalar(W).floor(),H=qe;if(z!==0&&(F=Yu),ye.bindFramebuffer(A.FRAMEBUFFER,F)&&V&&ye.drawBuffers(x,F),ye.viewport(L),ye.scissor(B),ye.setScissorTest(H),oe){const xe=be.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,z)}else if(me){const xe=U;for(let De=0;De<x.textures.length;De++){const Ne=be.get(x.textures[De]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+De,Ne.__webglTexture,z,xe)}}else if(x!==null&&z!==0){const xe=be.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,xe.__webglTexture,z)}y=-1},this.readRenderTargetPixels=function(x,U,z,V,F,oe,me,Se=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=be.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){ye.bindFramebuffer(A.FRAMEBUFFER,xe);try{const De=x.textures[Se],Ne=De.format,Ce=De.type;if(!Pe.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-V&&z>=0&&z<=x.height-F&&(x.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Se),A.readPixels(U,z,V,F,Q.convert(Ne),Q.convert(Ce),oe))}finally{const De=D!==null?be.get(D).__webglFramebuffer:null;ye.bindFramebuffer(A.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(x,U,z,V,F,oe,me,Se=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=be.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe)if(U>=0&&U<=x.width-V&&z>=0&&z<=x.height-F){ye.bindFramebuffer(A.FRAMEBUFFER,xe);const De=x.textures[Se],Ne=De.format,Ce=De.type;if(!Pe.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,We),A.bufferData(A.PIXEL_PACK_BUFFER,oe.byteLength,A.STREAM_READ),x.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Se),A.readPixels(U,z,V,F,Q.convert(Ne),Q.convert(Ce),0);const Qe=D!==null?be.get(D).__webglFramebuffer:null;ye.bindFramebuffer(A.FRAMEBUFFER,Qe);const dt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Gd(A,dt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,We),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,oe),A.deleteBuffer(We),A.deleteSync(dt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,U=null,z=0){const V=Math.pow(2,-z),F=Math.floor(x.image.width*V),oe=Math.floor(x.image.height*V),me=U!==null?U.x:0,Se=U!==null?U.y:0;Oe.setTexture2D(x,0),A.copyTexSubImage2D(A.TEXTURE_2D,z,0,0,me,Se,F,oe),ye.unbindTexture()};const Ku=A.createFramebuffer(),ju=A.createFramebuffer();this.copyTextureToTexture=function(x,U,z=null,V=null,F=0,oe=null){oe===null&&(F!==0?(Hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=F,F=0):oe=0);let me,Se,xe,De,Ne,Ce,We,Qe,dt;const at=x.isCompressedTexture?x.mipmaps[oe]:x.image;if(z!==null)me=z.max.x-z.min.x,Se=z.max.y-z.min.y,xe=z.isBox3?z.max.z-z.min.z:1,De=z.min.x,Ne=z.min.y,Ce=z.isBox3?z.min.z:0;else{const Qt=Math.pow(2,-F);me=Math.floor(at.width*Qt),Se=Math.floor(at.height*Qt),x.isDataArrayTexture?xe=at.depth:x.isData3DTexture?xe=Math.floor(at.depth*Qt):xe=1,De=0,Ne=0,Ce=0}V!==null?(We=V.x,Qe=V.y,dt=V.z):(We=0,Qe=0,dt=0);const st=Q.convert(U.format),Ie=Q.convert(U.type);let ht;U.isData3DTexture?(Oe.setTexture3D(U,0),ht=A.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Oe.setTexture2DArray(U,0),ht=A.TEXTURE_2D_ARRAY):(Oe.setTexture2D(U,0),ht=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);const je=A.getParameter(A.UNPACK_ROW_LENGTH),Gt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Li=A.getParameter(A.UNPACK_SKIP_PIXELS),Wt=A.getParameter(A.UNPACK_SKIP_ROWS),Ms=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,at.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,at.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,De),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ne),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ce);const ut=x.isDataArrayTexture||x.isData3DTexture,Jt=U.isDataArrayTexture||U.isData3DTexture;if(x.isDepthTexture){const Qt=be.get(x),Lt=be.get(U),Ft=be.get(Qt.__renderTarget),ea=be.get(Lt.__renderTarget);ye.bindFramebuffer(A.READ_FRAMEBUFFER,Ft.__webglFramebuffer),ye.bindFramebuffer(A.DRAW_FRAMEBUFFER,ea.__webglFramebuffer);for(let ii=0;ii<xe;ii++)ut&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,be.get(x).__webglTexture,F,Ce+ii),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,be.get(U).__webglTexture,oe,dt+ii)),A.blitFramebuffer(De,Ne,me,Se,We,Qe,me,Se,A.DEPTH_BUFFER_BIT,A.NEAREST);ye.bindFramebuffer(A.READ_FRAMEBUFFER,null),ye.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(F!==0||x.isRenderTargetTexture||be.has(x)){const Qt=be.get(x),Lt=be.get(U);ye.bindFramebuffer(A.READ_FRAMEBUFFER,Ku),ye.bindFramebuffer(A.DRAW_FRAMEBUFFER,ju);for(let Ft=0;Ft<xe;Ft++)ut?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Qt.__webglTexture,F,Ce+Ft):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Qt.__webglTexture,F),Jt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Lt.__webglTexture,oe,dt+Ft):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Lt.__webglTexture,oe),F!==0?A.blitFramebuffer(De,Ne,me,Se,We,Qe,me,Se,A.COLOR_BUFFER_BIT,A.NEAREST):Jt?A.copyTexSubImage3D(ht,oe,We,Qe,dt+Ft,De,Ne,me,Se):A.copyTexSubImage2D(ht,oe,We,Qe,De,Ne,me,Se);ye.bindFramebuffer(A.READ_FRAMEBUFFER,null),ye.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Jt?x.isDataTexture||x.isData3DTexture?A.texSubImage3D(ht,oe,We,Qe,dt,me,Se,xe,st,Ie,at.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(ht,oe,We,Qe,dt,me,Se,xe,st,at.data):A.texSubImage3D(ht,oe,We,Qe,dt,me,Se,xe,st,Ie,at):x.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,oe,We,Qe,me,Se,st,Ie,at.data):x.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,oe,We,Qe,at.width,at.height,st,at.data):A.texSubImage2D(A.TEXTURE_2D,oe,We,Qe,me,Se,st,Ie,at);A.pixelStorei(A.UNPACK_ROW_LENGTH,je),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Gt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Li),A.pixelStorei(A.UNPACK_SKIP_ROWS,Wt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ms),oe===0&&U.generateMipmaps&&A.generateMipmap(ht),ye.unbindTexture()},this.initRenderTarget=function(x){be.get(x).__webglFramebuffer===void 0&&Oe.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Oe.setTextureCube(x,0):x.isData3DTexture?Oe.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Oe.setTexture2DArray(x,0):Oe.setTexture2D(x,0),ye.unbindTexture()},this.resetState=function(){C=0,T=0,D=null,ye.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}function Gh(n){return!0}const Wh=1.5;function $h(n,e){return e&&new URLSearchParams(n).get("dprFloor")==="1"?1:Wh}function Xh(n,e,t=Wh){return e?Math.min(2,Math.max(t,n)):Math.min(n,1.25)}function hv(n,e){const t=new cv({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance"});return t.setPixelRatio(Xh(devicePixelRatio,e,$h(location.search,!1))),t.setSize(innerWidth,innerHeight),t}const rn={"green-blob":{model:"gloom-blob",label:"ก้อนวุ้น",height:1.25,footprint:1.65,hover:0,bob:.045,frequency:5.2,accent:13073919,glow:13131007,moveSpeed:1.7},demon:{model:"bat-gargoyle",label:"การ์กอยล์",height:1.55,footprint:2.3,hover:1,bob:.11,frequency:3.2,accent:13662207,glow:13662207,moveSpeed:2.2},yeti:{model:"horned-brute",label:"นักรบเขาเหล็ก",height:1.65,footprint:2.05,hover:0,bob:.035,frequency:2.1,accent:16747069,glow:16747050,moveSpeed:.682},orc:{model:"crystal-golem",label:"โกเลมผลึก",height:2.05,footprint:2.3,hover:0,bob:.055,frequency:2.7,accent:5228799,glow:4179199,moveSpeed:.55},"orc-skull":{model:"crystal-golem",label:"โกเลมผลึก · Overload",height:2.2,footprint:2.45,hover:0,bob:.055,frequency:2.9,accent:11820287,tint:14207231,elite:!0,glow:11820287,moveSpeed:.55},alien:{model:"ember-demon",label:"เขี้ยวถ่าน",height:1.5,footprint:1.5,hover:0,bob:.1,frequency:4.3,accent:16734778,glow:16773800,moveSpeed:2.321},"mushroom-king":{model:"hollow-wraith",label:"วิญญาณ",height:1.95,footprint:2.05,hover:.2,bob:.08,frequency:2.2,accent:9428223,glow:9430271,moveSpeed:.75},"blue-demon":{model:"bat-gargoyle",label:"การ์กอยล์ · Ion",height:1.6,footprint:2.35,hover:1.05,bob:.1,frequency:3.6,accent:9157375,tint:11386879,elite:!0,glow:9165055,moveSpeed:2.2}};[...new Set(Object.values(rn).map(n=>n.model))];const Ho={landscape:{image:"island.webp",size:[2304,1184],frame:[384,96,1920,1120],plaza:[1152,566],island:[660,315],outline:[[448,544],[456,468],[488,410],[520,392],[557,360],[594,372],[614,348],[662,316],[710,304],[758,276],[806,248],[854,232],[902,204],[950,200],[998,204],[1046,212],[1094,188],[1142,188],[1190,208],[1238,220],[1286,212],[1334,228],[1382,248],[1430,256],[1466,212],[1500,204],[1528,170],[1556,204],[1592,208],[1622,256],[1670,248],[1718,312],[1766,400],[1814,452],[1840,520],[1856,544],[1856,556],[1840,600],[1832,700],[1814,760],[1800,790],[1766,864],[1718,896],[1670,916],[1622,952],[1574,984],[1526,972],[1478,996],[1430,1020],[1382,1044],[1334,1048],[1286,1044],[1238,1056],[1190,1040],[1142,1048],[1094,1076],[1046,1068],[998,1020],[950,984],[902,1004],[854,1012],[806,1012],[758,976],[710,936],[662,868],[614,908],[566,864],[540,796],[520,762],[496,718],[472,654],[456,610],[448,572]],gates:[{mouth:[555,476,37,48],art:[456,362,656,554]},{mouth:[1529,284,35,48],art:[1430,172,1626,366]},{mouth:[1649,676,37,47],art:[1546,553,1747,748],front:702}],gateArt:"island-gates.webp",tower:{image:"tower.webp",base:[1152,566],width:312},actorScale:30}},uv="level-01",dv=[{role:"short",control:[[16.078,3.565],[11.357,1.853],[6.399,.414],[1.984,.253]]},{role:"long",control:[[-11.912,11.182],[-6.977,12.013],[-2.832,11.131],[-1.634,8.058],[-4.331,5.496],[-9.962,5.382],[-13.03,2.571],[-12.03,-.528],[-8.505,-1.287],[-4.715,.608],[-1.764,1.186]]},{role:"medium",control:[[-12.3,-11.047],[-7.982,-11.705],[-3.917,-10.38],[-3.031,-7.847],[-5.812,-6.589],[-9.358,-7.243],[-11.815,-6.952],[-12.997,-5.591],[-12.182,-4.075],[-10.038,-3.499],[-6.057,-3.092],[-1.41,-1.591]]}],fv="island-day",pv={width:2.6,tile:"slab"},mv={at:[0,0],radius:3.6},gv={id:uv,lanes:dv,base:fv,road:pv,plaza:mv},Da=["short","long","medium"];class Ua extends Error{constructor(){super(...arguments);R(this,"name","LevelDataError")}}const yc=801;function vv(n){const e=n.map(([a,o])=>({x:a,z:o})),t=[];for(let a=0;a<e.length-1;a++){const o=e[Math.max(0,a-1)],l=e[a],c=e[a+1],h=e[Math.min(e.length-1,a+2)];for(let u=0;u<32;u++){const d=u/32,p=d*d,g=p*d,v=(m,f,S,E)=>.5*(2*f+(-m+S)*d+(2*m-5*f+4*S-E)*p+(-m+3*f-3*S+E)*g);t.push({x:v(o.x,l.x,c.x,h.x),z:v(o.z,l.z,c.z,h.z)})}}t.push(e[e.length-1]);const i=[0];for(let a=1;a<t.length;a++)i.push(i[a-1]+Math.hypot(t[a].x-t[a-1].x,t[a].z-t[a-1].z));const s=i[i.length-1],r=[];for(let a=0,o=0;a<yc;a++){const l=s*a/(yc-1);for(;o<t.length-2&&i[o+1]<l;)o++;const c=(l-i[o])/Math.max(1e-9,i[o+1]-i[o]);r.push({x:t[o].x+(t[o+1].x-t[o].x)*c,z:t[o].z+(t[o+1].z-t[o].z)*c})}return{points:r,length:s}}const yr=n=>typeof n=="object"&&n!==null&&!Array.isArray(n),Na=n=>typeof n=="string"&&/^[a-z0-9]+(-[a-z0-9]+)*$/.test(n),Sc=n=>Array.isArray(n)&&n.length===2&&Number.isFinite(n[0])&&Number.isFinite(n[1]);function _v(n){if(!yr(n))throw new Ua("level: not an object");const{id:e,lanes:t,base:i,road:s,plaza:r}=n;if(!Na(e))throw new Ua('level: id must be lower-case words joined by "-"');const a=l=>new Ua(`${e}: ${l}`);if(!Array.isArray(t)||t.length!==Da.length)throw a(`lanes must be ${Da.length}`);const o=Da.map((l,c)=>{const h=t[c];if(!yr(h))throw a(`lanes[${c}] is not an object`);if(h.role!==l)throw a(`lanes[${c}].role must be "${l}"`);const{control:u}=h;if(!Array.isArray(u)||u.length<2)throw a(`lanes[${c}].control needs 2 or more points`);for(let g=0;g<u.length;g++)if(!Sc(u[g]))throw a(`lanes[${c}].control[${g}] is not [x, z]`);const{points:d,length:p}=vv(u);if(!Number.isFinite(p)||!d.every(g=>Number.isFinite(g.x)&&Number.isFinite(g.z)))throw a(`lanes[${c}] is too long to sample`);if(!(p>1e-6))throw a(`lanes[${c}] has no length`);return Object.freeze({role:l,points:Object.freeze(d.map(g=>Object.freeze(g))),length:p})});if(!Na(i))throw a('base must be a kit name like "island-day"');if(!yr(s)||!(typeof s.width=="number"&&s.width>=1&&s.width<=4))throw a("road.width must be 1–4 world units");if(!Na(s.tile))throw a('road.tile must be a kit name like "slab"');if(!yr(r)||!Sc(r.at))throw a("plaza.at is not [x, z]");if(!(typeof r.radius=="number"&&r.radius>0&&r.radius<=8))throw a("plaza.radius must be above 0 and at most 8");return Object.freeze({id:e,lanes:Object.freeze(o),base:i,road:Object.freeze({width:s.width,tile:s.tile}),plaza:Object.freeze({at:Object.freeze([r.at[0],r.at[1]]),radius:r.radius})})}const qh={speed:1.6,main:3,of:5},xv=19.87/15;function Yh(n,e){return e*19.87/Xr(n)}let Mv=_v(gv);const Kh=n=>Mv.lanes[(n%3+3)%3];function Xr(n){return Kh(n).length}function jh(n,e){const t=Kh(n).points,s=Math.max(0,Math.min(1,e))*(t.length-1),r=Math.min(t.length-2,Math.floor(s)),a=s-r;return{x:t[r].x+(t[r+1].x-t[r].x)*a,z:t[r].z+(t[r+1].z-t[r].z)*a}}const Ec=18.2,wc={from:[6,36.5,-47],to:[0,-1.5,0]},Tc=n=>{const e=Math.hypot(...n);return n.map(t=>t/e)},yn=(()=>{const n=wc.from,e=wc.to,t=Tc([n[0]-e[0],n[1]-e[1],n[2]-e[2]]),i=Tc([t[2],0,-t[0]]),s=[t[1]*i[2]-t[2]*i[1],t[2]*i[0]-t[0]*i[2],t[0]*i[1]-t[1]*i[0]];return{right:i,up:s,sinPitch:t[1],cosPitch:Math.hypot(t[0],t[2]),yaw:Math.atan2(t[0],t[2])}})();class bv{constructor(e){R(this,"sx");R(this,"sy");this.layout=e,this.sx=e.island[0]/Ec,this.sy=e.island[1]/(Ec*yn.sinPitch)}toImage(e,t){const{right:i,up:s}=yn;return[this.layout.plaza[0]+this.sx*(e*i[0]+t*i[2]),this.layout.plaza[1]-this.sy*(e*s[0]+t*s[2])]}toWorld(e,t){const{right:i,up:s}=yn,r=(e-this.layout.plaza[0])/this.sx,a=-(t-this.layout.plaza[1])/this.sy,o=i[0]*s[2]-i[2]*s[0];return{x:(r*s[2]-a*i[2])/o,z:(i[0]*a-s[0]*r)/o}}}function yv(n,e=121){return[0,1,2].map(t=>Array.from({length:e},(i,s)=>{const r=jh(t,s/(e-1));return n.toImage(r.x,r.z)}))}const Zh=1.55,Jh=1.35;function Sv(n){return Math.max(...Object.values(rn).map(t=>t.height+t.hover))*Zh*n.actorScale*Jh+12}function Ev(n,e,t=36){const i=[...e.flat(),n.plaza],s=n.gates.map(r=>r.art);return[Math.min(...i.map(r=>r[0]),...s.map(r=>r[0]))-t,Math.min(...i.map(r=>r[1]-Sv(n)),...s.map(r=>r[1])),Math.max(...i.map(r=>r[0]),...s.map(r=>r[2]))+t,Math.max(...i.map(r=>r[1]+t),...s.map(r=>r[3]))]}const wv=.88,Tv=.08;function Av(n,e=24){return n.flatMap((t,i)=>{const s=n[(i+1)%n.length],r=Math.max(1,Math.ceil(Math.hypot(s[0]-t[0],s[1]-t[1])/e));return Array.from({length:r},(a,o)=>[t[0]+(s[0]-t[0])*o/r,t[1]+(s[1]-t[1])*o/r])})}function Rv(n,e,[t,i],s,r,a){const o=a.margin??8;return n.every(([l,c])=>{const h=t+l*e,u=i+c*e;return h>=0&&h<=s&&u>=0&&u<=r&&a.panels.every(([d,p,g,v])=>h<d-o||h>g+o||u<p-o||u>v+o)})}class Cv{constructor(){R(this,"widest",new Map);R(this,"screen","")}update(e,t,i){let s=!1;const r=`${e}x${t}`;r!==this.screen&&(this.widest.clear(),this.screen=r,s=!0);for(const[a,o]of i){const l=this.widest.get(a),c=l?[Math.min(l[0],o[0]),Math.min(l[1],o[1]),Math.max(l[2],o[2]),Math.max(l[3],o[3])]:o;(!l||c.some((h,u)=>Math.abs(h-l[u])>.5))&&(this.widest.set(a,c),s=!0)}return s}get boxes(){return[...this.widest.values()]}}function Pv(n,e,t,i,s,r,a,o,l){const c=Math.ceil(i),h=Math.floor(s)-c+1,u=l.margin??8;if(h<1)return null;const d=new Int32Array(h+1),p=(m,f)=>{const S=Math.max(0,Math.ceil(m)-c),E=Math.min(h-1,Math.floor(f)-c);S<=E&&(d[S]++,d[E+1]--)};for(const[m,f]of n){const S=t+m*e,E=f*e;if(S<0||S>a){d[0]++,d[h]--;continue}p(-1/0,-E-1e-6),p(o-E+1e-6,1/0);for(const[b,I,C,T]of l.panels)S>=b-u&&S<=C+u&&p(Math.max(I-u,0)-E,Math.min(T+u,o)-E)}let g=null,v=0;for(let m=0;m<h;m++){v+=d[m];const f=c+m;(!g||v<g.covered||v===g.covered&&Math.abs(f-r)<Math.abs(g.oy-r))&&(g={oy:f,covered:v})}return g}function Ac(n,e,t,i,s,r){const{size:a,frame:[o,l,c,h],plaza:u}=t;let d=Math.max(n/(c-o),e/(h-l)),p=[n/2-u[0]*d,e/2-(l+h)/2*d];if(i&&s){const[v,m,f,S]=s,E=Math.max(1,i.bottom-i.top),b=(T,D,y,M,L,B,H,ee,G)=>{let X=G-ee*T;return X=L>=D?Math.min(Math.max(X,D-L),0):(D-L)/2,Math.max(Math.min(X,M-H*T),y-B*T)},I=T=>[b(T,n,0,n,a[0]*T,v,f,u[0],n/2),b(T,e,i.top,i.bottom,a[1]*T,m,S,(m+S)/2,(i.top+i.bottom)/2)];d=Math.min(d,E/(S-m),n/(f-v)),p=I(d);const C=r?Av(r.outline):[];if(r&&!Rv(C,d,p,n,e,r)){const T=d,D=12,y=Math.max(T*wv,Math.min(T,Math.max(n/a[0],e/a[1])));let M=null;const L=Math.floor(n*Tv/8);for(let B=0;B<=D&&(M==null?void 0:M.covered)!==0;B++){const H=T-(T-y)*B/D,[ee,G]=I(H),X=a[0]*H;let ie=i.top-m*H,W=i.bottom-S*H;const he=Math.max(ie,e-a[1]*H),fe=Math.min(W,0);he<=fe&&([ie,W]=[he,fe]);for(let ge=0;ge<=2*L&&(M==null?void 0:M.covered)!==0;ge++){const Ae=ee+(ge%2?1:-1)*Math.ceil(ge/2)*8;if(Ae+v*H<-1e-6||Ae+f*H>n+1e-6||ee<=1e-6&&ee+X>=n-1e-6&&(Ae>1e-6||Ae+X<n-1e-6))continue;const qe=Pv(C,H,Ae,ie,W,G,n,e,r);qe&&(!M||qe.covered<M.covered)&&(M={scale:H,offset:[Ae,qe.oy],covered:qe.covered})}}M&&({scale:d,offset:p}=M)}}const g=p[0]<=1e-6&&p[1]<=1e-6&&p[0]+a[0]*d>=n-1e-6&&p[1]+a[1]*d>=e-1e-6;return{scale:d,offset:p,cover:g}}function Iv(n,e){return Math.abs(n.scale-e.scale)>1e-6*Math.max(n.scale,e.scale)||Math.hypot(n.offset[0]-e.offset[0],n.offset[1]-e.offset[1])>1e-6}function Lv(n){const e=[];let t=0;const i=(s,r)=>{const[a,o,l,c]=n.gates[s].art;e.push({gate:s,kind:r,x:t,y:0,w:l-a,h:c-o}),t+=l-a};return n.gates.forEach((s,r)=>i(r,"sealed")),n.gates.forEach((s,r)=>{s.front!==void 0&&i(r,"front")}),{size:[t,Math.max(...n.gates.map(s=>s.art[3]-s.art[1]))],rects:e}}const et=(n,e,t,i,s,r)=>({id:n,branch:e,slot:t,cost:t==="cap"?2:1,name:i,effect:s,counters:r}),yi=[et("core-lens","core","I-a","เลนส์โฟกัส","ลูกศรอีเธอร์แรงขึ้น 20% และเจาะเกราะ 50%",["armor"]),et("core-mine","core","I-b","เหมืองอีเธอร์","พลังงานจากการกำจัดศัตรูเพิ่ม 15%",[]),et("core-nova-power","core","II-A","โนวาทำลายล้าง","Nova แรงขึ้น 60% และผลักศัตรูถอยหลัง",["armor","shield"]),et("core-nova-rush","core","II-B","โนวาเร่งรอบ","คูลดาวน์ Nova ลดจาก 25 เหลือ 16 วินาที",[]),et("core-nova-freeze","core","III-A","โนวาเยือกแข็ง","Nova ทำให้ศัตรูหยุดนิ่ง 1.2 วินาที",["dash"]),et("core-nova-awaken","core","III-B","โนวาปลุกพลัง","หลังใช้ Nova ทุกการโจมตีของป้อมยิงเร็วขึ้น 25% นาน 5 วินาที",["regen"]),et("core-prism","core","cap","แกนปริซึม","ลูกศรอีเธอร์ยิง 3 เป้าพร้อมกัน (เป้ารองแรง 25%) และเก็บ Nova ได้ 2 ครั้ง",["flying","split"]),et("fire-fuel","fire","I-a","เชื้อเพลิงเข้ม","ไฟเผานานขึ้น 60%",["regen"]),et("fire-blast","fire","I-b","ระเบิดกว้าง","รัศมีระเบิดเพิ่ม 25%",["split"]),et("fire-meteor","fire","II-A","อุกกาบาต","คูลดาวน์ยาวขึ้น 40% ดาเมจ ×2.4 และไม่สนเกราะ",["armor"]),et("fire-wildfire","fire","II-B","ไฟลาม","ศัตรูที่ติดไฟตาย ไฟจะลามไปหาศัตรูใกล้ ๆ อีก 2 ตัว",["split"]),et("fire-lava","fire","III-A","หลุมลาวา","อุกกาบาตทิ้งลาวาไว้ 3 วินาที ลาวาทำให้ศัตรูบนพื้นติดไฟ",["regen"]),et("fire-stack","fire","III-B","ไฟซ้อน","ไฟเผาซ้อนกันได้ 3 ชั้น",["regen"]),et("fire-sunfall","fire","cap","สุริยะถล่ม","ทุกนัดที่ 3 เป็นอุกกาบาตยักษ์ ดาเมจ ×2.5 รัศมี ×1.6",["armor","split"]),et("frost-chill","frost","I-a","ความหนาวลึก","ศัตรูที่โดน Frost ช้าลงอีก 10%",["dash"]),et("frost-wide","frost","I-b","ลมหนาวกว้าง","รัศมี Frost เพิ่ม 25%",["dash","split"]),et("frost-glacier","frost","II-A","ธารน้ำแข็ง","ศัตรูที่โดน Frost ครบ 3 ครั้ง จะหยุดนิ่ง 1 วินาที",["dash","boss"]),et("frost-brittle","frost","II-B","เปราะแตก","ตัวที่โดนชะลอรับดาเมจเพิ่ม 20% และโดนเจาะเกราะ 50%",["armor","shield"]),et("frost-field","frost","III-A","ทุ่งน้ำแข็ง","ทิ้งน้ำแข็งไว้ 4 วินาที ชะลอศัตรูบนพื้นที่เดินเข้า",["dash"]),et("frost-shatter","frost","III-B","แตกกระจาย","ตัวที่ตายขณะโดนชะลอ ระเบิดเศษน้ำแข็งใส่ตัวรอบ ๆ",["split"]),et("frost-ice-age","frost","cap","ยุคน้ำแข็ง","พายุหิมะรัศมี 9 รอบป้อม ชะลอศัตรูในนั้น 25% และ Frost ยิงเร็วขึ้น 25%",["flying","dash"]),et("storm-conductor","storm","I-a","ตัวนำไฟฟ้า","ชิ่งเพิ่ม 2 เป้า (ฟ้าผ่าก็โดนเพิ่ม 2 เป้า) และระยะชิ่งเพิ่ม 15%",["split"]),et("storm-overcharge","storm","I-b","ประจุเกิน","เป้าแรกรับดาเมจเพิ่ม 50% และทำดาเมจใส่โล่ 3 เท่า",["shield"]),et("storm-chain","storm","II-A","ลูกโซ่ไม่ขาด","ดาเมจไม่ลดตามการชิ่ง และระยะชิ่งไกลขึ้น 50% จึงชิ่งไปเลนอื่นได้ไกลขึ้น",["split","flying"]),et("storm-thunder","storm","II-B","ฟ้าผ่า","โดน 2 เป้า (4 เป้าเมื่อมีตัวนำไฟฟ้า) แต่เป้าแรกรับดาเมจ ×3 และหยุดนิ่ง 0.5 วินาที",["armor","shield","boss"]),et("storm-static","storm","III-A","สนามประจุ","ตัวที่มีประจุ เมื่อโดน Fire หรือ Frost จะปล่อยสายฟ้าแรง 40% ไปหาตัวข้าง ๆ (ต้องมี Fire หรือ Frost)",[]),et("storm-clap","storm","III-B","ฟ้าคำราม","ฟ้าผ่าสร้างคลื่นกระแทกรัศมี 2 แรง 50% ของฟ้าผ่า ใส่ศัตรูรอบ ๆ",["split"]),et("storm-tempest","storm","cap","พายุคลั่ง","ทุก 6 วินาที ฟ้าผ่าลงศัตรู 5 ตัว",["flying","shield"])],Dv=new Map(yi.map(n=>[n.id,n])),Si=["core","fire","frost","storm"],Qn={core:"แกนป้อม",fire:"FIRE",frost:"FROST",storm:"STORM"};function Ct(n){const e=Dv.get(n);if(!e)throw new Error(`Unknown skill node ${n}`);return e}function bn(n,e){return yi.find(t=>t.branch===n&&t.slot===e)}const Re={lens:{damage:1.2,pierce:.5},mine:{gold:1.15},novaPower:{damage:1.6,push:.06,bossPush:.3},novaRush:{cooldown:16},novaFreeze:{stun:1.2},novaAwaken:{rate:1.25,duration:5},prism:{targets:3,splash:.25,charges:2},fuel:{burn:1.6},blast:{radius:1.25},meteor:{cooldown:1.4,damage:2.4},wildfire:{radius:2.5,count:2,depth:2},lava:{radius:2,life:3},stack:{max:3},sunfall:{every:3,damage:2.5,radius:1.6,delay:.6},chill:{slow:.1,floor:.2},wide:{radius:1.25},glacier:{hits:3,stun:1},brittle:{taken:1.2,pierce:.5},field:{radius:2.5,life:4,slow:.3},shatter:{ratio:.3,radius:2,cap:3},iceAge:{radius:9,speed:.75,rate:1.25},conductor:{jumps:2,range:1.15},overcharge:{first:1.5,shield:3},chain:{range:1.5},thunder:{targets:2,first:3,stun:.5},staticField:{life:3,ratio:.4},clap:{radius:2,ratio:.5},tempest:{every:6,strikes:5},respec:{base:150,step:100},zoneCap:12},Rc=new Map;function Pi(n){const e=[...n.skills].sort().join(","),t=Rc.get(e);if(t)return t;const i=a=>n.skills.includes(a),s=Re,r={boltDamage:i("core-lens")?s.lens.damage:1,boltPierce:i("core-lens")?s.lens.pierce:0,boltTargets:i("core-prism")?s.prism.targets:1,goldMul:i("core-mine")?s.mine.gold:1,novaDamage:i("core-nova-power")?s.novaPower.damage:1,novaPush:i("core-nova-power")?s.novaPower.push:0,novaCooldown:i("core-nova-rush")?s.novaRush.cooldown:25,novaStun:i("core-nova-freeze")?s.novaFreeze.stun:0,novaAwaken:i("core-nova-awaken"),novaCharges:i("core-prism")?s.prism.charges:1,burnDuration:i("fire-fuel")?s.fuel.burn:1,fireRadius:i("fire-blast")?s.blast.radius:1,meteor:i("fire-meteor"),wildfire:i("fire-wildfire"),lava:i("fire-lava"),burnStacks:i("fire-stack")?s.stack.max:1,sunfall:i("fire-sunfall"),slowBonus:i("frost-chill")?s.chill.slow:0,frostRadius:i("frost-wide")?s.wide.radius:1,glacier:i("frost-glacier"),brittle:i("frost-brittle"),iceField:i("frost-field"),shatter:i("frost-shatter"),iceAge:i("frost-ice-age"),stormJumps:i("storm-conductor")?s.conductor.jumps:0,stormRange:(i("storm-conductor")?s.conductor.range:1)*(i("storm-chain")?s.chain.range:1),stormFirst:i("storm-overcharge")?s.overcharge.first:1,stormShield:i("storm-overcharge")?s.overcharge.shield:2,endlessChain:i("storm-chain"),thunderstrike:i("storm-thunder"),staticField:i("storm-static"),thunderclap:i("storm-clap"),tempest:i("storm-tempest")};return Rc.set(e,r),r}function Qh(n,e){return n.skills.reduce((t,i)=>t+(Ct(i).branch===e?Ct(i).cost:0),0)}function qr(n,e){const t=Ct(e),i=a=>n.skills.includes(a);if(i(e))return{state:"owned"};const s=bn(t.branch,"II-A"),r=bn(t.branch,"II-B");if((t.slot==="II-A"||t.slot==="III-A")&&i(r.id))return{state:"blocked",reason:`เลือกทาง ${r.name} แล้ว`};if((t.slot==="II-B"||t.slot==="III-B")&&i(s.id))return{state:"blocked",reason:`เลือกทาง ${s.name} แล้ว`};if(t.slot==="cap"){const a=n.skills.map(Ct).find(o=>o.slot==="cap");if(a)return{state:"blocked",reason:`มีขั้นสูงสุด ${a.name} แล้ว · เลือกได้ 1 ตัวต่อรอบ`}}return(t.branch==="core"?!n.built:n.levels[t.branch]<1)?{state:"locked",reason:t.branch==="core"?"สร้างป้อมก่อน":`ต้องปลดล็อก ${Qn[t.branch]} ด้วยพลังงานก่อน`}:(t.slot==="II-A"||t.slot==="II-B")&&!i(bn(t.branch,"I-a").id)&&!i(bn(t.branch,"I-b").id)?{state:"locked",reason:"ต้องมีโหนดชั้น I ในสายนี้ก่อน"}:t.slot==="III-A"&&!i(s.id)?{state:"locked",reason:`ต้องมี ${s.name} ก่อน`}:t.slot==="III-B"&&!i(r.id)?{state:"locked",reason:`ต้องมี ${r.name} ก่อน`}:t.slot==="cap"&&Qh(n,t.branch)<4?{state:"locked",reason:"ต้องใช้ข้อมูลวิจัยในสายนี้ครบ 4 หน่วย"}:n.skillPoints<t.cost?{state:"locked",reason:`ต้องมีข้อมูลวิจัย ${t.cost} หน่วย`}:{state:"available"}}function Uv(n,e){const t=[];if(n.phase==="victory"||n.phase==="defeat")return{ok:!1,message:"การต่อสู้จบแล้ว",events:t};const i=qr(n,e);if(i.state!=="available")return{ok:!1,message:i.state==="owned"?"ปลดโหนดนี้แล้ว":i.reason,events:t};const s=Ct(e);return n.skillPoints-=s.cost,n.skills.push(e),t.push({type:s.slot==="cap"?"capstone":"skill",node:e,element:s.branch==="core"?"arcane":s.branch}),{ok:!0,message:`ปลด ${s.name} แล้ว`,events:t}}function eu(n){return Re.respec.base+Re.respec.step*n.respecCount}function Nv(n){const e=[];if(n.phase!=="ready")return{ok:!1,message:"รีเซ็ตได้ระหว่างระลอกเท่านั้น",events:e};if(!n.skills.length)return{ok:!1,message:"ยังไม่มีโหนดให้รีเซ็ต",events:e};const t=eu(n);if(n.gold<t)return{ok:!1,message:`ต้องการ ${t} พลังงานเพื่อรีเซ็ต`,events:e};const i=n.skills.reduce((s,r)=>s+Ct(r).cost,0);return n.gold-=t,n.skillPoints+=i,n.skills=[],n.respecCount++,n.novaCharges=Math.min(n.novaCharges,1),n.runtime.haste=0,e.push({type:"respec",value:i}),{ok:!0,message:`รีเซ็ตผังทักษะแล้ว คืนข้อมูลวิจัย ${i} หน่วย`,events:e}}function Fv(n,e){const t=Ct(e),i=r=>n.skills.includes(r),s=[t.branch==="core"?{label:"สร้างป้อมแล้ว",met:n.built}:{label:`ปลดล็อก ${Qn[t.branch]} ด้วยพลังงานแล้ว`,met:n.levels[t.branch]>=1}];if(t.slot==="II-A"||t.slot==="II-B"){const r=bn(t.branch,"I-a"),a=bn(t.branch,"I-b"),o=bn(t.branch,t.slot==="II-A"?"II-B":"II-A");s.push({label:`มี ${r.name} หรือ ${a.name}`,met:i(r.id)||i(a.id)}),s.push({label:`ยังไม่ได้เลือกทาง ${o.name}`,met:!i(o.id)})}if(t.slot==="III-A"||t.slot==="III-B"){const r=bn(t.branch,t.slot==="III-A"?"II-A":"II-B");s.push({label:`มี ${r.name}`,met:i(r.id)})}if(t.slot==="cap"){const r=n.skills.map(Ct).find(a=>a.slot==="cap"&&a.id!==e);s.push({label:"ใช้ข้อมูลวิจัยในสายนี้ครบ 4 หน่วย",met:Qh(n,t.branch)>=4}),s.push({label:"ยังไม่มีขั้นสูงสุดสายอื่น",met:!r})}return s.push({label:`มีข้อมูลวิจัย ${t.cost} หน่วย`,met:i(e)||n.skillPoints>=t.cost}),s}function Ov(n){const e=Ct(n);if(e.slot==="II-A"||e.slot==="II-B"){const t=bn(e.branch,e.slot==="II-A"?"II-B":"II-A"),i=bn(e.branch,e.slot==="II-A"?"III-B":"III-A");return`เลือกทางนี้จะปิด ${t.name} และ ${i.name}`}return e.slot==="cap"?"เลือกขั้นสูงสุดได้ครั้งละ 1 สาย เปลี่ยนได้เมื่อรีเซ็ตผัง":null}const Ai=["split","flying","regen","armor","dash","shield"],Ks={"green-blob":{trait:"split"},demon:{trait:"flying"},orc:{trait:"regen",regen:.04},"orc-skull":{trait:"regen",regen:.07},yeti:{trait:"armor"},alien:{trait:"dash"},"mushroom-king":{trait:"shield"},"blue-demon":{trait:"flying",stunImmune:!0}},ct={split:{count:2,hp:.2,speed:1.3,radius:.6,reward:1,leakDamage:.5,aliveCap:60,maxProgress:.92},regen:{delay:1.5},armor:{floor:.25,dot:.5},dash:{every:4,telegraph:.3,duration:.8,speed:2.5},shield:{ratio:.5,bossRatio:.6,delay:4,regen:.1,storm:2,fire:1},flying:{storm:1.25},stun:{immunity:2,boss:.3}},kv=Object.freeze({shield:0,maxShield:0,armor:0,sinceDamage:0,dashTimer:0,dashLeft:0,stun:0,stunImmune:0,mini:!1,frostHits:0,charged:0,burnStacks:0,burnDepth:0});function mn(n){return Ks[n].trait}function Bv(n){const e=Math.max(0,n-1);return 6*(1+.17*e+.026*e*e)}function tu(n,e,t,i,s){const r=mn(n),a=r==="shield"?Math.round(t*(e?ct.shield.bossRatio:ct.shield.ratio)):0;return{...kv,shield:a,maxShield:a,armor:r==="armor"?Bv(i):0,dashTimer:r==="dash"?ct.dash.every-s%4*.5:0}}function nu(n,e){return Math.max(Re.chill.floor,Math.max(.45,.8-.025*n)-e)}function iu(n,e){return mn(n)==="flying"?1-(1-e)/2:e}function zv(n,e){const t={damage:0,blocked:0,shieldDamage:0,shieldBroken:!1};if(n.hp<=0||!(e.amount>0))return t;let i=e.amount*(e.taken??1);if(mn(n.kind)==="flying"&&e.element==="storm"&&(i*=ct.flying.storm),n.shield>0){const s=e.element==="storm"?e.stormShield??ct.shield.storm:e.element==="fire"?ct.shield.fire:1,r=Math.min(n.shield,i*s);n.shield-=r,t.shieldDamage=r,i=Math.max(0,i-r/s),n.shield<=1e-9&&(n.shield=0,t.shieldBroken=!0)}if(i>0&&n.armor>0){const s=Math.min(1,Math.max(0,e.pierce??0)),r=i;i=e.dot?i*ct.armor.dot:Math.max(i*ct.armor.floor,i-n.armor*(1-s)),t.blocked=r-i}return n.hp=Math.max(0,n.hp-i),n.sinceDamage=0,t.damage=i,t}function Hv(n,e){return n.hp<=0||!(e>0)||Ks[n.kind].stunImmune||n.stunImmune>0?!1:(n.stun=Math.max(n.stun,e*(n.boss?ct.stun.boss:1)),!0)}function Rs(n,e){return n-e>1e-9?n-e:0}function Vv(n,e,t,i){const s=Ks[n.kind];n.sinceDamage+=e,n.charged=Rs(n.charged,e),n.stun>0?(n.stun=Rs(n.stun,e),n.stun===0&&(n.stunImmune=ct.stun.immunity)):n.stunImmune=Rs(n.stunImmune,e);const r=n.stun>0;s.trait==="regen"&&n.sinceDamage>=ct.regen.delay&&n.burn<=0&&n.hp<n.maxHp&&(n.hp=Math.min(n.maxHp,n.hp+n.maxHp*(s.regen??0)*e)),n.maxShield>0&&n.sinceDamage>=ct.shield.delay&&n.shield<n.maxShield&&(n.shield=Math.min(n.maxShield,n.shield+n.maxShield*ct.shield.regen*e));let a=1;return s.trait==="dash"&&(t||r?(n.dashTimer=ct.dash.every,n.dashLeft=0):(n.dashTimer=Rs(n.dashTimer,e),n.dashTimer===0&&(n.dashTimer=ct.dash.every,n.dashLeft=ct.dash.duration,i.push({type:"dash",target:n.id,kind:n.kind,lane:n.lane,to:{x:n.x,z:n.z}})),n.dashLeft>0&&(a=ct.dash.speed,n.dashLeft=Rs(n.dashLeft,e)))),{move:!r,speed:a}}const Gv={"green-blob":1,alien:1,demon:1,"blue-demon":1,yeti:1,"mushroom-king":1,orc:.75,"orc-skull":.75};function Wv(n,e){return Gv[n]*(e.boss?Zh:e.mini?ct.split.radius:1)}const $v=.56;function Xv(n){return Math.min(Jh,Math.max(1,$v/n))}function qv(n,e,t){const[i,s]=n.bind;return Math.min(Math.min(3.4,e.height*t)/i,Math.min(3.2,e.footprint*t)/s)}function Yv(n,e){if(e>=.5){const s=n*.6;return[{dx:s*.1,dy:s*.04,w:s,h:s*.32,alpha:.2}]}const t=n*1.25,i=n*.95;return[{dx:t*.22,dy:t*.07,w:t,h:t*.34,alpha:.36},{dx:0,dy:i*.08,w:i,h:i*.32,alpha:.58}]}const Kv={alien:{ground:16742938,air:16756794}};function jv(n,e){const t=Kv[n];if(!t)return[];const i=e*2.1,s=e*1.9;return[{dx:0,dy:e*.1,w:i,h:i*.45,color:t.ground,k:.6},{dx:0,dy:-e*.45,w:s,h:s,color:t.air,k:.35}]}class Zv{constructor(e,t,i,s,r,a){R(this,"quads",[]);this.layout=i,this.backZ=s,this.depthOf=r;const o=Lv(i),[l,c]=o.size;for(const h of o.rects){const u=new gn(1,1),d=u.attributes.uv;for(let v=0;v<d.count;v++)d.setXY(v,(h.x+d.getX(v)*h.w)/l,1-(h.y+(1-d.getY(v))*h.h)/c);const p=new qt({map:t,transparent:!0,depthWrite:!1}),g=new Ht(u,p);g.frustumCulled=!1,g.renderOrder=this.inDepthOrder(h)?a.body:a.back,e.add(g),this.quads.push({rect:h,mesh:g})}}inDepthOrder(e){return this.layout.gates[e.gate].front!==void 0}update(e,t){const i=e.scale,[s,r]=e.offset;for(const{rect:a,mesh:o}of this.quads){const l=this.layout.gates[a.gate],[c,h,u,d]=l.art,p=a.kind==="sealed",g=p?1-t:1;o.visible=g>.001,o.material.opacity=g;const v=l.front===void 0?this.backZ:this.depthOf(r+l.front*i)+(p?.01:0);o.position.set(s+(c+u)/2*i,-(r+(h+d)/2*i),v),o.scale.set((u-c)*i,(d-h)*i,1)}}get drawn(){return this.quads.filter(e=>e.mesh.visible).length}}const ps={x:0,z:0},ft=n=>({x:n.x,z:n.z}),En=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z),hl=n=>(e,t)=>En(e,n)-En(t,n);function Yr(n){return n.state.runtime.haste>0?Re.novaAwaken.rate:1}function su(n,e){return n*e.boltDamage}function ru(n,e){return(15+n*12)*(e.meteor?Re.meteor.damage:1)}function ul(n){return 7+5*n}function au(n,e){return(18+n*14)*e.stormFirst*(e.thunderstrike?Re.thunder.first:1)}function dl(n){return au(n.state.levels.storm,n.mods)}function Jv(n,e){return e.thunderstrike?Re.thunder.targets+e.stormJumps:Math.min(20,3+n+e.stormJumps)}function ou(n,e){return(5.2+.15*n)*e}function lu(n){return ou(n.state.levels.storm,n.mods.stormRange)}function fl(n,e,t,i){Hv(e,t)&&n.events.push({type:"stun",element:i,target:e.id,to:ft(e),value:e.stun})}function pl(n,e,t){const i=e.burn>0;e.burn=Math.max(e.burn,2.8*n.mods.burnDuration),e.burnStacks=Math.min(n.mods.burnStacks,e.burnStacks+1),e.burnDepth=i?Math.min(e.burnDepth,t):t}function cu(n,e){if(!n.mods.staticField||e.charged<=0||!n.state.levels.storm)return;e.charged=0;const t=n.living().filter(s=>s!==e&&En(s,e)<lu(n)).sort(hl(e))[0];if(!t)return;const i=dl(n)*Re.staticField.ratio;n.events.push({type:"discharge",element:"storm",target:t.id,from:ft(e),to:ft(t),damage:i}),n.damage(t,i,"storm",{from:ft(e)})}function hu(n,e,t,i,s){const r=n.state.zones;r.length>=Re.zoneCap&&r.shift();const a={id:n.state.runtime.nextZoneId++,kind:e,x:t.x,z:t.z,radius:i,life:s};r.push(a),n.events.push({type:"zone",element:e==="lava"?"fire":"frost",target:a.id,to:t,value:i})}function uu(n,e,t,i,s,r){const a=n.living().filter(o=>En(o,e)<=t);n.events.push({type:s?"meteor-impact":"shot",element:"fire",target:r,from:ps,to:e,targets:a.map(ft),value:t});for(const o of a)pl(n,o,0),n.damage(o,i,"fire",{from:e,pierce:n.mods.meteor?1:0}),cu(n,o);n.mods.lava&&n.mods.meteor&&hu(n,"lava",e,Re.lava.radius,Re.lava.life)}function Qv(n){const e=n.state.runtime;if(e.boltTimer>0)return;const t=n.aim(n.stats.range).slice(0,n.mods.boltTargets);if(!t.length)return;const i=su(n.stats.damage,n.mods);t.forEach((s,r)=>{const a=i*(r?Re.prism.splash:1);n.events.push({type:"shot",element:"arcane",target:s.id,from:ps,to:ft(s),damage:a}),n.damage(s,a,"arcane",{pierce:n.mods.boltPierce})}),e.boltTimer=1/(n.stats.rate*Yr(n))}function e_(n){const{state:e,mods:t}=n,i=e.levels.fire;if(!i||e.runtime.fireTimer>0)return;const s=n.aim(n.stats.range)[0];if(!s)return;e.runtime.fireShots++;const r=t.sunfall&&e.runtime.fireShots%Re.sunfall.every===0,a=(2.35+.13*i)*t.fireRadius*(r?Re.sunfall.radius:1),o=ru(i,t)*(r?Re.sunfall.damage:1);r?(e.runtime.strikes.push({x:s.x,z:s.z,radius:a,damage:o,life:Re.sunfall.delay}),n.events.push({type:"meteor-warning",element:"fire",target:s.id,to:ft(s),value:a})):uu(n,ft(s),a,o,!1,s.id),e.runtime.fireTimer=Math.max(.75,2.15-.075*i)*(t.meteor?Re.meteor.cooldown:1)/Yr(n)}function t_(n){const{state:e,mods:t}=n,i=e.levels.frost;if(!i||e.runtime.frostTimer>0)return;const s=n.aim(n.stats.range+.8)[0];if(!s)return;const r=(3.1+.16*i)*t.frostRadius,a=n.living().filter(o=>En(o,s)<=r);n.events.push({type:"shot",element:"frost",target:s.id,from:ps,to:ft(s),targets:a.map(ft),value:r});for(const o of a)o.slow=Math.max(o.slow,3.1+.25*i),n.damage(o,ul(i),"frost"),t.glacier&&o.hp>0&&++o.frostHits>=Re.glacier.hits&&(o.frostHits=0,fl(n,o,Re.glacier.stun,"frost")),cu(n,o);t.iceField&&hu(n,"ice",ft(s),Re.field.radius,Re.field.life),e.runtime.frostTimer=Math.max(1,3.05-.09*i)/(t.iceAge?Re.iceAge.rate:1)/Yr(n)}function n_(n){const{state:e,mods:t}=n,i=e.levels.storm;if(!i||e.runtime.stormTimer>0)return;const s=n.aim(n.stats.range+.4)[0];if(!s)return;const r=Jv(i,t),a=[s];for(;a.length<r;){const c=a[a.length-1],h=n.living().filter(u=>!a.includes(u)&&En(u,c)<lu(n)).sort(hl(c))[0];if(!h)break;a.push(h)}const o=18+i*14,l=dl(n);if(n.events.push({type:"shot",element:"storm",target:s.id,from:ps,to:ft(s),targets:a.map(ft),value:t.thunderstrike?1:0}),a.forEach((c,h)=>{const u=h===0?l:o*(t.endlessChain?1:Math.max(.55,1-h*.06));n.damage(c,u,"storm",{from:h===0?ps:ft(a[h-1])}),t.staticField&&c.hp>0&&(c.charged=Re.staticField.life)}),t.thunderstrike&&(fl(n,s,Re.thunder.stun,"storm"),t.thunderclap))for(const c of n.living().filter(h=>h!==s&&En(h,s)<=Re.clap.radius))n.damage(c,l*Re.clap.ratio,"storm",{from:ft(s)});e.runtime.stormTimer=Math.max(.65,2.2-.08*i)/Yr(n)}function i_(n){const e=n.state.runtime;if(!n.mods.tempest||!n.state.levels.storm||e.tempestTimer>0)return;const t=n.aim(n.stats.range+.4);if(!t.length)return;e.tempestTimer=Re.tempest.every;const i=dl(n);for(let s=0;s<Re.tempest.strikes&&t.length;s++){const[r]=t.splice(Math.floor(n.random()*t.length),1);n.events.push({type:"tempest",element:"storm",target:r.id,to:ft(r),damage:i}),n.damage(r,i,"storm")}}function s_(n){Qv(n),e_(n),t_(n),n_(n),i_(n)}function r_(n,e){const t=n.state.runtime;t.haste=Math.max(0,t.haste-e),t.tempestTimer=Math.max(0,t.tempestTimer-e);for(const s of t.strikes)s.life-=e;const i=t.strikes.filter(s=>s.life<=1e-9);t.strikes=t.strikes.filter(s=>s.life>1e-9);for(const s of i)uu(n,s,s.radius,s.damage,!0);for(const s of n.state.zones)s.life-=e;if(n.state.zones=n.state.zones.filter(s=>s.life>1e-9),!!n.state.zones.length){for(const s of n.living())if(mn(s.kind)!=="flying")for(const r of n.state.zones)En(s,r)>r.radius||(r.kind==="lava"?pl(n,s,0):s.slow=Math.max(s.slow,Re.field.slow))}}function a_(n){const{state:e,mods:t}=n,i=n.aim(15.6);if(!i.length)return!1;e.novaCharges--,e.cooldown===0&&(e.cooldown=t.novaCooldown),n.events.push({type:"nova",element:"arcane",from:ps,targets:i.map(ft),value:t.novaPush>0?1:0});const s=(72+e.core*12)*t.novaDamage;for(const r of i)n.damage(r,s,"arcane"),r.slow=Math.max(r.slow,2),t.novaStun&&r.hp>0&&fl(n,r,t.novaStun,"arcane");if(t.novaPush)for(const r of i.filter(a=>a.hp>0).sort((a,o)=>a.progress-o.progress))n.retreat(r,Math.max(0,r.progress-Yh(r.lane,t.novaPush*(r.boss?Re.novaPower.bossPush:1))));return t.novaAwaken&&(e.runtime.haste=Re.novaAwaken.duration),!0}function o_(n,e){if(n.mods.wildfire&&e.burn>0&&e.burnDepth<Re.wildfire.depth){const t=n.living().filter(i=>i!==e&&i.burn<=0&&En(i,e)<=Re.wildfire.radius).sort(hl(e)).slice(0,Re.wildfire.count);for(const i of t)pl(n,i,e.burnDepth+1),n.events.push({type:"spread",element:"fire",target:i.id,from:ft(e),to:ft(i)})}if(n.mods.shatter&&e.slow>0){const t=Math.min(e.maxHp*Re.shatter.ratio,ul(n.state.levels.frost)*Re.shatter.cap),i=n.living().filter(s=>s!==e&&En(s,e)<=Re.shatter.radius);n.events.push({type:"shatter",element:"frost",target:e.id,to:ft(e),targets:i.map(ft),damage:t});for(const s of i)n.damage(s,t,"frost",{from:ft(e)})}}const Fa={energy:"พลังงานรอยแยก",research:"ข้อมูลวิจัย"},l_=["เราพบวิธีปิดประตูอย่างปลอดภัย เหนือเมฆ เงียบจนได้ยินเสียงประตู","พอเริ่มปิดประตู พวกมันก็เข้าหาแสง","บางตัวหยุดตรงขอบ ราวกับหวงพื้นที่","เปลือกของมัน เก็บพลังงานเป็นจังหวะ","รอยแยกแคบลง แต่พลังงานยังแกว่งอยู่","รับสัญญาณจาง ๆ จากเครือข่ายเก่า ยังไม่ทราบที่มา","บางตัวเลี่ยงแสง บางตัวยังคงตามมันมา","แรงสั่นเบาลง เราเริ่มวัดขอบประตูได้","สัญญาณเดิมกลับมา แล้วหายไปในความเงียบ","ขอบรอยแยกใกล้บรรจบ เราจะเฝ้าดูจนสุดทาง"],Cc=["คลังข้อมูลพร้อม เริ่มทบทวนการปิดประตู","ภาพจำลองแสดงจังหวะพลังงาน ที่เราเคยพบ","ลองสังเกตอีกครั้ง พฤติกรรมยังมีสิ่งให้เรียนรู้","หอคอยเก็บบันทึกไว้ ให้เราศึกษาต่อในความสงบ"],c_={split:"เมื่อร่างใหญ่แตก สิ่งมีชีวิตเล็กสองตัว ยังเคลื่อนไหวต่อ เรากำลังบันทึกวิธีอยู่รอด ของพวกมัน",flying:"มันลอยตามแนวพลังงานเหนือพื้นดิน ราวกับกำลังหาทางผ่าน ในอากาศที่ไม่คุ้นเคย",regen:"เมื่อไม่ถูกโจมตี ร่างของมันค่อย ๆ ประสาน ความร้อนทำให้กระบวนการนี้หยุดลง",armor:"มันก้มตัวปกป้องส่วนอ่อนใต้เปลือก เมื่อพลังงานผันผวน มันหันเข้าหาหอคอย",dash:"ก่อนพุ่ง ร่างของมันสว่างวาบ มันตอบสนองต่อจังหวะพลังงาน เร็วจนเราจับภาพแทบไม่ทัน",shield:"ม่านพลังหุ้มร่างของมัน ขณะเคลื่อนออกจากประตู ดูคล้ายขอบเขตเล็ก ๆ ที่มันพยายามรักษาไว้"},h_=[{id:"overload",kind:"orc-skull",note:"โกเลมผลึก · Overload ฟื้น HP 7% ต่อวินาที"},{id:"ion",kind:"blue-demon",note:"การ์กอยล์ · Ion บินได้ และหยุดนิ่งไม่ได้"},{id:"crown-boss",kind:"mushroom-king",boss:!0,note:"บอสวิญญาณ มีโล่ 60% ของ HP"},{id:"ion-boss",kind:"blue-demon",boss:!0,note:"บอสการ์กอยล์ · Ion บินได้ และหยุดนิ่งไม่ได้"}],Ge={towerLog:"บันทึกหอคอย",speaker:"ทีมวิจัยหอคอย",chapter:"บทที่ 1–2 · หอคอยและประตูมิติแห่งแรก",foundation:"หลายปีหลังหายนะ เราเริ่มสร้าง Element Tower เพื่อศึกษาพลังงานรอยแยก",gateProgress:"ความคืบหน้าการปิดรอยแยก",monsters:"มอนสเตอร์จากรอยแยก",watcher:"ผู้เฝ้าป้อม",loading:{initial:"กำลังเชื่อมต่อหอคอย…",progress:"กำลังเตรียมหอคอยและมอนสเตอร์จากรอยแยก"},research:{tab:"บันทึกวิจัย",intro:"มอนสเตอร์จากรอยแยก (Rift Monsters) เป็นสิ่งมีชีวิตจากต่างมิติ พลังงานที่ผันผวนระหว่างปิดประตู ดึงดูดพวกมันเข้าหาหอคอย",empty:"ยังไม่มีบันทึก พบสิ่งมีชีวิตระหว่างระลอก เพื่อเริ่มสังเกตพฤติกรรม",pending:"ความสามารถที่ยังไม่พบ จะบันทึกเมื่อปรากฏจริง ในรอบนี้",unlocked:"บันทึกวิจัยใหม่"},helpSteps:[{heading:"ผู้เฝ้าป้อม สร้างป้อมแล้วเริ่มระลอก",body:"Element Tower คือหอคอยวิจัย ที่ป้องกันเกาะอัตโนมัติ มอนสเตอร์จากรอยแยก เข้ามาทางประตู 3 จุด ปกป้องหอคอยให้ครบ 10 ระลอก เพื่อปิดประตูอย่างปลอดภัย"},{heading:"ใช้พลังงานรอยแยกเพิ่มพลัง",body:"พลังงานรอยแยก (Rift Energy) จากประตู แปลงเป็นธาตุ FIRE FROST STORM ใช้การ์ดด้านล่าง เพื่อเพิ่มพลังธาตุและระดับแกนป้อม"},{heading:"ใช้ข้อมูลวิจัยในผังทักษะ",body:"ได้ข้อมูลเมื่อสร้างป้อมและผ่านระลอก ใช้ปลดโหนด เพื่อปรับวิธีป้องกันเกาะ"},{heading:"ใช้ Nova ในจังหวะคับขัน",body:"ปล่อยพลังฉุกเฉินจากแกนป้อม แล้วรอชาร์จ"}],treeGuide:[{heading:"ข้อมูลวิจัย",body:"สร้างป้อม +1 · ผ่านระลอก +1 · ระลอกบอส (5, 10, …) เพิ่มอีก +1 · ก่อนระลอก 10 มีรวม 11 หน่วย"},{heading:"โครงของสาย",body:"4 สาย สายละ 7 โหนด: ชั้น I 2 โหนด → ทางแยก II เลือก 1 ทาง → ชั้น III ของทางนั้น → ขั้นสูงสุด ★"},{heading:"ขั้นสูงสุด",body:"ใช้ข้อมูลวิจัย 2 หน่วย ต้องใช้ในสายนั้นครบ 4 หน่วย และมีได้ 1 โหนดต่อรอบ"},{heading:"พลังงานกับข้อมูลวิจัย",body:"พลังงานซื้อระดับพลังและซ่อม · ข้อมูลวิจัยปลดโหนด · สายธาตุต้องปลดด้วยพลังงานก่อน"},{heading:"รีเซ็ต",body:"ทำได้เฉพาะระหว่างระลอก คืนข้อมูลวิจัยทั้งหมด ครั้งแรก 150 พลังงาน แพงขึ้นครั้งละ 100 พลังงาน"},{heading:"เปิดผังได้ทุกเวลา",body:'เกมหยุดขณะเปิด เลือกโหนดก่อน แล้วกด "ปลดโหนด" เพื่อยืนยัน'}],simulation:{label:"การจำลองจากคลังข้อมูลของหอคอย",short:"การจำลอง",action:"จำลองแบบไม่สิ้นสุด",start:"เริ่มการจำลองจากคลังข้อมูลของหอคอย",locked:"ปิดประตูแรกก่อน เพื่อใช้คลังข้อมูลของหอคอย",explanation:"ศึกษาต่อได้ด้วยการจำลอง จากคลังข้อมูลของหอคอย"},victory:{title:"ประตูแรกปิดลงแล้ว",lines:["เราปิดประตูได้อย่างปลอดภัย แผ่นดินใกล้เคียง ค่อย ๆ เชื่อมกัน","หอคอยใช้ข้อมูลวิจัย ควบคุมให้เกาะลดระดับลงช้า ๆ เมฆเคลื่อนผ่านขอบผา","พลังธาตุค่อย ๆ จาง งานวิจัยยังอยู่กับเรา","ผู้เฝ้าป้อม วันนี้เรารู้แล้วว่า เราฟื้นฟูโลกได้"]},defeat:{title:"หอคอยเงียบลง",line:"ประตูยังเปิดอยู่ บันทึกครั้งนี้ช่วยให้เรา เตรียมพร้อมครั้งต่อไป ลองปรับธาตุ ใช้ Nova และซ่อมป้อม",simulationTitle:"สิ้นสุดการจำลอง",simulationLine:"บันทึกการจำลองครั้งนี้ไว้แล้ว เรากลับมาทบทวน สิ่งที่เรียนรู้ได้เสมอ"}};function u_(n){return n.phase!=="build"&&n.phase!=="ready"?null:n.phase==="build"?Ge.foundation:n.endless?Cc[Math.max(0,n.wave-10)%Cc.length]:l_[n.wave]??null}function d_(n){return Ai.filter(e=>n.seenTraits.includes(e)).map(e=>({trait:e,note:c_[e]}))}function f_(n){return h_.filter(e=>n.seenMonsters.some(t=>t.kind===e.kind&&(e.boss===void 0||t.boss===e.boss)))}const du=10,ml={"green-blob":{hp:22,speed:1.05,reward:7,damage:8,radius:.825},demon:{hp:31,speed:1.24,reward:9,damage:10,radius:1.15},yeti:{hp:64,speed:.8,reward:13,damage:15,radius:1.025},orc:{hp:43,speed:1,reward:10,damage:12,radius:.925},"orc-skull":{hp:54,speed:.94,reward:12,damage:14,radius:.99},alien:{hp:25,speed:1.55,reward:10,damage:8,radius:.69},"mushroom-king":{hp:48,speed:.86,reward:11,damage:12,radius:1.025},"blue-demon":{hp:39,speed:1.35,reward:12,damage:11,radius:1.175}},fu=.1,pu=1e6,p_=1.3,m_={2:.8,3:.9,4:.85,5:.9};function On(n,e){return jh(n,e)}function js(n){const e=On(n.lane,n.progress),t=On(n.lane,n.progress-.002),i=On(n.lane,n.progress+.002),s=i.x-t.x,r=i.z-t.z,a=Math.hypot(s,r)||1,o=Math.floor((n.id-1)/3)%3-1,l=Math.min(1,Math.max(0,(1-n.progress)/mu)),c=o*Math.min(.85,Math.max(0,1.35-n.radius))*l;return{x:e.x-r/a*c,z:e.z+s/a*c}}const mu=.16,g_=.005;function gl(n,e,t){const i=js({...n,progress:e}),s=On(n.lane,e);return t.every(r=>{const a=n.radius+r.radius+fu+g_;return Vo(i,r)<a?!1:Math.max(e,r.progress)<1-mu||Vo(s,On(r.lane,r.progress))>=a})}function gu(){return{phase:"build",built:!1,wave:0,gold:320,hp:120,maxHp:120,kills:0,score:0,core:1,levels:{fire:0,frost:0,storm:0},enemies:[],spawned:0,total:0,extra:0,remaining:0,cooldown:0,novaCharges:1,skillPoints:0,skills:[],respecCount:0,zones:[],seed:20261015,paused:!1,speed:1,endless:!1,seenTraits:[],seenMonsters:[],time:0,runtime:{accumulator:0,spawnTimer:0,boltTimer:0,fireTimer:0,frostTimer:0,stormTimer:0,nextId:1,nextMiniId:pu,queue:[],splits:[],haste:0,fireShots:0,tempestTimer:0,strikes:[],nextZoneId:1}}}function vl(n,e){return Math.round(e==="core"?75*1.5**(n.core-1):{fire:80,frost:95,storm:110}[e]*1.55**n.levels[e])}function _l(n){return{damage:26+10*(n.core-1),range:Math.min(14.5,9.8+.36*(n.core-1)),rate:Math.min(4.5,1.5+.16*(n.core-1))}}function Us(n){return{x:n.x,z:n.z}}function Vo(n,e){return Math.hypot(n.x-e.x,n.z-e.z)}function Kr(n){return n.enemies.filter(e=>e.hp>0)}function v_(n){return n.seed=n.seed*1664525+1013904223>>>0,n.seed/4294967296}function vu(n,e){const t={state:n,events:e,mods:Pi(n),stats:_l(n),damage:(i,s,r,a={})=>__(t,i,s,r,a),aim:i=>w_(n,i),living:()=>Kr(n),retreat:(i,s)=>M_(n,i,s),random:()=>v_(n)};return t}function __(n,e,t,i,s){const{state:r,events:a,mods:o}=n;if(e.hp<=0)return;const l=o.brittle&&e.slow>0,c=l?1-(1-(s.pierce??0))*(1-Re.brittle.pierce):s.pierce,h=zv(e,{amount:t,element:i,dot:s.dot,pierce:c,taken:l?Re.brittle.taken:1,stormShield:o.stormShield});if(!s.silent&&!s.dot&&(a.push({type:"hit",element:i,target:e.id,from:s.from??{x:0,z:0},to:Us(e),damage:h.damage}),h.blocked>0&&a.push({type:"armor-block",element:i,target:e.id,to:Us(e),damage:h.blocked})),h.shieldBroken&&a.push({type:"shield-break",element:i,target:e.id,to:Us(e),kind:e.kind,boss:e.boss}),e.hp===0){const u=e.mini?ct.split.reward:Math.round(ml[e.kind].reward*(e.boss?6:1)*o.goldMul);r.gold+=u,r.kills++,r.score+=u*10+(e.boss?500:0),a.push({type:"kill",element:i,target:e.id,to:Us(e),kind:e.kind,boss:e.boss,value:u}),mn(e.kind)==="split"&&!e.mini&&x_(r,e),o_(n,e)}}function _u(n){return n.runtime.splits.reduce((e,t)=>e+t.count,0)}function xu(n){return n.total-n.spawned+n.enemies.length+_u(n)}function x_(n,e){const t=ct.split,i=Math.max(0,Math.min(t.count,t.aliveCap-Kr(n).length-_u(n)));i&&(n.extra+=i,n.runtime.splits.push({kind:e.kind,lane:e.lane,progress:e.progress,radius:e.radius,maxHp:e.maxHp,speed:e.speed,x:e.x,z:e.z,count:i}))}function M_(n,e,t){const i=n.enemies.filter(a=>a!==e&&a.hp>0&&a.lane===e.lane),s=a=>gl(e,a,i);let r=e.progress;for(;r>t+1e-9;){const a=Math.max(t,r-.005);if(!s(a))break;r=a}e.progress=r,Object.assign(e,js(e))}function b_(n,e){const t=Pi(n);if(n.novaCharges>=t.novaCharges){n.novaCharges=t.novaCharges,n.cooldown=0;return}n.cooldown=Math.max(0,n.cooldown-e),n.cooldown===0&&(n.novaCharges++,n.novaCharges<t.novaCharges&&(n.cooldown=t.novaCooldown))}function Mu(n,e){const t=ct.split;for(const i of n.runtime.splits){const s=i.radius*t.radius;for(const r of[0,-.07,.07,-.14,.14,-.21]){if(!i.count)break;const a=i.progress+Yh(i.lane,r);if(a<0||a>t.maxProgress)continue;const o=n.runtime.nextMiniId,l=js({id:o,lane:i.lane,progress:a,radius:s});if(!gl({id:o,lane:i.lane,radius:s},a,Kr(n).filter(h=>h.lane===i.lane)))continue;const c=Math.max(1,Math.round(i.maxHp*t.hp));n.enemies.push({...tu(i.kind,!1,c,n.wave,o),mini:!0,id:o,kind:i.kind,lane:i.lane,progress:a,hp:c,maxHp:c,speed:i.speed*t.speed,radius:s,boss:!1,slow:0,burn:0,...l}),n.runtime.nextMiniId++,i.count--,e.push({type:"split",target:o,kind:i.kind,lane:i.lane,from:{x:i.x,z:i.z},to:l})}}n.runtime.splits=n.runtime.splits.filter(i=>i.count>0)}function xl(n){const e=n.phase==="wave"?n.wave:n.wave+1,t=Go(e),i=Object.fromEntries(Ai.map(a=>[a,0]));for(const a of t)i[mn(a.kind)]++;const s=new Set;for(let a=1;a<e;a++)for(const o of Go(a))s.add(mn(o.kind));const r=t.filter(a=>a.boss);return{wave:e,total:t.length,traits:i,newTraits:Ai.filter(a=>i[a]>0&&!s.has(a)),boss:r.length?{kind:r[0].kind,trait:mn(r[0].kind),count:r.length,stunImmune:!!Ks[r[0].kind].stunImmune}:null,lanes:[0,1,2].map(a=>t.filter(o=>o.lane===a).length),mainLane:bu(e)}}function bu(n){return[1,0,2][((n-1)%3+3)%3]}function y_(n,e){const t=bu(n),i=[0,1,2].filter(l=>l!==t),{main:s,of:r}=qh,a=e%r;return Math.floor((a+1)*s/r)>Math.floor(a*s/r)?t:i[(e-Math.floor((e+1)*s/r))%2]}function Go(n){const e=["green-blob","demon"];n>=2&&e.push("orc"),n>=3&&e.push("yeti","mushroom-king"),n>=4&&e.push("alien","orc-skull"),n>=6&&e.push("blue-demon");const t=Math.min(170,18+(n-1)*12),i=[];for(let s=0;s<t;s++){const r=n%5===0&&(s===t-1||n>=10&&s===Math.floor(t*.55)),a=r?n%10===0?"blue-demon":"mushroom-king":n===1?"green-blob":e[(s*7+Math.floor(s/3)+n)%e.length],o=r?n>=10&&s===t-1?2:1:y_(n,s);i.push({kind:a,lane:o,boss:r})}return i}function S_(n,e){const t=n.runtime.queue[n.spawned];if(!t)return!1;const i=ml[t.kind],s=1+1.35*(n.wave-1)+.026*(n.wave-1)**2,r=Math.round(i.hp*s*(t.boss?1.5:1)*p_*(m_[n.wave]??1)),a=n.runtime.nextId,o=Math.min(1.6,i.radius*(t.boss?1.55:1)),l=js({id:a,lane:t.lane,progress:0,radius:o});if(n.enemies.some(p=>p.hp>0&&p.lane===t.lane&&Vo(p,l)<p.radius+o+fu))return!1;const c={...tu(t.kind,t.boss,r,n.wave,a),id:a,kind:t.kind,lane:t.lane,progress:0,hp:r,maxHp:r,speed:i.speed*(1+Math.min(.4,(n.wave-1)*.018))*(t.boss?.68:1),radius:o,boss:t.boss,slow:0,burn:0,...l};n.enemies.push(c),n.runtime.nextId++,n.spawned++,e.push({type:"spawn",target:c.id,to:l,kind:c.kind,boss:c.boss,lane:c.lane}),n.seenMonsters.some(p=>p.kind===c.kind&&p.boss===c.boss)||n.seenMonsters.push({kind:c.kind,boss:c.boss});const h=mn(c.kind);n.seenTraits.includes(h)||(n.seenTraits.push(h),e.push({type:"research",trait:h}));const u=n.runtime.queue.slice(n.spawned).findIndex(p=>p.lane===c.lane),d=u>=0?n.runtime.queue[n.spawned+u]:void 0;return d!=null&&d.boss&&e.push({type:"boss-warning",target:n.runtime.nextId+u,lane:d.lane,kind:d.kind,boss:!0,to:On(d.lane,0)}),!0}function E_(n,e,t){const i=t.filter(r=>r.hp>0&&r.lane===n.lane),s=r=>gl(n,r,i);if(!s(e)){let r=n.progress,a=e;for(let o=0;o<12;o++){const l=(r+a)/2;s(l)?r=l:a=l}e=r}n.progress=e,Object.assign(n,js(n))}const Pc=n=>(1-n.progress)*Xr(n.lane);function w_(n,e){return Kr(n).filter(t=>Math.hypot(t.x,t.z)<=e).sort((t,i)=>Pc(t)-Pc(i)||t.id-i.id)}function T_(n,e,t){if(n.time+=e,b_(n,e),n.phase!=="wave")return;const i=n.runtime,s=vu(n,t);i.spawnTimer-=e,i.boltTimer-=e,i.fireTimer-=e,i.frostTimer-=e,i.stormTimer-=e;const r=n.wave<=3?n.total:3*(6+Math.min(n.wave,10));for(;i.spawnTimer<=0&&n.spawned<n.total;){if(n.enemies.length>=50){i.spawnTimer=.35;break}const l=r-n.spawned%r,c=Math.min(3,n.total-n.spawned,50-n.enemies.length,l),h=n.spawned;for(let u=0;u<c&&S_(n,t);u++);if(n.spawned<h+c){i.spawnTimer=.05;break}i.spawnTimer+=n.spawned%r===0?11.5:.35}r_(s,e);const a=nu(n.levels.frost,s.mods.slowBonus),o=[];for(const l of[...n.enemies].sort((c,h)=>h.progress-c.progress||c.id-h.id)){if(l.hp<=0)continue;const c=l.slow>0,h=l.burn>0;if(l.slow=Math.max(0,l.slow-e),l.burn=Math.max(0,l.burn-e),h&&s.damage(l,(4+4*n.levels.fire)*Math.max(1,l.burnStacks)*e,"fire",{dot:!0,silent:!0}),l.burn<=1e-9&&(l.burnStacks=0,l.burnDepth=0),l.hp<=0)continue;const u=s.mods.iceAge&&Math.hypot(l.x,l.z)<=Re.iceAge.radius?Re.iceAge.speed:1,d=Vv(l,e,c||u<1,t),p=c?iu(l.kind,a):1,g=d.move?l.speed*p*u*d.speed*e*xv*qh.speed/Xr(l.lane):0;if(E_(l,Math.min(1,l.progress+g),o),o.push(l),l.progress>=1){const v=l.boss?35:Math.round(ml[l.kind].damage*(l.mini?ct.split.leakDamage:1));if(n.hp=Math.max(0,n.hp-v),l.hp=0,t.push({type:"leak",target:l.id,to:Us(l),kind:l.kind,boss:l.boss,damage:v}),n.hp===0){n.phase="defeat",t.push({type:"defeat",value:n.wave});break}}}if(n.phase==="wave"&&s_(s),n.phase==="wave"?Mu(n,t):n.runtime.splits=[],n.enemies=n.enemies.filter(l=>l.hp>0),n.remaining=xu(n),n.phase==="wave"&&n.remaining===0){const l=45+n.wave*12;n.gold+=l,n.score+=n.wave*100;const c=1+(n.wave%5===0?1:0);n.skillPoints+=c,t.push({type:"points",value:c}),n.zones=[],i.strikes=[],i.haste=0,n.wave>=du&&!n.endless?(n.phase="victory",t.push({type:"victory",value:n.score})):(n.phase="ready",t.push({type:"wave",value:n.wave}))}}function Ic(n,e){const t=[];if(n.paused||n.phase==="defeat"||n.phase==="victory"||!Number.isFinite(e)||e<=0)return t;n.runtime.accumulator+=e*n.speed;const i=1/30;for(;n.runtime.accumulator+1e-10>=i;)if(n.runtime.accumulator-=i,Math.abs(n.runtime.accumulator)<1e-10&&(n.runtime.accumulator=0),T_(n,i,t),["defeat","victory"].includes(n.phase)){n.runtime.accumulator=0;break}return t}function A_(n,e){return typeof e=="string"?jr(n,e):e.type==="unlock"?Uv(n,e.node):Nv(n)}function jr(n,e){const t=[],i=o=>({ok:!1,message:o,events:t}),s=o=>({ok:!0,message:o,events:t});if(e==="restart")return Object.assign(n,gu()),s("เริ่มการป้องกันครั้งใหม่");if(e==="endless")return n.phase!=="victory"?i(Ge.simulation.locked):(n.endless=!0,n.phase="ready",n.paused=!1,s(Ge.simulation.start));if(n.phase==="victory"||n.phase==="defeat")return i("การต่อสู้จบแล้ว");if(e==="pause")return n.paused=!n.paused,s(n.paused?"หยุดเกมชั่วคราว":"กลับสู่การต่อสู้");if(e==="speed")return n.speed=n.speed===1?2:1,s(`ความเร็ว ${n.speed} เท่า`);if(n.paused)return i("เล่นต่อก่อนใช้คำสั่งนี้");if(e==="build")return n.built?i("มีป้อมอยู่แล้ว"):n.gold<120?i("ต้องการ 120 พลังงานเพื่อสร้างป้อม"):(n.gold-=120,n.built=!0,n.phase="ready",n.skillPoints+=1,t.push({type:"build",to:{x:0,z:0}},{type:"points",value:1}),s("สร้าง Element Tower แล้ว เลือกพลังและเริ่มระลอกแรก"));if(!n.built)return i("สร้างป้อมก่อน");if(e==="wave")return n.phase!=="ready"?i("กำจัดศัตรูระลอกนี้ก่อน"):(n.wave++,n.phase="wave",n.runtime.queue=Go(n.wave),n.spawned=0,n.total=n.runtime.queue.length,n.extra=0,n.runtime.splits=[],n.runtime.strikes=[],n.runtime.fireShots=0,n.runtime.tempestTimer=0,n.runtime.haste=0,n.zones=[],n.remaining=n.total,n.runtime.spawnTimer=.3,n.runtime.boltTimer=0,n.runtime.fireTimer=0,n.runtime.frostTimer=0,n.runtime.stormTimer=0,t.push({type:"wave",value:n.wave}),s(`ระลอก ${n.wave} เริ่มแล้ว`));if(e==="nova")return n.phase!=="wave"?i("ใช้ Nova ระหว่างต่อสู้"):n.novaCharges<=0?i(`Nova พร้อมใน ${Math.ceil(n.cooldown)} วินาที`):a_(vu(n,t))?(Mu(n,t),n.enemies=n.enemies.filter(o=>o.hp>0),n.remaining=xu(n),s("ปล่อย Nova")):i("ยังไม่มีศัตรูในระยะ Nova");if(e==="repair"){if(n.hp===n.maxHp)return i("พลังป้อมเต็มแล้ว");if(n.gold<60)return i("ต้องการ 60 พลังงานเพื่อซ่อมป้อม");n.gold-=60;const o=Math.min(45,n.maxHp-n.hp);return n.hp+=o,t.push({type:"upgrade",to:{x:0,z:0},value:o}),s(`ซ่อมป้อม +${o} พลัง`)}const r=vl(n,e);return n.gold<r?i(`ต้องการ ${r} พลังงาน`):(n.gold-=r,e==="core"?n.core++:n.levels[e]++,t.push({type:"upgrade",element:e==="core"?"arcane":e,to:{x:0,z:0},value:e==="core"?n.core:n.levels[e]}),s(`${{core:"แกนป้อม",fire:"เพลิง",frost:"น้ำแข็ง",storm:"สายฟ้า"}[e]} ระดับ ${e==="core"?n.core:n.levels[e]}`))}const Ut={cell:128,columns:16,rows:8,directions:5,clips:{move:8,attack:6,death:8}},R_={move:0,attack:Ut.clips.move,death:Ut.clips.move+Ut.clips.attack},C_=Ut.clips.move+Ut.clips.attack+Ut.clips.death;function Lc(n){const e=rn[n];return e.elite?n:e.model}const P_=Object.keys(rn).filter((n,e,t)=>rn[n].elite||t.find(i=>rn[i].model===rn[n].model&&!rn[i].elite)===n);function I_(n,e,t){return t*C_+R_[n]+e}function L_(n){const e=Math.atan2(Math.sin(n),Math.cos(n)),t=Ut.directions-1,i=Math.min(t,Math.round(Math.abs(e)/(Math.PI/t)));return{dir:i,flip:e<0&&i>0&&i<t}}const D_=.3;function U_(n,e){const t=Pi(e),i=n.burn>0,s=n.slow>0?1-iu(n.kind,nu(e.levels.frost,t.slowBonus)):0,r=mn(n.kind);return{shield:n.shield<=0?"none":n.shield<n.maxShield*D_?"cracked":"full",regen:r==="regen"&&n.hp<n.maxHp&&n.burn<=0&&n.sinceDamage>=ct.regen.delay,dashTelegraph:r==="dash"&&n.dashLeft===0&&n.stun<=0&&n.slow<=0&&n.dashTimer<=ct.dash.telegraph,dashing:n.dashLeft>0&&n.stun<=0&&n.slow<=0,stunned:n.stun>0,frostMarks:t.glacier?{filled:n.frostHits,total:Re.glacier.hits}:null,burnStacks:n.burn>0?Math.max(1,n.burnStacks):0,brittle:t.brittle&&n.slow>0,flying:r==="flying",burnPips:i&&t.burnStacks>1?{filled:Math.max(1,n.burnStacks),total:Re.stack.max}:null,burnHot:i&&t.burnDuration>1,slowDepth:s,chill:t.slowBonus>0&&n.slow>0,charged:t.staticField&&n.charged>0}}function N_(n){const e=[];return n.frostMarks&&n.frostMarks.filled>0&&e.push("frost"),n.burnPips&&e.push("burn"),n.charged&&e.push("charge"),e}function F_(n,e){return n.slice(1).map((t,i)=>e!==null&&Math.hypot(t.x-n[i].x,t.z-n[i].z)>=e)}function O_(n){const e=Pi(n);return{arcane:e.boltTargets>1?"prism":"bolt",fire:e.meteor?"meteor":e.wildfire?"embers":"blast",frost:e.glacier?"glacier":e.brittle?"brittle":"burst",storm:e.thunderstrike?"thunder":e.endlessChain?"chain":"arc",nova:e.novaPush>0?"shockwave":"pulse",clap:e.thunderclap,lens:e.boltDamage>1,mine:e.goldMul>1,conductor:e.stormJumps>0,overcharge:e.stormFirst>1,bridgeRange:e.endlessChain?ou(n.levels.storm,e.stormRange/Re.chain.range):null}}const k_=.2;class B_{constructor(){R(this,"last",new Map);R(this,"time",-1/0)}update(e,t){t<this.time&&this.last.clear(),this.time=t;const i=[],s=new Map;for(const r of e){const a=this.last.get(r.id);a!==void 0&&(a-r.progress)*Xr(r.lane)>=k_&&i.push({id:r.id,lane:r.lane,from:a,to:r.progress}),s.set(r.id,r.progress)}return this.last=s,i}get size(){return this.last.size}}function z_(n,e){return e?1:Math.max(.55,1-n*.06)}function H_(n){return .45}function yu(n){var i;const e=n.skills.map(Ct),t=s=>{var a;const r=e.filter(o=>o.branch===s);return{fork:((a=r.find(o=>o.slot==="II-A"||o.slot==="II-B"))==null?void 0:a.id)??null,deep:r.some(o=>o.slot==="III-A"||o.slot==="III-B")}};return{ports:{core:t("core"),fire:t("fire"),frost:t("frost"),storm:t("storm")},capstone:((i=e.find(s=>s.slot==="cap"))==null?void 0:i.id)??null,chargeRing:n.skills.includes("core-nova-rush"),hasteAura:n.skills.includes("core-nova-awaken")}}function V_(n){const e=Pi(n);return n.novaCharges>=e.novaCharges?1:Math.min(1,Math.max(0,1-n.cooldown/e.novaCooldown))}function G_(n){return Math.min(1,Math.max(0,n.runtime.haste/Re.novaAwaken.duration))}const kr=Re.iceAge.radius,W_={node:1,capstone:1.5,total:3,reduced:.3};function $_(n,e){const t=W_,i=n.map(Ct),s=i.some(l=>l.slot==="cap")&&!e?t.capstone:0,r=i.filter(l=>l.slot!=="cap"||e).length,a=e?Math.min(t.reduced,t.total/Math.max(1,i.length)):r?Math.min(t.node,(t.total-s)/r):0;let o=0;return i.map(l=>{const c=l.slot==="cap",h=c&&!e?t.capstone:a,u={node:l.id,branch:l.branch,capstone:c,start:o,duration:h};return o+=h,u})}class X_{constructor(){R(this,"nodes",[])}add(e){let t=!1;for(const i of e)(i.type==="skill"||i.type==="capstone")&&i.node&&this.nodes.push(i.node),i.type==="respec"&&(this.nodes=[],t=!0);return t}clear(){this.nodes=[]}take(e){const t=this.nodes.filter((i,s)=>e.skills.includes(i)&&this.nodes.indexOf(i)===s);return this.nodes=[],t}get length(){return this.nodes.length}}class q_{constructor(){R(this,"cues",[]);R(this,"elapsed",0);R(this,"started",0);R(this,"ended",0)}play(e){this.cues=[...e],this.elapsed=0,this.started=this.ended=0}cancel(){this.cues=[],this.started=this.ended=0}get active(){return this.cues.find(e=>this.elapsed>=e.start&&this.elapsed<e.start+e.duration)??null}get busy(){return this.ended<this.cues.length}get activeProgress(){const e=this.active;return e?Math.min(1,(this.elapsed-e.start)/e.duration):0}advance(e){this.elapsed+=e;const t=[],i=[];for(;this.started<this.cues.length&&this.elapsed>=this.cues[this.started].start;)t.push(this.cues[this.started++]);for(;this.ended<this.cues.length&&this.elapsed>=this.cues[this.ended].start+this.cues[this.ended].duration-1e-9;)i.push(this.cues[this.ended++]);return{started:t,ended:i}}}const Su={arcane:"bolt",fire:"blast",frost:"burst",storm:"arc",nova:"pulse",clap:!1,lens:!1,mine:!1,conductor:!1,overcharge:!1,bridgeRange:null},Ml={1:0,3:1,5:2};function Y_(n){return n>=5?5:n>=3?3:n>0?1:0}function K_(n,e){return n==="arcane"?e.core>=7?5:e.core>=4?3:1:Y_(e.levels[n])||1}const j_={fire:{sprite:"fire-orb",size:60,flight:.26,arc:[40,.1]},frost:{sprite:"frost-orb",size:50,flight:.24,arc:[26,.06]},arcane:{sprite:"arcane-orb",size:44,flight:.22,arc:[16,.04]}};function Lr(n,e,t){const i=Ml[e],s=j_[n],r={...s,size:s.size*(1+.18*i),glow:1.9,glowAlpha:.6+.12*i,hot:.3*i,trail:1+.35*i,every:.035-.0065*i};return n==="fire"&&t.fire==="meteor"?{...r,sprite:"meteor",size:r.size*1.2,flight:.34,trail:r.trail*1.3}:n==="fire"&&t.fire==="embers"?{...r,size:r.size*.72,trail:r.trail*.8}:n==="arcane"&&t.lens?{...r,size:r.size*1.35,glowAlpha:r.glowAlpha+.15,hot:r.hot+.3,trail:r.trail*1.3}:r}function Z_(n,e){const t=Ml[n];return{width:32*(1+.2*t)*(e.conductor?1.3:1),glowAlpha:.7+.12*t}}function Oa(n){return 1+.12*Ml[n]}const J_=["fire-orb","frost-orb","storm-orb","arcane-orb","lightning-bolt","impact-star","explosion","frost-burst","ring","rune-circle","ember","ice-chip","spark","sparkle","smoke","snowflake","glow","meteor","lava-pool","ice-field","ground-crack","frost-ring","cracks","pip","charge-glyph","stun-star","coin","wind-blade","dust-streak","ice-block","beam","band"],vi={columns:4,rows:8};function ka(n){const e=J_.indexOf(n),t=e%vi.columns,i=Math.floor(e/vi.columns);return[t/vi.columns,(vi.rows-1-i)/vi.rows]}const Dc={particles:400,perImpact:20},rs={fire:16747069,frost:9430271,storm:13863935,arcane:12559103};function Q_(n,e,t,i){return t<=0?{...n}:t>=1?{...e}:{x:n.x+(e.x-n.x)*t,y:n.y+(e.y-n.y)*t-i*4*t*(1-t)}}const ex={fire:"ember",frost:"snowflake",arcane:"sparkle"},tx=[[0,.065,1],[.135,.205,.85]];class nx{constructor(e=1){R(this,"particles",[]);R(this,"projectiles",[]);R(this,"bolts",[]);R(this,"still",!1);R(this,"scale",1);R(this,"metric",{xx:30,xy:0,zx:0,zy:15});R(this,"seed");this.seed=e>>>0||1}get reduced(){return this.still}set reduced(e){const t=e&&!this.still;if(this.still=e,!t)return;const i=this.projectiles;this.projectiles=[];for(const s of i)s.land?s.land():this.impact(s.element,s.to(),s.radius);this.particles=this.particles.filter(s=>!s.follow||i.every(r=>s.follow!==r.ride));for(const s of this.particles)s.follow||(s.vx=s.vy=s.gravity=s.spin=0);for(const s of this.bolts)s.still=!0,s.pulse=!1}px(e){return e*Math.max(.45,this.scale)}arcOf(e,t){return Math.min(e.arc[0]*this.scale,t*e.arc[1])}rand(){this.seed=this.seed+1831565813>>>0;let e=this.seed;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.rand()}clear(){this.particles=[],this.projectiles=[],this.bolts=[]}add(e){if(this.particles.length>=Dc.particles)return;const t=!this.reduced||e.follow;this.particles.push({additive:!1,tint:16777215,vx:0,vy:0,gravity:0,drag:0,t:0,size1:e.size0,alpha0:1,alpha1:0,rot:0,spin:0,...e,...t?{}:{vx:0,vy:0,gravity:0,spin:0}})}burst(e,t,i,s,r){const a=Math.min(t,e.left);e.left-=a;for(let o=0;o<a;o++){const l=(o+this.rand()*.8)/a*Math.PI*2,c=this.range(...r),h=i(l,c);this.add({x:s.x,y:s.y,vx:Math.cos(l)*c,vy:Math.sin(l)*c*.7,...h})}}shot(e,t,i,s,r,a,o){if(e==="storm"){this.chain(()=>t,[i,...s],{width:36});for(const p of[i,...s])this.impact("storm",p(),r*.5);return}const l=o??(()=>this.impact(e,i(),r));if(this.reduced){l();return}const c=a??Lr(e,1,Su),h=i(),u=Math.hypot(h.x-t.x,h.y-t.y),d={element:e,from:{...t},to:i,t:0,flight:c.flight,arc:this.arcOf(c,u),radius:r,pos:{...t},rot:0,trail:0,look:c,land:o};this.projectiles.push(d),this.flier(d,c.sprite,this.px(c.size),rs[e],c.glow,c.glowAlpha,c.hot)}flier(e,t,i,s,r,a,o){const l=e.flight,c=e.ride=()=>({x:e.pos.x,y:e.pos.y,rot:e.rot});this.add({sprite:"glow",additive:!0,tint:s,x:e.pos.x,y:e.pos.y,life:l,size0:i*r,alpha0:a,alpha1:a,follow:c}),this.add({sprite:t,x:e.pos.x,y:e.pos.y,life:l,size0:i,alpha0:1,alpha1:1,follow:c}),o>0&&this.add({sprite:"glow",additive:!0,tint:16777215,x:e.pos.x,y:e.pos.y,life:l,size0:i*.6,alpha0:o,alpha1:o,follow:c})}throw(e,t,i,s,r){if(this.reduced){r==null||r();return}const a=i(),o=Math.hypot(a.x-t.x,a.y-t.y),l={element:e,from:{...t},to:i,t:0,flight:s.flight,arc:this.arcOf(s,o),radius:0,pos:{...t},rot:0,trail:0,look:s,land:r??(()=>{})};this.projectiles.push(l),this.flier(l,s.sprite,this.px(s.size),rs[e],s.glow,s.glowAlpha,s.hot)}advanceShot(e,t){e.t+=t/e.flight;const i=e.pos,s=e.to();if(e.pos=Q_(e.from,s,e.t,e.arc),Math.hypot(e.pos.x-i.x,e.pos.y-i.y)>.01&&(e.rot=Math.atan2(e.pos.y-i.y,e.pos.x-i.x)),this.reduced||e.element==="storm"||(e.trail-=t,e.trail>0))return;e.trail=e.look.every;const r=e.look.trail,a=this.px(e.look.size)/60,o={x:e.pos.x-Math.cos(e.rot)*10*a,y:e.pos.y-Math.sin(e.rot)*10*a},l=ex[e.element];e.element==="fire"?(this.add({sprite:l,x:o.x,y:o.y,vx:this.range(-30,30),vy:this.range(-60,-20),life:this.range(.25,.4)*r,size0:this.px(12)*Math.max(1,a),size1:this.px(3),spin:this.range(-4,4)}),this.rand()<(e.look.sprite==="meteor"?.8:.4)&&this.add({sprite:"smoke",x:o.x,y:o.y,vy:-25,life:.45*r,size0:this.px(12)*a,size1:this.px(24)*a,alpha0:.55})):e.element==="frost"?this.add({sprite:this.rand()<.5?"snowflake":"ice-chip",x:o.x,y:o.y,vx:this.range(-25,25),vy:this.range(-20,20),life:.35*r,size0:this.px(10),size1:this.px(4),spin:this.range(-3,3)}):this.add({sprite:l,additive:!0,tint:rs.arcane,x:o.x,y:o.y,vx:this.range(-20,20),vy:this.range(-20,20),life:.3*r,size0:this.px(14),size1:this.px(2)})}impact(e,t,i,s=1){const r=Math.max(this.px(40),i)*s,a={left:Dc.perImpact},o=h=>{const u=Math.min(h,a.left);return a.left-=u,u},l=rs[e],c=h=>Math.round(h*Math.min(2,s));o(1)&&this.add({sprite:"glow",additive:!0,tint:l,x:t.x,y:t.y,life:.22,size0:r*1.6,size1:r*2.2,alpha0:.9}),e==="fire"?(o(1)&&this.add({sprite:"explosion",x:t.x,y:t.y-r*.15,life:.42,size0:r*1.1,size1:r*1.7,alpha0:1,rot:this.range(0,6.28)}),this.burst(a,c(8),()=>({sprite:"ember",gravity:320,life:this.range(.35,.6),size0:this.px(14),size1:this.px(3),spin:this.range(-6,6)}),t,[120,240]),this.burst(a,3,()=>({sprite:"smoke",gravity:-40,drag:2,life:.7,size0:r*.4,size1:r*.8,alpha0:.6}),t,[20,50])):e==="frost"?(o(1)&&this.add({sprite:"frost-burst",x:t.x,y:t.y,life:.4,size0:r,size1:r*1.45,rot:this.range(0,6.28)}),this.burst(a,c(8),()=>({sprite:"ice-chip",gravity:360,life:this.range(.35,.55),size0:this.px(13),size1:this.px(6),spin:this.range(-8,8)}),t,[110,220]),this.burst(a,3,()=>({sprite:"snowflake",drag:3,life:.6,size0:this.px(12),size1:this.px(8),spin:this.range(-2,2)}),t,[30,70])):e==="storm"?(o(1)&&this.add({sprite:"storm-orb",x:t.x,y:t.y,life:.18,size0:r*.7,size1:r*.9}),this.burst(a,c(6),()=>({sprite:"spark",additive:!0,tint:16777215,drag:6,life:this.range(.15,.3),size0:this.px(16),size1:this.px(4),rot:this.range(0,6.28)}),t,[160,300])):(o(1)&&this.add({sprite:"impact-star",x:t.x,y:t.y,life:.22,size0:r*.7,size1:r,spin:3}),o(1)&&this.add({sprite:"spark",additive:!0,tint:16777215,x:t.x,y:t.y,life:.12,size0:r*.9,size1:r*.5,rot:this.range(0,6.28)}),this.burst(a,c(6),()=>({sprite:"sparkle",additive:!0,tint:l,drag:4,life:.35,size0:this.px(15),size1:this.px(3)}),t,[90,180]))}groundRing(e,t,i,s={}){const r=t*2,a=this.reduced?1:s.from??.35;this.add({sprite:s.sprite??"band",additive:s.additive??!1,tint:i,x:e.x,y:e.y,t:-(s.delay??0),life:s.life??.55,size0:r*a,size1:r,alpha0:s.alpha??.9,alpha1:0,ground:!0,flat:!0,ease:"out"})}edge(e,t,i,s=.5,r="band",a=.85){this.add({sprite:r,tint:i,x:e.x,y:e.y,life:s,size0:t*2,size1:t*2,alpha0:a,alpha1:0,ground:!0,flat:!0})}scar(e,t,i,s,r=16777215,a=.9,o=!1){this.add({sprite:i,additive:o,tint:r,x:e.x,y:e.y,life:s,size0:t*2,size1:t*2,alpha0:a,alpha1:0,rot:this.range(0,6.28),ground:!0,flat:!0})}skyBolt(e,t){const i=()=>{const s=e();return{x:s.x+(t.lean??0),y:s.y-t.height}};this.bolts.push({a:i,b:e,t:0,life:t.life??.25,width:t.width,tint:t.tint,glow:t.glow,contour:t.contour,pulse:!!t.pulse&&!this.reduced,still:this.reduced})}beam(e,t,i,s,r,a=.24){this.bolts.push({a:()=>e,b:t,t:0,life:a,width:i,sprite:"beam",tint:s,glow:r,glowAlpha:.6,still:!0})}chain(e,t,i){const s=i.life??.22,r=this.reduced,a=i.glowAlpha;t.forEach((o,l)=>{var d,p;const c=l?t[l-1]:e,h=i.width*(l?.75:1),u=l?((d=i.bright)==null?void 0:d.call(i,l))??1:i.first??1;if(l&&((p=i.bridges)!=null&&p[l-1])){const g=()=>Math.max(this.px(40),Math.hypot(o().x-c().x,o().y-c().y)*.35),v=m=>()=>{const f=c(),S=o();return{x:f.x+(S.x-f.x)*m,y:f.y+(S.y-f.y)*m-g()*4*m*(1-m)}};for(let m=0;m<3;m++)this.bolts.push({a:v(m/3),b:v((m+1)/3),t:0,life:s*1.6,width:h*1.15,tint:15984895,glow:14929151,glowAlpha:a,alpha:u,still:r,arch:!0});return}this.bolts.push({a:c,b:o,t:0,life:s,width:h,tint:i.tint,glow:i.glow,glowAlpha:a,alpha:u,still:r})})}coins(e,t,i){for(let s=0;s<t;s++){const r=e.x+(s-(t-1)/2)*this.px(17),a=e.y-s*this.px(6);i&&this.add({sprite:"glow",additive:!0,tint:16769658,x:r,y:a,vy:-70,drag:2.4,life:.75,size0:this.px(36),size1:this.px(28),alpha0:.8}),this.add({sprite:"coin",x:r,y:a,vy:-70,drag:2.4,life:.75,size0:this.px(i?21:17),alpha0:1,alpha1:.2})}}shards(e,t){const i=t.length?t.slice(0,8):Array.from({length:5},(r,a)=>({x:e.x+Math.cos(a*1.26)*this.px(50),y:e.y+Math.sin(a*1.26)*this.px(30)})),s=.22;for(const r of i)this.add({sprite:"ice-chip",x:e.x,y:e.y,vx:(r.x-e.x)/s,vy:(r.y-e.y)/s,life:s,size0:this.px(17),size1:this.px(12),alpha0:1,alpha1:.6,rot:Math.atan2(r.y-e.y,r.x-e.x)})}streak(e,t,i){const s=Math.hypot(t.x-e.x,t.y-e.y);this.reduced||s<1||this.add({sprite:"dust-streak",x:(e.x+t.x)/2,y:(e.y+t.y)/2,life:1.2,size0:s+i,aspect:i/(s+i),alpha0:.9,alpha1:0,rot:Math.atan2(t.y-e.y,t.x-e.x),ground:!0})}nova(e,t,i){if(this.add({sprite:"rune-circle",tint:8019199,x:e.x,y:e.y,life:.75,size0:10*(this.reduced?1:.5),size1:10,alpha0:.9,spin:1.5,ground:!0,flat:!0,ease:"out"}),this.add({sprite:"rune-circle",additive:!0,tint:rs.arcane,x:e.x,y:e.y,life:.75,size0:10*(this.reduced?1:.5),size1:10,alpha0:.8,spin:1.5,ground:!0,flat:!0,ease:"out"}),this.groundRing(e,t,3127528,{sprite:"ring",life:.6,from:.12}),this.groundRing(e,t*.82,9399295,{sprite:"ring",life:.7,from:.1,delay:.08}),this.burst({left:12},12,()=>({sprite:"sparkle",additive:!0,tint:16777215,drag:2,life:.5,size0:this.px(16),size1:this.px(3)}),e,[this.px(160),this.px(260)]),!!i){this.groundRing(e,t*1.1,2080686,{sprite:"ring",life:.8,from:.08,alpha:1}),this.groundRing(e,t*1.04,2080686,{sprite:"ring",life:.7,from:.08,alpha:.8,delay:.06});for(let s=0;s<6;s++){const r=s/6*Math.PI*2+.3,a={x:Math.cos(r)*4.2,z:Math.sin(r)*4.2};this.scar({x:e.x+this.metric.xx*a.x+this.metric.zx*a.z,y:e.y+this.metric.xy*a.x+this.metric.zy*a.z},1.3,"ground-crack",1.5)}}}update(e){for(const i of this.projectiles)this.advanceShot(i,e);const t=this.projectiles.filter(i=>i.t>=1);this.projectiles=this.projectiles.filter(i=>i.t<1);for(const i of t)i.land?i.land():this.impact(i.element,i.to(),i.radius);for(const i of this.particles){if(i.t+=e,i.t<0)continue;if(i.follow){const r=i.follow();i.x=r.x,i.y=r.y,i.rot=r.rot;continue}const s=Math.exp(-i.drag*e);i.vx*=s,i.vy=i.vy*s+i.gravity*e,i.x+=i.vx*e,i.y+=i.vy*e,i.rot+=i.spin*e}this.particles=this.particles.filter(i=>i.t<i.life);for(const i of this.bolts)i.t+=e;this.bolts=this.bolts.filter(i=>i.t<i.life)}}function ix(n){if(n.t<0)return{size:n.size0,alpha:0};const e=Math.min(1,n.t/n.life),t=n.ease==="out"?1-(1-e)**3:e;return{size:n.size0+(n.size1-n.size0)*t,alpha:n.alpha0+(n.alpha1-n.alpha0)*e}}function sx(n){var t;const e=n.alpha??1;return n.pulse?e*(((t=tx.find(([i,s])=>n.t>=i&&n.t<s))==null?void 0:t[2])??0):e*Math.min(1,(1-n.t/n.life)*1.6)}class Sr{constructor(e,t,i,s,r){R(this,"mesh");R(this,"cell");R(this,"alpha");R(this,"count",0);R(this,"m",new rt);R(this,"q",new zn);R(this,"c",new Ye);R(this,"axis",new k(0,0,1));R(this,"p",new k);R(this,"s",new k);this.capacity=i,this.depth=r;const a=new gn(1,1);this.cell=new Sn(new Float32Array(i*2),2),this.alpha=new Sn(new Float32Array(i),1),this.cell.setUsage(jt),this.alpha.setUsage(jt),a.setAttribute("iCell",this.cell),a.setAttribute("iAlpha",this.alpha);const o=new qt({map:e,transparent:!0,depthTest:r!==void 0,depthWrite:!1,blending:t?Ur:Mi,premultipliedAlpha:!1,side:sn,forceSinglePass:!0}),l=new Je(1/vi.columns,1/vi.rows);o.onBeforeCompile=c=>{c.uniforms.uCellSize={value:l},c.vertexShader=`attribute vec2 iCell;
attribute float iAlpha;
uniform vec2 uCellSize;
varying float vAlpha;
`+c.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = uv * uCellSize + iCell;
vAlpha = iAlpha;`),c.fragmentShader=`varying float vAlpha;
`+c.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.a *= vAlpha;`)},o.customProgramCacheKey=()=>`vfx2d-${t}`,this.mesh=new Ys(a,o,i),this.mesh.instanceMatrix.setUsage(jt),this.mesh.frustumCulled=!1,this.mesh.renderOrder=s,this.mesh.setColorAt(0,this.c.set(16777215)),this.mesh.count=0,this.mesh.visible=!1}begin(){this.count=0}put(e,t,i){this.mesh.setMatrixAt(this.count,this.m),this.mesh.setColorAt(this.count,this.c.set(t)),this.cell.setXY(this.count,e[0],e[1]),this.alpha.setX(this.count,i),this.count++}push(e,t,i,s,r,a,o,l){this.count>=this.capacity||l<=0||(this.q.setFromAxisAngle(this.axis,-a),this.m.compose(this.p.set(t,-i,this.depth??0),this.q,this.s.set(s,r,1)),this.put(e,o,l))}pushFlat(e,t,i,s,r,a,o,l,c){if(this.count>=this.capacity||l<=0)return;const h=Math.cos(a),u=Math.sin(a),d=h*s,p=u*s,g=-u*r,v=h*r;this.m.set(c.xx*d+c.zx*p,c.xx*g+c.zx*v,0,t,-(c.xy*d+c.zy*p),-(c.xy*g+c.zy*v),0,-i,0,0,1,this.depth??0,0,0,0,1),this.put(e,o,l)}end(){if(this.mesh.count=this.count,this.mesh.visible=this.count>0,!!this.count)for(const e of[this.mesh.instanceMatrix,this.mesh.instanceColor,this.cell,this.alpha])e&&(e.clearUpdateRanges(),e.addUpdateRange(0,this.count*e.itemSize),e.needsUpdate=!0)}}class rx{constructor(e,t,i,s,r){R(this,"shapes");R(this,"glows");R(this,"groundShapes");R(this,"groundGlows");R(this,"batches");this.shapes=new Sr(t,!1,1536,i+1),this.glows=new Sr(t,!0,1024,i),this.groundShapes=new Sr(t,!1,384,s+.01,r),this.groundGlows=new Sr(t,!0,256,s,r),this.batches=[this.shapes,this.glows,this.groundShapes,this.groundGlows],e.add(...this.batches.map(a=>a.mesh))}batch(e,t){return e?t?this.groundGlows:this.groundShapes:t?this.glows:this.shapes}sprite(e,t,i,s,r,a,o,l,c,h,u,d){const p=this.batch(t,i),g=ka(e);s?p.pushFlat(g,r,a,o,l,c,h,u,d):p.push(g,r,a,o,l,c,h,u)}draw(e,t,i){for(const r of this.batches)r.begin();const s=e.metric;for(const r of e.particles){const{size:a,alpha:o}=ix(r);this.sprite(r.sprite,r.ground,r.additive,r.flat,r.x,r.y,a,a*(r.aspect??1),r.rot,r.tint,o,s)}for(const r of t)this.sprite(r.sprite,r.ground,r.additive,r.flat,r.x,r.y,r.w,r.h,r.rot,r.tint,r.alpha,s);for(const r of e.bolts){const a=r.a(),o=r.b(),l=Math.hypot(o.x-a.x,o.y-a.y),c=Math.atan2(o.y-a.y,o.x-a.x),h=sx(r);if(h<=0||l<.5)continue;const u=(a.x+o.x)/2,d=(a.y+o.y)/2,p=r.still||Math.floor((i+r.t)*20)%2?1:-1,g=r.pulse?h:(r.alpha??1)*(1-r.t/r.life),v=ka(r.sprite??"lightning-bolt");this.glows.push(ka("glow"),u,d,l*1.05,r.width*2.6,c,r.glow??13863935,(r.glowAlpha??.8)*g),r.contour!==void 0&&this.shapes.push(v,u,d,l,r.width*2.2*p,c,r.contour,Math.min(1,h)),(r.additive?this.glows:this.shapes).push(v,u,d,l,r.width*p,c,r.tint??16777215,Math.min(1,h))}for(const r of this.batches)r.end()}get counts(){return{top:this.shapes.mesh.count+this.glows.mesh.count,ground:this.groundShapes.mesh.count+this.groundGlows.mesh.count}}}function ax(n){const[e,t]=n(0,0),[i,s]=n(1,0),[r,a]=n(0,1);return{xx:i-e,xy:s-t,zx:r-e,zy:a-t}}function Ba(n,e,t){return{x:n.xx*e+n.zx*t,y:n.xy*e+n.zy*t}}function ox(n,e){return{rx:e*Math.hypot(n.xx,n.zx),ry:e*Math.hypot(n.xy,n.zy)}}const lx=.5,cx=.25,hx={lava:Re.lava.life,ice:Re.field.life},ux={lava:.12,ice:.04};function dx(n,e,t){const i=[];for(const s of n){const r=Math.min(1,Math.max(0,s.life)/lx),a=hx[s.kind]-s.life,o=Math.min(1,Math.max(0,a)/cx),l=s.radius*(t?1:.6+.4*(1-(1-o)**2)),c=s.id*1.7+(t?0:e*ux[s.kind]),h={x:s.x,z:s.z};if(s.kind==="lava"){const u=t?0:.12*Math.sin(e*3.2+s.id);i.push({sprite:"glow",additive:!0,tint:16742954,alpha:(.4+u)*r,at:h,radius:l*1.2,rot:0}),i.push({sprite:"lava-pool",additive:!1,tint:16777215,alpha:.95*r,at:h,radius:l,rot:c})}else i.push({sprite:"glow",additive:!0,tint:10479871,alpha:.12*r,at:h,radius:l*1.1,rot:0}),i.push({sprite:"ice-field",additive:!1,tint:16777215,alpha:.55*r,at:h,radius:l,rot:c}),i.push({sprite:"frost-ring",additive:!1,tint:16777215,alpha:.75*r,at:h,radius:l,rot:-c})}return i}function fx(n,e,t=1){const i={x:0,z:0},s=e?0:n*.03;return[{sprite:"ice-field",additive:!1,tint:16777215,alpha:.12*t,at:i,radius:kr,rot:s},{sprite:"glow",additive:!0,tint:12578815,alpha:.08*t,at:i,radius:kr*1.05,rot:0}]}const In={rime:12579583,rimeDeep:3116287,frost:5430783,frostDim:2047306,burn:16751165,burnDim:4860442,hot:16773824,burnGlow:16747069,hotGlow:16771496},Uc=-.6;function px(n,e,t,i,s,r){const a=[],o=Math.max(.75,r),l=Math.max(1,e.feet-e.top),c=(d,p,g,v,m=16777215,f=1,S=!1,E=0)=>a.push({sprite:d,additive:S,tint:m,alpha:f,x:p,y:g,w:v,h:v,rot:E});if(n.slowDepth>0){const d=Math.max(.2,t*(.18+.7*n.slowDepth));a.push({sprite:"frost-ring",additive:!1,tint:n.chill?In.rimeDeep:In.rime,alpha:n.chill?.9:.75,x:e.x,y:e.feet,w:2*d,h:2*d,rot:0,ground:!0,flat:!0})}n.brittle&&c("cracks",e.x,e.top+l*.5,Math.min(e.width,l)*.85,16777215,.9,!1,e.id%7*.9);let h=0;if(n.burnStacks>0){const d=Math.min(3,n.burnStacks),p=Math.min(64*o,Math.max(14*o,l*(.26+.12*d)));c("glow",e.x,e.top,p*1.6,n.burnHot?In.hotGlow:In.burnGlow,n.burnHot?.5:.35,!0);for(let g=0;g<d;g++){const v=g===0?0:g===1?-1:1,m=s?1:1+.08*Math.sin(i*13+e.id+g*2.1),f=p*(g?.72:1)*m,S=f*.8,E=e.x+v*p*.36,b=e.top+p*.12-f/2;a.push({sprite:"ember",additive:!1,tint:16777215,alpha:1,x:E,y:b,w:S,h:f,rot:Uc}),n.burnHot&&a.push({sprite:"ember",additive:!0,tint:In.hot,alpha:.8,x:E,y:b,w:S*.9,h:f*.9,rot:Uc})}h=p}if(n.stunned){const d=Math.max(10*o,e.width*.32),p=d*.4,g=e.top-6*o,v=s?0:i*4;for(let m=0;m<3;m++){const f=v+m*Math.PI*2/3;c("stun-star",e.x+Math.cos(f)*d,g+Math.sin(f)*p,13*o,16777215,1,!1,s?0:f*.5)}h=Math.max(h,12*o)}let u=e.top-h-17*o;for(const d of N_(n)){if(d==="charge"){c("charge-glyph",e.x,u-3*o,18*o),u-=20*o;continue}const p=d==="frost"?n.frostMarks:n.burnPips;for(let g=0;g<p.total;g++){const v=g<p.filled,m=d==="frost"?v?In.frost:In.frostDim:v?In.burn:In.burnDim;c("pip",e.x+(g-(p.total-1)/2)*12*o,u,10*o,m,v?1:.8)}u-=13*o}return a}const mx=15.6,gx=1400,Nc={x:0,z:0},vx=12124144,Fc=44,Ki=n=>`${n.x},${n.z}`,_x=new Set(["hit","kill","stun","tempest","shot","armor-block","shield-break","meteor-warning","spread","discharge","shatter","leak"]),xx=.25,za=(n,e)=>`${n}:${e}`;class Mx{constructor(e,t){R(this,"quads",[]);R(this,"styles",Su);R(this,"stages",{fire:1,frost:1,storm:1,arcane:1});R(this,"knockbacks",new B_);R(this,"mainBolt",null);R(this,"frozen",new Map);R(this,"bubbles",0);R(this,"clock",0);R(this,"ids",new Map);R(this,"deaths",new Map);R(this,"flights",[]);R(this,"aimed",new Map);R(this,"carried",new Map);R(this,"struck",new Map);this.vfx=e,this.space=t}onImpact(e,t){this.after(this.carried.get(e),t)}after(e,t){e&&this.flights.includes(e)?e.held.push(t):t()}aim(e,t,i){for(const s of t)s!==void 0&&(i?this.aimed.set(za(e,s),i):this.aimed.delete(za(e,s)))}unaim(e){for(const t of[...this.aimed.keys()])t.startsWith(`${e}:`)&&this.aimed.delete(t)}carry(e){if(e.target===void 0)return;let t;e.type==="hit"?(t=this.aimed.get(za(e.element,e.target)),this.struck.set(e.target,t)):e.type==="kill"&&(t=this.struck.get(e.target)),t&&this.carried.set(e,t)}fly(e,t,i){const s={left:i+xx,held:[]};return this.flights.push(s),this.aim(e,t,s),()=>this.release([s])}release(e){for(const t of e){const i=this.flights.indexOf(t);if(!(i<0)){this.flights.splice(i,1);for(const s of t.held)s()}}}deathFlight(e){const t=e===void 0?void 0:this.deaths.get(e);return t&&this.carried.get(t)}idsOf(e){return(e??[]).map(t=>this.ids.get(Ki(t)))}follow(e,t,i){const s=this.space,r=s.ground(e),a=t??this.ids.get(Ki(e));let o=s.actor(e,a),l={x:r.x,y:r.y-this.vfx.px(Fc)*i};const c=()=>{o===void 0&&a!==void 0&&(o=s.actor(e,a));const h=o===void 0?void 0:s.place(o);return h&&(l={x:h.x,y:h.y-h.height*i}),l};return c(),c}heightOf(e,t){var s;const i=this.space.actor(e,t);return(i===void 0||(s=this.space.place(i))==null?void 0:s.height)??this.vfx.px(Fc)}sync(e){this.styles=O_(e);for(const t of["fire","frost","storm","arcane"])this.stages[t]=K_(t,e)}handle(e){this.mainBolt=null,this.ids.clear(),this.deaths.clear(),this.aimed.clear(),this.carried.clear(),this.struck.clear();for(const t of e){if(t.type==="kill"&&t.target!==void 0&&this.deaths.set(t.target,t),!t.to||t.target===void 0||!_x.has(t.type))continue;const i=Ki(t.to);this.ids.has(i)||this.ids.set(i,t.target)}for(const t of e)this.carry(t),this.event(t)}event(e){const t=e.to;switch(e.type){case"shot":t&&this.shot(e,t);break;case"meteor-warning":t&&this.meteorWarning(t,e.value??3);break;case"meteor-impact":if(this.aim("fire",this.idsOf(e.targets),void 0),t){const i=this.space.ground(t);this.blast("fire",{x:i.x,y:i.y-this.vfx.px(18)},i,e.value??4,"giant")}break;case"tempest":this.unaim("storm"),t&&this.tempest(t,e.target);break;case"stun":t&&this.stun(e.element??"arcane",t,e.target);break;case"zone":t&&this.zone(e.element==="fire"?"lava":"ice",t,e.value??2);break;case"shatter":if(t){const i=this.deathFlight(e.target);this.aim("frost",this.idsOf(e.targets),i),this.after(i,this.shatter(t,e.targets??[],e.target))}break;case"spread":e.from&&t&&this.after(this.deathFlight(this.ids.get(Ki(e.from))),this.spread(e.from,t,e.target));break;case"discharge":if(e.from&&t){const i=this.ids.get(Ki(e.from)),s=i===void 0?void 0:this.struck.get(i);this.aim("storm",[e.target],s),this.after(s,this.discharge(e.from,t,e.target))}break;case"nova":this.unaim("arcane"),this.vfx.nova(this.space.ground(Nc),mx,e.value===1);break;case"kill":if(t){const i=this.follow(t,e.target,.5),s=this.styles.mine;this.onImpact(e,()=>this.vfx.coins(i(),s?3:1,s))}break}}shot(e,t){const i=e.element??"arcane",s=this.vfx,r=this.space;if(i==="storm"){this.unaim("storm"),this.storm(e,t);return}if(i==="arcane"){const p=e.damage??1,g=this.mainBolt===null||p>=this.mainBolt*.5;g&&(this.mainBolt=p);const v=Lr("arcane",this.stages.arcane,this.styles),m=this.follow(t,e.target,.5);if(!g){this.aim("arcane",[e.target],void 0),s.beam(r.towerTop(),m,s.px(v.size*.5)*H_(),10185727,14272255),s.impact("arcane",m(),s.px(26),.6);return}const f=Oa(this.stages.arcane)*(this.styles.lens?1.6:1),S=this.fly("arcane",[e.target],v.flight);s.shot("arcane",r.towerTop(),m,[],0,v,()=>{s.impact("arcane",m(),s.px(34),f),S()});return}const a=Lr(i,this.stages[i],this.styles),o=e.value??2.5,l=r.ground(t),c=this.heightOf(t,e.target),h={x:l.x,y:l.y-c*.3},u=i==="fire"&&this.styles.fire==="meteor"?"meteor":"normal",d=this.fly(i,[e.target,...this.idsOf(e.targets)],a.flight);s.shot(i,r.towerTop(),()=>h,[],0,a,()=>{this.blast(i,h,l,o,u),d()})}blast(e,t,i,s,r){const a=this.vfx,o=Oa(this.stages[e])*(r==="giant"?1.5:r==="meteor"?1.2:1),l=Math.min(ox(a.metric,s).rx*.55,a.px(64));e==="fire"?(a.groundRing(i,s,16747050,{life:.55}),a.groundRing(i,s,16760944,{additive:!0,life:.45,alpha:.6}),a.edge(i,s,10104332,.5),r!=="normal"&&(a.scar(i,s*(r==="giant"?.6:.5),"ground-crack",r==="giant"?2.2:1.4),a.scar(i,s*.7,"glow",r==="giant"?1:.7,16742954,.75,!0)),r==="giant"&&a.groundRing(i,s*1.12,16760938,{life:.75,delay:.08,from:.2})):(a.groundRing(i,s,7329535,{life:.55,alpha:.75}),a.edge(i,s,16777215,.6,"frost-ring",.95)),a.impact(e,t,l,o)}meteorWarning(e,t){const i=this.vfx,s=this.space.ground(e),r=Re.sunfall.delay;if(i.add({sprite:"glow",tint:16734746,x:s.x,y:s.y,life:r,size0:t*1.9,alpha0:.25,alpha1:.5,ground:!0,flat:!0}),i.add({sprite:"band",tint:12068890,x:s.x,y:s.y,life:r,size0:t*2,alpha0:.95,alpha1:.95,ground:!0,flat:!0}),!i.reduced)for(let o=0;o<3;o++)i.groundRing(s,t,16747050,{additive:!1,life:.2,from:.75,delay:o*.2,alpha:.9});if(i.reduced){i.add({sprite:"meteor",x:s.x,y:s.y-i.px(120),life:r,size0:i.px(110),alpha0:1,alpha1:1,rot:1.2});return}const a={sprite:"meteor",size:130,glow:1.5,glowAlpha:.7,hot:.45,trail:1.6,every:.018,flight:r,arc:[0,0]};i.throw("fire",{x:s.x-i.px(180),y:s.y-i.px(560)},()=>({x:s.x,y:s.y-i.px(12)}),a)}storm(e,t){const i=this.vfx,s=this.space,r=this.styles,a=this.stages.storm,o=Z_(a,r),l=[t];for(const v of e.targets??[]){const m=l[l.length-1];Math.hypot(v.x-m.x,v.z-m.z)>=.14&&l.push(v)}const c=l.map((v,m)=>this.follow(v,m?void 0:e.target,.5)),h=c[0],u=()=>s.towerTop(),d=Oa(a),p=v=>i.add({sprite:"ring",additive:!0,tint:r.overcharge?15985407:rs.storm,x:v.x,y:v.y,life:.4,size0:i.px(r.overcharge?39:26),size1:i.px(r.overcharge?96:64),alpha0:r.overcharge?1:.75,ease:"out"});if(e.value===1){if(i.chain(u,[h],{width:i.px(o.width*.3),first:.55,glowAlpha:o.glowAlpha*.5,life:.2}),i.skyBolt(h,{width:i.px(o.width*.95),height:i.px(320),life:.3,lean:i.px(16)}),i.impact("storm",h(),i.px(40),d*(r.overcharge?1.4:1)),p(h()),r.clap){const v=s.ground(t);i.groundRing(v,Re.clap.radius,11565823,{life:.45}),i.groundRing(v,Re.clap.radius,15127295,{additive:!0,life:.4,alpha:.6}),i.edge(v,Re.clap.radius,4857984,.45)}for(const v of c.slice(1))i.skyBolt(v,{width:i.px(14),height:i.px(260),life:.22,lean:-i.px(10)}),i.impact("storm",v(),i.px(24),.7);return}const g=r.storm==="chain";i.chain(u,c,{width:i.px(o.width),glowAlpha:o.glowAlpha,bright:v=>z_(v,g),bridges:F_(l,r.bridgeRange)}),i.impact("storm",h(),i.px(36),d*(r.overcharge?1.3:1)),p(h()),c.slice(1).forEach((v,m)=>i.impact("storm",v(),i.px(m<3?26:18),m<3?.8:.5))}tempest(e,t){const i=this.vfx,s=this.follow(e,t,.5);i.skyBolt(s,{width:i.px(18),height:i.px(300),life:.3,tint:15852287,glow:14531071,contour:6501018,pulse:!0,lean:i.px(14)}),i.impact("storm",s(),i.px(28),.8)}discharge(e,t,i){const s=this.vfx,r=this.follow(e,void 0,.5),a=this.follow(t,i,.5);return()=>{const o=r();s.bolts.push({a:r,b:a,t:0,life:.25,width:s.px(12),sprite:"beam",tint:16762938,glow:16773280,glowAlpha:.9,still:!0}),s.add({sprite:"ring",additive:!0,tint:16773280,x:o.x,y:o.y,life:.3,size0:s.px(18),size1:s.px(46),alpha0:.95,ease:"out"}),s.impact("storm",a(),s.px(24),.7)}}spread(e,t,i){const s=this.vfx,r=this.follow(e,void 0,.5),a=this.follow(t,i,.5),o=this.follow(t,i,0),l={...Lr("fire",this.stages.fire,this.styles),size:30,flight:.3,arc:[30,.25]};return()=>s.throw("fire",r(),a,l,()=>{s.impact("fire",a(),s.px(26),.6),s.groundRing(o(),.9,16747050,{life:.4}),s.edge(o(),.9,10104332,.45)})}shatter(e,t,i){const s=this.vfx,r=this.follow(e,i,.5),a=t.map(l=>this.follow(l,void 0,.5)),o=Re.shatter.radius;return()=>{const l=this.space.ground(e),c=r();s.groundRing(l,o,7329535,{life:.45,alpha:.75}),s.edge(l,o,16777215,.45,"frost-ring",.9),s.impact("frost",c,s.px(34),.8),s.shards(c,a.map(h=>h()))}}stun(e,t,i){const s=i??this.ids.get(Ki(t))??this.space.actor(t);if(e==="frost"||e==="arcane"){s!==void 0&&this.frozen.set(s,e==="arcane"?vx:16777215);return}const r=this.follow(t,i,.5)();this.vfx.impact("storm",{x:r.x,y:r.y-this.heightOf(t,i)*.45},this.vfx.px(24),.7)}zone(e,t,i){this.vfx.groundRing(this.space.ground(t),i,e==="lava"?16742946:12579583,{life:.35,from:.5,alpha:.8})}frame(e,t,i,s=1){this.quads=[];const r=this.vfx,a=yu(e);e.time<this.clock&&(this.release([...this.flights]),r.clear(),this.frozen.clear(),this.mainBolt=null),this.clock=e.time,r.reduced&&this.release([...this.flights]);for(const o of this.flights)o.left-=i;this.release(this.flights.filter(o=>o.left<0));for(const o of this.frozen.keys())e.enemies.some(l=>l.id===o)||this.frozen.delete(o);for(const o of dx(e.zones,t,r.reduced))this.decal(o);if(a.capstone==="frost-ice-age"&&s>.001&&this.iceAge(t,s),i>0&&!r.reduced&&this.lavaBubbles(e.zones,i),i>0)for(const o of this.knockbacks.update(e.enemies,e.time))r.streak(this.space.ground(On(o.lane,o.from)),this.space.ground(On(o.lane,o.to)),r.px(24))}marks(e,t,i,s){const r=this.frozen.get(t.id);if(r!==void 0&&!e.stunned)this.frozen.delete(t.id);else if(r!==void 0){const a=Math.max(1,t.feet-t.top),o=Math.max(t.width,a)*1.1,l=t.top+a*.55;this.push({sprite:"glow",additive:!0,tint:10479871,alpha:.35,x:t.x,y:l,w:o*1.35,h:o*1.35,rot:0}),this.push({sprite:"ice-block",additive:!1,tint:r,alpha:.72,x:t.x,y:l,w:o,h:o,rot:0})}for(const a of px(e,t,i,s,this.vfx.reduced,this.vfx.scale))this.push(a)}push(e){this.quads.length<gx&&this.quads.push(e)}decal(e){const t=this.space.ground(e.at);this.push({sprite:e.sprite,additive:e.additive,tint:e.tint,alpha:e.alpha,x:t.x,y:t.y,w:e.radius*2,h:e.radius*2,rot:e.rot,ground:!0,flat:!0})}around(e,t,i=0){const s=this.space.ground(Nc),r=Ba(this.vfx.metric,Math.cos(t)*e,Math.sin(t)*e);return{x:s.x+r.x,y:s.y+r.y-i}}iceAge(e,t){const i=this.vfx;for(const s of fx(e,i.reduced,t))this.decal(s);if(!i.reduced)for(let s=0;s<3;s++){const r=e*.9+s*2.09,a=this.around(kr*.72,r,i.px(14)),o=Ba(i.metric,-Math.sin(r),Math.cos(r));this.push({sprite:"wind-blade",additive:!0,tint:15137791,alpha:.32*t,x:a.x,y:a.y,w:i.px(80),h:i.px(80)*.55,rot:Math.atan2(o.y,o.x)})}}lavaBubbles(e,t){const i=this.vfx,s=e.filter(r=>r.kind==="lava");if(s.length)for(this.bubbles-=t;this.bubbles<=0;this.bubbles+=.25/s.length){const r=s[Math.floor(i.rand()*s.length)],a=i.rand()*Math.PI*2,o=Math.sqrt(i.rand())*r.radius*.8,l=this.space.ground({x:r.x,z:r.z}),c=Ba(i.metric,Math.cos(a)*o,Math.sin(a)*o);i.add({sprite:"ember",x:l.x+c.x,y:l.y+c.y,vy:-55,gravity:-30,life:.55,size0:i.px(11),size1:i.px(3),alpha0:1,alpha1:.2,spin:i.range(-3,3)})}}}const bx=.5;function yx(n,e){return bx}const Wo=yx(),Oc={landscape:{mask:"island-ambient.png",trees:[[669,354,41,37],[758,330,35,58],[846,283,43,49],[803,417,55,55],[705,407,27,25],[873,437,35,55],[923,330,55,47],[925,242,38,40],[955,272,32,50],[1015,252,32,50],[1055,235,23,21],[1050,410,22,22],[1128,232,55,45],[1198,247,20,23],[1283,249,38,38],[1409,280,20,22],[1415,404,32,22],[1653,294,29,48],[1648,387,40,40],[1700,337,23,25],[1745,454,37,28],[1783,592,45,45],[1718,584,24,22],[1468,510,42,20],[490,570,40,18],[615,667,48,45],[713,622,32,40],[803,662,25,35],[778,747,30,25],[885,712,57,60],[979,670,41,60],[973,737,40,25],[1056,648,51,48],[1144,657,40,30],[1154,752,56,50],[1198,797,50,42],[1328,794,30,27],[1583,784,35,18],[1488,807,40,25]],waterfalls:[{x0:640,x1:702,top:762,bottom:1044},{x0:930,x1:994,top:832,bottom:1092}],farIslands:[[92,87,68,55],[238,260,130,110],[50,374,30,28],[110,434,50,45],[250,524,85,70],[196,717,76,75],[328,817,73,85],[555,120,45,43],[620,177,25,30],[535,884,55,28],[1400,172,50,50],[2118,77,65,52],[1888,180,78,68],[1781,214,26,28],[2110,354,132,108],[2295,370,20,25],[2256,447,28,26],[1806,432,24,30],[1898,487,33,35],[2054,607,88,82],[1943,772,62,60],[2176,870,108,95]],birdSky:[0,40,2304,332],sparkles:[1152,584,610,295]}},Sx=n=>[(n.x0+n.x1)/2,n.bottom],Bt={sway:{amplitude:3.4,rustle:.45,direction:[.94,.34],gustFrequency:.011,gustSpeed:1.1,swaySpeed:1.6,rustleSpeed:4.6},bob:{height:3.2,speed:.65},water:{speed:120,light:.32},clouds:{drift:7,opacity:.22,warp:2.5},birds:{maxFlocks:2,perFlock:[3,5],firstDelay:[2,5],interval:[9,16],speed:[55,80],size:[15,20],flap:9,margin:60},puffs:{interval:.25,life:2,rise:12,spread:.35,size:[.8,1.7],alpha:.6},sparkles:{count:9,interval:.45,life:[2.4,4],rise:30,size:[11,17]}},Br=["bird-up","bird-down","puff","sparkle"];function Eu(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}class Ex{constructor(e,t=1){R(this,"rand");R(this,"flocks",[]);R(this,"puffs",[]);R(this,"motes",[]);R(this,"nextFlock");R(this,"puffClock",0);R(this,"moteClock",0);R(this,"time",0);this.layout=e,this.rand=Eu(t),this.nextFlock=this.between(Bt.birds.firstDelay)}between([e,t]){return e+(t-e)*this.rand()}update(e,t=!1){if(t){this.flocks=[],this.puffs=[],this.motes=[];return}this.time+=e,this.updateBirds(e),this.updatePuffs(e),this.updateMotes(e)}updateBirds(e){const t=Bt.birds,[i,s,r,a]=this.layout.birdSky;if(this.nextFlock-=e,this.nextFlock<=0&&this.flocks.length<t.maxFlocks){const o=this.rand()<.5?1:-1,l=Math.round(this.between([t.perFlock[0],t.perFlock[1]])),c=Array.from({length:l},(h,u)=>{const d=Math.ceil(u/2),p=u%2?-1:1;return{dx:-o*d*14,dy:p*d*9,phase:this.rand()*6.2832,size:this.between(t.size)}});this.flocks.push({dir:o,x:o>0?i-t.margin:r+t.margin,baseY:this.between([s+20,a-20]),speed:this.between(t.speed),t:0,birds:c}),this.nextFlock=this.between(t.interval)}for(const o of this.flocks)o.t+=e,o.x+=o.dir*o.speed*e;this.flocks=this.flocks.filter(o=>o.dir>0?o.x<r+t.margin*2:o.x>i-t.margin*2)}updatePuffs(e){const t=Bt.puffs;for(const i of this.puffs)i.age+=e,i.x+=i.vx*e,i.y-=t.rise*e;for(this.puffs=this.puffs.filter(i=>i.age<t.life),this.puffClock+=e;this.puffClock>=t.interval;this.puffClock-=t.interval)for(const i of this.layout.waterfalls){const[s,r]=Sx(i),a=i.x1-i.x0;this.puffs.push({x:s+(this.rand()-.5)*a*t.spread*2,y:r-6,vx:(this.rand()-.5)*8,age:0,width:a})}}updateMotes(e){const t=Bt.sparkles,[i,s,r,a]=this.layout.sparkles;for(const o of this.motes)o.age+=e,o.y-=t.rise/o.life*e;for(this.motes=this.motes.filter(o=>o.age<o.life),this.moteClock+=e;this.moteClock>=t.interval;this.moteClock-=t.interval){if(this.motes.length>=t.count)continue;const o=this.rand()*6.2832,l=Math.sqrt(this.rand());this.motes.push({x:i+Math.cos(o)*l*r,y:s+Math.sin(o)*l*a,age:0,life:this.between(t.life),size:this.between(t.size),phase:this.rand()*6.2832})}}sprites(){const e=[],t=Bt.puffs;for(const i of this.puffs){const s=i.age/t.life;e.push({cell:"puff",x:i.x,y:i.y,size:i.width*(t.size[0]+(t.size[1]-t.size[0])*s),rot:0,alpha:t.alpha*Math.sin(Math.PI*s),flip:!1})}for(const i of this.flocks)for(const s of i.birds){const r=Math.sin(i.t*Bt.birds.flap+s.phase)>0;e.push({cell:r?"bird-up":"bird-down",x:i.x+s.dx,y:i.baseY+s.dy+Math.sin(i.t*.8+s.phase*.2)*6,size:s.size,rot:0,alpha:1,flip:i.dir<0})}for(const i of this.motes){const s=i.age/i.life;e.push({cell:"sparkle",x:i.x,y:i.y,size:i.size,rot:i.age*1.5,alpha:Math.sin(Math.PI*s)*(.65+.35*Math.sin(i.age*8+i.phase)),flip:!1})}return e}}function kc(n,e,t){const i=Eu(t),s=new Float32Array(n*n),r=c=>c*c*(3-2*c);let a=1;for(let c=0,h=e;c<3;c++,h*=2,a*=.5){const u=Array.from({length:h*h},i),d=(p,g)=>u[g%h*h+p%h];for(let p=0;p<n;p++)for(let g=0;g<n;g++){const v=g/n*h,m=p/n*h,f=Math.floor(v),S=Math.floor(m),E=r(v-f),b=r(m-S),I=d(f,S)+(d(f+1,S)-d(f,S))*E,C=d(f,S+1)+(d(f+1,S+1)-d(f,S+1))*E;s[p*n+g]+=a*(I+(C-I)*b)}}let o=1/0,l=-1/0;for(const c of s)o=Math.min(o,c),l=Math.max(l,c);for(let c=0;c<s.length;c++)s[c]=(s[c]-o)/(l-o||1);return s}const Cs=64,Er=128,ji=128,Tt=n=>n.toFixed(5);function wx(){const n=document.createElement("canvas");n.width=Cs*Br.length,n.height=Cs;const e=n.getContext("2d"),t=(r,a)=>{e.save(),e.translate(Br.indexOf(r)*Cs+Cs/2,Cs/2),a(),e.restore()},i=r=>()=>{e.fillStyle="#34465c",e.strokeStyle="#34465c",e.lineCap="round",e.lineJoin="round",e.lineWidth=5;const a=r?-16:12,o=r?-4:6;e.beginPath(),e.moveTo(-26,a),e.quadraticCurveTo(-14,o-6,-3,2),e.quadraticCurveTo(0,4,3,2),e.quadraticCurveTo(14,o-6,26,a),e.stroke(),e.beginPath(),e.ellipse(2,3,7,4,0,0,Math.PI*2),e.fill()};t("bird-up",i(!0)),t("bird-down",i(!1)),t("puff",()=>{for(const[r,a,o]of[[-9,4,17],[9,3,16],[0,-6,19],[0,8,15]]){const l=e.createRadialGradient(r,a,0,r,a,o);l.addColorStop(0,"rgba(255,255,255,.85)"),l.addColorStop(.6,"rgba(240,250,255,.45)"),l.addColorStop(1,"rgba(235,248,255,0)"),e.fillStyle=l,e.beginPath(),e.arc(r,a,o,0,Math.PI*2),e.fill()}}),t("sparkle",()=>{const r=e.createRadialGradient(0,0,0,0,0,26);r.addColorStop(0,"rgba(255,250,215,.9)"),r.addColorStop(.35,"rgba(255,236,160,.35)"),r.addColorStop(1,"rgba(255,236,160,0)"),e.fillStyle=r,e.beginPath(),e.arc(0,0,26,0,Math.PI*2),e.fill(),e.fillStyle="#fffbe8",e.beginPath();for(let a=0;a<8;a++){const o=a*Math.PI/4,l=a%2?4:20;e.lineTo(Math.cos(o)*l,Math.sin(o)*l)}e.closePath(),e.fill()});const s=new ol(n);return s.colorSpace=At,s}function Tx(){const n=kc(ji,4,21),e=kc(ji,8,34),t=new Uint8Array(ji*ji*4);for(let s=0;s<n.length;s++)t.set([n[s]*255,e[s]*255,0,255],s*4);const i=new al(t,ji,ji);return i.wrapS=i.wrapT=Nr,i.magFilter=i.minFilter=Yt,i.needsUpdate=!0,i}function Ax(){const n=Bt.sway,e=Math.hypot(n.direction[0],n.direction[1]);return`#ifdef USE_MAP
  vec2 paintPx = vec2(vMapUv.x, 1.0 - vMapUv.y) * uPaintSize;
  vec4 amb = texture2D(uAmbient, vMapUv);
  float isle = max(0.0, (1.0 - amb.a) / 0.8);
  vec2 o = vec2(0.0);
  float gust = 0.55 + 0.45 * sin(dot(paintPx, vec2(${Tt(n.direction[0]/e)}, ${Tt(n.direction[1]/e)})) * ${Tt(n.gustFrequency)} - uTime * ${Tt(n.gustSpeed)});
  float sway = 0.75 + 0.25 * sin(uTime * ${Tt(n.swaySpeed)} + paintPx.x * 0.031 + paintPx.y * 0.017);
  float leaf = uTime * ${Tt(n.rustleSpeed)} + paintPx.x * 0.12 + paintPx.y * 0.1;
  o += amb.r * vec2(${Tt(n.amplitude)} * gust * sway + ${Tt(n.rustle)} * sin(leaf), ${Tt(n.rustle)} * cos(leaf * 1.3));
  o.y += isle * ${Tt(Bt.bob.height)} * sin(uTime * ${Tt(Bt.bob.speed)} + (paintPx.x * 0.0045 + paintPx.y * 0.003) * 6.2832);
  vec2 cloudUv = (paintPx + vec2(-uTime * ${Tt(Bt.clouds.drift)}, 0.0)) / 520.0;
  float cloud = texture2D(uNoise, cloudUv).r;
  o += amb.b * ${Tt(Bt.clouds.warp)} * vec2(cloud - 0.5, texture2D(uNoise, cloudUv * 1.7 + 0.37).r - 0.5);
  o *= uStrength;
  vec4 sampledDiffuseColor = texture2D(map, vMapUv + vec2(-o.x, o.y) / uPaintSize);
  diffuseColor *= sampledDiffuseColor;
  float streak = texture2D(uNoise, vec2(paintPx.x / 26.0, (paintPx.y - uTime * ${Tt(Bt.water.speed)}) / 340.0)).g;
  diffuseColor.rgb += amb.g * uStrength * ${Tt(Bt.water.light)} * smoothstep(0.5, 0.82, streak) * vec3(0.92, 1.0, 1.0);
  diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), smoothstep(0.55, 0.78, cloud) * amb.b * uStrength * ${Tt(Bt.clouds.opacity)});
#endif`}class Bc{constructor(e,t,i,s,r){R(this,"uniforms",{uAmbient:{value:null},uNoise:{value:Tx()},uTime:{value:0},uStrength:{value:1},uPaintSize:{value:new Je(1,1)}});R(this,"sims",{landscape:new Ex(Oc.landscape,1)});R(this,"mesh");R(this,"cell");R(this,"alpha");R(this,"m",new rt);R(this,"q",new zn);R(this,"axis",new k(0,0,1));R(this,"p",new k);R(this,"s",new k);this.masks=i,this.depth=s,t.onBeforeCompile=l=>{Object.assign(l.uniforms,this.uniforms),l.fragmentShader=`uniform sampler2D uAmbient;
uniform sampler2D uNoise;
uniform float uTime;
uniform float uStrength;
uniform vec2 uPaintSize;
`+l.fragmentShader.replace("#include <map_fragment>",Ax())},t.customProgramCacheKey=()=>"ambient-backdrop",t.needsUpdate=!0;const a=new gn(1,1);this.cell=new Sn(new Float32Array(Er),1),this.alpha=new Sn(new Float32Array(Er),1),this.cell.setUsage(jt),this.alpha.setUsage(jt),a.setAttribute("iCell",this.cell),a.setAttribute("iAlpha",this.alpha);const o=new qt({map:wx(),transparent:!0,depthWrite:!1,side:sn,forceSinglePass:!0});o.onBeforeCompile=l=>{l.vertexShader=`attribute float iCell;
attribute float iAlpha;
varying float vAlpha;
`+l.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = vec2((uv.x + iCell) / ${Tt(Br.length)}, uv.y);
vAlpha = iAlpha;`),l.fragmentShader=`varying float vAlpha;
`+l.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.a *= vAlpha;`)},o.customProgramCacheKey=()=>"ambient-sprites",this.mesh=new Ys(a,o,Er),this.mesh.instanceMatrix.setUsage(jt),this.mesh.frustumCulled=!1,this.mesh.renderOrder=r,this.mesh.count=0,e.add(this.mesh)}static async loadMasks(e){const t=await new Fh().loadAsync(e+Oc.landscape.mask);return t.colorSpace=Dn,t.premultiplyAlpha=!1,t.generateMipmaps=!1,t.minFilter=t.magFilter=Yt,{landscape:t}}update(e,t,i,s){const r=Math.min(.1,Math.max(0,e)),a=Ho[t].size;this.uniforms.uAmbient.value=this.masks[t],this.uniforms.uPaintSize.value.set(a[0],a[1]),this.uniforms.uStrength.value=s?0:1,s||(this.uniforms.uTime.value+=r);const o=this.sims[t];o.update(r,s);let l=0;for(const c of o.sprites()){if(l>=Er)break;const h=c.cell==="bird-up"||c.cell==="bird-down",u=Math.max(h?10:0,c.size*i.scale);this.q.setFromAxisAngle(this.axis,-c.rot),this.p.set(i.offset[0]+c.x*i.scale,-(i.offset[1]+c.y*i.scale),this.depth),this.m.compose(this.p,this.q,this.s.set(c.flip?-u:u,u,1)),this.mesh.setMatrixAt(l,this.m),this.cell.setX(l,Br.indexOf(c.cell)),this.alpha.setX(l,c.alpha),l++}this.mesh.count=l,this.mesh.instanceMatrix.needsUpdate=this.cell.needsUpdate=this.alpha.needsUpdate=!0}get sprites(){return this.mesh.count}}const Rx=1.8,wu=.24,Cx=6,Px=.7,Zi=(n,[e,t])=>Math.min(1,Math.max(0,(n-e)/(t-e))),Ix=n=>n*n*(3-2*n),Ji=n=>1-(1-n)**3,Qi={body:[0,.4],dust:[0,.45],crystal:[.62,.88],flash:[.88,1],canister:n=>[.3+.06*n,.48+.06*n],ring:n=>[.45+.07*n,.7+.07*n]};function Lx(n,e){const t=i=>Math.round((n>>i&255)+(255-(n>>i&255))*e)<<i;return t(16)|t(8)|t(0)}function Dx(n){return n>=7?3:n>=4?2:1}const Vs=["fire","frost","storm","core"],Ux=["core-prism","fire-sunfall","frost-ice-age","storm-tempest"];function Nx(n){return n<=0?0:Math.round(Math.min(1,.2+.16*n)*100)/100}function Fx(n){const e=yu(n),t=n.built;return{built:t,stage:t?Dx(n.core):1,canisters:Vs.map(i=>{const s=i==="core"?n.core:n.levels[i];return{branch:i,level:s,fill:t?Nx(s):0}}),forks:t?Object.fromEntries(Vs.flatMap(i=>{const s=e.ports[i].fork;return s&&Object.hasOwn(Cu,s)?[[i,s]]:[]})):{},capstone:t&&e.capstone&&Ux.includes(e.capstone)?e.capstone:null,chargeRing:t&&e.chargeRing,hasteAura:t&&e.hasteAura}}const zr=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],Tu=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],zc=n=>{const e=Math.hypot(...n)||1;return[n[0]/e,n[1]/e,n[2]/e]},Au=yn.right,Ru=yn.up,Ha=Tu(Au,Ru),Va=n=>[zr(n,Au),-zr(n,Ru)];function Hc(n,e,t=4){const[i,s,r]=[n.tiltX,n.spin*e,n.tiltZ],[a,o,l,c,h,u]=[Math.cos(i),Math.sin(i),Math.cos(s),Math.sin(s),Math.cos(r),Math.sin(r)],d=(E,b,I)=>{const C=[h*E-u*b,u*E+h*b,I],T=[l*C[0]+c*C[2],C[1],-c*C[0]+l*C[2]];return[T[0],a*T[1]-o*T[2],o*T[1]+a*T[2]]},p=d(0,1,0),g=d(1,0,0),v=d(0,0,1),m=zc(Ha.map((E,b)=>E-zr(Ha,p)*p[b])),f=zc(Tu(p,m)),S=Array.from({length:t},(E,b)=>{const I=b/t*Math.PI*2,C=g.map((M,L)=>M*Math.cos(I)+v[L]*Math.sin(I)),[T,D]=Va(C),y=zr(C,Ha);return{x:T,y:D,front:y>0,depth:y}});return{major:Va(f),front:Va(m),studs:S}}const Ox=.3,kx=4,Bx={arcane:"core",fire:"fire",frost:"frost",storm:"storm"};class zx{constructor(){R(this,"crystal",0);R(this,"build",1);R(this,"nova",0);R(this,"muzzles",[]);R(this,"shots",0);R(this,"flash",{fire:0,frost:0,storm:0,core:0})}handle(e){for(const t of e){const i=t.element?Bx[t.element]:void 0;if(t.type==="shot"&&(this.crystal=1,i&&(this.flash[i]=1,this.muzzles.push({branch:i,age:0,seed:this.shots++})),this.muzzles.length>Cx&&this.muzzles.shift()),t.type==="upgrade"&&i&&(this.flash[i]=1),t.type==="tempest"&&(this.flash.storm=1),t.type==="build"){this.build=0,this.muzzles.length=0,this.nova=0,this.crystal=0;for(const s of Vs)this.flash[s]=0}t.type==="nova"&&(this.nova=1)}}update(e,t){const i=s=>Math.max(0,s-e/Ox);this.crystal=i(this.crystal);for(const s of Vs)this.flash[s]=i(this.flash[s]);t&&this.build<1?(this.build=1,this.crystal=1):this.build=Math.min(1,this.build+e/Rx),this.nova=Math.max(0,this.nova-e/Px);for(const s of this.muzzles)s.age+=e;for(;this.muzzles.length&&this.muzzles[0].age>=wu;)this.muzzles.shift()}canister(e){return this.flash[e]}ringRate(){return 1+kx*this.nova}}const $o={1:{body:"body-1",dais:[242,731],daisWidth:362,cup:[241,472],crystal:217,rings:[128],canister:68,canisters:[[137,758],[207,768],[277,768],[347,758]],display:1.12},2:{body:"body-2",dais:[715.5,704],daisWidth:428,cup:[716,333],crystal:259,rings:[150,166],canister:80,canisters:[[592.5,783],[674.5,795],[756.5,795],[838.5,783]],display:1.05},3:{body:"body-3",dais:[1244.5,723],daisWidth:558,cup:[1249,194],crystal:302,rings:[170,188,205],canister:100,canisters:[[1100.5,726],[1196.5,740],[1292.5,740],[1388.5,726]],display:1}},Hx={1:[164,248],2:[198,340],3:[222,472]},Vx={1:{column:.55,crown:.85},2:{column:.55,crown:.85},3:{column:.55,crown:.85}},Vc=[{spec:{tiltX:.3,tiltZ:-.25,spin:.18},dy:0},{spec:{tiltX:-.45,tiltZ:.3,spin:-.22},dy:-8},{spec:{tiltX:.15,tiltZ:.55,spin:.26},dy:8}],Gc=14,Gx=30,es=.92,Wx={crystal:{piece:"crystal",height:1,glow:8378623},"core-prism":{piece:"cap-prism",height:1.08,glow:10483711},"fire-sunfall":{piece:"cap-sun",height:.62,glow:16751162},"frost-ice-age":{piece:"cap-ice",height:1.08,glow:14219007},"storm-tempest":{piece:"cap-storm",height:1.25,glow:10181887}},$x={tiltX:.5,tiltZ:.2,spin:.6},Dr={fire:16742958,frost:6543103,storm:11561983,core:7339984},Cu={"fire-meteor":{turn:1.4,sway:.22},"fire-wildfire":{turn:1.3},"frost-glacier":{breathe:[.05,.8]},"frost-brittle":{breathe:[.06,1.1]},"storm-chain":{crackle:!0},"storm-thunder":{crackle:!0},"core-nova-power":{breathe:[.07,2.4]},"core-nova-rush":{turn:1.8}},Xx=.42,qx=13684944,Ps={foot:[.5,.982],window:[.127,.328,.873,.786],orb:[.5,.094]},Is={tint:8382719,alpha:.38},Yx=.98,Kx=.12,jx=2.4,Zx=.35,Jx=60,Qx=1.1,Wc=5,e1=12580095,Ga=16769696,t1=6,hi=8781788,$c=15137791,n1=12950527,wr=24,Xc=48,qc=24,i1=9102809,Yc=120;function s1(n){return n.island[1]/n.island[0]}const ui=(n,e,t,i)=>[n[0]+Math.cos(t)*e,n[1]+Math.sin(t)*e*i];function r1(n,e,t){const i=$o[n.stage],s=[],r=[],a=!n.built,o=a?1:t.pulse.build,l=o<1,c=yn.sinPitch,h=a&&!t.reduced?Math.sin(t.time*jx):0,u=a?Is.tint:16777215,d=a?Is.alpha+.05*h:1,p=N=>[N[0]-i.dais[0],N[1]-i.dais[1]],g=(N,K,Q,Y,ue,P=u,Z=d,te)=>s.push({name:N,x:K,y:Q,ux:Y,uy:0,vx:0,vy:-ue,tint:P,alpha:Z,...te?{sub:te}:{}}),v=(N,K,Q,Y,ue,P,Z)=>{const te=e.pieces[N],le=Math.max(te.art[0],te.art[1]),ne=Y*te.art[0]/le,q=Y*te.art[1]/le,pe=Math.cos(ue),Te=Math.sin(ue);s.push({name:N,x:K,y:Q,ux:ne*pe,uy:ne*Te,vx:q*Te,vy:-q*pe,tint:P,alpha:Z})},m=(N,K,Q,Y,ue)=>{a||r.push({x:N,y:K,size:Q,color:Y,k:ue*t.energy})};if(a){const N=i.daisWidth*Yx,K=t.reduced?0:t.time*Kx,Q=Math.cos(K),Y=Math.sin(K);s.push({name:"fx-rune",x:0,y:0,ux:N*Q,uy:N*Y*c,vx:N*Y,vy:-N*Q*c,tint:Is.tint,alpha:.5+.05*h}),r.push({x:0,y:0,size:i.daisWidth*.95,color:Is.tint,k:(.22+.1*h)*t.energy})}const f=e.pieces[i.body],S=f.at[0]+f.art[0]/2-i.dais[0],E=f.at[1]+f.art[1]-i.dais[1],b=t.shape??Vx[n.stage],[I,C]=Hx[n.stage],T=f.art[1],D=(C-I)*(1-b.column),y=T-D,M=l?Ix(Zi(o,Qi.body)):1,L=y*M;if(D===0)g(i.body,S,E-L/2,f.art[0],L,u,d,M<1?[0,1-M,1,1]:void 0);else{let N=E,K=L;for(const[Q,Y,ue]of[[C,T,1],[I,C,b.column],[0,I,1]]){const P=(Y-Q)*ue,Z=Math.min(P,K);if(Z<=0)break;g(i.body,S,N-Z/2,f.art[0],Z,u,d,[0,(Y-(Y-Q)*Z/P)/T,1,Y/T]),N-=Z,K-=Z}}const B=D===0?s[s.length-1]:{name:i.body,x:S,y:E-L/2,ux:f.art[0],uy:0,vx:0,vy:-L,tint:u,alpha:d};if(l){if(M>0&&M<1)for(let K=0;K<5;K++)m(S+(K-2)*f.art[0]*.16,E-L,f.art[0]*.32,e1,.75*(1-M**4));const N=Zi(o,Qi.dust);if(N>0&&N<1)for(let K=0;K<4;K++){const[Q,Y]=ui([0,0],i.daisWidth*.5,Math.PI*(.12+.76*K/3),c),ue=Y-120*Ji(N);v("fx-dust",Q,Y-34*N,i.daisWidth*(.2+.16*N),K%2?.2:-.2,16777215,.85*(1-N)),v("fx-spark",Q+(K-1.5)*10*N,ue,i.crystal*.09*(1-N),0,Ga,1-N),m(Q,ue,i.crystal*.25,Ga,.5*(1-N))}}const H=Wx[n.capstone??"crystal"],ee=e.pieces[H.piece],G=i.crystal*b.crown,X=G*H.height,ie=X*ee.art[0]/ee.art[1],W=p(i.cup)[0],he=p(i.cup)[1]+D,fe=t.reduced?0:Math.sin(t.time*1.6)*3*t.energy,ge=[W,he+Gc-G/2+fe],Ae=l?Ji(Zi(o,Qi.crystal)):1,qe=(t.reduced?0:t1*t.pulse.crystal**2)-(1-Ae)*G*Qx,Ue=n.capstone==="fire-sunfall"?[ge[0],ge[1]-G*.1+qe]:[W,he+Gc-X/2+fe+qe],He=t.reduced?0:t.ringTime,J=N=>({...N,tiltX:N.tiltX*t.energy,tiltZ:N.tiltZ*t.energy}),re=N=>l?Ji(Zi(o,Qi.ring(N))):1,ve=a?[]:i.rings.map((N,K)=>{const Q=re(K);return{r:N*b.crown*(.3+.7*Q),open:Q,c:[ge[0],ge[1]+Vc[K].dy*b.crown],...Hc(J(Vc[K].spec),He+(1-Q)*Wc)}});n.capstone==="fire-sunfall"&&!a&&ve.push({r:X*.62*(.3+.7*Ae),open:Ae,c:Ue,...Hc(J($x),He+(1-Ae)*Wc)});const Le=e.pieces.stud.art,Ee=Gx*b.crown/Le[0],Ve=i.rings.length-1,Mt=t.energy>0?n.forks:{},A=(N,K,Q,Y,ue,P,Z)=>{const te=e.pieces[`fork-${N}`],le=Cu[N],[ne,q]=le.breathe??[0,0],pe=G*Xx*(1+ne*Math.sin(He*q)),Te=Math.max(te.art[0],te.art[1]),Ke=pe*te.art[0]/Te,ke=pe*te.art[1]/Te,wt=le.turn?le.sway?le.sway*Math.sin(He*le.turn):He*le.turn:0,bt=Math.cos(wt),Hn=Math.sin(wt),Nt=le.crackle&&!t.reduced?.78+.22*Math.sin(He*11+Q)**2:1;s.push({name:`fork-${N}`,x:Y,y:ue,ux:Ke*bt,uy:Ke*Hn,vx:ke*Hn,vy:-ke*bt,tint:P>0?16777215:qx,alpha:t.energy*Nt*Z}),P>0&&m(Y,ue,pe*1.5,Dr[K],(.4+.45*t.pulse.canister(K))*Nt*Math.min(1,P/.3)*Z)},nt=N=>{const{r:K,c:Q,studs:Y,open:ue}=ve[Ve];ue>0&&Vs.forEach((P,Z)=>{const te=Mt[P],le=Y[Z];te&&le.front===N&&A(te,P,Z,Q[0]+le.x*K*es,Q[1]+le.y*K*es,le.depth,ue)})},Fe=N=>{ve.forEach(({r:K,c:Q,major:Y,front:ue,studs:P,open:Z},te)=>{if(Z<=0)return;const le=Y[0]<0?[-Y[0],-Y[1]]:Y,ne=N?1:-1;s.push({name:"ring",x:Q[0]+ue[0]*K/2*ne,y:Q[1]+ue[1]*K/2*ne,ux:le[0]*2*K,uy:le[1]*2*K,vx:-ue[0]*K,vy:-ue[1]*K,tint:N?16777215:14272936,alpha:Z,sub:N?[0,.5,1,1]:[0,0,1,.5]});for(const q of P)q.front===N&&g("stud",Q[0]+q.x*K*es,Q[1]+q.y*K*es,Le[0]*Ee,Le[1]*Ee,N?16777215:13284490,Z);te===Ve&&!N&&nt(!1)}),N&&ve.length&&nt(!0)},Pe=a?0:t.charge??0,ye=Pe>=1&&!t.reduced&&t.energy>0&&Ae>=1,it=N=>{if(a)for(let K=0;K<3;K++){const Q=K/3*Math.PI*2+(t.reduced?0:t.time*Zx),Y=Math.sin(Q),ue=t.reduced?0:Math.sin(t.time*1.3+K*2)*5;Y>0===N&&v("crystal",W+Math.cos(Q)*G*.62,ge[1]+Y*G*.62*c+ue,G*.2,(K-1)*.3,Is.tint,.5+.05*h)}if(ye)for(let K=0;K<3;K++){const Q=He*1.6+K/3*Math.PI*2,Y=Math.sin(Q);Y>0===N&&v("fx-spark",Ue[0]+Math.cos(Q)*X*.55,Ue[1]+Y*X*.22,G*.08,0,hi,.9*t.energy)}};Fe(!1),it(!1),Ae>0&&g(H.piece,Ue[0],Ue[1],ie,X,u,d*Math.min(1,Ae*2)),m(Ue[0],Ue[1],X*(n.capstone==="fire-sunfall"?2:1.3),H.glow,(.45+.35*t.pulse.crystal)*(t.reduced?1:.85+.15*Math.sin(t.time*2.3))*Ae);const be=Pe>=1?t.reduced?.4:.35+.12*Math.sin(t.time*3):.45*Pe**3;be>0&&Ae>0&&m(Ue[0],Ue[1],X*1.7,hi,be*Ae),Fe(!0),it(!0);const Oe=e.pieces.canister,pt=e.pieces.liquid,ot=i.canister/Oe.art[0],[w,_,O,j]=Ps.window;n.canisters.forEach(({branch:N,fill:K},Q)=>{const Y=l?Zi(o,Qi.canister(Q)):1;if(Y<=0)return;const[ue,P]=p(i.canisters[Q]),Z=Oe.art[0]*ot,te=Oe.art[1]*ot,le=ue-Ps.foot[0]*Z,ne=P-Ps.foot[1]*te-Jx*(1-Y**2);g("canister",le+Z/2,ne+te/2,Z,te);const q=a?0:K*t.energy;if(q<=0)return;const pe=Dr[N],Te=t.pulse.canister(N),Ke=Lx(pe,.55*Te),ke=(O-w)*Z,wt=le+(w+O)/2*Z,bt=ne+j*te,Hn=(j-_)*te,Nt=ke*pt.art[1]/pt.art[0]*.3,ti=Hn*q,xs=bt-ti;g("liquid",wt,(bt+xs+Nt/2)/2,ke,Math.max(0,ti-Nt/2),Ke,.92,[0,.3,1,.95]),g("liquid",wt,xs,ke,Nt,Ke,.95,[0,0,1,.3]);const Ii=e.pieces[`glyph-${N}`],ni=ke*.62/Ii.art[0];g(`glyph-${N}`,wt,bt-Hn*.5,Ii.art[0]*ni,Ii.art[1]*ni,16777215,Math.min(1,.55+q*.45));const Js=t.reduced?1:.85+.15*Math.sin(t.time*3+Q*1.7),wn=[le+Ps.orb[0]*Z,ne+Ps.orb[1]*te];m(wt,bt-ti/2,ke*(1.6+q),pe,(.18+.3*q+.5*Te)*Js),m(wn[0],wn[1],ke*(.8+q*.6),pe,.35+.4*q+.4*Te),Te>0&&v("fx-spark",wn[0],wn[1],ke*(t.reduced?1.2:1.2+.5*(1-Te)),0,pe,Te)});const se=t.reduced?0:t.time,$=t.groundRatio??yn.sinPitch,we=f.art[0]*.42,ce=(N,K,Q,Y)=>{(N[1]>=0||Math.abs(N[0])>=we)&&m(N[0],N[1],K,Q,Y)};if(t.range&&t.range.k>0)for(let N=0;N<Yc;N++)ce(ui([0,0],t.range.radius,N/Yc*Math.PI*2,$),24,i1,t.range.k);if(n.chargeRing){const N=Math.round((t.charge??0)*wr);for(let K=0;K<wr;K++)m(...ui([0,0],i.daisWidth*.56,Math.PI*(.94-.88*K/(wr-1)),$),30,hi,K<N?N===wr?.8:.55:.12)}if(n.hasteAura&&(t.haste??0)>0)for(let N=0;N<8;N++)m(...ui([0,he*.45],i.daisWidth*.36,N/8*Math.PI*2+se*2.4,$),46,hi,.7*(t.haste??0));if(n.capstone==="frost-ice-age"&&t.iceRadius){for(let N=0;N<Xc;N++)ce(ui([0,0],t.iceRadius,N/Xc*Math.PI*2,$),26,$c,.3);for(let N=0;N<qc;N++)ce(ui([0,0],t.iceRadius*(.55+.4*(N*37%11)/10),N/qc*Math.PI*2+se*.3,$),34+N%3*10,$c,.75)}if(n.capstone==="storm-tempest"&&!t.reduced&&ve.forEach(({r:N,c:K,studs:Q},Y)=>Q.forEach((ue,P)=>{Math.sin(t.time*13+P*2.1+Y*4.3)>.55&&m(K[0]+ue.x*N*es,K[1]+ue.y*N*es,34,n1,.8)})),t.unlock){const{color:N,t:K}=t.unlock,Q=.85*Math.sin(Math.PI*Math.min(1,Math.max(0,K)));if(t.reduced)m(ge[0],ge[1],G*2,N,Q);else for(let Y=0;Y<32;Y++)m(...ui([0,ge[1]*K],i.daisWidth/2+(i.rings[0]*b.crown-i.daisWidth/2)*K,Y/32*Math.PI*2+K*3,yn.sinPitch),48,N,Q)}const _e=n.capstone==="fire-sunfall"?Ue:[Ue[0],Ue[1]-X/2];if(!a&&t.energy>0)for(const{branch:N,age:K,seed:Q}of t.pulse.muzzles){const Y=Math.min(1,K/wu),ue=1-Y,P=Dr[N],Z=Q*2.39996;if(m(_e[0],_e[1],G*(t.reduced?.85:.6+.5*Y),P,.8*ue),v("fx-flare",_e[0],_e[1],G*.3*(t.reduced?1:.7+.6*Y),Z,P,ue*t.energy),!t.reduced)for(let te=0;te<3;te++){const le=Z+te*2.1,ne=G*.45*Ji(Y);v("fx-spark",_e[0]+Math.cos(le)*ne,_e[1]+Math.sin(le)*ne*.8,G*.1*(1-.5*Y),0,P,ue*t.energy)}}const Me=a||t.energy<=0?0:t.pulse.nova;if(Me>0){const N=1-Me,K=(Ue[1]+X/2)*(1-Ji(N));if(m(Ue[0],Ue[1],X*1.9,hi,.75*Me),v("fx-flare",Ue[0],Ue[1],G*(t.reduced?.9:.7+.7*N),t.reduced?0:N*1.5,hi,Me*t.energy),!t.reduced)for(let Q=0;Q<5;Q++)m(S+(Q-2)*f.art[0]*.14,K,f.art[0]*.35,hi,.75*Me)}const ae=l?Zi(o,Qi.flash):0;if(ae>0&&ae<1){m(Ue[0],Ue[1],X*2.8,H.glow,.9*(1-ae)),v("fx-flare",Ue[0],Ue[1],G*(.6+1.1*ae),ae,H.glow,1-ae);for(let N=0;N<6;N++){const K=N/6*Math.PI*2,Q=G*.7*Ji(ae);v("fx-spark",Ue[0]+Math.cos(K)*Q,Ue[1]+Math.sin(K)*Q*.7,G*.1,0,Ga,1-ae)}}return{sprites:s,glows:r,top:_e,body:B}}const a1=.72,Tr=160;class Wa{constructor(e,t,i){R(this,"mesh");R(this,"top",[0,0]);R(this,"box",[0,0,0,0]);R(this,"uv");R(this,"alpha");R(this,"pulse",new zx);R(this,"m",new rt);R(this,"c",new Ye);R(this,"time",0);R(this,"ringTime",0);R(this,"count",0);this.atlas=t;const s=new gn(1,1);this.uv=new Sn(new Float32Array(Tr*4),4),this.alpha=new Sn(new Float32Array(Tr),1),this.uv.setUsage(jt),this.alpha.setUsage(jt),s.setAttribute("iUv",this.uv),s.setAttribute("iAlpha",this.alpha);const r=new qt({map:e,transparent:!0,alphaTest:.02,side:sn,forceSinglePass:!0});r.onBeforeCompile=a=>{a.vertexShader=`attribute vec4 iUv;
attribute float iAlpha;
varying float vAlpha;
`+a.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = iUv.xy + uv * iUv.zw;
vAlpha = iAlpha;`),a.fragmentShader=`varying float vAlpha;
`+a.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
diffuseColor.a *= vAlpha;`)},r.customProgramCacheKey=()=>"tower-2d",this.mesh=new Ys(s,r,Tr),this.mesh.instanceMatrix.setUsage(jt),this.mesh.frustumCulled=!1,this.mesh.renderOrder=i,this.mesh.setColorAt(0,this.c.set(16777215)),this.mesh.count=0}static async load(e,t,i){const[s,r]=await Promise.all([t.loadAsync(e),fetch(e.replace(/\.webp$/,".json")).then(a=>a.json())]);return s.colorSpace=At,s.anisotropy=i,{texture:s,atlas:r}}handle(e){this.pulse.handle(e)}update(e,t,i){this.time+=e,this.ringTime+=e*i*this.pulse.ringRate(),this.pulse.update(e,t)}draw(e,t,i,s,r,a){i*=$o[e.stage].display;const{sprites:o,glows:l,top:c,body:h}=r1(e,this.atlas,{...r,iceRadius:r.iceRadius&&r.iceRadius/i,range:r.range&&{...r.range,radius:r.range.radius/i},time:this.time,ringTime:this.ringTime,pulse:this.pulse}),u=i,[d,p]=this.atlas.size;this.count=0;for(const g of o){const v=this.atlas.pieces[g.name];if(!v||this.count>=Tr)continue;const[m,f,S,E]=v.rect,[b,I,C,T]=g.sub??[0,0,1,1],D=t[0]+g.x*i,y=t[1]+g.y*u;this.m.set(g.ux*i,g.vx*i,0,D,-g.uy*u,-g.vy*u,0,-y,0,0,1,s,0,0,0,1),this.mesh.setMatrixAt(this.count,this.m),this.mesh.setColorAt(this.count,this.c.set(g.tint)),this.uv.setXYZW(this.count,(m+b*S)/d,1-(f+T*E)/p,(C-b)*S/d,(T-I)*E/p),this.alpha.setX(this.count,g.alpha),this.count++}this.mesh.count=this.count,this.mesh.instanceMatrix.needsUpdate=this.uv.needsUpdate=this.alpha.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0);for(const g of l)a({...g,x:t[0]+g.x*i,y:t[1]+g.y*u,size:g.size*i});return this.top=[t[0]+c[0]*i,t[1]+c[1]*u],this.box=[t[0]+(h.x-h.ux/2)*i,t[1]+(h.y+h.vy/2)*u,t[0]+(h.x+h.ux/2)*i,t[1]+(h.y-h.vy/2)*u],this.count}hit(e,t){const[i,s,r,a]=this.box,o=(r-i)*.18;return e>i+o&&e<r-o&&t>s&&t<a}static scaleFor(e){return e*a1/$o[3].daisWidth}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}}const $a=n=>{const e=Math.max(0,Math.min(1,n));return e*e*(3-2*e)};class o1{constructor(){R(this,"seconds",0)}update(e,t,i){return e.phase!=="victory"||e.endless?this.seconds=0:i?this.seconds=12:e.paused||(this.seconds=Math.min(12,this.seconds+Math.max(0,t))),{energy:1-$a(this.seconds/4),land:$a((this.seconds-4)/8),lowered:$a((this.seconds-4)/8)}}}const l1="painted/",c1=[16729690,16732360,12475135],Xa={top:".hud-top",bottom:".hud-bottom"},Kc=.45,jc=.13,Yn=160,qa={color:[.479,.716,1],strength:.45,side:.6};function h1(n){const[e,t,i]=qa.color;return`varying vec2 vFx;
`+n.replace("#include <map_fragment>",`#include <map_fragment>
vec2 rimPx = vec2(abs(dFdx(vMapUv).x), abs(dFdy(vMapUv).y));
float rimUp = 1. - min(texture2D(map, vMapUv + vec2(0., rimPx.y)).a, texture2D(map, vMapUv + vec2(0., 2. * rimPx.y)).a);
float rimSide = 1. - min(texture2D(map, vMapUv - vec2(rimPx.x, 0.)).a, texture2D(map, vMapUv + vec2(rimPx.x, 0.)).a);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(${e}, ${t}, ${i}), ${qa.strength} * clamp(rimUp + ${qa.side} * rimSide, 0., 1.));
diffuseColor.rgb += vFx.x * .6;
if (vFx.y < .999 && fract(sin(dot(floor(gl_FragCoord.xy), vec2(12.9898, 78.233))) * 43758.5453) > vFx.y) discard;`)}const kt={back:0,ambient:.5,ground:.8,groundGlowBack:.84,shadowBack:.85,tower:.9,groundGlow:.95,shadow:1,body:2,glow:3,vfx:4,bars:6},Ya=-900,u1=-100,Ls=n=>n*.1,Zc=.5;function d1(n){const e=n.image,t=(s,r,a)=>{const o=document.createElement("canvas");o.width=r,o.height=a;const l=o.getContext("2d");return l.imageSmoothingQuality="high",l.drawImage(s,0,0,r,a),o},i=new ol(t(t(e,288,148),36,18));return i.colorSpace=n.colorSpace,i}function Ka(n=64,e=!1,t=1.6){const i=new Uint8Array(n*n*4);for(let r=0;r<n;r++)for(let a=0;a<n;a++){const o=Math.hypot(a+.5-n/2,r+.5-n/2)/(n/2),l=e?Math.max(0,1-Math.abs(o-.85)/.15):Math.max(0,1-o)**t;i.set([255*l,255*l,255*l,255*l],(r*n+a)*4)}const s=new al(i,n,n);return s.magFilter=s.minFilter=Yt,s.needsUpdate=!0,s}class ts{constructor(e,t,i){R(this,"mesh");R(this,"count",0);R(this,"m",new rt);R(this,"q",new zn);R(this,"c",new Ye);this.capacity=t,this.mesh=new Ys(new gn(1,1),e,t),this.mesh.instanceMatrix.setUsage(jt),this.mesh.frustumCulled=!1,this.mesh.renderOrder=i,this.mesh.setColorAt(0,new Ye(1,1,1))}begin(){this.count=0}push(e,t,i,s,r,a,o=1,l=0){this.count>=this.capacity||(this.q.setFromAxisAngle(new k(0,0,1),-r),this.m.compose(new k(e,-t,l),this.q,new k(i,s,1)),this.mesh.setMatrixAt(this.count,this.m),this.mesh.setColorAt(this.count,this.c.setHex(a).multiplyScalar(o)),this.count++)}end(){this.mesh.count=this.count,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}}function f1(n){const e=document.createElement("canvas");e.width=n.width,e.height=n.height;const t=e.getContext("2d",{willReadFrequently:!0});t.drawImage(n,0,0);const i=t.getImageData(0,0,e.width,e.height),s=i.data,r=new Uint8ClampedArray(256),a=l=>l<=.04045?l/12.92:((l+.055)/1.055)**2.4,o=l=>l<=.0031308?l*12.92:1.055*l**(1/2.4)-.055;for(let l=0;l<256;l++){const c=Math.min(.999,a(l/255)),h=c/(1-c),u=.76,d=1-u;r[l]=Math.round(o(Math.min(1,h<u?h:1-d*d/(h+d-u)))*255)}for(let l=0;l<s.length;l+=4)s[l]=r[s[l]],s[l+1]=r[s[l+1]],s[l+2]=r[s[l+2]];return t.putImageData(i,0,0),e}class bl{constructor(e,t,i,s,r,a,o,l){R(this,"onCueStart");R(this,"scene",new gf);R(this,"camera",new Oh(0,1,0,-1,-1e3,1e3));R(this,"layout",Ho.landscape);R(this,"map",new bv(this.layout));R(this,"laneTraces",yv(this.map));R(this,"fit",Ac(1,1,this.layout));R(this,"panels",new Cv);R(this,"resizeQueued",!1);R(this,"gateArt");R(this,"restoration",new o1);R(this,"backdrop");R(this,"under");R(this,"tower");R(this,"towerHover",!1);R(this,"lastStateTime",0);R(this,"sheets",new Map);R(this,"shadows");R(this,"shadowsBack");R(this,"groundGlow");R(this,"groundGlowBack");R(this,"glow");R(this,"bars");R(this,"vfx",new nx(7));R(this,"vfxLayer");R(this,"skills",new Mx(this.vfx,this.vfxSpace()));R(this,"ambient");R(this,"gateFlash",[0,0,0]);R(this,"actors",new Map);R(this,"held",new Set);R(this,"time",0);R(this,"frameMs",0);R(this,"unlockQueue",new X_);R(this,"unlockPlayer",new q_);R(this,"reduced",matchMedia("(prefers-reduced-motion: reduce)").matches);this.renderer=e,this.high=t,e.toneMapping=Nn,e.outputColorSpace=At,e.shadowMap.enabled=!1,this.scene.background=new Ye(8373243);const c=()=>new gn(1,1);this.under=new Ht(c(),new qt({map:d1(i),color:15134454,depthWrite:!1})),this.backdrop=new Ht(c(),new qt({map:i,depthWrite:!1})),this.under.renderOrder=this.backdrop.renderOrder=kt.back,this.tower=new Wa(s.texture,s.atlas,kt.tower),l&&(this.gateArt=new Zv(this.scene,l,this.layout,Ya+2,Ls,{back:kt.ambient+.1,body:kt.body}));const h=Ka(),u=f=>new qt({map:f,blending:Ur,transparent:!0,depthWrite:!1,depthTest:!1}),d=new qt({color:1780244,alphaMap:Ka(64,!1,.7),transparent:!0,depthWrite:!1});d.onBeforeCompile=f=>{f.fragmentShader=f.fragmentShader.replace("#include <color_fragment>","diffuseColor.a *= vColor.r;")},d.customProgramCacheKey=()=>"ground-shadow",this.shadows=new ts(d,Yn*2,kt.shadow),this.shadowsBack=new ts(d,Yn*2,kt.shadowBack);const p=new qt({alphaMap:Ka(64,!1,.9),transparent:!0,depthWrite:!1});p.onBeforeCompile=f=>{f.fragmentShader=f.fragmentShader.replace("#include <color_fragment>","float glowAlpha = max(vColor.r, max(vColor.g, vColor.b)); diffuseColor.rgb = vColor / max(glowAlpha, 1e-3); diffuseColor.a *= glowAlpha;")},p.customProgramCacheKey=()=>"ground-glow",this.groundGlow=new ts(p,Yn*2,kt.groundGlow),this.groundGlowBack=new ts(p,Yn*2,kt.groundGlowBack),this.glow=new ts(u(h),512,kt.glow),this.bars=new ts(new qt({transparent:!0,opacity:.92,depthTest:!1,depthWrite:!1}),Yn*2,kt.bars),this.scene.add(this.under,this.backdrop,this.tower.mesh,this.shadowsBack.mesh,this.shadows.mesh,this.groundGlowBack.mesh,this.groundGlow.mesh,this.glow.mesh,this.bars.mesh),a&&(this.vfxLayer=new rx(this.scene,a,kt.vfx,kt.ground,u1)),o&&(this.ambient=new Bc(this.scene,this.backdrop.material,o,Ya+1,kt.ambient));for(const[f,{meta:S,texture:E}]of r)this.sheets.set(f,this.makeSheet(S,E));this.resize(),addEventListener("resize",()=>this.queueResize());const g=new ResizeObserver(()=>this.queueResize());document.querySelectorAll(Object.values(Xa).join(",")).forEach(f=>g.observe(f));const v=new ResizeObserver(()=>{this.panels.update(innerWidth,innerHeight,this.panelBoxes())&&this.queueResize()});document.querySelectorAll("[data-hud-panel]").forEach(f=>v.observe(f)),document.fonts.ready.then(()=>this.queueResize()),matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",f=>{this.reduced=f.matches});const m=f=>{this.towerHover=f,e.domElement.style.cursor=f?"pointer":"default"};e.domElement.addEventListener("pointermove",f=>{const S=e.domElement.getBoundingClientRect();m(this.tower.hit(f.clientX-S.left,f.clientY-S.top))});for(const f of["pointerleave","pointercancel"])e.domElement.addEventListener(f,()=>m(!1))}static async create(e,t,i=()=>{}){const s="./"+l1,r=new Fh,a=Ho.landscape,o=[...new Set(P_.map(Lc))];let l=0;const c=5+o.length,h=()=>i(++l/c),u=async S=>{const E=await r.loadAsync(s+S);return E.colorSpace=At,E.anisotropy=e.capabilities.getMaxAnisotropy(),h(),E},[d,p]=await Promise.all([u(a.image),Wa.load(s+a.tower.image,r,e.capabilities.getMaxAnisotropy()).then(S=>(h(),S))]),g=await u(a.gateArt).catch(S=>{console.warn("painted gate art",S)}),v=await u("vfx.webp").catch(S=>{console.warn("painted vfx atlas",S)}),m=await Bc.loadMasks(s).catch(S=>{console.warn("painted motion masks",S)}),f=new Map;return await Promise.all(o.map(async S=>{try{const E=await(await fetch(`${s}sheets/${S}.json`)).json(),b=await new Promise((C,T)=>{const D=new Image;D.onload=()=>C(D),D.onerror=T,D.src=`${s}sheets/${S}.webp`}),I=new ol(f1(b));I.colorSpace=At,f.set(S,{meta:E,texture:I})}catch(E){console.warn("painted sheet",S,E)}h()})),new bl(e,t,d,p,f,v,m,g)}makeSheet(e,t){const i=new gn(1,1),s=new Sn(new Float32Array(Yn*3),3),r=new Sn(new Float32Array(Yn*2),2);s.setUsage(jt),r.setUsage(jt),i.setAttribute("iCell",s),i.setAttribute("iFx",r);const a=new qt({map:t,alphaTest:.5}),o=new Je(Ut.cell/e.width,Ut.cell/e.height);a.onBeforeCompile=c=>{c.uniforms.uCellSize={value:o},c.vertexShader=`attribute vec3 iCell;
attribute vec2 iFx;
uniform vec2 uCellSize;
varying vec2 vFx;
`+c.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = vec2(iCell.z > .5 ? 1. - uv.x : uv.x, uv.y) * uCellSize + iCell.xy;
vFx = iFx;`),c.fragmentShader=h1(c.fragmentShader)},a.customProgramCacheKey=()=>"view2d-sprite";const l=new Ys(i,a,Yn);return l.instanceMatrix.setUsage(jt),l.frustumCulled=!1,l.renderOrder=kt.body,l.count=0,this.scene.add(l),{meta:e,mesh:l,cell:s,fx:r}}resize(){const e=innerWidth,t=innerHeight;this.renderer.setSize(e,t),this.camera.left=0,this.camera.right=e,this.camera.top=0,this.camera.bottom=-t,this.camera.updateProjectionMatrix(),this.panels.update(e,t,this.panelBoxes()),this.place()}queueResize(){this.resizeQueued||(this.resizeQueued=!0,requestAnimationFrame(()=>{this.resizeQueued=!1,this.resize()}))}place(){const e=innerWidth,t=innerHeight,[i,s]=this.layout.size,r=this.fit;this.fit=Ac(e,t,this.layout,this.safeBand(t),Ev(this.layout,this.laneTraces),{outline:this.layout.outline,panels:this.panels.boxes}),Iv(r,this.fit)&&this.vfx.clear();const[a,o]=this.fit.offset,l=this.fit.scale;this.backdrop.position.set(a+i*l/2,-(o+s*l/2),Ya),this.backdrop.scale.set(i*l,s*l,1);const c=Math.max(e/i,t/s);this.under.visible=!this.fit.cover,this.under.position.set(e/2,-t/2,-950),this.under.scale.set(i*c,s*c,1)}panelBoxes(){return Array.from(document.querySelectorAll("[data-hud-panel]")).filter(e=>e.getClientRects().length).map(e=>[e,e.getBoundingClientRect()]).filter(([,e])=>e.width>0&&e.height>0).map(([e,t])=>[e,[t.left,t.top,t.right,t.bottom]])}safeBand(e){const t=r=>Array.from(document.querySelectorAll(r)).filter(a=>a.getClientRects().length).map(a=>a.getBoundingClientRect()),i=Math.max(0,...t(Xa.top).map(r=>r.bottom)),s=Math.min(e,...t(Xa.bottom).map(r=>r.top));return s-i>80?{top:i+8,bottom:s-8}:{top:0,bottom:e}}screen(e){return[this.fit.offset[0]+e[0]*this.fit.scale,this.fit.offset[1]+e[1]*this.fit.scale]}paint(e){const t=this.ground(e);return this.map.toImage(t.x,t.z)}ground(e){const t=this.actorNear(e);return t?{x:t.x,z:t.z}:{x:e.x,z:e.z}}actorNear(e,t){const i=t===void 0?void 0:this.actors.get(t);if(i)return i;let s,r=1.2;for(const a of this.actors.values()){const o=Math.hypot(a.rx-e.x,a.rz-e.z);o<r&&(r=o,s=a)}return s}screenPoint(e){const[t,i]=this.screen(this.paint(e)),s=this.renderer.domElement.getBoundingClientRect();return{x:s.left+t,y:s.top+i,ndcX:t/Math.max(1,innerWidth)*2-1}}vfxSpace(){const e=(t,i)=>{const[s,r]=this.screen(this.map.toImage(t,i));return{x:s,y:r}};return{actor:(t,i)=>{var s;return i!==void 0?this.actors.has(i)?i:void 0:(s=this.actorNear(t))==null?void 0:s.id},place:t=>{const i=this.actors.get(t);return i&&{...e(i.x,i.z),height:i.height??44*this.fit.scale}},ground:t=>e(t.x,t.z),metric:()=>this.vfx.metric,towerTop:()=>({x:this.tower.top[0],y:this.tower.top[1]})}}handle(e){this.unlockQueue.add(e)&&this.unlockPlayer.cancel(),this.tower.handle(e),this.skills.handle(e);for(const t of e){const i=t.target;t.type==="hit"&&i!==void 0&&this.skills.onImpact(t,()=>{const s=this.actors.get(i);s&&(s.flash=jc)}),t.type==="kill"&&i!==void 0&&(this.held.add(i),this.skills.onImpact(t,()=>{this.held.delete(i),this.exit(i,"kill")})),t.type==="leak"&&i!==void 0&&this.exit(i,"leak"),t.type==="spawn"&&t.lane!==void 0&&(this.gateFlash[t.lane%3]=Zc)}}exit(e,t){const i=this.actors.get(e);i&&!i.exit&&(i.exit={kind:t,t:0})}update(e,t){var o,l;const i=performance.now(),s=e.paused?0:t*e.speed*Wo;this.time+=s,e.time<this.lastStateTime&&(this.unlockQueue.clear(),this.unlockPlayer.cancel()),this.lastStateTime=e.time,this.playUnlocks(e,t);const r=new Set;for(const c of e.enemies){r.add(c.id);const h={x:c.x,z:c.z};let u=this.actors.get(c.id);u||(u={id:c.id,kind:c.kind,lane:c.lane,progress:c.progress,rx:c.x,rz:c.z,x:h.x,z:h.z,px:h.x,pz:h.z,hp:c.hp,maxHp:c.maxHp,boss:c.boss,mini:!!c.mini,flash:0,walk:0},this.actors.set(c.id,u));const d=Math.hypot(h.x-u.x,h.z-u.z);d>1e-4&&(u.px=u.x,u.pz=u.z),u.walk+=d,u.x=h.x,u.z=h.z,u.rx=c.x,u.rz=c.z,u.lane=c.lane,u.progress=c.progress,u.hp=c.hp,u.maxHp=c.maxHp,u.cues=U_(c,e)}for(const c of this.actors.values())c.flash=Math.max(0,c.flash-s),!r.has(c.id)&&!c.exit&&!this.held.has(c.id)&&(c.exit={kind:"kill",t:0}),c.exit&&(c.exit.t+=s),c.exit&&c.exit.t>Kc&&this.actors.delete(c.id);for(let c=0;c<3;c++)this.gateFlash[c]=Math.max(0,this.gateFlash[c]-s);this.vfx.reduced=this.reduced,this.vfx.scale=this.fit.scale,this.vfx.metric=ax((c,h)=>this.screen(this.map.toImage(c,h)));const{energy:a}=this.restoration.update(e,t,this.reduced);this.skills.sync(e),this.skills.frame(e,this.time,s,a),this.vfx.update(s),(o=this.ambient)==null||o.update(t,"landscape",this.fit,this.reduced),(l=this.gateArt)==null||l.update(this.fit,a),this.tower.update(s,this.reduced,a),this.draw(e,a),this.renderer.render(this.scene,this.camera),this.frameMs=performance.now()-i}playUnlocks(e,t){var i;if(!e.paused){if(document.body.dataset.uiModal!=="true"&&!this.unlockPlayer.busy){const s=this.unlockQueue.take(e);s.length&&this.unlockPlayer.play($_(s,this.reduced))}if(this.unlockPlayer.busy)for(const s of this.unlockPlayer.advance(t).started)(i=this.onCueStart)==null||i.call(this,s)}}draw(e,t){var o;const i=this.fit.scale,s=Xv(i);for(const l of[this.shadows,this.shadowsBack,this.groundGlow,this.groundGlowBack,this.glow,this.bars])l.begin();const r=this.screen(this.layout.tower.base)[1];this.drawTower(e,t);const a=new Map;for(const l of this.actors.values()){const[c,h]=this.screen(this.map.toImage(l.x,l.z)),u=rn[l.kind],d=Wv(l.kind,l),p=l.exit?Math.min(1,l.exit.t/Kc):0,g=u.height*d*this.layout.actorScale*i*s,v=u.footprint*d*this.layout.actorScale*i*s*(1-p*.6),m=h>r,f=m?this.shadows:this.shadowsBack,S=m?this.groundGlow:this.groundGlowBack;for(const T of Yv(v,u.hover))f.push(c+T.dx,h+T.dy,T.w,T.h,0,16777215,T.alpha,Ls(h)-.01);const E=this.reduced?1:.85+.15*Math.sin(this.time*9+l.id);for(const T of jv(l.kind,v))S.push(c+T.dx,h+T.dy,T.w,T.h,0,T.color,T.k*E*(1-p),Ls(h)-.01);const b=Lc(l.kind),I=this.sheets.get(b);let C=h-g;if(I){const T=a.get(b)??0;a.set(b,T+1),C=this.placeSprite(I,T,l,c,h-u.hover*this.layout.actorScale*i*.7,d,s,p)}if(l.height=h-C,l.cues&&!l.exit&&this.skills.marks(l.cues,{id:l.id,x:c,feet:h,top:C,width:g*.84},u.footprint*d,this.time),!l.exit){const T=Math.max(26,g*.7),D=C-6,y=Math.max(0,l.hp/l.maxHp);this.bars.push(c,D,T,5,0,1385012),this.bars.push(c-(T-2)*(1-y)/2,D,(T-2)*y,3,0,l.boss?16760670:11134918)}}for(const[l,c]of this.sheets)c.mesh.count=a.get(l)??0,c.mesh.instanceMatrix.needsUpdate=c.cell.needsUpdate=c.fx.needsUpdate=!0;this.layout.gates.forEach((l,c)=>{const h=this.gateFlash[c]/Zc,[u,d,p,g]=l.mouth,[v,m]=this.screen([u,d]),f=1.75*Math.max(p,g)*i;t>.001&&this.glow.push(v,m,f*2,f*2,0,c1[c],(.4+(this.reduced?0:.15*Math.sin(this.time*2+c))+.5*h)*t)}),(o=this.vfxLayer)==null||o.draw(this.vfx,this.skills.quads,this.time);for(const l of[this.shadows,this.shadowsBack,this.groundGlow,this.groundGlowBack,this.glow,this.bars])l.end()}drawTower(e,t){const[i,s]=this.screen(this.layout.tower.base),r=Wa.scaleFor(this.layout.tower.width*this.fit.scale),a=this.unlockPlayer.active;this.tower.draw(Fx(e),[i,s],r,Ls(s),{reduced:this.reduced,energy:t,charge:V_(e),haste:G_(e),unlock:a?{color:Dr[a.branch],t:this.unlockPlayer.activeProgress}:void 0,iceRadius:kr*this.map.sx*this.fit.scale,groundRatio:s1(this.layout),range:{radius:_l(e).range*this.map.sx*this.fit.scale,k:this.towerHover?.6:e.phase==="wave"?.05:.2}},o=>this.glow.push(o.x,o.y,o.size,o.size,0,o.color,o.k))}placeSprite(e,t,i,s,r,a,o,l){var D,y;const c=e.meta,h=rn[i.kind],u=qv(c,h,a),d=((D=i.exit)==null?void 0:D.kind)==="kill"?"death":"move",p=Ut.clips[d],g=d==="death"?Math.min(p-1,Math.floor(l*p)):Math.floor(i.walk/Math.max(1e-6,h.moveSpeed*u*o)/c.durations.move*p)%p,v=Math.atan2(i.x-i.px,i.z-i.pz),{dir:m,flip:f}=L_(v-yn.yaw),S=I_(d,g,m),E=c.cells[d];e.cell.setXYZ(t,S%Ut.columns*Ut.cell/c.width,(Ut.rows-1-Math.floor(S/Ut.columns))*Ut.cell/c.height,f?1:0),e.fx.setXY(t,i.flash/jc,((y=i.exit)==null?void 0:y.kind)==="leak"||d==="death"&&l>.7?1-l:1);const b=E.world/c.fitScale*u*this.layout.actorScale*this.fit.scale*o/yn.cosPitch,I=f?1-E.anchor[0]:E.anchor[0],C=s+(.5-I)*b,T=r-(.5-E.anchor[1])*b;return e.mesh.setMatrixAt(t,new rt().compose(new k(C,-T,Ls(r)),new zn,new k(b,b,1))),r-(1-E.anchor[1])*b+b*.12}toggleQuality(){return this.high=!this.high,this.renderer.setPixelRatio(Xh(devicePixelRatio,this.high,$h(location.search,!1))),this.resize(),this.high}benchCounts(){var t;const e=(t=this.vfxLayer)==null?void 0:t.counts;return{enemies:this.actors.size,effects:this.vfx.particles.length+this.vfx.bolts.length,projectiles:this.vfx.projectiles.length,statusQuads:this.skills.quads.length,vfxQuads:((e==null?void 0:e.top)??0)+((e==null?void 0:e.ground)??0),glow:this.glow.mesh.count,bars:this.bars.mesh.count}}diagnostics(){var i,s,r;const e=this.renderer.info.render,t=this.renderer.domElement;return{view:"2d",layout:"landscape",scale:this.fit.scale,cover:this.fit.cover,cssSize:[t.clientWidth,t.clientHeight],drawingBuffer:[t.width,t.height],pixelRatio:this.renderer.getPixelRatio(),drawCalls:e.calls,triangles:e.triangles,textures:this.renderer.info.memory.textures,enemies:this.actors.size,effects:this.vfx.particles.length+this.vfx.bolts.length,projectiles:this.vfx.projectiles.length,sheets:this.sheets.size,frameMs:this.frameMs,quality:this.high?"high":"standard",tower:{instances:this.tower.mesh.count,top:this.tower.top},layers:{shadows:this.shadows.mesh.count+this.shadowsBack.mesh.count,glow:this.glow.mesh.count,bars:this.bars.mesh.count,vfx:!!this.vfxLayer,ambient:((i=this.ambient)==null?void 0:i.sprites)??-1,gates:((s=this.gateArt)==null?void 0:s.drawn)??-1},skillVfx:{quads:this.skills.quads.length,...(r=this.vfxLayer)==null?void 0:r.counts}}}}function p1(n,e,t){return t&&e>n?"rotate":"ok"}function m1(n,e){return e==="rotate"&&n.phase==="wave"&&!n.paused}function yl(n){return n==="rotate"}async function g1(){const n=typeof screen<"u"?screen.orientation:void 0;if(!(n!=null&&n.lock))return!1;try{return await n.lock("landscape"),!0}catch{return!1}}function v1(n){return n.touch&&!n.fullscreen&&!n.standalone&&n.supported}const Pu=n=>({hp:n.hp,maxHp:n.maxHp,novaCharges:n.novaCharges,phase:n.phase}),Xo=.3,_1={"green-blob":"small",alien:"medium","mushroom-king":"medium",yeti:"heavy",orc:"heavy","orc-skull":"heavy",demon:"flying","blue-demon":"flying"};function x1(n,e,t){return e?"boss":t?"small":_1[n]}const M1={small:"deathSmall",medium:"deathMedium",heavy:"deathHeavy",flying:"deathFlying",boss:"deathBoss"},b1={arcane:"shotArcane",fire:"shotFire",frost:"shotFrost",storm:"shotStorm"},y1={"armor-block":"armor","shield-break":"shieldBreak",split:"split",dash:"dash",stun:"stun",shatter:"shatter",spread:"spread",discharge:"discharge","meteor-warning":"meteorWarning","meteor-impact":"meteorImpact",tempest:"tempest",nova:"nova",build:"build",upgrade:"build",points:"points",skill:"skill",capstone:"skill",respec:"respec",victory:"victory",defeat:"defeat",leak:"alertLeak"},S1=n=>n.startsWith("alert")||n==="deathBoss";function E1(n,e,t){const i=[];let s=0;for(const a of n){const o=a.to;switch(a.type){case"shot":i.push({name:b1[a.element??"arcane"],at:o,element:a.element??"arcane"});break;case"hit":i.push({name:"hit",at:o,element:a.element??"arcane"});break;case"kill":{const l=(a.target??0)>=pu;i.push({name:M1[x1(a.kind??"green-blob",!!a.boss,l)],at:o}),(a.value??0)>0&&i.push({name:"coin",at:o,step:Math.min(s++,4)});break}case"spawn":i.push({name:a.boss?"spawnBoss":"spawn",at:o});break;case"zone":i.push({name:a.element==="fire"?"zoneLava":"zoneIce",at:o});break;case"boss-warning":i.push({name:"alertBoss",at:On(a.lane??0,0)});break;case"wave":t.phase==="wave"?i.push({name:xl(t).newTraits.length?"alertNewAbility":"waveStart"}):t.phase==="ready"&&i.push({name:"waveClear"});break;default:{const l=y1[a.type];l&&i.push({name:l,at:o})}}}const r=t.maxHp*Xo;return e.hp>e.maxHp*Xo&&t.hp<=r&&t.hp>0&&t.phase!=="defeat"&&i.push({name:"alertHpLow"}),e.novaCharges===0&&t.novaCharges>0&&t.phase==="wave"&&i.push({name:"alertNovaReady"}),i}const w1={shotArcane:.09,shotFire:.09,shotFrost:.09,shotStorm:.09,hit:.07,armor:.15,shieldBreak:.12,deathSmall:.06,deathMedium:.06,deathHeavy:.06,deathFlying:.06,coin:.08,split:.12,dash:.25,spawn:.4,stun:.15,shatter:.15,zoneLava:.3,zoneIce:.3,spread:.12,discharge:.12,meteorWarning:.3,meteorImpact:.3,tempest:.3,uiClick:.05,uiDisabled:.05},T1=1.5;class A1{constructor(){R(this,"last",new Map)}allow(e,t){const i=e.startsWith("alert")?T1:w1[e]??0,s=this.last.get(e);return i>0&&s!==void 0&&t-s<i?!1:(this.last.set(e,t),!0)}}const R1=24;class C1{constructor(e,t,i,s){R(this,"nodes",[]);this.input=e,this.alert=t,this.music=i,this.end=s,this.nodes.push(e)}add(e){return this.nodes.push(e),e}}const Un=n=>440*Math.pow(2,(n-69)/12);class P1{constructor(e){R(this,"master");R(this,"sfx");R(this,"duckGain");R(this,"music");R(this,"musicScore");R(this,"verb");R(this,"musicVerb");R(this,"noiseBuffer");R(this,"voices",[]);R(this,"timers",new Set);R(this,"peak",0);this.ctx=e;const t=e.createDynamicsCompressor();t.threshold.value=-14,t.knee.value=12,t.ratio.value=4,t.attack.value=.003,t.release.value=.25,t.connect(e.destination),this.master=this.gain(.9,t),this.sfx=this.gain(.8,this.master),this.duckGain=this.gain(1,this.master),this.music=this.gain(.5,this.duckGain),this.musicScore=this.gain(.8,this.music),this.verb=e.createConvolver(),this.verb.buffer=this.impulse(1.8,2.6),this.verb.connect(this.gain(.32,this.sfx)),this.musicVerb=e.createConvolver(),this.musicVerb.buffer=this.verb.buffer,this.musicVerb.connect(this.gain(.32,this.musicScore)),this.noiseBuffer=this.makeNoise(2)}get noise(){return this.noiseBuffer}get now(){return this.ctx.currentTime+.01}gain(e,t){const i=this.ctx.createGain();return i.gain.value=e,t&&i.connect(t),i}makeNoise(e){const t=this.ctx.createBuffer(1,Math.floor(this.ctx.sampleRate*e),this.ctx.sampleRate),i=t.getChannelData(0);for(let s=0;s<i.length;s++)i[s]=Math.random()*2-1;return t}impulse(e,t){const i=Math.floor(this.ctx.sampleRate*e),s=this.ctx.createBuffer(2,i,this.ctx.sampleRate);for(let r=0;r<2;r++){const a=s.getChannelData(r);for(let o=0;o<i;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/i,t)}return s}liveEffectVoices(){const e=this.ctx.currentTime;return this.voices.filter(t=>!t.music&&t.end>e).length}voice({bus:e=this.sfx,pan:t=0,send:i=.15,dur:s=1,alert:r=!1,music:a=!1}={}){const o=this.ctx,l=o.createGain(),c=new C1(l,r,a,o.currentTime+s),h=c.add(o.createStereoPanner());if(h.pan.value=Math.max(-.6,Math.min(.6,t)),l.connect(h),h.connect(e),i>0){const d=c.add(this.gain(i));h.connect(d),d.connect(a?this.musicVerb:this.verb)}this.voices.push(c);const u=window.setTimeout(()=>{this.timers.delete(u),this.release(c)},(s+.3)*1e3);return this.timers.add(u),a||(this.peak=Math.max(this.peak,this.liveEffectVoices())),c}release(e){var i;const t=this.voices.indexOf(e);if(!(t<0)){this.voices.splice(t,1);for(const s of e.nodes){try{(i=s.stop)==null||i.call(s)}catch{}try{s.disconnect()}catch{}}}}stopVoice(e){this.release(e)}makeRoom(){for(;this.liveEffectVoices()>=R1;){const e=this.ctx.currentTime,t=this.voices.find(i=>!i.alert&&!i.music&&i.end>e);if(!t)return!1;this.release(t)}return!0}env(e,t,i,s,r){e.cancelScheduledValues(t),e.setValueAtTime(1e-4,t),e.linearRampToValueAtTime(s,t+i),e.exponentialRampToValueAtTime(1e-4,t+Math.max(r,i+.01))}filter(e,t,i,s){if(!t)return e.input;const r=e.add(this.ctx.createBiquadFilter());return r.type=t.type,r.Q.value=t.q??.7,r.frequency.setValueAtTime(t.f,i),t.f2&&r.frequency.exponentialRampToValueAtTime(t.f2,i+(t.ft??s)),r.connect(e.input),r}tone(e,t,{type:i="sine",f:s,f2:r,dur:a=.2,gain:o=.1,a:l=.005,detune:c=0,filter:h,glide:u}){const d=e.add(this.ctx.createOscillator()),p=e.add(this.ctx.createGain());return d.type=i,d.detune.value=c,d.frequency.setValueAtTime(s,t),r&&d.frequency.exponentialRampToValueAtTime(r,t+(u??a)),this.env(p.gain,t,l,o,a),d.connect(p),p.connect(this.filter(e,h,t,a)),d.start(t),d.stop(t+a+.05),d}noiseBurst(e,t,{dur:i=.2,gain:s=.1,a:r=.003,filter:a}){const o=e.add(this.ctx.createBufferSource()),l=e.add(this.ctx.createGain());o.buffer=this.noiseBuffer,this.env(l.gain,t,r,s,i),o.connect(l),l.connect(this.filter(e,a,t,i)),o.start(t,Math.random()*1.2),o.stop(t+i+.05)}bell(e,t,i,{dur:s=1.2,gain:r=.08,bright:a=1}={}){for(const[o,l,c]of[[1,1,1],[2.76,.45*a,.6],[5.4,.22*a,.35],[8.93,.1*a,.2]])i*o<16e3&&this.tone(e,t,{f:i*o,dur:s*c,gain:r*l,a:.002})}pluck(e,t,i,{dur:s=1.6,gain:r=.05}={}){this.tone(e,t,{type:"triangle",f:i,dur:s,gain:r,a:.003}),this.tone(e,t,{f:i*2,dur:s*.5,gain:r*.35,a:.002})}drum(e,t,i){this.tone(e,t,{f:95,f2:50,dur:.32,gain:i,glide:.25}),this.noiseBurst(e,t,{dur:.12,gain:i*.35,filter:{type:"lowpass",f:320}})}duck(){const e=this.duckGain.gain,t=this.ctx.currentTime;e.cancelScheduledValues(t),e.setValueAtTime(e.value,t),e.linearRampToValueAtTime(.35,t+.08),e.setValueAtTime(.35,t+.5),e.linearRampToValueAtTime(1,t+1.7)}play(e,t){!this.makeRoom()&&!S1(e.name)||(e.name.startsWith("alert")&&this.duck(),I1[e.name](this,t,e))}dispose(){this.timers.forEach(e=>clearTimeout(e)),this.timers.clear(),[...this.voices].forEach(e=>this.release(e))}}function Jc(n,e,t,i,s,r,a,o,l,c){const h=n.tone(e,t,{type:"sawtooth",f:i,dur:s,gain:r,filter:{type:"highpass",f:a}});for(let u=1;u<o;u++)h.frequency.setValueAtTime(l+Math.random()*c,t+u*.011)}const I1={shotArcane(n,e){const t=n.now,i=n.voice({pan:e,dur:.3,send:.12});n.tone(i,t,{f:880,f2:520,dur:.18,gain:.1}),n.tone(i,t,{type:"triangle",f:1320,f2:760,dur:.14,gain:.05}),n.noiseBurst(i,t,{dur:.03,gain:.05,filter:{type:"highpass",f:5e3}})},shotFire(n,e){const t=n.now,i=n.voice({pan:e,dur:.4,send:.1});n.noiseBurst(i,t,{dur:.3,gain:.32,a:.015,filter:{type:"bandpass",f:1100,f2:260,q:1.1}}),n.tone(i,t,{f:120,f2:55,dur:.2,gain:.22})},shotFrost(n,e){const t=n.now,i=n.voice({pan:e,dur:.6,send:.3});n.bell(i,t,1568,{dur:.45,gain:.06,bright:1.3}),n.noiseBurst(i,t,{dur:.16,gain:.05,filter:{type:"highpass",f:6500}})},shotStorm(n,e){const t=n.now,i=n.voice({pan:e,dur:.3,send:.1});Jc(n,i,t,1400,.13,.06,900,12,600,1800),n.noiseBurst(i,t,{dur:.05,gain:.14,filter:{type:"bandpass",f:3200,q:1.5}})},hit(n,e,t){const i=n.now,s=n.voice({pan:e,dur:.15,send:0});n.tone(s,i,{f:240,f2:90,dur:.07,gain:.07}),t.element==="fire"&&n.noiseBurst(s,i,{dur:.08,gain:.06,filter:{type:"lowpass",f:900}}),t.element==="frost"&&n.tone(s,i,{f:2400,dur:.05,gain:.02}),t.element==="storm"&&n.noiseBurst(s,i,{dur:.03,gain:.05,filter:{type:"highpass",f:3e3}})},armor(n,e){const t=n.now,i=n.voice({pan:e,dur:.3,send:.12});n.tone(i,t,{f:1230,dur:.2,gain:.06,a:.001}),n.tone(i,t,{f:1913,dur:.16,gain:.045,a:.001}),n.noiseBurst(i,t,{dur:.02,gain:.08,filter:{type:"highpass",f:5e3}})},shieldBreak(n,e){const t=n.now,i=n.voice({pan:e,dur:.8,send:.3});n.noiseBurst(i,t,{dur:.35,gain:.2,filter:{type:"highpass",f:3e3}}),[2637,2093,1568].forEach((s,r)=>n.bell(i,t+r*.045,s,{dur:.4,gain:.045}))},deathSmall(n,e){const t=n.now,i=n.voice({pan:e,dur:.2,send:.05});n.tone(i,t,{f:520,f2:1400,dur:.08,gain:.11}),n.noiseBurst(i,t,{dur:.05,gain:.06,filter:{type:"bandpass",f:2200,q:2}})},deathMedium(n,e){const t=n.now,i=n.voice({pan:e,dur:.35,send:.08});n.noiseBurst(i,t,{dur:.2,gain:.2,filter:{type:"bandpass",f:1300,f2:380,q:1.4}}),n.tone(i,t,{type:"square",f:300,f2:80,dur:.16,gain:.045,filter:{type:"lowpass",f:1500}})},deathHeavy(n,e){const t=n.now,i=n.voice({pan:e,dur:.5,send:.12});n.tone(i,t,{f:95,f2:38,dur:.38,gain:.38}),n.noiseBurst(i,t,{dur:.3,gain:.22,filter:{type:"lowpass",f:420}}),n.noiseBurst(i,t+.02,{dur:.12,gain:.08,filter:{type:"bandpass",f:900,q:1}})},deathFlying(n,e){const t=n.now,i=n.voice({pan:e,dur:.6,send:.15});n.noiseBurst(i,t,{dur:.45,gain:.14,a:.02,filter:{type:"bandpass",f:1600,f2:280,q:1.6}}),n.tone(i,t,{f:760,f2:190,dur:.32,gain:.045})},deathBoss(n,e){const t=n.now,i=n.voice({pan:e,dur:1.8,send:.45,alert:!0});n.tone(i,t,{f:62,f2:28,dur:1.3,gain:.5}),n.noiseBurst(i,t,{dur:1.1,gain:.34,filter:{type:"lowpass",f:900,f2:90}}),n.noiseBurst(i,t,{dur:.2,gain:.18,filter:{type:"bandpass",f:1800,q:.8}}),[50,57,62].forEach(s=>n.tone(i,t+.05,{type:"sawtooth",f:Un(s),dur:1.4,gain:.025,a:.02,filter:{type:"lowpass",f:1400,f2:300}}))},coin(n,e,t){const i=n.now,s=n.voice({pan:e,dur:.3,send:.15}),r=Math.pow(2,(t.step??0)*2/12);n.tone(s,i,{f:1975*r,dur:.09,gain:.05,a:.001}),n.tone(s,i+.05,{f:2637*r,dur:.16,gain:.05,a:.001})},split(n,e){const t=n.now,i=n.voice({pan:e,dur:.3,send:.08});n.tone(i,t,{f:180,f2:540,dur:.16,gain:.12,filter:{type:"lowpass",f:1200}}),n.tone(i,t+.07,{f:260,f2:620,dur:.12,gain:.07,filter:{type:"lowpass",f:1400}})},dash(n,e){const t=n.now,i=n.voice({pan:e,dur:.3,send:.05});n.noiseBurst(i,t,{dur:.2,gain:.1,a:.03,filter:{type:"bandpass",f:600,f2:2600,q:2}})},spawn(n,e){const t=n.now,i=n.voice({pan:e,dur:.8,send:.3});n.tone(i,t,{f:150,f2:230,dur:.55,gain:.05,a:.2}),n.noiseBurst(i,t,{dur:.5,gain:.04,a:.2,filter:{type:"bandpass",f:500,q:2}})},spawnBoss(n,e){const t=n.now,i=n.voice({pan:e,dur:1.4,send:.4});[110,164.8].forEach(s=>n.tone(i,t,{type:"sawtooth",f:s,dur:1.1,gain:.07,a:.15,filter:{type:"lowpass",f:450,f2:900,q:2}}))},stun(n,e){const t=n.now,i=n.voice({pan:e,dur:.4,send:.2});for(let s=0;s<6;s++)n.noiseBurst(i,t+s*.03+Math.random()*.02,{dur:.025,gain:.07,filter:{type:"highpass",f:3800}});n.tone(i,t,{f:3136,dur:.25,gain:.02})},shatter(n,e){const t=n.now,i=n.voice({pan:e,dur:.8,send:.35});n.noiseBurst(i,t,{dur:.3,gain:.2,filter:{type:"highpass",f:2500}}),[3136,2349,1760,2637].forEach((s,r)=>n.bell(i,t+r*.03,s,{dur:.45,gain:.035}))},zoneLava(n,e){const t=n.now,i=n.voice({pan:e,dur:.9,send:.15});n.noiseBurst(i,t,{dur:.6,gain:.1,a:.05,filter:{type:"lowpass",f:380}}),[0,.14,.3,.41].forEach(s=>n.tone(i,t+s,{f:120+Math.random()*60,f2:300+Math.random()*120,dur:.07,gain:.08,filter:{type:"lowpass",f:900}}))},zoneIce(n,e){const t=n.now,i=n.voice({pan:e,dur:1,send:.4});[1319,1568,1976,2637].forEach((s,r)=>n.bell(i,t+r*.06,s,{dur:.6,gain:.03})),n.noiseBurst(i,t,{dur:.5,gain:.04,a:.1,filter:{type:"highpass",f:5e3}})},spread(n,e){const t=n.now,i=n.voice({pan:e,dur:.25,send:.05});n.noiseBurst(i,t,{dur:.12,gain:.1,filter:{type:"bandpass",f:1500,f2:700,q:1}})},discharge(n,e){const t=n.now,i=n.voice({pan:e,dur:.15,send:.05});Jc(n,i,t,2e3,.06,.04,1200,6,900,2e3)},meteorWarning(n,e){const t=n.now,i=n.voice({pan:e,dur:.9,send:.2});n.tone(i,t,{f:600,f2:1900,dur:.75,gain:.045,a:.5}),n.noiseBurst(i,t,{dur:.7,gain:.03,a:.5,filter:{type:"highpass",f:4e3}})},meteorImpact(n,e){const t=n.now,i=n.voice({pan:e,dur:1,send:.35});n.tone(i,t,{f:85,f2:34,dur:.6,gain:.45}),n.noiseBurst(i,t,{dur:.6,gain:.36,filter:{type:"lowpass",f:1300,f2:180}})},tempest(n,e){const t=n.now,i=n.voice({pan:e,dur:2,send:.5});n.noiseBurst(i,t,{dur:.09,gain:.38,a:.001,filter:{type:"highpass",f:1400}}),n.noiseBurst(i,t+.04,{dur:1.7,gain:.28,a:.05,filter:{type:"lowpass",f:320,f2:120}})},nova(n){const e=n.now,t=n.voice({dur:1.8,send:.5});n.tone(t,e,{f:72,f2:34,dur:.9,gain:.45}),n.tone(t,e,{f:1100,f2:160,dur:1.1,gain:.1}),n.noiseBurst(t,e,{dur:1.2,gain:.05,a:.02,filter:{type:"highpass",f:6e3}}),[659,988,1319].forEach(i=>n.tone(t,e+.05,{f:i,dur:1.4,gain:.028,a:.05}))},build(n){const e=n.now,t=n.voice({dur:1.4,send:.35});[392,494,587,784].forEach((i,s)=>n.bell(t,e+s*.07,i,{dur:.9,gain:.07}))},points(n){const e=n.now,t=n.voice({dur:.5,send:.4});for(let i=0;i<4;i++)n.tone(t,e+i*.035,{f:2e3+Math.random()*2e3,dur:.12,gain:.025,a:.001})},skill(n){const e=n.now,t=n.voice({dur:1,send:.4});n.bell(t,e,659,{dur:.8,gain:.07}),n.bell(t,e+.09,988,{dur:.8,gain:.06})},unlockCue(n){const e=n.now,t=n.voice({dur:1,send:.45});n.tone(t,e,{f:660,f2:990,dur:.3,gain:.1}),n.bell(t,e+.08,990,{dur:.8,gain:.07})},capstone(n){const e=n.now,t=n.voice({dur:2,send:.5});[330,440,554,660,880].forEach((i,s)=>n.bell(t,e+s*.09,i,{dur:1.2,gain:.08}))},respec(n){const e=n.now,t=n.voice({dur:.6,send:.3});n.noiseBurst(t,e,{dur:.42,gain:.1,a:.3,filter:{type:"bandpass",f:2400,f2:400,q:1.5}})},waveStart(n){const e=n.now,t=n.voice({dur:2.2,send:.35});n.drum(t,e,.5),n.drum(t,e+.28,.42),[146.8,220].forEach(i=>n.tone(t,e+.35,{type:"sawtooth",f:i,dur:1.3,gain:.05,a:.4,filter:{type:"lowpass",f:600,f2:1500,q:1.5}}))},waveClear(n){const e=n.now,t=n.voice({dur:2.2,send:.5});[74,81,76,86].forEach((i,s)=>n.bell(t,e+s*.11,Un(i),{dur:1.6,gain:.055}))},victory(n){const e=n.now,t=n.voice({dur:3,send:.45,alert:!0});[62,66,69,74].forEach((i,s)=>n.bell(t,e+s*.16,Un(i+12),{dur:1.2,gain:.07})),[62,66,69].forEach(i=>n.tone(t,e+.64,{type:"sawtooth",f:Un(i),dur:2,gain:.035,a:.1,filter:{type:"lowpass",f:1800}}))},defeat(n){const e=n.now,t=n.voice({dur:3.2,send:.5,alert:!0});[69,65,62,57].forEach((i,s)=>n.tone(t,e+s*.35,{type:"sawtooth",f:Un(i),dur:1.6,gain:.045,a:.05,filter:{type:"lowpass",f:1100,f2:300}})),n.tone(t,e+1.4,{f:73.4,f2:55,dur:1.6,gain:.3})},uiClick(n){const e=n.now,t=n.voice({dur:.08,send:0});n.tone(t,e,{f:1250,dur:.03,gain:.05,a:.001}),n.noiseBurst(t,e,{dur:.012,gain:.03,filter:{type:"highpass",f:4e3}})},uiDisabled(n){const e=n.now,t=n.voice({dur:.1,send:0});n.tone(t,e,{f:190,f2:150,dur:.06,gain:.07,filter:{type:"lowpass",f:700}})},alertBoss(n,e){const t=n.now,i=n.voice({pan:e,dur:2.2,send:.45,alert:!0});[0,.6].forEach(s=>[73.4,110].forEach(r=>n.tone(i,t+s,{type:"sawtooth",f:r,dur:.55,gain:.1,a:.06,filter:{type:"lowpass",f:520,q:3}}))),[1175,1568,2349].forEach((s,r)=>n.bell(i,t+1.15+r*.08,s,{dur:.7,gain:.04}))},alertHpLow(n){const e=n.now,t=n.voice({dur:1.2,send:.2,alert:!0});[0,.2].forEach(i=>n.tone(t,e+i,{f:62,f2:44,dur:.18,gain:.55})),[.45,.62].forEach(i=>n.tone(t,e+i,{type:"square",f:880,dur:.1,gain:.035,filter:{type:"lowpass",f:2200}}))},alertLeak(n,e){const t=n.now,i=n.voice({pan:e,dur:.9,send:.25,alert:!0});n.tone(i,t,{f:64,f2:30,dur:.5,gain:.55}),n.noiseBurst(i,t,{dur:.16,gain:.22,filter:{type:"bandpass",f:2e3,q:1}}),n.noiseBurst(i,t+.03,{dur:.35,gain:.12,filter:{type:"lowpass",f:500}})},alertNewAbility(n){const e=n.now,t=n.voice({dur:2.2,send:.5,alert:!0});n.drum(t,e,.45),n.drum(t,e+.26,.38),[587.3,622.3,880].forEach((i,s)=>{const r=n.tone(t,e+.55+s*.22,{type:"triangle",f:i,dur:.7,gain:.07,a:.02}),a=t.add(n.ctx.createOscillator()),o=t.add(n.gain(6));a.frequency.value=6,a.connect(o),o.connect(r.frequency),a.start(e),a.stop(e+2)})},alertNovaReady(n){const e=n.now,t=n.voice({dur:1.2,send:.45,alert:!0});n.bell(t,e,1319,{dur:.9,gain:.08,bright:1.2}),n.bell(t,e+.12,1760,{dur:1,gain:.08,bright:1.2})}},L1=72,vn=60/L1,Qc=[[50,53,57,60,64],[46,50,53,57,62],[53,57,60,67,69],[48,50,55,62,64]],ja=[74,77,79,81,84,86],eh=[38,38,41,38,33,33,36,33];function D1(n){return n.phase==="victory"?"victory":n.phase==="defeat"?"defeat":n.phase!=="wave"?"calm":n.enemies.some(e=>e.boss&&e.hp>0)?"boss":"wave"}function U1(n,e,t){const i={},s=()=>ja[Math.min(ja.length-1,Math.floor(t()*ja.length))];return n%8===0?(i.chord=Qc[n/8%Qc.length],i.harp=s(),i.harpOffbeat=!0):t()<.3&&(i.harpOffbeat=t()>=.5,i.harp=s()),(e==="wave"||e==="boss")&&(n%4===0?i.drum=.2:n%4===2&&(i.drum=.11),i.shaker=!0),e==="boss"&&(i.bass=[0,1].map(r=>eh[(n*2+r)%eh.length])),i}class N1{constructor(e){R(this,"on",!1);R(this,"layer","calm");R(this,"beat",0);R(this,"next",0);R(this,"timer",0);R(this,"bus");R(this,"layers");this.engine=e}get ctx(){return this.engine.ctx}start(){if(this.on)return;this.on=!0;const e=this.ctx.currentTime;this.bus=this.engine.gain(0,this.engine.musicScore),this.bus.gain.setValueAtTime(0,e),this.bus.gain.linearRampToValueAtTime(1,e+3),this.layers={pad:this.engine.gain(1,this.bus),wave:this.engine.gain(0,this.bus),boss:this.engine.gain(0,this.bus)},this.applyLayer(!0),this.beat=0,this.next=e+.1,this.timer=window.setInterval(()=>this.schedule(),100),this.schedule()}stop(e=1.5){if(!this.on||!this.bus)return;this.on=!1,clearInterval(this.timer);const t=this.bus,i=this.ctx.currentTime;t.gain.cancelScheduledValues(i),t.gain.setValueAtTime(t.gain.value,i),t.gain.linearRampToValueAtTime(0,i+e),window.setTimeout(()=>t.disconnect(),(e+.3)*1e3),this.bus=void 0,this.layers=void 0}get playing(){return this.on}setMixGain(e){this.engine.musicScore.gain.setTargetAtTime(e,this.ctx.currentTime,.3)}setLayer(e){if(e===this.layer)return;const t=this.layer;if(this.layer=e,e==="defeat"){this.stop();return}if(t==="defeat"&&!this.on){this.start();return}e==="victory"&&this.victoryChord(),this.applyLayer(!1)}applyLayer(e){if(!this.layers)return;const t=this.ctx.currentTime,i=e?.01:2,s={wave:this.layer==="wave"||this.layer==="boss"?1:0,boss:this.layer==="boss"?1:0};for(const r of["wave","boss"]){const a=this.layers[r].gain;a.cancelScheduledValues(t),a.setValueAtTime(a.value,t),a.linearRampToValueAtTime(s[r],t+i)}}schedule(){const e=this.ctx.currentTime;if(this.next<e-vn){const t=Math.ceil((e-this.next)/vn);this.beat+=t,this.next+=t*vn}for(;this.next<e+.25;)this.playBeat(this.beat,this.next),this.next+=vn,this.beat++}voice(e,t,i){return this.engine.voice({bus:e,dur:t,send:i,music:!0})}playBeat(e,t){if(!this.layers)return;const i=this.engine,s=U1(e,this.layer,Math.random);if(s.chord){const r=8*vn+2.5,a=this.voice(this.layers.pad,r+.5,.5),o=a.add(this.ctx.createBiquadFilter());o.type="lowpass",o.Q.value=.6,o.frequency.setValueAtTime(this.layer==="calm"?750:1100,t),o.connect(a.input);for(const l of s.chord)for(const c of[-6,6]){const h=a.add(this.ctx.createOscillator()),u=a.add(this.ctx.createGain());h.type="sawtooth",h.frequency.value=Un(l),h.detune.value=c,u.gain.setValueAtTime(1e-4,t),u.gain.linearRampToValueAtTime(.014,t+2.5),u.gain.setValueAtTime(.014,t+r-3),u.gain.linearRampToValueAtTime(1e-4,t+r),h.connect(u),u.connect(o),h.start(t),h.stop(t+r+.05)}}if(s.harp!==void 0){const r=this.voice(this.layers.pad,2,.6);i.pluck(r,t+(s.harpOffbeat?vn/2:0),Un(s.harp),{gain:.045})}if(s.drum||s.shaker){const r=this.voice(this.layers.wave,1,.15);s.drum&&i.drum(r,t,s.drum),s.shaker&&i.noiseBurst(r,t+vn/2,{dur:.05,gain:.018,filter:{type:"highpass",f:6500}})}if(s.bass){const r=this.voice(this.layers.boss,vn+.3,.05);s.bass.forEach((a,o)=>i.tone(r,t+o*vn/2,{type:"sawtooth",f:Un(a),dur:vn/2-.03,gain:.08,a:.01,filter:{type:"lowpass",f:300,q:4}}))}}victoryChord(){if(!this.layers)return;const e=this.ctx.currentTime+.05,t=this.voice(this.layers.pad,4,.6);[62,66,69,74].forEach(i=>this.engine.tone(t,e,{type:"triangle",f:Un(i),dur:3.5,gain:.03,a:.4}))}}const Iu="aetherkeep.audio.v1",Ns=Object.freeze({enabled:!0,sfx:80,music:50}),th=(n,e)=>typeof n=="number"&&Number.isFinite(n)?Math.min(100,Math.max(0,Math.round(n/10)*10)):e;function F1(n){let e;try{e=n===null?null:JSON.parse(n)}catch{e=null}if(!e||typeof e!="object"||Array.isArray(e))return{...Ns};const t=e;return{enabled:typeof t.enabled=="boolean"?t.enabled:Ns.enabled,sfx:th(t.sfx,Ns.sfx),music:th(t.music,Ns.music)}}const Lu=()=>{try{return globalThis.localStorage}catch{return}};function O1(n=Lu()){try{return F1((n==null?void 0:n.getItem(Iu))??null)}catch{return{...Ns}}}function nh(n,e=Lu()){try{e==null||e.setItem(Iu,JSON.stringify(n))}catch{}}const qo="golden-island",k1={"golden-island":{calm:{wind:.9,waterfall:1,air:1.15,music:.8,oneShot:1,intervalScale:1},wave:{wind:.65,waterfall:.65,air:.8,music:.9,oneShot:.45,intervalScale:1.8},boss:{wind:.5,waterfall:.5,air:.7,music:1,oneShot:.3,intervalScale:2.5},victory:{wind:.8,waterfall:1,air:1.2,music:.9,oneShot:.7,intervalScale:1.3},defeat:{wind:.25,waterfall:.2,air:.3,music:0,oneShot:0,intervalScale:3}},"moonlit-island":{calm:{wind:1,waterfall:1,air:1,music:.8,oneShot:1,intervalScale:1},wave:{wind:.7,waterfall:.65,air:.7,music:.9,oneShot:.45,intervalScale:1.8},boss:{wind:.55,waterfall:.5,air:.6,music:1,oneShot:.3,intervalScale:2.5},victory:{wind:.85,waterfall:1,air:1,music:.9,oneShot:.7,intervalScale:1.3},defeat:{wind:.25,waterfall:.2,air:.3,music:0,oneShot:0,intervalScale:3}}};function ms(n){return n==="moonlit-island"?n:qo}const Du=[{kind:"gust",interval:[11,23],gain:[.045,.075],pan:[-.55,.55],gentle:.4,variants:[{id:"low-swell",duration:4.8,frequency:240,endFrequency:500,pulses:1},{id:"high-drift",duration:5.6,frequency:620,endFrequency:340,pulses:1},{id:"long-breath",duration:6.4,frequency:380,endFrequency:760,pulses:1}]},{kind:"nightCall",scenes:["moonlit-island"],interval:[15,30],gain:[.014,.026],pan:[-.6,.6],gentle:1,variants:[{id:"falling-pair",duration:2.3,frequency:880,endFrequency:660,pulses:2},{id:"single-distant",duration:2,frequency:740,endFrequency:830,pulses:1},{id:"three-notes",duration:3,frequency:1040,endFrequency:780,pulses:3}]},{kind:"stoneFall",interval:[20,38],gain:[.018,.033],pan:[-.6,.6],gentle:.8,variants:[{id:"loose-grit",duration:1.4,frequency:1700,endFrequency:500,pulses:3},{id:"pebble-pair",duration:1.8,frequency:950,endFrequency:300,pulses:2},{id:"earth-trickle",duration:2.1,frequency:650,endFrequency:180,pulses:4}]},{kind:"towerHum",interval:[18,34],gain:[.012,.022],pan:[-.35,.35],gentle:1,variants:[{id:"glass-fifth",duration:3.5,frequency:440,endFrequency:660,pulses:2},{id:"quiet-scan",duration:4.2,frequency:587.33,endFrequency:880,pulses:2},{id:"clear-octave",duration:3.8,frequency:523.25,endFrequency:1046.5,pulses:2}]},{kind:"riftEcho",interval:[95,160],gain:[.018,.03],pan:[-.4,.4],gentle:.25,variants:[{id:"hollow-exhale",duration:6,frequency:73.4,endFrequency:55,pulses:1},{id:"deep-resonance",duration:7,frequency:55,endFrequency:46.25,pulses:1},{id:"organic-answer",duration:6.5,frequency:82.4,endFrequency:61.7,pulses:2}]},{kind:"cricket",scenes:["moonlit-island"],interval:[5,11],gain:[.006,.012],pan:[-.6,.6],gentle:1,variants:[{id:"two-chirps",duration:.9,frequency:4300,endFrequency:4420,pulses:2},{id:"three-chirps",duration:1,frequency:4460,endFrequency:4320,pulses:3},{id:"four-chirps",duration:1.1,frequency:4180,endFrequency:4380,pulses:4}]},{kind:"dayBird",scenes:["golden-island"],interval:[13,25],gain:[.008,.014],pan:[-.55,.55],gentle:1,variants:[{id:"soft-rise",duration:1.8,frequency:1020,endFrequency:1380,pulses:1},{id:"distant-pair",duration:2.3,frequency:1260,endFrequency:980,pulses:2},{id:"warm-answer",duration:2.6,frequency:1120,endFrequency:1440,pulses:3}]},{kind:"dayInsect",scenes:["golden-island"],interval:[9,18],gain:[.004,.008],pan:[-.5,.5],gentle:1,variants:[{id:"low-buzz",duration:3.2,frequency:1200,endFrequency:1e3,pulses:1},{id:"distant-cicada",duration:4.2,frequency:1550,endFrequency:1150,pulses:2},{id:"long-haze",duration:5.2,frequency:1750,endFrequency:1250,pulses:3}]}];function Hr(n){return{...k1[ms(n.scene)][n.state],master:n.enabled?Math.max(0,Math.min(100,n.music))/100*(n.dimmed?.5:1):0}}const B1=2;class z1{constructor({clock:e=()=>performance.now()/1e3,random:t=Math.random,definitions:i=Du,maxVoices:s=B1}={}){R(this,"clock");R(this,"random");R(this,"maxVoices");R(this,"allSlots");R(this,"slots");R(this,"ends",[]);R(this,"input");R(this,"allowed",!1);R(this,"mix");R(this,"played",0);R(this,"peak",0);R(this,"dropped",0);this.clock=e,this.random=t,this.maxVoices=s,this.allSlots=i.map(r=>({definition:r,due:1/0,last:-1,counts:r.variants.map(()=>0)})),this.slots=this.slotsFor(qo)}slotsFor(e){return this.allSlots.filter(t=>!t.definition.scenes||t.definition.scenes.includes(e))}update(e){var l,c;const t=ms(e.scene),i=Hr(e),s=i.master>0&&i.oneShot>0&&!e.hidden&&!e.dimmed,r=t!==((l=this.input)==null?void 0:l.scene),a=s!==this.allowed||r,o=((c=this.mix)==null?void 0:c.intervalScale)??i.intervalScale;if(this.input={...e,scene:t},this.mix=i,this.allowed=s,r&&(this.slots=this.slotsFor(t)),(!s||r)&&(this.ends.length=0),a)this.resetDeadlines(this.clock());else if(s&&i.intervalScale!==o){const h=this.clock();for(const u of this.slots)u.due>h&&(u.due=h+(u.due-h)*i.intervalScale/o)}}between([e,t]){return e+Math.max(0,Math.min(.999999999999,this.random()))*(t-e)}resetDeadlines(e){for(const t of this.slots)t.due=this.allowed?e+this.between(t.definition.interval)*this.mix.intervalScale:1/0}tick(){const e=[];if(!this.allowed||!this.mix||!this.input)return e;const t=this.clock();for(let i=this.ends.length-1;i>=0;i--)this.ends[i]<=t&&this.ends.splice(i,1);for(const i of this.slots){if(i.due>t)continue;const s=i.definition,r=t-i.due>1;if(i.due=t+this.between(s.interval)*this.mix.intervalScale,r)continue;if(this.ends.length>=this.maxVoices){this.dropped++;continue}const a=s.variants.length-(i.last<0?0:1);let o=Math.floor(this.between([0,a]));i.last>=0&&o>=i.last&&o++;const l=s.variants[o].duration;e.push({kind:s.kind,variant:o,duration:l,pan:this.between(s.pan),gain:this.between(s.gain)*this.mix.oneShot*(this.input.reducedMotion?s.gentle:1),gentle:this.input.reducedMotion}),this.ends.push(t+l),i.last=o,i.counts[o]++,this.played++,this.peak=Math.max(this.peak,this.ends.length)}return e}stats(){var s;const e=this.clock(),t={},i={};for(const r of this.slots)t[r.definition.kind]=r.due,i[r.definition.kind]=[...r.counts];return{scene:((s=this.input)==null?void 0:s.scene)??qo,next:t,counts:i,played:this.played,active:this.ends.filter(r=>r>e).length,peak:this.peak,dropped:this.dropped}}}const ih=8;class H1{constructor(e){R(this,"scheduler",new z1);R(this,"nodes",[]);R(this,"loop");R(this,"wind");R(this,"waterfall");R(this,"air");R(this,"live",[]);R(this,"input");R(this,"timer");this.engine=e;const t=e,i=t.ctx;this.loop=this.makeLoop(),this.wind=this.add(t.gain(0,t.music)),this.waterfall=this.add(t.gain(0,t.music)),this.air=this.add(t.gain(0,t.music));const s=this.band(this.wind,220,.5,.065,-.15,0);this.modulate(s.filter.frequency,.029,85),this.modulate(s.gain.gain,.043,.018);const r=this.band(this.wind,900,.65,.018,.2,2.3);this.modulate(r.filter.frequency,.019,320),this.modulate(r.pan.pan,.017,.3);const a=this.band(this.waterfall,430,.45,.055,-.1,4.7),o=this.add(i.createBiquadFilter());o.type="lowpass",o.frequency.value=1250,a.filter.disconnect(),a.filter.connect(o),o.connect(a.gain),this.modulate(a.pan.pan,.013,.35);const l=this.band(this.air,5800,.55,.0025,0,6.1);this.modulate(l.gain.gain,.021,.001),this.timer=window.setInterval(()=>this.tick(),250)}add(e){return this.nodes.push(e),e}makeLoop(){const e=this.engine.ctx,t=Math.round(e.sampleRate*ih),i=e.createBuffer(2,t,e.sampleRate),s=Math.round(e.sampleRate*.5);for(let r=0;r<2;r++){const a=new Float32Array(t+s),o=i.getChannelData(r);for(let l=0;l<a.length;l++)a[l]=Math.random()*2-1;for(let l=0;l<t;l++){const c=l/s*Math.PI/2;o[l]=l<s?a[t+l]*Math.cos(c)+a[l]*Math.sin(c):a[l]}}return i}band(e,t,i,s,r,a){const o=this.engine.ctx,l=this.add(o.createBufferSource());l.buffer=this.loop,l.loop=!0;const c=this.add(o.createBiquadFilter());c.type="bandpass",c.frequency.value=t,c.Q.value=i;const h=this.add(this.engine.gain(s)),u=this.add(o.createStereoPanner());return u.pan.value=r,l.connect(c),c.connect(h),h.connect(u),u.connect(e),l.start(0,a),{filter:c,gain:h,pan:u}}modulate(e,t,i){const s=this.add(this.engine.ctx.createOscillator()),r=this.add(this.engine.gain(i));s.frequency.value=t,s.connect(r),r.connect(e),s.start()}update(e){const t=!!this.input&&ms(e.scene)!==ms(this.input.scene);this.input=e,this.scheduler.update(e);const i=Hr(e),s=this.engine.ctx.currentTime;this.wind.gain.setTargetAtTime(i.wind,s,.8),this.waterfall.gain.setTargetAtTime(i.waterfall,s,.8),this.air.gain.setTargetAtTime(i.air,s,.8),i.master===0||i.oneShot===0||e.hidden||e.dimmed?this.stopOneShots():t&&this.fadeOneShots(s)}fadeOneShots(e){for(const t of this.live)t.voice.input.gain.cancelAndHoldAtTime(e),t.voice.input.gain.linearRampToValueAtTime(0,e+.2),t.end=Math.min(t.end,e+.2)}stopOneShots(){for(const{voice:e}of this.live)this.engine.stopVoice(e);this.live.length=0}tick(){if(this.engine.ctx.state!=="running")return;const e=this.engine.ctx.currentTime;for(let t=this.live.length-1;t>=0;t--)this.live[t].end<=e&&(this.engine.stopVoice(this.live[t].voice),this.live.splice(t,1));for(const t of this.scheduler.tick())this.play(t)}noise(e,t,i,s,r,a,o){const l=this.engine,c=l.ctx,h=e.add(c.createBufferSource()),u=e.add(c.createGain());h.buffer=this.loop,h.loop=!0;const d=e.add(c.createBiquadFilter());d.type="bandpass",d.Q.value=.7,d.frequency.setValueAtTime(r,t),d.frequency.exponentialRampToValueAtTime(a,t+i),l.env(u.gain,t,o,s,i),h.connect(d),d.connect(u),u.connect(e.input),h.start(t),h.stop(t+i+.03)}play(e){const t=this.engine,i=Du.find(d=>d.kind===e.kind),s=i.variants[e.variant],r=t.now,a=e.duration-.4,o=t.voice({bus:t.music,pan:e.pan,dur:e.duration-.3,send:0,music:!0}),l=e.gain,c=s.frequency,h=s.endFrequency,u=s.pulses;if(e.kind==="gust")this.noise(o,r,a,l,c,h,e.gentle?1.6:1.1),this.noise(o,r,a,l*.25,c*2.4,h*1.5,1.5);else if(e.kind==="nightCall")for(let d=0;d<u;d++)t.tone(o,r+d*.48,{f:c*(1-d*.04),f2:h,dur:.65,gain:l,a:.16});else if(e.kind==="dayBird")for(let d=0;d<u;d++)t.tone(o,r+d*.42,{f:c*(1+d*.025),f2:h,dur:.24,gain:l/(1+d*.25),a:.065,filter:{type:"lowpass",f:1900}});else if(e.kind==="dayInsect")this.noise(o,r,a,l*.55,c,h,.8),t.tone(o,r,{f:c*.18,f2:h*.18,dur:a,gain:l*.18,a:.7}),u>1&&this.noise(o,r+.35,a-.35,l*.2,c*1.3,h,1);else if(e.kind==="stoneFall")for(let d=0;d<u;d++)this.noise(o,r+d*.16,.25,l/(1+d*.25),c,h,.025);else if(e.kind==="towerHum")t.tone(o,r,{f:c,dur:a,gain:l,a:.65}),t.tone(o,r+.3,{f:h,dur:a-.3,gain:l*.45,a:.5}),t.tone(o,r+.6,{f:c*2,dur:a-.6,gain:l*.12,a:.7});else if(e.kind==="riftEcho")t.tone(o,r,{f:c,f2:h,dur:a,gain:l,a:e.gentle?2.2:1.6}),t.tone(o,r+.15,{f:c*1.47,f2:h*1.5,dur:a-.15,gain:l*.35,a:1.8}),this.noise(o,r,a,l*.45,170,95,1.8),u>1&&t.tone(o,r+1.5,{f:c*.75,f2:h*.8,dur:a-1.5,gain:l*.4,a:1.5});else for(let d=0;d<u;d++)t.tone(o,r+d*.06,{f:c,f2:h,dur:.035,gain:l,a:.004});this.live.push({voice:o,end:t.ctx.currentTime+e.duration})}stats(){var i,s,r,a;const e=this.input?Hr(this.input):void 0,t=!!e&&e.master>0&&!((i=this.input)!=null&&i.hidden);return{preset:((s=this.input)==null?void 0:s.state)??"calm",mix:e,layers:{ambience:t,music:t&&e.music>0,oneShots:t&&!((r=this.input)!=null&&r.dimmed)&&e.oneShot>0},loop:{seconds:ih,channels:2,bytes:this.loop.length*2*4,nodes:this.nodes.length},reducedMotion:((a=this.input)==null?void 0:a.reducedMotion)??!1,...this.scheduler.stats(),active:this.live.filter(o=>o.end>this.engine.ctx.currentTime).length}}dispose(){var e;clearInterval(this.timer),this.stopOneShots();for(const t of this.nodes){try{(e=t.stop)==null||e.call(t)}catch{}t.disconnect()}}}class V1{constructor(){R(this,"ctx");R(this,"engine");R(this,"music");R(this,"soundscape");R(this,"reduced",matchMedia("(prefers-reduced-motion: reduce)"));R(this,"limiter",new A1);R(this,"current",O1());R(this,"layer","calm");R(this,"scene",ms(new URLSearchParams(window.location.search).get("soundscape")));R(this,"dimmed",!1);R(this,"counts",{played:0,refused:0});document.addEventListener("visibilitychange",()=>this.syncRunning()),this.reduced.addEventListener("change",()=>this.applyVolumes()),window.addEventListener("pagehide",e=>{var t;e.persisted||(t=this.soundscape)==null||t.dispose()})}get settings(){return{...this.current}}unlock(){if(this.current.enabled){if(!this.ctx){try{this.ctx=new AudioContext}catch{return}this.engine=new P1(this.ctx),this.music=new N1(this.engine),this.soundscape=new H1(this.engine),this.ctx.addEventListener("statechange",()=>this.applyVolumes()),this.applyVolumes(!0),this.music.start(),this.music.setLayer(this.layer)}this.syncRunning()}}toggle(){return this.current.enabled=!this.current.enabled,nh(this.current),this.current.enabled?this.unlock():this.syncRunning(),this.current.enabled}setVolume(e,t){this.current[e]=Math.min(100,Math.max(0,Math.round(t/10)*10)),nh(this.current),this.applyVolumes()}setScene(e){const t=ms(e);t!==this.scene&&(this.scene=t,this.applyVolumes())}setDimmed(e){e!==this.dimmed&&(this.dimmed=e,this.applyVolumes())}follow(e){var i;const t=D1(e);t!==this.layer&&(this.layer=t,(i=this.music)==null||i.setLayer(t),this.applyVolumes())}handle(e,t,i,s){if(this.running)for(const r of E1(e,t,i))this.play(r,r.at?s(r.at):0)}ui(e){this.running&&this.play({name:e?"uiDisabled":"uiClick"},0)}unlockCue(e){this.running&&this.play({name:e?"capstone":"unlockCue"},0)}preview(){this.running&&this.play({name:"coin"},0)}stats(){var e,t,i,s,r;return{state:((e=this.ctx)==null?void 0:e.state)??"none",enabled:this.current.enabled,layer:this.layer,music:((t=this.music)==null?void 0:t.playing)??!1,voices:((i=this.engine)==null?void 0:i.liveEffectVoices())??0,peak:((s=this.engine)==null?void 0:s.peak)??0,...this.counts,soundscape:((r=this.soundscape)==null?void 0:r.stats())??null}}get running(){var e;return!!this.engine&&this.current.enabled&&((e=this.ctx)==null?void 0:e.state)!=="closed"}play(e,t){if(!this.engine||!this.limiter.allow(e.name,this.engine.ctx.currentTime)){this.counts.refused++;return}this.counts.played++,this.engine.play(e,Math.max(-.6,Math.min(.6,t*.6)))}applyVolumes(e=!1){var a,o;if(!this.engine)return;const t=this.engine.ctx.currentTime,i=e?.001:.03;this.engine.sfx.gain.setTargetAtTime(this.current.sfx/100,t,i);const s=this.soundscapeInput(),r=Hr(s);this.engine.music.gain.setTargetAtTime(r.master,t,i),(a=this.music)==null||a.setMixGain(r.music),(o=this.soundscape)==null||o.update(s)}soundscapeInput(){var e;return{scene:this.scene,state:this.layer,enabled:this.current.enabled,music:this.current.music,dimmed:this.dimmed,hidden:document.hidden||((e=this.ctx)==null?void 0:e.state)!=="running",reducedMotion:this.reduced.matches}}syncRunning(){this.ctx&&(this.applyVolumes(),document.hidden||!this.current.enabled?this.ctx.suspend():this.ctx.resume())}}function G1(n,e){if(e<=0)return 0;const t=e*Xo;return n>t?0:Math.min(1,Math.max(0,1-Math.max(0,n)/t))}const Vr=class Vr{constructor(){R(this,"sum",0);R(this,"since",NaN)}add(e,t){e<=0||(Number.isNaN(this.since)&&(this.since=t),this.sum+=e)}take(e){if(Number.isNaN(this.since)||e-this.since<Vr.WINDOW-1e-9)return null;const t=this.sum;return this.sum=0,this.since=NaN,t}};R(Vr,"WINDOW",.5);let Yo=Vr;const W1=600;class $1{constructor(e,t,i){R(this,"free",[]);R(this,"all",[]);this.layer=e,this.target=t,this.onArrive=i}setPool(e){for(;this.all.length<e;){const t=document.createElement("img");t.className="fly-coin",t.src="ui/icons/coin.webp",t.alt="",t.width=22,t.height=22,t.decoding="async",t.hidden=!0,this.layer.append(t),this.all.push(t),this.free.push(t)}for(;this.all.length>e&&this.free.length;){const t=this.free.pop();this.all.splice(this.all.indexOf(t),1),t.remove()}}launch(e,t){const i=this.free.pop();if(!i)return!1;const s=this.target(),r=s.left+s.width*.22,a=s.top+s.height/2,o=e+(r-e)*.3,l=t+(a-t)*.7;i.hidden=!1;const c=i.animate([{transform:`translate(${e-11}px, ${t-11}px) scale(.5)`,opacity:0},{transform:`translate(${e-11}px, ${t-21}px) scale(1.1)`,opacity:1,offset:.15},{transform:`translate(${o-11}px, ${l-11}px) scale(1)`,opacity:1,offset:.55},{transform:`translate(${r-11}px, ${a-11}px) scale(.8)`,opacity:.9}],{duration:W1,easing:"cubic-bezier(.45,0,.7,1)"});return c.onfinish=c.oncancel=()=>{i.hidden=!0,this.all.includes(i)?this.free.push(i):i.remove(),c.playState==="finished"&&this.onArrive()},!0}}const gs=n=>String(n).padStart(2,"0"),X1=new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}),q1=n=>X1.format(Math.round(n)),Gs={split:{name:"แตกตัว",icon:"circles-four",rule:"ตายแล้วแตกเป็นตัวเล็ก 2 ตัว HP 20% ของตัวแม่ เร็วขึ้น 30%",counters:"ดาเมจพื้นที่, ไฟลาม, สายฟ้าลูกโซ่"},flying:{name:"บิน",icon:"bird",rule:"ไม่โดนหลุมลาวาและทุ่งน้ำแข็ง การชะลอได้ผลครึ่งเดียว Storm แรงขึ้น 25%",counters:"Storm, ลูกศรอีเธอร์"},regen:{name:"ซ่อมตัว",icon:"heartbeat",rule:"ไม่โดนดาเมจ 1.5 วินาที จะฟื้น HP 4% ต่อวินาที ขณะติดไฟฟื้นไม่ได้",counters:"ไฟเผา, ดาเมจต่อเนื่อง"},armor:{name:"เกราะ",icon:"shield",rule:"ลดดาเมจทุกนัด แต่เหลืออย่างน้อย 25% ของนัด ไฟเผาลดครึ่งหนึ่ง",counters:"นัดใหญ่, เปราะแตก"},dash:{name:"พุ่ง",icon:"wind",rule:"ทุก 4 วินาที เรืองแสงเตือน แล้วพุ่งเร็ว 2.5 เท่า นาน 0.8 วินาที ขณะโดนชะลอ หรือหยุดนิ่ง พุ่งไม่ได้",counters:"Frost"},shield:{name:"โล่",icon:"shield-chevron",rule:"โล่ 50% ของ HP รับดาเมจก่อน Storm ทำใส่โล่ 2 เท่า ไม่โดนดาเมจ 4 วินาที โล่ฟื้น",counters:"Storm, การรุมยิงเป้าเดียว"}},Uu={core:{icon:"diamond",tagline:"เสริมพลังป้อมหลัก"},fire:{icon:"flame",tagline:"ระเบิดและเผาไหม้"},frost:{icon:"snowflake",tagline:"ชะลอและหยุดการเคลื่อนไหว"},storm:{icon:"lightning",tagline:"สายฟ้าชิ่งหลายเป้า"}},Y1={"I-a":"ชั้น I","I-b":"ชั้น I","II-A":"ทางแยก II","II-B":"ทางแยก II","III-A":"ชั้น III","III-B":"ชั้น III",cap:"ขั้นสูงสุด"},Ko={owned:"มีแล้ว",available:"ปลดได้",locked:"ยังล็อก",blocked:"ปิดจากอีกทาง"},zt=n=>n.phase==="victory"||n.phase==="defeat";function K1(n){const e=n.total+n.extra,t=n.phase==="wave"||zt(n)?n.wave:n.wave+1,i=n.endless?"∞":du,s=`ระลอก ${gs(t)} / ${i}`,r=n.built?n.phase==="wave"?"กำลังต่อสู้":n.phase==="ready"?n.wave===0?"เตรียมรับระลอกแรก":`ผ่านระลอก ${gs(n.wave)} · เตรียมตัวให้พร้อม`:s:"วางป้อมกลางเกาะเพื่อเริ่ม",a=n.phase==="wave";return{status:r,waveLabel:s,fighting:a,left:a?n.remaining:0,label:a?`ระลอก ${t}/${i} · เหลือ ${n.remaining}/${e}`:s,progress:n.phase==="wave"&&e>0?1-n.remaining/e:0,remaining:n.phase==="wave"?`เหลือ ${n.remaining} / ${e} ตัว`:"",gold:n.gold,hp:n.hp,maxHp:n.maxHp,critical:n.hp<=n.maxHp*.3}}function Nu(n,e){var i;const t=n.skills.map(Ct).filter(s=>s.branch===e);return{owned:t,route:t.filter(s=>s.slot.startsWith("II")).map(s=>s.name),capstone:((i=t.find(s=>s.slot==="cap"))==null?void 0:i.name)??null}}function j1(n){const e=!n.built||n.paused||zt(n);return Si.map(t=>{var p;const i=t==="core"?n.core:n.levels[t],{owned:s,route:r,capstone:a}=Nu(n,t),o=vl(n,t),l=i>0,c=l?"เพิ่มพลัง":"ปลดด้วยพลังงาน",h=n.built?n.paused?"เกมหยุดอยู่ · เล่นต่อเพื่อใช้พลังงาน":n.gold<o?`${c} · ${o} พลังงาน · พลังงานยังไม่พอ`:`${c} ${Qn[t]} เป็นระดับ ${i+1} · ${o} พลังงาน`:"สร้างป้อมก่อน",u=((p=s.find(g=>g.slot==="II-A"||g.slot==="II-B"))==null?void 0:p.id)??null,d=l?r.length?r.join(" → "):"ยังไม่เลือกทาง":"ใช้พลังงานปลดธาตุ";return{key:t,name:Qn[t],icon:Uu[t].icon,level:i,levelText:l?`ระดับ ${i}`:"ยังล็อก",path:d,capstone:a,fork:u,look:l?"owned":n.gold>=o?"unlock":"locked",upgrade:{label:c,cost:o,affordable:n.gold>=o,disabled:e||n.gold<o,title:h}}})}function Z1(n,e){const t=e==="core"?n.core:n.levels[e],i=Pi(n),s=c=>e==="core"?su(_l({...n,core:c}).damage,i):e==="fire"?ru(c,i):e==="frost"?ul(c)*(i.brittle?Re.brittle.taken:1):au(c,i),r=vl(n,e),a=Nu(n,e),o=[a.route.length?`ทาง ${a.route.join(" → ")}`:"",a.capstone?`★ ${a.capstone}`:""].filter(Boolean).join(" · ")||null,l=n.built?zt(n)?"การต่อสู้จบแล้ว":n.paused?"เกมหยุดอยู่ · เล่นต่อเพื่อใช้พลังงาน":n.gold<r?`พลังงานยังไม่พอ · ขาดอีก ${r-n.gold} พลังงาน`:null:"สร้างป้อมก่อน";return{key:e,name:Qn[e],level:t,next:t+1,stat:"ความเสียหาย",before:t>0?s(t):null,after:s(t+1),cost:r,label:t>0?"อัปเกรด":"ปลดธาตุ",disabled:l!==null,reason:l,route:o}}function J1(){return[["Space","หยุด / เล่นต่อ"],["N","เริ่มระลอกถัดไป"],["T","เปิด / ปิดผังทักษะ"],["1 / 2 / 3","เพิ่มพลังไฟ / น้ำแข็ง / สายฟ้า"],["Q","ปล่อย Nova"]]}function Q1(n){const e=!n.built||n.paused||zt(n),t=Math.ceil(n.cooldown),i=n.novaCharges>0,s=Pi(n),r=n.novaCharges<s.novaCharges,a=e||n.gold<60||n.hp>=n.maxHp,o=zt(n)?"การต่อสู้จบแล้ว":n.built?n.paused?"เกมหยุดอยู่":n.hp>=n.maxHp?"พลังป้อมเต็มแล้ว":n.gold<60?"ต้องการ 60 พลังงาน":"ฟื้นพลังป้อม 45 หน่วย · 60 พลังงาน":"สร้างป้อมก่อน";return{tree:{points:n.skillPoints,badge:n.skillPoints>0?String(n.skillPoints):"",glow:n.skillPoints>0&&!zt(n),disabled:zt(n)},primary:{action:n.built?"wave":"build",label:n.built?n.phase==="wave"?"เริ่มระลอก":`เริ่มระลอก ${gs(n.wave+1)}`:"สร้างป้อม",sub:n.built?n.phase==="wave"?"กำลังต่อสู้…":"พร้อมแล้ว · N":"ใช้พลังงาน 120",disabled:n.paused||zt(n)||n.phase==="wave"||!n.built&&n.gold<120},nova:{accessibleText:s.novaCharges>1?`Nova พร้อมใช้ ${n.novaCharges} จาก ${s.novaCharges} ครั้ง · ${r?`ครั้งถัดไปอีก ${t} วิ`:"เต็มแล้ว"}`:`Nova · ${i?"พร้อม":`อีก ${t} วิ`}`,label:n.novaCharges>1?`Nova ×${n.novaCharges}`:"Nova",sub:i?"พร้อม":`อีก ${t} วิ`,ready:i&&!e&&n.phase==="wave",disabled:e||!i||n.phase!=="wave",tag:s.novaCharges>1&&n.novaCharges>0?`${n.novaCharges}/${s.novaCharges}`:n.novaCharges>1?`×${n.novaCharges}`:i?"":`${t} วิ`,charging:r,progress:r?Math.max(0,Math.min(1,1-n.cooldown/s.novaCooldown)):0},repair:{cost:60,disabled:a,reason:o},pause:{paused:n.paused,label:n.paused?"เล่นต่อ":"หยุด",disabled:zt(n)},speed:{fast:n.speed===2,label:`ความเร็ว ${n.speed} เท่า · กดเปลี่ยนเป็น ${n.speed===1?2:1} เท่า`,caption:`×${n.speed}`,disabled:zt(n)}}}const sh=n=>rn[n].label,Fu=n=>Object.keys(Ks).find(e=>mn(e)===n&&!rn[e].elite);function rh(n){const e=xl(n),t=zt(n)?n.wave:e.wave,i=zt(n)?n.total:e.total,s=Ai.find(r=>e.traits[r]>0);return{count:i,portrait:Fu(s),expandable:n.phase==="build"||n.phase==="ready",visible:n.phase!=="wave",label:`ศัตรูระลอก ${gs(t)} · ${i} ตัว`}}const eM=["สายสั้น","สายยาว","สายกลาง"],tM=["ประตูแดง","ประตูชมพู","ประตูม่วง"];function nM(n){var s;if(n.phase!=="ready"&&n.phase!=="build")return null;const e=xl(n),t=Ai.filter(r=>e.traits[r]>0).map(r=>({trait:r,...Gs[r],portrait:Fu(r),count:e.traits[r],isNew:e.newTraits.includes(r)})),i=e.mainLane;return{title:`ระลอก ${gs(e.wave)} · ${e.total} ตัว`,lane:{main:i,text:`สายหลัก: ${eM[i]} (${tM[i]}) · ${e.lanes[i]}/${e.total} ตัว`},chips:t,spotlight:e.boss?null:((s=t.find(r=>r.isNew))==null?void 0:s.trait)??null,boss:e.boss&&{name:sh(e.boss.kind),portrait:e.boss.kind,count:e.boss.count,text:`บอส: ${sh(e.boss.kind)}${e.boss.count>1?` ×${e.boss.count}`:""} · ${Gs[e.boss.trait].name}${e.boss.stunImmune?" · หยุดนิ่งไม่ได้":""}`}}}function iM(n){const e=a=>n[a]==="owned",t=(a,o)=>a?"closed":o?"lit":"open",i=a=>{const o=`II-${a}`,l=`III-${a}`;return{fork:t(n[o]==="blocked",e("I-a")||e("I-b")),mid:t(n[l]==="blocked",e(o)),cap:t(n[l]==="blocked"||n.cap==="blocked",e(l))}},s=i("A"),r=i("B");return{tierA:t(!1,e("I-a")),tierB:t(!1,e("I-b")),forkA:s.fork,forkB:r.fork,midA:s.mid,midB:r.mid,capA:s.cap,capB:r.cap}}function ah(n){return{points:n.skillPoints,gold:n.gold,branches:Si.map(e=>{const t=e==="core"?n.built:n.levels[e]>0,i=yi.filter(a=>a.branch===e).map(a=>({id:a.id,slot:a.slot,name:a.name,cost:a.cost,status:qr(n,a.id).state})),s=Object.fromEntries(i.map(a=>[a.slot,a.status])),r=i.find(a=>(a.slot==="II-A"||a.slot==="II-B")&&a.status==="owned");return{branch:e,name:Qn[e],...Uu[e],unlocked:t,gate:e==="core"?t?"สร้างป้อมแล้ว":"สร้างป้อมก่อน":t?"ปลดธาตุแล้ว":"ปลดธาตุด้วยพลังงาน",nodes:i,fork:r?r.slot==="II-A"?"A":"B":null,forkNote:r?`ทาง ${r.name}`:"เลือก 1 ทาง",links:iM(s)}}),reset:sM(n)}}function sM(n){const e=eu(n),t=n.phase!=="ready"?"รีเซ็ตได้ระหว่างระลอกเท่านั้น":n.skills.length?n.gold<e?`ต้องการ ${e} พลังงานเพื่อรีเซ็ต`:null:"ยังไม่มีโหนดให้รีเซ็ต";return{cost:e,reason:t,note:n.respecCount?"แพงขึ้นครั้งละ 100 พลังงาน":"ราคารีเซ็ตครั้งแรก"}}function rM(n,e){const t=Ct(e),i=qr(n,e),s=zt(n)?"การต่อสู้จบแล้ว":"reason"in i?i.reason:null;return{id:e,name:t.name,branch:t.branch,place:`${Qn[t.branch]} · ${Y1[t.slot]}`,status:i.state,statusLabel:Ko[i.state],effect:t.effect,counters:t.counters.length?`แก้ทาง: ${t.counters.map(r=>r==="boss"?"บอส":Gs[r].name).join(", ")}`:null,choice:i.state==="available"||i.state==="locked"?Ov(e):null,requirements:Fv(n,e),action:{label:i.state==="owned"?"ปลดแล้ว":`ปลดโหนด · ${t.cost} หน่วย`,disabled:i.state!=="available"||zt(n),reason:s}}}const oh={"I-a":0,"I-b":0,"II-A":1,"II-B":1,"III-A":2,"III-B":2,cap:3},aM={"I-a":0,"I-b":1,"II-A":0,"II-B":1,"III-A":0,"III-B":1,cap:.5};function oM(n,e,t=Si){const i=c=>t.indexOf(c.branch)*2+aM[c.slot],s=Ct(n),[r,a]={left:[-1,0],right:[1,0],up:[0,-1],down:[0,1]}[e];let o,l=1/0;for(const c of yi){if(c.id===n||!t.includes(c.branch))continue;const h=i(c)-i(s),u=oh[c.slot]-oh[s.slot],d=h*r+u*a;if(d<=0||r&&u)continue;const p=d+3*Math.abs(r?u:h);p<l&&([o,l]=[c,p])}return(o==null?void 0:o.id)??n}function lM(n){return Si.flatMap(e=>{const t=n.skills.map(Ct).filter(r=>r.branch===e);if(!t.length)return[];const i=t.filter(r=>r.slot.startsWith("II")).map(r=>r.name),s=t.find(r=>r.slot==="cap");return[`${Qn[e]}: ${i.length?i.join(" → "):`ชั้น I ${t.length} โหนด`}${s?` · ★ ${s.name}`:""}`]})}function Ou(n){return n.some(e=>e.type==="boss-warning")?"boss":"normal"}function ku(n,e){const t=[];for(const i of n)i.type==="wave"&&e.phase==="ready"&&t.unshift(`ผ่านระลอก ${gs(e.wave)}`),i.type==="points"&&t.push(`ได้ข้อมูลวิจัย +${i.value}`),i.type==="skill"&&i.node&&t.push(`ปลด ${Ct(i.node).name} แล้ว`),i.type==="capstone"&&i.node&&t.push(`ป้อมแปลงร่าง · ${Ct(i.node).name}`),i.type==="boss-warning"&&t.push(`บอสกำลังมา · ประตู ${(i.lane??0)+1}`);return!n.some(i=>i.type==="boss-warning")&&n.some(i=>i.type==="research")?Ge.research.unlocked:t.length?t.join(" · "):null}const Ei=n=>n.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),lh=" ",ch=/^[\d,.]+$/,cM=/^\(?×?[\d,.]+%?\)?$/,hM=14;function lt(n){const e=n.split(" ").filter(Boolean),t=[];return e.forEach((i,s)=>{const r=t.at(-1);r!==void 0&&(i==="ๆ"||ch.test(r.split(lh).at(-1))||cM.test(i)&&(!ch.test(i)||s===e.length-1)&&[...r].length<=hM)?t[t.length-1]+=lh+i:t.push(i)}),t.map(i=>`<span class="keep">${Ei(i)}</span>`).join(" ")}const Za={owned:"check",available:"plus",locked:"lock-simple",blocked:"x"},hh={"core-lens":"crosshair","core-mine":"coins","core-nova-power":"star-four","core-nova-rush":"timer","core-nova-freeze":"hourglass","core-nova-awaken":"sparkle","core-prism":"diamonds-four","fire-fuel":"drop","fire-blast":"sun","fire-meteor":"meteor","fire-wildfire":"fire","fire-lava":"mountains","fire-stack":"stack","fire-sunfall":"sun-horizon","frost-chill":"thermometer-cold","frost-wide":"wind","frost-glacier":"cube","frost-brittle":"drop-half","frost-field":"snowflake","frost-shatter":"asterisk","frost-ice-age":"globe-hemisphere-west","storm-conductor":"plugs-connected","storm-overcharge":"battery-charging","storm-chain":"link","storm-thunder":"lightning","storm-static":"atom","storm-clap":"waves","storm-tempest":"cloud-lightning"},St=(n,e="")=>`<i class="ph ph-${n} ${e}" aria-hidden="true"></i>`,uM=[["I-a","I-b"],["II-A","II-B"],["III-A","III-B"],["cap"]],dM=["I","II","III","★"],Bu='<span class="fork-badge" aria-hidden="true">Y</span>',Kn=(n,e)=>`<span class="link-line link-${n}" data-link="${e}"></span>`,fM=n=>[`<div class="tree-link is-fork" aria-hidden="true">${Kn("ta",n.tierA)}${Kn("tb",n.tierB)}${Kn("fa",n.forkA)}${Kn("fb",n.forkB)}${Bu}</div>`,`<div class="tree-link" aria-hidden="true">${Kn("a",n.midA)}${Kn("b",n.midB)}</div>`,`<div class="tree-link is-cap" aria-hidden="true">${Kn("a",n.capA)}${Kn("b",n.capB)}</div>`],pM=()=>window.matchMedia("(max-width: 760px)").matches&&!window.matchMedia("(max-height: 420px) and (min-aspect-ratio: 3/2)").matches;function mM(n){return Array.from(n.querySelectorAll('button:not(:disabled), [tabindex="0"]')).filter(e=>{var t;return e.tabIndex>=0&&(((t=e.checkVisibility)==null?void 0:t.call(e))??e.offsetParent!==null)})}function jo(n,e){const t=mM(n);if(!t.length)return;const i=t.indexOf(document.activeElement);e.shiftKey&&i<=0?(e.preventDefault(),t.at(-1).focus()):!e.shiftKey&&(i===-1||i===t.length-1)&&(e.preventDefault(),t[0].focus())}class gM{constructor(e,t,i){R(this,"isOpen",!1);R(this,"confirmOpen",!1);R(this,"root");R(this,"content");R(this,"live");R(this,"state");R(this,"selected","core-lens");R(this,"tab","core");R(this,"signature","");R(this,"returnFocus",null);this.onCommand=t,this.onChange=i,this.root=document.createElement("div"),this.root.className="tree-shade",this.root.hidden=!0,this.content=document.createElement("div"),this.content.className="tree-content",this.live=document.createElement("p"),this.live.className="tree-live",this.live.setAttribute("role","status"),this.live.setAttribute("aria-live","polite"),this.root.append(this.content,this.live),e.append(this.root),this.root.addEventListener("click",s=>{const r=s.target.closest("button");if(!r)return;const{tree:a,node:o,branch:l}=r.dataset;o?(this.select(o,!0),this.revealDetail()):l?this.setTab(l,!0):a==="close"?this.close():a==="unlock"?this.onCommand({type:"unlock",node:this.selected}):a==="reset"?this.askReset():a==="reset-cancel"?this.setConfirm(!1):a==="reset-confirm"&&(this.setConfirm(!1),this.onCommand({type:"respec"}))})}open(e){if(this.isOpen)return;this.returnFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.state=e,this.isOpen=!0,this.live.textContent="";const t=yi.find(i=>qr(e,i.id).state==="available");this.selected=(t==null?void 0:t.id)??"core-lens",this.tab=(t==null?void 0:t.branch)??"core",this.root.hidden=!1,this.render(!0),this.onChange(),this.focus(`[data-node="${this.selected}"]`)}close(){var e;this.isOpen&&(this.isOpen=!1,this.confirmOpen=!1,this.root.hidden=!0,this.onChange(),(e=this.returnFocus)==null||e.focus())}update(e){this.state=e,this.isOpen&&this.render()}message(e){this.live.textContent=e,this.live.classList.remove("flash"),this.live.offsetWidth,this.live.classList.add("flash")}handleKey(e){const t=e.key;if(this.confirmOpen)return t==="Escape"?(e.preventDefault(),this.setConfirm(!1),!0):t==="Tab"?(jo(this.root.querySelector(".tree-confirm"),e),!0):!1;if(t==="Escape"||t.toLowerCase()==="t")return e.preventDefault(),this.close(),!0;if(t==="Tab")return jo(this.root.querySelector(".tree-panel"),e),!0;const i={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down"}[t];if(!i)return!1;const s=document.activeElement;if(s!=null&&s.dataset.branch&&(i==="left"||i==="right")){const r=Si.indexOf(s.dataset.branch),a=Si[(r+(i==="left"?3:1))%4];return e.preventDefault(),this.setTab(a,!0),this.focus(`[data-branch="${a}"]`),!0}return s!=null&&s.dataset.node?(e.preventDefault(),this.move(i),!0):!1}move(e){const t=oM(this.selected,e,pM()?[this.tab]:Si);this.select(t,!0)}select(e,t){this.selected=e,this.tab=yi.find(i=>i.id===e).branch,this.render(),t&&this.focus(`[data-node="${e}"]`)}revealDetail(){const e=this.root.querySelector(".tree-detail"),t=e==null?void 0:e.querySelector(".detail-unlock");!e||!t||t.getBoundingClientRect().bottom<=innerHeight||(e.scrollIntoView({block:"start"}),t.getBoundingClientRect().bottom>innerHeight&&t.scrollIntoView({block:"end"}))}setTab(e,t){this.tab=e,this.selected.startsWith(e)||(this.selected=yi.find(i=>i.branch===e).id),this.render(),t&&this.focus(`[data-branch="${e}"]`)}askReset(){const e=ah(this.state).reset.reason;if(e){this.message(e);return}this.setConfirm(!0)}setConfirm(e){this.confirmOpen=e,this.render(!0),this.onChange(),this.focus(e?'[data-tree="reset-cancel"]':'[data-tree="reset"]')}focus(e,t=!1){var i;(i=this.root.querySelector(e))==null||i.focus({preventScroll:t})}render(e=!1){var u,d;const t=this.state,i=ah(t),s=rM(t,this.selected),r=JSON.stringify([i,s,this.tab,this.confirmOpen]);if(!e&&r===this.signature)return;this.signature=r;const a=(u=document.activeElement)==null?void 0:u.closest("[data-node],[data-branch],[data-tree]"),o=a&&this.root.contains(a)?a.dataset.node?`[data-node="${a.dataset.node}"]`:a.dataset.branch?`[data-branch="${a.dataset.branch}"]`:`[data-tree="${a.dataset.tree}"]`:null,l=i.branches.find(p=>p.branch===this.tab),c=((d=this.root.querySelector(".tree-panel"))==null?void 0:d.scrollTop)??0;this.content.innerHTML=`
      <section class="tree-panel" role="dialog" aria-modal="true" aria-labelledby="tree-title">
        <header class="tree-top">
          <button class="tree-back" data-tree="close" aria-label="กลับสู่เกม">${St("caret-left")}</button>
          <h2 id="tree-title">ผังทักษะ</h2>
          <span class="tree-paused">${St("pause")}เกมหยุดชั่วคราว</span>
          <div class="tree-stats">
            <span class="tree-points">${St("hexagon")}ข้อมูลวิจัย <b>${i.points}</b></span>
            <span class="tree-gold" aria-label="พลังงานรอยแยก ${i.gold.toLocaleString("en-US")}">${St("coins")}<b>${i.gold.toLocaleString("en-US")}</b></span>
            <button class="tree-return" data-tree="close">${St("play")}กลับสู่เกม</button>
          </div>
        </header>
        <div class="tree-tabs" role="tablist" aria-label="สายของผังทักษะ">${i.branches.map(p=>`
          <button role="tab" id="tree-tab-${p.branch}" data-branch="${p.branch}" aria-selected="${p.branch===this.tab}"
            aria-controls="tree-col-${p.branch}" tabindex="${p.branch===this.tab?0:-1}" style="--branch: var(--${p.branch})">
            ${St(p.icon)}<span>${p.name}</span>${p.unlocked?"":St("lock-simple","tab-lock")}
          </button>`).join("")}
        </div>
        <p class="tree-branch-status" style="--branch: var(--${l.branch})">${St(l.icon)}<b>${l.name}</b> · ${l.gate}<span>${l.forkNote}</span></p>
        <div class="tree-body">
          <div class="tree-columns" data-tab="${this.tab}">
            <ol class="tree-row-labels" aria-hidden="true">${dM.map((p,g)=>`<li>${p}${g===1?"<small>เลือก 1 ทาง</small>":""}</li>`).join("")}</ol>
            ${i.branches.map(p=>`
            <section class="tree-col" id="tree-col-${p.branch}" role="tabpanel" aria-labelledby="tree-tab-${p.branch}"
              data-branch-col="${p.branch}" style="--branch: var(--${p.branch})">
              <header class="tree-col-head">${St(p.icon,"col-icon")}<div><b>${p.name}</b><small>${p.unlocked?p.tagline:`${St("lock-simple")} ${p.gate}`}</small></div></header>
              <div class="tree-grid">${uM.map((g,v)=>`<div class="tree-row tree-row-${g.length===1?"cap":"pair"}">${g.map(m=>{const f=p.nodes.find(S=>S.slot===m);return`<button class="tree-node${f.slot==="cap"?" is-cap":""}" data-node="${f.id}" data-status="${f.status}"
                  aria-pressed="${f.id===this.selected}" aria-label="${Ei(`${f.name} · ${Ko[f.status]}${f.cost===2?" · 2 หน่วย":""}`)}">
                  ${St(hh[f.id],"node-icon")}<span class="node-text"><span class="node-name">${f.name}</span>${f.cost===2?"<small>2 หน่วย</small>":""}</span>
                  ${St(Za[f.status],"node-status")}
                </button>`}).join("")}</div>${fM(p.links)[v]??""}`).join("")}</div>
            </section>`).join("")}
          </div>
          <aside class="tree-detail" style="--branch: var(--${s.branch})" aria-live="polite">
            <div class="detail-head">${St(hh[s.id],"detail-icon")}<div><small>${s.place}</small><h3>${s.name}</h3>
              <span class="detail-status" data-status="${s.status}">${St(Za[s.status])}${s.statusLabel}</span></div></div>
            <p class="detail-effect">${lt(s.effect)}</p>
            ${s.counters?`<p class="detail-counters">${lt(s.counters)}</p>`:""}
            ${s.choice?`<p class="detail-choice">${Bu}<span>${lt(s.choice)}</span></p>`:""}
            <h4>เงื่อนไขที่ต้องมี</h4>
            <ul class="detail-reqs">${s.requirements.map(p=>`<li data-met="${p.met}">${St(p.met?"check":"x")}<span>${lt(p.label)}</span></li>`).join("")}</ul>
            <button class="detail-unlock" data-tree="unlock" ${s.action.disabled?"disabled":""}>${s.action.label}</button>
            ${s.action.disabled&&s.action.reason?`<p class="detail-reason">${lt(s.action.reason)}</p>`:""}
          </aside>
        </div>
        <footer class="tree-foot">
          <ul class="tree-legend">
            ${["owned","available","locked","blocked"].map(p=>`<li data-status="${p}">${St(Za[p],"legend-icon")}<b>${Ko[p]}</b><small>${vM[p]}</small></li>`).join("")}
          </ul>
          <p class="tree-rules"><b>ขั้นสูงสุดใช้ข้อมูลวิจัย 2 หน่วย · เลือกได้ 1 สายต่อรอบ</b><span>สร้างป้อม +1 · ผ่านระลอก +1 · ระลอกบอสเพิ่ม +1</span></p>
          <div class="tree-reset"><button data-tree="reset" aria-describedby="reset-note">${St("arrows-clockwise")}รีเซ็ต · ${St("coins")}${i.reset.cost} พลังงาน</button>
            <small id="reset-note">${i.reset.reason??i.reset.note}</small></div>
        </footer>
      </section>
      ${this.confirmOpen?`
      <div class="tree-confirm-shade">
        <section class="tree-confirm" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title" aria-describedby="confirm-body">
          <h3 id="confirm-title">รีเซ็ตผังทักษะ · ${i.reset.cost} พลังงาน</h3>
          <p id="confirm-body">${lt("คืนข้อมูลวิจัยทั้งหมดและล้างขั้นสูงสุด ครั้งถัดไปแพงขึ้น 100 พลังงาน")}</p>
          <div><button data-tree="reset-cancel">ยกเลิก</button><button class="danger" data-tree="reset-confirm">รีเซ็ต</button></div>
        </section>
      </div>`:""}`;const h=this.root.querySelector(".tree-panel");if(h.scrollTop=c,h.toggleAttribute("inert",this.confirmOpen),o){const p=this.root.querySelector(o);p&&!p.disabled?p.focus({preventScroll:!0}):this.focus(`[data-node="${this.selected}"]`,!0)}}}const vM={owned:"ปลดแล้ว ใช้งานอยู่",available:"ใช้ข้อมูลวิจัยเพื่อปลด",locked:"เงื่อนไขยังไม่ครบ",blocked:"เลือกอีกทางไปแล้ว"};class _M{constructor(e){R(this,"key","");R(this,"view",null);R(this,"active",null);this.slot=e;const t=i=>i.target.closest(".trait-chip");e.addEventListener("pointerover",i=>{i.pointerType==="mouse"&&this.show(t(i))}),e.addEventListener("pointerleave",i=>{i.pointerType==="mouse"&&(document.activeElement===e||!e.contains(document.activeElement))&&this.show(null)}),e.addEventListener("focusin",i=>this.show(t(i))),e.addEventListener("focusout",i=>{e.contains(i.relatedTarget)||this.show(null)}),e.addEventListener("click",i=>this.show(t(i))),document.addEventListener("pointerdown",i=>{e.contains(i.target)||this.show(null)})}clear(){this.show(null)}render(e){const t=JSON.stringify(e);if(t===this.key)return;if(this.key=t,this.view=e,this.active=null,!e){this.slot.replaceChildren(),this.slot.classList.remove("has-content"),delete this.slot.dataset.chips;return}this.slot.classList.add("has-content"),this.slot.dataset.chips=String(e.chips.length);const i=[null,...e.chips.map(s=>s.trait)].map(s=>{const{html:r,boss:a}=this.infoOf(s,"sizer-portrait");return`<p${a?' class="is-boss"':""}>${r}</p>`}).join("");this.slot.innerHTML=`
      <div class="preview-head sr-only"><strong>${Ei(e.title)}</strong></div>
      <div class="preview-chips">${e.chips.map(s=>`
        <button class="trait-chip" data-trait="${s.trait}" aria-describedby="preview-info" aria-pressed="false"
          aria-label="${Ei(`${s.name} ${s.count} ตัว${s.isNew?" · ความสามารถใหม่":""}`)}">
          <img class="chip-portrait" src="ui/portraits/${s.portrait}.webp" width="44" height="44" alt="" decoding="async"><b class="chip-count">×${s.count}</b>
          ${s.isNew?'<em class="new-badge">ใหม่!</em>':""}
        </button>`).join("")}
      </div>
      <div class="preview-body">
        <p class="preview-info" id="preview-info" aria-live="polite"></p>
        <div class="preview-sizer" aria-hidden="true">${i}</div>
      </div>
      <p class="preview-lane" data-lane="${e.lane.main}"><i class="lane-dot" aria-hidden="true"></i>${Ei(e.lane.text)}</p>`,this.paintInfo()}show(e){const t=(e==null?void 0:e.dataset.trait)??null;t!==this.active&&(this.active=t,this.slot.querySelectorAll(".trait-chip").forEach(i=>i.setAttribute("aria-pressed",String(i===e))),this.paintInfo())}paintInfo(){const e=this.slot.querySelector(".preview-info");if(!e||!this.view)return;const{html:t,boss:i}=this.infoOf(this.active,"boss-portrait");e.innerHTML=t,e.classList.toggle("is-boss",i)}infoOf(e,t){var r,a,o;const i=e??((r=this.view)!=null&&r.boss?null:((a=this.view)==null?void 0:a.spotlight)??null);if(i){const l=Gs[i];return{html:`<b>${lt(l.name)}</b> ${lt(l.rule)} · <span class="counters">${lt(`แพ้ทาง: ${l.counters}`)}</span>`,boss:!1}}const s=(o=this.view)==null?void 0:o.boss;return s?{html:`<img class="${t}" src="ui/portraits/${s.portrait}.webp" width="20" height="20" alt=""> ${lt(s.text)}`,boss:!0}:{html:`<span class="muted">${lt("แตะหรือชี้ที่ชิปเพื่อดูกติกาและจุดอ่อน")}</span>`,boss:!1}}}class xM{constructor(){R(this,"target",null);R(this,"release","tab")}arm(e,t="tab"){this.target=e,this.release=t}blocks(e,t){return(e==="Tab"||this.release==="tab-or-arrow"&&e.startsWith("Arrow"))&&(this.target=null),e===" "&&this.target!==null&&t===this.target}}const tn=(n,e="")=>`<i class="ph ph-${n} ${e}" aria-hidden="true"></i>`,nn=(n,e="")=>`<i class="ph-fill ph-${n} ${e}" aria-hidden="true"></i>`,di=(n,e,t,i="")=>`<img class="${t}" src="ui/icons/${n}.webp" width="${e}" height="${e}" alt="" decoding="async"${i?` data-ref="${i}"`:""}>`,hn=n=>Math.round(n).toLocaleString("en-US"),uh=n=>n.toLocaleString("en-US",{maximumFractionDigits:1}),MM=["core","fire","frost","storm"],ns=[["play","วิธีเล่น"],["tree","ผังทักษะ"],["traits",Ge.research.tab],["settings","ตั้งค่า"]];class bM{constructor(e,t,i){R(this,"refs",new Map);R(this,"state");R(this,"signature","");R(this,"previousPhase","");R(this,"researchSignature",null);R(this,"helpOpen",!1);R(this,"helpTab","play");R(this,"pausedByHelp",!1);R(this,"soundEnabled",!0);R(this,"reduced",matchMedia("(prefers-reduced-motion: reduce)"));R(this,"coins");R(this,"goldTally",new Yo);R(this,"vignette",-1);R(this,"feedbackTimers",new Map);R(this,"highQuality",Gh());R(this,"helpTrigger",null);R(this,"card",null);R(this,"panelOpen",!1);R(this,"spaceGuard",new xM);R(this,"preview");R(this,"tree");this.container=e,this.onCommand=t,this.options=i,e.classList.add("hud-cartoon"),e.innerHTML=`
      <div class="vignette" data-ref="vignette" aria-hidden="true"></div>
      <header class="hud-top panel-glass">
        <h1 class="sr-only">Aetherkeep · ${Ge.chapter}</h1>
        <div class="top-status" data-hud-panel>
          <div class="wave-status" data-ref="wave-box" aria-label="สถานะระลอก">
            <span class="wave-icon" aria-hidden="true">${nn("flag-pennant")}${di("swords",24,"fight-icon")}</span>
            <div class="wave-text"><strong data-ref="wave-title">ระลอก 01 / 10</strong>
              <div class="wave-progress" aria-hidden="true"><i data-ref="wave-fill"></i></div></div>
            <small class="sr-only" data-ref="wave-status"></small><small class="sr-only" data-ref="wave-detail"></small></div>
          <div class="resource" data-ref="gold-resource">${di("coin",26,"gold-icon")}<b data-ref="gold">320</b><b class="gold-gain" data-ref="gold-gain" aria-hidden="true"></b></div>
          <div class="resource health" data-ref="health-resource">${di("shield",26,"hp-icon")}<div><b><span data-ref="hp">120</span> / <span data-ref="hp-max">120</span></b>
            <div class="health-track"><i data-ref="health-fill"></i></div></div></div>
        </div>
        <div class="boss-area" data-ref="boss-toasts" role="status" aria-live="assertive"></div>
      </header>
      <aside class="hud-left">
        <button class="enemy-pill" data-hud-panel data-tool="enemies" data-ref="enemy-pill" aria-expanded="false" aria-controls="enemy-panel">
          <img class="pill-portrait" data-ref="pill-portrait" src="ui/portraits/green-blob.webp" width="36" height="36" alt="" decoding="async">
          <span class="pill-text">มอนสเตอร์ <b data-ref="enemy-count">18</b></span>${tn("caret-down","pill-caret")}</button>
        <section class="enemy-panel" id="enemy-panel" data-ref="preview-slot" tabindex="-1" aria-label="มอนสเตอร์จากรอยแยกระลอกถัดไป" hidden></section>
      </aside>
      <nav class="utility" data-hud-panel aria-label="เครื่องมือเกม">
        <button class="tool" data-tool="menu" data-ref="menu-button" aria-expanded="false" aria-controls="help-panel" aria-label="เมนู · คู่มือและตั้งค่า">${nn("gear")}</button>
      </nav>
      <div class="paused-chip" data-ref="paused" hidden>${tn("pause")}<div>เกมหยุดชั่วคราว<small>กด Space หรือปุ่มเล่นต่อ</small></div></div>
      <footer class="hud-bottom panel-glass" data-ref="hud-bottom">
        <p class="tower-log" data-ref="tower-log" role="status" aria-live="polite" aria-atomic="true"></p>
        <section class="build-bar" data-hud-panel data-ref="build-bar" aria-label="บิลด์ของคุณ">
          <div class="build-cards">${MM.map(a=>`
            <div class="build-card" data-branch="${a}" data-ref="${a}-card" role="group" style="--branch: var(--${a})">
              <button class="card-buy" data-card="${a}" data-ref="${a}-buy" aria-expanded="false" aria-controls="upgrade-pop">
                <span class="hex-gem">${di(`gem-${a}`,54,"gem-art")}<b class="hex-level" data-ref="${a}-level" hidden></b>${nn("lock-simple","hex-lock")}${tn("plus","hex-unlock")}</span>
              <span class="card-price">${di("coin",18,"coin-icon",`${a}-buy-icon`)}<b data-ref="${a}-cost"></b></span>
              </button>
            </div>`).join("")}
          </div>
          <section class="upgrade-pop" id="upgrade-pop" data-ref="upgrade-pop" role="dialog" tabindex="-1" aria-labelledby="pop-name" aria-describedby="pop-effect pop-reason" hidden>
            <header class="pop-head"><img class="pop-gem" data-ref="pop-gem" src="ui/icons/gem-core.webp" width="34" height="34" alt="" decoding="async">
              <b class="pop-name" id="pop-name" data-ref="pop-name"></b>
              <span class="pop-level">ระดับ <span data-ref="pop-from"></span> → <b class="pop-to" data-ref="pop-to"></b></span></header>
            <p class="pop-route" data-ref="pop-route" hidden></p>
            <p class="pop-line" id="pop-effect"><span data-ref="pop-stat"></span><span><span class="pop-before" data-ref="pop-before"></span> → <b class="pop-after" data-ref="pop-after"></b></span></p>
            <button class="pop-confirm" data-ref="upgrade-confirm">${di("coin",22,"coin-icon")}<b data-ref="pop-action"></b></button>
            <p class="pop-reason" id="pop-reason" data-ref="pop-reason" hidden></p>
          </section>
        </section>
        <nav class="command-bar" data-hud-panel aria-label="คำสั่ง">
          <button class="tree-orb" data-tool="tree" data-ref="tree-button">${tn("tree-structure")}<span class="command-caption" aria-hidden="true">ทักษะ</span><b class="badge" data-ref="tree-points" hidden></b></button>
          <button class="cmd cmd-primary" data-ref="primary" data-action="build">${nn("castle-turret","primary-icon")}${di("swords",26,"primary-icon swords-icon")}<b data-ref="primary-label">สร้างป้อม</b><small class="sr-only" data-ref="primary-sub"></small></button>
          <button class="cmd cmd-icon cmd-nova" data-action="nova" data-ref="nova" hidden>${nn("star-four")}<span class="sr-only"><b data-ref="nova-label">Nova</b> <small data-ref="nova-sub"></small></span><small class="cmd-tag" data-ref="nova-tag" aria-hidden="true"></small><span class="command-caption" aria-hidden="true">Nova</span></button>
          <button class="cmd cmd-icon" data-action="repair" data-ref="repair" hidden>${nn("wrench")}<span class="sr-only"><b>ซ่อม</b> <small data-ref="repair-sub">60 พลังงาน</small></span><span class="command-caption" aria-hidden="true">ซ่อม</span></button>
          <button class="cmd cmd-icon" data-action="pause" data-ref="pause">${nn("pause")}<span class="sr-only"><b data-ref="pause-label">หยุด</b></span><span class="command-caption" data-ref="pause-caption" aria-hidden="true">หยุด</span></button>
          <button class="cmd cmd-icon" data-action="speed" data-ref="speed" aria-pressed="false">${nn("fast-forward")}<span class="command-caption" data-ref="speed-caption" aria-hidden="true">×1</span></button>
        </nav>
        <div class="toast-area" data-ref="toasts" role="status" aria-live="polite"></div>
      </footer>
      <div class="fly-layer" data-ref="fly-layer" aria-hidden="true"></div>
      <div class="modal-shade" data-ref="help-shade" hidden>
        <section class="help-panel" id="help-panel" data-ref="help-panel" role="dialog" aria-modal="true" aria-labelledby="help-title">
          <header><h2 id="help-title">คู่มือ Aetherkeep</h2><button class="tool panel-close" data-tool="close-help" data-ref="close-help" aria-label="ปิดคู่มือ">${tn("x")}</button></header>
          <div class="help-tabs" role="tablist" aria-label="หัวข้อคู่มือ">${ns.map(([a,o])=>`
            <button role="tab" id="help-tab-${a}" data-help-tab="${a}" aria-controls="help-page-${a}">${o}</button>`).join("")}</div>
          <div class="help-page" id="help-page-play" role="tabpanel" aria-labelledby="help-tab-play">
            <ol class="help-steps">${Ge.helpSteps.map(a=>`<li><b>${lt(a.heading)}</b>${lt(a.body)}</li>`).join("")}</ol>
            <h3>การควบคุม</h3>
            <div class="key-grid">${J1().map(([a,o])=>`<kbd>${a}</kbd><span>${o}</span>`).join("")}</div>
          </div>
          <div class="help-page" id="help-page-tree" role="tabpanel" aria-labelledby="help-tab-tree" hidden>
            <ul class="help-list">${Ge.treeGuide.map(a=>`<li><b>${lt(a.heading)}</b>${lt(a.body)}</li>`).join("")}</ul>
          </div>
          <div class="help-page" id="help-page-traits" role="tabpanel" aria-labelledby="help-tab-traits" hidden>
            <p class="research-intro">${lt(Ge.research.intro)}</p>
            <p class="research-count" data-ref="research-count"></p>
            <ul class="trait-list" data-ref="research-list"></ul>
            <p class="research-pending" data-ref="research-pending"></p>
            <h3 data-ref="research-special-title" hidden>ตัวพิเศษและบอส</h3>
            <ul class="help-list compact" data-ref="research-special-list"></ul>
          </div>
          <div class="help-page" id="help-page-settings" role="tabpanel" aria-labelledby="help-tab-settings" hidden>
            <button class="setting-row" data-tool="sound" data-ref="sound-row" aria-pressed="true"><span>${nn("speaker-high","icon-sound")}เสียงทั้งหมด</span><span class="switch" aria-hidden="true"><i></i></span><b data-ref="sound-setting">เปิด</b></button>
            <label class="setting-slider" for="volume-sfx"><span>${nn("bell-simple-ringing","icon-sfx")}เสียงประกอบ</span><input class="volume" type="range" id="volume-sfx" min="0" max="100" step="10" data-volume="sfx"><b data-ref="volume-sfx-value" aria-hidden="true"></b></label>
            <label class="setting-slider" for="volume-music"><span>${nn("music-notes","icon-music")}เพลงและบรรยากาศ</span><input class="volume" type="range" id="volume-music" min="0" max="100" step="10" data-volume="music"><b data-ref="volume-music-value" aria-hidden="true"></b></label>
            <button class="setting-row" data-tool="quality"><span>${tn("sparkle")}คุณภาพเอฟเฟกต์</span><b data-ref="quality-setting">${this.highQuality?"สูง":"ประหยัดพลังงาน"}</b></button>
          </div>
          <p class="help-live" role="status" aria-live="polite" data-ref="help-live"></p>
        </section>
      </div>
      <div class="end-screen" data-ref="end-screen" hidden>
        <section class="end-card" data-ref="end-card" role="dialog" aria-modal="true" aria-labelledby="end-title">
          <div data-ref="end-icon">${tn("crown","end-icon")}</div>
          <h2 class="end-title" id="end-title" data-ref="end-title"></h2>
          <p class="end-log-label" data-ref="end-log-label">${Ge.towerLog} · ${Ge.speaker}</p>
          <p class="end-description" data-ref="end-description"></p>
          <div class="end-stats"><div><b data-ref="end-wave">10</b><span>ระลอก</span></div><div><b data-ref="end-kills">0</b><span>มอนสเตอร์ที่หยุด</span></div><div><b data-ref="end-score">0</b><span>คะแนน</span></div></div>
          <h3>บิลด์ที่ใช้</h3><ul class="end-build" data-ref="end-build"></ul>
          <p class="end-archive" data-ref="end-archive">${lt(Ge.simulation.explanation)}</p>
          <div class="end-actions"><button class="cmd cmd-primary" data-action="endless" data-ref="endless" aria-label="${Ge.simulation.label} · ไม่สิ้นสุด">${tn("infinity")}${Ge.simulation.action}</button><button class="cmd" data-action="restart" data-ref="restart">${tn("arrow-counter-clockwise")}เริ่มใหม่</button></div>
        </section>
      </div>
      <div class="loading-screen" data-ref="loading" role="status" aria-live="polite">
        <div class="loading-card">${tn("castle-turret","loading-icon")}<div class="loading-wordmark">Aetherkeep</div><small>${Ge.chapter}</small>
          <div class="loading-track"><i data-ref="loading-progress"></i></div><p data-ref="loading-text">${Ge.loading.initial}</p></div>
      </div>`,e.querySelectorAll("[data-ref]").forEach(a=>this.refs.set(a.dataset.ref,a));const s=matchMedia("(max-width: 760px)"),r=()=>{const a=this.ref("menu-button").parentElement,o=this.ref("enemy-pill").parentElement,l=a.contains(document.activeElement)?document.activeElement:null;s.matches?o.before(a):o.after(a),l==null||l.focus({preventScroll:!0})};r(),s.addEventListener("change",r),this.preview=new _M(this.ref("preview-slot")),this.tree=new gM(e,a=>this.onCommand(a),()=>this.syncModal()),this.setHelpTab("play"),this.syncQuality(),this.coins=new $1(this.ref("fly-layer"),()=>this.ref("gold-resource").getBoundingClientRect(),()=>this.goldArrived()),this.coins.setPool(this.highQuality?8:4),this.soundEnabled=i.audio.enabled,this.syncSound();for(const a of["sfx","music"]){const o=this.container.querySelector(`#volume-${a}`);o.value=String(i.audio[a]),this.syncVolume(a,i.audio[a]),o.addEventListener("input",()=>{this.syncVolume(a,+o.value),this.options.onVolume(a,+o.value)}),a==="sfx"&&o.addEventListener("change",()=>this.options.onVolumePreview())}e.addEventListener("click",a=>{const o=a.target.closest("button");if(!o||o.disabled)return;const l=a.detail===0;if(o.dataset.action){this.onCommand(o.dataset.action);return}if(o.dataset.helpTab){this.setHelpTab(o.dataset.helpTab);return}if(o.dataset.card){this.toggleCard(o.dataset.card,l);return}if(o.dataset.ref==="upgrade-confirm"){this.confirmUpgrade(l);return}switch(o.dataset.tool){case"menu":this.openHelp(this.helpTab,o,!l);break;case"enemies":this.togglePanel();break;case"close-help":this.closeHelp();break;case"tree":this.toggleTree();break;case"sound":this.toggleSound();break;case"quality":this.highQuality=this.options.onQuality(),this.syncQuality(),this.coins.setPool(this.highQuality?8:4),this.toast(this.highQuality?"เปิดเอฟเฟกต์คุณภาพสูง":"ใช้โหมดประหยัดพลังงาน");break}}),document.addEventListener("pointerdown",a=>{const o=a.target;this.card&&!(o instanceof Element&&o.closest(".card-buy, .upgrade-pop"))&&this.closeCard(!1),this.panelOpen&&!this.ref("enemy-pill").parentElement.contains(o)&&this.closePanel(!1)}),this.ref("build-bar").addEventListener("focusout",a=>{const o=a.relatedTarget;this.card&&o&&!this.ref("build-bar").contains(o)&&this.closeCard(!1)}),this.ref("enemy-pill").parentElement.addEventListener("focusout",a=>{const o=a.relatedTarget;this.panelOpen&&o&&!this.ref("enemy-pill").parentElement.contains(o)&&this.closePanel(!1)}),this.ref("help-shade").addEventListener("click",a=>{a.target===this.ref("help-shade")&&this.closeHelp()}),window.addEventListener("keydown",a=>{if(this.tree.isOpen){this.tree.handleKey(a),a.stopImmediatePropagation();return}const o=this.helpOpen?this.ref("help-panel"):this.ref("end-screen").hidden?null:this.ref("end-card");if(!o){a.key==="Escape"&&this.card?(a.preventDefault(),this.closeCard(!0)):a.key==="Escape"&&this.panelOpen&&(a.preventDefault(),this.closePanel(!0));return}if(this.spaceGuard.blocks(a.key,a.target)&&a.preventDefault(),a.key==="Escape"&&this.helpOpen)a.preventDefault(),this.closeHelp();else if(a.key==="Tab")jo(o,a);else if(this.helpOpen&&(a.key==="ArrowLeft"||a.key==="ArrowRight")&&a.target.dataset.helpTab){const l=ns.findIndex(([h])=>h===this.helpTab),c=ns[(l+(a.key==="ArrowLeft"?ns.length-1:1))%ns.length][0];a.preventDefault(),this.setHelpTab(c),this.container.querySelector(`[data-help-tab="${c}"]`).focus()}a.stopImmediatePropagation()},{capture:!0})}ref(e){return this.refs.get(e)}text(e,t){const i=this.ref(e);i.textContent!==t&&(i.textContent=t)}hidden(e,t){const i=this.ref(e);i.hidden!==t&&(i.hidden=t)}attribute(e,t,i){e.getAttribute(t)!==i&&e.setAttribute(t,i)}button(e,t,i){const s=this.ref(e);s.disabled=t,i&&(s.title=i)}syncModal(){this.helpOpen||this.tree.isOpen||!this.ref("end-screen").hidden?document.body.dataset.uiModal="true":delete document.body.dataset.uiModal}toggleTree(){!this.state||this.state.phase==="victory"||this.state.phase==="defeat"||(this.tree.isOpen?this.tree.close():(this.closeOverlays(),this.tree.open(this.state)))}update(e){this.state=e;const t=Q1(e);this.tree.update(e),this.preview.render(nM(e)),this.syncPill(e),this.syncCard(),this.syncStory(e);const i=[e.phase,e.gold,e.hp,e.maxHp,e.wave,e.core,e.levels.fire,e.levels.frost,e.levels.storm,e.remaining,e.total,e.extra,e.kills,e.score,Math.ceil(e.cooldown),e.novaCharges,e.skillPoints,e.skills.join(),e.paused,e.speed,e.endless,e.built].join("|");if(i===this.signature)return;this.signature=i;const s=e.phase==="defeat"||e.phase==="victory",r=K1(e),a=this.ref("wave-title"),l=r.label.split(" · ").map((u,d,p)=>`<span class="keep">${Ei(d<p.length-1?`${u} ·`:u)}</span>`).join(" ");a.innerHTML!==l&&(a.innerHTML=l),this.ref("wave-box").classList.toggle("is-fighting",r.fighting),this.ref("wave-box").setAttribute("aria-label",`${e.endless?Ge.simulation.label:Ge.gateProgress} · ${r.waveLabel}`),this.ref("wave-box").title=e.endless?Ge.simulation.label:Ge.gateProgress,this.text("wave-status",r.status),this.text("wave-detail",r.remaining),this.ref("wave-fill").style.width=`${r.progress*100}%`,this.text("gold",hn(r.gold)),this.ref("gold-resource").setAttribute("aria-label",`${Fa.energy} ${hn(r.gold)}`),this.ref("gold-resource").title=Fa.energy;const c=q1;this.text("hp",c(r.hp)),this.text("hp-max",c(r.maxHp)),this.ref("health-resource").setAttribute("aria-label",`พลังป้อม ${hn(r.hp)} จาก ${hn(r.maxHp)}`),this.ref("health-resource").classList.toggle("critical",r.critical),this.ref("health-fill").style.width=`${100*Math.max(0,r.hp)/r.maxHp}%`;for(const u of j1(e)){this.ref(`${u.key}-level`).hidden=u.level===0,this.text(`${u.key}-level`,String(u.level)),this.ref(`${u.key}-card`).setAttribute("aria-label",[`${u.name} · ${u.levelText}`,u.fork?u.path:"",u.capstone?`★ ${u.capstone}`:""].filter(Boolean).join(" · ")),this.text(`${u.key}-cost`,hn(u.upgrade.cost));const d=this.ref(`${u.key}-buy`);d.disabled=s,d.classList.toggle("is-short",!u.upgrade.affordable);const p=u.look==="unlock"?" · พลังงานพอ":u.upgrade.affordable?"":" · พลังงานไม่พอ";d.setAttribute("aria-label",`${u.name} ${u.levelText} · ${u.level?"อัปเกรด":"ปลดธาตุ"} ${hn(u.upgrade.cost)} พลังงาน${p} · ดูผลก่อนยืนยัน`),this.ref(`${u.key}-card`).dataset.look=u.look}this.ref("tree-points").hidden=!t.tree.badge,this.text("tree-points",t.tree.badge),this.ref("tree-button").classList.toggle("glow",t.tree.glow),this.ref("tree-button").setAttribute("aria-label",`ผังทักษะ · ${Fa.research}คงเหลือ ${t.tree.points} · T`),this.button("tree-button",t.tree.disabled);const h=this.ref("primary");if(h.hidden=r.fighting,this.ref("nova").hidden=!r.fighting,this.ref("repair").hidden=!r.fighting,h.dataset.action=t.primary.action,h.disabled=t.primary.disabled,h.classList.toggle("is-wave",e.built),this.text("primary-label",t.primary.label),this.text("primary-sub",t.primary.sub),this.text("nova-label",t.nova.label),this.text("nova-sub",t.nova.sub),this.text("nova-tag",t.nova.tag),this.ref("nova").setAttribute("aria-label",`${t.nova.accessibleText} · Q`),this.button("nova",t.nova.disabled,"ปล่อย Nova ใส่มอนสเตอร์ · Q"),this.ref("nova").classList.toggle("ready",t.nova.ready),this.ref("nova").style.setProperty("--nova-progress",String(t.nova.progress)),this.ref("nova").classList.toggle("is-charging",t.nova.charging),this.button("repair",t.repair.disabled,t.repair.reason),this.text("repair-sub",t.repair.disabled?t.repair.reason:"60 พลังงาน"),this.ref("repair").setAttribute("aria-label",`ซ่อม · ${t.repair.disabled?t.repair.reason:"60 พลังงาน"}`),this.text("pause-label",t.pause.label),this.text("pause-caption",t.pause.label),this.ref("pause").setAttribute("aria-label",`${t.pause.label} · Space`),this.ref("pause").querySelector("i").className=`ph-fill ph-${t.pause.paused?"play":"pause"}`,this.ref("pause").classList.toggle("is-active",t.pause.paused),this.ref("pause").title=`${t.pause.label} · Space`,this.button("pause",t.pause.disabled),this.ref("speed").setAttribute("aria-pressed",String(t.speed.fast)),this.ref("speed").classList.toggle("is-active",t.speed.fast),this.text("speed-caption",t.speed.caption),this.ref("speed").setAttribute("aria-label",t.speed.label),this.button("speed",t.speed.disabled,t.speed.label),this.ref("paused").hidden=!e.paused||s||this.helpOpen||this.tree.isOpen,this.ref("end-screen").hidden=!s,s){this.closeOverlays(),this.tree.isOpen&&this.tree.close();const u=e.phase==="victory";this.ref("end-card").classList.toggle("is-defeat",!u),this.ref("end-icon").innerHTML=tn(u?"crown":"shield-slash","end-icon"),this.text("end-title",u?Ge.victory.title:e.endless?Ge.defeat.simulationTitle:Ge.defeat.title);const d=u?Ge.victory.lines:[e.endless?Ge.defeat.simulationLine:Ge.defeat.line];this.ref("end-description").innerHTML=d.map(g=>`<span class="end-log-line">${lt(g)}</span>`).join(" "),this.ref("end-log-label").hidden=!u,this.ref("end-archive").hidden=!u,this.text("end-wave",String(e.wave)),this.text("end-kills",hn(e.kills)),this.text("end-score",hn(e.score));const p=lM(e);this.ref("end-build").innerHTML=(p.length?p:["ไม่ได้ใช้ผังทักษะ"]).map(g=>`<li>${Ei(g)}</li>`).join(""),this.ref("endless").hidden=!u,this.previousPhase!==e.phase&&window.setTimeout(()=>{const g=this.ref(u?"endless":"restart");g.focus(),this.spaceGuard.arm(g,"tab")},30)}this.syncModal(),this.previousPhase=e.phase}syncStory(e){const t=u_(e),i=this.ref("tower-log");this.hidden("tower-log",t===null);const s=t===null?"":`<span class="tower-log-label">${Ge.towerLog} · ${e.endless?Ge.simulation.short:Ge.speaker}</span> <span>${lt(t)}</span>`;i.innerHTML!==s&&(i.innerHTML=s);const r=`${e.seenTraits.join("|")};${e.seenMonsters.map(l=>`${l.kind}:${l.boss}`).join("|")}`;if(r===this.researchSignature)return;this.researchSignature=r;const a=d_(e);this.text("research-count",`บันทึกแล้ว ${a.length} / ${Ai.length} ความสามารถ`),this.ref("research-list").innerHTML=a.map(({trait:l,note:c})=>{const h=Gs[l];return`<li data-research-trait="${l}">${tn(h.icon,"trait-icon")}<div><b>${h.name}</b><p class="research-note">${lt(c)}</p><p>${lt(h.rule)}</p><small>${lt(`แพ้ทาง: ${h.counters}`)}</small></div></li>`}).join(""),this.ref("research-pending").hidden=a.length===Ai.length,this.ref("research-pending").innerHTML=lt(a.length?Ge.research.pending:Ge.research.empty);const o=f_(e);this.ref("research-special-title").hidden=o.length===0,this.ref("research-special-list").innerHTML=o.map(l=>`<li data-research-special="${l.id}">${lt(l.note)}</li>`).join("")}toast(e,t="normal"){if(this.tree.isOpen){this.tree.message(e);return}if(this.helpOpen){this.ref("help-live").textContent=e;return}const i=this.ref(t==="boss"?"boss-toasts":"toasts");i.replaceChildren();const s=document.createElement("div");s.className=t==="boss"?"toast boss":"toast",t==="boss"&&(s.innerHTML=nn("crown")),s.append(e),i.append(s),window.setTimeout(()=>{s.classList.add("leaving"),window.setTimeout(()=>s.remove(),260)},2900)}setLoading(e,t){this.ref("loading-progress").style.width=`${Math.min(100,Math.max(0,e<=1?e*100:e))}%`,this.text("loading-text",t)}ready(){this.setLoading(1,"เกาะแสงจันทร์พร้อมแล้ว"),this.ref("loading").classList.add("is-ready"),window.setTimeout(()=>{this.ref("loading").hidden=!0},650)}syncQuality(){document.body.dataset.quality=this.highQuality?"high":"standard",this.text("quality-setting",this.highQuality?"สูง":"ประหยัดพลังงาน")}setHelpTab(e){this.helpTab=e;for(const[t]of ns){const i=this.container.querySelector(`[data-help-tab="${t}"]`);i.setAttribute("aria-selected",String(t===e)),i.tabIndex=t===e?0:-1,this.container.querySelector(`#help-page-${t}`).hidden=t!==e}}feedback(e,t,i,s){const r=Math.round(G1(i.hp,i.maxHp)*100)/100;if(r!==this.vignette){this.vignette=r;const c=this.ref("vignette");c.style.setProperty("--vignette",String(r)),c.classList.toggle("on",r>0),c.classList.toggle("pulse",r>0&&!this.reduced.matches)}const a=performance.now()/1e3,o=this.reduced.matches;for(const c of e)if(c.type==="leak"&&!o&&this.pulseClass("vignette","flash",400),c.type==="kill"&&(c.value??0)>0){this.goldTally.add(c.value,a);const h=!o&&c.to?s(c.to):null;h&&this.coins.launch(h.x,h.y)}const l=this.goldTally.take(a);l&&(this.ref("gold-gain").textContent=`+${hn(l)}`,this.pulseClass("gold-gain","show",1100)),t.novaCharges===0&&i.novaCharges>0&&i.phase==="wave"&&!o&&this.pulseClass("nova","ring",800)}goldArrived(){this.pulseClass("gold-resource","gold-hit",220)}pulseClass(e,t,i){const s=this.ref(e),r=`${e}:${t}`;s.classList.remove(t),s.offsetWidth,s.classList.add(t),clearTimeout(this.feedbackTimers.get(r)),this.feedbackTimers.set(r,window.setTimeout(()=>s.classList.remove(t),i))}syncVolume(e,t){const i=this.container.querySelector(`#volume-${e}`);i.style.setProperty("--fill",`${t}%`),i.setAttribute("aria-valuetext",`${t} เปอร์เซ็นต์`),this.text(`volume-${e}-value`,`${t}%`)}toggleSound(){this.soundEnabled=this.options.onSound(),this.syncSound()}syncSound(){this.ref("sound-row").setAttribute("aria-pressed",String(this.soundEnabled)),this.text("sound-setting",this.soundEnabled?"เปิด":"ปิด")}syncPill(e){const t=rh(e),i=this.ref("enemy-pill");this.text("enemy-count",String(t.count));const s=this.ref("pill-portrait"),r=`ui/portraits/${t.portrait}.webp`;s.getAttribute("src")!==r&&s.setAttribute("src",r),this.attribute(i,"aria-label",t.label),!t.expandable&&this.panelOpen&&this.closePanel(!1),i.disabled!==!t.expandable&&(i.disabled=!t.expandable);const a=i.parentElement;!t.visible&&a.contains(document.activeElement)&&this.ref("pause").focus({preventScroll:!0}),a.hidden!==!t.visible&&(a.hidden=!t.visible)}togglePanel(){this.panelOpen?this.closePanel(!0):this.openPanel()}openPanel(){!this.state||!rh(this.state).expandable||(this.closeCard(!1),this.panelOpen=!0,this.ref("preview-slot").hidden=!1,this.ref("enemy-pill").setAttribute("aria-expanded","true"),this.ref("preview-slot").focus())}closePanel(e){var s;if(!this.panelOpen)return;const t=this.ref("preview-slot").contains(document.activeElement);this.panelOpen=!1,this.preview.clear(),this.ref("preview-slot").hidden=!0,this.ref("enemy-pill").setAttribute("aria-expanded","false");const i=this.ref("enemy-pill");(e||t)&&!i.disabled?i.focus():t&&((s=document.activeElement)==null||s.blur())}toggleCard(e,t){if(this.card===e){this.closeCard(t);return}if(this.closePanel(!1),this.card&&this.ref(`${this.card}-buy`).setAttribute("aria-expanded","false"),this.card=e,this.ref(`${e}-buy`).setAttribute("aria-expanded","true"),this.ref("upgrade-pop").hidden=!1,this.syncCard(),this.ref("upgrade-pop").scrollTop=0,t){const i=this.ref("upgrade-confirm");(i.disabled?this.ref("upgrade-pop"):i).focus()}}closeCard(e){if(!this.card)return;const t=this.ref(`${this.card}-buy`),i=this.ref("upgrade-pop").contains(document.activeElement);this.card=null,t.setAttribute("aria-expanded","false"),this.ref("upgrade-pop").hidden=!0,(e||i)&&t.focus()}closeOverlays(){this.closeCard(!1),this.closePanel(!1)}confirmUpgrade(e){if(!this.card)return;const t=this.card;this.closeCard(e),this.onCommand(t)}syncCard(){if(!this.card||!this.state)return;const e=Z1(this.state,this.card),t=this.ref("pop-gem"),i=`ui/icons/gem-${e.key}.webp`;t.getAttribute("src")!==i&&t.setAttribute("src",i),this.text("pop-name",e.name),this.text("pop-from",String(e.level)),this.text("pop-to",String(e.next)),this.hidden("pop-route",!e.route),this.text("pop-route",e.route??""),this.text("pop-stat",e.stat),this.text("pop-before",e.before===null?"–":uh(e.before)),this.text("pop-after",uh(e.after)),this.text("pop-action",`${e.label} · ${hn(e.cost)}`);const s=this.ref("upgrade-confirm");s.disabled=e.disabled,s.setAttribute("aria-label",`${e.label} ${e.name} เป็นระดับ ${e.next} · ${hn(e.cost)} พลังงาน`),this.ref("pop-reason").hidden=!e.reason,this.text("pop-reason",e.reason??"");const r=this.ref("upgrade-pop"),a=this.ref("build-bar").getBoundingClientRect(),o=this.ref(`${e.key}-buy`).getBoundingClientRect(),l=(o.left+o.right)/2,c=Math.min(Math.max(12,l-r.offsetWidth/2),innerWidth-12-r.offsetWidth);r.style.setProperty("--pop-left",`${c-a.left}px`),r.style.setProperty("--arrow-x",`${l-c}px`);const h=Math.floor(r.getBoundingClientRect().bottom-8),u=r.scrollHeight+r.offsetHeight-r.clientHeight,d=r.offsetHeight>0&&u>h?`${h}px`:"";r.style.maxHeight!==d&&(r.style.maxHeight=d,r.classList.toggle("is-tight",d!==""))}openHelp(e,t,i=!1){this.helpOpen||(this.closeOverlays(),this.helpTrigger=t,this.spaceGuard.arm(i?this.ref("close-help"):null,"tab-or-arrow"),this.helpOpen=!0,this.setHelpTab(e),this.ref("help-shade").hidden=!1,t.setAttribute("aria-expanded","true"),this.ref("paused").hidden=!0,this.syncModal(),this.pausedByHelp=!!this.state&&!this.state.paused&&this.state.phase!=="defeat"&&this.state.phase!=="victory",this.pausedByHelp&&this.onCommand("pause"),this.ref("close-help").focus())}closeHelp(){var e,t,i;this.helpOpen&&(this.helpOpen=!1,this.ref("help-shade").hidden=!0,(e=this.helpTrigger)==null||e.setAttribute("aria-expanded","false"),this.ref("help-live").textContent="",this.syncModal(),this.pausedByHelp&&((t=this.state)!=null&&t.paused)&&this.onCommand("pause"),this.pausedByHelp=!1,this.signature="",this.state&&this.update(this.state),(i=this.helpTrigger)==null||i.focus())}}const Zr=document.querySelector("#world"),Zs=document.querySelector("#ui"),$e=gu();const dh=[],is=void 0;Zr.setAttribute("aria-label","เกาะลอยฟ้า ภาพวาดมุมคงที่");let yM;let ss;const an=new V1;let vt,Jr=!1,os="ok",Sl=null;Zs.addEventListener("pointerdown",n=>{document.body.dataset.uiModal!=="true"&&(Sl=n.target instanceof Element?n.target.closest("button"):null)});window.addEventListener("keydown",n=>{n.key==="Tab"&&(Sl=null)},{capture:!0});for(const n of["pointerdown","keydown"])window.addEventListener(n,()=>an.unlock(),{capture:!0});window.addEventListener("keydown",n=>{yl(os)&&n.stopImmediatePropagation()},{capture:!0});Zs.addEventListener("pointerdown",n=>{const e=n.target instanceof Element?n.target.closest("button"):null;e&&an.ui(e.disabled)});const zu=n=>vt?vt.screenPoint(n):null,Hu=n=>(vt==null?void 0:vt.screenPoint(n).ndcX)??0,Et=new bM(Zs,n=>Vu(n),{onSound:()=>an.toggle(),onVolume:(n,e)=>an.setVolume(n,e),onVolumePreview:()=>an.preview(),audio:an.settings,onQuality:()=>(vt==null?void 0:vt.toggleQuality())??!1});function Vu(n){if(!Jr)return;if(yl(os))return{ok:!1,message:"กรุณาหมุนเครื่องเป็นแนวนอน",events:[]};an.unlock();const e=Pu($e),t=A_($e,n),i=ku(t.events,$e)??t.message;return i&&Et.toast(i,Ou(t.events)),i!==Ge.research.unlocked&&t.events.some(s=>s.type==="research")&&Et.toast(Ge.research.unlocked),vt==null||vt.handle(t.events),an.handle(t.events,e,$e,Hu),Et.feedback(t.events,e,$e,zu),Et.update($e),t}async function SM(){var n;try{let e=function(l){requestAnimationFrame(e);const c=l-s,h=Math.max(0,Math.min(c/1e3,.05));if(s=l,!document.hidden){if(document.body.dataset.uiModal!=="true"){const u=Pu($e),d=Ic($e,h*Wo);is==null||is.add($e.time,d),vt.handle(d),an.handle(d,u,$e,Hu),Et.feedback(d,u,$e,zu);const p=ku(d,$e);p&&Et.toast(p,Ou(d)),p!==Ge.research.unlocked&&d.some(g=>g.type==="research")&&Et.toast(Ge.research.unlocked)}ss==null||ss.begin(),vt.update($e,h),ss==null||ss.end(),r+=h,yM&&$e.phase,r>.08&&(Et.update($e),r=0,an.follow($e),an.setDimmed($e.paused||document.body.dataset.uiModal==="true"))}};Et.setLoading(0,Ge.loading.initial);const t=Gh(innerWidth),i=hv(Zr,t);vt=await bl.create(i,t,l=>Et.setLoading(l,Ge.loading.progress)),vt.onCueStart=l=>{an.unlockCue(l.capstone)},dh.length&&vt.handle(dh),vt.update($e,0),Jr=!0,Et.ready(),Et.update($e),Qr();let s=performance.now(),r=0;requestAnimationFrame(e);const a=l=>{$e.skillPoints+=l,Et.update($e)},o=l=>{for(let c=0;c<Math.round(l*30);c++){const h=Ic($e,.03333333333333333);is==null||is.add($e.time,h),vt.handle(h),vt.update($e,1/30/Wo)}return Et.update($e),$e.time};Object.defineProperty(window,"__AETHERKEEP__",{value:{getState:()=>JSON.parse(JSON.stringify($e)),diagnostics:(l=!1)=>vt.diagnostics(l),version:"1.0.0"},writable:!1})}catch(e){console.error(e),Zs.innerHTML='<section class="boot-error" style="position:fixed;inset:0;display:grid;place-content:center;background:#102734;color:white;text-align:center;padding:24px;font-family:sans-serif"><h1>เปิดเกาะไม่สำเร็จ</h1><p>โปรดใช้เบราว์เซอร์ที่รองรับ WebGL 2 แล้วลองโหลดเกมอีกครั้ง</p><button id="reload-game" style="padding:12px">ลองอีกครั้ง</button></section>',(n=document.querySelector("#reload-game"))==null||n.addEventListener("click",()=>location.reload())}}window.addEventListener("keydown",n=>{const e=n.key.toLowerCase(),t=n.key===" "&&n.target===Sl;if(t&&document.body.dataset.uiModal!=="true"&&n.preventDefault(),document.body.dataset.uiModal==="true"||n.target instanceof HTMLElement&&(/INPUT|TEXTAREA|SELECT/.test(n.target.tagName)||n.target.isContentEditable)||n.repeat||n.target instanceof HTMLButtonElement&&(n.key==="Enter"||n.key===" "&&!t))return;const i={" ":"pause",n:"wave",1:"fire",2:"frost",3:"storm",q:"nova"};if(e==="t"){n.preventDefault(),Et.toggleTree();return}i[e]&&(n.preventDefault(),Vu(i[e]))});document.addEventListener("visibilitychange",()=>{document.hidden&&Jr&&!$e.paused&&$e.phase==="wave"&&(jr($e,"pause"),Et.update($e))});Zr.addEventListener("webglcontextlost",n=>{n.preventDefault(),$e.paused||jr($e,"pause"),Et.toast("กราฟิกหยุดชั่วคราว กรุณาโหลดหน้าใหม่เพื่อเล่นต่อ")});const ei=document.createElement("section");ei.className="rotate-screen";ei.setAttribute("role","alertdialog");ei.setAttribute("aria-modal","true");ei.setAttribute("aria-label","กรุณาหมุนเครื่องเป็นแนวนอน");ei.hidden=!0;ei.innerHTML='<svg class="rotate-icon" viewBox="0 0 64 64" aria-hidden="true"><rect x="20" y="6" width="24" height="42" rx="5" fill="none" stroke="currentColor" stroke-width="4"/><path d="M10 40a24 24 0 0 0 30 18" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M36 52l6 6-8 3" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg><h2>กรุณาหมุนเครื่องเป็นแนวนอน</h2><p>เกมนี้เล่นในแนวนอนเท่านั้น</p>';document.body.append(ei);const Gu=matchMedia("(pointer: coarse)");function Qr(){os=p1(innerWidth,innerHeight,Gu.matches),ei.hidden=os==="ok";const n=yl(os);n?document.body.dataset.rotateScreen="true":delete document.body.dataset.rotateScreen;for(const e of[Zs,Zr])e.inert=n,n&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&document.activeElement.blur();Jr&&m1($e,os)&&(jr($e,"pause"),Et.update($e))}const Wu=()=>{(document.fullscreenElement||matchMedia("(display-mode: standalone)").matches)&&g1()};for(const n of["resize","orientationchange"])addEventListener(n,Qr);Gu.addEventListener("change",Qr);document.addEventListener("fullscreenchange",Wu);window.addEventListener("pointerup",n=>{const e=matchMedia("(display-mode: standalone)").matches;v1({touch:n.pointerType==="touch",fullscreen:!!document.fullscreenElement,standalone:e,supported:document.fullscreenEnabled})?document.documentElement.requestFullscreen({navigationUI:"hide"}).catch(()=>{}):Wu()},{once:!0,capture:!0});Qr();SM();
