{
  //Getter and setter

  class BankAccount {
    readonly id: number;
    public name: string;
    protected balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    // Setter for depositing money
    set deposit(amount: number) {
      this.balance += amount;
    }

    // Getter to retrieve the balance
    get Balance() {
      return this.balance;
    }

    getBalance() {
      return this.balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      return this.balance;
    }
  }

  const goribMaunsherAccount = new BankAccount(111, "mr.x", 5);
  goribMaunsherAccount.deposit = 50; // Depositing 50

  const myBalance = goribMaunsherAccount.Balance;
  console.log("Balance after deposit:", myBalance);
  ///
}
