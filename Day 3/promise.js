// Promise
function checkInventory(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
 console.log("Inventory is checked")
 reject(new Error('Failed to check inventry'));
 
    },2000)
    })
   
}

function CreateOrder(){
  return new Promise((resolve, reject) => {
        setTimeout(()=>{
 console.log("Order is created")
 resolve()
    },1000)
    })
}

function CheckPayment(){
   return new Promise((resolve, reject) => {
        setTimeout(()=>{
 console.log("Payment is done")
 resolve()
    },3000)
    })
}

function sendInvoice(){
     return new Promise((resolve, reject) => {
        setTimeout(()=>{
 console.log("Invoice sent")
 resolve()
    },4000)
    })
}

function main(){
    checkInventory()
.catch((err)=>{
console.log("error is: ",err);
})
.then(CreateOrder)
.catch((err)=>{
console.log("error is: ",err);
})
.then(CheckPayment)
.catch((err)=>{
console.log("error is: ",err);
})
.then(sendInvoice)
.catch((err)=>{
console.log("error is: ",err);
})

     
}

main()