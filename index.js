function validateContact(event) {
    const isValid = (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57;
    if (!isValid) {
        event.preventDefault();
    }
}

function handleFormSubmit() {
    const url = "https://script.google.com/macros/s/AKfycbyKaF3OMkkrgrGl0kVyapGjvQUDlh85eLbrtTXY4KzQYXSY6ZVIOgHECukH2WntEN_g4Q/exec";

    const loaderElem = document.getElementById('loader');
    const maskElem = document.getElementById('mask');
    maskElem.style.display = "block";
    loaderElem.style.display = "block";

    const form = document.getElementById("signup-form");
    const data = new FormData(form);

    fetch(url, { method: "POST", body: data })
        .then(res => res.text())
        .then((response) => {
            console.log(response);
            const responseObj = JSON.parse(response);

            if (responseObj.result == "success") {
                window.location.href = 'file:///H:/Projects/FabIndia/thanks.html';
            } else { alert("FAILURE!"); }
        })
        .catch((err) => { console.error(err); });

    return false;
    // ('./thanks.html');
    // alert("Thank You.");
}