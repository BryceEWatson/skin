!function(n,e,t,i){var o="jquery-grid-navigation";n.fn.gridNavigation=function(e,t){return t=n.extend({activeIndex:0,debug:!1,autoWrap:!1,autoReset:!1,autoInit:!1,autoInitOnDomChange:!1,disableHomeAndEndKeys:!1,disablePageUpAndDownKeys:!1},t),this.each(function(){if(void 0===n.data(this,o)){var i=n(this),r=i.find(e),a=r.first().parent().parent().children(),u=a.first().children(),d=r.length,l=u.length,c=a.length,g=null,f=null;(t.activeIndex<0||t.activeIndex>=d)&&(t.activeIndex=0);var s=function(){return null!==g&&null!==g},w=function(){return!1===t.autoInit&&!1===s()},h=function(){r.each(function(e,t){n.data(t,o,{index:e})})},x=function(e){var t=n(e);return{col:t.index(),row:t.parent().index()}},v=function(e){return null===e?null:n.data(e,o).index},y=function(n){return null===n?null:r.get(n)},I=function(n,e){return null!==n&&n<l&&null!==e&&e<c?a.eq(e).children().eq(n).get(0):null},p=function(){var e=I(g,f),t=v(e),i={fromIndex:t,toIndex:null};f=null,g=null,n(e).trigger("gridNavigationReset",i)},m=function(){var e,i=I(g,f),o=v(i),r=y(t.activeIndex),a=x(r);o!==t.activeIndex&&(e={fromIndex:o,toIndex:t.activeIndex},g=a.col,f=a.row,n(r).trigger("gridNavigationInit",e))},D=function(){null!==f&&null!==g&&(!1===t.autoInit?p():m())},K=function(e,i){var r,a,u,d,s=I(g,f),w=n.data(s,o);e<0?(u="left",e=l-1):e>=l?(u="right",e=0):i<0?(u="top",i=c-1):i>=c&&(u="bottom",i=0),void 0!==u&&(d={fromIndex:w.index,toIndex:null,boundary:u},n(s).trigger("gridNavigationBoundary",d)),void 0!==u&&!0!==t.autoWrap||(r=I(e,i),a=n.data(r,o),d={fromIndex:w.index,toIndex:a?a.index:null},n(r).trigger("gridNavigationChange",d),g=e,f=i)},b=function(n){K(n,f)},A=function(n){K(g,n)},N=function(){r=i.find(e),a=r.first().parent().parent().children(),u=a.first().children(),d=r.length,l=u.length,c=a.length,h(),i.trigger("gridNavigationItemsChange"),!0===t.autoInitOnDomChange&&m()},C=function(n){if(!0===w())m();else switch(n.type){case"upArrowKeyDown":A(f-1);break;case"downArrowKeyDown":A(f+1);break;case"leftArrowKeyDown":b(g-1);break;case"rightArrowKeyDown":b(g+1)}},k=function(){b(0)},E=function(){b(l-1)},j=function(){A(0)},q=function(){A(c-1)};i.commonKeyDown(),i.on("upArrowKeyDown downArrowKeyDown rightArrowKeyDown leftArrowKeyDown",C),!1===t.disableHomeAndEndKeys&&(i.on("homeKeyDown",k),i.on("endKeyDown",E)),!1===t.disablePageUpAndDownKeys&&(i.on("pageDownKeyDown",q),i.on("pageUpKeyDown",j)),i.on("click",e,function(){var e=n(this);!0===w()&&m(),K(e.index(),e.parent().index())}),!0===t.autoReset&&(i.focusExit(),i.on("focusExit",D)),i.on("domChange",N),!0===t.autoInit&&setTimeout(function(){m()},0),jQuery.data(this,o,{installed:"true"}),h()}else!0===t.debug&&console.log("debug: {pluginName} is already installed on {element}".replace("{pluginName}",o).replace("{element}",this))})}}(jQuery,window,document);