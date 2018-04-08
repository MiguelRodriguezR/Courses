var coins = {
  'q': 25,
  'd': 10,
  'n': 5,
  'p': 1
};

module.exports = {
  getAmount: function(coinType) {
    if(!coins.hasOwnProperty(coinType)){
      throw new Error('Unrecognized coin ' + coinType);
    }
    return coins[coinType];
  },

  convertToChange: function(cents) {
    resp = ""
    for (c in coins){
      while(getAmount(c)<cents){
        resp+="-"+c;
        cents - getAmount(c);
      }
    }
    resp.split("-");
    return resp;
  }
};
