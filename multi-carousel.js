var carousels = {};
var	elemSize = {width: 290, height: 290};

function multiItemsCarousel_fill(carousel) {
	for (id = 0; id < carousels[carousel.id]['items'].length; ++id) {
		if (!id)
			$(carousel).children('.carousel-inner').append('<div class=\'item active\'></div>');
		else if (!(id % (carousels[carousel.id]['params']['nLines'] * carousels[carousel.id]['params']['itemsPerLines'])))
			$(carousel).children('.carousel-inner').append('<div class=\'item\'></div>');
		$(carousel).children('.carousel-inner').children('.item').last().append(carousels[carousel.id]['items'][id]);
	}
	if ($(carousel).children('.carousel-inner').children('.item').length > 1)
		$(carousel).children('.carousel-control').css('display', 'block');
	else
		$(carousel).children('.carousel-control').css('display', 'none');
}

function multiItemsCarousel_update(carousel) {
	var	itemsPerLines = Math.trunc(carousel.offsetWidth / elemSize.width);
	if (itemsPerLines != carousels[carousel.id]['params']['itemsPerLines']) {
		carousels[carousel.id]['params']['itemsPerLines'] = itemsPerLines;
		$(carousel).children('.carousel-inner').children('.item').each(function() {
			this.remove();
		});
		multiItemsCarousel_fill(carousel);
	}
}

function multiItemsCarousel_init(carousel) {
	if (!carousels[carousel.id]) {
		var	nLines = parseInt($(carousel).attr('multiline'));
		var	itemsPerLines = Math.trunc(carousel.offsetWidth / elemSize.width);
		carousels[carousel.id] = {
			'params': {
				'nLines': (isNaN(nLines) || nLines <= 0) ? itemsPerLines : nLines,
				'itemsPerLines': itemsPerLines
			},
			'items': []
		};
		$(carousel).children('.carousel-inner').children('.item').each(function() {
			var	item = $(this).removeClass('item active').addClass('elem').css({
				'display': 'inline-block',
				'width': elemSize.width+'px',
				'height': elemSize.height+'px'
			});
			carousels[carousel.id]['items'].push(item);
			this.remove();
		});
		$(carousel).css('text-align', 'center');
	}
	multiItemsCarousel_fill(carousel);
}

window.addEventListener('resize', function() {
	$('.carousel.multi-carousel').each(function() {
		multiItemsCarousel_update(this);
	});
});

$('.carousel.multi-carousel').each(function() {
	multiItemsCarousel_init(this);
});
