document.getElementById("csvFile").addEventListener("change", handleFile);

function handleFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const csv = e.target.result;
        const rows = csv.split("\n").map(row => row.split(","));
        renderTable(rows);
    };
    reader.readAsText(file);
}

function renderTable(rows) {
    let table = "<table><thead><tr>";

    rows[0].forEach(header => {
        table += `<th>${header}</th>`;
    });

    table += "</tr></thead><tbody>";

    for (let i = 1; i < rows.length; i++) {
        table += "<tr>";
        rows[i].forEach(cell => {
            table += `<td>${cell}</td>`;
        });
        table += "</tr>";
    }

    table += "</tbody></table>";
    document.getElementById("output").innerHTML = table;
}
