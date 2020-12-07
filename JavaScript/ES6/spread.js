let user = {
  name: "Narasimha",
  email: "greetlabs@gmail.com",
};

let details = {
  mobile: 9591,
  address: "Marathahalli",
  email: "info@psa.com",
};
    
let userDetails = {
  ...user,
  ...details,
};
console.log(userDetails);
