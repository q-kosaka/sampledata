//canvas用
const canvas = document.getElementById('imageBox');
const c = canvas.getContext('2d');
const makeimage = document.getElementById("makeimage");
const download = document.getElementById("download");
const download_dataURL = document.getElementById("download_dataURL");
const download_blob = document.getElementById("download_blob");
const download_blobURL = document.getElementById("download_blobURL");

const srcs = [ //画像リスト
    '../assets/images/sample.jpg',
    '../assets/images/sample2.jpg',
];
let imgs = [];//画像用配列
for (var i in srcs) { //配列の中に画像格納
    imgs[i] = new Image();
    imgs[i].src = srcs[i];
}
let loadCount = 1;//呼び出し用番号設定
for (var i in imgs) { //画像配置
    imgs[i].addEventListener('load', function() {
        if (loadCount == imgs.length) {
            let x = 0;//画像の表示x軸初期設定
            let y = 0;//画像の表示x軸初期設定
            for (var j in imgs) {
                c.drawImage(imgs[j], x, y, 1200, 900);//呼び出された画像設定
                x += 0;
                y += 900;
            }
        }
        loadCount++;
    }, false);
}

function toBlob(base64) {
	const byteString = atob(base64.replace(/^.*,/, ''));
	const content = new Uint8Array(byteString.length);
	for (var i = 0; i < byteString.length; i++) {
		content[i] = byteString.charCodeAt(i);
	}
	const blob = new Blob([content], {type: 'image/png'});
	return blob;
}

makeimage.addEventListener('click', function(){//画像ダウンロードのパス作成
    const dataURLlink = canvas.toDataURL('image/png');//jpgの場合('image/jpeg', 0.85)第二引数で圧縮率の設定
    const blob = toBlob(dataURLlink);//DataURLをblobに変換
    const blobLink = URL.createObjectURL( blob );//blob情報をリンクに変換
    //dataURLでのダウンロード処理等
    download.setAttribute('download', 'download_dataURL.png');
    download.setAttribute('href', dataURLlink);
    download_dataURL.setAttribute('href', dataURLlink);
    //blobでのダウンロード処理等
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