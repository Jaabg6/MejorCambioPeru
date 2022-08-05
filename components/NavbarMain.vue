<template>
    <nav v-bind:class="[ this.scrollOnTop ? 'py-4 md:py-6' : 'py-2 md:py-5  bg-red-500' ]" class="z-20 ease-in duration-100 fixed w-full bg-gradient-to-b shadow-gray-800/50">
        <div class="max-w-7xl container mx-auto px-3 md:px-6 lg:px:10">
            <div class="grid grid-cols-7"> 
                <!-- 1 -->
                <div class="flex items-center col-span-6">
                    <div class="flex-shrink-0 flex items-center">
                        <!-- <img class=" h-12 w-auto mr-2" src="@/static/favicon-32x32.png" alt="Logo"> -->
                        <h3 class="block text-3xl font-extrabold text-white ">Cambio</h3>
                    </div>
                    
                    <div class="hidden sm:block sm:ml-6">
                        <div class="flex space-x-4">
                            
                            <a v-smooth-scroll href="#inicio" class="focus:bg-dark  focus:text-white hover:text-black text-white hover:bg-white inline-block px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Inicio</a>
                            <a v-smooth-scroll href="#Cambio-Online" class="focus:bg-dark  focus:text-white hover:text-black text-white hover:bg-white inline-block px-3 py-2 rounded-md text-sm font-medium">Top Mejores</a>
                            <a v-smooth-scroll href="#FAQ" class="focus:bg-dark  focus:text-white hover:text-black text-white hover:bg-white inline-block px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
                            
                                                


                        </div>
                    </div>

                </div>
                <!-- 2 -->
                <div class="flex justify-end items-center">
                    <button @click="this.toggleMenu" class="block sm:hidden bg-white p-3 rounded-sm">
                        <svg class="h-6 w-6 fill-red-light" viewBox="0 0 24 24">
                            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
                        </svg>
                    </button>
                    <p class="text-xs font-bold text-white sm:block hidden">Fecha: {{ fecha }}</p>
                             
                </div>

                <!-- dropDown Menu -->
                
            
            </div>
            <div  v-if="menu === true" class=" sm:hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gradient-to-b from-red-dark to-red-light ring-2 ring-white  focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                <!-- Active: "bg-gray-100", Not Active: "" -->
                <a href="#inicio" v-smooth-scroll class="block px-4 py-5 text-sm text-white" role="menuitem" tabindex="0" id="user-menu-item-0">Inicio</a>
                <a href="#Cambio-Online" v-smooth-scroll class="block px-4 py-5 text-sm text-white" role="menuitem" tabindex="1" id="user-menu-item-1">Cambio Online</a>
                <a href="#Cambio-Sunat" v-smooth-scroll class="block px-4 py-5 text-sm text-white" role="menuitem" tabindex="2" id="user-menu-item-2">Cambio Sunat</a>
                <a href="#Cambio-Bancos" v-smooth-scroll class="block px-4 py-5 text-sm text-white" role="menuitem" tabindex="3" id="user-menu-item-3">Cambio Bancos</a>
                <a href="#FAQ" v-smooth-scroll class="block px-4 py-5 text-sm text-white" role="menuitem" tabindex="4" id="user-menu-item-4">FAQ</a>
               
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
            return {
                menu: false,
                mobileMenu: false,
                scrollOnTop: false,
            }
        },
        methods: {
            toggleMenu() {
                this.menu = !this.menu
            },
            toggleMobileMenu() {
                this.mobileMenu = !this.mobileMenu
            },
            isAtTop() {
                return window.scrollY === 0;
            },
            //function each time the window is scrolled
            scrollOnTopDetect() {
                if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                    this.scrollOnTop = false;
                    // console.log('true');
                }

                else {
                    this.scrollOnTop = true;
                }
            },
            debounce(func, timeout = 100){
            let timer;
            return (...args) => {
                clearTimeout(timer);
                timer = setTimeout(() => { func.apply(this, args); }, timeout);
            };
            }


        },
        beforeMount () {

            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                    this.scrollOnTop = false;
                    // console.log('true');
                }

                else {
                    this.scrollOnTop = true;
                }
            
            //function to improve performance when detect scrolling
            function debounce(func, timeout = 300){
            let timer;
            return (...args) => {
                clearTimeout(timer);
                timer = setTimeout(() => { func.apply(this, args); }, timeout);
            };
            }

            window.onscroll = debounce(this.scrollOnTopDetect);

        },
        computed: {
            fecha() {
                return this.$store.state.fecha
            }
        }

}
</script>

