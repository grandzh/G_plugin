//keyborad
$(document).ready(function(){
	$('button').click(function(event){
		var clickKeycode=$(this).attr('data-keycode');
		console.log(clickKeycode,event);
		$('.text em').html(clickKeycode);
		$('.text span').html($(this).html());
		$('#callKeyboard').focus();
		//$(document).keypress(clickKeycode);
	});
});

function G_inputKeypress(clickKeycode){
	nowText=$('#callKeyboard').val()
	$('#callKeyboard').val('')
}