class BankAccount{

private balance:number

public constructor(balance:number){
    this.balance=balance
}

public checkBalance():number{
    return this.balance
}
public Deposit(amount:number){
    const n= this.balance+=amount
    return `You have Deposited ${amount},the new balance is ${n} `
}

public Withdraw(amount:number){
    if (this.balance>amount){
        return this.balance-=amount
    }
    else
    {
        return `Insufficient amount to withdraw.Kindly top up your account!`
    }
}
}

const account=new BankAccount(900)
console.log(account.Deposit(500))
console.log(account.Withdraw(900))