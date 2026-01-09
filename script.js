document.getElementById("csvFile").addEventListener("change", handleFile);

function handleFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const text = e.target.result;
        console.log(text); // erster Test
    };
    reader.readAsText(file);
}
