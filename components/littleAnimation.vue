<template>
    <div class="col-span-5 md:col-span-6 flex align-center">
        <lottie-vue-player class="h-32 my-auto"
                    :src="this.$props.animation"
                    :theme="options.theme"
                    :player-size="options.playerSize"
                    backgroundColor='#b33038'
                    :loop="true"
                    :autoplay="true"
                    :speed="1"
                    :animation-speed="1">
        </lottie-vue-player>
    </div>
</template>

<script>
export default{
    props: {
        animation: {
            type: String,
            // default: 'https://assets9.lottiefiles.com/packages/lf20_fm1uqflj.json'
        }
    },
     data() {
            return {
                options: {
                    minimizable: false,
                    // playerSize: "standard",
                    backgroundColor: '#e63e48',
                    backgroundStyle: 'color',

                }
            }
        }
}
</script>