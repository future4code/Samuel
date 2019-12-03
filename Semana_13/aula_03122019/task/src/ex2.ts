// definindo o objeto do tipo 'post':
type post = {
    autor: string,
    texto: string
}

// criando um array de posts, com 5 elementos:
const posts: post[] = [
    {
        autor: "Autor A",
        texto: "Esse é o texto 1 do autor A"
    },
    {
        autor: "Autor B",
        texto: "Esse é o texto 1 do autor B"
    },
    {
        autor: "Autor A",
        texto: "Esse é o texto 2 do autor A"
    },
    {
        autor: "Autor C",
        texto: "Esse é o texto 1 do autor C"
    },
    {
        autor: "Autor A",
        texto: "Esse é o texto 3 do autor A"
    },
]

// função que retorna os posts de um autor específico
function ex2(meusPosts: post[], autor: string): post[] {
    return meusPosts.filter((elem) =>{
        return (elem.autor === autor)
    })
}

console.log(ex2(posts, "Autor A"));