$_mod.def("/custom-event-polyfill$0.3.0/custom-event-polyfill",function(e,t,n,o,r){try{var l=new window.CustomEvent("test");if(l.preventDefault(),!0!==l.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var u=function(e,t){var n,o;return t=t||{bubbles:!1,cancelable:!1,detail:void 0},n=document.createEvent("CustomEvent"),n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o=n.preventDefault,n.preventDefault=function(){o.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};u.prototype=window.Event.prototype,window.CustomEvent=u}});