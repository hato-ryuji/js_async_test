function asyncProcess(value, delay){
    return new Promise((resolve, reject) => {
        console.count('run_asyncProcess');
        setTimeout(() => {
            if(value){
                resolve(`入力値：${value}`); //成功の場合のリターン
            }else{
                reject('入力値は空です'); //失敗の場合のリターン
            }
        }, delay)
    });
}

Promise.race([
        asyncProcess('その１', 1000)
        ,asyncProcess('', 200)
        ,asyncProcess('その３', 1000)
    ])
    .then(aaaa => {
        console.log(aaaa);
        debugger;  //最後まで動かすとデバッガが止まるのでここで止める
    })
    .catch(bbb => console.log(`エラー：${bbb}`))
    .finally(() => console.log('処理終了'));