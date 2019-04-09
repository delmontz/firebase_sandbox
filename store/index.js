import Vuex from 'vuex'

const createStore = () => {
   return new Vuex.Store({
      strict: process.env.NODE_ENV !== 'production',
      state: () => ({
         //ログインユーザー情報
         auth: {},
         todoList: {
            todo: [
               'hoge1dんfそfふ',
               'んjぢbふぃhふぉhふぉ'
            ],
            wip: [
               'hoge1fslんfskjfんdんfそfふ',
               'んjぢbふぃh３９０４８４０９ふぉhふぉ'
            ],
            done: [
               'ほいげっっと',
               'んjぢbfdkfdjfkふぃhふぉhふぉ'
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