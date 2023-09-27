alert('Do you wanna play a game?')
//variaveis
const screen1 = document.querySelector('.screen1') // feito para evitar muitas repetiçoes dentro das funcções
const screen2 = document.querySelector('.screen2') // feito para evitar muitas repetiçoes dentro das funcções
const btnTry = document.querySelector('#btnTry')// criei o objeto/variavel
const btnReset = document.querySelector('#btnReset')// criei o objeto/variavel
let randomNumber = Math.round(Math.random() * 10)
let tentativas = 1

//eventos
btnTry.addEventListener('click', handleTryClick)//callback da função
btnReset.addEventListener('click', handleResetClick)//callback da função
document.addEventListener('keydown', handleResetEnter)//callback da função

//funções
function handleTryClick(event) {
  event.preventDefault() /*observação ao fim do script */

  const inputNumber = document.querySelector('#inputNumber')

  if(Number(inputNumber.value) == randomNumber){
    screen1.classList.add('hide')
    screen2.classList.remove('hide')
    screen2.querySelector('h2').innerText = `Acertou em ${tentativas} tentativas`//pesquisa dentro do elemento pelo h2
  }
  inputNumber.value = ''
  tentativas++
}
function handleResetClick(){
  
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
  tentativas = 1
  randomNumber = Math.round(Math.random() * 10)
}
function handleResetEnter(event){
  if(event.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}

/*event.preventDefault() é uma função que impede do padrão ser feito, estamos trabalhando com botão(button),
ou seja, o normal seria ele submeter o formulario ao fim do procedimento, mas utilizamos este evento para 
impedir o fluxo normal da aplicação.  */