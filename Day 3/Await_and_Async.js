// Promise
function checkInventory(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
 console.log("Inventory is checked")
 reject(new Error('Failed to check inventry'));
resolve()
 
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

async function main(){
    try {
        await checkInventory()
    } catch (error) {
        console.log("Error is: ",error);
        
    }
    try {
        await CreateOrder()
    } catch (error) {
        console.log("Error is: ",error);
        
    }
   

    
    await CheckPayment()
    await sendInvoice()


     
}

main()