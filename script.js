const qrText = document.getElementById("qrText");
const qrResult = document.getElementById("qrResult");
const generateBtn = document.getElementById("generateBtn");
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

generateBtn.addEventListener("click", () => {
  const text = qrText.value.trim();

  if (text.length === 0) {
    alert("Please enter text or URL");
    return;
  }

  // Clear previous
  qrResult.innerHTML = "";

  // Generate QR
  new QRCode(qrResult, {
    text: text,
    width: 180,
    height: 180,
    colorDark: "#000000",
    colorLight: "#ffffff",
  });
});

themeToggle.addEventListener("click", () => {
   body.classList.toggle("dark");

   themeToggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";

   localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

// Load theme preference
if (localStorage.getItem("theme") === "dark") {
   body.classList.add("dark");
   themeToggle.textContent = "☀️";
} 