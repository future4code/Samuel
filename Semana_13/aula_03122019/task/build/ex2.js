const posts = [
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
        texto: "Esse é o texto 1 do autor D"
    },
    {
        autor: "Autor A",
        texto: "Esse é o texto 3 do autor A"
    },
];
function ex2(meusPosts, autor) {
    return meusPosts.filter((elem) => {
        return (elem.autor === autor);
    });
}
console.log(ex2(posts, "Autor B"));
//# sourceMappingURL=ex2.js.map