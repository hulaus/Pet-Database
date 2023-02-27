import { useState, useEffect } from 'react'
import supabase from "../../config/supabaseClient"
import './styles.css'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Update from "../newPet/updatePet"

export default function Petlog() {
    const [fetchError, setFetchError] = useState()
    const [pets, setPets] = useState([])


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
        <div className="Pet-Log">
            {fetchError && (<p>{fetchError}</p>)}
            <h1>Pet Log</h1>
            <ul>
                { pets.map((Pet, index) => (
                <li key={index}>
                    <div className='petName'>{Pet.name}</div>
                    <div className='petBirth'>{Pet.birth_date}</div>
                    <div className='petHealth'>{Pet.health_issues}</div>
                    <div className='petComment'>{Pet.comments}</div>
                    <div>
                        <Link to={"/UpdatePet" + Pet.pet_id}>
                            <button>Update Pet Information</button>
                        </Link>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    )
}