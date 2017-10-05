$('a.unique-collapse').click(function(){
	var target = $(this).attr('data-target');
	var r;
	var	target_id = ((r = /^#(.*) .collapse$/.exec(target)) != null) ? r[1] : null;

	if (target_id) {
		$('.collapse').each(function(){
			if ($(this).parent().attr('id') != target_id)
				$(this).removeClass('in');
		});
	}
})
