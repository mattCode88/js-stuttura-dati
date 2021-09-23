// CREO STRUTTURA DATI
const COLOR = ['nero', 'bianco', 'blu', 'verde', 'rosso'];

const TYPE = ['creatura', 'istantaneo', 'stregoneria', 'artefatto', 'incantesimo'];

class Card {
    constructor(image, name, mana, type, color, text, vitalita){
        this.image = image;
        this.name = name;
        this.mana = mana;
        this.type = type;
        this.color = color;
        this.text = text;
        this.vitalita = vitalita;
    }
};

let card1 = new Card('https://media.wizards.com/2021/mid/it_j6JJKW29cU.png',
                        'adeline, catara splendente',
                        3,
                        [TYPE[0]],
                        [COLOR[1]],
                        'la forza di adeline catara splendente è pari al numero di creature che controlli cautela',
                        ['n', 4]
                        );
let card2 = new Card('https://media.wizards.com/2021/mid/it_xNb9MZTHAf.png',
                        'triscaidecafila',
                        2,
                        [TYPE[0]],
                        [COLOR[2]],
                        'non hai un limite massimo di carte nella tua mano',
                        [1, 3]
                        );
let card3 = new Card('https://media.wizards.com/2021/mid/it_zXrVowtYdE.png',
                        'vampiro intruso',
                        2,
                        [TYPE[0]],
                        [COLOR[0]],
                        'il vampiro intruso non può bloccare',
                        [2, 1]
                        );
let card4 = new Card('https://media.wizards.com/2021/mid/it_F7WcCF48rg.png',
                        'termo-alchimista',
                        2,
                        [TYPE[0]],
                        [COLOR[4]],
                        'difensore',
                        [0, 3]
                        );
let card5 = new Card('https://media.wizards.com/2021/mid/it_Y8zifv5Pny.png',
                        'battipista di ponterovo',
                        3,
                        [TYPE[0]],
                        [COLOR[3]],
                        'cautela',
                        [2, 3]
                        );
let card6 = new Card('https://media.wizards.com/2021/mid/it_xjjKUaXTyv.png',
                        'difendere il celestus',
                        4,
                        [TYPE[1]],
                        [COLOR[3]],
                        'distribuisci tre segnalini tra due o piu creature che controlli',
                        false
                        );
let card7 = new Card('https://media.wizards.com/2021/mid/it_PQ3tvG0t2H.png',
                        'lame ustionanti',
                        2,
                        [TYPE[1]],
                        [COLOR[0]],
                        'pesca una carta',
                        false
                        );
let card8 = new Card('https://media.wizards.com/2021/mid/it_lYlOejVXQ4.png',
                        'considerare',
                        1,
                        [TYPE[1]],
                        [COLOR[2]],
                        'pesca una carta',
                        false
                        );
let card9 = new Card('https://media.wizards.com/2021/mid/it_RMC2pSgEs0.png',
                        'vivisezione',
                        4,
                        [TYPE[2]],
                        [COLOR[2]],
                        'pesca tre carta',
                        false
                        );   
let card10 = new Card('https://media.wizards.com/2021/mid/it_fYUS7Os4F3.png',
                        'coraggio contadino',
                        1,
                        [TYPE[2]],
                        [COLOR[1]],
                        'metti un segnalino su una creatura bersaglio che controlli',
                        false
                        );  
let card11 = new Card('https://media.wizards.com/2021/mid/it_TB3w4LNXaw.png',
                        'corazza di rovi',
                        2,
                        [TYPE[3]],
                        [COLOR[3]],
                        'quando entra nel campo assegnala a una creatura bersaglio',
                        false
                        );    
let card12 = new Card('https://media.wizards.com/2021/mid/it_hcmWP6TgZT.png',
                        'serbatoio di geistfiamma',
                        3,
                        [TYPE[3]],
                        [COLOR[4]],
                        'ogniqualvolta lanci una magia metti un segnalino carica',
                        false
                        );
let card13 = new Card('https://media.wizards.com/2021/mid/it_17jUdpj3Mt.png',
                        'maledizione della fede incrinata',
                        2,
                        [TYPE[4]],
                        [COLOR[4]],
                        'incanta giocatore',
                        false
                        );       
let card14 = new Card('https://media.wizards.com/2021/mid/it_crRNo7HCav.png',
                        'ululato di caccia',
                        3,
                        [TYPE[4]],
                        [COLOR[3]],
                        'incanta creatura',
                        false
                        );     
let card15 = new Card('https://media.wizards.com/2021/mid/it_Dj66bd8PF7.png',
                        'maledizione della sorveglianza',
                        5,
                        [TYPE[4]],
                        [COLOR[2]],
                        'incanta giocatore',
                        false
                        );  
let card16 = new Card('https://media.wizards.com/2021/mid/it_tsYPohOWhl.png',
                        'trappola di candele',
                        1,
                        [TYPE[4]],
                        [COLOR[1]],
                        'incanta creatura',
                        false
                        );   
let card17 = new Card('https://media.wizards.com/2021/mid/it_VEXKdDOGOz.png',
                        'necrosintesi',
                        2,
                        [TYPE[4]],
                        [COLOR[0]],
                        'incanta creatura',
                        false
                        );
let card18 = new Card('https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=203113&type=card',
                        'trappola vorace',
                        4,
                        [TYPE[1]],
                        [COLOR[0]],
                        'esilia tutte le carte dal cimitero di un giocatore',
                        false
                        ); 

let datiJson = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18];

console.log(datiJson);

// SEZIONE RICERCA AVANZATA
let cerca = document.getElementById("cerca");
let ricerca = document.getElementById("ricerca");
let type = document.getElementById("type");
let color = document.getElementById("color");
let mana = document.getElementById("mana");
let forza = document.getElementById("forza");
let costituzione = document.getElementById("costituzione");

// mostra nascondi ricerca
let controlResearch = false;

cerca.addEventListener("click", () => {
    if(!controlResearch){
        controlResearch = true;
        ricerca.setAttribute("class", "flex");
        cerca.innerText = "CHIUDI";
    }else{
        controlResearch = false;
        ricerca.setAttribute("class", "hide");
        cerca.innerText = "RICERCA AVANZATA";
    }
})

// genera select di ricerca
function generateOpt1(array, elemento){
    array.forEach(element => {
        let opt = document.createElement("OPTION");
        opt.innerText = element;
        elemento.appendChild(opt);
    });  
}

function generateOpt2(elemento){
    for(let i = 0; i <= 7; i++){
    let opt = document.createElement("OPTION");
    opt.innerText = i;
    elemento.appendChild(opt);
}
}

generateOpt1(TYPE, type);
generateOpt1(COLOR, color);
generateOpt2(forza);
generateOpt2(costituzione);
generateOpt2(mana);

// VISUALIZZAZIONE CARTE
// inizio
let containerCard = document.getElementById("container-card");

function createCards(json){
    json.forEach(element => {
        let img = document.createElement("IMG");
        let div = document.createElement("DIV");
        img.setAttribute("src", element.image);
        img.setAttribute("class", "immagine");
        div.setAttribute("class", "image1");
        div.appendChild(img);
        containerCard.appendChild(div);
    });
}

createCards(datiJson);

// pulisci carte
function cleanCard(){
    let arr = Array.from(containerCard.children);
    arr.forEach(element => {
        element.remove();
    });
}

// EVENTI DI RICERCA SELECT
let searchCards = document.getElementById("cerca-carte");
let select = document.getElementsByClassName("selected");
let arraySelect = Array.from(select);

searchCards.addEventListener("click", () => {

    // pulisco container carte ad ogni click
    cleanCard();
    

    let obj = {};
    let newArrayData = [];
    let newProp = false;

    // se è tutto ALL genero tutte le carte altrimenti creo un oggetto con i valori selezionati
    if(arraySelect[0].options.selectedIndex === 0 && 
        arraySelect[1].options.selectedIndex === 0 && 
        arraySelect[2].options.selectedIndex === 0 && 
        arraySelect[3].options.selectedIndex === 0 && 
        arraySelect[4].options.selectedIndex === 0 )
    {
        createCards(datiJson);
    }else{
        arraySelect.forEach(element => {
            if(element.options.selectedIndex !== 0){
                let opzione = element.name;
                let valore = element.value;
                obj[opzione] = valore;
            }
        });

        /*controllo se nell' oggetto sono presenti le proprietà forza o/e costituzione, se si genreo una nuova variabile con valore vitalita.
        Salvo il numero di proprietà presenti nell' oggetto. */
        let numeroProp = 0;
        for(prop in obj){
            numeroProp += 1;
            if((prop === 'forza' || prop === 'costituzione') || (prop === 'forza' && prop === 'costituzione')){
                newProp = 'vitalita';
            }
        }

        // inizio a ciclare l array dati 
        datiJson.forEach(element => {
            
            // per ogni elemento aggiungo la proprietà count e la setto a 0
            element.count = 0;

            // ciclo l' oggetto delle proprietà per verificare quali elementi dell' array dati hanno quelle proprietà
            for(prop in obj){

                /*se la proprietà newProp è stata creata, la prop corrisponde a forza e il valore della prop è uguale al primo valore
                dell' array vitalità dell' elemento, aumento il count dell' elemento di 1*/
                if(newProp && prop === 'forza' && (element[newProp][0] == obj[prop])){
                    element.count += 1;

                // faccio la stessa cosa per la costituzione
                }else if(newProp && prop === 'costituzione' && (element[newProp][1] == obj[prop])){
                    element.count += 1;

                /*in tutti gli altri casi, ossia quando nelle prop non è presente ne forza ne costituzione, controllo che il valore 
                della prop sia uguale al valore dell' elemento con quella prop, se si aumento il count */
                }else{
                    if(element[prop] == obj[prop]){
                        element.count += 1;
                    }
                }
            }
        });

        // riciclo l' array dati per verificare quali elementi hanno il count uguale al numero delle proprietà dell' oggetto obj e 
        // li pusho in un nuovo array
        datiJson.forEach(element => {
            if(element.count == numeroProp){
                newArrayData.push(element);
            }
        });
        
        // genero le carte in base agli elementi selezionati che rispettano i criteri di ricerca
        createCards(newArrayData);
    }
});

// EVENTO DI RICERCA INPUT NAME
let inputName = document.getElementById("input-name");

// creo funzione per controllo nome
function controlName(parola1, parola2){
    let count = 0;
    for(let i = 0; i < parola1.length; i++){
        if(parola1[i] === parola2[count]){
            count += 1;
        }
    }
    if(count === parola1.length){
        return true;
    }
}

// creo funzione per trasformare valore input in lowercase
function trasformaInput(input){
    let array = [];
    for(let i = 0; i < input.length; i++){
        array.push(input[i].toLowerCase());
    }
    let parola = array.join('');
    return parola;
}

inputName.addEventListener("keypress", (e) => {
    if(e.key === 'Enter'){
        
        // pulisco carte
        cleanCard();

        let newArray = [];

        // salvo il nome inserito nell' input e pulisco input
        let nomeInserito = inputName.value;
        inputName.value = '';

        // ciclo array dati per verificare se il nome inserito corrisponde a uno dei nomi delle carte, se si pusho elemento in 
        // nuovo array
        datiJson.forEach(element => {
            if(controlName(trasformaInput(nomeInserito), element.name)){
                newArray.push(element);
            }
        });

        // genero le carte che corrispondono ai criteri di ricerca
        createCards(newArray);
    }
})

// EVENTO DI RICERCA PAROLA CHIAVE
let inputKeyWord = document.getElementById("input-key-word");

// creo funzione per trasformare testo in array
function textToArray(testo){
    let array = testo.split(' ');
    return array;
}

inputKeyWord.addEventListener("keypress", (e) => {
    if(e.key === 'Enter'){

        // pulisco carte
        cleanCard();

        let newArray = [];

        // salvo il nome inserito nell' input e pulisco input
        let parolaChiaveIserita = inputKeyWord.value;
        inputKeyWord.value = '';

        //controllo che venga inserita una sola parola
        for(let i = 0; i < parolaChiaveIserita.length; i++){
            if(parolaChiaveIserita[i] === ' '){
                alert('Inserisci una sola parola');
                break;
            }
        }

        // ciclo array per avere un riscontro sulla parola inserita
        datiJson.forEach(element => {
            if(element.text){
                let arrayTesto = textToArray(element.text);
                arrayTesto.forEach(el => {
                    if(trasformaInput(parolaChiaveIserita) === el){
                        newArray.push(element);
                    }
                });
            }
        });
        
        // genero le carte che corrispondono ai criteri di ricerca
        createCards(newArray);
    }
})

// EVENTO HOVER SULLE CARTE
if(window.innerWidth >= 635){
    containerCard.addEventListener("mouseover", (e) => {
    
        if(e.target.tagName === "IMG"){

            let div = e.target.parentElement;
            let img = document.createElement("IMG");
            img.setAttribute("class", "image2");
            img.setAttribute("src", e.target.src);
            div.appendChild(img);

            e.target.addEventListener("mouseleave", () => {
                let immaginiHover = document.getElementsByClassName('image2');
                let immagini = Array.from(immaginiHover);

                immagini.forEach(element => {
                    element.remove();
                });
            })
        }
    })
}

        

