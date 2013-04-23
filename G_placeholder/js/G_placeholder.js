(function($){
	$.G_placeholder=function(settings){
		var defaults={
			target:'#searchBar',
			placeholder:'请在此输入您需要的内容。'
		}
		var options=jQuery.extend(defaults,settings);
		
		return function(options){
			
			alert(1);
			console.log(options);
			
			if($(options.target)!=null){
				targetFocus(options.target);
				
				$(options.target).change(function(){
					if($(this).val()!=options.placeholder){
						hasSearch=1;
						//console.log(hasSearch);
					}
					else{
						hasSearch=0;
						//console.log(hasSearch);	
					}	
				});
				
				$(options.target).on('blur',function(){
					if($(this).val()==''){
						$(this).val(options.placeholder);
						targetFocus(options.target);
					}	
				});
				
				function targetFocus(target){
					alert(1);
				
					hasSearch=0;
					$(target).on('focus',function(){
						if(hasSearch==0){
							$(this).val('');
							//console.log(hasSearch);	
						}
						else{
							$(target).off('focus')
						}
					});
				}
			}
		
	
		}

	}

})(jQuery)
