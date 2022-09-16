let x = document.getElementById('screen');


function one(){
    x.innerHTML += 1;
}

function two(){
    x.innerHTML += 2;
}

function three(){
    x.innerHTML += 3;
}
function four(){
    x.innerHTML += 4;
}
function five(){
    x.innerHTML += 5;
}
function six(){
    x.innerHTML += 6;
}
function seven(){
    x.innerHTML += 7;
}
function eight(){
    x.innerHTML += 8;
}
function nine(){
    x.innerHTML += 9;
}
function zero(){
    x.innerHTML += 0;
}

function zero(){
    x.innerHTML += 0;
}

function add(){
    x.innerHTML += '+';
}
function subtract(){
    x.innerHTML += '-';
}
function multiply(){
    x.innerHTML += '*';
}
function divide(){
    x.innerHTML += '/';
}

function erase(){
    x.innerHTML = '';
}

function backspace(){
    x.innerHTML = x.innerHTML.slice(0, -1);
}

function equal(){
    x.innerHTML = eval(x.innerHTML);
}

function press(event) {
    let x = event.key;

    switch(x) {

        case 'Escape':
            erase();
            break;

        case '0':
            zero();
            break;

        case '1':
            one();
            break;

        case '2':
            two();
            break;

        case '3':
            three();
            break;

        case '4':
            four();
            break;

        case '5':
            five();
            break;

        case '6':
            six();
            break;

        case '7':
            seven();
            break;

        case '8':
            eight();
            break;

        case '9':
            nine();
            break;
        
        case  '+':
            add();
            break;

        case  '-':
            subtract();
            break;    
        case  '*':
            multiply();
            break;
        
        case  '/':
            divide();
            break; 
        
        case '=':
            equal();
            break;

        case 'Backspace':
            backspace();
            break;
    }

    /*if (x === 'e'){
        equal();
    }
   else if (x === 'Escape') {
        
    }*/
}



