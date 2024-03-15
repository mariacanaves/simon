// Variables i arrays
let colors=["#f5f5dc","#fdfd96","#d8bfd8","#e00000","#ffbf80","#836953","#366959","#96ffe0", "#2b064d","#d1c2ff","#d2bead","#a2c8cc","#d98cb3","#d6ff80","#ff6961","#84b6f4"]
let llista=[]
let posiciollista=0
let nivell=0
let temps=2000
// Config slider
let slider = parseInt(document.getElementById("myRange"));
let output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
// slider.oninit = function() {
//     output.innerHTML = this.value;
//     temps=this.value
//     console.log('Temps: '+temps)
// }

// Inici de la partida(crear el color
function iniciarPartida(){
    llista = []
    console.log(llista)
    llista.push(colors[Math.trunc(Math.random()*colors.length)])
    console.log(llista)
    showNotification(llista[llista.length-1])
}
// Enviar el color
function showNotification(message) {
    console.log(message)
    var notification = document.getElementById('notification');
    notification.style.backgroundColor=message
    notification.style.display = 'block';
    console.log('Temps2: '+temps)

    // temps del color
    setTimeout(function() {
        notification.style.display = 'none';
    }, parseInt(document.getElementById("myRange").value));
}

function mirarcolor(color){
console.log(color + "-" + llista[posiciollista])
    // mira si el color esta be
    if(color===llista[posiciollista]){
        if(posiciollista===llista.length-1){
            llista.push(colors[Math.trunc(Math.random()*colors.length)])
            posiciollista=0
            showNotification(llista[llista.length-1])
            nivell++
            document.getElementById('intents').innerHTML='Nivell: ' +nivell
        }
        else{
            posiciollista++
        }
    }
    // si perds t'ho diu i reinicia tot
    else{
        window.alert('Has perdut :c')
        nivell=0
        document.getElementById('intents').innerHTML='Nivell: ' +nivell
        llista=[]
        posiciollista=0
        document.getElementById('reintentar').innerHTML= "Torna a jugar"

    }
}
