<template>
    <div class="relative min-h-screen bg-red-medium z-10 pb-16" id="FAQ"> 
        <!-- bg-gradient-to-t to-red-900 from-red-light -->
        <!-- wave -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute top-0 pointer-events-none -z-10">
            <path class="fill-slate-200  z-0" fill-opacity="1" d="M0,128L30,112C60,96,120,64,180,53.3C240,43,300,53,360,74.7C420,96,480,128,540,154.7C600,181,660,203,720,218.7C780,235,840,245,900,234.7C960,224,1020,192,1080,154.7C1140,117,1200,75,1260,58.7C1320,43,1380,53,1410,58.7L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
        </svg>
        <!-- wave -->

    
        <div class="text-center text-white text-xl font-mono antialiased pt-5 container-lg mx-2 md:mx-32">
            <h2 class="text-xl md:text-4xl font-black pt-20 md:pt-52 uppercase"> ¿Que es MejorCambio?</h2>
            <p class="pt-5">MejorCambio es una app creada para buscar en los mejores y mas confiables puntos de cambio de divisa en Peru, tanto digital como en persona.</p>

            <div class="grid grid-cols-12 mt-14 gap-4">
                <div class="col-span-7 md:col-span-6  bg-dark rounded-lg py-5 px-4">
                    <h3 class="text-xl md:text-4xl">¿Como lo hace?</h3>
                    <p class="pt-5 text-sm md:text-lg">Gracias al scraping web automatizado. Conoce mas sobre este tema <a href="https://es.wikipedia.org/wiki/Web_scraping" class="text-lg md:text-xl font-bold">aqui</a></p>
                </div>

                <LittleAnimation animation="https://assets6.lottiefiles.com/packages/lf20_fji5krwh.json" />


                    <LittleAnimation animation="https://assets2.lottiefiles.com/packages/lf20_hukbdjk6.json"/>

                <div class="col-span-7 md:col-span-6  bg-dark rounded-lg py-5 px-4">
                    <h3 class="text-xl md:text-4xl">¿Es legal?</h3>
                    <p class="pt-5 text-sm md:text-lg">Si, es igual a entrar a cada web oficial y anotar la informacion por tu cuenta aunque tal vez tardaria un buen rato, pero con MejorCambio tienes la informacion actual al toque.</p>
                </div>


            

                <div class="col-span-7 md:col-span-6  bg-dark rounded-lg py-5 px-4">
                    <h3 class="text-xl md:text-4xl">¿Quien lo hizo?</h3>
                    <p class="pt-5 text-sm md:text-lg">Este es un proyecto personal de <a href="https://javierarcilab.web.app/" class="font-bold text-lg md:text-xl">Javier Arcila</a> para su portafolio personal</p>
                </div>

                    <LittleAnimation animation="https://assets9.lottiefiles.com/packages/lf20_rjujnjvf.json"/>
            </div>
        </div>

    </div>
</template>

<script>
import LittleAnimation from './littleAnimation.vue'
export default{
    data() {
        return {};
    },
    components: { LittleAnimation }
}
</script>