$(document).ready(function(){

	var frame = $('#photo-frame'),
	images = frame.children(),
	p1 = $(images[0]),
	p2 = $(images[1]),
	p3 = $(images[2]),
	p4 = $(images[3]),

	animate1 = function(){
		p4.css({top:'0px'});
		p1.fadeIn(2000);

		p1.animate({
			top:'-20em'
		},20000,function(){
			p1.fadeToggle(1000,animate2);
		});
	},

	animate2 = function(){
		p1.css({top:'0px'});
		p2.fadeToggle(2000);

		p2.animate({
			top:'-20em'
		},20000,function(){
			p2.fadeToggle(1000,animate3);
		});
	},

	animate3 = function(){
		p2.css({top:'0px'});
		p3.fadeToggle(2000);

		p3.animate({
			top:'-20em'
		},20000,function(){
			p3.fadeToggle(1000,animate4);
		});
	},

	animate4 = function(){
		p3.css({top:'0px'});	
		p4.fadeToggle(2000);

		p4.animate({
			top:'-20em'
		},20000,function(){
			p4.fadeToggle(1000,animate1);
		});
	};

	animate1();

});