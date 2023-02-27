import { useState, useEffect } from 'react'
import '../newPet/styles.css';
import { BrowserRouter } from 'react-router-dom'
import supabase from '../../config/supabaseClient';
import { useNavigate } from 'react-router-dom'



function NewPet() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [birth_date, setBirth_date] = useState('')
    const [health_issues, setHealth_issues] = useState('')
    const [comments, setComments] = useState('')
    const [formError, setFormError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!name || !birth_date || !health_issues || !comments){
            setFormError('Please fill in all areas')
            return
        }

        const {} = await supabase
            .from('pets')
            .insert([{name, birth_date, health_issues, comments}])
    }

    return(
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
                <button type="submit">Submit</button>
            </div>
            </form>
        </section>
        </div>
    )}



export default NewPet