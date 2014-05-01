(function ($) {
	"use strict";
	
	$.formatDate = function(o) {
		var Y,F,n,l,j,G,g,i,s,a,x,v,
			k = 'Y0y0F0M0m0n0l0D0d0j0G0H0h0g0i0ii0s0ss0a0A'.split(0),
			o = $.extend({
				date: new Date(),
				format: '+l +j of +F of +Y',
				months: "January0February0March0April0May0June0July0August0September0October0November0December".split(0),
				days: "Sunday0Monday0Tuesday0Wednesday0Thursday0Friday0Saturday".split(0)
			}, o),
			f = o.format,
			d = o.date,
			D=d.big||d.toFixed?new Date(d):d.pop?new Date(d[0]||0,d[1]||0,d[2]||0,d[3]||0,d[4]||0,d[5]||0):d;
		
		function c(a){
			return a<10?('0'+a):a;
		}
		
		Y=D.getFullYear();
		n=D.getMonth()+1;
		F=o.months[n-1];
		j=D.getDate();
		l=o.days[D.getDay()];
		
		g=G=D.getHours();
		if (g==0) g=24;
		if (g>12) g-=12;
		a=G<12?'am':'pm';
		i=D.getMinutes();
		s=D.getSeconds();
		v = [Y,(Y+"").slice(-2),F,F.substr(0,3),c(n),n,l,l.substr(0,3),c(j),j,G,c(G),c(g),g,i,c(i),s,c(s),a,a.toUpperCase()];
		
		for (x = k.length; x--;) {
			f = f.replace('+'+k[x],v[x]);
		}
		
		return f;
	};
	
    $.fn.setDate = function(o){
		return this.each(function(){$(this).html($.formatDate(o));});
	};
	
})(jQuery);