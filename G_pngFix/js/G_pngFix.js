//pngFix
$(document).ready(function(){
	if(/msie 6/i.test(navigator.userAgent)){
		var i=0;
		$('*').each(function(){
			var oldUrl=$(this).css('backgroundImage');
			if(oldUrl!='none'&&(oldUrl).match(/sprits.png/)){
				console.log(oldUrl,++i)
				var picUrl=oldUrl.replace(/sprits.png/,'sprits.gif');
				$(this).css('backgroundImage',picUrl);
				console.log(++i);
			}
		});
	}
});
