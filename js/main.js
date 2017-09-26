/*
Powered by ly200.com		http://www.ly200.com
广州联雅网络科技有限公司		020-83226791
*/
$(function ($){
	showthis('#pdetail .description .hd span','#pdetail .description .bd .desc_txt',0,'cur');
	$('#pdetail .description .hd span').click(function(){
		showthis('#pdetail .description .hd span','#pdetail .description .bd .desc_txt',$(this).index(),'cur');
	});
	nav('.nav .w1160','.nav .ia');
	$('#subs span').mouseover(function(){
		$('#products_box div.indexpro').eq($(this).index()).show().siblings('#products_box div.indexpro').hide();	
		$(this).addClass('cur').siblings().removeClass('cur');	
	});
});
