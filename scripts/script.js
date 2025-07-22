const img_and_description = document.getElementById("immagine-e-descrizione");

inizializzazione_colonne();


function inizializzazione_colonne(){
    axios.get(`https://lanciweb.github.io/demo/api/pictures/`).then(response => {
        for(let i = 0; i < 6; i++){
            const immagini = response.data;
            const url = immagini[i].url;
            img_and_description.innerHTML += generateCard({url});
        }
    })
}

const generateCard = ({url}) => {
    return `<div class="col-4">
            <div class="card bg-light border-0">
                <img class="card-img-top" src="${url}" alt="">
                <p class="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, impedit incidunt eligendi consectetur aut quia ullam quod beatae rem repellat.</p>
            </div>
          </div>`
}