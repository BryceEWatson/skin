!function(r,e,a,t){var n,i,d;r.trapScreenreader=function(e){n=r("main, [role=main]"),r.untrapScreenreader(),n.attr("role","presentation"),i=r(e);var a=i.siblings(":not(script, [aria-hidden=true])"),t=i.parents(":not(html, body)"),o=i.parents(":not(html, body)").siblings(":not(script, [aria-hidden=true])");i.attr("aria-hidden","false"),a.attr("aria-hidden","true"),t.attr("aria-hidden","false"),o.attr("aria-hidden","true"),d=i.add(a).add(t).add(o),i.trigger("screenreaderTrap")},r.untrapScreenreader=function(){i&&(d.removeAttr("aria-hidden"),i.trigger("screenreaderUntrap"),n.attr("role","main"),i=null)}}(jQuery,window,document);