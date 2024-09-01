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

asyncProcess('タイムアウト長め',1000)
    .then(
        response => {
            console.log(response);
            asyncProcess('成功後にさらに呼び出し');
        }) //成功の場合の処理
    .catch(error => console.log(`エラー：${error}`));

let aaaa = 'aaaa';
console.log(`ああああ：${aaaa}`);