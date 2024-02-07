function checkWallet() {
    var walletAddress = document.getElementById("walletInput").value;
    // Fetch the JSON file
    fetch('wallets.json')
    .then(response => response.json())
    .then(data => {
        // Assume the JSON structure is an array of wallet addresses
        var walletList = data.wallets;
        var resultDiv = document.getElementById("result");
        if (walletList.includes(walletAddress)) {
            resultDiv.innerHTML = "Your wallet is in the list.";
        } else {
            resultDiv.innerHTML = "Your wallet is not in the list.";
        }
    })
    .catch(error => console.error('Error fetching wallets.json:', error));
}
