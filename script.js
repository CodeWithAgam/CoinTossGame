/*
 * This is the javascript with a function to toss the coin and play the audio simultaneously
 * When "Toss The Coin" button is pressed, the below function activates
 */

function toss(){
    let audio = document.getElementById('audio');
    audio.play();
    let num = Math.floor(Math.random()*100);
    if(num%2==0){
        document.getElementById('result').innerHTML = 'Tails';
        document.getElementById('result').style.fontSize = '2em';
    }
    else{
        document.getElementById('result').innerHTML = 'Heads';
        document.getElementById('result').style.fontSize = '2em';
    }
  }