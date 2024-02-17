// en este archivo vamos a trabahar la api de la documentacion de rick and Morty para la extraccion de dtis
//https://rickandmortyapi.com/documentation/
import axios from 'axios'

//creamos una url base paa manipularla para diferentes peticiones

const basedUrl = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
    timeout: 5000,
    timeoutErrorMessage: 'error de peticion'
})
//https://rickandmortyapi.com/api/character
//cree=amos una funcion par la peticion get de los personajes
export const getPersona = async()=> {
    const result = await basedUrl.get('character');
    const data = result.data
    console.log(data.results)
    return data.results
}