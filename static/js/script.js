const fileInput = document.getElementById('file');
const fileLabel = document.querySelector('.file-name');

fileInput.addEventListener('change', function() {
    if (fileInput.files.length > 0) {
        fileLabel.textContent = fileInput.files[0].name;  // Display the selected file's name
    } else {
        fileLabel.textContent = "No file chosen";  // Reset to default if no file is selected
    }
});
