window.onscroll=function(){
	var scrollTop=document.documentElement.scrollTop;
	if(scrollTop>137){
		$("header").css("top",-137+"px");
	}
	else{
		$("header").css("top",0+"px");
	}
}

window.onload=function(){
	var width=window.innerWidth;
	$(".banmd").css("width",width);
	$(".banmd>ul").css("width",5*width);
	$(".banmd>ul>li").css("width",width);
	$(".banmd>ul").css("margin-left",-width);
}

window.onresize=function(){
	var width=window.innerWidth;
	$(".banmd").css("width",width);
	$(".banmd>ul").css("width",5*width);
	$(".banmd>ul>li").css("width",width);
	$(".banmd>ul").css("margin-left",-width);
}

function banmd(){
	var index=1;
	var width=window.innerWidth;
	var ml=-(width*index);
	this.gothis=function(){
		$(".banmd>ul").animate({marginLeft:ml},500,function(){
			if(index>=4){
				index=1;
			}
			if(index<=0){
				index=3;
			}
			ml=-(width*index);
			$(".banmd>ul").css("margin-left",ml+"px");
		})
	}
	this.pven=function(){
		index--;
		this.gothis();
	}
	this.next=function(){
		index++;
		this.gothis();
	}
}
function banmd2(){
	var index=2;
	var ml=-(1470*index)
	this.gothis=function(){
		$(".sb-lunbo2>ul").animate({"marginLeft":ml},500,function(){
			if(index>=7){
				index=2;
			}
			if(index<=2){
				index=6;
			}
			ml=-(1470*index);
			$(".sb-lunbo2>ul").css("margin-left",ml+"px");
		})		
	}
	this.pven=function(){
		index--;
		this.gothis();
	}
	this.next=function(){
		index++;
		this.gothis();
	}
}
var b=new banmd();
var bo=new banmd2();
