$_mod.def("/makeup-keyboard-trap$0.0.9/index",function(e,n,t,o,d){"use strict";function r(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.className="keyboard-trap-boundary",e}function i(){C.focus()}function a(){k.focus()}function s(){b=r(),m=b.cloneNode(),h=b.cloneNode(),E=b.cloneNode(),N=b.cloneNode(),y=b.cloneNode(),b.addEventListener("focus",i),m.addEventListener("focus",i),h.addEventListener("focus",a),E.addEventListener("focus",i),N.addEventListener("focus",a),y.addEventListener("focus",a)}function c(){return p&&(b=f.removeChild(b),m=p.parentNode.removeChild(m),h=p.removeChild(h),E=p.removeChild(E),N=p.parentNode.removeChild(N),y=f.removeChild(y),p.classList.remove("keyboard-trap--active"),p.dispatchEvent(new CustomEvent("keyboardUntrap",{bubbles:!0})),p=null),p}function u(e){b?c():s(),p=e;var n=l(p);return C=n[0],k=n[n.length-1],f.insertBefore(b,f.childNodes[0]),p.parentNode.insertBefore(m,p),p.insertBefore(h,p.childNodes[0]),p.appendChild(E),p.parentNode.insertBefore(N,p.nextElementSibling),f.appendChild(y),p.dispatchEvent(new CustomEvent("keyboardTrap",{bubbles:!0})),p.classList.add("keyboard-trap--active"),p}function v(){if(b&&p){var e=l(p);e=e.filter(function(e){return!e.classList.contains("keyboard-trap-boundary")}),C=e[0],k=e[e.length-1]}}var l=e("/makeup-focusables$0.0.3/index"),f="undefined"==typeof document?null:document.body,p=void 0,b=void 0,m=void 0,h=void 0,E=void 0,N=void 0,y=void 0,C=void 0,k=void 0;t.exports={refresh:v,trap:u,untrap:c}});