const dataProductos = [
    {
        id:'1',
        nombre:'Laptop',
        precio: 5500,
        stock: 30
    },
    {
        id:'2',
        nombre:'Celular',
        precio: 1500,
        stock: 20
    },
    {
        id:'3',
        nombre:'Tablet',
        precio: 650,
        stock: 16
    }
]

export const findAll = () => {
    return dataProductos;
}