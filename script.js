function convert() {
    const input = document.getElementById("decimalInput");
    const decimalNumber = parseInt(input.value);
    const output = document.getElementById("output");

    if (!isNaN(decimalNumber) && decimalNumber >= 0) {
        const octal = decimalNumber.toString(8);
        const hex = decimalNumber.toString(16).toUpperCase();
        const binary = decimalNumber.toString(2).padStart(4, '0');

        output.innerHTML = `
            <div class="res-item"><span class="res-label">BINER</span><span class="res-value">${binary}</span></div>
            <div class="res-item"><span class="res-label">OKTAL</span><span class="res-value">${octal}</span></div>
            <div class="res-item"><span class="res-label">HEKSA</span><span class="res-value">${hex}</span></div>
        `;
    } else {
        output.innerHTML = "<p style='color: #ef4444; font-size: 0.8rem;'>Masukkan angka desimal yang valid!</p>";
    }
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("themeIcon");
    const themeText = document.getElementById("themeText");

    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        themeIcon.className = "ri-sun-line";
        themeText.innerText = "Light Mode";
    } else {
        themeIcon.className = "ri-moon-line";
        themeText.innerText = "Dark Mode";
    }
}
