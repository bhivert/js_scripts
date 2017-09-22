document.addEventListener('scroll', function(event){
	if ($(document).scrollTop() == 0) {
		$('#scroll-up').css('display', 'none');
	} else {
		$('#scroll-up').css('display', 'block');
	}
});

function scroll_inc(inc) {
	var diff = $(document).scrollTop() - inc;

	$(document).scrollTop(diff);
	if (diff <= 0)
		return ;
	setTimeout(scroll_inc, 30, inc);
}

$('#scroll-up .arrow-up').click(function(){
	var inc = $(document).scrollTop() / 30;
	scroll_inc(inc);
});
