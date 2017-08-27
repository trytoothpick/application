import Web3 from 'web3';
import TruffleContract from 'truffle-contract';

let instance = null;

const URL = 'http://localhost:8545';

class Ethereum {
  constructor() {
    this.initWeb3();
    // TODO: fetch ABI json from web server, init
    // this.initContract('/.json');
  }

  initWeb3() {
    if (typeof this.web3 !== 'undefined') {
      this.web3Provider = this.web3.currentProvider;
    } else {
      this.web3Provider = new Web3.providers.HttpProvider(URL);
    }

    this.web3 = new Web3(this.web3Provider);
  }

  initContract(uri) {
    fetch(URL + uri, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }
}

export default new Ethereum();
