let myInput = document.getElementById('myInput');
let show;

function showAlert() {
     alert("Alert After 5 Seconds");

};

function showInfo() {
     myInput.value = "Alert Will PoP UP After 3 Second . Press Cancel If You Want To Cance It .";
     show = setTimeout(showAlert, 3000)
}

function cancelShow() {
     myInput.value = "Alert Canceled.";
     clearTimeout(show)
}
