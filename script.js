document.getElementById('gcdForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const num1 = parseInt(document.getElementById('gcd-num1').value);
    const num2 = parseInt(document.getElementById('gcd-num2').value);
    
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    const gcdResult = gcd(num1, num2);
    
    document.getElementById('gcd-result').textContent = `ƯCLN: ${gcdResult}`;
});

document.getElementById('lcmForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const num1 = parseInt(document.getElementById('lcm-num1').value);
    const num2 = parseInt(document.getElementById('lcm-num2').value);
    
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

    const lcmResult = lcm(num1, num2);
    
    document.getElementById('lcm-result').textContent = `BCNN: ${lcmResult}`;
});
