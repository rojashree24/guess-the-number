let btn=document.getElementById('btn');
let output=document.getElementById('op');
let number=[Math.floor(Math.random()*100)]

btn.addEventListener('click',function(){
    let input=document.getElementById('input').value;
    if(document.querySelector('.container input').value.length==0){
        alert('please enter a number')
    }
    else if(input===number){
        output.innerHTML=`You guessed right , your number was ${number}`;
    }
    else if(input>number){
        output.innerHTML='You guessed too high'
    }
    else{
        output.innerHTML='You guessed too low'
    }
});