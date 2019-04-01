import Vuex from 'vuex'

const createStore = () => {
   return new Vuex.Store({
      strict: process.env.NODE_ENV !== 'production',
      state: () => ({
         //ログインユーザー情報
         auth: {},
         todoList: {
            todo: [
               { title: 'スズキ', content: 'ほげだだほげ' },
               { title: "佐藤", content: 'sあいうえだｓお' }
            ],
            wip: [
               { title: '田中', content: 'ほげほだｓｄげ' },
               { title: "アイオダイン", content: 'sあいだｓｄうえお' }
            ],
            done: [
               { title: '樹種', content: 'ほげだｄほげ' },
               { title: "ｈしう", content: 'sあいだｄさうえお' }
            ]
         }
      }),
      mutations: {
         setAuth(state, payload) {
            state.auth = {
               uid: payload.uid,
               userName: payload.userName
            }
         },
         setTodoList(state, payload){
            state.todoList = payload;
         }
      },
      actions: {
         setAuth(store, payload){
            store.commit('setAuth', payload);
         },
         setTodoList(store, payload){
            store.commit('setTodoList', payload);
         }
      }
   })
}

export default createStore;