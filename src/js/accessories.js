//Industry Nav
let nxt = 0;

function move(num){ // 1 , -1
    nxt = nxt + num;
    // document.write(nxt);

    var previous = document.getElementsByClassName("previous");
    var next = document.getElementsByClassName("next");
    var elements = document.getElementsByClassName("clothes_list");

    previous[0].style.display = "block";

    if(nxt == 1){
        for(var i=0, length = elements.length; i < length; i++){
            elements[i].style.transition = "left 1s ease";
            elements[i].style.left = "-940px";
        }  
        next[0].style.display = "block";
    }
    else if (nxt == 2) {
        for(var i=0, length = elements.length; i < length; i++){
            elements[i].style.transition = "left 1s ease";
            elements[i].style.left = "-1880px";
        }
        next[0].style.display = "none";
    } 
    else if (nxt == 0) {
        for(var i=0, length = elements.length; i < length; i++){
            elements[i].style.transition = "left 1s ease";
            elements[i].style.left = "0px";
        } 
        previous[0].style.display = "none";
    }
}

//Clothes Dropdown

function clothes_dropdown(num){
    // var clothes = document.getElementsByClassName("clothes_item");
    var clothesDrop = document.getElementsByClassName("clothes_content");
    for(var i = 0; i < clothesDrop.length; i++){
        clothesDrop[i].style.display = "none";
    }
    clothesDrop[num].style.display = "block";
}

//Verified Pro Supplier

function verified_move(num){ // 1 , -1
    // nxt = nxt + num;
    // document.write(nxt);

    var previous = document.getElementsByClassName("verified_pre");
    var next = document.getElementsByClassName("verified_nxt");
    var elements = document.getElementsByClassName("verified_list");

    previous[0].style.display = "block";

    if(num == 1){
        for(var i=0, length = elements.length; i < length; i++){
            elements[i].style.transition = "left 1s ease";
            elements[i].style.left = "-1200px";
        }  
        next[0].style.display = "none";
    }
    else if (num == -1) {
        for(var i=0, length = elements.length; i < length; i++){
            elements[i].style.transition = "left 1s ease";
            elements[i].style.left = "0px";
        } 
        previous[0].style.display = "none";
        next[0].style.display   = "block";
    }
}

//Back to top
let lastScrollPosition = 0;
document.addEventListener("scroll", (event) =>{
    lastScrollPosition = window.scrollY;
    
    if(lastScrollPosition > 320){
        let x = document.getElementsByClassName("backTop");
        x[0].style.display = "block";
    }else{
        let x = document.getElementsByClassName("backTop");
        x[0].style.display = "none";
    }
});

// When the user clicks on the button, scroll to the top of the document
function backTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "white";
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].style.backgroundColor = "#717171";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}