// Alibaba Header
let lastScrollPosition = 0;
let ticking = false;

function doSomething(ScrollPos){
    if(ScrollPos != 0){
        document.getElementById("b_Bar").style.display = "none";
        document.getElementById("headerBar").setAttribute("class", "tnh-fixed");
        document.getElementById("newHeader").removeAttribute("class", "tnh-dark");
        document.getElementById("newHeader").setAttribute("class", "tnh-white");
        document.getElementById('logo').removeAttribute("class","logo");
        document.getElementById("logo").setAttribute("class","logo-scroll");
        document.getElementById("product_search_box").style.display = "block";
        document.getElementById("subHeader").style.display = "none";
    }
    else{
        document.getElementById("b_Bar").style.display = "block";
        document.getElementById("headerBar").removeAttribute("class", "tnh-fixed");
        document.getElementById("newHeader").removeAttribute("class", "tnh-white");
        document.getElementById("newHeader").setAttribute("class", "tnh-dark");
        document.getElementById("logo").removeAttribute("class","logo-scroll");
        document.getElementById('logo').setAttribute("class","logo");
        document.getElementById("product_search_box").style.display = "none";
        document.getElementById("subHeader").style.display = "block";
    }
}
document.addEventListener("scroll", (event) =>{
    lastScrollPosition = window.scrollY;

    if(!ticking){
        window.requestAnimationFrame(()=>{
            doSomething(lastScrollPosition);
            ticking = false;
        });

        ticking = true;
    }
});

//Product Row

function changeProduct() {
    var x = document.getElementById("productContent");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

//Sub Header
function tab_show(){
    var y = document.getElementById("animated_tab_content");
    y.style.display = "block"
    document.getElementById("subHeader").style.color = "#222";
    document.getElementById("subHeader").style.backgroundColor = "white";
    document.getElementById("animated_tab_content").style.borderTop = "1px solid #ddd";
    document.getElementById("headerBar").style.backgroundColor = "white";
    document.getElementById("newHeader").removeAttribute("class", "tnh-dark");
    document.getElementById("newHeader").setAttribute("class", "tnh-noborder");
    document.getElementById('logo').removeAttribute("class","logo");
    document.getElementById("logo").setAttribute("class","logo-scroll");
}
function tab_hide(){
    var z = document.getElementById("animated_tab_content");
    z.style.display = "none";

    document.getElementById("subHeader").style.color = "white";
    document.getElementById("subHeader").style.backgroundColor = "transparent";
    document.getElementById("animated_tab_content").style.borderTop = "none";
    document.getElementById("headerBar").style.backgroundColor = "transparent";
    document.getElementById("newHeader").removeAttribute("class", "tnh-noborder");
    document.getElementById("newHeader").setAttribute("class", "tnh-dark");
    document.getElementById('logo').removeAttribute("class","logo-scroll");
    document.getElementById("logo").setAttribute("class","logo");
}
function trade_show(){
    var trade = document.getElementById("trade_tab_content");
    trade.style.display = "block"
    document.getElementById("subHeader").style.color = "#222";
    document.getElementById("subHeader").style.backgroundColor = "white";
    document.getElementById("trade_tab_content").style.borderTop = "1px solid #ddd";
    document.getElementById("headerBar").style.backgroundColor = "white";
    document.getElementById("newHeader").removeAttribute("class", "tnh-dark");
    document.getElementById("newHeader").setAttribute("class", "tnh-noborder");
    document.getElementById('logo').removeAttribute("class","logo");
    document.getElementById("logo").setAttribute("class","logo-scroll");
}
function trade_hide(){
    var trade = document.getElementById("trade_tab_content");
    trade.style.display = "none";

    document.getElementById("subHeader").style.color = "white";
    document.getElementById("subHeader").style.backgroundColor = "transparent";
    document.getElementById("trade_tab_content").style.borderTop = "none";
    document.getElementById("headerBar").style.backgroundColor = "transparent";
    document.getElementById("newHeader").removeAttribute("class", "tnh-noborder");
    document.getElementById("newHeader").setAttribute("class", "tnh-dark");
    document.getElementById('logo').removeAttribute("class","logo-scroll");
    document.getElementById("logo").setAttribute("class","logo");
}
function category_show(){
    var category = document.getElementById("category_tab_content");
    category.style.display = "block"
    document.getElementById("subHeader").style.color = "#222";
    document.getElementById("subHeader").style.backgroundColor = "white";
    document.getElementById("category_tab_content").style.borderTop = "1px solid #ddd";
    document.getElementById("headerBar").style.backgroundColor = "white";
    document.getElementById("newHeader").removeAttribute("class", "tnh-dark");
    document.getElementById("newHeader").setAttribute("class", "tnh-noborder");
    document.getElementById('logo').removeAttribute("class","logo");
    document.getElementById("logo").setAttribute("class","logo-scroll");
}
function category_hide(){
    var category = document.getElementById("category_tab_content");
    category.style.display = "none";

    document.getElementById("subHeader").style.color = "white";
    document.getElementById("subHeader").style.backgroundColor = "transparent";
    document.getElementById("category_tab_content").style.borderTop = "none";
    document.getElementById("headerBar").style.backgroundColor = "transparent";
    document.getElementById("newHeader").removeAttribute("class", "tnh-noborder");
    document.getElementById("newHeader").setAttribute("class", "tnh-dark");
    document.getElementById('logo').removeAttribute("class","logo-scroll");
    document.getElementById("logo").setAttribute("class","logo");
}
// function drop_title_show(obj){
//     var contents = document.getElementsByClassName("drop_content");
//     for(var i=0; i< contents.length; i++){
//         contents[i].style.display = "none";
//     }
//     obj.querySelector('.drop_content').style.display = "block";
// }
// function drop_title_hide(obj){
//     obj.querySelector('.drop_content').style.display = "none";
// }
// function sec_drop_title_show(obj){
//     obj.querySelector('.sec_drop_content').style.display = 'block';
// }
// function sec_drop_title_hide(obj){
//     obj.querySelector('.sec_drop_content').style.display = 'none';
// }

function drop_title_show(num){
    // var title = document.getElementsByClassName("drop_title");
    var content = document.getElementsByClassName("drop_content");
    for (var i=0; i< content.length; i++){
        content[i].style.display = "none";
    }
    content[num].style.display = "block";
}
function sec_drop_title_show(num){
    // var title = document.getElementsByClassName("drop_title");
    var content = document.getElementsByClassName("sec_drop_content");
    for (var i=0; i< content.length; i++){
        content[i].style.display = "none";
    }
    content[num].style.display = "block";
}

//Services Floor

function matches_show(n){
    var x = document.getElementsByClassName("matches_content");
    for (var i=0; i< x.length; i++){
        x[i].style.display = "none";
    }
    x[n].style.display = "block";
    x[n+1].style.display = "block";
}

//Category Floor

function list_after(){
    var previous = document.getElementsByClassName("list_pre");
    var next = document.getElementsByClassName("list_after");
    var elements = document.getElementsByClassName("next-slick-track");
    for(var i=0, length = elements.length; i < length; i++){
        elements[i].style.transition = "left 1s ease";
        elements[i].style.left = "-500px";
    }    
}
function list_pre(){
    var previous = document.getElementsByClassName("list_pre");
    var next = document.getElementsByClassName("list_after");
    var elements = document.getElementsByClassName("next-slick-track");
    for(var i=0, length = elements.length; i < length; i++){
        elements[i].style.transition = "left 1s ease";
        elements[i].style.left = "200px";
    }   
}
//Country Floor
function next(){
    var previous = document.getElementsByClassName("previous");
    var next = document.getElementsByClassName("next");
    var elements = document.getElementsByClassName("country_list");
    next[0].style.display = "none";
    previous[0].style.display = "block";
    for(var i=0, length = elements.length; i < length; i++){
        elements[i].style.transition = "left 1s ease";
        elements[i].style.left = "-150px";
    }    
}
function previous(){
    var previous = document.getElementsByClassName("previous");
    var next = document.getElementsByClassName("next");
    var elements = document.getElementsByClassName("country_list");
    previous[0].style.display = "none";
    next[0].style.display = "block";
    for(var i=0, length = elements.length; i < length; i++){
        elements[i].style.transition = "left 1s ease";
        elements[i].style.left = "0px";
    }   
}
//Business Floor -> Photo

//manual
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n){
        showSlides(slideIndex += n);
    }
    function currentSlide(n){
        showSlides(slideIndex = n);
    }
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length){
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i =0; i < dots.length; i++){
            dots[i].style.backgroundColor = "#bbb";
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].style.backgroundColor = "#717171";

    }

//auto
    let sIndex = 0;
    slideAuto();
    
    function slideAuto() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for(i=0; i < slides.length; i++){
            slides[i].style.display = "none";
        }
        sIndex++;
        if(sIndex > slides.length){
            sIndex = 1;
        }
        for(i=0; i<dots.length; i++){
            dots[i].display.backgroundColor = "#bbb";
        }
        slides[sIndex - 1].style.display = "block";
        dots[sIndex - 1].display.backgroundColor = "#717171";
        setTimeout(slideAuto, 2000);
    }
                 