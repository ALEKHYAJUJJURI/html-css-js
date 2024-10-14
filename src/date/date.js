let dateVal = document.getElementById('date');
let timerVal = document.getElementById('timer');
date = new Date() //12-12-2023 23:33:34
console.log(`${date}<br/>`)
console.log(date.toLocaleString())


let months = ['Jan','Feb','Mar','April','May','June','July','Aug','Sept','Oct','Nov','Dec']
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','SaturDay'];

function SetTimer(){
    let timeNow = new Date()
    timerVal.innerHTML = `<h4 class="text-success"><b>${timeNow.toLocaleTimeString()}</b></h4>`
}

function SetDAte(){
    dateVal.innerHTML = `<b>${days[date.getDay()]} ${date.getDate()}, ${months[date.getMonth()]} ${date.getFullYear()}</b>
    <br/>
    `
}
function SalutationFun(){
    let hrs = date.getHours();
    let msg = document.getElementById('wish');
    if(hrs>0 && hrs<=12){
        msg.innerHTML = `Good Morning <img src="/images/good-mrng.gif" />`;
        dateVal.classList = 'class1';
    }else{
        if(hrs>12 && hrs<=17){
            msg.innerHTML=`<img src="/images/200w.gif"/>`;
        }
        else if(hrs>17 && hrs<=22){
            msg.innerHTML = `<img id='evening' src="/images/sunset.gif"/>`;
             dateVal.classList = 'class2';
        }
        else{
            msg.innerHTML = `<img src="/images/night.gif" />`
            dateVal.classList = 'class3';
        }
   }   
}

function bodyLoad(){
    SetDAte();
    setInterval(SetTimer,1000);
    SalutationFun();
    Abc(10)
    Print();
}


function Abc(a){
    return a+b(2,5);
}
function b(c,d){
    return c*d
}
function Xyz(arr){
    return arr;
}

function Print(){
    Xyz([1,2,3,4,5]).map(function(m){
        console.log(m)
    })
}
