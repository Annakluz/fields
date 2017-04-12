//GLOBAL VARIABLES
let soccer = document.getElementById("soccer");
let basketball = document.getElementById("basketball");
let tenis = document.getElementById("tenis");
let soccerField = document.getElementById("soccerField");
let basketField = document.getElementById("basketField");
let tennisField = document.getElementById("tennisField");

//THIS FUNCTION HIDES ALL THE FIELDS WHEN LOADING STARTS
window.onload= function hide(){
    soccerField.style.display= "none";
    basketField.style.display = "none";
    tennisField.style.display = "none";
    
}

//SOCCER 
soccer.addEventListener("click", function(){
    soccerField.style.display = "block";
});
soccer.addEventListener("dblclick", function(){
    soccerField.style.display = "none";
});

//moving soccer ball with the event "onmousemove". 
soccerField.onmousemove = function(e){
    document.getElementById("soccerBall").style.top = e.pageY*1 + 5 + "px";
    document.getElementById("soccerBall").style.left = e.pageX*1 + 5 + "px";
}

//BASKET
basketball.addEventListener("click", function(){
    basketField.style.display = "block";
});
basketball.addEventListener("dblclick", function(){
    basketField.style.display = "none";
});
//moving the ball with the event "onmousemove".


//TENNIS
tenis.addEventListener("click", function(){
    tennisField.style.display = "block";
});
tenis.addEventListener("dblclick", function(){
    tennisField.style.display = "none";
});


