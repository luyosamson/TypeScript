var BankAccount = /** @class */ (function () {
    function BankAccount(balance) {
        this.balance = balance;
    }
    BankAccount.prototype.checkBalance = function () {
        return this.balance;
    };
    BankAccount.prototype.Deposit = function (amount) {
        var n = this.balance += amount;
        return "You have Deposited ".concat(amount, ",the new balance is ").concat(n, " ");
    };
    BankAccount.prototype.Withdraw = function (amount) {
        if (this.balance > amount) {
            return this.balance -= amount;
        }
        else {
            return "Insufficient amount to withdraw.Kindly top up your account!";
        }
    };
    return BankAccount;
}());
var account = new BankAccount(900);
console.log(account.Deposit(500));
console.log(account.Withdraw(900));
