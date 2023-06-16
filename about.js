let cards=document.querySelectorAll(".btnCard");
// console.log(cards)

for(let i=0;i<cards.length;i++){
  cards[i].addEventListener("click",()=>{
    cardNumber();
  })
}
function onLoadCardNumber(){
  let productNumber=localStorage.getItem("cardnumber");
  if(productNumber){
    document.getElementById("spanCard").textContent=productNumber;
  }

}
function cardNumber(){
  let productNumber=localStorage.getItem("cardnumber")
  // console.log(productNumber)
  productNumber=parseInt(productNumber);
  if(productNumber){
    localStorage.setItem("cardnumber",productNumber+1);
    document.getElementById("spanCard").textContent=productNumber+1;

  }else{
    localStorage.setItem("cardnumber",1)
    document.getElementById("spanCard").textContent=1;
  }
  
}
onLoadCardNumber();


// ////////////////////////////////////////////////////////////////////////////////
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
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// /////////////////////////////////////////////////////////////////////////////////


let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}