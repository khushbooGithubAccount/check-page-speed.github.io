
/*counter js*/
//$( document ).ready(function() {
  //jQuery('.counter').countUp();
//});

$(document).ready(function() {
    checkDisplay();
  
  $(window).on('resize scroll', function() {
    checkDisplay();
  });


function checkDisplay(){
  $('.prg-count').each(function() {
      var $this = $(this);
      if ($this.isOnScreen()) {
        var countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 4000,
          easing: 'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });
      }
    });
}
});

/*page load js*/
$( document ).ready(function() {
  $("body").css('display', 'block');
  //$("body").fadeIn(1000);
});

/*tooltip js*/
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})



/*click to smooth scroll js*/
$(document).ready(function(){
  $("#myScrollspy1 a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body, .overflowcc1').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        window.location.hash = hash;
      });
    }
  });
});



/*horizontal tab js*/
$(document).ready(function(){
$('#horizontalTab').easyResponsiveTabs(
{
	type:'default',
	width:'auto',
	fit:true,
	closed:'accordion',
	activate:function(event){
		var $tab=$(this);
		var $info=$('#tabInfo');
		var $name=$('span',$info);
		$name.text($tab.text());
		$info.show();
		}}
		);
		

$('#horizontalTab1').easyResponsiveTabs(
{
	type:'default',
	width:'auto',
	fit:true,
	closed:'accordion',
	activate:function(event){
		var $tab=$(this);
		var $info=$('#tabInfo');
		var $name=$('span',$info);
		$name.text($tab.text());
		$info.show();
		}}
		);
		
		$('#verticalTab').easyResponsiveTabs({
        type: 'vertical',
        width: 'auto',
        fit: true
      });
	  });
		


/*darkmode js*/
let darkMode = localStorage.getItem("darkMode");

function enableDarkMode() {
  document.getElementById ( "root") .classList.add ( "darkmode");
  localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
    document.getElementById ( "root") .classList.remove ( "darkmode");
    localStorage.setItem("darkMode", null);
}

if (darkMode === "enabled") {
  enableDarkMode();
}


const darkModeToggle = document.querySelectorAll("#dark-mode-toggle");
darkModeToggle[0].addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode !== "enabled" ? enableDarkMode() : disableDarkMode();
});
darkModeToggle[1].addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode !== "enabled" ? enableDarkMode() : disableDarkMode();
});


/*home vertical number slider*/
$(document).ready(function(){
var titleMain  = $("#animatedHeading");
var titleSubs  = titleMain.find("slick-active");

if (titleMain.length) {

  titleMain.slick({
    autoplay: true,
    arrows: false,
    dots: false,
    slidesToShow: 3,
    centerPadding: "10px",
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    vertical: true,
    speed: 1000,
    autoplaySpeed: 2000,
    useTransform: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    adaptiveHeight: true,
  });

  // On init
  $(".slick-dupe").each(function(index, el) {
    $("#animatedHeading").slick('slickAdd', "<div>" + el.innerHTML + "</div>");
  });

  // Manually refresh positioning of slick
  titleMain.slick('slickPlay');
};
});


/*blog slider*/
//$( document ).ready(function() {
//var $swiperSelector = $('.swiper-container');
//
//$swiperSelector.each(function(index) {
//    var $this = $(this);
//    $this.addClass("swiper-slider-" + index);
//    
//    var loop = $this.data('loop') !== undefined ? $this.data('loop') : false;
//    var freeMode = $this.data('free-mode') !== undefined ? $this.data('free-mode') : false;
//    var dragSize = $this.data('drag-size') ? $this.data('drag-size') : 620;
//  
//    var swiper = new Swiper(".swiper-slider-" + index, {
//      direction: "horizontal",
//      loop: loop,
//      freeMode: freeMode,
//	  spaceBetween: 40,
//	 
//      breakpoints: {
//        1920: {
//          slidesPerView: 3,
//          	
//        },
//        1280: {
//          slidesPerView: 3,
//          spaceBetween: 20,
//        },
//        992: {
//          slidesPerView: 2,
//		  spaceBetween: 10,
//          
//        },
//        480: {
//           slidesPerView: 1,
//		   spaceBetween: 10,
//		       
//        }
//      },
//      navigation: {
//        nextEl: ".swiper-button-next",
//        prevEl: ".swiper-button-prev"
//      },
//      scrollbar: {
//        el: ".swiper-scrollbar",
//        draggable: true,
//        dragSize: dragSize
//     }
//  });
//});
//});



/*roi mobile slider*/
//$( document ).ready(function() {
//var $swiperSelector = $('.process__slider.swiper-container');
//
//$swiperSelector.each(function(index) {
//    var $this = $(this);
//    $this.addClass("swiper-slider-" + index);
//    
//    var loop = $this.data('loop') !== undefined ? $this.data('loop') : false;
//    var freeMode = $this.data('free-mode') !== undefined ? $this.data('free-mode') : false;
//    var dragSize = $this.data('drag-size') ? $this.data('drag-size') : 620;
//  
//    var swiper = new Swiper(".swiper-slider-" + index, {
//      direction: "horizontal",
//      loop: loop,
//	  spaceBetween: 10,
//      freeMode: freeMode,
//	  autoHeight: true,
//      breakpoints: {
//        992: {
//          slidesPerView: 1,
//		  
//          
//        },
//        480: {
//           slidesPerView: 2,
//		  
//		       
//        }
//      },
//      navigation: {
//        nextEl: ".swiper-button-next",
//        prevEl: ".swiper-button-prev"
//      },
//      scrollbar: {
//        el: ".swiper-scrollbar",
//        draggable: true,
//        dragSize: dragSize
//     }
//  });
//});
//});



/*scroll to show header*/
$(document).ready(function(){
     var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("header-top").style.top = "0px";
      } else {
        document.getElementById("header-top").style.top = "-80px";
      }
      prevScrollpos = currentScrollPos;
    }
	});
  
  
/*navigation hover*/
let navLink = document.querySelector(".nav-link");
navLink.addEventListener("mouseout", function( event ) {
	var element = document.querySelector(".modal-overlay");
	element.classList.remove("show-overlay");
}, false);
navLink.addEventListener("mouseenter", function( event ) {
	var element = document.querySelector(".modal-overlay");
	element.classList.add("show-overlay");
}, false);

let linkDropdown = document.querySelector(".custom-dropdown-menu");
linkDropdown.onmouseover = function(){
	var element = document.querySelector(".modal-overlay");
	element.classList.add("show-overlay");
};
linkDropdown.onmouseout = function(){
	var element = document.querySelector(".modal-overlay");
	element.classList.remove("show-overlay");
};


/*scroll spy*/
$(document).ready(function(){
    $('body').scrollspy({
        target: "#myScrollspy1", 
        offset: 100
    });   
});


    /*msg ceo click to toggle*/
      $('#reveal-click').click(function () {
		  
    $('#reveal-wrap').slideToggle({
      direction: "up"
    }, 300);
    $(this).toggleClass('clientsClose');
	window.location.href = '#ceomsg';
	 
  }); 
  
  $('#closeReveal').click(function () {
		  
    $('#reveal-wrap').slideToggle({
      direction: "up"
    }, 300);
	 
  }); 
  
  
  /*portfolio scroll js*/
$(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $div = $('.body-color'),
      $panel = $('.panel');
  
  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);
 
  $panel.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $div.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $div.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();
