// Write your code in this file!

function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet > 2000 && feet < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    return 'No can do.';
  }
};

function ternaryCheckCity(city) {
  let response = '';
  return city === "NYC" ? response = "Ok, sounds good." : response = "No go.";
};

function switchOnCharmFromTip(tip) {
  let charmingResponse = "";
  switch (tip) {
    case "generous":
      return charmingResponse = "Thank you so much.";
      break;
    case "not as generous":
      return charmingResponse = "Thank you.";
      break;
    default:
      return charmingResponse = "Bye.";
      break;
  };
};
