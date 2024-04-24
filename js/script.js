// ini file js

let isReverse = false;

function reverse() {
    let cToF = document.getElementById('c-to-f')
    let fToC = document.getElementById('f-to-c')

   if (isReverse) {
        console.log(isReverse);
        fToC.style.display = "block";
        cToF.style.display = "none";
        isReverse = false;

   } else {
        console.log(isReverse);
        cToF.style.display = "block";
        fToC.style.display = "none";
        isReverse = true;
   }
}

function convert() {
    let celcius = document.getElementById('c-to-f-input').value;
    if (isNaN(celcius)) {
        alert("tolong input nomer")
    }
    console.log('celcius');
}

// document.getElementById("button-convert").addEventListener('click', () => convert());
