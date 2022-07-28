// Write your JavaScript code here!
let formNode=[]
window.addEventListener("load", function(){
   let statusCheck = document.getElementById("launchStatusCheck");
   let form =document.getElementById("launchForm");
   // let pilotStatus = document.getElementById("pilotStatus");
   // let copilotStatus = document.getElementById("copilotStatus");
   // let fuelStatus = document.getElementById("fuelStatus");
   // let cargoMass = document.getElementById("cargoMass");
form.addEventListener("submit", function(event){
   event.preventDefault();
   let pilotInfo = document.querySelector("input[name=pilotName]");
   let copilotInfo =document.querySelector("input[name=copilotName]");
   let fuelLevelInfo =document.querySelector("input[name=fuelLevel]");
   let cargoMassInfo =document.querySelector("input[name=cargoMass]");
   if (pilotInfo.value===""||copilotInfo.value==="" || fuelLevelInfo.value===""||cargoMassInfo.value===""){
      alert("we arent going anywhere until you fill the forms in!!!");
   }else if (isNaN(pilotInfo.value)===false||isNaN(copilotInfo)===false){
      alert("Did your parents really name you a number")
   }else if (isNaN(fuelLevelInfo.value)||isNaN(cargoMassInfo.value)){
      alert("Thats not a number, wierdo")
   }else{
      //itemStatus.styles.visibility = "visible"
      
      formNode.push(pilotInfo.value, copilotInfo.value, fuelLevelInfo.value, cargoMassInfo.value);
      for(let i = 0; i<formNode.length; i++){
         launchStatusCheck.innerHTML+= formNode[i]
      }
      
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