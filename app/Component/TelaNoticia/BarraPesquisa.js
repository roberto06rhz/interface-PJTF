const content = document.querySelector('.content')
const button = document.querySelector('.requisicaoApi')
const inputSearch = document.querySelector("input[type='search']")
const h1 = document.querySelector('h1')


async function funcao(){
    console.log('você me apertou! ')
  const resposta =  await (await fetch('http://localhost:3100/deputado')).json()
console.log(resposta)
}

button.addEventListener('click', funcao)
let items = []

inputSearch.oninput = () =>{
    content.innerHTML = "";
    
    items.filter((item) =>
    item.toLowerCase().includes(inputSearch.value.toLowerCase()))
    .forEach((item) => addHTML(item))
}

function addHTML(item,id , url){
    const div = document.createElement("div")
    const a = document.createElement('a')
    a.innerHTML = item 
    a.setAttribute('href', `../html/aba1.html`)
    div.appendChild(a)
    content.appendChild(div)
}

fetch("https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome")
.then((data) => data.json())
.then((users) =>{
     console.log(users)
    users.dados.forEach((user) =>{
        addHTML(user.nome,user.id, user.uri)
        items.push(user.nome)
    })
})

