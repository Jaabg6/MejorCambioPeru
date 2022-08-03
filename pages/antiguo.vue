<template>
  <div>
    
    <NavbarMain />
    <HeadMain />

    <h3 class="text-5xl bg-slate-100">hi </h3>


      <div class="mt-5">
          <div class="row">
            <!-- el mejor -->
            <div class="col-lg-5 col-md-6 col-12 ">
              <h2 class="text-center my-5 text-gray-50"> El Mejor</h2>

<div class="container" v-if="precioCasasCambios">
              <div class="card">
                <div class="row mt-4">
                  <div class="col-4">
                    <h5 class="small text-center">nombre</h5>
                    <!-- img logo of bcp bank peru -->
                      
                        <div :class="precioCasasCambios[0].imgClass" class="responsive p-1" />

                      
                        
                     
                  </div>
                  <div class="col-4">
                    <h5 class="small text-center">compra</h5>
                    <p class="text-center b h4"> {{ precioCasasCambios[0].compra}}</p>
                  </div>
                  <div class="col-4">
                    <h5 class="small text-center">venta</h5>
                    <p class="text-center b h4"> {{ precioCasasCambios[0].venta}}</p>

                  </div>

                </div>  
                <a class="btn btn-block btn-dark mt-4">CAMBIAR AHORA</a>
              </div>  

</div>
            </div>
            <!-- tablas -->
            <div class="col-lg-7 col-md-6 col-12 bg-warning" v-if="precioCasasCambios">{{ precioCasasCambios[0].imgClass }} </div>

          </div>
      </div>

      
    <!-- //card component -->
    <div v-for="item in precioCasasCambios" :key="item" class="card">
      <div class="card-body">
        <h5 class="card-title"> {{item.title}} </h5>
        <p class="card-text">Compra {{item.compra}}</p>
        <p class="card-text">Venta {{item.venta}}</p>

        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

  


    
  </div>
</template>

<script>
import HeadMain from '../components/HeadMain.vue';
import NavbarMain from '@/components/NavbarMain.vue';



export default {
    props: ["precioSunat", "precioBancos", "precioCasasCambios"],
    data() {
        return {
            statusFrontend: "Desconectado",
            statusBackend: "Desconectado",
            preciosActuales: [],
            precioBancos: [],
            precioCasasCambios: [],
            precioSunat: [],
        };
    },
    async mounted() {
        this.socket = this.$nuxtSocket({
            name: "main",
            persist: "main", // persist data in vuex
        });
        this.$store.dispatch("showSocket", this.socket);
        this.socket.on("connect", () => {
            this.statusFrontend = "Conectado y funcionando";
            this.socket.on("fetchData", (data) => {
                console.log(data);
                this.preciosActuales = data[0];
                this.precioCasasCambios = data[0];
                this.precioSunat = data[1];
                this.precioBancos = data[2];
            });
            this.socket.on("event-frontend", () => {
                this.statusBackend = "Conectado y funcionando";
            });
        });
    },
    components: { HeadMain , NavbarMain},
};
</script>

<style>
body {
  background: rgb(34, 34, 34);
}
.vh-100 {
  height: 100vh !important;
}

.i-cambia-fx {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/cambiafx_v2.svg?v1) no-repeat;
  width: 136px;
  height: 18px;
}

.i-dollar-house {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/dollar-house-v2.svg?v1) no-repeat;
  width: 124px;
  height: 35px;
  border:0;
  margin: 0;
  text-indent: -99999px;
  background-size: 123px;
  background-position: left center;
}

.i-tu-cambista {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/tu-cambista.svg?v1) no-repeat;
  width: 137px;
  height: 29px;
  margin: 0;
  text-indent: -99999px;
  background-size: 137px;
  background-position: left center;
}

.i-tkambio {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/tkambio.svg?v1) no-repeat;

}

.i-instakash {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/instakash_v2.svg?v1) no-repeat;
  width: 138px;
  height: 29px;
  margin: 0;
  text-indent: -99999px;
  background-size: 138px;
  background-position: left center;
}

.i-cambi {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/cambi.svg?v1) no-repeat;
  width: 135px;
  height: 32px;
  margin: 0;
  text-indent: -99999px;
  background-size: 135px;
  background-position: left center;
}

.i-cambiomundial {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/cambiomundial.svg?v1) no-repeat;
  width: 139px;
  height: 34px;
  margin: 0;
  text-indent: -99999px;
  background-size: 136px;
  background-position: 0px -5px;
}

.i-cambio-seguro {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/cambio-seguro.png?v1) no-repeat;
  width: 132px;
  height: 37px;
  margin: 0;
  text-indent: -99999px;
  background-size: 132px;
  background-position: left center;
}

.i-acomo {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/acomo.svg?v1) no-repeat;
  width: 102px;
  height: 41px;
  margin: 0;
  text-indent: -99999px;
  background-size: 102px;
  background-position: left center;
}

.i-cambista-inka {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/cambista-inka.svg?v1) no-repeat;
  width: 120px;
  height: 37px;
  margin: 0;
  text-indent: -99999px;
  background-size: 120px;
  background-position: left center;
}

.i-cambix {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/cambix.svg?v1) no-repeat;
  width: 135px;
  height: 29px;
  margin: 0;
  text-indent: -99999px;
  background-size: 135px;
  background-position: left center;
}

.i-cambiosol {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/cambiosol.svg?v1) no-repeat;
  width: 138px;
  height: 40px;
  margin: 0;
  text-indent: -99999px;
  background-size: 138px;
  background-position: left center;
}

.i-perudolar {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo-new/perudolar.svg?v1) no-repeat;
  width: 138px;
  height: 40px;
  margin: 0;
  text-indent: -99999px;
  background-size: 138px;
  background-position: left center;
}

.i-roblex {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/roblex.svg?v1) no-repeat;
  width: 138px;
  height: 40px;
  text-indent: -9999px;
  background-size: 109px;
  background-position: left center;
}

.i-terracash {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/terracash.svg?v1) no-repeat;
  width: 100%;
  height: 48px;
  background-position: left center;

}

.i-dlsmoney {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/dlsmoney.svg?v1) no-repeat;
  width: 143px;
  height: 40px;
  text-indent: -9999px;
  background-size: 144px;
  background-position: left center;
}

.i-hirpower {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/hirpower.svg?v1) no-repeat;
  width: 143px;
  height: 44px;
  text-indent: -9999px;
  background-size: 154px;
  background-position: left center;
}
.i-yanki {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/yanki.svg?v1) no-repeat;
  width: 100%;
  height: 48px;
  text-indent: -9999px;
  background-position: left center;
}
.i-tucambiototal {
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/tucambiototal.svg?v1) no-repeat;
  width: 143px;
  height: 48px;
  text-indent: -9999px;
  background-size: 154px;
  background-position: -5px 0;
}
.i-buenbit{
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/buenbit_v2.svg?v1) no-repeat;
  width: 143px;
  height: 40px;
  text-indent: -9999px;
  background-size: 128px;
  background-position: 0 0;
}
.i-inkamoney{
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/inkamoney.svg?v1) no-repeat;
  width: 143px;
  height: 43px;
  text-indent: -9999px;
  background-size: 133px;
  background-position: 0 0;
}
.i-letsbit{
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/letsbit.svg?v1) no-repeat;
  width: 143px;
  height: 43px;
  text-indent: -9999px;
  background-size: 133px;
  background-position: 0 5px;
}
.i-kaspay{
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/kaspay.svg?v1) no-repeat;
  width: 143px;
  height: 43px;
  text-indent: -9999px;
  background-size: 108px;
  background-position: 0 5px;
}
.i-multidolar{
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/multidolar.svg?v1) no-repeat;
  width: 143px;
  height: 43px;
  text-indent: -9999px;
  background-size: 140px;
  background-position: 0;
}
.i-dollarcompany{
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/dollarcompany.svg?v1) no-repeat;
  width: 143px;
  height: 43px;
  text-indent: -9999px;
  background-size: 113px;
  background-position: 0;
}
.i-rapidex{
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/rapidex.svg?v3) no-repeat;
  width: 143px;
  height: 43px;
  text-indent: -9999px;
  background-size: 135px;
  background-position: 0;
}
.i-securex{
  background: url(https://cuantoestaeldolar.pe/dist/img/logo/securex-2.svg?v2) no-repeat;
  width: 143px;
  height: 43px;
  text-indent: -9999px;
  background-size: 135px;
  background-position: 0;
}
.responsive {
    background-size: 100% 100%;
}
</style>
