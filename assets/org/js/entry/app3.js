/*
const observer = new IntersectionObserver(Views, options); //要素が指定した範囲で要素が見えているか監視
const options = {//監視エリアの設定
    root: null,//nullだとブラウザの画面
    rootMargin: '0px',//監視を開始するまでの余白（正の直で実際に見える領域外を指定）
    threshold: [0, 1]//コールバックを実行する交差の閾値リスト
};
//ターゲットの指定
const targets = document.querySelectorAll('.t-content');//交差した際のターゲットのクラス名
//ターゲットの要素を登録
targets.forEach(target => {
  observer.observe(target); //observerにobserveメソッドを追加して監視
});

//コールバック
function Views(entries) {
  //検知したものでisIntersectingがtureかどうか確認
    entries.forEach(entry => {
        if (entry.isIntersecting) { //tureならば
            entry.target.classList.add('active')
        } else { //falseならば（classをつけたままにする場合は、elseは不要）
            entry.target.classList.remove('active')
        }
    });
}
*/

import inViews from "modules/inViews";
new inViews({
    elemment: document.querySelectorAll( '.js-inView' ),
    root : null,//デフォルトは『null』
    className: "active",
    rootMargin: '0px',
    threshold: [0.1, 0.8],
    reverse: false,
    callback: ()=>{}
});
import inViews2 from "modules/inViews";
new inViews2({
    elemment: document.querySelectorAll( '.js-inViewin' ),
    root : '#aaa',//デフォルトは『null』
    className: "active2",
    rootMargin: '0px',
    threshold: [0.1, 0.8],
    reverse: true,
    callback: ()=>{}
});
