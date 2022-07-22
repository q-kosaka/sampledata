/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
//canvas用
var canvas = document.getElementById('imageBox');
var c = canvas.getContext('2d');
var makeimage = document.getElementById("makeimage");
var download = document.getElementById("download");
var download_dataURL = document.getElementById("download_dataURL");
var download_blob = document.getElementById("download_blob");
var download_blobURL = document.getElementById("download_blobURL");
var srcs = [//画像リスト
'../assets/images/sample.jpg', '../assets/images/sample2.jpg'];
var imgs = []; //画像用配列

for (var i in srcs) {
  //配列の中に画像格納
  imgs[i] = new Image();
  imgs[i].src = srcs[i];
}

var loadCount = 1; //呼び出し用番号設定

for (var i in imgs) {
  //画像配置
  imgs[i].addEventListener('load', function () {
    if (loadCount == imgs.length) {
      var x = 0; //画像の表示x軸初期設定

      var y = 0; //画像の表示x軸初期設定

      for (var j in imgs) {
        c.drawImage(imgs[j], x, y, 1200, 900); //呼び出された画像設定

        x += 0;
        y += 900;
      }
    }

    loadCount++;
  }, false);
} //dataURL（base64）からblobへ変換


function toBlob(base64) {
  var byteString = atob(base64.replace(/^.*,/, '')); //base64をデコード

  var content = new Uint8Array(byteString.length); //8 ビット符号なし整数値の配列を生成

  for (var i = 0; i < byteString.length; i++) {
    content[i] = byteString.charCodeAt(i);
  }

  var blob = new Blob([content], {
    type: 'image/png'
  }); //blobを作成

  return blob;
}

makeimage.addEventListener('click', function () {
  //画像ダウンロードのパス作成
  var dataURLlink = canvas.toDataURL('image/png'); //jpgの場合('image/jpeg', 0.85)第二引数で圧縮率の設定

  var blob = toBlob(dataURLlink); //DataURLをblobに変換

  var blobLink = URL.createObjectURL(blob); //blob情報をリンクに変換
  //dataURLでのダウンロード処理等

  download.setAttribute('download', 'download_dataURL.png');
  download.setAttribute('href', dataURLlink);
  download_dataURL.setAttribute('href', dataURLlink); //blobでのダウンロード処理等

  download_blob.setAttribute('download', 'download_blob.png');
  download_blob.setAttribute('href', blobLink);
  download_blobURL.setAttribute('href', blobLink);
});
/*
download.addEventListener('click', function(){//画像ダウンロード
    let a = document.createElement('a');
    a.href = blobLink;
    //ダウンロード時のファイル名を指定
    a.download = 'download.png';
    //クリックイベントを発生
    a.click();
});
*/
/******/ })()
;