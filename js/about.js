$(document).ready(function(){
	$(".header-nav>li").click(function ch(){
	var index=$(this).index();
	$(this).addClass("header-nav-red").siblings().removeClass("header-nav-red");
	});

	$(".help-nav li ").click(function(){
    	$(this).addClass("ulcolor").siblings().removeClass("ulcolor");
    	$(".help-nav li>img").attr("src","../images/help-x-1.png");
    	$(".ulcolor img").attr("src","../images/help-x.png");
    });
});