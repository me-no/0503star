var  colorList = [
    ["birth", "#438cb5", 7],//438cb5
    ["blueline" , "#002136", 4],
    ["bk" , "#000009", 2],
    ["white" , "#ffffff",  14],
    ["orangen" , "#fbbc25", 3],
    ["skinb" , "#f3d48f", 6],
    ["skinn" , "#ffecae", 10],
    ["brown" , "#342832", 2]   
]

var squareList = [];

let img;
let font;

function preload() {
    // Font
    font = loadFont("assets/misaki_gothic.ttf");

    // Images
    //img = loadImage("assets/hackle-top.png");
    //img = loadImage("assets/hackle-bottom2.png");
    img = loadImage("assets/hackle-star.png");
}

function setup () {
    createCanvas(1024, 1024);
    noFill();
    background(0,33,54);
    for (col of colorList) {
        for(i = 0; i < col[2]; i++) {
            squareList.push(col[1]);
        }
    }
}

function draw() {
    // 等倍のサイズは128x128
    // 8倍で座標を決める

    // 円の半径を決める
    // ランダムな円を108 個生成
    for (k=0; k<108; k++) {
        x = int(random(0, 128))*8;
        y = int(random(0, 128))*8;
        r = int(random(1, 15))*2-1;// 奇数で出力
        tr = random(30, 100);
        for (i = 0; i < r; i++) {
            j = (r - i)/2;
            l = r - j*2;
            fill(255,255,255,tr);
            for (t = 0; t<l; t++) {
                rect(x+t*8, y+i*8, 8,8);
            }
        }
    }

    // ランダムな星を生成
    //読み込んだ画像の表示
    image(img, 0, 64);//top
    noLoop();
}