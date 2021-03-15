<script>

//JOGO DA SORTE

//jogador 1 digite um número
var n1 = prompt("número do jogador 1:")
n1= parseFloat(n1)

//jogador 2 digite outro número
var n2 = prompt("número do jogador 2:")
n2 = parseFloat(n2)

//se o número for igual, mostar empate
if((n1==n2)){
alert('Empate')

}else{
//sorter um numero entre 0 e 1
var n3 = parseInt( Math.random()* 2)
alert("número sorteado:" + n3)
}

//se o numero sorteado for 0, ganha quem escolher o numero menor
//se o numero sorteado for 1, ganha quem escolher o numero maior

if( (n3===0 && n1<n2) || (n3===1 && n1>n2) ){
    alert('O jogador 1 ganhou!')
}else{
    alert('o jogador 2 ganhou!')
}

</script>   