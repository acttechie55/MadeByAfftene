// var eventFired = 0;

// if ($(window).width() < 960) {
//     alert('Less than 960');

// }
// else {
//     alert('More than 960');
//     eventFired = 1;
// }

// $(window).on('resize', function () {
//     if (!eventFired) {
//         if ($(window).width() < 960) {
//             alert('Less than 960 resize');
//         } else {
//             alert('More than 960 resize');
//         }
//     }
// });

	// function onEverySection() {
	// 	$('body > *').show();
	// 	// section.addClass('active');
	// }



// function responsive() {
// if ($(window).width() > 760) {
// 		$(".section").removeClass("active");
// 	} 
// }
// $('body').click(responsive);

// function responsive() {
// 		if ($(window).width() > 760) {
// 			$("body").removeClass(".structure");
// 			$(toggleAccordion).off();
// 			// $(".section").addClass("active");
// 		} else {
// 			alert('Your function has not worked');
// 		}
// 	}
// 	$("body").onload(responsive);

	
// if ($(window).width() > 760) {
// 	function toggleAccordion() {
// 		section.removeClass('active');
// 		$(this).addClass('active');
// 	}
// 	section.click(toggleAccordion);
// }

	
	
	
	// function onEverySection() {
	// 	$('body > *').show();
	// 	// section.addClass('active');
	// }
	
	// if ($(window).width() < 760) {
	// 	$(toggleAccordion).unbind('click');
	// 	$('.section *').addClass('active');
	// }
	
	// return toggleAccordion; 
	// section.click(toggleAccordion);


	// function responsive() {
	// 	if ($(window).width() < 760) {
	// 		$(toggleAccordion).hide();
	// 		// $("body").removeClass("structure");
	// 		$(".section").addClass("active");
	// 	} 
	// }
	// $("body").show(responsive);
	
	

	// function responsive() {
	// 	if ($(window).width() > 760) {
	// 		$(toggleAccordion).off();
	// 		$(".section").addClass("active");
	// 	} else {
	// 		alert('More than 760');
	// 	}
	// }
	// $("body").on(responsive);
	
	// 	if ($(window).width() > 760) {
	// 			// $(toggleAccordion).off();
	// 			$(".section").addClass("active");
	// 						$(toggleAccordion).click("load");
			
	// 		} else {
	// 			alert('More than 760');
	// 		}
	// }
	
	
	// function makeitAppear() {
	// 	$(".section-about").click(function() {
	// 		$(".section-content-diff").show()
	// 	})
	// }
	
	// section.click(makeitAppear);
	
	// function keepitGone() {
	// 	$(".okay-section").click(function() {
	// 		$(".recent-work-section").hide();
	// 		$(".section-content-diff").hide();
	// 	}
	// 	)
	// }
	
	// section.click(keepitGone);
	
	
	
	
	
	
	
	/*This function works
	========================================*/
	// $(".section-about").click(function () {
	// 	$(".section-content-diff").show();
	// 	$(".recent-work-section").hide();
	// });

	// $(".okay-section").click(function () {
	// 	$(".recent-work-section").hide();
	// 			$(".section-content-diff").show();
	// });
	
	// $(".section-rw").click(function () {
	// 	$(".recent-work-section").show();
	// });
	
	
	/* Another Way To Do It
	=================================
	
	1) Create a class that has a property for display none.
	2) Create a function that applies this class to every non-active slide
	
	===================================*/
	
	// var $about = $('.section-about'),
	// 	$edu = $('.section-content-edu'),
	// 	visible = true;

	// $about.click(function () {
	// 	if (visible) {
	// 		$edu.slideUp('fast', function () {
	// 			$edu.addClass('hide')
	// 				.slideDown(0);
	// 		});
	// 	} else {
	// 		$edu.slideUp(0, function () {
	// 			$edu.removeClass('hide')
	// 				.slideDown('fast');
	// 		});
	// 	}
	// 	visible = !visible;
	// });
	
	
	// section.on('click', toggleAccordion);

	// function noInfo() {
	// 	if ($('.section-about').hasClass("active")) {
	// 		$(".section-content-diff").show();
	// 	}
	// }
	
	// return noInfo.load();
	// function noInfo() {
	// 	if (!$('active').hasClass(section)) {
	// 		section.hideClass('.section-content');
	// 	}
	// }
	
	/*This Kinda Works
=========================*/
// function makeResponsive() {
//   if ($('body').width() < 760) {
//   ('.structure').removeClass('active');
//   console.log('This is working');
// }
// // };
// function makeResponsive() {
//   if ($('body').width() < 760) {
//     section.removeClass('active');
//     section.off('click',toggleAccordion);
//     alert('This is working');
//   }
// };
// $('body').on('resize', function () {
//   if ($('body').width() < 760) {
//     section.removeClass('active');
//     alert('active class is off responsive design');
//   }
// });
