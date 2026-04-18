function checkInventory(callback){
    setTimeout(()=>{
 console.log("Inventory is checked")
 callback()
    },2000)
}

function CreateOrder(callback){
    setTimeout(()=>{
  console.log("Order is created")
  callback()
    },1000)
}

function CheckPayment(callback){
    setTimeout(()=>{
  console.log("Payment is done")
  callback()
    },3000)
}

function sendInvoice(callback){
     setTimeout(()=>{
console.log("Invoice sent")
callback()
    },4000)
}

function main(){
checkInventory(()=>{
CreateOrder(()=>{
CheckPayment(()=>{
sendInvoice(()=>{
console.log("Complete");   
})
})
})
    })
      
}

main()