jQuery(function(){
    $('.back-topp').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
	var quati = '&quantity=1';
	$('.quantity .plus').click(function(e) {
		$(this).parents('.infor-tourist').find('.action-tour').addClass('active');
		$(this).parents('.infor-tourist').removeClass('active');
		var icput = $(this).parents('.quantity').find('.input-text.qty');
		var val = parseInt(icput.val()) + 1;
		icput.attr('value',val).val(val);
		return false;
	});
	$('.quantity').on('click', '.minus', function(e) {
		var icput = $(this).parents('.quantity').find('.input-text.qty');
		var val = parseInt(icput.val()) - 1;
		if(val >= 0) {
			icput.attr('value',val).val(val);
		}
	});
	
	$('.infor-tourist .action-tour').on('click',function(){
		$('body').addClass('hasCart');
		$('.infor-tourist .action-tour').removeClass('zoom');
		$(this).addClass('zoom');
		$('#cartNumber').addClass('zoom');
		setTimeout(function() {
		    $('#cartNumber').removeClass('zoom');
		}, 1000);
		return false;
	});
	// Menu mobile
	$('.toggle-menu').on('click',function(){
		var thi = $(this);
		$('#header .header-right').slideToggle();
		if($(this).hasClass('active')) {
			thi.removeClass('active');
			setTimeout(function() {
			   thi.addClass('step1').removeClass('step2');
			}, 200);
		} else {
			thi.addClass('active step1');
			setTimeout(function() {
			   thi.addClass('active step2').removeClass('step1');
			}, 200);
		}
		$('.transform-menu').toggleClass('active');
		$('#header .search-form').addClass('animated fadeInLeft');
		$('#header .menu-main ul li:first-child').addClass('animated animated-delay2 fadeInLeft');
		$('#header .menu-main ul li:nth-child(2)').addClass('animated animated-delay3 fadeInLeft');
		$('#header .menu-main ul li:nth-child(3)').addClass('animated animated-delay4 fadeInLeft');
		$('#header .menu-main ul li:nth-child(4)').addClass('animated animated-delay5 fadeInLeft');
		$('#header .menu-main ul li:nth-child(5)').addClass('animated animated-delay6 fadeInLeft');
		$('#header .menu-main ul li:nth-child(6)').addClass('animated animated-delay7 fadeInLeft');
		$('#header .select-language .it-select').addClass('animated animated-delay6 fadeInLeft');
		return false;
	});
	$('.transform-menu').on('click',function(){
		$('.toggle-menu').click();
	});

	//Show popup
	$('.show-popup').on('click',function(){
		var href = $(this).attr('href');
		$(href).toggleClass('active');
		$('#productCart').removeClass('active');
		return false;
	});
	if($(window).width()>767){
		$('.cart-number').mouseenter(function(){
			$('#productCart').addClass('active');
		});
	}
	
	$('#productCart .content-popup').mouseleave(function(){
		$(this).parents('#productCart').removeClass('active');
	});
	$('.bg-transform').on('click',function(){
		$(this).removeClass('active');
		$('.popup').removeClass('active');
		$('.toogle-menu').removeClass('active');
	});

	$('.close-popup').on('click',function(){
		$('.popup').removeClass('active');
		$('.bg-transform').removeClass('active');
		return false;
	});

	$('.close-cart-item').on('click',function(){
		$(this).parents('.cart-detail-item').hide();
		var count = $('#productCart .cart-detail-item:visible').length;
		if(count==0){
			$(this).parents('#productCart').hide();
		}
		return false;
	});

	$('.cart-number,.btn-commander').on('click',function(){
		$('.content-payment .my-cart').addClass('animated animated-delay4 fadeIn');
		var ic = 3;
		$('.content-payment .content-cart-detail .cart-detail-item').each(function() {
			var thi = $(this);
			var jc = ic + 1;
			thi.addClass('animated animated-delay'+ic+' fadeInRight');
			ic += 3;
		});
		var sp = ic + 2;
		var bp = ic + 4;
		$('.content-payment .sub-payment').addClass('animated animated-delay'+sp+' fadeIn');
		$('.content-payment .bottom-ppayment').addClass('animated animated-delay'+bp+' fadeIn');
		setTimeout(function() {
			$('.content-payment .my-cart').removeClass('animated animated-delay4 fadeIn');
			var i = 3;
			$('.content-payment .content-cart-detail .cart-detail-item').each(function() {
				var thi = $(this);
				var j = i + 1;
				thi.removeClass('animated animated-delay'+ic+' fadeInRight');
				i += 3;
			});
			var sp = ic + 2;
			var bp = ic + 4;
			$('.content-payment .sub-payment').removeClass('animated animated-delay'+sp+' fadeIn');
			$('.content-payment .bottom-ppayment').removeClass('animated animated-delay'+bp+' fadeIn');
		}, 1500);
	});

	$('.payment-action').on('click',function(){
		$('#payment').toggleClass('current');
		$('#payment-prev').addClass('animated fadeIn');
		$('.content-payment-next').addClass('animated fadeIn');
		return false;
	});

	$('.nav-collapse').on('click',function(){
		if($(this).hasClass('current')){
			$(this).removeClass('current');
			$(this).siblings(".tab-main-product .collapse").slideUp();
		}else{
			$(".nav-collapse").removeClass("current");
	      	$(this).addClass("current");
	      	$(".collapse").slideUp();
	      	$(this).siblings(".tab-main-product .collapse").slideDown();
    	}		$('html, body').animate({scrollTop: $('#accordion').offset().top - $('#header').outerHeight()}, 600);
		return false;
	});

	$('.prequired-item .check-payment .form-check .form-check-label,.works-dropdown').on('click',function(){
		$(this).toggleClass('active');
		$(this).parents('.list-guide-works').find('ul').slideToggle();
		return false;
	});

	$('.choose-method li a').on('click',function(){
		$('.choose-method li a').removeClass('active');
		$(this).addClass('active');
		return false;
	});
	$('#header .show-language').click(function () {
      	$('#header .list-language-show').toggleClass('active');
      	return false;
   });
	$('#header .list-language-show li').on('click',function(){
		var tex = $(this).find('a').html();
		$('#header .show-language span').html(tex);
		$('#header .list-language-show').toggleClass('active');
		return false;
	});
	
	$(document).on('click',function(e){
		if( !$(e.target).is('.list-language-show') && !$(e.target).is('.list-language-show *')){
			$('.list-language-show').removeClass('active');
		}
	});

	mapticket();
});
jQuery(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		$('.back-topp').addClass('active');
	} else {
		$('.back-topp').removeClass('active');
	}
});
jQuery(window).load(function(){
	//Slick brand
	$('.section-brand ul').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
 	    autoplaySpeed: 4000,
		arrows: false,
		dots: false,
		responsive: [
			{
			  breakpoint: 601,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				focusOnSelect: true,
			  }
			},
			{
			  breakpoint: 361,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				focusOnSelect: true,
			  }
			},
		]
	});	
	
	//Slider-packages
	$('.slider-packages').slick({
	   slidesToShow: 3,
	   slidesToScroll: 1,
	   arrows: true,
	   responsive: [
			{
			  breakpoint: 800,
			  settings: {
				slidesToShow: 2,
	   			slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
       			centerMode: true,
       			arrows: false,
			    slidesToShow: 1,
			    slidesToScroll: 1,
			  }
			},
		]
	});
	$widthBig  = jQuery(window).width();
	if($widthBig < 576){
		$('.bxslider-img').bxSlider({
			controls: false,
			infiniteLoop: false,
			adaptiveHeight: true,
		});
	}else{
		$('.bxslider-img').bxSlider({
			pagerCustom: '#bx-img',
			controls: false,
			infiniteLoop: false,
			adaptiveHeight: true,
			mode: 'fade',
		});
	}

	$width  = jQuery(window).width();
	if( $width < 769){
		$('.bx-img').bxSlider({
			minSlides: 4,
			maxSlides: 4,
			moveSlides: 1,
			pager: false,
			controls: false,
			slideWidth: 101.2,
			slideMargin: 15
		});
	}else{
		$('.bx-img').bxSlider({
			minSlides: 5,
			maxSlides: 5,
			moveSlides: 1,
			pager: false,
			controls: false,
			slideWidth: 101.2,
			slideMargin: 20
		});
	}
	$('.loadingsite').fadeOut();
});
function mapticket(){
	if($('.wrap-google-map').length ) {
		$('.wrap-google-map').each(function(){
			var latitude = $(this).attr('data-latitude')*1,
				longitude = $(this).attr('data-longitude')*1,
				map_zoom = $(this).attr('data-zoom')*1,
				icon = $(this).attr('data-icon');
			var map_options = {
				center: new google.maps.LatLng(latitude, longitude),
				zoom: map_zoom,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				// scrollwheel: false,
			}
			var map = new google.maps.Map(document.getElementById('google-container'), map_options);	
			geocoder = new google.maps.Geocoder();
			
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(latitude, longitude),
				map: map,
				draggable: true,
				icon: icon,
			});
		});
	}
}
