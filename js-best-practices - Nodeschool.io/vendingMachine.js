var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');


var products = [
  {
    name: 'Skittles',
    price: 85,
    id: 'A1'
  }
];

module.exports = {



  insertCoin: function(coinType){
    var value = this.getAmount(coinType);
    this.increaseBalance(value);
  },

  isValidAmount: function(amount){
    if(amount === null){
      return false;
    } else {
      return true;
    }
  },

  releaseChange: function(){
    var currentBalance = this.getBalance();
    this.decreaseBalance(currentBalance);
    return this.convertToChange(currentBalance);
  },


  vendProduct: function(productId){
    var product = this.getProduct(productId);
    this.decreaseBalance(product.price);
    return product;
  }

};
