// Carne = 400g por pessoa / se a duração for maior que 6 horas = 650g por pessoa
// Cerveja = 1200ml por pessoa / se a duração for maior que 6 horas = 2000ml por pessoa
// Refrigerante/Agua = 1000 ml por pessoa / se a duração for maior que 6 horas = 1500ml por pessoa
// Crianças valem metade de uma pessoa 0.5

let a = document.getElementById("adultos");
let c = document.getElementById("criancas");
let d = document.getElementById("duracao");

let error = document.getElementById("errorMsg");
let result = document.getElementById("rContainer");

function calc() {
    const aV = a.value * 1;
    const cV = c.value * 0.5;
    const dV = d.value * 1;

    if (dV === 0) {
        error.innerText = "*Insira uma duração válida*";
    } else if (aV == 0 && cV == 0 && dV > 0) {
        error.innerText = "*Insira os valores indicados*";
    } else {
        error.innerText = "";

        if (dV >= 6) {
            carne = 650;
            cerveja = 2000;
            refriAgua = 1500;
        } else {
            carne = 400;
            cerveja = 1200;
            refriAgua = 1000;
        }

        let tCarne = (carne * (aV + cV)) / 1000;
        let tCerveja = Math.ceil((cerveja * aV) / 355);
        let tRefriAgua = Math.ceil((refriAgua * (aV + cV)) / 2000);

        result.style.display = "block";
        result.innerHTML =
            `<h1 class="c">Resultado</h1>` +
            `<p><span>${tCarne}</span> Kg de Carne</p>` +
            `<p><span>${tCerveja}</span> Latas de Cerveja</p>` +
            `<p><span>${tRefriAgua}</span> Garrafas Pet's de 2L em Bebidas</p>`;
    }
}
