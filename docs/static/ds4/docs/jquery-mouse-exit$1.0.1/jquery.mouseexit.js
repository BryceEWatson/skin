!function(e,t,o,u){e.fn.mouseExit=function(o){return o=o||{},this.each(function(){if(!e.data(this,"jquery-mouse-exit")){jQuery.data(this,"jquery-mouse-exit","true");var u,n=e(this);n.on("mouseleave",function(e){u=t.setTimeout(function(){n.trigger("mouseExit",{lostfocus:e.target,gainedfocus:e.relatedTarget}),!0===o.doOnce&&n.off("mouseleave")},o.delay||250),n.one("mouseenter",function(){t.clearTimeout(u)})})}})}}(jQuery,window,document);