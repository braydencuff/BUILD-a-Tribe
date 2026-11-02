(function($){
  $.fn.brickPop=function(options){
    var s=$.extend({delay:150,speed:600},options);
    return this.each(function(i){
      $(this).css({opacity:0,marginTop:'20px'}).delay(i*s.delay).animate({opacity:1,marginTop:'0px'},s.speed);
    });
  };
})(jQuery);
$(function(){
  $('.card').brickPop({delay:200});
  $('#contactForm').on('submit',function(e){
    e.preventDefault();
    $('#thanks').text('Thank you! We will reply as soon as we can.');
    this.reset();
  });
});
