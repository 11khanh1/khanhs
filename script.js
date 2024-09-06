document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Vui lòng nhập hai số hợp lệ');
        return;
    }

    // Tính UCLN (Greatest Common Divisor)
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Tính BCNN (Least Common Multiple)
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    const ucln = gcd(num1, num2);
    const bcnn = lcm(num1, num2);

    document.getElementById('ucln-result').textContent = 'UCLN: ' + ucln;
    document.getElementById('bcnn-result').textContent = 'BCNN: ' + bcnn;
});
