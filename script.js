const output = document.getElementById("passwordOutput");
const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");
const copyBtn = document.getElementById("copyBtn");

const upper = document.getElementById("includeUpper");
const lower = document.getElementById("includeLower");
const numbers = document.getElementById("includeNumbers");
const symbols = document.getElementById("includeSymbols");

document.getElementById("generateBtn").addEventListener("click", generatePassword);

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(output.value);
    copyBtn.textContent = "Copied!";
    setTimeout(() => copyBtn.textContent = "Copy", 1200);
});

function generatePassword() {
    let chars = "";

    if (upper.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower.checked) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers.checked) chars += "0123456789";
    if (symbols.checked) chars += "!@#$%^&*()_-+=<>?/{}[]|~";

    if (chars.length === 0) {
        output.value = "";
        return;
    }

    let pwd = "";
    for (let i = 0; i < lengthSlider.value; i++) {
        pwd += chars[Math.floor(Math.random() * chars.length)];
    }

    output.value = pwd;

    output.animate(
        [
            { opacity: 0.3 },
            { opacity: 1 }
        ],
        { duration: 250 }
    );
}
