let randomN = parseInt(Math.random()*100+1);
const userInput = document.querySelector('#guessField');

const submit = document.querySelector('#subt');

const guesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');
const p = document.createElement('P');
let prevguess = []
let playgame = true;
let numguess = 10;
if(playgame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validate(guess);

  })
}
function validate(guess){
  //
  if(isNaN(guess)){
    alert('please Enter the valid number');
  }
  else if(guess<1){
    alert('please Enter a number greater then 0');
  }
  else if(guess>100){
    alert('please Enter a number less than 100');
  }
  else{
    prevguess.push(guess);
    if(numguess<=1){
      Displayguess(guess);
      Displaymsg(`Game over Random number was ${randomN}`);
      endgame();
    }
    else{
      Displayguess(guess);
      checkguess(guess);
  

    }
  }


}

function checkguess(guess){
  if(guess===randomN){
    Displaymsg('You guessed it right');
    endgame();
  }
  else if(guess<randomN){
    Displaymsg('Number is Tooo low');
  }
  else{
    Displaymsg('Number is Tooo High');
  }
  
}
function Displayguess(guess){
  userInput.value ='';
  guesses.innerHTML+= `${guess}, `;
  numguess--;
  remaining.innerHTML = `${numguess}`;
}


function  Displaymsg(message){
  loworHi.innerHTML = `<h2>${message}</h2>`;
}

function endgame(){
  userInput.value = '';
  userInput.setAttribute('disabled','');
  p.classList.add('button')
  p.innerHTML = '<h2 id="newGame">Start new game </h2>';

  startover.appendChild(p);
  playgame=false;
  newgame();
  
}

function newgame(){
  const btn = document.querySelector('#newGame');
  btn.addEventListener('click',function(e){
    randomN = parseInt(Math.random()*100+1);
    prevguess =[];
    numguess =10;
    guesses.innerHTML='';
    remaining.innerHTML = `${numguess}`;
    userInput.removeAttribute('disabled');
    startover.removeChild(p);
    loworHi.innerHTML ='';
    playgame=true;
  })
}