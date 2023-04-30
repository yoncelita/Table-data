
async function dataFill() {

    const url = "https://jsonplaceholder.typicode.com/users"
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);

    let tableBody = "";

    data.map((values) => {
        tableBody += `<tr>
        <td><input type="checkbox" id="checker" name="checker"></td>
        <td>${values.name}</td>
        <td>${values.username}</td>
        <td>${values.email}</td>
        <td>${values.address.city}</td>
        </tr>`
    })

    document.getElementById("tableBody").innerHTML = tableBody;


    // Set the original row background colors
    const tableRows = document.querySelectorAll("#tableBody tr");

    for (let i = 0; i < tableRows.length; i++) {
        if (i % 2 == 0) {
            tableRows[i].style.backgroundColor = 'var(--white)';
        } else {
            tableRows[i].style.backgroundColor = 'var(--secondary)';
        }
    }

}

dataFill()

const parentElement = document.getElementById("tableBody");
parentElement.addEventListener("click", (event) => {
    // Check if event was triggered by a checkbox
    if (event.target.type === "checkbox") {
        // Check if checkbox is selected
        if (event.target.checked) {
            let checkedRow = event.target.parentElement.parentElement;
            checkedRow.style.backgroundColor = 'var(--green)';
            checkedRow.style.color = 'var(--white)';
        } else {
            let checkedRow = event.target.parentElement.parentElement;

            // Set the row background color based on its index
            let index = Array.from(parentElement.children).indexOf(checkedRow);
            if (index % 2 == 0) {
                checkedRow.style.backgroundColor = 'var(--white)';
            } else {
                checkedRow.style.backgroundColor = 'var(--secondary)';
            }
            checkedRow.style.color = 'var(--primary)';
        }
    }
});
