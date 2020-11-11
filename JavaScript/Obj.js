var user = {
  name: "narasimha",
  email: "greetlabs@gmail.com",
  password: "123@123",
};

//how to access Obj Properteis
console.log(user.name);
console.log(user.email);
console.log(user["password"]);
user.password = "345@345";
console.log(user);

user["is_Avail"] = false;
console.log(user);

delete user.is_Avail;

console.log(user);

delete user;

console.log(user.email);
