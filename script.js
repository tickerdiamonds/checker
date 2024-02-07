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
            resultDiv.innerHTML = "You are eligible for 100 000 $DIAMONDS 🎉";
        } else {
            resultDiv.innerHTML = "You are not eligible 😭";
        }
    })
    .catch(error => console.error('Error fetching wallets.json:', error));
}
