myButton = document.getElementById("bt6");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } 
  else {
    myButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

function openNav() {
document.getElementById("mySidebar").style.width = "250px";
document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
document.getElementById("mySidebar").style.width = "0";
document.getElementById("main").style.marginLeft= "0";
}
function openForm() {
document.getElementById("myForm").style.display = "block";
}

function closeForm() {
document.getElementById("myForm").style.display = "none";
}

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}
  
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

function myFunction() {
  var element = document.getElementById("myDIV");
  element.classList.toggle("mystyle");
}
function myFunction2() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#panel").stop();
  });
});
$(document).ready(function(){
  $("#hide").click(function(){
    $("i").hide();
  });
  $("#show").click(function(){
    $("i").show();
  });
});
