const incrementar = document.getElementById('button1')
const decrementar = document.getElementById('button2')
const contador = document.getElementById('contador')
let i = 0

incrementar.onclick = function(){
  i++
  contador.textContent = i
}

decrementar.onclick = function(){
  if(i == 0) {
    alert('Não pode descrementar mais que 0')
  } else {
    i--
    contador.textContent = i
  }
}

const input = document.querySelector('input')
const span = document.getElementById('caracteres');
const mensagens = document.getElementById('mensagens');

input.addEventListener('keypress', function(event){
  if(event.key == 'Enter'){
    event.preventDefault()

    let mensagem = document.createElement('p')
    mensagem.textContent = input.value

    mensagens.appendChild(mensagem)

    input.value = ''
    span.textContent = '0' + ' caracteres'
  }
})

input.addEventListener('input', function(){
  let txtSemEspaco = input.value.replace(/ /g, '')
  span.textContent = txtSemEspaco.length + ' caracteres'
})


const selectLista = document.getElementById('tipoLista')
const btnAddLista = document.getElementById('btnAddLista')
const areaListas = document.getElementById('areaListas')
const reset = document.getElementById('reset')

btnAddLista.addEventListener('click', function(){
  let tipo = selectLista.value

  let novaLista = document.createElement(tipo)

  for (let j = 1; j <= 3; j++) {
    let item = document.createElement('li')
    item.textContent = 'Item ' + j
    novaLista.appendChild(item)
  }

  areaListas.appendChild(novaLista)
})

reset.addEventListener('click', function(){
  i = 0
  i = ''
  contador.textContent = i
  
  input.value = ''
  span.textContent = ''

  mensagens.innerHTML = ''

  areaListas.innerHTML = ''
})