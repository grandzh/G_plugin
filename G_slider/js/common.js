// JavaScript Document
Dslider={
	Did:'#techSlider',
	Dtip:'4',
	Dtime:3000,
	Dwidth:180,
	Dnum:function(){
		return $(Dslider.Did).find("li").length;
		},
	Dslide:function(){
		var nowLeft=parseInt($(Dslider.Did).css("left"));
		now=(-1)*nowLeft/Dslider.Dwidth;
		if(now<Dslider.Dnum()-Dslider.Dtip){
			if(!$(Dslider.Did).is(":animated")){
				$(Dslider.Did).animate({"left":(nowLeft-Dslider.Dwidth)+"px"},500);
				}
			}
		else{
			if(!$(Dslider.Did).is(":animated")){
				$(Dslider.Did).animate({"left":"0px"},500);
				}
			}
			
		},
	DslideRight:function(){
		var nowLeft=parseInt($(Dslider.Did).css("left"));
		now=(-1)*nowLeft/Dslider.Dwidth;
		if(now>0){
				if(!$(Dslider.Did).is(":animated")){
					$(Dslider.Did).animate({"left":(nowLeft+Dslider.Dwidth)+"px"},500);
				}
			
			}
		else{
				if(!$(Dslider.Did).is(":animated")){
					$(Dslider.Did).animate({"left":(-1)*(Dslider.Dnum()-Dslider.Dtip)*Dslider.Dwidth+"px"},500);
				}
			}
		
		},
	Dinterval:function(){
		intervalID=setInterval(function(){Dslider.Dslide();},Dslider.Dtime);
		//console.log(2);
		},
	DstopInterval:function(){
		 clearInterval(intervalID);
		},
	
	
	init:function(){
		$("#sliderLeft").click(function(){
			Dslider.Dslide();
			//console.log("left");
			return false;
			});
		$("#sliderRight").click(function(){
			Dslider.DslideRight();
			//console.log("right");
			return false;
			});
		Dslider.Dinterval();	
		$("#techSliderFather").hover(function(){
			Dslider.DstopInterval();
			//console.log(1);
			},function(){
			Dslider.Dinterval();
			//console.log(0)	
				});
		}
	
	
	};
$(document).ready(function(){
	Dslider.init();
	});