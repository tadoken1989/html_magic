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
});
