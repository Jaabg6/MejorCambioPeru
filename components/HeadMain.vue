<template>
    <div class="min-h-screen bg-gradient-to-t from-red-900 to-red-light  relative">
        
        <!-- grid main -->
        <div class="grid grid-cols-10 min-h-screen lg:mx-20 gap-2">
            <!-- 1 -->
            <div class="col-span-10 md:col-span-5 self-center">
                <div class=" text-white">
                    <h1 class="uppercase text-2xl md:text-5xl font-mono antialiased font-black">Ahorra y cambia al mejor precio</h1>
                    <p class="text-lg md:text-2xl font-mono antialiased font-black">Busca en las principales casas de cambio y encuentra tu mejor opcion al dia</p>
                </div>

            </div>
            <!-- 1 -->

            <!-- 2 -->
            <div class="col-span-10 md:col-span-5 self-center z-10">
                <div class="bg-dark py-6 mx-10 rounded-lg shadow-lg shadow-black">
                    <!-- card title -->
                    <h2 class="text-white font-mono antialiased text-center text-2xl">{{ exchange.title }}: Mejor {{ textCompraoVenta }}</h2>

                        <!-- button change mode -->
                        <div class="inline-flex justify-center w-full rounded-md shadow-sm mt-2" role="group">
                            <button :class="[modoCompra == true ? 'focus:z-10 ring-2 ring-red-light text-lg bg-white' : 'bg-dark text-white hover:bg-red-light']" @click="buttonCompra()" type="button"  class="py-2 px-10 text-sm font-medium rounded-l-lg border border-gray-200">
                                Compra: <span class="text-md font-bold ">{{ exchange.compra }}</span>
                            </button>
                            <button :class="[ modoCompra == false ? 'focus:z-10 ring-2 ring-red-light text-lg bg-white' : 'bg-dark text-white hover:bg-red-light']" @click="buttonVenta()" type="button" class="py-2 px-10 text-sm font-medium rounded-r-md border border-gray-200">
                                Venta: <span class="text-md font-bold ">{{ exchange.venta }}</span>
                            </button>
                        </div>
                        <!-- button change mode -->
                        
                        <!-- input section -->
                        <div class="mx-10">
                            <div class="relative mt-10">

                                <FlagUSA class="right-5 top-2 absolute" v-if="modoCompra"/>
                                <FlagPeru class="right-5 top-2 absolute" v-else />


                                <label for="CantidadEnviada" class="left-2 -top-4 px-1 bg-dark text-white absolute block text-1xl font-bold font-mono antialiased">Envias</label>
                                <input type="number" v-model="CantidadEnviada" @keyup="ShowSended(CantidadEnviada)" class="bg-dark text-2xl text-white font-bold font-mono antialiased focus:outline-none focus:shadow-outline border border-gray-200 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" placeholder="Quiero enviar...">
                            
                                <!-- button flip -->
                                <button @click="flip()" class="z-10 absolute -bottom-7  right-5 text-white font-bold font-mono antialiased focus:outline-none focus:shadow-outline border border-gray-200 rounded-lg py-1 px-4 block appearance-none leading-normal bg-dark hover:bg-red-light hover:scale-125">
                                    <FlipChange class="w-8 fill-slate-200"/>
                                </button>
                                <!-- button flip -->
                            
                            </div>
    
                            <div class="relative mt-5">
                                <FlagPeru class="right-5 top-2 absolute" v-if="modoCompra"/>
                                <FlagUSA class="right-5 top-2 absolute" v-else/>

                                <label for="CantidadRecibida" class="left-2 -top-4 px-1 bg-dark text-white absolute block text-1xl font-bold font-mono antialiased">Recibes</label>
                                <input type="number" v-model="CantidadRecibida" @keyup="ShowReceived(CantidadRecibida)" class="bg-dark text-2xl text-white font-bold font-mono antialiased focus:outline-none focus:shadow-outline border border-gray-200 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" placeholder="Quiero recibir...">
                            </div>

                            <!-- alert savings -->
                            <div class="px-2 text-black font-mono antialiased mt-3 bg-white border rounded-lg font-black text-sm">
                                <p>Ahorras <span class="text-lg font-bold">{{ simbolMoney + comparePrices }} </span>  con <span class="text-lg font-bold"> {{ exchange.title }}</span> <br> Comparado con <span class="text-lg font-bold">{{ worstExchange.title }}</span></p>
                            </div>
                            <!-- alert savings-->

                            <!-- button SortTop -->
                            
                            <div class="relative mt-2 cursor-pointer">
                                <div @click="sortTop()" id="dropdownToggleButton" data-dropdown-toggle="dropdownToggle" class="border border-gray-200 text-white w-full bg-dark focus:outline-none font-medium rounded-lg text-sm px-4 py-4 text-center grid grid-flow-col items-center justify-between ">
                                
                                <span>Ordenar por Mejor {{ textCompraoVenta }}</span>

                                <div for="default-toggle-1" class="inline-flex relative items-center w-full cursor-pointer"  >
                                                <input @click="sortTop()" type="checkbox" :value="shortedByCompra" id="default-toggle-1" class="sr-only peer">
                                                <div  :class="shortedByCompra ? ' after:bg-red-light after:translate-x-full' : '' " class="w-11 h-6 peer-focus:outline-none rounded-full peer dark:bg-gray-700  peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 "></div>

                                </div>
                                            
                                        </div>


                                                                
                                <!-- Dropdown menu -->

                            </div>
                            <!-- button SortTop -->



                            <!-- button Change Now -->
                            <div class="mt-10 ">
                                <a :href="exchange.link" class="text-center uppercase text-white font-bold font-mono antialiased focus:outline-none focus:shadow-outline border border-gray-200 rounded-lg py-4 block appearance-none leading-normal bg-dark hover:bg-white hover:text-black hover:shadow-red-light hover:shadow-lg">
                                    Cambiar Ahora
                                </a>
                            </div>
                            <!-- button Change Now -->

                        </div>
                        <!-- input section -->



                </div>
            </div>

            <!-- 2 -->

        </div>
        <!-- grid main -->


        <!-- wave absolute -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="bottom-0 absolute pointer-events-none">
            <path class="fill-slate-200 z-0" fill-opacity="1" d="M0,192L80,202.7C160,213,320,235,480,208C640,181,800,107,960,101.3C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
        <!-- wave absolute -->

    </div>
</template>

<script>
import FlipChange from '@/components/svg-icons/flipChange.vue'
import FlagPeru from './svg-icons/flagPeru.vue'
import FlagUSA from './svg-icons/flagUSA.vue'
import { mapGetters, mapState } from 'vuex'

export default{
    data() {
        return {
            // compra: 3.885,
            // venta: 3.904,
            modoCompra: true,
            CantidadEnviada: '',
            CantidadRecibida: 1000, // default
            actualizandoCompra: false,
            actualizandoVenta: false,
        };
    },
    mounted(){
        setTimeout(() => {
            this.CantidadEnviada =  this.roundNumber(this.CantidadRecibida / this.exchange.compra);
        }, 800);
    },
    methods: {
        sortTop(){
            this.$store.dispatch('sortTop', this.shortedByCompra);
        },
        buttonCompra() {
            if(this.modoCompra == true) return
            this.flip()
            // this.modoCompra = true;
        },
        buttonVenta() {
            if(this.modoCompra == false) return
            this.flip()
            // this.modoCompra = false;
        },
        flip() {

            this.modoCompra = !this.modoCompra; // flip modoCompra
            
            this.CantidadEnviada = this.CantidadRecibida; // alternate CantidadEnviada

            this.ShowSended(this.CantidadRecibida); // update CantidadEnviada

        },
        ShowReceived(cantidad) {

            if (this.modoCompra) {
                this.CantidadEnviada = this.roundNumber(cantidad / this.exchange.compra);
            } else {
                this.CantidadEnviada = this.roundNumber(cantidad * this.exchange.venta);
            }
        },
        ShowSended(cantidad) {
            if (this.modoCompra) {
                this.CantidadRecibida = this.roundNumber(cantidad * this.exchange.compra);
            } else {
                this.CantidadRecibida = this.roundNumber(cantidad / this.exchange.venta);
            }
        },
        roundNumber(num) {
            const numFixed = parseFloat(num).toFixed( 3 );
            return Math.abs((Math.round( numFixed * 100) / 100));
        }

        //     recibe(newValue){
        //     this.actualizandoVenta = true;
        //     if(this.actualizandoCompra == true) return // If the another watch is running this get out 

        //     if (this.modoCompra ) {
        //         this.CantidadEnviada = +parseFloat(newValue * this.exchange.venta).toFixed( 3 );
        //         setTimeout(() => {
        //             this.actualizandoVenta = false; 
        //         }, 200);
        //     } 
        //     else {
        //         this.CantidadEnviada = +parseFloat(newValue / this.exchange.compra).toFixed( 3 );
        //         setTimeout(() => {
        //             this.actualizandoVenta = false; 
        //         }, 200);
        //     }
        // },
        //     envia(newValue){
        //      this.actualizandoCompra = true;
        //     if(this.actualizandoVenta == true) return // If the another watch is running this get out

        //     if (this.modoCompra) {
        //         this.CantidadRecibida = +parseFloat(newValue / this.exchange.venta).toFixed( 3 );
        //         setTimeout(() => {
        //             this.actualizandoCompra = false;
        //         }, 200);
        //     } 
        //     else {
        //         this.CantidadRecibida = +parseFloat(newValue * this.exchange.compra).toFixed( 3 );
        //         setTimeout(() => {
        //             this.actualizandoCompra = false;
        //         }, 200);
        //     }
        // }

    },
    computed:{
        ...mapGetters({
            exchange: 'getExchange',
            secondExchange: 'getSecondExchange',
            worstExchange: 'getWorstExchange',
        }),
        simbolMoney() {
            return this.modoCompra ? "$" : "S/";
        },
        ...mapState({
            shortedByCompra: state => state.shortedByCompra,
            exchanges: state => state.exchanges,
        }),




        comparePrices(){
            if (this.modoCompra) {
                return this.roundNumber(this.exchange.compra * this.CantidadEnviada - this.worstExchange.compra * this.CantidadEnviada);
            } else {
                return this.roundNumber(this.exchange.venta * this.CantidadEnviada - this.worstExchange.venta * this.CantidadEnviada);
            }
        },

        textCompraoVenta(){
            return this.shortedByCompra ? "Compra" : "Venta";
        }

    },
    watch:{
        
    },
    components: {
    FlipChange,
    FlagPeru,
    FlagUSA
}
}
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}

</style>