//Node.js用の作りじゃないので、後でNode.js用の方法を調べる。
//This code is not made for Node.js.　I'll study way of Node.js.

async function getContents(...list) {
    for(let name of list){
        let result = await fetch(name);
        yield result.json();
    }
}

async function main() {
    for await(let data of getContents('book1.json')){
        console.log(data.title);
    }
}