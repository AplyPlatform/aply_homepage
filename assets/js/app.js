let pageFileTable = {
	"main" : "main.html",
	"about" : "about.html",
	"service" : "service.html",
	"team" : "team.html",
	"contact" : "contact.html",
	"recruit" : "recruit.html",
};

let isRecaptchaInit = false;


(function ($) {
  "use strict";
  
  var fn = {
    // Launch Functions
    Launch: function () {
      fn.Header();
      fn.Masonry();
      fn.AOS();
      fn.ImageView();
      fn.Typed();
      fn.Swiper();
      fn.Vivus();
      fn.Overlay();
      fn.OwlCarousel();
      fn.Apps();
    },

    Header: function (){
      $("header").headroom({
        tolerance : 0
      });
    },

    ImageView: function() {
      $('.lightbox').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
          verticalFit: true
        }
      });

      $('.gallery').each(function() { // the containers for all your galleries
          $(this).magnificPopup({
              delegate: '.photo > a', // the selector for gallery item
              type: 'image',
              mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
              gallery: {
                enabled:true
              }
          });
      });
      
      $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
      });
    },

    Typed: function() {
      if( $('#typed').length ) {
        var typed = new Typed("#typed", {
          stringsElement: '#typed-strings',
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
          startDelay: 200,
          loop: true
        });
      }
    },

    Masonry: function() {
      var $grid = $('.masonry').masonry({
        itemSelector: '.masonry > *',
      });

      $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
      });
    },


    AOS: function() {

    },


    // Swiper
    Swiper: function() {

      $('.swiper-container').each(function(index, element){
        var $this = $(this)

        $this.find(".swiper-pagination").addClass("swiper-pagination-" + index);
        $this.find(".swiper-button-next").addClass("swiper-button-next-" + index);
        $this.find(".swiper-button-prev").addClass("swiper-button-prev-" + index);

        var options = {
          parallax: true,
          speed: 1500,
          simulateTouch: false,
          effect: 'fade',

          //pagination
          pagination: {
            el: '.swiper-pagination-' + index,
            clickable: true
          },

          // navigation
          navigation: {
            nextEl: '.swiper-button-next-' + index,
            prevEl: '.swiper-button-prev-' + index,
          }

        };

        var slider = $(this);

        if ($(this).hasClass('swiper-container-carousel')) {
          options.spaceBetween = 10;
          options.effect = 'slide';
          options.simulateTouch = true;
          options.slideToClickedSlide = true;
        }

        new Swiper ( slider, options );
      });



      if ( $( ".gallery-container" ).length ) {
        var galleryTop = new Swiper('.gallery-container', {
          effect: 'fade',
          speed: 1500,
          simulateTouch: false
        });
        var galleryThumbs = new Swiper('.gallery-thumbs', {
          centeredSlides: true,
          slidesPerView: 6,
          speed: 1500,
          breakpoints: {
            1600: { slidesPerView: 5 },
            1200: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            576: { slidesPerView: 2 }
          },
          slideToClickedSlide: true
        });
        galleryTop.controller.control = galleryThumbs;
        galleryThumbs.controller.control = galleryTop;
      }

    },


    // SVG Animation
    Vivus: function() {
      var myCallback = function () {};

      var myElements = document.querySelectorAll(".svg-icon svg");

      for (var i = myElements.length - 1; i >= 0; i--) {
        new Vivus(myElements[i], {duration: 100, type: 'async' }, myCallback);
      }
    },


    // Overlay Menu
    Overlay: function() {
      $(document).ready(function(){
        $('.burger').click(function(){
          var a = $(this);

          a.toggleClass('clicked');
          $('body').toggleClass('overlay-active');
          $('.overlay-menu').toggleClass('opened');
          $('.wrapper').toggleClass('push');
        });
      });
    },


    // Owl Carousel
    OwlCarousel: function() {

      $('.owl-carousel').each(function() {
        var a = $(this),
          items = a.data('items') || [1,1,1],
          margin = a.data('margin'),
          loop = a.data('loop'),
          nav = a.data('nav'),
          dots = a.data('dots'),
          center = a.data('center'),
          autoplay = a.data('autoplay'),
          autoplaySpeed = a.data('autoplay-speed'),
          rtl = a.data('rtl'),
          autoheight = a.data('autoheight');

        var options = {
          nav: nav || false,
          loop: loop || false,
          dots: dots || false,
          center: center || false,
          autoplay: autoplay || false,
          autoHeight: autoheight || false,
          rtl: rtl || false,
          margin: margin || 0,
          autoplayTimeout: autoplaySpeed || 3000,
          autoplaySpeed: 400,
          autoplayHoverPause: true,
          responsive: {
            0: { items: items[2] || 1 },
            576: { items: items[1] || 1 },
            1200: { items: items[0] || 1}
          }
        };
        
        a.owlCarousel(options);
      });
    },

    // Apps
    Apps: function () {

      // Navbar Nested Dropdowns
      $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        var a = $(this);

        if (!a.next().hasClass('show')) {
          a.parents('.dropdown-menu').first().find('.show').removeClass("show");
        }

        var $subMenu = a.next(".dropdown-menu");
        $subMenu.toggleClass('show');

        a.parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
          $('.dropdown-submenu .show').removeClass("show");
        });

        return false;
      });


      // Accordion
      $('.accordion').accordion();


      // Lavalamp
      $('.nav').lavalamp({
        setOnClick: true,
        enableHover: false,
        margins: false,
        autoUpdate: true,
        duration: 200
      });


      // Tooltips
      $('[data-toggle="tooltip"]').tooltip();


      skrollr.init({  
          forceHeight: false,        
          mobileCheck: function() {
              //hack - forces mobile version to be off
              return false;
          }
      });


      // Video Player
      $(function () {
        if ( $('#my-player').length ) {
          var player = videojs('my-player');
        }
      });



      // Select
      $(function() {
        $('select').selectric({
          disableOnMobile: false,
          nativeOnMobile: false
        });
      });


      // Radial
      $('.progress-circle').each(function(){
        var a = $(this),
            b = a.data('percent'),
            c = a.data('color');

        var options = {
          value: (b / 100),
          size: 600,
          thickness: 15,
          startAngle: -Math.PI / 2,
          lineCap: 'round',
          fill: {
            color: c
          },
        };

        a.circleProgress(options).on('circle-animation-progress', function(event, progress, stepValue) {
            a.find('strong').html(Math.round(100 * stepValue) + '<i>%</i>');
          });
      });

      // Smooth Scroll
      $(function () {
        var scroll = new SmoothScroll('[data-scroll]');
      });


      // Filtering
      $(function () {
        if ( $('.filtr-container').length ) {
          var filterizd = $('.filtr-container').filterizr({
            layout: 'sameWidth'
          });
        }
      });


      // Speaker Panel
      $(function () {
          var a = $(".expand");
          var b = $(".collapse");

          a.click( function () {
              var c = $(this);

              a.removeClass("expanded");
              c.toggleClass("expanded");
          });

          b.click( function () {
              a.removeClass("expanded");
          });

      });


      AOS.init({
        duration: 800,
        anchorPlacement: 'center-bottom'
      });
    }


  };

  $(document).ready(function () {
    initPage(function() {
      setMenus();
      setEmailContact();
      fn.Launch();
    });    
  });

})(jQuery);



function checkParam() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);    
  let p_id = urlParams.get('p');

  if (!isSet(p_id)) p_id = "main";

  return p_id;
}


function initPage(callback) {
  let currentPage = checkParam();	
  let pageFile = getPageFile(currentPage);
  if (pageFile == undefined) pageFile = "main.html";
  setContent("#mainContents", pageFile, function() {
    callback();
  });  
}


function showDialog(msg, callback) {
$('#askModalContent').text(msg);
$('#askModal').modal('show');

if (callback == null) return;

$('#askModalOKButton').off('click');
$('#askModalOKButton').click(function () {
    $('#askModal').modal('hide');
    callback();
});
}

function showPrivacyDialog() {
$('#modal-3').modal('show');
}

function getPageFile(pageName) {
return pageFileTable[pageName];
}

function setMenus() {
  $("#menu_main").click(function() {        
      location.href = "?p=main";
  });    
  
  $("#menu_about").click(function() {                
  location.href = "?p=about";
  });

  $("#menu_service").click(function() {		
      location.href = "?p=service";
  });

  $("#menu_team").click(function() {        
  location.href = "?p=team";
  });

  $("#menu_contact").click(function() {
  location.href = "?p=contact";        
  });

  $("#menu_recruit").click(function() {
  location.href = "?p=recruit";        
  });
}

async function setContent(targetId, templateName, callback) {
  let pageContent = await loadTemplate(templateName);  
  $(targetId)
  .html(pageContent)
  .ready(function () {
    callback();
  });
}

async function loadTemplate(templateName) {
  const content = await fetch(templateName);
  return content.text();
}

function sendApplicationData(form_id)
{
let min_type = "";
if ($(form_id).find('input[name="min_type_1"]').is(":checked")) {
  min_type = "/제휴및협업";
}

if ($(form_id).find('input[name="min_type_2"]').is(":checked")) {
  min_type = min_type + "/서비스관련";
}

if ($(form_id).find('input[name="min_type_3"]').is(":checked")) {
  min_type = min_type + "/SW개발";
}

if ($(form_id).find('input[name="min_type_4"]').is(":checked")) {
  min_type = min_type + "/기타문의";
}

if (min_type == "") {
  showDialog("문의 분야를 선택해 주세요.");		
  if ($('div').is('.page-loader')) {
    $('.page-loader').delay(200).fadeOut(800);
  }
  return false;
}

let form_content = $(form_id).find('input[name="form_content"').val();
if (form_content == "") {
  showDialog("문의 내용을 입력해 주세요.");
  if ($('div').is('.page-loader')) {
    $('.page-loader').delay(200).fadeOut(800);
  }
  return false;
}

let form_phone = $(form_id).find('input[name="form_phone"]').val();
if (form_phone == "") {
  showDialog("전화번호를 입력해 주세요.");
  if ($('div').is('.page-loader')) {
    $('.page-loader').delay(200).fadeOut(800);
  }
  return false;
}

let form_email = $(form_id).find('input[name="form_email"]').val();
if (form_email == "") {
  showDialog("이메일을 입력해 주세요.");
  if ($('div').is('.page-loader')) {
    $('.page-loader').delay(200).fadeOut(800);
  }
  return false;
}

if ($(form_id).find('input[name="agree_1"').length > 0 && $(form_id).find('input[name="agree_1"').is(":checked") == false) {
  showDialog("개인정보 처리방침에 동의해 주세요.");
  if ($('div').is('.page-loader')) {
    $('.page-loader').delay(200).fadeOut(800);
  }
  return false;
}	
  
let ref = $('<input type="hidden" value="' + document.referrer + '" name="ref">');	
$(form_id).append(ref);

ref = $('<input type="hidden" value="' + min_type + '" name="min_type">');	
$(form_id).append(ref);	
ref = $('<input type="hidden" value="aplycontact" name="form_kind">');	
$(form_id).append(ref);

if (isRecaptchaInit == true) {
  grecaptcha.execute('6LfPn_UUAAAAAN-EHnm2kRY9dUT8aTvIcfrvxGy7', {action: 'homepage'}).then(function(token) {
    $(form_id).find('input[name="form_token"]').val(token);
    let fed = new FormData($(form_id)[0]);
    ajaxRequest(fed);
  });
}
else {
  grecaptcha.ready(function() {
    isRecaptchaInit = true;
    grecaptcha.execute('6LfPn_UUAAAAAN-EHnm2kRY9dUT8aTvIcfrvxGy7', {action: 'homepage'}).then(function(token) {
      $(form_id).find('input[name="form_token"]').val(token);
      let fed = new FormData($(form_id)[0]);
      ajaxRequest(fed);
    });
  });
}
}

function ajaxRequest(fed) {
$.ajax({
  type: "POST",
  url: 'https://aply.biz/contact/handler.php',
  crossDomain: true,
  dataType: "json",
  data:fed,
  enctype: 'multipart/form-data', // 필수
  processData: false,
    contentType: false,
    cache: false,
  success: function (data) {
    if ($('div').is('.page-loader')) {
      $('.page-loader').delay(200).fadeOut(800);
    }

    if (data.result == "success") {
      showDialog("전송이 완료되었습니다. APLY가 연락드리겠습니다.", function() {
        location.href="index.html";
      });
      return;
    }
    
    showDialog("오류가 발생하였습니다. 잠시 후 다시 시도해 주세요. : " + data.message);
    //$(form_id + " input").last().remove();
  },
  error: function(jqXHR, text, error) {
    if ($('div').is('.page-loader')) {
      $('.page-loader').delay(200).fadeOut(800);
    }
    showDialog("죄송합니다. 일시적인 오류가 발생하였습니다. 다시 시도해 주세요.");
  }
});
}

function setSubmitHandler(form_p_id) {
var form_id = "#" + form_p_id;

$(form_id + "_send").on("click", function(e) {
  e.preventDefault();

  $('.page-loader').show();
  sendApplicationData(form_id);
});

$('[name^=form_phone]').keypress(validateNumber);
}


function sendRecruitApplicationData(form_id)
{
let min_type = "";
if ($(form_id).find('input[name="min_type_1"]').is(":checked")) {
  min_type = "/SW개발";
}

if ($(form_id).find('input[name="min_type_2"]').is(":checked")) {
  min_type = min_type + "/데이터분석";
}

if ($(form_id).find('input[name="min_type_3"]').is(":checked")) {
  min_type = min_type + "/HW개발";
}

if ($(form_id).find('input[name="min_type_4"]').is(":checked")) {
  min_type = min_type + "/마케팅";
}

if ($(form_id).find('input[name="min_type_5"]').is(":checked")) {
  min_type = min_type + "/디자인";
}

if ($(form_id).find('input[name="min_type_6"]').is(":checked")) {
  min_type = min_type + "/기획";
}

let form_name = $(form_id).find('input[name="form_name"]').val();
if (form_name == "") {
  showDialog("성함을 입력해 주세요.", null);
  return false;
}

let form_phone = $(form_id).find('input[name="form_phone"]').val();
if (form_phone == "") {
  showDialog("전화번호를 입력해 주세요.", null);
  return false;
}

let form_email = $(form_id).find('input[name="form_email"]').val();
if (form_email == "") {
  showDialog("이메일을 입력해 주세요.", null);
  return false;
}

if ($(form_id).find('input[name="agree_1"').length > 0 && $(form_id).find('input[name="agree_1"').is(":checked") == false) {
  showDialog("개인정보 처리방침에 동의해 주세요.", null);
  return false;
}

let ref = $('<input type="hidden" value="' + document.referrer + '" name="ref">');	
$(form_id).append(ref);	
ref = $('<input type="hidden" value="' + min_type + '" name="min_type">');	
$(form_id).append(ref);	

if (isRecaptchaInit == true) {
  grecaptcha.execute('6LfPn_UUAAAAAN-EHnm2kRY9dUT8aTvIcfrvxGy7', {action: 'homepage'}).then(function(token) {
    $(form_id).find('input[name="form_token"]').val(token);
    let fed = new FormData($(form_id)[0]);
    ajaxRequest(fed);
  });
}
else {
  grecaptcha.ready(function() {
    isRecaptchaInit = true;
    grecaptcha.execute('6LfPn_UUAAAAAN-EHnm2kRY9dUT8aTvIcfrvxGy7', {action: 'homepage'}).then(function(token) {
      $(form_id).find('input[name="form_token"]').val(token);
      let fed = new FormData($(form_id)[0]);
      ajaxRequest(fed);
    });
  });
}
}

function setRecruitSubmitHandler(form_p_id) {
var form_id = "#" + form_p_id;

$(form_id + "_send").on("click", function(e) {
  e.preventDefault();

  $('.page-loader').show();
  sendRecruitApplicationData(form_id);	  
});

$('[name^=form_phone]').keypress(validateNumber);
}

function setEmailContact() {
grecaptcha.ready(function() {
  isRecaptchaInit = true;
});

setSubmitHandler("email_up");
setRecruitSubmitHandler("recruit_form");
}

function validateNumber(event) {
  var key = window.event ? event.keyCode : event.which;
  if (event.keyCode === 8 || event.keyCode === 46) {
      return true;
  } else if ( key < 48 || key > 57 ) {
      return false;
  } else {
      return true;
  }
}

function isSet(value) {
if (value == "" || value == null || value == "undefined") return false;

return true;
}