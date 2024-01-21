const emojis =[
    "😁",
    "😁",
    "😎",
    "😎",
    "😜",
    "😜",
    "🙄",
    "🙄",
    "🤨",
    "🤨",
    "😣",
    "😣",
    "🤑",
    "🤑",
    "🤩", 
    "🤩"
];

let score = 0;
let scoreElement = document.querySelector(".score");

let openCards = [];


 let shuffleEmojis = emojis.sort(()=>(Math.random()> 0.5 ? 2 : -1) )


for(let i=0; i< emojis.length; i++)
{

     let box = document.createElement("div");

     box.className = "item";
     box.innerHTML = shuffleEmojis[i];
     box.onclick= handleClick;
     document.querySelector(".game").appendChild(box);
 }

function handleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if(openCards.length ==2){
        setTimeout(checkMatch(), 500);
    }
}

function checkMatch(){

    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
        playAudio();
        incrementScore(10);
     }else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
        decrementScore(3);
    }
    
    openCards = [];

    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Parabéns seu Score foi:" + score );
    }
}

function playAudio(){
    let audio = new Audio("./src/audios/hit.m4a");
    audio.volume = 0.2;
    audio.play();
}

function incrementScore(points){
    score += points;
    
    updateScoreElement();
}

function decrementScore(points){
    score = Math.max(0, score - points);

    updateScoreElement();

}

function updateScoreElement(){
    scoreElement.innerHTML = score;
}