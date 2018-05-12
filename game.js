var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");     //COULD H
    easyBtn.classList.add("selected");
     colors = generateRandomColors(3);
    pickedColor=pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0;i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display ="none"; 
        }
    }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");                             // BAD STYLE COULD HAVE REBUILT APP WITH LOOP OVER BOTH BUTTONS. REPEATED MYSELF
    hardBtn.classList.add("selected");
    pickedColor=pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0;i < squares.length; i++){
        
            squares[i].style.backgroundColor=colors[i];
            squares[i].style.display ="block"; 
        }
    
});

resetButton.addEventListener("click", function(){          //COULD REBUILD TO USE RESET FUNCTION IN MUTLIPLE AREAS
                                                            // USE A VAR WITH NUMBER OF SQUARE EXCEPT IF BUTTON CLICKED ON IS EASY CHANGE VAR TO 3 OR CHANGE VAR TO 6. 
                                                            //
//generate all new colors 
//pick new color from array 
colors = generateRandomColors(6);
messageDisplay.innerHTML ="";
pickedColor=pickColor();
colorDisplay.textContent = pickedColor;
this.textContent ="New Colors";
for(var x = 0;x < squares.length; x++){
    //adds colors to squares
    squares[x].style.backgroundColor = colors[x];
}
h1.style.backgroundColor ="steelblue";
});

for(var x = 0;x < squares.length; x++){
    //adds colors to squares
    squares[x].style.backgroundColor = colors[x];
    //adds click listen to squares
    squares[x].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        //compares color to clicked color
        if(clickedColor===pickedColor){
            messageDisplay.textContent ="CORRECT";
            
            changeColor(clickedColor);
            resetButton.textContent = "play again?";
            h1.style.backgroundColor = clickedColor;
        }
        else{
            this.style.backgroundColor ="#232323";
            messageDisplay.textContent ="Try Again";
        };
        
    });
}

function changeColor(color){
    //loop through squares to change colors of current square 
    for(var i = 0; i < squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
 var random = Math.floor(Math.random() * colors.length);
 return colors[random];
}

function generateRandomColors(num){
    //make array 
    //add num random colors to arry 
    var array = []

    for(var i =0;i < num;i++){
      array.push(randomColor());
    }
    return array;
}
function randomColor(){
var r = Math.floor(Math.random()*256);
var g = Math.floor(Math.random()*256);
var b = Math.floor(Math.random()*256);
return "rgb("+ r + ', ' + g +', ' + b + ")";
 }


