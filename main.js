const grBtn = document.querySelector("#gr-btn");

function grBtnClick() {
    console.log("button clicked");

    axios.get("https://swapi.dev/api/planets/?search=Alderaan")
    .then((req, res) => {
        for(i = 0; i < res.results.residents.length; i++) {
            axios.get(res.results.residents[i])
        }
    })
}

grBtn.addEventListener("click", grBtnClick)