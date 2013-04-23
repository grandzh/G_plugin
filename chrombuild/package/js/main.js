// JavaScript Document

 $(function() {
    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
  });


$(function(){
	taobaoUrl=location.href;
	console.log(taobaoUrl);
	$('#tabs-1').find('p').html(taobaoUrl);
	
	
});