let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let str = "";
let arrButton = Array.from(buttons);

arrButton.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '=') {
            str = eval(str);
            input.value = str;
        }

        else if(e.target.innerHTML == 'AC') {
            str = "";
            input.value = str;
        }

        else if(e.target.innerHTML == "DE") {
            str = str.substring(0, str.length-1);
            input.value = str;
        }
        else{
            str += e.target.innerHTML;
            input.value = str;
        }
    })
})