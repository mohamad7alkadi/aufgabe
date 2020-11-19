/**
 * CSS-ANIMATIONS
 * 1. Toggle the class "hidden" from the searchbar element, when the user clicks search button
 * 2. Clear the input by clicking the "x" button
 * 
 */
document.getElementsByClassName("search-btn")[0].addEventListener("click", f);
 function f(e){
    e.preventDefault();
    document.getElementById("searchbar").classList.toggle("hidden");
 }


 document.querySelector("#x").addEventListener("click", f2);
 function f2(){
    document.getElementById("searcharea").value = "";
 }