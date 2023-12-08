const cart=["tshirts","jeans", "shirts"]
api.createOrder(cart, function(){
    api.proceedToPayment(function(){
        api.updatesummery(function(){
            api.updateWallet()
        })
    })
})

//example
// callback hell
//inversion of control