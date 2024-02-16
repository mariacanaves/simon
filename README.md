# curly-memory
Joc de Simon Says



> [!TIP]
> **Funcions asíncrones**
> Ens serveixen per esperar un esdeveniment abans de continuar. Ho necessitaràs si vols mostrar tots els colors quan comença un nou nivell

 ```
/*
Iniciar partida. Es posa 'async' davant per indicar que té
comandes que gestionen el temps d'execució. Pot haver "esperes"
*/
async function iniciarPartida(){
    for (let i=0;i<colors.length;i++){
        //TODO instruccions per mostrar el color. Per exemple
        showNotification(colors[i])
        //Crida al mètode esperar
        await esperar(2000);
    }
}
```
```
function esperar(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}
```
