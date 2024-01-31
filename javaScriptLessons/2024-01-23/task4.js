class BankAccount{
    #balance;

    constructor(accountNumber)
    {
        this.accountNumber = accountNumber;
        this.#balance = 0;
    }

    deposit(amount)
    {
        this.#balance += amount;
    }

    withdraw(amount)
    {
        if(this.#balance < amount) console.log("Not enough funds to withdraw. Your balance is:" + this.#balance + "eur");
        else this.#balance -= amount;
    }

    get balance()
    {
        return this.#balance;
    }
}

const myBankAccount = new BankAccount(123456789);

myBankAccount.deposit(400);
myBankAccount.withdraw(600);