<template>
  <div>
    
    <NavbarMain />
    <HeadMain />
    <ListBanks />
    <MasInformacion />
    <Footer />
    
  </div>
</template>

<script>
import NavbarMain from '../components/NavbarMain.vue';
import HeadMain from '../components/HeadMain.vue';
import ListBanks from '../components/ListBanks.vue';
import MasInformacion from '../components/MasInformacion.vue';
import Footer from '../components/Footer.vue';


export default {
    components: { ListBanks, MasInformacion , NavbarMain, HeadMain, Footer },

    data() {
        return {};
    },
    async mounted() {
        this.socket = this.$nuxtSocket({
            name: "main",
            persist: "main", // persist data in vuex
        });
        this.socket.on("connect", () => {

            this.socket.on("server:sendData", (data) => {
                this.$store.commit("setExchanges", data[0]);
                this.$store.commit("setSunat", data[1]);
                this.$store.commit("setBancos", data[2]);
                this.$store.commit("setFecha", data[3]);
            })
        });
    },

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
