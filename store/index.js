export const state = () => ({
    exchange: [], // current exchange
    secondExchange: [], // second exchange
    worstExchange: [], // worst exchange
    exchanges: [], //all exchanges
    sunat: [],
    bancos: [],
    shortedByCompra: true,
});

export const getters = {
    getExchange: state => reactive(state.exchanges[0]),
    getSecondExchange: state => reactive(state.exchanges[1]),
    getWorstExchange: state => reactive(state.exchanges[state.exchange.length - 1])
};

export const mutations = {
    setWorstExchange(state, exchange) {
        state.worstExchange = exchange;
    },
    setSecondExchange(state, exchange) {
        state.secondExchange = exchange;
    },
    setExchange(state, exchange) {
        state.exchange = exchange;
    },
    setExchanges(state, exchanges) {
        state.exchanges = exchanges;
    },
    setSunat(state, sunat) {
        state.sunat = sunat;
    },
    setBancos(state, bancos) {
        state.bancos = bancos;
    },

    sortExchanges( state, shortedByCompra ) {
        // console.log("🚀 ~ file: index.js ~ line 29 ~ sortExchanges ~ exchanges", exchanges)
    
            // console.log(exchanges)
            if(shortedByCompra === true){
                state.exchanges.sort((a, b) => {
                    state.shortedByCompra = false; // now sort by venta

                    return a.venta - b.venta
                }
            )}
            if(shortedByCompra === false){
            state.exchanges.sort((a, b) => {
                    state.shortedByCompra = true; // now sort by venta
                    return b.compra - a.compra
                }
            )}
        }
        


};

export const actions = {
    

    // async sortExchanges({ commit, state }, exchanges) {
    // console.log("🚀 ~ file: index.js ~ line 29 ~ sortExchanges ~ exchanges", exchanges)

    //     // console.log(exchanges)

    //     const sortedExchanges = exchanges.sort((a, b) => {
    //         if(state.shortedByCompra === true){
    //             return b.venta - a.venta
    //         }
    //         else{
    //             return b.compra - a.compra
    //         }
    //     })

    //     commit('setExchanges', sortedExchanges)
    //     commit('setSortedByCompra')
        
    // }
};

//function to aparently make the state reactive
function reactive(data) {

    const exchangeExample = {
        title: "",
        compra: "",
        venta: "",
        link: "",
        imgClass: "",
    }

    if(data){
        return data
    }
    else{
        return exchangeExample
    }
}

