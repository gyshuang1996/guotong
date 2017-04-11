$(document).ready(function(){
	$(".header-nav>li").click(function ch(){
	var index=$(this).index();
	$(this).addClass("header-nav-red").siblings().removeClass("header-nav-red");
	});

	$(".news-content-tilte>ul>li").click(function on(){
	$(this).addClass("news-banner-border").siblings().removeClass("news-banner-border");
	});

    $(".news-page-all>button").click(function bind(){
    	$(this).addClass("news-button-red").siblings().removeClass("news-button-red");
    	var page=$(this).val();
    	// var tet=$(this).text();
    	var jiye=$(".news-jiye").text(page);
    	var index=$(this).index();
    	var len=$(".news-page-all>button").length;
    	if(index==0){
    		$(".prev").attr("disabled","disabled");
    		$(".next").removeAttr("disabled","disabled");
    	}else if(index==len-1){
    		$(".next").attr("disabled","disabled");
    		$(".prev").removeAttr("disabled","disabled");
    	}else{
    		$(".prev").removeAttr("disabled","disabled");
    		$(".next").removeAttr("disabled","disabled");
    	}
    })
    
   $(".next").click(function(){
   	var index=$(".news-jiye").text();
   	$(".news-page-all>button").eq(index).addClass("news-button-red").siblings().removeClass("news-button-red");
   	var page=$(".news-page-all>button").eq(index).val();
    	var jiye=$(".news-jiye").text(page);
    	var len=$(".news-page-all>button").length;
    	if(index==len-1){
    		$(".next").attr("disabled","disabled");
    		$(".prev").removeAttr("disabled","disabled");
    	}else{
    		$(".prev").removeAttr("disabled","disabled");
    		$(".next").removeAttr("disabled","disabled");
    	}
   })

   $(".prev").click(function(){
   	var index=$(".news-jiye").text()-2;
   	$(".news-page-all>button").eq(index).addClass("news-button-red").siblings().removeClass("news-button-red");
   	var page=$(".news-page-all>button").eq(index).val();
    	var jiye=$(".news-jiye").text(page);
    	var len=$(".news-page-all>button").length;
    	if(index==0){
    		$(".prev").attr("disabled","disabled");
    		$(".next").removeAttr("disabled","disabled");
    	}else{
    		$(".prev").removeAttr("disabled","disabled");
    		$(".next").removeAttr("disabled","disabled");
    	}
   })

});
var data={
	carshop:[{
		img:"../images/news/news-right-1.png",
		name:"速腾",
		price:"9.98-18.68万"
	},{
		img:"../images/news/news-right-2.png",
		name:"传祺GS4",
		price:"9.98-18.68万"
	},{
		img:"../images/news/news-right-3.png",
		name:"卡罗拉",
		price:"9.98-18.68万"
	},{
		img:"../images/news/news-right-4.png",
		name:"众泰T600",
		price:"9.98-18.68万"
	}
	],
	news:["热烈祝贺公司2012年6月27日获得中国人们银行颁发的证书","好消息！e彩票招行项目上线啦",
	"2014年度优秀标兵评选盛大启幕","提名人选先进实际公示","真爱至上|520因为爱情"]
}
var car=template("car",data);
var news_content=template("news-content",data);
$("#news-right-carshop").html(car);
$("#news-right-content").html(news_content);