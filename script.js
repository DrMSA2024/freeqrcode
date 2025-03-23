function generateQRCode() {
    let data = document.getElementById("data").value;
    let filename = document.getElementById("filename").value;

    if (data.trim() === "" || filename.trim() === "") {
        alert("Please enter data and filename!");
        return;
    }

    let qrDiv = document.getElementById("qrcode");
    qrDiv.innerHTML = "";  // Clear previous QR code

    let qrCode = new QRCode(qrDiv, {
        text: data,
        width: 200,
        height: 200
    });

    setTimeout(() => {
        document.getElementById("downloadBtn").style.display = "block";
    }, 500);
}

function downloadQRCode() {
    let qrCanvas = document.querySelector("#qrcode canvas");

    if (!qrCanvas) {
        alert("Generate a QR code first!");
        return;
    }

    let filename = document.getElementById("filename").value;
    let link = document.createElement("a");
    link.href = qrCanvas.toDataURL("image/png");
    link.download = filename + ".png";
    link.click();
}
