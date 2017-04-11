$(document).ready(function(){
	$(".header-nav>li").click(function ch(){
	var index=$(this).index();
	$(this).addClass("header-nav-red").siblings().removeClass("header-nav-red");
	});
});