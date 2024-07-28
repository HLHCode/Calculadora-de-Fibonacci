function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate');
    const clearBtn = document.getElementById('clear');
    const exitBtn = document.getElementById('exit');
    const resultContainer = document.getElementById('result');

    calculateBtn.addEventListener('click', () => {
        const num = parseInt(document.getElementById('num').value);
        if (isNaN(num) || num <= 0) {
            alert('Por favor, ingrese un número entero positivo.');
            return;
        }

        const fibSequence = fibonacci(num);
        resultContainer.innerHTML = '';

        fibSequence.forEach(num => {
            const li = document.createElement('li');
            li.textContent = num;
            resultContainer.appendChild(li);
        });
    });

    clearBtn.addEventListener('click', () => {
        document.getElementById('num').value = '';
        resultContainer.innerHTML = '';
    });

    exitBtn.addEventListener('click', () => {
        window.close();
    });
});
