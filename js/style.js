$isLargeScreen = false;

$(document).ready(function(){
	var width = $(document).width();
	console.log(width);

	// check screen width
	if (width> 1500) {
		$isLargeScreen = true;

		$('.ads-left').css({"left":"70px"});		
		$('.ads-right').css({"right":"70px"});
		$('.fixed-ads img').css({"width":"180px"});

		$('.fixed-social').css({"position":"absolute","top":"0px"});

	} else {
		$isLargeScreen = false;
		$('.ads-left').css({"left":"0px"});
		$('.ads-right').css({"right":"0px"});
	}

});

// detect scroll to fixed ads
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height  > 205) {
    	$('.ads-list').css({"position":"fixed", "top":"0px"});

    	if ($isLargeScreen) {    		
		$('.fixed-social').css({"position":"fixed","top":"0px"});
    	} else {
		$('.fixed-social').css({"position":"fixed","top":"295px"});    		
    	}
    } else {
    	$('.ads-list').css({"position":"absolute","top": "200px"});

    	if ($isLargeScreen) {    		
		$('.fixed-social').css({"position":"absolute","top":"0px"});
    	} else {
		$('.fixed-social').css({"position":"absolute","top":"-100px"});    		
    	}
    }

    var leng = $(document).height() - height; 
    if (leng <1180) {
    	$('.ads-list').css({"position":"absolute","top": $(document).height()-1200+"px"});
    }

    // console.log(leng);
});

