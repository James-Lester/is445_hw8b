const main = async () => {
    document.getElementById("form").addEventListener("submit", (e) => {
        e.preventDefault();
        const url = `/ex1`;

        const formData = new FormData(e.target);
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(response => response.text())
            .then(result => {
                document.getElementById("confirmationArea").textContent = result;
            })
            .catch(err => {
                console.error(err.message);
            });
    });
}

window.addEventListener("DOMContentLoaded", main);
