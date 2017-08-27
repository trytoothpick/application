import Web3 from 'web3';
import TruffleContract from 'truffle-contract';

let instance = null;

const URL = 'http://localhost';
const PORT = 8545;

export default class Ethereum {
  constructor() {
    if (!instance) {
      if (typeof this.web3 !== 'undefined') {
        this.web3Provider = this.web3.currentProvider;
      } else {
        this.web3Provider = new this.Web3.providers.HttpProvider(URL + ':' + PORT);
      }

      this.web3 = new Web3(this.web3Provider);

      instance = this;
    }

    return instance;
  }

}
