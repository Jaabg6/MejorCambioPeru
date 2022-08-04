<template>
  <div>
    
    <NavbarMain />
    <HeadMain />
    <ListBanks />
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
   

  


    
  </div>
</template>

<script>
import ListBanks from '../components/ListBanks.vue';



export default {
    data() {
        return {};
    },
    async mounted() {
        this.socket = this.$nuxtSocket({
            name: "main",
            persist: "main", // persist data in vuex
        });
        this.socket.on("connect", () => {
            this.statusFrontend = "Conectado y funcionando";
            this.socket.on("event-frontend", () => {
                this.statusBackend = "Conectado y funcionando";
            });

            this.socket.on("server:sendData", (data) => {
                this.$store.commit("setExchanges", data[0]);
                // console.log("🚀 ~ file: index.vue ~ line 39 ~ this.socket.on ~ data", data[0])
                this.$store.commit("setSunat", data[1]);
                this.$store.commit("setBancos", data[2]);

                // this.$store.commit("setExchanges", data.casasDeCambio);
                // this.$store.commit("setSunat", data.grupoSunat);
                // this.$store.commit("setBancos", data.BancosTradicionales);

                // this.$store.commit("setExchange", data[0][0]);
                // this.$store.commit("setWorstExchange", data[0][data[0].length - 1]);
                // this.$store.commit("setSecondExchange", data[0][1]);
                // console.log("🚀 ~ file: index.vue ~ line 42 ~ this.socket.on ~ data[2]", data[2])
                
            })
        });
    },
    components: { ListBanks }
};
</script>

<style>
body {
  background: rgb(34, 34, 34);
}
.vh-100 {
  height: 100vh !important;
}

.responsive {
    background-size: 100% 100%;
}
</style>
