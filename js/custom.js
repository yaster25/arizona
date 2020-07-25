$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
 
    $('header').addClass('fadeInDown animated').css('animation-delay', '0.2s');
    if(window.innerWidth>1023){
        new WOW().init({
            offset: 300,
            mobile:false, 
            
        });
    }
    $('.sidebar').removeClass('hidden');
});


$(document).ready(function(){
    
    /*fixed header*/
	function showDiv() {
		if ($(window).scrollTop() > 0) {			
			$("#header").addClass('fixed');
		}else {
            $("#header").removeClass('fixed');			
		}
	}
    showDiv();
	$(window).scroll(showDiv);	
	/*fixed header*/
	
	/* smooth scroll to anchor*/
	 $('.scroll').click(function() { 
         $.fancybox.close();
		  var target = $(this.hash);
		  if (target.length) {
			var tt= target.offset().top;	
			var wid=window.innerWidth;
			
			if (wid < 481){
				tt=tt-40;	
			}			 		 
			$('html, body').animate({
			  scrollTop: tt
			}, 1500);		
              
            $('body').removeClass('menu-open');
            $('.sidebar').fadeOut(300); 
            $('.mobile-trigger').removeClass('is-active');
              
			return false;
		  }	   
	  });
    /* smooth scroll to anchor*/    
    
    /* set active menu item*/
    
  
	function activeSection(el){	
        tt=$(el).offset().top;
        /*if(window.innerWidth>480){
            tt=$(el).offset().top;
        }else{
           tt=$(el).offset().top - 84; 
        }      */  
        
		if ($(this).scrollTop() >= tt && $(this).scrollTop() <= tt + $(el).height()) {
			$('.nav-item__link').removeClass('active');			
			$("a[href='" + el + "']").addClass('active');
		}
	}
	activeSection('#top');
	activeSection('#advantages');
	activeSection('#accept');
	activeSection('#steps');
	activeSection('#faq');
	activeSection('#contacts');
	
	$(window).scroll(function(event){
      	activeSection('#top');
      	activeSection('#advantages');
        activeSection('#accept');
        activeSection('#steps');
        activeSection('#faq');
        activeSection('#contacts');
	});
  
	/* set active menu item*/
    
   if($('#range-1').length){
        var stepSlider = document.getElementById('range-1');
        noUiSlider.create(stepSlider, {
            start: [340],
            step: 10,
            connect: 'lower',
            range: {
                'min': [30],
                '50%': [1000, 10],
                'max': [3000]
            },
            pips: {
                mode: 'values',
                values: [30, 1000, 3000],
                density: 1000
            }
        });
       
       var stepSliderValueElement = document.getElementById('range-1-value');
        stepSlider.noUiSlider.on('update', function (values, handle) {
            var Format = wNumb({
                thousand: ' '
            });
            stepSliderValueElement.innerHTML = Format.to ( values[handle] * 1000 );
            
        });
       
   }
    
    if($('#range-2').length){
        var stepSlider2 = document.getElementById('range-2');
        noUiSlider.create(stepSlider2, {
            start: [36],
            step: 1,
            connect: 'lower',
            range: {
                'min': [2],
                'max': [60]
            },
            pips: {
                mode: 'values',
                values: [2, 30, 60],
                density: 1000
            }
        });
       
       var stepSliderValueElement2 = document.getElementById('range-2-value');
        stepSlider2.noUiSlider.on('update', function (values, handle) {
            var Format2 = wNumb({
                thousand: ' '
            });
            stepSliderValueElement2.innerHTML = Format2.to ( values[handle] * 1 );
            
        });
       
   }
    
    $('.calc-tabs-item').on('click', function(){
         var ds=$(this).attr('data-type');
         $('.st-top').removeClass('active').hide();
         $('.st-top-'+ds).fadeIn().addClass('active');
         $('.calc-tabs-item').removeClass('active');
         $(this).addClass('active');
         return false;
    });  
    
    $(".input-phone").mask("+7 (999) 999-99-99");    
    
    $('.form-call').each(function() {  
        $(this).validate({       
            errorElement:'div',
             errorPlacement: function(error, element) {
                element.parent().append(error);
            },
                rules: {
                    c_name: "required",
                    c_phone: "required",
                    agree:"required"
                },
                messages: {
                    c_name: "Необходимо заполнить «Имя».",
                    c_phone: "Необходимо заполнить «Телефон»."	,
                    agree: "Необходимо согласиться с правилами",
                },
                submitHandler: function(){
                    $.fancybox.close();
                    $.fancybox.open({
                        src  : '#popup-thank',
                        type : 'inline',
                        opts : {
                           touch:false,
                            closeExisting: true
                        }
                    });
                     return false;

                }
        });
    });
    
    $('.js-popup-close').click(function(){
        $.fancybox.close();
        return false;
    })

    if($('#timer').length){
        
        var minutes = new Date().getTime() + 30*60*1000;
        
        $('#timer').countdown(minutes).on('update.countdown', function(event) {
          var $this = $(this).html(event.strftime(''
            + '<div class="timer-col">%H<span>час</span></div>'
            + '<div class="timer-col timer-col-2">:</div>'
            + '<div class="timer-col">%M<span>мин</span></div>'
            + '<div class="timer-col timer-col-2">:</div>'
            + '<div class="timer-col">%S<span>сек</span></div>'));
        });
    }
    
    $('.js-slider-examples').each(function () {
          $(this).slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow:1,
            slidesToScroll: 1,
            appendArrows: $(this).parents('.slider-wrapper').find('.slider-arrows'),
            swipeToSlide:true,
            centerMode:false,
            fade:true,
              responsive: [   
                {
                  breakpoint: 992,
                  settings: {
                    adaptiveHeight:true
                  }
                }
              ]
        });
    });
    
    $('.faq-item__title').click(function(){
		$(this).toggleClass('active');
        $(this).next('.faq-item__content').slideToggle();
	})
    
    $('[data-fancybox]').fancybox({
         touch:false,
         closeExisting: true,

    });    

     $('.mobile-trigger').on('click', function(event) {
        if(!$('body').hasClass('menu-open')){
            event.preventDefault();		
            $('body').addClass('menu-open');
            $('.sidebar').fadeIn(300);
            $('.mobile-trigger').addClass('is-active');
            return false;
        }else{
            $('body').removeClass('menu-open');
            $('.sidebar').fadeOut(300); 
            $('.mobile-trigger').removeClass('is-active');
            return false;
        }
         
	});

   
    
 });

