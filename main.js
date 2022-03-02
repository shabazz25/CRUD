'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')


//JSON Cliente
const tempClient = {
    nome: "Andrédddw",
    email: "andre@gmail.com",
    celular: "11951728549",
    cidade: "São Roque"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('dbClient')) ?? []
//JSON.stringfy transforma o objeto em string
const setLocalStorage = (dbClient) => localStorage.setItem("dbClient", JSON.stringify(dbClient))


const deleteClient = (index) =>{
    const dbClient = readClient()
        dbClient.splice(index, 1)
        setLocalStorage(dbClient)
    

   
}

const updateClient = (index, client) => {
const dbClient= readClient()
dbClient[index]= client
setLocalStorage(dbClient)

}

//CRUD - Ler CLIENTE
const readClient = () => getLocalStorage()

//CRUD - Função criar Cliente
const createClient = (client) => {
    const dbClient = getLocalStorage()
    //console.log(dbClient)
    dbClient.push(client)
    setLocalStorage(dbClient)



}


document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)