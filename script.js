
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


}

dataFill()

const parentElement = document.getElementById("tableBody");
parentElement.addEventListener("click", (event) => {
    // Check if event was triggered by a checkbox
    if (event.target.type === "checkbox") {
        // Check if checkbox is selected
        if (event.target.checked) {
            console.log("Checkbox is selected");
            let checkedRow = event.target.parentElement.parentElement;
            checkedRow.style.backgroundColor = 'var(--green)';
            checkedRow.style.color = 'var(--white)';

        } else {
            console.log("Checkbox is not selected");
            let checkedRow = event.target.parentElement.parentElement;
            checkedRow.style.backgroundColor = 'var(--white)';
            checkedRow.style.color = 'var(--primary)';
        }
    }
});
