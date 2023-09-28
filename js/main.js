$(function(){

$('.slider__inner, .news__slider-inner').slick({
  nextArrow:  '<button type="button" class="slick-btn slick-next"></button>',
  prevArrow:  '<button type="button" class="slick-btn slick-prev"></button>',
  infinite: true
});

  $('select').styler();
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors){
  anchor.addEventListener("click",function(event){
    event.preventDefault();
    const blockID= anchor.getAttribute('href')
    document.querySelector(''+ blockID).scrollIntoView({
      behavior: "smooth",
      block:"start"
    })
  })
}
});
$(document).ready(function() {
  
  $('#but1').click(function(){
    $('#modal').fadeIn(300);
  });
  $('#modal').on('click', function(e){
    if (e.target.id == 'modal'){
      $(this).hide();
    }  
  });
  
  $('#but2').click(function(){
    $('#form2').show(300);
  });
  
});