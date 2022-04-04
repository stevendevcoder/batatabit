/* Programación del slider de planes */ 

var container = document.querySelector(".plans-card__container");
var planes = Array.from(document.querySelectorAll(".plans__card"));
var final = "medio";
var btnLeft = document.querySelector("#left-arrow");
var btnRight = document.querySelector("#right-arrow");

btnLeft.addEventListener("click", function(){
    console.log("izquierda")
})

btnRight.addEventListener("click", function(){
    console.log("derecha")   
})

planes.map(e => console.log(e))
