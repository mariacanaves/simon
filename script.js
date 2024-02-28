/*
    Mostra la notificació al panell notification
    Mostra el color hexadecimal passat per paràmetre
 */
let colors=["#b2e2f2","#c5c6c8","#d8bfd8","#ffda9e","#ffbf80","#b0f2c2","#aaff80","#96ffe0", "#ff9cf0","#d1c2ff","#d2bead","#a2c8cc","#d98cb3","#d6ff80","#ff6961","#84b6f4"]
let llista=[]
let posiciollista=0
let nivell=0

function iniciarPartida(){
    llista.push(colors[Math.trunc(Math.random()*colors.length)])
    console.log(llista)
    showNotification(llista[llista.length-1])
}

function showNotification(message) {
    console.log(message)
    var notification = document.getElementById('notification');
    notification.style.backgroundColor=message
    notification.style.display = 'block';

    setTimeout(function() {
        notification.style.display = 'none';
    }, 2000);
}

function mirarcolor(color){
console.log(color + "-" + llista[posiciollista])

    if(color==llista[posiciollista]){
        if(posiciollista==llista.length-1){
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
    else{
        window.alert('Has perdut :c')
        nivell=0
        document.getElementById('intents').innerHTML='Nivell: ' +nivell
        llista=[]
        posiciollista=0
        document.getElementById('reintentar').innerHTML= "Torna a jugar"

    }
}
