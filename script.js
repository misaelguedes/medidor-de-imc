function calcular() {
    let peso = document.getElementById('ipeso')
    let altura = document.getElementById('ialtura')
    let res = document.getElementById('res')
    let kg = (peso.value)
    let alt = (altura.value)
    let imc = kg / (alt ^ 2)

    if (peso.value.length == 0 && altura.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else if (peso.value.length == 0) {
        window.alert('Por favor, digite o peso!')
    } else if (altura.value.length == 0) {
        window.alert('Por favor, digite a altura!')
    }

    res.innerHTML = `IMC: ${imc.toFixed(2).replace('.', ',')} <br>`

    if (imc == 0 || alt == 0) {
        res.innerHTML = ''
    } else if (imc < 17) {
        res.innerHTML += 'STATUS: MUITO ABAIXO DO PESO'
        res.style.color = 'red'
    } else if (imc < 18.5) {
        res.innerHTML += 'STATUS: ABAIXO DO PESO'
        res.style.color = 'rgb(182, 182, 0)'
    } else if (imc < 25) {
        res.innerHTML += 'STATUS: PESO IDEAL'
        res.style.color = 'green'
    } else if (imc < 30) {
        res.innerHTML += 'STATUS: SOBREPESO'
        res.style.color = 'rgb(182, 182, 0)'
    } else if (imc < 35) {
        res.innerHTML += 'STATUS: OBESIDADE'
        res.style.color = 'red'
    } else if (imc < 40) {
        res.innerHTML += 'STATUS: OBESIDADE SEVERA'
        res.style.color = 'red'
    } else {
        res.innerHTML += 'STATUS: OBESIDADE MÓRBIDA'
        res.style.color = 'red'
    }

    altura.value = ''
    peso.value = ''

}