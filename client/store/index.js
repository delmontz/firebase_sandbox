import Vuex from 'vuex'

const createStore = () => {
   return new Vuex.Store({
      strict: process.env.NODE_ENV !== 'production',
      state: () => ({
         counter: 0
      }),
      mutations: {
         increment(state, payload) {
            state.counter += payload.amount;
         }
      },
      actions: {
         actIncrement(store, payload){
            store.commit('increment', payload);
         }
      }
   })
}

export default createStore