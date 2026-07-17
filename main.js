

// // how to accept user input
let username;
document.getElementById("submit").onclick = function(){
   username = document.getElementById("myText").value;
   document.getElementById("myH1").textContent = `hello ${username}`
}
 

// // counter program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
 let count = 0;

    increaseBtn.onclick = function(){
       count++;
       countLabel.textContent = count; 
    }
    resetBtn.onclick = function(){
       count = 0;
       countLabel.textContent = count; 
    }
    decreaseBtn.onclick = function(){
       count--;
       countLabel.textContent = count; 
    }




// random number generator


const myButton = document.getElementById("myButton");
const myLabels1 = document.getElementById("myLabel");
const myLabels2 = document.getElementById("myLabel");
const myLabels3 = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
   randomNum1 = Math.floor(Math.random() * max) + min;
   randomNum2 = Math.floor(Math.random() * max) + min;
   randomNum3 = Math.floor(Math.random() * max) + min;
   myLabel1.textContent = randomNum1;
   myLabel2.textContent = randomNum2;
   myLabel3.textContent = randomNum3;
}



// if statement conditions 

const mySubmit = document.getElementById("mySubmit");
const myText = document.getElementById("myText");
const result = document.getElementById("result");

let age;

 mySubmit.onclick = function(){
   age = myText.value;
   age = Number(age);
   if(age < 16){
      
      result.textContent = `you are not old enough to drive`;
   }
      else if (age < 20){
       
      result.textContent = `you are old enough to drive`;
      }
      else{
         
      result.textContent = `you are too old enough to drive`;
      }
 }