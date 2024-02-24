// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.1-esm/index.mjs";var n=128;function t(r,i,f,s){var o,a,u,d,l,m,p,v,j,c,h,b,y;if(r<=0)return 0;if(1===r||0===f)return i[s];if(o=s,r<8){for(h=0,y=0;y<r;y++)h+=i[o],o+=f;return h}if(r<=n){for(a=i[o],u=i[o+f],d=i[o+2*f],l=i[o+3*f],m=i[o+4*f],p=i[o+5*f],v=i[o+6*f],j=i[o+7*f],o+=8*f,c=r%8,y=8;y<r-c;y+=8)a+=i[o],u+=i[o+f],d+=i[o+2*f],l+=i[o+3*f],m+=i[o+4*f],p+=i[o+5*f],v+=i[o+6*f],j+=i[o+7*f],o+=8*f;for(h=a+u+(d+l)+(m+p+(v+j));y<r;y++)h+=i[o],o+=f;return h}return b=e(r/2),t(b-=b%8,i,f,o)+t(r-b,i,f,o+b*f)}function i(r,e,n){var i,f,s;if(r<=0)return 0;if(1===r||0===n)return e[0];if(i=n<0?(1-r)*n:0,r<8){for(f=0,s=0;s<r;s++)f+=e[i],i+=n;return f}return t(r,e,n,i)}r(i,"ndarray",t);export{i as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
