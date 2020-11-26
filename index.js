
const cards=document.querySelectorAll(".card");

cards.forEach((card)=>card.addEventListener("click",flip))

var isFliped=false
var firstCard;
var secondCard;


function flip(){
    //console.log("flip");//
    this.classList.add("flip");
    if(!isFliped){
        isFliped=true;
        firstCard=this;
    }else{
        secondCard=this;
        chekIt();
    }

}
function chekIt(){
    console.log(firstCard);
    console.log(secondCard);
    console.log("chekking...");
    if(firstCard.dataset.image===secondCard.dataset.image){
        success();
    }else{
        fail();
    }
}
function success(){
    console.log("success");
    firstCard.removeEventListener("click",flip);
    secondCard.removeEventListener("click",flip);
    reset();
}


function fail(){
    console.log("fail ");
    setTimeout(()=>{
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")
        reset();
        shuffle();
    },1000)
}

function reset(){
  
    console.log("reset");
    isFliped=false;
    firstCard=null;
    secondCard=null;
   
}

// Todo:shuffle

function shuffle(){
    console.log("shuffling")
   
    setTimeout(()=>{
        cards.forEach((card)=>{
            var index=Math.floor(Math.random()*16);
            card.style.order=index;
        })
    },1000)
};