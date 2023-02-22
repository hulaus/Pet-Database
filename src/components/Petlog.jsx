import { useState, useEffect } from "react"

export default function Petlog() {
    const [Pet, setPet] = useState ([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4005/api/Pet')
            const json = await response.json()
            setPet(json)
        }
        fetchData()
    }, [])
    
    return(
        <div>
        <h1>Pet Log</h1>
        <ul>
            {Pet.map((pets, index) =>(
            <li key={index}>
                <div>{pets.name}</div>
                <div>{pets.Birth_date}</div>
            </li>
            ))}
        </ul>
        </div>
    )
}