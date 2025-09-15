"use strict";var E=function(o,v){return function(){return v||o((v={exports:{}}).exports,v),v.exports}};var S=E(function(U,M){
var R=require('@stdlib/math-base-special-floor/dist'),e=128;function I(o,v,r,C){var a,n,u,l,y,g,m,w,O,b,q,B,c,f,p;if(a=v.data,n=v.accessors[0],u=C,r===0)return o*n(a,u);if(o<=8){for(f=n(a,u),u+=r,p=1;p<o;p++)f+=n(a,u),u+=r;return f}if(o<=e){for(l=n(a,u),y=n(a,u+r),g=n(a,u+2*r),m=n(a,u+3*r),w=n(a,u+4*r),O=n(a,u+5*r),b=n(a,u+6*r),q=n(a,u+7*r),u+=8*r,B=o%8,p=8;p<o-B;p+=8)l+=n(a,u),y+=n(a,u+r),g+=n(a,u+2*r),m+=n(a,u+3*r),w+=n(a,u+4*r),O+=n(a,u+5*r),b+=n(a,u+6*r),q+=n(a,u+7*r),u+=8*r;for(f=l+y+(g+m)+(w+O+(b+q)),p;p<o;p++)f+=n(a,u),u+=r;return f}return c=R(o/2),c-=c%8,I(c,v,r,u)+I(o-c,v,r,u+c*r)}M.exports=I
});var L=E(function(V,Z){
var h=require('@stdlib/math-base-special-floor/dist'),z=require('@stdlib/array-base-arraylike2object/dist'),A=S(),D=128;function K(o,v,r,C){var a,n,u,l,y,g,m,w,O,b,q,B,c,f;if(o<=0)return 0;if(B=z(v),B.accessorProtocol)return A(o,B,r,C);if(a=C,r===0)return o*v[a];if(o<8){for(q=v[a],a+=r,f=1;f<o;f++)q+=v[a],a+=r;return q}if(o<=D){for(n=v[a],u=v[a+r],l=v[a+2*r],y=v[a+3*r],g=v[a+4*r],m=v[a+5*r],w=v[a+6*r],O=v[a+7*r],a+=8*r,b=o%8,f=8;f<o-b;f+=8)n+=v[a],u+=v[a+r],l+=v[a+2*r],y+=v[a+3*r],g+=v[a+4*r],m+=v[a+5*r],w+=v[a+6*r],O+=v[a+7*r],a+=8*r;for(q=n+u+(l+y)+(g+m+(w+O)),f;f<o;f++)q+=v[a],a+=r;return q}return c=h(o/2),c-=c%8,K(c,v,r,a)+K(o-c,v,r,a+c*r)}Z.exports=K
});var k=E(function(W,j){
var F=require('@stdlib/strided-base-stride2offset/dist'),G=L();function H(o,v,r){return G(o,v,r,F(o,r))}j.exports=H
});var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=k(),Q=L();J(P,"ndarray",Q);module.exports=P;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
