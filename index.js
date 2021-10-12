console.log('this is calculator')

let num = document.getElementsByTagName('button')
// console.log(num)

// num.addEventListener('click',a1)
// cant do this bcz ye koi Element nahi hai ye ek array/object  hai 

const screen=document.getElementById('screen')

let screenValue='';
//to store the data enterd for future calculations

for (const item of num) {
    item.addEventListener('click', a1)
    function a1() {
        // console.log('ji')
        // console.log(item.innerText)
        // console.log(item.value) --> it is nothing 

        /*
        let screen=document.getElementById('screen')
        // screen.innerHTML=item.innerText;
        let screenvalue=screen.value;
        screenvalue=(item.innerText);
        console.log(screenvalue)
       */

        // screen.value=item.innerText;
        screen.value+=item.innerText;

        // if(item.innerText=='+'){
        //     screenValue+=screen.value;
        //     console.log(screenValue)
        //     // let val=eval('2+2')
        //     // let val=eval()
        //     // ye yah apar nahi = vale mein lagana hai 
        //     // console.log(val)
        // }

        if (item.innerText == 'X') {
            item.innerText = '*';
            screenValue += item.innerText;
            screen.value = screenValue;
        }else if (item.innerText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (item.innerText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += item.innerText;
            screen.value = screenValue;
        }
/*
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        // ye isliye need haho taki jab koi multipky wale par click kare to jo string generate ho wo valid string ho evaluation ke time 

        // iska dusra alternative hai ki hum log index.html mein hic change kar de 
        */

    }
}


/**
 *  let screen=document.getElementById('screen')
 screen.innerHTML=item.innerText;
 let screenvalue=screen.value;
 screenvalue=(item.innerText);
 console.log(screenvalue)
 
 isse bas value change hui console par dikhi par screen par no response 

 
 *  screen.value=item.innerText;
 ye har bar change kar dega usko to jo pahle likhi huia hai usko mita dega 
 
 * screen.value+=item.innerText; 
ye bilkul ssahi kam karega 

 */