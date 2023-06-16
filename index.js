// slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display ="block"; 
}
// end slider

// start carts

let cards=document.querySelectorAll(".btnCard");
// console.log(cards)

for(let i=0;i<cards.length;i++){
  cards[i].addEventListener("click",()=>{
    cardNumber();
  })
}
letn=0;
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

localStorage.clear();

// ///////////////////////////////////////////////////////////////////////////////

let section8=document.getElementById("section8");
let section10=document.getElementById("section10");

let section11=document.getElementById("section11");
let section12=document.getElementById("section12");
let section13=document.getElementById("section13"); 

let section14=document.getElementById("section14");
let section15=document.getElementById("section15");
let section16=document.getElementById("section16");

let section17=document.getElementById("section17");
let section18=document.getElementById("section18");
let section19=document.getElementById("section19");

let section20=document.getElementById("section20");
let section21=document.getElementById("section21");
let section22=document.getElementById("section22");

let section7=document.getElementById("section7");

let categories=[section8,section10,section11,section12,section13,section14,
  section15,section16,section17,section18,section19,section20,section21,section22];
  
function allCategory(){
  section7.innerHTML="";
 for(let i=0;i<categories.length;i++){
  section7.append(categories[i]);
  
 }
}

function shoes(){
  
  let result=categories.filter(function(item){
  return item ==section14||item==section15||item==section16;
  })
  
  section7.innerHTML="";
 for(let i=0;i<result.length;i++){
  section7.append(result[i]);
  
 }
}

function makeUp(){
  let result=categories.filter(function(item){
    return item ==section17||item==section18||item==section19;
    })
    
    section7.innerHTML="";
   for(let i=0;i<result.length;i++){
    section7.append(result[i]);
    
   }

}

function accessories(){
  let result=categories.filter(function(item){
    return item ==section11||item==section12||item==section13;
    })
    
    section7.innerHTML="";
   for(let i=0;i<result.length;i++){
    section7.append(result[i]);
    
   }


}

function bags(){
  let result=categories.filter(function(item){
    return item ==section20||item==section21||item==section22;
    })
    
    section7.innerHTML="";
   for(let i=0;i<result.length;i++){
    section7.append(result[i]);
    
   }

}
// end categories
// start form 



// ////////////////////////////////////////////////////////
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



// ///////////////////////////////////////////


























