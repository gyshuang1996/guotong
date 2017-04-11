$(document).ready(function(){
	$(".header-nav>li").click(function ch(){
	var index=$(this).index();
	$(this).addClass("header-nav-red").siblings().removeClass("header-nav-red");
	});
});
var data={
	dynamic:[{title:'国通"红色"',smalltitle:"储油卡",img:"../images/dynamic-red.png"},
	{title:'国通"蓝色"',smalltitle:"储油卡",img:"../images/dynamic-blue.png"},
	{title:'国通加油',smalltitle:"抵扣币",img:"../images/dynamic-3.jpg"},
	{title:'国通',smalltitle:"黑金卡",img:"../images/dynamic-4.jpg"},
	{title:'国通',smalltitle:"黑金卡",img:"../images/dynamic-4.jpg"},
	{title:'国通',smalltitle:"黑金卡",img:"../images/dynamic-4.jpg"}]
	}
var dynamic=template("dynamic",data);
document.getElementById('dynamic-template').innerHTML=dynamic;
$(function(){
    var page = 1;
    var i = 4; //每版放4个图片
    //向后 按钮
    $(".right").click(function(){    //绑定click事件
   var content = $("div#dynamic-content");
   var content_list = $("ul#dynamic-template");
   var v_width = content.width();
   var len = content.find("li").length;
   var page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
   if( !content_list.is(":animated") ){    //判断“内容展示区域”是否正在处于动画
     if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
    content_list.animate({ left : '0px'}, "slow"); //通过改变left值，跳转到第一个版面
    page = 1;
     }else{
    content_list.animate({ left : '-='+v_width }, "slow");  //通过改变left值，达到每次换一个版面
    page++;
    }
   }
   });
    //往前 按钮
    $(".left").click(function(){
      var content = $("div#dynamic-content");
   var content_list = $("ul#dynamic-template");
   var v_width = content.width();
   var len = content.find("li").length;
   var page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
   if(!content_list.is(":animated") ){    //判断“内容展示区域”是否正在处于动画
     if(page == 1 ){  //已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
     content_list.animate({ left : '-='+v_width*(page_count-1) }, "slow");
    page = page_count;
   }else{
    content_list.animate({ left : '+='+v_width }, "slow");
    page--;
   }
  }
    });
});

$('.dynamic-card').click(function on(){
 	$(this).addClass("dynamic-border").siblings().removeClass("dynamic-border");
 	});

 $(function(){
    var dynamic_height = $(".dynamic").offset().top;//计算动态图到网页顶部的距离
    $(window).scroll(function(){
        var this_scrollTop = $(this).scrollTop();//计算滚动条的距离
        if(this_scrollTop>dynamic_height ){
            $('.dynamic').addClass("dynamic-fixed");
            console.log(1);
        }else{
          $('.dynamic').removeClass("dynamic-fixed");
        }
    });
});