let p1Score = document.querySelector("#p1score");
let p2Score = document.querySelector("#p2score");

const p1Button = document.querySelector("#p1btn");
const p2Button = document.querySelector("#p2btn");


const reset = document.querySelector("#reset");
let GameInput = document.querySelector('#inputId')

let playScore = document.querySelector('#playScore')
let resultShow = document.querySelector('#result')



let scoreP1 = 0;
let scoreP2 = 0;
//let winScore = 5;

let gameover = false;

//let winScore =  parseInt(GameInput.value) 
//console.log(winScore)
let winScore = 0;

inputId.addEventListener('change', ()=>{
  let inputValue = Number(inputId.value)
  //console.log(inputValue);
  playScore.innerText = inputValue
  //console.log(playScore.innerText);
  winScore = inputValue
  inputId.value = ''
  //console.log(winScore);

})


p1Button.addEventListener("click", () => {
  if (!gameover) {
    scoreP1 += 1;
    p1Score.textContent = scoreP1;
    p1Button.disabled = true;
    p2Button.disabled = false;

    scoreUpdate(scoreP1, winScore)
  }
});

p2Button.addEventListener("click", () => {
  if (!gameover) {
    scoreP2 += 1;
    p2Score.textContent = scoreP2;
    p1Button.disabled = false;
    p2Button.disabled = true;

    scoreUpdate(scoreP2, winScore)
  }
});


//Reapeating task using by unction
  function scoreUpdate (oldScore, winScore){
    if (winScore === oldScore) {
      gameover = true;
      p1Button.disabled = true;
      p2Button.disabled = true;
      
      if(scoreP1 ===winScore ){
          resultShow.innerText='Congratulation! Player1 win the match'
      }else if(scoreP2 ===winScore){
        resultShow.innerText='Congratulation! Player2 win the match'
      }

    }
  }


reset.addEventListener('click', ()=>{

  scoreP1 = 0;
  scoreP2 = 0;
  p1Score.innerText = 0;
  p2Score.innerText = 0;

  p1Button.disabled = false;
  p2Button.disabled = false;
  gameover = false;

  playScore.innerText = 0;

})

