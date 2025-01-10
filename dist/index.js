"use strict";var B=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var O=B(function(z,C){
var M=require('@stdlib/math-base-special-floor/dist'),R=128;function w(u,r,v,L){var a,e,q,c,p,y,m,g,l,s,f,o,n;if(u<=0)return 0;if(a=L,v===0)return u*r[a];if(u<8){for(f=0,n=0;n<u;n++)f+=r[a],a+=v;return f}if(u<=R){for(e=r[a],q=r[a+v],c=r[a+2*v],p=r[a+3*v],y=r[a+4*v],m=r[a+5*v],g=r[a+6*v],l=r[a+7*v],a+=8*v,s=u%8,n=8;n<u-s;n+=8)e+=r[a],q+=r[a+v],c+=r[a+2*v],p+=r[a+3*v],y+=r[a+4*v],m+=r[a+5*v],g+=r[a+6*v],l+=r[a+7*v],a+=8*v;for(f=e+q+(c+p)+(y+m+(g+l)),n;n<u;n++)f+=r[a],a+=v;return f}return o=M(u/2),o-=o%8,w(o,r,v,a)+w(u-o,r,v,a+o*v)}C.exports=w
});var I=B(function(A,E){
var S=require('@stdlib/strided-base-stride2offset/dist'),Z=O();function b(u,r,v){return Z(u,r,v,S(u,v))}E.exports=b
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),K=I(),j=O();h(K,"ndarray",j);module.exports=K;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
