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

//toggle
 
$("#flip-link").on("click",function(){
    if($(".flip-box").css("transform") == 'none') {
        $(".flip-box").css("transform","rotateY(180deg)");
        //$(".flip-box img").attr("src","images/phone1.png");
    }
    else {
        $(".flip-box").css("transform","");
        //$(".flip-box img").attr("src","images/phone1.png");
    }
})

$("#flip-link1").on("click",function(){
    if($(".flip-box1").css("transform") == 'none') {
        $(".flip-box1").css("transform","rotateY(180deg)");
        //$(".flip-box img").attr("src","images/phone1.png");
    }
    else {
        $(".flip-box1").css("transform","");
        //$(".flip-box img").attr("src","images/phone1.png");
    }
})

$("#flip-link2").on("click",function(){
    if($(".flip-box2").css("transform") == 'none') {
        $(".flip-box2").css("transform","rotateY(180deg)");
        //$(".flip-box img").attr("src","images/phone1.png");
    }
    else {
        $(".flip-box2").css("transform","");
        //$(".flip-box img").attr("src","images/phone1.png");
    }
})
});