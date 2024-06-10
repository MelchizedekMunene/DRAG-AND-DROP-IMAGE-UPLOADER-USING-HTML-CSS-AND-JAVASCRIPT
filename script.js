const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-field");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change" , uploadImage);

function uploadImage() {
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.style.border = 0;
    imageView.textContent = "";
}

dropArea.addEventListener("dragover" , function(e) {
    e.preventDefault();
});

dropArea.addEventListener("drop" , function(e) {
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
});