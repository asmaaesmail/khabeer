

$(document).ready(function () {


	var scroltopbtn = $("#top");
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			scroltopbtn.fadeIn();
		} else {
			$(scroltopbtn).fadeOut();
		}
	});
	scroltopbtn.on('click', function () {
		$('html , body').animate({
			scrollTop: 0
		}, 600);
	});

});


$(".clickme").click(function () {
	$(".f").slideToggle();
	$("i").toggle();
});
/****************************************************/
/**********type script***************/
/****************************************************/
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-11539016-1']);
_gaq.push(['_trackPageview']);

(function () {
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
})();