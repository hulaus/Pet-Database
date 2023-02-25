import { useState, useEffect } from 'react'
import './styles.css'

export default function Petlog() {
    const [pets, setPets] = useState ([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4005/api/pets/')
            const json = await response.json()
            setPets(json)
        }
        fetchData()
    }, [])
    
    return(
        <div className="Pet-Log">
        <h1>Pet Log</h1>
        <ul>
            { pets.map((Pet, index) => (
            <li key={index}>
                <div className='petName'>{Pet.name}</div>
                <div className='petBirth'>{Pet.birth_date}</div>
                <div className='petHealth'>{Pet.health_issues}</div>
                <div className='petComment'>{Pet.comments}</div>
            </li>
            ))}
        </ul>
        </div>
    )
}