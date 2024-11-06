{

    //Getter and setter

    class BankAccount {
        readonly id: number;
        public name: string;
        protected balance: string;
    
        constructor(id: number, name: string, balance: string) {
          this.id = id;
          this.name = name;
          this.balance = balance;
        }
    
    //    public addDeposit(amount: number) {
    //       this.balance = this.balance + amount;
    //     }

    get Balance(){
        return this.balance;
    }

    //     getBalance() {
    //       return this.balance
    //     }
    //   }
    
      class StudentAccount extends BankAccount{
        test(){
            this.balance
        }
      }
    
      const goribMaunsherAccount = new BankAccount(111, "mr.x", "5");
      //   goribMaunsherAccount.name = "sadik";
    //   goribMaunsherAccount.addDeposit(0.5);
    //   goribMaunsherAccount.getBalance();
    
    const myBalance = goribMaunsherAccount.B

    ///
}