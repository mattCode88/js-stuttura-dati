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
                        'la forza di adeline, catara splendente è pari al numero di creature che controlli',
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
                        'quando entra nel campo, assegnala a una creatura bersaglio',
                        false
                        );    
let card12 = new Card('https://media.wizards.com/2021/mid/it_hcmWP6TgZT.png',
                        'serbatoio di geistfiamma',
                        3,
                        [TYPE[3]],
                        [COLOR[4]],
                        'ogniqualvolta lanci una magia, metti un segnalino carica',
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

let datiJson = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17];

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
        img.setAttribute("src", element.image);
        containerCard.appendChild(img);
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

// EVENTI DI RICERCA
let searchCards = document.getElementById("cerca-carte");
let select = document.getElementsByClassName("selected");
let arraySelect = Array.from(select);

searchCards.addEventListener("click", () => {

    // pulisco container carte
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
                // console.log(obj);
            }
        
    
        });

console.log(obj);
        // uuuu
        /*controllo se nell' oggetto sono presenti le proprietà forza o costituzione, se si genreo una nuova variabile con valore vitalita.
    Salvo il numero di proprietà presenti nell' oggetto. */
    
    let numeroProp = 0;
        for(prop in obj){
            numeroProp += 1;
            if((prop === 'forza' || prop === 'costituzione') || (prop === 'forza' && prop === 'costituzione')){
                newProp = 'vitalita';
            }
        }
console.log(newProp);


            // inizio a ciclare l array dati per generare un nuovo array con i soli elementi interessati


// ------------------------------------------------------------------------------------------------------------------------------------------
    //         datiJson.forEach(element => {
    
        
       

    //         for(prop in obj){

    //         if(Array.isArray(element[prop])){
    //             element[prop].forEach(el => {
    //                 if(el == obj[prop]){
    //                     newArrayData.push(element);
    //                 }
    //             });
    //         }else if(prop === 'forza' || prop === 'costituzione'){
    //             if(Array.isArray(element[newProp]) && prop === 'forza'){
    //                 for(let x = 0; x < element[newProp].length; x++){
    //                     if(element[newProp][0] == obj[prop] && !newArrayData.includes(element)){
    //                         newArrayData.push(element);
    //                     }
    //                 }
    //             }else if(Array.isArray(element[newProp]) && prop === 'costituzione'){
    //                 for(let x = 0; x < element[newProp].length; x++){
    //                     if(element[newProp][1] == obj[prop] && !newArrayData.includes(element)){
    //                         newArrayData.push(element);
    //                     }
    //                 }
    //             }

    //         }else{
    //             if(element[prop] == obj[prop]){
    //                 newArrayData.push(element);
    //             }
    //         }
           
            
            
    //     }


        
        
    // });
// ------------------------------------------------------------------------------------------------------------------------------------------

    datiJson.forEach(element => {
    
        element.count = 0;
       
// --------------------------------------------ULTIMA----------------------------------------------------------------------
        // for(prop in obj){

        //     if(Array.isArray(element[prop])){
        //         element[prop].forEach(el => {
        //             if(el == obj[prop]){
        //                 // newArrayData.push(element);
        //                 element.count += 1;
        //             }
        //         });
        //     }else if(prop === 'forza' || prop === 'costituzione'){
        //         if(Array.isArray(element[newProp]) && prop === 'forza'){
        //             for(let x = 0; x < element[newProp].length; x++){
        //                 if(element[newProp][0] == obj[prop] && !newArrayData.includes(element)){
        //                     // newArrayData.push(element);
        //                     element.count += 1;
        //                 }
        //             }
        //         }else if(Array.isArray(element[newProp]) && prop === 'costituzione'){
        //             for(let x = 0; x < element[newProp].length; x++){
        //                 if(element[newProp][1] == obj[prop] && !newArrayData.includes(element)){
        //                     // newArrayData.push(element);
        //                     element.count += 1;
        //                 }
        //             }
        //         }

        //     }else{
        //         if(element[prop] == obj[prop]){
        //             // newArrayData.push(element);
        //             element.count += 1;
        //         }
        //     }
        
        
        
        // }
// ----------------------------------------------------------------------------------------------------------------------------------

for(prop in obj){

    if(newProp && prop === 'forza' && (element[newProp][0] == obj[prop])){
        // if(prop === 'forza' && (element[newProp][0] == obj[prop])){
            // console.log('ciao');
            element.count += 1;
            // element[newProp].forEach((el, i) => {
            //     if(i == 0 && el == obj[prop]){
            //         console.log(el);
            //         element.count += 1;
            //     }
                
            // });
                    // for(let x = 0; x < element[newProp].length; x++){
                    //     console.log(element[newProp][0])
                    //     if(element[newProp][0] == obj[prop]){
                    //         // newArrayData.push(element);
                    //         element.count += 1;
                    //         // element.count -= 1;
                    //     }
                    // }
                    
        // }else if(prop === 'costituzione' && element[newProp]){

        //     for(let x = 0; x < element[newProp].length; x++){

        //         if(element[newProp][1] == obj[prop]){
        //             // newArrayData.push(element);
        //             element.count += 1;
        //         }
        //     }
                
        // }



    }else if(newProp && prop === 'costituzione' && (element[newProp][1] == obj[prop])){


        element.count += 1;




    }else if(Array.isArray(element[prop])){
                element[prop].forEach(el => {
                    if(el == obj[prop]){
                        // newArrayData.push(element);
                        element.count += 1;
                    }
                });
    }else{
                if(element[prop] == obj[prop]){
                    // newArrayData.push(element);
                    element.count += 1;
                }
            }
        
        
        
        }







        // console.log(element.count);
        // console.log(element);
        
        
    });
// ------------------------------------------------------------------------------------------------------
    // datiJson.forEach(element => {
    //     if(element.count === numeroProp){
    //         newArrayData.push(element);
    //     }
    // });
// ------------------------------------------------------------------------------------------------------------
    
    datiJson.forEach(element => {
        console.log(element.count);
        console.log(`numero = ${numeroProp}`);
        if(element.count == numeroProp){
            newArrayData.push(element);
        }
    });
      

    
    createCards(newArrayData);
    }

     
    



    });
        


// da newArrayData eseguo un ulteriore controllo