//Slider main
$(document).ready(function() {

  $('.nav li').click(function() {

    /*if($('.nav li').hasclass('active'))
    {
      $('.nav li').removeClass('active');
      $(this).addClass('active');
    },
    else{
      $('.nav li').addClass('active');
    };*/
    $('.nav li').removeClass('active');
      $(this).addClass('active');
    
  });
  $('#TOP').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

    /* Every time the window is scrolled ... */
    $(window).scroll(function(){
        /* Check the location of each desired element */
        $('.numb-list').each( function(i){
            
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1000);

                 $(this).addClass("bounceInUp") ;

            }
            
        }); 
    
    });
    $('.Danh-muc').click(function(){
       $('.mb-select-ctg-mobi').removeClass('bounceInUp');
      $('.mb-select-ctg-mobi').addClass('bounceInDown');
       $('.bl-window').show();
       $('.close-btn').show();
    });

    $('.close-btn').click(function(){
      $('.mb-select-ctg-mobi').removeClass('bounceInDown');
       $('.bl-window').hide();
       $('.close-btn').hide();
    });


});
