function Ejecutarefectotarjetas()
{
let myItems= document.getElementsByClassName("center_container triki_cell");
for (let i=0; i<myItems.length; i++)
{
let mycard=myItems[i];
mycard.addEventListener('mouseover', () => {

   // myNumberSixCard.className = "centered-container tricki-cell onhover-card";

   mycard.classList.add("onhover-card");

});

mycard.addEventListener('mouseout', () => {

   mycard.classList.remove("onhover-card");

});

}


}



module.exports = {

    setCardsPopEffect: Ejecutarefectotarjetas

}