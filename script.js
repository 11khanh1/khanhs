function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

function calculate() {
    const num1 = parseInt(document.getElementById('number1').value);
    const num2 = parseInt(document.getElementById('number2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert('Vui lòng nhập số hợp lệ.');
        return;
    }
    
    const resultGCD = gcd(num1, num2);
    const resultLCM = lcm(num1, num2);
    
    document.getElementById('gcdResult').innerText = `UCLN: ${resultGCD}`;
    document.getElementById('lcmResult').innerText = `BCNN: ${resultLCM}`;
}
