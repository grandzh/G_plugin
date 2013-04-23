//浮动转固定视图
/*$(document).ready(function(e) {			
	boxTop = $('.rightBox').offset().top;
	boxLeft= $('.rightBox').offset().left;
	bodyHeight = $('body').height();
	boxHeight = $('.rightBox').height();
	
	
	$(window).scroll(function(e){
		scrollPix = $(document).scrollTop();	
		if(scrollPix > boxTop - 1){
			$('.rightBox').css('position','fixed');
			$('.rightBox').css('left',boxLeft);
			if(scrollPix + boxHeight > bodyHeight){
				$('.rightBox').css('top',bodyHeight-scrollPix-boxHeight+'px');	
			}				
		}else{
			$('.rightBox').css('position','');
		}
	})
});*/



(function($){
	$.fn.G_fixedModle=function(settings){
		var defaults={
			fixBoxTop:'10px',
			fixBoxLeft:$(this).offset().left		
		}
		var options=jQuery.extend(defaults,settings);
		
		return this.each(function(settings){
			var target=$(this);
			var	boxTop = target.offset().top;
			var boxLeft= target.offset().left;
			var bodyHeight = $('body').height();
			var boxHeight = target.height();
			
			$(window).scroll(function(e){
				scrollPix = $(document).scrollTop();
				console.log(scrollPix);
				if(scrollPix > boxTop - 1){
					console.log(target);
					target.css('position','fixed');
					target.css('top',options.fixBoxTop)
					target.css('left',options.fixBoxLeft);
					if(scrollPix + boxHeight > bodyHeight){
						target.css('top',bodyHeight-scrollPix-boxHeight+'px');	
					}				
				}else{
					target.css('position','');
				}
			});
			
			
		});
		
	}
	
})(jQuery)