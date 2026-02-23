function convert() {
    const inputField = document.getElementById("decimalInput");
    const decimalNumber = parseInt(inputField.value);
    const outputDiv = document.getElementById("output");

    if (!isNaN(decimalNumber) && decimalNumber >= 0) {
        const octal = decimalNumber.toString(8);
        const hex = decimalNumber.toString(16).toUpperCase();
        const binary = decimalToBinary(decimalNumber);

        outputDiv.innerHTML = `
            <div class="result-item">
                <span class="result-label">Binary</span>
                <span class="result-value">${binary}</span>
            </div>
            <div class="result-item">
                <span class="result-label">Octal</span>
                <span class="result-value">${octal}</span>
            </div>
            <div class="result-item">
                <span class="result-label">Hexadecimal</span>
                <span class="result-value">${hex}</span>
            </div>
        `;
    } else {
        outputDiv.innerHTML = `
            <div style="color: #ef4444; font-size: 0.8rem; text-align: center;">
                Silakan masukkan angka desimal positif.
            </div>
        `;
    }
}

function decimalToBinary(num) {
    return num.toString(2).padStart(4, '0');
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("themeIcon");
    
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        themeIcon.className = "ri-sun-line";
    } else {
        themeIcon.className = "ri-moon-clear-line";
    }
}
