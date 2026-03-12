function joinNow()
{
alert("Welcome! Please check our membership plans.");
}

function selectPlan(plan)
{
alert("You selected the " + plan + " plan.");
}

document.getElementById("contactForm").addEventListener("submit", function(e)
{
e.preventDefault();
alert("Thank you! Your message has been sent.");
});

window.addEventListener("scroll", function(){

let section = document.querySelector("#classes");
let position = section.getBoundingClientRect().top;
let screenPosition = window.innerHeight;

if(position < screenPosition){

let bars = document.querySelectorAll(".progress");

bars.forEach(function(bar){

let width = bar.getAttribute("data-width");
bar.style.width = width + "%";

});

}

});