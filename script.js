function convert() {
    var decimalNumber = parseInt(document.getElementById("decimalInput").value);

    if (!isNaN(decimalNumber) && decimalNumber >= 0) {
        var octalNumber = decimalNumber.toString(8);
        var hexadecimalNumber = decimalNumber.toString(16).toUpperCase();
        var binaryNumber = decimalToBinary(decimalNumber);

        document.getElementById("output").innerHTML = `
            <p>Octal: ${octalNumber}</p>
            <p>Hexadecimal: ${hexadecimalNumber}</p>
            <p>Binary: ${binaryNumber}</p>
        `;
    } else {
        document.getElementById("output").innerHTML = "Masukkan angka desimal dengan benar(tidak boleh negatif desimal) .";
    }
}

function decimalToBinary(decimalNumber) {
    var binaryNumber = decimalNumber.toString(2);
    var paddedBinary = binaryNumber.padStart(4, '0'); // Menambahkan nol di depan untuk membuat panjang menjadi 4 digit
    return paddedBinary;
}
function toggleTheme() {
    var body = document.body;
    body.classList.toggle("dark-theme");
    
    var themeButton = document.getElementById("themeButton");
    if (body.classList.contains("dark-theme")) {
        themeButton.textContent = "Light-Theme";
    } else {
        themeButton.textContent = "Dark-Theme";
    }
}
