const button = document.querySelector("#btn");
const text_box = document.querySelector("#text-box");

button.addEventListener("click", () => {
    if (text_box.value !== "") {
        const text = new SpeechSynthesisUtterance(text_box.value);
        speechSynthesis.speak(text);
    } else {
        alert("Textarea is empty. Enter text to read.");
    }
});