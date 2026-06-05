const btns = document.querySelectorAll('div.botton');
const sound = document.getElementById('click');
const sound555 = document.getElementById('click2');

let h3=document.querySelector('h3');
let buttons=["botton1","botton2","botton3","botton4"];
let gamesq=[];
let usersq=[];
let start=false;
let level=0;

document.addEventListener('keypress',()=>{
    if(start==false){
        start=true;
        levelup();
    }
})

function flash(xyz) {
    let element=document.querySelector(`${xyz}`);
 element.classList.add("flash");
        setTimeout(function() {
      element.classList.remove("flash");
    }, 250);
    sound2();
  } 


function sound2(){
 sound.currentTime = 0; 
    sound.play();
}

function verify(){
  let idx = usersq.length - 1;
  if (gamesq[idx] === usersq[idx]) {
    if (usersq.length === gamesq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h3.innerText = 'Game Over! Press Any Key to Restart';
    start = false;
    gameover();
    level = 0;
    gamesq = [];
    usersq=[];
}
}
for(btn of btns){
  btn.addEventListener('click', btnactive);
}

function btnactive(){
  console.log(this);
  let two=this;
  sound.currentTime = -1; 
    sound.play();
   let userclr=two.getAttribute('id');
   usersq.push(userclr);
   console.log(userclr);
   verify();
  }
  function levelup(){
  usersq=[];
    level++;
    console.log(`${level}`);
    h3.innerText=(`level ${level}`) ;
    let idx=Math.floor(Math.random()*3);
    let name=buttons[idx];
    let xyz=`#${name}`;
  gamesq.push(name);   //random number
  console.log(gamesq);  
  
    flash(xyz);
}
function gameover(){
  sound555.currentTime=0;
  sound555.play();
}
