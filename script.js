// Write your JavalerScript code here!

window.addEventListener("load", function(){
   let statusCheck = document.getElementById("launchStatusCheck");
   let form =document.getElementById("launchForm");
   let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
   let cargoMass = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");
   
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
     pilotStatus.innerHTML =`pilot: ${pilotInfo} is ready for launch`
     copilotStatus.innerHTML = `copilot: ${copilotInfo} is ready for launch`
     cargoMass.innerHTML =  `Cargo check passed`
     fuelStatus.innerHTML = `Fuel level check passed`
   };
     if (fuelLevelInfo <=9999){
        fuelStatus.innerHTML =`Insufficient Fuel`  
        launchStatus.innerHTML = `Shuttle not ready for Launch`
        launchStatus.style.color="red"
     }if (cargoMassInfo>=10001){
      cargoMass.innerHTML =  `Shuttle is to heavy, try a diet, or get rid of some stuff`
      launchStatus.innerHTML=`Shuttle not ready for Launch`
      launchStatus.style.color="red"
   };




      

      
      
      
      
         
      














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