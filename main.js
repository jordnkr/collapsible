$(document).ready(function() {
	$('#navbar').hide();
	
	$(window).scroll(function() {
		if ($(window).scrollTop() > 185) {
			$('#navbar').slideDown('fast');
		} else {
			$('#navbar').slideUp('fast');
		}
	});
});