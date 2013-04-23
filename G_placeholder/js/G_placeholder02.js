(function($){
	$.fn.G_placeholder=function(settings){
		var defaults={
			placeholder:'请在此输入您需要的内容。'
		}
		var options=jQuery.extend(defaults,settings);
		
		return this.each(function(settings){

			
			var $this = $(this);
			
			if($this!=null){
				targetFocus($this);
				
				$this.change(function(){
					if($(this).val()!=options.placeholder){
						hasSearch=1;
						//console.log(hasSearch);
					}
					else{
						hasSearch=0;
						//console.log(hasSearch);	
					}	
				});
				
				$this.on('blur',function(){
					if($(this).val()==''){
						$(this).val(options.placeholder);
						targetFocus($this);
					}	
				});
				
				function targetFocus(target){
					//alert(1);
				
					hasSearch=0;
					target.on('focus',function(){
						if(hasSearch==0){
							$(this).val('');
							//console.log(hasSearch);	
						}
						else{
							target.off('focus')
						}
					});
				}
			}
		
	
		});

	}

})(jQuery)
