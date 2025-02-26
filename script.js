function toggleUnit(element) {
    document.querySelectorAll('.unit').forEach(unit => {
        unit.classList.remove('selected');
    });
    element.classList.add('selected');

    let priceText = element.querySelector(".unit-header").textContent.match(/\$\d+\.\d+/);
    if (priceText) {
        document.getElementById("totalAmount").innerText = priceText[0] + " USD";
    }

}