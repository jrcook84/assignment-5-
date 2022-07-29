// Write your JavalerScript code here!
function randomizer(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
}
window.addEventListener("load", function(){
   let data = []
   fetch( "https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(data){
         let destination = document.getElementById("missionTarget")
         let missionDestination = randomizer(data);
         
         destination.innerHTML =
         ` <ul>
         <li>Name: ${missionDestination.name}</li>
         <li>Diameter: ${missionDestination.diameter}</li>
         <li>Star: ${missionDestination.star}</li>
         <li>Distance from Earth: ${missionDestination.distance}</li>
         <li>Number of Moons: ${missionDestination.moons}</li>
         </ul>
         <img class="avatar" src="${missionDestination.image}">
         </img>`
         let refreshButton= document.getElementById("refresh");
         refreshButton.addEventListener("click", function(){
            let missionDestination = randomizer(data);
      });
   });
});  
   
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
     cargoMass.innerHTML =  ` Cargo check passed`
     fuelStatus.innerHTML = `Fuel level check passed`
     launchStatus.style.color="green"
     launchStatus.innerHTML=`Buckle up, we are out of here `
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




      

      
      
      
      
         
      















