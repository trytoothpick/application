import Web3 from 'web3';
import TruffleContract from 'truffle-contract';

let instance = null;

const URL = 'http://localhost:8545';

class Ethereum {
  constructor() {
    // initialize web3
    if (typeof this.web3 !== 'undefined') {
      this.web3Provider = this.web3.currentProvider;
    } else {
      this.web3Provider = new Web3.providers.HttpProvider(URL);
    }

    this.web3 = new Web3(this.web3Provider);

    // initialize contract
    fetch(URL + '/Adoption.json').then((data) => {
      // // Get the necessary contract artifact file and instantiate it with truffle-contract.
      // var AdoptionArtifact = data;
      // App.contracts.Adoption = TruffleContract(AdoptionArtifact);
      //
      // // Set the provider for our contract.
      // App.contracts.Adoption.setProvider(App.web3Provider);
      //
      // // Use our contract to retieve and mark the adopted pets.
      // return App.markAdopted();    });
  }
}

export default new Ethereum();
