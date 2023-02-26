import { useState, useEffect } from 'react'
import supabase from "../../config/supabaseClient"
import './styles.css'


export default function Petlog() {
    const [fetchError, setFetchError] = useState()
    const [pets, setPets] = useState ([])


    useEffect(() => {
        const fetchPets = async () => {
            const { data, error } = await supabase
            .from('pets')
            .select()

            if (error) {
                setFetchError('could not fetch')
                setPets()
                console.log(error)
            } 
            if (data) {
                setPets(data)
                setFetchError()
            }
        }
        fetchPets()
    }, [])
    
    return(
        <div>
         <header>
         <input type="search" />
         </header>   
        <h1>Pet Log</h1>
        <ul>
            { pets.map((Pet, index) => (
            <li key={index}>
                <div>{Pet.name}</div>
                <div>{Pet.birth_date}</div>
                <div>{Pet.health_issues}</div>
                <div>{Pet.comments}</div>
            </li>
            ))}
        </ul>
        </div>
    )
}