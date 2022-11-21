const distance = 199;

function scuberGreetingForFeet(distance){
  // Write your code here!
  

  if (distance <=400){

    return "This one is on me!";
  }
  
  else if(distance  <= 2500){

    return "I will gladly take your thirty bucks.";
  }
  
  else if(distance > 2500){

    return "No can do.";
  }
  
}

const city = "NYC"

function ternaryCheckCity(city){

  // Write your code here!

 let checkCity = city? ('Ok, sounds good.') : ('No go.');

 return checkCity;

 

  
  

}
const tip = "generous";

let appreciation;

function switchOnCharmFromTip(tip){
  // Write your code here!


  switch (tip){

    case "generous":
      appreciation = "Thank you so much.";
      break;
      

      case "not as generous":
        appreciation = "Thank you.";
        break;
      

       default:
        appreciation = "Bye."
          break;

          

  }
  return appreciation;
}