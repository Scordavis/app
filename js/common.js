// $(function() {

// 	$('body').fadeOut(1500);

// });

$(document).ready(function() {
	


	  // thanks modal remove
  $('.form-thanks > .thanks_wrapper > .thanks_text > .thanks_close').click(function() {
  	$('.form-thanks > .thanks_wrapper').removeClass('active');	    
		// $('.form-thanks > .thanks_wrapper').removeClass('active');	    
	});


  // SmoothScroll to-top
	var scroll = new SmoothScroll('.to-top');


	// AOS
	AOS.init();
	
	// bootstrap-tabcollapse
	$('#menuTabs').tabCollapse();

	// tab switcher
	// Javascript to enable link to tab
	var url = document.location.toString();
	if (url.match('#')) {
		$('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
	};
	// Change hash for page-reload
	$('.nav-tabs a').on('shown.bs.tab', function (e) {
		window.location.hash = e.target.hash;
	});

	// form
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "js/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.form-thanks .thanks_wrapper').addClass('active');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$.fancybox.close();
			}, 5000);
		});
		return false;
	});



 




 
});
