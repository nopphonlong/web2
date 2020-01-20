let p1 = Math.floor(Math.random()*9);
let p2 = Math.floor(Math.random()*9);
let p3;

let b1 = Math.floor(Math.random()*9);
let b2 = Math.floor(Math.random()*9);
let b3 = 0;
if((b1+b2)%10 < 6){
 b3 = Math.floor(Math.random()*9);
}

document.querySelector('.playernum').textContent = 'เลขที่ออกคือ ' + p1 + ' ' + p2 + ' ';

function gamecheck(){
    if ((p1+p2+p3)%10 > ((b1+b2+b3)%10)){
        document.querySelector('h2').textContent = 'คุณชนะ';
        if((b1+b2)%10 < 6){
            document.querySelector('.h2').textContent = 'เเต้มอีกฝ่ายคือ '+ ((b1+b2+b3)%10) + ' เลขอีกฝ่ายคือ ' +b1 + ' ' + b2 + ' ' + b3 ;
           }else{document.querySelector('.h2').textContent = 'เเต้มอีกฝ่ายคือ '+ ((b1+b2+b3)%10) + ' เลขอีกฝ่ายคือ ' +b1 + ' ' + b2 + ' ';}
    } else if ((p1+p2+p3)%10 < ((b1+b2+b3)%10)){
        document.querySelector('h2').textContent = 'คุณแพ้';
        if((b1+b2)%10 < 6){
            document.querySelector('.h2').textContent = 'เเต้มอีกฝ่ายคือ '+ ((b1+b2+b3)%10) + ' เลขอีกฝ่ายคือ ' +b1 + ' ' + b2 + ' ' + b3;
           }else{document.querySelector('.h2').textContent = 'เเต้มอีกฝ่ายคือ '+ ((b1+b2+b3)%10) + ' เลขอีกฝ่ายคือ ' +b1 + ' ' + b2 + ' ';}
        
    } else if((p1+p2+p3)%10 == ((b1+b2+b3)%10)){
        document.querySelector('h2').textContent = 'เสมอ';
        if((b1+b2)%10 < 6){
            document.querySelector('.h2').textContent = 'เเต้มอีกฝ่ายคือ '+ ((b1+b2+b3)%10) + ' เลขอีกฝ่ายคือ ' +b1 + ' ' + b2 + ' ' + b3;
           }else{document.querySelector('.h2').textContent = 'เเต้มอีกฝ่ายคือ '+ ((b1+b2+b3)%10) + ' เลขอีกฝ่ายคือ ' +b1 + ' ' + b2 + ' ';}
        }
}

function draw (x){
    switch(x) {
        case 1:
            p3 = Math.floor(Math.random()*9);
            document.querySelector('.shatakum').textContent='';
            document.querySelector('.playernum').textContent = 'คุณเลือกจั่ว เลขที่ออกคือ ' + p1 + ' ' + p2 + ' ' + p3 +' คุณได้เเต้ม ' + ((p1+p2+p3)%10);
            gamecheck ();
            console.log((p1+p2+p3)%10)
            console.log((b1+b2+b3)%10)
            break;
        case 2:
            p3 = 0;
            document.querySelector('.shatakum').textContent='';
            document.querySelector('.playernum').textContent = 'คุณเลือกพอ เลขที่ออกคือ ' + p1 + ' ' + p2 + ' '+' คุณได้เเต้ม ' + ((p1+p2+p3)%10) ;
            gamecheck();
            console.log((p1+p2+p3)%10)
            console.log((b1+b2+b3)%10)
            break;
        default :
        document.querySelector('h3').textContent = 'wrong order pls choose 1 or 2';
    }
}

if((p1+p2)%10 < 6){
    document.querySelector('.gg').textContent = 'คะเเนนของท่านยังดูต่ำไปเเนะนำให้จั่วเลขเพิ่ม (เลขตัวเเรกของอีกฝ่ายคือ ' + b1 +' )';
   }else document.querySelector('.gg').textContent = 'คะเเนนของท่านพอใช้ได้หากอยากจั่วเลขเพิ่มควรคำนึงถึงความเสี่ยงก่อน (เลขตัวเเรกของอีกฝ่ายคือ ' + b1 +' )';


