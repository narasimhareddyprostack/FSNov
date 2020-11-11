// can we access object property, whichh not exits in Object?
// can we access object method/fun, whichh not exits in Object?

var product = {
  p_id: 101,
  p_Name: "Iphone12",
  login: function (name, user) {
    console.log(`User:${name} Email: ${user}.....logged in Successfully !`);
  },
};
console.log(product.p_id);
product.login("Narasimha", "greetlabs@gmail.com");
console.log(product.price);
