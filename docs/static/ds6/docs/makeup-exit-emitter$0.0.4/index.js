$_mod.def("/makeup-exit-emitter$0.0.4/index",function(e,n,t,i,o){"use strict";function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n,t){e.dispatchEvent(new CustomEvent("focusExit",{detail:{fromElement:n,toElement:t},bubbles:!1}))}function u(e){var n=e.target;!0===this.el.contains(n)?this.currentFocusElement=n:(window.removeEventListener("blur",this.onWindowBlurListener),document.removeEventListener("focusin",this.onDocumentFocusInListener),r(this.el,this.currentFocusElement,n),this.currentFocusElement=null)}function c(){r(this.el,this.currentFocusElement,void 0)}function l(){document.addEventListener("focusin",this.onDocumentFocusInListener),window.addEventListener("blur",this.onWindowBlurListener)}function d(e){var n=null;return h(e),v[e.id]||(n=new f(e),v[e.id]=n),n}function m(e){var n=v[e.id];n&&(n.removeEventListeners(),delete v[e.id])}var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),h=e("/makeup-next-id$0.0.2/index"),v={},f=function(){function e(n){s(this,e),this.el=n,this.currentFocusElement=null,this.onWidgetFocusInListener=l.bind(this),this.onDocumentFocusInListener=u.bind(this),this.onWindowBlurListener=c.bind(this),this.el.addEventListener("focusin",this.onWidgetFocusInListener)}return a(e,[{key:"removeEventListeners",value:function(){window.removeEventListener("blur",this.onWindowBlurListener),document.removeEventListener("focusin",this.onDocumentFocusInListener),this.el.removeEventListener("focusin",this.onWidgetFocusInListener)}}]),e}();t.exports={addFocusExit:d,removeFocusExit:m}});