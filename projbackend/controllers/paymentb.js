const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId:   'nxbdnddw7yfbvgvb',
  publicKey:    'svznjgnw7b47qtqr',
  privateKey:   '10f56951a666f84913b579d9c655b5fc'
});


exports.getToken=(req,res)=>{
    gateway.clientToken.generate({}, (err, response) => {
       if(err){
           res.status(500).json(err)
       }else{
           res.send(response)
       }
      });
}

exports.processPayment =(req,res)=>{
    let nonceFromTheClient = req.body.paymentMethodNonce

    let amountFromTheClient = req.body.amount;
    gateway.transaction.sale({
        amount: amountFromTheClient,
        paymentMethodNonce: nonceFromTheClient,
        options: {
          submitForSettlement: true
        }
      }, function (err, result) {
          if(err){
              res.status(500).json(err)
          }else{
            res.json(result)
          }
      });
}