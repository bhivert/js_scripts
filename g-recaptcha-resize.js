function g_recaptcha_resize() {
	var item = $('div#g-recaptcha div.g-recaptcha');
	var final_width = parseInt(item.css('width'));
	var ratio = final_width / 304;

	if (ratio > 1)
		ratio = 1;
	item.css('-ms-transform', 'scale('+ratio+','+ratio+')');
	item.css('-webkit-transform', 'scale('+ratio+','+ratio+')');
	item.css('transform', 'scale('+ratio+','+ratio+')');
}

g_recaptcha_resize();
window.addEventListener('resize', g_recaptcha_resize);
