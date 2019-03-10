//firebaseUIの初期化
var config = {
　 apiKey: "AIzaSyCFtEMGDLWmGByStjtv9INuQCRJZSBs7Yg",
　 authDomain: "hackfesfuk.firebaseapp.com"
};
firebase.initializeApp(config);

//firebaseUIインスタンス化
var ui = new firebaseui.auth.AuthUI(firebase.auth());

//firebaseUIの設定
var uiConfig = {
    callback: {
        signInSuccess: function(currentUser, currential, redirectUrl) {
          //signIn成功時のコールバックメソッド
          //戻り値で自動的にリダイレクトするのか指定
          //リダイレクト：ユーザーに別のURLを見せる仕組み
          return false;
        }
    },
    //リダイレクトではなくポップアップで
    signInFlow: "popup",
    signInSuccessUrl: "../base.html",//任意のURL
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    //サービス利用規約のURL
    tosUrl: "https://twitter.com/kubo_programer"//任意のURL
}
ui.start("#firebaseui-auth-container",uiConfig);
/*
$(function() {
  $(".authBtn").click(function() {
    ui.start("#firebaseui-auth-container",uiConfig);
  });
});*/