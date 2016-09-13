// JavaScript Document

$(function(){
		
	$("#rec").click(
		function(){
			$(document).scrollTop(0);
		}
	);
	$(document).scroll(
		function(){
			toppos = $(document).scrollTop();
			if(toppos > 30){
				$("#rec").fadeIn();
			}else if(toppos == 0){
				$("#rec").fadeOut();
			}
		}
	);
	$("#section > .actcontent .actcontentbox").eq(0).show().siblings().hide();
	$("#section > ul li").click(
		function(){
			$(this).addClass("bgcolor").siblings().removeClass("bgcolor");
			$("#section > .actcontent .actcontentbox").eq($(this).index()).show().siblings().hide();
		}
	);
	
})












