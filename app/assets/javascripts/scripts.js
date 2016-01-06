//Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// Facebook
(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

$(document).ready(function() {
  // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return true;
  });

  // Stellar
  $.stellar();

  // Tooltips
  $(function () {
    $('#item1').tooltip();
     });
      
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
     });

//Textarea
  $("#message-box").css("background-color", "#CCCCCC");
  $("#email").css("background-color", "#CCCCCC");
  $("#button").on("click", function(){
    var comment = $("#message-box").val();
    var email=$("#email").val();
    console.log (comment + "/" + email);
    $("#visible-comment").html(comment);
    $("#visible-email").html(email);
    return true;
  });
}); //end


 //Keyup
$(document).ready(function() {
$("#message-box").on("keyup", function() {
        console.log("keyup happened");
    var charCount = $("#message-box").val().length;
        console.log(charCount);
    $("#char-count").html(charCount).val().length;
    if (charCount > 50) {
           $("#char-count").css("color", "#CC3300");
           $("#message-box").css("background-color", "#FF99CC");
           $("visible-comment").css("color", "#000000");

    } else {
           $("#char-count").css("color", "#FFFFFF");
           $("#message-box").css("background-color", "#CCCCCC");
           $("visible-comment").css("color", "#000000");
    return true;
  };
});
});

//maps
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.5320245, lng: -0.1261792 },
    zoom: 16
  });
}