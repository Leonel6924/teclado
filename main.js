function teste() {
    document.querySelector('#som_tecla_pom').play();
 }
 
 function CLICKCLAP() {
    document.querySelector('#som_tecla_clap').play();
 }
 
 function CLICKTIM() {
    document.querySelector('#som_tecla_tim').play();
 }
 
 function CLICKPUFF() {
    document.querySelector('#som_tecla_puff').play();
 }
 
 
 document.querySelector('.tecla_pom').onclick = teste
 document.querySelector('.tecla_clap').onclick = CLICKCLAP
 document.querySelector('.tecla_tim').onclick = CLICKTIM
 document.querySelector('.tecla_puff').onclick = CLICKPUFF
