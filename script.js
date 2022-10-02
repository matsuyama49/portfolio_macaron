//ファースト画面
$(function(){
  $("#splash").delay(2000).fadeOut('slow');
  $("#splash_logo").delay(1000).fadeOut('slow');
});


//メイン画像フェード
$(".slider").slick({
  autoplay: true,
  fade: true,
  autoplaySpeed: 4000,
  speed: 2500,
  infinite: true,
  arrows: false,
  dots: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
});

$(function(){
   $(window).on('load scroll', function() {
      var winScroll = $(window).scrollTop();
      var winHeight = $(window).height();
      var scrollPos = winScroll + (winHeight * 0.8);

      $(".show").each(function() {
         if($(this).offset().top < scrollPos) {
            $(this).css({opacity: 1, transform: 'translate(0, 0)'});
         }
      });
   });
});

$(function(){
	$('.btn-border').each(function(){
		$(this).on('click', function(){
			var target = $(this).data('target');
			var modal = document.getElementById(target);
			console.log(modal);
			$(modal).fadeIn();
			return false;
		});
	});
	$('.modalClose,.modal-main,.modal-bg').on('click',function(){
		$('.js-modal').fadeOut();
		return false;
	});
});

$(function (){
	$('.burger').click(function (){
		$(this).toggleClass('nav-active');
    $('.gnavi').css('display', 'block');
		if($(this).hasClass('nav-active')){
			$('.gnavi').addClass('nav-active');
		}
		else{
			$('.gnavi').removeClass('nav-active');
		}
    $('.burger').toggleClass('toggle');
	})
})
