export default async function({ store, redirect, route }) {
  let auth = sessionStorage.getItem('auth');
  auth = JSON.parse(auth);
  if(auth === null && route.path !== '/'){
    //ログインしていない場合はログインページへ遷移
    return redirect('/');
  }else if(auth !== null){
    //ログイン情報をストアに保存
    store.dispatch('setAuth', auth);
  }
}
