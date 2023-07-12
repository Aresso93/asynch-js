// // function superfunzione(){
// //     console.log('Sto eseguendo il codice dentro il timeout');
// // }

// // const pippo = 1;

// // const pluto = 2;

// // setTimeout(superfunzione, 20000);          //20 000 sono millisecondi. Questo codice verrà eseguito 20 secondi dopo che la funzione è stata chiamata. La funzione va senza parentesi perché se metto le parentesi la sto invocando subito. In questo caso la voglio invocare dopo 20 secondi

// // const paperino = pippo + pluto;

// // const topolino = 'Javascript'

// // console.log(topolino + paperino);

// // setInterval(() => {
// //     console.log('Sto eseguendo il codice intervallesco')   //questo viene eseguito ogni 2 secondi
// // }, 2000);

function gestisciRisposta(resp){
    //return resp.text();                    //di tutta la risposta restituiscimi solo l'HTML (ovvero il file di testo)
    return resp.json();
}

function gestisciRisultatoFinale(result){

    //const dittoObj = JSON.parse(result);
    console.log(result);
}

function gestisciEmergenza(error){

    console.log(error.message);

}

fetch('https://jazzfm.ro/')
.then(gestisciRisposta)
.then(gestisciRisultatoFinale)    //questa è una chiamata web. Non sappiamo mai con precisione quanto ci metterà
.catch(gestisciEmergenza)

//il catch è una failsafe che ci dà un errore. Se anche solo uno dei then si rompe, passa al catch e invoca la funzione di emergenza

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then((resp) => resp.json())                //sintassi alternativa con la lambda senza chiamare una funzione
.then((res) => console.log(res))
.catch((error) => console.log(error.message));

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then((resp) => resp.json())   
.then((res) => res.abilities)             //sintassi alternativa con la lambda senza chiamare una funzione
.then((ab) => console.log(ab))
.catch((error) => console.log(error.message));
