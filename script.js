/*
    Mostra la notificació al panell notification
    Mostra el color hexadecimal passat per paràmetre
 */
let colors=["#b2e2f2","#c5c6c8","#d8bfd8","#ffda9e","#ffbf80","#b0f2c2","#aaff80","#96ffe0", "#ff9cf0","#d1c2ff","#d2bead","#a2c8cc","#d98cb3","#d6ff80","#ff6961","#84b6f4"]
let llista=[]
let i=0

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
console.log(color + "-" + llista[0])

    if(color==llista[i]){
        window.alert('gg')
    }
    else{
        window.alert('Has perdut :c')
    }
}
