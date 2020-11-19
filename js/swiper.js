/**
 * SLIDER WITH SWIPERJS
 * 1. Read the get started guide at https://swiperjs.com/get-started/
 * 2. Initialize the swiper element with the class ".swiper-container" with pagination as type fraction
 * 
 * https://swiperjs.com/api/
 * https://swiperjs.com/demos/
 * 
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM ready');

document.getElementsByClassName("search-btn")[0].addEventListener("click", f);
 function f(e){
    e.preventDefault();
    document.getElementById("searchbar").classList.toggle("hidden");
 }


 document.querySelector("#x").addEventListener("click", f2);
 function f2(){
    document.getElementById("searcharea").value = "";
 }





});