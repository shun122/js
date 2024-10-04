// let で変数を定義
let testaaaaaaaaaaaa = "hello world!";

//test = "hello world2!!"

//定数 変更でききない
const test_aaa = "hello world!!!!!!!!!";

//配列
let inoki = ["いーち","にーい","さーん","だー"];

//繰り返し　ループ文
// let index = 0;
// while(index < inoki.length){
//     //繰り返したい命令
//     console.log(inoki[index]);
//     index++;
// }

//関数 上書きしないからconst
const test = (arg) => {
    // if / else
    if(inoki.length > arg){
        console.log("あーーーー");
    }
    else{
        console.log("aaaaaaaaaa");
    }
};

//オブジェクト
const test2 = {
    color: "pink",
    size: "large",
    purfume: "mint",
    goToilet: () => {
        console.log("bbbbbbbbbbbbbbbbbbbbb");
    }
};

// test2.goToilet();

// window.alert("hello world");


document.getElementsByTagName("button")[0].addEventListener("click", () => {
    //命令を書く
    window.alert("hello world!!");
});