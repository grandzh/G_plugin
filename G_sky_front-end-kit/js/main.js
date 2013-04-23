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
				//console.log(++i);
			}
		});
	}
});

//clipbord
$(document).ready(function(){
	$('.copyTheLink').click(function(){
		copyURL($('.mehodInput').val());
	});
});


function copyURL(url) {
	if (window.clipboardData) {
		window.clipboardData.setData("Text",url);
		alert("URL已经复制到粘贴板，你可以使用Ctrl+V 贴到QQ或其他地方去发送给好友，邀请他们哦！");
	} else {
		alert("由于当前使用的浏览器不允许自动复制，请手工复制邀请链接!");
	}
}


//Gshare

function Gshare(text,pic,url,type){
	var baseUrl=url;
	switch(type){
		case 'qqspace':baseUrl='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?'+'url='+url+'&title='+text+'&desc'+text+'&summary'+text+'&pics='+pic;break;
		//qqspace ["?url", "&title", "&desc", "&summary", "&site", "&pics"]
		case 'renren':baseUrl='http://widget.renren.com/dialog/share?'+'resourceUrl='+top.location+'&srcUrl='+url+'&title='+text+'&pic='+pic;break;
		//renren  ["?resourceUrl", "&srcUrl", "&title", "&description", "&pic"]
		case 'weibo':baseUrl='http://service.weibo.com/share/share.php?'+'url='+url+'&title='+text+'&pic='+pic;break;
		//weibo ["?url", "&title", "&appkey", "&pic"]
		case 'qqweibo':baseUrl='http://share.v.t.qq.com/index.php?c=share&a=index&'+'url='+url+'&title='+text+'&pic='+pic;break;
		//qqweibo ["?c", "&a", "&url", "&title", "&appkey", "&pic"]  c=share&a=index
		case 'douban':baseUrl='http://shuo.douban.com/%21service/share?'+'href='+url+'&text='+text+'&image='+pic;break;
		//douban ["?href", "&name", "&image"]
		
	}
	window.open(baseUrl,'_blank');
	//console.log(baseUrl);
}

function suijiText(){
	var suijitext='';
	var suijiNum=Math.ceil(Math.random()*3);
	//console.log(suijiNum);
	switch(suijiNum){
		case 1:suijitext="哎，要早点用速买易的话，偶一年的话费都不用自己掏腰包了！";break;	
		case 2:suijitext="曾经有一次返利200块的机会，我没有珍惜。如果上天再给我一次机会的话，我网购之前一定记得登陆速买易！淘最多优惠，拿最多返利！不想后悔到泪流满面！那就快去试试吧！";break;	
		case 3:suijitext="赚钱是能力，花钱是技术！虽然我能力有限，但是技术却很高！这就要靠速买易啦！只要你爱淘宝爱网购就不能没有它~通过速买易购物最高返利55%啊！这种便宜都不占？姐妹们速戳啊！";break;
	}
	//console.log(1);
	return suijitext;
}

$(document).ready(function(){
	if($('#shareContent').length){
		var text=suijiText();
		$('#shareContent').val(text);
		var pic="1.jpg";
		var url='www.sumai100.com';
		
		$('.shareIconSina').click(function(){
			text=$('#shareContent').val();
			Gshare(text,pic,url,'weibo');
		});
		$('.shareIconQQspace').click(function(){
			text=$('#shareContent').val();
			Gshare(text,pic,url,'qqspace');
		});
		$('.shareIconQQweibo').click(function(){
			text=$('#shareContent').val();
			Gshare(text,pic,url,'qqweibo');
		});
		$('.shareIconTudou').click(function(){
			text=$('#shareContent').val();
			Gshare(text,pic,url,'douban');
		});
		$('.shareIconRenren').click(function(){
			text=$('#shareContent').val();
			Gshare(text,pic,url,'renren');
		});
	}
	
});


//string01.match(/[&?]([a-zA-Z0-9]+)/g)





//place hold
$(document).ready(function(){
	if($("#searchBar")!=null){
		hasSearch=0;
		
		$("#searchBar").on('focus',function(){
			if(hasSearch==0){
				$(this).val('');
				//console.log(hasSearch);	
			}
			else{
				$("#searchBar").off('focus')
			}
		});
		
		
		
		$('#searchBar').change(function(){
			if($(this).val()!='粘贴“淘宝/天猫/聚划算商品”网址查询返利，如http://item.taobao.com'){
				hasSearch=1;
				//console.log(hasSearch);
			}
			else{
				hasSearch=0;
				//console.log(hasSearch);	
			}	
			
		});
		
		$("#searchBar").on('blur',function(){
			if($(this).val()==''){
				$(this).val("粘贴“淘宝/天猫/聚划算商品”网址查询返利，如http://item.taobao.com");
				hasSearch=0;
				//console.log(hasSearch);
				$("#searchBar").on('focus',function(){
					if(hasSearch==0){
						$(this).val('');
						//console.log(hasSearch);	
					}
					else{
						$("#searchBar").off('focus')
					}
				});
			}	
		});
	}
		
	
});




//scroll top
$(function () {
    $("<div id='class_gotop' style='position:fixed;right:10px;bottom:10px;z-index:100;display:none;'><a id='class_a_gotop' title='回到顶部' style='display:block;_display:none;height:50px;width:50px;background:url(\"img/go_top.gif\") repeat scroll 0 0 transparent;' href='javascript:'></a></div>").appendTo("body");
    $('.postTitle a').hover(function(){
        $(this).attr('title', $(this).text());
    });

  $(window).scroll(
    function () {
      if ($(window).scrollTop() > 500) {
        $("#class_gotop").fadeIn("slow");
      }
      else {
        $("#class_gotop").fadeOut("slow");
      }
    }
  );
  $("#class_a_gotop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 600);
  }).hover(
     function () {
       $(this).attr("style", "display:block;_display:none;height:50px;width:50px;background:url('img/go_top.gif') repeat scroll 0 50px transparent;");
     },
    function () {
      $(this).attr("style", "display:block;_display:none;height:50px;width:50px;background:url('img/go_top.gif') repeat scroll 0 0 transparent;");
    }
  );
});




//brand Tab

$(document).ready(function(){
	$('.brandListTitle ul li a').click(function(){
		$('.brandListTitle ul li').removeClass('current');
		$(this).parent().addClass('current');
		var index=$('.brandListTitle ul li a').index($(this));
		
		$('.brandListMain ul.current').fadeOut('fast').removeClass('current');
		$('.brandListMain ul').eq(index).fadeIn('fast').addClass('current');
		return false;
	});
	
});


//anlysis

/*
$(document).ready(function(){
	var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
    (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
    s.parentNode.insertBefore(g,s)}(document,'script'));
});
*/
           
//3 step hover effects
$(document).ready(function(){
	$('.quickTaobao,.quickTmall,.quickJu').hover(function(){
		ClassName=$(this).attr('class');
		console.log(ClassName);
		$(this).addClass(ClassName+'Hover');
		$(this).find('ul').slideDown('fast');
	},function(){
		$(this).removeClass(ClassName+'Hover');
		$(this).find('ul').slideUp('fast');
	});	
	
}); 

//浮动转固定视图
$(document).ready(function(e) {
	if($('.productLeftMenu').length){	
		t = $('.productLeftMenu').offset().top;
		mh = $('body').height();
		fh = $('.productLeftMenu').height();
		$(window).scroll(function(e){
			s = $(document).scrollTop();	
			if(s > t - 1){
				$('.productLeftMenu').css('position','fixed');
				if(s + fh > mh){
					$('.productLeftMenu').css('top',mh-s-fh+'px');	
				}				
			}else{
				$('.productLeftMenu').css('position','');
			}
		});
	}
});

//product taobao ul lihover
$(document).ready(function(){
	$('.productTaobao ul li').hover(function(){
		$(this).addClass('productHover');
	},function(){
		$(this).removeClass('productHover');
	});
});



//index indexProduct product
$(document).ready(function(){
	$('.indexProduct .product').hover(function(){
		$(this).addClass('productHover');
	},function(){
		$(this).removeClass('productHover');
	});
	
});



//product taobao masonry
$(document).ready(function(){
	$('.productTaobao ul').each(function(){
		var productThis=$(this);
		//console.log(productThis);
		productThis.imagesLoaded(function(){
			productThis.masonry({
			  itemSelector: 'li'
			});	
		});
		
	});
	if($('.productTaobao ul').length){
		$('.brandListTitle ul li a').click(function(){
			$('.productTaobao ul').imagesLoaded(function(){
				$('.productTaobao ul').masonry({
				  itemSelector: 'li'
				});	
			});
		});
	}
});
 
//first visit
$(document).ready(function(){
	Sumai={
		firstBlock:function(){
			
		}
		
	};
	
	
});

//taobao Count msg remaind

$(document).ready(function(){
	/*if(getCookie('firstTaobaoCount')){
		
	}
	else{
		$('.writtingTaobaoCount').show('fast');
	}*/
	
	$('#taobaoCountClose').click(function(){
		//setCookie('firstTaobaoCount','1',365);
		$('.writtingTaobaoCount').hide('fast');
		return false;
	});
});


//fancybox---first board
$(document).ready(function(){
	if($('.popTab').length){
		$(".popTab").fancybox({
			modal:true,
			helpers : {
						title : {
							type : 'over'
						}
					}
		});
		
		//fancy box support
		$('.fancybox-buttons').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
		
			prevEffect : 'none',
			nextEffect : 'none',
		
			closeBtn  : false,
		
			helpers : {
				title : {
					type : 'inside'
				},
				buttons	: {}
			},
		
			afterLoad : function() {
				this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			}
		});
	}
});




//normal question
$(document).ready(function(){
	$('.faq-list dl dt').click(function(){
		if(!$(this).hasClass('showed')){
			$(this).addClass('showed');
			$(this).next().stop(false).slideDown('slow');
		}
		else{
			$(this).removeClass('showed');
			$(this).next().stop(false).slideUp('slow');
		}
	});
});


//subiChange
$(document).ready(function(){
	$('#subiChange').click(function(){
		var subiNum=$('#subiNumber').val();
		ifNum=/\d{4}$/.test(subiNum);
		if(!ifNum){
			alert('请输入合适的数值！');
			return false;
		}
	})
	
});


//first-block  use firstblock() in html to display the firstVisit toturial

function firstblock(){
	$(document).ready(function(){
		if(/msie 6/i.test(navigator.userAgent)||/msie 7/i.test(navigator.userAgent)){
				
		}
		else{
			$('body').prepend('<div class="darkBlock"></div><div class="blockWrapper"><div class="firstBlock"></div></div>')
			$('body').live('click',function(){
				$('.darkBlock').fadeOut('slow')//.remove()
				$('.blockWrapper').fadeOut('slow')//.remove();
			});
		}
	});
}



//message open
$(document).ready(function(){
	$('.myMsgMTitle a').click(function(){
		$this=$(this)
		if($this.parent().parent().parent().hasClass('newMsg')){
			$this.parent().parent().parent().removeClass('newMsg');
			$this.parent().next().show();
			$this.parent().next().removeClass('hidden');
			
		}
		else{
			$this.parent().parent().parent().addClass('newMsg');
			$this.parent().next().hide();	
			$this.parent().next().addClass('hidden');
		}
		return false;
	});
	
});



//shineyWords
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
	shineyWords('#ffc600','#ff0000',500);
	
});


//help-center to faq
$(document).ready(function(){
	if(location.hash!=''&&$(location.hash).length!=0){
		$hash=$(location.hash);
		$hash.click();
		$hash[0].scrollIntoView();	
	}
});



//form verify
$(document).ready(function(){
	if($('.accountVarify').length!=0){
		$('.accountVarify .completInfoSend').click(function(){
			account=$('#payAccount').val();
			phone=$('#phoneAccount').val();
			ifAccountEmail=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/i.test(account);
			ifAccountPhone=/^1[0-9]{10}$/i.test(account);
			ifphonePhone=/^1[0-9]{10}$/i.test(phone);
			
			if(!(ifAccountEmail||ifAccountPhone)){
				alert('请填写正确的支付宝账户！');	
				return false;
			}
			else if(!ifphonePhone){
				alert('请填写正确的手机号码！');
				return false;
			}
			
		});
	
	}
});



//cookie 简单的散装操作
function getCookie(c_name){
　　　　if (document.cookie.length>0){　　
　　　　　　c_start=document.cookie.indexOf(c_name + "=")　　
　　　　　　if (c_start!=-1){ 
　　　　　　　　c_start=c_start + c_name.length+1;
　　　　　　　　c_end=document.cookie.indexOf(";",c_start);
　　　　　　　　if (c_end==-1) c_end=document.cookie.length　　
　　　　　　　　return unescape(document.cookie.substring(c_start,c_end));
　　　　　　} 
　　　　}
　　　　return ""
　　}　　

function setCookie(c_name, value, expiredays){
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie=c_name+ "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}


// cookies
// https://github.com/js-coder https://github.com/js-coder/cookie.js
// methods
// cookie.set('key','value');
//cookie.get('key');
//cookie.all(); 返回一个对象
//cookie.remove('key');
//cookie.empty(); 删除所有的cookie
//cookie.enabled(); 返回布尔值

!function (document, undefined) {
	var cookie = function () {
		return cookie.get.apply(cookie, arguments);
	};
	var utils = cookie.utils =  {
		// Is the given value an array? Use ES5 Array.isArray if it's available.
		isArray: Array.isArray || function (value) {
			return Object.prototype.toString.call(value) === '[object Array]';
		},
		// Is the given value a plain object / an object whose constructor is `Object`?
		isPlainObject: function (value) {
			return !!value && Object.prototype.toString.call(value) === '[object Object]';
		},
		// Convert an array-like object to an array – for example `arguments`.
		toArray: function (value) {
			return Array.prototype.slice.call(value);
		},
		// Get the keys of an object. Use ES5 Object.keys if it's available.
		getKeys: Object.keys || function (obj) {
			var keys = [],
				 key = '';
			for (key in obj) {
				if (obj.hasOwnProperty(key)) keys.push(key);
			}
			return keys;
		},
		// Unlike JavaScript's built-in escape functions, this method
		// only escapes characters that are not allowed in cookies.
		escape: function (value) {
			return String(value).replace(/[,;"\\=\s%]/g, function (character) {
				return encodeURIComponent(character);
			});
		},
		// Return fallback if the value is not defined, otherwise return value.
		retrieve: function (value, fallback) {
			return value == null ? fallback : value;
		}
	};
	cookie.defaults = {};
	cookie.expiresMultiplier = 60 * 60 * 24;
	cookie.set = function (key, value, options) {
		if (utils.isPlainObject(key)) { // Then `key` contains an object with keys and values for cookies, `value` contains the options object.
			for (var k in key) { // TODO: `k` really sucks as a variable name, but I didn't come up with a better one yet.
				if (key.hasOwnProperty(k)) this.set(k, key[k], value);
			}
		} else {
			options = utils.isPlainObject(options) ? options : { expires: options };
			var expires = options.expires !== undefined ? options.expires : (this.defaults.expires || ''), // Empty string for session cookies.
			    expiresType = typeof(expires);
			if (expiresType === 'string' && expires !== '') expires = new Date(expires);
			else if (expiresType === 'number') expires = new Date(+new Date + 1000 * this.expiresMultiplier * expires); // This is needed because IE does not support the `max-age` cookie attribute.
			if (expires !== '' && 'toGMTString' in expires) expires = ';expires=' + expires.toGMTString();
			var path = options.path || this.defaults.path; // TODO: Too much code for a simple feature.
			path = path ? ';path=' + path : '';
			var domain = options.domain || this.defaults.domain;
			domain = domain ? ';domain=' + domain : '';
			var secure = options.secure || this.defaults.secure ? ';secure' : '';
			document.cookie = utils.escape(key) + '=' + utils.escape(value) + expires + path + domain + secure;
		}
		return this; // Return the `cookie` object to make chaining possible.
	};

	// TODO: This is commented out, because I didn't come up with a better method name yet. Any ideas?
	// cookie.setIfItDoesNotExist = function (key, value, options) {
	//	if (this.get(key) === undefined) this.set.call(this, arguments);
	// },

	cookie.remove = function (keys) {
		keys = utils.isArray(keys) ? keys : utils.toArray(arguments);
		for (var i = 0, l = keys.length; i < l; i++) {
			this.set(keys[i], '', -1);
		}
		return this; // Return the `cookie` object to make chaining possible.
	};
	cookie.empty = function () {
		return this.remove(utils.getKeys(this.all()));
	};
	cookie.get = function (keys, fallback) {
		fallback = fallback || undefined;
		var cookies = this.all();
		if (utils.isArray(keys)) {
			var result = {};
			for (var i = 0, l = keys.length; i < l; i++) {
				var value = keys[i];
				result[value] = utils.retrieve(cookies[value], fallback);
			}
			return result;
		} else return utils.retrieve(cookies[keys], fallback);
	};
	cookie.all = function () {
		if (document.cookie === '') return {};
		var cookies = document.cookie.split('; '),
			  result = {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var item = cookies[i].split('=');
			result[decodeURIComponent(item[0])] = decodeURIComponent(item[1]);
		}
		return result;
	};
	cookie.enabled = function () {
		if (navigator.cookieEnabled) return true;
		var ret = cookie.set('_', '_').get('_') === '_';
		cookie.remove('_');
		return ret;
	};
	// If an AMD loader is present use AMD.
	// If a CommonJS loader is present use CommonJS.
	// Otherwise assign the `cookie` object to the global scope.
	if (typeof define === 'function' && define.amd) {
		define(function () {
			return cookie;
		});
	} else if (typeof exports !== 'undefined') {
		exports.cookie = cookie;
	} else window.cookie = cookie;
}(document);
