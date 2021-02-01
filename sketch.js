var femaleD, maleD;
var report1;
var femaleB1, maleB1, button;
var bedroom;
var bookSprite, book;
var john, jenna, greta;
var forensic;
var gameState = 0;

function setup(){
    createCanvas(displayWidth,displayHeight);

    femaleD = createSprite(displayWidth/2-350,displayHeight/2);
    femaleD.addImage(femaleDImg);
    
    maleD = createSprite(displayWidth/2+350,displayHeight/2);
    maleD.addImage(maleDImg);

    report1 = createSprite(displayWidth/2+300,displayHeight/2-50);
    report1.addImage(report1Img);
    report1.scale = 1.3;
    report1.visible = false;

    femaleB1 = createSprite(displayWidth/2-200, displayHeight/2-350);
    femaleB1.visible = false;
    femaleB1.addImage(femaleB1Img);
    
    maleB1 = createSprite(displayWidth/2+200, displayHeight/2-350);
    maleB1.visible = false;
    maleB1.addImage(maleB1Img);

    bedroom = createSprite(displayWidth/2+100,displayHeight/2-5);
    bedroom.addImage(bedroomImg);
    bedroom.scale = 2;
    bedroom.visible = false;

    bookSprite = createSprite(displayWidth/2+480,displayHeight/2-40,10,50);
    bookSprite.visible = false;

    book = createSprite(displayWidth/2,displayHeight/2);
    book.addImage(bookImg);
    book.visible = false;

    button = createSprite(displayWidth/2,displayHeight/2+200);
    button.addImage(femaleB1Img);
    button.visible = false;

    john = createSprite(displayWidth/2+150,displayHeight/2-50);
    john.addImage(johnImg);
    john.scale = 1.8;
    john.visible = false;

    forensic = createSprite(displayWidth/2+200,displayHeight/2);
    forensic.addImage(forensicImg);
    forensic.scale = 1.5;
    forensic.visible = false;
}


function preload(){
    femaleDImg = loadImage("images/girl2.png");
    maleDImg = loadImage("images/boy.png");
    report1Img = loadImage("images/report1.png");
    femaleB1Img = loadImage("images/click_here.png");
    maleB1Img = loadImage("images/click_here.png");
    bedroomImg = loadImage("images/bed.png");
    bookImg = loadImage("images/book.png");
    johnImg = loadImage("images/mug shots/john.png");
    forensicImg = loadImage("images/forensic.png");
}

function draw(){
    //initial screen
    if(gameState===0){
        background(247, 225, 228);
        fill("black");
        textSize(50);
        text("CHOOSE YOUR CHARACTER", displayWidth/2-350,displayHeight/2-350);

        //when the female sprite is clicked
        if(mousePressedOver(femaleD)){
            report1.visible = true;
            maleD.visible = false;
            background(188, 217, 212);
            femaleB1.visible = true;
            gameState = 1;
        }
        //when male sprite is clicked
        if(mousePressedOver(maleD)){
            report1.x = displayWidth/2-300;
            report1.visible = true;
            femaleD.visible = false;
            background(188, 217, 212);
            maleB1.visible = true;
            gameState = 1; 
        }
    }
    else if(gameState === 1){
        if(mousePressedOver(femaleB1)){
            femaleD.visible = false;
            report1.visible = false;
            femaleB1.visible = false;
            bedroom.visible = true;
            background("black");
            fill("white");
            textSize(28);
            text("Find" +'\n'+ "Ronald's" +'\n'+ "journal" +'\n'+ "in" +'\n'+ "the" +'\n'+ "bedroom." +'\n'+ "Click on it.", displayWidth/10-100,displayHeight/4);
            forensic.visible = false;
            gameState = 2;
        }
        if(mousePressedOver(maleB1)){
            maleD.visible = false;
            report1.visible = false;
            maleB1.visible = false;
            bedroom.visible = true;
            background("black");
            fill("white");
            textSize(28);
            text("Find" +'\n'+ "Ronald's" +'\n'+ "journal" +'\n'+ "in" +'\n'+ "the" +'\n'+ "bedroom." +'\n'+ "Click on it.", displayWidth/10-100,displayHeight/4);
            forensic.visible = false;
            gameState = 2;
        }
    }
    
    if(gameState === 2){
        forensic.visible = false;
        if(mousePressedOver(bookSprite)){
            background(231, 214, 222);
            bedroom.visible = false;
            book.visible = true;
            femaleB1.visible = false;
            maleB1.visible = false;
            textSize(25);
            fill("black");
            text("Great job! A new suspect-John Richmond-has been discovered!",displayWidth/2-350,displayHeight/6);
            button.visible = true;
        }
        if(mousePressedOver(button)){
            background(16, 64, 108);
            john.visible = true;
            button.visible = false;
            textSize(28);
            fill("white");
            strokeWeight(2);
            text("John was" +'\n'+ "Ronald's music" +'\n'+ "producer." +'\n'+ "Click on him" +'\n'+ "to move on.", displayWidth/10-100,displayHeight/4+50);
        }
    }

    drawSprites();

}


    
    