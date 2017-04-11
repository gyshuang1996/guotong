var data={
	page:[{
		index:0,
		content:"我是0号内容"
	},{
		index:1,
		content:"我是1号内容"
	}]
}
function GetQueryString(id)
{
     var reg = new RegExp("(^|&)"+ id +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
var index=GetQueryString("id");

	console.log(data.page[index])
	var page_content=data.page[index]
	var html=template("test",page_content);
document.getElementById('text').innerHTML=html;

