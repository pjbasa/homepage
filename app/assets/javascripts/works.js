//var works section

var works = [{
  title: "First Project", pic: "img/WIP1.jpg"}, {title: "Second Project", pic: "img/WIP2.jpg"}, {title: "Third Project", pic: "img/WIP3.jpg"}, {title: "Fourth Project", pic: "img/WIP4.jpg"}];
   for(var i = 0; i < works.length; ++i ) { 
  $("#works").append("\
  <div class='col-sm-3 col-md-3 col-lg-3'>\
    <a href='#' class='works-img'>\
      <img class='img-responsive' src='" + works[i].pic + "'>\
      <span class='info'><p class='proj-title'></p>'" + works[i].title + "' </span>\
    </a>\
  </div>\
");
  var images = $("#works img");
  if (i%2 === 1){
     $(images[i]).css("border", "0.25em solid DodgerBlue");
  } else {
     $(images[i]).css("border", "0.25em solid Salmon");
  };
};

$(".works-img").mouseenter(function(){
  $(".info", this).show();
}).mouseleave(function(){
  $(".info", this).hide();
  return false;
});