document.getElementById("year").textContent = new Date().getFullYear();

// Auto session (current year to next year)
const now = new Date();
const y = now.getFullYear();
document.getElementById("sessionYear").textContent = `${y}–${y + 1}`;

// Copy phone
const copyBtn = document.getElementById("copyPhone");
copyBtn.addEventListener("click", async () => {
  const phone = "9671126006";
  try {
    await navigator.clipboard.writeText(phone);
    copyBtn.textContent = "Copied ✅";
  } catch (e) {
    const temp = document.createElement("input");
    temp.value = phone;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    copyBtn.textContent = "Copied ✅";
  }
  setTimeout(() => (copyBtn.textContent = "Copy Phone"), 2000);
});
