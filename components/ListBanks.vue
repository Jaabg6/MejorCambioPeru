<template>
    <div class="min-h-fit bg-slate-200 z-10 pt-10 md:pt-0">
                <div class="grid grid-cols-10 h-full lg:mx-20 gap-2 mx-2 sm:mx-10 md:mx-0">
                    <!-- 1 -->
                    <div class="col-span-10 md:col-span-5" id="Cambio-Online"> 
                        <h2 class="text-center text-white font-mono antialiased text-xl md:text-3xl font-black mb-5 bg-dark rounded-lg  py-2 px-3">Top Mejor Cambio Online</h2>
                        <!-- list scroll -->
                        <div class="relative rounded-xl overflow-auto ">
                        <div class="scrollbar overflow-y-scroll h-96 relative  mx-auto  dark:bg-dark shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col divide-y dark:divide-slate-200/5">
                            <!-- list -->
                            <div class="grid grid-cols-10 gap-4 p-4 w-full bg-dark"  v-for="(exchange, id) in exchanges" :key="exchange">
                                    
                                    <div class="col-span-10 grid ">
                                        <h3 class="text-center text-white font-mono antialiased text-lg md:text-xl">{{id + 1}} - {{exchange.title}}</h3>
                                        <div class="h-8 " :class="exchange.imgClass"></div>
                                    </div>
                                    <div class="col-span-4 self-center grid justify-items-center h-8 ">
                                        <a :href="exchange.link" class="bg-white mx-auto  hover:shadow-red-light hover:shadow-lg py-2 px-2 md:px-5 rounded-lg font-mono antialiased font-bold">Cambiar</a>
                                    </div>
                                    <div class="col-span-3 grid grid-flow-row text-center">
                                        <span class="text-white font-mono antialiased font-bold text-xs w-full">compra</span>
                                        <span class="text-white font-mono antialiased text-lg md:text-xl" >{{ exchange.compra}}</span>
                                    </div>
                                    <div class="col-span-3 grid grid-flow-row text-center">
                                        <span class="text-white font-mono antialiased font-bold text-xs w-full">venta</span>
                                        <span class="text-white font-mono antialiased text-lg md:text-xl">{{ exchange.venta}}</span>
                                    </div>

                            </div>
                            <!-- list -->

                        </div>
                        </div>

                        
                    </div>
                    <!-- 1 -->

                    <!-- 2 -->
                    <div class="col-span-10 md:col-span-5">
                        <!-- Sunat -->

                        <h2 id="Cambio-Sunat" class="mt-5 md:mt-0 text-center mx-auto  md:max-w-md text-white font-mono antialiased text-xl md:text-3xl font-black mb-5 bg-dark rounded-lg  py-2 px-3">Presencial segun Sunat</h2>


                        <div class="grid grid-cols-10 gap-4 p-4 md:max-w-md mx-auto bg-dark rounded-lg ">
                            <div class="col-span-10 justify-center grid">
                                <!-- <h3 class="text-center text-white font-mono antialiased text-lg md:text-xl">Sunat</h3> -->
                                <img src="https://i.imgur.com/6Hs6mj6.webp?1" alt="Logo Sunat" class="h-8">
                            </div>
                            <div class="col-span-4 self-center grid justify-items-center h-8 ">
                                <a href="http://e-consulta.sunat.gob.pe/cl-at-ittipcam/tcS01Alias" class="bg-white mx-auto  hover:shadow-red-light hover:shadow-lg py-2 px-7 md:px-10 rounded-lg font-mono antialiased font-bold">Ver</a>
                            </div>
                            <div class="col-span-3 grid grid-flow-row text-center">
                                <span class="text-white font-mono antialiased font-bold text-xs w-full">compra</span>
                                <span class="text-white font-mono antialiased text-lg md:text-xl" >{{ sunat.compra}}</span>
                            </div>
                            <div class="col-span-3 grid grid-flow-row text-center">
                                <span class="text-white font-mono antialiased font-bold text-xs w-full">venta</span>
                                <span class="text-white font-mono antialiased text-lg md:text-xl">{{ sunat.venta}}</span>
                            </div>
                        </div>

                        <!-- Sunat -->

                        <!-- Bancos Tradicionales -->
                        <h2 id="Cambio-Bancos" class="text-center mx-auto  md:max-w-md text-white font-mono antialiased text-xl md:text-3xl font-black mb-5 bg-dark rounded-lg  py-2 px-3 mt-5">Bancos Tradicionales</h2>

                        <div class="relative rounded-xl overflow-auto mx-auto md:max-w-md ">
                            <div class="overflow-y-scroll h-40 relative scrollbar mx-auto  dark:bg-dark shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col divide-y dark:divide-slate-200/5">

                            <!-- list -->
                            <div class="grid grid-cols-10 gap-4 p-4 w-full bg-dark"  v-for="(banco, id) in bancos" :key="banco">
                                    
                                    <div class="col-span-10 grid ">
                                        <h3 class="text-center text-white font-mono antialiased text-lg md:text-xl">{{id + 1}} - {{banco.title}}</h3>
                                        <img :src="banco.imgClass" :alt="'Logo ' + banco.title" class="h-8">

                                    </div>
                                    <div class="col-span-4 self-center grid justify-items-center h-8 ">
                                        <a :href="banco.link" class="bg-white mx-auto  hover:shadow-red-light hover:shadow-lg py-2 px-2 md:px-5 rounded-lg font-mono antialiased font-bold">Cambiar</a>
                                    </div>
                                    <div class="col-span-3 grid grid-flow-row text-center">
                                        <span class="text-white font-mono antialiased font-bold text-xs w-full">compra</span>
                                        <span class="text-white font-mono antialiased text-lg md:text-xl" >{{ banco.compra}}</span>
                                    </div>
                                    <div class="col-span-3 grid grid-flow-row text-center">
                                        <span class="text-white font-mono antialiased font-bold text-xs w-full">venta</span>
                                        <span class="text-white font-mono antialiased text-lg md:text-xl">{{ banco.venta}}</span>
                                    </div>

                            </div>
                            <!-- list -->
                          </div>
                        </div>
                        <!-- Bancos Tradicionales -->

                    </div>
                    <!-- 2 -->
                </div>



    </div>
</template>

<script>
export default {
  methods: {

    sortTop(){
      
      this.$store.dispatch('sortTop', this.shortedByCompra)

    }
  },
    computed: {
        exchanges() {
            return this.$store.state.exchanges;
        },
        sunat(){
            return this.$store.state.sunat;
        },
        bancos(){
            return this.$store.state.bancos;
        },
        shortedByCompra(){
            return this.$store.state.shortedByCompra;
        }

    },
}
</script>

<style>

.scrollbar::-webkit-scrollbar {
    width: 20px;
    height: 20px;
  }



.scrollbar::-webkit-scrollbar-track {
    border-radius: 100vh;
    background: #413c3e;
}

.scrollbar::-webkit-scrollbar-thumb {
    background: #e63e48;
    border-radius: 100vh;
    border: 1px solid #e63e48;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
    background: #1b191a;
}

@media (max-width: 640px) {
    .scrollbar::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
}
  




.i-rissan {
  background: url(https://rissanpe.com/storage/2021/10/logo.svg) no-repeat;

    background-size: 123px;
    background-position: left;
    text-indent: -99999px;


}
.i-sunat {
    background-image: url(https://i.imgur.com/6Hs6mj6.webp?1) no-repeat;
    background-size: 123px;
    background-position: left ;
    text-indent: -99999px;
}

.i-cambia-fx {
  background: url(https://i.imgur.com/AOVlCwb.webp) no-repeat;
  background-size: 123px;
  background-position: left center;
}

.i-dollar-house {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/dollar-house-v2.svg?v1) no-repeat;
  

  border:0;
  margin: 0;
  text-indent: -99999px;
  background-size: 123px;
  background-position: left center;
}

.i-tu-cambista {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/tu-cambista.svg?v1) no-repeat;
  

  margin: 0;
  text-indent: -99999px;
  background-size: 137px;
  background-position: left center;
}

.i-tkambio {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/tkambio.svg?v1) no-repeat;
  background-position: left center;
}

.i-instakash {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/instakash_v2.svg?v1) no-repeat;
  

  margin: 0;
  text-indent: -99999px;
  background-size: 138px;
  background-position: left center;
}

.i-cambi {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/cambi.svg?v1) no-repeat;
  

  margin: 0;
  text-indent: -99999px;
  background-size: 135px;
  background-position: left center;
}

.i-cambiomundial {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/cambiomundial.svg?v1) no-repeat;
  

  margin: 0;
  text-indent: -99999px;
  background-size: 136px;
  background-position: 0px -5px;
}

.i-cambio-seguro {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/cambio-seguro.png?v1) no-repeat;
  

  margin: 0;
  text-indent: -99999px;
  background-size: 132px;
  background-position: left center;
}

.i-acomo {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/acomo.svg?v1) no-repeat;
  

  margin: 0;
  text-indent: -99999px;
  background-size: 102px;
  background-position: left center;
}

.i-cambista-inka {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/cambista-inka.svg?v1) no-repeat;
  

  margin: 0;
  text-indent: -99999px;
  background-size: 120px;
  background-position: left center;
}

.i-cambix {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/cambix.svg?v1) no-repeat;
  

  margin: 0;
  text-indent: -99999px;
  background-size: 135px;
  background-position: left center;
}

.i-cambiosol {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/cambiosol.svg?v1) no-repeat;
  

  margin: 0;
  text-indent: -99999px;
  background-size: 138px;
  background-position: left center;
}

.i-perudolar {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/perudolar.svg?v1) no-repeat;
  

  margin: 0;
  text-indent: -99999px;
  background-size: 138px;
  background-position: left center;
}

.i-roblex {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/roblex.svg?v1) no-repeat;
  

  text-indent: -9999px;
  background-size: 109px;
  background-position: left center;
}

.i-terracash {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/terracash.svg?v1) no-repeat;


  background-position: left center;

}

.i-dlsmoney {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/dlsmoney.svg?v1) no-repeat;
  

  text-indent: -9999px;
  background-size: 144px;
  background-position: left center;
}

.i-hirpower {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/hirpower.svg?v1) no-repeat;
  

  text-indent: -9999px;
  background-size: 154px;
  background-position: left center;
}
.i-yanki {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/yanki.svg?v1) no-repeat;


  text-indent: -9999px;
  background-position: left center;
}
.i-tucambiototal {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/tucambiototal.svg?v1) no-repeat;
  

  text-indent: -9999px;
  background-size: 154px;
  background-position: -5px 0;
}
.i-buenbit{
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/buenbit_v2.svg?v1) no-repeat;
  

  text-indent: -9999px;
  background-size: 128px;
  background-position: 0 0;
}
.i-inkamoney{
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/inkamoney.svg?v1) no-repeat;
  

  text-indent: -9999px;
  background-size: 133px;
  background-position: 0 0;
}
.i-letsbit{
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/letsbit.svg?v1) no-repeat;
  

  text-indent: -9999px;
  background-size: 133px;
  background-position: 0 5px;
}
.i-kaspay{
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/kaspay.svg?v1) no-repeat;
  

  text-indent: -9999px;
  background-size: 108px;
  background-position: 0 5px;
}
.i-multidolar{
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/multidolar.svg?v1) no-repeat;
  

  text-indent: -9999px;
  background-size: 140px;
  background-position: 0;
}
.i-dollarcompany{
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/dollarcompany.svg?v1) no-repeat;
  

  text-indent: -9999px;
  background-size: 113px;
  background-position: 0;
}
.i-rapidex{
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/rapidex.svg?v3) no-repeat;
  

  text-indent: -9999px;
  background-size: 135px;
  background-position: 0;
}
.i-securex{
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/securex-2.svg?v2) no-repeat;
  

  text-indent: -9999px;
  background-size: 135px;
  background-position: 0;
}

.i-western-union {
  background: url(https://i.imgur.com/4mIAWVq.webp) no-repeat;

    background-size: 135px;
    text-indent: -9999px;
    background-position: left center;
}

.i-sr-cambio {
    background: url(https://i.imgur.com/pB9m2aC.webp) no-repeat;
    background-size: 135px;
    background-position: 0;
}


</style>