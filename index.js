

const hartNames = document.querySelectorAll(".hart-num");
const hartNumber = document.getElementById("hart-number");
const clearBtn = document.getElementById("clear-history");
const copyNumbers = document.querySelectorAll(".copy-number");
const copyCoin = document.getElementById("copy-coin");
const allCards = document.getElementsByClassName("card-name");


// call alert
let btnCalls = document.getElementsByClassName("btn-call")
let coinEliment = document.getElementById("coin");
let coins = parseInt(coinEliment.innerText);
for(let btnCall of btnCalls){
   btnCall.addEventListener("click", function(){
    
    if(coins < 20 ){
        alert("You don't have enough coins. You need at least 20 coins to make a call.");
        return ;
    }
   
    coins = coins - 20;
    coinEliment.innerText = coins;

    
   let callCard= btnCall.parentNode.parentNode;
   let callService = callCard.getElementsByClassName("service-name")[0].innerText;
   let callNumber = callCard.getElementsByClassName("service-number")[0].innerText;
   alert("📞"+ " " + "Calling" + " " + callService +" "+ callNumber+"...");
   const card = this.closest('.card-name');
    const title = card.querySelector('.card-title').innerText;
    const number = card.querySelector('.service-number').innerText;

    const cardData = {
      title,
      number,
      date :new Date().toLocaleTimeString()
    };

    cardTitleNumber.push(cardData);
    renderCallHistroy()
    // console.log(cardData); // For testing
    // console.log(cardTitleNumber); // To see the growing array
   
   })
}


// hart increase  functional
let count = 0;
for(let hartName of hartNames){
     hartName.addEventListener("click", function(){
        count ++;
        hartNumber.innerText = count;
    })
}

// copy function
let copyCount = 0;
for(let copyNumber of copyNumbers ){
    copyNumber.addEventListener("click", function(e){
        e.preventDefault();
        copyCount ++;
        copyCoin.innerText = copyCount;
        alert("copy clipboard number")
        const copyTexts = document.getElementsByClassName("service-number")
      // get the card
         const card = this.closest('.card-name')
         const sourceText = card.querySelector('.service-number').innerText;
        // copy test
        navigator.clipboard.writeText(sourceText).then(function(){
            
        })
    })
}



const cardTitleNumber = [];

const histroyContainer = document.getElementById("histroy-container")

function renderCallHistroy (){
histroyContainer.innerText="";

for(let result of cardTitleNumber){
        let div = document.createElement("div")
        div.innerHTML=`
                <div class="flex justify-between m-5 bg-[#efeeee] gap-2 rounded-lg py-2 px-3">
                        <div>
                            <h3 class="histroy-title font-medium text-sm">${result.title}</h3>
                            <p class="histroy-number font-medium text-sm">${result.number}</p>
                        </div>
                        <div>
                            <p class="font-medium text-sm">${result.date}</p>
                        </div>
                    </div> 
        
    
        `
        histroyContainer.appendChild(div)
      }
   
 

}

clearBtn.addEventListener("click", function(e){
  e.preventDefault();
 histroyContainer.innerHTML="";
 cardTitleNumber.length = 0;
});


