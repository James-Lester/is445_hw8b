const main = async () => {
    document.getElementById("form").addEventListener("submit", (e) => {
        e.preventDefault();
        const url = `/articles`;

        const formData = new FormData(e.target);
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(response => response.text())
            .then(result => {
                const div = document.getElementById("result");
                const res = document.createElement("p");
                res.innerText = result;
                div.appendChild(res);
            })
            .catch(err => {
                console.error(err.message);
            });
    });
}

window.addEventListener("DOMContentLoaded", main);
