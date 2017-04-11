/*图片轮播效果*/
var i= 4;
var index;
var cinter = 0;
$(".box ul li").mouseover(function paly(){
      var index=$(this).index()//获取当前的索引号
      $(".box div a ").eq(index).fadeIn().siblings().fadeOut();
      $(this).addClass("current").siblings().removeClass("current");
  });
var a=setInterval("PicNumClick()",2000);
function PicNumClick() {
    $(".box ul li").eq(cinter).trigger("mouseover");
    cinter= (cinter + 1) % i;
}

