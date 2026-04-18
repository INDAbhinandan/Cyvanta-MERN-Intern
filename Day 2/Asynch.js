function checkInventory(){
    setTimeout(()=>{
 console.log("Inventory is checked")
    },2000)
   
}

function CreateOrder(){
    setTimeout(()=>{
  console.log("Order is created")
    },1000)
}

function CheckPayment(){
    console.log("Payment is done")
}

function sendInvoice(){
     setTimeout(()=>{
console.log("Invoice sent")
    },1000)
}

function main(){
    checkInventory()
    CreateOrder()
    CheckPayment()
    sendInvoice()
}

main()