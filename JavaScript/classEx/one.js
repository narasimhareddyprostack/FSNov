class BankAccount {
  account_Bal = 10000;

  constructor(a, b, c, d) {
    this.name = a;
    this.accountNo = b;
    this.mobile = c;
    this.email = d;
    this.address = "Marathahalli";
    var y = 100;
    console.log("Construcor executed automatically");
  }

  openAccoount() {
    let x = 100;
    console.log(
      "Account Opend Successfully: Account No",
      this.accountNo,
      this.y,
      x,
      this.account_Bal
    );
  }
  closeAccount = () => {
    console.log("Account Close Successfully");
  };
}
var Naccoount = new BankAccount("Narasimha", 12345, 9591, "test@gmail.com");
Naccoount.openAccoount();
Naccoount.closeAccount();
