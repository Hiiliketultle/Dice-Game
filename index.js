function mainFunction(){
    var randomNum = Math.floor((Math.random()*6)+1);
    var randomNum2 = Math.floor((Math.random()*6)+1);
    
    

if(randomNum==1 ){
    document.querySelector("img.img1").src = "images/dice1.png";
          }
else if(randomNum == 2){
    document.querySelector("img.img1").src = "images/dice2.png";
          }
else if(randomNum == 3){
document.querySelector("img.img1").src = "images/dice3.png";
    }
else if(randomNum == 4){
    document.querySelector("img.img1").src = "images/dice4.png";
              }
 else if(randomNum == 5){
   document.querySelector("img.img1").src = "images/dice5.png";
                      }
 else if(randomNum == 6){
 document.querySelector("img.img1").src = "images/dice6.png";
                              }

if(randomNum2 == 1){
    document.querySelector("img.img2").src= "images/dice1.png";
}
else if(randomNum == 2){
    document.querySelector("img.img2").src = "images/dice2.png";
                                 }
else if(randomNum == 3){
    document.querySelector("img.img2").src = "images/dice3.png";
            }

 else if(randomNum == 4){
     document.querySelector("img.img2").src = "images/dice4.png";
                     }
            
 else if(randomNum == 5){
    document.querySelector("img.img2").src = "images/dice5.png";
                    }
 else if(randomNum == 5){
    document.querySelector("img.img2").src = "images/dice6.png";
             }


if(randomNum < randomNum2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
    document.querySelector("p2.p2").innerHTML = "Player 2🚩";
    document.querySelector("p1.p1").innerHTML = "Player 1";
}

else if(randomNum > randomNum2){
        document.querySelector("h1").innerHTML = "Player 1 Wins"
        document.querySelector("p2.p2").innerHTML = "Player 2";
        document.querySelector("p1.p1").innerHTML = "Player 1🚩";
    }
else{
    document.querySelector("h1").innerHTML = "Draw"
    document.querySelector("p2.p2").innerHTML = "Player 2";
    document.querySelector("p1.p1").innerHTML = "Player 1";
}


}




    