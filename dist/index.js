"use strict";var C=function(o,v){return function(){return v||o((v={exports:{}}).exports,v),v.exports}};var M=C(function(U,L){
var P=require('@stdlib/math-base-special-floor/dist'),R=128;function E(o,v,r,B){var a,n,u,l,y,g,m,w,O,b,q,e,c,f,p;if(a=v.data,n=v.accessors[0],u=B,r===0)return o*n(a,u);if(o<=8){for(f=0,p=0;p<o;p++)f+=n(a,u),u+=r;return f}if(o<=R){for(l=n(a,u),y=n(a,u+r),g=n(a,u+2*r),m=n(a,u+3*r),w=n(a,u+4*r),O=n(a,u+5*r),b=n(a,u+6*r),q=n(a,u+7*r),u+=8*r,e=o%8,p=8;p<o-e;p+=8)l+=n(a,u),y+=n(a,u+r),g+=n(a,u+2*r),m+=n(a,u+3*r),w+=n(a,u+4*r),O+=n(a,u+5*r),b+=n(a,u+6*r),q+=n(a,u+7*r),u+=8*r;for(f=l+y+(g+m)+(w+O+(b+q)),p;p<o;p++)f+=n(a,u),u+=r;return f}return c=P(o/2),c-=c%8,E(c,v,r,u)+E(o-c,v,r,u+c*r)}L.exports=E
});var K=C(function(V,S){
var h=require('@stdlib/math-base-special-floor/dist'),z=require('@stdlib/array-base-arraylike2object/dist'),A=M(),D=128;function I(o,v,r,B){var a,n,u,l,y,g,m,w,O,b,q,e,c,f;if(o<=0)return 0;if(e=z(v),e.accessorProtocol)return A(o,e,r,B);if(a=B,r===0)return o*v[a];if(o<8){for(q=0,f=0;f<o;f++)q+=v[a],a+=r;return q}if(o<=D){for(n=v[a],u=v[a+r],l=v[a+2*r],y=v[a+3*r],g=v[a+4*r],m=v[a+5*r],w=v[a+6*r],O=v[a+7*r],a+=8*r,b=o%8,f=8;f<o-b;f+=8)n+=v[a],u+=v[a+r],l+=v[a+2*r],y+=v[a+3*r],g+=v[a+4*r],m+=v[a+5*r],w+=v[a+6*r],O+=v[a+7*r],a+=8*r;for(q=n+u+(l+y)+(g+m+(w+O)),f;f<o;f++)q+=v[a],a+=r;return q}return c=h(o/2),c-=c%8,I(c,v,r,a)+I(o-c,v,r,a+c*r)}S.exports=I
});var j=C(function(W,Z){
var F=require('@stdlib/strided-base-stride2offset/dist'),G=K();function H(o,v,r){return G(o,v,r,F(o,r))}Z.exports=H
});var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=j(),Q=K();J(k,"ndarray",Q);module.exports=k;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
