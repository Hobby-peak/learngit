$(".hb-munes>li").mouseenter(function(){
	if($(this).find(".muensli").length<1){
		return;
	}
	var count=$(this).find(".muensli>li").length;
	var height=count*50;
	$(this).find(".muensli").height(height);
})
$(".hb-munes>li").mouseleave(function(){
	$(this).find(".muensli").height(0);
})

