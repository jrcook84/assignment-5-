// Write your JavaScript code here!
window.addEventListener("load", function(){
let form =document.getElementById("launchForm");
form.addEventListener("submit", function(event){
   event.preventDefault();
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName =document.querySelector("input[name=copilotName]");
   let fuelLevel =document.querySelector("input[name=fuelLevel]");
   let cargoMass =document.querySelector("input[name=cargoMass]");
   if (pilotName.value===""||copilotName.value==="" || fuelLevel.value===""||cargoMass.value===""){
      alert("we arent going anywhere until you fill the forms in!!!");
   }else if (isNaN(pilotName.value)===false||isNaN(copilotName)===false){
      alert("Did your parents really name you a number")
   }else if (isNaN(fuelLevel.value)||isNaN(cargoMass.value)){
      alert("Thats not a number, wierdo")
     
   
      //let launchInfo=[pilotName,copilotName,fuelLevel,pilotName];
      }














});

});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/