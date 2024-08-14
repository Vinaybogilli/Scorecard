const display=document.getElementById("display")
const display1=document.getElementById("wickets")
const display2=document.getElementById("display2")
const tar=document.getElementById("tar")

let score=0;
let balls=0;
let x=0;
let w=0;
let s="";
let prev=0;
let Flag=false;
let rem=0;
let t=0;
let flag1=true;

function appendtodisplayNB(input){
    if(Flag && flag1){
        score+=1;
        prev=10;
    }
    else{
        Flag=true;
    }
    
    s+="NB,"
    rem=3;
    
    if(score>t && t != 0 ){
        display.value=("Match completed");
        flag1=false;
    }
    else{

    
    display2.value=s;
    display.value=("score:"+score +" " +"overs:"+x+"."+balls);
    display1.value=("w:"+w);
    tar.value=("T:"+t);

    }
    
}

function appendtodisplayWide(input){
    if(Flag && flag1){
        score+=1;
        prev=20;
    }
    else{
        Flag=true;
    }
    
    s+="WD,"
    rem=3;
    
    if(score>t && t != 0 ){
        display.value=("Match completed");
        flag1=false;
    }
    else{

    
    display2.value=s;
    display.value=("score:"+score +" " +"overs:"+x+"."+balls);
    display1.value=("w:"+w);
    tar.value=("T:"+t);

    }
    
}


function appendtodisplay0(input){
    Flag=false;
    if(flag1){
        score+=0;
    }
    balls+=1;
    prev=0;
    if(balls%6==0){
        x+=1;
        s+="0";
        s+=" ";
       
        
        s+="||";
        balls=0;
        rem=4;
    }
    else{
        s+="0,";
        rem=2;
    }

    if(score>t && t != 0 ){
        display.value=("Match completed");
        flag1=false;
    }
    else{

    
    display2.value=s;
    display.value=("score:"+score +" " +"overs:"+x+"."+balls);
    display1.value=("w:"+w);
    tar.value=("T:"+t);

    }
    
}

function appendtodisplay1(input){
    Flag=false;
    if(flag1){
        score+=1;
    }
    balls+=1;
    prev=1;
    if(balls%6==0){
        x+=1;
        s+="1";
        s+=" ";
        
        
        s+="||";
        balls=0;
        rem=4;
    }
    else{
        s+="1,";
        rem=2;
    }

    if(score>t && t != 0 ){
        display.value=("Match completed");
        flag1=false;
    }
    else{

    
    display2.value=s;
    display.value=("score:"+score +" " +"overs:"+x+"."+balls);
    display1.value=("w:"+w);
    tar.value=("T:"+t);
    }
    
}

function appendtodisplay2(input){
    Flag=false;
    if(flag1){
        score+=2;
    }
    balls+=1;
    prev=2;
    if(balls%6==0){
        x+=1;
        s+="2";
        s+=" ";
        
        
        s+="||";
        balls=0;
        rem=4;
    }
    else{
        s+="2,";
        rem=2;
    }
    if(score>t && t != 0 ){
        display.value=("Match completed");
        flag1=false;
    }
    else{

    
    display2.value=s;
    display.value=("score:"+score +" " +"overs:"+x+"."+balls);
    display1.value=("w:"+w);
    tar.value=("T:"+t);

    }
    
}

function appendtodisplay3(input){
    Flag=false;
    if(flag1){
        score+=3;
    }
    balls+=1;
    prev=3;
    if(balls%6==0){
        x+=1;
        s+="3";
        s+=" ";
        
        rem=4;
        s+="||";
        balls=0;
    }
    else{
        s+="3,";
        rem=2;
    }

    if(score>t && t != 0 ){
        display.value=("Match completed");
        flag1=false;
    }
    else{

    
    display2.value=s;
    display.value=("score:"+score +" " +"overs:"+x+"."+balls);
    display1.value=("w:"+w);
    tar.value=("T:"+t);

    }
    
}

function appendtodisplay4(input){
    Flag=false;
    if(flag1){
        score+=4;
    }
    balls+=1;
    prev=4;
    if(balls%6==0){
        x+=1;
        s+="4";
        s+=" ";
       
        rem=4;
        s+="||";
        balls=0;
    }
    else{
        s+="4,";
        rem=2;
    }

    if(score>t && t != 0 ){
        display.value=("Match completed");
        flag1=false;
    }
    else{

    
    display2.value=s;
    display.value=("score:"+score +" " +"overs:"+x+"."+balls);
    display1.value=("w:"+w);
    tar.value=("T:"+t);

    }
    
}

function appendtodisplay6(input){
    Flag=false;
    if(flag1){
        score+=6;
    }
    balls+=1;
    prev=6;
    if(balls%6==0){
        x+=1;
        s+="6"
        s+=" ";
        
        rem=4;
        s+="||";
        balls=0;
    }
    else{
        s+="6,";
        rem=2;
    }


    if(score>t && t != 0 ){
        display.value=("Match completed");
        flag1=false;
    }
    else{

    
    display2.value=s;
    display.value=("score:"+score +" " +"overs:"+x+"."+balls);
    display1.value=("w:"+w);
    tar.value=("T:"+t);
    }
    
}


function appendtodisplayplus1(input){
    if(flag1){
        score+=1;
    }
    s += "+1,";
    prev=100;
    rem=3;

    if(score>t && t != 0 ){
        display.value=("Match completed");
        flag1=false;
    }
    else{

    
    display2.value=s;
    display.value=("score:"+score +" " +"overs:"+x+"."+balls);
    display1.value=("w:"+w+"||"+"T:"+t);

    }
    
}

function appendtodisplayplus2(){
    if(flag1){
        score+=2;
    }
    s += "+2,";
    prev=200;
    rem=3;

    if(score>t && t != 0 ){
        display.value=("Match completed");
        flag1=false;
    }
    else{

    
    display2.value=s;
    display.value=("score:"+score +" " +"overs:"+x+"."+balls);
    display1.value=("w:"+w);
    tar.value=("T:"+t);

    }
    
}



function Target(){
    Flag=false;
    score+=1;
    t=score;
    display.value=("Target:"+" "+score);
    score=0;
    balls=0;
    x=0;
    w=0;
    s+="||--2nd--||";
    display2.value=s;
    display1.value=("w:"+w);
    tar.value=("T:"+t);
    
    
}

function cleardisplay(){
    Flag=false;
    flag1=true;
    display.value=(" ");
    display1.value=(" ");
    display2.value=(" ");
    tar.value=(" ");
     score=0;
     balls=0;
     x=0;
     w=0;
     s="";
     prev=0;
     Flag=false;
     rem=0;
     t=0;
}

function appendtodisplaywicket(input){
    Flag=false;
    w+=1;
    s+="w,"
    display1.value=("w:"+w+"||"+"T:"+t);
    score+=0;
    balls+=1;
    if(balls%6==0){
        x+=1;
        s+="||";
        balls=0;
    }
    display2.value=s;
    display.value=("score:"+score +" " +"overs:"+x+"."+balls);
    display1.value=("w:"+w);
    tar.value=("T:"+t);

}

function appendtodisplayprev(){
    flag1=true;
    if(prev===10 && Flag){
        score-=1;
    }
    else if(prev===20 && Flag){
        score-=1;
    }
    else if(prev===0 && Flag){
        Flag=false;
        score-=0;
    }
    else if(prev===100){
        score-=1;
    }
    else if(prev===200){
        score-=2;
    }
    else{
        score-=prev;
        balls-=1;
        if(balls===-1){
            x-=1;
            balls=5;
        }
    }
    

    s=s.slice(0,-rem);
    display2.value=s;
    display.value=("score:"+score +" " +"overs:"+x+"."+balls);
    display1.value=("w:"+w);
    tar.value=("T:"+t);
}