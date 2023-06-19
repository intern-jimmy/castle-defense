import Web3 from 'web3';

// Check if MetaMask is installed and available
export async function connectToWallet() {
  if (window.ethereum) {
  
    await window.ethereum.request({ method: "eth_requestAccounts" });
    window.web3 = new Web3(window.ethereum);
    const account = web3.eth.accounts;
    //Get the current MetaMask selected/active wallet
    const walletAddress = account.givenProvider.selectedAddress;
    return walletAddress;
  } else {
    console.log("No wallet");
    return null;
  }
}