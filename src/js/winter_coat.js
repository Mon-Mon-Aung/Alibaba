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

//for photo video verticle move

let nxt = 0;

function move(num){ // 1 , -1
    nxt = nxt + num;
    // document.write(nxt);

    var previous = document.getElementsByClassName("previous");
    var next = document.getElementsByClassName("next");
    var elements = document.getElementsByClassName("img_item_list");

    previous[0].style.display = "block";

    if(nxt == 1){
        for(var i=0, length = elements.length; i < length; i++){
            elements[i].style.transition = "top 1s ease";
            elements[i].style.top = "-480px";
        }  
        next[0].style.display = "block";
    }
    else if (nxt == 2) {
        for(var i=0, length = elements.length; i < length; i++){
            elements[i].style.transition = "top 1s ease";
            elements[i].style.top = "-960px";
        }
        next[0].style.display = "none";
    } 
    else if (nxt == 0) {
        for(var i=0, length = elements.length; i < length; i++){
            elements[i].style.transition = "top 1s ease";
            elements[i].style.top = "0px";
        } 
        previous[0].style.display = "none";
    }
}

// Video
var myVideo = document.getElementById("video1"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 560; 
} 

function makeSmall() { 
    myVideo.width = 320; 
} 

function makeNormal() { 
    myVideo.width = 420; 
} 

//image slideshow
var imgIndex = 1;
showDivs(imgIndex);

function plusDivs(n) {
  showDivs(imgIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("imgSlides");
  if (n > x.length) {imgIndex = 1}
  if (n < 1) {imgIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[imgIndex-1].style.display = "block";  
}

// image items

function img_item(n){
    var item_content = document.getElementsByClassName("imgSlides");

    for(var i=0; i<item_content.length; i++){
        item_content[i].style.display = "none";
    }
    item_content[n].style.display = "block";
}

// for recommendation for business

function rec_move(num){ // 1 , -1
   
    var previous = document.getElementsByClassName("rec_pre");
    var next = document.getElementsByClassName("rec_next");
    var elements = document.getElementsByClassName("winter");

    previous[0].style.display = "block";

    if(num == 1){
        elements[0].style.display = "none";
        elements[1].style.display = "block";
        next[0].style.display = "none";
    }
    else if (num == -1) {
        elements[1].style.display = "none";
        elements[0].style.display = "block";
        previous[0].style.display = "none";
        next[0].style.display = "block";
    }
}

// Table Show
function show_more(){
    
    var show_more = document.getElementsByClassName("show_more");
    var hide = document.getElementsByClassName("hidden_table");
    var up_down = document.getElementsByClassName("up_down");

    if(show_more[0].innerHTML == "Show more"){
        hide[0].style.height = "720px";
        show_more[0].innerHTML = "Show less";
        up_down[0].setAttribute("class", "fas fa-angle-up pt-1"); 
        up_down[0].removeAttribute("class", "fas fa-angle-down pt-1");
    }
    else if(show_more[0].innerHTML == "Show less"){
        hide[0].style.height = "384px";
        show_more[0].innerHTML = "Show more";
        up_down[0].setAttribute("class", "fas fa-angle-down pt-1");
        up_down[0].removeAttribute("class","fas fa-angle-up pt-1");
        
    } 
    
}

//Right Pane
let lastScrollPosition = 0;
document.addEventListener("scroll", (event) =>{
    lastScrollPosition = window.scrollY;
//    document.write(lastScrollPosition);    //1697 - 1997 - 10927

    if(lastScrollPosition > 800 && lastScrollPosition < 11100){
        let x = document.getElementsByClassName("right_pane");
        let y = document.getElementsByClassName("more_padd");
        let go_to_hide = document.getElementsByClassName("go_to_hide");
        let membership = document.getElementsByClassName("membership");
        let purchase = document.getElementsByClassName("purchase");
        let m = document.getElementsByClassName("m_right_pane");


        x[0].style.position = "fixed";
        x[0].style.left = "1180px";
        x[0].style.overflowY = "scroll";
        x[0].style.top = "120px";
        x[0].style.height = "850px";
        m[0].style.height = "850px";
        x[0].style.width = "504px";
        x[0].style.paddingLeft = "10px";
        x[0].style.paddingRight = "10px";
        // y[0].style.marginbottom = "160px";
        // go_to_hide[0].style.display = "none";
        membership[0].style.top = "10px";
        membership[0].style.height = "30px";
        purchase[0].style.top = "34px";
    }
    else {
        let x = document.getElementsByClassName("right_pane");
        let y = document.getElementsByClassName("more_padd");
        let go_to_hide = document.getElementsByClassName("go_to_hide");
        let membership = document.getElementsByClassName("membership");
        let purchase = document.getElementsByClassName("purchase");
        let m = document.getElementsByClassName("m_right_pane");

        x[0].style.position = "relative";
        x[0].style.left = "0";
        x[0].style.overflowY = "none";
        x[0].style.top = "20px";
        x[0].style.height = "1180px";
        m[0].style.height = "1180px";
        x[0].style.width = "504px";
        x[0].style.paddingLeft = "10px";
        x[0].style.paddingRight = "10px";
        // y[0].style.marginbottom = "160px";
        // go_to_hide[0].style.display = "block";
        membership[0].style.top = "8px";
        membership[0].style.height = "64px";
        purchase[0].style.top = "40px";
    }
    
});

//Back to top
let scroll_pos = 0;
document.addEventListener("scroll", (event) =>{
    scroll_pos = window.scrollY;
    
    if(scroll_pos > 320){
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