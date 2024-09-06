 function calculateUCLN() {
            const num1 = parseInt(document.getElementById('num1-ucln').value);
            const num2 = parseInt(document.getElementById('num2-ucln').value);

            function gcd(a, b) {
                if (b === 0) return a;
                return gcd(b, a % b);
            }

            const result = gcd(num1, num2);
            document.getElementById('result-ucln').textContent = `UCLN: ${result}`;
        }

        function calculateBCNN() {
            const num1 = parseInt(document.getElementById('num1-bcnn').value);
            const num2 = parseInt(document.getElementById('num2-bcnn').value);

            function gcd(a, b) {
                if (b === 0) return a;
                return gcd(b, a % b);
            }

            function lcm(a, b) {
                return (a * b) / gcd(a, b);
            }

            const result = lcm(num1, num2);
            document.getElementById('result-bcnn').textContent = `BCNN: ${result}`;
        }
