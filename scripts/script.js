const img_and_description = document.getElementById("immagine-e-descrizione");
const img_and_button = document.getElementById("immagine-singola-e-pulsante");
const immagine_grande = document.getElementById("immagine-grande");
const button_image = document.getElementById("one-photo"); 


inizializzazione_colonne();

//INIZIALIZZAZIONE DELLE 6 CARDc(PASSAGGIO DEI VALORI)
function inizializzazione_colonne(){
    axios.get(`https://lanciweb.github.io/demo/api/pictures/`).then(response => {
        //qui dichiariamo gli array specifici per identificare poi i valori per l'immagine singola
        let idSearch = [];
        let urlSearch = [];
        //ci prendiamo tutto l'oggetto presente in https://lanciweb.github.io/demo/api/pictures/
        const immagini = response.data;
        for(let i = 0; i < 6; i++){
            //salviamo dentro i singoli array i valori necessari poi per creare le 6 column e per identificare l'immagine cliccata
            urlSearch.push(immagini[i].url);
            idSearch.push(immagini[i].id);
            //GENERAZIONE CARD
            img_and_description.innerHTML += generateCard({id: immagini[i].id, url: immagini[i].url});
        }

        //CREAZIONE IMMAGINE GRANDE SINGOLA:

        //chiamiamo tutte e 6 le column create in generateCard e le identifichiamo tramite l'uso dell'id #image-cliccable
        const immagini_cliccabili = document.querySelectorAll("#image-cliccable");
        //per ogni button immagine creata in precedenza (e li identifichiamo in base all'id che contiene nel div tramite l'uso di un counter che identifica se troviamo quell'id)
        immagini_cliccabili.forEach((button, counter) => {
            //se viene cliccata una delle 6 immagini, allora
            button.addEventListener("click", function(){
                img_and_button.classList.remove("d-none");
                //qui verrà implementata l'immagine specifica che abbiamo cliccato grazie all'array urlSearch (posizione counter)
                immagine_grande.innerHTML += `<img class="card-img-top" src="${urlSearch[counter]}" alt=""></img>`
                img_and_description.classList.add("d-none");
            });
        });
    })
}

//CREAZIONE CARD (UNO AD UNO)
const generateCard = ({id, url}) => {
    //creaiamo qui il contenuto della card specifica 
    return `<div class="col-4">
            <div class="card border-0">
                <button type="button" class="border-0" id="image-cliccable">
                    <img class="card-img-top" id="${id}" src="${url}" alt="">
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
