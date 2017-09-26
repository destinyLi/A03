//(function(){
//	var s=function(n, v){
//		var d=new Date();
//		d.setTime(d.getTime()+24*3600*1000);
//		document.cookie=n+'='+escape(v)+';expires='+d.toGMTString();
//	};
//	var g=function(n){
//		var r=new RegExp('(^| )'+n+'=([^;]*)(;|$)');
//		var d=document.cookie.match(r);
//		return d?unescape(d[2]):'';
//	};
//	var d=g('a_s_id');
//	d=='' && (d='qg84jtbo7f2dbk0osuqo96jtq3');
//	s('a_s_id', d);
//	var c=[];
//	c.push('url='+encodeURIComponent(window.location.href));
//	c.push('referrer='+encodeURIComponent(document.referrer));
//	c.push('number=UPAC700');
//	c.push('session_id='+d);
//	c.push('rand='+Math.random());
//	(new Image).src='//analytics.ly200.com/analytics/?'+c.join('&');
//})();
(function(){var s=function(n,v){var d=new Date();d.setTime(d.getTime()+24*3600*1000);document.cookie=n+'='+escape(v)+';expires='+d.toGMTString()};var g=function(n){var r=new RegExp('(^| )'+n+'=([^;]*)(;|$)');var d=document.cookie.match(r);return d?unescape(d[2]):''};var d=g('a_s_id');d==''&&(d='qg84jtbo7f2dbk0osuqo96jtq3');s('a_s_id',d);var c=[];c.push('url='+encodeURIComponent(window.location.href));c.push('referrer='+encodeURIComponent(document.referrer));c.push('number=UPAC700');c.push('session_id='+d);c.push('rand='+Math.random());(new Image).src='//analytics.ly200.com/analytics/?'+c.join('&')})();