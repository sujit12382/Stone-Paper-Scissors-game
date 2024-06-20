let userScore=0;
let compScore=0;

let msg=document.querySelector("#msg");

let gencompchoice=()=>{
    let options=["stone","paper","scissors"];
    return options[Math.floor(Math.random()*3)];
}

let choices=document.querySelectorAll(".sel");
choices.forEach((choice)=>{
       choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        let compchoice=gencompchoice();
        if(userchoice===compchoice)
            {
                drawgame();
            }
        else
            {
                check(userchoice,compchoice);
            }    
        })
})

let drawgame=()=>{
    msg.innerText="Game drawn! Play Again";
    msg.style.backgroundColor="rgb(29, 2, 42)";
}

let check=(userchoice,compchoice)=>{
    let userwin=true;
    
    if(userchoice==="stone")
        {
            userwin= compchoice==="paper"? false : true;
        }
    else if(userchoice==="paper")
        {
            userwin= compchoice==="stone"? false : true;
        }
    else{
            userwin= compchoice==="stone"? false : true;
        } 
        update(userwin,userchoice,compchoice);
}

let update=(userwin,userchoice,compchoice)=>{
    let userScorePara=document.querySelector("#userscore");
    let compScorePara=document.querySelector("#compscore");
    if(userwin===true)
        {
            msg.innerText=`You won!! Your ${userchoice} beats ${compchoice}`;
            msg.style.backgroundColor="green";
            userScore++;
            userScorePara.innerText=userScore;
        }
    else
        {
            msg.innerText= `You Lost!! ${compchoice}  beats Your ${userchoice}`;
            msg.style.backgroundColor="red";
            compScore++;
            compScorePara.innerText=compScore;
        }

}












