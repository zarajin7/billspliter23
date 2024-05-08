function calculateTip() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const customTip = parseFloat(document.getElementById("customTip").value);
    const numOfPeople = parseInt(document.getElementById("numOfPeople").value);
    let tipPercentage;
    if (isNaN(customTip)) {
        tipPercentage = parseFloat(document.querySelector(".tip.selected").getAttribute("data-tip"));
    } else {
        tipPercentage = customTip / 100;
    }
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = (billAmount + tipAmount) / numOfPeople;
    document.getElementById("tipAmount").innerText = `ksh${tipAmount.toFixed(2)}`;
    document.getElementById("totalAmount").innerText = `ksh${totalAmount.toFixed(2)}`;
}
function resetCalculator() {
    document.getElementById("billAmount").value = "";
    document.getElementById("customTip").value = "";
    document.getElementById("numOfPeople").value = "";
    document.getElementById("tipAmount").innerText = "ksh 0.00";
    document.getElementById("totalAmount").innerText = "$0.00";
}
document.querySelectorAll(".tip").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelectorAll(".tip").forEach(item => {
            item.classList.remove("selected");
        });
        item.classList.add("selected");
        calculateTip();
    });
});
document.getElementById("customTip").addEventListener("keyup", calculateTip);
document.getElementById("billAmount").addEventListener("keyup", calculateTip);
document.getElementById("numOfPeople").addEventListener("keyup", calculateTip)
