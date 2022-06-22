/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ../mounts/documentRoot/testdata/assets/org/js/module/extend.js
/* harmony default export */ var extend = (function (dest, source) {
  for (var property in source) {
    dest[property] = source[property];
  }

  return dest;
});
;// CONCATENATED MODULE: ../mounts/documentRoot/testdata/assets/org/js/module/inViews.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var inViews = /*#__PURE__*/function () {
  function inViews(config) {
    _classCallCheck(this, inViews);

    var _T = this;

    _T.config = {
      elemment: document.querySelectorAll('.js-inView'),
      //交差した際のターゲットのクラス名
      root: null,
      //nullだとブラウザの画面（'#hog'）などで対象を変更可
      className: "add-inView",
      //表示時につけるクラス名
      rootMargin: '0px',
      //監視を開始するまでの余白（正の直で実際に見える領域外を指定）
      //threshold: [0, 1],//コールバックを実行する交差の閾値リスト
      reverse: false //コールバックを実行する交差の閾値リスト

    };
    _T._execute = _T._execute.bind(_T);
    _T.count = 0;
    if (config) extend(_T.config, config);
    ;
    var observer = new IntersectionObserver(Views, options); //要素が指定した範囲で要素が見えているか監視

    var options = {
      //監視エリアの設定
      root: _T.config.root,
      rootMargin: _T.config.rootMargin //threshold: _T.config.threshold

    };
    var targets = _T.config.elemment; //ターゲットの指定

    targets.forEach(function (target) {
      //ターゲットの要素を登録
      observer.observe(target); //observerにobserveメソッドを追加して監視
    });

    function Views(entries) {
      //検知したものでisIntersectingがtureかどうか確認
      entries.forEach(function (entry) {
        if (config.reverse == true) {
          //reverseがtureならば
          if (entry.isIntersecting) {
            //tureならば
            entry.target.classList.add(config.className);
          } else {
            //falseならば
            entry.target.classList.remove(config.className);
          }
        } else {
          //reverseがfalseならば
          if (entry.isIntersecting) {
            entry.target.classList.add(config.className);
          }
        }
      });
    }
  }

  _createClass(inViews, [{
    key: "_execute",
    value: function _execute() {
      var _T = this;
    }
  }]);

  return inViews;
}();


;// CONCATENATED MODULE: ../mounts/documentRoot/testdata/assets/org/js/entry/app3.js
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

new inViews({
  elemment: document.querySelectorAll('.js-inView'),
  root: null,
  //デフォルトは『null』
  className: "active",
  rootMargin: '0px',
  threshold: [0.1, 0.8],
  reverse: false,
  callback: function callback() {}
});

new inViews({
  elemment: document.querySelectorAll('.js-inViewin'),
  root: '#aaa',
  //デフォルトは『null』
  className: "active2",
  rootMargin: '0px',
  threshold: [0.1, 0.8],
  reverse: true,
  callback: function callback() {}
});
/******/ })()
;