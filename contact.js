

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


let fname=document.getElementById("name");
let email=document.getElementById("email");
let phone=document.getElementById("tele");
let form=document.getElementById("form");
let ename=document.getElementById("eName");
let eEmail=document.getElementById("eEmail");
let ePhone=document.getElementById("ePhone");

form.addEventListener("submit",(e)=>{
    let firstname="";
    fname.addEventListener("input",function(e){
        
    })
    if(fname.value===""||fname.value==null){
        
      firstname="Name is required";
    }

   else if(!isNaN(fname.value)||fname.value.length<=1){
      firstname="Enter correct name";
    }
    let Email="";

    if(email.value===""||email.value==null){
        
        Email="Email is required";
    }
   else if(!(email.value.includes("@"))||!(email.value.includes("."))){
        Email="Email should includes '@' and '.'";
    }
let Phone="";
    if(phone.value===""||phone.value==null){
        
        Phone="Phone is required";
    }

   else if(!(Number(phone.value))){
        
        Phone="Phone should be a number";
    }

   

    
    if(firstname.length>0){
        e.preventDefault()
        ename.innerText=firstname;


    }

    if(Email.length>0){
        e.preventDefault()
        eEmail.innerText=Email;


    }

    if(Phone.length>0){
        e.preventDefault()
        ePhone.innerText=Phone;


    }
    
})

fname.addEventListener("input" ,function(e){
    if(e.target.value.length ==0){
        ename.innerHTML="Name is required"
    }
    else if(!(isNaN(fname.value))){
      ename.innerHTML="Name shouldn't be a number"}
    
    else{
        
        ename.innerHTML=""
    }
});

email.addEventListener("input" ,function(e){
    if(e.target.value.length ==0){
        eEmail.innerHTML="Email is required"
    }
    else if(!(e.target.value.includes("@"))||!(email.value.includes("."))){
        eEmail.innerHTML="Email should includes '@' and '.'"

    }
    
    else{
        
        eEmail.innerHTML=""
    }
});

phone.addEventListener("input" ,function(e){
    if(e.target.value.length ==0){
        ePhone.innerHTML="Phone is required"
    }
    else if(!(Number(phone.value))){
        ePhone.innerHTML="Phone should be a number"

    }
    
    else{
        
        ePhone.innerHTML=""
    }
});

// /////////////////////////////////////
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