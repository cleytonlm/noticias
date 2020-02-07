const API_KEY = '0f7db5ba25984e99afa2c21304b3ba47';

let config = {
    method: "GET"
}

let boardNoticias = document.querySelector('#card-group')
let btnCarregar = document.querySelector("#btncarregar")





function mostraNaTela (listanoticias){
    listanoticias.forEach((noticia)=>{
        let novaNoticia =`<div class="col-md-4">
            <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${noticia.title}</h5>
                <p class="card-text">${noticia.description}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                <button type="button" class="btn btn-primary">Ver noticias Completa </button>
            </div>
            </div>
            `
            boardNoticias.insertAdjacentHTML('beforeend',novaNoticia)
        


    })
}

btnCarregar.onclick = () =>{
    let resposta = fetch ('https://newsapi.org/v2/top-headlines?country=br&apiKey='+ API_KEY,config)
    .then((resposta)=>{
         return resposta.json()
    })                    
    
    .then((json)=>{
    
        mostraNaTela(json.articles)
    
    })
}
