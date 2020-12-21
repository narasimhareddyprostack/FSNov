let user = {
  name: "Narasimha",
  email: "greetlabs@gmail.com",
};

let details = {
  mobile: 9591,
  address: "Marathahalli",
  email: "info@psa.com",
  name:'Yogesh'
};
    
let userDetails = {
  ...user,
  ...details,
};
console.log(userDetails);
