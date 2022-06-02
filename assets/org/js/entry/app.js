const agent = navigator.userAgent;//UA取得　末尾に『.toLowerCase()』をつけると小文字に変換
let text = document.getElementById('text');
let uatext = document.getElementById('uatext');
let uadtext = document.getElementById('uadtext');
let uadtext1 = document.getElementById('uadtext1');
let uadtext2 = document.getElementById('uadtext2');
let uadtext3 = document.getElementById('uadtext3');
if ('userAgentData' in navigator) {
    // userAgentData が有効なので、userAgentDataで判定をする
    const useAgentData = navigator.userAgentData;
    const useAgentDatabrand = useAgentData.brands;
    let browser = '';
    useAgentDatabrand.forEach(function(brand_data){
        browser += brand_data.brand+',';
    });
    text.innerHTML = '取得出来ている';
    uatext.innerHTML = agent;
    uadtext.innerHTML = useAgentData;
    uadtext1.innerHTML = useAgentData.platform;
    uadtext2.innerHTML = browser;
    uadtext3.innerHTML = useAgentData.mobile;

} else {
    // userAgentData が無効なので、既存のユーザーエージェント判定をする
    text.innerHTML = '取得出来ていない';
    uatext.innerHTML = agent;
    uadtext.innerHTML = '取得出来ず';
    uadtext1.innerHTML = '取得出来ず';
    uadtext2.innerHTML = '取得出来ず';
    uadtext3.innerHTML = '取得出来ず';
}