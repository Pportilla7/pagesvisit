const boton_reinicio=document.getElementById('btnReestablecer');
const contador=document.getElementById('contadorVisitas');

contador.textContent=localStorage.getItem('contador');

if (!localStorage.getItem('contador')) {
    localStorage.setItem('contador', 0);
}  



boton_reinicio.addEventListener('click',()=>{
    contador.textContent=0;
    localStorage.setItem('contador',0);
    console.log('Contdor reestablecido '+localStorage.getItem('contador'));
})


window.addEventListener('beforeunload', function(event) {
    let aux=Number.parseFloat(localStorage.getItem('contador'))+1;
    localStorage.setItem('contador',aux);
});

console.log(localStorage.getItem('contador'));