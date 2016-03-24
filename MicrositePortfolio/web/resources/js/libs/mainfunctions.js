$(function() {
// On document ready:
 console.log('document loaded ready to rock!')

    $(window).load(function(){
    $('#preloader').fadeOut(2000 ,function(){$(this).remove();});
}); 

// end preloader

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
 /*preload my images plz*/

function preloader() {
    if (document.images) {
        var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();
        var img4 = new Image();
        var img5 = new Image();
        var img6 = new Image();
        var img7 = new Image();
        var img8 = new Image();
        var img9 = new Image();
        var img10 = new Image();
        var img12 = new Image();
        var img13 = new Image();
        var img15 = new Image();

                 img1.src = "http://insightsurfer.net/gulp/MicrositePortfolio/web/resources/images/pic1.jpg";
                img2.src = "http://insightsurfer.net/gulp/MicrositePortfolio/web/resources/images/pic2.jpg";
                img3.src = "http://insightsurfer.net/gulp/MicrositePortfolio/web/resources/images/pic3.jpg";
                img4.src = "http://insightsurfer.net/gulp/MicrositePortfolio/web/resources/images/pic4.jpg";
                img5.src = "http://insightsurfer.net/gulp/MicrositePortfolio/web/resources/images/pic5.jpg";
                img6.src = "http://insightsurfer.net/gulp/MicrositePortfolio/web/resources/images/pic6.jpg";
                img7.src = "http://insightsurfer.net/gulp/MicrositePortfolio/web/resources/images/pic7.jpg";
                img8.src = "http://insightsurfer.net/gulp/MicrositePortfolio/web/resources/images/pic8.jpg";
                img9.src = "http://insightsurfer.net/gulp/MicrositePortfolio/web/resources/images/pic9.jpg";
                img10.src = "http://insightsurfer.net/gulp/MicrositePortfolio/web/resources/images/pic10.jpg";
                img12.src = "http://insightsurfer.net/gulp/MicrositePortfolio/web/resources/images/pic12.jpg";
                img13.src = "http://insightsurfer.net/gulp/MicrositePortfolio/web/resources/images/pic13.jpg";
                img15.src = "http://insightsurfer.net/gulp/MicrositePortfolio/web/resources/images/pic15.jpg";
 
    }
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
addLoadEvent(preloader);


/*end image preload*/
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////







 // start carousell
/* Demo Scripts for Bootstrap Carousel and Animate.css article
* on SitePoint by Maria Antonietta Perna
*/

 //  ====================== start carousell
$(function() {

  //Function to animate slider captions 
  function doAnimations( elems ) {
    //Cache the animationend event in a variable
    var animEndEv = 'webkitAnimationEnd animationend';
    
    elems.each(function () {
      var $this = $(this),
        $animationType = $this.data('animation');
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }
  
  //Variables on page load 
  var $myCarousel = $('#carousel-example-generic'),
    $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
    
  //Initialize carousel 
  $myCarousel.carousel();
  
  //Animate captions in first slide on page load 
  doAnimations($firstAnimatingElems);
  
  //Pause carousel  
  $myCarousel.carousel('pause');
  
  
  //Other slides to be animated on carousel slide event 
  $myCarousel.on('slide.bs.carousel', function (e) {
    var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
    doAnimations($animatingElems);
  });  
  
});
 //  ====================== end carousell

 




 



   $('#workexperiance').mixItUp();





	//initiate smooth scroll
 

    // toggle MixItUp selected filter
    // Instantiate MixItUp:
  



/////////////// contactform

    function validateEmail(email) { 
        var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
    }


 
 
       $(".fancybox").fancybox();
        $("#contact").submit(function() { return false; });

        
        $("#send").on("click", function(){
            var emailval  = $("#email").val();
            var msgval    = $("#msg").val();
            var msglen    = msgval.length;
            var mailvalid = validateEmail(emailval);
            
            if(mailvalid == false) {
                $("#email").addClass("error");
            }
            else if(mailvalid == true){
                $("#email").removeClass("error");
            }
            
            if(msglen < 4) {
                $("#msg").addClass("error");
            }
            else if(msglen >= 4){
                $("#msg").removeClass("error");
            }
            
            if(mailvalid == true && msglen >= 4) {
                // if both validate we attempt to send the e-mail
                // first we hide the submit btn so the user doesnt click twice
                $("#send").replaceWith("<em>sending...</em>");
                
                $.ajax({
                    type: 'POST',
                    url: 'mailer.php',
                    data: $("#contact").serialize(),
                    success: function(data) {
                        if(data == "true") {
                            $("#contact").fadeOut("fast", function(){
                                $(this).before("<p><strong>Success! Your feedback has been sent, thanks :)</strong></p>");
                                setTimeout("$.fancybox.close()", 1000);
                            });
                        }
                    }
                });
            }
        });

// end contact form







 // end functions
  
});






// set expand collapse and  +/- switch on click

 $(window).bind("load", function() {

$("#goToTop").click(function(event){     
        event.preventDefault();
        $('html, body').animate({scrollTop:$(this.hash).offset().top}, 0);
    });


        $(".sassybutton").click(function(event) {
           
        event.preventDefault();  
        $(this).parent().find('.showcontent').slideToggle();

          $(this).find('span').toggleClass('fa-plus fa-minus')
        
    });
      



    });


 

  
 
