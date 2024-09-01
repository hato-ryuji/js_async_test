function asyncSquare(value, delay){
    return new Promise((resolve, reject) => {
        console.count('run_asyncProcess');
        setTimeout(() => {
            if(value){
                resolve(value ** 2); //成功の場合のリターン
            }else{
                reject('入力値は数字でなければいけません'); //失敗の場合のリターン
            }
        }, delay)
    });
}

async function main(){
    let result1 = await asyncSquare(2, 10);
    let result2 = await asyncSquare(result1, 10);
    let result3 = await asyncSquare(result2, 10);
    return result3; 
}

main()
    .then(response => console.log(response))
    .catch(error => console.error(`エラー：${error}`));