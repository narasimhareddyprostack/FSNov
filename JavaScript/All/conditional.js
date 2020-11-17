let day = "monday";

/*
if (100) {
  console.log("Holiday");
} else if (0) {
  console.log("Please Check");
} else {
  console.log("Pleae message");
}

*/
switch ("tuesday") {
  case "monday": {
    console.log("Today is Monday - with break");
  }
  case "monday": {
    console.log("Today is Monday - withour break");
  }
  case "tuesday": {
    console.log("Today is Tuesday");
  }
  case "wednesday": {
    console.log("Today is wednesday");
    break;
  }
  case "thursday": {
    console.log("Today is thursday");
    break;
  }
  case "friday": {
    console.log("Today is friday");
    break;
  }
  case "saturday": {
    console.log("Today is saturday");
    break;
  }
  default:
    console.log("Sunday");
}
