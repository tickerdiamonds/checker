function checkWallet() {
    var walletAddress = document.getElementById("walletInput").value;
    // Implement logic to check if the wallet address is in your list
    // For demonstration purposes, let's assume we have a list of wallet addresses in an array
    var walletList = ['wallet1', 'wallet2', 'wallet3'];
    var resultDiv = document.getElementById("result");
    if (walletList.includes(walletAddress)) {
        resultDiv.innerHTML = "Your wallet is in the list.";
    } else {
        resultDiv.innerHTML = "Your wallet is not in the list.";
    }
}
