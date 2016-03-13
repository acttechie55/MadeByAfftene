$(document).ready(function () {
	var section = $('.section');
	$(".section-content-diff").hide();
	$(".skills-bar-graph").hide();
	$(".recent-work-section").hide();
	$(".home .section-title").hide();
	$(".section-content-edu").hide();
	$(".social ul li i").css("border-color", "#ffd700");
	
	/*Clone Scripts
	========================*/
	
	/*Home Slide - DO NOT CHANGE */
	$('#site-title').clone().appendTo('.home-section').css({"border": "1.3em solid #ffd700", "padding": "2em"});
	/*About Slide - DO NOT CHANGE*/
	$('.first-about-resp, .second-about-resp').clone().appendTo('.about-section').css({"color": "#222222", "text-align":"center", "padding":"2em", "padding-bottom":".5em",  "padding-top":".5em", "margin-bottom":"0em", });
	
	/*Skills Slide - DO NOT CHANGE*/
	$('.skills-bar-graph').clone().appendTo('.skills-section').addClass('inner').show();

	/*Recent Works Slide - DO NOT CHANGE*/
	$('.plat-blog-content').clone().appendTo('.1st-content');
	$('.inc-content').clone().appendTo('.2nd-content');
	$('.grit-content').clone().appendTo('.3rd-content');
	$('.refill-content').clone().appendTo('.4th-content');	
    $('.lawn-content').clone().appendTo('.5th-content');	
	
	/*Education Slide - DO NOT CHANGE*/
	$('.edu-resp').clone().appendTo('.education-section').css({ "position": "absolute", "right": "2em"}).addClass('inner');
	

function toggleAccordion() {
		section.removeClass('active');
		$(this).addClass('active');
	}
	section.click(toggleAccordion);

	
});