//////Searchbar
function openSearchBar(){
   document.getElementById("id-search-bar").style.display="flex";
   if(window.innerWidth<900){
    document.getElementById("id-search-icon").style.display="none";
    document.getElementById("id-close-icon").style.display="block";
   }
   
    document.getElementById("id-search-icon").setAttribute('onclick',"closeSearchBar()");

   
   
}
function closeSearchBar(){
    document.getElementById("id-search-bar").style.display="none";
    document.getElementById("id-search-icon").style.display="flex";
    document.getElementById("id-close-icon").style.display="none";
    document.getElementById("id-search-icon").setAttribute('onclick',"openSearchBar()");
 }

 /////navbar
 function navbar(){
    document.getElementById("closeBurgerMenu").style.display="block";
    document.getElementById("openBurgerMenu").style.display="none";
    nav=document.getElementById('nav-bar');
    nav.classList.toggle("active")
    document.getElementById('men-col').classList.remove("active");
    document.getElementById('women-col').classList.remove("active");
    document.getElementById('homefur-col').classList.remove("active");
    document.getElementById('living-col').classList.remove("active");
    document.getElementById('bedding-col').classList.remove("active");
    document.getElementById('acces-col').classList.remove("active");
 }
 
 function closenavbar(){
    nav=document.getElementById('nav-bar').classList.remove("active");
    document.getElementById("closeBurgerMenu").style.display="none";
    document.getElementById("openBurgerMenu").style.display="block";
    document.getElementById('men-col').classList.remove("active");
    document.getElementById('women-col').classList.remove("active");
    document.getElementById('homefur-col').classList.remove("active");
    document.getElementById('living-col').classList.remove("active");
    document.getElementById('bedding-col').classList.remove("active");
    document.getElementById('acces-col').classList.remove("active");
 }
function mencol(){
    men=document.getElementById('men-col');
    men.classList.toggle("active")
    document.getElementById('nav-bar').classList.remove("active");
 }
 
 function backarrow(){
 
    navbar();
 }
 
 function womencol(){
    women=document.getElementById('women-col');
    women.classList.toggle("active")
    document.getElementById('nav-bar').classList.remove("active");
    
 }
 
 function homefurcol(){
    homefur=document.getElementById('homefur-col');
    homefur.classList.toggle("active")
    document.getElementById('nav-bar').classList.remove("active");
 }
 
 function livingcol(){
    living=document.getElementById('living-col');
    living.classList.toggle("active")
    document.getElementById('homefur-col').classList.remove("active");
 }
 
 function bedcol(){
    bed=document.getElementById('bedding-col');
    bed.classList.toggle("active")
    document.getElementById('homefur-col').classList.remove("active");
   
 }
 function homefurbackarrow(){
    homefur=document.getElementById('homefur-col');
    homefur.classList.toggle("active")
    document.getElementById('living-col').classList.remove("active");
    document.getElementById('bedding-col').classList.remove("active");
 }
 
 function womenacces(){
    acces=document.getElementById('acces-col');
    acces.classList.toggle("active")
    document.getElementById('women-col').classList.remove("active");
 }
 
 function accesbackarrow(){
    women=document.getElementById('women-col');
    women.classList.toggle("active")
    document.getElementById('acces-col').classList.remove("active")
 }
 
 ////slideshow
 var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); // Change image every 2 seconds
}