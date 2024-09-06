document.getElementById('calculateButton').addEventListener('click', function() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Vui lòng nhập số hợp lệ.");
        return;
    }

    const ucln = gcd(num1, num2);
    const bcnn = lcm(num1, num2);

    document.getElementById('uclnResult').textContent = `UCLN: ${ucln}`;
    document.getElementById('bcnnResult').textContent = `BCNN: ${bcnn}`;
});

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
