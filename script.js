let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

let sliderWidth = document.querySelector('.slider').clientWidth;

document.querySelector('.slider--width').style.width = 
`${sliderWidth * totalSlides}px`;


document.querySelector('.slider--controls').style.width =
 `${sliderWidth}px`;

document.querySelector('.slider--controls').style.height =
 `${document.querySelector('.slider').clientHeight}px`;



 function goPrev(){     //Se apertar para voltar no primeiro ele vai para o ultimo
     currentSlide--;
     if(currentSlide < 0){
         currentSlide = totalSlides - 1;
     }
     updateMargin();

 }

 function goNext(){     //Quando chegar no ultimo slide volta para o primeiro 
     currentSlide++;
     if(currentSlide > (totalSlides-1)){
         currentSlide = 0;
     }

     updateMargin();

 }

 function updateMargin(){
     let sliderWidth = document.querySelector('.slider--item').clientWidth;//Pega a largura da tela do slider
     let newMargin = (currentSlide * sliderWidth); 
     document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`

 }

 setInterval(goNext, 5000);