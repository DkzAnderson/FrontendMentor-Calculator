const $ = (element)=> document.querySelector(element);
const $all = (element)=> document.querySelectorAll(element);
const input = $('.mid h2');

let values = {
    a: undefined,
    b: undefined,
    op1: undefined,
    op2: undefined
}
let result = undefined;

let themes = {
    light : $all('.themes')[0],
    dark  : $all('.themes')[1],
    custom: $all('.themes')[2],
    barSet: $('.bar div'),
    body  : $('body')
}

themes.light.addEventListener('click', ()=>{
    changeTheme(0);
});
themes.dark.addEventListener('click', ()=>{
    changeTheme(1);
});
themes.custom.addEventListener('click', ()=>{
    changeTheme(2);
});

function changeTheme(value){
    let i = 'theme-'
    themes.body.classList.remove(`${i}light`);
    themes.body.classList.remove(`${i}dark`);
    themes.body.classList.remove(`${i}custom`);
    switch (value) {
        case 2:
            themes.barSet.style.left = '48px'
            themes.body.classList.add(`${i}custom`);
            break;

        case 1:
            themes.barSet.style.left = '25px'
            themes.body.classList.add(`${i}dark`);
            break;

        default:
            themes.barSet.style.left = '4px'
            themes.body.classList.add(`${i}light`);
            break;
    }
}

function btn(value){
    input.innerText += value;
}

function getData(value){

    if(values.a == undefined){
        values.a = parseFloat(input.textContent);
        input.innerText = ""
    }
    values.op1 = value;    
}

function operation(type){
    values.b = parseFloat(input.textContent);
    values.op2 = type;

    let add = () =>{
        return values.a + values.b;
    }

    let subtract = () =>{
        return values.a - values.b;
    }

    let split = () => {
        return values.a / values.b;
    }

    let multiply = () =>{
        return values.a * values.b
    }

    if(values.op2 == 'result'){
        switch (values.op1) {
            case '+':
                    result = add();
                break;

            case '-':
                    result = subtract();
                break;

            case '/':
                    result = split();
                break;

            case '*':
                    result = multiply();
                break;
        
            default:

                break;
        }
    }

    switch (values.op2) {
        case 'DEL':
            input.innerText = ""; 
            break;

        case 'reset':
            values.a = undefined;
            values.b = undefined;
            values.op1 = undefined;
            values.op2 = undefined;
            input.innerText = "";
            break;
    }
    
    if(values.op1 == '+' || values.op1 == '-' || values.op1 == '*' || values.op1 == '/'){
        input.innerText = result;
    }
}

function keyborad(){
    let get
    document.addEventListener('keyup', ()=>{
        get = event.key
        switch (get) {
            case '0':
                get = parseInt(get);
                btn(get);
                break;

            case '1':
                get = parseInt(get);
                btn(get);
                break;
            case '2':
                get = parseInt(get);
                btn(get); 
                break;
            case '3':
                get = parseInt(get);
                btn(get);
                break;
            case '4':
                get = parseInt(get);
                btn(get);
                break;
            case '5':
                get = parseInt(get);
                btn(get);
                break;
            case '6':
                get = parseInt(get);
                btn(get);
                break;
            case '7':
                get = parseInt(get);
                btn(get);
                break;
            case '8':
                get = parseInt(get);
                btn(get);
                break;
            case '9':
                get = parseInt(get);
                btn(get);
                break;
            case '+':
                getData('+')
                break;
            case '-':
                getData('-')
                break;
            case '*':
                getData('*')
                break;
            case '/':
                getData('/')
                break;
            case 'Enter':
                operation('result');
                break;
            case 'Backspace':
                operation('DEL')
                break;
            case '.':
                btn('.');
                break;
            default:
                break;
        }
    })
    
}

keyborad();