import extend from "./extend";
export default class inViews{
    constructor( config ){
        const _T = this;
        _T.config = {
            elemment: document.querySelectorAll( '.js-inView' ),//交差した際のターゲットのクラス名
            root : null,//nullだとブラウザの画面（'#hog'）などで対象を変更可
            className: "add-inView",//表示時につけるクラス名
            rootMargin: '0px',//監視を開始するまでの余白（正の直で実際に見える領域外を指定）
            //threshold: [0, 1],//コールバックを実行する交差の閾値リスト
            reverse: false,//コールバックを実行する交差の閾値リスト
        };
        _T._execute = _T._execute.bind( _T );
        _T.count = 0;
        if( config ) extend( _T.config , config );;
        const observer = new IntersectionObserver(Views, options); //要素が指定した範囲で要素が見えているか監視
        const options = {//監視エリアの設定
            root: _T.config.root,
            rootMargin: _T.config.rootMargin,
            //threshold: _T.config.threshold
        };
        const targets = _T.config.elemment;//ターゲットの指定
        targets.forEach(target => {//ターゲットの要素を登録
            observer.observe(target); //observerにobserveメソッドを追加して監視
        });
        function Views(entries) {//検知したものでisIntersectingがtureかどうか確認
            entries.forEach(entry => {
                if(config.reverse == true){ //reverseがtureならば
                    if (entry.isIntersecting) { //tureならば
                        entry.target.classList.add(config.className)
                    } else { //falseならば
                        entry.target.classList.remove(config.className)
                    }
                } else { //reverseがfalseならば
                    if (entry.isIntersecting) {
                        entry.target.classList.add(config.className)
                    }
                }
            });
        }
    }
    _execute(){
        const _T = this;
    }
}