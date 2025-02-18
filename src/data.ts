let products = [{
    tag: "computers",
    stock: [
        {
            name: "Computador 1"
        },
        {
            name: "Computador 2"
        },
        {
            name: "Computador 3"
        }
    ]
},
{
    tag: "electronics",
    stock: [
        {
            name: "Eletrônico 1"
        },
        {
            name: "Eletrônico 2"
        },
        {
            name: "Eletrônico 3"
        }
    ]
},
{
    tag: "books",
    stock: [
        {
            name: "Livro 1"
        },
        {
            name: "Livro 2"
        },
        {
            name: "Livro 3"
        }
    ]
}
]
export function getProducts(){
    return products;
}

export function getProductsByTag(tag : string){
    return products.find(product => product.tag === tag);
}