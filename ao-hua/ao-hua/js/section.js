window.onscroll = function () {
	var scrollTop = document.documentElement.scrollTop;
	if (scrollTop > 137) {
		$("header").css("top", -137 + "px");
	} else {
		$("header").css("top", 0 + "px");
	}
}

window.onload = function () {
	var width = window.innerWidth;
	$(".banmd").css("width", width);
	$(".banmd>ul").css("width", 5 * width);
	$(".banmd>ul>li").css("width", width);
	$(".banmd>ul").css("margin-left", -width);
}

window.onresize = function () {
	var width = window.innerWidth;
	$(".banmd").css("width", width);
	$(".banmd>ul").css("width", 5 * width);
	$(".banmd>ul>li").css("width", width);
	$(".banmd>ul").css("margin-left", -width);
}

// function banmd() {
// 	var index = 1;
// 	var width = window.innerWidth;
// 	// var ml = -(width * index);
// 	this.gothis = function () {
// 		// $(".banmd>ul").animate({
// 		// 	marginLeft: ml
// 		// }, 500)
// 		if (index >= 4) {
// 			index = 1;
// 		}
// 		if (index <= 0) {
// 			index = 3;
// 		}
// 		ml = -(width * index);
// 		setInterval(function () {
// 			$(".banmd>ul").css("margin-left", ml + "px");
// 		}, 500)
// 	}
// 	this.pven = function () {
// 		index--;
// 		this.gothis();
// 	}
// 	this.next = function () {
// 		index++;
// 		this.gothis();
// 	}
// }

function baner2() {
	var index = 2;
	this.gotoIndex = function () {
		var mf = -index * 1470;
		var bActiveLeft = 0;
		if (index < 7) {
			bActiveLeft = (index - 2) * 22;
			$(".active-index").text(index - 1)
		}
		if (index >= 7) {
			bActiveLeft = 0; //
			$(".active-index").text(1)
		}
		if (index < 2) {
			bActiveLeft = 4 * 22;
			$(".active-index").text(5)
		}
		$(".b-active").css("left", bActiveLeft + "px");
		$(".baner2>ul").animate({
			"marginLeft": mf + "px"
		}, 500, function () {
			if (index >= 7) {
				index = 2;
			}
			if (index <= 1) {
				index = 6;
			}
			mf = -index * 1470;
			$(".baner2>ul").css("marginLeft", mf + "px");
		})
	}
	this.prev = function () {
		index--;
		this.gotoIndex()
	};
	this.next = function () {
		index++;
		this.gotoIndex()
	};
}

var b2 = new baner2();
$(".btn-prev").click(function () {
	b2.prev()
})
$(".btn-next").click(function () {
	b2.next();
})
// var b = new banmd();
// var bo = new baner2();