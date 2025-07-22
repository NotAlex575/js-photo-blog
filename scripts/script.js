//chiamata immagine-e-descrizione

inizializzazione_colonne();


function inizializzazione_colonne(){
    axios.get(`https://lanciweb.github.io/demo/api/pictures/`).then(response => {
        for(let i = 0; i < 6; i++){
            const immagini = response.data;
            const url = immagini[i].url;
            console.log(url);
        }
    })
}
