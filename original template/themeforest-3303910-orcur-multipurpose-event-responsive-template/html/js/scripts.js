$(document).ready(function() {

	// ===== External Links ===== //

	$('a[rel=external]').attr('target', 'blank');

	
	// ===== Dropdown Menu ===== //
	$('nav ul li').hover(function() {
		$(this).find('ul:first').stop().slideDown('fast');
	},function(){
		$(this).find('ul:first').stop().slideUp('fast');
	});
	
	// ===== Mobile Menu ===== //
	
	var mobileMenu = $('#mobileNav');
	var mobileCLick = $('a#mobile-menu');
	
	mobileMenu.hide();
	
	mobileCLick.click(function() {
		mobileMenu.slideToggle();
	});
	
	// ===== Counter ===== //

	var dDay = new Date();
				//   year - month - day
	dDay = new Date( 2013, 4, 13);
	$('.counter').countdown({until: dDay});
		
	// ===== Feature Slidier ===== //

	//Center Images
	centerImgs();
	
	//Call Functions on window resize event
	$(window).resize(function(){
    	centerImgs();
    });

	//Center Images Function
	function centerImgs() {
		$('#featuredSlider ul.slides li').each(function() {
			var img 	 	 = $(this).find('img'),
				vpWidth  	 = $(window).width(),
				vpHeight,
				imgHeight	 = img.attr('height'),
				imgWidth	 = img.attr('width'),
				imgRatio	 = imgWidth / imgHeight,
				vpRatio,
				newImgWidth,
				newImgHeight = vpWidth / imgRatio;

			if( vpWidth <= 670 ) {
				img.css({
					'position': 'absolute',
					'width': vpWidth,
					'height': newImgHeight,
					'top': 0
				});
			} else {
				img.css({
					'position': 'absolute',
					'width': vpWidth,
					'height': newImgHeight,
					'top': -(newImgHeight - 500)/2
				});
			}			
		});
	}

	
	// ===== Hover Counter/buy tickets ===== //
	
	$('.buy-tickets').hide();
	
	// Hover Actions
	$('#counter-container').hover(function() {
		$('.counter').hide();
		$('.buy-tickets').fadeIn();
	}, function() {
		$('.buy-tickets').hide();
		$('.counter').fadeIn();
	});
	
	// ===== Speaker's Description hover ===== //
	
	$('.speaker-desc').css('bottom', -70);
	
	$('#speakers li').hover(function() {
		$(this).find('.speaker-desc').animate({bottom: '0'}, 'fast');
	},function() {
		$('.speaker-desc').animate({bottom: '-70'}, 'fast');
	});
	
	// ===== Show/Hide speaker's info ===== //

	$('.speaker-info').hide();
	
	$('<a href="#" class="event-ticker"></a>').appendTo('.event-date');
	
	//hide
	$('.event-date a').click(function(e) {
	  if( !$(this).hasClass('minus') ) {
	  	$(this).addClass('minus');
	  	$(this).parent().nextAll('.speaker-info').slideDown();
	  } else {
	  	$(this).removeClass('minus');
	  	$(this).parent().nextAll('.speaker-info').slideUp();
	  }
	  e.preventDefault();
	});
	
	
	// ===== speakers right margin fix ===== //
	
	$('ul#speakers-main-list li:nth-child(even)').addClass('last');
	$('ul#speakers-secondary-list li:nth-child(3n)').addClass('last');
	
	
	// ===== Scroll To Top ===== //
	var backToTop = $('<a class="scrollTop" href="#">Top</a>');
	
	backToTop.appendTo('body').hide();

	// show/hide back-to-top button
	$(window).scroll(function() {
	
		if ($(window).scrollTop() >= 230) {
		
			backToTop.fadeIn('slow');
			
		} else {
		
			backToTop.fadeOut('fast');
			
		}
	
	});
   
    backToTop .click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
	
	
	// ===== prettyPhoto lightbox ===== //
	$("a[rel^='prettyPhoto']").prettyPhoto({
    	animation_speed: 'fast', /* fast/slow/normal */
    	slideshow: 5000, /* false OR interval time in ms */
    	autoplay_slideshow: false, /* true/false */
    	opacity: 0.80, /* Value between 0 and 1 */
    	show_title: false, /* true/false */
    	allow_resize: true, /* Resize the photos bigger than viewport. true/false */
    	default_width: 500,
    	default_height: 344,
    	counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
    	theme: 'pp_default', /* light_rounded / pp_default / dark_rounded / light_square / dark_square / facebook */
    	horizontal_padding: 20, /* The padding on each side of the picture */
    	hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
    	wmode: 'opaque', /* Set the flash wmode attribute */
    	autoplay: true, /* Automatically start videos: True/False */
    	modal: false, /* If set to true, only the close button will close the window */
    	deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
    	overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
    	keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
    	changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
    	callback: function(){}, /* Called when prettyPhoto is closed */
    	ie6_fallback: true,
    	social_tools: false //<div class="pp_social"><div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="http://www.facebook.com/plugins/like.php?locale=en_US&href='+location.href+'&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div></div>' /* html or false to disable */
    });
	
	
});/* End jQuery */




// ===== Grayscale Images ===== //
//Check if the browser is not IE
if ( !$.browser.msie ) {
	// On window load. This waits until images have loaded which is essential
	$(window).load(function(){
		
		// Fade in images so there isn't a color "pop" document load and then on window load
		$("#sponsors > div img, #carousel .slides img").fadeIn(500);
		
		// clone image
		$('#sponsors > div img, #carousel .slides img').each(function(){
			var el = $(this);
			el.css({"position":"absolute","left":"0"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"998","opacity":"0", "left":"0"}).insertBefore(el).queue(function(){
				var el = $(this);
				el.parent().css({"width":this.width,"height":this.height,"vertical-align": "middle", "position":"relative"});
				el.dequeue();
			});
			this.src = grayscale(this.src);
		});
		
		// Fade image 
		$('#sponsors > div img, #carousel .slides img').mouseover(function(){
			$(this).parent().find('img:first').stop().animate({opacity:1}, 500);
		})
		$('.img_grayscale').mouseout(function(){
			$(this).stop().animate({opacity:0}, 500);
		});		
	});
	
	// Grayscale w canvas method
	function grayscale(src){
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		var imgObj = new Image();
		imgObj.src = src;
		canvas.width = imgObj.width;
		canvas.height = imgObj.height; 
		ctx.drawImage(imgObj, 0, 0); 
		var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
		for(var y = 0; y < imgPixels.height; y++){
			for(var x = 0; x < imgPixels.width; x++){
				var i = (y * 4) * imgPixels.width + x * 4;
				var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
				imgPixels.data[i] = avg; 
				imgPixels.data[i + 1] = avg; 
				imgPixels.data[i + 2] = avg;
			}
		}
		ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
		return canvas.toDataURL();
	}
}