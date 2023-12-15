//Função gerar voucher
function voucher() {
    let nos = String.fromCharCode(78, 79, 83);
    let meo = String.fromCharCode(77, 69, 79);
    let vdf = String.fromCharCode(86, 68, 70);

    const operador = [nos, meo, vdf];

    let maiuscula1 = String.fromCharCode((Math.random() * 25) + 65);
    let maiuscula2 = String.fromCharCode((Math.random() * 25) + 65);
    let maiuscula3 = String.fromCharCode((Math.random() * 25) + 65);
    let maiuscula4 = String.fromCharCode((Math.random() * 25) + 65);
    let minuscula1 = String.fromCharCode((Math.random() * 25) + 97);
    let minuscula2 = String.fromCharCode((Math.random() * 25) + 97);
    let minuscula3 = String.fromCharCode((Math.random() * 25) + 97);
    let algarismo1 = Math.floor(Math.random() * 10);
    let algarismo2 = Math.floor(Math.random() * 10);

    const codigo = [maiuscula1, maiuscula2, maiuscula3, maiuscula4, minuscula1, minuscula2, minuscula3, algarismo1, algarismo2];
    codigo.sort(function(){return 0.5 - Math.random()});

    const cores = ['green', 'aquamarine', 'yellow', 'yellowgreen', 'lightblue', 'white', 'pink', 'darkblue', 'red', 'orange', 'orangered', 'purple', 'gray', 'darkchid', 'darkmagenta', 'darkred'];

    document.getElementById("voucher").innerHTML = operador[Math.floor(Math.random() * 3)] + "-" + codigo.join("");
    document.getElementById("cor").style.backgroundColor = cores[Math.floor(Math.random() * 17)];
}
voucher()