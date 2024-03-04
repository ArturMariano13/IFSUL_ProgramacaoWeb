// com ES5
function ola(){
    console.log('Função antiga, ixquece!')
}

ola();

// a partir da ES6
const ola2 = () => {
    console.log('Arrow Function pik4');
}

ola2();

const somar = (num1, num2) => {
    return Number(num1) + Number(num2);
}

console.log(somar(48932,-1092));