$_mod.def("/makeup-screenreader-trap$0.0.5/index",function(e,t,n,r,a){"use strict";function i(e,t){return{el:e,cleanValue:e.getAttribute("aria-hidden"),dirtyValue:t}}function u(e){e.el.setAttribute("aria-hidden",e.dirtyValue)}function c(e){e.cleanValue?e.el.setAttribute("aria-hidden",e.cleanValue):e.el.removeAttribute("aria-hidden")}function o(){f&&(p.forEach(function(e){return c(e)}),p=[],d&&d.setAttribute("role","main"),f.dispatchEvent(new CustomEvent("screenreaderUntrap",{bubbles:!0})),f=null)}function s(e){o(),f=e,(d=document.querySelector('main, [role="main"]'))&&d.setAttribute("role","presentation");var t=l.getAncestors(f),n=l.getSiblings(f),r=l.getSiblingsOfAncestors(f);p=[i(f,"false")].concat(t.map(function(e){return i(e,"false")})).concat(n.map(function(e){return i(e,"true")})).concat(r.map(function(e){return i(e,"true")})),p.forEach(function(e){return u(e)}),f.dispatchEvent(new CustomEvent("screenreaderTrap",{bubbles:!0}))}var l=e("/makeup-screenreader-trap$0.0.5/util"),d=void 0,f=void 0,p=void 0;n.exports={trap:s,untrap:o}});