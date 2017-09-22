function carousel(carousel, size) {
	var items = [];
	$('#'+carousel.id+' .carousel-inner .item').each(function(){
		$(this).addClass('elem');
		items.push($(this).removeClass('item active'));
		this.remove();
	})
	for (id = 0; id < items.length; ++id) {
		var mod = id % size;
		if (!id)
			$('#'+carousel.id+' .carousel-inner').append('<div class=\'item active\'></div>');
		else if (!mod)
			$('#'+carousel.id+' .carousel-inner').append('<div class=\'item\'></div>');
		$('#'+carousel.id+' .carousel-inner .item').last().append(items[id]);
	}
}

$('.carousel').each(function(){
	carousel(this, 4);
})
