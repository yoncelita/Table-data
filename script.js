
async function dataFill() {
    const url = "https://jsonplaceholder.typicode.com/users"
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);

    let tableBody = "";

    data.map((values) => {
        tableBody += `<tr>
        <td>${values.id}</td>
        <td>${values.name}</td>
        <td>${values.username}</td>
        <td>${values.email}</td>
        <td>${values.address.city}</td>
        </tr>`
    })

    document.getElementById("tableBody").innerHTML = tableBody;

}
dataFill()