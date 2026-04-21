// A closure is a function that has access to variable from it's outer scope even after function excuted

function BankAccount(){
    let balance=1000
    function deposite(){
        balance+=500
        console.log("Balance is : ",balance)
    }
    return deposite
}

const myAccount=BankAccount()
myAccount()
myAccount()