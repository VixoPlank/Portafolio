let container = document.querySelector(".contenedor"),
    qrInput = document.querySelector(".form input"), // el value funciona cuando esta dentro funct
    boton = document.querySelector(".form button"),
    QRimg = document.querySelector(".qr_code img"),
    descargar = document.querySelector(".descargar"),
    img = document.querySelector("img");


boton.addEventListener("click", () => {
    let qrValue = qrInput.value;

    if (!qrValue) return;
    boton.innerHTML = "Generando codigo QR...!";
    QRimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

    QRimg.addEventListener("load", () => {
        container.classList.add("active");
        boton.innerHTML = "Generar Codigo QR";
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        container.classList.remove("active");
    }
})



descargar.addEventListener("click", () => {
    let imgPath = img.getAttribute("src");
    let nombreFile = getFileName(imgPath);

    saveAs(imgPath, nombreFile);
});

function getFileName(str) {
    return str.substr(str.lastIndexOf('/') + 1);
}
