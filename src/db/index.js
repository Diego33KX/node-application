const dataClientes = [
    {
        id:'1',
        nombre:'Diego Edwin',
        apellido:'Flores Jara',
        direccion:'Los Frutales',
        edad:21
    },
    {
        id:'2',
        nombre:'Danna',
        apellido:'Zolano Antara',
        direccion:'El Cruce',
        edad:20
    },
    {
        id:'3',
        nombre:'Jennifer',
        apellido:'Arias Vargas',
        direccion:'Juan Velazco',
        edad:21
    }
]

export const findAll = () => {
    return dataClientes;
}