import { useState, useEffect } from 'react'

export default function Petlog() {
    const [pets, setPets] = useState ([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:400/api/pets/')
            const json = await response.json()
            setPets(json)
        }
        fetchData()
    }, [])
    
    return(
        <div>
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