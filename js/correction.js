function toggle() {
	if ($('.section-about').hasClass('active')) {
		$(".section-content-diff").show();
	} else {
		$(".section-content-diff").hide();
	}
	if  (!$(".section-rw").hasClass('active')) {
		$(".recent-work-section").hide();
	} else {
		$(".recent-work-section").show();
	}
	if ($('.home').hasClass('active')) {
		$(".home .section-title").hide();
	} else {
		$(".section-title").show();
	}
	if ($('.section-edu').hasClass('active')) {
		$(".section-content-edu").show();
	} else {
		$(".section-content-edu").hide();
	}
	if (!$(".home").hasClass('active')) {
		// $(".home-title").hide();
		$(".home-title").css({"display":"none"});
	} else {
		$(".home-title").show();
	}
	if($('.skills').hasClass('active')) {
		$(".skills-bar-graph").show();
	} else {
		$(".skills-bar-graph").hide();
	}
}

$('body').click(toggle);

function contactcolor() {
	if ($('.not-home').hasClass('active')) {
		$(".social ul li i").css("border-color", "#999999");
		$(".social ul li a").css("font-weight", "bold").css("color", "#222222");
	} else {
		$(".social ul li i").css("border-color", "#ffd700");
		$(".social ul li a").css("font-weight", "normal").css("color", "#ffffff");;
	}
}

$('body').click(contactcolor);

$(".header").click(function () {

    $header = $(this);
    $content = $header.next();
    $content.slideToggle(500, function () {
    });

});	


