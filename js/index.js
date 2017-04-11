var data={
	news:[{
	title:"安哥拉对中国石油出口跃居之首&nbsp;价格有优势",
	image:"../images/news-2.jpg",
	content:"安哥拉7月打败了中国石油进口市场的传统巨头--沙特阿拉伯和俄罗斯，对中国的石油输出量达到日均110万桶，跃居各国之首...",
	},{
	title:"安哥拉对中国石油出口跃居之首&nbsp;价格有优势",
	image:"../images/news-2.jpg",
	content:"安哥拉7月打败了中国石油进口市场的传统巨头--沙特阿拉伯和俄罗斯，对中国的石油输出量达到日均110万桶，跃居各国之首...",
	}]
}
var html = template('test',data);
	document.getElementById('news-template').innerHTML = html; 
$(document).ready(function(){
	$(".header-nav>li").click(function ch(){
	var index=$(this).index();
	$(this).addClass("header-nav-red").siblings().removeClass("header-nav-red");
	});

	$(".point-2").click(function(){
		$(this).addClass("point-backcolor");
		$(".point-1").removeClass("point-backcolor");
		$(".rgba").addClass("hide");
	});
	$(".point-1").click(function(){
		$(this).addClass("point-backcolor");
		$(".point-2").removeClass("point-backcolor");
		$(".rgba").removeClass("hide");
	})
});
 // 监听鼠标滚动事件
 /* 添加事件监听 注册事件*/
// if(document.addEventListener){
// document.addEventListener('DOMMouseScroll',scrollFunc,false);
// }//W3C（DOMMouseScroll只有firefox支持）
// window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome（onmousewheel firefox不支持）
// 判断滚轮向上或向下在浏览器中也要考虑兼容性，现在五大浏览器（IE、Opera、Safari、Firefox、Chrome）
// 中Firefox 使用detail，其余四类使用wheelDelta；两者只在取值上不一致，
// 代表含义一致，detail与wheelDelta只各取两个 值，detail只取±3，wheelDelta只取±120，
// 其中正数表示为向上，负数表示向下。
// var scrollFunc=function(e){
//     e=e || window.event;
//     var header=document.getElementById("header");
//     if(e.wheelDelta>0||e.detail>0){//IE/Opera/Chrome
//         header.addClass="header-fixed";
//     }else{
//     	header.removeClass="header-fixed";
//     }
