$(document).ready(function(){

    $('#uparrow').on('click', function(e) {  
      var target = $(this.hash);
    target = $('#section1')
    if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 950);
        return false;
    }

});

//portfolio

$('#portfolio').on('click', function(e) {  
    var target = $(this.hash);
  target = $('#section1')
  if (target.length) {
      $('html,body').animate({
          scrollTop: target.offset().top
      }, 950);
      return false;
  }

});


$('#uparrow1').on('click', function(e) {  
      var target = $(this.hash);
    target = $('#section2')
    if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 950);
        return false;
    }

});
$('#uparrow2').on('click', function(e) {  
      var target = $(this.hash);
    target = $('#section3')
    if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 950);
        return false;
    }

});

//about me

$('#about').on('click', function(e) {  
    var target = $(this.hash);
  target = $('#section3')
  if (target.length) {
      $('html,body').animate({
          scrollTop: target.offset().top
      }, 950);
      return false;
  }

});

$('#uparrow3').on('click', function(e) {  
      var target = $(this.hash);
    target = $('#section4')
    if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 950);
        return false;
    }

});
//contact

$('#contact').on('click', function(e) {  
    var target = $(this.hash);
  target = $('#section4')
  if (target.length) {
      $('html,body').animate({
          scrollTop: target.offset().top
      }, 950);
      return false;
  }

});

});