"use strict";var E=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var B=E(function(z,I){
var R=require('@stdlib/math-base-special-floor/dist'),S=128;function O(v,r,u,f){var a,o,q,m,e,l,y,g,w,C,c,p,n;if(v<=0)return 0;if(v===1||u===0)return r[f];if(a=f,v<8){for(c=0,n=0;n<v;n++)c+=r[a],a+=u;return c}if(v<=S){for(o=r[a],q=r[a+u],m=r[a+2*u],e=r[a+3*u],l=r[a+4*u],y=r[a+5*u],g=r[a+6*u],w=r[a+7*u],a+=8*u,C=v%8,n=8;n<v-C;n+=8)o+=r[a],q+=r[a+u],m+=r[a+2*u],e+=r[a+3*u],l+=r[a+4*u],y+=r[a+5*u],g+=r[a+6*u],w+=r[a+7*u],a+=8*u;for(c=o+q+(m+e)+(l+y+(g+w)),n;n<v;n++)c+=r[a],a+=u;return c}return p=R(v/2),p-=p%8,O(p,r,u,a)+O(v-p,r,u,a+p*u)}I.exports=O
});var L=E(function(A,K){
var Z=B();function b(v,r,u){var f,a,o;if(v<=0)return 0;if(v===1||u===0)return r[0];if(u<0?f=(1-v)*u:f=0,v<8){for(a=0,o=0;o<v;o++)a+=r[f],f+=u;return a}return Z(v,r,u,f)}K.exports=b
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=L(),j=B();h(M,"ndarray",j);module.exports=M;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
