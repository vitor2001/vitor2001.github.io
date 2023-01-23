function calc() {
    let ct1 = document.getElementById("jan").value
    let ct2 = document.getElementById("fev").value
    let ct3 = document.getElementById("mar").value
    let ct4 = document.getElementById("abr").value
    let ct5 = document.getElementById("mai").value
    let ct6 = document.getElementById("jun").value
    let ct7 = document.getElementById("jul").value
    let ct8 = document.getElementById("ago").value
    let ct9 = document.getElementById("set").value
    let ct10 = document.getElementById("out").value
    let ct11 = document.getElementById("nov").value
    let ct12 = document.getElementById("dez").value
    let select = document.getElementById('select').value
    let selectR = document.getElementById('selectR').value
    let selectP = document.getElementById('selectP').value
    let med = (Number(ct1) + Number(ct2) + Number(ct3) + Number(ct4) + Number(ct5) + Number(ct6) + Number(ct7) + Number(ct8) + Number(ct9) + Number(ct10) + Number(ct11) + Number(ct12)) / 12
    if (ct1 == "") {
        alert("Preencha todos os campos")
        return window.history.go(0)
    } else if (ct2 == "") {
        alert("Preencha todos os campos")
        return window.history.go(0)
    } else if (ct3 == "") {
        alert("Preencha todos os campos")
        return window.history.go(0)
    }
    else if (ct4 == "") {
        alert("Preencha todos os campos")
        return window.history.go(0)
    }
    else if (ct5 == "") {
        alert("Preencha todos os campos")
        return window.history.go(0)
    }
    else if (ct6 == "") {
        alert("Preencha todos os campos")
        return window.history.go(0)
    }
    else if (ct7 == "") {
        alert("Preencha todos os campos")
        return window.history.go(0)
    }
    else if (ct8 == "") {
        alert("Preencha todos os campos")
        return window.history.go(0)
    }
    else if (ct9 == "") {
        alert("Preencha todos os campos")
        return window.history.go(0)
    }
    else if (ct10 == "") {
        alert("Preencha todos os campos")
        return window.history.go(0)
    }
    else if (ct11 == "") {
        alert("Preencha todos os campos")
        return window.history.go(0)
    }
    else if (ct12 == "") {
        alert("Preencha todos os campos")
        return window.history.go(0)
    }
    else

        if (select === "mono") {
            select = 30
        } else if (select === "bi") {
            select = 50
        } else if (select === "tri") {
            select = 100
        }

    if (selectP === "305w") {
        selectP = 305
    } else if (selectP === "320w") {
        selectP = 320
    } else if (selectP === "335w") {
        selectP = 335
    } else if (selectP === "350w") {
        selectP = 350
    } else if (selectP === "365w") {
        selectP = 365
    } else if (selectP === "380w") {
        selectP = 380
    } else if (selectP === "395w") {
        selectP = 395
    } else if (selectP === "410w") {
        selectP = 410
    } else if (selectP === "415w") {
        selectP = 415
    } else if (selectP === "450w") {
        selectP = 450
    } else if (selectP === "475w") {
        selectP = 475
    }


    if (selectR === "nordeste") {
        selectR = 5.9
    } else if (selectR === "norte") {
        selectR = 5.5
    } else if (selectR === "centro") {
        selectR = 5.7
    } else if (selectR === "sudeste") {
        selectR = 5.6
    } else if (selectR === "sul") {
        selectR = 5
    } 1

    let pot = Math.ceil((med - select)) / (selectR * 30 * 0.75)
    let qtd = Math.ceil((1000 * pot) / selectP)

    function refresh() {
        var button = document.createElement('button');
        button.appendChild(document.createTextNode('Fazer novamente'));
        button.style.padding = "19px 39px 18px 39px"
        button.style.color = "#FFF"
        button.style.background = "#1abc9c"
        button.style.fontSize = "18px"
        button.style.textAlign = "center"
        button.style.fontStyle = "normal"
        button.style.width = "auto"
        button.style.border = "1px solid #16a085"
        button.style.borderWidth = "1px 1px 3px"
        button.style.marginBottom = "10px"
        button.style.borderRadius = "5px"
        button.style.margin = "3%"
        button.onclick = function () {
            window.history.go(0);
        }
        document.body.appendChild(button);

    }

    document.getElementById("formulario").innerHTML = `Você precisará de <b>${qtd}</b> placas.`
    document.getElementById("formulario").style.textAlign = "center";
    document.getElementById("formulario").style.padding = "19px 39px 18px 39px";
    document.getElementById("formulario").style.color = "fff";
    document.getElementById("formulario").style.fontSize = "20px";
    document.getElementById("formulario").style.width = "normal"
    refresh()
}