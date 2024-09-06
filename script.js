function calculateUCLN() {
    const num1 = parseInt(document.getElementById('num1-ucln').value);
    const num2 = parseInt(document.getElementById('num2-ucln').value);
    let ucln = 1;
    for (let i = 1; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            ucln = i;
        }
    }
    document.getElementById('result-ucln').innerText = `UCLN: ${ucln}`;
}

function calculateBCNN() {
    const num1 = parseInt(document.getElementById('num1-bcnn').value);
    const num2 = parseInt(document.getElementById('num2-bcnn').value);
    const bcnn = (num1 * num2) / gcd(num1, num2);
    document.getElementById('result-bcnn').innerText = `BCNN: ${bcnn}`;
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}
