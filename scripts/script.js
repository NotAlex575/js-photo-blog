const img_and_description = document.getElementById("immagine-e-descrizione");
const img_and_button = document.getElementById("immagine-singola-e-pulsante");
const immagine_grande = document.getElementById("immagine-grande");
const button_image = document.getElementById("one-photo"); 


inizializzazione_colonne();

//INIZIALIZZAZIONE DELLE 6 CARDc(PASSAGGIO DEI VALORI)
function inizializzazione_colonne(){
    axios.get(`https://lanciweb.github.io/demo/api/pictures/`).then(response => {
        for(let i = 0; i < 6; i++){
            const immagini = response.data;
            const url = immagini[i].url;
            //GENERAZIONE CARD
            img_and_description.innerHTML += generateCard({url});
        }

        //questo perchè prima si genera la card, e poi puoi richiamare tutto il contenuto con l'id (che si richiama con #) "image-cliccable"
        const immagini_cliccabili = document.querySelectorAll("#image-cliccable");
        //per ogni button immagine creata in precedenza
        immagini_cliccabili.forEach(button => {
            button.addEventListener("click", function(){
                img_and_button.classList.remove("d-none");
                immagine_grande.innerHTML += `<img class="card-img-top" src="img/Harleq.jpg" alt=""></img>`
                img_and_description.classList.add("d-none");
            });
        });
    })
}

//CREAZIONE CARD (UNO AD UNO)
const generateCard = ({url}) => {
    return `<div class="col-4">
            <div class="card bg-light border-0">
                <button type="button" class="border-0" id="image-cliccable">
                    <img class="card-img-top" src="${url}" alt="">
                </button>
                <p class="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, impedit incidunt eligendi consectetur aut quia ullam quod beatae rem repellat.</p>
            </div>
          </div>`
}


//VISIBILITA IMMAGINE GRANDE SINGOLA
button_image.addEventListener("click", function(){
    img_and_description.classList.remove("d-none");
    immagine_grande.innerHTML = "";
    img_and_button.classList.add("d-none")
})
