// Write your JavalerScript code here!

window.addEventListener("load", function(){
   let statusCheck = document.getElementById("launchStatusCheck");
   let form =document.getElementById("launchForm");
   let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
   let cargoMass = document.getElementById("cargoStatus");
   form.addEventListener("submit", function(event){
      event.preventDefault();
      let itemStatus = document.getElementById("itemStatus");
   let pilotInfo = document.querySelector("input[name=pilotName]").value;
   let copilotInfo =document.querySelector("input[name=copilotName]").value;
   let fuelLevelInfo =document.querySelector("input[name=fuelLevel]").value;
   let cargoMassInfo =document.querySelector("input[name=cargoMass]").value;
   if (pilotInfo===""||copilotInfo==="" || fuelLevelInfo===""||cargoMassInfo===""){
      alert("we arent going anywhere until you fill the forms in!!!");
   }else if (isNaN(pilotInfo)===false||isNaN(copilotInfo)===false){
      alert("Did your parents really name you a number")
   }else if (isNaN(fuelLevelInfo)||isNaN(cargoMassInfo)){
      alert("Thats not a number, wierdo")
   }else{
     itemStatus.style.visibility = "visible"
      
      
      
         
         pilotStatus.innerHTML =pilotInfo
         copilotStatus.innerHTML = copilotInfo
         fuelStatus.innerHTML = fuelLevelInfo
         cargoMass.innerHTML =  cargoMassInfo
      
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