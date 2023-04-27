/* Declare variables below to save the different sections (divs) of your story*/
let firstButton=document.querySelector("option-one");
let secondButton=document.querySelector(".option-two");
let firstAnswer=document.querySelector(".option-one-screen");
let secondAnswer=document.querySelector(".option-two-screen");
let thirdAnswer=document.querySelector(".option-three-end");
let fourthAnswer=document.querySelector(".option-four-end");












firstButton.onclick=function(){
   firstAnswer.style.display= "block";
}

secondButton.onclick=function(){
   secondAnswer.style.display= "block";
}

