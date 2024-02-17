function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value) //arredonda o numero para cima (teto)
    const max = Math.floor(document.querySelector(".input-max").value) //arredonda o numero para baixo (chão)

    if (min >= max) {
        alert("O primeiro numero tem de ser menor que o segundo número")

    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        alert("o numero sorteado é " + result)
    }

}