// JavaScript Document
$(document).ready(function(){
	function shineyWords(color1,color2,time){
		
		
		$color2=color2;
		
		
		function changeWords(){
			$('.shineyWords').css({'color':color1});
			//console.log('black');
			setTimeout("$('.shineyWords').css({'color':$color2});",time);
		}
		$(function(){setInterval(changeWords,time*2);});
	}
	shineyWords('#000000','#ffffff',1000);
	
});