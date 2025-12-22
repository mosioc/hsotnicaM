class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.transactions.push({ type: "deposit", amount: amount });
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    } else {
      return "Deposit amount must be greater than zero.";
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push({ type: "withdraw", amount: amount });
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    } else {
      return "Insufficient balance or invalid amount.";
    }
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits = this.transactions
      .filter((t) => t.type === "deposit")
      .map((t) => t.amount);
    return `Deposits: ${deposits.join(",")}`;
  }

  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter((t) => t.type === "withdraw")
      .map((t) => t.amount);
    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

// Creating the instance 'myAccount'
const myAccount = new BankAccount();

// Fulfilling requirements for myAccount:
// At least 5 transactions, 2 deposits, 2 withdrawals, and balance > $100
myAccount.deposit(200); // Transaction 1 (Deposit)
myAccount.deposit(150); // Transaction 2 (Deposit)
myAccount.withdraw(50); // Transaction 3 (Withdrawal)
myAccount.withdraw(25); // Transaction 4 (Withdrawal)
myAccount.deposit(30); // Transaction 5 (Deposit)

// Current Balance: 200 + 150 - 50 - 25 + 30 = 305
