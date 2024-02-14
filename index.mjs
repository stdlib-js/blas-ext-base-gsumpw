// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.1-esm/index.mjs";function n(r,t,i,f){var s,o,a,u,d,l,m,p,j,v,c,h,b;if(r<=0)return 0;if(1===r||0===i)return t[f];if(s=f,r<8){for(c=0,b=0;b<r;b++)c+=t[s],s+=i;return c}if(r<=128){for(o=t[s],a=t[s+i],u=t[s+2*i],d=t[s+3*i],l=t[s+4*i],m=t[s+5*i],p=t[s+6*i],j=t[s+7*i],s+=8*i,v=r%8,b=8;b<r-v;b+=8)o+=t[s],a+=t[s+i],u+=t[s+2*i],d+=t[s+3*i],l+=t[s+4*i],m+=t[s+5*i],p+=t[s+6*i],j+=t[s+7*i],s+=8*i;for(c=o+a+(u+d)+(l+m+(p+j));b<r;b++)c+=t[s],s+=i;return c}return h=e(r/2),n(h-=h%8,t,i,s)+n(r-h,t,i,s+h*i)}function t(r,e,t){var i,f,s;if(r<=0)return 0;if(1===r||0===t)return e[0];if(i=t<0?(1-r)*t:0,r<8){for(f=0,s=0;s<r;s++)f+=e[i],i+=t;return f}return n(r,e,t,i)}r(t,"ndarray",n);export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
