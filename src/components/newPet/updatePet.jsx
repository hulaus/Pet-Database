import supabase from '../../config/supabaseClient'
import { useState, useEffect } from 'react'
import '../newPet/styles.css'
import { useParams, useNavigate } from 'react-router-dom'



export default function Update() {
    const { id } = useParams()
    
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [birth_date, setBirth_date] = useState('')
    const [health_issues, setHealth_issues] = useState('')
    const [comments, setComments] = useState('')
    const [formError, setFormError] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault()

        if (!name || !birth_date || !health_issues || !comments){
            setFormError('Please fill in all areas')
            return
        }

        
        const {} = await supabase
            .from('pets')
            .update([{name, birth_date, health_issues, comments}])
            .eq('id', id)
    }

    useEffect(() => {
        const fetchPets = async () => {
            const { data, error } = await supabase
            .from('pets')
            .select()
            .eq('id', id)
            .single()

            if (error) {
                navigate('/Home', { replace: true})
            } 
            if (data) {
                setName(data.name)
                setBirth_date(data.birth_date)
                setHealth_issues(data.health_issues)
                setComments(data.comments)
            }
        }
        fetchPets()
    }, [id, navigate])

    return (
        <div>
        <section className="section container">
        <form name="contact" id="contact-form" onSubmit={handleSubmit}>
        <h1 className="title" id="contact">Create A New Pet Patient Profile</h1>
     
        <div className="field" >
            <label className="label" htmlFor="firstName">First Name</label>
            <div className="control">
                <input
                required
                className="input"
                type="text"
                autoFocus placeholder="First Name"
                name="firstName"
                />
            <label className="label"  htmlFor="lastName">Last Name</label>
            <div className="control">
                <input
                required
                className="input"
                type="text"
                autoFocus placeholder="Last Name"
                name="lastName"
                />
            </div>
            </div>

        </div>

        <div className="field">
            <label className="label" htmlFor="name">Pet Name</label>
            <div className="control">
                <input 
                required
                className="input"
                type="text"
                autoFocus placeholder="Pet's Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                />
            </div>
        </div>

        <div className="field">
            <label className="label" htmlFor="Birthdate">Date of Birth</label>
            <div className="control has-icons-left">
                <input
                className="input"
                type="date"
                required
                autoFocus placeholder="Birthday input"
                name="Birthdate"
                onChange={(e) => setBirth_date(e.target.value)}
                />
            </div>
        </div>

        <div className="field">
            <label className="label" htmlFor="healthIssues">Health Issues?</label>
            <div className="healthIssues">
                <input
                className="input"
                type="text"
                required
                autoFocus placeholder="Health Issues"
                name="healthIssues"
                onChange={(e) => setHealth_issues(e.target.value)}
                />
            </div>
        </div>

        <div className="field">
            <label className="label" htmlFor="comments">Anything we should know?</label>
            <div className="comments">
                <input
                className="input"
                type="text"
                required
                autoFocus placeholder="Extra Information"
                name="comments"
                onChange={(e) => setComments(e.target.value)}
                />
            </div>
        </div>
        <div>
            <button type="submit">Update</button>
        </div>
        </form>
    </section>
    </div>
    )
}