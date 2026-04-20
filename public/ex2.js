const countries = {
    "name": "James",
    "countries": [
        {
            "name": "Canada",
            "year": 2023
        },
        {
            "name": "Mexico",
            "year": 2002
        },
        {
            "name": "Peru",
            "year": 2014
        },
        {
            "name": "Chile",
            "year": 2018
        },
        {
            "name": "Guatemala",
            "year": 2022
        },
        {
            "name": "Costa Rica",
            "year": 2026
        },
        {
            "name": "Argentina",
            "year": 2030
        },
        {
            "name": "Venezuala",
            "year": 2034
        },
        {
            "name": "France",
            "year": 2038
        },
        {
            "name": "Germany",
            "year": 2042
        }
    ]
}


const postCountries = () => {
    fetch("/api/countries", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(countries)
    })
        .then(response => response.text())
        .then(result => {
            document.getElementById("result").textContent = result;
        })
        .catch(err => {
            console.error(err.message);
        });
}

const main = () => {
    const btn = document.getElementById("btn");
    btn.addEventListener("click", postCountries);
}

window.addEventListener("DOMContentLoaded", main);
