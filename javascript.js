function validarMes() {
    var mes1 = "11"
    var mes2 = "11"
    var mes3 = "11"
    var mes4 = "11"
    var mes5 = "11"
    var mes6 = "11"
    var mes7 = "11"
    var mes8 = "11"
    var mes9 = "11"
    var mes10 = "11"
    var mes11 = "11"
    var mes12 = "11"

    if (mes1.lenght > 1 || mes2.lenght > 1 || mes3.lenght > 1 || mes4.lenght > 1 || mes5.lenght > 1 || mes6.lenght > 1 || mes7.lenght > 1 || mes8.lenght > 1 || mes9.lenght > 1 || mes10.lenght > 1 || mes11.lenght > 1 || mes12.lenght > 1) {
        return ("Calculo feito com sucesso")
    }
    else {
        return ("Preencha o campo corretamente")
    }
}
/*function valid() {
    if (validarMes() === true) {
        console.log("Calculo feito com sucesso")
    }
    else if ((validarMes() === false)) {
        console.log("Preencha o campo corretamente")
    }
}*/

console.log(validarMes())